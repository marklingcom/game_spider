System.register("chunks:///game.js", ['cc', "./index-b63adb19.js"], function (_0x4c2c40, _0x3d4983) {
  'use strict';

  var _0x3c3037;
  var _0x184832;
  var _0x453ef5;
  var _0x11b6a5;
  var _0x4747fb;
  var _0x3d3e4a;
  var _0x4bea68;
  var _0x12df1e;
  var _0x165fa8;
  var _0x3fa416;
  var _0x29c2dc;
  var _0x57425c;
  var _0x4500cf;
  var _0x3d5fc5;
  var _0x312a9d;
  var _0x3aabd7;
  var _0x5912ae;
  var _0x4e8861;
  var _0x1ac6c2;
  var _0x16e5b7;
  var _0x2066c9;
  var _0x4abb8d;
  var _0x655674;
  var _0x4765e2;
  var _0x9d34de;
  var _0x3b0c4b;
  var _0x5157ef;
  var _0x16e0e6;
  var _0x211ae8;
  var _0xa8695f;
  var _0x566cb7;
  var _0x558a9d;
  var _0x332b14;
  var _0x30ca45;
  var _0x4f750c;
  var _0x4acdb1;
  var _0x3771d2;
  var _0x42891d;
  var _0xf79e94;
  var _0x4080a5;
  var _0x5786b4;
  var _0xfcc4bb;
  var _0x58fd0b;
  var _0x236349;
  var _0x39494d;
  var _0x107f2d;
  var _0xbc85f;
  var _0x592b8c;
  var _0xd1870d;
  var _0x596459;
  var _0x13ac63;
  var _0x1fbb44;
  var _0x1d3083;
  var _0x5d1d4e;
  var _0xd04387;
  var _0x50323e;
  var _0x53ed64;
  var _0x4c0d42;
  var _0x41eb3f;
  var _0x34bdb0;
  var _0x4dd76e;
  var _0x20fcc0;
  var _0x2ac7b3;
  var _0x2a7344;
  var _0x571f21;
  var _0xf2a38;
  var _0x4454b2;
  var _0x3fdde0;
  return {
    'setters': [function (_0x4c0b9d) {
      _0x3c3037 = _0x4c0b9d.cclegacy;
      _0x184832 = _0x4c0b9d.Enum;
      _0x453ef5 = _0x4c0b9d.v3;
      _0x11b6a5 = _0x4c0b9d._decorator;
      _0x4747fb = _0x4c0b9d.SpriteFrame;
      _0x3d3e4a = _0x4c0b9d.Prefab;
      _0x4bea68 = _0x4c0b9d.log;
      _0x12df1e = _0x4c0b9d.UITransform;
      _0x165fa8 = _0x4c0b9d.Size;
      _0x3fa416 = _0x4c0b9d.Node;
      _0x29c2dc = _0x4c0b9d.Layout;
      _0x57425c = _0x4c0b9d.instantiate;
      _0x4500cf = _0x4c0b9d.tween;
      _0x3d5fc5 = _0x4c0b9d.Sprite;
      _0x312a9d = _0x4c0b9d.error;
      _0x3aabd7 = _0x4c0b9d.Component;
      _0x5912ae = _0x4c0b9d.Animation;
      _0x4e8861 = _0x4c0b9d.Vec3;
      _0x1ac6c2 = _0x4c0b9d.Label;
      _0x16e5b7 = _0x4c0b9d.UIOpacity;
      _0x2066c9 = _0x4c0b9d.ToggleContainer;
      _0x4abb8d = _0x4c0b9d.Button;
      _0x655674 = _0x4c0b9d.SpriteAtlas;
      _0x4765e2 = _0x4c0b9d.sp;
      _0x9d34de = _0x4c0b9d.Tween;
      _0x3b0c4b = _0x4c0b9d.input;
      _0x5157ef = _0x4c0b9d.Input;
      _0x16e0e6 = _0x4c0b9d.KeyCode;
      _0x211ae8 = _0x4c0b9d.screen;
      _0xa8695f = _0x4c0b9d.view;
      _0x566cb7 = _0x4c0b9d.ResolutionPolicy;
      _0x558a9d = _0x4c0b9d.isValid;
    }, function (_0x3a12d9) {
      _0x332b14 = _0x3a12d9._;
      _0x30ca45 = _0x3a12d9.a;
      _0x4f750c = _0x3a12d9.b;
      _0x4acdb1 = _0x3a12d9.c;
      _0x3771d2 = _0x3a12d9.v;
      _0x42891d = _0x3a12d9.l;
      _0xf79e94 = _0x3a12d9.g;
      _0x4080a5 = _0x3a12d9.d;
      _0x5786b4 = _0x3a12d9.h;
      _0xfcc4bb = _0x3a12d9.s;
      _0x58fd0b = _0x3a12d9.B;
      _0x236349 = _0x3a12d9.j;
      _0x39494d = _0x3a12d9.i;
      _0x107f2d = _0x3a12d9.w;
      _0xbc85f = _0x3a12d9.e;
      _0x592b8c = _0x3a12d9.k;
      _0xd1870d = _0x3a12d9.x;
      _0x596459 = _0x3a12d9.y;
      _0x13ac63 = _0x3a12d9.z;
      _0x1fbb44 = _0x3a12d9.A;
      _0x1d3083 = _0x3a12d9.q;
      _0x5d1d4e = _0x3a12d9.D;
      _0xd04387 = _0x3a12d9.E;
      _0x50323e = _0x3a12d9.F;
      _0x53ed64 = _0x3a12d9.G;
      _0x4c0d42 = _0x3a12d9.H;
      _0x41eb3f = _0x3a12d9.I;
      _0x34bdb0 = _0x3a12d9.f;
      _0x4dd76e = _0x3a12d9.C;
      _0x20fcc0 = _0x3a12d9.n;
      _0x2ac7b3 = _0x3a12d9.J;
      _0x2a7344 = _0x3a12d9.K;
      _0x571f21 = _0x3a12d9.L;
      _0xf2a38 = _0x3a12d9.M;
      _0x4454b2 = _0x3a12d9.N;
      _0x3fdde0 = _0x3a12d9.r;
    }],
    'execute': function () {
      _0x3c3037._RF.push({}, "8a828Dkc8tL9ok3XdUMqlGn", "DataStructure", undefined);
      var _0x3b6778 = function () {
        this.Col = 0x0;
        this.Row = 0x0;
        this.Symbol = 0x0;
        this.Symbol_NextUpgrade = 0x0;
      };
      var _0x2daa18;
      _0x3c3037._RF.pop();
      _0x3c3037._RF.push({}, "660adVuqUVHArmxt3MuiWZy", "MW_Define", undefined);
      (function (_0xcbb2e4) {
        _0xcbb2e4[_0xcbb2e4.WAIT_TOUCH = 0x0] = "WAIT_TOUCH";
        _0xcbb2e4[_0xcbb2e4.UNSHOW_PREPARE = 0x1] = 'UNSHOW_PREPARE';
        _0xcbb2e4[_0xcbb2e4.PLATE_SHOW = 0x2] = "PLATE_SHOW";
        _0xcbb2e4[_0xcbb2e4.FEATURE_SHOW = 0x3] = "FEATURE_SHOW";
        _0xcbb2e4[_0xcbb2e4.EFFECTSTART = 0x4] = "EFFECTSTART";
        _0xcbb2e4[_0xcbb2e4.LINKLINE = 0x5] = "LINKLINE";
        _0xcbb2e4[_0xcbb2e4.TILEMATCH = 0x6] = 'TILEMATCH';
        _0xcbb2e4[_0xcbb2e4.SYMBOLFALLING = 0x7] = "SYMBOLFALLING";
        _0xcbb2e4[_0xcbb2e4.AWARD = 0x8] = "AWARD";
        _0xcbb2e4[_0xcbb2e4.SCATTER = 0x9] = "SCATTER";
        _0xcbb2e4[_0xcbb2e4.EFFECTEND = 0xa] = "EFFECTEND";
        _0xcbb2e4[_0xcbb2e4.ROUND_SHOW_END = 0xb] = "ROUND_SHOW_END";
        _0xcbb2e4[_0xcbb2e4.ROUND_END = 0xc] = "ROUND_END";
      })(_0x2daa18 || (_0x2daa18 = {}));
      var _0x44b969 = function () {
        function _0x4b9afc() {}
        _0x4b9afc.OnExit = function () {
          this.AudioClips = {
            'BGM_FG': null,
            'BGM_MG': null,
            'Small_win_01': null,
            'Small_win_02': null,
            'Small_win_03': null,
            'Big_win': null,
            'Big_win_end': null,
            'Collection': null,
            'FlyBug': null,
            'ChangeWin': null,
            'Combo_f': null,
            'Combo_f_x2': null,
            'Combo_f_x3': null,
            'Combo_f_x4': null,
            'FG_getbug': null,
            'FG_End': null,
            'FG_Go': null,
            'FG_way_up': null,
            'Near_win1': null,
            'Fiop1': null,
            'Fiop2': null,
            'Fiop3': null,
            'Fiop4': null,
            'Link': null,
            'Link_fast': null,
            'Transfer': null,
            'Transfer_fast': null,
            'Combo_Declare': null,
            'Combo_f2': null,
            'Reel_run': null,
            'Reel_Stop': null,
            'Scatter1': null,
            'Scatter2': null,
            'Scatter3': null,
            'Scatter_bell': null,
            'Spin': null,
            'Guide_Voice': null
          };
        };
        return _0x4b9afc;
      }();
      var _0x2533b5;
      var _0x5c3468;
      var _0x55f706;
      var _0x478607;
      var _0x5817b6;
      var _0x102cf1;
      var _0xf29f6c;
      var _0x2acfee;
      var _0x4f84ce;
      var _0x37c430;
      var _0x58fcac;
      var _0x302171;
      _0x44b969.Ver = "287";
      _0x44b969.SceneID = 0x1426535;
      _0x44b969.GameId = 0x55;
      _0x44b969.BASIC_SYMBOL_NUMBER = 0x14;
      _0x44b969.NORMAL_SYMBOL_KIND = 0x3;
      _0x44b969.SYMBOL_MOD = 0xa;
      _0x44b969.SPECIAL_NORMAL_SYMBOL_NUMBER = 0x4;
      _0x44b969.TOTAL_NORMAL_SYMBOL_NUMBER = _0x44b969.NORMAL_SYMBOL_KIND * _0x44b969.SYMBOL_MOD;
      _0x44b969.TOTAL_SYMBOL_NUMBER = _0x44b969.TOTAL_NORMAL_SYMBOL_NUMBER + _0x44b969.SPECIAL_NORMAL_SYMBOL_NUMBER;
      _0x44b969.TOTAL_CLIENT_SYMBOL_KIND = _0x44b969.SYMBOL_MOD + _0x44b969.SPECIAL_NORMAL_SYMBOL_NUMBER;
      _0x44b969.COMBOL_LEVEL = 0x4;
      _0x44b969.SYMBOL_SILVER_RATE = 0x1e;
      _0x44b969.SYMBOL_SILVER_RATE_BASE = 0x64;
      _0x44b969.BACKPACkINIT_PLISTPATH = "Text/{0}/GameTextImg";
      _0x44b969.EFFECT_WINVALUE_PATH = 'Fnt/CongratsNum';
      _0x44b969.GAME_ATLAS_PATH = "/Text/";
      _0x44b969.GAME_LOGO_ATLAS_PATH = '/Text/logo';
      _0x44b969.ITEM_PATH = "/MW/common/Item_card";
      _0x44b969.FRAME_NORMAL = 0x0;
      _0x44b969.FRAME_SILVER = 0x1;
      _0x44b969.FRAME_GOLD = 0x2;
      _0x44b969.NORMAL_START = 0x0;
      _0x44b969.SILVER_START = 0xa;
      _0x44b969.GOLD_START = 0x14;
      _0x44b969.SYMBOL_WILD = 0x1e;
      _0x44b969.SYMBOL_SCATTER = 0x1f;
      _0x44b969.SYMBOL_MYS = 0x20;
      _0x44b969.SYMBOL_COLLECTION = 0x21;
      _0x44b969.NORMAL_SYMBOL_SIZE = 0x6;
      _0x44b969.SYMBOL_HEIGHT = [0xd2, 0x8c, 0x69, 0x54, 0x46, 0x3c];
      _0x44b969.SYMBOL_WEIGHT = 0x6e;
      _0x44b969.FREEGAME_COLLECTION_LEVEL = [0x40, 0x2d9, 0x1000, 0x3d09, 0xb640, 0x1cb91];
      _0x44b969.NORMAL_SPIN_ACK = 0.1;
      _0x44b969.TIME_OF_NEARWIN_SPIN = [0x2, 0x2, 0x2, 0x2, 0x2, 0x2];
      _0x44b969.INDEX_BIGWIN = 0x2;
      _0x44b969.INDEX_MEGAWIN = 0x3;
      _0x44b969.INDEX_SUPERWIN = 0x4;
      _0x44b969.ODDS = [0x3, 0x5, 0xa, 0x14, 0x28];
      _0x44b969.FG_COMBOL_RATE = [0x2, 0x4, 0x6, 0xa];
      _0x44b969.MG_COMBOL_RATE = [0x1, 0x2, 0x3, 0x5];
      _0x44b969.SCATTER_NEAR_WIN_LIMIT = 0x2;
      _0x44b969.SCATTER_GOTO_FREEGAME = 0x3;
      _0x44b969.SYMBOL_FALLING_VOLUME_RATE = 0.2;
      _0x44b969.SOUND_KIND_FALLING = 0x4;
      _0x44b969.SHOW_COMBO_MULTIPLEX = 0x1;
      _0x44b969.SHOW_COMBO = 0x2;
      _0x44b969.TRANSFER_ZORDER = 0xa;
      _0x44b969.EXPLORE_ZORDER = 0x0;
      _0x44b969.WAY_SHOW = 0x7;
      _0x44b969.GAMEVIEW_STATE = _0x184832(_0x2daa18);
      _0x44b969.ANI_ACTION_TIME = {
        'FREE_IN_START': 4.5,
        'FREE_IN_LOOP': 0x0,
        'FREE_IN_END': 0x4,
        'FREE_OUT_START': 5.5,
        'FREE_OUT_LOOP': 1.5,
        'FREE_OUT_END': 0.5,
        'FREE_OUT_WIN': 5.5,
        'COMBO_NORMAL': 0.83,
        'COMBO_LEVELUP': 0.83,
        'COMBO_LEVELDOWN': 0x1,
        'COMBO_ON_MIDDLE': 0x0,
        'COMBO_MG_TO_FG': 0.5,
        'COMBO_MG_TO_FG_FadeOut': 0.3,
        'COMBO_MG_TO_FG_HappyShow': 3.9,
        'FREESPIN_NORMAL': 0.02,
        'FREESPIN_PANEL_LEVEL00': 0x1,
        'FREESPIN_PANEL_LEVEL01': 0x1,
        'FREESPIN_PANEL_LEVEL02': 0x1,
        'FREESPIN_COMPLETE': 5.67,
        'FREESPIN_NORMAL_HIT': 0.67,
        'TIME_SHOW_AFTER_TRANS': 0.1,
        'TIME_SHOW_EXPLOSION': 1.28,
        'TIME_SHOW_EXPLOSION_FAST': 0.8,
        'TIME_SHOW_TRANSFER': 3.1,
        'TIME_SHOW_TRANSFER_FAST': 1.7,
        'TIME_SHOW_TRANSFER_ONLY_GOLD': 1.45,
        'TIME_SHOW_TRANSFER_ONLY_GOLD_FAST': 0.8,
        'TIME_SHOW_TRANSFER_SYMBOL': 2.4,
        'TIME_SHOW_TRANSFER_SYMBOL_FAST': 1.3,
        'TIME_SHOW_SCATTER': 1.5,
        'TIME_SHOW_COLLECTION': 0x1,
        'TIME_SHOW_COLLECTION_FLIGHT_LIGHT': 0.8,
        'TIME_SHOW_LITTLEWIN': 0.3,
        'PERCENT_SHOW_LITTLEWIN_NEXT': 0x1,
        'TIME_PANEL_LEVELUP': 0.15,
        'TIME_COLLECTION_PANEL_LEVEL': 0x1,
        'TIME_COLLECTION_PANEL_HIT': 0x0,
        'TIME_COLLECTION_PANEL_NORMAL': 0.2,
        'TIME_COLLECTION_PANEL_COMPLETE': 5.7,
        'TIME_SHOW_ADDLINE_FLIGHT_LIGHT': 4.2,
        'TIME_SHOW_ADDLINE_FLIGHT_LIGHT_MOVE': 0.95,
        'TIME_SHOW_ADDLINE_FLIGHT_LIGHT_MOVE_BLUE': 0.95,
        'BIGWIN_ODDS_ANI_TIME': [0x0, 0x0, 7.5, 8.8, 8.3],
        'BIGWIN_ODDS_ANI_TIME_SHORT': [0x0, 0x0, 5.9, 7.7, 7.8],
        'BIGWIN_ODDS_ANI_TIME_CUT': [0x0, 0x0, 7.35, 8.5, 0x8],
        'BIGWIN_END': 0x1,
        'TIME_SHOW_WAYSWIN': 1.2,
        'TIME_SHOW_WAYSWIN_FAST': 0.8,
        'TIME_FOR_SCATTER_BELL': 0x1,
        'TIME_SHOW_SPINE_SCATTER_START': 0.5,
        'TIME_SHOW_SPINE_COMBO': 0.7,
        'TIME_SHOW_SPINE_COLLENT': 0.5,
        'TIME_SHOW_SCATTER_START': 2.5,
        'TIME_SHOW_SYMBOL_FRAME_FAST': 0.5,
        'TIME_SHOW_SYMBOL_FRAME': 0x1
      };
      _0x44b969.DYNAMIC_ADJUST_TIME = {
        'TIME_SKYFALLING': 0.21,
        'TIME_SKYFALLING_COL': 0.02,
        'TIME_L_FG_Combo_Highline01': 0.35,
        'TIME_L_FG_Combo_Highline02': 0.45
      };
      _0x44b969.ACTION_DELAY_TIME = {
        'TIME_DELAY_TO_LINKLINE': 0x0,
        'TIME_DELAY_SHOW_COMBO': 1.2,
        'TIME_DELAY_SHOW_COMBO_FAST': 0.6,
        'TIME_DELAYSHOW_SMOKE_HARDSTOP': 0x0,
        'TIME_DELAYSHOW_SMOKE_AUTOPLAY': 0.13,
        'TIME_DELAYSHOW_SMOKE': 0x0,
        'TIME_DELAY_AFTER_BIGWIN': 1.2,
        'TIME_DELAY_AFTER_BIGWIN_CUT': 1.4,
        'FREE_TRANSFER_TO_MAIN': 0x0,
        'FREE_SETTLEMENT_SHOW': 1.5,
        'TIME_SHOW_EXPLOSION_BLANK': 0.1,
        'BIGWIN_SHOW_WIN_TIME': [0x0, 0x0, 0x6, 0x6, 6.5],
        'CAN_SKIP_EFFECT': 0x3,
        'TIME_DELAY_GOTO_FREEGAME_BLANK': 3.7,
        'TIME_DELAY_AFTER_FREE_OUT_END_BLANK': 0x0,
        'TIME_DELAY_COMBO_LEVELUP': 0.05,
        'TIME_DELAY_FG_L_END': 0.33
      };
      _0x44b969.SOUND_DELAY_TIME = {
        'TIME_DELAYSOUND_STOPREEL': 0x0
      };
      _0x44b969.AudioFileRoot = 'Sound/';
      _0x44b969.AudioFilePath = {
        'BGM_FG': _0x44b969.AudioFileRoot + 'BGM_FG',
        'BGM_MG': _0x44b969.AudioFileRoot + "BGM_MG",
        'Small_win_01': _0x44b969.AudioFileRoot + "Small_win_01",
        'Small_win_02': _0x44b969.AudioFileRoot + 'Small_win_02',
        'Small_win_03': _0x44b969.AudioFileRoot + 'Small_win_03',
        'Big_win': _0x44b969.AudioFileRoot + "Big_win",
        'Big_win_end': _0x44b969.AudioFileRoot + "Big_win_end",
        'Collection': _0x44b969.AudioFileRoot + "Collection",
        'FlyBug': _0x44b969.AudioFileRoot + "FlyBug",
        'ChangeWin': _0x44b969.AudioFileRoot + 'ChangeWin',
        'Combo_f': _0x44b969.AudioFileRoot + "Combo_f",
        'Combo_f_x2': _0x44b969.AudioFileRoot + "Combo_f_x2",
        'Combo_f_x3': _0x44b969.AudioFileRoot + "Combo_f_x3",
        'Combo_f_x4': _0x44b969.AudioFileRoot + "Combo_f_x4",
        'FG_getbug': _0x44b969.AudioFileRoot + "FG_getbug",
        'FG_End': _0x44b969.AudioFileRoot + "FG_End",
        'FG_Go': _0x44b969.AudioFileRoot + 'FG_Go',
        'FG_way_up': _0x44b969.AudioFileRoot + "FG_way_up",
        'Reel_run': _0x44b969.AudioFileRoot + "Reel_run",
        'Fiop1': _0x44b969.AudioFileRoot + 'Fiop1',
        'Fiop2': _0x44b969.AudioFileRoot + 'Fiop2',
        'Fiop3': _0x44b969.AudioFileRoot + "Fiop3",
        'Fiop4': _0x44b969.AudioFileRoot + 'Fiop4',
        'Link': _0x44b969.AudioFileRoot + 'Link',
        'Link_fast': _0x44b969.AudioFileRoot + "Link_fast",
        'Transfer': _0x44b969.AudioFileRoot + "Transfer",
        'Transfer_fast': _0x44b969.AudioFileRoot + "Transfer_fast",
        'Combo_Declare': _0x44b969.AudioFileRoot + "Combo_Declare",
        'Combo_f2': _0x44b969.AudioFileRoot + "Combo_f2",
        'Near_win1': _0x44b969.AudioFileRoot + "MG_NearWin",
        'Reel_Stop': _0x44b969.AudioFileRoot + "Reel_Stop",
        'Scatter1': _0x44b969.AudioFileRoot + 'Scatter1',
        'Scatter2': _0x44b969.AudioFileRoot + "Scatter2",
        'Scatter3': _0x44b969.AudioFileRoot + "Scatter3",
        'Scatter_bell': _0x44b969.AudioFileRoot + "Scatter_bell",
        'Spin': _0x44b969.AudioFileRoot + "Spin",
        'Guide_Voice': _0x44b969.AudioFileRoot + 'Guide_Voice'
      };
      _0x44b969.AudioClips = {
        'BGM_FG': null,
        'BGM_MG': null,
        'Small_win_01': null,
        'Small_win_02': null,
        'Small_win_03': null,
        'Big_win': null,
        'Big_win_end': null,
        'Collection': null,
        'FlyBug': null,
        'ChangeWin': null,
        'Combo_f': null,
        'Combo_f_x2': null,
        'Combo_f_x3': null,
        'Combo_f_x4': null,
        'FG_getbug': null,
        'FG_End': null,
        'FG_Go': null,
        'FG_way_up': null,
        'Near_win1': null,
        'Fiop1': null,
        'Fiop2': null,
        'Fiop3': null,
        'Fiop4': null,
        'Link': null,
        'Link_fast': null,
        'Transfer': null,
        'Transfer_fast': null,
        'Combo_Declare': null,
        'Combo_f2': null,
        'Reel_run': null,
        'Reel_Stop': null,
        'Scatter1': null,
        'Scatter2': null,
        'Scatter3': null,
        'Scatter_bell': null,
        'Spin': null,
        'Guide_Voice': null
      };
      _0x44b969.SPINE_ANIM_NAME = {
        'combo2': "combo2",
        'combo3': "combo3",
        'combo4': "combo4",
        'fg_combo2': "fg_combo2",
        'fg_combo3': "fg_combo3",
        'fg_combo4': "fg_combo4",
        'fg_collect': "fg_collect",
        'fg_fx_T1': "fg_fx_T1",
        'fg_mystery': "fg_mystery",
        'idle': "idle",
        'idle1': "idle1",
        'idle2': 'idle2',
        'fg_idle': 'fg_idle',
        'fg_idle1': "fg_idle1",
        'fg_idle2': "fg_idle2",
        'scatter_loop': 'scatter_loop',
        'scatter_start': "scatter_start",
        'GameIntro': "GameIntro"
      };
      _0x44b969.SPIN_ACK_TYPE = {
        'AT_SUCCESS': 0x0,
        'AT_MONEY_NOT_ENOUGH': 0x12e,
        'AT_MONEY_ABNORMAL': 0x12d,
        'TRIAL_END': 0x8,
        'AT_MONEY_NOT_ENOUGH_SINGLE': 0x131,
        'API_BETONCE_FAIL': 0x7d3
      };
      _0x44b969.AWARD_TYPE = {
        'AWARD_TYPE_NON': 0x0,
        'AWARD_TYPE_LINE': 0x1,
        'AWARD_TYPE_ALL_PLATE': 0x2,
        'AWARD_TYPE_MAX': 0x7fff
      };
      _0x44b969.AckType = {
        'login': 0x0,
        'exchangeChips': 0x2,
        'info': 0xb,
        'spin': 0xc,
        'buyBonus': 0x24,
        'heartBeat': 0x62,
        'serverMsg': 0x63
      };
      _0x44b969.StringKey = {
        'MW_FEATURES_LEFT': "FEATURE_LEFT",
        'MW_FEATURES_RIGHT': "FEATURE_RIGHT"
      };
      _0x44b969.SERVER_RET_TYPE = {
        'SERVER_SUCCESS': 0x0,
        'SERVER_ERROR_SEATE': 0x31f,
        'SERVER_NOUSE': 0x383,
        'SERVER_MAINTAIN': 0xe7,
        'SERVER_SHUTDOWN': 0xe8,
        'SERVER_NEED_UID': 0xe9,
        'SERVER_NEED_LOGIN': 0xea,
        'SERVER_TOKEN_ERROR': 0xeb
      };
      _0x44b969.LOGIN_RESULT_TYPE = {
        'LOGIN_SUCCESS': 0x0,
        'LOGIN_FAIL': 0xf1,
        'API_VERIFY_FAIL': 0xd3,
        'API_LOGIN_REPEAT_FAIL': 0x7d2
      };
      _0x44b969.HEART_BEAT_STATE = {
        'NOTIFY': 0x61,
        'MAINTAIN': 0x62,
        'CLOSE': 0x63
      };
      _0x44b969.DelayType = {
        'Normal': 0x0,
        'Get': 0x1,
        'NotGet': 0x2
      };
      _0x44b969.TimeoutType = {
        'Ignore': 0x0,
        'Handle': 0x1
      };
      _0x44b969.USE_ITEM_REASON = {
        'NORMAL': 0x0,
        'USING': 0x1
      };
      _0x44b969.FREE_MUTI_BALL_START_POS = {
        'true': [_0x453ef5(0xfa, 0x14a), _0x453ef5(0x199, 0x14a), _0x453ef5(0x238, 0x14a), _0x453ef5(0x2d7, 0x14a), _0x453ef5(0x376, 0x14a)],
        'false': [_0x453ef5(0x138, 0xdc), _0x453ef5(0x1b8, 0xdc), _0x453ef5(0x238, 0xdc), _0x453ef5(0x2b4, 0xdc), _0x453ef5(0x330, 0xdc)]
      };
      _0x44b969.FLY_FIRE_BALL_POS = {
        'true': _0x453ef5(0x5a, 0x1c2),
        'false': _0x453ef5(0x186, 0x1db)
      };
      _0x44b969.BIG_WIN_SCALE = {
        'true': 0x1,
        'false': 0.9
      };
      _0x44b969.BIG_WIN_MASK_SCALE = {
        'true': 0x1,
        'false': 0.633
      };
      _0x44b969.GATA_ANI_SCALE = {
        'true': 0x1,
        'false': 0.58
      };
      _0x44b969.AnimEvent = {
        'AnimEvetFunc': "AnimationEvent",
        'GameIntro_Show': "GameIntro_Show",
        'GameIntro_ShowBar': "GameIntro_ShowBar"
      };
      _0x44b969.ANIM_NAME = {
        'GameIntro_S': "GameIntro_S",
        'GameIntro_L': 'GameIntro_L',
        'GameView_GameIntro_S': "GameView_GameIntro_S",
        'GameView_GameIntro_L': "GameView_GameIntro_L"
      };
      _0x44b969.GAMEINTRO = {
        'Show': 2.5,
        'TotalTimes': 0x5,
        'ShowBar': 3.5
      };
      _0x44b969.FeaturesSpinAck = [{
        'RoundQueue': [{
          'CSD': [{
            'CSS': [[0x9, 0x7, 0x13, 0x0], [0x4, 0x0, 0x11, 0x7, 0x3, 0x4], [0x4, 0x4, 0xf, 0x12, 0x7, 0x9, 0x9], [0x11, 0x0, 0x6], [0x2, 0x0], [0x12, 0xd, 0xb]],
            'CSW': 0x2,
            'CSM': 0x1,
            'MT': 0x20,
            'ADV': [{
              'S': 0x7,
              'C': 0x4,
              'LN': 0x2,
              'WIN': 0x2,
              'GV': [{
                'Col': 0x0,
                'Row': 0x1
              }, {
                'Col': 0x1,
                'Row': 0x2
              }, {
                'Col': 0x1,
                'Row': 0x3
              }, {
                'Col': 0x2,
                'Row': 0x4
              }, {
                'Col': 0x3,
                'Row': 0x0
              }]
            }],
            'FS': [[0x5], [0x9], [0x6], null, null, null],
            'NFS': [null, [0x1d], null, [0x16], null, null]
          }, {
            'CSS': [[0x9, 0x13, 0x0, 0x5], [0x4, 0x0, 0x1d, 0x3, 0x4, 0x9], [0x4, 0x4, 0xf, 0x12, 0x9, 0x9, 0x6], [0x16, 0x0, 0x6], [0x2, 0x0], [0x12, 0xd, 0xb]],
            'CSW': 0x10,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': [{
              'S': 0x9,
              'C': 0x3,
              'LN': 0x8,
              'WIN': 0x10,
              'GV': [{
                'Col': 0x0,
                'Row': 0x0
              }, {
                'Col': 0x0,
                'Row': 0x1
              }, {
                'Col': 0x1,
                'Row': 0x2
              }, {
                'Col': 0x1,
                'Row': 0x5
              }, {
                'Col': 0x2,
                'Row': 0x4
              }, {
                'Col': 0x2,
                'Row': 0x5
              }]
            }],
            'FS': [[0x8], [0x9], [0x2, 0x7], null, null, null],
            'NFS': [[0x15], [0x1e], null, null, null, null]
          }, {
            'CSS': [[0x15, 0x0, 0x5, 0x8], [0x4, 0x0, 0x1e, 0x3, 0x4, 0x9], [0x4, 0x4, 0xf, 0x12, 0x6, 0x2, 0x7], [0x16, 0x0, 0x6], [0x2, 0x0], [0x12, 0xd, 0xb]],
            'CSW': 2.7,
            'CSM': 0x3,
            'MT': 0x20,
            'ADV': [{
              'S': 0x5,
              'C': 0x3,
              'LN': 0x1,
              'WIN': 1.2,
              'GV': [{
                'Col': 0x0,
                'Row': 0x2
              }, {
                'Col': 0x1,
                'Row': 0x2
              }, {
                'Col': 0x2,
                'Row': 0x2
              }]
            }, {
              'S': 0x8,
              'C': 0x3,
              'LN': 0x1,
              'WIN': 1.5,
              'GV': [{
                'Col': 0x0,
                'Row': 0x3
              }, {
                'Col': 0x1,
                'Row': 0x2
              }, {
                'Col': 0x2,
                'Row': 0x3
              }]
            }],
            'FS': [[0x6, 0x1], [0x1], null, null, null, null],
            'NFS': [null, null, [0x16, 0x15], null, null, null]
          }, {
            'CSS': [[0x15, 0x0, 0x6, 0x1], [0x4, 0x0, 0x3, 0x4, 0x9, 0x1], [0x4, 0x4, 0x16, 0x15, 0x6, 0x2, 0x7], [0x16, 0x0, 0x6], [0x2, 0x0], [0x12, 0xd, 0xb]],
            'CSW': 0x1,
            'CSM': 0x5,
            'MT': 0x20,
            'ADV': [{
              'S': 0x1,
              'C': 0x3,
              'LN': 0x2,
              'WIN': 0x1,
              'GV': [{
                'Col': 0x0,
                'Row': 0x0
              }, {
                'Col': 0x0,
                'Row': 0x3
              }, {
                'Col': 0x1,
                'Row': 0x5
              }, {
                'Col': 0x2,
                'Row': 0x3
              }]
            }],
            'FS': [[0x8], [0x4], null, null, null, null],
            'NFS': [[0x1e], null, [0x1e], null, null, null]
          }, {
            'CSS': [[0x1e, 0x0, 0x6, 0x8], [0x4, 0x0, 0x3, 0x4, 0x9, 0x4], [0x4, 0x4, 0x16, 0x1e, 0x6, 0x2, 0x7], [0x16, 0x0, 0x6], [0x2, 0x0], [0x12, 0xd, 0xb]],
            'CSW': 22.5,
            'CSM': 0x5,
            'MT': 0x20,
            'ADV': [{
              'S': 0x0,
              'C': 0x5,
              'LN': 0x2,
              'WIN': 0x3,
              'GV': [{
                'Col': 0x0,
                'Row': 0x0
              }, {
                'Col': 0x0,
                'Row': 0x1
              }, {
                'Col': 0x1,
                'Row': 0x1
              }, {
                'Col': 0x2,
                'Row': 0x3
              }, {
                'Col': 0x3,
                'Row': 0x1
              }, {
                'Col': 0x4,
                'Row': 0x1
              }]
            }, {
              'S': 0x3,
              'C': 0x3,
              'LN': 0x1,
              'WIN': 0x1,
              'GV': [{
                'Col': 0x0,
                'Row': 0x0
              }, {
                'Col': 0x1,
                'Row': 0x2
              }, {
                'Col': 0x2,
                'Row': 0x3
              }]
            }, {
              'S': 0x4,
              'C': 0x3,
              'LN': 0x9,
              'WIN': 13.5,
              'GV': [{
                'Col': 0x0,
                'Row': 0x0
              }, {
                'Col': 0x1,
                'Row': 0x0
              }, {
                'Col': 0x1,
                'Row': 0x3
              }, {
                'Col': 0x1,
                'Row': 0x5
              }, {
                'Col': 0x2,
                'Row': 0x0
              }, {
                'Col': 0x2,
                'Row': 0x1
              }, {
                'Col': 0x2,
                'Row': 0x3
              }]
            }, {
              'S': 0x9,
              'C': 0x3,
              'LN': 0x1,
              'WIN': 0x5,
              'GV': [{
                'Col': 0x0,
                'Row': 0x0
              }, {
                'Col': 0x1,
                'Row': 0x4
              }, {
                'Col': 0x2,
                'Row': 0x3
              }]
            }],
            'FS': [[0x5, 0x5], [0x6, 0x6, 0x6, 0x4, 0x0, 0x6], [0x5, 0x8, 0x0], [0x6], [0x1], null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x6, 0x8, 0x5, 0x5], [0x6, 0x6, 0x6, 0x4, 0x0, 0x6], [0x16, 0x6, 0x2, 0x7, 0x5, 0x8, 0x0], [0x16, 0x6, 0x6], [0x2, 0x1], [0x12, 0xd, 0xb]],
            'CSW': 0x18,
            'CSM': 0x5,
            'MT': 0x20,
            'ADV': [{
              'S': 0x6,
              'C': 0x4,
              'LN': 0x8,
              'WIN': 0x18,
              'GV': [{
                'Col': 0x0,
                'Row': 0x0
              }, {
                'Col': 0x1,
                'Row': 0x0
              }, {
                'Col': 0x1,
                'Row': 0x1
              }, {
                'Col': 0x1,
                'Row': 0x2
              }, {
                'Col': 0x1,
                'Row': 0x5
              }, {
                'Col': 0x2,
                'Row': 0x1
              }, {
                'Col': 0x3,
                'Row': 0x1
              }, {
                'Col': 0x3,
                'Row': 0x2
              }]
            }],
            'FS': [[0x0], [0x9, 0x1, 0x3, 0x5], [0x5], [0x7, 0x9], null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x8, 0x5, 0x5, 0x0], [0x4, 0x0, 0x9, 0x1, 0x3, 0x5], [0x16, 0x2, 0x7, 0x5, 0x8, 0x0, 0x5], [0x16, 0x7, 0x9], [0x2, 0x1], [0x12, 0xd, 0xb]],
            'CSW': 8.5,
            'CSM': 0x5,
            'MT': 0x20,
            'ADV': [{
              'S': 0x0,
              'C': 0x3,
              'LN': 0x1,
              'WIN': 0.5,
              'GV': [{
                'Col': 0x0,
                'Row': 0x3
              }, {
                'Col': 0x1,
                'Row': 0x1
              }, {
                'Col': 0x2,
                'Row': 0x5
              }]
            }, {
              'S': 0x5,
              'C': 0x3,
              'LN': 0x4,
              'WIN': 0x8,
              'GV': [{
                'Col': 0x0,
                'Row': 0x1
              }, {
                'Col': 0x0,
                'Row': 0x2
              }, {
                'Col': 0x1,
                'Row': 0x5
              }, {
                'Col': 0x2,
                'Row': 0x3
              }, {
                'Col': 0x2,
                'Row': 0x6
              }]
            }],
            'FS': [[0x1f, 0x1, 0x8], [0x5, 0x6], [0x1f, 0x0, 0x5], null, null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x8, 0x1f, 0x1, 0x8], [0x4, 0x9, 0x1, 0x3, 0x5, 0x6], [0x16, 0x2, 0x7, 0x8, 0x1f, 0x0, 0x5], [0x16, 0x7, 0x9], [0x2, 0x1], [0x12, 0xd, 0xb]],
            'CSW': 0x0,
            'CSM': 0x5,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 76.7,
          'ATF': 0x3,
          'FRR': 0x0,
          'FCC': 0x0,
          'FCLV': 0x0
        }],
        'TotalWin': 76.7,
        'FreeTotalWin': 0x0,
        'AckType': 0x0,
        'ShowIndex': '',
        'NowMoney': null,
        'trialfinish': false,
        'trialaward': 0x0
      }, {
        'RoundQueue': [{
          'CSD': [{
            'CSS': [[0x12, 0x1f, 0x0, 0x1], [0x7, 0x1f, 0x8, 0x2], [0x2, 0x2, 0x1f], [0x12, 0x3, 0x0, 0x1f], [0x0, 0x1f, 0x2, 0x0], [0x1f, 0x4]],
            'CSW': 0x0,
            'CSM': 0x1,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 0x0,
          'ATF': 0x4,
          'FRR': 0x10,
          'FCC': 0x0,
          'FCLV': 0x0
        }, {
          'CSD': [{
            'CSS': [[0x2, 0x5, 0x13, 0x1], [0x3, 0x1], [0x10, 0x8, 0x2, 0x2], [0x3, 0x5], [0x0, 0x9, 0x5, 0x6, 0x21], [0x6, 0x21, 0xc, 0x3, 0x4]],
            'CSW': 0x0,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 0x0,
          'ATF': 0x8,
          'FRR': 0xf,
          'FCC': 0x2,
          'FCLV': 0x0
        }, {
          'CSD': [{
            'CSS': [[0x0, 0x7, 0x1], [0x9, 0x7, 0x5], [0xa, 0x3, 0x7], [0x0, 0x7], [0x2, 0x2, 0x21], [0x21, 0x5, 0x5, 0x5, 0x0]],
            'CSW': 0x2,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': [{
              'S': 0x7,
              'C': 0x4,
              'LN': 0x1,
              'WIN': 0x2,
              'GV': [{
                'Col': 0x0,
                'Row': 0x1
              }, {
                'Col': 0x1,
                'Row': 0x1
              }, {
                'Col': 0x2,
                'Row': 0x2
              }, {
                'Col': 0x3,
                'Row': 0x1
              }]
            }],
            'FS': [[0x1], [0x1], [0x2], [0x2], null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x0, 0x1, 0x1], [0x9, 0x5, 0x1], [0xa, 0x3, 0x2], [0x0, 0x2], [0x2, 0x2, 0x21], [0x21, 0x5, 0x5, 0x5, 0x0]],
            'CSW': 0x0,
            'CSM': 0x4,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 0x2,
          'ATF': 0x2b,
          'FRR': 0x10,
          'FCC': 0x4,
          'FCLV': 0x1
        }, {
          'CSD': [{
            'CSS': [[0x3, 0x0, 0x0, 0xc], [0x21, 0x6, 0x4], [0x2, 0x7, 0x1, 0x1], [0x6, 0x1, 0x2, 0x7], [0x5, 0x3, 0x10, 0xc, 0xc], [0x3, 0x1, 0x6, 0x5]],
            'CSW': 0x0,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 0x0,
          'ATF': 0x8,
          'FRR': 0xf,
          'FCC': 0x5,
          'FCLV': 0x1
        }, {
          'CSD': [{
            'CSS': [[0x1, 0x7, 0x9, 0x0], [0x9, 0x4, 0x21, 0x9], [0x7, 0x0, 0x0, 0x2, 0xf, 0x7], [0x9, 0x5, 0x5, 0x21, 0x11], [0x0, 0x0, 0x6], [0x5, 0x5, 0x6]],
            'CSW': 1.6,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': [{
              'S': 0x9,
              'C': 0x2,
              'LN': 0x2,
              'WIN': 1.6,
              'GV': [{
                'Col': 0x0,
                'Row': 0x2
              }, {
                'Col': 0x1,
                'Row': 0x0
              }, {
                'Col': 0x1,
                'Row': 0x3
              }]
            }],
            'FS': [[0x5], [0x6, 0x3], null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x1, 0x7, 0x0, 0x5], [0x4, 0x21, 0x6, 0x3], [0x7, 0x0, 0x0, 0x2, 0xf, 0x7], [0x9, 0x5, 0x5, 0x21, 0x11], [0x0, 0x0, 0x6], [0x5, 0x5, 0x6]],
            'CSW': 0x0,
            'CSM': 0x4,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 1.6,
          'ATF': 0x2b,
          'FRR': 0x10,
          'FCC': 0x7,
          'FCLV': 0x2
        }, {
          'CSD': [{
            'CSS': [[0x1, 0x0, 0x5, 0x4], [0x9, 0x1, 0xe, 0x5, 0x6, 0x6, 0xe], [0x4, 0x4, 0x4, 0x4], [0x4, 0x0, 0x21, 0x8, 0x3], [0x9, 0x5, 0x2, 0x4], [0x3, 0x8, 0x5, 0x5, 0x6, 0x9]],
            'CSW': 9.6,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': [{
              'S': 0x4,
              'C': 0x5,
              'LN': 0x8,
              'WIN': 9.6,
              'GV': [{
                'Col': 0x0,
                'Row': 0x3
              }, {
                'Col': 0x1,
                'Row': 0x2
              }, {
                'Col': 0x1,
                'Row': 0x6
              }, {
                'Col': 0x2,
                'Row': 0x0
              }, {
                'Col': 0x2,
                'Row': 0x1
              }, {
                'Col': 0x2,
                'Row': 0x2
              }, {
                'Col': 0x2,
                'Row': 0x3
              }, {
                'Col': 0x3,
                'Row': 0x0
              }, {
                'Col': 0x4,
                'Row': 0x3
              }]
            }],
            'FS': [[0x4], null, [0x0, 0x5, 0x7, 0x2], [0x0], [0x6], null],
            'NFS': [null, [0x17, 0x17], null, null, null, null]
          }, {
            'CSS': [[0x1, 0x0, 0x5, 0x4], [0x9, 0x1, 0x17, 0x5, 0x6, 0x6, 0x17], [0x0, 0x5, 0x7, 0x2], [0x0, 0x21, 0x8, 0x3, 0x0], [0x9, 0x5, 0x2, 0x6], [0x3, 0x8, 0x5, 0x5, 0x6, 0x9]],
            'CSW': 1.6,
            'CSM': 0x4,
            'MT': 0x20,
            'ADV': [{
              'S': 0x5,
              'C': 0x3,
              'LN': 0x1,
              'WIN': 1.6,
              'GV': [{
                'Col': 0x0,
                'Row': 0x2
              }, {
                'Col': 0x1,
                'Row': 0x3
              }, {
                'Col': 0x2,
                'Row': 0x1
              }]
            }],
            'FS': [[0x4], [0x0], [0x0], null, null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x1, 0x0, 0x4, 0x4], [0x9, 0x1, 0x17, 0x6, 0x6, 0x17, 0x0], [0x0, 0x7, 0x2, 0x0], [0x0, 0x21, 0x8, 0x3, 0x0], [0x9, 0x5, 0x2, 0x6], [0x3, 0x8, 0x5, 0x5, 0x6, 0x9]],
            'CSW': 4.8,
            'CSM': 0x6,
            'MT': 0x20,
            'ADV': [{
              'S': 0x0,
              'C': 0x4,
              'LN': 0x4,
              'WIN': 4.8,
              'GV': [{
                'Col': 0x0,
                'Row': 0x1
              }, {
                'Col': 0x1,
                'Row': 0x6
              }, {
                'Col': 0x2,
                'Row': 0x0
              }, {
                'Col': 0x2,
                'Row': 0x3
              }, {
                'Col': 0x3,
                'Row': 0x0
              }, {
                'Col': 0x3,
                'Row': 0x4
              }]
            }],
            'FS': [[0x3], [0x6], [0x3, 0x6], [0x9, 0x9], null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x1, 0x4, 0x4, 0x3], [0x9, 0x1, 0x17, 0x6, 0x6, 0x17, 0x6], [0x7, 0x2, 0x3, 0x6], [0x21, 0x8, 0x3, 0x9, 0x9], [0x9, 0x5, 0x2, 0x6], [0x3, 0x8, 0x5, 0x5, 0x6, 0x9]],
            'CSW': 0x6,
            'CSM': 0xa,
            'MT': 0x20,
            'ADV': [{
              'S': 0x3,
              'C': 0x4,
              'LN': 0x2,
              'WIN': 0x6,
              'GV': [{
                'Col': 0x0,
                'Row': 0x3
              }, {
                'Col': 0x1,
                'Row': 0x2
              }, {
                'Col': 0x1,
                'Row': 0x5
              }, {
                'Col': 0x2,
                'Row': 0x2
              }, {
                'Col': 0x3,
                'Row': 0x2
              }]
            }],
            'FS': [[0x6], null, [0x8], [0x9], null, null],
            'NFS': [null, [0x1e, 0x1e], null, null, null, null]
          }, {
            'CSS': [[0x1, 0x4, 0x4, 0x6], [0x9, 0x1, 0x1e, 0x6, 0x6, 0x1e, 0x6], [0x7, 0x2, 0x6, 0x8], [0x21, 0x8, 0x9, 0x9, 0x9], [0x9, 0x5, 0x2, 0x6], [0x3, 0x8, 0x5, 0x5, 0x6, 0x9]],
            'CSW': 0x14,
            'CSM': 0xa,
            'MT': 0x20,
            'ADV': [{
              'S': 0x6,
              'C': 0x3,
              'LN': 0x5,
              'WIN': 0x14,
              'GV': [{
                'Col': 0x0,
                'Row': 0x3
              }, {
                'Col': 0x1,
                'Row': 0x2
              }, {
                'Col': 0x1,
                'Row': 0x3
              }, {
                'Col': 0x1,
                'Row': 0x4
              }, {
                'Col': 0x1,
                'Row': 0x5
              }, {
                'Col': 0x1,
                'Row': 0x6
              }, {
                'Col': 0x2,
                'Row': 0x2
              }]
            }],
            'FS': [[0x0], [0x9, 0x1, 0x3, 0x5, 0x5], [0x2], null, null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x1, 0x4, 0x4, 0x0], [0x9, 0x1, 0x9, 0x1, 0x3, 0x5, 0x5], [0x7, 0x2, 0x8, 0x2], [0x21, 0x8, 0x9, 0x9, 0x9], [0x9, 0x5, 0x2, 0x6], [0x3, 0x8, 0x5, 0x5, 0x6, 0x9]],
            'CSW': 0x0,
            'CSM': 0xa,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 0x2a,
          'ATF': 0xb,
          'FRR': 0xf,
          'FCC': 0x8,
          'FCLV': 0x2
        }, {
          'CSD': [{
            'CSS': [[0x1, 0x5, 0x3, 0x9], [0x1, 0x2, 0x0, 0x6], [0x6, 0x2, 0x5, 0x4], [0x7, 0x7, 0x4, 0x12], [0x6, 0x21, 0x1, 0x7], [0x3, 0x8, 0x6, 0x6]],
            'CSW': 0x0,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 0x0,
          'ATF': 0x28,
          'FRR': 0x10,
          'FCC': 0x9,
          'FCLV': 0x3
        }, {
          'CSD': [{
            'CSS': [[0x3, 0x3, 0x5, 0x9, 0x0], [0x5, 0x6, 0x6, 0x9, 0x21], [0x2, 0x3, 0x7, 0x2, 0x2], [0x8, 0x4, 0x9, 0x7, 0x1, 0x5], [0x8, 0x1, 0x9, 0x0, 0x1, 0x7], [0x6, 0x8, 0x8, 0x5, 0x2, 0x8, 0x9]],
            'CSW': 0.8,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': [{
              'S': 0x9,
              'C': 0x2,
              'LN': 0x1,
              'WIN': 0.8,
              'GV': [{
                'Col': 0x0,
                'Row': 0x3
              }, {
                'Col': 0x1,
                'Row': 0x3
              }]
            }],
            'FS': [[0x2], [0x6], null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x3, 0x3, 0x5, 0x0, 0x2], [0x5, 0x6, 0x6, 0x21, 0x6], [0x2, 0x3, 0x7, 0x2, 0x2], [0x8, 0x4, 0x9, 0x7, 0x1, 0x5], [0x8, 0x1, 0x9, 0x0, 0x1, 0x7], [0x6, 0x8, 0x8, 0x5, 0x2, 0x8, 0x9]],
            'CSW': 0x0,
            'CSM': 0x4,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 0.8,
          'ATF': 0xb,
          'FRR': 0xf,
          'FCC': 0xa,
          'FCLV': 0x3
        }, {
          'CSD': [{
            'CSS': [[0x0, 0x1, 0x1, 0x5, 0x0, 0x9, 0x2], [0x6, 0xd, 0x4, 0x5, 0x9], [0x0, 0x21, 0x7, 0x6, 0x2], [0x0, 0x5, 0x4, 0x0, 0x7], [0xb, 0x1, 0x1, 0x0, 0x5, 0x3], [0x6, 0x5, 0x9, 0x6, 0x6, 0x1]],
            'CSW': 0.8,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': [{
              'S': 0x9,
              'C': 0x2,
              'LN': 0x1,
              'WIN': 0.8,
              'GV': [{
                'Col': 0x0,
                'Row': 0x5
              }, {
                'Col': 0x1,
                'Row': 0x4
              }]
            }],
            'FS': [[0x8], [0x4], null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x0, 0x1, 0x1, 0x5, 0x0, 0x2, 0x8], [0x6, 0xd, 0x4, 0x5, 0x4], [0x0, 0x21, 0x7, 0x6, 0x2], [0x0, 0x5, 0x4, 0x0, 0x7], [0xb, 0x1, 0x1, 0x0, 0x5, 0x3], [0x6, 0x5, 0x9, 0x6, 0x6, 0x1]],
            'CSW': 0x0,
            'CSM': 0x4,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 0.8,
          'ATF': 0xb,
          'FRR': 0xe,
          'FCC': 0xb,
          'FCLV': 0x3
        }, {
          'CSD': [{
            'CSS': [[0x3, 0x5, 0x9, 0x0, 0x2, 0x6], [0x6, 0x5, 0x3, 0x21, 0x4], [0x3, 0x0, 0x2, 0x0, 0x0], [0x2, 0x7, 0x4, 0x9, 0x7], [0x2, 0x4, 0x6, 0x8, 0x2], [0x8, 0x8, 0x8, 0x10, 0x2]],
            'CSW': 0.4,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': [{
              'S': 0x3,
              'C': 0x3,
              'LN': 0x1,
              'WIN': 0.4,
              'GV': [{
                'Col': 0x0,
                'Row': 0x0
              }, {
                'Col': 0x1,
                'Row': 0x2
              }, {
                'Col': 0x2,
                'Row': 0x0
              }]
            }],
            'FS': [[0x8], [0x0], [0x7], null, null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x5, 0x9, 0x0, 0x2, 0x6, 0x8], [0x6, 0x5, 0x21, 0x4, 0x0], [0x0, 0x2, 0x0, 0x0, 0x7], [0x2, 0x7, 0x4, 0x9, 0x7], [0x2, 0x4, 0x6, 0x8, 0x2], [0x8, 0x8, 0x8, 0x10, 0x2]],
            'CSW': 1.2,
            'CSM': 0x4,
            'MT': 0x20,
            'ADV': [{
              'S': 0x0,
              'C': 0x3,
              'LN': 0x3,
              'WIN': 1.2,
              'GV': [{
                'Col': 0x0,
                'Row': 0x2
              }, {
                'Col': 0x1,
                'Row': 0x4
              }, {
                'Col': 0x2,
                'Row': 0x0
              }, {
                'Col': 0x2,
                'Row': 0x2
              }, {
                'Col': 0x2,
                'Row': 0x3
              }]
            }],
            'FS': [[0x1], [0x2], [0x2, 0x6, 0x1], null, null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x5, 0x9, 0x2, 0x6, 0x8, 0x1], [0x6, 0x5, 0x21, 0x4, 0x2], [0x2, 0x7, 0x2, 0x6, 0x1], [0x2, 0x7, 0x4, 0x9, 0x7], [0x2, 0x4, 0x6, 0x8, 0x2], [0x8, 0x8, 0x8, 0x10, 0x2]],
            'CSW': 16.8,
            'CSM': 0x6,
            'MT': 0x20,
            'ADV': [{
              'S': 0x2,
              'C': 0x6,
              'LN': 0x4,
              'WIN': 14.4,
              'GV': [{
                'Col': 0x0,
                'Row': 0x2
              }, {
                'Col': 0x1,
                'Row': 0x4
              }, {
                'Col': 0x2,
                'Row': 0x0
              }, {
                'Col': 0x2,
                'Row': 0x2
              }, {
                'Col': 0x3,
                'Row': 0x0
              }, {
                'Col': 0x4,
                'Row': 0x0
              }, {
                'Col': 0x4,
                'Row': 0x4
              }, {
                'Col': 0x5,
                'Row': 0x4
              }]
            }, {
              'S': 0x6,
              'C': 0x3,
              'LN': 0x1,
              'WIN': 2.4,
              'GV': [{
                'Col': 0x0,
                'Row': 0x3
              }, {
                'Col': 0x1,
                'Row': 0x0
              }, {
                'Col': 0x2,
                'Row': 0x3
              }]
            }],
            'FS': [[0x2, 0x2], [0x0, 0x6], [0x5, 0x4, 0x2], [0x1], [0x2, 0x9], [0x7]],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x5, 0x9, 0x8, 0x1, 0x2, 0x2], [0x5, 0x21, 0x4, 0x0, 0x6], [0x7, 0x1, 0x5, 0x4, 0x2], [0x7, 0x4, 0x9, 0x7, 0x1], [0x4, 0x6, 0x8, 0x2, 0x9], [0x8, 0x8, 0x8, 0x10, 0x7]],
            'CSW': 0x4,
            'CSM': 0xa,
            'MT': 0x20,
            'ADV': [{
              'S': 0x5,
              'C': 0x3,
              'LN': 0x1,
              'WIN': 0x4,
              'GV': [{
                'Col': 0x0,
                'Row': 0x0
              }, {
                'Col': 0x1,
                'Row': 0x0
              }, {
                'Col': 0x2,
                'Row': 0x2
              }]
            }],
            'FS': [[0x5], [0x4], [0x9], null, null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x9, 0x8, 0x1, 0x2, 0x2, 0x5], [0x21, 0x4, 0x0, 0x6, 0x4], [0x7, 0x1, 0x4, 0x2, 0x9], [0x7, 0x4, 0x9, 0x7, 0x1], [0x4, 0x6, 0x8, 0x2, 0x9], [0x8, 0x8, 0x8, 0x10, 0x7]],
            'CSW': 0x0,
            'CSM': 0xa,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 22.4,
          'ATF': 0x2b,
          'FRR': 0xf,
          'FCC': 0xc,
          'FCLV': 0x4
        }, {
          'CSD': [{
            'CSS': [[0x0, 0x9, 0x0, 0x8, 0x3, 0x0], [0x6, 0x4, 0xd, 0x1, 0x7, 0x3], [0x7, 0x5, 0x8, 0x0, 0xf, 0x3], [0x12, 0x3, 0x0, 0x6, 0x6, 0x5], [0x4, 0x1, 0x9, 0x2, 0x4, 0x4], [0x2, 0x1, 0x9, 0x5, 0x5, 0x3, 0x1]],
            'CSW': 1.2,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': [{
              'S': 0x3,
              'C': 0x4,
              'LN': 0x2,
              'WIN': 1.2,
              'GV': [{
                'Col': 0x0,
                'Row': 0x4
              }, {
                'Col': 0x1,
                'Row': 0x2
              }, {
                'Col': 0x1,
                'Row': 0x5
              }, {
                'Col': 0x2,
                'Row': 0x5
              }, {
                'Col': 0x3,
                'Row': 0x1
              }]
            }],
            'FS': [[0x7], [0x21], [0x0], [0x0], null, null],
            'NFS': [null, [0x15], null, null, null, null]
          }, {
            'CSS': [[0x0, 0x9, 0x0, 0x8, 0x0, 0x7], [0x6, 0x4, 0x15, 0x1, 0x7, 0x21], [0x7, 0x5, 0x8, 0x0, 0xf, 0x0], [0x12, 0x0, 0x6, 0x6, 0x5, 0x0], [0x4, 0x1, 0x9, 0x2, 0x4, 0x4], [0x2, 0x1, 0x9, 0x5, 0x5, 0x3, 0x1]],
            'CSW': 0x2,
            'CSM': 0x4,
            'MT': 0x20,
            'ADV': [{
              'S': 0x7,
              'C': 0x3,
              'LN': 0x1,
              'WIN': 0x2,
              'GV': [{
                'Col': 0x0,
                'Row': 0x5
              }, {
                'Col': 0x1,
                'Row': 0x4
              }, {
                'Col': 0x2,
                'Row': 0x0
              }]
            }],
            'FS': [[0x1], [0x7], [0x5], null, null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x0, 0x9, 0x0, 0x8, 0x0, 0x1], [0x6, 0x4, 0x15, 0x1, 0x21, 0x7], [0x5, 0x8, 0x0, 0xf, 0x0, 0x5], [0x12, 0x0, 0x6, 0x6, 0x5, 0x0], [0x4, 0x1, 0x9, 0x2, 0x4, 0x4], [0x2, 0x1, 0x9, 0x5, 0x5, 0x3, 0x1]],
            'CSW': 0x0,
            'CSM': 0x6,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 3.2,
          'ATF': 0xb,
          'FRR': 0xe,
          'FCC': 0xd,
          'FCLV': 0x4
        }, {
          'CSD': [{
            'CSS': [[0x1, 0x1, 0x3, 0x6, 0x3, 0x5, 0x0], [0x2, 0x2, 0x0, 0x6, 0x4, 0x3], [0x6, 0x0, 0x0, 0x5, 0x7, 0x3], [0x4, 0x3, 0x5, 0x8, 0x0, 0x2, 0xf], [0x1, 0x4, 0x6, 0x4, 0x4, 0x1], [0x6, 0x6, 0x1, 0x2, 0x3, 0x2]],
            'CSW': 2.8,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': [{
              'S': 0x0,
              'C': 0x4,
              'LN': 0x2,
              'WIN': 0.8,
              'GV': [{
                'Col': 0x0,
                'Row': 0x6
              }, {
                'Col': 0x1,
                'Row': 0x2
              }, {
                'Col': 0x2,
                'Row': 0x1
              }, {
                'Col': 0x2,
                'Row': 0x2
              }, {
                'Col': 0x3,
                'Row': 0x4
              }]
            }, {
              'S': 0x3,
              'C': 0x4,
              'LN': 0x2,
              'WIN': 1.2,
              'GV': [{
                'Col': 0x0,
                'Row': 0x2
              }, {
                'Col': 0x0,
                'Row': 0x4
              }, {
                'Col': 0x1,
                'Row': 0x5
              }, {
                'Col': 0x2,
                'Row': 0x5
              }, {
                'Col': 0x3,
                'Row': 0x1
              }]
            }, {
              'S': 0x6,
              'C': 0x3,
              'LN': 0x1,
              'WIN': 0.8,
              'GV': [{
                'Col': 0x0,
                'Row': 0x3
              }, {
                'Col': 0x1,
                'Row': 0x3
              }, {
                'Col': 0x2,
                'Row': 0x0
              }]
            }],
            'FS': [[0x4, 0x0, 0x8, 0x5], [0x1, 0x7, 0x3], [0x3, 0x8, 0x7, 0x1], [0x5, 0x4], null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x1, 0x1, 0x5, 0x4, 0x0, 0x8, 0x5], [0x2, 0x2, 0x4, 0x1, 0x7, 0x3], [0x5, 0x7, 0x3, 0x8, 0x7, 0x1], [0x4, 0x5, 0x8, 0x2, 0xf, 0x5, 0x4], [0x1, 0x4, 0x6, 0x4, 0x4, 0x1], [0x6, 0x6, 0x1, 0x2, 0x3, 0x2]],
            'CSW': 0.8,
            'CSM': 0x4,
            'MT': 0x20,
            'ADV': [{
              'S': 0x1,
              'C': 0x3,
              'LN': 0x2,
              'WIN': 0.8,
              'GV': [{
                'Col': 0x0,
                'Row': 0x0
              }, {
                'Col': 0x0,
                'Row': 0x1
              }, {
                'Col': 0x1,
                'Row': 0x3
              }, {
                'Col': 0x2,
                'Row': 0x5
              }]
            }],
            'FS': [[0x0, 0x2], [0x6], [0x1], null, null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x5, 0x4, 0x0, 0x8, 0x5, 0x0, 0x2], [0x2, 0x2, 0x4, 0x7, 0x3, 0x6], [0x5, 0x7, 0x3, 0x8, 0x7, 0x1], [0x4, 0x5, 0x8, 0x2, 0xf, 0x5, 0x4], [0x1, 0x4, 0x6, 0x4, 0x4, 0x1], [0x6, 0x6, 0x1, 0x2, 0x3, 0x2]],
            'CSW': 0x0,
            'CSM': 0x6,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 3.6,
          'ATF': 0xb,
          'FRR': 0xd,
          'FCC': 0xd,
          'FCLV': 0x4
        }, {
          'CSD': [{
            'CSS': [[0x1, 0x1, 0x0, 0x5, 0x4, 0x4], [0x3, 0x5, 0x6, 0x2, 0x7, 0x7, 0x9], [0x2, 0x5, 0x8, 0xa, 0x3, 0x7, 0x6], [0x21, 0x8, 0x5, 0x13, 0x9, 0x4], [0x2, 0x1, 0x6, 0x1, 0x1, 0xb], [0x4, 0x7, 0x1, 0x6, 0x8, 0x0]],
            'CSW': 1.2,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': [{
              'S': 0x5,
              'C': 0x4,
              'LN': 0x1,
              'WIN': 1.2,
              'GV': [{
                'Col': 0x0,
                'Row': 0x3
              }, {
                'Col': 0x1,
                'Row': 0x1
              }, {
                'Col': 0x2,
                'Row': 0x1
              }, {
                'Col': 0x3,
                'Row': 0x2
              }]
            }],
            'FS': [[0x0], [0x4], [0x0], [0x3], null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x1, 0x1, 0x0, 0x4, 0x4, 0x0], [0x3, 0x6, 0x2, 0x7, 0x7, 0x9, 0x4], [0x2, 0x8, 0xa, 0x3, 0x7, 0x6, 0x0], [0x21, 0x8, 0x13, 0x9, 0x4, 0x3], [0x2, 0x1, 0x6, 0x1, 0x1, 0xb], [0x4, 0x7, 0x1, 0x6, 0x8, 0x0]],
            'CSW': 0x0,
            'CSM': 0x4,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 1.2,
          'ATF': 0xb,
          'FRR': 0xc,
          'FCC': 0xe,
          'FCLV': 0x4
        }, {
          'CSD': [{
            'CSS': [[0x3, 0x1, 0x4, 0x5, 0x4, 0x0, 0x0], [0x6, 0x7, 0x7, 0x4, 0x6, 0x0], [0x5, 0x7, 0x2, 0x0, 0x21, 0x6], [0x0, 0x4, 0xd, 0x5, 0x4, 0x3], [0x2, 0x2, 0x9, 0x6, 0x4, 0x4, 0x5], [0x13, 0x1, 0x3, 0x8, 0x9, 0x3, 0x4]],
            'CSW': 0.8,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': [{
              'S': 0x0,
              'C': 0x4,
              'LN': 0x2,
              'WIN': 0.8,
              'GV': [{
                'Col': 0x0,
                'Row': 0x5
              }, {
                'Col': 0x0,
                'Row': 0x6
              }, {
                'Col': 0x1,
                'Row': 0x5
              }, {
                'Col': 0x2,
                'Row': 0x3
              }, {
                'Col': 0x3,
                'Row': 0x0
              }]
            }],
            'FS': [[0x8, 0x5], [0x6], [0x8], [0x5], null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x3, 0x1, 0x4, 0x5, 0x4, 0x8, 0x5], [0x6, 0x7, 0x7, 0x4, 0x6, 0x6], [0x5, 0x7, 0x2, 0x21, 0x6, 0x8], [0x4, 0xd, 0x5, 0x4, 0x3, 0x5], [0x2, 0x2, 0x9, 0x6, 0x4, 0x4, 0x5], [0x13, 0x1, 0x3, 0x8, 0x9, 0x3, 0x4]],
            'CSW': 0x0,
            'CSM': 0x4,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 0.8,
          'ATF': 0x2b,
          'FRR': 0xd,
          'FCC': 0xf,
          'FCLV': 0x5
        }, {
          'CSD': [{
            'CSS': [[0x0, 0x5, 0x2, 0x2, 0x1, 0x3, 0x6], [0x7, 0x3, 0x4, 0x6, 0x7, 0x4, 0x0], [0x7, 0x2, 0x0, 0x4, 0x6, 0x8, 0x2], [0x7, 0x7, 0x8, 0x3, 0x7, 0x5, 0x5], [0x6, 0x1, 0xb, 0x1, 0x9, 0x5, 0x2], [0x8, 0x3, 0x8, 0x8, 0x8, 0x6, 0x2]],
            'CSW': 0x1,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': [{
              'S': 0x0,
              'C': 0x3,
              'LN': 0x1,
              'WIN': 0.2,
              'GV': [{
                'Col': 0x0,
                'Row': 0x0
              }, {
                'Col': 0x1,
                'Row': 0x6
              }, {
                'Col': 0x2,
                'Row': 0x2
              }]
            }, {
              'S': 0x6,
              'C': 0x3,
              'LN': 0x1,
              'WIN': 0.8,
              'GV': [{
                'Col': 0x0,
                'Row': 0x6
              }, {
                'Col': 0x1,
                'Row': 0x3
              }, {
                'Col': 0x2,
                'Row': 0x4
              }]
            }],
            'FS': [[0x5, 0x5], [0x1, 0x8], [0x2, 0x5], null, null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x5, 0x2, 0x2, 0x1, 0x3, 0x5, 0x5], [0x7, 0x3, 0x4, 0x7, 0x4, 0x1, 0x8], [0x7, 0x2, 0x4, 0x8, 0x2, 0x2, 0x5], [0x7, 0x7, 0x8, 0x3, 0x7, 0x5, 0x5], [0x6, 0x1, 0xb, 0x1, 0x9, 0x5, 0x2], [0x8, 0x3, 0x8, 0x8, 0x8, 0x6, 0x2]],
            'CSW': 0x0,
            'CSM': 0x4,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 0x1,
          'ATF': 0xb,
          'FRR': 0xc,
          'FCC': 0xf,
          'FCLV': 0x5
        }, {
          'CSD': [{
            'CSS': [[0x0, 0x0, 0x1, 0x5, 0x8, 0x3, 0x2], [0x7, 0x3, 0x0, 0x1, 0x6, 0x6, 0x3], [0x7, 0x6, 0x2, 0xd, 0x8, 0x5, 0x4], [0x0, 0x4, 0x9, 0x8, 0x5, 0x9, 0x9], [0x1, 0x2, 0x2, 0x6, 0x1, 0x8, 0x4], [0x9, 0x3, 0x8, 0x4, 0x8, 0x1, 0x6]],
            'CSW': 0.8,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': [{
              'S': 0x3,
              'C': 0x3,
              'LN': 0x2,
              'WIN': 0.8,
              'GV': [{
                'Col': 0x0,
                'Row': 0x5
              }, {
                'Col': 0x1,
                'Row': 0x1
              }, {
                'Col': 0x1,
                'Row': 0x6
              }, {
                'Col': 0x2,
                'Row': 0x3
              }]
            }],
            'FS': [[0x1], [0x7, 0x9], null, null, null, null],
            'NFS': [null, null, [0x14], null, null, null]
          }, {
            'CSS': [[0x0, 0x0, 0x1, 0x5, 0x8, 0x2, 0x1], [0x7, 0x0, 0x1, 0x6, 0x6, 0x7, 0x9], [0x7, 0x6, 0x2, 0x14, 0x8, 0x5, 0x4], [0x0, 0x4, 0x9, 0x8, 0x5, 0x9, 0x9], [0x1, 0x2, 0x2, 0x6, 0x1, 0x8, 0x4], [0x9, 0x3, 0x8, 0x4, 0x8, 0x1, 0x6]],
            'CSW': 1.6,
            'CSM': 0x4,
            'MT': 0x20,
            'ADV': [{
              'S': 0x0,
              'C': 0x4,
              'LN': 0x2,
              'WIN': 1.6,
              'GV': [{
                'Col': 0x0,
                'Row': 0x0
              }, {
                'Col': 0x0,
                'Row': 0x1
              }, {
                'Col': 0x1,
                'Row': 0x1
              }, {
                'Col': 0x2,
                'Row': 0x3
              }, {
                'Col': 0x3,
                'Row': 0x0
              }]
            }],
            'FS': [[0x3, 0x3], [0x9], null, [0x4], null, null],
            'NFS': [null, null, [0x1e], null, null, null]
          }, {
            'CSS': [[0x1, 0x5, 0x8, 0x2, 0x1, 0x3, 0x3], [0x7, 0x1, 0x6, 0x6, 0x7, 0x9, 0x9], [0x7, 0x6, 0x2, 0x1e, 0x8, 0x5, 0x4], [0x4, 0x9, 0x8, 0x5, 0x9, 0x9, 0x4], [0x1, 0x2, 0x2, 0x6, 0x1, 0x8, 0x4], [0x9, 0x3, 0x8, 0x4, 0x8, 0x1, 0x6]],
            'CSW': 1.2,
            'CSM': 0x6,
            'MT': 0x20,
            'ADV': [{
              'S': 0x1,
              'C': 0x3,
              'LN': 0x2,
              'WIN': 1.2,
              'GV': [{
                'Col': 0x0,
                'Row': 0x0
              }, {
                'Col': 0x0,
                'Row': 0x4
              }, {
                'Col': 0x1,
                'Row': 0x1
              }, {
                'Col': 0x2,
                'Row': 0x3
              }]
            }],
            'FS': [[0x8, 0x6], [0x9], [0x4], null, null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x5, 0x8, 0x2, 0x3, 0x3, 0x8, 0x6], [0x7, 0x6, 0x6, 0x7, 0x9, 0x9, 0x9], [0x7, 0x6, 0x2, 0x8, 0x5, 0x4, 0x4], [0x4, 0x9, 0x8, 0x5, 0x9, 0x9, 0x4], [0x1, 0x2, 0x2, 0x6, 0x1, 0x8, 0x4], [0x9, 0x3, 0x8, 0x4, 0x8, 0x1, 0x6]],
            'CSW': 0x8,
            'CSM': 0xa,
            'MT': 0x20,
            'ADV': [{
              'S': 0x6,
              'C': 0x3,
              'LN': 0x2,
              'WIN': 0x8,
              'GV': [{
                'Col': 0x0,
                'Row': 0x6
              }, {
                'Col': 0x1,
                'Row': 0x1
              }, {
                'Col': 0x1,
                'Row': 0x2
              }, {
                'Col': 0x2,
                'Row': 0x1
              }]
            }],
            'FS': [[0x5], [0x2, 0x5], [0x2], null, null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x5, 0x8, 0x2, 0x3, 0x3, 0x8, 0x5], [0x7, 0x7, 0x9, 0x9, 0x9, 0x2, 0x5], [0x7, 0x2, 0x8, 0x5, 0x4, 0x4, 0x2], [0x4, 0x9, 0x8, 0x5, 0x9, 0x9, 0x4], [0x1, 0x2, 0x2, 0x6, 0x1, 0x8, 0x4], [0x9, 0x3, 0x8, 0x4, 0x8, 0x1, 0x6]],
            'CSW': 0x10,
            'CSM': 0xa,
            'MT': 0x20,
            'ADV': [{
              'S': 0x2,
              'C': 0x3,
              'LN': 0x2,
              'WIN': 0x4,
              'GV': [{
                'Col': 0x0,
                'Row': 0x2
              }, {
                'Col': 0x1,
                'Row': 0x5
              }, {
                'Col': 0x2,
                'Row': 0x1
              }, {
                'Col': 0x2,
                'Row': 0x6
              }]
            }, {
              'S': 0x5,
              'C': 0x4,
              'LN': 0x2,
              'WIN': 0xc,
              'GV': [{
                'Col': 0x0,
                'Row': 0x0
              }, {
                'Col': 0x0,
                'Row': 0x6
              }, {
                'Col': 0x1,
                'Row': 0x6
              }, {
                'Col': 0x2,
                'Row': 0x3
              }, {
                'Col': 0x3,
                'Row': 0x3
              }]
            }],
            'FS': [[0x2, 0x7, 0x9], [0x6, 0x6], [0x7, 0x5, 0x4], [0x3], null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x8, 0x3, 0x3, 0x8, 0x2, 0x7, 0x9], [0x7, 0x7, 0x9, 0x9, 0x9, 0x6, 0x6], [0x7, 0x8, 0x4, 0x4, 0x7, 0x5, 0x4], [0x4, 0x9, 0x8, 0x9, 0x9, 0x4, 0x3], [0x1, 0x2, 0x2, 0x6, 0x1, 0x8, 0x4], [0x9, 0x3, 0x8, 0x4, 0x8, 0x1, 0x6]],
            'CSW': 0x20,
            'CSM': 0xa,
            'MT': 0x20,
            'ADV': [{
              'S': 0x7,
              'C': 0x3,
              'LN': 0x4,
              'WIN': 0x14,
              'GV': [{
                'Col': 0x0,
                'Row': 0x5
              }, {
                'Col': 0x1,
                'Row': 0x0
              }, {
                'Col': 0x1,
                'Row': 0x1
              }, {
                'Col': 0x2,
                'Row': 0x0
              }, {
                'Col': 0x2,
                'Row': 0x4
              }]
            }, {
              'S': 0x9,
              'C': 0x2,
              'LN': 0x3,
              'WIN': 0xc,
              'GV': [{
                'Col': 0x0,
                'Row': 0x6
              }, {
                'Col': 0x1,
                'Row': 0x2
              }, {
                'Col': 0x1,
                'Row': 0x3
              }, {
                'Col': 0x1,
                'Row': 0x4
              }]
            }],
            'FS': [[0x0, 0x5], [0x9, 0x1, 0x6, 0x7, 0x7], [0x3, 0x0], null, null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x8, 0x3, 0x3, 0x8, 0x2, 0x0, 0x5], [0x6, 0x6, 0x9, 0x1, 0x6, 0x7, 0x7], [0x8, 0x4, 0x4, 0x5, 0x4, 0x3, 0x0], [0x4, 0x9, 0x8, 0x9, 0x9, 0x4, 0x3], [0x1, 0x2, 0x2, 0x6, 0x1, 0x8, 0x4], [0x9, 0x3, 0x8, 0x4, 0x8, 0x1, 0x6]],
            'CSW': 0x0,
            'CSM': 0xa,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 59.6,
          'ATF': 0xb,
          'FRR': 0xb,
          'FCC': 0xf,
          'FCLV': 0x5
        }, {
          'CSD': [{
            'CSS': [[0x5, 0x2, 0x2, 0x6, 0x5, 0x4, 0x4], [0x9, 0x1, 0x4, 0x5, 0x5, 0x5, 0x4], [0x1, 0x1, 0x2, 0x5, 0x7, 0x2, 0x3], [0x7, 0xe, 0x3, 0x5, 0x8, 0x0, 0x2], [0x1, 0x1, 0x4, 0x2, 0x1, 0x2, 0x2], [0x8, 0x1, 0x6, 0x8, 0x0, 0x9, 0x9]],
            'CSW': 7.2,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': [{
              'S': 0x5,
              'C': 0x4,
              'LN': 0x6,
              'WIN': 7.2,
              'GV': [{
                'Col': 0x0,
                'Row': 0x0
              }, {
                'Col': 0x0,
                'Row': 0x4
              }, {
                'Col': 0x1,
                'Row': 0x3
              }, {
                'Col': 0x1,
                'Row': 0x4
              }, {
                'Col': 0x1,
                'Row': 0x5
              }, {
                'Col': 0x2,
                'Row': 0x3
              }, {
                'Col': 0x3,
                'Row': 0x3
              }]
            }],
            'FS': [[0x1, 0x5], [0x0, 0x6, 0x8], [0x7], [0x5], null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x2, 0x2, 0x6, 0x4, 0x4, 0x1, 0x5], [0x9, 0x1, 0x4, 0x4, 0x0, 0x6, 0x8], [0x1, 0x1, 0x2, 0x7, 0x2, 0x3, 0x7], [0x7, 0xe, 0x3, 0x8, 0x0, 0x2, 0x5], [0x1, 0x1, 0x4, 0x2, 0x1, 0x2, 0x2], [0x8, 0x1, 0x6, 0x8, 0x0, 0x9, 0x9]],
            'CSW': 0.8,
            'CSM': 0x4,
            'MT': 0x20,
            'ADV': [{
              'S': 0x1,
              'C': 0x3,
              'LN': 0x2,
              'WIN': 0.8,
              'GV': [{
                'Col': 0x0,
                'Row': 0x5
              }, {
                'Col': 0x1,
                'Row': 0x1
              }, {
                'Col': 0x2,
                'Row': 0x0
              }, {
                'Col': 0x2,
                'Row': 0x1
              }]
            }],
            'FS': [[0x9], [0x1], [0x3, 0x3], null, null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x2, 0x2, 0x6, 0x4, 0x4, 0x5, 0x9], [0x9, 0x4, 0x4, 0x0, 0x6, 0x8, 0x1], [0x2, 0x7, 0x2, 0x3, 0x7, 0x3, 0x3], [0x7, 0xe, 0x3, 0x8, 0x0, 0x2, 0x5], [0x1, 0x1, 0x4, 0x2, 0x1, 0x2, 0x2], [0x8, 0x1, 0x6, 0x8, 0x0, 0x9, 0x9]],
            'CSW': 2.4,
            'CSM': 0x6,
            'MT': 0x20,
            'ADV': [{
              'S': 0x9,
              'C': 0x2,
              'LN': 0x1,
              'WIN': 2.4,
              'GV': [{
                'Col': 0x0,
                'Row': 0x6
              }, {
                'Col': 0x1,
                'Row': 0x0
              }]
            }],
            'FS': [[0x3], [0x3], null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x2, 0x2, 0x6, 0x4, 0x4, 0x5, 0x3], [0x4, 0x4, 0x0, 0x6, 0x8, 0x1, 0x3], [0x2, 0x7, 0x2, 0x3, 0x7, 0x3, 0x3], [0x7, 0xe, 0x3, 0x8, 0x0, 0x2, 0x5], [0x1, 0x1, 0x4, 0x2, 0x1, 0x2, 0x2], [0x8, 0x1, 0x6, 0x8, 0x0, 0x9, 0x9]],
            'CSW': 0x9,
            'CSM': 0xa,
            'MT': 0x20,
            'ADV': [{
              'S': 0x3,
              'C': 0x4,
              'LN': 0x3,
              'WIN': 0x9,
              'GV': [{
                'Col': 0x0,
                'Row': 0x6
              }, {
                'Col': 0x1,
                'Row': 0x6
              }, {
                'Col': 0x2,
                'Row': 0x3
              }, {
                'Col': 0x2,
                'Row': 0x5
              }, {
                'Col': 0x2,
                'Row': 0x6
              }, {
                'Col': 0x3,
                'Row': 0x2
              }]
            }],
            'FS': [[0x2], [0x9], [0x2, 0x5, 0x8], [0x5], null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x2, 0x2, 0x6, 0x4, 0x4, 0x5, 0x2], [0x4, 0x4, 0x0, 0x6, 0x8, 0x1, 0x9], [0x2, 0x7, 0x2, 0x7, 0x2, 0x5, 0x8], [0x7, 0xe, 0x8, 0x0, 0x2, 0x5, 0x5], [0x1, 0x1, 0x4, 0x2, 0x1, 0x2, 0x2], [0x8, 0x1, 0x6, 0x8, 0x0, 0x9, 0x9]],
            'CSW': 0x0,
            'CSM': 0xa,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 19.4,
          'ATF': 0xb,
          'FRR': 0xa,
          'FCC': 0xf,
          'FCLV': 0x5
        }, {
          'CSD': [{
            'CSS': [[0xa, 0x7, 0x1, 0x1, 0x2, 0x5, 0x0], [0x2, 0x0, 0x6, 0x4, 0x3, 0x1, 0x7], [0x8, 0x1, 0x3, 0x7, 0x6, 0x0, 0x0], [0x0, 0x8, 0x8, 0x3, 0x0, 0x7, 0x7], [0x4, 0x2, 0x9, 0x0, 0x0, 0x6, 0x6], [0x7, 0x8, 0x8, 0x1, 0x3, 0x12, 0x5]],
            'CSW': 0xe,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': [{
              'S': 0x0,
              'C': 0x5,
              'LN': 0x10,
              'WIN': 9.6,
              'GV': [{
                'Col': 0x0,
                'Row': 0x0
              }, {
                'Col': 0x0,
                'Row': 0x6
              }, {
                'Col': 0x1,
                'Row': 0x1
              }, {
                'Col': 0x2,
                'Row': 0x5
              }, {
                'Col': 0x2,
                'Row': 0x6
              }, {
                'Col': 0x3,
                'Row': 0x0
              }, {
                'Col': 0x3,
                'Row': 0x4
              }, {
                'Col': 0x4,
                'Row': 0x3
              }, {
                'Col': 0x4,
                'Row': 0x4
              }]
            }, {
              'S': 0x1,
              'C': 0x3,
              'LN': 0x2,
              'WIN': 0.4,
              'GV': [{
                'Col': 0x0,
                'Row': 0x2
              }, {
                'Col': 0x0,
                'Row': 0x3
              }, {
                'Col': 0x1,
                'Row': 0x5
              }, {
                'Col': 0x2,
                'Row': 0x1
              }]
            }, {
              'S': 0x7,
              'C': 0x4,
              'LN': 0x2,
              'WIN': 0x4,
              'GV': [{
                'Col': 0x0,
                'Row': 0x1
              }, {
                'Col': 0x1,
                'Row': 0x6
              }, {
                'Col': 0x2,
                'Row': 0x3
              }, {
                'Col': 0x3,
                'Row': 0x5
              }, {
                'Col': 0x3,
                'Row': 0x6
              }]
            }],
            'FS': [[0x0, 0x0, 0x3, 0x6], [0x3, 0x9, 0x7], [0x5, 0x7, 0x3, 0x3], [0x7, 0x0, 0x2, 0x7], [0x9, 0x9], null],
            'NFS': [[0x17], null, null, null, null, null]
          }, {
            'CSS': [[0x17, 0x2, 0x5, 0x0, 0x0, 0x3, 0x6], [0x2, 0x6, 0x4, 0x3, 0x3, 0x9, 0x7], [0x8, 0x3, 0x6, 0x5, 0x7, 0x3, 0x3], [0x8, 0x8, 0x3, 0x7, 0x0, 0x2, 0x7], [0x4, 0x2, 0x9, 0x6, 0x6, 0x9, 0x9], [0x7, 0x8, 0x8, 0x1, 0x3, 0x12, 0x5]],
            'CSW': 0x10,
            'CSM': 0x4,
            'MT': 0x20,
            'ADV': [{
              'S': 0x3,
              'C': 0x4,
              'LN': 0xc,
              'WIN': 14.4,
              'GV': [{
                'Col': 0x0,
                'Row': 0x0
              }, {
                'Col': 0x0,
                'Row': 0x5
              }, {
                'Col': 0x1,
                'Row': 0x3
              }, {
                'Col': 0x1,
                'Row': 0x4
              }, {
                'Col': 0x2,
                'Row': 0x1
              }, {
                'Col': 0x2,
                'Row': 0x5
              }, {
                'Col': 0x2,
                'Row': 0x6
              }, {
                'Col': 0x3,
                'Row': 0x2
              }]
            }, {
              'S': 0x6,
              'C': 0x3,
              'LN': 0x1,
              'WIN': 1.6,
              'GV': [{
                'Col': 0x0,
                'Row': 0x6
              }, {
                'Col': 0x1,
                'Row': 0x1
              }, {
                'Col': 0x2,
                'Row': 0x2
              }]
            }],
            'FS': [[0x4, 0x5], [0x3, 0x4, 0x6], [0x8, 0x7, 0x1, 0x1], [0x8], null, null],
            'NFS': [[0x1e], null, null, null, null, null]
          }, {
            'CSS': [[0x1e, 0x2, 0x5, 0x0, 0x0, 0x4, 0x5], [0x2, 0x4, 0x9, 0x7, 0x3, 0x4, 0x6], [0x8, 0x5, 0x7, 0x8, 0x7, 0x1, 0x1], [0x8, 0x8, 0x7, 0x0, 0x2, 0x7, 0x8], [0x4, 0x2, 0x9, 0x6, 0x6, 0x9, 0x9], [0x7, 0x8, 0x8, 0x1, 0x3, 0x12, 0x5]],
            'CSW': 26.4,
            'CSM': 0x6,
            'MT': 0x20,
            'ADV': [{
              'S': 0x7,
              'C': 0x4,
              'LN': 0x4,
              'WIN': 0x18,
              'GV': [{
                'Col': 0x0,
                'Row': 0x0
              }, {
                'Col': 0x1,
                'Row': 0x3
              }, {
                'Col': 0x2,
                'Row': 0x2
              }, {
                'Col': 0x2,
                'Row': 0x4
              }, {
                'Col': 0x3,
                'Row': 0x2
              }, {
                'Col': 0x3,
                'Row': 0x5
              }]
            }, {
              'S': 0x9,
              'C': 0x2,
              'LN': 0x1,
              'WIN': 2.4,
              'GV': [{
                'Col': 0x0,
                'Row': 0x0
              }, {
                'Col': 0x1,
                'Row': 0x2
              }]
            }],
            'FS': [[0x1], [0x7, 0x1], [0x0, 0x7], [0x3, 0x4], null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x2, 0x5, 0x0, 0x0, 0x4, 0x5, 0x1], [0x2, 0x4, 0x3, 0x4, 0x6, 0x7, 0x1], [0x8, 0x5, 0x8, 0x1, 0x1, 0x0, 0x7], [0x8, 0x8, 0x0, 0x2, 0x8, 0x3, 0x4], [0x4, 0x2, 0x9, 0x6, 0x6, 0x9, 0x9], [0x7, 0x8, 0x8, 0x1, 0x3, 0x12, 0x5]],
            'CSW': 0x2,
            'CSM': 0xa,
            'MT': 0x20,
            'ADV': [{
              'S': 0x1,
              'C': 0x3,
              'LN': 0x2,
              'WIN': 0x2,
              'GV': [{
                'Col': 0x0,
                'Row': 0x6
              }, {
                'Col': 0x1,
                'Row': 0x6
              }, {
                'Col': 0x2,
                'Row': 0x3
              }, {
                'Col': 0x2,
                'Row': 0x4
              }]
            }],
            'FS': [[0x1], [0x0], [0x6, 0x4], null, null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x2, 0x5, 0x0, 0x0, 0x4, 0x5, 0x1], [0x2, 0x4, 0x3, 0x4, 0x6, 0x7, 0x0], [0x8, 0x5, 0x8, 0x0, 0x7, 0x6, 0x4], [0x8, 0x8, 0x0, 0x2, 0x8, 0x3, 0x4], [0x4, 0x2, 0x9, 0x6, 0x6, 0x9, 0x9], [0x7, 0x8, 0x8, 0x1, 0x3, 0x12, 0x5]],
            'CSW': 0x10,
            'CSM': 0xa,
            'MT': 0x20,
            'ADV': [{
              'S': 0x0,
              'C': 0x4,
              'LN': 0x2,
              'WIN': 0x4,
              'GV': [{
                'Col': 0x0,
                'Row': 0x2
              }, {
                'Col': 0x0,
                'Row': 0x3
              }, {
                'Col': 0x1,
                'Row': 0x6
              }, {
                'Col': 0x2,
                'Row': 0x3
              }, {
                'Col': 0x3,
                'Row': 0x2
              }]
            }, {
              'S': 0x4,
              'C': 0x5,
              'LN': 0x2,
              'WIN': 0xc,
              'GV': [{
                'Col': 0x0,
                'Row': 0x4
              }, {
                'Col': 0x1,
                'Row': 0x1
              }, {
                'Col': 0x1,
                'Row': 0x3
              }, {
                'Col': 0x2,
                'Row': 0x6
              }, {
                'Col': 0x3,
                'Row': 0x6
              }, {
                'Col': 0x4,
                'Row': 0x0
              }]
            }],
            'FS': [[0x1, 0x8, 0x5], [0x1, 0x9, 0x6], [0x3, 0x8], [0x9, 0x9], [0x2], null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x2, 0x5, 0x5, 0x1, 0x1, 0x8, 0x5], [0x2, 0x3, 0x6, 0x7, 0x1, 0x9, 0x6], [0x8, 0x5, 0x8, 0x7, 0x6, 0x3, 0x8], [0x8, 0x8, 0x2, 0x8, 0x3, 0x9, 0x9], [0x2, 0x9, 0x6, 0x6, 0x9, 0x9, 0x2], [0x7, 0x8, 0x8, 0x1, 0x3, 0x12, 0x5]],
            'CSW': 0x0,
            'CSM': 0xa,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 74.4,
          'ATF': 0xb,
          'FRR': 0x9,
          'FCC': 0xf,
          'FCLV': 0x5
        }, {
          'CSD': [{
            'CSS': [[0x1, 0x5, 0x3, 0x9, 0x0, 0x8, 0xd], [0x3, 0x2, 0x7, 0x3, 0x4, 0x6, 0x7], [0x0, 0x0, 0x2, 0x1, 0x9, 0x4, 0x2], [0x9, 0x1, 0x8, 0x7, 0x11, 0x6, 0x3], [0x4, 0x2, 0x1, 0x2, 0x2, 0x6, 0xb], [0x4, 0x12, 0x3, 0x1, 0x2, 0x9, 0x1]],
            'CSW': 0x0,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 0x0,
          'ATF': 0x8,
          'FRR': 0x8,
          'FCC': 0xf,
          'FCLV': 0x5
        }, {
          'CSD': [{
            'CSS': [[0x1, 0x1, 0x0, 0x8, 0x6, 0x4, 0x2], [0x3, 0x5, 0x10, 0x2, 0x7, 0x7, 0x6], [0x0, 0x0, 0x2, 0x7, 0x1, 0x1, 0x1], [0x7, 0x4, 0x5, 0x8, 0x8, 0x8, 0x1], [0x2, 0x9, 0x21, 0x4, 0x4, 0x5, 0x6], [0x9, 0x7, 0xa, 0x6, 0x8, 0x8, 0x5]],
            'CSW': 0.4,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': [{
              'S': 0x2,
              'C': 0x3,
              'LN': 0x1,
              'WIN': 0.4,
              'GV': [{
                'Col': 0x0,
                'Row': 0x6
              }, {
                'Col': 0x1,
                'Row': 0x3
              }, {
                'Col': 0x2,
                'Row': 0x2
              }]
            }],
            'FS': [[0x5], [0x4], [0x4], null, null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x1, 0x1, 0x0, 0x8, 0x6, 0x4, 0x5], [0x3, 0x5, 0x10, 0x7, 0x7, 0x6, 0x4], [0x0, 0x0, 0x7, 0x1, 0x1, 0x1, 0x4], [0x7, 0x4, 0x5, 0x8, 0x8, 0x8, 0x1], [0x2, 0x9, 0x21, 0x4, 0x4, 0x5, 0x6], [0x9, 0x7, 0xa, 0x6, 0x8, 0x8, 0x5]],
            'CSW': 4.8,
            'CSM': 0x4,
            'MT': 0x20,
            'ADV': [{
              'S': 0x4,
              'C': 0x5,
              'LN': 0x2,
              'WIN': 4.8,
              'GV': [{
                'Col': 0x0,
                'Row': 0x5
              }, {
                'Col': 0x1,
                'Row': 0x6
              }, {
                'Col': 0x2,
                'Row': 0x6
              }, {
                'Col': 0x3,
                'Row': 0x1
              }, {
                'Col': 0x4,
                'Row': 0x3
              }, {
                'Col': 0x4,
                'Row': 0x4
              }]
            }],
            'FS': [[0x9], [0x9], [0x8], [0x9], [0x2, 0x2], null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x1, 0x1, 0x0, 0x8, 0x6, 0x5, 0x9], [0x3, 0x5, 0x10, 0x7, 0x7, 0x6, 0x9], [0x0, 0x0, 0x7, 0x1, 0x1, 0x1, 0x8], [0x7, 0x5, 0x8, 0x8, 0x8, 0x1, 0x9], [0x2, 0x9, 0x21, 0x5, 0x6, 0x2, 0x2], [0x9, 0x7, 0xa, 0x6, 0x8, 0x8, 0x5]],
            'CSW': 2.4,
            'CSM': 0x6,
            'MT': 0x20,
            'ADV': [{
              'S': 0x9,
              'C': 0x2,
              'LN': 0x1,
              'WIN': 2.4,
              'GV': [{
                'Col': 0x0,
                'Row': 0x6
              }, {
                'Col': 0x1,
                'Row': 0x6
              }]
            }],
            'FS': [[0x1], [0x9], null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x1, 0x1, 0x0, 0x8, 0x6, 0x5, 0x1], [0x3, 0x5, 0x10, 0x7, 0x7, 0x6, 0x9], [0x0, 0x0, 0x7, 0x1, 0x1, 0x1, 0x8], [0x7, 0x5, 0x8, 0x8, 0x8, 0x1, 0x9], [0x2, 0x9, 0x21, 0x5, 0x6, 0x2, 0x2], [0x9, 0x7, 0xa, 0x6, 0x8, 0x8, 0x5]],
            'CSW': 0x0,
            'CSM': 0xa,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 7.6,
          'ATF': 0xb,
          'FRR': 0x7,
          'FCC': 0x10,
          'FCLV': 0x5
        }, {
          'CSD': [{
            'CSS': [[0x6, 0x0, 0x1, 0x1, 0x5, 0x0, 0x9], [0x7, 0x9, 0x4, 0x0, 0x7, 0x7, 0x3], [0x7, 0x6, 0x0, 0x0, 0x5, 0x7, 0x3], [0x7, 0x0, 0x4, 0x3, 0x5, 0x4, 0x0], [0x1, 0x1, 0x13, 0x6, 0x0, 0x4, 0x6], [0x1, 0x3, 0x0, 0x0, 0x0, 0x4, 0x2]],
            'CSW': 24.8,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': [{
              'S': 0x0,
              'C': 0x6,
              'LN': 0x18,
              'WIN': 0x18,
              'GV': [{
                'Col': 0x0,
                'Row': 0x1
              }, {
                'Col': 0x0,
                'Row': 0x5
              }, {
                'Col': 0x1,
                'Row': 0x3
              }, {
                'Col': 0x2,
                'Row': 0x2
              }, {
                'Col': 0x2,
                'Row': 0x3
              }, {
                'Col': 0x3,
                'Row': 0x1
              }, {
                'Col': 0x3,
                'Row': 0x6
              }, {
                'Col': 0x4,
                'Row': 0x4
              }, {
                'Col': 0x5,
                'Row': 0x2
              }, {
                'Col': 0x5,
                'Row': 0x3
              }, {
                'Col': 0x5,
                'Row': 0x4
              }]
            }, {
              'S': 0x9,
              'C': 0x2,
              'LN': 0x1,
              'WIN': 0.8,
              'GV': [{
                'Col': 0x0,
                'Row': 0x6
              }, {
                'Col': 0x1,
                'Row': 0x1
              }]
            }],
            'FS': [[0x0, 0x8, 0x3], [0x21, 0x9], [0x3, 0x8], [0x5, 0x4], [0x1], [0x7, 0x8, 0x1]],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x6, 0x1, 0x1, 0x5, 0x0, 0x8, 0x3], [0x7, 0x4, 0x7, 0x7, 0x3, 0x21, 0x9], [0x7, 0x6, 0x5, 0x7, 0x3, 0x3, 0x8], [0x7, 0x4, 0x3, 0x5, 0x4, 0x5, 0x4], [0x1, 0x1, 0x13, 0x6, 0x4, 0x6, 0x1], [0x1, 0x3, 0x4, 0x2, 0x7, 0x8, 0x1]],
            'CSW': 2.4,
            'CSM': 0x4,
            'MT': 0x20,
            'ADV': [{
              'S': 0x3,
              'C': 0x4,
              'LN': 0x2,
              'WIN': 2.4,
              'GV': [{
                'Col': 0x0,
                'Row': 0x6
              }, {
                'Col': 0x1,
                'Row': 0x4
              }, {
                'Col': 0x2,
                'Row': 0x4
              }, {
                'Col': 0x2,
                'Row': 0x5
              }, {
                'Col': 0x3,
                'Row': 0x2
              }]
            }],
            'FS': [[0x0], [0x9], [0x7, 0x4], [0x0], null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x6, 0x1, 0x1, 0x5, 0x0, 0x8, 0x0], [0x7, 0x4, 0x7, 0x7, 0x21, 0x9, 0x9], [0x7, 0x6, 0x5, 0x7, 0x8, 0x7, 0x4], [0x7, 0x4, 0x5, 0x4, 0x5, 0x4, 0x0], [0x1, 0x1, 0x13, 0x6, 0x4, 0x6, 0x1], [0x1, 0x3, 0x4, 0x2, 0x7, 0x8, 0x1]],
            'CSW': 0x0,
            'CSM': 0x6,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 27.2,
          'ATF': 0xb,
          'FRR': 0x6,
          'FCC': 0x11,
          'FCLV': 0x5
        }, {
          'CSD': [{
            'CSS': [[0x7, 0x12, 0x5, 0x2, 0x2, 0x7, 0x9], [0x2, 0x0, 0x6, 0x4, 0x3, 0x1, 0x7], [0x6, 0x2, 0x3, 0x8, 0x5, 0x4, 0x4], [0x6, 0x4, 0x3, 0x5, 0x8, 0x0, 0x2], [0xb, 0x2, 0x2, 0x2, 0x1, 0x6, 0xb], [0x8, 0x1, 0x2, 0x9, 0x5, 0x3, 0x4]],
            'CSW': 7.2,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': [{
              'S': 0x2,
              'C': 0x6,
              'LN': 0x6,
              'WIN': 7.2,
              'GV': [{
                'Col': 0x0,
                'Row': 0x3
              }, {
                'Col': 0x0,
                'Row': 0x4
              }, {
                'Col': 0x1,
                'Row': 0x0
              }, {
                'Col': 0x2,
                'Row': 0x1
              }, {
                'Col': 0x3,
                'Row': 0x6
              }, {
                'Col': 0x4,
                'Row': 0x1
              }, {
                'Col': 0x4,
                'Row': 0x2
              }, {
                'Col': 0x4,
                'Row': 0x3
              }, {
                'Col': 0x5,
                'Row': 0x2
              }]
            }],
            'FS': [[0x6, 0x4], [0x3], [0x2], [0x5], [0x1, 0x1, 0x0], [0x9]],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x7, 0x12, 0x5, 0x7, 0x9, 0x6, 0x4], [0x0, 0x6, 0x4, 0x3, 0x1, 0x7, 0x3], [0x6, 0x3, 0x8, 0x5, 0x4, 0x4, 0x2], [0x6, 0x4, 0x3, 0x5, 0x8, 0x0, 0x5], [0xb, 0x1, 0x6, 0xb, 0x1, 0x1, 0x0], [0x8, 0x1, 0x9, 0x5, 0x3, 0x4, 0x9]],
            'CSW': 7.2,
            'CSM': 0x4,
            'MT': 0x20,
            'ADV': [{
              'S': 0x4,
              'C': 0x4,
              'LN': 0x2,
              'WIN': 3.2,
              'GV': [{
                'Col': 0x0,
                'Row': 0x6
              }, {
                'Col': 0x1,
                'Row': 0x2
              }, {
                'Col': 0x2,
                'Row': 0x4
              }, {
                'Col': 0x2,
                'Row': 0x5
              }, {
                'Col': 0x3,
                'Row': 0x1
              }]
            }, {
              'S': 0x6,
              'C': 0x5,
              'LN': 0x1,
              'WIN': 0x4,
              'GV': [{
                'Col': 0x0,
                'Row': 0x5
              }, {
                'Col': 0x1,
                'Row': 0x1
              }, {
                'Col': 0x2,
                'Row': 0x0
              }, {
                'Col': 0x3,
                'Row': 0x0
              }, {
                'Col': 0x4,
                'Row': 0x2
              }]
            }],
            'FS': [[0x0, 0x8], [0x2, 0x7], [0x7, 0x5, 0x4], [0x5, 0x4], [0x5], null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x7, 0x12, 0x5, 0x7, 0x9, 0x0, 0x8], [0x0, 0x3, 0x1, 0x7, 0x3, 0x2, 0x7], [0x3, 0x8, 0x5, 0x2, 0x7, 0x5, 0x4], [0x3, 0x5, 0x8, 0x0, 0x5, 0x5, 0x4], [0xb, 0x1, 0xb, 0x1, 0x1, 0x0, 0x5], [0x8, 0x1, 0x9, 0x5, 0x3, 0x4, 0x9]],
            'CSW': 0xc,
            'CSM': 0x6,
            'MT': 0x20,
            'ADV': [{
              'S': 0x7,
              'C': 0x3,
              'LN': 0x4,
              'WIN': 0xc,
              'GV': [{
                'Col': 0x0,
                'Row': 0x0
              }, {
                'Col': 0x0,
                'Row': 0x3
              }, {
                'Col': 0x1,
                'Row': 0x3
              }, {
                'Col': 0x1,
                'Row': 0x6
              }, {
                'Col': 0x2,
                'Row': 0x4
              }]
            }],
            'FS': [[0x1, 0x0], [0x3, 0x4], [0x3], null, null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x12, 0x5, 0x9, 0x0, 0x8, 0x1, 0x0], [0x0, 0x3, 0x1, 0x3, 0x2, 0x3, 0x4], [0x3, 0x8, 0x5, 0x2, 0x5, 0x4, 0x3], [0x3, 0x5, 0x8, 0x0, 0x5, 0x5, 0x4], [0xb, 0x1, 0xb, 0x1, 0x1, 0x0, 0x5], [0x8, 0x1, 0x9, 0x5, 0x3, 0x4, 0x9]],
            'CSW': 0x0,
            'CSM': 0xa,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 26.4,
          'ATF': 0xb,
          'FRR': 0x5,
          'FCC': 0x11,
          'FCLV': 0x5
        }, {
          'CSD': [{
            'CSS': [[0x9, 0x0, 0x2, 0x6, 0x8, 0x1, 0x2], [0x7, 0x6, 0x4, 0x8, 0x8, 0x10, 0x5], [0x7, 0x1, 0x13, 0x6, 0x2, 0x7, 0x5], [0x4, 0x5, 0x5, 0x9, 0x6, 0x1, 0x9], [0x8, 0x1, 0x3, 0x5, 0x9, 0x4, 0x4], [0x3, 0x6, 0x5, 0x3, 0x8, 0x8, 0x11]],
            'CSW': 2.4,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': [{
              'S': 0x6,
              'C': 0x4,
              'LN': 0x2,
              'WIN': 2.4,
              'GV': [{
                'Col': 0x0,
                'Row': 0x3
              }, {
                'Col': 0x1,
                'Row': 0x1
              }, {
                'Col': 0x1,
                'Row': 0x5
              }, {
                'Col': 0x2,
                'Row': 0x3
              }, {
                'Col': 0x3,
                'Row': 0x4
              }]
            }],
            'FS': [[0x2], [0x1], [0x8], [0x7], null, null],
            'NFS': [null, [0x17], null, null, null, null]
          }, {
            'CSS': [[0x9, 0x0, 0x2, 0x8, 0x1, 0x2, 0x2], [0x7, 0x4, 0x8, 0x8, 0x17, 0x5, 0x1], [0x7, 0x1, 0x13, 0x2, 0x7, 0x5, 0x8], [0x4, 0x5, 0x5, 0x9, 0x1, 0x9, 0x7], [0x8, 0x1, 0x3, 0x5, 0x9, 0x4, 0x4], [0x3, 0x6, 0x5, 0x3, 0x8, 0x8, 0x11]],
            'CSW': 5.2,
            'CSM': 0x4,
            'MT': 0x20,
            'ADV': [{
              'S': 0x1,
              'C': 0x5,
              'LN': 0x1,
              'WIN': 1.2,
              'GV': [{
                'Col': 0x0,
                'Row': 0x4
              }, {
                'Col': 0x1,
                'Row': 0x6
              }, {
                'Col': 0x2,
                'Row': 0x1
              }, {
                'Col': 0x3,
                'Row': 0x4
              }, {
                'Col': 0x4,
                'Row': 0x1
              }]
            }, {
              'S': 0x8,
              'C': 0x3,
              'LN': 0x2,
              'WIN': 0x4,
              'GV': [{
                'Col': 0x0,
                'Row': 0x3
              }, {
                'Col': 0x1,
                'Row': 0x2
              }, {
                'Col': 0x1,
                'Row': 0x3
              }, {
                'Col': 0x2,
                'Row': 0x6
              }]
            }],
            'FS': [[0x5, 0x8], [0x9, 0x4, 0x8], [0x0, 0x5], [0x7], [0x4], null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x9, 0x0, 0x2, 0x2, 0x2, 0x5, 0x8], [0x7, 0x4, 0x17, 0x5, 0x9, 0x4, 0x8], [0x7, 0x13, 0x2, 0x7, 0x5, 0x0, 0x5], [0x4, 0x5, 0x5, 0x9, 0x9, 0x7, 0x7], [0x8, 0x3, 0x5, 0x9, 0x4, 0x4, 0x4], [0x3, 0x6, 0x5, 0x3, 0x8, 0x8, 0x11]],
            'CSW': 0x54,
            'CSM': 0x6,
            'MT': 0x20,
            'ADV': [{
              'S': 0x5,
              'C': 0x6,
              'LN': 0x4,
              'WIN': 0x30,
              'GV': [{
                'Col': 0x0,
                'Row': 0x5
              }, {
                'Col': 0x1,
                'Row': 0x3
              }, {
                'Col': 0x2,
                'Row': 0x4
              }, {
                'Col': 0x2,
                'Row': 0x6
              }, {
                'Col': 0x3,
                'Row': 0x1
              }, {
                'Col': 0x3,
                'Row': 0x2
              }, {
                'Col': 0x4,
                'Row': 0x2
              }, {
                'Col': 0x5,
                'Row': 0x2
              }]
            }, {
              'S': 0x9,
              'C': 0x5,
              'LN': 0x2,
              'WIN': 0x24,
              'GV': [{
                'Col': 0x0,
                'Row': 0x0
              }, {
                'Col': 0x1,
                'Row': 0x4
              }, {
                'Col': 0x2,
                'Row': 0x1
              }, {
                'Col': 0x3,
                'Row': 0x3
              }, {
                'Col': 0x3,
                'Row': 0x4
              }, {
                'Col': 0x4,
                'Row': 0x3
              }]
            }],
            'FS': [[0x3, 0x2], [0x8, 0x6], [0x4, 0x4], [0x8, 0x3, 0x7, 0x5], [0x6, 0x9], [0x1]],
            'NFS': [null, null, [0x15], null, null, null]
          }, {
            'CSS': [[0x0, 0x2, 0x2, 0x2, 0x8, 0x3, 0x2], [0x7, 0x4, 0x17, 0x4, 0x8, 0x8, 0x6], [0x7, 0x15, 0x2, 0x7, 0x0, 0x4, 0x4], [0x4, 0x7, 0x7, 0x8, 0x3, 0x7, 0x5], [0x8, 0x3, 0x4, 0x4, 0x4, 0x6, 0x9], [0x3, 0x6, 0x3, 0x8, 0x8, 0x11, 0x1]],
            'CSW': 0x0,
            'CSM': 0xa,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 91.6,
          'ATF': 0xb,
          'FRR': 0x4,
          'FCC': 0x11,
          'FCLV': 0x5
        }, {
          'CSD': [{
            'CSS': [[0x21, 0x7, 0x9, 0x0, 0x5, 0x8, 0x6], [0x5, 0x6, 0x2, 0x7, 0x7, 0x6, 0x4], [0x5, 0x7, 0x3, 0x3, 0x8, 0x7, 0x2], [0x5, 0x5, 0x5, 0x4, 0x0, 0x7, 0x8], [0x1, 0x0, 0x9, 0x5, 0x6, 0x3, 0x7], [0x6, 0x8, 0x0, 0x9, 0x9, 0x8, 0x3]],
            'CSW': 0x16,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': [{
              'S': 0x5,
              'C': 0x5,
              'LN': 0x3,
              'WIN': 0x6,
              'GV': [{
                'Col': 0x0,
                'Row': 0x4
              }, {
                'Col': 0x1,
                'Row': 0x0
              }, {
                'Col': 0x2,
                'Row': 0x0
              }, {
                'Col': 0x3,
                'Row': 0x0
              }, {
                'Col': 0x3,
                'Row': 0x1
              }, {
                'Col': 0x3,
                'Row': 0x2
              }, {
                'Col': 0x4,
                'Row': 0x3
              }]
            }, {
              'S': 0x7,
              'C': 0x5,
              'LN': 0x4,
              'WIN': 0x10,
              'GV': [{
                'Col': 0x0,
                'Row': 0x1
              }, {
                'Col': 0x1,
                'Row': 0x3
              }, {
                'Col': 0x1,
                'Row': 0x4
              }, {
                'Col': 0x2,
                'Row': 0x1
              }, {
                'Col': 0x2,
                'Row': 0x5
              }, {
                'Col': 0x3,
                'Row': 0x5
              }, {
                'Col': 0x4,
                'Row': 0x6
              }]
            }],
            'FS': [[0x1, 0x8], [0x8, 0x8, 0x8], [0x2, 0x2, 0x7], [0x0, 0x7, 0x7, 0x7], [0x8, 0x1], null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x21, 0x9, 0x0, 0x8, 0x6, 0x1, 0x8], [0x6, 0x2, 0x6, 0x4, 0x8, 0x8, 0x8], [0x3, 0x3, 0x8, 0x2, 0x2, 0x2, 0x7], [0x4, 0x0, 0x8, 0x0, 0x7, 0x7, 0x7], [0x1, 0x0, 0x9, 0x6, 0x3, 0x8, 0x1], [0x6, 0x8, 0x0, 0x9, 0x9, 0x8, 0x3]],
            'CSW': 0x90,
            'CSM': 0x4,
            'MT': 0x20,
            'ADV': [{
              'S': 0x8,
              'C': 0x6,
              'LN': 0xc,
              'WIN': 0x90,
              'GV': [{
                'Col': 0x0,
                'Row': 0x3
              }, {
                'Col': 0x0,
                'Row': 0x6
              }, {
                'Col': 0x1,
                'Row': 0x4
              }, {
                'Col': 0x1,
                'Row': 0x5
              }, {
                'Col': 0x1,
                'Row': 0x6
              }, {
                'Col': 0x2,
                'Row': 0x2
              }, {
                'Col': 0x3,
                'Row': 0x2
              }, {
                'Col': 0x4,
                'Row': 0x5
              }, {
                'Col': 0x5,
                'Row': 0x1
              }, {
                'Col': 0x5,
                'Row': 0x5
              }]
            }],
            'FS': [[0x4, 0x1], [0x5, 0x1, 0x6], [0x6], [0x4], [0x6], [0x7, 0x7]],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x21, 0x9, 0x0, 0x6, 0x1, 0x4, 0x1], [0x6, 0x2, 0x6, 0x4, 0x5, 0x1, 0x6], [0x3, 0x3, 0x2, 0x2, 0x2, 0x7, 0x6], [0x4, 0x0, 0x0, 0x7, 0x7, 0x7, 0x4], [0x1, 0x0, 0x9, 0x6, 0x3, 0x1, 0x6], [0x6, 0x0, 0x9, 0x9, 0x3, 0x7, 0x7]],
            'CSW': 7.2,
            'CSM': 0x6,
            'MT': 0x20,
            'ADV': [{
              'S': 0x6,
              'C': 0x3,
              'LN': 0x3,
              'WIN': 7.2,
              'GV': [{
                'Col': 0x0,
                'Row': 0x3
              }, {
                'Col': 0x1,
                'Row': 0x0
              }, {
                'Col': 0x1,
                'Row': 0x2
              }, {
                'Col': 0x1,
                'Row': 0x6
              }, {
                'Col': 0x2,
                'Row': 0x6
              }]
            }],
            'FS': [[0x8], [0x4, 0x8, 0x8], [0x2], null, null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x21, 0x9, 0x0, 0x1, 0x4, 0x1, 0x8], [0x2, 0x4, 0x5, 0x1, 0x4, 0x8, 0x8], [0x3, 0x3, 0x2, 0x2, 0x2, 0x7, 0x2], [0x4, 0x0, 0x0, 0x7, 0x7, 0x7, 0x4], [0x1, 0x0, 0x9, 0x6, 0x3, 0x1, 0x6], [0x6, 0x0, 0x9, 0x9, 0x3, 0x7, 0x7]],
            'CSW': 0x0,
            'CSM': 0xa,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 173.2,
          'ATF': 0x2b,
          'FRR': 0x5,
          'FCC': 0x12,
          'FCLV': 0x6
        }, {
          'CSD': [{
            'CSS': [[0x0, 0x3, 0x6, 0x1, 0x5, 0x4, 0x4], [0x8, 0x6, 0x3, 0x4, 0x6, 0x9, 0x4], [0x7, 0x0, 0x9, 0x6, 0x2, 0x7, 0x5], [0x7, 0x4, 0x3, 0x5, 0x8, 0x0, 0x2], [0x1, 0x2, 0x0, 0x8, 0x5, 0x1, 0x1], [0x3, 0x4, 0x8, 0x5, 0x9, 0x1, 0x6]],
            'CSW': 1.6,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': [{
              'S': 0x6,
              'C': 0x3,
              'LN': 0x2,
              'WIN': 1.6,
              'GV': [{
                'Col': 0x0,
                'Row': 0x2
              }, {
                'Col': 0x1,
                'Row': 0x1
              }, {
                'Col': 0x1,
                'Row': 0x4
              }, {
                'Col': 0x2,
                'Row': 0x3
              }]
            }],
            'FS': [[0x0], [0x8, 0x8], [0x8], null, null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x0, 0x3, 0x1, 0x5, 0x4, 0x4, 0x0], [0x8, 0x3, 0x4, 0x9, 0x4, 0x8, 0x8], [0x7, 0x0, 0x9, 0x2, 0x7, 0x5, 0x8], [0x7, 0x4, 0x3, 0x5, 0x8, 0x0, 0x2], [0x1, 0x2, 0x0, 0x8, 0x5, 0x1, 0x1], [0x3, 0x4, 0x8, 0x5, 0x9, 0x1, 0x6]],
            'CSW': 0x0,
            'CSM': 0x4,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 1.6,
          'ATF': 0xb,
          'FRR': 0x4,
          'FCC': 0x12,
          'FCLV': 0x6
        }, {
          'CSD': [{
            'CSS': [[0x2, 0x3, 0x1, 0x4, 0xf, 0x4, 0x0], [0x4, 0x3, 0x5, 0x9, 0x7, 0x5, 0x5], [0x2, 0x2, 0x2, 0x5, 0x8, 0x0, 0xd], [0x5, 0x0, 0x4, 0x9, 0x8, 0x5, 0x9], [0x2, 0x2, 0x9, 0x6, 0x4, 0x4, 0x5], [0x5, 0x2, 0x3, 0x9, 0x9, 0x6, 0x3]],
            'CSW': 24.4,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': [{
              'S': 0x3,
              'C': 0x3,
              'LN': 0x1,
              'WIN': 0.4,
              'GV': [{
                'Col': 0x0,
                'Row': 0x1
              }, {
                'Col': 0x1,
                'Row': 0x1
              }, {
                'Col': 0x2,
                'Row': 0x6
              }]
            }, {
              'S': 0x5,
              'C': 0x6,
              'LN': 0x6,
              'WIN': 0x18,
              'GV': [{
                'Col': 0x0,
                'Row': 0x4
              }, {
                'Col': 0x1,
                'Row': 0x2
              }, {
                'Col': 0x1,
                'Row': 0x5
              }, {
                'Col': 0x1,
                'Row': 0x6
              }, {
                'Col': 0x2,
                'Row': 0x3
              }, {
                'Col': 0x3,
                'Row': 0x0
              }, {
                'Col': 0x3,
                'Row': 0x5
              }, {
                'Col': 0x4,
                'Row': 0x6
              }, {
                'Col': 0x5,
                'Row': 0x0
              }]
            }],
            'FS': [[0x0], [0x3, 0x1, 0x4, 0x3], [0x7], [0x9, 0x4], [0x6], [0x4]],
            'NFS': [[0x19], null, [0x1a], null, null, null]
          }, {
            'CSS': [[0x2, 0x1, 0x4, 0x19, 0x4, 0x0, 0x0], [0x4, 0x9, 0x7, 0x3, 0x1, 0x4, 0x3], [0x2, 0x2, 0x2, 0x8, 0x0, 0x1a, 0x7], [0x0, 0x4, 0x9, 0x8, 0x9, 0x9, 0x4], [0x2, 0x2, 0x9, 0x6, 0x4, 0x4, 0x6], [0x2, 0x3, 0x9, 0x9, 0x6, 0x3, 0x4]],
            'CSW': 0x0,
            'CSM': 0x4,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 24.4,
          'ATF': 0xb,
          'FRR': 0x3,
          'FCC': 0x12,
          'FCLV': 0x6
        }, {
          'CSD': [{
            'CSS': [[0x8, 0x10, 0x1, 0x2, 0x5, 0x9, 0x1], [0x5, 0x9, 0x4, 0x6, 0x6, 0x8, 0x3], [0x0, 0x7, 0x6, 0x4, 0x3, 0x8, 0x5], [0x4, 0x4, 0x4, 0x4, 0x4, 0x5, 0x4], [0x3, 0x1, 0x0, 0x5, 0x4, 0x6, 0x3], [0x1, 0x3, 0x8, 0x9, 0x4, 0x4, 0x2]],
            'CSW': 5.4,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': [{
              'S': 0x5,
              'C': 0x5,
              'LN': 0x1,
              'WIN': 0x2,
              'GV': [{
                'Col': 0x0,
                'Row': 0x4
              }, {
                'Col': 0x1,
                'Row': 0x0
              }, {
                'Col': 0x2,
                'Row': 0x6
              }, {
                'Col': 0x3,
                'Row': 0x5
              }, {
                'Col': 0x4,
                'Row': 0x3
              }]
            }, {
              'S': 0x6,
              'C': 0x3,
              'LN': 0x2,
              'WIN': 1.6,
              'GV': [{
                'Col': 0x0,
                'Row': 0x1
              }, {
                'Col': 0x1,
                'Row': 0x3
              }, {
                'Col': 0x1,
                'Row': 0x4
              }, {
                'Col': 0x2,
                'Row': 0x2
              }]
            }, {
              'S': 0x8,
              'C': 0x3,
              'LN': 0x1,
              'WIN': 0x1,
              'GV': [{
                'Col': 0x0,
                'Row': 0x0
              }, {
                'Col': 0x1,
                'Row': 0x5
              }, {
                'Col': 0x2,
                'Row': 0x5
              }]
            }, {
              'S': 0x9,
              'C': 0x2,
              'LN': 0x1,
              'WIN': 0.8,
              'GV': [{
                'Col': 0x0,
                'Row': 0x5
              }, {
                'Col': 0x1,
                'Row': 0x1
              }]
            }],
            'FS': [[0x1, 0x8, 0x5], [0x1, 0x7, 0x9, 0x4, 0x0], [0x2, 0x2, 0x2], [0x0], [0x3], null],
            'NFS': [[0x19], null, null, null, null, null]
          }, {
            'CSS': [[0x19, 0x1, 0x2, 0x1, 0x1, 0x8, 0x5], [0x4, 0x3, 0x1, 0x7, 0x9, 0x4, 0x0], [0x0, 0x7, 0x4, 0x3, 0x2, 0x2, 0x2], [0x4, 0x4, 0x4, 0x4, 0x4, 0x4, 0x0], [0x3, 0x1, 0x0, 0x4, 0x6, 0x3, 0x3], [0x1, 0x3, 0x8, 0x9, 0x4, 0x4, 0x2]],
            'CSW': 0x0,
            'CSM': 0x4,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 5.4,
          'ATF': 0xb,
          'FRR': 0x2,
          'FCC': 0x12,
          'FCLV': 0x6
        }, {
          'CSD': [{
            'CSS': [[0x6, 0xa, 0x1, 0x1, 0x5, 0x0, 0x9], [0x4, 0x0, 0x6, 0x9, 0x1, 0x3, 0x6], [0x2, 0x2, 0x5, 0x0, 0x3, 0x1, 0xb], [0x6, 0x6, 0x6, 0x9, 0x3, 0x7, 0x0], [0x4, 0x5, 0x6, 0x0, 0x2, 0x2, 0x6], [0x2, 0x8, 0x8, 0x1, 0x5, 0x9, 0x9]],
            'CSW': 2.8,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': [{
              'S': 0x0,
              'C': 0x5,
              'LN': 0x2,
              'WIN': 1.2,
              'GV': [{
                'Col': 0x0,
                'Row': 0x1
              }, {
                'Col': 0x0,
                'Row': 0x5
              }, {
                'Col': 0x1,
                'Row': 0x1
              }, {
                'Col': 0x2,
                'Row': 0x3
              }, {
                'Col': 0x3,
                'Row': 0x6
              }, {
                'Col': 0x4,
                'Row': 0x3
              }]
            }, {
              'S': 0x1,
              'C': 0x3,
              'LN': 0x4,
              'WIN': 0.8,
              'GV': [{
                'Col': 0x0,
                'Row': 0x2
              }, {
                'Col': 0x0,
                'Row': 0x3
              }, {
                'Col': 0x1,
                'Row': 0x4
              }, {
                'Col': 0x2,
                'Row': 0x5
              }, {
                'Col': 0x2,
                'Row': 0x6
              }]
            }, {
              'S': 0x9,
              'C': 0x2,
              'LN': 0x1,
              'WIN': 0.8,
              'GV': [{
                'Col': 0x0,
                'Row': 0x6
              }, {
                'Col': 0x1,
                'Row': 0x3
              }]
            }],
            'FS': [[0x0, 0x8, 0x3, 0x0], [0x6, 0x7, 0x4], [0x9, 0x4], [0x6], [0x8], null],
            'NFS': [[0x17], null, [0x17], null, null, null]
          }, {
            'CSS': [[0x6, 0x17, 0x5, 0x0, 0x8, 0x3, 0x0], [0x4, 0x6, 0x3, 0x6, 0x6, 0x7, 0x4], [0x2, 0x2, 0x5, 0x3, 0x17, 0x9, 0x4], [0x6, 0x6, 0x6, 0x9, 0x3, 0x7, 0x6], [0x4, 0x5, 0x6, 0x2, 0x2, 0x6, 0x8], [0x2, 0x8, 0x8, 0x1, 0x5, 0x9, 0x9]],
            'CSW': 4.8,
            'CSM': 0x4,
            'MT': 0x20,
            'ADV': [{
              'S': 0x3,
              'C': 0x4,
              'LN': 0x4,
              'WIN': 4.8,
              'GV': [{
                'Col': 0x0,
                'Row': 0x1
              }, {
                'Col': 0x0,
                'Row': 0x5
              }, {
                'Col': 0x1,
                'Row': 0x2
              }, {
                'Col': 0x2,
                'Row': 0x3
              }, {
                'Col': 0x2,
                'Row': 0x4
              }, {
                'Col': 0x3,
                'Row': 0x4
              }]
            }],
            'FS': [[0x7], [0x3], [0x2], [0x6], null, null],
            'NFS': [[0x1e], null, [0x1e], null, null, null]
          }, {
            'CSS': [[0x6, 0x1e, 0x5, 0x0, 0x8, 0x0, 0x7], [0x4, 0x6, 0x6, 0x6, 0x7, 0x4, 0x3], [0x2, 0x2, 0x5, 0x1e, 0x9, 0x4, 0x2], [0x6, 0x6, 0x6, 0x9, 0x7, 0x6, 0x6], [0x4, 0x5, 0x6, 0x2, 0x2, 0x6, 0x8], [0x2, 0x8, 0x8, 0x1, 0x5, 0x9, 0x9]],
            'CSW': 380.4,
            'CSM': 0x6,
            'MT': 0x20,
            'ADV': [{
              'S': 0x3,
              'C': 0x3,
              'LN': 0x1,
              'WIN': 1.2,
              'GV': [{
                'Col': 0x0,
                'Row': 0x1
              }, {
                'Col': 0x1,
                'Row': 0x6
              }, {
                'Col': 0x2,
                'Row': 0x3
              }]
            }, {
              'S': 0x4,
              'C': 0x3,
              'LN': 0x4,
              'WIN': 7.2,
              'GV': [{
                'Col': 0x0,
                'Row': 0x1
              }, {
                'Col': 0x1,
                'Row': 0x0
              }, {
                'Col': 0x1,
                'Row': 0x5
              }, {
                'Col': 0x2,
                'Row': 0x3
              }, {
                'Col': 0x2,
                'Row': 0x5
              }]
            }, {
              'S': 0x6,
              'C': 0x5,
              'LN': 0x3c,
              'WIN': 0x168,
              'GV': [{
                'Col': 0x0,
                'Row': 0x0
              }, {
                'Col': 0x0,
                'Row': 0x1
              }, {
                'Col': 0x1,
                'Row': 0x1
              }, {
                'Col': 0x1,
                'Row': 0x2
              }, {
                'Col': 0x1,
                'Row': 0x3
              }, {
                'Col': 0x2,
                'Row': 0x3
              }, {
                'Col': 0x3,
                'Row': 0x0
              }, {
                'Col': 0x3,
                'Row': 0x1
              }, {
                'Col': 0x3,
                'Row': 0x2
              }, {
                'Col': 0x3,
                'Row': 0x5
              }, {
                'Col': 0x3,
                'Row': 0x6
              }, {
                'Col': 0x4,
                'Row': 0x2
              }, {
                'Col': 0x4,
                'Row': 0x5
              }]
            }, {
              'S': 0x7,
              'C': 0x4,
              'LN': 0x2,
              'WIN': 0xc,
              'GV': [{
                'Col': 0x0,
                'Row': 0x1
              }, {
                'Col': 0x0,
                'Row': 0x6
              }, {
                'Col': 0x1,
                'Row': 0x4
              }, {
                'Col': 0x2,
                'Row': 0x3
              }, {
                'Col': 0x3,
                'Row': 0x4
              }]
            }],
            'FS': [[0x1, 0x1, 0x0], [0x5, 0x9, 0x7, 0x5, 0x5, 0x3, 0x1], [0x2, 0x3], [0x7, 0x4, 0x0, 0x7, 0x8, 0x0], [0x1, 0x4], null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x5, 0x0, 0x8, 0x0, 0x1, 0x1, 0x0], [0x5, 0x9, 0x7, 0x5, 0x5, 0x3, 0x1], [0x2, 0x2, 0x5, 0x9, 0x2, 0x2, 0x3], [0x9, 0x7, 0x4, 0x0, 0x7, 0x8, 0x0], [0x4, 0x5, 0x2, 0x2, 0x8, 0x1, 0x4], [0x2, 0x8, 0x8, 0x1, 0x5, 0x9, 0x9]],
            'CSW': 0xc,
            'CSM': 0xa,
            'MT': 0x20,
            'ADV': [{
              'S': 0x5,
              'C': 0x3,
              'LN': 0x3,
              'WIN': 0xc,
              'GV': [{
                'Col': 0x0,
                'Row': 0x0
              }, {
                'Col': 0x1,
                'Row': 0x0
              }, {
                'Col': 0x1,
                'Row': 0x3
              }, {
                'Col': 0x1,
                'Row': 0x4
              }, {
                'Col': 0x2,
                'Row': 0x2
              }]
            }],
            'FS': [[0x5], [0x4, 0x4, 0x2], [0x8], null, null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x0, 0x8, 0x0, 0x1, 0x1, 0x0, 0x5], [0x9, 0x7, 0x3, 0x1, 0x4, 0x4, 0x2], [0x2, 0x2, 0x9, 0x2, 0x2, 0x3, 0x8], [0x9, 0x7, 0x4, 0x0, 0x7, 0x8, 0x0], [0x4, 0x5, 0x2, 0x2, 0x8, 0x1, 0x4], [0x2, 0x8, 0x8, 0x1, 0x5, 0x9, 0x9]],
            'CSW': 0x0,
            'CSM': 0xa,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 0x190,
          'ATF': 0xb,
          'FRR': 0x1,
          'FCC': 0x12,
          'FCLV': 0x6
        }, {
          'CSD': [{
            'CSS': [[0x2, 0x5, 0x2, 0x2, 0x0, 0x8, 0x6], [0x7, 0x7, 0x8, 0x2, 0x5, 0x6, 0x6], [0x4, 0x2, 0x2, 0x7, 0x6, 0x2, 0x3], [0x9, 0x8, 0x5, 0x9, 0x9, 0x4, 0x3], [0x0, 0x1, 0x6, 0x2, 0x2, 0x2, 0x0], [0x8, 0x3, 0x4, 0x8, 0x5, 0x2, 0x1]],
            'CSW': 5.2,
            'CSM': 0x2,
            'MT': 0x20,
            'ADV': [{
              'S': 0x2,
              'C': 0x3,
              'LN': 0x9,
              'WIN': 3.6,
              'GV': [{
                'Col': 0x0,
                'Row': 0x0
              }, {
                'Col': 0x0,
                'Row': 0x2
              }, {
                'Col': 0x0,
                'Row': 0x3
              }, {
                'Col': 0x1,
                'Row': 0x3
              }, {
                'Col': 0x2,
                'Row': 0x1
              }, {
                'Col': 0x2,
                'Row': 0x2
              }, {
                'Col': 0x2,
                'Row': 0x5
              }]
            }, {
              'S': 0x6,
              'C': 0x3,
              'LN': 0x2,
              'WIN': 1.6,
              'GV': [{
                'Col': 0x0,
                'Row': 0x6
              }, {
                'Col': 0x1,
                'Row': 0x5
              }, {
                'Col': 0x1,
                'Row': 0x6
              }, {
                'Col': 0x2,
                'Row': 0x4
              }]
            }],
            'FS': [[0x1, 0x2, 0x5, 0x9], [0x9, 0x1, 0x6], [0x8, 0x5, 0x4, 0x4], null, null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x5, 0x0, 0x8, 0x1, 0x2, 0x5, 0x9], [0x7, 0x7, 0x8, 0x5, 0x9, 0x1, 0x6], [0x4, 0x7, 0x3, 0x8, 0x5, 0x4, 0x4], [0x9, 0x8, 0x5, 0x9, 0x9, 0x4, 0x3], [0x0, 0x1, 0x6, 0x2, 0x2, 0x2, 0x0], [0x8, 0x3, 0x4, 0x8, 0x5, 0x2, 0x1]],
            'CSW': 10.4,
            'CSM': 0x4,
            'MT': 0x20,
            'ADV': [{
              'S': 0x5,
              'C': 0x4,
              'LN': 0x2,
              'WIN': 4.8,
              'GV': [{
                'Col': 0x0,
                'Row': 0x0
              }, {
                'Col': 0x0,
                'Row': 0x5
              }, {
                'Col': 0x1,
                'Row': 0x3
              }, {
                'Col': 0x2,
                'Row': 0x4
              }, {
                'Col': 0x3,
                'Row': 0x2
              }]
            }, {
              'S': 0x8,
              'C': 0x4,
              'LN': 0x1,
              'WIN': 0x4,
              'GV': [{
                'Col': 0x0,
                'Row': 0x2
              }, {
                'Col': 0x1,
                'Row': 0x2
              }, {
                'Col': 0x2,
                'Row': 0x3
              }, {
                'Col': 0x3,
                'Row': 0x1
              }]
            }, {
              'S': 0x9,
              'C': 0x2,
              'LN': 0x1,
              'WIN': 1.6,
              'GV': [{
                'Col': 0x0,
                'Row': 0x6
              }, {
                'Col': 0x1,
                'Row': 0x4
              }]
            }],
            'FS': [[0x1, 0x1, 0x8, 0x21], [0x7, 0x7, 0x4], [0x2, 0x7], [0x0, 0x1], null, null],
            'NFS': [null, null, null, null, null, null]
          }, {
            'CSS': [[0x0, 0x1, 0x2, 0x1, 0x1, 0x8, 0x21], [0x7, 0x7, 0x1, 0x6, 0x7, 0x7, 0x4], [0x4, 0x7, 0x3, 0x4, 0x4, 0x2, 0x7], [0x9, 0x9, 0x9, 0x4, 0x3, 0x0, 0x1], [0x0, 0x1, 0x6, 0x2, 0x2, 0x2, 0x0], [0x8, 0x3, 0x4, 0x8, 0x5, 0x2, 0x1]],
            'CSW': 0x0,
            'CSM': 0x6,
            'MT': 0x20,
            'ADV': null,
            'FS': [null, null, null, null, null, null],
            'NFS': [null, null, null, null, null, null]
          }],
          'RW': 15.6,
          'ATF': 0x1b,
          'FRR': 0x0,
          'FCC': 0x13,
          'FCLV': 0x6
        }],
        'TotalWin': 1005.8,
        'FreeTotalWin': 1005.8,
        'AckType': 0x0,
        'ShowIndex': '',
        'NowMoney': null,
        'trialfinish': false,
        'trialaward': 0x0
      }];
      _0x3c3037._RF.pop();
      _0x3c3037._RF.push({}, "39de4yLu9lEoY/ydckebus0", "SlotReels", undefined);
      var _0x25b2ee = _0x11b6a5.ccclass;
      var _0x179f3e = _0x11b6a5.property;
      var _0x437c7e = [[[0x3, 0x1, 0x3], [0x8, 0x2, 0x7, 0x2], [0x2, 0x1, 0x7, 0x6, 0x5], [0x6, 0x5, 0x8, 0x5, 0x7, 0x1], [0x1, 0x9], [0x8, 0x4, 0x5, 0x6, 0x5, 0x8, 0x5]], [[0x4, 0x4, 0x4], [0x1, 0x9, 0x8, 0x5, 0x8], [0x8, 0x2, 0x7, 0x1], [0x6, 0x5, 0x8, 0x5, 0x7, 0x1], [0x2, 0x1], [0x8, 0x4, 0x5, 0x6, 0x5, 0x8, 0x5]], [[0x3, 0x2, 0x1], [0x9, 0x9, 0x8, 0x5, 0x7, 0x8, 0x5], [0x1, 0x1, 0x1, 0x7, 0x2], [0x2, 0x1, 0x7, 0x6], [0x6, 0x5], [0x8, 0x4, 0x5, 0x6, 0x5, 0x8, 0x5]], [[0x6, 0x6, 0x6], [0x1, 0x9, 0x8, 0x5, 0x7, 0x8, 0x5], [0x1, 0x1, 0x1], [0x8, 0x2, 0x7, 0x1], [0x6, 0x5], [0x8, 0x4, 0x5, 0x6, 0x5, 0x8, 0x5]], [[0x3, 0x7, 0x9], [0x8, 0x2, 0x1, 0x1], [0x5, 0x8, 0x1, 0x6, 0x5, 0x8, 0x5], [0x3, 0x1, 0x5, 0x6, 0x5, 0x4, 0x4], [0x8, 0x9], [0x8, 0x4, 0x5, 0x6, 0x5, 0x8, 0x5]]];
      _0x2533b5 = _0x179f3e({
        'type': _0x4747fb,
        'tooltip': "各symbol圖(Megaways/Plist/Symbol/底下)"
      });
      _0x5c3468 = _0x179f3e({
        'type': _0x4747fb,
        'tooltip': "symbol13 收集 聖甲蟲"
      });
      _0x55f706 = _0x179f3e({
        'type': _0x3d3e4a,
        'tooltip': "Symbol Prefabs"
      });
      _0x478607 = _0x179f3e({
        'type': _0x4747fb,
        'tooltip': "symbol_f_gold"
      });
      _0x5817b6 = _0x179f3e({
        'type': _0x4747fb,
        'tooltip': "symbol_f_silver"
      });
      _0xf29f6c = function (_0x366696) {
        function _0x3a919d() {
          var _0x45b198;
          var _0x158876 = arguments.length;
          var _0x231371 = new Array(_0x158876);
          for (var _0x3b79e2 = 0x0; _0x3b79e2 < _0x158876; _0x3b79e2++) {
            _0x231371[_0x3b79e2] = arguments[_0x3b79e2];
          }
          _0x45b198 = _0x366696.call.apply(_0x366696, [this].concat(_0x231371)) || this;
          _0x4f750c(_0x45b198, "m_symbolSpriteFrames", _0x2acfee, _0x4acdb1(_0x45b198));
          _0x4f750c(_0x45b198, "m_symbol13gray", _0x4f84ce, _0x4acdb1(_0x45b198));
          _0x4f750c(_0x45b198, 'm_symbolPrefabs', _0x37c430, _0x4acdb1(_0x45b198));
          _0x4f750c(_0x45b198, "m_symbol_f_gold", _0x58fcac, _0x4acdb1(_0x45b198));
          _0x4f750c(_0x45b198, "m_symbol_f_silver", _0x302171, _0x4acdb1(_0x45b198));
          _0x45b198.m_intervalTime = 0.02;
          _0x45b198.m_symbolSize_OneCol = null;
          _0x45b198.m_viewSize = null;
          _0x45b198.m_gameView = null;
          _0x45b198.m_symbolSizeVec = [];
          _0x45b198.m_reelPositionOffset = [_0x453ef5(0x0, 0x0), _0x453ef5(0x0, 0x0), _0x453ef5(0x0, 0x0), _0x453ef5(0x0, 0x0), _0x453ef5(0x0, 0x0), _0x453ef5(0x0, 0x0)];
          _0x45b198.m_symbol = new Array();
          _0x45b198.m_symbol_upper = new Array();
          _0x45b198.m_symbol_lower = new Array();
          _0x45b198.m_main_LayoutByCol = new Array();
          _0x45b198.m_upper_LayoutByCol = new Array();
          _0x45b198.m_lower_LayoutByCol = new Array();
          _0x45b198.m_fillArray = new Array();
          _0x45b198.m_plateInfo = new Array();
          _0x45b198.m_HoleList = new Array();
          _0x45b198.m_UpgradeList = new Array();
          _0x45b198.m_plateSymbolPostion_Y = new Array();
          _0x45b198.m_reelStopTime = new Array();
          _0x45b198.m_reelPreTime = new Array();
          _0x45b198.m_isChangeSymbol = new Array();
          _0x45b198.m_isChangeToFinalSymbol = new Array();
          _0x45b198.m_time = 0x0;
          _0x45b198.m_stopTime = 0x0;
          _0x45b198.m_riseTime = 0x0;
          _0x45b198.m_spinBufferTime01 = 0.05;
          _0x45b198.m_spinBufferTime02 = 0.08;
          _0x45b198.m_spinSpeed = 0.18;
          _0x45b198.m_upLength = 0x14;
          _0x45b198.m_downLength = 0x1e;
          _0x45b198.m_timesOfBaseSpin = 0x1;
          _0x45b198.m_spinIntervalTimes = 0x2;
          _0x45b198.m_spinDelayTime = 0x0;
          _0x45b198.m_isStop = false;
          _0x45b198.m_hardStopIntervalTime = 0.15;
          _0x45b198.m_symbolDropSpeed = 0.18;
          _0x45b198.m_symbolDropSpeedFast = 0.144;
          _0x45b198.m_secondScatterCol = -0x1;
          _0x45b198.m_thirdScatterCol = -0x1;
          _0x45b198.m_nowStopColum = 0x0;
          _0x45b198.m_nearWinLock = [true, true, true, true, true, true];
          _0x45b198.m_nearWinStartFunc = null;
          _0x45b198.m_nearWinEndFunc = null;
          _0x45b198.m_isTailMatch = false;
          _0x45b198.m_isFallingFinish = false;
          _0x45b198.m_isClickStopBtn = false;
          _0x45b198.m_playStopSound = null;
          _0x45b198.m_isPlaySound = [false, false, false, false, false];
          _0x45b198.m_reelSoundId = null;
          _0x45b198.m_nearWinSoundId = [-0x1, -0x1, -0x1, -0x1, -0x1, -0x1];
          _0x45b198.m_lockColumn = new Array();
          _0x45b198.m_errorMsgCount = false;
          _0x45b198.m_beginPlateIndex = -0x1;
          return _0x45b198;
        }
        _0x30ca45(_0x3a919d, _0x366696);
        var _0x3bb7a8 = _0x3a919d.prototype;
        _0x3bb7a8.onLoad = function () {
          var _0x2a0a4c = this;
          _0x4bea68(" onLoad ");
          this.m_viewSize = this.node.getComponent(_0x12df1e).contentSize;
          for (var _0x56a4b5 = 0x0; _0x56a4b5 < _0x44b969.NORMAL_SYMBOL_SIZE; _0x56a4b5++) {
            var _0x267124 = [];
            for (var _0x4d1a53 = 0x0; _0x4d1a53 < 0x2 * this.m_viewSize.height / _0x44b969.SYMBOL_HEIGHT[_0x56a4b5]; _0x4d1a53++) {
              _0x267124.push(_0x44b969.SYMBOL_HEIGHT[_0x56a4b5] * (_0x4d1a53 + 0.5));
            }
            this.m_plateSymbolPostion_Y.push(_0x267124);
          }
          this.m_symbolSize_OneCol = new _0x165fa8(this.m_viewSize.width / 0x6, this.m_viewSize.height);
          for (var _0x2f319f = 0x2; _0x2f319f <= 0x7; _0x2f319f++) {
            var _0x28dd2c = new _0x165fa8(this.m_viewSize.width / 0x6, this.m_viewSize.height / _0x2f319f);
            this.m_symbolSizeVec.push(_0x28dd2c);
          }
          var _0x1b292c = Math.floor(Math.random() * _0x437c7e.length);
          this.m_beginPlateIndex = _0x1b292c;
          this.m_gameView.OldRealPlate = _0x437c7e[this.m_beginPlateIndex];
          var _0x5806ad = 0x1;
          for (var _0x1cc4cc = 0x0; _0x1cc4cc < 0x6; _0x1cc4cc++) {
            _0x5806ad *= _0x437c7e[_0x1b292c][_0x1cc4cc].length;
          }
          this.m_gameView.SetNowRoundLineNum(_0x5806ad);
          for (var _0x1749cc = 0x0; _0x1749cc < 0x6; _0x1749cc++) {
            this.m_lockColumn.push(false);
            this.m_reelStopTime.push(null);
            this.m_reelPreTime.push(null);
            var _0x264833 = new Array();
            var _0x426938 = _0x437c7e[_0x1b292c][_0x1749cc].length;
            var _0x2efd3d = this.GetSymbolSizeId(_0x426938);
            var _0x1da6ac = new _0x3fa416();
            _0x1da6ac.addComponent(_0x12df1e);
            _0x1da6ac.name = _0x1749cc.toString();
            _0x1da6ac.getComponent(_0x12df1e).setAnchorPoint(0.5, 0x0);
            var _0x4d593f = this.m_symbolSize_OneCol.width * (_0x1749cc + 0.5) + this.m_reelPositionOffset[_0x1749cc].x - this.m_viewSize.width / 0x2;
            var _0x6bdbb8 = this.m_viewSize.height / 0x2;
            _0x1da6ac.setPosition(_0x453ef5(_0x4d593f, -_0x6bdbb8));
            var _0x47e676 = _0x1da6ac.addComponent(_0x29c2dc);
            _0x47e676.resizeMode = _0x29c2dc.ResizeMode.CONTAINER;
            _0x47e676.type = _0x29c2dc.Type.VERTICAL;
            _0x47e676.verticalDirection = _0x29c2dc.VerticalDirection.BOTTOM_TO_TOP;
            for (var _0x4d5f77 = 0x0; _0x4d5f77 < 14; _0x4d5f77++) {
              var _0x4b0a9e = new _0x3fa416();
              _0x4b0a9e = _0x57425c(this.m_symbolPrefabs);
              _0x264833.push(_0x4b0a9e);
              _0x1da6ac.addChild(_0x4b0a9e);
              _0x4b0a9e.setPosition(_0x453ef5(0x0, this.m_plateSymbolPostion_Y[_0x2efd3d][_0x4d5f77]));
              if (_0x4d5f77 < _0x426938) {
                _0x4b0a9e.getComponent(_0x12df1e).setContentSize(_0x44b969.SYMBOL_WEIGHT, _0x44b969.SYMBOL_HEIGHT[_0x2efd3d]);
                this.setSymbolClothes(_0x4b0a9e, _0x437c7e[_0x1b292c][_0x1749cc][_0x4d5f77], _0x2efd3d);
              } else {
                _0x4b0a9e.active = false;
              }
            }
            this.node.addChild(_0x1da6ac);
            this.m_main_LayoutByCol.push(_0x1da6ac);
            this.m_symbol.push(_0x264833);
            this.m_isChangeToFinalSymbol.push(false);
            var _0x5df252 = function () {
              var _0x16fb6a = _0x3771d2.TempoSetting.GoldenEmpire;
              _0x2a0a4c.m_riseTime = _0x16fb6a.BASE.RISE_TIME;
              _0x2a0a4c.m_upLength = _0x16fb6a.BASE.UP_LENGTH;
              _0x2a0a4c.m_spinBufferTime01 = _0x16fb6a.BASE.SPIN_BUFFER_TIME_01;
              _0x2a0a4c.m_spinBufferTime02 = _0x16fb6a.BASE.SPIN_BUFFER_TIME_02;
              _0x2a0a4c.m_downLength = _0x16fb6a.BASE.DOWN_LENGTH;
              _0x2a0a4c.m_spinSpeed = _0x16fb6a.BASE.SPIN_SPEED;
              _0x2a0a4c.m_timesOfBaseSpin = _0x16fb6a.BASE.TIMES_OF_BASE_SPIN;
              _0x2a0a4c.m_spinIntervalTimes = _0x16fb6a.BASE.SPIN_INTERVAL_TIMES;
              _0x2a0a4c.m_spinDelayTime = _0x16fb6a.BASE.SPIN_DELAY_TIME;
              _0x2a0a4c.m_hardStopIntervalTime = _0x16fb6a.BASE.HARD_STOP_INTERVAL_TIME;
              _0x2a0a4c.m_symbolDropSpeed = _0x16fb6a.SYMBOL_DROP_SPEED.NORMAL;
              _0x2a0a4c.m_symbolDropSpeedFast = _0x16fb6a.SYMBOL_DROP_SPEED.SPEED_UP;
            };
            _0x5df252();
            _0x3771d2.AddCb(_0x5df252);
          }
          for (var _0x873c95 = 0x0; _0x873c95 < 0x6; _0x873c95++) {
            var _0x2d3efb = this.RandomColLength();
            var _0x39558f = this.GetSymbolSizeId(_0x2d3efb);
            var _0x1d3fa7 = new _0x3fa416();
            _0x1d3fa7.addComponent(_0x12df1e);
            _0x1d3fa7.name = (0x6 + _0x873c95).toString();
            _0x1d3fa7.getComponent(_0x12df1e).setAnchorPoint(0.5, 0x0);
            var _0x44048d = this.m_symbolSize_OneCol.width * (_0x873c95 + 0.5) + this.m_reelPositionOffset[_0x873c95].x - this.m_viewSize.width / 0x2;
            var _0x42aaa1 = 1.5 * this.m_symbolSize_OneCol.height + this.m_reelPositionOffset[_0x873c95].y - this.m_viewSize.height / 0x2 - this.m_viewSize.height / 0x2;
            _0x1d3fa7.setPosition(_0x453ef5(_0x44048d, _0x42aaa1));
            var _0x1ab0e7 = _0x1d3fa7.addComponent(_0x29c2dc);
            _0x1ab0e7.resizeMode = _0x29c2dc.ResizeMode.CONTAINER;
            _0x1ab0e7.type = _0x29c2dc.Type.VERTICAL;
            _0x1ab0e7.verticalDirection = _0x29c2dc.VerticalDirection.BOTTOM_TO_TOP;
            var _0x224d83 = new Array();
            for (var _0x3c01b7 = 0x0; _0x3c01b7 < 0x7; _0x3c01b7++) {
              var _0x4f899c = new _0x3fa416();
              _0x4f899c = _0x57425c(this.m_symbolPrefabs);
              _0x1d3fa7.addChild(_0x4f899c);
              _0x224d83.push(_0x4f899c);
              if (_0x3c01b7 < _0x2d3efb) {
                _0x4f899c.getComponent(_0x12df1e).setContentSize(_0x44b969.SYMBOL_WEIGHT, _0x44b969.SYMBOL_HEIGHT[_0x39558f]);
                var _0x3dfd26 = this.RandomSymbol();
                this.setSymbolClothes(_0x4f899c, _0x3dfd26, _0x39558f);
              } else {
                _0x4f899c.active = false;
              }
            }
            this.node.addChild(_0x1d3fa7);
            this.m_upper_LayoutByCol.push(_0x1d3fa7);
            this.m_symbol_upper.push(_0x224d83);
            _0x2d3efb = this.RandomColLength();
            _0x39558f = this.GetSymbolSizeId(_0x2d3efb);
            var _0x2a271d = new _0x3fa416();
            _0x2a271d.addComponent(_0x12df1e);
            _0x2a271d.name = (12 + _0x873c95).toString();
            _0x2a271d.getComponent(_0x12df1e).setAnchorPoint(0.5, 0x0);
            _0x44048d = this.m_symbolSize_OneCol.width * (_0x873c95 + 0.5) + this.m_reelPositionOffset[_0x873c95].x - this.m_viewSize.width / 0x2;
            _0x42aaa1 = -0.5 * this.m_symbolSize_OneCol.height + this.m_reelPositionOffset[_0x873c95].y - this.m_viewSize.height / 0x2 - this.m_viewSize.height / 0x2;
            _0x2a271d.setPosition(_0x453ef5(_0x44048d, _0x42aaa1));
            var _0x596866 = _0x2a271d.addComponent(_0x29c2dc);
            _0x596866.resizeMode = _0x29c2dc.ResizeMode.CONTAINER;
            _0x596866.type = _0x29c2dc.Type.VERTICAL;
            _0x596866.verticalDirection = _0x29c2dc.VerticalDirection.BOTTOM_TO_TOP;
            var _0x5b2307 = new Array();
            for (var _0x5d9f3d = 0x0; _0x5d9f3d < 0x7; _0x5d9f3d++) {
              var _0x3076a6 = new _0x3fa416();
              _0x3076a6 = _0x57425c(this.m_symbolPrefabs);
              _0x2a271d.addChild(_0x3076a6);
              _0x5b2307.push(_0x3076a6);
              if (_0x5d9f3d < _0x2d3efb) {
                _0x3076a6.getComponent(_0x12df1e).setContentSize(_0x44b969.SYMBOL_WEIGHT, _0x44b969.SYMBOL_HEIGHT[_0x39558f]);
                var _0x3d73b2 = this.RandomSymbol();
                this.setSymbolClothes(_0x3076a6, _0x3d73b2, _0x39558f);
              } else {
                _0x3076a6.active = false;
              }
            }
            this.node.addChild(_0x2a271d);
            this.m_lower_LayoutByCol.push(_0x2a271d);
            this.m_symbol_lower.push(_0x5b2307);
          }
        };
        _0x3bb7a8.Init = function (_0x13c50c) {
          this.m_gameView = _0x13c50c;
        };
        _0x3bb7a8.start = function () {};
        _0x3bb7a8.StartSpin = function (_0x1c5b6a) {
          if (undefined === _0x1c5b6a) {
            _0x1c5b6a = true;
          }
          this.m_time = 0x0;
          this.m_stopTime = 0x0;
          this.m_errorMsgCount = false;
          this.m_isStop = false;
          this.m_isFallingFinish = false;
          this.m_isTailMatch = false;
          this.m_isClickStopBtn = false;
          this.m_isPlaySound = [false, false, false, false, false];
          if (_0x1c5b6a) {
            for (var _0xfdab72 = 0x0; _0xfdab72 < 0x6; _0xfdab72++) {
              this.m_lockColumn[_0xfdab72] = false;
            }
          }
          for (var _0x18a774 = 0x0; _0x18a774 < 0x6; _0x18a774++) {
            this.m_reelStopTime[_0x18a774] = null;
            this.m_reelPreTime[_0x18a774] = null;
          }
          for (var _0x1f60f0 = 0x0; _0x1f60f0 < 0x6; _0x1f60f0++) {
            if (!this.m_lockColumn[_0x1f60f0]) {
              this.m_main_LayoutByCol[_0x1f60f0].active = true;
            }
          }
          for (var _0x499d2a = 0x0; _0x499d2a < this.m_lower_LayoutByCol.length; _0x499d2a++) {
            this.m_lower_LayoutByCol[_0x499d2a].active = true;
          }
          for (var _0x393c95 = 0x0; _0x393c95 < this.m_upper_LayoutByCol.length; _0x393c95++) {
            this.m_upper_LayoutByCol[_0x393c95].active = true;
          }
          for (var _0xb2f88c = 0x0; _0xb2f88c < 0x6; _0xb2f88c++) {
            this.m_isChangeToFinalSymbol[_0xb2f88c] = false;
          }
          if (!this.m_gameView.IsHardStop) {
            this.m_reelSoundId = _0x42891d.Play(_0x44b969.AudioClips.Reel_run, false, null, 0x1);
          }
        };
        _0x3bb7a8.SetIsClickStopBtn = function (_0x4b27aa) {
          if (undefined === _0x4b27aa) {
            _0x4b27aa = false;
          }
          this.m_isClickStopBtn = true;
          if (0x0 != this.m_stopTime) {
            var _0x4fa556 = Math.ceil(this.m_time / this.m_spinSpeed);
            _0x4fa556 = _0x4fa556 > 0x0 ? _0x4fa556 : 0x1;
            this.m_time = _0x4b27aa ? this.m_time + 0.001 : this.m_time;
            var _0x311719 = _0x3771d2.TempoSetting.GoldenEmpire.SPEED_UP_STOP_TIME(0x0, this.m_time);
            if (_0x311719 < this.m_stopTime) {
              this.m_stopTime = _0xf79e94.strip(_0x311719);
            }
            var _0x5e57c2 = _0x4fa556 * this.m_spinSpeed;
            for (var _0x13fb92 = 0x0; _0x13fb92 < 0x6; _0x13fb92++) {
              if (this.m_reelStopTime[_0x13fb92] > _0x5e57c2) {
                this.m_reelStopTime[_0x13fb92] = _0xf79e94.strip(_0x5e57c2);
                this.m_reelPreTime[_0x13fb92] = (_0x4fa556 - 0x1) * this.m_spinSpeed;
              }
            }
          }
        };
        _0x3bb7a8.Spin = function (_0xfd765d) {
          this.m_time = _0xf79e94.strip(this.m_time + _0xfd765d);
          if (!this.m_isStop && (this.Spin_RealSpinMultiple(_0xfd765d), this.m_time >= this.m_stopTime && 0x0 != this.m_stopTime && this.IsAllSymbolChangeToRight())) {
            this.m_isStop = true;
            if (this.m_nearWinEndFunc) {
              this.m_nearWinEndFunc();
              this.m_nearWinEndFunc = null;
              this.m_nearWinStartFunc = null;
            }
            if (this.IsNearWin) {
              for (var _0x3b9a52 = 0x0; _0x3b9a52 < 0x6; _0x3b9a52++) {
                _0x42891d.Stop(this.m_nearWinSoundId[_0x3b9a52]);
                this.m_nearWinSoundId[_0x3b9a52] = -0x1;
              }
            }
            if (this.m_reelSoundId) {
              _0x42891d.Stop(this.m_reelSoundId);
              this.m_reelSoundId = null;
            }
            for (var _0x404c81 = 0x0; _0x404c81 < this.m_lower_LayoutByCol.length; _0x404c81++) {
              this.m_lower_LayoutByCol[_0x404c81].active = false;
            }
            for (var _0x4bef5d = 0x0; _0x4bef5d < this.m_upper_LayoutByCol.length; _0x4bef5d++) {
              this.m_upper_LayoutByCol[_0x4bef5d].active = false;
            }
          }
        };
        _0x3bb7a8.SetIsFallingFinish = function (_0x58a3b2) {
          this.m_isFallingFinish = _0x58a3b2;
        };
        _0x3bb7a8.SetIsTailMatch = function (_0x1f455e) {
          this.m_isTailMatch = _0x1f455e;
        };
        _0x3bb7a8.GetHoleList = function () {
          return this.m_HoleList;
        };
        _0x3bb7a8.GetUpgradeList = function () {
          return this.m_UpgradeList;
        };
        _0x3bb7a8.CreateHoleList = function (_0x35c7c0) {
          this.m_HoleList = null;
          this.m_UpgradeList = [];
          var _0x13cf7e = _0x35c7c0.ADV;
          var _0x256473 = [];
          for (var _0x344b9a = 0x0; _0x344b9a < 0x6; _0x344b9a++) {
            var _0x3ae72f = [];
            for (var _0x430360 = 0x0; _0x430360 < this.m_plateInfo[_0x344b9a].length; _0x430360++) {
              _0x3ae72f.push(false);
            }
            _0x256473.push(_0x3ae72f);
          }
          for (var _0x4b49fb = 0x0; _0x4b49fb < _0x13cf7e.length; _0x4b49fb++) {
            for (var _0x57a0ef = 0x0; _0x57a0ef < _0x13cf7e[_0x4b49fb].GV.length; _0x57a0ef++) {
              _0x256473[_0x13cf7e[_0x4b49fb].GV[_0x57a0ef].Col][_0x13cf7e[_0x4b49fb].GV[_0x57a0ef].Row] = true;
            }
          }
          var _0x449a15 = _0x35c7c0.NFS;
          for (var _0x31a12f = 0x0; _0x31a12f < 0x6; _0x31a12f++) {
            if (_0x449a15[_0x31a12f]) {
              for (var _0x46ba0d = 0x0; _0x46ba0d < _0x449a15[_0x31a12f].length; _0x46ba0d++) {
                if (_0x449a15[_0x31a12f][_0x46ba0d]) {
                  for (var _0x1a8093 = 0x0; _0x1a8093 < this.m_plateInfo[_0x31a12f].length; _0x1a8093++) {
                    if (_0x256473[_0x31a12f][_0x1a8093] && this.m_plateInfo[_0x31a12f][_0x1a8093] >= _0x44b969.SILVER_START && this.m_plateInfo[_0x31a12f][_0x1a8093] < _0x44b969.SYMBOL_WILD) {
                      _0x256473[_0x31a12f][_0x1a8093] = false;
                      var _0x5ee9d3 = new _0x3b6778();
                      _0x5ee9d3.Col = _0x31a12f;
                      _0x5ee9d3.Row = _0x1a8093;
                      _0x5ee9d3.Symbol = this.m_plateInfo[_0x31a12f][_0x1a8093];
                      _0x5ee9d3.Symbol_NextUpgrade = _0x449a15[_0x31a12f][_0x46ba0d];
                      this.m_UpgradeList.push(_0x5ee9d3);
                      break;
                    }
                  }
                }
              }
            }
          }
          var _0x3c540a = Array();
          for (var _0x24d08e = 0x0; _0x24d08e < 0x6; _0x24d08e++) {
            for (var _0x46402b = this.m_plateInfo[_0x24d08e].length - 0x1; _0x46402b >= 0x0; _0x46402b--) {
              if (_0x256473[_0x24d08e][_0x46402b]) {
                var _0x4516ed = new _0x3b6778();
                _0x4516ed.Col = _0x24d08e;
                _0x4516ed.Row = _0x46402b;
                _0x3c540a.push(_0x4516ed);
              }
            }
          }
          this.m_HoleList = Object.assign([], _0x3c540a);
        };
        _0x3bb7a8.CreateFillArray = function () {
          this.m_fillArray = [];
          for (var _0x4f1953 = 0x0; _0x4f1953 < 0x6; _0x4f1953++) {
            var _0x347a14 = Array();
            for (var _0x5b9d24 = 0x0; _0x5b9d24 < this.m_plateInfo[_0x4f1953].length; _0x5b9d24++) {
              _0x347a14.push(0x0);
            }
            this.m_fillArray.push(_0x347a14);
          }
          for (var _0x452187 = 0x0; _0x452187 < this.m_HoleList.length; _0x452187++) {
            for (var _0x430117 = 0x0; _0x430117 < 0x6; _0x430117++) {
              for (var _0x3a7672 = 0x0; _0x3a7672 < this.m_plateInfo[_0x430117].length; _0x3a7672++) {
                var _0x511b77 = this.m_HoleList[_0x452187].Col;
                var _0x490935 = this.m_HoleList[_0x452187].Row;
                if (_0x511b77 == _0x430117) {
                  if (_0x490935 < _0x3a7672) {
                    this.m_fillArray[_0x430117][_0x3a7672] += 0x1;
                  } else if (_0x490935 == _0x3a7672) {
                    this.m_fillArray[_0x430117][_0x3a7672] = 0x0;
                  }
                }
              }
            }
          }
        };
        _0x3bb7a8.CreateSkyFalling = function (_0x85bcaa) {
          this.SetIsFallingFinish(false);
          _0x4bea68(" 開始製造天降symbol [CreateSkyFalling]");
          if (null != _0x85bcaa.ADV) {
            this.CreateHoleList(_0x85bcaa);
            var _0x1c3907 = _0x85bcaa.FS;
            var _0x480c22 = [];
            for (var _0x63d583 = 0x0; _0x63d583 < _0x1c3907.length; _0x63d583++) {
              if (null != _0x1c3907[_0x63d583]) {
                for (var _0x65e103 = 0x0; _0x65e103 < _0x1c3907[_0x63d583].length; _0x65e103++) {
                  _0x480c22.push(_0x1c3907[_0x63d583][_0x65e103]);
                }
              }
            }
            for (var _0x5e1457 = 0x0; _0x5e1457 < this.m_HoleList.length; _0x5e1457++) {
              var _0x139992 = this.m_HoleList[_0x5e1457].Col;
              var _0xef3159 = this.GetSymbolSizeId(this.m_plateInfo[_0x139992].length);
              var _0x430a01 = this.m_plateInfo[_0x139992].length - 0x1;
              for (var _0x53bdcb = this.m_plateInfo[_0x139992].length - 0x1; _0x53bdcb < 14; _0x53bdcb++) {
                if (!this.m_symbol[_0x139992][_0x53bdcb].active) {
                  _0x430a01 = _0x53bdcb;
                  break;
                }
              }
              this.m_symbol[_0x139992][_0x430a01].active = true;
              var _0x395f58 = this.m_symbol[_0x139992][_0x430a01];
              _0x395f58.getComponent(_0x12df1e).setContentSize(_0x44b969.SYMBOL_WEIGHT, _0x44b969.SYMBOL_HEIGHT[_0xef3159]);
              var _0x550ef2 = this.m_symbol[_0x139992][0x0].getPosition().x;
              var _0x55d7dc = _0x44b969.SYMBOL_HEIGHT[_0xef3159] / 0x2 + _0x430a01 * _0x44b969.SYMBOL_HEIGHT[_0xef3159];
              _0x395f58.setPosition(_0x453ef5(_0x550ef2, _0x55d7dc));
              this.setSymbolClothes(_0x395f58, _0x480c22[_0x5e1457], _0xef3159);
            }
          }
        };
        _0x3bb7a8.PrintPlate = function () {
          _0x4bea68("  ");
          _0x4bea68(" ♚♚♚ 檢查用 ");
          for (var _0x1709d1 = 0x0; _0x1709d1 < 0x6; _0x1709d1++) {
            _0x4bea68(" ♚♚♚ TAG PrintPlate this.m_main_LayoutByCol[ " + _0x1709d1 + " ] Layout enabled : " + this.m_main_LayoutByCol[_0x1709d1].getComponent(_0x29c2dc).enabled);
            _0x4bea68(" ♚♚♚ TAG PrintPlate this.m_plateInfo[ " + _0x1709d1 + " ] : " + this.m_plateInfo[_0x1709d1].length);
            _0x4bea68("   ♚♚ TAG PrintPlate 比對原this.m_plateInfo[ " + _0x1709d1 + " ] : " + this.m_plateInfo[_0x1709d1]);
            for (var _0x2578db = 0x0; _0x2578db < this.m_plateInfo[_0x1709d1].length; _0x2578db++) {
              _0x4bea68("         ★ TAG PrintPlate this.m_symbol[" + _0x1709d1 + '][' + _0x2578db + ']:' + this.m_symbol[_0x1709d1][_0x2578db].position);
            }
          }
          _0x4bea68("  ");
        };
        _0x3bb7a8.Spin_TileMatch = function (_0x4d09de, _0x48e64e) {
          var _0x26476b = this;
          if (null != _0x48e64e.CSD[_0x4d09de].ADV) {
            (function () {
              var _0x10bd08 = _0x26476b.m_symbolDropSpeed;
              if (_0x26476b.m_gameView.IsHardStop) {
                _0x10bd08 = _0x26476b.m_symbolDropSpeedFast;
              }
              _0x26476b.CreateFillArray();
              var _0x303f42 = 0x0;
              for (var _0x268038 = 0x0; _0x268038 < 0x6; _0x268038++) {
                for (var _0x2a09fb = 0x0; _0x2a09fb < _0x26476b.m_plateInfo[_0x268038].length; _0x2a09fb++) {
                  if (0x0 != _0x26476b.m_fillArray[_0x268038][_0x2a09fb]) {
                    _0x303f42 += 0x1;
                  }
                }
              }
              if (0x0 == _0x303f42) {
                _0x26476b.m_isTailMatch = true;
              } else {
                var _0x2b0e98 = [];
                for (var _0x3fb816 = 0x0; _0x3fb816 < 0x6; _0x3fb816++) {
                  _0x2b0e98.push(false);
                }
                var _0xd335f = function (_0x2036e8) {
                  var _0xe4ae61 = _0x26476b.m_HoleList[_0x2036e8].Col;
                  _0x26476b.m_HoleList[_0x2036e8].Row;
                  if (0x0 == _0x2b0e98[_0xe4ae61]) {
                    (function () {
                      _0x2b0e98[_0xe4ae61] = true;
                      var _0x57b27b = _0x26476b.GetSymbolSizeId(_0x26476b.m_plateInfo[_0xe4ae61].length);
                      var _0x411290 = function (_0x57a96d) {
                        var _0x5e904e = _0xf79e94.strip(_0x26476b.m_symbol[_0xe4ae61][_0x57a96d].getPosition().x);
                        var _0xa071b0 = _0xf79e94.strip(_0x26476b.m_symbol[_0xe4ae61][_0x57a96d].getPosition().y);
                        var _0x562d71 = _0xf79e94.strip(_0x26476b.m_plateSymbolPostion_Y[_0x57b27b][_0x57a96d]);
                        if (Math.abs(_0xa071b0 - _0x562d71) >= 0x1) {
                          var _0x291f74 = Math.abs(_0xa071b0 - _0x562d71) / _0x44b969.SYMBOL_HEIGHT[_0x57b27b];
                          _0x4500cf(_0x26476b.m_symbol[_0xe4ae61][_0x57a96d]).to(_0x10bd08 * _0x291f74 / _0x26476b.m_plateInfo[_0xe4ae61].length, {
                            'position': _0x453ef5(_0x5e904e, _0x562d71)
                          }, {
                            'easing': "sineIn"
                          }).call(function () {
                            if (_0x26476b.m_symbol[_0xe4ae61][_0x57a96d]) {
                              _0x26476b.m_symbol[_0xe4ae61][_0x57a96d].getComponent(_0x5912ae).play("bounce");
                              var _0x1b1d32 = _0x26476b.m_symbol[_0xe4ae61][_0x57a96d].getChildByName("Symbol_Smoke").getPosition().x;
                              _0x26476b.m_symbol[_0xe4ae61][_0x57a96d].getChildByName("Symbol_Smoke").getPosition().y;
                              _0x26476b.m_symbol[_0xe4ae61][_0x57a96d].getChildByName("Symbol_Smoke").setPosition(_0x453ef5(_0x1b1d32, -_0x44b969.SYMBOL_HEIGHT[_0x57b27b] / 0x2));
                              _0x26476b.m_symbol[_0xe4ae61][_0x57a96d].getChildByName("Symbol_Smoke").getComponent(_0x5912ae).play('Symbol_Smoke');
                            }
                          }).delay(0.1).call(function () {
                            if (0x0 == (_0x303f42 -= 0x1)) {
                              _0x26476b.m_isTailMatch = true;
                            }
                          }).start();
                        }
                      };
                      for (var _0x3f6187 = 0x0; _0x3f6187 <= _0x26476b.m_plateInfo[_0xe4ae61].length - 0x1; _0x3f6187++) {
                        _0x411290(_0x3f6187);
                      }
                    })();
                  }
                };
                for (var _0x30d5c0 = 0x0; _0x30d5c0 < _0x26476b.m_HoleList.length; _0x30d5c0++) {
                  _0xd335f(_0x30d5c0);
                }
              }
            })();
          }
        };
        _0x3bb7a8.Spin_Failing = function (_0x4004e2, _0x9fd02) {
          var _0x55c8e7 = this;
          var _0x49d956 = this.m_HoleList.length;
          if (_0x49d956 > 0x0) {
            (function () {
              var _0x6ab9a5 = _0x55c8e7.m_symbolDropSpeed;
              _0x55c8e7.m_intervalTime;
              if (_0x55c8e7.m_gameView.IsHardStop) {
                _0x6ab9a5 = _0x55c8e7.m_symbolDropSpeedFast;
              }
              var _0x49c3c9;
              var _0x18f4b5 = Math.floor(Math.random() * _0x44b969.SOUND_KIND_FALLING);
              var _0x55d5ee = [];
              for (var _0x56dc1d = 0x0; _0x56dc1d < 0x6; _0x56dc1d++) {
                _0x55d5ee.push(false);
              }
              var _0x1094fb = function (_0x49cd36) {
                var _0xf66b2 = _0x55c8e7.m_HoleList[_0x49cd36].Col;
                if (0x0 == _0x55d5ee[_0xf66b2]) {
                  (function () {
                    _0x55d5ee[_0xf66b2] = true;
                    var _0x55e12b = _0x55c8e7.GetSymbolSizeId(_0x55c8e7.m_plateInfo[_0xf66b2].length);
                    var _0x39a771 = function (_0x146e04) {
                      if (_0x55c8e7.m_symbol[_0xf66b2][_0x146e04].active) {
                        var _0x32d402 = _0xf79e94.strip(_0x55c8e7.m_symbol[_0xf66b2][_0x146e04].getPosition().x);
                        var _0x7d357c = _0xf79e94.strip(_0x55c8e7.m_symbol[_0xf66b2][_0x146e04].getPosition().y);
                        var _0x30bb4f = _0xf79e94.strip(_0x55c8e7.m_plateSymbolPostion_Y[_0x55e12b][_0x146e04]);
                        if (Math.abs(_0x7d357c - _0x30bb4f) >= 0x1) {
                          var _0xb19049 = Math.abs(_0x7d357c - _0x30bb4f) / _0x44b969.SYMBOL_HEIGHT[_0x55e12b];
                          _0x4500cf(_0x55c8e7.m_symbol[_0xf66b2][_0x146e04]).to(_0x6ab9a5 * _0xb19049 / _0x55c8e7.m_plateInfo[_0xf66b2].length, {
                            'position': _0x453ef5(_0x32d402, _0x30bb4f)
                          }, {
                            'easing': "sineIn"
                          }).call(function () {
                            if (_0x55c8e7.m_symbol[_0xf66b2][_0x146e04]) {
                              _0x55c8e7.m_symbol[_0xf66b2][_0x146e04].getComponent(_0x5912ae).play("bounce");
                              var _0x4a639d = _0x55c8e7.m_symbol[_0xf66b2][_0x146e04].getChildByName("Symbol_Smoke").getPosition().x;
                              _0x55c8e7.m_symbol[_0xf66b2][_0x146e04].getChildByName('Symbol_Smoke').getPosition().y;
                              _0x55c8e7.m_symbol[_0xf66b2][_0x146e04].getChildByName("Symbol_Smoke").setPosition(_0x453ef5(_0x4a639d, -_0x44b969.SYMBOL_HEIGHT[_0x55e12b] / 0x2));
                              _0x55c8e7.m_symbol[_0xf66b2][_0x146e04].getChildByName("Symbol_Smoke").getComponent(_0x5912ae).play('Symbol_Smoke');
                            }
                            if (_0x55c8e7.m_gameView.IsHardStop) {
                              switch (_0x18f4b5) {
                                case 0x0:
                                  _0x42891d.Play(_0x44b969.AudioClips.Fiop1, false, null, 0x1 - _0xf66b2 * _0x44b969.SYMBOL_FALLING_VOLUME_RATE);
                                  break;
                                case 0x1:
                                  _0x42891d.Play(_0x44b969.AudioClips.Fiop2, false, null, 0x1 - _0xf66b2 * _0x44b969.SYMBOL_FALLING_VOLUME_RATE);
                                  break;
                                case 0x2:
                                  _0x42891d.Play(_0x44b969.AudioClips.Fiop3, false, null, 0x1 - _0xf66b2 * _0x44b969.SYMBOL_FALLING_VOLUME_RATE);
                                  break;
                                case 0x3:
                                  _0x42891d.Play(_0x44b969.AudioClips.Fiop4, false, null, 0x1 - _0xf66b2 * _0x44b969.SYMBOL_FALLING_VOLUME_RATE);
                                  break;
                                default:
                                  _0x42891d.Play(_0x44b969.AudioClips.Fiop1, false, null, 0x1 - _0xf66b2 * _0x44b969.SYMBOL_FALLING_VOLUME_RATE);
                              }
                            } else {
                              switch (_0x18f4b5) {
                                case 0x0:
                                  _0x42891d.Play(_0x44b969.AudioClips.Fiop1);
                                  break;
                                case 0x1:
                                  _0x42891d.Play(_0x44b969.AudioClips.Fiop2);
                                  break;
                                case 0x2:
                                  _0x42891d.Play(_0x44b969.AudioClips.Fiop3);
                                  break;
                                case 0x3:
                                  _0x42891d.Play(_0x44b969.AudioClips.Fiop4);
                                  break;
                                default:
                                  _0x42891d.Play(_0x44b969.AudioClips.Fiop1);
                              }
                            }
                          }).delay(0.1).call(function () {
                            _0x49d956 -= 0x1;
                          }).start();
                        }
                      }
                    };
                    for (var _0x3ecab4 = 0x0; _0x3ecab4 < 14; _0x3ecab4++) {
                      var _0x55e12b;
                      var _0x39a771;
                      var _0x3ecab4;
                      _0x39a771(_0x3ecab4);
                    }
                  })();
                }
              };
              for (var _0x186abe = 0x0; _0x186abe < _0x55c8e7.m_HoleList.length; _0x186abe++) {
                _0x1094fb(_0x186abe);
              }
              var _0x4ce64e = _0x55c8e7.m_HoleList[_0x55c8e7.m_HoleList.length - 0x1].Col;
              _0x49c3c9 = 0.03 * _0x4ce64e + 0.8 * _0x6ab9a5 + 0.06 * (_0x4ce64e - 0x1);
              _0x4500cf(_0x55c8e7.node).delay(_0x49c3c9).call(function () {
                _0x55c8e7.m_isFallingFinish = true;
              }).start();
            })();
          } else {
            this.m_isFallingFinish = true;
          }
        };
        _0x3bb7a8.SetNearWinCb = function (_0x2994c1, _0x3d8f52) {
          this.m_nearWinStartFunc = _0x2994c1;
          this.m_nearWinEndFunc = _0x3d8f52;
        };
        _0x3bb7a8.Spin_RealSpinMultiple = function (_0x1eee49) {
          for (var _0x1efa8d = 0x0; _0x1efa8d < 0x6; _0x1efa8d++) {
            var _0x28cfac = this.m_time;
            var _0x35acb5 = this.m_reelStopTime[_0x1efa8d];
            var _0x4ad715 = this.m_reelPreTime[_0x1efa8d];
            var _0x4afdc0 = this.m_riseTime * 0x6;
            var _0x3f4df9 = this.m_spinSpeed;
            if (this.IsNearWin() && this.m_reelStopTime[this.GetStartNearWinCol()] && this.m_time > this.m_reelStopTime[this.GetStartNearWinCol() - 0x1]) {
              _0x3f4df9 = this.m_spinSpeed / 0x2;
              if (this.m_time > this.m_reelStopTime[this.m_nowStopColum - 0x1] && this.m_nearWinStartFunc && !this.m_nearWinLock[this.m_nowStopColum]) {
                this.m_nearWinLock[this.m_nowStopColum] = true;
                if (this.m_nowStopColum < 0x6) {
                  this.m_nearWinStartFunc(this.m_nowStopColum);
                  if (this.m_nearWinSoundId[this.m_nowStopColum] < 0x0) {
                    this.m_nearWinSoundId[this.m_nowStopColum] = _0x42891d.Play(_0x44b969.AudioClips.Near_win1, false, null, 0x1);
                  }
                  this.m_nowStopColum++;
                } else {
                  this.m_nearWinEndFunc();
                }
              }
            }
            var _0x59cdef = this.m_symbolSize_OneCol.width * (_0x1efa8d + 0.5) + this.m_reelPositionOffset[_0x1efa8d].x - this.m_viewSize.width / 0x2;
            var _0x147b02 = -this.m_viewSize.height / 0x2;
            if (_0x28cfac < this.m_riseTime * _0x1efa8d) {
              ;
            } else {
              if (_0x28cfac < this.m_riseTime * (_0x1efa8d + 0x1)) {
                var _0x38a136 = (_0x28cfac - this.m_riseTime * _0x1efa8d) / this.m_riseTime * this.m_upLength;
                this.m_main_LayoutByCol[_0x1efa8d].setPosition(_0x453ef5(_0x59cdef, _0x147b02 + _0x38a136));
              } else {
                if (_0x28cfac < _0x4afdc0) {
                  this.m_main_LayoutByCol[_0x1efa8d].setPosition(_0x453ef5(_0x59cdef, _0x147b02 + this.m_upLength));
                } else {
                  if (null == _0x35acb5 || _0x28cfac < _0x4ad715 + _0x4afdc0) {
                    var _0x522bb9 = (_0x28cfac - _0x4afdc0) % _0x3f4df9 / _0x3f4df9 * this.m_symbolSize_OneCol.height * 0x3;
                    var _0xc20b38 = this.GetMovelength(_0x522bb9, 1.5 * this.m_symbolSize_OneCol.height, 0x3 * this.m_symbolSize_OneCol.height, _0x1efa8d, this.m_main_LayoutByCol[_0x1efa8d].name, this.m_main_LayoutByCol[_0x1efa8d], false, 'T');
                    this.m_main_LayoutByCol[_0x1efa8d].setPosition(_0x453ef5(_0x59cdef, _0x147b02 - _0xc20b38));
                  } else {
                    if (_0x28cfac < _0x35acb5 + _0x4afdc0) {
                      var _0x47e10f = (_0x28cfac - _0x4afdc0) % _0x3f4df9 / _0x3f4df9 * this.m_symbolSize_OneCol.height * 0x3;
                      var _0x3b52a8 = this.GetMovelength(_0x47e10f, 1.5 * this.m_symbolSize_OneCol.height, 0x3 * this.m_symbolSize_OneCol.height, _0x1efa8d, this.m_main_LayoutByCol[_0x1efa8d].name, this.m_main_LayoutByCol[_0x1efa8d], false, 'T');
                      this.m_main_LayoutByCol[_0x1efa8d].setPosition(_0x453ef5(_0x59cdef, _0x147b02 - _0x3b52a8));
                    } else {
                      if (_0x28cfac < _0x35acb5 + _0x4afdc0 + this.m_spinBufferTime01) {
                        this.CheckPlayStopSound(_0x1efa8d, 0x0);
                        var _0x3eaf87 = (_0x28cfac - _0x35acb5 - _0x4afdc0) / this.m_spinBufferTime01 * this.m_downLength;
                        this.m_main_LayoutByCol[_0x1efa8d].setPosition(_0x453ef5(_0x59cdef, _0x147b02 - _0x3eaf87));
                        this.CheckChangeToFinalSymbol(_0x1efa8d, this.m_main_LayoutByCol[_0x1efa8d].name, this.m_main_LayoutByCol[_0x1efa8d], true);
                      } else {
                        if (_0x28cfac < _0x35acb5 + _0x4afdc0 + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
                          this.CheckPlayStopSound(_0x1efa8d, 0x0);
                          var _0x47e11a = (_0x28cfac - _0x35acb5 - _0x4afdc0 - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
                          this.m_main_LayoutByCol[_0x1efa8d].setPosition(_0x453ef5(_0x59cdef, _0x147b02 - this.m_downLength + _0x47e11a));
                          this.CheckChangeToFinalSymbol(_0x1efa8d, this.m_main_LayoutByCol[_0x1efa8d].name, this.m_main_LayoutByCol[_0x1efa8d], true);
                        } else {
                          this.CheckChangeToFinalSymbol(_0x1efa8d, this.m_main_LayoutByCol[_0x1efa8d].name, this.m_main_LayoutByCol[_0x1efa8d], true);
                          this.CheckPlayStopSound(_0x1efa8d, 0x0);
                          this.m_main_LayoutByCol[_0x1efa8d].setPosition(_0x453ef5(_0x59cdef, _0x147b02));
                          this.m_gameView.SetNowRoundLineNum_Dynamic(_0x1efa8d);
                        }
                      }
                    }
                  }
                }
              }
            }
            var _0xc39799 = this.m_symbolSize_OneCol.width * (_0x1efa8d + 0.5) + this.m_reelPositionOffset[_0x1efa8d].x - this.m_viewSize.width / 0x2;
            var _0x2be413 = 1.5 * this.m_symbolSize_OneCol.height + this.m_reelPositionOffset[_0x1efa8d].y - this.m_viewSize.height / 0x2 - this.m_viewSize.height / 0x2;
            if (_0x28cfac < this.m_riseTime * _0x1efa8d) {
              ;
            } else {
              if (_0x28cfac < this.m_riseTime * (_0x1efa8d + 0x1)) {
                var _0x3fc658 = (_0x28cfac - this.m_riseTime * _0x1efa8d) / this.m_riseTime * this.m_upLength;
                this.m_upper_LayoutByCol[_0x1efa8d].setPosition(_0x453ef5(_0xc39799, _0x2be413 + _0x3fc658));
              } else {
                if (_0x28cfac < _0x4afdc0) {
                  this.m_upper_LayoutByCol[_0x1efa8d].setPosition(_0x453ef5(_0xc39799, _0x2be413 + this.m_upLength));
                } else {
                  if (null == _0x35acb5 || _0x28cfac < _0x35acb5 + _0x4afdc0) {
                    var _0x4a2440 = (_0x28cfac - _0x4afdc0) % _0x3f4df9 / _0x3f4df9 * this.m_symbolSize_OneCol.height * 0x3;
                    var _0x167a6c = this.GetMovelength(_0x4a2440, 0x2 * this.m_symbolSize_OneCol.height, 0x3 * this.m_symbolSize_OneCol.height, 0x6 + _0x1efa8d, this.m_upper_LayoutByCol[_0x1efa8d].name, this.m_upper_LayoutByCol[_0x1efa8d], false, 'U');
                    this.m_upper_LayoutByCol[_0x1efa8d].setPosition(_0x453ef5(_0xc39799, _0x2be413 - _0x167a6c));
                  } else {
                    if (_0x28cfac < _0x35acb5 + _0x4afdc0 + this.m_spinBufferTime01) {
                      var _0x1b1c36 = (_0x28cfac - _0x35acb5 - _0x4afdc0) / this.m_spinBufferTime01 * this.m_downLength;
                      this.m_upper_LayoutByCol[_0x1efa8d].setPosition(_0x453ef5(_0xc39799, _0x2be413 - _0x1b1c36));
                      this.CheckChangeToFinalSymbol(_0x1efa8d, this.m_upper_LayoutByCol[_0x1efa8d].name, this.m_upper_LayoutByCol[_0x1efa8d], true);
                    } else {
                      if (_0x28cfac < _0x35acb5 + _0x4afdc0 + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
                        var _0x4fe537 = (_0x28cfac - _0x35acb5 - _0x4afdc0 - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
                        this.m_upper_LayoutByCol[_0x1efa8d].setPosition(_0x453ef5(_0xc39799, _0x2be413 - this.m_downLength + _0x4fe537));
                        this.CheckChangeToFinalSymbol(_0x1efa8d, this.m_upper_LayoutByCol[_0x1efa8d].name, this.m_upper_LayoutByCol[_0x1efa8d], true);
                      } else {
                        this.CheckChangeToFinalSymbol(_0x1efa8d, this.m_upper_LayoutByCol[_0x1efa8d].name, this.m_upper_LayoutByCol[_0x1efa8d]);
                        this.m_upper_LayoutByCol[_0x1efa8d].setPosition(_0x453ef5(_0xc39799, _0x2be413));
                      }
                    }
                  }
                }
              }
            }
            _0xc39799 = this.m_symbolSize_OneCol.width * (_0x1efa8d + 0.5) + this.m_reelPositionOffset[_0x1efa8d].x - this.m_viewSize.width / 0x2;
            _0x2be413 = -0.5 * this.m_symbolSize_OneCol.height + this.m_reelPositionOffset[_0x1efa8d].y - this.m_viewSize.height / 0x2 - this.m_viewSize.height / 0x2;
            if (_0x28cfac < this.m_riseTime * _0x1efa8d) {
              ;
            } else {
              if (_0x28cfac < this.m_riseTime * (_0x1efa8d + 0x1)) {
                var _0x57f307 = (_0x28cfac - this.m_riseTime * _0x1efa8d) / this.m_riseTime * this.m_upLength;
                this.m_lower_LayoutByCol[_0x1efa8d].setPosition(_0x453ef5(_0xc39799, _0x2be413 + _0x57f307));
              } else {
                if (_0x28cfac < _0x4afdc0) {
                  this.m_lower_LayoutByCol[_0x1efa8d].setPosition(_0x453ef5(_0xc39799, _0x2be413 + this.m_upLength));
                } else {
                  if (null == _0x35acb5 || _0x28cfac < _0x35acb5 + _0x4afdc0) {
                    var _0x2e68bd = (_0x28cfac - _0x4afdc0) % _0x3f4df9 / _0x3f4df9 * this.m_symbolSize_OneCol.height * 0x3;
                    var _0x137234 = this.GetMovelength(_0x2e68bd, 0.5 * this.m_symbolSize_OneCol.height, 0x3 * this.m_symbolSize_OneCol.height, 12 + _0x1efa8d, this.m_lower_LayoutByCol[_0x1efa8d].name, this.m_lower_LayoutByCol[_0x1efa8d], false, 'D');
                    this.m_lower_LayoutByCol[_0x1efa8d].setPosition(_0x453ef5(_0xc39799, _0x2be413 - _0x137234));
                  } else {
                    if (_0x28cfac < _0x35acb5 + _0x4afdc0 + this.m_spinBufferTime01) {
                      var _0x49a8f6 = (_0x28cfac - _0x35acb5 - _0x4afdc0) / this.m_spinBufferTime01 * this.m_downLength;
                      this.m_lower_LayoutByCol[_0x1efa8d].setPosition(_0x453ef5(_0xc39799, _0x2be413 - _0x49a8f6));
                      this.CheckChangeToFinalSymbol(_0x1efa8d, this.m_lower_LayoutByCol[_0x1efa8d].name, this.m_lower_LayoutByCol[_0x1efa8d], true);
                    } else {
                      if (_0x28cfac < _0x35acb5 + _0x4afdc0 + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
                        var _0x48741a = (_0x28cfac - _0x35acb5 - _0x4afdc0 - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
                        this.m_lower_LayoutByCol[_0x1efa8d].setPosition(_0x453ef5(_0xc39799, _0x2be413 - this.m_downLength + _0x48741a));
                        this.CheckChangeToFinalSymbol(_0x1efa8d, this.m_lower_LayoutByCol[_0x1efa8d].name, this.m_lower_LayoutByCol[_0x1efa8d], true);
                      } else {
                        this.CheckChangeToFinalSymbol(_0x1efa8d, this.m_lower_LayoutByCol[_0x1efa8d].name, this.m_lower_LayoutByCol[_0x1efa8d]);
                        this.m_lower_LayoutByCol[_0x1efa8d].setPosition(_0x453ef5(_0xc39799, _0x2be413));
                      }
                    }
                  }
                }
              }
            }
          }
        };
        _0x3bb7a8.GetMovelength = function (_0x3a6187, _0x273526, _0x33393d, _0x50002b, _0x9047e6, _0x41c07d, _0x41e2ad, _0x22547d) {
          if (_0x3a6187 >= _0x273526) {
            _0x3a6187 -= _0x33393d;
            if (this.m_isChangeSymbol[_0x9047e6] && !this.m_isClickStopBtn) {
              this.m_isChangeSymbol[_0x9047e6] = false;
              this.ChangeSymbol(_0x50002b, _0x41c07d, _0x41e2ad);
            }
          } else {
            this.m_isChangeSymbol[_0x9047e6] = true;
          }
          return _0x3a6187;
        };
        _0x3bb7a8.ChangeSymbol = function (_0x34d84f, _0xdddda, _0x10d237) {
          var _0x30bbd3 = _0xdddda.name;
          var _0x7b78a0 = this.m_reelStopTime[_0x34d84f];
          var _0x274fc6 = 0x0;
          var _0x48f966 = this.m_riseTime * 9;
          if (_0x7b78a0) {
            _0x274fc6 = _0x7b78a0 / this.m_spinSpeed;
          }
          if (_0x7b78a0 && this.m_time - _0x48f966 > (_0x274fc6 - 0x1) * this.m_spinSpeed || _0x10d237) {
            if (_0x30bbd3 >= 0x0 && _0x30bbd3 < 0x6) {
              var _0x13f9bf = this.m_plateInfo[_0x34d84f].length;
              var _0x54abac = this.GetSymbolSizeId(_0x13f9bf);
              for (var _0x50fe8c = 0x0; _0x50fe8c < 0x7; _0x50fe8c++) {
                var _0x5a78f6 = this.m_symbol[_0x34d84f][_0x50fe8c];
                if (_0x50fe8c < _0x13f9bf) {
                  _0x5a78f6.active = true;
                  _0x5a78f6.setPosition(_0x453ef5(0x0, this.m_plateSymbolPostion_Y[_0x54abac][_0x50fe8c]));
                  _0x5a78f6.getComponent(_0x12df1e).setContentSize(_0x44b969.SYMBOL_WEIGHT, _0x44b969.SYMBOL_HEIGHT[_0x54abac]);
                  this.setSymbolClothes(_0x5a78f6, this.m_plateInfo[_0x34d84f][_0x50fe8c], _0x54abac);
                } else {
                  _0x5a78f6.active = false;
                }
              }
              this.m_isChangeToFinalSymbol[_0x34d84f] = false;
            }
          } else {
            if (_0x30bbd3 >= 0x6 && _0x30bbd3 < 12) {
              _0x34d84f %= 0x6;
              var _0x41cdd2 = new Array();
              var _0x6f83dc = this.RandomColLength();
              var _0x3afd69 = [];
              for (var _0x1cae97 = 0x0; _0x1cae97 < _0x6f83dc; _0x1cae97++) {
                _0x3afd69.push(this.RandomSymbol());
              }
              _0x41cdd2[_0x34d84f] = _0x3afd69;
              var _0x3969ec = _0x41cdd2[_0x34d84f].length;
              var _0x1a76e1 = this.GetSymbolSizeId(_0x3969ec);
              for (var _0x1ea622 = 0x0; _0x1ea622 < 0x7; _0x1ea622++) {
                var _0xed1754 = this.m_symbol_upper[_0x34d84f][_0x1ea622];
                if (_0x1ea622 < _0x3969ec) {
                  _0xed1754.active = true;
                  _0xed1754.getComponent(_0x12df1e).setContentSize(_0x44b969.SYMBOL_WEIGHT, _0x44b969.SYMBOL_HEIGHT[_0x1a76e1]);
                  this.setSymbolClothes(_0xed1754, _0x41cdd2[_0x34d84f][_0x1ea622], _0x1a76e1);
                } else {
                  _0xed1754.active = false;
                }
              }
            }
            if (_0x30bbd3 >= 12) {
              _0x34d84f %= 0x6;
              var _0x3b5859 = new Array();
              var _0x5bf5e1 = this.RandomColLength();
              var _0x697a50 = [];
              for (var _0x520272 = 0x0; _0x520272 < _0x5bf5e1; _0x520272++) {
                _0x697a50.push(this.RandomSymbol());
              }
              _0x3b5859[_0x34d84f] = _0x697a50;
              var _0x55f8cc = _0x3b5859[_0x34d84f].length;
              var _0x39db81 = this.GetSymbolSizeId(_0x55f8cc);
              for (var _0x599f7d = 0x0; _0x599f7d < 0x7; _0x599f7d++) {
                var _0x14ef44 = this.m_symbol_lower[_0x34d84f][_0x599f7d];
                if (_0x599f7d < _0x55f8cc) {
                  _0x14ef44.active = true;
                  _0x14ef44.getComponent(_0x12df1e).setContentSize(_0x44b969.SYMBOL_WEIGHT, _0x44b969.SYMBOL_HEIGHT[_0x39db81]);
                  this.setSymbolClothes(_0x14ef44, _0x3b5859[_0x34d84f][_0x599f7d], _0x39db81);
                } else {
                  _0x14ef44.active = false;
                }
              }
            }
          }
        };
        _0x3bb7a8.CheckChangeToFinalSymbol = function (_0x55f87d, _0x53f15f, _0x4c50db, _0x6999a) {
          if (undefined === _0x6999a) {
            _0x6999a = false;
          }
          if (!this.m_isChangeToFinalSymbol[_0x53f15f]) {
            this.m_isChangeToFinalSymbol[_0x53f15f] = true;
            this.ChangeSymbol(_0x55f87d, _0x4c50db, _0x6999a);
          }
        };
        _0x3bb7a8.CountPlate = function () {
          var _0x338525 = 0x0;
          for (var _0x670492 = 0x0; _0x670492 < 0x6; _0x670492++) {
            _0x338525 += this.m_plateInfo[_0x670492].length;
          }
          return _0x338525;
        };
        _0x3bb7a8.IsAllSymbolChangeToRight = function () {
          var _0x474055 = true;
          if (!this.m_errorMsgCount) {
            for (var _0x15ea4f = 0x0; _0x15ea4f < 0x6; _0x15ea4f++) {
              if (!this.m_isChangeToFinalSymbol[_0x15ea4f]) {
                for (var _0x23fb7e = 0x0; _0x23fb7e < 0x6; _0x23fb7e++) {
                  String(this.m_isChangeToFinalSymbol[_0x15ea4f]) + " ";
                }
                this.m_stopTime;
                this.m_errorMsgCount = true;
                _0x474055 = false;
                break;
              }
            }
          }
          return _0x474055;
        };
        _0x3bb7a8.SetPlateSecondScatterCol = function () {
          this.m_secondScatterCol = -0x1;
          this.m_thirdScatterCol = -0x1;
          var _0x2e3bba = 0x0;
          for (var _0x20a348 = 0x0; _0x20a348 < this.m_plateInfo.length; _0x20a348++) {
            for (var _0x16a166 = 0x0; _0x16a166 < this.m_plateInfo[_0x20a348].length; _0x16a166++) {
              if (this.m_plateInfo[_0x20a348][_0x16a166] == _0x44b969.SYMBOL_SCATTER && 0x2 == ++_0x2e3bba) {
                this.m_secondScatterCol = _0x20a348;
                break;
              }
            }
          }
          _0x2e3bba = 0x0;
          for (var _0x502813 = 0x0; _0x502813 < this.m_plateInfo.length; _0x502813++) {
            for (var _0x359071 = 0x0; _0x359071 < this.m_plateInfo[_0x502813].length; _0x359071++) {
              if (this.m_plateInfo[_0x502813][_0x359071] == _0x44b969.SYMBOL_SCATTER && 0x3 == ++_0x2e3bba) {
                this.m_thirdScatterCol = _0x502813;
                break;
              }
            }
          }
        };
        _0x3bb7a8.ShowFrameSymbolEffect = function (_0x49a358, _0xa73e81) {
          var _0x272438 = this;
          var _0x1354ee = this.m_plateInfo[_0xa73e81].length;
          var _0x5b6948 = function (_0x3a2b38) {
            _0x272438.m_symbol[_0xa73e81][_0x3a2b38].getChildByName("Frame").active = false;
            for (var _0x259b60 = 0x0; _0x259b60 < _0x44b969.NORMAL_SYMBOL_SIZE; _0x259b60++) {
              _0x272438.m_symbol[_0xa73e81][_0x3a2b38].getChildByName("Frame").getChildByName('f_s_0' + _0x259b60.toString()).active = false;
            }
            var _0x31fdc1 = _0x272438.getClientSymbolFrame(_0x272438.m_plateInfo[_0xa73e81][_0x3a2b38]);
            if (_0x31fdc1 != _0x44b969.FRAME_NORMAL) {
              _0x272438.m_symbol[_0xa73e81][_0x3a2b38].getChildByName("Frame").active = true;
              var _0x5efd37 = _0x272438.GetSymbolSizeId(_0x1354ee);
              if (_0x31fdc1 == _0x44b969.FRAME_GOLD) {
                _0x272438.m_symbol[_0xa73e81][_0x3a2b38].getChildByName("Frame").getChildByName('f_s_0' + _0x5efd37.toString()).getComponent(_0x3d5fc5).spriteFrame = _0x272438.m_symbol_f_gold;
              } else {
                _0x272438.m_symbol[_0xa73e81][_0x3a2b38].getChildByName('Frame').getChildByName("f_s_0" + _0x5efd37.toString()).getComponent(_0x3d5fc5).spriteFrame = _0x272438.m_symbol_f_silver;
              }
              if (_0x49a358) {
                _0x272438.m_symbol[_0xa73e81][_0x3a2b38].getChildByName("Frame").getChildByName("f_s_0" + _0x5efd37.toString()).active = true;
                _0x272438.m_symbol[_0xa73e81][_0x3a2b38].getChildByName('Frame').getChildByName("f_s_0" + _0x5efd37.toString()).getComponent(_0x5912ae).play("Symbol_Frame_Fast");
                _0x4500cf(_0x272438.node).delay(_0x44b969.ANI_ACTION_TIME.TIME_SHOW_SYMBOL_FRAME_FAST).call(function () {
                  _0x272438.m_symbol[_0xa73e81][_0x3a2b38].getChildByName("Frame").getChildByName("f_s_0" + _0x5efd37.toString()).active = false;
                }).start();
              } else {
                _0x272438.m_symbol[_0xa73e81][_0x3a2b38].getChildByName('Frame').getChildByName('f_s_0' + _0x5efd37.toString()).active = true;
                _0x272438.m_symbol[_0xa73e81][_0x3a2b38].getChildByName("Frame").getChildByName("f_s_0" + _0x5efd37.toString()).getComponent(_0x5912ae).play("Symbol_Frame");
                _0x4500cf(_0x272438.node).delay(_0x44b969.ANI_ACTION_TIME.TIME_SHOW_SYMBOL_FRAME).call(function () {
                  _0x272438.m_symbol[_0xa73e81][_0x3a2b38].getChildByName("Frame").getChildByName("f_s_0" + _0x5efd37.toString()).active = false;
                }).start();
              }
            }
          };
          for (var _0x3fd603 = 0x0; _0x3fd603 < _0x1354ee; _0x3fd603++) {
            _0x5b6948(_0x3fd603);
          }
        };
        _0x3bb7a8.GetStartNearWinCol = function () {
          var _0x3b5d8a = this.m_secondScatterCol + 0x1;
          if (_0x3b5d8a >= 0x6) {
            _0x3b5d8a = 5;
          }
          return _0x3b5d8a;
        };
        _0x3bb7a8.GetEndNearWinCol = function () {
          var _0x2b7dc1 = this.m_thirdScatterCol;
          if (_0x2b7dc1 >= 0x6) {
            _0x2b7dc1 = 5;
          }
          return _0x2b7dc1;
        };
        _0x3bb7a8.IsNearWin = function () {
          return -0x1 != this.m_secondScatterCol && this.m_secondScatterCol != 5 && !this.m_gameView.IsHardStop;
        };
        _0x3bb7a8.SetPlateInfo = function (_0x2af16f) {
          this.m_plateInfo = [];
          var _0x3c94e6 = [];
          for (var _0x30aa43 = 0x0; _0x30aa43 < _0x2af16f.length; _0x30aa43++) {
            var _0x483934 = [];
            for (var _0x1c47c8 = 0x0; _0x1c47c8 < _0x2af16f[_0x30aa43].length; _0x1c47c8++) {
              _0x483934.push(_0x2af16f[_0x30aa43][_0x1c47c8]);
            }
            _0x3c94e6.push(_0x483934);
          }
          this.m_plateInfo = _0x3c94e6;
          this.SetPlateSecondScatterCol();
          var _0x44f1d1 = 0x5 * this.m_riseTime;
          var _0x49b5f5 = Math.ceil((this.m_time - _0x44f1d1) / this.m_spinSpeed);
          var _0x4ea0a6 = 0x0;
          if (this.m_isClickStopBtn) {
            this.m_stopTime = _0xf79e94.strip(this.m_spinSpeed * _0x49b5f5 + this.m_spinDelayTime + _0x44f1d1);
            for (var _0x531b3c = 0x0; _0x531b3c < 0x6; _0x531b3c++) {
              this.m_reelStopTime[_0x531b3c] = _0xf79e94.strip(this.m_spinSpeed * _0x49b5f5);
              this.m_reelPreTime[_0x531b3c] = _0xf79e94.strip(this.m_spinSpeed * (_0x49b5f5 - 0x1));
            }
          } else {
            this.m_stopTime = _0xf79e94.strip(this.m_spinSpeed * (_0x49b5f5 + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * 5 + +this.m_spinDelayTime + _0x44f1d1 + this.m_spinBufferTime01 + this.m_spinBufferTime02);
            for (var _0x502b7f = 0x0; _0x502b7f < 0x6; _0x502b7f++) {
              if (this.m_lockColumn[_0x502b7f]) {
                _0x4ea0a6 += 0x2;
              }
              this.m_reelStopTime[_0x502b7f] = _0xf79e94.strip(this.m_spinSpeed * (_0x49b5f5 + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * (_0x502b7f - _0x4ea0a6));
              this.m_reelPreTime[_0x502b7f] = _0xf79e94.strip(this.m_spinSpeed * (_0x49b5f5 + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * (_0x502b7f - _0x4ea0a6 - 0x1));
            }
            if (this.IsNearWin()) {
              var _0x15c3d0 = this.GetStartNearWinCol();
              this.m_nowStopColum = _0x15c3d0;
              this.m_stopTime = this.m_stopTime + (_0x44b969.TIME_OF_NEARWIN_SPIN[this.m_nowStopColum] - this.m_timesOfBaseSpin) * (0x6 - _0x15c3d0);
              for (var _0x325072 = 0x0; _0x325072 < this.m_nearWinLock.length; _0x325072++) {
                if (_0x325072 >= _0x15c3d0) {
                  this.m_nearWinLock[_0x325072] = false;
                }
              }
              for (var _0x3b6fb3 = 0x0; _0x3b6fb3 < 0x6; _0x3b6fb3++) {
                if (_0x3b6fb3 >= _0x15c3d0) {
                  this.m_reelStopTime[_0x3b6fb3] = _0xf79e94.strip(this.m_reelStopTime[_0x3b6fb3] + (_0x44b969.TIME_OF_NEARWIN_SPIN[this.m_nowStopColum] - this.m_timesOfBaseSpin) * (_0x3b6fb3 - _0x15c3d0 + 0x1));
                }
              }
            }
          }
        };
        _0x3bb7a8.CreateSymbolList = function (_0xc65326) {
          var _0x5cdebe = [];
          for (var _0x3c820b = 0x0; _0x3c820b < 0x6; _0x3c820b++) {
            for (var _0x422592 = 0x0; _0x422592 < this.m_plateInfo[_0x3c820b].length; _0x422592++) {
              if (this.m_plateInfo[_0x3c820b][_0x422592] == _0xc65326) {
                var _0x265144 = new _0x3b6778();
                _0x265144.Col = _0x3c820b;
                _0x265144.Row = _0x422592;
                _0x5cdebe.push(_0x265144);
              }
            }
          }
          return _0x5cdebe;
        };
        _0x3bb7a8.IsPlateStop = function () {
          return this.m_isStop;
        };
        _0x3bb7a8.IsFallingFinish = function () {
          return this.m_isFallingFinish;
        };
        _0x3bb7a8.IsTailMatch = function () {
          return this.m_isTailMatch;
        };
        _0x3bb7a8.GetSymbolByIndex = function (_0x3d57a4) {
          return this.m_symbol[_0x3d57a4.Col][_0x3d57a4.Row];
        };
        _0x3bb7a8.GetColByIndex = function (_0x1c6fed) {
          return this.m_main_LayoutByCol[_0x1c6fed];
        };
        _0x3bb7a8.SetAllColLayoutActive = function (_0x36b696) {
          for (var _0x1ca650 = 0x0; _0x1ca650 < 0x6; _0x1ca650++) {
            this.m_main_LayoutByCol[_0x1ca650].getComponent(_0x29c2dc).enabled = _0x36b696;
          }
        };
        _0x3bb7a8.SetColLayoutActive = function (_0x4f9d94, _0x31c387) {
          this.m_main_LayoutByCol[_0x4f9d94].getComponent(_0x29c2dc).enabled = _0x31c387;
        };
        _0x3bb7a8.SetEffectSymbolActive = function (_0x4af3a5, _0x7adb01, _0x542124) {
          if (this.m_symbol[_0x4af3a5][_0x7adb01]) {
            if (_0x542124) {
              this.m_symbol[_0x4af3a5][_0x7adb01].active = _0x542124;
            } else {
              var _0x334903 = this.m_symbol[_0x4af3a5][_0x7adb01];
              _0x334903.active = _0x542124;
              this.m_symbol[_0x4af3a5].splice(_0x7adb01, 0x1);
              this.m_symbol[_0x4af3a5].push(_0x334903);
            }
          }
        };
        _0x3bb7a8.UpgradeSymbolFrame = function (_0x11b2d2, _0x46f2da, _0x3e5d62, _0x55d821) {
          this.setSymbolClothes(this.m_symbol[_0x11b2d2][_0x46f2da], _0x3e5d62, _0x55d821);
        };
        _0x3bb7a8.HideUpgradeSymbolFrame = function (_0x1df3a0, _0x4e942a) {
          this.m_symbol[_0x1df3a0][_0x4e942a].active = false;
        };
        _0x3bb7a8.ShowUpgradeSymbolFrame = function (_0xa6eb1d, _0x7b84a) {
          this.m_symbol[_0xa6eb1d][_0x7b84a].active = true;
        };
        _0x3bb7a8.SetGrayCollection = function (_0x110c44, _0x523190, _0x4c95a2) {
          this.m_symbol[_0x110c44][_0x523190].getChildByName('image').getComponent(_0x3d5fc5).spriteFrame = this.m_symbol13gray[_0x4c95a2];
        };
        _0x3bb7a8.findNextUpgradeSymbol = function (_0x3d9044, _0x3b95ef) {
          var _0x62f9c5 = 0x0;
          for (var _0x3d35ef = 0x0; _0x3d35ef < this.m_UpgradeList.length; _0x3d35ef++) {
            if (this.m_UpgradeList[_0x3d35ef].Col == _0x3d9044 && this.m_UpgradeList[_0x3d35ef].Row == _0x3b95ef) {
              _0x62f9c5 = this.m_UpgradeList[_0x3d35ef].Symbol_NextUpgrade;
            }
          }
          return _0x62f9c5;
        };
        _0x3bb7a8.SetSymbolName = function (_0x576ac0) {
          return _0x576ac0 < _0x44b969.SYMBOL_WILD ? (_0x576ac0 % _0x44b969.SYMBOL_MOD).toString() : (_0x576ac0 % _0x44b969.SYMBOL_MOD + _0x44b969.SYMBOL_MOD).toString();
        };
        _0x3bb7a8.SetPlayStopSoundFunction = function (_0x56f929) {
          this.m_playStopSound = _0x56f929;
        };
        _0x3bb7a8.CheckPlayStopSound = function (_0x259a1d, _0x574f34) {
          if (this.m_playStopSound && !this.m_isPlaySound[_0x259a1d] && 0x0 == _0x574f34) {
            this.m_isPlaySound[_0x259a1d] = true;
            this.m_playStopSound(_0x259a1d);
          }
        };
        _0x3bb7a8.ResetSymbolActive = function () {
          for (var _0x2c0d3a = 0x0; _0x2c0d3a < 0x6; _0x2c0d3a++) {
            this.m_main_LayoutByCol[_0x2c0d3a].active = true;
          }
        };
        _0x3bb7a8.RandomColLength = function () {
          return Math.floor(Math.random() * 5 + 0x2);
        };
        _0x3bb7a8.RandomSymbol = function () {
          var _0x390503 = Math.floor(Math.random() * (_0x44b969.SILVER_START - 0x1));
          if (Math.floor(0x63 * Math.random()) < _0x44b969.SYMBOL_SILVER_RATE) {
            _0x390503 = Math.floor(Math.random() * (_0x44b969.BASIC_SYMBOL_NUMBER - 0x1));
          }
          return _0x390503;
        };
        _0x3bb7a8.GetSymbolPostion_y = function (_0x1b9391, _0x224b7e) {
          return this.m_plateSymbolPostion_Y[_0x1b9391][_0x224b7e];
        };
        _0x3bb7a8.SetPlateSymbol = function (_0x11b87b) {
          _0x4bea68(" ✘●✘●✘ SetPlateSymbol content.length : ", _0x11b87b.length);
          if (0x0 == _0x11b87b.length) {
            var _0x5ce395 = Math.floor(Math.random() * _0x437c7e.length);
            for (var _0x4825e5 = 0x0; _0x4825e5 < 0x6; _0x4825e5++) {
              this.m_lockColumn.push(false);
              this.m_reelStopTime.push(null);
              this.m_reelPreTime.push(null);
              new Array();
              var _0xabb124 = _0x437c7e[_0x5ce395][_0x4825e5].length;
              var _0x4df1d9 = this.GetSymbolSizeId(_0x437c7e[_0x5ce395][_0x4825e5].length);
              var _0x4e25e7 = this.m_symbolSize_OneCol.width * (_0x4825e5 + 0.5) + this.m_reelPositionOffset[_0x4825e5].x - this.m_viewSize.width / 0x2;
              var _0x1de300 = this.m_viewSize.height / 0x2;
              this.node.getChildByName(_0x4825e5.toString()).setPosition(_0x453ef5(_0x4e25e7, -_0x1de300));
              for (var _0x3f4576 = 0x0; _0x3f4576 < 0x7; _0x3f4576++) {
                var _0x18161f = this.m_symbol[_0x4825e5][_0x3f4576];
                if (_0x3f4576 < _0xabb124) {
                  _0x18161f.active = true;
                  _0x18161f.setPosition(_0x453ef5(0x0, this.m_plateSymbolPostion_Y[_0x4df1d9][_0x3f4576]));
                  _0x18161f.getComponent(_0x12df1e).setContentSize(_0x44b969.SYMBOL_WEIGHT, _0x44b969.SYMBOL_HEIGHT[_0x4df1d9]);
                  this.setSymbolClothes(_0x18161f, _0x437c7e[_0x5ce395][_0x4825e5][_0x3f4576], _0x4df1d9);
                } else {
                  _0x18161f.active = false;
                }
              }
              this.m_isChangeToFinalSymbol.push(false);
            }
          } else {
            for (var _0x58141e = 0x0; _0x58141e < 0x6; _0x58141e++) {
              this.m_lockColumn.push(false);
              this.m_reelStopTime.push(null);
              this.m_reelPreTime.push(null);
              new Array();
              var _0xa5d474 = _0x11b87b[_0x58141e].length;
              var _0x45f872 = this.GetSymbolSizeId(_0x11b87b[_0x58141e].length);
              var _0x387996 = this.m_symbolSize_OneCol.width * (_0x58141e + 0.5) + this.m_reelPositionOffset[_0x58141e].x - this.m_viewSize.width / 0x2;
              var _0x26fe39 = this.m_viewSize.height / 0x2;
              this.node.getChildByName(_0x58141e.toString()).setPosition(_0x453ef5(_0x387996, -_0x26fe39));
              for (var _0x273f93 = 0x0; _0x273f93 < 14; _0x273f93++) {
                var _0x15da97 = this.m_symbol[_0x58141e][_0x273f93];
                if (_0x273f93 < _0xa5d474) {
                  _0x15da97.active = true;
                  _0x15da97.setPosition(_0x453ef5(0x0, this.m_plateSymbolPostion_Y[_0x45f872][_0x273f93]));
                  _0x15da97.getComponent(_0x12df1e).setContentSize(_0x44b969.SYMBOL_WEIGHT, _0x44b969.SYMBOL_HEIGHT[_0x45f872]);
                  this.setSymbolClothes(_0x15da97, _0x11b87b[_0x58141e][_0x273f93], _0x45f872);
                } else {
                  _0x15da97.active = false;
                }
              }
              this.m_isChangeToFinalSymbol.push(false);
            }
          }
          for (var _0xcbf21 = 0x0; _0xcbf21 < 0x6; _0xcbf21++) {
            var _0x539a65 = this.RandomColLength();
            this.GetSymbolSizeId(_0x539a65);
            var _0x1b0435 = this.m_symbolSize_OneCol.width * (_0xcbf21 + 0.5) + this.m_reelPositionOffset[_0xcbf21].x - this.m_viewSize.width / 0x2;
            var _0x54a2af = 1.5 * this.m_symbolSize_OneCol.height + this.m_reelPositionOffset[_0xcbf21].y - this.m_viewSize.height / 0x2 - this.m_viewSize.height / 0x2;
            this.node.getChildByName((0x6 + _0xcbf21).toString()).setPosition(_0x1b0435, _0x54a2af);
            for (var _0x3f4450 = 0x0; _0x3f4450 < 0x7; _0x3f4450++) {
              this.m_symbol_upper[_0xcbf21][_0x3f4450].active = false;
            }
            _0x539a65 = this.RandomColLength();
            this.GetSymbolSizeId(_0x539a65);
            _0x1b0435 = this.m_symbolSize_OneCol.width * (_0xcbf21 + 0.5) + this.m_reelPositionOffset[_0xcbf21].x - this.m_viewSize.width / 0x2;
            _0x54a2af = -0.5 * this.m_symbolSize_OneCol.height + this.m_reelPositionOffset[_0xcbf21].y - this.m_viewSize.height / 0x2 - this.m_viewSize.height / 0x2;
            this.node.getChildByName((12 + _0xcbf21).toString()).setPosition(_0x1b0435, _0x54a2af);
            for (var _0x652c3b = 0x0; _0x652c3b < _0x539a65; _0x652c3b++) {
              this.m_symbol_lower[_0xcbf21][_0x652c3b].active = false;
            }
          }
        };
        _0x3bb7a8.GetsymbolSpriteFrames = function (_0x213192, _0xc8421c) {
          var _0xb7ac3a = this.getClientSymbol(_0x213192) * _0x44b969.NORMAL_SYMBOL_SIZE + _0xc8421c;
          if (_0xb7ac3a < 0x0 || _0xb7ac3a > _0x44b969.TOTAL_CLIENT_SYMBOL_KIND * _0x44b969.NORMAL_SYMBOL_SIZE) {
            _0x312a9d(" error symbol * 6 + sizeId : " + _0xb7ac3a);
          }
          return this.m_symbolSpriteFrames[_0xb7ac3a];
        };
        _0x3bb7a8.setSymbolClothes = function (_0x15273e, _0x3ff06a, _0x1cf5c7) {
          _0x15273e.getChildByName('image').getComponent(_0x3d5fc5).spriteFrame = this.GetsymbolSpriteFrames(_0x3ff06a, _0x1cf5c7);
          _0x15273e.getChildByName("image").active = true;
          var _0x6f2b1d = this.getClientSymbolFrame(_0x3ff06a);
          for (var _0x232bed = 0x0; _0x232bed < _0x44b969.NORMAL_SYMBOL_SIZE; _0x232bed++) {
            _0x15273e.getChildByName('f_s_0' + _0x232bed.toString()).active = false;
            _0x15273e.getChildByName("f_g_0" + _0x232bed.toString()).active = false;
          }
          if (_0x6f2b1d == _0x44b969.FRAME_SILVER) {
            _0x15273e.getChildByName("f_s_0" + _0x1cf5c7.toString()).active = true;
          } else if (_0x6f2b1d == _0x44b969.FRAME_GOLD) {
            _0x15273e.getChildByName('f_g_0' + _0x1cf5c7.toString()).active = true;
          }
        };
        _0x3bb7a8.GetSymbolSizeId = function (_0xd38ac7) {
          return _0xd38ac7 - 0x2;
        };
        _0x3bb7a8.getClientSymbolFrame = function (_0x3d12d8) {
          return Math.floor(_0x3d12d8 / _0x44b969.SYMBOL_MOD);
        };
        _0x3bb7a8.getClientSymbol = function (_0x501352) {
          var _0x26144f = _0x501352 % _0x44b969.SYMBOL_MOD;
          if (!(_0x501352 < _0x44b969.SYMBOL_WILD)) {
            _0x26144f += _0x44b969.SYMBOL_MOD;
          }
          return _0x26144f;
        };
        return _0x3a919d;
      }(_0x3aabd7);
      _0x2acfee = _0x332b14(_0xf29f6c.prototype, "m_symbolSpriteFrames", [_0x2533b5], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x4f84ce = _0x332b14(_0xf29f6c.prototype, "m_symbol13gray", [_0x5c3468], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x37c430 = _0x332b14(_0xf29f6c.prototype, 'm_symbolPrefabs', [_0x55f706], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x58fcac = _0x332b14(_0xf29f6c.prototype, 'm_symbol_f_gold', [_0x478607], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x302171 = _0x332b14(_0xf29f6c.prototype, "m_symbol_f_silver", [_0x5817b6], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x36e371 = _0x25b2ee(_0x102cf1 = _0xf29f6c) || _0x102cf1;
      var _0x31e0f7;
      var _0x22b797;
      var _0x352845;
      var _0xd3b981;
      var _0x4f1fc5;
      var _0x43de47;
      var _0x4140c3;
      var _0xbde5e3;
      var _0x2bfc37;
      _0x3c3037._RF.pop();
      _0x3c3037._RF.push({}, "083b0/3QbJEc46XUzJmS+9u", "EffectPlate", undefined);
      var _0x353c9a = _0x11b6a5.property;
      _0x31e0f7 = _0x353c9a({
        'type': _0x36e371,
        'tooltip': '轉輪'
      });
      _0x22b797 = _0x353c9a({
        'type': _0x3d3e4a,
        'tooltip': "symbol連線動畫 Prefabs New"
      });
      _0x352845 = _0x353c9a({
        'type': _0x3fa416,
        'tooltip': "symbol相關表演的節點"
      });
      _0xd3b981 = _0x353c9a({
        'type': _0x3d3e4a,
        'tooltip': "蒐集符號使用的光球"
      });
      _0x4f1fc5 = function (_0x4fafb0) {
        function _0x5dfae9() {
          var _0xc3ee94;
          var _0x319a25 = arguments.length;
          var _0x57309b = new Array(_0x319a25);
          for (var _0x4dd6ec = 0x0; _0x4dd6ec < _0x319a25; _0x4dd6ec++) {
            _0x57309b[_0x4dd6ec] = arguments[_0x4dd6ec];
          }
          _0xc3ee94 = _0x4fafb0.call.apply(_0x4fafb0, [this].concat(_0x57309b)) || this;
          _0x4f750c(_0xc3ee94, 'm_slotReels', _0x43de47, _0x4acdb1(_0xc3ee94));
          _0x4f750c(_0xc3ee94, "m_symbolEffectPrefabs_new", _0x4140c3, _0x4acdb1(_0xc3ee94));
          _0x4f750c(_0xc3ee94, 'm_effectNode', _0xbde5e3, _0x4acdb1(_0xc3ee94));
          _0x4f750c(_0xc3ee94, "m_LightNode", _0x2bfc37, _0x4acdb1(_0xc3ee94));
          _0xc3ee94.m_gameView = null;
          _0xc3ee94.m_symbolEffects = new Array();
          _0xc3ee94.m_isAlreadyShowEffect = new Array();
          return _0xc3ee94;
        }
        _0x30ca45(_0x5dfae9, _0x4fafb0);
        var _0x53525b = _0x5dfae9.prototype;
        _0x53525b.onLoad = function () {
          for (var _0x5d6d88 = 0x0; _0x5d6d88 < 0x6; _0x5d6d88++) {
            var _0x2e5263 = new Array();
            for (var _0x53cd84 = 0x0; _0x53cd84 < 0x7; _0x53cd84++) {
              _0x2e5263.push(false);
            }
            this.m_isAlreadyShowEffect.push(_0x2e5263);
          }
          for (var _0x5f21b7 = 0x0; _0x5f21b7 < 0x6; _0x5f21b7++) {
            var _0x2bb3b5 = new Array();
            for (var _0x421f6d = 0x0; _0x421f6d < 0x7; _0x421f6d++) {
              _0x2bb3b5.push(null);
            }
            this.m_symbolEffects.push(_0x2bb3b5);
          }
        };
        _0x53525b.start = function () {};
        _0x53525b.Init = function (_0x4725bf) {
          this.m_gameView = _0x4725bf;
        };
        _0x53525b.getSymbolNameFormat = function (_0xabb9c0, _0x227b26) {
          var _0xd9e226 = _0xabb9c0;
          return _0xd9e226 = _0x227b26 < 0xa ? _0xd9e226 + '_0' + _0x227b26 : _0xd9e226 + '_' + _0x227b26;
        };
        _0x53525b.setSymbolActive = function (_0x1c36a6, _0x5d16c5, _0x275992) {
          for (var _0x169764 = 0x0; _0x169764 < _0x44b969.TOTAL_CLIENT_SYMBOL_KIND; _0x169764++) {
            if (_0x5d16c5.getChildByName(_0x169764.toString())) {
              _0x5d16c5.getChildByName(_0x169764.toString()).active = false;
            }
          }
          if (_0x5d16c5.getChildByName(_0x1c36a6.toString())) {
            _0x5d16c5.getChildByName(_0x1c36a6.toString()).active = _0x275992;
          }
        };
        _0x53525b.setEffectSymbol = function (_0x312014, _0x530a51, _0x9c1c68, _0x332ed5, _0x54540c, _0x5ed458) {
          var _0xa3d175;
          var _0xbd29f8 = this.m_slotReels.getClientSymbol(_0x312014);
          if (_0x530a51.getChildByName(_0xbd29f8.toString())) {
            this.setSymbolActive(_0xbd29f8, _0x530a51, _0x332ed5);
            if (_0xbd29f8 < _0x44b969.SYMBOL_MOD) {
              this.recoverExplosionSymbolFrame(_0x530a51.getChildByName(_0xbd29f8.toString()), _0x312014, _0x9c1c68);
            }
          } else {
            (_0xa3d175 = _0x57425c(this.m_symbolEffectPrefabs_new[_0xbd29f8])).name = _0xbd29f8.toString();
            _0x530a51.addChild(_0xa3d175);
          }
          var _0x3cf06a = _0x5ed458.position;
          _0x5ed458.setPosition(_0x3cf06a.x, this.m_slotReels.GetSymbolPostion_y(_0x9c1c68, _0x54540c));
          _0x530a51.getChildByName(_0xbd29f8.toString()).setPosition(_0x3cf06a);
          this.setNodeSizeActive(_0x9c1c68, _0x332ed5, _0x530a51.getChildByName(_0xbd29f8.toString()));
        };
        _0x53525b.setNodeSizeActive = function (_0xb4286e, _0x397d96, _0x23041a) {
          var _0x40eb43 = _0xb4286e + 0x1;
          for (var _0x31b917 = 0x1; _0x31b917 <= _0x44b969.NORMAL_SYMBOL_SIZE; _0x31b917++) {
            _0x23041a.getChildByName('0' + _0x31b917.toString()).active = false;
          }
          _0x23041a.getChildByName('0' + _0x40eb43.toString()).active = _0x397d96;
        };
        _0x53525b.CreateSymbolEffectNode = function (_0x2879a2, _0x383fbf) {
          var _0x174b71 = this.m_slotReels.GetSymbolSizeId(_0x2879a2[_0x383fbf.Col].length);
          var _0x4f1f2f = this.m_slotReels.GetColByIndex(_0x383fbf.Col);
          var _0x37f279 = this.m_slotReels.GetSymbolByIndex(_0x383fbf);
          var _0x3f5488 = this.m_symbolEffects[_0x383fbf.Col][_0x383fbf.Row];
          if (_0x3f5488) {
            _0x3f5488.setPosition(_0x4f1f2f.getPosition());
            this.setEffectSymbol(_0x2879a2[_0x383fbf.Col][_0x383fbf.Row], _0x3f5488, _0x174b71, true, _0x383fbf.Row, _0x37f279);
            _0x3f5488.active = true;
          } else {
            var _0x5e7687 = new _0x3fa416();
            _0x5e7687.addComponent(_0x12df1e);
            var _0x1b4e01 = 0xa * _0x383fbf.Col + _0x383fbf.Row;
            _0x5e7687.name = _0x1b4e01.toString();
            _0x5e7687.getComponent(_0x12df1e).setAnchorPoint(0.5, 0x0);
            _0x5e7687.setPosition(_0x4f1f2f.getPosition());
            this.m_effectNode.addChild(_0x5e7687);
            this.m_symbolEffects[_0x383fbf.Col][_0x383fbf.Row] = _0x5e7687;
            this.setEffectSymbol(_0x2879a2[_0x383fbf.Col][_0x383fbf.Row], _0x5e7687, _0x174b71, true, _0x383fbf.Row, _0x37f279);
          }
          return this.m_symbolEffects[_0x383fbf.Col][_0x383fbf.Row];
        };
        _0x53525b.ShowFGCollectionLight = function (_0x5ea020, _0x4ab957) {
          var _0x389567 = this;
          if (_0x4ab957.length > 0x0) {
            var _0x3b2b7f = function (_0x21dcbb) {
              var _0x3fb963 = _0x389567.CreateSymbolEffectNode(_0x5ea020, _0x4ab957[_0x21dcbb]);
              _0x389567.m_slotReels.SetEffectSymbolActive(_0x4ab957[_0x21dcbb].Col, _0x4ab957[_0x21dcbb].Row, true);
              _0x42891d.Play(_0x44b969.AudioClips.FlyBug);
              var _0x510b43 = _0x4ab957[_0x21dcbb];
              var _0x590b30 = _0x389567.m_slotReels.getClientSymbol(_0x5ea020[_0x510b43.Col][_0x510b43.Row]);
              var _0x2f6fa6 = _0x389567.m_symbolEffects[_0x510b43.Col][_0x510b43.Row].getChildByName(_0x590b30.toString());
              if (_0x2f6fa6) {
                var _0x19ae27 = null;
                var _0x2dc9c3 = _0x389567.m_slotReels.GetSymbolSizeId(_0x5ea020[_0x510b43.Col].length);
                _0x4500cf(_0x2f6fa6).call(function () {
                  _0x2f6fa6.getChildByName('0' + (_0x2dc9c3 + 0x1).toString()).getChildByName("Symbol_00_0" + (_0x2dc9c3 + 0x1).toString()).active = true;
                  _0x2f6fa6.getChildByName('0' + (_0x2dc9c3 + 0x1).toString()).getChildByName('Symbol_00_0' + (_0x2dc9c3 + 0x1).toString()).getComponent(_0x5912ae).play('Symbol_13');
                  _0x389567.m_slotReels.SetGrayCollection(_0x510b43.Col, _0x510b43.Row, _0x2dc9c3);
                }).delay(_0x44b969.ANI_ACTION_TIME.TIME_SHOW_COLLECTION).call(function () {
                  _0x2f6fa6.getChildByName('0' + (_0x2dc9c3 + 0x1).toString()).getChildByName("Symbol_00_0" + (_0x2dc9c3 + 0x1).toString()).getComponent(_0x5912ae).stop();
                  _0x2f6fa6.getChildByName('0' + (_0x2dc9c3 + 0x1).toString()).getChildByName("Symbol_00_0" + (_0x2dc9c3 + 0x1).toString()).active = false;
                  var _0x2b12cd = _0x389567.m_slotReels.GetSymbolSizeId(_0x5ea020[_0x4ab957[_0x21dcbb].Col].length);
                  (_0x19ae27 = _0x57425c(_0x389567.m_LightNode)).setPosition(_0x3fb963.getPosition().x, _0x389567.m_slotReels.GetSymbolPostion_y(_0x2b12cd, _0x4ab957[_0x21dcbb].Row) - _0x389567.node.getComponent(_0x12df1e).contentSize.height / 0x2);
                  _0x389567.node.addChild(_0x19ae27);
                  var _0x17a886 = new _0x4e8861(-0x132, 0x179);
                  if (_0x389567.m_gameView.IsLandscape) {
                    _0x17a886 = new _0x4e8861(-0x1c3, 0xab);
                  }
                  _0x4500cf(_0x19ae27).to(_0x44b969.ANI_ACTION_TIME.TIME_SHOW_COLLECTION_FLIGHT_LIGHT, {
                    'position': _0x17a886
                  }).start();
                }).delay(_0x44b969.ANI_ACTION_TIME.TIME_SHOW_COLLECTION_FLIGHT_LIGHT).call(function () {
                  _0x19ae27.removeFromParent();
                  _0x19ae27.destroy();
                  _0x19ae27 = null;
                }).start();
              }
            };
            for (var _0x55ca5 = 0x0; _0x55ca5 < _0x4ab957.length; _0x55ca5++) {
              _0x3b2b7f(_0x55ca5);
            }
          }
        };
        _0x53525b.ShowScatterAni_NearWin = function (_0x359d7d, _0x3f7bfd, _0x5c5f71) {
          for (var _0x273a51 = 0x0; _0x273a51 < _0x3f7bfd.length; _0x273a51++) {
            this.CreateSymbolEffectNode(_0x359d7d, _0x3f7bfd[_0x273a51]);
            this.m_slotReels.SetEffectSymbolActive(_0x3f7bfd[_0x273a51].Col, _0x3f7bfd[_0x273a51].Row, true);
          }
          var _0x56f709 = _0x3f7bfd.length;
          for (var _0x123c9a = 0x0; _0x123c9a < _0x56f709; _0x123c9a++) {
            var _0x5c908d = _0x3f7bfd[_0x123c9a];
            if (_0x5c908d.Col < _0x5c5f71) {
              var _0x243939 = this.m_slotReels.getClientSymbol(_0x359d7d[_0x5c908d.Col][_0x5c908d.Row]);
              var _0x4b93b8 = this.m_symbolEffects[_0x5c908d.Col][_0x5c908d.Row].getChildByName(_0x243939.toString());
              if (_0x4b93b8) {
                var _0x113e38 = this.m_slotReels.GetSymbolSizeId(_0x359d7d[_0x5c908d.Col].length);
                _0x4b93b8.getChildByName('0' + (_0x113e38 + 0x1).toString()).getChildByName("Symbol_00_0" + (_0x113e38 + 0x1).toString()).getComponent(_0x5912ae).play("Symbol_11_NearWin");
              }
            }
          }
        };
        _0x53525b.ShowScatterAni = function (_0x3ef7b9, _0x18a5db) {
          var _0x404fda = this;
          for (var _0x536001 = 0x0; _0x536001 < _0x18a5db.length; _0x536001++) {
            this.CreateSymbolEffectNode(_0x3ef7b9, _0x18a5db[_0x536001]);
            this.m_slotReels.SetEffectSymbolActive(_0x18a5db[_0x536001].Col, _0x18a5db[_0x536001].Row, true);
          }
          var _0x48852f = _0x18a5db.length;
          var _0x965c94 = function (_0x5d13bf) {
            var _0x28d770 = _0x18a5db[_0x5d13bf];
            var _0x4f978b = _0x404fda.m_slotReels.getClientSymbol(_0x3ef7b9[_0x28d770.Col][_0x28d770.Row]);
            var _0x55516c = _0x404fda.m_symbolEffects[_0x28d770.Col][_0x28d770.Row].getChildByName(_0x4f978b.toString());
            if (_0x55516c) {
              var _0x305fc7 = _0x404fda.m_slotReels.GetSymbolSizeId(_0x3ef7b9[_0x28d770.Col].length);
              _0x4500cf(_0x55516c).call(function () {
                _0x55516c.getChildByName('0' + (_0x305fc7 + 0x1).toString()).getChildByName("Symbol_00_0" + (_0x305fc7 + 0x1).toString()).getComponent(_0x5912ae).play("Symbol_11");
              }).delay(_0x44b969.ANI_ACTION_TIME.TIME_SHOW_SCATTER).call(function () {}).start();
            }
          };
          for (var _0x3d823e = 0x0; _0x3d823e < _0x48852f; _0x3d823e++) {
            _0x965c94(_0x3d823e);
          }
        };
        _0x53525b.HideScatter = function (_0x17c9c9, _0x14081b) {
          var _0x57eae7 = _0x14081b.length;
          for (var _0x2298fc = 0x0; _0x2298fc < _0x57eae7; _0x2298fc++) {
            var _0x1fdc86 = _0x14081b[_0x2298fc];
            var _0x4e1ea6 = this.m_slotReels.getClientSymbol(_0x17c9c9[_0x1fdc86.Col][_0x1fdc86.Row]);
            var _0x853bad = this.m_symbolEffects[_0x1fdc86.Col][_0x1fdc86.Row].getChildByName(_0x4e1ea6.toString());
            if (_0x853bad) {
              var _0x162166 = this.m_slotReels.GetSymbolSizeId(_0x17c9c9[_0x1fdc86.Col].length);
              _0x853bad.getChildByName('0' + (_0x162166 + 0x1).toString()).getChildByName("Symbol_00_0" + (_0x162166 + 0x1).toString()).getComponent(_0x5912ae).stop();
              _0x853bad.active = false;
              this.m_symbolEffects[_0x1fdc86.Col][_0x1fdc86.Row].active = false;
            }
          }
        };
        _0x53525b.ShowSymbolEffect = function (_0x4d1fcc, _0x11dd1c, _0x384698) {
          var _0x478a92 = this;
          var _0x5e2c2d = [];
          for (var _0x2f4242 = 0x0; _0x2f4242 < 0x6; _0x2f4242++) {
            var _0x46e4ab = [];
            for (var _0x4f9818 = 0x0; _0x4f9818 < _0x4d1fcc[_0x2f4242].length; _0x4f9818++) {
              _0x46e4ab.push(false);
            }
            _0x5e2c2d.push(_0x46e4ab);
          }
          for (var _0x1625b7 = 0x0; _0x1625b7 < _0x11dd1c.length; _0x1625b7++) {
            for (var _0x52f702 = 0x0; _0x52f702 < _0x11dd1c[_0x1625b7].GV.length; _0x52f702++) {
              _0x5e2c2d[_0x11dd1c[_0x1625b7].GV[_0x52f702].Col][_0x11dd1c[_0x1625b7].GV[_0x52f702].Row] = true;
            }
          }
          var _0x2b0c85 = Array();
          for (var _0x127fef = 0x0; _0x127fef < 0x6; _0x127fef++) {
            for (var _0x38ccf7 = 0x0; _0x38ccf7 < _0x4d1fcc[_0x127fef].length; _0x38ccf7++) {
              if (_0x5e2c2d[_0x127fef][_0x38ccf7]) {
                var _0x25a662 = new _0x3b6778();
                _0x25a662.Col = _0x127fef;
                _0x25a662.Row = _0x38ccf7;
                _0x2b0c85.push(_0x25a662);
              }
            }
          }
          var _0x3882b2 = _0x2b0c85.length;
          for (var _0x321d5d = 0x0; _0x321d5d < _0x3882b2; _0x321d5d++) {
            var _0x286474 = _0x2b0c85[_0x321d5d];
            if (!this.m_isAlreadyShowEffect[_0x286474.Col][_0x286474.Row]) {
              this.m_isAlreadyShowEffect[_0x286474.Col][_0x286474.Row] = true;
              this.CreateSymbolEffectNode(_0x4d1fcc, _0x286474);
            }
          }
          var _0x185965 = _0x44b969.ANI_ACTION_TIME.TIME_SHOW_EXPLOSION;
          if (this.m_gameView.IsHardStop) {
            _0x185965 = _0x44b969.ANI_ACTION_TIME.TIME_SHOW_EXPLOSION_FAST;
          }
          var _0x4daeb7 = 0x0;
          var _0x1f53fd = this.m_slotReels.GetUpgradeList();
          if (_0x1f53fd.length > 0x0) {
            var _0x4cd166 = true;
            for (var _0x3fb74c = 0x0; _0x3fb74c < _0x1f53fd.length; _0x3fb74c++) {
              if (Math.floor(_0x1f53fd[_0x3fb74c].Symbol / _0x44b969.SYMBOL_MOD) == _0x44b969.FRAME_SILVER) {
                _0x4cd166 = false;
                break;
              }
            }
            _0x4daeb7 = this.m_gameView.IsHardStop ? _0x4cd166 ? _0x44b969.ANI_ACTION_TIME.TIME_SHOW_TRANSFER_ONLY_GOLD_FAST : _0x44b969.ANI_ACTION_TIME.TIME_SHOW_TRANSFER_FAST : _0x4cd166 ? _0x44b969.ANI_ACTION_TIME.TIME_SHOW_TRANSFER_ONLY_GOLD : _0x44b969.ANI_ACTION_TIME.TIME_SHOW_TRANSFER;
          }
          _0x4bea68(" explosionTime:", _0x185965);
          var _0x43e41d = _0x185965;
          if (_0x4daeb7 > _0x185965) {
            _0x43e41d = _0x4daeb7 + _0x44b969.ANI_ACTION_TIME.TIME_SHOW_AFTER_TRANS;
          }
          _0x4500cf(this.node).call(function () {
            _0x478a92.ExplosionSymbolEffect(_0x4d1fcc, _0x2b0c85, _0x185965, _0x4daeb7);
            _0x4500cf(_0x478a92.node).delay(0.2 * _0x43e41d).call(function () {
              _0x478a92.m_gameView.ShowCombolWays();
            }).start();
          }).delay(_0x43e41d).call(function () {
            if (_0x384698) {
              _0x384698();
            }
          }).start();
        };
        _0x53525b.isShowfreeCollectionCount = function (_0x441874) {
          return _0x441874 > 0x0;
        };
        _0x53525b.recoverExplosionSymbolFrame = function (_0x3fbc51, _0x11ec3d, _0x2c5889) {
          _0x4bea68(" recoverExplosionSymbolFrame symbolIndex:", _0x11ec3d, " sizeId:", _0x2c5889);
          var _0x3c0614 = _0x2c5889 + 0x1;
          var _0x4e7088 = _0x3fbc51.getChildByName('0' + _0x3c0614.toString()).getChildByName("Symbol_00_0" + _0x3c0614.toString()).getChildByName("Root").getChildByName('Up').getChildByName('R').getChildByName('L').getChildByName("Symbol");
          this.setEffectSymbolClothes(_0x4e7088, _0x11ec3d, _0x2c5889);
        };
        _0x53525b.setExplosionSymbolFrame = function (_0x19e3a7, _0x1494fa, _0x2b7d16, _0x3a8288) {
          if (undefined === _0x3a8288) {
            _0x3a8288 = -0x1;
          }
          _0x4bea68(" setExplosionSymbolFrame symbolIndex:", _0x1494fa, " sizeId:", _0x2b7d16, " nextSymbol:", _0x3a8288);
          var _0x18c054 = Math.floor(_0x1494fa / _0x44b969.SYMBOL_MOD);
          var _0x50d162 = _0x2b7d16 + 0x1;
          _0x19e3a7.getChildByName('0' + _0x50d162.toString()).active = true;
          var _0xce75a3 = _0x19e3a7.getChildByName('0' + _0x50d162.toString()).getChildByName("Symbol_00_0" + _0x50d162.toString());
          if (this.m_gameView.IsHardStop) {
            if (_0x1494fa >= _0x44b969.SYMBOL_WILD || _0x18c054 == _0x44b969.FRAME_NORMAL) {
              _0xce75a3.getComponent(_0x5912ae).play('Symbol_Remove_04');
            } else if (_0x18c054 == _0x44b969.FRAME_SILVER) {
              _0xce75a3.getComponent(_0x5912ae).play("Symbol_RT_04_S");
            } else if (_0x18c054 == _0x44b969.FRAME_GOLD) {
              _0xce75a3.getComponent(_0x5912ae).play("Symbol_RT_04_G");
            }
          } else if (_0x1494fa >= _0x44b969.SYMBOL_WILD || _0x18c054 == _0x44b969.FRAME_NORMAL) {
            _0xce75a3.getComponent(_0x5912ae).play("Symbol_Remove");
          } else if (_0x18c054 == _0x44b969.FRAME_SILVER) {
            _0xce75a3.getComponent(_0x5912ae).play("Symbol_RT_01_S");
          } else if (_0x18c054 == _0x44b969.FRAME_GOLD) {
            _0xce75a3.getComponent(_0x5912ae).play("Symbol_RT_01_G");
          }
        };
        _0x53525b.SetUpgradeSymbolFrame = function (_0x54dec, _0x88c6b5, _0x58758e, _0x2deac7) {
          var _0x474838 = this;
          if (undefined === _0x2deac7) {
            _0x2deac7 = -0x1;
          }
          _0x4bea68(" setExplosionSymbolFrame symbolIndex:", _0x88c6b5, " sizeId:", _0x58758e, " nextSymbol:", _0x2deac7);
          var _0x11952e = Math.floor(_0x88c6b5 / _0x44b969.SYMBOL_MOD);
          var _0x3e6764 = _0x58758e + 0x1;
          _0x54dec.getChildByName('0' + _0x3e6764.toString()).active = true;
          var _0x73134d = _0x54dec.getChildByName('0' + _0x3e6764.toString()).getChildByName("Symbol_00_0" + _0x3e6764.toString());
          _0x4bea68(" num :", _0x3e6764);
          var _0x522dd3 = _0x73134d.getChildByName("Root").getChildByName('Up').getChildByName('R').getChildByName('L').getChildByName("Symbol");
          if (this.m_gameView.IsHardStop) {
            if (!(_0x88c6b5 >= _0x44b969.SYMBOL_WILD || _0x11952e == _0x44b969.FRAME_NORMAL)) {
              if (_0x11952e == _0x44b969.FRAME_SILVER) {
                _0x73134d.getComponent(_0x5912ae).play("Symbol_RT_04_S");
                _0x4500cf(_0x522dd3).delay(_0x44b969.ANI_ACTION_TIME.TIME_SHOW_TRANSFER_SYMBOL_FAST).call(function () {
                  _0x474838.setEffectSymbolClothes(_0x522dd3, _0x2deac7, _0x58758e);
                }).start();
              } else if (_0x11952e == _0x44b969.FRAME_GOLD) {
                _0x73134d.getComponent(_0x5912ae).play("Symbol_RT_04_G");
                _0x4500cf(_0x522dd3).delay(_0x44b969.ANI_ACTION_TIME.TIME_SHOW_TRANSFER_SYMBOL_FAST).call(function () {
                  _0x474838.setEffectSymbolClothes(_0x522dd3, _0x2deac7, _0x58758e);
                }).start();
              }
            }
          } else if (!(_0x88c6b5 >= _0x44b969.SYMBOL_WILD || _0x11952e == _0x44b969.FRAME_NORMAL)) {
            if (_0x11952e == _0x44b969.FRAME_SILVER) {
              _0x73134d.getComponent(_0x5912ae).play("Symbol_RT_01_S");
              _0x4500cf(_0x522dd3).delay(_0x44b969.ANI_ACTION_TIME.TIME_SHOW_TRANSFER_SYMBOL).call(function () {
                _0x474838.setEffectSymbolClothes(_0x522dd3, _0x2deac7, _0x58758e);
              }).start();
            } else if (_0x11952e == _0x44b969.FRAME_GOLD) {
              _0x73134d.getComponent(_0x5912ae).play("Symbol_RT_01_G");
              _0x4500cf(_0x522dd3).delay(_0x44b969.ANI_ACTION_TIME.TIME_SHOW_TRANSFER_SYMBOL).call(function () {
                _0x474838.setEffectSymbolClothes(_0x522dd3, _0x2deac7, _0x58758e);
              }).start();
            }
          }
        };
        _0x53525b.setEffectSymbolClothes = function (_0x550e12, _0x400c14, _0x2d4adf) {
          _0x550e12.getComponent(_0x3d5fc5).spriteFrame = this.m_slotReels.GetsymbolSpriteFrames(_0x400c14, _0x2d4adf);
          _0x550e12.active = true;
          var _0x485915 = this.m_slotReels.getClientSymbolFrame(_0x400c14);
          for (var _0x1aa577 = 0x0; _0x1aa577 < _0x44b969.NORMAL_SYMBOL_SIZE; _0x1aa577++) {
            _0x550e12.getChildByName("f_s").active = false;
            _0x550e12.getChildByName("f_g").active = false;
          }
          if (_0x485915 == _0x44b969.FRAME_SILVER) {
            _0x550e12.getChildByName("f_s").active = true;
          } else if (_0x485915 == _0x44b969.FRAME_GOLD) {
            _0x550e12.getChildByName("f_g").active = true;
          }
        };
        _0x53525b.setExplosionSymbolFrame_Transfer = function (_0x49cf76, _0x41bd07, _0x2a154f) {
          var _0x17556a = Math.floor(_0x41bd07 / _0x44b969.SYMBOL_MOD);
          var _0x53338e = _0x2a154f + 0x1;
          var _0x31e32d = _0x49cf76.getChildByName('0' + _0x53338e.toString()).getChildByName('Symbol_00_0' + _0x53338e.toString());
          if (_0x17556a == _0x44b969.FRAME_SILVER) {
            _0x31e32d.getComponent(_0x5912ae).play("Symbol_Transfer_01_S");
          } else if (_0x17556a == _0x44b969.FRAME_GOLD) {
            _0x31e32d.getComponent(_0x5912ae).play("Symbol_Transfer_01_G");
          }
        };
        _0x53525b.ExplosionSymbolEffect = function (_0x2ce57a, _0x4ae2f1, _0x3dae40, _0x1cbbd6) {
          var _0x7e885 = this;
          var _0x12acea = this.m_slotReels.GetUpgradeList();
          var _0x112d78 = this.m_slotReels.GetHoleList();
          var _0x457e91 = 0x0;
          for (var _0x229267 = 0x0; _0x229267 < _0x12acea.length; _0x229267++) {
            var _0x515ff6 = _0x12acea[_0x229267];
            if (Math.floor(_0x2ce57a[_0x515ff6.Col][_0x515ff6.Row] / _0x44b969.SYMBOL_MOD) == _0x44b969.FRAME_GOLD) {
              _0x457e91++;
            }
          }
          if (this.m_gameView.IsHardStop) {
            if (_0x112d78.length > 0x0 && 0x0 == _0x12acea.length || _0x12acea.length == _0x457e91) {
              _0x42891d.Play(_0x44b969.AudioClips.Link_fast);
            } else {
              _0x42891d.Play(_0x44b969.AudioClips.Link_fast);
              _0x42891d.Play(_0x44b969.AudioClips.Transfer_fast);
            }
          } else if (_0x112d78.length > 0x0 && 0x0 == _0x12acea.length || _0x12acea.length == _0x457e91) {
            _0x42891d.Play(_0x44b969.AudioClips.Link);
          } else {
            _0x42891d.Play(_0x44b969.AudioClips.Link);
            _0x42891d.Play(_0x44b969.AudioClips.Transfer);
          }
          for (var _0x143aca = 0x0; _0x143aca < 0x6; _0x143aca++) {
            for (var _0x48b4a8 = 0x0; _0x48b4a8 < 0x7; _0x48b4a8++) {
              if (this.m_symbolEffects[_0x143aca][_0x48b4a8]) {
                var _0x318e81 = this.m_symbolEffects[_0x143aca][_0x48b4a8];
                _0xf79e94.SetZIndex(_0x318e81, _0x44b969.EXPLORE_ZORDER);
              }
            }
          }
          var _0x3e5668 = function (_0x115b05) {
            var _0x1f4a8b = _0x7e885.m_symbolEffects[_0x115b05.Col][_0x115b05.Row];
            _0xf79e94.SetZIndex(_0x1f4a8b, _0x44b969.TRANSFER_ZORDER);
            var _0x143a7c = _0x7e885.m_slotReels.getClientSymbol(_0x2ce57a[_0x115b05.Col][_0x115b05.Row]);
            _0x4bea68(" upgradeFunc  symbol:", _0x143a7c);
            var _0x352048 = _0x7e885.m_symbolEffects[_0x115b05.Col][_0x115b05.Row].getChildByName(_0x143a7c.toString());
            if (_0x352048) {
              var _0x117c8b = _0x7e885.m_slotReels.GetSymbolSizeId(_0x2ce57a[_0x115b05.Col].length);
              _0x4500cf(_0x352048).call(function () {
                _0x7e885.SetUpgradeSymbolFrame(_0x352048, _0x2ce57a[_0x115b05.Col][_0x115b05.Row], _0x117c8b, _0x115b05.Symbol_NextUpgrade);
              }).delay(_0x1cbbd6).call(function () {
                _0x352048.active = false;
                _0x7e885.m_symbolEffects[_0x115b05.Col][_0x115b05.Row].active = false;
                if (_0x7e885.m_isAlreadyShowEffect[_0x115b05.Col][_0x115b05.Row]) {
                  _0x7e885.m_isAlreadyShowEffect[_0x115b05.Col][_0x115b05.Row] = false;
                }
              }).start();
            }
          };
          _0x4bea68(" upgradeFunc **************************************** ");
          for (var _0x455d2b = 0x0; _0x455d2b < _0x12acea.length; _0x455d2b++) {
            _0x3e5668(_0x12acea[_0x455d2b]);
            var _0x5d30af = this.m_slotReels.GetSymbolSizeId(_0x2ce57a[_0x12acea[_0x455d2b].Col].length);
            this.m_slotReels.UpgradeSymbolFrame(_0x12acea[_0x455d2b].Col, _0x12acea[_0x455d2b].Row, _0x12acea[_0x455d2b].Symbol_NextUpgrade, _0x5d30af);
          }
          var _0x567b5d = function (_0x5220d7) {
            var _0x25277d = _0x7e885.m_symbolEffects[_0x5220d7.Col][_0x5220d7.Row];
            _0xf79e94.SetZIndex(_0x25277d, _0x44b969.EXPLORE_ZORDER);
            var _0x535623 = _0x7e885.m_slotReels.getClientSymbol(_0x2ce57a[_0x5220d7.Col][_0x5220d7.Row]);
            var _0x37d55b = _0x7e885.m_symbolEffects[_0x5220d7.Col][_0x5220d7.Row].getChildByName(_0x535623.toString());
            if (_0x37d55b) {
              var _0x6c5089 = _0x7e885.m_slotReels.GetSymbolSizeId(_0x2ce57a[_0x5220d7.Col].length);
              _0x4500cf(_0x37d55b).call(function () {
                _0x7e885.setExplosionSymbolFrame(_0x37d55b, _0x2ce57a[_0x5220d7.Col][_0x5220d7.Row], _0x6c5089);
              }).delay(_0x3dae40).call(function () {
                _0x37d55b.getChildByName('0' + (_0x6c5089 + 0x1).toString()).getChildByName("Symbol_00_0" + (_0x6c5089 + 0x1).toString()).getComponent(_0x5912ae).stop();
                _0x37d55b.active = false;
                _0x7e885.m_symbolEffects[_0x5220d7.Col][_0x5220d7.Row].active = false;
                if (_0x7e885.m_isAlreadyShowEffect[_0x5220d7.Col][_0x5220d7.Row]) {
                  _0x7e885.m_isAlreadyShowEffect[_0x5220d7.Col][_0x5220d7.Row] = false;
                }
              }).start();
            }
          };
          _0x4bea68(" exploreFunc **************************************** ");
          for (var _0x4b7773 = 0x0; _0x4b7773 < _0x112d78.length; _0x4b7773++) {
            _0x567b5d(_0x112d78[_0x4b7773]);
            this.m_slotReels.SetEffectSymbolActive(_0x112d78[_0x4b7773].Col, _0x112d78[_0x4b7773].Row, false);
          }
        };
        _0x53525b.HideSymbolEffect = function () {
          for (var _0xdea0fa = 0x0; _0xdea0fa < this.m_symbolEffects.length; _0xdea0fa++) {
            if (this.m_symbolEffects[_0xdea0fa]) {
              for (var _0x2ca16a = 0x0; _0x2ca16a < this.m_symbolEffects[_0xdea0fa].length; _0x2ca16a++) {
                if (this.m_symbolEffects[_0xdea0fa][_0x2ca16a]) {
                  for (var _0x35d3d1 = 0x0; _0x35d3d1 < _0x44b969.TOTAL_SYMBOL_NUMBER; _0x35d3d1++) {
                    var _0x53aab5 = this.m_symbolEffects[_0xdea0fa][_0x2ca16a].getChildByName(_0x35d3d1.toString());
                    if (_0x53aab5) {
                      _0x53aab5.removeFromParent();
                      _0x53aab5.destroy();
                    }
                  }
                  this.m_symbolEffects[_0xdea0fa][_0x2ca16a] = null;
                  if (this.m_isAlreadyShowEffect[_0xdea0fa][_0x2ca16a]) {
                    this.m_isAlreadyShowEffect[_0xdea0fa][_0x2ca16a] = false;
                  }
                }
              }
            }
          }
        };
        return _0x5dfae9;
      }(_0x3aabd7);
      _0x43de47 = _0x332b14(_0x4f1fc5.prototype, 'm_slotReels', [_0x31e0f7], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4140c3 = _0x332b14(_0x4f1fc5.prototype, "m_symbolEffectPrefabs_new", [_0x22b797], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0xbde5e3 = _0x332b14(_0x4f1fc5.prototype, "m_effectNode", [_0x352845], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2bfc37 = _0x332b14(_0x4f1fc5.prototype, 'm_LightNode', [_0xd3b981], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x57ec0c;
      var _0x3d9595;
      var _0x537609;
      var _0x3c9410;
      var _0x55f647;
      var _0x2fbf27;
      var _0x46c190;
      _0x3c3037._RF.pop();
      _0x3c3037._RF.push({}, "8978ayp81ZMoJAdsocUHEjG", "FreeGameIn", undefined);
      var _0x50afc0 = _0x11b6a5.property;
      _0x57ec0c = _0x50afc0({
        'type': _0x3d5fc5,
        'tooltip': "m_FG_T03"
      });
      _0x3d9595 = _0x50afc0({
        'type': _0x3d5fc5,
        'tooltip': 'm_FG_T04'
      });
      _0x537609 = _0x50afc0({
        'type': _0x1ac6c2,
        'tooltip': "m_Num_Freespin"
      });
      _0x3c9410 = function (_0xa3c512) {
        function _0x3f6736() {
          var _0x1e7311;
          var _0x107ddd = arguments.length;
          var _0xcf71d1 = new Array(_0x107ddd);
          for (var _0xfccf19 = 0x0; _0xfccf19 < _0x107ddd; _0xfccf19++) {
            _0xcf71d1[_0xfccf19] = arguments[_0xfccf19];
          }
          _0x1e7311 = _0xa3c512.call.apply(_0xa3c512, [this].concat(_0xcf71d1)) || this;
          _0x4f750c(_0x1e7311, 'm_FG_T03', _0x55f647, _0x4acdb1(_0x1e7311));
          _0x4f750c(_0x1e7311, "m_FG_T04", _0x2fbf27, _0x4acdb1(_0x1e7311));
          _0x4f750c(_0x1e7311, "m_Num_Freespin", _0x46c190, _0x4acdb1(_0x1e7311));
          return _0x1e7311;
        }
        _0x30ca45(_0x3f6736, _0xa3c512);
        _0x3f6736.prototype.start = function () {};
        _0x4080a5(_0x3f6736, [{
          'key': 'FG_T03',
          'get': function () {
            return this.m_FG_T03;
          }
        }, {
          'key': "FG_T04",
          'get': function () {
            return this.m_FG_T04;
          }
        }, {
          'key': "Num_Freespin",
          'get': function () {
            return this.m_Num_Freespin;
          }
        }]);
        return _0x3f6736;
      }(_0x3aabd7);
      _0x55f647 = _0x332b14(_0x3c9410.prototype, 'm_FG_T03', [_0x57ec0c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2fbf27 = _0x332b14(_0x3c9410.prototype, "m_FG_T04", [_0x3d9595], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x46c190 = _0x332b14(_0x3c9410.prototype, "m_Num_Freespin", [_0x537609], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x33bbe3;
      var _0x5c303e;
      var _0x39d4c0;
      var _0x51cbf7;
      var _0x51d206;
      var _0x276c3a;
      var _0x49048f;
      var _0xacd6bf;
      var _0x28c28e;
      _0x3c3037._RF.pop();
      _0x3c3037._RF.push({}, '4762c9SEjhMtpf94rV83E0I', 'FreeGameOut', undefined);
      var _0x53b2f2 = _0x11b6a5.property;
      _0x33bbe3 = _0x53b2f2({
        'type': _0x3d5fc5,
        'tooltip': "m_Congrats_Txt2"
      });
      _0x5c303e = _0x53b2f2({
        'type': _0x3d5fc5,
        'tooltip': "m_Congrats_Txt"
      });
      _0x39d4c0 = _0x53b2f2({
        'type': _0x3d5fc5,
        'tooltip': "m_Congrats_Spin_Txt"
      });
      _0x51cbf7 = _0x53b2f2({
        'type': _0x1ac6c2,
        'tooltip': "m_Num"
      });
      _0x51d206 = function (_0x4cd9b8) {
        function _0x27f08b() {
          var _0x4d1811;
          var _0x18748b = arguments.length;
          var _0x23caba = new Array(_0x18748b);
          for (var _0x972498 = 0x0; _0x972498 < _0x18748b; _0x972498++) {
            _0x23caba[_0x972498] = arguments[_0x972498];
          }
          _0x4d1811 = _0x4cd9b8.call.apply(_0x4cd9b8, [this].concat(_0x23caba)) || this;
          _0x4f750c(_0x4d1811, 'm_Congrats_Txt2', _0x276c3a, _0x4acdb1(_0x4d1811));
          _0x4f750c(_0x4d1811, "m_Congrats_Txt", _0x49048f, _0x4acdb1(_0x4d1811));
          _0x4f750c(_0x4d1811, "m_Congrats_Spin_Txt", _0xacd6bf, _0x4acdb1(_0x4d1811));
          _0x4f750c(_0x4d1811, 'm_Num', _0x28c28e, _0x4acdb1(_0x4d1811));
          return _0x4d1811;
        }
        _0x30ca45(_0x27f08b, _0x4cd9b8);
        _0x27f08b.prototype.start = function () {};
        _0x4080a5(_0x27f08b, [{
          'key': "Congrats_Txt2",
          'get': function () {
            return this.m_Congrats_Txt2;
          }
        }, {
          'key': "Congrats_Txt",
          'get': function () {
            return this.m_Congrats_Txt;
          }
        }, {
          'key': "Congrats_Spin_Txt",
          'get': function () {
            return this.m_Congrats_Spin_Txt;
          }
        }, {
          'key': 'Num',
          'get': function () {
            return this.m_Num;
          }
        }]);
        return _0x27f08b;
      }(_0x3aabd7);
      _0x276c3a = _0x332b14(_0x51d206.prototype, 'm_Congrats_Txt2', [_0x33bbe3], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x49048f = _0x332b14(_0x51d206.prototype, 'm_Congrats_Txt', [_0x5c303e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0xacd6bf = _0x332b14(_0x51d206.prototype, 'm_Congrats_Spin_Txt', [_0x39d4c0], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x28c28e = _0x332b14(_0x51d206.prototype, "m_Num", [_0x51cbf7], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x5a0e8d;
      var _0x5c2796;
      var _0xc0ab1b;
      _0x3c3037._RF.pop();
      _0x3c3037._RF.push({}, "a0c77fCV4JOoL5KLJKIVJz9", "FreeGameScsrabPanel", undefined);
      var _0x519fdc = _0x11b6a5.property;
      _0x5a0e8d = _0x519fdc({
        'type': _0x1ac6c2,
        'tooltip': "m_freeGameWinUpgradeLineLabel"
      });
      _0x5c2796 = function (_0xa38157) {
        function _0x3fbc6c() {
          var _0x2d1170;
          var _0x33595e = arguments.length;
          var _0x3ccd25 = new Array(_0x33595e);
          for (var _0x1ac6fc = 0x0; _0x1ac6fc < _0x33595e; _0x1ac6fc++) {
            _0x3ccd25[_0x1ac6fc] = arguments[_0x1ac6fc];
          }
          _0x2d1170 = _0xa38157.call.apply(_0xa38157, [this].concat(_0x3ccd25)) || this;
          _0x4f750c(_0x2d1170, "m_freeGameWinUpgradeLineLabel", _0xc0ab1b, _0x4acdb1(_0x2d1170));
          return _0x2d1170;
        }
        _0x30ca45(_0x3fbc6c, _0xa38157);
        _0x3fbc6c.prototype.start = function () {};
        _0x4080a5(_0x3fbc6c, [{
          'key': "FreeGameWinUpgradeLineLabel",
          'get': function () {
            return this.m_freeGameWinUpgradeLineLabel;
          }
        }]);
        return _0x3fbc6c;
      }(_0x3aabd7);
      _0xc0ab1b = _0x332b14(_0x5c2796.prototype, "m_freeGameWinUpgradeLineLabel", [_0x5a0e8d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x3f87c5;
      _0x3c3037._RF.pop();
      _0x3c3037._RF.push({}, '92e5d3b2RZBfY1Vkwi0Hy4W', "AwardState", undefined);
      var _0x9d2f1f = _0x11b6a5.ccclass;
      _0x3f87c5 = _0x9d2f1f('AwardState');
      var _0xe19f9;
      _0x3c3037._RF.pop();
      _0x3c3037._RF.push({}, "4c8d7bFrk5JKqa8m5ro1mqi", "CheckState", undefined);
      var _0x4d6670 = _0x11b6a5.ccclass;
      _0xe19f9 = _0x4d6670("CheckState");
      var _0x1fd087;
      _0x3c3037._RF.pop();
      _0x3c3037._RF.push({}, "8a9dfi05hdAGJ5tvbvNbrvo", "EffectEndState", undefined);
      var _0x2324e1 = _0x11b6a5.ccclass;
      _0x1fd087 = _0x2324e1("EffectEndState");
      var _0x1f6e79;
      _0x3c3037._RF.pop();
      _0x3c3037._RF.push({}, "5da48a/qNxPKYMs8IDGUn4P", "EffectStartState", undefined);
      var _0x23e935 = _0x11b6a5.ccclass;
      _0x1f6e79 = _0x23e935("EffectStartState");
      var _0x5445d2;
      _0x3c3037._RF.pop();
      _0x3c3037._RF.push({}, "5c717q/XyhCZ7+NIshMVshH", 'FeatureShowState', undefined);
      var _0x4437ac = _0x11b6a5.ccclass;
      _0x5445d2 = _0x4437ac("FeatureShowState");
      var _0x53094d;
      _0x3c3037._RF.pop();
      _0x3c3037._RF.push({}, "5312ftcLaFDLIgfX8jKxQaY", "IdleState", undefined);
      var _0x105ee7 = _0x11b6a5.ccclass;
      _0x53094d = _0x105ee7("IdleState");
      var _0x5d3043;
      _0x3c3037._RF.pop();
      _0x3c3037._RF.push({}, "c72fcf1GV1PNrOBsszMfcXa", "LinkLineState", undefined);
      var _0x5c1e92 = _0x11b6a5.ccclass;
      _0x5d3043 = _0x5c1e92("LinkLineState");
      var _0x490509;
      _0x3c3037._RF.pop();
      _0x3c3037._RF.push({}, "ac6c4dMkW9DIL05UG8nZbnm", "PlateShowState", undefined);
      var _0x147c5b = _0x11b6a5.ccclass;
      _0x490509 = _0x147c5b("PlateShowState");
      var _0x193855;
      _0x3c3037._RF.pop();
      _0x3c3037._RF.push({}, "79068UgvXNJmbFHwkP11tfi", 'RoundEndState', undefined);
      var _0x80ef11 = _0x11b6a5.ccclass;
      _0x193855 = _0x80ef11("RoundEndState");
      var _0x3ddf41;
      _0x3c3037._RF.pop();
      _0x3c3037._RF.push({}, "d670eyGiDRDi6BZYhb/tHp5", "RoundShowEndState", undefined);
      var _0x174753 = _0x11b6a5.ccclass;
      _0x3ddf41 = _0x174753("RoundShowEndState");
      var _0x511b6c;
      _0x3c3037._RF.pop();
      _0x3c3037._RF.push({}, "63c89fAhuZKOYBGmGZvhgpw", "ScatterState", undefined);
      var _0xa3b49e = _0x11b6a5.ccclass;
      _0x511b6c = _0xa3b49e("ScatterState");
      var _0x5ee053;
      _0x3c3037._RF.pop();
      _0x3c3037._RF.push({}, "25161Lg055LLYBAG1+WwrAW", "SpinState", undefined);
      var _0x202e1f = _0x11b6a5.ccclass;
      _0x5ee053 = _0x202e1f("SpinState");
      var _0x81f3ae;
      _0x3c3037._RF.pop();
      _0x3c3037._RF.push({}, "f123aVOYSNMRZCKmjvTgQgg", "SymbolFallingState", undefined);
      var _0x76849a = _0x11b6a5.ccclass;
      _0x81f3ae = _0x76849a('SymbolFallingState');
      var _0x31bc5e;
      _0x3c3037._RF.pop();
      _0x3c3037._RF.push({}, "c794fyHpURKGpDjxNWX6L92", "TileMatchState", undefined);
      var _0x570a4d = _0x11b6a5.ccclass;
      _0x31bc5e = _0x570a4d("TileMatchState");
      var _0x4a6e35;
      _0x3c3037._RF.pop();
      _0x3c3037._RF.push({}, "1fa87t1frpJA5ub2GDFPYmX", "UnshowPrepareState", undefined);
      var _0x57a396 = _0x11b6a5.ccclass;
      _0x4a6e35 = _0x57a396("UnshowPrepareState");
      var _0x1b4605;
      _0x3c3037._RF.pop();
      _0x3c3037._RF.push({}, "b721cIqmRdAYbE/aX8usYdJ", 'WaitResState', undefined);
      var _0x4ac607 = _0x11b6a5.ccclass;
      _0x1b4605 = _0x4ac607("WaitResState");
      var _0x4c1f57;
      _0x3c3037._RF.pop();
      _0x3c3037._RF.push({}, "ee97aQxHtVPCa8qTxuEDWLG", "WaitTouchState", undefined);
      var _0xbcc55b = _0x11b6a5.ccclass;
      _0x4c1f57 = _0xbcc55b("WaitTouchState");
      _0x3c3037._RF.pop();
      var _0xd69b4f = function () {
        function _0x432d7f() {
          this._registry = {};
          this._moduleCache = {};
        }
        var _0x17c816 = _0x432d7f.prototype;
        _0x17c816.define = function (_0x2630c6, _0x385098, _0x1189d0) {
          this._registry[_0x2630c6] = {
            'factory': _0x385098,
            'resolveMap': _0x1189d0
          };
        };
        _0x17c816.require = function (_0x13ce84) {
          return this._require(_0x13ce84);
        };
        _0x17c816.throwInvalidWrapper = function (_0x3c7e8e, _0x5321db) {
          throw new Error("Module '" + _0x3c7e8e + "' imported from '" + _0x5321db + "' is expected be an ESM-wrapped CommonJS module but it doesn't.");
        };
        _0x17c816._require = function (_0x1a5ad4, _0x3d9e95) {
          var _0x280640 = this._moduleCache[_0x1a5ad4];
          if (_0x280640) {
            return _0x280640.exports;
          }
          var _0x516e3c = {
            'id': _0x1a5ad4,
            'exports': {}
          };
          this._moduleCache[_0x1a5ad4] = _0x516e3c;
          this._tryModuleLoad(_0x516e3c, _0x1a5ad4);
          return _0x516e3c.exports;
        };
        _0x17c816._resolve = function (_0x31e6e3, _0x5d86f5) {
          return this._resolveFromInfos(_0x31e6e3, _0x5d86f5) || this._throwUnresolved(_0x31e6e3, _0x5d86f5);
        };
        _0x17c816._resolveFromInfos = function (_0xa56b3b, _0x4fecde) {
          var _0x3a7812;
          var _0x28abb0;
          return _0xa56b3b in cjsInfos ? _0xa56b3b : _0x4fecde && null != (_0x3a7812 = null == (_0x28abb0 = cjsInfos[_0x4fecde]) ? undefined : _0x28abb0.resolveCache[_0xa56b3b]) ? _0x3a7812 : undefined;
        };
        _0x17c816._tryModuleLoad = function (_0x38a44a, _0x126b14) {
          var _0x2e05f1 = true;
          try {
            this._load(_0x38a44a, _0x126b14);
            _0x2e05f1 = false;
          } finally {
            if (_0x2e05f1) {
              delete this._moduleCache[_0x126b14];
            }
          }
        };
        _0x17c816._load = function (_0x13b66f, _0x58de3a) {
          var _0x525661 = this._loadWrapper(_0x58de3a);
          var _0xa0dbd6 = _0x525661.factory;
          var _0x56865b = _0x525661.resolveMap;
          var _0x3b3a5c = this._createRequire(_0x13b66f);
          var _0x37801b = _0x56865b ? this._createRequireWithResolveMap('function' == typeof _0x56865b ? _0x56865b() : _0x56865b, _0x3b3a5c) : _0x3b3a5c;
          _0xa0dbd6(_0x13b66f.exports, _0x37801b, _0x13b66f);
        };
        _0x17c816._loadWrapper = function (_0x431afc) {
          return _0x431afc in this._registry ? this._registry[_0x431afc] : this._loadHostProvidedModules(_0x431afc);
        };
        _0x17c816._loadHostProvidedModules = function (_0x5521b9) {
          return {
            'factory': function (_0x141bb7, _0x4418f8, _0x599227) {
              if ("undefined" == typeof require) {
                throw new Error("Current environment does not provide a require() for requiring '" + _0x5521b9 + "'.");
              }
              try {
                _0x599227.exports = require(_0x5521b9);
              } catch (_0x23f613) {
                throw new Error("Exception thrown when calling host defined require('" + _0x5521b9 + "').", {
                  'cause': _0x23f613
                });
              }
            }
          };
        };
        _0x17c816._createRequire = function (_0x45064b) {
          var _0x52cf9d = this;
          return function (_0x4a8bc9) {
            return _0x52cf9d._require(_0x4a8bc9, _0x45064b);
          };
        };
        _0x17c816._createRequireWithResolveMap = function (_0xef3e9d, _0x26b011) {
          return function (_0x16ab8a) {
            var _0x112de3 = _0xef3e9d[_0x16ab8a];
            if (_0x112de3) {
              return _0x26b011(_0x112de3);
            }
            throw new Error("Unresolved specifier " + _0x16ab8a);
          };
        };
        _0x17c816._throwUnresolved = function (_0x75f0a9, _0x2ec52c) {
          throw new Error("Unable to resolve " + _0x75f0a9 + " from " + parent + '.');
        };
        return _0x432d7f;
      }();
      var _0x557447 = new _0xd69b4f();
      var _0x600c36;
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/long/src/long.js", function (_0x348bcd, _0x17d9c5, _0x510bde, _0x3ffa05, _0x488030) {
        _0x510bde.exports = _0x4d0d35;
        var _0xb34662 = null;
        try {
          _0xb34662 = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0x0, 0x61, 0x73, 0x6d, 0x1, 0x0, 0x0, 0x0, 0x1, 0xd, 0x2, 0x60, 0x0, 0x1, 0x7f, 0x60, 0x4, 0x7f, 0x7f, 0x7f, 0x7f, 0x1, 0x7f, 0x3, 0x7, 0x6, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x6, 0x6, 0x1, 0x7f, 0x1, 0x41, 0x0, 0xb, 0x7, 0x32, 0x6, 0x3, 0x6d, 0x75, 0x6c, 0x0, 0x1, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x73, 0x0, 0x2, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x75, 0x0, 0x3, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x73, 0x0, 0x4, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x75, 0x0, 0x5, 0x8, 0x67, 0x65, 0x74, 0x5f, 0x68, 0x69, 0x67, 0x68, 0x0, 0x0, 0xa, 0xbf, 0x1, 0x6, 0x4, 0x0, 0x23, 0x0, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7e, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7f, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x80, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x81, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x82, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb])), {}).exports;
        } catch (_0x133013) {}
        function _0x4d0d35(_0xa7a62, _0x419878, _0x4a7ecf) {
          this.low = 0x0 | _0xa7a62;
          this.high = 0x0 | _0x419878;
          this.unsigned = !!_0x4a7ecf;
        }
        function _0xdde16c(_0x5d5e3d) {
          return true === (_0x5d5e3d && _0x5d5e3d.__isLong__);
        }
        _0x4d0d35.prototype.__isLong__;
        Object.defineProperty(_0x4d0d35.prototype, "__isLong__", {
          'value': true
        });
        _0x4d0d35.isLong = _0xdde16c;
        var _0x3d14dd = {};
        var _0xe1a308 = {};
        function _0x33cc68(_0x4fa7d1, _0x11e205) {
          var _0x2944f4;
          var _0x2e7452;
          var _0x2a9094;
          return _0x11e205 ? (_0x2a9094 = 0x0 <= (_0x4fa7d1 >>>= 0x0) && _0x4fa7d1 < 0x100) && (_0x2e7452 = _0xe1a308[_0x4fa7d1]) ? _0x2e7452 : (_0x2944f4 = new _0x4d0d35(_0x4fa7d1, (0x0 | _0x4fa7d1) < 0x0 ? -0x1 : 0x0, true), _0x2a9094 && (_0xe1a308[_0x4fa7d1] = _0x2944f4), _0x2944f4) : (_0x2a9094 = -0x80 <= (_0x4fa7d1 |= 0x0) && _0x4fa7d1 < 0x80) && (_0x2e7452 = _0x3d14dd[_0x4fa7d1]) ? _0x2e7452 : (_0x2944f4 = new _0x4d0d35(_0x4fa7d1, _0x4fa7d1 < 0x0 ? -0x1 : 0x0, false), _0x2a9094 && (_0x3d14dd[_0x4fa7d1] = _0x2944f4), _0x2944f4);
        }
        function _0x342715(_0xdb14ae, _0x2e9076) {
          if (isNaN(_0xdb14ae)) {
            return _0x2e9076 ? _0xca43ad : _0x49481e;
          }
          if (_0x2e9076) {
            if (_0xdb14ae < 0x0) {
              return _0xca43ad;
            }
            if (_0xdb14ae >= 18446744073709552000) {
              return _0x358cdb;
            }
          } else {
            if (_0xdb14ae <= -9223372036854776000) {
              return _0x3d897c;
            }
            if (_0xdb14ae + 0x1 >= 9223372036854776000) {
              return _0x3fb5d0;
            }
          }
          return _0xdb14ae < 0x0 ? _0x342715(-_0xdb14ae, _0x2e9076).neg() : new _0x4d0d35(_0xdb14ae % 0x100000000 | 0x0, _0xdb14ae / 0x100000000 | 0x0, _0x2e9076);
        }
        function _0x750eae(_0x2fd77b, _0x15c562, _0x477359) {
          return new _0x4d0d35(_0x2fd77b, _0x15c562, _0x477359);
        }
        _0x4d0d35.fromInt = _0x33cc68;
        _0x4d0d35.fromNumber = _0x342715;
        _0x4d0d35.fromBits = _0x750eae;
        var _0x1f2d5f = Math.pow;
        function _0x21d59f(_0x535575, _0x140bdd, _0x7f38f) {
          if (0x0 === _0x535575.length) {
            throw Error("empty string");
          }
          if ('NaN' === _0x535575 || "Infinity" === _0x535575 || "+Infinity" === _0x535575 || "-Infinity" === _0x535575) {
            return _0x49481e;
          }
          if ("number" == typeof _0x140bdd) {
            _0x7f38f = _0x140bdd;
            _0x140bdd = false;
          } else {
            _0x140bdd = !!_0x140bdd;
          }
          if ((_0x7f38f = _0x7f38f || 0xa) < 0x2 || 0x24 < _0x7f38f) {
            throw RangeError("radix");
          }
          var _0x439874;
          if ((_0x439874 = _0x535575.indexOf('-')) > 0x0) {
            throw Error("interior hyphen");
          }
          if (0x0 === _0x439874) {
            return _0x21d59f(_0x535575.substring(0x1), _0x140bdd, _0x7f38f).neg();
          }
          var _0x1cd59c = _0x342715(_0x1f2d5f(_0x7f38f, 0x8));
          var _0xc95eba = _0x49481e;
          for (var _0x1ad42a = 0x0; _0x1ad42a < _0x535575.length; _0x1ad42a += 0x8) {
            var _0x288851 = Math.min(0x8, _0x535575.length - _0x1ad42a);
            var _0x1442ae = parseInt(_0x535575.substring(_0x1ad42a, _0x1ad42a + _0x288851), _0x7f38f);
            if (_0x288851 < 0x8) {
              var _0x4c64dc = _0x342715(_0x1f2d5f(_0x7f38f, _0x288851));
              _0xc95eba = _0xc95eba.mul(_0x4c64dc).add(_0x342715(_0x1442ae));
            } else {
              _0xc95eba = (_0xc95eba = _0xc95eba.mul(_0x1cd59c)).add(_0x342715(_0x1442ae));
            }
          }
          _0xc95eba.unsigned = _0x140bdd;
          return _0xc95eba;
        }
        function _0x34573b(_0x2b096a, _0x4c2262) {
          return "number" == typeof _0x2b096a ? _0x342715(_0x2b096a, _0x4c2262) : 'string' == typeof _0x2b096a ? _0x21d59f(_0x2b096a, _0x4c2262) : new _0x4d0d35(_0x2b096a.low, _0x2b096a.high, "boolean" == typeof _0x4c2262 ? _0x4c2262 : _0x2b096a.unsigned);
        }
        _0x4d0d35.fromString = _0x21d59f;
        _0x4d0d35.fromValue = _0x34573b;
        var _0x4b1088 = _0x33cc68(16777216);
        var _0x49481e = _0x33cc68(0x0);
        _0x4d0d35.ZERO = _0x49481e;
        var _0xca43ad = _0x33cc68(0x0, true);
        _0x4d0d35.UZERO = _0xca43ad;
        var _0x42b698 = _0x33cc68(0x1);
        _0x4d0d35.ONE = _0x42b698;
        var _0x56e6c6 = _0x33cc68(0x1, true);
        _0x4d0d35.UONE = _0x56e6c6;
        var _0x565c95 = _0x33cc68(-0x1);
        _0x4d0d35.NEG_ONE = _0x565c95;
        var _0x3fb5d0 = new _0x4d0d35(-0x1, 0x7fffffff, false);
        _0x4d0d35.MAX_VALUE = _0x3fb5d0;
        var _0x358cdb = new _0x4d0d35(-0x1, -0x1, true);
        _0x4d0d35.MAX_UNSIGNED_VALUE = _0x358cdb;
        var _0x3d897c = new _0x4d0d35(0x0, -0x80000000, false);
        _0x4d0d35.MIN_VALUE = _0x3d897c;
        var _0x5ba976 = _0x4d0d35.prototype;
        _0x5ba976.toInt = function () {
          return this.unsigned ? this.low >>> 0x0 : this.low;
        };
        _0x5ba976.toNumber = function () {
          return this.unsigned ? (this.high >>> 0x0) * 0x100000000 + (this.low >>> 0x0) : this.high * 0x100000000 + (this.low >>> 0x0);
        };
        _0x5ba976.toString = function (_0x2dad77) {
          if ((_0x2dad77 = _0x2dad77 || 0xa) < 0x2 || 0x24 < _0x2dad77) {
            throw RangeError('radix');
          }
          if (this.isZero()) {
            return '0';
          }
          if (this.isNegative()) {
            if (this.eq(_0x3d897c)) {
              var _0x52be66 = _0x342715(_0x2dad77);
              var _0x154a8 = this.div(_0x52be66);
              var _0x449a68 = _0x154a8.mul(_0x52be66).sub(this);
              return _0x154a8.toString(_0x2dad77) + _0x449a68.toInt().toString(_0x2dad77);
            }
            return '-' + this.neg().toString(_0x2dad77);
          }
          var _0x321987 = _0x342715(_0x1f2d5f(_0x2dad77, 0x6), this.unsigned);
          var _0x176022 = this;
          for (var _0x1610df = '';;) {
            var _0x3c9c15 = _0x176022.div(_0x321987);
            var _0x1025e6 = (_0x176022.sub(_0x3c9c15.mul(_0x321987)).toInt() >>> 0x0).toString(_0x2dad77);
            if ((_0x176022 = _0x3c9c15).isZero()) {
              return _0x1025e6 + _0x1610df;
            }
            for (; _0x1025e6.length < 0x6;) {
              _0x1025e6 = '0' + _0x1025e6;
            }
            _0x1610df = '' + _0x1025e6 + _0x1610df;
          }
        };
        _0x5ba976.getHighBits = function () {
          return this.high;
        };
        _0x5ba976.getHighBitsUnsigned = function () {
          return this.high >>> 0x0;
        };
        _0x5ba976.getLowBits = function () {
          return this.low;
        };
        _0x5ba976.getLowBitsUnsigned = function () {
          return this.low >>> 0x0;
        };
        _0x5ba976.getNumBitsAbs = function () {
          if (this.isNegative()) {
            return this.eq(_0x3d897c) ? 0x40 : this.neg().getNumBitsAbs();
          }
          var _0x1c2bf7 = 0x0 != this.high ? this.high : this.low;
          for (var _0x4f84e7 = 0x1f; _0x4f84e7 > 0x0 && 0x0 == (_0x1c2bf7 & 0x1 << _0x4f84e7); _0x4f84e7--) {
            ;
          }
          return 0x0 != this.high ? _0x4f84e7 + 0x21 : _0x4f84e7 + 0x1;
        };
        _0x5ba976.isZero = function () {
          return 0x0 === this.high && 0x0 === this.low;
        };
        _0x5ba976.eqz = _0x5ba976.isZero;
        _0x5ba976.isNegative = function () {
          return !this.unsigned && this.high < 0x0;
        };
        _0x5ba976.isPositive = function () {
          return this.unsigned || this.high >= 0x0;
        };
        _0x5ba976.isOdd = function () {
          return 0x1 == (0x1 & this.low);
        };
        _0x5ba976.isEven = function () {
          return 0x0 == (0x1 & this.low);
        };
        _0x5ba976.equals = function (_0x5e50d9) {
          if (!(true === (_0x5e50d9 && _0x5e50d9.__isLong__))) {
            _0x5e50d9 = "number" == typeof _0x5e50d9 ? _0x342715(_0x5e50d9, undefined) : 'string' == typeof _0x5e50d9 ? _0x21d59f(_0x5e50d9, undefined) : new _0x4d0d35(_0x5e50d9.low, _0x5e50d9.high, _0x5e50d9.unsigned);
          }
          return (this.unsigned === _0x5e50d9.unsigned || this.high >>> 0x1f != 0x1 || _0x5e50d9.high >>> 0x1f != 0x1) && this.high === _0x5e50d9.high && this.low === _0x5e50d9.low;
        };
        _0x5ba976.eq = _0x5ba976.equals;
        _0x5ba976.notEquals = function (_0x45c9ec) {
          return !this.eq(_0x45c9ec);
        };
        _0x5ba976.neq = _0x5ba976.notEquals;
        _0x5ba976.ne = _0x5ba976.notEquals;
        _0x5ba976.lessThan = function (_0x305ba1) {
          return this.comp(_0x305ba1) < 0x0;
        };
        _0x5ba976.lt = _0x5ba976.lessThan;
        _0x5ba976.lessThanOrEqual = function (_0x329907) {
          return this.comp(_0x329907) <= 0x0;
        };
        _0x5ba976.lte = _0x5ba976.lessThanOrEqual;
        _0x5ba976.le = _0x5ba976.lessThanOrEqual;
        _0x5ba976.greaterThan = function (_0x31187f) {
          return this.comp(_0x31187f) > 0x0;
        };
        _0x5ba976.gt = _0x5ba976.greaterThan;
        _0x5ba976.greaterThanOrEqual = function (_0x1bd895) {
          return this.comp(_0x1bd895) >= 0x0;
        };
        _0x5ba976.gte = _0x5ba976.greaterThanOrEqual;
        _0x5ba976.ge = _0x5ba976.greaterThanOrEqual;
        _0x5ba976.compare = function (_0x924928) {
          if (!(true === (_0x924928 && _0x924928.__isLong__))) {
            _0x924928 = "number" == typeof _0x924928 ? _0x342715(_0x924928, undefined) : 'string' == typeof _0x924928 ? _0x21d59f(_0x924928, undefined) : new _0x4d0d35(_0x924928.low, _0x924928.high, _0x924928.unsigned);
          }
          if (this.eq(_0x924928)) {
            return 0x0;
          }
          var _0x4a672a = this.isNegative();
          var _0x4f0b6 = _0x924928.isNegative();
          return _0x4a672a && !_0x4f0b6 ? -0x1 : !_0x4a672a && _0x4f0b6 ? 0x1 : this.unsigned ? _0x924928.high >>> 0x0 > this.high >>> 0x0 || _0x924928.high === this.high && _0x924928.low >>> 0x0 > this.low >>> 0x0 ? -0x1 : 0x1 : this.sub(_0x924928).isNegative() ? -0x1 : 0x1;
        };
        _0x5ba976.comp = _0x5ba976.compare;
        _0x5ba976.negate = function () {
          return !this.unsigned && this.eq(_0x3d897c) ? _0x3d897c : this.not().add(_0x42b698);
        };
        _0x5ba976.neg = _0x5ba976.negate;
        _0x5ba976.add = function (_0x48f5b5) {
          if (!(true === (_0x48f5b5 && _0x48f5b5.__isLong__))) {
            _0x48f5b5 = "number" == typeof _0x48f5b5 ? _0x342715(_0x48f5b5, undefined) : 'string' == typeof _0x48f5b5 ? _0x21d59f(_0x48f5b5, undefined) : new _0x4d0d35(_0x48f5b5.low, _0x48f5b5.high, _0x48f5b5.unsigned);
          }
          var _0x2a5fa8 = this.high >>> 0x10;
          var _0x48589a = 0xffff & this.high;
          var _0x44eb74 = this.low >>> 0x10;
          var _0x5c55b8 = 0xffff & this.low;
          var _0xa531b0 = _0x48f5b5.high >>> 0x10;
          var _0x3bb41d = 0xffff & _0x48f5b5.high;
          var _0x3f995d = _0x48f5b5.low >>> 0x10;
          var _0x411d81 = 0x0;
          var _0x27031f = 0x0;
          var _0x274c69 = 0x0;
          var _0x3b7e18 = 0x0;
          _0x274c69 += (_0x3b7e18 += _0x5c55b8 + (0xffff & _0x48f5b5.low)) >>> 0x10;
          _0x27031f += (_0x274c69 += _0x44eb74 + _0x3f995d) >>> 0x10;
          _0x411d81 += (_0x27031f += _0x48589a + _0x3bb41d) >>> 0x10;
          _0x411d81 += _0x2a5fa8 + _0xa531b0;
          return new _0x4d0d35((_0x274c69 &= 0xffff) << 0x10 | (_0x3b7e18 &= 0xffff), (_0x411d81 &= 0xffff) << 0x10 | (_0x27031f &= 0xffff), this.unsigned);
        };
        _0x5ba976.subtract = function (_0xd75be4) {
          if (!(true === (_0xd75be4 && _0xd75be4.__isLong__))) {
            _0xd75be4 = "number" == typeof _0xd75be4 ? _0x342715(_0xd75be4, undefined) : 'string' == typeof _0xd75be4 ? _0x21d59f(_0xd75be4, undefined) : new _0x4d0d35(_0xd75be4.low, _0xd75be4.high, _0xd75be4.unsigned);
          }
          return this.add(_0xd75be4.neg());
        };
        _0x5ba976.sub = _0x5ba976.subtract;
        _0x5ba976.multiply = function (_0x367fe5) {
          if (this.isZero()) {
            return _0x49481e;
          }
          if (!(true === (_0x367fe5 && _0x367fe5.__isLong__))) {
            _0x367fe5 = "number" == typeof _0x367fe5 ? _0x342715(_0x367fe5, undefined) : 'string' == typeof _0x367fe5 ? _0x21d59f(_0x367fe5, undefined) : new _0x4d0d35(_0x367fe5.low, _0x367fe5.high, _0x367fe5.unsigned);
          }
          if (_0xb34662) {
            return new _0x4d0d35(_0xb34662.mul(this.low, this.high, _0x367fe5.low, _0x367fe5.high), _0xb34662.get_high(), this.unsigned);
          }
          if (_0x367fe5.isZero()) {
            return _0x49481e;
          }
          if (this.eq(_0x3d897c)) {
            return _0x367fe5.isOdd() ? _0x3d897c : _0x49481e;
          }
          if (_0x367fe5.eq(_0x3d897c)) {
            return this.isOdd() ? _0x3d897c : _0x49481e;
          }
          if (this.isNegative()) {
            return _0x367fe5.isNegative() ? this.neg().mul(_0x367fe5.neg()) : this.neg().mul(_0x367fe5).neg();
          }
          if (_0x367fe5.isNegative()) {
            return this.mul(_0x367fe5.neg()).neg();
          }
          if (this.lt(_0x4b1088) && _0x367fe5.lt(_0x4b1088)) {
            return _0x342715(this.toNumber() * _0x367fe5.toNumber(), this.unsigned);
          }
          var _0x3268c9 = this.high >>> 0x10;
          var _0x3ce0cf = 0xffff & this.high;
          var _0x7e1f43 = this.low >>> 0x10;
          var _0x3b61ce = 0xffff & this.low;
          var _0x496bb6 = _0x367fe5.high >>> 0x10;
          var _0x5db123 = 0xffff & _0x367fe5.high;
          var _0x19e61e = _0x367fe5.low >>> 0x10;
          var _0x43a432 = 0xffff & _0x367fe5.low;
          var _0x1df6a5 = 0x0;
          var _0x4d4bec = 0x0;
          var _0x24853e = 0x0;
          var _0x13477 = 0x0;
          _0x24853e += (_0x13477 += _0x3b61ce * _0x43a432) >>> 0x10;
          _0x4d4bec += (_0x24853e += _0x7e1f43 * _0x43a432) >>> 0x10;
          _0x24853e &= 0xffff;
          _0x4d4bec += (_0x24853e += _0x3b61ce * _0x19e61e) >>> 0x10;
          _0x1df6a5 += (_0x4d4bec += _0x3ce0cf * _0x43a432) >>> 0x10;
          _0x4d4bec &= 0xffff;
          _0x1df6a5 += (_0x4d4bec += _0x7e1f43 * _0x19e61e) >>> 0x10;
          _0x4d4bec &= 0xffff;
          _0x1df6a5 += (_0x4d4bec += _0x3b61ce * _0x5db123) >>> 0x10;
          _0x1df6a5 += _0x3268c9 * _0x43a432 + _0x3ce0cf * _0x19e61e + _0x7e1f43 * _0x5db123 + _0x3b61ce * _0x496bb6;
          return new _0x4d0d35((_0x24853e &= 0xffff) << 0x10 | (_0x13477 &= 0xffff), (_0x1df6a5 &= 0xffff) << 0x10 | (_0x4d4bec &= 0xffff), this.unsigned);
        };
        _0x5ba976.mul = _0x5ba976.multiply;
        _0x5ba976.divide = function (_0x31896d) {
          if (!(true === (_0x31896d && _0x31896d.__isLong__))) {
            _0x31896d = "number" == typeof _0x31896d ? _0x342715(_0x31896d, undefined) : 'string' == typeof _0x31896d ? _0x21d59f(_0x31896d, undefined) : new _0x4d0d35(_0x31896d.low, _0x31896d.high, _0x31896d.unsigned);
          }
          if (_0x31896d.isZero()) {
            throw Error("division by zero");
          }
          var _0x459cca;
          var _0x413322;
          var _0x33edea;
          if (_0xb34662) {
            return this.unsigned || -0x80000000 !== this.high || -0x1 !== _0x31896d.low || -0x1 !== _0x31896d.high ? new _0x4d0d35((this.unsigned ? _0xb34662.div_u : _0xb34662.div_s)(this.low, this.high, _0x31896d.low, _0x31896d.high), _0xb34662.get_high(), this.unsigned) : this;
          }
          if (this.isZero()) {
            return this.unsigned ? _0xca43ad : _0x49481e;
          }
          if (this.unsigned) {
            if (!_0x31896d.unsigned) {
              _0x31896d = _0x31896d.toUnsigned();
            }
            if (_0x31896d.gt(this)) {
              return _0xca43ad;
            }
            if (_0x31896d.gt(this.shru(0x1))) {
              return _0x56e6c6;
            }
            _0x33edea = _0xca43ad;
          } else {
            if (this.eq(_0x3d897c)) {
              return _0x31896d.eq(_0x42b698) || _0x31896d.eq(_0x565c95) ? _0x3d897c : _0x31896d.eq(_0x3d897c) ? _0x42b698 : (_0x459cca = this.shr(0x1).div(_0x31896d).shl(0x1)).eq(_0x49481e) ? _0x31896d.isNegative() ? _0x42b698 : _0x565c95 : (_0x413322 = this.sub(_0x31896d.mul(_0x459cca)), _0x33edea = _0x459cca.add(_0x413322.div(_0x31896d)));
            }
            if (_0x31896d.eq(_0x3d897c)) {
              return this.unsigned ? _0xca43ad : _0x49481e;
            }
            if (this.isNegative()) {
              return _0x31896d.isNegative() ? this.neg().div(_0x31896d.neg()) : this.neg().div(_0x31896d).neg();
            }
            if (_0x31896d.isNegative()) {
              return this.div(_0x31896d.neg()).neg();
            }
            _0x33edea = _0x49481e;
          }
          for (_0x413322 = this; _0x413322.gte(_0x31896d);) {
            _0x459cca = Math.max(0x1, Math.floor(_0x413322.toNumber() / _0x31896d.toNumber()));
            var _0x5ee10f = Math.ceil(Math.log(_0x459cca) / Math.LN2);
            var _0x38dbb6 = _0x5ee10f <= 0x30 ? 0x1 : _0x1f2d5f(0x2, _0x5ee10f - 0x30);
            var _0x321646 = _0x342715(_0x459cca);
            for (var _0x183cea = _0x321646.mul(_0x31896d); _0x183cea.isNegative() || _0x183cea.gt(_0x413322);) {
              _0x183cea = (_0x321646 = _0x342715(_0x459cca -= _0x38dbb6, this.unsigned)).mul(_0x31896d);
            }
            if (_0x321646.isZero()) {
              _0x321646 = _0x42b698;
            }
            _0x33edea = _0x33edea.add(_0x321646);
            _0x413322 = _0x413322.sub(_0x183cea);
          }
          return _0x33edea;
        };
        _0x5ba976.div = _0x5ba976.divide;
        _0x5ba976.modulo = function (_0x5210be) {
          if (!(true === (_0x5210be && _0x5210be.__isLong__))) {
            _0x5210be = "number" == typeof _0x5210be ? _0x342715(_0x5210be, undefined) : 'string' == typeof _0x5210be ? _0x21d59f(_0x5210be, undefined) : new _0x4d0d35(_0x5210be.low, _0x5210be.high, _0x5210be.unsigned);
          }
          return _0xb34662 ? new _0x4d0d35((this.unsigned ? _0xb34662.rem_u : _0xb34662.rem_s)(this.low, this.high, _0x5210be.low, _0x5210be.high), _0xb34662.get_high(), this.unsigned) : this.sub(this.div(_0x5210be).mul(_0x5210be));
        };
        _0x5ba976.mod = _0x5ba976.modulo;
        _0x5ba976.rem = _0x5ba976.modulo;
        _0x5ba976.not = function () {
          return new _0x4d0d35(~this.low, ~this.high, this.unsigned);
        };
        _0x5ba976.and = function (_0xc6da0b) {
          if (!(true === (_0xc6da0b && _0xc6da0b.__isLong__))) {
            _0xc6da0b = "number" == typeof _0xc6da0b ? _0x342715(_0xc6da0b, undefined) : 'string' == typeof _0xc6da0b ? _0x21d59f(_0xc6da0b, undefined) : new _0x4d0d35(_0xc6da0b.low, _0xc6da0b.high, _0xc6da0b.unsigned);
          }
          return new _0x4d0d35(this.low & _0xc6da0b.low, this.high & _0xc6da0b.high, this.unsigned);
        };
        _0x5ba976.or = function (_0x211a43) {
          if (!(true === (_0x211a43 && _0x211a43.__isLong__))) {
            _0x211a43 = "number" == typeof _0x211a43 ? _0x342715(_0x211a43, undefined) : 'string' == typeof _0x211a43 ? _0x21d59f(_0x211a43, undefined) : new _0x4d0d35(_0x211a43.low, _0x211a43.high, _0x211a43.unsigned);
          }
          return new _0x4d0d35(this.low | _0x211a43.low, this.high | _0x211a43.high, this.unsigned);
        };
        _0x5ba976.xor = function (_0x94b35d) {
          if (!(true === (_0x94b35d && _0x94b35d.__isLong__))) {
            _0x94b35d = "number" == typeof _0x94b35d ? _0x342715(_0x94b35d, undefined) : 'string' == typeof _0x94b35d ? _0x21d59f(_0x94b35d, undefined) : new _0x4d0d35(_0x94b35d.low, _0x94b35d.high, _0x94b35d.unsigned);
          }
          return new _0x4d0d35(this.low ^ _0x94b35d.low, this.high ^ _0x94b35d.high, this.unsigned);
        };
        _0x5ba976.shiftLeft = function (_0x1245d5) {
          if (true === (_0x1245d5 && _0x1245d5.__isLong__)) {
            _0x1245d5 = _0x1245d5.toInt();
          }
          return 0x0 == (_0x1245d5 &= 0x3f) ? this : _0x1245d5 < 0x20 ? new _0x4d0d35(this.low << _0x1245d5, this.high << _0x1245d5 | this.low >>> 0x20 - _0x1245d5, this.unsigned) : new _0x4d0d35(0x0, this.low << _0x1245d5 - 0x20, this.unsigned);
        };
        _0x5ba976.shl = _0x5ba976.shiftLeft;
        _0x5ba976.shiftRight = function (_0x49fd72) {
          if (true === (_0x49fd72 && _0x49fd72.__isLong__)) {
            _0x49fd72 = _0x49fd72.toInt();
          }
          return 0x0 == (_0x49fd72 &= 0x3f) ? this : _0x49fd72 < 0x20 ? new _0x4d0d35(this.low >>> _0x49fd72 | this.high << 0x20 - _0x49fd72, this.high >> _0x49fd72, this.unsigned) : new _0x4d0d35(this.high >> _0x49fd72 - 0x20, this.high >= 0x0 ? 0x0 : -0x1, this.unsigned);
        };
        _0x5ba976.shr = _0x5ba976.shiftRight;
        _0x5ba976.shiftRightUnsigned = function (_0x79881a) {
          if (true === (_0x79881a && _0x79881a.__isLong__)) {
            _0x79881a = _0x79881a.toInt();
          }
          if (0x0 === (_0x79881a &= 0x3f)) {
            return this;
          }
          var _0x401194 = this.high;
          return _0x79881a < 0x20 ? new _0x4d0d35(this.low >>> _0x79881a | _0x401194 << 0x20 - _0x79881a, _0x401194 >>> _0x79881a, this.unsigned) : new _0x4d0d35(0x20 === _0x79881a ? _0x401194 : _0x401194 >>> _0x79881a - 0x20, 0x0, this.unsigned);
        };
        _0x5ba976.shru = _0x5ba976.shiftRightUnsigned;
        _0x5ba976.shr_u = _0x5ba976.shiftRightUnsigned;
        _0x5ba976.toSigned = function () {
          return this.unsigned ? new _0x4d0d35(this.low, this.high, false) : this;
        };
        _0x5ba976.toUnsigned = function () {
          return this.unsigned ? this : new _0x4d0d35(this.low, this.high, true);
        };
        _0x5ba976.toBytes = function (_0x270d25) {
          return _0x270d25 ? this.toBytesLE() : this.toBytesBE();
        };
        _0x5ba976.toBytesLE = function () {
          var _0x2773e3 = this.high;
          var _0x1e566b = this.low;
          return [0xff & _0x1e566b, _0x1e566b >>> 0x8 & 0xff, _0x1e566b >>> 0x10 & 0xff, _0x1e566b >>> 0x18, 0xff & _0x2773e3, _0x2773e3 >>> 0x8 & 0xff, _0x2773e3 >>> 0x10 & 0xff, _0x2773e3 >>> 0x18];
        };
        _0x5ba976.toBytesBE = function () {
          var _0x1a9f4d = this.high;
          var _0x27d1a7 = this.low;
          return [_0x1a9f4d >>> 0x18, _0x1a9f4d >>> 0x10 & 0xff, _0x1a9f4d >>> 0x8 & 0xff, 0xff & _0x1a9f4d, _0x27d1a7 >>> 0x18, _0x27d1a7 >>> 0x10 & 0xff, _0x27d1a7 >>> 0x8 & 0xff, 0xff & _0x27d1a7];
        };
        _0x4d0d35.fromBytes = function (_0xf517f7, _0x57f873, _0x1d90cb) {
          return _0x1d90cb ? _0x4d0d35.fromBytesLE(_0xf517f7, _0x57f873) : _0x4d0d35.fromBytesBE(_0xf517f7, _0x57f873);
        };
        _0x4d0d35.fromBytesLE = function (_0x38a917, _0x40ac63) {
          return new _0x4d0d35(_0x38a917[0x0] | _0x38a917[0x1] << 0x8 | _0x38a917[0x2] << 0x10 | _0x38a917[0x3] << 0x18, _0x38a917[0x4] | _0x38a917[0x5] << 0x8 | _0x38a917[0x6] << 0x10 | _0x38a917[0x7] << 0x18, _0x40ac63);
        };
        _0x4d0d35.fromBytesBE = function (_0x159453, _0x3c8b70) {
          return new _0x4d0d35(_0x159453[0x4] << 0x18 | _0x159453[0x5] << 0x10 | _0x159453[0x6] << 0x8 | _0x159453[0x7], _0x159453[0x0] << 0x18 | _0x159453[0x1] << 0x10 | _0x159453[0x2] << 0x8 | _0x159453[0x3], _0x3c8b70);
        };
        _0x600c36 = _0x510bde.exports;
      }, {});
      _0x557447.require("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/long/src/long.js");
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js", function (_0x14ca10, _0x6e7601, _0x2059b7, _0x3adc68, _0x4f5928) {
        _0x2059b7.exports = function (_0x1a34e2, _0x38eb8f) {
          var _0x52bbd1 = new Array(arguments.length - 0x1);
          var _0x55f46f = 0x0;
          var _0x35d93c = 0x2;
          var _0x19fdc5 = true;
          for (; _0x35d93c < arguments.length;) {
            _0x52bbd1[_0x55f46f++] = arguments[_0x35d93c++];
          }
          return new Promise(function (_0x412783, _0x1b1d68) {
            _0x52bbd1[_0x55f46f] = function (_0x1ca045) {
              if (_0x19fdc5) {
                _0x19fdc5 = false;
                if (_0x1ca045) {
                  _0x1b1d68(_0x1ca045);
                } else {
                  var _0x3dab0f = new Array(arguments.length - 0x1);
                  for (var _0x4ccaa6 = 0x0; _0x4ccaa6 < _0x3dab0f.length;) {
                    _0x3dab0f[_0x4ccaa6++] = arguments[_0x4ccaa6];
                  }
                  _0x412783.apply(null, _0x3dab0f);
                }
              }
            };
            try {
              _0x1a34e2.apply(_0x38eb8f || null, _0x52bbd1);
            } catch (_0x451ea8) {
              if (_0x19fdc5) {
                _0x19fdc5 = false;
                _0x1b1d68(_0x451ea8);
              }
            }
          });
        };
        _0x2059b7.exports;
      }, {});
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js", function (_0x4c9cce, _0xc92d83, _0x34f2bc, _0x582e6e, _0xd8aeee) {
        _0x4c9cce.length = function (_0x118b61) {
          var _0x49b7de = _0x118b61.length;
          if (!_0x49b7de) {
            return 0x0;
          }
          for (var _0x2ff80e = 0x0; --_0x49b7de % 0x4 > 0x1 && '=' === _0x118b61.charAt(_0x49b7de);) {
            ++_0x2ff80e;
          }
          return Math.ceil(0x3 * _0x118b61.length) / 0x4 - _0x2ff80e;
        };
        var _0x24c96d = new Array(0x40);
        var _0x413f15 = new Array(0x7b);
        for (var _0x5e682e = 0x0; _0x5e682e < 0x40;) {
          _0x413f15[_0x24c96d[_0x5e682e] = _0x5e682e < 0x1a ? _0x5e682e + 0x41 : _0x5e682e < 0x34 ? _0x5e682e + 0x47 : _0x5e682e < 0x3e ? _0x5e682e - 0x4 : _0x5e682e - 0x3b | 0x2b] = _0x5e682e++;
        }
        _0x4c9cce.encode = function (_0x1d3ecd, _0x1a6714, _0x2b0fbd) {
          var _0x365d25;
          var _0x2b9628 = null;
          var _0x34f892 = [];
          var _0x170c38 = 0x0;
          for (var _0x27c1a2 = 0x0; _0x1a6714 < _0x2b0fbd;) {
            var _0x305dd5 = _0x1d3ecd[_0x1a6714++];
            switch (_0x27c1a2) {
              case 0x0:
                _0x34f892[_0x170c38++] = _0x24c96d[_0x305dd5 >> 0x2];
                _0x365d25 = (0x3 & _0x305dd5) << 0x4;
                _0x27c1a2 = 0x1;
                break;
              case 0x1:
                _0x34f892[_0x170c38++] = _0x24c96d[_0x365d25 | _0x305dd5 >> 0x4];
                _0x365d25 = (0xf & _0x305dd5) << 0x2;
                _0x27c1a2 = 0x2;
                break;
              case 0x2:
                _0x34f892[_0x170c38++] = _0x24c96d[_0x365d25 | _0x305dd5 >> 0x6];
                _0x34f892[_0x170c38++] = _0x24c96d[0x3f & _0x305dd5];
                _0x27c1a2 = 0x0;
            }
            if (_0x170c38 > 0x1fff) {
              (_0x2b9628 || (_0x2b9628 = [])).push(String.fromCharCode.apply(String, _0x34f892));
              _0x170c38 = 0x0;
            }
          }
          if (_0x27c1a2) {
            _0x34f892[_0x170c38++] = _0x24c96d[_0x365d25];
            _0x34f892[_0x170c38++] = 0x3d;
            if (0x1 === _0x27c1a2) {
              _0x34f892[_0x170c38++] = 0x3d;
            }
          }
          return _0x2b9628 ? (_0x170c38 && _0x2b9628.push(String.fromCharCode.apply(String, _0x34f892.slice(0x0, _0x170c38))), _0x2b9628.join('')) : String.fromCharCode.apply(String, _0x34f892.slice(0x0, _0x170c38));
        };
        _0x4c9cce.decode = function (_0x900675, _0x5ba844, _0x155e9f) {
          var _0x19bd22;
          var _0x35cd94 = _0x155e9f;
          var _0x2a5d25 = 0x0;
          for (var _0x31889a = 0x0; _0x31889a < _0x900675.length;) {
            var _0x53ed09 = _0x900675.charCodeAt(_0x31889a++);
            if (0x3d === _0x53ed09 && _0x2a5d25 > 0x1) {
              break;
            }
            if (undefined === (_0x53ed09 = _0x413f15[_0x53ed09])) {
              throw Error("invalid encoding");
            }
            switch (_0x2a5d25) {
              case 0x0:
                _0x19bd22 = _0x53ed09;
                _0x2a5d25 = 0x1;
                break;
              case 0x1:
                _0x5ba844[_0x155e9f++] = _0x19bd22 << 0x2 | (0x30 & _0x53ed09) >> 0x4;
                _0x19bd22 = _0x53ed09;
                _0x2a5d25 = 0x2;
                break;
              case 0x2:
                _0x5ba844[_0x155e9f++] = (0xf & _0x19bd22) << 0x4 | (0x3c & _0x53ed09) >> 0x2;
                _0x19bd22 = _0x53ed09;
                _0x2a5d25 = 0x3;
                break;
              case 0x3:
                _0x5ba844[_0x155e9f++] = (0x3 & _0x19bd22) << 0x6 | _0x53ed09;
                _0x2a5d25 = 0x0;
            }
          }
          if (0x1 === _0x2a5d25) {
            throw Error("invalid encoding");
          }
          return _0x155e9f - _0x35cd94;
        };
        _0x4c9cce.test = function (_0x3dfd9b) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(_0x3dfd9b);
        };
        _0x34f2bc.exports;
      }, {});
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js", function (_0x23b83d, _0xadd8e9, _0x2aa51a, _0x43cbb0, _0x4d6247) {
        function _0x586727() {
          this._listeners = {};
        }
        _0x2aa51a.exports = _0x586727;
        _0x586727.prototype.on = function (_0x1c7215, _0x9a460b, _0x8c1867) {
          (this._listeners[_0x1c7215] || (this._listeners[_0x1c7215] = [])).push({
            'fn': _0x9a460b,
            'ctx': _0x8c1867 || this
          });
          return this;
        };
        _0x586727.prototype.off = function (_0xe22dc7, _0x306cac) {
          if (undefined === _0xe22dc7) {
            this._listeners = {};
          } else {
            if (undefined === _0x306cac) {
              this._listeners[_0xe22dc7] = [];
            } else {
              var _0x4dfd81 = this._listeners[_0xe22dc7];
              for (var _0xb648be = 0x0; _0xb648be < _0x4dfd81.length;) {
                if (_0x4dfd81[_0xb648be].fn === _0x306cac) {
                  _0x4dfd81.splice(_0xb648be, 0x1);
                } else {
                  ++_0xb648be;
                }
              }
            }
          }
          return this;
        };
        _0x586727.prototype.emit = function (_0x488882) {
          var _0x3b1ed9 = this._listeners[_0x488882];
          if (_0x3b1ed9) {
            var _0x2133ff = [];
            for (var _0x9c81e7 = 0x1; _0x9c81e7 < arguments.length;) {
              _0x2133ff.push(arguments[_0x9c81e7++]);
            }
            for (_0x9c81e7 = 0x0; _0x9c81e7 < _0x3b1ed9.length;) {
              _0x3b1ed9[_0x9c81e7].fn.apply(_0x3b1ed9[_0x9c81e7++].ctx, _0x2133ff);
            }
          }
          return this;
        };
        _0x2aa51a.exports;
      }, {});
      _0x557447.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/@protobufjs/float/index.js', function (_0x2ae1a7, _0x334c8f, _0x1bb055, _0x26a85e, _0x4fe581) {
        function _0x5a6b67(_0x30b69d) {
          if ("undefined" != typeof Float32Array) {
            (function () {
              var _0x3f1e4c = new Float32Array([-0x0]);
              var _0x31a05f = new Uint8Array(_0x3f1e4c.buffer);
              var _0x534dd0 = 0x80 === _0x31a05f[0x3];
              function _0x81bf9e(_0x404e29, _0x928656, _0x5830a6) {
                _0x3f1e4c[0x0] = _0x404e29;
                _0x928656[_0x5830a6] = _0x31a05f[0x0];
                _0x928656[_0x5830a6 + 0x1] = _0x31a05f[0x1];
                _0x928656[_0x5830a6 + 0x2] = _0x31a05f[0x2];
                _0x928656[_0x5830a6 + 0x3] = _0x31a05f[0x3];
              }
              function _0x1e0512(_0x136b97, _0x195226, _0x45bb19) {
                _0x3f1e4c[0x0] = _0x136b97;
                _0x195226[_0x45bb19] = _0x31a05f[0x3];
                _0x195226[_0x45bb19 + 0x1] = _0x31a05f[0x2];
                _0x195226[_0x45bb19 + 0x2] = _0x31a05f[0x1];
                _0x195226[_0x45bb19 + 0x3] = _0x31a05f[0x0];
              }
              function _0x137a97(_0x35b72e, _0x131e5c) {
                _0x31a05f[0x0] = _0x35b72e[_0x131e5c];
                _0x31a05f[0x1] = _0x35b72e[_0x131e5c + 0x1];
                _0x31a05f[0x2] = _0x35b72e[_0x131e5c + 0x2];
                _0x31a05f[0x3] = _0x35b72e[_0x131e5c + 0x3];
                return _0x3f1e4c[0x0];
              }
              function _0x4cd2c5(_0x544be1, _0x38c719) {
                _0x31a05f[0x3] = _0x544be1[_0x38c719];
                _0x31a05f[0x2] = _0x544be1[_0x38c719 + 0x1];
                _0x31a05f[0x1] = _0x544be1[_0x38c719 + 0x2];
                _0x31a05f[0x0] = _0x544be1[_0x38c719 + 0x3];
                return _0x3f1e4c[0x0];
              }
              _0x30b69d.writeFloatLE = _0x534dd0 ? _0x81bf9e : _0x1e0512;
              _0x30b69d.writeFloatBE = _0x534dd0 ? _0x1e0512 : _0x81bf9e;
              _0x30b69d.readFloatLE = _0x534dd0 ? _0x137a97 : _0x4cd2c5;
              _0x30b69d.readFloatBE = _0x534dd0 ? _0x4cd2c5 : _0x137a97;
            })();
          } else {
            (function () {
              function _0x47091a(_0x1db3bc, _0x542004, _0x100546, _0x23bafc) {
                var _0x2cc1d6 = _0x542004 < 0x0 ? 0x1 : 0x0;
                if (_0x2cc1d6) {
                  _0x542004 = -_0x542004;
                }
                if (0x0 === _0x542004) {
                  _0x1db3bc(0x1 / _0x542004 > 0x0 ? 0x0 : 0x80000000, _0x100546, _0x23bafc);
                } else {
                  if (isNaN(_0x542004)) {
                    _0x1db3bc(0x7fc00000, _0x100546, _0x23bafc);
                  } else {
                    if (_0x542004 > 0xffffff00000000000000000000000000) {
                      _0x1db3bc((_0x2cc1d6 << 0x1f | 0x7f800000) >>> 0x0, _0x100546, _0x23bafc);
                    } else {
                      if (_0x542004 < 1.1754943508222875e-38) {
                        _0x1db3bc((_0x2cc1d6 << 0x1f | Math.round(_0x542004 / 1.401298464324817e-45)) >>> 0x0, _0x100546, _0x23bafc);
                      } else {
                        var _0xe6f1e = Math.floor(Math.log(_0x542004) / Math.LN2);
                        _0x1db3bc((_0x2cc1d6 << 0x1f | _0xe6f1e + 0x7f << 0x17 | 0x7fffff & Math.round(_0x542004 * Math.pow(0x2, -_0xe6f1e) * 0x800000)) >>> 0x0, _0x100546, _0x23bafc);
                      }
                    }
                  }
                }
              }
              function _0x4477af(_0x10c2d9, _0x2b0ddd, _0x444a9c) {
                var _0x13e286 = _0x10c2d9(_0x2b0ddd, _0x444a9c);
                var _0x946e68 = 0x2 * (_0x13e286 >> 0x1f) + 0x1;
                var _0x4f220f = _0x13e286 >>> 0x17 & 0xff;
                var _0x3b5d20 = 0x7fffff & _0x13e286;
                return 0xff === _0x4f220f ? _0x3b5d20 ? NaN : _0x946e68 * Infinity : 0x0 === _0x4f220f ? 1.401298464324817e-45 * _0x946e68 * _0x3b5d20 : _0x946e68 * Math.pow(0x2, _0x4f220f - 0x96) * (_0x3b5d20 + 0x800000);
              }
              _0x30b69d.writeFloatLE = _0x47091a.bind(null, _0x4d30e2);
              _0x30b69d.writeFloatBE = _0x47091a.bind(null, _0x4007b6);
              _0x30b69d.readFloatLE = _0x4477af.bind(null, _0x411510);
              _0x30b69d.readFloatBE = _0x4477af.bind(null, _0x1fca4e);
            })();
          }
          if ("undefined" != typeof Float64Array) {
            (function () {
              var _0x80a0ae = new Float64Array([-0x0]);
              var _0x4bd19d = new Uint8Array(_0x80a0ae.buffer);
              var _0xdacb35 = 0x80 === _0x4bd19d[0x7];
              function _0x50a207(_0x141b74, _0x3bb5e1, _0x2a06a5) {
                _0x80a0ae[0x0] = _0x141b74;
                _0x3bb5e1[_0x2a06a5] = _0x4bd19d[0x0];
                _0x3bb5e1[_0x2a06a5 + 0x1] = _0x4bd19d[0x1];
                _0x3bb5e1[_0x2a06a5 + 0x2] = _0x4bd19d[0x2];
                _0x3bb5e1[_0x2a06a5 + 0x3] = _0x4bd19d[0x3];
                _0x3bb5e1[_0x2a06a5 + 0x4] = _0x4bd19d[0x4];
                _0x3bb5e1[_0x2a06a5 + 0x5] = _0x4bd19d[0x5];
                _0x3bb5e1[_0x2a06a5 + 0x6] = _0x4bd19d[0x6];
                _0x3bb5e1[_0x2a06a5 + 0x7] = _0x4bd19d[0x7];
              }
              function _0x25a883(_0x3db7f5, _0xffaa0a, _0x5e9251) {
                _0x80a0ae[0x0] = _0x3db7f5;
                _0xffaa0a[_0x5e9251] = _0x4bd19d[0x7];
                _0xffaa0a[_0x5e9251 + 0x1] = _0x4bd19d[0x6];
                _0xffaa0a[_0x5e9251 + 0x2] = _0x4bd19d[0x5];
                _0xffaa0a[_0x5e9251 + 0x3] = _0x4bd19d[0x4];
                _0xffaa0a[_0x5e9251 + 0x4] = _0x4bd19d[0x3];
                _0xffaa0a[_0x5e9251 + 0x5] = _0x4bd19d[0x2];
                _0xffaa0a[_0x5e9251 + 0x6] = _0x4bd19d[0x1];
                _0xffaa0a[_0x5e9251 + 0x7] = _0x4bd19d[0x0];
              }
              function _0x47073a(_0x2b0851, _0x9d655c) {
                _0x4bd19d[0x0] = _0x2b0851[_0x9d655c];
                _0x4bd19d[0x1] = _0x2b0851[_0x9d655c + 0x1];
                _0x4bd19d[0x2] = _0x2b0851[_0x9d655c + 0x2];
                _0x4bd19d[0x3] = _0x2b0851[_0x9d655c + 0x3];
                _0x4bd19d[0x4] = _0x2b0851[_0x9d655c + 0x4];
                _0x4bd19d[0x5] = _0x2b0851[_0x9d655c + 0x5];
                _0x4bd19d[0x6] = _0x2b0851[_0x9d655c + 0x6];
                _0x4bd19d[0x7] = _0x2b0851[_0x9d655c + 0x7];
                return _0x80a0ae[0x0];
              }
              function _0x4f6fb3(_0x2a0e48, _0x521cf0) {
                _0x4bd19d[0x7] = _0x2a0e48[_0x521cf0];
                _0x4bd19d[0x6] = _0x2a0e48[_0x521cf0 + 0x1];
                _0x4bd19d[0x5] = _0x2a0e48[_0x521cf0 + 0x2];
                _0x4bd19d[0x4] = _0x2a0e48[_0x521cf0 + 0x3];
                _0x4bd19d[0x3] = _0x2a0e48[_0x521cf0 + 0x4];
                _0x4bd19d[0x2] = _0x2a0e48[_0x521cf0 + 0x5];
                _0x4bd19d[0x1] = _0x2a0e48[_0x521cf0 + 0x6];
                _0x4bd19d[0x0] = _0x2a0e48[_0x521cf0 + 0x7];
                return _0x80a0ae[0x0];
              }
              _0x30b69d.writeDoubleLE = _0xdacb35 ? _0x50a207 : _0x25a883;
              _0x30b69d.writeDoubleBE = _0xdacb35 ? _0x25a883 : _0x50a207;
              _0x30b69d.readDoubleLE = _0xdacb35 ? _0x47073a : _0x4f6fb3;
              _0x30b69d.readDoubleBE = _0xdacb35 ? _0x4f6fb3 : _0x47073a;
            })();
          } else {
            (function () {
              function _0x23a3ea(_0x319404, _0x30ad6e, _0x4d0dc1, _0x4ac203, _0x50eda3, _0x4c75d4) {
                var _0x1e2064 = _0x4ac203 < 0x0 ? 0x1 : 0x0;
                if (_0x1e2064) {
                  _0x4ac203 = -_0x4ac203;
                }
                if (0x0 === _0x4ac203) {
                  _0x319404(0x0, _0x50eda3, _0x4c75d4 + _0x30ad6e);
                  _0x319404(0x1 / _0x4ac203 > 0x0 ? 0x0 : 0x80000000, _0x50eda3, _0x4c75d4 + _0x4d0dc1);
                } else {
                  if (isNaN(_0x4ac203)) {
                    _0x319404(0x0, _0x50eda3, _0x4c75d4 + _0x30ad6e);
                    _0x319404(0x7ff80000, _0x50eda3, _0x4c75d4 + _0x4d0dc1);
                  } else {
                    if (_0x4ac203 > 0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
                      _0x319404(0x0, _0x50eda3, _0x4c75d4 + _0x30ad6e);
                      _0x319404((_0x1e2064 << 0x1f | 0x7ff00000) >>> 0x0, _0x50eda3, _0x4c75d4 + _0x4d0dc1);
                    } else {
                      var _0xefbcdc;
                      if (_0x4ac203 < 2.2250738585072014e-308) {
                        _0x319404((_0xefbcdc = _0x4ac203 / 5e-324) >>> 0x0, _0x50eda3, _0x4c75d4 + _0x30ad6e);
                        _0x319404((_0x1e2064 << 0x1f | _0xefbcdc / 0x100000000) >>> 0x0, _0x50eda3, _0x4c75d4 + _0x4d0dc1);
                      } else {
                        var _0x372bd8 = Math.floor(Math.log(_0x4ac203) / Math.LN2);
                        if (0x400 === _0x372bd8) {
                          _0x372bd8 = 0x3ff;
                        }
                        _0x319404(0x10000000000000 * (_0xefbcdc = _0x4ac203 * Math.pow(0x2, -_0x372bd8)) >>> 0x0, _0x50eda3, _0x4c75d4 + _0x30ad6e);
                        _0x319404((_0x1e2064 << 0x1f | _0x372bd8 + 0x3ff << 0x14 | 0x100000 * _0xefbcdc & 0xfffff) >>> 0x0, _0x50eda3, _0x4c75d4 + _0x4d0dc1);
                      }
                    }
                  }
                }
              }
              function _0x413236(_0x3080be, _0x3e7225, _0xc504af, _0xa84def, _0x10360a) {
                var _0x1147c3 = _0x3080be(_0xa84def, _0x10360a + _0x3e7225);
                var _0x2f842c = _0x3080be(_0xa84def, _0x10360a + _0xc504af);
                var _0x848aee = 0x2 * (_0x2f842c >> 0x1f) + 0x1;
                var _0x3fd61c = _0x2f842c >>> 0x14 & 0x7ff;
                var _0xb77b1c = 0x100000000 * (0xfffff & _0x2f842c) + _0x1147c3;
                return 0x7ff === _0x3fd61c ? _0xb77b1c ? NaN : _0x848aee * Infinity : 0x0 === _0x3fd61c ? 5e-324 * _0x848aee * _0xb77b1c : _0x848aee * Math.pow(0x2, _0x3fd61c - 0x433) * (_0xb77b1c + 0x10000000000000);
              }
              _0x30b69d.writeDoubleLE = _0x23a3ea.bind(null, _0x4d30e2, 0x0, 0x4);
              _0x30b69d.writeDoubleBE = _0x23a3ea.bind(null, _0x4007b6, 0x4, 0x0);
              _0x30b69d.readDoubleLE = _0x413236.bind(null, _0x411510, 0x0, 0x4);
              _0x30b69d.readDoubleBE = _0x413236.bind(null, _0x1fca4e, 0x4, 0x0);
            })();
          }
          return _0x30b69d;
        }
        function _0x4d30e2(_0x40cf1f, _0x17c4d4, _0x388fe2) {
          _0x17c4d4[_0x388fe2] = 0xff & _0x40cf1f;
          _0x17c4d4[_0x388fe2 + 0x1] = _0x40cf1f >>> 0x8 & 0xff;
          _0x17c4d4[_0x388fe2 + 0x2] = _0x40cf1f >>> 0x10 & 0xff;
          _0x17c4d4[_0x388fe2 + 0x3] = _0x40cf1f >>> 0x18;
        }
        function _0x4007b6(_0x5a4bc3, _0x3d4398, _0x4dad15) {
          _0x3d4398[_0x4dad15] = _0x5a4bc3 >>> 0x18;
          _0x3d4398[_0x4dad15 + 0x1] = _0x5a4bc3 >>> 0x10 & 0xff;
          _0x3d4398[_0x4dad15 + 0x2] = _0x5a4bc3 >>> 0x8 & 0xff;
          _0x3d4398[_0x4dad15 + 0x3] = 0xff & _0x5a4bc3;
        }
        function _0x411510(_0x45e064, _0x3453a5) {
          return (_0x45e064[_0x3453a5] | _0x45e064[_0x3453a5 + 0x1] << 0x8 | _0x45e064[_0x3453a5 + 0x2] << 0x10 | _0x45e064[_0x3453a5 + 0x3] << 0x18) >>> 0x0;
        }
        function _0x1fca4e(_0x221414, _0x25b05c) {
          return (_0x221414[_0x25b05c] << 0x18 | _0x221414[_0x25b05c + 0x1] << 0x10 | _0x221414[_0x25b05c + 0x2] << 0x8 | _0x221414[_0x25b05c + 0x3]) >>> 0x0;
        }
        _0x1bb055.exports = _0x5a6b67(_0x5a6b67);
        _0x1bb055.exports;
        _0x1bb055.exports.writeFloatLE;
        _0x1bb055.exports.writeFloatBE;
        _0x1bb055.exports.readFloatLE;
        _0x1bb055.exports.readFloatBE;
        _0x1bb055.exports.writeDoubleLE;
        _0x1bb055.exports.writeDoubleBE;
        _0x1bb055.exports.readDoubleLE;
        _0x1bb055.exports.readDoubleBE;
      }, {});
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js", function (_0x4ca49f, _0x5c4564, _0x26b64a, _0x2f4d31, _0x426c21) {
        function _0x3a9da7(_0x3d1795) {
          try {
            var _0x466d21 = eval('quire'.replace(/^/, 're'))(_0x3d1795);
            if (_0x466d21 && (_0x466d21.length || Object.keys(_0x466d21).length)) {
              return _0x466d21;
            }
          } catch (_0x4310f5) {}
          return null;
        }
        _0x26b64a.exports = _0x3a9da7;
        _0x26b64a.exports;
      }, {});
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js", function (_0xf07167, _0x2571d3, _0x434ae3, _0x282888, _0xb36a65) {
        _0xf07167.length = function (_0x8a1a47) {
          var _0x4bf777 = 0x0;
          var _0x3822bc = 0x0;
          for (var _0x157db0 = 0x0; _0x157db0 < _0x8a1a47.length; ++_0x157db0) {
            if ((_0x3822bc = _0x8a1a47.charCodeAt(_0x157db0)) < 0x80) {
              _0x4bf777 += 0x1;
            } else if (_0x3822bc < 0x800) {
              _0x4bf777 += 0x2;
            } else if (0xd800 == (0xfc00 & _0x3822bc) && 0xdc00 == (0xfc00 & _0x8a1a47.charCodeAt(_0x157db0 + 0x1))) {
              ++_0x157db0;
              _0x4bf777 += 0x4;
            } else {
              _0x4bf777 += 0x3;
            }
          }
          return _0x4bf777;
        };
        _0xf07167.read = function (_0xd66d96, _0x53ef4c, _0x8cb591) {
          if (_0x8cb591 - _0x53ef4c < 0x1) {
            return '';
          }
          var _0x1211fd;
          var _0x368365 = null;
          var _0x1e741a = [];
          for (var _0xb1b155 = 0x0; _0x53ef4c < _0x8cb591;) {
            if ((_0x1211fd = _0xd66d96[_0x53ef4c++]) < 0x80) {
              _0x1e741a[_0xb1b155++] = _0x1211fd;
            } else if (_0x1211fd > 0xbf && _0x1211fd < 0xe0) {
              _0x1e741a[_0xb1b155++] = (0x1f & _0x1211fd) << 0x6 | 0x3f & _0xd66d96[_0x53ef4c++];
            } else if (_0x1211fd > 0xef && _0x1211fd < 0x16d) {
              _0x1211fd = ((0x7 & _0x1211fd) << 0x12 | (0x3f & _0xd66d96[_0x53ef4c++]) << 0xc | (0x3f & _0xd66d96[_0x53ef4c++]) << 0x6 | 0x3f & _0xd66d96[_0x53ef4c++]) - 0x10000;
              _0x1e741a[_0xb1b155++] = 0xd800 + (_0x1211fd >> 0xa);
              _0x1e741a[_0xb1b155++] = 0xdc00 + (0x3ff & _0x1211fd);
            } else {
              _0x1e741a[_0xb1b155++] = (0xf & _0x1211fd) << 0xc | (0x3f & _0xd66d96[_0x53ef4c++]) << 0x6 | 0x3f & _0xd66d96[_0x53ef4c++];
            }
            if (_0xb1b155 > 0x1fff) {
              (_0x368365 || (_0x368365 = [])).push(String.fromCharCode.apply(String, _0x1e741a));
              _0xb1b155 = 0x0;
            }
          }
          return _0x368365 ? (_0xb1b155 && _0x368365.push(String.fromCharCode.apply(String, _0x1e741a.slice(0x0, _0xb1b155))), _0x368365.join('')) : String.fromCharCode.apply(String, _0x1e741a.slice(0x0, _0xb1b155));
        };
        _0xf07167.write = function (_0x169301, _0x563725, _0x3a45cd) {
          var _0x1087fd;
          var _0x56456a;
          var _0xd4769d = _0x3a45cd;
          for (var _0x597bb5 = 0x0; _0x597bb5 < _0x169301.length; ++_0x597bb5) {
            if ((_0x1087fd = _0x169301.charCodeAt(_0x597bb5)) < 0x80) {
              _0x563725[_0x3a45cd++] = _0x1087fd;
            } else if (_0x1087fd < 0x800) {
              _0x563725[_0x3a45cd++] = _0x1087fd >> 0x6 | 0xc0;
              _0x563725[_0x3a45cd++] = 0x3f & _0x1087fd | 0x80;
            } else if (0xd800 == (0xfc00 & _0x1087fd) && 0xdc00 == (0xfc00 & (_0x56456a = _0x169301.charCodeAt(_0x597bb5 + 0x1)))) {
              _0x1087fd = 0x10000 + ((0x3ff & _0x1087fd) << 0xa) + (0x3ff & _0x56456a);
              ++_0x597bb5;
              _0x563725[_0x3a45cd++] = _0x1087fd >> 0x12 | 0xf0;
              _0x563725[_0x3a45cd++] = _0x1087fd >> 0xc & 0x3f | 0x80;
              _0x563725[_0x3a45cd++] = _0x1087fd >> 0x6 & 0x3f | 0x80;
              _0x563725[_0x3a45cd++] = 0x3f & _0x1087fd | 0x80;
            } else {
              _0x563725[_0x3a45cd++] = _0x1087fd >> 0xc | 0xe0;
              _0x563725[_0x3a45cd++] = _0x1087fd >> 0x6 & 0x3f | 0x80;
              _0x563725[_0x3a45cd++] = 0x3f & _0x1087fd | 0x80;
            }
          }
          return _0x3a45cd - _0xd4769d;
        };
        _0x434ae3.exports;
      }, {});
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js", function (_0x413957, _0x17ee93, _0x181d32, _0x1be3a0, _0x40dff8) {
        _0x181d32.exports = function (_0x26e6e8, _0x57fba7, _0x10ba0c) {
          var _0x31bdd9 = _0x10ba0c || 0x2000;
          var _0x24fb41 = _0x31bdd9 >>> 0x1;
          var _0x270a57 = null;
          var _0x3bc2e = _0x31bdd9;
          return function (_0x448967) {
            if (_0x448967 < 0x1 || _0x448967 > _0x24fb41) {
              return _0x26e6e8(_0x448967);
            }
            if (_0x3bc2e + _0x448967 > _0x31bdd9) {
              _0x270a57 = _0x26e6e8(_0x31bdd9);
              _0x3bc2e = 0x0;
            }
            var _0x3a93b3 = _0x57fba7.call(_0x270a57, _0x3bc2e, _0x3bc2e += _0x448967);
            if (0x7 & _0x3bc2e) {
              _0x3bc2e = 0x1 + (0x7 | _0x3bc2e);
            }
            return _0x3a93b3;
          };
        };
        _0x181d32.exports;
      }, {});
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js", function (_0x3f2a25, _0x2f5e22, _0x2d094f, _0x549807, _0x108b97) {
        _0x2d094f.exports = _0x1d9945;
        var _0x13d6f8 = _0x2f5e22("../util/minimal");
        function _0x1d9945(_0x44d10c, _0x3992c5) {
          this.lo = _0x44d10c >>> 0x0;
          this.hi = _0x3992c5 >>> 0x0;
        }
        var _0x335a1c = _0x1d9945.zero = new _0x1d9945(0x0, 0x0);
        _0x335a1c.toNumber = function () {
          return 0x0;
        };
        _0x335a1c.zzEncode = _0x335a1c.zzDecode = function () {
          return this;
        };
        _0x335a1c.length = function () {
          return 0x1;
        };
        var _0x440455 = _0x1d9945.zeroHash = "\0\0\0\0\0\0\0\0";
        _0x1d9945.fromNumber = function (_0x893414) {
          if (0x0 === _0x893414) {
            return _0x335a1c;
          }
          var _0x389084 = _0x893414 < 0x0;
          if (_0x389084) {
            _0x893414 = -_0x893414;
          }
          var _0x2c2f32 = _0x893414 >>> 0x0;
          var _0x35755b = (_0x893414 - _0x2c2f32) / 0x100000000 >>> 0x0;
          if (_0x389084) {
            _0x35755b = ~_0x35755b >>> 0x0;
            _0x2c2f32 = ~_0x2c2f32 >>> 0x0;
            if (++_0x2c2f32 > 0xffffffff) {
              _0x2c2f32 = 0x0;
              if (++_0x35755b > 0xffffffff) {
                _0x35755b = 0x0;
              }
            }
          }
          return new _0x1d9945(_0x2c2f32, _0x35755b);
        };
        _0x1d9945.from = function (_0x3c9026) {
          if ("number" == typeof _0x3c9026) {
            return _0x1d9945.fromNumber(_0x3c9026);
          }
          if (_0x13d6f8.isString(_0x3c9026)) {
            if (!_0x13d6f8.Long) {
              return _0x1d9945.fromNumber(parseInt(_0x3c9026, 0xa));
            }
            _0x3c9026 = _0x13d6f8.Long.fromString(_0x3c9026);
          }
          return _0x3c9026.low || _0x3c9026.high ? new _0x1d9945(_0x3c9026.low >>> 0x0, _0x3c9026.high >>> 0x0) : _0x335a1c;
        };
        _0x1d9945.prototype.toNumber = function (_0x3c5a21) {
          if (!_0x3c5a21 && this.hi >>> 0x1f) {
            var _0x58e211 = 0x1 + ~this.lo >>> 0x0;
            var _0x1042d8 = ~this.hi >>> 0x0;
            if (!_0x58e211) {
              _0x1042d8 = _0x1042d8 + 0x1 >>> 0x0;
            }
            return -(_0x58e211 + 0x100000000 * _0x1042d8);
          }
          return this.lo + 0x100000000 * this.hi;
        };
        _0x1d9945.prototype.toLong = function (_0x5e08cc) {
          return _0x13d6f8.Long ? new _0x13d6f8.Long(0x0 | this.lo, 0x0 | this.hi, Boolean(_0x5e08cc)) : {
            'low': 0x0 | this.lo,
            'high': 0x0 | this.hi,
            'unsigned': Boolean(_0x5e08cc)
          };
        };
        var _0x23acf4 = String.prototype.charCodeAt;
        _0x1d9945.fromHash = function (_0x31ff9b) {
          return _0x31ff9b === _0x440455 ? _0x335a1c : new _0x1d9945((_0x23acf4.call(_0x31ff9b, 0x0) | _0x23acf4.call(_0x31ff9b, 0x1) << 0x8 | _0x23acf4.call(_0x31ff9b, 0x2) << 0x10 | _0x23acf4.call(_0x31ff9b, 0x3) << 0x18) >>> 0x0, (_0x23acf4.call(_0x31ff9b, 0x4) | _0x23acf4.call(_0x31ff9b, 0x5) << 0x8 | _0x23acf4.call(_0x31ff9b, 0x6) << 0x10 | _0x23acf4.call(_0x31ff9b, 0x7) << 0x18) >>> 0x0);
        };
        _0x1d9945.prototype.toHash = function () {
          return String.fromCharCode(0xff & this.lo, this.lo >>> 0x8 & 0xff, this.lo >>> 0x10 & 0xff, this.lo >>> 0x18, 0xff & this.hi, this.hi >>> 0x8 & 0xff, this.hi >>> 0x10 & 0xff, this.hi >>> 0x18);
        };
        _0x1d9945.prototype.zzEncode = function () {
          var _0x302c70 = this.hi >> 0x1f;
          this.hi = ((this.hi << 0x1 | this.lo >>> 0x1f) ^ _0x302c70) >>> 0x0;
          this.lo = (this.lo << 0x1 ^ _0x302c70) >>> 0x0;
          return this;
        };
        _0x1d9945.prototype.zzDecode = function () {
          var _0x183bef = -(0x1 & this.lo);
          this.lo = ((this.lo >>> 0x1 | this.hi << 0x1f) ^ _0x183bef) >>> 0x0;
          this.hi = (this.hi >>> 0x1 ^ _0x183bef) >>> 0x0;
          return this;
        };
        _0x1d9945.prototype.length = function () {
          var _0x13f9d8 = this.lo;
          var _0xd47be6 = (this.lo >>> 0x1c | this.hi << 0x4) >>> 0x0;
          var _0x24f40c = this.hi >>> 0x18;
          return 0x0 === _0x24f40c ? 0x0 === _0xd47be6 ? _0x13f9d8 < 0x4000 ? _0x13f9d8 < 0x80 ? 0x1 : 0x2 : _0x13f9d8 < 0x200000 ? 0x3 : 0x4 : _0xd47be6 < 0x4000 ? _0xd47be6 < 0x80 ? 0x5 : 0x6 : _0xd47be6 < 0x200000 ? 0x7 : 0x8 : _0x24f40c < 0x80 ? 0x9 : 0xa;
        };
        _0x2d094f.exports;
      }, function () {
        return {
          '../util/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js", function (_0x2217e8, _0x1a0629, _0x468ee3, _0x371ca9, _0x203e89) {
        function _0x57beec(_0x259084, _0x4653ab, _0x1201dd) {
          var _0x531be3 = Object.keys(_0x4653ab);
          for (var _0x28a644 = 0x0; _0x28a644 < _0x531be3.length; ++_0x28a644) {
            if (!(undefined !== _0x259084[_0x531be3[_0x28a644]] && _0x1201dd)) {
              _0x259084[_0x531be3[_0x28a644]] = _0x4653ab[_0x531be3[_0x28a644]];
            }
          }
          return _0x259084;
        }
        function _0x1a29ff(_0x4de1d6) {
          function _0x165777(_0x4a1e3c, _0x1ffdda) {
            if (!(this instanceof _0x165777)) {
              return new _0x165777(_0x4a1e3c, _0x1ffdda);
            }
            Object.defineProperty(this, "message", {
              'get': function () {
                return _0x4a1e3c;
              }
            });
            if (Error.captureStackTrace) {
              Error.captureStackTrace(this, _0x165777);
            } else {
              Object.defineProperty(this, "stack", {
                'value': new Error().stack || ''
              });
            }
            if (_0x1ffdda) {
              _0x57beec(this, _0x1ffdda);
            }
          }
          (_0x165777.prototype = Object.create(Error.prototype)).constructor = _0x165777;
          Object.defineProperty(_0x165777.prototype, 'name', {
            'get': function () {
              return _0x4de1d6;
            }
          });
          _0x165777.prototype.toString = function () {
            return this.name + ": " + this.message;
          };
          return _0x165777;
        }
        _0x2217e8.asPromise = _0x1a0629('@protobufjs/aspromise');
        _0x2217e8.base64 = _0x1a0629('@protobufjs/base64');
        _0x2217e8.EventEmitter = _0x1a0629("@protobufjs/eventemitter");
        _0x2217e8.float = _0x1a0629('@protobufjs/float');
        _0x2217e8.inquire = _0x1a0629('@protobufjs/inquire');
        _0x2217e8.utf8 = _0x1a0629('@protobufjs/utf8');
        _0x2217e8.pool = _0x1a0629('@protobufjs/pool');
        _0x2217e8.LongBits = _0x1a0629('./longbits');
        _0x2217e8.isNode = Boolean("undefined" != typeof global && global && global.process && global.process.versions && global.process.versions.node);
        _0x2217e8.global = _0x2217e8.isNode && global || 'undefined' != typeof window && window || "undefined" != typeof self && self || this;
        _0x2217e8.emptyArray = Object.freeze ? Object.freeze([]) : [];
        _0x2217e8.emptyObject = Object.freeze ? Object.freeze({}) : {};
        _0x2217e8.isInteger = Number.isInteger || function (_0x5224e8) {
          return "number" == typeof _0x5224e8 && isFinite(_0x5224e8) && Math.floor(_0x5224e8) === _0x5224e8;
        };
        _0x2217e8.isString = function (_0x4b8394) {
          return 'string' == typeof _0x4b8394 || _0x4b8394 instanceof String;
        };
        _0x2217e8.isObject = function (_0x1b49c2) {
          return _0x1b49c2 && "object" == typeof _0x1b49c2;
        };
        _0x2217e8.isset = _0x2217e8.isSet = function (_0x21361b, _0x4b0619) {
          var _0x378cb3 = _0x21361b[_0x4b0619];
          return !(null == _0x378cb3 || !_0x21361b.hasOwnProperty(_0x4b0619)) && ("object" != typeof _0x378cb3 || (Array.isArray(_0x378cb3) ? _0x378cb3.length : Object.keys(_0x378cb3).length) > 0x0);
        };
        _0x2217e8.Buffer = function () {
          try {
            var _0x1f6916 = _0x2217e8.inquire('buffer').Buffer;
            return _0x1f6916.prototype.utf8Write ? _0x1f6916 : null;
          } catch (_0x4bd8a8) {
            return null;
          }
        }();
        _0x2217e8._Buffer_from = null;
        _0x2217e8._Buffer_allocUnsafe = null;
        _0x2217e8.newBuffer = function (_0x4f14da) {
          return 'number' == typeof _0x4f14da ? _0x2217e8.Buffer ? _0x2217e8._Buffer_allocUnsafe(_0x4f14da) : new _0x2217e8.Array(_0x4f14da) : _0x2217e8.Buffer ? _0x2217e8._Buffer_from(_0x4f14da) : "undefined" == typeof Uint8Array ? _0x4f14da : new Uint8Array(_0x4f14da);
        };
        _0x2217e8.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array;
        _0x2217e8.Long = _0x2217e8.global.dcodeIO && _0x2217e8.global.dcodeIO.Long || _0x2217e8.global.Long || _0x2217e8.inquire("long");
        _0x2217e8.key2Re = /^true|false|0|1$/;
        _0x2217e8.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
        _0x2217e8.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
        _0x2217e8.longToHash = function (_0xc560b) {
          return _0xc560b ? _0x2217e8.LongBits.from(_0xc560b).toHash() : _0x2217e8.LongBits.zeroHash;
        };
        _0x2217e8.longFromHash = function (_0x1964a5, _0x2788db) {
          var _0x32e151 = _0x2217e8.LongBits.fromHash(_0x1964a5);
          return _0x2217e8.Long ? _0x2217e8.Long.fromBits(_0x32e151.lo, _0x32e151.hi, _0x2788db) : _0x32e151.toNumber(Boolean(_0x2788db));
        };
        _0x2217e8.merge = _0x57beec;
        _0x2217e8.lcFirst = function (_0x197ede) {
          return _0x197ede.charAt(0x0).toLowerCase() + _0x197ede.substring(0x1);
        };
        _0x2217e8.newError = _0x1a29ff;
        _0x2217e8.ProtocolError = _0x1a29ff("ProtocolError");
        _0x2217e8.oneOfGetter = function (_0x1f5a02) {
          var _0x1c312b = {};
          for (var _0x5bd298 = 0x0; _0x5bd298 < _0x1f5a02.length; ++_0x5bd298) {
            _0x1c312b[_0x1f5a02[_0x5bd298]] = 0x1;
          }
          return function () {
            var _0x9782eb = Object.keys(this);
            for (var _0x5dc13b = _0x9782eb.length - 0x1; _0x5dc13b > -0x1; --_0x5dc13b) {
              if (0x1 === _0x1c312b[_0x9782eb[_0x5dc13b]] && undefined !== this[_0x9782eb[_0x5dc13b]] && null !== this[_0x9782eb[_0x5dc13b]]) {
                return _0x9782eb[_0x5dc13b];
              }
            }
          };
        };
        _0x2217e8.oneOfSetter = function (_0x1e323e) {
          return function (_0x44c707) {
            for (var _0x56325d = 0x0; _0x56325d < _0x1e323e.length; ++_0x56325d) {
              if (_0x1e323e[_0x56325d] !== _0x44c707) {
                delete this[_0x1e323e[_0x56325d]];
              }
            }
          };
        };
        _0x2217e8.toJSONOptions = {
          'longs': String,
          'enums': String,
          'bytes': String,
          'json': true
        };
        _0x2217e8._configure = function () {
          var _0x12a19f = _0x2217e8.Buffer;
          if (_0x12a19f) {
            _0x2217e8._Buffer_from = _0x12a19f.from !== Uint8Array.from && _0x12a19f.from || function (_0x51a3cc, _0x16092a) {
              return new _0x12a19f(_0x51a3cc, _0x16092a);
            };
            _0x2217e8._Buffer_allocUnsafe = _0x12a19f.allocUnsafe || function (_0x31634a) {
              return new _0x12a19f(_0x31634a);
            };
          } else {
            _0x2217e8._Buffer_from = _0x2217e8._Buffer_allocUnsafe = null;
          }
        };
        _0x468ee3.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          '@protobufjs/base64': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js",
          '@protobufjs/eventemitter': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js",
          '@protobufjs/float': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/@protobufjs/float/index.js',
          '@protobufjs/inquire': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js",
          '@protobufjs/utf8': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js",
          '@protobufjs/pool': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js",
          './longbits': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js"
        };
      });
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/writer.js", function (_0x22a942, _0x31540a, _0x2a340a, _0x9466fa, _0xc36ee1) {
        _0x2a340a.exports = _0x3c2d0e;
        var _0x5bcb3d;
        var _0x4d0499 = _0x31540a("./util/minimal");
        var _0x150211 = _0x4d0499.LongBits;
        var _0xec9853 = _0x4d0499.base64;
        var _0x46a3d4 = _0x4d0499.utf8;
        function _0x204507(_0x352e9d, _0x3f0508, _0x45a124) {
          this.fn = _0x352e9d;
          this.len = _0x3f0508;
          this.next = undefined;
          this.val = _0x45a124;
        }
        function _0x105bb2() {}
        function _0x235101(_0x416e7b) {
          this.head = _0x416e7b.head;
          this.tail = _0x416e7b.tail;
          this.len = _0x416e7b.len;
          this.next = _0x416e7b.states;
        }
        function _0x3c2d0e() {
          this.len = 0x0;
          this.head = new _0x204507(_0x105bb2, 0x0, 0x0);
          this.tail = this.head;
          this.states = null;
        }
        var _0x7b2c4a = function () {
          return _0x4d0499.Buffer ? function () {
            return (_0x3c2d0e.create = function () {
              return new _0x5bcb3d();
            })();
          } : function () {
            return new _0x3c2d0e();
          };
        };
        function _0x4d6d36(_0x202913, _0x39962c, _0x139ebe) {
          _0x39962c[_0x139ebe] = 0xff & _0x202913;
        }
        function _0x1a590c(_0x5b5d0b, _0x52ac40) {
          this.len = _0x5b5d0b;
          this.next = undefined;
          this.val = _0x52ac40;
        }
        function _0xfc5700(_0x4e7b84, _0x145bc3, _0x4dc052) {
          for (; _0x4e7b84.hi;) {
            _0x145bc3[_0x4dc052++] = 0x7f & _0x4e7b84.lo | 0x80;
            _0x4e7b84.lo = (_0x4e7b84.lo >>> 0x7 | _0x4e7b84.hi << 0x19) >>> 0x0;
            _0x4e7b84.hi >>>= 0x7;
          }
          for (; _0x4e7b84.lo > 0x7f;) {
            _0x145bc3[_0x4dc052++] = 0x7f & _0x4e7b84.lo | 0x80;
            _0x4e7b84.lo = _0x4e7b84.lo >>> 0x7;
          }
          _0x145bc3[_0x4dc052++] = _0x4e7b84.lo;
        }
        function _0x4cae0b(_0x15c2d5, _0x36cf77, _0x7a90da) {
          _0x36cf77[_0x7a90da] = 0xff & _0x15c2d5;
          _0x36cf77[_0x7a90da + 0x1] = _0x15c2d5 >>> 0x8 & 0xff;
          _0x36cf77[_0x7a90da + 0x2] = _0x15c2d5 >>> 0x10 & 0xff;
          _0x36cf77[_0x7a90da + 0x3] = _0x15c2d5 >>> 0x18;
        }
        _0x3c2d0e.create = _0x7b2c4a();
        _0x3c2d0e.alloc = function (_0xc91100) {
          return new _0x4d0499.Array(_0xc91100);
        };
        if (_0x4d0499.Array !== Array) {
          _0x3c2d0e.alloc = _0x4d0499.pool(_0x3c2d0e.alloc, _0x4d0499.Array.prototype.subarray);
        }
        _0x3c2d0e.prototype._push = function (_0x4bda05, _0x37bc5f, _0x249343) {
          this.tail = this.tail.next = new _0x204507(_0x4bda05, _0x37bc5f, _0x249343);
          this.len += _0x37bc5f;
          return this;
        };
        _0x1a590c.prototype = Object.create(_0x204507.prototype);
        _0x1a590c.prototype.fn = function (_0x3c2a2, _0x41685e, _0x404d69) {
          for (; _0x3c2a2 > 0x7f;) {
            _0x41685e[_0x404d69++] = 0x7f & _0x3c2a2 | 0x80;
            _0x3c2a2 >>>= 0x7;
          }
          _0x41685e[_0x404d69] = _0x3c2a2;
        };
        _0x3c2d0e.prototype.uint32 = function (_0x1766f6) {
          this.len += (this.tail = this.tail.next = new _0x1a590c((_0x1766f6 >>>= 0x0) < 0x80 ? 0x1 : _0x1766f6 < 0x4000 ? 0x2 : _0x1766f6 < 0x200000 ? 0x3 : _0x1766f6 < 0x10000000 ? 0x4 : 0x5, _0x1766f6)).len;
          return this;
        };
        _0x3c2d0e.prototype.int32 = function (_0x6bbab1) {
          return _0x6bbab1 < 0x0 ? this._push(_0xfc5700, 0xa, _0x150211.fromNumber(_0x6bbab1)) : this.uint32(_0x6bbab1);
        };
        _0x3c2d0e.prototype.sint32 = function (_0x429863) {
          return this.uint32((_0x429863 << 0x1 ^ _0x429863 >> 0x1f) >>> 0x0);
        };
        _0x3c2d0e.prototype.uint64 = function (_0x3001d7) {
          var _0x20478a = _0x150211.from(_0x3001d7);
          return this._push(_0xfc5700, _0x20478a.length(), _0x20478a);
        };
        _0x3c2d0e.prototype.int64 = _0x3c2d0e.prototype.uint64;
        _0x3c2d0e.prototype.sint64 = function (_0x19860f) {
          var _0x2f96d9 = _0x150211.from(_0x19860f).zzEncode();
          return this._push(_0xfc5700, _0x2f96d9.length(), _0x2f96d9);
        };
        _0x3c2d0e.prototype.bool = function (_0x3d6074) {
          return this._push(_0x4d6d36, 0x1, _0x3d6074 ? 0x1 : 0x0);
        };
        _0x3c2d0e.prototype.fixed32 = function (_0x2068be) {
          return this._push(_0x4cae0b, 0x4, _0x2068be >>> 0x0);
        };
        _0x3c2d0e.prototype.sfixed32 = _0x3c2d0e.prototype.fixed32;
        _0x3c2d0e.prototype.fixed64 = function (_0x45622e) {
          var _0x252610 = _0x150211.from(_0x45622e);
          return this._push(_0x4cae0b, 0x4, _0x252610.lo)._push(_0x4cae0b, 0x4, _0x252610.hi);
        };
        _0x3c2d0e.prototype.sfixed64 = _0x3c2d0e.prototype.fixed64;
        _0x3c2d0e.prototype.float = function (_0x2d88a4) {
          return this._push(_0x4d0499.float.writeFloatLE, 0x4, _0x2d88a4);
        };
        _0x3c2d0e.prototype.double = function (_0x15a912) {
          return this._push(_0x4d0499.float.writeDoubleLE, 0x8, _0x15a912);
        };
        var _0x1a06c7 = _0x4d0499.Array.prototype.set ? function (_0x1136ab, _0x2784ab, _0x10ca31) {
          _0x2784ab.set(_0x1136ab, _0x10ca31);
        } : function (_0x12b947, _0x39f346, _0x1eea8b) {
          for (var _0x2ea94a = 0x0; _0x2ea94a < _0x12b947.length; ++_0x2ea94a) {
            _0x39f346[_0x1eea8b + _0x2ea94a] = _0x12b947[_0x2ea94a];
          }
        };
        _0x3c2d0e.prototype.bytes = function (_0x6baf8d) {
          var _0x5303cd = _0x6baf8d.length >>> 0x0;
          if (!_0x5303cd) {
            return this._push(_0x4d6d36, 0x1, 0x0);
          }
          if (_0x4d0499.isString(_0x6baf8d)) {
            var _0x59dda8 = _0x3c2d0e.alloc(_0x5303cd = _0xec9853.length(_0x6baf8d));
            _0xec9853.decode(_0x6baf8d, _0x59dda8, 0x0);
            _0x6baf8d = _0x59dda8;
          }
          return this.uint32(_0x5303cd)._push(_0x1a06c7, _0x5303cd, _0x6baf8d);
        };
        _0x3c2d0e.prototype.string = function (_0x153d90) {
          var _0x1fb37c = _0x46a3d4.length(_0x153d90);
          return _0x1fb37c ? this.uint32(_0x1fb37c)._push(_0x46a3d4.write, _0x1fb37c, _0x153d90) : this._push(_0x4d6d36, 0x1, 0x0);
        };
        _0x3c2d0e.prototype.fork = function () {
          this.states = new _0x235101(this);
          this.head = this.tail = new _0x204507(_0x105bb2, 0x0, 0x0);
          this.len = 0x0;
          return this;
        };
        _0x3c2d0e.prototype.reset = function () {
          if (this.states) {
            this.head = this.states.head;
            this.tail = this.states.tail;
            this.len = this.states.len;
            this.states = this.states.next;
          } else {
            this.head = this.tail = new _0x204507(_0x105bb2, 0x0, 0x0);
            this.len = 0x0;
          }
          return this;
        };
        _0x3c2d0e.prototype.ldelim = function () {
          var _0x2ed393 = this.head;
          var _0x3d0e8c = this.tail;
          var _0x153058 = this.len;
          this.reset().uint32(_0x153058);
          if (_0x153058) {
            this.tail.next = _0x2ed393.next;
            this.tail = _0x3d0e8c;
            this.len += _0x153058;
          }
          return this;
        };
        _0x3c2d0e.prototype.finish = function () {
          var _0x25f8dc = this.head.next;
          var _0x1e9930 = this.constructor.alloc(this.len);
          for (var _0x1de011 = 0x0; _0x25f8dc;) {
            _0x25f8dc.fn(_0x25f8dc.val, _0x1e9930, _0x1de011);
            _0x1de011 += _0x25f8dc.len;
            _0x25f8dc = _0x25f8dc.next;
          }
          return _0x1e9930;
        };
        _0x3c2d0e._configure = function (_0x440f3) {
          _0x5bcb3d = _0x440f3;
          _0x3c2d0e.create = _0x7b2c4a();
          _0x5bcb3d._configure();
        };
        _0x2a340a.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x557447.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js', function (_0x1ee944, _0x35ec9b, _0x46e7d6, _0x247520, _0x49d14b) {
        _0x46e7d6.exports = _0x32af98;
        var _0x4d9d0d = _0x35ec9b("./writer");
        (_0x32af98.prototype = Object.create(_0x4d9d0d.prototype)).constructor = _0x32af98;
        var _0x6ac5ef = _0x35ec9b('./util/minimal');
        function _0x32af98() {
          _0x4d9d0d.call(this);
        }
        function _0x208fda(_0x153cf3, _0x1798ed, _0x135bd1) {
          if (_0x153cf3.length < 0x28) {
            _0x6ac5ef.utf8.write(_0x153cf3, _0x1798ed, _0x135bd1);
          } else if (_0x1798ed.utf8Write) {
            _0x1798ed.utf8Write(_0x153cf3, _0x135bd1);
          } else {
            _0x1798ed.write(_0x153cf3, _0x135bd1);
          }
        }
        _0x32af98._configure = function () {
          _0x32af98.alloc = _0x6ac5ef._Buffer_allocUnsafe;
          _0x32af98.writeBytesBuffer = _0x6ac5ef.Buffer && _0x6ac5ef.Buffer.prototype instanceof Uint8Array && "set" === _0x6ac5ef.Buffer.prototype.set.name ? function (_0x165da1, _0xb6bbbd, _0x51ed1e) {
            _0xb6bbbd.set(_0x165da1, _0x51ed1e);
          } : function (_0x3bf215, _0x439c4a, _0x42d5d9) {
            if (_0x3bf215.copy) {
              _0x3bf215.copy(_0x439c4a, _0x42d5d9, 0x0, _0x3bf215.length);
            } else {
              for (var _0x3d5a19 = 0x0; _0x3d5a19 < _0x3bf215.length;) {
                _0x439c4a[_0x42d5d9++] = _0x3bf215[_0x3d5a19++];
              }
            }
          };
        };
        _0x32af98.prototype.bytes = function (_0x369cdf) {
          if (_0x6ac5ef.isString(_0x369cdf)) {
            _0x369cdf = _0x6ac5ef._Buffer_from(_0x369cdf, "base64");
          }
          var _0x489c96 = _0x369cdf.length >>> 0x0;
          this.uint32(_0x489c96);
          if (_0x489c96) {
            this._push(_0x32af98.writeBytesBuffer, _0x489c96, _0x369cdf);
          }
          return this;
        };
        _0x32af98.prototype.string = function (_0x277f60) {
          var _0x2de1ff = _0x6ac5ef.Buffer.byteLength(_0x277f60);
          this.uint32(_0x2de1ff);
          if (_0x2de1ff) {
            this._push(_0x208fda, _0x2de1ff, _0x277f60);
          }
          return this;
        };
        _0x32af98._configure();
        _0x46e7d6.exports;
      }, function () {
        return {
          './writer': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './util/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/reader.js", function (_0x3d5aa7, _0x3fa6f4, _0x11e9a1, _0x3fa9f8, _0x4f0f6b) {
        _0x11e9a1.exports = _0x54bdf4;
        var _0x1c5c6b;
        var _0x45acaa = _0x3fa6f4("./util/minimal");
        var _0x20bb20 = _0x45acaa.LongBits;
        var _0x4cf6f9 = _0x45acaa.utf8;
        function _0x54bdf4(_0x3774bd) {
          this.buf = _0x3774bd;
          this.pos = 0x0;
          this.len = _0x3774bd.length;
        }
        var _0x508b60;
        var _0x53d674 = "undefined" != typeof Uint8Array ? function (_0x2812e4) {
          if (_0x2812e4 instanceof Uint8Array || Array.isArray(_0x2812e4)) {
            return new _0x54bdf4(_0x2812e4);
          }
          throw Error("illegal buffer");
        } : function (_0x1c0ffd) {
          if (Array.isArray(_0x1c0ffd)) {
            return new _0x54bdf4(_0x1c0ffd);
          }
          throw Error("illegal buffer");
        };
        var _0x29bf7e = function () {
          return _0x45acaa.Buffer ? function (_0x3537a5) {
            return (_0x54bdf4.create = function (_0x4c2759) {
              return _0x45acaa.Buffer.isBuffer(_0x4c2759) ? new _0x1c5c6b(_0x4c2759) : _0x53d674(_0x4c2759);
            })(_0x3537a5);
          } : _0x53d674;
        };
        function _0x2e936d() {
          var _0x1f6dd9 = new _0x20bb20(0x0, 0x0);
          var _0x293eda = 0x0;
          if (!(this.len - this.pos > 0x4)) {
            for (; _0x293eda < 0x3; ++_0x293eda) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0x1f6dd9.lo = (_0x1f6dd9.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0x293eda) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x1f6dd9;
              }
            }
            _0x1f6dd9.lo = (_0x1f6dd9.lo | (0x7f & this.buf[this.pos++]) << 0x7 * _0x293eda) >>> 0x0;
            return _0x1f6dd9;
          }
          for (; _0x293eda < 0x4; ++_0x293eda) {
            _0x1f6dd9.lo = (_0x1f6dd9.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0x293eda) >>> 0x0;
            if (this.buf[this.pos++] < 0x80) {
              return _0x1f6dd9;
            }
          }
          _0x1f6dd9.lo = (_0x1f6dd9.lo | (0x7f & this.buf[this.pos]) << 0x1c) >>> 0x0;
          _0x1f6dd9.hi = (_0x1f6dd9.hi | (0x7f & this.buf[this.pos]) >> 0x4) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x1f6dd9;
          }
          _0x293eda = 0x0;
          if (this.len - this.pos > 0x4) {
            for (; _0x293eda < 0x5; ++_0x293eda) {
              _0x1f6dd9.hi = (_0x1f6dd9.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0x293eda + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x1f6dd9;
              }
            }
          } else {
            for (; _0x293eda < 0x5; ++_0x293eda) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0x1f6dd9.hi = (_0x1f6dd9.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0x293eda + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x1f6dd9;
              }
            }
          }
          throw Error("invalid varint encoding");
        }
        function _0x57caa9() {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x8 || 0x1) + " > " + this.len);
          }
          return new _0x20bb20((this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0, (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0);
        }
        _0x54bdf4.create = _0x29bf7e();
        _0x54bdf4.prototype._slice = _0x45acaa.Array.prototype.subarray || _0x45acaa.Array.prototype.slice;
        _0x508b60 = 0xffffffff;
        _0x54bdf4.prototype.uint32 = function () {
          _0x508b60 = (0x7f & this.buf[this.pos]) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x508b60;
          }
          _0x508b60 = (_0x508b60 | (0x7f & this.buf[this.pos]) << 0x7) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x508b60;
          }
          _0x508b60 = (_0x508b60 | (0x7f & this.buf[this.pos]) << 0xe) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x508b60;
          }
          _0x508b60 = (_0x508b60 | (0x7f & this.buf[this.pos]) << 0x15) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x508b60;
          }
          _0x508b60 = (_0x508b60 | (0xf & this.buf[this.pos]) << 0x1c) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x508b60;
          }
          if ((this.pos += 0x5) > this.len) {
            this.pos = this.len;
            throw RangeError("index out of range: " + this.pos + " + " + (0xa || 0x1) + " > " + this.len);
          }
          return _0x508b60;
        };
        _0x54bdf4.prototype.int32 = function () {
          return 0x0 | this.uint32();
        };
        _0x54bdf4.prototype.sint32 = function () {
          var _0x395702 = this.uint32();
          return _0x395702 >>> 0x1 ^ -(0x1 & _0x395702) | 0x0;
        };
        _0x54bdf4.prototype.bool = function () {
          return 0x0 !== this.uint32();
        };
        _0x54bdf4.prototype.fixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0x54bdf4.prototype.sfixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return 0x0 | (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0x54bdf4.prototype.float = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x20ed59 = _0x45acaa.float.readFloatLE(this.buf, this.pos);
          this.pos += 0x4;
          return _0x20ed59;
        };
        _0x54bdf4.prototype.double = function () {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x15997e = _0x45acaa.float.readDoubleLE(this.buf, this.pos);
          this.pos += 0x8;
          return _0x15997e;
        };
        _0x54bdf4.prototype.bytes = function () {
          var _0x5c9eda = this.uint32();
          var _0x44c355 = this.pos;
          var _0x1cdcb6 = this.pos + _0x5c9eda;
          if (_0x1cdcb6 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (_0x5c9eda || 0x1) + " > " + this.len);
          }
          this.pos += _0x5c9eda;
          return Array.isArray(this.buf) ? this.buf.slice(_0x44c355, _0x1cdcb6) : _0x44c355 === _0x1cdcb6 ? new this.buf.constructor(0x0) : this._slice.call(this.buf, _0x44c355, _0x1cdcb6);
        };
        _0x54bdf4.prototype.string = function () {
          var _0x374fd6 = this.bytes();
          return _0x4cf6f9.read(_0x374fd6, 0x0, _0x374fd6.length);
        };
        _0x54bdf4.prototype.skip = function (_0x2f47f2) {
          if ("number" == typeof _0x2f47f2) {
            if (this.pos + _0x2f47f2 > this.len) {
              throw RangeError("index out of range: " + this.pos + " + " + (_0x2f47f2 || 0x1) + " > " + this.len);
            }
            this.pos += _0x2f47f2;
          } else {
            do {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
            } while (0x80 & this.buf[this.pos++]);
          }
          return this;
        };
        _0x54bdf4.prototype.skipType = function (_0x478c31) {
          switch (_0x478c31) {
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
              for (; 0x4 != (_0x478c31 = 0x7 & this.uint32());) {
                this.skipType(_0x478c31);
              }
              break;
            case 0x5:
              this.skip(0x4);
              break;
            default:
              throw Error("invalid wire type " + _0x478c31 + " at offset " + this.pos);
          }
          return this;
        };
        _0x54bdf4._configure = function (_0x415e37) {
          _0x1c5c6b = _0x415e37;
          _0x54bdf4.create = _0x29bf7e();
          _0x1c5c6b._configure();
          var _0x1c3b7d = _0x45acaa.Long ? 'toLong' : "toNumber";
          _0x45acaa.merge(_0x54bdf4.prototype, {
            'int64': function () {
              return _0x2e936d.call(this)[_0x1c3b7d](false);
            },
            'uint64': function () {
              return _0x2e936d.call(this)[_0x1c3b7d](true);
            },
            'sint64': function () {
              return _0x2e936d.call(this).zzDecode()[_0x1c3b7d](false);
            },
            'fixed64': function () {
              return _0x57caa9.call(this)[_0x1c3b7d](true);
            },
            'sfixed64': function () {
              return _0x57caa9.call(this)[_0x1c3b7d](false);
            }
          });
        };
        _0x11e9a1.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x557447.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js', function (_0x885e44, _0x1a6455, _0x318bc8, _0x1e1d5f, _0x5795d2) {
        _0x318bc8.exports = _0x5e5d57;
        var _0x39f6a0 = _0x1a6455("./reader");
        (_0x5e5d57.prototype = Object.create(_0x39f6a0.prototype)).constructor = _0x5e5d57;
        var _0x55433c = _0x1a6455("./util/minimal");
        function _0x5e5d57(_0x1e54f7) {
          _0x39f6a0.call(this, _0x1e54f7);
        }
        _0x5e5d57._configure = function () {
          if (_0x55433c.Buffer) {
            _0x5e5d57.prototype._slice = _0x55433c.Buffer.prototype.slice;
          }
        };
        _0x5e5d57.prototype.string = function () {
          var _0x521111 = this.uint32();
          return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + _0x521111, this.len)) : this.buf.toString('utf-8', this.pos, this.pos = Math.min(this.pos + _0x521111, this.len));
        };
        _0x5e5d57._configure();
        _0x318bc8.exports;
      }, function () {
        return {
          './reader': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './util/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x557447.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js', function (_0x2f75d4, _0x39f232, _0x50a9ba, _0x4b6733, _0x2cab38) {
        _0x50a9ba.exports = _0x56d059;
        var _0xee9035 = _0x39f232("../util/minimal");
        function _0x56d059(_0x3405be, _0x305318, _0x1fccbb) {
          if ("function" != typeof _0x3405be) {
            throw TypeError("rpcImpl must be a function");
          }
          _0xee9035.EventEmitter.call(this);
          this.rpcImpl = _0x3405be;
          this.requestDelimited = Boolean(_0x305318);
          this.responseDelimited = Boolean(_0x1fccbb);
        }
        (_0x56d059.prototype = Object.create(_0xee9035.EventEmitter.prototype)).constructor = _0x56d059;
        _0x56d059.prototype.rpcCall = function _0x3fa83f(_0x1711e6, _0x3b59c7, _0x50195f, _0x204c36, _0x19751d) {
          if (!_0x204c36) {
            throw TypeError("request must be specified");
          }
          var _0x47bff8 = this;
          if (!_0x19751d) {
            return _0xee9035.asPromise(_0x3fa83f, _0x47bff8, _0x1711e6, _0x3b59c7, _0x50195f, _0x204c36);
          }
          if (_0x47bff8.rpcImpl) {
            try {
              return _0x47bff8.rpcImpl(_0x1711e6, _0x3b59c7[_0x47bff8.requestDelimited ? 'encodeDelimited' : "encode"](_0x204c36).finish(), function (_0x1ef934, _0x10a4a1) {
                if (_0x1ef934) {
                  _0x47bff8.emit("error", _0x1ef934, _0x1711e6);
                  return _0x19751d(_0x1ef934);
                }
                if (null !== _0x10a4a1) {
                  if (!(_0x10a4a1 instanceof _0x50195f)) {
                    try {
                      _0x10a4a1 = _0x50195f[_0x47bff8.responseDelimited ? 'decodeDelimited' : "decode"](_0x10a4a1);
                    } catch (_0x5402a3) {
                      _0x47bff8.emit("error", _0x5402a3, _0x1711e6);
                      return _0x19751d(_0x5402a3);
                    }
                  }
                  _0x47bff8.emit("data", _0x10a4a1, _0x1711e6);
                  return _0x19751d(null, _0x10a4a1);
                }
                _0x47bff8.end(true);
              });
            } catch (_0x3305d1) {
              _0x47bff8.emit('error', _0x3305d1, _0x1711e6);
              return void setTimeout(function () {
                _0x19751d(_0x3305d1);
              }, 0x0);
            }
          } else {
            setTimeout(function () {
              _0x19751d(Error("already ended"));
            }, 0x0);
          }
        };
        _0x56d059.prototype.end = function (_0xc270f9) {
          if (this.rpcImpl) {
            if (!_0xc270f9) {
              this.rpcImpl(null, null, null);
            }
            this.rpcImpl = null;
            this.emit("end").off();
          }
          return this;
        };
        _0x50a9ba.exports;
      }, function () {
        return {
          '../util/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x557447.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js', function (_0x43f042, _0x4455e2, _0x3aea52, _0x2ec662, _0x3dfea6) {
        _0x43f042.Service = _0x4455e2("./rpc/service");
        _0x3aea52.exports;
      }, function () {
        return {
          './rpc/service': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js'
        };
      });
      _0x557447.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/roots.js', function (_0x2f04c3, _0x809da1, _0xeff3ee, _0x941e0a, _0x2a0c0d) {
        _0xeff3ee.exports = {};
        _0xeff3ee.exports;
      }, {});
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js", function (_0x174b16, _0x1272ff, _0x3e1e73, _0x57b356, _0x5d732a) {
        function _0x4fac8a() {
          _0x174b16.util._configure();
          _0x174b16.Writer._configure(_0x174b16.BufferWriter);
          _0x174b16.Reader._configure(_0x174b16.BufferReader);
        }
        _0x174b16.build = "minimal";
        _0x174b16.Writer = _0x1272ff("./writer");
        _0x174b16.BufferWriter = _0x1272ff("./writer_buffer");
        _0x174b16.Reader = _0x1272ff('./reader');
        _0x174b16.BufferReader = _0x1272ff('./reader_buffer');
        _0x174b16.util = _0x1272ff('./util/minimal');
        _0x174b16.rpc = _0x1272ff("./rpc");
        _0x174b16.roots = _0x1272ff("./roots");
        _0x174b16.configure = _0x4fac8a;
        _0x4fac8a();
        _0x3e1e73.exports;
      }, function () {
        return {
          './writer': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './writer_buffer': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js',
          './reader': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './reader_buffer': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js',
          './util/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          './rpc': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js',
          './roots': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/roots.js'
        };
      });
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js", function (_0xcecd5b, _0x111a0b, _0x2470eb, _0x404e85, _0x521100) {
        function _0x2692fb(_0x353871, _0x58269e) {
          if ("string" == typeof _0x353871) {
            _0x58269e = _0x353871;
            _0x353871 = undefined;
          }
          var _0x3f6ed5 = [];
          function _0xb14d5a(_0x503fdf) {
            if ("string" != typeof _0x503fdf) {
              var _0x513381 = "function " + (undefined || _0x58269e || '') + '(' + (_0x353871 && _0x353871.join(',') || '') + "){\n  " + _0x3f6ed5.join("\n  ") + "\n}";
              if (_0x2692fb.verbose) {
                console.log("codegen: " + _0x513381);
              }
              _0x513381 = "return " + _0x513381;
              if (_0x503fdf) {
                var _0x210403 = Object.keys(_0x503fdf);
                var _0x538495 = new Array(_0x210403.length + 0x1);
                var _0x56e2d0 = new Array(_0x210403.length);
                for (var _0x2d34d0 = 0x0; _0x2d34d0 < _0x210403.length;) {
                  _0x538495[_0x2d34d0] = _0x210403[_0x2d34d0];
                  _0x56e2d0[_0x2d34d0] = _0x503fdf[_0x210403[_0x2d34d0++]];
                }
                _0x538495[_0x2d34d0] = _0x513381;
                return Function.apply(null, _0x538495).apply(null, _0x56e2d0);
              }
              return Function(_0x513381)();
            }
            var _0x59143a = new Array(arguments.length - 0x1);
            for (var _0x5d5f9d = 0x0; _0x5d5f9d < _0x59143a.length;) {
              _0x59143a[_0x5d5f9d] = arguments[++_0x5d5f9d];
            }
            _0x5d5f9d = 0x0;
            _0x503fdf = _0x503fdf.replace(/%([%dfijs])/g, function (_0x5ce6dc, _0x507ebe) {
              var _0x4abaeb = _0x59143a[_0x5d5f9d++];
              switch (_0x507ebe) {
                case 'd':
                case 'f':
                  return String(Number(_0x4abaeb));
                case 'i':
                  return String(Math.floor(_0x4abaeb));
                case 'j':
                  return JSON.stringify(_0x4abaeb);
                case 's':
                  return String(_0x4abaeb);
              }
              return '%';
            });
            if (_0x5d5f9d !== _0x59143a.length) {
              throw Error("parameter count mismatch");
            }
            _0x3f6ed5.push(_0x503fdf);
            return _0xb14d5a;
          }
          function _0x37f079(_0xd96781) {
            return "function " + (_0xd96781 || _0x58269e || '') + '(' + (_0x353871 && _0x353871.join(',') || '') + "){\n  " + _0x3f6ed5.join("\n  ") + "\n}";
          }
          _0xb14d5a.toString = _0x37f079;
          return _0xb14d5a;
        }
        _0x2470eb.exports = _0x2692fb;
        _0x2692fb.verbose = false;
        _0x2470eb.exports;
      }, {});
      _0x557447.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js', function (_0x35d67f, _0x4ce568, _0x170ba8, _0x160026, _0x1ec015) {
        _0x170ba8.exports = _0x288a8d;
        var _0x129318 = _0x4ce568("@protobufjs/aspromise");
        var _0x26e672 = _0x4ce568('@protobufjs/inquire')('fs');
        function _0x288a8d(_0x22d239, _0x24f5d3, _0x5136c4) {
          if ('function' == typeof _0x24f5d3) {
            _0x5136c4 = _0x24f5d3;
            _0x24f5d3 = {};
          } else if (!_0x24f5d3) {
            _0x24f5d3 = {};
          }
          return _0x5136c4 ? !_0x24f5d3.xhr && _0x26e672 && _0x26e672.readFile ? _0x26e672.readFile(_0x22d239, function (_0x3d8ccf, _0x1d5405) {
            return _0x3d8ccf && 'undefined' != typeof XMLHttpRequest ? _0x288a8d.xhr(_0x22d239, _0x24f5d3, _0x5136c4) : _0x3d8ccf ? _0x5136c4(_0x3d8ccf) : _0x5136c4(null, _0x24f5d3.binary ? _0x1d5405 : _0x1d5405.toString("utf8"));
          }) : _0x288a8d.xhr(_0x22d239, _0x24f5d3, _0x5136c4) : _0x129318(_0x288a8d, this, _0x22d239, _0x24f5d3);
        }
        _0x288a8d.xhr = function (_0x425360, _0x5d28be, _0x36bcc6) {
          var _0x4f7c98 = new XMLHttpRequest();
          _0x4f7c98.onreadystatechange = function () {
            if (0x4 === _0x4f7c98.readyState) {
              if (0x0 !== _0x4f7c98.status && 0xc8 !== _0x4f7c98.status) {
                return _0x36bcc6(Error("status " + _0x4f7c98.status));
              }
              if (_0x5d28be.binary) {
                var _0x4994fb = _0x4f7c98.response;
                if (!_0x4994fb) {
                  _0x4994fb = [];
                  for (var _0xd698f3 = 0x0; _0xd698f3 < _0x4f7c98.responseText.length; ++_0xd698f3) {
                    _0x4994fb.push(0xff & _0x4f7c98.responseText.charCodeAt(_0xd698f3));
                  }
                }
                return _0x36bcc6(null, "undefined" != typeof Uint8Array ? new Uint8Array(_0x4994fb) : _0x4994fb);
              }
              return _0x36bcc6(null, _0x4f7c98.responseText);
            }
          };
          if (_0x5d28be.binary) {
            if ("overrideMimeType" in _0x4f7c98) {
              _0x4f7c98.overrideMimeType("text/plain; charset=x-user-defined");
            }
            _0x4f7c98.responseType = 'arraybuffer';
          }
          _0x4f7c98.open("GET", _0x425360);
          _0x4f7c98.send();
        };
        _0x170ba8.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          '@protobufjs/inquire': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js"
        };
      });
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/@protobufjs/path/index.js", function (_0x4c8cbc, _0x4fe947, _0x3431fc, _0x181f63, _0x5db431) {
        var _0x12d354 = _0x4c8cbc.isAbsolute = function (_0x25f4e9) {
          return /^(?:\/|\w+:)/.test(_0x25f4e9);
        };
        var _0x485433 = _0x4c8cbc.normalize = function (_0x35dd51) {
          var _0x181d6b = (_0x35dd51 = _0x35dd51.replace(/\\/g, '/').replace(/\/{2,}/g, '/')).split('/');
          var _0x3a2cdd = _0x12d354(_0x35dd51);
          var _0x5cbc60 = '';
          if (_0x3a2cdd) {
            _0x5cbc60 = _0x181d6b.shift() + '/';
          }
          for (var _0x2f29b8 = 0x0; _0x2f29b8 < _0x181d6b.length;) {
            if ('..' === _0x181d6b[_0x2f29b8]) {
              if (_0x2f29b8 > 0x0 && '..' !== _0x181d6b[_0x2f29b8 - 0x1]) {
                _0x181d6b.splice(--_0x2f29b8, 0x2);
              } else if (_0x3a2cdd) {
                _0x181d6b.splice(_0x2f29b8, 0x1);
              } else {
                ++_0x2f29b8;
              }
            } else if ('.' === _0x181d6b[_0x2f29b8]) {
              _0x181d6b.splice(_0x2f29b8, 0x1);
            } else {
              ++_0x2f29b8;
            }
          }
          return _0x5cbc60 + _0x181d6b.join('/');
        };
        _0x4c8cbc.resolve = function (_0x46b6fb, _0x533e65, _0x2c9740) {
          if (!_0x2c9740) {
            _0x533e65 = _0x485433(_0x533e65);
          }
          return _0x12d354(_0x533e65) ? _0x533e65 : (_0x2c9740 || (_0x46b6fb = _0x485433(_0x46b6fb)), (_0x46b6fb = _0x46b6fb.replace(/(?:\/|^)[^/]+$/, '')).length ? _0x485433(_0x46b6fb + '/' + _0x533e65) : _0x533e65);
        };
        _0x3431fc.exports;
      }, {});
      _0x557447.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/types.js', function (_0x1ec353, _0x21c09d, _0x57feca, _0x4b16a2, _0x5622c5) {
        var _0x1be5d9 = _0x21c09d("./util");
        var _0x4a7c17 = ["double", 'float', "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", 'uint64', 'sint64', "fixed64", "sfixed64", "bool", 'string', "bytes"];
        function _0x59556c(_0x1554d6, _0x2807ac) {
          var _0x244ec6 = 0x0;
          var _0xbe6d02 = {};
          for (_0x2807ac |= 0x0; _0x244ec6 < _0x1554d6.length;) {
            _0xbe6d02[_0x4a7c17[_0x244ec6 + _0x2807ac]] = _0x1554d6[_0x244ec6++];
          }
          return _0xbe6d02;
        }
        _0x1ec353.basic = _0x59556c([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2, 0x2]);
        _0x1ec353.defaults = _0x59556c([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, false, '', _0x1be5d9.emptyArray, null]);
        _0x1ec353.long = _0x59556c([0x0, 0x0, 0x0, 0x1, 0x1], 0x7);
        _0x1ec353.mapKey = _0x59556c([0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2], 0x2);
        _0x1ec353.packed = _0x59556c([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0]);
        _0x57feca.exports;
      }, function () {
        return {
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/field.js", function (_0x12be27, _0x3066a3, _0x219d97, _0x38d697, _0xefc3fd) {
        _0x219d97.exports = _0x155599;
        var _0x170b19 = _0x3066a3("./object");
        ((_0x155599.prototype = Object.create(_0x170b19.prototype)).constructor = _0x155599).className = "Field";
        var _0x5c8999;
        var _0x11f8a5 = _0x3066a3("./enum");
        var _0x10f69d = _0x3066a3("./types");
        var _0x2c36a6 = _0x3066a3("./util");
        var _0x24caae = /^required|optional|repeated$/;
        function _0x155599(_0x151cd6, _0x5136c0, _0x44f54a, _0x481865, _0x144d80, _0x533dbc, _0x3ee36c) {
          if (_0x2c36a6.isObject(_0x481865)) {
            _0x3ee36c = _0x144d80;
            _0x533dbc = _0x481865;
            _0x481865 = _0x144d80 = undefined;
          } else if (_0x2c36a6.isObject(_0x144d80)) {
            _0x3ee36c = _0x533dbc;
            _0x533dbc = _0x144d80;
            _0x144d80 = undefined;
          }
          _0x170b19.call(this, _0x151cd6, _0x533dbc);
          if (!_0x2c36a6.isInteger(_0x5136c0) || _0x5136c0 < 0x0) {
            throw TypeError("id must be a non-negative integer");
          }
          if (!_0x2c36a6.isString(_0x44f54a)) {
            throw TypeError("type must be a string");
          }
          if (undefined !== _0x481865 && !_0x24caae.test(_0x481865 = _0x481865.toString().toLowerCase())) {
            throw TypeError("rule must be a string rule");
          }
          if (undefined !== _0x144d80 && !_0x2c36a6.isString(_0x144d80)) {
            throw TypeError("extend must be a string");
          }
          if ("proto3_optional" === _0x481865) {
            _0x481865 = "optional";
          }
          this.rule = _0x481865 && "optional" !== _0x481865 ? _0x481865 : undefined;
          this.type = _0x44f54a;
          this.id = _0x5136c0;
          this.extend = _0x144d80 || undefined;
          this.required = 'required' === _0x481865;
          this.optional = !this.required;
          this.repeated = "repeated" === _0x481865;
          this.map = false;
          this.message = null;
          this.partOf = null;
          this.typeDefault = null;
          this.defaultValue = null;
          this.long = !!_0x2c36a6.Long && undefined !== _0x10f69d.long[_0x44f54a];
          this.bytes = "bytes" === _0x44f54a;
          this.resolvedType = null;
          this.extensionField = null;
          this.declaringField = null;
          this._packed = null;
          this.comment = _0x3ee36c;
        }
        _0x155599.fromJSON = function (_0x3bc118, _0x4413b0) {
          return new _0x155599(_0x3bc118, _0x4413b0.id, _0x4413b0.type, _0x4413b0.rule, _0x4413b0.extend, _0x4413b0.options, _0x4413b0.comment);
        };
        Object.defineProperty(_0x155599.prototype, 'packed', {
          'get': function () {
            if (null === this._packed) {
              this._packed = false !== this.getOption("packed");
            }
            return this._packed;
          }
        });
        _0x155599.prototype.setOption = function (_0x11dfb2, _0x218aff, _0x79b2fd) {
          if ("packed" === _0x11dfb2) {
            this._packed = null;
          }
          return _0x170b19.prototype.setOption.call(this, _0x11dfb2, _0x218aff, _0x79b2fd);
        };
        _0x155599.prototype.toJSON = function (_0x397434) {
          var _0x4f6150 = !!_0x397434 && Boolean(_0x397434.keepComments);
          return _0x2c36a6.toObject(['rule', "optional" !== this.rule && this.rule || undefined, "type", this.type, 'id', this.id, "extend", this.extend, "options", this.options, 'comment', _0x4f6150 ? this.comment : undefined]);
        };
        _0x155599.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === (this.typeDefault = _0x10f69d.defaults[this.type])) {
            this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
            if (this.resolvedType instanceof _0x5c8999) {
              this.typeDefault = null;
            } else {
              this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0x0]];
            }
          }
          if (this.options && null != this.options["default"]) {
            this.typeDefault = this.options["default"];
            if (this.resolvedType instanceof _0x11f8a5 && "string" == typeof this.typeDefault) {
              this.typeDefault = this.resolvedType.values[this.typeDefault];
            }
          }
          if (this.options) {
            if (!(true !== this.options.packed && (undefined === this.options.packed || !this.resolvedType || this.resolvedType instanceof _0x11f8a5))) {
              delete this.options.packed;
            }
            if (!Object.keys(this.options).length) {
              this.options = undefined;
            }
          }
          if (this.long) {
            this.typeDefault = _0x2c36a6.Long.fromNumber(this.typeDefault, 'u' === this.type.charAt(0x0));
            if (Object.freeze) {
              Object.freeze(this.typeDefault);
            }
          } else {
            if (this.bytes && "string" == typeof this.typeDefault) {
              var _0x3b62ee;
              if (_0x2c36a6.base64.test(this.typeDefault)) {
                _0x2c36a6.base64.decode(this.typeDefault, _0x3b62ee = _0x2c36a6.newBuffer(_0x2c36a6.base64.length(this.typeDefault)), 0x0);
              } else {
                _0x2c36a6.utf8.write(this.typeDefault, _0x3b62ee = _0x2c36a6.newBuffer(_0x2c36a6.utf8.length(this.typeDefault)), 0x0);
              }
              this.typeDefault = _0x3b62ee;
            }
          }
          if (this.map) {
            this.defaultValue = _0x2c36a6.emptyObject;
          } else if (this.repeated) {
            this.defaultValue = _0x2c36a6.emptyArray;
          } else {
            this.defaultValue = this.typeDefault;
          }
          if (this.parent instanceof _0x5c8999) {
            this.parent.ctor.prototype[this.name] = this.defaultValue;
          }
          return _0x170b19.prototype.resolve.call(this);
        };
        _0x155599.d = function (_0x336d07, _0x37d3bb, _0x1ff021, _0x43a31d) {
          if ('function' == typeof _0x37d3bb) {
            _0x37d3bb = _0x2c36a6.decorateType(_0x37d3bb).name;
          } else if (_0x37d3bb && "object" == typeof _0x37d3bb) {
            _0x37d3bb = _0x2c36a6.decorateEnum(_0x37d3bb).name;
          }
          return function (_0x2410f1, _0x2fb895) {
            _0x2c36a6.decorateType(_0x2410f1.constructor).add(new _0x155599(_0x2fb895, _0x336d07, _0x37d3bb, _0x1ff021, {
              'default': _0x43a31d
            }));
          };
        };
        _0x155599._configure = function (_0x3875a1) {
          _0x5c8999 = _0x3875a1;
        };
        _0x219d97.exports;
      }, function () {
        return {
          './object': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/types.js',
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js", function (_0x3876fd, _0x30e7a7, _0x238638, _0x3687a8, _0x5ba028) {
        _0x238638.exports = _0x39e053;
        var _0x424c74 = _0x30e7a7("./object");
        ((_0x39e053.prototype = Object.create(_0x424c74.prototype)).constructor = _0x39e053).className = "OneOf";
        var _0x1d2e05 = _0x30e7a7('./field');
        var _0x30c0d2 = _0x30e7a7('./util');
        function _0x39e053(_0x146bbc, _0x571649, _0x46bf84, _0x1cbc82) {
          if (!Array.isArray(_0x571649)) {
            _0x46bf84 = _0x571649;
            _0x571649 = undefined;
          }
          _0x424c74.call(this, _0x146bbc, _0x46bf84);
          if (undefined !== _0x571649 && !Array.isArray(_0x571649)) {
            throw TypeError("fieldNames must be an Array");
          }
          this.oneof = _0x571649 || [];
          this.fieldsArray = [];
          this.comment = _0x1cbc82;
        }
        function _0x252fe8(_0x1ec536) {
          if (_0x1ec536.parent) {
            for (var _0x1ce63d = 0x0; _0x1ce63d < _0x1ec536.fieldsArray.length; ++_0x1ce63d) {
              if (!_0x1ec536.fieldsArray[_0x1ce63d].parent) {
                _0x1ec536.parent.add(_0x1ec536.fieldsArray[_0x1ce63d]);
              }
            }
          }
        }
        _0x39e053.fromJSON = function (_0x348438, _0x53d3e2) {
          return new _0x39e053(_0x348438, _0x53d3e2.oneof, _0x53d3e2.options, _0x53d3e2.comment);
        };
        _0x39e053.prototype.toJSON = function (_0x5c7b53) {
          var _0x18d67d = !!_0x5c7b53 && Boolean(_0x5c7b53.keepComments);
          return _0x30c0d2.toObject(['options', this.options, "oneof", this.oneof, "comment", _0x18d67d ? this.comment : undefined]);
        };
        _0x39e053.prototype.add = function (_0x2fa36d) {
          if (!(_0x2fa36d instanceof _0x1d2e05)) {
            throw TypeError("field must be a Field");
          }
          if (_0x2fa36d.parent && _0x2fa36d.parent !== this.parent) {
            _0x2fa36d.parent.remove(_0x2fa36d);
          }
          this.oneof.push(_0x2fa36d.name);
          this.fieldsArray.push(_0x2fa36d);
          _0x2fa36d.partOf = this;
          _0x252fe8(this);
          return this;
        };
        _0x39e053.prototype.remove = function (_0x4b18d5) {
          if (!(_0x4b18d5 instanceof _0x1d2e05)) {
            throw TypeError("field must be a Field");
          }
          var _0x18c04c = this.fieldsArray.indexOf(_0x4b18d5);
          if (_0x18c04c < 0x0) {
            throw Error(_0x4b18d5 + " is not a member of " + this);
          }
          this.fieldsArray.splice(_0x18c04c, 0x1);
          if ((_0x18c04c = this.oneof.indexOf(_0x4b18d5.name)) > -0x1) {
            this.oneof.splice(_0x18c04c, 0x1);
          }
          _0x4b18d5.partOf = null;
          return this;
        };
        _0x39e053.prototype.onAdd = function (_0x2b0b6e) {
          _0x424c74.prototype.onAdd.call(this, _0x2b0b6e);
          for (var _0x4320cd = 0x0; _0x4320cd < this.oneof.length; ++_0x4320cd) {
            var _0x10b3c9 = _0x2b0b6e.get(this.oneof[_0x4320cd]);
            if (_0x10b3c9 && !_0x10b3c9.partOf) {
              _0x10b3c9.partOf = this;
              this.fieldsArray.push(_0x10b3c9);
            }
          }
          _0x252fe8(this);
        };
        _0x39e053.prototype.onRemove = function (_0x2f2bf4) {
          var _0xfbefb;
          for (var _0x4a0049 = 0x0; _0x4a0049 < this.fieldsArray.length; ++_0x4a0049) {
            if ((_0xfbefb = this.fieldsArray[_0x4a0049]).parent) {
              _0xfbefb.parent.remove(_0xfbefb);
            }
          }
          _0x424c74.prototype.onRemove.call(this, _0x2f2bf4);
        };
        _0x39e053.d = function () {
          var _0x523fac = new Array(arguments.length);
          for (var _0x4c8170 = 0x0; _0x4c8170 < arguments.length;) {
            _0x523fac[_0x4c8170] = arguments[_0x4c8170++];
          }
          return function (_0x17db05, _0x374325) {
            _0x30c0d2.decorateType(_0x17db05.constructor).add(new _0x39e053(_0x374325, _0x523fac));
            Object.defineProperty(_0x17db05, _0x374325, {
              'get': _0x30c0d2.oneOfGetter(_0x523fac),
              'set': _0x30c0d2.oneOfSetter(_0x523fac)
            });
          };
        };
        _0x238638.exports;
      }, function () {
        return {
          './object': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './field': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js", function (_0x1b0cca, _0x4ac0b8, _0x5a23fc, _0x5d43fe, _0x25570e) {
        _0x5a23fc.exports = _0x20641;
        var _0x2dbad1 = _0x4ac0b8('./object');
        ((_0x20641.prototype = Object.create(_0x2dbad1.prototype)).constructor = _0x20641).className = "Namespace";
        var _0x4174e2;
        var _0x55d91b;
        var _0x3bc35a;
        var _0x1c388b = _0x4ac0b8("./field");
        var _0x132539 = _0x4ac0b8("./oneof");
        var _0x5768fa = _0x4ac0b8("./util");
        function _0x220a1b(_0x169415, _0x4a4814) {
          if (_0x169415 && _0x169415.length) {
            var _0x2b97c6 = {};
            for (var _0xe83367 = 0x0; _0xe83367 < _0x169415.length; ++_0xe83367) {
              _0x2b97c6[_0x169415[_0xe83367].name] = _0x169415[_0xe83367].toJSON(_0x4a4814);
            }
            return _0x2b97c6;
          }
        }
        function _0x20641(_0xffc190, _0x531703) {
          _0x2dbad1.call(this, _0xffc190, _0x531703);
          this.nested = undefined;
          this._nestedArray = null;
        }
        function _0x2723e4(_0x6d8dfa) {
          _0x6d8dfa._nestedArray = null;
          return _0x6d8dfa;
        }
        _0x20641.fromJSON = function (_0x58c979, _0x10b340) {
          return new _0x20641(_0x58c979, _0x10b340.options).addJSON(_0x10b340.nested);
        };
        _0x20641.arrayToJSON = _0x220a1b;
        _0x20641.isReservedId = function (_0x4aa153, _0x18c5a8) {
          if (_0x4aa153) {
            for (var _0x327aa1 = 0x0; _0x327aa1 < _0x4aa153.length; ++_0x327aa1) {
              if ('string' != typeof _0x4aa153[_0x327aa1] && _0x4aa153[_0x327aa1][0x0] <= _0x18c5a8 && _0x4aa153[_0x327aa1][0x1] > _0x18c5a8) {
                return true;
              }
            }
          }
          return false;
        };
        _0x20641.isReservedName = function (_0x2382e7, _0x40440c) {
          if (_0x2382e7) {
            for (var _0x3007fb = 0x0; _0x3007fb < _0x2382e7.length; ++_0x3007fb) {
              if (_0x2382e7[_0x3007fb] === _0x40440c) {
                return true;
              }
            }
          }
          return false;
        };
        Object.defineProperty(_0x20641.prototype, "nestedArray", {
          'get': function () {
            return this._nestedArray || (this._nestedArray = _0x5768fa.toArray(this.nested));
          }
        });
        _0x20641.prototype.toJSON = function (_0xaac6a4) {
          return _0x5768fa.toObject(["options", this.options, "nested", _0x220a1b(this.nestedArray, _0xaac6a4)]);
        };
        _0x20641.prototype.addJSON = function (_0x5612e7) {
          if (_0x5612e7) {
            var _0x5dd80d;
            var _0x54a8ee = Object.keys(_0x5612e7);
            for (var _0x3fb9da = 0x0; _0x3fb9da < _0x54a8ee.length; ++_0x3fb9da) {
              _0x5dd80d = _0x5612e7[_0x54a8ee[_0x3fb9da]];
              this.add((undefined !== _0x5dd80d.fields ? _0x4174e2.fromJSON : undefined !== _0x5dd80d.values ? _0x3bc35a.fromJSON : undefined !== _0x5dd80d.methods ? _0x55d91b.fromJSON : undefined !== _0x5dd80d.id ? _0x1c388b.fromJSON : _0x20641.fromJSON)(_0x54a8ee[_0x3fb9da], _0x5dd80d));
            }
          }
          return this;
        };
        _0x20641.prototype.get = function (_0x4dac82) {
          return this.nested && this.nested[_0x4dac82] || null;
        };
        _0x20641.prototype.getEnum = function (_0x364a36) {
          if (this.nested && this.nested[_0x364a36] instanceof _0x3bc35a) {
            return this.nested[_0x364a36].values;
          }
          throw Error("no such enum: " + _0x364a36);
        };
        _0x20641.prototype.add = function (_0x34dfd5) {
          if (!(_0x34dfd5 instanceof _0x1c388b && undefined !== _0x34dfd5.extend || _0x34dfd5 instanceof _0x4174e2 || _0x34dfd5 instanceof _0x3bc35a || _0x34dfd5 instanceof _0x55d91b || _0x34dfd5 instanceof _0x20641 || _0x34dfd5 instanceof _0x132539)) {
            throw TypeError("object must be a valid nested object");
          }
          if (this.nested) {
            var _0x52ef52 = this.get(_0x34dfd5.name);
            if (_0x52ef52) {
              if (!(_0x52ef52 instanceof _0x20641 && _0x34dfd5 instanceof _0x20641) || _0x52ef52 instanceof _0x4174e2 || _0x52ef52 instanceof _0x55d91b) {
                throw Error("duplicate name '" + _0x34dfd5.name + "' in " + this);
              }
              var _0x2884a1 = _0x52ef52.nestedArray;
              for (var _0x3c2a53 = 0x0; _0x3c2a53 < _0x2884a1.length; ++_0x3c2a53) {
                _0x34dfd5.add(_0x2884a1[_0x3c2a53]);
              }
              this.remove(_0x52ef52);
              if (!this.nested) {
                this.nested = {};
              }
              _0x34dfd5.setOptions(_0x52ef52.options, true);
            }
          } else {
            this.nested = {};
          }
          this.nested[_0x34dfd5.name] = _0x34dfd5;
          _0x34dfd5.onAdd(this);
          return _0x2723e4(this);
        };
        _0x20641.prototype.remove = function (_0x1c08b7) {
          if (!(_0x1c08b7 instanceof _0x2dbad1)) {
            throw TypeError("object must be a ReflectionObject");
          }
          if (_0x1c08b7.parent !== this) {
            throw Error(_0x1c08b7 + " is not a member of " + this);
          }
          delete this.nested[_0x1c08b7.name];
          if (!Object.keys(this.nested).length) {
            this.nested = undefined;
          }
          _0x1c08b7.onRemove(this);
          return _0x2723e4(this);
        };
        _0x20641.prototype.define = function (_0x5c5068, _0x2c193a) {
          if (_0x5768fa.isString(_0x5c5068)) {
            _0x5c5068 = _0x5c5068.split('.');
          } else {
            if (!Array.isArray(_0x5c5068)) {
              throw TypeError("illegal path");
            }
          }
          if (_0x5c5068 && _0x5c5068.length && '' === _0x5c5068[0x0]) {
            throw Error("path must be relative");
          }
          for (var _0x5e57e5 = this; _0x5c5068.length > 0x0;) {
            var _0x35d3e4 = _0x5c5068.shift();
            if (_0x5e57e5.nested && _0x5e57e5.nested[_0x35d3e4]) {
              if (!((_0x5e57e5 = _0x5e57e5.nested[_0x35d3e4]) instanceof _0x20641)) {
                throw Error("path conflicts with non-namespace objects");
              }
            } else {
              _0x5e57e5.add(_0x5e57e5 = new _0x20641(_0x35d3e4));
            }
          }
          if (_0x2c193a) {
            _0x5e57e5.addJSON(_0x2c193a);
          }
          return _0x5e57e5;
        };
        _0x20641.prototype.resolveAll = function () {
          var _0x237dc2 = this.nestedArray;
          for (var _0x2af27b = 0x0; _0x2af27b < _0x237dc2.length;) {
            if (_0x237dc2[_0x2af27b] instanceof _0x20641) {
              _0x237dc2[_0x2af27b++].resolveAll();
            } else {
              _0x237dc2[_0x2af27b++].resolve();
            }
          }
          return this.resolve();
        };
        _0x20641.prototype.lookup = function (_0x2c89df, _0x44cddc, _0x3d1802) {
          if ("boolean" == typeof _0x44cddc) {
            _0x3d1802 = _0x44cddc;
            _0x44cddc = undefined;
          } else if (_0x44cddc && !Array.isArray(_0x44cddc)) {
            _0x44cddc = [_0x44cddc];
          }
          if (_0x5768fa.isString(_0x2c89df) && _0x2c89df.length) {
            if ('.' === _0x2c89df) {
              return this.root;
            }
            _0x2c89df = _0x2c89df.split('.');
          } else {
            if (!_0x2c89df.length) {
              return this;
            }
          }
          if ('' === _0x2c89df[0x0]) {
            return this.root.lookup(_0x2c89df.slice(0x1), _0x44cddc);
          }
          var _0x3933ec = this.get(_0x2c89df[0x0]);
          if (_0x3933ec) {
            if (0x1 === _0x2c89df.length) {
              if (!_0x44cddc || _0x44cddc.indexOf(_0x3933ec.constructor) > -0x1) {
                return _0x3933ec;
              }
            } else {
              if (_0x3933ec instanceof _0x20641 && (_0x3933ec = _0x3933ec.lookup(_0x2c89df.slice(0x1), _0x44cddc, true))) {
                return _0x3933ec;
              }
            }
          } else {
            for (var _0x1bf7f5 = 0x0; _0x1bf7f5 < this.nestedArray.length; ++_0x1bf7f5) {
              if (this._nestedArray[_0x1bf7f5] instanceof _0x20641 && (_0x3933ec = this._nestedArray[_0x1bf7f5].lookup(_0x2c89df, _0x44cddc, true))) {
                return _0x3933ec;
              }
            }
          }
          return null === this.parent || _0x3d1802 ? null : this.parent.lookup(_0x2c89df, _0x44cddc);
        };
        _0x20641.prototype.lookupType = function (_0x435c3f) {
          var _0x3869f0 = this.lookup(_0x435c3f, [_0x4174e2]);
          if (!_0x3869f0) {
            throw Error("no such type: " + _0x435c3f);
          }
          return _0x3869f0;
        };
        _0x20641.prototype.lookupEnum = function (_0x3ed674) {
          var _0x3393a3 = this.lookup(_0x3ed674, [_0x3bc35a]);
          if (!_0x3393a3) {
            throw Error("no such Enum '" + _0x3ed674 + "' in " + this);
          }
          return _0x3393a3;
        };
        _0x20641.prototype.lookupTypeOrEnum = function (_0x4f9b08) {
          var _0x18c68c = this.lookup(_0x4f9b08, [_0x4174e2, _0x3bc35a]);
          if (!_0x18c68c) {
            throw Error("no such Type or Enum '" + _0x4f9b08 + "' in " + this);
          }
          return _0x18c68c;
        };
        _0x20641.prototype.lookupService = function (_0x13e5a6) {
          var _0x21ba88 = this.lookup(_0x13e5a6, [_0x55d91b]);
          if (!_0x21ba88) {
            throw Error("no such Service '" + _0x13e5a6 + "' in " + this);
          }
          return _0x21ba88;
        };
        _0x20641._configure = function (_0x35be51, _0x2c83c9, _0x124e5a) {
          _0x4174e2 = _0x35be51;
          _0x55d91b = _0x2c83c9;
          _0x3bc35a = _0x124e5a;
        };
        _0x5a23fc.exports;
      }, function () {
        return {
          './object': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './field': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './oneof': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js", function (_0x329ab9, _0x4a2a46, _0x5b0c6e, _0x3e76f5, _0x17719f) {
        _0x5b0c6e.exports = _0x3b5b5a;
        var _0x306e9d = _0x4a2a46('./field');
        ((_0x3b5b5a.prototype = Object.create(_0x306e9d.prototype)).constructor = _0x3b5b5a).className = "MapField";
        var _0x47a9e2 = _0x4a2a46("./types");
        var _0x3454a6 = _0x4a2a46("./util");
        function _0x3b5b5a(_0x51ac4e, _0x216c61, _0x2c05dd, _0x5afb07, _0x31649c, _0x249503) {
          _0x306e9d.call(this, _0x51ac4e, _0x216c61, _0x5afb07, undefined, undefined, _0x31649c, _0x249503);
          if (!_0x3454a6.isString(_0x2c05dd)) {
            throw TypeError("keyType must be a string");
          }
          this.keyType = _0x2c05dd;
          this.resolvedKeyType = null;
          this.map = true;
        }
        _0x3b5b5a.fromJSON = function (_0x2b5b7c, _0x4a7252) {
          return new _0x3b5b5a(_0x2b5b7c, _0x4a7252.id, _0x4a7252.keyType, _0x4a7252.type, _0x4a7252.options, _0x4a7252.comment);
        };
        _0x3b5b5a.prototype.toJSON = function (_0x108f2c) {
          var _0x49be7a = !!_0x108f2c && Boolean(_0x108f2c.keepComments);
          return _0x3454a6.toObject(["keyType", this.keyType, 'type', this.type, 'id', this.id, "extend", this.extend, 'options', this.options, "comment", _0x49be7a ? this.comment : undefined]);
        };
        _0x3b5b5a.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === _0x47a9e2.mapKey[this.keyType]) {
            throw Error("invalid key type: " + this.keyType);
          }
          return _0x306e9d.prototype.resolve.call(this);
        };
        _0x3b5b5a.d = function (_0x57575e, _0x547175, _0x1046a0) {
          if ("function" == typeof _0x1046a0) {
            _0x1046a0 = _0x3454a6.decorateType(_0x1046a0).name;
          } else if (_0x1046a0 && 'object' == typeof _0x1046a0) {
            _0x1046a0 = _0x3454a6.decorateEnum(_0x1046a0).name;
          }
          return function (_0x3d7402, _0x4ca65d) {
            _0x3454a6.decorateType(_0x3d7402.constructor).add(new _0x3b5b5a(_0x4ca65d, _0x57575e, _0x547175, _0x1046a0));
          };
        };
        _0x5b0c6e.exports;
      }, function () {
        return {
          './field': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './types': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/types.js',
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/method.js", function (_0x471e61, _0x144af6, _0x1421da, _0x324ed0, _0x44f602) {
        _0x1421da.exports = _0x28fa53;
        var _0x2270d5 = _0x144af6("./object");
        ((_0x28fa53.prototype = Object.create(_0x2270d5.prototype)).constructor = _0x28fa53).className = "Method";
        var _0x57cad5 = _0x144af6("./util");
        function _0x28fa53(_0x1bc793, _0x3f8ac9, _0x109631, _0x439d8a, _0xedbd8, _0x1c5ff2, _0x4524af, _0x1f89c1, _0x19bd4b) {
          if (_0x57cad5.isObject(_0xedbd8)) {
            _0x4524af = _0xedbd8;
            _0xedbd8 = _0x1c5ff2 = undefined;
          } else if (_0x57cad5.isObject(_0x1c5ff2)) {
            _0x4524af = _0x1c5ff2;
            _0x1c5ff2 = undefined;
          }
          if (undefined !== _0x3f8ac9 && !_0x57cad5.isString(_0x3f8ac9)) {
            throw TypeError("type must be a string");
          }
          if (!_0x57cad5.isString(_0x109631)) {
            throw TypeError("requestType must be a string");
          }
          if (!_0x57cad5.isString(_0x439d8a)) {
            throw TypeError("responseType must be a string");
          }
          _0x2270d5.call(this, _0x1bc793, _0x4524af);
          this.type = _0x3f8ac9 || "rpc";
          this.requestType = _0x109631;
          this.requestStream = !!_0xedbd8 || undefined;
          this.responseType = _0x439d8a;
          this.responseStream = !!_0x1c5ff2 || undefined;
          this.resolvedRequestType = null;
          this.resolvedResponseType = null;
          this.comment = _0x1f89c1;
          this.parsedOptions = _0x19bd4b;
        }
        _0x28fa53.fromJSON = function (_0x95c272, _0x370241) {
          return new _0x28fa53(_0x95c272, _0x370241.type, _0x370241.requestType, _0x370241.responseType, _0x370241.requestStream, _0x370241.responseStream, _0x370241.options, _0x370241.comment, _0x370241.parsedOptions);
        };
        _0x28fa53.prototype.toJSON = function (_0x495d8f) {
          var _0x46c483 = !!_0x495d8f && Boolean(_0x495d8f.keepComments);
          return _0x57cad5.toObject(["type", "rpc" !== this.type && this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", _0x46c483 ? this.comment : undefined, "parsedOptions", this.parsedOptions]);
        };
        _0x28fa53.prototype.resolve = function () {
          return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), _0x2270d5.prototype.resolve.call(this));
        };
        _0x1421da.exports;
      }, function () {
        return {
          './object': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/service.js", function (_0x5ed41a, _0x1ca6fd, _0x231bed, _0x16403e, _0x23c302) {
        _0x231bed.exports = _0x32f7fa;
        var _0x44ca7c = _0x1ca6fd('./namespace');
        ((_0x32f7fa.prototype = Object.create(_0x44ca7c.prototype)).constructor = _0x32f7fa).className = "Service";
        var _0xd1c21d = _0x1ca6fd('./method');
        var _0x53438c = _0x1ca6fd('./util');
        var _0x54d1d6 = _0x1ca6fd("./rpc");
        function _0x32f7fa(_0x59b0db, _0x3caea0) {
          _0x44ca7c.call(this, _0x59b0db, _0x3caea0);
          this.methods = {};
          this._methodsArray = null;
        }
        function _0x1442dc(_0x24fcd5) {
          _0x24fcd5._methodsArray = null;
          return _0x24fcd5;
        }
        _0x32f7fa.fromJSON = function (_0x2ce453, _0x6db801) {
          var _0x15bd75 = new _0x32f7fa(_0x2ce453, _0x6db801.options);
          if (_0x6db801.methods) {
            var _0x41ae9c = Object.keys(_0x6db801.methods);
            for (var _0x484ec1 = 0x0; _0x484ec1 < _0x41ae9c.length; ++_0x484ec1) {
              _0x15bd75.add(_0xd1c21d.fromJSON(_0x41ae9c[_0x484ec1], _0x6db801.methods[_0x41ae9c[_0x484ec1]]));
            }
          }
          if (_0x6db801.nested) {
            _0x15bd75.addJSON(_0x6db801.nested);
          }
          _0x15bd75.comment = _0x6db801.comment;
          return _0x15bd75;
        };
        _0x32f7fa.prototype.toJSON = function (_0xd1325b) {
          var _0x1d4c71 = _0x44ca7c.prototype.toJSON.call(this, _0xd1325b);
          var _0x1bcc54 = !!_0xd1325b && Boolean(_0xd1325b.keepComments);
          return _0x53438c.toObject(["options", _0x1d4c71 && _0x1d4c71.options || undefined, "methods", _0x44ca7c.arrayToJSON(this.methodsArray, _0xd1325b) || {}, "nested", _0x1d4c71 && _0x1d4c71.nested || undefined, "comment", _0x1bcc54 ? this.comment : undefined]);
        };
        Object.defineProperty(_0x32f7fa.prototype, "methodsArray", {
          'get': function () {
            return this._methodsArray || (this._methodsArray = _0x53438c.toArray(this.methods));
          }
        });
        _0x32f7fa.prototype.get = function (_0x1db273) {
          return this.methods[_0x1db273] || _0x44ca7c.prototype.get.call(this, _0x1db273);
        };
        _0x32f7fa.prototype.resolveAll = function () {
          var _0x5a3d3b = this.methodsArray;
          for (var _0x284aaa = 0x0; _0x284aaa < _0x5a3d3b.length; ++_0x284aaa) {
            _0x5a3d3b[_0x284aaa].resolve();
          }
          return _0x44ca7c.prototype.resolve.call(this);
        };
        _0x32f7fa.prototype.add = function (_0x4d7d4b) {
          if (this.get(_0x4d7d4b.name)) {
            throw Error("duplicate name '" + _0x4d7d4b.name + "' in " + this);
          }
          return _0x4d7d4b instanceof _0xd1c21d ? (this.methods[_0x4d7d4b.name] = _0x4d7d4b, _0x4d7d4b.parent = this, _0x1442dc(this)) : _0x44ca7c.prototype.add.call(this, _0x4d7d4b);
        };
        _0x32f7fa.prototype.remove = function (_0x230f95) {
          if (_0x230f95 instanceof _0xd1c21d) {
            if (this.methods[_0x230f95.name] !== _0x230f95) {
              throw Error(_0x230f95 + " is not a member of " + this);
            }
            delete this.methods[_0x230f95.name];
            _0x230f95.parent = null;
            return _0x1442dc(this);
          }
          return _0x44ca7c.prototype.remove.call(this, _0x230f95);
        };
        _0x32f7fa.prototype.create = function (_0xab602, _0x517e26, _0x466bbb) {
          var _0x5a4c00;
          var _0x3f71e9 = new _0x54d1d6.Service(_0xab602, _0x517e26, _0x466bbb);
          for (var _0x3203b1 = 0x0; _0x3203b1 < this.methodsArray.length; ++_0x3203b1) {
            var _0x45fb31 = _0x53438c.lcFirst((_0x5a4c00 = this._methodsArray[_0x3203b1]).resolve().name).replace(/[^$\w_]/g, '');
            _0x3f71e9[_0x45fb31] = _0x53438c.codegen(['r', 'c'], _0x53438c.isReserved(_0x45fb31) ? _0x45fb31 + '_' : _0x45fb31)("return this.rpcCall(m,q,s,r,c)")({
              'm': _0x5a4c00,
              'q': _0x5a4c00.resolvedRequestType.ctor,
              's': _0x5a4c00.resolvedResponseType.ctor
            });
          }
          return _0x3f71e9;
        };
        _0x231bed.exports;
      }, function () {
        return {
          './namespace': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './method': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './rpc': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js'
        };
      });
      _0x557447.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/message.js', function (_0x39f4e8, _0x4cb684, _0xc8d5b5, _0x57a356, _0x3d6f9f) {
        _0xc8d5b5.exports = _0x1f8f92;
        var _0x47bf4b = _0x4cb684("./util/minimal");
        function _0x1f8f92(_0x5421b8) {
          if (_0x5421b8) {
            var _0x51e838 = Object.keys(_0x5421b8);
            for (var _0x45104a = 0x0; _0x45104a < _0x51e838.length; ++_0x45104a) {
              this[_0x51e838[_0x45104a]] = _0x5421b8[_0x51e838[_0x45104a]];
            }
          }
        }
        _0x1f8f92.create = function (_0x429807) {
          return this.$type.create(_0x429807);
        };
        _0x1f8f92.encode = function (_0x130563, _0x49c5a7) {
          return this.$type.encode(_0x130563, _0x49c5a7);
        };
        _0x1f8f92.encodeDelimited = function (_0x3c6812, _0x59a628) {
          return this.$type.encodeDelimited(_0x3c6812, _0x59a628);
        };
        _0x1f8f92.decode = function (_0x4cfdb3) {
          return this.$type.decode(_0x4cfdb3);
        };
        _0x1f8f92.decodeDelimited = function (_0x16d84c) {
          return this.$type.decodeDelimited(_0x16d84c);
        };
        _0x1f8f92.verify = function (_0x3f9d43) {
          return this.$type.verify(_0x3f9d43);
        };
        _0x1f8f92.fromObject = function (_0x3ddab9) {
          return this.$type.fromObject(_0x3ddab9);
        };
        _0x1f8f92.toObject = function (_0x369f2a, _0x5a4871) {
          return this.$type.toObject(_0x369f2a, _0x5a4871);
        };
        _0x1f8f92.prototype.toJSON = function () {
          return this.$type.toObject(this, _0x47bf4b.toJSONOptions);
        };
        _0xc8d5b5.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js", function (_0x5da078, _0x15daee, _0x3ab01e, _0x405837, _0x27adeb) {
        _0x3ab01e.exports = function (_0x11997c) {
          var _0x1bf641 = _0xae41a3.codegen(['r', 'l'], _0x11997c.name + '$decode')("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (_0x11997c.fieldsArray.filter(function (_0x2ac6e2) {
            return _0x2ac6e2.map;
          }).length ? ",k,value" : ''))("while(r.pos<c){")("var t=r.uint32()");
          if (_0x11997c.group) {
            _0x1bf641("if((t&7)===4)")("break");
          }
          _0x1bf641('switch(t>>>3){');
          for (var _0x1d2a62 = 0x0; _0x1d2a62 < _0x11997c.fieldsArray.length; ++_0x1d2a62) {
            var _0x468519 = _0x11997c._fieldsArray[_0x1d2a62].resolve();
            var _0x5dfcf3 = _0x468519.resolvedType instanceof _0x5dd527 ? 'int32' : _0x468519.type;
            var _0x357ad3 = 'm' + _0xae41a3.safeProp(_0x468519.name);
            _0x1bf641("case %i:", _0x468519.id);
            if (_0x468519.map) {
              _0x1bf641('if(%s===util.emptyObject)', _0x357ad3)("%s={}", _0x357ad3)("var c2 = r.uint32()+r.pos");
              if (undefined !== _0x3cc136.defaults[_0x468519.keyType]) {
                _0x1bf641('k=%j', _0x3cc136.defaults[_0x468519.keyType]);
              } else {
                _0x1bf641("k=null");
              }
              if (undefined !== _0x3cc136.defaults[_0x5dfcf3]) {
                _0x1bf641("value=%j", _0x3cc136.defaults[_0x5dfcf3]);
              } else {
                _0x1bf641("value=null");
              }
              _0x1bf641("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", _0x468519.keyType)("case 2:");
              if (undefined === _0x3cc136.basic[_0x5dfcf3]) {
                _0x1bf641('value=types[%i].decode(r,r.uint32())', _0x1d2a62);
              } else {
                _0x1bf641("value=r.%s()", _0x5dfcf3);
              }
              _0x1bf641('break')("default:")("r.skipType(tag2&7)")("break")('}')('}');
              if (undefined !== _0x3cc136.long[_0x468519.keyType]) {
                _0x1bf641("%s[typeof k===\"object\"?util.longToHash(k):k]=value", _0x357ad3);
              } else {
                _0x1bf641('%s[k]=value', _0x357ad3);
              }
            } else if (_0x468519.repeated) {
              _0x1bf641("if(!(%s&&%s.length))", _0x357ad3, _0x357ad3)("%s=[]", _0x357ad3);
              if (undefined !== _0x3cc136.packed[_0x5dfcf3]) {
                _0x1bf641("if((t&7)===2){")("var c2=r.uint32()+r.pos")('while(r.pos<c2)')('%s.push(r.%s())', _0x357ad3, _0x5dfcf3)("}else");
              }
              if (undefined === _0x3cc136.basic[_0x5dfcf3]) {
                _0x1bf641(_0x468519.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", _0x357ad3, _0x1d2a62);
              } else {
                _0x1bf641("%s.push(r.%s())", _0x357ad3, _0x5dfcf3);
              }
            } else if (undefined === _0x3cc136.basic[_0x5dfcf3]) {
              _0x1bf641(_0x468519.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", _0x357ad3, _0x1d2a62);
            } else {
              _0x1bf641('%s=r.%s()', _0x357ad3, _0x5dfcf3);
            }
            _0x1bf641("break");
          }
          _0x1bf641("default:")("r.skipType(t&7)")('break')('}')('}');
          for (_0x1d2a62 = 0x0; _0x1d2a62 < _0x11997c._fieldsArray.length; ++_0x1d2a62) {
            var _0x2f8e38 = _0x11997c._fieldsArray[_0x1d2a62];
            if (_0x2f8e38.required) {
              _0x1bf641("if(!m.hasOwnProperty(%j))", _0x2f8e38.name)("throw util.ProtocolError(%j,{instance:m})", "missing required '" + _0x2f8e38.name + "'");
            }
          }
          return _0x1bf641("return m");
        };
        var _0x5dd527 = _0x15daee("./enum");
        var _0x3cc136 = _0x15daee('./types');
        var _0xae41a3 = _0x15daee("./util");
        _0x3ab01e.exports;
      }, function () {
        return {
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/types.js',
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x557447.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js', function (_0x3a11a2, _0x89cad, _0x3a9ca6, _0x5e7bca, _0x3a7b25) {
        _0x3a9ca6.exports = function (_0x54d516) {
          var _0x1ec5db = _0x13dfe1.codegen(['m'], _0x54d516.name + "$verify")("if(typeof m!==\"object\"||m===null)")("return%j", "object expected");
          var _0x152807 = _0x54d516.oneofsArray;
          var _0xe95307 = {};
          if (_0x152807.length) {
            _0x1ec5db("var p={}");
          }
          for (var _0x266fee = 0x0; _0x266fee < _0x54d516.fieldsArray.length; ++_0x266fee) {
            var _0x5c5d01 = _0x54d516._fieldsArray[_0x266fee].resolve();
            var _0x85d2ed = 'm' + _0x13dfe1.safeProp(_0x5c5d01.name);
            if (_0x5c5d01.optional) {
              _0x1ec5db("if(%s!=null&&m.hasOwnProperty(%j)){", _0x85d2ed, _0x5c5d01.name);
            }
            if (_0x5c5d01.map) {
              _0x1ec5db("if(!util.isObject(%s))", _0x85d2ed)("return%j", _0x5c5d01.name + ": " + _0x2253(0x437) + (_0x5c5d01.repeated && 'array' !== _0x2253(0x437) ? '[]' : _0x5c5d01.map && false ? "{k:" + _0x5c5d01.keyType + '}' : '') + " expected")("var k=Object.keys(%s)", _0x85d2ed)("for(var i=0;i<k.length;++i){");
              _0xdd957c(_0x1ec5db, _0x5c5d01, "k[i]");
              _0x2d29c5(_0x1ec5db, _0x5c5d01, _0x266fee, _0x85d2ed + "[k[i]]")('}');
            } else {
              if (_0x5c5d01.repeated) {
                _0x1ec5db("if(!Array.isArray(%s))", _0x85d2ed)("return%j", _0x5c5d01.name + ": " + _0x2253(0x50b) + (_0x5c5d01.repeated && 'array' !== _0x2253(0x50b) ? '[]' : _0x5c5d01.map && true ? "{k:" + _0x5c5d01.keyType + '}' : '') + " expected")("for(var i=0;i<%s.length;++i){", _0x85d2ed);
                _0x2d29c5(_0x1ec5db, _0x5c5d01, _0x266fee, _0x85d2ed + "[i]")('}');
              } else {
                if (_0x5c5d01.partOf) {
                  var _0x149649 = _0x13dfe1.safeProp(_0x5c5d01.partOf.name);
                  if (0x1 === _0xe95307[_0x5c5d01.partOf.name]) {
                    _0x1ec5db('if(p%s===1)', _0x149649)('return%j', _0x5c5d01.partOf.name + ": multiple values");
                  }
                  _0xe95307[_0x5c5d01.partOf.name] = 0x1;
                  _0x1ec5db("p%s=1", _0x149649);
                }
                _0x2d29c5(_0x1ec5db, _0x5c5d01, _0x266fee, _0x85d2ed);
              }
            }
            if (_0x5c5d01.optional) {
              _0x1ec5db('}');
            }
          }
          return _0x1ec5db("return null");
        };
        var _0xe03578 = _0x89cad('./enum');
        var _0x13dfe1 = _0x89cad("./util");
        function _0x2d29c5(_0x278d3d, _0x52faea, _0x44c241, _0x5d07b8) {
          if (_0x52faea.resolvedType) {
            if (_0x52faea.resolvedType instanceof _0xe03578) {
              _0x278d3d("switch(%s){", _0x5d07b8)("default:")("return%j", _0x52faea.name + ": " + _0x2253(0x54c) + (_0x52faea.repeated && 'array' !== _0x2253(0x54c) ? '[]' : _0x52faea.map && true ? "{k:" + _0x52faea.keyType + '}' : '') + " expected");
              var _0x38238c = Object.keys(_0x52faea.resolvedType.values);
              for (var _0x146e06 = 0x0; _0x146e06 < _0x38238c.length; ++_0x146e06) {
                _0x278d3d("case %i:", _0x52faea.resolvedType.values[_0x38238c[_0x146e06]]);
              }
              _0x278d3d("break")('}');
            } else {
              _0x278d3d('{')("var e=types[%i].verify(%s);", _0x44c241, _0x5d07b8)("if(e)")("return%j+e", _0x52faea.name + '.')('}');
            }
          } else {
            switch (_0x52faea.type) {
              case "int32":
              case "uint32":
              case 'sint32':
              case "fixed32":
              case "sfixed32":
                _0x278d3d('if(!util.isInteger(%s))', _0x5d07b8)("return%j", _0x52faea.name + ": " + _0x2253(0x57d) + (_0x52faea.repeated && 'array' !== _0x2253(0x57d) ? '[]' : _0x52faea.map && true ? "{k:" + _0x52faea.keyType + '}' : '') + " expected");
                break;
              case "int64":
              case "uint64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                _0x278d3d("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", _0x5d07b8, _0x5d07b8, _0x5d07b8, _0x5d07b8)("return%j", _0x52faea.name + ": " + _0x2253(0x295) + (_0x52faea.repeated && 'array' !== _0x2253(0x295) ? '[]' : _0x52faea.map && true ? "{k:" + _0x52faea.keyType + '}' : '') + " expected");
                break;
              case "float":
              case "double":
                _0x278d3d("if(typeof %s!==\"number\")", _0x5d07b8)('return%j', _0x52faea.name + ": " + _0x2253(0x52d) + (_0x52faea.repeated && 'array' !== _0x2253(0x52d) ? '[]' : _0x52faea.map && true ? "{k:" + _0x52faea.keyType + '}' : '') + " expected");
                break;
              case "bool":
                _0x278d3d("if(typeof %s!==\"boolean\")", _0x5d07b8)('return%j', _0x52faea.name + ": " + _0x2253(0x671) + (_0x52faea.repeated && 'array' !== _0x2253(0x671) ? '[]' : _0x52faea.map && true ? "{k:" + _0x52faea.keyType + '}' : '') + " expected");
                break;
              case "string":
                _0x278d3d("if(!util.isString(%s))", _0x5d07b8)("return%j", _0x52faea.name + ": " + 'string' + (_0x52faea.repeated && true ? '[]' : _0x52faea.map && true ? "{k:" + _0x52faea.keyType + '}' : '') + " expected");
                break;
              case 'bytes':
                _0x278d3d("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", _0x5d07b8, _0x5d07b8, _0x5d07b8)("return%j", _0x52faea.name + ": " + _0x2253(0x3a2) + (_0x52faea.repeated && 'array' !== _0x2253(0x3a2) ? '[]' : _0x52faea.map && true ? "{k:" + _0x52faea.keyType + '}' : '') + " expected");
            }
          }
          return _0x278d3d;
        }
        function _0xdd957c(_0x4ec8dc, _0x3fb6fe, _0x3120de) {
          switch (_0x3fb6fe.keyType) {
            case "int32":
            case 'uint32':
            case "sint32":
            case "fixed32":
            case 'sfixed32':
              _0x4ec8dc("if(!util.key32Re.test(%s))", _0x3120de)('return%j', _0x3fb6fe.name + ": " + _0x2253(0x84c) + (_0x3fb6fe.repeated && 'array' !== _0x2253(0x84c) ? '[]' : _0x3fb6fe.map && true ? "{k:" + _0x3fb6fe.keyType + '}' : '') + " expected");
              break;
            case "int64":
            case "uint64":
            case 'sint64':
            case "fixed64":
            case 'sfixed64':
              _0x4ec8dc("if(!util.key64Re.test(%s))", _0x3120de)("return%j", _0x3fb6fe.name + ": " + _0x2253(0x63b) + (_0x3fb6fe.repeated && 'array' !== _0x2253(0x63b) ? '[]' : _0x3fb6fe.map && true ? "{k:" + _0x3fb6fe.keyType + '}' : '') + " expected");
              break;
            case "bool":
              _0x4ec8dc("if(!util.key2Re.test(%s))", _0x3120de)("return%j", _0x3fb6fe.name + ": " + "boolean key" + (_0x3fb6fe.repeated && true ? '[]' : _0x3fb6fe.map && true ? "{k:" + _0x3fb6fe.keyType + '}' : '') + " expected");
          }
          return _0x4ec8dc;
        }
        _0x3a9ca6.exports;
      }, function () {
        return {
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/converter.js", function (_0x53a859, _0x1cf048, _0x26c92d, _0x3d2dc7, _0x3bc02d) {
        var _0x4ef632 = _0x1cf048('./enum');
        var _0x43cf15 = _0x1cf048("./util");
        function _0x471ad9(_0x59482a, _0x59c3c3, _0x5866cb, _0x1e92d1) {
          if (_0x59c3c3.resolvedType) {
            if (_0x59c3c3.resolvedType instanceof _0x4ef632) {
              _0x59482a("switch(d%s){", _0x1e92d1);
              var _0x3b637e = _0x59c3c3.resolvedType.values;
              var _0x1c8233 = Object.keys(_0x3b637e);
              for (var _0x1e2a1e = 0x0; _0x1e2a1e < _0x1c8233.length; ++_0x1e2a1e) {
                if (_0x59c3c3.repeated && _0x3b637e[_0x1c8233[_0x1e2a1e]] === _0x59c3c3.typeDefault) {
                  _0x59482a("default:");
                }
                _0x59482a("case%j:", _0x1c8233[_0x1e2a1e])("case %i:", _0x3b637e[_0x1c8233[_0x1e2a1e]])("m%s=%j", _0x1e92d1, _0x3b637e[_0x1c8233[_0x1e2a1e]])("break");
              }
              _0x59482a('}');
            } else {
              _0x59482a("if(typeof d%s!==\"object\")", _0x1e92d1)("throw TypeError(%j)", _0x59c3c3.fullName + ": object expected")('m%s=types[%i].fromObject(d%s)', _0x1e92d1, _0x5866cb, _0x1e92d1);
            }
          } else {
            var _0x2c0783 = false;
            switch (_0x59c3c3.type) {
              case 'double':
              case "float":
                _0x59482a("m%s=Number(d%s)", _0x1e92d1, _0x1e92d1);
                break;
              case "uint32":
              case 'fixed32':
                _0x59482a('m%s=d%s>>>0', _0x1e92d1, _0x1e92d1);
                break;
              case "int32":
              case "sint32":
              case "sfixed32":
                _0x59482a("m%s=d%s|0", _0x1e92d1, _0x1e92d1);
                break;
              case "uint64":
                _0x2c0783 = true;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                _0x59482a("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", _0x1e92d1, _0x1e92d1, _0x2c0783)("else if(typeof d%s===\"string\")", _0x1e92d1)('m%s=parseInt(d%s,10)', _0x1e92d1, _0x1e92d1)("else if(typeof d%s===\"number\")", _0x1e92d1)('m%s=d%s', _0x1e92d1, _0x1e92d1)("else if(typeof d%s===\"object\")", _0x1e92d1)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", _0x1e92d1, _0x1e92d1, _0x1e92d1, _0x2c0783 ? "true" : '');
                break;
              case 'bytes':
                _0x59482a("if(typeof d%s===\"string\")", _0x1e92d1)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", _0x1e92d1, _0x1e92d1, _0x1e92d1)("else if(d%s.length)", _0x1e92d1)('m%s=d%s', _0x1e92d1, _0x1e92d1);
                break;
              case "string":
                _0x59482a("m%s=String(d%s)", _0x1e92d1, _0x1e92d1);
                break;
              case 'bool':
                _0x59482a('m%s=Boolean(d%s)', _0x1e92d1, _0x1e92d1);
            }
          }
          return _0x59482a;
        }
        function _0x6414c3(_0x3c21c7, _0x4d4422, _0x1c3e90, _0x3c8805) {
          if (_0x4d4422.resolvedType) {
            if (_0x4d4422.resolvedType instanceof _0x4ef632) {
              _0x3c21c7("d%s=o.enums===String?types[%i].values[m%s]:m%s", _0x3c8805, _0x1c3e90, _0x3c8805, _0x3c8805);
            } else {
              _0x3c21c7("d%s=types[%i].toObject(m%s,o)", _0x3c8805, _0x1c3e90, _0x3c8805);
            }
          } else {
            var _0x4a024d = false;
            switch (_0x4d4422.type) {
              case 'double':
              case "float":
                _0x3c21c7("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", _0x3c8805, _0x3c8805, _0x3c8805, _0x3c8805);
                break;
              case 'uint64':
                _0x4a024d = true;
              case 'int64':
              case "sint64":
              case "fixed64":
              case "sfixed64":
                _0x3c21c7("if(typeof m%s===\"number\")", _0x3c8805)("d%s=o.longs===String?String(m%s):m%s", _0x3c8805, _0x3c8805, _0x3c8805)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", _0x3c8805, _0x3c8805, _0x3c8805, _0x3c8805, _0x4a024d ? 'true' : '', _0x3c8805);
                break;
              case "bytes":
                _0x3c21c7("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", _0x3c8805, _0x3c8805, _0x3c8805, _0x3c8805, _0x3c8805);
                break;
              default:
                _0x3c21c7("d%s=m%s", _0x3c8805, _0x3c8805);
            }
          }
          return _0x3c21c7;
        }
        _0x53a859.fromObject = function (_0x528211) {
          var _0x49bb89 = _0x528211.fieldsArray;
          var _0x586f8c = _0x43cf15.codegen(['d'], _0x528211.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
          if (!_0x49bb89.length) {
            return _0x586f8c("return new this.ctor");
          }
          _0x586f8c("var m=new this.ctor");
          for (var _0x1192f1 = 0x0; _0x1192f1 < _0x49bb89.length; ++_0x1192f1) {
            var _0x20a324 = _0x49bb89[_0x1192f1].resolve();
            var _0x5be857 = _0x43cf15.safeProp(_0x20a324.name);
            if (_0x20a324.map) {
              _0x586f8c("if(d%s){", _0x5be857)("if(typeof d%s!==\"object\")", _0x5be857)("throw TypeError(%j)", _0x20a324.fullName + ": object expected")('m%s={}', _0x5be857)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", _0x5be857);
              _0x471ad9(_0x586f8c, _0x20a324, _0x1192f1, _0x5be857 + "[ks[i]]")('}')('}');
            } else if (_0x20a324.repeated) {
              _0x586f8c("if(d%s){", _0x5be857)('if(!Array.isArray(d%s))', _0x5be857)("throw TypeError(%j)", _0x20a324.fullName + ": array expected")('m%s=[]', _0x5be857)("for(var i=0;i<d%s.length;++i){", _0x5be857);
              _0x471ad9(_0x586f8c, _0x20a324, _0x1192f1, _0x5be857 + "[i]")('}')('}');
            } else {
              if (!(_0x20a324.resolvedType instanceof _0x4ef632)) {
                _0x586f8c('if(d%s!=null){', _0x5be857);
              }
              _0x471ad9(_0x586f8c, _0x20a324, _0x1192f1, _0x5be857);
              if (!(_0x20a324.resolvedType instanceof _0x4ef632)) {
                _0x586f8c('}');
              }
            }
          }
          return _0x586f8c("return m");
        };
        _0x53a859.toObject = function (_0x938098) {
          var _0x2d9599 = _0x938098.fieldsArray.slice().sort(_0x43cf15.compareFieldsById);
          if (!_0x2d9599.length) {
            return _0x43cf15.codegen()("return {}");
          }
          var _0x147b2f = _0x43cf15.codegen(['m', 'o'], _0x938098.name + '$toObject')("if(!o)")("o={}")("var d={}");
          var _0x16eedf = [];
          var _0x5ac8f1 = [];
          var _0x163aed = [];
          for (var _0x5dd971 = 0x0; _0x5dd971 < _0x2d9599.length; ++_0x5dd971) {
            if (!_0x2d9599[_0x5dd971].partOf) {
              (_0x2d9599[_0x5dd971].resolve().repeated ? _0x16eedf : _0x2d9599[_0x5dd971].map ? _0x5ac8f1 : _0x163aed).push(_0x2d9599[_0x5dd971]);
            }
          }
          if (_0x16eedf.length) {
            _0x147b2f("if(o.arrays||o.defaults){");
            for (_0x5dd971 = 0x0; _0x5dd971 < _0x16eedf.length; ++_0x5dd971) {
              _0x147b2f("d%s=[]", _0x43cf15.safeProp(_0x16eedf[_0x5dd971].name));
            }
            _0x147b2f('}');
          }
          if (_0x5ac8f1.length) {
            _0x147b2f("if(o.objects||o.defaults){");
            for (_0x5dd971 = 0x0; _0x5dd971 < _0x5ac8f1.length; ++_0x5dd971) {
              _0x147b2f('d%s={}', _0x43cf15.safeProp(_0x5ac8f1[_0x5dd971].name));
            }
            _0x147b2f('}');
          }
          if (_0x163aed.length) {
            _0x147b2f("if(o.defaults){");
            for (_0x5dd971 = 0x0; _0x5dd971 < _0x163aed.length; ++_0x5dd971) {
              var _0x1178af = _0x163aed[_0x5dd971];
              var _0x4ccd2b = _0x43cf15.safeProp(_0x1178af.name);
              if (_0x1178af.resolvedType instanceof _0x4ef632) {
                _0x147b2f("d%s=o.enums===String?%j:%j", _0x4ccd2b, _0x1178af.resolvedType.valuesById[_0x1178af.typeDefault], _0x1178af.typeDefault);
              } else {
                if (_0x1178af.long) {
                  _0x147b2f('if(util.Long){')("var n=new util.Long(%i,%i,%j)", _0x1178af.typeDefault.low, _0x1178af.typeDefault.high, _0x1178af.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", _0x4ccd2b)('}else')('d%s=o.longs===String?%j:%i', _0x4ccd2b, _0x1178af.typeDefault.toString(), _0x1178af.typeDefault.toNumber());
                } else {
                  if (_0x1178af.bytes) {
                    var _0x3cd82a = '[' + Array.prototype.slice.call(_0x1178af.typeDefault).join(',') + ']';
                    _0x147b2f("if(o.bytes===String)d%s=%j", _0x4ccd2b, String.fromCharCode.apply(String, _0x1178af.typeDefault))('else{')("d%s=%s", _0x4ccd2b, _0x3cd82a)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", _0x4ccd2b, _0x4ccd2b)('}');
                  } else {
                    _0x147b2f("d%s=%j", _0x4ccd2b, _0x1178af.typeDefault);
                  }
                }
              }
            }
            _0x147b2f('}');
          }
          var _0xf36ce1 = false;
          for (_0x5dd971 = 0x0; _0x5dd971 < _0x2d9599.length; ++_0x5dd971) {
            _0x1178af = _0x2d9599[_0x5dd971];
            var _0x17bd5a = _0x938098._fieldsArray.indexOf(_0x1178af);
            _0x4ccd2b = _0x43cf15.safeProp(_0x1178af.name);
            if (_0x1178af.map) {
              if (!_0xf36ce1) {
                _0xf36ce1 = true;
                _0x147b2f("var ks2");
              }
              _0x147b2f("if(m%s&&(ks2=Object.keys(m%s)).length){", _0x4ccd2b, _0x4ccd2b)("d%s={}", _0x4ccd2b)("for(var j=0;j<ks2.length;++j){");
              _0x6414c3(_0x147b2f, _0x1178af, _0x17bd5a, _0x4ccd2b + "[ks2[j]]")('}');
            } else if (_0x1178af.repeated) {
              _0x147b2f("if(m%s&&m%s.length){", _0x4ccd2b, _0x4ccd2b)("d%s=[]", _0x4ccd2b)("for(var j=0;j<m%s.length;++j){", _0x4ccd2b);
              _0x6414c3(_0x147b2f, _0x1178af, _0x17bd5a, _0x4ccd2b + "[j]")('}');
            } else {
              _0x147b2f("if(m%s!=null&&m.hasOwnProperty(%j)){", _0x4ccd2b, _0x1178af.name);
              _0x6414c3(_0x147b2f, _0x1178af, _0x17bd5a, _0x4ccd2b);
              if (_0x1178af.partOf) {
                _0x147b2f('if(o.oneofs)')("d%s=%j", _0x43cf15.safeProp(_0x1178af.partOf.name), _0x1178af.name);
              }
            }
            _0x147b2f('}');
          }
          return _0x147b2f("return d");
        };
        _0x26c92d.exports;
      }, function () {
        return {
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js", function (_0x4cf2dd, _0x3b6f21, _0x1b9328, _0x1b7981, _0x1e19f2) {
        var _0x1c8cf2 = _0x3b6f21("./message");
        _0x4cf2dd['.google.protobuf.Any'] = {
          'fromObject': function (_0x2c2601) {
            if (_0x2c2601 && _0x2c2601["@type"]) {
              var _0x3cfdfb = _0x2c2601["@type"].substring(_0x2c2601["@type"].lastIndexOf('/') + 0x1);
              var _0x75021c = this.lookup(_0x3cfdfb);
              if (_0x75021c) {
                var _0x50c086 = '.' === _0x2c2601["@type"].charAt(0x0) ? _0x2c2601["@type"].substr(0x1) : _0x2c2601['@type'];
                if (-0x1 === _0x50c086.indexOf('/')) {
                  _0x50c086 = '/' + _0x50c086;
                }
                return this.create({
                  'type_url': _0x50c086,
                  'value': _0x75021c.encode(_0x75021c.fromObject(_0x2c2601)).finish()
                });
              }
            }
            return this.fromObject(_0x2c2601);
          },
          'toObject': function (_0x53c547, _0x58f0fb) {
            var _0x208cd2 = '';
            var _0x4e0cff = '';
            if (_0x58f0fb && _0x58f0fb.json && _0x53c547.type_url && _0x53c547.value) {
              _0x4e0cff = _0x53c547.type_url.substring(_0x53c547.type_url.lastIndexOf('/') + 0x1);
              _0x208cd2 = _0x53c547.type_url.substring(0x0, _0x53c547.type_url.lastIndexOf('/') + 0x1);
              var _0x3491ac = this.lookup(_0x4e0cff);
              if (_0x3491ac) {
                _0x53c547 = _0x3491ac.decode(_0x53c547.value);
              }
            }
            if (!(_0x53c547 instanceof this.ctor) && _0x53c547 instanceof _0x1c8cf2) {
              var _0x252b5f = _0x53c547.$type.toObject(_0x53c547, _0x58f0fb);
              if ('' === _0x208cd2) {
                _0x208cd2 = "type.googleapis.com/";
              }
              _0x4e0cff = _0x208cd2 + ('.' === _0x53c547.$type.fullName[0x0] ? _0x53c547.$type.fullName.substr(0x1) : _0x53c547.$type.fullName);
              _0x252b5f['@type'] = _0x4e0cff;
              return _0x252b5f;
            }
            return this.toObject(_0x53c547, _0x58f0fb);
          }
        };
        _0x1b9328.exports;
      }, function () {
        return {
          './message': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/message.js'
        };
      });
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/type.js", function (_0x2a66c8, _0x206a7a, _0x5f5c1e, _0x30005d, _0x206c16) {
        _0x5f5c1e.exports = _0x2f2512;
        var _0x46016b = _0x206a7a("./namespace");
        ((_0x2f2512.prototype = Object.create(_0x46016b.prototype)).constructor = _0x2f2512).className = "Type";
        var _0x5273ff = _0x206a7a("./enum");
        var _0x296081 = _0x206a7a("./oneof");
        var _0xd5e484 = _0x206a7a("./field");
        var _0x2edbcb = _0x206a7a("./mapfield");
        var _0x5ba855 = _0x206a7a("./service");
        var _0x15c697 = _0x206a7a("./message");
        var _0x7d7dde = _0x206a7a("./reader");
        var _0x47cadc = _0x206a7a("./writer");
        var _0x23d8cf = _0x206a7a('./util');
        var _0x52ddd9 = _0x206a7a("./encoder");
        var _0x1edc40 = _0x206a7a("./decoder");
        var _0x268c72 = _0x206a7a("./verifier");
        var _0x50db01 = _0x206a7a("./converter");
        var _0x5e4fdb = _0x206a7a("./wrappers");
        function _0x2f2512(_0x224d66, _0x39876c) {
          _0x46016b.call(this, _0x224d66, _0x39876c);
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
        function _0x1c18a6(_0xdb60b1) {
          _0xdb60b1._fieldsById = _0xdb60b1._fieldsArray = _0xdb60b1._oneofsArray = null;
          delete _0xdb60b1.encode;
          delete _0xdb60b1.decode;
          delete _0xdb60b1.verify;
          return _0xdb60b1;
        }
        Object.defineProperties(_0x2f2512.prototype, {
          'fieldsById': {
            'get': function () {
              if (this._fieldsById) {
                return this._fieldsById;
              }
              this._fieldsById = {};
              var _0x4dd127 = Object.keys(this.fields);
              for (var _0x2940ed = 0x0; _0x2940ed < _0x4dd127.length; ++_0x2940ed) {
                var _0x376ebb = this.fields[_0x4dd127[_0x2940ed]];
                var _0x14f41a = _0x376ebb.id;
                if (this._fieldsById[_0x14f41a]) {
                  throw Error("duplicate id " + _0x14f41a + " in " + this);
                }
                this._fieldsById[_0x14f41a] = _0x376ebb;
              }
              return this._fieldsById;
            }
          },
          'fieldsArray': {
            'get': function () {
              return this._fieldsArray || (this._fieldsArray = _0x23d8cf.toArray(this.fields));
            }
          },
          'oneofsArray': {
            'get': function () {
              return this._oneofsArray || (this._oneofsArray = _0x23d8cf.toArray(this.oneofs));
            }
          },
          'ctor': {
            'get': function () {
              return this._ctor || (this.ctor = _0x2f2512.generateConstructor(this)());
            },
            'set': function (_0x302b72) {
              var _0x49559f = _0x302b72.prototype;
              if (!(_0x49559f instanceof _0x15c697)) {
                (_0x302b72.prototype = new _0x15c697()).constructor = _0x302b72;
                _0x23d8cf.merge(_0x302b72.prototype, _0x49559f);
              }
              _0x302b72.$type = _0x302b72.prototype.$type = this;
              _0x23d8cf.merge(_0x302b72, _0x15c697, true);
              this._ctor = _0x302b72;
              for (var _0x5d4244 = 0x0; _0x5d4244 < this.fieldsArray.length; ++_0x5d4244) {
                this._fieldsArray[_0x5d4244].resolve();
              }
              var _0x39cfa7 = {};
              for (_0x5d4244 = 0x0; _0x5d4244 < this.oneofsArray.length; ++_0x5d4244) {
                _0x39cfa7[this._oneofsArray[_0x5d4244].resolve().name] = {
                  'get': _0x23d8cf.oneOfGetter(this._oneofsArray[_0x5d4244].oneof),
                  'set': _0x23d8cf.oneOfSetter(this._oneofsArray[_0x5d4244].oneof)
                };
              }
              if (_0x5d4244) {
                Object.defineProperties(_0x302b72.prototype, _0x39cfa7);
              }
            }
          }
        });
        _0x2f2512.generateConstructor = function (_0x26767d) {
          var _0x56e096;
          var _0x47c97f = _0x23d8cf.codegen(['p'], _0x26767d.name);
          for (var _0x230426 = 0x0; _0x230426 < _0x26767d.fieldsArray.length; ++_0x230426) {
            if ((_0x56e096 = _0x26767d._fieldsArray[_0x230426]).map) {
              _0x47c97f('this%s={}', _0x23d8cf.safeProp(_0x56e096.name));
            } else if (_0x56e096.repeated) {
              _0x47c97f("this%s=[]", _0x23d8cf.safeProp(_0x56e096.name));
            }
          }
          return _0x47c97f("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
        };
        _0x2f2512.fromJSON = function (_0x4c1b7d, _0x3e4cae) {
          var _0x5d9528 = new _0x2f2512(_0x4c1b7d, _0x3e4cae.options);
          _0x5d9528.extensions = _0x3e4cae.extensions;
          _0x5d9528.reserved = _0x3e4cae.reserved;
          var _0x3093a6 = Object.keys(_0x3e4cae.fields);
          for (var _0x32933e = 0x0; _0x32933e < _0x3093a6.length; ++_0x32933e) {
            _0x5d9528.add((undefined !== _0x3e4cae.fields[_0x3093a6[_0x32933e]].keyType ? _0x2edbcb.fromJSON : _0xd5e484.fromJSON)(_0x3093a6[_0x32933e], _0x3e4cae.fields[_0x3093a6[_0x32933e]]));
          }
          if (_0x3e4cae.oneofs) {
            _0x3093a6 = Object.keys(_0x3e4cae.oneofs);
            for (_0x32933e = 0x0; _0x32933e < _0x3093a6.length; ++_0x32933e) {
              _0x5d9528.add(_0x296081.fromJSON(_0x3093a6[_0x32933e], _0x3e4cae.oneofs[_0x3093a6[_0x32933e]]));
            }
          }
          if (_0x3e4cae.nested) {
            _0x3093a6 = Object.keys(_0x3e4cae.nested);
            for (_0x32933e = 0x0; _0x32933e < _0x3093a6.length; ++_0x32933e) {
              var _0x2447ad = _0x3e4cae.nested[_0x3093a6[_0x32933e]];
              _0x5d9528.add((undefined !== _0x2447ad.id ? _0xd5e484.fromJSON : undefined !== _0x2447ad.fields ? _0x2f2512.fromJSON : undefined !== _0x2447ad.values ? _0x5273ff.fromJSON : undefined !== _0x2447ad.methods ? _0x5ba855.fromJSON : _0x46016b.fromJSON)(_0x3093a6[_0x32933e], _0x2447ad));
            }
          }
          if (_0x3e4cae.extensions && _0x3e4cae.extensions.length) {
            _0x5d9528.extensions = _0x3e4cae.extensions;
          }
          if (_0x3e4cae.reserved && _0x3e4cae.reserved.length) {
            _0x5d9528.reserved = _0x3e4cae.reserved;
          }
          if (_0x3e4cae.group) {
            _0x5d9528.group = true;
          }
          if (_0x3e4cae.comment) {
            _0x5d9528.comment = _0x3e4cae.comment;
          }
          return _0x5d9528;
        };
        _0x2f2512.prototype.toJSON = function (_0xd9856d) {
          var _0x259776 = _0x46016b.prototype.toJSON.call(this, _0xd9856d);
          var _0x3584d1 = !!_0xd9856d && Boolean(_0xd9856d.keepComments);
          return _0x23d8cf.toObject(["options", _0x259776 && _0x259776.options || undefined, "oneofs", _0x46016b.arrayToJSON(this.oneofsArray, _0xd9856d), "fields", _0x46016b.arrayToJSON(this.fieldsArray.filter(function (_0x129d11) {
            return !_0x129d11.declaringField;
          }), _0xd9856d) || {}, 'extensions', this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, 'group', this.group || undefined, "nested", _0x259776 && _0x259776.nested || undefined, "comment", _0x3584d1 ? this.comment : undefined]);
        };
        _0x2f2512.prototype.resolveAll = function () {
          var _0x4c0196 = this.fieldsArray;
          for (var _0x37a593 = 0x0; _0x37a593 < _0x4c0196.length;) {
            _0x4c0196[_0x37a593++].resolve();
          }
          var _0x596800 = this.oneofsArray;
          for (_0x37a593 = 0x0; _0x37a593 < _0x596800.length;) {
            _0x596800[_0x37a593++].resolve();
          }
          return _0x46016b.prototype.resolveAll.call(this);
        };
        _0x2f2512.prototype.get = function (_0x20295b) {
          return this.fields[_0x20295b] || this.oneofs && this.oneofs[_0x20295b] || this.nested && this.nested[_0x20295b] || null;
        };
        _0x2f2512.prototype.add = function (_0x2699c8) {
          if (this.get(_0x2699c8.name)) {
            throw Error("duplicate name '" + _0x2699c8.name + "' in " + this);
          }
          if (_0x2699c8 instanceof _0xd5e484 && undefined === _0x2699c8.extend) {
            if (this._fieldsById ? this._fieldsById[_0x2699c8.id] : this.fieldsById[_0x2699c8.id]) {
              throw Error("duplicate id " + _0x2699c8.id + " in " + this);
            }
            if (this.isReservedId(_0x2699c8.id)) {
              throw Error("id " + _0x2699c8.id + " is reserved in " + this);
            }
            if (this.isReservedName(_0x2699c8.name)) {
              throw Error("name '" + _0x2699c8.name + "' is reserved in " + this);
            }
            if (_0x2699c8.parent) {
              _0x2699c8.parent.remove(_0x2699c8);
            }
            this.fields[_0x2699c8.name] = _0x2699c8;
            _0x2699c8.message = this;
            _0x2699c8.onAdd(this);
            return _0x1c18a6(this);
          }
          return _0x2699c8 instanceof _0x296081 ? (this.oneofs || (this.oneofs = {}), this.oneofs[_0x2699c8.name] = _0x2699c8, _0x2699c8.onAdd(this), _0x1c18a6(this)) : _0x46016b.prototype.add.call(this, _0x2699c8);
        };
        _0x2f2512.prototype.remove = function (_0x57a5c1) {
          if (_0x57a5c1 instanceof _0xd5e484 && undefined === _0x57a5c1.extend) {
            if (!this.fields || this.fields[_0x57a5c1.name] !== _0x57a5c1) {
              throw Error(_0x57a5c1 + " is not a member of " + this);
            }
            delete this.fields[_0x57a5c1.name];
            _0x57a5c1.parent = null;
            _0x57a5c1.onRemove(this);
            return _0x1c18a6(this);
          }
          if (_0x57a5c1 instanceof _0x296081) {
            if (!this.oneofs || this.oneofs[_0x57a5c1.name] !== _0x57a5c1) {
              throw Error(_0x57a5c1 + " is not a member of " + this);
            }
            delete this.oneofs[_0x57a5c1.name];
            _0x57a5c1.parent = null;
            _0x57a5c1.onRemove(this);
            return _0x1c18a6(this);
          }
          return _0x46016b.prototype.remove.call(this, _0x57a5c1);
        };
        _0x2f2512.prototype.isReservedId = function (_0x27680d) {
          return _0x46016b.isReservedId(this.reserved, _0x27680d);
        };
        _0x2f2512.prototype.isReservedName = function (_0x10547a) {
          return _0x46016b.isReservedName(this.reserved, _0x10547a);
        };
        _0x2f2512.prototype.create = function (_0x137e68) {
          return new this.ctor(_0x137e68);
        };
        _0x2f2512.prototype.setup = function () {
          var _0x38fcff = this.fullName;
          var _0x2f5289 = [];
          for (var _0x4aebf3 = 0x0; _0x4aebf3 < this.fieldsArray.length; ++_0x4aebf3) {
            _0x2f5289.push(this._fieldsArray[_0x4aebf3].resolve().resolvedType);
          }
          this.encode = _0x52ddd9(this)({
            'Writer': _0x47cadc,
            'types': _0x2f5289,
            'util': _0x23d8cf
          });
          this.decode = _0x1edc40(this)({
            'Reader': _0x7d7dde,
            'types': _0x2f5289,
            'util': _0x23d8cf
          });
          this.verify = _0x268c72(this)({
            'types': _0x2f5289,
            'util': _0x23d8cf
          });
          this.fromObject = _0x50db01.fromObject(this)({
            'types': _0x2f5289,
            'util': _0x23d8cf
          });
          this.toObject = _0x50db01.toObject(this)({
            'types': _0x2f5289,
            'util': _0x23d8cf
          });
          var _0x19e61c = _0x5e4fdb[_0x38fcff];
          if (_0x19e61c) {
            var _0x33de84 = Object.create(this);
            _0x33de84.fromObject = this.fromObject;
            this.fromObject = _0x19e61c.fromObject.bind(_0x33de84);
            _0x33de84.toObject = this.toObject;
            this.toObject = _0x19e61c.toObject.bind(_0x33de84);
          }
          return this;
        };
        _0x2f2512.prototype.encode = function (_0x7520c2, _0x5e826a) {
          return this.setup().encode(_0x7520c2, _0x5e826a);
        };
        _0x2f2512.prototype.encodeDelimited = function (_0x4eedfb, _0x5e073c) {
          return this.encode(_0x4eedfb, _0x5e073c && _0x5e073c.len ? _0x5e073c.fork() : _0x5e073c).ldelim();
        };
        _0x2f2512.prototype.decode = function (_0xaeedb1, _0x234061) {
          return this.setup().decode(_0xaeedb1, _0x234061);
        };
        _0x2f2512.prototype.decodeDelimited = function (_0x3b310c) {
          if (!(_0x3b310c instanceof _0x7d7dde)) {
            _0x3b310c = _0x7d7dde.create(_0x3b310c);
          }
          return this.decode(_0x3b310c, _0x3b310c.uint32());
        };
        _0x2f2512.prototype.verify = function (_0x58e5c4) {
          return this.setup().verify(_0x58e5c4);
        };
        _0x2f2512.prototype.fromObject = function (_0x55f74b) {
          return this.setup().fromObject(_0x55f74b);
        };
        _0x2f2512.prototype.toObject = function (_0xd6d23, _0x44c6d4) {
          return this.setup().toObject(_0xd6d23, _0x44c6d4);
        };
        _0x2f2512.d = function (_0x21397d) {
          return function (_0x23425e) {
            _0x23d8cf.decorateType(_0x23425e, _0x21397d);
          };
        };
        _0x5f5c1e.exports;
      }, function () {
        return {
          './namespace': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './oneof': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './field': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './mapfield': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './service': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          './message': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/message.js',
          './reader': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './writer': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './encoder': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js',
          './decoder': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          './verifier': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js',
          './converter': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          './wrappers': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js"
        };
      });
      _0x557447.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/root.js', function (_0x50747d, _0x635244, _0x3fc095, _0x23798a, _0x1e6f65) {
        _0x3fc095.exports = _0x290ede;
        var _0x1d4917 = _0x635244("./namespace");
        ((_0x290ede.prototype = Object.create(_0x1d4917.prototype)).constructor = _0x290ede).className = "Root";
        var _0x850876;
        var _0x14b8f0;
        var _0x4a363e;
        var _0x3d8f91 = _0x635244('./field');
        var _0x4ed01c = _0x635244('./enum');
        var _0x24adf7 = _0x635244("./oneof");
        var _0x487483 = _0x635244("./util");
        function _0x290ede(_0x40b9ff) {
          _0x1d4917.call(this, '', _0x40b9ff);
          this.deferred = [];
          this.files = [];
        }
        function _0x34facb() {}
        _0x290ede.fromJSON = function (_0x29af70, _0x1c02b3) {
          if (!_0x1c02b3) {
            _0x1c02b3 = new _0x290ede();
          }
          if (_0x29af70.options) {
            _0x1c02b3.setOptions(_0x29af70.options);
          }
          return _0x1c02b3.addJSON(_0x29af70.nested);
        };
        _0x290ede.prototype.resolvePath = _0x487483.path.resolve;
        _0x290ede.prototype.fetch = _0x487483.fetch;
        _0x290ede.prototype.load = function _0xbb48d9(_0x38a303, _0x50bcbd, _0x18d71d) {
          if ('function' == typeof _0x50bcbd) {
            _0x18d71d = _0x50bcbd;
            _0x50bcbd = undefined;
          }
          var _0x8a96f1 = this;
          if (!_0x18d71d) {
            return _0x487483.asPromise(_0xbb48d9, _0x8a96f1, _0x38a303, _0x50bcbd);
          }
          var _0x559877 = _0x18d71d === _0x34facb;
          function _0x1c75c7(_0x115648, _0x6aae26) {
            if (_0x18d71d) {
              var _0x2f6e3d = _0x18d71d;
              _0x18d71d = null;
              if (_0x559877) {
                throw _0x115648;
              }
              _0x2f6e3d(_0x115648, _0x6aae26);
            }
          }
          function _0x5323f6(_0x287172) {
            var _0x23518c = _0x287172.lastIndexOf("google/protobuf/");
            if (_0x23518c > -0x1) {
              var _0x1bd9f0 = _0x287172.substring(_0x23518c);
              if (_0x1bd9f0 in _0x4a363e) {
                return _0x1bd9f0;
              }
            }
            return null;
          }
          function _0xdfa0b7(_0x4bf4a8, _0x4139eb) {
            try {
              if (_0x487483.isString(_0x4139eb) && '{' === _0x4139eb.charAt(0x0)) {
                _0x4139eb = JSON.parse(_0x4139eb);
              }
              if (_0x487483.isString(_0x4139eb)) {
                _0x14b8f0.filename = _0x4bf4a8;
                var _0xeadf99;
                var _0x4333cd = _0x14b8f0(_0x4139eb, _0x8a96f1, _0x50bcbd);
                var _0x2bf458 = 0x0;
                if (_0x4333cd.imports) {
                  for (; _0x2bf458 < _0x4333cd.imports.length; ++_0x2bf458) {
                    if (_0xeadf99 = _0x5323f6(_0x4333cd.imports[_0x2bf458]) || _0x8a96f1.resolvePath(_0x4bf4a8, _0x4333cd.imports[_0x2bf458])) {
                      _0x4cd9b6(_0xeadf99);
                    }
                  }
                }
                if (_0x4333cd.weakImports) {
                  for (_0x2bf458 = 0x0; _0x2bf458 < _0x4333cd.weakImports.length; ++_0x2bf458) {
                    if (_0xeadf99 = _0x5323f6(_0x4333cd.weakImports[_0x2bf458]) || _0x8a96f1.resolvePath(_0x4bf4a8, _0x4333cd.weakImports[_0x2bf458])) {
                      _0x4cd9b6(_0xeadf99, true);
                    }
                  }
                }
              } else {
                _0x8a96f1.setOptions(_0x4139eb.options).addJSON(_0x4139eb.nested);
              }
            } catch (_0x578082) {
              _0x1c75c7(_0x578082);
            }
            if (!(_0x559877 || _0x3d97ee)) {
              _0x1c75c7(null, _0x8a96f1);
            }
          }
          function _0x4cd9b6(_0xc4ba3, _0x49ca48) {
            if (!(_0x8a96f1.files.indexOf(_0xc4ba3) > -0x1)) {
              _0x8a96f1.files.push(_0xc4ba3);
              if (_0xc4ba3 in _0x4a363e) {
                if (_0x559877) {
                  _0xdfa0b7(_0xc4ba3, _0x4a363e[_0xc4ba3]);
                } else {
                  ++_0x3d97ee;
                  setTimeout(function () {
                    --_0x3d97ee;
                    _0xdfa0b7(_0xc4ba3, _0x4a363e[_0xc4ba3]);
                  });
                }
              } else {
                if (_0x559877) {
                  var _0x803664;
                  try {
                    _0x803664 = _0x487483.fs.readFileSync(_0xc4ba3).toString("utf8");
                  } catch (_0x2a27cd) {
                    return void (_0x49ca48 || _0x1c75c7(_0x2a27cd));
                  }
                  _0xdfa0b7(_0xc4ba3, _0x803664);
                } else {
                  ++_0x3d97ee;
                  _0x8a96f1.fetch(_0xc4ba3, function (_0x15904e, _0x168f3e) {
                    --_0x3d97ee;
                    if (_0x18d71d) {
                      if (_0x15904e) {
                        if (_0x49ca48) {
                          if (!_0x3d97ee) {
                            _0x1c75c7(null, _0x8a96f1);
                          }
                        } else {
                          _0x1c75c7(_0x15904e);
                        }
                      } else {
                        _0xdfa0b7(_0xc4ba3, _0x168f3e);
                      }
                    }
                  });
                }
              }
            }
          }
          var _0x3d97ee = 0x0;
          if (_0x487483.isString(_0x38a303)) {
            _0x38a303 = [_0x38a303];
          }
          var _0x309507;
          for (var _0x1c6637 = 0x0; _0x1c6637 < _0x38a303.length; ++_0x1c6637) {
            if (_0x309507 = _0x8a96f1.resolvePath('', _0x38a303[_0x1c6637])) {
              _0x4cd9b6(_0x309507);
            }
          }
          if (_0x559877) {
            return _0x8a96f1;
          }
          if (!_0x3d97ee) {
            _0x1c75c7(null, _0x8a96f1);
          }
        };
        _0x290ede.prototype.loadSync = function (_0x1ac2ad, _0x650200) {
          if (!_0x487483.isNode) {
            throw Error("not supported");
          }
          return this.load(_0x1ac2ad, _0x650200, _0x34facb);
        };
        _0x290ede.prototype.resolveAll = function () {
          if (this.deferred.length) {
            throw Error("unresolvable extensions: " + this.deferred.map(function (_0x4b311c) {
              return "'extend " + _0x4b311c.extend + "' in " + _0x4b311c.parent.fullName;
            }).join(", "));
          }
          return _0x1d4917.prototype.resolveAll.call(this);
        };
        var _0x33e71a = /^[A-Z]/;
        function _0x301661(_0x46e455, _0x2adbf7) {
          var _0x307408 = _0x2adbf7.parent.lookup(_0x2adbf7.extend);
          if (_0x307408) {
            var _0x3c52c7 = new _0x3d8f91(_0x2adbf7.fullName, _0x2adbf7.id, _0x2adbf7.type, _0x2adbf7.rule, undefined, _0x2adbf7.options);
            _0x3c52c7.declaringField = _0x2adbf7;
            _0x2adbf7.extensionField = _0x3c52c7;
            _0x307408.add(_0x3c52c7);
            return true;
          }
          return false;
        }
        _0x290ede.prototype._handleAdd = function (_0x4e68ed) {
          if (_0x4e68ed instanceof _0x3d8f91) {
            if (!(undefined === _0x4e68ed.extend || _0x4e68ed.extensionField || _0x301661(0x0, _0x4e68ed))) {
              this.deferred.push(_0x4e68ed);
            }
          } else {
            if (_0x4e68ed instanceof _0x4ed01c) {
              if (_0x33e71a.test(_0x4e68ed.name)) {
                _0x4e68ed.parent[_0x4e68ed.name] = _0x4e68ed.values;
              }
            } else {
              if (!(_0x4e68ed instanceof _0x24adf7)) {
                if (_0x4e68ed instanceof _0x850876) {
                  for (var _0x50f47b = 0x0; _0x50f47b < this.deferred.length;) {
                    if (_0x301661(0x0, this.deferred[_0x50f47b])) {
                      this.deferred.splice(_0x50f47b, 0x1);
                    } else {
                      ++_0x50f47b;
                    }
                  }
                }
                for (var _0x3d7c89 = 0x0; _0x3d7c89 < _0x4e68ed.nestedArray.length; ++_0x3d7c89) {
                  this._handleAdd(_0x4e68ed._nestedArray[_0x3d7c89]);
                }
                if (_0x33e71a.test(_0x4e68ed.name)) {
                  _0x4e68ed.parent[_0x4e68ed.name] = _0x4e68ed;
                }
              }
            }
          }
        };
        _0x290ede.prototype._handleRemove = function (_0x28dd74) {
          if (_0x28dd74 instanceof _0x3d8f91) {
            if (undefined !== _0x28dd74.extend) {
              if (_0x28dd74.extensionField) {
                _0x28dd74.extensionField.parent.remove(_0x28dd74.extensionField);
                _0x28dd74.extensionField = null;
              } else {
                var _0x19a44a = this.deferred.indexOf(_0x28dd74);
                if (_0x19a44a > -0x1) {
                  this.deferred.splice(_0x19a44a, 0x1);
                }
              }
            }
          } else {
            if (_0x28dd74 instanceof _0x4ed01c) {
              if (_0x33e71a.test(_0x28dd74.name)) {
                delete _0x28dd74.parent[_0x28dd74.name];
              }
            } else {
              if (_0x28dd74 instanceof _0x1d4917) {
                for (var _0x325063 = 0x0; _0x325063 < _0x28dd74.nestedArray.length; ++_0x325063) {
                  this._handleRemove(_0x28dd74._nestedArray[_0x325063]);
                }
                if (_0x33e71a.test(_0x28dd74.name)) {
                  delete _0x28dd74.parent[_0x28dd74.name];
                }
              }
            }
          }
        };
        _0x290ede._configure = function (_0x4efc0e, _0x1d09c1, _0xa647f6) {
          _0x850876 = _0x4efc0e;
          _0x14b8f0 = _0x1d09c1;
          _0x4a363e = _0xa647f6;
        };
        _0x3fc095.exports;
      }, function () {
        return {
          './namespace': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './field': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './oneof': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util.js", function (_0x1fa8e9, _0x20c048, _0x51e3ec, _0x3762e5, _0x3ae46b) {
        var _0x929af;
        var _0xfa6da1;
        var _0x58cb75 = _0x51e3ec.exports = _0x20c048("./util/minimal");
        var _0x371593 = _0x20c048("./roots");
        _0x58cb75.codegen = _0x20c048("@protobufjs/codegen");
        _0x58cb75.fetch = _0x20c048("@protobufjs/fetch");
        _0x58cb75.path = _0x20c048("@protobufjs/path");
        _0x58cb75.fs = _0x58cb75.inquire('fs');
        _0x58cb75.toArray = function (_0x11f6e4) {
          if (_0x11f6e4) {
            var _0x3f76b8 = Object.keys(_0x11f6e4);
            var _0x3a7a75 = new Array(_0x3f76b8.length);
            for (var _0x3b98a4 = 0x0; _0x3b98a4 < _0x3f76b8.length;) {
              _0x3a7a75[_0x3b98a4] = _0x11f6e4[_0x3f76b8[_0x3b98a4++]];
            }
            return _0x3a7a75;
          }
          return [];
        };
        _0x58cb75.toObject = function (_0x22e7d6) {
          var _0x457bdd = {};
          for (var _0x470bce = 0x0; _0x470bce < _0x22e7d6.length;) {
            var _0xb70991 = _0x22e7d6[_0x470bce++];
            var _0x5bec58 = _0x22e7d6[_0x470bce++];
            if (undefined !== _0x5bec58) {
              _0x457bdd[_0xb70991] = _0x5bec58;
            }
          }
          return _0x457bdd;
        };
        var _0x3bab27 = /\\/g;
        var _0x3839ab = /"/g;
        _0x58cb75.isReserved = function (_0x9e8a25) {
          return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(_0x9e8a25);
        };
        _0x58cb75.safeProp = function (_0x2feb70) {
          return !/^[$\w_]+$/.test(_0x2feb70) || _0x58cb75.isReserved(_0x2feb70) ? "[\"" + _0x2feb70.replace(_0x3bab27, "\\\\").replace(_0x3839ab, "\\\"") + "\"]" : '.' + _0x2feb70;
        };
        _0x58cb75.ucFirst = function (_0x55cef1) {
          return _0x55cef1.charAt(0x0).toUpperCase() + _0x55cef1.substring(0x1);
        };
        var _0x118be4 = /_([a-z])/g;
        _0x58cb75.camelCase = function (_0x5715c5) {
          return _0x5715c5.substring(0x0, 0x1) + _0x5715c5.substring(0x1).replace(_0x118be4, function (_0xa020cb, _0x2ea0f9) {
            return _0x2ea0f9.toUpperCase();
          });
        };
        _0x58cb75.compareFieldsById = function (_0x37a9a8, _0x4aa01b) {
          return _0x37a9a8.id - _0x4aa01b.id;
        };
        _0x58cb75.decorateType = function (_0x240911, _0x5b1c0e) {
          if (_0x240911.$type) {
            if (_0x5b1c0e && _0x240911.$type.name !== _0x5b1c0e) {
              _0x58cb75.decorateRoot.remove(_0x240911.$type);
              _0x240911.$type.name = _0x5b1c0e;
              _0x58cb75.decorateRoot.add(_0x240911.$type);
            }
            return _0x240911.$type;
          }
          if (!_0x929af) {
            _0x929af = _0x20c048("./type");
          }
          var _0xbb7b6e = new _0x929af(_0x5b1c0e || _0x240911.name);
          _0x58cb75.decorateRoot.add(_0xbb7b6e);
          _0xbb7b6e.ctor = _0x240911;
          Object.defineProperty(_0x240911, "$type", {
            'value': _0xbb7b6e,
            'enumerable': false
          });
          Object.defineProperty(_0x240911.prototype, "$type", {
            'value': _0xbb7b6e,
            'enumerable': false
          });
          return _0xbb7b6e;
        };
        var _0x43b287 = 0x0;
        _0x58cb75.decorateEnum = function (_0x285b77) {
          if (_0x285b77.$type) {
            return _0x285b77.$type;
          }
          if (!_0xfa6da1) {
            _0xfa6da1 = _0x20c048("./enum");
          }
          var _0x3f389b = new _0xfa6da1("Enum" + _0x43b287++, _0x285b77);
          _0x58cb75.decorateRoot.add(_0x3f389b);
          Object.defineProperty(_0x285b77, "$type", {
            'value': _0x3f389b,
            'enumerable': false
          });
          return _0x3f389b;
        };
        _0x58cb75.setProperty = function (_0x579060, _0xe1fbac, _0x2b3e15) {
          if ("object" != typeof _0x579060) {
            throw TypeError("dst must be an object");
          }
          if (!_0xe1fbac) {
            throw TypeError("path must be specified");
          }
          return function _0x164a65(_0x7fd378, _0x59c088, _0x1efe3c) {
            var _0x529ba7 = _0x59c088.shift();
            if (_0x59c088.length > 0x0) {
              _0x7fd378[_0x529ba7] = _0x164a65(_0x7fd378[_0x529ba7] || {}, _0x59c088, _0x1efe3c);
            } else {
              var _0x3b38f8 = _0x7fd378[_0x529ba7];
              if (_0x3b38f8) {
                _0x1efe3c = [].concat(_0x3b38f8).concat(_0x1efe3c);
              }
              _0x7fd378[_0x529ba7] = _0x1efe3c;
            }
            return _0x7fd378;
          }(_0x579060, _0xe1fbac = _0xe1fbac.split('.'), _0x2b3e15);
        };
        Object.defineProperty(_0x58cb75, "decorateRoot", {
          'get': function () {
            return _0x371593.decorated || (_0x371593.decorated = new (_0x20c048("./root"))());
          }
        });
        _0x51e3ec.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          './roots': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/roots.js',
          '@protobufjs/codegen': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js",
          '@protobufjs/fetch': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js',
          '@protobufjs/path': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/@protobufjs/path/index.js",
          './type': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './root': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/root.js'
        };
      });
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/object.js", function (_0x66eac4, _0x355915, _0x3acb0a, _0x834291, _0x387302) {
        _0x3acb0a.exports = _0x27f07f;
        _0x27f07f.className = "ReflectionObject";
        var _0x99996;
        var _0x2359d9 = _0x355915("./util");
        function _0x27f07f(_0xf4e7b8, _0x2c67b1) {
          if (!_0x2359d9.isString(_0xf4e7b8)) {
            throw TypeError("name must be a string");
          }
          if (_0x2c67b1 && !_0x2359d9.isObject(_0x2c67b1)) {
            throw TypeError("options must be an object");
          }
          this.options = _0x2c67b1;
          this.parsedOptions = null;
          this.name = _0xf4e7b8;
          this.parent = null;
          this.resolved = false;
          this.comment = null;
          this.filename = null;
        }
        Object.defineProperties(_0x27f07f.prototype, {
          'root': {
            'get': function () {
              for (var _0xd32825 = this; null !== _0xd32825.parent;) {
                _0xd32825 = _0xd32825.parent;
              }
              return _0xd32825;
            }
          },
          'fullName': {
            'get': function () {
              var _0x55ada2 = [this.name];
              for (var _0x6715bc = this.parent; _0x6715bc;) {
                _0x55ada2.unshift(_0x6715bc.name);
                _0x6715bc = _0x6715bc.parent;
              }
              return _0x55ada2.join('.');
            }
          }
        });
        _0x27f07f.prototype.toJSON = function () {
          throw Error();
        };
        _0x27f07f.prototype.onAdd = function (_0x255bf9) {
          if (this.parent && this.parent !== _0x255bf9) {
            this.parent.remove(this);
          }
          this.parent = _0x255bf9;
          this.resolved = false;
          var _0xfdc6f3 = _0x255bf9.root;
          if (_0xfdc6f3 instanceof _0x99996) {
            _0xfdc6f3._handleAdd(this);
          }
        };
        _0x27f07f.prototype.onRemove = function (_0x577069) {
          var _0x9feee5 = _0x577069.root;
          if (_0x9feee5 instanceof _0x99996) {
            _0x9feee5._handleRemove(this);
          }
          this.parent = null;
          this.resolved = false;
        };
        _0x27f07f.prototype.resolve = function () {
          if (!this.resolved) {
            if (this.root instanceof _0x99996) {
              this.resolved = true;
            }
          }
          return this;
        };
        _0x27f07f.prototype.getOption = function (_0x22e05f) {
          if (this.options) {
            return this.options[_0x22e05f];
          }
        };
        _0x27f07f.prototype.setOption = function (_0x907642, _0x41934d, _0x3e53a4) {
          if (!(_0x3e53a4 && this.options && undefined !== this.options[_0x907642])) {
            (this.options || (this.options = {}))[_0x907642] = _0x41934d;
          }
          return this;
        };
        _0x27f07f.prototype.setParsedOption = function (_0x4bea13, _0x133a8c, _0x4fb0a2) {
          if (!this.parsedOptions) {
            this.parsedOptions = [];
          }
          var _0x41062b = this.parsedOptions;
          if (_0x4fb0a2) {
            var _0x565fa6 = _0x41062b.find(function (_0x1ae3bf) {
              return Object.prototype.hasOwnProperty.call(_0x1ae3bf, _0x4bea13);
            });
            if (_0x565fa6) {
              var _0x20aa06 = _0x565fa6[_0x4bea13];
              _0x2359d9.setProperty(_0x20aa06, _0x4fb0a2, _0x133a8c);
            } else {
              (_0x565fa6 = {})[_0x4bea13] = _0x2359d9.setProperty({}, _0x4fb0a2, _0x133a8c);
              _0x41062b.push(_0x565fa6);
            }
          } else {
            var _0x4260ed = {
              _0x4bea13: _0x133a8c
            };
            _0x41062b.push(_0x4260ed);
          }
          return this;
        };
        _0x27f07f.prototype.setOptions = function (_0x46502b, _0x2e3818) {
          if (_0x46502b) {
            var _0x2f863e = Object.keys(_0x46502b);
            for (var _0x45a98e = 0x0; _0x45a98e < _0x2f863e.length; ++_0x45a98e) {
              this.setOption(_0x2f863e[_0x45a98e], _0x46502b[_0x2f863e[_0x45a98e]], _0x2e3818);
            }
          }
          return this;
        };
        _0x27f07f.prototype.toString = function () {
          var _0x456c99 = this.constructor.className;
          var _0x99bba6 = this.fullName;
          return _0x99bba6.length ? _0x456c99 + " " + _0x99bba6 : _0x456c99;
        };
        _0x27f07f._configure = function (_0x3c50a9) {
          _0x99996 = _0x3c50a9;
        };
        _0x3acb0a.exports;
      }, function () {
        return {
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/enum.js", function (_0xb2caa6, _0x219855, _0x5f05b6, _0x241597, _0x188c3d) {
        _0x5f05b6.exports = _0x1a2ef3;
        var _0x22553e = _0x219855("./object");
        ((_0x1a2ef3.prototype = Object.create(_0x22553e.prototype)).constructor = _0x1a2ef3).className = 'Enum';
        var _0x2068a4 = _0x219855("./namespace");
        var _0x4c1b25 = _0x219855("./util");
        function _0x1a2ef3(_0xa5a08a, _0x229173, _0x484e87, _0x27b525, _0x3591cc) {
          _0x22553e.call(this, _0xa5a08a, _0x484e87);
          if (_0x229173 && "object" != typeof _0x229173) {
            throw TypeError("values must be an object");
          }
          this.valuesById = {};
          this.values = Object.create(this.valuesById);
          this.comment = _0x27b525;
          this.comments = _0x3591cc || {};
          this.reserved = undefined;
          if (_0x229173) {
            var _0x15c864 = Object.keys(_0x229173);
            for (var _0x3bdd83 = 0x0; _0x3bdd83 < _0x15c864.length; ++_0x3bdd83) {
              if ("number" == typeof _0x229173[_0x15c864[_0x3bdd83]]) {
                this.valuesById[this.values[_0x15c864[_0x3bdd83]] = _0x229173[_0x15c864[_0x3bdd83]]] = _0x15c864[_0x3bdd83];
              }
            }
          }
        }
        _0x1a2ef3.fromJSON = function (_0xd1d867, _0x2e4963) {
          var _0x40ee0a = new _0x1a2ef3(_0xd1d867, _0x2e4963.values, _0x2e4963.options, _0x2e4963.comment, _0x2e4963.comments);
          _0x40ee0a.reserved = _0x2e4963.reserved;
          return _0x40ee0a;
        };
        _0x1a2ef3.prototype.toJSON = function (_0x29962c) {
          var _0xa203df = !!_0x29962c && Boolean(_0x29962c.keepComments);
          return _0x4c1b25.toObject(["options", this.options, "values", this.values, 'reserved', this.reserved && this.reserved.length ? this.reserved : undefined, "comment", _0xa203df ? this.comment : undefined, "comments", _0xa203df ? this.comments : undefined]);
        };
        _0x1a2ef3.prototype.add = function (_0x52b3b1, _0x24b089, _0x3cb875) {
          if (!_0x4c1b25.isString(_0x52b3b1)) {
            throw TypeError("name must be a string");
          }
          if (!_0x4c1b25.isInteger(_0x24b089)) {
            throw TypeError("id must be an integer");
          }
          if (undefined !== this.values[_0x52b3b1]) {
            throw Error("duplicate name '" + _0x52b3b1 + "' in " + this);
          }
          if (this.isReservedId(_0x24b089)) {
            throw Error("id " + _0x24b089 + " is reserved in " + this);
          }
          if (this.isReservedName(_0x52b3b1)) {
            throw Error("name '" + _0x52b3b1 + "' is reserved in " + this);
          }
          if (undefined !== this.valuesById[_0x24b089]) {
            if (!this.options || !this.options.allow_alias) {
              throw Error("duplicate id " + _0x24b089 + " in " + this);
            }
            this.values[_0x52b3b1] = _0x24b089;
          } else {
            this.valuesById[this.values[_0x52b3b1] = _0x24b089] = _0x52b3b1;
          }
          this.comments[_0x52b3b1] = _0x3cb875 || null;
          return this;
        };
        _0x1a2ef3.prototype.remove = function (_0x408674) {
          if (!_0x4c1b25.isString(_0x408674)) {
            throw TypeError("name must be a string");
          }
          var _0x2699af = this.values[_0x408674];
          if (null == _0x2699af) {
            throw Error("name '" + _0x408674 + "' does not exist in " + this);
          }
          delete this.valuesById[_0x2699af];
          delete this.values[_0x408674];
          delete this.comments[_0x408674];
          return this;
        };
        _0x1a2ef3.prototype.isReservedId = function (_0x476df8) {
          return _0x2068a4.isReservedId(this.reserved, _0x476df8);
        };
        _0x1a2ef3.prototype.isReservedName = function (_0x43d95c) {
          return _0x2068a4.isReservedName(this.reserved, _0x43d95c);
        };
        _0x5f05b6.exports;
      }, function () {
        return {
          './object': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './namespace': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x557447.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js', function (_0x2589f1, _0x5469b6, _0x5aeb7b, _0x434160, _0x5059e9) {
        _0x5aeb7b.exports = function (_0x40d5e0) {
          var _0x2d61d3;
          var _0x5ad905 = _0x5b763f.codegen(['m', 'w'], _0x40d5e0.name + "$encode")("if(!w)")("w=Writer.create()");
          var _0x279b52 = _0x40d5e0.fieldsArray.slice().sort(_0x5b763f.compareFieldsById);
          for (var _0xfa0bc3 = 0x0; _0xfa0bc3 < _0x279b52.length; ++_0xfa0bc3) {
            var _0xd85346 = _0x279b52[_0xfa0bc3].resolve();
            var _0x1effa0 = _0x40d5e0._fieldsArray.indexOf(_0xd85346);
            var _0x69ba72 = _0xd85346.resolvedType instanceof _0x2cdf07 ? "int32" : _0xd85346.type;
            var _0x20c929 = _0x2fde6f.basic[_0x69ba72];
            _0x2d61d3 = 'm' + _0x5b763f.safeProp(_0xd85346.name);
            if (_0xd85346.map) {
              _0x5ad905("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", _0x2d61d3, _0xd85346.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", _0x2d61d3)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (_0xd85346.id << 0x3 | 0x2) >>> 0x0, 0x8 | _0x2fde6f.mapKey[_0xd85346.keyType], _0xd85346.keyType);
              if (undefined === _0x20c929) {
                _0x5ad905("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", _0x1effa0, _0x2d61d3);
              } else {
                _0x5ad905(".uint32(%i).%s(%s[ks[i]]).ldelim()", 0x10 | _0x20c929, _0x69ba72, _0x2d61d3);
              }
              _0x5ad905('}')('}');
            } else if (_0xd85346.repeated) {
              _0x5ad905("if(%s!=null&&%s.length){", _0x2d61d3, _0x2d61d3);
              if (_0xd85346.packed && undefined !== _0x2fde6f.packed[_0x69ba72]) {
                _0x5ad905("w.uint32(%i).fork()", (_0xd85346.id << 0x3 | 0x2) >>> 0x0)("for(var i=0;i<%s.length;++i)", _0x2d61d3)("w.%s(%s[i])", _0x69ba72, _0x2d61d3)("w.ldelim()");
              } else {
                _0x5ad905("for(var i=0;i<%s.length;++i)", _0x2d61d3);
                if (undefined === _0x20c929) {
                  if (_0xd85346.resolvedType.group) {
                    _0x5ad905('types[%i].encode(%s,w.uint32(%i)).uint32(%i)', _0x1effa0, _0x2d61d3 + "[i]", (_0xd85346.id << 0x3 | 0x3) >>> 0x0, (_0xd85346.id << 0x3 | 0x4) >>> 0x0);
                  } else {
                    _0x5ad905("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", _0x1effa0, _0x2d61d3 + "[i]", (_0xd85346.id << 0x3 | 0x2) >>> 0x0);
                  }
                } else {
                  _0x5ad905('w.uint32(%i).%s(%s[i])', (_0xd85346.id << 0x3 | _0x20c929) >>> 0x0, _0x69ba72, _0x2d61d3);
                }
              }
              _0x5ad905('}');
            } else {
              if (_0xd85346.optional) {
                _0x5ad905("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", _0x2d61d3, _0xd85346.name);
              }
              if (undefined === _0x20c929) {
                if (_0xd85346.resolvedType.group) {
                  _0x5ad905('types[%i].encode(%s,w.uint32(%i)).uint32(%i)', _0x1effa0, _0x2d61d3, (_0xd85346.id << 0x3 | 0x3) >>> 0x0, (_0xd85346.id << 0x3 | 0x4) >>> 0x0);
                } else {
                  _0x5ad905("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", _0x1effa0, _0x2d61d3, (_0xd85346.id << 0x3 | 0x2) >>> 0x0);
                }
              } else {
                _0x5ad905('w.uint32(%i).%s(%s)', (_0xd85346.id << 0x3 | _0x20c929) >>> 0x0, _0x69ba72, _0x2d61d3);
              }
            }
          }
          return _0x5ad905("return w");
        };
        var _0x2cdf07 = _0x5469b6("./enum");
        var _0x2fde6f = _0x5469b6("./types");
        var _0x5b763f = _0x5469b6("./util");
        _0x5aeb7b.exports;
      }, function () {
        return {
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/types.js',
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js", function (_0x429af8, _0x226225, _0xafbbc6, _0xfc7d28, _0x364a09) {
        var _0x2aab7b = _0xafbbc6.exports = _0x226225('./index-minimal');
        _0x2aab7b.build = 'light';
        _0x2aab7b.load = function (_0x4f9dfb, _0x2a57e7, _0x375fc9) {
          if ("function" == typeof _0x2a57e7) {
            _0x375fc9 = _0x2a57e7;
            _0x2a57e7 = new _0x2aab7b.Root();
          } else if (!_0x2a57e7) {
            _0x2a57e7 = new _0x2aab7b.Root();
          }
          return _0x2a57e7.load(_0x4f9dfb, _0x375fc9);
        };
        _0x2aab7b.loadSync = function (_0x92909, _0x15a6c8) {
          if (!_0x15a6c8) {
            _0x15a6c8 = new _0x2aab7b.Root();
          }
          return _0x15a6c8.loadSync(_0x92909);
        };
        _0x2aab7b.encoder = _0x226225('./encoder');
        _0x2aab7b.decoder = _0x226225("./decoder");
        _0x2aab7b.verifier = _0x226225("./verifier");
        _0x2aab7b.converter = _0x226225("./converter");
        _0x2aab7b.ReflectionObject = _0x226225("./object");
        _0x2aab7b.Namespace = _0x226225("./namespace");
        _0x2aab7b.Root = _0x226225("./root");
        _0x2aab7b.Enum = _0x226225("./enum");
        _0x2aab7b.Type = _0x226225("./type");
        _0x2aab7b.Field = _0x226225("./field");
        _0x2aab7b.OneOf = _0x226225("./oneof");
        _0x2aab7b.MapField = _0x226225('./mapfield');
        _0x2aab7b.Service = _0x226225('./service');
        _0x2aab7b.Method = _0x226225('./method');
        _0x2aab7b.Message = _0x226225("./message");
        _0x2aab7b.wrappers = _0x226225("./wrappers");
        _0x2aab7b.types = _0x226225('./types');
        _0x2aab7b.util = _0x226225("./util");
        _0x2aab7b.ReflectionObject._configure(_0x2aab7b.Root);
        _0x2aab7b.Namespace._configure(_0x2aab7b.Type, _0x2aab7b.Service, _0x2aab7b.Enum);
        _0x2aab7b.Root._configure(_0x2aab7b.Type);
        _0x2aab7b.Field._configure(_0x2aab7b.Type);
        _0xafbbc6.exports;
      }, function () {
        return {
          './index-minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js",
          './encoder': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js',
          './decoder': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          './verifier': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js',
          './converter': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          './object': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './namespace': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './root': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/root.js',
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './type': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './field': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './oneof': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './mapfield': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './service': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          './method': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          './message': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/message.js',
          './wrappers': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js",
          './types': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/types.js',
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js", function (_0x5a3100, _0x4943f3, _0x741a52, _0xcc4ef1, _0x4e640a) {
        _0x741a52.exports = _0x47adb3;
        var _0x335f78 = /[\s{}=;:[\],'"()<>]/g;
        var _0xf1ddcd = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
        var _0x24a781 = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
        var _0x491c31 = /^ *[*/]+ */;
        var _0x17902d = /^\s*\*?\/*/;
        var _0x2bb878 = /\n/g;
        var _0x40555f = /\s/;
        var _0x59ea17 = /\\(.?)/g;
        var _0x5c8a49 = {
          0x0: "\0",
          'r': "\r",
          'n': "\n",
          't': "\t"
        };
        function _0x5f04bc(_0x477906) {
          return _0x477906.replace(_0x59ea17, function (_0x343d96, _0x2e6984) {
            switch (_0x2e6984) {
              case "\\":
              case '':
                return _0x2e6984;
              default:
                return _0x5c8a49[_0x2e6984] || '';
            }
          });
        }
        function _0x47adb3(_0x4f1170, _0x277fa9) {
          _0x4f1170 = _0x4f1170.toString();
          var _0x2145db = 0x0;
          var _0x5b5574 = _0x4f1170.length;
          var _0x5db89f = 0x1;
          var _0x1ef5a4 = null;
          var _0x484538 = null;
          var _0x5e2236 = 0x0;
          var _0x1eec5c = false;
          var _0x109e7a = false;
          var _0xe83ccb = [];
          var _0x1ba6b4 = null;
          function _0x7ce9be(_0x2825f9, _0x358bbf, _0xf9136) {
            _0x1ef5a4 = _0x4f1170.charAt(_0x2825f9++);
            _0x5e2236 = _0x5db89f;
            _0x1eec5c = false;
            _0x109e7a = _0xf9136;
            var _0x56ad2d;
            var _0x8fffe = _0x2825f9 - (_0x277fa9 ? 0x2 : 0x3);
            do {
              if (--_0x8fffe < 0x0 || "\n" === (_0x56ad2d = _0x4f1170.charAt(_0x8fffe))) {
                _0x1eec5c = true;
                break;
              }
            } while (" " === _0x56ad2d || "\t" === _0x56ad2d);
            var _0xcd5e39 = _0x4f1170.substring(_0x2825f9, _0x358bbf).split(_0x2bb878);
            for (var _0x3895f0 = 0x0; _0x3895f0 < _0xcd5e39.length; ++_0x3895f0) {
              _0xcd5e39[_0x3895f0] = _0xcd5e39[_0x3895f0].replace(_0x277fa9 ? _0x17902d : _0x491c31, '').trim();
            }
            _0x484538 = _0xcd5e39.join("\n").trim();
          }
          function _0x57109e(_0x2f468a) {
            var _0x2ac221 = _0x4f5dc6(_0x2f468a);
            var _0x1c7768 = _0x4f1170.substring(_0x2f468a, _0x2ac221);
            return /^\s*\/{1,2}/.test(_0x1c7768);
          }
          function _0x4f5dc6(_0x28b1a5) {
            for (var _0x18d0a6 = _0x28b1a5; _0x18d0a6 < _0x5b5574 && "\n" !== _0x4f1170.charAt(_0x18d0a6);) {
              _0x18d0a6++;
            }
            return _0x18d0a6;
          }
          function _0x578b8b() {
            if (_0xe83ccb.length > 0x0) {
              return _0xe83ccb.shift();
            }
            if (_0x1ba6b4) {
              return function () {
                var _0x22ef2d = "'" === _0x1ba6b4 ? _0x24a781 : _0xf1ddcd;
                _0x22ef2d.lastIndex = _0x2145db - 0x1;
                var _0x121965 = _0x22ef2d.exec(_0x4f1170);
                if (!_0x121965) {
                  throw Error("illegal string (line " + _0x5db89f + ')');
                }
                _0x2145db = _0x22ef2d.lastIndex;
                _0x4f1eee(_0x1ba6b4);
                _0x1ba6b4 = null;
                return _0x5f04bc(_0x121965[0x1]);
              }();
            }
            var _0x45bc3f;
            var _0x40d5bb;
            var _0x343228;
            var _0x3ba6eb;
            var _0x5fa7dc;
            var _0x2f3fdd = 0x0 === _0x2145db;
            do {
              if (_0x2145db === _0x5b5574) {
                return null;
              }
              for (_0x45bc3f = false; _0x40555f.test(_0x343228 = _0x4f1170.charAt(_0x2145db));) {
                if ("\n" === _0x343228) {
                  _0x2f3fdd = true;
                  ++_0x5db89f;
                }
                if (++_0x2145db === _0x5b5574) {
                  return null;
                }
              }
              if ('/' === _0x4f1170.charAt(_0x2145db)) {
                if (++_0x2145db === _0x5b5574) {
                  throw Error("illegal comment (line " + _0x5db89f + ')');
                }
                if ('/' === _0x4f1170.charAt(_0x2145db)) {
                  if (_0x277fa9) {
                    _0x3ba6eb = _0x2145db;
                    _0x5fa7dc = false;
                    if (_0x57109e(_0x2145db)) {
                      _0x5fa7dc = true;
                      do {
                        if ((_0x2145db = _0x4f5dc6(_0x2145db)) === _0x5b5574) {
                          break;
                        }
                        _0x2145db++;
                      } while (_0x57109e(_0x2145db));
                    } else {
                      _0x2145db = Math.min(_0x5b5574, _0x4f5dc6(_0x2145db) + 0x1);
                    }
                    if (_0x5fa7dc) {
                      _0x7ce9be(_0x3ba6eb, _0x2145db, _0x2f3fdd);
                    }
                    _0x5db89f++;
                    _0x45bc3f = true;
                  } else {
                    for (_0x5fa7dc = '/' === _0x4f1170.charAt(_0x3ba6eb = _0x2145db + 0x1); "\n" !== _0x4f1170.charAt(++_0x2145db);) {
                      if (_0x2145db === _0x5b5574) {
                        return null;
                      }
                    }
                    ++_0x2145db;
                    if (_0x5fa7dc) {
                      _0x7ce9be(_0x3ba6eb, _0x2145db - 0x1, _0x2f3fdd);
                    }
                    ++_0x5db89f;
                    _0x45bc3f = true;
                  }
                } else {
                  if ('*' !== (_0x343228 = _0x4f1170.charAt(_0x2145db))) {
                    return '/';
                  }
                  _0x3ba6eb = _0x2145db + 0x1;
                  _0x5fa7dc = _0x277fa9 || '*' === _0x4f1170.charAt(_0x3ba6eb);
                  do {
                    if ("\n" === _0x343228) {
                      ++_0x5db89f;
                    }
                    if (++_0x2145db === _0x5b5574) {
                      throw Error("illegal comment (line " + _0x5db89f + ')');
                    }
                    _0x40d5bb = _0x343228;
                    _0x343228 = _0x4f1170.charAt(_0x2145db);
                  } while ('*' !== _0x40d5bb || '/' !== _0x343228);
                  ++_0x2145db;
                  if (_0x5fa7dc) {
                    _0x7ce9be(_0x3ba6eb, _0x2145db - 0x2, _0x2f3fdd);
                  }
                  _0x45bc3f = true;
                }
              }
            } while (_0x45bc3f);
            var _0x40866d = _0x2145db;
            _0x335f78.lastIndex = 0x0;
            if (!_0x335f78.test(_0x4f1170.charAt(_0x40866d++))) {
              for (; _0x40866d < _0x5b5574 && !_0x335f78.test(_0x4f1170.charAt(_0x40866d));) {
                ++_0x40866d;
              }
            }
            var _0xfafec3 = _0x4f1170.substring(_0x2145db, _0x2145db = _0x40866d);
            if (!("\"" !== _0xfafec3 && "'" !== _0xfafec3)) {
              _0x1ba6b4 = _0xfafec3;
            }
            return _0xfafec3;
          }
          function _0x4f1eee(_0x5e27e1) {
            _0xe83ccb.push(_0x5e27e1);
          }
          function _0x4c7f66() {
            if (!_0xe83ccb.length) {
              var _0xef02d3 = _0x578b8b();
              if (null === _0xef02d3) {
                return null;
              }
              _0x4f1eee(_0xef02d3);
            }
            return _0xe83ccb[0x0];
          }
          return Object.defineProperty({
            'next': _0x578b8b,
            'peek': _0x4c7f66,
            'push': _0x4f1eee,
            'skip': function (_0x44ce52, _0x5b7c26) {
              var _0x5cb57a = _0x4c7f66();
              if (_0x5cb57a === _0x44ce52) {
                _0x578b8b();
                return true;
              }
              if (!_0x5b7c26) {
                throw Error("illegal " + ("token '" + _0x5cb57a + "', '" + _0x44ce52 + "' expected") + " (line " + _0x5db89f + ')');
              }
              return false;
            },
            'cmnt': function (_0x2b5373) {
              var _0xc62d66 = null;
              if (undefined === _0x2b5373) {
                if (_0x5e2236 === _0x5db89f - 0x1 && (_0x277fa9 || '*' === _0x1ef5a4 || _0x1eec5c)) {
                  _0xc62d66 = _0x109e7a ? _0x484538 : null;
                }
              } else {
                if (_0x5e2236 < _0x2b5373) {
                  _0x4c7f66();
                }
                if (!(_0x5e2236 !== _0x2b5373 || _0x1eec5c || !_0x277fa9 && '/' !== _0x1ef5a4)) {
                  _0xc62d66 = _0x109e7a ? null : _0x484538;
                }
              }
              return _0xc62d66;
            }
          }, "line", {
            'get': function () {
              return _0x5db89f;
            }
          });
        }
        _0x47adb3.unescape = _0x5f04bc;
        _0x741a52.exports;
      }, {});
      _0x557447.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/parse.js', function (_0x5eb225, _0x13c9e7, _0x62d1eb, _0x39d0b4, _0x2150c0) {
        _0x62d1eb.exports = _0x1182e9;
        _0x1182e9.filename = null;
        _0x1182e9.defaults = {
          'keepCase': false
        };
        var _0x567a5f = _0x13c9e7('./tokenize');
        var _0xd242cb = _0x13c9e7("./root");
        var _0x5e21c4 = _0x13c9e7("./type");
        var _0x3b7cb6 = _0x13c9e7("./field");
        var _0x16e81c = _0x13c9e7('./mapfield');
        var _0x3472fb = _0x13c9e7('./oneof');
        var _0x319f4f = _0x13c9e7('./enum');
        var _0x152e95 = _0x13c9e7("./service");
        var _0x5dbe05 = _0x13c9e7("./method");
        var _0x595122 = _0x13c9e7("./types");
        var _0x3039dd = _0x13c9e7('./util');
        var _0x229d87 = /^[1-9][0-9]*$/;
        var _0x5a0d36 = /^-?[1-9][0-9]*$/;
        var _0x5284b3 = /^0[x][0-9a-fA-F]+$/;
        var _0x41975d = /^-?0[x][0-9a-fA-F]+$/;
        var _0x5eedf1 = /^0[0-7]+$/;
        var _0x137d53 = /^-?0[0-7]+$/;
        var _0x2441fe = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
        var _0x4b5ec7 = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
        var _0x3fbdd5 = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
        var _0x20d270 = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
        function _0x1182e9(_0x3edcde, _0x480d4a, _0x12d319) {
          if (!(_0x480d4a instanceof _0xd242cb)) {
            _0x12d319 = _0x480d4a;
            _0x480d4a = new _0xd242cb();
          }
          if (!_0x12d319) {
            _0x12d319 = _0x1182e9.defaults;
          }
          var _0x43139b;
          var _0x531d22;
          var _0x278859;
          var _0x3fecf8;
          var _0x331631;
          var _0x1c230c = _0x12d319.preferTrailingComment || false;
          var _0xa2db20 = _0x567a5f(_0x3edcde, _0x12d319.alternateCommentMode || false);
          var _0x3643c7 = _0xa2db20.next;
          var _0x168874 = _0xa2db20.push;
          var _0x3b70fc = _0xa2db20.peek;
          var _0x522644 = _0xa2db20.skip;
          var _0x3ca178 = _0xa2db20.cmnt;
          var _0x5d72cc = true;
          var _0x298ee3 = false;
          var _0x5c699f = _0x480d4a;
          var _0x2e12df = _0x12d319.keepCase ? function (_0x264256) {
            return _0x264256;
          } : _0x3039dd.camelCase;
          function _0x336c33(_0xb5fbe0, _0x4a40ad, _0x72499) {
            var _0x38a8ae = _0x1182e9.filename;
            if (!_0x72499) {
              _0x1182e9.filename = null;
            }
            return Error("illegal " + (_0x4a40ad || 'token') + " '" + _0xb5fbe0 + "' (" + (_0x38a8ae ? _0x38a8ae + ", " : '') + "line " + _0xa2db20.line + ')');
          }
          function _0xa4538e() {
            var _0x5f2ae8;
            var _0x264a62 = [];
            do {
              if ("\"" !== (_0x5f2ae8 = _0x3643c7()) && "'" !== _0x5f2ae8) {
                throw _0x336c33(_0x5f2ae8);
              }
              _0x264a62.push(_0x3643c7());
              _0x522644(_0x5f2ae8);
              _0x5f2ae8 = _0x3b70fc();
            } while ("\"" === _0x5f2ae8 || "'" === _0x5f2ae8);
            return _0x264a62.join('');
          }
          function _0x6ccc93(_0x32eac6) {
            var _0x37c222 = _0x3643c7();
            switch (_0x37c222) {
              case "'":
              case "\"":
                _0x168874(_0x37c222);
                return _0xa4538e();
              case "true":
              case "TRUE":
                return true;
              case "false":
              case 'FALSE':
                return false;
            }
            try {
              return function (_0x4491c7, _0x15709f) {
                var _0x3dc0e2 = 0x1;
                if ('-' === _0x4491c7.charAt(0x0)) {
                  _0x3dc0e2 = -0x1;
                  _0x4491c7 = _0x4491c7.substring(0x1);
                }
                switch (_0x4491c7) {
                  case "inf":
                  case 'INF':
                  case 'Inf':
                    return _0x3dc0e2 * Infinity;
                  case "nan":
                  case 'NAN':
                  case "Nan":
                  case 'NaN':
                    return NaN;
                  case '0':
                    return 0x0;
                }
                if (_0x229d87.test(_0x4491c7)) {
                  return _0x3dc0e2 * parseInt(_0x4491c7, 0xa);
                }
                if (_0x5284b3.test(_0x4491c7)) {
                  return _0x3dc0e2 * parseInt(_0x4491c7, 0x10);
                }
                if (_0x5eedf1.test(_0x4491c7)) {
                  return _0x3dc0e2 * parseInt(_0x4491c7, 0x8);
                }
                if (_0x2441fe.test(_0x4491c7)) {
                  return _0x3dc0e2 * parseFloat(_0x4491c7);
                }
                throw _0x336c33(_0x4491c7, "number", _0x15709f);
              }(_0x37c222, true);
            } catch (_0xfa3c71) {
              if (_0x32eac6 && _0x3fbdd5.test(_0x37c222)) {
                return _0x37c222;
              }
              throw _0x336c33(_0x37c222, 'value');
            }
          }
          function _0x25b845(_0x16600a, _0x3b1575) {
            var _0x1d9755;
            var _0x2d0de6;
            do {
              if (!_0x3b1575 || "\"" !== (_0x1d9755 = _0x3b70fc()) && "'" !== _0x1d9755) {
                _0x16600a.push([_0x2d0de6 = _0x386c74(_0x3643c7()), _0x522644('to', true) ? _0x386c74(_0x3643c7()) : _0x2d0de6]);
              } else {
                _0x16600a.push(_0xa4538e());
              }
            } while (_0x522644(',', true));
            _0x522644(';');
          }
          function _0x386c74(_0x1cc478, _0xa8f8f2) {
            switch (_0x1cc478) {
              case "max":
              case "MAX":
              case "Max":
                return 0x1fffffff;
              case '0':
                return 0x0;
            }
            if (!_0xa8f8f2 && '-' === _0x1cc478.charAt(0x0)) {
              throw _0x336c33(_0x1cc478, 'id');
            }
            if (_0x5a0d36.test(_0x1cc478)) {
              return parseInt(_0x1cc478, 0xa);
            }
            if (_0x41975d.test(_0x1cc478)) {
              return parseInt(_0x1cc478, 0x10);
            }
            if (_0x137d53.test(_0x1cc478)) {
              return parseInt(_0x1cc478, 0x8);
            }
            throw _0x336c33(_0x1cc478, 'id');
          }
          function _0x3470c9() {
            if (undefined !== _0x43139b) {
              throw _0x336c33("package");
            }
            _0x43139b = _0x3643c7();
            if (!_0x3fbdd5.test(_0x43139b)) {
              throw _0x336c33(_0x43139b, "name");
            }
            _0x5c699f = _0x5c699f.define(_0x43139b);
            _0x522644(';');
          }
          function _0x3c4b0f() {
            var _0x4c40b6;
            var _0x4fa448 = _0x3b70fc();
            switch (_0x4fa448) {
              case "weak":
                _0x4c40b6 = _0x278859 || (_0x278859 = []);
                _0x3643c7();
                break;
              case "public":
                _0x3643c7();
              default:
                _0x4c40b6 = _0x531d22 || (_0x531d22 = []);
            }
            _0x4fa448 = _0xa4538e();
            _0x522644(';');
            _0x4c40b6.push(_0x4fa448);
          }
          function _0x215dc4() {
            _0x522644('=');
            _0x3fecf8 = _0xa4538e();
            if (!(_0x298ee3 = "proto3" === _0x3fecf8) && "proto2" !== _0x3fecf8) {
              throw _0x336c33(_0x3fecf8, "syntax");
            }
            _0x522644(';');
          }
          function _0x3524e5(_0x46a723, _0x40e924) {
            switch (_0x40e924) {
              case "option":
                _0xcf33d(_0x46a723, _0x40e924);
                _0x522644(';');
                return true;
              case "message":
                (function (_0x17bed1, _0x828a93) {
                  if (!_0x4b5ec7.test(_0x828a93 = _0x3643c7())) {
                    throw _0x336c33(_0x828a93, "type name");
                  }
                  var _0x365340 = new _0x5e21c4(_0x828a93);
                  _0x379473(_0x365340, function (_0x68ec44) {
                    if (!_0x3524e5(_0x365340, _0x68ec44)) {
                      switch (_0x68ec44) {
                        case "map":
                          !function (_0xa5577c) {
                            _0x522644('<');
                            var _0x2b3abb = _0x3643c7();
                            if (undefined === _0x595122.mapKey[_0x2b3abb]) {
                              throw _0x336c33(_0x2b3abb, "type");
                            }
                            _0x522644(',');
                            var _0x4168df = _0x3643c7();
                            if (!_0x3fbdd5.test(_0x4168df)) {
                              throw _0x336c33(_0x4168df, "type");
                            }
                            _0x522644('>');
                            var _0x13cf97 = _0x3643c7();
                            if (!_0x4b5ec7.test(_0x13cf97)) {
                              throw _0x336c33(_0x13cf97, "name");
                            }
                            _0x522644('=');
                            var _0xd1f90d = new _0x16e81c(_0x2e12df(_0x13cf97), _0x386c74(_0x3643c7()), _0x2b3abb, _0x4168df);
                            _0x379473(_0xd1f90d, function (_0x155351) {
                              if ("option" !== _0x155351) {
                                throw _0x336c33(_0x155351);
                              }
                              _0xcf33d(_0xd1f90d, _0x155351);
                              _0x522644(';');
                            }, function () {
                              _0x28e2d2(_0xd1f90d);
                            });
                            _0xa5577c.add(_0xd1f90d);
                          }(_0x365340);
                          break;
                        case "required":
                        case 'repeated':
                          _0x13f946(_0x365340, _0x68ec44);
                          break;
                        case "optional":
                          _0x13f946(_0x365340, _0x298ee3 ? 'proto3_optional' : "optional");
                          break;
                        case "oneof":
                          !function (_0x54a400, _0x3d2456) {
                            if (!_0x4b5ec7.test(_0x3d2456 = _0x3643c7())) {
                              throw _0x336c33(_0x3d2456, "name");
                            }
                            var _0x5b4918 = new _0x3472fb(_0x2e12df(_0x3d2456));
                            _0x379473(_0x5b4918, function (_0x462048) {
                              if ("option" === _0x462048) {
                                _0xcf33d(_0x5b4918, _0x462048);
                                _0x522644(';');
                              } else {
                                _0x168874(_0x462048);
                                _0x13f946(_0x5b4918, 'optional');
                              }
                            });
                            _0x54a400.add(_0x5b4918);
                          }(_0x365340, _0x68ec44);
                          break;
                        case "extensions":
                          _0x25b845(_0x365340.extensions || (_0x365340.extensions = []));
                          break;
                        case "reserved":
                          _0x25b845(_0x365340.reserved || (_0x365340.reserved = []), true);
                          break;
                        default:
                          if (!_0x298ee3 || !_0x3fbdd5.test(_0x68ec44)) {
                            throw _0x336c33(_0x68ec44);
                          }
                          _0x168874(_0x68ec44);
                          _0x13f946(_0x365340, "optional");
                      }
                    }
                  });
                  _0x17bed1.add(_0x365340);
                })(_0x46a723, _0x40e924);
                return true;
              case "enum":
                (function (_0x3b7728, _0x415f48) {
                  if (!_0x4b5ec7.test(_0x415f48 = _0x3643c7())) {
                    throw _0x336c33(_0x415f48, "name");
                  }
                  var _0x1aa45d = new _0x319f4f(_0x415f48);
                  _0x379473(_0x1aa45d, function (_0x161561) {
                    switch (_0x161561) {
                      case "option":
                        _0xcf33d(_0x1aa45d, _0x161561);
                        _0x522644(';');
                        break;
                      case "reserved":
                        _0x25b845(_0x1aa45d.reserved || (_0x1aa45d.reserved = []), true);
                        break;
                      default:
                        !function (_0x29ab93, _0x496eab) {
                          if (!_0x4b5ec7.test(_0x496eab)) {
                            throw _0x336c33(_0x496eab, "name");
                          }
                          _0x522644('=');
                          var _0x20f372 = _0x386c74(_0x3643c7(), true);
                          var _0x2b366b = {};
                          _0x379473(_0x2b366b, function (_0x522b3d) {
                            if ('option' !== _0x522b3d) {
                              throw _0x336c33(_0x522b3d);
                            }
                            _0xcf33d(_0x2b366b, _0x522b3d);
                            _0x522644(';');
                          }, function () {
                            _0x28e2d2(_0x2b366b);
                          });
                          _0x29ab93.add(_0x496eab, _0x20f372, _0x2b366b.comment);
                        }(_0x1aa45d, _0x161561);
                    }
                  });
                  _0x3b7728.add(_0x1aa45d);
                })(_0x46a723, _0x40e924);
                return true;
              case "service":
                (function (_0x5536be, _0x3259c4) {
                  if (!_0x4b5ec7.test(_0x3259c4 = _0x3643c7())) {
                    throw _0x336c33(_0x3259c4, "service name");
                  }
                  var _0x55a6f8 = new _0x152e95(_0x3259c4);
                  _0x379473(_0x55a6f8, function (_0x19cb9e) {
                    if (!_0x3524e5(_0x55a6f8, _0x19cb9e)) {
                      if ('rpc' !== _0x19cb9e) {
                        throw _0x336c33(_0x19cb9e);
                      }
                      !function (_0x13912d, _0x4a49e8) {
                        var _0x4f43ad = _0x3ca178();
                        var _0x9ee012 = _0x4a49e8;
                        if (!_0x4b5ec7.test(_0x4a49e8 = _0x3643c7())) {
                          throw _0x336c33(_0x4a49e8, "name");
                        }
                        var _0x8ee205;
                        var _0x3af323;
                        var _0x547c72;
                        var _0x18a5ab;
                        var _0x566592 = _0x4a49e8;
                        _0x522644('(');
                        if (_0x522644("stream", true)) {
                          _0x3af323 = true;
                        }
                        if (!_0x3fbdd5.test(_0x4a49e8 = _0x3643c7())) {
                          throw _0x336c33(_0x4a49e8);
                        }
                        _0x8ee205 = _0x4a49e8;
                        _0x522644(')');
                        _0x522644("returns");
                        _0x522644('(');
                        if (_0x522644("stream", true)) {
                          _0x18a5ab = true;
                        }
                        if (!_0x3fbdd5.test(_0x4a49e8 = _0x3643c7())) {
                          throw _0x336c33(_0x4a49e8);
                        }
                        _0x547c72 = _0x4a49e8;
                        _0x522644(')');
                        var _0x10e9a2 = new _0x5dbe05(_0x566592, _0x9ee012, _0x8ee205, _0x547c72, _0x3af323, _0x18a5ab);
                        _0x10e9a2.comment = _0x4f43ad;
                        _0x379473(_0x10e9a2, function (_0x21ac24) {
                          if ("option" !== _0x21ac24) {
                            throw _0x336c33(_0x21ac24);
                          }
                          _0xcf33d(_0x10e9a2, _0x21ac24);
                          _0x522644(';');
                        });
                        _0x13912d.add(_0x10e9a2);
                      }(_0x55a6f8, _0x19cb9e);
                    }
                  });
                  _0x5536be.add(_0x55a6f8);
                })(_0x46a723, _0x40e924);
                return true;
              case "extend":
                (function (_0x4add78, _0x575f19) {
                  if (!_0x3fbdd5.test(_0x575f19 = _0x3643c7())) {
                    throw _0x336c33(_0x575f19, "reference");
                  }
                  var _0x449cbe = _0x575f19;
                  _0x379473(null, function (_0x1e32a9) {
                    switch (_0x1e32a9) {
                      case 'required':
                      case "repeated":
                        _0x13f946(_0x4add78, _0x1e32a9, _0x449cbe);
                        break;
                      case "optional":
                        _0x13f946(_0x4add78, _0x298ee3 ? "proto3_optional" : "optional", _0x449cbe);
                        break;
                      default:
                        if (!_0x298ee3 || !_0x3fbdd5.test(_0x1e32a9)) {
                          throw _0x336c33(_0x1e32a9);
                        }
                        _0x168874(_0x1e32a9);
                        _0x13f946(_0x4add78, "optional", _0x449cbe);
                    }
                  });
                })(_0x46a723, _0x40e924);
                return true;
            }
            return false;
          }
          function _0x379473(_0x493454, _0x48125b, _0x4b4875) {
            var _0x27a27b = _0xa2db20.line;
            if (_0x493454) {
              if ('string' != typeof _0x493454.comment) {
                _0x493454.comment = _0x3ca178();
              }
              _0x493454.filename = _0x1182e9.filename;
            }
            if (_0x522644('{', true)) {
              for (var _0x565fe4; '}' !== (_0x565fe4 = _0x3643c7());) {
                _0x48125b(_0x565fe4);
              }
              _0x522644(';', true);
            } else {
              if (_0x4b4875) {
                _0x4b4875();
              }
              _0x522644(';');
              if (_0x493454 && ("string" != typeof _0x493454.comment || _0x1c230c)) {
                _0x493454.comment = _0x3ca178(_0x27a27b) || _0x493454.comment;
              }
            }
          }
          function _0x13f946(_0x2911ac, _0x4f51b6, _0x31486e) {
            var _0x5d69eb = _0x3643c7();
            if ("group" !== _0x5d69eb) {
              if (!_0x3fbdd5.test(_0x5d69eb)) {
                throw _0x336c33(_0x5d69eb, "type");
              }
              var _0x73454b = _0x3643c7();
              if (!_0x4b5ec7.test(_0x73454b)) {
                throw _0x336c33(_0x73454b, 'name');
              }
              _0x73454b = _0x2e12df(_0x73454b);
              _0x522644('=');
              var _0x2de7ab = new _0x3b7cb6(_0x73454b, _0x386c74(_0x3643c7()), _0x5d69eb, _0x4f51b6, _0x31486e);
              _0x379473(_0x2de7ab, function (_0x308d44) {
                if ('option' !== _0x308d44) {
                  throw _0x336c33(_0x308d44);
                }
                _0xcf33d(_0x2de7ab, _0x308d44);
                _0x522644(';');
              }, function () {
                _0x28e2d2(_0x2de7ab);
              });
              if ("proto3_optional" === _0x4f51b6) {
                var _0x1d2093 = new _0x3472fb('_' + _0x73454b);
                _0x2de7ab.setOption("proto3_optional", true);
                _0x1d2093.add(_0x2de7ab);
                _0x2911ac.add(_0x1d2093);
              } else {
                _0x2911ac.add(_0x2de7ab);
              }
              if (!(_0x298ee3 || !_0x2de7ab.repeated || undefined === _0x595122.packed[_0x5d69eb] && undefined !== _0x595122.basic[_0x5d69eb])) {
                _0x2de7ab.setOption("packed", false, true);
              }
            } else {
              !function (_0x208d81, _0xb7eaa2) {
                var _0x338fdc = _0x3643c7();
                if (!_0x4b5ec7.test(_0x338fdc)) {
                  throw _0x336c33(_0x338fdc, 'name');
                }
                var _0x37e3e1 = _0x3039dd.lcFirst(_0x338fdc);
                if (_0x338fdc === _0x37e3e1) {
                  _0x338fdc = _0x3039dd.ucFirst(_0x338fdc);
                }
                _0x522644('=');
                var _0x32e48a = _0x386c74(_0x3643c7());
                var _0x4d7f02 = new _0x5e21c4(_0x338fdc);
                _0x4d7f02.group = true;
                var _0x6ff43e = new _0x3b7cb6(_0x37e3e1, _0x32e48a, _0x338fdc, _0xb7eaa2);
                _0x6ff43e.filename = _0x1182e9.filename;
                _0x379473(_0x4d7f02, function (_0x255983) {
                  switch (_0x255983) {
                    case "option":
                      _0xcf33d(_0x4d7f02, _0x255983);
                      _0x522644(';');
                      break;
                    case "required":
                    case "repeated":
                      _0x13f946(_0x4d7f02, _0x255983);
                      break;
                    case "optional":
                      _0x13f946(_0x4d7f02, _0x298ee3 ? "proto3_optional" : "optional");
                      break;
                    default:
                      throw _0x336c33(_0x255983);
                  }
                });
                _0x208d81.add(_0x4d7f02).add(_0x6ff43e);
              }(_0x2911ac, _0x4f51b6);
            }
          }
          function _0xcf33d(_0x48bf14, _0x4b0d81) {
            var _0x12f9c3 = _0x522644('(', true);
            if (!_0x3fbdd5.test(_0x4b0d81 = _0x3643c7())) {
              throw _0x336c33(_0x4b0d81, "name");
            }
            var _0x5aefe3;
            var _0x4b2c83 = _0x4b0d81;
            var _0x5689c3 = _0x4b2c83;
            if (_0x12f9c3) {
              _0x522644(')');
              _0x5689c3 = _0x4b2c83 = '(' + _0x4b2c83 + ')';
              _0x4b0d81 = _0x3b70fc();
              if (_0x20d270.test(_0x4b0d81)) {
                _0x5aefe3 = _0x4b0d81.substr(0x1);
                _0x4b2c83 += _0x4b0d81;
                _0x3643c7();
              }
            }
            _0x522644('=');
            (function (_0x3bbc98, _0x7e62b7, _0x57a56b, _0x4e1961) {
              if (_0x3bbc98.setParsedOption) {
                _0x3bbc98.setParsedOption(_0x7e62b7, _0x57a56b, _0x4e1961);
              }
            })(_0x48bf14, _0x5689c3, _0x3f428c(_0x48bf14, _0x4b2c83), _0x5aefe3);
          }
          function _0x3f428c(_0x958cee, _0x12138a) {
            if (_0x522644('{', true)) {
              for (var _0x5351ab = {}; !_0x522644('}', true);) {
                if (!_0x4b5ec7.test(_0x331631 = _0x3643c7())) {
                  throw _0x336c33(_0x331631, "name");
                }
                var _0xa3bd88;
                var _0x5b0a22 = _0x331631;
                if ('{' === _0x3b70fc()) {
                  _0xa3bd88 = _0x3f428c(_0x958cee, _0x12138a + '.' + _0x331631);
                } else {
                  _0x522644(':');
                  if ('{' === _0x3b70fc()) {
                    _0xa3bd88 = _0x3f428c(_0x958cee, _0x12138a + '.' + _0x331631);
                  } else {
                    _0xa3bd88 = _0x6ccc93(true);
                    _0x3f65da(_0x958cee, _0x12138a + '.' + _0x331631, _0xa3bd88);
                  }
                }
                var _0x1ac476 = _0x5351ab[_0x5b0a22];
                if (_0x1ac476) {
                  _0xa3bd88 = [].concat(_0x1ac476).concat(_0xa3bd88);
                }
                _0x5351ab[_0x5b0a22] = _0xa3bd88;
                _0x522644(',', true);
              }
              return _0x5351ab;
            }
            var _0x27e614 = _0x6ccc93(true);
            _0x3f65da(_0x958cee, _0x12138a, _0x27e614);
            return _0x27e614;
          }
          function _0x3f65da(_0x71af0c, _0x3f48ac, _0x36bc39) {
            if (_0x71af0c.setOption) {
              _0x71af0c.setOption(_0x3f48ac, _0x36bc39);
            }
          }
          function _0x28e2d2(_0x54629c) {
            if (_0x522644('[', true)) {
              do {
                _0xcf33d(_0x54629c, "option");
              } while (_0x522644(',', true));
              _0x522644(']');
            }
            return _0x54629c;
          }
          for (; null !== (_0x331631 = _0x3643c7());) {
            switch (_0x331631) {
              case 'package':
                if (!_0x5d72cc) {
                  throw _0x336c33(_0x331631);
                }
                _0x3470c9();
                break;
              case "import":
                if (!_0x5d72cc) {
                  throw _0x336c33(_0x331631);
                }
                _0x3c4b0f();
                break;
              case "syntax":
                if (!_0x5d72cc) {
                  throw _0x336c33(_0x331631);
                }
                _0x215dc4();
                break;
              case "option":
                _0xcf33d(_0x5c699f, _0x331631);
                _0x522644(';');
                break;
              default:
                if (_0x3524e5(_0x5c699f, _0x331631)) {
                  _0x5d72cc = false;
                  continue;
                }
                throw _0x336c33(_0x331631);
            }
          }
          _0x1182e9.filename = null;
          return {
            'package': _0x43139b,
            'imports': _0x531d22,
            'weakImports': _0x278859,
            'syntax': _0x3fecf8,
            'root': _0x480d4a
          };
        }
        _0x62d1eb.exports;
      }, function () {
        return {
          './tokenize': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          './root': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/root.js',
          './type': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './field': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './mapfield': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './oneof': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './service': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          './method': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          './types': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/types.js',
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/common.js", function (_0x2cb415, _0xa1b3d3, _0x47c854, _0x3f4418, _0x314620) {
        _0x47c854.exports = _0x17325a;
        var _0x53c084;
        var _0x1b1ae2 = /\/|\./;
        function _0x17325a(_0x58ff08, _0x233b04) {
          if (!_0x1b1ae2.test(_0x58ff08)) {
            _0x58ff08 = "google/protobuf/" + _0x58ff08 + ".proto";
            _0x233b04 = {
              'nested': {
                'google': {
                  'nested': {
                    'protobuf': {
                      'nested': _0x233b04
                    }
                  }
                }
              }
            };
          }
          _0x17325a[_0x58ff08] = _0x233b04;
        }
        _0x17325a("any", {
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
        _0x17325a("duration", {
          'Duration': _0x53c084 = {
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
        _0x17325a("timestamp", {
          'Timestamp': _0x53c084
        });
        _0x17325a("empty", {
          'Empty': {
            'fields': {}
          }
        });
        _0x17325a("struct", {
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
                'oneof': ["nullValue", "numberValue", 'stringValue', 'boolValue', "structValue", "listValue"]
              }
            },
            'fields': {
              'nullValue': {
                'type': "NullValue",
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
                'rule': 'repeated',
                'type': "Value",
                'id': 0x1
              }
            }
          }
        });
        _0x17325a("wrappers", {
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
        _0x17325a("field_mask", {
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
        _0x17325a.get = function (_0x59b50a) {
          return _0x17325a[_0x59b50a] || null;
        };
        _0x47c854.exports;
      }, {});
      var _0x24488d;
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/index.js", function (_0x274957, _0x5aa6a3, _0x4ca45f, _0x25dd9c, _0x5d654e) {
        var _0x96f41b = _0x4ca45f.exports = _0x5aa6a3('./index-light');
        _0x96f41b.build = "full";
        _0x96f41b.tokenize = _0x5aa6a3("./tokenize");
        _0x96f41b.parse = _0x5aa6a3('./parse');
        _0x96f41b.common = _0x5aa6a3("./common");
        _0x96f41b.Root._configure(_0x96f41b.Type, _0x96f41b.parse, _0x96f41b.common);
        _0x4ca45f.exports;
      }, function () {
        return {
          './index-light': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js",
          './tokenize': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          './parse': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/parse.js',
          './common': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/common.js"
        };
      });
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/index.js", function (_0x21c319, _0x3dc7f1, _0x55caa2, _0x1ba2bb, _0x2d421e) {
        _0x55caa2.exports = _0x3dc7f1("./src/index");
        _0x24488d = _0x55caa2.exports;
      }, function () {
        return {
          './src/index': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/index.js"
        };
      });
      _0x557447.require("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/index.js");
      var _0x204350;
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/minimal.js", function (_0x1ad786, _0x39f236, _0x2763ff, _0x250331, _0x2426f7) {
        _0x2763ff.exports = _0x39f236("./src/index-minimal");
        _0x2763ff.exports;
      }, function () {
        return {
          './src/index-minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js"
        };
      });
      _0x557447.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/assets/game/Script/Proto/mwProto.js", function (_0x594a96, _0x50812d, _0x1ae42e, _0x250de1, _0x26b66b) {
        var _0x31f343;
        var _0x22073f = _0x50812d("protobufjs/minimal");
        var _0x27ccd1 = _0x22073f.Reader;
        var _0x3ba80b = _0x22073f.Writer;
        var _0x56e11e = _0x22073f.util;
        var _0x33da1e = _0x22073f.roots["default"] || (_0x22073f.roots["default"] = {});
        (_0x31f343 = {
          "Column": function () {
            function _0x4cd3c2(_0x280341) {
              this.Column = [];
              if (_0x280341) {
                var _0x17960f = Object.keys(_0x280341);
                for (var _0x108bf0 = 0x0; _0x108bf0 < _0x17960f.length; ++_0x108bf0) {
                  if (null != _0x280341[_0x17960f[_0x108bf0]]) {
                    this[_0x17960f[_0x108bf0]] = _0x280341[_0x17960f[_0x108bf0]];
                  }
                }
              }
            }
            _0x4cd3c2.prototype.Column = _0x56e11e.emptyArray;
            _0x4cd3c2.create = function (_0x10bc74) {
              return new _0x4cd3c2(_0x10bc74);
            };
            _0x4cd3c2.encode = function (_0x20ae34, _0x222011) {
              if (!_0x222011) {
                _0x222011 = _0x3ba80b.create();
              }
              if (null != _0x20ae34.Column && _0x20ae34.Column.length) {
                _0x222011.uint32(0xa).fork();
                for (var _0xea045 = 0x0; _0xea045 < _0x20ae34.Column.length; ++_0xea045) {
                  _0x222011.int32(_0x20ae34.Column[_0xea045]);
                }
                _0x222011.ldelim();
              }
              return _0x222011;
            };
            _0x4cd3c2.encodeDelimited = function (_0x40b113, _0x34bd04) {
              return this.encode(_0x40b113, _0x34bd04).ldelim();
            };
            _0x4cd3c2.decode = function (_0x485ce8, _0xd76882) {
              if (!(_0x485ce8 instanceof _0x27ccd1)) {
                _0x485ce8 = _0x27ccd1.create(_0x485ce8);
              }
              var _0xabe19 = undefined === _0xd76882 ? _0x485ce8.len : _0x485ce8.pos + _0xd76882;
              for (var _0x2e1708 = new _0x33da1e.mwProto.Column(); _0x485ce8.pos < _0xabe19;) {
                var _0x58afc6 = _0x485ce8.uint32();
                switch (_0x58afc6 >>> 0x3) {
                  case 0x1:
                    if (!(_0x2e1708.Column && _0x2e1708.Column.length)) {
                      _0x2e1708.Column = [];
                    }
                    if (0x2 == (0x7 & _0x58afc6)) {
                      for (var _0x102393 = _0x485ce8.uint32() + _0x485ce8.pos; _0x485ce8.pos < _0x102393;) {
                        _0x2e1708.Column.push(_0x485ce8.int32());
                      }
                    } else {
                      _0x2e1708.Column.push(_0x485ce8.int32());
                    }
                    break;
                  default:
                    _0x485ce8.skipType(0x7 & _0x58afc6);
                }
              }
              return _0x2e1708;
            };
            _0x4cd3c2.decodeDelimited = function (_0x30ba00) {
              if (!(_0x30ba00 instanceof _0x27ccd1)) {
                _0x30ba00 = new _0x27ccd1(_0x30ba00);
              }
              return this.decode(_0x30ba00, _0x30ba00.uint32());
            };
            _0x4cd3c2.verify = function (_0x200445) {
              if ('object' != typeof _0x200445 || null === _0x200445) {
                return "object expected";
              }
              if (null != _0x200445.Column && _0x200445.hasOwnProperty("Column")) {
                if (!Array.isArray(_0x200445.Column)) {
                  return "Column: array expected";
                }
                for (var _0x2e3bb5 = 0x0; _0x2e3bb5 < _0x200445.Column.length; ++_0x2e3bb5) {
                  if (!_0x56e11e.isInteger(_0x200445.Column[_0x2e3bb5])) {
                    return "Column: integer[] expected";
                  }
                }
              }
              return null;
            };
            _0x4cd3c2.fromObject = function (_0x21962e) {
              if (_0x21962e instanceof _0x33da1e.mwProto.Column) {
                return _0x21962e;
              }
              var _0x1e8938 = new _0x33da1e.mwProto.Column();
              if (_0x21962e.Column) {
                if (!Array.isArray(_0x21962e.Column)) {
                  throw TypeError(".mwProto.Column.Column: array expected");
                }
                _0x1e8938.Column = [];
                for (var _0x7d20ef = 0x0; _0x7d20ef < _0x21962e.Column.length; ++_0x7d20ef) {
                  _0x1e8938.Column[_0x7d20ef] = 0x0 | _0x21962e.Column[_0x7d20ef];
                }
              }
              return _0x1e8938;
            };
            _0x4cd3c2.toObject = function (_0x2a97ae, _0x33bcf6) {
              if (!_0x33bcf6) {
                _0x33bcf6 = {};
              }
              var _0x40dd5b = {};
              if (_0x33bcf6.arrays || _0x33bcf6.defaults) {
                _0x40dd5b.Column = [];
              }
              if (_0x2a97ae.Column && _0x2a97ae.Column.length) {
                _0x40dd5b.Column = [];
                for (var _0x5280fa = 0x0; _0x5280fa < _0x2a97ae.Column.length; ++_0x5280fa) {
                  _0x40dd5b.Column[_0x5280fa] = _0x2a97ae.Column[_0x5280fa];
                }
              }
              return _0x40dd5b;
            };
            _0x4cd3c2.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x22073f.util.toJSONOptions);
            };
            _0x4cd3c2.getTypeUrl = function (_0xf3ad37) {
              if (undefined === _0xf3ad37) {
                _0xf3ad37 = "type.googleapis.com";
              }
              return _0xf3ad37 + '/mwProto.Column';
            };
            return _0x4cd3c2;
          }(),
          AwardData: function () {
            function _0x442905(_0x95aa7b) {
              this.GridVec = [];
              if (_0x95aa7b) {
                var _0xbab5fe = Object.keys(_0x95aa7b);
                for (var _0x1f886f = 0x0; _0x1f886f < _0xbab5fe.length; ++_0x1f886f) {
                  if (null != _0x95aa7b[_0xbab5fe[_0x1f886f]]) {
                    this[_0xbab5fe[_0x1f886f]] = _0x95aa7b[_0xbab5fe[_0x1f886f]];
                  }
                }
              }
            }
            _0x442905.prototype.Symbol = 0x0;
            _0x442905.prototype.Count = 0x0;
            _0x442905.prototype.LineNum = 0x0;
            _0x442905.prototype.Win = 0x0;
            _0x442905.prototype.GridVec = _0x56e11e.emptyArray;
            _0x442905.create = function (_0x3f23ca) {
              return new _0x442905(_0x3f23ca);
            };
            _0x442905.encode = function (_0x44a300, _0x30054c) {
              if (!_0x30054c) {
                _0x30054c = _0x3ba80b.create();
              }
              if (null != _0x44a300.Symbol && Object.hasOwnProperty.call(_0x44a300, "Symbol")) {
                _0x30054c.uint32(0x8).int32(_0x44a300.Symbol);
              }
              if (null != _0x44a300.Count && Object.hasOwnProperty.call(_0x44a300, "Count")) {
                _0x30054c.uint32(0x10).int32(_0x44a300.Count);
              }
              if (null != _0x44a300.LineNum && Object.hasOwnProperty.call(_0x44a300, "LineNum")) {
                _0x30054c.uint32(0x18).int32(_0x44a300.LineNum);
              }
              if (null != _0x44a300.Win && Object.hasOwnProperty.call(_0x44a300, 'Win')) {
                _0x30054c.uint32(0x21).double(_0x44a300.Win);
              }
              if (null != _0x44a300.GridVec && _0x44a300.GridVec.length) {
                for (var _0x3fbb9b = 0x0; _0x3fbb9b < _0x44a300.GridVec.length; ++_0x3fbb9b) {
                  _0x33da1e.mwProto.Grid.encode(_0x44a300.GridVec[_0x3fbb9b], _0x30054c.uint32(0x2a).fork()).ldelim();
                }
              }
              return _0x30054c;
            };
            _0x442905.encodeDelimited = function (_0x35b4a8, _0x933cd2) {
              return this.encode(_0x35b4a8, _0x933cd2).ldelim();
            };
            _0x442905.decode = function (_0x3f0cb7, _0x30388b) {
              if (!(_0x3f0cb7 instanceof _0x27ccd1)) {
                _0x3f0cb7 = _0x27ccd1.create(_0x3f0cb7);
              }
              var _0x85f843 = undefined === _0x30388b ? _0x3f0cb7.len : _0x3f0cb7.pos + _0x30388b;
              for (var _0x5ad063 = new _0x33da1e.mwProto.AwardData(); _0x3f0cb7.pos < _0x85f843;) {
                var _0x7b6ac = _0x3f0cb7.uint32();
                switch (_0x7b6ac >>> 0x3) {
                  case 0x1:
                    _0x5ad063.Symbol = _0x3f0cb7.int32();
                    break;
                  case 0x2:
                    _0x5ad063.Count = _0x3f0cb7.int32();
                    break;
                  case 0x3:
                    _0x5ad063.LineNum = _0x3f0cb7.int32();
                    break;
                  case 0x4:
                    _0x5ad063.Win = _0x3f0cb7.double();
                    break;
                  case 0x5:
                    if (!(_0x5ad063.GridVec && _0x5ad063.GridVec.length)) {
                      _0x5ad063.GridVec = [];
                    }
                    _0x5ad063.GridVec.push(_0x33da1e.mwProto.Grid.decode(_0x3f0cb7, _0x3f0cb7.uint32()));
                    break;
                  default:
                    _0x3f0cb7.skipType(0x7 & _0x7b6ac);
                }
              }
              return _0x5ad063;
            };
            _0x442905.decodeDelimited = function (_0xe79c6) {
              if (!(_0xe79c6 instanceof _0x27ccd1)) {
                _0xe79c6 = new _0x27ccd1(_0xe79c6);
              }
              return this.decode(_0xe79c6, _0xe79c6.uint32());
            };
            _0x442905.verify = function (_0x35fa67) {
              if ("object" != typeof _0x35fa67 || null === _0x35fa67) {
                return "object expected";
              }
              if (null != _0x35fa67.Symbol && _0x35fa67.hasOwnProperty("Symbol") && !_0x56e11e.isInteger(_0x35fa67.Symbol)) {
                return "Symbol: integer expected";
              }
              if (null != _0x35fa67.Count && _0x35fa67.hasOwnProperty("Count") && !_0x56e11e.isInteger(_0x35fa67.Count)) {
                return "Count: integer expected";
              }
              if (null != _0x35fa67.LineNum && _0x35fa67.hasOwnProperty("LineNum") && !_0x56e11e.isInteger(_0x35fa67.LineNum)) {
                return "LineNum: integer expected";
              }
              if (null != _0x35fa67.Win && _0x35fa67.hasOwnProperty('Win') && "number" != typeof _0x35fa67.Win) {
                return "Win: number expected";
              }
              if (null != _0x35fa67.GridVec && _0x35fa67.hasOwnProperty('GridVec')) {
                if (!Array.isArray(_0x35fa67.GridVec)) {
                  return "GridVec: array expected";
                }
                for (var _0x5a4a4b = 0x0; _0x5a4a4b < _0x35fa67.GridVec.length; ++_0x5a4a4b) {
                  var _0x364bbb = _0x33da1e.mwProto.Grid.verify(_0x35fa67.GridVec[_0x5a4a4b]);
                  if (_0x364bbb) {
                    return "GridVec." + _0x364bbb;
                  }
                }
              }
              return null;
            };
            _0x442905.fromObject = function (_0x59e888) {
              if (_0x59e888 instanceof _0x33da1e.mwProto.AwardData) {
                return _0x59e888;
              }
              var _0x56dbe7 = new _0x33da1e.mwProto.AwardData();
              if (null != _0x59e888.Symbol) {
                _0x56dbe7.Symbol = 0x0 | _0x59e888.Symbol;
              }
              if (null != _0x59e888.Count) {
                _0x56dbe7.Count = 0x0 | _0x59e888.Count;
              }
              if (null != _0x59e888.LineNum) {
                _0x56dbe7.LineNum = 0x0 | _0x59e888.LineNum;
              }
              if (null != _0x59e888.Win) {
                _0x56dbe7.Win = Number(_0x59e888.Win);
              }
              if (_0x59e888.GridVec) {
                if (!Array.isArray(_0x59e888.GridVec)) {
                  throw TypeError(".mwProto.AwardData.GridVec: array expected");
                }
                _0x56dbe7.GridVec = [];
                for (var _0x2bbe48 = 0x0; _0x2bbe48 < _0x59e888.GridVec.length; ++_0x2bbe48) {
                  if ("object" != typeof _0x59e888.GridVec[_0x2bbe48]) {
                    throw TypeError(".mwProto.AwardData.GridVec: object expected");
                  }
                  _0x56dbe7.GridVec[_0x2bbe48] = _0x33da1e.mwProto.Grid.fromObject(_0x59e888.GridVec[_0x2bbe48]);
                }
              }
              return _0x56dbe7;
            };
            _0x442905.toObject = function (_0x5d2a40, _0x111230) {
              if (!_0x111230) {
                _0x111230 = {};
              }
              var _0x3311bf = {};
              if (_0x111230.arrays || _0x111230.defaults) {
                _0x3311bf.GridVec = [];
              }
              if (_0x111230.defaults) {
                _0x3311bf.Symbol = 0x0;
                _0x3311bf.Count = 0x0;
                _0x3311bf.LineNum = 0x0;
                _0x3311bf.Win = 0x0;
              }
              if (null != _0x5d2a40.Symbol && _0x5d2a40.hasOwnProperty("Symbol")) {
                _0x3311bf.Symbol = _0x5d2a40.Symbol;
              }
              if (null != _0x5d2a40.Count && _0x5d2a40.hasOwnProperty("Count")) {
                _0x3311bf.Count = _0x5d2a40.Count;
              }
              if (null != _0x5d2a40.LineNum && _0x5d2a40.hasOwnProperty("LineNum")) {
                _0x3311bf.LineNum = _0x5d2a40.LineNum;
              }
              if (null != _0x5d2a40.Win && _0x5d2a40.hasOwnProperty("Win")) {
                _0x3311bf.Win = _0x111230.json && !isFinite(_0x5d2a40.Win) ? String(_0x5d2a40.Win) : _0x5d2a40.Win;
              }
              if (_0x5d2a40.GridVec && _0x5d2a40.GridVec.length) {
                _0x3311bf.GridVec = [];
                for (var _0x45e6f2 = 0x0; _0x45e6f2 < _0x5d2a40.GridVec.length; ++_0x45e6f2) {
                  _0x3311bf.GridVec[_0x45e6f2] = _0x33da1e.mwProto.Grid.toObject(_0x5d2a40.GridVec[_0x45e6f2], _0x111230);
                }
              }
              return _0x3311bf;
            };
            _0x442905.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x22073f.util.toJSONOptions);
            };
            _0x442905.getTypeUrl = function (_0x1e8eea) {
              if (undefined === _0x1e8eea) {
                _0x1e8eea = "type.googleapis.com";
              }
              return _0x1e8eea + "/mwProto.AwardData";
            };
            return _0x442905;
          }(),
          "ComboStageInfo": function () {
            function _0x483d40(_0x5a7978) {
              this.ComboStageSymbol = [];
              this.AwardDataVec = [];
              this.FillSymbols = [];
              this.NewFrameSymbols = [];
              if (_0x5a7978) {
                var _0x8cfeaf = Object.keys(_0x5a7978);
                for (var _0x28edaa = 0x0; _0x28edaa < _0x8cfeaf.length; ++_0x28edaa) {
                  if (null != _0x5a7978[_0x8cfeaf[_0x28edaa]]) {
                    this[_0x8cfeaf[_0x28edaa]] = _0x5a7978[_0x8cfeaf[_0x28edaa]];
                  }
                }
              }
            }
            _0x483d40.prototype.ComboStageSymbol = _0x56e11e.emptyArray;
            _0x483d40.prototype.ComboStageWin = 0x0;
            _0x483d40.prototype.ComboStageMult = 0x0;
            _0x483d40.prototype.MysteryTarget = 0x0;
            _0x483d40.prototype.AwardDataVec = _0x56e11e.emptyArray;
            _0x483d40.prototype.FillSymbols = _0x56e11e.emptyArray;
            _0x483d40.prototype.NewFrameSymbols = _0x56e11e.emptyArray;
            _0x483d40.create = function (_0x5b78dc) {
              return new _0x483d40(_0x5b78dc);
            };
            _0x483d40.encode = function (_0x46d4b2, _0x28fb4a) {
              if (!_0x28fb4a) {
                _0x28fb4a = _0x3ba80b.create();
              }
              if (null != _0x46d4b2.ComboStageSymbol && _0x46d4b2.ComboStageSymbol.length) {
                for (var _0x2d5145 = 0x0; _0x2d5145 < _0x46d4b2.ComboStageSymbol.length; ++_0x2d5145) {
                  _0x33da1e.mwProto.Column.encode(_0x46d4b2.ComboStageSymbol[_0x2d5145], _0x28fb4a.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0x46d4b2.ComboStageWin && Object.hasOwnProperty.call(_0x46d4b2, "ComboStageWin")) {
                _0x28fb4a.uint32(0x11).double(_0x46d4b2.ComboStageWin);
              }
              if (null != _0x46d4b2.ComboStageMult && Object.hasOwnProperty.call(_0x46d4b2, "ComboStageMult")) {
                _0x28fb4a.uint32(0x19).double(_0x46d4b2.ComboStageMult);
              }
              if (null != _0x46d4b2.MysteryTarget && Object.hasOwnProperty.call(_0x46d4b2, "MysteryTarget")) {
                _0x28fb4a.uint32(0x20).int32(_0x46d4b2.MysteryTarget);
              }
              if (null != _0x46d4b2.AwardDataVec && _0x46d4b2.AwardDataVec.length) {
                for (_0x2d5145 = 0x0; _0x2d5145 < _0x46d4b2.AwardDataVec.length; ++_0x2d5145) {
                  _0x33da1e.mwProto.AwardData.encode(_0x46d4b2.AwardDataVec[_0x2d5145], _0x28fb4a.uint32(0x2a).fork()).ldelim();
                }
              }
              if (null != _0x46d4b2.FillSymbols && _0x46d4b2.FillSymbols.length) {
                for (_0x2d5145 = 0x0; _0x2d5145 < _0x46d4b2.FillSymbols.length; ++_0x2d5145) {
                  _0x33da1e.mwProto.Column.encode(_0x46d4b2.FillSymbols[_0x2d5145], _0x28fb4a.uint32(0x32).fork()).ldelim();
                }
              }
              if (null != _0x46d4b2.NewFrameSymbols && _0x46d4b2.NewFrameSymbols.length) {
                for (_0x2d5145 = 0x0; _0x2d5145 < _0x46d4b2.NewFrameSymbols.length; ++_0x2d5145) {
                  _0x33da1e.mwProto.Column.encode(_0x46d4b2.NewFrameSymbols[_0x2d5145], _0x28fb4a.uint32(0x3a).fork()).ldelim();
                }
              }
              return _0x28fb4a;
            };
            _0x483d40.encodeDelimited = function (_0x3eb08e, _0x446312) {
              return this.encode(_0x3eb08e, _0x446312).ldelim();
            };
            _0x483d40.decode = function (_0x4f7c5f, _0x401b69) {
              if (!(_0x4f7c5f instanceof _0x27ccd1)) {
                _0x4f7c5f = _0x27ccd1.create(_0x4f7c5f);
              }
              var _0x393a7d = undefined === _0x401b69 ? _0x4f7c5f.len : _0x4f7c5f.pos + _0x401b69;
              for (var _0x341f = new _0x33da1e.mwProto.ComboStageInfo(); _0x4f7c5f.pos < _0x393a7d;) {
                var _0xd62b = _0x4f7c5f.uint32();
                switch (_0xd62b >>> 0x3) {
                  case 0x1:
                    if (!(_0x341f.ComboStageSymbol && _0x341f.ComboStageSymbol.length)) {
                      _0x341f.ComboStageSymbol = [];
                    }
                    _0x341f.ComboStageSymbol.push(_0x33da1e.mwProto.Column.decode(_0x4f7c5f, _0x4f7c5f.uint32()));
                    break;
                  case 0x2:
                    _0x341f.ComboStageWin = _0x4f7c5f.double();
                    break;
                  case 0x3:
                    _0x341f.ComboStageMult = _0x4f7c5f.double();
                    break;
                  case 0x4:
                    _0x341f.MysteryTarget = _0x4f7c5f.int32();
                    break;
                  case 0x5:
                    if (!(_0x341f.AwardDataVec && _0x341f.AwardDataVec.length)) {
                      _0x341f.AwardDataVec = [];
                    }
                    _0x341f.AwardDataVec.push(_0x33da1e.mwProto.AwardData.decode(_0x4f7c5f, _0x4f7c5f.uint32()));
                    break;
                  case 0x6:
                    if (!(_0x341f.FillSymbols && _0x341f.FillSymbols.length)) {
                      _0x341f.FillSymbols = [];
                    }
                    _0x341f.FillSymbols.push(_0x33da1e.mwProto.Column.decode(_0x4f7c5f, _0x4f7c5f.uint32()));
                    break;
                  case 0x7:
                    if (!(_0x341f.NewFrameSymbols && _0x341f.NewFrameSymbols.length)) {
                      _0x341f.NewFrameSymbols = [];
                    }
                    _0x341f.NewFrameSymbols.push(_0x33da1e.mwProto.Column.decode(_0x4f7c5f, _0x4f7c5f.uint32()));
                    break;
                  default:
                    _0x4f7c5f.skipType(0x7 & _0xd62b);
                }
              }
              return _0x341f;
            };
            _0x483d40.decodeDelimited = function (_0x3e0f2d) {
              if (!(_0x3e0f2d instanceof _0x27ccd1)) {
                _0x3e0f2d = new _0x27ccd1(_0x3e0f2d);
              }
              return this.decode(_0x3e0f2d, _0x3e0f2d.uint32());
            };
            _0x483d40.verify = function (_0x321802) {
              if ("object" != typeof _0x321802 || null === _0x321802) {
                return "object expected";
              }
              if (null != _0x321802.ComboStageSymbol && _0x321802.hasOwnProperty("ComboStageSymbol")) {
                if (!Array.isArray(_0x321802.ComboStageSymbol)) {
                  return "ComboStageSymbol: array expected";
                }
                for (var _0x1f6b1f = 0x0; _0x1f6b1f < _0x321802.ComboStageSymbol.length; ++_0x1f6b1f) {
                  if (_0x5277c0 = _0x33da1e.mwProto.Column.verify(_0x321802.ComboStageSymbol[_0x1f6b1f])) {
                    return "ComboStageSymbol." + _0x5277c0;
                  }
                }
              }
              if (null != _0x321802.ComboStageWin && _0x321802.hasOwnProperty("ComboStageWin") && "number" != typeof _0x321802.ComboStageWin) {
                return "ComboStageWin: number expected";
              }
              if (null != _0x321802.ComboStageMult && _0x321802.hasOwnProperty("ComboStageMult") && 'number' != typeof _0x321802.ComboStageMult) {
                return "ComboStageMult: number expected";
              }
              if (null != _0x321802.MysteryTarget && _0x321802.hasOwnProperty("MysteryTarget") && !_0x56e11e.isInteger(_0x321802.MysteryTarget)) {
                return "MysteryTarget: integer expected";
              }
              if (null != _0x321802.AwardDataVec && _0x321802.hasOwnProperty('AwardDataVec')) {
                if (!Array.isArray(_0x321802.AwardDataVec)) {
                  return "AwardDataVec: array expected";
                }
                for (_0x1f6b1f = 0x0; _0x1f6b1f < _0x321802.AwardDataVec.length; ++_0x1f6b1f) {
                  if (_0x5277c0 = _0x33da1e.mwProto.AwardData.verify(_0x321802.AwardDataVec[_0x1f6b1f])) {
                    return "AwardDataVec." + _0x5277c0;
                  }
                }
              }
              if (null != _0x321802.FillSymbols && _0x321802.hasOwnProperty("FillSymbols")) {
                if (!Array.isArray(_0x321802.FillSymbols)) {
                  return "FillSymbols: array expected";
                }
                for (_0x1f6b1f = 0x0; _0x1f6b1f < _0x321802.FillSymbols.length; ++_0x1f6b1f) {
                  if (_0x5277c0 = _0x33da1e.mwProto.Column.verify(_0x321802.FillSymbols[_0x1f6b1f])) {
                    return "FillSymbols." + _0x5277c0;
                  }
                }
              }
              if (null != _0x321802.NewFrameSymbols && _0x321802.hasOwnProperty('NewFrameSymbols')) {
                if (!Array.isArray(_0x321802.NewFrameSymbols)) {
                  return "NewFrameSymbols: array expected";
                }
                for (_0x1f6b1f = 0x0; _0x1f6b1f < _0x321802.NewFrameSymbols.length; ++_0x1f6b1f) {
                  var _0x5277c0;
                  if (_0x5277c0 = _0x33da1e.mwProto.Column.verify(_0x321802.NewFrameSymbols[_0x1f6b1f])) {
                    return "NewFrameSymbols." + _0x5277c0;
                  }
                }
              }
              return null;
            };
            _0x483d40.fromObject = function (_0x474c30) {
              if (_0x474c30 instanceof _0x33da1e.mwProto.ComboStageInfo) {
                return _0x474c30;
              }
              var _0x1e6f1b = new _0x33da1e.mwProto.ComboStageInfo();
              if (_0x474c30.ComboStageSymbol) {
                if (!Array.isArray(_0x474c30.ComboStageSymbol)) {
                  throw TypeError(".mwProto.ComboStageInfo.ComboStageSymbol: array expected");
                }
                _0x1e6f1b.ComboStageSymbol = [];
                for (var _0x1a52a7 = 0x0; _0x1a52a7 < _0x474c30.ComboStageSymbol.length; ++_0x1a52a7) {
                  if ('object' != typeof _0x474c30.ComboStageSymbol[_0x1a52a7]) {
                    throw TypeError(".mwProto.ComboStageInfo.ComboStageSymbol: object expected");
                  }
                  _0x1e6f1b.ComboStageSymbol[_0x1a52a7] = _0x33da1e.mwProto.Column.fromObject(_0x474c30.ComboStageSymbol[_0x1a52a7]);
                }
              }
              if (null != _0x474c30.ComboStageWin) {
                _0x1e6f1b.ComboStageWin = Number(_0x474c30.ComboStageWin);
              }
              if (null != _0x474c30.ComboStageMult) {
                _0x1e6f1b.ComboStageMult = Number(_0x474c30.ComboStageMult);
              }
              if (null != _0x474c30.MysteryTarget) {
                _0x1e6f1b.MysteryTarget = 0x0 | _0x474c30.MysteryTarget;
              }
              if (_0x474c30.AwardDataVec) {
                if (!Array.isArray(_0x474c30.AwardDataVec)) {
                  throw TypeError(".mwProto.ComboStageInfo.AwardDataVec: array expected");
                }
                _0x1e6f1b.AwardDataVec = [];
                for (_0x1a52a7 = 0x0; _0x1a52a7 < _0x474c30.AwardDataVec.length; ++_0x1a52a7) {
                  if ("object" != typeof _0x474c30.AwardDataVec[_0x1a52a7]) {
                    throw TypeError(".mwProto.ComboStageInfo.AwardDataVec: object expected");
                  }
                  _0x1e6f1b.AwardDataVec[_0x1a52a7] = _0x33da1e.mwProto.AwardData.fromObject(_0x474c30.AwardDataVec[_0x1a52a7]);
                }
              }
              if (_0x474c30.FillSymbols) {
                if (!Array.isArray(_0x474c30.FillSymbols)) {
                  throw TypeError(".mwProto.ComboStageInfo.FillSymbols: array expected");
                }
                _0x1e6f1b.FillSymbols = [];
                for (_0x1a52a7 = 0x0; _0x1a52a7 < _0x474c30.FillSymbols.length; ++_0x1a52a7) {
                  if ('object' != typeof _0x474c30.FillSymbols[_0x1a52a7]) {
                    throw TypeError(".mwProto.ComboStageInfo.FillSymbols: object expected");
                  }
                  _0x1e6f1b.FillSymbols[_0x1a52a7] = _0x33da1e.mwProto.Column.fromObject(_0x474c30.FillSymbols[_0x1a52a7]);
                }
              }
              if (_0x474c30.NewFrameSymbols) {
                if (!Array.isArray(_0x474c30.NewFrameSymbols)) {
                  throw TypeError(".mwProto.ComboStageInfo.NewFrameSymbols: array expected");
                }
                _0x1e6f1b.NewFrameSymbols = [];
                for (_0x1a52a7 = 0x0; _0x1a52a7 < _0x474c30.NewFrameSymbols.length; ++_0x1a52a7) {
                  if ("object" != typeof _0x474c30.NewFrameSymbols[_0x1a52a7]) {
                    throw TypeError(".mwProto.ComboStageInfo.NewFrameSymbols: object expected");
                  }
                  _0x1e6f1b.NewFrameSymbols[_0x1a52a7] = _0x33da1e.mwProto.Column.fromObject(_0x474c30.NewFrameSymbols[_0x1a52a7]);
                }
              }
              return _0x1e6f1b;
            };
            _0x483d40.toObject = function (_0x240d20, _0xa15a84) {
              if (!_0xa15a84) {
                _0xa15a84 = {};
              }
              var _0x599795 = {};
              if (_0xa15a84.arrays || _0xa15a84.defaults) {
                _0x599795.ComboStageSymbol = [];
                _0x599795.AwardDataVec = [];
                _0x599795.FillSymbols = [];
                _0x599795.NewFrameSymbols = [];
              }
              if (_0xa15a84.defaults) {
                _0x599795.ComboStageWin = 0x0;
                _0x599795.ComboStageMult = 0x0;
                _0x599795.MysteryTarget = 0x0;
              }
              if (_0x240d20.ComboStageSymbol && _0x240d20.ComboStageSymbol.length) {
                _0x599795.ComboStageSymbol = [];
                for (var _0x36ac99 = 0x0; _0x36ac99 < _0x240d20.ComboStageSymbol.length; ++_0x36ac99) {
                  _0x599795.ComboStageSymbol[_0x36ac99] = _0x33da1e.mwProto.Column.toObject(_0x240d20.ComboStageSymbol[_0x36ac99], _0xa15a84);
                }
              }
              if (null != _0x240d20.ComboStageWin && _0x240d20.hasOwnProperty("ComboStageWin")) {
                _0x599795.ComboStageWin = _0xa15a84.json && !isFinite(_0x240d20.ComboStageWin) ? String(_0x240d20.ComboStageWin) : _0x240d20.ComboStageWin;
              }
              if (null != _0x240d20.ComboStageMult && _0x240d20.hasOwnProperty("ComboStageMult")) {
                _0x599795.ComboStageMult = _0xa15a84.json && !isFinite(_0x240d20.ComboStageMult) ? String(_0x240d20.ComboStageMult) : _0x240d20.ComboStageMult;
              }
              if (null != _0x240d20.MysteryTarget && _0x240d20.hasOwnProperty("MysteryTarget")) {
                _0x599795.MysteryTarget = _0x240d20.MysteryTarget;
              }
              if (_0x240d20.AwardDataVec && _0x240d20.AwardDataVec.length) {
                _0x599795.AwardDataVec = [];
                for (_0x36ac99 = 0x0; _0x36ac99 < _0x240d20.AwardDataVec.length; ++_0x36ac99) {
                  _0x599795.AwardDataVec[_0x36ac99] = _0x33da1e.mwProto.AwardData.toObject(_0x240d20.AwardDataVec[_0x36ac99], _0xa15a84);
                }
              }
              if (_0x240d20.FillSymbols && _0x240d20.FillSymbols.length) {
                _0x599795.FillSymbols = [];
                for (_0x36ac99 = 0x0; _0x36ac99 < _0x240d20.FillSymbols.length; ++_0x36ac99) {
                  _0x599795.FillSymbols[_0x36ac99] = _0x33da1e.mwProto.Column.toObject(_0x240d20.FillSymbols[_0x36ac99], _0xa15a84);
                }
              }
              if (_0x240d20.NewFrameSymbols && _0x240d20.NewFrameSymbols.length) {
                _0x599795.NewFrameSymbols = [];
                for (_0x36ac99 = 0x0; _0x36ac99 < _0x240d20.NewFrameSymbols.length; ++_0x36ac99) {
                  _0x599795.NewFrameSymbols[_0x36ac99] = _0x33da1e.mwProto.Column.toObject(_0x240d20.NewFrameSymbols[_0x36ac99], _0xa15a84);
                }
              }
              return _0x599795;
            };
            _0x483d40.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x22073f.util.toJSONOptions);
            };
            _0x483d40.getTypeUrl = function (_0xa62e3f) {
              if (undefined === _0xa62e3f) {
                _0xa62e3f = "type.googleapis.com";
              }
              return _0xa62e3f + "/mwProto.ComboStageInfo";
            };
            return _0x483d40;
          }(),
          "RoundInfo": function () {
            function _0x1edb26(_0x5f27ce) {
              this.ComboStageData = [];
              if (_0x5f27ce) {
                var _0x3ccfb3 = Object.keys(_0x5f27ce);
                for (var _0x5ee3ed = 0x0; _0x5ee3ed < _0x3ccfb3.length; ++_0x5ee3ed) {
                  if (null != _0x5f27ce[_0x3ccfb3[_0x5ee3ed]]) {
                    this[_0x3ccfb3[_0x5ee3ed]] = _0x5f27ce[_0x3ccfb3[_0x5ee3ed]];
                  }
                }
              }
            }
            _0x1edb26.prototype.ComboStageData = _0x56e11e.emptyArray;
            _0x1edb26.prototype.RoundWin = 0x0;
            _0x1edb26.prototype.AwardTypeFlag = 0x0;
            _0x1edb26.prototype.FreeRemainRound = 0x0;
            _0x1edb26.prototype.FreeCollectionCount = 0x0;
            _0x1edb26.prototype.FreeCollectionLv = 0x0;
            _0x1edb26.prototype.ScatterCount = 0x0;
            _0x1edb26.create = function (_0x5d12e3) {
              return new _0x1edb26(_0x5d12e3);
            };
            _0x1edb26.encode = function (_0x3adfd2, _0x41cb1a) {
              if (!_0x41cb1a) {
                _0x41cb1a = _0x3ba80b.create();
              }
              if (null != _0x3adfd2.ComboStageData && _0x3adfd2.ComboStageData.length) {
                for (var _0x1ce9ea = 0x0; _0x1ce9ea < _0x3adfd2.ComboStageData.length; ++_0x1ce9ea) {
                  _0x33da1e.mwProto.ComboStageInfo.encode(_0x3adfd2.ComboStageData[_0x1ce9ea], _0x41cb1a.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0x3adfd2.RoundWin && Object.hasOwnProperty.call(_0x3adfd2, "RoundWin")) {
                _0x41cb1a.uint32(0x11).double(_0x3adfd2.RoundWin);
              }
              if (null != _0x3adfd2.AwardTypeFlag && Object.hasOwnProperty.call(_0x3adfd2, 'AwardTypeFlag')) {
                _0x41cb1a.uint32(0x18).int32(_0x3adfd2.AwardTypeFlag);
              }
              if (null != _0x3adfd2.FreeRemainRound && Object.hasOwnProperty.call(_0x3adfd2, 'FreeRemainRound')) {
                _0x41cb1a.uint32(0x20).int32(_0x3adfd2.FreeRemainRound);
              }
              if (null != _0x3adfd2.FreeCollectionCount && Object.hasOwnProperty.call(_0x3adfd2, "FreeCollectionCount")) {
                _0x41cb1a.uint32(0x28).int32(_0x3adfd2.FreeCollectionCount);
              }
              if (null != _0x3adfd2.FreeCollectionLv && Object.hasOwnProperty.call(_0x3adfd2, "FreeCollectionLv")) {
                _0x41cb1a.uint32(0x30).int32(_0x3adfd2.FreeCollectionLv);
              }
              if (null != _0x3adfd2.ScatterCount && Object.hasOwnProperty.call(_0x3adfd2, "ScatterCount")) {
                _0x41cb1a.uint32(0x38).int32(_0x3adfd2.ScatterCount);
              }
              return _0x41cb1a;
            };
            _0x1edb26.encodeDelimited = function (_0x5d9d87, _0x279362) {
              return this.encode(_0x5d9d87, _0x279362).ldelim();
            };
            _0x1edb26.decode = function (_0x4c99cd, _0x593579) {
              if (!(_0x4c99cd instanceof _0x27ccd1)) {
                _0x4c99cd = _0x27ccd1.create(_0x4c99cd);
              }
              var _0x2bdc55 = undefined === _0x593579 ? _0x4c99cd.len : _0x4c99cd.pos + _0x593579;
              for (var _0x33e353 = new _0x33da1e.mwProto.RoundInfo(); _0x4c99cd.pos < _0x2bdc55;) {
                var _0x278c1b = _0x4c99cd.uint32();
                switch (_0x278c1b >>> 0x3) {
                  case 0x1:
                    if (!(_0x33e353.ComboStageData && _0x33e353.ComboStageData.length)) {
                      _0x33e353.ComboStageData = [];
                    }
                    _0x33e353.ComboStageData.push(_0x33da1e.mwProto.ComboStageInfo.decode(_0x4c99cd, _0x4c99cd.uint32()));
                    break;
                  case 0x2:
                    _0x33e353.RoundWin = _0x4c99cd.double();
                    break;
                  case 0x3:
                    _0x33e353.AwardTypeFlag = _0x4c99cd.int32();
                    break;
                  case 0x4:
                    _0x33e353.FreeRemainRound = _0x4c99cd.int32();
                    break;
                  case 0x5:
                    _0x33e353.FreeCollectionCount = _0x4c99cd.int32();
                    break;
                  case 0x6:
                    _0x33e353.FreeCollectionLv = _0x4c99cd.int32();
                    break;
                  case 0x7:
                    _0x33e353.ScatterCount = _0x4c99cd.int32();
                    break;
                  default:
                    _0x4c99cd.skipType(0x7 & _0x278c1b);
                }
              }
              return _0x33e353;
            };
            _0x1edb26.decodeDelimited = function (_0x14c931) {
              if (!(_0x14c931 instanceof _0x27ccd1)) {
                _0x14c931 = new _0x27ccd1(_0x14c931);
              }
              return this.decode(_0x14c931, _0x14c931.uint32());
            };
            _0x1edb26.verify = function (_0x5aa10e) {
              if ("object" != typeof _0x5aa10e || null === _0x5aa10e) {
                return "object expected";
              }
              if (null != _0x5aa10e.ComboStageData && _0x5aa10e.hasOwnProperty("ComboStageData")) {
                if (!Array.isArray(_0x5aa10e.ComboStageData)) {
                  return "ComboStageData: array expected";
                }
                for (var _0x27a84f = 0x0; _0x27a84f < _0x5aa10e.ComboStageData.length; ++_0x27a84f) {
                  var _0x3a830e = _0x33da1e.mwProto.ComboStageInfo.verify(_0x5aa10e.ComboStageData[_0x27a84f]);
                  if (_0x3a830e) {
                    return "ComboStageData." + _0x3a830e;
                  }
                }
              }
              return null != _0x5aa10e.RoundWin && _0x5aa10e.hasOwnProperty("RoundWin") && "number" != typeof _0x5aa10e.RoundWin ? "RoundWin: number expected" : null != _0x5aa10e.AwardTypeFlag && _0x5aa10e.hasOwnProperty("AwardTypeFlag") && !_0x56e11e.isInteger(_0x5aa10e.AwardTypeFlag) ? "AwardTypeFlag: integer expected" : null != _0x5aa10e.FreeRemainRound && _0x5aa10e.hasOwnProperty("FreeRemainRound") && !_0x56e11e.isInteger(_0x5aa10e.FreeRemainRound) ? "FreeRemainRound: integer expected" : null != _0x5aa10e.FreeCollectionCount && _0x5aa10e.hasOwnProperty("FreeCollectionCount") && !_0x56e11e.isInteger(_0x5aa10e.FreeCollectionCount) ? "FreeCollectionCount: integer expected" : null != _0x5aa10e.FreeCollectionLv && _0x5aa10e.hasOwnProperty("FreeCollectionLv") && !_0x56e11e.isInteger(_0x5aa10e.FreeCollectionLv) ? "FreeCollectionLv: integer expected" : null != _0x5aa10e.ScatterCount && _0x5aa10e.hasOwnProperty('ScatterCount') && !_0x56e11e.isInteger(_0x5aa10e.ScatterCount) ? "ScatterCount: integer expected" : null;
            };
            _0x1edb26.fromObject = function (_0x23cbad) {
              if (_0x23cbad instanceof _0x33da1e.mwProto.RoundInfo) {
                return _0x23cbad;
              }
              var _0x1c9ee1 = new _0x33da1e.mwProto.RoundInfo();
              if (_0x23cbad.ComboStageData) {
                if (!Array.isArray(_0x23cbad.ComboStageData)) {
                  throw TypeError(".mwProto.RoundInfo.ComboStageData: array expected");
                }
                _0x1c9ee1.ComboStageData = [];
                for (var _0x404a92 = 0x0; _0x404a92 < _0x23cbad.ComboStageData.length; ++_0x404a92) {
                  if ("object" != typeof _0x23cbad.ComboStageData[_0x404a92]) {
                    throw TypeError(".mwProto.RoundInfo.ComboStageData: object expected");
                  }
                  _0x1c9ee1.ComboStageData[_0x404a92] = _0x33da1e.mwProto.ComboStageInfo.fromObject(_0x23cbad.ComboStageData[_0x404a92]);
                }
              }
              if (null != _0x23cbad.RoundWin) {
                _0x1c9ee1.RoundWin = Number(_0x23cbad.RoundWin);
              }
              if (null != _0x23cbad.AwardTypeFlag) {
                _0x1c9ee1.AwardTypeFlag = 0x0 | _0x23cbad.AwardTypeFlag;
              }
              if (null != _0x23cbad.FreeRemainRound) {
                _0x1c9ee1.FreeRemainRound = 0x0 | _0x23cbad.FreeRemainRound;
              }
              if (null != _0x23cbad.FreeCollectionCount) {
                _0x1c9ee1.FreeCollectionCount = 0x0 | _0x23cbad.FreeCollectionCount;
              }
              if (null != _0x23cbad.FreeCollectionLv) {
                _0x1c9ee1.FreeCollectionLv = 0x0 | _0x23cbad.FreeCollectionLv;
              }
              if (null != _0x23cbad.ScatterCount) {
                _0x1c9ee1.ScatterCount = 0x0 | _0x23cbad.ScatterCount;
              }
              return _0x1c9ee1;
            };
            _0x1edb26.toObject = function (_0x40cca0, _0x36bf60) {
              if (!_0x36bf60) {
                _0x36bf60 = {};
              }
              var _0x54f395 = {};
              if (_0x36bf60.arrays || _0x36bf60.defaults) {
                _0x54f395.ComboStageData = [];
              }
              if (_0x36bf60.defaults) {
                _0x54f395.RoundWin = 0x0;
                _0x54f395.AwardTypeFlag = 0x0;
                _0x54f395.FreeRemainRound = 0x0;
                _0x54f395.FreeCollectionCount = 0x0;
                _0x54f395.FreeCollectionLv = 0x0;
                _0x54f395.ScatterCount = 0x0;
              }
              if (_0x40cca0.ComboStageData && _0x40cca0.ComboStageData.length) {
                _0x54f395.ComboStageData = [];
                for (var _0x5bf601 = 0x0; _0x5bf601 < _0x40cca0.ComboStageData.length; ++_0x5bf601) {
                  _0x54f395.ComboStageData[_0x5bf601] = _0x33da1e.mwProto.ComboStageInfo.toObject(_0x40cca0.ComboStageData[_0x5bf601], _0x36bf60);
                }
              }
              if (null != _0x40cca0.RoundWin && _0x40cca0.hasOwnProperty("RoundWin")) {
                _0x54f395.RoundWin = _0x36bf60.json && !isFinite(_0x40cca0.RoundWin) ? String(_0x40cca0.RoundWin) : _0x40cca0.RoundWin;
              }
              if (null != _0x40cca0.AwardTypeFlag && _0x40cca0.hasOwnProperty("AwardTypeFlag")) {
                _0x54f395.AwardTypeFlag = _0x40cca0.AwardTypeFlag;
              }
              if (null != _0x40cca0.FreeRemainRound && _0x40cca0.hasOwnProperty("FreeRemainRound")) {
                _0x54f395.FreeRemainRound = _0x40cca0.FreeRemainRound;
              }
              if (null != _0x40cca0.FreeCollectionCount && _0x40cca0.hasOwnProperty('FreeCollectionCount')) {
                _0x54f395.FreeCollectionCount = _0x40cca0.FreeCollectionCount;
              }
              if (null != _0x40cca0.FreeCollectionLv && _0x40cca0.hasOwnProperty('FreeCollectionLv')) {
                _0x54f395.FreeCollectionLv = _0x40cca0.FreeCollectionLv;
              }
              if (null != _0x40cca0.ScatterCount && _0x40cca0.hasOwnProperty("ScatterCount")) {
                _0x54f395.ScatterCount = _0x40cca0.ScatterCount;
              }
              return _0x54f395;
            };
            _0x1edb26.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x22073f.util.toJSONOptions);
            };
            _0x1edb26.getTypeUrl = function (_0x58cb79) {
              if (undefined === _0x58cb79) {
                _0x58cb79 = "type.googleapis.com";
              }
              return _0x58cb79 + "/mwProto.RoundInfo";
            };
            return _0x1edb26;
          }(),
          "SpinAck": function () {
            function _0x42a608(_0x106535) {
              this.RoundQueue = [];
              if (_0x106535) {
                var _0x389d4d = Object.keys(_0x106535);
                for (var _0x2ac774 = 0x0; _0x2ac774 < _0x389d4d.length; ++_0x2ac774) {
                  if (null != _0x106535[_0x389d4d[_0x2ac774]]) {
                    this[_0x389d4d[_0x2ac774]] = _0x106535[_0x389d4d[_0x2ac774]];
                  }
                }
              }
            }
            _0x42a608.prototype.RoundQueue = _0x56e11e.emptyArray;
            _0x42a608.prototype.FreeTotalWin = 0x0;
            _0x42a608.prototype.TotalWin = 0x0;
            _0x42a608.prototype.ShowIndex = '';
            _0x42a608.prototype.NowMoney = 0x0;
            _0x42a608.prototype.AckType = 0x0;
            _0x42a608.prototype.RTP = 0x0;
            _0x42a608.create = function (_0x4145ac) {
              return new _0x42a608(_0x4145ac);
            };
            _0x42a608.encode = function (_0xdc1c54, _0x594989) {
              if (!_0x594989) {
                _0x594989 = _0x3ba80b.create();
              }
              if (null != _0xdc1c54.RoundQueue && _0xdc1c54.RoundQueue.length) {
                for (var _0x24a790 = 0x0; _0x24a790 < _0xdc1c54.RoundQueue.length; ++_0x24a790) {
                  _0x33da1e.mwProto.RoundInfo.encode(_0xdc1c54.RoundQueue[_0x24a790], _0x594989.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0xdc1c54.FreeTotalWin && Object.hasOwnProperty.call(_0xdc1c54, 'FreeTotalWin')) {
                _0x594989.uint32(0x11).double(_0xdc1c54.FreeTotalWin);
              }
              if (null != _0xdc1c54.TotalWin && Object.hasOwnProperty.call(_0xdc1c54, "TotalWin")) {
                _0x594989.uint32(0x19).double(_0xdc1c54.TotalWin);
              }
              if (null != _0xdc1c54.ShowIndex && Object.hasOwnProperty.call(_0xdc1c54, 'ShowIndex')) {
                _0x594989.uint32(0x22).string(_0xdc1c54.ShowIndex);
              }
              if (null != _0xdc1c54.NowMoney && Object.hasOwnProperty.call(_0xdc1c54, "NowMoney")) {
                _0x594989.uint32(0x29).double(_0xdc1c54.NowMoney);
              }
              if (null != _0xdc1c54.AckType && Object.hasOwnProperty.call(_0xdc1c54, "AckType")) {
                _0x594989.uint32(0x30).int32(_0xdc1c54.AckType);
              }
              if (null != _0xdc1c54.RTP && Object.hasOwnProperty.call(_0xdc1c54, "RTP")) {
                _0x594989.uint32(0x39).double(_0xdc1c54.RTP);
              }
              return _0x594989;
            };
            _0x42a608.encodeDelimited = function (_0x5154ee, _0x342344) {
              return this.encode(_0x5154ee, _0x342344).ldelim();
            };
            _0x42a608.decode = function (_0xfdc049, _0x2731c3) {
              if (!(_0xfdc049 instanceof _0x27ccd1)) {
                _0xfdc049 = _0x27ccd1.create(_0xfdc049);
              }
              var _0x2be983 = undefined === _0x2731c3 ? _0xfdc049.len : _0xfdc049.pos + _0x2731c3;
              for (var _0x94a29c = new _0x33da1e.mwProto.SpinAck(); _0xfdc049.pos < _0x2be983;) {
                var _0x514aff = _0xfdc049.uint32();
                switch (_0x514aff >>> 0x3) {
                  case 0x1:
                    if (!(_0x94a29c.RoundQueue && _0x94a29c.RoundQueue.length)) {
                      _0x94a29c.RoundQueue = [];
                    }
                    _0x94a29c.RoundQueue.push(_0x33da1e.mwProto.RoundInfo.decode(_0xfdc049, _0xfdc049.uint32()));
                    break;
                  case 0x2:
                    _0x94a29c.FreeTotalWin = _0xfdc049.double();
                    break;
                  case 0x3:
                    _0x94a29c.TotalWin = _0xfdc049.double();
                    break;
                  case 0x4:
                    _0x94a29c.ShowIndex = _0xfdc049.string();
                    break;
                  case 0x5:
                    _0x94a29c.NowMoney = _0xfdc049.double();
                    break;
                  case 0x6:
                    _0x94a29c.AckType = _0xfdc049.int32();
                    break;
                  case 0x7:
                    _0x94a29c.RTP = _0xfdc049.double();
                    break;
                  default:
                    _0xfdc049.skipType(0x7 & _0x514aff);
                }
              }
              return _0x94a29c;
            };
            _0x42a608.decodeDelimited = function (_0x388bd7) {
              if (!(_0x388bd7 instanceof _0x27ccd1)) {
                _0x388bd7 = new _0x27ccd1(_0x388bd7);
              }
              return this.decode(_0x388bd7, _0x388bd7.uint32());
            };
            _0x42a608.verify = function (_0x16aba2) {
              if ("object" != typeof _0x16aba2 || null === _0x16aba2) {
                return "object expected";
              }
              if (null != _0x16aba2.RoundQueue && _0x16aba2.hasOwnProperty('RoundQueue')) {
                if (!Array.isArray(_0x16aba2.RoundQueue)) {
                  return "RoundQueue: array expected";
                }
                for (var _0x3dc6aa = 0x0; _0x3dc6aa < _0x16aba2.RoundQueue.length; ++_0x3dc6aa) {
                  var _0x52cea0 = _0x33da1e.mwProto.RoundInfo.verify(_0x16aba2.RoundQueue[_0x3dc6aa]);
                  if (_0x52cea0) {
                    return "RoundQueue." + _0x52cea0;
                  }
                }
              }
              return null != _0x16aba2.FreeTotalWin && _0x16aba2.hasOwnProperty("FreeTotalWin") && 'number' != typeof _0x16aba2.FreeTotalWin ? "FreeTotalWin: number expected" : null != _0x16aba2.TotalWin && _0x16aba2.hasOwnProperty('TotalWin') && "number" != typeof _0x16aba2.TotalWin ? "TotalWin: number expected" : null != _0x16aba2.ShowIndex && _0x16aba2.hasOwnProperty("ShowIndex") && !_0x56e11e.isString(_0x16aba2.ShowIndex) ? "ShowIndex: string expected" : null != _0x16aba2.NowMoney && _0x16aba2.hasOwnProperty('NowMoney') && "number" != typeof _0x16aba2.NowMoney ? "NowMoney: number expected" : null != _0x16aba2.AckType && _0x16aba2.hasOwnProperty("AckType") && !_0x56e11e.isInteger(_0x16aba2.AckType) ? "AckType: integer expected" : null != _0x16aba2.RTP && _0x16aba2.hasOwnProperty("RTP") && "number" != typeof _0x16aba2.RTP ? "RTP: number expected" : null;
            };
            _0x42a608.fromObject = function (_0x23fc7c) {
              if (_0x23fc7c instanceof _0x33da1e.mwProto.SpinAck) {
                return _0x23fc7c;
              }
              var _0x3d10dc = new _0x33da1e.mwProto.SpinAck();
              if (_0x23fc7c.RoundQueue) {
                if (!Array.isArray(_0x23fc7c.RoundQueue)) {
                  throw TypeError(".mwProto.SpinAck.RoundQueue: array expected");
                }
                _0x3d10dc.RoundQueue = [];
                for (var _0x56f979 = 0x0; _0x56f979 < _0x23fc7c.RoundQueue.length; ++_0x56f979) {
                  if ("object" != typeof _0x23fc7c.RoundQueue[_0x56f979]) {
                    throw TypeError(".mwProto.SpinAck.RoundQueue: object expected");
                  }
                  _0x3d10dc.RoundQueue[_0x56f979] = _0x33da1e.mwProto.RoundInfo.fromObject(_0x23fc7c.RoundQueue[_0x56f979]);
                }
              }
              if (null != _0x23fc7c.FreeTotalWin) {
                _0x3d10dc.FreeTotalWin = Number(_0x23fc7c.FreeTotalWin);
              }
              if (null != _0x23fc7c.TotalWin) {
                _0x3d10dc.TotalWin = Number(_0x23fc7c.TotalWin);
              }
              if (null != _0x23fc7c.ShowIndex) {
                _0x3d10dc.ShowIndex = String(_0x23fc7c.ShowIndex);
              }
              if (null != _0x23fc7c.NowMoney) {
                _0x3d10dc.NowMoney = Number(_0x23fc7c.NowMoney);
              }
              if (null != _0x23fc7c.AckType) {
                _0x3d10dc.AckType = 0x0 | _0x23fc7c.AckType;
              }
              if (null != _0x23fc7c.RTP) {
                _0x3d10dc.RTP = Number(_0x23fc7c.RTP);
              }
              return _0x3d10dc;
            };
            _0x42a608.toObject = function (_0x28022e, _0xee1a85) {
              if (!_0xee1a85) {
                _0xee1a85 = {};
              }
              var _0x2c68b9 = {};
              if (_0xee1a85.arrays || _0xee1a85.defaults) {
                _0x2c68b9.RoundQueue = [];
              }
              if (_0xee1a85.defaults) {
                _0x2c68b9.FreeTotalWin = 0x0;
                _0x2c68b9.TotalWin = 0x0;
                _0x2c68b9.ShowIndex = '';
                _0x2c68b9.NowMoney = 0x0;
                _0x2c68b9.AckType = 0x0;
                _0x2c68b9.RTP = 0x0;
              }
              if (_0x28022e.RoundQueue && _0x28022e.RoundQueue.length) {
                _0x2c68b9.RoundQueue = [];
                for (var _0x4420e8 = 0x0; _0x4420e8 < _0x28022e.RoundQueue.length; ++_0x4420e8) {
                  _0x2c68b9.RoundQueue[_0x4420e8] = _0x33da1e.mwProto.RoundInfo.toObject(_0x28022e.RoundQueue[_0x4420e8], _0xee1a85);
                }
              }
              if (null != _0x28022e.FreeTotalWin && _0x28022e.hasOwnProperty('FreeTotalWin')) {
                _0x2c68b9.FreeTotalWin = _0xee1a85.json && !isFinite(_0x28022e.FreeTotalWin) ? String(_0x28022e.FreeTotalWin) : _0x28022e.FreeTotalWin;
              }
              if (null != _0x28022e.TotalWin && _0x28022e.hasOwnProperty("TotalWin")) {
                _0x2c68b9.TotalWin = _0xee1a85.json && !isFinite(_0x28022e.TotalWin) ? String(_0x28022e.TotalWin) : _0x28022e.TotalWin;
              }
              if (null != _0x28022e.ShowIndex && _0x28022e.hasOwnProperty("ShowIndex")) {
                _0x2c68b9.ShowIndex = _0x28022e.ShowIndex;
              }
              if (null != _0x28022e.NowMoney && _0x28022e.hasOwnProperty("NowMoney")) {
                _0x2c68b9.NowMoney = _0xee1a85.json && !isFinite(_0x28022e.NowMoney) ? String(_0x28022e.NowMoney) : _0x28022e.NowMoney;
              }
              if (null != _0x28022e.AckType && _0x28022e.hasOwnProperty("AckType")) {
                _0x2c68b9.AckType = _0x28022e.AckType;
              }
              if (null != _0x28022e.RTP && _0x28022e.hasOwnProperty("RTP")) {
                _0x2c68b9.RTP = _0xee1a85.json && !isFinite(_0x28022e.RTP) ? String(_0x28022e.RTP) : _0x28022e.RTP;
              }
              return _0x2c68b9;
            };
            _0x42a608.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x22073f.util.toJSONOptions);
            };
            _0x42a608.getTypeUrl = function (_0x4ed3fd) {
              if (undefined === _0x4ed3fd) {
                _0x4ed3fd = 'type.googleapis.com';
              }
              return _0x4ed3fd + '/mwProto.SpinAck';
            };
            return _0x42a608;
          }(),
          GameInfoData: function () {
            function _0x6995ec(_0x32927c) {
              this.Mul = [];
              if (_0x32927c) {
                var _0x418683 = Object.keys(_0x32927c);
                for (var _0x43c37a = 0x0; _0x43c37a < _0x418683.length; ++_0x43c37a) {
                  if (null != _0x32927c[_0x418683[_0x43c37a]]) {
                    this[_0x418683[_0x43c37a]] = _0x32927c[_0x418683[_0x43c37a]];
                  }
                }
              }
            }
            _0x6995ec.prototype.ShowExtra = false;
            _0x6995ec.prototype.Mul = _0x56e11e.emptyArray;
            _0x6995ec.create = function (_0x46f756) {
              return new _0x6995ec(_0x46f756);
            };
            _0x6995ec.encode = function (_0x59d61f, _0x5b2004) {
              if (!_0x5b2004) {
                _0x5b2004 = _0x3ba80b.create();
              }
              if (null != _0x59d61f.ShowExtra && Object.hasOwnProperty.call(_0x59d61f, "ShowExtra")) {
                _0x5b2004.uint32(0x8).bool(_0x59d61f.ShowExtra);
              }
              if (null != _0x59d61f.Mul && _0x59d61f.Mul.length) {
                _0x5b2004.uint32(0x12).fork();
                for (var _0x4d9652 = 0x0; _0x4d9652 < _0x59d61f.Mul.length; ++_0x4d9652) {
                  _0x5b2004.double(_0x59d61f.Mul[_0x4d9652]);
                }
                _0x5b2004.ldelim();
              }
              return _0x5b2004;
            };
            _0x6995ec.encodeDelimited = function (_0x3667c7, _0x63d096) {
              return this.encode(_0x3667c7, _0x63d096).ldelim();
            };
            _0x6995ec.decode = function (_0x5b0bd4, _0x3b0590) {
              if (!(_0x5b0bd4 instanceof _0x27ccd1)) {
                _0x5b0bd4 = _0x27ccd1.create(_0x5b0bd4);
              }
              var _0x53d298 = undefined === _0x3b0590 ? _0x5b0bd4.len : _0x5b0bd4.pos + _0x3b0590;
              for (var _0x233395 = new _0x33da1e.mwProto.GameInfoData(); _0x5b0bd4.pos < _0x53d298;) {
                var _0x21b2c6 = _0x5b0bd4.uint32();
                switch (_0x21b2c6 >>> 0x3) {
                  case 0x1:
                    _0x233395.ShowExtra = _0x5b0bd4.bool();
                    break;
                  case 0x2:
                    if (!(_0x233395.Mul && _0x233395.Mul.length)) {
                      _0x233395.Mul = [];
                    }
                    if (0x2 == (0x7 & _0x21b2c6)) {
                      for (var _0x5e435d = _0x5b0bd4.uint32() + _0x5b0bd4.pos; _0x5b0bd4.pos < _0x5e435d;) {
                        _0x233395.Mul.push(_0x5b0bd4.double());
                      }
                    } else {
                      _0x233395.Mul.push(_0x5b0bd4.double());
                    }
                    break;
                  default:
                    _0x5b0bd4.skipType(0x7 & _0x21b2c6);
                }
              }
              return _0x233395;
            };
            _0x6995ec.decodeDelimited = function (_0x1a3910) {
              if (!(_0x1a3910 instanceof _0x27ccd1)) {
                _0x1a3910 = new _0x27ccd1(_0x1a3910);
              }
              return this.decode(_0x1a3910, _0x1a3910.uint32());
            };
            _0x6995ec.verify = function (_0x4fa190) {
              if ("object" != typeof _0x4fa190 || null === _0x4fa190) {
                return "object expected";
              }
              if (null != _0x4fa190.ShowExtra && _0x4fa190.hasOwnProperty('ShowExtra') && "boolean" != typeof _0x4fa190.ShowExtra) {
                return "ShowExtra: boolean expected";
              }
              if (null != _0x4fa190.Mul && _0x4fa190.hasOwnProperty("Mul")) {
                if (!Array.isArray(_0x4fa190.Mul)) {
                  return "Mul: array expected";
                }
                for (var _0x370c97 = 0x0; _0x370c97 < _0x4fa190.Mul.length; ++_0x370c97) {
                  if ("number" != typeof _0x4fa190.Mul[_0x370c97]) {
                    return "Mul: number[] expected";
                  }
                }
              }
              return null;
            };
            _0x6995ec.fromObject = function (_0x1b1632) {
              if (_0x1b1632 instanceof _0x33da1e.mwProto.GameInfoData) {
                return _0x1b1632;
              }
              var _0xb71586 = new _0x33da1e.mwProto.GameInfoData();
              if (null != _0x1b1632.ShowExtra) {
                _0xb71586.ShowExtra = Boolean(_0x1b1632.ShowExtra);
              }
              if (_0x1b1632.Mul) {
                if (!Array.isArray(_0x1b1632.Mul)) {
                  throw TypeError(".mwProto.GameInfoData.Mul: array expected");
                }
                _0xb71586.Mul = [];
                for (var _0x35359b = 0x0; _0x35359b < _0x1b1632.Mul.length; ++_0x35359b) {
                  _0xb71586.Mul[_0x35359b] = Number(_0x1b1632.Mul[_0x35359b]);
                }
              }
              return _0xb71586;
            };
            _0x6995ec.toObject = function (_0xa4213e, _0x597f10) {
              if (!_0x597f10) {
                _0x597f10 = {};
              }
              var _0x1fbdfe = {};
              if (_0x597f10.arrays || _0x597f10.defaults) {
                _0x1fbdfe.Mul = [];
              }
              if (_0x597f10.defaults) {
                _0x1fbdfe.ShowExtra = false;
              }
              if (null != _0xa4213e.ShowExtra && _0xa4213e.hasOwnProperty("ShowExtra")) {
                _0x1fbdfe.ShowExtra = _0xa4213e.ShowExtra;
              }
              if (_0xa4213e.Mul && _0xa4213e.Mul.length) {
                _0x1fbdfe.Mul = [];
                for (var _0x41ad9e = 0x0; _0x41ad9e < _0xa4213e.Mul.length; ++_0x41ad9e) {
                  _0x1fbdfe.Mul[_0x41ad9e] = _0x597f10.json && !isFinite(_0xa4213e.Mul[_0x41ad9e]) ? String(_0xa4213e.Mul[_0x41ad9e]) : _0xa4213e.Mul[_0x41ad9e];
                }
              }
              return _0x1fbdfe;
            };
            _0x6995ec.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x22073f.util.toJSONOptions);
            };
            _0x6995ec.getTypeUrl = function (_0x406b3c) {
              if (undefined === _0x406b3c) {
                _0x406b3c = "type.googleapis.com";
              }
              return _0x406b3c + "/mwProto.GameInfoData";
            };
            return _0x6995ec;
          }()
        }).Grid = function () {
          function _0x33a079(_0x3aa9ba) {
            if (_0x3aa9ba) {
              var _0x6368cd = Object.keys(_0x3aa9ba);
              for (var _0x565cc8 = 0x0; _0x565cc8 < _0x6368cd.length; ++_0x565cc8) {
                if (null != _0x3aa9ba[_0x6368cd[_0x565cc8]]) {
                  this[_0x6368cd[_0x565cc8]] = _0x3aa9ba[_0x6368cd[_0x565cc8]];
                }
              }
            }
          }
          _0x33a079.prototype.Col = 0x0;
          _0x33a079.prototype.Row = 0x0;
          _0x33a079.create = function (_0x24e5d7) {
            return new _0x33a079(_0x24e5d7);
          };
          _0x33a079.encode = function (_0x5d6f66, _0x205bb7) {
            if (!_0x205bb7) {
              _0x205bb7 = _0x3ba80b.create();
            }
            if (null != _0x5d6f66.Col && Object.hasOwnProperty.call(_0x5d6f66, 'Col')) {
              _0x205bb7.uint32(0x8).int32(_0x5d6f66.Col);
            }
            if (null != _0x5d6f66.Row && Object.hasOwnProperty.call(_0x5d6f66, "Row")) {
              _0x205bb7.uint32(0x10).int32(_0x5d6f66.Row);
            }
            return _0x205bb7;
          };
          _0x33a079.encodeDelimited = function (_0x5910ed, _0x330ef3) {
            return this.encode(_0x5910ed, _0x330ef3).ldelim();
          };
          _0x33a079.decode = function (_0x17b22a, _0x2e154c) {
            if (!(_0x17b22a instanceof _0x27ccd1)) {
              _0x17b22a = _0x27ccd1.create(_0x17b22a);
            }
            var _0x3b9364 = undefined === _0x2e154c ? _0x17b22a.len : _0x17b22a.pos + _0x2e154c;
            for (var _0x59e06e = new _0x33da1e.mwProto.Grid(); _0x17b22a.pos < _0x3b9364;) {
              var _0x117143 = _0x17b22a.uint32();
              switch (_0x117143 >>> 0x3) {
                case 0x1:
                  _0x59e06e.Col = _0x17b22a.int32();
                  break;
                case 0x2:
                  _0x59e06e.Row = _0x17b22a.int32();
                  break;
                default:
                  _0x17b22a.skipType(0x7 & _0x117143);
              }
            }
            return _0x59e06e;
          };
          _0x33a079.decodeDelimited = function (_0x1f7a26) {
            if (!(_0x1f7a26 instanceof _0x27ccd1)) {
              _0x1f7a26 = new _0x27ccd1(_0x1f7a26);
            }
            return this.decode(_0x1f7a26, _0x1f7a26.uint32());
          };
          _0x33a079.verify = function (_0x15f1bf) {
            return "object" != typeof _0x15f1bf || null === _0x15f1bf ? "object expected" : null != _0x15f1bf.Col && _0x15f1bf.hasOwnProperty("Col") && !_0x56e11e.isInteger(_0x15f1bf.Col) ? "Col: integer expected" : null != _0x15f1bf.Row && _0x15f1bf.hasOwnProperty("Row") && !_0x56e11e.isInteger(_0x15f1bf.Row) ? "Row: integer expected" : null;
          };
          _0x33a079.fromObject = function (_0x44fde2) {
            if (_0x44fde2 instanceof _0x33da1e.mwProto.Grid) {
              return _0x44fde2;
            }
            var _0x1776db = new _0x33da1e.mwProto.Grid();
            if (null != _0x44fde2.Col) {
              _0x1776db.Col = 0x0 | _0x44fde2.Col;
            }
            if (null != _0x44fde2.Row) {
              _0x1776db.Row = 0x0 | _0x44fde2.Row;
            }
            return _0x1776db;
          };
          _0x33a079.toObject = function (_0xc58a4d, _0x1cb0e1) {
            if (!_0x1cb0e1) {
              _0x1cb0e1 = {};
            }
            var _0x21beda = {};
            if (_0x1cb0e1.defaults) {
              _0x21beda.Col = 0x0;
              _0x21beda.Row = 0x0;
            }
            if (null != _0xc58a4d.Col && _0xc58a4d.hasOwnProperty("Col")) {
              _0x21beda.Col = _0xc58a4d.Col;
            }
            if (null != _0xc58a4d.Row && _0xc58a4d.hasOwnProperty("Row")) {
              _0x21beda.Row = _0xc58a4d.Row;
            }
            return _0x21beda;
          };
          _0x33a079.prototype.toJSON = function () {
            return this.constructor.toObject(this, _0x22073f.util.toJSONOptions);
          };
          _0x33a079.getTypeUrl = function (_0x1fb186) {
            if (undefined === _0x1fb186) {
              _0x1fb186 = 'type.googleapis.com';
            }
            return _0x1fb186 + "/mwProto.Grid";
          };
          return _0x33a079;
        }();
        _0x33da1e.mwProto = _0x31f343;
        _0x1ae42e.exports = _0x33da1e;
        _0x204350 = _0x1ae42e.exports;
      }, function () {
        return {
          'protobufjs/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/node_modules/protobufjs/minimal.js"
        };
      });
      _0x557447.require("file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays/Client/Thai_UAT/assets/game/Script/Proto/mwProto.js");
      _0x3c3037._RF.push({}, "21eb6SeGOFHRYFxyyERz/SY", "GameView", undefined);
      _0x3c3037._RF.pop();
      _0x3c3037._RF.push({}, "5be41w1SN5PA6ARFpXPJ61e", 'PrefabHolder', undefined);
      _0x3c3037._RF.pop();
    }
  };
});
(function (_0x4f6130) {
  _0x4f6130('virtual:///prerequisite-imports/game', 'chunks:///game.js');
})(function (_0x24fd09, _0x44a987) {
  System.register(_0x24fd09, [_0x44a987], function (_0x175c54, _0x1aad3a) {
    return {
      'setters': [function (_0x457739) {
        var _0x45b0d1 = {};
        for (var _0x598524 in _0x457739) {
          if (_0x598524 !== "default" && _0x598524 !== "__esModule") {
            _0x45b0d1[_0x598524] = _0x457739[_0x598524];
          }
        }
        _0x175c54(_0x45b0d1);
      }],
      'execute': function () {}
    };
  });
});