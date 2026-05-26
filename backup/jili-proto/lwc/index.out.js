System.register("chunks:///main.js", ['cc'], function (_0x37876a, _0x489b23) {
  'use strict';

  var _0xe3c15f;
  var _0x386e5e;
  var _0xfc5198;
  var _0x399ac0;
  var _0x1c79af;
  var _0x9f6cc7;
  var _0x44246d;
  var _0x57be55;
  var _0x25028e;
  var _0x55612a;
  var _0x57e8d7;
  var _0x55e2b5;
  var _0x33a4bc;
  var _0x6f337e;
  var _0x4bc9af;
  var _0x4134c8;
  var _0x5a1279;
  var _0x4360d2;
  var _0x2835d7;
  var _0x3815d2;
  var _0xe58c14;
  var _0x40ea73;
  var _0xfaba8e;
  var _0x2f9d81;
  var _0x345885;
  var _0x21c9d4;
  var _0x39b25f;
  var _0x4d3188;
  var _0x59ed38;
  var _0x3a5697;
  var _0x22e672;
  var _0x49eea7;
  var _0x7c0640;
  var _0x7395fb;
  var _0x317bea;
  var _0x477aca;
  var _0x1eea10;
  var _0x475ebe;
  var _0x3ddf5d;
  var _0x595c49;
  var _0x3fd5e5;
  var _0x1329b2;
  var _0x12ce17;
  var _0x12cb1a;
  var _0x800ec6;
  var _0x34421c;
  var _0x1fd604;
  var _0xf7995d;
  var _0x39a7bf;
  var _0x25cd49;
  var _0x4efd9;
  var _0x479e00;
  var _0x26e84c;
  var _0x333067;
  var _0x5d78bb;
  var _0x31413f;
  var _0x34dbad;
  var _0x17b2a4;
  var _0x42bd9f;
  var _0x43dc0a;
  var _0x2ff1df;
  var _0x3d0649;
  var _0x367383;
  var _0x2fdc13;
  var _0x4e7094;
  var _0x285202;
  var _0x510c58;
  var _0x11d36d;
  var _0x37f18d;
  return {
    'setters': [function (_0x330593) {
      _0xe3c15f = _0x330593.cclegacy;
      _0x386e5e = _0x330593.v3;
      _0xfc5198 = _0x330593.v2;
      _0x399ac0 = _0x330593.macro;
      _0x1c79af = _0x330593.Enum;
      _0x9f6cc7 = _0x330593._decorator;
      _0x44246d = _0x330593.sp;
      _0x57be55 = _0x330593.Node;
      _0x25028e = _0x330593.Animation;
      _0x55612a = _0x330593.Component;
      _0x57e8d7 = _0x330593.Sprite;
      _0x55e2b5 = _0x330593.instantiate;
      _0x33a4bc = _0x330593.UIRenderer;
      _0x6f337e = _0x330593.color;
      _0x4bc9af = _0x330593.warn;
      _0x4134c8 = _0x330593.Label;
      _0x5a1279 = _0x330593.tween;
      _0x4360d2 = _0x330593.Prefab;
      _0x2835d7 = _0x330593.UITransform;
      _0x3815d2 = _0x330593.Vec3;
      _0xe58c14 = _0x330593.CCFloat;
      _0x40ea73 = _0x330593.log;
      _0xfaba8e = _0x330593.director;
      _0x2f9d81 = _0x330593.Director;
      _0x345885 = _0x330593.UIOpacity;
      _0x21c9d4 = _0x330593.error;
      _0x39b25f = _0x330593.RichText;
      _0x4d3188 = _0x330593.CCBoolean;
      _0x59ed38 = _0x330593.Tween;
      _0x3a5697 = _0x330593.Color;
      _0x22e672 = _0x330593.JsonAsset;
      _0x49eea7 = _0x330593.math;
      _0x7c0640 = _0x330593.SpriteFrame;
      _0x7395fb = _0x330593.TweenSystem;
      _0x317bea = _0x330593.Size;
      _0x477aca = _0x330593.SpriteAtlas;
      _0x1eea10 = _0x330593.Button;
      _0x475ebe = _0x330593.sys;
      _0x3ddf5d = _0x330593.input;
      _0x595c49 = _0x330593.Input;
      _0x3fd5e5 = _0x330593.KeyCode;
      _0x1329b2 = _0x330593.view;
      _0x12ce17 = _0x330593.ResolutionPolicy;
      _0x12cb1a = _0x330593.js;
      _0x800ec6 = _0x330593.ccenum;
      _0x34421c = _0x330593.EventHandler;
      _0x1fd604 = _0x330593.assetManager;
      _0xf7995d = _0x330593.lerp;
      _0x39a7bf = _0x330593.NodeEventType;
      _0x25cd49 = _0x330593.TransformBit;
      _0x4efd9 = _0x330593.CCString;
      _0x479e00 = _0x330593.Material;
      _0x26e84c = _0x330593.Gradient;
      _0x333067 = _0x330593.v4;
      _0x5d78bb = _0x330593.Texture2D;
      _0x31413f = _0x330593.clamp01;
      _0x34dbad = _0x330593.EffectAsset;
      _0x17b2a4 = _0x330593.CCInteger;
      _0x42bd9f = _0x330593.ImageAsset;
      _0x43dc0a = _0x330593.AnimationClip;
      _0x2ff1df = _0x330593.ParticleSystem2D;
      _0x3d0649 = _0x330593.Vec2;
      _0x367383 = _0x330593.ScrollView;
      _0x2fdc13 = _0x330593.isValid;
      _0x4e7094 = _0x330593.CCClass;
      _0x285202 = _0x330593.settings;
      _0x510c58 = _0x330593.Settings;
      _0x11d36d = _0x330593.VERSION;
      _0x37f18d = _0x330593.find;
    }],
    'execute': function () {
      function _0x5266ea() {
        _0x5266ea = function () {
          return _0x4a5c84;
        };
        var _0x4a5c84 = {};
        var _0x39092d = Object.prototype;
        var _0x5432a5 = _0x39092d.hasOwnProperty;
        var _0x16f8cc = "function" == typeof Symbol ? Symbol : {};
        var _0x354829 = _0x16f8cc.iterator || "@@iterator";
        var _0x2288f2 = _0x16f8cc.asyncIterator || "@@asyncIterator";
        var _0x1f1e3a = _0x16f8cc.toStringTag || "@@toStringTag";
        function _0x254126(_0x3ae416, _0x124054, _0x58132c) {
          Object.defineProperty(_0x3ae416, _0x124054, {
            'value': _0x58132c,
            'enumerable': true,
            'configurable': true,
            'writable': true
          });
          return _0x3ae416[_0x124054];
        }
        try {
          _0x254126({}, '');
        } catch (_0x3c80b8) {
          _0x254126 = function (_0x566465, _0x1e0d5f, _0x37f48e) {
            return _0x566465[_0x1e0d5f] = _0x37f48e;
          };
        }
        function _0x4a41f8(_0x3b0127, _0x28079d, _0x408eb4, _0x3e5d80) {
          var _0x37aa85 = _0x28079d && _0x28079d.prototype instanceof _0x53eebb ? _0x28079d : _0x53eebb;
          var _0x5e64a1 = Object.create(_0x37aa85.prototype);
          var _0x349a96 = new _0x4527c5(_0x3e5d80 || []);
          _0x5e64a1._invoke = function (_0x3ec0a6, _0x3068c1, _0x35f1b8) {
            var _0x2b3ad0 = "suspendedStart";
            return function (_0x4838db, _0x4f995d) {
              if ("executing" === _0x2b3ad0) {
                throw new Error("Generator is already running");
              }
              if ("completed" === _0x2b3ad0) {
                if ("throw" === _0x4838db) {
                  throw _0x4f995d;
                }
                return {
                  'value': undefined,
                  'done': true
                };
              }
              _0x35f1b8.method = _0x4838db;
              for (_0x35f1b8.arg = _0x4f995d;;) {
                var _0x320642 = _0x35f1b8.delegate;
                if (_0x320642) {
                  var _0x64b2ec = _0x5e092d(_0x320642, _0x35f1b8);
                  if (_0x64b2ec) {
                    if (_0x64b2ec === _0x33f40a) {
                      continue;
                    }
                    return _0x64b2ec;
                  }
                }
                if ("next" === _0x35f1b8.method) {
                  _0x35f1b8.sent = _0x35f1b8._sent = _0x35f1b8.arg;
                } else {
                  if ("throw" === _0x35f1b8.method) {
                    if ("suspendedStart" === _0x2b3ad0) {
                      _0x2b3ad0 = "completed";
                      throw _0x35f1b8.arg;
                    }
                    _0x35f1b8.dispatchException(_0x35f1b8.arg);
                  } else if ("return" === _0x35f1b8.method) {
                    _0x35f1b8.abrupt("return", _0x35f1b8.arg);
                  }
                }
                _0x2b3ad0 = 'executing';
                var _0x28b936 = _0x53c65a(_0x3ec0a6, _0x3068c1, _0x35f1b8);
                if ("normal" === _0x28b936.type) {
                  _0x2b3ad0 = _0x35f1b8.done ? "completed" : 'suspendedYield';
                  if (_0x28b936.arg === _0x33f40a) {
                    continue;
                  }
                  return {
                    'value': _0x28b936.arg,
                    'done': _0x35f1b8.done
                  };
                }
                if ("throw" === _0x28b936.type) {
                  _0x2b3ad0 = 'completed';
                  _0x35f1b8.method = "throw";
                  _0x35f1b8.arg = _0x28b936.arg;
                }
              }
            };
          }(_0x3b0127, _0x408eb4, _0x349a96);
          return _0x5e64a1;
        }
        function _0x53c65a(_0x4b5f01, _0x1d95d2, _0x51778) {
          try {
            return {
              'type': "normal",
              'arg': _0x4b5f01.call(_0x1d95d2, _0x51778)
            };
          } catch (_0x420dbd) {
            return {
              'type': "throw",
              'arg': _0x420dbd
            };
          }
        }
        _0x4a5c84.wrap = _0x4a41f8;
        var _0x33f40a = {};
        function _0x53eebb() {}
        function _0x13001c() {}
        function _0x4c48b1() {}
        var _0x26375c = {};
        _0x254126(_0x26375c, _0x354829, function () {
          return this;
        });
        var _0x42931e = Object.getPrototypeOf;
        var _0x168ed4 = _0x42931e && _0x42931e(_0x42931e(_0x427710([])));
        if (_0x168ed4 && _0x168ed4 !== _0x39092d && _0x5432a5.call(_0x168ed4, _0x354829)) {
          _0x26375c = _0x168ed4;
        }
        var _0x3676e3 = _0x4c48b1.prototype = _0x53eebb.prototype = Object.create(_0x26375c);
        function _0x1ec621(_0x3565d6) {
          ['next', 'throw', "return"].forEach(function (_0x203a23) {
            _0x254126(_0x3565d6, _0x203a23, function (_0x483ac4) {
              return this._invoke(_0x203a23, _0x483ac4);
            });
          });
        }
        function _0x39ca21(_0x3d3f47, _0x3d4b22) {
          function _0x5aba1b(_0x568b04, _0x2fde56, _0x176e1e, _0x537f57) {
            var _0x44769a = _0x53c65a(_0x3d3f47[_0x568b04], _0x3d3f47, _0x2fde56);
            if ("throw" !== _0x44769a.type) {
              var _0x53d724 = _0x44769a.arg;
              var _0x4df507 = _0x53d724.value;
              return _0x4df507 && "object" == typeof _0x4df507 && _0x5432a5.call(_0x4df507, "__await") ? _0x3d4b22.resolve(_0x4df507.__await).then(function (_0x2815b3) {
                _0x5aba1b("next", _0x2815b3, _0x176e1e, _0x537f57);
              }, function (_0x35bd33) {
                _0x5aba1b("throw", _0x35bd33, _0x176e1e, _0x537f57);
              }) : _0x3d4b22.resolve(_0x4df507).then(function (_0x58aa68) {
                _0x53d724.value = _0x58aa68;
                _0x176e1e(_0x53d724);
              }, function (_0x5b9301) {
                return _0x5aba1b("throw", _0x5b9301, _0x176e1e, _0x537f57);
              });
            }
            _0x537f57(_0x44769a.arg);
          }
          var _0x374ffd;
          this._invoke = function (_0x4bf18a, _0x43b6ee) {
            function _0x5b7fc2() {
              return new _0x3d4b22(function (_0x1d02ca, _0xada17d) {
                _0x5aba1b(_0x4bf18a, _0x43b6ee, _0x1d02ca, _0xada17d);
              });
            }
            return _0x374ffd = _0x374ffd ? _0x374ffd.then(_0x5b7fc2, _0x5b7fc2) : _0x5b7fc2();
          };
        }
        function _0x5e092d(_0x35c607, _0xcb5be) {
          var _0x28600f = _0x35c607.iterator[_0xcb5be.method];
          if (undefined === _0x28600f) {
            _0xcb5be.delegate = null;
            if ("throw" === _0xcb5be.method) {
              if (_0x35c607.iterator["return"] && (_0xcb5be.method = "return", _0xcb5be.arg = undefined, _0x5e092d(_0x35c607, _0xcb5be), "throw" === _0xcb5be.method)) {
                return _0x33f40a;
              }
              _0xcb5be.method = 'throw';
              _0xcb5be.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return _0x33f40a;
          }
          var _0x4f8e83 = _0x53c65a(_0x28600f, _0x35c607.iterator, _0xcb5be.arg);
          if ("throw" === _0x4f8e83.type) {
            _0xcb5be.method = "throw";
            _0xcb5be.arg = _0x4f8e83.arg;
            _0xcb5be.delegate = null;
            return _0x33f40a;
          }
          var _0xb394f4 = _0x4f8e83.arg;
          return _0xb394f4 ? _0xb394f4.done ? (_0xcb5be[_0x35c607.resultName] = _0xb394f4.value, _0xcb5be.next = _0x35c607.nextLoc, 'return' !== _0xcb5be.method && (_0xcb5be.method = 'next', _0xcb5be.arg = undefined), _0xcb5be.delegate = null, _0x33f40a) : _0xb394f4 : (_0xcb5be.method = 'throw', _0xcb5be.arg = new TypeError("iterator result is not an object"), _0xcb5be.delegate = null, _0x33f40a);
        }
        function _0x438a26(_0x29dc85) {
          var _0x5731de = {
            'tryLoc': _0x29dc85[0x0]
          };
          if (0x1 in _0x29dc85) {
            _0x5731de.catchLoc = _0x29dc85[0x1];
          }
          if (0x2 in _0x29dc85) {
            _0x5731de.finallyLoc = _0x29dc85[0x2];
            _0x5731de.afterLoc = _0x29dc85[0x3];
          }
          this.tryEntries.push(_0x5731de);
        }
        function _0x41b054(_0x294ca5) {
          var _0x5cf592 = _0x294ca5.completion || {};
          _0x5cf592.type = 'normal';
          delete _0x5cf592.arg;
          _0x294ca5.completion = _0x5cf592;
        }
        function _0x4527c5(_0xc472dd) {
          this.tryEntries = [{
            'tryLoc': "root"
          }];
          _0xc472dd.forEach(_0x438a26, this);
          this.reset(true);
        }
        function _0x427710(_0x361376) {
          if (_0x361376) {
            var _0xda2aa3 = _0x361376[_0x354829];
            if (_0xda2aa3) {
              return _0xda2aa3.call(_0x361376);
            }
            if ('function' == typeof _0x361376.next) {
              return _0x361376;
            }
            if (!isNaN(_0x361376.length)) {
              var _0x3671f6 = -0x1;
              var _0x5c1218 = function _0x16dbf1() {
                for (; ++_0x3671f6 < _0x361376.length;) {
                  if (_0x5432a5.call(_0x361376, _0x3671f6)) {
                    _0x16dbf1.value = _0x361376[_0x3671f6];
                    _0x16dbf1.done = false;
                    return _0x16dbf1;
                  }
                }
                _0x16dbf1.value = undefined;
                _0x16dbf1.done = true;
                return _0x16dbf1;
              };
              return _0x5c1218.next = _0x5c1218;
            }
          }
          return {
            'next': _0x1abeb9
          };
        }
        function _0x1abeb9() {
          return {
            'value': undefined,
            'done': true
          };
        }
        _0x13001c.prototype = _0x4c48b1;
        _0x254126(_0x3676e3, "constructor", _0x4c48b1);
        _0x254126(_0x4c48b1, 'constructor', _0x13001c);
        _0x13001c.displayName = _0x254126(_0x4c48b1, _0x1f1e3a, "GeneratorFunction");
        _0x4a5c84.isGeneratorFunction = function (_0x472fed) {
          var _0x505d7d = "function" == typeof _0x472fed && _0x472fed.constructor;
          return !!_0x505d7d && (_0x505d7d === _0x13001c || "GeneratorFunction" === (_0x505d7d.displayName || _0x505d7d.name));
        };
        _0x4a5c84.mark = function (_0x282f6a) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(_0x282f6a, _0x4c48b1);
          } else {
            _0x282f6a.__proto__ = _0x4c48b1;
            _0x254126(_0x282f6a, _0x1f1e3a, "GeneratorFunction");
          }
          _0x282f6a.prototype = Object.create(_0x3676e3);
          return _0x282f6a;
        };
        _0x4a5c84.awrap = function (_0x41323f) {
          return {
            '__await': _0x41323f
          };
        };
        _0x1ec621(_0x39ca21.prototype);
        _0x254126(_0x39ca21.prototype, _0x2288f2, function () {
          return this;
        });
        _0x4a5c84.AsyncIterator = _0x39ca21;
        _0x4a5c84.async = function (_0x2486d0, _0x379916, _0x59cc39, _0x4193aa, _0xfdcb67) {
          if (undefined === _0xfdcb67) {
            _0xfdcb67 = Promise;
          }
          var _0x5895a7 = new _0x39ca21(_0x4a41f8(_0x2486d0, _0x379916, _0x59cc39, _0x4193aa), _0xfdcb67);
          return _0x4a5c84.isGeneratorFunction(_0x379916) ? _0x5895a7 : _0x5895a7.next().then(function (_0x59cbc0) {
            return _0x59cbc0.done ? _0x59cbc0.value : _0x5895a7.next();
          });
        };
        _0x1ec621(_0x3676e3);
        _0x254126(_0x3676e3, _0x1f1e3a, "Generator");
        _0x254126(_0x3676e3, _0x354829, function () {
          return this;
        });
        _0x254126(_0x3676e3, 'toString', function () {
          return "[object Generator]";
        });
        _0x4a5c84.keys = function (_0x1df312) {
          var _0xb517c1 = [];
          for (var _0xe954c8 in _0x1df312) _0xb517c1.push(_0xe954c8);
          _0xb517c1.reverse();
          return function _0x4b000e() {
            for (; _0xb517c1.length;) {
              var _0x3fccf9 = _0xb517c1.pop();
              if (_0x3fccf9 in _0x1df312) {
                _0x4b000e.value = _0x3fccf9;
                _0x4b000e.done = false;
                return _0x4b000e;
              }
            }
            _0x4b000e.done = true;
            return _0x4b000e;
          };
        };
        _0x4a5c84.values = _0x427710;
        _0x4527c5.prototype = {
          'constructor': _0x4527c5,
          'reset': function (_0x42a1f0) {
            this.prev = 0x0;
            this.next = 0x0;
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(_0x41b054);
            if (!_0x42a1f0) {
              for (var _0x3f9418 in this) if ('t' === _0x3f9418.charAt(0x0) && _0x5432a5.call(this, _0x3f9418) && !isNaN(+_0x3f9418.slice(0x1))) {
                this[_0x3f9418] = undefined;
              }
            }
          },
          'stop': function () {
            this.done = true;
            var _0x181696 = this.tryEntries[0x0].completion;
            if ("throw" === _0x181696.type) {
              throw _0x181696.arg;
            }
            return this.rval;
          },
          'dispatchException': function (_0x1efa9a) {
            if (this.done) {
              throw _0x1efa9a;
            }
            var _0x4dd930 = this;
            function _0x4d9d41(_0x1e6796, _0x321abb) {
              _0x3fb7df.type = "throw";
              _0x3fb7df.arg = _0x1efa9a;
              _0x4dd930.next = _0x1e6796;
              if (_0x321abb) {
                _0x4dd930.method = "next";
                _0x4dd930.arg = undefined;
              }
              return !!_0x321abb;
            }
            for (var _0x1d0905 = this.tryEntries.length - 0x1; _0x1d0905 >= 0x0; --_0x1d0905) {
              var _0x4a1821 = this.tryEntries[_0x1d0905];
              var _0x3fb7df = _0x4a1821.completion;
              if ("root" === _0x4a1821.tryLoc) {
                return _0x4d9d41('end');
              }
              if (_0x4a1821.tryLoc <= this.prev) {
                var _0x35b158 = _0x5432a5.call(_0x4a1821, "catchLoc");
                var _0x6b56c9 = _0x5432a5.call(_0x4a1821, "finallyLoc");
                if (_0x35b158 && _0x6b56c9) {
                  if (this.prev < _0x4a1821.catchLoc) {
                    return _0x4d9d41(_0x4a1821.catchLoc, true);
                  }
                  if (this.prev < _0x4a1821.finallyLoc) {
                    return _0x4d9d41(_0x4a1821.finallyLoc);
                  }
                } else {
                  if (_0x35b158) {
                    if (this.prev < _0x4a1821.catchLoc) {
                      return _0x4d9d41(_0x4a1821.catchLoc, true);
                    }
                  } else {
                    if (!_0x6b56c9) {
                      throw new Error("try statement without catch or finally");
                    }
                    if (this.prev < _0x4a1821.finallyLoc) {
                      return _0x4d9d41(_0x4a1821.finallyLoc);
                    }
                  }
                }
              }
            }
          },
          'abrupt': function (_0x3f6397, _0x1f87da) {
            for (var _0x1fdb44 = this.tryEntries.length - 0x1; _0x1fdb44 >= 0x0; --_0x1fdb44) {
              var _0x46704c = this.tryEntries[_0x1fdb44];
              if (_0x46704c.tryLoc <= this.prev && _0x5432a5.call(_0x46704c, "finallyLoc") && this.prev < _0x46704c.finallyLoc) {
                var _0x2364d9 = _0x46704c;
                break;
              }
            }
            if (_0x2364d9 && ("break" === _0x3f6397 || "continue" === _0x3f6397) && _0x2364d9.tryLoc <= _0x1f87da && _0x1f87da <= _0x2364d9.finallyLoc) {
              _0x2364d9 = null;
            }
            var _0x2c6030 = _0x2364d9 ? _0x2364d9.completion : {};
            _0x2c6030.type = _0x3f6397;
            _0x2c6030.arg = _0x1f87da;
            return _0x2364d9 ? (this.method = "next", this.next = _0x2364d9.finallyLoc, _0x33f40a) : this.complete(_0x2c6030);
          },
          'complete': function (_0x280e87, _0x3e6e86) {
            if ("throw" === _0x280e87.type) {
              throw _0x280e87.arg;
            }
            if ("break" === _0x280e87.type || 'continue' === _0x280e87.type) {
              this.next = _0x280e87.arg;
            } else if ("return" === _0x280e87.type) {
              this.rval = this.arg = _0x280e87.arg;
              this.method = "return";
              this.next = "end";
            } else if ("normal" === _0x280e87.type && _0x3e6e86) {
              this.next = _0x3e6e86;
            }
            return _0x33f40a;
          },
          'finish': function (_0x1af94c) {
            for (var _0x147012 = this.tryEntries.length - 0x1; _0x147012 >= 0x0; --_0x147012) {
              var _0x5ded47 = this.tryEntries[_0x147012];
              if (_0x5ded47.finallyLoc === _0x1af94c) {
                this.complete(_0x5ded47.completion, _0x5ded47.afterLoc);
                _0x41b054(_0x5ded47);
                return _0x33f40a;
              }
            }
          },
          'catch': function (_0x4f0181) {
            for (var _0x451047 = this.tryEntries.length - 0x1; _0x451047 >= 0x0; --_0x451047) {
              var _0x3cab85 = this.tryEntries[_0x451047];
              if (_0x3cab85.tryLoc === _0x4f0181) {
                var _0x240f09 = _0x3cab85.completion;
                if ('throw' === _0x240f09.type) {
                  var _0x542e80 = _0x240f09.arg;
                  _0x41b054(_0x3cab85);
                }
                return _0x542e80;
              }
            }
            throw new Error("illegal catch attempt");
          },
          'delegateYield': function (_0x21ea76, _0x316af8, _0x416359) {
            this.delegate = {
              'iterator': _0x427710(_0x21ea76),
              'resultName': _0x316af8,
              'nextLoc': _0x416359
            };
            if ("next" === this.method) {
              this.arg = undefined;
            }
            return _0x33f40a;
          }
        };
        return _0x4a5c84;
      }
      function _0x51a1cb(_0x35f03e, _0x47701f, _0x14a72f, _0x21d338, _0x42e923, _0x47ebbc, _0x4d7a31) {
        try {
          var _0x3ddceb = _0x35f03e[_0x47ebbc](_0x4d7a31);
          var _0x4c340d = _0x3ddceb.value;
        } catch (_0xd9d22d) {
          return void _0x14a72f(_0xd9d22d);
        }
        if (_0x3ddceb.done) {
          _0x47701f(_0x4c340d);
        } else {
          Promise.resolve(_0x4c340d).then(_0x21d338, _0x42e923);
        }
      }
      function _0x2eaa1b(_0x14ae6f) {
        return function () {
          var _0x3a7894 = this;
          return new Promise(function (_0x3c990b, _0x24fc22) {
            var _0x5ef833 = _0x14ae6f.apply(_0x3a7894, arguments);
            function _0x48705a(_0x24d0e0) {
              _0x51a1cb(_0x5ef833, _0x3c990b, _0x24fc22, _0x48705a, _0x9da6a1, "next", _0x24d0e0);
            }
            function _0x9da6a1(_0x3ec077) {
              _0x51a1cb(_0x5ef833, _0x3c990b, _0x24fc22, _0x48705a, _0x9da6a1, "throw", _0x3ec077);
            }
            _0x48705a(undefined);
          });
        };
      }
      function _0x2e6e95(_0x90d658, _0x44b0fc) {
        for (var _0x75b7f4 = 0x0; _0x75b7f4 < _0x44b0fc.length; _0x75b7f4++) {
          var _0xff10fd = _0x44b0fc[_0x75b7f4];
          _0xff10fd.enumerable = _0xff10fd.enumerable || false;
          _0xff10fd.configurable = true;
          if ("value" in _0xff10fd) {
            _0xff10fd.writable = true;
          }
          Object.defineProperty(_0x90d658, _0xff10fd.key, _0xff10fd);
        }
      }
      function _0x17689c(_0x3da6cb, _0x4d050c, _0x4dddae) {
        if (_0x4d050c) {
          _0x2e6e95(_0x3da6cb.prototype, _0x4d050c);
        }
        if (_0x4dddae) {
          _0x2e6e95(_0x3da6cb, _0x4dddae);
        }
        Object.defineProperty(_0x3da6cb, 'prototype', {
          'writable': false
        });
        return _0x3da6cb;
      }
      function _0x47cbbc(_0x2393ff, _0x2c44a9) {
        _0x2393ff.prototype = Object.create(_0x2c44a9.prototype);
        _0x2393ff.prototype.constructor = _0x2393ff;
        _0x3ee0ab(_0x2393ff, _0x2c44a9);
      }
      function _0x3ee0ab(_0x4e136e, _0x5d5eed) {
        return (_0x3ee0ab = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (_0x315bd7, _0x51ad5a) {
          _0x315bd7.__proto__ = _0x51ad5a;
          return _0x315bd7;
        })(_0x4e136e, _0x5d5eed);
      }
      function _0x1862e3(_0x207ea2) {
        if (undefined === _0x207ea2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return _0x207ea2;
      }
      function _0x3b53a1(_0x5ee292, _0x155d45) {
        if (_0x5ee292) {
          if ("string" == typeof _0x5ee292) {
            return _0xb26ae3(_0x5ee292, _0x155d45);
          }
          var _0x335f1e = Object.prototype.toString.call(_0x5ee292).slice(0x8, -0x1);
          if ('Object' === _0x335f1e && _0x5ee292.constructor) {
            _0x335f1e = _0x5ee292.constructor.name;
          }
          return 'Map' === _0x335f1e || "Set" === _0x335f1e ? Array.from(_0x5ee292) : 'Arguments' === _0x335f1e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x335f1e) ? _0xb26ae3(_0x5ee292, _0x155d45) : undefined;
        }
      }
      function _0xb26ae3(_0x20ed28, _0x37bc22) {
        if (null == _0x37bc22 || _0x37bc22 > _0x20ed28.length) {
          _0x37bc22 = _0x20ed28.length;
        }
        var _0x33fff4 = 0x0;
        for (var _0x4bd67c = new Array(_0x37bc22); _0x33fff4 < _0x37bc22; _0x33fff4++) {
          _0x4bd67c[_0x33fff4] = _0x20ed28[_0x33fff4];
        }
        return _0x4bd67c;
      }
      function _0x137c53(_0x3d1493, _0x400d90) {
        var _0x2ff84f = "undefined" != typeof Symbol && _0x3d1493[Symbol.iterator] || _0x3d1493["@@iterator"];
        if (_0x2ff84f) {
          return (_0x2ff84f = _0x2ff84f.call(_0x3d1493)).next.bind(_0x2ff84f);
        }
        if (Array.isArray(_0x3d1493) || (_0x2ff84f = _0x3b53a1(_0x3d1493)) || _0x400d90 && _0x3d1493 && "number" == typeof _0x3d1493.length) {
          if (_0x2ff84f) {
            _0x3d1493 = _0x2ff84f;
          }
          var _0x5c8351 = 0x0;
          return function () {
            return _0x5c8351 >= _0x3d1493.length ? {
              'done': true
            } : {
              'done': false,
              'value': _0x3d1493[_0x5c8351++]
            };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _0x3517d5(_0x201ffb, _0x264dc6, _0x4541a8, _0x57c149) {
        if (_0x4541a8) {
          Object.defineProperty(_0x201ffb, _0x264dc6, {
            'enumerable': _0x4541a8.enumerable,
            'configurable': _0x4541a8.configurable,
            'writable': _0x4541a8.writable,
            'value': _0x4541a8.initializer ? _0x4541a8.initializer.call(_0x57c149) : undefined
          });
        }
      }
      function _0x58cf1d(_0x4cf725, _0x187641, _0x4acb42, _0x4707f6, _0x438888) {
        var _0x1ef037 = {};
        Object.keys(_0x4707f6).forEach(function (_0x5eacb4) {
          _0x1ef037[_0x5eacb4] = _0x4707f6[_0x5eacb4];
        });
        _0x1ef037.enumerable = !!_0x1ef037.enumerable;
        _0x1ef037.configurable = !!_0x1ef037.configurable;
        if ('value' in _0x1ef037 || _0x1ef037.initializer) {
          _0x1ef037.writable = true;
        }
        _0x1ef037 = _0x4acb42.slice().reverse().reduce(function (_0x149865, _0x45d9c1) {
          return _0x45d9c1(_0x4cf725, _0x187641, _0x149865) || _0x149865;
        }, _0x1ef037);
        if (_0x438888 && undefined !== _0x1ef037.initializer) {
          _0x1ef037.value = _0x1ef037.initializer ? _0x1ef037.initializer.call(_0x438888) : undefined;
          _0x1ef037.initializer = undefined;
        }
        if (undefined === _0x1ef037.initializer) {
          Object.defineProperty(_0x4cf725, _0x187641, _0x1ef037);
          _0x1ef037 = null;
        }
        return _0x1ef037;
      }
      _0xe3c15f._RF.push({}, 'db4337zK39CwpvA3Bh+gyjl', "index", undefined);
      if (!globalThis.Astarte) {
        globalThis.Astarte = {};
      }
      var _0xfd5517;
      var _0x3174dd;
      var _0x358863;
      var _0x166f61;
      var _0x415166;
      var _0x463c67;
      var _0x51b886;
      var _0x54f3fe;
      var _0x59964d;
      var _0x19f1c6;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, '4c480cU1LpMo4WqCcvtd0ph', "Tools", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, 'de32cbzFmBN4rL/N8DkMkAD', "Define", undefined);
      (function (_0xce07a4) {
        _0xce07a4[_0xce07a4.NORMAL = 0x0] = "NORMAL";
        _0xce07a4[_0xce07a4.USING = 0x1] = 'USING';
      })(_0x3174dd || (_0x3174dd = {}));
      (function (_0x31f82d) {
        _0x31f82d[_0x31f82d.GAME_CLOSE = 0x3e8] = "GAME_CLOSE";
        _0x31f82d[_0x31f82d.LOGIN = 0x3e9] = "LOGIN";
        _0x31f82d[_0x31f82d.WAIT_RES = 0x3ea] = "WAIT_RES";
        _0x31f82d[_0x31f82d.CHECK_UNSHOW = 0x3eb] = "CHECK_UNSHOW";
        _0x31f82d[_0x31f82d.CHECK_FREESPIN = 0x3ec] = "CHECK_FREESPIN";
        _0x31f82d[_0x31f82d.IDLE = 0x3ed] = "IDLE";
        _0x31f82d[_0x31f82d.SPIN_REQ = 0x3ee] = "SPIN_REQ";
        _0x31f82d[_0x31f82d.SPIN = 0x3ef] = 'SPIN';
        _0x31f82d[_0x31f82d.COMMON_SHOW = 0x3f0] = "COMMON_SHOW";
        _0x31f82d[_0x31f82d.MHB_SHOW = 0x3f1] = "MHB_SHOW";
        _0x31f82d[_0x31f82d.JP_SHOW = 0x3f2] = 'JP_SHOW';
        _0x31f82d[_0x31f82d.CHECK_STATE = 0x3f3] = "CHECK_STATE";
        _0x31f82d[_0x31f82d.END = 0x3f4] = "END";
        _0x31f82d[_0x31f82d.FREESPIN_WAIT_RES = 0x3f5] = "FREESPIN_WAIT_RES";
        _0x31f82d[_0x31f82d.TURBO = 0x3f6] = 'TURBO';
        _0x31f82d[_0x31f82d.FIRST_IN_GAME = 0x3f7] = "FIRST_IN_GAME";
        _0x31f82d[_0x31f82d.CHECK_APP_REWARD = 0x3f8] = "CHECK_APP_REWARD";
        _0x31f82d[_0x31f82d.CHECK_BUFF = 0x3f9] = "CHECK_BUFF";
        _0x31f82d[_0x31f82d.ACTIVATE_BUFF = 0x3fa] = "ACTIVATE_BUFF";
        _0x31f82d[_0x31f82d.END_BUFF = 0x3fb] = "END_BUFF";
        _0x31f82d[_0x31f82d.GRAND_JP = 0x3fc] = 'GRAND_JP';
      })(_0x358863 || (_0x358863 = {}));
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "813162EnmlPD6ZkP+n93pP2", "RoundController", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "1d5a8ODImpC9qtSki10xwQQ", "ExtraBetController", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, 'cd534oKcOFFap8T54HqFCAE', "FakeServer", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, '3ec76bGz5NECbh3RNjc2SdI', "TempoSetting", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "6f779uo//FP8owPSb4jjuXE", "CommonEffect", undefined);
      (function (_0x106198) {
        var _0x2de6e1 = function () {
          function _0x55ff3e() {}
          _0x55ff3e.PascalTriangleLine = function (_0x319145) {
            var _0x4aefda = [0x1];
            for (var _0x5174eb = 0x1; _0x5174eb < _0x319145; _0x5174eb++) {
              _0x4aefda[_0x5174eb] = _0x4aefda[_0x5174eb - 0x1] * (_0x319145 - _0x5174eb) / _0x5174eb;
            }
            return _0x4aefda;
          };
          _0x55ff3e.RangedRandom = function (_0x333047, _0x59ef18) {
            return (_0x59ef18 - _0x333047) * Math.random() + _0x333047;
          };
          _0x55ff3e.GetRandomRectPos = function (_0x1a9edb, _0x1796da, _0x21df50) {
            var _0x134640 = _0xfc5198(this.RangedRandom(-_0x1796da.x, _0x1796da.x) / 0x2 | 0x0, this.RangedRandom(-_0x1796da.x, _0x1796da.x) / 0x2 | 0x0).rotate(_0x21df50 * _0x399ac0.RAD);
            return _0x1a9edb.add(_0x134640);
          };
          _0x55ff3e.GetRandomOvalPos = function (_0x479f59, _0x35a150, _0x42240a) {
            var _0x16c16d = _0x35a150.y / Math.max(0x1, _0x35a150.x);
            var _0x230af0 = Math.random() * _0x35a150.x * 0.5;
            var _0x3a4132 = Math.random() * Math.PI * 0x2;
            var _0x3f9426 = _0xfc5198(_0x230af0 * Math.cos(_0x3a4132), _0x230af0 * Math.sin(_0x3a4132) * _0x16c16d).rotate(_0x42240a * _0x399ac0.RAD);
            return _0x479f59.add(_0x3f9426);
          };
          _0x55ff3e.ZoomAndFlip = function (_0x5d0699, _0x2711be, _0x21410d, _0x4b692b) {
            var _0x3bc533 = Math.sin(_0x4b692b * Math.PI) * (_0x2711be - _0x5d0699) + _0x5d0699;
            var _0x13ff5a = Math.cos(_0x4b692b * Math.PI * _0x21410d);
            return _0xfc5198(_0x3bc533 * _0x13ff5a, _0x3bc533);
          };
          return _0x55ff3e;
        }();
        _0x106198.ExtendsMath = _0x2de6e1;
        var _0x519294 = function () {
          function _0x4dcfaf(_0x48f41b) {
            this.pts = null;
            this.len = 0x0;
            this.ptl = null;
            this.bez = null;
            this.len = _0x48f41b.length;
            if (0x0 == this.len) {
              _0x48f41b.push(_0x386e5e(0x0, 0x0));
              _0x48f41b.push(_0x386e5e(0x0, 0x0));
            } else if (0x1 == this.len) {
              _0x48f41b.push(_0x386e5e(_0x48f41b[0x0].x, _0x48f41b[0x0].y));
            }
            this.pts = _0x48f41b;
            switch (this.len) {
              case 0x2:
                this.bez = this.Bezier2;
                break;
              case 0x3:
                this.bez = this.Bezier3;
                break;
              case 0x4:
                this.bez = this.Bezier4;
                break;
              case 0x5:
                this.bez = this.Bezier5;
                break;
              case 0x6:
                this.bez = this.Bezier6;
                break;
              default:
                this.ptl = _0x2de6e1.PascalTriangleLine(this.len);
                this.bez = this.BezierN;
            }
          }
          var _0x252112 = _0x4dcfaf.prototype;
          _0x252112.GetPosition = function (_0x163219) {
            return this.bez.apply(this, [_0x163219]);
          };
          _0x252112.Bezier2 = function (_0x4e7973) {
            var _0x474d97 = 0x1 - _0x4e7973;
            return _0x386e5e(_0x474d97 * this.pts[0x0].x + _0x4e7973 * this.pts[0x1].x, _0x474d97 * this.pts[0x0].y + _0x4e7973 * this.pts[0x1].y);
          };
          _0x252112.Bezier3 = function (_0xc906c9) {
            var _0x56efe1 = 0x1 - _0xc906c9;
            var _0x36d816 = [_0x56efe1 * _0x56efe1, 0x2 * _0x56efe1 * _0xc906c9, _0xc906c9 * _0xc906c9];
            return _0x386e5e(_0x36d816[0x0] * this.pts[0x0].x + _0x36d816[0x1] * this.pts[0x1].x + _0x36d816[0x2] * this.pts[0x2].x, _0x36d816[0x0] * this.pts[0x0].y + _0x36d816[0x1] * this.pts[0x1].y + _0x36d816[0x2] * this.pts[0x2].y);
          };
          _0x252112.Bezier4 = function (_0x360334) {
            var _0x393190 = 0x1 - _0x360334;
            var _0xb23f13 = [_0x393190 * _0x393190 * _0x393190, 0x3 * _0x393190 * _0x393190 * _0x360334, 0x3 * _0x393190 * _0x360334 * _0x360334, _0x360334 * _0x360334 * _0x360334];
            return _0x386e5e(_0xb23f13[0x0] * this.pts[0x0].x + _0xb23f13[0x1] * this.pts[0x1].x + _0xb23f13[0x2] * this.pts[0x2].x + _0xb23f13[0x3] * this.pts[0x3].x, _0xb23f13[0x0] * this.pts[0x0].y + _0xb23f13[0x1] * this.pts[0x1].y + _0xb23f13[0x2] * this.pts[0x2].y + _0xb23f13[0x3] * this.pts[0x3].y);
          };
          _0x252112.Bezier5 = function (_0x1de55b) {
            var _0x18eaf9 = 0x1 - _0x1de55b;
            var _0x6b9450 = [_0x18eaf9 * _0x18eaf9 * _0x18eaf9 * _0x18eaf9, 0x4 * _0x18eaf9 * _0x18eaf9 * _0x18eaf9 * _0x1de55b, 0x6 * _0x18eaf9 * _0x18eaf9 * _0x1de55b * _0x1de55b, 0x4 * _0x18eaf9 * _0x1de55b * _0x1de55b * _0x1de55b, _0x1de55b * _0x1de55b * _0x1de55b * _0x1de55b];
            return _0x386e5e(_0x6b9450[0x0] * this.pts[0x0].x + _0x6b9450[0x1] * this.pts[0x1].x + _0x6b9450[0x2] * this.pts[0x2].x + _0x6b9450[0x3] * this.pts[0x3].x + _0x6b9450[0x4] * this.pts[0x4].x, _0x6b9450[0x0] * this.pts[0x0].y + _0x6b9450[0x1] * this.pts[0x1].y + _0x6b9450[0x2] * this.pts[0x2].y + _0x6b9450[0x3] * this.pts[0x3].y + _0x6b9450[0x4] * this.pts[0x4].y);
          };
          _0x252112.Bezier6 = function (_0x5382c6) {
            var _0x34c9f5 = 0x1 - _0x5382c6;
            var _0xc2b5ac = [_0x34c9f5 * _0x34c9f5 * _0x34c9f5 * _0x34c9f5 * _0x34c9f5, 0x5 * _0x34c9f5 * _0x34c9f5 * _0x34c9f5 * _0x34c9f5 * _0x5382c6, 0xa * _0x34c9f5 * _0x34c9f5 * _0x34c9f5 * _0x5382c6 * _0x5382c6, 0xa * _0x34c9f5 * _0x34c9f5 * _0x5382c6 * _0x5382c6 * _0x5382c6, 0x5 * _0x34c9f5 * _0x5382c6 * _0x5382c6 * _0x5382c6 * _0x5382c6, _0x5382c6 * _0x5382c6 * _0x5382c6 * _0x5382c6 * _0x5382c6];
            return _0x386e5e(_0xc2b5ac[0x0] * this.pts[0x0].x + _0xc2b5ac[0x1] * this.pts[0x1].x + _0xc2b5ac[0x2] * this.pts[0x2].x + _0xc2b5ac[0x3] * this.pts[0x3].x + _0xc2b5ac[0x4] * this.pts[0x4].x + _0xc2b5ac[0x5] * this.pts[0x5].x, _0xc2b5ac[0x0] * this.pts[0x0].y + _0xc2b5ac[0x1] * this.pts[0x1].y + _0xc2b5ac[0x2] * this.pts[0x2].y + _0xc2b5ac[0x3] * this.pts[0x3].y + _0xc2b5ac[0x4] * this.pts[0x4].y + _0xc2b5ac[0x5] * this.pts[0x5].y);
          };
          _0x252112.BezierN = function (_0x120d5f) {
            var _0x3086b6 = 0x1 - _0x120d5f;
            var _0x2d3d71 = _0x386e5e(0x0, 0x0);
            for (var _0x2c3834 = 0x0; _0x2c3834 < this.len; _0x2c3834++) {
              var _0x54b651 = 0x1;
              for (var _0x5e6639 = 0x0; _0x5e6639 < this.len - _0x2c3834 - 0x1; _0x5e6639++) {
                _0x54b651 *= _0x3086b6;
              }
              for (var _0x373211 = 0x0; _0x373211 < _0x2c3834; _0x373211++) {
                _0x54b651 *= _0x120d5f;
              }
              _0x2d3d71.x += _0x54b651 * this.ptl[_0x2c3834] * this.pts[_0x2c3834].x;
              _0x2d3d71.y += _0x54b651 * this.ptl[_0x2c3834] * this.pts[_0x2c3834].y;
            }
            return _0x2d3d71;
          };
          return _0x4dcfaf;
        }();
        _0x106198.Bezier = _0x519294;
      })(_0x463c67 || (_0x463c67 = {}));
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "391b6CLPVhBEqeFr1f7nxDE", "index", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "2cc341S6BFCCp/z9IZHdjcC", "Game_Define", undefined);
      (function (_0xf6a114) {
        _0xf6a114[_0xf6a114.WAIT_READY = 0x0] = 'WAIT_READY';
        _0xf6a114[_0xf6a114.PLATE_SHOW = 0x1] = "PLATE_SHOW";
        _0xf6a114[_0xf6a114.FEATURE_SHOW = 0x2] = "FEATURE_SHOW";
        _0xf6a114[_0xf6a114.CONNECTION_LINE = 0x3] = "CONNECTION_LINE";
        _0xf6a114[_0xf6a114.ENTER_FREE = 0x4] = 'ENTER_FREE';
        _0xf6a114[_0xf6a114.LEAVE_FREE = 0x5] = "LEAVE_FREE";
        _0xf6a114[_0xf6a114.AWARD = 0x6] = "AWARD";
        _0xf6a114[_0xf6a114.ROUND_SHOW_END = 0x7] = "ROUND_SHOW_END";
        _0xf6a114[_0xf6a114.ROUND_END = 0x8] = 'ROUND_END';
        _0xf6a114[_0xf6a114.MAIN_GAME_WHEEL = 0x9] = "MAIN_GAME_WHEEL";
        _0xf6a114[_0xf6a114.FREE_GAME_WHEEL = 0xa] = "FREE_GAME_WHEEL";
        _0xf6a114[_0xf6a114.UNSHOW_PREPARE = 0xb] = "UNSHOW_PREPARE";
      })(_0x51b886 || (_0x51b886 = {}));
      (function (_0x546800) {
        _0x546800[_0x546800.SYMBOL_NINE = 0x0] = "SYMBOL_NINE";
        _0x546800[_0x546800.SYMBOL_TEN = 0x1] = "SYMBOL_TEN";
        _0x546800[_0x546800.SYMBOL_J = 0x2] = "SYMBOL_J";
        _0x546800[_0x546800.SYMBOL_Q = 0x3] = "SYMBOL_Q";
        _0x546800[_0x546800.SYMBOL_K = 0x4] = "SYMBOL_K";
        _0x546800[_0x546800.SYMBOL_A = 0x5] = "SYMBOL_A";
        _0x546800[_0x546800.SYMBOL_CHERRY = 0x6] = "SYMBOL_CHERRY";
        _0x546800[_0x546800.SYMBOL_GRAPE = 0x7] = "SYMBOL_GRAPE";
        _0x546800[_0x546800.SYMBOL_ORANGE = 0x8] = "SYMBOL_ORANGE";
        _0x546800[_0x546800.SYMBOL_WATERMELON = 0x9] = 'SYMBOL_WATERMELON';
        _0x546800[_0x546800.SYMBOL_SEVEN = 0xa] = "SYMBOL_SEVEN";
        _0x546800[_0x546800.SYMBOL_WILD = 0xb] = "SYMBOL_WILD";
        _0x546800[_0x546800.SYMBOL_WILD_FG = 0xc] = "SYMBOL_WILD_FG";
        _0x546800[_0x546800.WIN_FRAME = 0xd] = 'WIN_FRAME';
      })(_0x54f3fe || (_0x54f3fe = {}));
      (function (_0x4ed7d9) {
        _0x4ed7d9[_0x4ed7d9.AwardTypeNon = 0x0] = "AwardTypeNon";
        _0x4ed7d9[_0x4ed7d9.AwardTypeLine = 0x1] = "AwardTypeLine";
        _0x4ed7d9[_0x4ed7d9.AwardTypeGetFree = 0x2] = "AwardTypeGetFree";
        _0x4ed7d9[_0x4ed7d9.AwardTypeInFree = 0x4] = "AwardTypeInFree";
        _0x4ed7d9[_0x4ed7d9.AwardTypeLeaveFree = 0x8] = "AwardTypeLeaveFree";
        _0x4ed7d9[_0x4ed7d9.AwardTypeMax = 0x7fff] = "AwardTypeMax";
      })(_0x59964d || (_0x59964d = {}));
      (function (_0x2752eb) {
        _0x2752eb.Bot = "Bot";
        _0x2752eb.Mid = "Mid";
        _0x2752eb.Top = 'Top';
        _0x2752eb.None = "None";
      })(_0x19f1c6 || (_0x19f1c6 = {}));
      var _0x549b11 = function () {
        function _0x296ad1() {}
        _0x296ad1.OnExit = function () {
          this.AudioClips = {
            'Big_Win_End': null,
            'Big_Win': null,
            'ChangeWin': null,
            'Debut': null,
            'FG_BGM': null,
            'FG_End': null,
            'FG_Into': null,
            'FG_Wheel_Unlock': null,
            'FG_Wild_Extend': null,
            'FG_Wild1': null,
            'FG_Wild2': null,
            'FG_Wild3': null,
            'MG_BGM': null,
            'NearWin': null,
            'Reel_Stop': null,
            'Scatter_bell': null,
            'Scatter1': null,
            'Scatter2': null,
            'Scatter3': null,
            'Small_Win01': null,
            'Small_Win02': null,
            'Small_Win03': null,
            'Multiplier01': null,
            'Multiplier02': null,
            'Multiplier03': null,
            'Spin': null,
            'Wheel_BGM': null,
            'Wheel_End1': null,
            'Wheel_End2': null,
            'Wheel_End3': null,
            'Wheel_End_FG': null,
            'Wheel_On': null,
            'Wheel_Rotate': null,
            'Fly': null
          };
        };
        _0x296ad1.ConvertIndex2ColRow = function (_0x1f323a) {
          if (_0x1f323a >= 0x0 && _0x1f323a < _0x296ad1.COL * _0x296ad1.ROW) {
            var _0x186ad1 = _0xfc5198(-0x1, -0x1);
            _0x186ad1.y = _0x1f323a % _0x296ad1.ROW;
            _0x186ad1.x = (_0x1f323a - _0x186ad1.y) / _0x296ad1.ROW;
            return _0x186ad1;
          }
          return null;
        };
        return _0x296ad1;
      }();
      _0x549b11.Ver = '39';
      _0x549b11.EXTRA_RATE = [0x1, 1.5];
      _0x549b11.IsInFG = false;
      _0x549b11.COL = 0x5;
      _0x549b11.ROW = 0x3;
      _0x549b11.MAX_SYMBOL_SIZE = 0x1;
      _0x549b11.Symbol = _0x1c79af(_0x54f3fe);
      _0x549b11.AwardTypeFlag = _0x1c79af(_0x59964d);
      _0x549b11.AnimEventName = {
        'AnimEvetFunc': "AnimationEvent",
        'GameIntro': "GameIntro_ShowBar"
      };
      _0x549b11.FEATURE_BET_VALUE = 0xa;
      _0x549b11.CHILI_SPICY_HOT = 0x3;
      _0x549b11.MANUAL_STRINGS = ['String_01', 'String_02', "String_03"];
      _0x549b11.MANUAL_TITLE_STRING = 'String_00';
      _0x549b11.MIN_FG_SYMBOL = 0xb;
      _0x549b11.FG_ROUND = 0x8;
      _0x549b11.ExtendWildPosition = _0x1c79af(_0x19f1c6);
      _0x549b11.WILD_SYMBOL = 0xb;
      _0x549b11.WHEEL_IDLE_ROTATE_SPEED = 0.05;
      _0x549b11.WHEEL_MUL_GROUP = {
        'GROUP1': {
          'MIN': 0x2,
          'MAX': 0x5
        },
        'GROUP2': {
          'MIN': 0x7,
          'MAX': 0xa
        }
      };
      _0x549b11.SPIN_ACK_TYPE = {
        'AT_SUCCESS': 0x0,
        'AT_MONEY_NOT_ENOUGH': 0x12e,
        'AT_MONEY_ABNORMAL': 0x12d
      };
      _0x549b11.SYMBOL_MOVE_TIME = 0.2;
      _0x549b11.FALL_OVER_DISTANCE = 0x0;
      _0x549b11.BOUNCE_DISTANCE = 0xc;
      _0x549b11.SHAKE_MULTI = 0xa;
      _0x549b11.AudioFileRoot = "Sound/";
      _0x549b11.AudioFilePath = {
        'Big_Win_End': _0x549b11.AudioFileRoot + "Big_Win_End",
        'Big_Win': _0x549b11.AudioFileRoot + 'Big_Win',
        'ChangeWin': _0x549b11.AudioFileRoot + 'ChangeWin',
        'Debut': _0x549b11.AudioFileRoot + 'Debut',
        'FG_BGM': _0x549b11.AudioFileRoot + 'FG_BGM',
        'FG_End': _0x549b11.AudioFileRoot + "FG_End",
        'FG_Into': _0x549b11.AudioFileRoot + 'FG_Into',
        'FG_Wheel_Unlock': _0x549b11.AudioFileRoot + 'FG_Wheel_Unlock',
        'FG_Wild_Extend': _0x549b11.AudioFileRoot + "FG_Wild_Extend",
        'FG_Wild1': _0x549b11.AudioFileRoot + "FG_Wild1",
        'FG_Wild2': _0x549b11.AudioFileRoot + "FG_Wild2",
        'FG_Wild3': _0x549b11.AudioFileRoot + "FG_Wild3",
        'MG_BGM': _0x549b11.AudioFileRoot + "MG_BGM",
        'NearWin': _0x549b11.AudioFileRoot + "NearWin",
        'Reel_Stop': _0x549b11.AudioFileRoot + "Reel_Stop",
        'Scatter_bell': _0x549b11.AudioFileRoot + 'Scatter_bell',
        'Scatter1': _0x549b11.AudioFileRoot + "Scatter1",
        'Scatter2': _0x549b11.AudioFileRoot + "Scatter2",
        'Scatter3': _0x549b11.AudioFileRoot + "Scatter3",
        'Small_Win01': _0x549b11.AudioFileRoot + "Small_Win01",
        'Small_Win02': _0x549b11.AudioFileRoot + "Small_Win02",
        'Small_Win03': _0x549b11.AudioFileRoot + "Small_Win03",
        'Multiplier01': _0x549b11.AudioFileRoot + "Multiplier01",
        'Multiplier02': _0x549b11.AudioFileRoot + "Multiplier02",
        'Multiplier03': _0x549b11.AudioFileRoot + 'Multiplier03',
        'Spin': _0x549b11.AudioFileRoot + 'Spin',
        'Wheel_BGM': _0x549b11.AudioFileRoot + "Wheel_BGM",
        'Wheel_End1': _0x549b11.AudioFileRoot + "Wheel_End1",
        'Wheel_End2': _0x549b11.AudioFileRoot + "Wheel_End2",
        'Wheel_End3': _0x549b11.AudioFileRoot + 'Wheel_End3',
        'Wheel_End_FG': _0x549b11.AudioFileRoot + 'Wheel_End_FG',
        'Wheel_On': _0x549b11.AudioFileRoot + "Wheel_On",
        'Wheel_Rotate': _0x549b11.AudioFileRoot + "Wheel_Rotate",
        'Fly': _0x549b11.AudioFileRoot + "Fly"
      };
      _0x549b11.AudioClips = {
        'Big_Win_End': null,
        'Big_Win': null,
        'ChangeWin': null,
        'Debut': null,
        'FG_BGM': null,
        'FG_End': null,
        'FG_Into': null,
        'FG_Wheel_Unlock': null,
        'FG_Wild_Extend': null,
        'FG_Wild1': null,
        'FG_Wild2': null,
        'FG_Wild3': null,
        'MG_BGM': null,
        'NearWin': null,
        'Reel_Stop': null,
        'Scatter_bell': null,
        'Scatter1': null,
        'Scatter2': null,
        'Scatter3': null,
        'Small_Win01': null,
        'Small_Win02': null,
        'Small_Win03': null,
        'Multiplier01': null,
        'Multiplier02': null,
        'Multiplier03': null,
        'Spin': null,
        'Wheel_BGM': null,
        'Wheel_End1': null,
        'Wheel_End2': null,
        'Wheel_End3': null,
        'Wheel_End_FG': null,
        'Wheel_On': null,
        'Wheel_Rotate': null,
        'Fly': null
      };
      _0x549b11.AckType = {
        'login': 0x0,
        'exchangeChips': 0x2,
        'info': 0xb,
        'spin': 0xc,
        'heartBeat': 0x62,
        'serverMsg': 0x63
      };
      _0x549b11.SERVER_RET_TYPE = {
        'SERVER_SUCCESS': 0x0,
        'SERVER_ERROR_SEATE': 0x31f,
        'SERVER_NOUSE': 0x383,
        'SERVER_MAINTAIN': 0xe7,
        'SERVER_SHUTDOWN': 0xe8,
        'SERVER_NEED_UID': 0xe9,
        'SERVER_NEED_LOGIN': 0xea,
        'SERVER_TOKEN_ERROR': 0xeb
      };
      _0x549b11.LOGIN_RESULT_TYPE = {
        'LOGIN_SUCCESS': 0x0,
        'LOGIN_FAIL': 0x1,
        'API_VERIFY_FAIL': 0xeb,
        'API_LOGIN_REPEAT_FAIL': 0x7d2
      };
      _0x549b11.StringKey = {
        'FEATURE_LEFT': "FEATURE_LEFT",
        'FEATURE_RIGHT': 'FEATURE_RIGHT'
      };
      _0x549b11.SmallAward = [0x1, 0x3, 0x6];
      _0x549b11.MultiOdds = [0x2, 0x5, 0xa];
      _0x549b11.AWARD_SETTING = [{
        'BetRate': 0x6,
        'Lvl': 0x1
      }, {
        'BetRate': 0xf,
        'Lvl': 0x2
      }, {
        'BetRate': 0x1e,
        'Lvl': 0x3
      }];
      _0x549b11.BigWinEventName = "AnimationEvent";
      _0x549b11.BigWinSound1 = "Sound1";
      _0x549b11.BigWinSound2 = "Sound2";
      _0x549b11.BigWinStartAnimName = "BigWin_Start";
      _0x549b11.USE_ITEM_REASON = {
        'NORMAL': 0x0,
        'USING': 0x1
      };
      _0x549b11.ShowDisplayValue = null;
      _0x549b11.SpinClickEvent = 0x0;
      _0x549b11.IsUsingItem = false;
      _0x549b11.UsingItemReason = 0x0;
      _0x549b11.UsingItemRemainTimes = 0x0;
      _0x549b11.ItemAward = 0x0;
      _0x549b11.IsShowItemEnd = false;
      _0x549b11.MissionReward = 0x0;
      _0x549b11.JpType = 0x0;
      _0x549b11.JpWin = 0x0;
      _0x549b11.FullJpWin = 0x0;
      _0x549b11.FreeSpinRemain = 0x0;
      _0x549b11.FreeSpinAward = 0x0;
      _0x549b11.IsShowFreeSpinEnd = false;
      _0x549b11.IsExtraBuyMode = true;
      _0x549b11.REEL_SYMBOLS = [[0x6, 0x6, 0x1, 0x4, 0xa, 0x6, 0x4, 0x1, 0x7, 0x7, 0x8, 0x8, 0x9, 0x9, 0x4, 0x1, 0x8, 0x9, 0x7, 0x7, 0x8, 0x8, 0x8, 0xa, 0xa, 0xa, 0xa, 0xa, 0x1, 0x4, 0x8, 0x7, 0x7, 0x1, 0x9, 0x4, 0x1, 0x8, 0x8, 0x1, 0x9, 0x4, 0x1, 0x9, 0xa, 0x4, 0x1, 0x9, 0x7, 0x1, 0xa, 0x4, 0x1, 0xa, 0x8, 0x4, 0x6, 0x6, 0x0, 0x9, 0x9, 0x9, 0xa, 0x4, 0x8, 0xa, 0x9, 0x1, 0xa, 0x6, 0x6, 0x6, 0xa, 0xa, 0x6, 0x8, 0x4, 0xa, 0xa, 0xa, 0xa, 0x8, 0x7, 0x6, 0x4, 0x1, 0x9, 0x9, 0xa, 0x7, 0x7, 0x7, 0x6, 0x4, 0x7, 0x3, 0x6, 0x2, 0x5, 0x7], [0x0, 0x7, 0x2, 0x9, 0x5, 0x2, 0x9, 0x9, 0x3, 0x7, 0x7, 0x6, 0xb, 0x7, 0x7, 0x0, 0x3, 0x9, 0x9, 0xb, 0x3, 0x8, 0x8, 0x2, 0x0, 0xa, 0xa, 0xa, 0x3, 0x5, 0x6, 0xa, 0x2, 0x7, 0x5, 0x3, 0x7, 0x0, 0x3, 0x6, 0xb, 0x9, 0x5, 0x7, 0xb, 0x9, 0x3, 0x5, 0x9, 0xa, 0x2, 0x7, 0x0, 0xa, 0x2, 0x6, 0xb, 0x8, 0x5, 0xa, 0x2, 0x6, 0x3, 0x7, 0x2, 0x9, 0x0, 0x8, 0x2, 0xa, 0x4, 0x6, 0x0, 0x7, 0xb, 0x8, 0x0, 0x7, 0x3, 0x9, 0xb, 0x8, 0x2, 0xa, 0x9, 0x2, 0xa, 0x4, 0x6, 0x0, 0x7, 0x9, 0x3, 0x0, 0x7, 0x3, 0x9, 0x1, 0x8, 0x2], [0x0, 0x6, 0x7, 0xb, 0x9, 0x0, 0x3, 0x6, 0x6, 0x2, 0xb, 0x6, 0x8, 0x0, 0x3, 0x8, 0x8, 0x6, 0x5, 0xb, 0x8, 0x0, 0x3, 0x6, 0x6, 0x2, 0x3, 0x7, 0x2, 0x0, 0x8, 0x6, 0x3, 0x5, 0xa, 0x6, 0x3, 0x2, 0x7, 0x7, 0x2, 0x3, 0xa, 0x2, 0x9, 0x8, 0x0, 0xa, 0x2, 0x6, 0xb, 0x7, 0x3, 0x0, 0xa, 0x2, 0x0, 0x6, 0x3, 0x5, 0x9, 0xb, 0x6, 0x0, 0x3, 0x8, 0x8, 0x2, 0x5, 0xb, 0x8, 0x1, 0xa, 0xa, 0xa, 0x2, 0x6, 0x0, 0x2, 0x7, 0x5, 0x4, 0x9, 0x0, 0x7, 0x7, 0x3, 0x2, 0xa, 0x5, 0x9, 0x0, 0x2, 0x8, 0x8, 0x5, 0x6, 0xb, 0x8, 0x1], [0x4, 0x7, 0x7, 0x1, 0x5, 0x9, 0x3, 0xb, 0x6, 0x0, 0x2, 0xb, 0x6, 0x2, 0x8, 0x6, 0x5, 0x9, 0xb, 0x8, 0x4, 0x5, 0x7, 0x8, 0x4, 0x7, 0x0, 0xa, 0xa, 0xa, 0x1, 0x2, 0x6, 0xb, 0x8, 0x4, 0x0, 0x6, 0x6, 0xb, 0x0, 0x8, 0x3, 0x4, 0x9, 0x3, 0x5, 0x7, 0x1, 0x4, 0xb, 0x8, 0x3, 0x0, 0x9, 0x9, 0x4, 0x5, 0x7, 0xb, 0x5, 0x1, 0x7, 0x0, 0x6, 0x1, 0x9, 0x2, 0x6, 0x1, 0x9, 0x3, 0x2, 0x8, 0x8, 0x4, 0x5, 0x7, 0x8, 0x1, 0x7, 0x0, 0x3, 0x6, 0x1, 0x2, 0x9, 0x6, 0xb, 0x8, 0x0, 0xa, 0x1, 0x6, 0x2, 0x9, 0x6, 0x1, 0x9, 0x3], [0x3, 0x7, 0x4, 0x0, 0x7, 0x7, 0x7, 0x0, 0x8, 0x7, 0x6, 0xa, 0x2, 0x8, 0x4, 0x9, 0x2, 0x0, 0xa, 0x5, 0x6, 0x2, 0x0, 0x6, 0x9, 0x3, 0x6, 0x1, 0x9, 0x7, 0x5, 0x8, 0x1, 0x9, 0x9, 0x9, 0x5, 0x0, 0x6, 0x6, 0x6, 0x3, 0x8, 0x8, 0x8, 0x4, 0x2, 0x8, 0x7, 0x2, 0x4, 0x7, 0x3, 0x6, 0x4, 0x9, 0x6, 0x7, 0x9, 0x6, 0x8, 0x7, 0x4, 0xa, 0xa, 0xa, 0xa, 0xa, 0xa, 0xa, 0xa, 0xa, 0xa, 0x7, 0x5, 0x6, 0x2, 0x0, 0x6, 0x3, 0x1, 0x6, 0x1, 0x9, 0x7, 0x5, 0x8, 0x1, 0x9, 0x7, 0x8, 0x5, 0x0, 0x8, 0x7, 0x6, 0x3, 0x9, 0x6, 0xa]];
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, 'eb033pmYDhAjadYFiwbi8gp', "SpineKit", undefined);
      var _0xaa40f7 = function () {
        function _0x2e56af() {}
        _0x2e56af.ForceCancel = function (_0x143efc, _0x280b07) {
          var _0x5a768f;
          var _0x76f797;
          var _0x33005b;
          if (!(null == (_0x5a768f = this.m_cancelCbs) || null == (_0x76f797 = (_0x33005b = _0x5a768f[_0x143efc])[_0x280b07]))) {
            _0x76f797.call(_0x33005b);
          }
        };
        _0x2e56af.PlayAnimation = function (_0x1092f7, _0x27acff, _0x255948, _0x2d0c06, _0x3cab34, _0x1b4ee1) {
          var _0x44c6b3 = this;
          if (undefined === _0x255948) {
            _0x255948 = false;
          }
          if (undefined === _0x2d0c06) {
            _0x2d0c06 = 0x0;
          }
          if (undefined === _0x1b4ee1) {
            _0x1b4ee1 = true;
          }
          return new Promise(function (_0x1e6650) {
            _0x44c6b3.m_cancelCbs[_0x1092f7.name] = {};
            _0x44c6b3.m_cancelCbs[_0x1092f7.name][_0x27acff] = function () {
              _0x1e6650(true);
            };
            var _0x54622f = true;
            var _0x6994a2 = _0x1092f7.getState();
            if (_0x6994a2) {
              var _0xbf3903 = _0x6994a2.expandToIndex(_0x2d0c06);
              if (_0xbf3903) {
                var _0x262afc = _0xbf3903.animation.name + '.' + _0x27acff;
                _0x54622f = undefined === _0x6994a2.data.animationToMixTime[_0x262afc];
              }
            }
            if (_0x54622f) {
              _0x1092f7.clearTrack(_0x2d0c06);
              if (_0x1b4ee1) {
                _0x1092f7.setToSetupPose();
              }
            }
            var _0x830cae = _0x1092f7.setAnimation(_0x2d0c06, _0x27acff, _0x255948);
            if (_0x830cae) {
              _0x1092f7.setTrackEventListener(_0x830cae, function (_0x5037bb, _0x4ce803) {
                if (_0x830cae && _0x830cae.animation.name == _0x5037bb.animation.name) {
                  if (!(null == _0x3cab34)) {
                    _0x3cab34(_0x4ce803.data.name);
                  }
                }
              });
              _0x1092f7.setTrackCompleteListener(_0x830cae, function (_0x24b7ae) {
                if (_0x830cae && _0x830cae.animation.name == _0x24b7ae.animation.name) {
                  _0x1092f7.setTrackCompleteListener(_0x830cae, function () {});
                  _0x1092f7.setTrackInterruptListener(_0x830cae, function () {});
                  if (_0x44c6b3.m_cancelCbs[_0x1092f7.name] && _0x44c6b3.m_cancelCbs[_0x1092f7.name][_0x27acff]) {
                    _0x44c6b3.m_cancelCbs[_0x1092f7.name][_0x27acff] = null;
                  }
                  _0x1e6650(false);
                }
              });
              _0x1092f7.setTrackInterruptListener(_0x830cae, function (_0x1b6220) {
                if (_0x830cae && _0x830cae.animation.name == _0x1b6220.animation.name) {
                  _0x1092f7.setTrackCompleteListener(_0x830cae, function () {});
                  _0x1092f7.setTrackInterruptListener(_0x830cae, function () {});
                  if (_0x44c6b3.m_cancelCbs[_0x1092f7.name] && _0x44c6b3.m_cancelCbs[_0x1092f7.name][_0x27acff]) {
                    _0x44c6b3.m_cancelCbs[_0x1092f7.name][_0x27acff] = null;
                  }
                  _0x1e6650(true);
                }
              });
            } else {
              _0x1092f7.setCompleteListener(function () {
                _0x1092f7.setCompleteListener(null);
                _0x1092f7.setInterruptListener(null);
                if (_0x44c6b3.m_cancelCbs[_0x1092f7.name] && _0x44c6b3.m_cancelCbs[_0x1092f7.name][_0x27acff]) {
                  _0x44c6b3.m_cancelCbs[_0x1092f7.name][_0x27acff] = null;
                }
                _0x1e6650(false);
              });
              _0x1092f7.setInterruptListener(function () {
                _0x1092f7.setCompleteListener(null);
                _0x1092f7.setInterruptListener(null);
                if (_0x44c6b3.m_cancelCbs[_0x1092f7.name] && _0x44c6b3.m_cancelCbs[_0x1092f7.name][_0x27acff]) {
                  _0x44c6b3.m_cancelCbs[_0x1092f7.name][_0x27acff] = null;
                }
                _0x1e6650(true);
              });
            }
          });
        };
        return _0x2e56af;
      }();
      var _0x236fcc;
      var _0x2a5304;
      var _0x2ba9e7;
      var _0x3394c3;
      var _0x519830;
      var _0x369114;
      var _0x38beb7;
      var _0x20945d;
      var _0x33fbb5;
      var _0x1cf12c;
      _0xaa40f7.m_cancelCbs = {};
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "4e022Cv5kNCmoWHzu18nJ4o", "SymbolEffect", undefined);
      var _0x480ecf = _0x9f6cc7.ccclass;
      var _0x18480c = _0x9f6cc7.property;
      _0x236fcc = _0x18480c({
        'type': Number,
        'tooltip': 'Symbol'
      });
      _0x2a5304 = _0x18480c({
        'type': _0x44246d.Skeleton,
        'tooltip': "Symbol Spine"
      });
      _0x2ba9e7 = _0x18480c({
        'type': _0x57be55,
        'tooltip': "Symbol節點"
      });
      _0x3394c3 = _0x18480c({
        'type': _0x25028e,
        'tooltip': "Symbol動畫"
      });
      _0x1cf12c = function (_0x21e051) {
        function _0x1c5865() {
          var _0x5de94f;
          var _0x31d43a = arguments.length;
          var _0x5649a0 = new Array(_0x31d43a);
          for (var _0x46aff4 = 0x0; _0x46aff4 < _0x31d43a; _0x46aff4++) {
            _0x5649a0[_0x46aff4] = arguments[_0x46aff4];
          }
          _0x3517d5(_0x5de94f = _0x21e051.call.apply(_0x21e051, [this].concat(_0x5649a0)) || this, "m_symbol", _0x369114, _0x1862e3(_0x5de94f));
          _0x3517d5(_0x5de94f, "m_spine", _0x38beb7, _0x1862e3(_0x5de94f));
          _0x3517d5(_0x5de94f, "m_eftNode", _0x20945d, _0x1862e3(_0x5de94f));
          _0x3517d5(_0x5de94f, "m_anim", _0x33fbb5, _0x1862e3(_0x5de94f));
          return _0x5de94f;
        }
        _0x47cbbc(_0x1c5865, _0x21e051);
        var _0x737f4a = _0x1c5865.prototype;
        _0x737f4a.Init = function (_0x49e9e7) {
          this.m_symbol = _0x49e9e7;
        };
        _0x737f4a.PlayWin = function () {
          var _0x3f522a = _0x2eaa1b(_0x5266ea().mark(function _0x3c4d8c() {
            return _0x5266ea().wrap(function (_0x394f30) {
              for (;;) {
                switch (_0x394f30.prev = _0x394f30.next) {
                  case 0x0:
                    if (!this.m_spine) {
                      _0x394f30.next = 0x5;
                      break;
                    }
                    _0x394f30.next = 0x3;
                    return this.PlaySpineAnimation(_0x1c5865.AnimName.Win01, false);
                  case 0x3:
                    _0x394f30.next = 0x7;
                    break;
                  case 0x5:
                    _0x394f30.next = 0x7;
                    return this.PlayAnimation(_0x1c5865.AnimName.Symbol_Win);
                  case 0x7:
                  case 'end':
                    return _0x394f30.stop();
                }
              }
            }, _0x3c4d8c, this);
          }));
          return function () {
            return _0x3f522a.apply(this, arguments);
          };
        }();
        _0x737f4a.PlayAnimation = function () {
          var _0x352020 = _0x2eaa1b(_0x5266ea().mark(function _0x1a6314(_0xaf7f9e) {
            return _0x5266ea().wrap(function (_0x79fc07) {
              for (;;) {
                switch (_0x79fc07.prev = _0x79fc07.next) {
                  case 0x0:
                    this.m_anim.play(_0xaf7f9e);
                    _0x79fc07.next = 0x3;
                    return _0x166f61.Wait(this, this.m_anim.getState(_0xaf7f9e).duration);
                  case 0x3:
                  case "end":
                    return _0x79fc07.stop();
                }
              }
            }, _0x1a6314, this);
          }));
          return function (_0x25cb4f) {
            return _0x352020.apply(this, arguments);
          };
        }();
        _0x737f4a.PlaySpineAnimation = function () {
          var _0x22891d = _0x2eaa1b(_0x5266ea().mark(function _0x884912(_0x3476ad, _0x16a5f2) {
            return _0x5266ea().wrap(function (_0x83557c) {
              for (;;) {
                switch (_0x83557c.prev = _0x83557c.next) {
                  case 0x0:
                    _0x83557c.next = 0x2;
                    return _0xaa40f7.PlayAnimation(this.m_spine, _0x3476ad, _0x16a5f2);
                  case 0x2:
                  case "end":
                    return _0x83557c.stop();
                }
              }
            }, _0x884912, this);
          }));
          return function (_0x477873, _0x7a2e39) {
            return _0x22891d.apply(this, arguments);
          };
        }();
        _0x17689c(_0x1c5865, [{
          'key': 'Symbol',
          'get': function () {
            return this.m_symbol;
          }
        }, {
          'key': "EftNode",
          'get': function () {
            return this.m_eftNode;
          }
        }]);
        return _0x1c5865;
      }(_0x55612a);
      _0x1cf12c.AnimName = {
        'Symbol_Win': 'Symbol_Win',
        'Win01': "Win01",
        'Win02': 'Win02'
      };
      _0x369114 = _0x58cf1d(_0x1cf12c.prototype, 'm_symbol', [_0x236fcc], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return -0x1;
        }
      });
      _0x38beb7 = _0x58cf1d(_0x1cf12c.prototype, "m_spine", [_0x2a5304], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x20945d = _0x58cf1d(_0x1cf12c.prototype, "m_eftNode", [_0x2ba9e7], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x33fbb5 = _0x58cf1d(_0x1cf12c.prototype, 'm_anim', [_0x3394c3], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x3d0668 = _0x480ecf(_0x519830 = _0x1cf12c) || _0x519830;
      var _0x37f8cc;
      var _0x16cb0f;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, '2dbe9LxHWtF4qMq/joNgDmZ', "ScatterEffect", undefined);
      var _0x4bc023 = _0x9f6cc7.ccclass;
      _0x16cb0f = function (_0x379b0d) {
        function _0x581176() {
          return _0x379b0d.apply(this, arguments) || this;
        }
        _0x47cbbc(_0x581176, _0x379b0d);
        var _0x209b10 = _0x581176.prototype;
        _0x209b10.PlayStop = function () {
          var _0x439d = _0x2eaa1b(_0x5266ea().mark(function _0x3c1368() {
            return _0x5266ea().wrap(function (_0xe02126) {
              for (;;) {
                switch (_0xe02126.prev = _0xe02126.next) {
                  case 0x0:
                    _0xe02126.next = 0x2;
                    return this.PlaySpineAnimation(_0x581176.AnimName.Stop, false);
                  case 0x2:
                  case 'end':
                    return _0xe02126.stop();
                }
              }
            }, _0x3c1368, this);
          }));
          return function () {
            return _0x439d.apply(this, arguments);
          };
        }();
        _0x209b10.PlayNearWin = function () {
          var _0x5802eb = _0x2eaa1b(_0x5266ea().mark(function _0x4f503a() {
            return _0x5266ea().wrap(function (_0x34955d) {
              for (;;) {
                switch (_0x34955d.prev = _0x34955d.next) {
                  case 0x0:
                    _0x34955d.next = 0x2;
                    return this.PlaySpineAnimation(_0x581176.AnimName.NearWin, true);
                  case 0x2:
                  case "end":
                    return _0x34955d.stop();
                }
              }
            }, _0x4f503a, this);
          }));
          return function () {
            return _0x5802eb.apply(this, arguments);
          };
        }();
        _0x209b10.PlayWin02 = function () {
          var _0x7abdf = _0x2eaa1b(_0x5266ea().mark(function _0x1a7e15() {
            return _0x5266ea().wrap(function (_0xdd4f26) {
              for (;;) {
                switch (_0xdd4f26.prev = _0xdd4f26.next) {
                  case 0x0:
                    _0xdd4f26.next = 0x2;
                    return this.PlaySpineAnimation(_0x581176.AnimName.Win02, false);
                  case 0x2:
                  case "end":
                    return _0xdd4f26.stop();
                }
              }
            }, _0x1a7e15, this);
          }));
          return function () {
            return _0x7abdf.apply(this, arguments);
          };
        }();
        return _0x581176;
      }(_0x3d0668);
      _0x16cb0f.AnimName = {
        'Symbol_Win': "Symbol_Win",
        'Idle': "Idle",
        'NearWin': "NearWin",
        'Stop': "Stop",
        'Win01': "Win01",
        'Win02': "Win02"
      };
      var _0x1e9699 = _0x4bc023(_0x37f8cc = _0x16cb0f) || _0x37f8cc;
      var _0x41caec;
      var _0x3270b8;
      var _0x557c33;
      var _0x4d831e;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "70ffelDJNJIyYHwO2TbzSdM", "Spine", undefined);
      var _0x32ad96 = _0x9f6cc7.ccclass;
      var _0x36fa46 = _0x9f6cc7.property;
      _0x41caec = _0x36fa46({
        'type': _0x44246d.Skeleton,
        'tooltip': 'spine'
      });
      _0x557c33 = function (_0x59757b) {
        function _0x4a7320() {
          var _0x42d1db;
          var _0x3fb3d3 = arguments.length;
          var _0x1d3e2b = new Array(_0x3fb3d3);
          for (var _0x450ef9 = 0x0; _0x450ef9 < _0x3fb3d3; _0x450ef9++) {
            _0x1d3e2b[_0x450ef9] = arguments[_0x450ef9];
          }
          _0x3517d5(_0x42d1db = _0x59757b.call.apply(_0x59757b, [this].concat(_0x1d3e2b)) || this, 'm_spine', _0x4d831e, _0x1862e3(_0x42d1db));
          _0x42d1db.m_eventMap = {};
          return _0x42d1db;
        }
        _0x47cbbc(_0x4a7320, _0x59757b);
        var _0x5f1fb4 = _0x4a7320.prototype;
        _0x5f1fb4.SetTimeScale = function (_0xa09052) {
          this.m_spine.timeScale = _0xa09052;
        };
        _0x5f1fb4.SetEventMap = function (_0x354bad, _0x4c5e8a) {
          this.m_eventMap[_0x354bad] = _0x4c5e8a;
        };
        _0x5f1fb4.PlayAnimation = function () {
          var _0x5019c6 = _0x2eaa1b(_0x5266ea().mark(function _0x19cbdd(_0x56fc6b, _0x244405, _0x3630a9, _0x4fedc2, _0x3d35df) {
            var _0x26bc18 = this;
            return _0x5266ea().wrap(function (_0x164f57) {
              for (;;) {
                switch (_0x164f57.prev = _0x164f57.next) {
                  case 0x0:
                    if (undefined === _0x3630a9) {
                      _0x3630a9 = 0x0;
                    }
                    if (undefined === _0x4fedc2) {
                      _0x4fedc2 = "default";
                    }
                    if (undefined === _0x3d35df) {
                      _0x3d35df = true;
                    }
                    this.m_spine.setSkin(_0x4fedc2);
                    _0x164f57.next = 0x6;
                    return _0xaa40f7.PlayAnimation(this.m_spine, _0x56fc6b, _0x244405, _0x3630a9, function (_0x2370a7) {
                      if (_0x26bc18.m_eventMap[_0x2370a7]) {
                        _0x26bc18.m_eventMap[_0x2370a7]();
                      }
                    }, _0x3d35df);
                  case 0x6:
                  case 'end':
                    return _0x164f57.stop();
                }
              }
            }, _0x19cbdd, this);
          }));
          return function (_0x11b0ae, _0xec2494, _0x8bdd1, _0x3e9679, _0x4d669a) {
            return _0x5019c6.apply(this, arguments);
          };
        }();
        return _0x4a7320;
      }(_0x55612a);
      _0x4d831e = _0x58cf1d(_0x557c33.prototype, 'm_spine', [_0x41caec], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x45d7ab = _0x32ad96(_0x3270b8 = _0x557c33) || _0x3270b8;
      var _0x15d6ad;
      var _0x108312;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "b9e0e6hg91F5pQnBihHaFwG", "WinFrameSpine", undefined);
      var _0x30c591 = _0x9f6cc7.ccclass;
      _0x108312 = function (_0x357da8) {
        function _0x351f1d() {
          return _0x357da8.apply(this, arguments) || this;
        }
        _0x47cbbc(_0x351f1d, _0x357da8);
        _0x351f1d.prototype.PlayWin = function () {
          this.node.active = true;
          this.PlayAnimation(_0x351f1d.AnimName.Win, true);
        };
        _0x17689c(_0x351f1d, [{
          'key': "Node",
          'get': function () {
            return this.node;
          }
        }]);
        return _0x351f1d;
      }(_0x45d7ab);
      _0x108312.AnimName = {
        'Win': "Win"
      };
      var _0x9e0ff2 = _0x30c591(_0x15d6ad = _0x108312) || _0x15d6ad;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, 'c1f0dBgyvlCvIT81EnDRwC8', 'NodePool', undefined);
      var _0x44fd4c = function () {
        function _0x30ae7a() {
          this.m_symbolNodes = new Array();
          this.m_symbolEftPrefabs = null;
          this.m_scatterPrefabs = null;
          this.m_winFrameSpinePrefab = null;
          this.m_symbolEffects = null;
          this.m_scatterEffects = null;
          this.m_winFrameSpines = null;
          _0x30ae7a._instance = this;
        }
        _0x30ae7a.GetInstance = function () {
          return _0x30ae7a._instance;
        };
        var _0x5743de = _0x30ae7a.prototype;
        _0x5743de.GetSymbolNode = function () {
          if (this.m_symbolNodes.length > 0x0) {
            return this.m_symbolNodes.shift();
          }
          var _0x29c43c = new _0x57be55();
          _0x29c43c.addComponent(_0x57e8d7);
          return _0x29c43c;
        };
        _0x5743de.ReturnSymbolNode = function (_0x7284d7) {
          if (_0x7284d7) {
            this.m_symbolNodes.push(_0x7284d7);
          }
        };
        _0x5743de.SetSymbolEffectPrefabs = function (_0x39d415) {
          this.m_symbolEftPrefabs = _0x39d415;
          this.m_symbolEffects = new Array();
          for (var _0x3c1a78 = 0x0; _0x3c1a78 < _0x39d415.length; _0x3c1a78++) {
            this.m_symbolEffects.push(new Array());
          }
        };
        _0x5743de.SetScatterEffectPrefabs = function (_0xb31740) {
          this.m_scatterPrefabs = _0xb31740;
          this.m_scatterEffects = new Array();
          for (var _0x3d6a58 = 0x0; _0x3d6a58 < _0xb31740.length; _0x3d6a58++) {
            this.m_scatterEffects.push(new Array());
          }
        };
        _0x5743de.SetWinFrameSpinePrefab = function (_0x232131) {
          this.m_winFrameSpinePrefab = _0x232131;
          this.m_winFrameSpines = new Array();
        };
        _0x5743de.GetSymbolEffectNode = function (_0x509a77) {
          if (this.m_symbolEffects[_0x509a77]) {
            return this.m_symbolEffects[_0x509a77].length > 0x0 ? this.m_symbolEffects[_0x509a77].shift() : _0x55e2b5(this.m_symbolEftPrefabs[_0x509a77]).getComponent(_0x3d0668);
          }
        };
        _0x5743de.ReturnSymbolEffect = function (_0x454358) {
          if (this.m_symbolEffects[_0x454358.Symbol]) {
            this.m_symbolEffects[_0x454358.Symbol].push(_0x454358);
          }
        };
        _0x5743de.GetScatterEffectNode = function (_0x4518c2) {
          var _0x280b55 = _0x4518c2 - _0x549b11.MIN_FG_SYMBOL;
          if (this.m_scatterEffects[_0x280b55]) {
            if (this.m_scatterEffects[_0x280b55].length > 0x0) {
              return this.m_scatterEffects[_0x280b55].shift();
            }
            var _0xc6006d = _0x55e2b5(this.m_scatterPrefabs[_0x280b55]).getComponent(_0x1e9699);
            _0xc6006d.Init(_0x4518c2);
            return _0xc6006d;
          }
        };
        _0x5743de.ReturnScatterEffect = function (_0x10e07e) {
          var _0xef5436 = _0x10e07e.Symbol - _0x549b11.MIN_FG_SYMBOL;
          if (this.m_scatterEffects[_0xef5436]) {
            this.m_scatterEffects[_0xef5436].push(_0x10e07e);
          }
        };
        _0x5743de.GetWinFrameSpineNode = function () {
          return this.m_winFrameSpines.length > 0x0 ? this.m_winFrameSpines.shift() : _0x55e2b5(this.m_winFrameSpinePrefab).getComponent(_0x9e0ff2);
        };
        _0x5743de.ReturnWinFrameSpine = function (_0x3e7905) {
          this.m_winFrameSpines.push(_0x3e7905);
        };
        return _0x30ae7a;
      }();
      _0x44fd4c._instance = new _0x44fd4c();
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "b2fe4/4eutDeqO3GEyJkWKA", "ColumnSymbol", undefined);
      var _0xdf866d = function (_0x47171d) {
        function _0x37aaa4() {
          var _0xfa6236;
          var _0x4b5caa = arguments.length;
          var _0x3d86e9 = new Array(_0x4b5caa);
          for (var _0x1f355e = 0x0; _0x1f355e < _0x4b5caa; _0x1f355e++) {
            _0x3d86e9[_0x1f355e] = arguments[_0x1f355e];
          }
          (_0xfa6236 = _0x47171d.call.apply(_0x47171d, [this].concat(_0x3d86e9)) || this).m_singleSpace = 0x0;
          _0xfa6236.m_symbolNodes = new Array();
          _0xfa6236.m_data = null;
          _0xfa6236.m_slotReels = null;
          return _0xfa6236;
        }
        _0x47cbbc(_0x37aaa4, _0x47171d);
        var _0x48d173 = _0x37aaa4.prototype;
        _0x48d173.Init = function (_0x18a6de, _0x40aa1a, _0x481fab) {
          this.m_slotReels = _0x18a6de;
          this.m_singleSpace = _0xfd5517.divide(_0x40aa1a, _0x549b11.ROW);
          this.m_data = _0x481fab;
          for (var _0x3907ce = 0x0; _0x3907ce < _0x481fab.length; _0x3907ce++) {
            var _0x3a2c08 = _0x44fd4c.GetInstance().GetSymbolNode();
            this.addChild(_0x3a2c08);
            this.m_symbolNodes[_0x3907ce] = _0x3a2c08;
          }
          this.SetSymbols(_0x481fab);
        };
        _0x48d173.SetSymbol = function (_0x2b9791, _0x5520cd) {
          if (!(null === this.m_symbolNodes[_0x2b9791] && undefined === this.m_symbolNodes[_0x2b9791] || null === this.m_data[_0x2b9791] && undefined === this.m_data[_0x2b9791])) {
            this.SetColor(this.m_symbolNodes[_0x2b9791], 0xff);
            var _0x332ff8 = this.m_symbolNodes[_0x2b9791].getComponent(_0x57e8d7);
            _0x332ff8.type = _0x57e8d7.Type.SIMPLE;
            _0x332ff8.sizeMode = _0x57e8d7.SizeMode.RAW;
            _0x332ff8.trim = false;
            if (!_0x332ff8) {
              _0x332ff8 = this.m_symbolNodes[_0x2b9791].addComponent(_0x57e8d7);
            }
            _0x332ff8.spriteFrame = this.m_slotReels.GetSymbolSpriteFrame(_0x5520cd);
            this.m_data[_0x2b9791] = _0x5520cd;
          }
        };
        _0x48d173.GetSymbol = function (_0x246623) {
          return this.m_symbolNodes[_0x246623] ? this.m_symbolNodes[_0x246623] : null;
        };
        _0x48d173.SetSymbols = function (_0x2e31ac) {
          this.m_data = _0x2e31ac;
          var _0x3fd934 = 0x2;
          for (var _0x1578f = 0x0; _0x1578f < _0x2e31ac.length; _0x1578f++) {
            if (!this.m_symbolNodes[_0x1578f]) {
              this.m_symbolNodes[_0x1578f] = this.GetNewSymbolNode();
            }
            this.SetSymbol(_0x1578f, _0x2e31ac[_0x1578f]);
            this.m_symbolNodes[_0x1578f].setPosition(this.CalPosition(0x1, _0x3fd934));
            _0x3fd934--;
          }
        };
        _0x48d173.SetDark = function (_0x298ab2, _0xacf3dd, _0x565a7e) {
          if (undefined === _0xacf3dd) {
            _0xacf3dd = 0x0;
          }
          if (undefined === _0x565a7e) {
            _0x565a7e = this.m_data.length;
          }
          for (var _0x5a29fd = _0xacf3dd; _0x5a29fd < _0x565a7e; _0x5a29fd++) {
            var _0x3defb1 = _0x298ab2 ? 0x78 : 0xff;
            if (this.m_symbolNodes[_0x5a29fd].active) {
              this.SetColor(this.m_symbolNodes[_0x5a29fd], _0x3defb1);
            }
          }
        };
        _0x48d173.SetActive = function (_0x20e607) {
          for (var _0x376cb7 = 0x0; _0x376cb7 < this.m_symbolNodes.length; _0x376cb7++) {
            this.m_symbolNodes[_0x376cb7].active = _0x20e607;
          }
        };
        _0x48d173.CalPosition = function (_0x52f61e, _0x4460b1) {
          var _0x37ddf7 = _0xfd5517.times(_0x52f61e, this.m_singleSpace);
          var _0x1b1a3a = _0xfd5517.plus(_0xfd5517.times(_0x4460b1, this.m_singleSpace), _0xfd5517.divide(_0x37ddf7, 0x2));
          return _0x386e5e(0x0, _0x1b1a3a, 0x0);
        };
        _0x48d173.GetNewSymbolNode = function () {
          var _0x1327fb = _0x44fd4c.GetInstance().GetSymbolNode();
          if (!_0x1327fb.parent) {
            this.addChild(_0x1327fb);
          }
          return _0x1327fb;
        };
        _0x48d173.SetColor = function (_0x5615aa, _0x128359) {
          if (_0x5615aa.getComponent(_0x33a4bc)) {
            _0x5615aa.getComponent(_0x33a4bc).color = _0x6f337e(_0x128359, _0x128359, _0x128359);
          }
        };
        return _0x37aaa4;
      }(_0x57be55);
      var _0x2298e0;
      var _0x21fabd;
      var _0x456c92;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "3cc57w+y0pPhI3IUfNozT30", "CommonEffect", undefined);
      (function (_0x4bbb8f) {
        var _0x109f3c = function () {
          function _0xbd2510() {}
          _0xbd2510.PascalTriangleLine = function (_0x1d09b7) {
            var _0x42f6a5 = [0x1];
            for (var _0x5b2d53 = 0x1; _0x5b2d53 < _0x1d09b7; _0x5b2d53++) {
              _0x42f6a5[_0x5b2d53] = _0x42f6a5[_0x5b2d53 - 0x1] * (_0x1d09b7 - _0x5b2d53) / _0x5b2d53;
            }
            return _0x42f6a5;
          };
          _0xbd2510.RangedRandom = function (_0x4990db, _0x33867c) {
            return (_0x33867c - _0x4990db) * Math.random() + _0x4990db;
          };
          _0xbd2510.GetRandomRectPos = function (_0x502ca9, _0x3bd04d, _0x11957e) {
            var _0x4799a9 = _0xfc5198(this.RangedRandom(-_0x3bd04d.x, _0x3bd04d.x) / 0x2 | 0x0, this.RangedRandom(-_0x3bd04d.x, _0x3bd04d.x) / 0x2 | 0x0).rotate(_0x11957e * _0x399ac0.RAD);
            return _0x502ca9.add(_0x4799a9);
          };
          _0xbd2510.GetRandomOvalPos = function (_0x5817e2, _0x454bf7, _0x1382af) {
            var _0x5a814a = _0x454bf7.y / Math.max(0x1, _0x454bf7.x);
            var _0xa4cabb = Math.random() * _0x454bf7.x * 0.5;
            var _0xef562e = Math.random() * Math.PI * 0x2;
            var _0x314a4a = _0xfc5198(_0xa4cabb * Math.cos(_0xef562e), _0xa4cabb * Math.sin(_0xef562e) * _0x5a814a).rotate(_0x1382af * _0x399ac0.RAD);
            return _0x5817e2.add(_0x314a4a);
          };
          _0xbd2510.ZoomAndFlip = function (_0x110d8f, _0x1ef78f, _0x232c4e, _0x8fdd5e) {
            var _0x2488df = Math.sin(_0x8fdd5e * Math.PI) * (_0x1ef78f - _0x110d8f) + _0x110d8f;
            var _0x3c51f5 = Math.cos(_0x8fdd5e * Math.PI * _0x232c4e);
            return _0xfc5198(_0x2488df * _0x3c51f5, _0x2488df);
          };
          return _0xbd2510;
        }();
        _0x4bbb8f.ExtendsMath = _0x109f3c;
        var _0x1ed9fe = function () {
          function _0x447b06(_0x2d0f71) {
            this.pts = null;
            this.len = 0x0;
            this.ptl = null;
            this.bez = null;
            this.len = _0x2d0f71.length;
            if (0x0 == this.len) {
              _0x2d0f71.push(_0x386e5e(0x0, 0x0));
              _0x2d0f71.push(_0x386e5e(0x0, 0x0));
            } else if (0x1 == this.len) {
              _0x2d0f71.push(_0x386e5e(_0x2d0f71[0x0].x, _0x2d0f71[0x0].y));
            }
            this.pts = _0x2d0f71;
            switch (this.len) {
              case 0x2:
                this.bez = this.Bezier2;
                break;
              case 0x3:
                this.bez = this.Bezier3;
                break;
              case 0x4:
                this.bez = this.Bezier4;
                break;
              case 0x5:
                this.bez = this.Bezier5;
                break;
              case 0x6:
                this.bez = this.Bezier6;
                break;
              default:
                this.ptl = _0x109f3c.PascalTriangleLine(this.len);
                this.bez = this.BezierN;
            }
          }
          var _0x3d2a3d = _0x447b06.prototype;
          _0x3d2a3d.GetPosition = function (_0x470d97) {
            return this.bez.apply(this, [_0x470d97]);
          };
          _0x3d2a3d.Bezier2 = function (_0x108d83) {
            var _0x4552b6 = 0x1 - _0x108d83;
            return _0x386e5e(_0x4552b6 * this.pts[0x0].x + _0x108d83 * this.pts[0x1].x, _0x4552b6 * this.pts[0x0].y + _0x108d83 * this.pts[0x1].y);
          };
          _0x3d2a3d.Bezier3 = function (_0x5b9d7e) {
            var _0x87507 = 0x1 - _0x5b9d7e;
            var _0x571538 = [_0x87507 * _0x87507, 0x2 * _0x87507 * _0x5b9d7e, _0x5b9d7e * _0x5b9d7e];
            return _0x386e5e(_0x571538[0x0] * this.pts[0x0].x + _0x571538[0x1] * this.pts[0x1].x + _0x571538[0x2] * this.pts[0x2].x, _0x571538[0x0] * this.pts[0x0].y + _0x571538[0x1] * this.pts[0x1].y + _0x571538[0x2] * this.pts[0x2].y);
          };
          _0x3d2a3d.Bezier4 = function (_0x5cf286) {
            var _0x18d476 = 0x1 - _0x5cf286;
            var _0x3c152a = [_0x18d476 * _0x18d476 * _0x18d476, 0x3 * _0x18d476 * _0x18d476 * _0x5cf286, 0x3 * _0x18d476 * _0x5cf286 * _0x5cf286, _0x5cf286 * _0x5cf286 * _0x5cf286];
            return _0x386e5e(_0x3c152a[0x0] * this.pts[0x0].x + _0x3c152a[0x1] * this.pts[0x1].x + _0x3c152a[0x2] * this.pts[0x2].x + _0x3c152a[0x3] * this.pts[0x3].x, _0x3c152a[0x0] * this.pts[0x0].y + _0x3c152a[0x1] * this.pts[0x1].y + _0x3c152a[0x2] * this.pts[0x2].y + _0x3c152a[0x3] * this.pts[0x3].y);
          };
          _0x3d2a3d.Bezier5 = function (_0x391ab8) {
            var _0x59ed8c = 0x1 - _0x391ab8;
            var _0x469414 = [_0x59ed8c * _0x59ed8c * _0x59ed8c * _0x59ed8c, 0x4 * _0x59ed8c * _0x59ed8c * _0x59ed8c * _0x391ab8, 0x6 * _0x59ed8c * _0x59ed8c * _0x391ab8 * _0x391ab8, 0x4 * _0x59ed8c * _0x391ab8 * _0x391ab8 * _0x391ab8, _0x391ab8 * _0x391ab8 * _0x391ab8 * _0x391ab8];
            return _0x386e5e(_0x469414[0x0] * this.pts[0x0].x + _0x469414[0x1] * this.pts[0x1].x + _0x469414[0x2] * this.pts[0x2].x + _0x469414[0x3] * this.pts[0x3].x + _0x469414[0x4] * this.pts[0x4].x, _0x469414[0x0] * this.pts[0x0].y + _0x469414[0x1] * this.pts[0x1].y + _0x469414[0x2] * this.pts[0x2].y + _0x469414[0x3] * this.pts[0x3].y + _0x469414[0x4] * this.pts[0x4].y);
          };
          _0x3d2a3d.Bezier6 = function (_0x38a058) {
            var _0x4d6cab = 0x1 - _0x38a058;
            var _0x4f11e5 = [_0x4d6cab * _0x4d6cab * _0x4d6cab * _0x4d6cab * _0x4d6cab, 0x5 * _0x4d6cab * _0x4d6cab * _0x4d6cab * _0x4d6cab * _0x38a058, 0xa * _0x4d6cab * _0x4d6cab * _0x4d6cab * _0x38a058 * _0x38a058, 0xa * _0x4d6cab * _0x4d6cab * _0x38a058 * _0x38a058 * _0x38a058, 0x5 * _0x4d6cab * _0x38a058 * _0x38a058 * _0x38a058 * _0x38a058, _0x38a058 * _0x38a058 * _0x38a058 * _0x38a058 * _0x38a058];
            return _0x386e5e(_0x4f11e5[0x0] * this.pts[0x0].x + _0x4f11e5[0x1] * this.pts[0x1].x + _0x4f11e5[0x2] * this.pts[0x2].x + _0x4f11e5[0x3] * this.pts[0x3].x + _0x4f11e5[0x4] * this.pts[0x4].x + _0x4f11e5[0x5] * this.pts[0x5].x, _0x4f11e5[0x0] * this.pts[0x0].y + _0x4f11e5[0x1] * this.pts[0x1].y + _0x4f11e5[0x2] * this.pts[0x2].y + _0x4f11e5[0x3] * this.pts[0x3].y + _0x4f11e5[0x4] * this.pts[0x4].y + _0x4f11e5[0x5] * this.pts[0x5].y);
          };
          _0x3d2a3d.BezierN = function (_0x60a65e) {
            var _0x3144b4 = 0x1 - _0x60a65e;
            var _0x1a6ca1 = _0x386e5e(0x0, 0x0);
            for (var _0x39a67b = 0x0; _0x39a67b < this.len; _0x39a67b++) {
              var _0x2eed8a = 0x1;
              for (var _0x13ae75 = 0x0; _0x13ae75 < this.len - _0x39a67b - 0x1; _0x13ae75++) {
                _0x2eed8a *= _0x3144b4;
              }
              for (var _0x190414 = 0x0; _0x190414 < _0x39a67b; _0x190414++) {
                _0x2eed8a *= _0x60a65e;
              }
              _0x1a6ca1.x += _0x2eed8a * this.ptl[_0x39a67b] * this.pts[_0x39a67b].x;
              _0x1a6ca1.y += _0x2eed8a * this.ptl[_0x39a67b] * this.pts[_0x39a67b].y;
            }
            return _0x1a6ca1;
          };
          return _0x447b06;
        }();
        _0x4bbb8f.Bezier = _0x1ed9fe;
      })(_0x2298e0 || (_0x2298e0 = {}));
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "2c465urF+5E6a8SAy0Y1679", 'AppManager', undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "01a4bCeOlRFS4PxU4ftD5wn", 'BackpackManager', undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "e98d6g3Sn5F/phbS0JGqk6v", "BuyBonusManager", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, '810fcmXyb9Bu4OzTZmIkoz9', "CommonGameManager", undefined);
      (function (_0xf8313c) {
        _0xf8313c[_0xf8313c.Get = 0x0] = "Get";
        _0xf8313c[_0xf8313c.Post = 0x1] = "Post";
      })(_0x21fabd || (_0x21fabd = {}));
      (function (_0x2c41dc) {
        _0x2c41dc[_0x2c41dc.Ignore = 0x0] = "Ignore";
        _0x2c41dc[_0x2c41dc.Handle = 0x1] = 'Handle';
      })(_0x456c92 || (_0x456c92 = {}));
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "0e324Erw0JDW6aCYO5d0i2g", "DailyMissionManager", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "dd020H2ox5CQ70Z9VNWXYpK", "DebrisManager", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "1fcfdTjgMdDr4mh99NzZ29B", "GaiaManager", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "a3f63TygSlA6KwEkLDlQIoJ", "GiftCodeManager", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, '9692fSvI0xNR5GVPmbcEfzq', 'IframeCommandManager', undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, 'd8221PEwlRBep+hz+x7w5Ot', "NewBottomBarManager", undefined);
      var _0x38797b;
      var _0x369027;
      var _0x36e33f;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "28748R+s5pCY7kwYZ0zkqKk", 'NewExtraManager', undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "861e1J/bwRGlI4J13TOOh4y", "TrialManager", undefined);
      (function (_0x15e21c) {
        _0x15e21c[_0x15e21c.None = 0x0] = "None";
        _0x15e21c[_0x15e21c.Playing = 0x1] = "Playing";
        _0x15e21c[_0x15e21c.Item = 0x2] = "Item";
      })(_0x369027 || (_0x369027 = {}));
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "0f3df9al6NIJJ1/5ZP5aShG", "MsgBoxManager", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "8de065l1yBCNoeRGxK2yzaD", "StateManager", undefined);
      var _0x312ac0;
      var _0x39a0c9;
      var _0x378220;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "c7e3d4LY9dOUokI+wu7YgCQ", "AutoShowManager", undefined);
      (function (_0x137845) {
        _0x137845[_0x137845.SKY_BAR = 0x0] = 'SKY_BAR';
        _0x137845[_0x137845.PAYTABLE = 0x1] = "PAYTABLE";
        _0x137845[_0x137845.LANDING = 0x2] = "LANDING";
        _0x137845[_0x137845.DISCOUNT = 0x3] = "DISCOUNT";
        _0x137845[_0x137845.EXTRA_BET = 0x4] = "EXTRA_BET";
        _0x137845[_0x137845.ICONBOX = 0x5] = "ICONBOX";
      })(_0x312ac0 || (_0x312ac0 = {}));
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "d388f5XkRRFcYXg5usnXTa/", "LocaleStringManager", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "077a5gmYEpIQqr+YOtt+g08", "LocalStorageManager", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, '8c0f7IX3HNLY6BaWiL8u0j4', 'SoundManager', undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "50f8dtxxuFDo6qJW6FBFBaO", "EventManager", undefined);
      var _0x9fe98;
      var _0x55d48d;
      var _0x306555;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "18947v7ICNDlYz3G5vE642k", "LoadPrefabManager", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "de7f6JwfsBHBYba0UlqLoFI", 'NotificationManager', undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "81438uBGiNJXoDkKAmuxEJu", 'FunctionControlManager', undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, '3e41doUMVNLQbg53Jn6N9ch', "SoundAudioManager", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, 'cfe9e3/byhFGL1S1brGrbPU', 'DebugManager', undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, '858d45NBqBLW5W3J41WER1G', "index", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "da8b5WCDchHLbI01pEpSkGq", 'ComplimentSpine', undefined);
      var _0x2e8813 = _0x9f6cc7.ccclass;
      _0x306555 = function (_0x5bf68f) {
        function _0x4b5708() {
          return _0x5bf68f.apply(this, arguments) || this;
        }
        _0x47cbbc(_0x4b5708, _0x5bf68f);
        var _0xaf99f6 = _0x4b5708.prototype;
        _0xaf99f6.PlayStart = function () {
          var _0xc7437c = _0x2eaa1b(_0x5266ea().mark(function _0x4d1429() {
            return _0x5266ea().wrap(function (_0xb91cfc) {
              for (;;) {
                switch (_0xb91cfc.prev = _0xb91cfc.next) {
                  case 0x0:
                    _0xb91cfc.next = 0x2;
                    return this.PlayAnimation(_0x4b5708.AnimName.Start, false);
                  case 0x2:
                  case "end":
                    return _0xb91cfc.stop();
                }
              }
            }, _0x4d1429, this);
          }));
          return function () {
            return _0xc7437c.apply(this, arguments);
          };
        }();
        _0xaf99f6.PlayLoop = function () {
          var _0x4ee75b = _0x2eaa1b(_0x5266ea().mark(function _0x4b8f39() {
            return _0x5266ea().wrap(function (_0x46a254) {
              for (;;) {
                switch (_0x46a254.prev = _0x46a254.next) {
                  case 0x0:
                    _0x46a254.next = 0x2;
                    return this.PlayAnimation(_0x4b5708.AnimName.Loop, false);
                  case 0x2:
                  case 'end':
                    return _0x46a254.stop();
                }
              }
            }, _0x4b8f39, this);
          }));
          return function () {
            return _0x4ee75b.apply(this, arguments);
          };
        }();
        _0xaf99f6.PlayEnd = function () {
          var _0x50dddc = _0x2eaa1b(_0x5266ea().mark(function _0x4bd3fa(_0x4f8824) {
            return _0x5266ea().wrap(function (_0x1e4489) {
              for (;;) {
                switch (_0x1e4489.prev = _0x1e4489.next) {
                  case 0x0:
                    if (!_0x4f8824) {
                      _0x1e4489.next = 0x5;
                      break;
                    }
                    _0x1e4489.next = 0x3;
                    return this.PlayAnimation(_0x4b5708.AnimName.End_L, false);
                  case 0x3:
                    _0x1e4489.next = 0x7;
                    break;
                  case 0x5:
                    _0x1e4489.next = 0x7;
                    return this.PlayAnimation(_0x4b5708.AnimName.End_S, false);
                  case 0x7:
                  case "end":
                    return _0x1e4489.stop();
                }
              }
            }, _0x4bd3fa, this);
          }));
          return function (_0x52b484) {
            return _0x50dddc.apply(this, arguments);
          };
        }();
        return _0x4b5708;
      }(_0x45d7ab);
      _0x306555.AnimName = {
        'Start': "Start",
        'Loop': "Loop",
        'End_L': 'End_L',
        'End_S': "End_S"
      };
      var _0x29e87a = _0x2e8813(_0x55d48d = _0x306555) || _0x55d48d;
      var _0x10c230;
      var _0x276320;
      var _0x7f31fc;
      var _0x547e1b;
      var _0xa25665;
      var _0x597908;
      var _0x24cb75;
      var _0x2a0371;
      var _0x1da541;
      var _0x983dba;
      var _0x2839c5;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "c3265ljfvZFjq9qHV60aJPV", "Compliment", undefined);
      var _0x5d2d1e = _0x9f6cc7.property;
      _0x10c230 = _0x5d2d1e({
        'type': _0x29e87a,
        'tooltip': '動畫'
      });
      _0x276320 = _0x5d2d1e({
        'type': _0x4134c8,
        'tooltip': '贏分'
      });
      _0x7f31fc = _0x5d2d1e({
        'type': _0x57e8d7,
        'tooltip': "恭喜大標題"
      });
      _0x547e1b = _0x5d2d1e({
        'type': _0x4134c8,
        'tooltip': '局數'
      });
      _0xa25665 = _0x5d2d1e({
        'type': _0x57e8d7,
        'tooltip': 'FG'
      });
      _0x597908 = function (_0x5117f7) {
        function _0x314b61() {
          var _0x37b8ca;
          var _0xfa5d95 = arguments.length;
          var _0x33ab53 = new Array(_0xfa5d95);
          for (var _0x29eab7 = 0x0; _0x29eab7 < _0xfa5d95; _0x29eab7++) {
            _0x33ab53[_0x29eab7] = arguments[_0x29eab7];
          }
          _0x3517d5(_0x37b8ca = _0x5117f7.call.apply(_0x5117f7, [this].concat(_0x33ab53)) || this, "m_complimentSpine", _0x24cb75, _0x1862e3(_0x37b8ca));
          _0x3517d5(_0x37b8ca, "m_winLabel", _0x2a0371, _0x1862e3(_0x37b8ca));
          _0x3517d5(_0x37b8ca, 'm_congratSprite', _0x1da541, _0x1862e3(_0x37b8ca));
          _0x3517d5(_0x37b8ca, "m_roundLabel", _0x983dba, _0x1862e3(_0x37b8ca));
          _0x3517d5(_0x37b8ca, "m_fgSprite", _0x2839c5, _0x1862e3(_0x37b8ca));
          return _0x37b8ca;
        }
        _0x47cbbc(_0x314b61, _0x5117f7);
        var _0xe59df5 = _0x314b61.prototype;
        _0xe59df5.SetTxt = function () {
          var _0x527549 = _0x39a0c9.GetGameAtlas();
          this.m_congratSprite.spriteFrame = _0x527549.getSpriteFrame('FG_txt_01');
          this.m_fgSprite.spriteFrame = _0x527549.getSpriteFrame("FG_txt_04");
        };
        _0xe59df5.PlayStart = function () {
          var _0x275941 = _0x2eaa1b(_0x5266ea().mark(function _0x598cbb(_0x36dfd8) {
            var _0x1e0a76;
            var _0x5c7741;
            var _0x40ffa5;
            var _0x5b757c;
            var _0x6cc61e = this;
            return _0x5266ea().wrap(function (_0x48a875) {
              for (;;) {
                switch (_0x48a875.prev = _0x48a875.next) {
                  case 0x0:
                    this.m_winLabel.node.active = true;
                    this.m_congratSprite.node.active = true;
                    this.m_roundLabel.node.active = true;
                    this.m_fgSprite.node.active = true;
                    this.m_roundLabel.string = _0x549b11.FG_ROUND.toString();
                    _0x1e0a76 = _0xfd5517.FORMAT_NUMBER_TYPE.NONE_DOT;
                    if (_0x36dfd8 < 0x3e8) {
                      _0x1e0a76 = _0xfd5517.FORMAT_NUMBER_TYPE.PERMANENT_DOT;
                    }
                    this.m_winLabel.string = '0';
                    this.node.active = true;
                    this.m_complimentSpine.PlayStart();
                    0x5;
                    0x4;
                    _0x5c7741 = 0x0;
                    _0x40ffa5 = _0xfd5517.divide(3.5, 0.02);
                    _0x5b757c = _0xfd5517.divide(_0x36dfd8, _0x40ffa5);
                    _0x5a1279(this.node).repeat(_0x40ffa5, _0x5a1279().call(function () {
                      if ((_0x5c7741 += _0x5b757c) >= _0x36dfd8) {
                        _0x5c7741 = _0x36dfd8;
                      }
                      var _0x5ae159 = _0x549b11.ShowDisplayValue ? _0x549b11.ShowDisplayValue(_0x5c7741) : _0x5c7741;
                      _0x6cc61e.m_winLabel.string = _0xfd5517.FormatNumberThousands(_0x5ae159, _0x1e0a76);
                    }).delay(0.02)).call(function () {
                      var _0x4c7570 = _0x549b11.ShowDisplayValue ? _0x549b11.ShowDisplayValue(_0x36dfd8) : _0x36dfd8;
                      _0x6cc61e.m_winLabel.string = _0xfd5517.FormatNumberThousands(_0x4c7570, _0x1e0a76);
                    }).start();
                    _0x48a875.next = 0x12;
                    return _0x166f61.Wait(this, 0x5);
                  case 0x12:
                  case 'end':
                    return _0x48a875.stop();
                }
              }
            }, _0x598cbb, this);
          }));
          return function (_0x3ffb93) {
            return _0x275941.apply(this, arguments);
          };
        }();
        _0xe59df5.PlayLoop = function () {
          var _0x483899 = _0x2eaa1b(_0x5266ea().mark(function _0x1848a6() {
            return _0x5266ea().wrap(function (_0x4a46f7) {
              for (;;) {
                switch (_0x4a46f7.prev = _0x4a46f7.next) {
                  case 0x0:
                    _0x4a46f7.next = 0x2;
                    return this.m_complimentSpine.PlayLoop();
                  case 0x2:
                  case "end":
                    return _0x4a46f7.stop();
                }
              }
            }, _0x1848a6, this);
          }));
          return function () {
            return _0x483899.apply(this, arguments);
          };
        }();
        _0xe59df5.PlayEnd = function () {
          var _0x12b975 = _0x2eaa1b(_0x5266ea().mark(function _0x5dcff0(_0x3aa3af, _0x302721) {
            return _0x5266ea().wrap(function (_0x2d225c) {
              for (;;) {
                switch (_0x2d225c.prev = _0x2d225c.next) {
                  case 0x0:
                    this.m_winLabel.node.active = false;
                    this.m_congratSprite.node.active = false;
                    this.m_roundLabel.node.active = false;
                    this.m_fgSprite.node.active = false;
                    this.m_complimentSpine.SetEventMap('Trans', _0x302721);
                    _0x2d225c.next = 0x7;
                    return this.m_complimentSpine.PlayEnd(_0x3aa3af);
                  case 0x7:
                    this.node.active = false;
                  case 0x8:
                  case "end":
                    return _0x2d225c.stop();
                }
              }
            }, _0x5dcff0, this);
          }));
          return function (_0x378736, _0x2ede33) {
            return _0x12b975.apply(this, arguments);
          };
        }();
        return _0x314b61;
      }(_0x55612a);
      _0x24cb75 = _0x58cf1d(_0x597908.prototype, "m_complimentSpine", [_0x10c230], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2a0371 = _0x58cf1d(_0x597908.prototype, "m_winLabel", [_0x276320], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1da541 = _0x58cf1d(_0x597908.prototype, "m_congratSprite", [_0x7f31fc], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x983dba = _0x58cf1d(_0x597908.prototype, "m_roundLabel", [_0x547e1b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2839c5 = _0x58cf1d(_0x597908.prototype, "m_fgSprite", [_0xa25665], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x189311;
      var _0x256772;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, '5d1c8vvN8JOiKJkqmUI0aVQ', 'CounterFxSpine', undefined);
      var _0x4778de = _0x9f6cc7.ccclass;
      _0x256772 = function (_0x8d0c00) {
        function _0x3286ef() {
          return _0x8d0c00.apply(this, arguments) || this;
        }
        _0x47cbbc(_0x3286ef, _0x8d0c00);
        _0x3286ef.prototype.PlayMGIdle = function () {
          this.PlayAnimation(_0x3286ef.AnimName.Idle, true);
        };
        return _0x3286ef;
      }(_0x45d7ab);
      _0x256772.AnimName = {
        'Idle': 'Idle'
      };
      var _0x544cd7 = _0x4778de(_0x189311 = _0x256772) || _0x189311;
      var _0x1c864a;
      var _0x1bc2ff;
      var _0x25ddeb;
      var _0x1d8225;
      var _0x1d87cb;
      var _0x2c1f19;
      var _0x4d33d8;
      var _0x4c7b4c;
      var _0xd87608;
      var _0x58b8ac;
      var _0x4b5aa3;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, '84dacg1Q9lOnZbHgKdzkA09', "Counter", undefined);
      var _0x55098e = _0x9f6cc7.property;
      _0x1c864a = _0x55098e({
        'type': _0x544cd7,
        'tooltip': "Counter動畫"
      });
      _0x1bc2ff = _0x55098e({
        'type': _0x57e8d7,
        'tooltip': 'FG語系字1'
      });
      _0x25ddeb = _0x55098e({
        'type': _0x4134c8,
        'tooltip': "FG剩餘局數"
      });
      _0x1d8225 = _0x55098e({
        'type': _0x4134c8,
        'tooltip': "FG總局數"
      });
      _0x1d87cb = _0x55098e({
        'type': _0x4134c8,
        'tooltip': '符號'
      });
      _0x2c1f19 = function (_0xe4bc32) {
        function _0x2ca136() {
          var _0x8f74e7;
          var _0x20e675 = arguments.length;
          var _0x3c9b96 = new Array(_0x20e675);
          for (var _0x3986c5 = 0x0; _0x3986c5 < _0x20e675; _0x3986c5++) {
            _0x3c9b96[_0x3986c5] = arguments[_0x3986c5];
          }
          _0x3517d5(_0x8f74e7 = _0xe4bc32.call.apply(_0xe4bc32, [this].concat(_0x3c9b96)) || this, 'm_counterSpine', _0x4d33d8, _0x1862e3(_0x8f74e7));
          _0x3517d5(_0x8f74e7, 'm_fgTxt1', _0x4c7b4c, _0x1862e3(_0x8f74e7));
          _0x3517d5(_0x8f74e7, 'm_fgRemainCounter', _0xd87608, _0x1862e3(_0x8f74e7));
          _0x3517d5(_0x8f74e7, 'm_fgTotalCounterNode', _0x58b8ac, _0x1862e3(_0x8f74e7));
          _0x3517d5(_0x8f74e7, "m_Sign", _0x4b5aa3, _0x1862e3(_0x8f74e7));
          return _0x8f74e7;
        }
        _0x47cbbc(_0x2ca136, _0xe4bc32);
        var _0x58712a = _0x2ca136.prototype;
        _0x58712a.SetTxt = function () {
          var _0x2a4b2d = _0x39a0c9.GetGameAtlas();
          this.m_fgTxt1.spriteFrame = _0x2a4b2d.getSpriteFrame('FG_txt_03');
        };
        _0x58712a.PlayMGIdle = function () {
          this.m_fgTxt1.node.active = false;
          this.m_fgRemainCounter.node.active = false;
          this.m_fgTotalCounterNode.node.active = false;
          this.m_Sign.node.active = false;
          this.m_counterSpine.PlayMGIdle();
          this.m_counterSpine.node.active = true;
        };
        _0x58712a.PlayFGIdle = function () {
          this.m_counterSpine.node.active = false;
          this.m_fgTxt1.node.active = true;
          this.m_fgRemainCounter.node.active = true;
          this.m_fgTotalCounterNode.node.active = true;
          this.m_Sign.node.active = true;
        };
        return _0x2ca136;
      }(_0x55612a);
      _0x4d33d8 = _0x58cf1d(_0x2c1f19.prototype, 'm_counterSpine', [_0x1c864a], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4c7b4c = _0x58cf1d(_0x2c1f19.prototype, "m_fgTxt1", [_0x1bc2ff], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0xd87608 = _0x58cf1d(_0x2c1f19.prototype, 'm_fgRemainCounter', [_0x25ddeb], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x58b8ac = _0x58cf1d(_0x2c1f19.prototype, "m_fgTotalCounterNode", [_0x1d8225], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4b5aa3 = _0x58cf1d(_0x2c1f19.prototype, "m_Sign", [_0x1d87cb], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x45ffd3;
      var _0x531fe8;
      var _0x4ce03c;
      var _0x4cb584;
      var _0xc73ab7;
      var _0x1af7f7;
      var _0x126ee9;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "89389XB3OhA9oPIZm/h6J58", "EffectPlate", undefined);
      var _0x4263e9 = _0x9f6cc7.property;
      _0x45ffd3 = _0x4263e9({
        'type': _0x4360d2,
        'tooltip': "symbol動畫"
      });
      _0x531fe8 = _0x4263e9({
        'type': _0x4360d2,
        'tooltip': "scatter動畫"
      });
      _0x4ce03c = _0x4263e9({
        'type': _0x4360d2,
        'tooltip': "符號中獎框"
      });
      _0x4cb584 = function (_0x304d9a) {
        function _0x22dd91() {
          var _0x5ab597;
          var _0x5df882 = arguments.length;
          var _0x57cc2e = new Array(_0x5df882);
          for (var _0x37dc95 = 0x0; _0x37dc95 < _0x5df882; _0x37dc95++) {
            _0x57cc2e[_0x37dc95] = arguments[_0x37dc95];
          }
          _0x3517d5(_0x5ab597 = _0x304d9a.call.apply(_0x304d9a, [this].concat(_0x57cc2e)) || this, "m_symbolEftPrefabs", _0xc73ab7, _0x1862e3(_0x5ab597));
          _0x3517d5(_0x5ab597, "m_scatterEftPrefabs", _0x1af7f7, _0x1862e3(_0x5ab597));
          _0x3517d5(_0x5ab597, 'm_winFramePrefab', _0x126ee9, _0x1862e3(_0x5ab597));
          _0x5ab597.m_gameView = null;
          _0x5ab597.m_slotReels = null;
          _0x5ab597.m_isAwardList = null;
          _0x5ab597.m_isScatterList = null;
          _0x5ab597.m_isIdle = true;
          _0x5ab597.m_reelMask = null;
          _0x5ab597.m_abortController = null;
          _0x5ab597.m_symbolEffects = new Array();
          _0x5ab597.m_scatterEffects = new Array();
          _0x5ab597.m_winFrames = new Array();
          return _0x5ab597;
        }
        _0x47cbbc(_0x22dd91, _0x304d9a);
        var _0x5ed21e = _0x22dd91.prototype;
        _0x5ed21e.Init = function (_0x4cd479, _0x1cf209, _0x44c133) {
          this.m_gameView = _0x4cd479;
          this.m_slotReels = _0x1cf209;
          this.m_reelMask = _0x44c133;
          this.m_isAwardList = new Array();
          this.m_isScatterList = new Array();
          for (var _0x4ab46e = 0x0; _0x4ab46e < _0x549b11.COL; _0x4ab46e++) {
            var _0x4f5074 = [];
            var _0x464723 = [];
            for (var _0x35cf73 = 0x0; _0x35cf73 < _0x549b11.ROW; _0x35cf73++) {
              _0x4f5074.push(false);
              _0x464723.push(false);
            }
            this.m_isAwardList.push(_0x4f5074);
            this.m_isScatterList.push(_0x464723);
            this.m_symbolEffects.push(new Array());
            this.m_scatterEffects.push(new Array());
            this.m_winFrames.push(new Array());
          }
          _0x44fd4c.GetInstance().SetSymbolEffectPrefabs(this.m_symbolEftPrefabs);
          _0x44fd4c.GetInstance().SetScatterEffectPrefabs(this.m_scatterEftPrefabs);
          _0x44fd4c.GetInstance().SetWinFrameSpinePrefab(this.m_winFramePrefab);
        };
        _0x5ed21e.CleanSymbolAnim = function (_0x24bda3, _0x111aad) {
          if (this.m_symbolEffects[_0x24bda3][_0x111aad]) {
            var _0x46ec2a = this.m_symbolEffects[_0x24bda3][_0x111aad];
            _0x46ec2a.EftNode.removeFromParent();
            _0x44fd4c.GetInstance().ReturnSymbolEffect(_0x46ec2a);
            this.m_symbolEffects[_0x24bda3][_0x111aad] = null;
          }
        };
        _0x5ed21e.CleanScatterAnim = function (_0x3d451e, _0xe583e7) {
          if (this.m_scatterEffects[_0x3d451e][_0xe583e7]) {
            var _0x294fb6 = this.m_scatterEffects[_0x3d451e][_0xe583e7];
            _0x294fb6.EftNode.removeFromParent();
            _0x44fd4c.GetInstance().ReturnScatterEffect(_0x294fb6);
            this.m_scatterEffects[_0x3d451e][_0xe583e7] = null;
          }
        };
        _0x5ed21e.CleanWinFrameAnim = function (_0x5d82d1, _0x42c37e) {
          if (this.m_winFrames[_0x5d82d1][_0x42c37e]) {
            var _0x3f0be0 = this.m_winFrames[_0x5d82d1][_0x42c37e];
            _0x3f0be0.Node.removeFromParent();
            _0x44fd4c.GetInstance().ReturnWinFrameSpine(_0x3f0be0);
            this.m_winFrames[_0x5d82d1][_0x42c37e] = null;
          }
        };
        _0x5ed21e.CleanAllSymbolAnim = function () {
          for (var _0x1bed3f = 0x0; _0x1bed3f < _0x549b11.COL; _0x1bed3f++) {
            for (var _0xec1229 = 0x0; _0xec1229 < _0x549b11.ROW; _0xec1229++) {
              this.CleanSymbolAnim(_0x1bed3f, _0xec1229);
            }
          }
        };
        _0x5ed21e.CleanAllScatterAnim = function () {
          for (var _0x457a78 = 0x0; _0x457a78 < _0x549b11.COL; _0x457a78++) {
            for (var _0x1115c6 = 0x0; _0x1115c6 < _0x549b11.ROW; _0x1115c6++) {
              this.CleanScatterAnim(_0x457a78, _0x1115c6);
            }
          }
        };
        _0x5ed21e.CleanAllWinFrameAnim = function () {
          for (var _0x527969 = 0x0; _0x527969 < _0x549b11.COL; _0x527969++) {
            for (var _0x31d8c1 = 0x0; _0x31d8c1 < _0x549b11.ROW; _0x31d8c1++) {
              this.CleanWinFrameAnim(_0x527969, _0x31d8c1);
            }
          }
        };
        _0x5ed21e.CleanAllAnim = function () {
          this.CleanAllSymbolAnim();
          this.CleanAllScatterAnim();
          this.m_gameView.HideAllExtendWild();
          this.CleanAllWinFrameAnim();
        };
        _0x5ed21e.ResetFlag = function () {
          for (var _0x5c62b0 = 0x0; _0x5c62b0 < _0x549b11.COL; _0x5c62b0++) {
            for (var _0x257512 = 0x0; _0x257512 < _0x549b11.ROW; _0x257512++) {
              this.m_isAwardList[_0x5c62b0][_0x257512] = false;
              this.m_isScatterList[_0x5c62b0][_0x257512] = false;
            }
          }
        };
        _0x5ed21e.ShowMultiAnim = function () {
          var _0x4c3713 = _0x2eaa1b(_0x5266ea().mark(function _0x2d4ec6() {
            var _0x4c31c4;
            var _0x2f812e;
            var _0x1df91e = this;
            return _0x5266ea().wrap(function (_0x2761de) {
              for (;;) {
                switch (_0x2761de.prev = _0x2761de.next) {
                  case 0x0:
                    if (!((_0x4c31c4 = this.m_gameView.SpinAck.RoundQueue[this.m_gameView.Round].WheelMul) <= 0x1)) {
                      _0x2761de.next = 0x3;
                      break;
                    }
                    return _0x2761de.abrupt("return");
                  case 0x3:
                    _0x2f812e = _0x549b11.AudioClips.Multiplier03;
                    if (_0x4c31c4 < _0x549b11.MultiOdds[0x1]) {
                      _0x2f812e = _0x549b11.AudioClips.Multiplier01;
                    } else if (_0x4c31c4 < _0x549b11.MultiOdds[0x2]) {
                      _0x2f812e = _0x549b11.AudioClips.Multiplier02;
                    }
                    _0x5a1279(this.node).call(function () {
                      _0x378220.Play(_0x2f812e);
                      _0x1df91e.m_gameView.MultiNum.string = _0x4c31c4.toString();
                      _0x1df91e.m_gameView.MultiAnim.node.active = true;
                      _0x1df91e.m_gameView.MultiAnim.play("Start");
                    }).delay(0.53).call(_0x2eaa1b(_0x5266ea().mark(function _0x1b9dc3() {
                      var _0x5efc55;
                      var _0x25ca2d;
                      var _0x3fb137;
                      return _0x5266ea().wrap(function (_0x2a4e29) {
                        for (;;) {
                          switch (_0x2a4e29.prev = _0x2a4e29.next) {
                            case 0x0:
                              _0x1df91e.m_gameView.IsLock = true;
                              _0x5efc55 = _0x1df91e.m_gameView.MultiAnim.node.position.clone();
                              _0x25ca2d = _0x1df91e.GetWorldLocation(_0x1df91e.m_gameView.MultiAnim);
                              _0x3fb137 = _0x1df91e.GetWorldLocation(_0x1df91e.m_gameView.WinNum);
                              _0x1df91e.m_gameView.MultiAnim.play('End');
                              _0x378220.Play(_0x549b11.AudioClips.Fly);
                              _0x2a4e29.next = 0x8;
                              return _0x1df91e.ShowQuadraticBez(_0x1df91e.m_gameView.MultiAnim.node, _0x25ca2d, _0x3fb137, 0.5, _0x2eaa1b(_0x5266ea().mark(function _0x4c084b() {
                                return _0x5266ea().wrap(function (_0x27e373) {
                                  for (;;) {
                                    switch (_0x27e373.prev = _0x27e373.next) {
                                      case 0x0:
                                        _0x1df91e.m_gameView.MultiAnim.node.active = false;
                                        _0x1df91e.m_gameView.IsLock = false;
                                        _0x1df91e.m_gameView.MultiAnim.node.setPosition(_0x5efc55);
                                      case 0x3:
                                      case 'end':
                                        return _0x27e373.stop();
                                    }
                                  }
                                }, _0x4c084b);
                              })));
                            case 0x8:
                            case "end":
                              return _0x2a4e29.stop();
                          }
                        }
                      }, _0x1b9dc3);
                    }))).start();
                    _0x2761de.next = 0x8;
                    return _0x166f61.Wait(this, 0x1);
                  case 0x8:
                  case "end":
                    return _0x2761de.stop();
                }
              }
            }, _0x2d4ec6, this);
          }));
          return function () {
            return _0x4c3713.apply(this, arguments);
          };
        }();
        _0x5ed21e.GetWorldLocation = function (_0x38fef6) {
          return _0x38fef6.node.getComponent(_0x2835d7).convertToWorldSpaceAR(_0x386e5e(0x0, 0x0, 0x0));
        };
        _0x5ed21e.GetMiddlePos = function (_0xb5a877, _0x3b4ee7) {
          var _0x2b6ae6 = _0x3b4ee7.x - _0xb5a877.x;
          var _0x28be63 = _0x3b4ee7.y - _0xb5a877.y;
          var _0x760a00 = _0x386e5e((_0xb5a877.x + _0x3b4ee7.x) / 0x2, (_0xb5a877.y + _0x3b4ee7.y) / 0x2);
          var _0x394b2f = _0x386e5e();
          _0x394b2f.x = _0x760a00.x - _0x28be63 / 0x2;
          _0x394b2f.y = _0x760a00.y + _0x2b6ae6 / 0x2;
          if (_0x394b2f.x > 0x15e || _0x394b2f.x < -0x15e) {
            _0x394b2f.x = _0x760a00.x + _0x28be63 / 0x2;
            _0x394b2f.y = _0x760a00.y - _0x2b6ae6 / 0x2;
          }
          return _0x394b2f;
        };
        _0x5ed21e.GetFinalMoveDistance = function (_0x7db927, _0x47b16a, _0x5920f8, _0x1192a4) {
          if (undefined === _0x1192a4) {
            _0x1192a4 = false;
          }
          var _0x38f556 = new _0x3815d2();
          _0x38f556.x = _0x47b16a.x - _0x7db927.x;
          _0x38f556.y = _0x47b16a.y - _0x7db927.y;
          _0x38f556.z = _0x47b16a.z - _0x7db927.z;
          if (_0x1192a4) {
            var _0x2b64be = _0x5920f8.getWorldScale();
            _0x38f556.x = _0x38f556.x / _0x2b64be.x;
            _0x38f556.y = _0x38f556.y / _0x2b64be.y;
            _0x38f556.z = _0x38f556.z / _0x2b64be.z;
          }
          return _0x38f556;
        };
        _0x5ed21e.ShowQuadraticBez = function () {
          var _0x2d7c49 = _0x2eaa1b(_0x5266ea().mark(function _0x35efb2(_0x21d815, _0x435cc8, _0x3f2593, _0x3f74f8, _0x380ab3, _0x525c43, _0x4d0a26) {
            var _0xea5ac5;
            var _0xe01af3;
            var _0x29387d;
            var _0x567121;
            var _0x4b52ed;
            var _0xdd35bd;
            return _0x5266ea().wrap(function (_0x25ce06) {
              for (;;) {
                switch (_0x25ce06.prev = _0x25ce06.next) {
                  case 0x0:
                    if (undefined === _0x525c43) {
                      _0x525c43 = 0x0;
                    }
                    if (undefined === _0x4d0a26) {
                      _0x4d0a26 = false;
                    }
                    _0xea5ac5 = _0x21d815.position.clone();
                    _0xe01af3 = new _0x3815d2();
                    _0x29387d = this.GetFinalMoveDistance(_0x435cc8, _0x3f2593, _0x21d815, _0x4d0a26);
                    _0xe01af3.x = _0x29387d.x + _0x21d815.position.x;
                    _0xe01af3.y = _0x29387d.y + _0x21d815.position.y;
                    _0xe01af3.z = _0x29387d.z + _0x21d815.position.z;
                    _0x567121 = this.GetMiddlePos(_0xea5ac5, _0xe01af3);
                    _0x4b52ed = [_0xea5ac5, _0x567121, _0xe01af3];
                    _0xdd35bd = new _0x2298e0.Bezier(_0x4b52ed);
                    _0x5a1279(_0x21d815).to(_0x3f74f8, {
                      'position': _0xe01af3
                    }, {
                      'onUpdate': function (_0x53023c, _0x124f3b) {
                        _0x21d815.position = _0xdd35bd.GetPosition(_0x124f3b);
                      }
                    }).delay(0x2 * _0x3f74f8).call(function () {
                      _0x21d815.active = false;
                    }).start();
                    _0x25ce06.next = 0xe;
                    return _0x166f61.Wait(this, _0x3f74f8);
                  case 0xe:
                    _0x25ce06.next = 0x10;
                    return null == _0x380ab3 ? undefined : _0x380ab3();
                  case 0x10:
                    _0x25ce06.next = 0x12;
                    return _0x166f61.Wait(this, _0x525c43);
                  case 0x12:
                  case "end":
                    return _0x25ce06.stop();
                }
              }
            }, _0x35efb2, this);
          }));
          return function (_0x3ed1a4, _0x317b4b, _0x1550af, _0x228a2a, _0x3140fc, _0x33c29b, _0x4522fe) {
            return _0x2d7c49.apply(this, arguments);
          };
        }();
        _0x5ed21e.Idle = function () {
          var _0xb17275 = _0x2eaa1b(_0x5266ea().mark(function _0x4c3c55() {
            return _0x5266ea().wrap(function (_0x9102be) {
              for (;;) {
                switch (_0x9102be.prev = _0x9102be.next) {
                  case 0x0:
                    this.CleanAllScatterAnim();
                    this.InitNodeInIdle();
                    if (!this.m_isAwardList.every(function (_0x55377b) {
                      return _0x55377b.every(function (_0x3a48d1) {
                        return false === _0x3a48d1;
                      });
                    })) {
                      _0x9102be.next = 0x4;
                      break;
                    }
                    return _0x9102be.abrupt("return");
                  case 0x4:
                    this.m_isIdle = true;
                    this.PlayWinInIdle();
                  case 0x6:
                  case 'end':
                    return _0x9102be.stop();
                }
              }
            }, _0x4c3c55, this);
          }));
          return function () {
            return _0xb17275.apply(this, arguments);
          };
        }();
        _0x5ed21e.InitNodeInIdle = function () {
          for (var _0x284b2 = 0x0; _0x284b2 < _0x549b11.COL; _0x284b2++) {
            for (var _0x4aef8b = 0x0; _0x4aef8b < _0x549b11.ROW; _0x4aef8b++) {
              if (this.m_isScatterList[_0x284b2][_0x4aef8b]) {
                this.m_slotReels.GetSymbolNode(_0x284b2, _0x4aef8b).active = true;
              }
              if (this.m_isAwardList[_0x284b2][_0x4aef8b]) {
                this.m_slotReels.GetSymbolNode(_0x284b2, _0x4aef8b).active = true;
                this.m_symbolEffects[_0x284b2][_0x4aef8b].EftNode.active = false;
                this.m_winFrames[_0x284b2][_0x4aef8b].Node.active = false;
              }
            }
          }
        };
        _0x5ed21e.PlayWinInIdle = function () {
          var _0x40d899 = _0x2eaa1b(_0x5266ea().mark(function _0x590256() {
            var _0x25945a;
            var _0x25fc2d;
            var _0x285058;
            var _0xf60c59;
            var _0x2955bb;
            var _0x19d981;
            var _0x3df42a;
            var _0x2829d8;
            var _0x3d2ed7;
            return _0x5266ea().wrap(function (_0x37c709) {
              for (;;) {
                switch (_0x37c709.prev = _0x37c709.next) {
                  case 0x0:
                    if (!this.m_gameView.SpinAck) {
                      _0x37c709.next = 0x16;
                      break;
                    }
                    _0x25945a = this.m_gameView.SpinAck.RoundQueue[this.m_gameView.Round].AwardDataVec;
                    this.m_abortController = new AbortController();
                    _0x25fc2d = -0x1;
                  case 0x5:
                    if (!this.m_isIdle) {
                      _0x37c709.next = 0x16;
                      break;
                    }
                    _0x285058 = 0x0;
                  case 0x7:
                    if (!(_0x285058 < _0x25945a.length)) {
                      _0x37c709.next = 0x14;
                      break;
                    }
                    if (this.m_isIdle) {
                      _0x37c709.next = 0xa;
                      break;
                    }
                    return _0x37c709.abrupt("return");
                  case 0xa:
                    if (-0x1 !== _0x25fc2d) {
                      for (_0xf60c59 = 0x0; _0xf60c59 < _0x25945a[_0x25fc2d].Pos.length; _0xf60c59++) {
                        _0x2955bb = _0x549b11.ConvertIndex2ColRow(_0x25945a[_0x25fc2d].Pos[_0xf60c59]);
                        this.m_slotReels.GetSymbolNode(_0x2955bb.x, _0x2955bb.y).active = true;
                        this.m_symbolEffects[_0x2955bb.x][_0x2955bb.y].EftNode.active = false;
                        this.m_winFrames[_0x2955bb.x][_0x2955bb.y].Node.active = false;
                      }
                    }
                    this.m_reelMask.node.active = true;
                    _0x19d981 = [];
                    for (_0x3df42a = 0x0; _0x3df42a < _0x25945a[_0x285058].Pos.length; _0x3df42a++) {
                      _0x2829d8 = _0x549b11.ConvertIndex2ColRow(_0x25945a[_0x285058].Pos[_0x3df42a]);
                      this.m_symbolEffects[_0x2829d8.x][_0x2829d8.y].EftNode.active = true;
                      this.m_slotReels.GetSymbolNode(_0x2829d8.x, _0x2829d8.y).active = false;
                      _0xfd5517.SetZIndex(this.m_symbolEffects[_0x2829d8.x][_0x2829d8.y].EftNode, _0x2829d8.x * _0x549b11.COL + _0x2829d8.y);
                      if (this.m_slotReels.GetSymbol(_0x2829d8.x, _0x2829d8.y) === _0x549b11.WILD_SYMBOL && 0x3 === this.m_slotReels.NowScatterCount) {
                        _0x3d2ed7 = this.m_symbolEffects[_0x2829d8.x][_0x2829d8.y].getComponent(_0x1e9699);
                        _0x19d981.push(this.PlayWin02WithAbort(_0x3d2ed7, this.m_abortController.signal));
                      } else {
                        _0x19d981.push(this.PlayWinWithAbort(this.m_symbolEffects[_0x2829d8.x][_0x2829d8.y], this.m_abortController.signal));
                      }
                      this.m_winFrames[_0x2829d8.x][_0x2829d8.y].Node.active = true;
                      this.m_winFrames[_0x2829d8.x][_0x2829d8.y].PlayWin();
                    }
                    _0x37c709.next = 0x10;
                    return Promise.all(_0x19d981);
                  case 0x10:
                    _0x25fc2d = _0x285058;
                  case 0x11:
                    _0x285058++;
                    _0x37c709.next = 0x7;
                    break;
                  case 0x14:
                    _0x37c709.next = 0x5;
                    break;
                  case 0x16:
                  case "end":
                    return _0x37c709.stop();
                }
              }
            }, _0x590256, this);
          }));
          return function () {
            return _0x40d899.apply(this, arguments);
          };
        }();
        _0x5ed21e.PlayWinWithAbort = function (_0x102464, _0x18572f) {
          return new Promise(function (_0x236ac7) {
            var _0x338d42 = function () {
              _0x236ac7();
            };
            _0x18572f.addEventListener("abort", _0x338d42);
            _0x102464.PlayWin().then(function () {
              _0x18572f.removeEventListener("abort", _0x338d42);
              _0x236ac7();
            });
          });
        };
        _0x5ed21e.PlayWin02WithAbort = function (_0x134eb6, _0x386124) {
          return new Promise(function (_0x539fb2) {
            var _0x24e985 = function () {
              _0x539fb2();
            };
            _0x386124.addEventListener("abort", _0x24e985);
            _0x134eb6.PlayWin02().then(function () {
              _0x386124.removeEventListener("abort", _0x24e985);
              _0x539fb2();
            });
          });
        };
        _0x5ed21e.StopPlayWinInIdle = function () {
          if (this.m_abortController) {
            this.m_abortController.abort();
            this.m_abortController = null;
          }
        };
        _0x5ed21e.StartSpin = function () {
          this.m_isIdle = false;
          this.StopPlayWinInIdle();
          this.CleanAllAnim();
          this.m_reelMask.node.active = false;
          for (var _0x407097 = 0x0; _0x407097 < _0x549b11.COL; _0x407097++) {
            for (var _0x3e4915 = 0x0; _0x3e4915 < _0x549b11.ROW; _0x3e4915++) {
              this.m_slotReels.GetSymbolNode(_0x407097, _0x3e4915).active = true;
            }
          }
          this.ResetFlag();
        };
        _0x5ed21e.SpecialSymbolStop = function () {
          var _0x3317b2 = _0x2eaa1b(_0x5266ea().mark(function _0x31fcb1(_0x534371, _0x5a2f40) {
            var _0x14becd;
            var _0x271b19;
            return _0x5266ea().wrap(function (_0x3642ba) {
              for (;;) {
                switch (_0x3642ba.prev = _0x3642ba.next) {
                  case 0x0:
                    _0x14becd = [];
                    for (_0x271b19 = 0x0; _0x271b19 < _0x5a2f40.length; _0x271b19++) {
                      if (this.m_slotReels.IsScatterSymbol(_0x5a2f40[_0x271b19])) {
                        this.m_isScatterList[_0x534371][_0x271b19] = true;
                        this.m_slotReels.GetSymbolNode(_0x534371, _0x271b19).active = false;
                        this.CreateScatterEffect(_0x534371, _0x271b19);
                        _0x14becd.push(this.m_scatterEffects[_0x534371][_0x271b19].PlayStop());
                      }
                    }
                    if (0x0 !== _0x14becd.length) {
                      _0x3642ba.next = 0x4;
                      break;
                    }
                    return _0x3642ba.abrupt("return");
                  case 0x4:
                    _0x3642ba.next = 0x6;
                    return Promise.all(_0x14becd);
                  case 0x6:
                  case "end":
                    return _0x3642ba.stop();
                }
              }
            }, _0x31fcb1, this);
          }));
          return function (_0x78507, _0x22417c) {
            return _0x3317b2.apply(this, arguments);
          };
        }();
        _0x5ed21e.AllSpecialSymbolStop = function () {
          var _0x3ccbac = _0x2eaa1b(_0x5266ea().mark(function _0x111cf8(_0x383b4b) {
            var _0x8f39cb;
            return _0x5266ea().wrap(function (_0x5e98e7) {
              for (;;) {
                switch (_0x5e98e7.prev = _0x5e98e7.next) {
                  case 0x0:
                    for (_0x8f39cb = 0x0; _0x8f39cb < _0x383b4b.length; _0x8f39cb++) {
                      this.SpecialSymbolStop(_0x8f39cb, _0x383b4b[_0x8f39cb].Col);
                    }
                  case 0x1:
                  case "end":
                    return _0x5e98e7.stop();
                }
              }
            }, _0x111cf8, this);
          }));
          return function (_0x5476f7) {
            return _0x3ccbac.apply(this, arguments);
          };
        }();
        _0x5ed21e.ConnectionLine = function () {
          var _0x140239 = _0x2eaa1b(_0x5266ea().mark(function _0x5a62db(_0x1c4d7a, _0x58cb7d) {
            var _0x5c601e;
            var _0x48b6e9;
            var _0x2f6830;
            var _0x1ef7ac;
            var _0x5644bc;
            var _0x35b756;
            var _0x15b884;
            var _0x9bfc5;
            var _0x17b2b1;
            var _0x4ef441;
            var _0xdbeadb;
            return _0x5266ea().wrap(function (_0x3156fc) {
              for (;;) {
                switch (_0x3156fc.prev = _0x3156fc.next) {
                  case 0x0:
                    this.m_reelMask.node.active = true;
                    _0x5c601e = 0x0;
                    for (_0x48b6e9 = 0x0; _0x48b6e9 < _0x1c4d7a.length; _0x48b6e9++) {
                      _0x5c601e = _0xfd5517.plus(_0x5c601e, _0x1c4d7a[_0x48b6e9].Win);
                      for (_0x2f6830 = 0x0; _0x2f6830 < _0x1c4d7a[_0x48b6e9].Pos.length; _0x2f6830++) {
                        _0x1ef7ac = _0x549b11.ConvertIndex2ColRow(_0x1c4d7a[_0x48b6e9].Pos[_0x2f6830]);
                        this.m_isAwardList[_0x1ef7ac.x][_0x1ef7ac.y] = true;
                        if (!this.m_symbolEffects[_0x1ef7ac.x][_0x1ef7ac.y]) {
                          this.m_slotReels.GetSymbolNode(_0x1ef7ac.x, _0x1ef7ac.y).active = false;
                          this.CreateSymbolEffect(_0x1ef7ac.x, _0x1ef7ac.y);
                        }
                        if (!this.m_winFrames[_0x1ef7ac.x][_0x1ef7ac.y]) {
                          this.CreateWinFrame(_0x1ef7ac.x, _0x1ef7ac.y);
                        }
                      }
                    }
                    _0x5644bc = [];
                    for (_0x35b756 = 0x0; _0x35b756 < _0x549b11.COL; _0x35b756++) {
                      for (_0x15b884 = 0x0; _0x15b884 < _0x549b11.ROW; _0x15b884++) {
                        if (this.m_symbolEffects[_0x35b756][_0x15b884]) {
                          _0xfd5517.SetZIndex(this.m_symbolEffects[_0x35b756][_0x15b884].EftNode, _0x35b756 * _0x549b11.COL + _0x15b884);
                          if (this.m_slotReels.GetSymbol(_0x35b756, _0x15b884) === _0x549b11.WILD_SYMBOL && 0x3 === this.m_slotReels.NowScatterCount) {
                            _0x9bfc5 = this.m_symbolEffects[_0x35b756][_0x15b884].getComponent(_0x1e9699);
                            _0x5644bc.push(_0x9bfc5.PlayWin02());
                          } else {
                            _0x5644bc.push(this.m_symbolEffects[_0x35b756][_0x15b884].PlayWin());
                          }
                        }
                        if (this.m_winFrames[_0x35b756][_0x15b884]) {
                          this.m_winFrames[_0x35b756][_0x15b884].PlayWin();
                        }
                        if (this.m_scatterEffects[_0x35b756][_0x15b884]) {
                          this.m_slotReels.GetSymbolNode(_0x35b756, _0x15b884).active = true;
                          this.CleanScatterAnim(_0x35b756, _0x15b884);
                        }
                      }
                    }
                    this.m_slotReels.ShowDarkOrLightSymbol(true);
                    for (_0x17b2b1 = _0x137c53(this.m_gameView.ExtendWildCols); !(_0x4ef441 = _0x17b2b1()).done;) {
                      _0xdbeadb = _0x4ef441.value;
                      _0x5644bc.push(this.m_gameView.playExtendWildWin(_0xdbeadb));
                    }
                    if (!_0x58cb7d) {
                      _0x3156fc.next = 0xc;
                      break;
                    }
                    _0x378220.Play(_0x549b11.AudioClips.Small_Win03);
                    _0x3156fc.next = 0xb;
                    return Promise.all(_0x5644bc);
                  case 0xb:
                    this.m_reelMask.node.active = false;
                  case 0xc:
                  case "end":
                    return _0x3156fc.stop();
                }
              }
            }, _0x5a62db, this);
          }));
          return function (_0x2aff4e, _0x4b9cd4) {
            return _0x140239.apply(this, arguments);
          };
        }();
        _0x5ed21e.ShowScatteNearWin = function () {
          var _0x4e9eae = _0x2eaa1b(_0x5266ea().mark(function _0x2669c5(_0x528e64, _0x1a1a39) {
            return _0x5266ea().wrap(function (_0x207832) {
              for (;;) {
                switch (_0x207832.prev = _0x207832.next) {
                  case 0x0:
                    if (!this.m_scatterEffects[_0x528e64][_0x1a1a39]) {
                      this.CreateScatterEffect(_0x528e64, _0x1a1a39);
                    }
                    this.SetEffectToTop(_0x528e64, _0x1a1a39);
                    this.m_slotReels.GetSymbolNode(_0x528e64, _0x1a1a39).active = false;
                    this.m_scatterEffects[_0x528e64][_0x1a1a39].PlayNearWin();
                  case 0x4:
                  case 'end':
                    return _0x207832.stop();
                }
              }
            }, _0x2669c5, this);
          }));
          return function (_0x1ee65f, _0x44ac19) {
            return _0x4e9eae.apply(this, arguments);
          };
        }();
        _0x5ed21e.ShowScatterWin = function () {
          var _0x57500a = _0x2eaa1b(_0x5266ea().mark(function _0x4d8589() {
            var _0x4a7697;
            var _0x9ecbcf;
            var _0x3a8206;
            return _0x5266ea().wrap(function (_0x3a9a74) {
              for (;;) {
                switch (_0x3a9a74.prev = _0x3a9a74.next) {
                  case 0x0:
                    this.m_reelMask.node.active = true;
                    _0x4a7697 = new Array();
                    for (_0x9ecbcf = 0x0; _0x9ecbcf < _0x549b11.COL; _0x9ecbcf++) {
                      for (_0x3a8206 = 0x0; _0x3a8206 < _0x549b11.ROW; _0x3a8206++) {
                        if (this.m_isScatterList[_0x9ecbcf][_0x3a8206]) {
                          if (!this.m_scatterEffects[_0x9ecbcf][_0x3a8206]) {
                            this.CreateScatterEffect(_0x9ecbcf, _0x3a8206);
                          }
                          this.SetEffectToTop(_0x9ecbcf, _0x3a8206);
                          this.m_slotReels.GetSymbolNode(_0x9ecbcf, _0x3a8206).active = false;
                          _0x4a7697.push(this.m_scatterEffects[_0x9ecbcf][_0x3a8206].PlayWin02());
                          if (!this.m_winFrames[_0x9ecbcf][_0x3a8206]) {
                            this.CreateWinFrame(_0x9ecbcf, _0x3a8206);
                          }
                          this.m_winFrames[_0x9ecbcf][_0x3a8206].PlayWin();
                        }
                      }
                    }
                    _0x378220.Play(_0x549b11.AudioClips.Scatter_bell);
                    _0x3a9a74.next = 0x6;
                    return Promise.all(_0x4a7697);
                  case 0x6:
                    this.CleanAllWinFrameAnim();
                    this.m_reelMask.node.active = false;
                  case 0x8:
                  case "end":
                    return _0x3a9a74.stop();
                }
              }
            }, _0x4d8589, this);
          }));
          return function () {
            return _0x57500a.apply(this, arguments);
          };
        }();
        _0x5ed21e.CreateWinFrame = function (_0x2f5f23, _0x49597a) {
          var _0x145969 = _0x44fd4c.GetInstance().GetWinFrameSpineNode();
          _0x145969.Node.position = this.m_slotReels.GetSymbolPosition(_0x2f5f23, _0x49597a);
          this.node.addChild(_0x145969.Node);
          this.m_winFrames[_0x2f5f23][_0x49597a] = _0x145969;
        };
        _0x5ed21e.CreateSymbolEffect = function (_0x5aeae5, _0x209f09) {
          var _0x3670ba = _0x44fd4c.GetInstance().GetSymbolEffectNode(this.m_slotReels.GetSymbol(_0x5aeae5, _0x209f09));
          _0x3670ba.EftNode.position = this.m_slotReels.GetSymbolPosition(_0x5aeae5, _0x209f09);
          this.node.addChild(_0x3670ba.EftNode);
          this.m_symbolEffects[_0x5aeae5][_0x209f09] = _0x3670ba;
        };
        _0x5ed21e.CreateScatterEffect = function (_0x2c209e, _0x7a4170) {
          var _0xa87fe8 = _0x44fd4c.GetInstance().GetScatterEffectNode(this.m_slotReels.GetSymbol(_0x2c209e, _0x7a4170));
          _0xa87fe8.EftNode.position = this.m_slotReels.GetSymbolPosition(_0x2c209e, _0x7a4170);
          this.node.addChild(_0xa87fe8.EftNode);
          this.m_scatterEffects[_0x2c209e][_0x7a4170] = _0xa87fe8;
        };
        _0x5ed21e.SetEffectToTop = function (_0x4aa059, _0x44bf95) {
          _0xfd5517.SetZIndex(this.m_scatterEffects[_0x4aa059][_0x44bf95].EftNode, _0x549b11.COL * _0x549b11.ROW + _0x4aa059 * _0x549b11.COL + _0x44bf95);
        };
        return _0x22dd91;
      }(_0x55612a);
      _0xc73ab7 = _0x58cf1d(_0x4cb584.prototype, "m_symbolEftPrefabs", [_0x45ffd3], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x1af7f7 = _0x58cf1d(_0x4cb584.prototype, "m_scatterEftPrefabs", [_0x531fe8], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x126ee9 = _0x58cf1d(_0x4cb584.prototype, "m_winFramePrefab", [_0x4ce03c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x41e3f3;
      var _0x449bcc;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "2d6bflBqn9H/rUgdmc9jknZ", 'ExtendWildSpine', undefined);
      var _0x58f429 = _0x9f6cc7.ccclass;
      _0x449bcc = function (_0x3b60a7) {
        function _0x15b4d4() {
          return _0x3b60a7.apply(this, arguments) || this;
        }
        _0x47cbbc(_0x15b4d4, _0x3b60a7);
        var _0x1ac597 = _0x15b4d4.prototype;
        _0x1ac597.PlayExtendBot = function () {
          var _0x236885 = _0x2eaa1b(_0x5266ea().mark(function _0x47edff() {
            return _0x5266ea().wrap(function (_0x489d65) {
              for (;;) {
                switch (_0x489d65.prev = _0x489d65.next) {
                  case 0x0:
                    _0x489d65.next = 0x2;
                    return this.PlayAnimation(_0x15b4d4.AnimName.Extend_Bot, false);
                  case 0x2:
                  case 'end':
                    return _0x489d65.stop();
                }
              }
            }, _0x47edff, this);
          }));
          return function () {
            return _0x236885.apply(this, arguments);
          };
        }();
        _0x1ac597.PlayExtendMid = function () {
          var _0x31616e = _0x2eaa1b(_0x5266ea().mark(function _0x1b972a() {
            return _0x5266ea().wrap(function (_0x1d73f0) {
              for (;;) {
                switch (_0x1d73f0.prev = _0x1d73f0.next) {
                  case 0x0:
                    _0x1d73f0.next = 0x2;
                    return this.PlayAnimation(_0x15b4d4.AnimName.Extend_Mid, false);
                  case 0x2:
                  case "end":
                    return _0x1d73f0.stop();
                }
              }
            }, _0x1b972a, this);
          }));
          return function () {
            return _0x31616e.apply(this, arguments);
          };
        }();
        _0x1ac597.PlayExtendTop = function () {
          var _0x39f279 = _0x2eaa1b(_0x5266ea().mark(function _0x1c14e3() {
            return _0x5266ea().wrap(function (_0x2dad80) {
              for (;;) {
                switch (_0x2dad80.prev = _0x2dad80.next) {
                  case 0x0:
                    _0x2dad80.next = 0x2;
                    return this.PlayAnimation(_0x15b4d4.AnimName.Extend_Top, false);
                  case 0x2:
                  case 'end':
                    return _0x2dad80.stop();
                }
              }
            }, _0x1c14e3, this);
          }));
          return function () {
            return _0x39f279.apply(this, arguments);
          };
        }();
        _0x1ac597.PlayExtend = function () {
          var _0xf88c24 = _0x2eaa1b(_0x5266ea().mark(function _0x227bc9() {
            return _0x5266ea().wrap(function (_0x20d7be) {
              for (;;) {
                switch (_0x20d7be.prev = _0x20d7be.next) {
                  case 0x0:
                    _0x20d7be.next = 0x2;
                    return this.PlayAnimation(_0x15b4d4.AnimName.Extend_Mid, false);
                  case 0x2:
                  case "end":
                    return _0x20d7be.stop();
                }
              }
            }, _0x227bc9, this);
          }));
          return function () {
            return _0xf88c24.apply(this, arguments);
          };
        }();
        _0x1ac597.PlayWin = function () {
          var _0x26969f = _0x2eaa1b(_0x5266ea().mark(function _0x4651cb() {
            return _0x5266ea().wrap(function (_0x9eb6a2) {
              for (;;) {
                switch (_0x9eb6a2.prev = _0x9eb6a2.next) {
                  case 0x0:
                    _0x9eb6a2.next = 0x2;
                    return this.PlayAnimation(_0x15b4d4.AnimName.Win, false);
                  case 0x2:
                  case 'end':
                    return _0x9eb6a2.stop();
                }
              }
            }, _0x4651cb, this);
          }));
          return function () {
            return _0x26969f.apply(this, arguments);
          };
        }();
        return _0x15b4d4;
      }(_0x45d7ab);
      _0x449bcc.AnimName = {
        'Extend_Bot': "Extend_Bot",
        'Extend_Mid': "Extend_Mid",
        'Extend_Top': "Extend_Top",
        'Extend': "Extend",
        'Win': "Win"
      };
      var _0x141b31 = _0x58f429(_0x41e3f3 = _0x449bcc) || _0x41e3f3;
      var _0x81adb3;
      var _0x48174d;
      var _0x80a692;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, 'abbb2uuzFVK1I0IoTjOsipk', "ExtendWild", undefined);
      var _0x28e65c = _0x9f6cc7.property;
      _0x81adb3 = _0x28e65c({
        'type': _0x141b31,
        'tooltip': "擴展wild動畫"
      });
      _0x48174d = function (_0x1df423) {
        function _0x30662e() {
          var _0x94785d;
          var _0x4926c4 = arguments.length;
          var _0x4731ec = new Array(_0x4926c4);
          for (var _0x161733 = 0x0; _0x161733 < _0x4926c4; _0x161733++) {
            _0x4731ec[_0x161733] = arguments[_0x161733];
          }
          _0x3517d5(_0x94785d = _0x1df423.call.apply(_0x1df423, [this].concat(_0x4731ec)) || this, "m_extandWilds", _0x80a692, _0x1862e3(_0x94785d));
          return _0x94785d;
        }
        _0x47cbbc(_0x30662e, _0x1df423);
        var _0x313820 = _0x30662e.prototype;
        _0x313820.PlayExtend = function () {
          var _0x569b82 = _0x2eaa1b(_0x5266ea().mark(function _0x2ba8e7(_0x427aff, _0x416261) {
            return _0x5266ea().wrap(function (_0x1cc79f) {
              for (;;) {
                switch (_0x1cc79f.prev = _0x1cc79f.next) {
                  case 0x0:
                    this.m_extandWilds[_0x427aff].node.active = true;
                    _0x378220.Play(_0x549b11.AudioClips.FG_Wild_Extend);
                    _0x1cc79f.t0 = _0x416261;
                    _0x1cc79f.next = _0x1cc79f.t0 === _0x549b11.ExtendWildPosition.Bot ? 0x5 : _0x1cc79f.t0 === _0x549b11.ExtendWildPosition.Mid ? 0x8 : _0x1cc79f.t0 === _0x549b11.ExtendWildPosition.Top ? 0xb : _0x1cc79f.t0 === _0x549b11.ExtendWildPosition.None ? 0xe : 0x11;
                    break;
                  case 0x5:
                    _0x1cc79f.next = 0x7;
                    return this.m_extandWilds[_0x427aff].PlayExtendBot();
                  case 0x7:
                    return _0x1cc79f.abrupt("break", 0x11);
                  case 0x8:
                    _0x1cc79f.next = 0xa;
                    return this.m_extandWilds[_0x427aff].PlayExtendMid();
                  case 0xa:
                    return _0x1cc79f.abrupt("break", 0x11);
                  case 0xb:
                    _0x1cc79f.next = 0xd;
                    return this.m_extandWilds[_0x427aff].PlayExtendTop();
                  case 0xd:
                    return _0x1cc79f.abrupt("break", 0x11);
                  case 0xe:
                    _0x1cc79f.next = 0x10;
                    return this.m_extandWilds[_0x427aff].PlayExtend();
                  case 0x10:
                    return _0x1cc79f.abrupt("break", 0x11);
                  case 0x11:
                  case "end":
                    return _0x1cc79f.stop();
                }
              }
            }, _0x2ba8e7, this);
          }));
          return function (_0x542186, _0x270ec9) {
            return _0x569b82.apply(this, arguments);
          };
        }();
        _0x313820.HideExtend = function () {
          var _0x45c1b5 = _0x2eaa1b(_0x5266ea().mark(function _0x5f4552(_0x10860d) {
            return _0x5266ea().wrap(function (_0x4ccfdb) {
              for (;;) {
                switch (_0x4ccfdb.prev = _0x4ccfdb.next) {
                  case 0x0:
                    this.m_extandWilds[_0x10860d].node.active = false;
                  case 0x1:
                  case 'end':
                    return _0x4ccfdb.stop();
                }
              }
            }, _0x5f4552, this);
          }));
          return function (_0x5ce422) {
            return _0x45c1b5.apply(this, arguments);
          };
        }();
        _0x313820.PlayWin = function () {
          var _0x43948f = _0x2eaa1b(_0x5266ea().mark(function _0xcd1ae3(_0x3905a1) {
            return _0x5266ea().wrap(function (_0x36807f) {
              for (;;) {
                switch (_0x36807f.prev = _0x36807f.next) {
                  case 0x0:
                    _0x36807f.next = 0x2;
                    return this.m_extandWilds[_0x3905a1].PlayWin();
                  case 0x2:
                  case "end":
                    return _0x36807f.stop();
                }
              }
            }, _0xcd1ae3, this);
          }));
          return function (_0x3a7bf7) {
            return _0x43948f.apply(this, arguments);
          };
        }();
        return _0x30662e;
      }(_0x55612a);
      _0x80a692 = _0x58cf1d(_0x48174d.prototype, "m_extandWilds", [_0x81adb3], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      var _0x4131c6;
      var _0xb3f293;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, '76796AFPjZEp57Bk24DiFqw', "FGDeclareSpine", undefined);
      var _0x381fe2 = _0x9f6cc7.ccclass;
      _0xb3f293 = function (_0x49861b) {
        function _0x4846bb() {
          return _0x49861b.apply(this, arguments) || this;
        }
        _0x47cbbc(_0x4846bb, _0x49861b);
        var _0x242da4 = _0x4846bb.prototype;
        _0x242da4.PlayStart = function () {
          var _0x34c0a9 = _0x2eaa1b(_0x5266ea().mark(function _0x5a3250() {
            return _0x5266ea().wrap(function (_0x58445b) {
              for (;;) {
                switch (_0x58445b.prev = _0x58445b.next) {
                  case 0x0:
                    _0x58445b.next = 0x2;
                    return this.PlayAnimation(_0x4846bb.AnimName.Start, false);
                  case 0x2:
                  case "end":
                    return _0x58445b.stop();
                }
              }
            }, _0x5a3250, this);
          }));
          return function () {
            return _0x34c0a9.apply(this, arguments);
          };
        }();
        _0x242da4.PlayLoop = function () {
          var _0x3d38e7 = _0x2eaa1b(_0x5266ea().mark(function _0x4a49ff() {
            return _0x5266ea().wrap(function (_0x368c5f) {
              for (;;) {
                switch (_0x368c5f.prev = _0x368c5f.next) {
                  case 0x0:
                    _0x368c5f.next = 0x2;
                    return this.PlayAnimation(_0x4846bb.AnimName.Loop, false);
                  case 0x2:
                  case "end":
                    return _0x368c5f.stop();
                }
              }
            }, _0x4a49ff, this);
          }));
          return function () {
            return _0x3d38e7.apply(this, arguments);
          };
        }();
        _0x242da4.PlayEnd = function () {
          var _0x5e6801 = _0x2eaa1b(_0x5266ea().mark(function _0xd6955d(_0x19941d) {
            return _0x5266ea().wrap(function (_0x5e29de) {
              for (;;) {
                switch (_0x5e29de.prev = _0x5e29de.next) {
                  case 0x0:
                    if (!_0x19941d) {
                      _0x5e29de.next = 0x5;
                      break;
                    }
                    _0x5e29de.next = 0x3;
                    return this.PlayAnimation(_0x4846bb.AnimName.End_L, false);
                  case 0x3:
                    _0x5e29de.next = 0x7;
                    break;
                  case 0x5:
                    _0x5e29de.next = 0x7;
                    return this.PlayAnimation(_0x4846bb.AnimName.End_S, false);
                  case 0x7:
                  case "end":
                    return _0x5e29de.stop();
                }
              }
            }, _0xd6955d, this);
          }));
          return function (_0x184953) {
            return _0x5e6801.apply(this, arguments);
          };
        }();
        return _0x4846bb;
      }(_0x45d7ab);
      _0xb3f293.AnimName = {
        'Start': "Start",
        'Loop': "Loop",
        'End_L': "End_L",
        'End_S': "End_S"
      };
      var _0x3188d0 = _0x381fe2(_0x4131c6 = _0xb3f293) || _0x4131c6;
      var _0x2ee8b4;
      var _0xb5c35b;
      var _0x52cf05;
      var _0x34bb5d;
      var _0x15e4c5;
      var _0x34d8c2;
      var _0xc9dfda;
      var _0x5841ad;
      var _0x30f923;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "ae3d8HlElZO0r57rfvXOfKg", 'FGDeclare', undefined);
      var _0x31995d = _0x9f6cc7.property;
      _0x2ee8b4 = _0x31995d({
        'type': _0x3188d0,
        'tooltip': 'Spine'
      });
      _0xb5c35b = _0x31995d({
        'type': _0x57e8d7,
        'tooltip': '語系字1'
      });
      _0x52cf05 = _0x31995d({
        'type': _0x57e8d7,
        'tooltip': '語系字2'
      });
      _0x34bb5d = _0x31995d({
        'type': _0x57e8d7,
        'tooltip': "語系字3"
      });
      _0x15e4c5 = function (_0x36b96d) {
        function _0x3c71ad() {
          var _0x838ff0;
          var _0x554ed0 = arguments.length;
          var _0x262add = new Array(_0x554ed0);
          for (var _0x4469d5 = 0x0; _0x4469d5 < _0x554ed0; _0x4469d5++) {
            _0x262add[_0x4469d5] = arguments[_0x4469d5];
          }
          _0x3517d5(_0x838ff0 = _0x36b96d.call.apply(_0x36b96d, [this].concat(_0x262add)) || this, "m_spine", _0x34d8c2, _0x1862e3(_0x838ff0));
          _0x3517d5(_0x838ff0, "m_txt1", _0xc9dfda, _0x1862e3(_0x838ff0));
          _0x3517d5(_0x838ff0, "m_txt2", _0x5841ad, _0x1862e3(_0x838ff0));
          _0x3517d5(_0x838ff0, "m_txt3", _0x30f923, _0x1862e3(_0x838ff0));
          return _0x838ff0;
        }
        _0x47cbbc(_0x3c71ad, _0x36b96d);
        var _0x2241cd = _0x3c71ad.prototype;
        _0x2241cd.SetTxt = function () {
          var _0x25aae8 = _0x39a0c9.GetGameAtlas();
          this.m_txt1.spriteFrame = _0x25aae8.getSpriteFrame("FG_txt_01");
          this.m_txt2.spriteFrame = _0x25aae8.getSpriteFrame('FG_txt_02');
          this.m_txt3.spriteFrame = _0x25aae8.getSpriteFrame("FG_txt_05");
        };
        _0x2241cd.PlayStart = function () {
          var _0x1a42da = _0x2eaa1b(_0x5266ea().mark(function _0x1862e4() {
            return _0x5266ea().wrap(function (_0xef78a7) {
              for (;;) {
                switch (_0xef78a7.prev = _0xef78a7.next) {
                  case 0x0:
                    this.node.active = true;
                    _0xef78a7.next = 0x3;
                    return this.m_spine.PlayStart();
                  case 0x3:
                  case "end":
                    return _0xef78a7.stop();
                }
              }
            }, _0x1862e4, this);
          }));
          return function () {
            return _0x1a42da.apply(this, arguments);
          };
        }();
        _0x2241cd.PlayLoop = function () {
          var _0x16f6ef = _0x2eaa1b(_0x5266ea().mark(function _0x41db88() {
            return _0x5266ea().wrap(function (_0x1d5df4) {
              for (;;) {
                switch (_0x1d5df4.prev = _0x1d5df4.next) {
                  case 0x0:
                    _0x1d5df4.next = 0x2;
                    return this.m_spine.PlayLoop();
                  case 0x2:
                  case "end":
                    return _0x1d5df4.stop();
                }
              }
            }, _0x41db88, this);
          }));
          return function () {
            return _0x16f6ef.apply(this, arguments);
          };
        }();
        _0x2241cd.PlayEnd = function () {
          var _0x279325 = _0x2eaa1b(_0x5266ea().mark(function _0x484526(_0x3ebb44) {
            return _0x5266ea().wrap(function (_0x38444b) {
              for (;;) {
                switch (_0x38444b.prev = _0x38444b.next) {
                  case 0x0:
                    _0x38444b.next = 0x2;
                    return this.m_spine.PlayEnd(_0x3ebb44);
                  case 0x2:
                    this.node.active = false;
                  case 0x3:
                  case "end":
                    return _0x38444b.stop();
                }
              }
            }, _0x484526, this);
          }));
          return function (_0x5e2316) {
            return _0x279325.apply(this, arguments);
          };
        }();
        return _0x3c71ad;
      }(_0x55612a);
      _0x34d8c2 = _0x58cf1d(_0x15e4c5.prototype, 'm_spine', [_0x2ee8b4], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0xc9dfda = _0x58cf1d(_0x15e4c5.prototype, "m_txt1", [_0xb5c35b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5841ad = _0x58cf1d(_0x15e4c5.prototype, 'm_txt2', [_0x52cf05], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x30f923 = _0x58cf1d(_0x15e4c5.prototype, 'm_txt3', [_0x34bb5d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "76c0di3ldZEsKZzgOkMezw2", 'FeaturesAck', undefined);
      var _0x3eb22e = function () {};
      _0x3eb22e.MG = {
        'RoundQueue': [{
          'Symbol': [{
            'Col': [0xa, 0xa, 0xa]
          }, {
            'Col': [0xa, 0xa, 0xb]
          }, {
            'Col': [0xa, 0x3, 0xb]
          }, {
            'Col': [0xb, 0x6, 0xa]
          }, {
            'Col': [0x0, 0xa, 0x0]
          }],
          'AwardDataVec': [{
            'Pos': [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x8, 0x9, 0xb, 0xd],
            'Symbol': 0xa,
            'Count': 0x5,
            'LineNum': 0x24,
            'Win': 734.4
          }],
          'FreeWheelColumn': [],
          'FreeSymbol': [{
            'Col': []
          }, {
            'Col': []
          }, {
            'Col': []
          }, {
            'Col': []
          }, {
            'Col': []
          }],
          'FreeAwardDataVec': [],
          'RoundWin': 734.4,
          'WheelType': 0x9,
          'WheelMul': 0x11,
          'WildCount': 0x3,
          'FreeWheelType': -0x1,
          'AwardTypeFlag': 0x1,
          'IsMain': true,
          'GetFree': false,
          'FreeNowRound': 0x0,
          'FreeTotalRound': 0x0,
          'MaxFlag': false,
          'FreeFirstWin': 0x0
        }],
        'FreeTotalWin': 0x0,
        'TotalWin': 734.4,
        'AckType': 0x0,
        'RTP': 0.971
      };
      _0x3eb22e.FG = {
        'RoundQueue': [{
          'Symbol': [{
            'Col': [0xa, 0xa, 0xa]
          }, {
            'Col': [0x6, 0xb, 0x6]
          }, {
            'Col': [0x4, 0xb, 0x8]
          }, {
            'Col': [0xb, 0x4, 0x8]
          }, {
            'Col': [0x8, 0x8, 0x8]
          }],
          'AwardDataVec': [{
            'Pos': [0x0, 0x1, 0x2, 0x4, 0x7, 0x9],
            'Symbol': 0xa,
            'Count': 0x4,
            'LineNum': 0x3,
            'Win': 2.4
          }],
          'FreeWheelColumn': [],
          'FreeSymbol': [{
            'Col': []
          }, {
            'Col': []
          }, {
            'Col': []
          }, {
            'Col': []
          }, {
            'Col': []
          }],
          'FreeAwardDataVec': [],
          'RoundWin': 2.4,
          'WildCount': 0x3,
          'GetFree': true,
          'FreeTotalRound': 0x8,
          'FreeWheelType': -0x1,
          'AwardTypeFlag': 0x3,
          'IsMain': true,
          'WheelType': 0x0,
          'WheelMul': 0x0,
          'FreeNowRound': 0x0,
          'MaxFlag': false,
          'FreeFirstWin': 0x0
        }, {
          'Symbol': [{
            'Col': [0x9, 0x9, 0x4]
          }, {
            'Col': [0xb, 0x3, 0x9]
          }, {
            'Col': [0x8, 0xb, 0x2]
          }, {
            'Col': [0x4, 0xb, 0x7]
          }, {
            'Col': [0x5, 0x5, 0x5]
          }],
          'AwardDataVec': [{
            'Pos': [0x2, 0x3, 0x7, 0x9, 0xa],
            'Symbol': 0x4,
            'Count': 0x4,
            'LineNum': 0x2,
            'Win': 0.8
          }, {
            'Pos': [0x0, 0x1, 0x3, 0x5, 0x7, 0xa],
            'Symbol': 0x9,
            'Count': 0x4,
            'LineNum': 0x4,
            'Win': 3.2
          }],
          'FreeWheelColumn': [0x2],
          'FreeSymbol': [{
            'Col': [0x9, 0x9, 0x4]
          }, {
            'Col': [0xb, 0x3, 0x9]
          }, {
            'Col': [0xb, 0xb, 0xb]
          }, {
            'Col': [0x4, 0xb, 0x7]
          }, {
            'Col': [0x5, 0x5, 0x5]
          }],
          'FreeAwardDataVec': [{
            'Pos': [0x2, 0x3, 0x6, 0x7, 0x8, 0x9, 0xa],
            'Symbol': 0x4,
            'Count': 0x4,
            'LineNum': 0x6,
            'Win': 2.4
          }, {
            'Pos': [0x0, 0x1, 0x3, 0x5, 0x6, 0x7, 0x8, 0xa],
            'Symbol': 0x9,
            'Count': 0x4,
            'LineNum': 0xc,
            'Win': 9.6
          }],
          'RoundWin': 0xc,
          'WheelType': 0x8,
          'WheelMul': 0x2,
          'WildCount': 0x3,
          'FreeNowRound': 0x1,
          'FreeTotalRound': 0x8,
          'FreeWheelType': 0x1,
          'AwardTypeFlag': 0x5,
          'FreeFirstWin': 0x2,
          'GetFree': false,
          'IsMain': false,
          'MaxFlag': false
        }, {
          'Symbol': [{
            'Col': [0x4, 0x4, 0x4]
          }, {
            'Col': [0x3, 0x8, 0xb]
          }, {
            'Col': [0xb, 0x2, 0x9]
          }, {
            'Col': [0x1, 0x7, 0xb]
          }, {
            'Col': [0x4, 0x4, 0x4]
          }],
          'AwardDataVec': [{
            'Pos': [0x0, 0x1, 0x2, 0x5, 0x6, 0xb, 0xc, 0xd, 0xe],
            'Symbol': 0x4,
            'Count': 0x5,
            'LineNum': 0x9,
            'Win': 99.9
          }],
          'FreeWheelColumn': [0x3, 0x1, 0x2],
          'FreeSymbol': [{
            'Col': [0x4, 0x4, 0x4]
          }, {
            'Col': [0xb, 0xb, 0xb]
          }, {
            'Col': [0xb, 0xb, 0xb]
          }, {
            'Col': [0xb, 0xb, 0xb]
          }, {
            'Col': [0x4, 0x4, 0x4]
          }],
          'FreeAwardDataVec': [{
            'Pos': [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe],
            'Symbol': 0x4,
            'Count': 0x5,
            'LineNum': 0xf3,
            'Win': 2697.3
          }],
          'RoundWin': 2697.3,
          'WheelMul': 0x25,
          'WildCount': 0x3,
          'FreeNowRound': 0x2,
          'FreeTotalRound': 0x8,
          'FreeWheelType': 0x3,
          'AwardTypeFlag': 0x5,
          'FreeFirstWin': 2.7,
          'WheelType': 0x0,
          'GetFree': false,
          'IsMain': false,
          'MaxFlag': false
        }, {
          'Symbol': [{
            'Col': [0x6, 0x6, 0x6]
          }, {
            'Col': [0x3, 0x3, 0x3]
          }, {
            'Col': [0xa, 0xa, 0x1]
          }, {
            'Col': [0x9, 0x9, 0x3]
          }, {
            'Col': [0x6, 0x6, 0x4]
          }],
          'AwardDataVec': [],
          'FreeWheelColumn': [],
          'FreeSymbol': [{
            'Col': []
          }, {
            'Col': []
          }, {
            'Col': []
          }, {
            'Col': []
          }, {
            'Col': []
          }],
          'FreeAwardDataVec': [],
          'WheelType': -0x1,
          'FreeNowRound': 0x3,
          'FreeTotalRound': 0x8,
          'FreeWheelType': -0x1,
          'AwardTypeFlag': 0x4,
          'ReelType': 0x2,
          'RoundWin': 0x0,
          'WheelMul': 0x0,
          'WildCount': 0x0,
          'GetFree': false,
          'IsMain': false,
          'MaxFlag': false,
          'FreeFirstWin': 0x0
        }, {
          'Symbol': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x9, 0x9, 0x9]
          }, {
            'Col': [0x4, 0x4, 0x6]
          }, {
            'Col': [0x3, 0x9, 0x9]
          }, {
            'Col': [0x0, 0x0, 0x7]
          }],
          'AwardDataVec': [],
          'FreeWheelColumn': [],
          'FreeSymbol': [{
            'Col': []
          }, {
            'Col': []
          }, {
            'Col': []
          }, {
            'Col': []
          }, {
            'Col': []
          }],
          'FreeAwardDataVec': [],
          'WheelType': -0x1,
          'FreeNowRound': 0x4,
          'FreeTotalRound': 0x8,
          'FreeWheelType': -0x1,
          'AwardTypeFlag': 0x4,
          'ReelType': 0x2,
          'RoundWin': 0x0,
          'WheelMul': 0x0,
          'WildCount': 0x0,
          'GetFree': false,
          'IsMain': false,
          'MaxFlag': false,
          'FreeFirstWin': 0x0
        }, {
          'Symbol': [{
            'Col': [0x8, 0x2, 0x2]
          }, {
            'Col': [0x7, 0x7, 0x7]
          }, {
            'Col': [0x8, 0x8, 0x8]
          }, {
            'Col': [0x5, 0x5, 0x7]
          }, {
            'Col': [0x5, 0x5, 0x5]
          }],
          'AwardDataVec': [],
          'FreeWheelColumn': [],
          'FreeSymbol': [{
            'Col': []
          }, {
            'Col': []
          }, {
            'Col': []
          }, {
            'Col': []
          }, {
            'Col': []
          }],
          'FreeAwardDataVec': [],
          'WheelType': -0x1,
          'FreeNowRound': 0x5,
          'FreeTotalRound': 0x8,
          'FreeWheelType': -0x1,
          'AwardTypeFlag': 0x4,
          'ReelType': 0x1,
          'RoundWin': 0x0,
          'WheelMul': 0x0,
          'WildCount': 0x0,
          'GetFree': false,
          'IsMain': false,
          'MaxFlag': false,
          'FreeFirstWin': 0x0
        }, {
          'Symbol': [{
            'Col': [0x4, 0x4, 0x6]
          }, {
            'Col': [0x8, 0x8, 0x5]
          }, {
            'Col': [0x6, 0x4, 0xb]
          }, {
            'Col': [0x0, 0x7, 0xb]
          }, {
            'Col': [0x3, 0x3, 0x3]
          }],
          'AwardDataVec': [],
          'FreeWheelColumn': [],
          'FreeSymbol': [{
            'Col': []
          }, {
            'Col': []
          }, {
            'Col': []
          }, {
            'Col': []
          }, {
            'Col': []
          }],
          'FreeAwardDataVec': [],
          'WheelType': -0x1,
          'FreeNowRound': 0x6,
          'FreeTotalRound': 0x8,
          'FreeWheelType': -0x1,
          'AwardTypeFlag': 0x4,
          'ReelType': 0x2,
          'RoundWin': 0x0,
          'WheelMul': 0x0,
          'WildCount': 0x0,
          'GetFree': false,
          'IsMain': false,
          'MaxFlag': false,
          'FreeFirstWin': 0x0
        }, {
          'Symbol': [{
            'Col': [0x8, 0x8, 0x8]
          }, {
            'Col': [0x6, 0x6, 0x6]
          }, {
            'Col': [0xb, 0x5, 0x6]
          }, {
            'Col': [0x4, 0x4, 0x4]
          }, {
            'Col': [0x8, 0x8, 0x3]
          }],
          'AwardDataVec': [],
          'FreeWheelColumn': [],
          'FreeSymbol': [{
            'Col': []
          }, {
            'Col': []
          }, {
            'Col': []
          }, {
            'Col': []
          }, {
            'Col': []
          }],
          'FreeAwardDataVec': [],
          'WheelType': -0x1,
          'FreeNowRound': 0x7,
          'FreeTotalRound': 0x8,
          'FreeWheelType': -0x1,
          'AwardTypeFlag': 0x4,
          'ReelType': 0x1,
          'RoundWin': 0x0,
          'WheelMul': 0x0,
          'WildCount': 0x0,
          'GetFree': false,
          'IsMain': false,
          'MaxFlag': false,
          'FreeFirstWin': 0x0
        }, {
          'Symbol': [{
            'Col': [0x4, 0x4, 0x6]
          }, {
            'Col': [0x5, 0x5, 0x9]
          }, {
            'Col': [0xb, 0x6, 0x1]
          }, {
            'Col': [0x6, 0xb, 0x4]
          }, {
            'Col': [0xa, 0x2, 0x2]
          }],
          'AwardDataVec': [],
          'FreeWheelColumn': [],
          'FreeSymbol': [{
            'Col': []
          }, {
            'Col': []
          }, {
            'Col': []
          }, {
            'Col': []
          }, {
            'Col': []
          }],
          'FreeAwardDataVec': [],
          'WheelType': -0x1,
          'FreeNowRound': 0x8,
          'FreeTotalRound': 0x8,
          'FreeWheelType': -0x1,
          'AwardTypeFlag': 0xc,
          'ReelType': 0x2,
          'RoundWin': 0x0,
          'WheelMul': 0x0,
          'WildCount': 0x0,
          'GetFree': false,
          'IsMain': false,
          'MaxFlag': false,
          'FreeFirstWin': 0x0
        }],
        'FreeTotalWin': 2709.3,
        'TotalWin': 2711.7,
        'AckType': 0x0,
        'RTP': 0.971
      };
      _0x3eb22e.TEST = {
        'RoundQueue': [{
          'Symbol': [{
            'Col': [0x5, 0x6, 0x4]
          }, {
            'Col': [0x6, 0xb, 0x5]
          }, {
            'Col': [0x6, 0x6, 0x5]
          }, {
            'Col': [0xb, 0x5, 0x5]
          }, {
            'Col': [0x5, 0x8, 0x6]
          }],
          'AwardDataVec': [{
            'Pos': [0x0, 0x4, 0x5, 0x8, 0x9, 0xa, 0xb, 0xc],
            'Symbol': 0x5,
            'Count': 0x5,
            'LineNum': 0x6,
            'Win': 5.4
          }, {
            'Pos': [0x1, 0x3, 0x4, 0x6, 0x7, 0x9, 0xe],
            'Symbol': 0x6,
            'Count': 0x5,
            'LineNum': 0x4,
            'Win': 4.8
          }],
          'FreeWheelColumn': [],
          'FreeSymbol': [{
            'Col': []
          }, {
            'Col': []
          }, {
            'Col': []
          }, {
            'Col': []
          }, {
            'Col': []
          }],
          'FreeAwardDataVec': [],
          'RoundWin': 20.4,
          'WheelType': -0x1,
          'WildCount': 0x2,
          'FreeWheelType': -0x1,
          'AwardTypeFlag': 0x1,
          'IsMain': true,
          'WheelMul': 0x0,
          'GetFree': false,
          'FreeNowRound': 0x0,
          'FreeTotalRound': 0x0,
          'MaxFlag': false
        }],
        'FreeTotalWin': 0x0,
        'TotalWin': 20.4,
        'AckType': 0x0,
        'RTP': 0.97
      };
      _0xe3c15f._RF.pop();
      var _0x4b9b51 = function () {
        function _0x22bf3e() {
          this._registry = {};
          this._moduleCache = {};
        }
        var _0x11bca1 = _0x22bf3e.prototype;
        _0x11bca1.define = function (_0x5c0ddd, _0x29120f, _0x14cf47) {
          this._registry[_0x5c0ddd] = {
            'factory': _0x29120f,
            'resolveMap': _0x14cf47
          };
        };
        _0x11bca1.require = function (_0x289b04) {
          return this._require(_0x289b04);
        };
        _0x11bca1.throwInvalidWrapper = function (_0x2c0a4d, _0x4becbf) {
          throw new Error("Module '" + _0x2c0a4d + "' imported from '" + _0x4becbf + "' is expected be an ESM-wrapped CommonJS module but it doesn't.");
        };
        _0x11bca1._require = function (_0x42938e, _0x2ab4c9) {
          var _0xdfe4fc = this._moduleCache[_0x42938e];
          if (_0xdfe4fc) {
            return _0xdfe4fc.exports;
          }
          var _0x2ca995 = {
            'id': _0x42938e,
            'exports': {}
          };
          this._moduleCache[_0x42938e] = _0x2ca995;
          this._tryModuleLoad(_0x2ca995, _0x42938e);
          return _0x2ca995.exports;
        };
        _0x11bca1._resolve = function (_0x24a536, _0x4f900d) {
          return this._resolveFromInfos(_0x24a536, _0x4f900d) || this._throwUnresolved(_0x24a536, _0x4f900d);
        };
        _0x11bca1._resolveFromInfos = function (_0x4714df, _0xa5c524) {
          var _0x596140;
          var _0x3d5d72;
          return _0x4714df in cjsInfos ? _0x4714df : _0xa5c524 && null != (_0x596140 = null == (_0x3d5d72 = cjsInfos[_0xa5c524]) ? undefined : _0x3d5d72.resolveCache[_0x4714df]) ? _0x596140 : undefined;
        };
        _0x11bca1._tryModuleLoad = function (_0x5b67d4, _0x3a0797) {
          var _0xa49868 = true;
          try {
            this._load(_0x5b67d4, _0x3a0797);
            _0xa49868 = false;
          } finally {
            if (_0xa49868) {
              delete this._moduleCache[_0x3a0797];
            }
          }
        };
        _0x11bca1._load = function (_0x2bae6c, _0x1c469b) {
          var _0x54976e = this._loadWrapper(_0x1c469b);
          var _0x266a32 = _0x54976e.factory;
          var _0x56e985 = _0x54976e.resolveMap;
          var _0x4c6d64 = this._createRequire(_0x2bae6c);
          var _0x482723 = _0x56e985 ? this._createRequireWithResolveMap("function" == typeof _0x56e985 ? _0x56e985() : _0x56e985, _0x4c6d64) : _0x4c6d64;
          _0x266a32(_0x2bae6c.exports, _0x482723, _0x2bae6c);
        };
        _0x11bca1._loadWrapper = function (_0x179ff3) {
          return _0x179ff3 in this._registry ? this._registry[_0x179ff3] : this._loadHostProvidedModules(_0x179ff3);
        };
        _0x11bca1._loadHostProvidedModules = function (_0x36bb18) {
          return {
            'factory': function (_0xa05e9f, _0x37048a, _0x21b9b5) {
              if ("undefined" == typeof require) {
                throw new Error("Current environment does not provide a require() for requiring '" + _0x36bb18 + "'.");
              }
              try {
                _0x21b9b5.exports = require(_0x36bb18);
              } catch (_0x17f8dd) {
                throw new Error("Exception thrown when calling host defined require('" + _0x36bb18 + "').", {
                  'cause': _0x17f8dd
                });
              }
            }
          };
        };
        _0x11bca1._createRequire = function (_0x177416) {
          var _0x834fb8 = this;
          return function (_0x348078) {
            return _0x834fb8._require(_0x348078, _0x177416);
          };
        };
        _0x11bca1._createRequireWithResolveMap = function (_0x34fcc9, _0x451ae0) {
          return function (_0x27f291) {
            var _0x2cd245 = _0x34fcc9[_0x27f291];
            if (_0x2cd245) {
              return _0x451ae0(_0x2cd245);
            }
            throw new Error("Unresolved specifier " + _0x27f291);
          };
        };
        _0x11bca1._throwUnresolved = function (_0x70aaeb, _0x2ae4c1) {
          throw new Error("Unable to resolve " + _0x70aaeb + " from " + parent + '.');
        };
        return _0x22bf3e;
      }();
      var _0x3cf404 = new _0x4b9b51();
      var _0x22f135;
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/long/src/long.js", function (_0x1599d5, _0x4fca30, _0x328863, _0x179182, _0x3f618f) {
        _0x328863.exports = _0x23c6bf;
        var _0x4a1244 = null;
        try {
          _0x4a1244 = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0x0, 0x61, 0x73, 0x6d, 0x1, 0x0, 0x0, 0x0, 0x1, 0xd, 0x2, 0x60, 0x0, 0x1, 0x7f, 0x60, 0x4, 0x7f, 0x7f, 0x7f, 0x7f, 0x1, 0x7f, 0x3, 0x7, 0x6, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x6, 0x6, 0x1, 0x7f, 0x1, 0x41, 0x0, 0xb, 0x7, 0x32, 0x6, 0x3, 0x6d, 0x75, 0x6c, 0x0, 0x1, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x73, 0x0, 0x2, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x75, 0x0, 0x3, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x73, 0x0, 0x4, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x75, 0x0, 0x5, 0x8, 0x67, 0x65, 0x74, 0x5f, 0x68, 0x69, 0x67, 0x68, 0x0, 0x0, 0xa, 0xbf, 0x1, 0x6, 0x4, 0x0, 0x23, 0x0, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7e, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7f, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x80, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x81, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x82, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb])), {}).exports;
        } catch (_0xc34c21) {}
        function _0x23c6bf(_0xa54bc6, _0x160cc9, _0x254e61) {
          this.low = 0x0 | _0xa54bc6;
          this.high = 0x0 | _0x160cc9;
          this.unsigned = !!_0x254e61;
        }
        function _0x16a49a(_0x47a7f8) {
          return true === (_0x47a7f8 && _0x47a7f8.__isLong__);
        }
        _0x23c6bf.prototype.__isLong__;
        Object.defineProperty(_0x23c6bf.prototype, "__isLong__", {
          'value': true
        });
        _0x23c6bf.isLong = _0x16a49a;
        var _0x1d335b = {};
        var _0x4bab45 = {};
        function _0x58232e(_0x13a881, _0x1a5268) {
          var _0x4bd6f4;
          var _0x421310;
          var _0x2d3ee4;
          return _0x1a5268 ? (_0x2d3ee4 = 0x0 <= (_0x13a881 >>>= 0x0) && _0x13a881 < 0x100) && (_0x421310 = _0x4bab45[_0x13a881]) ? _0x421310 : (_0x4bd6f4 = new _0x23c6bf(_0x13a881, (0x0 | _0x13a881) < 0x0 ? -0x1 : 0x0, true), _0x2d3ee4 && (_0x4bab45[_0x13a881] = _0x4bd6f4), _0x4bd6f4) : (_0x2d3ee4 = -0x80 <= (_0x13a881 |= 0x0) && _0x13a881 < 0x80) && (_0x421310 = _0x1d335b[_0x13a881]) ? _0x421310 : (_0x4bd6f4 = new _0x23c6bf(_0x13a881, _0x13a881 < 0x0 ? -0x1 : 0x0, false), _0x2d3ee4 && (_0x1d335b[_0x13a881] = _0x4bd6f4), _0x4bd6f4);
        }
        function _0x269839(_0x3e7fa0, _0x33e06a) {
          if (isNaN(_0x3e7fa0)) {
            return _0x33e06a ? _0x3606d8 : _0x3bbc86;
          }
          if (_0x33e06a) {
            if (_0x3e7fa0 < 0x0) {
              return _0x3606d8;
            }
            if (_0x3e7fa0 >= 18446744073709552000) {
              return _0x574ee5;
            }
          } else {
            if (_0x3e7fa0 <= -9223372036854776000) {
              return _0x31b244;
            }
            if (_0x3e7fa0 + 0x1 >= 9223372036854776000) {
              return _0xe303b7;
            }
          }
          return _0x3e7fa0 < 0x0 ? _0x269839(-_0x3e7fa0, _0x33e06a).neg() : new _0x23c6bf(_0x3e7fa0 % 0x100000000 | 0x0, _0x3e7fa0 / 0x100000000 | 0x0, _0x33e06a);
        }
        function _0x16870f(_0x1d603e, _0x135dca, _0x2d8efb) {
          return new _0x23c6bf(_0x1d603e, _0x135dca, _0x2d8efb);
        }
        _0x23c6bf.fromInt = _0x58232e;
        _0x23c6bf.fromNumber = _0x269839;
        _0x23c6bf.fromBits = _0x16870f;
        var _0x33def1 = Math.pow;
        function _0x1f89ec(_0x524c7a, _0x2a034e, _0x12210a) {
          if (0x0 === _0x524c7a.length) {
            throw Error("empty string");
          }
          if ('NaN' === _0x524c7a || "Infinity" === _0x524c7a || "+Infinity" === _0x524c7a || '-Infinity' === _0x524c7a) {
            return _0x3bbc86;
          }
          if ("number" == typeof _0x2a034e) {
            _0x12210a = _0x2a034e;
            _0x2a034e = false;
          } else {
            _0x2a034e = !!_0x2a034e;
          }
          if ((_0x12210a = _0x12210a || 0xa) < 0x2 || 0x24 < _0x12210a) {
            throw RangeError("radix");
          }
          var _0x4daacd;
          if ((_0x4daacd = _0x524c7a.indexOf('-')) > 0x0) {
            throw Error("interior hyphen");
          }
          if (0x0 === _0x4daacd) {
            return _0x1f89ec(_0x524c7a.substring(0x1), _0x2a034e, _0x12210a).neg();
          }
          var _0x1a3473 = _0x269839(_0x33def1(_0x12210a, 0x8));
          var _0x366955 = _0x3bbc86;
          for (var _0x336c42 = 0x0; _0x336c42 < _0x524c7a.length; _0x336c42 += 0x8) {
            var _0x14249f = Math.min(0x8, _0x524c7a.length - _0x336c42);
            var _0x2c20a1 = parseInt(_0x524c7a.substring(_0x336c42, _0x336c42 + _0x14249f), _0x12210a);
            if (_0x14249f < 0x8) {
              var _0x419c91 = _0x269839(_0x33def1(_0x12210a, _0x14249f));
              _0x366955 = _0x366955.mul(_0x419c91).add(_0x269839(_0x2c20a1));
            } else {
              _0x366955 = (_0x366955 = _0x366955.mul(_0x1a3473)).add(_0x269839(_0x2c20a1));
            }
          }
          _0x366955.unsigned = _0x2a034e;
          return _0x366955;
        }
        function _0x166c24(_0x18529c, _0x1bc5af) {
          return "number" == typeof _0x18529c ? _0x269839(_0x18529c, _0x1bc5af) : 'string' == typeof _0x18529c ? _0x1f89ec(_0x18529c, _0x1bc5af) : new _0x23c6bf(_0x18529c.low, _0x18529c.high, "boolean" == typeof _0x1bc5af ? _0x1bc5af : _0x18529c.unsigned);
        }
        _0x23c6bf.fromString = _0x1f89ec;
        _0x23c6bf.fromValue = _0x166c24;
        var _0x35a6d0 = _0x58232e(16777216);
        var _0x3bbc86 = _0x58232e(0x0);
        _0x23c6bf.ZERO = _0x3bbc86;
        var _0x3606d8 = _0x58232e(0x0, true);
        _0x23c6bf.UZERO = _0x3606d8;
        var _0x3e3973 = _0x58232e(0x1);
        _0x23c6bf.ONE = _0x3e3973;
        var _0x254bf8 = _0x58232e(0x1, true);
        _0x23c6bf.UONE = _0x254bf8;
        var _0x48320d = _0x58232e(-0x1);
        _0x23c6bf.NEG_ONE = _0x48320d;
        var _0xe303b7 = new _0x23c6bf(-0x1, 0x7fffffff, false);
        _0x23c6bf.MAX_VALUE = _0xe303b7;
        var _0x574ee5 = new _0x23c6bf(-0x1, -0x1, true);
        _0x23c6bf.MAX_UNSIGNED_VALUE = _0x574ee5;
        var _0x31b244 = new _0x23c6bf(0x0, -0x80000000, false);
        _0x23c6bf.MIN_VALUE = _0x31b244;
        var _0xb915e2 = _0x23c6bf.prototype;
        _0xb915e2.toInt = function () {
          return this.unsigned ? this.low >>> 0x0 : this.low;
        };
        _0xb915e2.toNumber = function () {
          return this.unsigned ? (this.high >>> 0x0) * 0x100000000 + (this.low >>> 0x0) : this.high * 0x100000000 + (this.low >>> 0x0);
        };
        _0xb915e2.toString = function (_0x2b663e) {
          if ((_0x2b663e = _0x2b663e || 0xa) < 0x2 || 0x24 < _0x2b663e) {
            throw RangeError("radix");
          }
          if (this.isZero()) {
            return '0';
          }
          if (this.isNegative()) {
            if (this.eq(_0x31b244)) {
              var _0x5b639f = _0x269839(_0x2b663e);
              var _0x51f8ce = this.div(_0x5b639f);
              var _0x1f40fc = _0x51f8ce.mul(_0x5b639f).sub(this);
              return _0x51f8ce.toString(_0x2b663e) + _0x1f40fc.toInt().toString(_0x2b663e);
            }
            return '-' + this.neg().toString(_0x2b663e);
          }
          var _0x27befe = _0x269839(_0x33def1(_0x2b663e, 0x6), this.unsigned);
          var _0x3f8c1f = this;
          for (var _0x4d73f7 = '';;) {
            var _0x3229bf = _0x3f8c1f.div(_0x27befe);
            var _0x2c7f53 = (_0x3f8c1f.sub(_0x3229bf.mul(_0x27befe)).toInt() >>> 0x0).toString(_0x2b663e);
            if ((_0x3f8c1f = _0x3229bf).isZero()) {
              return _0x2c7f53 + _0x4d73f7;
            }
            for (; _0x2c7f53.length < 0x6;) {
              _0x2c7f53 = '0' + _0x2c7f53;
            }
            _0x4d73f7 = '' + _0x2c7f53 + _0x4d73f7;
          }
        };
        _0xb915e2.getHighBits = function () {
          return this.high;
        };
        _0xb915e2.getHighBitsUnsigned = function () {
          return this.high >>> 0x0;
        };
        _0xb915e2.getLowBits = function () {
          return this.low;
        };
        _0xb915e2.getLowBitsUnsigned = function () {
          return this.low >>> 0x0;
        };
        _0xb915e2.getNumBitsAbs = function () {
          if (this.isNegative()) {
            return this.eq(_0x31b244) ? 0x40 : this.neg().getNumBitsAbs();
          }
          var _0x26e16a = 0x0 != this.high ? this.high : this.low;
          for (var _0x41d755 = 0x1f; _0x41d755 > 0x0 && 0x0 == (_0x26e16a & 0x1 << _0x41d755); _0x41d755--) {
            ;
          }
          return 0x0 != this.high ? _0x41d755 + 0x21 : _0x41d755 + 0x1;
        };
        _0xb915e2.isZero = function () {
          return 0x0 === this.high && 0x0 === this.low;
        };
        _0xb915e2.eqz = _0xb915e2.isZero;
        _0xb915e2.isNegative = function () {
          return !this.unsigned && this.high < 0x0;
        };
        _0xb915e2.isPositive = function () {
          return this.unsigned || this.high >= 0x0;
        };
        _0xb915e2.isOdd = function () {
          return 0x1 == (0x1 & this.low);
        };
        _0xb915e2.isEven = function () {
          return 0x0 == (0x1 & this.low);
        };
        _0xb915e2.equals = function (_0x1bda4) {
          if (!(true === (_0x1bda4 && _0x1bda4.__isLong__))) {
            _0x1bda4 = "number" == typeof _0x1bda4 ? _0x269839(_0x1bda4, undefined) : 'string' == typeof _0x1bda4 ? _0x1f89ec(_0x1bda4, undefined) : new _0x23c6bf(_0x1bda4.low, _0x1bda4.high, _0x1bda4.unsigned);
          }
          return (this.unsigned === _0x1bda4.unsigned || this.high >>> 0x1f != 0x1 || _0x1bda4.high >>> 0x1f != 0x1) && this.high === _0x1bda4.high && this.low === _0x1bda4.low;
        };
        _0xb915e2.eq = _0xb915e2.equals;
        _0xb915e2.notEquals = function (_0x229df1) {
          return !this.eq(_0x229df1);
        };
        _0xb915e2.neq = _0xb915e2.notEquals;
        _0xb915e2.ne = _0xb915e2.notEquals;
        _0xb915e2.lessThan = function (_0xb7e37d) {
          return this.comp(_0xb7e37d) < 0x0;
        };
        _0xb915e2.lt = _0xb915e2.lessThan;
        _0xb915e2.lessThanOrEqual = function (_0x5b3cfe) {
          return this.comp(_0x5b3cfe) <= 0x0;
        };
        _0xb915e2.lte = _0xb915e2.lessThanOrEqual;
        _0xb915e2.le = _0xb915e2.lessThanOrEqual;
        _0xb915e2.greaterThan = function (_0x4055cf) {
          return this.comp(_0x4055cf) > 0x0;
        };
        _0xb915e2.gt = _0xb915e2.greaterThan;
        _0xb915e2.greaterThanOrEqual = function (_0x2d565e) {
          return this.comp(_0x2d565e) >= 0x0;
        };
        _0xb915e2.gte = _0xb915e2.greaterThanOrEqual;
        _0xb915e2.ge = _0xb915e2.greaterThanOrEqual;
        _0xb915e2.compare = function (_0x160c95) {
          if (!(true === (_0x160c95 && _0x160c95.__isLong__))) {
            _0x160c95 = "number" == typeof _0x160c95 ? _0x269839(_0x160c95, undefined) : 'string' == typeof _0x160c95 ? _0x1f89ec(_0x160c95, undefined) : new _0x23c6bf(_0x160c95.low, _0x160c95.high, _0x160c95.unsigned);
          }
          if (this.eq(_0x160c95)) {
            return 0x0;
          }
          var _0x2655ca = this.isNegative();
          var _0x3f23be = _0x160c95.isNegative();
          return _0x2655ca && !_0x3f23be ? -0x1 : !_0x2655ca && _0x3f23be ? 0x1 : this.unsigned ? _0x160c95.high >>> 0x0 > this.high >>> 0x0 || _0x160c95.high === this.high && _0x160c95.low >>> 0x0 > this.low >>> 0x0 ? -0x1 : 0x1 : this.sub(_0x160c95).isNegative() ? -0x1 : 0x1;
        };
        _0xb915e2.comp = _0xb915e2.compare;
        _0xb915e2.negate = function () {
          return !this.unsigned && this.eq(_0x31b244) ? _0x31b244 : this.not().add(_0x3e3973);
        };
        _0xb915e2.neg = _0xb915e2.negate;
        _0xb915e2.add = function (_0x873d23) {
          if (!(true === (_0x873d23 && _0x873d23.__isLong__))) {
            _0x873d23 = "number" == typeof _0x873d23 ? _0x269839(_0x873d23, undefined) : 'string' == typeof _0x873d23 ? _0x1f89ec(_0x873d23, undefined) : new _0x23c6bf(_0x873d23.low, _0x873d23.high, _0x873d23.unsigned);
          }
          var _0x3cae3b = this.high >>> 0x10;
          var _0x2af996 = 0xffff & this.high;
          var _0x1a07c7 = this.low >>> 0x10;
          var _0x72815e = 0xffff & this.low;
          var _0x5a694c = _0x873d23.high >>> 0x10;
          var _0x269958 = 0xffff & _0x873d23.high;
          var _0x50a215 = _0x873d23.low >>> 0x10;
          var _0x1da8eb = 0x0;
          var _0x4e39cb = 0x0;
          var _0x46e9de = 0x0;
          var _0x36b6dc = 0x0;
          _0x46e9de += (_0x36b6dc += _0x72815e + (0xffff & _0x873d23.low)) >>> 0x10;
          _0x4e39cb += (_0x46e9de += _0x1a07c7 + _0x50a215) >>> 0x10;
          _0x1da8eb += (_0x4e39cb += _0x2af996 + _0x269958) >>> 0x10;
          _0x1da8eb += _0x3cae3b + _0x5a694c;
          return new _0x23c6bf((_0x46e9de &= 0xffff) << 0x10 | (_0x36b6dc &= 0xffff), (_0x1da8eb &= 0xffff) << 0x10 | (_0x4e39cb &= 0xffff), this.unsigned);
        };
        _0xb915e2.subtract = function (_0xada8fe) {
          if (!(true === (_0xada8fe && _0xada8fe.__isLong__))) {
            _0xada8fe = "number" == typeof _0xada8fe ? _0x269839(_0xada8fe, undefined) : 'string' == typeof _0xada8fe ? _0x1f89ec(_0xada8fe, undefined) : new _0x23c6bf(_0xada8fe.low, _0xada8fe.high, _0xada8fe.unsigned);
          }
          return this.add(_0xada8fe.neg());
        };
        _0xb915e2.sub = _0xb915e2.subtract;
        _0xb915e2.multiply = function (_0x1b3978) {
          if (this.isZero()) {
            return _0x3bbc86;
          }
          if (!(true === (_0x1b3978 && _0x1b3978.__isLong__))) {
            _0x1b3978 = "number" == typeof _0x1b3978 ? _0x269839(_0x1b3978, undefined) : 'string' == typeof _0x1b3978 ? _0x1f89ec(_0x1b3978, undefined) : new _0x23c6bf(_0x1b3978.low, _0x1b3978.high, _0x1b3978.unsigned);
          }
          if (_0x4a1244) {
            return new _0x23c6bf(_0x4a1244.mul(this.low, this.high, _0x1b3978.low, _0x1b3978.high), _0x4a1244.get_high(), this.unsigned);
          }
          if (_0x1b3978.isZero()) {
            return _0x3bbc86;
          }
          if (this.eq(_0x31b244)) {
            return _0x1b3978.isOdd() ? _0x31b244 : _0x3bbc86;
          }
          if (_0x1b3978.eq(_0x31b244)) {
            return this.isOdd() ? _0x31b244 : _0x3bbc86;
          }
          if (this.isNegative()) {
            return _0x1b3978.isNegative() ? this.neg().mul(_0x1b3978.neg()) : this.neg().mul(_0x1b3978).neg();
          }
          if (_0x1b3978.isNegative()) {
            return this.mul(_0x1b3978.neg()).neg();
          }
          if (this.lt(_0x35a6d0) && _0x1b3978.lt(_0x35a6d0)) {
            return _0x269839(this.toNumber() * _0x1b3978.toNumber(), this.unsigned);
          }
          var _0x4f24f0 = this.high >>> 0x10;
          var _0x662d8e = 0xffff & this.high;
          var _0x51164b = this.low >>> 0x10;
          var _0x4572fe = 0xffff & this.low;
          var _0xfc9284 = _0x1b3978.high >>> 0x10;
          var _0x29bf87 = 0xffff & _0x1b3978.high;
          var _0x4ad754 = _0x1b3978.low >>> 0x10;
          var _0x981cd3 = 0xffff & _0x1b3978.low;
          var _0x55a063 = 0x0;
          var _0x136a9f = 0x0;
          var _0x4238e0 = 0x0;
          var _0x27dcb4 = 0x0;
          _0x4238e0 += (_0x27dcb4 += _0x4572fe * _0x981cd3) >>> 0x10;
          _0x136a9f += (_0x4238e0 += _0x51164b * _0x981cd3) >>> 0x10;
          _0x4238e0 &= 0xffff;
          _0x136a9f += (_0x4238e0 += _0x4572fe * _0x4ad754) >>> 0x10;
          _0x55a063 += (_0x136a9f += _0x662d8e * _0x981cd3) >>> 0x10;
          _0x136a9f &= 0xffff;
          _0x55a063 += (_0x136a9f += _0x51164b * _0x4ad754) >>> 0x10;
          _0x136a9f &= 0xffff;
          _0x55a063 += (_0x136a9f += _0x4572fe * _0x29bf87) >>> 0x10;
          _0x55a063 += _0x4f24f0 * _0x981cd3 + _0x662d8e * _0x4ad754 + _0x51164b * _0x29bf87 + _0x4572fe * _0xfc9284;
          return new _0x23c6bf((_0x4238e0 &= 0xffff) << 0x10 | (_0x27dcb4 &= 0xffff), (_0x55a063 &= 0xffff) << 0x10 | (_0x136a9f &= 0xffff), this.unsigned);
        };
        _0xb915e2.mul = _0xb915e2.multiply;
        _0xb915e2.divide = function (_0x3d7904) {
          if (!(true === (_0x3d7904 && _0x3d7904.__isLong__))) {
            _0x3d7904 = "number" == typeof _0x3d7904 ? _0x269839(_0x3d7904, undefined) : 'string' == typeof _0x3d7904 ? _0x1f89ec(_0x3d7904, undefined) : new _0x23c6bf(_0x3d7904.low, _0x3d7904.high, _0x3d7904.unsigned);
          }
          if (_0x3d7904.isZero()) {
            throw Error("division by zero");
          }
          var _0xbd3b17;
          var _0x44995f;
          var _0x4c5a66;
          if (_0x4a1244) {
            return this.unsigned || -0x80000000 !== this.high || -0x1 !== _0x3d7904.low || -0x1 !== _0x3d7904.high ? new _0x23c6bf((this.unsigned ? _0x4a1244.div_u : _0x4a1244.div_s)(this.low, this.high, _0x3d7904.low, _0x3d7904.high), _0x4a1244.get_high(), this.unsigned) : this;
          }
          if (this.isZero()) {
            return this.unsigned ? _0x3606d8 : _0x3bbc86;
          }
          if (this.unsigned) {
            if (!_0x3d7904.unsigned) {
              _0x3d7904 = _0x3d7904.toUnsigned();
            }
            if (_0x3d7904.gt(this)) {
              return _0x3606d8;
            }
            if (_0x3d7904.gt(this.shru(0x1))) {
              return _0x254bf8;
            }
            _0x4c5a66 = _0x3606d8;
          } else {
            if (this.eq(_0x31b244)) {
              return _0x3d7904.eq(_0x3e3973) || _0x3d7904.eq(_0x48320d) ? _0x31b244 : _0x3d7904.eq(_0x31b244) ? _0x3e3973 : (_0xbd3b17 = this.shr(0x1).div(_0x3d7904).shl(0x1)).eq(_0x3bbc86) ? _0x3d7904.isNegative() ? _0x3e3973 : _0x48320d : (_0x44995f = this.sub(_0x3d7904.mul(_0xbd3b17)), _0x4c5a66 = _0xbd3b17.add(_0x44995f.div(_0x3d7904)));
            }
            if (_0x3d7904.eq(_0x31b244)) {
              return this.unsigned ? _0x3606d8 : _0x3bbc86;
            }
            if (this.isNegative()) {
              return _0x3d7904.isNegative() ? this.neg().div(_0x3d7904.neg()) : this.neg().div(_0x3d7904).neg();
            }
            if (_0x3d7904.isNegative()) {
              return this.div(_0x3d7904.neg()).neg();
            }
            _0x4c5a66 = _0x3bbc86;
          }
          for (_0x44995f = this; _0x44995f.gte(_0x3d7904);) {
            _0xbd3b17 = Math.max(0x1, Math.floor(_0x44995f.toNumber() / _0x3d7904.toNumber()));
            var _0x1eb201 = Math.ceil(Math.log(_0xbd3b17) / Math.LN2);
            var _0x3a6eb5 = _0x1eb201 <= 0x30 ? 0x1 : _0x33def1(0x2, _0x1eb201 - 0x30);
            var _0x21e257 = _0x269839(_0xbd3b17);
            for (var _0x1ae680 = _0x21e257.mul(_0x3d7904); _0x1ae680.isNegative() || _0x1ae680.gt(_0x44995f);) {
              _0x1ae680 = (_0x21e257 = _0x269839(_0xbd3b17 -= _0x3a6eb5, this.unsigned)).mul(_0x3d7904);
            }
            if (_0x21e257.isZero()) {
              _0x21e257 = _0x3e3973;
            }
            _0x4c5a66 = _0x4c5a66.add(_0x21e257);
            _0x44995f = _0x44995f.sub(_0x1ae680);
          }
          return _0x4c5a66;
        };
        _0xb915e2.div = _0xb915e2.divide;
        _0xb915e2.modulo = function (_0x5c7f53) {
          if (!(true === (_0x5c7f53 && _0x5c7f53.__isLong__))) {
            _0x5c7f53 = "number" == typeof _0x5c7f53 ? _0x269839(_0x5c7f53, undefined) : 'string' == typeof _0x5c7f53 ? _0x1f89ec(_0x5c7f53, undefined) : new _0x23c6bf(_0x5c7f53.low, _0x5c7f53.high, _0x5c7f53.unsigned);
          }
          return _0x4a1244 ? new _0x23c6bf((this.unsigned ? _0x4a1244.rem_u : _0x4a1244.rem_s)(this.low, this.high, _0x5c7f53.low, _0x5c7f53.high), _0x4a1244.get_high(), this.unsigned) : this.sub(this.div(_0x5c7f53).mul(_0x5c7f53));
        };
        _0xb915e2.mod = _0xb915e2.modulo;
        _0xb915e2.rem = _0xb915e2.modulo;
        _0xb915e2.not = function () {
          return new _0x23c6bf(~this.low, ~this.high, this.unsigned);
        };
        _0xb915e2.and = function (_0x1e3b26) {
          if (!(true === (_0x1e3b26 && _0x1e3b26.__isLong__))) {
            _0x1e3b26 = "number" == typeof _0x1e3b26 ? _0x269839(_0x1e3b26, undefined) : 'string' == typeof _0x1e3b26 ? _0x1f89ec(_0x1e3b26, undefined) : new _0x23c6bf(_0x1e3b26.low, _0x1e3b26.high, _0x1e3b26.unsigned);
          }
          return new _0x23c6bf(this.low & _0x1e3b26.low, this.high & _0x1e3b26.high, this.unsigned);
        };
        _0xb915e2.or = function (_0xe1ed28) {
          if (!(true === (_0xe1ed28 && _0xe1ed28.__isLong__))) {
            _0xe1ed28 = "number" == typeof _0xe1ed28 ? _0x269839(_0xe1ed28, undefined) : 'string' == typeof _0xe1ed28 ? _0x1f89ec(_0xe1ed28, undefined) : new _0x23c6bf(_0xe1ed28.low, _0xe1ed28.high, _0xe1ed28.unsigned);
          }
          return new _0x23c6bf(this.low | _0xe1ed28.low, this.high | _0xe1ed28.high, this.unsigned);
        };
        _0xb915e2.xor = function (_0x569a19) {
          if (!(true === (_0x569a19 && _0x569a19.__isLong__))) {
            _0x569a19 = "number" == typeof _0x569a19 ? _0x269839(_0x569a19, undefined) : 'string' == typeof _0x569a19 ? _0x1f89ec(_0x569a19, undefined) : new _0x23c6bf(_0x569a19.low, _0x569a19.high, _0x569a19.unsigned);
          }
          return new _0x23c6bf(this.low ^ _0x569a19.low, this.high ^ _0x569a19.high, this.unsigned);
        };
        _0xb915e2.shiftLeft = function (_0x8c4ae5) {
          if (true === (_0x8c4ae5 && _0x8c4ae5.__isLong__)) {
            _0x8c4ae5 = _0x8c4ae5.toInt();
          }
          return 0x0 == (_0x8c4ae5 &= 0x3f) ? this : _0x8c4ae5 < 0x20 ? new _0x23c6bf(this.low << _0x8c4ae5, this.high << _0x8c4ae5 | this.low >>> 0x20 - _0x8c4ae5, this.unsigned) : new _0x23c6bf(0x0, this.low << _0x8c4ae5 - 0x20, this.unsigned);
        };
        _0xb915e2.shl = _0xb915e2.shiftLeft;
        _0xb915e2.shiftRight = function (_0x4616c1) {
          if (true === (_0x4616c1 && _0x4616c1.__isLong__)) {
            _0x4616c1 = _0x4616c1.toInt();
          }
          return 0x0 == (_0x4616c1 &= 0x3f) ? this : _0x4616c1 < 0x20 ? new _0x23c6bf(this.low >>> _0x4616c1 | this.high << 0x20 - _0x4616c1, this.high >> _0x4616c1, this.unsigned) : new _0x23c6bf(this.high >> _0x4616c1 - 0x20, this.high >= 0x0 ? 0x0 : -0x1, this.unsigned);
        };
        _0xb915e2.shr = _0xb915e2.shiftRight;
        _0xb915e2.shiftRightUnsigned = function (_0x257a12) {
          if (true === (_0x257a12 && _0x257a12.__isLong__)) {
            _0x257a12 = _0x257a12.toInt();
          }
          if (0x0 === (_0x257a12 &= 0x3f)) {
            return this;
          }
          var _0xf748fc = this.high;
          return _0x257a12 < 0x20 ? new _0x23c6bf(this.low >>> _0x257a12 | _0xf748fc << 0x20 - _0x257a12, _0xf748fc >>> _0x257a12, this.unsigned) : new _0x23c6bf(0x20 === _0x257a12 ? _0xf748fc : _0xf748fc >>> _0x257a12 - 0x20, 0x0, this.unsigned);
        };
        _0xb915e2.shru = _0xb915e2.shiftRightUnsigned;
        _0xb915e2.shr_u = _0xb915e2.shiftRightUnsigned;
        _0xb915e2.toSigned = function () {
          return this.unsigned ? new _0x23c6bf(this.low, this.high, false) : this;
        };
        _0xb915e2.toUnsigned = function () {
          return this.unsigned ? this : new _0x23c6bf(this.low, this.high, true);
        };
        _0xb915e2.toBytes = function (_0x4ee67a) {
          return _0x4ee67a ? this.toBytesLE() : this.toBytesBE();
        };
        _0xb915e2.toBytesLE = function () {
          var _0x1e1626 = this.high;
          var _0x516a63 = this.low;
          return [0xff & _0x516a63, _0x516a63 >>> 0x8 & 0xff, _0x516a63 >>> 0x10 & 0xff, _0x516a63 >>> 0x18, 0xff & _0x1e1626, _0x1e1626 >>> 0x8 & 0xff, _0x1e1626 >>> 0x10 & 0xff, _0x1e1626 >>> 0x18];
        };
        _0xb915e2.toBytesBE = function () {
          var _0x4072ce = this.high;
          var _0x25a025 = this.low;
          return [_0x4072ce >>> 0x18, _0x4072ce >>> 0x10 & 0xff, _0x4072ce >>> 0x8 & 0xff, 0xff & _0x4072ce, _0x25a025 >>> 0x18, _0x25a025 >>> 0x10 & 0xff, _0x25a025 >>> 0x8 & 0xff, 0xff & _0x25a025];
        };
        _0x23c6bf.fromBytes = function (_0x292b3d, _0x464332, _0x4e98d6) {
          return _0x4e98d6 ? _0x23c6bf.fromBytesLE(_0x292b3d, _0x464332) : _0x23c6bf.fromBytesBE(_0x292b3d, _0x464332);
        };
        _0x23c6bf.fromBytesLE = function (_0x137b98, _0x49c7e7) {
          return new _0x23c6bf(_0x137b98[0x0] | _0x137b98[0x1] << 0x8 | _0x137b98[0x2] << 0x10 | _0x137b98[0x3] << 0x18, _0x137b98[0x4] | _0x137b98[0x5] << 0x8 | _0x137b98[0x6] << 0x10 | _0x137b98[0x7] << 0x18, _0x49c7e7);
        };
        _0x23c6bf.fromBytesBE = function (_0x4b9e99, _0x3c99c2) {
          return new _0x23c6bf(_0x4b9e99[0x4] << 0x18 | _0x4b9e99[0x5] << 0x10 | _0x4b9e99[0x6] << 0x8 | _0x4b9e99[0x7], _0x4b9e99[0x0] << 0x18 | _0x4b9e99[0x1] << 0x10 | _0x4b9e99[0x2] << 0x8 | _0x4b9e99[0x3], _0x3c99c2);
        };
        _0x22f135 = _0x328863.exports;
      }, {});
      _0x3cf404.require("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/long/src/long.js");
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js", function (_0x4f3284, _0x4c7e10, _0x1872e1, _0x4c442f, _0x2b605c) {
        _0x1872e1.exports = function (_0x4247b6, _0x433120) {
          var _0x10cd71 = new Array(arguments.length - 0x1);
          var _0x55f433 = 0x0;
          var _0x24a76d = 0x2;
          var _0x2ad72e = true;
          for (; _0x24a76d < arguments.length;) {
            _0x10cd71[_0x55f433++] = arguments[_0x24a76d++];
          }
          return new Promise(function (_0x1aa3bf, _0x1899bf) {
            _0x10cd71[_0x55f433] = function (_0x156f1a) {
              if (_0x2ad72e) {
                _0x2ad72e = false;
                if (_0x156f1a) {
                  _0x1899bf(_0x156f1a);
                } else {
                  var _0x4648b8 = new Array(arguments.length - 0x1);
                  for (var _0x8c6cf9 = 0x0; _0x8c6cf9 < _0x4648b8.length;) {
                    _0x4648b8[_0x8c6cf9++] = arguments[_0x8c6cf9];
                  }
                  _0x1aa3bf.apply(null, _0x4648b8);
                }
              }
            };
            try {
              _0x4247b6.apply(_0x433120 || null, _0x10cd71);
            } catch (_0x59d97a) {
              if (_0x2ad72e) {
                _0x2ad72e = false;
                _0x1899bf(_0x59d97a);
              }
            }
          });
        };
        _0x1872e1.exports;
      }, {});
      _0x3cf404.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js', function (_0x3a4347, _0x1e9030, _0x32c646, _0x1a32d7, _0x47acd4) {
        _0x3a4347.length = function (_0x5b8138) {
          var _0x5b67ab = _0x5b8138.length;
          if (!_0x5b67ab) {
            return 0x0;
          }
          for (var _0x109ec4 = 0x0; --_0x5b67ab % 0x4 > 0x1 && '=' === _0x5b8138.charAt(_0x5b67ab);) {
            ++_0x109ec4;
          }
          return Math.ceil(0x3 * _0x5b8138.length) / 0x4 - _0x109ec4;
        };
        var _0x1a2222 = new Array(0x40);
        var _0x53dd37 = new Array(0x7b);
        for (var _0x13265d = 0x0; _0x13265d < 0x40;) {
          _0x53dd37[_0x1a2222[_0x13265d] = _0x13265d < 0x1a ? _0x13265d + 0x41 : _0x13265d < 0x34 ? _0x13265d + 0x47 : _0x13265d < 0x3e ? _0x13265d - 0x4 : _0x13265d - 0x3b | 0x2b] = _0x13265d++;
        }
        _0x3a4347.encode = function (_0x29a63e, _0x65f4d6, _0x2d200b) {
          var _0x247d96;
          var _0x40599b = null;
          var _0x433bdb = [];
          var _0x4a1052 = 0x0;
          for (var _0x6ddd8b = 0x0; _0x65f4d6 < _0x2d200b;) {
            var _0x52d3d8 = _0x29a63e[_0x65f4d6++];
            switch (_0x6ddd8b) {
              case 0x0:
                _0x433bdb[_0x4a1052++] = _0x1a2222[_0x52d3d8 >> 0x2];
                _0x247d96 = (0x3 & _0x52d3d8) << 0x4;
                _0x6ddd8b = 0x1;
                break;
              case 0x1:
                _0x433bdb[_0x4a1052++] = _0x1a2222[_0x247d96 | _0x52d3d8 >> 0x4];
                _0x247d96 = (0xf & _0x52d3d8) << 0x2;
                _0x6ddd8b = 0x2;
                break;
              case 0x2:
                _0x433bdb[_0x4a1052++] = _0x1a2222[_0x247d96 | _0x52d3d8 >> 0x6];
                _0x433bdb[_0x4a1052++] = _0x1a2222[0x3f & _0x52d3d8];
                _0x6ddd8b = 0x0;
            }
            if (_0x4a1052 > 0x1fff) {
              (_0x40599b || (_0x40599b = [])).push(String.fromCharCode.apply(String, _0x433bdb));
              _0x4a1052 = 0x0;
            }
          }
          if (_0x6ddd8b) {
            _0x433bdb[_0x4a1052++] = _0x1a2222[_0x247d96];
            _0x433bdb[_0x4a1052++] = 0x3d;
            if (0x1 === _0x6ddd8b) {
              _0x433bdb[_0x4a1052++] = 0x3d;
            }
          }
          return _0x40599b ? (_0x4a1052 && _0x40599b.push(String.fromCharCode.apply(String, _0x433bdb.slice(0x0, _0x4a1052))), _0x40599b.join('')) : String.fromCharCode.apply(String, _0x433bdb.slice(0x0, _0x4a1052));
        };
        _0x3a4347.decode = function (_0x1a66b8, _0x1044a7, _0xd50341) {
          var _0x48c050;
          var _0x508be5 = _0xd50341;
          var _0x1c1271 = 0x0;
          for (var _0x2a78dd = 0x0; _0x2a78dd < _0x1a66b8.length;) {
            var _0x290652 = _0x1a66b8.charCodeAt(_0x2a78dd++);
            if (0x3d === _0x290652 && _0x1c1271 > 0x1) {
              break;
            }
            if (undefined === (_0x290652 = _0x53dd37[_0x290652])) {
              throw Error("invalid encoding");
            }
            switch (_0x1c1271) {
              case 0x0:
                _0x48c050 = _0x290652;
                _0x1c1271 = 0x1;
                break;
              case 0x1:
                _0x1044a7[_0xd50341++] = _0x48c050 << 0x2 | (0x30 & _0x290652) >> 0x4;
                _0x48c050 = _0x290652;
                _0x1c1271 = 0x2;
                break;
              case 0x2:
                _0x1044a7[_0xd50341++] = (0xf & _0x48c050) << 0x4 | (0x3c & _0x290652) >> 0x2;
                _0x48c050 = _0x290652;
                _0x1c1271 = 0x3;
                break;
              case 0x3:
                _0x1044a7[_0xd50341++] = (0x3 & _0x48c050) << 0x6 | _0x290652;
                _0x1c1271 = 0x0;
            }
          }
          if (0x1 === _0x1c1271) {
            throw Error("invalid encoding");
          }
          return _0xd50341 - _0x508be5;
        };
        _0x3a4347.test = function (_0x29a475) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(_0x29a475);
        };
        _0x32c646.exports;
      }, {});
      _0x3cf404.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js', function (_0x3ef549, _0x45e6af, _0x314253, _0x430275, _0x530739) {
        function _0x2d1f49() {
          this._listeners = {};
        }
        _0x314253.exports = _0x2d1f49;
        _0x2d1f49.prototype.on = function (_0x270af4, _0x1883ea, _0x210924) {
          (this._listeners[_0x270af4] || (this._listeners[_0x270af4] = [])).push({
            'fn': _0x1883ea,
            'ctx': _0x210924 || this
          });
          return this;
        };
        _0x2d1f49.prototype.off = function (_0x4b0bc3, _0x474c49) {
          if (undefined === _0x4b0bc3) {
            this._listeners = {};
          } else {
            if (undefined === _0x474c49) {
              this._listeners[_0x4b0bc3] = [];
            } else {
              var _0x3fd5f1 = this._listeners[_0x4b0bc3];
              for (var _0x3e0882 = 0x0; _0x3e0882 < _0x3fd5f1.length;) {
                if (_0x3fd5f1[_0x3e0882].fn === _0x474c49) {
                  _0x3fd5f1.splice(_0x3e0882, 0x1);
                } else {
                  ++_0x3e0882;
                }
              }
            }
          }
          return this;
        };
        _0x2d1f49.prototype.emit = function (_0x454d2d) {
          var _0xcaeb16 = this._listeners[_0x454d2d];
          if (_0xcaeb16) {
            var _0x45f6d3 = [];
            for (var _0x1fcf3b = 0x1; _0x1fcf3b < arguments.length;) {
              _0x45f6d3.push(arguments[_0x1fcf3b++]);
            }
            for (_0x1fcf3b = 0x0; _0x1fcf3b < _0xcaeb16.length;) {
              _0xcaeb16[_0x1fcf3b].fn.apply(_0xcaeb16[_0x1fcf3b++].ctx, _0x45f6d3);
            }
          }
          return this;
        };
        _0x314253.exports;
      }, {});
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/@protobufjs/float/index.js", function (_0x4cfde4, _0x28e41f, _0x57bb49, _0x16263a, _0x2e8c09) {
        function _0x25752f(_0x55da90) {
          if ("undefined" != typeof Float32Array) {
            (function () {
              var _0x5ed58d = new Float32Array([-0x0]);
              var _0x5ce825 = new Uint8Array(_0x5ed58d.buffer);
              var _0x156a16 = 0x80 === _0x5ce825[0x3];
              function _0x4ca2bc(_0x1545e3, _0x113b6a, _0x8e96d4) {
                _0x5ed58d[0x0] = _0x1545e3;
                _0x113b6a[_0x8e96d4] = _0x5ce825[0x0];
                _0x113b6a[_0x8e96d4 + 0x1] = _0x5ce825[0x1];
                _0x113b6a[_0x8e96d4 + 0x2] = _0x5ce825[0x2];
                _0x113b6a[_0x8e96d4 + 0x3] = _0x5ce825[0x3];
              }
              function _0x319243(_0x2def27, _0x53cb45, _0x43e9cd) {
                _0x5ed58d[0x0] = _0x2def27;
                _0x53cb45[_0x43e9cd] = _0x5ce825[0x3];
                _0x53cb45[_0x43e9cd + 0x1] = _0x5ce825[0x2];
                _0x53cb45[_0x43e9cd + 0x2] = _0x5ce825[0x1];
                _0x53cb45[_0x43e9cd + 0x3] = _0x5ce825[0x0];
              }
              function _0x9b78ff(_0x1aafad, _0x3fe51a) {
                _0x5ce825[0x0] = _0x1aafad[_0x3fe51a];
                _0x5ce825[0x1] = _0x1aafad[_0x3fe51a + 0x1];
                _0x5ce825[0x2] = _0x1aafad[_0x3fe51a + 0x2];
                _0x5ce825[0x3] = _0x1aafad[_0x3fe51a + 0x3];
                return _0x5ed58d[0x0];
              }
              function _0x5bb623(_0x16e222, _0x3ce994) {
                _0x5ce825[0x3] = _0x16e222[_0x3ce994];
                _0x5ce825[0x2] = _0x16e222[_0x3ce994 + 0x1];
                _0x5ce825[0x1] = _0x16e222[_0x3ce994 + 0x2];
                _0x5ce825[0x0] = _0x16e222[_0x3ce994 + 0x3];
                return _0x5ed58d[0x0];
              }
              _0x55da90.writeFloatLE = _0x156a16 ? _0x4ca2bc : _0x319243;
              _0x55da90.writeFloatBE = _0x156a16 ? _0x319243 : _0x4ca2bc;
              _0x55da90.readFloatLE = _0x156a16 ? _0x9b78ff : _0x5bb623;
              _0x55da90.readFloatBE = _0x156a16 ? _0x5bb623 : _0x9b78ff;
            })();
          } else {
            (function () {
              function _0x174cef(_0x3881ed, _0x23de52, _0x621c1f, _0x321aa9) {
                var _0x5c4553 = _0x23de52 < 0x0 ? 0x1 : 0x0;
                if (_0x5c4553) {
                  _0x23de52 = -_0x23de52;
                }
                if (0x0 === _0x23de52) {
                  _0x3881ed(0x1 / _0x23de52 > 0x0 ? 0x0 : 0x80000000, _0x621c1f, _0x321aa9);
                } else {
                  if (isNaN(_0x23de52)) {
                    _0x3881ed(0x7fc00000, _0x621c1f, _0x321aa9);
                  } else {
                    if (_0x23de52 > 0xffffff00000000000000000000000000) {
                      _0x3881ed((_0x5c4553 << 0x1f | 0x7f800000) >>> 0x0, _0x621c1f, _0x321aa9);
                    } else {
                      if (_0x23de52 < 1.1754943508222875e-38) {
                        _0x3881ed((_0x5c4553 << 0x1f | Math.round(_0x23de52 / 1.401298464324817e-45)) >>> 0x0, _0x621c1f, _0x321aa9);
                      } else {
                        var _0x281a04 = Math.floor(Math.log(_0x23de52) / Math.LN2);
                        _0x3881ed((_0x5c4553 << 0x1f | _0x281a04 + 0x7f << 0x17 | 0x7fffff & Math.round(_0x23de52 * Math.pow(0x2, -_0x281a04) * 0x800000)) >>> 0x0, _0x621c1f, _0x321aa9);
                      }
                    }
                  }
                }
              }
              function _0x564a12(_0xc9aff, _0x56e6b6, _0x31468d) {
                var _0x323341 = _0xc9aff(_0x56e6b6, _0x31468d);
                var _0x443036 = 0x2 * (_0x323341 >> 0x1f) + 0x1;
                var _0x1c39de = _0x323341 >>> 0x17 & 0xff;
                var _0x1dea90 = 0x7fffff & _0x323341;
                return 0xff === _0x1c39de ? _0x1dea90 ? NaN : _0x443036 * Infinity : 0x0 === _0x1c39de ? 1.401298464324817e-45 * _0x443036 * _0x1dea90 : _0x443036 * Math.pow(0x2, _0x1c39de - 0x96) * (_0x1dea90 + 0x800000);
              }
              _0x55da90.writeFloatLE = _0x174cef.bind(null, _0x4c108a);
              _0x55da90.writeFloatBE = _0x174cef.bind(null, _0x45d3f3);
              _0x55da90.readFloatLE = _0x564a12.bind(null, _0x26c26f);
              _0x55da90.readFloatBE = _0x564a12.bind(null, _0x4e0bbf);
            })();
          }
          if ('undefined' != typeof Float64Array) {
            (function () {
              var _0x574c49 = new Float64Array([-0x0]);
              var _0x4ce818 = new Uint8Array(_0x574c49.buffer);
              var _0x40169a = 0x80 === _0x4ce818[0x7];
              function _0x62810(_0x1bf586, _0x4add81, _0x53d417) {
                _0x574c49[0x0] = _0x1bf586;
                _0x4add81[_0x53d417] = _0x4ce818[0x0];
                _0x4add81[_0x53d417 + 0x1] = _0x4ce818[0x1];
                _0x4add81[_0x53d417 + 0x2] = _0x4ce818[0x2];
                _0x4add81[_0x53d417 + 0x3] = _0x4ce818[0x3];
                _0x4add81[_0x53d417 + 0x4] = _0x4ce818[0x4];
                _0x4add81[_0x53d417 + 0x5] = _0x4ce818[0x5];
                _0x4add81[_0x53d417 + 0x6] = _0x4ce818[0x6];
                _0x4add81[_0x53d417 + 0x7] = _0x4ce818[0x7];
              }
              function _0x5458f6(_0xf17fdb, _0x219968, _0x5e2609) {
                _0x574c49[0x0] = _0xf17fdb;
                _0x219968[_0x5e2609] = _0x4ce818[0x7];
                _0x219968[_0x5e2609 + 0x1] = _0x4ce818[0x6];
                _0x219968[_0x5e2609 + 0x2] = _0x4ce818[0x5];
                _0x219968[_0x5e2609 + 0x3] = _0x4ce818[0x4];
                _0x219968[_0x5e2609 + 0x4] = _0x4ce818[0x3];
                _0x219968[_0x5e2609 + 0x5] = _0x4ce818[0x2];
                _0x219968[_0x5e2609 + 0x6] = _0x4ce818[0x1];
                _0x219968[_0x5e2609 + 0x7] = _0x4ce818[0x0];
              }
              function _0x20464f(_0x5d479c, _0x11733f) {
                _0x4ce818[0x0] = _0x5d479c[_0x11733f];
                _0x4ce818[0x1] = _0x5d479c[_0x11733f + 0x1];
                _0x4ce818[0x2] = _0x5d479c[_0x11733f + 0x2];
                _0x4ce818[0x3] = _0x5d479c[_0x11733f + 0x3];
                _0x4ce818[0x4] = _0x5d479c[_0x11733f + 0x4];
                _0x4ce818[0x5] = _0x5d479c[_0x11733f + 0x5];
                _0x4ce818[0x6] = _0x5d479c[_0x11733f + 0x6];
                _0x4ce818[0x7] = _0x5d479c[_0x11733f + 0x7];
                return _0x574c49[0x0];
              }
              function _0x4d5fed(_0x5d079c, _0x2cc15e) {
                _0x4ce818[0x7] = _0x5d079c[_0x2cc15e];
                _0x4ce818[0x6] = _0x5d079c[_0x2cc15e + 0x1];
                _0x4ce818[0x5] = _0x5d079c[_0x2cc15e + 0x2];
                _0x4ce818[0x4] = _0x5d079c[_0x2cc15e + 0x3];
                _0x4ce818[0x3] = _0x5d079c[_0x2cc15e + 0x4];
                _0x4ce818[0x2] = _0x5d079c[_0x2cc15e + 0x5];
                _0x4ce818[0x1] = _0x5d079c[_0x2cc15e + 0x6];
                _0x4ce818[0x0] = _0x5d079c[_0x2cc15e + 0x7];
                return _0x574c49[0x0];
              }
              _0x55da90.writeDoubleLE = _0x40169a ? _0x62810 : _0x5458f6;
              _0x55da90.writeDoubleBE = _0x40169a ? _0x5458f6 : _0x62810;
              _0x55da90.readDoubleLE = _0x40169a ? _0x20464f : _0x4d5fed;
              _0x55da90.readDoubleBE = _0x40169a ? _0x4d5fed : _0x20464f;
            })();
          } else {
            (function () {
              function _0x344fc1(_0x3b9735, _0x527c4c, _0x3e696a, _0x472275, _0x4591eb, _0x19e43f) {
                var _0x48e7ab = _0x472275 < 0x0 ? 0x1 : 0x0;
                if (_0x48e7ab) {
                  _0x472275 = -_0x472275;
                }
                if (0x0 === _0x472275) {
                  _0x3b9735(0x0, _0x4591eb, _0x19e43f + _0x527c4c);
                  _0x3b9735(0x1 / _0x472275 > 0x0 ? 0x0 : 0x80000000, _0x4591eb, _0x19e43f + _0x3e696a);
                } else {
                  if (isNaN(_0x472275)) {
                    _0x3b9735(0x0, _0x4591eb, _0x19e43f + _0x527c4c);
                    _0x3b9735(0x7ff80000, _0x4591eb, _0x19e43f + _0x3e696a);
                  } else {
                    if (_0x472275 > 0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
                      _0x3b9735(0x0, _0x4591eb, _0x19e43f + _0x527c4c);
                      _0x3b9735((_0x48e7ab << 0x1f | 0x7ff00000) >>> 0x0, _0x4591eb, _0x19e43f + _0x3e696a);
                    } else {
                      var _0x211f6b;
                      if (_0x472275 < 2.2250738585072014e-308) {
                        _0x3b9735((_0x211f6b = _0x472275 / 5e-324) >>> 0x0, _0x4591eb, _0x19e43f + _0x527c4c);
                        _0x3b9735((_0x48e7ab << 0x1f | _0x211f6b / 0x100000000) >>> 0x0, _0x4591eb, _0x19e43f + _0x3e696a);
                      } else {
                        var _0x33f5f = Math.floor(Math.log(_0x472275) / Math.LN2);
                        if (0x400 === _0x33f5f) {
                          _0x33f5f = 0x3ff;
                        }
                        _0x3b9735(0x10000000000000 * (_0x211f6b = _0x472275 * Math.pow(0x2, -_0x33f5f)) >>> 0x0, _0x4591eb, _0x19e43f + _0x527c4c);
                        _0x3b9735((_0x48e7ab << 0x1f | _0x33f5f + 0x3ff << 0x14 | 0x100000 * _0x211f6b & 0xfffff) >>> 0x0, _0x4591eb, _0x19e43f + _0x3e696a);
                      }
                    }
                  }
                }
              }
              function _0x2196d4(_0x58261e, _0x413645, _0x298d14, _0x54b6ee, _0x4c8a42) {
                var _0x331cc5 = _0x58261e(_0x54b6ee, _0x4c8a42 + _0x413645);
                var _0x201851 = _0x58261e(_0x54b6ee, _0x4c8a42 + _0x298d14);
                var _0x39e2de = 0x2 * (_0x201851 >> 0x1f) + 0x1;
                var _0x42ab01 = _0x201851 >>> 0x14 & 0x7ff;
                var _0x26cb4d = 0x100000000 * (0xfffff & _0x201851) + _0x331cc5;
                return 0x7ff === _0x42ab01 ? _0x26cb4d ? NaN : _0x39e2de * Infinity : 0x0 === _0x42ab01 ? 5e-324 * _0x39e2de * _0x26cb4d : _0x39e2de * Math.pow(0x2, _0x42ab01 - 0x433) * (_0x26cb4d + 0x10000000000000);
              }
              _0x55da90.writeDoubleLE = _0x344fc1.bind(null, _0x4c108a, 0x0, 0x4);
              _0x55da90.writeDoubleBE = _0x344fc1.bind(null, _0x45d3f3, 0x4, 0x0);
              _0x55da90.readDoubleLE = _0x2196d4.bind(null, _0x26c26f, 0x0, 0x4);
              _0x55da90.readDoubleBE = _0x2196d4.bind(null, _0x4e0bbf, 0x4, 0x0);
            })();
          }
          return _0x55da90;
        }
        function _0x4c108a(_0x57c0cb, _0x10ad7a, _0x570dad) {
          _0x10ad7a[_0x570dad] = 0xff & _0x57c0cb;
          _0x10ad7a[_0x570dad + 0x1] = _0x57c0cb >>> 0x8 & 0xff;
          _0x10ad7a[_0x570dad + 0x2] = _0x57c0cb >>> 0x10 & 0xff;
          _0x10ad7a[_0x570dad + 0x3] = _0x57c0cb >>> 0x18;
        }
        function _0x45d3f3(_0x2fffe5, _0x4afed4, _0x3280a0) {
          _0x4afed4[_0x3280a0] = _0x2fffe5 >>> 0x18;
          _0x4afed4[_0x3280a0 + 0x1] = _0x2fffe5 >>> 0x10 & 0xff;
          _0x4afed4[_0x3280a0 + 0x2] = _0x2fffe5 >>> 0x8 & 0xff;
          _0x4afed4[_0x3280a0 + 0x3] = 0xff & _0x2fffe5;
        }
        function _0x26c26f(_0x29e223, _0x47aab7) {
          return (_0x29e223[_0x47aab7] | _0x29e223[_0x47aab7 + 0x1] << 0x8 | _0x29e223[_0x47aab7 + 0x2] << 0x10 | _0x29e223[_0x47aab7 + 0x3] << 0x18) >>> 0x0;
        }
        function _0x4e0bbf(_0x47e831, _0x45d72f) {
          return (_0x47e831[_0x45d72f] << 0x18 | _0x47e831[_0x45d72f + 0x1] << 0x10 | _0x47e831[_0x45d72f + 0x2] << 0x8 | _0x47e831[_0x45d72f + 0x3]) >>> 0x0;
        }
        _0x57bb49.exports = _0x25752f(_0x25752f);
        _0x57bb49.exports;
        _0x57bb49.exports.writeFloatLE;
        _0x57bb49.exports.writeFloatBE;
        _0x57bb49.exports.readFloatLE;
        _0x57bb49.exports.readFloatBE;
        _0x57bb49.exports.writeDoubleLE;
        _0x57bb49.exports.writeDoubleBE;
        _0x57bb49.exports.readDoubleLE;
        _0x57bb49.exports.readDoubleBE;
      }, {});
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js", function (_0x249d4b, _0x42ec8b, _0x1e0a2d, _0x272b2c, _0x5bb9a0) {
        function _0x1da1c4(_0x39d4cb) {
          try {
            var _0x1ad31d = eval('quire'.replace(/^/, 're'))(_0x39d4cb);
            if (_0x1ad31d && (_0x1ad31d.length || Object.keys(_0x1ad31d).length)) {
              return _0x1ad31d;
            }
          } catch (_0x3fe034) {}
          return null;
        }
        _0x1e0a2d.exports = _0x1da1c4;
        _0x1e0a2d.exports;
      }, {});
      _0x3cf404.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js', function (_0x72b811, _0x57d728, _0xbec6e8, _0x2fa451, _0x50111f) {
        _0x72b811.length = function (_0x3bbeee) {
          var _0x16732a = 0x0;
          var _0x2f5b7a = 0x0;
          for (var _0x3e335e = 0x0; _0x3e335e < _0x3bbeee.length; ++_0x3e335e) {
            if ((_0x2f5b7a = _0x3bbeee.charCodeAt(_0x3e335e)) < 0x80) {
              _0x16732a += 0x1;
            } else if (_0x2f5b7a < 0x800) {
              _0x16732a += 0x2;
            } else if (0xd800 == (0xfc00 & _0x2f5b7a) && 0xdc00 == (0xfc00 & _0x3bbeee.charCodeAt(_0x3e335e + 0x1))) {
              ++_0x3e335e;
              _0x16732a += 0x4;
            } else {
              _0x16732a += 0x3;
            }
          }
          return _0x16732a;
        };
        _0x72b811.read = function (_0x183350, _0x1cafde, _0x896eca) {
          if (_0x896eca - _0x1cafde < 0x1) {
            return '';
          }
          var _0x284a27;
          var _0x2fca7b = null;
          var _0x184085 = [];
          for (var _0x18cf73 = 0x0; _0x1cafde < _0x896eca;) {
            if ((_0x284a27 = _0x183350[_0x1cafde++]) < 0x80) {
              _0x184085[_0x18cf73++] = _0x284a27;
            } else if (_0x284a27 > 0xbf && _0x284a27 < 0xe0) {
              _0x184085[_0x18cf73++] = (0x1f & _0x284a27) << 0x6 | 0x3f & _0x183350[_0x1cafde++];
            } else if (_0x284a27 > 0xef && _0x284a27 < 0x16d) {
              _0x284a27 = ((0x7 & _0x284a27) << 0x12 | (0x3f & _0x183350[_0x1cafde++]) << 0xc | (0x3f & _0x183350[_0x1cafde++]) << 0x6 | 0x3f & _0x183350[_0x1cafde++]) - 0x10000;
              _0x184085[_0x18cf73++] = 0xd800 + (_0x284a27 >> 0xa);
              _0x184085[_0x18cf73++] = 0xdc00 + (0x3ff & _0x284a27);
            } else {
              _0x184085[_0x18cf73++] = (0xf & _0x284a27) << 0xc | (0x3f & _0x183350[_0x1cafde++]) << 0x6 | 0x3f & _0x183350[_0x1cafde++];
            }
            if (_0x18cf73 > 0x1fff) {
              (_0x2fca7b || (_0x2fca7b = [])).push(String.fromCharCode.apply(String, _0x184085));
              _0x18cf73 = 0x0;
            }
          }
          return _0x2fca7b ? (_0x18cf73 && _0x2fca7b.push(String.fromCharCode.apply(String, _0x184085.slice(0x0, _0x18cf73))), _0x2fca7b.join('')) : String.fromCharCode.apply(String, _0x184085.slice(0x0, _0x18cf73));
        };
        _0x72b811.write = function (_0x410f55, _0x46cb82, _0x584ad5) {
          var _0x36daea;
          var _0x342a56;
          var _0x3f9692 = _0x584ad5;
          for (var _0x56ba73 = 0x0; _0x56ba73 < _0x410f55.length; ++_0x56ba73) {
            if ((_0x36daea = _0x410f55.charCodeAt(_0x56ba73)) < 0x80) {
              _0x46cb82[_0x584ad5++] = _0x36daea;
            } else if (_0x36daea < 0x800) {
              _0x46cb82[_0x584ad5++] = _0x36daea >> 0x6 | 0xc0;
              _0x46cb82[_0x584ad5++] = 0x3f & _0x36daea | 0x80;
            } else if (0xd800 == (0xfc00 & _0x36daea) && 0xdc00 == (0xfc00 & (_0x342a56 = _0x410f55.charCodeAt(_0x56ba73 + 0x1)))) {
              _0x36daea = 0x10000 + ((0x3ff & _0x36daea) << 0xa) + (0x3ff & _0x342a56);
              ++_0x56ba73;
              _0x46cb82[_0x584ad5++] = _0x36daea >> 0x12 | 0xf0;
              _0x46cb82[_0x584ad5++] = _0x36daea >> 0xc & 0x3f | 0x80;
              _0x46cb82[_0x584ad5++] = _0x36daea >> 0x6 & 0x3f | 0x80;
              _0x46cb82[_0x584ad5++] = 0x3f & _0x36daea | 0x80;
            } else {
              _0x46cb82[_0x584ad5++] = _0x36daea >> 0xc | 0xe0;
              _0x46cb82[_0x584ad5++] = _0x36daea >> 0x6 & 0x3f | 0x80;
              _0x46cb82[_0x584ad5++] = 0x3f & _0x36daea | 0x80;
            }
          }
          return _0x584ad5 - _0x3f9692;
        };
        _0xbec6e8.exports;
      }, {});
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js", function (_0x1be5f5, _0x3d117b, _0x3fe071, _0x5b8ca0, _0x3104ee) {
        _0x3fe071.exports = function (_0x366a31, _0x2c3c2e, _0x58f762) {
          var _0x5364de = _0x58f762 || 0x2000;
          var _0x45d6a7 = _0x5364de >>> 0x1;
          var _0x2b8c2c = null;
          var _0x5e42c0 = _0x5364de;
          return function (_0x10d99b) {
            if (_0x10d99b < 0x1 || _0x10d99b > _0x45d6a7) {
              return _0x366a31(_0x10d99b);
            }
            if (_0x5e42c0 + _0x10d99b > _0x5364de) {
              _0x2b8c2c = _0x366a31(_0x5364de);
              _0x5e42c0 = 0x0;
            }
            var _0x12f17c = _0x2c3c2e.call(_0x2b8c2c, _0x5e42c0, _0x5e42c0 += _0x10d99b);
            if (0x7 & _0x5e42c0) {
              _0x5e42c0 = 0x1 + (0x7 | _0x5e42c0);
            }
            return _0x12f17c;
          };
        };
        _0x3fe071.exports;
      }, {});
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js", function (_0x18d993, _0x26c40a, _0x4a9f65, _0x332c52, _0x2b88d2) {
        _0x4a9f65.exports = _0x56b2a9;
        var _0x369b2c = _0x26c40a("../util/minimal");
        function _0x56b2a9(_0x287dd2, _0x28a57d) {
          this.lo = _0x287dd2 >>> 0x0;
          this.hi = _0x28a57d >>> 0x0;
        }
        var _0x1aab4a = _0x56b2a9.zero = new _0x56b2a9(0x0, 0x0);
        _0x1aab4a.toNumber = function () {
          return 0x0;
        };
        _0x1aab4a.zzEncode = _0x1aab4a.zzDecode = function () {
          return this;
        };
        _0x1aab4a.length = function () {
          return 0x1;
        };
        var _0x3e299f = _0x56b2a9.zeroHash = "\0\0\0\0\0\0\0\0";
        _0x56b2a9.fromNumber = function (_0x574ffb) {
          if (0x0 === _0x574ffb) {
            return _0x1aab4a;
          }
          var _0x430e26 = _0x574ffb < 0x0;
          if (_0x430e26) {
            _0x574ffb = -_0x574ffb;
          }
          var _0x2ebf94 = _0x574ffb >>> 0x0;
          var _0xe69a80 = (_0x574ffb - _0x2ebf94) / 0x100000000 >>> 0x0;
          if (_0x430e26) {
            _0xe69a80 = ~_0xe69a80 >>> 0x0;
            _0x2ebf94 = ~_0x2ebf94 >>> 0x0;
            if (++_0x2ebf94 > 0xffffffff) {
              _0x2ebf94 = 0x0;
              if (++_0xe69a80 > 0xffffffff) {
                _0xe69a80 = 0x0;
              }
            }
          }
          return new _0x56b2a9(_0x2ebf94, _0xe69a80);
        };
        _0x56b2a9.from = function (_0x1781df) {
          if ('number' == typeof _0x1781df) {
            return _0x56b2a9.fromNumber(_0x1781df);
          }
          if (_0x369b2c.isString(_0x1781df)) {
            if (!_0x369b2c.Long) {
              return _0x56b2a9.fromNumber(parseInt(_0x1781df, 0xa));
            }
            _0x1781df = _0x369b2c.Long.fromString(_0x1781df);
          }
          return _0x1781df.low || _0x1781df.high ? new _0x56b2a9(_0x1781df.low >>> 0x0, _0x1781df.high >>> 0x0) : _0x1aab4a;
        };
        _0x56b2a9.prototype.toNumber = function (_0x553ae6) {
          if (!_0x553ae6 && this.hi >>> 0x1f) {
            var _0x5d2dbb = 0x1 + ~this.lo >>> 0x0;
            var _0x1b7917 = ~this.hi >>> 0x0;
            if (!_0x5d2dbb) {
              _0x1b7917 = _0x1b7917 + 0x1 >>> 0x0;
            }
            return -(_0x5d2dbb + 0x100000000 * _0x1b7917);
          }
          return this.lo + 0x100000000 * this.hi;
        };
        _0x56b2a9.prototype.toLong = function (_0x9136d1) {
          return _0x369b2c.Long ? new _0x369b2c.Long(0x0 | this.lo, 0x0 | this.hi, Boolean(_0x9136d1)) : {
            'low': 0x0 | this.lo,
            'high': 0x0 | this.hi,
            'unsigned': Boolean(_0x9136d1)
          };
        };
        var _0xd1d066 = String.prototype.charCodeAt;
        _0x56b2a9.fromHash = function (_0x112f2d) {
          return _0x112f2d === _0x3e299f ? _0x1aab4a : new _0x56b2a9((_0xd1d066.call(_0x112f2d, 0x0) | _0xd1d066.call(_0x112f2d, 0x1) << 0x8 | _0xd1d066.call(_0x112f2d, 0x2) << 0x10 | _0xd1d066.call(_0x112f2d, 0x3) << 0x18) >>> 0x0, (_0xd1d066.call(_0x112f2d, 0x4) | _0xd1d066.call(_0x112f2d, 0x5) << 0x8 | _0xd1d066.call(_0x112f2d, 0x6) << 0x10 | _0xd1d066.call(_0x112f2d, 0x7) << 0x18) >>> 0x0);
        };
        _0x56b2a9.prototype.toHash = function () {
          return String.fromCharCode(0xff & this.lo, this.lo >>> 0x8 & 0xff, this.lo >>> 0x10 & 0xff, this.lo >>> 0x18, 0xff & this.hi, this.hi >>> 0x8 & 0xff, this.hi >>> 0x10 & 0xff, this.hi >>> 0x18);
        };
        _0x56b2a9.prototype.zzEncode = function () {
          var _0x4f56fe = this.hi >> 0x1f;
          this.hi = ((this.hi << 0x1 | this.lo >>> 0x1f) ^ _0x4f56fe) >>> 0x0;
          this.lo = (this.lo << 0x1 ^ _0x4f56fe) >>> 0x0;
          return this;
        };
        _0x56b2a9.prototype.zzDecode = function () {
          var _0x3e814e = -(0x1 & this.lo);
          this.lo = ((this.lo >>> 0x1 | this.hi << 0x1f) ^ _0x3e814e) >>> 0x0;
          this.hi = (this.hi >>> 0x1 ^ _0x3e814e) >>> 0x0;
          return this;
        };
        _0x56b2a9.prototype.length = function () {
          var _0x37ef59 = this.lo;
          var _0x58954c = (this.lo >>> 0x1c | this.hi << 0x4) >>> 0x0;
          var _0x47a8f8 = this.hi >>> 0x18;
          return 0x0 === _0x47a8f8 ? 0x0 === _0x58954c ? _0x37ef59 < 0x4000 ? _0x37ef59 < 0x80 ? 0x1 : 0x2 : _0x37ef59 < 0x200000 ? 0x3 : 0x4 : _0x58954c < 0x4000 ? _0x58954c < 0x80 ? 0x5 : 0x6 : _0x58954c < 0x200000 ? 0x7 : 0x8 : _0x47a8f8 < 0x80 ? 0x9 : 0xa;
        };
        _0x4a9f65.exports;
      }, function () {
        return {
          '../util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js", function (_0x340e3b, _0x447333, _0x49878f, _0x2061d3, _0x4a88e6) {
        function _0x49d598(_0x26c087, _0xd3aae3, _0x2010bb) {
          var _0xcee41e = Object.keys(_0xd3aae3);
          for (var _0x1f63f2 = 0x0; _0x1f63f2 < _0xcee41e.length; ++_0x1f63f2) {
            if (!(undefined !== _0x26c087[_0xcee41e[_0x1f63f2]] && _0x2010bb)) {
              _0x26c087[_0xcee41e[_0x1f63f2]] = _0xd3aae3[_0xcee41e[_0x1f63f2]];
            }
          }
          return _0x26c087;
        }
        function _0x40a338(_0xdd599f) {
          function _0x2b6795(_0x1f2f8d, _0x371c5c) {
            if (!(this instanceof _0x2b6795)) {
              return new _0x2b6795(_0x1f2f8d, _0x371c5c);
            }
            Object.defineProperty(this, "message", {
              'get': function () {
                return _0x1f2f8d;
              }
            });
            if (Error.captureStackTrace) {
              Error.captureStackTrace(this, _0x2b6795);
            } else {
              Object.defineProperty(this, "stack", {
                'value': new Error().stack || ''
              });
            }
            if (_0x371c5c) {
              _0x49d598(this, _0x371c5c);
            }
          }
          (_0x2b6795.prototype = Object.create(Error.prototype)).constructor = _0x2b6795;
          Object.defineProperty(_0x2b6795.prototype, "name", {
            'get': function () {
              return _0xdd599f;
            }
          });
          _0x2b6795.prototype.toString = function () {
            return this.name + ": " + this.message;
          };
          return _0x2b6795;
        }
        _0x340e3b.asPromise = _0x447333("@protobufjs/aspromise");
        _0x340e3b.base64 = _0x447333("@protobufjs/base64");
        _0x340e3b.EventEmitter = _0x447333('@protobufjs/eventemitter');
        _0x340e3b.float = _0x447333("@protobufjs/float");
        _0x340e3b.inquire = _0x447333("@protobufjs/inquire");
        _0x340e3b.utf8 = _0x447333("@protobufjs/utf8");
        _0x340e3b.pool = _0x447333("@protobufjs/pool");
        _0x340e3b.LongBits = _0x447333("./longbits");
        _0x340e3b.isNode = Boolean("undefined" != typeof global && global && global.process && global.process.versions && global.process.versions.node);
        _0x340e3b.global = _0x340e3b.isNode && global || "undefined" != typeof window && window || 'undefined' != typeof self && self || this;
        _0x340e3b.emptyArray = Object.freeze ? Object.freeze([]) : [];
        _0x340e3b.emptyObject = Object.freeze ? Object.freeze({}) : {};
        _0x340e3b.isInteger = Number.isInteger || function (_0x1e58f4) {
          return "number" == typeof _0x1e58f4 && isFinite(_0x1e58f4) && Math.floor(_0x1e58f4) === _0x1e58f4;
        };
        _0x340e3b.isString = function (_0x50afb8) {
          return "string" == typeof _0x50afb8 || _0x50afb8 instanceof String;
        };
        _0x340e3b.isObject = function (_0x3e9728) {
          return _0x3e9728 && "object" == typeof _0x3e9728;
        };
        _0x340e3b.isset = _0x340e3b.isSet = function (_0x39bc85, _0x56f5f8) {
          var _0x656f96 = _0x39bc85[_0x56f5f8];
          return !(null == _0x656f96 || !_0x39bc85.hasOwnProperty(_0x56f5f8)) && ("object" != typeof _0x656f96 || (Array.isArray(_0x656f96) ? _0x656f96.length : Object.keys(_0x656f96).length) > 0x0);
        };
        _0x340e3b.Buffer = function () {
          try {
            var _0x176097 = _0x340e3b.inquire("buffer").Buffer;
            return _0x176097.prototype.utf8Write ? _0x176097 : null;
          } catch (_0x38abf0) {
            return null;
          }
        }();
        _0x340e3b._Buffer_from = null;
        _0x340e3b._Buffer_allocUnsafe = null;
        _0x340e3b.newBuffer = function (_0x4749fd) {
          return "number" == typeof _0x4749fd ? _0x340e3b.Buffer ? _0x340e3b._Buffer_allocUnsafe(_0x4749fd) : new _0x340e3b.Array(_0x4749fd) : _0x340e3b.Buffer ? _0x340e3b._Buffer_from(_0x4749fd) : "undefined" == typeof Uint8Array ? _0x4749fd : new Uint8Array(_0x4749fd);
        };
        _0x340e3b.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array;
        _0x340e3b.Long = _0x340e3b.global.dcodeIO && _0x340e3b.global.dcodeIO.Long || _0x340e3b.global.Long || _0x340e3b.inquire("long");
        _0x340e3b.key2Re = /^true|false|0|1$/;
        _0x340e3b.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
        _0x340e3b.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
        _0x340e3b.longToHash = function (_0x17a0a1) {
          return _0x17a0a1 ? _0x340e3b.LongBits.from(_0x17a0a1).toHash() : _0x340e3b.LongBits.zeroHash;
        };
        _0x340e3b.longFromHash = function (_0x1641aa, _0x54cc6d) {
          var _0xe6a90c = _0x340e3b.LongBits.fromHash(_0x1641aa);
          return _0x340e3b.Long ? _0x340e3b.Long.fromBits(_0xe6a90c.lo, _0xe6a90c.hi, _0x54cc6d) : _0xe6a90c.toNumber(Boolean(_0x54cc6d));
        };
        _0x340e3b.merge = _0x49d598;
        _0x340e3b.lcFirst = function (_0x1e4896) {
          return _0x1e4896.charAt(0x0).toLowerCase() + _0x1e4896.substring(0x1);
        };
        _0x340e3b.newError = _0x40a338;
        _0x340e3b.ProtocolError = _0x40a338("ProtocolError");
        _0x340e3b.oneOfGetter = function (_0x5e4e8a) {
          var _0x10d8db = {};
          for (var _0x36e9b0 = 0x0; _0x36e9b0 < _0x5e4e8a.length; ++_0x36e9b0) {
            _0x10d8db[_0x5e4e8a[_0x36e9b0]] = 0x1;
          }
          return function () {
            var _0x5adc66 = Object.keys(this);
            for (var _0x7d55d8 = _0x5adc66.length - 0x1; _0x7d55d8 > -0x1; --_0x7d55d8) {
              if (0x1 === _0x10d8db[_0x5adc66[_0x7d55d8]] && undefined !== this[_0x5adc66[_0x7d55d8]] && null !== this[_0x5adc66[_0x7d55d8]]) {
                return _0x5adc66[_0x7d55d8];
              }
            }
          };
        };
        _0x340e3b.oneOfSetter = function (_0x5b4b05) {
          return function (_0x5cb0ee) {
            for (var _0x9ced55 = 0x0; _0x9ced55 < _0x5b4b05.length; ++_0x9ced55) {
              if (_0x5b4b05[_0x9ced55] !== _0x5cb0ee) {
                delete this[_0x5b4b05[_0x9ced55]];
              }
            }
          };
        };
        _0x340e3b.toJSONOptions = {
          'longs': String,
          'enums': String,
          'bytes': String,
          'json': true
        };
        _0x340e3b._configure = function () {
          var _0x29a6c1 = _0x340e3b.Buffer;
          if (_0x29a6c1) {
            _0x340e3b._Buffer_from = _0x29a6c1.from !== Uint8Array.from && _0x29a6c1.from || function (_0x121c7b, _0xe07157) {
              return new _0x29a6c1(_0x121c7b, _0xe07157);
            };
            _0x340e3b._Buffer_allocUnsafe = _0x29a6c1.allocUnsafe || function (_0x4882d1) {
              return new _0x29a6c1(_0x4882d1);
            };
          } else {
            _0x340e3b._Buffer_from = _0x340e3b._Buffer_allocUnsafe = null;
          }
        };
        _0x49878f.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          '@protobufjs/base64': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js',
          '@protobufjs/eventemitter': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js',
          '@protobufjs/float': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/@protobufjs/float/index.js",
          '@protobufjs/inquire': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js",
          '@protobufjs/utf8': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js',
          '@protobufjs/pool': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js",
          './longbits': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js"
        };
      });
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/writer.js", function (_0x376f85, _0x3940d2, _0x4e047b, _0x2db033, _0x1f9158) {
        _0x4e047b.exports = _0x2ae4f6;
        var _0x2914fa;
        var _0x275da1 = _0x3940d2("./util/minimal");
        var _0x5cbe9b = _0x275da1.LongBits;
        var _0x26cdd3 = _0x275da1.base64;
        var _0x16abc7 = _0x275da1.utf8;
        function _0xbded7a(_0x1d74e9, _0x1cd40f, _0x3cf56c) {
          this.fn = _0x1d74e9;
          this.len = _0x1cd40f;
          this.next = undefined;
          this.val = _0x3cf56c;
        }
        function _0x268e0c() {}
        function _0x42158e(_0x52d62e) {
          this.head = _0x52d62e.head;
          this.tail = _0x52d62e.tail;
          this.len = _0x52d62e.len;
          this.next = _0x52d62e.states;
        }
        function _0x2ae4f6() {
          this.len = 0x0;
          this.head = new _0xbded7a(_0x268e0c, 0x0, 0x0);
          this.tail = this.head;
          this.states = null;
        }
        var _0x208c0c = function () {
          return _0x275da1.Buffer ? function () {
            return (_0x2ae4f6.create = function () {
              return new _0x2914fa();
            })();
          } : function () {
            return new _0x2ae4f6();
          };
        };
        function _0x332c1c(_0x2f6cbb, _0x151d3e, _0x5b0593) {
          _0x151d3e[_0x5b0593] = 0xff & _0x2f6cbb;
        }
        function _0x3d526c(_0x384ade, _0x24f98f) {
          this.len = _0x384ade;
          this.next = undefined;
          this.val = _0x24f98f;
        }
        function _0x1123a8(_0x5d9ab3, _0x29a905, _0x1a3d26) {
          for (; _0x5d9ab3.hi;) {
            _0x29a905[_0x1a3d26++] = 0x7f & _0x5d9ab3.lo | 0x80;
            _0x5d9ab3.lo = (_0x5d9ab3.lo >>> 0x7 | _0x5d9ab3.hi << 0x19) >>> 0x0;
            _0x5d9ab3.hi >>>= 0x7;
          }
          for (; _0x5d9ab3.lo > 0x7f;) {
            _0x29a905[_0x1a3d26++] = 0x7f & _0x5d9ab3.lo | 0x80;
            _0x5d9ab3.lo = _0x5d9ab3.lo >>> 0x7;
          }
          _0x29a905[_0x1a3d26++] = _0x5d9ab3.lo;
        }
        function _0x1e43c6(_0x2df02b, _0x26ad3a, _0x59e454) {
          _0x26ad3a[_0x59e454] = 0xff & _0x2df02b;
          _0x26ad3a[_0x59e454 + 0x1] = _0x2df02b >>> 0x8 & 0xff;
          _0x26ad3a[_0x59e454 + 0x2] = _0x2df02b >>> 0x10 & 0xff;
          _0x26ad3a[_0x59e454 + 0x3] = _0x2df02b >>> 0x18;
        }
        _0x2ae4f6.create = _0x208c0c();
        _0x2ae4f6.alloc = function (_0x3895dc) {
          return new _0x275da1.Array(_0x3895dc);
        };
        if (_0x275da1.Array !== Array) {
          _0x2ae4f6.alloc = _0x275da1.pool(_0x2ae4f6.alloc, _0x275da1.Array.prototype.subarray);
        }
        _0x2ae4f6.prototype._push = function (_0x19eb96, _0x23acff, _0x17562d) {
          this.tail = this.tail.next = new _0xbded7a(_0x19eb96, _0x23acff, _0x17562d);
          this.len += _0x23acff;
          return this;
        };
        _0x3d526c.prototype = Object.create(_0xbded7a.prototype);
        _0x3d526c.prototype.fn = function (_0x45fd26, _0x2e3c02, _0x1223a2) {
          for (; _0x45fd26 > 0x7f;) {
            _0x2e3c02[_0x1223a2++] = 0x7f & _0x45fd26 | 0x80;
            _0x45fd26 >>>= 0x7;
          }
          _0x2e3c02[_0x1223a2] = _0x45fd26;
        };
        _0x2ae4f6.prototype.uint32 = function (_0x3f7f4e) {
          this.len += (this.tail = this.tail.next = new _0x3d526c((_0x3f7f4e >>>= 0x0) < 0x80 ? 0x1 : _0x3f7f4e < 0x4000 ? 0x2 : _0x3f7f4e < 0x200000 ? 0x3 : _0x3f7f4e < 0x10000000 ? 0x4 : 0x5, _0x3f7f4e)).len;
          return this;
        };
        _0x2ae4f6.prototype.int32 = function (_0x366641) {
          return _0x366641 < 0x0 ? this._push(_0x1123a8, 0xa, _0x5cbe9b.fromNumber(_0x366641)) : this.uint32(_0x366641);
        };
        _0x2ae4f6.prototype.sint32 = function (_0x59f0cb) {
          return this.uint32((_0x59f0cb << 0x1 ^ _0x59f0cb >> 0x1f) >>> 0x0);
        };
        _0x2ae4f6.prototype.uint64 = function (_0x23eebb) {
          var _0x47f682 = _0x5cbe9b.from(_0x23eebb);
          return this._push(_0x1123a8, _0x47f682.length(), _0x47f682);
        };
        _0x2ae4f6.prototype.int64 = _0x2ae4f6.prototype.uint64;
        _0x2ae4f6.prototype.sint64 = function (_0x85842e) {
          var _0x1a1ec6 = _0x5cbe9b.from(_0x85842e).zzEncode();
          return this._push(_0x1123a8, _0x1a1ec6.length(), _0x1a1ec6);
        };
        _0x2ae4f6.prototype.bool = function (_0x13ed53) {
          return this._push(_0x332c1c, 0x1, _0x13ed53 ? 0x1 : 0x0);
        };
        _0x2ae4f6.prototype.fixed32 = function (_0x1bf10c) {
          return this._push(_0x1e43c6, 0x4, _0x1bf10c >>> 0x0);
        };
        _0x2ae4f6.prototype.sfixed32 = _0x2ae4f6.prototype.fixed32;
        _0x2ae4f6.prototype.fixed64 = function (_0x2bda3c) {
          var _0x390666 = _0x5cbe9b.from(_0x2bda3c);
          return this._push(_0x1e43c6, 0x4, _0x390666.lo)._push(_0x1e43c6, 0x4, _0x390666.hi);
        };
        _0x2ae4f6.prototype.sfixed64 = _0x2ae4f6.prototype.fixed64;
        _0x2ae4f6.prototype.float = function (_0x48be2f) {
          return this._push(_0x275da1.float.writeFloatLE, 0x4, _0x48be2f);
        };
        _0x2ae4f6.prototype.double = function (_0x584706) {
          return this._push(_0x275da1.float.writeDoubleLE, 0x8, _0x584706);
        };
        var _0x2b8fe3 = _0x275da1.Array.prototype.set ? function (_0x3b1079, _0x39d135, _0x1aad55) {
          _0x39d135.set(_0x3b1079, _0x1aad55);
        } : function (_0xae07ce, _0x21e4e9, _0x27c0e9) {
          for (var _0x501826 = 0x0; _0x501826 < _0xae07ce.length; ++_0x501826) {
            _0x21e4e9[_0x27c0e9 + _0x501826] = _0xae07ce[_0x501826];
          }
        };
        _0x2ae4f6.prototype.bytes = function (_0x23a184) {
          var _0x124234 = _0x23a184.length >>> 0x0;
          if (!_0x124234) {
            return this._push(_0x332c1c, 0x1, 0x0);
          }
          if (_0x275da1.isString(_0x23a184)) {
            var _0x2c2940 = _0x2ae4f6.alloc(_0x124234 = _0x26cdd3.length(_0x23a184));
            _0x26cdd3.decode(_0x23a184, _0x2c2940, 0x0);
            _0x23a184 = _0x2c2940;
          }
          return this.uint32(_0x124234)._push(_0x2b8fe3, _0x124234, _0x23a184);
        };
        _0x2ae4f6.prototype.string = function (_0x115849) {
          var _0x2dbb98 = _0x16abc7.length(_0x115849);
          return _0x2dbb98 ? this.uint32(_0x2dbb98)._push(_0x16abc7.write, _0x2dbb98, _0x115849) : this._push(_0x332c1c, 0x1, 0x0);
        };
        _0x2ae4f6.prototype.fork = function () {
          this.states = new _0x42158e(this);
          this.head = this.tail = new _0xbded7a(_0x268e0c, 0x0, 0x0);
          this.len = 0x0;
          return this;
        };
        _0x2ae4f6.prototype.reset = function () {
          if (this.states) {
            this.head = this.states.head;
            this.tail = this.states.tail;
            this.len = this.states.len;
            this.states = this.states.next;
          } else {
            this.head = this.tail = new _0xbded7a(_0x268e0c, 0x0, 0x0);
            this.len = 0x0;
          }
          return this;
        };
        _0x2ae4f6.prototype.ldelim = function () {
          var _0x2ae69c = this.head;
          var _0x38ae2f = this.tail;
          var _0x1409fe = this.len;
          this.reset().uint32(_0x1409fe);
          if (_0x1409fe) {
            this.tail.next = _0x2ae69c.next;
            this.tail = _0x38ae2f;
            this.len += _0x1409fe;
          }
          return this;
        };
        _0x2ae4f6.prototype.finish = function () {
          var _0x2d301f = this.head.next;
          var _0x4bd257 = this.constructor.alloc(this.len);
          for (var _0x2d7d2f = 0x0; _0x2d301f;) {
            _0x2d301f.fn(_0x2d301f.val, _0x4bd257, _0x2d7d2f);
            _0x2d7d2f += _0x2d301f.len;
            _0x2d301f = _0x2d301f.next;
          }
          return _0x4bd257;
        };
        _0x2ae4f6._configure = function (_0x3afcc8) {
          _0x2914fa = _0x3afcc8;
          _0x2ae4f6.create = _0x208c0c();
          _0x2914fa._configure();
        };
        _0x4e047b.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x3cf404.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js', function (_0x54596c, _0x536f56, _0x3cbf80, _0x15a959, _0x46fc8d) {
        _0x3cbf80.exports = _0xf5877d;
        var _0x4e8c4a = _0x536f56('./writer');
        (_0xf5877d.prototype = Object.create(_0x4e8c4a.prototype)).constructor = _0xf5877d;
        var _0x135572 = _0x536f56("./util/minimal");
        function _0xf5877d() {
          _0x4e8c4a.call(this);
        }
        function _0x1060e7(_0x338e2b, _0x4d17bb, _0x86fa45) {
          if (_0x338e2b.length < 0x28) {
            _0x135572.utf8.write(_0x338e2b, _0x4d17bb, _0x86fa45);
          } else if (_0x4d17bb.utf8Write) {
            _0x4d17bb.utf8Write(_0x338e2b, _0x86fa45);
          } else {
            _0x4d17bb.write(_0x338e2b, _0x86fa45);
          }
        }
        _0xf5877d._configure = function () {
          _0xf5877d.alloc = _0x135572._Buffer_allocUnsafe;
          _0xf5877d.writeBytesBuffer = _0x135572.Buffer && _0x135572.Buffer.prototype instanceof Uint8Array && "set" === _0x135572.Buffer.prototype.set.name ? function (_0x261d91, _0x497d21, _0x4a4b61) {
            _0x497d21.set(_0x261d91, _0x4a4b61);
          } : function (_0x51744d, _0x12859c, _0x571cca) {
            if (_0x51744d.copy) {
              _0x51744d.copy(_0x12859c, _0x571cca, 0x0, _0x51744d.length);
            } else {
              for (var _0x168a42 = 0x0; _0x168a42 < _0x51744d.length;) {
                _0x12859c[_0x571cca++] = _0x51744d[_0x168a42++];
              }
            }
          };
        };
        _0xf5877d.prototype.bytes = function (_0x17c291) {
          if (_0x135572.isString(_0x17c291)) {
            _0x17c291 = _0x135572._Buffer_from(_0x17c291, "base64");
          }
          var _0x3fb2af = _0x17c291.length >>> 0x0;
          this.uint32(_0x3fb2af);
          if (_0x3fb2af) {
            this._push(_0xf5877d.writeBytesBuffer, _0x3fb2af, _0x17c291);
          }
          return this;
        };
        _0xf5877d.prototype.string = function (_0x29b15a) {
          var _0xa1b9c1 = _0x135572.Buffer.byteLength(_0x29b15a);
          this.uint32(_0xa1b9c1);
          if (_0xa1b9c1) {
            this._push(_0x1060e7, _0xa1b9c1, _0x29b15a);
          }
          return this;
        };
        _0xf5877d._configure();
        _0x3cbf80.exports;
      }, function () {
        return {
          './writer': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/reader.js", function (_0x22b336, _0x14dc82, _0x5447b7, _0x6f0ea, _0x3fa95b) {
        _0x5447b7.exports = _0x113414;
        var _0x15c18d;
        var _0x48feee = _0x14dc82("./util/minimal");
        var _0x5ebc04 = _0x48feee.LongBits;
        var _0x4bd9e1 = _0x48feee.utf8;
        function _0x113414(_0x23151c) {
          this.buf = _0x23151c;
          this.pos = 0x0;
          this.len = _0x23151c.length;
        }
        var _0x1b68d2;
        var _0x46fbbc = "undefined" != typeof Uint8Array ? function (_0x905e32) {
          if (_0x905e32 instanceof Uint8Array || Array.isArray(_0x905e32)) {
            return new _0x113414(_0x905e32);
          }
          throw Error("illegal buffer");
        } : function (_0x54600b) {
          if (Array.isArray(_0x54600b)) {
            return new _0x113414(_0x54600b);
          }
          throw Error("illegal buffer");
        };
        var _0x366de1 = function () {
          return _0x48feee.Buffer ? function (_0x207634) {
            return (_0x113414.create = function (_0x59a4a8) {
              return _0x48feee.Buffer.isBuffer(_0x59a4a8) ? new _0x15c18d(_0x59a4a8) : _0x46fbbc(_0x59a4a8);
            })(_0x207634);
          } : _0x46fbbc;
        };
        function _0x29ea8f() {
          var _0x8d86a7 = new _0x5ebc04(0x0, 0x0);
          var _0x306709 = 0x0;
          if (!(this.len - this.pos > 0x4)) {
            for (; _0x306709 < 0x3; ++_0x306709) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0x8d86a7.lo = (_0x8d86a7.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0x306709) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x8d86a7;
              }
            }
            _0x8d86a7.lo = (_0x8d86a7.lo | (0x7f & this.buf[this.pos++]) << 0x7 * _0x306709) >>> 0x0;
            return _0x8d86a7;
          }
          for (; _0x306709 < 0x4; ++_0x306709) {
            _0x8d86a7.lo = (_0x8d86a7.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0x306709) >>> 0x0;
            if (this.buf[this.pos++] < 0x80) {
              return _0x8d86a7;
            }
          }
          _0x8d86a7.lo = (_0x8d86a7.lo | (0x7f & this.buf[this.pos]) << 0x1c) >>> 0x0;
          _0x8d86a7.hi = (_0x8d86a7.hi | (0x7f & this.buf[this.pos]) >> 0x4) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x8d86a7;
          }
          _0x306709 = 0x0;
          if (this.len - this.pos > 0x4) {
            for (; _0x306709 < 0x5; ++_0x306709) {
              _0x8d86a7.hi = (_0x8d86a7.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0x306709 + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x8d86a7;
              }
            }
          } else {
            for (; _0x306709 < 0x5; ++_0x306709) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0x8d86a7.hi = (_0x8d86a7.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0x306709 + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x8d86a7;
              }
            }
          }
          throw Error("invalid varint encoding");
        }
        function _0x423373() {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x8 || 0x1) + " > " + this.len);
          }
          return new _0x5ebc04((this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0, (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0);
        }
        _0x113414.create = _0x366de1();
        _0x113414.prototype._slice = _0x48feee.Array.prototype.subarray || _0x48feee.Array.prototype.slice;
        _0x1b68d2 = 0xffffffff;
        _0x113414.prototype.uint32 = function () {
          _0x1b68d2 = (0x7f & this.buf[this.pos]) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x1b68d2;
          }
          _0x1b68d2 = (_0x1b68d2 | (0x7f & this.buf[this.pos]) << 0x7) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x1b68d2;
          }
          _0x1b68d2 = (_0x1b68d2 | (0x7f & this.buf[this.pos]) << 0xe) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x1b68d2;
          }
          _0x1b68d2 = (_0x1b68d2 | (0x7f & this.buf[this.pos]) << 0x15) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x1b68d2;
          }
          _0x1b68d2 = (_0x1b68d2 | (0xf & this.buf[this.pos]) << 0x1c) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x1b68d2;
          }
          if ((this.pos += 0x5) > this.len) {
            this.pos = this.len;
            throw RangeError("index out of range: " + this.pos + " + " + (0xa || 0x1) + " > " + this.len);
          }
          return _0x1b68d2;
        };
        _0x113414.prototype.int32 = function () {
          return 0x0 | this.uint32();
        };
        _0x113414.prototype.sint32 = function () {
          var _0x370f24 = this.uint32();
          return _0x370f24 >>> 0x1 ^ -(0x1 & _0x370f24) | 0x0;
        };
        _0x113414.prototype.bool = function () {
          return 0x0 !== this.uint32();
        };
        _0x113414.prototype.fixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0x113414.prototype.sfixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return 0x0 | (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0x113414.prototype.float = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x31f363 = _0x48feee.float.readFloatLE(this.buf, this.pos);
          this.pos += 0x4;
          return _0x31f363;
        };
        _0x113414.prototype.double = function () {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x15e631 = _0x48feee.float.readDoubleLE(this.buf, this.pos);
          this.pos += 0x8;
          return _0x15e631;
        };
        _0x113414.prototype.bytes = function () {
          var _0x12df28 = this.uint32();
          var _0x43fbdd = this.pos;
          var _0x33e2a4 = this.pos + _0x12df28;
          if (_0x33e2a4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (_0x12df28 || 0x1) + " > " + this.len);
          }
          this.pos += _0x12df28;
          return Array.isArray(this.buf) ? this.buf.slice(_0x43fbdd, _0x33e2a4) : _0x43fbdd === _0x33e2a4 ? new this.buf.constructor(0x0) : this._slice.call(this.buf, _0x43fbdd, _0x33e2a4);
        };
        _0x113414.prototype.string = function () {
          var _0x1ef0ec = this.bytes();
          return _0x4bd9e1.read(_0x1ef0ec, 0x0, _0x1ef0ec.length);
        };
        _0x113414.prototype.skip = function (_0x440140) {
          if ("number" == typeof _0x440140) {
            if (this.pos + _0x440140 > this.len) {
              throw RangeError("index out of range: " + this.pos + " + " + (_0x440140 || 0x1) + " > " + this.len);
            }
            this.pos += _0x440140;
          } else {
            do {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
            } while (0x80 & this.buf[this.pos++]);
          }
          return this;
        };
        _0x113414.prototype.skipType = function (_0x5cd19b) {
          switch (_0x5cd19b) {
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
              for (; 0x4 != (_0x5cd19b = 0x7 & this.uint32());) {
                this.skipType(_0x5cd19b);
              }
              break;
            case 0x5:
              this.skip(0x4);
              break;
            default:
              throw Error("invalid wire type " + _0x5cd19b + " at offset " + this.pos);
          }
          return this;
        };
        _0x113414._configure = function (_0x388975) {
          _0x15c18d = _0x388975;
          _0x113414.create = _0x366de1();
          _0x15c18d._configure();
          var _0x18ff41 = _0x48feee.Long ? "toLong" : 'toNumber';
          _0x48feee.merge(_0x113414.prototype, {
            'int64': function () {
              return _0x29ea8f.call(this)[_0x18ff41](false);
            },
            'uint64': function () {
              return _0x29ea8f.call(this)[_0x18ff41](true);
            },
            'sint64': function () {
              return _0x29ea8f.call(this).zzDecode()[_0x18ff41](false);
            },
            'fixed64': function () {
              return _0x423373.call(this)[_0x18ff41](true);
            },
            'sfixed64': function () {
              return _0x423373.call(this)[_0x18ff41](false);
            }
          });
        };
        _0x5447b7.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js", function (_0x4b0028, _0x5b870d, _0x18cc97, _0x44ca0d, _0x59af35) {
        _0x18cc97.exports = _0x5159eb;
        var _0x56560c = _0x5b870d("./reader");
        (_0x5159eb.prototype = Object.create(_0x56560c.prototype)).constructor = _0x5159eb;
        var _0x5b8bae = _0x5b870d("./util/minimal");
        function _0x5159eb(_0x1affd1) {
          _0x56560c.call(this, _0x1affd1);
        }
        _0x5159eb._configure = function () {
          if (_0x5b8bae.Buffer) {
            _0x5159eb.prototype._slice = _0x5b8bae.Buffer.prototype.slice;
          }
        };
        _0x5159eb.prototype.string = function () {
          var _0x52b0bc = this.uint32();
          return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + _0x52b0bc, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + _0x52b0bc, this.len));
        };
        _0x5159eb._configure();
        _0x18cc97.exports;
      }, function () {
        return {
          './reader': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x3cf404.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js', function (_0x3efef3, _0xefafc1, _0x290a18, _0xe2b4d9, _0x538952) {
        _0x290a18.exports = _0x4a457d;
        var _0x20d97b = _0xefafc1("../util/minimal");
        function _0x4a457d(_0x47b43d, _0xf55393, _0x10c251) {
          if ("function" != typeof _0x47b43d) {
            throw TypeError("rpcImpl must be a function");
          }
          _0x20d97b.EventEmitter.call(this);
          this.rpcImpl = _0x47b43d;
          this.requestDelimited = Boolean(_0xf55393);
          this.responseDelimited = Boolean(_0x10c251);
        }
        (_0x4a457d.prototype = Object.create(_0x20d97b.EventEmitter.prototype)).constructor = _0x4a457d;
        _0x4a457d.prototype.rpcCall = function _0x4de8c1(_0x28ce40, _0x5dca68, _0x11af7d, _0x4140f0, _0x571b3d) {
          if (!_0x4140f0) {
            throw TypeError("request must be specified");
          }
          var _0x55b9be = this;
          if (!_0x571b3d) {
            return _0x20d97b.asPromise(_0x4de8c1, _0x55b9be, _0x28ce40, _0x5dca68, _0x11af7d, _0x4140f0);
          }
          if (_0x55b9be.rpcImpl) {
            try {
              return _0x55b9be.rpcImpl(_0x28ce40, _0x5dca68[_0x55b9be.requestDelimited ? "encodeDelimited" : "encode"](_0x4140f0).finish(), function (_0x13b0ba, _0xf2bc46) {
                if (_0x13b0ba) {
                  _0x55b9be.emit("error", _0x13b0ba, _0x28ce40);
                  return _0x571b3d(_0x13b0ba);
                }
                if (null !== _0xf2bc46) {
                  if (!(_0xf2bc46 instanceof _0x11af7d)) {
                    try {
                      _0xf2bc46 = _0x11af7d[_0x55b9be.responseDelimited ? "decodeDelimited" : "decode"](_0xf2bc46);
                    } catch (_0x1abdd8) {
                      _0x55b9be.emit("error", _0x1abdd8, _0x28ce40);
                      return _0x571b3d(_0x1abdd8);
                    }
                  }
                  _0x55b9be.emit("data", _0xf2bc46, _0x28ce40);
                  return _0x571b3d(null, _0xf2bc46);
                }
                _0x55b9be.end(true);
              });
            } catch (_0x20b07f) {
              _0x55b9be.emit("error", _0x20b07f, _0x28ce40);
              return void setTimeout(function () {
                _0x571b3d(_0x20b07f);
              }, 0x0);
            }
          } else {
            setTimeout(function () {
              _0x571b3d(Error("already ended"));
            }, 0x0);
          }
        };
        _0x4a457d.prototype.end = function (_0x205ea3) {
          if (this.rpcImpl) {
            if (!_0x205ea3) {
              this.rpcImpl(null, null, null);
            }
            this.rpcImpl = null;
            this.emit('end').off();
          }
          return this;
        };
        _0x290a18.exports;
      }, function () {
        return {
          '../util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js", function (_0x2fad85, _0x3d8b5b, _0x47f9e9, _0x11938f, _0x4be1d9) {
        _0x2fad85.Service = _0x3d8b5b("./rpc/service");
        _0x47f9e9.exports;
      }, function () {
        return {
          './rpc/service': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js'
        };
      });
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/roots.js", function (_0x4ce255, _0x3195f0, _0x23df0c, _0x2bdacd, _0x1ea1d2) {
        _0x23df0c.exports = {};
        _0x23df0c.exports;
      }, {});
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js", function (_0x2dc4cf, _0x28dd15, _0x433df5, _0x27f497, _0x272ad4) {
        function _0x3ebd94() {
          _0x2dc4cf.util._configure();
          _0x2dc4cf.Writer._configure(_0x2dc4cf.BufferWriter);
          _0x2dc4cf.Reader._configure(_0x2dc4cf.BufferReader);
        }
        _0x2dc4cf.build = "minimal";
        _0x2dc4cf.Writer = _0x28dd15("./writer");
        _0x2dc4cf.BufferWriter = _0x28dd15("./writer_buffer");
        _0x2dc4cf.Reader = _0x28dd15("./reader");
        _0x2dc4cf.BufferReader = _0x28dd15('./reader_buffer');
        _0x2dc4cf.util = _0x28dd15('./util/minimal');
        _0x2dc4cf.rpc = _0x28dd15("./rpc");
        _0x2dc4cf.roots = _0x28dd15('./roots');
        _0x2dc4cf.configure = _0x3ebd94;
        _0x3ebd94();
        _0x433df5.exports;
      }, function () {
        return {
          './writer': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './writer_buffer': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js',
          './reader': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './reader_buffer': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js",
          './util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          './rpc': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js",
          './roots': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/roots.js"
        };
      });
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js", function (_0x417923, _0x962a59, _0x6b9482, _0x2dd3cb, _0x5ab862) {
        function _0x2dfd4f(_0x46f876, _0x4b1bc6) {
          if ("string" == typeof _0x46f876) {
            _0x4b1bc6 = _0x46f876;
            _0x46f876 = undefined;
          }
          var _0x3621e1 = [];
          function _0x518836(_0x44dc44) {
            if ("string" != typeof _0x44dc44) {
              var _0x2007ec = "function " + (undefined || _0x4b1bc6 || '') + '(' + (_0x46f876 && _0x46f876.join(',') || '') + "){\n  " + _0x3621e1.join("\n  ") + "\n}";
              if (_0x2dfd4f.verbose) {
                console.log("codegen: " + _0x2007ec);
              }
              _0x2007ec = "return " + _0x2007ec;
              if (_0x44dc44) {
                var _0x477ddb = Object.keys(_0x44dc44);
                var _0x47c807 = new Array(_0x477ddb.length + 0x1);
                var _0x441701 = new Array(_0x477ddb.length);
                for (var _0x1d0d96 = 0x0; _0x1d0d96 < _0x477ddb.length;) {
                  _0x47c807[_0x1d0d96] = _0x477ddb[_0x1d0d96];
                  _0x441701[_0x1d0d96] = _0x44dc44[_0x477ddb[_0x1d0d96++]];
                }
                _0x47c807[_0x1d0d96] = _0x2007ec;
                return Function.apply(null, _0x47c807).apply(null, _0x441701);
              }
              return Function(_0x2007ec)();
            }
            var _0x2a3158 = new Array(arguments.length - 0x1);
            for (var _0x48a105 = 0x0; _0x48a105 < _0x2a3158.length;) {
              _0x2a3158[_0x48a105] = arguments[++_0x48a105];
            }
            _0x48a105 = 0x0;
            _0x44dc44 = _0x44dc44.replace(/%([%dfijs])/g, function (_0x28fb4d, _0x315b3d) {
              var _0x457d1e = _0x2a3158[_0x48a105++];
              switch (_0x315b3d) {
                case 'd':
                case 'f':
                  return String(Number(_0x457d1e));
                case 'i':
                  return String(Math.floor(_0x457d1e));
                case 'j':
                  return JSON.stringify(_0x457d1e);
                case 's':
                  return String(_0x457d1e);
              }
              return '%';
            });
            if (_0x48a105 !== _0x2a3158.length) {
              throw Error("parameter count mismatch");
            }
            _0x3621e1.push(_0x44dc44);
            return _0x518836;
          }
          function _0x3336db(_0x5a86f9) {
            return "function " + (_0x5a86f9 || _0x4b1bc6 || '') + '(' + (_0x46f876 && _0x46f876.join(',') || '') + "){\n  " + _0x3621e1.join("\n  ") + "\n}";
          }
          _0x518836.toString = _0x3336db;
          return _0x518836;
        }
        _0x6b9482.exports = _0x2dfd4f;
        _0x2dfd4f.verbose = false;
        _0x6b9482.exports;
      }, {});
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js", function (_0x52c202, _0x412aeb, _0x5575fb, _0x1514c4, _0x3cb9cb) {
        _0x5575fb.exports = _0x2b2f60;
        var _0x50c8b5 = _0x412aeb("@protobufjs/aspromise");
        var _0x45b502 = _0x412aeb('@protobufjs/inquire')('fs');
        function _0x2b2f60(_0x346e1a, _0x1ffe3d, _0x558250) {
          if ("function" == typeof _0x1ffe3d) {
            _0x558250 = _0x1ffe3d;
            _0x1ffe3d = {};
          } else if (!_0x1ffe3d) {
            _0x1ffe3d = {};
          }
          return _0x558250 ? !_0x1ffe3d.xhr && _0x45b502 && _0x45b502.readFile ? _0x45b502.readFile(_0x346e1a, function (_0x59ebd0, _0x1209d3) {
            return _0x59ebd0 && "undefined" != typeof XMLHttpRequest ? _0x2b2f60.xhr(_0x346e1a, _0x1ffe3d, _0x558250) : _0x59ebd0 ? _0x558250(_0x59ebd0) : _0x558250(null, _0x1ffe3d.binary ? _0x1209d3 : _0x1209d3.toString('utf8'));
          }) : _0x2b2f60.xhr(_0x346e1a, _0x1ffe3d, _0x558250) : _0x50c8b5(_0x2b2f60, this, _0x346e1a, _0x1ffe3d);
        }
        _0x2b2f60.xhr = function (_0x321f17, _0x9b2a82, _0x214db1) {
          var _0x32581a = new XMLHttpRequest();
          _0x32581a.onreadystatechange = function () {
            if (0x4 === _0x32581a.readyState) {
              if (0x0 !== _0x32581a.status && 0xc8 !== _0x32581a.status) {
                return _0x214db1(Error("status " + _0x32581a.status));
              }
              if (_0x9b2a82.binary) {
                var _0x51b457 = _0x32581a.response;
                if (!_0x51b457) {
                  _0x51b457 = [];
                  for (var _0x39c4dc = 0x0; _0x39c4dc < _0x32581a.responseText.length; ++_0x39c4dc) {
                    _0x51b457.push(0xff & _0x32581a.responseText.charCodeAt(_0x39c4dc));
                  }
                }
                return _0x214db1(null, "undefined" != typeof Uint8Array ? new Uint8Array(_0x51b457) : _0x51b457);
              }
              return _0x214db1(null, _0x32581a.responseText);
            }
          };
          if (_0x9b2a82.binary) {
            if ("overrideMimeType" in _0x32581a) {
              _0x32581a.overrideMimeType("text/plain; charset=x-user-defined");
            }
            _0x32581a.responseType = "arraybuffer";
          }
          _0x32581a.open("GET", _0x321f17);
          _0x32581a.send();
        };
        _0x5575fb.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          '@protobufjs/inquire': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js"
        };
      });
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/@protobufjs/path/index.js", function (_0x4fa1bc, _0x3823a6, _0x120cab, _0x25d006, _0x189314) {
        var _0x55777e = _0x4fa1bc.isAbsolute = function (_0x400f0c) {
          return /^(?:\/|\w+:)/.test(_0x400f0c);
        };
        var _0x245b0f = _0x4fa1bc.normalize = function (_0x50ca4a) {
          var _0xd4cf77 = (_0x50ca4a = _0x50ca4a.replace(/\\/g, '/').replace(/\/{2,}/g, '/')).split('/');
          var _0x350627 = _0x55777e(_0x50ca4a);
          var _0x7bc558 = '';
          if (_0x350627) {
            _0x7bc558 = _0xd4cf77.shift() + '/';
          }
          for (var _0x33dcba = 0x0; _0x33dcba < _0xd4cf77.length;) {
            if ('..' === _0xd4cf77[_0x33dcba]) {
              if (_0x33dcba > 0x0 && '..' !== _0xd4cf77[_0x33dcba - 0x1]) {
                _0xd4cf77.splice(--_0x33dcba, 0x2);
              } else if (_0x350627) {
                _0xd4cf77.splice(_0x33dcba, 0x1);
              } else {
                ++_0x33dcba;
              }
            } else if ('.' === _0xd4cf77[_0x33dcba]) {
              _0xd4cf77.splice(_0x33dcba, 0x1);
            } else {
              ++_0x33dcba;
            }
          }
          return _0x7bc558 + _0xd4cf77.join('/');
        };
        _0x4fa1bc.resolve = function (_0x285616, _0x22483c, _0x1faec8) {
          if (!_0x1faec8) {
            _0x22483c = _0x245b0f(_0x22483c);
          }
          return _0x55777e(_0x22483c) ? _0x22483c : (_0x1faec8 || (_0x285616 = _0x245b0f(_0x285616)), (_0x285616 = _0x285616.replace(/(?:\/|^)[^/]+$/, '')).length ? _0x245b0f(_0x285616 + '/' + _0x22483c) : _0x22483c);
        };
        _0x120cab.exports;
      }, {});
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/types.js", function (_0x255b9d, _0x285e5f, _0x5132ba, _0x29d602, _0x315dda) {
        var _0x24f22a = _0x285e5f("./util");
        var _0x2e4ac1 = ["double", 'float', "int32", 'uint32', "sint32", 'fixed32', 'sfixed32', 'int64', "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];
        function _0x218480(_0x3f4575, _0x3d9d04) {
          var _0x393dab = 0x0;
          var _0x47a06f = {};
          for (_0x3d9d04 |= 0x0; _0x393dab < _0x3f4575.length;) {
            _0x47a06f[_0x2e4ac1[_0x393dab + _0x3d9d04]] = _0x3f4575[_0x393dab++];
          }
          return _0x47a06f;
        }
        _0x255b9d.basic = _0x218480([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2, 0x2]);
        _0x255b9d.defaults = _0x218480([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, false, '', _0x24f22a.emptyArray, null]);
        _0x255b9d.long = _0x218480([0x0, 0x0, 0x0, 0x1, 0x1], 0x7);
        _0x255b9d.mapKey = _0x218480([0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2], 0x2);
        _0x255b9d.packed = _0x218480([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0]);
        _0x5132ba.exports;
      }, function () {
        return {
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/field.js", function (_0x574b55, _0x29dd09, _0x28a329, _0x1b2f0c, _0x4fc33a) {
        _0x28a329.exports = _0x272266;
        var _0x587150 = _0x29dd09('./object');
        ((_0x272266.prototype = Object.create(_0x587150.prototype)).constructor = _0x272266).className = "Field";
        var _0x3ab144;
        var _0xdc1f05 = _0x29dd09("./enum");
        var _0x4e3d8e = _0x29dd09("./types");
        var _0x2a6f06 = _0x29dd09("./util");
        var _0x1588d0 = /^required|optional|repeated$/;
        function _0x272266(_0x2cda35, _0x1072ba, _0xc632b7, _0x7b1bd3, _0x46f196, _0x8657f8, _0x188105) {
          if (_0x2a6f06.isObject(_0x7b1bd3)) {
            _0x188105 = _0x46f196;
            _0x8657f8 = _0x7b1bd3;
            _0x7b1bd3 = _0x46f196 = undefined;
          } else if (_0x2a6f06.isObject(_0x46f196)) {
            _0x188105 = _0x8657f8;
            _0x8657f8 = _0x46f196;
            _0x46f196 = undefined;
          }
          _0x587150.call(this, _0x2cda35, _0x8657f8);
          if (!_0x2a6f06.isInteger(_0x1072ba) || _0x1072ba < 0x0) {
            throw TypeError("id must be a non-negative integer");
          }
          if (!_0x2a6f06.isString(_0xc632b7)) {
            throw TypeError("type must be a string");
          }
          if (undefined !== _0x7b1bd3 && !_0x1588d0.test(_0x7b1bd3 = _0x7b1bd3.toString().toLowerCase())) {
            throw TypeError("rule must be a string rule");
          }
          if (undefined !== _0x46f196 && !_0x2a6f06.isString(_0x46f196)) {
            throw TypeError("extend must be a string");
          }
          if ("proto3_optional" === _0x7b1bd3) {
            _0x7b1bd3 = "optional";
          }
          this.rule = _0x7b1bd3 && "optional" !== _0x7b1bd3 ? _0x7b1bd3 : undefined;
          this.type = _0xc632b7;
          this.id = _0x1072ba;
          this.extend = _0x46f196 || undefined;
          this.required = "required" === _0x7b1bd3;
          this.optional = !this.required;
          this.repeated = "repeated" === _0x7b1bd3;
          this.map = false;
          this.message = null;
          this.partOf = null;
          this.typeDefault = null;
          this.defaultValue = null;
          this.long = !!_0x2a6f06.Long && undefined !== _0x4e3d8e.long[_0xc632b7];
          this.bytes = "bytes" === _0xc632b7;
          this.resolvedType = null;
          this.extensionField = null;
          this.declaringField = null;
          this._packed = null;
          this.comment = _0x188105;
        }
        _0x272266.fromJSON = function (_0x22e018, _0x515c84) {
          return new _0x272266(_0x22e018, _0x515c84.id, _0x515c84.type, _0x515c84.rule, _0x515c84.extend, _0x515c84.options, _0x515c84.comment);
        };
        Object.defineProperty(_0x272266.prototype, "packed", {
          'get': function () {
            if (null === this._packed) {
              this._packed = false !== this.getOption('packed');
            }
            return this._packed;
          }
        });
        _0x272266.prototype.setOption = function (_0x5d0b9d, _0x5afd1e, _0x3d90cf) {
          if ('packed' === _0x5d0b9d) {
            this._packed = null;
          }
          return _0x587150.prototype.setOption.call(this, _0x5d0b9d, _0x5afd1e, _0x3d90cf);
        };
        _0x272266.prototype.toJSON = function (_0x24ea49) {
          var _0x5b9dab = !!_0x24ea49 && Boolean(_0x24ea49.keepComments);
          return _0x2a6f06.toObject(["rule", "optional" !== this.rule && this.rule || undefined, "type", this.type, 'id', this.id, "extend", this.extend, "options", this.options, 'comment', _0x5b9dab ? this.comment : undefined]);
        };
        _0x272266.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === (this.typeDefault = _0x4e3d8e.defaults[this.type])) {
            this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
            if (this.resolvedType instanceof _0x3ab144) {
              this.typeDefault = null;
            } else {
              this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0x0]];
            }
          }
          if (this.options && null != this.options['default']) {
            this.typeDefault = this.options['default'];
            if (this.resolvedType instanceof _0xdc1f05 && 'string' == typeof this.typeDefault) {
              this.typeDefault = this.resolvedType.values[this.typeDefault];
            }
          }
          if (this.options) {
            if (!(true !== this.options.packed && (undefined === this.options.packed || !this.resolvedType || this.resolvedType instanceof _0xdc1f05))) {
              delete this.options.packed;
            }
            if (!Object.keys(this.options).length) {
              this.options = undefined;
            }
          }
          if (this.long) {
            this.typeDefault = _0x2a6f06.Long.fromNumber(this.typeDefault, 'u' === this.type.charAt(0x0));
            if (Object.freeze) {
              Object.freeze(this.typeDefault);
            }
          } else {
            if (this.bytes && 'string' == typeof this.typeDefault) {
              var _0xf7cdd6;
              if (_0x2a6f06.base64.test(this.typeDefault)) {
                _0x2a6f06.base64.decode(this.typeDefault, _0xf7cdd6 = _0x2a6f06.newBuffer(_0x2a6f06.base64.length(this.typeDefault)), 0x0);
              } else {
                _0x2a6f06.utf8.write(this.typeDefault, _0xf7cdd6 = _0x2a6f06.newBuffer(_0x2a6f06.utf8.length(this.typeDefault)), 0x0);
              }
              this.typeDefault = _0xf7cdd6;
            }
          }
          if (this.map) {
            this.defaultValue = _0x2a6f06.emptyObject;
          } else if (this.repeated) {
            this.defaultValue = _0x2a6f06.emptyArray;
          } else {
            this.defaultValue = this.typeDefault;
          }
          if (this.parent instanceof _0x3ab144) {
            this.parent.ctor.prototype[this.name] = this.defaultValue;
          }
          return _0x587150.prototype.resolve.call(this);
        };
        _0x272266.d = function (_0x2111b4, _0x4182e1, _0x2199f6, _0x440796) {
          if ("function" == typeof _0x4182e1) {
            _0x4182e1 = _0x2a6f06.decorateType(_0x4182e1).name;
          } else if (_0x4182e1 && "object" == typeof _0x4182e1) {
            _0x4182e1 = _0x2a6f06.decorateEnum(_0x4182e1).name;
          }
          return function (_0x3acd07, _0x3a6526) {
            _0x2a6f06.decorateType(_0x3acd07.constructor).add(new _0x272266(_0x3a6526, _0x2111b4, _0x4182e1, _0x2199f6, {
              'default': _0x440796
            }));
          };
        };
        _0x272266._configure = function (_0x10d91b) {
          _0x3ab144 = _0x10d91b;
        };
        _0x28a329.exports;
      }, function () {
        return {
          './object': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3cf404.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js', function (_0x24a5d7, _0x17d89d, _0x4ca3cc, _0x24db23, _0x4c1648) {
        _0x4ca3cc.exports = _0x1ac452;
        var _0x5eb41c = _0x17d89d("./object");
        ((_0x1ac452.prototype = Object.create(_0x5eb41c.prototype)).constructor = _0x1ac452).className = 'OneOf';
        var _0x3d815d = _0x17d89d('./field');
        var _0x1bfc57 = _0x17d89d('./util');
        function _0x1ac452(_0x4d8a09, _0x1a8d31, _0x4b8f06, _0x3947e2) {
          if (!Array.isArray(_0x1a8d31)) {
            _0x4b8f06 = _0x1a8d31;
            _0x1a8d31 = undefined;
          }
          _0x5eb41c.call(this, _0x4d8a09, _0x4b8f06);
          if (undefined !== _0x1a8d31 && !Array.isArray(_0x1a8d31)) {
            throw TypeError("fieldNames must be an Array");
          }
          this.oneof = _0x1a8d31 || [];
          this.fieldsArray = [];
          this.comment = _0x3947e2;
        }
        function _0xeb9035(_0x4add11) {
          if (_0x4add11.parent) {
            for (var _0x44bc63 = 0x0; _0x44bc63 < _0x4add11.fieldsArray.length; ++_0x44bc63) {
              if (!_0x4add11.fieldsArray[_0x44bc63].parent) {
                _0x4add11.parent.add(_0x4add11.fieldsArray[_0x44bc63]);
              }
            }
          }
        }
        _0x1ac452.fromJSON = function (_0x2fb260, _0x7b05f8) {
          return new _0x1ac452(_0x2fb260, _0x7b05f8.oneof, _0x7b05f8.options, _0x7b05f8.comment);
        };
        _0x1ac452.prototype.toJSON = function (_0x382fac) {
          var _0x2575d8 = !!_0x382fac && Boolean(_0x382fac.keepComments);
          return _0x1bfc57.toObject(["options", this.options, "oneof", this.oneof, "comment", _0x2575d8 ? this.comment : undefined]);
        };
        _0x1ac452.prototype.add = function (_0x1224df) {
          if (!(_0x1224df instanceof _0x3d815d)) {
            throw TypeError("field must be a Field");
          }
          if (_0x1224df.parent && _0x1224df.parent !== this.parent) {
            _0x1224df.parent.remove(_0x1224df);
          }
          this.oneof.push(_0x1224df.name);
          this.fieldsArray.push(_0x1224df);
          _0x1224df.partOf = this;
          _0xeb9035(this);
          return this;
        };
        _0x1ac452.prototype.remove = function (_0x22ce84) {
          if (!(_0x22ce84 instanceof _0x3d815d)) {
            throw TypeError("field must be a Field");
          }
          var _0x30fec7 = this.fieldsArray.indexOf(_0x22ce84);
          if (_0x30fec7 < 0x0) {
            throw Error(_0x22ce84 + " is not a member of " + this);
          }
          this.fieldsArray.splice(_0x30fec7, 0x1);
          if ((_0x30fec7 = this.oneof.indexOf(_0x22ce84.name)) > -0x1) {
            this.oneof.splice(_0x30fec7, 0x1);
          }
          _0x22ce84.partOf = null;
          return this;
        };
        _0x1ac452.prototype.onAdd = function (_0x5a2109) {
          _0x5eb41c.prototype.onAdd.call(this, _0x5a2109);
          for (var _0x4dfb66 = 0x0; _0x4dfb66 < this.oneof.length; ++_0x4dfb66) {
            var _0x39b906 = _0x5a2109.get(this.oneof[_0x4dfb66]);
            if (_0x39b906 && !_0x39b906.partOf) {
              _0x39b906.partOf = this;
              this.fieldsArray.push(_0x39b906);
            }
          }
          _0xeb9035(this);
        };
        _0x1ac452.prototype.onRemove = function (_0x1ec787) {
          var _0x51e3e0;
          for (var _0x378fc4 = 0x0; _0x378fc4 < this.fieldsArray.length; ++_0x378fc4) {
            if ((_0x51e3e0 = this.fieldsArray[_0x378fc4]).parent) {
              _0x51e3e0.parent.remove(_0x51e3e0);
            }
          }
          _0x5eb41c.prototype.onRemove.call(this, _0x1ec787);
        };
        _0x1ac452.d = function () {
          var _0x17573a = new Array(arguments.length);
          for (var _0x202a1b = 0x0; _0x202a1b < arguments.length;) {
            _0x17573a[_0x202a1b] = arguments[_0x202a1b++];
          }
          return function (_0xb9a4d1, _0x329c36) {
            _0x1bfc57.decorateType(_0xb9a4d1.constructor).add(new _0x1ac452(_0x329c36, _0x17573a));
            Object.defineProperty(_0xb9a4d1, _0x329c36, {
              'get': _0x1bfc57.oneOfGetter(_0x17573a),
              'set': _0x1bfc57.oneOfSetter(_0x17573a)
            });
          };
        };
        _0x4ca3cc.exports;
      }, function () {
        return {
          './object': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './field': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js", function (_0x26232c, _0x5aff9f, _0x5efb7d, _0x44c0e8, _0x3925f9) {
        _0x5efb7d.exports = _0x32191c;
        var _0x44d42a = _0x5aff9f("./object");
        ((_0x32191c.prototype = Object.create(_0x44d42a.prototype)).constructor = _0x32191c).className = "Namespace";
        var _0x17ec23;
        var _0x655d00;
        var _0x42aab6;
        var _0x478610 = _0x5aff9f("./field");
        var _0x1c31d5 = _0x5aff9f("./oneof");
        var _0x2635a2 = _0x5aff9f('./util');
        function _0x519f76(_0x295996, _0x19c475) {
          if (_0x295996 && _0x295996.length) {
            var _0x25fb44 = {};
            for (var _0x3719bd = 0x0; _0x3719bd < _0x295996.length; ++_0x3719bd) {
              _0x25fb44[_0x295996[_0x3719bd].name] = _0x295996[_0x3719bd].toJSON(_0x19c475);
            }
            return _0x25fb44;
          }
        }
        function _0x32191c(_0x2f0d3b, _0x3a9584) {
          _0x44d42a.call(this, _0x2f0d3b, _0x3a9584);
          this.nested = undefined;
          this._nestedArray = null;
        }
        function _0x483a88(_0x24358d) {
          _0x24358d._nestedArray = null;
          return _0x24358d;
        }
        _0x32191c.fromJSON = function (_0x480980, _0x509f53) {
          return new _0x32191c(_0x480980, _0x509f53.options).addJSON(_0x509f53.nested);
        };
        _0x32191c.arrayToJSON = _0x519f76;
        _0x32191c.isReservedId = function (_0x522ced, _0x74bf83) {
          if (_0x522ced) {
            for (var _0x2acd97 = 0x0; _0x2acd97 < _0x522ced.length; ++_0x2acd97) {
              if ("string" != typeof _0x522ced[_0x2acd97] && _0x522ced[_0x2acd97][0x0] <= _0x74bf83 && _0x522ced[_0x2acd97][0x1] > _0x74bf83) {
                return true;
              }
            }
          }
          return false;
        };
        _0x32191c.isReservedName = function (_0x220ccc, _0x33a0f8) {
          if (_0x220ccc) {
            for (var _0x2e87c2 = 0x0; _0x2e87c2 < _0x220ccc.length; ++_0x2e87c2) {
              if (_0x220ccc[_0x2e87c2] === _0x33a0f8) {
                return true;
              }
            }
          }
          return false;
        };
        Object.defineProperty(_0x32191c.prototype, "nestedArray", {
          'get': function () {
            return this._nestedArray || (this._nestedArray = _0x2635a2.toArray(this.nested));
          }
        });
        _0x32191c.prototype.toJSON = function (_0x371126) {
          return _0x2635a2.toObject(["options", this.options, "nested", _0x519f76(this.nestedArray, _0x371126)]);
        };
        _0x32191c.prototype.addJSON = function (_0xb08dbe) {
          if (_0xb08dbe) {
            var _0x205c64;
            var _0x5eb673 = Object.keys(_0xb08dbe);
            for (var _0x3190b2 = 0x0; _0x3190b2 < _0x5eb673.length; ++_0x3190b2) {
              _0x205c64 = _0xb08dbe[_0x5eb673[_0x3190b2]];
              this.add((undefined !== _0x205c64.fields ? _0x17ec23.fromJSON : undefined !== _0x205c64.values ? _0x42aab6.fromJSON : undefined !== _0x205c64.methods ? _0x655d00.fromJSON : undefined !== _0x205c64.id ? _0x478610.fromJSON : _0x32191c.fromJSON)(_0x5eb673[_0x3190b2], _0x205c64));
            }
          }
          return this;
        };
        _0x32191c.prototype.get = function (_0x181ed6) {
          return this.nested && this.nested[_0x181ed6] || null;
        };
        _0x32191c.prototype.getEnum = function (_0x40df1a) {
          if (this.nested && this.nested[_0x40df1a] instanceof _0x42aab6) {
            return this.nested[_0x40df1a].values;
          }
          throw Error("no such enum: " + _0x40df1a);
        };
        _0x32191c.prototype.add = function (_0x40a977) {
          if (!(_0x40a977 instanceof _0x478610 && undefined !== _0x40a977.extend || _0x40a977 instanceof _0x17ec23 || _0x40a977 instanceof _0x42aab6 || _0x40a977 instanceof _0x655d00 || _0x40a977 instanceof _0x32191c || _0x40a977 instanceof _0x1c31d5)) {
            throw TypeError("object must be a valid nested object");
          }
          if (this.nested) {
            var _0x213364 = this.get(_0x40a977.name);
            if (_0x213364) {
              if (!(_0x213364 instanceof _0x32191c && _0x40a977 instanceof _0x32191c) || _0x213364 instanceof _0x17ec23 || _0x213364 instanceof _0x655d00) {
                throw Error("duplicate name '" + _0x40a977.name + "' in " + this);
              }
              var _0x400391 = _0x213364.nestedArray;
              for (var _0x904c83 = 0x0; _0x904c83 < _0x400391.length; ++_0x904c83) {
                _0x40a977.add(_0x400391[_0x904c83]);
              }
              this.remove(_0x213364);
              if (!this.nested) {
                this.nested = {};
              }
              _0x40a977.setOptions(_0x213364.options, true);
            }
          } else {
            this.nested = {};
          }
          this.nested[_0x40a977.name] = _0x40a977;
          _0x40a977.onAdd(this);
          return _0x483a88(this);
        };
        _0x32191c.prototype.remove = function (_0x1759c3) {
          if (!(_0x1759c3 instanceof _0x44d42a)) {
            throw TypeError("object must be a ReflectionObject");
          }
          if (_0x1759c3.parent !== this) {
            throw Error(_0x1759c3 + " is not a member of " + this);
          }
          delete this.nested[_0x1759c3.name];
          if (!Object.keys(this.nested).length) {
            this.nested = undefined;
          }
          _0x1759c3.onRemove(this);
          return _0x483a88(this);
        };
        _0x32191c.prototype.define = function (_0x128867, _0x8524fe) {
          if (_0x2635a2.isString(_0x128867)) {
            _0x128867 = _0x128867.split('.');
          } else {
            if (!Array.isArray(_0x128867)) {
              throw TypeError("illegal path");
            }
          }
          if (_0x128867 && _0x128867.length && '' === _0x128867[0x0]) {
            throw Error("path must be relative");
          }
          for (var _0x2e517b = this; _0x128867.length > 0x0;) {
            var _0x4d96ea = _0x128867.shift();
            if (_0x2e517b.nested && _0x2e517b.nested[_0x4d96ea]) {
              if (!((_0x2e517b = _0x2e517b.nested[_0x4d96ea]) instanceof _0x32191c)) {
                throw Error("path conflicts with non-namespace objects");
              }
            } else {
              _0x2e517b.add(_0x2e517b = new _0x32191c(_0x4d96ea));
            }
          }
          if (_0x8524fe) {
            _0x2e517b.addJSON(_0x8524fe);
          }
          return _0x2e517b;
        };
        _0x32191c.prototype.resolveAll = function () {
          var _0x1e789b = this.nestedArray;
          for (var _0x5af003 = 0x0; _0x5af003 < _0x1e789b.length;) {
            if (_0x1e789b[_0x5af003] instanceof _0x32191c) {
              _0x1e789b[_0x5af003++].resolveAll();
            } else {
              _0x1e789b[_0x5af003++].resolve();
            }
          }
          return this.resolve();
        };
        _0x32191c.prototype.lookup = function (_0x5f26c6, _0x5437e1, _0x40d64f) {
          if ("boolean" == typeof _0x5437e1) {
            _0x40d64f = _0x5437e1;
            _0x5437e1 = undefined;
          } else if (_0x5437e1 && !Array.isArray(_0x5437e1)) {
            _0x5437e1 = [_0x5437e1];
          }
          if (_0x2635a2.isString(_0x5f26c6) && _0x5f26c6.length) {
            if ('.' === _0x5f26c6) {
              return this.root;
            }
            _0x5f26c6 = _0x5f26c6.split('.');
          } else {
            if (!_0x5f26c6.length) {
              return this;
            }
          }
          if ('' === _0x5f26c6[0x0]) {
            return this.root.lookup(_0x5f26c6.slice(0x1), _0x5437e1);
          }
          var _0x33b5b7 = this.get(_0x5f26c6[0x0]);
          if (_0x33b5b7) {
            if (0x1 === _0x5f26c6.length) {
              if (!_0x5437e1 || _0x5437e1.indexOf(_0x33b5b7.constructor) > -0x1) {
                return _0x33b5b7;
              }
            } else {
              if (_0x33b5b7 instanceof _0x32191c && (_0x33b5b7 = _0x33b5b7.lookup(_0x5f26c6.slice(0x1), _0x5437e1, true))) {
                return _0x33b5b7;
              }
            }
          } else {
            for (var _0x3283ce = 0x0; _0x3283ce < this.nestedArray.length; ++_0x3283ce) {
              if (this._nestedArray[_0x3283ce] instanceof _0x32191c && (_0x33b5b7 = this._nestedArray[_0x3283ce].lookup(_0x5f26c6, _0x5437e1, true))) {
                return _0x33b5b7;
              }
            }
          }
          return null === this.parent || _0x40d64f ? null : this.parent.lookup(_0x5f26c6, _0x5437e1);
        };
        _0x32191c.prototype.lookupType = function (_0x5154c9) {
          var _0x14e974 = this.lookup(_0x5154c9, [_0x17ec23]);
          if (!_0x14e974) {
            throw Error("no such type: " + _0x5154c9);
          }
          return _0x14e974;
        };
        _0x32191c.prototype.lookupEnum = function (_0x102a05) {
          var _0x2b696b = this.lookup(_0x102a05, [_0x42aab6]);
          if (!_0x2b696b) {
            throw Error("no such Enum '" + _0x102a05 + "' in " + this);
          }
          return _0x2b696b;
        };
        _0x32191c.prototype.lookupTypeOrEnum = function (_0x51c0e0) {
          var _0x48c7c9 = this.lookup(_0x51c0e0, [_0x17ec23, _0x42aab6]);
          if (!_0x48c7c9) {
            throw Error("no such Type or Enum '" + _0x51c0e0 + "' in " + this);
          }
          return _0x48c7c9;
        };
        _0x32191c.prototype.lookupService = function (_0x20a4ac) {
          var _0x1b49d1 = this.lookup(_0x20a4ac, [_0x655d00]);
          if (!_0x1b49d1) {
            throw Error("no such Service '" + _0x20a4ac + "' in " + this);
          }
          return _0x1b49d1;
        };
        _0x32191c._configure = function (_0x546dd4, _0x39d590, _0x3d73a8) {
          _0x17ec23 = _0x546dd4;
          _0x655d00 = _0x39d590;
          _0x42aab6 = _0x3d73a8;
        };
        _0x5efb7d.exports;
      }, function () {
        return {
          './object': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './field': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './oneof': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js',
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js", function (_0x3e1af4, _0x4ade9a, _0x3b4df8, _0x3f05e8, _0x397ff4) {
        _0x3b4df8.exports = _0x37c5e2;
        var _0x179146 = _0x4ade9a("./field");
        ((_0x37c5e2.prototype = Object.create(_0x179146.prototype)).constructor = _0x37c5e2).className = "MapField";
        var _0x53ff96 = _0x4ade9a("./types");
        var _0x4dc74a = _0x4ade9a("./util");
        function _0x37c5e2(_0x5a7e03, _0x380d9f, _0x47566a, _0x14e843, _0x48af86, _0x2ecb7e) {
          _0x179146.call(this, _0x5a7e03, _0x380d9f, _0x14e843, undefined, undefined, _0x48af86, _0x2ecb7e);
          if (!_0x4dc74a.isString(_0x47566a)) {
            throw TypeError("keyType must be a string");
          }
          this.keyType = _0x47566a;
          this.resolvedKeyType = null;
          this.map = true;
        }
        _0x37c5e2.fromJSON = function (_0x2f2663, _0x38d8f4) {
          return new _0x37c5e2(_0x2f2663, _0x38d8f4.id, _0x38d8f4.keyType, _0x38d8f4.type, _0x38d8f4.options, _0x38d8f4.comment);
        };
        _0x37c5e2.prototype.toJSON = function (_0xbfa909) {
          var _0x3d0391 = !!_0xbfa909 && Boolean(_0xbfa909.keepComments);
          return _0x4dc74a.toObject(["keyType", this.keyType, 'type', this.type, 'id', this.id, 'extend', this.extend, "options", this.options, "comment", _0x3d0391 ? this.comment : undefined]);
        };
        _0x37c5e2.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === _0x53ff96.mapKey[this.keyType]) {
            throw Error("invalid key type: " + this.keyType);
          }
          return _0x179146.prototype.resolve.call(this);
        };
        _0x37c5e2.d = function (_0x1369ba, _0x4a1234, _0x3b923e) {
          if ('function' == typeof _0x3b923e) {
            _0x3b923e = _0x4dc74a.decorateType(_0x3b923e).name;
          } else if (_0x3b923e && 'object' == typeof _0x3b923e) {
            _0x3b923e = _0x4dc74a.decorateEnum(_0x3b923e).name;
          }
          return function (_0x251762, _0x154a3d) {
            _0x4dc74a.decorateType(_0x251762.constructor).add(new _0x37c5e2(_0x154a3d, _0x1369ba, _0x4a1234, _0x3b923e));
          };
        };
        _0x3b4df8.exports;
      }, function () {
        return {
          './field': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './types': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3cf404.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/method.js', function (_0x55b36a, _0x35e4ac, _0x75638c, _0x929380, _0x2c4c4d) {
        _0x75638c.exports = _0x40900b;
        var _0x54ea26 = _0x35e4ac("./object");
        ((_0x40900b.prototype = Object.create(_0x54ea26.prototype)).constructor = _0x40900b).className = 'Method';
        var _0x46e851 = _0x35e4ac("./util");
        function _0x40900b(_0x4a2084, _0x42fd95, _0x52acee, _0xe1a5aa, _0x52262c, _0x4df6c8, _0x2356c9, _0xfec9a9, _0x6b76a6) {
          if (_0x46e851.isObject(_0x52262c)) {
            _0x2356c9 = _0x52262c;
            _0x52262c = _0x4df6c8 = undefined;
          } else if (_0x46e851.isObject(_0x4df6c8)) {
            _0x2356c9 = _0x4df6c8;
            _0x4df6c8 = undefined;
          }
          if (undefined !== _0x42fd95 && !_0x46e851.isString(_0x42fd95)) {
            throw TypeError("type must be a string");
          }
          if (!_0x46e851.isString(_0x52acee)) {
            throw TypeError("requestType must be a string");
          }
          if (!_0x46e851.isString(_0xe1a5aa)) {
            throw TypeError("responseType must be a string");
          }
          _0x54ea26.call(this, _0x4a2084, _0x2356c9);
          this.type = _0x42fd95 || "rpc";
          this.requestType = _0x52acee;
          this.requestStream = !!_0x52262c || undefined;
          this.responseType = _0xe1a5aa;
          this.responseStream = !!_0x4df6c8 || undefined;
          this.resolvedRequestType = null;
          this.resolvedResponseType = null;
          this.comment = _0xfec9a9;
          this.parsedOptions = _0x6b76a6;
        }
        _0x40900b.fromJSON = function (_0x163830, _0x2788f4) {
          return new _0x40900b(_0x163830, _0x2788f4.type, _0x2788f4.requestType, _0x2788f4.responseType, _0x2788f4.requestStream, _0x2788f4.responseStream, _0x2788f4.options, _0x2788f4.comment, _0x2788f4.parsedOptions);
        };
        _0x40900b.prototype.toJSON = function (_0x864a2b) {
          var _0x48e521 = !!_0x864a2b && Boolean(_0x864a2b.keepComments);
          return _0x46e851.toObject(["type", "rpc" !== this.type && this.type || undefined, "requestType", this.requestType, 'requestStream', this.requestStream, 'responseType', this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", _0x48e521 ? this.comment : undefined, "parsedOptions", this.parsedOptions]);
        };
        _0x40900b.prototype.resolve = function () {
          return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), _0x54ea26.prototype.resolve.call(this));
        };
        _0x75638c.exports;
      }, function () {
        return {
          './object': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3cf404.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/service.js', function (_0x44e133, _0x498707, _0x1527e1, _0x522c44, _0x182cb0) {
        _0x1527e1.exports = _0x469950;
        var _0x435b8b = _0x498707("./namespace");
        ((_0x469950.prototype = Object.create(_0x435b8b.prototype)).constructor = _0x469950).className = 'Service';
        var _0x481800 = _0x498707("./method");
        var _0x303beb = _0x498707("./util");
        var _0x39b11c = _0x498707("./rpc");
        function _0x469950(_0x4d3a9c, _0x3e5a46) {
          _0x435b8b.call(this, _0x4d3a9c, _0x3e5a46);
          this.methods = {};
          this._methodsArray = null;
        }
        function _0x3c5881(_0x4ee63a) {
          _0x4ee63a._methodsArray = null;
          return _0x4ee63a;
        }
        _0x469950.fromJSON = function (_0x4cb420, _0x420c4d) {
          var _0x10bacd = new _0x469950(_0x4cb420, _0x420c4d.options);
          if (_0x420c4d.methods) {
            var _0x4e7676 = Object.keys(_0x420c4d.methods);
            for (var _0x25c415 = 0x0; _0x25c415 < _0x4e7676.length; ++_0x25c415) {
              _0x10bacd.add(_0x481800.fromJSON(_0x4e7676[_0x25c415], _0x420c4d.methods[_0x4e7676[_0x25c415]]));
            }
          }
          if (_0x420c4d.nested) {
            _0x10bacd.addJSON(_0x420c4d.nested);
          }
          _0x10bacd.comment = _0x420c4d.comment;
          return _0x10bacd;
        };
        _0x469950.prototype.toJSON = function (_0x325544) {
          var _0x3e75be = _0x435b8b.prototype.toJSON.call(this, _0x325544);
          var _0x6f3e36 = !!_0x325544 && Boolean(_0x325544.keepComments);
          return _0x303beb.toObject(['options', _0x3e75be && _0x3e75be.options || undefined, "methods", _0x435b8b.arrayToJSON(this.methodsArray, _0x325544) || {}, "nested", _0x3e75be && _0x3e75be.nested || undefined, "comment", _0x6f3e36 ? this.comment : undefined]);
        };
        Object.defineProperty(_0x469950.prototype, 'methodsArray', {
          'get': function () {
            return this._methodsArray || (this._methodsArray = _0x303beb.toArray(this.methods));
          }
        });
        _0x469950.prototype.get = function (_0x128626) {
          return this.methods[_0x128626] || _0x435b8b.prototype.get.call(this, _0x128626);
        };
        _0x469950.prototype.resolveAll = function () {
          var _0x512dec = this.methodsArray;
          for (var _0x379d5c = 0x0; _0x379d5c < _0x512dec.length; ++_0x379d5c) {
            _0x512dec[_0x379d5c].resolve();
          }
          return _0x435b8b.prototype.resolve.call(this);
        };
        _0x469950.prototype.add = function (_0x397044) {
          if (this.get(_0x397044.name)) {
            throw Error("duplicate name '" + _0x397044.name + "' in " + this);
          }
          return _0x397044 instanceof _0x481800 ? (this.methods[_0x397044.name] = _0x397044, _0x397044.parent = this, _0x3c5881(this)) : _0x435b8b.prototype.add.call(this, _0x397044);
        };
        _0x469950.prototype.remove = function (_0x4cf66c) {
          if (_0x4cf66c instanceof _0x481800) {
            if (this.methods[_0x4cf66c.name] !== _0x4cf66c) {
              throw Error(_0x4cf66c + " is not a member of " + this);
            }
            delete this.methods[_0x4cf66c.name];
            _0x4cf66c.parent = null;
            return _0x3c5881(this);
          }
          return _0x435b8b.prototype.remove.call(this, _0x4cf66c);
        };
        _0x469950.prototype.create = function (_0x3462dc, _0x2de4d0, _0x428c37) {
          var _0x4ac700;
          var _0x38bc55 = new _0x39b11c.Service(_0x3462dc, _0x2de4d0, _0x428c37);
          for (var _0x37b10e = 0x0; _0x37b10e < this.methodsArray.length; ++_0x37b10e) {
            var _0x2d3ccc = _0x303beb.lcFirst((_0x4ac700 = this._methodsArray[_0x37b10e]).resolve().name).replace(/[^$\w_]/g, '');
            _0x38bc55[_0x2d3ccc] = _0x303beb.codegen(['r', 'c'], _0x303beb.isReserved(_0x2d3ccc) ? _0x2d3ccc + '_' : _0x2d3ccc)("return this.rpcCall(m,q,s,r,c)")({
              'm': _0x4ac700,
              'q': _0x4ac700.resolvedRequestType.ctor,
              's': _0x4ac700.resolvedResponseType.ctor
            });
          }
          return _0x38bc55;
        };
        _0x1527e1.exports;
      }, function () {
        return {
          './namespace': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './method': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/method.js',
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './rpc': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js"
        };
      });
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/message.js", function (_0x5c1216, _0x17f821, _0x1172a4, _0x532944, _0x8b3349) {
        _0x1172a4.exports = _0x4127f7;
        var _0x2c4f79 = _0x17f821('./util/minimal');
        function _0x4127f7(_0x4b4fe2) {
          if (_0x4b4fe2) {
            var _0x23e4d8 = Object.keys(_0x4b4fe2);
            for (var _0x296cab = 0x0; _0x296cab < _0x23e4d8.length; ++_0x296cab) {
              this[_0x23e4d8[_0x296cab]] = _0x4b4fe2[_0x23e4d8[_0x296cab]];
            }
          }
        }
        _0x4127f7.create = function (_0x358e98) {
          return this.$type.create(_0x358e98);
        };
        _0x4127f7.encode = function (_0x22f5f8, _0x5725e9) {
          return this.$type.encode(_0x22f5f8, _0x5725e9);
        };
        _0x4127f7.encodeDelimited = function (_0x5a57ff, _0xc4e43d) {
          return this.$type.encodeDelimited(_0x5a57ff, _0xc4e43d);
        };
        _0x4127f7.decode = function (_0x28ad61) {
          return this.$type.decode(_0x28ad61);
        };
        _0x4127f7.decodeDelimited = function (_0x179828) {
          return this.$type.decodeDelimited(_0x179828);
        };
        _0x4127f7.verify = function (_0x4427a6) {
          return this.$type.verify(_0x4427a6);
        };
        _0x4127f7.fromObject = function (_0x34cfcd) {
          return this.$type.fromObject(_0x34cfcd);
        };
        _0x4127f7.toObject = function (_0x5055a0, _0x4cdd08) {
          return this.$type.toObject(_0x5055a0, _0x4cdd08);
        };
        _0x4127f7.prototype.toJSON = function () {
          return this.$type.toObject(this, _0x2c4f79.toJSONOptions);
        };
        _0x1172a4.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js", function (_0x2fd848, _0x3640f8, _0x2660a6, _0x1fee88, _0xbf2854) {
        _0x2660a6.exports = function (_0x190049) {
          var _0x387749 = _0x4ba4f9.codegen(['r', 'l'], _0x190049.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (_0x190049.fieldsArray.filter(function (_0x3811dc) {
            return _0x3811dc.map;
          }).length ? ",k,value" : ''))("while(r.pos<c){")("var t=r.uint32()");
          if (_0x190049.group) {
            _0x387749("if((t&7)===4)")("break");
          }
          _0x387749("switch(t>>>3){");
          for (var _0x410a90 = 0x0; _0x410a90 < _0x190049.fieldsArray.length; ++_0x410a90) {
            var _0x2bd294 = _0x190049._fieldsArray[_0x410a90].resolve();
            var _0x364708 = _0x2bd294.resolvedType instanceof _0x4ef230 ? 'int32' : _0x2bd294.type;
            var _0x4a2337 = 'm' + _0x4ba4f9.safeProp(_0x2bd294.name);
            _0x387749("case %i:", _0x2bd294.id);
            if (_0x2bd294.map) {
              _0x387749('if(%s===util.emptyObject)', _0x4a2337)("%s={}", _0x4a2337)("var c2 = r.uint32()+r.pos");
              if (undefined !== _0x29595d.defaults[_0x2bd294.keyType]) {
                _0x387749('k=%j', _0x29595d.defaults[_0x2bd294.keyType]);
              } else {
                _0x387749("k=null");
              }
              if (undefined !== _0x29595d.defaults[_0x364708]) {
                _0x387749("value=%j", _0x29595d.defaults[_0x364708]);
              } else {
                _0x387749('value=null');
              }
              _0x387749("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", _0x2bd294.keyType)("case 2:");
              if (undefined === _0x29595d.basic[_0x364708]) {
                _0x387749("value=types[%i].decode(r,r.uint32())", _0x410a90);
              } else {
                _0x387749("value=r.%s()", _0x364708);
              }
              _0x387749("break")("default:")("r.skipType(tag2&7)")("break")('}')('}');
              if (undefined !== _0x29595d.long[_0x2bd294.keyType]) {
                _0x387749("%s[typeof k===\"object\"?util.longToHash(k):k]=value", _0x4a2337);
              } else {
                _0x387749("%s[k]=value", _0x4a2337);
              }
            } else if (_0x2bd294.repeated) {
              _0x387749("if(!(%s&&%s.length))", _0x4a2337, _0x4a2337)("%s=[]", _0x4a2337);
              if (undefined !== _0x29595d.packed[_0x364708]) {
                _0x387749("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", _0x4a2337, _0x364708)('}else');
              }
              if (undefined === _0x29595d.basic[_0x364708]) {
                _0x387749(_0x2bd294.resolvedType.group ? '%s.push(types[%i].decode(r))' : "%s.push(types[%i].decode(r,r.uint32()))", _0x4a2337, _0x410a90);
              } else {
                _0x387749("%s.push(r.%s())", _0x4a2337, _0x364708);
              }
            } else if (undefined === _0x29595d.basic[_0x364708]) {
              _0x387749(_0x2bd294.resolvedType.group ? "%s=types[%i].decode(r)" : '%s=types[%i].decode(r,r.uint32())', _0x4a2337, _0x410a90);
            } else {
              _0x387749("%s=r.%s()", _0x4a2337, _0x364708);
            }
            _0x387749('break');
          }
          _0x387749("default:")("r.skipType(t&7)")("break")('}')('}');
          for (_0x410a90 = 0x0; _0x410a90 < _0x190049._fieldsArray.length; ++_0x410a90) {
            var _0x3eff24 = _0x190049._fieldsArray[_0x410a90];
            if (_0x3eff24.required) {
              _0x387749("if(!m.hasOwnProperty(%j))", _0x3eff24.name)("throw util.ProtocolError(%j,{instance:m})", "missing required '" + _0x3eff24.name + "'");
            }
          }
          return _0x387749("return m");
        };
        var _0x4ef230 = _0x3640f8("./enum");
        var _0x29595d = _0x3640f8('./types');
        var _0x4ba4f9 = _0x3640f8("./util");
        _0x2660a6.exports;
      }, function () {
        return {
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js", function (_0x2bf173, _0x3d050b, _0x5c5150, _0x51dddf, _0x2e6b48) {
        _0x5c5150.exports = function (_0x80ee0f) {
          var _0x86b091 = _0xc126c.codegen(['m'], _0x80ee0f.name + "$verify")("if(typeof m!==\"object\"||m===null)")('return%j', "object expected");
          var _0x8e863d = _0x80ee0f.oneofsArray;
          var _0x38d8be = {};
          if (_0x8e863d.length) {
            _0x86b091("var p={}");
          }
          for (var _0x3916ee = 0x0; _0x3916ee < _0x80ee0f.fieldsArray.length; ++_0x3916ee) {
            var _0x4bacc2 = _0x80ee0f._fieldsArray[_0x3916ee].resolve();
            var _0xd06cc1 = 'm' + _0xc126c.safeProp(_0x4bacc2.name);
            if (_0x4bacc2.optional) {
              _0x86b091('if(%s!=null&&m.hasOwnProperty(%j)){', _0xd06cc1, _0x4bacc2.name);
            }
            if (_0x4bacc2.map) {
              _0x86b091("if(!util.isObject(%s))", _0xd06cc1)("return%j", _0x4bacc2.name + ": " + _0x1912(0x315) + (_0x4bacc2.repeated && "array" !== _0x1912(0x315) ? '[]' : _0x4bacc2.map && false ? "{k:" + _0x4bacc2.keyType + '}' : '') + " expected")("var k=Object.keys(%s)", _0xd06cc1)("for(var i=0;i<k.length;++i){");
              _0x3a1798(_0x86b091, _0x4bacc2, "k[i]");
              _0x2ce4b0(_0x86b091, _0x4bacc2, _0x3916ee, _0xd06cc1 + '[k[i]]')('}');
            } else {
              if (_0x4bacc2.repeated) {
                _0x86b091("if(!Array.isArray(%s))", _0xd06cc1)("return%j", _0x4bacc2.name + ": " + _0x1912(0xce5) + (_0x4bacc2.repeated && "array" !== _0x1912(0xce5) ? '[]' : _0x4bacc2.map && true ? "{k:" + _0x4bacc2.keyType + '}' : '') + " expected")("for(var i=0;i<%s.length;++i){", _0xd06cc1);
                _0x2ce4b0(_0x86b091, _0x4bacc2, _0x3916ee, _0xd06cc1 + "[i]")('}');
              } else {
                if (_0x4bacc2.partOf) {
                  var _0x9ced6b = _0xc126c.safeProp(_0x4bacc2.partOf.name);
                  if (0x1 === _0x38d8be[_0x4bacc2.partOf.name]) {
                    _0x86b091("if(p%s===1)", _0x9ced6b)('return%j', _0x4bacc2.partOf.name + ": multiple values");
                  }
                  _0x38d8be[_0x4bacc2.partOf.name] = 0x1;
                  _0x86b091("p%s=1", _0x9ced6b);
                }
                _0x2ce4b0(_0x86b091, _0x4bacc2, _0x3916ee, _0xd06cc1);
              }
            }
            if (_0x4bacc2.optional) {
              _0x86b091('}');
            }
          }
          return _0x86b091("return null");
        };
        var _0xdef34c = _0x3d050b("./enum");
        var _0xc126c = _0x3d050b("./util");
        function _0x2ce4b0(_0x41c9a3, _0x11fc97, _0x4e28dc, _0x597386) {
          if (_0x11fc97.resolvedType) {
            if (_0x11fc97.resolvedType instanceof _0xdef34c) {
              _0x41c9a3('switch(%s){', _0x597386)('default:')('return%j', _0x11fc97.name + ": " + _0x1912(0x588) + (_0x11fc97.repeated && "array" !== _0x1912(0x588) ? '[]' : _0x11fc97.map && true ? "{k:" + _0x11fc97.keyType + '}' : '') + " expected");
              var _0x25655f = Object.keys(_0x11fc97.resolvedType.values);
              for (var _0x372410 = 0x0; _0x372410 < _0x25655f.length; ++_0x372410) {
                _0x41c9a3("case %i:", _0x11fc97.resolvedType.values[_0x25655f[_0x372410]]);
              }
              _0x41c9a3('break')('}');
            } else {
              _0x41c9a3('{')("var e=types[%i].verify(%s);", _0x4e28dc, _0x597386)("if(e)")("return%j+e", _0x11fc97.name + '.')('}');
            }
          } else {
            switch (_0x11fc97.type) {
              case "int32":
              case "uint32":
              case "sint32":
              case "fixed32":
              case "sfixed32":
                _0x41c9a3("if(!util.isInteger(%s))", _0x597386)("return%j", _0x11fc97.name + ": " + _0x1912(0xb7b) + (_0x11fc97.repeated && "array" !== _0x1912(0xb7b) ? '[]' : _0x11fc97.map && true ? "{k:" + _0x11fc97.keyType + '}' : '') + " expected");
                break;
              case "int64":
              case "uint64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                _0x41c9a3("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", _0x597386, _0x597386, _0x597386, _0x597386)('return%j', _0x11fc97.name + ": " + 'integer|Long' + (_0x11fc97.repeated && true ? '[]' : _0x11fc97.map && true ? "{k:" + _0x11fc97.keyType + '}' : '') + " expected");
                break;
              case "float":
              case "double":
                _0x41c9a3("if(typeof %s!==\"number\")", _0x597386)("return%j", _0x11fc97.name + ": " + _0x1912(0x9f5) + (_0x11fc97.repeated && "array" !== _0x1912(0x9f5) ? '[]' : _0x11fc97.map && true ? "{k:" + _0x11fc97.keyType + '}' : '') + " expected");
                break;
              case "bool":
                _0x41c9a3("if(typeof %s!==\"boolean\")", _0x597386)("return%j", _0x11fc97.name + ": " + _0x1912(0x45e) + (_0x11fc97.repeated && "array" !== _0x1912(0x45e) ? '[]' : _0x11fc97.map && true ? "{k:" + _0x11fc97.keyType + '}' : '') + " expected");
                break;
              case "string":
                _0x41c9a3("if(!util.isString(%s))", _0x597386)("return%j", _0x11fc97.name + ": " + _0x1912(0x654) + (_0x11fc97.repeated && "array" !== _0x1912(0x654) ? '[]' : _0x11fc97.map && true ? "{k:" + _0x11fc97.keyType + '}' : '') + " expected");
                break;
              case "bytes":
                _0x41c9a3("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", _0x597386, _0x597386, _0x597386)('return%j', _0x11fc97.name + ": " + _0x1912(0x6e1) + (_0x11fc97.repeated && "array" !== _0x1912(0x6e1) ? '[]' : _0x11fc97.map && true ? "{k:" + _0x11fc97.keyType + '}' : '') + " expected");
            }
          }
          return _0x41c9a3;
        }
        function _0x3a1798(_0x29a6c0, _0x3a16ef, _0x2bf7c0) {
          switch (_0x3a16ef.keyType) {
            case 'int32':
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
              _0x29a6c0('if(!util.key32Re.test(%s))', _0x2bf7c0)('return%j', _0x3a16ef.name + ": " + "integer key" + (_0x3a16ef.repeated && true ? '[]' : _0x3a16ef.map && true ? "{k:" + _0x3a16ef.keyType + '}' : '') + " expected");
              break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
              _0x29a6c0("if(!util.key64Re.test(%s))", _0x2bf7c0)("return%j", _0x3a16ef.name + ": " + _0x1912(0xac4) + (_0x3a16ef.repeated && "array" !== _0x1912(0xac4) ? '[]' : _0x3a16ef.map && true ? "{k:" + _0x3a16ef.keyType + '}' : '') + " expected");
              break;
            case "bool":
              _0x29a6c0('if(!util.key2Re.test(%s))', _0x2bf7c0)("return%j", _0x3a16ef.name + ": " + _0x1912(0xd16) + (_0x3a16ef.repeated && "array" !== _0x1912(0xd16) ? '[]' : _0x3a16ef.map && true ? "{k:" + _0x3a16ef.keyType + '}' : '') + " expected");
          }
          return _0x29a6c0;
        }
        _0x5c5150.exports;
      }, function () {
        return {
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/converter.js", function (_0x74c920, _0x3831a0, _0x704b2f, _0xf8e086, _0x2b42c3) {
        var _0x41bc44 = _0x3831a0("./enum");
        var _0x3229b2 = _0x3831a0("./util");
        function _0x48c415(_0xeb0815, _0x545e40, _0x210a10, _0x338b9f) {
          if (_0x545e40.resolvedType) {
            if (_0x545e40.resolvedType instanceof _0x41bc44) {
              _0xeb0815("switch(d%s){", _0x338b9f);
              var _0x2a5907 = _0x545e40.resolvedType.values;
              var _0x2cd140 = Object.keys(_0x2a5907);
              for (var _0x44dcce = 0x0; _0x44dcce < _0x2cd140.length; ++_0x44dcce) {
                if (_0x545e40.repeated && _0x2a5907[_0x2cd140[_0x44dcce]] === _0x545e40.typeDefault) {
                  _0xeb0815("default:");
                }
                _0xeb0815("case%j:", _0x2cd140[_0x44dcce])("case %i:", _0x2a5907[_0x2cd140[_0x44dcce]])("m%s=%j", _0x338b9f, _0x2a5907[_0x2cd140[_0x44dcce]])("break");
              }
              _0xeb0815('}');
            } else {
              _0xeb0815("if(typeof d%s!==\"object\")", _0x338b9f)("throw TypeError(%j)", _0x545e40.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", _0x338b9f, _0x210a10, _0x338b9f);
            }
          } else {
            var _0x2d0988 = false;
            switch (_0x545e40.type) {
              case 'double':
              case "float":
                _0xeb0815("m%s=Number(d%s)", _0x338b9f, _0x338b9f);
                break;
              case "uint32":
              case "fixed32":
                _0xeb0815('m%s=d%s>>>0', _0x338b9f, _0x338b9f);
                break;
              case "int32":
              case "sint32":
              case "sfixed32":
                _0xeb0815("m%s=d%s|0", _0x338b9f, _0x338b9f);
                break;
              case "uint64":
                _0x2d0988 = true;
              case "int64":
              case 'sint64':
              case "fixed64":
              case "sfixed64":
                _0xeb0815("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", _0x338b9f, _0x338b9f, _0x2d0988)("else if(typeof d%s===\"string\")", _0x338b9f)("m%s=parseInt(d%s,10)", _0x338b9f, _0x338b9f)("else if(typeof d%s===\"number\")", _0x338b9f)('m%s=d%s', _0x338b9f, _0x338b9f)("else if(typeof d%s===\"object\")", _0x338b9f)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", _0x338b9f, _0x338b9f, _0x338b9f, _0x2d0988 ? 'true' : '');
                break;
              case "bytes":
                _0xeb0815("if(typeof d%s===\"string\")", _0x338b9f)('util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)', _0x338b9f, _0x338b9f, _0x338b9f)("else if(d%s.length)", _0x338b9f)("m%s=d%s", _0x338b9f, _0x338b9f);
                break;
              case "string":
                _0xeb0815('m%s=String(d%s)', _0x338b9f, _0x338b9f);
                break;
              case 'bool':
                _0xeb0815("m%s=Boolean(d%s)", _0x338b9f, _0x338b9f);
            }
          }
          return _0xeb0815;
        }
        function _0xc82ba0(_0x11ce0d, _0x4d5c94, _0x61bdf0, _0x4579a5) {
          if (_0x4d5c94.resolvedType) {
            if (_0x4d5c94.resolvedType instanceof _0x41bc44) {
              _0x11ce0d('d%s=o.enums===String?types[%i].values[m%s]:m%s', _0x4579a5, _0x61bdf0, _0x4579a5, _0x4579a5);
            } else {
              _0x11ce0d("d%s=types[%i].toObject(m%s,o)", _0x4579a5, _0x61bdf0, _0x4579a5);
            }
          } else {
            var _0x3e3ddd = false;
            switch (_0x4d5c94.type) {
              case 'double':
              case "float":
                _0x11ce0d("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", _0x4579a5, _0x4579a5, _0x4579a5, _0x4579a5);
                break;
              case "uint64":
                _0x3e3ddd = true;
              case 'int64':
              case "sint64":
              case "fixed64":
              case "sfixed64":
                _0x11ce0d("if(typeof m%s===\"number\")", _0x4579a5)("d%s=o.longs===String?String(m%s):m%s", _0x4579a5, _0x4579a5, _0x4579a5)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", _0x4579a5, _0x4579a5, _0x4579a5, _0x4579a5, _0x3e3ddd ? "true" : '', _0x4579a5);
                break;
              case "bytes":
                _0x11ce0d('d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s', _0x4579a5, _0x4579a5, _0x4579a5, _0x4579a5, _0x4579a5);
                break;
              default:
                _0x11ce0d("d%s=m%s", _0x4579a5, _0x4579a5);
            }
          }
          return _0x11ce0d;
        }
        _0x74c920.fromObject = function (_0x1cbe28) {
          var _0x4bd0db = _0x1cbe28.fieldsArray;
          var _0x12634b = _0x3229b2.codegen(['d'], _0x1cbe28.name + '$fromObject')("if(d instanceof this.ctor)")("return d");
          if (!_0x4bd0db.length) {
            return _0x12634b("return new this.ctor");
          }
          _0x12634b("var m=new this.ctor");
          for (var _0x4e1940 = 0x0; _0x4e1940 < _0x4bd0db.length; ++_0x4e1940) {
            var _0x243108 = _0x4bd0db[_0x4e1940].resolve();
            var _0x119f7b = _0x3229b2.safeProp(_0x243108.name);
            if (_0x243108.map) {
              _0x12634b('if(d%s){', _0x119f7b)("if(typeof d%s!==\"object\")", _0x119f7b)("throw TypeError(%j)", _0x243108.fullName + ": object expected")("m%s={}", _0x119f7b)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", _0x119f7b);
              _0x48c415(_0x12634b, _0x243108, _0x4e1940, _0x119f7b + "[ks[i]]")('}')('}');
            } else if (_0x243108.repeated) {
              _0x12634b("if(d%s){", _0x119f7b)('if(!Array.isArray(d%s))', _0x119f7b)("throw TypeError(%j)", _0x243108.fullName + ": array expected")('m%s=[]', _0x119f7b)("for(var i=0;i<d%s.length;++i){", _0x119f7b);
              _0x48c415(_0x12634b, _0x243108, _0x4e1940, _0x119f7b + "[i]")('}')('}');
            } else {
              if (!(_0x243108.resolvedType instanceof _0x41bc44)) {
                _0x12634b("if(d%s!=null){", _0x119f7b);
              }
              _0x48c415(_0x12634b, _0x243108, _0x4e1940, _0x119f7b);
              if (!(_0x243108.resolvedType instanceof _0x41bc44)) {
                _0x12634b('}');
              }
            }
          }
          return _0x12634b("return m");
        };
        _0x74c920.toObject = function (_0x3892c9) {
          var _0x569925 = _0x3892c9.fieldsArray.slice().sort(_0x3229b2.compareFieldsById);
          if (!_0x569925.length) {
            return _0x3229b2.codegen()("return {}");
          }
          var _0x670f12 = _0x3229b2.codegen(['m', 'o'], _0x3892c9.name + "$toObject")('if(!o)')("o={}")("var d={}");
          var _0x51d69e = [];
          var _0xdc5e1f = [];
          var _0x5a8831 = [];
          for (var _0x441da9 = 0x0; _0x441da9 < _0x569925.length; ++_0x441da9) {
            if (!_0x569925[_0x441da9].partOf) {
              (_0x569925[_0x441da9].resolve().repeated ? _0x51d69e : _0x569925[_0x441da9].map ? _0xdc5e1f : _0x5a8831).push(_0x569925[_0x441da9]);
            }
          }
          if (_0x51d69e.length) {
            _0x670f12("if(o.arrays||o.defaults){");
            for (_0x441da9 = 0x0; _0x441da9 < _0x51d69e.length; ++_0x441da9) {
              _0x670f12("d%s=[]", _0x3229b2.safeProp(_0x51d69e[_0x441da9].name));
            }
            _0x670f12('}');
          }
          if (_0xdc5e1f.length) {
            _0x670f12("if(o.objects||o.defaults){");
            for (_0x441da9 = 0x0; _0x441da9 < _0xdc5e1f.length; ++_0x441da9) {
              _0x670f12("d%s={}", _0x3229b2.safeProp(_0xdc5e1f[_0x441da9].name));
            }
            _0x670f12('}');
          }
          if (_0x5a8831.length) {
            _0x670f12('if(o.defaults){');
            for (_0x441da9 = 0x0; _0x441da9 < _0x5a8831.length; ++_0x441da9) {
              var _0x4cf819 = _0x5a8831[_0x441da9];
              var _0x57956c = _0x3229b2.safeProp(_0x4cf819.name);
              if (_0x4cf819.resolvedType instanceof _0x41bc44) {
                _0x670f12("d%s=o.enums===String?%j:%j", _0x57956c, _0x4cf819.resolvedType.valuesById[_0x4cf819.typeDefault], _0x4cf819.typeDefault);
              } else {
                if (_0x4cf819.long) {
                  _0x670f12('if(util.Long){')("var n=new util.Long(%i,%i,%j)", _0x4cf819.typeDefault.low, _0x4cf819.typeDefault.high, _0x4cf819.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", _0x57956c)("}else")("d%s=o.longs===String?%j:%i", _0x57956c, _0x4cf819.typeDefault.toString(), _0x4cf819.typeDefault.toNumber());
                } else {
                  if (_0x4cf819.bytes) {
                    var _0x1a5da9 = '[' + Array.prototype.slice.call(_0x4cf819.typeDefault).join(',') + ']';
                    _0x670f12("if(o.bytes===String)d%s=%j", _0x57956c, String.fromCharCode.apply(String, _0x4cf819.typeDefault))("else{")("d%s=%s", _0x57956c, _0x1a5da9)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", _0x57956c, _0x57956c)('}');
                  } else {
                    _0x670f12("d%s=%j", _0x57956c, _0x4cf819.typeDefault);
                  }
                }
              }
            }
            _0x670f12('}');
          }
          var _0x47d842 = false;
          for (_0x441da9 = 0x0; _0x441da9 < _0x569925.length; ++_0x441da9) {
            _0x4cf819 = _0x569925[_0x441da9];
            var _0x4518df = _0x3892c9._fieldsArray.indexOf(_0x4cf819);
            _0x57956c = _0x3229b2.safeProp(_0x4cf819.name);
            if (_0x4cf819.map) {
              if (!_0x47d842) {
                _0x47d842 = true;
                _0x670f12("var ks2");
              }
              _0x670f12("if(m%s&&(ks2=Object.keys(m%s)).length){", _0x57956c, _0x57956c)('d%s={}', _0x57956c)("for(var j=0;j<ks2.length;++j){");
              _0xc82ba0(_0x670f12, _0x4cf819, _0x4518df, _0x57956c + "[ks2[j]]")('}');
            } else if (_0x4cf819.repeated) {
              _0x670f12("if(m%s&&m%s.length){", _0x57956c, _0x57956c)('d%s=[]', _0x57956c)("for(var j=0;j<m%s.length;++j){", _0x57956c);
              _0xc82ba0(_0x670f12, _0x4cf819, _0x4518df, _0x57956c + "[j]")('}');
            } else {
              _0x670f12("if(m%s!=null&&m.hasOwnProperty(%j)){", _0x57956c, _0x4cf819.name);
              _0xc82ba0(_0x670f12, _0x4cf819, _0x4518df, _0x57956c);
              if (_0x4cf819.partOf) {
                _0x670f12('if(o.oneofs)')('d%s=%j', _0x3229b2.safeProp(_0x4cf819.partOf.name), _0x4cf819.name);
              }
            }
            _0x670f12('}');
          }
          return _0x670f12("return d");
        };
        _0x704b2f.exports;
      }, function () {
        return {
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js", function (_0x8b3482, _0x526065, _0x488060, _0x384301, _0xe7970f) {
        var _0x320394 = _0x526065("./message");
        _0x8b3482[".google.protobuf.Any"] = {
          'fromObject': function (_0x3a9f4a) {
            if (_0x3a9f4a && _0x3a9f4a["@type"]) {
              var _0xc6df4d = _0x3a9f4a["@type"].substring(_0x3a9f4a['@type'].lastIndexOf('/') + 0x1);
              var _0x5a082d = this.lookup(_0xc6df4d);
              if (_0x5a082d) {
                var _0xdb0527 = '.' === _0x3a9f4a["@type"].charAt(0x0) ? _0x3a9f4a["@type"].substr(0x1) : _0x3a9f4a["@type"];
                if (-0x1 === _0xdb0527.indexOf('/')) {
                  _0xdb0527 = '/' + _0xdb0527;
                }
                return this.create({
                  'type_url': _0xdb0527,
                  'value': _0x5a082d.encode(_0x5a082d.fromObject(_0x3a9f4a)).finish()
                });
              }
            }
            return this.fromObject(_0x3a9f4a);
          },
          'toObject': function (_0x6c857b, _0x221df4) {
            var _0x5373d2 = '';
            var _0x4cded2 = '';
            if (_0x221df4 && _0x221df4.json && _0x6c857b.type_url && _0x6c857b.value) {
              _0x4cded2 = _0x6c857b.type_url.substring(_0x6c857b.type_url.lastIndexOf('/') + 0x1);
              _0x5373d2 = _0x6c857b.type_url.substring(0x0, _0x6c857b.type_url.lastIndexOf('/') + 0x1);
              var _0x2cbe53 = this.lookup(_0x4cded2);
              if (_0x2cbe53) {
                _0x6c857b = _0x2cbe53.decode(_0x6c857b.value);
              }
            }
            if (!(_0x6c857b instanceof this.ctor) && _0x6c857b instanceof _0x320394) {
              var _0x45d8a9 = _0x6c857b.$type.toObject(_0x6c857b, _0x221df4);
              if ('' === _0x5373d2) {
                _0x5373d2 = "type.googleapis.com/";
              }
              _0x4cded2 = _0x5373d2 + ('.' === _0x6c857b.$type.fullName[0x0] ? _0x6c857b.$type.fullName.substr(0x1) : _0x6c857b.$type.fullName);
              _0x45d8a9['@type'] = _0x4cded2;
              return _0x45d8a9;
            }
            return this.toObject(_0x6c857b, _0x221df4);
          }
        };
        _0x488060.exports;
      }, function () {
        return {
          './message': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/message.js"
        };
      });
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/type.js", function (_0x382a69, _0xb32671, _0x1dcec6, _0x3b2df1, _0xd68696) {
        _0x1dcec6.exports = _0x3902c9;
        var _0x5d1b2e = _0xb32671('./namespace');
        ((_0x3902c9.prototype = Object.create(_0x5d1b2e.prototype)).constructor = _0x3902c9).className = "Type";
        var _0x33e887 = _0xb32671("./enum");
        var _0x6d9325 = _0xb32671("./oneof");
        var _0x3873d9 = _0xb32671("./field");
        var _0x4cf399 = _0xb32671('./mapfield');
        var _0x3cc608 = _0xb32671("./service");
        var _0x5f42a2 = _0xb32671("./message");
        var _0x44c4f3 = _0xb32671("./reader");
        var _0x42e769 = _0xb32671("./writer");
        var _0x4e20b8 = _0xb32671("./util");
        var _0x28071c = _0xb32671("./encoder");
        var _0x5be3ae = _0xb32671('./decoder');
        var _0x2fcd3c = _0xb32671('./verifier');
        var _0x5a41c2 = _0xb32671("./converter");
        var _0x253089 = _0xb32671("./wrappers");
        function _0x3902c9(_0x2f4499, _0x419cf6) {
          _0x5d1b2e.call(this, _0x2f4499, _0x419cf6);
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
        function _0x3d4c31(_0x3dab12) {
          _0x3dab12._fieldsById = _0x3dab12._fieldsArray = _0x3dab12._oneofsArray = null;
          delete _0x3dab12.encode;
          delete _0x3dab12.decode;
          delete _0x3dab12.verify;
          return _0x3dab12;
        }
        Object.defineProperties(_0x3902c9.prototype, {
          'fieldsById': {
            'get': function () {
              if (this._fieldsById) {
                return this._fieldsById;
              }
              this._fieldsById = {};
              var _0x4df3c7 = Object.keys(this.fields);
              for (var _0x1e7f0d = 0x0; _0x1e7f0d < _0x4df3c7.length; ++_0x1e7f0d) {
                var _0x2ce8e3 = this.fields[_0x4df3c7[_0x1e7f0d]];
                var _0x4404ad = _0x2ce8e3.id;
                if (this._fieldsById[_0x4404ad]) {
                  throw Error("duplicate id " + _0x4404ad + " in " + this);
                }
                this._fieldsById[_0x4404ad] = _0x2ce8e3;
              }
              return this._fieldsById;
            }
          },
          'fieldsArray': {
            'get': function () {
              return this._fieldsArray || (this._fieldsArray = _0x4e20b8.toArray(this.fields));
            }
          },
          'oneofsArray': {
            'get': function () {
              return this._oneofsArray || (this._oneofsArray = _0x4e20b8.toArray(this.oneofs));
            }
          },
          'ctor': {
            'get': function () {
              return this._ctor || (this.ctor = _0x3902c9.generateConstructor(this)());
            },
            'set': function (_0x3732dc) {
              var _0x573571 = _0x3732dc.prototype;
              if (!(_0x573571 instanceof _0x5f42a2)) {
                (_0x3732dc.prototype = new _0x5f42a2()).constructor = _0x3732dc;
                _0x4e20b8.merge(_0x3732dc.prototype, _0x573571);
              }
              _0x3732dc.$type = _0x3732dc.prototype.$type = this;
              _0x4e20b8.merge(_0x3732dc, _0x5f42a2, true);
              this._ctor = _0x3732dc;
              for (var _0x1720e0 = 0x0; _0x1720e0 < this.fieldsArray.length; ++_0x1720e0) {
                this._fieldsArray[_0x1720e0].resolve();
              }
              var _0x1a46e5 = {};
              for (_0x1720e0 = 0x0; _0x1720e0 < this.oneofsArray.length; ++_0x1720e0) {
                _0x1a46e5[this._oneofsArray[_0x1720e0].resolve().name] = {
                  'get': _0x4e20b8.oneOfGetter(this._oneofsArray[_0x1720e0].oneof),
                  'set': _0x4e20b8.oneOfSetter(this._oneofsArray[_0x1720e0].oneof)
                };
              }
              if (_0x1720e0) {
                Object.defineProperties(_0x3732dc.prototype, _0x1a46e5);
              }
            }
          }
        });
        _0x3902c9.generateConstructor = function (_0x304faf) {
          var _0x1aab15;
          var _0xa5607a = _0x4e20b8.codegen(['p'], _0x304faf.name);
          for (var _0x4fe5a4 = 0x0; _0x4fe5a4 < _0x304faf.fieldsArray.length; ++_0x4fe5a4) {
            if ((_0x1aab15 = _0x304faf._fieldsArray[_0x4fe5a4]).map) {
              _0xa5607a("this%s={}", _0x4e20b8.safeProp(_0x1aab15.name));
            } else if (_0x1aab15.repeated) {
              _0xa5607a("this%s=[]", _0x4e20b8.safeProp(_0x1aab15.name));
            }
          }
          return _0xa5607a("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
        };
        _0x3902c9.fromJSON = function (_0xb41085, _0x243c25) {
          var _0x3b1149 = new _0x3902c9(_0xb41085, _0x243c25.options);
          _0x3b1149.extensions = _0x243c25.extensions;
          _0x3b1149.reserved = _0x243c25.reserved;
          var _0x14b50e = Object.keys(_0x243c25.fields);
          for (var _0x59b02b = 0x0; _0x59b02b < _0x14b50e.length; ++_0x59b02b) {
            _0x3b1149.add((undefined !== _0x243c25.fields[_0x14b50e[_0x59b02b]].keyType ? _0x4cf399.fromJSON : _0x3873d9.fromJSON)(_0x14b50e[_0x59b02b], _0x243c25.fields[_0x14b50e[_0x59b02b]]));
          }
          if (_0x243c25.oneofs) {
            _0x14b50e = Object.keys(_0x243c25.oneofs);
            for (_0x59b02b = 0x0; _0x59b02b < _0x14b50e.length; ++_0x59b02b) {
              _0x3b1149.add(_0x6d9325.fromJSON(_0x14b50e[_0x59b02b], _0x243c25.oneofs[_0x14b50e[_0x59b02b]]));
            }
          }
          if (_0x243c25.nested) {
            _0x14b50e = Object.keys(_0x243c25.nested);
            for (_0x59b02b = 0x0; _0x59b02b < _0x14b50e.length; ++_0x59b02b) {
              var _0x4d95e6 = _0x243c25.nested[_0x14b50e[_0x59b02b]];
              _0x3b1149.add((undefined !== _0x4d95e6.id ? _0x3873d9.fromJSON : undefined !== _0x4d95e6.fields ? _0x3902c9.fromJSON : undefined !== _0x4d95e6.values ? _0x33e887.fromJSON : undefined !== _0x4d95e6.methods ? _0x3cc608.fromJSON : _0x5d1b2e.fromJSON)(_0x14b50e[_0x59b02b], _0x4d95e6));
            }
          }
          if (_0x243c25.extensions && _0x243c25.extensions.length) {
            _0x3b1149.extensions = _0x243c25.extensions;
          }
          if (_0x243c25.reserved && _0x243c25.reserved.length) {
            _0x3b1149.reserved = _0x243c25.reserved;
          }
          if (_0x243c25.group) {
            _0x3b1149.group = true;
          }
          if (_0x243c25.comment) {
            _0x3b1149.comment = _0x243c25.comment;
          }
          return _0x3b1149;
        };
        _0x3902c9.prototype.toJSON = function (_0x407dbb) {
          var _0x3df0c0 = _0x5d1b2e.prototype.toJSON.call(this, _0x407dbb);
          var _0x1b6117 = !!_0x407dbb && Boolean(_0x407dbb.keepComments);
          return _0x4e20b8.toObject(['options', _0x3df0c0 && _0x3df0c0.options || undefined, "oneofs", _0x5d1b2e.arrayToJSON(this.oneofsArray, _0x407dbb), "fields", _0x5d1b2e.arrayToJSON(this.fieldsArray.filter(function (_0x32a022) {
            return !_0x32a022.declaringField;
          }), _0x407dbb) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, 'nested', _0x3df0c0 && _0x3df0c0.nested || undefined, "comment", _0x1b6117 ? this.comment : undefined]);
        };
        _0x3902c9.prototype.resolveAll = function () {
          var _0x35bb3f = this.fieldsArray;
          for (var _0x4ce090 = 0x0; _0x4ce090 < _0x35bb3f.length;) {
            _0x35bb3f[_0x4ce090++].resolve();
          }
          var _0x35a1c5 = this.oneofsArray;
          for (_0x4ce090 = 0x0; _0x4ce090 < _0x35a1c5.length;) {
            _0x35a1c5[_0x4ce090++].resolve();
          }
          return _0x5d1b2e.prototype.resolveAll.call(this);
        };
        _0x3902c9.prototype.get = function (_0x5ee3f6) {
          return this.fields[_0x5ee3f6] || this.oneofs && this.oneofs[_0x5ee3f6] || this.nested && this.nested[_0x5ee3f6] || null;
        };
        _0x3902c9.prototype.add = function (_0x2933b1) {
          if (this.get(_0x2933b1.name)) {
            throw Error("duplicate name '" + _0x2933b1.name + "' in " + this);
          }
          if (_0x2933b1 instanceof _0x3873d9 && undefined === _0x2933b1.extend) {
            if (this._fieldsById ? this._fieldsById[_0x2933b1.id] : this.fieldsById[_0x2933b1.id]) {
              throw Error("duplicate id " + _0x2933b1.id + " in " + this);
            }
            if (this.isReservedId(_0x2933b1.id)) {
              throw Error("id " + _0x2933b1.id + " is reserved in " + this);
            }
            if (this.isReservedName(_0x2933b1.name)) {
              throw Error("name '" + _0x2933b1.name + "' is reserved in " + this);
            }
            if (_0x2933b1.parent) {
              _0x2933b1.parent.remove(_0x2933b1);
            }
            this.fields[_0x2933b1.name] = _0x2933b1;
            _0x2933b1.message = this;
            _0x2933b1.onAdd(this);
            return _0x3d4c31(this);
          }
          return _0x2933b1 instanceof _0x6d9325 ? (this.oneofs || (this.oneofs = {}), this.oneofs[_0x2933b1.name] = _0x2933b1, _0x2933b1.onAdd(this), _0x3d4c31(this)) : _0x5d1b2e.prototype.add.call(this, _0x2933b1);
        };
        _0x3902c9.prototype.remove = function (_0x5ac8fb) {
          if (_0x5ac8fb instanceof _0x3873d9 && undefined === _0x5ac8fb.extend) {
            if (!this.fields || this.fields[_0x5ac8fb.name] !== _0x5ac8fb) {
              throw Error(_0x5ac8fb + " is not a member of " + this);
            }
            delete this.fields[_0x5ac8fb.name];
            _0x5ac8fb.parent = null;
            _0x5ac8fb.onRemove(this);
            return _0x3d4c31(this);
          }
          if (_0x5ac8fb instanceof _0x6d9325) {
            if (!this.oneofs || this.oneofs[_0x5ac8fb.name] !== _0x5ac8fb) {
              throw Error(_0x5ac8fb + " is not a member of " + this);
            }
            delete this.oneofs[_0x5ac8fb.name];
            _0x5ac8fb.parent = null;
            _0x5ac8fb.onRemove(this);
            return _0x3d4c31(this);
          }
          return _0x5d1b2e.prototype.remove.call(this, _0x5ac8fb);
        };
        _0x3902c9.prototype.isReservedId = function (_0x3ac62b) {
          return _0x5d1b2e.isReservedId(this.reserved, _0x3ac62b);
        };
        _0x3902c9.prototype.isReservedName = function (_0x33e143) {
          return _0x5d1b2e.isReservedName(this.reserved, _0x33e143);
        };
        _0x3902c9.prototype.create = function (_0x224122) {
          return new this.ctor(_0x224122);
        };
        _0x3902c9.prototype.setup = function () {
          var _0x316572 = this.fullName;
          var _0x1ebc68 = [];
          for (var _0x365099 = 0x0; _0x365099 < this.fieldsArray.length; ++_0x365099) {
            _0x1ebc68.push(this._fieldsArray[_0x365099].resolve().resolvedType);
          }
          this.encode = _0x28071c(this)({
            'Writer': _0x42e769,
            'types': _0x1ebc68,
            'util': _0x4e20b8
          });
          this.decode = _0x5be3ae(this)({
            'Reader': _0x44c4f3,
            'types': _0x1ebc68,
            'util': _0x4e20b8
          });
          this.verify = _0x2fcd3c(this)({
            'types': _0x1ebc68,
            'util': _0x4e20b8
          });
          this.fromObject = _0x5a41c2.fromObject(this)({
            'types': _0x1ebc68,
            'util': _0x4e20b8
          });
          this.toObject = _0x5a41c2.toObject(this)({
            'types': _0x1ebc68,
            'util': _0x4e20b8
          });
          var _0x573745 = _0x253089[_0x316572];
          if (_0x573745) {
            var _0x2d5a74 = Object.create(this);
            _0x2d5a74.fromObject = this.fromObject;
            this.fromObject = _0x573745.fromObject.bind(_0x2d5a74);
            _0x2d5a74.toObject = this.toObject;
            this.toObject = _0x573745.toObject.bind(_0x2d5a74);
          }
          return this;
        };
        _0x3902c9.prototype.encode = function (_0x4fb34b, _0x350ece) {
          return this.setup().encode(_0x4fb34b, _0x350ece);
        };
        _0x3902c9.prototype.encodeDelimited = function (_0x71aac6, _0x221997) {
          return this.encode(_0x71aac6, _0x221997 && _0x221997.len ? _0x221997.fork() : _0x221997).ldelim();
        };
        _0x3902c9.prototype.decode = function (_0x3b5867, _0x165cf2) {
          return this.setup().decode(_0x3b5867, _0x165cf2);
        };
        _0x3902c9.prototype.decodeDelimited = function (_0x2ec2b1) {
          if (!(_0x2ec2b1 instanceof _0x44c4f3)) {
            _0x2ec2b1 = _0x44c4f3.create(_0x2ec2b1);
          }
          return this.decode(_0x2ec2b1, _0x2ec2b1.uint32());
        };
        _0x3902c9.prototype.verify = function (_0x4284dd) {
          return this.setup().verify(_0x4284dd);
        };
        _0x3902c9.prototype.fromObject = function (_0x51362e) {
          return this.setup().fromObject(_0x51362e);
        };
        _0x3902c9.prototype.toObject = function (_0x14a01a, _0x2bdc19) {
          return this.setup().toObject(_0x14a01a, _0x2bdc19);
        };
        _0x3902c9.d = function (_0x4044a8) {
          return function (_0x1cd541) {
            _0x4e20b8.decorateType(_0x1cd541, _0x4044a8);
          };
        };
        _0x1dcec6.exports;
      }, function () {
        return {
          './namespace': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './oneof': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js',
          './field': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './mapfield': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './service': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/service.js',
          './message': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          './reader': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './writer': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './encoder': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js',
          './decoder': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          './verifier': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          './converter': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          './wrappers': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js"
        };
      });
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/root.js", function (_0x81b5e9, _0x188fc8, _0x40cf27, _0x38e7f8, _0x562ae5) {
        _0x40cf27.exports = _0x58ce69;
        var _0x2d7713 = _0x188fc8('./namespace');
        ((_0x58ce69.prototype = Object.create(_0x2d7713.prototype)).constructor = _0x58ce69).className = 'Root';
        var _0x2fa5ea;
        var _0x7223d2;
        var _0x55f85e;
        var _0x8a7088 = _0x188fc8('./field');
        var _0x1524f1 = _0x188fc8('./enum');
        var _0x4f18f6 = _0x188fc8('./oneof');
        var _0x5e3af3 = _0x188fc8('./util');
        function _0x58ce69(_0x49ebf5) {
          _0x2d7713.call(this, '', _0x49ebf5);
          this.deferred = [];
          this.files = [];
        }
        function _0x50d990() {}
        _0x58ce69.fromJSON = function (_0x4f4a0a, _0x5b8cd8) {
          if (!_0x5b8cd8) {
            _0x5b8cd8 = new _0x58ce69();
          }
          if (_0x4f4a0a.options) {
            _0x5b8cd8.setOptions(_0x4f4a0a.options);
          }
          return _0x5b8cd8.addJSON(_0x4f4a0a.nested);
        };
        _0x58ce69.prototype.resolvePath = _0x5e3af3.path.resolve;
        _0x58ce69.prototype.fetch = _0x5e3af3.fetch;
        _0x58ce69.prototype.load = function _0x4c48a7(_0x21def6, _0x33b2d8, _0x252c65) {
          if ('function' == typeof _0x33b2d8) {
            _0x252c65 = _0x33b2d8;
            _0x33b2d8 = undefined;
          }
          var _0x579907 = this;
          if (!_0x252c65) {
            return _0x5e3af3.asPromise(_0x4c48a7, _0x579907, _0x21def6, _0x33b2d8);
          }
          var _0x307aed = _0x252c65 === _0x50d990;
          function _0x3f7c52(_0x4c678f, _0x2f6bfd) {
            if (_0x252c65) {
              var _0x507bf4 = _0x252c65;
              _0x252c65 = null;
              if (_0x307aed) {
                throw _0x4c678f;
              }
              _0x507bf4(_0x4c678f, _0x2f6bfd);
            }
          }
          function _0x3edd99(_0x15a5d4) {
            var _0x28a74f = _0x15a5d4.lastIndexOf('google/protobuf/');
            if (_0x28a74f > -0x1) {
              var _0x12958f = _0x15a5d4.substring(_0x28a74f);
              if (_0x12958f in _0x55f85e) {
                return _0x12958f;
              }
            }
            return null;
          }
          function _0x4ca1a2(_0x188667, _0x481382) {
            try {
              if (_0x5e3af3.isString(_0x481382) && '{' === _0x481382.charAt(0x0)) {
                _0x481382 = JSON.parse(_0x481382);
              }
              if (_0x5e3af3.isString(_0x481382)) {
                _0x7223d2.filename = _0x188667;
                var _0x2080e8;
                var _0x2c4718 = _0x7223d2(_0x481382, _0x579907, _0x33b2d8);
                var _0x5ced21 = 0x0;
                if (_0x2c4718.imports) {
                  for (; _0x5ced21 < _0x2c4718.imports.length; ++_0x5ced21) {
                    if (_0x2080e8 = _0x3edd99(_0x2c4718.imports[_0x5ced21]) || _0x579907.resolvePath(_0x188667, _0x2c4718.imports[_0x5ced21])) {
                      _0x52635f(_0x2080e8);
                    }
                  }
                }
                if (_0x2c4718.weakImports) {
                  for (_0x5ced21 = 0x0; _0x5ced21 < _0x2c4718.weakImports.length; ++_0x5ced21) {
                    if (_0x2080e8 = _0x3edd99(_0x2c4718.weakImports[_0x5ced21]) || _0x579907.resolvePath(_0x188667, _0x2c4718.weakImports[_0x5ced21])) {
                      _0x52635f(_0x2080e8, true);
                    }
                  }
                }
              } else {
                _0x579907.setOptions(_0x481382.options).addJSON(_0x481382.nested);
              }
            } catch (_0x3c1f96) {
              _0x3f7c52(_0x3c1f96);
            }
            if (!(_0x307aed || _0x2766e7)) {
              _0x3f7c52(null, _0x579907);
            }
          }
          function _0x52635f(_0x5477a0, _0x15548f) {
            if (!(_0x579907.files.indexOf(_0x5477a0) > -0x1)) {
              _0x579907.files.push(_0x5477a0);
              if (_0x5477a0 in _0x55f85e) {
                if (_0x307aed) {
                  _0x4ca1a2(_0x5477a0, _0x55f85e[_0x5477a0]);
                } else {
                  ++_0x2766e7;
                  setTimeout(function () {
                    --_0x2766e7;
                    _0x4ca1a2(_0x5477a0, _0x55f85e[_0x5477a0]);
                  });
                }
              } else {
                if (_0x307aed) {
                  var _0x3eb022;
                  try {
                    _0x3eb022 = _0x5e3af3.fs.readFileSync(_0x5477a0).toString('utf8');
                  } catch (_0x5ae3c3) {
                    return void (_0x15548f || _0x3f7c52(_0x5ae3c3));
                  }
                  _0x4ca1a2(_0x5477a0, _0x3eb022);
                } else {
                  ++_0x2766e7;
                  _0x579907.fetch(_0x5477a0, function (_0x1a333a, _0x1e9d33) {
                    --_0x2766e7;
                    if (_0x252c65) {
                      if (_0x1a333a) {
                        if (_0x15548f) {
                          if (!_0x2766e7) {
                            _0x3f7c52(null, _0x579907);
                          }
                        } else {
                          _0x3f7c52(_0x1a333a);
                        }
                      } else {
                        _0x4ca1a2(_0x5477a0, _0x1e9d33);
                      }
                    }
                  });
                }
              }
            }
          }
          var _0x2766e7 = 0x0;
          if (_0x5e3af3.isString(_0x21def6)) {
            _0x21def6 = [_0x21def6];
          }
          var _0x286af1;
          for (var _0x4eb9e1 = 0x0; _0x4eb9e1 < _0x21def6.length; ++_0x4eb9e1) {
            if (_0x286af1 = _0x579907.resolvePath('', _0x21def6[_0x4eb9e1])) {
              _0x52635f(_0x286af1);
            }
          }
          if (_0x307aed) {
            return _0x579907;
          }
          if (!_0x2766e7) {
            _0x3f7c52(null, _0x579907);
          }
        };
        _0x58ce69.prototype.loadSync = function (_0x22aecb, _0x1a0170) {
          if (!_0x5e3af3.isNode) {
            throw Error("not supported");
          }
          return this.load(_0x22aecb, _0x1a0170, _0x50d990);
        };
        _0x58ce69.prototype.resolveAll = function () {
          if (this.deferred.length) {
            throw Error("unresolvable extensions: " + this.deferred.map(function (_0x279235) {
              return "'extend " + _0x279235.extend + "' in " + _0x279235.parent.fullName;
            }).join(", "));
          }
          return _0x2d7713.prototype.resolveAll.call(this);
        };
        var _0x34a7fc = /^[A-Z]/;
        function _0x5593e5(_0x983fe0, _0x6b13f2) {
          var _0x287bca = _0x6b13f2.parent.lookup(_0x6b13f2.extend);
          if (_0x287bca) {
            var _0x35b672 = new _0x8a7088(_0x6b13f2.fullName, _0x6b13f2.id, _0x6b13f2.type, _0x6b13f2.rule, undefined, _0x6b13f2.options);
            _0x35b672.declaringField = _0x6b13f2;
            _0x6b13f2.extensionField = _0x35b672;
            _0x287bca.add(_0x35b672);
            return true;
          }
          return false;
        }
        _0x58ce69.prototype._handleAdd = function (_0x4a2af1) {
          if (_0x4a2af1 instanceof _0x8a7088) {
            if (!(undefined === _0x4a2af1.extend || _0x4a2af1.extensionField || _0x5593e5(0x0, _0x4a2af1))) {
              this.deferred.push(_0x4a2af1);
            }
          } else {
            if (_0x4a2af1 instanceof _0x1524f1) {
              if (_0x34a7fc.test(_0x4a2af1.name)) {
                _0x4a2af1.parent[_0x4a2af1.name] = _0x4a2af1.values;
              }
            } else {
              if (!(_0x4a2af1 instanceof _0x4f18f6)) {
                if (_0x4a2af1 instanceof _0x2fa5ea) {
                  for (var _0x25641a = 0x0; _0x25641a < this.deferred.length;) {
                    if (_0x5593e5(0x0, this.deferred[_0x25641a])) {
                      this.deferred.splice(_0x25641a, 0x1);
                    } else {
                      ++_0x25641a;
                    }
                  }
                }
                for (var _0x1202ce = 0x0; _0x1202ce < _0x4a2af1.nestedArray.length; ++_0x1202ce) {
                  this._handleAdd(_0x4a2af1._nestedArray[_0x1202ce]);
                }
                if (_0x34a7fc.test(_0x4a2af1.name)) {
                  _0x4a2af1.parent[_0x4a2af1.name] = _0x4a2af1;
                }
              }
            }
          }
        };
        _0x58ce69.prototype._handleRemove = function (_0x3a1d6a) {
          if (_0x3a1d6a instanceof _0x8a7088) {
            if (undefined !== _0x3a1d6a.extend) {
              if (_0x3a1d6a.extensionField) {
                _0x3a1d6a.extensionField.parent.remove(_0x3a1d6a.extensionField);
                _0x3a1d6a.extensionField = null;
              } else {
                var _0x2b6b56 = this.deferred.indexOf(_0x3a1d6a);
                if (_0x2b6b56 > -0x1) {
                  this.deferred.splice(_0x2b6b56, 0x1);
                }
              }
            }
          } else {
            if (_0x3a1d6a instanceof _0x1524f1) {
              if (_0x34a7fc.test(_0x3a1d6a.name)) {
                delete _0x3a1d6a.parent[_0x3a1d6a.name];
              }
            } else {
              if (_0x3a1d6a instanceof _0x2d7713) {
                for (var _0xee2937 = 0x0; _0xee2937 < _0x3a1d6a.nestedArray.length; ++_0xee2937) {
                  this._handleRemove(_0x3a1d6a._nestedArray[_0xee2937]);
                }
                if (_0x34a7fc.test(_0x3a1d6a.name)) {
                  delete _0x3a1d6a.parent[_0x3a1d6a.name];
                }
              }
            }
          }
        };
        _0x58ce69._configure = function (_0x1af065, _0x142606, _0x5cf7b7) {
          _0x2fa5ea = _0x1af065;
          _0x7223d2 = _0x142606;
          _0x55f85e = _0x5cf7b7;
        };
        _0x40cf27.exports;
      }, function () {
        return {
          './namespace': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './field': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './oneof': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js',
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util.js", function (_0x3d6c98, _0xb6d1d3, _0x383fb3, _0x4ecac4, _0x23e6d5) {
        var _0x50328c;
        var _0x1a48a8;
        var _0x388d74 = _0x383fb3.exports = _0xb6d1d3("./util/minimal");
        var _0x2fd6b6 = _0xb6d1d3("./roots");
        _0x388d74.codegen = _0xb6d1d3("@protobufjs/codegen");
        _0x388d74.fetch = _0xb6d1d3('@protobufjs/fetch');
        _0x388d74.path = _0xb6d1d3("@protobufjs/path");
        _0x388d74.fs = _0x388d74.inquire('fs');
        _0x388d74.toArray = function (_0xc11b5a) {
          if (_0xc11b5a) {
            var _0xf29f11 = Object.keys(_0xc11b5a);
            var _0xb284e2 = new Array(_0xf29f11.length);
            for (var _0x2b94f2 = 0x0; _0x2b94f2 < _0xf29f11.length;) {
              _0xb284e2[_0x2b94f2] = _0xc11b5a[_0xf29f11[_0x2b94f2++]];
            }
            return _0xb284e2;
          }
          return [];
        };
        _0x388d74.toObject = function (_0x347b2c) {
          var _0x1d58f3 = {};
          for (var _0x51e40e = 0x0; _0x51e40e < _0x347b2c.length;) {
            var _0x33f911 = _0x347b2c[_0x51e40e++];
            var _0x5d2586 = _0x347b2c[_0x51e40e++];
            if (undefined !== _0x5d2586) {
              _0x1d58f3[_0x33f911] = _0x5d2586;
            }
          }
          return _0x1d58f3;
        };
        var _0x545abe = /\\/g;
        var _0x273d82 = /"/g;
        _0x388d74.isReserved = function (_0xc6e5e1) {
          return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(_0xc6e5e1);
        };
        _0x388d74.safeProp = function (_0x598bd5) {
          return !/^[$\w_]+$/.test(_0x598bd5) || _0x388d74.isReserved(_0x598bd5) ? "[\"" + _0x598bd5.replace(_0x545abe, "\\\\").replace(_0x273d82, "\\\"") + "\"]" : '.' + _0x598bd5;
        };
        _0x388d74.ucFirst = function (_0x3aa9cf) {
          return _0x3aa9cf.charAt(0x0).toUpperCase() + _0x3aa9cf.substring(0x1);
        };
        var _0x213573 = /_([a-z])/g;
        _0x388d74.camelCase = function (_0x2a4544) {
          return _0x2a4544.substring(0x0, 0x1) + _0x2a4544.substring(0x1).replace(_0x213573, function (_0x3ec739, _0x405e5c) {
            return _0x405e5c.toUpperCase();
          });
        };
        _0x388d74.compareFieldsById = function (_0x165b5b, _0xdb3f23) {
          return _0x165b5b.id - _0xdb3f23.id;
        };
        _0x388d74.decorateType = function (_0x500659, _0x33f653) {
          if (_0x500659.$type) {
            if (_0x33f653 && _0x500659.$type.name !== _0x33f653) {
              _0x388d74.decorateRoot.remove(_0x500659.$type);
              _0x500659.$type.name = _0x33f653;
              _0x388d74.decorateRoot.add(_0x500659.$type);
            }
            return _0x500659.$type;
          }
          if (!_0x50328c) {
            _0x50328c = _0xb6d1d3("./type");
          }
          var _0x11c451 = new _0x50328c(_0x33f653 || _0x500659.name);
          _0x388d74.decorateRoot.add(_0x11c451);
          _0x11c451.ctor = _0x500659;
          Object.defineProperty(_0x500659, "$type", {
            'value': _0x11c451,
            'enumerable': false
          });
          Object.defineProperty(_0x500659.prototype, '$type', {
            'value': _0x11c451,
            'enumerable': false
          });
          return _0x11c451;
        };
        var _0x417480 = 0x0;
        _0x388d74.decorateEnum = function (_0x49e946) {
          if (_0x49e946.$type) {
            return _0x49e946.$type;
          }
          if (!_0x1a48a8) {
            _0x1a48a8 = _0xb6d1d3("./enum");
          }
          var _0x5f593f = new _0x1a48a8("Enum" + _0x417480++, _0x49e946);
          _0x388d74.decorateRoot.add(_0x5f593f);
          Object.defineProperty(_0x49e946, '$type', {
            'value': _0x5f593f,
            'enumerable': false
          });
          return _0x5f593f;
        };
        _0x388d74.setProperty = function (_0x14c95a, _0x26d293, _0x4f8f06) {
          if ("object" != typeof _0x14c95a) {
            throw TypeError("dst must be an object");
          }
          if (!_0x26d293) {
            throw TypeError("path must be specified");
          }
          return function _0x5ed164(_0x1a7f36, _0x4d129f, _0x2d2436) {
            var _0x579d68 = _0x4d129f.shift();
            if ("__proto__" === _0x579d68 || "prototype" === _0x579d68) {
              return _0x1a7f36;
            }
            if (_0x4d129f.length > 0x0) {
              _0x1a7f36[_0x579d68] = _0x5ed164(_0x1a7f36[_0x579d68] || {}, _0x4d129f, _0x2d2436);
            } else {
              var _0x42bd67 = _0x1a7f36[_0x579d68];
              if (_0x42bd67) {
                _0x2d2436 = [].concat(_0x42bd67).concat(_0x2d2436);
              }
              _0x1a7f36[_0x579d68] = _0x2d2436;
            }
            return _0x1a7f36;
          }(_0x14c95a, _0x26d293 = _0x26d293.split('.'), _0x4f8f06);
        };
        Object.defineProperty(_0x388d74, 'decorateRoot', {
          'get': function () {
            return _0x2fd6b6.decorated || (_0x2fd6b6.decorated = new (_0xb6d1d3("./root"))());
          }
        });
        _0x383fb3.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          './roots': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/roots.js",
          '@protobufjs/codegen': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js",
          '@protobufjs/fetch': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js",
          '@protobufjs/path': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/@protobufjs/path/index.js",
          './type': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './root': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/root.js"
        };
      });
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/object.js", function (_0xe1a6c4, _0x5d612f, _0x22144d, _0x42cd7c, _0x39813a) {
        _0x22144d.exports = _0x37c823;
        _0x37c823.className = "ReflectionObject";
        var _0x5f18c0;
        var _0x29c35e = _0x5d612f('./util');
        function _0x37c823(_0x3a384c, _0x42ccc4) {
          if (!_0x29c35e.isString(_0x3a384c)) {
            throw TypeError("name must be a string");
          }
          if (_0x42ccc4 && !_0x29c35e.isObject(_0x42ccc4)) {
            throw TypeError("options must be an object");
          }
          this.options = _0x42ccc4;
          this.parsedOptions = null;
          this.name = _0x3a384c;
          this.parent = null;
          this.resolved = false;
          this.comment = null;
          this.filename = null;
        }
        Object.defineProperties(_0x37c823.prototype, {
          'root': {
            'get': function () {
              for (var _0x3fc12c = this; null !== _0x3fc12c.parent;) {
                _0x3fc12c = _0x3fc12c.parent;
              }
              return _0x3fc12c;
            }
          },
          'fullName': {
            'get': function () {
              var _0x968764 = [this.name];
              for (var _0x37da4b = this.parent; _0x37da4b;) {
                _0x968764.unshift(_0x37da4b.name);
                _0x37da4b = _0x37da4b.parent;
              }
              return _0x968764.join('.');
            }
          }
        });
        _0x37c823.prototype.toJSON = function () {
          throw Error();
        };
        _0x37c823.prototype.onAdd = function (_0x5216dd) {
          if (this.parent && this.parent !== _0x5216dd) {
            this.parent.remove(this);
          }
          this.parent = _0x5216dd;
          this.resolved = false;
          var _0x431a29 = _0x5216dd.root;
          if (_0x431a29 instanceof _0x5f18c0) {
            _0x431a29._handleAdd(this);
          }
        };
        _0x37c823.prototype.onRemove = function (_0x24207d) {
          var _0x3e0ac9 = _0x24207d.root;
          if (_0x3e0ac9 instanceof _0x5f18c0) {
            _0x3e0ac9._handleRemove(this);
          }
          this.parent = null;
          this.resolved = false;
        };
        _0x37c823.prototype.resolve = function () {
          if (!this.resolved) {
            if (this.root instanceof _0x5f18c0) {
              this.resolved = true;
            }
          }
          return this;
        };
        _0x37c823.prototype.getOption = function (_0x69fc56) {
          if (this.options) {
            return this.options[_0x69fc56];
          }
        };
        _0x37c823.prototype.setOption = function (_0x5ccb2b, _0x1ab218, _0x39b3e0) {
          if (!(_0x39b3e0 && this.options && undefined !== this.options[_0x5ccb2b])) {
            (this.options || (this.options = {}))[_0x5ccb2b] = _0x1ab218;
          }
          return this;
        };
        _0x37c823.prototype.setParsedOption = function (_0x1704cf, _0x548067, _0x2beb16) {
          if (!this.parsedOptions) {
            this.parsedOptions = [];
          }
          var _0xc87b80 = this.parsedOptions;
          if (_0x2beb16) {
            var _0x59fbbe = _0xc87b80.find(function (_0x230c90) {
              return Object.prototype.hasOwnProperty.call(_0x230c90, _0x1704cf);
            });
            if (_0x59fbbe) {
              var _0xe317ad = _0x59fbbe[_0x1704cf];
              _0x29c35e.setProperty(_0xe317ad, _0x2beb16, _0x548067);
            } else {
              (_0x59fbbe = {})[_0x1704cf] = _0x29c35e.setProperty({}, _0x2beb16, _0x548067);
              _0xc87b80.push(_0x59fbbe);
            }
          } else {
            var _0x2063b8 = {
              _0x1704cf: _0x548067
            };
            _0xc87b80.push(_0x2063b8);
          }
          return this;
        };
        _0x37c823.prototype.setOptions = function (_0x30fa78, _0x800246) {
          if (_0x30fa78) {
            var _0x5e4fdf = Object.keys(_0x30fa78);
            for (var _0x1fe96b = 0x0; _0x1fe96b < _0x5e4fdf.length; ++_0x1fe96b) {
              this.setOption(_0x5e4fdf[_0x1fe96b], _0x30fa78[_0x5e4fdf[_0x1fe96b]], _0x800246);
            }
          }
          return this;
        };
        _0x37c823.prototype.toString = function () {
          var _0x326daf = this.constructor.className;
          var _0xbd85b3 = this.fullName;
          return _0xbd85b3.length ? _0x326daf + " " + _0xbd85b3 : _0x326daf;
        };
        _0x37c823._configure = function (_0x414299) {
          _0x5f18c0 = _0x414299;
        };
        _0x22144d.exports;
      }, function () {
        return {
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/enum.js", function (_0x59890d, _0x8e79c2, _0x729918, _0x27e02e, _0x99304c) {
        _0x729918.exports = _0x4ddf1b;
        var _0x47d521 = _0x8e79c2("./object");
        ((_0x4ddf1b.prototype = Object.create(_0x47d521.prototype)).constructor = _0x4ddf1b).className = "Enum";
        var _0x4c7786 = _0x8e79c2("./namespace");
        var _0x425ed1 = _0x8e79c2('./util');
        function _0x4ddf1b(_0x49f9a9, _0x4ead64, _0xeddf24, _0x7f3953, _0x27a53d) {
          _0x47d521.call(this, _0x49f9a9, _0xeddf24);
          if (_0x4ead64 && 'object' != typeof _0x4ead64) {
            throw TypeError("values must be an object");
          }
          this.valuesById = {};
          this.values = Object.create(this.valuesById);
          this.comment = _0x7f3953;
          this.comments = _0x27a53d || {};
          this.reserved = undefined;
          if (_0x4ead64) {
            var _0x18b1d3 = Object.keys(_0x4ead64);
            for (var _0x3750dc = 0x0; _0x3750dc < _0x18b1d3.length; ++_0x3750dc) {
              if ("number" == typeof _0x4ead64[_0x18b1d3[_0x3750dc]]) {
                this.valuesById[this.values[_0x18b1d3[_0x3750dc]] = _0x4ead64[_0x18b1d3[_0x3750dc]]] = _0x18b1d3[_0x3750dc];
              }
            }
          }
        }
        _0x4ddf1b.fromJSON = function (_0x1e66bc, _0x1ce851) {
          var _0x43e73c = new _0x4ddf1b(_0x1e66bc, _0x1ce851.values, _0x1ce851.options, _0x1ce851.comment, _0x1ce851.comments);
          _0x43e73c.reserved = _0x1ce851.reserved;
          return _0x43e73c;
        };
        _0x4ddf1b.prototype.toJSON = function (_0x1fcfb9) {
          var _0x49790e = !!_0x1fcfb9 && Boolean(_0x1fcfb9.keepComments);
          return _0x425ed1.toObject(['options', this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", _0x49790e ? this.comment : undefined, "comments", _0x49790e ? this.comments : undefined]);
        };
        _0x4ddf1b.prototype.add = function (_0x3be40c, _0x2c49e9, _0x21ea8b) {
          if (!_0x425ed1.isString(_0x3be40c)) {
            throw TypeError("name must be a string");
          }
          if (!_0x425ed1.isInteger(_0x2c49e9)) {
            throw TypeError("id must be an integer");
          }
          if (undefined !== this.values[_0x3be40c]) {
            throw Error("duplicate name '" + _0x3be40c + "' in " + this);
          }
          if (this.isReservedId(_0x2c49e9)) {
            throw Error("id " + _0x2c49e9 + " is reserved in " + this);
          }
          if (this.isReservedName(_0x3be40c)) {
            throw Error("name '" + _0x3be40c + "' is reserved in " + this);
          }
          if (undefined !== this.valuesById[_0x2c49e9]) {
            if (!this.options || !this.options.allow_alias) {
              throw Error("duplicate id " + _0x2c49e9 + " in " + this);
            }
            this.values[_0x3be40c] = _0x2c49e9;
          } else {
            this.valuesById[this.values[_0x3be40c] = _0x2c49e9] = _0x3be40c;
          }
          this.comments[_0x3be40c] = _0x21ea8b || null;
          return this;
        };
        _0x4ddf1b.prototype.remove = function (_0x2c6938) {
          if (!_0x425ed1.isString(_0x2c6938)) {
            throw TypeError("name must be a string");
          }
          var _0x1e951b = this.values[_0x2c6938];
          if (null == _0x1e951b) {
            throw Error("name '" + _0x2c6938 + "' does not exist in " + this);
          }
          delete this.valuesById[_0x1e951b];
          delete this.values[_0x2c6938];
          delete this.comments[_0x2c6938];
          return this;
        };
        _0x4ddf1b.prototype.isReservedId = function (_0x29cdd0) {
          return _0x4c7786.isReservedId(this.reserved, _0x29cdd0);
        };
        _0x4ddf1b.prototype.isReservedName = function (_0xbd8f31) {
          return _0x4c7786.isReservedName(this.reserved, _0xbd8f31);
        };
        _0x729918.exports;
      }, function () {
        return {
          './object': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './namespace': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3cf404.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js', function (_0x10c4f9, _0x9fec8a, _0x246778, _0x17c563, _0x3150b0) {
        _0x246778.exports = function (_0x1f72d9) {
          var _0xd1e2e1;
          var _0x16bf80 = _0x19d6cf.codegen(['m', 'w'], _0x1f72d9.name + "$encode")("if(!w)")("w=Writer.create()");
          var _0x52a1e4 = _0x1f72d9.fieldsArray.slice().sort(_0x19d6cf.compareFieldsById);
          for (var _0x271019 = 0x0; _0x271019 < _0x52a1e4.length; ++_0x271019) {
            var _0x86986b = _0x52a1e4[_0x271019].resolve();
            var _0x9e5582 = _0x1f72d9._fieldsArray.indexOf(_0x86986b);
            var _0x242de9 = _0x86986b.resolvedType instanceof _0x3c4c01 ? "int32" : _0x86986b.type;
            var _0x5e9883 = _0x3ea417.basic[_0x242de9];
            _0xd1e2e1 = 'm' + _0x19d6cf.safeProp(_0x86986b.name);
            if (_0x86986b.map) {
              _0x16bf80("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", _0xd1e2e1, _0x86986b.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", _0xd1e2e1)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (_0x86986b.id << 0x3 | 0x2) >>> 0x0, 0x8 | _0x3ea417.mapKey[_0x86986b.keyType], _0x86986b.keyType);
              if (undefined === _0x5e9883) {
                _0x16bf80("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", _0x9e5582, _0xd1e2e1);
              } else {
                _0x16bf80('.uint32(%i).%s(%s[ks[i]]).ldelim()', 0x10 | _0x5e9883, _0x242de9, _0xd1e2e1);
              }
              _0x16bf80('}')('}');
            } else if (_0x86986b.repeated) {
              _0x16bf80("if(%s!=null&&%s.length){", _0xd1e2e1, _0xd1e2e1);
              if (_0x86986b.packed && undefined !== _0x3ea417.packed[_0x242de9]) {
                _0x16bf80("w.uint32(%i).fork()", (_0x86986b.id << 0x3 | 0x2) >>> 0x0)("for(var i=0;i<%s.length;++i)", _0xd1e2e1)("w.%s(%s[i])", _0x242de9, _0xd1e2e1)('w.ldelim()');
              } else {
                _0x16bf80("for(var i=0;i<%s.length;++i)", _0xd1e2e1);
                if (undefined === _0x5e9883) {
                  if (_0x86986b.resolvedType.group) {
                    _0x16bf80("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0x9e5582, _0xd1e2e1 + "[i]", (_0x86986b.id << 0x3 | 0x3) >>> 0x0, (_0x86986b.id << 0x3 | 0x4) >>> 0x0);
                  } else {
                    _0x16bf80("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", _0x9e5582, _0xd1e2e1 + "[i]", (_0x86986b.id << 0x3 | 0x2) >>> 0x0);
                  }
                } else {
                  _0x16bf80('w.uint32(%i).%s(%s[i])', (_0x86986b.id << 0x3 | _0x5e9883) >>> 0x0, _0x242de9, _0xd1e2e1);
                }
              }
              _0x16bf80('}');
            } else {
              if (_0x86986b.optional) {
                _0x16bf80('if(%s!=null&&Object.hasOwnProperty.call(m,%j))', _0xd1e2e1, _0x86986b.name);
              }
              if (undefined === _0x5e9883) {
                if (_0x86986b.resolvedType.group) {
                  _0x16bf80("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0x9e5582, _0xd1e2e1, (_0x86986b.id << 0x3 | 0x3) >>> 0x0, (_0x86986b.id << 0x3 | 0x4) >>> 0x0);
                } else {
                  _0x16bf80("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", _0x9e5582, _0xd1e2e1, (_0x86986b.id << 0x3 | 0x2) >>> 0x0);
                }
              } else {
                _0x16bf80("w.uint32(%i).%s(%s)", (_0x86986b.id << 0x3 | _0x5e9883) >>> 0x0, _0x242de9, _0xd1e2e1);
              }
            }
          }
          return _0x16bf80("return w");
        };
        var _0x3c4c01 = _0x9fec8a('./enum');
        var _0x3ea417 = _0x9fec8a("./types");
        var _0x19d6cf = _0x9fec8a('./util');
        _0x246778.exports;
      }, function () {
        return {
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js", function (_0x253bc6, _0x4dd498, _0x5cc870, _0x22474d, _0x30a6f8) {
        var _0x853adb = _0x5cc870.exports = _0x4dd498('./index-minimal');
        _0x853adb.build = 'light';
        _0x853adb.load = function (_0x5ae68f, _0x5aa5cc, _0x45c477) {
          if ("function" == typeof _0x5aa5cc) {
            _0x45c477 = _0x5aa5cc;
            _0x5aa5cc = new _0x853adb.Root();
          } else if (!_0x5aa5cc) {
            _0x5aa5cc = new _0x853adb.Root();
          }
          return _0x5aa5cc.load(_0x5ae68f, _0x45c477);
        };
        _0x853adb.loadSync = function (_0x1ebbb9, _0x4baa73) {
          if (!_0x4baa73) {
            _0x4baa73 = new _0x853adb.Root();
          }
          return _0x4baa73.loadSync(_0x1ebbb9);
        };
        _0x853adb.encoder = _0x4dd498("./encoder");
        _0x853adb.decoder = _0x4dd498('./decoder');
        _0x853adb.verifier = _0x4dd498('./verifier');
        _0x853adb.converter = _0x4dd498("./converter");
        _0x853adb.ReflectionObject = _0x4dd498("./object");
        _0x853adb.Namespace = _0x4dd498("./namespace");
        _0x853adb.Root = _0x4dd498("./root");
        _0x853adb.Enum = _0x4dd498('./enum');
        _0x853adb.Type = _0x4dd498("./type");
        _0x853adb.Field = _0x4dd498("./field");
        _0x853adb.OneOf = _0x4dd498('./oneof');
        _0x853adb.MapField = _0x4dd498("./mapfield");
        _0x853adb.Service = _0x4dd498("./service");
        _0x853adb.Method = _0x4dd498("./method");
        _0x853adb.Message = _0x4dd498("./message");
        _0x853adb.wrappers = _0x4dd498("./wrappers");
        _0x853adb.types = _0x4dd498("./types");
        _0x853adb.util = _0x4dd498("./util");
        _0x853adb.ReflectionObject._configure(_0x853adb.Root);
        _0x853adb.Namespace._configure(_0x853adb.Type, _0x853adb.Service, _0x853adb.Enum);
        _0x853adb.Root._configure(_0x853adb.Type);
        _0x853adb.Field._configure(_0x853adb.Type);
        _0x5cc870.exports;
      }, function () {
        return {
          './index-minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js",
          './encoder': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js',
          './decoder': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          './verifier': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          './converter': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          './object': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './namespace': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './root': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './type': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './field': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './oneof': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js',
          './mapfield': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './service': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/service.js',
          './method': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/method.js',
          './message': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          './wrappers': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js",
          './types': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js", function (_0x31610c, _0x7c72a6, _0x5ac2ff, _0x4834cd, _0x137998) {
        _0x5ac2ff.exports = _0x722772;
        var _0x348094 = /[\s{}=;:[\],'"()<>]/g;
        var _0x1fcaca = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
        var _0x4db776 = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
        var _0x528639 = /^ *[*/]+ */;
        var _0xb5c9cd = /^\s*\*?\/*/;
        var _0x1c76d9 = /\n/g;
        var _0x5b16f8 = /\s/;
        var _0xcd04ef = /\\(.?)/g;
        var _0xf97f01 = {
          0x0: "\0",
          'r': "\r",
          'n': "\n",
          't': "\t"
        };
        function _0x5d51dd(_0x358eb8) {
          return _0x358eb8.replace(_0xcd04ef, function (_0x5959d2, _0x1afe88) {
            switch (_0x1afe88) {
              case "\\":
              case '':
                return _0x1afe88;
              default:
                return _0xf97f01[_0x1afe88] || '';
            }
          });
        }
        function _0x722772(_0x146b05, _0x1b6368) {
          _0x146b05 = _0x146b05.toString();
          var _0x2f5ac1 = 0x0;
          var _0x290c9d = _0x146b05.length;
          var _0x36b7b5 = 0x1;
          var _0x1a029d = null;
          var _0xa026 = null;
          var _0x15abf1 = 0x0;
          var _0x1ec03a = false;
          var _0x2d577f = false;
          var _0xb0b624 = [];
          var _0x9d6003 = null;
          function _0x255669(_0x85fe3f, _0x4ab2f3, _0x574052) {
            _0x1a029d = _0x146b05.charAt(_0x85fe3f++);
            _0x15abf1 = _0x36b7b5;
            _0x1ec03a = false;
            _0x2d577f = _0x574052;
            var _0x5ad6cd;
            var _0x495919 = _0x85fe3f - (_0x1b6368 ? 0x2 : 0x3);
            do {
              if (--_0x495919 < 0x0 || "\n" === (_0x5ad6cd = _0x146b05.charAt(_0x495919))) {
                _0x1ec03a = true;
                break;
              }
            } while (" " === _0x5ad6cd || "\t" === _0x5ad6cd);
            var _0x1857cb = _0x146b05.substring(_0x85fe3f, _0x4ab2f3).split(_0x1c76d9);
            for (var _0x1b4e40 = 0x0; _0x1b4e40 < _0x1857cb.length; ++_0x1b4e40) {
              _0x1857cb[_0x1b4e40] = _0x1857cb[_0x1b4e40].replace(_0x1b6368 ? _0xb5c9cd : _0x528639, '').trim();
            }
            _0xa026 = _0x1857cb.join("\n").trim();
          }
          function _0x32cc56(_0x7d61a0) {
            var _0x4c6ae1 = _0x81a356(_0x7d61a0);
            var _0x2c92e5 = _0x146b05.substring(_0x7d61a0, _0x4c6ae1);
            return /^\s*\/{1,2}/.test(_0x2c92e5);
          }
          function _0x81a356(_0x4225e8) {
            for (var _0x1c5a09 = _0x4225e8; _0x1c5a09 < _0x290c9d && "\n" !== _0x146b05.charAt(_0x1c5a09);) {
              _0x1c5a09++;
            }
            return _0x1c5a09;
          }
          function _0x2a6510() {
            if (_0xb0b624.length > 0x0) {
              return _0xb0b624.shift();
            }
            if (_0x9d6003) {
              return function () {
                var _0x3a0b08 = "'" === _0x9d6003 ? _0x4db776 : _0x1fcaca;
                _0x3a0b08.lastIndex = _0x2f5ac1 - 0x1;
                var _0x3fd90d = _0x3a0b08.exec(_0x146b05);
                if (!_0x3fd90d) {
                  throw Error("illegal string (line " + _0x36b7b5 + ')');
                }
                _0x2f5ac1 = _0x3a0b08.lastIndex;
                _0x7c8e7a(_0x9d6003);
                _0x9d6003 = null;
                return _0x5d51dd(_0x3fd90d[0x1]);
              }();
            }
            var _0x2196a9;
            var _0x31309a;
            var _0x428a0e;
            var _0x5af84e;
            var _0x3b08c0;
            var _0x1b0fd3 = 0x0 === _0x2f5ac1;
            do {
              if (_0x2f5ac1 === _0x290c9d) {
                return null;
              }
              for (_0x2196a9 = false; _0x5b16f8.test(_0x428a0e = _0x146b05.charAt(_0x2f5ac1));) {
                if ("\n" === _0x428a0e) {
                  _0x1b0fd3 = true;
                  ++_0x36b7b5;
                }
                if (++_0x2f5ac1 === _0x290c9d) {
                  return null;
                }
              }
              if ('/' === _0x146b05.charAt(_0x2f5ac1)) {
                if (++_0x2f5ac1 === _0x290c9d) {
                  throw Error("illegal comment (line " + _0x36b7b5 + ')');
                }
                if ('/' === _0x146b05.charAt(_0x2f5ac1)) {
                  if (_0x1b6368) {
                    _0x5af84e = _0x2f5ac1;
                    _0x3b08c0 = false;
                    if (_0x32cc56(_0x2f5ac1)) {
                      _0x3b08c0 = true;
                      do {
                        if ((_0x2f5ac1 = _0x81a356(_0x2f5ac1)) === _0x290c9d) {
                          break;
                        }
                        _0x2f5ac1++;
                      } while (_0x32cc56(_0x2f5ac1));
                    } else {
                      _0x2f5ac1 = Math.min(_0x290c9d, _0x81a356(_0x2f5ac1) + 0x1);
                    }
                    if (_0x3b08c0) {
                      _0x255669(_0x5af84e, _0x2f5ac1, _0x1b0fd3);
                    }
                    _0x36b7b5++;
                    _0x2196a9 = true;
                  } else {
                    for (_0x3b08c0 = '/' === _0x146b05.charAt(_0x5af84e = _0x2f5ac1 + 0x1); "\n" !== _0x146b05.charAt(++_0x2f5ac1);) {
                      if (_0x2f5ac1 === _0x290c9d) {
                        return null;
                      }
                    }
                    ++_0x2f5ac1;
                    if (_0x3b08c0) {
                      _0x255669(_0x5af84e, _0x2f5ac1 - 0x1, _0x1b0fd3);
                    }
                    ++_0x36b7b5;
                    _0x2196a9 = true;
                  }
                } else {
                  if ('*' !== (_0x428a0e = _0x146b05.charAt(_0x2f5ac1))) {
                    return '/';
                  }
                  _0x5af84e = _0x2f5ac1 + 0x1;
                  _0x3b08c0 = _0x1b6368 || '*' === _0x146b05.charAt(_0x5af84e);
                  do {
                    if ("\n" === _0x428a0e) {
                      ++_0x36b7b5;
                    }
                    if (++_0x2f5ac1 === _0x290c9d) {
                      throw Error("illegal comment (line " + _0x36b7b5 + ')');
                    }
                    _0x31309a = _0x428a0e;
                    _0x428a0e = _0x146b05.charAt(_0x2f5ac1);
                  } while ('*' !== _0x31309a || '/' !== _0x428a0e);
                  ++_0x2f5ac1;
                  if (_0x3b08c0) {
                    _0x255669(_0x5af84e, _0x2f5ac1 - 0x2, _0x1b0fd3);
                  }
                  _0x2196a9 = true;
                }
              }
            } while (_0x2196a9);
            var _0x10821 = _0x2f5ac1;
            _0x348094.lastIndex = 0x0;
            if (!_0x348094.test(_0x146b05.charAt(_0x10821++))) {
              for (; _0x10821 < _0x290c9d && !_0x348094.test(_0x146b05.charAt(_0x10821));) {
                ++_0x10821;
              }
            }
            var _0x26a0c3 = _0x146b05.substring(_0x2f5ac1, _0x2f5ac1 = _0x10821);
            if (!("\"" !== _0x26a0c3 && "'" !== _0x26a0c3)) {
              _0x9d6003 = _0x26a0c3;
            }
            return _0x26a0c3;
          }
          function _0x7c8e7a(_0x4add09) {
            _0xb0b624.push(_0x4add09);
          }
          function _0x1c9ed3() {
            if (!_0xb0b624.length) {
              var _0x495fc4 = _0x2a6510();
              if (null === _0x495fc4) {
                return null;
              }
              _0x7c8e7a(_0x495fc4);
            }
            return _0xb0b624[0x0];
          }
          return Object.defineProperty({
            'next': _0x2a6510,
            'peek': _0x1c9ed3,
            'push': _0x7c8e7a,
            'skip': function (_0x3381a5, _0x1c0bf3) {
              var _0x5637ed = _0x1c9ed3();
              if (_0x5637ed === _0x3381a5) {
                _0x2a6510();
                return true;
              }
              if (!_0x1c0bf3) {
                throw Error("illegal " + ("token '" + _0x5637ed + "', '" + _0x3381a5 + "' expected") + " (line " + _0x36b7b5 + ')');
              }
              return false;
            },
            'cmnt': function (_0x5074a6) {
              var _0x37e9dc = null;
              if (undefined === _0x5074a6) {
                if (_0x15abf1 === _0x36b7b5 - 0x1 && (_0x1b6368 || '*' === _0x1a029d || _0x1ec03a)) {
                  _0x37e9dc = _0x2d577f ? _0xa026 : null;
                }
              } else {
                if (_0x15abf1 < _0x5074a6) {
                  _0x1c9ed3();
                }
                if (!(_0x15abf1 !== _0x5074a6 || _0x1ec03a || !_0x1b6368 && '/' !== _0x1a029d)) {
                  _0x37e9dc = _0x2d577f ? null : _0xa026;
                }
              }
              return _0x37e9dc;
            }
          }, "line", {
            'get': function () {
              return _0x36b7b5;
            }
          });
        }
        _0x722772.unescape = _0x5d51dd;
        _0x5ac2ff.exports;
      }, {});
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/parse.js", function (_0x52e355, _0x56a5f9, _0x41574c, _0x488762, _0x246842) {
        _0x41574c.exports = _0x2e8749;
        _0x2e8749.filename = null;
        _0x2e8749.defaults = {
          'keepCase': false
        };
        var _0x5b4a1a = _0x56a5f9("./tokenize");
        var _0x293aba = _0x56a5f9("./root");
        var _0x105126 = _0x56a5f9("./type");
        var _0xe92c98 = _0x56a5f9("./field");
        var _0x3a1ea1 = _0x56a5f9("./mapfield");
        var _0x3235fe = _0x56a5f9("./oneof");
        var _0x421c1a = _0x56a5f9('./enum');
        var _0xd9382d = _0x56a5f9("./service");
        var _0x5da629 = _0x56a5f9("./method");
        var _0x555375 = _0x56a5f9("./types");
        var _0x2961f7 = _0x56a5f9("./util");
        var _0x348576 = /^[1-9][0-9]*$/;
        var _0x244a06 = /^-?[1-9][0-9]*$/;
        var _0x3cda71 = /^0[x][0-9a-fA-F]+$/;
        var _0x29b234 = /^-?0[x][0-9a-fA-F]+$/;
        var _0x39e677 = /^0[0-7]+$/;
        var _0x7a5dc = /^-?0[0-7]+$/;
        var _0x2609f1 = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
        var _0xa2f81 = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
        var _0x27fd72 = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
        var _0x13def0 = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
        function _0x2e8749(_0x202975, _0x5e02f8, _0x34bf02) {
          if (!(_0x5e02f8 instanceof _0x293aba)) {
            _0x34bf02 = _0x5e02f8;
            _0x5e02f8 = new _0x293aba();
          }
          if (!_0x34bf02) {
            _0x34bf02 = _0x2e8749.defaults;
          }
          var _0x5d0289;
          var _0x2bffc9;
          var _0x2d12be;
          var _0x4d1d23;
          var _0x303dba;
          var _0x4bc0ad = _0x34bf02.preferTrailingComment || false;
          var _0x5378a0 = _0x5b4a1a(_0x202975, _0x34bf02.alternateCommentMode || false);
          var _0x2380c4 = _0x5378a0.next;
          var _0x3cde1d = _0x5378a0.push;
          var _0x53b94c = _0x5378a0.peek;
          var _0x385269 = _0x5378a0.skip;
          var _0xadee3 = _0x5378a0.cmnt;
          var _0xb35949 = true;
          var _0x2a72fe = false;
          var _0x30fe0c = _0x5e02f8;
          var _0x5a7a05 = _0x34bf02.keepCase ? function (_0x54cb84) {
            return _0x54cb84;
          } : _0x2961f7.camelCase;
          function _0x4e7f82(_0x1b279c, _0x4dceed, _0x509c15) {
            var _0x345752 = _0x2e8749.filename;
            if (!_0x509c15) {
              _0x2e8749.filename = null;
            }
            return Error("illegal " + (_0x4dceed || "token") + " '" + _0x1b279c + "' (" + (_0x345752 ? _0x345752 + ", " : '') + "line " + _0x5378a0.line + ')');
          }
          function _0x15a912() {
            var _0x28f5b5;
            var _0x105bdb = [];
            do {
              if ("\"" !== (_0x28f5b5 = _0x2380c4()) && "'" !== _0x28f5b5) {
                throw _0x4e7f82(_0x28f5b5);
              }
              _0x105bdb.push(_0x2380c4());
              _0x385269(_0x28f5b5);
              _0x28f5b5 = _0x53b94c();
            } while ("\"" === _0x28f5b5 || "'" === _0x28f5b5);
            return _0x105bdb.join('');
          }
          function _0x201e2f(_0x43e2d5) {
            var _0x3a0d98 = _0x2380c4();
            switch (_0x3a0d98) {
              case "'":
              case "\"":
                _0x3cde1d(_0x3a0d98);
                return _0x15a912();
              case "true":
              case "TRUE":
                return true;
              case "false":
              case 'FALSE':
                return false;
            }
            try {
              return function (_0x4c6a6d, _0x4d1b29) {
                var _0x4a14be = 0x1;
                if ('-' === _0x4c6a6d.charAt(0x0)) {
                  _0x4a14be = -0x1;
                  _0x4c6a6d = _0x4c6a6d.substring(0x1);
                }
                switch (_0x4c6a6d) {
                  case 'inf':
                  case 'INF':
                  case 'Inf':
                    return _0x4a14be * Infinity;
                  case "nan":
                  case "NAN":
                  case "Nan":
                  case "NaN":
                    return NaN;
                  case '0':
                    return 0x0;
                }
                if (_0x348576.test(_0x4c6a6d)) {
                  return _0x4a14be * parseInt(_0x4c6a6d, 0xa);
                }
                if (_0x3cda71.test(_0x4c6a6d)) {
                  return _0x4a14be * parseInt(_0x4c6a6d, 0x10);
                }
                if (_0x39e677.test(_0x4c6a6d)) {
                  return _0x4a14be * parseInt(_0x4c6a6d, 0x8);
                }
                if (_0x2609f1.test(_0x4c6a6d)) {
                  return _0x4a14be * parseFloat(_0x4c6a6d);
                }
                throw _0x4e7f82(_0x4c6a6d, "number", _0x4d1b29);
              }(_0x3a0d98, true);
            } catch (_0x3f546d) {
              if (_0x43e2d5 && _0x27fd72.test(_0x3a0d98)) {
                return _0x3a0d98;
              }
              throw _0x4e7f82(_0x3a0d98, "value");
            }
          }
          function _0x433a4d(_0x4fa049, _0x48fee6) {
            var _0x21839f;
            var _0x56ec81;
            do {
              if (!_0x48fee6 || "\"" !== (_0x21839f = _0x53b94c()) && "'" !== _0x21839f) {
                _0x4fa049.push([_0x56ec81 = _0x21dc6b(_0x2380c4()), _0x385269('to', true) ? _0x21dc6b(_0x2380c4()) : _0x56ec81]);
              } else {
                _0x4fa049.push(_0x15a912());
              }
            } while (_0x385269(',', true));
            _0x385269(';');
          }
          function _0x21dc6b(_0x152f62, _0x1f8d45) {
            switch (_0x152f62) {
              case "max":
              case "MAX":
              case "Max":
                return 0x1fffffff;
              case '0':
                return 0x0;
            }
            if (!_0x1f8d45 && '-' === _0x152f62.charAt(0x0)) {
              throw _0x4e7f82(_0x152f62, 'id');
            }
            if (_0x244a06.test(_0x152f62)) {
              return parseInt(_0x152f62, 0xa);
            }
            if (_0x29b234.test(_0x152f62)) {
              return parseInt(_0x152f62, 0x10);
            }
            if (_0x7a5dc.test(_0x152f62)) {
              return parseInt(_0x152f62, 0x8);
            }
            throw _0x4e7f82(_0x152f62, 'id');
          }
          function _0x542861() {
            if (undefined !== _0x5d0289) {
              throw _0x4e7f82("package");
            }
            _0x5d0289 = _0x2380c4();
            if (!_0x27fd72.test(_0x5d0289)) {
              throw _0x4e7f82(_0x5d0289, "name");
            }
            _0x30fe0c = _0x30fe0c.define(_0x5d0289);
            _0x385269(';');
          }
          function _0xc11b80() {
            var _0x187058;
            var _0x530bfd = _0x53b94c();
            switch (_0x530bfd) {
              case "weak":
                _0x187058 = _0x2d12be || (_0x2d12be = []);
                _0x2380c4();
                break;
              case "public":
                _0x2380c4();
              default:
                _0x187058 = _0x2bffc9 || (_0x2bffc9 = []);
            }
            _0x530bfd = _0x15a912();
            _0x385269(';');
            _0x187058.push(_0x530bfd);
          }
          function _0x3aeabf() {
            _0x385269('=');
            _0x4d1d23 = _0x15a912();
            if (!(_0x2a72fe = 'proto3' === _0x4d1d23) && 'proto2' !== _0x4d1d23) {
              throw _0x4e7f82(_0x4d1d23, 'syntax');
            }
            _0x385269(';');
          }
          function _0x5750b1(_0x4f63db, _0x39fd7f) {
            switch (_0x39fd7f) {
              case "option":
                _0x3ff221(_0x4f63db, _0x39fd7f);
                _0x385269(';');
                return true;
              case "message":
                (function (_0x312db5, _0x2afb4b) {
                  if (!_0xa2f81.test(_0x2afb4b = _0x2380c4())) {
                    throw _0x4e7f82(_0x2afb4b, "type name");
                  }
                  var _0x444ff0 = new _0x105126(_0x2afb4b);
                  _0x5cbab6(_0x444ff0, function (_0x5a81b1) {
                    if (!_0x5750b1(_0x444ff0, _0x5a81b1)) {
                      switch (_0x5a81b1) {
                        case "map":
                          !function (_0x26296e) {
                            _0x385269('<');
                            var _0xfe9df5 = _0x2380c4();
                            if (undefined === _0x555375.mapKey[_0xfe9df5]) {
                              throw _0x4e7f82(_0xfe9df5, "type");
                            }
                            _0x385269(',');
                            var _0x41710c = _0x2380c4();
                            if (!_0x27fd72.test(_0x41710c)) {
                              throw _0x4e7f82(_0x41710c, "type");
                            }
                            _0x385269('>');
                            var _0x3ae2e0 = _0x2380c4();
                            if (!_0xa2f81.test(_0x3ae2e0)) {
                              throw _0x4e7f82(_0x3ae2e0, "name");
                            }
                            _0x385269('=');
                            var _0x197bb2 = new _0x3a1ea1(_0x5a7a05(_0x3ae2e0), _0x21dc6b(_0x2380c4()), _0xfe9df5, _0x41710c);
                            _0x5cbab6(_0x197bb2, function (_0x158c82) {
                              if ('option' !== _0x158c82) {
                                throw _0x4e7f82(_0x158c82);
                              }
                              _0x3ff221(_0x197bb2, _0x158c82);
                              _0x385269(';');
                            }, function () {
                              _0x4a4279(_0x197bb2);
                            });
                            _0x26296e.add(_0x197bb2);
                          }(_0x444ff0);
                          break;
                        case "required":
                        case "repeated":
                          _0x566753(_0x444ff0, _0x5a81b1);
                          break;
                        case 'optional':
                          _0x566753(_0x444ff0, _0x2a72fe ? 'proto3_optional' : "optional");
                          break;
                        case "oneof":
                          !function (_0x1ae329, _0x1a5145) {
                            if (!_0xa2f81.test(_0x1a5145 = _0x2380c4())) {
                              throw _0x4e7f82(_0x1a5145, "name");
                            }
                            var _0x1f54d7 = new _0x3235fe(_0x5a7a05(_0x1a5145));
                            _0x5cbab6(_0x1f54d7, function (_0x27675e) {
                              if ("option" === _0x27675e) {
                                _0x3ff221(_0x1f54d7, _0x27675e);
                                _0x385269(';');
                              } else {
                                _0x3cde1d(_0x27675e);
                                _0x566753(_0x1f54d7, "optional");
                              }
                            });
                            _0x1ae329.add(_0x1f54d7);
                          }(_0x444ff0, _0x5a81b1);
                          break;
                        case 'extensions':
                          _0x433a4d(_0x444ff0.extensions || (_0x444ff0.extensions = []));
                          break;
                        case "reserved":
                          _0x433a4d(_0x444ff0.reserved || (_0x444ff0.reserved = []), true);
                          break;
                        default:
                          if (!_0x2a72fe || !_0x27fd72.test(_0x5a81b1)) {
                            throw _0x4e7f82(_0x5a81b1);
                          }
                          _0x3cde1d(_0x5a81b1);
                          _0x566753(_0x444ff0, "optional");
                      }
                    }
                  });
                  _0x312db5.add(_0x444ff0);
                })(_0x4f63db, _0x39fd7f);
                return true;
              case 'enum':
                (function (_0x2d15f8, _0x2f4db0) {
                  if (!_0xa2f81.test(_0x2f4db0 = _0x2380c4())) {
                    throw _0x4e7f82(_0x2f4db0, "name");
                  }
                  var _0x2fa89f = new _0x421c1a(_0x2f4db0);
                  _0x5cbab6(_0x2fa89f, function (_0x534ffa) {
                    switch (_0x534ffa) {
                      case "option":
                        _0x3ff221(_0x2fa89f, _0x534ffa);
                        _0x385269(';');
                        break;
                      case "reserved":
                        _0x433a4d(_0x2fa89f.reserved || (_0x2fa89f.reserved = []), true);
                        break;
                      default:
                        !function (_0xb669ea, _0x3c073f) {
                          if (!_0xa2f81.test(_0x3c073f)) {
                            throw _0x4e7f82(_0x3c073f, "name");
                          }
                          _0x385269('=');
                          var _0x382c47 = _0x21dc6b(_0x2380c4(), true);
                          var _0x5082d3 = {};
                          _0x5cbab6(_0x5082d3, function (_0x3fe253) {
                            if ('option' !== _0x3fe253) {
                              throw _0x4e7f82(_0x3fe253);
                            }
                            _0x3ff221(_0x5082d3, _0x3fe253);
                            _0x385269(';');
                          }, function () {
                            _0x4a4279(_0x5082d3);
                          });
                          _0xb669ea.add(_0x3c073f, _0x382c47, _0x5082d3.comment);
                        }(_0x2fa89f, _0x534ffa);
                    }
                  });
                  _0x2d15f8.add(_0x2fa89f);
                })(_0x4f63db, _0x39fd7f);
                return true;
              case "service":
                (function (_0x44fc69, _0xb14a5a) {
                  if (!_0xa2f81.test(_0xb14a5a = _0x2380c4())) {
                    throw _0x4e7f82(_0xb14a5a, "service name");
                  }
                  var _0x2fb91b = new _0xd9382d(_0xb14a5a);
                  _0x5cbab6(_0x2fb91b, function (_0xba7af2) {
                    if (!_0x5750b1(_0x2fb91b, _0xba7af2)) {
                      if ("rpc" !== _0xba7af2) {
                        throw _0x4e7f82(_0xba7af2);
                      }
                      !function (_0x5e577c, _0x39535c) {
                        var _0x1a6cb6 = _0xadee3();
                        var _0x5b1b84 = _0x39535c;
                        if (!_0xa2f81.test(_0x39535c = _0x2380c4())) {
                          throw _0x4e7f82(_0x39535c, "name");
                        }
                        var _0x14315c;
                        var _0x40db00;
                        var _0x29380d;
                        var _0x295f78;
                        var _0x2e6c29 = _0x39535c;
                        _0x385269('(');
                        if (_0x385269('stream', true)) {
                          _0x40db00 = true;
                        }
                        if (!_0x27fd72.test(_0x39535c = _0x2380c4())) {
                          throw _0x4e7f82(_0x39535c);
                        }
                        _0x14315c = _0x39535c;
                        _0x385269(')');
                        _0x385269("returns");
                        _0x385269('(');
                        if (_0x385269("stream", true)) {
                          _0x295f78 = true;
                        }
                        if (!_0x27fd72.test(_0x39535c = _0x2380c4())) {
                          throw _0x4e7f82(_0x39535c);
                        }
                        _0x29380d = _0x39535c;
                        _0x385269(')');
                        var _0x1c0176 = new _0x5da629(_0x2e6c29, _0x5b1b84, _0x14315c, _0x29380d, _0x40db00, _0x295f78);
                        _0x1c0176.comment = _0x1a6cb6;
                        _0x5cbab6(_0x1c0176, function (_0x265762) {
                          if ("option" !== _0x265762) {
                            throw _0x4e7f82(_0x265762);
                          }
                          _0x3ff221(_0x1c0176, _0x265762);
                          _0x385269(';');
                        });
                        _0x5e577c.add(_0x1c0176);
                      }(_0x2fb91b, _0xba7af2);
                    }
                  });
                  _0x44fc69.add(_0x2fb91b);
                })(_0x4f63db, _0x39fd7f);
                return true;
              case "extend":
                (function (_0x543187, _0x379c38) {
                  if (!_0x27fd72.test(_0x379c38 = _0x2380c4())) {
                    throw _0x4e7f82(_0x379c38, 'reference');
                  }
                  var _0x152b39 = _0x379c38;
                  _0x5cbab6(null, function (_0x194824) {
                    switch (_0x194824) {
                      case "required":
                      case "repeated":
                        _0x566753(_0x543187, _0x194824, _0x152b39);
                        break;
                      case "optional":
                        _0x566753(_0x543187, _0x2a72fe ? "proto3_optional" : "optional", _0x152b39);
                        break;
                      default:
                        if (!_0x2a72fe || !_0x27fd72.test(_0x194824)) {
                          throw _0x4e7f82(_0x194824);
                        }
                        _0x3cde1d(_0x194824);
                        _0x566753(_0x543187, "optional", _0x152b39);
                    }
                  });
                })(_0x4f63db, _0x39fd7f);
                return true;
            }
            return false;
          }
          function _0x5cbab6(_0x4ac96f, _0xd4c38e, _0x5312be) {
            var _0x11dc87 = _0x5378a0.line;
            if (_0x4ac96f) {
              if ("string" != typeof _0x4ac96f.comment) {
                _0x4ac96f.comment = _0xadee3();
              }
              _0x4ac96f.filename = _0x2e8749.filename;
            }
            if (_0x385269('{', true)) {
              for (var _0x1b2739; '}' !== (_0x1b2739 = _0x2380c4());) {
                _0xd4c38e(_0x1b2739);
              }
              _0x385269(';', true);
            } else {
              if (_0x5312be) {
                _0x5312be();
              }
              _0x385269(';');
              if (_0x4ac96f && ('string' != typeof _0x4ac96f.comment || _0x4bc0ad)) {
                _0x4ac96f.comment = _0xadee3(_0x11dc87) || _0x4ac96f.comment;
              }
            }
          }
          function _0x566753(_0x4f5ae9, _0x175d14, _0x1f9220) {
            var _0x45c08a = _0x2380c4();
            if ("group" !== _0x45c08a) {
              if (!_0x27fd72.test(_0x45c08a)) {
                throw _0x4e7f82(_0x45c08a, "type");
              }
              var _0x550cb0 = _0x2380c4();
              if (!_0xa2f81.test(_0x550cb0)) {
                throw _0x4e7f82(_0x550cb0, 'name');
              }
              _0x550cb0 = _0x5a7a05(_0x550cb0);
              _0x385269('=');
              var _0x1d535b = new _0xe92c98(_0x550cb0, _0x21dc6b(_0x2380c4()), _0x45c08a, _0x175d14, _0x1f9220);
              _0x5cbab6(_0x1d535b, function (_0x5080c4) {
                if ("option" !== _0x5080c4) {
                  throw _0x4e7f82(_0x5080c4);
                }
                _0x3ff221(_0x1d535b, _0x5080c4);
                _0x385269(';');
              }, function () {
                _0x4a4279(_0x1d535b);
              });
              if ("proto3_optional" === _0x175d14) {
                var _0x332862 = new _0x3235fe('_' + _0x550cb0);
                _0x1d535b.setOption('proto3_optional', true);
                _0x332862.add(_0x1d535b);
                _0x4f5ae9.add(_0x332862);
              } else {
                _0x4f5ae9.add(_0x1d535b);
              }
              if (!(_0x2a72fe || !_0x1d535b.repeated || undefined === _0x555375.packed[_0x45c08a] && undefined !== _0x555375.basic[_0x45c08a])) {
                _0x1d535b.setOption("packed", false, true);
              }
            } else {
              !function (_0x27e131, _0x14ef80) {
                var _0x56fd5e = _0x2380c4();
                if (!_0xa2f81.test(_0x56fd5e)) {
                  throw _0x4e7f82(_0x56fd5e, "name");
                }
                var _0x3582bb = _0x2961f7.lcFirst(_0x56fd5e);
                if (_0x56fd5e === _0x3582bb) {
                  _0x56fd5e = _0x2961f7.ucFirst(_0x56fd5e);
                }
                _0x385269('=');
                var _0x2851fe = _0x21dc6b(_0x2380c4());
                var _0x450c0f = new _0x105126(_0x56fd5e);
                _0x450c0f.group = true;
                var _0x5d1700 = new _0xe92c98(_0x3582bb, _0x2851fe, _0x56fd5e, _0x14ef80);
                _0x5d1700.filename = _0x2e8749.filename;
                _0x5cbab6(_0x450c0f, function (_0x541686) {
                  switch (_0x541686) {
                    case "option":
                      _0x3ff221(_0x450c0f, _0x541686);
                      _0x385269(';');
                      break;
                    case 'required':
                    case "repeated":
                      _0x566753(_0x450c0f, _0x541686);
                      break;
                    case 'optional':
                      _0x566753(_0x450c0f, _0x2a72fe ? 'proto3_optional' : "optional");
                      break;
                    default:
                      throw _0x4e7f82(_0x541686);
                  }
                });
                _0x27e131.add(_0x450c0f).add(_0x5d1700);
              }(_0x4f5ae9, _0x175d14);
            }
          }
          function _0x3ff221(_0x4425a3, _0x587174) {
            var _0x778d4d = _0x385269('(', true);
            if (!_0x27fd72.test(_0x587174 = _0x2380c4())) {
              throw _0x4e7f82(_0x587174, "name");
            }
            var _0x3c9fa0;
            var _0x347fad = _0x587174;
            var _0x2f8601 = _0x347fad;
            if (_0x778d4d) {
              _0x385269(')');
              _0x2f8601 = _0x347fad = '(' + _0x347fad + ')';
              _0x587174 = _0x53b94c();
              if (_0x13def0.test(_0x587174)) {
                _0x3c9fa0 = _0x587174.substr(0x1);
                _0x347fad += _0x587174;
                _0x2380c4();
              }
            }
            _0x385269('=');
            (function (_0x319947, _0x52c1d2, _0x49dae4, _0x29f127) {
              if (_0x319947.setParsedOption) {
                _0x319947.setParsedOption(_0x52c1d2, _0x49dae4, _0x29f127);
              }
            })(_0x4425a3, _0x2f8601, _0x60c2a1(_0x4425a3, _0x347fad), _0x3c9fa0);
          }
          function _0x60c2a1(_0x22d1cc, _0x2570f9) {
            if (_0x385269('{', true)) {
              for (var _0x2771fa = {}; !_0x385269('}', true);) {
                if (!_0xa2f81.test(_0x303dba = _0x2380c4())) {
                  throw _0x4e7f82(_0x303dba, "name");
                }
                var _0x4200b6;
                var _0x14601b = _0x303dba;
                if ('{' === _0x53b94c()) {
                  _0x4200b6 = _0x60c2a1(_0x22d1cc, _0x2570f9 + '.' + _0x303dba);
                } else {
                  _0x385269(':');
                  if ('{' === _0x53b94c()) {
                    _0x4200b6 = _0x60c2a1(_0x22d1cc, _0x2570f9 + '.' + _0x303dba);
                  } else {
                    _0x4200b6 = _0x201e2f(true);
                    _0x464927(_0x22d1cc, _0x2570f9 + '.' + _0x303dba, _0x4200b6);
                  }
                }
                var _0x40ab26 = _0x2771fa[_0x14601b];
                if (_0x40ab26) {
                  _0x4200b6 = [].concat(_0x40ab26).concat(_0x4200b6);
                }
                _0x2771fa[_0x14601b] = _0x4200b6;
                _0x385269(',', true);
              }
              return _0x2771fa;
            }
            var _0x2257cc = _0x201e2f(true);
            _0x464927(_0x22d1cc, _0x2570f9, _0x2257cc);
            return _0x2257cc;
          }
          function _0x464927(_0x1f1279, _0x3022b3, _0x3008a4) {
            if (_0x1f1279.setOption) {
              _0x1f1279.setOption(_0x3022b3, _0x3008a4);
            }
          }
          function _0x4a4279(_0x13f4c5) {
            if (_0x385269('[', true)) {
              do {
                _0x3ff221(_0x13f4c5, "option");
              } while (_0x385269(',', true));
              _0x385269(']');
            }
            return _0x13f4c5;
          }
          for (; null !== (_0x303dba = _0x2380c4());) {
            switch (_0x303dba) {
              case 'package':
                if (!_0xb35949) {
                  throw _0x4e7f82(_0x303dba);
                }
                _0x542861();
                break;
              case "import":
                if (!_0xb35949) {
                  throw _0x4e7f82(_0x303dba);
                }
                _0xc11b80();
                break;
              case "syntax":
                if (!_0xb35949) {
                  throw _0x4e7f82(_0x303dba);
                }
                _0x3aeabf();
                break;
              case 'option':
                _0x3ff221(_0x30fe0c, _0x303dba);
                _0x385269(';');
                break;
              default:
                if (_0x5750b1(_0x30fe0c, _0x303dba)) {
                  _0xb35949 = false;
                  continue;
                }
                throw _0x4e7f82(_0x303dba);
            }
          }
          _0x2e8749.filename = null;
          return {
            'package': _0x5d0289,
            'imports': _0x2bffc9,
            'weakImports': _0x2d12be,
            'syntax': _0x4d1d23,
            'root': _0x5e02f8
          };
        }
        _0x41574c.exports;
      }, function () {
        return {
          './tokenize': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          './root': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          './type': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './field': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './mapfield': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './oneof': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js',
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './service': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/service.js',
          './method': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/method.js',
          './types': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3cf404.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/common.js', function (_0x5a1620, _0x2edf0f, _0x3899cc, _0x2cf08b, _0x42fa20) {
        _0x3899cc.exports = _0x2cd828;
        var _0xb06e88;
        var _0x423f0b = /\/|\./;
        function _0x2cd828(_0x38f1ff, _0x1c70fe) {
          if (!_0x423f0b.test(_0x38f1ff)) {
            _0x38f1ff = "google/protobuf/" + _0x38f1ff + ".proto";
            _0x1c70fe = {
              'nested': {
                'google': {
                  'nested': {
                    'protobuf': {
                      'nested': _0x1c70fe
                    }
                  }
                }
              }
            };
          }
          _0x2cd828[_0x38f1ff] = _0x1c70fe;
        }
        _0x2cd828("any", {
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
        _0x2cd828("duration", {
          'Duration': _0xb06e88 = {
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
        _0x2cd828("timestamp", {
          'Timestamp': _0xb06e88
        });
        _0x2cd828("empty", {
          'Empty': {
            'fields': {}
          }
        });
        _0x2cd828("struct", {
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
                'oneof': ["nullValue", "numberValue", 'stringValue', "boolValue", "structValue", 'listValue']
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
        _0x2cd828("wrappers", {
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
                'type': 'bool',
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
        _0x2cd828("field_mask", {
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
        _0x2cd828.get = function (_0x4d6e14) {
          return _0x2cd828[_0x4d6e14] || null;
        };
        _0x3899cc.exports;
      }, {});
      var _0x2efd6d;
      _0x3cf404.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/index.js', function (_0x135530, _0x41a7e7, _0x4b1fc7, _0x13980e, _0x1b97ac) {
        var _0x496b54 = _0x4b1fc7.exports = _0x41a7e7("./index-light");
        _0x496b54.build = 'full';
        _0x496b54.tokenize = _0x41a7e7('./tokenize');
        _0x496b54.parse = _0x41a7e7('./parse');
        _0x496b54.common = _0x41a7e7("./common");
        _0x496b54.Root._configure(_0x496b54.Type, _0x496b54.parse, _0x496b54.common);
        _0x4b1fc7.exports;
      }, function () {
        return {
          './index-light': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js",
          './tokenize': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          './parse': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/parse.js",
          './common': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/common.js'
        };
      });
      var _0x5b2a5a;
      var _0x1b4aed;
      var _0x2bc445;
      var _0x57d43c;
      var _0x128074;
      var _0x22bdcf;
      var _0x42676d;
      var _0x4cb1c7;
      var _0x127ab6;
      var _0x22439e;
      var _0x516a36;
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/index.js", function (_0x22b9ab, _0x311be1, _0x57950a, _0x3f9e51, _0x44bd9e) {
        _0x57950a.exports = _0x311be1("./src/index");
        _0x2efd6d = _0x57950a.exports;
      }, function () {
        return {
          './src/index': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/index.js'
        };
      });
      _0x3cf404.require("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/index.js");
      _0xe3c15f._RF.push({}, "77acaFcNgVDULwRQEtO5wYa", 'BigWinComponent', undefined);
      var _0x388924 = {
        'Big': {
          'Start': "BigWin_Start",
          'End': "BigWin_End"
        },
        'Mega': {
          'Start': 'MegaWin_Start',
          'End': "MegaWin_End"
        },
        'Super': {
          'Start': "SuperWin_Start",
          'End': "SuperWin_End"
        }
      };
      var _0x23800e = _0x9f6cc7.property;
      _0x5b2a5a = _0x23800e({
        'type': _0x44246d.Skeleton,
        'tooltip': "spine"
      });
      _0x1b4aed = _0x23800e({
        'type': _0x44246d.Skeleton,
        'tooltip': '遮罩'
      });
      _0x2bc445 = _0x23800e({
        'type': _0x44246d.Skeleton,
        'tooltip': "Extra Spine"
      });
      _0x57d43c = _0x23800e({
        'type': _0x4134c8,
        'tooltip': '贏分'
      });
      _0x128074 = _0x23800e({
        'type': _0xe58c14,
        'tooltip': "End extra effect delay time"
      });
      _0x516a36 = function (_0x3e4bae) {
        function _0x195dcf() {
          var _0x1a8e31;
          var _0x5d43ca = arguments.length;
          var _0x2cee43 = new Array(_0x5d43ca);
          for (var _0x3dc138 = 0x0; _0x3dc138 < _0x5d43ca; _0x3dc138++) {
            _0x2cee43[_0x3dc138] = arguments[_0x3dc138];
          }
          _0x3517d5(_0x1a8e31 = _0x3e4bae.call.apply(_0x3e4bae, [this].concat(_0x2cee43)) || this, "m_spine", _0x22bdcf, _0x1862e3(_0x1a8e31));
          _0x3517d5(_0x1a8e31, "m_maskSpine", _0x42676d, _0x1862e3(_0x1a8e31));
          _0x3517d5(_0x1a8e31, "m_extraSpine", _0x4cb1c7, _0x1862e3(_0x1a8e31));
          _0x3517d5(_0x1a8e31, "m_winLabel", _0x127ab6, _0x1862e3(_0x1a8e31));
          _0x3517d5(_0x1a8e31, 'm_endExtraDelayTime', _0x22439e, _0x1862e3(_0x1a8e31));
          _0x1a8e31.m_isEnd = true;
          _0x1a8e31.m_isShowEnd = true;
          _0x1a8e31.m_isShowAward = false;
          _0x1a8e31.m_eventCb = null;
          _0x1a8e31.m_showValueCb = null;
          _0x1a8e31.m_cancelCb = null;
          _0x1a8e31.m_lvl = 0x0;
          _0x1a8e31.m_nowLvl = 0x0;
          _0x1a8e31.m_win = 0x0;
          _0x1a8e31.m_showWin = 0x0;
          _0x1a8e31.m_step = 0x0;
          _0x1a8e31.m_isShowingExtraEnd = false;
          return _0x1a8e31;
        }
        _0x47cbbc(_0x195dcf, _0x3e4bae);
        var _0xe38d51 = _0x195dcf.prototype;
        _0xe38d51.update = function (_0x288649) {
          if (this.m_isShowAward) {
            this.m_showWin += this.m_step * _0x288649;
            if (this.m_showWin >= this.m_win) {
              this.m_showWin = this.m_win;
              this.m_isShowAward = false;
            }
            this.m_winLabel.string = _0xfd5517.FormatNumberThousands(_0xfd5517.strip(this.m_showValueCb ? this.m_showValueCb(this.m_showWin) : this.m_showWin), _0xfd5517.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          }
        };
        _0xe38d51.Init = function (_0x2ffd74, _0x314151) {
          this.m_eventCb = _0x2ffd74;
          this.m_showValueCb = _0x314151;
          if (this.m_maskSpine) {
            this.m_maskSpine.node.active = false;
          }
        };
        _0xe38d51.Show = function (_0xf96c03, _0x18ac6d, _0x109ed5) {
          if (undefined === _0x109ed5) {
            _0x109ed5 = true;
          }
          if (_0xf96c03 > 0x0 && _0x18ac6d > _0x195dcf.Level.NONE && _0x18ac6d <= _0x195dcf.Level.SUPER) {
            this.m_isEnd = false;
            this.m_lvl = _0x18ac6d;
            this.m_nowLvl = _0x109ed5 ? 0x0 : _0x18ac6d - 0x1;
            this.m_win = _0xf96c03;
            this.m_showWin = 0x0;
            this.m_winLabel.string = '0';
            this.m_isShowEnd = false;
            var _0x5ea882 = 0x0;
            for (var _0x5b908f = _0x109ed5 ? _0x195dcf.Level.BIG : this.m_lvl; _0x5b908f <= this.m_lvl; _0x5b908f++) {
              var _0x309a98 = '';
              var _0x41825d = '';
              switch (_0x5b908f) {
                case _0x195dcf.Level.BIG:
                  _0x309a98 = _0x388924.Big.Start;
                  _0x41825d = _0x388924.Big.End;
                  break;
                case _0x195dcf.Level.MEGA:
                  _0x309a98 = _0x388924.Mega.Start;
                  _0x41825d = _0x388924.Mega.End;
                  break;
                case _0x195dcf.Level.SUPER:
                  _0x309a98 = _0x388924.Super.Start;
                  _0x41825d = _0x388924.Super.End;
              }
              if ('' !== _0x309a98 && '' !== _0x41825d) {
                var _0xd9eef6 = this.m_spine.findAnimation(_0x309a98);
                if (_0xd9eef6) {
                  _0x5ea882 += _0xd9eef6.duration;
                }
              }
            }
            this.m_step = _0xfd5517.divide(this.m_win, _0x5ea882 || 0x5);
            this.m_isShowAward = true;
            if (this.m_maskSpine) {
              this.m_maskSpine.node.active = true;
              this.PlayAnimation(this.m_maskSpine, "BigWin_Start");
            }
            this.ShowNext();
          }
        };
        _0xe38d51.Stop = function () {
          if (!this.m_isShowEnd) {
            if (this.m_cancelCb) {
              this.m_cancelCb();
            }
            this.ShowEnd();
          }
        };
        _0xe38d51.SetSkin = function (_0x8f7e54) {
          this.m_spine.setSkin(_0x8f7e54);
        };
        _0xe38d51.ShowNext = function () {
          var _0x76043e = _0x2eaa1b(_0x5266ea().mark(function _0x36224a() {
            var _0x4391fd;
            return _0x5266ea().wrap(function (_0x12b4b2) {
              for (;;) {
                switch (_0x12b4b2.prev = _0x12b4b2.next) {
                  case 0x0:
                    if (this.m_nowLvl !== this.m_lvl) {
                      _0x12b4b2.next = 0x4;
                      break;
                    }
                    this.ShowEnd();
                    _0x12b4b2.next = 0x17;
                    break;
                  case 0x4:
                    this.m_nowLvl++;
                    _0x4391fd = false;
                    _0x12b4b2.t0 = this.m_nowLvl;
                    _0x12b4b2.next = _0x12b4b2.t0 === _0x195dcf.Level.BIG ? 0x9 : _0x12b4b2.t0 === _0x195dcf.Level.MEGA ? 0xe : _0x12b4b2.t0 === _0x195dcf.Level.SUPER ? 0x12 : 0x16;
                    break;
                  case 0x9:
                    this.CheckExtraSpineStart();
                    _0x12b4b2.next = 0xc;
                    return this.PlayAnimation(this.m_spine, _0x388924.Big.Start);
                  case 0xc:
                    _0x4391fd = _0x12b4b2.sent;
                    return _0x12b4b2.abrupt("break", 0x16);
                  case 0xe:
                    _0x12b4b2.next = 0x10;
                    return this.PlayAnimation(this.m_spine, _0x388924.Mega.Start);
                  case 0x10:
                    _0x4391fd = _0x12b4b2.sent;
                    return _0x12b4b2.abrupt("break", 0x16);
                  case 0x12:
                    _0x12b4b2.next = 0x14;
                    return this.PlayAnimation(this.m_spine, _0x388924.Super.Start);
                  case 0x14:
                    _0x4391fd = _0x12b4b2.sent;
                    return _0x12b4b2.abrupt("break", 0x16);
                  case 0x16:
                    if (!_0x4391fd) {
                      this.ShowNext();
                    }
                  case 0x17:
                  case 'end':
                    return _0x12b4b2.stop();
                }
              }
            }, _0x36224a, this);
          }));
          return function () {
            return _0x76043e.apply(this, arguments);
          };
        }();
        _0xe38d51.ShowEnd = function () {
          var _0x17d731 = _0x2eaa1b(_0x5266ea().mark(function _0x103923() {
            var _0xc46367;
            return _0x5266ea().wrap(function (_0x389528) {
              for (;;) {
                switch (_0x389528.prev = _0x389528.next) {
                  case 0x0:
                    if (!this.m_isShowEnd) {
                      _0x389528.next = 0x2;
                      break;
                    }
                    return _0x389528.abrupt("return");
                  case 0x2:
                    this.m_isShowEnd = true;
                    this.m_isShowAward = false;
                    this.m_winLabel.string = _0xfd5517.FormatNumberThousands(_0xfd5517.strip(this.m_showValueCb ? this.m_showValueCb(this.m_win) : this.m_win), _0xfd5517.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
                    if (this.m_maskSpine) {
                      this.PlayAnimation(this.m_maskSpine, "BigWin_End");
                    }
                    _0xc46367 = '';
                    _0x389528.t0 = this.m_lvl;
                    _0x389528.next = _0x389528.t0 === _0x195dcf.Level.BIG ? 0xa : _0x389528.t0 === _0x195dcf.Level.MEGA ? 0xc : _0x389528.t0 === _0x195dcf.Level.SUPER ? 0xe : 0x10;
                    break;
                  case 0xa:
                    _0xc46367 = _0x388924.Big.End;
                    return _0x389528.abrupt("break", 0x10);
                  case 0xc:
                    _0xc46367 = _0x388924.Mega.End;
                    return _0x389528.abrupt('break', 0x10);
                  case 0xe:
                    _0xc46367 = _0x388924.Super.End;
                    return _0x389528.abrupt("break", 0x10);
                  case 0x10:
                    if ('' === _0xc46367) {
                      _0x389528.next = 0x15;
                      break;
                    }
                    _0x389528.next = 0x13;
                    return Promise.all([this.CheckExtraSpineEnd(), this.PlayAnimation(this.m_spine, _0xc46367)]);
                  case 0x13:
                    _0x389528.next = 0x16;
                    break;
                  case 0x15:
                    console.error("BigWinComponent ShowEnd animName is empty!", this.m_lvl);
                  case 0x16:
                    if (this.m_maskSpine) {
                      this.m_maskSpine.node.active = false;
                    }
                    this.m_isEnd = true;
                  case 0x18:
                  case "end":
                    return _0x389528.stop();
                }
              }
            }, _0x103923, this);
          }));
          return function () {
            return _0x17d731.apply(this, arguments);
          };
        }();
        _0xe38d51.CheckExtraSpineStart = function () {
          var _0x2c74b6 = this;
          if (this.m_extraSpine) {
            this.m_extraSpine.node.active = true;
            this.PlayAnimation(this.m_extraSpine, "Start").then(function () {
              if (!_0x2c74b6.m_isShowingExtraEnd) {
                _0x2c74b6.PlayAnimation(_0x2c74b6.m_extraSpine, "Loop", true);
              }
            });
          }
        };
        _0xe38d51.CheckExtraSpineEnd = function () {
          var _0x49a243 = _0x2eaa1b(_0x5266ea().mark(function _0x12abee() {
            return _0x5266ea().wrap(function (_0x534f1) {
              for (;;) {
                switch (_0x534f1.prev = _0x534f1.next) {
                  case 0x0:
                    if (this.m_extraSpine) {
                      _0x534f1.next = 0x2;
                      break;
                    }
                    return _0x534f1.abrupt("return");
                  case 0x2:
                    this.m_isShowingExtraEnd = true;
                    _0x534f1.next = 0x5;
                    return _0x166f61.Wait(this, this.m_endExtraDelayTime);
                  case 0x5:
                    _0x534f1.next = 0x7;
                    return this.PlayAnimation(this.m_extraSpine, 'End');
                  case 0x7:
                    this.m_isShowingExtraEnd = false;
                  case 0x8:
                  case "end":
                    return _0x534f1.stop();
                }
              }
            }, _0x12abee, this);
          }));
          return function () {
            return _0x49a243.apply(this, arguments);
          };
        }();
        _0xe38d51.PlayAnimation = function (_0x6465f9, _0x45b07a, _0x287efc, _0x915b0c) {
          var _0x15472e = this;
          if (undefined === _0x287efc) {
            _0x287efc = false;
          }
          if (undefined === _0x915b0c) {
            _0x915b0c = 0x0;
          }
          return new Promise(function (_0x262c4b) {
            var _0x2b5321 = false;
            _0x15472e.m_cancelCb = function () {
              _0x262c4b(_0x2b5321 = true);
            };
            _0x6465f9.clearTrack(_0x915b0c);
            _0x6465f9.setToSetupPose();
            var _0x5ba1ec = _0x6465f9.setAnimation(_0x915b0c, _0x45b07a, _0x287efc);
            var _0x36d399 = function () {
              _0x15472e.m_cancelCb = null;
              _0x262c4b(_0x2b5321);
            };
            if (_0x5ba1ec) {
              _0x6465f9.setTrackEventListener(_0x5ba1ec, function (_0x254f23, _0x5d5f4a) {
                var _0x20109a = _0x5d5f4a.data.name;
                var _0x10fe0c = _0x5d5f4a.stringValue;
                if (_0x15472e.m_eventCb) {
                  _0x15472e.m_eventCb(_0x20109a, _0x10fe0c, _0x45b07a);
                }
              });
              _0x6465f9.setTrackCompleteListener(_0x5ba1ec, function () {
                _0x6465f9.setTrackCompleteListener(_0x5ba1ec, function () {});
                _0x36d399();
              });
            } else {
              _0x6465f9.setCompleteListener(function () {
                _0x6465f9.setCompleteListener(null);
                _0x36d399();
              });
            }
          });
        };
        _0x17689c(_0x195dcf, [{
          'key': 'IsEnd',
          'get': function () {
            return this.m_isEnd;
          },
          'set': function (_0x1a8005) {
            this.m_isEnd = _0x1a8005;
          }
        }]);
        return _0x195dcf;
      }(_0x55612a);
      _0x516a36.Level = {
        'NONE': 0x0,
        'BIG': 0x1,
        'MEGA': 0x2,
        'SUPER': 0x3
      };
      _0x22bdcf = _0x58cf1d(_0x516a36.prototype, "m_spine", [_0x5b2a5a], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x42676d = _0x58cf1d(_0x516a36.prototype, 'm_maskSpine', [_0x1b4aed], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4cb1c7 = _0x58cf1d(_0x516a36.prototype, "m_extraSpine", [_0x2bc445], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x127ab6 = _0x58cf1d(_0x516a36.prototype, "m_winLabel", [_0x57d43c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x22439e = _0x58cf1d(_0x516a36.prototype, 'm_endExtraDelayTime', [_0x128074], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return 1.5;
        }
      });
      var _0x4016e2;
      var _0x58d70f;
      var _0x210567;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "74f7dljUZhO+6o0Pu2tNSAk", 'ConnectionManager', undefined);
      (function (_0x1a16aa) {
        _0x1a16aa[_0x1a16aa.TYPE_HTTP = 0x1] = "TYPE_HTTP";
        _0x1a16aa[_0x1a16aa.TYPE_WEBSOCKET = 0x2] = "TYPE_WEBSOCKET";
        _0x1a16aa[_0x1a16aa.MAX = 0x3] = "MAX";
      })(_0x4016e2 || (_0x4016e2 = {}));
      (function (_0x5e047e) {
        _0x5e047e.TYPE_GET = "get";
        _0x5e047e.TYPE_POST = "post";
      })(_0x58d70f || (_0x58d70f = {}));
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "f34139liEtOX7eeljN8Cz8w", "index", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, '34d81gQVlJAaJJHg6IUTjH6', 'TimeBool', undefined);
      (function (_0x1698fa) {
        _0x1698fa[_0x1698fa.MAX_UINT = 0xffffffff] = "MAX_UINT";
        _0x1698fa[_0x1698fa.MAX_UINT64 = 0x10000000000000000] = 'MAX_UINT64';
        _0x1698fa[_0x1698fa.MAX_INT = -0x1] = "MAX_INT";
        _0x1698fa[_0x1698fa.MIN_INT = 0x0] = "MIN_INT";
      })(_0x210567 || (_0x210567 = {}));
      var _0xa1e2fa;
      var _0x53f865;
      var _0x506c62;
      var _0x4a5c99;
      var _0x44c84f;
      var _0x591d2e;
      var _0x4840eb;
      var _0x3ee1a8;
      var _0x11ccf7;
      var _0x484bde;
      var _0x22a16a;
      var _0x2ae666;
      var _0x2bd9a6;
      var _0x257c70;
      var _0x8822b9;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "1d854+nhA1JgLXZLaNHz9eU", "LicenseSetting", undefined);
      (function (_0x15289b) {
        _0x15289b[_0x15289b.ShopingMall = 0x1] = "ShopingMall";
        _0x15289b[_0x15289b.ShowAutoSetting = 0x10] = "ShowAutoSetting";
        _0x15289b[_0x15289b.NoSoundUnder1 = 0x11] = "NoSoundUnder1";
        _0x15289b[_0x15289b.NoQuickSpin = 0x12] = 'NoQuickSpin';
        _0x15289b[_0x15289b.CloseManual = 0x27] = "CloseManual";
        _0x15289b[_0x15289b.CloseExtraBet = 0x3d] = "CloseExtraBet";
      })(_0xa1e2fa || (_0xa1e2fa = {}));
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "0c18bO40hVJB4/zzDByb8vr", "ManualComponent", undefined);
      var _0x4e2eff = _0x9f6cc7.ccclass;
      var _0x417c27 = _0x9f6cc7.property;
      _0x53f865 = _0x4e2eff("ManualComponent");
      _0x506c62 = _0x417c27({
        'type': _0x57be55,
        'tooltip': "特色說明按鈕(新版跑馬燈)"
      });
      _0x4a5c99 = _0x417c27({
        'type': _0x57be55,
        'tooltip': "特色說明本體(新版跑馬燈)"
      });
      _0x44c84f = _0x417c27({
        'type': _0x57be55,
        'tooltip': "特色說明關閉按鈕(新版跑馬燈)"
      });
      _0x591d2e = _0x417c27({
        'type': _0x57be55,
        'tooltip': "特色說明周圍關閉按鈕(新版跑馬燈)"
      });
      _0x4840eb = _0x417c27({
        'type': _0x57e8d7,
        'tooltip': "特色說明內容(新版跑馬燈)"
      });
      _0x3ee1a8 = _0x417c27({
        'type': _0x57e8d7,
        'tooltip': '標題'
      });
      _0x11ccf7 = function (_0x81ec1) {
        function _0x5850fe() {
          var _0x490ea8;
          var _0x79de7e = arguments.length;
          var _0x1f39a5 = new Array(_0x79de7e);
          for (var _0x20014a = 0x0; _0x20014a < _0x79de7e; _0x20014a++) {
            _0x1f39a5[_0x20014a] = arguments[_0x20014a];
          }
          _0x3517d5(_0x490ea8 = _0x81ec1.call.apply(_0x81ec1, [this].concat(_0x1f39a5)) || this, "m_featureInfoBtn", _0x484bde, _0x1862e3(_0x490ea8));
          _0x3517d5(_0x490ea8, "m_featureInfoBoard", _0x22a16a, _0x1862e3(_0x490ea8));
          _0x3517d5(_0x490ea8, "m_featureInfoCloseBtn", _0x2ae666, _0x1862e3(_0x490ea8));
          _0x3517d5(_0x490ea8, "m_featureInfoSideBtn", _0x2bd9a6, _0x1862e3(_0x490ea8));
          _0x3517d5(_0x490ea8, "m_featureInfoTxt", _0x257c70, _0x1862e3(_0x490ea8));
          _0x3517d5(_0x490ea8, "m_titleSprite", _0x8822b9, _0x1862e3(_0x490ea8));
          _0x490ea8.m_manulState = "Close";
          _0x490ea8.m_manulOpenLock = false;
          return _0x490ea8;
        }
        _0x47cbbc(_0x5850fe, _0x81ec1);
        var _0x395b44 = _0x5850fe.prototype;
        _0x395b44.onLoad = function () {
          var _0x1f0dcc = this;
          if (_0xfd5517.CheckSwitchOff(_0xa1e2fa.CloseManual)) {
            this.node.active = false;
          } else {
            if (this.m_featureInfoBtn) {
              this.m_featureInfoBtn.on(_0x57be55.EventType.TOUCH_END, function () {
                _0x1f0dcc.OpenManul();
                _0x378220.Play(Astarte.Define.AudioClips.COMMON_BTN);
              });
            }
            if (this.m_featureInfoCloseBtn) {
              this.m_featureInfoCloseBtn.on(_0x57be55.EventType.TOUCH_END, function () {
                _0x1f0dcc.CloseManul();
                _0x378220.Play(Astarte.Define.AudioClips.COMMON_BTN);
              });
            }
            if (this.m_featureInfoSideBtn) {
              this.m_featureInfoSideBtn.on(_0x57be55.EventType.TOUCH_END, function () {
                _0x1f0dcc.CloseManul();
              });
            }
          }
        };
        _0x395b44.OpenManul = function () {
          var _0x208e02 = this;
          if (this.m_manulOpenLock) {
            _0x36e33f.ShowMessageBox(Astarte.Define.StringKey.FREEWINCASH_PLAYING1);
          } else if (this.m_manulState == "Close") {
            this.m_featureInfoBoard.active = true;
            _0x5a1279(this.m_featureInfoBoard).call(function () {
              _0x208e02.m_manulState = 'Opening';
              _0x208e02.m_featureInfoBoard.getComponentInChildren(_0x25028e).play("Manual_Open");
            }).delay(0.5).call(function () {
              _0x208e02.m_manulState = "Open";
            }).start();
          }
        };
        _0x395b44.CloseManul = function () {
          var _0x1148e0 = this;
          if (this.m_manulState == "Open") {
            _0x5a1279(this.m_featureInfoBoard).call(function () {
              _0x1148e0.m_manulState = 'Closing';
              _0x1148e0.m_featureInfoBoard.getComponentInChildren(_0x25028e).play("Manual_Close");
            }).delay(0.5).call(function () {
              _0x1148e0.m_manulState = "Close";
              _0x1148e0.m_featureInfoBoard.active = false;
            }).start();
          }
        };
        _0x395b44.SetTxt = function (_0x56b22a, _0x417ffb) {
          if (undefined === _0x417ffb) {
            _0x417ffb = null;
          }
          var _0xee8f88 = _0x39a0c9.GetGameAtlas();
          for (var _0x158525 = 0x0; _0x158525 < this.m_featureInfoTxt.length; _0x158525++) {
            if (_0xee8f88.getSpriteFrame(_0x56b22a[_0x158525])) {
              this.m_featureInfoTxt[_0x158525].spriteFrame = _0xee8f88.getSpriteFrame(_0x56b22a[_0x158525]);
            }
          }
          if (this.m_titleSprite && _0x417ffb) {
            this.m_titleSprite.spriteFrame = _0xee8f88.getSpriteFrame(_0x417ffb);
          }
        };
        _0x17689c(_0x5850fe, [{
          'key': "FeatureInfoBtn",
          'get': function () {
            return this.m_featureInfoBtn;
          }
        }, {
          'key': "ManulState",
          'get': function () {
            return this.m_manulState;
          }
        }, {
          'key': "ManulOpenLock",
          'get': function () {
            return this.m_manulOpenLock;
          },
          'set': function (_0x3d748c) {
            this.m_manulOpenLock = _0x3d748c;
          }
        }]);
        return _0x5850fe;
      }(_0x55612a);
      _0x484bde = _0x58cf1d(_0x11ccf7.prototype, "m_featureInfoBtn", [_0x506c62], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x22a16a = _0x58cf1d(_0x11ccf7.prototype, "m_featureInfoBoard", [_0x4a5c99], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2ae666 = _0x58cf1d(_0x11ccf7.prototype, "m_featureInfoCloseBtn", [_0x44c84f], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2bd9a6 = _0x58cf1d(_0x11ccf7.prototype, "m_featureInfoSideBtn", [_0x591d2e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x257c70 = _0x58cf1d(_0x11ccf7.prototype, 'm_featureInfoTxt', [_0x4840eb], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x8822b9 = _0x58cf1d(_0x11ccf7.prototype, 'm_titleSprite', [_0x3ee1a8], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0xe3c15f._RF.pop();
      var _0x2561da;
      _0x3cf404.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/minimal.js', function (_0x2b02e5, _0x537195, _0x55256f, _0xef64e9, _0x38f82c) {
        _0x55256f.exports = _0x537195("./src/index-minimal");
        _0x55256f.exports;
      }, function () {
        return {
          './src/index-minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js"
        };
      });
      _0x3cf404.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/assets/Script/Proto/lwcProto.js", function (_0x596cec, _0x502d57, _0x9621ef, _0x44a686, _0x4c2ecc) {
        var _0x2c0791;
        var _0x4f0cab = _0x502d57("protobufjs/minimal");
        var _0xca1d98 = _0x4f0cab.Reader;
        var _0x35bacc = _0x4f0cab.Writer;
        var _0x6685e0 = _0x4f0cab.util;
        var _0xac8d88 = _0x4f0cab.roots['default'] || (_0x4f0cab.roots['default'] = {});
        (_0x2c0791 = {
          "AwardData": function () {
            function _0x2ac63d(_0x1bfe25) {
              this.Pos = [];
              if (_0x1bfe25) {
                var _0x4f6aea = Object.keys(_0x1bfe25);
                for (var _0x5c919b = 0x0; _0x5c919b < _0x4f6aea.length; ++_0x5c919b) {
                  if (null != _0x1bfe25[_0x4f6aea[_0x5c919b]]) {
                    this[_0x4f6aea[_0x5c919b]] = _0x1bfe25[_0x4f6aea[_0x5c919b]];
                  }
                }
              }
            }
            _0x2ac63d.prototype.Symbol = 0x0;
            _0x2ac63d.prototype.Count = 0x0;
            _0x2ac63d.prototype.LineNum = 0x0;
            _0x2ac63d.prototype.Win = 0x0;
            _0x2ac63d.prototype.Pos = _0x6685e0.emptyArray;
            _0x2ac63d.encode = function (_0x1aab03, _0x27c970) {
              if (!_0x27c970) {
                _0x27c970 = _0x35bacc.create();
              }
              if (null != _0x1aab03.Symbol && Object.hasOwnProperty.call(_0x1aab03, "Symbol")) {
                _0x27c970.uint32(0x8).int32(_0x1aab03.Symbol);
              }
              if (null != _0x1aab03.Count && Object.hasOwnProperty.call(_0x1aab03, "Count")) {
                _0x27c970.uint32(0x10).int32(_0x1aab03.Count);
              }
              if (null != _0x1aab03.LineNum && Object.hasOwnProperty.call(_0x1aab03, "LineNum")) {
                _0x27c970.uint32(0x18).int32(_0x1aab03.LineNum);
              }
              if (null != _0x1aab03.Win && Object.hasOwnProperty.call(_0x1aab03, "Win")) {
                _0x27c970.uint32(0x21).double(_0x1aab03.Win);
              }
              if (null != _0x1aab03.Pos && _0x1aab03.Pos.length) {
                _0x27c970.uint32(0x2a).fork();
                for (var _0x54b91a = 0x0; _0x54b91a < _0x1aab03.Pos.length; ++_0x54b91a) {
                  _0x27c970.int32(_0x1aab03.Pos[_0x54b91a]);
                }
                _0x27c970.ldelim();
              }
              return _0x27c970;
            };
            _0x2ac63d.decode = function (_0x50d961, _0x3da29e) {
              if (!(_0x50d961 instanceof _0xca1d98)) {
                _0x50d961 = _0xca1d98.create(_0x50d961);
              }
              var _0x35a1c7 = undefined === _0x3da29e ? _0x50d961.len : _0x50d961.pos + _0x3da29e;
              for (var _0x1da524 = new _0xac8d88.lwcProto.AwardData(); _0x50d961.pos < _0x35a1c7;) {
                var _0x5aab8d = _0x50d961.uint32();
                switch (_0x5aab8d >>> 0x3) {
                  case 0x1:
                    _0x1da524.Symbol = _0x50d961.int32();
                    break;
                  case 0x2:
                    _0x1da524.Count = _0x50d961.int32();
                    break;
                  case 0x3:
                    _0x1da524.LineNum = _0x50d961.int32();
                    break;
                  case 0x4:
                    _0x1da524.Win = _0x50d961.double();
                    break;
                  case 0x5:
                    if (!(_0x1da524.Pos && _0x1da524.Pos.length)) {
                      _0x1da524.Pos = [];
                    }
                    if (0x2 == (0x7 & _0x5aab8d)) {
                      for (var _0x14ee87 = _0x50d961.uint32() + _0x50d961.pos; _0x50d961.pos < _0x14ee87;) {
                        _0x1da524.Pos.push(_0x50d961.int32());
                      }
                    } else {
                      _0x1da524.Pos.push(_0x50d961.int32());
                    }
                    break;
                  default:
                    _0x50d961.skipType(0x7 & _0x5aab8d);
                }
              }
              return _0x1da524;
            };
            _0x2ac63d.getTypeUrl = function (_0x55b2b4) {
              if (undefined === _0x55b2b4) {
                _0x55b2b4 = "type.googleapis.com";
              }
              return _0x55b2b4 + "/lwcProto.AwardData";
            };
            return _0x2ac63d;
          }(),
          "RoundInfo": function () {
            function _0xf68f11(_0x3c55af) {
              this.Symbol = [];
              this.AwardDataVec = [];
              this.FreeWheelColumn = [];
              this.FreeSymbol = [];
              this.FreeAwardDataVec = [];
              if (_0x3c55af) {
                var _0x127005 = Object.keys(_0x3c55af);
                for (var _0x5ad86e = 0x0; _0x5ad86e < _0x127005.length; ++_0x5ad86e) {
                  if (null != _0x3c55af[_0x127005[_0x5ad86e]]) {
                    this[_0x127005[_0x5ad86e]] = _0x3c55af[_0x127005[_0x5ad86e]];
                  }
                }
              }
            }
            _0xf68f11.prototype.Symbol = _0x6685e0.emptyArray;
            _0xf68f11.prototype.AwardDataVec = _0x6685e0.emptyArray;
            _0xf68f11.prototype.RoundWin = 0x0;
            _0xf68f11.prototype.WheelType = 0x0;
            _0xf68f11.prototype.WheelMul = 0x0;
            _0xf68f11.prototype.WildCount = 0x0;
            _0xf68f11.prototype.GetFree = false;
            _0xf68f11.prototype.FreeNowRound = 0x0;
            _0xf68f11.prototype.FreeTotalRound = 0x0;
            _0xf68f11.prototype.FreeWheelType = 0x0;
            _0xf68f11.prototype.FreeWheelColumn = _0x6685e0.emptyArray;
            _0xf68f11.prototype.FreeSymbol = _0x6685e0.emptyArray;
            _0xf68f11.prototype.FreeAwardDataVec = _0x6685e0.emptyArray;
            _0xf68f11.prototype.FreeFirstWin = 0x0;
            _0xf68f11.prototype.AwardTypeFlag = 0x0;
            _0xf68f11.prototype.ReelType = 0x0;
            _0xf68f11.prototype.IsMain = false;
            _0xf68f11.prototype.MaxFlag = false;
            _0xf68f11.encode = function (_0x36788d, _0x152e99) {
              if (!_0x152e99) {
                _0x152e99 = _0x35bacc.create();
              }
              if (null != _0x36788d.Symbol && _0x36788d.Symbol.length) {
                for (var _0x46559a = 0x0; _0x46559a < _0x36788d.Symbol.length; ++_0x46559a) {
                  _0xac8d88.lwcProto.Column.encode(_0x36788d.Symbol[_0x46559a], _0x152e99.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0x36788d.AwardDataVec && _0x36788d.AwardDataVec.length) {
                for (_0x46559a = 0x0; _0x46559a < _0x36788d.AwardDataVec.length; ++_0x46559a) {
                  _0xac8d88.lwcProto.AwardData.encode(_0x36788d.AwardDataVec[_0x46559a], _0x152e99.uint32(0x12).fork()).ldelim();
                }
              }
              if (null != _0x36788d.RoundWin && Object.hasOwnProperty.call(_0x36788d, "RoundWin")) {
                _0x152e99.uint32(0x19).double(_0x36788d.RoundWin);
              }
              if (null != _0x36788d.WheelType && Object.hasOwnProperty.call(_0x36788d, "WheelType")) {
                _0x152e99.uint32(0x20).int32(_0x36788d.WheelType);
              }
              if (null != _0x36788d.WheelMul && Object.hasOwnProperty.call(_0x36788d, 'WheelMul')) {
                _0x152e99.uint32(0x29).double(_0x36788d.WheelMul);
              }
              if (null != _0x36788d.WildCount && Object.hasOwnProperty.call(_0x36788d, "WildCount")) {
                _0x152e99.uint32(0x30).int32(_0x36788d.WildCount);
              }
              if (null != _0x36788d.GetFree && Object.hasOwnProperty.call(_0x36788d, 'GetFree')) {
                _0x152e99.uint32(0x38).bool(_0x36788d.GetFree);
              }
              if (null != _0x36788d.FreeNowRound && Object.hasOwnProperty.call(_0x36788d, "FreeNowRound")) {
                _0x152e99.uint32(0x40).int32(_0x36788d.FreeNowRound);
              }
              if (null != _0x36788d.FreeTotalRound && Object.hasOwnProperty.call(_0x36788d, "FreeTotalRound")) {
                _0x152e99.uint32(0x48).int32(_0x36788d.FreeTotalRound);
              }
              if (null != _0x36788d.FreeWheelType && Object.hasOwnProperty.call(_0x36788d, "FreeWheelType")) {
                _0x152e99.uint32(0x50).int32(_0x36788d.FreeWheelType);
              }
              if (null != _0x36788d.FreeWheelColumn && _0x36788d.FreeWheelColumn.length) {
                _0x152e99.uint32(0x5a).fork();
                for (_0x46559a = 0x0; _0x46559a < _0x36788d.FreeWheelColumn.length; ++_0x46559a) {
                  _0x152e99.int32(_0x36788d.FreeWheelColumn[_0x46559a]);
                }
                _0x152e99.ldelim();
              }
              if (null != _0x36788d.FreeSymbol && _0x36788d.FreeSymbol.length) {
                for (_0x46559a = 0x0; _0x46559a < _0x36788d.FreeSymbol.length; ++_0x46559a) {
                  _0xac8d88.lwcProto.Column.encode(_0x36788d.FreeSymbol[_0x46559a], _0x152e99.uint32(0x62).fork()).ldelim();
                }
              }
              if (null != _0x36788d.FreeAwardDataVec && _0x36788d.FreeAwardDataVec.length) {
                for (_0x46559a = 0x0; _0x46559a < _0x36788d.FreeAwardDataVec.length; ++_0x46559a) {
                  _0xac8d88.lwcProto.AwardData.encode(_0x36788d.FreeAwardDataVec[_0x46559a], _0x152e99.uint32(0x6a).fork()).ldelim();
                }
              }
              if (null != _0x36788d.AwardTypeFlag && Object.hasOwnProperty.call(_0x36788d, "AwardTypeFlag")) {
                _0x152e99.uint32(0x70).int32(_0x36788d.AwardTypeFlag);
              }
              if (null != _0x36788d.ReelType && Object.hasOwnProperty.call(_0x36788d, "ReelType")) {
                _0x152e99.uint32(0x78).int32(_0x36788d.ReelType);
              }
              if (null != _0x36788d.IsMain && Object.hasOwnProperty.call(_0x36788d, 'IsMain')) {
                _0x152e99.uint32(0x80).bool(_0x36788d.IsMain);
              }
              if (null != _0x36788d.MaxFlag && Object.hasOwnProperty.call(_0x36788d, 'MaxFlag')) {
                _0x152e99.uint32(0x88).bool(_0x36788d.MaxFlag);
              }
              if (null != _0x36788d.FreeFirstWin && Object.hasOwnProperty.call(_0x36788d, 'FreeFirstWin')) {
                _0x152e99.uint32(0x91).double(_0x36788d.FreeFirstWin);
              }
              return _0x152e99;
            };
            _0xf68f11.decode = function (_0x1df58f, _0x50075c) {
              if (!(_0x1df58f instanceof _0xca1d98)) {
                _0x1df58f = _0xca1d98.create(_0x1df58f);
              }
              var _0x1f9425 = undefined === _0x50075c ? _0x1df58f.len : _0x1df58f.pos + _0x50075c;
              for (var _0x269161 = new _0xac8d88.lwcProto.RoundInfo(); _0x1df58f.pos < _0x1f9425;) {
                var _0x1c2035 = _0x1df58f.uint32();
                switch (_0x1c2035 >>> 0x3) {
                  case 0x1:
                    if (!(_0x269161.Symbol && _0x269161.Symbol.length)) {
                      _0x269161.Symbol = [];
                    }
                    _0x269161.Symbol.push(_0xac8d88.lwcProto.Column.decode(_0x1df58f, _0x1df58f.uint32()));
                    break;
                  case 0x2:
                    if (!(_0x269161.AwardDataVec && _0x269161.AwardDataVec.length)) {
                      _0x269161.AwardDataVec = [];
                    }
                    _0x269161.AwardDataVec.push(_0xac8d88.lwcProto.AwardData.decode(_0x1df58f, _0x1df58f.uint32()));
                    break;
                  case 0x3:
                    _0x269161.RoundWin = _0x1df58f.double();
                    break;
                  case 0x4:
                    _0x269161.WheelType = _0x1df58f.int32();
                    break;
                  case 0x5:
                    _0x269161.WheelMul = _0x1df58f.double();
                    break;
                  case 0x6:
                    _0x269161.WildCount = _0x1df58f.int32();
                    break;
                  case 0x7:
                    _0x269161.GetFree = _0x1df58f.bool();
                    break;
                  case 0x8:
                    _0x269161.FreeNowRound = _0x1df58f.int32();
                    break;
                  case 0x9:
                    _0x269161.FreeTotalRound = _0x1df58f.int32();
                    break;
                  case 0xa:
                    _0x269161.FreeWheelType = _0x1df58f.int32();
                    break;
                  case 0xb:
                    if (!(_0x269161.FreeWheelColumn && _0x269161.FreeWheelColumn.length)) {
                      _0x269161.FreeWheelColumn = [];
                    }
                    if (0x2 == (0x7 & _0x1c2035)) {
                      for (var _0xcfb062 = _0x1df58f.uint32() + _0x1df58f.pos; _0x1df58f.pos < _0xcfb062;) {
                        _0x269161.FreeWheelColumn.push(_0x1df58f.int32());
                      }
                    } else {
                      _0x269161.FreeWheelColumn.push(_0x1df58f.int32());
                    }
                    break;
                  case 0xc:
                    if (!(_0x269161.FreeSymbol && _0x269161.FreeSymbol.length)) {
                      _0x269161.FreeSymbol = [];
                    }
                    _0x269161.FreeSymbol.push(_0xac8d88.lwcProto.Column.decode(_0x1df58f, _0x1df58f.uint32()));
                    break;
                  case 0xd:
                    if (!(_0x269161.FreeAwardDataVec && _0x269161.FreeAwardDataVec.length)) {
                      _0x269161.FreeAwardDataVec = [];
                    }
                    _0x269161.FreeAwardDataVec.push(_0xac8d88.lwcProto.AwardData.decode(_0x1df58f, _0x1df58f.uint32()));
                    break;
                  case 0x12:
                    _0x269161.FreeFirstWin = _0x1df58f.double();
                    break;
                  case 0xe:
                    _0x269161.AwardTypeFlag = _0x1df58f.int32();
                    break;
                  case 0xf:
                    _0x269161.ReelType = _0x1df58f.int32();
                    break;
                  case 0x10:
                    _0x269161.IsMain = _0x1df58f.bool();
                    break;
                  case 0x11:
                    _0x269161.MaxFlag = _0x1df58f.bool();
                    break;
                  default:
                    _0x1df58f.skipType(0x7 & _0x1c2035);
                }
              }
              return _0x269161;
            };
            _0xf68f11.getTypeUrl = function (_0x508498) {
              if (undefined === _0x508498) {
                _0x508498 = "type.googleapis.com";
              }
              return _0x508498 + "/lwcProto.RoundInfo";
            };
            return _0xf68f11;
          }(),
          SpinAck: function () {
            function _0x187a72(_0x3c22eb) {
              this.RoundQueue = [];
              if (_0x3c22eb) {
                var _0x4fc653 = Object.keys(_0x3c22eb);
                for (var _0x22c7c9 = 0x0; _0x22c7c9 < _0x4fc653.length; ++_0x22c7c9) {
                  if (null != _0x3c22eb[_0x4fc653[_0x22c7c9]]) {
                    this[_0x4fc653[_0x22c7c9]] = _0x3c22eb[_0x4fc653[_0x22c7c9]];
                  }
                }
              }
            }
            _0x187a72.prototype.RoundQueue = _0x6685e0.emptyArray;
            _0x187a72.prototype.FreeTotalWin = 0x0;
            _0x187a72.prototype.TotalWin = 0x0;
            _0x187a72.prototype.AckType = 0x0;
            _0x187a72.prototype.RTP = 0x0;
            _0x187a72.prototype.LID = 0x0;
            _0x187a72.prototype.RID = 0x0;
            _0x187a72.encode = function (_0x36af26, _0x47c7ad) {
              if (!_0x47c7ad) {
                _0x47c7ad = _0x35bacc.create();
              }
              if (null != _0x36af26.RoundQueue && _0x36af26.RoundQueue.length) {
                for (var _0xc260b6 = 0x0; _0xc260b6 < _0x36af26.RoundQueue.length; ++_0xc260b6) {
                  _0xac8d88.lwcProto.RoundInfo.encode(_0x36af26.RoundQueue[_0xc260b6], _0x47c7ad.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0x36af26.FreeTotalWin && Object.hasOwnProperty.call(_0x36af26, 'FreeTotalWin')) {
                _0x47c7ad.uint32(0x11).double(_0x36af26.FreeTotalWin);
              }
              if (null != _0x36af26.TotalWin && Object.hasOwnProperty.call(_0x36af26, 'TotalWin')) {
                _0x47c7ad.uint32(0x19).double(_0x36af26.TotalWin);
              }
              if (null != _0x36af26.AckType && Object.hasOwnProperty.call(_0x36af26, "AckType")) {
                _0x47c7ad.uint32(0x20).int32(_0x36af26.AckType);
              }
              if (null != _0x36af26.RTP && Object.hasOwnProperty.call(_0x36af26, "RTP")) {
                _0x47c7ad.uint32(0x29).double(_0x36af26.RTP);
              }
              if (null != _0x36af26.LID && Object.hasOwnProperty.call(_0x36af26, 'LID')) {
                _0x47c7ad.uint32(0x30).int32(_0x36af26.LID);
              }
              if (null != _0x36af26.RID && Object.hasOwnProperty.call(_0x36af26, "RID")) {
                _0x47c7ad.uint32(0x38).int32(_0x36af26.RID);
              }
              return _0x47c7ad;
            };
            _0x187a72.decode = function (_0x33c7ac, _0x2e5995) {
              if (!(_0x33c7ac instanceof _0xca1d98)) {
                _0x33c7ac = _0xca1d98.create(_0x33c7ac);
              }
              var _0x2a9366 = undefined === _0x2e5995 ? _0x33c7ac.len : _0x33c7ac.pos + _0x2e5995;
              for (var _0x57b0e5 = new _0xac8d88.lwcProto.SpinAck(); _0x33c7ac.pos < _0x2a9366;) {
                var _0x316b7e = _0x33c7ac.uint32();
                switch (_0x316b7e >>> 0x3) {
                  case 0x1:
                    if (!(_0x57b0e5.RoundQueue && _0x57b0e5.RoundQueue.length)) {
                      _0x57b0e5.RoundQueue = [];
                    }
                    _0x57b0e5.RoundQueue.push(_0xac8d88.lwcProto.RoundInfo.decode(_0x33c7ac, _0x33c7ac.uint32()));
                    break;
                  case 0x2:
                    _0x57b0e5.FreeTotalWin = _0x33c7ac.double();
                    break;
                  case 0x3:
                    _0x57b0e5.TotalWin = _0x33c7ac.double();
                    break;
                  case 0x4:
                    _0x57b0e5.AckType = _0x33c7ac.int32();
                    break;
                  case 0x5:
                    _0x57b0e5.RTP = _0x33c7ac.double();
                    break;
                  case 0x6:
                    _0x57b0e5.LID = _0x33c7ac.int32();
                    break;
                  case 0x7:
                    _0x57b0e5.RID = _0x33c7ac.int32();
                    break;
                  default:
                    _0x33c7ac.skipType(0x7 & _0x316b7e);
                }
              }
              return _0x57b0e5;
            };
            _0x187a72.getTypeUrl = function (_0x5b96f1) {
              if (undefined === _0x5b96f1) {
                _0x5b96f1 = 'type.googleapis.com';
              }
              return _0x5b96f1 + "/lwcProto.SpinAck";
            };
            return _0x187a72;
          }()
        }).Column = function () {
          function _0x5de2bf(_0x216d64) {
            this.Col = [];
            if (_0x216d64) {
              var _0x1b7e66 = Object.keys(_0x216d64);
              for (var _0x114ade = 0x0; _0x114ade < _0x1b7e66.length; ++_0x114ade) {
                if (null != _0x216d64[_0x1b7e66[_0x114ade]]) {
                  this[_0x1b7e66[_0x114ade]] = _0x216d64[_0x1b7e66[_0x114ade]];
                }
              }
            }
          }
          _0x5de2bf.prototype.Col = _0x6685e0.emptyArray;
          _0x5de2bf.encode = function (_0x173e41, _0xaa9b00) {
            if (!_0xaa9b00) {
              _0xaa9b00 = _0x35bacc.create();
            }
            if (null != _0x173e41.Col && _0x173e41.Col.length) {
              _0xaa9b00.uint32(0xa).fork();
              for (var _0x123399 = 0x0; _0x123399 < _0x173e41.Col.length; ++_0x123399) {
                _0xaa9b00.int32(_0x173e41.Col[_0x123399]);
              }
              _0xaa9b00.ldelim();
            }
            return _0xaa9b00;
          };
          _0x5de2bf.decode = function (_0x37300a, _0xf491f2) {
            if (!(_0x37300a instanceof _0xca1d98)) {
              _0x37300a = _0xca1d98.create(_0x37300a);
            }
            var _0x3927cd = undefined === _0xf491f2 ? _0x37300a.len : _0x37300a.pos + _0xf491f2;
            for (var _0x337fe8 = new _0xac8d88.lwcProto.Column(); _0x37300a.pos < _0x3927cd;) {
              var _0x2e4788 = _0x37300a.uint32();
              switch (_0x2e4788 >>> 0x3) {
                case 0x1:
                  if (!(_0x337fe8.Col && _0x337fe8.Col.length)) {
                    _0x337fe8.Col = [];
                  }
                  if (0x2 == (0x7 & _0x2e4788)) {
                    for (var _0x7462c8 = _0x37300a.uint32() + _0x37300a.pos; _0x37300a.pos < _0x7462c8;) {
                      _0x337fe8.Col.push(_0x37300a.int32());
                    }
                  } else {
                    _0x337fe8.Col.push(_0x37300a.int32());
                  }
                  break;
                default:
                  _0x37300a.skipType(0x7 & _0x2e4788);
              }
            }
            return _0x337fe8;
          };
          _0x5de2bf.getTypeUrl = function (_0x51bec2) {
            if (undefined === _0x51bec2) {
              _0x51bec2 = "type.googleapis.com";
            }
            return _0x51bec2 + "/lwcProto.Column";
          };
          return _0x5de2bf;
        }();
        _0xac8d88.lwcProto = _0x2c0791;
        _0x9621ef.exports = _0xac8d88;
        _0x2561da = _0x9621ef.exports;
      }, function () {
        return {
          'protobufjs/minimal': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/node_modules/protobufjs/minimal.js'
        };
      });
      _0x3cf404.require("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyWheelClassic/Client/Thai_UAT/assets/Script/Proto/lwcProto.js");
      _0xe3c15f._RF.push({}, "e9e11fl86NJ84TzhiCGGCna", 'WaitResState', undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "4419fqKrN5N5YYhZwFl0hNx", "WaitReadyState", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "1c356oXd7hL6Y/gCgwRo0A/", "PlateShowState", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, '739d8SzGo1EmYPGCeggSWGW', 'FeatureShowState', undefined);
      var _0x34ca53;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "5cd11K4+Y1DBJ0WZfuiBSee", 'Common_IdleState', undefined);
      var _0x4a4950 = _0x9f6cc7.ccclass;
      _0x34ca53 = _0x4a4950("Common_IdleState");
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "9099fuoIOdA/qc/GkvbZ7rH", "GroupNode", undefined);
      var _0x3091e6;
      var _0x2e76f2;
      var _0x2b77e7;
      var _0x49a566;
      !function (_0x517109) {
        _0x517109[_0x517109.WIDTH = 0x1] = 'WIDTH';
        _0x517109[_0x517109.HEIGHT = 0x2] = "HEIGHT";
        _0x517109[_0x517109.BOTH = 0x3] = "BOTH";
      }(_0x3091e6 || (_0x3091e6 = {}));
      (function (_0x451d32) {
        _0x451d32[_0x451d32.X = 0x1] = 'X';
        _0x451d32[_0x451d32.Y = 0x2] = 'Y';
        _0x451d32[_0x451d32.BOTH = 0x3] = "BOTH";
      })(_0x2e76f2 || (_0x2e76f2 = {}));
      (function (_0x297258) {
        _0x297258[_0x297258.X = 0x1] = 'X';
        _0x297258[_0x297258.Y = 0x2] = 'Y';
        _0x297258[_0x297258.BOTH = 0x3] = "BOTH";
      })(_0x2b77e7 || (_0x2b77e7 = {}));
      (function (_0x4e4d1d) {
        _0x4e4d1d[_0x4e4d1d.R = 0x1] = 'R';
        _0x4e4d1d[_0x4e4d1d.G = 0x2] = 'G';
        _0x4e4d1d[_0x4e4d1d.B = 0x4] = 'B';
        _0x4e4d1d[_0x4e4d1d.RGB = 0x7] = "RGB";
        _0x4e4d1d[_0x4e4d1d.A = 0x8] = 'A';
        _0x4e4d1d[_0x4e4d1d.RGBA = 0xf] = 'RGBA';
      })(_0x49a566 || (_0x49a566 = {}));
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, '1d950BFoN5LhJJ79uyt+/E+', "MarqueeComponent", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "93417uqlh9Fm6TH2poz4GO4", 'NearWinEffectComponent', undefined);
      var _0xd808eb;
      var _0x10f3c7;
      var _0x11c135;
      var _0x44e5bd;
      var _0x492cff;
      var _0x3a4738;
      var _0x352b8b;
      var _0x5b8b22;
      var _0x2c2658;
      var _0x1ee08f;
      var _0x13879b;
      var _0x760162;
      var _0x5b36c6;
      var _0x4b9d64;
      var _0x5f3aa4;
      var _0x5d90d3;
      var _0x49c5de;
      var _0x2f6a77;
      var _0x487316;
      var _0x2a1b1a;
      var _0x1a0543;
      var _0x189750;
      var _0x15f260;
      var _0x4e49f2;
      var _0x3f90d3;
      var _0x559416;
      var _0x28c6a3;
      var _0xc0767b;
      var _0x4c005f;
      var _0x16e36b;
      var _0x1c1fce;
      var _0x581145;
      var _0x2a9651;
      var _0x39c46d;
      var _0x5ee1b7;
      var _0x3430a5;
      var _0x2c7c1d;
      var _0x43078d;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "02e880GcB9Jw7QDr8UUWxEV", "ShakeComponent", undefined);
      var _0x2b21d3 = _0x9f6cc7.ccclass;
      var _0x52ad9c = _0x9f6cc7.property;
      var _0x1737be = _0x9f6cc7.executeInEditMode;
      var _0x2eb28e = _0x9f6cc7.help;
      var _0x5256e7 = [{
        'name': "backIn",
        'desc': "回退:緩入"
      }, {
        'name': 'backInOut',
        'desc': '回退:緩入緩出'
      }, {
        'name': 'backOut',
        'desc': "回退:緩出"
      }, {
        'name': 'backOutIn',
        'desc': '回退:緩出緩入'
      }, {
        'name': 'bounceIn',
        'desc': '彈跳:緩入'
      }, {
        'name': "bounceInOut",
        'desc': "彈跳:緩入緩出"
      }, {
        'name': "bounceOut",
        'desc': "彈跳:緩出"
      }, {
        'name': "bounceOutIn",
        'desc': "彈跳:緩出緩入"
      }, {
        'name': "circIn",
        'desc': "迴圈:緩入 由慢到快"
      }, {
        'name': 'circInOut',
        'desc': "迴圈:緩入緩出 由慢到很快再到慢"
      }, {
        'name': 'circOut',
        'desc': "迴圈:緩出 由快到慢"
      }, {
        'name': "circOutIn",
        'desc': "迴圈:緩出緩入 由慢到很快再到慢"
      }, {
        'name': "constant",
        'desc': 'constant'
      }, {
        'name': "cubicIn",
        'desc': "立方曲線緩入 由慢到快"
      }, {
        'name': "cubicInOut",
        'desc': "立方曲線緩入緩出 由慢到快再到慢"
      }, {
        'name': "cubicOut",
        'desc': "立方曲線緩出 由快到慢"
      }, {
        'name': "cubicOutIn",
        'desc': "立方曲線緩出緩入 由慢到快再到慢"
      }, {
        'name': "elasticIn",
        'desc': "彈簧回震:緩入"
      }, {
        'name': "elasticInOut",
        'desc': "彈簧回震:緩入緩出"
      }, {
        'name': "elasticOut",
        'desc': '彈簧回震:緩出'
      }, {
        'name': 'elasticOutIn',
        'desc': "彈簧回震:緩出緩入"
      }, {
        'name': "expoIn",
        'desc': "指數曲線緩入 由慢到快"
      }, {
        'name': "expoInOut",
        'desc': "指數曲線緩入和緩出 由慢到很快再到慢"
      }, {
        'name': 'expoOut',
        'desc': "指數曲線緩出 由快到慢"
      }, {
        'name': "expoOutIn",
        'desc': "指數曲線緩出緩入和 由慢到很快再到慢"
      }, {
        'name': "fade",
        'desc': "漸褪效果"
      }, {
        'name': 'linear',
        'desc': '線性'
      }, {
        'name': 'quadIn',
        'desc': "平方曲線緩入 由慢到快"
      }, {
        'name': "quadInOut",
        'desc': "平方曲線緩入緩出 由慢到快再到慢"
      }, {
        'name': "quadOut",
        'desc': "平方曲線緩出 由快到慢"
      }, {
        'name': "quadOutIn",
        'desc': "平方曲線緩出緩入 由慢到快再到慢"
      }, {
        'name': "quartIn",
        'desc': "四次方曲線緩入 由慢到快"
      }, {
        'name': "quartInOut",
        'desc': "四次方曲線緩入緩出 由慢到快再到慢"
      }, {
        'name': "quartOut",
        'desc': "四次方曲線緩出 由快到慢"
      }, {
        'name': 'quartOutIn',
        'desc': "四次方曲線緩出緩入 由慢到快再到慢"
      }, {
        'name': "quintIn",
        'desc': "五次方曲線緩入 由慢到快"
      }, {
        'name': "quintInOut",
        'desc': "五次方曲線緩入緩出 由慢到快再到慢"
      }, {
        'name': "quintOut",
        'desc': "五次方曲線緩出 由慢到快"
      }, {
        'name': "quintOutIn",
        'desc': "五次方曲線緩出緩入 由慢到快再到慢"
      }, {
        'name': "sineIn",
        'desc': "正弦曲線緩入 由慢到快"
      }, {
        'name': "sineInOut",
        'desc': "正弦曲線緩入緩出 由慢到快再到慢"
      }, {
        'name': 'sineOut',
        'desc': "正弦曲線緩出 由快到慢"
      }, {
        'name': 'sineOutIn',
        'desc': "正弦曲線緩出緩入 由慢到快再到慢"
      }, {
        'name': 'smooth',
        'desc': '平滑效果'
      }];
      var _0x215abd = _0x1c79af({});
      var _0x64accf = _0x1c79af({});
      var _0x371e46;
      !function (_0x1b6274) {
        _0x1b6274[_0x1b6274.None = 0x0] = "None";
        _0x1b6274[_0x1b6274.FadeIn = 0x1] = 'FadeIn';
        _0x1b6274[_0x1b6274.FadeOut = 0x2] = "FadeOut";
      }(_0x371e46 || (_0x371e46 = {}));
      var _0x4e328d = _0x1c79af({
        'None': _0x371e46.None,
        'FadeIn': _0x371e46.FadeIn,
        'FadeOut': _0x371e46.FadeOut
      });
      var _0x1ba988 = function (_0x3b9602) {
        var _0x4ca1da;
        var _0x16529d = 0x0;
        if (0x0 === _0x3b9602.length) {
          return _0x16529d;
        }
        for (_0x4ca1da = 0x0; _0x4ca1da < _0x3b9602.length; _0x4ca1da++) {
          _0x16529d = (_0x16529d << 0x5) - _0x16529d + _0x3b9602.charCodeAt(_0x4ca1da);
          _0x16529d |= 0x0;
        }
        return _0x16529d;
      };
      _0xd808eb = _0x2b21d3("_TweenInfo");
      _0x10f3c7 = _0x52ad9c({
        'visible': false,
        'tooltip': "Easing"
      });
      _0x11c135 = _0x52ad9c({
        'type': _0x215abd,
        'visible': false
      });
      _0x44e5bd = _0x52ad9c({
        'visible': true,
        'displayName': "緩動效果",
        'type': _0x215abd
      });
      _0x492cff = _0x52ad9c({
        'type': _0x4e328d,
        'visible': false
      });
      _0x3a4738 = _0x52ad9c({
        'visible': true,
        'displayName': "fade type",
        'type': _0x4e328d
      });
      _0x352b8b = _0x52ad9c({
        'min': 0x0,
        'visible': true,
        'displayName': '時間'
      });
      _0x2c2658 = function () {
        function _0x8df6ec() {
          _0x3517d5(this, "m_EasingName", _0x1ee08f, this);
          _0x3517d5(this, "__easingIdx", _0x13879b, this);
          _0x3517d5(this, "__fadeType", _0x760162, this);
          this._EasingEnumList = [];
          _0x3517d5(this, "duration", _0x5b36c6, this);
        }
        _0x17689c(_0x8df6ec, [{
          'key': '_easingIdx',
          'get': function () {},
          'set': function (_0x42124a) {}
        }, {
          'key': "_fadeType",
          'get': function () {
            return this.__fadeType;
          },
          'set': function (_0x2c8136) {}
        }]);
        return _0x8df6ec;
      }();
      _0x1ee08f = _0x58cf1d(_0x2c2658.prototype, "m_EasingName", [_0x10f3c7], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return '';
        }
      });
      _0x13879b = _0x58cf1d(_0x2c2658.prototype, "__easingIdx", [_0x11c135], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x58cf1d(_0x2c2658.prototype, '_easingIdx', [_0x44e5bd], Object.getOwnPropertyDescriptor(_0x2c2658.prototype, "_easingIdx"), _0x2c2658.prototype);
      _0x760162 = _0x58cf1d(_0x2c2658.prototype, '__fadeType', [_0x492cff], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x58cf1d(_0x2c2658.prototype, "_fadeType", [_0x3a4738], Object.getOwnPropertyDescriptor(_0x2c2658.prototype, "_fadeType"), _0x2c2658.prototype);
      _0x5b36c6 = _0x58cf1d(_0x2c2658.prototype, "duration", [_0x352b8b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return 0x1;
        }
      });
      var _0x4c90d9 = _0xd808eb(_0x5b8b22 = _0x2c2658) || _0x5b8b22;
      _0x4b9d64 = _0x2b21d3("Shake");
      _0x5f3aa4 = _0x2eb28e("https://docs.cocos.com/creator/3.6/manual/zh/tween/tween-function.html#%E5%86%85%E7%BD%AE%E7%BC%93%E5%8A%A8%E5%87%BD%E6%95%B0");
      _0x5d90d3 = _0x52ad9c({
        'visible': false,
        'displayName': "正負交替",
        'tooltip': "重複次數>1時, 正負交替"
      });
      _0x49c5de = _0x52ad9c({
        'type': _0x22e672,
        'displayName': "預先定義shake.json",
        'visible': function () {
          if (this.shakeJson) {
            this._updateShakeEnum(this.shakeJson.json.shakelist);
          }
          return true;
        }
      });
      _0x2f6a77 = _0x52ad9c({
        'visible': true,
        'tooltip': "自定義的shake name"
      });
      _0x487316 = _0x52ad9c({
        'type': _0x64accf,
        'visible': false
      });
      _0x2a1b1a = _0x52ad9c({
        'visible': true,
        'displayName': "儲存到預先定義.json",
        'tooltip': "若Shakename不為:custom,才會儲存"
      });
      _0x1a0543 = _0x52ad9c({
        'visible': true,
        'displayName': '預先定義',
        'tooltip': '切換後會以預先定義的數值直接覆蓋所有設定值',
        'type': _0x64accf
      });
      _0x189750 = _0x52ad9c({
        'readonly': true,
        'displayName': "總震動時間"
      });
      _0x15f260 = _0x52ad9c({
        'visible': true,
        'displayName': '振幅'
      });
      _0x4e49f2 = _0x52ad9c({
        'min': 0x1,
        'step': 0x1,
        'visible': true,
        'displayName': "震動頻率/秒"
      });
      _0x3f90d3 = _0x52ad9c({
        'step': 0x1,
        'visible': true,
        'displayName': "振幅x/y/z權重:%"
      });
      _0x559416 = _0x52ad9c({
        'visible': false,
        'type': [_0x4c90d9]
      });
      _0x28c6a3 = _0x52ad9c({
        'type': [_0x4c90d9],
        'tooltip': "輸入更改 緩動效果 數量",
        'displayName': "緩動效果"
      });
      _0x4c005f = function (_0x5f1558) {
        function _0x173e56() {
          var _0x55c52d;
          var _0x2e68da = arguments.length;
          var _0x15cce0 = new Array(_0x2e68da);
          for (var _0x540cab = 0x0; _0x540cab < _0x2e68da; _0x540cab++) {
            _0x15cce0[_0x540cab] = arguments[_0x540cab];
          }
          _0x3517d5(_0x55c52d = _0x5f1558.call.apply(_0x5f1558, [this].concat(_0x15cce0)) || this, "alternately", _0x16e36b, _0x1862e3(_0x55c52d));
          _0x3517d5(_0x55c52d, "shakeJson", _0x1c1fce, _0x1862e3(_0x55c52d));
          _0x3517d5(_0x55c52d, 'shakename', _0x581145, _0x1862e3(_0x55c52d));
          _0x3517d5(_0x55c52d, "__ShakeIdx", _0x2a9651, _0x1862e3(_0x55c52d));
          _0x3517d5(_0x55c52d, "Duration", _0x39c46d, _0x1862e3(_0x55c52d));
          _0x3517d5(_0x55c52d, "magnitude", _0x5ee1b7, _0x1862e3(_0x55c52d));
          _0x3517d5(_0x55c52d, 'frequency', _0x3430a5, _0x1862e3(_0x55c52d));
          _0x3517d5(_0x55c52d, "weight", _0x2c7c1d, _0x1862e3(_0x55c52d));
          _0x3517d5(_0x55c52d, '_TweenList', _0x43078d, _0x1862e3(_0x55c52d));
          _0x55c52d._EasingEnumList = [];
          _0x55c52d._ShakeEnumList = [];
          _0x55c52d.originPos = new _0x3815d2();
          _0x55c52d._TestShakeCnt = 0x0;
          return _0x55c52d;
        }
        _0x47cbbc(_0x173e56, _0x5f1558);
        var _0x416691 = _0x173e56.prototype;
        _0x416691.updateDuration = function () {
          var _0x2db9dc = 0x0;
          for (var _0x4c4170 = 0x0; _0x4c4170 < this._TweenList.length; _0x4c4170++) {
            _0x2db9dc += this._TweenList[_0x4c4170].duration;
          }
          this.Duration = _0x2db9dc;
        };
        _0x416691.setTweenJson = function (_0x388d9b) {
          var _0x2c6736 = this.shakeJson.json.shakelist;
          if ("custom" != _0x388d9b) {
            _0x2c6736[_0x388d9b];
          } else {
            console.warn("custom 不會儲存到預先定義.json");
          }
        };
        _0x416691.getTweenJson = function () {
          var _0x4f3d10 = {
            'magnitude': this.magnitude,
            'frequency': this.frequency,
            'weight': {
              'x': this.weight.x,
              'y': this.weight.y,
              'z': this.weight.z
            }
          };
          var _0x4f4c19 = [];
          for (var _0x33d7ae = 0x0; _0x33d7ae < this._TweenList.length; _0x33d7ae++) {
            var _0xfcc52 = this._TweenList[_0x33d7ae];
            _0x4f4c19.push({
              'm_EasingName': _0xfcc52.m_EasingName,
              '_easingIdx': _0xfcc52._easingIdx,
              '_fadeType': _0xfcc52._fadeType,
              'duration': _0xfcc52.duration
            });
          }
          _0x4f3d10._TweenList = _0x4f4c19;
          return _0x4f3d10;
        };
        _0x416691.getJsonData = function () {
          var _0x59a366 = _0x2eaa1b(_0x5266ea().mark(function _0x234b86() {
            var _0x56ae69;
            var _0x2cb76a;
            var _0x53b420;
            return _0x5266ea().wrap(function (_0x58162f) {
              for (;;) {
                switch (_0x58162f.prev = _0x58162f.next) {
                  case 0x0:
                    _0x56ae69 = {};
                    if (this.shakeJson && this.shakeJson.json) {
                      _0x56ae69 = this.shakeJson.json;
                    }
                    if ("custom" == this.shakename) {
                      _0x58162f.next = 0x13;
                      break;
                    }
                    (_0x2cb76a = _0x56ae69.shakelist)[this.shakename] = this.getTweenJson();
                    _0x56ae69.shakelist = _0x2cb76a;
                    _0x58162f.next = 0x11;
                    break;
                  case 0xb:
                    _0x53b420 = _0x58162f.sent;
                    console.log('path', _0x53b420, 'outJson', JSON.stringify(_0x56ae69, null, 0x2));
                    undefined.writeFileSync(_0x53b420, JSON.stringify(_0x56ae69, null, 0x2), "utf-8");
                    _0x58162f.next = 0x11;
                    break;
                  case 0x10:
                    console.log("請先指定 '預先定義shake.json'");
                  case 0x11:
                    _0x58162f.next = 0x14;
                    break;
                  case 0x13:
                    console.warn("custom 不會儲存到預先定義.json");
                  case 0x14:
                    return _0x58162f.abrupt("return", _0x56ae69);
                  case 0x15:
                  case 'end':
                    return _0x58162f.stop();
                }
              }
            }, _0x234b86, this);
          }));
          return function () {
            return _0x59a366.apply(this, arguments);
          };
        }();
        _0x416691.onLoad = function () {
          if (this.shakeJson && this.shakeJson.json) {
            this._updateShakeEnum(this.shakeJson.json.shakelist);
            this.shakeJson.json;
          } else {
            this.getJsonData();
          }
          var _0x5dee31 = [];
          for (var _0x43b2ee = 0x0; _0x43b2ee < _0x5256e7.length; ++_0x43b2ee) {
            var _0x4a0c13 = _0x5256e7[_0x43b2ee];
            _0x5dee31.push({
              'name': _0x4a0c13.desc,
              'easingName': _0x4a0c13.name,
              'value': _0x1ba988(_0x4a0c13.name)
            });
          }
          _0x5dee31.sort(function (_0x1d46e6, _0x4c94b0) {
            return _0x1d46e6.name < _0x4c94b0.name ? -0x1 : _0x1d46e6.name > _0x4c94b0.name ? 0x1 : 0x0;
          });
          this._EasingEnumList = _0x5dee31;
          this._updateEasingEnum();
          this.updateDuration();
        };
        _0x416691._updateShakeEnum = function (_0x3824e0) {
          var _0x5efd07 = [];
          if (_0x3824e0) {
            Object.keys(_0x3824e0).forEach(function (_0x100665) {
              _0x5efd07.push({
                'name': _0x100665,
                'value': _0x1ba988(_0x100665)
              });
            });
            _0x5efd07.sort(function (_0x3739f7, _0xfad5e8) {
              return _0x3739f7.name < _0xfad5e8.name ? -0x1 : _0x3739f7.name > _0xfad5e8.name ? 0x1 : 0x0;
            });
          }
          this._ShakeEnumList = _0x5efd07;
        };
        _0x416691._updateEasingEnum = function () {
          for (var _0x40d5dd = 0x0; _0x40d5dd < this._TweenList.length; _0x40d5dd++) {
            this._TweenList[_0x40d5dd]._EasingEnumList = this._EasingEnumList;
          }
        };
        _0x416691.start = function () {};
        _0x416691.fade = function (_0x44af3c, _0x11dc2f, _0x2e661c, _0x3e0152, _0x4691a7, _0x311817, _0x532dff) {
          this.originPos = this.node.getPosition();
          var _0x1e1f53 = 0x1 / _0x2e661c;
          var _0x5a9e6b = _0x11dc2f / _0x1e1f53;
          for (var _0x51c567 = 0x1; _0x51c567 <= _0x5a9e6b; _0x51c567++) {
            var _0x467ca4 = _0x3e0152;
            if (_0x4691a7 == _0x371e46.FadeIn) {
              _0x467ca4 *= _0x51c567 / _0x5a9e6b;
            } else if (_0x4691a7 == _0x371e46.FadeOut) {
              _0x467ca4 *= (_0x5a9e6b - _0x51c567) / _0x5a9e6b;
            }
            var _0x303bd4 = this.originPos.clone();
            var _0x1b88fd = new _0x3815d2(_0x49eea7.random() - 0.5, _0x49eea7.random() - 0.5, _0x49eea7.random() - 0.5);
            var _0x232a26 = new _0x3815d2(0x2 * _0x467ca4 * _0x311817.x / 0x64, 0x2 * _0x467ca4 * _0x311817.y / 0x64, 0x2 * _0x467ca4 * _0x311817.z / 0x64);
            _0x232a26 = _0x232a26.multiply(_0x1b88fd);
            _0x303bd4 = _0x303bd4.add(_0x232a26);
            _0x44af3c = _0x44af3c.to(_0x1e1f53, {
              'position': _0x303bd4
            }, {
              'easing': _0x532dff,
              'onStart': function (_0x366dc7) {},
              'onUpdate': function (_0x3d15cb, _0x271f9a) {},
              'onComplete': function (_0x3dab59) {}
            });
          }
          return _0x44af3c;
        };
        _0x416691.shake = function () {
          this._shake(this._TweenList, this.frequency, this.magnitude, this.weight);
        };
        _0x416691.testShake = function () {
          if (this.shakeJson && this.shakeJson.json.shakelist) {
            var _0x4386bf = this.shakeJson.json.shakelist;
            if (_0x4386bf) {
              var _0x56bf43 = Object.keys(_0x4386bf);
              _0x56bf43.push("ErrorTest");
              var _0x1c0397 = _0x56bf43[this._TestShakeCnt++ % _0x56bf43.length];
              this.ShakeWithName(_0x1c0397);
            }
          } else {
            console.log("ShakeWithName shakeJson not assign!");
          }
        };
        _0x416691.ShakeWithName = function (_0x3812c3) {
          if (this.shakeJson && this.shakeJson.json.shakelist) {
            var _0xbde5b8 = this.shakeJson.json.shakelist;
            if (!_0xbde5b8[_0x3812c3]) {
              return void console.log("ShakeWithName shakename:" + _0x3812c3 + " not found!");
            }
            var _0x3a546a = _0xbde5b8[_0x3812c3];
            var _0x4760fb = _0x3a546a._TweenList;
            var _0x5ee26c = _0x3a546a.weight;
            this._shake(_0x4760fb, _0x3a546a.frequency, _0x3a546a.magnitude, new _0x3815d2(_0x5ee26c.x, _0x5ee26c.y, _0x5ee26c.z));
          } else {
            console.log("ShakeWithName shakeJson not assign!");
          }
        };
        _0x416691._shake = function (_0x2e7b85, _0x4f35e4, _0x323e58, _0x42b22f) {
          this.originPos = this.node.getPosition();
          var _0x155319 = _0x5a1279(this.node);
          for (var _0x1303ae = 0x0; _0x1303ae < _0x2e7b85.length; _0x1303ae++) {
            var _0x22f61e = _0x2e7b85[_0x1303ae];
            _0x155319 = this.fade(_0x155319, _0x22f61e.duration, _0x4f35e4, _0x323e58, _0x22f61e._fadeType, _0x42b22f, _0x22f61e.m_EasingName);
          }
          (_0x155319 = _0x155319.to(0x0, {
            'position': this.originPos
          })).start();
        };
        _0x17689c(_0x173e56, [{
          'key': 'saveshake',
          'get': function () {
            return false;
          },
          'set': function (_0x1d9e8f) {
            this.getJsonData();
          }
        }, {
          'key': "_ShakeIdx",
          'get': function () {
            return this.__ShakeIdx;
          },
          'set': function (_0x5755e4) {}
        }, {
          'key': "TweenList",
          'get': function () {
            return this._TweenList;
          },
          'set': function (_0x232d16) {
            this._TweenList = _0x232d16;
            this.updateDuration();
            this._updateEasingEnum();
          }
        }]);
        return _0x173e56;
      }(_0x55612a);
      _0x16e36b = _0x58cf1d(_0x4c005f.prototype, 'alternately', [_0x5d90d3], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return true;
        }
      });
      _0x1c1fce = _0x58cf1d(_0x4c005f.prototype, "shakeJson", [_0x49c5de], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x581145 = _0x58cf1d(_0x4c005f.prototype, "shakename", [_0x2f6a77], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return 'custom';
        }
      });
      _0x2a9651 = _0x58cf1d(_0x4c005f.prototype, "__ShakeIdx", [_0x487316], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x58cf1d(_0x4c005f.prototype, "saveshake", [_0x2a1b1a], Object.getOwnPropertyDescriptor(_0x4c005f.prototype, 'saveshake'), _0x4c005f.prototype);
      _0x58cf1d(_0x4c005f.prototype, '_ShakeIdx', [_0x1a0543], Object.getOwnPropertyDescriptor(_0x4c005f.prototype, "_ShakeIdx"), _0x4c005f.prototype);
      _0x39c46d = _0x58cf1d(_0x4c005f.prototype, "Duration", [_0x189750], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return 0x0;
        }
      });
      _0x5ee1b7 = _0x58cf1d(_0x4c005f.prototype, "magnitude", [_0x15f260], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return 0x14;
        }
      });
      _0x3430a5 = _0x58cf1d(_0x4c005f.prototype, "frequency", [_0x4e49f2], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return 0x1;
        }
      });
      _0x2c7c1d = _0x58cf1d(_0x4c005f.prototype, 'weight', [_0x3f90d3], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return new _0x3815d2(0x0, 0x0, 0x0);
        }
      });
      _0x43078d = _0x58cf1d(_0x4c005f.prototype, "_TweenList", [_0x559416], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x58cf1d(_0x4c005f.prototype, "TweenList", [_0x28c6a3], Object.getOwnPropertyDescriptor(_0x4c005f.prototype, "TweenList"), _0x4c005f.prototype);
      var _0x484a48 = _0x4b9d64(_0xc0767b = _0x1737be(_0xc0767b = _0x5f3aa4(_0xc0767b = _0x4c005f) || _0xc0767b) || _0xc0767b) || _0xc0767b;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "b57cahiKlxMZL7TyWc1iHaf", 'SloganComponent', undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "c6e0eKOKjtNwJBDq/hJOYgn", "index", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "d9fe030x8xCqYh3n9WOiG+L", "IdleState", undefined);
      var _0x56070a;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "d5afbN4+YBFuKTDJFttwYN0", 'SpinState', undefined);
      var _0x41ddae = _0x9f6cc7.ccclass;
      _0x56070a = _0x41ddae("SpinState");
      var _0x97685e;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "c1051dtLclK7Y4HTBdDh2Zm", "ConnectionLineState", undefined);
      var _0x2dec70 = _0x9f6cc7.ccclass;
      _0x97685e = _0x2dec70('ConnectionLineState');
      var _0x4c0885;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "68e29ThBjFFqoNNIGyM+gDt", "AwardState", undefined);
      var _0xdaf051 = _0x9f6cc7.ccclass;
      _0x4c0885 = _0xdaf051("AwardState");
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "bf2f7fH7tVGrIYZrthzFKqT", "RoundShowEndState", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "ea499mIYa9DhoWXNbp79Pyf", "CheckState", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "e7369GUR8FMEbEZI2hKFoli", "RoundEndState", undefined);
      var _0x457a80;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "b7c84fGHW1KAr3Z3XxWEQw5", "EnterFreeState", undefined);
      var _0x338c4e = _0x9f6cc7.ccclass;
      _0x457a80 = _0x338c4e('EnterFreeState');
      var _0x4b5313;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "ea28enptbBJCptD80Id7H39", 'LeaveFreeState', undefined);
      var _0x3da58f = _0x9f6cc7.ccclass;
      _0x4b5313 = _0x3da58f("LeaveFreeState");
      var _0x1cc297;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "5518cGyIpVLGqk7DOrVaUkH", "MainGameWheelState", undefined);
      var _0x59e827 = _0x9f6cc7.ccclass;
      _0x1cc297 = _0x59e827('MainGameWheelState');
      var _0x3e9632;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "36dfc3Uh+9Bc778V+E7GGY2", "FreeGameWheelState", undefined);
      var _0x48241a = _0x9f6cc7.ccclass;
      _0x3e9632 = _0x48241a('FreeGameWheelState');
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "0f49aF5TCREe4Qy0Jzrxudb", 'UnshowPrepareState', undefined);
      var _0x56e6fd;
      var _0x46f86f;
      var _0x1ab85e;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, 'bcfcdOlHT5BYp993QttuOUa', 'SlotReels', undefined);
      var _0x4be24d = 0.15;
      var _0x2a0e2c = _0x9f6cc7.property;
      _0x56e6fd = _0x2a0e2c({
        'type': _0x7c0640,
        'tooltip': "symbol的SpriteFrame"
      });
      _0x46f86f = function (_0x35dd97) {
        function _0x441cf8() {
          var _0x1d4ec;
          var _0x5e2913 = arguments.length;
          var _0x35225c = new Array(_0x5e2913);
          for (var _0x24677d = 0x0; _0x24677d < _0x5e2913; _0x24677d++) {
            _0x35225c[_0x24677d] = arguments[_0x24677d];
          }
          _0x3517d5(_0x1d4ec = _0x35dd97.call.apply(_0x35dd97, [this].concat(_0x35225c)) || this, 'm_symbolSpriteFrames', _0x1ab85e, _0x1862e3(_0x1d4ec));
          _0x1d4ec.m_gameView = null;
          _0x1d4ec.m_viewSize = null;
          _0x1d4ec.m_symbolSize = null;
          _0x1d4ec.m_columnSymbols = new Array();
          _0x1d4ec.m_upperSymbols = new Array();
          _0x1d4ec.m_lowerSymbols = new Array();
          _0x1d4ec.m_reelSymbolIndex = [0x0, 0x0, 0x0, 0x0, 0x0];
          _0x1d4ec.m_plate = new Array();
          _0x1d4ec.m_isHardStop = false;
          _0x1d4ec.m_singleStopSound = false;
          _0x1d4ec.m_nowScatterCount = -0x1;
          _0x1d4ec.m_secondScatterCol = -0x1;
          _0x1d4ec.m_isStartNearWin = false;
          _0x1d4ec.m_isPlayNearWin = [false, false, false, false, false];
          _0x1d4ec.m_nearWinEnd = [false, false, false, false, false];
          _0x1d4ec.m_timesOfNearWinSpin = [3.213, 3.213, 3.213, 3.213, 3.213];
          _0x1d4ec.m_reelPositionOffset = [_0x386e5e(0x0, 0x0), _0x386e5e(0x0, 0x0), _0x386e5e(0x0, 0x0), _0x386e5e(0x0, 0x0), _0x386e5e(0x0, 0x0), _0x386e5e(0x0, 0x0)];
          _0x1d4ec.m_reelStopTime = new Array();
          _0x1d4ec.m_reelPreTime = new Array();
          _0x1d4ec.m_isChangeSymbol = {};
          _0x1d4ec.m_isChangeToFinalSymbol = new Array();
          _0x1d4ec.m_isPlaySymbolAnim = new Array();
          _0x1d4ec.m_time = 0x0;
          _0x1d4ec.m_stopTime = 0x0;
          _0x1d4ec.m_riseTime = 0x0;
          _0x1d4ec.m_spinBufferTime01 = 0.1;
          _0x1d4ec.m_spinBufferTime02 = 0.1;
          _0x1d4ec.m_downLength = 0xf;
          _0x1d4ec.m_spinSpeed = 0.25;
          _0x1d4ec.m_upLength = 0x0;
          _0x1d4ec.m_numberOfSymbol = 0x0;
          _0x1d4ec.m_timesOfBaseSpin = 0x2;
          _0x1d4ec.m_spinIntervalTimes = 0x1;
          _0x1d4ec.m_spinDelayTime = 0x0;
          _0x1d4ec.m_isStop = false;
          _0x1d4ec.m_isClickStopBtn = false;
          _0x1d4ec.m_isPlaySound = [false, false, false, false, false];
          _0x1d4ec.m_scatterCount = [];
          _0x1d4ec.m_fgScatter = [];
          return _0x1d4ec;
        }
        _0x47cbbc(_0x441cf8, _0x35dd97);
        var _0x4803ff = _0x441cf8.prototype;
        _0x4803ff.start = function () {
          var _0x15e725 = this;
          this.m_viewSize = this.node.getComponent(_0x2835d7).contentSize;
          this.m_symbolSize = new _0x317bea(this.m_viewSize.width / _0x549b11.COL, this.m_viewSize.height / _0x549b11.ROW);
          for (var _0x22420b = 0x0; _0x22420b < this.m_reelSymbolIndex.length; _0x22420b++) {
            this.m_reelSymbolIndex[_0x22420b] = Math.floor(Math.random() * _0x549b11.REEL_SYMBOLS[_0x22420b].length);
          }
          var _0x4d697c = function () {
            var _0x4ae178 = _0x415166.TempoSetting.TripleCoinTreasure;
            _0x15e725.m_riseTime = _0x4ae178.BASE.RISE_TIME;
            _0x15e725.m_spinBufferTime01 = _0x4ae178.BASE.SPIN_BUFFER_TIME_01;
            _0x15e725.m_spinBufferTime02 = _0x4ae178.BASE.SPIN_BUFFER_TIME_02;
            _0x15e725.m_downLength = _0x4ae178.BASE.DOWN_LENGTH;
            _0x15e725.m_spinSpeed = _0x4ae178.BASE.SPIN_SPEED;
            _0x15e725.m_upLength = _0x4ae178.BASE.UP_LENGTH;
            _0x15e725.m_spinIntervalTimes = _0x4ae178.BASE.SPIN_INTERVAL_TIMES;
            _0x15e725.m_spinDelayTime = _0x4ae178.BASE.SPIN_DELAY_TIME;
            _0x15e725.m_timesOfBaseSpin = _0x4ae178.BASE.TIMES_OF_BASE_SPIN;
            _0x4be24d = _0x4ae178.BASE.HARD_STOP_INTERVAL_TIME;
          };
          _0x4d697c();
          _0x415166.AddCb(_0x4d697c);
          for (var _0x264d8b = 0x0; _0x264d8b < _0x549b11.COL; _0x264d8b++) {
            var _0x305520 = new _0x2561da.lwcProto.Column();
            for (var _0x306ee9 = 0x0; _0x306ee9 < _0x549b11.ROW; _0x306ee9++) {
              _0x305520.Col.push(0x7 - _0x264d8b);
            }
            this.m_plate[_0x264d8b] = _0x305520;
          }
          this.CreateSymbol();
        };
        _0x4803ff.CreateSymbol = function () {
          for (var _0x2cf221 = 0x0; _0x2cf221 < _0x549b11.COL; _0x2cf221++) {
            this.m_isChangeToFinalSymbol.push(false);
            this.m_isPlaySymbolAnim.push(false);
            this.m_reelStopTime.push(null);
            this.m_reelPreTime.push(null);
            var _0x3f69de = new _0xdf866d();
            if (null === _0x3f69de.getComponent(_0x345885)) {
              _0x3f69de.addComponent(_0x345885);
            }
            if (null === _0x3f69de.getComponent(_0x2835d7)) {
              _0x3f69de.addComponent(_0x2835d7);
            }
            this.node.addChild(_0x3f69de);
            this.m_columnSymbols.push(_0x3f69de);
            _0x3f69de.Init(this, this.m_viewSize.height, this.m_plate[_0x2cf221].Col);
            _0x3f69de.name = this.m_numberOfSymbol.toString();
            this.m_numberOfSymbol += 0x1;
            var _0xc23ca1 = this.m_symbolSize.width * (_0x2cf221 + 0.5) + this.m_reelPositionOffset[_0x2cf221].x - this.m_viewSize.width / 0x2;
            _0x3f69de.setPosition(_0x386e5e(_0xc23ca1, -this.m_viewSize.height / 0x2));
          }
          for (var _0x272ee6 = 0x0; _0x272ee6 < _0x549b11.COL; _0x272ee6++) {
            var _0x269eb1 = this.m_symbolSize.width * (_0x272ee6 + 0.5) + this.m_reelPositionOffset[_0x272ee6].x - this.m_viewSize.width / 0x2;
            var _0x4bdfd1 = this.m_viewSize.height - this.m_viewSize.height / 0x2;
            var _0x2c2e41 = new _0xdf866d();
            _0x2c2e41.Init(this, this.m_viewSize.height, this.SpecifiedSymbolList(_0x272ee6));
            this.node.addChild(_0x2c2e41);
            _0x2c2e41.name = (this.m_numberOfSymbol + _0x272ee6).toString();
            _0x2c2e41.setPosition(_0x386e5e(_0x269eb1, _0x4bdfd1));
            this.m_upperSymbols.push(_0x2c2e41);
            _0x4bdfd1 = -this.m_viewSize.height - this.m_viewSize.height / 0x2;
            var _0x46a4d8 = new _0xdf866d();
            _0x46a4d8.Init(this, this.m_viewSize.height, this.RandSymbolList());
            this.node.addChild(_0x46a4d8);
            _0x46a4d8.name = (-(_0x272ee6 + 0x1)).toString();
            _0x46a4d8.setPosition(_0x386e5e(_0x269eb1, _0x4bdfd1));
            this.m_lowerSymbols.push(_0x46a4d8);
          }
        };
        _0x4803ff.Init = function (_0x5f2eff) {
          this.m_gameView = _0x5f2eff;
        };
        _0x4803ff.GetSymbolSpriteFrame = function (_0x396a78) {
          return this.m_symbolSpriteFrames[_0x396a78 || 0x0];
        };
        _0x4803ff.ShowDarkOrLightSymbol = function (_0x12ef5f, _0x361878, _0x17a8fd) {
          if (undefined === _0x361878) {
            _0x361878 = 0x0;
          }
          if (undefined === _0x17a8fd) {
            _0x17a8fd = this.m_columnSymbols.length;
          }
          for (var _0x5e097b = _0x361878; _0x5e097b < _0x17a8fd; _0x5e097b++) {
            this.m_columnSymbols[_0x5e097b].SetDark(_0x12ef5f);
          }
        };
        _0x4803ff.SetSymbol = function (_0x3d8771, _0x456679, _0x1ba4e4) {
          this.m_plate[_0x3d8771].Col[_0x456679] = _0x1ba4e4;
        };
        _0x4803ff.GetSymbol = function (_0x14867b, _0x3efb6d) {
          return null === this.m_plate[_0x14867b] || undefined === this.m_plate[_0x14867b] || null === this.m_plate[_0x14867b].Col || undefined === this.m_plate[_0x14867b].Col || null === this.m_plate[_0x14867b].Col[_0x3efb6d] || undefined === this.m_plate[_0x14867b].Col[_0x3efb6d] ? null : this.m_plate[_0x14867b].Col[_0x3efb6d];
        };
        _0x4803ff.SetSymbolNode = function (_0x4f837e, _0x43e512, _0x450006) {
          this.m_plate[_0x4f837e].Col[_0x43e512] = _0x450006;
          this.m_columnSymbols[_0x4f837e].SetSymbol(_0x43e512, _0x450006);
        };
        _0x4803ff.GetSymbolNode = function (_0x5f4c49, _0x49c7a3) {
          return _0x5f4c49 >= 0x0 && _0x5f4c49 < _0x549b11.COL && _0x49c7a3 >= 0x0 && _0x49c7a3 < _0x549b11.ROW ? this.m_columnSymbols[_0x5f4c49].GetSymbol(_0x49c7a3) : null;
        };
        _0x4803ff.GetSymbolPosition = function (_0x2e9c5b, _0x80741a) {
          var _0x457b69 = this.m_symbolSize.width * (_0x2e9c5b + 0.5) + this.m_reelPositionOffset[_0x2e9c5b].x - this.m_viewSize.width / 0x2;
          var _0x55bb54 = this.m_symbolSize.height * (_0x549b11.ROW - _0x80741a - 0.5) + this.m_reelPositionOffset[_0x2e9c5b].y - this.m_viewSize.height / 0x2;
          return _0x386e5e(_0x457b69, _0x55bb54);
        };
        _0x4803ff.GetSymbolNodePosition = function (_0x567006, _0x2cca84) {
          if (_0x567006 >= 0x0 && _0x567006 < _0x549b11.COL && _0x2cca84 >= 0x0 && _0x2cca84 < _0x549b11.ROW) {
            var _0x44430c = this.m_columnSymbols[_0x567006].GetSymbol(_0x2cca84);
            var _0x1001b8 = _0x44430c.parent.getComponent(_0x2835d7).convertToWorldSpaceAR(_0x44430c.position);
            var _0x47dc92 = this.getComponent(_0x2835d7).convertToNodeSpaceAR(_0x1001b8);
            return _0x386e5e(_0x47dc92.x, _0x47dc92.y, 0x0);
          }
          return _0x386e5e(0x0, 0x0, 0x0);
        };
        _0x4803ff.StartSpin = function () {
          var _0x364cbf = _0x2eaa1b(_0x5266ea().mark(function _0x477c82(_0x489bb2) {
            var _0x5c967a;
            var _0x3d41f6;
            var _0x502e75;
            var _0x51eb24;
            return _0x5266ea().wrap(function (_0x467ce2) {
              for (;;) {
                switch (_0x467ce2.prev = _0x467ce2.next) {
                  case 0x0:
                    this.m_isHardStop = _0x489bb2;
                    this.m_time = 0x0;
                    this.m_stopTime = 0x0;
                    this.m_isStop = false;
                    this.m_isClickStopBtn = false;
                    this.m_singleStopSound = false;
                    this.m_nowScatterCount = -0x1;
                    this.m_isPlaySound = [false, false, false, false, false];
                    this.m_secondScatterCol = -0x1;
                    this.m_isStartNearWin = false;
                    this.m_isPlayNearWin = [false, false, false, false, false];
                    this.m_nearWinEnd = [false, false, false, false, false];
                    for (_0x5c967a = 0x0; _0x5c967a < _0x549b11.COL; _0x5c967a++) {
                      this.m_reelStopTime[_0x5c967a] = null;
                      this.m_reelPreTime[_0x5c967a] = null;
                    }
                    for (_0x3d41f6 = 0x0; _0x3d41f6 < this.m_isChangeToFinalSymbol.length; _0x3d41f6++) {
                      this.m_isChangeToFinalSymbol[_0x3d41f6] = false;
                      this.m_isPlaySymbolAnim[_0x3d41f6] = false;
                    }
                    for (_0x502e75 = 0x0; _0x502e75 < _0x549b11.COL; _0x502e75++) {
                      for (_0x51eb24 = 0x0; _0x51eb24 < _0x549b11.ROW; _0x51eb24++) {
                        this.GetSymbolNode(_0x502e75, _0x51eb24).active = true;
                      }
                    }
                    this.ShowDarkOrLightSymbol(false);
                  case 0x10:
                  case 'end':
                    return _0x467ce2.stop();
                }
              }
            }, _0x477c82, this);
          }));
          return function (_0x3b9565) {
            return _0x364cbf.apply(this, arguments);
          };
        }();
        _0x4803ff.SetIsClickStopBtn = function () {
          this.m_isClickStopBtn = true;
          if (0x0 != this.m_stopTime) {
            var _0x13b695 = Math.ceil(this.m_time / this.m_spinSpeed);
            _0x13b695 = _0x13b695 > 0x0 ? _0x13b695 : 0x1;
            var _0x55292b = _0x415166.TempoSetting.TripleCoinTreasure.SPEED_UP_STOP_TIME(0x0, this.m_time);
            if (_0x55292b < this.m_stopTime) {
              this.m_stopTime = _0xfd5517.strip(_0x55292b);
            }
            var _0x24c929 = _0x13b695 * this.m_spinSpeed;
            for (var _0x3bc773 = 0x0; _0x3bc773 < _0x549b11.COL; _0x3bc773++) {
              if (this.m_reelStopTime[_0x3bc773] > _0x24c929) {
                this.m_reelStopTime[_0x3bc773] = _0xfd5517.strip(_0x24c929);
                this.m_reelPreTime[_0x3bc773] = _0xfd5517.strip((_0x13b695 - 0x1) * this.m_spinSpeed);
              }
            }
          }
        };
        _0x4803ff.IsPlateStop = function () {
          return this.m_isStop;
        };
        _0x4803ff.Spin = function (_0x1dd569) {
          this.m_time = _0xfd5517.strip(this.m_time + _0x1dd569);
          if (!this.m_isStop) {
            this.Spin_RealSpinMultiple();
            if (!this.m_isHardStop && !this.m_isClickStopBtn && !this.m_isStartNearWin && -0x1 !== this.m_secondScatterCol && this.m_time > this.m_reelStopTime[this.m_secondScatterCol]) {
              this.m_isStartNearWin = true;
            }
            if (this.m_time >= this.m_stopTime && 0x0 != this.m_stopTime) {
              this.m_isStop = true;
            }
          }
        };
        _0x4803ff.SetUpperAndLowerSymbolActive = function (_0x2e389d) {
          for (var _0x1982c2 = 0x0; _0x1982c2 < _0x549b11.COL; _0x1982c2++) {
            for (var _0x4b8ad0 = 0x0; _0x4b8ad0 < _0x549b11.ROW; _0x4b8ad0++) {
              this.m_upperSymbols[_0x1982c2].SetActive(_0x2e389d);
              this.m_lowerSymbols[_0x1982c2].SetActive(_0x2e389d);
            }
          }
        };
        _0x4803ff.InitUpperAndLowerSymbol = function () {
          for (var _0x580e8d = 0x0; _0x580e8d < _0x549b11.COL; _0x580e8d++) {
            this.m_upperSymbols[_0x580e8d].SetSymbols(this.SpecifiedSymbolList(_0x580e8d));
            this.m_lowerSymbols[_0x580e8d].SetSymbols(this.RandSymbolList());
          }
        };
        _0x4803ff.IsScatterSymbol = function (_0x25690d) {
          return -0x1 !== [_0x549b11.Symbol.SYMBOL_WILD].indexOf(_0x25690d);
        };
        _0x4803ff.Spin_RealSpinMultiple = function () {
          var _0x486d2d = _0x2eaa1b(_0x5266ea().mark(function _0x1d9888() {
            var _0x576372;
            var _0x4c61f3;
            var _0xe8fce9;
            var _0x34ed1d;
            var _0x2874d0;
            var _0x38db71;
            var _0x234143;
            var _0xda050b;
            var _0x4e8e16;
            var _0xeed093;
            var _0x221724;
            var _0x5e5633;
            var _0x266f52;
            var _0x17cef0;
            var _0x30a783;
            var _0x3c0ec5;
            var _0x360e10;
            var _0x374f95;
            var _0x3633fe;
            var _0x1c2d97;
            var _0x3b0c8b;
            var _0x1ed570;
            var _0x1e2410;
            var _0x643bdc;
            var _0x5b91a2;
            var _0x2341f9;
            return _0x5266ea().wrap(function (_0x556bb5) {
              for (;;) {
                switch (_0x556bb5.prev = _0x556bb5.next) {
                  case 0x0:
                    _0x576372 = this.m_spinSpeed;
                    _0x4c61f3 = this.m_time;
                    if (this.m_isStartNearWin) {
                      _0x576372 = this.m_spinSpeed / 0x2;
                    }
                    for (_0xe8fce9 = 0x0; _0xe8fce9 < _0x549b11.COL; _0xe8fce9++) {
                      _0x34ed1d = this.m_reelStopTime[_0xe8fce9];
                      _0x2874d0 = this.m_riseTime * _0x549b11.COL;
                      if (this.m_isStartNearWin && _0xe8fce9 > this.m_secondScatterCol && _0xe8fce9 < _0x549b11.COL - 0x1 && _0x4c61f3 > this.m_reelStopTime[_0xe8fce9 - 0x1] && !this.m_isPlayNearWin[_0xe8fce9]) {
                        this.m_isPlayNearWin[_0xe8fce9] = true;
                        this.m_gameView.ShowNearWinCol(_0xe8fce9);
                        if (_0xe8fce9 === this.m_secondScatterCol + 0x1) {
                          this.ShowDarkOrLightSymbol(true, 0x0, _0x549b11.COL);
                          this.ShowDarkOrLightSymbol(false, _0xe8fce9, _0xe8fce9);
                        }
                      }
                      _0x38db71 = this.m_symbolSize.width * (_0xe8fce9 + 0.5) + this.m_reelPositionOffset[_0xe8fce9].x - this.m_viewSize.width / 0x2;
                      _0x234143 = -this.m_viewSize.height / 0x2;
                      _0xda050b = 0x3 * this.m_viewSize.height;
                      _0x4e8e16 = (_0x4c61f3 - _0x2874d0) % _0x576372 / _0x576372 * _0xda050b;
                      _0xeed093 = this.m_symbolSize.width * (_0xe8fce9 + 0.5) + this.m_reelPositionOffset[_0xe8fce9].x - this.m_viewSize.width / 0x2;
                      _0x221724 = this.m_viewSize.height - this.m_viewSize.height / 0x2;
                      if (_0x4c61f3 < this.m_riseTime * (_0xe8fce9 + 0x1)) {
                        _0x5e5633 = (_0x4c61f3 - this.m_riseTime * _0xe8fce9) / this.m_riseTime * this.m_upLength;
                        this.m_upperSymbols[_0xe8fce9].setPosition(_0xeed093, _0x221724 + _0x5e5633);
                      } else if (_0x4c61f3 < _0x2874d0) {
                        this.m_upperSymbols[_0xe8fce9].setPosition(_0xeed093, _0x221724 + this.m_upLength);
                      } else if (null == _0x34ed1d || _0x4c61f3 < _0x34ed1d + _0x2874d0) {
                        _0x266f52 = this.GetMovelength(_0x4e8e16, 2.5 * this.m_viewSize.height, _0xda050b, _0xe8fce9, this.m_numberOfSymbol + _0xe8fce9, this.m_upperSymbols[_0xe8fce9], false);
                        this.m_upperSymbols[_0xe8fce9].setPosition(_0xeed093, _0x221724 - _0x266f52);
                      } else if (_0x4c61f3 < _0x34ed1d + _0x2874d0 + this.m_spinBufferTime01) {
                        _0x17cef0 = (_0x4c61f3 - _0x34ed1d - _0x2874d0) / this.m_spinBufferTime01 * this.m_downLength;
                        this.m_upperSymbols[_0xe8fce9].setPosition(_0xeed093, _0x221724 - _0x17cef0);
                        this.CheckChangeToFinalSymbol(_0xe8fce9, this.m_upperSymbols[_0xe8fce9].name, this.m_upperSymbols[_0xe8fce9], true);
                      } else if (_0x4c61f3 < _0x34ed1d + _0x2874d0 + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
                        _0x30a783 = (_0x4c61f3 - _0x34ed1d - _0x2874d0 - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
                        this.m_upperSymbols[_0xe8fce9].setPosition(_0xeed093, _0x221724 - this.m_downLength + _0x30a783);
                        this.CheckChangeToFinalSymbol(_0xe8fce9, this.m_upperSymbols[_0xe8fce9].name, this.m_upperSymbols[_0xe8fce9], true);
                      } else {
                        this.CheckChangeToFinalSymbol(_0xe8fce9, this.m_numberOfSymbol + _0xe8fce9, this.m_upperSymbols[_0xe8fce9], false);
                        this.m_upperSymbols[_0xe8fce9].setPosition(_0xeed093, _0x221724);
                      }
                      _0xeed093 = this.m_symbolSize.width * (_0xe8fce9 + 0.5) + this.m_reelPositionOffset[_0xe8fce9].x - this.m_viewSize.width / 0x2;
                      _0x221724 = -this.m_viewSize.height - this.m_viewSize.height / 0x2;
                      if (_0x4c61f3 < this.m_riseTime * (_0xe8fce9 + 0x1)) {
                        _0x3c0ec5 = (_0x4c61f3 - this.m_riseTime * _0xe8fce9) / this.m_riseTime * this.m_upLength;
                        this.m_lowerSymbols[_0xe8fce9].setPosition(_0xeed093, _0x221724 + _0x3c0ec5);
                      } else if (_0x4c61f3 < _0x2874d0) {
                        this.m_lowerSymbols[_0xe8fce9].setPosition(_0xeed093, _0x221724 + this.m_upLength);
                      } else if (null == _0x34ed1d || _0x4c61f3 < _0x34ed1d + _0x2874d0) {
                        _0x360e10 = this.GetMovelength(_0x4e8e16, 0.5 * this.m_viewSize.height, _0xda050b, _0xe8fce9, -(_0xe8fce9 + 0x1), this.m_lowerSymbols[_0xe8fce9], false);
                        this.m_lowerSymbols[_0xe8fce9].setPosition(_0xeed093, _0x221724 - _0x360e10);
                      } else if (_0x4c61f3 < _0x34ed1d + _0x2874d0 + this.m_spinBufferTime01) {
                        _0x374f95 = (_0x4c61f3 - _0x34ed1d - _0x2874d0) / this.m_spinBufferTime01 * this.m_downLength;
                        this.m_lowerSymbols[_0xe8fce9].setPosition(_0xeed093, _0x221724 - _0x374f95);
                        this.CheckChangeToFinalSymbol(_0xe8fce9, this.m_lowerSymbols[_0xe8fce9].name, this.m_lowerSymbols[_0xe8fce9], true);
                      } else if (_0x4c61f3 < _0x34ed1d + _0x2874d0 + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
                        _0x3633fe = (_0x4c61f3 - _0x34ed1d - _0x2874d0 - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
                        this.m_lowerSymbols[_0xe8fce9].setPosition(_0xeed093, _0x221724 - this.m_downLength + _0x3633fe);
                        this.CheckChangeToFinalSymbol(_0xe8fce9, this.m_lowerSymbols[_0xe8fce9].name, this.m_lowerSymbols[_0xe8fce9], true);
                      } else {
                        this.CheckChangeToFinalSymbol(_0xe8fce9, -(_0xe8fce9 + 0x1), this.m_lowerSymbols[_0xe8fce9], true);
                        this.m_lowerSymbols[_0xe8fce9].setPosition(_0xeed093, _0x221724);
                      }
                      if (_0x4c61f3 < this.m_riseTime * (_0xe8fce9 + 0x1)) {
                        _0x1c2d97 = (_0x4c61f3 - this.m_riseTime * _0xe8fce9) / this.m_riseTime * this.m_upLength;
                        this.m_columnSymbols[_0xe8fce9].setPosition(_0x38db71, _0x234143 + _0x1c2d97);
                      } else {
                        if (_0x4c61f3 < _0x2874d0) {
                          this.m_columnSymbols[_0xe8fce9].setPosition(_0x38db71, _0x234143 + this.m_upLength);
                        } else {
                          if (null == _0x34ed1d || _0x4c61f3 < _0x34ed1d + _0x2874d0) {
                            _0x3b0c8b = this.GetMovelength(_0x4e8e16, 1.5 * this.m_viewSize.height, _0xda050b, _0xe8fce9, this.m_columnSymbols[_0xe8fce9].name, this.m_columnSymbols[_0xe8fce9], false);
                            this.m_columnSymbols[_0xe8fce9].setPosition(_0x38db71, _0x234143 - _0x3b0c8b);
                          } else {
                            if (_0x4c61f3 < _0x34ed1d + _0x2874d0 + this.m_spinBufferTime01) {
                              _0x1ed570 = (_0x4c61f3 - _0x34ed1d - _0x2874d0) / this.m_spinBufferTime01 * this.m_downLength;
                              this.m_columnSymbols[_0xe8fce9].setPosition(_0x38db71, _0x234143 - _0x1ed570);
                              this.CheckChangeToFinalSymbol(_0xe8fce9, this.m_columnSymbols[_0xe8fce9].name, this.m_columnSymbols[_0xe8fce9], true);
                              this.CheckPlayStopSound(_0xe8fce9);
                            } else {
                              if (_0x4c61f3 < _0x34ed1d + _0x2874d0 + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
                                _0x1e2410 = (_0x4c61f3 - _0x34ed1d - _0x2874d0 - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
                                this.m_columnSymbols[_0xe8fce9].setPosition(_0x38db71, _0x234143 - this.m_downLength + _0x1e2410);
                                this.CheckChangeToFinalSymbol(_0xe8fce9, this.m_columnSymbols[_0xe8fce9].name, this.m_columnSymbols[_0xe8fce9], true);
                              } else {
                                this.CheckChangeToFinalSymbol(_0xe8fce9, this.m_columnSymbols[_0xe8fce9].name, this.m_columnSymbols[_0xe8fce9], true);
                                this.m_columnSymbols[_0xe8fce9].setPosition(_0x38db71, _0x234143);
                                if (this.m_isStartNearWin) {
                                  if (!this.m_nearWinEnd[_0xe8fce9]) {
                                    this.m_nearWinEnd[_0xe8fce9] = true;
                                    this.m_gameView.HideNearWinCol(_0xe8fce9);
                                  }
                                  this.ShowDarkOrLightSymbol(true, _0xe8fce9, _0xe8fce9 + 0x1);
                                }
                                if (!this.m_isPlaySymbolAnim[_0xe8fce9]) {
                                  this.m_isPlaySymbolAnim[_0xe8fce9] = true;
                                  for (_0x643bdc = 0x0; _0x643bdc < this.m_plate[_0xe8fce9].Col.length; _0x643bdc++) {
                                    if (this.IsScatterSymbol(this.GetSymbol(_0xe8fce9, _0x643bdc)) && -0x1 !== this.m_secondScatterCol && _0xe8fce9 > this.m_secondScatterCol && !this.IsHardStop && _0xe8fce9 < _0x549b11.COL - 0x1) {
                                      this.m_gameView.EffectPlate.ShowScatteNearWin(_0xe8fce9, _0x643bdc);
                                    }
                                  }
                                  if (_0xe8fce9 === this.m_secondScatterCol && !this.IsHardStop) {
                                    for (_0x5b91a2 = 0x0; _0x5b91a2 <= _0xe8fce9; _0x5b91a2++) {
                                      for (_0x2341f9 = 0x0; _0x2341f9 < this.m_plate[_0x5b91a2].Col.length; _0x2341f9++) {
                                        if (this.IsScatterSymbol(this.GetSymbol(_0x5b91a2, _0x2341f9))) {
                                          this.m_gameView.EffectPlate.ShowScatteNearWin(_0x5b91a2, _0x2341f9);
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  case 0x4:
                  case "end":
                    return _0x556bb5.stop();
                }
              }
            }, _0x1d9888, this);
          }));
          return function () {
            return _0x486d2d.apply(this, arguments);
          };
        }();
        _0x4803ff.GetMovelength = function (_0x4b114a, _0x45a649, _0x457cfc, _0x215138, _0x1a310b, _0x4d1b8a, _0x4c9be5) {
          if (_0x4b114a >= _0x45a649) {
            _0x4b114a -= _0x457cfc;
            if (this.m_isChangeSymbol[_0x1a310b]) {
              this.m_isChangeSymbol[_0x1a310b] = false;
              this.ChangeSymbol(_0x215138, _0x4d1b8a, _0x4c9be5);
            }
          } else {
            this.m_isChangeSymbol[_0x1a310b] = true;
          }
          return _0x4b114a;
        };
        _0x4803ff.ChangeSymbol = function (_0x11fd96, _0x3f6846, _0x29c50f) {
          var _0x55e0c1 = Number(_0x3f6846.name);
          var _0x15535e = this.m_reelPreTime[_0x11fd96];
          var _0x507996 = this.m_riseTime;
          if (_0x29c50f) {
            if (_0x55e0c1 >= 0x0 && _0x55e0c1 < this.m_numberOfSymbol) {
              _0x3f6846.SetSymbols(this.m_plate[_0x11fd96].Col);
            } else {
              var _0x556fe2 = this.SpecifiedSymbolList(_0x11fd96);
              _0x3f6846.SetSymbols(_0x556fe2);
            }
          } else {
            if (null != _0x15535e && (this.m_time >= _0x15535e || Math.abs(this.m_time - (_0x15535e + _0x507996)) < this.m_spinSpeed)) {
              if (_0x55e0c1 >= 0x0 && _0x55e0c1 < this.m_numberOfSymbol) {
                _0x3f6846.SetSymbols(this.m_plate[_0x11fd96].Col);
              } else {
                var _0x36db09 = this.SpecifiedSymbolList(_0x11fd96);
                _0x3f6846.SetSymbols(_0x36db09);
              }
            } else {
              var _0x43d54e = this.SpecifiedSymbolList(_0x11fd96);
              _0x3f6846.SetSymbols(_0x43d54e);
            }
          }
        };
        _0x4803ff.GetSymbolList = function () {
          return [_0x549b11.Symbol.SYMBOL_NINE, _0x549b11.Symbol.SYMBOL_TEN, _0x549b11.Symbol.SYMBOL_J, _0x549b11.Symbol.SYMBOL_Q, _0x549b11.Symbol.SYMBOL_K, _0x549b11.Symbol.SYMBOL_A, _0x549b11.Symbol.SYMBOL_CHERRY, _0x549b11.Symbol.SYMBOL_GRAPE, _0x549b11.Symbol.SYMBOL_ORANGE, _0x549b11.Symbol.SYMBOL_WATERMELON, _0x549b11.Symbol.SYMBOL_SEVEN];
        };
        _0x4803ff.RandSymbolList = function () {
          var _0x2a7f69 = [];
          for (var _0x4d1763 = _0x549b11.ROW; _0x4d1763 > 0x0;) {
            var _0x5d8317 = this.GetSymbolList();
            _0x4d1763 = _0xfd5517.minus(_0x4d1763, 0x1);
            _0x2a7f69.push(_0x5d8317[Math.floor(Math.random() * _0x5d8317.length)]);
          }
          return _0x2a7f69;
        };
        _0x4803ff.SpecifiedSymbolList = function (_0x264b93) {
          var _0x368991 = [];
          for (var _0x50162f = _0x549b11.ROW; _0x50162f > 0x0;) {
            var _0x4d68dd = this.m_reelSymbolIndex[_0x264b93];
            _0x368991.unshift(_0x549b11.REEL_SYMBOLS[_0x264b93][_0x4d68dd]);
            this.m_reelSymbolIndex[_0x264b93] = (_0x4d68dd + 0x1) % _0x549b11.REEL_SYMBOLS[_0x264b93].length;
            _0x50162f = _0xfd5517.minus(_0x50162f, 0x1);
          }
          return _0x368991;
        };
        _0x4803ff.CheckChangeToFinalSymbol = function (_0x8ca1c8, _0x2b9835, _0x4e1b19, _0x323b07) {
          if (undefined === _0x323b07) {
            _0x323b07 = false;
          }
          if (!this.m_isChangeToFinalSymbol[_0x2b9835]) {
            this.m_isChangeToFinalSymbol[_0x2b9835] = true;
            this.ChangeSymbol(_0x8ca1c8, _0x4e1b19, _0x323b07);
          }
        };
        _0x4803ff.CheckPlayStopSound = function () {
          var _0x13d980 = _0x2eaa1b(_0x5266ea().mark(function _0x52fc4e(_0xe4fefb) {
            var _0x3621ee;
            var _0x3e88f5;
            var _0x386d71;
            var _0x221705;
            var _0x5dfc5e;
            var _0x2fcdd3;
            var _0x4c9e54;
            var _0x40136c;
            var _0x30f476;
            var _0x5a14f6;
            var _0x8a387c;
            var _0x121acf;
            return _0x5266ea().wrap(function (_0x1cebc5) {
              for (;;) {
                switch (_0x1cebc5.prev = _0x1cebc5.next) {
                  case 0x0:
                    if (this.m_isPlaySound[_0xe4fefb]) {
                      _0x1cebc5.next = 0x25;
                      break;
                    }
                    this.m_isPlaySound[_0xe4fefb] = true;
                    if (!this.m_isClickStopBtn) {
                      _0x1cebc5.next = 0x13;
                      break;
                    }
                    if (!this.m_singleStopSound) {
                      _0x1cebc5.next = 0x8;
                      break;
                    }
                    this.m_gameView.EffectPlate.SpecialSymbolStop(_0xe4fefb, this.m_plate[_0xe4fefb].Col);
                    return _0x1cebc5.abrupt("return");
                  case 0x8:
                    this.m_singleStopSound = true;
                  case 0x9:
                    _0x3621ee = 0x0;
                    _0x3e88f5 = false;
                    for (_0x386d71 = 0x0; _0x386d71 < _0x549b11.COL; _0x386d71++) {
                      for (_0x221705 = 0x0; _0x221705 < this.m_plate[_0x386d71].Col.length; _0x221705++) {
                        if (this.IsScatterSymbol(this.m_plate[_0x386d71].Col[_0x221705])) {
                          _0x3621ee++;
                        }
                      }
                    }
                    if (this.m_nowScatterCount < _0x3621ee) {
                      _0x3e88f5 = true;
                    }
                    this.PlayStopSound(_0x3621ee, _0x3e88f5);
                    this.m_nowScatterCount = _0x3621ee;
                    _0x1cebc5.next = 0x11;
                    return this.m_gameView.EffectPlate.SpecialSymbolStop(_0xe4fefb, this.m_plate[_0xe4fefb].Col);
                  case 0x11:
                    _0x1cebc5.next = 0x25;
                    break;
                  case 0x13:
                    if (this.m_isHardStop) {
                      _0x1cebc5.next = 0x1d;
                      break;
                    }
                    _0x5dfc5e = 0x0;
                    _0x2fcdd3 = false;
                    for (_0x4c9e54 = 0x0; _0x4c9e54 <= _0xe4fefb; _0x4c9e54++) {
                      for (_0x40136c = 0x0; _0x40136c < this.m_plate[_0x4c9e54].Col.length; _0x40136c++) {
                        if (this.IsScatterSymbol(this.m_plate[_0x4c9e54].Col[_0x40136c])) {
                          _0x5dfc5e++;
                          if (_0x4c9e54 === _0xe4fefb) {
                            _0x2fcdd3 = true;
                          }
                        }
                      }
                    }
                    this.m_nowScatterCount = _0x5dfc5e;
                    this.PlayStopSound(_0x5dfc5e, _0x2fcdd3);
                    _0x1cebc5.next = 0x1b;
                    return this.m_gameView.EffectPlate.SpecialSymbolStop(_0xe4fefb, this.m_plate[_0xe4fefb].Col);
                  case 0x1b:
                    _0x1cebc5.next = 0x25;
                    break;
                  case 0x1d:
                    if (0x0 === _0xe4fefb) {
                      _0x1cebc5.next = 0x1f;
                      break;
                    }
                    return _0x1cebc5.abrupt("return");
                  case 0x1f:
                    _0x30f476 = 0x0;
                    for (_0x5a14f6 = 0x0; _0x5a14f6 < _0x549b11.COL; _0x5a14f6++) {
                      for (_0x8a387c = 0x0; _0x8a387c < this.m_plate[_0x5a14f6].Col.length; _0x8a387c++) {
                        if (this.IsScatterSymbol(this.m_plate[_0x5a14f6].Col[_0x8a387c])) {
                          _0x30f476++;
                        }
                      }
                    }
                    _0x121acf = _0x30f476 > 0x0;
                    this.PlayStopSound(_0x30f476, _0x121acf);
                    this.m_gameView.EffectPlate.AllSpecialSymbolStop(this.m_plate);
                    this.m_nowScatterCount = _0x30f476;
                  case 0x25:
                  case "end":
                    return _0x1cebc5.stop();
                }
              }
            }, _0x52fc4e, this);
          }));
          return function (_0xef035f) {
            return _0x13d980.apply(this, arguments);
          };
        }();
        _0x4803ff.PlayStopSound = function (_0x526689, _0x2a54b0) {
          if (0x0 !== _0x526689 && _0x2a54b0) {
            if (0x1 === _0x526689) {
              _0x378220.Play(_0x549b11.AudioClips.Scatter1);
            } else if (0x2 === _0x526689) {
              _0x378220.Play(_0x549b11.AudioClips.Scatter2);
            } else {
              _0x378220.Play(_0x549b11.AudioClips.Scatter3);
            }
          } else {
            _0x378220.Play(_0x549b11.AudioClips.Reel_Stop);
          }
        };
        _0x4803ff.RecoverPlate = function (_0x5df49f) {
          if (_0x5df49f) {
            for (var _0xd9564 = 0x0; _0xd9564 < _0x549b11.COL; _0xd9564++) {
              this.m_columnSymbols[_0xd9564].SetSymbols(_0x5df49f[_0xd9564].Col);
            }
          } else {
            for (var _0x1b9bc7 = 0x0; _0x1b9bc7 < _0x549b11.COL; _0x1b9bc7++) {
              var _0x45507b = {
                'Col': []
              };
              for (var _0xa44e4d = 0x0; _0xa44e4d < _0x549b11.ROW; _0xa44e4d++) {
                _0x45507b.Col.push(0x7 - _0x1b9bc7);
              }
              this.m_plate[_0x1b9bc7] = _0x45507b;
              this.m_columnSymbols[_0x1b9bc7].SetSymbols(_0x45507b.Col);
            }
          }
          for (var _0x42ef21 = 0x0; _0x42ef21 < _0x549b11.COL; _0x42ef21++) {
            for (var _0x393071 = 0x0; _0x393071 < _0x549b11.ROW; _0x393071++) {
              this.GetSymbolNode(_0x42ef21, _0x393071).active = true;
            }
          }
          for (var _0x2aec58 = 0x0; _0x2aec58 < _0x549b11.COL; _0x2aec58++) {
            var _0x169b2b = this.m_symbolSize.width * (_0x2aec58 + 0.5) + this.m_reelPositionOffset[_0x2aec58].x - this.m_viewSize.width / 0x2;
            this.m_columnSymbols[_0x2aec58].setPosition(_0x386e5e(_0x169b2b, -this.m_viewSize.height / 0x2));
          }
          for (var _0x320fa7 = 0x0; _0x320fa7 < _0x549b11.COL; _0x320fa7++) {
            var _0x45d922 = this.m_symbolSize.width * (_0x320fa7 + 0.5) + this.m_reelPositionOffset[_0x320fa7].x - this.m_viewSize.width / 0x2;
            var _0x3e7586 = this.m_viewSize.height - this.m_viewSize.height / 0x2;
            this.m_upperSymbols[_0x320fa7].setPosition(_0x386e5e(_0x45d922, _0x3e7586));
            _0x3e7586 = -this.m_viewSize.height - this.m_viewSize.height / 0x2;
            this.m_lowerSymbols[_0x320fa7].setPosition(_0x386e5e(_0x45d922, _0x3e7586));
          }
        };
        _0x4803ff.SetPlateInfo = function (_0x10c9c5, _0xc00e) {
          this.m_plate = JSON.parse(JSON.stringify(_0x10c9c5));
          this.m_plate.splice(_0x549b11.COL);
          var _0x3984b0 = this.m_riseTime;
          var _0x3b2d7a = Math.ceil((this.m_time - _0x3984b0) / this.m_spinSpeed);
          if (!_0x549b11.IsInFG) {
            var _0x36e08a = 0x0;
            for (var _0x223039 = 0x0; _0x223039 < this.m_plate.length - 0x1; _0x223039++) {
              for (var _0x21f11a = 0x0; _0x21f11a < this.m_plate[_0x223039].Col.length; _0x21f11a++) {
                if (this.IsScatterSymbol(this.m_plate[_0x223039].Col[_0x21f11a])) {
                  _0x36e08a++;
                }
              }
              if (-0x1 === this.m_secondScatterCol && _0x36e08a >= 0x2 && _0x223039 < this.m_plate.length - 0x2) {
                this.m_secondScatterCol = _0x223039;
                break;
              }
            }
          }
          if (this.m_isClickStopBtn) {
            this.m_stopTime = (_0x3b2d7a + 0x1) * this.m_spinSpeed + this.m_spinDelayTime + this.m_spinBufferTime01 + this.m_spinBufferTime02 + _0x4be24d * this.m_spinSpeed * (_0x549b11.COL - 0x1) + 0x0;
            for (var _0xfc7895 = 0x0; _0xfc7895 < _0x549b11.COL; _0xfc7895++) {
              this.m_reelStopTime[_0xfc7895] = _0xfd5517.strip((_0x3b2d7a + 0x1) * this.m_spinSpeed) + 0x0;
              this.m_reelPreTime[_0xfc7895] = _0xfd5517.strip(_0x3b2d7a * this.m_spinSpeed) + 0x0;
            }
          } else {
            this.m_stopTime = _0xfd5517.strip(this.m_spinSpeed * (_0x3b2d7a + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * (_0x549b11.COL - 0x1) + this.m_spinDelayTime + _0x3984b0) + this.m_spinBufferTime01 + this.m_spinBufferTime02 + 0x0;
            for (var _0x10c0ec = 0x0; _0x10c0ec < _0x549b11.COL; _0x10c0ec++) {
              this.m_reelStopTime[_0x10c0ec] = _0xfd5517.strip(this.m_spinSpeed * (_0x3b2d7a + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * _0x10c0ec) + 0x0;
              this.m_reelPreTime[_0x10c0ec] = _0xfd5517.strip(this.m_spinSpeed * (_0x3b2d7a + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * (_0x10c0ec - 0x1)) + 0x0;
            }
            if (-0x1 !== this.m_secondScatterCol) {
              this.m_stopTime = this.m_stopTime + (this.m_timesOfNearWinSpin[this.m_secondScatterCol + 0x1] - this.m_timesOfBaseSpin) * (_0x549b11.COL - 0x1 - (this.m_secondScatterCol + 0x1));
              for (var _0x4cf34b = 0x0; _0x4cf34b < _0x549b11.COL; _0x4cf34b++) {
                if (_0x4cf34b > this.m_secondScatterCol) {
                  if (_0x4cf34b === _0x549b11.COL - 0x1) {
                    var _0x52d5e9 = _0xfd5517.strip(this.m_reelStopTime[_0x4cf34b] - this.m_reelPreTime[_0x4cf34b]);
                    this.m_reelStopTime[_0x4cf34b] = this.m_reelStopTime[_0x4cf34b - 0x1] + _0x52d5e9;
                    this.m_reelPreTime[_0x4cf34b] = this.m_reelPreTime[_0x4cf34b - 0x1] + _0x52d5e9;
                  } else {
                    this.m_reelStopTime[_0x4cf34b] = _0xfd5517.strip(this.m_reelStopTime[_0x4cf34b] + (this.m_timesOfNearWinSpin[this.m_secondScatterCol + 0x1] - this.m_timesOfBaseSpin) * (_0x4cf34b - this.m_secondScatterCol));
                    this.m_reelPreTime[_0x4cf34b] = _0xfd5517.strip(this.m_reelStopTime[_0x4cf34b] + (this.m_timesOfNearWinSpin[this.m_secondScatterCol + 0x1] - this.m_timesOfBaseSpin) * (_0x4cf34b - this.m_secondScatterCol));
                  }
                }
              }
            }
            this.m_stopTime += 0x0;
          }
          if (_0x38797b.IsAutoSpin && 0x0 === _0xc00e) {
            this.m_stopTime += 0.3;
          }
        };
        _0x17689c(_0x441cf8, [{
          'key': "NowScatterCount",
          'get': function () {
            return this.m_nowScatterCount;
          }
        }, {
          'key': "IsClickStopBtn",
          'get': function () {
            return this.m_isClickStopBtn;
          }
        }, {
          'key': "IsHardStop",
          'get': function () {
            return this.m_isHardStop;
          }
        }]);
        return _0x441cf8;
      }(_0x55612a);
      _0x1ab85e = _0x58cf1d(_0x46f86f.prototype, 'm_symbolSpriteFrames', [_0x56e6fd], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return new Array();
        }
      });
      var _0x22b8b1;
      var _0x18cbe4;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "fe812TpsDlBH7w0fSJeQFO6", "NearWinSpine", undefined);
      var _0x1e82cb = _0x9f6cc7.ccclass;
      _0x18cbe4 = function (_0x58e61c) {
        function _0x3d1fd0() {
          return _0x58e61c.apply(this, arguments) || this;
        }
        _0x47cbbc(_0x3d1fd0, _0x58e61c);
        _0x3d1fd0.prototype.PlayNearWin = function () {
          this.PlayAnimation(_0x3d1fd0.AnimName.NearWin, true);
        };
        return _0x3d1fd0;
      }(_0x45d7ab);
      _0x18cbe4.AnimName = {
        'NearWin': "NearWin"
      };
      var _0x3b5f63 = _0x1e82cb(_0x22b8b1 = _0x18cbe4) || _0x22b8b1;
      var _0x35d81d;
      var _0x3dcd1e;
      var _0x582ec5;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, 'c8bd7C7IftJ0Lnx0PGcMFAM', "NearWin", undefined);
      var _0xd04d79 = _0x9f6cc7.property;
      _0x35d81d = _0xd04d79({
        'type': _0x3b5f63,
        'tooltip': "NearWin動畫"
      });
      _0x3dcd1e = function (_0x487337) {
        function _0x44354b() {
          var _0xa9da9b;
          var _0x4fc4d0 = arguments.length;
          var _0x7c5fb7 = new Array(_0x4fc4d0);
          for (var _0x34a29c = 0x0; _0x34a29c < _0x4fc4d0; _0x34a29c++) {
            _0x7c5fb7[_0x34a29c] = arguments[_0x34a29c];
          }
          _0x3517d5(_0xa9da9b = _0x487337.call.apply(_0x487337, [this].concat(_0x7c5fb7)) || this, "m_nearWins", _0x582ec5, _0x1862e3(_0xa9da9b));
          _0xa9da9b.m_nearWinAudioId = [-0x1, -0x1, -0x1, -0x1, -0x1];
          return _0xa9da9b;
        }
        _0x47cbbc(_0x44354b, _0x487337);
        var _0x27a578 = _0x44354b.prototype;
        _0x27a578.PlayNearWin = function (_0x197254) {
          this.m_nearWins[_0x197254].node.active = true;
          this.m_nearWinAudioId[_0x197254] = _0x378220.Play(_0x549b11.AudioClips.NearWin);
          this.m_nearWins[_0x197254].PlayNearWin();
        };
        _0x27a578.StopNearWin = function (_0x456d50) {
          if (-0x1 !== this.m_nearWinAudioId[_0x456d50]) {
            _0x378220.Stop(this.m_nearWinAudioId[_0x456d50]);
          }
          this.m_nearWins[_0x456d50].node.active = false;
        };
        return _0x44354b;
      }(_0x55612a);
      _0x582ec5 = _0x58cf1d(_0x3dcd1e.prototype, "m_nearWins", [_0x35d81d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      var _0x357335;
      var _0x4a9488;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "5178cJ2Gu5BK4B999sApxV9", 'WheelSpine', undefined);
      var _0x11b5af = _0x9f6cc7.ccclass;
      _0x4a9488 = function (_0x1e4bd3) {
        function _0x34e338() {
          return _0x1e4bd3.apply(this, arguments) || this;
        }
        _0x47cbbc(_0x34e338, _0x1e4bd3);
        var _0x4f1a60 = _0x34e338.prototype;
        _0x4f1a60.GetSpine = function () {
          return this.m_spine;
        };
        _0x4f1a60.PlayMGOpen = function () {
          var _0x50a191 = _0x2eaa1b(_0x5266ea().mark(function _0x46c5c6() {
            return _0x5266ea().wrap(function (_0x1a21a3) {
              for (;;) {
                switch (_0x1a21a3.prev = _0x1a21a3.next) {
                  case 0x0:
                    _0x1a21a3.next = 0x2;
                    return this.PlayAnimation(_0x34e338.AnimName.MG_Open, false, 0x0, "default", false);
                  case 0x2:
                  case "end":
                    return _0x1a21a3.stop();
                }
              }
            }, _0x46c5c6, this);
          }));
          return function () {
            return _0x50a191.apply(this, arguments);
          };
        }();
        _0x4f1a60.PlayMGIdle = function () {
          this.PlayAnimation(_0x34e338.AnimName.MG_Idle, true, 0x0, "default", false);
        };
        _0x4f1a60.PlayMGClose = function () {
          var _0x391faa = _0x2eaa1b(_0x5266ea().mark(function _0x298166() {
            return _0x5266ea().wrap(function (_0xae9019) {
              for (;;) {
                switch (_0xae9019.prev = _0xae9019.next) {
                  case 0x0:
                    _0xae9019.next = 0x2;
                    return this.PlayAnimation(_0x34e338.AnimName.MG_Close, false, 0x0, "default", false);
                  case 0x2:
                  case "end":
                    return _0xae9019.stop();
                }
              }
            }, _0x298166, this);
          }));
          return function () {
            return _0x391faa.apply(this, arguments);
          };
        }();
        _0x4f1a60.PlayFGOpen = function () {
          var _0x10e14a = _0x2eaa1b(_0x5266ea().mark(function _0x54b6b4() {
            return _0x5266ea().wrap(function (_0x3dce97) {
              for (;;) {
                switch (_0x3dce97.prev = _0x3dce97.next) {
                  case 0x0:
                    _0x3dce97.next = 0x2;
                    return this.PlayAnimation(_0x34e338.AnimName.FG_Open, false, 0x0, "default", false);
                  case 0x2:
                  case "end":
                    return _0x3dce97.stop();
                }
              }
            }, _0x54b6b4, this);
          }));
          return function () {
            return _0x10e14a.apply(this, arguments);
          };
        }();
        _0x4f1a60.PlayFGIntro = function () {
          var _0x343340 = _0x2eaa1b(_0x5266ea().mark(function _0x2ce4d1() {
            return _0x5266ea().wrap(function (_0x1374fb) {
              for (;;) {
                switch (_0x1374fb.prev = _0x1374fb.next) {
                  case 0x0:
                    _0x1374fb.next = 0x2;
                    return this.PlayAnimation(_0x34e338.AnimName.FG_Intro, false, 0x0, "default", false);
                  case 0x2:
                  case "end":
                    return _0x1374fb.stop();
                }
              }
            }, _0x2ce4d1, this);
          }));
          return function () {
            return _0x343340.apply(this, arguments);
          };
        }();
        _0x4f1a60.PlayFGIdle = function () {
          this.PlayAnimation(_0x34e338.AnimName.FG_Idle, true, 0x0, "default", false);
        };
        _0x4f1a60.PlayFGClose = function () {
          var _0x302620 = _0x2eaa1b(_0x5266ea().mark(function _0x33153d() {
            return _0x5266ea().wrap(function (_0x123282) {
              for (;;) {
                switch (_0x123282.prev = _0x123282.next) {
                  case 0x0:
                    _0x123282.next = 0x2;
                    return this.PlayAnimation(_0x34e338.AnimName.FG_Close, false, 0x0, "default", false);
                  case 0x2:
                  case "end":
                    return _0x123282.stop();
                }
              }
            }, _0x33153d, this);
          }));
          return function () {
            return _0x302620.apply(this, arguments);
          };
        }();
        return _0x34e338;
      }(_0x45d7ab);
      _0x4a9488.AnimName = {
        'FG_Close': "FG_Close",
        'FG_Idle': "FG_Idle",
        'FG_Intro': "FG_Intro",
        'FG_Open': "FG_Open",
        'MG_Close': 'MG_Close',
        'MG_Idle': 'MG_Idle',
        'MG_Open': "MG_Open"
      };
      var _0x2d7b5c = _0x11b5af(_0x357335 = _0x4a9488) || _0x357335;
      var _0x243a46;
      var _0x4314f2;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "c66ccV7fBRIHqhBJnqqvrVL", "WheelFxSpine", undefined);
      var _0x186ac5 = _0x9f6cc7.ccclass;
      _0x4314f2 = function (_0x500313) {
        function _0x1f9a5f() {
          return _0x500313.apply(this, arguments) || this;
        }
        _0x47cbbc(_0x1f9a5f, _0x500313);
        var _0x1649ea = _0x1f9a5f.prototype;
        _0x1649ea.GetSpine = function () {
          return this.m_spine;
        };
        _0x1649ea.PlayMGIdle = function () {
          this.PlayAnimation(_0x1f9a5f.AnimName.MG_Idle_FX, true);
        };
        _0x1649ea.PlaySpin = function () {
          this.PlayAnimation(_0x1f9a5f.AnimName.Spin_Fx, true);
        };
        _0x1649ea.PlaySpin2 = function () {
          this.PlayAnimation(_0x1f9a5f.AnimName.Spin_Fx2, true);
        };
        _0x1649ea.StopSpin2 = function () {
          this.m_spine.clearTracks();
        };
        _0x1649ea.PlayMGWin = function () {
          var _0x2ce399 = _0x2eaa1b(_0x5266ea().mark(function _0x410a19() {
            return _0x5266ea().wrap(function (_0x5437e8) {
              for (;;) {
                switch (_0x5437e8.prev = _0x5437e8.next) {
                  case 0x0:
                    _0x5437e8.next = 0x2;
                    return this.PlayAnimation(_0x1f9a5f.AnimName.MG_Win_Fx, false, 0x0, "default", false);
                  case 0x2:
                  case "end":
                    return _0x5437e8.stop();
                }
              }
            }, _0x410a19, this);
          }));
          return function () {
            return _0x2ce399.apply(this, arguments);
          };
        }();
        _0x1649ea.PlayFGIntro = function () {
          var _0x41bfe6 = _0x2eaa1b(_0x5266ea().mark(function _0x5d63e4() {
            return _0x5266ea().wrap(function (_0xa42207) {
              for (;;) {
                switch (_0xa42207.prev = _0xa42207.next) {
                  case 0x0:
                    _0xa42207.next = 0x2;
                    return this.PlayAnimation(_0x1f9a5f.AnimName.FG_Intro_Fx, false);
                  case 0x2:
                  case "end":
                    return _0xa42207.stop();
                }
              }
            }, _0x5d63e4, this);
          }));
          return function () {
            return _0x41bfe6.apply(this, arguments);
          };
        }();
        _0x1649ea.PlayFGWin = function () {
          var _0x124dba = _0x2eaa1b(_0x5266ea().mark(function _0x29fd9d() {
            return _0x5266ea().wrap(function (_0x4ac7ec) {
              for (;;) {
                switch (_0x4ac7ec.prev = _0x4ac7ec.next) {
                  case 0x0:
                    _0x4ac7ec.next = 0x2;
                    return this.PlayAnimation(_0x1f9a5f.AnimName.FG_Win_Fx, false, 0x0, "default", false);
                  case 0x2:
                  case "end":
                    return _0x4ac7ec.stop();
                }
              }
            }, _0x29fd9d, this);
          }));
          return function () {
            return _0x124dba.apply(this, arguments);
          };
        }();
        _0x1649ea.PlayFGIdle = function () {
          this.PlayAnimation(_0x1f9a5f.AnimName.FG_Idle_FX, true);
        };
        _0x1649ea.PlayWinPlus = function () {
          this.PlayAnimation(_0x1f9a5f.AnimName.Win_Plus, false);
        };
        return _0x1f9a5f;
      }(_0x45d7ab);
      _0x4314f2.AnimName = {
        'FG_Idle_FX': "FG_Idle_FX",
        'FG_Intro_Fx': "FG_Intro_Fx",
        'FG_Win_Fx': "FG_Win_Fx",
        'MG_Idle_FX': "MG_Idle_FX",
        'MG_Win_Fx': "MG_Win_Fx",
        'Spin_Fx': "Spin_Fx",
        'Spin_Fx2': "Spin_Fx2",
        'Win_Plus': "Win_Plus"
      };
      var _0x2a1e93 = _0x186ac5(_0x243a46 = _0x4314f2) || _0x243a46;
      var _0x48ee99;
      var _0x2c1c83;
      var _0x22f906;
      var _0x1e72fa;
      var _0x57abb3;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "e770dyNAVhEX7CvK2GH1/GH", "Wheel", undefined);
      var _0x3086db = _0x9f6cc7.property;
      _0x48ee99 = _0x3086db({
        'type': _0x2d7b5c,
        'tooltip': "盤後Wheel動畫"
      });
      _0x2c1c83 = _0x3086db({
        'type': _0x2a1e93,
        'tooltip': "盤後Wheel特效"
      });
      _0x22f906 = function (_0x56ea39) {
        function _0xdf147b() {
          var _0x520954;
          var _0x41a438 = arguments.length;
          var _0x1f832c = new Array(_0x41a438);
          for (var _0x903a67 = 0x0; _0x903a67 < _0x41a438; _0x903a67++) {
            _0x1f832c[_0x903a67] = arguments[_0x903a67];
          }
          _0x3517d5(_0x520954 = _0x56ea39.call.apply(_0x56ea39, [this].concat(_0x1f832c)) || this, "m_wheelSpine", _0x1e72fa, _0x1862e3(_0x520954));
          _0x3517d5(_0x520954, 'm_wheelFxSpine', _0x57abb3, _0x1862e3(_0x520954));
          _0x520954.m_outerWheelBone = null;
          _0x520954.m_innerWheelBone = null;
          _0x520954.m_canSpinInIdle = true;
          return _0x520954;
        }
        _0x47cbbc(_0xdf147b, _0x56ea39);
        var _0x5072bd = _0xdf147b.prototype;
        _0x5072bd.start = function () {
          this.m_outerWheelBone = this.m_wheelSpine.GetSpine().findBone("Wheel_Big_Rotate");
          this.m_innerWheelBone = this.m_wheelSpine.GetSpine().findBone("Wheel_Small_Rotate");
          this.m_wheelFxSpine.PlayMGIdle();
        };
        _0x5072bd.update = function () {
          if (this.m_canSpinInIdle) {
            this.m_outerWheelBone.rotation -= _0x549b11.WHEEL_IDLE_ROTATE_SPEED;
            if (_0x549b11.IsInFG) {
              this.m_innerWheelBone.rotation += _0x549b11.WHEEL_IDLE_ROTATE_SPEED;
            }
          }
        };
        _0x5072bd.OpenInMG = function () {
          var _0x155523 = _0x2eaa1b(_0x5266ea().mark(function _0x15505f() {
            return _0x5266ea().wrap(function (_0x4e5240) {
              for (;;) {
                switch (_0x4e5240.prev = _0x4e5240.next) {
                  case 0x0:
                    this.node.active = true;
                    _0x4e5240.next = 0x3;
                    return this.m_wheelSpine.PlayMGOpen();
                  case 0x3:
                    this.m_wheelSpine.PlayMGIdle();
                    this.m_wheelFxSpine.node.active = true;
                    this.m_wheelFxSpine.PlayMGIdle();
                  case 0x6:
                  case 'end':
                    return _0x4e5240.stop();
                }
              }
            }, _0x15505f, this);
          }));
          return function () {
            return _0x155523.apply(this, arguments);
          };
        }();
        _0x5072bd.CloseInMG = function () {
          var _0x5c92d8 = _0x2eaa1b(_0x5266ea().mark(function _0x32faa0() {
            return _0x5266ea().wrap(function (_0x109484) {
              for (;;) {
                switch (_0x109484.prev = _0x109484.next) {
                  case 0x0:
                    this.m_canSpinInIdle = false;
                    this.m_wheelFxSpine.node.active = false;
                    _0x109484.next = 0x4;
                    return this.m_wheelSpine.PlayMGClose();
                  case 0x4:
                    this.node.active = false;
                  case 0x5:
                  case "end":
                    return _0x109484.stop();
                }
              }
            }, _0x32faa0, this);
          }));
          return function () {
            return _0x5c92d8.apply(this, arguments);
          };
        }();
        _0x5072bd.OpenInFG = function () {
          var _0x4c1c61 = _0x2eaa1b(_0x5266ea().mark(function _0x25ab25() {
            return _0x5266ea().wrap(function (_0x17a34e) {
              for (;;) {
                switch (_0x17a34e.prev = _0x17a34e.next) {
                  case 0x0:
                    this.node.active = true;
                    _0x17a34e.next = 0x3;
                    return this.m_wheelSpine.PlayFGOpen();
                  case 0x3:
                    this.m_wheelSpine.PlayFGIdle();
                    this.m_wheelFxSpine.node.active = true;
                    this.m_wheelFxSpine.PlayFGIdle();
                  case 0x6:
                  case "end":
                    return _0x17a34e.stop();
                }
              }
            }, _0x25ab25, this);
          }));
          return function () {
            return _0x4c1c61.apply(this, arguments);
          };
        }();
        _0x5072bd.CloseInFG = function () {
          var _0x1cc369 = _0x2eaa1b(_0x5266ea().mark(function _0x5a9cf3() {
            return _0x5266ea().wrap(function (_0x26bf69) {
              for (;;) {
                switch (_0x26bf69.prev = _0x26bf69.next) {
                  case 0x0:
                    this.m_canSpinInIdle = false;
                    this.m_wheelFxSpine.node.active = false;
                    _0x26bf69.next = 0x4;
                    return this.m_wheelSpine.PlayFGClose();
                  case 0x4:
                    this.node.active = false;
                  case 0x5:
                  case "end":
                    return _0x26bf69.stop();
                }
              }
            }, _0x5a9cf3, this);
          }));
          return function () {
            return _0x1cc369.apply(this, arguments);
          };
        }();
        _0x5072bd.SetWheelRotations = function (_0x50d4ab, _0x57b020) {
          this.m_outerWheelBone.rotation = _0x50d4ab;
          this.m_innerWheelBone.rotation = _0x57b020;
        };
        _0x5072bd.PlaySpinInIdle = function () {
          this.m_canSpinInIdle = true;
        };
        return _0xdf147b;
      }(_0x55612a);
      _0x1e72fa = _0x58cf1d(_0x22f906.prototype, "m_wheelSpine", [_0x48ee99], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x57abb3 = _0x58cf1d(_0x22f906.prototype, "m_wheelFxSpine", [_0x2c1c83], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x36efdb;
      var _0x28ca00;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "2a175UQzZFOYomYeWyk7y/T", "WheelFrontSpine", undefined);
      var _0x3457b4 = _0x9f6cc7.ccclass;
      _0x28ca00 = function (_0x1a11f0) {
        function _0x530158() {
          return _0x1a11f0.apply(this, arguments) || this;
        }
        _0x47cbbc(_0x530158, _0x1a11f0);
        var _0x179e7c = _0x530158.prototype;
        _0x179e7c.GetSpine = function () {
          return this.m_spine;
        };
        _0x179e7c.PlayMGOpen = function () {
          var _0x2bb6e6 = _0x2eaa1b(_0x5266ea().mark(function _0x2716ce() {
            return _0x5266ea().wrap(function (_0x3155b4) {
              for (;;) {
                switch (_0x3155b4.prev = _0x3155b4.next) {
                  case 0x0:
                    _0x3155b4.next = 0x2;
                    return this.PlayAnimation(_0x530158.AnimName.MG_Open, false);
                  case 0x2:
                  case "end":
                    return _0x3155b4.stop();
                }
              }
            }, _0x2716ce, this);
          }));
          return function () {
            return _0x2bb6e6.apply(this, arguments);
          };
        }();
        _0x179e7c.PlayMGIdle = function () {
          this.PlayAnimation(_0x530158.AnimName.MG_Idle, true);
        };
        _0x179e7c.PlayMGClose = function () {
          var _0x8a8cc8 = _0x2eaa1b(_0x5266ea().mark(function _0x3be15d() {
            return _0x5266ea().wrap(function (_0x200fda) {
              for (;;) {
                switch (_0x200fda.prev = _0x200fda.next) {
                  case 0x0:
                    _0x200fda.next = 0x2;
                    return this.PlayAnimation(_0x530158.AnimName.MG_Close, false, 0x0, "default", false);
                  case 0x2:
                  case "end":
                    return _0x200fda.stop();
                }
              }
            }, _0x3be15d, this);
          }));
          return function () {
            return _0x8a8cc8.apply(this, arguments);
          };
        }();
        _0x179e7c.PlayFGOpen = function () {
          var _0x25f19a = _0x2eaa1b(_0x5266ea().mark(function _0x47c4dd() {
            return _0x5266ea().wrap(function (_0x52c914) {
              for (;;) {
                switch (_0x52c914.prev = _0x52c914.next) {
                  case 0x0:
                    _0x52c914.next = 0x2;
                    return this.PlayAnimation(_0x530158.AnimName.FG_Open, false);
                  case 0x2:
                  case 'end':
                    return _0x52c914.stop();
                }
              }
            }, _0x47c4dd, this);
          }));
          return function () {
            return _0x25f19a.apply(this, arguments);
          };
        }();
        _0x179e7c.PlayFGIntro = function () {
          var _0x5f18b8 = _0x2eaa1b(_0x5266ea().mark(function _0x308cb0() {
            return _0x5266ea().wrap(function (_0xc46e79) {
              for (;;) {
                switch (_0xc46e79.prev = _0xc46e79.next) {
                  case 0x0:
                    _0xc46e79.next = 0x2;
                    return this.PlayAnimation(_0x530158.AnimName.FG_Intro, false, 0x0, "default", false);
                  case 0x2:
                  case "end":
                    return _0xc46e79.stop();
                }
              }
            }, _0x308cb0, this);
          }));
          return function () {
            return _0x5f18b8.apply(this, arguments);
          };
        }();
        _0x179e7c.PlayFGIdle = function () {
          this.PlayAnimation(_0x530158.AnimName.FG_Idle, true);
        };
        _0x179e7c.PlayFGClose = function () {
          var _0x1d8aca = _0x2eaa1b(_0x5266ea().mark(function _0x148d59() {
            return _0x5266ea().wrap(function (_0x3687c5) {
              for (;;) {
                switch (_0x3687c5.prev = _0x3687c5.next) {
                  case 0x0:
                    _0x3687c5.next = 0x2;
                    return this.PlayAnimation(_0x530158.AnimName.FG_Close, false, 0x0, 'default', false);
                  case 0x2:
                  case "end":
                    return _0x3687c5.stop();
                }
              }
            }, _0x148d59, this);
          }));
          return function () {
            return _0x1d8aca.apply(this, arguments);
          };
        }();
        _0x179e7c.PlayMGWin = function () {
          var _0x3704f5 = _0x2eaa1b(_0x5266ea().mark(function _0x192f2c() {
            return _0x5266ea().wrap(function (_0x33ab8a) {
              for (;;) {
                switch (_0x33ab8a.prev = _0x33ab8a.next) {
                  case 0x0:
                    _0x33ab8a.next = 0x2;
                    return this.PlayAnimation(_0x530158.AnimName.MG_Win, false, 0x0, 'default', false);
                  case 0x2:
                  case "end":
                    return _0x33ab8a.stop();
                }
              }
            }, _0x192f2c, this);
          }));
          return function () {
            return _0x3704f5.apply(this, arguments);
          };
        }();
        _0x179e7c.PlayFGWin = function () {
          var _0x3c9949 = _0x2eaa1b(_0x5266ea().mark(function _0x1ae16c() {
            return _0x5266ea().wrap(function (_0x19dbdd) {
              for (;;) {
                switch (_0x19dbdd.prev = _0x19dbdd.next) {
                  case 0x0:
                    _0x19dbdd.next = 0x2;
                    return this.PlayAnimation(_0x530158.AnimName.FG_Win, false, 0x0, "default", false);
                  case 0x2:
                  case "end":
                    return _0x19dbdd.stop();
                }
              }
            }, _0x1ae16c, this);
          }));
          return function () {
            return _0x3c9949.apply(this, arguments);
          };
        }();
        return _0x530158;
      }(_0x45d7ab);
      _0x28ca00.AnimName = {
        'FG_Close': "FG_Close",
        'FG_Idle': "FG_Idle",
        'FG_Intro': "FG_Intro",
        'FG_Open': "FG_Open",
        'MG_Close': 'MG_Close',
        'MG_Idle': 'MG_Idle',
        'MG_Open': "MG_Open",
        'MG_Win': "MG_Win",
        'FG_Win': 'FG_Win'
      };
      var _0x3cb012 = _0x3457b4(_0x36efdb = _0x28ca00) || _0x36efdb;
      var _0xbbdbc5;
      var _0x5b2504;
      var _0x4ccd34;
      var _0x2b188c;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "10d668N+6tIkpqxrSOEfUS/", "WheelFrontBlack", undefined);
      var _0x363a0d = _0x9f6cc7.ccclass;
      var _0x5622b8 = _0x9f6cc7.property;
      _0xbbdbc5 = _0x5622b8({
        'type': _0x25028e,
        'tooltip': "盤前幸運轉輪遮罩動畫"
      });
      _0x2b188c = function (_0x11ab10) {
        function _0x2295da() {
          var _0x2e24cb;
          var _0x3c4d0c = arguments.length;
          var _0x25c671 = new Array(_0x3c4d0c);
          for (var _0x17bf1e = 0x0; _0x17bf1e < _0x3c4d0c; _0x17bf1e++) {
            _0x25c671[_0x17bf1e] = arguments[_0x17bf1e];
          }
          _0x3517d5(_0x2e24cb = _0x11ab10.call.apply(_0x11ab10, [this].concat(_0x25c671)) || this, 'm_anim', _0x4ccd34, _0x1862e3(_0x2e24cb));
          return _0x2e24cb;
        }
        _0x47cbbc(_0x2295da, _0x11ab10);
        var _0x160123 = _0x2295da.prototype;
        _0x160123.PlayBlackOn = function () {
          this.PlayAnimation(_0x2295da.AnimName.Black_On);
        };
        _0x160123.PlayBlackOff = function () {
          this.PlayAnimation(_0x2295da.AnimName.Black_Off);
        };
        _0x160123.PlayAnimation = function (_0x2f389d) {
          this.m_anim.play(_0x2f389d);
        };
        return _0x2295da;
      }(_0x55612a);
      _0x2b188c.AnimName = {
        'Black_On': 'Black_On',
        'Black_Off': "Black_Off"
      };
      _0x4ccd34 = _0x58cf1d(_0x2b188c.prototype, "m_anim", [_0xbbdbc5], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x3842a0 = _0x363a0d(_0x5b2504 = _0x2b188c) || _0x5b2504;
      var _0x4717c4;
      var _0x185897;
      var _0x391828;
      var _0x478f65;
      var _0x1ad19c;
      var _0x1b379a;
      var _0x248842;
      var _0x4e8eb6;
      var _0x4d37e7;
      var _0x194d1d;
      var _0x322edd;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "ab2bavS+/BDYoj6FTxaYhWh", 'WheelFront', undefined);
      var _0xe890d4 = _0x9f6cc7.property;
      _0x4717c4 = _0xe890d4({
        'type': _0x3cb012,
        'tooltip': "盤前Wheel動畫"
      });
      _0x185897 = _0xe890d4({
        'type': _0x2a1e93,
        'tooltip': "盤前Wheel特效"
      });
      _0x391828 = _0xe890d4({
        'type': _0x2a1e93,
        'tooltip': "新增特效"
      });
      _0x478f65 = _0xe890d4({
        'type': _0x3842a0,
        'tooltip': '盤前Wheel遮罩'
      });
      _0x1ad19c = _0xe890d4({
        'type': _0x484a48,
        'tooltip': '震動'
      });
      _0x1b379a = function (_0x3869c7) {
        function _0x363298() {
          var _0xc145dd;
          var _0x2d7a2a = arguments.length;
          var _0x16b088 = new Array(_0x2d7a2a);
          for (var _0x2a9f62 = 0x0; _0x2a9f62 < _0x2d7a2a; _0x2a9f62++) {
            _0x16b088[_0x2a9f62] = arguments[_0x2a9f62];
          }
          _0x3517d5(_0xc145dd = _0x3869c7.call.apply(_0x3869c7, [this].concat(_0x16b088)) || this, "m_wheelFrontSpine", _0x248842, _0x1862e3(_0xc145dd));
          _0x3517d5(_0xc145dd, "m_wheelFxSpine", _0x4e8eb6, _0x1862e3(_0xc145dd));
          _0x3517d5(_0xc145dd, "m_wheelFxSpine2", _0x4d37e7, _0x1862e3(_0xc145dd));
          _0x3517d5(_0xc145dd, "m_wheelFrontBlack", _0x194d1d, _0x1862e3(_0xc145dd));
          _0x3517d5(_0xc145dd, "m_shake", _0x322edd, _0x1862e3(_0xc145dd));
          _0xc145dd.m_outerWheelBone = null;
          _0xc145dd.m_outerWheelAwardNum = 0xc;
          _0xc145dd.m_outerWheelWillStopAngle = -0x1;
          _0xc145dd.m_innerWheelBone = null;
          _0xc145dd.m_innerWheelAwardNum = 0x4;
          _0xc145dd.m_innerWheelWillStopAngle = -0x1;
          _0xc145dd.m_outerWheelSpinTime = 0xa;
          _0xc145dd.m_innerWheelSpinTime = 0xc;
          _0xc145dd.m_isSpinEnd = false;
          _0xc145dd.m_isOuterWheelSpinStart = false;
          _0xc145dd.m_isInnerWheelSpinStart = false;
          _0xc145dd.m_isOuterWheelSpinEnd = false;
          _0xc145dd.m_isInnerWheelSpinEnd = false;
          _0xc145dd.m_verySlowSpinAwardCellList = [0x3, 0x5, 0x7];
          _0xc145dd.m_outerWheelVerySlowSpinAwardCellNum = 0x0;
          _0xc145dd.m_innerWheelVerySlowSpinAwardCellNum = 0x0;
          _0xc145dd.m_wheelRotateAudioId = -0x1;
          _0xc145dd.m_outerWheelFxBone = null;
          _0xc145dd.m_outerWheelFxBone2 = null;
          _0xc145dd.m_outerWheelShadowBone = null;
          _0xc145dd.m_innerWheelFxBone = null;
          _0xc145dd.m_innerWheelShadowBone = null;
          _0xc145dd.m_outerWheelFxOffset = -0x1;
          _0xc145dd.m_innerWheelFxOffset = -0x1;
          _0xc145dd.m_outerWheelMul = -0x1;
          return _0xc145dd;
        }
        _0x47cbbc(_0x363298, _0x3869c7);
        var _0x4c4a99 = _0x363298.prototype;
        _0x4c4a99.start = function () {
          this.m_outerWheelBone = this.m_wheelFrontSpine.GetSpine().findBone("Wheel_Big_Rotate");
          this.m_outerWheelFxBone = this.m_wheelFxSpine.GetSpine().findBone("Wheel_Big_Rotate_Fx");
          this.m_outerWheelFxBone2 = this.m_wheelFxSpine2.GetSpine().findBone("Wheel_Big_Rotate_Fx");
          this.m_outerWheelShadowBone = this.m_wheelFrontSpine.GetSpine().findBone("Wheel_Big_Rotate_Shadow");
          this.m_innerWheelBone = this.m_wheelFrontSpine.GetSpine().findBone("Wheel_Small_Rotate");
          this.m_innerWheelFxBone = this.m_wheelFxSpine.GetSpine().findBone("Wheel_Small_Rotate_Fx");
          this.m_innerWheelShadowBone = this.m_wheelFrontSpine.GetSpine().findBone("Wheel_Small_Rotate_Shadow");
        };
        _0x4c4a99.IsSpinEnd = function () {
          return this.m_isSpinEnd;
        };
        _0x4c4a99.Init = function () {
          this.m_isSpinEnd = false;
          this.m_isOuterWheelSpinStart = false;
          this.m_isInnerWheelSpinStart = false;
          this.m_isOuterWheelSpinEnd = false;
          this.m_isInnerWheelSpinEnd = false;
        };
        _0x4c4a99.OpenInMG = function () {
          var _0x328921 = _0x2eaa1b(_0x5266ea().mark(function _0x6fa89b() {
            return _0x5266ea().wrap(function (_0x569161) {
              for (;;) {
                switch (_0x569161.prev = _0x569161.next) {
                  case 0x0:
                    this.node.active = true;
                    this.m_wheelFrontBlack.PlayBlackOn();
                    _0x378220.Play(_0x549b11.AudioClips.Wheel_On);
                    _0x569161.next = 0x5;
                    return this.m_wheelFrontSpine.PlayMGOpen();
                  case 0x5:
                    this.m_wheelFrontSpine.PlayMGIdle();
                    this.m_wheelFxSpine.PlayMGIdle();
                    this.m_wheelFxSpine.node.active = true;
                  case 0x8:
                  case 'end':
                    return _0x569161.stop();
                }
              }
            }, _0x6fa89b, this);
          }));
          return function () {
            return _0x328921.apply(this, arguments);
          };
        }();
        _0x4c4a99.CloseInMG = function () {
          var _0x6d5c54 = _0x2eaa1b(_0x5266ea().mark(function _0x3d0268() {
            return _0x5266ea().wrap(function (_0x43affc) {
              for (;;) {
                switch (_0x43affc.prev = _0x43affc.next) {
                  case 0x0:
                    this.m_wheelFxSpine.node.active = false;
                    this.m_wheelFrontBlack.PlayBlackOff();
                    _0x43affc.next = 0x4;
                    return this.m_wheelFrontSpine.PlayMGClose();
                  case 0x4:
                    this.node.active = false;
                  case 0x5:
                  case "end":
                    return _0x43affc.stop();
                }
              }
            }, _0x3d0268, this);
          }));
          return function () {
            return _0x6d5c54.apply(this, arguments);
          };
        }();
        _0x4c4a99.SpinInMG = function (_0x32a3a6, _0x4cd710) {
          var _0x3de321 = this;
          this.m_wheelRotateAudioId = _0x378220.Play(_0x549b11.AudioClips.Wheel_Rotate);
          this.m_outerWheelMul = _0x4cd710;
          var _0x146b26 = this.CalculateWheelSpinResult(_0x32a3a6, this.m_outerWheelAwardNum);
          this.m_outerWheelWillStopAngle = _0x146b26.finalAngle;
          this.m_outerWheelFxOffset = _0x146b26.offset;
          this.m_outerWheelVerySlowSpinAwardCellNum = this.m_verySlowSpinAwardCellList[Math.floor(Math.random() * this.m_verySlowSpinAwardCellList.length)];
          _0x5a1279(this.m_outerWheelBone).delay(0.5).call(function () {
            _0x3de321.m_wheelFxSpine.node.active = true;
            _0x3de321.m_wheelFxSpine.PlaySpin();
          }).to(this.m_outerWheelSpinTime, {
            'rotation': -0x708 - this.m_outerWheelWillStopAngle
          }, {
            'progress': function (_0x3e87a7, _0x5c69b6, _0x2f3266, _0x4aa730) {
              return _0x3de321.OuterWheelProgress(_0x3e87a7, _0x5c69b6, _0x2f3266, _0x4aa730);
            }
          }).call(function () {
            _0x3de321.m_isOuterWheelSpinEnd = true;
            _0x3de321.PlayWheelMulAwardSound_N_Shake(_0x4cd710);
            _0x3de321.finishSpin();
          }).start();
          this.m_isOuterWheelSpinStart = true;
        };
        _0x4c4a99.CalculateWheelSpinResult = function (_0x4a0e0b, _0x47005e) {
          var _0x527d7c = 0x168 / _0x47005e;
          var _0xc3f3c = _0x4a0e0b * _0x527d7c;
          var _0xe9018e = _0xc3f3c;
          var _0x3453d9 = 0x0;
          if (Math.random() < 0.7) {
            var _0x15a94b = -0x1 * _0xfd5517.times(_0xfd5517.divide(_0x527d7c, 0x2), 0.8);
            var _0x328641 = -0x1 * _0xfd5517.times(_0xfd5517.divide(_0x527d7c, 0x2), 0.4);
            var _0x35948a = _0xfd5517.times(_0xfd5517.divide(_0x527d7c, 0x2), 0.4);
            var _0x445b36 = _0xfd5517.times(_0xfd5517.divide(_0x527d7c, 0x2), 0.8);
            _0xe9018e = _0xc3f3c + (_0x3453d9 = Math.random() < 0.5 ? this.getRandomInt(_0x15a94b, _0x328641) : this.getRandomInt(_0x35948a, _0x445b36));
          } else {
            var _0xd2931e = -0x1 * _0xfd5517.times(_0xfd5517.divide(_0x527d7c, 0x2), 0.8);
            var _0x16b1b7 = _0xfd5517.times(_0xfd5517.divide(_0x527d7c, 0x2), 0.8);
            _0xe9018e = _0xc3f3c + (_0x3453d9 = this.getRandomInt(_0xd2931e, _0x16b1b7));
          }
          return {
            'finalAngle': _0xe9018e,
            'offset': _0x3453d9
          };
        };
        _0x4c4a99.getRandomInt = function (_0x4eb4f1, _0x51e3a7) {
          _0x4eb4f1 = Math.ceil(_0x4eb4f1);
          _0x51e3a7 = Math.floor(_0x51e3a7);
          return Math.floor(Math.random() * (_0x51e3a7 - _0x4eb4f1 + 0x1)) + _0x4eb4f1;
        };
        _0x4c4a99.OuterWheelProgress = function (_0x282fdd, _0x1e962c, _0x15dd8b, _0x19129a) {
          var _0x342e03 = 0.08 * this.m_outerWheelVerySlowSpinAwardCellNum;
          var _0x4dfa73 = (0x1 - _0x342e03) / 0x2;
          var _0xebff6f = 0x1 - _0x342e03 - _0x4dfa73;
          var _0x165363 = _0x1e962c - _0x282fdd > 0x0;
          var _0x334d51 = _0x165363 ? _0x1e962c - _0x282fdd : _0x282fdd - _0x1e962c;
          var _0x4549b6 = this.CalculateAwardCellAngle(this.m_outerWheelVerySlowSpinAwardCellNum, this.m_outerWheelAwardNum);
          var _0x25b6e3 = 0x2 * (_0x4549b6 / _0x342e03) - 0x0;
          var _0x413aca = (_0x334d51 - _0x4549b6) / 0x2;
          var _0xd145ad = 0x2 * (_0x413aca / _0xebff6f) - _0x25b6e3;
          var _0x1c0bea = _0x334d51 - _0x4549b6 - _0x413aca;
          var _0x119c40 = 0x0;
          if (_0x19129a <= _0x4dfa73) {
            var _0x487d1f = 0x2 * (_0x1c0bea / _0x4dfa73) - 0x0;
            _0x119c40 = this.CalculatePosition(0x0, _0x487d1f, _0x282fdd, _0x165363, _0x4dfa73, _0x19129a);
          } else {
            if (_0x19129a <= _0x4dfa73 + _0xebff6f) {
              var _0x2882eb = _0x165363 ? _0x282fdd + _0x1c0bea : _0x282fdd - _0x1c0bea;
              var _0x1e2be4 = _0x19129a - _0x4dfa73;
              _0x119c40 = this.CalculatePosition(_0xd145ad, _0x25b6e3, _0x2882eb, _0x165363, _0xebff6f, _0x1e2be4);
            } else {
              if (_0x19129a <= _0x4dfa73 + _0xebff6f + _0x342e03) {
                var _0x11ee65 = _0x165363 ? _0x282fdd + _0x1c0bea + _0x413aca : _0x282fdd - _0x1c0bea - _0x413aca;
                var _0x50d80c = _0x19129a - _0x4dfa73 - _0xebff6f;
                _0x119c40 = this.CalculatePosition(_0x25b6e3, 0x0, _0x11ee65, _0x165363, _0x342e03, _0x50d80c);
              }
            }
          }
          return _0x119c40;
        };
        _0x4c4a99.CalculateAwardCellAngle = function (_0x1bc4c5, _0x538ec1) {
          return _0x1bc4c5 * (0x168 / _0x538ec1);
        };
        _0x4c4a99.CalculatePosition = function (_0x1a230d, _0x3a9bcf, _0x5c749e, _0x56d514, _0xafd5da, _0x36091f) {
          var _0xe15f70 = _0x1a230d * _0x36091f + 0.5 * ((_0x3a9bcf - _0x1a230d) / _0xafd5da) * Math.pow(_0x36091f, 0x2);
          return _0x56d514 ? _0x5c749e + _0xe15f70 : _0x5c749e - _0xe15f70;
        };
        _0x4c4a99.HardStop = function () {
          if (!this.m_isSpinEnd) {
            return this.m_isInnerWheelSpinStart && !this.m_isInnerWheelSpinEnd ? (_0x59ed38.stopAllByTarget(this.m_innerWheelBone), this.m_wheelFxSpine.StopSpin2(), this.m_wheelFxSpine.PlaySpin(), this.m_innerWheelBone.rotation = this.m_innerWheelWillStopAngle, this.m_isInnerWheelSpinEnd = true, _0x378220.Play(_0x549b11.AudioClips.Wheel_End3), void this.SpinOuterWheelInFG()) : void (this.m_isOuterWheelSpinStart && !this.m_isOuterWheelSpinEnd && (_0x59ed38.stopAllByTarget(this.m_outerWheelBone), this.m_outerWheelBone.rotation = 0x0 - this.m_outerWheelWillStopAngle, this.m_isOuterWheelSpinEnd = true, _0x378220.Play(_0x549b11.AudioClips.Wheel_End3), this.PlayWheelMulAwardSound_N_Shake(this.m_outerWheelMul), this.finishSpin()));
          }
        };
        _0x4c4a99.finishSpin = function () {
          this.m_isSpinEnd = true;
          this.m_outerWheelMul = -0x1;
          if (-0x1 !== this.m_wheelRotateAudioId) {
            _0x378220.Stop(this.m_wheelRotateAudioId);
            this.m_wheelRotateAudioId = -0x1;
          }
        };
        _0x4c4a99.PlayMGWin = function () {
          var _0x3621e8 = _0x2eaa1b(_0x5266ea().mark(function _0x4f4875() {
            return _0x5266ea().wrap(function (_0x10b99f) {
              for (;;) {
                switch (_0x10b99f.prev = _0x10b99f.next) {
                  case 0x0:
                    this.SetWheelFxRotation();
                    this.m_wheelFrontSpine.PlayMGWin();
                    _0x10b99f.next = 0x4;
                    return this.m_wheelFxSpine.PlayMGWin();
                  case 0x4:
                    this.m_wheelFxSpine.PlayMGIdle();
                  case 0x5:
                  case "end":
                    return _0x10b99f.stop();
                }
              }
            }, _0x4f4875, this);
          }));
          return function () {
            return _0x3621e8.apply(this, arguments);
          };
        }();
        _0x4c4a99.ShowMGIdle = function () {
          this.node.active = true;
          this.m_wheelFrontSpine.PlayMGIdle();
          this.m_wheelFxSpine.PlayMGIdle();
          this.m_wheelFxSpine.node.active = true;
        };
        _0x4c4a99.OpenInFG = function () {
          var _0x18b712 = _0x2eaa1b(_0x5266ea().mark(function _0x2c63b8() {
            return _0x5266ea().wrap(function (_0x7818cc) {
              for (;;) {
                switch (_0x7818cc.prev = _0x7818cc.next) {
                  case 0x0:
                    this.node.active = true;
                    this.m_wheelFrontBlack.PlayBlackOn();
                    _0x378220.Play(_0x549b11.AudioClips.Wheel_On);
                    _0x7818cc.next = 0x5;
                    return this.m_wheelFrontSpine.PlayFGOpen();
                  case 0x5:
                    this.m_wheelFrontSpine.PlayFGIdle();
                    this.m_wheelFxSpine.PlayFGIdle();
                    this.m_wheelFxSpine.node.active = true;
                  case 0x8:
                  case "end":
                    return _0x7818cc.stop();
                }
              }
            }, _0x2c63b8, this);
          }));
          return function () {
            return _0x18b712.apply(this, arguments);
          };
        }();
        _0x4c4a99.CloseInFG = function () {
          var _0xb113b = _0x2eaa1b(_0x5266ea().mark(function _0x3718a2(_0x14888f) {
            return _0x5266ea().wrap(function (_0x1ef009) {
              for (;;) {
                switch (_0x1ef009.prev = _0x1ef009.next) {
                  case 0x0:
                    if (undefined === _0x14888f) {
                      _0x14888f = false;
                    }
                    this.m_wheelFxSpine.node.active = false;
                    if (!_0x14888f) {
                      this.m_wheelFrontBlack.PlayBlackOff();
                    }
                    _0x1ef009.next = 0x5;
                    return this.m_wheelFrontSpine.PlayFGClose();
                  case 0x5:
                    this.node.active = false;
                  case 0x6:
                  case "end":
                    return _0x1ef009.stop();
                }
              }
            }, _0x3718a2, this);
          }));
          return function (_0x3611c4) {
            return _0xb113b.apply(this, arguments);
          };
        }();
        _0x4c4a99.PlayFGIntro = function () {
          var _0x251e1a = _0x2eaa1b(_0x5266ea().mark(function _0x41825f() {
            return _0x5266ea().wrap(function (_0x3bdaaf) {
              for (;;) {
                switch (_0x3bdaaf.prev = _0x3bdaaf.next) {
                  case 0x0:
                    _0x378220.Play(_0x549b11.AudioClips.FG_Wheel_Unlock);
                    this.m_wheelFxSpine.PlayFGIntro();
                    _0x3bdaaf.next = 0x4;
                    return this.m_wheelFrontSpine.PlayFGIntro();
                  case 0x4:
                  case 'end':
                    return _0x3bdaaf.stop();
                }
              }
            }, _0x41825f, this);
          }));
          return function () {
            return _0x251e1a.apply(this, arguments);
          };
        }();
        _0x4c4a99.SpinInFG = function (_0x2bcde7, _0x426b5c, _0x1019d7, _0x3e3eeb) {
          var _0x1278b5 = this;
          this.m_wheelRotateAudioId = _0x378220.Play(_0x549b11.AudioClips.Wheel_Rotate);
          var _0x273591 = this.CalculateWheelSpinResult(_0x2bcde7, this.m_outerWheelAwardNum);
          this.m_outerWheelWillStopAngle = _0x273591.finalAngle;
          this.m_outerWheelFxOffset = _0x273591.offset;
          this.m_outerWheelVerySlowSpinAwardCellNum = this.m_verySlowSpinAwardCellList[Math.floor(Math.random() * this.m_verySlowSpinAwardCellList.length)];
          this.m_outerWheelMul = _0x1019d7;
          var _0x5ea8bc = this.CalculateWheelSpinResult(_0x426b5c, this.m_innerWheelAwardNum);
          this.m_innerWheelWillStopAngle = _0x5ea8bc.finalAngle - 0x168 / this.m_innerWheelAwardNum;
          this.m_innerWheelFxOffset = _0x5ea8bc.offset;
          this.m_innerWheelVerySlowSpinAwardCellNum = this.m_outerWheelVerySlowSpinAwardCellNum;
          _0x5a1279(this.m_innerWheelBone).delay(0.5).call(function () {
            _0x1278b5.m_wheelFxSpine.node.active = true;
            _0x1278b5.m_wheelFxSpine.PlaySpin2();
          }).to(this.m_innerWheelSpinTime, {
            'rotation': 0x870 + this.m_innerWheelWillStopAngle
          }, {
            'progress': function (_0x27a141, _0x31e5f7, _0x1c18a9, _0x38915b) {
              return _0x1278b5.InnerWheelProgress(_0x27a141, _0x31e5f7, _0x1c18a9, _0x38915b);
            }
          }).call(function () {
            _0x1278b5.m_wheelFxSpine.StopSpin2();
            _0x1278b5.m_wheelFxSpine.PlaySpin();
            _0x1278b5.m_isInnerWheelSpinEnd = true;
            _0x1278b5.PlayFreeWheelColumnAwardSound(_0x3e3eeb);
            _0x1278b5.SpinOuterWheelInFG();
          }).start();
          this.m_isInnerWheelSpinStart = true;
        };
        _0x4c4a99.SpinOuterWheelInFG = function () {
          var _0x11bb2b = this;
          if (-0x1 !== this.m_wheelRotateAudioId) {
            _0x378220.Stop(this.m_wheelRotateAudioId);
            this.m_wheelRotateAudioId = -0x1;
          }
          this.m_wheelRotateAudioId = _0x378220.Play(_0x549b11.AudioClips.Wheel_Rotate);
          _0x5a1279(this.m_outerWheelBone).delay(0.5).to(this.m_outerWheelSpinTime, {
            'rotation': -0x708 - this.m_outerWheelWillStopAngle
          }, {
            'progress': function (_0x438b20, _0x29a871, _0x5f0e35, _0x1e7d8c) {
              return _0x11bb2b.OuterWheelProgress(_0x438b20, _0x29a871, _0x5f0e35, _0x1e7d8c);
            }
          }).call(function () {
            _0x11bb2b.m_isOuterWheelSpinEnd = true;
            _0x11bb2b.PlayWheelMulAwardSound_N_Shake(_0x11bb2b.m_outerWheelMul);
            _0x11bb2b.finishSpin();
          }).start();
          this.m_isOuterWheelSpinStart = true;
        };
        _0x4c4a99.InnerWheelProgress = function (_0x28f98e, _0x21f85f, _0x4db1a2, _0x1a176e) {
          var _0xa92f3c = 0.08 * this.m_innerWheelVerySlowSpinAwardCellNum;
          var _0x4b391b = (0x1 - _0xa92f3c) / 0x2;
          var _0x552131 = 0x1 - _0xa92f3c - _0x4b391b;
          var _0x45c3fb = _0x21f85f - _0x28f98e > 0x0;
          var _0x2aeb09 = _0x45c3fb ? _0x21f85f - _0x28f98e : _0x28f98e - _0x21f85f;
          var _0x1510a4 = this.CalculateAwardCellAngle(this.m_innerWheelVerySlowSpinAwardCellNum, this.m_innerWheelAwardNum);
          var _0x38ca04 = 0x2 * (_0x1510a4 / _0xa92f3c) - 0x0;
          var _0x20cf90 = (_0x2aeb09 - _0x1510a4) / 0x2;
          var _0x17f074 = 0x2 * (_0x20cf90 / _0x552131) - _0x38ca04;
          var _0x66a535 = _0x2aeb09 - _0x1510a4 - _0x20cf90;
          var _0xa44303 = 0x0;
          if (_0x1a176e <= _0x4b391b) {
            var _0x3be6a1 = 0x2 * (_0x66a535 / _0x4b391b) - 0x0;
            _0xa44303 = this.CalculatePosition(0x0, _0x3be6a1, _0x28f98e, _0x45c3fb, _0x4b391b, _0x1a176e);
          } else {
            if (_0x1a176e <= _0x4b391b + _0x552131) {
              var _0x3dc4d6 = _0x45c3fb ? _0x28f98e + _0x66a535 : _0x28f98e - _0x66a535;
              var _0x4a3b7d = _0x1a176e - _0x4b391b;
              _0xa44303 = this.CalculatePosition(_0x17f074, _0x38ca04, _0x3dc4d6, _0x45c3fb, _0x552131, _0x4a3b7d);
            } else {
              if (_0x1a176e <= _0x4b391b + _0x552131 + _0xa92f3c) {
                var _0x55fa9b = _0x45c3fb ? _0x28f98e + _0x66a535 + _0x20cf90 : _0x28f98e - _0x66a535 - _0x20cf90;
                var _0x1fe977 = _0x1a176e - _0x4b391b - _0x552131;
                _0xa44303 = this.CalculatePosition(_0x38ca04, 0x0, _0x55fa9b, _0x45c3fb, _0xa92f3c, _0x1fe977);
              }
            }
          }
          return _0xa44303;
        };
        _0x4c4a99.PlayFGWin = function () {
          var _0x50519a = _0x2eaa1b(_0x5266ea().mark(function _0x5b6ce1() {
            return _0x5266ea().wrap(function (_0x38710a) {
              for (;;) {
                switch (_0x38710a.prev = _0x38710a.next) {
                  case 0x0:
                    this.SetWheelFxRotation();
                    this.m_wheelFrontSpine.PlayFGWin();
                    _0x38710a.next = 0x4;
                    return this.m_wheelFxSpine.PlayFGWin();
                  case 0x4:
                    this.m_wheelFxSpine.PlayFGIdle();
                  case 0x5:
                  case "end":
                    return _0x38710a.stop();
                }
              }
            }, _0x5b6ce1, this);
          }));
          return function () {
            return _0x50519a.apply(this, arguments);
          };
        }();
        _0x4c4a99.GetWheelRotations = function () {
          return {
            'outerWheelRotation': this.m_outerWheelBone.rotation,
            'innerWheelRotation': this.m_innerWheelBone.rotation
          };
        };
        _0x4c4a99.PlayWheelMulAwardSound_N_Shake = function (_0x340e64) {
          if (_0x340e64 >= _0x549b11.WHEEL_MUL_GROUP.GROUP1.MIN && _0x340e64 <= _0x549b11.WHEEL_MUL_GROUP.GROUP1.MAX) {
            _0x378220.Play(_0x549b11.AudioClips.Wheel_End1);
          } else if (_0x340e64 >= _0x549b11.WHEEL_MUL_GROUP.GROUP2.MIN && _0x340e64 <= _0x549b11.WHEEL_MUL_GROUP.GROUP2.MAX) {
            _0x378220.Play(_0x549b11.AudioClips.Wheel_End2);
          } else if (0x0 === _0x340e64) {
            _0x378220.Play(_0x549b11.AudioClips.Wheel_End_FG);
          } else {
            _0x378220.Play(_0x549b11.AudioClips.Wheel_End3);
          }
          if (_0x340e64 >= _0x549b11.SHAKE_MULTI || 0x0 === _0x340e64) {
            this.m_shake.ShakeWithName(this.m_shake.shakename);
            this.m_wheelFxSpine2.PlayWinPlus();
          }
        };
        _0x4c4a99.PlayFreeWheelColumnAwardSound = function (_0x28d246) {
          if (0x0 === _0x28d246 || 0x1 === _0x28d246) {
            _0x378220.Play(_0x549b11.AudioClips.Wheel_End1);
          } else if (0x2 === _0x28d246) {
            _0x378220.Play(_0x549b11.AudioClips.Wheel_End2);
          } else if (0x3 === _0x28d246) {
            _0x378220.Play(_0x549b11.AudioClips.Wheel_End3);
          }
        };
        _0x4c4a99.SetWheelFxRotation = function () {
          this.m_outerWheelFxBone.rotation = 0x0 - this.m_outerWheelFxOffset;
          this.m_outerWheelFxBone2.rotation = 0x0 - this.m_outerWheelFxOffset;
          this.m_outerWheelShadowBone.rotation = 0x0 - this.m_outerWheelFxOffset;
          this.m_innerWheelFxBone.rotation = this.m_innerWheelFxOffset;
          this.m_innerWheelShadowBone.rotation = this.m_innerWheelFxOffset;
        };
        return _0x363298;
      }(_0x55612a);
      _0x248842 = _0x58cf1d(_0x1b379a.prototype, "m_wheelFrontSpine", [_0x4717c4], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4e8eb6 = _0x58cf1d(_0x1b379a.prototype, 'm_wheelFxSpine', [_0x185897], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4d37e7 = _0x58cf1d(_0x1b379a.prototype, "m_wheelFxSpine2", [_0x391828], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x194d1d = _0x58cf1d(_0x1b379a.prototype, "m_wheelFrontBlack", [_0x478f65], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x322edd = _0x58cf1d(_0x1b379a.prototype, 'm_shake', [_0x1ad19c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x174133;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "c0a5fSmAJZCOYM94+IIz+V2", "GameIntroSpine", undefined);
      _0x174133 = function (_0x323e8e) {
        function _0x167dda() {
          return _0x323e8e.apply(this, arguments) || this;
        }
        _0x47cbbc(_0x167dda, _0x323e8e);
        _0x167dda.prototype.PlayGameIntro = function () {
          var _0x509669 = _0x2eaa1b(_0x5266ea().mark(function _0x2ce3a1(_0x5c75f5) {
            return _0x5266ea().wrap(function (_0x4a17e1) {
              for (;;) {
                switch (_0x4a17e1.prev = _0x4a17e1.next) {
                  case 0x0:
                    if (!_0x5c75f5) {
                      _0x4a17e1.next = 0x5;
                      break;
                    }
                    _0x4a17e1.next = 0x3;
                    return this.PlayAnimation(_0x167dda.AnimName.GameIntro_L, false);
                  case 0x3:
                    _0x4a17e1.next = 0x7;
                    break;
                  case 0x5:
                    _0x4a17e1.next = 0x7;
                    return this.PlayAnimation(_0x167dda.AnimName.GameIntro_S, false);
                  case 0x7:
                  case 'end':
                    return _0x4a17e1.stop();
                }
              }
            }, _0x2ce3a1, this);
          }));
          return function (_0x433fd4) {
            return _0x509669.apply(this, arguments);
          };
        }();
        return _0x167dda;
      }(_0x45d7ab);
      _0x174133.AnimName = {
        'GameIntro_L': "GameIntro_L",
        'GameIntro_S': 'GameIntro_S'
      };
      var _0x40df07;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "782e5bX/JlPDY7yZtSv00Wp", "MainFxSpine", undefined);
      _0x40df07 = function (_0x2faaec) {
        function _0x10b503() {
          return _0x2faaec.apply(this, arguments) || this;
        }
        _0x47cbbc(_0x10b503, _0x2faaec);
        var _0x34a218 = _0x10b503.prototype;
        _0x34a218.PlayIdle = function () {
          this.PlayAnimation(_0x10b503.AnimName.Idle, true);
        };
        _0x34a218.PlayWin = function () {
          var _0xd65567 = _0x2eaa1b(_0x5266ea().mark(function _0x5bf894() {
            return _0x5266ea().wrap(function (_0x3e965f) {
              for (;;) {
                switch (_0x3e965f.prev = _0x3e965f.next) {
                  case 0x0:
                    _0x3e965f.next = 0x2;
                    return this.PlayAnimation(_0x10b503.AnimName.Win, false);
                  case 0x2:
                    this.PlayAnimation(_0x10b503.AnimName.Idle, true);
                  case 0x3:
                  case "end":
                    return _0x3e965f.stop();
                }
              }
            }, _0x5bf894, this);
          }));
          return function () {
            return _0xd65567.apply(this, arguments);
          };
        }();
        return _0x10b503;
      }(_0x45d7ab);
      _0x40df07.AnimName = {
        'Idle': "Idle",
        'Win': "Win"
      };
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "c031dKdxahPK7hqfKCden2v", "GameView", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "84c5byXmKBEJIwVBTwOs7ly", "ButtonPro", undefined);
      var _0x292bd1;
      var _0x3b58e5;
      var _0x18744d;
      !function (_0x296aa2) {
        _0x296aa2[_0x296aa2.NONE = 0x0] = "NONE";
        _0x296aa2[_0x296aa2.COLOR = 0x1] = "COLOR";
        _0x296aa2[_0x296aa2.SPRITE = 0x2] = "SPRITE";
        _0x296aa2[_0x296aa2.SCALE = 0x4] = "SCALE";
        _0x296aa2[_0x296aa2.COLOR_SPRITE = 0x3] = 'COLOR_SPRITE';
        _0x296aa2[_0x296aa2.COLOR_SCALE = 0x5] = "COLOR_SCALE";
        _0x296aa2[_0x296aa2.SPRITE_SCALE = 0x6] = 'SPRITE_SCALE';
        _0x296aa2[_0x296aa2.ALL = 0x7] = 'ALL';
      }(_0x292bd1 || (_0x292bd1 = {}));
      _0x800ec6(_0x292bd1);
      (function (_0x38c493) {
        _0x38c493.NORMAL = "normal";
        _0x38c493.HOVER = 'hover';
        _0x38c493.PRESSED = "pressed";
        _0x38c493.DISABLED = "disabled";
      })(_0x3b58e5 || (_0x3b58e5 = {}));
      (function (_0x6335f0) {
        _0x6335f0.CLICK = "click";
      })(_0x18744d || (_0x18744d = {}));
      var _0x930717;
      var _0x4286f1;
      var _0x4a0053;
      var _0x4668e3;
      var _0x33f8ea;
      var _0x4465af;
      var _0x4e02e3;
      var _0x3b7240;
      var _0x576aff;
      var _0x2e0b59;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "58afbgi72RCYrg3eW8ahovc", "CommonBuyBonusCell", undefined);
      var _0x12bfd7 = _0x9f6cc7.ccclass;
      var _0x4326ea = _0x9f6cc7.property;
      _0x930717 = _0x12bfd7("CommonBuyBonusCell");
      _0x4286f1 = _0x4326ea({
        'type': _0x57e8d7,
        'tooltip': '購買文字'
      });
      _0x4a0053 = _0x4326ea({
        'type': _0x57e8d7,
        'tooltip': "項目標題"
      });
      _0x4668e3 = _0x4326ea({
        'type': _0x4efd9,
        'tooltip': '標題圖片名稱'
      });
      _0x33f8ea = _0x4326ea({
        'type': _0x4134c8,
        'tooltip': '金額'
      });
      _0x4465af = function (_0x277534) {
        function _0x2981c5() {
          var _0x920445;
          var _0x29d051 = arguments.length;
          var _0xf89b5a = new Array(_0x29d051);
          for (var _0x5c9204 = 0x0; _0x5c9204 < _0x29d051; _0x5c9204++) {
            _0xf89b5a[_0x5c9204] = arguments[_0x5c9204];
          }
          _0x3517d5(_0x920445 = _0x277534.call.apply(_0x277534, [this].concat(_0xf89b5a)) || this, "m_buyHintSprite", _0x4e02e3, _0x1862e3(_0x920445));
          _0x3517d5(_0x920445, 'm_titleSprite', _0x3b7240, _0x1862e3(_0x920445));
          _0x3517d5(_0x920445, 'm_titlePicName', _0x576aff, _0x1862e3(_0x920445));
          _0x3517d5(_0x920445, "m_priceLabel", _0x2e0b59, _0x1862e3(_0x920445));
          return _0x920445;
        }
        _0x47cbbc(_0x2981c5, _0x277534);
        var _0x5cb02c = _0x2981c5.prototype;
        _0x5cb02c.start = function () {
          var _0x2d1022 = _0x39a0c9.GetGameAtlas();
          if (_0x39a0c9.CurrLang !== _0x166f61.Lang.EN) {
            this.m_buyHintSprite.spriteFrame = _0x2d1022.getSpriteFrame("Txt_Buy_Feature_Buy");
            this.m_titleSprite.spriteFrame = _0x2d1022.getSpriteFrame(this.m_titlePicName);
          }
        };
        _0x5cb02c.SetPrice = function (_0x54617a) {
          this.m_priceLabel.string = _0x54617a;
        };
        return _0x2981c5;
      }(_0x55612a);
      _0x4e02e3 = _0x58cf1d(_0x4465af.prototype, 'm_buyHintSprite', [_0x4286f1], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3b7240 = _0x58cf1d(_0x4465af.prototype, "m_titleSprite", [_0x4a0053], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x576aff = _0x58cf1d(_0x4465af.prototype, "m_titlePicName", [_0x4668e3], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return '';
        }
      });
      _0x2e0b59 = _0x58cf1d(_0x4465af.prototype, "m_priceLabel", [_0x33f8ea], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "deede8s0zBMX57ZpiWkWMfR", 'CommonBuyBonus', undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "da7972YP9VAta/rfkmC0gmE", "ColorText", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, 'ccb69RBfI5KBKNPuwywfE10', "ColorFadingUI", undefined);
      var _0x429fca;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "9cd57oopkhBmZJ5o4EZK1tk", "EvtReceiver", undefined);
      var _0xc30438 = _0x9f6cc7.ccclass;
      var _0x231bc0 = _0xc30438(_0x429fca = function (_0x351e3d) {
        function _0x495f31() {
          var _0xe8c890;
          var _0x249f9d = arguments.length;
          var _0x32abdd = new Array(_0x249f9d);
          for (var _0xca1e44 = 0x0; _0xca1e44 < _0x249f9d; _0xca1e44++) {
            _0x32abdd[_0xca1e44] = arguments[_0xca1e44];
          }
          (_0xe8c890 = _0x351e3d.call.apply(_0x351e3d, [this].concat(_0x32abdd)) || this).m_callback = undefined;
          return _0xe8c890;
        }
        _0x47cbbc(_0x495f31, _0x351e3d);
        _0x495f31.Pack = function (_0x12773b, _0x3a5dee) {
          _0x12773b.addComponent(_0x495f31);
          _0x12773b.getComponent(_0x495f31).SetCallback(_0x3a5dee);
        };
        var _0x2a6ac3 = _0x495f31.prototype;
        _0x2a6ac3.EvtReciever = function (_0x2e18cc) {
          _0x40ea73("AnimEvtReciever: ", _0x2e18cc);
          if (this.m_callback) {
            this.m_callback(_0x2e18cc);
          } else {
            _0x40ea73("callback沒有設定，無法處理event: ", _0x2e18cc);
          }
        };
        _0x2a6ac3.triggerAnimationEvent = function (_0x24bd95) {
          _0x40ea73("triggerAnimationEvent: ", _0x24bd95);
          if (this.m_callback) {
            this.m_callback(_0x24bd95);
          } else {
            _0x40ea73("callback沒有設定，無法處理event: ", _0x24bd95);
          }
        };
        _0x2a6ac3.SetCallback = function (_0x47f3b8) {
          this.m_callback = _0x47f3b8;
        };
        _0x2a6ac3.onDestroy = function () {
          this.m_callback = null;
        };
        return _0x495f31;
      }(_0x55612a)) || _0x429fca;
      var _0x510533;
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "bc3c97zP8pM2I5NAob2S72W", "EffectView", undefined);
      var _0x4c148f = function (_0x2784ef) {
        function _0x3258a1() {
          var _0x413597;
          (_0x413597 = _0x2784ef.call(this) || this).m_awardBoardFile = _0x3258a1.EFFECT_ROOT + "win/awardBoard";
          _0x413597.m_effectList = {};
          _0x413597.m_timeLineList = {};
          _0x413597.m_winEffCbFunc = null;
          _0x413597.m_currentWinEffect = null;
          _0x413597.m_currentWinEffectTimeline = null;
          _0x413597.m_awardBoard = null;
          _0x413597.m_awardBoardTimeline = null;
          _0x413597.m_txtWinValue = null;
          _0x413597.m_durRollMoneyTick = _0x3258a1.MONEY_ROLL_TIME;
          _0x413597.m_moneyRealValue = 0x0;
          _0x413597.m_moneyRollValue = 0x0;
          _0x413597.m_bgMaskNode = null;
          _0x413597.m_commonGetCoinCbFunc = null;
          _0x413597.m_commonGetCoinMidCbFunc = null;
          _0x413597.m_commonGetCoinEff = null;
          _0x413597.m_commonGetCoinTline = null;
          _0x413597.m_updateMoneyEff = null;
          _0x413597.m_updateMoneyTline = null;
          _0x413597.m_getCoinParticle = null;
          _0x413597.m_odds = [0x3, 0x5, 0xa, 0x14, 0x1e];
          _0x413597.m_winEffectFiles = [null, null, _0x3258a1.EFFECT_ROOT + _0x3258a1.FILE_PATH.BIG_WIN, _0x3258a1.EFFECT_ROOT + _0x3258a1.FILE_PATH.MEGA_WIN, _0x3258a1.EFFECT_ROOT + _0x3258a1.FILE_PATH.SUPER_WIN];
          _0x413597.m_coinEffects = [0x2, 0x3, 0x5, 0x5, 0x5];
          _0x413597.m_coinTimes = [0x2, 0x2, 0x5, 0x5, 0x5];
          _0x413597.m_soundNameByOdds = [];
          _0x413597.m_isAutoCheckFloat = false;
          _0x413597.m_rotateCoins = {};
          _0x413597.m_coinEffectNode = undefined;
          _0x413597.m_loadedSound = undefined;
          _0x413597.m_isLandscape = false;
          _0x413597.m_LandscapeRate = 0x1;
          _0x413597.m_winType = undefined;
          _0x413597.m_nowPlaySoundID = null;
          _0x413597.m_loadedSound = false;
          return _0x413597;
        }
        _0x47cbbc(_0x3258a1, _0x2784ef);
        var _0x1222b3 = _0x3258a1.prototype;
        _0x1222b3.LoadSound = function () {
          this.m_loadedSound = true;
        };
        _0x1222b3.OnUpdate = function (_0xaa648b) {
          this.RollWinMoney(_0xaa648b);
        };
        _0x1222b3.ShowWinAndCoinEffect = function (_0x30597a, _0x541d71, _0x1f5327) {
          if (undefined === _0x1f5327) {
            _0x1f5327 = null;
          }
          _0x1f5327 = _0x1f5327 || null;
          var _0x17935d = _0x9fe98.GetManagerId(_0x1f5327);
          this.ShowWinEffect(_0x30597a, _0x17935d);
          if (!(undefined !== _0x30597a.playCoinAtWinEffect && true !== _0x30597a.playCoinAtWinEffect)) {
            this.playCoinEffect(_0x541d71, _0x17935d);
          }
          _0x9fe98.StartLoad(_0x17935d);
        };
        _0x1222b3.ShowWinEffect = function (_0x4228c1, _0x57cae3) {
          var _0x34db44 = this;
          if (undefined === _0x57cae3) {
            _0x57cae3 = -0x1;
          }
          var _0x194c2a = _0x4228c1.effectFile;
          var _0x2f9845 = _0x4228c1.winValue;
          var _0x20188 = _0x4228c1.cbFunc;
          var _0x16c53f = _0x4228c1.yPos;
          var _0x3c064 = _0x4228c1.deltaY;
          var _0x4ddc17 = _0x4228c1.cbFuncBtoM;
          var _0x5a60fd = _0x4228c1.cbFuncMtoS;
          var _0x41fca0 = _0x4228c1.cbFuncPlaying;
          var _0x14d7c9 = _0x4228c1.isLoop || false;
          var _0x2076f3 = _0x4228c1.rollTime;
          if (null != _0x2f9845) {
            var _0x5c4991 = function () {
              if (_0x34db44.m_bgMaskNode) {
                _0x34db44.m_bgMaskNode.active = true;
              }
              _0x40ea73("LoadPrefabManager CB", _0x2f9845);
              _0x16c53f = null != _0x16c53f && _0x16c53f || _0x3258a1.DEFAULT_Y;
              _0x34db44.m_effectList[_0x194c2a].setPosition(_0x386e5e(_0x3258a1.DesignSize.width / 0x2, _0x16c53f));
              _0x34db44.m_effectList[_0x194c2a].active = true;
              _0x34db44.m_timeLineList[_0x194c2a].play(_0x3258a1.ANI_LABEL.ACT);
              _0x34db44.m_currentWinEffect = _0x34db44.m_effectList[_0x194c2a];
              _0x34db44.m_currentWinEffectTimeline = _0x34db44.m_timeLineList[_0x194c2a];
              _0x34db44.m_currentWinEffectTimeline.name = _0x194c2a;
              _0x3c064 = _0x194c2a == _0x3258a1.FILE_PATH.JACKPOT ? 0xb4 : null != _0x3c064 ? _0x3c064 : 0xe6;
              _0x34db44.m_awardBoard.setPosition(_0x386e5e(_0x3258a1.DesignSize.width / 0x2, _0x16c53f - _0x3c064));
              _0x34db44.m_awardBoard.active = true;
              _0x34db44.m_awardBoardTimeline.play(_0x3258a1.ANI_LABEL.ACT);
              _0x34db44.SetWinValue(_0x2f9845, _0x2076f3);
              if (!(null == _0x41fca0)) {
                _0x41fca0();
              }
            };
            var _0x2b3c53 = _0x57cae3;
            if (-0x1 == _0x57cae3) {
              _0x2b3c53 = _0x9fe98.GetManagerId(_0x5c4991);
            }
            this.m_winEffCbFunc = _0x20188;
            if (null == this.m_effectList[_0x194c2a]) {
              _0x9fe98.AddLoad(_0x2b3c53);
              _0x166f61.GameBundle.load(_0x194c2a, function (_0x145bcc, _0x197028) {
                if (_0x145bcc) {
                  _0x21c9d4(_0x145bcc.message || _0x145bcc);
                } else {
                  var _0x4ff678 = _0x55e2b5(_0x197028);
                  _0x4ff678.active = false;
                  _0x34db44.addChild(_0x4ff678);
                  _0xfd5517.SetZIndex(_0x4ff678, _0x3258a1.EFF_ZORDER.WIN_EFFECT);
                  var _0xdeecb3 = _0x4ff678.getComponent(_0x25028e);
                  _0x231bc0.Pack(_0x4ff678, function (_0x525612) {
                    if (_0x525612 == _0x3258a1.ANI_FRAME_EVENT.ENDING) {
                      if (_0x34db44.m_awardBoard && _0x34db44.m_awardBoard.active) {
                        _0x34db44.m_awardBoardTimeline.play(_0x3258a1.ANI_LABEL.ENDING);
                      }
                    } else {
                      if (_0x525612 == _0x3258a1.ANI_FRAME_EVENT.LOOP) {
                        if (_0x14d7c9) {
                          _0xdeecb3.play(_0x3258a1.ANI_LABEL.LOOP);
                          _0xdeecb3.getState(_0x3258a1.ANI_LABEL.LOOP).wrapMode = _0x43dc0a.WrapMode.Loop;
                        }
                      } else if (_0x525612 == _0x3258a1.ANI_FRAME_EVENT.B_TO_M) {
                        if (_0x34db44.m_awardBoard && _0x34db44.m_awardBoard.active) {
                          _0x5a1279(_0x34db44.m_txtWinValue).by(0.25, {
                            'scale': _0x386e5e(1.5, 1.5, 1.5)
                          }).by(0.1, {
                            'scale': _0x386e5e(0.9, 0.9, 0.9)
                          }).start();
                        }
                        if (_0x4ddc17) {
                          _0x4ddc17();
                        }
                      } else if (_0x525612 == _0x3258a1.ANI_FRAME_EVENT.M_TO_S) {
                        if (_0x34db44.m_awardBoard && _0x34db44.m_awardBoard.active) {
                          _0x5a1279(_0x34db44.m_txtWinValue).by(0.25, {
                            'scale': _0x386e5e(1.5, 1.5, 1.5)
                          }).by(0.1, {
                            'scale': _0x386e5e(0.9, 0.9, 0.9)
                          }).start();
                        }
                        if (!(null == _0x5a60fd)) {
                          _0x5a60fd();
                        }
                      } else if (_0x525612 == _0x3258a1.ANI_FRAME_EVENT.END) {
                        _0x40ea73("ANI_FRAME_EVENT.END");
                        _0x34db44.OnAnimationEnd();
                        if (_0x34db44.m_winEffCbFunc) {
                          _0x34db44.m_winEffCbFunc();
                        }
                      }
                    }
                  });
                  _0x4ff678.active = false;
                  _0x34db44.m_effectList[_0x194c2a] = _0x4ff678;
                  _0x34db44.m_timeLineList[_0x194c2a] = _0xdeecb3;
                  _0x9fe98.OnLoaded(_0x2b3c53);
                }
              });
              if (null == this.m_awardBoard) {
                _0x9fe98.AddLoad(_0x2b3c53);
                _0x166f61.GameBundle.load(this.m_awardBoardFile, function (_0x547a0c, _0x20193f) {
                  if (_0x547a0c) {
                    _0x21c9d4(_0x547a0c.message || _0x547a0c);
                  } else {
                    _0x34db44.m_awardBoard = _0x55e2b5(_0x20193f);
                    _0x34db44.addChild(_0x34db44.m_awardBoard);
                    _0xfd5517.SetZIndex(_0x34db44.m_awardBoard, _0x3258a1.EFF_ZORDER.AWARD_BOARD);
                    _0x34db44.m_awardBoard.active = false;
                    _0x34db44.m_awardBoardTimeline = _0x34db44.m_awardBoard.getComponent(_0x25028e);
                    _0x34db44.m_txtWinValue = _0x34db44.m_awardBoard.getChildByName('win_value_label');
                    _0x9fe98.OnLoaded(_0x2b3c53);
                  }
                });
              }
              if (-0x1 == _0x57cae3) {
                _0x9fe98.StartLoad(_0x2b3c53);
              } else {
                _0x9fe98.AddOnLoadedCallback(_0x2b3c53, _0x5c4991);
              }
            } else if (-0x1 == _0x57cae3) {
              _0x5c4991();
            } else {
              _0x9fe98.AddOnLoadedCallback(_0x2b3c53, _0x5c4991);
            }
          } else if (this.m_awardBoard) {
            this.m_awardBoard.active = false;
            this.m_awardBoardTimeline.stop();
          }
        };
        _0x1222b3.WinEffect = function () {
          if (this.m_currentWinEffectTimeline) {
            this.m_currentWinEffectTimeline.play(_0x3258a1.ANI_LABEL.ENDING, false);
          }
        };
        _0x1222b3.SetWinValue = function (_0x5048b6, _0x1c82b6, _0x31ec66) {
          if (undefined === _0x1c82b6) {
            _0x1c82b6 = null;
          }
          if (undefined === _0x31ec66) {
            _0x31ec66 = 0x0;
          }
          this.m_moneyRealValue = _0xfd5517.strip(_0x5048b6);
          this.m_moneyRollValue = _0x31ec66;
          _0x1c82b6 = null == _0x1c82b6 && _0x3258a1.MONEY_ROLL_TIME || _0x1c82b6;
          this.m_durRollMoneyTick = _0xfd5517.strip(_0x1c82b6);
        };
        _0x1222b3.RollWinMoney = function (_0x183ed7) {
          this.m_moneyRealValue = _0xfd5517.strip(this.m_moneyRealValue);
          this.m_moneyRollValue = _0xfd5517.strip(this.m_moneyRollValue);
          if (this.m_moneyRollValue < this.m_moneyRealValue) {
            var _0x4c60dc = _0xfd5517.divide(this.m_durRollMoneyTick, _0xfd5517.strip(_0x183ed7));
            var _0x500509 = _0xfd5517.divide(_0xfd5517.strip(this.m_moneyRealValue - this.m_moneyRollValue), _0x4c60dc);
            var _0x2a4356 = _0xfd5517.FORMAT_NUMBER_TYPE.DEFINE_DOT;
            if (this.m_isAutoCheckFloat) {
              _0x2a4356 = this.m_moneyRealValue.toString().indexOf('.') > -0x1 ? _0xfd5517.FORMAT_NUMBER_TYPE.PERMANENT_DOT : _0xfd5517.FORMAT_NUMBER_TYPE.NONE_DOT;
            }
            this.m_moneyRollValue = _0xfd5517.strip(this.m_moneyRollValue + _0x500509);
            if (this.m_moneyRollValue > this.m_moneyRealValue) {
              this.m_moneyRollValue = this.m_moneyRealValue;
            }
            this.SetLabelString(this.m_txtWinValue, this.m_moneyRollValue, _0x2a4356);
            this.m_durRollMoneyTick = _0xfd5517.strip(this.m_durRollMoneyTick - _0x183ed7);
          }
        };
        _0x1222b3.SetLabelString = function (_0x9973b, _0x1d5c3d, _0x8d9140) {
          if (undefined === _0x8d9140) {
            _0x8d9140 = null;
          }
          var _0x53ac9f = _0x9973b.getComponent(_0x4134c8);
          if (null != _0x53ac9f && null != _0x53ac9f) {
            if (null == _0x8d9140 || null == _0x8d9140) {
              _0x53ac9f.string = _0x1d5c3d.toString();
            } else {
              var _0x206c58;
              if ('number' == typeof _0x1d5c3d) {
                _0x206c58 = _0x1d5c3d;
              } else {
                var _0x3cb3b3 = _0x1d5c3d.replace(/,/g, '');
                _0x206c58 = isNaN(Number(_0x3cb3b3)) ? 0x0 : Number(_0x3cb3b3);
              }
              _0x53ac9f.string = _0xfd5517.FormatNumberThousands(_0x206c58, _0x8d9140);
            }
            _0xfd5517.SetFont(_0x53ac9f);
          } else {
            _0x40ea73("Warning!!!!!!!!!! SetLabelString: ", _0x9973b);
          }
        };
        _0x1222b3.SetWinMoneyToMax = function () {};
        _0x1222b3.IsRollMoneyEnd = function () {
          return this.m_moneyRollValue == this.m_moneyRealValue;
        };
        _0x1222b3.StopAnimation = function (_0x1d86e9) {
          if (this.m_currentWinEffectTimeline) {
            this.m_currentWinEffectTimeline.stop();
          }
          if (this.m_awardBoard) {
            this.m_awardBoard.active = false;
            this.m_awardBoardTimeline.stop();
          }
          if (0x1 != _0x1d86e9 && this.m_winEffCbFunc) {
            this.m_winEffCbFunc();
          }
          this.m_winEffCbFunc = null;
          this.OnAnimationEnd();
        };
        _0x1222b3.OnAnimationEnd = function () {
          if (this.m_currentWinEffect) {
            this.m_currentWinEffect.active = false;
          }
          if (this.m_bgMaskNode) {
            this.m_bgMaskNode.active = false;
          }
          this.m_moneyRealValue = 0x0;
          this.m_moneyRollValue = 0x0;
        };
        _0x1222b3.playCoinEffect = function (_0xded188, _0x15c2e1) {
          var _0x52eac7 = this;
          if (undefined === _0x15c2e1) {
            _0x15c2e1 = -0x1;
          }
          if (_0x166f61.CommonBundle) {
            var _0x379000 = _0xded188.level;
            var _0x72d495 = _0xded188.position;
            var _0x3bbd06 = _0xded188.time;
            if (null == _0x3bbd06) {
              _0x3bbd06 = 0x0;
            }
            var _0xb958d0 = _0xded188.zOrder;
            if (null == _0xb958d0) {
              _0xb958d0 = 0x0;
            }
            var _0x36cda0 = _0xded188.parent;
            this.stopCoinEffectImmly();
            var _0x9df8ea = _0x3258a1.COIN_EFFECT_LIST[_0x379000];
            if (_0x9df8ea = _0xfd5517.GetFilePath(_0x9df8ea)) {
              _0x40ea73("~~~~~~~~~~~~~~~~~~~~~~", _0xded188, _0x3bbd06, _0xb958d0);
              var _0x2808df = function () {
                _0x52eac7.m_coinEffectNode.setPosition(_0x386e5e(_0x72d495.x, _0x72d495.y));
                if (null == _0x36cda0 || null == _0x36cda0) {
                  _0x52eac7.addChild(_0x52eac7.m_coinEffectNode);
                  _0xfd5517.SetZIndex(_0x52eac7.m_coinEffectNode, 0x0);
                } else {
                  _0x36cda0.addChild(_0x52eac7.m_coinEffectNode);
                  _0xfd5517.SetZIndex(_0x52eac7.m_coinEffectNode, _0xb958d0);
                }
                if (0x0 != _0x3bbd06) {
                  _0x5a1279(_0x52eac7).delay(_0x3bbd06).call(function () {
                    _0x52eac7.stopCoinEffect();
                  }).start();
                }
              };
              if (-0x1 != _0x15c2e1) {
                _0x9fe98.AddOnLoadedCallback(_0x15c2e1, _0x2808df);
                _0x9fe98.AddLoad(_0x15c2e1);
              }
              _0x166f61.CommonBundle.load(_0x9df8ea, function (_0x14197e, _0x5d015e) {
                _0x40ea73("LoadRes ", _0x9df8ea);
                if (_0x14197e) {
                  _0x21c9d4(_0x14197e.message || _0x14197e);
                } else {
                  _0x52eac7.m_coinEffectNode = _0x55e2b5(_0x5d015e);
                  if (_0x52eac7.m_coinEffectNode) {
                    if (-0x1 == _0x15c2e1) {
                      _0x2808df();
                    } else {
                      _0x9fe98.OnLoaded(_0x15c2e1);
                    }
                  } else {
                    _0x40ea73("SlotBottomBarView.playCoinEffect m_coinEffect is null");
                  }
                }
              });
            }
          }
        };
        _0x1222b3.stopCoinEffectImmly = function () {
          if (null != this.m_coinEffectNode && this.m_coinEffectNode.removeFromParent) {
            this.m_coinEffectNode.removeFromParent();
            this.m_coinEffectNode = null;
          }
        };
        _0x1222b3.stopCoinEffect = function () {
          if (null != this.m_coinEffectNode && this.m_coinEffectNode) {
            var _0x2f4f11 = this.m_coinEffectNode.getChildByName("Particle_1").getComponent(_0x2ff1df);
            var _0x5d2522 = this.m_coinEffectNode.getChildByName("Particle_2").getComponent(_0x2ff1df);
            if (_0x2f4f11) {
              _0x2f4f11.stopSystem();
            }
            if (_0x5d2522) {
              _0x5d2522.stopSystem();
            }
          }
        };
        _0x1222b3.ShowCommonEffect = function (_0x20f2bb, _0x277779, _0x49bdd7, _0x32ed93) {
          if (undefined === _0x49bdd7) {
            _0x49bdd7 = null;
          }
          if (undefined === _0x32ed93) {
            _0x32ed93 = null;
          }
          _0x49bdd7 = _0x49bdd7 || {};
          _0x32ed93 = _0x32ed93 || {};
          var _0x3ddb4b = new _0x3d0649(_0x3258a1.DesignSize.width / 0x2, _0x3258a1.DesignSize.height);
          var _0x2e8ff2 = new _0x3d0649(_0x3258a1.DesignSize.width / 0x2 - 0xa, 0x91);
          var _0x48e9fa = undefined;
          var _0x1e7c95 = _0x20f2bb / _0x277779;
          if (_0x38797b) {
            _0x20f2bb = _0x38797b.GetDisplayValue(_0x20f2bb);
          }
          for (var _0x39072e = this.m_odds.length - 0x1; _0x39072e >= 0x0; _0x39072e--) {
            if (_0x1e7c95 >= this.m_odds[_0x39072e]) {
              _0x32ed93.level = this.m_coinEffects[_0x39072e];
              if (0x5 == this.m_coinEffects[_0x39072e]) {
                _0x32ed93.position = _0x32ed93.position ? _0x32ed93.position : _0x3ddb4b;
              } else {
                _0x32ed93.position = _0x32ed93.smallPosition ? _0x32ed93.smallPosition : _0x32ed93.position ? _0x32ed93.position : _0x2e8ff2;
              }
              if (null == _0x32ed93.time || _0x32ed93.time <= 0x0) {
                _0x32ed93.time = this.m_coinTimes[_0x39072e];
              }
              if (0x5 == this.m_coinEffects[_0x39072e]) {
                _0x49bdd7.effectFile = this.m_winEffectFiles[_0x39072e];
                _0x49bdd7.winValue = _0x20f2bb;
                this.SetWinType(_0x39072e);
                this.ShowWinAndCoinEffect(_0x49bdd7, _0x32ed93);
              } else {
                this.playCoinEffect(_0x32ed93);
              }
              _0x48e9fa = this.m_soundNameByOdds[_0x39072e];
              break;
            }
          }
          if (null != _0x48e9fa) {
            this.m_nowPlaySoundID = _0x378220.Play(_0x48e9fa, false);
          }
          if (null == _0x32ed93.time) {
            _0x32ed93.time = 0x0;
          }
          return _0x32ed93.time;
        };
        _0x1222b3.SkipEffect = function () {
          this.stopCoinEffect();
          _0x7395fb.instance.ActionManager.removeAllActionsFromTarget(this);
          if (this.m_currentWinEffectTimeline) {
            var _0x51ad3c = this.m_currentWinEffectTimeline.name;
            var _0x13daf2 = _0xfd5517.FORMAT_NUMBER_TYPE.DEFINE_DOT;
            if (!(_0x51ad3c != _0x3258a1.FILE_PATH.BIG_WIN && _0x51ad3c != _0x3258a1.FILE_PATH.MEGA_WIN && _0x51ad3c != _0x3258a1.FILE_PATH.SUPER_WIN)) {
              this.m_moneyRollValue = _0xfd5517.strip(this.m_moneyRollValue);
              this.m_moneyRealValue = _0xfd5517.strip(this.m_moneyRealValue);
              if (this.m_moneyRollValue == this.m_moneyRealValue) {
                this.m_awardBoardTimeline.play(_0x3258a1.ANI_LABEL.ENDING);
                this.m_currentWinEffectTimeline.setCurrentTime(0x5);
              } else {
                if (this.m_isAutoCheckFloat) {
                  _0x13daf2 = this.m_moneyRealValue.toString().indexOf('.') > -0x1 ? _0xfd5517.FORMAT_NUMBER_TYPE.PERMANENT_DOT : _0xfd5517.FORMAT_NUMBER_TYPE.NONE_DOT;
                }
                this.SetLabelString(this.m_txtWinValue, this.m_moneyRealValue, _0x13daf2);
                this.m_currentWinEffectTimeline.setCurrentTime(3.8);
              }
              this.m_currentWinEffectTimeline = null;
            }
            this.m_moneyRollValue = this.m_moneyRealValue;
          }
        };
        _0x1222b3.SkipEffectSound = function () {
          if (this.m_nowPlaySoundID) {
            _0x378220.Stop(this.m_nowPlaySoundID);
            this.m_nowPlaySoundID = null;
          }
        };
        _0x1222b3.SetAutoCheckFloat = function (_0x267eeb) {
          this.m_isAutoCheckFloat = _0x267eeb;
        };
        _0x1222b3.SetOdds = function (_0x4525ca) {
          this.m_odds = _0x4525ca;
        };
        _0x1222b3.SetWinEffectFiles = function (_0x4e95dd) {
          this.m_winEffectFiles = _0x4e95dd;
        };
        _0x1222b3.SetAwardBoardFile = function (_0xf0deb2) {
          this.m_awardBoardFile = _0xf0deb2;
        };
        _0x1222b3.SetEffectLevels = function (_0x4e9a30) {
          this.m_coinEffects = _0x4e9a30;
        };
        _0x1222b3.SetEffectTimes = function (_0x5ddcaa) {
          this.m_coinTimes = _0x5ddcaa;
        };
        _0x1222b3.SetSoundNameByOdds = function (_0x2be4fd) {
          this.m_soundNameByOdds = _0x2be4fd;
        };
        _0x1222b3.SetBGMaskNode = function (_0x1f875a) {
          if (null != _0x1f875a) {
            this.m_bgMaskNode = _0x1f875a;
          }
        };
        _0x1222b3.SetWinTextFontSize = function (_0x1a3777) {
          if (this.m_txtWinValue) {
            this.m_txtWinValue.getComponent(_0x4134c8).fontSize = _0x1a3777;
          }
        };
        _0x1222b3.SetWinType = function (_0x3beb0a) {
          this.m_winType = _0x3beb0a;
        };
        _0x17689c(_0x3258a1, [{
          'key': 'CoinEffectNode',
          'set': function (_0x6e4399) {
            this.m_coinEffectNode = _0x6e4399;
          }
        }]);
        return _0x3258a1;
      }(_0x57be55);
      _0x4c148f.DesignSize = {
        'width': 0x470,
        'height': 0x280
      };
      _0x4c148f.SOUND_FILE = {
        'COMMON_SUPER_WIN': null,
        'COMMON_MEGA_WIN': null,
        'COMMON_COIN_SMALL': null,
        'COMMON_COIN_MEDIUM': null,
        'COMMON_BIG_WIN': null
      };
      _0x4c148f.EFFECT_ROOT = "Astt/%s/effect/GameCommonEffect/";
      _0x4c148f.FILE_PATH = {
        'BIG_WIN': "win/big_anim",
        'MEGA_WIN': 'win/mega_anim',
        'SUPER_WIN': "win/super_anim",
        'JACKPOT': "win/effect_Jackpot",
        'BIG_TO_MEGA_WIN': "win/bigToMega_anim",
        'BIG_TO_SUPER_WIN': "win/bigToSuper_anim",
        'FIVE_OF_A_KIND': "win/5ofa_anim"
      };
      _0x510533 = {
        [_0x4c148f.FILE_PATH.BIG_WIN]: "Common_big_win",
        [_0x4c148f.FILE_PATH.MEGA_WIN]: "Common_mega_win",
        [_0x4c148f.FILE_PATH.SUPER_WIN]: "Common_super_win",
        [_0x4c148f.FILE_PATH.JACKPOT]: 'Common_JP_win',
        [_0x4c148f.FILE_PATH.BIG_TO_MEGA_WIN]: "Common_big_win",
        [_0x4c148f.FILE_PATH.BIG_TO_SUPER_WIN]: "Common_big_win",
        [_0x4c148f.FILE_PATH.FIVE_OF_A_KIND]: 'Common_big_win'
      };
      _0x4c148f.WIN_EFFECT_SOUND_NAME = _0x510533;
      _0x4c148f.EffectViewUIName = _0x1c79af({
        'TXT_WIN_MONEY': 'label_final_value',
        'PARTICLE': "Particle_"
      });
      _0x4c148f.DEFAULT_Y = 0x190;
      _0x4c148f.PARTICLE_AMOUNT_MAX = 0x2;
      _0x4c148f.MONEY_ROLL_TIME = 0x3;
      _0x4c148f.UPDATE_MONEY_CSB = _0x4c148f.EFFECT_ROOT + "common_get_coin/Node_GetCoin01.csb";
      _0x4c148f.COMMON_GET_COIN_CSB = _0x4c148f.EFFECT_ROOT + "common_get_coin/Node_GetCoin02.csb";
      _0x4c148f.GET_COIN_PARTICLE_CSB = _0x4c148f.EFFECT_ROOT + "common_get_coin/Particle/_V3_GetCoin02.plist";
      _0x4c148f.ROTATE_COIN_CSB = _0x4c148f.EFFECT_ROOT + "common_get_coin/Node_CoinRotation01.csb";
      _0x4c148f.TRIAL_COIN_CSB = _0x4c148f.EFFECT_ROOT + "common_get_coin/Node_GetTrialCoin.csb";
      _0x4c148f.COIN_APPEAR_PARTICLE_CSB = _0x4c148f.EFFECT_ROOT + "common_get_coin/Particle/New_CoinShine03.plist";
      _0x4c148f.COMMON_COIN_AMOUNT = 0x8;
      _0x4c148f.ANI_LABEL = {
        'ACT': "main",
        'LOOP': "loop",
        'ENDING': "ending"
      };
      _0x4c148f.ANI_FRAME_EVENT = {
        'MID': "AniMid",
        'B_TO_M': "AniBtoM",
        'M_TO_S': "AniMtoS",
        'ENDING': "AniEnding",
        'END': "AniEnd",
        'LOOP': "AniLoop"
      };
      _0x4c148f.EFF_ZORDER = {
        'COIN_FALL': 0x1,
        'WIN_EFFECT': 0x2,
        'AWARD_BOARD': 0x3,
        'COMMON_GET_COIN': 0x4,
        'GET_TRIAL_COIN': 0x5
      };
      _0x4c148f.COIN_EFFECT_LIST = {
        0x1: _0x4c148f.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_1",
        0x2: _0x4c148f.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_2",
        0x3: _0x4c148f.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_3",
        0x4: _0x4c148f.EFFECT_ROOT + 'coin/2_BigGoldCoinFX_1',
        0x5: _0x4c148f.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_1",
        0x6: _0x4c148f.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_2",
        0x7: _0x4c148f.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_3"
      };
      _0x4c148f.WIN_TYPE = {
        'BIG': 0x2,
        'MEGA': 0x3,
        'SUPER': 0x4
      };
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, 'a4b83idlNlHcZQFqX6vJhFz', 'ExtraBetComponent', undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "5cf68x6BTZHP5QWXU3HRb/c", 'FeaturePageComponent', undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "e33faPhWqxMHa92Db40WLqj", "LabelSpacingX", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "a6f15DRaTNJEaqvyk6QuIo3", 'LangImg', undefined);
      var _0x5e427e;
      !function (_0x21914e) {
        _0x21914e[_0x21914e.PNG = 0x0] = "PNG";
        _0x21914e[_0x21914e.JPG = 0x1] = 'JPG';
      }(_0x5e427e || (_0x5e427e = {}));
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "3638c7rYSpEjZ7x8wtqusdg", "RenderDataBump", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "75a969XvAFPfax+l1fDcqo9", "ScrollEventHandler", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "eb577rwRR5ASa6OivNuPgEY", "SeriesComponent", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "18f47v83XtI64h+ISwRgq3A", "BoneFollow", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "44834DdFVNM2reoglp7HL82", 'NewBoneFollow', undefined);
      var _0x54da1e;
      !function (_0x39c2a2) {
        _0x39c2a2[_0x39c2a2["default"] = 0x1] = 'default';
      }(_0x54da1e || (_0x54da1e = {}));
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "2da2cEqApNLm7hZxNo+Lfkx", "NewSlotColorFollow", undefined);
      var _0x1bdf78;
      !function (_0x12032e) {
        _0x12032e[_0x12032e["default"] = 0x1] = "default";
      }(_0x1bdf78 || (_0x1bdf78 = {}));
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "866f1RjwMhFfapt6JLtipxM", "SkeletonSync", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "e2171n/i+xGsoWeQMXewobE", 'SlotActivator', undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, 'e23desmKVBLjKgDg5KLcySp', "SlotColorFollow", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, 'ff032nME8lBJKBpMlK8O/1z', "SlotCulling", undefined);
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "f8b5e4BLTJNX7FPcFOEaBkq", "ZipBundleLoader", undefined);
      var _0x2b5eb5 = new Map();
      var _0x30760c = new Map();
      var _0x24678b = new Map();
      var _0x1cebe4 = function () {
        function _0x8c97c0() {
          this.loadedZipNames = new Array();
        }
        var _0xf2e5b6 = _0x8c97c0.prototype;
        _0xf2e5b6.downloadZip = function (_0x2084b1, _0x531c8f) {
          return new Promise(function (_0x37a0a7) {
            var _0x2f6451 = _0x2084b1.match(/[^/]+$/);
            if (null !== _0x2f6451) {
              var _0x4b060a = '' + _0x2f6451[0x0] + _0x531c8f + '.zip';
              _0x1fd604.downloader.downloadFile(_0x2084b1 + '/' + _0x4b060a, {
                'xhrResponseType': "arraybuffer"
              }, null, function (_0x5a0472, _0xd02577) {
                _0x37a0a7(_0xd02577);
              });
            } else {
              _0x37a0a7(null);
            }
          });
        };
        _0xf2e5b6.loadZip = function () {
          var _0x4b59bb = _0x2eaa1b(_0x5266ea().mark(function _0x161a5a(_0x3f001b, _0x7271cb) {
            var _0x1661e3;
            var _0x56c21b;
            var _0x2f472a;
            return _0x5266ea().wrap(function (_0x3af9d5) {
              for (;;) {
                switch (_0x3af9d5.prev = _0x3af9d5.next) {
                  case 0x0:
                    _0x1661e3 = _0x7271cb ? '.' + _0x7271cb : '';
                    _0x3af9d5.next = 0x3;
                    return this.downloadZip(_0x3f001b, _0x1661e3);
                  case 0x3:
                    if (null !== (_0x56c21b = _0x3af9d5.sent)) {
                      _0x2f472a = _0x3f001b.replace(/(.*?)\/assets\//, "assets/");
                      globalThis.fflate.unzip(new Uint8Array(_0x56c21b), function (_0x6ba076, _0xd6af7b) {
                        if (_0x6ba076) {
                          console.warn("Unzip failed:", _0x6ba076.message);
                        } else {
                          Object.keys(_0xd6af7b).forEach(function (_0x3554bd) {
                            _0x2b5eb5.set(_0x3f001b + '/' + _0x3554bd, _0xd6af7b[_0x3554bd]);
                            _0x2b5eb5.set(_0x2f472a + '/' + _0x3554bd, _0xd6af7b[_0x3554bd]);
                          });
                        }
                      });
                    }
                  case 0x5:
                  case "end":
                    return _0x3af9d5.stop();
                }
              }
            }, _0x161a5a, this);
          }));
          return function (_0x5daae5, _0x94c5e9) {
            return _0x4b59bb.apply(this, arguments);
          };
        }();
        _0xf2e5b6.init = function () {
          if (globalThis.fflate) {
            var _0x4cd920 = Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, "response");
            Object.defineProperty(XMLHttpRequest.prototype, "response", {
              'get': function () {
                return this.ZipCacheUrl ? _0x30760c.get(this.ZipCacheUrl) : _0x4cd920.get.call(this);
              },
              'set': function (_0x274178) {},
              'configurable': true
            });
            var _0x13c7dd = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function (_0x32ab69, _0x4b4841, _0x414551, _0x3b5cd9, _0x5d2253) {
              function _0x516d2c() {
                var _0x34ced4 = this.status >= 0xc8 && this.status < 0x12c || 0x130 == this.status;
                if (this.readyState == XMLHttpRequest.DONE && !_0x34ced4 && 0x194 != this.status && _0x4b4841.includes("http")) {
                  _0x216585(0x2bd, this.status);
                  _0x216585(0x2be, _0x4b4841);
                }
                this.removeEventListener("load", _0x516d2c);
              }
              if (_0x2b5eb5.has(_0x4b4841)) {
                this.ZipCacheUrl = _0x4b4841;
              }
              this.addEventListener("load", _0x516d2c.bind(this));
              return _0x13c7dd.apply(this, arguments);
            };
            var _0x2cbff5 = XMLHttpRequest.prototype.send;
            XMLHttpRequest.prototype.send = _0x2eaa1b(_0x5266ea().mark(function _0x999248(_0x2cf9a7) {
              var _0x4e59f6;
              var _0x2eaf91;
              var _0x665b38;
              var _0x451362;
              var _0x9b5b00;
              var _0xfddfe9;
              var _0x45576b;
              var _0x26a149;
              return _0x5266ea().wrap(function (_0x240c3e) {
                for (;;) {
                  switch (_0x240c3e.prev = _0x240c3e.next) {
                    case 0x0:
                      if (!this.ZipCacheUrl) {
                        _0x240c3e.next = 0x1a;
                        break;
                      }
                      if (_0x30760c.has(this.ZipCacheUrl)) {
                        _0x240c3e.next = 0x18;
                        break;
                      }
                      _0x4e59f6 = this.responseType;
                      _0x2eaf91 = _0x2b5eb5.get(this.ZipCacheUrl);
                      _0x665b38 = null;
                      _0x240c3e.t0 = _0x4e59f6;
                      _0x240c3e.next = "arraybuffer" === _0x240c3e.t0 ? 0x8 : "json" === _0x240c3e.t0 ? 0xa : 'text' === _0x240c3e.t0 ? 0xe : 0x11;
                      break;
                    case 0x8:
                      _0x665b38 = _0x2eaf91.buffer ? _0x2eaf91.buffer : _0x2eaf91;
                      return _0x240c3e.abrupt('break', 0x12);
                    case 0xa:
                      _0x451362 = new TextDecoder();
                      _0x9b5b00 = _0x451362.decode(_0x2eaf91);
                      _0x665b38 = JSON.parse(_0x9b5b00);
                      return _0x240c3e.abrupt("break", 0x12);
                    case 0xe:
                      _0xfddfe9 = new TextDecoder();
                      _0x665b38 = _0xfddfe9.decode(_0x2eaf91);
                      return _0x240c3e.abrupt("break", 0x12);
                    case 0x11:
                      console.error("Unknown type in zipCache:", _0x4e59f6);
                    case 0x12:
                      if (_0x45576b = _0x24678b.get(this.ZipCacheUrl)) {
                        _0x30760c["delete"](this.ZipCacheUrl + "@version" + _0x45576b);
                        _0x24678b["delete"](this.ZipCacheUrl);
                      }
                      _0x26a149 = performance.now();
                      _0x24678b.set(this.ZipCacheUrl, _0x26a149);
                      this.ZipCacheUrl = this.ZipCacheUrl + "@version" + _0x26a149;
                      _0x30760c.set(this.ZipCacheUrl, _0x665b38);
                    case 0x18:
                      this.onload();
                      return _0x240c3e.abrupt('return');
                    case 0x1a:
                      return _0x240c3e.abrupt("return", _0x2cbff5.apply(this, arguments));
                    case 0x1b:
                    case "end":
                      return _0x240c3e.stop();
                  }
                }
              }, _0x999248, this);
            }));
          } else {
            console.error("fflate is not found.");
          }
        };
        return _0x8c97c0;
      }();
      function _0x216585(_0x590fd4, _0x9d1eea) {
        if (!_0x475ebe.isNative) {
          var _0x22bae8 = 'https://' + window.location.host + '/';
          if (-0x1 == _0x22bae8.indexOf("localhost") && 0x1 != /^http(s)?:\/\/([0-9]{1,3}\.){3}[0-9]{1,3}(:[0-9]+)?\/.*?$/.test(_0x22bae8)) {
            var _0x401799 = 0x0;
            switch (_0x475ebe.browserType) {
              case _0x475ebe.BrowserType.CHROME:
                _0x401799 = 0x1;
                break;
              case _0x475ebe.BrowserType.SAFARI:
                _0x401799 = 0x2;
                break;
              case _0x475ebe.BrowserType.IE:
                _0x401799 = 0x3;
                break;
              case _0x475ebe.BrowserType.UC:
                _0x401799 = 0x4;
                break;
              case _0x475ebe.BrowserType.QQ:
              case _0x475ebe.BrowserType.MOBILE_QQ:
                _0x401799 = 0x5;
                break;
              case _0x475ebe.BrowserType.FIREFOX:
                _0x401799 = 0x6;
            }
            var _0x371978 = 0x0;
            switch (_0x475ebe.os) {
              case _0x475ebe.OS.ANDROID:
                _0x371978 = 0x1;
                break;
              case _0x475ebe.OS.IOS:
                _0x371978 = 0x2;
                break;
              case _0x475ebe.OS.WINDOWS:
                _0x371978 = 0x3;
                break;
              default:
                _0x371978 = 0x0;
            }
            var _0x4de221 = _0x1bdf96("apiId") || '-1';
            var _0x32d257 = _0x1bdf96('ssoKey') || '1';
            var _0x414269 = _0x1bdf96("gameID") || '-1';
            var _0x28c820 = "https://" + (_0x1bdf96("domain_platform") || _0x1bdf96('gs') || "gnidnawcs").split('').reverse().join('') + '/webservice/event/assetUpdate?';
            _0x5672c0(_0x28c820 += "?AccountID=-1&GameID=" + _0x414269 + "&GameVersion=" + new Date().getTime() + "&EventID=" + _0x590fd4 + "&EventValue=" + _0x9d1eea + "&BrowserSystem=" + _0x401799 + "&DeviceSystem=" + _0x371978 + '&CreateTime=' + new Date().toISOString() + "&Screen=0&SSOKey=" + _0x32d257 + "&ApiId=" + _0x4de221 + "&LogIndex=11");
          }
        }
      }
      function _0x5672c0(_0x22fbe4) {
        var _0x3d654f = {
          'Accept': "application/json, text/javascript, text/plain"
        };
        var _0x3eec08 = new XMLHttpRequest();
        _0x3eec08.open('GET', _0x22fbe4, true);
        if (_0x3d654f) {
          Object.keys(_0x3d654f).forEach(function (_0x3fbee9) {
            return _0x3eec08.setRequestHeader(_0x3fbee9, _0x3d654f[_0x3fbee9]);
          });
        }
        _0x3eec08.timeout = 0x1388;
        _0x3eec08.onload = function () {};
        _0x3eec08.onerror = function () {};
        _0x3eec08.ontimeout = function () {};
        _0x3eec08.send();
      }
      function _0x1bdf96(_0x7b6605, _0x1e0a57) {
        if (undefined === _0x1e0a57) {
          _0x1e0a57 = null;
        }
        if (!_0x1e0a57) {
          _0x1e0a57 = _0x56d470();
        }
        _0x7b6605 = _0x7b6605.replace(/[[\]]/g, "\\$&");
        var _0x46e6b9 = new RegExp("[?&]" + _0x7b6605 + "(=([^&#]*)|&|#|$)").exec(_0x1e0a57);
        return _0x46e6b9 ? _0x46e6b9[0x2] ? decodeURIComponent(_0x46e6b9[0x2].replace(/\+/g, " ")) : '' : null;
      }
      function _0x56d470() {
        var _0xc8916e = window.location.href;
        var _0x338dff = this.GetLinkParameterByName('replaydata', _0xc8916e);
        if (!_0x338dff) {
          return _0xc8916e;
        }
        var _0xb32b49 = '0'.charCodeAt(0x0);
        var _0x3db6bb = '9'.charCodeAt(0x0);
        var _0x4d0334 = 'a'.charCodeAt(0x0);
        var _0x42420c = 'z'.charCodeAt(0x0);
        var _0x244715 = 'A'.charCodeAt(0x0);
        var _0x5162cf = 'Z'.charCodeAt(0x0);
        var _0x8ec93e = '';
        for (var _0x5843fd = 0x0; _0x5843fd < _0x338dff.length; _0x5843fd++) {
          var _0x554bfa = _0x338dff.charCodeAt(_0x5843fd);
          if (_0x554bfa >= _0xb32b49 && _0x554bfa <= _0x3db6bb) {
            _0x554bfa = _0x3db6bb - (_0x554bfa - _0xb32b49);
            _0x8ec93e += String.fromCharCode(_0x554bfa);
          } else if (_0x554bfa >= _0x4d0334 && _0x554bfa <= _0x42420c && _0x5843fd % 0x2 == 0x0) {
            _0x554bfa = _0x42420c - (_0x554bfa - _0x4d0334);
            _0x8ec93e += String.fromCharCode(_0x554bfa);
          } else if (_0x554bfa >= _0x244715 && _0x554bfa <= _0x5162cf && _0x5843fd % 0x3 == 0x0) {
            _0x554bfa = _0x5162cf - (_0x554bfa - _0x244715);
            _0x8ec93e += String.fromCharCode(_0x554bfa);
          } else {
            _0x8ec93e += String.fromCharCode(_0x554bfa);
          }
        }
        var _0x488d9b = _0xc8916e.split("replaydata=" + _0x338dff);
        _0x488d9b.join('');
        return _0x488d9b + atob(_0x8ec93e);
      }
      var _0x1938a2 = globalThis.__zipBundleLoader;
      var _0x5d3f69;
      var _0x55794b;
      var _0x29a5d1;
      var _0x57428a;
      var _0xea0cce;
      var _0x4ff71d;
      var _0x3e5297;
      var _0x5777a1;
      var _0xed962a;
      var _0x2109e0;
      var _0x3f58dc;
      var _0x5b92e4;
      var _0x240105;
      var _0x27c415;
      var _0x27d79b;
      var _0xea6172;
      var _0x1cf715;
      var _0xc719c0;
      if (globalThis.fflate && !_0x1938a2) {
        _0x1938a2 = new _0x1cebe4();
        globalThis.__zipBundleLoader = _0x1938a2;
        _0x1938a2.init();
      }
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "c933866GvpLKaZlVxLlOz0C", "FeatureManagerComponent", undefined);
      var _0x40a9c1 = _0x9f6cc7.ccclass;
      var _0x8ba7d0 = _0x9f6cc7.property;
      var _0x47000c;
      !function (_0x1c328b) {
        _0x1c328b[_0x1c328b.CommonMainBundle = 0x0] = 'CommonMainBundle';
        _0x1c328b[_0x1c328b.CommonBundle = 0x1] = "CommonBundle";
        _0x1c328b[_0x1c328b.OtherBundle = 0x2] = "OtherBundle";
        _0x1c328b[_0x1c328b.DefaultLangBundle = 0x3] = "DefaultLangBundle";
        _0x1c328b[_0x1c328b.LangTextBundle = 0x4] = "LangTextBundle";
        _0x1c328b[_0x1c328b.GameBundle = 0x5] = "GameBundle";
      }(_0x47000c || (_0x47000c = {}));
      var _0x210abb;
      var _0xd0980a;
      !function (_0x4d6997) {
        _0x4d6997[_0x4d6997.None = 0x0] = "None";
        _0x4d6997[_0x4d6997.AutoPlaySettingPanel = 0x1] = "AutoPlaySettingPanel";
        _0x4d6997[_0x4d6997.AutoPlaySettingPanel_DFI = 0x2] = "AutoPlaySettingPanel_DFI";
        _0x4d6997[_0x4d6997.AutoPlaySettingPanel_DFIII = 0x3] = 'AutoPlaySettingPanel_DFIII';
        _0x4d6997[_0x4d6997.AutoPlaySettingPanel_BS = 0x4] = "AutoPlaySettingPanel_BS";
        _0x4d6997[_0x4d6997.AutoPlaySetting_AG2 = 0x5] = "AutoPlaySetting_AG2";
        _0x4d6997[_0x4d6997.AutoPlaySetting_FD = 0x6] = "AutoPlaySetting_FD";
        _0x4d6997[_0x4d6997.AutoPlaySettingPanel_MS = 0x7] = "AutoPlaySettingPanel_MS";
      }(_0x210abb || (_0x210abb = {}));
      (function (_0x44475d) {
        _0x44475d[_0x44475d.None = 0x0] = 'None';
        _0x44475d[_0x44475d.Dark = 0x1] = "Dark";
      })(_0xd0980a || (_0xd0980a = {}));
      _0x5d3f69 = _0x40a9c1("StyleSetting");
      _0x55794b = _0x8ba7d0({
        'type': _0x4d3188,
        'tooltip': "是否有骰子造型"
      });
      _0x29a5d1 = _0x8ba7d0({
        'type': _0x4d3188,
        'tooltip': "是否有萬聖造型"
      });
      _0x57428a = _0x8ba7d0({
        'type': _0x4d3188,
        'tooltip': '是否有聖誕造型'
      });
      _0xea0cce = _0x8ba7d0({
        'type': _0x4d3188,
        'tooltip': "是否有OKBET廠商造型"
      });
      _0x4ff71d = _0x8ba7d0({
        'type': _0x1c79af(_0xd0980a),
        'tooltip': '系列'
      });
      _0x3e5297 = function () {
        _0x3517d5(this, "HasDice", _0x5777a1, this);
        _0x3517d5(this, 'HasHolloween', _0xed962a, this);
        _0x3517d5(this, 'HasXmas', _0x2109e0, this);
        _0x3517d5(this, "HasOkbet", _0x3f58dc, this);
        _0x3517d5(this, "Series", _0x5b92e4, this);
      };
      _0x5777a1 = _0x58cf1d(_0x3e5297.prototype, "HasDice", [_0x55794b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0xed962a = _0x58cf1d(_0x3e5297.prototype, "HasHolloween", [_0x29a5d1], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x2109e0 = _0x58cf1d(_0x3e5297.prototype, 'HasXmas', [_0x57428a], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x3f58dc = _0x58cf1d(_0x3e5297.prototype, "HasOkbet", [_0xea0cce], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x5b92e4 = _0x58cf1d(_0x3e5297.prototype, "Series", [_0x4ff71d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return _0xd0980a.None;
        }
      });
      _0x240105 = _0x40a9c1("PlayTypeSetting");
      _0x27c415 = _0x8ba7d0({
        'type': _0x4d3188,
        'tooltip': 'Match'
      });
      _0x27d79b = _0x8ba7d0({
        'type': _0x4d3188,
        'tooltip': "Break"
      });
      _0xea6172 = function () {
        _0x3517d5(this, "Match", _0x1cf715, this);
        _0x3517d5(this, "Break", _0xc719c0, this);
      };
      _0x1cf715 = _0x58cf1d(_0xea6172.prototype, "Match", [_0x27c415], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0xc719c0 = _0x58cf1d(_0xea6172.prototype, "Break", [_0x27d79b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0xe3c15f._RF.pop();
      _0xe3c15f._RF.push({}, "89025dALbBFj7AFo+6o3xYM", "SwipeScreen", undefined);
      _0xe3c15f._RF.pop();
    }
  };
});
(function (_0x49ce2b) {
  _0x49ce2b("virtual:///prerequisite-imports/main", "chunks:///main.js");
})(function (_0x5e2269, _0x450ce7) {
  System.register(_0x5e2269, [_0x450ce7], function (_0x2ae81c, _0x5c9f9b) {
    return {
      'setters': [function (_0x38c4e0) {
        var _0x5ec113 = {};
        for (var _0x4e596e in _0x38c4e0) {
          if (_0x4e596e !== "default" && _0x4e596e !== "__esModule") {
            _0x5ec113[_0x4e596e] = _0x38c4e0[_0x4e596e];
          }
        }
        _0x2ae81c(_0x5ec113);
      }],
      'execute': function () {}
    };
  });
});