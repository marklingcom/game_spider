System.register("chunks:///game.js", ['cc', './index-1909278b.js'], function (_0xd11325, _0x20c4a4) {
  'use strict';

  var _0xbd733f;
  var _0x5e461f;
  var _0x3b3da2;
  var _0x87e3e6;
  var _0x4f6f19;
  var _0x22717a;
  var _0x4f8248;
  var _0x131c83;
  var _0x2d265e;
  var _0x5a6787;
  var _0x4def64;
  var _0x5855b0;
  var _0x5d9e03;
  var _0x257daa;
  var _0xf0ede4;
  var _0x24eccb;
  var _0x2d903e;
  var _0x5547b9;
  var _0x5bfa12;
  var _0x5b8a04;
  var _0x2bf67b;
  var _0x4f9c1c;
  var _0x25fe73;
  var _0x4a6acf;
  var _0x5382eb;
  var _0x21a334;
  var _0x116f62;
  var _0x11d943;
  var _0x492968;
  var _0x518ced;
  var _0x345c7f;
  var _0x236684;
  var _0x3c53a8;
  var _0x290558;
  var _0x2edc52;
  var _0x56faff;
  var _0xb08ad;
  var _0x1f72f3;
  var _0x23c2ec;
  var _0x417cba;
  var _0x1d7129;
  var _0x2b6686;
  var _0x2efe6a;
  var _0x112d29;
  var _0x380a74;
  var _0x10a9fe;
  var _0x259743;
  var _0x2bcf73;
  var _0x2fa636;
  var _0x5dd7f8;
  var _0x10a27d;
  var _0xa0dd7;
  var _0x1f6524;
  var _0x50322b;
  var _0x11ddec;
  var _0xd3ad1c;
  var _0x29d77b;
  var _0x21a1e5;
  var _0x5ce9e8;
  var _0x39a07f;
  var _0x31358c;
  var _0x5c03a8;
  var _0x5515c0;
  var _0x38ac8a;
  var _0x5583e1;
  var _0x498c28;
  var _0x17962e;
  var _0x314539;
  var _0x5f4031;
  var _0x583663;
  var _0x2c1181;
  var _0x4ff30f;
  var _0x8b2c2f;
  var _0x203059;
  var _0x1ef050;
  var _0x1782d5;
  return {
    'setters': [function (_0x5dc480) {
      _0xbd733f = _0x5dc480.cclegacy;
      _0x5e461f = _0x5dc480.Enum;
      _0x3b3da2 = _0x5dc480.Prefab;
      _0x87e3e6 = _0x5dc480.log;
      _0x4f6f19 = _0x5dc480.error;
      _0x22717a = _0x5dc480.instantiate;
      _0x4f8248 = _0x5dc480.Animation;
      _0x131c83 = _0x5dc480.ParticleSystem2D;
      _0x2d265e = _0x5dc480.AnimationClip;
      _0x5a6787 = _0x5dc480.Vec3;
      _0x4def64 = _0x5dc480._decorator;
      _0x5855b0 = _0x5dc480.v3;
      _0x5d9e03 = _0x5dc480.Node;
      _0x257daa = _0x5dc480.Sprite;
      _0xf0ede4 = _0x5dc480.tween;
      _0x24eccb = _0x5dc480.Color;
      _0x2d903e = _0x5dc480.UIOpacity;
      _0x5547b9 = _0x5dc480.UITransform;
      _0x5bfa12 = _0x5dc480.Mask;
      _0x5b8a04 = _0x5dc480.SpriteAtlas;
      _0x2bf67b = _0x5dc480.color;
      _0x4f9c1c = _0x5dc480.TweenSystem;
      _0x25fe73 = _0x5dc480.Label;
      _0x4a6acf = _0x5dc480.Tween;
      _0x5382eb = _0x5dc480.Vec2;
      _0x21a334 = _0x5dc480.Button;
      _0x116f62 = _0x5dc480.input;
      _0x11d943 = _0x5dc480.Input;
      _0x492968 = _0x5dc480.KeyCode;
      _0x518ced = _0x5dc480.game;
      _0x345c7f = _0x5dc480.Game;
      _0x236684 = _0x5dc480.screen;
      _0x3c53a8 = _0x5dc480.view;
      _0x290558 = _0x5dc480.ResolutionPolicy;
      _0x2edc52 = _0x5dc480.Component;
      _0x56faff = _0x5dc480.size;
    }, function (_0x29cfd4) {
      _0xb08ad = _0x29cfd4.e;
      _0x1f72f3 = _0x29cfd4.E;
      _0x23c2ec = _0x29cfd4.d;
      _0x417cba = _0x29cfd4.n;
      _0x1d7129 = _0x29cfd4.g;
      _0x2b6686 = _0x29cfd4.v;
      _0x2efe6a = _0x29cfd4.i;
      _0x112d29 = _0x29cfd4.w;
      _0x380a74 = _0x29cfd4.l;
      _0x10a9fe = _0x29cfd4.a;
      _0x259743 = _0x29cfd4.x;
      _0x2bcf73 = _0x29cfd4.y;
      _0x2fa636 = _0x29cfd4.h;
      _0x5dd7f8 = _0x29cfd4.j;
      _0x10a27d = _0x29cfd4.k;
      _0xa0dd7 = _0x29cfd4.B;
      _0x1f6524 = _0x29cfd4.z;
      _0x50322b = _0x29cfd4.s;
      _0x11ddec = _0x29cfd4.A;
      _0xd3ad1c = _0x29cfd4.D;
      _0x29d77b = _0x29cfd4.F;
      _0x21a1e5 = _0x29cfd4.q;
      _0x5ce9e8 = _0x29cfd4._;
      _0x39a07f = _0x29cfd4.b;
      _0x31358c = _0x29cfd4.c;
      _0x5c03a8 = _0x29cfd4.T;
      _0x5515c0 = _0x29cfd4.G;
      _0x38ac8a = _0x29cfd4.H;
      _0x5583e1 = _0x29cfd4.r;
      _0x498c28 = _0x29cfd4.I;
      _0x17962e = _0x29cfd4.f;
      _0x314539 = _0x29cfd4.C;
      _0x5f4031 = _0x29cfd4.J;
      _0x583663 = _0x29cfd4.K;
      _0x2c1181 = _0x29cfd4.L;
      _0x4ff30f = _0x29cfd4.M;
      _0x8b2c2f = _0x29cfd4.N;
      _0x203059 = _0x29cfd4.O;
      _0x1ef050 = _0x29cfd4.o;
      _0x1782d5 = _0x29cfd4.p;
    }],
    'execute': function () {
      _0xbd733f._RF.push({}, 'b8efceayvtNH5q17jb9nLmH', "CSHDataStruct", undefined);
      var _0x26e584 = _0x5e461f({
        'AWARD_TYPE_NON': 0x0,
        'AWARD_TYPE_LINE': 0x1,
        'AWARD_TYPE_SPECIAL': 0x2,
        'AWARD_TYPE_ENTER_BONUS': 0x4,
        'AWARD_TYPE_IN_BONUS': 0x8,
        'AWARD_TYPE_END_BONUS': 0x10,
        'AWARD_TYPE_N_SYMBOL': 0x20,
        'AWARD_TYPE_COMBO_NUP': 0x40,
        'AWARD_TYPE_MAX': 0x80
      });
      var _0x34d0b2 = _0x5e461f({
        'AT_SUCCESS': 0x0,
        'AT_MONEY_NOT_ENOUGH': 0x1,
        'AT_MONEY_ABNORMAL': 0x2
      });
      var _0x1d411d = _0x5e461f({
        'STATUS_NORMAL': 0x0,
        'STATUS_MAX': 0x1
      });
      var _0x37fe82 = function () {
        this.plate = undefined;
      };
      var _0x16f339 = function () {
        this.betMoney = 0x0;
      };
      var _0x10e237 = function () {
        this.lineAwardDataVec = undefined;
        this.winMoney = 0x0;
      };
      var _0x4864d2 = function () {
        this.plate = undefined;
        this.awardTypeFlag = _0x26e584.AWARD_TYPE_NON;
        this.lineAwardInfo = new _0x10e237();
      };
      var _0x210da0 = function () {
        this.c = 0x0;
        this.r = 0x0;
      };
      var _0x5684a9 = function () {
        this.symbol = 0x0;
        this.gridVec = undefined;
      };
      var _0x5c461b = function () {
        this.awardSet = undefined;
        this.award = 0x0;
      };
      var _0x296211 = function () {
        this.awardVec = undefined;
        this.columnSymbol = undefined;
        this.awardTypeFlag = 0x0;
        this.remainRound = 0x0;
        this.extraRound = 0x0;
        this.extraOdds = 0x0;
      };
      var _0x23f5ca = function () {
        this.ackVec = undefined;
        this.mgw = undefined;
        this.fgw = undefined;
        this.totalWin = 0x0;
        this.si = undefined;
        this.nm = undefined;
        this.act = undefined;
      };
      var _0x19ac12 = function () {};
      _0x19ac12.GameSettingAck = _0x37fe82;
      _0x19ac12.SpinReq = _0x16f339;
      _0x19ac12.PlateData = _0x4864d2;
      _0x19ac12.ACK_TYPE = _0x34d0b2;
      _0x19ac12.SinglePlate = _0x296211;
      _0x19ac12.AwardData = _0x5684a9;
      _0x19ac12.AwardDetail = _0x5c461b;
      _0x19ac12.AwardType = _0x26e584;
      _0x19ac12.Grid = _0x210da0;
      _0x19ac12.SpinAck = _0x23f5ca;
      _0x19ac12.STATUS_NORMAL = _0x1d411d;
      _0xbd733f._RF.pop();
      var _0x4580d7 = function () {
        function _0xf4e324() {
          this._registry = {};
          this._moduleCache = {};
        }
        var _0x4592a5 = _0xf4e324.prototype;
        _0x4592a5.define = function (_0x5da30c, _0x1c76c3, _0x2d00a9) {
          this._registry[_0x5da30c] = {
            'factory': _0x1c76c3,
            'resolveMap': _0x2d00a9
          };
        };
        _0x4592a5.require = function (_0x38670c) {
          return this._require(_0x38670c);
        };
        _0x4592a5.throwInvalidWrapper = function (_0x10d187, _0x1cc7c6) {
          throw new Error("Module '" + _0x10d187 + "' imported from '" + _0x1cc7c6 + "' is expected be an ESM-wrapped CommonJS module but it doesn't.");
        };
        _0x4592a5._require = function (_0x181621, _0x3992ea) {
          var _0x28e83b = this._moduleCache[_0x181621];
          if (_0x28e83b) {
            return _0x28e83b.exports;
          }
          var _0x287ba3 = {
            'id': _0x181621,
            'exports': {}
          };
          this._moduleCache[_0x181621] = _0x287ba3;
          this._tryModuleLoad(_0x287ba3, _0x181621);
          return _0x287ba3.exports;
        };
        _0x4592a5._resolve = function (_0x55292c, _0x559503) {
          return this._resolveFromInfos(_0x55292c, _0x559503) || this._throwUnresolved(_0x55292c, _0x559503);
        };
        _0x4592a5._resolveFromInfos = function (_0x5964f4, _0x1faa1f) {
          var _0x4b4818;
          var _0x477e52;
          return _0x5964f4 in cjsInfos ? _0x5964f4 : _0x1faa1f && null != (_0x4b4818 = null == (_0x477e52 = cjsInfos[_0x1faa1f]) ? undefined : _0x477e52.resolveCache[_0x5964f4]) ? _0x4b4818 : undefined;
        };
        _0x4592a5._tryModuleLoad = function (_0x5370aa, _0x291198) {
          var _0x29d253 = true;
          try {
            this._load(_0x5370aa, _0x291198);
            _0x29d253 = false;
          } finally {
            if (_0x29d253) {
              delete this._moduleCache[_0x291198];
            }
          }
        };
        _0x4592a5._load = function (_0x18dcea, _0x5436aa) {
          var _0xb11359 = this._loadWrapper(_0x5436aa);
          var _0x2e8ef7 = _0xb11359.factory;
          var _0x5cf597 = _0xb11359.resolveMap;
          var _0x3b81d1 = this._createRequire(_0x18dcea);
          var _0x5153cc = _0x5cf597 ? this._createRequireWithResolveMap("function" == typeof _0x5cf597 ? _0x5cf597() : _0x5cf597, _0x3b81d1) : _0x3b81d1;
          _0x2e8ef7(_0x18dcea.exports, _0x5153cc, _0x18dcea);
        };
        _0x4592a5._loadWrapper = function (_0x182076) {
          return _0x182076 in this._registry ? this._registry[_0x182076] : this._loadHostProvidedModules(_0x182076);
        };
        _0x4592a5._loadHostProvidedModules = function (_0x4351a0) {
          return {
            'factory': function (_0x2d0e29, _0x8a6868, _0x36227f) {
              if ("undefined" == typeof require) {
                throw new Error("Current environment does not provide a require() for requiring '" + _0x4351a0 + "'.");
              }
              try {
                _0x36227f.exports = require(_0x4351a0);
              } catch (_0x1d3b6f) {
                throw new Error("Exception thrown when calling host defined require('" + _0x4351a0 + "').", {
                  'cause': _0x1d3b6f
                });
              }
            }
          };
        };
        _0x4592a5._createRequire = function (_0x553b48) {
          var _0x1c2097 = this;
          return function (_0x556df7) {
            return _0x1c2097._require(_0x556df7, _0x553b48);
          };
        };
        _0x4592a5._createRequireWithResolveMap = function (_0x4b9a55, _0x175ba3) {
          return function (_0x38c9ad) {
            var _0x1ceed4 = _0x4b9a55[_0x38c9ad];
            if (_0x1ceed4) {
              return _0x175ba3(_0x1ceed4);
            }
            throw new Error("Unresolved specifier " + _0x38c9ad);
          };
        };
        _0x4592a5._throwUnresolved = function (_0x51bf8f, _0x450156) {
          throw new Error("Unable to resolve " + _0x51bf8f + " from " + parent + '.');
        };
        return _0xf4e324;
      }();
      var _0x46f592 = new _0x4580d7();
      var _0x456a67;
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/long/src/long.js", function (_0x594984, _0x48a009, _0xcaa06f, _0x2df532, _0x318145) {
        _0xcaa06f.exports = _0x5b53bb;
        var _0x311337 = null;
        try {
          _0x311337 = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0x0, 0x61, 0x73, 0x6d, 0x1, 0x0, 0x0, 0x0, 0x1, 0xd, 0x2, 0x60, 0x0, 0x1, 0x7f, 0x60, 0x4, 0x7f, 0x7f, 0x7f, 0x7f, 0x1, 0x7f, 0x3, 0x7, 0x6, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x6, 0x6, 0x1, 0x7f, 0x1, 0x41, 0x0, 0xb, 0x7, 0x32, 0x6, 0x3, 0x6d, 0x75, 0x6c, 0x0, 0x1, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x73, 0x0, 0x2, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x75, 0x0, 0x3, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x73, 0x0, 0x4, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x75, 0x0, 0x5, 0x8, 0x67, 0x65, 0x74, 0x5f, 0x68, 0x69, 0x67, 0x68, 0x0, 0x0, 0xa, 0xbf, 0x1, 0x6, 0x4, 0x0, 0x23, 0x0, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7e, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7f, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x80, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x81, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x82, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb])), {}).exports;
        } catch (_0x26e5cc) {}
        function _0x5b53bb(_0x5a6e50, _0x541d84, _0x5cafb0) {
          this.low = 0x0 | _0x5a6e50;
          this.high = 0x0 | _0x541d84;
          this.unsigned = !!_0x5cafb0;
        }
        function _0xd1063b(_0x76824) {
          return true === (_0x76824 && _0x76824.__isLong__);
        }
        _0x5b53bb.prototype.__isLong__;
        Object.defineProperty(_0x5b53bb.prototype, "__isLong__", {
          'value': true
        });
        _0x5b53bb.isLong = _0xd1063b;
        var _0x380c18 = {};
        var _0x5d9f4f = {};
        function _0x19d673(_0x3adfa6, _0x3709be) {
          var _0x356c46;
          var _0x56ad42;
          var _0x27248c;
          return _0x3709be ? (_0x27248c = 0x0 <= (_0x3adfa6 >>>= 0x0) && _0x3adfa6 < 0x100) && (_0x56ad42 = _0x5d9f4f[_0x3adfa6]) ? _0x56ad42 : (_0x356c46 = new _0x5b53bb(_0x3adfa6, (0x0 | _0x3adfa6) < 0x0 ? -0x1 : 0x0, true), _0x27248c && (_0x5d9f4f[_0x3adfa6] = _0x356c46), _0x356c46) : (_0x27248c = -0x80 <= (_0x3adfa6 |= 0x0) && _0x3adfa6 < 0x80) && (_0x56ad42 = _0x380c18[_0x3adfa6]) ? _0x56ad42 : (_0x356c46 = new _0x5b53bb(_0x3adfa6, _0x3adfa6 < 0x0 ? -0x1 : 0x0, false), _0x27248c && (_0x380c18[_0x3adfa6] = _0x356c46), _0x356c46);
        }
        function _0x3a3817(_0x57c354, _0x734139) {
          if (isNaN(_0x57c354)) {
            return _0x734139 ? _0x43f8d7 : _0x4374de;
          }
          if (_0x734139) {
            if (_0x57c354 < 0x0) {
              return _0x43f8d7;
            }
            if (_0x57c354 >= 18446744073709552000) {
              return _0x7b83f8;
            }
          } else {
            if (_0x57c354 <= -9223372036854776000) {
              return _0x1a5760;
            }
            if (_0x57c354 + 0x1 >= 9223372036854776000) {
              return _0x291f02;
            }
          }
          return _0x57c354 < 0x0 ? _0x3a3817(-_0x57c354, _0x734139).neg() : new _0x5b53bb(_0x57c354 % 0x100000000 | 0x0, _0x57c354 / 0x100000000 | 0x0, _0x734139);
        }
        function _0x42d150(_0x39704f, _0x9eee0a, _0x31ca2f) {
          return new _0x5b53bb(_0x39704f, _0x9eee0a, _0x31ca2f);
        }
        _0x5b53bb.fromInt = _0x19d673;
        _0x5b53bb.fromNumber = _0x3a3817;
        _0x5b53bb.fromBits = _0x42d150;
        var _0x4a2721 = Math.pow;
        function _0x3c1ba3(_0x1457ab, _0x6b8a9d, _0x10df22) {
          if (0x0 === _0x1457ab.length) {
            throw Error("empty string");
          }
          if ("NaN" === _0x1457ab || "Infinity" === _0x1457ab || "+Infinity" === _0x1457ab || "-Infinity" === _0x1457ab) {
            return _0x4374de;
          }
          if ("number" == typeof _0x6b8a9d) {
            _0x10df22 = _0x6b8a9d;
            _0x6b8a9d = false;
          } else {
            _0x6b8a9d = !!_0x6b8a9d;
          }
          if ((_0x10df22 = _0x10df22 || 0xa) < 0x2 || 0x24 < _0x10df22) {
            throw RangeError("radix");
          }
          var _0x5e46f7;
          if ((_0x5e46f7 = _0x1457ab.indexOf('-')) > 0x0) {
            throw Error("interior hyphen");
          }
          if (0x0 === _0x5e46f7) {
            return _0x3c1ba3(_0x1457ab.substring(0x1), _0x6b8a9d, _0x10df22).neg();
          }
          var _0x2f820d = _0x3a3817(_0x4a2721(_0x10df22, 0x8));
          var _0x1ce781 = _0x4374de;
          for (var _0x2eaf0c = 0x0; _0x2eaf0c < _0x1457ab.length; _0x2eaf0c += 0x8) {
            var _0x5270d6 = Math.min(0x8, _0x1457ab.length - _0x2eaf0c);
            var _0x3ef9b8 = parseInt(_0x1457ab.substring(_0x2eaf0c, _0x2eaf0c + _0x5270d6), _0x10df22);
            if (_0x5270d6 < 0x8) {
              var _0x5c5a14 = _0x3a3817(_0x4a2721(_0x10df22, _0x5270d6));
              _0x1ce781 = _0x1ce781.mul(_0x5c5a14).add(_0x3a3817(_0x3ef9b8));
            } else {
              _0x1ce781 = (_0x1ce781 = _0x1ce781.mul(_0x2f820d)).add(_0x3a3817(_0x3ef9b8));
            }
          }
          _0x1ce781.unsigned = _0x6b8a9d;
          return _0x1ce781;
        }
        function _0x529c96(_0x3f44a0, _0x55d4bb) {
          return 'number' == typeof _0x3f44a0 ? _0x3a3817(_0x3f44a0, _0x55d4bb) : "string" == typeof _0x3f44a0 ? _0x3c1ba3(_0x3f44a0, _0x55d4bb) : new _0x5b53bb(_0x3f44a0.low, _0x3f44a0.high, "boolean" == typeof _0x55d4bb ? _0x55d4bb : _0x3f44a0.unsigned);
        }
        _0x5b53bb.fromString = _0x3c1ba3;
        _0x5b53bb.fromValue = _0x529c96;
        var _0x58c888 = _0x19d673(16777216);
        var _0x4374de = _0x19d673(0x0);
        _0x5b53bb.ZERO = _0x4374de;
        var _0x43f8d7 = _0x19d673(0x0, true);
        _0x5b53bb.UZERO = _0x43f8d7;
        var _0x1abe47 = _0x19d673(0x1);
        _0x5b53bb.ONE = _0x1abe47;
        var _0x489d97 = _0x19d673(0x1, true);
        _0x5b53bb.UONE = _0x489d97;
        var _0x349b11 = _0x19d673(-0x1);
        _0x5b53bb.NEG_ONE = _0x349b11;
        var _0x291f02 = new _0x5b53bb(-0x1, 0x7fffffff, false);
        _0x5b53bb.MAX_VALUE = _0x291f02;
        var _0x7b83f8 = new _0x5b53bb(-0x1, -0x1, true);
        _0x5b53bb.MAX_UNSIGNED_VALUE = _0x7b83f8;
        var _0x1a5760 = new _0x5b53bb(0x0, -0x80000000, false);
        _0x5b53bb.MIN_VALUE = _0x1a5760;
        var _0x7b94f1 = _0x5b53bb.prototype;
        _0x7b94f1.toInt = function () {
          return this.unsigned ? this.low >>> 0x0 : this.low;
        };
        _0x7b94f1.toNumber = function () {
          return this.unsigned ? (this.high >>> 0x0) * 0x100000000 + (this.low >>> 0x0) : this.high * 0x100000000 + (this.low >>> 0x0);
        };
        _0x7b94f1.toString = function (_0x4db500) {
          if ((_0x4db500 = _0x4db500 || 0xa) < 0x2 || 0x24 < _0x4db500) {
            throw RangeError("radix");
          }
          if (this.isZero()) {
            return '0';
          }
          if (this.isNegative()) {
            if (this.eq(_0x1a5760)) {
              var _0x5900d2 = _0x3a3817(_0x4db500);
              var _0x175347 = this.div(_0x5900d2);
              var _0x51f44b = _0x175347.mul(_0x5900d2).sub(this);
              return _0x175347.toString(_0x4db500) + _0x51f44b.toInt().toString(_0x4db500);
            }
            return '-' + this.neg().toString(_0x4db500);
          }
          var _0x5e9d91 = _0x3a3817(_0x4a2721(_0x4db500, 0x6), this.unsigned);
          var _0x129416 = this;
          for (var _0x4e66df = '';;) {
            var _0x519334 = _0x129416.div(_0x5e9d91);
            var _0x47b021 = (_0x129416.sub(_0x519334.mul(_0x5e9d91)).toInt() >>> 0x0).toString(_0x4db500);
            if ((_0x129416 = _0x519334).isZero()) {
              return _0x47b021 + _0x4e66df;
            }
            for (; _0x47b021.length < 0x6;) {
              _0x47b021 = '0' + _0x47b021;
            }
            _0x4e66df = '' + _0x47b021 + _0x4e66df;
          }
        };
        _0x7b94f1.getHighBits = function () {
          return this.high;
        };
        _0x7b94f1.getHighBitsUnsigned = function () {
          return this.high >>> 0x0;
        };
        _0x7b94f1.getLowBits = function () {
          return this.low;
        };
        _0x7b94f1.getLowBitsUnsigned = function () {
          return this.low >>> 0x0;
        };
        _0x7b94f1.getNumBitsAbs = function () {
          if (this.isNegative()) {
            return this.eq(_0x1a5760) ? 0x40 : this.neg().getNumBitsAbs();
          }
          var _0x39ebaa = 0x0 != this.high ? this.high : this.low;
          for (var _0xf52b80 = 0x1f; _0xf52b80 > 0x0 && 0x0 == (_0x39ebaa & 0x1 << _0xf52b80); _0xf52b80--) {
            ;
          }
          return 0x0 != this.high ? _0xf52b80 + 0x21 : _0xf52b80 + 0x1;
        };
        _0x7b94f1.isZero = function () {
          return 0x0 === this.high && 0x0 === this.low;
        };
        _0x7b94f1.eqz = _0x7b94f1.isZero;
        _0x7b94f1.isNegative = function () {
          return !this.unsigned && this.high < 0x0;
        };
        _0x7b94f1.isPositive = function () {
          return this.unsigned || this.high >= 0x0;
        };
        _0x7b94f1.isOdd = function () {
          return 0x1 == (0x1 & this.low);
        };
        _0x7b94f1.isEven = function () {
          return 0x0 == (0x1 & this.low);
        };
        _0x7b94f1.equals = function (_0x55ff62) {
          if (!(true === (_0x55ff62 && _0x55ff62.__isLong__))) {
            _0x55ff62 = 'number' == typeof _0x55ff62 ? _0x3a3817(_0x55ff62, undefined) : "string" == typeof _0x55ff62 ? _0x3c1ba3(_0x55ff62, undefined) : new _0x5b53bb(_0x55ff62.low, _0x55ff62.high, _0x55ff62.unsigned);
          }
          return (this.unsigned === _0x55ff62.unsigned || this.high >>> 0x1f != 0x1 || _0x55ff62.high >>> 0x1f != 0x1) && this.high === _0x55ff62.high && this.low === _0x55ff62.low;
        };
        _0x7b94f1.eq = _0x7b94f1.equals;
        _0x7b94f1.notEquals = function (_0x27f9cb) {
          return !this.eq(_0x27f9cb);
        };
        _0x7b94f1.neq = _0x7b94f1.notEquals;
        _0x7b94f1.ne = _0x7b94f1.notEquals;
        _0x7b94f1.lessThan = function (_0x2f28fe) {
          return this.comp(_0x2f28fe) < 0x0;
        };
        _0x7b94f1.lt = _0x7b94f1.lessThan;
        _0x7b94f1.lessThanOrEqual = function (_0x1bcf28) {
          return this.comp(_0x1bcf28) <= 0x0;
        };
        _0x7b94f1.lte = _0x7b94f1.lessThanOrEqual;
        _0x7b94f1.le = _0x7b94f1.lessThanOrEqual;
        _0x7b94f1.greaterThan = function (_0x2fd8d8) {
          return this.comp(_0x2fd8d8) > 0x0;
        };
        _0x7b94f1.gt = _0x7b94f1.greaterThan;
        _0x7b94f1.greaterThanOrEqual = function (_0x4a658c) {
          return this.comp(_0x4a658c) >= 0x0;
        };
        _0x7b94f1.gte = _0x7b94f1.greaterThanOrEqual;
        _0x7b94f1.ge = _0x7b94f1.greaterThanOrEqual;
        _0x7b94f1.compare = function (_0x313688) {
          if (!(true === (_0x313688 && _0x313688.__isLong__))) {
            _0x313688 = 'number' == typeof _0x313688 ? _0x3a3817(_0x313688, undefined) : "string" == typeof _0x313688 ? _0x3c1ba3(_0x313688, undefined) : new _0x5b53bb(_0x313688.low, _0x313688.high, _0x313688.unsigned);
          }
          if (this.eq(_0x313688)) {
            return 0x0;
          }
          var _0x1980d7 = this.isNegative();
          var _0x3103c9 = _0x313688.isNegative();
          return _0x1980d7 && !_0x3103c9 ? -0x1 : !_0x1980d7 && _0x3103c9 ? 0x1 : this.unsigned ? _0x313688.high >>> 0x0 > this.high >>> 0x0 || _0x313688.high === this.high && _0x313688.low >>> 0x0 > this.low >>> 0x0 ? -0x1 : 0x1 : this.sub(_0x313688).isNegative() ? -0x1 : 0x1;
        };
        _0x7b94f1.comp = _0x7b94f1.compare;
        _0x7b94f1.negate = function () {
          return !this.unsigned && this.eq(_0x1a5760) ? _0x1a5760 : this.not().add(_0x1abe47);
        };
        _0x7b94f1.neg = _0x7b94f1.negate;
        _0x7b94f1.add = function (_0xc5cd6d) {
          if (!(true === (_0xc5cd6d && _0xc5cd6d.__isLong__))) {
            _0xc5cd6d = 'number' == typeof _0xc5cd6d ? _0x3a3817(_0xc5cd6d, undefined) : "string" == typeof _0xc5cd6d ? _0x3c1ba3(_0xc5cd6d, undefined) : new _0x5b53bb(_0xc5cd6d.low, _0xc5cd6d.high, _0xc5cd6d.unsigned);
          }
          var _0x7a57f3 = this.high >>> 0x10;
          var _0x28b783 = 0xffff & this.high;
          var _0x1a4e77 = this.low >>> 0x10;
          var _0x50bc6a = 0xffff & this.low;
          var _0x55815a = _0xc5cd6d.high >>> 0x10;
          var _0xd8ccb6 = 0xffff & _0xc5cd6d.high;
          var _0x356089 = _0xc5cd6d.low >>> 0x10;
          var _0xa76b42 = 0x0;
          var _0x43c5cd = 0x0;
          var _0x105ed6 = 0x0;
          var _0x55ece9 = 0x0;
          _0x105ed6 += (_0x55ece9 += _0x50bc6a + (0xffff & _0xc5cd6d.low)) >>> 0x10;
          _0x43c5cd += (_0x105ed6 += _0x1a4e77 + _0x356089) >>> 0x10;
          _0xa76b42 += (_0x43c5cd += _0x28b783 + _0xd8ccb6) >>> 0x10;
          _0xa76b42 += _0x7a57f3 + _0x55815a;
          return new _0x5b53bb((_0x105ed6 &= 0xffff) << 0x10 | (_0x55ece9 &= 0xffff), (_0xa76b42 &= 0xffff) << 0x10 | (_0x43c5cd &= 0xffff), this.unsigned);
        };
        _0x7b94f1.subtract = function (_0x2b1009) {
          if (!(true === (_0x2b1009 && _0x2b1009.__isLong__))) {
            _0x2b1009 = 'number' == typeof _0x2b1009 ? _0x3a3817(_0x2b1009, undefined) : "string" == typeof _0x2b1009 ? _0x3c1ba3(_0x2b1009, undefined) : new _0x5b53bb(_0x2b1009.low, _0x2b1009.high, _0x2b1009.unsigned);
          }
          return this.add(_0x2b1009.neg());
        };
        _0x7b94f1.sub = _0x7b94f1.subtract;
        _0x7b94f1.multiply = function (_0x2d8ba6) {
          if (this.isZero()) {
            return _0x4374de;
          }
          if (!(true === (_0x2d8ba6 && _0x2d8ba6.__isLong__))) {
            _0x2d8ba6 = 'number' == typeof _0x2d8ba6 ? _0x3a3817(_0x2d8ba6, undefined) : "string" == typeof _0x2d8ba6 ? _0x3c1ba3(_0x2d8ba6, undefined) : new _0x5b53bb(_0x2d8ba6.low, _0x2d8ba6.high, _0x2d8ba6.unsigned);
          }
          if (_0x311337) {
            return new _0x5b53bb(_0x311337.mul(this.low, this.high, _0x2d8ba6.low, _0x2d8ba6.high), _0x311337.get_high(), this.unsigned);
          }
          if (_0x2d8ba6.isZero()) {
            return _0x4374de;
          }
          if (this.eq(_0x1a5760)) {
            return _0x2d8ba6.isOdd() ? _0x1a5760 : _0x4374de;
          }
          if (_0x2d8ba6.eq(_0x1a5760)) {
            return this.isOdd() ? _0x1a5760 : _0x4374de;
          }
          if (this.isNegative()) {
            return _0x2d8ba6.isNegative() ? this.neg().mul(_0x2d8ba6.neg()) : this.neg().mul(_0x2d8ba6).neg();
          }
          if (_0x2d8ba6.isNegative()) {
            return this.mul(_0x2d8ba6.neg()).neg();
          }
          if (this.lt(_0x58c888) && _0x2d8ba6.lt(_0x58c888)) {
            return _0x3a3817(this.toNumber() * _0x2d8ba6.toNumber(), this.unsigned);
          }
          var _0x38aa38 = this.high >>> 0x10;
          var _0x2b96a1 = 0xffff & this.high;
          var _0x4d4b45 = this.low >>> 0x10;
          var _0x36e977 = 0xffff & this.low;
          var _0x89ec48 = _0x2d8ba6.high >>> 0x10;
          var _0x580f07 = 0xffff & _0x2d8ba6.high;
          var _0x11c51c = _0x2d8ba6.low >>> 0x10;
          var _0x486c12 = 0xffff & _0x2d8ba6.low;
          var _0x5139d2 = 0x0;
          var _0x175a0f = 0x0;
          var _0x52e55f = 0x0;
          var _0x13dea4 = 0x0;
          _0x52e55f += (_0x13dea4 += _0x36e977 * _0x486c12) >>> 0x10;
          _0x175a0f += (_0x52e55f += _0x4d4b45 * _0x486c12) >>> 0x10;
          _0x52e55f &= 0xffff;
          _0x175a0f += (_0x52e55f += _0x36e977 * _0x11c51c) >>> 0x10;
          _0x5139d2 += (_0x175a0f += _0x2b96a1 * _0x486c12) >>> 0x10;
          _0x175a0f &= 0xffff;
          _0x5139d2 += (_0x175a0f += _0x4d4b45 * _0x11c51c) >>> 0x10;
          _0x175a0f &= 0xffff;
          _0x5139d2 += (_0x175a0f += _0x36e977 * _0x580f07) >>> 0x10;
          _0x5139d2 += _0x38aa38 * _0x486c12 + _0x2b96a1 * _0x11c51c + _0x4d4b45 * _0x580f07 + _0x36e977 * _0x89ec48;
          return new _0x5b53bb((_0x52e55f &= 0xffff) << 0x10 | (_0x13dea4 &= 0xffff), (_0x5139d2 &= 0xffff) << 0x10 | (_0x175a0f &= 0xffff), this.unsigned);
        };
        _0x7b94f1.mul = _0x7b94f1.multiply;
        _0x7b94f1.divide = function (_0x171cec) {
          if (!(true === (_0x171cec && _0x171cec.__isLong__))) {
            _0x171cec = 'number' == typeof _0x171cec ? _0x3a3817(_0x171cec, undefined) : "string" == typeof _0x171cec ? _0x3c1ba3(_0x171cec, undefined) : new _0x5b53bb(_0x171cec.low, _0x171cec.high, _0x171cec.unsigned);
          }
          if (_0x171cec.isZero()) {
            throw Error("division by zero");
          }
          var _0x5a523a;
          var _0x1a8f3c;
          var _0x643cc4;
          if (_0x311337) {
            return this.unsigned || -0x80000000 !== this.high || -0x1 !== _0x171cec.low || -0x1 !== _0x171cec.high ? new _0x5b53bb((this.unsigned ? _0x311337.div_u : _0x311337.div_s)(this.low, this.high, _0x171cec.low, _0x171cec.high), _0x311337.get_high(), this.unsigned) : this;
          }
          if (this.isZero()) {
            return this.unsigned ? _0x43f8d7 : _0x4374de;
          }
          if (this.unsigned) {
            if (!_0x171cec.unsigned) {
              _0x171cec = _0x171cec.toUnsigned();
            }
            if (_0x171cec.gt(this)) {
              return _0x43f8d7;
            }
            if (_0x171cec.gt(this.shru(0x1))) {
              return _0x489d97;
            }
            _0x643cc4 = _0x43f8d7;
          } else {
            if (this.eq(_0x1a5760)) {
              return _0x171cec.eq(_0x1abe47) || _0x171cec.eq(_0x349b11) ? _0x1a5760 : _0x171cec.eq(_0x1a5760) ? _0x1abe47 : (_0x5a523a = this.shr(0x1).div(_0x171cec).shl(0x1)).eq(_0x4374de) ? _0x171cec.isNegative() ? _0x1abe47 : _0x349b11 : (_0x1a8f3c = this.sub(_0x171cec.mul(_0x5a523a)), _0x643cc4 = _0x5a523a.add(_0x1a8f3c.div(_0x171cec)));
            }
            if (_0x171cec.eq(_0x1a5760)) {
              return this.unsigned ? _0x43f8d7 : _0x4374de;
            }
            if (this.isNegative()) {
              return _0x171cec.isNegative() ? this.neg().div(_0x171cec.neg()) : this.neg().div(_0x171cec).neg();
            }
            if (_0x171cec.isNegative()) {
              return this.div(_0x171cec.neg()).neg();
            }
            _0x643cc4 = _0x4374de;
          }
          for (_0x1a8f3c = this; _0x1a8f3c.gte(_0x171cec);) {
            _0x5a523a = Math.max(0x1, Math.floor(_0x1a8f3c.toNumber() / _0x171cec.toNumber()));
            var _0x3f1d6a = Math.ceil(Math.log(_0x5a523a) / Math.LN2);
            var _0x2c032c = _0x3f1d6a <= 0x30 ? 0x1 : _0x4a2721(0x2, _0x3f1d6a - 0x30);
            var _0x1be973 = _0x3a3817(_0x5a523a);
            for (var _0x54754e = _0x1be973.mul(_0x171cec); _0x54754e.isNegative() || _0x54754e.gt(_0x1a8f3c);) {
              _0x54754e = (_0x1be973 = _0x3a3817(_0x5a523a -= _0x2c032c, this.unsigned)).mul(_0x171cec);
            }
            if (_0x1be973.isZero()) {
              _0x1be973 = _0x1abe47;
            }
            _0x643cc4 = _0x643cc4.add(_0x1be973);
            _0x1a8f3c = _0x1a8f3c.sub(_0x54754e);
          }
          return _0x643cc4;
        };
        _0x7b94f1.div = _0x7b94f1.divide;
        _0x7b94f1.modulo = function (_0x31dc76) {
          if (!(true === (_0x31dc76 && _0x31dc76.__isLong__))) {
            _0x31dc76 = 'number' == typeof _0x31dc76 ? _0x3a3817(_0x31dc76, undefined) : "string" == typeof _0x31dc76 ? _0x3c1ba3(_0x31dc76, undefined) : new _0x5b53bb(_0x31dc76.low, _0x31dc76.high, _0x31dc76.unsigned);
          }
          return _0x311337 ? new _0x5b53bb((this.unsigned ? _0x311337.rem_u : _0x311337.rem_s)(this.low, this.high, _0x31dc76.low, _0x31dc76.high), _0x311337.get_high(), this.unsigned) : this.sub(this.div(_0x31dc76).mul(_0x31dc76));
        };
        _0x7b94f1.mod = _0x7b94f1.modulo;
        _0x7b94f1.rem = _0x7b94f1.modulo;
        _0x7b94f1.not = function () {
          return new _0x5b53bb(~this.low, ~this.high, this.unsigned);
        };
        _0x7b94f1.and = function (_0x4b0d83) {
          if (!(true === (_0x4b0d83 && _0x4b0d83.__isLong__))) {
            _0x4b0d83 = 'number' == typeof _0x4b0d83 ? _0x3a3817(_0x4b0d83, undefined) : "string" == typeof _0x4b0d83 ? _0x3c1ba3(_0x4b0d83, undefined) : new _0x5b53bb(_0x4b0d83.low, _0x4b0d83.high, _0x4b0d83.unsigned);
          }
          return new _0x5b53bb(this.low & _0x4b0d83.low, this.high & _0x4b0d83.high, this.unsigned);
        };
        _0x7b94f1.or = function (_0x5b1c22) {
          if (!(true === (_0x5b1c22 && _0x5b1c22.__isLong__))) {
            _0x5b1c22 = 'number' == typeof _0x5b1c22 ? _0x3a3817(_0x5b1c22, undefined) : "string" == typeof _0x5b1c22 ? _0x3c1ba3(_0x5b1c22, undefined) : new _0x5b53bb(_0x5b1c22.low, _0x5b1c22.high, _0x5b1c22.unsigned);
          }
          return new _0x5b53bb(this.low | _0x5b1c22.low, this.high | _0x5b1c22.high, this.unsigned);
        };
        _0x7b94f1.xor = function (_0x374673) {
          if (!(true === (_0x374673 && _0x374673.__isLong__))) {
            _0x374673 = 'number' == typeof _0x374673 ? _0x3a3817(_0x374673, undefined) : "string" == typeof _0x374673 ? _0x3c1ba3(_0x374673, undefined) : new _0x5b53bb(_0x374673.low, _0x374673.high, _0x374673.unsigned);
          }
          return new _0x5b53bb(this.low ^ _0x374673.low, this.high ^ _0x374673.high, this.unsigned);
        };
        _0x7b94f1.shiftLeft = function (_0x363bb9) {
          if (true === (_0x363bb9 && _0x363bb9.__isLong__)) {
            _0x363bb9 = _0x363bb9.toInt();
          }
          return 0x0 == (_0x363bb9 &= 0x3f) ? this : _0x363bb9 < 0x20 ? new _0x5b53bb(this.low << _0x363bb9, this.high << _0x363bb9 | this.low >>> 0x20 - _0x363bb9, this.unsigned) : new _0x5b53bb(0x0, this.low << _0x363bb9 - 0x20, this.unsigned);
        };
        _0x7b94f1.shl = _0x7b94f1.shiftLeft;
        _0x7b94f1.shiftRight = function (_0x1c2c81) {
          if (true === (_0x1c2c81 && _0x1c2c81.__isLong__)) {
            _0x1c2c81 = _0x1c2c81.toInt();
          }
          return 0x0 == (_0x1c2c81 &= 0x3f) ? this : _0x1c2c81 < 0x20 ? new _0x5b53bb(this.low >>> _0x1c2c81 | this.high << 0x20 - _0x1c2c81, this.high >> _0x1c2c81, this.unsigned) : new _0x5b53bb(this.high >> _0x1c2c81 - 0x20, this.high >= 0x0 ? 0x0 : -0x1, this.unsigned);
        };
        _0x7b94f1.shr = _0x7b94f1.shiftRight;
        _0x7b94f1.shiftRightUnsigned = function (_0x3c521d) {
          if (true === (_0x3c521d && _0x3c521d.__isLong__)) {
            _0x3c521d = _0x3c521d.toInt();
          }
          if (0x0 === (_0x3c521d &= 0x3f)) {
            return this;
          }
          var _0x438557 = this.high;
          return _0x3c521d < 0x20 ? new _0x5b53bb(this.low >>> _0x3c521d | _0x438557 << 0x20 - _0x3c521d, _0x438557 >>> _0x3c521d, this.unsigned) : new _0x5b53bb(0x20 === _0x3c521d ? _0x438557 : _0x438557 >>> _0x3c521d - 0x20, 0x0, this.unsigned);
        };
        _0x7b94f1.shru = _0x7b94f1.shiftRightUnsigned;
        _0x7b94f1.shr_u = _0x7b94f1.shiftRightUnsigned;
        _0x7b94f1.toSigned = function () {
          return this.unsigned ? new _0x5b53bb(this.low, this.high, false) : this;
        };
        _0x7b94f1.toUnsigned = function () {
          return this.unsigned ? this : new _0x5b53bb(this.low, this.high, true);
        };
        _0x7b94f1.toBytes = function (_0xe53be2) {
          return _0xe53be2 ? this.toBytesLE() : this.toBytesBE();
        };
        _0x7b94f1.toBytesLE = function () {
          var _0x526bdf = this.high;
          var _0x3d32a0 = this.low;
          return [0xff & _0x3d32a0, _0x3d32a0 >>> 0x8 & 0xff, _0x3d32a0 >>> 0x10 & 0xff, _0x3d32a0 >>> 0x18, 0xff & _0x526bdf, _0x526bdf >>> 0x8 & 0xff, _0x526bdf >>> 0x10 & 0xff, _0x526bdf >>> 0x18];
        };
        _0x7b94f1.toBytesBE = function () {
          var _0x33dca4 = this.high;
          var _0xeb5367 = this.low;
          return [_0x33dca4 >>> 0x18, _0x33dca4 >>> 0x10 & 0xff, _0x33dca4 >>> 0x8 & 0xff, 0xff & _0x33dca4, _0xeb5367 >>> 0x18, _0xeb5367 >>> 0x10 & 0xff, _0xeb5367 >>> 0x8 & 0xff, 0xff & _0xeb5367];
        };
        _0x5b53bb.fromBytes = function (_0x311c6d, _0x14df3f, _0x4697eb) {
          return _0x4697eb ? _0x5b53bb.fromBytesLE(_0x311c6d, _0x14df3f) : _0x5b53bb.fromBytesBE(_0x311c6d, _0x14df3f);
        };
        _0x5b53bb.fromBytesLE = function (_0x1d71d7, _0x46f30b) {
          return new _0x5b53bb(_0x1d71d7[0x0] | _0x1d71d7[0x1] << 0x8 | _0x1d71d7[0x2] << 0x10 | _0x1d71d7[0x3] << 0x18, _0x1d71d7[0x4] | _0x1d71d7[0x5] << 0x8 | _0x1d71d7[0x6] << 0x10 | _0x1d71d7[0x7] << 0x18, _0x46f30b);
        };
        _0x5b53bb.fromBytesBE = function (_0xb462c2, _0x310064) {
          return new _0x5b53bb(_0xb462c2[0x4] << 0x18 | _0xb462c2[0x5] << 0x10 | _0xb462c2[0x6] << 0x8 | _0xb462c2[0x7], _0xb462c2[0x0] << 0x18 | _0xb462c2[0x1] << 0x10 | _0xb462c2[0x2] << 0x8 | _0xb462c2[0x3], _0x310064);
        };
        _0x456a67 = _0xcaa06f.exports;
      }, {});
      _0x46f592.require("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/long/src/long.js");
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js", function (_0x7609a7, _0x1c4d4e, _0x2b6e78, _0x39b7d8, _0x29f59b) {
        _0x2b6e78.exports = function (_0x12ad2d, _0x410810) {
          var _0xa33acc = new Array(arguments.length - 0x1);
          var _0x1aef62 = 0x0;
          var _0x4c2bde = 0x2;
          var _0x535f55 = true;
          for (; _0x4c2bde < arguments.length;) {
            _0xa33acc[_0x1aef62++] = arguments[_0x4c2bde++];
          }
          return new Promise(function (_0xe62422, _0x475ecf) {
            _0xa33acc[_0x1aef62] = function (_0x2ed57d) {
              if (_0x535f55) {
                _0x535f55 = false;
                if (_0x2ed57d) {
                  _0x475ecf(_0x2ed57d);
                } else {
                  var _0x38a65c = new Array(arguments.length - 0x1);
                  for (var _0x11d3e4 = 0x0; _0x11d3e4 < _0x38a65c.length;) {
                    _0x38a65c[_0x11d3e4++] = arguments[_0x11d3e4];
                  }
                  _0xe62422.apply(null, _0x38a65c);
                }
              }
            };
            try {
              _0x12ad2d.apply(_0x410810 || null, _0xa33acc);
            } catch (_0x3a5f2d) {
              if (_0x535f55) {
                _0x535f55 = false;
                _0x475ecf(_0x3a5f2d);
              }
            }
          });
        };
        _0x2b6e78.exports;
      }, {});
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js", function (_0x357176, _0x40e9c9, _0x148b45, _0x2ec24d, _0x2a0562) {
        _0x357176.length = function (_0x3f8f17) {
          var _0x3497c8 = _0x3f8f17.length;
          if (!_0x3497c8) {
            return 0x0;
          }
          for (var _0x181b61 = 0x0; --_0x3497c8 % 0x4 > 0x1 && '=' === _0x3f8f17.charAt(_0x3497c8);) {
            ++_0x181b61;
          }
          return Math.ceil(0x3 * _0x3f8f17.length) / 0x4 - _0x181b61;
        };
        var _0x10f923 = new Array(0x40);
        var _0x18921b = new Array(0x7b);
        for (var _0x269e66 = 0x0; _0x269e66 < 0x40;) {
          _0x18921b[_0x10f923[_0x269e66] = _0x269e66 < 0x1a ? _0x269e66 + 0x41 : _0x269e66 < 0x34 ? _0x269e66 + 0x47 : _0x269e66 < 0x3e ? _0x269e66 - 0x4 : _0x269e66 - 0x3b | 0x2b] = _0x269e66++;
        }
        _0x357176.encode = function (_0xf51f04, _0x219524, _0xada576) {
          var _0x43095e;
          var _0x416542 = null;
          var _0x25fec7 = [];
          var _0x483d73 = 0x0;
          for (var _0x389618 = 0x0; _0x219524 < _0xada576;) {
            var _0x44adda = _0xf51f04[_0x219524++];
            switch (_0x389618) {
              case 0x0:
                _0x25fec7[_0x483d73++] = _0x10f923[_0x44adda >> 0x2];
                _0x43095e = (0x3 & _0x44adda) << 0x4;
                _0x389618 = 0x1;
                break;
              case 0x1:
                _0x25fec7[_0x483d73++] = _0x10f923[_0x43095e | _0x44adda >> 0x4];
                _0x43095e = (0xf & _0x44adda) << 0x2;
                _0x389618 = 0x2;
                break;
              case 0x2:
                _0x25fec7[_0x483d73++] = _0x10f923[_0x43095e | _0x44adda >> 0x6];
                _0x25fec7[_0x483d73++] = _0x10f923[0x3f & _0x44adda];
                _0x389618 = 0x0;
            }
            if (_0x483d73 > 0x1fff) {
              (_0x416542 || (_0x416542 = [])).push(String.fromCharCode.apply(String, _0x25fec7));
              _0x483d73 = 0x0;
            }
          }
          if (_0x389618) {
            _0x25fec7[_0x483d73++] = _0x10f923[_0x43095e];
            _0x25fec7[_0x483d73++] = 0x3d;
            if (0x1 === _0x389618) {
              _0x25fec7[_0x483d73++] = 0x3d;
            }
          }
          return _0x416542 ? (_0x483d73 && _0x416542.push(String.fromCharCode.apply(String, _0x25fec7.slice(0x0, _0x483d73))), _0x416542.join('')) : String.fromCharCode.apply(String, _0x25fec7.slice(0x0, _0x483d73));
        };
        _0x357176.decode = function (_0x1249f6, _0x3581e5, _0x3ada25) {
          var _0x10c53d;
          var _0x57217a = _0x3ada25;
          var _0x359af2 = 0x0;
          for (var _0x2ad940 = 0x0; _0x2ad940 < _0x1249f6.length;) {
            var _0x3a36f5 = _0x1249f6.charCodeAt(_0x2ad940++);
            if (0x3d === _0x3a36f5 && _0x359af2 > 0x1) {
              break;
            }
            if (undefined === (_0x3a36f5 = _0x18921b[_0x3a36f5])) {
              throw Error("invalid encoding");
            }
            switch (_0x359af2) {
              case 0x0:
                _0x10c53d = _0x3a36f5;
                _0x359af2 = 0x1;
                break;
              case 0x1:
                _0x3581e5[_0x3ada25++] = _0x10c53d << 0x2 | (0x30 & _0x3a36f5) >> 0x4;
                _0x10c53d = _0x3a36f5;
                _0x359af2 = 0x2;
                break;
              case 0x2:
                _0x3581e5[_0x3ada25++] = (0xf & _0x10c53d) << 0x4 | (0x3c & _0x3a36f5) >> 0x2;
                _0x10c53d = _0x3a36f5;
                _0x359af2 = 0x3;
                break;
              case 0x3:
                _0x3581e5[_0x3ada25++] = (0x3 & _0x10c53d) << 0x6 | _0x3a36f5;
                _0x359af2 = 0x0;
            }
          }
          if (0x1 === _0x359af2) {
            throw Error("invalid encoding");
          }
          return _0x3ada25 - _0x57217a;
        };
        _0x357176.test = function (_0x1e0c2e) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(_0x1e0c2e);
        };
        _0x148b45.exports;
      }, {});
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js", function (_0x690bde, _0x5a9a8b, _0x2cae08, _0x3e942b, _0x53dbe3) {
        function _0x1ac8c2() {
          this._listeners = {};
        }
        _0x2cae08.exports = _0x1ac8c2;
        _0x1ac8c2.prototype.on = function (_0x482281, _0x3b9f9d, _0x189533) {
          (this._listeners[_0x482281] || (this._listeners[_0x482281] = [])).push({
            'fn': _0x3b9f9d,
            'ctx': _0x189533 || this
          });
          return this;
        };
        _0x1ac8c2.prototype.off = function (_0x3397f8, _0x4e0cff) {
          if (undefined === _0x3397f8) {
            this._listeners = {};
          } else {
            if (undefined === _0x4e0cff) {
              this._listeners[_0x3397f8] = [];
            } else {
              var _0x3816a3 = this._listeners[_0x3397f8];
              for (var _0x134215 = 0x0; _0x134215 < _0x3816a3.length;) {
                if (_0x3816a3[_0x134215].fn === _0x4e0cff) {
                  _0x3816a3.splice(_0x134215, 0x1);
                } else {
                  ++_0x134215;
                }
              }
            }
          }
          return this;
        };
        _0x1ac8c2.prototype.emit = function (_0x6039ec) {
          var _0x1f661b = this._listeners[_0x6039ec];
          if (_0x1f661b) {
            var _0x45f5bf = [];
            for (var _0x316b6c = 0x1; _0x316b6c < arguments.length;) {
              _0x45f5bf.push(arguments[_0x316b6c++]);
            }
            for (_0x316b6c = 0x0; _0x316b6c < _0x1f661b.length;) {
              _0x1f661b[_0x316b6c].fn.apply(_0x1f661b[_0x316b6c++].ctx, _0x45f5bf);
            }
          }
          return this;
        };
        _0x2cae08.exports;
      }, {});
      _0x46f592.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/@protobufjs/float/index.js', function (_0x35a72b, _0x3e0dad, _0x1d2036, _0x29433a, _0x223155) {
        function _0x3a8ac7(_0x3f416a) {
          if ("undefined" != typeof Float32Array) {
            (function () {
              var _0x436d78 = new Float32Array([-0x0]);
              var _0x8f89b = new Uint8Array(_0x436d78.buffer);
              var _0xa8e9f = 0x80 === _0x8f89b[0x3];
              function _0x4ee30d(_0x64c628, _0x41db93, _0x283ee7) {
                _0x436d78[0x0] = _0x64c628;
                _0x41db93[_0x283ee7] = _0x8f89b[0x0];
                _0x41db93[_0x283ee7 + 0x1] = _0x8f89b[0x1];
                _0x41db93[_0x283ee7 + 0x2] = _0x8f89b[0x2];
                _0x41db93[_0x283ee7 + 0x3] = _0x8f89b[0x3];
              }
              function _0x3516fd(_0x40a00c, _0x1bd9a7, _0x447629) {
                _0x436d78[0x0] = _0x40a00c;
                _0x1bd9a7[_0x447629] = _0x8f89b[0x3];
                _0x1bd9a7[_0x447629 + 0x1] = _0x8f89b[0x2];
                _0x1bd9a7[_0x447629 + 0x2] = _0x8f89b[0x1];
                _0x1bd9a7[_0x447629 + 0x3] = _0x8f89b[0x0];
              }
              function _0x261320(_0x4adc3b, _0xad041c) {
                _0x8f89b[0x0] = _0x4adc3b[_0xad041c];
                _0x8f89b[0x1] = _0x4adc3b[_0xad041c + 0x1];
                _0x8f89b[0x2] = _0x4adc3b[_0xad041c + 0x2];
                _0x8f89b[0x3] = _0x4adc3b[_0xad041c + 0x3];
                return _0x436d78[0x0];
              }
              function _0x3a32e6(_0xbf61e7, _0x185f9a) {
                _0x8f89b[0x3] = _0xbf61e7[_0x185f9a];
                _0x8f89b[0x2] = _0xbf61e7[_0x185f9a + 0x1];
                _0x8f89b[0x1] = _0xbf61e7[_0x185f9a + 0x2];
                _0x8f89b[0x0] = _0xbf61e7[_0x185f9a + 0x3];
                return _0x436d78[0x0];
              }
              _0x3f416a.writeFloatLE = _0xa8e9f ? _0x4ee30d : _0x3516fd;
              _0x3f416a.writeFloatBE = _0xa8e9f ? _0x3516fd : _0x4ee30d;
              _0x3f416a.readFloatLE = _0xa8e9f ? _0x261320 : _0x3a32e6;
              _0x3f416a.readFloatBE = _0xa8e9f ? _0x3a32e6 : _0x261320;
            })();
          } else {
            (function () {
              function _0x41f50c(_0x549adf, _0x6a98f0, _0x1b4a23, _0x1b779e) {
                var _0x22f9b3 = _0x6a98f0 < 0x0 ? 0x1 : 0x0;
                if (_0x22f9b3) {
                  _0x6a98f0 = -_0x6a98f0;
                }
                if (0x0 === _0x6a98f0) {
                  _0x549adf(0x1 / _0x6a98f0 > 0x0 ? 0x0 : 0x80000000, _0x1b4a23, _0x1b779e);
                } else {
                  if (isNaN(_0x6a98f0)) {
                    _0x549adf(0x7fc00000, _0x1b4a23, _0x1b779e);
                  } else {
                    if (_0x6a98f0 > 0xffffff00000000000000000000000000) {
                      _0x549adf((_0x22f9b3 << 0x1f | 0x7f800000) >>> 0x0, _0x1b4a23, _0x1b779e);
                    } else {
                      if (_0x6a98f0 < 1.1754943508222875e-38) {
                        _0x549adf((_0x22f9b3 << 0x1f | Math.round(_0x6a98f0 / 1.401298464324817e-45)) >>> 0x0, _0x1b4a23, _0x1b779e);
                      } else {
                        var _0x510e55 = Math.floor(Math.log(_0x6a98f0) / Math.LN2);
                        _0x549adf((_0x22f9b3 << 0x1f | _0x510e55 + 0x7f << 0x17 | 0x7fffff & Math.round(_0x6a98f0 * Math.pow(0x2, -_0x510e55) * 0x800000)) >>> 0x0, _0x1b4a23, _0x1b779e);
                      }
                    }
                  }
                }
              }
              function _0x99eb01(_0x2450c2, _0x43a060, _0x35c3c2) {
                var _0x5c0ef1 = _0x2450c2(_0x43a060, _0x35c3c2);
                var _0x3d32ca = 0x2 * (_0x5c0ef1 >> 0x1f) + 0x1;
                var _0x2514dd = _0x5c0ef1 >>> 0x17 & 0xff;
                var _0x18e159 = 0x7fffff & _0x5c0ef1;
                return 0xff === _0x2514dd ? _0x18e159 ? NaN : _0x3d32ca * Infinity : 0x0 === _0x2514dd ? 1.401298464324817e-45 * _0x3d32ca * _0x18e159 : _0x3d32ca * Math.pow(0x2, _0x2514dd - 0x96) * (_0x18e159 + 0x800000);
              }
              _0x3f416a.writeFloatLE = _0x41f50c.bind(null, _0x33941a);
              _0x3f416a.writeFloatBE = _0x41f50c.bind(null, _0x3a10e7);
              _0x3f416a.readFloatLE = _0x99eb01.bind(null, _0x339ec1);
              _0x3f416a.readFloatBE = _0x99eb01.bind(null, _0x14257c);
            })();
          }
          if ("undefined" != typeof Float64Array) {
            (function () {
              var _0x470425 = new Float64Array([-0x0]);
              var _0x35c234 = new Uint8Array(_0x470425.buffer);
              var _0x2cf08f = 0x80 === _0x35c234[0x7];
              function _0x5388a0(_0x171061, _0x1663a1, _0x39fa22) {
                _0x470425[0x0] = _0x171061;
                _0x1663a1[_0x39fa22] = _0x35c234[0x0];
                _0x1663a1[_0x39fa22 + 0x1] = _0x35c234[0x1];
                _0x1663a1[_0x39fa22 + 0x2] = _0x35c234[0x2];
                _0x1663a1[_0x39fa22 + 0x3] = _0x35c234[0x3];
                _0x1663a1[_0x39fa22 + 0x4] = _0x35c234[0x4];
                _0x1663a1[_0x39fa22 + 0x5] = _0x35c234[0x5];
                _0x1663a1[_0x39fa22 + 0x6] = _0x35c234[0x6];
                _0x1663a1[_0x39fa22 + 0x7] = _0x35c234[0x7];
              }
              function _0x3be2ab(_0x2f9104, _0x394872, _0x31e7aa) {
                _0x470425[0x0] = _0x2f9104;
                _0x394872[_0x31e7aa] = _0x35c234[0x7];
                _0x394872[_0x31e7aa + 0x1] = _0x35c234[0x6];
                _0x394872[_0x31e7aa + 0x2] = _0x35c234[0x5];
                _0x394872[_0x31e7aa + 0x3] = _0x35c234[0x4];
                _0x394872[_0x31e7aa + 0x4] = _0x35c234[0x3];
                _0x394872[_0x31e7aa + 0x5] = _0x35c234[0x2];
                _0x394872[_0x31e7aa + 0x6] = _0x35c234[0x1];
                _0x394872[_0x31e7aa + 0x7] = _0x35c234[0x0];
              }
              function _0x594494(_0x394eea, _0x109c42) {
                _0x35c234[0x0] = _0x394eea[_0x109c42];
                _0x35c234[0x1] = _0x394eea[_0x109c42 + 0x1];
                _0x35c234[0x2] = _0x394eea[_0x109c42 + 0x2];
                _0x35c234[0x3] = _0x394eea[_0x109c42 + 0x3];
                _0x35c234[0x4] = _0x394eea[_0x109c42 + 0x4];
                _0x35c234[0x5] = _0x394eea[_0x109c42 + 0x5];
                _0x35c234[0x6] = _0x394eea[_0x109c42 + 0x6];
                _0x35c234[0x7] = _0x394eea[_0x109c42 + 0x7];
                return _0x470425[0x0];
              }
              function _0x253b71(_0x46b967, _0x27a40f) {
                _0x35c234[0x7] = _0x46b967[_0x27a40f];
                _0x35c234[0x6] = _0x46b967[_0x27a40f + 0x1];
                _0x35c234[0x5] = _0x46b967[_0x27a40f + 0x2];
                _0x35c234[0x4] = _0x46b967[_0x27a40f + 0x3];
                _0x35c234[0x3] = _0x46b967[_0x27a40f + 0x4];
                _0x35c234[0x2] = _0x46b967[_0x27a40f + 0x5];
                _0x35c234[0x1] = _0x46b967[_0x27a40f + 0x6];
                _0x35c234[0x0] = _0x46b967[_0x27a40f + 0x7];
                return _0x470425[0x0];
              }
              _0x3f416a.writeDoubleLE = _0x2cf08f ? _0x5388a0 : _0x3be2ab;
              _0x3f416a.writeDoubleBE = _0x2cf08f ? _0x3be2ab : _0x5388a0;
              _0x3f416a.readDoubleLE = _0x2cf08f ? _0x594494 : _0x253b71;
              _0x3f416a.readDoubleBE = _0x2cf08f ? _0x253b71 : _0x594494;
            })();
          } else {
            (function () {
              function _0x271751(_0x116e32, _0x535089, _0x39f869, _0x39c054, _0x574aa8, _0x377037) {
                var _0x34888f = _0x39c054 < 0x0 ? 0x1 : 0x0;
                if (_0x34888f) {
                  _0x39c054 = -_0x39c054;
                }
                if (0x0 === _0x39c054) {
                  _0x116e32(0x0, _0x574aa8, _0x377037 + _0x535089);
                  _0x116e32(0x1 / _0x39c054 > 0x0 ? 0x0 : 0x80000000, _0x574aa8, _0x377037 + _0x39f869);
                } else {
                  if (isNaN(_0x39c054)) {
                    _0x116e32(0x0, _0x574aa8, _0x377037 + _0x535089);
                    _0x116e32(0x7ff80000, _0x574aa8, _0x377037 + _0x39f869);
                  } else {
                    if (_0x39c054 > 0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
                      _0x116e32(0x0, _0x574aa8, _0x377037 + _0x535089);
                      _0x116e32((_0x34888f << 0x1f | 0x7ff00000) >>> 0x0, _0x574aa8, _0x377037 + _0x39f869);
                    } else {
                      var _0x20c4ad;
                      if (_0x39c054 < 2.2250738585072014e-308) {
                        _0x116e32((_0x20c4ad = _0x39c054 / 5e-324) >>> 0x0, _0x574aa8, _0x377037 + _0x535089);
                        _0x116e32((_0x34888f << 0x1f | _0x20c4ad / 0x100000000) >>> 0x0, _0x574aa8, _0x377037 + _0x39f869);
                      } else {
                        var _0x3ec272 = Math.floor(Math.log(_0x39c054) / Math.LN2);
                        if (0x400 === _0x3ec272) {
                          _0x3ec272 = 0x3ff;
                        }
                        _0x116e32(0x10000000000000 * (_0x20c4ad = _0x39c054 * Math.pow(0x2, -_0x3ec272)) >>> 0x0, _0x574aa8, _0x377037 + _0x535089);
                        _0x116e32((_0x34888f << 0x1f | _0x3ec272 + 0x3ff << 0x14 | 0x100000 * _0x20c4ad & 0xfffff) >>> 0x0, _0x574aa8, _0x377037 + _0x39f869);
                      }
                    }
                  }
                }
              }
              function _0x4fc150(_0x3fe9ad, _0x3de20d, _0x3cc579, _0x2d1efe, _0x3fae84) {
                var _0x27676b = _0x3fe9ad(_0x2d1efe, _0x3fae84 + _0x3de20d);
                var _0xce55db = _0x3fe9ad(_0x2d1efe, _0x3fae84 + _0x3cc579);
                var _0x3458b8 = 0x2 * (_0xce55db >> 0x1f) + 0x1;
                var _0xe087b8 = _0xce55db >>> 0x14 & 0x7ff;
                var _0x3cdc79 = 0x100000000 * (0xfffff & _0xce55db) + _0x27676b;
                return 0x7ff === _0xe087b8 ? _0x3cdc79 ? NaN : _0x3458b8 * Infinity : 0x0 === _0xe087b8 ? 5e-324 * _0x3458b8 * _0x3cdc79 : _0x3458b8 * Math.pow(0x2, _0xe087b8 - 0x433) * (_0x3cdc79 + 0x10000000000000);
              }
              _0x3f416a.writeDoubleLE = _0x271751.bind(null, _0x33941a, 0x0, 0x4);
              _0x3f416a.writeDoubleBE = _0x271751.bind(null, _0x3a10e7, 0x4, 0x0);
              _0x3f416a.readDoubleLE = _0x4fc150.bind(null, _0x339ec1, 0x0, 0x4);
              _0x3f416a.readDoubleBE = _0x4fc150.bind(null, _0x14257c, 0x4, 0x0);
            })();
          }
          return _0x3f416a;
        }
        function _0x33941a(_0x3fd838, _0x454ac6, _0x5dc440) {
          _0x454ac6[_0x5dc440] = 0xff & _0x3fd838;
          _0x454ac6[_0x5dc440 + 0x1] = _0x3fd838 >>> 0x8 & 0xff;
          _0x454ac6[_0x5dc440 + 0x2] = _0x3fd838 >>> 0x10 & 0xff;
          _0x454ac6[_0x5dc440 + 0x3] = _0x3fd838 >>> 0x18;
        }
        function _0x3a10e7(_0x5a6cb9, _0x32dac2, _0x291347) {
          _0x32dac2[_0x291347] = _0x5a6cb9 >>> 0x18;
          _0x32dac2[_0x291347 + 0x1] = _0x5a6cb9 >>> 0x10 & 0xff;
          _0x32dac2[_0x291347 + 0x2] = _0x5a6cb9 >>> 0x8 & 0xff;
          _0x32dac2[_0x291347 + 0x3] = 0xff & _0x5a6cb9;
        }
        function _0x339ec1(_0x32d579, _0x35ebb0) {
          return (_0x32d579[_0x35ebb0] | _0x32d579[_0x35ebb0 + 0x1] << 0x8 | _0x32d579[_0x35ebb0 + 0x2] << 0x10 | _0x32d579[_0x35ebb0 + 0x3] << 0x18) >>> 0x0;
        }
        function _0x14257c(_0x2a1276, _0x278ee1) {
          return (_0x2a1276[_0x278ee1] << 0x18 | _0x2a1276[_0x278ee1 + 0x1] << 0x10 | _0x2a1276[_0x278ee1 + 0x2] << 0x8 | _0x2a1276[_0x278ee1 + 0x3]) >>> 0x0;
        }
        _0x1d2036.exports = _0x3a8ac7(_0x3a8ac7);
        _0x1d2036.exports;
        _0x1d2036.exports.writeFloatLE;
        _0x1d2036.exports.writeFloatBE;
        _0x1d2036.exports.readFloatLE;
        _0x1d2036.exports.readFloatBE;
        _0x1d2036.exports.writeDoubleLE;
        _0x1d2036.exports.writeDoubleBE;
        _0x1d2036.exports.readDoubleLE;
        _0x1d2036.exports.readDoubleBE;
      }, {});
      _0x46f592.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js', function (_0x11203b, _0x408f6c, _0x455914, _0x58c637, _0x4dbda7) {
        function _0x1a2bc2(_0x5aeade) {
          try {
            var _0x1259e1 = eval('quire'.replace(/^/, 're'))(_0x5aeade);
            if (_0x1259e1 && (_0x1259e1.length || Object.keys(_0x1259e1).length)) {
              return _0x1259e1;
            }
          } catch (_0x5a23f5) {}
          return null;
        }
        _0x455914.exports = _0x1a2bc2;
        _0x455914.exports;
      }, {});
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js", function (_0x181d7f, _0x3e865a, _0x56390a, _0x1d0d75, _0x799725) {
        _0x181d7f.length = function (_0x472b68) {
          var _0x52de05 = 0x0;
          var _0x570780 = 0x0;
          for (var _0x1589ab = 0x0; _0x1589ab < _0x472b68.length; ++_0x1589ab) {
            if ((_0x570780 = _0x472b68.charCodeAt(_0x1589ab)) < 0x80) {
              _0x52de05 += 0x1;
            } else if (_0x570780 < 0x800) {
              _0x52de05 += 0x2;
            } else if (0xd800 == (0xfc00 & _0x570780) && 0xdc00 == (0xfc00 & _0x472b68.charCodeAt(_0x1589ab + 0x1))) {
              ++_0x1589ab;
              _0x52de05 += 0x4;
            } else {
              _0x52de05 += 0x3;
            }
          }
          return _0x52de05;
        };
        _0x181d7f.read = function (_0x52d26a, _0x3d5353, _0x16bdd9) {
          if (_0x16bdd9 - _0x3d5353 < 0x1) {
            return '';
          }
          var _0x124532;
          var _0xc0a4b1 = null;
          var _0x52bff9 = [];
          for (var _0x2230b2 = 0x0; _0x3d5353 < _0x16bdd9;) {
            if ((_0x124532 = _0x52d26a[_0x3d5353++]) < 0x80) {
              _0x52bff9[_0x2230b2++] = _0x124532;
            } else if (_0x124532 > 0xbf && _0x124532 < 0xe0) {
              _0x52bff9[_0x2230b2++] = (0x1f & _0x124532) << 0x6 | 0x3f & _0x52d26a[_0x3d5353++];
            } else if (_0x124532 > 0xef && _0x124532 < 0x16d) {
              _0x124532 = ((0x7 & _0x124532) << 0x12 | (0x3f & _0x52d26a[_0x3d5353++]) << 0xc | (0x3f & _0x52d26a[_0x3d5353++]) << 0x6 | 0x3f & _0x52d26a[_0x3d5353++]) - 0x10000;
              _0x52bff9[_0x2230b2++] = 0xd800 + (_0x124532 >> 0xa);
              _0x52bff9[_0x2230b2++] = 0xdc00 + (0x3ff & _0x124532);
            } else {
              _0x52bff9[_0x2230b2++] = (0xf & _0x124532) << 0xc | (0x3f & _0x52d26a[_0x3d5353++]) << 0x6 | 0x3f & _0x52d26a[_0x3d5353++];
            }
            if (_0x2230b2 > 0x1fff) {
              (_0xc0a4b1 || (_0xc0a4b1 = [])).push(String.fromCharCode.apply(String, _0x52bff9));
              _0x2230b2 = 0x0;
            }
          }
          return _0xc0a4b1 ? (_0x2230b2 && _0xc0a4b1.push(String.fromCharCode.apply(String, _0x52bff9.slice(0x0, _0x2230b2))), _0xc0a4b1.join('')) : String.fromCharCode.apply(String, _0x52bff9.slice(0x0, _0x2230b2));
        };
        _0x181d7f.write = function (_0xd88081, _0x4352c9, _0x4772c6) {
          var _0x20665b;
          var _0x5bbee2;
          var _0xa776a5 = _0x4772c6;
          for (var _0x20c90e = 0x0; _0x20c90e < _0xd88081.length; ++_0x20c90e) {
            if ((_0x20665b = _0xd88081.charCodeAt(_0x20c90e)) < 0x80) {
              _0x4352c9[_0x4772c6++] = _0x20665b;
            } else if (_0x20665b < 0x800) {
              _0x4352c9[_0x4772c6++] = _0x20665b >> 0x6 | 0xc0;
              _0x4352c9[_0x4772c6++] = 0x3f & _0x20665b | 0x80;
            } else if (0xd800 == (0xfc00 & _0x20665b) && 0xdc00 == (0xfc00 & (_0x5bbee2 = _0xd88081.charCodeAt(_0x20c90e + 0x1)))) {
              _0x20665b = 0x10000 + ((0x3ff & _0x20665b) << 0xa) + (0x3ff & _0x5bbee2);
              ++_0x20c90e;
              _0x4352c9[_0x4772c6++] = _0x20665b >> 0x12 | 0xf0;
              _0x4352c9[_0x4772c6++] = _0x20665b >> 0xc & 0x3f | 0x80;
              _0x4352c9[_0x4772c6++] = _0x20665b >> 0x6 & 0x3f | 0x80;
              _0x4352c9[_0x4772c6++] = 0x3f & _0x20665b | 0x80;
            } else {
              _0x4352c9[_0x4772c6++] = _0x20665b >> 0xc | 0xe0;
              _0x4352c9[_0x4772c6++] = _0x20665b >> 0x6 & 0x3f | 0x80;
              _0x4352c9[_0x4772c6++] = 0x3f & _0x20665b | 0x80;
            }
          }
          return _0x4772c6 - _0xa776a5;
        };
        _0x56390a.exports;
      }, {});
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js", function (_0x19be4b, _0x26ab5e, _0x2717d7, _0x51f583, _0x30106e) {
        _0x2717d7.exports = function (_0x1a017d, _0xa53d6a, _0x426318) {
          var _0x1501e2 = _0x426318 || 0x2000;
          var _0x349396 = _0x1501e2 >>> 0x1;
          var _0x3008e1 = null;
          var _0x101c97 = _0x1501e2;
          return function (_0x5c9f85) {
            if (_0x5c9f85 < 0x1 || _0x5c9f85 > _0x349396) {
              return _0x1a017d(_0x5c9f85);
            }
            if (_0x101c97 + _0x5c9f85 > _0x1501e2) {
              _0x3008e1 = _0x1a017d(_0x1501e2);
              _0x101c97 = 0x0;
            }
            var _0x2fe739 = _0xa53d6a.call(_0x3008e1, _0x101c97, _0x101c97 += _0x5c9f85);
            if (0x7 & _0x101c97) {
              _0x101c97 = 0x1 + (0x7 | _0x101c97);
            }
            return _0x2fe739;
          };
        };
        _0x2717d7.exports;
      }, {});
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js", function (_0x3f5e4a, _0x3566f4, _0x5bf36b, _0x370808, _0x53c242) {
        _0x5bf36b.exports = _0x2c7119;
        var _0x22a364 = _0x3566f4("../util/minimal");
        function _0x2c7119(_0x1bcb1b, _0x857501) {
          this.lo = _0x1bcb1b >>> 0x0;
          this.hi = _0x857501 >>> 0x0;
        }
        var _0x2f1886 = _0x2c7119.zero = new _0x2c7119(0x0, 0x0);
        _0x2f1886.toNumber = function () {
          return 0x0;
        };
        _0x2f1886.zzEncode = _0x2f1886.zzDecode = function () {
          return this;
        };
        _0x2f1886.length = function () {
          return 0x1;
        };
        var _0x6244f6 = _0x2c7119.zeroHash = "\0\0\0\0\0\0\0\0";
        _0x2c7119.fromNumber = function (_0x3adb23) {
          if (0x0 === _0x3adb23) {
            return _0x2f1886;
          }
          var _0x3ba7f9 = _0x3adb23 < 0x0;
          if (_0x3ba7f9) {
            _0x3adb23 = -_0x3adb23;
          }
          var _0x356de8 = _0x3adb23 >>> 0x0;
          var _0xe91388 = (_0x3adb23 - _0x356de8) / 0x100000000 >>> 0x0;
          if (_0x3ba7f9) {
            _0xe91388 = ~_0xe91388 >>> 0x0;
            _0x356de8 = ~_0x356de8 >>> 0x0;
            if (++_0x356de8 > 0xffffffff) {
              _0x356de8 = 0x0;
              if (++_0xe91388 > 0xffffffff) {
                _0xe91388 = 0x0;
              }
            }
          }
          return new _0x2c7119(_0x356de8, _0xe91388);
        };
        _0x2c7119.from = function (_0x99087c) {
          if ('number' == typeof _0x99087c) {
            return _0x2c7119.fromNumber(_0x99087c);
          }
          if (_0x22a364.isString(_0x99087c)) {
            if (!_0x22a364.Long) {
              return _0x2c7119.fromNumber(parseInt(_0x99087c, 0xa));
            }
            _0x99087c = _0x22a364.Long.fromString(_0x99087c);
          }
          return _0x99087c.low || _0x99087c.high ? new _0x2c7119(_0x99087c.low >>> 0x0, _0x99087c.high >>> 0x0) : _0x2f1886;
        };
        _0x2c7119.prototype.toNumber = function (_0x2627f0) {
          if (!_0x2627f0 && this.hi >>> 0x1f) {
            var _0x5186c1 = 0x1 + ~this.lo >>> 0x0;
            var _0x21ddf5 = ~this.hi >>> 0x0;
            if (!_0x5186c1) {
              _0x21ddf5 = _0x21ddf5 + 0x1 >>> 0x0;
            }
            return -(_0x5186c1 + 0x100000000 * _0x21ddf5);
          }
          return this.lo + 0x100000000 * this.hi;
        };
        _0x2c7119.prototype.toLong = function (_0x40590c) {
          return _0x22a364.Long ? new _0x22a364.Long(0x0 | this.lo, 0x0 | this.hi, Boolean(_0x40590c)) : {
            'low': 0x0 | this.lo,
            'high': 0x0 | this.hi,
            'unsigned': Boolean(_0x40590c)
          };
        };
        var _0x28ecb8 = String.prototype.charCodeAt;
        _0x2c7119.fromHash = function (_0x28a2ef) {
          return _0x28a2ef === _0x6244f6 ? _0x2f1886 : new _0x2c7119((_0x28ecb8.call(_0x28a2ef, 0x0) | _0x28ecb8.call(_0x28a2ef, 0x1) << 0x8 | _0x28ecb8.call(_0x28a2ef, 0x2) << 0x10 | _0x28ecb8.call(_0x28a2ef, 0x3) << 0x18) >>> 0x0, (_0x28ecb8.call(_0x28a2ef, 0x4) | _0x28ecb8.call(_0x28a2ef, 0x5) << 0x8 | _0x28ecb8.call(_0x28a2ef, 0x6) << 0x10 | _0x28ecb8.call(_0x28a2ef, 0x7) << 0x18) >>> 0x0);
        };
        _0x2c7119.prototype.toHash = function () {
          return String.fromCharCode(0xff & this.lo, this.lo >>> 0x8 & 0xff, this.lo >>> 0x10 & 0xff, this.lo >>> 0x18, 0xff & this.hi, this.hi >>> 0x8 & 0xff, this.hi >>> 0x10 & 0xff, this.hi >>> 0x18);
        };
        _0x2c7119.prototype.zzEncode = function () {
          var _0x9d6f33 = this.hi >> 0x1f;
          this.hi = ((this.hi << 0x1 | this.lo >>> 0x1f) ^ _0x9d6f33) >>> 0x0;
          this.lo = (this.lo << 0x1 ^ _0x9d6f33) >>> 0x0;
          return this;
        };
        _0x2c7119.prototype.zzDecode = function () {
          var _0x161e70 = -(0x1 & this.lo);
          this.lo = ((this.lo >>> 0x1 | this.hi << 0x1f) ^ _0x161e70) >>> 0x0;
          this.hi = (this.hi >>> 0x1 ^ _0x161e70) >>> 0x0;
          return this;
        };
        _0x2c7119.prototype.length = function () {
          var _0x20954d = this.lo;
          var _0x335a26 = (this.lo >>> 0x1c | this.hi << 0x4) >>> 0x0;
          var _0x4f0fe2 = this.hi >>> 0x18;
          return 0x0 === _0x4f0fe2 ? 0x0 === _0x335a26 ? _0x20954d < 0x4000 ? _0x20954d < 0x80 ? 0x1 : 0x2 : _0x20954d < 0x200000 ? 0x3 : 0x4 : _0x335a26 < 0x4000 ? _0x335a26 < 0x80 ? 0x5 : 0x6 : _0x335a26 < 0x200000 ? 0x7 : 0x8 : _0x4f0fe2 < 0x80 ? 0x9 : 0xa;
        };
        _0x5bf36b.exports;
      }, function () {
        return {
          '../util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js", function (_0x4b18cf, _0x3e30ba, _0x217107, _0x1c01b3, _0x1f7296) {
        function _0xb66b9f(_0x1c8c7f, _0x5e2299, _0x58d154) {
          var _0x3e791e = Object.keys(_0x5e2299);
          for (var _0x5e892b = 0x0; _0x5e892b < _0x3e791e.length; ++_0x5e892b) {
            if (!(undefined !== _0x1c8c7f[_0x3e791e[_0x5e892b]] && _0x58d154)) {
              _0x1c8c7f[_0x3e791e[_0x5e892b]] = _0x5e2299[_0x3e791e[_0x5e892b]];
            }
          }
          return _0x1c8c7f;
        }
        function _0x4c6eb9(_0x29d45d) {
          function _0x47c6bd(_0x1801a1, _0x226ebe) {
            if (!(this instanceof _0x47c6bd)) {
              return new _0x47c6bd(_0x1801a1, _0x226ebe);
            }
            Object.defineProperty(this, "message", {
              'get': function () {
                return _0x1801a1;
              }
            });
            if (Error.captureStackTrace) {
              Error.captureStackTrace(this, _0x47c6bd);
            } else {
              Object.defineProperty(this, "stack", {
                'value': new Error().stack || ''
              });
            }
            if (_0x226ebe) {
              _0xb66b9f(this, _0x226ebe);
            }
          }
          (_0x47c6bd.prototype = Object.create(Error.prototype)).constructor = _0x47c6bd;
          Object.defineProperty(_0x47c6bd.prototype, 'name', {
            'get': function () {
              return _0x29d45d;
            }
          });
          _0x47c6bd.prototype.toString = function () {
            return this.name + ": " + this.message;
          };
          return _0x47c6bd;
        }
        _0x4b18cf.asPromise = _0x3e30ba("@protobufjs/aspromise");
        _0x4b18cf.base64 = _0x3e30ba("@protobufjs/base64");
        _0x4b18cf.EventEmitter = _0x3e30ba("@protobufjs/eventemitter");
        _0x4b18cf.float = _0x3e30ba("@protobufjs/float");
        _0x4b18cf.inquire = _0x3e30ba("@protobufjs/inquire");
        _0x4b18cf.utf8 = _0x3e30ba("@protobufjs/utf8");
        _0x4b18cf.pool = _0x3e30ba("@protobufjs/pool");
        _0x4b18cf.LongBits = _0x3e30ba("./longbits");
        _0x4b18cf.isNode = Boolean("undefined" != typeof global && global && global.process && global.process.versions && global.process.versions.node);
        _0x4b18cf.global = _0x4b18cf.isNode && global || "undefined" != typeof window && window || "undefined" != typeof self && self || this;
        _0x4b18cf.emptyArray = Object.freeze ? Object.freeze([]) : [];
        _0x4b18cf.emptyObject = Object.freeze ? Object.freeze({}) : {};
        _0x4b18cf.isInteger = Number.isInteger || function (_0xac9065) {
          return "number" == typeof _0xac9065 && isFinite(_0xac9065) && Math.floor(_0xac9065) === _0xac9065;
        };
        _0x4b18cf.isString = function (_0x451d02) {
          return 'string' == typeof _0x451d02 || _0x451d02 instanceof String;
        };
        _0x4b18cf.isObject = function (_0x27f4fc) {
          return _0x27f4fc && "object" == typeof _0x27f4fc;
        };
        _0x4b18cf.isset = _0x4b18cf.isSet = function (_0x3dc4ae, _0x2f9bf0) {
          var _0x959483 = _0x3dc4ae[_0x2f9bf0];
          return !(null == _0x959483 || !_0x3dc4ae.hasOwnProperty(_0x2f9bf0)) && ("object" != typeof _0x959483 || (Array.isArray(_0x959483) ? _0x959483.length : Object.keys(_0x959483).length) > 0x0);
        };
        _0x4b18cf.Buffer = function () {
          try {
            var _0x3e2cf6 = _0x4b18cf.inquire('buffer').Buffer;
            return _0x3e2cf6.prototype.utf8Write ? _0x3e2cf6 : null;
          } catch (_0x21500c) {
            return null;
          }
        }();
        _0x4b18cf._Buffer_from = null;
        _0x4b18cf._Buffer_allocUnsafe = null;
        _0x4b18cf.newBuffer = function (_0x20abae) {
          return "number" == typeof _0x20abae ? _0x4b18cf.Buffer ? _0x4b18cf._Buffer_allocUnsafe(_0x20abae) : new _0x4b18cf.Array(_0x20abae) : _0x4b18cf.Buffer ? _0x4b18cf._Buffer_from(_0x20abae) : "undefined" == typeof Uint8Array ? _0x20abae : new Uint8Array(_0x20abae);
        };
        _0x4b18cf.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array;
        _0x4b18cf.Long = _0x4b18cf.global.dcodeIO && _0x4b18cf.global.dcodeIO.Long || _0x4b18cf.global.Long || _0x4b18cf.inquire("long");
        _0x4b18cf.key2Re = /^true|false|0|1$/;
        _0x4b18cf.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
        _0x4b18cf.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
        _0x4b18cf.longToHash = function (_0x54aa79) {
          return _0x54aa79 ? _0x4b18cf.LongBits.from(_0x54aa79).toHash() : _0x4b18cf.LongBits.zeroHash;
        };
        _0x4b18cf.longFromHash = function (_0x7b87c4, _0x5a8e28) {
          var _0x3881f5 = _0x4b18cf.LongBits.fromHash(_0x7b87c4);
          return _0x4b18cf.Long ? _0x4b18cf.Long.fromBits(_0x3881f5.lo, _0x3881f5.hi, _0x5a8e28) : _0x3881f5.toNumber(Boolean(_0x5a8e28));
        };
        _0x4b18cf.merge = _0xb66b9f;
        _0x4b18cf.lcFirst = function (_0x3838c9) {
          return _0x3838c9.charAt(0x0).toLowerCase() + _0x3838c9.substring(0x1);
        };
        _0x4b18cf.newError = _0x4c6eb9;
        _0x4b18cf.ProtocolError = _0x4c6eb9('ProtocolError');
        _0x4b18cf.oneOfGetter = function (_0x260a31) {
          var _0x243bc6 = {};
          for (var _0x41fe71 = 0x0; _0x41fe71 < _0x260a31.length; ++_0x41fe71) {
            _0x243bc6[_0x260a31[_0x41fe71]] = 0x1;
          }
          return function () {
            var _0x367e2c = Object.keys(this);
            for (var _0xdff34d = _0x367e2c.length - 0x1; _0xdff34d > -0x1; --_0xdff34d) {
              if (0x1 === _0x243bc6[_0x367e2c[_0xdff34d]] && undefined !== this[_0x367e2c[_0xdff34d]] && null !== this[_0x367e2c[_0xdff34d]]) {
                return _0x367e2c[_0xdff34d];
              }
            }
          };
        };
        _0x4b18cf.oneOfSetter = function (_0x1bfdd0) {
          return function (_0x396c16) {
            for (var _0x15ed1f = 0x0; _0x15ed1f < _0x1bfdd0.length; ++_0x15ed1f) {
              if (_0x1bfdd0[_0x15ed1f] !== _0x396c16) {
                delete this[_0x1bfdd0[_0x15ed1f]];
              }
            }
          };
        };
        _0x4b18cf.toJSONOptions = {
          'longs': String,
          'enums': String,
          'bytes': String,
          'json': true
        };
        _0x4b18cf._configure = function () {
          var _0x478589 = _0x4b18cf.Buffer;
          if (_0x478589) {
            _0x4b18cf._Buffer_from = _0x478589.from !== Uint8Array.from && _0x478589.from || function (_0x4bca6b, _0x5461c6) {
              return new _0x478589(_0x4bca6b, _0x5461c6);
            };
            _0x4b18cf._Buffer_allocUnsafe = _0x478589.allocUnsafe || function (_0x34079e) {
              return new _0x478589(_0x34079e);
            };
          } else {
            _0x4b18cf._Buffer_from = _0x4b18cf._Buffer_allocUnsafe = null;
          }
        };
        _0x217107.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          '@protobufjs/base64': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js",
          '@protobufjs/eventemitter': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js",
          '@protobufjs/float': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/@protobufjs/float/index.js',
          '@protobufjs/inquire': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js',
          '@protobufjs/utf8': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js",
          '@protobufjs/pool': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js",
          './longbits': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js"
        };
      });
      _0x46f592.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/writer.js', function (_0x2feb04, _0x2812f9, _0xae689c, _0x34fb97, _0x30e64f) {
        _0xae689c.exports = _0x328526;
        var _0x51c77c;
        var _0x8af0b7 = _0x2812f9('./util/minimal');
        var _0x250e85 = _0x8af0b7.LongBits;
        var _0x949fa6 = _0x8af0b7.base64;
        var _0xd5e5eb = _0x8af0b7.utf8;
        function _0x31458a(_0x263464, _0x2ba246, _0x480bac) {
          this.fn = _0x263464;
          this.len = _0x2ba246;
          this.next = undefined;
          this.val = _0x480bac;
        }
        function _0x1f7503() {}
        function _0x569fc2(_0x944d6a) {
          this.head = _0x944d6a.head;
          this.tail = _0x944d6a.tail;
          this.len = _0x944d6a.len;
          this.next = _0x944d6a.states;
        }
        function _0x328526() {
          this.len = 0x0;
          this.head = new _0x31458a(_0x1f7503, 0x0, 0x0);
          this.tail = this.head;
          this.states = null;
        }
        var _0x2fdf3e = function () {
          return _0x8af0b7.Buffer ? function () {
            return (_0x328526.create = function () {
              return new _0x51c77c();
            })();
          } : function () {
            return new _0x328526();
          };
        };
        function _0x1c3f1b(_0x26a7a7, _0x2ba40e, _0x45109a) {
          _0x2ba40e[_0x45109a] = 0xff & _0x26a7a7;
        }
        function _0x1b31b4(_0x5aa369, _0x1aecf8) {
          this.len = _0x5aa369;
          this.next = undefined;
          this.val = _0x1aecf8;
        }
        function _0x23153b(_0x28ec5a, _0x17bc50, _0x4dbaa8) {
          for (; _0x28ec5a.hi;) {
            _0x17bc50[_0x4dbaa8++] = 0x7f & _0x28ec5a.lo | 0x80;
            _0x28ec5a.lo = (_0x28ec5a.lo >>> 0x7 | _0x28ec5a.hi << 0x19) >>> 0x0;
            _0x28ec5a.hi >>>= 0x7;
          }
          for (; _0x28ec5a.lo > 0x7f;) {
            _0x17bc50[_0x4dbaa8++] = 0x7f & _0x28ec5a.lo | 0x80;
            _0x28ec5a.lo = _0x28ec5a.lo >>> 0x7;
          }
          _0x17bc50[_0x4dbaa8++] = _0x28ec5a.lo;
        }
        function _0x187cda(_0x2dd556, _0x2fdc9b, _0x2b8340) {
          _0x2fdc9b[_0x2b8340] = 0xff & _0x2dd556;
          _0x2fdc9b[_0x2b8340 + 0x1] = _0x2dd556 >>> 0x8 & 0xff;
          _0x2fdc9b[_0x2b8340 + 0x2] = _0x2dd556 >>> 0x10 & 0xff;
          _0x2fdc9b[_0x2b8340 + 0x3] = _0x2dd556 >>> 0x18;
        }
        _0x328526.create = _0x2fdf3e();
        _0x328526.alloc = function (_0x53c325) {
          return new _0x8af0b7.Array(_0x53c325);
        };
        if (_0x8af0b7.Array !== Array) {
          _0x328526.alloc = _0x8af0b7.pool(_0x328526.alloc, _0x8af0b7.Array.prototype.subarray);
        }
        _0x328526.prototype._push = function (_0x48e629, _0x43bd62, _0x4adfab) {
          this.tail = this.tail.next = new _0x31458a(_0x48e629, _0x43bd62, _0x4adfab);
          this.len += _0x43bd62;
          return this;
        };
        _0x1b31b4.prototype = Object.create(_0x31458a.prototype);
        _0x1b31b4.prototype.fn = function (_0x3e1cc4, _0x6f77e2, _0x5a4e00) {
          for (; _0x3e1cc4 > 0x7f;) {
            _0x6f77e2[_0x5a4e00++] = 0x7f & _0x3e1cc4 | 0x80;
            _0x3e1cc4 >>>= 0x7;
          }
          _0x6f77e2[_0x5a4e00] = _0x3e1cc4;
        };
        _0x328526.prototype.uint32 = function (_0x4c3eec) {
          this.len += (this.tail = this.tail.next = new _0x1b31b4((_0x4c3eec >>>= 0x0) < 0x80 ? 0x1 : _0x4c3eec < 0x4000 ? 0x2 : _0x4c3eec < 0x200000 ? 0x3 : _0x4c3eec < 0x10000000 ? 0x4 : 0x5, _0x4c3eec)).len;
          return this;
        };
        _0x328526.prototype.int32 = function (_0x272852) {
          return _0x272852 < 0x0 ? this._push(_0x23153b, 0xa, _0x250e85.fromNumber(_0x272852)) : this.uint32(_0x272852);
        };
        _0x328526.prototype.sint32 = function (_0x23b49a) {
          return this.uint32((_0x23b49a << 0x1 ^ _0x23b49a >> 0x1f) >>> 0x0);
        };
        _0x328526.prototype.uint64 = function (_0x5a33d4) {
          var _0x1ff471 = _0x250e85.from(_0x5a33d4);
          return this._push(_0x23153b, _0x1ff471.length(), _0x1ff471);
        };
        _0x328526.prototype.int64 = _0x328526.prototype.uint64;
        _0x328526.prototype.sint64 = function (_0x5abfac) {
          var _0x2f6cf2 = _0x250e85.from(_0x5abfac).zzEncode();
          return this._push(_0x23153b, _0x2f6cf2.length(), _0x2f6cf2);
        };
        _0x328526.prototype.bool = function (_0x411b73) {
          return this._push(_0x1c3f1b, 0x1, _0x411b73 ? 0x1 : 0x0);
        };
        _0x328526.prototype.fixed32 = function (_0x1d0eda) {
          return this._push(_0x187cda, 0x4, _0x1d0eda >>> 0x0);
        };
        _0x328526.prototype.sfixed32 = _0x328526.prototype.fixed32;
        _0x328526.prototype.fixed64 = function (_0x3e9764) {
          var _0x34d341 = _0x250e85.from(_0x3e9764);
          return this._push(_0x187cda, 0x4, _0x34d341.lo)._push(_0x187cda, 0x4, _0x34d341.hi);
        };
        _0x328526.prototype.sfixed64 = _0x328526.prototype.fixed64;
        _0x328526.prototype.float = function (_0x330c36) {
          return this._push(_0x8af0b7.float.writeFloatLE, 0x4, _0x330c36);
        };
        _0x328526.prototype.double = function (_0x1f1236) {
          return this._push(_0x8af0b7.float.writeDoubleLE, 0x8, _0x1f1236);
        };
        var _0x7f9b63 = _0x8af0b7.Array.prototype.set ? function (_0x3cb0fb, _0x1c5629, _0x29a4f3) {
          _0x1c5629.set(_0x3cb0fb, _0x29a4f3);
        } : function (_0x289277, _0x6c8cc2, _0x2aeed9) {
          for (var _0x201ef9 = 0x0; _0x201ef9 < _0x289277.length; ++_0x201ef9) {
            _0x6c8cc2[_0x2aeed9 + _0x201ef9] = _0x289277[_0x201ef9];
          }
        };
        _0x328526.prototype.bytes = function (_0x2b1444) {
          var _0x352d5e = _0x2b1444.length >>> 0x0;
          if (!_0x352d5e) {
            return this._push(_0x1c3f1b, 0x1, 0x0);
          }
          if (_0x8af0b7.isString(_0x2b1444)) {
            var _0x2cd80a = _0x328526.alloc(_0x352d5e = _0x949fa6.length(_0x2b1444));
            _0x949fa6.decode(_0x2b1444, _0x2cd80a, 0x0);
            _0x2b1444 = _0x2cd80a;
          }
          return this.uint32(_0x352d5e)._push(_0x7f9b63, _0x352d5e, _0x2b1444);
        };
        _0x328526.prototype.string = function (_0x427ddd) {
          var _0x409cb1 = _0xd5e5eb.length(_0x427ddd);
          return _0x409cb1 ? this.uint32(_0x409cb1)._push(_0xd5e5eb.write, _0x409cb1, _0x427ddd) : this._push(_0x1c3f1b, 0x1, 0x0);
        };
        _0x328526.prototype.fork = function () {
          this.states = new _0x569fc2(this);
          this.head = this.tail = new _0x31458a(_0x1f7503, 0x0, 0x0);
          this.len = 0x0;
          return this;
        };
        _0x328526.prototype.reset = function () {
          if (this.states) {
            this.head = this.states.head;
            this.tail = this.states.tail;
            this.len = this.states.len;
            this.states = this.states.next;
          } else {
            this.head = this.tail = new _0x31458a(_0x1f7503, 0x0, 0x0);
            this.len = 0x0;
          }
          return this;
        };
        _0x328526.prototype.ldelim = function () {
          var _0x20cf70 = this.head;
          var _0x5cadf7 = this.tail;
          var _0x4eb447 = this.len;
          this.reset().uint32(_0x4eb447);
          if (_0x4eb447) {
            this.tail.next = _0x20cf70.next;
            this.tail = _0x5cadf7;
            this.len += _0x4eb447;
          }
          return this;
        };
        _0x328526.prototype.finish = function () {
          var _0x31f94a = this.head.next;
          var _0x4bb5ca = this.constructor.alloc(this.len);
          for (var _0xccc2a9 = 0x0; _0x31f94a;) {
            _0x31f94a.fn(_0x31f94a.val, _0x4bb5ca, _0xccc2a9);
            _0xccc2a9 += _0x31f94a.len;
            _0x31f94a = _0x31f94a.next;
          }
          return _0x4bb5ca;
        };
        _0x328526._configure = function (_0x316433) {
          _0x51c77c = _0x316433;
          _0x328526.create = _0x2fdf3e();
          _0x51c77c._configure();
        };
        _0xae689c.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js", function (_0x32f007, _0x15e9f1, _0x332c02, _0x1a2679, _0x15ef60) {
        _0x332c02.exports = _0x1ec46f;
        var _0x2c9b4a = _0x15e9f1('./writer');
        (_0x1ec46f.prototype = Object.create(_0x2c9b4a.prototype)).constructor = _0x1ec46f;
        var _0x2c50f6 = _0x15e9f1('./util/minimal');
        function _0x1ec46f() {
          _0x2c9b4a.call(this);
        }
        function _0x252b16(_0x52ad39, _0x4d5e77, _0x3f2192) {
          if (_0x52ad39.length < 0x28) {
            _0x2c50f6.utf8.write(_0x52ad39, _0x4d5e77, _0x3f2192);
          } else if (_0x4d5e77.utf8Write) {
            _0x4d5e77.utf8Write(_0x52ad39, _0x3f2192);
          } else {
            _0x4d5e77.write(_0x52ad39, _0x3f2192);
          }
        }
        _0x1ec46f._configure = function () {
          _0x1ec46f.alloc = _0x2c50f6._Buffer_allocUnsafe;
          _0x1ec46f.writeBytesBuffer = _0x2c50f6.Buffer && _0x2c50f6.Buffer.prototype instanceof Uint8Array && "set" === _0x2c50f6.Buffer.prototype.set.name ? function (_0x2da33b, _0x7baf22, _0x441562) {
            _0x7baf22.set(_0x2da33b, _0x441562);
          } : function (_0x5c744a, _0x1c3ab1, _0x1e60df) {
            if (_0x5c744a.copy) {
              _0x5c744a.copy(_0x1c3ab1, _0x1e60df, 0x0, _0x5c744a.length);
            } else {
              for (var _0x538011 = 0x0; _0x538011 < _0x5c744a.length;) {
                _0x1c3ab1[_0x1e60df++] = _0x5c744a[_0x538011++];
              }
            }
          };
        };
        _0x1ec46f.prototype.bytes = function (_0x3a7487) {
          if (_0x2c50f6.isString(_0x3a7487)) {
            _0x3a7487 = _0x2c50f6._Buffer_from(_0x3a7487, "base64");
          }
          var _0x545c16 = _0x3a7487.length >>> 0x0;
          this.uint32(_0x545c16);
          if (_0x545c16) {
            this._push(_0x1ec46f.writeBytesBuffer, _0x545c16, _0x3a7487);
          }
          return this;
        };
        _0x1ec46f.prototype.string = function (_0x68f393) {
          var _0x39647f = _0x2c50f6.Buffer.byteLength(_0x68f393);
          this.uint32(_0x39647f);
          if (_0x39647f) {
            this._push(_0x252b16, _0x39647f, _0x68f393);
          }
          return this;
        };
        _0x1ec46f._configure();
        _0x332c02.exports;
      }, function () {
        return {
          './writer': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/writer.js',
          './util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/reader.js", function (_0x2bd96e, _0x268874, _0x5d9c8a, _0x1584e1, _0x590d48) {
        _0x5d9c8a.exports = _0x38acb8;
        var _0x517832;
        var _0x3f4d89 = _0x268874('./util/minimal');
        var _0x3a1770 = _0x3f4d89.LongBits;
        var _0x5af17c = _0x3f4d89.utf8;
        function _0x38acb8(_0x3fe8ba) {
          this.buf = _0x3fe8ba;
          this.pos = 0x0;
          this.len = _0x3fe8ba.length;
        }
        var _0x5e7e02;
        var _0x21b276 = "undefined" != typeof Uint8Array ? function (_0x82f216) {
          if (_0x82f216 instanceof Uint8Array || Array.isArray(_0x82f216)) {
            return new _0x38acb8(_0x82f216);
          }
          throw Error("illegal buffer");
        } : function (_0x2b0a03) {
          if (Array.isArray(_0x2b0a03)) {
            return new _0x38acb8(_0x2b0a03);
          }
          throw Error("illegal buffer");
        };
        var _0x1f4300 = function () {
          return _0x3f4d89.Buffer ? function (_0x5377c8) {
            return (_0x38acb8.create = function (_0x1699e3) {
              return _0x3f4d89.Buffer.isBuffer(_0x1699e3) ? new _0x517832(_0x1699e3) : _0x21b276(_0x1699e3);
            })(_0x5377c8);
          } : _0x21b276;
        };
        function _0x44a769() {
          var _0x41ca56 = new _0x3a1770(0x0, 0x0);
          var _0x2b217d = 0x0;
          if (!(this.len - this.pos > 0x4)) {
            for (; _0x2b217d < 0x3; ++_0x2b217d) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0x41ca56.lo = (_0x41ca56.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0x2b217d) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x41ca56;
              }
            }
            _0x41ca56.lo = (_0x41ca56.lo | (0x7f & this.buf[this.pos++]) << 0x7 * _0x2b217d) >>> 0x0;
            return _0x41ca56;
          }
          for (; _0x2b217d < 0x4; ++_0x2b217d) {
            _0x41ca56.lo = (_0x41ca56.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0x2b217d) >>> 0x0;
            if (this.buf[this.pos++] < 0x80) {
              return _0x41ca56;
            }
          }
          _0x41ca56.lo = (_0x41ca56.lo | (0x7f & this.buf[this.pos]) << 0x1c) >>> 0x0;
          _0x41ca56.hi = (_0x41ca56.hi | (0x7f & this.buf[this.pos]) >> 0x4) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x41ca56;
          }
          _0x2b217d = 0x0;
          if (this.len - this.pos > 0x4) {
            for (; _0x2b217d < 0x5; ++_0x2b217d) {
              _0x41ca56.hi = (_0x41ca56.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0x2b217d + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x41ca56;
              }
            }
          } else {
            for (; _0x2b217d < 0x5; ++_0x2b217d) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0x41ca56.hi = (_0x41ca56.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0x2b217d + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x41ca56;
              }
            }
          }
          throw Error("invalid varint encoding");
        }
        function _0x5d3ac9() {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x8 || 0x1) + " > " + this.len);
          }
          return new _0x3a1770((this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0, (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0);
        }
        _0x38acb8.create = _0x1f4300();
        _0x38acb8.prototype._slice = _0x3f4d89.Array.prototype.subarray || _0x3f4d89.Array.prototype.slice;
        _0x5e7e02 = 0xffffffff;
        _0x38acb8.prototype.uint32 = function () {
          _0x5e7e02 = (0x7f & this.buf[this.pos]) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x5e7e02;
          }
          _0x5e7e02 = (_0x5e7e02 | (0x7f & this.buf[this.pos]) << 0x7) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x5e7e02;
          }
          _0x5e7e02 = (_0x5e7e02 | (0x7f & this.buf[this.pos]) << 0xe) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x5e7e02;
          }
          _0x5e7e02 = (_0x5e7e02 | (0x7f & this.buf[this.pos]) << 0x15) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x5e7e02;
          }
          _0x5e7e02 = (_0x5e7e02 | (0xf & this.buf[this.pos]) << 0x1c) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x5e7e02;
          }
          if ((this.pos += 0x5) > this.len) {
            this.pos = this.len;
            throw RangeError("index out of range: " + this.pos + " + " + (0xa || 0x1) + " > " + this.len);
          }
          return _0x5e7e02;
        };
        _0x38acb8.prototype.int32 = function () {
          return 0x0 | this.uint32();
        };
        _0x38acb8.prototype.sint32 = function () {
          var _0xa49ee6 = this.uint32();
          return _0xa49ee6 >>> 0x1 ^ -(0x1 & _0xa49ee6) | 0x0;
        };
        _0x38acb8.prototype.bool = function () {
          return 0x0 !== this.uint32();
        };
        _0x38acb8.prototype.fixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0x38acb8.prototype.sfixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return 0x0 | (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0x38acb8.prototype.float = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x4ae029 = _0x3f4d89.float.readFloatLE(this.buf, this.pos);
          this.pos += 0x4;
          return _0x4ae029;
        };
        _0x38acb8.prototype.double = function () {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x45a30c = _0x3f4d89.float.readDoubleLE(this.buf, this.pos);
          this.pos += 0x8;
          return _0x45a30c;
        };
        _0x38acb8.prototype.bytes = function () {
          var _0x3d95af = this.uint32();
          var _0x1d12b1 = this.pos;
          var _0x19f382 = this.pos + _0x3d95af;
          if (_0x19f382 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (_0x3d95af || 0x1) + " > " + this.len);
          }
          this.pos += _0x3d95af;
          return Array.isArray(this.buf) ? this.buf.slice(_0x1d12b1, _0x19f382) : _0x1d12b1 === _0x19f382 ? new this.buf.constructor(0x0) : this._slice.call(this.buf, _0x1d12b1, _0x19f382);
        };
        _0x38acb8.prototype.string = function () {
          var _0x5e64de = this.bytes();
          return _0x5af17c.read(_0x5e64de, 0x0, _0x5e64de.length);
        };
        _0x38acb8.prototype.skip = function (_0x4efb94) {
          if ('number' == typeof _0x4efb94) {
            if (this.pos + _0x4efb94 > this.len) {
              throw RangeError("index out of range: " + this.pos + " + " + (_0x4efb94 || 0x1) + " > " + this.len);
            }
            this.pos += _0x4efb94;
          } else {
            do {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
            } while (0x80 & this.buf[this.pos++]);
          }
          return this;
        };
        _0x38acb8.prototype.skipType = function (_0x143c47) {
          switch (_0x143c47) {
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
              for (; 0x4 != (_0x143c47 = 0x7 & this.uint32());) {
                this.skipType(_0x143c47);
              }
              break;
            case 0x5:
              this.skip(0x4);
              break;
            default:
              throw Error("invalid wire type " + _0x143c47 + " at offset " + this.pos);
          }
          return this;
        };
        _0x38acb8._configure = function (_0x5e1e81) {
          _0x517832 = _0x5e1e81;
          _0x38acb8.create = _0x1f4300();
          _0x517832._configure();
          var _0x32ac2e = _0x3f4d89.Long ? "toLong" : "toNumber";
          _0x3f4d89.merge(_0x38acb8.prototype, {
            'int64': function () {
              return _0x44a769.call(this)[_0x32ac2e](false);
            },
            'uint64': function () {
              return _0x44a769.call(this)[_0x32ac2e](true);
            },
            'sint64': function () {
              return _0x44a769.call(this).zzDecode()[_0x32ac2e](false);
            },
            'fixed64': function () {
              return _0x5d3ac9.call(this)[_0x32ac2e](true);
            },
            'sfixed64': function () {
              return _0x5d3ac9.call(this)[_0x32ac2e](false);
            }
          });
        };
        _0x5d9c8a.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js", function (_0x1388b6, _0x50fb53, _0x4940f3, _0x22715a, _0x358a3b) {
        _0x4940f3.exports = _0x3c2520;
        var _0x39407f = _0x50fb53("./reader");
        (_0x3c2520.prototype = Object.create(_0x39407f.prototype)).constructor = _0x3c2520;
        var _0x1bb786 = _0x50fb53("./util/minimal");
        function _0x3c2520(_0x2f520f) {
          _0x39407f.call(this, _0x2f520f);
        }
        _0x3c2520._configure = function () {
          if (_0x1bb786.Buffer) {
            _0x3c2520.prototype._slice = _0x1bb786.Buffer.prototype.slice;
          }
        };
        _0x3c2520.prototype.string = function () {
          var _0x17efdf = this.uint32();
          return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + _0x17efdf, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + _0x17efdf, this.len));
        };
        _0x3c2520._configure();
        _0x4940f3.exports;
      }, function () {
        return {
          './reader': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x46f592.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js', function (_0x1b16c4, _0x9dc2ad, _0x411876, _0x52f394, _0x36ddad) {
        _0x411876.exports = _0xd25747;
        var _0x3488cc = _0x9dc2ad('../util/minimal');
        function _0xd25747(_0x5dafaa, _0x172b30, _0x4869ae) {
          if ("function" != typeof _0x5dafaa) {
            throw TypeError("rpcImpl must be a function");
          }
          _0x3488cc.EventEmitter.call(this);
          this.rpcImpl = _0x5dafaa;
          this.requestDelimited = Boolean(_0x172b30);
          this.responseDelimited = Boolean(_0x4869ae);
        }
        (_0xd25747.prototype = Object.create(_0x3488cc.EventEmitter.prototype)).constructor = _0xd25747;
        _0xd25747.prototype.rpcCall = function _0x1d2ae2(_0x4e922a, _0x24a51c, _0x4192fc, _0x1f768e, _0x36cf5a) {
          if (!_0x1f768e) {
            throw TypeError("request must be specified");
          }
          var _0x530110 = this;
          if (!_0x36cf5a) {
            return _0x3488cc.asPromise(_0x1d2ae2, _0x530110, _0x4e922a, _0x24a51c, _0x4192fc, _0x1f768e);
          }
          if (_0x530110.rpcImpl) {
            try {
              return _0x530110.rpcImpl(_0x4e922a, _0x24a51c[_0x530110.requestDelimited ? "encodeDelimited" : "encode"](_0x1f768e).finish(), function (_0x4d3a01, _0x234f77) {
                if (_0x4d3a01) {
                  _0x530110.emit("error", _0x4d3a01, _0x4e922a);
                  return _0x36cf5a(_0x4d3a01);
                }
                if (null !== _0x234f77) {
                  if (!(_0x234f77 instanceof _0x4192fc)) {
                    try {
                      _0x234f77 = _0x4192fc[_0x530110.responseDelimited ? "decodeDelimited" : "decode"](_0x234f77);
                    } catch (_0xd97d24) {
                      _0x530110.emit("error", _0xd97d24, _0x4e922a);
                      return _0x36cf5a(_0xd97d24);
                    }
                  }
                  _0x530110.emit("data", _0x234f77, _0x4e922a);
                  return _0x36cf5a(null, _0x234f77);
                }
                _0x530110.end(true);
              });
            } catch (_0x5bf8e8) {
              _0x530110.emit('error', _0x5bf8e8, _0x4e922a);
              return void setTimeout(function () {
                _0x36cf5a(_0x5bf8e8);
              }, 0x0);
            }
          } else {
            setTimeout(function () {
              _0x36cf5a(Error("already ended"));
            }, 0x0);
          }
        };
        _0xd25747.prototype.end = function (_0x2a9120) {
          if (this.rpcImpl) {
            if (!_0x2a9120) {
              this.rpcImpl(null, null, null);
            }
            this.rpcImpl = null;
            this.emit("end").off();
          }
          return this;
        };
        _0x411876.exports;
      }, function () {
        return {
          '../util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x46f592.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js', function (_0x306aa5, _0x5599b6, _0x42d1ea, _0x180557, _0x2757cc) {
        _0x306aa5.Service = _0x5599b6("./rpc/service");
        _0x42d1ea.exports;
      }, function () {
        return {
          './rpc/service': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js'
        };
      });
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/roots.js", function (_0x2c5c06, _0x5bb506, _0x9dcf24, _0x594417, _0x6bd9d5) {
        _0x9dcf24.exports = {};
        _0x9dcf24.exports;
      }, {});
      _0x46f592.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js', function (_0x289f31, _0x498635, _0x3b9692, _0x157538, _0x7c3d75) {
        function _0x3dfa94() {
          _0x289f31.util._configure();
          _0x289f31.Writer._configure(_0x289f31.BufferWriter);
          _0x289f31.Reader._configure(_0x289f31.BufferReader);
        }
        _0x289f31.build = 'minimal';
        _0x289f31.Writer = _0x498635('./writer');
        _0x289f31.BufferWriter = _0x498635("./writer_buffer");
        _0x289f31.Reader = _0x498635("./reader");
        _0x289f31.BufferReader = _0x498635("./reader_buffer");
        _0x289f31.util = _0x498635('./util/minimal');
        _0x289f31.rpc = _0x498635('./rpc');
        _0x289f31.roots = _0x498635("./roots");
        _0x289f31.configure = _0x3dfa94;
        _0x3dfa94();
        _0x3b9692.exports;
      }, function () {
        return {
          './writer': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/writer.js',
          './writer_buffer': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js",
          './reader': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './reader_buffer': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js",
          './util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          './rpc': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js',
          './roots': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/roots.js"
        };
      });
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js", function (_0x2ffc14, _0x1cf2b5, _0x998e07, _0xee8b85, _0x236162) {
        function _0x1a3ccb(_0x5735da, _0x5c61fc) {
          if ("string" == typeof _0x5735da) {
            _0x5c61fc = _0x5735da;
            _0x5735da = undefined;
          }
          var _0x48c1dd = [];
          function _0x5246a9(_0x45b0c3) {
            if ("string" != typeof _0x45b0c3) {
              var _0x3281a8 = "function " + (undefined || _0x5c61fc || '') + '(' + (_0x5735da && _0x5735da.join(',') || '') + "){\n  " + _0x48c1dd.join("\n  ") + "\n}";
              if (_0x1a3ccb.verbose) {
                console.log("codegen: " + _0x3281a8);
              }
              _0x3281a8 = "return " + _0x3281a8;
              if (_0x45b0c3) {
                var _0x14f445 = Object.keys(_0x45b0c3);
                var _0x1839be = new Array(_0x14f445.length + 0x1);
                var _0x4230ae = new Array(_0x14f445.length);
                for (var _0x1ecfb = 0x0; _0x1ecfb < _0x14f445.length;) {
                  _0x1839be[_0x1ecfb] = _0x14f445[_0x1ecfb];
                  _0x4230ae[_0x1ecfb] = _0x45b0c3[_0x14f445[_0x1ecfb++]];
                }
                _0x1839be[_0x1ecfb] = _0x3281a8;
                return Function.apply(null, _0x1839be).apply(null, _0x4230ae);
              }
              return Function(_0x3281a8)();
            }
            var _0x2e27ea = new Array(arguments.length - 0x1);
            for (var _0x6c3b68 = 0x0; _0x6c3b68 < _0x2e27ea.length;) {
              _0x2e27ea[_0x6c3b68] = arguments[++_0x6c3b68];
            }
            _0x6c3b68 = 0x0;
            _0x45b0c3 = _0x45b0c3.replace(/%([%dfijs])/g, function (_0x287b63, _0x288ba2) {
              var _0x5e94af = _0x2e27ea[_0x6c3b68++];
              switch (_0x288ba2) {
                case 'd':
                case 'f':
                  return String(Number(_0x5e94af));
                case 'i':
                  return String(Math.floor(_0x5e94af));
                case 'j':
                  return JSON.stringify(_0x5e94af);
                case 's':
                  return String(_0x5e94af);
              }
              return '%';
            });
            if (_0x6c3b68 !== _0x2e27ea.length) {
              throw Error("parameter count mismatch");
            }
            _0x48c1dd.push(_0x45b0c3);
            return _0x5246a9;
          }
          function _0x4f2aa3(_0x1bbd7) {
            return "function " + (_0x1bbd7 || _0x5c61fc || '') + '(' + (_0x5735da && _0x5735da.join(',') || '') + "){\n  " + _0x48c1dd.join("\n  ") + "\n}";
          }
          _0x5246a9.toString = _0x4f2aa3;
          return _0x5246a9;
        }
        _0x998e07.exports = _0x1a3ccb;
        _0x1a3ccb.verbose = false;
        _0x998e07.exports;
      }, {});
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js", function (_0x30b6d9, _0x36d90f, _0x4f44af, _0x826349, _0x716616) {
        _0x4f44af.exports = _0x25356f;
        var _0x433e06 = _0x36d90f("@protobufjs/aspromise");
        var _0xe996d3 = _0x36d90f("@protobufjs/inquire")('fs');
        function _0x25356f(_0x5d7382, _0x31bca2, _0x57bc4d) {
          if ("function" == typeof _0x31bca2) {
            _0x57bc4d = _0x31bca2;
            _0x31bca2 = {};
          } else if (!_0x31bca2) {
            _0x31bca2 = {};
          }
          return _0x57bc4d ? !_0x31bca2.xhr && _0xe996d3 && _0xe996d3.readFile ? _0xe996d3.readFile(_0x5d7382, function (_0x20dfe5, _0x22a018) {
            return _0x20dfe5 && "undefined" != typeof XMLHttpRequest ? _0x25356f.xhr(_0x5d7382, _0x31bca2, _0x57bc4d) : _0x20dfe5 ? _0x57bc4d(_0x20dfe5) : _0x57bc4d(null, _0x31bca2.binary ? _0x22a018 : _0x22a018.toString('utf8'));
          }) : _0x25356f.xhr(_0x5d7382, _0x31bca2, _0x57bc4d) : _0x433e06(_0x25356f, this, _0x5d7382, _0x31bca2);
        }
        _0x25356f.xhr = function (_0x1bbcd1, _0x1fbadb, _0x41e5d0) {
          var _0xe078d9 = new XMLHttpRequest();
          _0xe078d9.onreadystatechange = function () {
            if (0x4 === _0xe078d9.readyState) {
              if (0x0 !== _0xe078d9.status && 0xc8 !== _0xe078d9.status) {
                return _0x41e5d0(Error("status " + _0xe078d9.status));
              }
              if (_0x1fbadb.binary) {
                var _0x4c77d3 = _0xe078d9.response;
                if (!_0x4c77d3) {
                  _0x4c77d3 = [];
                  for (var _0x7b210e = 0x0; _0x7b210e < _0xe078d9.responseText.length; ++_0x7b210e) {
                    _0x4c77d3.push(0xff & _0xe078d9.responseText.charCodeAt(_0x7b210e));
                  }
                }
                return _0x41e5d0(null, "undefined" != typeof Uint8Array ? new Uint8Array(_0x4c77d3) : _0x4c77d3);
              }
              return _0x41e5d0(null, _0xe078d9.responseText);
            }
          };
          if (_0x1fbadb.binary) {
            if ('overrideMimeType' in _0xe078d9) {
              _0xe078d9.overrideMimeType("text/plain; charset=x-user-defined");
            }
            _0xe078d9.responseType = 'arraybuffer';
          }
          _0xe078d9.open("GET", _0x1bbcd1);
          _0xe078d9.send();
        };
        _0x4f44af.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          '@protobufjs/inquire': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js'
        };
      });
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/@protobufjs/path/index.js", function (_0xb6bbe, _0x5f4fc2, _0x4555e0, _0x1a04c6, _0x3f7a65) {
        var _0x364417 = _0xb6bbe.isAbsolute = function (_0x3c705a) {
          return /^(?:\/|\w+:)/.test(_0x3c705a);
        };
        var _0x39c11c = _0xb6bbe.normalize = function (_0x4c87d2) {
          var _0x1aa598 = (_0x4c87d2 = _0x4c87d2.replace(/\\/g, '/').replace(/\/{2,}/g, '/')).split('/');
          var _0x5c7bb0 = _0x364417(_0x4c87d2);
          var _0x1eb5ff = '';
          if (_0x5c7bb0) {
            _0x1eb5ff = _0x1aa598.shift() + '/';
          }
          for (var _0x1b7fb8 = 0x0; _0x1b7fb8 < _0x1aa598.length;) {
            if ('..' === _0x1aa598[_0x1b7fb8]) {
              if (_0x1b7fb8 > 0x0 && '..' !== _0x1aa598[_0x1b7fb8 - 0x1]) {
                _0x1aa598.splice(--_0x1b7fb8, 0x2);
              } else if (_0x5c7bb0) {
                _0x1aa598.splice(_0x1b7fb8, 0x1);
              } else {
                ++_0x1b7fb8;
              }
            } else if ('.' === _0x1aa598[_0x1b7fb8]) {
              _0x1aa598.splice(_0x1b7fb8, 0x1);
            } else {
              ++_0x1b7fb8;
            }
          }
          return _0x1eb5ff + _0x1aa598.join('/');
        };
        _0xb6bbe.resolve = function (_0x428081, _0x382d2c, _0x42ff47) {
          if (!_0x42ff47) {
            _0x382d2c = _0x39c11c(_0x382d2c);
          }
          return _0x364417(_0x382d2c) ? _0x382d2c : (_0x42ff47 || (_0x428081 = _0x39c11c(_0x428081)), (_0x428081 = _0x428081.replace(/(?:\/|^)[^/]+$/, '')).length ? _0x39c11c(_0x428081 + '/' + _0x382d2c) : _0x382d2c);
        };
        _0x4555e0.exports;
      }, {});
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/types.js", function (_0xb322fb, _0x34fc55, _0x5bad1d, _0x513286, _0x5e9ae0) {
        var _0x4faee2 = _0x34fc55('./util');
        var _0x148046 = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];
        function _0xf95886(_0x27ec37, _0x469027) {
          var _0x177d28 = 0x0;
          var _0x473e8d = {};
          for (_0x469027 |= 0x0; _0x177d28 < _0x27ec37.length;) {
            _0x473e8d[_0x148046[_0x177d28 + _0x469027]] = _0x27ec37[_0x177d28++];
          }
          return _0x473e8d;
        }
        _0xb322fb.basic = _0xf95886([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2, 0x2]);
        _0xb322fb.defaults = _0xf95886([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, false, '', _0x4faee2.emptyArray, null]);
        _0xb322fb.long = _0xf95886([0x0, 0x0, 0x0, 0x1, 0x1], 0x7);
        _0xb322fb.mapKey = _0xf95886([0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2], 0x2);
        _0xb322fb.packed = _0xf95886([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0]);
        _0x5bad1d.exports;
      }, function () {
        return {
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/field.js", function (_0x399e23, _0x399012, _0x36823a, _0x86cfc0, _0x56b4ba) {
        _0x36823a.exports = _0x40c4c0;
        var _0x552a8b = _0x399012("./object");
        ((_0x40c4c0.prototype = Object.create(_0x552a8b.prototype)).constructor = _0x40c4c0).className = 'Field';
        var _0x573207;
        var _0x128d36 = _0x399012("./enum");
        var _0x50419c = _0x399012("./types");
        var _0x416932 = _0x399012('./util');
        var _0x30f387 = /^required|optional|repeated$/;
        function _0x40c4c0(_0x49fd12, _0x593eb9, _0x19d02a, _0x2512d9, _0x4dcfbb, _0x1faf05, _0x46ed9d) {
          if (_0x416932.isObject(_0x2512d9)) {
            _0x46ed9d = _0x4dcfbb;
            _0x1faf05 = _0x2512d9;
            _0x2512d9 = _0x4dcfbb = undefined;
          } else if (_0x416932.isObject(_0x4dcfbb)) {
            _0x46ed9d = _0x1faf05;
            _0x1faf05 = _0x4dcfbb;
            _0x4dcfbb = undefined;
          }
          _0x552a8b.call(this, _0x49fd12, _0x1faf05);
          if (!_0x416932.isInteger(_0x593eb9) || _0x593eb9 < 0x0) {
            throw TypeError("id must be a non-negative integer");
          }
          if (!_0x416932.isString(_0x19d02a)) {
            throw TypeError("type must be a string");
          }
          if (undefined !== _0x2512d9 && !_0x30f387.test(_0x2512d9 = _0x2512d9.toString().toLowerCase())) {
            throw TypeError("rule must be a string rule");
          }
          if (undefined !== _0x4dcfbb && !_0x416932.isString(_0x4dcfbb)) {
            throw TypeError("extend must be a string");
          }
          if ("proto3_optional" === _0x2512d9) {
            _0x2512d9 = "optional";
          }
          this.rule = _0x2512d9 && "optional" !== _0x2512d9 ? _0x2512d9 : undefined;
          this.type = _0x19d02a;
          this.id = _0x593eb9;
          this.extend = _0x4dcfbb || undefined;
          this.required = "required" === _0x2512d9;
          this.optional = !this.required;
          this.repeated = "repeated" === _0x2512d9;
          this.map = false;
          this.message = null;
          this.partOf = null;
          this.typeDefault = null;
          this.defaultValue = null;
          this.long = !!_0x416932.Long && undefined !== _0x50419c.long[_0x19d02a];
          this.bytes = "bytes" === _0x19d02a;
          this.resolvedType = null;
          this.extensionField = null;
          this.declaringField = null;
          this._packed = null;
          this.comment = _0x46ed9d;
        }
        _0x40c4c0.fromJSON = function (_0x23dc63, _0x361a15) {
          return new _0x40c4c0(_0x23dc63, _0x361a15.id, _0x361a15.type, _0x361a15.rule, _0x361a15.extend, _0x361a15.options, _0x361a15.comment);
        };
        Object.defineProperty(_0x40c4c0.prototype, "packed", {
          'get': function () {
            if (null === this._packed) {
              this._packed = false !== this.getOption("packed");
            }
            return this._packed;
          }
        });
        _0x40c4c0.prototype.setOption = function (_0x89042d, _0x519626, _0x477e1c) {
          if ('packed' === _0x89042d) {
            this._packed = null;
          }
          return _0x552a8b.prototype.setOption.call(this, _0x89042d, _0x519626, _0x477e1c);
        };
        _0x40c4c0.prototype.toJSON = function (_0x15522e) {
          var _0x34d15c = !!_0x15522e && Boolean(_0x15522e.keepComments);
          return _0x416932.toObject(["rule", "optional" !== this.rule && this.rule || undefined, "type", this.type, 'id', this.id, "extend", this.extend, "options", this.options, 'comment', _0x34d15c ? this.comment : undefined]);
        };
        _0x40c4c0.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === (this.typeDefault = _0x50419c.defaults[this.type])) {
            this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
            if (this.resolvedType instanceof _0x573207) {
              this.typeDefault = null;
            } else {
              this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0x0]];
            }
          }
          if (this.options && null != this.options["default"]) {
            this.typeDefault = this.options['default'];
            if (this.resolvedType instanceof _0x128d36 && "string" == typeof this.typeDefault) {
              this.typeDefault = this.resolvedType.values[this.typeDefault];
            }
          }
          if (this.options) {
            if (!(true !== this.options.packed && (undefined === this.options.packed || !this.resolvedType || this.resolvedType instanceof _0x128d36))) {
              delete this.options.packed;
            }
            if (!Object.keys(this.options).length) {
              this.options = undefined;
            }
          }
          if (this.long) {
            this.typeDefault = _0x416932.Long.fromNumber(this.typeDefault, 'u' === this.type.charAt(0x0));
            if (Object.freeze) {
              Object.freeze(this.typeDefault);
            }
          } else {
            if (this.bytes && "string" == typeof this.typeDefault) {
              var _0x5e2a54;
              if (_0x416932.base64.test(this.typeDefault)) {
                _0x416932.base64.decode(this.typeDefault, _0x5e2a54 = _0x416932.newBuffer(_0x416932.base64.length(this.typeDefault)), 0x0);
              } else {
                _0x416932.utf8.write(this.typeDefault, _0x5e2a54 = _0x416932.newBuffer(_0x416932.utf8.length(this.typeDefault)), 0x0);
              }
              this.typeDefault = _0x5e2a54;
            }
          }
          if (this.map) {
            this.defaultValue = _0x416932.emptyObject;
          } else if (this.repeated) {
            this.defaultValue = _0x416932.emptyArray;
          } else {
            this.defaultValue = this.typeDefault;
          }
          if (this.parent instanceof _0x573207) {
            this.parent.ctor.prototype[this.name] = this.defaultValue;
          }
          return _0x552a8b.prototype.resolve.call(this);
        };
        _0x40c4c0.d = function (_0x554539, _0x1ed207, _0x3cf40e, _0x43de4e) {
          if ("function" == typeof _0x1ed207) {
            _0x1ed207 = _0x416932.decorateType(_0x1ed207).name;
          } else if (_0x1ed207 && "object" == typeof _0x1ed207) {
            _0x1ed207 = _0x416932.decorateEnum(_0x1ed207).name;
          }
          return function (_0x114292, _0x57a93c) {
            _0x416932.decorateType(_0x114292.constructor).add(new _0x40c4c0(_0x57a93c, _0x554539, _0x1ed207, _0x3cf40e, {
              'default': _0x43de4e
            }));
          };
        };
        _0x40c4c0._configure = function (_0x26356b) {
          _0x573207 = _0x26356b;
        };
        _0x36823a.exports;
      }, function () {
        return {
          './object': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/object.js',
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js", function (_0x31576b, _0x11b8aa, _0x1acece, _0x321073, _0x16fb15) {
        _0x1acece.exports = _0x418abd;
        var _0x3f1be7 = _0x11b8aa("./object");
        ((_0x418abd.prototype = Object.create(_0x3f1be7.prototype)).constructor = _0x418abd).className = "OneOf";
        var _0x38eb85 = _0x11b8aa("./field");
        var _0x5e90d7 = _0x11b8aa("./util");
        function _0x418abd(_0x4e37f8, _0x13fe91, _0x2e5a60, _0x4ebde3) {
          if (!Array.isArray(_0x13fe91)) {
            _0x2e5a60 = _0x13fe91;
            _0x13fe91 = undefined;
          }
          _0x3f1be7.call(this, _0x4e37f8, _0x2e5a60);
          if (undefined !== _0x13fe91 && !Array.isArray(_0x13fe91)) {
            throw TypeError("fieldNames must be an Array");
          }
          this.oneof = _0x13fe91 || [];
          this.fieldsArray = [];
          this.comment = _0x4ebde3;
        }
        function _0x11c47e(_0x2e974b) {
          if (_0x2e974b.parent) {
            for (var _0x2b72f7 = 0x0; _0x2b72f7 < _0x2e974b.fieldsArray.length; ++_0x2b72f7) {
              if (!_0x2e974b.fieldsArray[_0x2b72f7].parent) {
                _0x2e974b.parent.add(_0x2e974b.fieldsArray[_0x2b72f7]);
              }
            }
          }
        }
        _0x418abd.fromJSON = function (_0x9d2885, _0x8aec56) {
          return new _0x418abd(_0x9d2885, _0x8aec56.oneof, _0x8aec56.options, _0x8aec56.comment);
        };
        _0x418abd.prototype.toJSON = function (_0x480ac2) {
          var _0x3c867d = !!_0x480ac2 && Boolean(_0x480ac2.keepComments);
          return _0x5e90d7.toObject(["options", this.options, "oneof", this.oneof, "comment", _0x3c867d ? this.comment : undefined]);
        };
        _0x418abd.prototype.add = function (_0x30100c) {
          if (!(_0x30100c instanceof _0x38eb85)) {
            throw TypeError("field must be a Field");
          }
          if (_0x30100c.parent && _0x30100c.parent !== this.parent) {
            _0x30100c.parent.remove(_0x30100c);
          }
          this.oneof.push(_0x30100c.name);
          this.fieldsArray.push(_0x30100c);
          _0x30100c.partOf = this;
          _0x11c47e(this);
          return this;
        };
        _0x418abd.prototype.remove = function (_0x546c0f) {
          if (!(_0x546c0f instanceof _0x38eb85)) {
            throw TypeError("field must be a Field");
          }
          var _0x574530 = this.fieldsArray.indexOf(_0x546c0f);
          if (_0x574530 < 0x0) {
            throw Error(_0x546c0f + " is not a member of " + this);
          }
          this.fieldsArray.splice(_0x574530, 0x1);
          if ((_0x574530 = this.oneof.indexOf(_0x546c0f.name)) > -0x1) {
            this.oneof.splice(_0x574530, 0x1);
          }
          _0x546c0f.partOf = null;
          return this;
        };
        _0x418abd.prototype.onAdd = function (_0x750790) {
          _0x3f1be7.prototype.onAdd.call(this, _0x750790);
          for (var _0x589987 = 0x0; _0x589987 < this.oneof.length; ++_0x589987) {
            var _0x36701f = _0x750790.get(this.oneof[_0x589987]);
            if (_0x36701f && !_0x36701f.partOf) {
              _0x36701f.partOf = this;
              this.fieldsArray.push(_0x36701f);
            }
          }
          _0x11c47e(this);
        };
        _0x418abd.prototype.onRemove = function (_0x4494e6) {
          var _0xb037b7;
          for (var _0x3fcefb = 0x0; _0x3fcefb < this.fieldsArray.length; ++_0x3fcefb) {
            if ((_0xb037b7 = this.fieldsArray[_0x3fcefb]).parent) {
              _0xb037b7.parent.remove(_0xb037b7);
            }
          }
          _0x3f1be7.prototype.onRemove.call(this, _0x4494e6);
        };
        _0x418abd.d = function () {
          var _0x165b1c = new Array(arguments.length);
          for (var _0x1e9286 = 0x0; _0x1e9286 < arguments.length;) {
            _0x165b1c[_0x1e9286] = arguments[_0x1e9286++];
          }
          return function (_0x44c03a, _0x352092) {
            _0x5e90d7.decorateType(_0x44c03a.constructor).add(new _0x418abd(_0x352092, _0x165b1c));
            Object.defineProperty(_0x44c03a, _0x352092, {
              'get': _0x5e90d7.oneOfGetter(_0x165b1c),
              'set': _0x5e90d7.oneOfSetter(_0x165b1c)
            });
          };
        };
        _0x1acece.exports;
      }, function () {
        return {
          './object': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/object.js',
          './field': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js", function (_0x677600, _0x2f75be, _0x59b7de, _0x4af927, _0x46e221) {
        _0x59b7de.exports = _0x11865f;
        var _0x441f6b = _0x2f75be("./object");
        ((_0x11865f.prototype = Object.create(_0x441f6b.prototype)).constructor = _0x11865f).className = "Namespace";
        var _0x286cd7;
        var _0x50aab6;
        var _0x1f846e;
        var _0x5e45c0 = _0x2f75be("./field");
        var _0x562103 = _0x2f75be("./oneof");
        var _0x5ba845 = _0x2f75be('./util');
        function _0x4b6e6(_0x184c77, _0x4c9421) {
          if (_0x184c77 && _0x184c77.length) {
            var _0x1e84d3 = {};
            for (var _0x588060 = 0x0; _0x588060 < _0x184c77.length; ++_0x588060) {
              _0x1e84d3[_0x184c77[_0x588060].name] = _0x184c77[_0x588060].toJSON(_0x4c9421);
            }
            return _0x1e84d3;
          }
        }
        function _0x11865f(_0x6d3b54, _0x15bed9) {
          _0x441f6b.call(this, _0x6d3b54, _0x15bed9);
          this.nested = undefined;
          this._nestedArray = null;
        }
        function _0x2826c6(_0x4f75b1) {
          _0x4f75b1._nestedArray = null;
          return _0x4f75b1;
        }
        _0x11865f.fromJSON = function (_0x2e7fb1, _0x37d252) {
          return new _0x11865f(_0x2e7fb1, _0x37d252.options).addJSON(_0x37d252.nested);
        };
        _0x11865f.arrayToJSON = _0x4b6e6;
        _0x11865f.isReservedId = function (_0x54c7e0, _0x163da4) {
          if (_0x54c7e0) {
            for (var _0x1d603d = 0x0; _0x1d603d < _0x54c7e0.length; ++_0x1d603d) {
              if ("string" != typeof _0x54c7e0[_0x1d603d] && _0x54c7e0[_0x1d603d][0x0] <= _0x163da4 && _0x54c7e0[_0x1d603d][0x1] > _0x163da4) {
                return true;
              }
            }
          }
          return false;
        };
        _0x11865f.isReservedName = function (_0x5f4c1b, _0x1a753c) {
          if (_0x5f4c1b) {
            for (var _0x43e323 = 0x0; _0x43e323 < _0x5f4c1b.length; ++_0x43e323) {
              if (_0x5f4c1b[_0x43e323] === _0x1a753c) {
                return true;
              }
            }
          }
          return false;
        };
        Object.defineProperty(_0x11865f.prototype, "nestedArray", {
          'get': function () {
            return this._nestedArray || (this._nestedArray = _0x5ba845.toArray(this.nested));
          }
        });
        _0x11865f.prototype.toJSON = function (_0x2ce73d) {
          return _0x5ba845.toObject(['options', this.options, "nested", _0x4b6e6(this.nestedArray, _0x2ce73d)]);
        };
        _0x11865f.prototype.addJSON = function (_0x5b5d45) {
          if (_0x5b5d45) {
            var _0x2031c5;
            var _0x5b055f = Object.keys(_0x5b5d45);
            for (var _0x2c26f4 = 0x0; _0x2c26f4 < _0x5b055f.length; ++_0x2c26f4) {
              _0x2031c5 = _0x5b5d45[_0x5b055f[_0x2c26f4]];
              this.add((undefined !== _0x2031c5.fields ? _0x286cd7.fromJSON : undefined !== _0x2031c5.values ? _0x1f846e.fromJSON : undefined !== _0x2031c5.methods ? _0x50aab6.fromJSON : undefined !== _0x2031c5.id ? _0x5e45c0.fromJSON : _0x11865f.fromJSON)(_0x5b055f[_0x2c26f4], _0x2031c5));
            }
          }
          return this;
        };
        _0x11865f.prototype.get = function (_0x22718b) {
          return this.nested && this.nested[_0x22718b] || null;
        };
        _0x11865f.prototype.getEnum = function (_0x41f2c9) {
          if (this.nested && this.nested[_0x41f2c9] instanceof _0x1f846e) {
            return this.nested[_0x41f2c9].values;
          }
          throw Error("no such enum: " + _0x41f2c9);
        };
        _0x11865f.prototype.add = function (_0x15a341) {
          if (!(_0x15a341 instanceof _0x5e45c0 && undefined !== _0x15a341.extend || _0x15a341 instanceof _0x286cd7 || _0x15a341 instanceof _0x1f846e || _0x15a341 instanceof _0x50aab6 || _0x15a341 instanceof _0x11865f || _0x15a341 instanceof _0x562103)) {
            throw TypeError("object must be a valid nested object");
          }
          if (this.nested) {
            var _0x281c9f = this.get(_0x15a341.name);
            if (_0x281c9f) {
              if (!(_0x281c9f instanceof _0x11865f && _0x15a341 instanceof _0x11865f) || _0x281c9f instanceof _0x286cd7 || _0x281c9f instanceof _0x50aab6) {
                throw Error("duplicate name '" + _0x15a341.name + "' in " + this);
              }
              var _0x1e6b31 = _0x281c9f.nestedArray;
              for (var _0x559da7 = 0x0; _0x559da7 < _0x1e6b31.length; ++_0x559da7) {
                _0x15a341.add(_0x1e6b31[_0x559da7]);
              }
              this.remove(_0x281c9f);
              if (!this.nested) {
                this.nested = {};
              }
              _0x15a341.setOptions(_0x281c9f.options, true);
            }
          } else {
            this.nested = {};
          }
          this.nested[_0x15a341.name] = _0x15a341;
          _0x15a341.onAdd(this);
          return _0x2826c6(this);
        };
        _0x11865f.prototype.remove = function (_0x35f690) {
          if (!(_0x35f690 instanceof _0x441f6b)) {
            throw TypeError("object must be a ReflectionObject");
          }
          if (_0x35f690.parent !== this) {
            throw Error(_0x35f690 + " is not a member of " + this);
          }
          delete this.nested[_0x35f690.name];
          if (!Object.keys(this.nested).length) {
            this.nested = undefined;
          }
          _0x35f690.onRemove(this);
          return _0x2826c6(this);
        };
        _0x11865f.prototype.define = function (_0x394268, _0x49e26a) {
          if (_0x5ba845.isString(_0x394268)) {
            _0x394268 = _0x394268.split('.');
          } else {
            if (!Array.isArray(_0x394268)) {
              throw TypeError("illegal path");
            }
          }
          if (_0x394268 && _0x394268.length && '' === _0x394268[0x0]) {
            throw Error("path must be relative");
          }
          for (var _0x3a5355 = this; _0x394268.length > 0x0;) {
            var _0x862c31 = _0x394268.shift();
            if (_0x3a5355.nested && _0x3a5355.nested[_0x862c31]) {
              if (!((_0x3a5355 = _0x3a5355.nested[_0x862c31]) instanceof _0x11865f)) {
                throw Error("path conflicts with non-namespace objects");
              }
            } else {
              _0x3a5355.add(_0x3a5355 = new _0x11865f(_0x862c31));
            }
          }
          if (_0x49e26a) {
            _0x3a5355.addJSON(_0x49e26a);
          }
          return _0x3a5355;
        };
        _0x11865f.prototype.resolveAll = function () {
          var _0x6a34d7 = this.nestedArray;
          for (var _0x30cae8 = 0x0; _0x30cae8 < _0x6a34d7.length;) {
            if (_0x6a34d7[_0x30cae8] instanceof _0x11865f) {
              _0x6a34d7[_0x30cae8++].resolveAll();
            } else {
              _0x6a34d7[_0x30cae8++].resolve();
            }
          }
          return this.resolve();
        };
        _0x11865f.prototype.lookup = function (_0x59c269, _0x5c3426, _0x1b5e7e) {
          if ("boolean" == typeof _0x5c3426) {
            _0x1b5e7e = _0x5c3426;
            _0x5c3426 = undefined;
          } else if (_0x5c3426 && !Array.isArray(_0x5c3426)) {
            _0x5c3426 = [_0x5c3426];
          }
          if (_0x5ba845.isString(_0x59c269) && _0x59c269.length) {
            if ('.' === _0x59c269) {
              return this.root;
            }
            _0x59c269 = _0x59c269.split('.');
          } else {
            if (!_0x59c269.length) {
              return this;
            }
          }
          if ('' === _0x59c269[0x0]) {
            return this.root.lookup(_0x59c269.slice(0x1), _0x5c3426);
          }
          var _0x451a19 = this.get(_0x59c269[0x0]);
          if (_0x451a19) {
            if (0x1 === _0x59c269.length) {
              if (!_0x5c3426 || _0x5c3426.indexOf(_0x451a19.constructor) > -0x1) {
                return _0x451a19;
              }
            } else {
              if (_0x451a19 instanceof _0x11865f && (_0x451a19 = _0x451a19.lookup(_0x59c269.slice(0x1), _0x5c3426, true))) {
                return _0x451a19;
              }
            }
          } else {
            for (var _0x2141d8 = 0x0; _0x2141d8 < this.nestedArray.length; ++_0x2141d8) {
              if (this._nestedArray[_0x2141d8] instanceof _0x11865f && (_0x451a19 = this._nestedArray[_0x2141d8].lookup(_0x59c269, _0x5c3426, true))) {
                return _0x451a19;
              }
            }
          }
          return null === this.parent || _0x1b5e7e ? null : this.parent.lookup(_0x59c269, _0x5c3426);
        };
        _0x11865f.prototype.lookupType = function (_0x42cf5b) {
          var _0x49da09 = this.lookup(_0x42cf5b, [_0x286cd7]);
          if (!_0x49da09) {
            throw Error("no such type: " + _0x42cf5b);
          }
          return _0x49da09;
        };
        _0x11865f.prototype.lookupEnum = function (_0x55bf6c) {
          var _0x52c086 = this.lookup(_0x55bf6c, [_0x1f846e]);
          if (!_0x52c086) {
            throw Error("no such Enum '" + _0x55bf6c + "' in " + this);
          }
          return _0x52c086;
        };
        _0x11865f.prototype.lookupTypeOrEnum = function (_0x1036ab) {
          var _0x1a361e = this.lookup(_0x1036ab, [_0x286cd7, _0x1f846e]);
          if (!_0x1a361e) {
            throw Error("no such Type or Enum '" + _0x1036ab + "' in " + this);
          }
          return _0x1a361e;
        };
        _0x11865f.prototype.lookupService = function (_0x1a5f1a) {
          var _0x15d395 = this.lookup(_0x1a5f1a, [_0x50aab6]);
          if (!_0x15d395) {
            throw Error("no such Service '" + _0x1a5f1a + "' in " + this);
          }
          return _0x15d395;
        };
        _0x11865f._configure = function (_0x317b5e, _0x2e3e26, _0x195249) {
          _0x286cd7 = _0x317b5e;
          _0x50aab6 = _0x2e3e26;
          _0x1f846e = _0x195249;
        };
        _0x59b7de.exports;
      }, function () {
        return {
          './object': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/object.js',
          './field': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './oneof': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js", function (_0x3cef6e, _0x3aa1cf, _0x9beb17, _0x41dacd, _0x3ceb2c) {
        _0x9beb17.exports = _0x39f752;
        var _0x30abb9 = _0x3aa1cf("./field");
        ((_0x39f752.prototype = Object.create(_0x30abb9.prototype)).constructor = _0x39f752).className = 'MapField';
        var _0x2ea473 = _0x3aa1cf('./types');
        var _0x139722 = _0x3aa1cf("./util");
        function _0x39f752(_0x32857b, _0x1e8413, _0x4512a3, _0x1f25d3, _0x450cd0, _0x530508) {
          _0x30abb9.call(this, _0x32857b, _0x1e8413, _0x1f25d3, undefined, undefined, _0x450cd0, _0x530508);
          if (!_0x139722.isString(_0x4512a3)) {
            throw TypeError("keyType must be a string");
          }
          this.keyType = _0x4512a3;
          this.resolvedKeyType = null;
          this.map = true;
        }
        _0x39f752.fromJSON = function (_0x1943a5, _0x2be568) {
          return new _0x39f752(_0x1943a5, _0x2be568.id, _0x2be568.keyType, _0x2be568.type, _0x2be568.options, _0x2be568.comment);
        };
        _0x39f752.prototype.toJSON = function (_0x147c9c) {
          var _0x484941 = !!_0x147c9c && Boolean(_0x147c9c.keepComments);
          return _0x139722.toObject(['keyType', this.keyType, "type", this.type, 'id', this.id, 'extend', this.extend, "options", this.options, 'comment', _0x484941 ? this.comment : undefined]);
        };
        _0x39f752.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === _0x2ea473.mapKey[this.keyType]) {
            throw Error("invalid key type: " + this.keyType);
          }
          return _0x30abb9.prototype.resolve.call(this);
        };
        _0x39f752.d = function (_0x3b8db8, _0x1f7fa7, _0x407cde) {
          if ("function" == typeof _0x407cde) {
            _0x407cde = _0x139722.decorateType(_0x407cde).name;
          } else if (_0x407cde && 'object' == typeof _0x407cde) {
            _0x407cde = _0x139722.decorateEnum(_0x407cde).name;
          }
          return function (_0x1ada07, _0x324d1e) {
            _0x139722.decorateType(_0x1ada07.constructor).add(new _0x39f752(_0x324d1e, _0x3b8db8, _0x1f7fa7, _0x407cde));
          };
        };
        _0x9beb17.exports;
      }, function () {
        return {
          './field': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './types': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/method.js", function (_0xabd758, _0x43beb8, _0x568de4, _0x214ae8, _0x39a9fa) {
        _0x568de4.exports = _0xcb1b9e;
        var _0x2809de = _0x43beb8("./object");
        ((_0xcb1b9e.prototype = Object.create(_0x2809de.prototype)).constructor = _0xcb1b9e).className = "Method";
        var _0x4aa77a = _0x43beb8("./util");
        function _0xcb1b9e(_0x42f144, _0x251ecb, _0x5e1e99, _0x7e732c, _0x1707ef, _0x521bb4, _0x20c4fe, _0x6d4005, _0x302de1) {
          if (_0x4aa77a.isObject(_0x1707ef)) {
            _0x20c4fe = _0x1707ef;
            _0x1707ef = _0x521bb4 = undefined;
          } else if (_0x4aa77a.isObject(_0x521bb4)) {
            _0x20c4fe = _0x521bb4;
            _0x521bb4 = undefined;
          }
          if (undefined !== _0x251ecb && !_0x4aa77a.isString(_0x251ecb)) {
            throw TypeError("type must be a string");
          }
          if (!_0x4aa77a.isString(_0x5e1e99)) {
            throw TypeError("requestType must be a string");
          }
          if (!_0x4aa77a.isString(_0x7e732c)) {
            throw TypeError("responseType must be a string");
          }
          _0x2809de.call(this, _0x42f144, _0x20c4fe);
          this.type = _0x251ecb || "rpc";
          this.requestType = _0x5e1e99;
          this.requestStream = !!_0x1707ef || undefined;
          this.responseType = _0x7e732c;
          this.responseStream = !!_0x521bb4 || undefined;
          this.resolvedRequestType = null;
          this.resolvedResponseType = null;
          this.comment = _0x6d4005;
          this.parsedOptions = _0x302de1;
        }
        _0xcb1b9e.fromJSON = function (_0x5e5c4f, _0x177a0e) {
          return new _0xcb1b9e(_0x5e5c4f, _0x177a0e.type, _0x177a0e.requestType, _0x177a0e.responseType, _0x177a0e.requestStream, _0x177a0e.responseStream, _0x177a0e.options, _0x177a0e.comment, _0x177a0e.parsedOptions);
        };
        _0xcb1b9e.prototype.toJSON = function (_0x38b8f8) {
          var _0x141faf = !!_0x38b8f8 && Boolean(_0x38b8f8.keepComments);
          return _0x4aa77a.toObject(["type", "rpc" !== this.type && this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", _0x141faf ? this.comment : undefined, "parsedOptions", this.parsedOptions]);
        };
        _0xcb1b9e.prototype.resolve = function () {
          return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), _0x2809de.prototype.resolve.call(this));
        };
        _0x568de4.exports;
      }, function () {
        return {
          './object': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/object.js',
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46f592.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/service.js', function (_0x2bdf1e, _0x2f9585, _0x3be01a, _0x434a93, _0x2d9b75) {
        _0x3be01a.exports = _0x9bfc6;
        var _0x1cc419 = _0x2f9585("./namespace");
        ((_0x9bfc6.prototype = Object.create(_0x1cc419.prototype)).constructor = _0x9bfc6).className = "Service";
        var _0x5f5195 = _0x2f9585("./method");
        var _0xb87940 = _0x2f9585("./util");
        var _0x1e958b = _0x2f9585("./rpc");
        function _0x9bfc6(_0x447e14, _0x4b8061) {
          _0x1cc419.call(this, _0x447e14, _0x4b8061);
          this.methods = {};
          this._methodsArray = null;
        }
        function _0x7f8e55(_0x341936) {
          _0x341936._methodsArray = null;
          return _0x341936;
        }
        _0x9bfc6.fromJSON = function (_0x53176e, _0x73de3f) {
          var _0x247b18 = new _0x9bfc6(_0x53176e, _0x73de3f.options);
          if (_0x73de3f.methods) {
            var _0x4bb35e = Object.keys(_0x73de3f.methods);
            for (var _0x3fcf38 = 0x0; _0x3fcf38 < _0x4bb35e.length; ++_0x3fcf38) {
              _0x247b18.add(_0x5f5195.fromJSON(_0x4bb35e[_0x3fcf38], _0x73de3f.methods[_0x4bb35e[_0x3fcf38]]));
            }
          }
          if (_0x73de3f.nested) {
            _0x247b18.addJSON(_0x73de3f.nested);
          }
          _0x247b18.comment = _0x73de3f.comment;
          return _0x247b18;
        };
        _0x9bfc6.prototype.toJSON = function (_0x2442bf) {
          var _0x2cd9d0 = _0x1cc419.prototype.toJSON.call(this, _0x2442bf);
          var _0x291c94 = !!_0x2442bf && Boolean(_0x2442bf.keepComments);
          return _0xb87940.toObject(["options", _0x2cd9d0 && _0x2cd9d0.options || undefined, "methods", _0x1cc419.arrayToJSON(this.methodsArray, _0x2442bf) || {}, "nested", _0x2cd9d0 && _0x2cd9d0.nested || undefined, 'comment', _0x291c94 ? this.comment : undefined]);
        };
        Object.defineProperty(_0x9bfc6.prototype, 'methodsArray', {
          'get': function () {
            return this._methodsArray || (this._methodsArray = _0xb87940.toArray(this.methods));
          }
        });
        _0x9bfc6.prototype.get = function (_0x415a06) {
          return this.methods[_0x415a06] || _0x1cc419.prototype.get.call(this, _0x415a06);
        };
        _0x9bfc6.prototype.resolveAll = function () {
          var _0x588bcc = this.methodsArray;
          for (var _0xc3b796 = 0x0; _0xc3b796 < _0x588bcc.length; ++_0xc3b796) {
            _0x588bcc[_0xc3b796].resolve();
          }
          return _0x1cc419.prototype.resolve.call(this);
        };
        _0x9bfc6.prototype.add = function (_0x2e1316) {
          if (this.get(_0x2e1316.name)) {
            throw Error("duplicate name '" + _0x2e1316.name + "' in " + this);
          }
          return _0x2e1316 instanceof _0x5f5195 ? (this.methods[_0x2e1316.name] = _0x2e1316, _0x2e1316.parent = this, _0x7f8e55(this)) : _0x1cc419.prototype.add.call(this, _0x2e1316);
        };
        _0x9bfc6.prototype.remove = function (_0x56af11) {
          if (_0x56af11 instanceof _0x5f5195) {
            if (this.methods[_0x56af11.name] !== _0x56af11) {
              throw Error(_0x56af11 + " is not a member of " + this);
            }
            delete this.methods[_0x56af11.name];
            _0x56af11.parent = null;
            return _0x7f8e55(this);
          }
          return _0x1cc419.prototype.remove.call(this, _0x56af11);
        };
        _0x9bfc6.prototype.create = function (_0x4293cd, _0x50997d, _0xecc4f9) {
          var _0x333c2a;
          var _0x3be3d7 = new _0x1e958b.Service(_0x4293cd, _0x50997d, _0xecc4f9);
          for (var _0x2c2254 = 0x0; _0x2c2254 < this.methodsArray.length; ++_0x2c2254) {
            var _0x3f53e5 = _0xb87940.lcFirst((_0x333c2a = this._methodsArray[_0x2c2254]).resolve().name).replace(/[^$\w_]/g, '');
            _0x3be3d7[_0x3f53e5] = _0xb87940.codegen(['r', 'c'], _0xb87940.isReserved(_0x3f53e5) ? _0x3f53e5 + '_' : _0x3f53e5)("return this.rpcCall(m,q,s,r,c)")({
              'm': _0x333c2a,
              'q': _0x333c2a.resolvedRequestType.ctor,
              's': _0x333c2a.resolvedResponseType.ctor
            });
          }
          return _0x3be3d7;
        };
        _0x3be01a.exports;
      }, function () {
        return {
          './namespace': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './method': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './rpc': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js'
        };
      });
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/message.js", function (_0x41f247, _0xc50cd0, _0x212afd, _0x430d91, _0x195bcf) {
        _0x212afd.exports = _0x53c330;
        var _0x4c8119 = _0xc50cd0("./util/minimal");
        function _0x53c330(_0x17c8f0) {
          if (_0x17c8f0) {
            var _0x434798 = Object.keys(_0x17c8f0);
            for (var _0x598897 = 0x0; _0x598897 < _0x434798.length; ++_0x598897) {
              this[_0x434798[_0x598897]] = _0x17c8f0[_0x434798[_0x598897]];
            }
          }
        }
        _0x53c330.create = function (_0x3dbc44) {
          return this.$type.create(_0x3dbc44);
        };
        _0x53c330.encode = function (_0x29ad20, _0x15c6b3) {
          return this.$type.encode(_0x29ad20, _0x15c6b3);
        };
        _0x53c330.encodeDelimited = function (_0x4c2533, _0xc97bde) {
          return this.$type.encodeDelimited(_0x4c2533, _0xc97bde);
        };
        _0x53c330.decode = function (_0x4c725b) {
          return this.$type.decode(_0x4c725b);
        };
        _0x53c330.decodeDelimited = function (_0x50b6ee) {
          return this.$type.decodeDelimited(_0x50b6ee);
        };
        _0x53c330.verify = function (_0x5eef38) {
          return this.$type.verify(_0x5eef38);
        };
        _0x53c330.fromObject = function (_0x583db4) {
          return this.$type.fromObject(_0x583db4);
        };
        _0x53c330.toObject = function (_0x1a22b2, _0x5bae79) {
          return this.$type.toObject(_0x1a22b2, _0x5bae79);
        };
        _0x53c330.prototype.toJSON = function () {
          return this.$type.toObject(this, _0x4c8119.toJSONOptions);
        };
        _0x212afd.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js", function (_0xbf86e7, _0x4f71a6, _0x562f65, _0xcb1518, _0x429dcc) {
        _0x562f65.exports = function (_0x26fa6d) {
          var _0x1bbc76 = _0x267658.codegen(['r', 'l'], _0x26fa6d.name + "$decode")("if(!(r instanceof Reader))")('r=Reader.create(r)')("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (_0x26fa6d.fieldsArray.filter(function (_0x3902c9) {
            return _0x3902c9.map;
          }).length ? ",k,value" : ''))("while(r.pos<c){")("var t=r.uint32()");
          if (_0x26fa6d.group) {
            _0x1bbc76('if((t&7)===4)')('break');
          }
          _0x1bbc76('switch(t>>>3){');
          for (var _0x5a0d32 = 0x0; _0x5a0d32 < _0x26fa6d.fieldsArray.length; ++_0x5a0d32) {
            var _0x9904aa = _0x26fa6d._fieldsArray[_0x5a0d32].resolve();
            var _0xa76233 = _0x9904aa.resolvedType instanceof _0x1dac7d ? "int32" : _0x9904aa.type;
            var _0x196862 = 'm' + _0x267658.safeProp(_0x9904aa.name);
            _0x1bbc76("case %i:", _0x9904aa.id);
            if (_0x9904aa.map) {
              _0x1bbc76("if(%s===util.emptyObject)", _0x196862)("%s={}", _0x196862)("var c2 = r.uint32()+r.pos");
              if (undefined !== _0x3e80b4.defaults[_0x9904aa.keyType]) {
                _0x1bbc76("k=%j", _0x3e80b4.defaults[_0x9904aa.keyType]);
              } else {
                _0x1bbc76("k=null");
              }
              if (undefined !== _0x3e80b4.defaults[_0xa76233]) {
                _0x1bbc76("value=%j", _0x3e80b4.defaults[_0xa76233]);
              } else {
                _0x1bbc76("value=null");
              }
              _0x1bbc76("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", _0x9904aa.keyType)("case 2:");
              if (undefined === _0x3e80b4.basic[_0xa76233]) {
                _0x1bbc76("value=types[%i].decode(r,r.uint32())", _0x5a0d32);
              } else {
                _0x1bbc76("value=r.%s()", _0xa76233);
              }
              _0x1bbc76('break')("default:")("r.skipType(tag2&7)")("break")('}')('}');
              if (undefined !== _0x3e80b4.long[_0x9904aa.keyType]) {
                _0x1bbc76("%s[typeof k===\"object\"?util.longToHash(k):k]=value", _0x196862);
              } else {
                _0x1bbc76("%s[k]=value", _0x196862);
              }
            } else if (_0x9904aa.repeated) {
              _0x1bbc76("if(!(%s&&%s.length))", _0x196862, _0x196862)("%s=[]", _0x196862);
              if (undefined !== _0x3e80b4.packed[_0xa76233]) {
                _0x1bbc76('if((t&7)===2){')("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", _0x196862, _0xa76233)("}else");
              }
              if (undefined === _0x3e80b4.basic[_0xa76233]) {
                _0x1bbc76(_0x9904aa.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", _0x196862, _0x5a0d32);
              } else {
                _0x1bbc76("%s.push(r.%s())", _0x196862, _0xa76233);
              }
            } else if (undefined === _0x3e80b4.basic[_0xa76233]) {
              _0x1bbc76(_0x9904aa.resolvedType.group ? '%s=types[%i].decode(r)' : '%s=types[%i].decode(r,r.uint32())', _0x196862, _0x5a0d32);
            } else {
              _0x1bbc76("%s=r.%s()", _0x196862, _0xa76233);
            }
            _0x1bbc76("break");
          }
          _0x1bbc76("default:")("r.skipType(t&7)")("break")('}')('}');
          for (_0x5a0d32 = 0x0; _0x5a0d32 < _0x26fa6d._fieldsArray.length; ++_0x5a0d32) {
            var _0x471288 = _0x26fa6d._fieldsArray[_0x5a0d32];
            if (_0x471288.required) {
              _0x1bbc76('if(!m.hasOwnProperty(%j))', _0x471288.name)("throw util.ProtocolError(%j,{instance:m})", "missing required '" + _0x471288.name + "'");
            }
          }
          return _0x1bbc76("return m");
        };
        var _0x1dac7d = _0x4f71a6("./enum");
        var _0x3e80b4 = _0x4f71a6('./types');
        var _0x267658 = _0x4f71a6("./util");
        _0x562f65.exports;
      }, function () {
        return {
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js", function (_0x466bb7, _0x44ec41, _0x896520, _0x18a373, _0x484796) {
        _0x896520.exports = function (_0x4c87eb) {
          var _0x117ce4 = _0x257a1f.codegen(['m'], _0x4c87eb.name + "$verify")("if(typeof m!==\"object\"||m===null)")("return%j", "object expected");
          var _0x1b2f35 = _0x4c87eb.oneofsArray;
          var _0x1b0deb = {};
          if (_0x1b2f35.length) {
            _0x117ce4("var p={}");
          }
          for (var _0x5b731c = 0x0; _0x5b731c < _0x4c87eb.fieldsArray.length; ++_0x5b731c) {
            var _0x41e2ce = _0x4c87eb._fieldsArray[_0x5b731c].resolve();
            var _0x425095 = 'm' + _0x257a1f.safeProp(_0x41e2ce.name);
            if (_0x41e2ce.optional) {
              _0x117ce4("if(%s!=null&&m.hasOwnProperty(%j)){", _0x425095, _0x41e2ce.name);
            }
            if (_0x41e2ce.map) {
              _0x117ce4('if(!util.isObject(%s))', _0x425095)("return%j", _0x41e2ce.name + ": " + _0x1635(0x732) + (_0x41e2ce.repeated && "array" !== _0x1635(0x732) ? '[]' : _0x41e2ce.map && false ? "{k:" + _0x41e2ce.keyType + '}' : '') + " expected")("var k=Object.keys(%s)", _0x425095)("for(var i=0;i<k.length;++i){");
              _0x2c9649(_0x117ce4, _0x41e2ce, "k[i]");
              _0x4348e9(_0x117ce4, _0x41e2ce, _0x5b731c, _0x425095 + "[k[i]]")('}');
            } else {
              if (_0x41e2ce.repeated) {
                _0x117ce4("if(!Array.isArray(%s))", _0x425095)("return%j", _0x41e2ce.name + ": " + _0x1635(0x19b) + (_0x41e2ce.repeated && "array" !== _0x1635(0x19b) ? '[]' : _0x41e2ce.map && true ? "{k:" + _0x41e2ce.keyType + '}' : '') + " expected")("for(var i=0;i<%s.length;++i){", _0x425095);
                _0x4348e9(_0x117ce4, _0x41e2ce, _0x5b731c, _0x425095 + "[i]")('}');
              } else {
                if (_0x41e2ce.partOf) {
                  var _0x441e83 = _0x257a1f.safeProp(_0x41e2ce.partOf.name);
                  if (0x1 === _0x1b0deb[_0x41e2ce.partOf.name]) {
                    _0x117ce4("if(p%s===1)", _0x441e83)("return%j", _0x41e2ce.partOf.name + ": multiple values");
                  }
                  _0x1b0deb[_0x41e2ce.partOf.name] = 0x1;
                  _0x117ce4('p%s=1', _0x441e83);
                }
                _0x4348e9(_0x117ce4, _0x41e2ce, _0x5b731c, _0x425095);
              }
            }
            if (_0x41e2ce.optional) {
              _0x117ce4('}');
            }
          }
          return _0x117ce4("return null");
        };
        var _0x2bd631 = _0x44ec41("./enum");
        var _0x257a1f = _0x44ec41("./util");
        function _0x4348e9(_0x134408, _0x22b063, _0x3e29f0, _0x1ad358) {
          if (_0x22b063.resolvedType) {
            if (_0x22b063.resolvedType instanceof _0x2bd631) {
              _0x134408("switch(%s){", _0x1ad358)("default:")('return%j', _0x22b063.name + ": " + _0x1635(0x440) + (_0x22b063.repeated && "array" !== _0x1635(0x440) ? '[]' : _0x22b063.map && true ? "{k:" + _0x22b063.keyType + '}' : '') + " expected");
              var _0x33df92 = Object.keys(_0x22b063.resolvedType.values);
              for (var _0x33b2ad = 0x0; _0x33b2ad < _0x33df92.length; ++_0x33b2ad) {
                _0x134408("case %i:", _0x22b063.resolvedType.values[_0x33df92[_0x33b2ad]]);
              }
              _0x134408("break")('}');
            } else {
              _0x134408('{')("var e=types[%i].verify(%s);", _0x3e29f0, _0x1ad358)('if(e)')("return%j+e", _0x22b063.name + '.')('}');
            }
          } else {
            switch (_0x22b063.type) {
              case "int32":
              case "uint32":
              case 'sint32':
              case "fixed32":
              case "sfixed32":
                _0x134408("if(!util.isInteger(%s))", _0x1ad358)("return%j", _0x22b063.name + ": " + _0x1635(0x113) + (_0x22b063.repeated && "array" !== _0x1635(0x113) ? '[]' : _0x22b063.map && true ? "{k:" + _0x22b063.keyType + '}' : '') + " expected");
                break;
              case 'int64':
              case 'uint64':
              case "sint64":
              case "fixed64":
              case 'sfixed64':
                _0x134408("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", _0x1ad358, _0x1ad358, _0x1ad358, _0x1ad358)("return%j", _0x22b063.name + ": " + _0x1635(0x3b7) + (_0x22b063.repeated && "array" !== _0x1635(0x3b7) ? '[]' : _0x22b063.map && true ? "{k:" + _0x22b063.keyType + '}' : '') + " expected");
                break;
              case "float":
              case 'double':
                _0x134408("if(typeof %s!==\"number\")", _0x1ad358)('return%j', _0x22b063.name + ": " + 'number' + (_0x22b063.repeated && true ? '[]' : _0x22b063.map && true ? "{k:" + _0x22b063.keyType + '}' : '') + " expected");
                break;
              case "bool":
                _0x134408("if(typeof %s!==\"boolean\")", _0x1ad358)("return%j", _0x22b063.name + ": " + _0x1635(0x492) + (_0x22b063.repeated && "array" !== _0x1635(0x492) ? '[]' : _0x22b063.map && true ? "{k:" + _0x22b063.keyType + '}' : '') + " expected");
                break;
              case 'string':
                _0x134408('if(!util.isString(%s))', _0x1ad358)("return%j", _0x22b063.name + ": " + 'string' + (_0x22b063.repeated && true ? '[]' : _0x22b063.map && true ? "{k:" + _0x22b063.keyType + '}' : '') + " expected");
                break;
              case "bytes":
                _0x134408("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", _0x1ad358, _0x1ad358, _0x1ad358)("return%j", _0x22b063.name + ": " + _0x1635(0x3e9) + (_0x22b063.repeated && "array" !== _0x1635(0x3e9) ? '[]' : _0x22b063.map && true ? "{k:" + _0x22b063.keyType + '}' : '') + " expected");
            }
          }
          return _0x134408;
        }
        function _0x2c9649(_0x128bd6, _0x364c4e, _0x1421b0) {
          switch (_0x364c4e.keyType) {
            case 'int32':
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
              _0x128bd6("if(!util.key32Re.test(%s))", _0x1421b0)('return%j', _0x364c4e.name + ": " + _0x1635(0x337) + (_0x364c4e.repeated && "array" !== _0x1635(0x337) ? '[]' : _0x364c4e.map && true ? "{k:" + _0x364c4e.keyType + '}' : '') + " expected");
              break;
            case 'int64':
            case 'uint64':
            case "sint64":
            case "fixed64":
            case "sfixed64":
              _0x128bd6('if(!util.key64Re.test(%s))', _0x1421b0)("return%j", _0x364c4e.name + ": " + _0x1635(0xf5) + (_0x364c4e.repeated && "array" !== _0x1635(0xf5) ? '[]' : _0x364c4e.map && true ? "{k:" + _0x364c4e.keyType + '}' : '') + " expected");
              break;
            case "bool":
              _0x128bd6("if(!util.key2Re.test(%s))", _0x1421b0)('return%j', _0x364c4e.name + ": " + _0x1635(0x5af) + (_0x364c4e.repeated && "array" !== _0x1635(0x5af) ? '[]' : _0x364c4e.map && true ? "{k:" + _0x364c4e.keyType + '}' : '') + " expected");
          }
          return _0x128bd6;
        }
        _0x896520.exports;
      }, function () {
        return {
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/converter.js", function (_0x354655, _0x28c72a, _0x4aca18, _0x4f8255, _0x33e65b) {
        var _0x57ce40 = _0x28c72a("./enum");
        var _0x59e064 = _0x28c72a("./util");
        function _0x2c1589(_0x1af299, _0x2aa017, _0x1c23ae, _0x537735) {
          if (_0x2aa017.resolvedType) {
            if (_0x2aa017.resolvedType instanceof _0x57ce40) {
              _0x1af299("switch(d%s){", _0x537735);
              var _0x92724b = _0x2aa017.resolvedType.values;
              var _0x10bf61 = Object.keys(_0x92724b);
              for (var _0x19f670 = 0x0; _0x19f670 < _0x10bf61.length; ++_0x19f670) {
                if (_0x2aa017.repeated && _0x92724b[_0x10bf61[_0x19f670]] === _0x2aa017.typeDefault) {
                  _0x1af299('default:');
                }
                _0x1af299("case%j:", _0x10bf61[_0x19f670])("case %i:", _0x92724b[_0x10bf61[_0x19f670]])("m%s=%j", _0x537735, _0x92724b[_0x10bf61[_0x19f670]])('break');
              }
              _0x1af299('}');
            } else {
              _0x1af299("if(typeof d%s!==\"object\")", _0x537735)("throw TypeError(%j)", _0x2aa017.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", _0x537735, _0x1c23ae, _0x537735);
            }
          } else {
            var _0x53775b = false;
            switch (_0x2aa017.type) {
              case "double":
              case 'float':
                _0x1af299("m%s=Number(d%s)", _0x537735, _0x537735);
                break;
              case "uint32":
              case "fixed32":
                _0x1af299("m%s=d%s>>>0", _0x537735, _0x537735);
                break;
              case "int32":
              case "sint32":
              case "sfixed32":
                _0x1af299("m%s=d%s|0", _0x537735, _0x537735);
                break;
              case "uint64":
                _0x53775b = true;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                _0x1af299("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", _0x537735, _0x537735, _0x53775b)("else if(typeof d%s===\"string\")", _0x537735)('m%s=parseInt(d%s,10)', _0x537735, _0x537735)("else if(typeof d%s===\"number\")", _0x537735)('m%s=d%s', _0x537735, _0x537735)("else if(typeof d%s===\"object\")", _0x537735)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", _0x537735, _0x537735, _0x537735, _0x53775b ? 'true' : '');
                break;
              case "bytes":
                _0x1af299("if(typeof d%s===\"string\")", _0x537735)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", _0x537735, _0x537735, _0x537735)("else if(d%s.length)", _0x537735)('m%s=d%s', _0x537735, _0x537735);
                break;
              case "string":
                _0x1af299("m%s=String(d%s)", _0x537735, _0x537735);
                break;
              case "bool":
                _0x1af299("m%s=Boolean(d%s)", _0x537735, _0x537735);
            }
          }
          return _0x1af299;
        }
        function _0xb55f61(_0x428ae5, _0x37264a, _0x32d2ca, _0x317a4c) {
          if (_0x37264a.resolvedType) {
            if (_0x37264a.resolvedType instanceof _0x57ce40) {
              _0x428ae5("d%s=o.enums===String?types[%i].values[m%s]:m%s", _0x317a4c, _0x32d2ca, _0x317a4c, _0x317a4c);
            } else {
              _0x428ae5("d%s=types[%i].toObject(m%s,o)", _0x317a4c, _0x32d2ca, _0x317a4c);
            }
          } else {
            var _0x470037 = false;
            switch (_0x37264a.type) {
              case "double":
              case "float":
                _0x428ae5("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", _0x317a4c, _0x317a4c, _0x317a4c, _0x317a4c);
                break;
              case "uint64":
                _0x470037 = true;
              case "int64":
              case "sint64":
              case "fixed64":
              case 'sfixed64':
                _0x428ae5("if(typeof m%s===\"number\")", _0x317a4c)("d%s=o.longs===String?String(m%s):m%s", _0x317a4c, _0x317a4c, _0x317a4c)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", _0x317a4c, _0x317a4c, _0x317a4c, _0x317a4c, _0x470037 ? "true" : '', _0x317a4c);
                break;
              case "bytes":
                _0x428ae5("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", _0x317a4c, _0x317a4c, _0x317a4c, _0x317a4c, _0x317a4c);
                break;
              default:
                _0x428ae5("d%s=m%s", _0x317a4c, _0x317a4c);
            }
          }
          return _0x428ae5;
        }
        _0x354655.fromObject = function (_0x5efe4b) {
          var _0x3e5f36 = _0x5efe4b.fieldsArray;
          var _0x4aca27 = _0x59e064.codegen(['d'], _0x5efe4b.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
          if (!_0x3e5f36.length) {
            return _0x4aca27("return new this.ctor");
          }
          _0x4aca27("var m=new this.ctor");
          for (var _0x36624f = 0x0; _0x36624f < _0x3e5f36.length; ++_0x36624f) {
            var _0x200e66 = _0x3e5f36[_0x36624f].resolve();
            var _0x2bac61 = _0x59e064.safeProp(_0x200e66.name);
            if (_0x200e66.map) {
              _0x4aca27('if(d%s){', _0x2bac61)("if(typeof d%s!==\"object\")", _0x2bac61)("throw TypeError(%j)", _0x200e66.fullName + ": object expected")('m%s={}', _0x2bac61)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", _0x2bac61);
              _0x2c1589(_0x4aca27, _0x200e66, _0x36624f, _0x2bac61 + '[ks[i]]')('}')('}');
            } else if (_0x200e66.repeated) {
              _0x4aca27('if(d%s){', _0x2bac61)("if(!Array.isArray(d%s))", _0x2bac61)("throw TypeError(%j)", _0x200e66.fullName + ": array expected")("m%s=[]", _0x2bac61)("for(var i=0;i<d%s.length;++i){", _0x2bac61);
              _0x2c1589(_0x4aca27, _0x200e66, _0x36624f, _0x2bac61 + "[i]")('}')('}');
            } else {
              if (!(_0x200e66.resolvedType instanceof _0x57ce40)) {
                _0x4aca27("if(d%s!=null){", _0x2bac61);
              }
              _0x2c1589(_0x4aca27, _0x200e66, _0x36624f, _0x2bac61);
              if (!(_0x200e66.resolvedType instanceof _0x57ce40)) {
                _0x4aca27('}');
              }
            }
          }
          return _0x4aca27("return m");
        };
        _0x354655.toObject = function (_0x33ca54) {
          var _0x27b6d4 = _0x33ca54.fieldsArray.slice().sort(_0x59e064.compareFieldsById);
          if (!_0x27b6d4.length) {
            return _0x59e064.codegen()("return {}");
          }
          var _0x1a54cb = _0x59e064.codegen(['m', 'o'], _0x33ca54.name + "$toObject")("if(!o)")("o={}")("var d={}");
          var _0x1243b2 = [];
          var _0x357213 = [];
          var _0x5b053e = [];
          for (var _0x3e694f = 0x0; _0x3e694f < _0x27b6d4.length; ++_0x3e694f) {
            if (!_0x27b6d4[_0x3e694f].partOf) {
              (_0x27b6d4[_0x3e694f].resolve().repeated ? _0x1243b2 : _0x27b6d4[_0x3e694f].map ? _0x357213 : _0x5b053e).push(_0x27b6d4[_0x3e694f]);
            }
          }
          if (_0x1243b2.length) {
            _0x1a54cb("if(o.arrays||o.defaults){");
            for (_0x3e694f = 0x0; _0x3e694f < _0x1243b2.length; ++_0x3e694f) {
              _0x1a54cb("d%s=[]", _0x59e064.safeProp(_0x1243b2[_0x3e694f].name));
            }
            _0x1a54cb('}');
          }
          if (_0x357213.length) {
            _0x1a54cb('if(o.objects||o.defaults){');
            for (_0x3e694f = 0x0; _0x3e694f < _0x357213.length; ++_0x3e694f) {
              _0x1a54cb('d%s={}', _0x59e064.safeProp(_0x357213[_0x3e694f].name));
            }
            _0x1a54cb('}');
          }
          if (_0x5b053e.length) {
            _0x1a54cb("if(o.defaults){");
            for (_0x3e694f = 0x0; _0x3e694f < _0x5b053e.length; ++_0x3e694f) {
              var _0xd5c5e8 = _0x5b053e[_0x3e694f];
              var _0x3a979e = _0x59e064.safeProp(_0xd5c5e8.name);
              if (_0xd5c5e8.resolvedType instanceof _0x57ce40) {
                _0x1a54cb("d%s=o.enums===String?%j:%j", _0x3a979e, _0xd5c5e8.resolvedType.valuesById[_0xd5c5e8.typeDefault], _0xd5c5e8.typeDefault);
              } else {
                if (_0xd5c5e8.long) {
                  _0x1a54cb("if(util.Long){")("var n=new util.Long(%i,%i,%j)", _0xd5c5e8.typeDefault.low, _0xd5c5e8.typeDefault.high, _0xd5c5e8.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", _0x3a979e)("}else")("d%s=o.longs===String?%j:%i", _0x3a979e, _0xd5c5e8.typeDefault.toString(), _0xd5c5e8.typeDefault.toNumber());
                } else {
                  if (_0xd5c5e8.bytes) {
                    var _0x114693 = '[' + Array.prototype.slice.call(_0xd5c5e8.typeDefault).join(',') + ']';
                    _0x1a54cb("if(o.bytes===String)d%s=%j", _0x3a979e, String.fromCharCode.apply(String, _0xd5c5e8.typeDefault))('else{')("d%s=%s", _0x3a979e, _0x114693)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", _0x3a979e, _0x3a979e)('}');
                  } else {
                    _0x1a54cb("d%s=%j", _0x3a979e, _0xd5c5e8.typeDefault);
                  }
                }
              }
            }
            _0x1a54cb('}');
          }
          var _0x415ff8 = false;
          for (_0x3e694f = 0x0; _0x3e694f < _0x27b6d4.length; ++_0x3e694f) {
            _0xd5c5e8 = _0x27b6d4[_0x3e694f];
            var _0xb00b16 = _0x33ca54._fieldsArray.indexOf(_0xd5c5e8);
            _0x3a979e = _0x59e064.safeProp(_0xd5c5e8.name);
            if (_0xd5c5e8.map) {
              if (!_0x415ff8) {
                _0x415ff8 = true;
                _0x1a54cb("var ks2");
              }
              _0x1a54cb('if(m%s&&(ks2=Object.keys(m%s)).length){', _0x3a979e, _0x3a979e)("d%s={}", _0x3a979e)("for(var j=0;j<ks2.length;++j){");
              _0xb55f61(_0x1a54cb, _0xd5c5e8, _0xb00b16, _0x3a979e + "[ks2[j]]")('}');
            } else if (_0xd5c5e8.repeated) {
              _0x1a54cb('if(m%s&&m%s.length){', _0x3a979e, _0x3a979e)("d%s=[]", _0x3a979e)("for(var j=0;j<m%s.length;++j){", _0x3a979e);
              _0xb55f61(_0x1a54cb, _0xd5c5e8, _0xb00b16, _0x3a979e + '[j]')('}');
            } else {
              _0x1a54cb("if(m%s!=null&&m.hasOwnProperty(%j)){", _0x3a979e, _0xd5c5e8.name);
              _0xb55f61(_0x1a54cb, _0xd5c5e8, _0xb00b16, _0x3a979e);
              if (_0xd5c5e8.partOf) {
                _0x1a54cb("if(o.oneofs)")('d%s=%j', _0x59e064.safeProp(_0xd5c5e8.partOf.name), _0xd5c5e8.name);
              }
            }
            _0x1a54cb('}');
          }
          return _0x1a54cb("return d");
        };
        _0x4aca18.exports;
      }, function () {
        return {
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js", function (_0x306c3f, _0x511279, _0x33424b, _0x2fd729, _0x3e5bae) {
        var _0x216fe9 = _0x511279('./message');
        _0x306c3f['.google.protobuf.Any'] = {
          'fromObject': function (_0x42c05c) {
            if (_0x42c05c && _0x42c05c["@type"]) {
              var _0x4a9dc1 = _0x42c05c["@type"].substring(_0x42c05c['@type'].lastIndexOf('/') + 0x1);
              var _0x1305b8 = this.lookup(_0x4a9dc1);
              if (_0x1305b8) {
                var _0x3b2f04 = '.' === _0x42c05c["@type"].charAt(0x0) ? _0x42c05c["@type"].substr(0x1) : _0x42c05c["@type"];
                if (-0x1 === _0x3b2f04.indexOf('/')) {
                  _0x3b2f04 = '/' + _0x3b2f04;
                }
                return this.create({
                  'type_url': _0x3b2f04,
                  'value': _0x1305b8.encode(_0x1305b8.fromObject(_0x42c05c)).finish()
                });
              }
            }
            return this.fromObject(_0x42c05c);
          },
          'toObject': function (_0x314b31, _0x3db27d) {
            var _0x3e7375 = '';
            var _0x3e3cd = '';
            if (_0x3db27d && _0x3db27d.json && _0x314b31.type_url && _0x314b31.value) {
              _0x3e3cd = _0x314b31.type_url.substring(_0x314b31.type_url.lastIndexOf('/') + 0x1);
              _0x3e7375 = _0x314b31.type_url.substring(0x0, _0x314b31.type_url.lastIndexOf('/') + 0x1);
              var _0x258acf = this.lookup(_0x3e3cd);
              if (_0x258acf) {
                _0x314b31 = _0x258acf.decode(_0x314b31.value);
              }
            }
            if (!(_0x314b31 instanceof this.ctor) && _0x314b31 instanceof _0x216fe9) {
              var _0x48797f = _0x314b31.$type.toObject(_0x314b31, _0x3db27d);
              if ('' === _0x3e7375) {
                _0x3e7375 = 'type.googleapis.com/';
              }
              _0x3e3cd = _0x3e7375 + ('.' === _0x314b31.$type.fullName[0x0] ? _0x314b31.$type.fullName.substr(0x1) : _0x314b31.$type.fullName);
              _0x48797f["@type"] = _0x3e3cd;
              return _0x48797f;
            }
            return this.toObject(_0x314b31, _0x3db27d);
          }
        };
        _0x33424b.exports;
      }, function () {
        return {
          './message': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/message.js"
        };
      });
      _0x46f592.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/type.js', function (_0x130c61, _0x3068da, _0x3185f7, _0x959df3, _0x340b54) {
        _0x3185f7.exports = _0x5305a3;
        var _0x2a707c = _0x3068da("./namespace");
        ((_0x5305a3.prototype = Object.create(_0x2a707c.prototype)).constructor = _0x5305a3).className = 'Type';
        var _0x1c2bed = _0x3068da("./enum");
        var _0x2b6f95 = _0x3068da("./oneof");
        var _0x2b6b09 = _0x3068da("./field");
        var _0x48e4f9 = _0x3068da("./mapfield");
        var _0x4c6e6b = _0x3068da("./service");
        var _0x58c49e = _0x3068da("./message");
        var _0x321505 = _0x3068da('./reader');
        var _0xc7a9d7 = _0x3068da("./writer");
        var _0x5cf9df = _0x3068da('./util');
        var _0xb36480 = _0x3068da("./encoder");
        var _0x151b97 = _0x3068da('./decoder');
        var _0x982660 = _0x3068da("./verifier");
        var _0x35ad00 = _0x3068da('./converter');
        var _0x9b8703 = _0x3068da("./wrappers");
        function _0x5305a3(_0x5d23a7, _0x277a3f) {
          _0x2a707c.call(this, _0x5d23a7, _0x277a3f);
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
        function _0xc008bb(_0x198321) {
          _0x198321._fieldsById = _0x198321._fieldsArray = _0x198321._oneofsArray = null;
          delete _0x198321.encode;
          delete _0x198321.decode;
          delete _0x198321.verify;
          return _0x198321;
        }
        Object.defineProperties(_0x5305a3.prototype, {
          'fieldsById': {
            'get': function () {
              if (this._fieldsById) {
                return this._fieldsById;
              }
              this._fieldsById = {};
              var _0xa1ca53 = Object.keys(this.fields);
              for (var _0x14d531 = 0x0; _0x14d531 < _0xa1ca53.length; ++_0x14d531) {
                var _0x46f1c0 = this.fields[_0xa1ca53[_0x14d531]];
                var _0x435a96 = _0x46f1c0.id;
                if (this._fieldsById[_0x435a96]) {
                  throw Error("duplicate id " + _0x435a96 + " in " + this);
                }
                this._fieldsById[_0x435a96] = _0x46f1c0;
              }
              return this._fieldsById;
            }
          },
          'fieldsArray': {
            'get': function () {
              return this._fieldsArray || (this._fieldsArray = _0x5cf9df.toArray(this.fields));
            }
          },
          'oneofsArray': {
            'get': function () {
              return this._oneofsArray || (this._oneofsArray = _0x5cf9df.toArray(this.oneofs));
            }
          },
          'ctor': {
            'get': function () {
              return this._ctor || (this.ctor = _0x5305a3.generateConstructor(this)());
            },
            'set': function (_0x42378d) {
              var _0x4281fd = _0x42378d.prototype;
              if (!(_0x4281fd instanceof _0x58c49e)) {
                (_0x42378d.prototype = new _0x58c49e()).constructor = _0x42378d;
                _0x5cf9df.merge(_0x42378d.prototype, _0x4281fd);
              }
              _0x42378d.$type = _0x42378d.prototype.$type = this;
              _0x5cf9df.merge(_0x42378d, _0x58c49e, true);
              this._ctor = _0x42378d;
              for (var _0x50ac33 = 0x0; _0x50ac33 < this.fieldsArray.length; ++_0x50ac33) {
                this._fieldsArray[_0x50ac33].resolve();
              }
              var _0x4c206e = {};
              for (_0x50ac33 = 0x0; _0x50ac33 < this.oneofsArray.length; ++_0x50ac33) {
                _0x4c206e[this._oneofsArray[_0x50ac33].resolve().name] = {
                  'get': _0x5cf9df.oneOfGetter(this._oneofsArray[_0x50ac33].oneof),
                  'set': _0x5cf9df.oneOfSetter(this._oneofsArray[_0x50ac33].oneof)
                };
              }
              if (_0x50ac33) {
                Object.defineProperties(_0x42378d.prototype, _0x4c206e);
              }
            }
          }
        });
        _0x5305a3.generateConstructor = function (_0x363271) {
          var _0x594d22;
          var _0x466c30 = _0x5cf9df.codegen(['p'], _0x363271.name);
          for (var _0x2d636a = 0x0; _0x2d636a < _0x363271.fieldsArray.length; ++_0x2d636a) {
            if ((_0x594d22 = _0x363271._fieldsArray[_0x2d636a]).map) {
              _0x466c30('this%s={}', _0x5cf9df.safeProp(_0x594d22.name));
            } else if (_0x594d22.repeated) {
              _0x466c30("this%s=[]", _0x5cf9df.safeProp(_0x594d22.name));
            }
          }
          return _0x466c30("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
        };
        _0x5305a3.fromJSON = function (_0x5a06d7, _0x2bb6e0) {
          var _0x3d874b = new _0x5305a3(_0x5a06d7, _0x2bb6e0.options);
          _0x3d874b.extensions = _0x2bb6e0.extensions;
          _0x3d874b.reserved = _0x2bb6e0.reserved;
          var _0x47e7a9 = Object.keys(_0x2bb6e0.fields);
          for (var _0x145e03 = 0x0; _0x145e03 < _0x47e7a9.length; ++_0x145e03) {
            _0x3d874b.add((undefined !== _0x2bb6e0.fields[_0x47e7a9[_0x145e03]].keyType ? _0x48e4f9.fromJSON : _0x2b6b09.fromJSON)(_0x47e7a9[_0x145e03], _0x2bb6e0.fields[_0x47e7a9[_0x145e03]]));
          }
          if (_0x2bb6e0.oneofs) {
            _0x47e7a9 = Object.keys(_0x2bb6e0.oneofs);
            for (_0x145e03 = 0x0; _0x145e03 < _0x47e7a9.length; ++_0x145e03) {
              _0x3d874b.add(_0x2b6f95.fromJSON(_0x47e7a9[_0x145e03], _0x2bb6e0.oneofs[_0x47e7a9[_0x145e03]]));
            }
          }
          if (_0x2bb6e0.nested) {
            _0x47e7a9 = Object.keys(_0x2bb6e0.nested);
            for (_0x145e03 = 0x0; _0x145e03 < _0x47e7a9.length; ++_0x145e03) {
              var _0x21d890 = _0x2bb6e0.nested[_0x47e7a9[_0x145e03]];
              _0x3d874b.add((undefined !== _0x21d890.id ? _0x2b6b09.fromJSON : undefined !== _0x21d890.fields ? _0x5305a3.fromJSON : undefined !== _0x21d890.values ? _0x1c2bed.fromJSON : undefined !== _0x21d890.methods ? _0x4c6e6b.fromJSON : _0x2a707c.fromJSON)(_0x47e7a9[_0x145e03], _0x21d890));
            }
          }
          if (_0x2bb6e0.extensions && _0x2bb6e0.extensions.length) {
            _0x3d874b.extensions = _0x2bb6e0.extensions;
          }
          if (_0x2bb6e0.reserved && _0x2bb6e0.reserved.length) {
            _0x3d874b.reserved = _0x2bb6e0.reserved;
          }
          if (_0x2bb6e0.group) {
            _0x3d874b.group = true;
          }
          if (_0x2bb6e0.comment) {
            _0x3d874b.comment = _0x2bb6e0.comment;
          }
          return _0x3d874b;
        };
        _0x5305a3.prototype.toJSON = function (_0x330865) {
          var _0xf9172c = _0x2a707c.prototype.toJSON.call(this, _0x330865);
          var _0x2dcae2 = !!_0x330865 && Boolean(_0x330865.keepComments);
          return _0x5cf9df.toObject(["options", _0xf9172c && _0xf9172c.options || undefined, "oneofs", _0x2a707c.arrayToJSON(this.oneofsArray, _0x330865), "fields", _0x2a707c.arrayToJSON(this.fieldsArray.filter(function (_0x34969a) {
            return !_0x34969a.declaringField;
          }), _0x330865) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, 'group', this.group || undefined, "nested", _0xf9172c && _0xf9172c.nested || undefined, "comment", _0x2dcae2 ? this.comment : undefined]);
        };
        _0x5305a3.prototype.resolveAll = function () {
          var _0x56a864 = this.fieldsArray;
          for (var _0x5586fb = 0x0; _0x5586fb < _0x56a864.length;) {
            _0x56a864[_0x5586fb++].resolve();
          }
          var _0x3e3a91 = this.oneofsArray;
          for (_0x5586fb = 0x0; _0x5586fb < _0x3e3a91.length;) {
            _0x3e3a91[_0x5586fb++].resolve();
          }
          return _0x2a707c.prototype.resolveAll.call(this);
        };
        _0x5305a3.prototype.get = function (_0x234e03) {
          return this.fields[_0x234e03] || this.oneofs && this.oneofs[_0x234e03] || this.nested && this.nested[_0x234e03] || null;
        };
        _0x5305a3.prototype.add = function (_0x8c4029) {
          if (this.get(_0x8c4029.name)) {
            throw Error("duplicate name '" + _0x8c4029.name + "' in " + this);
          }
          if (_0x8c4029 instanceof _0x2b6b09 && undefined === _0x8c4029.extend) {
            if (this._fieldsById ? this._fieldsById[_0x8c4029.id] : this.fieldsById[_0x8c4029.id]) {
              throw Error("duplicate id " + _0x8c4029.id + " in " + this);
            }
            if (this.isReservedId(_0x8c4029.id)) {
              throw Error("id " + _0x8c4029.id + " is reserved in " + this);
            }
            if (this.isReservedName(_0x8c4029.name)) {
              throw Error("name '" + _0x8c4029.name + "' is reserved in " + this);
            }
            if (_0x8c4029.parent) {
              _0x8c4029.parent.remove(_0x8c4029);
            }
            this.fields[_0x8c4029.name] = _0x8c4029;
            _0x8c4029.message = this;
            _0x8c4029.onAdd(this);
            return _0xc008bb(this);
          }
          return _0x8c4029 instanceof _0x2b6f95 ? (this.oneofs || (this.oneofs = {}), this.oneofs[_0x8c4029.name] = _0x8c4029, _0x8c4029.onAdd(this), _0xc008bb(this)) : _0x2a707c.prototype.add.call(this, _0x8c4029);
        };
        _0x5305a3.prototype.remove = function (_0x245b33) {
          if (_0x245b33 instanceof _0x2b6b09 && undefined === _0x245b33.extend) {
            if (!this.fields || this.fields[_0x245b33.name] !== _0x245b33) {
              throw Error(_0x245b33 + " is not a member of " + this);
            }
            delete this.fields[_0x245b33.name];
            _0x245b33.parent = null;
            _0x245b33.onRemove(this);
            return _0xc008bb(this);
          }
          if (_0x245b33 instanceof _0x2b6f95) {
            if (!this.oneofs || this.oneofs[_0x245b33.name] !== _0x245b33) {
              throw Error(_0x245b33 + " is not a member of " + this);
            }
            delete this.oneofs[_0x245b33.name];
            _0x245b33.parent = null;
            _0x245b33.onRemove(this);
            return _0xc008bb(this);
          }
          return _0x2a707c.prototype.remove.call(this, _0x245b33);
        };
        _0x5305a3.prototype.isReservedId = function (_0x35dae2) {
          return _0x2a707c.isReservedId(this.reserved, _0x35dae2);
        };
        _0x5305a3.prototype.isReservedName = function (_0x4dd5ac) {
          return _0x2a707c.isReservedName(this.reserved, _0x4dd5ac);
        };
        _0x5305a3.prototype.create = function (_0x2d4ea6) {
          return new this.ctor(_0x2d4ea6);
        };
        _0x5305a3.prototype.setup = function () {
          var _0x47163d = this.fullName;
          var _0x1edf88 = [];
          for (var _0x5e8f02 = 0x0; _0x5e8f02 < this.fieldsArray.length; ++_0x5e8f02) {
            _0x1edf88.push(this._fieldsArray[_0x5e8f02].resolve().resolvedType);
          }
          this.encode = _0xb36480(this)({
            'Writer': _0xc7a9d7,
            'types': _0x1edf88,
            'util': _0x5cf9df
          });
          this.decode = _0x151b97(this)({
            'Reader': _0x321505,
            'types': _0x1edf88,
            'util': _0x5cf9df
          });
          this.verify = _0x982660(this)({
            'types': _0x1edf88,
            'util': _0x5cf9df
          });
          this.fromObject = _0x35ad00.fromObject(this)({
            'types': _0x1edf88,
            'util': _0x5cf9df
          });
          this.toObject = _0x35ad00.toObject(this)({
            'types': _0x1edf88,
            'util': _0x5cf9df
          });
          var _0x463e77 = _0x9b8703[_0x47163d];
          if (_0x463e77) {
            var _0x29b312 = Object.create(this);
            _0x29b312.fromObject = this.fromObject;
            this.fromObject = _0x463e77.fromObject.bind(_0x29b312);
            _0x29b312.toObject = this.toObject;
            this.toObject = _0x463e77.toObject.bind(_0x29b312);
          }
          return this;
        };
        _0x5305a3.prototype.encode = function (_0x4d41ea, _0x51235d) {
          return this.setup().encode(_0x4d41ea, _0x51235d);
        };
        _0x5305a3.prototype.encodeDelimited = function (_0x599ddf, _0x39929d) {
          return this.encode(_0x599ddf, _0x39929d && _0x39929d.len ? _0x39929d.fork() : _0x39929d).ldelim();
        };
        _0x5305a3.prototype.decode = function (_0x22d7ee, _0x265a9e) {
          return this.setup().decode(_0x22d7ee, _0x265a9e);
        };
        _0x5305a3.prototype.decodeDelimited = function (_0xdd5cde) {
          if (!(_0xdd5cde instanceof _0x321505)) {
            _0xdd5cde = _0x321505.create(_0xdd5cde);
          }
          return this.decode(_0xdd5cde, _0xdd5cde.uint32());
        };
        _0x5305a3.prototype.verify = function (_0x47f1e2) {
          return this.setup().verify(_0x47f1e2);
        };
        _0x5305a3.prototype.fromObject = function (_0x4b9040) {
          return this.setup().fromObject(_0x4b9040);
        };
        _0x5305a3.prototype.toObject = function (_0x182f97, _0x484012) {
          return this.setup().toObject(_0x182f97, _0x484012);
        };
        _0x5305a3.d = function (_0x2269d3) {
          return function (_0x52d9ea) {
            _0x5cf9df.decorateType(_0x52d9ea, _0x2269d3);
          };
        };
        _0x3185f7.exports;
      }, function () {
        return {
          './namespace': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './oneof': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './field': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './mapfield': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './service': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/service.js',
          './message': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          './reader': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './writer': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/writer.js',
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './encoder': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js',
          './decoder': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          './verifier': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          './converter': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          './wrappers': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js"
        };
      });
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/root.js", function (_0x272b10, _0x3170f5, _0x55bafd, _0x3e6b8e, _0x746c5f) {
        _0x55bafd.exports = _0x487ae7;
        var _0x9cfa55 = _0x3170f5('./namespace');
        ((_0x487ae7.prototype = Object.create(_0x9cfa55.prototype)).constructor = _0x487ae7).className = "Root";
        var _0x3a3b4f;
        var _0x123f10;
        var _0xb97958;
        var _0x14a8e3 = _0x3170f5("./field");
        var _0x3aaa19 = _0x3170f5('./enum');
        var _0x19b014 = _0x3170f5("./oneof");
        var _0x1e20d7 = _0x3170f5("./util");
        function _0x487ae7(_0xad99af) {
          _0x9cfa55.call(this, '', _0xad99af);
          this.deferred = [];
          this.files = [];
        }
        function _0x3d40a5() {}
        _0x487ae7.fromJSON = function (_0x12e02e, _0x1ec03c) {
          if (!_0x1ec03c) {
            _0x1ec03c = new _0x487ae7();
          }
          if (_0x12e02e.options) {
            _0x1ec03c.setOptions(_0x12e02e.options);
          }
          return _0x1ec03c.addJSON(_0x12e02e.nested);
        };
        _0x487ae7.prototype.resolvePath = _0x1e20d7.path.resolve;
        _0x487ae7.prototype.fetch = _0x1e20d7.fetch;
        _0x487ae7.prototype.load = function _0x3638c6(_0x484dcf, _0x13dc71, _0x2e241f) {
          if ("function" == typeof _0x13dc71) {
            _0x2e241f = _0x13dc71;
            _0x13dc71 = undefined;
          }
          var _0x5b9eb9 = this;
          if (!_0x2e241f) {
            return _0x1e20d7.asPromise(_0x3638c6, _0x5b9eb9, _0x484dcf, _0x13dc71);
          }
          var _0x23c917 = _0x2e241f === _0x3d40a5;
          function _0x4e128c(_0x4f7d80, _0xaf5f84) {
            if (_0x2e241f) {
              var _0x4c090a = _0x2e241f;
              _0x2e241f = null;
              if (_0x23c917) {
                throw _0x4f7d80;
              }
              _0x4c090a(_0x4f7d80, _0xaf5f84);
            }
          }
          function _0x570b7f(_0x354db8) {
            var _0x467903 = _0x354db8.lastIndexOf("google/protobuf/");
            if (_0x467903 > -0x1) {
              var _0x82f433 = _0x354db8.substring(_0x467903);
              if (_0x82f433 in _0xb97958) {
                return _0x82f433;
              }
            }
            return null;
          }
          function _0x1c5532(_0x4a7e4a, _0x50e731) {
            try {
              if (_0x1e20d7.isString(_0x50e731) && '{' === _0x50e731.charAt(0x0)) {
                _0x50e731 = JSON.parse(_0x50e731);
              }
              if (_0x1e20d7.isString(_0x50e731)) {
                _0x123f10.filename = _0x4a7e4a;
                var _0x3797a;
                var _0x1b70c4 = _0x123f10(_0x50e731, _0x5b9eb9, _0x13dc71);
                var _0x7e53e6 = 0x0;
                if (_0x1b70c4.imports) {
                  for (; _0x7e53e6 < _0x1b70c4.imports.length; ++_0x7e53e6) {
                    if (_0x3797a = _0x570b7f(_0x1b70c4.imports[_0x7e53e6]) || _0x5b9eb9.resolvePath(_0x4a7e4a, _0x1b70c4.imports[_0x7e53e6])) {
                      _0x4b4fa3(_0x3797a);
                    }
                  }
                }
                if (_0x1b70c4.weakImports) {
                  for (_0x7e53e6 = 0x0; _0x7e53e6 < _0x1b70c4.weakImports.length; ++_0x7e53e6) {
                    if (_0x3797a = _0x570b7f(_0x1b70c4.weakImports[_0x7e53e6]) || _0x5b9eb9.resolvePath(_0x4a7e4a, _0x1b70c4.weakImports[_0x7e53e6])) {
                      _0x4b4fa3(_0x3797a, true);
                    }
                  }
                }
              } else {
                _0x5b9eb9.setOptions(_0x50e731.options).addJSON(_0x50e731.nested);
              }
            } catch (_0x365c43) {
              _0x4e128c(_0x365c43);
            }
            if (!(_0x23c917 || _0x1c3d4c)) {
              _0x4e128c(null, _0x5b9eb9);
            }
          }
          function _0x4b4fa3(_0x3c1372, _0x58abf4) {
            if (!(_0x5b9eb9.files.indexOf(_0x3c1372) > -0x1)) {
              _0x5b9eb9.files.push(_0x3c1372);
              if (_0x3c1372 in _0xb97958) {
                if (_0x23c917) {
                  _0x1c5532(_0x3c1372, _0xb97958[_0x3c1372]);
                } else {
                  ++_0x1c3d4c;
                  setTimeout(function () {
                    --_0x1c3d4c;
                    _0x1c5532(_0x3c1372, _0xb97958[_0x3c1372]);
                  });
                }
              } else {
                if (_0x23c917) {
                  var _0x1f17c5;
                  try {
                    _0x1f17c5 = _0x1e20d7.fs.readFileSync(_0x3c1372).toString("utf8");
                  } catch (_0x202ab0) {
                    return void (_0x58abf4 || _0x4e128c(_0x202ab0));
                  }
                  _0x1c5532(_0x3c1372, _0x1f17c5);
                } else {
                  ++_0x1c3d4c;
                  _0x5b9eb9.fetch(_0x3c1372, function (_0x3720a7, _0x1ca81e) {
                    --_0x1c3d4c;
                    if (_0x2e241f) {
                      if (_0x3720a7) {
                        if (_0x58abf4) {
                          if (!_0x1c3d4c) {
                            _0x4e128c(null, _0x5b9eb9);
                          }
                        } else {
                          _0x4e128c(_0x3720a7);
                        }
                      } else {
                        _0x1c5532(_0x3c1372, _0x1ca81e);
                      }
                    }
                  });
                }
              }
            }
          }
          var _0x1c3d4c = 0x0;
          if (_0x1e20d7.isString(_0x484dcf)) {
            _0x484dcf = [_0x484dcf];
          }
          var _0x21c125;
          for (var _0x4ee3d1 = 0x0; _0x4ee3d1 < _0x484dcf.length; ++_0x4ee3d1) {
            if (_0x21c125 = _0x5b9eb9.resolvePath('', _0x484dcf[_0x4ee3d1])) {
              _0x4b4fa3(_0x21c125);
            }
          }
          if (_0x23c917) {
            return _0x5b9eb9;
          }
          if (!_0x1c3d4c) {
            _0x4e128c(null, _0x5b9eb9);
          }
        };
        _0x487ae7.prototype.loadSync = function (_0x1ab5ba, _0x297f67) {
          if (!_0x1e20d7.isNode) {
            throw Error("not supported");
          }
          return this.load(_0x1ab5ba, _0x297f67, _0x3d40a5);
        };
        _0x487ae7.prototype.resolveAll = function () {
          if (this.deferred.length) {
            throw Error("unresolvable extensions: " + this.deferred.map(function (_0x379bb9) {
              return "'extend " + _0x379bb9.extend + "' in " + _0x379bb9.parent.fullName;
            }).join(", "));
          }
          return _0x9cfa55.prototype.resolveAll.call(this);
        };
        var _0x30819b = /^[A-Z]/;
        function _0x5c1a82(_0x344a29, _0x4f9d4f) {
          var _0xc1ac45 = _0x4f9d4f.parent.lookup(_0x4f9d4f.extend);
          if (_0xc1ac45) {
            var _0x4f763a = new _0x14a8e3(_0x4f9d4f.fullName, _0x4f9d4f.id, _0x4f9d4f.type, _0x4f9d4f.rule, undefined, _0x4f9d4f.options);
            _0x4f763a.declaringField = _0x4f9d4f;
            _0x4f9d4f.extensionField = _0x4f763a;
            _0xc1ac45.add(_0x4f763a);
            return true;
          }
          return false;
        }
        _0x487ae7.prototype._handleAdd = function (_0x684e90) {
          if (_0x684e90 instanceof _0x14a8e3) {
            if (!(undefined === _0x684e90.extend || _0x684e90.extensionField || _0x5c1a82(0x0, _0x684e90))) {
              this.deferred.push(_0x684e90);
            }
          } else {
            if (_0x684e90 instanceof _0x3aaa19) {
              if (_0x30819b.test(_0x684e90.name)) {
                _0x684e90.parent[_0x684e90.name] = _0x684e90.values;
              }
            } else {
              if (!(_0x684e90 instanceof _0x19b014)) {
                if (_0x684e90 instanceof _0x3a3b4f) {
                  for (var _0x5d49a7 = 0x0; _0x5d49a7 < this.deferred.length;) {
                    if (_0x5c1a82(0x0, this.deferred[_0x5d49a7])) {
                      this.deferred.splice(_0x5d49a7, 0x1);
                    } else {
                      ++_0x5d49a7;
                    }
                  }
                }
                for (var _0x593176 = 0x0; _0x593176 < _0x684e90.nestedArray.length; ++_0x593176) {
                  this._handleAdd(_0x684e90._nestedArray[_0x593176]);
                }
                if (_0x30819b.test(_0x684e90.name)) {
                  _0x684e90.parent[_0x684e90.name] = _0x684e90;
                }
              }
            }
          }
        };
        _0x487ae7.prototype._handleRemove = function (_0x32a33c) {
          if (_0x32a33c instanceof _0x14a8e3) {
            if (undefined !== _0x32a33c.extend) {
              if (_0x32a33c.extensionField) {
                _0x32a33c.extensionField.parent.remove(_0x32a33c.extensionField);
                _0x32a33c.extensionField = null;
              } else {
                var _0x2ee08d = this.deferred.indexOf(_0x32a33c);
                if (_0x2ee08d > -0x1) {
                  this.deferred.splice(_0x2ee08d, 0x1);
                }
              }
            }
          } else {
            if (_0x32a33c instanceof _0x3aaa19) {
              if (_0x30819b.test(_0x32a33c.name)) {
                delete _0x32a33c.parent[_0x32a33c.name];
              }
            } else {
              if (_0x32a33c instanceof _0x9cfa55) {
                for (var _0x1c6883 = 0x0; _0x1c6883 < _0x32a33c.nestedArray.length; ++_0x1c6883) {
                  this._handleRemove(_0x32a33c._nestedArray[_0x1c6883]);
                }
                if (_0x30819b.test(_0x32a33c.name)) {
                  delete _0x32a33c.parent[_0x32a33c.name];
                }
              }
            }
          }
        };
        _0x487ae7._configure = function (_0x223e15, _0x381ec3, _0x782a9c) {
          _0x3a3b4f = _0x223e15;
          _0x123f10 = _0x381ec3;
          _0xb97958 = _0x782a9c;
        };
        _0x55bafd.exports;
      }, function () {
        return {
          './namespace': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './field': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './oneof': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util.js", function (_0xa5dd93, _0x4a4517, _0xe8c24f, _0x26cf3b, _0x31be32) {
        var _0x5a54fb;
        var _0xc57a1a;
        var _0x1b84c7 = _0xe8c24f.exports = _0x4a4517("./util/minimal");
        var _0x1c4a54 = _0x4a4517('./roots');
        _0x1b84c7.codegen = _0x4a4517('@protobufjs/codegen');
        _0x1b84c7.fetch = _0x4a4517("@protobufjs/fetch");
        _0x1b84c7.path = _0x4a4517('@protobufjs/path');
        _0x1b84c7.fs = _0x1b84c7.inquire('fs');
        _0x1b84c7.toArray = function (_0x254b11) {
          if (_0x254b11) {
            var _0x30c55c = Object.keys(_0x254b11);
            var _0x49cc69 = new Array(_0x30c55c.length);
            for (var _0x2641e9 = 0x0; _0x2641e9 < _0x30c55c.length;) {
              _0x49cc69[_0x2641e9] = _0x254b11[_0x30c55c[_0x2641e9++]];
            }
            return _0x49cc69;
          }
          return [];
        };
        _0x1b84c7.toObject = function (_0x19f548) {
          var _0x55cc87 = {};
          for (var _0x4d7809 = 0x0; _0x4d7809 < _0x19f548.length;) {
            var _0x3e54bd = _0x19f548[_0x4d7809++];
            var _0x4d0998 = _0x19f548[_0x4d7809++];
            if (undefined !== _0x4d0998) {
              _0x55cc87[_0x3e54bd] = _0x4d0998;
            }
          }
          return _0x55cc87;
        };
        var _0x593c4f = /\\/g;
        var _0x366554 = /"/g;
        _0x1b84c7.isReserved = function (_0x16f0c1) {
          return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(_0x16f0c1);
        };
        _0x1b84c7.safeProp = function (_0x10d684) {
          return !/^[$\w_]+$/.test(_0x10d684) || _0x1b84c7.isReserved(_0x10d684) ? "[\"" + _0x10d684.replace(_0x593c4f, "\\\\").replace(_0x366554, "\\\"") + "\"]" : '.' + _0x10d684;
        };
        _0x1b84c7.ucFirst = function (_0x1a6bab) {
          return _0x1a6bab.charAt(0x0).toUpperCase() + _0x1a6bab.substring(0x1);
        };
        var _0x4986b3 = /_([a-z])/g;
        _0x1b84c7.camelCase = function (_0x2f5ac9) {
          return _0x2f5ac9.substring(0x0, 0x1) + _0x2f5ac9.substring(0x1).replace(_0x4986b3, function (_0x438341, _0xaf093e) {
            return _0xaf093e.toUpperCase();
          });
        };
        _0x1b84c7.compareFieldsById = function (_0x1f4a54, _0x49f484) {
          return _0x1f4a54.id - _0x49f484.id;
        };
        _0x1b84c7.decorateType = function (_0x229ebb, _0x254b09) {
          if (_0x229ebb.$type) {
            if (_0x254b09 && _0x229ebb.$type.name !== _0x254b09) {
              _0x1b84c7.decorateRoot.remove(_0x229ebb.$type);
              _0x229ebb.$type.name = _0x254b09;
              _0x1b84c7.decorateRoot.add(_0x229ebb.$type);
            }
            return _0x229ebb.$type;
          }
          if (!_0x5a54fb) {
            _0x5a54fb = _0x4a4517("./type");
          }
          var _0x2e6153 = new _0x5a54fb(_0x254b09 || _0x229ebb.name);
          _0x1b84c7.decorateRoot.add(_0x2e6153);
          _0x2e6153.ctor = _0x229ebb;
          Object.defineProperty(_0x229ebb, "$type", {
            'value': _0x2e6153,
            'enumerable': false
          });
          Object.defineProperty(_0x229ebb.prototype, "$type", {
            'value': _0x2e6153,
            'enumerable': false
          });
          return _0x2e6153;
        };
        var _0x5e47c5 = 0x0;
        _0x1b84c7.decorateEnum = function (_0x5dca5d) {
          if (_0x5dca5d.$type) {
            return _0x5dca5d.$type;
          }
          if (!_0xc57a1a) {
            _0xc57a1a = _0x4a4517("./enum");
          }
          var _0x1156fa = new _0xc57a1a("Enum" + _0x5e47c5++, _0x5dca5d);
          _0x1b84c7.decorateRoot.add(_0x1156fa);
          Object.defineProperty(_0x5dca5d, '$type', {
            'value': _0x1156fa,
            'enumerable': false
          });
          return _0x1156fa;
        };
        _0x1b84c7.setProperty = function (_0x237fc8, _0xac7392, _0x53b7e1) {
          if ("object" != typeof _0x237fc8) {
            throw TypeError("dst must be an object");
          }
          if (!_0xac7392) {
            throw TypeError("path must be specified");
          }
          return function _0xff369c(_0x2e198b, _0xe6c52a, _0x4104be) {
            var _0x1d3642 = _0xe6c52a.shift();
            if ("__proto__" === _0x1d3642) {
              return _0x2e198b;
            }
            if (_0xe6c52a.length > 0x0) {
              _0x2e198b[_0x1d3642] = _0xff369c(_0x2e198b[_0x1d3642] || {}, _0xe6c52a, _0x4104be);
            } else {
              var _0x306cc6 = _0x2e198b[_0x1d3642];
              if (_0x306cc6) {
                _0x4104be = [].concat(_0x306cc6).concat(_0x4104be);
              }
              _0x2e198b[_0x1d3642] = _0x4104be;
            }
            return _0x2e198b;
          }(_0x237fc8, _0xac7392 = _0xac7392.split('.'), _0x53b7e1);
        };
        Object.defineProperty(_0x1b84c7, "decorateRoot", {
          'get': function () {
            return _0x1c4a54.decorated || (_0x1c4a54.decorated = new (_0x4a4517('./root'))());
          }
        });
        _0xe8c24f.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          './roots': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/roots.js",
          '@protobufjs/codegen': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js",
          '@protobufjs/fetch': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js",
          '@protobufjs/path': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/@protobufjs/path/index.js",
          './type': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/type.js',
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './root': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/root.js"
        };
      });
      _0x46f592.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/object.js', function (_0x117d5f, _0x269317, _0x5d9e71, _0xf7cd3d, _0x2091f6) {
        _0x5d9e71.exports = _0x30f1e1;
        _0x30f1e1.className = "ReflectionObject";
        var _0x45b308;
        var _0x430b09 = _0x269317("./util");
        function _0x30f1e1(_0x50f4d0, _0x8784ac) {
          if (!_0x430b09.isString(_0x50f4d0)) {
            throw TypeError("name must be a string");
          }
          if (_0x8784ac && !_0x430b09.isObject(_0x8784ac)) {
            throw TypeError("options must be an object");
          }
          this.options = _0x8784ac;
          this.parsedOptions = null;
          this.name = _0x50f4d0;
          this.parent = null;
          this.resolved = false;
          this.comment = null;
          this.filename = null;
        }
        Object.defineProperties(_0x30f1e1.prototype, {
          'root': {
            'get': function () {
              for (var _0x53f2e6 = this; null !== _0x53f2e6.parent;) {
                _0x53f2e6 = _0x53f2e6.parent;
              }
              return _0x53f2e6;
            }
          },
          'fullName': {
            'get': function () {
              var _0x3c059a = [this.name];
              for (var _0x27a5d1 = this.parent; _0x27a5d1;) {
                _0x3c059a.unshift(_0x27a5d1.name);
                _0x27a5d1 = _0x27a5d1.parent;
              }
              return _0x3c059a.join('.');
            }
          }
        });
        _0x30f1e1.prototype.toJSON = function () {
          throw Error();
        };
        _0x30f1e1.prototype.onAdd = function (_0x4175f8) {
          if (this.parent && this.parent !== _0x4175f8) {
            this.parent.remove(this);
          }
          this.parent = _0x4175f8;
          this.resolved = false;
          var _0x198d56 = _0x4175f8.root;
          if (_0x198d56 instanceof _0x45b308) {
            _0x198d56._handleAdd(this);
          }
        };
        _0x30f1e1.prototype.onRemove = function (_0x448a0f) {
          var _0x28835b = _0x448a0f.root;
          if (_0x28835b instanceof _0x45b308) {
            _0x28835b._handleRemove(this);
          }
          this.parent = null;
          this.resolved = false;
        };
        _0x30f1e1.prototype.resolve = function () {
          if (!this.resolved) {
            if (this.root instanceof _0x45b308) {
              this.resolved = true;
            }
          }
          return this;
        };
        _0x30f1e1.prototype.getOption = function (_0x362a65) {
          if (this.options) {
            return this.options[_0x362a65];
          }
        };
        _0x30f1e1.prototype.setOption = function (_0x591d3d, _0x1e91f4, _0x2f29fb) {
          if (!(_0x2f29fb && this.options && undefined !== this.options[_0x591d3d])) {
            (this.options || (this.options = {}))[_0x591d3d] = _0x1e91f4;
          }
          return this;
        };
        _0x30f1e1.prototype.setParsedOption = function (_0x1d0230, _0x1afe1f, _0x28618f) {
          if (!this.parsedOptions) {
            this.parsedOptions = [];
          }
          var _0x52de5d = this.parsedOptions;
          if (_0x28618f) {
            var _0x543a10 = _0x52de5d.find(function (_0x38a44d) {
              return Object.prototype.hasOwnProperty.call(_0x38a44d, _0x1d0230);
            });
            if (_0x543a10) {
              var _0x383cdb = _0x543a10[_0x1d0230];
              _0x430b09.setProperty(_0x383cdb, _0x28618f, _0x1afe1f);
            } else {
              (_0x543a10 = {})[_0x1d0230] = _0x430b09.setProperty({}, _0x28618f, _0x1afe1f);
              _0x52de5d.push(_0x543a10);
            }
          } else {
            var _0x8e145f = {
              _0x1d0230: _0x1afe1f
            };
            _0x52de5d.push(_0x8e145f);
          }
          return this;
        };
        _0x30f1e1.prototype.setOptions = function (_0x301830, _0x24727b) {
          if (_0x301830) {
            var _0x271262 = Object.keys(_0x301830);
            for (var _0x5cc36d = 0x0; _0x5cc36d < _0x271262.length; ++_0x5cc36d) {
              this.setOption(_0x271262[_0x5cc36d], _0x301830[_0x271262[_0x5cc36d]], _0x24727b);
            }
          }
          return this;
        };
        _0x30f1e1.prototype.toString = function () {
          var _0x1aa668 = this.constructor.className;
          var _0x618569 = this.fullName;
          return _0x618569.length ? _0x1aa668 + " " + _0x618569 : _0x1aa668;
        };
        _0x30f1e1._configure = function (_0x267609) {
          _0x45b308 = _0x267609;
        };
        _0x5d9e71.exports;
      }, function () {
        return {
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/enum.js", function (_0x1072c8, _0x164faa, _0x435e67, _0x502e47, _0x37b1f8) {
        _0x435e67.exports = _0x12ae8e;
        var _0x281230 = _0x164faa('./object');
        ((_0x12ae8e.prototype = Object.create(_0x281230.prototype)).constructor = _0x12ae8e).className = "Enum";
        var _0x48348e = _0x164faa("./namespace");
        var _0x587273 = _0x164faa('./util');
        function _0x12ae8e(_0x3c94f9, _0x3d5e5e, _0x3ade50, _0x8d8558, _0x8c37ed) {
          _0x281230.call(this, _0x3c94f9, _0x3ade50);
          if (_0x3d5e5e && "object" != typeof _0x3d5e5e) {
            throw TypeError("values must be an object");
          }
          this.valuesById = {};
          this.values = Object.create(this.valuesById);
          this.comment = _0x8d8558;
          this.comments = _0x8c37ed || {};
          this.reserved = undefined;
          if (_0x3d5e5e) {
            var _0x4e49bf = Object.keys(_0x3d5e5e);
            for (var _0x257b70 = 0x0; _0x257b70 < _0x4e49bf.length; ++_0x257b70) {
              if ("number" == typeof _0x3d5e5e[_0x4e49bf[_0x257b70]]) {
                this.valuesById[this.values[_0x4e49bf[_0x257b70]] = _0x3d5e5e[_0x4e49bf[_0x257b70]]] = _0x4e49bf[_0x257b70];
              }
            }
          }
        }
        _0x12ae8e.fromJSON = function (_0xb689cf, _0x29f1db) {
          var _0x2863d3 = new _0x12ae8e(_0xb689cf, _0x29f1db.values, _0x29f1db.options, _0x29f1db.comment, _0x29f1db.comments);
          _0x2863d3.reserved = _0x29f1db.reserved;
          return _0x2863d3;
        };
        _0x12ae8e.prototype.toJSON = function (_0x23b5f3) {
          var _0x10892f = !!_0x23b5f3 && Boolean(_0x23b5f3.keepComments);
          return _0x587273.toObject(['options', this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, 'comment', _0x10892f ? this.comment : undefined, "comments", _0x10892f ? this.comments : undefined]);
        };
        _0x12ae8e.prototype.add = function (_0x4f7bc6, _0x762835, _0x6b8beb) {
          if (!_0x587273.isString(_0x4f7bc6)) {
            throw TypeError("name must be a string");
          }
          if (!_0x587273.isInteger(_0x762835)) {
            throw TypeError("id must be an integer");
          }
          if (undefined !== this.values[_0x4f7bc6]) {
            throw Error("duplicate name '" + _0x4f7bc6 + "' in " + this);
          }
          if (this.isReservedId(_0x762835)) {
            throw Error("id " + _0x762835 + " is reserved in " + this);
          }
          if (this.isReservedName(_0x4f7bc6)) {
            throw Error("name '" + _0x4f7bc6 + "' is reserved in " + this);
          }
          if (undefined !== this.valuesById[_0x762835]) {
            if (!this.options || !this.options.allow_alias) {
              throw Error("duplicate id " + _0x762835 + " in " + this);
            }
            this.values[_0x4f7bc6] = _0x762835;
          } else {
            this.valuesById[this.values[_0x4f7bc6] = _0x762835] = _0x4f7bc6;
          }
          this.comments[_0x4f7bc6] = _0x6b8beb || null;
          return this;
        };
        _0x12ae8e.prototype.remove = function (_0x26bc5b) {
          if (!_0x587273.isString(_0x26bc5b)) {
            throw TypeError("name must be a string");
          }
          var _0x524d8a = this.values[_0x26bc5b];
          if (null == _0x524d8a) {
            throw Error("name '" + _0x26bc5b + "' does not exist in " + this);
          }
          delete this.valuesById[_0x524d8a];
          delete this.values[_0x26bc5b];
          delete this.comments[_0x26bc5b];
          return this;
        };
        _0x12ae8e.prototype.isReservedId = function (_0x209f4a) {
          return _0x48348e.isReservedId(this.reserved, _0x209f4a);
        };
        _0x12ae8e.prototype.isReservedName = function (_0x29f215) {
          return _0x48348e.isReservedName(this.reserved, _0x29f215);
        };
        _0x435e67.exports;
      }, function () {
        return {
          './object': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/object.js',
          './namespace': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46f592.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js', function (_0x564ce3, _0x2992c2, _0x521e4d, _0x204f95, _0x2396d4) {
        _0x521e4d.exports = function (_0x3e8720) {
          var _0x1f471a;
          var _0x2444ce = _0x20d49d.codegen(['m', 'w'], _0x3e8720.name + "$encode")("if(!w)")("w=Writer.create()");
          var _0x4c4864 = _0x3e8720.fieldsArray.slice().sort(_0x20d49d.compareFieldsById);
          for (var _0x159ffa = 0x0; _0x159ffa < _0x4c4864.length; ++_0x159ffa) {
            var _0x58a08d = _0x4c4864[_0x159ffa].resolve();
            var _0x37b898 = _0x3e8720._fieldsArray.indexOf(_0x58a08d);
            var _0x4c47ea = _0x58a08d.resolvedType instanceof _0x42bf49 ? 'int32' : _0x58a08d.type;
            var _0x40ac75 = _0x461d23.basic[_0x4c47ea];
            _0x1f471a = 'm' + _0x20d49d.safeProp(_0x58a08d.name);
            if (_0x58a08d.map) {
              _0x2444ce("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", _0x1f471a, _0x58a08d.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", _0x1f471a)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (_0x58a08d.id << 0x3 | 0x2) >>> 0x0, 0x8 | _0x461d23.mapKey[_0x58a08d.keyType], _0x58a08d.keyType);
              if (undefined === _0x40ac75) {
                _0x2444ce("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", _0x37b898, _0x1f471a);
              } else {
                _0x2444ce(".uint32(%i).%s(%s[ks[i]]).ldelim()", 0x10 | _0x40ac75, _0x4c47ea, _0x1f471a);
              }
              _0x2444ce('}')('}');
            } else if (_0x58a08d.repeated) {
              _0x2444ce('if(%s!=null&&%s.length){', _0x1f471a, _0x1f471a);
              if (_0x58a08d.packed && undefined !== _0x461d23.packed[_0x4c47ea]) {
                _0x2444ce("w.uint32(%i).fork()", (_0x58a08d.id << 0x3 | 0x2) >>> 0x0)("for(var i=0;i<%s.length;++i)", _0x1f471a)("w.%s(%s[i])", _0x4c47ea, _0x1f471a)("w.ldelim()");
              } else {
                _0x2444ce("for(var i=0;i<%s.length;++i)", _0x1f471a);
                if (undefined === _0x40ac75) {
                  if (_0x58a08d.resolvedType.group) {
                    _0x2444ce("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0x37b898, _0x1f471a + "[i]", (_0x58a08d.id << 0x3 | 0x3) >>> 0x0, (_0x58a08d.id << 0x3 | 0x4) >>> 0x0);
                  } else {
                    _0x2444ce("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", _0x37b898, _0x1f471a + "[i]", (_0x58a08d.id << 0x3 | 0x2) >>> 0x0);
                  }
                } else {
                  _0x2444ce("w.uint32(%i).%s(%s[i])", (_0x58a08d.id << 0x3 | _0x40ac75) >>> 0x0, _0x4c47ea, _0x1f471a);
                }
              }
              _0x2444ce('}');
            } else {
              if (_0x58a08d.optional) {
                _0x2444ce("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", _0x1f471a, _0x58a08d.name);
              }
              if (undefined === _0x40ac75) {
                if (_0x58a08d.resolvedType.group) {
                  _0x2444ce("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0x37b898, _0x1f471a, (_0x58a08d.id << 0x3 | 0x3) >>> 0x0, (_0x58a08d.id << 0x3 | 0x4) >>> 0x0);
                } else {
                  _0x2444ce("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", _0x37b898, _0x1f471a, (_0x58a08d.id << 0x3 | 0x2) >>> 0x0);
                }
              } else {
                _0x2444ce('w.uint32(%i).%s(%s)', (_0x58a08d.id << 0x3 | _0x40ac75) >>> 0x0, _0x4c47ea, _0x1f471a);
              }
            }
          }
          return _0x2444ce("return w");
        };
        var _0x42bf49 = _0x2992c2("./enum");
        var _0x461d23 = _0x2992c2("./types");
        var _0x20d49d = _0x2992c2('./util');
        _0x521e4d.exports;
      }, function () {
        return {
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46f592.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js', function (_0x79cb48, _0x529c08, _0x3ba50a, _0x255a99, _0x16ca2a) {
        var _0x6531a = _0x3ba50a.exports = _0x529c08("./index-minimal");
        _0x6531a.build = "light";
        _0x6531a.load = function (_0x4b9147, _0x4620c7, _0x1ec025) {
          if ('function' == typeof _0x4620c7) {
            _0x1ec025 = _0x4620c7;
            _0x4620c7 = new _0x6531a.Root();
          } else if (!_0x4620c7) {
            _0x4620c7 = new _0x6531a.Root();
          }
          return _0x4620c7.load(_0x4b9147, _0x1ec025);
        };
        _0x6531a.loadSync = function (_0x1ae240, _0x4bfd32) {
          if (!_0x4bfd32) {
            _0x4bfd32 = new _0x6531a.Root();
          }
          return _0x4bfd32.loadSync(_0x1ae240);
        };
        _0x6531a.encoder = _0x529c08("./encoder");
        _0x6531a.decoder = _0x529c08("./decoder");
        _0x6531a.verifier = _0x529c08("./verifier");
        _0x6531a.converter = _0x529c08("./converter");
        _0x6531a.ReflectionObject = _0x529c08("./object");
        _0x6531a.Namespace = _0x529c08('./namespace');
        _0x6531a.Root = _0x529c08("./root");
        _0x6531a.Enum = _0x529c08("./enum");
        _0x6531a.Type = _0x529c08("./type");
        _0x6531a.Field = _0x529c08('./field');
        _0x6531a.OneOf = _0x529c08('./oneof');
        _0x6531a.MapField = _0x529c08("./mapfield");
        _0x6531a.Service = _0x529c08('./service');
        _0x6531a.Method = _0x529c08('./method');
        _0x6531a.Message = _0x529c08("./message");
        _0x6531a.wrappers = _0x529c08('./wrappers');
        _0x6531a.types = _0x529c08('./types');
        _0x6531a.util = _0x529c08("./util");
        _0x6531a.ReflectionObject._configure(_0x6531a.Root);
        _0x6531a.Namespace._configure(_0x6531a.Type, _0x6531a.Service, _0x6531a.Enum);
        _0x6531a.Root._configure(_0x6531a.Type);
        _0x6531a.Field._configure(_0x6531a.Type);
        _0x3ba50a.exports;
      }, function () {
        return {
          './index-minimal': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js',
          './encoder': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js',
          './decoder': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          './verifier': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          './converter': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          './object': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/object.js',
          './namespace': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './root': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './type': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/type.js',
          './field': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './oneof': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './mapfield': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './service': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/service.js',
          './method': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          './message': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          './wrappers': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js",
          './types': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js", function (_0x27b37b, _0x466bdf, _0x43bd24, _0x345d40, _0xf6056f) {
        _0x43bd24.exports = _0x1f9f4f;
        var _0x5849d1 = /[\s{}=;:[\],'"()<>]/g;
        var _0x199990 = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
        var _0x222071 = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
        var _0xf00a9d = /^ *[*/]+ */;
        var _0x2bd2fe = /^\s*\*?\/*/;
        var _0x1d7f29 = /\n/g;
        var _0x466b4b = /\s/;
        var _0x17faea = /\\(.?)/g;
        var _0x4b4f16 = {
          0x0: "\0",
          'r': "\r",
          'n': "\n",
          't': "\t"
        };
        function _0x43975e(_0x5db9b3) {
          return _0x5db9b3.replace(_0x17faea, function (_0x57f995, _0x384b1b) {
            switch (_0x384b1b) {
              case "\\":
              case '':
                return _0x384b1b;
              default:
                return _0x4b4f16[_0x384b1b] || '';
            }
          });
        }
        function _0x1f9f4f(_0x20f39f, _0x3d9529) {
          _0x20f39f = _0x20f39f.toString();
          var _0x3a1c01 = 0x0;
          var _0x4f5c7a = _0x20f39f.length;
          var _0x11441e = 0x1;
          var _0x1cefcd = null;
          var _0x7c6b2b = null;
          var _0x7aa0c4 = 0x0;
          var _0xd6f41e = false;
          var _0x1c4861 = false;
          var _0x1b3690 = [];
          var _0xe199c0 = null;
          function _0x51dd46(_0x502113, _0x482d84, _0x39df43) {
            _0x1cefcd = _0x20f39f.charAt(_0x502113++);
            _0x7aa0c4 = _0x11441e;
            _0xd6f41e = false;
            _0x1c4861 = _0x39df43;
            var _0x41a28e;
            var _0xe72835 = _0x502113 - (_0x3d9529 ? 0x2 : 0x3);
            do {
              if (--_0xe72835 < 0x0 || "\n" === (_0x41a28e = _0x20f39f.charAt(_0xe72835))) {
                _0xd6f41e = true;
                break;
              }
            } while (" " === _0x41a28e || "\t" === _0x41a28e);
            var _0x496d1c = _0x20f39f.substring(_0x502113, _0x482d84).split(_0x1d7f29);
            for (var _0x897a4b = 0x0; _0x897a4b < _0x496d1c.length; ++_0x897a4b) {
              _0x496d1c[_0x897a4b] = _0x496d1c[_0x897a4b].replace(_0x3d9529 ? _0x2bd2fe : _0xf00a9d, '').trim();
            }
            _0x7c6b2b = _0x496d1c.join("\n").trim();
          }
          function _0x45e559(_0x379601) {
            var _0x4d7b0b = _0x4aafd5(_0x379601);
            var _0xc03f40 = _0x20f39f.substring(_0x379601, _0x4d7b0b);
            return /^\s*\/{1,2}/.test(_0xc03f40);
          }
          function _0x4aafd5(_0x2daf5d) {
            for (var _0x677fa0 = _0x2daf5d; _0x677fa0 < _0x4f5c7a && "\n" !== _0x20f39f.charAt(_0x677fa0);) {
              _0x677fa0++;
            }
            return _0x677fa0;
          }
          function _0x28df0f() {
            if (_0x1b3690.length > 0x0) {
              return _0x1b3690.shift();
            }
            if (_0xe199c0) {
              return function () {
                var _0x33ae11 = "'" === _0xe199c0 ? _0x222071 : _0x199990;
                _0x33ae11.lastIndex = _0x3a1c01 - 0x1;
                var _0x556e6f = _0x33ae11.exec(_0x20f39f);
                if (!_0x556e6f) {
                  throw Error("illegal string (line " + _0x11441e + ')');
                }
                _0x3a1c01 = _0x33ae11.lastIndex;
                _0x14768a(_0xe199c0);
                _0xe199c0 = null;
                return _0x43975e(_0x556e6f[0x1]);
              }();
            }
            var _0x1111ce;
            var _0x6f6ecd;
            var _0x503cfb;
            var _0xe0688f;
            var _0x551e97;
            var _0x3b94c1 = 0x0 === _0x3a1c01;
            do {
              if (_0x3a1c01 === _0x4f5c7a) {
                return null;
              }
              for (_0x1111ce = false; _0x466b4b.test(_0x503cfb = _0x20f39f.charAt(_0x3a1c01));) {
                if ("\n" === _0x503cfb) {
                  _0x3b94c1 = true;
                  ++_0x11441e;
                }
                if (++_0x3a1c01 === _0x4f5c7a) {
                  return null;
                }
              }
              if ('/' === _0x20f39f.charAt(_0x3a1c01)) {
                if (++_0x3a1c01 === _0x4f5c7a) {
                  throw Error("illegal comment (line " + _0x11441e + ')');
                }
                if ('/' === _0x20f39f.charAt(_0x3a1c01)) {
                  if (_0x3d9529) {
                    _0xe0688f = _0x3a1c01;
                    _0x551e97 = false;
                    if (_0x45e559(_0x3a1c01)) {
                      _0x551e97 = true;
                      do {
                        if ((_0x3a1c01 = _0x4aafd5(_0x3a1c01)) === _0x4f5c7a) {
                          break;
                        }
                        _0x3a1c01++;
                      } while (_0x45e559(_0x3a1c01));
                    } else {
                      _0x3a1c01 = Math.min(_0x4f5c7a, _0x4aafd5(_0x3a1c01) + 0x1);
                    }
                    if (_0x551e97) {
                      _0x51dd46(_0xe0688f, _0x3a1c01, _0x3b94c1);
                    }
                    _0x11441e++;
                    _0x1111ce = true;
                  } else {
                    for (_0x551e97 = '/' === _0x20f39f.charAt(_0xe0688f = _0x3a1c01 + 0x1); "\n" !== _0x20f39f.charAt(++_0x3a1c01);) {
                      if (_0x3a1c01 === _0x4f5c7a) {
                        return null;
                      }
                    }
                    ++_0x3a1c01;
                    if (_0x551e97) {
                      _0x51dd46(_0xe0688f, _0x3a1c01 - 0x1, _0x3b94c1);
                    }
                    ++_0x11441e;
                    _0x1111ce = true;
                  }
                } else {
                  if ('*' !== (_0x503cfb = _0x20f39f.charAt(_0x3a1c01))) {
                    return '/';
                  }
                  _0xe0688f = _0x3a1c01 + 0x1;
                  _0x551e97 = _0x3d9529 || '*' === _0x20f39f.charAt(_0xe0688f);
                  do {
                    if ("\n" === _0x503cfb) {
                      ++_0x11441e;
                    }
                    if (++_0x3a1c01 === _0x4f5c7a) {
                      throw Error("illegal comment (line " + _0x11441e + ')');
                    }
                    _0x6f6ecd = _0x503cfb;
                    _0x503cfb = _0x20f39f.charAt(_0x3a1c01);
                  } while ('*' !== _0x6f6ecd || '/' !== _0x503cfb);
                  ++_0x3a1c01;
                  if (_0x551e97) {
                    _0x51dd46(_0xe0688f, _0x3a1c01 - 0x2, _0x3b94c1);
                  }
                  _0x1111ce = true;
                }
              }
            } while (_0x1111ce);
            var _0x222a37 = _0x3a1c01;
            _0x5849d1.lastIndex = 0x0;
            if (!_0x5849d1.test(_0x20f39f.charAt(_0x222a37++))) {
              for (; _0x222a37 < _0x4f5c7a && !_0x5849d1.test(_0x20f39f.charAt(_0x222a37));) {
                ++_0x222a37;
              }
            }
            var _0xddc24e = _0x20f39f.substring(_0x3a1c01, _0x3a1c01 = _0x222a37);
            if (!("\"" !== _0xddc24e && "'" !== _0xddc24e)) {
              _0xe199c0 = _0xddc24e;
            }
            return _0xddc24e;
          }
          function _0x14768a(_0x322526) {
            _0x1b3690.push(_0x322526);
          }
          function _0x9f3cb2() {
            if (!_0x1b3690.length) {
              var _0x4dcbfa = _0x28df0f();
              if (null === _0x4dcbfa) {
                return null;
              }
              _0x14768a(_0x4dcbfa);
            }
            return _0x1b3690[0x0];
          }
          return Object.defineProperty({
            'next': _0x28df0f,
            'peek': _0x9f3cb2,
            'push': _0x14768a,
            'skip': function (_0x1fd35d, _0x7990af) {
              var _0x2cf7f9 = _0x9f3cb2();
              if (_0x2cf7f9 === _0x1fd35d) {
                _0x28df0f();
                return true;
              }
              if (!_0x7990af) {
                throw Error("illegal " + ("token '" + _0x2cf7f9 + "', '" + _0x1fd35d + "' expected") + " (line " + _0x11441e + ')');
              }
              return false;
            },
            'cmnt': function (_0xfd5b3c) {
              var _0x558466 = null;
              if (undefined === _0xfd5b3c) {
                if (_0x7aa0c4 === _0x11441e - 0x1 && (_0x3d9529 || '*' === _0x1cefcd || _0xd6f41e)) {
                  _0x558466 = _0x1c4861 ? _0x7c6b2b : null;
                }
              } else {
                if (_0x7aa0c4 < _0xfd5b3c) {
                  _0x9f3cb2();
                }
                if (!(_0x7aa0c4 !== _0xfd5b3c || _0xd6f41e || !_0x3d9529 && '/' !== _0x1cefcd)) {
                  _0x558466 = _0x1c4861 ? null : _0x7c6b2b;
                }
              }
              return _0x558466;
            }
          }, "line", {
            'get': function () {
              return _0x11441e;
            }
          });
        }
        _0x1f9f4f.unescape = _0x43975e;
        _0x43bd24.exports;
      }, {});
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/parse.js", function (_0x12e588, _0x482e86, _0xc79815, _0xe5d0eb, _0xb2e1bd) {
        _0xc79815.exports = _0x57173b;
        _0x57173b.filename = null;
        _0x57173b.defaults = {
          'keepCase': false
        };
        var _0x245bd0 = _0x482e86('./tokenize');
        var _0x1d2e7e = _0x482e86("./root");
        var _0x218ed9 = _0x482e86('./type');
        var _0x2f2ec7 = _0x482e86("./field");
        var _0x77dc9e = _0x482e86('./mapfield');
        var _0x31d8b5 = _0x482e86("./oneof");
        var _0x1f7cd7 = _0x482e86("./enum");
        var _0x4d6a99 = _0x482e86('./service');
        var _0x237e7e = _0x482e86("./method");
        var _0x178fbc = _0x482e86("./types");
        var _0x3c0b1c = _0x482e86("./util");
        var _0x142c77 = /^[1-9][0-9]*$/;
        var _0x583c0b = /^-?[1-9][0-9]*$/;
        var _0x5b0d1d = /^0[x][0-9a-fA-F]+$/;
        var _0x266e3f = /^-?0[x][0-9a-fA-F]+$/;
        var _0x4091d4 = /^0[0-7]+$/;
        var _0x3c26ef = /^-?0[0-7]+$/;
        var _0x3a146f = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
        var _0x357c98 = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
        var _0x204b8d = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
        var _0x2484b9 = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
        function _0x57173b(_0x364ef7, _0x571fc6, _0xc7698) {
          if (!(_0x571fc6 instanceof _0x1d2e7e)) {
            _0xc7698 = _0x571fc6;
            _0x571fc6 = new _0x1d2e7e();
          }
          if (!_0xc7698) {
            _0xc7698 = _0x57173b.defaults;
          }
          var _0x561291;
          var _0x23ecf2;
          var _0x5a8872;
          var _0x3a9254;
          var _0x5048ee;
          var _0x2a9ad9 = _0xc7698.preferTrailingComment || false;
          var _0x316c56 = _0x245bd0(_0x364ef7, _0xc7698.alternateCommentMode || false);
          var _0xe1ceeb = _0x316c56.next;
          var _0x4811d5 = _0x316c56.push;
          var _0x3b3ef3 = _0x316c56.peek;
          var _0x213ba6 = _0x316c56.skip;
          var _0xd95371 = _0x316c56.cmnt;
          var _0x347525 = true;
          var _0x4583b0 = false;
          var _0xa7b35c = _0x571fc6;
          var _0x416d10 = _0xc7698.keepCase ? function (_0x471527) {
            return _0x471527;
          } : _0x3c0b1c.camelCase;
          function _0x575636(_0x5efbe4, _0x2951cb, _0x720d89) {
            var _0x3dc4aa = _0x57173b.filename;
            if (!_0x720d89) {
              _0x57173b.filename = null;
            }
            return Error("illegal " + (_0x2951cb || "token") + " '" + _0x5efbe4 + "' (" + (_0x3dc4aa ? _0x3dc4aa + ", " : '') + "line " + _0x316c56.line + ')');
          }
          function _0x1e72ad() {
            var _0x18ad97;
            var _0x49f6b0 = [];
            do {
              if ("\"" !== (_0x18ad97 = _0xe1ceeb()) && "'" !== _0x18ad97) {
                throw _0x575636(_0x18ad97);
              }
              _0x49f6b0.push(_0xe1ceeb());
              _0x213ba6(_0x18ad97);
              _0x18ad97 = _0x3b3ef3();
            } while ("\"" === _0x18ad97 || "'" === _0x18ad97);
            return _0x49f6b0.join('');
          }
          function _0x38f666(_0xda7f98) {
            var _0x26232a = _0xe1ceeb();
            switch (_0x26232a) {
              case "'":
              case "\"":
                _0x4811d5(_0x26232a);
                return _0x1e72ad();
              case "true":
              case "TRUE":
                return true;
              case "false":
              case "FALSE":
                return false;
            }
            try {
              return function (_0x200f92, _0x3227df) {
                var _0x29c34b = 0x1;
                if ('-' === _0x200f92.charAt(0x0)) {
                  _0x29c34b = -0x1;
                  _0x200f92 = _0x200f92.substring(0x1);
                }
                switch (_0x200f92) {
                  case "inf":
                  case 'INF':
                  case "Inf":
                    return _0x29c34b * Infinity;
                  case "nan":
                  case "NAN":
                  case "Nan":
                  case "NaN":
                    return NaN;
                  case '0':
                    return 0x0;
                }
                if (_0x142c77.test(_0x200f92)) {
                  return _0x29c34b * parseInt(_0x200f92, 0xa);
                }
                if (_0x5b0d1d.test(_0x200f92)) {
                  return _0x29c34b * parseInt(_0x200f92, 0x10);
                }
                if (_0x4091d4.test(_0x200f92)) {
                  return _0x29c34b * parseInt(_0x200f92, 0x8);
                }
                if (_0x3a146f.test(_0x200f92)) {
                  return _0x29c34b * parseFloat(_0x200f92);
                }
                throw _0x575636(_0x200f92, 'number', _0x3227df);
              }(_0x26232a, true);
            } catch (_0x2c334d) {
              if (_0xda7f98 && _0x204b8d.test(_0x26232a)) {
                return _0x26232a;
              }
              throw _0x575636(_0x26232a, "value");
            }
          }
          function _0x14bf12(_0x4c7fc5, _0x4e9b2d) {
            var _0x455580;
            var _0x466c6a;
            do {
              if (!_0x4e9b2d || "\"" !== (_0x455580 = _0x3b3ef3()) && "'" !== _0x455580) {
                _0x4c7fc5.push([_0x466c6a = _0x24c446(_0xe1ceeb()), _0x213ba6('to', true) ? _0x24c446(_0xe1ceeb()) : _0x466c6a]);
              } else {
                _0x4c7fc5.push(_0x1e72ad());
              }
            } while (_0x213ba6(',', true));
            _0x213ba6(';');
          }
          function _0x24c446(_0x488312, _0x2cbb12) {
            switch (_0x488312) {
              case "max":
              case "MAX":
              case "Max":
                return 0x1fffffff;
              case '0':
                return 0x0;
            }
            if (!_0x2cbb12 && '-' === _0x488312.charAt(0x0)) {
              throw _0x575636(_0x488312, 'id');
            }
            if (_0x583c0b.test(_0x488312)) {
              return parseInt(_0x488312, 0xa);
            }
            if (_0x266e3f.test(_0x488312)) {
              return parseInt(_0x488312, 0x10);
            }
            if (_0x3c26ef.test(_0x488312)) {
              return parseInt(_0x488312, 0x8);
            }
            throw _0x575636(_0x488312, 'id');
          }
          function _0x1ffadb() {
            if (undefined !== _0x561291) {
              throw _0x575636("package");
            }
            _0x561291 = _0xe1ceeb();
            if (!_0x204b8d.test(_0x561291)) {
              throw _0x575636(_0x561291, "name");
            }
            _0xa7b35c = _0xa7b35c.define(_0x561291);
            _0x213ba6(';');
          }
          function _0x5aef0b() {
            var _0x3a05d3;
            var _0x569ff9 = _0x3b3ef3();
            switch (_0x569ff9) {
              case "weak":
                _0x3a05d3 = _0x5a8872 || (_0x5a8872 = []);
                _0xe1ceeb();
                break;
              case "public":
                _0xe1ceeb();
              default:
                _0x3a05d3 = _0x23ecf2 || (_0x23ecf2 = []);
            }
            _0x569ff9 = _0x1e72ad();
            _0x213ba6(';');
            _0x3a05d3.push(_0x569ff9);
          }
          function _0x4dd427() {
            _0x213ba6('=');
            _0x3a9254 = _0x1e72ad();
            if (!(_0x4583b0 = "proto3" === _0x3a9254) && "proto2" !== _0x3a9254) {
              throw _0x575636(_0x3a9254, "syntax");
            }
            _0x213ba6(';');
          }
          function _0x510437(_0x35089a, _0x4cb68e) {
            switch (_0x4cb68e) {
              case "option":
                _0x2db7ae(_0x35089a, _0x4cb68e);
                _0x213ba6(';');
                return true;
              case 'message':
                (function (_0x53945a, _0x53c35d) {
                  if (!_0x357c98.test(_0x53c35d = _0xe1ceeb())) {
                    throw _0x575636(_0x53c35d, "type name");
                  }
                  var _0x41b78c = new _0x218ed9(_0x53c35d);
                  _0x4227b7(_0x41b78c, function (_0x5f21b5) {
                    if (!_0x510437(_0x41b78c, _0x5f21b5)) {
                      switch (_0x5f21b5) {
                        case 'map':
                          !function (_0x47692c) {
                            _0x213ba6('<');
                            var _0x329718 = _0xe1ceeb();
                            if (undefined === _0x178fbc.mapKey[_0x329718]) {
                              throw _0x575636(_0x329718, "type");
                            }
                            _0x213ba6(',');
                            var _0x5c1364 = _0xe1ceeb();
                            if (!_0x204b8d.test(_0x5c1364)) {
                              throw _0x575636(_0x5c1364, 'type');
                            }
                            _0x213ba6('>');
                            var _0x2dcc33 = _0xe1ceeb();
                            if (!_0x357c98.test(_0x2dcc33)) {
                              throw _0x575636(_0x2dcc33, 'name');
                            }
                            _0x213ba6('=');
                            var _0x4c36f0 = new _0x77dc9e(_0x416d10(_0x2dcc33), _0x24c446(_0xe1ceeb()), _0x329718, _0x5c1364);
                            _0x4227b7(_0x4c36f0, function (_0x11b51a) {
                              if ("option" !== _0x11b51a) {
                                throw _0x575636(_0x11b51a);
                              }
                              _0x2db7ae(_0x4c36f0, _0x11b51a);
                              _0x213ba6(';');
                            }, function () {
                              _0x2cc878(_0x4c36f0);
                            });
                            _0x47692c.add(_0x4c36f0);
                          }(_0x41b78c);
                          break;
                        case "required":
                        case "repeated":
                          _0x28f410(_0x41b78c, _0x5f21b5);
                          break;
                        case "optional":
                          _0x28f410(_0x41b78c, _0x4583b0 ? 'proto3_optional' : 'optional');
                          break;
                        case "oneof":
                          !function (_0x13f12e, _0x95e9d) {
                            if (!_0x357c98.test(_0x95e9d = _0xe1ceeb())) {
                              throw _0x575636(_0x95e9d, "name");
                            }
                            var _0x4dfee2 = new _0x31d8b5(_0x416d10(_0x95e9d));
                            _0x4227b7(_0x4dfee2, function (_0x2a5152) {
                              if ('option' === _0x2a5152) {
                                _0x2db7ae(_0x4dfee2, _0x2a5152);
                                _0x213ba6(';');
                              } else {
                                _0x4811d5(_0x2a5152);
                                _0x28f410(_0x4dfee2, "optional");
                              }
                            });
                            _0x13f12e.add(_0x4dfee2);
                          }(_0x41b78c, _0x5f21b5);
                          break;
                        case "extensions":
                          _0x14bf12(_0x41b78c.extensions || (_0x41b78c.extensions = []));
                          break;
                        case "reserved":
                          _0x14bf12(_0x41b78c.reserved || (_0x41b78c.reserved = []), true);
                          break;
                        default:
                          if (!_0x4583b0 || !_0x204b8d.test(_0x5f21b5)) {
                            throw _0x575636(_0x5f21b5);
                          }
                          _0x4811d5(_0x5f21b5);
                          _0x28f410(_0x41b78c, "optional");
                      }
                    }
                  });
                  _0x53945a.add(_0x41b78c);
                })(_0x35089a, _0x4cb68e);
                return true;
              case "enum":
                (function (_0x3bac6a, _0x16aba3) {
                  if (!_0x357c98.test(_0x16aba3 = _0xe1ceeb())) {
                    throw _0x575636(_0x16aba3, "name");
                  }
                  var _0x5c84c8 = new _0x1f7cd7(_0x16aba3);
                  _0x4227b7(_0x5c84c8, function (_0x5d100e) {
                    switch (_0x5d100e) {
                      case "option":
                        _0x2db7ae(_0x5c84c8, _0x5d100e);
                        _0x213ba6(';');
                        break;
                      case 'reserved':
                        _0x14bf12(_0x5c84c8.reserved || (_0x5c84c8.reserved = []), true);
                        break;
                      default:
                        !function (_0x19a142, _0x274300) {
                          if (!_0x357c98.test(_0x274300)) {
                            throw _0x575636(_0x274300, "name");
                          }
                          _0x213ba6('=');
                          var _0x551cb2 = _0x24c446(_0xe1ceeb(), true);
                          var _0x11c850 = {};
                          _0x4227b7(_0x11c850, function (_0x239de7) {
                            if ("option" !== _0x239de7) {
                              throw _0x575636(_0x239de7);
                            }
                            _0x2db7ae(_0x11c850, _0x239de7);
                            _0x213ba6(';');
                          }, function () {
                            _0x2cc878(_0x11c850);
                          });
                          _0x19a142.add(_0x274300, _0x551cb2, _0x11c850.comment);
                        }(_0x5c84c8, _0x5d100e);
                    }
                  });
                  _0x3bac6a.add(_0x5c84c8);
                })(_0x35089a, _0x4cb68e);
                return true;
              case 'service':
                (function (_0x3521bc, _0x3307ec) {
                  if (!_0x357c98.test(_0x3307ec = _0xe1ceeb())) {
                    throw _0x575636(_0x3307ec, "service name");
                  }
                  var _0x13aa3e = new _0x4d6a99(_0x3307ec);
                  _0x4227b7(_0x13aa3e, function (_0x3b7f94) {
                    if (!_0x510437(_0x13aa3e, _0x3b7f94)) {
                      if ("rpc" !== _0x3b7f94) {
                        throw _0x575636(_0x3b7f94);
                      }
                      !function (_0x3d611c, _0x14f16e) {
                        var _0x3d4d9a = _0xd95371();
                        var _0x4aee49 = _0x14f16e;
                        if (!_0x357c98.test(_0x14f16e = _0xe1ceeb())) {
                          throw _0x575636(_0x14f16e, 'name');
                        }
                        var _0x361b59;
                        var _0x41d44c;
                        var _0xbd5ce8;
                        var _0x410989;
                        var _0x2dcf0c = _0x14f16e;
                        _0x213ba6('(');
                        if (_0x213ba6("stream", true)) {
                          _0x41d44c = true;
                        }
                        if (!_0x204b8d.test(_0x14f16e = _0xe1ceeb())) {
                          throw _0x575636(_0x14f16e);
                        }
                        _0x361b59 = _0x14f16e;
                        _0x213ba6(')');
                        _0x213ba6("returns");
                        _0x213ba6('(');
                        if (_0x213ba6("stream", true)) {
                          _0x410989 = true;
                        }
                        if (!_0x204b8d.test(_0x14f16e = _0xe1ceeb())) {
                          throw _0x575636(_0x14f16e);
                        }
                        _0xbd5ce8 = _0x14f16e;
                        _0x213ba6(')');
                        var _0x360bce = new _0x237e7e(_0x2dcf0c, _0x4aee49, _0x361b59, _0xbd5ce8, _0x41d44c, _0x410989);
                        _0x360bce.comment = _0x3d4d9a;
                        _0x4227b7(_0x360bce, function (_0xa154ac) {
                          if ("option" !== _0xa154ac) {
                            throw _0x575636(_0xa154ac);
                          }
                          _0x2db7ae(_0x360bce, _0xa154ac);
                          _0x213ba6(';');
                        });
                        _0x3d611c.add(_0x360bce);
                      }(_0x13aa3e, _0x3b7f94);
                    }
                  });
                  _0x3521bc.add(_0x13aa3e);
                })(_0x35089a, _0x4cb68e);
                return true;
              case "extend":
                (function (_0x4e6c53, _0x4e3001) {
                  if (!_0x204b8d.test(_0x4e3001 = _0xe1ceeb())) {
                    throw _0x575636(_0x4e3001, 'reference');
                  }
                  var _0x3b00cf = _0x4e3001;
                  _0x4227b7(null, function (_0x450f39) {
                    switch (_0x450f39) {
                      case "required":
                      case "repeated":
                        _0x28f410(_0x4e6c53, _0x450f39, _0x3b00cf);
                        break;
                      case 'optional':
                        _0x28f410(_0x4e6c53, _0x4583b0 ? 'proto3_optional' : "optional", _0x3b00cf);
                        break;
                      default:
                        if (!_0x4583b0 || !_0x204b8d.test(_0x450f39)) {
                          throw _0x575636(_0x450f39);
                        }
                        _0x4811d5(_0x450f39);
                        _0x28f410(_0x4e6c53, 'optional', _0x3b00cf);
                    }
                  });
                })(_0x35089a, _0x4cb68e);
                return true;
            }
            return false;
          }
          function _0x4227b7(_0x87b150, _0x580829, _0xdd52b) {
            var _0x2ba86a = _0x316c56.line;
            if (_0x87b150) {
              if ('string' != typeof _0x87b150.comment) {
                _0x87b150.comment = _0xd95371();
              }
              _0x87b150.filename = _0x57173b.filename;
            }
            if (_0x213ba6('{', true)) {
              for (var _0x22ec3b; '}' !== (_0x22ec3b = _0xe1ceeb());) {
                _0x580829(_0x22ec3b);
              }
              _0x213ba6(';', true);
            } else {
              if (_0xdd52b) {
                _0xdd52b();
              }
              _0x213ba6(';');
              if (_0x87b150 && ("string" != typeof _0x87b150.comment || _0x2a9ad9)) {
                _0x87b150.comment = _0xd95371(_0x2ba86a) || _0x87b150.comment;
              }
            }
          }
          function _0x28f410(_0x2e5a1d, _0x5c9f5a, _0x5d30c1) {
            var _0x106920 = _0xe1ceeb();
            if ("group" !== _0x106920) {
              if (!_0x204b8d.test(_0x106920)) {
                throw _0x575636(_0x106920, "type");
              }
              var _0x348a1b = _0xe1ceeb();
              if (!_0x357c98.test(_0x348a1b)) {
                throw _0x575636(_0x348a1b, "name");
              }
              _0x348a1b = _0x416d10(_0x348a1b);
              _0x213ba6('=');
              var _0x282282 = new _0x2f2ec7(_0x348a1b, _0x24c446(_0xe1ceeb()), _0x106920, _0x5c9f5a, _0x5d30c1);
              _0x4227b7(_0x282282, function (_0x50e820) {
                if ("option" !== _0x50e820) {
                  throw _0x575636(_0x50e820);
                }
                _0x2db7ae(_0x282282, _0x50e820);
                _0x213ba6(';');
              }, function () {
                _0x2cc878(_0x282282);
              });
              if ("proto3_optional" === _0x5c9f5a) {
                var _0x5ee9a2 = new _0x31d8b5('_' + _0x348a1b);
                _0x282282.setOption('proto3_optional', true);
                _0x5ee9a2.add(_0x282282);
                _0x2e5a1d.add(_0x5ee9a2);
              } else {
                _0x2e5a1d.add(_0x282282);
              }
              if (!(_0x4583b0 || !_0x282282.repeated || undefined === _0x178fbc.packed[_0x106920] && undefined !== _0x178fbc.basic[_0x106920])) {
                _0x282282.setOption('packed', false, true);
              }
            } else {
              !function (_0x1c4b63, _0x4ff52e) {
                var _0x48c71d = _0xe1ceeb();
                if (!_0x357c98.test(_0x48c71d)) {
                  throw _0x575636(_0x48c71d, 'name');
                }
                var _0x3ba4e3 = _0x3c0b1c.lcFirst(_0x48c71d);
                if (_0x48c71d === _0x3ba4e3) {
                  _0x48c71d = _0x3c0b1c.ucFirst(_0x48c71d);
                }
                _0x213ba6('=');
                var _0x551dc5 = _0x24c446(_0xe1ceeb());
                var _0x4cff04 = new _0x218ed9(_0x48c71d);
                _0x4cff04.group = true;
                var _0x530dc2 = new _0x2f2ec7(_0x3ba4e3, _0x551dc5, _0x48c71d, _0x4ff52e);
                _0x530dc2.filename = _0x57173b.filename;
                _0x4227b7(_0x4cff04, function (_0xf7ef97) {
                  switch (_0xf7ef97) {
                    case 'option':
                      _0x2db7ae(_0x4cff04, _0xf7ef97);
                      _0x213ba6(';');
                      break;
                    case "required":
                    case "repeated":
                      _0x28f410(_0x4cff04, _0xf7ef97);
                      break;
                    case "optional":
                      _0x28f410(_0x4cff04, _0x4583b0 ? "proto3_optional" : "optional");
                      break;
                    default:
                      throw _0x575636(_0xf7ef97);
                  }
                });
                _0x1c4b63.add(_0x4cff04).add(_0x530dc2);
              }(_0x2e5a1d, _0x5c9f5a);
            }
          }
          function _0x2db7ae(_0x8747e9, _0x5812b8) {
            var _0x39392a = _0x213ba6('(', true);
            if (!_0x204b8d.test(_0x5812b8 = _0xe1ceeb())) {
              throw _0x575636(_0x5812b8, "name");
            }
            var _0x2a19eb;
            var _0x4ed3e7 = _0x5812b8;
            var _0x409f76 = _0x4ed3e7;
            if (_0x39392a) {
              _0x213ba6(')');
              _0x409f76 = _0x4ed3e7 = '(' + _0x4ed3e7 + ')';
              _0x5812b8 = _0x3b3ef3();
              if (_0x2484b9.test(_0x5812b8)) {
                _0x2a19eb = _0x5812b8.substr(0x1);
                _0x4ed3e7 += _0x5812b8;
                _0xe1ceeb();
              }
            }
            _0x213ba6('=');
            (function (_0x281ea6, _0x5b4e99, _0x2d2ed9, _0x398b60) {
              if (_0x281ea6.setParsedOption) {
                _0x281ea6.setParsedOption(_0x5b4e99, _0x2d2ed9, _0x398b60);
              }
            })(_0x8747e9, _0x409f76, _0x175fcc(_0x8747e9, _0x4ed3e7), _0x2a19eb);
          }
          function _0x175fcc(_0x4131eb, _0x1d31cf) {
            if (_0x213ba6('{', true)) {
              for (var _0x3b4838 = {}; !_0x213ba6('}', true);) {
                if (!_0x357c98.test(_0x5048ee = _0xe1ceeb())) {
                  throw _0x575636(_0x5048ee, "name");
                }
                var _0x4a77a0;
                var _0x6d7f48 = _0x5048ee;
                if ('{' === _0x3b3ef3()) {
                  _0x4a77a0 = _0x175fcc(_0x4131eb, _0x1d31cf + '.' + _0x5048ee);
                } else {
                  _0x213ba6(':');
                  if ('{' === _0x3b3ef3()) {
                    _0x4a77a0 = _0x175fcc(_0x4131eb, _0x1d31cf + '.' + _0x5048ee);
                  } else {
                    _0x4a77a0 = _0x38f666(true);
                    _0x33edbe(_0x4131eb, _0x1d31cf + '.' + _0x5048ee, _0x4a77a0);
                  }
                }
                var _0x75a270 = _0x3b4838[_0x6d7f48];
                if (_0x75a270) {
                  _0x4a77a0 = [].concat(_0x75a270).concat(_0x4a77a0);
                }
                _0x3b4838[_0x6d7f48] = _0x4a77a0;
                _0x213ba6(',', true);
              }
              return _0x3b4838;
            }
            var _0x1522fa = _0x38f666(true);
            _0x33edbe(_0x4131eb, _0x1d31cf, _0x1522fa);
            return _0x1522fa;
          }
          function _0x33edbe(_0x4be6d6, _0x1b9631, _0x4af6e8) {
            if (_0x4be6d6.setOption) {
              _0x4be6d6.setOption(_0x1b9631, _0x4af6e8);
            }
          }
          function _0x2cc878(_0x4c73dc) {
            if (_0x213ba6('[', true)) {
              do {
                _0x2db7ae(_0x4c73dc, 'option');
              } while (_0x213ba6(',', true));
              _0x213ba6(']');
            }
            return _0x4c73dc;
          }
          for (; null !== (_0x5048ee = _0xe1ceeb());) {
            switch (_0x5048ee) {
              case 'package':
                if (!_0x347525) {
                  throw _0x575636(_0x5048ee);
                }
                _0x1ffadb();
                break;
              case "import":
                if (!_0x347525) {
                  throw _0x575636(_0x5048ee);
                }
                _0x5aef0b();
                break;
              case "syntax":
                if (!_0x347525) {
                  throw _0x575636(_0x5048ee);
                }
                _0x4dd427();
                break;
              case "option":
                _0x2db7ae(_0xa7b35c, _0x5048ee);
                _0x213ba6(';');
                break;
              default:
                if (_0x510437(_0xa7b35c, _0x5048ee)) {
                  _0x347525 = false;
                  continue;
                }
                throw _0x575636(_0x5048ee);
            }
          }
          _0x57173b.filename = null;
          return {
            'package': _0x561291,
            'imports': _0x23ecf2,
            'weakImports': _0x5a8872,
            'syntax': _0x3a9254,
            'root': _0x571fc6
          };
        }
        _0xc79815.exports;
      }, function () {
        return {
          './tokenize': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          './root': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          './type': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/type.js',
          './field': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './mapfield': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './oneof': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './service': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/service.js',
          './method': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          './types': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/common.js", function (_0x4f8987, _0x1275d3, _0x895113, _0x3068cf, _0xce610c) {
        _0x895113.exports = _0x529206;
        var _0x3ca4cf;
        var _0x3603f1 = /\/|\./;
        function _0x529206(_0x29376b, _0x3e3b38) {
          if (!_0x3603f1.test(_0x29376b)) {
            _0x29376b = "google/protobuf/" + _0x29376b + ".proto";
            _0x3e3b38 = {
              'nested': {
                'google': {
                  'nested': {
                    'protobuf': {
                      'nested': _0x3e3b38
                    }
                  }
                }
              }
            };
          }
          _0x529206[_0x29376b] = _0x3e3b38;
        }
        _0x529206("any", {
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
        _0x529206("duration", {
          'Duration': _0x3ca4cf = {
            'fields': {
              'seconds': {
                'type': "int64",
                'id': 0x1
              },
              'nanos': {
                'type': 'int32',
                'id': 0x2
              }
            }
          }
        });
        _0x529206("timestamp", {
          'Timestamp': _0x3ca4cf
        });
        _0x529206('empty', {
          'Empty': {
            'fields': {}
          }
        });
        _0x529206('struct', {
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
                'oneof': ["nullValue", "numberValue", "stringValue", "boolValue", 'structValue', "listValue"]
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
                'rule': 'repeated',
                'type': 'Value',
                'id': 0x1
              }
            }
          }
        });
        _0x529206('wrappers', {
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
        _0x529206("field_mask", {
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
        _0x529206.get = function (_0x525bc3) {
          return _0x529206[_0x525bc3] || null;
        };
        _0x895113.exports;
      }, {});
      var _0x534937;
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/index.js", function (_0x19794f, _0x2f2740, _0x19ba2a, _0x14afc0, _0xfd513a) {
        var _0x4edcd9 = _0x19ba2a.exports = _0x2f2740("./index-light");
        _0x4edcd9.build = 'full';
        _0x4edcd9.tokenize = _0x2f2740("./tokenize");
        _0x4edcd9.parse = _0x2f2740("./parse");
        _0x4edcd9.common = _0x2f2740("./common");
        _0x4edcd9.Root._configure(_0x4edcd9.Type, _0x4edcd9.parse, _0x4edcd9.common);
        _0x19ba2a.exports;
      }, function () {
        return {
          './index-light': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js',
          './tokenize': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          './parse': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/parse.js",
          './common': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/common.js"
        };
      });
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/index.js", function (_0xc1dfcb, _0x728647, _0xce78f7, _0x5cf551, _0x2dbab7) {
        _0xce78f7.exports = _0x728647('./src/index');
        _0x534937 = _0xce78f7.exports;
      }, function () {
        return {
          './src/index': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/index.js"
        };
      });
      _0x46f592.require("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/index.js");
      var _0x10b564;
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/minimal.js", function (_0xe63e9b, _0xd31180, _0x200b73, _0x474a01, _0x1787e4) {
        _0x200b73.exports = _0xd31180('./src/index-minimal');
        _0x200b73.exports;
      }, function () {
        return {
          './src/index-minimal': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js'
        };
      });
      _0x46f592.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/assets/game/Script/Proto/cshProto.js", function (_0x27f872, _0x21a96a, _0x5a3d84, _0x3ad6b4, _0x593b08) {
        var _0x6e4802;
        var _0x2c232d = _0x21a96a("protobufjs/minimal");
        var _0x5710e0 = _0x2c232d.Reader;
        var _0x46e1ca = _0x2c232d.Writer;
        var _0x3a2b3f = _0x2c232d.util;
        var _0x11e8c9 = _0x2c232d.roots['default'] || (_0x2c232d.roots['default'] = {});
        (_0x6e4802 = {
          "Grid": function () {
            function _0x1883c9(_0x33af76) {
              if (_0x33af76) {
                var _0x328e42 = Object.keys(_0x33af76);
                for (var _0x1d077c = 0x0; _0x1d077c < _0x328e42.length; ++_0x1d077c) {
                  if (null != _0x33af76[_0x328e42[_0x1d077c]]) {
                    this[_0x328e42[_0x1d077c]] = _0x33af76[_0x328e42[_0x1d077c]];
                  }
                }
              }
            }
            _0x1883c9.prototype.Column = 0x0;
            _0x1883c9.prototype.Row = 0x0;
            _0x1883c9.encode = function (_0x4a6cc2, _0x428d9f) {
              if (!_0x428d9f) {
                _0x428d9f = _0x46e1ca.create();
              }
              if (null != _0x4a6cc2.Column && Object.hasOwnProperty.call(_0x4a6cc2, "Column")) {
                _0x428d9f.uint32(0x8).int32(_0x4a6cc2.Column);
              }
              if (null != _0x4a6cc2.Row && Object.hasOwnProperty.call(_0x4a6cc2, 'Row')) {
                _0x428d9f.uint32(0x10).int32(_0x4a6cc2.Row);
              }
              return _0x428d9f;
            };
            _0x1883c9.decode = function (_0x18ab63, _0x2fb0fc) {
              if (!(_0x18ab63 instanceof _0x5710e0)) {
                _0x18ab63 = _0x5710e0.create(_0x18ab63);
              }
              var _0x2f9c33 = undefined === _0x2fb0fc ? _0x18ab63.len : _0x18ab63.pos + _0x2fb0fc;
              for (var _0x4bb19b = new _0x11e8c9.cshProto.Grid(); _0x18ab63.pos < _0x2f9c33;) {
                var _0xac33e = _0x18ab63.uint32();
                switch (_0xac33e >>> 0x3) {
                  case 0x1:
                    _0x4bb19b.Column = _0x18ab63.int32();
                    break;
                  case 0x2:
                    _0x4bb19b.Row = _0x18ab63.int32();
                    break;
                  default:
                    _0x18ab63.skipType(0x7 & _0xac33e);
                }
              }
              return _0x4bb19b;
            };
            _0x1883c9.getTypeUrl = function (_0x122982) {
              if (undefined === _0x122982) {
                _0x122982 = "type.googleapis.com";
              }
              return _0x122982 + "/cshProto.Grid";
            };
            return _0x1883c9;
          }(),
          AwardData: function () {
            function _0x5a6e5c(_0xdee3b0) {
              this.AwardGridVec = [];
              if (_0xdee3b0) {
                var _0x60f0b0 = Object.keys(_0xdee3b0);
                for (var _0x54c624 = 0x0; _0x54c624 < _0x60f0b0.length; ++_0x54c624) {
                  if (null != _0xdee3b0[_0x60f0b0[_0x54c624]]) {
                    this[_0x60f0b0[_0x54c624]] = _0xdee3b0[_0x60f0b0[_0x54c624]];
                  }
                }
              }
            }
            _0x5a6e5c.prototype.AwardSymbol = 0x0;
            _0x5a6e5c.prototype.AwardGridVec = _0x3a2b3f.emptyArray;
            _0x5a6e5c.prototype.AwardMoney = 0x0;
            _0x5a6e5c.prototype.SymbolCount = 0x0;
            _0x5a6e5c.prototype.Lines = 0x0;
            _0x5a6e5c.prototype.ContainWild = false;
            _0x5a6e5c.encode = function (_0x5ae1ef, _0xfcd95d) {
              if (!_0xfcd95d) {
                _0xfcd95d = _0x46e1ca.create();
              }
              if (null != _0x5ae1ef.AwardSymbol && Object.hasOwnProperty.call(_0x5ae1ef, "AwardSymbol")) {
                _0xfcd95d.uint32(0x8).int32(_0x5ae1ef.AwardSymbol);
              }
              if (null != _0x5ae1ef.AwardGridVec && _0x5ae1ef.AwardGridVec.length) {
                for (var _0x61b80f = 0x0; _0x61b80f < _0x5ae1ef.AwardGridVec.length; ++_0x61b80f) {
                  _0x11e8c9.cshProto.Grid.encode(_0x5ae1ef.AwardGridVec[_0x61b80f], _0xfcd95d.uint32(0x12).fork()).ldelim();
                }
              }
              if (null != _0x5ae1ef.AwardMoney && Object.hasOwnProperty.call(_0x5ae1ef, 'AwardMoney')) {
                _0xfcd95d.uint32(0x19).double(_0x5ae1ef.AwardMoney);
              }
              if (null != _0x5ae1ef.SymbolCount && Object.hasOwnProperty.call(_0x5ae1ef, "SymbolCount")) {
                _0xfcd95d.uint32(0x20).int32(_0x5ae1ef.SymbolCount);
              }
              if (null != _0x5ae1ef.Lines && Object.hasOwnProperty.call(_0x5ae1ef, "Lines")) {
                _0xfcd95d.uint32(0x28).int32(_0x5ae1ef.Lines);
              }
              if (null != _0x5ae1ef.ContainWild && Object.hasOwnProperty.call(_0x5ae1ef, "ContainWild")) {
                _0xfcd95d.uint32(0x30).bool(_0x5ae1ef.ContainWild);
              }
              return _0xfcd95d;
            };
            _0x5a6e5c.decode = function (_0x913d2a, _0x3eda98) {
              if (!(_0x913d2a instanceof _0x5710e0)) {
                _0x913d2a = _0x5710e0.create(_0x913d2a);
              }
              var _0x91168e = undefined === _0x3eda98 ? _0x913d2a.len : _0x913d2a.pos + _0x3eda98;
              for (var _0x24316f = new _0x11e8c9.cshProto.AwardData(); _0x913d2a.pos < _0x91168e;) {
                var _0x57d3b2 = _0x913d2a.uint32();
                switch (_0x57d3b2 >>> 0x3) {
                  case 0x1:
                    _0x24316f.AwardSymbol = _0x913d2a.int32();
                    break;
                  case 0x2:
                    if (!(_0x24316f.AwardGridVec && _0x24316f.AwardGridVec.length)) {
                      _0x24316f.AwardGridVec = [];
                    }
                    _0x24316f.AwardGridVec.push(_0x11e8c9.cshProto.Grid.decode(_0x913d2a, _0x913d2a.uint32()));
                    break;
                  case 0x3:
                    _0x24316f.AwardMoney = _0x913d2a.double();
                    break;
                  case 0x4:
                    _0x24316f.SymbolCount = _0x913d2a.int32();
                    break;
                  case 0x5:
                    _0x24316f.Lines = _0x913d2a.int32();
                    break;
                  case 0x6:
                    _0x24316f.ContainWild = _0x913d2a.bool();
                    break;
                  default:
                    _0x913d2a.skipType(0x7 & _0x57d3b2);
                }
              }
              return _0x24316f;
            };
            _0x5a6e5c.getTypeUrl = function (_0x1a5f4b) {
              if (undefined === _0x1a5f4b) {
                _0x1a5f4b = "type.googleapis.com";
              }
              return _0x1a5f4b + "/cshProto.AwardData";
            };
            return _0x5a6e5c;
          }(),
          "AwardDetail": function () {
            function _0x40f201(_0xbd4b92) {
              this.AwardSet = [];
              if (_0xbd4b92) {
                var _0x506fd5 = Object.keys(_0xbd4b92);
                for (var _0x5441fd = 0x0; _0x5441fd < _0x506fd5.length; ++_0x5441fd) {
                  if (null != _0xbd4b92[_0x506fd5[_0x5441fd]]) {
                    this[_0x506fd5[_0x5441fd]] = _0xbd4b92[_0x506fd5[_0x5441fd]];
                  }
                }
              }
            }
            _0x40f201.prototype.AwardSet = _0x3a2b3f.emptyArray;
            _0x40f201.prototype.AwardMoney = 0x0;
            _0x40f201.encode = function (_0x4d0f5e, _0x2f1dfa) {
              if (!_0x2f1dfa) {
                _0x2f1dfa = _0x46e1ca.create();
              }
              if (null != _0x4d0f5e.AwardSet && _0x4d0f5e.AwardSet.length) {
                for (var _0x168831 = 0x0; _0x168831 < _0x4d0f5e.AwardSet.length; ++_0x168831) {
                  _0x11e8c9.cshProto.AwardData.encode(_0x4d0f5e.AwardSet[_0x168831], _0x2f1dfa.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0x4d0f5e.AwardMoney && Object.hasOwnProperty.call(_0x4d0f5e, 'AwardMoney')) {
                _0x2f1dfa.uint32(0x19).double(_0x4d0f5e.AwardMoney);
              }
              return _0x2f1dfa;
            };
            _0x40f201.decode = function (_0x419a92, _0x2af233) {
              if (!(_0x419a92 instanceof _0x5710e0)) {
                _0x419a92 = _0x5710e0.create(_0x419a92);
              }
              var _0x9e3d1 = undefined === _0x2af233 ? _0x419a92.len : _0x419a92.pos + _0x2af233;
              for (var _0x27d3e8 = new _0x11e8c9.cshProto.AwardDetail(); _0x419a92.pos < _0x9e3d1;) {
                var _0x29de44 = _0x419a92.uint32();
                switch (_0x29de44 >>> 0x3) {
                  case 0x1:
                    if (!(_0x27d3e8.AwardSet && _0x27d3e8.AwardSet.length)) {
                      _0x27d3e8.AwardSet = [];
                    }
                    _0x27d3e8.AwardSet.push(_0x11e8c9.cshProto.AwardData.decode(_0x419a92, _0x419a92.uint32()));
                    break;
                  case 0x3:
                    _0x27d3e8.AwardMoney = _0x419a92.double();
                    break;
                  default:
                    _0x419a92.skipType(0x7 & _0x29de44);
                }
              }
              return _0x27d3e8;
            };
            _0x40f201.getTypeUrl = function (_0x9368b5) {
              if (undefined === _0x9368b5) {
                _0x9368b5 = "type.googleapis.com";
              }
              return _0x9368b5 + '/cshProto.AwardDetail';
            };
            return _0x40f201;
          }(),
          "SinglePlate": function () {
            function _0x1930e0(_0x2d55c4) {
              this.AwardVec = [];
              this.PlateVec = [];
              this.ColumnSymbol = [];
              if (_0x2d55c4) {
                var _0x4fe915 = Object.keys(_0x2d55c4);
                for (var _0x17bbee = 0x0; _0x17bbee < _0x4fe915.length; ++_0x17bbee) {
                  if (null != _0x2d55c4[_0x4fe915[_0x17bbee]]) {
                    this[_0x4fe915[_0x17bbee]] = _0x2d55c4[_0x4fe915[_0x17bbee]];
                  }
                }
              }
            }
            _0x1930e0.prototype.AwardVec = _0x3a2b3f.emptyArray;
            _0x1930e0.prototype.PlateVec = _0x3a2b3f.emptyArray;
            _0x1930e0.prototype.ColumnSymbol = _0x3a2b3f.emptyArray;
            _0x1930e0.prototype.AwardTypeFlag = 0x0;
            _0x1930e0.prototype.RemainRound = 0x0;
            _0x1930e0.prototype.ExtraRound = 0x0;
            _0x1930e0.prototype.ExtraOdds = 0x0;
            _0x1930e0.encode = function (_0x1032b8, _0x31b836) {
              if (!_0x31b836) {
                _0x31b836 = _0x46e1ca.create();
              }
              if (null != _0x1032b8.AwardVec && _0x1032b8.AwardVec.length) {
                for (var _0x20ced1 = 0x0; _0x20ced1 < _0x1032b8.AwardVec.length; ++_0x20ced1) {
                  _0x11e8c9.cshProto.AwardDetail.encode(_0x1032b8.AwardVec[_0x20ced1], _0x31b836.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0x1032b8.PlateVec && _0x1032b8.PlateVec.length) {
                for (_0x20ced1 = 0x0; _0x20ced1 < _0x1032b8.PlateVec.length; ++_0x20ced1) {
                  _0x11e8c9.cshProto.Column.encode(_0x1032b8.PlateVec[_0x20ced1], _0x31b836.uint32(0x12).fork()).ldelim();
                }
              }
              if (null != _0x1032b8.ColumnSymbol && _0x1032b8.ColumnSymbol.length) {
                for (_0x20ced1 = 0x0; _0x20ced1 < _0x1032b8.ColumnSymbol.length; ++_0x20ced1) {
                  _0x11e8c9.cshProto.Column.encode(_0x1032b8.ColumnSymbol[_0x20ced1], _0x31b836.uint32(0x1a).fork()).ldelim();
                }
              }
              if (null != _0x1032b8.AwardTypeFlag && Object.hasOwnProperty.call(_0x1032b8, "AwardTypeFlag")) {
                _0x31b836.uint32(0x20).int32(_0x1032b8.AwardTypeFlag);
              }
              if (null != _0x1032b8.RemainRound && Object.hasOwnProperty.call(_0x1032b8, "RemainRound")) {
                _0x31b836.uint32(0x28).int32(_0x1032b8.RemainRound);
              }
              if (null != _0x1032b8.ExtraRound && Object.hasOwnProperty.call(_0x1032b8, "ExtraRound")) {
                _0x31b836.uint32(0x30).int32(_0x1032b8.ExtraRound);
              }
              if (null != _0x1032b8.ExtraOdds && Object.hasOwnProperty.call(_0x1032b8, "ExtraOdds")) {
                _0x31b836.uint32(0x38).int32(_0x1032b8.ExtraOdds);
              }
              return _0x31b836;
            };
            _0x1930e0.decode = function (_0x5ad88d, _0x47b562) {
              if (!(_0x5ad88d instanceof _0x5710e0)) {
                _0x5ad88d = _0x5710e0.create(_0x5ad88d);
              }
              var _0xbcf353 = undefined === _0x47b562 ? _0x5ad88d.len : _0x5ad88d.pos + _0x47b562;
              for (var _0x22cf7f = new _0x11e8c9.cshProto.SinglePlate(); _0x5ad88d.pos < _0xbcf353;) {
                var _0x307e82 = _0x5ad88d.uint32();
                switch (_0x307e82 >>> 0x3) {
                  case 0x1:
                    if (!(_0x22cf7f.AwardVec && _0x22cf7f.AwardVec.length)) {
                      _0x22cf7f.AwardVec = [];
                    }
                    _0x22cf7f.AwardVec.push(_0x11e8c9.cshProto.AwardDetail.decode(_0x5ad88d, _0x5ad88d.uint32()));
                    break;
                  case 0x2:
                    if (!(_0x22cf7f.PlateVec && _0x22cf7f.PlateVec.length)) {
                      _0x22cf7f.PlateVec = [];
                    }
                    _0x22cf7f.PlateVec.push(_0x11e8c9.cshProto.Column.decode(_0x5ad88d, _0x5ad88d.uint32()));
                    break;
                  case 0x3:
                    if (!(_0x22cf7f.ColumnSymbol && _0x22cf7f.ColumnSymbol.length)) {
                      _0x22cf7f.ColumnSymbol = [];
                    }
                    _0x22cf7f.ColumnSymbol.push(_0x11e8c9.cshProto.Column.decode(_0x5ad88d, _0x5ad88d.uint32()));
                    break;
                  case 0x4:
                    _0x22cf7f.AwardTypeFlag = _0x5ad88d.int32();
                    break;
                  case 0x5:
                    _0x22cf7f.RemainRound = _0x5ad88d.int32();
                    break;
                  case 0x6:
                    _0x22cf7f.ExtraRound = _0x5ad88d.int32();
                    break;
                  case 0x7:
                    _0x22cf7f.ExtraOdds = _0x5ad88d.int32();
                    break;
                  default:
                    _0x5ad88d.skipType(0x7 & _0x307e82);
                }
              }
              return _0x22cf7f;
            };
            _0x1930e0.getTypeUrl = function (_0x4ff42d) {
              if (undefined === _0x4ff42d) {
                _0x4ff42d = "type.googleapis.com";
              }
              return _0x4ff42d + "/cshProto.SinglePlate";
            };
            return _0x1930e0;
          }(),
          "SpinAck": function () {
            function _0x5a58e3(_0x227ecc) {
              this.AckVec = [];
              if (_0x227ecc) {
                var _0x41f92b = Object.keys(_0x227ecc);
                for (var _0x5bde30 = 0x0; _0x5bde30 < _0x41f92b.length; ++_0x5bde30) {
                  if (null != _0x227ecc[_0x41f92b[_0x5bde30]]) {
                    this[_0x41f92b[_0x5bde30]] = _0x227ecc[_0x41f92b[_0x5bde30]];
                  }
                }
              }
            }
            _0x5a58e3.prototype.AckVec = _0x3a2b3f.emptyArray;
            _0x5a58e3.prototype.MGWin = 0x0;
            _0x5a58e3.prototype.FGWin = 0x0;
            _0x5a58e3.prototype.TotalWin = 0x0;
            _0x5a58e3.prototype.ShowIndex = '';
            _0x5a58e3.prototype.NowMoney = 0x0;
            _0x5a58e3.prototype.AckType = 0x0;
            _0x5a58e3.prototype.RTP = 0x0;
            _0x5a58e3.prototype.LID = 0x0;
            _0x5a58e3.prototype.RID = 0x0;
            _0x5a58e3.encode = function (_0x3d3f84, _0x2aa5e6) {
              if (!_0x2aa5e6) {
                _0x2aa5e6 = _0x46e1ca.create();
              }
              if (null != _0x3d3f84.AckVec && _0x3d3f84.AckVec.length) {
                for (var _0xbc4738 = 0x0; _0xbc4738 < _0x3d3f84.AckVec.length; ++_0xbc4738) {
                  _0x11e8c9.cshProto.SinglePlate.encode(_0x3d3f84.AckVec[_0xbc4738], _0x2aa5e6.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0x3d3f84.MGWin && Object.hasOwnProperty.call(_0x3d3f84, "MGWin")) {
                _0x2aa5e6.uint32(0x11).double(_0x3d3f84.MGWin);
              }
              if (null != _0x3d3f84.FGWin && Object.hasOwnProperty.call(_0x3d3f84, "FGWin")) {
                _0x2aa5e6.uint32(0x19).double(_0x3d3f84.FGWin);
              }
              if (null != _0x3d3f84.TotalWin && Object.hasOwnProperty.call(_0x3d3f84, "TotalWin")) {
                _0x2aa5e6.uint32(0x21).double(_0x3d3f84.TotalWin);
              }
              if (null != _0x3d3f84.ShowIndex && Object.hasOwnProperty.call(_0x3d3f84, 'ShowIndex')) {
                _0x2aa5e6.uint32(0x2a).string(_0x3d3f84.ShowIndex);
              }
              if (null != _0x3d3f84.NowMoney && Object.hasOwnProperty.call(_0x3d3f84, "NowMoney")) {
                _0x2aa5e6.uint32(0x31).double(_0x3d3f84.NowMoney);
              }
              if (null != _0x3d3f84.AckType && Object.hasOwnProperty.call(_0x3d3f84, "AckType")) {
                _0x2aa5e6.uint32(0x38).int32(_0x3d3f84.AckType);
              }
              if (null != _0x3d3f84.RTP && Object.hasOwnProperty.call(_0x3d3f84, "RTP")) {
                _0x2aa5e6.uint32(0x41).double(_0x3d3f84.RTP);
              }
              if (null != _0x3d3f84.LID && Object.hasOwnProperty.call(_0x3d3f84, "LID")) {
                _0x2aa5e6.uint32(0x48).int32(_0x3d3f84.LID);
              }
              if (null != _0x3d3f84.RID && Object.hasOwnProperty.call(_0x3d3f84, 'RID')) {
                _0x2aa5e6.uint32(0x50).int32(_0x3d3f84.RID);
              }
              return _0x2aa5e6;
            };
            _0x5a58e3.decode = function (_0x5a76a5, _0x255d01) {
              if (!(_0x5a76a5 instanceof _0x5710e0)) {
                _0x5a76a5 = _0x5710e0.create(_0x5a76a5);
              }
              var _0xf026bc = undefined === _0x255d01 ? _0x5a76a5.len : _0x5a76a5.pos + _0x255d01;
              for (var _0x51ae1e = new _0x11e8c9.cshProto.SpinAck(); _0x5a76a5.pos < _0xf026bc;) {
                var _0x407986 = _0x5a76a5.uint32();
                switch (_0x407986 >>> 0x3) {
                  case 0x1:
                    if (!(_0x51ae1e.AckVec && _0x51ae1e.AckVec.length)) {
                      _0x51ae1e.AckVec = [];
                    }
                    _0x51ae1e.AckVec.push(_0x11e8c9.cshProto.SinglePlate.decode(_0x5a76a5, _0x5a76a5.uint32()));
                    break;
                  case 0x2:
                    _0x51ae1e.MGWin = _0x5a76a5.double();
                    break;
                  case 0x3:
                    _0x51ae1e.FGWin = _0x5a76a5.double();
                    break;
                  case 0x4:
                    _0x51ae1e.TotalWin = _0x5a76a5.double();
                    break;
                  case 0x5:
                    _0x51ae1e.ShowIndex = _0x5a76a5.string();
                    break;
                  case 0x6:
                    _0x51ae1e.NowMoney = _0x5a76a5.double();
                    break;
                  case 0x7:
                    _0x51ae1e.AckType = _0x5a76a5.int32();
                    break;
                  case 0x8:
                    _0x51ae1e.RTP = _0x5a76a5.double();
                    break;
                  case 0x9:
                    _0x51ae1e.LID = _0x5a76a5.int32();
                    break;
                  case 0xa:
                    _0x51ae1e.RID = _0x5a76a5.int32();
                    break;
                  default:
                    _0x5a76a5.skipType(0x7 & _0x407986);
                }
              }
              return _0x51ae1e;
            };
            _0x5a58e3.getTypeUrl = function (_0x623e22) {
              if (undefined === _0x623e22) {
                _0x623e22 = 'type.googleapis.com';
              }
              return _0x623e22 + '/cshProto.SpinAck';
            };
            return _0x5a58e3;
          }()
        }).Column = function () {
          function _0x14b18b(_0x46c1ef) {
            this.Row = [];
            if (_0x46c1ef) {
              var _0x25ed71 = Object.keys(_0x46c1ef);
              for (var _0x4fbb0b = 0x0; _0x4fbb0b < _0x25ed71.length; ++_0x4fbb0b) {
                if (null != _0x46c1ef[_0x25ed71[_0x4fbb0b]]) {
                  this[_0x25ed71[_0x4fbb0b]] = _0x46c1ef[_0x25ed71[_0x4fbb0b]];
                }
              }
            }
          }
          _0x14b18b.prototype.Row = _0x3a2b3f.emptyArray;
          _0x14b18b.encode = function (_0x3afeb3, _0x39f2f1) {
            if (!_0x39f2f1) {
              _0x39f2f1 = _0x46e1ca.create();
            }
            if (null != _0x3afeb3.Row && _0x3afeb3.Row.length) {
              _0x39f2f1.uint32(0xa).fork();
              for (var _0xbda6d5 = 0x0; _0xbda6d5 < _0x3afeb3.Row.length; ++_0xbda6d5) {
                _0x39f2f1.int32(_0x3afeb3.Row[_0xbda6d5]);
              }
              _0x39f2f1.ldelim();
            }
            return _0x39f2f1;
          };
          _0x14b18b.decode = function (_0x4fb728, _0x2dbb5d) {
            if (!(_0x4fb728 instanceof _0x5710e0)) {
              _0x4fb728 = _0x5710e0.create(_0x4fb728);
            }
            var _0x24ec5e = undefined === _0x2dbb5d ? _0x4fb728.len : _0x4fb728.pos + _0x2dbb5d;
            for (var _0x4b590a = new _0x11e8c9.cshProto.Column(); _0x4fb728.pos < _0x24ec5e;) {
              var _0x3ff836 = _0x4fb728.uint32();
              switch (_0x3ff836 >>> 0x3) {
                case 0x1:
                  if (!(_0x4b590a.Row && _0x4b590a.Row.length)) {
                    _0x4b590a.Row = [];
                  }
                  if (0x2 == (0x7 & _0x3ff836)) {
                    for (var _0x1b00b5 = _0x4fb728.uint32() + _0x4fb728.pos; _0x4fb728.pos < _0x1b00b5;) {
                      _0x4b590a.Row.push(_0x4fb728.int32());
                    }
                  } else {
                    _0x4b590a.Row.push(_0x4fb728.int32());
                  }
                  break;
                default:
                  _0x4fb728.skipType(0x7 & _0x3ff836);
              }
            }
            return _0x4b590a;
          };
          _0x14b18b.getTypeUrl = function (_0x59ea3c) {
            if (undefined === _0x59ea3c) {
              _0x59ea3c = "type.googleapis.com";
            }
            return _0x59ea3c + "/cshProto.Column";
          };
          return _0x14b18b;
        }();
        _0x11e8c9.cshProto = _0x6e4802;
        _0x5a3d84.exports = _0x11e8c9;
        _0x10b564 = _0x5a3d84.exports;
      }, function () {
        return {
          'protobufjs/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/node_modules/protobufjs/minimal.js"
        };
      });
      _0x46f592.require("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/ChinShiHuang/Client/Thai_UAT/assets/game/Script/Proto/cshProto.js");
      _0xbd733f._RF.push({}, "43ce7Zd0rhCC4J0rSFKllzW", 'CSHProtocol', undefined);
      var _0x2a5c5a = function () {};
      _0x2a5c5a.U2G = _0x5e461f({
        'CSH_U2G_GAME_INFO_REQ': 0x65,
        'CSH_U2G_SPIN_REQ': 0x66,
        'CSH_U2G_HEART_BEAT': 0x67,
        'CSH_U2G_BONUS_END': 0x68,
        'CSH_U2G_LOGOUT': 0x69,
        'CSH_U2G_LAST': 0x6a,
        'CSH_U2G_FAKE_FREE_SPIN': 0x57,
        'U2G_TRIAL_INFO': 0x1f,
        'U2G_TRIAL_SIGN_UP': 0x20,
        'U2G_TRIAL_GIVE_UP': 0x21,
        'CSH_U2G_ITEM_DATA_REQ': 0x6b,
        'CSH_U2G_MSG_DATA_REQ': 0x6c,
        'CSH_U2G_ITEM_USE_REQ': 0x6d,
        'CSH_U2G_CLEAN_MSG_REQ': 0x6e,
        'CSH_U2G_ITEM_UPDATE_REQ': 0x6f,
        'CSH_U2G_MISSION_DATA_REQ': 0x70,
        'CSH_U2G_SIGN_UP_REQ': 0x71,
        'CSH_U2G_CHECK_SIGN_UP_REQ': 0x72,
        'CSH_U2G_ITEM_ALL_REQ': 0x73,
        'CSH_U2G_BUY_BONUS_REQ': 0x74,
        'CSH_U2G_JP_INFO_REQ': 0x78,
        'CSH_U2G_JP_HISTORY_REQ': 0x79,
        'CSH_U2G_JP_BLOCK_REQ': 0x7a
      });
      _0x2a5c5a.G2U = _0x5e461f({
        'CSH_G2U_GAME_INFO_ACK': 0x65,
        'CSH_G2U_SPIN_ACK': 0x66,
        'CSH_U2G_HEART_BEAT_ACK': 0x67,
        'CSH_G2U_BONUS_END_ACK': 0x68,
        'CSH_U2G_LAST_ACK': 0x6a,
        'CSH_G2U_FAKE_FREE_SPIN_ACK': 0x57,
        'G2U_TRIAL_INFO': 0x1f,
        'G2U_TRIAL_SIGN_UP': 0x20,
        'G2U_TRIAL_GIVE_UP': 0x21,
        'CSH_G2U_ITEM_DATA_ACK': 0x6b,
        'CSH_G2U_MSG_DATA_ACK': 0x6c,
        'CSH_G2U_ITEM_USE_ACK': 0x6d,
        'CSH_G2U_CLEAN_MSG_ACK': 0x6e,
        'CSH_G2U_ITEM_UPDATE_ACK': 0x6f,
        'CSH_G2U_MISSION_DATA_ACK': 0x70,
        'CSH_G2U_SIGN_UP_ACK': 0x71,
        'CSH_G2U_CHECK_SIGN_UP_ACK': 0x72,
        'CSH_G2U_ITEM_ALL_ACK': 0x73,
        'CSH_G2U_BUY_BONUS_ACK': 0x74,
        'CSH_G2U_JP_INFO_ACK': 0x78,
        'CSH_G2U_JP_HISTORY_ACK': 0x79,
        'CSH_G2U_JP_BLOCK_ACK': 0x7a
      });
      _0x2a5c5a.NEW_PROTOCAL = {
        'PROTOCOL_TYPE_LOGIN': 0x0,
        'PROTOCOL_TYPE_LOGOUT': 0x1,
        'PROTOCOL_TYPE_EXCHANGECHIPS': 0x2,
        'PROTOCOL_TYPE_LAST': 0x3,
        'PROTOCOL_TYPE_GAME_INFO': 0xb,
        'PROTOCOL_TYPE_GAME_SPIN': 0xc,
        'PROTOCOL_TYPE_GAME_SPINEND': 0xd
      };
      _0xbd733f._RF.pop();
      _0xbd733f._RF.push({}, "7acd8xpHVlET4WZeyG2/xYy", "MovieClip", undefined);
      var _0x48c112 = function () {
        function _0x2c582b(_0x48fe23) {
          if (undefined === _0x48fe23) {
            _0x48fe23 = undefined;
          }
          this.m_initSuccess = false;
          this.m_mc = undefined;
          this.m_mcFrmae = undefined;
          this.m_particleList = undefined;
          this.m_initSuccessCB = undefined;
          this.m_animState = undefined;
          this.m_particleList = new Array();
          this.m_initSuccessCB = _0x48fe23;
        }
        var _0x522659 = _0x2c582b.prototype;
        _0x522659.Init = function (_0x530a1b) {
          if ("string" == typeof _0x530a1b) {
            this.LoadMC(_0x530a1b);
          } else {
            this.InitMc(_0x530a1b);
          }
        };
        _0x522659.LoadMC = function (_0x339556) {
          var _0x1b56b1 = this;
          _0xb08ad.GameBundle.load(_0x339556, _0x3b3da2, function (_0x1c5b3e, _0x4fdb03) {
            _0x87e3e6("LoadMC ", _0x339556, _0x4fdb03);
            if (_0x1c5b3e) {
              _0x4f6f19(_0x1c5b3e);
              return void _0x1b56b1.LoadMC(_0x339556);
            }
            var _0xc73cbb = _0x22717a(_0x4fdb03);
            _0xc73cbb.active = false;
            _0x1b56b1.InitMc(_0xc73cbb);
          });
        };
        _0x522659.InitMc = function (_0x4cd599) {
          this.m_mc = _0x4cd599;
          this.m_mcFrmae = this.m_mc.getComponent(_0x4f8248);
          if (null != this.m_mc && null != this.m_mcFrmae) {
            this.m_initSuccess = true;
            this.m_mcFrmae.pause();
            if (this.m_initSuccessCB) {
              this.m_initSuccessCB();
            }
          }
        };
        _0x522659.AddParticle = function (_0xc9f44d) {
          _0x87e3e6('AddParticle', _0xc9f44d, this.m_particleList);
          if (null != _0xc9f44d) {
            var _0x3a5e4d = _0xc9f44d.getComponent(_0x131c83);
            if (null != _0x3a5e4d) {
              this.m_particleList.push(_0x3a5e4d);
            }
          }
        };
        _0x522659.PlayParticle = function () {
          if (this.m_initSuccess) {
            var _0x225aae = this.m_particleList.length;
            for (var _0x3d6df9 = 0x0; _0x3d6df9 < _0x225aae; _0x3d6df9++) {
              var _0x402384 = this.m_particleList[_0x3d6df9];
              _0x402384.node.active = true;
              _0x402384.resetSystem();
            }
          }
        };
        _0x522659.StopParticle = function () {
          if (this.m_initSuccess) {
            var _0x5ece1e = this.m_particleList.length;
            for (var _0x4edc1e = 0x0; _0x4edc1e < _0x5ece1e; _0x4edc1e++) {
              var _0x31a0a7 = this.m_particleList[_0x4edc1e];
              _0x31a0a7.stopSystem();
              _0x31a0a7.node.active = false;
            }
          }
        };
        _0x522659.Play = function (_0x591f53) {
          if (undefined === _0x591f53) {
            _0x591f53 = false;
          }
          if (this.m_initSuccess) {
            this.m_mcFrmae.play();
            this.m_animState = this.m_mcFrmae.getState(this.m_mcFrmae.defaultClip.name);
            this.m_animState.wrapMode = _0x591f53 ? _0x2d265e.WrapMode.Loop : _0x2d265e.WrapMode.Normal;
            this.PlayParticle();
          }
        };
        _0x522659.Stop = function () {
          if (this.m_initSuccess) {
            this.m_mcFrmae.stop();
            this.StopParticle();
          }
        };
        _0x522659.Pause = function () {
          this.m_initSuccess;
        };
        _0x522659.SetFrameEventCallFunc = function (_0x16cfc6) {
          if (this.m_initSuccess) {
            _0x1f72f3.Pack(this.m_mc, function (_0x4c08fe) {
              if (null != _0x16cfc6) {
                _0x16cfc6(_0x4c08fe);
              }
            });
          }
        };
        _0x23c2ec(_0x2c582b, [{
          'key': 'isSuccess',
          'get': function () {
            return this.m_initSuccess;
          }
        }, {
          'key': 'mc',
          'get': function () {
            return this.m_mc;
          }
        }, {
          'key': "anim",
          'get': function () {
            return this.m_mcFrmae;
          }
        }, {
          'key': "animState",
          'get': function () {
            if (null == this.m_mcFrmae.getState(this.m_mcFrmae.defaultClip.name)) {
              this.m_mcFrmae.onLoad();
            }
            return this.m_mcFrmae.getState(this.m_mcFrmae.defaultClip.name);
          }
        }]);
        return _0x2c582b;
      }();
      var _0x2a0856;
      var _0x5afba5;
      _0xbd733f._RF.pop();
      _0xbd733f._RF.push({}, 'fe847pi5qZHMKDxYqHUfP2B', 'CSH_Define', undefined);
      (function (_0x10e037) {
        _0x10e037[_0x10e037.UNSHOW_PREPARE = 0x0] = 'UNSHOW_PREPARE';
        _0x10e037[_0x10e037.TO_GAME = 0x1] = "TO_GAME";
        _0x10e037[_0x10e037.SPINNING = 0x2] = "SPINNING";
        _0x10e037[_0x10e037.CAN_STOP = 0x3] = "CAN_STOP";
        _0x10e037[_0x10e037.STOP = 0x4] = "STOP";
        _0x10e037[_0x10e037.CHECK_AWARD = 0x5] = 'CHECK_AWARD';
        _0x10e037[_0x10e037.SHOW_PLATE_AWARD = 0x6] = "SHOW_PLATE_AWARD";
        _0x10e037[_0x10e037.SHOW_PLATE_AWARD_CLEAR_NEW_SYMBOL = 0x7] = "SHOW_PLATE_AWARD_CLEAR_NEW_SYMBOL";
        _0x10e037[_0x10e037.TOTAL_AWARD = 0x8] = "TOTAL_AWARD";
        _0x10e037[_0x10e037.ENTER_BONUS = 0x9] = "ENTER_BONUS";
        _0x10e037[_0x10e037.EXIT_BONUS = 0xa] = "EXIT_BONUS";
        _0x10e037[_0x10e037.WAIT = 0xb] = "WAIT";
        _0x10e037[_0x10e037.ROUND_END = 0xc] = 'ROUND_END';
        _0x10e037[_0x10e037.ROUND_SHOW_END = 0xd] = "ROUND_SHOW_END";
      })(_0x5afba5 || (_0x5afba5 = {}));
      var _0x3a2794 = function () {
        function _0x2b4554() {}
        _0x2b4554.OnExit = function () {
          this.SOUND_NAME = {
            'csh_wheel_bgm': null,
            'csh_spin_btn': null,
            'csh_wheel': null,
            'csh_wheel_stop': null,
            'csh_wheel_bonusstop': null,
            'csh_wheel_nearwin': null,
            'csh_line_award10': null,
            'csh_symbol_king': null,
            'csh_line_bonus': null,
            'csh_main_dragon': null,
            'csh_line_surround': null,
            'csh_symbol_burn': null,
            'csh_bonus_enter': null,
            'csh_bonuswheel_stop': null,
            'csh_bonus_dragon': null,
            'csh_bonus_flamepath': null,
            'csh_bonus_flamestop': null,
            'csh_bonus_exchange': null,
            'csh_wheel_end': null,
            'csh_line_award01': null,
            'csh_line_award02': null,
            'csh_line_award03': null,
            'csh_line_award04': null,
            'csh_line_award05': null,
            'csh_line_award06': null,
            'csh_line_award07': null,
            'csh_line_award08': null,
            'csh_line_award09': null,
            'Common_coin_medium': null,
            'Common_big_win': null,
            'Common_mega_win': null,
            'Common_super_win': null
          };
        };
        return _0x2b4554;
      }();
      var _0x5ddfe0;
      var _0x4880c2;
      var _0x2ae434;
      var _0x253ede;
      var _0x48df38;
      var _0x37cb6b;
      _0x3a2794.Ver = "292";
      _0x3a2794.ROUND_NUM = 0x64;
      _0x3a2794.ROW_MAX = 0x4;
      _0x3a2794.COLUMN_MAX = 0x6;
      _0x3a2794.PLATE_LINE_COUNT = [0x4, 0x4, 0x4, 0x4, 0x4, 0x4];
      _0x3a2794.NEAR_WIN_COLUMN = 0x3;
      _0x3a2794.TOTAL_AWARD_SKIP_TIME_MAX = 1.2;
      _0x3a2794.DesignSize = {
        'width': 0x470,
        'height': 0x280
      };
      _0x3a2794.SYMBOL_ID = {
        'KING': 0x0,
        'PERSON': 0x1,
        'CAR': 0x2,
        'LION': 0x3,
        'A': 0x4,
        'K': 0x5,
        'Q': 0x6,
        'J': 0x7,
        'WILD': 0x8,
        'BONUS': 0x9,
        'SCATTER': 0xa,
        'MAX': 0xb
      };
      _0x3a2794.EFFECT_WIN_MULTIPLE = {
        'SUPER_WIN': 0x1e,
        'MEGA_WIN': 0x14,
        'BIG_WIN': 0xa,
        'SMALL_WIN_2': 0x5,
        'BONUS_GAME_TOTAL_WIN': 0x32
      };
      _0x3a2794.DEFAULT_PLATE = [0x7, 0x7, 0x7, 0x7, 0x6, 0x6, 0x6, 0x6, 0x5, 0x5, 0x5, 0x5, 0x4, 0x4, 0x4, 0x4, 0x3, 0x3, 0x3, 0x3, 0x2, 0x2, 0x2, 0x2];
      _0x3a2794.SOUND_NAME = {
        'csh_wheel_bgm': null,
        'csh_spin_btn': null,
        'csh_wheel': null,
        'csh_wheel_stop': null,
        'csh_wheel_bonusstop': null,
        'csh_wheel_nearwin': null,
        'csh_line_award10': null,
        'csh_symbol_king': null,
        'csh_line_bonus': null,
        'csh_main_dragon': null,
        'csh_line_surround': null,
        'csh_symbol_burn': null,
        'csh_bonus_enter': null,
        'csh_bonuswheel_stop': null,
        'csh_bonus_dragon': null,
        'csh_bonus_flamepath': null,
        'csh_bonus_flamestop': null,
        'csh_bonus_exchange': null,
        'csh_wheel_end': null,
        'csh_line_award01': null,
        'csh_line_award02': null,
        'csh_line_award03': null,
        'csh_line_award04': null,
        'csh_line_award05': null,
        'csh_line_award06': null,
        'csh_line_award07': null,
        'csh_line_award08': null,
        'csh_line_award09': null,
        'Common_coin_medium': null,
        'Common_big_win': null,
        'Common_mega_win': null,
        'Common_super_win': null
      };
      _0x3a2794.SPIN_ACK_TYPE = {
        'AT_SUCCESS': 0x0,
        'AT_MONEY_NOT_ENOUGH': 0x1,
        'AT_MONEY_ABNORMAL': 0x2,
        'AT_MONEY_NOT_ENOUGH_SINGLE': 0x131,
        'API_BETONCE_FAIL': 0x7d3
      };
      _0x2a0856 = {
        0x0: {
          'CSH_PG1_TXT_1_1': "CSH_PG1_TXT_1_1",
          'CSH_PG1_TXT_1_2': "CSH_PG1_TXT_1_2",
          'CSH_PG1_TXT_1_3': "CSH_PG1_TXT_1_3"
        },
        0x1: {
          'CSH_PG2_TITLE_1': "CSH_PG2_TITLE_1",
          'CSH_PG2_TXT_1': "CSH_PG2_TXT_1",
          'CSH_PG2_TXT_2': "CSH_PG2_TXT_2"
        },
        0x2: {
          'CSH_PG3_TITLE_1': "CSH_PG3_TITLE_1",
          'CSH_PG3_TXT_1_1': "CSH_PG3_TXT_1_1",
          'CSH_PG3_TXT_1_2': "CSH_PG3_TXT_1_2",
          'CSH_PG3_TXT_1_3': "CSH_PG3_TXT_1_3",
          'CSH_PG3_TXT_2_1': "CSH_PG3_TXT_2_1",
          'CSH_PG3_TXT_2_2': "CSH_PG3_TXT_2_2",
          'CSH_PG3_TXT_2_3': "CSH_PG3_TXT_2_3",
          'CSH_PG3_TXT_2_4': "CSH_PG3_TXT_2_4",
          'CSH_PG3_TXT_2_5': "CSH_PG3_TXT_2_5"
        },
        0x3: {
          'CSH_PG4_TITLE_1': "CSH_PG4_TITLE_1",
          'CSH_PG4_TXT_1_1': "CSH_PG4_TXT_1_1",
          'CSH_PG4_TXT_1_2': "CSH_PG4_TXT_1_2",
          'CSH_PG4_TXT_1_3': 'CSH_PG4_TXT_1_3',
          'CSH_PG4_TXT_1_4': "CSH_PG4_TXT_1_4",
          'CSH_PG4_TXT_1_5': "CSH_PG4_TXT_1_5",
          'CSH_PG4_TXT_1_6': "CSH_PG4_TXT_1_6"
        }
      };
      _0x3a2794.STRING_KEY = {
        'WIN_TITLE': "WIN_TITLE",
        'RATIO_VIEW': _0x2a0856,
        'CSH_FEATURES_TXT': "CSH_FEATURES_TXT_"
      };
      _0x3a2794.AckType = {
        'login': 0x0,
        'logout': 0x1,
        'exchangeChips': 0x2,
        'last': 0x3,
        'info': 0xb,
        'spin': 0xc,
        'spinEnd': 0xd,
        'buyBonus': 0x24,
        'heartBeat': 0x62,
        'serverMsg': 0x63
      };
      _0x3a2794.SERVER_RET_TYPE = {
        'SERVER_SUCCESS': 0x0,
        'SERVER_ERROR_SEATE': 0x31f,
        'SERVER_NOUSE': 0x383,
        'SERVER_MAINTAIN': 0x3e6,
        'SERVER_SHUTDOWN': 0x3e7,
        'SERVER_NEED_UID': 0x3e9,
        'SERVER_NEED_LOGIN': 0x3ea,
        'SERVER_TOKEN_ERROR': 0x3eb
      };
      _0x3a2794.LOGIN_RESULT_TYPE = {
        'LOGIN_SUCCESS': 0x0,
        'LOGIN_FAIL': 0x1,
        'API_VERIFY_FAIL': 0x7d1,
        'API_LOGIN_REPEAT_FAIL': 0x7d2
      };
      _0x3a2794.HEART_BEAT_STATE = {
        'NOTIFY': 0x61,
        'MAINTAIN': 0x62,
        'CLOSE': 0x63
      };
      _0x3a2794.FeatureSpinAck = [{
        'ackVec': [{
          'awardVec': [{
            'awardSet': [{
              'symbol': 0x5,
              'gridVec': [{
                'c': 0x0,
                'r': 0x0
              }, {
                'c': 0x0,
                'r': 0x1
              }, {
                'c': 0x0,
                'r': 0x2
              }, {
                'c': 0x0,
                'r': 0x3
              }, {
                'c': 0x1,
                'r': 0x0
              }, {
                'c': 0x1,
                'r': 0x1
              }, {
                'c': 0x1,
                'r': 0x2
              }, {
                'c': 0x1,
                'r': 0x3
              }, {
                'c': 0x2,
                'r': 0x0
              }, {
                'c': 0x2,
                'r': 0x1
              }, {
                'c': 0x2,
                'r': 0x3
              }, {
                'c': 0x3,
                'r': 0x0
              }, {
                'c': 0x3,
                'r': 0x1
              }, {
                'c': 0x3,
                'r': 0x2
              }, {
                'c': 0x3,
                'r': 0x3
              }, {
                'c': 0x4,
                'r': 0x1
              }, {
                'c': 0x4,
                'r': 0x2
              }, {
                'c': 0x5,
                'r': 0x1
              }, {
                'c': 0x5,
                'r': 0x2
              }, {
                'c': 0x5,
                'r': 0x3
              }],
              'm': 0x360,
              's': 0x6,
              'l': 0x480,
              'w': false
            }],
            'award': 0x360
          }, {
            'awardSet': [{
              'symbol': 0x1,
              'gridVec': [{
                'c': 0x0,
                'r': 0x1
              }, {
                'c': 0x1,
                'r': 0x3
              }, {
                'c': 0x2,
                'r': 0x0
              }, {
                'c': 0x3,
                'r': 0x0
              }],
              'm': 0.5,
              's': 0x4,
              'l': 0x1,
              'w': false
            }],
            'award': 0.5
          }],
          'pc': null,
          'columnSymbol': [[0x5, 0x5, 0x5, 0x5, 0x7, 0x1, 0x9, 0x7, 0x5], [0x5, 0x5, 0x5, 0x5, 0xa, 0x4, 0x6, 0x1, 0x5], [0x5, 0x5, 0x2, 0x5, 0x1, 0x0, 0x9, 0x9], [0x5, 0x5, 0x5, 0x5, 0x1, 0x5, 0x6, 0x3, 0x4], [0x4, 0x5, 0x5, 0x3, 0x7, 0x9], [0x3, 0x5, 0x5, 0x5, 0x6, 0x0, 0x2]],
          'awardTypeFlag': 0x81,
          'remainRound': 0x8,
          'extraRound': 0x0,
          'extraOdds': 0x1,
          'coin': 76729.45,
          'logIndex': 0x16a2703d61fe7500
        }],
        'mgw': 864.5,
        'fgw': 0x0,
        'totalWin': 864.5,
        'si': "16309-894240-00923002",
        'nm': 76729.45,
        'act': 0x0
      }, {
        'ackVec': [{
          'awardVec': [{
            'awardSet': [{
              'symbol': 0x9,
              'gridVec': [{
                'c': 0x0,
                'r': 0x0
              }, {
                'c': 0x1,
                'r': 0x1
              }, {
                'c': 0x2,
                'r': 0x0
              }, {
                'c': 0x3,
                'r': 0x0
              }, {
                'c': 0x4,
                'r': 0x3
              }, {
                'c': 0x5,
                'r': 0x1
              }],
              'm': 0x0,
              's': 0x6,
              'l': 0x0,
              'w': false
            }],
            'award': 0x0
          }],
          'pc': null,
          'columnSymbol': [[0x9, 0x3, 0x3, 0x2], [0x7, 0x9, 0x0, 0x1], [0x9, 0x4, 0x5, 0x0], [0x9, 0x5, 0x0, 0x8], [0x0, 0x5, 0x4, 0x9], [0x2, 0x9, 0x0, 0x7]],
          'awardTypeFlag': 0x4,
          'remainRound': 0x8,
          'extraRound': 0x0,
          'extraOdds': 0x1,
          'coin': 684053.99,
          'logIndex': 0x16c341ad90652900
        }, {
          'awardVec': null,
          'pc': null,
          'columnSymbol': [[0x1, 0x7, 0x7, 0x2], [0x4, 0x3, 0x0, 0x4], [0x6, 0x6, 0x3, 0x7], [0x5, 0x6, 0x3, 0x3], [0x4, 0x0, 0x5, 0x6], [0x7, 0x2, 0x1, 0x1]],
          'awardTypeFlag': 0x8,
          'remainRound': 0x7,
          'extraRound': 0x0,
          'extraOdds': 0x1,
          'coin': 684053.99,
          'logIndex': 0x16c341ad90655000
        }, {
          'awardVec': [{
            'awardSet': [{
              'symbol': 0xa,
              'gridVec': [{
                'c': 0x4,
                'r': 0x2
              }],
              'm': 0x0,
              's': 0x1,
              'l': 0x0,
              'w': false
            }],
            'award': 0x0
          }],
          'pc': null,
          'columnSymbol': [[0x3, 0x5, 0x4, 0x5], [0x7, 0x0, 0x1, 0x1], [0x4, 0x7, 0x5, 0x2], [0x7, 0x8, 0x6, 0x1], [0x6, 0x7, 0xa, 0x4], [0x2, 0x3, 0x3, 0x1]],
          'awardTypeFlag': 0x8,
          'remainRound': 0x6,
          'extraRound': 0x1,
          'extraOdds': 0x1,
          'coin': 684053.99,
          'logIndex': 0x16c341ad90657800
        }, {
          'awardVec': [{
            'awardSet': [{
              'symbol': 0x5,
              'gridVec': [{
                'c': 0x0,
                'r': 0x1
              }, {
                'c': 0x1,
                'r': 0x0
              }, {
                'c': 0x2,
                'r': 0x1
              }],
              'm': 0.8,
              's': 0x3,
              'l': 0x1,
              'w': false
            }],
            'award': 0.8
          }],
          'pc': null,
          'columnSymbol': [[0x6, 0x5, 0x6, 0x1, 0x6], [0x5, 0x4, 0x2, 0x7, 0x5], [0x6, 0x5, 0x6, 0x4, 0x7], [0x7, 0x7, 0x6, 0x6], [0x7, 0x4, 0x5, 0x3], [0x2, 0x5, 0x7, 0x5]],
          'awardTypeFlag': 0x9,
          'remainRound': 0x5,
          'extraRound': 0x1,
          'extraOdds': 0x1,
          'coin': 684054.79,
          'logIndex': 0x16c341ad90659f00
        }, {
          'awardVec': [{
            'awardSet': [{
              'symbol': 0x5,
              'gridVec': [{
                'c': 0x0,
                'r': 0x0
              }, {
                'c': 0x1,
                'r': 0x1
              }, {
                'c': 0x2,
                'r': 0x2
              }],
              'm': 0.8,
              's': 0x3,
              'l': 0x1,
              'w': false
            }],
            'award': 0.8
          }, {
            'awardSet': [{
              'symbol': 0x0,
              'gridVec': [{
                'c': 0x0,
                'r': 0x0
              }, {
                'c': 0x1,
                'r': 0x3
              }, {
                'c': 0x2,
                'r': 0x1
              }],
              'm': 0x5,
              's': 0x3,
              'l': 0x1,
              'w': false
            }],
            'award': 0x5
          }, {
            'awardSet': [{
              'symbol': 0x7,
              'gridVec': [{
                'c': 0x0,
                'r': 0x0
              }, {
                'c': 0x1,
                'r': 0x0
              }, {
                'c': 0x1,
                'r': 0x1
              }, {
                'c': 0x2,
                'r': 0x2
              }, {
                'c': 0x3,
                'r': 0x2
              }],
              'm': 0x2,
              's': 0x4,
              'l': 0x2,
              'w': false
            }],
            'award': 0x2
          }, {
            'awardSet': [{
              'symbol': 0xa,
              'gridVec': [{
                'c': 0x0,
                'r': 0x3
              }, {
                'c': 0x5,
                'r': 0x3
              }],
              'm': 0x0,
              's': 0x2,
              'l': 0x0,
              'w': false
            }],
            'award': 0x0
          }],
          'pc': null,
          'columnSymbol': [[0x5, 0x3, 0x4, 0xa, 0x0, 0x7, 0x7], [0x7, 0x5, 0x3, 0x0, 0x7, 0x3, 0x1, 0x0], [0x1, 0x0, 0x5, 0x6, 0x7, 0x1, 0x2], [0x6, 0x1, 0x7, 0x3, 0x2], [0x6, 0x4, 0x6, 0x4], [0x5, 0x1, 0x0, 0xa]],
          'awardTypeFlag': 0x9,
          'remainRound': 0x4,
          'extraRound': 0x3,
          'extraOdds': 0x1,
          'coin': 684062.59,
          'logIndex': 0x16c341ad9065c600
        }, {
          'awardVec': null,
          'pc': null,
          'columnSymbol': [[0x7, 0x4, 0x7, 0x7], [0x3, 0x1, 0x0, 0x6], [0x6, 0x4, 0x7, 0x4], [0x1, 0x0, 0x0, 0x8], [0x4, 0x2, 0x6, 0x4], [0x1, 0x1, 0x2, 0x4]],
          'awardTypeFlag': 0x8,
          'remainRound': 0x3,
          'extraRound': 0x3,
          'extraOdds': 0x1,
          'coin': 684062.59,
          'logIndex': 0x16c341ad9065ed00
        }, {
          'awardVec': [{
            'awardSet': [{
              'symbol': 0x3,
              'gridVec': [{
                'c': 0x0,
                'r': 0x0
              }, {
                'c': 0x1,
                'r': 0x1
              }, {
                'c': 0x2,
                'r': 0x3
              }, {
                'c': 0x3,
                'r': 0x1
              }, {
                'c': 0x4,
                'r': 0x2
              }, {
                'c': 0x5,
                'r': 0x0
              }, {
                'c': 0x5,
                'r': 0x1
              }, {
                'c': 0x5,
                'r': 0x2
              }, {
                'c': 0x5,
                'r': 0x3
              }],
              'm': 0x78,
              's': 0x6,
              'l': 0x4,
              'w': false
            }],
            'award': 0x78
          }, {
            'awardSet': [{
              'symbol': 0xa,
              'gridVec': [{
                'c': 0x3,
                'r': 0x0
              }],
              'm': 0x0,
              's': 0x1,
              'l': 0x0,
              'w': false
            }],
            'award': 0x0
          }],
          'pc': null,
          'columnSymbol': [[0x3, 0x6, 0x5, 0x6, 0x3], [0x1, 0x3, 0x2, 0x1, 0x4], [0x1, 0x6, 0x7, 0x3, 0x6], [0xa, 0x3, 0x4, 0x2, 0x4], [0x1, 0x7, 0x3, 0x4, 0x4], [0x3, 0x3, 0x3, 0x3, 0x3, 0x2, 0x2, 0x0]],
          'awardTypeFlag': 0x9,
          'remainRound': 0x2,
          'extraRound': 0x4,
          'extraOdds': 0x1,
          'coin': 684182.59,
          'logIndex': 0x16c341ad90661400
        }, {
          'awardVec': [{
            'awardSet': [{
              'symbol': 0x6,
              'gridVec': [{
                'c': 0x0,
                'r': 0x0
              }, {
                'c': 0x0,
                'r': 0x2
              }, {
                'c': 0x1,
                'r': 0x1
              }, {
                'c': 0x2,
                'r': 0x2
              }, {
                'c': 0x2,
                'r': 0x3
              }, {
                'c': 0x3,
                'r': 0x1
              }, {
                'c': 0x4,
                'r': 0x1
              }],
              'm': 0x10,
              's': 0x5,
              'l': 0x4,
              'w': false
            }],
            'award': 0x10
          }, {
            'awardSet': [{
              'symbol': 0x4,
              'gridVec': [{
                'c': 0x0,
                'r': 0x2
              }, {
                'c': 0x1,
                'r': 0x2
              }, {
                'c': 0x2,
                'r': 0x0
              }, {
                'c': 0x2,
                'r': 0x2
              }],
              'm': 0x2,
              's': 0x3,
              'l': 0x2,
              'w': false
            }, {
              'symbol': 0x7,
              'gridVec': [{
                'c': 0x0,
                'r': 0x0
              }, {
                'c': 0x1,
                'r': 0x0
              }, {
                'c': 0x2,
                'r': 0x1
              }, {
                'c': 0x3,
                'r': 0x0
              }, {
                'c': 0x3,
                'r': 0x1
              }, {
                'c': 0x3,
                'r': 0x3
              }],
              'm': 0x3,
              's': 0x4,
              'l': 0x3,
              'w': false
            }],
            'award': 0x5
          }, {
            'awardSet': [{
              'symbol': 0x1,
              'gridVec': [{
                'c': 0x0,
                'r': 0x3
              }, {
                'c': 0x1,
                'r': 0x3
              }, {
                'c': 0x2,
                'r': 0x0
              }, {
                'c': 0x2,
                'r': 0x2
              }],
              'm': 0x8,
              's': 0x3,
              'l': 0x2,
              'w': true
            }, {
              'symbol': 0x4,
              'gridVec': [{
                'c': 0x0,
                'r': 0x2
              }, {
                'c': 0x1,
                'r': 0x0
              }, {
                'c': 0x2,
                'r': 0x1
              }, {
                'c': 0x2,
                'r': 0x2
              }],
              'm': 0x2,
              's': 0x3,
              'l': 0x2,
              'w': true
            }],
            'award': 0xa
          }],
          'pc': null,
          'columnSymbol': [[0x6, 0x5, 0x6, 0x1, 0x7, 0x4, 0x7, 0x4, 0x7, 0x3], [0x7, 0x6, 0x4, 0x1, 0x3, 0x4, 0x0, 0x7, 0x3], [0x4, 0x7, 0x6, 0x6, 0x4, 0x6, 0x1, 0x4, 0x8, 0x5, 0x5, 0x4], [0x7, 0x6, 0x2, 0x7, 0x7, 0x0, 0x7, 0x5], [0x5, 0x6, 0x0, 0x2, 0x2], [0x0, 0x4, 0x0, 0x0]],
          'awardTypeFlag': 0x9,
          'remainRound': 0x1,
          'extraRound': 0x4,
          'extraOdds': 0x1,
          'coin': 684213.59,
          'logIndex': 0x16c341ad90663b00
        }, {
          'awardVec': [{
            'awardSet': [{
              'symbol': 0x1,
              'gridVec': [{
                'c': 0x0,
                'r': 0x0
              }, {
                'c': 0x1,
                'r': 0x3
              }, {
                'c': 0x2,
                'r': 0x2
              }, {
                'c': 0x2,
                'r': 0x3
              }, {
                'c': 0x3,
                'r': 0x1
              }],
              'm': 0x14,
              's': 0x4,
              'l': 0x2,
              'w': false
            }],
            'award': 0x14
          }],
          'pc': null,
          'columnSymbol': [[0x1, 0x7, 0x4, 0x4, 0x7], [0x2, 0x2, 0x0, 0x1, 0x0], [0x5, 0x5, 0x1, 0x1, 0x2, 0x5], [0x0, 0x1, 0x2, 0x5, 0x6], [0x4, 0x7, 0x6, 0x2], [0x1, 0x6, 0x2, 0x0]],
          'awardTypeFlag': 0x9,
          'remainRound': 0x0,
          'extraRound': 0x4,
          'extraOdds': 0x1,
          'coin': 684233.59,
          'logIndex': 0x16c341ad90666200
        }, {
          'awardVec': [{
            'awardSet': [{
              'symbol': 0xa,
              'gridVec': [{
                'c': 0x1,
                'r': 0x3
              }, {
                'c': 0x3,
                'r': 0x2
              }],
              'm': 0x0,
              's': 0x2,
              'l': 0x0,
              'w': false
            }],
            'award': 0x0
          }],
          'pc': null,
          'columnSymbol': [[0x6, 0x3, 0x6, 0x1], [0x2, 0x0, 0x2, 0xa], [0x4, 0x5, 0x6, 0x7], [0x3, 0x1, 0xa, 0x3], [0x1, 0x6, 0x7, 0x8], [0x7, 0x1, 0x1, 0x5]],
          'awardTypeFlag': 0x8,
          'remainRound': 0x3,
          'extraRound': 0x2,
          'extraOdds': 0x2,
          'coin': 684233.59,
          'logIndex': 0x16c341ad90668900
        }, {
          'awardVec': [{
            'awardSet': [{
              'symbol': 0x4,
              'gridVec': [{
                'c': 0x0,
                'r': 0x0
              }, {
                'c': 0x0,
                'r': 0x1
              }, {
                'c': 0x1,
                'r': 0x3
              }, {
                'c': 0x2,
                'r': 0x0
              }, {
                'c': 0x2,
                'r': 0x1
              }],
              'm': 0x8,
              's': 0x3,
              'l': 0x4,
              'w': false
            }, {
              'symbol': 0x7,
              'gridVec': [{
                'c': 0x0,
                'r': 0x2
              }, {
                'c': 0x1,
                'r': 0x0
              }, {
                'c': 0x2,
                'r': 0x3
              }],
              'm': 0.4,
              's': 0x3,
              'l': 0x1,
              'w': false
            }],
            'award': 8.4
          }, {
            'awardSet': [{
              'symbol': 0x3,
              'gridVec': [{
                'c': 0x0,
                'r': 0x3
              }, {
                'c': 0x1,
                'r': 0x0
              }, {
                'c': 0x1,
                'r': 0x1
              }, {
                'c': 0x1,
                'r': 0x2
              }, {
                'c': 0x1,
                'r': 0x3
              }, {
                'c': 0x2,
                'r': 0x0
              }, {
                'c': 0x3,
                'r': 0x2
              }],
              'm': 0x20,
              's': 0x4,
              'l': 0x4,
              'w': true
            }, {
              'symbol': 0x5,
              'gridVec': [{
                'c': 0x0,
                'r': 0x0
              }, {
                'c': 0x1,
                'r': 0x0
              }, {
                'c': 0x2,
                'r': 0x2
              }],
              'm': 1.6,
              's': 0x3,
              'l': 0x1,
              'w': true
            }, {
              'symbol': 0x6,
              'gridVec': [{
                'c': 0x0,
                'r': 0x1
              }, {
                'c': 0x1,
                'r': 0x0
              }, {
                'c': 0x2,
                'r': 0x3
              }, {
                'c': 0x3,
                'r': 0x0
              }, {
                'c': 0x3,
                'r': 0x3
              }, {
                'c': 0x4,
                'r': 0x2
              }, {
                'c': 0x5,
                'r': 0x2
              }],
              'm': 0x28,
              's': 0x6,
              'l': 0x2,
              'w': true
            }],
            'award': 73.6
          }],
          'pc': null,
          'columnSymbol': [[0x4, 0x4, 0x7, 0x3, 0x5, 0x6, 0x0, 0x3, 0x1, 0x2], [0x7, 0x3, 0x3, 0x4, 0x8, 0x3, 0x6, 0x6, 0x2, 0x4], [0x4, 0x4, 0x5, 0x7, 0x3, 0x4, 0x6, 0x6, 0x3, 0x7], [0x6, 0x2, 0x3, 0x6, 0x2, 0x7, 0x1], [0x4, 0x7, 0x6, 0x5, 0x6], [0x2, 0x0, 0x6, 0x1, 0x3]],
          'awardTypeFlag': 0x9,
          'remainRound': 0x2,
          'extraRound': 0x2,
          'extraOdds': 0x2,
          'coin': 684315.59,
          'logIndex': 0x16c341ad9066b000
        }, {
          'awardVec': [{
            'awardSet': [{
              'symbol': 0xa,
              'gridVec': [{
                'c': 0x4,
                'r': 0x3
              }],
              'm': 0x0,
              's': 0x1,
              'l': 0x0,
              'w': false
            }],
            'award': 0x0
          }],
          'pc': null,
          'columnSymbol': [[0x7, 0x7, 0x7, 0x1], [0x7, 0x2, 0x1, 0x0], [0x6, 0x4, 0x6, 0x5], [0x2, 0x3, 0x0, 0x5], [0x4, 0x2, 0x4, 0xa], [0x1, 0x6, 0x1, 0x3]],
          'awardTypeFlag': 0x8,
          'remainRound': 0x1,
          'extraRound': 0x3,
          'extraOdds': 0x2,
          'coin': 684315.59,
          'logIndex': 0x16c341ad9066d700
        }, {
          'awardVec': null,
          'pc': null,
          'columnSymbol': [[0x6, 0x6, 0x3, 0x6], [0x5, 0x4, 0x3, 0x3], [0x5, 0x6, 0x6, 0x4], [0x2, 0x3, 0x1, 0x7], [0x5, 0x7, 0x7, 0x6], [0x1, 0x4, 0x0, 0x1]],
          'awardTypeFlag': 0x8,
          'remainRound': 0x0,
          'extraRound': 0x3,
          'extraOdds': 0x2,
          'coin': 684315.59,
          'logIndex': 0x16c341ad9066fe00
        }, {
          'awardVec': [{
            'awardSet': [{
              'symbol': 0x0,
              'gridVec': [{
                'c': 0x0,
                'r': 0x2
              }, {
                'c': 0x1,
                'r': 0x0
              }, {
                'c': 0x2,
                'r': 0x2
              }, {
                'c': 0x3,
                'r': 0x0
              }],
              'm': 0x2d,
              's': 0x4,
              'l': 0x1,
              'w': true
            }, {
              'symbol': 0x4,
              'gridVec': [{
                'c': 0x0,
                'r': 0x3
              }, {
                'c': 0x1,
                'r': 0x1
              }, {
                'c': 0x2,
                'r': 0x2
              }, {
                'c': 0x3,
                'r': 0x1
              }, {
                'c': 0x4,
                'r': 0x0
              }],
              'm': 0x18,
              's': 0x5,
              'l': 0x1,
              'w': true
            }],
            'award': 0x45
          }, {
            'awardSet': [{
              'symbol': 0x6,
              'gridVec': [{
                'c': 0x0,
                'r': 0x3
              }, {
                'c': 0x1,
                'r': 0x2
              }, {
                'c': 0x2,
                'r': 0x2
              }, {
                'c': 0x2,
                'r': 0x3
              }],
              'm': 2.4,
              's': 0x3,
              'l': 0x2,
              'w': false
            }],
            'award': 2.4
          }, {
            'awardSet': [{
              'symbol': 0xa,
              'gridVec': [{
                'c': 0x0,
                'r': 0x1
              }, {
                'c': 0x5,
                'r': 0x0
              }],
              'm': 0x0,
              's': 0x2,
              'l': 0x0,
              'w': false
            }],
            'award': 0x0
          }],
          'pc': null,
          'columnSymbol': [[0x7, 0xa, 0x0, 0x4, 0x4, 0x6, 0x6], [0x0, 0x4, 0x6, 0x1, 0x1, 0x0, 0x2], [0x5, 0x7, 0x8, 0x6, 0x6, 0x4, 0x5], [0x0, 0x4, 0x2, 0x2, 0x4, 0x5], [0x4, 0x6, 0x6, 0x3, 0x4], [0xa, 0x3, 0x1, 0x0]],
          'awardTypeFlag': 0x9,
          'remainRound': 0x2,
          'extraRound': 0x2,
          'extraOdds': 0x3,
          'coin': 684386.99,
          'logIndex': 0x16c341ad90672500
        }, {
          'awardVec': [{
            'awardSet': [{
              'symbol': 0x5,
              'gridVec': [{
                'c': 0x0,
                'r': 0x2
              }, {
                'c': 0x0,
                'r': 0x3
              }, {
                'c': 0x1,
                'r': 0x3
              }, {
                'c': 0x2,
                'r': 0x2
              }, {
                'c': 0x3,
                'r': 0x2
              }, {
                'c': 0x4,
                'r': 0x0
              }, {
                'c': 0x4,
                'r': 0x2
              }, {
                'c': 0x5,
                'r': 0x3
              }],
              'm': 0xb4,
              's': 0x6,
              'l': 0x4,
              'w': true
            }],
            'award': 0xb4
          }, {
            'awardSet': [{
              'symbol': 0xa,
              'gridVec': [{
                'c': 0x5,
                'r': 0x3
              }],
              'm': 0x0,
              's': 0x1,
              'l': 0x0,
              'w': false
            }],
            'award': 0x0
          }],
          'pc': null,
          'columnSymbol': [[0x6, 0x0, 0x5, 0x5, 0x1, 0x6], [0x2, 0x7, 0x7, 0x5, 0x4], [0x1, 0x4, 0x8, 0x7, 0x1], [0x2, 0x1, 0x5, 0x2, 0x0], [0x5, 0x1, 0x5, 0x4, 0x0, 0x4], [0x7, 0x3, 0x3, 0x5, 0xa]],
          'awardTypeFlag': 0x9,
          'remainRound': 0x1,
          'extraRound': 0x3,
          'extraOdds': 0x3,
          'coin': 684566.99,
          'logIndex': 0x16c341ad90674c00
        }, {
          'awardVec': [{
            'awardSet': [{
              'symbol': 0x1,
              'gridVec': [{
                'c': 0x0,
                'r': 0x3
              }, {
                'c': 0x1,
                'r': 0x0
              }, {
                'c': 0x1,
                'r': 0x1
              }, {
                'c': 0x2,
                'r': 0x1
              }, {
                'c': 0x2,
                'r': 0x2
              }, {
                'c': 0x3,
                'r': 0x2
              }, {
                'c': 0x3,
                'r': 0x3
              }, {
                'c': 0x4,
                'r': 0x1
              }, {
                'c': 0x5,
                'r': 0x0
              }, {
                'c': 0x5,
                'r': 0x2
              }],
              'm': 0xb40,
              's': 0x6,
              'l': 0x10,
              'w': true
            }],
            'award': 0xb40
          }],
          'pc': null,
          'columnSymbol': [[0x0, 0x2, 0x2, 0x1, 0x7], [0x1, 0x8, 0x6, 0x3, 0x0, 0x4], [0x7, 0x1, 0x1, 0x6, 0x2, 0x6], [0x6, 0x2, 0x8, 0x1, 0x0, 0x0], [0x7, 0x1, 0x4, 0x0, 0x7], [0x1, 0x2, 0x1, 0x4, 0x4, 0x0]],
          'awardTypeFlag': 0x9,
          'remainRound': 0x0,
          'extraRound': 0x3,
          'extraOdds': 0x3,
          'coin': 687446.99,
          'logIndex': 0x16c341ad90677300
        }, {
          'awardVec': [{
            'awardSet': [{
              'symbol': 0x3,
              'gridVec': [{
                'c': 0x0,
                'r': 0x2
              }, {
                'c': 0x1,
                'r': 0x0
              }, {
                'c': 0x1,
                'r': 0x2
              }, {
                'c': 0x1,
                'r': 0x3
              }, {
                'c': 0x2,
                'r': 0x1
              }],
              'm': 0x18,
              's': 0x3,
              'l': 0x3,
              'w': false
            }],
            'award': 0x18
          }, {
            'awardSet': [{
              'symbol': 0x7,
              'gridVec': [{
                'c': 0x0,
                'r': 0x1
              }, {
                'c': 0x1,
                'r': 0x0
              }, {
                'c': 0x1,
                'r': 0x3
              }, {
                'c': 0x2,
                'r': 0x2
              }],
              'm': 1.6,
              's': 0x3,
              'l': 0x2,
              'w': false
            }],
            'award': 1.6
          }, {
            'awardSet': [{
              'symbol': 0x2,
              'gridVec': [{
                'c': 0x0,
                'r': 0x3
              }, {
                'c': 0x1,
                'r': 0x3
              }, {
                'c': 0x2,
                'r': 0x0
              }, {
                'c': 0x3,
                'r': 0x0
              }, {
                'c': 0x3,
                'r': 0x3
              }],
              'm': 0x28,
              's': 0x4,
              'l': 0x2,
              'w': false
            }],
            'award': 0x28
          }],
          'pc': null,
          'columnSymbol': [[0x6, 0x7, 0x3, 0x2, 0x5, 0x7, 0x2], [0x3, 0x4, 0x3, 0x3, 0x7, 0x0, 0x7, 0x7, 0x2, 0x0], [0x2, 0x3, 0x7, 0x1, 0x1, 0x5, 0x5], [0x2, 0x0, 0x1, 0x2, 0x1, 0x6], [0x5, 0x7, 0x4, 0x7], [0x3, 0x0, 0x6, 0x2]],
          'awardTypeFlag': 0x9,
          'remainRound': 0x2,
          'extraRound': 0x0,
          'extraOdds': 0x4,
          'coin': 687512.59,
          'logIndex': 0x16c341ad90679a00
        }, {
          'awardVec': [{
            'awardSet': [{
              'symbol': 0x6,
              'gridVec': [{
                'c': 0x0,
                'r': 0x1
              }, {
                'c': 0x1,
                'r': 0x1
              }, {
                'c': 0x2,
                'r': 0x2
              }],
              'm': 1.6,
              's': 0x3,
              'l': 0x1,
              'w': true
            }],
            'award': 1.6
          }, {
            'awardSet': [{
              'symbol': 0x1,
              'gridVec': [{
                'c': 0x0,
                'r': 0x3
              }, {
                'c': 0x1,
                'r': 0x2
              }, {
                'c': 0x2,
                'r': 0x2
              }],
              'm': 0x10,
              's': 0x3,
              'l': 0x1,
              'w': false
            }],
            'award': 0x10
          }],
          'pc': null,
          'columnSymbol': [[0x3, 0x6, 0x0, 0x1, 0x7, 0x7], [0x0, 0x8, 0x1, 0x0, 0x7, 0x5], [0x2, 0x4, 0x6, 0x5, 0x1, 0x6], [0x5, 0x2, 0x0, 0x2], [0x7, 0x2, 0x5, 0x4], [0x7, 0x6, 0x2, 0x0]],
          'awardTypeFlag': 0x9,
          'remainRound': 0x1,
          'extraRound': 0x0,
          'extraOdds': 0x4,
          'coin': 687530.19,
          'logIndex': 0x16c341ad9067c100
        }, {
          'awardVec': [{
            'awardSet': [{
              'symbol': 0x1,
              'gridVec': [{
                'c': 0x0,
                'r': 0x3
              }, {
                'c': 0x1,
                'r': 0x1
              }, {
                'c': 0x2,
                'r': 0x1
              }, {
                'c': 0x3,
                'r': 0x1
              }],
              'm': 0x28,
              's': 0x4,
              'l': 0x1,
              'w': false
            }, {
              'symbol': 0x7,
              'gridVec': [{
                'c': 0x0,
                'r': 0x1
              }, {
                'c': 0x1,
                'r': 0x0
              }, {
                'c': 0x1,
                'r': 0x2
              }, {
                'c': 0x2,
                'r': 0x2
              }, {
                'c': 0x2,
                'r': 0x3
              }],
              'm': 3.2,
              's': 0x3,
              'l': 0x4,
              'w': false
            }],
            'award': 43.2
          }, {
            'awardSet': [{
              'symbol': 0x2,
              'gridVec': [{
                'c': 0x0,
                'r': 0x3
              }, {
                'c': 0x1,
                'r': 0x1
              }, {
                'c': 0x1,
                'r': 0x2
              }, {
                'c': 0x1,
                'r': 0x3
              }, {
                'c': 0x2,
                'r': 0x1
              }],
              'm': 28.799999999999997,
              's': 0x3,
              'l': 0x3,
              'w': false
            }],
            'award': 28.8
          }, {
            'awardSet': [{
              'symbol': 0x6,
              'gridVec': [{
                'c': 0x0,
                'r': 0x2
              }, {
                'c': 0x1,
                'r': 0x1
              }, {
                'c': 0x2,
                'r': 0x1
              }, {
                'c': 0x3,
                'r': 0x0
              }, {
                'c': 0x3,
                'r': 0x3
              }],
              'm': 11.200000000000001,
              's': 0x4,
              'l': 0x2,
              'w': false
            }],
            'award': 11.2
          }, {
            'awardSet': [{
              'symbol': 0x4,
              'gridVec': [{
                'c': 0x0,
                'r': 0x0
              }, {
                'c': 0x1,
                'r': 0x2
              }, {
                'c': 0x2,
                'r': 0x1
              }],
              'm': 0x4,
              's': 0x3,
              'l': 0x1,
              'w': false
            }],
            'award': 0x4
          }],
          'pc': null,
          'columnSymbol': [[0x4, 0x7, 0x6, 0x1, 0x5, 0x2, 0x2, 0x5, 0x7], [0x7, 0x1, 0x7, 0x2, 0x0, 0x2, 0x2, 0x6, 0x4, 0x2, 0x2, 0x3], [0x5, 0x1, 0x7, 0x7, 0x2, 0x5, 0x5, 0x6, 0x4, 0x1], [0x6, 0x1, 0x3, 0x6, 0x1, 0x0, 0x1], [0x7, 0x2, 0x5, 0x3], [0x5, 0x1, 0x7, 0x0]],
          'awardTypeFlag': 0x19,
          'remainRound': 0x0,
          'extraRound': 0x0,
          'extraOdds': 0x4,
          'coin': 687617.39,
          'logIndex': 0x16c341ad9067e900
        }],
        'mgw': 0x0,
        'fgw': 3563.4,
        'totalWin': 3563.4,
        'si': "16402-269030-00689002",
        'nm': 687617.39,
        'act': 0x0
      }];
      _0x3a2794.Test = {
        'ackVec': [{
          'awardVec': null,
          'columnSymbol': [[0x9, 0x1, 0x3, 0x5], [0x5, 0x9, 0x0, 0x3], [0x6, 0x9, 0x9, 0x7], [0x3, 0x9, 0xa, 0x0], [0x9, 0x7, 0x9, 0x2], [0x4, 0x1, 0x4, 0x2]],
          'awardTypeFlag': 0x0,
          'remainRound': 0x8,
          'extraRound': 0x0,
          'extraOdds': 0x1
        }],
        'mgw': 0x0,
        'fgw': 0x0,
        'act': 0x0,
        'totalWin': 0x0,
        'si': '',
        'nm': 0x0
      };
      _0xbd733f._RF.pop();
      _0xbd733f._RF.push({}, "a47f8FJPMFG1IbLI8lPYXO5", 'CSHLanguageSetting', undefined);
      var _0x165e9b = function () {
        function _0x1cd40c() {}
        _0x1cd40c.GetStringPath = function (_0x51032c) {
          return _0x51032c.replace('%s', _0x417cba.CurrLang);
        };
        _0x1cd40c.GetPosDiff = function (_0x35e28f) {
          var _0x1b1a68 = _0x1cd40c.POS_DIFF[_0x417cba.CurrLang];
          return null != _0x1b1a68 && null != _0x1b1a68[_0x35e28f] ? _0x1b1a68[_0x35e28f] : new _0x5a6787(0x0, 0x0);
        };
        return _0x1cd40c;
      }();
      var _0x261bbc;
      _0x165e9b.IMG_TEXT_KEY = {
        'BOUN_01ST_T01': "boun_01st_t01",
        'BOUN_01ST_T02': "boun_01st_t02",
        'FREE_TOP_PANEL_ROUND_WORD': "free_top_panel_round_word",
        'FREE_TOP_WORD_GET': 'free_top_word_get',
        'FREE_TOP_WORD_ROUND': 'free_top_word_round',
        'IMG_LOGO_CSH': "img_logo_csh",
        'TOL_TA01': 'tol_Ta01',
        'TOL_TB01': "tol_Tb01",
        'TOL_TB02': "tol_Tb02",
        'TOL_TB03': 'tol_Tb03',
        'TOL_TB04': "tol_Tb04"
      };
      _0x165e9b.FILE_PATH_KEY = {
        'STRING_IMG': "./Text/%s/GameTextImg"
      };
      _0x37cb6b = {
        tw: {}
      };
      _0x5ddfe0 = {
        [_0x165e9b.IMG_TEXT_KEY.FREE_TOP_PANEL_ROUND_WORD]: new _0x5a6787(0x0, 0x0)
      };
      _0x37cb6b.cn = _0x5ddfe0;
      _0x4880c2 = {
        [_0x165e9b.IMG_TEXT_KEY.FREE_TOP_PANEL_ROUND_WORD]: new _0x5a6787(0x0, 0x4)
      };
      _0x37cb6b.en = _0x4880c2;
      _0x2ae434 = {
        [_0x165e9b.IMG_TEXT_KEY.FREE_TOP_PANEL_ROUND_WORD]: new _0x5a6787(0x0, 0x0)
      };
      _0x37cb6b.th = _0x2ae434;
      _0x253ede = {
        [_0x165e9b.IMG_TEXT_KEY.FREE_TOP_PANEL_ROUND_WORD]: new _0x5a6787(0x0, 0x4)
      };
      _0x37cb6b.id = _0x253ede;
      _0x48df38 = {
        [_0x165e9b.IMG_TEXT_KEY.FREE_TOP_PANEL_ROUND_WORD]: new _0x5a6787(0x0, 0x4)
      };
      _0x37cb6b.vn = _0x48df38;
      _0x165e9b.POS_DIFF = _0x37cb6b;
      _0xbd733f._RF.pop();
      _0xbd733f._RF.push({}, "098ceaXjIJKuKfpVZcu4vSs", "SlotReels", undefined);
      var _0x518397 = [0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x3, 0x3, 0x3, 0x4, 0x4, 0x4, 0x5, 0x5, 0x5, 0x6, 0x6, 0x6, 0x7, 0x7, 0x7, 0x8, 0x8, 0x8, 0x9, 0x9, 0x9, 0xa, 0xa, 0xa, 0xb];
      var _0x1c0dcd = _0x4def64.ccclass;
      var _0x42e620 = _0x1c0dcd(_0x261bbc = function () {
        function _0x2dfff0(_0x20b34d) {
          this.m_spinSpeed = 0.2;
          this.m_timesOfBaseSpin = 0x2;
          this.m_spinIntervalTimes = 1.8;
          this.m_riseTime = 0x0;
          this.m_upLength = 0xa;
          this.m_spinBufferTime01 = 0x0;
          this.m_spinBufferTime02 = 0x0;
          this.m_downLength = -0x3c;
          this.m_spinDelayTime = 0.2;
          this.m_plateInfo = new Array();
          this.m_clipNode = undefined;
          this.m_viewSize = undefined;
          this.m_symbolSize = undefined;
          this.m_symbol = new Array();
          this.m_isSymbolEndAniPlayed = new Array();
          this.m_column = undefined;
          this.m_row = undefined;
          this.m_reelSize = new Array();
          this.m_symbolPicList = new Array();
          this.m_specialSymbolPicList = undefined;
          this.m_reelPositionOffset = undefined;
          this.m_accumulateNumber = new Array();
          this.m_mapPositionToIndex = new Array();
          this.m_mapIndexToPosition = new Array();
          this.m_numberOfSymbol = 0x0;
          this.m_spriteFrames = undefined;
          this.m_upperSymbol = new Array();
          this.m_lowerSymbol = new Array();
          this.m_isStop = false;
          this.m_playStopSound = undefined;
          this.m_doReelStopFunc = undefined;
          this.m_inBonusGame = false;
          this.m_isChangeSymbol = new Array();
          this.m_isChangeToFinalSymbol = new Array();
          this.m_isPlaySound = new Array();
          this.m_isClickStopBtn = false;
          this.m_time = 0x0;
          this.m_stopTime = 0x0;
          this.m_reelStopTime = new Array();
          this.m_stopCount = 0x0;
          this.m_initPlate = undefined;
          this.m_isLoaded = false;
          this.m_isNearWin = undefined;
          this.m_isNearWinCbSent = undefined;
          this.m_nearWinColumnIdx = undefined;
          this.m_nearWinCbFunc = undefined;
          this.m_allAniEnded = undefined;
          this.m_stripsList = undefined;
          this.m_stripsListIndex = undefined;
          this.m_nearWinEndCbFunc = undefined;
          this.m_nearWinColumnEndIdx = undefined;
          this.m_isTest = false;
          this.m_controller = undefined;
          this.m_oldPlateInfo = null;
          this.m_hardStopIntervalTime = null;
          this.m_clipNode = _0x20b34d;
          this.m_viewSize = {
            'width': 0x0,
            'height': 0x0
          };
          this.m_symbolSize = {
            'width': 0x0,
            'height': 0x0
          };
          this.m_symbol = new Array();
        }
        var _0x22c434 = _0x2dfff0.prototype;
        _0x22c434.Init = function (_0x3860d8, _0x356f0e, _0x11eb1e, _0x2254b3, _0x4eee6b, _0x1ba067, _0x27925e, _0x4a3bf3, _0x40d9f0) {
          var _0x5cc60b = this;
          this.m_controller = _0x40d9f0;
          this.m_viewSize.width = _0x3860d8;
          this.m_viewSize.height = _0x356f0e;
          this.m_column = _0x11eb1e;
          this.m_row = _0x2254b3;
          this.m_symbolSize.width = _0x3860d8 / _0x11eb1e;
          this.m_symbolSize.height = _0x356f0e / _0x2254b3;
          this.m_reelSize = _0x4eee6b;
          this.m_symbolPicList = _0x27925e;
          this.m_isNearWin = false;
          this.m_isNearWinCbSent = {};
          this.m_spriteFrames = _0x1ba067;
          if (_0x4a3bf3) {
            this.m_reelPositionOffset = _0x4a3bf3;
          } else {
            for (var _0x3c6886 = 0x0; _0x3c6886 <= this.m_column; _0x3c6886++) {
              this.m_reelPositionOffset[_0x3c6886] = new _0x5a6787(0x0, 0x0);
            }
          }
          this.m_accumulateNumber[0x0] = 0x0;
          var _0xebca1a = this.m_reelSize.length;
          for (var _0x4bce27 = 0x0; _0x4bce27 < _0xebca1a; _0x4bce27++) {
            this.m_mapPositionToIndex[_0x4bce27] = [];
            this.m_accumulateNumber[_0x4bce27 + 0x1] = 0x0;
            for (var _0x32b6b5 = 0x0; _0x32b6b5 < this.m_reelSize[_0x4bce27]; _0x32b6b5++) {
              this.m_mapIndexToPosition[this.m_numberOfSymbol] = _0x5855b0(_0x4bce27, _0x32b6b5);
              this.m_mapPositionToIndex[_0x4bce27][_0x32b6b5] = this.m_numberOfSymbol;
              this.m_numberOfSymbol = this.m_numberOfSymbol + 0x1;
              this.m_accumulateNumber[_0x4bce27 + 0x1] = this.m_numberOfSymbol;
            }
          }
          var _0x4c08fc = 0x0;
          this.m_oldPlateInfo = new Array();
          for (var _0x1b40de = 0x0; _0x1b40de < this.m_numberOfSymbol; _0x1b40de++) {
            var _0x3bcd2a = this.m_mapIndexToPosition[_0x1b40de].x;
            var _0x45b790 = this.m_mapIndexToPosition[_0x1b40de].y;
            var _0x49006d = Math.floor(Math.random() * this.m_symbolPicList.length);
            this.m_oldPlateInfo.push(_0x49006d);
            var _0x2823eb = this.m_symbolPicList[_0x49006d];
            this.m_symbol[_0x1b40de] = new _0x5d9e03();
            this.m_symbol[_0x1b40de].addComponent(_0x257daa).spriteFrame = this.m_spriteFrames.getSpriteFrame(_0x2823eb);
            this.m_symbol[_0x1b40de].name = String(_0x1b40de);
            var _0x3e34d4 = this.m_symbolSize.width * (_0x3bcd2a + 0x1 - 0.5) - this.m_viewSize.width / 0x2 + this.m_reelPositionOffset[_0x3bcd2a].x;
            var _0x571393 = this.m_symbolSize.height * (_0x45b790 + 0x1 - 0.5) - this.m_viewSize.height / 0x2 + this.m_reelPositionOffset[_0x3bcd2a].y;
            this.m_symbol[_0x1b40de].setPosition(_0x5855b0(_0x3e34d4, _0x571393));
            _0x1d7129.SetZIndex(this.m_symbol[_0x1b40de], _0x4c08fc);
            this.m_clipNode.addChild(this.m_symbol[_0x1b40de]);
            _0x1d7129.SetZIndex(this.m_symbol[_0x1b40de], _0x4c08fc);
            _0x4c08fc += 0x1;
          }
          for (var _0xec35e8 = 0x0; _0xec35e8 < this.m_column; _0xec35e8++) {
            var _0x3a618e = this.m_symbolSize.width * (_0xec35e8 + 0x1 - 0.5) - this.m_viewSize.width / 0x2 + this.m_reelPositionOffset[_0xec35e8].x;
            var _0x364a55 = this.m_reelPositionOffset[_0xec35e8].y - this.m_viewSize.height / 0x2;
            var _0x2eefd3 = this.m_symbolPicList[Math.floor(Math.random() * this.m_symbolPicList.length)];
            this.m_upperSymbol[_0xec35e8] = new _0x5d9e03();
            var _0x201c47 = this.m_upperSymbol[_0xec35e8].addComponent(_0x257daa);
            _0x201c47.spriteFrame = this.m_spriteFrames.getSpriteFrame(_0x2eefd3);
            this.m_upperSymbol[_0xec35e8].name = String(this.m_numberOfSymbol + _0xec35e8);
            this.m_upperSymbol[_0xec35e8].setPosition(_0x5855b0(_0x3a618e, _0x364a55 + this.m_symbolSize.height * (this.m_reelSize[_0xec35e8] + 0.5)));
            this.m_clipNode.addChild(this.m_upperSymbol[_0xec35e8]);
            _0x1d7129.SetZIndex(this.m_upperSymbol[_0xec35e8], _0x4c08fc);
            _0x2eefd3 = this.m_symbolPicList[Math.floor(Math.random() * this.m_symbolPicList.length)];
            this.m_lowerSymbol[_0xec35e8] = new _0x5d9e03();
            (_0x201c47 = this.m_lowerSymbol[_0xec35e8].addComponent(_0x257daa)).spriteFrame = this.m_spriteFrames.getSpriteFrame(_0x2eefd3);
            this.m_lowerSymbol[_0xec35e8].name = String(-(_0xec35e8 + 0x1));
            this.m_lowerSymbol[_0xec35e8].setPosition(_0x5855b0(_0x3a618e, _0x364a55 + -0.5 * this.m_symbolSize.height));
            this.m_clipNode.addChild(this.m_lowerSymbol[_0xec35e8]);
            _0x1d7129.SetZIndex(this.m_lowerSymbol[_0xec35e8], _0x4c08fc);
          }
          this.m_isLoaded = true;
          _0x87e3e6("slotreels ", this);
          var _0x2a82e9 = function () {
            var _0x4db427 = _0x2b6686.TempoSetting.ChargeBuffaloAscent;
            _0x5cc60b.m_riseTime = _0x4db427.BASE.RISE_TIME;
            _0x5cc60b.m_upLength = _0x4db427.BASE.UP_LENGTH;
            _0x5cc60b.m_spinBufferTime01 = _0x4db427.BASE.SPIN_BUFFER_TIME_01;
            _0x5cc60b.m_spinBufferTime02 = _0x4db427.BASE.SPIN_BUFFER_TIME_02;
            _0x5cc60b.m_downLength = _0x4db427.BASE.DOWN_LENGTH;
            _0x5cc60b.m_spinSpeed = _0x4db427.BASE.SPIN_SPEED;
            _0x5cc60b.m_timesOfBaseSpin = _0x4db427.BASE.TIMES_OF_BASE_SPIN;
            _0x5cc60b.m_spinIntervalTimes = _0x4db427.BASE.SPIN_INTERVAL_TIMES;
            _0x5cc60b.m_spinDelayTime = _0x4db427.BASE.SPIN_DELAY_TIME;
            _0x5cc60b.m_hardStopIntervalTime = _0x4db427.BASE.HARD_STOP_INTERVAL_TIME;
          };
          _0x2a82e9();
          _0x2b6686.AddCb(_0x2a82e9);
        };
        _0x22c434.StartSpin = function () {
          this.m_isTest = true;
          this.m_isClickStopBtn = false;
          this.m_isStop = false;
          this.m_isNearWin = false;
          this.m_allAniEnded = false;
          this.m_nearWinColumnIdx = 0x0;
          this.m_time = 0x0;
          this.m_stopTime = 0x0;
          this.m_reelStopTime = [];
          this.m_stopCount = 0x0;
          this.m_isChangeSymbol = [];
          this.m_isChangeToFinalSymbol = [];
          this.m_isPlaySound = [];
          var _0x12645a = this.m_row * this.m_column;
          for (var _0x3a5663 = 0x0; _0x3a5663 < _0x12645a; _0x3a5663++) {
            this.m_isSymbolEndAniPlayed[_0x3a5663] = false;
          }
          for (var _0x2b08c0 = 0x0; _0x2b08c0 < this.m_column; _0x2b08c0++) {
            this.m_isNearWinCbSent[_0x2b08c0] = false;
          }
          _0x87e3e6("SlotReels StartSpin");
        };
        _0x22c434.Spin = function (_0x12ba24) {
          this.m_time = this.m_time + _0x12ba24;
          if (!this.m_isStop) {
            this.Spin_RealSpinMultiple(_0x12ba24);
            if (this.m_time >= this.m_stopTime && 0x0 != this.m_stopTime && this.m_allAniEnded) {
              this.m_isStop = true;
              this.CheckSymbolState();
            } else {
              if (this.m_isNearWin) {
                for (var _0x16eb27 = 0x0; _0x16eb27 < this.m_column; _0x16eb27++) {
                  if (this.m_nearWinColumnIdx <= _0x16eb27 && this.m_reelStopTime[_0x16eb27 - 0x1] && this.m_time >= this.m_reelStopTime[_0x16eb27 - 0x1] && !this.m_isNearWinCbSent[_0x16eb27]) {
                    this.m_isNearWinCbSent[_0x16eb27] = true;
                    this.m_nearWinCbFunc(_0x16eb27);
                  }
                }
              }
            }
          }
        };
        _0x22c434.Spin_RealSpinMultiple = function (_0x2cc961) {
          var _0x3f0720 = this;
          var _0x26629f = this.m_spinSpeed;
          var _0x25a2eb = this.m_row * this.m_column;
          for (var _0x933e68 = 0x0; _0x933e68 < this.m_column; _0x933e68++) {
            var _0x487eab = this.m_time;
            var _0x4e4e87 = this.m_reelStopTime[_0x933e68];
            var _0x4897aa = this.m_riseTime * this.m_column;
            if (this.m_isNearWin) {
              if (this.m_reelStopTime[this.m_nearWinColumnIdx - 0x1] && _0x933e68 >= this.m_nearWinColumnIdx && this.m_time > this.m_reelStopTime[this.m_nearWinColumnIdx - 0x1] && _0x933e68 <= this.m_nearWinColumnEndIdx) {
                _0x26629f = this.m_spinSpeed / 0x2;
              }
              if (this.m_time > this.m_reelStopTime[this.m_nearWinColumnEndIdx]) {
                this.m_isNearWin = false;
                if (null != this.m_nearWinEndCbFunc) {
                  this.m_nearWinEndCbFunc();
                }
              }
            }
            var _0x3c9c78 = function (_0x56848e) {
              var _0x18ca04 = _0x3f0720.m_mapPositionToIndex[_0x933e68][_0x56848e];
              var _0x1b2182 = _0x3f0720.m_symbolSize.width * (_0x933e68 + 0x1 - 0.5) - _0x3f0720.m_viewSize.width / 0x2 + _0x3f0720.m_reelPositionOffset[_0x933e68].x;
              var _0xf01d40 = _0x3f0720.m_symbolSize.height * (_0x56848e + 0x1 - 0.5) - _0x3f0720.m_viewSize.height / 0x2 + _0x3f0720.m_reelPositionOffset[_0x933e68].y;
              if (_0x487eab < _0x3f0720.m_riseTime * _0x933e68) {
                ;
              } else {
                if (_0x487eab < _0x3f0720.m_riseTime * (_0x933e68 + 0x1)) {
                  var _0x34c217 = (_0x487eab - _0x3f0720.m_riseTime * (_0x933e68 - 0x1 + 0x1)) / _0x3f0720.m_riseTime * _0x3f0720.m_upLength;
                  _0x3f0720.m_symbol[_0x18ca04].setPosition(_0x5855b0(_0x1b2182, _0xf01d40 + _0x34c217));
                } else {
                  if (_0x487eab < _0x4897aa) {
                    _0x3f0720.m_symbol[_0x18ca04].setPosition(_0x5855b0(_0x1b2182, _0xf01d40 + _0x3f0720.m_upLength));
                  } else {
                    if (null == _0x4e4e87 || _0x487eab < _0x4e4e87 + _0x4897aa) {
                      var _0x32d406 = (_0x487eab - _0x4897aa) % _0x26629f / _0x26629f * _0x3f0720.m_symbolSize.height * (_0x3f0720.m_reelSize[_0x933e68] + 0x2);
                      var _0x2663bf = _0x3f0720.GetMovelength(_0x32d406, _0x3f0720.m_symbolSize.height * (_0x56848e + 0x1), _0x3f0720.m_symbolSize.height * (_0x3f0720.m_reelSize[_0x933e68] + 0x2), _0x933e68, _0x18ca04, _0x3f0720.m_symbol[_0x18ca04], false);
                      _0x3f0720.m_symbol[_0x18ca04].setPosition(_0x5855b0(_0x1b2182, _0xf01d40 - _0x2663bf));
                    } else {
                      if (_0x487eab < _0x4e4e87 + _0x4897aa + _0x3f0720.m_spinBufferTime01) {
                        _0x3f0720.CheckChangeToFinalSymbol(_0x933e68, _0x18ca04, _0x3f0720.m_symbol[_0x18ca04], true);
                        _0x3f0720.CheckPlayStopSound(_0x933e68, _0x56848e);
                        var _0x275ab3 = (_0x487eab - _0x4e4e87 - _0x4897aa) / _0x3f0720.m_spinBufferTime01 * _0x3f0720.m_downLength;
                        _0x3f0720.m_symbol[_0x18ca04].setPosition(_0x5855b0(_0x1b2182, _0xf01d40 - _0x275ab3));
                      } else {
                        if (_0x487eab < _0x4e4e87 + _0x4897aa + _0x3f0720.m_spinBufferTime01 + _0x3f0720.m_spinBufferTime02) {
                          _0x3f0720.CheckChangeToFinalSymbol(_0x933e68, _0x18ca04, _0x3f0720.m_symbol[_0x18ca04], true);
                          _0x3f0720.CheckPlayStopSound(_0x933e68, _0x56848e);
                          var _0x33e01f = (_0x487eab - _0x4e4e87 - _0x4897aa - _0x3f0720.m_spinBufferTime01) / _0x3f0720.m_spinBufferTime02 * _0x3f0720.m_downLength;
                          _0x3f0720.m_symbol[_0x18ca04].setPosition(_0x5855b0(_0x1b2182, _0xf01d40 - _0x3f0720.m_downLength + _0x33e01f));
                        } else {
                          _0x3f0720.CheckChangeToFinalSymbol(_0x933e68, _0x18ca04, _0x3f0720.m_symbol[_0x18ca04], true);
                          _0x3f0720.CheckPlayStopSound(_0x933e68, _0x56848e);
                          if (0x0 == _0x3f0720.m_isSymbolEndAniPlayed[_0x18ca04]) {
                            _0x3f0720.m_symbol[_0x18ca04].setPosition(_0x5855b0(_0x1b2182, _0xf01d40));
                            _0xf0ede4(_0x3f0720.m_symbol[_0x18ca04]).call(function () {
                              if (_0x18ca04 + 0x1 == _0x25a2eb) {
                                _0x3f0720.m_allAniEnded = true;
                              }
                            }).start();
                            _0x3f0720.m_isSymbolEndAniPlayed[_0x18ca04] = true;
                          }
                        }
                      }
                    }
                  }
                }
              }
            };
            for (var _0x47afc3 = 0x0; _0x47afc3 < this.m_reelSize[_0x933e68]; _0x47afc3++) {
              _0x3c9c78(_0x47afc3);
            }
            var _0x58e6c1 = this.m_symbolSize.width * (_0x933e68 + 0x1 - 0.5) - this.m_viewSize.width / 0x2 + this.m_reelPositionOffset[_0x933e68].x;
            var _0x58729e = this.m_symbolSize.height * (this.m_reelSize[_0x933e68] + 0x1 - 0.5) - this.m_viewSize.height / 0x2 + this.m_reelPositionOffset[_0x933e68].y;
            if (_0x487eab < this.m_riseTime * _0x933e68) {
              ;
            } else {
              if (_0x487eab < this.m_riseTime * (_0x933e68 + 0x1)) {
                var _0x59ded3 = (_0x487eab - this.m_riseTime * (_0x933e68 - 0x1 + 0x1)) / this.m_riseTime * this.m_upLength;
                this.m_upperSymbol[_0x933e68].setPosition(_0x5855b0(_0x58e6c1, _0x58729e + _0x59ded3));
              } else {
                if (_0x487eab < _0x4897aa) {
                  this.m_upperSymbol[_0x933e68].setPosition(_0x5855b0(_0x58e6c1, _0x58729e + this.m_upLength));
                } else {
                  if (null == _0x4e4e87 || _0x487eab < _0x4e4e87 + _0x4897aa) {
                    var _0x62190e = (_0x487eab - _0x4897aa) % _0x26629f / _0x26629f * this.m_symbolSize.height * (this.m_reelSize[_0x933e68] + 0x2);
                    var _0xcd692e = this.GetMovelength(_0x62190e, this.m_symbolSize.height * (this.m_reelSize[_0x933e68] + 0x1), this.m_symbolSize.height * (this.m_reelSize[_0x933e68] + 0x2), _0x933e68, this.m_numberOfSymbol + _0x933e68, this.m_upperSymbol[_0x933e68], false);
                    this.m_upperSymbol[_0x933e68].setPosition(_0x5855b0(_0x58e6c1, _0x58729e - _0xcd692e));
                  } else {
                    if (_0x487eab < _0x4e4e87 + _0x4897aa + this.m_spinBufferTime01) {
                      this.CheckChangeToFinalSymbol(_0x933e68, this.m_numberOfSymbol + _0x933e68, this.m_upperSymbol[_0x933e68], true);
                      var _0xc4e44e = (_0x487eab - _0x4e4e87 - _0x4897aa) / this.m_spinBufferTime01 * this.m_downLength;
                      this.m_upperSymbol[_0x933e68].setPosition(_0x5855b0(_0x58e6c1, _0x58729e - _0xc4e44e));
                    } else {
                      if (_0x487eab < _0x4e4e87 + _0x4897aa + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
                        this.CheckChangeToFinalSymbol(_0x933e68, this.m_numberOfSymbol + _0x933e68, this.m_upperSymbol[_0x933e68], true);
                        var _0x555b2c = (_0x487eab - _0x4e4e87 - _0x4897aa - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
                        this.m_upperSymbol[_0x933e68].setPosition(_0x5855b0(_0x58e6c1, _0x58729e - this.m_downLength + _0x555b2c));
                      } else {
                        this.CheckChangeToFinalSymbol(_0x933e68, this.m_numberOfSymbol + _0x933e68, this.m_upperSymbol[_0x933e68], true);
                        this.m_upperSymbol[_0x933e68].setPosition(_0x5855b0(_0x58e6c1, _0x58729e));
                      }
                    }
                  }
                }
              }
            }
            _0x58e6c1 = this.m_symbolSize.width * (_0x933e68 + 0x1 - 0.5) - this.m_viewSize.width / 0x2 + this.m_reelPositionOffset[_0x933e68].x;
            _0x58729e = -0.5 * this.m_symbolSize.height - this.m_viewSize.height / 0x2 + this.m_reelPositionOffset[_0x933e68].y;
            if (_0x487eab < this.m_riseTime * _0x933e68) {
              ;
            } else {
              if (_0x487eab < this.m_riseTime * (_0x933e68 + 0x1)) {
                var _0x4522f5 = (_0x487eab - this.m_riseTime * (_0x933e68 - 0x1 + 0x1)) / this.m_riseTime * this.m_upLength;
                this.m_lowerSymbol[_0x933e68].setPosition(_0x5855b0(_0x58e6c1, _0x58729e + _0x4522f5));
              } else {
                if (_0x487eab < _0x4897aa) {
                  this.m_lowerSymbol[_0x933e68].setPosition(_0x5855b0(_0x58e6c1, _0x58729e + this.m_upLength));
                } else {
                  if (null == _0x4e4e87 || _0x487eab < _0x4e4e87 + _0x4897aa) {
                    var _0x40c5ec = (_0x487eab - _0x4897aa) % _0x26629f / _0x26629f * this.m_symbolSize.height * (this.m_reelSize[_0x933e68] + 0x2);
                    var _0x5de82c = this.GetMovelength(_0x40c5ec, 0.5 * this.m_symbolSize.height, this.m_symbolSize.height * (this.m_reelSize[_0x933e68] + 0x2), _0x933e68, -_0x933e68, this.m_lowerSymbol[_0x933e68], false);
                    this.m_lowerSymbol[_0x933e68].setPosition(_0x5855b0(_0x58e6c1, _0x58729e - _0x5de82c));
                  } else {
                    if (_0x487eab < _0x4e4e87 + _0x4897aa + this.m_spinBufferTime01) {
                      this.CheckChangeToFinalSymbol(_0x933e68, -_0x933e68, this.m_lowerSymbol[_0x933e68], true);
                      var _0x1b533f = (_0x487eab - _0x4e4e87 - _0x4897aa) / this.m_spinBufferTime01 * this.m_downLength;
                      this.m_lowerSymbol[_0x933e68].setPosition(_0x5855b0(_0x58e6c1, _0x58729e - _0x1b533f));
                    } else {
                      if (_0x487eab < _0x4e4e87 + _0x4897aa + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
                        this.CheckChangeToFinalSymbol(_0x933e68, -_0x933e68, this.m_lowerSymbol[_0x933e68], true);
                        var _0x16fd14 = (_0x487eab - _0x4e4e87 - _0x4897aa - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
                        this.m_lowerSymbol[_0x933e68].setPosition(_0x5855b0(_0x58e6c1, _0x58729e - this.m_downLength + _0x16fd14));
                      } else {
                        this.CheckChangeToFinalSymbol(_0x933e68, -_0x933e68, this.m_lowerSymbol[_0x933e68], true);
                        this.m_lowerSymbol[_0x933e68].setPosition(_0x5855b0(_0x58e6c1, _0x58729e));
                      }
                    }
                  }
                }
              }
            }
          }
        };
        _0x22c434.DirectChangeSymbol = function (_0x21b7a2, _0x2b7d3c) {
          var _0xf1212d = this.GetSymbolByIndex(_0x21b7a2);
          var _0x123585 = this.m_spriteFrames.getSpriteFrame(this.m_symbolPicList[_0x2b7d3c]);
          _0xf1212d.getComponent(_0x257daa).spriteFrame = _0x123585;
          this.m_plateInfo[this.ConvertCoordiante(_0x21b7a2)] = _0x2b7d3c;
        };
        _0x22c434.ChangeSymbol = function (_0x320115, _0x545f39, _0x4cd676) {
          var _0x5e637f;
          var _0x3ccb7b = Number(_0x545f39.name);
          var _0x25fea1 = 0x0;
          if (_0x5e637f = this.m_reelStopTime[_0x320115]) {
            _0x25fea1 = _0x5e637f / this.m_spinSpeed;
          }
          var _0x7bc7ab = this.m_riseTime * this.m_column;
          if (_0x5e637f && this.m_time - _0x7bc7ab > (_0x25fea1 - 0x1) * this.m_spinSpeed || _0x4cd676) {
            if (_0x3ccb7b + 0x1 > 0x0 && _0x3ccb7b + 0x1 <= this.m_numberOfSymbol) {
              var _0x30c835 = this.m_symbolPicList[this.m_plateInfo[_0x3ccb7b]];
              _0x545f39.getComponent(_0x257daa).spriteFrame = this.m_spriteFrames.getSpriteFrame(_0x30c835);
            } else {
              var _0x34fcc6 = 0x0;
              if (null != this.m_stripsList && this.m_stripsList[_0x320115]) {
                _0x34fcc6 = this.m_stripsList[_0x320115][this.m_stripsListIndex[_0x320115]];
                this.m_stripsListIndex[_0x320115] = this.m_stripsListIndex[_0x320115] % Object.keys(this.m_stripsList[_0x320115]).length + 0x1;
              } else {
                _0x34fcc6 = _0x518397[Math.floor(Math.random() * (_0x518397.length - 0x1))];
              }
              var _0x52b65a = this.GetSpriteIndex(_0x34fcc6, _0x320115, _0x4cd676);
              var _0x28dd70 = this.m_symbolPicList[_0x52b65a];
              _0x545f39.getComponent(_0x257daa).spriteFrame = this.m_spriteFrames.getSpriteFrame(_0x28dd70);
            }
          } else {
            var _0x1c5f8f = this.m_symbolPicList;
            var _0x34a8e6 = 0x0;
            if (null != this.m_stripsList) {
              if (this.m_stripsList[_0x320115]) {
                _0x34a8e6 = this.m_stripsList[_0x320115][this.m_stripsListIndex[_0x320115]];
                this.m_stripsListIndex[_0x320115] = this.m_stripsListIndex[_0x320115] % Object.keys(this.m_stripsList[_0x320115]).length + 0x1;
              } else {
                _0x34a8e6 = Math.floor(Math.random() * (this.m_symbolPicList.length - 0x1));
              }
            } else {
              _0x34a8e6 = _0x518397[Math.floor(Math.random() * (_0x518397.length - 0x1))];
            }
            var _0xf292d9 = _0x1c5f8f[this.GetSpriteIndex(_0x34a8e6, _0x320115, _0x4cd676)];
            _0x545f39.getComponent(_0x257daa).spriteFrame = this.m_spriteFrames.getSpriteFrame(_0xf292d9);
          }
        };
        _0x22c434.GetSpriteIndex = function (_0x36558a, _0xe460a, _0x51c127) {
          if (0x1 == this.m_inBonusGame && _0x36558a == _0x3a2794.SYMBOL_ID.BONUS) {
            _0x36558a = _0x3a2794.SYMBOL_ID.SCATTER;
          } else if (!(_0x36558a != _0x3a2794.SYMBOL_ID.WILD || 0x0 != _0xe460a && 0x5 != _0xe460a)) {
            _0x36558a = _0x3a2794.SYMBOL_ID.KING;
          }
          return _0x36558a;
        };
        _0x22c434.SetPlateInfo = function (_0x8e978) {
          if (!_0x2efe6a.IsFeaturesDemoMode) {
            this.m_oldPlateInfo = JSON.parse(JSON.stringify(this.m_plateInfo));
          }
          var _0x47b190 = [];
          for (var _0x573670 = 0x0; _0x573670 < this.m_numberOfSymbol; _0x573670++) {
            _0x47b190[this.ConvertCoordiante(_0x573670)] = _0x8e978[_0x573670];
          }
          for (var _0x2cb34c = 0x0; _0x2cb34c < this.m_numberOfSymbol; _0x2cb34c++) {
            var _0x56b8da = _0x47b190[_0x2cb34c];
            this.m_plateInfo[_0x2cb34c] = null != _0x56b8da ? _0x56b8da : 0x0;
          }
          var _0x3b179a = this.m_riseTime * this.m_column;
          var _0x4c1972 = Math.floor((this.m_time - this.m_riseTime) / this.m_spinSpeed) + 0x2;
          if (_0x4c1972 < 0x2) {
            _0x4c1972 = 0x2;
          }
          if (this.m_isClickStopBtn) {
            this.m_stopTime = this.m_spinSpeed * _0x4c1972 + this.m_spinDelayTime + _0x3b179a;
            for (var _0x3268a3 = 0x0; _0x3268a3 < this.m_column; _0x3268a3++) {
              this.m_reelStopTime[_0x3268a3] = this.m_spinSpeed * _0x4c1972;
            }
          } else {
            for (var _0x42abaf = 0x0; _0x42abaf < this.m_column; _0x42abaf++) {
              if (this.m_isNearWin && _0x42abaf >= this.m_nearWinColumnIdx) {
                _0x4c1972 = 0x8 * (_0x42abaf - this.m_nearWinColumnIdx + 0x1) + _0x4c1972;
              }
              this.m_reelStopTime[_0x42abaf] = this.m_spinSpeed * (_0x4c1972 + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * (_0x42abaf - 0x1);
            }
            this.m_stopTime = this.m_spinSpeed * (_0x4c1972 + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * (this.m_column - 0x1) + this.m_spinDelayTime + _0x3b179a;
          }
        };
        _0x22c434.RecoverPlate = function () {
          for (var _0x2b2044 = 0x0; _0x2b2044 < this.m_oldPlateInfo.length; _0x2b2044++) {
            this.DirectChangeSymbol(_0x2b2044, this.m_oldPlateInfo[_0x2b2044]);
          }
        };
        _0x22c434.SetPlateSymbol = function (_0x478b9b) {
          var _0x5aaa9f;
          var _0x154408;
          for (var _0x20b260 = 0x0; _0x20b260 < this.m_numberOfSymbol; _0x20b260++) {
            _0x154408 = this.ConvertCoordiante(_0x20b260);
            if (this.m_symbol[_0x154408]) {
              _0x5aaa9f = this.m_symbolPicList[_0x478b9b[_0x20b260]];
              this.m_symbol[_0x154408].getComponent(_0x257daa).spriteFrame = this.m_spriteFrames.getSpriteFrame(_0x5aaa9f);
            }
          }
          this.m_oldPlateInfo = _0x478b9b;
        };
        _0x22c434.SetIsClickStopBtn = function () {
          this.m_isClickStopBtn = true;
          var _0x130583 = this.m_riseTime * this.m_column;
          if (0x0 != this.m_stopTime) {
            var _0x436300 = Math.floor((this.m_time - _0x130583) / this.m_spinSpeed) + 0x1;
            if (_0x436300 < 0x1) {
              _0x436300 = 0x1;
            }
            var _0x51888b = _0x2b6686.TempoSetting.ChargeBuffaloAscent.SPEED_UP_STOP_TIME(_0x3a2794.COLUMN_MAX, this.m_time);
            if (_0x51888b < this.m_stopTime) {
              this.m_stopTime = _0x51888b;
            }
            var _0x21f7f1 = _0x436300 * this.m_spinSpeed;
            var _0x157852 = this.m_reelStopTime.length;
            for (var _0x5bc579 = 0x0; _0x5bc579 < _0x157852; _0x5bc579++) {
              if (this.m_reelStopTime[_0x5bc579] > _0x21f7f1) {
                this.m_reelStopTime[_0x5bc579] = _0x21f7f1;
              }
            }
          }
        };
        _0x22c434.IsPlateStop = function () {
          return this.m_isStop;
        };
        _0x22c434.GetSymbolByIndex = function (_0x5badd3) {
          return this.m_symbol[this.ConvertCoordiante(_0x5badd3)];
        };
        _0x22c434.ConvertCoordiante = function (_0x4a42ea) {
          var _0x40f934 = this.m_mapIndexToPosition[_0x4a42ea].x + 0x1;
          this.m_mapIndexToPosition[_0x4a42ea].y;
          return this.m_accumulateNumber[_0x40f934 - 0x1] + (this.m_accumulateNumber[_0x40f934] - (_0x4a42ea + 0x1));
        };
        _0x22c434.SetPlayStopSoundFunction = function (_0x35fa9e) {
          this.m_playStopSound = _0x35fa9e;
        };
        _0x22c434.Reset = function () {
          this.m_isClickStopBtn = false;
          this.m_isStop = false;
          this.m_time = 0x0;
          this.m_stopTime = 0x0;
          this.m_reelStopTime = [];
          this.m_stopCount = 0x0;
          this.m_isChangeSymbol = [];
          this.m_isChangeToFinalSymbol = [];
          this.m_isPlaySound = [];
          for (var _0x1d6b51 = 0x0; _0x1d6b51 < this.m_numberOfSymbol; _0x1d6b51++) {
            var _0x58cece = this.m_mapIndexToPosition[_0x1d6b51].x;
            var _0xb9d598 = this.m_mapIndexToPosition[_0x1d6b51].y;
            this.m_symbol[_0x1d6b51].setPosition(_0x5855b0(this.m_symbolSize.width * (_0x58cece + 0x1 - 0.5) - this.m_viewSize.width / 0x2 + this.m_reelPositionOffset[_0x58cece].x, this.m_symbolSize.height * (_0xb9d598 + 0x1 - 0.5) - this.m_viewSize.height / 0x2 + this.m_reelPositionOffset[_0x58cece].y));
            var _0x3de4b0 = this.m_symbolPicList[Math.floor(Math.random() * this.m_symbolPicList.length)];
            this.m_symbol[_0x1d6b51].getComponent(_0x257daa).spriteFrame = this.m_spriteFrames.getSpriteFrame(_0x3de4b0);
          }
          for (var _0x24d282 = 0x0; _0x24d282 < this.m_column; _0x24d282++) {
            this.m_upperSymbol[_0x24d282].setPosition(_0x5855b0(this.m_symbolSize.width * (_0x24d282 - 0.5) - this.m_viewSize.width / 0x2 + this.m_reelPositionOffset[_0x24d282].x, this.m_symbolSize.height * (this.m_reelSize[_0x24d282] + 0x1 - 0.5) - this.m_viewSize.height / 0x2 + this.m_reelPositionOffset[_0x24d282].y));
            var _0x22b37b = this.m_symbolPicList[Math.floor(Math.random() * this.m_symbolPicList.length)];
            this.m_upperSymbol[_0x24d282].getComponent(_0x257daa).spriteFrame = this.m_spriteFrames.getSpriteFrame(_0x22b37b);
            _0x22b37b = this.m_symbolPicList[Math.floor(Math.random() * this.m_symbolPicList.length)];
            this.m_lowerSymbol[_0x24d282].setPosition(_0x5855b0(this.m_symbolSize.width * (_0x24d282 - 0.5) - this.m_viewSize.width / 0x2 + this.m_reelPositionOffset[_0x24d282].x, -0.5 * this.m_symbolSize.height - this.m_viewSize.height / 0x2 + this.m_reelPositionOffset[_0x24d282].y));
            this.m_lowerSymbol[_0x24d282].getComponent(_0x257daa).spriteFrame = this.m_spriteFrames.getSpriteFrame(_0x22b37b);
          }
        };
        _0x22c434.LastSpinAck = function (_0x110e6b) {
          this.m_isClickStopBtn = false;
          this.m_isStop = false;
          this.m_time = 0x0;
          this.m_stopTime = 0x0;
          this.m_reelStopTime = [];
          this.m_stopCount = 0x0;
          this.m_isChangeSymbol = [];
          this.m_isChangeToFinalSymbol = [];
          this.m_isPlaySound = [];
          for (var _0x46f2e1 = 0x0; _0x46f2e1 < this.m_numberOfSymbol; _0x46f2e1++) {
            var _0x1c411c = this.m_mapIndexToPosition[_0x46f2e1].x;
            var _0x4bc280 = this.m_mapIndexToPosition[_0x46f2e1].y;
            this.m_symbol[_0x46f2e1].setPosition(_0x5855b0(this.m_symbolSize.width * (_0x1c411c + 0x1 - 0.5) - this.m_viewSize.width / 0x2 + this.m_reelPositionOffset[_0x1c411c].x, this.m_symbolSize.height * (_0x4bc280 + 0x1 - 0.5) - this.m_viewSize.height / 0x2 + this.m_reelPositionOffset[_0x1c411c].y));
            var _0x56a402 = this.m_plateInfo[_0x46f2e1];
            var _0xbda7a = this.m_symbolPicList[_0x56a402];
            this.m_symbol[_0x46f2e1].getComponent(_0x257daa).spriteFrame = this.m_spriteFrames.getSpriteFrame(_0xbda7a);
          }
          for (var _0x4c5da2 = 0x0; _0x4c5da2 < this.m_column; _0x4c5da2++) {
            this.m_upperSymbol[_0x4c5da2].setPosition(_0x5855b0(this.m_symbolSize.width * (_0x4c5da2 - 0.5) - this.m_viewSize.width / 0x2 + this.m_reelPositionOffset[_0x4c5da2].x, this.m_symbolSize.height * (this.m_reelSize[_0x4c5da2] + 0x1 - 0.5) - this.m_viewSize.height / 0x2 + this.m_reelPositionOffset[_0x4c5da2].y));
            var _0x5f090c = this.m_symbolPicList[Math.floor(Math.random() * this.m_symbolPicList.length)];
            this.m_upperSymbol[_0x4c5da2].getComponent(_0x257daa).spriteFrame = this.m_spriteFrames.getSpriteFrame(_0x5f090c);
            _0x5f090c = this.m_symbolPicList[Math.floor(Math.random() * this.m_symbolPicList.length)];
            this.m_lowerSymbol[_0x4c5da2].setPosition(_0x5855b0(this.m_symbolSize.width * (_0x4c5da2 - 0.5) - this.m_viewSize.width / 0x2 + this.m_reelPositionOffset[_0x4c5da2].x, -0.5 * this.m_symbolSize.height - this.m_viewSize.height / 0x2 + this.m_reelPositionOffset[_0x4c5da2].y));
            this.m_lowerSymbol[_0x4c5da2].getComponent(_0x257daa).spriteFrame = this.m_spriteFrames.getSpriteFrame(_0x5f090c);
          }
        };
        _0x22c434.GetMovelength = function (_0x3c9714, _0x36d5eb, _0x4a6beb, _0x56beb5, _0x1c6b31, _0x27f249, _0x51b0d6) {
          if (_0x3c9714 >= _0x36d5eb) {
            _0x3c9714 -= _0x4a6beb;
            if (this.m_isChangeSymbol[_0x1c6b31]) {
              this.m_isChangeSymbol[_0x1c6b31] = false;
              this.ChangeSymbol(_0x56beb5, _0x27f249, _0x51b0d6);
            }
          } else {
            this.m_isChangeSymbol[_0x1c6b31] = true;
          }
          return _0x3c9714;
        };
        _0x22c434.CheckChangeToFinalSymbol = function (_0x54a7d6, _0x594702, _0xded177, _0xd8b784) {
          if (!this.m_isChangeToFinalSymbol[_0x594702]) {
            this.m_isChangeToFinalSymbol[_0x594702] = true;
            this.ChangeSymbol(_0x54a7d6, _0xded177, _0xd8b784);
          }
        };
        _0x22c434.CheckPlayStopSound = function (_0x5cc878, _0xffbb15) {
          if (this.m_playStopSound && null == this.m_isPlaySound[_0x5cc878] && 0x1 == _0xffbb15) {
            this.m_isPlaySound[_0x5cc878] = true;
            this.m_playStopSound(_0x5cc878);
          }
        };
        _0x22c434.SetInBonusGame = function (_0x185ef6) {
          this.m_inBonusGame = _0x185ef6;
        };
        _0x22c434.IsLoaded = function () {
          return this.m_isLoaded;
        };
        _0x22c434.SetNearWinCb = function (_0x40f3ad) {
          this.m_nearWinCbFunc = _0x40f3ad;
        };
        _0x22c434.SetNearWin = function (_0x14d096, _0x3df829) {
          _0x87e3e6('------------------------------------------------------SetNearWin', _0x14d096, _0x3df829);
          if (null == _0x3df829 || _0x3df829 > this.m_column) {
            _0x3df829 = this.m_column - 0x1;
          }
          if (_0x14d096 >= 0x0 && _0x14d096 < this.m_column && _0x3df829 >= _0x14d096) {
            this.m_isNearWin = true;
            this.m_nearWinColumnIdx = _0x14d096;
            this.m_nearWinColumnEndIdx = _0x3df829;
            var _0x494941 = 0x7 * this.m_spinSpeed;
            var _0x4e2270 = 0x1;
            for (var _0x3ba067 = this.m_nearWinColumnIdx; _0x3ba067 <= this.m_nearWinColumnEndIdx; _0x3ba067++) {
              this.m_reelStopTime[_0x3ba067] = this.m_reelStopTime[_0x3ba067] + _0x494941 * _0x4e2270;
              _0x4e2270 += 0x1;
            }
            _0x4e2270 -= 0x1;
            for (var _0x2cf74e = this.m_nearWinColumnEndIdx + 0x1; _0x2cf74e < this.m_column; _0x2cf74e++) {
              this.m_reelStopTime[_0x2cf74e] = this.m_reelStopTime[_0x2cf74e] + _0x494941 * _0x4e2270;
            }
          }
        };
        _0x22c434.SetNearWinEndCb = function (_0x15d65b) {
          this.m_nearWinEndCbFunc = _0x15d65b;
        };
        _0x22c434.CheckSymbolState = function () {
          var _0x522513 = this;
          if (this.m_isTest) {
            this.m_isTest = false;
            new Array();
            for (var _0xbc9dcf = 0x0; _0xbc9dcf < this.m_column * this.m_row; _0xbc9dcf++) {
              if (!(this.m_symbol[_0xbc9dcf].getComponent(_0x257daa).spriteFrame.name === this.m_symbolPicList[this.m_plateInfo[_0xbc9dcf]])) {
                _0x522513.m_symbol.forEach(function (_0x59624a) {
                  var _0x3d371f = _0x59624a.getComponent(_0x257daa).spriteFrame.name;
                  _0x3d371f = _0x3d371f.replace("symbol_", '');
                });
                _0x522513.m_controller.StopAutoPlay();
              }
            }
          }
        };
        _0x23c2ec(_0x2dfff0, [{
          'key': 'plateInfo',
          'get': function () {
            return this.m_plateInfo;
          }
        }]);
        return _0x2dfff0;
      }()) || _0x261bbc;
      _0xbd733f._RF.pop();
      _0xbd733f._RF.push({}, "f90a6doqrNKcqUtibap9thZ", 'PlateModel', undefined);
      var _0x20814c = function () {
        function _0x596ba6() {
          this.m_originalAck = undefined;
          this.m_firstPlate = undefined;
          this.m_awardComboList = undefined;
          this.m_comboTotal = undefined;
          this.m_bonusType = undefined;
          this.m_comboCurr = undefined;
          this.m_columnSymbolFlag = undefined;
          this.m_gameView = undefined;
        }
        var _0x123cd8 = _0x596ba6.prototype;
        _0x123cd8.Init = function (_0x15159f) {
          this.m_gameView = _0x15159f;
        };
        _0x123cd8.SetOriginalAck = function (_0x3da150) {
          this.Reset();
          this.m_originalAck = _0x3da150;
          this.m_firstPlate = new Array();
          for (var _0x2bcebc = 0x0; _0x2bcebc < _0x3a2794.COLUMN_MAX; _0x2bcebc++) {
            this.m_firstPlate = this.PopColumnSymbol(_0x2bcebc, _0x3a2794.ROW_MAX, this.m_firstPlate);
          }
          _0x87e3e6(this.m_firstPlate);
          this.m_awardComboList = this.m_originalAck.awardVec;
          if (null != this.m_awardComboList) {
            this.m_comboTotal = this.m_awardComboList.length;
          } else {
            this.m_comboTotal = 0x0;
          }
          _0x87e3e6("本次combo次數, ", this.m_comboTotal);
          this.m_bonusType = _0x19ac12.AwardType.AWARD_TYPE_NON;
          if ((this.m_originalAck.awardTypeFlag & _0x19ac12.AwardType.AWARD_TYPE_ENTER_BONUS) == _0x19ac12.AwardType.AWARD_TYPE_ENTER_BONUS) {
            this.m_bonusType = _0x19ac12.AwardType.AWARD_TYPE_ENTER_BONUS;
          } else if ((this.m_originalAck.awardTypeFlag & _0x19ac12.AwardType.AWARD_TYPE_IN_BONUS) == _0x19ac12.AwardType.AWARD_TYPE_IN_BONUS) {
            this.m_bonusType = _0x19ac12.AwardType.AWARD_TYPE_IN_BONUS;
          } else if ((this.m_originalAck.awardTypeFlag & _0x19ac12.AwardType.AWARD_TYPE_END_BONUS) == _0x19ac12.AwardType.AWARD_TYPE_END_BONUS) {
            this.m_bonusType = _0x19ac12.AwardType.AWARD_TYPE_END_BONUS;
          }
          if (this.m_bonusType != _0x19ac12.AwardType.AWARD_TYPE_NON) {
            _0x87e3e6("Bonus GO:", this.m_bonusType);
          }
        };
        _0x123cd8.PopColumnSymbol = function (_0x397fb3, _0x2c0f8c, _0x1ace54) {
          if (undefined === _0x1ace54) {
            _0x1ace54 = undefined;
          }
          if (null != this.m_originalAck) {
            if (null == _0x1ace54) {
              _0x1ace54 = new Array();
            }
            if (null == this.m_columnSymbolFlag[_0x397fb3]) {
              this.m_columnSymbolFlag[_0x397fb3] = 0x0;
            }
            for (var _0x2220a4 = 0x0; _0x2220a4 < _0x2c0f8c; _0x2220a4++) {
              _0x1ace54.push(this.m_originalAck.columnSymbol[_0x397fb3][this.m_columnSymbolFlag[_0x397fb3] + _0x2220a4]);
            }
            this.m_columnSymbolFlag[_0x397fb3] = this.m_columnSymbolFlag[_0x397fb3] + _0x2c0f8c - 0x1;
          }
          return _0x1ace54;
        };
        _0x123cd8.PopOneColumnSymbol = function (_0x5b58e8) {
          if (null != this.m_originalAck) {
            if (null == this.m_columnSymbolFlag[_0x5b58e8]) {
              this.m_columnSymbolFlag[_0x5b58e8] = 0x0;
            } else {
              this.m_columnSymbolFlag[_0x5b58e8] = this.m_columnSymbolFlag[_0x5b58e8] + 0x1;
            }
            return this.m_originalAck.columnSymbol[_0x5b58e8][this.m_columnSymbolFlag[_0x5b58e8]];
          }
        };
        _0x123cd8.GetComboData = function (_0x216dbb) {};
        _0x123cd8.GetAwardGridAndTotalMoney = function (_0xf2cb38) {
          _0xf2cb38 -= 0x1;
          var _0x3a6e20 = {
            "money": this.m_awardComboList[_0xf2cb38].award
          };
          if (_0xf2cb38 < this.m_awardComboList.length && _0xf2cb38 >= 0x0) {
            _0x3a6e20.awardVec = new Array();
            var _0x22355d = this.m_awardComboList[_0xf2cb38].awardSet.length;
            _0x87e3e6(this.m_awardComboList);
            for (var _0x4610bc = 0x0; _0x4610bc < _0x22355d; _0x4610bc++) {
              if (this.m_awardComboList[_0xf2cb38].awardSet[_0x4610bc].symbol == _0x3a2794.SYMBOL_ID.BONUS) {
                _0x3a6e20.bonusGridVec = this.m_awardComboList[_0xf2cb38].awardSet[_0x4610bc].gridVec;
              } else if (this.m_awardComboList[_0xf2cb38].awardSet[_0x4610bc].symbol == _0x3a2794.SYMBOL_ID.SCATTER && this.m_bonusType == _0x19ac12.AwardType.AWARD_TYPE_IN_BONUS) {
                _0x3a6e20.scatterGridVec = this.m_awardComboList[_0xf2cb38].awardSet[_0x4610bc].gridVec;
              } else {
                if (this.m_awardComboList[_0xf2cb38].awardSet[_0x4610bc].symbol == _0x3a2794.SYMBOL_ID.KING) {
                  _0x3a6e20.kingLine = true;
                } else if (this.m_awardComboList[_0xf2cb38].awardSet[_0x4610bc].symbol == _0x3a2794.SYMBOL_ID.SCATTER) {
                  _0x3a6e20.scatterLine = true;
                }
                _0x3a6e20.awardVec.push(this.m_awardComboList[_0xf2cb38].awardSet[_0x4610bc].gridVec);
              }
            }
          }
          return _0x3a6e20;
        };
        _0x123cd8.GetAwardType = function () {
          return this.m_originalAck.awardTypeFlag;
        };
        _0x123cd8.Reset = function () {
          this.m_originalAck = undefined;
          this.m_comboTotal = 0x0;
          this.m_comboCurr = 0x0;
          this.m_columnSymbolFlag = new Array();
        };
        _0x123cd8.GetExtraOdds = function () {
          return this.m_originalAck.extraOdds;
        };
        _0x123cd8.GetExtraRound = function () {
          return this.m_originalAck.extraRound;
        };
        _0x123cd8.GetRemainRound = function () {
          return this.m_originalAck.remainRound;
        };
        _0x23c2ec(_0x596ba6, [{
          'key': "comboTotal",
          'get': function () {
            return this.m_comboTotal;
          }
        }, {
          'key': "comboCurr",
          'get': function () {
            return this.m_comboCurr;
          },
          'set': function (_0x5ad779) {
            this.m_comboCurr = _0x5ad779;
          }
        }, {
          'key': "firstPlate",
          'get': function () {
            return this.m_firstPlate;
          }
        }, {
          'key': "bonusType",
          'get': function () {
            return this.m_bonusType;
          }
        }]);
        return _0x596ba6;
      }();
      var _0x2b80b7;
      var _0x5e80a2;
      _0xbd733f._RF.pop();
      _0xbd733f._RF.push({}, "28e38S5aM1IC6vtIwmmDZzJ", "PlateManager", undefined);
      var _0x2a64d3 = function () {
        function _0x10216c() {
          this.m_fastEffect = undefined;
          this.m_view = undefined;
          this.m_ctrl = undefined;
          this.m_gameView = undefined;
          this.m_effectView = undefined;
          this.m_comboMoneyPanel = undefined;
          this.m_comboMoneyTxT = undefined;
          this.m_comboMoneyNum = 0x0;
          this.m_slotReels = undefined;
          this.m_nearWinMCList = undefined;
          this.m_topView = undefined;
          this.m_awardDarkItemStencil = undefined;
          this.m_awardDarkMaskGraphics = undefined;
          this.m_awardSymbol = undefined;
          this.m_mcArrowEffectList = undefined;
          this.m_nScatterBallVec = undefined;
          this.m_mcFireAnimVec = undefined;
          this.m_mcHitAnimVec = undefined;
          this.m_scatterUseCount = undefined;
          this.m_itemMaskUseCount = undefined;
          this.m_hitUseCount = undefined;
          this.m_fireUseCount = undefined;
          this.m_inBonus = undefined;
          this.m_viewLock = undefined;
          this.m_soundIdwheel = undefined;
          this.m_symbolEffectList = undefined;
          this.m_clearSymbolIndexList = undefined;
          this.m_clearSymbolIndexSearch = undefined;
          this.m_symbolAtlas = undefined;
          this.m_awardDarkMask = undefined;
          this.m_model = undefined;
          this.m_isHardStop = undefined;
          this.m_nearWinColumn = undefined;
          this.m_soundIdNearWin = undefined;
          this.m_state = undefined;
          this.m_scatterGridVec = undefined;
          this.m_bonusGridVec = undefined;
          this.m_itemMaskBg = undefined;
          this.m_needClearCombo = undefined;
          this.m_prefabList = undefined;
          this.m_backgroundLoaded = undefined;
          this.m_testLock = undefined;
          this.m_fireSoundId = undefined;
          this.m_scatterBallEndCount = undefined;
          this.m_gameViewFastFunc = undefined;
          this.m_canUseWebGL = undefined;
          this.m_isLandscape = true;
          this.StartLoad();
        }
        var _0x503319 = _0x10216c.prototype;
        _0x503319.Init = function (_0x1bd146, _0x31081, _0x2034f4, _0x4b072a, _0x3b369a) {
          var _0x3d1b08 = this;
          _0x87e3e6("PlateManager init!");
          this.m_canUseWebGL = true;
          this.m_fastEffect = true;
          this.m_view = _0x1bd146;
          this.m_ctrl = _0x2034f4;
          this.m_gameView = _0x2034f4.View;
          this.m_effectView = _0x2034f4.m_effectView;
          this.m_comboMoneyPanel = _0x4b072a;
          this.m_comboMoneyTxT = _0x3b369a;
          this.m_comboMoneyPanel.active = false;
          this.m_nearWinMCList = new Array();
          var _0x21ee95 = [-0x184, -0xe9, -0x4e, 0x4d, 0xe8, 0x183];
          var _0x4802cf = function (_0x1bb85b) {
            _0x3d1b08.m_nearWinMCList[_0x1bb85b] = new _0x48c112(function () {
              var _0x40c5d2 = _0x3d1b08.m_nearWinMCList[_0x1bb85b].mc;
              _0x31081.addChild(_0x40c5d2);
              _0x1d7129.SetZIndex(_0x40c5d2, 0x7d5);
              if (_0x3d1b08.m_canUseWebGL) {
                _0x3d1b08.m_nearWinMCList[_0x1bb85b].AddParticle(_0x40c5d2.getChildByName("ProjectNode_1").getChildByName("sybo_newin_us1").getChildByName("Particle_1"));
                _0x3d1b08.m_nearWinMCList[_0x1bb85b].AddParticle(_0x40c5d2.getChildByName('ProjectNode_1').getChildByName("sybo_newin_us1").getChildByName("Particle_2"));
                _0x3d1b08.m_nearWinMCList[_0x1bb85b].AddParticle(_0x40c5d2.getChildByName('ProjectNode_2').getChildByName("sybo_newin_us1").getChildByName("Particle_1"));
                _0x3d1b08.m_nearWinMCList[_0x1bb85b].AddParticle(_0x40c5d2.getChildByName('ProjectNode_2').getChildByName("sybo_newin_us1").getChildByName("Particle_2"));
                _0x3d1b08.m_nearWinMCList[_0x1bb85b].AddParticle(_0x40c5d2.getChildByName('Panel_9').getChildByName('Particle_3'));
              }
              if (!_0x3d1b08.m_canUseWebGL) {
                _0x40c5d2.getChildByName("ProjectNode_1").getChildByName("sybo_newin_us1").getChildByName('Particle_1').active = false;
                _0x40c5d2.getChildByName("ProjectNode_1").getChildByName('sybo_newin_us1').getChildByName('Particle_2').active = false;
                _0x40c5d2.getChildByName("ProjectNode_2").getChildByName("sybo_newin_us1").getChildByName("Particle_1").active = false;
                _0x40c5d2.getChildByName("ProjectNode_2").getChildByName('sybo_newin_us1').getChildByName('Particle_2').active = false;
                _0x40c5d2.getChildByName("Panel_9").getChildByName("Particle_3").active = false;
              }
              _0x3d1b08.m_nearWinMCList[_0x1bb85b].mc.active = false;
              _0x3d1b08.m_nearWinMCList[_0x1bb85b].Stop();
              _0x3d1b08.m_nearWinMCList[_0x1bb85b].mc.setPosition(_0x5855b0(_0x21ee95[_0x1bb85b], 0x0));
            });
            _0x3d1b08.m_nearWinMCList[_0x1bb85b].Init(_0x10216c.EFFECT_CSB_PATH[_0x10216c.EFFECT_CSB_KEY.NEAR_WIN]);
          };
          for (var _0x1965c6 = _0x3a2794.NEAR_WIN_COLUMN - 0x1; _0x1965c6 < _0x3a2794.COLUMN_MAX; _0x1965c6++) {
            _0x4802cf(_0x1965c6);
          }
          this.m_topView = _0x31081;
          this.m_awardSymbol = new Array();
          this.m_prefabList = {};
          this.m_mcArrowEffectList = {};
          this.m_nScatterBallVec = new Array();
          this.m_mcFireAnimVec = new Array();
          this.m_mcHitAnimVec = new Array();
          this.m_scatterUseCount = 0x0;
          this.m_itemMaskUseCount = 0x0;
          this.m_hitUseCount = 0x0;
          this.m_fireUseCount = 0x0;
          this.m_inBonus = false;
          this.m_viewLock = true;
          this.m_topView.setPosition(_0x5855b0(this.m_view.position.x, this.m_view.position.y));
        };
        _0x503319.CreateMask = function () {
          var _0x500565 = new _0x5d9e03();
          var _0xb2e97a = _0x500565.addComponent(_0x257daa);
          _0xb2e97a.spriteFrame = this.m_symbolAtlas.getSpriteFrame('img_layer');
          _0xb2e97a.type = _0x257daa.Type.SLICED;
          _0xb2e97a.sizeMode = _0x257daa.SizeMode.CUSTOM;
          _0x500565.getComponent(_0x257daa).color = _0x24eccb.BLACK;
          _0x500565.addComponent(_0x2d903e);
          _0x500565.getComponent(_0x2d903e).opacity = 0xb4;
          _0x500565.getComponent(_0x5547b9).setContentSize(0x3ac, 0x1b3);
          _0x500565.setPosition(_0x5855b0(0x0, 0x0));
          this.m_awardDarkMask = new _0x5d9e03();
          this.m_awardDarkMask.addChild(_0x500565);
          this.m_view.addChild(this.m_awardDarkMask);
          _0x1d7129.SetZIndex(this.m_awardDarkMask, 0x2710);
          var _0x4c9bc9 = this.m_awardDarkMask.addComponent(_0x5bfa12);
          _0x4c9bc9.type = _0x5bfa12.Type.GRAPHICS_RECT;
          _0x4c9bc9.inverted = this.m_canUseWebGL;
          this.m_awardDarkMaskGraphics = _0x4c9bc9._graphics;
          this.m_awardDarkMask.getComponent(_0x5547b9).setContentSize(0x0, 0x0);
          this.m_awardDarkMask.active = false;
        };
        _0x503319.StartLoad = function () {
          var _0x32c75f = this;
          var _0x4eea73 = _0x112d29.GetManagerId(function () {
            _0x32c75f.OnLoaded();
            _0x32c75f.CreateMask();
          });
          _0x112d29.AddLoad(_0x4eea73);
          _0xb08ad.GameBundle.load(_0x10216c.LOAD_PATH.SYMBOL_ATLAS, _0x5b8a04, function (_0x2e6b0b, _0x388564) {
            if (_0x2e6b0b) {
              _0x4f6f19(_0x2e6b0b.message || _0x2e6b0b);
            } else {
              _0x32c75f.m_symbolAtlas = _0x388564;
              _0x112d29.OnLoaded(_0x4eea73);
            }
          });
          _0x112d29.StartLoad(_0x4eea73);
        };
        _0x503319.OnLoaded = function () {
          var _0x28f78a = this;
          this.m_slotReels = new _0x42e620(this.m_view);
          this.m_slotReels.Init(0x3a4, 0x1b2, _0x3a2794.COLUMN_MAX, _0x3a2794.ROW_MAX, _0x3a2794.PLATE_LINE_COUNT, this.m_symbolAtlas, _0x10216c.SYMBOL_PIC_LIST, [_0x5855b0(-0x2, -0x1), _0x5855b0(-0x1, -0x1), _0x5855b0(0x0, -0x1), _0x5855b0(0x0, -0x1), _0x5855b0(0x1, -0x1), _0x5855b0(0x2, -0x1)], this.m_ctrl);
          this.m_slotReels.SetPlateSymbol(_0x3a2794.DEFAULT_PLATE);
          this.m_slotReels.SetPlayStopSoundFunction(function (_0x5ae7fa) {
            _0x28f78a.WheelStopCB(_0x5ae7fa);
          });
          this.m_ctrl.IsPlateReady = true;
        };
        _0x503319.BackgroundLoad = function () {
          var _0x4afeaf = this;
          this.m_backgroundLoaded = false;
          var _0x2ec1e0 = function _0x4fcd74(_0x112853, _0x33d4c1) {
            _0xb08ad.GameBundle.load(_0x112853, _0x3b3da2, function (_0x16648e, _0x22287f) {
              if (_0x16648e) {
                _0x4f6f19(_0x16648e);
                return void _0x4fcd74(_0x112853, _0x33d4c1);
              }
              if (_0x33d4c1) {
                _0x33d4c1(_0x22287f);
              }
            });
          };
          var _0x173027 = _0x112d29.GetManagerId(function () {
            _0x87e3e6("CHECK ", _0x4afeaf.m_prefabList);
            _0x4afeaf.m_backgroundLoaded = true;
          });
          var _0x422324 = function (_0xb3c9e8) {
            if (_0x10216c.EFFECT_SYMBOL_CSB_PATH.hasOwnProperty(_0xb3c9e8)) {
              var _0x3ac4da = _0x10216c.EFFECT_SYMBOL_CSB_PATH[_0xb3c9e8];
              _0x112d29.AddLoad(_0x173027);
              _0x2ec1e0(_0x3ac4da, function (_0x15f132) {
                _0x87e3e6(_0x3ac4da);
                _0x4afeaf.m_prefabList[_0xb3c9e8] = _0x15f132;
                _0x112d29.OnLoaded(_0x173027);
              });
            } else {
              _0x87e3e6("PlateManager BackgroundLoad", _0xb3c9e8);
            }
          };
          for (var _0x26de5c in _0x10216c.EFFECT_SYMBOL_CSB_PATH) _0x422324(_0x26de5c);
          var _0x18f50b = function (_0x2355a3) {
            if (_0x10216c.EFFECT_CSB_PATH.hasOwnProperty(_0x2355a3)) {
              var _0x1ee761 = _0x10216c.EFFECT_CSB_PATH[_0x2355a3];
              _0x112d29.AddLoad(_0x173027);
              _0x2ec1e0(_0x1ee761, function (_0x2ea6de) {
                _0x4afeaf.m_prefabList[_0x2355a3] = _0x2ea6de;
                _0x112d29.OnLoaded(_0x173027);
              });
            }
          };
          for (var _0x445d24 in _0x10216c.EFFECT_CSB_PATH) _0x18f50b(_0x445d24);
          _0x112d29.StartLoad(_0x173027);
        };
        _0x503319.CreateItemMask = function (_0x4e718c) {
          if (this.m_canUseWebGL) {
            var _0x4c83da = _0x10216c.SYMBOL_SIZE;
            var _0x2d9233 = _0x5855b0(_0x4e718c.position.x - _0x4c83da.width / 0x2, _0x4e718c.position.y - _0x4c83da.height / 0x2);
            this.m_awardDarkMaskGraphics.rect(_0x2d9233.x, _0x2d9233.y, _0x4c83da.width, _0x4c83da.height);
            this.m_awardDarkMaskGraphics.fillColor = _0x2bf67b(0x0, 0x0, 0x0, 0xff);
            this.m_awardDarkMaskGraphics.fill();
          }
        };
        _0x503319.CreateFireEffect = function (_0xffc6fb, _0x4710da, _0x4e291) {
          var _0xfd8a5b = this;
          var _0x533d86 = undefined;
          var _0x4b8fc7 = this.m_mcFireAnimVec[this.m_fireUseCount];
          this.m_fireUseCount = this.m_fireUseCount + 0x1;
          if (null == _0x4b8fc7) {
            _0x533d86 = _0x22717a(this.m_prefabList[_0x10216c.EFFECT_CSB_KEY.AWARD_FIRE]);
            (_0x4b8fc7 = new _0x48c112()).Init(_0x533d86);
            _0x4b8fc7.AddParticle(_0x533d86.getChildByName('Particle_1'));
            this.m_view.addChild(_0x533d86);
            _0x1d7129.SetZIndex(_0x533d86, 0x67);
            this.m_mcFireAnimVec.push(_0x4b8fc7);
            if (0x1 == this.m_fireUseCount) {
              _0x4b8fc7.SetFrameEventCallFunc(function (_0x4b2ccb) {
                if (null != _0x4b2ccb) {
                  _0xfd8a5b.OnFireEvent(_0x4b2ccb);
                }
              });
            }
          }
          _0x4b8fc7.mc.active = false;
          _0x4b8fc7.Stop();
          _0x4b8fc7.mc.setPosition(_0x5855b0(_0x4e291.position.x, _0x4e291.position.y));
        };
        _0x503319.CreateHitEffect = function (_0x5b6eec, _0x5ad673, _0x3929e0) {
          var _0x5b0980 = undefined;
          var _0x10e6ab = this.m_mcHitAnimVec[this.m_hitUseCount];
          this.m_hitUseCount = this.m_hitUseCount + 0x1;
          if (null == _0x10e6ab) {
            _0x5b0980 = _0x22717a(this.m_prefabList[_0x10216c.EFFECT_CSB_KEY.AWARD_SYMBOL_HIT]);
            (_0x10e6ab = new _0x48c112()).Init(_0x5b0980);
            this.m_topView.addChild(_0x5b0980);
            _0x1d7129.SetZIndex(_0x5b0980, 0x7d0);
            this.m_mcHitAnimVec.push(_0x10e6ab);
            if (this.m_canUseWebGL) {
              _0x10e6ab.AddParticle(_0x5b0980.getChildByName("n_particle_1").getChildByName('subParticle_1'));
              _0x10e6ab.AddParticle(_0x5b0980.getChildByName("n_particle_2").getChildByName('subParticle_2'));
              _0x10e6ab.AddParticle(_0x5b0980.getChildByName('Particle_1'));
              _0x10e6ab.AddParticle(_0x5b0980.getChildByName("Particle_2"));
            }
            if (!this.m_canUseWebGL) {
              _0x5b0980.getChildByName("n_particle_1").getChildByName("subParticle_1").active = false;
              _0x5b0980.getChildByName('n_particle_2').getChildByName("subParticle_2").active = false;
              _0x5b0980.getChildByName('Particle_1').active = false;
              _0x5b0980.getChildByName('Particle_2').active = false;
            }
          }
          _0x10e6ab.mc.setScale(0x1, 0x1, 0x1);
          _0x10e6ab.mc.getComponent(_0x2d903e).opacity = 0xff;
          _0x10e6ab.mc.active = true;
          _0x10e6ab.Stop();
          _0x10e6ab.mc.setPosition(_0x5855b0(_0x3929e0.position.x, _0x3929e0.position.y));
        };
        _0x503319.CreateSyombolEffect = function (_0xd7612d, _0x26e88f, _0x4abaed) {
          var _0x456fe2;
          var _0x2adb51 = _0xd7612d * _0x3a2794.ROW_MAX + _0x26e88f;
          var _0x5937ce = this.m_slotReels.GetSymbolByIndex(_0x2adb51);
          var _0x4e7757 = this.m_slotReels.plateInfo[this.m_slotReels.ConvertCoordiante(_0x2adb51)];
          var _0x1e8edb = _0x10216c.EFFECT_SYMBOL_CSB_PATH[_0x4e7757];
          this.m_awardSymbol.push(_0x5937ce);
          if (!this.m_backgroundLoaded || null == _0x1e8edb || _0x4abaed || null == this.m_prefabList[_0x4e7757]) {
            (_0x456fe2 = new _0x5d9e03()).addComponent(_0x257daa).spriteFrame = this.m_symbolAtlas.getSpriteFrame(_0x10216c.SYMBOL_PIC_LIST[_0x4e7757]);
            this.m_symbolEffectList.push(_0x456fe2);
          } else {
            _0x456fe2 = _0x22717a(this.m_prefabList[_0x4e7757]);
            var _0x4ab944 = new _0x48c112();
            _0x4ab944.Init(_0x456fe2);
            this.m_symbolEffectList.push(_0x4ab944);
          }
          _0x456fe2.setPosition(_0x5855b0(_0x5937ce.position.x, _0x5937ce.position.y));
          this.m_view.addChild(_0x456fe2);
          _0x1d7129.SetZIndex(_0x456fe2, 0x32);
          return _0x5937ce;
        };
        _0x503319.RecoverPlate = function () {
          this.m_slotReels.RecoverPlate();
        };
        _0x503319.Process = function (_0x3eacf5) {
          var _0x4b7656 = this;
          if (!this.m_viewLock && this.m_slotReels.IsPlateStop()) {
            var _0x4e6bc5 = function (_0x227350) {
              if (null != _0x4b7656.m_nearWinMCList[_0x227350] && _0x4b7656.m_nearWinMCList[_0x227350].mc.active) {
                _0x4b7656.m_nearWinMCList[_0x227350].Stop();
                _0x4a6acf.stopAllByTarget(_0x4b7656.m_nearWinMCList[_0x227350].mc);
                _0xf0ede4(_0x4b7656.m_nearWinMCList[_0x227350].mc.getComponent(_0x2d903e)).to(0.5, {
                  'opacity': 0x0
                }).call(function () {
                  _0x4b7656.m_nearWinMCList[_0x227350].mc.getComponent(_0x2d903e).opacity = 0x0;
                  _0x4b7656.m_nearWinMCList[_0x227350].mc.active = false;
                }).start();
              }
            };
            for (var _0x4945f4 = _0x3a2794.NEAR_WIN_COLUMN - 0x1; _0x4945f4 < _0x3a2794.COLUMN_MAX; _0x4945f4++) {
              _0x4e6bc5(_0x4945f4);
            }
            if (null != this.m_soundIdwheel && null != this.m_soundIdwheel) {
              _0x380a74.Stop(this.m_soundIdwheel);
            }
            this.m_viewLock = true;
          }
          if (!this.m_viewLock) {
            this.m_slotReels.Spin(_0x3eacf5);
          }
        };
        _0x503319.StartSpin = function () {
          this.Reset();
          this.m_slotReels.StartSpin();
          if (!this.m_inBonus) {
            this.m_soundIdwheel = this.PlaySound(_0x3a2794.SOUND_NAME.csh_wheel, true);
          }
          this.m_viewLock = false;
        };
        _0x503319.IsPlateStop = function () {
          return this.m_slotReels.IsPlateStop();
        };
        _0x503319.RevSpinAck = function (_0x3a15d5) {
          var _0x530230 = this;
          this.m_model.Init(this.m_ctrl);
          this.m_model.SetOriginalAck(_0x3a15d5);
          this.m_slotReels.SetPlateInfo(this.GetFirstPlate());
          this.m_nearWinColumn = 0x0;
          if (null == this.m_gameViewFastFunc || !this.m_gameViewFastFunc()) {
            var _0x3a3897 = _0x3a2794.COLUMN_MAX * _0x3a2794.ROW_MAX;
            var _0x369eb6 = 0x1;
            for (var _0x5eb7d7 = 0x0; _0x5eb7d7 < _0x3a3897;) {
              _0x5eb7d7 += 0x1;
              if (this.m_model.firstPlate[_0x5eb7d7 - 0x1] == _0x3a2794.SYMBOL_ID.BONUS) {
                this.m_nearWinColumn = this.m_nearWinColumn + 0x1;
                _0x5eb7d7 = _0x5eb7d7 - _0x369eb6 + _0x3a2794.ROW_MAX;
                _0x369eb6 = 0x1;
              } else {
                if ((_0x369eb6 += 0x1) > _0x3a2794.ROW_MAX) {
                  break;
                }
              }
            }
          }
          if (this.m_nearWinColumn >= _0x3a2794.NEAR_WIN_COLUMN + 0x1) {
            this.m_slotReels.SetNearWinCb(function (_0x3b622f) {
              if (!(null == _0x530230.m_nearWinMCList[_0x3b622f] || _0x530230.m_nearWinMCList[_0x3b622f].mc.active)) {
                _0x530230.m_nearWinMCList[_0x3b622f].mc.getComponent(_0x2d903e).opacity = 0xff;
                _0x530230.m_nearWinMCList[_0x3b622f].mc.active = true;
                _0x530230.m_nearWinMCList[_0x3b622f].Play(true);
                if (null != _0x530230.m_soundIdNearWin) {
                  _0x380a74.Stop(_0x530230.m_soundIdNearWin);
                }
                _0x530230.m_soundIdNearWin = _0x380a74.Play(_0x3a2794.SOUND_NAME.csh_wheel_nearwin);
              }
              if (null != _0x530230.m_nearWinMCList[_0x3b622f - 0x1] && _0x530230.m_nearWinMCList[_0x3b622f - 0x1].mc.active) {
                _0x530230.m_nearWinMCList[_0x3b622f - 0x1].Stop();
                _0xf0ede4(_0x530230.m_nearWinMCList[_0x3b622f - 0x1].mc.getComponent(_0x2d903e)).to(0.5, {
                  'opacity': 0x0
                }).call(function () {
                  _0x530230.m_nearWinMCList[_0x3b622f - 0x1].mc.active = false;
                  _0x530230.m_nearWinMCList[_0x3b622f - 0x1].mc.getComponent(_0x2d903e).opacity = 0x0;
                }).start();
              }
            });
            this.m_slotReels.SetNearWinEndCb(function () {
              if (_0x530230.m_nearWinMCList[_0x530230.m_nearWinColumn] && _0x530230.m_nearWinMCList[_0x530230.m_nearWinColumn].mc.active) {
                _0x530230.m_nearWinMCList[_0x530230.m_nearWinColumn].Stop();
                _0xf0ede4(_0x530230.m_nearWinMCList[_0x530230.m_nearWinColumn].mc.getComponent(_0x2d903e)).to(0.5, {
                  'opacity': 0x0
                }).call(function () {
                  if (_0x530230.m_nearWinMCList[_0x530230.m_nearWinColumn]) {
                    _0x530230.m_nearWinMCList[_0x530230.m_nearWinColumn].mc.getComponent(_0x2d903e).opacity = 0x0;
                    _0x530230.m_nearWinMCList[_0x530230.m_nearWinColumn].mc.active = false;
                  }
                }).start();
              }
            });
            this.m_slotReels.SetNearWin(_0x3a2794.NEAR_WIN_COLUMN + 0x1, this.m_nearWinColumn);
          }
        };
        _0x503319.NeedShowAward = function () {
          return _0x19ac12.AwardType.AWARD_TYPE_NON != this.m_model.GetAwardType() && (this.m_model.bonusType == _0x19ac12.AwardType.AWARD_TYPE_ENTER_BONUS ? this.m_model.comboCurr + 0x1 < this.m_model.comboTotal : this.m_model.comboCurr < this.m_model.comboTotal);
        };
        _0x503319.NeedEnterBonusGame = function () {
          return this.m_model.bonusType == _0x19ac12.AwardType.AWARD_TYPE_ENTER_BONUS;
        };
        _0x503319.Reset = function () {
          this.m_state = _0x10216c.STATE.NONE;
          this.m_model = new _0x20814c();
          this.m_viewLock = true;
          this.ResetCombo();
          this.m_clearSymbolIndexList = new Array();
          this.m_clearSymbolIndexSearch = {};
          this.m_scatterGridVec = undefined;
          this.m_bonusGridVec = undefined;
          this.m_scatterUseCount = 0x0;
          this.m_isHardStop = false;
          this.m_slotReels.Reset();
        };
        _0x503319.LastSpinAck = function (_0x5b880f) {
          this.m_state = _0x10216c.STATE.NONE;
          this.m_model = new _0x20814c();
          this.m_viewLock = true;
          this.ResetCombo();
          this.m_clearSymbolIndexList = new Array();
          this.m_clearSymbolIndexSearch = {};
          this.m_scatterGridVec = undefined;
          this.m_bonusGridVec = undefined;
          this.m_scatterUseCount = 0x0;
          this.m_isHardStop = false;
          this.m_slotReels.LastSpinAck(_0x5b880f);
        };
        _0x503319.ResetCombo = function () {
          if (this.m_hitUseCount > 0x0) {
            if (null != this.m_fireSoundId) {
              _0x380a74.Stop(this.m_fireSoundId);
              this.m_fireSoundId = undefined;
            }
            for (var _0x497cec = 0x0; _0x497cec < this.m_hitUseCount; _0x497cec++) {
              if (null != _0x4f9c1c.instance.ActionManager.getActionByTag(_0x10216c.ANIM_TAG.HIT_FADEOUT, this.m_mcHitAnimVec[_0x497cec].mc)) {
                _0x4f9c1c.instance.ActionManager.removeActionByTag(_0x10216c.ANIM_TAG.HIT_FADEOUT, this.m_mcHitAnimVec[_0x497cec].mc);
              }
              this.m_mcHitAnimVec[_0x497cec].mc.active = false;
              this.m_mcHitAnimVec[_0x497cec].Stop();
              if (this.m_canUseWebGL) {
                this.m_mcHitAnimVec[_0x497cec].StopParticle();
              }
              if (null != this.m_mcFireAnimVec && null != this.m_mcFireAnimVec[_0x497cec] && null != this.m_mcFireAnimVec[_0x497cec].mc) {
                this.m_mcFireAnimVec[_0x497cec].mc.active = false;
                this.m_mcFireAnimVec[_0x497cec].Stop();
                this.m_mcFireAnimVec[_0x497cec].StopParticle();
              }
            }
            this.m_awardDarkMaskGraphics.clear();
          }
          this.m_awardSymbol = new Array();
          this.m_itemMaskUseCount = 0x0;
          this.m_hitUseCount = 0x0;
          this.m_fireUseCount = 0x0;
          this.ClearSymbolEffect();
        };
        _0x503319.ClearSymbolEffect = function () {
          if (null != this.m_symbolEffectList) {
            var _0x17258f = this.m_symbolEffectList.length;
            for (var _0x145a62 = 0x0; _0x145a62 < _0x17258f; _0x145a62++) {
              if (null != this.m_symbolEffectList[_0x145a62]) {
                if (null != this.m_symbolEffectList[_0x145a62].mc) {
                  this.m_symbolEffectList[_0x145a62].mc.removeFromParent();
                } else {
                  this.m_symbolEffectList[_0x145a62].removeFromParent();
                }
              }
            }
          }
          this.m_symbolEffectList = new Array();
          this.m_clearSymbolIndexList = new Array();
          this.m_clearSymbolIndexSearch = {};
        };
        _0x503319.GetComboMoney = function () {
          return this.m_comboMoneyNum;
        };
        _0x503319.ShowEffectLine = function () {
          var _0x3c53b0;
          var _0x3512e4;
          if (0x1 == this.m_needClearCombo) {
            this.ResetCombo();
            this.m_needClearCombo = false;
          }
          this.m_awardDarkMask.active = true;
          var _0x20c02b = this.m_model.GetAwardGridAndTotalMoney(this.m_model.comboCurr + 0x1);
          this.m_comboMoneyTxT.getComponent(_0x25fe73).string = _0x1d7129.FormatNumberThousands(this.m_ctrl.GetDisplayValue(_0x20c02b.money), _0x1d7129.FORMAT_NUMBER_TYPE.DEFINE_DOT);
          this.m_comboMoneyNum = _0x20c02b.money;
          var _0x1ab97e = this.m_ctrl.IsFast();
          if (this.m_inBonus && null != _0x20c02b.scatterGridVec) {
            this.m_state = _0x10216c.STATE.BONUS_SCATTER_EFFECT;
            var _0x14c460;
            var _0x9d423a = _0x20c02b.scatterGridVec.length;
            this.m_scatterUseCount = _0x9d423a;
            for (var _0x8bea0b = 0x0; _0x8bea0b < _0x9d423a; _0x8bea0b++) {
              _0x3c53b0 = _0x20c02b.scatterGridVec[_0x8bea0b].c;
              _0x3512e4 = _0x20c02b.scatterGridVec[_0x8bea0b].r;
              _0x14c460 = this.CreateSyombolEffect(_0x3c53b0, _0x3512e4, false);
              this.CreateItemMask(_0x14c460);
              this.CreateHitEffect(_0x3c53b0, _0x3512e4, _0x14c460);
              if (null == this.m_nScatterBallVec[_0x8bea0b]) {
                this.m_nScatterBallVec[_0x8bea0b] = _0x22717a(this.m_prefabList[_0x10216c.EFFECT_CSB_KEY.SCATTER_BALL]);
                _0x87e3e6("this.m_nScatterBallVec[j] = ", this.m_nScatterBallVec[_0x8bea0b], this.m_nScatterBallVec);
                this.m_effectView.addChild(this.m_nScatterBallVec[_0x8bea0b]);
                _0x1d7129.SetZIndex(this.m_nScatterBallVec[_0x8bea0b], _0x447c2f.GAMEVIEW_ZORDER.EFFECT_SMALL);
              }
              var _0x1eaa8b = this.m_effectView.getComponent(_0x5547b9).convertToNodeSpaceAR(_0x14c460.parent.getComponent(_0x5547b9).convertToWorldSpaceAR(_0x14c460.position));
              this.m_nScatterBallVec[_0x8bea0b].setPosition(_0x5855b0(_0x1eaa8b.x - 0x10, _0x1eaa8b.y - 0x39));
              this.m_nScatterBallVec[_0x8bea0b].active = false;
            }
            this.m_fastEffect = false;
            this.PlaySound(_0x3a2794.SOUND_NAME.csh_bonus_dragon);
          } else {
            this.m_fastEffect = true;
            var _0x13177e = _0x20c02b.awardVec.length;
            for (var _0x22a980 = 0x0; _0x22a980 < _0x13177e; _0x22a980++) {
              var _0x6c5cad = _0x20c02b.awardVec[_0x22a980].length;
              var _0x115595 = undefined;
              var _0x2e13bb = undefined;
              var _0x56420e = undefined;
              var _0x3a4f70 = undefined;
              for (var _0x3ebd0d = 0x0; _0x3ebd0d < _0x6c5cad; _0x3ebd0d++) {
                _0x115595 = _0x20c02b.awardVec[_0x22a980][_0x3ebd0d].c;
                _0x2e13bb = _0x20c02b.awardVec[_0x22a980][_0x3ebd0d].r;
                _0x56420e = _0x115595 * _0x3a2794.ROW_MAX + _0x2e13bb + 0x1;
                if (null == this.m_clearSymbolIndexSearch[_0x56420e]) {
                  this.m_clearSymbolIndexSearch[_0x56420e] = 0x1;
                  _0x3a4f70 = this.CreateSyombolEffect(_0x115595, _0x2e13bb, _0x1ab97e);
                  this.CreateItemMask(_0x3a4f70);
                  this.m_clearSymbolIndexList.push(_0x115595 * _0x3a2794.ROW_MAX + _0x2e13bb);
                  this.CreateHitEffect(_0x115595, _0x2e13bb, _0x3a4f70);
                  this.CreateFireEffect(_0x115595, _0x2e13bb, _0x3a4f70);
                }
              }
            }
            if (_0x20c02b.kingLine) {
              this.PlaySound(_0x3a2794.SOUND_NAME.csh_symbol_king);
            } else {
              if (_0x20c02b.scatterLine) {
                this.PlaySound(_0x3a2794.SOUND_NAME.csh_main_dragon);
              } else {
                var _0x57c109 = this.GetCurrComboTime();
                if (_0x57c109 < 0xa) {
                  this.PlaySound(_0x3a2794.SOUND_NAME['csh_line_award0' + _0x57c109]);
                } else {
                  this.PlaySound(_0x3a2794.SOUND_NAME.csh_line_award10);
                }
              }
            }
          }
          var _0x1dbb8e = this.m_symbolEffectList.length;
          for (var _0x4d2c3e = 0x0; _0x4d2c3e < _0x1dbb8e; _0x4d2c3e++) {
            if (null != this.m_symbolEffectList[_0x4d2c3e].mc) {
              this.m_symbolEffectList[_0x4d2c3e].Play(false);
              this.m_symbolEffectList[_0x4d2c3e].active = true;
            } else {
              this.m_symbolEffectList[_0x4d2c3e].active = true;
            }
            this.m_mcHitAnimVec[_0x4d2c3e].mc.active = true;
            if (this.m_canUseWebGL) {
              this.m_mcHitAnimVec[_0x4d2c3e].PlayParticle();
            }
            this.m_mcHitAnimVec[_0x4d2c3e].Play(true);
          }
          if (this.m_hitUseCount > 0x0) {
            this.m_fireSoundId = this.PlaySound(_0x3a2794.SOUND_NAME.csh_line_surround, true);
          }
        };
        _0x503319.ShowNextSymbolEffect = function () {
          var _0x29906e = this;
          if (this.m_state == _0x10216c.STATE.BONUS_SCATTER_EFFECT) {
            var _0x257732 = this.m_effectView.getComponent(_0x5547b9).convertToNodeSpaceAR(this.m_ctrl.m_fgRoundNum.parent.getComponent(_0x5547b9).convertToWorldSpaceAR(this.m_ctrl.m_fgRoundNum.position));
            this.m_model.comboCurr = this.m_model.comboCurr + 0x1;
            this.m_scatterBallEndCount = 0x0;
            for (var _0x427a64 = 0x0; _0x427a64 < this.m_scatterUseCount; _0x427a64++) {
              this.m_nScatterBallVec[_0x427a64].active = true;
              this.m_nScatterBallVec[_0x427a64].getChildByName("Particle_1").getComponent(_0x131c83).resetSystem();
              this.m_nScatterBallVec[_0x427a64].getChildByName('Particle_2').getComponent(_0x131c83).resetSystem();
              _0x5855b0(this.m_nScatterBallVec[_0x427a64].position.x - 0x32, this.m_nScatterBallVec[_0x427a64].position.y - 0x1e);
              _0xf0ede4(this.m_nScatterBallVec[_0x427a64]).to(0.5, {
                'position': _0x257732
              }).call(function () {
                _0x29906e.PlaySound(_0x3a2794.SOUND_NAME.csh_bonus_flamestop);
              }).delay(0.3).call(function () {
                _0x29906e.ScatterBallEnd();
              }).start();
            }
            this.PlaySound(_0x3a2794.SOUND_NAME.csh_bonus_flamepath);
          } else {
            this.m_testLock = false;
            for (var _0x4e770d = 0x0; _0x4e770d < this.m_fireUseCount; _0x4e770d++) {
              if (null != this.m_mcFireAnimVec[_0x4e770d]) {
                this.m_mcFireAnimVec[_0x4e770d].Play(false);
                this.m_mcFireAnimVec[_0x4e770d].mc.active = true;
                if (this.m_canUseWebGL) {
                  this.m_mcHitAnimVec[_0x4e770d].StopParticle();
                }
              }
            }
          }
        };
        _0x503319.ShowBonusLineEffect = function () {
          this.ClearSymbolEffect();
          var _0x3a0c27 = this.m_model.GetAwardGridAndTotalMoney(this.m_model.comboCurr + 0x1);
          var _0x125dde = _0x3a0c27.bonusGridVec.length;
          for (var _0x1ccaab = 0x0; _0x1ccaab < _0x125dde; _0x1ccaab++) {
            this.CreateSyombolEffect(_0x3a0c27.bonusGridVec[_0x1ccaab].c, _0x3a0c27.bonusGridVec[_0x1ccaab].r, false);
            if (null != this.m_symbolEffectList[_0x1ccaab].mc) {
              this.m_symbolEffectList[_0x1ccaab].Play(false);
              this.m_symbolEffectList[_0x1ccaab].active = true;
            } else {
              this.m_symbolEffectList[_0x1ccaab].active = true;
            }
          }
          this.PlaySound(_0x3a2794.SOUND_NAME.csh_line_bonus);
        };
        _0x503319.OnFireEvent = function (_0x1cf004) {
          var _0x2c3c76 = this;
          if (_0x1cf004 != _0x10216c.MC_FRAME_EVENT.CHANGE_SYMBOL || this.m_testLock) {
            if (_0x1cf004 == _0x10216c.MC_FRAME_EVENT.END) {
              if (null != this.m_fireSoundId) {
                _0x380a74.Stop(this.m_fireSoundId);
                this.m_fireSoundId = undefined;
              }
              _0xf0ede4(this.m_awardDarkMask).delay(0.01).call(function () {
                var _0x178e8c = _0x2c3c76.m_awardSymbol.length;
                var _0x740ddb = function (_0x2c9be9) {
                  var _0x2ce725 = _0x5855b0(_0x2c3c76.m_awardSymbol[_0x2c9be9].position.x, _0x2c3c76.m_awardSymbol[_0x2c9be9].position.y);
                  _0x2c3c76.m_awardSymbol[_0x2c9be9].setPosition(_0x5855b0(_0x2ce725.x, _0x2ce725.y + 0x32));
                  _0xf0ede4(_0x2c3c76.m_awardSymbol[_0x2c9be9]).parallel(_0xf0ede4().call(function () {
                    _0xf0ede4(_0x2c3c76.m_awardSymbol[_0x2c9be9].getComponent(_0x2d903e)).to(0.08, {
                      'opacity': 0xff
                    }).start();
                  }), _0xf0ede4().to(0.06, {
                    'position': _0x2ce725
                  })).start();
                };
                for (var _0x3baf5c = 0x0; _0x3baf5c < _0x178e8c; _0x3baf5c++) {
                  _0x740ddb(_0x3baf5c);
                }
              }).delay(0.13).call(function () {
                _0x2c3c76.m_needClearCombo = true;
                _0x2c3c76.m_ctrl.OnPlateManagerCallback(_0x10216c.STATE.AWARD_FIRE_END);
              }).start();
            } else {
              _0x10216c.MC_FRAME_EVENT.RUN_FIRE;
            }
          } else {
            var _0x34a2e2 = this.m_awardSymbol.length;
            for (var _0x2c9637 = 0x0; _0x2c9637 < _0x34a2e2; _0x2c9637++) {
              this.m_awardSymbol[_0x2c9637].addComponent(_0x2d903e);
              this.m_awardSymbol[_0x2c9637].getComponent(_0x2d903e).opacity = 0x0;
            }
            this.m_testLock = true;
            this.m_model.comboCurr = this.m_model.comboCurr + 0x1;
            this.m_clearSymbolIndexList.sort(function (_0x284c79, _0x140fff) {
              return _0x284c79 - _0x140fff;
            });
            var _0xd0e732 = this.m_clearSymbolIndexList.length;
            var _0x2d5fd8 = 0x0;
            for (var _0x4cb0b3 = 0x0; _0x4cb0b3 < _0xd0e732; _0x4cb0b3++) {
              var _0x113e3d = undefined;
              _0x2d5fd8 = Math.floor(this.m_clearSymbolIndexList[_0x4cb0b3] / _0x3a2794.ROW_MAX);
              this.m_slotReels.DirectChangeSymbol(this.m_clearSymbolIndexList[_0x4cb0b3], this.m_model.PopOneColumnSymbol(_0x2d5fd8));
              _0x113e3d = _0xf0ede4().to(0.4, {
                'opacity': 0x0
              });
              _0xf0ede4(this.m_mcHitAnimVec[_0x4cb0b3].mc.getComponent(_0x2d903e)).then(_0x113e3d).start();
              _0x113e3d.tag(_0x10216c.ANIM_TAG.HIT_FADEOUT);
            }
            this.ClearSymbolEffect();
            var _0x4560de = 0x0;
            if (this.m_itemMaskUseCount > 0xa) {
              _0x4560de = 0x6;
              for (var _0x4ebf0f = 0x0; _0x4ebf0f < _0x4560de; _0x4ebf0f++) {
                this.PlaySound(_0x3a2794.SOUND_NAME.csh_symbol_burn);
              }
            } else {
              if (this.m_itemMaskUseCount > 0x5) {
                _0x4560de = 0x3;
                for (var _0x425b0d = 0x0; _0x425b0d < _0x4560de; _0x425b0d++) {
                  this.PlaySound(_0x3a2794.SOUND_NAME.csh_symbol_burn);
                }
              } else {
                if (this.m_itemMaskUseCount > 0x3) {
                  _0x4560de = 0x2;
                  for (var _0x448294 = 0x0; _0x448294 < _0x4560de; _0x448294++) {
                    this.PlaySound(_0x3a2794.SOUND_NAME.csh_symbol_burn);
                  }
                } else {
                  this.PlaySound(_0x3a2794.SOUND_NAME.csh_symbol_burn);
                }
              }
            }
          }
        };
        _0x503319.ScatterBallEnd = function () {
          _0x87e3e6("ScatterBallEnd");
          this.m_scatterBallEndCount = this.m_scatterBallEndCount + 0x1;
          if (this.m_scatterUseCount == this.m_scatterBallEndCount) {
            this.ScatterBallAllEnd();
          }
        };
        _0x503319.ScatterBallAllEnd = function () {
          var _0x23cb73 = this;
          _0x87e3e6("ScatterBallAllEnd");
          var _0x1fb1e0 = function (_0x3e77ec) {
            _0xf0ede4(_0x23cb73.m_nScatterBallVec[_0x3e77ec].getComponent(_0x2d903e)).to(0.1, {
              'opacity': 0x0
            }).call(function () {
              _0x23cb73.m_nScatterBallVec[_0x3e77ec].active = false;
              _0x23cb73.m_nScatterBallVec[_0x3e77ec].getChildByName("Particle_1").getComponent(_0x131c83).stopSystem();
              _0x23cb73.m_nScatterBallVec[_0x3e77ec].getChildByName("Particle_2").getComponent(_0x131c83).stopSystem();
              _0x23cb73.m_nScatterBallVec[_0x3e77ec].getComponent(_0x2d903e).opacity = 0xff;
            }).start();
          };
          for (var _0x466d64 = 0x0; _0x466d64 < this.m_scatterUseCount; _0x466d64++) {
            _0x1fb1e0(_0x466d64);
          }
          this.ClearSymbolEffect();
          this.m_ctrl.SetBonusTopPanel(this.m_model.GetRemainRound(), this.m_model.GetExtraRound(), this.m_model.GetExtraOdds());
          this.m_ctrl.OnPlateManagerCallback(_0x10216c.STATE.AWARD_FIRE_END);
          this.ResetCombo();
        };
        _0x503319.GetFirstPlate = function () {
          var _0x26540d = this.m_model.firstPlate;
          if (!(null != _0x26540d && _0x26540d.length == _0x3a2794.ROW_MAX * _0x3a2794.COLUMN_MAX)) {
            _0x26540d = _0x3a2794.DEFAULT_PLATE;
          }
          return _0x26540d;
        };
        _0x503319.ResetBonus = function () {
          this.ClearSymbolEffect();
          this.m_ctrl.SetBonusTopPanel(this.m_model.GetRemainRound(), this.m_model.GetExtraRound(), this.m_model.GetExtraOdds());
          if (!this.m_inBonus) {
            this.m_inBonus = true;
            this.m_slotReels.SetInBonusGame(true);
          }
        };
        _0x503319.ExitBonus = function () {
          this.m_inBonus = false;
        };
        _0x503319.CloseDarkMask = function () {
          this.m_awardDarkMask.active = false;
        };
        _0x503319.GetCurrComboTime = function () {
          return this.m_model.comboCurr + 0x1;
        };
        _0x503319.Hide = function () {};
        _0x503319.SetEnterArcadePlate = function (_0x177c7f) {
          var _0x59fd20 = this;
          if (undefined === _0x177c7f) {
            _0x177c7f = null;
          }
          if (null != this.m_slotReels) {
            this.m_slotReels.SetPlateSymbol(_0x3a2794.DEFAULT_PLATE);
          } else {
            setTimeout(function () {
              _0x59fd20.SetEnterArcadePlate(_0x177c7f);
            }, 0x12c);
          }
        };
        _0x503319.OnExit = function () {};
        _0x503319.SetIsClickStopBtn = function () {
          this.m_slotReels.SetIsClickStopBtn();
          this.m_isHardStop = true;
        };
        _0x503319.GetRemainRound = function () {
          return this.m_model ? this.m_model.GetRemainRound() : 0x0;
        };
        _0x503319.WheelStopCB = function (_0x3600ce) {
          if (!this.m_isHardStop || this.m_isHardStop && _0x3600ce % 0x2 == 0x0) {
            if (null != this.m_nearWinColumn && this.m_nearWinColumn - 0x1 >= _0x3600ce) {
              this.PlaySound(_0x3a2794.SOUND_NAME.csh_wheel_bonusstop);
            } else if (this.m_inBonus) {
              this.PlaySound(_0x3a2794.SOUND_NAME.csh_bonuswheel_stop);
            } else {
              this.PlaySound(_0x3a2794.SOUND_NAME.csh_wheel_stop);
            }
          }
        };
        _0x503319.OnFailAck = function () {
          this.m_slotReels.SetPlateInfo(_0x3a2794.DEFAULT_PLATE);
          this.m_slotReels.SetIsClickStopBtn();
        };
        _0x503319.PlaySound = function (_0x4f07d1, _0x375d18, _0x143472) {
          if (undefined === _0x375d18) {
            _0x375d18 = false;
          }
          return _0x380a74.Play(_0x4f07d1, _0x375d18, _0x143472);
        };
        _0x503319.IsLoaded = function () {
          return undefined !== this.m_slotReels;
        };
        _0x503319.SetGameViewFastFunc = function (_0x56cd19) {
          this.m_gameViewFastFunc = _0x56cd19;
        };
        _0x503319.OnRotate = function (_0x5a7ddf, _0x4fd22b) {
          this.m_isLandscape = _0x5a7ddf;
          if (_0x5a7ddf) {
            this.m_topView.setScale(_0x4fd22b, _0x4fd22b, 0x1);
            this.m_topView.setPosition(_0x5855b0(0.9998, 0x25));
          } else {
            this.m_topView.setScale(_0x4fd22b, _0x4fd22b, 0x1);
            this.m_topView.setPosition(_0x5855b0(0x0, 102.5));
          }
        };
        _0x503319.ResetComboMoney = function () {
          this.m_comboMoneyTxT.getComponent(_0x25fe73).string = '0';
        };
        _0x503319.ResetWheelSound = function () {
          if (null != this.m_soundIdwheel && null != this.m_soundIdwheel) {
            _0x380a74.Stop(this.m_soundIdwheel);
          }
        };
        _0x23c2ec(_0x10216c, [{
          'key': "InBonus",
          'set': function (_0x573df5) {
            this.m_inBonus = _0x573df5;
          }
        }, {
          'key': "isFast",
          'get': function () {
            return this.m_fastEffect;
          }
        }]);
        return _0x10216c;
      }();
      var _0x4ecabd;
      var _0x2c0726;
      _0x2a64d3.SYMBOL_SIZE = {
        'width': 0x98,
        'height': 0x6a
      };
      _0x2a64d3.LOAD_PATH = {
        'SYMBOL_ATLAS': '/CSHSlot/Symbol/SymbolAtlas'
      };
      _0x2a64d3.SYMBOL_PIC_LIST = ["symbol_0", "symbol_1", "symbol_2", "symbol_3", "symbol_4", "symbol_5", "symbol_6", "symbol_7", "symbol_wild", "symbol_bonus", "symbol_scatter"];
      _0x2a64d3.STATE = {
        'NONE': 0x0,
        'LINE_EFFECT': 0x1,
        'AWARD_ARROW': 0x2,
        'AWARD_FIRE': 0x3,
        'CHANGE_SYMBOL': 0x4,
        'AWARD_FIRE_END': 0x5,
        'ENTER_BONUS_LINE': 0x6,
        'BONUS_LINE_EFFECT': 0x7,
        'BONUS_SCATTER_EFFECT': 0x8
      };
      _0x2b80b7 = {
        [_0x3a2794.SYMBOL_ID.KING]: "CSHSlot/Symbol/effect/sybo_01",
        [_0x3a2794.SYMBOL_ID.BONUS]: "CSHSlot/Symbol/effect/sybo_02",
        [_0x3a2794.SYMBOL_ID.SCATTER]: "CSHSlot/Symbol/effect/sybo_03",
        [_0x3a2794.SYMBOL_ID.WILD]: 'CSHSlot/Symbol/effect/sybo_04',
        [_0x3a2794.SYMBOL_ID.PERSON]: 'CSHSlot/Symbol/effect/sybo_05',
        [_0x3a2794.SYMBOL_ID.CAR]: "CSHSlot/Symbol/effect/sybo_06",
        [_0x3a2794.SYMBOL_ID.LION]: "CSHSlot/Symbol/effect/sybo_07"
      };
      _0x2a64d3.EFFECT_SYMBOL_CSB_PATH = _0x2b80b7;
      _0x2a64d3.EFFECT_CSB_KEY = {
        'AWARD_FIRE': 'AWARD_FIRE',
        'AWARD_SYMBOL_HIT': "AWARD_SYMBOL_HIT",
        'NEAR_WIN': "NEAR_WIN",
        'SCATTER_BALL': "SCATTER_BALL"
      };
      _0x5e80a2 = {
        [_0x2a64d3.EFFECT_CSB_KEY.AWARD_FIRE]: "CSHSlot/Symbol/effect/Mage_02fir",
        [_0x2a64d3.EFFECT_CSB_KEY.AWARD_SYMBOL_HIT]: "CSHSlot/Symbol/effect/sybo_hit",
        [_0x2a64d3.EFFECT_CSB_KEY.NEAR_WIN]: "CSHSlot/Symbol/effect/sybo_newin",
        [_0x2a64d3.EFFECT_CSB_KEY.SCATTER_BALL]: 'CSHSlot/FreeGame/effect/sybo_brball'
      };
      _0x2a64d3.EFFECT_CSB_PATH = _0x5e80a2;
      _0x2a64d3.MC_FRAME_EVENT = {
        'CHANGE_SYMBOL': "ChangeSymbol",
        'END': "End",
        'RUN_FIRE': "RunFire"
      };
      _0x2a64d3.ANIM_TAG = {
        'HIT_FADEOUT': 0x64
      };
      _0xbd733f._RF.pop();
      _0xbd733f._RF.push({}, "be1a7tlPVNG7at/fU4InCtT", "RoundEndState", undefined);
      var _0x50647e = _0x4def64.ccclass;
      _0x4ecabd = _0x50647e('RoundEndState');
      var _0x40eb47 = _0x4ecabd(_0x2c0726 = function (_0x42c268) {
        function _0x2acca1(_0x5b7655) {
          var _0x29d09d;
          (_0x29d09d = _0x42c268.call(this) || this).m_gameView = null;
          _0x29d09d.m_gameView = _0x5b7655;
          return _0x29d09d;
        }
        _0x10a9fe(_0x2acca1, _0x42c268);
        var _0xb1a996 = _0x2acca1.prototype;
        _0xb1a996.OnEnter = function () {
          _0x87e3e6("game state RoundEndState");
          if (_0x259743.IsTwice) {
            this.m_gameView.RetryRoundEnd();
          }
        };
        _0xb1a996.OnProcess = function (_0x3a136a) {
          if (_0x2bcf73.CanToNextRound() && (!_0x259743.IsTwice || _0x259743.IsTwice && _0x259743.IsGetRoundEndAck)) {
            if (this.m_gameView.IsBonus && (this.m_gameView.Round > 0x1 || _0x2fa636.IsAutoSpin)) {
              _0x5dd7f8.NextState(_0x10a27d.SPIN);
            } else if (this.m_gameView.IsBonus && !_0x2fa636.IsAutoSpin) {
              _0x5dd7f8.NextState(_0x10a27d.IDLE);
            } else {
              _0x5dd7f8.NextState(_0x10a27d.END);
            }
          }
        };
        _0xb1a996.OnLeave = function () {};
        return _0x2acca1;
      }(_0xa0dd7)) || _0x2c0726;
      var _0x4fe9ca;
      var _0x560f9d;
      _0xbd733f._RF.pop();
      _0xbd733f._RF.push({}, "c89642WCDRG7b4GBB5pu2L5", "EnterBonusState", undefined);
      var _0x1c3a4e = _0x4def64.ccclass;
      _0x4fe9ca = _0x1c3a4e('EnterBonusState');
      var _0x396789 = _0x4fe9ca(_0x560f9d = function (_0x4e7811) {
        function _0x1057f5(_0xffc288) {
          var _0xca09b2;
          (_0xca09b2 = _0x4e7811.call(this) || this).m_gameView = null;
          _0xca09b2.m_gameView = _0xffc288;
          return _0xca09b2;
        }
        _0x10a9fe(_0x1057f5, _0x4e7811);
        var _0x25a177 = _0x1057f5.prototype;
        _0x25a177.OnEnter = function () {
          var _0x4d19cf = this;
          _0x87e3e6("game state EnterBonusState");
          this.m_gameView.Plate.ShowBonusLineEffect();
          _0xf0ede4(this.m_gameView.node).delay(_0x447c2f.ADJUST_TIME.SHOW_PLATE_AWARD_BONUS_LINE).call(function () {
            _0x4d19cf.m_gameView.ChangeToBonus();
          }).start();
        };
        _0x25a177.OnProcess = function (_0x587a82) {};
        _0x25a177.OnLeave = function () {};
        return _0x1057f5;
      }(_0xa0dd7)) || _0x560f9d;
      var _0x467116;
      var _0x845325;
      _0xbd733f._RF.pop();
      _0xbd733f._RF.push({}, "247d0vXtqVCVKgxqy2J5Zd2", "ExitBonusState", undefined);
      var _0x331468 = _0x4def64.ccclass;
      _0x467116 = _0x331468('ExitBonusState');
      var _0x16fe2f = _0x467116(_0x845325 = function (_0x27db1b) {
        function _0x4e1765(_0x546932) {
          var _0x30d128;
          (_0x30d128 = _0x27db1b.call(this) || this).m_gameView = null;
          _0x30d128.m_gameView = _0x546932;
          return _0x30d128;
        }
        _0x10a9fe(_0x4e1765, _0x27db1b);
        var _0x199e2c = _0x4e1765.prototype;
        _0x199e2c.OnEnter = function () {
          _0x87e3e6("game state ExitBonusState");
          this.m_gameView.Mask.active = true;
          this.m_gameView.TotalBonusMC.mc.setScale(this.m_gameView.OnRotateScale, this.m_gameView.OnRotateScale, 0x1);
          this.m_gameView.TotalBonusMC.mc.setPosition(_0x447c2f.ROTATE_POSITION.FG_WIN[this.m_gameView.CurOrientation]);
          this.m_gameView.TotalBonusEnterMC.mc.setScale(this.m_gameView.OnRotateScale, this.m_gameView.OnRotateScale, 0x1);
          this.m_gameView.TotalBonusEnterMC.mc.setPosition(_0x447c2f.ROTATE_POSITION.FG_WIN[this.m_gameView.CurOrientation]);
          this.m_gameView.TotalBonusEnterMC.mc.active = true;
          this.m_gameView.TotalBonusEnterMC.Play();
          this.m_gameView.m_effectView.playCoinEffect({
            'level': 0x7,
            'position': new _0x5382eb(_0x1f6524.DesignSize.width / 0x2, _0x1f6524.DesignSize.height),
            'time': 2.3
          });
          this.m_gameView.TotalBonusEnterMC.mc.getChildByName("tol_Ta01").getChildByName('txt_totalRound').getComponent(_0x25fe73).string = (this.m_gameView.AllFGSpinAck.length - 0x1).toString();
          this.m_gameView.PlaySound(_0x3a2794.SOUND_NAME.csh_wheel_end);
          this.m_gameView.Timer.Start(0x3e8 * _0x447c2f.ADJUST_TIME.BONUS_TO_MAIN_AWARD_WAIT);
        };
        _0x199e2c.OnProcess = function (_0x5029c9) {
          if (this.m_gameView.Timer.ToBool()) {
            this.m_gameView.ChangeToMainGame();
            this.m_gameView.Timer.Clear();
          }
        };
        _0x199e2c.OnLeave = function () {};
        return _0x4e1765;
      }(_0xa0dd7)) || _0x845325;
      var _0x12526c;
      var _0x4c122e;
      _0xbd733f._RF.pop();
      _0xbd733f._RF.push({}, "cd340fwkTtGz4P/0Vy2ejaB", 'IdleState', undefined);
      var _0x4d408e = _0x4def64.ccclass;
      _0x12526c = _0x4d408e("IdleState");
      var _0xcdddd2 = _0x12526c(_0x4c122e = function (_0xc15fec) {
        function _0x268d64(_0x4a511a) {
          var _0x58eaf9;
          (_0x58eaf9 = _0xc15fec.call(this) || this).m_gameView = null;
          _0x58eaf9.m_gameView = _0x4a511a;
          return _0x58eaf9;
        }
        _0x10a9fe(_0x268d64, _0xc15fec);
        var _0x1814ba = _0x268d64.prototype;
        _0x1814ba.Enter = function () {
          _0x87e3e6("game state IdleState");
          if (!(this.m_gameView.IsBonus || _0x2fa636.IsFreeSpin)) {
            _0x2efe6a.SetBuyBonusState(true);
          }
          if (this.m_gameView.InBonus) {
            _0x2fa636.CanPlayFeaturesDemo(false);
            _0x2fa636.IsGameIdle = false;
          } else {
            _0x2fa636.CanPlayFeaturesDemo(true);
            _0x2fa636.IsGameIdle = true;
            if (_0x2efe6a.IsFeaturesDemoMode) {
              if (_0x2fa636.IsAutoSpin) {
                this.m_gameView.StopAutoPlay();
              }
              this.m_gameView.Plate.RecoverPlate();
            }
          }
          this.m_gameView.FastEffect = false;
          if (_0x2fa636.IsAutoSpin) {
            if (this.m_gameView.IsFast()) {
              this.m_gameView.WaitState(_0x447c2f.ADJUST_TIME.AUTO_IDEL_TO_START_SPIN_FAST, _0x10a27d.SPIN);
            } else {
              this.m_gameView.WaitState(_0x447c2f.ADJUST_TIME.AUTO_IDEL_TO_START_SPIN, _0x10a27d.SPIN);
            }
          } else {
            _0x2fa636.SetSpinState(_0x50322b.IDLE);
            this.m_gameView.Timer.Start(0x3e8 * _0x447c2f.ADJUST_TIME.REQ_BROADCAST);
          }
        };
        _0x1814ba.Process = function (_0x1a6683) {
          _0x11ddec.StartAutoShow();
          if (this.m_gameView.Timer.ToBool()) {
            this.m_gameView.Timer.Start(0x3e8 * _0x447c2f.ADJUST_TIME.REQ_BROADCAST);
          }
        };
        return _0x268d64;
      }(_0xd3ad1c)) || _0x4c122e;
      var _0x46424e;
      var _0x528f70;
      _0xbd733f._RF.pop();
      _0xbd733f._RF.push({}, 'a90d1s6CjNAVr5ucDhg/KJe', 'CheckState', undefined);
      var _0x5ce5db = _0x4def64.ccclass;
      _0x46424e = _0x5ce5db('CheckState');
      var _0x53d9ec = _0x46424e(_0x528f70 = function (_0x3e1e66) {
        function _0x388f43(_0x592496) {
          var _0x444209;
          (_0x444209 = _0x3e1e66.call(this) || this).m_gameView = null;
          _0x444209.m_gameView = _0x592496;
          return _0x444209;
        }
        _0x10a9fe(_0x388f43, _0x3e1e66);
        var _0x4e84e2 = _0x388f43.prototype;
        _0x4e84e2.OnEnter = function () {
          _0x87e3e6("game state CheckState");
          if (this.m_gameView.Plate.NeedEnterBonusGame()) {
            this.m_gameView.InBonus = true;
            _0x5dd7f8.NextState(_0x5afba5.ENTER_BONUS);
          } else {
            _0x5dd7f8.NextState(_0x5afba5.ROUND_END);
          }
        };
        _0x4e84e2.OnProcess = function (_0x5d68c9) {};
        _0x4e84e2.OnLeave = function () {};
        return _0x388f43;
      }(_0xa0dd7)) || _0x528f70;
      var _0x6721dc;
      var _0x162a86;
      _0xbd733f._RF.pop();
      _0xbd733f._RF.push({}, "e73adX0d3FAP4ByYr4mN4pd", "ReqGameSettingState", undefined);
      var _0x3d80c5 = _0x4def64.ccclass;
      _0x6721dc = _0x3d80c5("ReqGameSettingState");
      var _0x49eda3 = _0x6721dc(_0x162a86 = function (_0x4af337) {
        function _0x5260ad(_0x2d771e) {
          var _0x938e1a;
          (_0x938e1a = _0x4af337.call(this) || this).m_gameView = null;
          _0x938e1a.m_gameView = _0x2d771e;
          return _0x938e1a;
        }
        _0x10a9fe(_0x5260ad, _0x4af337);
        var _0x5c1edb = _0x5260ad.prototype;
        _0x5c1edb.OnEnter = function () {
          _0x87e3e6("game state ReqGameSettingState");
        };
        _0x5c1edb.OnProcess = function (_0x2c27f1) {
          if (this.m_gameView.IsReceiveGameSetting && this.m_gameView.IsFeaturesLoaded() && this.m_gameView.IsInitExtra && this.m_gameView.CheckLoadReady() && this.m_gameView.FirstInitInfoDone && this.m_gameView.IsFirstShow) {
            this.m_gameView.Show();
            this.m_gameView.IsFirstShow = false;
            _0x29d77b.LoadingComplete();
          }
        };
        _0x5c1edb.OnLeave = function () {};
        return _0x5260ad;
      }(_0xa0dd7)) || _0x162a86;
      var _0x2abc1d;
      var _0xc9d8d5;
      _0xbd733f._RF.pop();
      _0xbd733f._RF.push({}, '63bfa56BQhIfbqeKcG2kJWU', 'SpinningState', undefined);
      var _0x35823b = _0x4def64.ccclass;
      _0x2abc1d = _0x35823b("SpinningState");
      var _0x38eb80 = _0x2abc1d(_0xc9d8d5 = function (_0x194a8c) {
        function _0x11fa7c(_0x44a43c) {
          var _0x3a91a0;
          (_0x3a91a0 = _0x194a8c.call(this) || this).m_gameView = null;
          _0x3a91a0.m_gameView = _0x44a43c;
          return _0x3a91a0;
        }
        _0x10a9fe(_0x11fa7c, _0x194a8c);
        var _0x582a0c = _0x11fa7c.prototype;
        _0x582a0c.OnEnter = function () {
          _0x87e3e6("game state SpinningState");
        };
        _0x582a0c.OnProcess = function (_0x587933) {
          this.m_gameView.CMDProcess();
        };
        _0x582a0c.OnLeave = function () {};
        return _0x11fa7c;
      }(_0xa0dd7)) || _0xc9d8d5;
      var _0xb94b29;
      var _0x56c55a;
      _0xbd733f._RF.pop();
      _0xbd733f._RF.push({}, '67a66XGBFBAe4LTp1/yowHH', "SpinState", undefined);
      var _0x481e86 = _0x4def64.ccclass;
      _0xb94b29 = _0x481e86('SpinState');
      var _0x22342f = _0xb94b29(_0x56c55a = function (_0x4205a7) {
        function _0x5b0932(_0x1be502) {
          var _0x333aa9;
          (_0x333aa9 = _0x4205a7.call(this) || this).m_gameView = null;
          _0x333aa9.m_gameView = _0x1be502;
          return _0x333aa9;
        }
        _0x10a9fe(_0x5b0932, _0x4205a7);
        var _0x5238fb = _0x5b0932.prototype;
        _0x5238fb.OnEnter = function () {
          _0x87e3e6("game state SpinState");
          _0x2efe6a.SetBuyBonusState(false);
          _0x2fa636.CanPlayFeaturesDemo(false);
          _0x2fa636.IsGameIdle = false;
          _0x5dd7f8.NextState(_0x5afba5.SPINNING);
          var _0x1ba2bb = _0x2fa636.GetNowBetValue();
          this.m_gameView.Plate.StartSpin();
          this.m_gameView.ReqSpin(_0x1ba2bb);
          this.m_gameView.m_effectView.SkipEffect();
          this.m_gameView.m_effectView.SkipEffectSound();
          if (_0x259743.HasUnshow && !this.m_gameView.InBonus) {
            _0x259743.HasUnshow = false;
            this.m_gameView.OnMainSpinAckNew(this.m_gameView.UnshowSpinAck);
            this.m_gameView.UnshowSpinAck = null;
          }
          if (0x1 == this.m_gameView.InBonus) {
            this.m_gameView.DecreaseBonusRound();
          } else {
            this.m_gameView.NowTotalWin = 0x0;
            this.m_gameView.CurrentWin = 0x0;
            _0x2fa636.SetWinValue(0x0);
          }
        };
        _0x5238fb.OnProcess = function (_0x160862) {};
        _0x5238fb.OnLeave = function () {};
        return _0x5b0932;
      }(_0xa0dd7)) || _0x56c55a;
      var _0x5b367d;
      var _0x4fdd0f;
      _0xbd733f._RF.pop();
      _0xbd733f._RF.push({}, "2800ccjUztGRb3hUudqLQ24", "ToGameState", undefined);
      var _0xa12777 = _0x4def64.ccclass;
      _0x5b367d = _0xa12777("ToGameState");
      var _0x207f8d = _0x5b367d(_0x4fdd0f = function (_0x5f0141) {
        function _0x50cefb(_0x549e15) {
          var _0x30216b;
          (_0x30216b = _0x5f0141.call(this) || this).m_gameView = null;
          _0x30216b.m_gameView = _0x549e15;
          return _0x30216b;
        }
        _0x10a9fe(_0x50cefb, _0x5f0141);
        var _0x478ce5 = _0x50cefb.prototype;
        _0x478ce5.OnEnter = function () {
          _0x87e3e6("game state ToGameState");
          if (_0xb08ad.FreeSpinRemain > 0x0) {
            _0x5dd7f8.NextState(_0x10a27d.CHECK_FREESPIN);
          } else {
            _0x5dd7f8.NextState(_0x10a27d.IDLE);
          }
          _0x11ddec.StartAutoShow();
        };
        _0x478ce5.OnProcess = function (_0x15de78) {};
        _0x478ce5.OnLeave = function () {};
        return _0x50cefb;
      }(_0xa0dd7)) || _0x4fdd0f;
      var _0x3ed5bf;
      var _0x29baa0;
      _0xbd733f._RF.pop();
      _0xbd733f._RF.push({}, "a690e9k4iNDQKk39hUzwDz3", "WaitState", undefined);
      var _0x4f7161 = _0x4def64.ccclass;
      _0x3ed5bf = _0x4f7161("WaitState");
      var _0x287de4 = _0x3ed5bf(_0x29baa0 = function (_0x2cd4cd) {
        function _0x142269(_0x108a19) {
          var _0x59a5d4;
          (_0x59a5d4 = _0x2cd4cd.call(this) || this).m_gameView = null;
          _0x59a5d4.m_gameView = _0x108a19;
          return _0x59a5d4;
        }
        _0x10a9fe(_0x142269, _0x2cd4cd);
        var _0x2b9f0f = _0x142269.prototype;
        _0x2b9f0f.OnEnter = function () {
          _0x87e3e6("game state WaitState");
          this.m_gameView.Timer.Start(0x3e8 * this.m_gameView.WaitStateTime);
        };
        _0x2b9f0f.OnProcess = function (_0x15ef49) {
          if (this.m_gameView.Timer.ToBool()) {
            _0x5dd7f8.NextState(this.m_gameView.WaitToNextState);
          }
        };
        _0x2b9f0f.OnLeave = function () {};
        return _0x142269;
      }(_0xa0dd7)) || _0x29baa0;
      var _0x5c9652;
      var _0x33bdef;
      _0xbd733f._RF.pop();
      _0xbd733f._RF.push({}, "ad624OthAVPur7f0HpEgLvC", 'CanStopState', undefined);
      var _0x43de57 = _0x4def64.ccclass;
      _0x5c9652 = _0x43de57("CanStopState");
      var _0x534743 = _0x5c9652(_0x33bdef = function (_0x24050b) {
        function _0x5d9593(_0x1b4754) {
          var _0x519edf;
          (_0x519edf = _0x24050b.call(this) || this).m_gameView = null;
          _0x519edf.m_gameView = _0x1b4754;
          return _0x519edf;
        }
        _0x10a9fe(_0x5d9593, _0x24050b);
        var _0x355621 = _0x5d9593.prototype;
        _0x355621.OnEnter = function () {
          _0x87e3e6("game state CanStopState");
          if (_0x2fa636.IsHardStop || _0x2fa636.IsAutoSpin && _0x2fa636.IsHardStop) {
            this.m_gameView.Plate.SetIsClickStopBtn();
          }
          _0x5dd7f8.NextState(_0x5afba5.STOP);
        };
        _0x355621.OnProcess = function (_0x14702e) {};
        _0x355621.OnLeave = function () {};
        return _0x5d9593;
      }(_0xa0dd7)) || _0x33bdef;
      var _0x3cbef9;
      var _0x3cee9a;
      _0xbd733f._RF.pop();
      _0xbd733f._RF.push({}, '6f21bZyGc9OPbAQmz7W5amQ', "CheckAwardState", undefined);
      var _0x3278bc = _0x4def64.ccclass;
      _0x3cbef9 = _0x3278bc("CheckAwardState");
      var _0x4ae572 = _0x3cbef9(_0x3cee9a = function (_0x4f096f) {
        function _0x1f558e(_0x413700) {
          var _0x71fbb2;
          (_0x71fbb2 = _0x4f096f.call(this) || this).m_gameView = null;
          _0x71fbb2.m_gameView = _0x413700;
          return _0x71fbb2;
        }
        _0x10a9fe(_0x1f558e, _0x4f096f);
        var _0x5bf219 = _0x1f558e.prototype;
        _0x5bf219.OnEnter = function () {
          _0x87e3e6("game state CheckAwardState");
          if (this.m_gameView.Plate.NeedShowAward()) {
            this.m_gameView.WaitState(0x0, _0x5afba5.SHOW_PLATE_AWARD);
          } else if (this.m_gameView.IsFast()) {
            this.m_gameView.WaitState(_0x447c2f.ADJUST_TIME.TO_TOTAL_AWARD_WAIT_FAST + 0x0, _0x5afba5.TOTAL_AWARD);
          } else {
            this.m_gameView.WaitState(_0x447c2f.ADJUST_TIME.TO_TOTAL_AWARD_WAIT + 0x0, _0x5afba5.TOTAL_AWARD);
          }
        };
        _0x5bf219.OnProcess = function (_0x3cee20) {};
        _0x5bf219.OnLeave = function () {};
        return _0x1f558e;
      }(_0xa0dd7)) || _0x3cee9a;
      var _0x3e263b;
      var _0x34ee0d;
      _0xbd733f._RF.pop();
      _0xbd733f._RF.push({}, "1e8dcUc9DRKpq4s4/hATowP", "ShowPlateAwardClearNewSymbolState", undefined);
      var _0x228b64 = _0x4def64.ccclass;
      _0x3e263b = _0x228b64("ShowPlateAwardClearNewSymbolState");
      var _0x17cb1c = _0x3e263b(_0x34ee0d = function (_0x4a020f) {
        function _0x32fa23(_0x29a796) {
          var _0x124a18;
          (_0x124a18 = _0x4a020f.call(this) || this).m_gameView = null;
          _0x124a18.m_gameView = _0x29a796;
          return _0x124a18;
        }
        _0x10a9fe(_0x32fa23, _0x4a020f);
        var _0x1e97e1 = _0x32fa23.prototype;
        _0x1e97e1.OnEnter = function () {
          _0x87e3e6("game state ShowPlateAwardClearNewSymbolState");
          this.m_gameView.Plate.ShowNextSymbolEffect();
          this.m_gameView.Timer.Start(0x3e8 * _0x447c2f.ADJUST_TIME.SHOW_PLATE_CHANGE_SYMBOL);
          this.m_gameView.DoComboMoneyToWinEffect(0x1);
        };
        _0x1e97e1.OnProcess = function (_0x234189) {
          if (this.m_gameView.Timer.ToBool()) {
            _0x5dd7f8.NextState(_0x5afba5.CHECK_AWARD);
          }
        };
        _0x1e97e1.OnLeave = function () {};
        return _0x32fa23;
      }(_0xa0dd7)) || _0x34ee0d;
      var _0x2ef8c1;
      var _0x2b2fbe;
      _0xbd733f._RF.pop();
      _0xbd733f._RF.push({}, "5415bBRtI9PPIF4BLrfWlar", "ShowPlateAwardState", undefined);
      var _0x525007 = _0x4def64.ccclass;
      _0x2ef8c1 = _0x525007('ShowPlateAwardState');
      var _0x552b0d = _0x2ef8c1(_0x2b2fbe = function (_0x573ebe) {
        function _0x23cb6c(_0x377ff0) {
          var _0x2bc155;
          (_0x2bc155 = _0x573ebe.call(this) || this).m_gameView = null;
          _0x2bc155.m_gameView = _0x377ff0;
          return _0x2bc155;
        }
        _0x10a9fe(_0x23cb6c, _0x573ebe);
        var _0x41c390 = _0x23cb6c.prototype;
        _0x41c390.OnEnter = function () {
          _0x87e3e6("game state ShowPlateAwardState");
          this.m_gameView.Plate.ShowEffectLine();
          if ((isNaN(Number(this.m_gameView.ComboMoney.getComponent(_0x25fe73).string.replace(',', ''))) ? -0x1 : Number(this.m_gameView.ComboMoney.getComponent(_0x25fe73).string.replace(',', ''))) > 0x0) {
            this.m_gameView.ComboMoneyPanel.active = true;
            this.m_gameView.ComboMask.active = true;
            this.m_gameView.ComboMask.getComponent(_0x5547b9).setContentSize(_0x447c2f.OTHER_CONST.COMBO_MONEY_PANEL_WIDTH_START, _0x447c2f.OTHER_CONST.COMBO_MONEY_PANEL_HEIGHT);
            this.m_gameView.ComboRoundPanel.active = true;
            this.m_gameView.ComboNum.getComponent(_0x25fe73).string = this.m_gameView.Plate.GetCurrComboTime().toString();
            this.m_gameView.ComboMoney.active = false;
            this.m_gameView.DoEffectProcess = true;
            this.m_gameView.TotalTick = 0x0;
          } else {
            this.m_gameView.DoEffectProcess = false;
          }
          var _0x5117b4 = _0x447c2f.ADJUST_TIME.SHOW_PLATE_AWARD_LINE;
          if (this.m_gameView.IsFast()) {
            _0x5117b4 = _0x447c2f.ADJUST_TIME.SHOW_PLATE_AWARD_LINE;
          }
          if (this.m_gameView.Plate.m_state != _0x2a64d3.STATE.BONUS_SCATTER_EFFECT) {
            _0x5117b4 += _0x447c2f.ADJUST_TIME.SHOW_PLATE_AWARD_LINE_ADD_NORMAL;
          }
          this.m_gameView.Timer.Start(0x3e8 * _0x5117b4);
        };
        _0x41c390.OnProcess = function (_0x22f18f) {
          if (this.m_gameView.Timer.ToBool()) {
            _0x5dd7f8.NextState(_0x5afba5.SHOW_PLATE_AWARD_CLEAR_NEW_SYMBOL);
          } else if (this.m_gameView.DoEffectProcess) {
            this.m_gameView.DoComboMoneyEffectProcess(_0x22f18f);
          }
        };
        _0x41c390.OnLeave = function () {};
        return _0x23cb6c;
      }(_0xa0dd7)) || _0x2b2fbe;
      var _0x314937;
      var _0x5ac48c;
      _0xbd733f._RF.pop();
      _0xbd733f._RF.push({}, "98e94PNH0pHMqfa7PQrq6sn", "StopState", undefined);
      var _0x5891e4 = _0x4def64.ccclass;
      _0x314937 = _0x5891e4("StopState");
      var _0x44fba2 = _0x314937(_0x5ac48c = function (_0x4cd5ea) {
        function _0x2b8e85(_0xe5bdb6) {
          var _0x418228;
          (_0x418228 = _0x4cd5ea.call(this) || this).m_gameView = null;
          _0x418228.m_gameView = _0xe5bdb6;
          return _0x418228;
        }
        _0x10a9fe(_0x2b8e85, _0x4cd5ea);
        var _0x54f2a2 = _0x2b8e85.prototype;
        _0x54f2a2.OnEnter = function () {
          _0x87e3e6("game state StopState");
        };
        _0x54f2a2.OnProcess = function (_0xb65ae9) {
          if (this.m_gameView.Plate.IsPlateStop()) {
            _0x5dd7f8.NextState(_0x5afba5.CHECK_AWARD);
            if (!_0x2fa636.IsAutoSpin) {
              _0x2fa636.SetSpinState(_0x50322b.CLICK_STOP);
            }
          }
        };
        _0x54f2a2.OnLeave = function () {};
        return _0x2b8e85;
      }(_0xa0dd7)) || _0x5ac48c;
      var _0x551d14;
      var _0x274b26;
      _0xbd733f._RF.pop();
      _0xbd733f._RF.push({}, "30de9A25o1AHYuJfEEcYFZh", "TotalAwardState", undefined);
      var _0x2ff3ae = _0x4def64.ccclass;
      _0x551d14 = _0x2ff3ae('TotalAwardState');
      var _0x4110fe = _0x551d14(_0x274b26 = function (_0x3408ce) {
        function _0x34f428(_0x38a6b3) {
          var _0x19c468;
          (_0x19c468 = _0x3408ce.call(this) || this).m_gameView = null;
          _0x19c468.m_gameView = _0x38a6b3;
          return _0x19c468;
        }
        _0x10a9fe(_0x34f428, _0x3408ce);
        var _0x1f77e3 = _0x34f428.prototype;
        _0x1f77e3.OnEnter = function () {
          _0x87e3e6("game state TotalAwardState");
          if (this.m_gameView.Plate.NeedEnterBonusGame()) {
            this.m_gameView.IsBonus = true;
          }
          this.m_gameView.Plate.CloseDarkMask();
          var _0x17f73b = this.m_gameView.CurrentWin;
          if (_0x2fa636.IsAutoSpin && !this.m_gameView.InBonus) {
            var _0x24b4c9 = false;
            _0x24b4c9 = -0x1 != _0x2fa636.GetValueOfSingleWin() && _0x17f73b >= _0x2fa636.GetValueOfSingleWin();
            var _0x29176b = _0x1d7129.strip(_0x2fa636.GetValueOfPoint_Less());
            var _0x1006bd = _0x1d7129.strip(_0x2fa636.GetValueOfPoint_Great());
            if (-0x1 != _0x29176b) {
              _0x24b4c9 = _0x24b4c9 || _0x1d7129.strip(_0x2fa636.GetChips() + _0x17f73b) <= _0x29176b;
            }
            if (-0x1 != _0x1006bd) {
              _0x24b4c9 = _0x24b4c9 || _0x1d7129.strip(_0x2fa636.GetChips() + _0x17f73b) >= _0x1006bd;
            }
            if (_0x24b4c9 = _0x24b4c9 || !_0x2fa636.IsAutoPlayByTimes()) {
              _0x2fa636.ShowAutoPlayState(false);
              this.m_gameView.StopWiseAutoPlayByNature();
            }
          }
          var _0x1d7b87 = 0x0;
          if (!this.m_gameView.Plate.NeedEnterBonusGame()) {
            if (this.m_gameView.InBonus) {
              _0x1d7b87 = 0x186a0;
              this.m_gameView.CheckContinueBonus();
            } else if (_0x17f73b > 0x0) {
              if ((_0x1d7b87 = _0x17f73b / _0x2fa636.GetNowBetValue() > _0x447c2f.ODDS[0x0] ? this.m_gameView.m_effectView.ShowCommonEffect(_0x17f73b, _0x2fa636.GetNowBetValue(), null, null) + 0.1 : 0x0) >= 0x5 || _0x1d7b87 >= 0x2 && _0x1d7b87 < 0x5) {
                this.m_gameView.CanSkipEffect = true;
              }
            }
          }
          this.m_gameView.Timer.Start(0x3e8 * _0x1d7b87);
        };
        _0x1f77e3.OnProcess = function (_0x396e5d) {
          if (this.m_gameView.Timer.ToBool()) {
            this.m_gameView.ShowChipAmountAndToNextState(this.m_gameView.CurrentWin);
          } else if (this.m_gameView.IsSkipEffect) {
            this.m_gameView.IsSkipEffect = false;
            if (this.m_gameView.Timer.TicksUntilTrue() > 0x7d0) {
              this.m_gameView.Timer.Start(0x3e8 * _0x3a2794.TOTAL_AWARD_SKIP_TIME_MAX);
            } else {
              this.m_gameView.ShowChipAmountAndToNextState(this.m_gameView.CurrentWin);
            }
          }
        };
        _0x1f77e3.OnLeave = function () {};
        return _0x34f428;
      }(_0xa0dd7)) || _0x274b26;
      var _0x333976;
      var _0x25aa1c;
      _0xbd733f._RF.pop();
      _0xbd733f._RF.push({}, "07fcdrSvuJDW7AUg8BOsnRP", 'RoundShowEndState', undefined);
      var _0x8246e9 = _0x4def64.ccclass;
      _0x333976 = _0x8246e9("RoundShowEndState");
      var _0x2e76e7 = _0x333976(_0x25aa1c = function (_0x121aaf) {
        function _0x38ecbc(_0x297a1a) {
          var _0x184057;
          (_0x184057 = _0x121aaf.call(this) || this).m_gameView = null;
          _0x184057.m_gameView = _0x297a1a;
          return _0x184057;
        }
        _0x10a9fe(_0x38ecbc, _0x121aaf);
        var _0xb398f = _0x38ecbc.prototype;
        _0xb398f.OnEnter = function () {
          _0x87e3e6("game state RoundShowEndState");
          _0x5dd7f8.NextState(_0x10a27d.COMMON_SHOW);
        };
        _0xb398f.OnProcess = function (_0x5e603f) {};
        _0xb398f.OnLeave = function () {};
        return _0x38ecbc;
      }(_0xa0dd7)) || _0x25aa1c;
      _0xbd733f._RF.pop();
      _0xbd733f._RF.push({}, "ea62fYpG/dCq4cpT4xtD3EW", "UnshowPrepareState", undefined);
      var _0x45db17 = function (_0x128427) {
        function _0x30ea13(_0x16e47d) {
          var _0x285a60;
          (_0x285a60 = _0x128427.call(this) || this).m_gameView = null;
          _0x285a60.m_gameView = _0x16e47d;
          return _0x285a60;
        }
        _0x10a9fe(_0x30ea13, _0x128427);
        var _0x260528 = _0x30ea13.prototype;
        _0x260528.OnEnter = function () {
          _0x87e3e6('GAMEVIEW_STATE.UnshowPrepareState');
          if (this.m_gameView.UnshowSpinAck) {
            _0x2fa636.SetBarNodeVisiable(true);
            this.m_gameView.Plate.Reset();
            if (_0x259743.UnshowStartRound >= 0x1) {
              this.m_gameView.SpinAck = this.m_gameView.UnshowSpinAck.info;
              this.m_gameView.AllFGSpinAck = this.m_gameView.SpinAck.ackVec;
              this.m_gameView.Round = _0x259743.UnshowStartRound;
              var _0x327ffb = this.m_gameView.Round;
              var _0x4b7f4e = this.m_gameView.AllFGSpinAck[_0x327ffb - 0x1].remainRound;
              var _0xa14ad0 = this.m_gameView.AllFGSpinAck[_0x327ffb - 0x1].extraRound;
              var _0xab48ac = this.m_gameView.AllFGSpinAck[_0x327ffb - 0x1].extraOdds;
              if (0x0 == this.m_gameView.AllFGSpinAck[_0x327ffb - 0x1].remainRound) {
                _0x4b7f4e = this.m_gameView.AllFGSpinAck[_0x327ffb].remainRound + 0x1;
                _0xa14ad0 = 0x0;
                _0xab48ac = this.m_gameView.AllFGSpinAck[_0x327ffb].extraOdds;
              }
              this.m_gameView.IsBonus = true;
              this.m_gameView.InBonus = true;
              this.m_gameView.Plate.InBonus = true;
              this.m_gameView.ServerTotalWin = this.m_gameView.SpinAck.totalWin;
              this.m_gameView.ForceToBonus();
              this.m_gameView.SetBonusTopPanel(_0x4b7f4e, _0xa14ad0, _0xab48ac);
              for (var _0x545278 = 0x0; _0x545278 < _0x327ffb; _0x545278++) {
                var _0x2fd0b2 = 0x0;
                if (this.m_gameView.UnshowSpinAck.info.ackVec[_0x545278].awardVec && this.m_gameView.UnshowSpinAck.info.ackVec[_0x545278].awardVec.length > 0x0) {
                  for (var _0x5dee8e = 0x0; _0x5dee8e < this.m_gameView.UnshowSpinAck.info.ackVec[_0x545278].awardVec.length; _0x5dee8e++) {
                    _0x2fd0b2 += this.m_gameView.UnshowSpinAck.info.ackVec[_0x545278].awardVec[_0x5dee8e].award;
                  }
                }
                this.m_gameView.CurrentWin = _0x1d7129.plus(this.m_gameView.CurrentWin, _0x2fd0b2);
                this.m_gameView.NowTotalWin = this.m_gameView.CurrentWin;
              }
              _0x2fa636.SetWinValue(this.m_gameView.CurrentWin);
              _0x2fa636.SetEnterFree();
            }
            _0x21a1e5.ShowMessageBox(_0xb08ad.StringKey.MSGBOX_UNSHOW_BACK, _0xb08ad.StringKey.MSGBOX_TITLE_SYSTEM_INFO, function () {
              _0x5dd7f8.NextState(_0x10a27d.SPIN);
            });
          }
        };
        _0x260528.OnProcess = function (_0x5e71e0) {};
        _0x260528.OnLeave = function () {};
        return _0x30ea13;
      }(_0xa0dd7);
      var _0x41f87b;
      var _0x377240;
      var _0x4d25a1;
      var _0x2d8216;
      var _0x3803b1;
      var _0x11997b;
      var _0x46e1e9;
      var _0x46f4e3;
      _0xbd733f._RF.pop();
      _0xbd733f._RF.push({}, "5895aUSMV9FHL5Lv4lJMp6+", "CSHGameView", undefined);
      var _0x47c01b;
      !function (_0x18ecb7) {
        _0x18ecb7[_0x18ecb7.EFFECTVIEW = 0xa] = 'EFFECTVIEW';
      }(_0x47c01b || (_0x47c01b = {}));
      var _0x1cdd7b = _0x4def64.ccclass;
      var _0x4d43f6 = _0x4def64.property;
      _0x41f87b = _0x4d43f6({
        'type': _0x5d9e03,
        'tooltip': "canvas"
      });
      _0x377240 = _0x4d43f6({
        'type': _0x5d9e03,
        'tooltip': "地bar 根"
      });
      _0x4d25a1 = _0x4d43f6({
        'type': _0x5b8a04,
        'tooltip': "logo合圖"
      });
      _0x46f4e3 = function (_0x3ce9a3) {
        function _0x196ed6() {
          var _0x1513f1;
          var _0x294fc5 = arguments.length;
          var _0x2adeb3 = new Array(_0x294fc5);
          for (var _0x3f0543 = 0x0; _0x3f0543 < _0x294fc5; _0x3f0543++) {
            _0x2adeb3[_0x3f0543] = arguments[_0x3f0543];
          }
          _0x1513f1 = _0x3ce9a3.call.apply(_0x3ce9a3, [this].concat(_0x2adeb3)) || this;
          _0x39a07f(_0x1513f1, "m_canvas", _0x3803b1, _0x31358c(_0x1513f1));
          _0x39a07f(_0x1513f1, "m_barRoot", _0x11997b, _0x31358c(_0x1513f1));
          _0x39a07f(_0x1513f1, "m_logoAtlas", _0x46e1e9, _0x31358c(_0x1513f1));
          _0x1513f1.m_titleSpriteAtlas = null;
          _0x1513f1.m_isReceiveGameSetting = false;
          _0x1513f1.m_isInitExtra = false;
          _0x1513f1.m_timer = undefined;
          _0x1513f1.m_totalTick = undefined;
          _0x1513f1.m_doEffectProcess = undefined;
          _0x1513f1.m_inBonus = undefined;
          _0x1513f1.m_waitStateTime = undefined;
          _0x1513f1.m_waitToNextState = undefined;
          _0x1513f1.m_numBonusOdds = undefined;
          _0x1513f1.m_numBonusFreeRound = undefined;
          _0x1513f1.m_numBonusComboRound = undefined;
          _0x1513f1.m_comboMoneyPanel = undefined;
          _0x1513f1.m_comboMask = undefined;
          _0x1513f1.m_comboRoundPanel = undefined;
          _0x1513f1.m_comboNum = undefined;
          _0x1513f1.m_comboMoney = undefined;
          _0x1513f1.m_fastEffect = undefined;
          _0x1513f1.m_touchPanel = undefined;
          _0x1513f1.m_plate = undefined;
          _0x1513f1.m_lastClickTime = undefined;
          _0x1513f1.m_nFreeBgL = undefined;
          _0x1513f1.m_nFreeBgR = undefined;
          _0x1513f1.m_mask = undefined;
          _0x1513f1.m_bonusTotalRound = undefined;
          _0x1513f1.m_enterBonusMC = undefined;
          _0x1513f1.m_totalBonusEnterMC = undefined;
          _0x1513f1.m_totalBonusMC = undefined;
          _0x1513f1.m_autoPlayBlock = undefined;
          _0x1513f1.m_isLogoToFeatures = false;
          _0x1513f1.m_effectView = undefined;
          _0x1513f1.m_bgSoundId = undefined;
          _0x1513f1.m_logo = undefined;
          _0x1513f1.m_lo_freeTopPanel = undefined;
          _0x1513f1.m_fg_bg_s = undefined;
          _0x1513f1.m_fgRoundNum = undefined;
          _0x1513f1.m_fgOddsNum = undefined;
          _0x1513f1.m_fgCurRoundNum = undefined;
          _0x1513f1.m_allFGSpinAck = [];
          _0x1513f1.m_unshowSpinAck = null;
          _0x1513f1.m_allFGSpinAckIndex = undefined;
          _0x1513f1.m_cmdQueue = undefined;
          _0x1513f1.m_textImgAtlas = undefined;
          _0x1513f1.m_fireBall = null;
          _0x1513f1.m_fireBallPrefab = null;
          _0x1513f1.m_slotPanel = null;
          _0x1513f1.m_plateTopView = null;
          _0x1513f1.m_barNode = null;
          _0x1513f1.m_autoplayInfos = null;
          _0x1513f1.m_bottomBarIsLoad = false;
          _0x1513f1.m_curOrientation = 0x0;
          _0x1513f1.m_isDoneLoading = false;
          _0x1513f1.m_isLandscape = false;
          _0x1513f1.m_onRotateScale = 0x1;
          _0x1513f1.m_isFirstTouchPanel = true;
          _0x1513f1.m_isSkipEffect = false;
          _0x1513f1.m_canSkipEffect = false;
          _0x1513f1.m_ratationLock = false;
          _0x1513f1.m_isSkipFlash = false;
          _0x1513f1.m_logIndex = 0x0;
          _0x1513f1.m_spinAck = null;
          _0x1513f1.m_currentWin = 0x0;
          _0x1513f1.m_nowTotalWin = 0x0;
          _0x1513f1.m_roundMoney = 0x0;
          _0x1513f1.m_serverTotalWin = 0x0;
          _0x1513f1.m_realFeaturesSpinAck = null;
          _0x1513f1.m_firstInitInfoDone = false;
          _0x1513f1.m_isLogin = false;
          _0x1513f1.m_isBonus = false;
          _0x1513f1.m_featureType = null;
          _0x1513f1.m_isFirstShow = true;
          _0x1513f1.m_isPlateReady = false;
          _0x1513f1.m_bonusResReady = false;
          return _0x1513f1;
        }
        _0x10a9fe(_0x196ed6, _0x3ce9a3);
        var _0xde5d50 = _0x196ed6.prototype;
        _0xde5d50.GameViewInit = function () {
          var _0x44d25a = this;
          this.m_logo = this.node.getChildByName(_0x196ed6.UIName.IMG_LOGO_CSH);
          this.m_fg_bg_s = this.node.getChildByName(_0x196ed6.UIName.IMG_FG_BG);
          this.m_lo_freeTopPanel = this.node.getChildByName(_0x196ed6.UIName.LO_FREE_TOP_PANEL);
          this.m_fgRoundNum = this.m_lo_freeTopPanel.getChildByName(_0x196ed6.UIName.TXT_FREE_TOP_COMBO_ROUND_NUM);
          this.m_fgOddsNum = this.m_lo_freeTopPanel.getChildByName(_0x196ed6.UIName.TXT_FREE_TOP_GET_NUM);
          this.m_fgCurRoundNum = this.m_lo_freeTopPanel.getChildByName(_0x196ed6.UIName.IMG_FREE_TOP_ROUND_PANEL).getChildByName(_0x196ed6.UIName.TXT_FREE_TOP_ROUND_NUM);
          this.m_cmdQueue = new Array();
          this.m_timer = new _0x5c03a8();
          this.m_timer.UseDT(true);
          this.m_totalTick = 0x0;
          this.m_doEffectProcess = true;
          this.m_inBonus = false;
          this.m_waitStateTime = 0x0;
          this.m_waitToNextState = undefined;
          this.m_numBonusOdds = 0x0;
          this.m_numBonusFreeRound = 0x0;
          this.m_numBonusComboRound = 0x0;
          this.m_effectView = new _0x1f6524();
          this.m_effectView.addComponent(_0x5547b9);
          this.m_effectView.SetOdds(_0x196ed6.ODDS);
          this.m_effectView.SetWinEffectFiles(_0x196ed6.WIN_EFFECT_FILES);
          this.m_effectView.SetAwardBoardFile(_0x196ed6.AWARD_BOARD_FILE);
          this.m_comboMoneyPanel = this.node.getChildByName(_0x196ed6.UIName.LO_COMBOMONEY_PANEL);
          this.m_comboMask = this.m_comboMoneyPanel.getChildByName(_0x196ed6.UIName.LO_COMBO_BG_MASK);
          this.m_comboRoundPanel = this.m_comboMoneyPanel.getChildByName(_0x196ed6.UIName.LO_COMBO_ROUND);
          this.m_comboNum = this.m_comboRoundPanel.getChildByName(_0x196ed6.UIName.TXT_COMBO_NUM);
          _0x196ed6.POS.COMBO_PANEL_X = this.m_comboMoneyPanel.position.x;
          _0x196ed6.POS.COMBO_PANEL_Y = this.m_comboMoneyPanel.position.y;
          this.m_comboMoney = this.m_comboMoneyPanel.getChildByName(_0x196ed6.UIName.TXT_COMBOMONEY_NUM);
          _0x196ed6.POS.COMBO_MONEY_X = this.m_comboMoney.position.x;
          _0x196ed6.POS.COMBO_MONEY_Y = this.m_comboMoney.position.y;
          this.m_comboMoneyPanel.removeFromParent();
          this.m_effectView.addChild(this.m_comboMoneyPanel);
          this.m_comboMoneyPanel.setPosition(_0x5855b0(0x1b8, 0x104));
          this.m_slotPanel = this.node.getChildByName(_0x196ed6.UIName.LO_SYMBOL_PANEL);
          this.m_touchPanel = this.node.getChildByName(_0x196ed6.UIName.LO_TOUCH_PANEL);
          this.m_touchPanel.addComponent(_0x21a334).node.on(_0x5d9e03.EventType.TOUCH_END, function (_0xebb585) {
            _0x2fa636.SendSpinLog();
            _0x87e3e6("touchPanelCB_現在是 " + _0x5dd7f8.Current(), _0x2fa636.IsAutoSpin);
            if (!_0x2fa636.IsAutoSpin) {
              var _0x49f26d = false;
              var _0x2116b9 = Date.now();
              if (null != _0x44d25a.m_lastClickTime) {
                if (_0x2116b9 - _0x44d25a.m_lastClickTime > 0x3e8) {
                  _0x49f26d = true;
                }
              } else {
                _0x44d25a.m_lastClickTime = _0x2116b9;
                _0x49f26d = true;
              }
              if (!_0x49f26d) {
                return;
              }
              if (_0x5dd7f8.Current() == _0x10a27d.IDLE || _0x5dd7f8.Current() == _0x5afba5.STOP) {
                _0x44d25a.BarTouchCb(_0xebb585);
              } else {
                _0x44d25a.m_fastEffect = true;
              }
            }
          });
          this.m_plateTopView = new _0x5d9e03();
          this.node.addChild(this.m_plateTopView);
          var _0x1f1193 = this.node.getChildByName(_0x196ed6.UIName.N_FREE_BG_L);
          this.m_nFreeBgL = new _0x48c112();
          this.m_nFreeBgL.Init(_0x1f1193);
          this.m_nFreeBgL.AddParticle(_0x1f1193.getChildByName("Particle_1"));
          this.m_nFreeBgL.AddParticle(_0x1f1193.getChildByName("Particle_2"));
          this.m_nFreeBgL.Stop();
          this.m_nFreeBgL.mc.active = false;
          _0x1f1193 = this.node.getChildByName(_0x196ed6.UIName.N_FREE_BG_R);
          this.m_nFreeBgR = new _0x48c112();
          this.m_nFreeBgR.Init(_0x1f1193);
          this.m_nFreeBgR.AddParticle(_0x1f1193.getChildByName("Particle_1"));
          this.m_nFreeBgR.AddParticle(_0x1f1193.getChildByName('Particle_2'));
          this.m_nFreeBgR.Stop();
          this.m_nFreeBgR.mc.active = false;
          this.m_mask = this.node.getChildByName(_0x196ed6.UIName.LO_MASK);
          this.m_mask.active = false;
          _0x1d7129.SetZIndex(this.m_lo_freeTopPanel, _0x196ed6.GAMEVIEW_ZORDER.GAME_UI);
          this.m_fastEffect = false;
        };
        _0xde5d50.onLoad = function () {
          var _0x589256 = this;
          _0x534937.util.Long = _0x456a67;
          _0x534937.configure();
          _0x5515c0();
          this.GameViewInit();
          _0xb08ad.CURRENCY_CHANGE_ENABLE = true;
          this.OnRotation();
          _0x1d7129.AddOnRotationCb(function () {
            _0x589256.OnRotation();
          });
          window.onerror = function (_0x57b4f7, _0x862318, _0xce2e26, _0x5e9524, _0x15892d) {
            var _0x57dfd4 = '-1';
            var _0x5e793e = 0x0;
            if (_0xb08ad.APP) {
              _0x57dfd4 = _0xb08ad.APP.GetAID();
              _0x5e793e = Number(_0xb08ad.APP.GetApiID());
            }
            var _0x5592a4 = _0x38ac8a.FormErrorParams(_0x57dfd4, _0x5e793e, Number(_0xb08ad.NOW_GAME_ID), _0xb08ad.VERSION, _0x15892d);
            _0x38ac8a.SendErrorLog(_0x5592a4);
          };
          _0xb08ad.IsInMG = function () {
            return !_0x589256.m_isBonus;
          };
        };
        _0xde5d50.start = function () {
          var _0x194258 = this;
          _0x116f62.on(_0x11d943.EventType.KEY_DOWN, function (_0x18f253) {
            switch (_0x18f253.keyCode) {
              case _0x492968.SPACE:
                _0x2fa636.SendSpinLog();
                if (!_0x21a1e5.IsShow()) {
                  if (_0x5dd7f8.Current() != _0x10a27d.IDLE || _0x2fa636.IsAutoSpin) {
                    if (_0x5dd7f8.Current() == _0x5afba5.STOP) {
                      if (_0x5dd7f8.Current() == _0x5afba5.TOTAL_AWARD && _0x194258.m_canSkipEffect) {
                        _0x194258.m_isSkipEffect = true;
                      } else if (!_0x2fa636.IsAutoSpin) {
                        _0x2fa636.SetSpinState(_0x50322b.CLICK_STOP);
                        _0x194258.m_plate.SetIsClickStopBtn();
                      }
                    }
                  } else {
                    _0x194258.ClickSpin();
                  }
                }
            }
          });
          _0x1d7129.TriggerFeaturesShow = function () {
            if (_0x5dd7f8.Current() == _0x10a27d.IDLE) {
              _0x2efe6a.AutoShowFeatures();
            }
          };
          this.InitStates();
        };
        _0xde5d50.InitStates = function () {
          var _0x5d37c0 = {
            [_0x10a27d.WAIT_RES]: new _0x49eda3(this),
            [_0x5afba5.UNSHOW_PREPARE]: new _0x45db17(this),
            [_0x5afba5.TO_GAME]: new _0x207f8d(this),
            [_0x10a27d.IDLE]: new _0xcdddd2(this),
            [_0x10a27d.SPIN]: new _0x22342f(this),
            [_0x5afba5.SPINNING]: new _0x38eb80(this),
            [_0x5afba5.CAN_STOP]: new _0x534743(this),
            [_0x5afba5.STOP]: new _0x44fba2(this),
            [_0x5afba5.CHECK_AWARD]: new _0x4ae572(this),
            [_0x5afba5.SHOW_PLATE_AWARD]: new _0x552b0d(this),
            [_0x5afba5.SHOW_PLATE_AWARD_CLEAR_NEW_SYMBOL]: new _0x17cb1c(this),
            [_0x5afba5.TOTAL_AWARD]: new _0x4110fe(this),
            [_0x5afba5.ENTER_BONUS]: new _0x396789(this),
            [_0x5afba5.EXIT_BONUS]: new _0x16fe2f(this),
            [_0x5afba5.WAIT]: new _0x287de4(this),
            [_0x5afba5.ROUND_END]: new _0x40eb47(this),
            [_0x5afba5.ROUND_SHOW_END]: new _0x2e76e7(this),
            [_0x10a27d.CHECK_STATE]: new _0x53d9ec(this)
          };
          _0x259743.SetGameCb(this);
          _0x5dd7f8.Init(_0x5d37c0);
          _0x5dd7f8.NextState(_0x10a27d.LOGIN);
        };
        _0xde5d50.BackgroundLoad = function () {
          var _0x24088e = this;
          _0x518ced.on(_0x345c7f.EVENT_HIDE, function (_0x231486) {
            _0x87e3e6("--------------游戏进入后台", _0x231486);
          });
          _0x518ced.on(_0x345c7f.EVENT_SHOW, function (_0x4670be) {
            _0x87e3e6("--------------重新返回游戏", _0x4670be);
          });
          var _0x56ee78;
          this.m_enterBonusMC = new _0x48c112(function () {
            _0x24088e.m_enterBonusMC.mc.getComponent(_0x5547b9).setContentSize(_0x56faff(0x470, 0x280));
            _0x24088e.m_enterBonusMC.mc.addComponent(_0x5bfa12);
            _0x24088e.node.addChild(_0x24088e.m_enterBonusMC.mc);
            _0x1d7129.SetZIndex(_0x24088e.m_enterBonusMC.mc, _0x196ed6.GAMEVIEW_ZORDER.ENTER_BONUS);
            _0x24088e.m_enterBonusMC.mc.getChildByName('EFT').getChildByName("txt").getChildByName('b01_txt').getChildByName('boun_01st_t01').getComponent(_0x257daa).spriteFrame = _0x24088e.m_textImgAtlas.getSpriteFrame('boun_01st_t01');
            _0x24088e.m_enterBonusMC.mc.getChildByName('EFT').getChildByName("txt").getChildByName('b01_txt').getChildByName("boun_01st_t02").getComponent(_0x257daa).spriteFrame = _0x24088e.m_textImgAtlas.getSpriteFrame("boun_01st_t02");
            _0x24088e.m_enterBonusMC.SetFrameEventCallFunc(function (_0x201a54) {
              _0x87e3e6("m_enterBonusMC frameName", _0x201a54);
              if (null != _0x201a54) {
                switch (_0x201a54) {
                  case "SlowStart":
                    _0x24088e.m_enterBonusMC.animState.speed = 0.4;
                    break;
                  case "SlowEnd":
                    _0x24088e.m_enterBonusMC.animState.speed = 0.8;
                    break;
                  case "PauseAAAA":
                  case "End":
                    _0x24088e.CloseEnterBonus();
                    _0x24088e.m_enterBonusMC.animState.speed = 0.7;
                }
              }
            });
            _0x24088e.m_enterBonusMC.animState.speed = 0.7;
            _0x24088e.m_enterBonusMC.Stop();
            _0x87e3e6("太扯了", _0x24088e.m_enterBonusMC, _0x24088e.m_enterBonusMC.mc, _0x24088e.m_enterBonusMC.animState.isPlaying);
            _0x24088e.m_enterBonusMC.mc.active = false;
            _0x24088e.m_bonusResReady = true;
          });
          this.m_enterBonusMC.Init(_0x196ed6.CSB_PATH.ENTER_BONUS);
          this.m_bonusTotalRound = 0x0;
          var _0x1a3cbe = _0x417cba.CurrLang;
          this.m_totalBonusMC = new _0x48c112(function () {
            _0x24088e.m_totalBonusMC.mc.getChildByName("txt").getChildByName("tol_Tb01").getComponent(_0x257daa).spriteFrame = _0x24088e.m_textImgAtlas.getSpriteFrame('tol_Tb01');
            _0x24088e.m_totalBonusMC.mc.getChildByName("txt").getChildByName("tol_Tb02").getComponent(_0x257daa).spriteFrame = _0x24088e.m_textImgAtlas.getSpriteFrame("tol_Tb02");
            _0x24088e.m_totalBonusMC.mc.getChildByName("txt").getChildByName("tol_Tb03").getComponent(_0x257daa).spriteFrame = _0x24088e.m_textImgAtlas.getSpriteFrame('tol_Tb03');
            _0x24088e.m_totalBonusMC.mc.getChildByName('txt').getChildByName("tol_Tb04").getComponent(_0x257daa).spriteFrame = _0x24088e.m_textImgAtlas.getSpriteFrame("tol_Tb04");
            _0x24088e.m_totalBonusMC.mc.getChildByName('tol_Ta01').getComponent(_0x257daa).spriteFrame = _0x24088e.m_textImgAtlas.getSpriteFrame("tol_Ta01");
            if (_0x1a3cbe == _0xb08ad.Lang.CN) {
              _0x24088e.m_totalBonusMC.mc.getChildByName("tol_Ta01").getChildByName('txt_totalRound').setPosition(_0x5855b0(-0x96, _0x24088e.m_totalBonusMC.mc.getChildByName("tol_Ta01").getChildByName("txt_totalRound").position.y));
            }
            _0x24088e.m_totalBonusMC.mc.setPosition(_0x3a2794.DesignSize.width, _0x3a2794.DesignSize.height / 0x2);
            _0x24088e.m_barNode.addChild(_0x24088e.m_totalBonusMC.mc);
            _0x1d7129.SetZIndex(_0x24088e.m_totalBonusMC.mc, _0x47c01b.EFFECTVIEW + 0x1);
            _0x56ee78 = _0x24088e.m_totalBonusMC.mc.getChildByName("EFT");
            for (var _0x4077ef = 0x1; _0x4077ef < 0x4; _0x4077ef++) {
              _0x24088e.m_totalBonusMC.AddParticle(_0x56ee78.getChildByName("Particle_" + _0x4077ef));
            }
            _0x24088e.m_totalBonusMC.mc.active = false;
            _0x24088e.m_totalBonusEnterMC = new _0x48c112(function () {
              _0x24088e.m_totalBonusEnterMC.mc.getChildByName("txt").getChildByName("tol_Tb01").getComponent(_0x257daa).spriteFrame = _0x24088e.m_textImgAtlas.getSpriteFrame("tol_Tb01");
              _0x24088e.m_totalBonusEnterMC.mc.getChildByName("txt").getChildByName('tol_Tb02').getComponent(_0x257daa).spriteFrame = _0x24088e.m_textImgAtlas.getSpriteFrame('tol_Tb02');
              _0x24088e.m_totalBonusEnterMC.mc.getChildByName("txt").getChildByName("tol_Tb03").getComponent(_0x257daa).spriteFrame = _0x24088e.m_textImgAtlas.getSpriteFrame("tol_Tb03");
              _0x24088e.m_totalBonusEnterMC.mc.getChildByName("txt").getChildByName("tol_Tb04").getComponent(_0x257daa).spriteFrame = _0x24088e.m_textImgAtlas.getSpriteFrame("tol_Tb04");
              _0x24088e.m_totalBonusEnterMC.mc.getChildByName("tol_Ta01").getComponent(_0x257daa).spriteFrame = _0x24088e.m_textImgAtlas.getSpriteFrame("tol_Ta01");
              if (_0x1a3cbe == _0xb08ad.Lang.CN) {
                _0x24088e.m_totalBonusEnterMC.mc.getChildByName("tol_Ta01").getChildByName('txt_totalRound').setPosition(_0x5855b0(-0x96, _0x24088e.m_totalBonusEnterMC.mc.getChildByName('tol_Ta01').getChildByName("txt_totalRound").position.y));
              }
              _0x24088e.m_totalBonusEnterMC.mc.setPosition(_0x3a2794.DesignSize.width, _0x3a2794.DesignSize.height / 0x2);
              _0x24088e.m_barNode.addChild(_0x24088e.m_totalBonusEnterMC.mc);
              _0x1d7129.SetZIndex(_0x24088e.m_totalBonusEnterMC.mc, _0x47c01b.EFFECTVIEW + 0x1);
              _0x24088e.m_totalBonusEnterMC.SetFrameEventCallFunc(function (_0x168581) {
                if (null != _0x168581) {
                  _0x24088e.m_totalBonusMC.mc.active = true;
                  _0x24088e.m_totalBonusMC.Play(true);
                  _0x24088e.m_totalBonusEnterMC.Pause();
                  _0x24088e.m_totalBonusEnterMC.mc.active = false;
                  _0x24088e.m_totalBonusMC.mc.getChildByName("tol_Ta01").getChildByName("txt_totalRound").getComponent(_0x25fe73).string = _0x24088e.m_bonusTotalRound.toString();
                  var _0x2fde51 = _0x24088e.m_totalBonusMC.mc.getChildByName("txt_totalMoney");
                  _0x2fde51.getComponent(_0x25fe73).string = _0x1d7129.FormatNumberThousands(_0x2fa636.GetDisplayValue(_0x24088e.m_currentWin), _0x1d7129.FORMAT_NUMBER_TYPE.DEFINE_DOT);
                  _0x2fde51.setScale(_0x5855b0(1.5, 1.5, 0x1));
                  _0xf0ede4(_0x2fde51).parallel(_0xf0ede4().call(function () {
                    _0xf0ede4(_0x2fde51.getComponent(_0x2d903e)).to(0.1, {
                      'opacity': 0xff
                    }).start();
                  }), _0xf0ede4().to(0.05, {
                    'scale': _0x5855b0(0.9, 0.9, 0x1)
                  }).to(0.03, {
                    'scale': _0x5855b0(1.1, 1.1, 0x1)
                  }).to(0.02, {
                    'scale': _0x5855b0(0x1, 0x1, 0x1)
                  })).start();
                }
              });
              _0x56ee78 = _0x24088e.m_totalBonusEnterMC.mc.getChildByName("EFT");
              for (var _0x18664a = 0x1; _0x18664a < 0x9; _0x18664a++) {
                _0x24088e.m_totalBonusEnterMC.AddParticle(_0x56ee78.getChildByName('Particle_' + _0x18664a));
              }
              _0x24088e.m_totalBonusEnterMC.mc.active = false;
            });
            _0x24088e.m_totalBonusEnterMC.Init(_0x196ed6.CSB_PATH.BONUS_TOTAL_WIN_ENTER);
          });
          this.m_totalBonusMC.Init(_0x196ed6.CSB_PATH.BONUS_TOTAL_WIN_LOOP);
          this.LoadFireBall();
        };
        _0xde5d50.OnBottomLoaded = function () {
          this.m_barNode.addChild(this.m_effectView);
          _0x1d7129.SetZIndex(this.m_effectView, _0x47c01b.EFFECTVIEW);
        };
        _0xde5d50.IsFeaturesLoaded = function () {
          return _0x2fa636.IsFeaturesDemoLoaded();
        };
        _0xde5d50.FeaturesInit = function () {
          if (_0x2fa636 && this.m_titleSpriteAtlas && !this.m_isLogoToFeatures) {
            this.m_isLogoToFeatures = true;
            _0x2efe6a.FeaturesInit(["CSHSlot/Features_left/spriteFrame", "CSHSlot/Features_right/spriteFrame"], [_0x3a2794.STRING_KEY.CSH_FEATURES_TXT + '1', _0x3a2794.STRING_KEY.CSH_FEATURES_TXT + '2'], 0x3, this.m_titleSpriteAtlas);
            var _0xb37656 = _0x417cba.GetGameAtlas();
            _0x2efe6a.SetFeatruesDesc([_0xb37656.getSpriteFrame("txt1"), _0xb37656.getSpriteFrame("txt2")]);
          }
        };
        _0xde5d50.BuyBonusInit = function () {
          var _0xf64443 = this;
          _0x5583e1.NewInit(function () {
            _0x17962e.Dispatch(_0x314539.SpinReqNotify);
            _0x2fa636.SetSpinState(_0x50322b.CLICK_SPIN);
            _0xf64443.PlaySound(_0x3a2794.SOUND_NAME.csh_spin_btn);
          }, function () {
            if (_0x2fa636.IsAutoSpin) {
              _0xf64443.StopAutoPlay();
            }
          });
          _0x498c28.Init();
        };
        _0xde5d50.SettingBottomBar = function () {
          var _0xdba6d3 = this;
          _0x87e3e6("SettingBottomBar");
          this.m_barNode = _0x2fa636.View;
          _0x2fa636.VerString = 'v_' + _0xb08ad.VERSION + '_' + _0x3a2794.Ver;
          _0x2fa636.SetTouchEvet(function (_0xc7076f) {
            _0xdba6d3.BarTouchCb(_0xc7076f);
          });
          _0x2fa636.SetWinValue(0x0);
          this.m_currentWin = 0x0;
          _0x2fa636.SetSpinState(_0x50322b.IDLE);
          _0x2fa636.SetAutoplayConfirmCb(function (_0x2d8b4d) {
            _0x17962e.Dispatch(_0x314539.SpinReqNotify);
            _0xdba6d3.m_autoplayInfos = JSON.parse(_0x2d8b4d);
          });
          _0x2fa636.SetAutoPlaySettingPanelFreeGameString(_0xb08ad.StringKey.AUTO_PLAY_PANEL_ENTER_FREEGAME);
          this.m_bottomBarIsLoad = true;
          _0xb08ad.GameBundle.load('/Text/logo/logo', _0x5b8a04, function (_0x1b5b43, _0x25a814) {
            if (_0x1b5b43) {
              _0x4f6f19(_0x1b5b43.message || _0x1b5b43);
            } else {
              _0xdba6d3.m_titleSpriteAtlas = _0x25a814;
              _0xdba6d3.m_logo.getComponent(_0x257daa).spriteFrame = _0xdba6d3.m_titleSpriteAtlas.getSpriteFrame("logo_" + _0x417cba.CurrLang);
            }
          });
          this.OnBottomLoaded();
          _0x2fa636.SetFollowNode(this.node, [_0x5855b0(0x0, -0xc8)]);
          _0x1d7129.CloseIntroLoading.push(function () {
            if (_0x259743.HasUnshow) {
              _0x5dd7f8.NextState(_0x5afba5.UNSHOW_PREPARE);
            } else {
              _0x5dd7f8.NextState(_0x5afba5.TO_GAME);
            }
          });
        };
        _0xde5d50.ClickSpin = function () {
          if (!_0x2efe6a.IsNowInDemoMenu) {
            _0x17962e.Dispatch(_0x314539.SpinReqNotify);
            _0x2fa636.SetSpinState(_0x50322b.CLICK_SPIN);
            this.PlaySound(_0x3a2794.SOUND_NAME.csh_spin_btn);
          }
        };
        _0xde5d50.BarTouchCb = function (_0x305bf3) {
          var _0x20d1f6 = this;
          var _0xa03a63 = _0x305bf3.target.name;
          _0x87e3e6("name", _0xa03a63);
          switch (_0xa03a63) {
            case _0x196ed6.UIName.LO_TOUCH_PANEL:
              if (_0x5dd7f8.Current() != _0x10a27d.IDLE || _0x2fa636.IsAutoSpin) {
                if (_0x5dd7f8.Current() == _0x5afba5.STOP) {
                  if (_0x5dd7f8.Current() == _0x5afba5.TOTAL_AWARD && this.m_canSkipEffect) {
                    this.m_isSkipEffect = true;
                  } else {
                    _0x2fa636.SetSpinState(_0x50322b.CLICK_STOP);
                    this.m_plate.SetIsClickStopBtn();
                  }
                }
              } else {
                if (this.m_isFirstTouchPanel) {
                  this.m_isFirstTouchPanel = false;
                  var _0x6c8187 = {
                    "contextKey": _0xb08ad.StringKey.MSGBOX_TOUCHPANEL_SPIN,
                    "titleKey": _0xb08ad.StringKey.MSGBOX_TITLE_SYSTEM_INFO,
                    "showCancelBtn": false,
                    "showConfirmBtn": true,
                    "showCloseBtn": true,
                    confirmCB: function () {
                      _0x20d1f6.ClickSpin();
                    }
                  };
                  _0x21a1e5.PushMessageBoxSetting(_0x6c8187);
                } else {
                  this.ClickSpin();
                }
              }
              break;
            case _0x5f4031.BTN_SPIN:
              if (_0x2fa636.IsSkipSmallFlash()) {
                this.m_isSkipFlash = true;
                if (_0x5dd7f8.Current() == _0x5afba5.TOTAL_AWARD && this.m_canSkipEffect) {
                  this.m_isSkipEffect = true;
                } else {
                  _0x2fa636.SetSpinState(_0x50322b.CLICK_STOP);
                  this.m_plate.SetIsClickStopBtn();
                }
              } else if (_0x5dd7f8.Current() == _0x10a27d.IDLE) {
                this.ClickSpin();
              }
              break;
            case _0x5f4031.BTN_SPINSTOP:
              if (_0x5dd7f8.Current() == _0x5afba5.TOTAL_AWARD && this.m_canSkipEffect) {
                this.m_isSkipEffect = true;
              } else {
                _0x2fa636.SetSpinState(_0x50322b.CLICK_STOP);
                this.m_plate.SetIsClickStopBtn();
              }
              break;
            case _0x5f4031.BTN_WISEAUTOPLAY:
              if (_0x2fa636.IsAutoSpin) {
                _0x2fa636.ShowAutoPlayState(false);
                _0x2fa636.SetSpinState(_0x50322b.CLICK_CANCEL);
              }
              _0x2fa636.ShowAutoplaySettingView(_0x2fa636.GetChips());
              break;
            case _0x5f4031.BTN_AUTOSTOP_C:
            case _0x5f4031.BTN_AUTOSTOP:
              this.StopAutoPlay();
          }
        };
        _0xde5d50.StopAutoPlay = function () {
          _0x2fa636.ShowAutoPlayState(false);
          _0x2fa636.SetSpinState(_0x50322b.CLICK_CANCEL);
        };
        _0xde5d50.ChangeToMainGame = function () {
          var _0x40fd3e = this;
          this.m_isBonus = false;
          if (null != this.m_bgSoundId) {
            _0x380a74.Stop(this.m_bgSoundId);
          }
          this.m_totalBonusMC.Stop();
          _0xf0ede4(this.m_totalBonusMC.mc.getComponent(_0x2d903e)).to(0.3, {
            'opacity': 0x0
          }).call(function () {
            _0x40fd3e.m_totalBonusMC.mc.getComponent(_0x2d903e).opacity = 0xff;
            _0x40fd3e.m_totalBonusMC.mc.active = false;
            _0x40fd3e.ShowChipAmountAndToNextState(_0x40fd3e.m_currentWin);
          }).start();
          this.m_mask.active = false;
          this.m_logo.active = true;
          this.m_fg_bg_s.active = false;
          this.m_lo_freeTopPanel.active = false;
          if (this.m_isLandscape) {
            this.node.getChildByName(_0x196ed6.UIName.IMG_BG_L).active = true;
            this.node.getChildByName(_0x196ed6.UIName.IMG_BG_R).active = true;
          }
          this.m_nFreeBgL.mc.active = false;
          this.m_nFreeBgR.mc.active = false;
          this.m_nFreeBgL.Pause();
          this.m_nFreeBgR.Pause();
          this.m_inBonus = false;
          this.m_plate.ExitBonus();
          if (!_0xb08ad.IsUsingItem) {
            _0x2fa636.SetLeaveFree();
          }
          if (_0x2fa636.IsAutoSpin) {
            _0x2fa636.SetEnableBetButtons(false);
          }
          if (null != this.node.getChildByName(_0x196ed6.UIName.SP_TABLE_PANEL)) {
            this.node.getChildByName(_0x196ed6.UIName.SP_TABLE_PANEL).active = true;
          }
        };
        _0xde5d50.ChangeToBonus = function () {
          this.m_enterBonusMC.mc.setScale(this.m_onRotateScale, this.m_onRotateScale, 0x1);
          this.m_enterBonusMC.mc.setPosition(_0x196ed6.ROTATE_POSITION.FG_ANI[this.m_curOrientation]);
          this.m_enterBonusMC.mc.active = true;
          this.m_enterBonusMC.Play();
          this.PlaySound(_0x3a2794.SOUND_NAME.csh_bonus_enter);
        };
        _0xde5d50.ForceToBonus = function () {
          this.m_logo.active = false;
          this.m_fg_bg_s.active = true;
          this.m_lo_freeTopPanel.active = true;
          if (this.m_isLandscape) {
            this.node.getChildByName(_0x196ed6.UIName.IMG_BG_L).active = false;
            this.node.getChildByName(_0x196ed6.UIName.IMG_BG_R).active = false;
          }
          this.m_nFreeBgL.mc.active = true;
          this.m_nFreeBgR.mc.active = true;
          this.m_nFreeBgL.Play(true);
          this.m_nFreeBgR.Play(true);
        };
        _0xde5d50.CloseEnterBonus = function () {
          _0x87e3e6("CloseEnterBonus");
          this.m_bgSoundId = this.PlaySound(_0x3a2794.SOUND_NAME.csh_wheel_bgm, true);
          if (_0x2fa636.IsAutoSpin && this.m_autoplayInfos.isCheckFree) {
            _0x2fa636.ShowAutoPlayState(false);
            this.StopWiseAutoPlayByNature();
          }
          this.m_enterBonusMC.Pause();
          this.m_enterBonusMC.mc.active = false;
          this.m_logo.active = false;
          this.m_fg_bg_s.active = true;
          this.m_lo_freeTopPanel.active = true;
          if (this.m_isLandscape) {
            this.node.getChildByName(_0x196ed6.UIName.IMG_BG_L).active = false;
            this.node.getChildByName(_0x196ed6.UIName.IMG_BG_R).active = false;
          }
          this.m_nFreeBgL.mc.active = true;
          this.m_nFreeBgR.mc.active = true;
          this.m_nFreeBgL.Play(true);
          this.m_nFreeBgR.Play(true);
          this.m_plate.ResetBonus();
          _0x2fa636.SetEnterFree();
          this.m_bonusTotalRound = this.m_plate.GetRemainRound();
          if (null != this.node.getChildByName(_0x196ed6.UIName.SP_TABLE_PANEL)) {
            this.node.getChildByName(_0x196ed6.UIName.SP_TABLE_PANEL).active = false;
          }
          _0x5dd7f8.NextState(_0x5afba5.ROUND_END);
        };
        _0xde5d50.DecreaseBonusRound = function () {
          if (this.m_numBonusFreeRound > 0x0) {
            this.SetBonusTopPanel(this.m_numBonusFreeRound - 0x1);
          }
        };
        _0xde5d50.SetBonusTopPanel = function (_0x90dc57, _0x284b35, _0x2d9373) {
          if (undefined === _0x284b35) {
            _0x284b35 = undefined;
          }
          if (undefined === _0x2d9373) {
            _0x2d9373 = undefined;
          }
          if (null != _0x90dc57) {
            this.m_fgCurRoundNum.getComponent(_0x25fe73).string = _0x90dc57.toString();
            this.m_numBonusFreeRound = _0x90dc57;
          }
          if (null != _0x2d9373) {
            this.m_fgOddsNum.getComponent(_0x25fe73).string = 'x' + _0x2d9373.toString();
            this.m_numBonusOdds = _0x2d9373;
          }
          if (null != _0x284b35) {
            this.m_fgRoundNum.getComponent(_0x25fe73).string = _0x284b35.toString();
            this.m_numBonusComboRound = _0x284b35;
          }
        };
        _0xde5d50.AddWinValue = function (_0xd9e228) {
          this.m_roundMoney = _0xd9e228;
          this.m_nowTotalWin = _0x1d7129.plus(this.m_nowTotalWin, this.m_roundMoney);
          this.m_plate.ResetComboMoney();
          if (this.m_nowTotalWin >= this.m_serverTotalWin) {
            this.m_nowTotalWin = this.m_serverTotalWin;
          }
          this.SetWinValue(this.m_nowTotalWin);
          this.m_currentWin = this.m_nowTotalWin;
        };
        _0xde5d50.SetWinValue = function (_0x62f763) {
          var _0x23a74c = _0x1d7129.strip(_0x62f763);
          this.m_currentWin = _0x23a74c;
          _0x2fa636.SetWinValueWithCheck({
            'maxWin': this.m_spinAck.totalWin,
            'value': _0x23a74c
          });
        };
        _0xde5d50.OnPlateManagerCallback = function (_0x5b39f4, _0x553832) {
          if (_0x5b39f4 == _0x2a64d3.STATE.AWARD_FIRE_END) {
            this.m_timer.Start(0x3e8 * _0x196ed6.ADJUST_TIME.SHOW_PLATE_CHANGE_SYMBOL_END_TO_CHECK);
          }
        };
        _0xde5d50.CheckContinueBonus = function () {
          _0x87e3e6("CheckContinueBonus ", "this.m_numBonusFreeRound", this.m_numBonusFreeRound, "m_numBonusComboRound", this.m_numBonusComboRound, "m_numBonusOdds", this.m_numBonusOdds);
          if (0x0 == this.m_numBonusFreeRound) {
            if (this.m_numBonusComboRound > 0x0) {
              this.m_bonusTotalRound = this.m_numBonusComboRound + this.m_bonusTotalRound;
              this.DoComboRoundToFreeRoundEffect(this.m_numBonusComboRound);
            } else {
              _0x5dd7f8.NextState(_0x5afba5.EXIT_BONUS);
            }
          } else {
            _0x5dd7f8.NextState(_0x5afba5.ROUND_END);
          }
        };
        _0xde5d50.LoadFireBall = function () {
          var _0x227f32 = this;
          _0xb08ad.GameBundle.load('CSHSlot/FreeGame/effect/fire_ball', function (_0x2a033c, _0x4a7b12) {
            if (_0x2a033c) {
              _0x4f6f19(_0x2a033c.message || _0x2a033c);
              return void _0x227f32.LoadFireBall();
            }
            _0x227f32.m_fireBallPrefab = _0x4a7b12;
            _0x87e3e6("m_fireBall", _0x4a7b12);
          });
        };
        _0xde5d50.DoComboRoundToFreeRoundEffect = function (_0x64dab0) {
          var _0x445b06 = this;
          this.m_fireBall = _0x22717a(this.m_fireBallPrefab);
          this.m_effectView.addChild(this.m_fireBall);
          var _0x1d326b = this.m_fireBall.getChildByName("ball");
          var _0x5ab44f = this.m_fireBall.getChildByName("Particle_1");
          var _0x848b58 = this.m_fireBall.getChildByName("Particle_2");
          var _0x4f96b6 = this.m_fireBall.getChildByName("Shine_1");
          var _0x287ed9 = this.m_fireBall.getChildByName("Shine_2");
          var _0x2208a4 = this.m_fireBall.getChildByName('Shine_3');
          var _0x40a1e8 = this.m_effectView.getComponent(_0x5547b9).convertToNodeSpaceAR(this.m_fgRoundNum.parent.getComponent(_0x5547b9).convertToWorldSpaceAR(this.m_fgRoundNum.position));
          var _0x104384 = this.m_effectView.getComponent(_0x5547b9).convertToNodeSpaceAR(this.m_fgCurRoundNum.parent.getComponent(_0x5547b9).convertToWorldSpaceAR(this.m_fgCurRoundNum.position));
          var _0x4a9c71 = this.m_effectView.getComponent(_0x5547b9).convertToNodeSpaceAR(this.m_fgOddsNum.parent.getComponent(_0x5547b9).convertToWorldSpaceAR(this.m_fgOddsNum.position));
          _0x1d326b.setPosition(_0x5855b0(_0x40a1e8));
          _0x5ab44f.getComponent(_0x131c83).resetSystem();
          _0x848b58.getComponent(_0x131c83).resetSystem();
          _0x5855b0(_0x40a1e8.x + (_0x104384.x - _0x40a1e8.x) / 0x4, _0x40a1e8.y - 0xc8);
          _0x5855b0(_0x104384.x - (_0x104384.x - _0x40a1e8.x) / 0x4, _0x104384.y - 0xc8);
          _0x5855b0(_0x104384.x + (_0x4a9c71.x - _0x104384.x) / 0x4, _0x104384.y - 0xc8);
          _0x5855b0(_0x4a9c71.x - (_0x4a9c71.x - _0x104384.x) / 0x4, _0x4a9c71.y - 0xc8);
          _0xf0ede4(_0x1d326b).call(function () {
            _0x445b06.PlaySound(_0x3a2794.SOUND_NAME.csh_bonus_exchange);
            _0x445b06.m_fireBall.active = true;
            _0x445b06.SetBonusTopPanel(0x0, 0x0);
            _0x4f96b6.setPosition(_0x5855b0(_0x40a1e8));
            _0x4f96b6.active = true;
            _0xf0ede4(_0x4f96b6).to(0.1, {
              'scale': _0x5855b0(2.6, 2.6, 0x1)
            }).parallel(_0xf0ede4().call(function () {
              _0xf0ede4(_0x4f96b6.getComponent(_0x2d903e)).to(0.1, {
                'opacity': 0x0
              }).start();
            }), _0xf0ede4().to(0.1, {
              'scale': _0x5855b0(0x3, 0x3, 0x1)
            })).start();
          }).to(0.85, {
            'position': _0x104384
          }).call(function () {
            _0x287ed9.setPosition(_0x5855b0(_0x104384));
            _0x287ed9.active = true;
            _0xf0ede4(_0x287ed9).to(0.1, {
              'scale': _0x5855b0(2.6, 2.6, 0x1)
            }).parallel(_0xf0ede4().call(function () {
              _0xf0ede4(_0x287ed9.getComponent(_0x2d903e)).to(0.1, {
                'opacity': 0x0
              }).start();
            }), _0xf0ede4().to(0.1, {
              'scale': _0x5855b0(0x3, 0x3, 0x1)
            })).start();
            _0xf0ede4(_0x5ab44f).to(0x0, {
              'position': _0x1d326b.position
            }).delay(0.2).to(0x0, {
              'position': _0x5855b0(-0xce4, 0x0)
            }).start();
            _0xf0ede4(_0x848b58).to(0x0, {
              'position': _0x1d326b.position
            }).delay(0.2).to(0x0, {
              'position': _0x5855b0(-0xce4, 0x0)
            }).start();
            _0x445b06.SetBonusTopPanel(_0x64dab0);
          }).to(0.85, {
            'position': _0x4a9c71
          }).call(function () {
            _0x2208a4.setPosition(_0x5855b0(_0x4a9c71));
            _0x2208a4.active = true;
            _0xf0ede4(_0x2208a4).to(0.1, {
              'scale': _0x5855b0(2.6, 2.6, 0x1)
            }).parallel(_0xf0ede4().call(function () {
              _0xf0ede4(_0x2208a4.getComponent(_0x2d903e)).to(0.1, {
                'opacity': 0x0
              }).start();
            }), _0xf0ede4().to(0.1, {
              'scale': _0x5855b0(0x3, 0x3, 0x1)
            })).start();
            _0xf0ede4(_0x5ab44f).to(0x0, {
              'position': _0x1d326b.position
            }).delay(0.2).to(0x0, {
              'position': _0x5855b0(-0xce4, 0x0)
            }).start();
            _0xf0ede4(_0x848b58).to(0x0, {
              'position': _0x1d326b.position
            }).delay(0.2).to(0x0, {
              'position': _0x5855b0(-0xce4, 0x0)
            }).start();
            _0x1d326b.setPosition(_0x5855b0(_0x5855b0(0xdac, 0x0)));
            _0x445b06.SetBonusTopPanel(undefined, undefined, _0x445b06.m_numBonusOdds + 0x1);
          }).delay(0x2).call(function () {
            _0x5ab44f.getComponent(_0x131c83).stopSystem();
            _0x848b58.getComponent(_0x131c83).stopSystem();
            _0x445b06.m_fireBall.removeFromParent();
            _0x445b06.m_fireBall = undefined;
            _0x5dd7f8.NextState(_0x5afba5.ROUND_END);
          }).start();
        };
        _0xde5d50.ResetComboPanel = function () {
          this.m_comboMoneyPanel.active = false;
          this.m_comboMoney.active = true;
          this.m_comboRoundPanel.active = true;
          this.m_comboMask.active = true;
          this.m_comboMoney.setScale(0x1, 0x1, 0x1);
          this.m_comboMoney.getComponent(_0x2d903e).opacity = 0xff;
          this.m_comboMoney.setPosition(_0x5855b0(_0x196ed6.POS.COMBO_MONEY_X, _0x196ed6.POS.COMBO_MONEY_Y));
          this.AddWinValue(this.m_plate.GetComboMoney());
        };
        _0xde5d50.DoComboMoneyToWinEffect = function (_0x50a0ec) {
          var _0x5d529f = this;
          var _0x622788 = 0x1;
          if (this.IsFast()) {
            _0x622788 = 0.8;
          }
          this.m_comboRoundPanel.active = false;
          this.m_comboMask.active = false;
          _0xf0ede4(this.m_comboMoney).parallel(_0xf0ede4().call(function () {
            _0xf0ede4(_0x5d529f.m_comboMoney.getComponent(_0x2d903e)).to(0.05 * _0x622788, {
              'opacity': 0x0
            }).start();
          }).delay(0.05 * _0x622788).by(0.05 * _0x622788, {
            'position': _0x5855b0(0x0, -0x78, 0x0)
          }), _0xf0ede4().delay(0.1 * _0x622788)).start();
          _0xf0ede4(this.node).delay(0.1 * _0x622788).call(function () {
            _0x5d529f.ResetComboPanel();
          }).start();
          return 0.2 * _0x622788;
        };
        _0xde5d50.DoComboMoneyEffectProcess = function (_0xfd1ada) {
          var _0xf22c2a = this;
          this.m_totalTick = this.m_totalTick + _0xfd1ada;
          if (this.m_totalTick < _0x196ed6.ADJUST_TIME.COMBO_MONEY_PANEL_DRAW) {
            this.m_comboMask.getComponent(_0x5547b9).setContentSize(_0x196ed6.OTHER_CONST.COMBO_MONEY_PANEL_WIDTH_END - _0x196ed6.OTHER_CONST.COMBO_MONEY_PANEL_WIDTH_END * (_0x196ed6.ADJUST_TIME.COMBO_MONEY_PANEL_DRAW - this.m_totalTick), _0x196ed6.OTHER_CONST.COMBO_MONEY_PANEL_HEIGHT);
          } else {
            var _0x155d56 = 0x1;
            if (this.IsFast()) {
              _0x155d56 = 0x1;
            }
            this.m_comboMask.getComponent(_0x5547b9).setContentSize(_0x196ed6.OTHER_CONST.COMBO_MONEY_PANEL_WIDTH_END, _0x196ed6.OTHER_CONST.COMBO_MONEY_PANEL_HEIGHT);
            _0xf0ede4(this.m_comboRoundPanel).call(function () {
              _0xf22c2a.m_comboRoundPanel.setScale(1.5, 1.5, 0x1);
              _0xf22c2a.m_comboRoundPanel.active = true;
            }).to(0.05 * _0x155d56, {
              'scale': _0x5855b0(0x1, 0x1, 0x1)
            }).start();
            this.m_comboMoney.active = true;
            this.m_comboMoney.getComponent(_0x2d903e).opacity = 0x0;
            _0xf0ede4(this.m_comboMoney).delay(0.1 * _0x155d56).call(function () {
              _0xf22c2a.m_comboMoney.setScale(0.8, 0.8, 0x1);
              _0xf22c2a.m_comboMoney.getComponent(_0x2d903e).opacity = 0xff;
            }).to(0.05 * _0x155d56, {
              'scale': _0x5855b0(1.2, 1.2, 0x1)
            }).to(0.05 * _0x155d56, {
              'scale': _0x5855b0(0x1, 0x1, 0x1)
            }).start();
            this.m_doEffectProcess = false;
          }
        };
        _0xde5d50.WaitState = function (_0x36a2de, _0x439e00) {
          if (null != _0x36a2de && null != _0x439e00) {
            this.m_waitStateTime = _0x36a2de;
            this.m_waitToNextState = _0x439e00;
            _0x5dd7f8.NextState(_0x5afba5.WAIT);
          }
        };
        _0xde5d50.ShowChipAmountAndToNextState = function (_0x21711a) {
          _0x5dd7f8.NextState(_0x5afba5.ROUND_SHOW_END);
          if (_0x2fa636.IsSkipSmallFlash() && this.m_isSkipFlash) {
            this.SkipFlashAndSpin();
            this.m_isSkipFlash = false;
          }
        };
        _0xde5d50.OnInitInfo = function () {
          var _0x9cd6ef = this;
          _0x2fa636.SetTxt();
          _0x2efe6a.SetTxt();
          _0x2fa636.SetAutoPlayPanelTxt();
          this.ChangeDemoPlateByRatio();
          _0x2fa636.FeaturesDemoInit(function (_0xfc74c) {
            _0x9cd6ef.m_featureType = _0xfc74c;
            _0xf0ede4(_0x9cd6ef.node).delay(0.5).call(function () {
              _0x5dd7f8.NextState(_0x10a27d.SPIN);
              _0x2fa636.SetSpinState(_0x50322b.CLICK_SPIN);
              _0x9cd6ef.PlaySound(_0x3a2794.SOUND_NAME.csh_spin_btn);
            }).start();
          }, _0x3a2794.FeatureSpinAck.length, 0x5, function () {});
          _0x2efe6a.SetCanAutoShowRankboardUI();
          this.m_firstInitInfoDone = true;
        };
        _0xde5d50.IsFast = function () {
          return this.m_fastEffect && this.m_plate.isFast || _0x2fa636.IsAutoSpin && _0x2fa636.IsHardStop || _0x2fa636.IsHardStop && this.m_plate.isFast || _0x2fa636.IsAutoSpin && _0x2fa636.IsHardStop;
        };
        _0xde5d50.ChangeDemoPlateByRatio = function () {
          this.m_realFeaturesSpinAck = JSON.parse(JSON.stringify(_0x3a2794.FeatureSpinAck));
          for (var _0x48c434 = 0x0; _0x48c434 < this.m_realFeaturesSpinAck.length; _0x48c434++) {
            var _0x410e4e = this.m_realFeaturesSpinAck[_0x48c434];
            var _0x2ce6bc = _0x2fa636.GetBetList()[0x5];
            for (var _0x1c35cf = 0x0; _0x1c35cf < _0x410e4e.ackVec.length; _0x1c35cf++) {
              if (_0x410e4e.ackVec[_0x1c35cf].awardVec) {
                for (var _0x50d1e5 = 0x0; _0x50d1e5 < _0x410e4e.ackVec[_0x1c35cf].awardVec.length; _0x50d1e5++) {
                  _0x410e4e.ackVec[_0x1c35cf].awardVec[_0x50d1e5].award = _0x410e4e.ackVec[_0x1c35cf].awardVec[_0x50d1e5].award * _0x2ce6bc;
                }
              }
            }
            _0x410e4e.totalWin = _0x410e4e.totalWin * _0x2ce6bc;
          }
        };
        _0xde5d50.ReqSpin = function (_0x5933c2) {
          if (_0x2efe6a.IsFeaturesDemoMode && !this.m_isBonus) {
            var _0x32ef87 = {
              'info': this.m_realFeaturesSpinAck[this.m_featureType],
              'missionReward': 0x0,
              'jpType': 0x0,
              'jpWin': 0x0,
              'freeremain': 0x0
            };
            this.OnProtoCommand(_0x2a5c5a.G2U.CSH_G2U_SPIN_ACK, _0x32ef87);
          } else if (null != this.m_allFGSpinAck && null != this.m_allFGSpinAck[this.m_allFGSpinAckIndex]) {
            if (_0x259743.HasUnshow) {
              _0x259743.HasUnshow = false;
            }
            this.FakeCMD(_0x2a5c5a.U2G.CSH_U2G_FAKE_FREE_SPIN);
          } else {
            this.m_allFGSpinAck = undefined;
            this.m_allFGSpinAckIndex = 0x0;
          }
        };
        _0xde5d50.FakeCMD = function (_0x312ae5, _0x59d61e) {
          switch (_0x312ae5) {
            case _0x2a5c5a.U2G.CSH_U2G_FAKE_FREE_SPIN:
              var _0x5587fb = this.m_allFGSpinAck[this.m_allFGSpinAckIndex];
              _0x87e3e6("FakeCMD", _0x5587fb, this.m_allFGSpinAckIndex);
              this.m_allFGSpinAckIndex = this.m_allFGSpinAckIndex + 0x1;
              this.OnProtoCommand(_0x2a5c5a.G2U.CSH_G2U_FAKE_FREE_SPIN_ACK, _0x5587fb);
          }
        };
        _0xde5d50.OnProtoCommand = function () {
          var _0x36e514 = _0x1ef050(_0x1782d5().mark(function _0x209813(_0x39b6d1, _0x327c5c) {
            var _0xaf5d0c;
            return _0x1782d5().wrap(function (_0x5c654d) {
              for (;;) {
                switch (_0x5c654d.prev = _0x5c654d.next) {
                  case 0x0:
                    _0x4f6f19("OnProtoCommand", _0x39b6d1);
                    if (!(Number(_0x327c5c.ret) > 0x0)) {
                      _0x5c654d.next = 0x5;
                      break;
                    }
                    if (!(_0x39b6d1 != _0x2a5c5a.G2U.CSH_G2U_SPIN_ACK && _0x39b6d1 != _0x2a5c5a.G2U.CSH_G2U_FAKE_FREE_SPIN_ACK)) {
                      this.OnSpinAckError();
                    }
                    return _0x5c654d.abrupt("return");
                  case 0x5:
                    _0x5c654d.t0 = _0x39b6d1;
                    _0x5c654d.next = _0x5c654d.t0 === _0x2a5c5a.G2U.CSH_G2U_SPIN_ACK ? 0x8 : _0x5c654d.t0 === _0x2a5c5a.G2U.CSH_G2U_FAKE_FREE_SPIN_ACK ? 0x9 : _0x5c654d.t0 === _0x2a5c5a.G2U.CSH_G2U_BUY_BONUS_ACK ? 0xc : 0xd;
                    break;
                  case 0x8:
                    if (0xa != _0x196ed6.ADJUST_TIME.REQ_BROADCAST) {
                      _0x196ed6.ADJUST_TIME.REQ_BROADCAST = 0xa;
                    }
                  case 0x9:
                    _0xaf5d0c = {
                      'commandType': _0x39b6d1,
                      'content': _0x327c5c
                    };
                    this.m_cmdQueue.push(_0xaf5d0c);
                    return _0x5c654d.abrupt("break", 0xf);
                  case 0xc:
                    return _0x5c654d.abrupt("break", 0xf);
                  case 0xd:
                    this.RunCommand(_0x39b6d1, _0x327c5c);
                    return _0x5c654d.abrupt("break", 0xf);
                  case 0xf:
                  case 'end':
                    return _0x5c654d.stop();
                }
              }
            }, _0x209813, this);
          }));
          return function (_0x5b0156, _0x4e02d1) {
            return _0x36e514.apply(this, arguments);
          };
        }();
        _0xde5d50.CMDProcess = function () {
          _0x4f6f19("CMDProcess");
          if (this.m_cmdQueue.length > 0x0) {
            var _0x5e0178 = this.m_cmdQueue.pop();
            this.RunCommand(_0x5e0178.commandType, _0x5e0178.content);
          }
        };
        _0xde5d50.RunCommand = function (_0x5157f4, _0x881ce7) {
          _0x4f6f19("in RunCommand", _0x5157f4, _0x881ce7);
          switch (_0x5157f4) {
            case _0x2a5c5a.G2U.CSH_G2U_SPIN_ACK:
              this.OnMainSpinAckNew(_0x881ce7);
              break;
            case _0x2a5c5a.G2U.CSH_U2G_LAST_ACK:
              this.OnMainSpinAckLastNew(_0x881ce7);
              break;
            case _0x2a5c5a.G2U.CSH_G2U_FAKE_FREE_SPIN_ACK:
              this.m_plate.RevSpinAck(_0x881ce7);
              _0x5dd7f8.NextState(_0x5afba5.CAN_STOP);
              if (!_0x2fa636.IsAutoSpin) {
                _0x2fa636.SetSpinState(_0x50322b.START_SPIN);
              }
          }
        };
        _0xde5d50.OnSpinAckError = function () {
          var _0x30afdb = _0x2fa636.GetNowBetValue();
          if (0x0 == this.m_inBonus) {
            _0xb08ad.APP.userInfo.coin = _0x1d7129.strip(_0x2fa636.GetChips() + _0x30afdb);
            _0x2fa636.SetChips(_0x2fa636.GetChips() + _0x30afdb);
          }
          if (_0x2fa636.IsAutoSpin) {
            _0x2fa636.ShowAutoPlayState(false);
            _0x2fa636.SetSpinState(_0x50322b.CLICK_CANCEL);
            _0x2fa636.SetSpinState(_0x50322b.IDLE);
          } else {
            _0x2fa636.SetSpinState(_0x50322b.IDLE);
          }
          this.m_plate.Reset();
          this.m_plate.ResetWheelSound();
          _0x5dd7f8.NextState(_0x10a27d.IDLE);
        };
        _0xde5d50.InitExtra = function () {
          var _0x2def0a = this;
          this.BuyBonusInit();
          _0x583663.NewInit();
          _0x2c1181.NewInit();
          _0x2efe6a.RecommendNewInit();
          _0x2efe6a.RankingInit([_0xb08ad.APP.GetAccount(), _0xb08ad.APP.GetNickName()], _0xb08ad.APP.GetAToken(), _0x1d7129.ConvertLanguageToFull(_0x417cba.CurrLang), null, null, function () {
            _0x2def0a.ReqMail();
          });
          _0x4ff30f.JpManagerInit();
          _0x4ff30f.MhbManagerInit();
          _0x8b2c2f.NewInit();
          _0x498c28.Init();
          this.m_isInitExtra = true;
        };
        _0xde5d50.Show = function () {
          var _0x1938e1 = this;
          this.m_isDoneLoading = true;
          _0x2fa636.ShowGameScene();
          var _0x250d07 = function (_0x17f7ce) {
            _0x1938e1.Load('Sound/' + _0x17f7ce, function (_0x6969f3) {
              _0x3a2794.SOUND_NAME[_0x17f7ce] = _0x6969f3;
              if (_0x6969f3 == _0x3a2794.SOUND_NAME.Common_coin_medium || _0x6969f3 == _0x3a2794.SOUND_NAME.Common_big_win || _0x6969f3 == _0x3a2794.SOUND_NAME.Common_mega_win || _0x6969f3 == _0x3a2794.SOUND_NAME.Common_super_win) {
                var _0x1fa927 = [_0x3a2794.SOUND_NAME.Common_coin_medium, _0x3a2794.SOUND_NAME.Common_coin_medium, _0x3a2794.SOUND_NAME.Common_big_win, _0x3a2794.SOUND_NAME.Common_mega_win, _0x3a2794.SOUND_NAME.Common_super_win];
                _0x1938e1.m_effectView.SetSoundNameByOdds(_0x1fa927);
              }
            });
          };
          for (var _0x2753fa in _0x3a2794.SOUND_NAME) _0x250d07(_0x2753fa);
          this.OnRotation();
        };
        _0xde5d50.Load = function (_0xc93523, _0x572031) {
          var _0x1650c5 = this;
          _0xb08ad.GameBundle.load(_0xc93523, function (_0x114fbd, _0x343664) {
            if (_0x114fbd) {
              _0x1650c5.Load(_0xc93523, _0x572031);
            } else if (_0x572031) {
              _0x572031(_0x343664);
            }
          });
        };
        _0xde5d50.PlaySound = function (_0x3a9e59, _0x523343, _0x52c35c) {
          if (undefined === _0x523343) {
            _0x523343 = false;
          }
          return _0x380a74.Play(_0x3a9e59, _0x523343);
        };
        _0xde5d50.OnRotation = function () {
          if (!this.m_ratationLock) {
            var _0x260fb2 = _0x236684.windowSize;
            this.m_isLandscape = _0x260fb2.width > _0x260fb2.height;
            if (this.m_isLandscape) {
              if (_0x260fb2.width / _0x260fb2.height <= 1.775) {
                _0x3c53a8.setDesignResolutionSize(0x470, 0x280, _0x290558.FIXED_WIDTH);
              } else {
                _0x3c53a8.setDesignResolutionSize(0x470, 0x280, _0x290558.FIXED_HEIGHT);
              }
              this.m_curOrientation = 0x0;
              this.m_onRotateScale = 0x1;
              this.node.getComponent(_0x4f8248).play(_0x196ed6.ANI.GAMEVIEW_BG_NM_L);
              this.m_canvas.getComponent(_0x4f8248).play(_0x196ed6.ANI.MAINGAME_BG_NM_L);
              this.m_comboMoneyPanel.setPosition(_0x5855b0(0x1b8, 0x104));
            } else {
              if (_0x260fb2.height / _0x260fb2.width <= 1.775) {
                _0x3c53a8.setDesignResolutionSize(0x280, 0x470, _0x290558.FIXED_HEIGHT);
              } else {
                _0x3c53a8.setDesignResolutionSize(0x280, 0x470, _0x290558.FIXED_WIDTH);
              }
              this.m_curOrientation = 0x1;
              this.m_onRotateScale = 0.67;
              this.node.getComponent(_0x4f8248).play(_0x196ed6.ANI.GAMEVIEW_BG_NM_S);
              this.m_canvas.getComponent(_0x4f8248).play(_0x196ed6.ANI.MAINGAME_BG_NM_S);
              if (_0x1d7129.IsTada) {
                this.m_comboMoneyPanel.setPosition(_0x5855b0(0x1b8, 0x28));
              } else {
                this.m_comboMoneyPanel.setPosition(_0x5855b0(0x1b8, 0x104));
              }
            }
            if (_0x2fa636) {
              _0x2fa636.OnRotation(this.m_isLandscape);
            }
            if (_0x2efe6a) {
              _0x2efe6a.OnRotation(this.m_isLandscape);
            }
            _0x21a1e5.OnRotate(this.m_isLandscape);
            if (this.m_bottomBarIsLoad) {
              this.m_plate.OnRotate(this.m_isLandscape, this.m_onRotateScale);
            }
            if (this.m_isDoneLoading) {
              if (this.m_autoPlayBlock) {
                this.m_autoPlayBlock.setScale(this.m_onRotateScale, this.m_onRotateScale, 0x1);
                this.m_autoPlayBlock.setPosition(_0x5855b0(_0x196ed6.ROTATE_POSITION.AUTOPLAY_TIPS[this.m_curOrientation]));
              }
              if (this.m_enterBonusMC && this.m_enterBonusMC.mc) {
                this.m_enterBonusMC.mc.setScale(this.m_onRotateScale, this.m_onRotateScale, 0x1);
                this.m_enterBonusMC.mc.setPosition(_0x5855b0(_0x196ed6.ROTATE_POSITION.FG_ANI[this.m_curOrientation]));
              }
              if (this.m_totalBonusEnterMC && this.m_totalBonusEnterMC.mc) {
                this.m_totalBonusEnterMC.mc.setScale(this.m_onRotateScale, this.m_onRotateScale, 0x1);
                this.m_totalBonusEnterMC.mc.setPosition(_0x5855b0(_0x196ed6.ROTATE_POSITION.FG_WIN[this.m_curOrientation]));
              }
              if (this.m_totalBonusMC && this.m_totalBonusMC.mc) {
                this.m_totalBonusMC.mc.setScale(this.m_onRotateScale, this.m_onRotateScale, 0x1);
                this.m_totalBonusMC.mc.setPosition(_0x5855b0(_0x196ed6.ROTATE_POSITION.FG_WIN[this.m_curOrientation]));
              }
              if (this.m_effectView) {
                this.m_effectView.setPosition(_0x5855b0(_0x196ed6.ROTATE_POSITION.EFFECT_VIEW[this.m_curOrientation]));
              }
            }
          }
        };
        _0xde5d50.SkipFlashAndSpin = function () {
          _0x5dd7f8.NextState(_0x10a27d.SPIN);
          _0x2fa636.SetSpinState(_0x50322b.CLICK_SPIN);
          this.PlaySound(_0x3a2794.SOUND_NAME.csh_spin_btn);
        };
        _0xde5d50.OnMainSpinAckNew = function (_0x2e6f7c) {
          this.m_spinAck = _0x2e6f7c.info;
          _0x4f6f19('OnMainSpinAckNew', this.m_spinAck);
          if (this.m_spinAck.ackVec.length > 0x1) {
            this.m_allFGSpinAck = this.m_spinAck.ackVec;
            this.m_allFGSpinAckIndex = 0x1;
          }
          var _0x3dd88e = this.m_spinAck.totalWin;
          this.m_plate.RevSpinAck(this.m_spinAck.ackVec[0x0]);
          _0x5dd7f8.NextState(_0x5afba5.CAN_STOP);
          this.m_serverTotalWin = _0x3dd88e;
          if (!_0x2fa636.IsAutoSpin) {
            _0x2fa636.SetSpinState(_0x50322b.START_SPIN);
          }
          if (_0x2fa636.IsHardStop) {
            _0x2fa636.SetSpinWithSpeed();
          }
        };
        _0xde5d50.OnMainSpinAckLastNew = function (_0x460338) {
          var _0x1fabfb = _0x460338.info.lastspin;
          this.m_plate.ResetWheelSound();
          if ('' != _0x1fabfb.si) {
            ;
          } else {
            var _0x2a4526 = _0x1d7129.strip(_0x2fa636.GetNowBetValue());
            var _0x2b6bb1 = _0x1d7129.strip(_0x2fa636.GetChips() + _0x2a4526);
            _0x2fa636.SetChips(_0x2b6bb1);
            _0x5dd7f8.NextState(_0x10a27d.IDLE);
            _0x2fa636.SetSpinState(_0x50322b.IDLE);
            _0x5dd7f8.NextState(_0x5afba5.TO_GAME);
          }
        };
        _0xde5d50.ReqMail = function () {
          if (_0xb08ad.APP) {
            _0x38ac8a.SendMailReq();
          }
        };
        _0xde5d50.SendVerificationEvent = function (_0x557e85, _0x4539e0) {
          if (undefined === _0x4539e0) {
            _0x4539e0 = '';
          }
          var _0x3b3529 = _0x1d7129.GetLinkParameterByName("ssoKey") || '';
          _0x38ac8a.SendVerificationEvent(_0x38ac8a.FormVerificationEventParams(Number(_0xb08ad.APP.GetAID()), Number(_0xb08ad.NOW_GAME_ID), _0x3a2794.Ver, _0x557e85, _0x4539e0, _0x3b3529, _0xb08ad.APP.GetApiID(), this.m_logIndex.toString()));
        };
        _0xde5d50.StopWiseAutoPlayByNature = function () {
          _0x2fa636.ShowAutoPlayState(false);
        };
        _0xde5d50.ConvertSpinAck = function (_0x478abd) {
          var _0x374578 = {
            'ackVec': [],
            'mgw': _0x478abd.MGWin ? _0x478abd.MGWin : 0x0,
            'fgw': _0x478abd.FGWin ? _0x478abd.FGWin : 0x0,
            'act': _0x478abd.AckType ? _0x478abd.AckType : 0x0,
            'totalWin': _0x478abd.TotalWin ? _0x478abd.TotalWin : 0x0,
            'si': _0x478abd.ShowIndex ? _0x478abd.ShowIndex : '',
            'nm': _0x478abd.NowMoney ? _0x478abd.NowMoney : 0x0
          };
          if (_0x478abd.AckVec) {
            for (var _0x577253 = 0x0; _0x577253 < _0x478abd.AckVec.length; _0x577253++) {
              _0x374578.ackVec.push(this.ConvertAckVec(_0x478abd.AckVec[_0x577253]));
            }
          }
          return {
            'info': _0x374578,
            'missionReward': 0x0,
            'jpType': 0x0,
            'jpWin': 0x0,
            'freeremain': 0x0
          };
        };
        _0xde5d50.ConvertAckVec = function (_0x41912a) {
          var _0x4cb336 = {
            'awardVec': _0x41912a.AwardVec ? this.ConvertAwardVec(_0x41912a.AwardVec) : null,
            'columnSymbol': [],
            'awardTypeFlag': _0x41912a.AwardTypeFlag ? _0x41912a.AwardTypeFlag : 0x0,
            'remainRound': _0x41912a.RemainRound ? _0x41912a.RemainRound : 0x0,
            'extraRound': _0x41912a.ExtraRound ? _0x41912a.ExtraRound : 0x0,
            'extraOdds': _0x41912a.ExtraOdds ? _0x41912a.ExtraOdds : 0x0
          };
          if (_0x41912a.ColumnSymbol) {
            var _0xe42dfb = [];
            for (var _0x5c79de = 0x0; _0x5c79de < _0x41912a.ColumnSymbol.length; _0x5c79de++) {
              var _0x311bf5 = _0x41912a.ColumnSymbol[_0x5c79de].Row;
              _0xe42dfb.push(_0x311bf5);
            }
            _0x4cb336.columnSymbol = _0xe42dfb;
          }
          return _0x4cb336;
        };
        _0xde5d50.ConvertAwardVec = function (_0x10f5fe) {
          if (_0x10f5fe.length <= 0x0) {
            return null;
          }
          var _0x10436a = [];
          for (var _0x566a4a = 0x0; _0x566a4a < _0x10f5fe.length; _0x566a4a++) {
            var _0x3e8a1b = {
              'awardSet': _0x10f5fe[_0x566a4a].AwardSet ? this.ConvertAwardData(_0x10f5fe[_0x566a4a].AwardSet) : null,
              'award': _0x10f5fe[_0x566a4a].AwardMoney ? _0x10f5fe[_0x566a4a].AwardMoney : 0x0
            };
            _0x10436a.push(_0x3e8a1b);
          }
          return _0x10436a;
        };
        _0xde5d50.ConvertAwardData = function (_0x429c70) {
          if (_0x429c70.length <= 0x0) {
            return null;
          }
          var _0x2fb3aa = [];
          for (var _0x3744e0 = 0x0; _0x3744e0 < _0x429c70.length; _0x3744e0++) {
            var _0xdcac0b = {
              'symbol': _0x429c70[_0x3744e0].AwardSymbol ? _0x429c70[_0x3744e0].AwardSymbol : 0x0,
              'gridVec': null
            };
            var _0x573742 = [];
            if (_0x429c70[_0x3744e0].AwardGridVec && _0x429c70[_0x3744e0].AwardGridVec.length > 0x0) {
              for (var _0x4f65a2 = 0x0; _0x4f65a2 < _0x429c70[_0x3744e0].AwardGridVec.length; _0x4f65a2++) {
                var _0x365fbc = {
                  'c': _0x429c70[_0x3744e0].AwardGridVec[_0x4f65a2].Column ? _0x429c70[_0x3744e0].AwardGridVec[_0x4f65a2].Column : 0x0,
                  'r': _0x429c70[_0x3744e0].AwardGridVec[_0x4f65a2].Row ? _0x429c70[_0x3744e0].AwardGridVec[_0x4f65a2].Row : 0x0
                };
                _0x573742.push(_0x365fbc);
              }
              _0xdcac0b.gridVec = _0x573742;
            }
            _0x2fb3aa.push(_0xdcac0b);
          }
          return _0x2fb3aa;
        };
        _0xde5d50.GetDisplayValue = function (_0x3234d6) {
          return _0x2fa636.GetDisplayValue(_0x3234d6);
        };
        _0xde5d50.update = function (_0x2b4a4f) {
          if (_0x5dd7f8.Tick(_0x2b4a4f) >= _0x5afba5.TO_GAME) {
            if (!this.node.active) {
              return;
            }
            this.m_timer.Update(0x3e8 * _0x2b4a4f);
            if (null != this.m_plate) {
              this.m_plate.Process(_0x2b4a4f);
            }
            if (null != this.m_effectView) {
              this.m_effectView.OnUpdate(_0x2b4a4f);
            }
          }
        };
        _0xde5d50.OnCommand = function (_0x183d54, _0x47e4c1) {
          var _0x430bf8 = this;
          switch (_0x183d54) {
            case _0xb08ad.AckType.info:
              this.SettingBottomBar();
              this.m_isLogin = true;
              _0x2fa636.AutoPlayPanelInit();
              _0x2efe6a.FeaturesInit(["CSHSlot/Features_left/spriteFrame", "CSHSlot/Features_right/spriteFrame"], [_0x3a2794.STRING_KEY.CSH_FEATURES_TXT + '1', _0x3a2794.STRING_KEY.CSH_FEATURES_TXT + '2'], 0x3, this.m_logoAtlas);
              var _0x1e4fcd = _0x417cba.GetGameAtlas();
              _0x2efe6a.SetFeatruesDesc([_0x1e4fcd.getSpriteFrame("txt1"), _0x1e4fcd.getSpriteFrame('txt2')]);
              _0x2efe6a.CheckFirstFeatures();
              var _0x5c6a01 = _0x112d29.GetManagerId(function () {
                _0x430bf8.BackgroundLoad();
              });
              var _0x2ea35b = _0x165e9b.GetStringPath(_0x165e9b.FILE_PATH_KEY.STRING_IMG);
              if (null != _0x2ea35b) {
                _0x112d29.AddLoad(_0x5c6a01);
                _0xb08ad.GameBundle.load(_0x2ea35b, _0x5b8a04, function (_0x4b7b93, _0xb49442) {
                  if (_0x4b7b93) {
                    _0x4f6f19(_0x4b7b93.message || _0x4b7b93);
                  } else {
                    _0x430bf8.m_textImgAtlas = _0xb49442;
                    _0x112d29.OnLoaded(_0x5c6a01);
                    _0x430bf8.m_lo_freeTopPanel.getChildByName(_0x196ed6.UIName.IMG_FREE_TOP_WORD_ROUND).getComponent(_0x257daa).spriteFrame = _0x430bf8.m_textImgAtlas.getSpriteFrame(_0x165e9b.IMG_TEXT_KEY.FREE_TOP_WORD_ROUND);
                    _0x430bf8.m_lo_freeTopPanel.getChildByName(_0x196ed6.UIName.IMG_FREE_TOP_WORD_GET).getComponent(_0x257daa).spriteFrame = _0x430bf8.m_textImgAtlas.getSpriteFrame(_0x165e9b.IMG_TEXT_KEY.FREE_TOP_WORD_GET);
                    var _0x385601 = _0x430bf8.m_lo_freeTopPanel.getChildByName(_0x196ed6.UIName.IMG_FREE_TOP_ROUND_PANEL).getChildByName(_0x196ed6.UIName.TXT_FREE_TOP_ROUND_WORD);
                    _0x385601.getComponent(_0x257daa).spriteFrame = _0x430bf8.m_textImgAtlas.getSpriteFrame(_0x165e9b.IMG_TEXT_KEY.FREE_TOP_PANEL_ROUND_WORD);
                    var _0x4263b6 = _0x165e9b.GetPosDiff(_0x165e9b.IMG_TEXT_KEY.FREE_TOP_PANEL_ROUND_WORD);
                    if (!(0x0 == _0x4263b6.x && 0x0 == _0x4263b6.y)) {
                      _0x385601.setPosition(_0x5855b0(_0x385601.position.x + _0x4263b6.x, _0x385601.position.y + _0x4263b6.y));
                    }
                  }
                });
              }
              _0x112d29.StartLoad(_0x5c6a01);
              _0x203059.AddCb({
                'StopAutoCb': function () {
                  _0x2fa636.ShowAutoPlayState(false);
                }
              });
              this.m_plate = new _0x2a64d3();
              this.m_plate.Init(this.m_slotPanel, this.m_plateTopView, this, this.m_comboMoneyPanel, this.m_comboMoney);
              this.m_plate.BackgroundLoad();
              this.m_plate.SetGameViewFastFunc(function () {
                return !(!_0x2fa636.IsAutoSpin || !_0x2fa636.IsHardStop) || _0x430bf8.IsFast();
              });
              this.m_isReceiveGameSetting = true;
              this.InitExtra();
              this.m_currentWin = 0x0;
              _0x2fa636.SetWinValue(0x0);
              _0x2fa636.SetSpinState(_0x50322b.IDLE);
              this.OnInitInfo();
              this.m_plate.SetEnterArcadePlate();
              break;
            case _0xb08ad.AckType.lastSpin:
            case _0xb08ad.AckType.spin:
              var _0x3d9c9b = _0x10b564.cshProto.SpinAck.decode(_0x47e4c1);
              this.OnMainSpinAckNew(this.ConvertSpinAck(_0x3d9c9b));
              break;
            case _0xb08ad.AckType.unshow:
              var _0x187065 = _0x10b564.cshProto.SpinAck.decode(_0x47e4c1);
              this.m_unshowSpinAck = this.ConvertSpinAck(_0x187065);
          }
        };
        _0xde5d50.CheckLoadReady = function () {
          return this.m_bonusResReady && this.m_isPlateReady;
        };
        _0xde5d50.GetSpinInfo = function () {
          return null;
        };
        _0xde5d50.CancelSpin = function () {};
        _0xde5d50.RetryRoundEnd = function () {
          if (this.m_isBonus) {
            _0x259743.ReqRoundEnd(this.m_allFGSpinAckIndex, this.m_allFGSpinAckIndex >= this.m_allFGSpinAck.length);
          } else {
            _0x259743.ReqRoundEnd(0x1, true);
          }
        };
        _0x23c2ec(_0x196ed6, [{
          'key': "TitleSpriteAtlas",
          'get': function () {
            return this.m_titleSpriteAtlas;
          },
          'set': function (_0x5f3163) {
            this.m_titleSpriteAtlas = _0x5f3163;
          }
        }, {
          'key': 'IsReceiveGameSetting',
          'get': function () {
            return this.m_isReceiveGameSetting;
          },
          'set': function (_0x128db4) {
            this.m_isReceiveGameSetting = _0x128db4;
          }
        }, {
          'key': "IsInitExtra",
          'get': function () {
            return this.m_isInitExtra;
          },
          'set': function (_0x26d5f3) {
            this.m_isInitExtra = _0x26d5f3;
          }
        }, {
          'key': 'Timer',
          'get': function () {
            return this.m_timer;
          },
          'set': function (_0x533a5a) {
            this.m_timer = _0x533a5a;
          }
        }, {
          'key': "TotalTick",
          'get': function () {
            return this.m_totalTick;
          },
          'set': function (_0x3d4fe7) {
            this.m_totalTick = _0x3d4fe7;
          }
        }, {
          'key': 'DoEffectProcess',
          'get': function () {
            return this.m_doEffectProcess;
          },
          'set': function (_0x59c5e9) {
            this.m_doEffectProcess = _0x59c5e9;
          }
        }, {
          'key': "InBonus",
          'get': function () {
            return this.m_inBonus;
          },
          'set': function (_0x10a1a1) {
            this.m_inBonus = _0x10a1a1;
          }
        }, {
          'key': "WaitStateTime",
          'get': function () {
            return this.m_waitStateTime;
          },
          'set': function (_0x318d16) {
            this.m_waitStateTime = _0x318d16;
          }
        }, {
          'key': "WaitToNextState",
          'get': function () {
            return this.m_waitToNextState;
          },
          'set': function (_0x1c1461) {
            this.m_waitToNextState = _0x1c1461;
          }
        }, {
          'key': "ComboMoneyPanel",
          'get': function () {
            return this.m_comboMoneyPanel;
          },
          'set': function (_0x2ee9cb) {
            this.m_comboMoneyPanel = _0x2ee9cb;
          }
        }, {
          'key': 'ComboMask',
          'get': function () {
            return this.m_comboMask;
          },
          'set': function (_0x450953) {
            this.m_comboMask = _0x450953;
          }
        }, {
          'key': "ComboRoundPanel",
          'get': function () {
            return this.m_comboRoundPanel;
          },
          'set': function (_0x38ac1b) {
            this.m_comboRoundPanel = _0x38ac1b;
          }
        }, {
          'key': 'ComboNum',
          'get': function () {
            return this.m_comboNum;
          },
          'set': function (_0x17a746) {
            this.m_comboNum = _0x17a746;
          }
        }, {
          'key': "ComboMoney",
          'get': function () {
            return this.m_comboMoney;
          },
          'set': function (_0x3f542a) {
            this.m_comboMoney = _0x3f542a;
          }
        }, {
          'key': 'FastEffect',
          'get': function () {
            return this.m_fastEffect;
          },
          'set': function (_0x3fbd38) {
            this.m_fastEffect = _0x3fbd38;
          }
        }, {
          'key': "Plate",
          'get': function () {
            return this.m_plate;
          },
          'set': function (_0x34de69) {
            this.m_plate = _0x34de69;
          }
        }, {
          'key': 'Mask',
          'get': function () {
            return this.m_mask;
          },
          'set': function (_0x58f462) {
            this.m_mask = _0x58f462;
          }
        }, {
          'key': "BonusTotalRound",
          'get': function () {
            return this.m_bonusTotalRound;
          },
          'set': function (_0x45340d) {
            this.m_bonusTotalRound = _0x45340d;
          }
        }, {
          'key': "TotalBonusEnterMC",
          'get': function () {
            return this.m_totalBonusEnterMC;
          },
          'set': function (_0x50b443) {
            this.m_totalBonusEnterMC = _0x50b443;
          }
        }, {
          'key': "TotalBonusMC",
          'get': function () {
            return this.m_totalBonusMC;
          },
          'set': function (_0x39dc8d) {
            this.m_totalBonusMC = _0x39dc8d;
          }
        }, {
          'key': "Logo",
          'get': function () {
            return this.m_logo;
          },
          'set': function (_0x4316a9) {
            this.m_logo = _0x4316a9;
          }
        }, {
          'key': "Lo_freeTopPanel",
          'get': function () {
            return this.m_lo_freeTopPanel;
          },
          'set': function (_0x59f0cc) {
            this.m_lo_freeTopPanel = _0x59f0cc;
          }
        }, {
          'key': "AllFGSpinAck",
          'get': function () {
            return this.m_allFGSpinAck;
          },
          'set': function (_0x1ae56c) {
            this.m_allFGSpinAck = _0x1ae56c;
          }
        }, {
          'key': "UnshowSpinAck",
          'get': function () {
            return this.m_unshowSpinAck;
          },
          'set': function (_0x1be79d) {
            this.m_unshowSpinAck = _0x1be79d;
          }
        }, {
          'key': 'Round',
          'get': function () {
            return this.m_allFGSpinAckIndex;
          },
          'set': function (_0x1651e9) {
            this.m_allFGSpinAckIndex = _0x1651e9;
          }
        }, {
          'key': "TextImgAtlas",
          'get': function () {
            return this.m_textImgAtlas;
          },
          'set': function (_0x13137e) {
            this.m_textImgAtlas = _0x13137e;
          }
        }, {
          'key': "SlotPanel",
          'get': function () {
            return this.m_slotPanel;
          },
          'set': function (_0x38f37d) {
            this.m_slotPanel = _0x38f37d;
          }
        }, {
          'key': "PlateTopView",
          'get': function () {
            return this.m_plateTopView;
          },
          'set': function (_0x26a435) {
            this.m_plateTopView = _0x26a435;
          }
        }, {
          'key': 'BottomBarIsLoad',
          'get': function () {
            return this.m_bottomBarIsLoad;
          },
          'set': function (_0x2ebc92) {
            this.m_bottomBarIsLoad = _0x2ebc92;
          }
        }, {
          'key': 'CurOrientation',
          'get': function () {
            return this.m_curOrientation;
          },
          'set': function (_0x14f905) {
            this.m_curOrientation = _0x14f905;
          }
        }, {
          'key': "OnRotateScale",
          'get': function () {
            return this.m_onRotateScale;
          },
          'set': function (_0x49ab0c) {
            this.m_onRotateScale = _0x49ab0c;
          }
        }, {
          'key': "IsSkipEffect",
          'get': function () {
            return this.m_isSkipEffect;
          },
          'set': function (_0x3b54d1) {
            this.m_isSkipEffect = _0x3b54d1;
          }
        }, {
          'key': "CanSkipEffect",
          'get': function () {
            return this.m_canSkipEffect;
          },
          'set': function (_0x11c291) {
            this.m_canSkipEffect = _0x11c291;
          }
        }, {
          'key': "SpinAck",
          'get': function () {
            return this.m_spinAck;
          },
          'set': function (_0x241d0f) {
            this.m_spinAck = _0x241d0f;
          }
        }, {
          'key': "CurrentWin",
          'get': function () {
            return this.m_currentWin;
          },
          'set': function (_0x6fc762) {
            this.m_currentWin = _0x6fc762;
          }
        }, {
          'key': "NowTotalWin",
          'get': function () {
            return this.m_nowTotalWin;
          },
          'set': function (_0x2299c3) {
            this.m_nowTotalWin = _0x2299c3;
          }
        }, {
          'key': "ServerTotalWin",
          'get': function () {
            return this.m_serverTotalWin;
          },
          'set': function (_0x18ac6c) {
            this.m_serverTotalWin = _0x18ac6c;
          }
        }, {
          'key': "FirstInitInfoDone",
          'get': function () {
            return this.m_firstInitInfoDone;
          },
          'set': function (_0x4e9a54) {
            this.m_firstInitInfoDone = _0x4e9a54;
          }
        }, {
          'key': "IsLogin",
          'get': function () {
            return this.m_isLogin;
          },
          'set': function (_0x2557ae) {
            this.m_isLogin = _0x2557ae;
          }
        }, {
          'key': 'IsBonus',
          'get': function () {
            return this.m_isBonus;
          },
          'set': function (_0x58a965) {
            this.m_isBonus = _0x58a965;
          }
        }, {
          'key': "IsFirstShow",
          'get': function () {
            return this.m_isFirstShow;
          },
          'set': function (_0x28a257) {
            this.m_isFirstShow = _0x28a257;
          }
        }, {
          'key': 'IsPlateReady',
          'get': function () {
            return this.m_isPlateReady;
          },
          'set': function (_0x23fe83) {
            this.m_isPlateReady = _0x23fe83;
          }
        }, {
          'key': "BonusResReady",
          'get': function () {
            return this.m_bonusResReady;
          },
          'set': function (_0x294cbb) {
            this.m_bonusResReady = _0x294cbb;
          }
        }, {
          'key': "View",
          'get': function () {
            return this.node;
          }
        }]);
        return _0x196ed6;
      }(_0x2edc52);
      _0x46f4e3.UIName = {
        'CSH_LOADING': "csh_loading",
        'CSH_LOADING_P': "csh_loading_p",
        'GAME_VIEW': "GameView",
        'IMG_LOGO_CSH': "logo",
        'IMG_MG_BG': "img_Mg_bg02",
        'IMG_FG_BG': "img_fg_bg02",
        'LO_TOUCH_PANEL': 'lo_touch',
        'LO_SYMBOL_PANEL': "lo_symbolPanel",
        'LO_FREE_TOP_PANEL': "lo_free_top",
        'IMG_FREE_TOP_BG_L': "free_top_bg_l",
        'IMG_FREE_TOP_BG_r': "free_top_bg_r",
        'IMG_FREE_TOP_ROUND_PANEL': "free_top_round_panel",
        'TXT_FREE_TOP_ROUND_NUM': 'free_top_txt_round_num',
        'TXT_FREE_TOP_ROUND_WORD': "free_top_panel_round_word",
        'IMG_FREE_TOP_WORD_ROUND': "free_top_word_round",
        'IMG_FREE_TOP_WORD_GET': "free_top_word_get",
        'TXT_FREE_TOP_GET_NUM': 'free_top_txt_odds_num',
        'TXT_FREE_TOP_COMBO_ROUND_NUM': "free_top_txt_combo_round_num",
        'LO_COMBOMONEY_PANEL': 'lo_comboMoneyPanel',
        'LO_COMBO_BG_MASK': "lo_comboBg_mask",
        'IMG_COMBO_BG': "img_combo_bg",
        'LO_COMBO_ROUND': "lo_combo_round",
        'IMG_COMBO_WORD': 'img_combo_word',
        'TXT_COMBO_NUM': "txt_combo_num",
        'TXT_COMBOMONEY_NUM': "txt_comboMoney",
        'IMG_BG_L': 'main_bg_l',
        'IMG_BG_R': "main_bg_r",
        'LO_MAIN_REEL_BG': 'lo_main_reel_bg',
        'IMG_SLOTBG_L': 'main_slot_panel_l',
        'IMG_SLOTBG_R': 'main_slot_panel_r',
        'IMG_TOTEM_R': "main_totem_r",
        'IMG_TOTEM_L': 'main_totem_l',
        'N_FREE_BG_L': "free_bg_l",
        'N_FREE_BG_R': 'free_bg_r',
        'SP_TABLE_PANEL': "table_panel",
        'TXT_TABLE_NUM': 'txt_table_num',
        'LO_MASK': "lo_mask",
        'VERSION': "Version"
      };
      _0x46f4e3.ROTATE_POSITION = _0x5e461f({
        'EFFECT_VIEW': [_0x5855b0(-0x238, 0x0), _0x5855b0(-0x23a, 0x17c)],
        'AUTOPLAY_TIPS': [_0x5855b0(0x238, 0x140), _0x5855b0(0x140, 0x29d)],
        'FG_ANI': [_0x5855b0(0x0, 0x0), _0x5855b0(0x0, 0x84)],
        'FG_WIN': [_0x5855b0(0x0, 0x140), _0x5855b0(0x0, 0x29e)]
      });
      _0x46f4e3.CSB_PATH = {
        'BONUS_BG': 'CSHSlot/FreeGame/effect/Mage_03fbg',
        'ENTER_BONUS': "CSHSlot/FreeGame/effect/boun_01st",
        'BONUS_TOTAL_WIN_ENTER': "CSHSlot/FreeGame/effect/total_01str",
        'BONUS_TOTAL_WIN_LOOP': "CSHSlot/FreeGame/effect/total_02lop",
        'BONUS_TOP_ROUND_EFFECT': 'CSHSlot/FreeGame/effect/Mage_04fta',
        'NEAR_WIN': 'CSHSlot/Symbol/effect/sybo_newin',
        'RATIO_VIEW': "./CSHSlot/GameInfo/Page%s"
      };
      _0x46f4e3.GAMEVIEW_ZORDER = {
        'AUTO_PLAY_BLOCK': 0x14,
        'GAME_UI': 0x2,
        'BOTTOM_BAR': 0x13,
        'EFFECT_SMALL': 0x6,
        'EFFECT_ALL': 0x7,
        'ENTER_BONUS': 0xc,
        'BANNER_VIEW': 0xd
      };
      _0x46f4e3.OTHER_CONST = {
        'COMBO_MONEY_PANEL_WIDTH_START': 0xa,
        'COMBO_MONEY_PANEL_WIDTH_END': 0x1b8,
        'COMBO_MONEY_PANEL_HEIGHT': 0x8f,
        'TAG_SAVEFILE_BET_INDEX': "CSH_RecordBetIdx_"
      };
      _0x46f4e3.POS = {
        'COMBO_MONEY_X': 0x0,
        'COMBO_MONEY_Y': 0x0,
        'COMBO_PANEL_X': 0x0,
        'COMBO_PANEL_Y': 0x0,
        'BOTTOM_BAR_WIN_X': 0x0,
        'BOTTOM_BAR_WIN_Y': 0x0,
        'GAME_VIEW_DIFF': 0x0
      };
      _0x46f4e3.ADJUST_TIME = {
        'REQ_BROADCAST': 0x1,
        'SHOW_PLATE_AWARD_LINE': 0.7,
        'SHOW_PLATE_AWARD_LINE_FAST': 0.25,
        'SHOW_PLATE_AWARD_BONUS_LINE': 0x2,
        'SHOW_PLATE_AWARD_LINE_ADD_NORMAL': 0x0,
        'SHOW_PLATE_CHANGE_SYMBOL': 0xa,
        'SHOW_PLATE_CHANGE_SYMBOL_END_TO_CHECK': 0.5,
        'COMBO_MONEY_PANEL_DRAW': 0.1,
        'TO_TOTAL_AWARD_WAIT': 0x0,
        'TO_TOTAL_AWARD_WAIT_FAST': 0x0,
        'BONUS_TO_MAIN_AWARD_WAIT_ITEM': 0x8,
        'BONUS_TO_MAIN_AWARD_WAIT': 0x5,
        'AUTO_IDEL_TO_START_SPIN': 0.3,
        'AUTO_IDEL_TO_START_SPIN_FAST': 0.15,
        'ITEM_UPDATE_TIME': 0x1e
      };
      _0x46f4e3.ANI = {
        'GAMEVIEW_BG_NM_L': "GameView_BG_NM_L",
        'GAMEVIEW_BG_NM_S': "GameView_BG_NM_S",
        'MAINGAME_BG_NM_L': 'MainGame_BG_NM_L',
        'MAINGAME_BG_NM_S': "MainGame_BG_NM_S",
        'LOADING_TXT': "txt_",
        'LOADING_MASK_L': 'mask_L',
        'LOADING_MASK_S': "mask_S"
      };
      _0x46f4e3.ODDS = [0x2, 0x4, 0x7, 0x2d, 0x78];
      _0x46f4e3.WIN_EFFECT_FILES = [null, null, "CSHSlot/common/win/big_anim", 'CSHSlot/common/win/mega_anim', "CSHSlot/common/win/super_anim"];
      _0x46f4e3.AWARD_BOARD_FILE = "CSHSlot/common/win/awardBoard";
      _0x3803b1 = _0x5ce9e8(_0x46f4e3.prototype, 'm_canvas', [_0x41f87b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x11997b = _0x5ce9e8(_0x46f4e3.prototype, "m_barRoot", [_0x377240], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x46e1e9 = _0x5ce9e8(_0x46f4e3.prototype, "m_logoAtlas", [_0x4d25a1], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x447c2f = _0x1cdd7b(_0x2d8216 = _0x46f4e3) || _0x2d8216;
      _0xbd733f._RF.pop();
    }
  };
});
(function (_0x23aae4) {
  _0x23aae4("virtual:///prerequisite-imports/game", 'chunks:///game.js');
})(function (_0x4eeb62, _0x5c6dd0) {
  System.register(_0x4eeb62, [_0x5c6dd0], function (_0x58dbb0, _0x4a9a74) {
    return {
      'setters': [function (_0x2ab7c2) {
        var _0x29f2d2 = {};
        for (var _0x5966af in _0x2ab7c2) {
          if (_0x5966af !== 'default' && _0x5966af !== '__esModule') {
            _0x29f2d2[_0x5966af] = _0x2ab7c2[_0x5966af];
          }
        }
        _0x58dbb0(_0x29f2d2);
      }],
      'execute': function () {}
    };
  });
});