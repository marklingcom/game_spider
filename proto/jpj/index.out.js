System.register("chunks:///main.js", ['cc'], function (_0x2dffcd, _0x33ad4a) {
  'use strict';

  var _0x289c18;
  var _0x243100;
  var _0x19fa65;
  var _0x3812fe;
  var _0x6126fa;
  var _0x1370ff;
  var _0x19ba3d;
  var _0x2d51ac;
  var _0x1389c6;
  var _0x346ead;
  var _0xbb1863;
  var _0x4cb146;
  var _0x13a184;
  var _0x2f7ea9;
  var _0x56df80;
  var _0x1e3e82;
  var _0x8dc57e;
  var _0x59835f;
  var _0x98ac8;
  var _0x5ae348;
  var _0x10042e;
  var _0x4e6efb;
  var _0x350736;
  var _0x4497b0;
  var _0x4d181c;
  var _0x22f092;
  var _0x5ece9c;
  var _0x544b54;
  var _0x5bc370;
  var _0xc47c98;
  var _0x2f2a21;
  var _0x13ba52;
  var _0x230dc8;
  var _0x15d0cd;
  var _0x378c55;
  var _0x308dfb;
  var _0x4f0878;
  var _0x40eb68;
  var _0x5bde3e;
  var _0x1e4e6a;
  var _0x14836;
  var _0x1bd901;
  var _0x4d580a;
  var _0x35e9c7;
  var _0x2eb0c2;
  var _0x2c6c56;
  var _0x43fe4f;
  var _0x271f38;
  var _0x5d9acb;
  var _0x14bb92;
  var _0x1e4500;
  var _0x57ac70;
  var _0x95c36;
  var _0x49e668;
  var _0x216f91;
  var _0x23b688;
  var _0x2068f8;
  var _0x3a1aaf;
  var _0x857df2;
  var _0x539d82;
  var _0x4f13a8;
  var _0x38e59e;
  var _0x10fde8;
  var _0x2e662a;
  var _0x5d485e;
  var _0x21c9de;
  var _0x15bf26;
  var _0x31537f;
  var _0x463db8;
  var _0x555de5;
  return {
    'setters': [function (_0x57c5ff) {
      _0x289c18 = _0x57c5ff.cclegacy;
      _0x243100 = _0x57c5ff.v3;
      _0x19fa65 = _0x57c5ff.v2;
      _0x3812fe = _0x57c5ff.macro;
      _0x6126fa = _0x57c5ff._decorator;
      _0x1370ff = _0x57c5ff.sp;
      _0x19ba3d = _0x57c5ff.Label;
      _0x2d51ac = _0x57c5ff.Component;
      _0x1389c6 = _0x57c5ff.Enum;
      _0x346ead = _0x57c5ff.Sprite;
      _0xbb1863 = _0x57c5ff.UIOpacity;
      _0x4cb146 = _0x57c5ff.Animation;
      _0x13a184 = _0x57c5ff.tween;
      _0x2f7ea9 = _0x57c5ff.color;
      _0x56df80 = _0x57c5ff.log;
      _0x1e3e82 = _0x57c5ff.Node;
      _0x8dc57e = _0x57c5ff.warn;
      _0x59835f = _0x57c5ff.error;
      _0x98ac8 = _0x57c5ff.SpriteFrame;
      _0x5ae348 = _0x57c5ff.UITransform;
      _0x10042e = _0x57c5ff.Size;
      _0x4e6efb = _0x57c5ff.UIRenderer;
      _0x350736 = _0x57c5ff.Prefab;
      _0x4497b0 = _0x57c5ff.instantiate;
      _0x4d181c = _0x57c5ff.Button;
      _0x22f092 = _0x57c5ff.Vec3;
      _0x5ece9c = _0x57c5ff.CCFloat;
      _0x544b54 = _0x57c5ff.director;
      _0x5bc370 = _0x57c5ff.Director;
      _0xc47c98 = _0x57c5ff.RichText;
      _0x2f2a21 = _0x57c5ff.CCBoolean;
      _0x13ba52 = _0x57c5ff.Tween;
      _0x230dc8 = _0x57c5ff.Color;
      _0x15d0cd = _0x57c5ff.JsonAsset;
      _0x378c55 = _0x57c5ff.math;
      _0x308dfb = _0x57c5ff.NodeEventType;
      _0x4f0878 = _0x57c5ff.AnimationClip;
      _0x40eb68 = _0x57c5ff.SpriteAtlas;
      _0x5bde3e = _0x57c5ff.sys;
      _0x1e4e6a = _0x57c5ff.input;
      _0x14836 = _0x57c5ff.Input;
      _0x1bd901 = _0x57c5ff.KeyCode;
      _0x4d580a = _0x57c5ff.screen;
      _0x35e9c7 = _0x57c5ff.view;
      _0x2eb0c2 = _0x57c5ff.ResolutionPolicy;
      _0x2c6c56 = _0x57c5ff.ccenum;
      _0x43fe4f = _0x57c5ff.EventHandler;
      _0x271f38 = _0x57c5ff.assetManager;
      _0x5d9acb = _0x57c5ff.lerp;
      _0x14bb92 = _0x57c5ff.TransformBit;
      _0x1e4500 = _0x57c5ff.CCString;
      _0x57ac70 = _0x57c5ff.Material;
      _0x95c36 = _0x57c5ff.Gradient;
      _0x49e668 = _0x57c5ff.v4;
      _0x216f91 = _0x57c5ff.Texture2D;
      _0x23b688 = _0x57c5ff.clamp01;
      _0x2068f8 = _0x57c5ff.EffectAsset;
      _0x3a1aaf = _0x57c5ff.CCInteger;
      _0x857df2 = _0x57c5ff.ImageAsset;
      _0x539d82 = _0x57c5ff.ParticleSystem2D;
      _0x4f13a8 = _0x57c5ff.Vec2;
      _0x38e59e = _0x57c5ff.TweenSystem;
      _0x10fde8 = _0x57c5ff.ScrollView;
      _0x2e662a = _0x57c5ff.isValid;
      _0x5d485e = _0x57c5ff.CCClass;
      _0x21c9de = _0x57c5ff.js;
      _0x15bf26 = _0x57c5ff.settings;
      _0x31537f = _0x57c5ff.Settings;
      _0x463db8 = _0x57c5ff.VERSION;
      _0x555de5 = _0x57c5ff.find;
    }],
    'execute': function () {
      function _0x1a789f() {
        _0x1a789f = function () {
          return _0x13d5bc;
        };
        var _0x13d5bc = {};
        var _0x250ea1 = Object.prototype;
        var _0x2463bb = _0x250ea1.hasOwnProperty;
        var _0x1a2c26 = 'function' == typeof Symbol ? Symbol : {};
        var _0x4eceb3 = _0x1a2c26.iterator || '@@iterator';
        var _0x125048 = _0x1a2c26.asyncIterator || "@@asyncIterator";
        var _0x131a1e = _0x1a2c26.toStringTag || "@@toStringTag";
        function _0x457f16(_0x38e9fa, _0x2a3d44, _0x75ae12) {
          Object.defineProperty(_0x38e9fa, _0x2a3d44, {
            'value': _0x75ae12,
            'enumerable': true,
            'configurable': true,
            'writable': true
          });
          return _0x38e9fa[_0x2a3d44];
        }
        try {
          _0x457f16({}, '');
        } catch (_0x40f1f9) {
          _0x457f16 = function (_0x292fa0, _0xbd3945, _0x57b05c) {
            return _0x292fa0[_0xbd3945] = _0x57b05c;
          };
        }
        function _0x33af52(_0x3290d0, _0x82bc3f, _0x2b33dd, _0x5a206d) {
          var _0x54fe28 = _0x82bc3f && _0x82bc3f.prototype instanceof _0x19405e ? _0x82bc3f : _0x19405e;
          var _0x4ae77d = Object.create(_0x54fe28.prototype);
          var _0xc8b682 = new _0x86c33(_0x5a206d || []);
          _0x4ae77d._invoke = function (_0x4fe635, _0x5cbb91, _0x537f94) {
            var _0xfa5075 = "suspendedStart";
            return function (_0xdd49e, _0x53b35a) {
              if ("executing" === _0xfa5075) {
                throw new Error("Generator is already running");
              }
              if ("completed" === _0xfa5075) {
                if ("throw" === _0xdd49e) {
                  throw _0x53b35a;
                }
                return {
                  'value': undefined,
                  'done': true
                };
              }
              _0x537f94.method = _0xdd49e;
              for (_0x537f94.arg = _0x53b35a;;) {
                var _0x393804 = _0x537f94.delegate;
                if (_0x393804) {
                  var _0x28bd1d = _0x4e5fb9(_0x393804, _0x537f94);
                  if (_0x28bd1d) {
                    if (_0x28bd1d === _0x1a2aa7) {
                      continue;
                    }
                    return _0x28bd1d;
                  }
                }
                if ("next" === _0x537f94.method) {
                  _0x537f94.sent = _0x537f94._sent = _0x537f94.arg;
                } else {
                  if ('throw' === _0x537f94.method) {
                    if ("suspendedStart" === _0xfa5075) {
                      _0xfa5075 = "completed";
                      throw _0x537f94.arg;
                    }
                    _0x537f94.dispatchException(_0x537f94.arg);
                  } else if ("return" === _0x537f94.method) {
                    _0x537f94.abrupt("return", _0x537f94.arg);
                  }
                }
                _0xfa5075 = "executing";
                var _0x2db351 = _0x60079d(_0x4fe635, _0x5cbb91, _0x537f94);
                if ("normal" === _0x2db351.type) {
                  _0xfa5075 = _0x537f94.done ? "completed" : 'suspendedYield';
                  if (_0x2db351.arg === _0x1a2aa7) {
                    continue;
                  }
                  return {
                    'value': _0x2db351.arg,
                    'done': _0x537f94.done
                  };
                }
                if ("throw" === _0x2db351.type) {
                  _0xfa5075 = "completed";
                  _0x537f94.method = "throw";
                  _0x537f94.arg = _0x2db351.arg;
                }
              }
            };
          }(_0x3290d0, _0x2b33dd, _0xc8b682);
          return _0x4ae77d;
        }
        function _0x60079d(_0x595d0f, _0x2c52a0, _0x3ef419) {
          try {
            return {
              'type': "normal",
              'arg': _0x595d0f.call(_0x2c52a0, _0x3ef419)
            };
          } catch (_0x5d41a4) {
            return {
              'type': "throw",
              'arg': _0x5d41a4
            };
          }
        }
        _0x13d5bc.wrap = _0x33af52;
        var _0x1a2aa7 = {};
        function _0x19405e() {}
        function _0x38e96e() {}
        function _0x46e90c() {}
        var _0x1a8223 = {};
        _0x457f16(_0x1a8223, _0x4eceb3, function () {
          return this;
        });
        var _0x27cf65 = Object.getPrototypeOf;
        var _0x3d72a9 = _0x27cf65 && _0x27cf65(_0x27cf65(_0x20e348([])));
        if (_0x3d72a9 && _0x3d72a9 !== _0x250ea1 && _0x2463bb.call(_0x3d72a9, _0x4eceb3)) {
          _0x1a8223 = _0x3d72a9;
        }
        var _0x6fc125 = _0x46e90c.prototype = _0x19405e.prototype = Object.create(_0x1a8223);
        function _0x2b8de0(_0x331f15) {
          ["next", "throw", 'return'].forEach(function (_0x483959) {
            _0x457f16(_0x331f15, _0x483959, function (_0x5d7054) {
              return this._invoke(_0x483959, _0x5d7054);
            });
          });
        }
        function _0x219da6(_0x2cbceb, _0x5a3ab0) {
          function _0x146765(_0x94d5ef, _0x53bbbd, _0x14f615, _0x49eb67) {
            var _0x1dfc7a = _0x60079d(_0x2cbceb[_0x94d5ef], _0x2cbceb, _0x53bbbd);
            if ('throw' !== _0x1dfc7a.type) {
              var _0x1414bf = _0x1dfc7a.arg;
              var _0x510c13 = _0x1414bf.value;
              return _0x510c13 && "object" == typeof _0x510c13 && _0x2463bb.call(_0x510c13, '__await') ? _0x5a3ab0.resolve(_0x510c13.__await).then(function (_0x1f1e33) {
                _0x146765("next", _0x1f1e33, _0x14f615, _0x49eb67);
              }, function (_0x4543b5) {
                _0x146765("throw", _0x4543b5, _0x14f615, _0x49eb67);
              }) : _0x5a3ab0.resolve(_0x510c13).then(function (_0x115915) {
                _0x1414bf.value = _0x115915;
                _0x14f615(_0x1414bf);
              }, function (_0x441e52) {
                return _0x146765("throw", _0x441e52, _0x14f615, _0x49eb67);
              });
            }
            _0x49eb67(_0x1dfc7a.arg);
          }
          var _0x46c782;
          this._invoke = function (_0x2db0de, _0x554ad7) {
            function _0x59a9c9() {
              return new _0x5a3ab0(function (_0x48746a, _0x18827b) {
                _0x146765(_0x2db0de, _0x554ad7, _0x48746a, _0x18827b);
              });
            }
            return _0x46c782 = _0x46c782 ? _0x46c782.then(_0x59a9c9, _0x59a9c9) : _0x59a9c9();
          };
        }
        function _0x4e5fb9(_0xfbb041, _0x382c78) {
          var _0xa50dba = _0xfbb041.iterator[_0x382c78.method];
          if (undefined === _0xa50dba) {
            _0x382c78.delegate = null;
            if ("throw" === _0x382c78.method) {
              if (_0xfbb041.iterator['return'] && (_0x382c78.method = "return", _0x382c78.arg = undefined, _0x4e5fb9(_0xfbb041, _0x382c78), 'throw' === _0x382c78.method)) {
                return _0x1a2aa7;
              }
              _0x382c78.method = "throw";
              _0x382c78.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return _0x1a2aa7;
          }
          var _0x16fa52 = _0x60079d(_0xa50dba, _0xfbb041.iterator, _0x382c78.arg);
          if ("throw" === _0x16fa52.type) {
            _0x382c78.method = "throw";
            _0x382c78.arg = _0x16fa52.arg;
            _0x382c78.delegate = null;
            return _0x1a2aa7;
          }
          var _0x35dfb0 = _0x16fa52.arg;
          return _0x35dfb0 ? _0x35dfb0.done ? (_0x382c78[_0xfbb041.resultName] = _0x35dfb0.value, _0x382c78.next = _0xfbb041.nextLoc, "return" !== _0x382c78.method && (_0x382c78.method = 'next', _0x382c78.arg = undefined), _0x382c78.delegate = null, _0x1a2aa7) : _0x35dfb0 : (_0x382c78.method = "throw", _0x382c78.arg = new TypeError("iterator result is not an object"), _0x382c78.delegate = null, _0x1a2aa7);
        }
        function _0x3b1568(_0x218dc6) {
          var _0x35a7b9 = {
            'tryLoc': _0x218dc6[0x0]
          };
          if (0x1 in _0x218dc6) {
            _0x35a7b9.catchLoc = _0x218dc6[0x1];
          }
          if (0x2 in _0x218dc6) {
            _0x35a7b9.finallyLoc = _0x218dc6[0x2];
            _0x35a7b9.afterLoc = _0x218dc6[0x3];
          }
          this.tryEntries.push(_0x35a7b9);
        }
        function _0x27b1ab(_0x180a70) {
          var _0x1ee8ed = _0x180a70.completion || {};
          _0x1ee8ed.type = "normal";
          delete _0x1ee8ed.arg;
          _0x180a70.completion = _0x1ee8ed;
        }
        function _0x86c33(_0x57a49d) {
          this.tryEntries = [{
            'tryLoc': 'root'
          }];
          _0x57a49d.forEach(_0x3b1568, this);
          this.reset(true);
        }
        function _0x20e348(_0x1cd75a) {
          if (_0x1cd75a) {
            var _0x483208 = _0x1cd75a[_0x4eceb3];
            if (_0x483208) {
              return _0x483208.call(_0x1cd75a);
            }
            if ("function" == typeof _0x1cd75a.next) {
              return _0x1cd75a;
            }
            if (!isNaN(_0x1cd75a.length)) {
              var _0x1a9f5d = -0x1;
              var _0x3adb41 = function _0x5b5336() {
                for (; ++_0x1a9f5d < _0x1cd75a.length;) {
                  if (_0x2463bb.call(_0x1cd75a, _0x1a9f5d)) {
                    _0x5b5336.value = _0x1cd75a[_0x1a9f5d];
                    _0x5b5336.done = false;
                    return _0x5b5336;
                  }
                }
                _0x5b5336.value = undefined;
                _0x5b5336.done = true;
                return _0x5b5336;
              };
              return _0x3adb41.next = _0x3adb41;
            }
          }
          return {
            'next': _0x2aea56
          };
        }
        function _0x2aea56() {
          return {
            'value': undefined,
            'done': true
          };
        }
        _0x38e96e.prototype = _0x46e90c;
        _0x457f16(_0x6fc125, 'constructor', _0x46e90c);
        _0x457f16(_0x46e90c, 'constructor', _0x38e96e);
        _0x38e96e.displayName = _0x457f16(_0x46e90c, _0x131a1e, "GeneratorFunction");
        _0x13d5bc.isGeneratorFunction = function (_0xc5f67c) {
          var _0x1063b9 = "function" == typeof _0xc5f67c && _0xc5f67c.constructor;
          return !!_0x1063b9 && (_0x1063b9 === _0x38e96e || "GeneratorFunction" === (_0x1063b9.displayName || _0x1063b9.name));
        };
        _0x13d5bc.mark = function (_0xcb5c2e) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(_0xcb5c2e, _0x46e90c);
          } else {
            _0xcb5c2e.__proto__ = _0x46e90c;
            _0x457f16(_0xcb5c2e, _0x131a1e, "GeneratorFunction");
          }
          _0xcb5c2e.prototype = Object.create(_0x6fc125);
          return _0xcb5c2e;
        };
        _0x13d5bc.awrap = function (_0x283e8a) {
          return {
            '__await': _0x283e8a
          };
        };
        _0x2b8de0(_0x219da6.prototype);
        _0x457f16(_0x219da6.prototype, _0x125048, function () {
          return this;
        });
        _0x13d5bc.AsyncIterator = _0x219da6;
        _0x13d5bc.async = function (_0x35e0a1, _0x535de7, _0x367e84, _0x3c7865, _0xeec0e9) {
          if (undefined === _0xeec0e9) {
            _0xeec0e9 = Promise;
          }
          var _0xc61ef0 = new _0x219da6(_0x33af52(_0x35e0a1, _0x535de7, _0x367e84, _0x3c7865), _0xeec0e9);
          return _0x13d5bc.isGeneratorFunction(_0x535de7) ? _0xc61ef0 : _0xc61ef0.next().then(function (_0x78f0e8) {
            return _0x78f0e8.done ? _0x78f0e8.value : _0xc61ef0.next();
          });
        };
        _0x2b8de0(_0x6fc125);
        _0x457f16(_0x6fc125, _0x131a1e, "Generator");
        _0x457f16(_0x6fc125, _0x4eceb3, function () {
          return this;
        });
        _0x457f16(_0x6fc125, 'toString', function () {
          return "[object Generator]";
        });
        _0x13d5bc.keys = function (_0x4d3228) {
          var _0x25c3c9 = [];
          for (var _0x13e006 in _0x4d3228) _0x25c3c9.push(_0x13e006);
          _0x25c3c9.reverse();
          return function _0x399f24() {
            for (; _0x25c3c9.length;) {
              var _0x514c99 = _0x25c3c9.pop();
              if (_0x514c99 in _0x4d3228) {
                _0x399f24.value = _0x514c99;
                _0x399f24.done = false;
                return _0x399f24;
              }
            }
            _0x399f24.done = true;
            return _0x399f24;
          };
        };
        _0x13d5bc.values = _0x20e348;
        _0x86c33.prototype = {
          'constructor': _0x86c33,
          'reset': function (_0x1b73d4) {
            this.prev = 0x0;
            this.next = 0x0;
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(_0x27b1ab);
            if (!_0x1b73d4) {
              for (var _0x3e6e24 in this) if ('t' === _0x3e6e24.charAt(0x0) && _0x2463bb.call(this, _0x3e6e24) && !isNaN(+_0x3e6e24.slice(0x1))) {
                this[_0x3e6e24] = undefined;
              }
            }
          },
          'stop': function () {
            this.done = true;
            var _0x1ee99b = this.tryEntries[0x0].completion;
            if ("throw" === _0x1ee99b.type) {
              throw _0x1ee99b.arg;
            }
            return this.rval;
          },
          'dispatchException': function (_0x18d2e9) {
            if (this.done) {
              throw _0x18d2e9;
            }
            var _0x39bc7f = this;
            function _0x3ab46f(_0x239da5, _0x5126fc) {
              _0x38a4d5.type = 'throw';
              _0x38a4d5.arg = _0x18d2e9;
              _0x39bc7f.next = _0x239da5;
              if (_0x5126fc) {
                _0x39bc7f.method = 'next';
                _0x39bc7f.arg = undefined;
              }
              return !!_0x5126fc;
            }
            for (var _0x28b4ea = this.tryEntries.length - 0x1; _0x28b4ea >= 0x0; --_0x28b4ea) {
              var _0x2330fc = this.tryEntries[_0x28b4ea];
              var _0x38a4d5 = _0x2330fc.completion;
              if ('root' === _0x2330fc.tryLoc) {
                return _0x3ab46f('end');
              }
              if (_0x2330fc.tryLoc <= this.prev) {
                var _0xfc3955 = _0x2463bb.call(_0x2330fc, "catchLoc");
                var _0x24a574 = _0x2463bb.call(_0x2330fc, "finallyLoc");
                if (_0xfc3955 && _0x24a574) {
                  if (this.prev < _0x2330fc.catchLoc) {
                    return _0x3ab46f(_0x2330fc.catchLoc, true);
                  }
                  if (this.prev < _0x2330fc.finallyLoc) {
                    return _0x3ab46f(_0x2330fc.finallyLoc);
                  }
                } else {
                  if (_0xfc3955) {
                    if (this.prev < _0x2330fc.catchLoc) {
                      return _0x3ab46f(_0x2330fc.catchLoc, true);
                    }
                  } else {
                    if (!_0x24a574) {
                      throw new Error("try statement without catch or finally");
                    }
                    if (this.prev < _0x2330fc.finallyLoc) {
                      return _0x3ab46f(_0x2330fc.finallyLoc);
                    }
                  }
                }
              }
            }
          },
          'abrupt': function (_0x2b4e9c, _0x76aca4) {
            for (var _0x2ae825 = this.tryEntries.length - 0x1; _0x2ae825 >= 0x0; --_0x2ae825) {
              var _0x1d6358 = this.tryEntries[_0x2ae825];
              if (_0x1d6358.tryLoc <= this.prev && _0x2463bb.call(_0x1d6358, "finallyLoc") && this.prev < _0x1d6358.finallyLoc) {
                var _0x5737f0 = _0x1d6358;
                break;
              }
            }
            if (_0x5737f0 && ('break' === _0x2b4e9c || 'continue' === _0x2b4e9c) && _0x5737f0.tryLoc <= _0x76aca4 && _0x76aca4 <= _0x5737f0.finallyLoc) {
              _0x5737f0 = null;
            }
            var _0x3bef17 = _0x5737f0 ? _0x5737f0.completion : {};
            _0x3bef17.type = _0x2b4e9c;
            _0x3bef17.arg = _0x76aca4;
            return _0x5737f0 ? (this.method = 'next', this.next = _0x5737f0.finallyLoc, _0x1a2aa7) : this.complete(_0x3bef17);
          },
          'complete': function (_0x4f32a4, _0xd9ae84) {
            if ("throw" === _0x4f32a4.type) {
              throw _0x4f32a4.arg;
            }
            if ("break" === _0x4f32a4.type || "continue" === _0x4f32a4.type) {
              this.next = _0x4f32a4.arg;
            } else if ("return" === _0x4f32a4.type) {
              this.rval = this.arg = _0x4f32a4.arg;
              this.method = "return";
              this.next = "end";
            } else if ('normal' === _0x4f32a4.type && _0xd9ae84) {
              this.next = _0xd9ae84;
            }
            return _0x1a2aa7;
          },
          'finish': function (_0x57a925) {
            for (var _0x380dd5 = this.tryEntries.length - 0x1; _0x380dd5 >= 0x0; --_0x380dd5) {
              var _0x3e0e9b = this.tryEntries[_0x380dd5];
              if (_0x3e0e9b.finallyLoc === _0x57a925) {
                this.complete(_0x3e0e9b.completion, _0x3e0e9b.afterLoc);
                _0x27b1ab(_0x3e0e9b);
                return _0x1a2aa7;
              }
            }
          },
          'catch': function (_0x202ee) {
            for (var _0x59e236 = this.tryEntries.length - 0x1; _0x59e236 >= 0x0; --_0x59e236) {
              var _0x492ad5 = this.tryEntries[_0x59e236];
              if (_0x492ad5.tryLoc === _0x202ee) {
                var _0x3418a2 = _0x492ad5.completion;
                if ("throw" === _0x3418a2.type) {
                  var _0x4f0556 = _0x3418a2.arg;
                  _0x27b1ab(_0x492ad5);
                }
                return _0x4f0556;
              }
            }
            throw new Error("illegal catch attempt");
          },
          'delegateYield': function (_0x5f598e, _0x24fdb7, _0x14c91a) {
            this.delegate = {
              'iterator': _0x20e348(_0x5f598e),
              'resultName': _0x24fdb7,
              'nextLoc': _0x14c91a
            };
            if ("next" === this.method) {
              this.arg = undefined;
            }
            return _0x1a2aa7;
          }
        };
        return _0x13d5bc;
      }
      function _0x5b750f(_0x52eba1, _0x140781, _0x15286a, _0x53c670, _0x58cade, _0x27d772, _0x46de7e) {
        try {
          var _0x55e755 = _0x52eba1[_0x27d772](_0x46de7e);
          var _0x36aa52 = _0x55e755.value;
        } catch (_0x9b584e) {
          return void _0x15286a(_0x9b584e);
        }
        if (_0x55e755.done) {
          _0x140781(_0x36aa52);
        } else {
          Promise.resolve(_0x36aa52).then(_0x53c670, _0x58cade);
        }
      }
      function _0x23d9d7(_0x5aceeb) {
        return function () {
          var _0x3ec720 = this;
          return new Promise(function (_0x528170, _0x23ae3a) {
            var _0x41428e = _0x5aceeb.apply(_0x3ec720, arguments);
            function _0x558544(_0x449d24) {
              _0x5b750f(_0x41428e, _0x528170, _0x23ae3a, _0x558544, _0x4b3876, "next", _0x449d24);
            }
            function _0x4b3876(_0x56d139) {
              _0x5b750f(_0x41428e, _0x528170, _0x23ae3a, _0x558544, _0x4b3876, "throw", _0x56d139);
            }
            _0x558544(undefined);
          });
        };
      }
      function _0x31e021(_0x3135e2, _0x5345bc) {
        for (var _0x20a820 = 0x0; _0x20a820 < _0x5345bc.length; _0x20a820++) {
          var _0x1d093c = _0x5345bc[_0x20a820];
          _0x1d093c.enumerable = _0x1d093c.enumerable || false;
          _0x1d093c.configurable = true;
          if ('value' in _0x1d093c) {
            _0x1d093c.writable = true;
          }
          Object.defineProperty(_0x3135e2, _0x1d093c.key, _0x1d093c);
        }
      }
      function _0x48eefc(_0x28fa1b, _0x5dcb3d, _0x5d6601) {
        if (_0x5dcb3d) {
          _0x31e021(_0x28fa1b.prototype, _0x5dcb3d);
        }
        if (_0x5d6601) {
          _0x31e021(_0x28fa1b, _0x5d6601);
        }
        Object.defineProperty(_0x28fa1b, "prototype", {
          'writable': false
        });
        return _0x28fa1b;
      }
      function _0x39e18e(_0xc728b, _0x53e683) {
        _0xc728b.prototype = Object.create(_0x53e683.prototype);
        _0xc728b.prototype.constructor = _0xc728b;
        _0x48570d(_0xc728b, _0x53e683);
      }
      function _0x48570d(_0x262098, _0x2a0f54) {
        return (_0x48570d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (_0x2d1968, _0x462a03) {
          _0x2d1968.__proto__ = _0x462a03;
          return _0x2d1968;
        })(_0x262098, _0x2a0f54);
      }
      function _0x10e60a(_0x5cd56f) {
        if (undefined === _0x5cd56f) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return _0x5cd56f;
      }
      function _0x367d5(_0x63410c, _0x24556b) {
        if (_0x63410c) {
          if ("string" == typeof _0x63410c) {
            return _0x289383(_0x63410c, _0x24556b);
          }
          var _0x540890 = Object.prototype.toString.call(_0x63410c).slice(0x8, -0x1);
          if ("Object" === _0x540890 && _0x63410c.constructor) {
            _0x540890 = _0x63410c.constructor.name;
          }
          return "Map" === _0x540890 || "Set" === _0x540890 ? Array.from(_0x63410c) : 'Arguments' === _0x540890 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x540890) ? _0x289383(_0x63410c, _0x24556b) : undefined;
        }
      }
      function _0x289383(_0x5e10f7, _0x11ff1a) {
        if (null == _0x11ff1a || _0x11ff1a > _0x5e10f7.length) {
          _0x11ff1a = _0x5e10f7.length;
        }
        var _0x1dbafd = 0x0;
        for (var _0xccb538 = new Array(_0x11ff1a); _0x1dbafd < _0x11ff1a; _0x1dbafd++) {
          _0xccb538[_0x1dbafd] = _0x5e10f7[_0x1dbafd];
        }
        return _0xccb538;
      }
      function _0x602232(_0x5b0b2f, _0xb78244) {
        var _0xed2789 = "undefined" != typeof Symbol && _0x5b0b2f[Symbol.iterator] || _0x5b0b2f["@@iterator"];
        if (_0xed2789) {
          return (_0xed2789 = _0xed2789.call(_0x5b0b2f)).next.bind(_0xed2789);
        }
        if (Array.isArray(_0x5b0b2f) || (_0xed2789 = _0x367d5(_0x5b0b2f)) || _0xb78244 && _0x5b0b2f && "number" == typeof _0x5b0b2f.length) {
          if (_0xed2789) {
            _0x5b0b2f = _0xed2789;
          }
          var _0x27a1da = 0x0;
          return function () {
            return _0x27a1da >= _0x5b0b2f.length ? {
              'done': true
            } : {
              'done': false,
              'value': _0x5b0b2f[_0x27a1da++]
            };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _0x40ccb3(_0x334db3, _0x2469fb, _0x274e12, _0x140a49) {
        if (_0x274e12) {
          Object.defineProperty(_0x334db3, _0x2469fb, {
            'enumerable': _0x274e12.enumerable,
            'configurable': _0x274e12.configurable,
            'writable': _0x274e12.writable,
            'value': _0x274e12.initializer ? _0x274e12.initializer.call(_0x140a49) : undefined
          });
        }
      }
      function _0x1c868d(_0x4752fe, _0x2bce17, _0x2664b5, _0x45f06a, _0x672078) {
        var _0x21c7c7 = {};
        Object.keys(_0x45f06a).forEach(function (_0x4f5328) {
          _0x21c7c7[_0x4f5328] = _0x45f06a[_0x4f5328];
        });
        _0x21c7c7.enumerable = !!_0x21c7c7.enumerable;
        _0x21c7c7.configurable = !!_0x21c7c7.configurable;
        if ("value" in _0x21c7c7 || _0x21c7c7.initializer) {
          _0x21c7c7.writable = true;
        }
        _0x21c7c7 = _0x2664b5.slice().reverse().reduce(function (_0x1ccbb3, _0x37aefc) {
          return _0x37aefc(_0x4752fe, _0x2bce17, _0x1ccbb3) || _0x1ccbb3;
        }, _0x21c7c7);
        if (_0x672078 && undefined !== _0x21c7c7.initializer) {
          _0x21c7c7.value = _0x21c7c7.initializer ? _0x21c7c7.initializer.call(_0x672078) : undefined;
          _0x21c7c7.initializer = undefined;
        }
        if (undefined === _0x21c7c7.initializer) {
          Object.defineProperty(_0x4752fe, _0x2bce17, _0x21c7c7);
          _0x21c7c7 = null;
        }
        return _0x21c7c7;
      }
      _0x289c18._RF.push({}, "db4337zK39CwpvA3Bh+gyjl", "index", undefined);
      if (!globalThis.Astarte) {
        globalThis.Astarte = {};
      }
      var _0x546bb1;
      var _0x491fe9;
      var _0x227275;
      var _0x2be50b;
      var _0xb1ea;
      var _0xd107;
      var _0x53a779;
      var _0x242381;
      var _0x319d19;
      var _0x53bf5d;
      var _0x4d33e3;
      var _0x224352;
      var _0x23708e;
      var _0x1fa52a;
      var _0x3d87de;
      var _0x21a59c;
      var _0x5f4527;
      var _0x2a89ed;
      var _0x358853;
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "4c480cU1LpMo4WqCcvtd0ph", "Tools", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "de32cbzFmBN4rL/N8DkMkAD", 'Define', undefined);
      (function (_0x20f3c7) {
        _0x20f3c7[_0x20f3c7.NORMAL = 0x0] = 'NORMAL';
        _0x20f3c7[_0x20f3c7.USING = 0x1] = "USING";
      })(_0x491fe9 || (_0x491fe9 = {}));
      (function (_0x15824b) {
        _0x15824b[_0x15824b.GAME_CLOSE = 0x3e8] = "GAME_CLOSE";
        _0x15824b[_0x15824b.LOGIN = 0x3e9] = "LOGIN";
        _0x15824b[_0x15824b.WAIT_RES = 0x3ea] = 'WAIT_RES';
        _0x15824b[_0x15824b.CHECK_UNSHOW = 0x3eb] = "CHECK_UNSHOW";
        _0x15824b[_0x15824b.CHECK_FREESPIN = 0x3ec] = 'CHECK_FREESPIN';
        _0x15824b[_0x15824b.IDLE = 0x3ed] = 'IDLE';
        _0x15824b[_0x15824b.SPIN_REQ = 0x3ee] = "SPIN_REQ";
        _0x15824b[_0x15824b.SPIN = 0x3ef] = "SPIN";
        _0x15824b[_0x15824b.COMMON_SHOW = 0x3f0] = "COMMON_SHOW";
        _0x15824b[_0x15824b.MHB_SHOW = 0x3f1] = 'MHB_SHOW';
        _0x15824b[_0x15824b.JP_SHOW = 0x3f2] = "JP_SHOW";
        _0x15824b[_0x15824b.CHECK_STATE = 0x3f3] = "CHECK_STATE";
        _0x15824b[_0x15824b.END = 0x3f4] = "END";
        _0x15824b[_0x15824b.FREESPIN_WAIT_RES = 0x3f5] = 'FREESPIN_WAIT_RES';
        _0x15824b[_0x15824b.TURBO = 0x3f6] = "TURBO";
        _0x15824b[_0x15824b.FIRST_IN_GAME = 0x3f7] = "FIRST_IN_GAME";
        _0x15824b[_0x15824b.CHECK_APP_REWARD = 0x3f8] = "CHECK_APP_REWARD";
        _0x15824b[_0x15824b.CHECK_BUFF = 0x3f9] = "CHECK_BUFF";
        _0x15824b[_0x15824b.ACTIVATE_BUFF = 0x3fa] = "ACTIVATE_BUFF";
        _0x15824b[_0x15824b.END_BUFF = 0x3fb] = "END_BUFF";
        _0x15824b[_0x15824b.GRAND_JP = 0x3fc] = "GRAND_JP";
      })(_0x227275 || (_0x227275 = {}));
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "813162EnmlPD6ZkP+n93pP2", "RoundController", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "1d5a8ODImpC9qtSki10xwQQ", "ExtraBetController", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, 'cd534oKcOFFap8T54HqFCAE', "FakeServer", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "3ec76bGz5NECbh3RNjc2SdI", 'TempoSetting', undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "6f779uo//FP8owPSb4jjuXE", "CommonEffect", undefined);
      (function (_0x227877) {
        var _0x3ec6f7 = function () {
          function _0x3da445() {}
          _0x3da445.PascalTriangleLine = function (_0x56b362) {
            var _0x23e392 = [0x1];
            for (var _0x28b9fb = 0x1; _0x28b9fb < _0x56b362; _0x28b9fb++) {
              _0x23e392[_0x28b9fb] = _0x23e392[_0x28b9fb - 0x1] * (_0x56b362 - _0x28b9fb) / _0x28b9fb;
            }
            return _0x23e392;
          };
          _0x3da445.RangedRandom = function (_0x4d476b, _0x46d01d) {
            return (_0x46d01d - _0x4d476b) * Math.random() + _0x4d476b;
          };
          _0x3da445.GetRandomRectPos = function (_0x418430, _0x5d23af, _0x53bfe8) {
            var _0x4cfcd6 = _0x19fa65(this.RangedRandom(-_0x5d23af.x, _0x5d23af.x) / 0x2 | 0x0, this.RangedRandom(-_0x5d23af.x, _0x5d23af.x) / 0x2 | 0x0).rotate(_0x53bfe8 * _0x3812fe.RAD);
            return _0x418430.add(_0x4cfcd6);
          };
          _0x3da445.GetRandomOvalPos = function (_0x3e5de6, _0xb9a2c3, _0x3cd57e) {
            var _0x44c745 = _0xb9a2c3.y / Math.max(0x1, _0xb9a2c3.x);
            var _0x67fc32 = Math.random() * _0xb9a2c3.x * 0.5;
            var _0x6421ae = Math.random() * Math.PI * 0x2;
            var _0x4fec79 = _0x19fa65(_0x67fc32 * Math.cos(_0x6421ae), _0x67fc32 * Math.sin(_0x6421ae) * _0x44c745).rotate(_0x3cd57e * _0x3812fe.RAD);
            return _0x3e5de6.add(_0x4fec79);
          };
          _0x3da445.ZoomAndFlip = function (_0x16b6be, _0xeae4b, _0xcbd50f, _0x5eee8e) {
            var _0x463398 = Math.sin(_0x5eee8e * Math.PI) * (_0xeae4b - _0x16b6be) + _0x16b6be;
            var _0x5cbd20 = Math.cos(_0x5eee8e * Math.PI * _0xcbd50f);
            return _0x19fa65(_0x463398 * _0x5cbd20, _0x463398);
          };
          return _0x3da445;
        }();
        _0x227877.ExtendsMath = _0x3ec6f7;
        var _0x5bef44 = function () {
          function _0x138e29(_0x20eea9) {
            this.pts = null;
            this.len = 0x0;
            this.ptl = null;
            this.bez = null;
            this.len = _0x20eea9.length;
            if (0x0 == this.len) {
              _0x20eea9.push(_0x243100(0x0, 0x0));
              _0x20eea9.push(_0x243100(0x0, 0x0));
            } else if (0x1 == this.len) {
              _0x20eea9.push(_0x243100(_0x20eea9[0x0].x, _0x20eea9[0x0].y));
            }
            this.pts = _0x20eea9;
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
                this.ptl = _0x3ec6f7.PascalTriangleLine(this.len);
                this.bez = this.BezierN;
            }
          }
          var _0x491c4b = _0x138e29.prototype;
          _0x491c4b.GetPosition = function (_0x1b8471) {
            return this.bez.apply(this, [_0x1b8471]);
          };
          _0x491c4b.Bezier2 = function (_0x38aee2) {
            var _0x1d9ffb = 0x1 - _0x38aee2;
            return _0x243100(_0x1d9ffb * this.pts[0x0].x + _0x38aee2 * this.pts[0x1].x, _0x1d9ffb * this.pts[0x0].y + _0x38aee2 * this.pts[0x1].y);
          };
          _0x491c4b.Bezier3 = function (_0x2d02a4) {
            var _0x102cc1 = 0x1 - _0x2d02a4;
            var _0x1967f0 = [_0x102cc1 * _0x102cc1, 0x2 * _0x102cc1 * _0x2d02a4, _0x2d02a4 * _0x2d02a4];
            return _0x243100(_0x1967f0[0x0] * this.pts[0x0].x + _0x1967f0[0x1] * this.pts[0x1].x + _0x1967f0[0x2] * this.pts[0x2].x, _0x1967f0[0x0] * this.pts[0x0].y + _0x1967f0[0x1] * this.pts[0x1].y + _0x1967f0[0x2] * this.pts[0x2].y);
          };
          _0x491c4b.Bezier4 = function (_0x20a6e2) {
            var _0x2e917b = 0x1 - _0x20a6e2;
            var _0x4ab3a6 = [_0x2e917b * _0x2e917b * _0x2e917b, 0x3 * _0x2e917b * _0x2e917b * _0x20a6e2, 0x3 * _0x2e917b * _0x20a6e2 * _0x20a6e2, _0x20a6e2 * _0x20a6e2 * _0x20a6e2];
            return _0x243100(_0x4ab3a6[0x0] * this.pts[0x0].x + _0x4ab3a6[0x1] * this.pts[0x1].x + _0x4ab3a6[0x2] * this.pts[0x2].x + _0x4ab3a6[0x3] * this.pts[0x3].x, _0x4ab3a6[0x0] * this.pts[0x0].y + _0x4ab3a6[0x1] * this.pts[0x1].y + _0x4ab3a6[0x2] * this.pts[0x2].y + _0x4ab3a6[0x3] * this.pts[0x3].y);
          };
          _0x491c4b.Bezier5 = function (_0x4401c2) {
            var _0x7bb3 = 0x1 - _0x4401c2;
            var _0x593347 = [_0x7bb3 * _0x7bb3 * _0x7bb3 * _0x7bb3, 0x4 * _0x7bb3 * _0x7bb3 * _0x7bb3 * _0x4401c2, 0x6 * _0x7bb3 * _0x7bb3 * _0x4401c2 * _0x4401c2, 0x4 * _0x7bb3 * _0x4401c2 * _0x4401c2 * _0x4401c2, _0x4401c2 * _0x4401c2 * _0x4401c2 * _0x4401c2];
            return _0x243100(_0x593347[0x0] * this.pts[0x0].x + _0x593347[0x1] * this.pts[0x1].x + _0x593347[0x2] * this.pts[0x2].x + _0x593347[0x3] * this.pts[0x3].x + _0x593347[0x4] * this.pts[0x4].x, _0x593347[0x0] * this.pts[0x0].y + _0x593347[0x1] * this.pts[0x1].y + _0x593347[0x2] * this.pts[0x2].y + _0x593347[0x3] * this.pts[0x3].y + _0x593347[0x4] * this.pts[0x4].y);
          };
          _0x491c4b.Bezier6 = function (_0x1a4a55) {
            var _0x1ea412 = 0x1 - _0x1a4a55;
            var _0x1efdb9 = [_0x1ea412 * _0x1ea412 * _0x1ea412 * _0x1ea412 * _0x1ea412, 0x5 * _0x1ea412 * _0x1ea412 * _0x1ea412 * _0x1ea412 * _0x1a4a55, 0xa * _0x1ea412 * _0x1ea412 * _0x1ea412 * _0x1a4a55 * _0x1a4a55, 0xa * _0x1ea412 * _0x1ea412 * _0x1a4a55 * _0x1a4a55 * _0x1a4a55, 0x5 * _0x1ea412 * _0x1a4a55 * _0x1a4a55 * _0x1a4a55 * _0x1a4a55, _0x1a4a55 * _0x1a4a55 * _0x1a4a55 * _0x1a4a55 * _0x1a4a55];
            return _0x243100(_0x1efdb9[0x0] * this.pts[0x0].x + _0x1efdb9[0x1] * this.pts[0x1].x + _0x1efdb9[0x2] * this.pts[0x2].x + _0x1efdb9[0x3] * this.pts[0x3].x + _0x1efdb9[0x4] * this.pts[0x4].x + _0x1efdb9[0x5] * this.pts[0x5].x, _0x1efdb9[0x0] * this.pts[0x0].y + _0x1efdb9[0x1] * this.pts[0x1].y + _0x1efdb9[0x2] * this.pts[0x2].y + _0x1efdb9[0x3] * this.pts[0x3].y + _0x1efdb9[0x4] * this.pts[0x4].y + _0x1efdb9[0x5] * this.pts[0x5].y);
          };
          _0x491c4b.BezierN = function (_0x244a77) {
            var _0xe84fb2 = 0x1 - _0x244a77;
            var _0x35f686 = _0x243100(0x0, 0x0);
            for (var _0x13a2b3 = 0x0; _0x13a2b3 < this.len; _0x13a2b3++) {
              var _0x3b7e5e = 0x1;
              for (var _0x43b1e1 = 0x0; _0x43b1e1 < this.len - _0x13a2b3 - 0x1; _0x43b1e1++) {
                _0x3b7e5e *= _0xe84fb2;
              }
              for (var _0x18418c = 0x0; _0x18418c < _0x13a2b3; _0x18418c++) {
                _0x3b7e5e *= _0x244a77;
              }
              _0x35f686.x += _0x3b7e5e * this.ptl[_0x13a2b3] * this.pts[_0x13a2b3].x;
              _0x35f686.y += _0x3b7e5e * this.ptl[_0x13a2b3] * this.pts[_0x13a2b3].y;
            }
            return _0x35f686;
          };
          return _0x138e29;
        }();
        _0x227877.Bezier = _0x5bef44;
      })(_0x53a779 || (_0x53a779 = {}));
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "391b6CLPVhBEqeFr1f7nxDE", "index", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "029f8d+LfhKK71ZfPimXJvO", 'BigWin', undefined);
      var _0x3441b4 = {
        'Big': {
          'Start': "BigWin_Start",
          'End': "BigWin_End"
        },
        'Mega': {
          'Start': "MegaWin_Start",
          'End': "MegaWin_End"
        },
        'Super': {
          'Start': "SuperWin_Start",
          'End': 'SuperWin_End'
        }
      };
      var _0x33763a = _0x6126fa.ccclass;
      var _0x26c7da = _0x6126fa.property;
      _0x242381 = _0x26c7da({
        'type': _0x1370ff.Skeleton,
        'tooltip': "spine"
      });
      _0x319d19 = _0x26c7da({
        'type': _0x1370ff.Skeleton,
        'tooltip': 'spine'
      });
      _0x53bf5d = _0x26c7da({
        'type': _0x1370ff.Skeleton,
        'tooltip': "spine"
      });
      _0x4d33e3 = _0x26c7da({
        'type': _0x1370ff.Skeleton,
        'tooltip': '遮罩'
      });
      _0x224352 = _0x26c7da({
        'type': _0x19ba3d,
        'tooltip': '贏分'
      });
      _0x358853 = function (_0x482bbe) {
        function _0x159f8b() {
          var _0x2f32fa;
          var _0x45b0c5 = arguments.length;
          var _0x3a875f = new Array(_0x45b0c5);
          for (var _0x5ce9b9 = 0x0; _0x5ce9b9 < _0x45b0c5; _0x5ce9b9++) {
            _0x3a875f[_0x5ce9b9] = arguments[_0x5ce9b9];
          }
          _0x40ccb3(_0x2f32fa = _0x482bbe.call.apply(_0x482bbe, [this].concat(_0x3a875f)) || this, "m_spine", _0x1fa52a, _0x10e60a(_0x2f32fa));
          _0x40ccb3(_0x2f32fa, "m_spine_Character", _0x3d87de, _0x10e60a(_0x2f32fa));
          _0x40ccb3(_0x2f32fa, "m_spine_Top", _0x21a59c, _0x10e60a(_0x2f32fa));
          _0x40ccb3(_0x2f32fa, "m_maskSpine", _0x5f4527, _0x10e60a(_0x2f32fa));
          _0x40ccb3(_0x2f32fa, 'm_winLabel', _0x2a89ed, _0x10e60a(_0x2f32fa));
          _0x2f32fa.m_isEnd = true;
          _0x2f32fa.m_isShowEnd = true;
          _0x2f32fa.m_isShowAward = false;
          _0x2f32fa.m_eventCb = null;
          _0x2f32fa.m_showValueCb = null;
          _0x2f32fa.m_lvl = 0x0;
          _0x2f32fa.m_cancelCb = null;
          _0x2f32fa.m_nowLvl = 0x0;
          _0x2f32fa.m_win = 0x0;
          _0x2f32fa.m_showWin = 0x0;
          _0x2f32fa.m_step = 0x0;
          return _0x2f32fa;
        }
        _0x39e18e(_0x159f8b, _0x482bbe);
        var _0x148f79 = _0x159f8b.prototype;
        _0x148f79.update = function (_0x12d555) {
          if (this.m_isShowAward) {
            this.m_showWin += this.m_step * _0x12d555;
            if (this.m_showWin >= this.m_win) {
              this.m_showWin = this.m_win;
              this.m_isShowAward = false;
            }
            this.m_winLabel.string = _0x546bb1.FormatNumberThousands(_0x546bb1.strip(this.m_showValueCb ? this.m_showValueCb(this.m_showWin) : this.m_showWin), _0x546bb1.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          }
        };
        _0x148f79.Init = function (_0x38b843, _0x59edc4) {
          this.m_eventCb = _0x38b843;
          this.m_showValueCb = _0x59edc4;
          if (this.m_maskSpine) {
            this.m_maskSpine.node.active = false;
          }
        };
        _0x148f79.Show = function (_0x4fb854, _0x5bdd8f) {
          if (_0x4fb854 > 0x0 && _0x5bdd8f > _0x159f8b.Level.NONE && _0x5bdd8f <= _0x159f8b.Level.SUPER) {
            this.m_isEnd = false;
            this.m_lvl = _0x5bdd8f;
            this.m_nowLvl = 0x0;
            this.m_win = _0x4fb854;
            this.m_showWin = 0x0;
            this.m_winLabel.string = '0';
            this.m_isShowEnd = false;
            var _0xcb0192 = 0x0;
            for (var _0x2f5c70 = _0x159f8b.Level.BIG; _0x2f5c70 <= this.m_lvl; _0x2f5c70++) {
              var _0xedc66a = '';
              var _0x3e000a = '';
              switch (_0x2f5c70) {
                case _0x159f8b.Level.BIG:
                  _0xedc66a = _0x3441b4.Big.Start;
                  _0x3e000a = _0x3441b4.Big.End;
                  break;
                case _0x159f8b.Level.MEGA:
                  _0xedc66a = _0x3441b4.Mega.Start;
                  _0x3e000a = _0x3441b4.Mega.End;
                  break;
                case _0x159f8b.Level.SUPER:
                  _0xedc66a = _0x3441b4.Super.Start;
                  _0x3e000a = _0x3441b4.Super.End;
              }
              if ('' !== _0xedc66a && '' !== _0x3e000a) {
                var _0x3e5f92 = this.m_spine.findAnimation(_0xedc66a);
                if (_0x3e5f92) {
                  _0xcb0192 += _0x3e5f92.duration;
                }
                this.m_spine_Character.findAnimation(_0xedc66a);
                this.m_spine_Top.findAnimation(_0xedc66a);
              }
            }
            this.m_step = _0x546bb1.divide(this.m_win, _0xcb0192 || 0x5);
            this.m_isShowAward = true;
            if (this.m_maskSpine) {
              this.m_maskSpine.node.active = true;
              this.PlayAnimation(this.m_maskSpine, 'BigWin_Start');
            }
            this.ShowNext();
          }
        };
        _0x148f79.Stop = function () {
          if (!this.m_isShowEnd) {
            if (this.m_cancelCb) {
              this.m_cancelCb();
            }
            this.ShowEnd();
          }
        };
        _0x148f79.SetSkin = function (_0x302e93) {
          this.m_spine.setSkin(_0x302e93);
          this.m_spine_Character.setSkin(_0x302e93);
          this.m_spine_Top.setSkin(_0x302e93);
        };
        _0x148f79.ShowNext = function () {
          var _0x58a3f1 = _0x23d9d7(_0x1a789f().mark(function _0x1d51aa() {
            var _0x491ef1;
            return _0x1a789f().wrap(function (_0x7e5757) {
              for (;;) {
                switch (_0x7e5757.prev = _0x7e5757.next) {
                  case 0x0:
                    if (this.m_nowLvl !== this.m_lvl) {
                      _0x7e5757.next = 0x4;
                      break;
                    }
                    this.ShowEnd();
                    _0x7e5757.next = 0x1c;
                    break;
                  case 0x4:
                    this.m_nowLvl++;
                    _0x491ef1 = false;
                    _0x7e5757.t0 = this.m_nowLvl;
                    _0x7e5757.next = _0x7e5757.t0 === _0x159f8b.Level.BIG ? 0x9 : _0x7e5757.t0 === _0x159f8b.Level.MEGA ? 0xf : _0x7e5757.t0 === _0x159f8b.Level.SUPER ? 0x15 : 0x1b;
                    break;
                  case 0x9:
                    this.PlayAnimation(this.m_spine_Character, _0x3441b4.Big.Start);
                    this.PlayAnimation(this.m_spine_Top, _0x3441b4.Big.Start);
                    _0x7e5757.next = 0xd;
                    return this.PlayAnimation(this.m_spine, _0x3441b4.Big.Start);
                  case 0xd:
                    _0x491ef1 = _0x7e5757.sent;
                    return _0x7e5757.abrupt("break", 0x1b);
                  case 0xf:
                    this.PlayAnimation(this.m_spine_Character, _0x3441b4.Mega.Start);
                    this.PlayAnimation(this.m_spine_Top, _0x3441b4.Mega.Start);
                    _0x7e5757.next = 0x13;
                    return this.PlayAnimation(this.m_spine, _0x3441b4.Mega.Start);
                  case 0x13:
                    _0x491ef1 = _0x7e5757.sent;
                    return _0x7e5757.abrupt('break', 0x1b);
                  case 0x15:
                    this.PlayAnimation(this.m_spine_Character, _0x3441b4.Super.Start);
                    this.PlayAnimation(this.m_spine_Top, _0x3441b4.Super.Start);
                    _0x7e5757.next = 0x19;
                    return this.PlayAnimation(this.m_spine, _0x3441b4.Super.Start);
                  case 0x19:
                    _0x491ef1 = _0x7e5757.sent;
                    return _0x7e5757.abrupt("break", 0x1b);
                  case 0x1b:
                    if (!_0x491ef1) {
                      this.ShowNext();
                    }
                  case 0x1c:
                  case "end":
                    return _0x7e5757.stop();
                }
              }
            }, _0x1d51aa, this);
          }));
          return function () {
            return _0x58a3f1.apply(this, arguments);
          };
        }();
        _0x148f79.ShowEnd = function () {
          var _0x3d40a1 = _0x23d9d7(_0x1a789f().mark(function _0x2f2cef() {
            return _0x1a789f().wrap(function (_0x1a24f3) {
              for (;;) {
                switch (_0x1a24f3.prev = _0x1a24f3.next) {
                  case 0x0:
                    this.m_isShowEnd = true;
                    this.m_isShowAward = false;
                    this.m_winLabel.string = _0x546bb1.FormatNumberThousands(_0x546bb1.strip(this.m_showValueCb ? this.m_showValueCb(this.m_win) : this.m_win), _0x546bb1.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
                    if (this.m_maskSpine) {
                      this.PlayAnimation(this.m_maskSpine, "BigWin_End");
                    }
                    _0x1a24f3.t0 = this.m_lvl;
                    _0x1a24f3.next = _0x1a24f3.t0 === _0x159f8b.Level.BIG ? 0x7 : _0x1a24f3.t0 === _0x159f8b.Level.MEGA ? 0xc : _0x1a24f3.t0 === _0x159f8b.Level.SUPER ? 0x11 : 0x16;
                    break;
                  case 0x7:
                    this.PlayAnimation(this.m_spine_Character, _0x3441b4.Big.End);
                    this.PlayAnimation(this.m_spine_Top, _0x3441b4.Big.End);
                    _0x1a24f3.next = 0xb;
                    return this.PlayAnimation(this.m_spine, _0x3441b4.Big.End);
                  case 0xb:
                    return _0x1a24f3.abrupt('break', 0x16);
                  case 0xc:
                    this.PlayAnimation(this.m_spine_Character, _0x3441b4.Mega.End);
                    this.PlayAnimation(this.m_spine_Top, _0x3441b4.Mega.End);
                    _0x1a24f3.next = 0x10;
                    return this.PlayAnimation(this.m_spine, _0x3441b4.Mega.End);
                  case 0x10:
                    return _0x1a24f3.abrupt('break', 0x16);
                  case 0x11:
                    this.PlayAnimation(this.m_spine_Character, _0x3441b4.Super.End);
                    this.PlayAnimation(this.m_spine_Top, _0x3441b4.Super.End);
                    _0x1a24f3.next = 0x15;
                    return this.PlayAnimation(this.m_spine, _0x3441b4.Super.End);
                  case 0x15:
                    return _0x1a24f3.abrupt("break", 0x16);
                  case 0x16:
                    if (this.m_maskSpine) {
                      this.m_maskSpine.node.active = false;
                    }
                    this.m_isEnd = true;
                  case 0x18:
                  case "end":
                    return _0x1a24f3.stop();
                }
              }
            }, _0x2f2cef, this);
          }));
          return function () {
            return _0x3d40a1.apply(this, arguments);
          };
        }();
        _0x148f79.PlayAnimation = function (_0x18d3cd, _0x134386, _0x92c228, _0x514e72) {
          var _0x2b8508 = this;
          if (undefined === _0x92c228) {
            _0x92c228 = false;
          }
          if (undefined === _0x514e72) {
            _0x514e72 = 0x0;
          }
          return new Promise(function (_0x477b70) {
            var _0x45428f = false;
            _0x2b8508.m_cancelCb = function () {
              _0x477b70(_0x45428f = true);
            };
            _0x18d3cd.clearTrack(_0x514e72);
            _0x18d3cd.setToSetupPose();
            var _0x3d25a7 = _0x18d3cd.setAnimation(_0x514e72, _0x134386, _0x92c228);
            var _0x523c70 = function () {
              _0x2b8508.m_cancelCb = null;
              _0x477b70(_0x45428f);
            };
            if (_0x3d25a7) {
              _0x18d3cd.setTrackEventListener(_0x3d25a7, function (_0x358c77, _0x5d9eaa) {
                var _0x3236ec = _0x5d9eaa.data.name;
                var _0x54c6ba = _0x5d9eaa.stringValue;
                if (_0x2b8508.m_eventCb) {
                  _0x2b8508.m_eventCb(_0x3236ec, _0x54c6ba, _0x134386);
                }
              });
              _0x18d3cd.setTrackCompleteListener(_0x3d25a7, function () {
                _0x18d3cd.setTrackCompleteListener(_0x3d25a7, function () {});
                _0x523c70();
              });
            } else {
              _0x18d3cd.setCompleteListener(function () {
                _0x18d3cd.setCompleteListener(null);
                _0x523c70();
              });
            }
          });
        };
        _0x48eefc(_0x159f8b, [{
          'key': 'IsEnd',
          'get': function () {
            return this.m_isEnd;
          },
          'set': function (_0x5cd45b) {
            this.m_isEnd = _0x5cd45b;
          }
        }]);
        return _0x159f8b;
      }(_0x2d51ac);
      _0x358853.Level = {
        'NONE': 0x0,
        'BIG': 0x1,
        'MEGA': 0x2,
        'SUPER': 0x3
      };
      _0x1fa52a = _0x1c868d(_0x358853.prototype, "m_spine", [_0x242381], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3d87de = _0x1c868d(_0x358853.prototype, "m_spine_Character", [_0x319d19], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x21a59c = _0x1c868d(_0x358853.prototype, 'm_spine_Top', [_0x53bf5d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5f4527 = _0x1c868d(_0x358853.prototype, "m_maskSpine", [_0x4d33e3], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2a89ed = _0x1c868d(_0x358853.prototype, "m_winLabel", [_0x224352], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0xd5aced = _0x33763a(_0x23708e = _0x358853) || _0x23708e;
      var _0x462cc6;
      var _0x3546e6;
      var _0x5ab073;
      var _0x4d4b66;
      var _0x36b0b7;
      var _0x423a79;
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "630b2v0DCNEy41H/ZZz7fRH", "Game_Define", undefined);
      (function (_0x163da4) {
        _0x163da4[_0x163da4.WAIT_READY = 0x0] = "WAIT_READY";
        _0x163da4[_0x163da4.FEATURE_SHOW = 0x1] = "FEATURE_SHOW";
        _0x163da4[_0x163da4.UNSHOW_PREPARE = 0x2] = "UNSHOW_PREPARE";
        _0x163da4[_0x163da4.PLATE_SHOW = 0x3] = "PLATE_SHOW";
        _0x163da4[_0x163da4.IDLE = 0x4] = "IDLE";
        _0x163da4[_0x163da4.SPIN = 0x5] = "SPIN";
        _0x163da4[_0x163da4.ENTER_RESPIN = 0x6] = "ENTER_RESPIN";
        _0x163da4[_0x163da4.RESPIN = 0x7] = "RESPIN";
        _0x163da4[_0x163da4.AWARD = 0x8] = "AWARD";
        _0x163da4[_0x163da4.ROUND_SHOW_END = 0x9] = "ROUND_SHOW_END";
        _0x163da4[_0x163da4.ROUND_END = 0xa] = 'ROUND_END';
        _0x163da4[_0x163da4.JP_ENTER_RESPIN = 0xb] = "JP_ENTER_RESPIN";
        _0x163da4[_0x163da4.JP_RESPIN = 0xc] = 'JP_RESPIN';
        _0x163da4[_0x163da4.JP_AWARD = 0xd] = 'JP_AWARD';
      })(_0x462cc6 || (_0x462cc6 = {}));
      (function (_0x39db78) {
        _0x39db78[_0x39db78.Symbol_00 = 0x0] = "Symbol_00";
        _0x39db78[_0x39db78.Symbol_01 = 0x1] = "Symbol_01";
        _0x39db78[_0x39db78.Symbol_02 = 0x2] = 'Symbol_02';
        _0x39db78[_0x39db78.Symbol_03 = 0x3] = "Symbol_03";
        _0x39db78[_0x39db78.Symbol_04 = 0x4] = "Symbol_04";
        _0x39db78[_0x39db78.Symbol_05 = 0x5] = "Symbol_05";
        _0x39db78[_0x39db78.Symbol_06 = 0x6] = "Symbol_06";
        _0x39db78[_0x39db78.Symbol_Wild = 0x7] = "Symbol_Wild";
        _0x39db78[_0x39db78.Symbol_JackPot = 0x8] = "Symbol_JackPot";
      })(_0x3546e6 || (_0x3546e6 = {}));
      (function (_0x37fb27) {
        _0x37fb27[_0x37fb27.First = 0x0] = "First";
        _0x37fb27[_0x37fb27.Second = 0x1] = "Second";
        _0x37fb27[_0x37fb27.Third = 0x2] = 'Third';
        _0x37fb27[_0x37fb27.Special = 0x3] = "Special";
      })(_0x5ab073 || (_0x5ab073 = {}));
      (function (_0x447e1b) {
        _0x447e1b[_0x447e1b.First = 0x0] = "First";
        _0x447e1b[_0x447e1b.Second = 0x1] = "Second";
        _0x447e1b[_0x447e1b.Third = 0x2] = "Third";
        _0x447e1b[_0x447e1b.Fourth = 0x3] = 'Fourth';
        _0x447e1b[_0x447e1b.Fifth = 0x4] = "Fifth";
      })(_0x4d4b66 || (_0x4d4b66 = {}));
      (function (_0x354228) {
        _0x354228[_0x354228.None = 0x0] = "None";
        _0x354228[_0x354228.First = 0x8] = 'First';
        _0x354228[_0x354228.Second = 0x9] = "Second";
        _0x354228[_0x354228.Third = 0xa] = 'Third';
        _0x354228[_0x354228.All = 0xb] = "All";
      })(_0x36b0b7 || (_0x36b0b7 = {}));
      (function (_0x1e110b) {
        _0x1e110b[_0x1e110b.GRAND = 0x2] = 'GRAND';
        _0x1e110b[_0x1e110b.JOKER = 0x3] = "JOKER";
        _0x1e110b[_0x1e110b.MAJOR = 0x1] = "MAJOR";
        _0x1e110b[_0x1e110b.MINOR = 0x0] = "MINOR";
      })(_0x423a79 || (_0x423a79 = {}));
      var _0x3f22b0 = function () {};
      var _0x5a126f;
      var _0x3fb50b;
      var _0x404313;
      var _0x37a9e6;
      var _0x2f580f;
      var _0x25e79b;
      var _0x702821;
      var _0x2620f7;
      _0x3f22b0.IsSpined = false;
      _0x3f22b0.MultiRate = [0x1, 1.5];
      _0x3f22b0.Ver = '97';
      _0x3f22b0.BgAudioId = -0x1;
      _0x3f22b0.SPICY_LEVEL = 0x3;
      _0x3f22b0.Column = _0x1389c6(_0x5ab073);
      _0x3f22b0.Symbol = _0x1389c6(_0x3546e6);
      _0x3f22b0.BetIndex = _0x1389c6(_0x4d4b66);
      _0x3f22b0.RespinType = _0x1389c6(_0x36b0b7);
      _0x3f22b0.GameState = _0x1389c6(_0x462cc6);
      _0x3f22b0.GameJpType = _0x1389c6(_0x423a79);
      _0x3f22b0.SymbolToString = ['', '', '', '0', '00', '1', '5', '10', ''];
      _0x3f22b0.LOCK_COLUMN_LIMIT = [0x2, 0x4, 0x4, 0x4, 0x4];
      _0x3f22b0.COL = 0x3;
      _0x3f22b0.ROW = 0x3;
      _0x3f22b0.MaxSymbolEachColumn = 0x3;
      _0x3f22b0.MinSymbolEachColumn = 0x3;
      _0x3f22b0.BIGWIN_LV = 0x1;
      _0x3f22b0.MEGAWIN_LV = 0x2;
      _0x3f22b0.SUPERWIN_LV = 0x3;
      _0x3f22b0.AWARD_MUST_SOUND_TIME = 0.55;
      _0x3f22b0.BETX5_ANGEL = 0x96;
      _0x3f22b0.AWARD_RUNNING_TIME_START = 0x5;
      _0x3f22b0.AWARD_RUNNING_TIME_BIG_END = 1.75;
      _0x3f22b0.AWARD_RUNNING_TIME_MEGA_END = 1.83;
      _0x3f22b0.AWARD_RUNNING_TIME_SUPER_END = 0x3;
      _0x3f22b0.NORMAL_WINNING_SOUND_TIME = 1.4;
      _0x3f22b0.BIG_WIN_RATE = 0x5;
      _0x3f22b0.MEGA_WIN_RATE = 0xf;
      _0x3f22b0.SUPER_WIN_RATE = 0x1e;
      _0x3f22b0.SMALLWIN01 = 0x3;
      _0x3f22b0.SMALLWIN02 = 0x5;
      _0x3f22b0.SKIP_RESPIN_AWARD_DELATE_TIME = 0.3;
      _0x3f22b0.LINE_AWARD_TO_BIG_INSERT_TIME = [0.2, 0.2, 0.8, 0.8, 0x1, 0.1, 0.1, 0.1];
      _0x3f22b0.ITEM_PATH = "/MC/common/Item_card";
      _0x3f22b0.SPIN_ACK_TYPE = {
        'AT_SUCCESS': 0x0,
        'AT_MONEY_NOT_ENOUGH': 0x1,
        'AT_MONEY_ABNORMAL': 0x2,
        'API_BETONCE_FAIL': 0x7d3
      };
      _0x3f22b0.AWARD_TYPE = {
        'AWARD_TYPE_NON': 0x0,
        'AWARD_TYPE_LINE': 0x1,
        'AWARD_TYPE_ALL_PLATE': 0x2,
        'AWARD_TYPE_MAX': 0x7fff
      };
      _0x3f22b0.USE_ITEM_REASON = {
        'NORMAL': 0x0,
        'USING': 0x1
      };
      _0x3f22b0.ONE_OF_KIND_AWARD_LIMIT = 0x5;
      _0x3f22b0.EFFECT_ZINDEX = {
        'NORMAL': 0x0,
        'WILD': 0x32,
        'JOKER': 0x64
      };
      _0x3f22b0.BigMulti_NearWin = 0x5;
      _0x3f22b0.BigMulti_ReSpin = 0x3;
      _0x3f22b0.MissionReward = 0x0;
      _0x3f22b0.JpType = 0x0;
      _0x3f22b0.JpWin = 0x0;
      _0x3f22b0.FullJpWin = 0x0;
      _0x3f22b0.FreeSpinRemain = 0x0;
      _0x3f22b0.FreeSpinAward = 0x0;
      _0x3f22b0.IsShowFreeSpinEnd = false;
      _0x3f22b0.IsReelFrameIdle = true;
      _0x3f22b0.IsJpStopOK = true;
      _0x3f22b0.CanLog = false;
      _0x3f22b0.CanLogChangeBet = false;
      _0x3f22b0.CanLogStopAuto = false;
      _0x3f22b0.IsExtraBuy = false;
      _0x3f22b0.IsInJpEnter = false;
      _0x3f22b0.JokerTurnRight = false;
      _0x3f22b0.EVENT_ID = {
        'EXTRA_BUY_NO_SPIN': 0x7d0,
        'EXTRA_BUY_NO_PLATE': 0x7d1,
        'EXTRA_BUY_YES': 0x7d2,
        'EXTRA_BUY_STOP_AUTOPLAY': 0x7d3,
        'EXTRA_BUY_DEC_BET': 0x7d4,
        'EXTRA_BUY_INC_BET': 0x7d5,
        'EXTRA_BUY_NO_AUTOPLAY': 0x7d6,
        'AUTOPLAY_COUNT': 0x7d7
      };
      _0x3f22b0.EVENT_VALUE = {
        'NO_SPIN': "No Spin",
        'NO_PLATE': "No Plate",
        'YES': "Yes",
        'STOP_AUTOPLAY': "Stop AutoPlay",
        'DEC_BET': "Decrease Bet",
        'INC_BET': "Increase Bet",
        'NO_AUTOPLAY': "No AutoPlay"
      };
      _0x3f22b0.AudioFileRoot = "Sound/";
      _0x3f22b0.AudioFilePath = {
        'Mg_bgm': _0x3f22b0.AudioFileRoot + "Mg_bgm",
        'Bonus_bgm': _0x3f22b0.AudioFileRoot + "Bonus_bgm",
        'Play_Ready': _0x3f22b0.AudioFileRoot + "Play_Ready",
        'NearWin': _0x3f22b0.AudioFileRoot + "NearWin",
        'MG_Respin': _0x3f22b0.AudioFileRoot + 'MG_Respin',
        'Respin_Declare': _0x3f22b0.AudioFileRoot + "Respin_Declare",
        'JP_Compliment': _0x3f22b0.AudioFileRoot + "JP_Compliment",
        'JP_Declare': _0x3f22b0.AudioFileRoot + "JP_Declare",
        'JP_Extra_Buy': _0x3f22b0.AudioFileRoot + "JP_Extra_Buy",
        'JP_NearWin': _0x3f22b0.AudioFileRoot + "JP_NearWin",
        'JP_Win_Multiply': _0x3f22b0.AudioFileRoot + 'JP_Win_Multiply',
        'JP_Win01': _0x3f22b0.AudioFileRoot + "JP_Win01",
        'JP_Win02': _0x3f22b0.AudioFileRoot + "JP_Win02",
        'JP_Show_Win': _0x3f22b0.AudioFileRoot + "JP_Show_Win",
        'ExtraBuy_Show': _0x3f22b0.AudioFileRoot + "ExtraBuy_Show",
        'ExtraBuy_Clock': _0x3f22b0.AudioFileRoot + "ExtraBuy_Clock",
        'Reel_Spin': _0x3f22b0.AudioFileRoot + 'Reel_Spin',
        'Reel_Stop': _0x3f22b0.AudioFileRoot + "Reel_Stop",
        'JP_Reel': _0x3f22b0.AudioFileRoot + "JP_Reel",
        'Small_Win01': _0x3f22b0.AudioFileRoot + "Small_Win01",
        'Small_Win02': _0x3f22b0.AudioFileRoot + 'Small_Win02',
        'Small_Win03': _0x3f22b0.AudioFileRoot + "Small_Win03",
        'Small_Win08': _0x3f22b0.AudioFileRoot + "Small_Win08",
        'Small_Win_Multiply': _0x3f22b0.AudioFileRoot + "Small_Win_Multiply",
        'Fly': _0x3f22b0.AudioFileRoot + 'Fly',
        'Big_win': _0x3f22b0.AudioFileRoot + "Big_win",
        'Big_Win_End': _0x3f22b0.AudioFileRoot + 'Big_Win_End',
        'Big_Win_Change': _0x3f22b0.AudioFileRoot + 'Big_Win_Change',
        'Big_Win_Change_2': _0x3f22b0.AudioFileRoot + "Big_Win_Change_2",
        'Extra_Bet_Show': _0x3f22b0.AudioFileRoot + "Extra_Bet_Show",
        'Extra_Bet_On': _0x3f22b0.AudioFileRoot + 'Extra_Bet_On',
        'Extra_Bet_Light': _0x3f22b0.AudioFileRoot + "Extra_Bet_Light",
        'Scatter_Show1': _0x3f22b0.AudioFileRoot + "Scatter_Show1",
        'Scatter_Show2': _0x3f22b0.AudioFileRoot + "Scatter_Show2",
        'Scatter_Show3': _0x3f22b0.AudioFileRoot + 'Scatter_Show3'
      };
      _0x3f22b0.AudioClips = {
        'Mg_bgm': null,
        'Bonus_bgm': null,
        'Play_Ready': null,
        'NearWin': null,
        'MG_Respin': null,
        'Respin_Declare': null,
        'JP_Compliment': null,
        'JP_Declare': null,
        'JP_Extra_Buy': null,
        'JP_NearWin': null,
        'JP_Win_Multiply': null,
        'JP_Win01': null,
        'JP_Win02': null,
        'JP_Show_Win': null,
        'ExtraBuy_Show': null,
        'ExtraBuy_Clock': null,
        'Reel_Spin': null,
        'Reel_Stop': null,
        'JP_Reel': null,
        'Small_Win01': null,
        'Small_Win02': null,
        'Small_Win03': null,
        'Small_Win08': null,
        'Small_Win_Multiply': null,
        'Fly': null,
        'Big_win': null,
        'Big_Win_End': null,
        'Big_Win_Change': null,
        'Big_Win_Change_2': null,
        'Extra_Bet_Show': null,
        'Extra_Bet_On': null,
        'Extra_Bet_Light': null,
        'Scatter_Show1': null,
        'Scatter_Show2': null,
        'Scatter_Show3': null
      };
      _0x3f22b0.SpineAnimNames = {
        'Respin_L': "Respin_L",
        'Respin_S': "Respin_S",
        'MG_Idle': "MG_Idle",
        'MG_Idle_Win1': "MG_Idle_Win1",
        'MG_Idle_Win2': "MG_Idle_Win2",
        'MG_Idle_Win3': "MG_Idle_Win3",
        'Setup': 'Setup',
        'BG_Win1': "BG_Win1",
        'BG_Win2': "BG_Win2",
        'BG_Win3': "BG_Win3",
        'L': 'L',
        'S': 'S',
        'Start': "Start",
        'Start2': "Start2",
        'Loop': "Loop",
        'Loop2': "Loop2",
        'Loop3': "Loop3",
        'Loop_L': "Loop_L",
        'Loop_S': 'Loop_S',
        'End': 'End',
        'BigWin_Loop': "BigWin_Loop",
        'Line1': "Line1",
        'Line2': "Line2",
        'Line3': "Line3",
        'Line4': "Line4",
        'Line5': "Line5",
        'Win': 'Win',
        'Stop': "Stop",
        'Trans_Spawn1': 'Trans_Spawn1',
        'Trans_Spawn2': "Trans_Spawn2",
        'BigWin_End': "BigWin_End",
        'BigWin_Start': "BigWin_Start",
        'FG_Compliment': "FG_Compliment",
        'GameIntro_L': "GameIntro_L",
        'GameIntro_S': "GameIntro_S",
        'Idle': "Idle",
        'MegaWin_End': "MegaWin_End",
        'MegaWin_Start': 'MegaWin_Start',
        'SuperWin_End': "SuperWin_End",
        'SuperWin_Start': "SuperWin_Start",
        'Trans': "Trans",
        'Character': {
          'Idle': "Idle",
          'FG_Compliment': "FG_Compliment",
          'FG_Compliment2': "FG_Compliment2"
        },
        'Background': {
          'GameIntro_L': "GameIntro_L",
          'GameIntro_S': "GameIntro_S",
          'Loop_L': "Loop_L",
          'Loop_S': 'Loop_S',
          'Respin_L': "Respin_L",
          'Respin_S': "Respin_S"
        },
        'NearWin': {
          'JP_NearWin': "JP_NearWin",
          'Respin_Buy_Loop': "Respin_Buy_Loop",
          'Respin_Buy_Start': 'Respin_Buy_Start',
          'Respin_NearWin': 'Respin_NearWin',
          'Respin_NearWin2': "Respin_NearWin2"
        },
        'Multiply_Win': "Multiply_Win",
        'Win_JP': "Win_JP",
        'JP_Grand_Loop': "JP_Grand_Loop",
        'Hit': "Hit",
        'Symbol_08': {
          'Left_Stare_Loop1': 'Left_Stare_Loop1',
          'Left_Stare_Loop2': "Left_Stare_Loop2",
          'Right_Stare_Loop1': 'Right_Stare_Loop1',
          'Right_Stare_Loop2': "Right_Stare_Loop2",
          'Right_Stare_Start': 'Right_Stare_Start',
          'Right_Turn_Left': "Right_Turn_Left",
          'Stop': 'Stop',
          'Win': "Win"
        },
        'JP_Bottom': {
          'Align': "Align",
          'JP_Grand_Loop': "JP_Grand_Loop",
          'JP_Grand_Start': "JP_Grand_Start",
          'JP_Joker_Loop': 'JP_Joker_Loop',
          'JP_Joker_Start': "JP_Joker_Start",
          'JP_Major_Loop': "JP_Major_Loop",
          'JP_Major_Start': "JP_Major_Start",
          'JP_Minor_Loop': "JP_Minor_Loop",
          'JP_Minor_Start': 'JP_Minor_Start'
        },
        'JP_JpType_Frame': {
          'GRAND_Loop': "GRAND_Loop",
          'GRAND_Start': "GRAND_Start",
          'GRAND_Align': "GRAND_Align",
          'JOKER_Loop': 'JOKER_Loop',
          'JOKER_Start': 'JOKER_Start',
          'JOKER_Align': "JOKER_Align",
          'MAJOR_Loop': 'MAJOR_Loop',
          'MAJOR_Start': "MAJOR_Start",
          'MAJOR_Align': "MAJOR_Align",
          'MINOR_Loop': "MINOR_Loop",
          'MINOR_Start': 'MINOR_Start',
          'MINOR_Align': "MINOR_Align"
        },
        'JP_Top': {
          'Align': "Align",
          'Align2': "Align2",
          'Hit': "Hit",
          'Loop': "Loop",
          'Start': "Start"
        },
        'FX_ReelFrame': {
          'Idle': "Idle",
          'JP': 'JP',
          'Respin': "Respin",
          'Win': "Win"
        }
      };
      _0x3f22b0.NearWinType = {
        'JP_NearWin': 0x0,
        'Respin_Buy_Loop': 0x1,
        'Respin_Buy_Start': 0x2,
        'Respin_NearWin': 0x3,
        'Respin_NearWin2': 0x4
      };
      _0x3f22b0.BackgrondType = {
        'GameIntro': 0x0,
        'Loop': 0x1,
        'Respin': 0x2
      };
      _0x3f22b0.JP_STAGE = {
        'BEFORE_BUY_RESPIN': 0x0,
        'BUY_RESPIN': 0x1,
        'NEARWIN': 0x2,
        'AWARD': 0x3,
        'STOP': 0x4,
        'TURN_LEFT': 0x5
      };
      _0x3f22b0.AnimDuration = {
        'RESPIN_NEARWIN_START': 0.1,
        'RESPIN_NEARWIN_END': 0.2,
        'JP_NEARWIN_START': 0.1,
        'JP_NEARWIN_END': 0.2,
        'RESPIN_BUY_LOOP_END': 0.2,
        'MULTIPLY_STOP': 0.37,
        'MULTIPLY_WIN': 1.88,
        'MULTIPLY_WIN_JP': 1.57,
        'MULTIPLY_WIN_SOUND': 1.45,
        'Respin_Declare': {
          'Start': 0x1,
          'Loop': 0.5,
          'End': 0.5
        },
        'Background': {
          'GameIntro': 6.483,
          'Loop': 0x6,
          'Respin': 2.5
        },
        'Symbol_08': {
          'Left_Stare_Loop1': 0x1,
          'Left_Stare_Loop2': 1.333,
          'Right_Stare_Loop1': 0x1,
          'Right_Stare_Loop2': 1.333,
          'Right_Stare_Start': 0.3,
          'Right_Turn_Left': 0.3,
          'Win': 2.5,
          'Stop': 0.417
        },
        'FX_ReelFrame': {
          'Idle': 0x2,
          'JP': 0.5,
          'Respin': 0.5,
          'Win': 0x1
        },
        'JP_Bottom': {
          'Start': 3.083,
          'Loop': 0x1
        },
        'JP_SHOW_WIN': 2.35,
        'JP_Top': {
          'Start': 3.083,
          'Loop': 0x1,
          'Hit': 1.667
        },
        'NearWin': {
          'JP_NearWin': 0x1,
          'Respin_Buy_Loop': 0x1,
          'Respin_Buy_Start': 0x1,
          'Respin_NearWin': 0x1
        },
        'JP_Declare': {
          'Start': 2.5,
          'Loop': 0x2,
          'End': 0.5
        },
        'JP_JpType_Frame': {
          'Start': 0x1,
          'Loop': 0x1
        },
        'JP_Compliment_Start': 7.167,
        'JP_Compliment_Start2': 2.333
      };
      _0x3f22b0.REEL_FRAME_TYPE = {
        'Idle': 0x0,
        'JP': 0x1,
        'Respin': 0x2,
        'Win': 0x3
      };
      _0x3f22b0.SkinNames = {
        'Grand': "Grand",
        'Joker': "Joker",
        'Major': 'Major',
        'Minor': "Minor",
        'GRAND': "GRAND",
        'JOKER': "JOKER",
        'MAJOR': "MAJOR",
        'MINOR': "MINOR"
      };
      _0x3f22b0.AckType = {
        'login': 0x0,
        'exchangeChips': 0x2,
        'info': 0xb,
        'spin': 0xc,
        'heartBeat': 0x62,
        'serverMsg': 0x63
      };
      _0x3f22b0.SERVER_RET_TYPE = {
        'SERVER_SUCCESS': 0x0,
        'SERVER_ERROR_SEATE': 0x31f,
        'SERVER_NOUSE': 0x383,
        'SERVER_MAINTAIN': 0x3e6,
        'SERVER_SHUTDOWN': 0x3e7,
        'SERVER_NEED_UID': 0x3e9,
        'SERVER_NEED_LOGIN': 0x3ea,
        'SERVER_TOKEN_ERROR': 0x3eb
      };
      _0x3f22b0.LOGIN_RESULT_TYPE = {
        'LOGIN_SUCCESS': 0x0,
        'LOGIN_FAIL': 0x1,
        'API_VERIFY_FAIL': 0x7d1,
        'API_LOGIN_REPEAT_FAIL': 0x7d2
      };
      _0x3f22b0.HEART_BEAT_STATE = {
        'NOTIFY': 0x61,
        'MAINTAIN': 0x62,
        'CLOSE': 0x63
      };
      _0x3f22b0.DelayType = {
        'Normal': 0x0,
        'Get': 0x1,
        'NotGet': 0x2
      };
      _0x3f22b0.TimeoutType = {
        'Ignore': 0x0,
        'Handle': 0x1
      };
      _0x3f22b0.StringKey = {
        'MC_FEATURES_LEFT': "FEATURE_LEFT",
        'MC_FEATURES_RIGHT': "FEATURE_RIGHT",
        'FREE_GAME_NAME_STRING': "FREE_GAME_NAME_STRING"
      };
      _0x3f22b0.ShowDisplayValue = null;
      _0x3f22b0.PrefabPath = {};
      _0x3f22b0.PrefabList = {};
      _0x3f22b0.INIT_PLATE = [[0x4, 0x4, 0x4], [0x6, 0x6, 0x6], [0x5, 0x5, 0x5]];
      _0x3f22b0.INIT_MULTI_PLATE = [0x5, 0xf, 0xa];
      _0x3f22b0.LAST_PLATE = [[-0x1, -0x1, -0x1], [-0x1, -0x1, -0x1], [-0x1, -0x1, -0x1]];
      _0x3f22b0.LAST_MULTI_PLATE = [-0x1, -0x1, -0x1];
      _0x3f22b0.LINE_DEFINE = [[[0x0, 0x1], [0x1, 0x1], [0x2, 0x1]], [[0x0, 0x0], [0x1, 0x0], [0x2, 0x0]], [[0x0, 0x2], [0x1, 0x2], [0x2, 0x2]], [[0x0, 0x0], [0x1, 0x1], [0x2, 0x2]], [[0x0, 0x2], [0x1, 0x1], [0x2, 0x0]]];
      _0x3f22b0.RESPIN_POSITIONX = [-0xd9, 0x0, 0xd9];
      _0x3f22b0.DELAYTIME = {
        'JP_BUY_TEXT_SHOW': 0x1,
        'FULLSCREENWIN': 0.8,
        'WIN': 1.5,
        'RUNNING_WIN': 0.4,
        'JP_RUN_LABEL': 0.5,
        'COMPLIMENT_RUN_WIN': 5.5,
        'WIN_LABEL_NUMBER_STEP': 0.02,
        'MARQUEE_IDLE': 0xa,
        'MARQUEES_SHOW': 0.5,
        'RESPIN_DECLARE': 3.2,
        'RESPIN': 0.2,
        'RESPIN_START': 0.2,
        'EXTRABET_FITST_SHOW_OPEN': 0.3,
        'EXTRABET_FITST_SHOW_CLOSE': 0x7,
        'STOP_BIGWIN': 0x2,
        'EXTRABET_CLOSE': 0.25,
        'EXTRABET_OPEN1': 0x1,
        'EXTRABET_OPEN2': 0.75,
        'EXTRABET_DECLARE_OPEN': 3.416,
        'EXTRABET_LOGO_OPEN': 0.2,
        'EXTRABET_LOGO_CLOSE': 0.2
      };
      _0x3f22b0.IDLE_ROTATE_SPEED = -0x3;
      _0x3f22b0.SpecialType = _0x1389c6({
        'Normal': 0x0,
        'Special': 0x1
      });
      _0x3f22b0.WIN_TOUCHABLE_TIME = 0.5;
      _0x3f22b0.LINE_WIN_POSITION_L = [[0x64, -0x6e], [0x64, 0x23], [0x64, 0xb9], [0x64, -0x6e], [0x64, 0x23], [0x64, 0x23]];
      _0x3f22b0.LINE_WIN_POSITION_S = [[0x0, -0xf0], [0x0, -0x5a], [0x0, 0x37], [0x0, -0xf0], [0x0, -0x5a], [0x0, -0x5a]];
      _0x3f22b0.FEATURE_BET_VALUE = 0xa;
      _0x3f22b0.ExtraBetDeclareImgName = 'TXT_ExtraBet_Declare';
      _0x3f22b0.ExtraBetImgName = "MG_specialTXT_01s";
      _0x3f22b0.RespinImgName = "Respin";
      _0x3f22b0.AWARD_MUL = {
        'X2': 0x0,
        'X3': 0x1,
        'X4': 0x2,
        'X5': 0x3,
        'X10': 0x4,
        'BET_X5': 0x5,
        'BET_X30': 0x6
      };
      _0x3f22b0.ACK_JP_AT_THIRD = {
        'info': {
          'PlateSymbol': [{
            'Col': [{
              'Row': [0x4, 0x4, 0x1]
            }, {
              'Row': [0x3, 0x4, 0x4]
            }, {
              'Row': [0x8, 0x8, 0x8]
            }]
          }],
          'PlateMult': [0x2, 0x5, 0x1],
          'AwardDataVec': [],
          'JpType': 0x0,
          'JPMul': 0x0,
          'JPWin': 0x0,
          'Mult': 0x5,
          'Extra': false,
          'CanBuy': false,
          'CanBuyRate': 0x0,
          'AwardTypeFlag': 0x0,
          'TotalWin': 0x0,
          'ShowIndex': "17030-562810-18121301",
          'NowMoney': 0x4c4b43,
          'AckType': 0x0
        }
      };
      _0x3f22b0.ACK_RESPIN_SAME_PLATE = {
        'info': {
          'PlateSymbol': [{
            'Col': [{
              'Row': [0x7, 0x7, 0x7]
            }, {
              'Row': [0x4, 0x4, 0x4]
            }, {
              'Row': [0x5, 0x5, 0x5]
            }]
          }, {
            'Col': [{
              'Row': [0x7, 0x7, 0x7]
            }, {
              'Row': [0x4, 0x4, 0x4]
            }, {
              'Row': [0x5, 0x5, 0x5]
            }]
          }],
          'PlateMult': [0x5, 0x3, 0x1],
          'AwardDataVec': [],
          'JpType': 0x0,
          'JPMul': 0x0,
          'JPWin': 0x0,
          'Mult': 0x3,
          'Extra': false,
          'CanBuy': false,
          'CanBuyRate': 0x0,
          'AwardTypeFlag': 0x0,
          'TotalWin': 0x0,
          'ShowIndex': "17035-038360-07821301",
          'NowMoney': 4999968.2,
          'AckType': 0x0,
          'ReSpinColumn': 0x2
        }
      };
      _0x3f22b0.SPINACK_RESPIN_WEIRD = {
        'info': {
          'PlateSymbol': [{
            'Col': [{
              'Row': [0x1, 0x6, 0x6]
            }, {
              'Row': [0x0, 0x0, 0x5]
            }, {
              'Row': [0x1, 0x1, 0x4]
            }]
          }],
          'PlateMult': [0x2, 0x1, 0xf],
          'AwardDataVec': [],
          'JpType': 0x0,
          'JPMul': 0x0,
          'JPWin': 0x0,
          'Mult': 0x1,
          'AwardTypeFlag': 0x0,
          'TotalWin': 0x0,
          'ShowIndex': "17044-411950-01274301",
          'NowMoney': 1206078.25,
          'AckType': 0x0
        }
      };
      _0x3f22b0.SPINACK_RESPIN_NORMAL = {
        'info': {
          'PlateSymbol': [{
            'Col': [{
              'Row': [0x1, 0x1, 0x1]
            }, {
              'Row': [0x1, 0x1, 0x1]
            }, {
              'Row': [0x0, 0x0, 0x5]
            }]
          }, {
            'Col': [{
              'Row': [0x1, 0x1, 0x1]
            }, {
              'Row': [0x1, 0x1, 0x1]
            }, {
              'Row': [0x8, 0x8, 0x8]
            }]
          }],
          'PlateMult': [0x2, 0x5, 0x1],
          'AwardDataVec': [],
          'JpType': 0x0,
          'JPMul': 0x0,
          'JPWin': 0x0,
          'Mult': 0x5,
          'Extra': false,
          'CanBuy': false,
          'CanBuyRate': 0x0,
          'ReSpinSymbol': 0x1,
          'ReSpinColumn': 0x3,
          'AwardTypeFlag': 0x0,
          'TotalWin': 0x0,
          'ShowIndex': "17095-204920-23761301",
          'NowMoney': 0x4c4bee,
          'AckType': 0x0
        }
      };
      _0x3f22b0.SPINACK_NORMAL = {
        'info': {
          'PlateSymbol': [{
            'Col': [{
              'Row': [0x5, 0x5, 0x5]
            }, {
              'Row': [0x1, 0x3, 0x3]
            }, {
              'Row': [0x4, 0x4, 0x4]
            }]
          }],
          'PlateMult': [0x1, 0x2, 0x5],
          'JpType': 0x0,
          'JPMul': 0x0,
          'JPWin': 0x0,
          'Mult': 0x2,
          'AwardTypeFlag': 0x0,
          'TotalWin': 0x0,
          'ShowIndex': "17110-198160-47822301",
          'NowMoney': 1151672.95,
          'AckType': 0x0
        }
      };
      _0x3f22b0.SPINACK_AWARD = {
        'info': {
          'PlateSymbol': [{
            'Col': [{
              'Row': [0x2, 0x2, 0x1]
            }, {
              'Row': [0x6, 0x1, 0x1]
            }, {
              'Row': [0x6, 0x1, 0x1]
            }]
          }],
          'PlateMult': [0x2, 0xf, 0x1],
          'AwardDataVec': [{
            'Symbol': 0x1,
            'Line': 0x2,
            'Win': 0x2ee0
          }],
          'JpType': 0x0,
          'JPMul': 0x0,
          'JPWin': 0x0,
          'Mult': 0xf,
          'AwardTypeFlag': 0x1,
          'TotalWin': 0x2ee0,
          'ShowIndex': "17110-198160-48072301",
          'NowMoney': 1147672.95,
          'AckType': 0x0
        }
      };
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "f81e7grqStIXIDSBu1GPgDO", "BottomBarComponent", undefined);
      var _0x13f878 = _0x6126fa.ccclass;
      var _0x5f4ea5 = _0x6126fa.property;
      _0x5a126f = _0x5f4ea5({
        'type': _0x19ba3d,
        'tooltip': "小跑分表演"
      });
      _0x3fb50b = _0x5f4ea5({
        'type': _0x19ba3d,
        'tooltip': '乘倍'
      });
      _0x404313 = _0x5f4ea5({
        'type': _0x346ead,
        'tooltip': '底板'
      });
      _0x2f580f = function (_0x50936c) {
        function _0x17bf0f() {
          var _0x17e74c;
          var _0x27691b = arguments.length;
          var _0x4e23de = new Array(_0x27691b);
          for (var _0x66a79b = 0x0; _0x66a79b < _0x27691b; _0x66a79b++) {
            _0x4e23de[_0x66a79b] = arguments[_0x66a79b];
          }
          _0x40ccb3(_0x17e74c = _0x50936c.call.apply(_0x50936c, [this].concat(_0x4e23de)) || this, "m_winLabl", _0x25e79b, _0x10e60a(_0x17e74c));
          _0x40ccb3(_0x17e74c, "m_mulLabl", _0x702821, _0x10e60a(_0x17e74c));
          _0x40ccb3(_0x17e74c, "m_backGround", _0x2620f7, _0x10e60a(_0x17e74c));
          _0x17e74c.m_gameView = null;
          _0x17e74c.m_win = 0x0;
          _0x17e74c.m_currentWin = 0x0;
          _0x17e74c.m_step = 0x0;
          _0x17e74c.m_isAward = false;
          _0x17e74c.m_isAwardFinish = true;
          _0x17e74c.m_Award = false;
          return _0x17e74c;
        }
        _0x39e18e(_0x17bf0f, _0x50936c);
        var _0x51ff93 = _0x17bf0f.prototype;
        _0x51ff93.Init = function (_0x35c957) {
          this.m_gameView = _0x35c957;
          this.m_winLabl.node.active = false;
          if (!this.m_winLabl.node.getComponent(_0xbb1863)) {
            this.m_winLabl.node.addComponent(_0xbb1863);
          }
          this.m_backGround.node.active = false;
          this.m_isAward = false;
          this.m_Award = false;
          this.m_win = 0x0;
          this.m_currentWin = 0x0;
          this.m_step = 0x0;
        };
        _0x51ff93.MultiWin = function () {
          this.node.getComponent(_0x4cb146).play(_0x3f22b0.SpineAnimNames.Multiply_Win);
          this.m_winLabl.string = _0x546bb1.FormatNumberThousands(_0x546bb1.strip(this.m_gameView.SpinAck.TotalWin), _0x546bb1.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
        };
        _0x51ff93.startAward = function (_0x98c64, _0x1f7f81, _0x3ddac3) {
          this.m_win = _0x1f7f81;
          this.m_isAward = true;
          this.m_Award = true;
          this.m_winLabl.node.active = true;
          this.m_winLabl.node.getComponent(_0xbb1863).opacity = 0xff;
          this.m_currentWin = _0x98c64;
          this.m_isAwardFinish = _0x3ddac3;
          this.node.setScale(_0x243100(0x1, 0x1, 0x1));
          this.m_backGround.node.active = true;
          this.m_step = this.m_win / _0x3f22b0.DELAYTIME.RUNNING_WIN;
        };
        _0x51ff93.idleWin = function (_0x5df5bc, _0x53ee96, _0x281df3) {
          this.m_winLabl.node.active = true;
          this.m_winLabl.node.getComponent(_0xbb1863).opacity = 0xff;
          this.node.setScale(_0x243100(0x1, 0x1, 0x1));
          this.m_backGround.node.active = true;
          if (this.m_gameView.IsLandscape) {
            this.node.setPosition(_0x3f22b0.LINE_WIN_POSITION_L[_0x281df3 + 0x1][0x0], _0x3f22b0.LINE_WIN_POSITION_L[_0x281df3 + 0x1][0x1], 0x0);
          } else {
            this.node.setPosition(_0x3f22b0.LINE_WIN_POSITION_S[_0x281df3 + 0x1][0x0], _0x3f22b0.LINE_WIN_POSITION_S[_0x281df3 + 0x1][0x1], 0x0);
          }
          if (_0x53ee96 > 0x1 && this.m_mulLabl) {
            this.m_mulLabl.node.active = true;
            this.m_mulLabl.string = " X" + _0x53ee96.toString();
          }
          this.m_winLabl.string = _0x546bb1.FormatNumberThousands(_0x546bb1.strip(_0x5df5bc / _0x53ee96), _0x546bb1.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
        };
        _0x51ff93.stopIdleWin = function () {
          this.m_backGround.node.active = false;
          this.m_winLabl.node.active = false;
          if (this.m_gameView.IsLandscape) {
            this.node.setPosition(_0x3f22b0.LINE_WIN_POSITION_L[0x0][0x0], _0x3f22b0.LINE_WIN_POSITION_L[0x0][0x1], 0x0);
          } else {
            this.node.setPosition(_0x3f22b0.LINE_WIN_POSITION_S[0x0][0x0], _0x3f22b0.LINE_WIN_POSITION_S[0x0][0x1], 0x0);
          }
        };
        _0x51ff93.update = function (_0x411e8c) {
          var _0x3128bf = this;
          if (0x1 == this.m_isAward) {
            this.m_currentWin += this.m_step * _0x411e8c;
            if (this.m_currentWin >= this.m_win) {
              this.m_currentWin = this.m_win;
              this.m_isAward = false;
              _0x13a184(this.node).delay(this.m_isAwardFinish ? 0.4 : 2.5).call(function () {
                _0x13a184(_0x3128bf.m_winLabl.node.getComponent(_0xbb1863)).to(0.125, {
                  'opacity': 0x64
                }).call(function () {}).start();
              }).delay(0.125).call(function () {
                _0x3128bf.m_Award = false;
                _0x3128bf.m_winLabl.node.active = false;
                _0x3128bf.m_backGround.node.active = false;
                _0x3128bf.m_currentWin = 0x0;
                _0x3128bf.m_step = 0x0;
                _0x3128bf.m_win = 0x0;
              }).start();
            }
            this.m_winLabl.string = _0x546bb1.FormatNumberThousands(_0x546bb1.strip(this.m_currentWin), _0x546bb1.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          }
        };
        _0x48eefc(_0x17bf0f, [{
          'key': "GetAward",
          'get': function () {
            return this.m_Award;
          }
        }]);
        return _0x17bf0f;
      }(_0x2d51ac);
      _0x25e79b = _0x1c868d(_0x2f580f.prototype, "m_winLabl", [_0x5a126f], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x702821 = _0x1c868d(_0x2f580f.prototype, 'm_mulLabl', [_0x3fb50b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2620f7 = _0x1c868d(_0x2f580f.prototype, 'm_backGround', [_0x404313], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x4888f0 = _0x13f878(_0x37a9e6 = _0x2f580f) || _0x37a9e6;
      var _0x17e87b;
      var _0x73d6a2;
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "0c4e6xbWltJ4oaNpqRZOrcV", 'ColumnSymbol', undefined);
      var _0x453c3d = _0x6126fa.ccclass;
      _0x17e87b = _0x453c3d('ColumnSymbol');
      var _0x1ae6ad = _0x17e87b(_0x73d6a2 = function () {
        function _0x5942a3(_0x43d938, _0x904d1f, _0x270163, _0x53ba3a) {
          this.m_parentNode = null;
          this.m_symbolSprites = new Array();
          this.m_soltReels = null;
          this.m_symbols = [];
          this.m_name = '';
          this.m_basePos = _0x243100(0x0, 0x0, 0x0);
          this.m_parentNode = _0x43d938;
          this.m_soltReels = _0x270163;
          _0x56df80('');
          for (var _0x3a3654 = 0x0; _0x3a3654 < _0x3f22b0.ROW; ++_0x3a3654) {
            var _0x578235 = new _0x1e3e82();
            _0x578235.name = _0x53ba3a + '_' + _0x3a3654;
            _0x578235.layer = _0x2be50b.Layer2D;
            var _0x34065f = _0x578235.addComponent(_0x346ead);
            _0x578235.addComponent(_0xbb1863);
            _0x34065f.type = _0x346ead.Type.SIMPLE;
            _0x34065f.sizeMode = _0x346ead.SizeMode.RAW;
            _0x34065f.trim = false;
            this.m_parentNode.addChild(_0x578235);
            this.m_symbolSprites[_0x3a3654] = _0x34065f;
          }
        }
        var _0x354b58 = _0x5942a3.prototype;
        _0x354b58.SetSymbols = function (_0x2add20) {
          this.m_symbols = _0x2add20;
          for (var _0x40c5eb = 0x0; _0x40c5eb < this.m_symbolSprites.length; ++_0x40c5eb) {
            if (_0x40c5eb < _0x2add20.length) {
              this.m_symbolSprites[_0x40c5eb].node.active = true;
              this.m_symbolSprites[_0x40c5eb].spriteFrame = this.m_soltReels.GetSymbolSpriteFrame(_0x2add20[_0x40c5eb]);
              this.m_symbolSprites[_0x40c5eb].node.setPosition(this.CalPosY(_0x40c5eb));
            } else {
              this.m_symbolSprites[_0x40c5eb].node.active = false;
            }
          }
        };
        _0x354b58.ChangeSymbol = function (_0x15435e, _0x4de919) {
          this.m_symbolSprites[_0x4de919].spriteFrame = this.m_soltReels.GetSymbolSpriteFrame(_0x15435e);
          this.m_symbolSprites[_0x4de919].node.active = true;
        };
        _0x354b58.SetPosition = function (_0x131614) {
          this.m_basePos = _0x131614;
          for (var _0x202040 = 0x0; _0x202040 < this.m_symbols.length; ++_0x202040) {
            var _0x22e3a1 = this.CalPosY(_0x202040);
            this.m_symbolSprites[_0x202040].node.setPosition(_0x22e3a1);
          }
        };
        _0x354b58.CalPosY = function (_0x5c3b88) {
          var _0x464a81 = this.m_basePos.clone();
          _0x464a81.y += (_0x3f22b0.ROW - 0x1 - _0x5c3b88 + 0.5) * this.m_soltReels.SymbolSize.height;
          return _0x464a81;
        };
        _0x354b58.CalStopPosY = function (_0x3ceaab) {
          var _0x445452 = _0x243100(0x0, 0x0, 0x0);
          _0x445452.y += (_0x3f22b0.ROW - 2.5 - _0x3ceaab + 0.5) * this.m_soltReels.SymbolSize.height;
          return _0x445452;
        };
        _0x354b58.HideSymbol = function (_0x20fec4) {
          this.m_symbolSprites[_0x20fec4].node.active = false;
        };
        _0x354b58.SetColumnVisiable = function (_0x253df2) {
          for (var _0x245810 = 0x0; _0x245810 < _0x3f22b0.ROW; ++_0x245810) {
            this.m_symbolSprites[_0x245810].node.active = _0x253df2;
          }
        };
        _0x354b58.SetSymbolDark = function (_0x556a15) {
          for (var _0x475f34 = 0x0; _0x475f34 < _0x3f22b0.ROW; ++_0x475f34) {
            this.m_symbolSprites[_0x475f34].color = _0x556a15 ? _0x2f7ea9(0x60, 0x60, 0x60) : _0x2f7ea9(0xff, 0xff, 0xff);
          }
        };
        _0x354b58.GetSymbolNode = function (_0x4101f4) {
          return this.m_symbolSprites[_0x4101f4].node;
        };
        _0x48eefc(_0x5942a3, [{
          'key': "Name",
          'get': function () {
            return this.m_name;
          },
          'set': function (_0x31be49) {
            this.m_name = _0x31be49;
          }
        }]);
        return _0x5942a3;
      }()) || _0x73d6a2;
      var _0x1e0c51;
      var _0x19d40c;
      var _0x2a51ae;
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "2c465urF+5E6a8SAy0Y1679", "AppManager", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "01a4bCeOlRFS4PxU4ftD5wn", "BackpackManager", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "e98d6g3Sn5F/phbS0JGqk6v", "BuyBonusManager", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "810fcmXyb9Bu4OzTZmIkoz9", "CommonGameManager", undefined);
      (function (_0x1b84af) {
        _0x1b84af[_0x1b84af.Get = 0x0] = 'Get';
        _0x1b84af[_0x1b84af.Post = 0x1] = "Post";
      })(_0x19d40c || (_0x19d40c = {}));
      (function (_0x136e33) {
        _0x136e33[_0x136e33.Ignore = 0x0] = "Ignore";
        _0x136e33[_0x136e33.Handle = 0x1] = "Handle";
      })(_0x2a51ae || (_0x2a51ae = {}));
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "0e324Erw0JDW6aCYO5d0i2g", "DailyMissionManager", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "dd020H2ox5CQ70Z9VNWXYpK", 'DebrisManager', undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "1fcfdTjgMdDr4mh99NzZ29B", "GaiaManager", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "a3f63TygSlA6KwEkLDlQIoJ", "GiftCodeManager", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "9692fSvI0xNR5GVPmbcEfzq", "IframeCommandManager", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "d8221PEwlRBep+hz+x7w5Ot", "NewBottomBarManager", undefined);
      var _0x127133;
      var _0x444f9a;
      var _0x436823;
      var _0x58bcdb;
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "28748R+s5pCY7kwYZ0zkqKk", 'NewExtraManager', undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "861e1J/bwRGlI4J13TOOh4y", "TrialManager", undefined);
      (function (_0xc51cc0) {
        _0xc51cc0[_0xc51cc0.None = 0x0] = "None";
        _0xc51cc0[_0xc51cc0.Playing = 0x1] = "Playing";
        _0xc51cc0[_0xc51cc0.Item = 0x2] = "Item";
      })(_0x436823 || (_0x436823 = {}));
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "0f3df9al6NIJJ1/5ZP5aShG", "MsgBoxManager", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "8de065l1yBCNoeRGxK2yzaD", "StateManager", undefined);
      var _0x33587b;
      var _0x32f8c2;
      var _0x2b07a4;
      var _0x25e445;
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "c7e3d4LY9dOUokI+wu7YgCQ", 'AutoShowManager', undefined);
      (function (_0x5d64fa) {
        _0x5d64fa[_0x5d64fa.SKY_BAR = 0x0] = "SKY_BAR";
        _0x5d64fa[_0x5d64fa.PAYTABLE = 0x1] = "PAYTABLE";
        _0x5d64fa[_0x5d64fa.LANDING = 0x2] = 'LANDING';
        _0x5d64fa[_0x5d64fa.DISCOUNT = 0x3] = "DISCOUNT";
        _0x5d64fa[_0x5d64fa.EXTRA_BET = 0x4] = "EXTRA_BET";
        _0x5d64fa[_0x5d64fa.ICONBOX = 0x5] = 'ICONBOX';
      })(_0x32f8c2 || (_0x32f8c2 = {}));
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "d388f5XkRRFcYXg5usnXTa/", "LocaleStringManager", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "077a5gmYEpIQqr+YOtt+g08", 'LocalStorageManager', undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, '8c0f7IX3HNLY6BaWiL8u0j4', 'SoundManager', undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "50f8dtxxuFDo6qJW6FBFBaO", 'EventManager', undefined);
      var _0x3abdaf;
      var _0x17f982;
      var _0xa49e85;
      var _0x4f6f41;
      var _0x2470f4;
      var _0x15d8bb;
      var _0x11156b;
      var _0x505a3b;
      var _0x115f63;
      var _0x39ef9b;
      var _0x1d97df;
      var _0x5ed161;
      var _0xd7c137;
      var _0x34afce;
      var _0x3c3bca;
      var _0x2fc410;
      var _0x2bdfc1;
      var _0x3c572e;
      var _0x46109d;
      var _0x581517;
      var _0x2bedeb;
      var _0x21863b;
      var _0x4ae88e;
      var _0x3c803a;
      var _0x3deed0;
      var _0x2be78c;
      var _0x49d4ce;
      var _0x4acec8;
      var _0x497879;
      var _0x5af348;
      var _0x2e14bd;
      var _0x3be09d;
      var _0x18dbbf;
      var _0x15bc77;
      var _0x44d091;
      var _0x318dd2;
      var _0x74badf;
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "18947v7ICNDlYz3G5vE642k", "LoadPrefabManager", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, 'de7f6JwfsBHBYba0UlqLoFI', "NotificationManager", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "81438uBGiNJXoDkKAmuxEJu", "FunctionControlManager", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "3e41doUMVNLQbg53Jn6N9ch", 'SoundAudioManager', undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, 'cfe9e3/byhFGL1S1brGrbPU', 'DebugManager', undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "858d45NBqBLW5W3J41WER1G", 'index', undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "84f90pRmlNI0JRW4+hY02hj", "Compliment", undefined);
      var _0x4088bc = _0x6126fa.ccclass;
      var _0xcc2699 = _0x6126fa.property;
      _0x17f982 = _0x4088bc("Compliment");
      _0xa49e85 = _0xcc2699({
        'type': _0x346ead,
        'tooltip': "Node JP Type (Sprite)"
      });
      _0x4f6f41 = _0xcc2699({
        'type': _0x1370ff.Skeleton,
        'tooltip': "Node JP Frame (Skeleton)"
      });
      _0x2470f4 = _0xcc2699({
        'type': _0x19ba3d,
        'tooltip': "Node JP Num (Label)"
      });
      _0x15d8bb = _0xcc2699({
        'type': _0x1e3e82,
        'tooltip': "宣告JP Node"
      });
      _0x11156b = _0xcc2699({
        'type': _0x1370ff.Skeleton,
        'tooltip': "宣告JP (Skeleton)"
      });
      _0x505a3b = _0xcc2699({
        'type': _0x346ead,
        'tooltip': "宣告JP文字圖片 (Sprite)"
      });
      _0x115f63 = _0xcc2699({
        'type': _0x19ba3d,
        'tooltip': "宣告JP Num Grand->Minor (Label)"
      });
      _0x39ef9b = _0xcc2699({
        'type': _0x1e3e82,
        'tooltip': "JP_Win"
      });
      _0x1d97df = _0xcc2699({
        'type': _0x1370ff.Skeleton,
        'tooltip': 'Bottom'
      });
      _0x5ed161 = _0xcc2699({
        'type': _0x1370ff.Skeleton,
        'tooltip': "Top"
      });
      _0xd7c137 = _0xcc2699({
        'type': _0x19ba3d,
        'tooltip': "HP_NUM1"
      });
      _0x34afce = _0xcc2699({
        'type': _0x1e3e82,
        'tooltip': 'JP結算Node'
      });
      _0x3c3bca = _0xcc2699({
        'type': _0x1370ff.Skeleton,
        'tooltip': "JP結算背景 (bottom)"
      });
      _0x2fc410 = _0xcc2699({
        'type': _0x1370ff.Skeleton,
        'tooltip': "JP結算角色動畫"
      });
      _0x2bdfc1 = _0xcc2699({
        'type': _0x1370ff.Skeleton,
        'tooltip': "JP結算背景 (top)"
      });
      _0x3c572e = _0xcc2699({
        'type': _0x346ead,
        'tooltip': "JP結算文字圖片"
      });
      _0x46109d = _0xcc2699({
        'type': _0x19ba3d,
        'tooltip': "JP結算數字 (Num)"
      });
      _0x581517 = function (_0x455aae) {
        function _0xac9f7d() {
          var _0x4ac0da;
          var _0x44ad77 = arguments.length;
          var _0x7e2411 = new Array(_0x44ad77);
          for (var _0x2d4e09 = 0x0; _0x2d4e09 < _0x44ad77; _0x2d4e09++) {
            _0x7e2411[_0x2d4e09] = arguments[_0x2d4e09];
          }
          _0x40ccb3(_0x4ac0da = _0x455aae.call.apply(_0x455aae, [this].concat(_0x7e2411)) || this, "m_jpSprite", _0x2bedeb, _0x10e60a(_0x4ac0da));
          _0x40ccb3(_0x4ac0da, 'm_jpSkeleton', _0x21863b, _0x10e60a(_0x4ac0da));
          _0x40ccb3(_0x4ac0da, "m_jpLabel", _0x4ae88e, _0x10e60a(_0x4ac0da));
          _0x40ccb3(_0x4ac0da, "m_jpDeclareNode", _0x3c803a, _0x10e60a(_0x4ac0da));
          _0x40ccb3(_0x4ac0da, "m_jpDeclare", _0x3deed0, _0x10e60a(_0x4ac0da));
          _0x40ccb3(_0x4ac0da, "m_jpDeclareTexts", _0x2be78c, _0x10e60a(_0x4ac0da));
          _0x40ccb3(_0x4ac0da, "m_jpDeclareNums", _0x49d4ce, _0x10e60a(_0x4ac0da));
          _0x40ccb3(_0x4ac0da, "m_jpWinNode", _0x4acec8, _0x10e60a(_0x4ac0da));
          _0x40ccb3(_0x4ac0da, "m_jpWinBottom", _0x497879, _0x10e60a(_0x4ac0da));
          _0x40ccb3(_0x4ac0da, "m_jpWinTop", _0x5af348, _0x10e60a(_0x4ac0da));
          _0x40ccb3(_0x4ac0da, 'm_jpWinHpNum1', _0x2e14bd, _0x10e60a(_0x4ac0da));
          _0x40ccb3(_0x4ac0da, "m_jpComplimentNode", _0x3be09d, _0x10e60a(_0x4ac0da));
          _0x40ccb3(_0x4ac0da, "m_jpCompliment", _0x18dbbf, _0x10e60a(_0x4ac0da));
          _0x40ccb3(_0x4ac0da, "m_jpComplimentCharacter", _0x15bc77, _0x10e60a(_0x4ac0da));
          _0x40ccb3(_0x4ac0da, 'm_jpComplimentTop', _0x44d091, _0x10e60a(_0x4ac0da));
          _0x40ccb3(_0x4ac0da, 'm_jpComplimentText', _0x318dd2, _0x10e60a(_0x4ac0da));
          _0x40ccb3(_0x4ac0da, "m_jpComplimentNum", _0x74badf, _0x10e60a(_0x4ac0da));
          _0x4ac0da.m_currJpType = 0x0;
          _0x4ac0da.m_originBet = 0x0;
          _0x4ac0da.m_jpComplimentBgmId = null;
          _0x4ac0da.m_isJpComplimentEnd = false;
          _0x4ac0da.m_isJpComplimentStart = false;
          _0x4ac0da.m_runJpWinTween = null;
          _0x4ac0da.m_gameView = null;
          _0x4ac0da.m_showRange = null;
          _0x4ac0da.m_isJpDeclare = false;
          _0x4ac0da.m_finalWin = 0x0;
          return _0x4ac0da;
        }
        _0x39e18e(_0xac9f7d, _0x455aae);
        var _0x4405be = _0xac9f7d.prototype;
        _0x4405be.onLoad = function () {};
        _0x4405be.Init = function (_0x5b03ef) {
          this.m_gameView = _0x5b03ef;
        };
        _0x4405be.SetTxt = function () {
          var _0x4d585c = _0x2b07a4.GetGameAtlas();
          this.m_jpDeclareTexts[0x0].spriteFrame = _0x4d585c.getSpriteFrame("TXT_JP_Declare_01");
          this.m_jpDeclareTexts[0x1].spriteFrame = _0x4d585c.getSpriteFrame("TXT_JP_Declare_02");
          this.m_jpDeclareTexts[0x2].spriteFrame = _0x4d585c.getSpriteFrame("TXT_JP_Declare_03");
          this.m_jpComplimentText.spriteFrame = _0x4d585c.getSpriteFrame('TXT_JP_Compliment_01');
        };
        _0x4405be.SetJPShowRange = function (_0x1be4dd) {
          this.m_showRange = _0x1be4dd;
          _0x59835f('設定JP分數顯示範圍基礎值', this.m_showRange);
        };
        _0x4405be.SetJPLabel = function (_0x4961f7) {
          var _0x52f6f2 = this;
          if (this.m_originBet != _0x4961f7 && this.m_showRange) {
            var _0x3ba069 = [0x0, 0x0, 0x0, 0x0];
            var _0x3b8f33 = [0x0, 0x0, 0x0, 0x0];
            var _0x125909 = [0x0, 0x0, 0x0, 0x0];
            var _0x1332c6 = [0x0, 0x0, 0x0, 0x0];
            var _0x36a622 = [0x0, 0x0, 0x0, 0x0];
            var _0x8a9ad8 = [0x0, 0x0, 0x0, 0x0];
            var _0x460a29 = _0x546bb1.divide(_0x3f22b0.DELAYTIME.JP_RUN_LABEL, _0x3f22b0.DELAYTIME.WIN_LABEL_NUMBER_STEP);
            for (var _0x1d2b60 = 0x0; _0x1d2b60 < 0x4; _0x1d2b60++) {
              _0x3ba069[_0x1d2b60] = _0x546bb1.times(this.m_showRange[_0x1d2b60].Min, _0x4961f7);
              _0x3b8f33[_0x1d2b60] = _0x546bb1.times(this.m_showRange[_0x1d2b60].Max, _0x4961f7);
              _0x125909[_0x1d2b60] = _0x546bb1.times(this.m_showRange[_0x1d2b60].Min, this.m_originBet);
              _0x1332c6[_0x1d2b60] = _0x546bb1.times(this.m_showRange[_0x1d2b60].Max, this.m_originBet);
              _0x59835f("minTarget", _0x1d2b60, _0x3ba069[_0x1d2b60]);
              _0x36a622[_0x1d2b60] = _0x546bb1.divide(_0x3ba069[_0x1d2b60] - _0x125909[_0x1d2b60], _0x460a29);
              _0x8a9ad8[_0x1d2b60] = _0x546bb1.divide(_0x3b8f33[_0x1d2b60] - _0x1332c6[_0x1d2b60], _0x460a29);
            }
            _0x13a184(this.node).repeat(_0x460a29, _0x13a184().call(function () {
              for (var _0x36639f = 0x0; _0x36639f < 0x4; _0x36639f++) {
                _0x125909[_0x36639f] = _0x546bb1.strip(_0x125909[_0x36639f] + _0x36a622[_0x36639f]);
                _0x1332c6[_0x36639f] = _0x546bb1.strip(_0x1332c6[_0x36639f] + _0x8a9ad8[_0x36639f]);
                var _0x2bb152 = undefined;
                var _0x1de5ea = undefined;
                if (_0x36639f == _0x3f22b0.GameJpType.JOKER) {
                  _0x2bb152 = _0x125909[_0x36639f] >= 0x5f5e100 ? _0x52f6f2.Number2KM(_0x125909[_0x36639f]) : _0x546bb1.FormatNumberThousands(_0x125909[_0x36639f]);
                  _0x52f6f2.m_jpLabel[_0x3f22b0.GameJpType.JOKER].getComponent(_0x19ba3d).string = _0x2bb152;
                } else {
                  _0x2bb152 = _0x125909[_0x36639f] > 0x182b8 ? _0x52f6f2.Number2KM(_0x125909[_0x36639f]) : _0x546bb1.FormatNumberThousands(_0x125909[_0x36639f]);
                  _0x1de5ea = _0x1332c6[_0x36639f] > 0x182b8 ? _0x52f6f2.Number2KM(_0x1332c6[_0x36639f]) : _0x546bb1.FormatNumberThousands(_0x1332c6[_0x36639f]);
                  if (_0x125909[_0x36639f] < 0x1 && '0' == (_0x2bb152 = _0x546bb1.FormatNumberThousands(_0x125909[_0x36639f], _0x546bb1.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO, true, 0x2)).split(_0x546bb1.DotString)[0x1].split('')[0x1]) {
                    _0x2bb152 = _0x546bb1.FormatNumberThousands(_0x125909[_0x36639f], _0x546bb1.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO, true, 0x1);
                  }
                  if (_0x1332c6[_0x36639f] < 0x1 && '0' == (_0x1de5ea = _0x546bb1.FormatNumberThousands(_0x1332c6[_0x36639f], _0x546bb1.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO, true, 0x2)).split(_0x546bb1.DotString)[0x1].split('')[0x1]) {
                    _0x1de5ea = _0x546bb1.FormatNumberThousands(_0x1332c6[_0x36639f], _0x546bb1.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO, true, 0x1);
                  }
                  _0x52f6f2.m_jpLabel[_0x36639f].getComponent(_0x19ba3d).string = _0x2bb152 + '-' + _0x1de5ea;
                }
              }
            }).delay(_0x3f22b0.DELAYTIME.WIN_LABEL_NUMBER_STEP)).call(function () {
              for (var _0x1e03d2 = 0x0; _0x1e03d2 < 0x4; _0x1e03d2++) {
                var _0x54d882 = undefined;
                var _0x4c2f47 = undefined;
                if (_0x1e03d2 == _0x3f22b0.GameJpType.JOKER) {
                  _0x54d882 = _0x3ba069[_0x1e03d2] >= 0x5f5e100 ? _0x52f6f2.Number2KM(_0x3ba069[_0x1e03d2]) : _0x546bb1.FormatNumberThousands(_0x3ba069[_0x1e03d2], _0x546bb1.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO, true);
                  _0x52f6f2.m_jpLabel[_0x1e03d2].getComponent(_0x19ba3d).string = _0x54d882;
                } else {
                  _0x54d882 = _0x3ba069[_0x1e03d2] > 0x182b8 ? _0x52f6f2.Number2KM(_0x3ba069[_0x1e03d2]) : _0x546bb1.FormatNumberThousands(_0x3ba069[_0x1e03d2], _0x546bb1.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO, true);
                  _0x4c2f47 = _0x3b8f33[_0x1e03d2] > 0x182b8 ? _0x52f6f2.Number2KM(_0x3b8f33[_0x1e03d2]) : _0x546bb1.FormatNumberThousands(_0x3b8f33[_0x1e03d2], _0x546bb1.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO, true);
                  if (_0x3ba069[_0x1e03d2] < 0x1 && '0' == (_0x54d882 = _0x546bb1.FormatNumberThousands(_0x3ba069[_0x1e03d2], _0x546bb1.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO, true, 0x2)).split(_0x546bb1.DotString)[0x1].split('')[0x1]) {
                    _0x54d882 = _0x546bb1.FormatNumberThousands(_0x3ba069[_0x1e03d2], _0x546bb1.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO, true, 0x1);
                  }
                  if (_0x1332c6[_0x1e03d2] < 0x1 && '0' == (_0x4c2f47 = _0x546bb1.FormatNumberThousands(_0x3b8f33[_0x1e03d2], _0x546bb1.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO, true, 0x2)).split(_0x546bb1.DotString)[0x1].split('')[0x1]) {
                    _0x4c2f47 = _0x546bb1.FormatNumberThousands(_0x3b8f33[_0x1e03d2], _0x546bb1.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO, true, 0x1);
                  }
                  _0x52f6f2.m_jpLabel[_0x1e03d2].getComponent(_0x19ba3d).string = _0x54d882 + '-' + _0x4c2f47;
                }
              }
            }).start();
            this.m_originBet = _0x4961f7;
          }
        };
        _0x4405be.Number2KM = function (_0x36bdec) {
          if (Math.abs(_0x36bdec) >= 0xf4240) {
            var _0x22fdba = _0x546bb1.divide(_0x36bdec, 0xf4240);
            return _0x546bb1.FormatNumberThousands(_0x22fdba, _0x546bb1.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO, true, 0x2) + 'M';
          }
          if (Math.abs(_0x36bdec) >= 0x3e8) {
            var _0x3e5812 = _0x546bb1.divide(_0x36bdec, 0x3e8);
            return _0x546bb1.FormatNumberThousands(_0x3e5812, _0x546bb1.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO, true, 0x2) + 'K';
          }
          return _0x36bdec.toString();
        };
        _0x4405be.JpDeclare = function () {
          var _0x6d3583 = _0x23d9d7(_0x1a789f().mark(function _0x2ea620() {
            var _0x432efa;
            return _0x1a789f().wrap(function (_0x40be2b) {
              for (;;) {
                switch (_0x40be2b.prev = _0x40be2b.next) {
                  case 0x0:
                    if (null !== this.m_gameView.BgmId) {
                      _0x25e445.Stop(this.m_gameView.BgmId);
                      this.m_gameView.BgmId = null;
                    }
                    _0x25e445.Play(_0x3f22b0.AudioClips.JP_Declare);
                    this.m_jpDeclareNode.active = true;
                    _0x432efa = this.m_jpDeclare;
                    this.m_gameView.PlayAnimation(_0x432efa, _0x3f22b0.SpineAnimNames.Start, false);
                    this.SetDeclareNumActive(true);
                    _0x40be2b.next = 0x8;
                    return _0x2be50b.Wait(this, _0x3f22b0.AnimDuration.JP_Declare.Start);
                  case 0x8:
                    this.m_gameView.PlayAnimation(_0x432efa, _0x3f22b0.SpineAnimNames.Loop, false);
                    _0x40be2b.next = 0xb;
                    return _0x2be50b.Wait(this, _0x3f22b0.AnimDuration.JP_Declare.Loop);
                  case 0xb:
                    _0x40be2b.next = 0xd;
                    return this.JpDeclareEnd();
                  case 0xd:
                  case "end":
                    return _0x40be2b.stop();
                }
              }
            }, _0x2ea620, this);
          }));
          return function () {
            return _0x6d3583.apply(this, arguments);
          };
        }();
        _0x4405be.SetDeclareNumActive = function (_0x4d2f9a) {
          var _0x2124bd = this;
          if (_0x4d2f9a) {
            this.m_jpDeclareNums[_0x3f22b0.GameJpType.GRAND].node.active = _0x4d2f9a;
            this.m_jpDeclareNums[_0x3f22b0.GameJpType.GRAND].string = this.m_jpLabel[_0x3f22b0.GameJpType.GRAND].getComponent(_0x19ba3d).string;
            _0x13a184(this.node).delay(0.2).call(function () {
              _0x2124bd.m_jpDeclareNums[_0x3f22b0.GameJpType.JOKER].node.active = _0x4d2f9a;
              _0x2124bd.m_jpDeclareNums[_0x3f22b0.GameJpType.JOKER].string = _0x2124bd.m_jpLabel[_0x3f22b0.GameJpType.JOKER].getComponent(_0x19ba3d).string;
            }).delay(0.2).call(function () {
              _0x2124bd.m_jpDeclareNums[_0x3f22b0.GameJpType.MAJOR].node.active = _0x4d2f9a;
              _0x2124bd.m_jpDeclareNums[_0x3f22b0.GameJpType.MAJOR].string = _0x2124bd.m_jpLabel[_0x3f22b0.GameJpType.MAJOR].getComponent(_0x19ba3d).string;
            }).delay(0.2).call(function () {
              _0x2124bd.m_jpDeclareNums[_0x3f22b0.GameJpType.MINOR].node.active = _0x4d2f9a;
              _0x2124bd.m_jpDeclareNums[_0x3f22b0.GameJpType.MINOR].string = _0x2124bd.m_jpLabel[_0x3f22b0.GameJpType.MINOR].getComponent(_0x19ba3d).string;
            }).start();
          } else {
            this.m_jpDeclareNums[_0x3f22b0.GameJpType.GRAND].node.active = _0x4d2f9a;
            this.m_jpDeclareNums[_0x3f22b0.GameJpType.JOKER].node.active = _0x4d2f9a;
            this.m_jpDeclareNums[_0x3f22b0.GameJpType.MAJOR].node.active = _0x4d2f9a;
            this.m_jpDeclareNums[_0x3f22b0.GameJpType.MINOR].node.active = _0x4d2f9a;
          }
        };
        _0x4405be.JpDeclareEnd = function () {
          var _0x323f89 = _0x23d9d7(_0x1a789f().mark(function _0x25c361() {
            var _0x3983e6;
            return _0x1a789f().wrap(function (_0x140820) {
              for (;;) {
                switch (_0x140820.prev = _0x140820.next) {
                  case 0x0:
                    this.m_gameView.SlotReels.JpWinReelStart();
                    _0x3983e6 = this.m_jpDeclare;
                    _0x140820.next = 0x4;
                    return this.m_gameView.PlayAnimation(_0x3983e6, _0x3f22b0.SpineAnimNames.End, false);
                  case 0x4:
                    this.m_gameView.EffectPlate.HideJpSymbol();
                    this.m_jpDeclareNode.active = false;
                    this.m_isJpDeclare = false;
                  case 0x7:
                  case "end":
                    return _0x140820.stop();
                }
              }
            }, _0x25c361, this);
          }));
          return function () {
            return _0x323f89.apply(this, arguments);
          };
        }();
        _0x4405be.SetJpWinActive = function (_0x27e377) {
          this.m_jpWinTop.node.active = _0x27e377;
          this.m_jpWinBottom.node.active = _0x27e377;
          this.m_jpWinHpNum1.node.active = _0x27e377;
        };
        _0x4405be.JpWin = function () {
          var _0x1cef05 = _0x23d9d7(_0x1a789f().mark(function _0x43c5fc(_0x2269f4, _0x43a048, _0x32d09d) {
            var _0x1c9eee;
            var _0x38244b;
            var _0x19944a;
            var _0x53528c;
            return _0x1a789f().wrap(function (_0x48a229) {
              for (;;) {
                switch (_0x48a229.prev = _0x48a229.next) {
                  case 0x0:
                    this.m_gameView.SlotReels.JpReel.active = false;
                    this.m_currJpType = _0x2269f4;
                    this.m_finalWin = _0x43a048;
                    _0x1c9eee = _0x43a048 / _0x32d09d;
                    this.m_jpWinHpNum1.getComponent(_0xbb1863).opacity = 0.1;
                    this.m_jpWinHpNum1.string = _0x546bb1.FormatNumberThousands(_0x1c9eee, _0x546bb1.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO);
                    this.m_jpWinNode.active = true;
                    _0x48a229.t0 = _0x2269f4;
                    _0x48a229.next = _0x48a229.t0 === _0x3f22b0.GameJpType.MINOR ? 0xa : _0x48a229.t0 === _0x3f22b0.GameJpType.MAJOR ? 0x11 : _0x48a229.t0 === _0x3f22b0.GameJpType.JOKER ? 0x18 : _0x48a229.t0 === _0x3f22b0.GameJpType.GRAND ? 0x1f : 0x26;
                    break;
                  case 0xa:
                    this.m_jpCompliment.setSkin(_0x3f22b0.SkinNames.MINOR);
                    this.m_jpComplimentTop.setSkin(_0x3f22b0.SkinNames.MINOR);
                    this.m_jpWinTop.setSkin(_0x3f22b0.SkinNames.Minor);
                    _0x38244b = _0x3f22b0.SpineAnimNames.JP_Bottom.JP_Minor_Start;
                    _0x19944a = _0x3f22b0.SpineAnimNames.JP_Bottom.JP_Minor_Loop;
                    _0x53528c = _0x3f22b0.AudioClips.JP_Win01;
                    return _0x48a229.abrupt("break", 0x26);
                  case 0x11:
                    this.m_jpCompliment.setSkin(_0x3f22b0.SkinNames.MAJOR);
                    this.m_jpComplimentTop.setSkin(_0x3f22b0.SkinNames.MAJOR);
                    this.m_jpWinTop.setSkin(_0x3f22b0.SkinNames.Major);
                    _0x38244b = _0x3f22b0.SpineAnimNames.JP_Bottom.JP_Major_Start;
                    _0x19944a = _0x3f22b0.SpineAnimNames.JP_Bottom.JP_Major_Loop;
                    _0x53528c = _0x3f22b0.AudioClips.JP_Win01;
                    return _0x48a229.abrupt('break', 0x26);
                  case 0x18:
                    this.m_jpCompliment.setSkin(_0x3f22b0.SkinNames.JOKER);
                    this.m_jpComplimentTop.setSkin(_0x3f22b0.SkinNames.JOKER);
                    this.m_jpWinTop.setSkin(_0x3f22b0.SkinNames.Joker);
                    _0x38244b = _0x3f22b0.SpineAnimNames.JP_Bottom.JP_Joker_Start;
                    _0x19944a = _0x3f22b0.SpineAnimNames.JP_Bottom.JP_Joker_Loop;
                    _0x53528c = _0x3f22b0.AudioClips.JP_Win02;
                    return _0x48a229.abrupt("break", 0x26);
                  case 0x1f:
                    this.m_jpCompliment.setSkin(_0x3f22b0.SkinNames.GRAND);
                    this.m_jpComplimentTop.setSkin(_0x3f22b0.SkinNames.GRAND);
                    this.m_jpWinTop.setSkin(_0x3f22b0.SkinNames.Grand);
                    _0x38244b = _0x3f22b0.SpineAnimNames.JP_Bottom.JP_Grand_Start;
                    _0x19944a = _0x3f22b0.SpineAnimNames.JP_Bottom.JP_Grand_Loop;
                    _0x53528c = _0x3f22b0.AudioClips.JP_Win02;
                    return _0x48a229.abrupt("break", 0x26);
                  case 0x26:
                    this.m_gameView.PlayAnimation(this.m_jpWinBottom, _0x38244b, false);
                    this.m_gameView.PlayAnimation(this.m_jpWinTop, _0x3f22b0.SpineAnimNames.Start, false);
                    this.JpFrameShow(_0x2269f4);
                    _0x25e445.Play(_0x53528c);
                    _0x48a229.next = 0x2c;
                    return _0x2be50b.Wait(this, _0x3f22b0.AnimDuration.JP_SHOW_WIN);
                  case 0x2c:
                    this.m_jpWinHpNum1.getComponent(_0xbb1863).opacity = 0xff;
                    _0x25e445.Play(_0x3f22b0.AudioClips.JP_Show_Win);
                    this.m_gameView.setBottomBar(_0x1c9eee);
                    _0x48a229.next = 0x31;
                    return _0x2be50b.Wait(this, _0x3f22b0.AnimDuration.JP_Top.Start - _0x3f22b0.AnimDuration.JP_SHOW_WIN);
                  case 0x31:
                    this.m_gameView.PlayAnimation(this.m_jpWinBottom, _0x19944a, true);
                    _0x48a229.next = 0x34;
                    return this.m_gameView.PlayAnimation(this.m_jpWinTop, _0x3f22b0.SpineAnimNames.Loop, false);
                  case 0x34:
                    this.m_gameView.Multiple.WinLoop(_0x32d09d);
                    if (!(_0x32d09d > 0x1)) {
                      _0x48a229.next = 0x42;
                      break;
                    }
                    this.m_gameView.Multiple.JpWin();
                    this.m_gameView.PlayAnimation(this.m_jpWinTop, _0x3f22b0.SpineAnimNames.Hit, false);
                    _0x48a229.next = 0x3a;
                    return _0x2be50b.Wait(this.m_gameView, 1.15);
                  case 0x3a:
                    _0x25e445.Play(_0x3f22b0.AudioClips.Fly);
                    _0x48a229.next = 0x3d;
                    return _0x2be50b.Wait(this, 0.10000000000000009);
                  case 0x3d:
                    this.m_jpWinHpNum1.string = _0x546bb1.FormatNumberThousands(_0x43a048, _0x546bb1.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO);
                    this.m_gameView.setBottomBar(_0x43a048);
                    _0x25e445.Play(_0x3f22b0.AudioClips.JP_Win_Multiply);
                    _0x48a229.next = 0x42;
                    return _0x2be50b.Wait(this, _0x3f22b0.AnimDuration.JP_Top.Hit - 0.75);
                  case 0x42:
                    _0x48a229.next = 0x44;
                    return _0x2be50b.Wait(this, 0.5);
                  case 0x44:
                    this.m_gameView.PlayAnimation(this.m_jpWinTop, _0x3f22b0.SpineAnimNames.Loop, true);
                    this.JpComplimentStart();
                  case 0x46:
                  case "end":
                    return _0x48a229.stop();
                }
              }
            }, _0x43c5fc, this);
          }));
          return function (_0x1fd669, _0x5b1469, _0x356ac0) {
            return _0x1cef05.apply(this, arguments);
          };
        }();
        _0x4405be.JpFrameShow = function () {
          var _0x33641d = _0x23d9d7(_0x1a789f().mark(function _0x597332(_0x56c804) {
            return _0x1a789f().wrap(function (_0x38f37c) {
              for (;;) {
                switch (_0x38f37c.prev = _0x38f37c.next) {
                  case 0x0:
                    _0x38f37c.t0 = _0x56c804;
                    _0x38f37c.next = _0x38f37c.t0 === _0x3f22b0.GameJpType.MINOR ? 0x3 : _0x38f37c.t0 === _0x3f22b0.GameJpType.MAJOR ? 0x8 : _0x38f37c.t0 === _0x3f22b0.GameJpType.JOKER ? 0xd : _0x38f37c.t0 === _0x3f22b0.GameJpType.GRAND ? 0x12 : 0x17;
                    break;
                  case 0x3:
                    this.m_jpSkeleton[_0x3f22b0.GameJpType.MINOR].node.active = true;
                    _0x38f37c.next = 0x6;
                    return this.m_gameView.PlayAnimation(this.m_jpSkeleton[_0x3f22b0.GameJpType.MINOR], _0x3f22b0.SpineAnimNames.JP_JpType_Frame.MINOR_Start, false);
                  case 0x6:
                    this.m_gameView.PlayAnimation(this.m_jpSkeleton[_0x3f22b0.GameJpType.MINOR], _0x3f22b0.SpineAnimNames.JP_JpType_Frame.MINOR_Loop, true);
                    return _0x38f37c.abrupt('break', 0x17);
                  case 0x8:
                    this.m_jpSkeleton[_0x3f22b0.GameJpType.MAJOR].node.active = true;
                    _0x38f37c.next = 0xb;
                    return this.m_gameView.PlayAnimation(this.m_jpSkeleton[_0x3f22b0.GameJpType.MAJOR], _0x3f22b0.SpineAnimNames.JP_JpType_Frame.MAJOR_Start, false);
                  case 0xb:
                    this.m_gameView.PlayAnimation(this.m_jpSkeleton[_0x3f22b0.GameJpType.MAJOR], _0x3f22b0.SpineAnimNames.JP_JpType_Frame.MAJOR_Loop, true);
                    return _0x38f37c.abrupt("break", 0x17);
                  case 0xd:
                    this.m_jpSkeleton[_0x3f22b0.GameJpType.JOKER].node.active = true;
                    _0x38f37c.next = 0x10;
                    return this.m_gameView.PlayAnimation(this.m_jpSkeleton[_0x3f22b0.GameJpType.JOKER], _0x3f22b0.SpineAnimNames.JP_JpType_Frame.JOKER_Start, false);
                  case 0x10:
                    this.m_gameView.PlayAnimation(this.m_jpSkeleton[_0x3f22b0.GameJpType.JOKER], _0x3f22b0.SpineAnimNames.JP_JpType_Frame.JOKER_Loop, true);
                    return _0x38f37c.abrupt('break', 0x17);
                  case 0x12:
                    this.m_jpSkeleton[_0x3f22b0.GameJpType.GRAND].node.active = true;
                    _0x38f37c.next = 0x15;
                    return this.m_gameView.PlayAnimation(this.m_jpSkeleton[_0x3f22b0.GameJpType.GRAND], _0x3f22b0.SpineAnimNames.JP_JpType_Frame.GRAND_Start, false);
                  case 0x15:
                    this.m_gameView.PlayAnimation(this.m_jpSkeleton[_0x3f22b0.GameJpType.GRAND], _0x3f22b0.SpineAnimNames.JP_JpType_Frame.GRAND_Loop, true);
                    return _0x38f37c.abrupt("break", 0x17);
                  case 0x17:
                  case 'end':
                    return _0x38f37c.stop();
                }
              }
            }, _0x597332, this);
          }));
          return function (_0x89bd09) {
            return _0x33641d.apply(this, arguments);
          };
        }();
        _0x4405be.JpWinEnd = function () {
          this.m_jpWinNode.active = false;
          this.m_jpSkeleton[_0x3f22b0.GameJpType.MINOR].node.active = false;
          this.m_jpSkeleton[_0x3f22b0.GameJpType.MAJOR].node.active = false;
          this.m_jpSkeleton[_0x3f22b0.GameJpType.JOKER].node.active = false;
          this.m_jpSkeleton[_0x3f22b0.GameJpType.GRAND].node.active = false;
        };
        _0x4405be.JpComplimentStart = function () {
          var _0x5c310c = this;
          this.m_jpComplimentNode.active = true;
          var _0xbc3632 = this.m_jpCompliment;
          var _0x4ead46 = this.m_jpComplimentTop;
          var _0x484be8 = this.m_jpComplimentCharacter;
          this.m_jpComplimentCharacter.node.active = true;
          this.m_gameView.PlayAnimation(_0xbc3632, _0x3f22b0.SpineAnimNames.Start, false);
          this.m_gameView.PlayAnimation(_0x4ead46, _0x3f22b0.SpineAnimNames.Start, false);
          this.m_gameView.PlayAnimation(_0x484be8, _0x3f22b0.SpineAnimNames.Character.FG_Compliment, false);
          this.RunJpWin();
          this.m_gameView.SetBGMVolumeByFade(0.4, 0x0, 0.1, this.m_gameView.JpBgmId);
          this.m_jpComplimentBgmId = _0x25e445.Play(_0x3f22b0.AudioClips.JP_Compliment);
          _0x13a184(this.node).delay(_0x3f22b0.AnimDuration.JP_Compliment_Start).call(function () {
            if (!_0x5c310c.m_isJpComplimentEnd) {
              _0x5c310c.JpComplimentEnd();
            }
          }).start();
          switch (this.m_currJpType) {
            case Number(_0x3f22b0.GameJpType.MINOR):
              this.m_jpCompliment.setSkin(_0x3f22b0.SkinNames.MINOR);
              this.m_jpComplimentTop.setSkin(_0x3f22b0.SkinNames.MINOR);
              break;
            case Number(_0x3f22b0.GameJpType.MAJOR):
              this.m_jpCompliment.setSkin(_0x3f22b0.SkinNames.MAJOR);
              this.m_jpComplimentTop.setSkin(_0x3f22b0.SkinNames.MAJOR);
              break;
            case Number(_0x3f22b0.GameJpType.JOKER):
              this.m_jpCompliment.setSkin(_0x3f22b0.SkinNames.JOKER);
              this.m_jpComplimentTop.setSkin(_0x3f22b0.SkinNames.JOKER);
              break;
            case Number(_0x3f22b0.GameJpType.GRAND):
              this.m_jpCompliment.setSkin(_0x3f22b0.SkinNames.GRAND);
              this.m_jpComplimentTop.setSkin(_0x3f22b0.SkinNames.GRAND);
          }
          this.m_isJpComplimentStart = true;
          _0x127133.SetSpinState(0xf);
        };
        _0x4405be.JpComplimentStop = function () {
          var _0xafaf73 = this;
          var _0x343084 = this.m_jpCompliment;
          var _0x2fb3ec = this.m_jpComplimentTop;
          var _0x3c178c = this.m_jpComplimentCharacter;
          this.m_gameView.PlayAnimation(_0x343084, _0x3f22b0.SpineAnimNames.Start2, false);
          this.m_gameView.PlayAnimation(_0x2fb3ec, _0x3f22b0.SpineAnimNames.Start2, false);
          this.m_gameView.PlayAnimation(_0x3c178c, _0x3f22b0.SpineAnimNames.Character.FG_Compliment2, false);
          if (this.m_runJpWinTween) {
            this.m_runJpWinTween.stop();
            this.m_runJpWinTween = null;
          }
          this.m_jpComplimentNum.string = _0x546bb1.FormatNumberThousands(_0x546bb1.strip(this.m_finalWin), _0x546bb1.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          _0x25e445.Stop(this.m_jpComplimentBgmId);
          this.m_jpComplimentBgmId = null;
          _0x25e445.Play(_0x3f22b0.AudioClips.Big_Win_End);
          _0x13a184(this.node).delay(_0x3f22b0.AnimDuration.JP_Compliment_Start2).call(function () {
            if (!_0xafaf73.m_isJpComplimentEnd) {
              _0xafaf73.JpComplimentEnd();
            }
          }).start();
        };
        _0x4405be.JpComplimentEnd = function () {
          var _0x283f96 = _0x23d9d7(_0x1a789f().mark(function _0x514a75() {
            return _0x1a789f().wrap(function (_0x99564) {
              for (;;) {
                switch (_0x99564.prev = _0x99564.next) {
                  case 0x0:
                    this.m_isJpComplimentEnd = true;
                    this.m_jpComplimentNode.active = false;
                    this.m_jpComplimentCharacter.node.active = false;
                    this.m_gameView.EffectPlate.AwardJpEnd();
                    this.m_gameView.BgmId = _0x25e445.PlayBackGround(_0x3f22b0.AudioClips.Mg_bgm, true, null, 0.01);
                    this.m_gameView.SetBGMVolumeByFade(0.01, 0.4, 0.5, this.m_gameView.BgmId);
                  case 0x6:
                  case "end":
                    return _0x99564.stop();
                }
              }
            }, _0x514a75, this);
          }));
          return function () {
            return _0x283f96.apply(this, arguments);
          };
        }();
        _0x4405be.RunJpWin = function () {
          var _0x38ed1f = this;
          var _0x4ce918 = this.m_finalWin;
          var _0x104e51 = _0x546bb1.divide(_0x3f22b0.DELAYTIME.COMPLIMENT_RUN_WIN, _0x3f22b0.DELAYTIME.WIN_LABEL_NUMBER_STEP);
          var _0x443d57 = 0x0;
          var _0x2eb72e = _0x546bb1.divide(_0x4ce918, _0x104e51);
          this.m_runJpWinTween = _0x13a184(this.node).repeat(_0x104e51, _0x13a184().call(function () {
            _0x443d57 += _0x2eb72e;
            _0x38ed1f.m_jpComplimentNum.string = _0x546bb1.FormatNumberThousands(_0x546bb1.strip(_0x443d57), _0x546bb1.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          }).delay(_0x3f22b0.DELAYTIME.WIN_LABEL_NUMBER_STEP)).start();
        };
        _0x48eefc(_0xac9f7d, [{
          'key': "IsJpComplimentEnd",
          'set': function (_0x4ade8c) {
            this.m_isJpComplimentEnd = _0x4ade8c;
          }
        }, {
          'key': "IsJpComplimentStart",
          'get': function () {
            return this.m_isJpComplimentStart;
          },
          'set': function (_0x61cf82) {
            this.m_isJpComplimentStart = _0x61cf82;
          }
        }, {
          'key': "ShowRange",
          'get': function () {
            return this.m_showRange;
          }
        }, {
          'key': "IsJpDeclare",
          'get': function () {
            return this.m_isJpDeclare;
          },
          'set': function (_0x4ca040) {
            this.m_isJpDeclare = _0x4ca040;
          }
        }]);
        return _0xac9f7d;
      }(_0x2d51ac);
      _0x2bedeb = _0x1c868d(_0x581517.prototype, "m_jpSprite", [_0xa49e85], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x21863b = _0x1c868d(_0x581517.prototype, "m_jpSkeleton", [_0x4f6f41], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x4ae88e = _0x1c868d(_0x581517.prototype, "m_jpLabel", [_0x2470f4], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x3c803a = _0x1c868d(_0x581517.prototype, "m_jpDeclareNode", [_0x15d8bb], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3deed0 = _0x1c868d(_0x581517.prototype, "m_jpDeclare", [_0x11156b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2be78c = _0x1c868d(_0x581517.prototype, "m_jpDeclareTexts", [_0x505a3b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x49d4ce = _0x1c868d(_0x581517.prototype, "m_jpDeclareNums", [_0x115f63], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x4acec8 = _0x1c868d(_0x581517.prototype, "m_jpWinNode", [_0x39ef9b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x497879 = _0x1c868d(_0x581517.prototype, 'm_jpWinBottom', [_0x1d97df], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5af348 = _0x1c868d(_0x581517.prototype, "m_jpWinTop", [_0x5ed161], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2e14bd = _0x1c868d(_0x581517.prototype, 'm_jpWinHpNum1', [_0xd7c137], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3be09d = _0x1c868d(_0x581517.prototype, "m_jpComplimentNode", [_0x34afce], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x18dbbf = _0x1c868d(_0x581517.prototype, 'm_jpCompliment', [_0x3c3bca], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x15bc77 = _0x1c868d(_0x581517.prototype, "m_jpComplimentCharacter", [_0x2fc410], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x44d091 = _0x1c868d(_0x581517.prototype, "m_jpComplimentTop", [_0x2bdfc1], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x318dd2 = _0x1c868d(_0x581517.prototype, "m_jpComplimentText", [_0x3c572e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x74badf = _0x1c868d(_0x581517.prototype, "m_jpComplimentNum", [_0x46109d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, 'cc629oBgStE6p3cesIpDU+s', "DataStructure", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "dadd3XDMG1DNoV7z0vD74tg", "Declare", undefined);
      _0x289c18._RF.pop();
      var _0x4c7d98 = function () {
        function _0x42b628() {
          this._registry = {};
          this._moduleCache = {};
        }
        var _0x49f5ed = _0x42b628.prototype;
        _0x49f5ed.define = function (_0x4045fb, _0x31d3a2, _0x53c805) {
          this._registry[_0x4045fb] = {
            'factory': _0x31d3a2,
            'resolveMap': _0x53c805
          };
        };
        _0x49f5ed.require = function (_0x13a099) {
          return this._require(_0x13a099);
        };
        _0x49f5ed.throwInvalidWrapper = function (_0x293dca, _0x571e8b) {
          throw new Error("Module '" + _0x293dca + "' imported from '" + _0x571e8b + "' is expected be an ESM-wrapped CommonJS module but it doesn't.");
        };
        _0x49f5ed._require = function (_0x1d7e16, _0x3c92d2) {
          var _0x67e957 = this._moduleCache[_0x1d7e16];
          if (_0x67e957) {
            return _0x67e957.exports;
          }
          var _0x4bfcf9 = {
            'id': _0x1d7e16,
            'exports': {}
          };
          this._moduleCache[_0x1d7e16] = _0x4bfcf9;
          this._tryModuleLoad(_0x4bfcf9, _0x1d7e16);
          return _0x4bfcf9.exports;
        };
        _0x49f5ed._resolve = function (_0x25c6ba, _0x463efa) {
          return this._resolveFromInfos(_0x25c6ba, _0x463efa) || this._throwUnresolved(_0x25c6ba, _0x463efa);
        };
        _0x49f5ed._resolveFromInfos = function (_0x337a6d, _0x50e4a7) {
          var _0x524586;
          var _0x4460c9;
          return _0x337a6d in cjsInfos ? _0x337a6d : _0x50e4a7 && null != (_0x524586 = null == (_0x4460c9 = cjsInfos[_0x50e4a7]) ? undefined : _0x4460c9.resolveCache[_0x337a6d]) ? _0x524586 : undefined;
        };
        _0x49f5ed._tryModuleLoad = function (_0x3e07ce, _0x2c8fd0) {
          var _0x1fceab = true;
          try {
            this._load(_0x3e07ce, _0x2c8fd0);
            _0x1fceab = false;
          } finally {
            if (_0x1fceab) {
              delete this._moduleCache[_0x2c8fd0];
            }
          }
        };
        _0x49f5ed._load = function (_0x5caa30, _0x381e9a) {
          var _0x4f3dad = this._loadWrapper(_0x381e9a);
          var _0x57a9b3 = _0x4f3dad.factory;
          var _0x224dfb = _0x4f3dad.resolveMap;
          var _0x5c4485 = this._createRequire(_0x5caa30);
          var _0x4cc7aa = _0x224dfb ? this._createRequireWithResolveMap("function" == typeof _0x224dfb ? _0x224dfb() : _0x224dfb, _0x5c4485) : _0x5c4485;
          _0x57a9b3(_0x5caa30.exports, _0x4cc7aa, _0x5caa30);
        };
        _0x49f5ed._loadWrapper = function (_0x341630) {
          return _0x341630 in this._registry ? this._registry[_0x341630] : this._loadHostProvidedModules(_0x341630);
        };
        _0x49f5ed._loadHostProvidedModules = function (_0x8f29f7) {
          return {
            'factory': function (_0x375cfb, _0x49e5fb, _0x26ddff) {
              if ('undefined' == typeof require) {
                throw new Error("Current environment does not provide a require() for requiring '" + _0x8f29f7 + "'.");
              }
              try {
                _0x26ddff.exports = require(_0x8f29f7);
              } catch (_0xc33bc0) {
                throw new Error("Exception thrown when calling host defined require('" + _0x8f29f7 + "').", {
                  'cause': _0xc33bc0
                });
              }
            }
          };
        };
        _0x49f5ed._createRequire = function (_0x9c2626) {
          var _0x497b43 = this;
          return function (_0x506829) {
            return _0x497b43._require(_0x506829, _0x9c2626);
          };
        };
        _0x49f5ed._createRequireWithResolveMap = function (_0x182a53, _0x4dfe03) {
          return function (_0x224821) {
            var _0x10e520 = _0x182a53[_0x224821];
            if (_0x10e520) {
              return _0x4dfe03(_0x10e520);
            }
            throw new Error("Unresolved specifier " + _0x224821);
          };
        };
        _0x49f5ed._throwUnresolved = function (_0x7c64a1, _0x913cba) {
          throw new Error("Unable to resolve " + _0x7c64a1 + " from " + parent + '.');
        };
        return _0x42b628;
      }();
      var _0x2f4fd2 = new _0x4c7d98();
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js", function (_0x157683, _0x3db633, _0x43f217, _0x28eca6, _0x13fedb) {
        _0x43f217.exports = function (_0x13632b, _0x550cec) {
          var _0x4f2421 = new Array(arguments.length - 0x1);
          var _0x5beddc = 0x0;
          var _0x26f72c = 0x2;
          var _0x8cb44c = true;
          for (; _0x26f72c < arguments.length;) {
            _0x4f2421[_0x5beddc++] = arguments[_0x26f72c++];
          }
          return new Promise(function (_0x500c76, _0x2b7cc2) {
            _0x4f2421[_0x5beddc] = function (_0x5965c5) {
              if (_0x8cb44c) {
                _0x8cb44c = false;
                if (_0x5965c5) {
                  _0x2b7cc2(_0x5965c5);
                } else {
                  var _0x2e3ccf = new Array(arguments.length - 0x1);
                  for (var _0x240ad6 = 0x0; _0x240ad6 < _0x2e3ccf.length;) {
                    _0x2e3ccf[_0x240ad6++] = arguments[_0x240ad6];
                  }
                  _0x500c76.apply(null, _0x2e3ccf);
                }
              }
            };
            try {
              _0x13632b.apply(_0x550cec || null, _0x4f2421);
            } catch (_0x46db8f) {
              if (_0x8cb44c) {
                _0x8cb44c = false;
                _0x2b7cc2(_0x46db8f);
              }
            }
          });
        };
        _0x43f217.exports;
      }, {});
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js", function (_0x4c9754, _0x116a72, _0x5dd733, _0x10ee66, _0x7a34ff) {
        _0x4c9754.length = function (_0x1466c6) {
          var _0x2eccb4 = _0x1466c6.length;
          if (!_0x2eccb4) {
            return 0x0;
          }
          for (var _0x2cd241 = 0x0; --_0x2eccb4 % 0x4 > 0x1 && '=' === _0x1466c6.charAt(_0x2eccb4);) {
            ++_0x2cd241;
          }
          return Math.ceil(0x3 * _0x1466c6.length) / 0x4 - _0x2cd241;
        };
        var _0x4c79e2 = new Array(0x40);
        var _0x1c006e = new Array(0x7b);
        for (var _0x3140f3 = 0x0; _0x3140f3 < 0x40;) {
          _0x1c006e[_0x4c79e2[_0x3140f3] = _0x3140f3 < 0x1a ? _0x3140f3 + 0x41 : _0x3140f3 < 0x34 ? _0x3140f3 + 0x47 : _0x3140f3 < 0x3e ? _0x3140f3 - 0x4 : _0x3140f3 - 0x3b | 0x2b] = _0x3140f3++;
        }
        _0x4c9754.encode = function (_0x35a015, _0x597bb7, _0x30cd4d) {
          var _0x4de756;
          var _0x1f9dc4 = null;
          var _0x34cb4b = [];
          var _0x444d85 = 0x0;
          for (var _0x31baea = 0x0; _0x597bb7 < _0x30cd4d;) {
            var _0x1d6da2 = _0x35a015[_0x597bb7++];
            switch (_0x31baea) {
              case 0x0:
                _0x34cb4b[_0x444d85++] = _0x4c79e2[_0x1d6da2 >> 0x2];
                _0x4de756 = (0x3 & _0x1d6da2) << 0x4;
                _0x31baea = 0x1;
                break;
              case 0x1:
                _0x34cb4b[_0x444d85++] = _0x4c79e2[_0x4de756 | _0x1d6da2 >> 0x4];
                _0x4de756 = (0xf & _0x1d6da2) << 0x2;
                _0x31baea = 0x2;
                break;
              case 0x2:
                _0x34cb4b[_0x444d85++] = _0x4c79e2[_0x4de756 | _0x1d6da2 >> 0x6];
                _0x34cb4b[_0x444d85++] = _0x4c79e2[0x3f & _0x1d6da2];
                _0x31baea = 0x0;
            }
            if (_0x444d85 > 0x1fff) {
              (_0x1f9dc4 || (_0x1f9dc4 = [])).push(String.fromCharCode.apply(String, _0x34cb4b));
              _0x444d85 = 0x0;
            }
          }
          if (_0x31baea) {
            _0x34cb4b[_0x444d85++] = _0x4c79e2[_0x4de756];
            _0x34cb4b[_0x444d85++] = 0x3d;
            if (0x1 === _0x31baea) {
              _0x34cb4b[_0x444d85++] = 0x3d;
            }
          }
          return _0x1f9dc4 ? (_0x444d85 && _0x1f9dc4.push(String.fromCharCode.apply(String, _0x34cb4b.slice(0x0, _0x444d85))), _0x1f9dc4.join('')) : String.fromCharCode.apply(String, _0x34cb4b.slice(0x0, _0x444d85));
        };
        _0x4c9754.decode = function (_0x15a866, _0x650db7, _0x5e6704) {
          var _0x47f4f8;
          var _0x313410 = _0x5e6704;
          var _0x3adc8c = 0x0;
          for (var _0x1b1094 = 0x0; _0x1b1094 < _0x15a866.length;) {
            var _0x509866 = _0x15a866.charCodeAt(_0x1b1094++);
            if (0x3d === _0x509866 && _0x3adc8c > 0x1) {
              break;
            }
            if (undefined === (_0x509866 = _0x1c006e[_0x509866])) {
              throw Error("invalid encoding");
            }
            switch (_0x3adc8c) {
              case 0x0:
                _0x47f4f8 = _0x509866;
                _0x3adc8c = 0x1;
                break;
              case 0x1:
                _0x650db7[_0x5e6704++] = _0x47f4f8 << 0x2 | (0x30 & _0x509866) >> 0x4;
                _0x47f4f8 = _0x509866;
                _0x3adc8c = 0x2;
                break;
              case 0x2:
                _0x650db7[_0x5e6704++] = (0xf & _0x47f4f8) << 0x4 | (0x3c & _0x509866) >> 0x2;
                _0x47f4f8 = _0x509866;
                _0x3adc8c = 0x3;
                break;
              case 0x3:
                _0x650db7[_0x5e6704++] = (0x3 & _0x47f4f8) << 0x6 | _0x509866;
                _0x3adc8c = 0x0;
            }
          }
          if (0x1 === _0x3adc8c) {
            throw Error("invalid encoding");
          }
          return _0x5e6704 - _0x313410;
        };
        _0x4c9754.test = function (_0x1bd8ba) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(_0x1bd8ba);
        };
        _0x5dd733.exports;
      }, {});
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js", function (_0x41dd43, _0x5cca7e, _0x47c0f0, _0x4f855f, _0x58bd79) {
        function _0x3b9979() {
          this._listeners = {};
        }
        _0x47c0f0.exports = _0x3b9979;
        _0x3b9979.prototype.on = function (_0x23bf9a, _0x10cce5, _0x5c51b2) {
          (this._listeners[_0x23bf9a] || (this._listeners[_0x23bf9a] = [])).push({
            'fn': _0x10cce5,
            'ctx': _0x5c51b2 || this
          });
          return this;
        };
        _0x3b9979.prototype.off = function (_0x10accd, _0x5dc76c) {
          if (undefined === _0x10accd) {
            this._listeners = {};
          } else {
            if (undefined === _0x5dc76c) {
              this._listeners[_0x10accd] = [];
            } else {
              var _0x525eaa = this._listeners[_0x10accd];
              for (var _0x425f20 = 0x0; _0x425f20 < _0x525eaa.length;) {
                if (_0x525eaa[_0x425f20].fn === _0x5dc76c) {
                  _0x525eaa.splice(_0x425f20, 0x1);
                } else {
                  ++_0x425f20;
                }
              }
            }
          }
          return this;
        };
        _0x3b9979.prototype.emit = function (_0x5cf168) {
          var _0x5e2e4e = this._listeners[_0x5cf168];
          if (_0x5e2e4e) {
            var _0x43828e = [];
            for (var _0x16aa1a = 0x1; _0x16aa1a < arguments.length;) {
              _0x43828e.push(arguments[_0x16aa1a++]);
            }
            for (_0x16aa1a = 0x0; _0x16aa1a < _0x5e2e4e.length;) {
              _0x5e2e4e[_0x16aa1a].fn.apply(_0x5e2e4e[_0x16aa1a++].ctx, _0x43828e);
            }
          }
          return this;
        };
        _0x47c0f0.exports;
      }, {});
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/@protobufjs/float/index.js", function (_0xcd2d19, _0x374ce7, _0x266952, _0x44469e, _0xe4dcca) {
        function _0x3b177d(_0x4e72c1) {
          if ('undefined' != typeof Float32Array) {
            (function () {
              var _0x4d1a3b = new Float32Array([-0x0]);
              var _0x2afab2 = new Uint8Array(_0x4d1a3b.buffer);
              var _0x4dbc9e = 0x80 === _0x2afab2[0x3];
              function _0x1f3444(_0x141ecc, _0x3b685a, _0x360fe8) {
                _0x4d1a3b[0x0] = _0x141ecc;
                _0x3b685a[_0x360fe8] = _0x2afab2[0x0];
                _0x3b685a[_0x360fe8 + 0x1] = _0x2afab2[0x1];
                _0x3b685a[_0x360fe8 + 0x2] = _0x2afab2[0x2];
                _0x3b685a[_0x360fe8 + 0x3] = _0x2afab2[0x3];
              }
              function _0x5e3759(_0x2ae8f9, _0x5ddc66, _0x2e579a) {
                _0x4d1a3b[0x0] = _0x2ae8f9;
                _0x5ddc66[_0x2e579a] = _0x2afab2[0x3];
                _0x5ddc66[_0x2e579a + 0x1] = _0x2afab2[0x2];
                _0x5ddc66[_0x2e579a + 0x2] = _0x2afab2[0x1];
                _0x5ddc66[_0x2e579a + 0x3] = _0x2afab2[0x0];
              }
              function _0x24d25f(_0x155541, _0x469a3f) {
                _0x2afab2[0x0] = _0x155541[_0x469a3f];
                _0x2afab2[0x1] = _0x155541[_0x469a3f + 0x1];
                _0x2afab2[0x2] = _0x155541[_0x469a3f + 0x2];
                _0x2afab2[0x3] = _0x155541[_0x469a3f + 0x3];
                return _0x4d1a3b[0x0];
              }
              function _0x35843d(_0xcf0f03, _0x50e446) {
                _0x2afab2[0x3] = _0xcf0f03[_0x50e446];
                _0x2afab2[0x2] = _0xcf0f03[_0x50e446 + 0x1];
                _0x2afab2[0x1] = _0xcf0f03[_0x50e446 + 0x2];
                _0x2afab2[0x0] = _0xcf0f03[_0x50e446 + 0x3];
                return _0x4d1a3b[0x0];
              }
              _0x4e72c1.writeFloatLE = _0x4dbc9e ? _0x1f3444 : _0x5e3759;
              _0x4e72c1.writeFloatBE = _0x4dbc9e ? _0x5e3759 : _0x1f3444;
              _0x4e72c1.readFloatLE = _0x4dbc9e ? _0x24d25f : _0x35843d;
              _0x4e72c1.readFloatBE = _0x4dbc9e ? _0x35843d : _0x24d25f;
            })();
          } else {
            (function () {
              function _0xd0ad4b(_0x1364ae, _0x201850, _0x5e0c47, _0x17b2f1) {
                var _0x4f68b9 = _0x201850 < 0x0 ? 0x1 : 0x0;
                if (_0x4f68b9) {
                  _0x201850 = -_0x201850;
                }
                if (0x0 === _0x201850) {
                  _0x1364ae(0x1 / _0x201850 > 0x0 ? 0x0 : 0x80000000, _0x5e0c47, _0x17b2f1);
                } else {
                  if (isNaN(_0x201850)) {
                    _0x1364ae(0x7fc00000, _0x5e0c47, _0x17b2f1);
                  } else {
                    if (_0x201850 > 0xffffff00000000000000000000000000) {
                      _0x1364ae((_0x4f68b9 << 0x1f | 0x7f800000) >>> 0x0, _0x5e0c47, _0x17b2f1);
                    } else {
                      if (_0x201850 < 1.1754943508222875e-38) {
                        _0x1364ae((_0x4f68b9 << 0x1f | Math.round(_0x201850 / 1.401298464324817e-45)) >>> 0x0, _0x5e0c47, _0x17b2f1);
                      } else {
                        var _0x58f089 = Math.floor(Math.log(_0x201850) / Math.LN2);
                        _0x1364ae((_0x4f68b9 << 0x1f | _0x58f089 + 0x7f << 0x17 | 0x7fffff & Math.round(_0x201850 * Math.pow(0x2, -_0x58f089) * 0x800000)) >>> 0x0, _0x5e0c47, _0x17b2f1);
                      }
                    }
                  }
                }
              }
              function _0x38abae(_0x2e9b1c, _0x17f7dd, _0x29f57d) {
                var _0x131dab = _0x2e9b1c(_0x17f7dd, _0x29f57d);
                var _0x2755ff = 0x2 * (_0x131dab >> 0x1f) + 0x1;
                var _0x2df5e4 = _0x131dab >>> 0x17 & 0xff;
                var _0x5ab031 = 0x7fffff & _0x131dab;
                return 0xff === _0x2df5e4 ? _0x5ab031 ? NaN : _0x2755ff * Infinity : 0x0 === _0x2df5e4 ? 1.401298464324817e-45 * _0x2755ff * _0x5ab031 : _0x2755ff * Math.pow(0x2, _0x2df5e4 - 0x96) * (_0x5ab031 + 0x800000);
              }
              _0x4e72c1.writeFloatLE = _0xd0ad4b.bind(null, _0x1f5131);
              _0x4e72c1.writeFloatBE = _0xd0ad4b.bind(null, _0x3690e1);
              _0x4e72c1.readFloatLE = _0x38abae.bind(null, _0x1099c0);
              _0x4e72c1.readFloatBE = _0x38abae.bind(null, _0x196fd0);
            })();
          }
          if ("undefined" != typeof Float64Array) {
            (function () {
              var _0x33d5fe = new Float64Array([-0x0]);
              var _0x490b0 = new Uint8Array(_0x33d5fe.buffer);
              var _0x15488b = 0x80 === _0x490b0[0x7];
              function _0x1cde5f(_0x5b1518, _0x387a03, _0xd95e0a) {
                _0x33d5fe[0x0] = _0x5b1518;
                _0x387a03[_0xd95e0a] = _0x490b0[0x0];
                _0x387a03[_0xd95e0a + 0x1] = _0x490b0[0x1];
                _0x387a03[_0xd95e0a + 0x2] = _0x490b0[0x2];
                _0x387a03[_0xd95e0a + 0x3] = _0x490b0[0x3];
                _0x387a03[_0xd95e0a + 0x4] = _0x490b0[0x4];
                _0x387a03[_0xd95e0a + 0x5] = _0x490b0[0x5];
                _0x387a03[_0xd95e0a + 0x6] = _0x490b0[0x6];
                _0x387a03[_0xd95e0a + 0x7] = _0x490b0[0x7];
              }
              function _0x59124f(_0x1921e1, _0x34b96f, _0xae96d5) {
                _0x33d5fe[0x0] = _0x1921e1;
                _0x34b96f[_0xae96d5] = _0x490b0[0x7];
                _0x34b96f[_0xae96d5 + 0x1] = _0x490b0[0x6];
                _0x34b96f[_0xae96d5 + 0x2] = _0x490b0[0x5];
                _0x34b96f[_0xae96d5 + 0x3] = _0x490b0[0x4];
                _0x34b96f[_0xae96d5 + 0x4] = _0x490b0[0x3];
                _0x34b96f[_0xae96d5 + 0x5] = _0x490b0[0x2];
                _0x34b96f[_0xae96d5 + 0x6] = _0x490b0[0x1];
                _0x34b96f[_0xae96d5 + 0x7] = _0x490b0[0x0];
              }
              function _0x1cd21b(_0x4c17bf, _0x380153) {
                _0x490b0[0x0] = _0x4c17bf[_0x380153];
                _0x490b0[0x1] = _0x4c17bf[_0x380153 + 0x1];
                _0x490b0[0x2] = _0x4c17bf[_0x380153 + 0x2];
                _0x490b0[0x3] = _0x4c17bf[_0x380153 + 0x3];
                _0x490b0[0x4] = _0x4c17bf[_0x380153 + 0x4];
                _0x490b0[0x5] = _0x4c17bf[_0x380153 + 0x5];
                _0x490b0[0x6] = _0x4c17bf[_0x380153 + 0x6];
                _0x490b0[0x7] = _0x4c17bf[_0x380153 + 0x7];
                return _0x33d5fe[0x0];
              }
              function _0x1dbcb3(_0x3570e1, _0x30cd84) {
                _0x490b0[0x7] = _0x3570e1[_0x30cd84];
                _0x490b0[0x6] = _0x3570e1[_0x30cd84 + 0x1];
                _0x490b0[0x5] = _0x3570e1[_0x30cd84 + 0x2];
                _0x490b0[0x4] = _0x3570e1[_0x30cd84 + 0x3];
                _0x490b0[0x3] = _0x3570e1[_0x30cd84 + 0x4];
                _0x490b0[0x2] = _0x3570e1[_0x30cd84 + 0x5];
                _0x490b0[0x1] = _0x3570e1[_0x30cd84 + 0x6];
                _0x490b0[0x0] = _0x3570e1[_0x30cd84 + 0x7];
                return _0x33d5fe[0x0];
              }
              _0x4e72c1.writeDoubleLE = _0x15488b ? _0x1cde5f : _0x59124f;
              _0x4e72c1.writeDoubleBE = _0x15488b ? _0x59124f : _0x1cde5f;
              _0x4e72c1.readDoubleLE = _0x15488b ? _0x1cd21b : _0x1dbcb3;
              _0x4e72c1.readDoubleBE = _0x15488b ? _0x1dbcb3 : _0x1cd21b;
            })();
          } else {
            (function () {
              function _0x883b5c(_0x4a59eb, _0x2847cb, _0x213c2b, _0x4d625d, _0x525b49, _0x34321a) {
                var _0x5c2816 = _0x4d625d < 0x0 ? 0x1 : 0x0;
                if (_0x5c2816) {
                  _0x4d625d = -_0x4d625d;
                }
                if (0x0 === _0x4d625d) {
                  _0x4a59eb(0x0, _0x525b49, _0x34321a + _0x2847cb);
                  _0x4a59eb(0x1 / _0x4d625d > 0x0 ? 0x0 : 0x80000000, _0x525b49, _0x34321a + _0x213c2b);
                } else {
                  if (isNaN(_0x4d625d)) {
                    _0x4a59eb(0x0, _0x525b49, _0x34321a + _0x2847cb);
                    _0x4a59eb(0x7ff80000, _0x525b49, _0x34321a + _0x213c2b);
                  } else {
                    if (_0x4d625d > 0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
                      _0x4a59eb(0x0, _0x525b49, _0x34321a + _0x2847cb);
                      _0x4a59eb((_0x5c2816 << 0x1f | 0x7ff00000) >>> 0x0, _0x525b49, _0x34321a + _0x213c2b);
                    } else {
                      var _0x1e29ac;
                      if (_0x4d625d < 2.2250738585072014e-308) {
                        _0x4a59eb((_0x1e29ac = _0x4d625d / 5e-324) >>> 0x0, _0x525b49, _0x34321a + _0x2847cb);
                        _0x4a59eb((_0x5c2816 << 0x1f | _0x1e29ac / 0x100000000) >>> 0x0, _0x525b49, _0x34321a + _0x213c2b);
                      } else {
                        var _0x25efe3 = Math.floor(Math.log(_0x4d625d) / Math.LN2);
                        if (0x400 === _0x25efe3) {
                          _0x25efe3 = 0x3ff;
                        }
                        _0x4a59eb(0x10000000000000 * (_0x1e29ac = _0x4d625d * Math.pow(0x2, -_0x25efe3)) >>> 0x0, _0x525b49, _0x34321a + _0x2847cb);
                        _0x4a59eb((_0x5c2816 << 0x1f | _0x25efe3 + 0x3ff << 0x14 | 0x100000 * _0x1e29ac & 0xfffff) >>> 0x0, _0x525b49, _0x34321a + _0x213c2b);
                      }
                    }
                  }
                }
              }
              function _0x56e26c(_0x338c4c, _0x4314dd, _0x1fe74f, _0x2f20ee, _0x394a1d) {
                var _0xa6581 = _0x338c4c(_0x2f20ee, _0x394a1d + _0x4314dd);
                var _0x4e811f = _0x338c4c(_0x2f20ee, _0x394a1d + _0x1fe74f);
                var _0x350691 = 0x2 * (_0x4e811f >> 0x1f) + 0x1;
                var _0x2e2d66 = _0x4e811f >>> 0x14 & 0x7ff;
                var _0x573f27 = 0x100000000 * (0xfffff & _0x4e811f) + _0xa6581;
                return 0x7ff === _0x2e2d66 ? _0x573f27 ? NaN : _0x350691 * Infinity : 0x0 === _0x2e2d66 ? 5e-324 * _0x350691 * _0x573f27 : _0x350691 * Math.pow(0x2, _0x2e2d66 - 0x433) * (_0x573f27 + 0x10000000000000);
              }
              _0x4e72c1.writeDoubleLE = _0x883b5c.bind(null, _0x1f5131, 0x0, 0x4);
              _0x4e72c1.writeDoubleBE = _0x883b5c.bind(null, _0x3690e1, 0x4, 0x0);
              _0x4e72c1.readDoubleLE = _0x56e26c.bind(null, _0x1099c0, 0x0, 0x4);
              _0x4e72c1.readDoubleBE = _0x56e26c.bind(null, _0x196fd0, 0x4, 0x0);
            })();
          }
          return _0x4e72c1;
        }
        function _0x1f5131(_0x48fe33, _0x3736bf, _0x52f234) {
          _0x3736bf[_0x52f234] = 0xff & _0x48fe33;
          _0x3736bf[_0x52f234 + 0x1] = _0x48fe33 >>> 0x8 & 0xff;
          _0x3736bf[_0x52f234 + 0x2] = _0x48fe33 >>> 0x10 & 0xff;
          _0x3736bf[_0x52f234 + 0x3] = _0x48fe33 >>> 0x18;
        }
        function _0x3690e1(_0x536e5d, _0x226e21, _0x5ed83a) {
          _0x226e21[_0x5ed83a] = _0x536e5d >>> 0x18;
          _0x226e21[_0x5ed83a + 0x1] = _0x536e5d >>> 0x10 & 0xff;
          _0x226e21[_0x5ed83a + 0x2] = _0x536e5d >>> 0x8 & 0xff;
          _0x226e21[_0x5ed83a + 0x3] = 0xff & _0x536e5d;
        }
        function _0x1099c0(_0x211319, _0x43d64e) {
          return (_0x211319[_0x43d64e] | _0x211319[_0x43d64e + 0x1] << 0x8 | _0x211319[_0x43d64e + 0x2] << 0x10 | _0x211319[_0x43d64e + 0x3] << 0x18) >>> 0x0;
        }
        function _0x196fd0(_0x1a9977, _0x5eb7a4) {
          return (_0x1a9977[_0x5eb7a4] << 0x18 | _0x1a9977[_0x5eb7a4 + 0x1] << 0x10 | _0x1a9977[_0x5eb7a4 + 0x2] << 0x8 | _0x1a9977[_0x5eb7a4 + 0x3]) >>> 0x0;
        }
        _0x266952.exports = _0x3b177d(_0x3b177d);
        _0x266952.exports;
        _0x266952.exports.writeFloatLE;
        _0x266952.exports.writeFloatBE;
        _0x266952.exports.readFloatLE;
        _0x266952.exports.readFloatBE;
        _0x266952.exports.writeDoubleLE;
        _0x266952.exports.writeDoubleBE;
        _0x266952.exports.readDoubleLE;
        _0x266952.exports.readDoubleBE;
      }, {});
      _0x2f4fd2.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js', function (_0x370b6a, _0x20a447, _0x42b651, _0x323b4e, _0x5f3740) {
        function _0x1859c4(_0x21d984) {
          try {
            var _0x233886 = eval("quire".replace(/^/, 're'))(_0x21d984);
            if (_0x233886 && (_0x233886.length || Object.keys(_0x233886).length)) {
              return _0x233886;
            }
          } catch (_0xc57e99) {}
          return null;
        }
        _0x42b651.exports = _0x1859c4;
        _0x42b651.exports;
      }, {});
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js", function (_0x35e1c7, _0x103f59, _0x1c9c20, _0x4408fd, _0x255118) {
        _0x35e1c7.length = function (_0x40d15b) {
          var _0x37262d = 0x0;
          var _0x3ceb7e = 0x0;
          for (var _0x381b4e = 0x0; _0x381b4e < _0x40d15b.length; ++_0x381b4e) {
            if ((_0x3ceb7e = _0x40d15b.charCodeAt(_0x381b4e)) < 0x80) {
              _0x37262d += 0x1;
            } else if (_0x3ceb7e < 0x800) {
              _0x37262d += 0x2;
            } else if (0xd800 == (0xfc00 & _0x3ceb7e) && 0xdc00 == (0xfc00 & _0x40d15b.charCodeAt(_0x381b4e + 0x1))) {
              ++_0x381b4e;
              _0x37262d += 0x4;
            } else {
              _0x37262d += 0x3;
            }
          }
          return _0x37262d;
        };
        _0x35e1c7.read = function (_0x1df2f8, _0x37d1a7, _0x3c52df) {
          if (_0x3c52df - _0x37d1a7 < 0x1) {
            return '';
          }
          var _0x571b43;
          var _0x338c09 = null;
          var _0x3c8286 = [];
          for (var _0x2e561c = 0x0; _0x37d1a7 < _0x3c52df;) {
            if ((_0x571b43 = _0x1df2f8[_0x37d1a7++]) < 0x80) {
              _0x3c8286[_0x2e561c++] = _0x571b43;
            } else if (_0x571b43 > 0xbf && _0x571b43 < 0xe0) {
              _0x3c8286[_0x2e561c++] = (0x1f & _0x571b43) << 0x6 | 0x3f & _0x1df2f8[_0x37d1a7++];
            } else if (_0x571b43 > 0xef && _0x571b43 < 0x16d) {
              _0x571b43 = ((0x7 & _0x571b43) << 0x12 | (0x3f & _0x1df2f8[_0x37d1a7++]) << 0xc | (0x3f & _0x1df2f8[_0x37d1a7++]) << 0x6 | 0x3f & _0x1df2f8[_0x37d1a7++]) - 0x10000;
              _0x3c8286[_0x2e561c++] = 0xd800 + (_0x571b43 >> 0xa);
              _0x3c8286[_0x2e561c++] = 0xdc00 + (0x3ff & _0x571b43);
            } else {
              _0x3c8286[_0x2e561c++] = (0xf & _0x571b43) << 0xc | (0x3f & _0x1df2f8[_0x37d1a7++]) << 0x6 | 0x3f & _0x1df2f8[_0x37d1a7++];
            }
            if (_0x2e561c > 0x1fff) {
              (_0x338c09 || (_0x338c09 = [])).push(String.fromCharCode.apply(String, _0x3c8286));
              _0x2e561c = 0x0;
            }
          }
          return _0x338c09 ? (_0x2e561c && _0x338c09.push(String.fromCharCode.apply(String, _0x3c8286.slice(0x0, _0x2e561c))), _0x338c09.join('')) : String.fromCharCode.apply(String, _0x3c8286.slice(0x0, _0x2e561c));
        };
        _0x35e1c7.write = function (_0x1968ad, _0x4e379a, _0x596d88) {
          var _0x2d83c6;
          var _0x1dbab8;
          var _0x4b8d5a = _0x596d88;
          for (var _0x57ae60 = 0x0; _0x57ae60 < _0x1968ad.length; ++_0x57ae60) {
            if ((_0x2d83c6 = _0x1968ad.charCodeAt(_0x57ae60)) < 0x80) {
              _0x4e379a[_0x596d88++] = _0x2d83c6;
            } else if (_0x2d83c6 < 0x800) {
              _0x4e379a[_0x596d88++] = _0x2d83c6 >> 0x6 | 0xc0;
              _0x4e379a[_0x596d88++] = 0x3f & _0x2d83c6 | 0x80;
            } else if (0xd800 == (0xfc00 & _0x2d83c6) && 0xdc00 == (0xfc00 & (_0x1dbab8 = _0x1968ad.charCodeAt(_0x57ae60 + 0x1)))) {
              _0x2d83c6 = 0x10000 + ((0x3ff & _0x2d83c6) << 0xa) + (0x3ff & _0x1dbab8);
              ++_0x57ae60;
              _0x4e379a[_0x596d88++] = _0x2d83c6 >> 0x12 | 0xf0;
              _0x4e379a[_0x596d88++] = _0x2d83c6 >> 0xc & 0x3f | 0x80;
              _0x4e379a[_0x596d88++] = _0x2d83c6 >> 0x6 & 0x3f | 0x80;
              _0x4e379a[_0x596d88++] = 0x3f & _0x2d83c6 | 0x80;
            } else {
              _0x4e379a[_0x596d88++] = _0x2d83c6 >> 0xc | 0xe0;
              _0x4e379a[_0x596d88++] = _0x2d83c6 >> 0x6 & 0x3f | 0x80;
              _0x4e379a[_0x596d88++] = 0x3f & _0x2d83c6 | 0x80;
            }
          }
          return _0x596d88 - _0x4b8d5a;
        };
        _0x1c9c20.exports;
      }, {});
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js", function (_0x22396a, _0x2b8d2a, _0x1e6c3d, _0x54d190, _0x559988) {
        _0x1e6c3d.exports = function (_0xd583ec, _0x3e5a3, _0x1d712a) {
          var _0x478f7d = _0x1d712a || 0x2000;
          var _0x3ba645 = _0x478f7d >>> 0x1;
          var _0x29d33f = null;
          var _0x5dabab = _0x478f7d;
          return function (_0x3aea34) {
            if (_0x3aea34 < 0x1 || _0x3aea34 > _0x3ba645) {
              return _0xd583ec(_0x3aea34);
            }
            if (_0x5dabab + _0x3aea34 > _0x478f7d) {
              _0x29d33f = _0xd583ec(_0x478f7d);
              _0x5dabab = 0x0;
            }
            var _0x45985d = _0x3e5a3.call(_0x29d33f, _0x5dabab, _0x5dabab += _0x3aea34);
            if (0x7 & _0x5dabab) {
              _0x5dabab = 0x1 + (0x7 | _0x5dabab);
            }
            return _0x45985d;
          };
        };
        _0x1e6c3d.exports;
      }, {});
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js", function (_0x3e99f4, _0x304893, _0x1bb791, _0x9622e4, _0x422776) {
        _0x1bb791.exports = _0x5ee53;
        var _0x362324 = _0x304893("../util/minimal");
        function _0x5ee53(_0xc6033c, _0x2856da) {
          this.lo = _0xc6033c >>> 0x0;
          this.hi = _0x2856da >>> 0x0;
        }
        var _0x395c8f = _0x5ee53.zero = new _0x5ee53(0x0, 0x0);
        _0x395c8f.toNumber = function () {
          return 0x0;
        };
        _0x395c8f.zzEncode = _0x395c8f.zzDecode = function () {
          return this;
        };
        _0x395c8f.length = function () {
          return 0x1;
        };
        var _0x7dcb63 = _0x5ee53.zeroHash = "\0\0\0\0\0\0\0\0";
        _0x5ee53.fromNumber = function (_0x1ba6c1) {
          if (0x0 === _0x1ba6c1) {
            return _0x395c8f;
          }
          var _0x3c9dd4 = _0x1ba6c1 < 0x0;
          if (_0x3c9dd4) {
            _0x1ba6c1 = -_0x1ba6c1;
          }
          var _0x2c3fab = _0x1ba6c1 >>> 0x0;
          var _0x1755fc = (_0x1ba6c1 - _0x2c3fab) / 0x100000000 >>> 0x0;
          if (_0x3c9dd4) {
            _0x1755fc = ~_0x1755fc >>> 0x0;
            _0x2c3fab = ~_0x2c3fab >>> 0x0;
            if (++_0x2c3fab > 0xffffffff) {
              _0x2c3fab = 0x0;
              if (++_0x1755fc > 0xffffffff) {
                _0x1755fc = 0x0;
              }
            }
          }
          return new _0x5ee53(_0x2c3fab, _0x1755fc);
        };
        _0x5ee53.from = function (_0x6ebee8) {
          if ("number" == typeof _0x6ebee8) {
            return _0x5ee53.fromNumber(_0x6ebee8);
          }
          if (_0x362324.isString(_0x6ebee8)) {
            if (!_0x362324.Long) {
              return _0x5ee53.fromNumber(parseInt(_0x6ebee8, 0xa));
            }
            _0x6ebee8 = _0x362324.Long.fromString(_0x6ebee8);
          }
          return _0x6ebee8.low || _0x6ebee8.high ? new _0x5ee53(_0x6ebee8.low >>> 0x0, _0x6ebee8.high >>> 0x0) : _0x395c8f;
        };
        _0x5ee53.prototype.toNumber = function (_0x4cd18e) {
          if (!_0x4cd18e && this.hi >>> 0x1f) {
            var _0x1db5b8 = 0x1 + ~this.lo >>> 0x0;
            var _0x182ea9 = ~this.hi >>> 0x0;
            if (!_0x1db5b8) {
              _0x182ea9 = _0x182ea9 + 0x1 >>> 0x0;
            }
            return -(_0x1db5b8 + 0x100000000 * _0x182ea9);
          }
          return this.lo + 0x100000000 * this.hi;
        };
        _0x5ee53.prototype.toLong = function (_0x4bc160) {
          return _0x362324.Long ? new _0x362324.Long(0x0 | this.lo, 0x0 | this.hi, Boolean(_0x4bc160)) : {
            'low': 0x0 | this.lo,
            'high': 0x0 | this.hi,
            'unsigned': Boolean(_0x4bc160)
          };
        };
        var _0x3b17c2 = String.prototype.charCodeAt;
        _0x5ee53.fromHash = function (_0x5614b7) {
          return _0x5614b7 === _0x7dcb63 ? _0x395c8f : new _0x5ee53((_0x3b17c2.call(_0x5614b7, 0x0) | _0x3b17c2.call(_0x5614b7, 0x1) << 0x8 | _0x3b17c2.call(_0x5614b7, 0x2) << 0x10 | _0x3b17c2.call(_0x5614b7, 0x3) << 0x18) >>> 0x0, (_0x3b17c2.call(_0x5614b7, 0x4) | _0x3b17c2.call(_0x5614b7, 0x5) << 0x8 | _0x3b17c2.call(_0x5614b7, 0x6) << 0x10 | _0x3b17c2.call(_0x5614b7, 0x7) << 0x18) >>> 0x0);
        };
        _0x5ee53.prototype.toHash = function () {
          return String.fromCharCode(0xff & this.lo, this.lo >>> 0x8 & 0xff, this.lo >>> 0x10 & 0xff, this.lo >>> 0x18, 0xff & this.hi, this.hi >>> 0x8 & 0xff, this.hi >>> 0x10 & 0xff, this.hi >>> 0x18);
        };
        _0x5ee53.prototype.zzEncode = function () {
          var _0x49ce7a = this.hi >> 0x1f;
          this.hi = ((this.hi << 0x1 | this.lo >>> 0x1f) ^ _0x49ce7a) >>> 0x0;
          this.lo = (this.lo << 0x1 ^ _0x49ce7a) >>> 0x0;
          return this;
        };
        _0x5ee53.prototype.zzDecode = function () {
          var _0x1894ce = -(0x1 & this.lo);
          this.lo = ((this.lo >>> 0x1 | this.hi << 0x1f) ^ _0x1894ce) >>> 0x0;
          this.hi = (this.hi >>> 0x1 ^ _0x1894ce) >>> 0x0;
          return this;
        };
        _0x5ee53.prototype.length = function () {
          var _0xb7c104 = this.lo;
          var _0x43851a = (this.lo >>> 0x1c | this.hi << 0x4) >>> 0x0;
          var _0x33e958 = this.hi >>> 0x18;
          return 0x0 === _0x33e958 ? 0x0 === _0x43851a ? _0xb7c104 < 0x4000 ? _0xb7c104 < 0x80 ? 0x1 : 0x2 : _0xb7c104 < 0x200000 ? 0x3 : 0x4 : _0x43851a < 0x4000 ? _0x43851a < 0x80 ? 0x5 : 0x6 : _0x43851a < 0x200000 ? 0x7 : 0x8 : _0x33e958 < 0x80 ? 0x9 : 0xa;
        };
        _0x1bb791.exports;
      }, function () {
        return {
          '../util/minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js", function (_0x22e4b1, _0x5f0848, _0xa01a29, _0x4fdc79, _0x469a47) {
        function _0x4f3012(_0x57737c, _0x535c3a, _0x1bce53) {
          var _0x3d0bd0 = Object.keys(_0x535c3a);
          for (var _0xb12de3 = 0x0; _0xb12de3 < _0x3d0bd0.length; ++_0xb12de3) {
            if (!(undefined !== _0x57737c[_0x3d0bd0[_0xb12de3]] && _0x1bce53)) {
              _0x57737c[_0x3d0bd0[_0xb12de3]] = _0x535c3a[_0x3d0bd0[_0xb12de3]];
            }
          }
          return _0x57737c;
        }
        function _0x8d3ddc(_0x2374be) {
          function _0x24054a(_0x515767, _0x4d53be) {
            if (!(this instanceof _0x24054a)) {
              return new _0x24054a(_0x515767, _0x4d53be);
            }
            Object.defineProperty(this, "message", {
              'get': function () {
                return _0x515767;
              }
            });
            if (Error.captureStackTrace) {
              Error.captureStackTrace(this, _0x24054a);
            } else {
              Object.defineProperty(this, 'stack', {
                'value': new Error().stack || ''
              });
            }
            if (_0x4d53be) {
              _0x4f3012(this, _0x4d53be);
            }
          }
          (_0x24054a.prototype = Object.create(Error.prototype)).constructor = _0x24054a;
          Object.defineProperty(_0x24054a.prototype, 'name', {
            'get': function () {
              return _0x2374be;
            }
          });
          _0x24054a.prototype.toString = function () {
            return this.name + ": " + this.message;
          };
          return _0x24054a;
        }
        _0x22e4b1.asPromise = _0x5f0848("@protobufjs/aspromise");
        _0x22e4b1.base64 = _0x5f0848("@protobufjs/base64");
        _0x22e4b1.EventEmitter = _0x5f0848("@protobufjs/eventemitter");
        _0x22e4b1.float = _0x5f0848('@protobufjs/float');
        _0x22e4b1.inquire = _0x5f0848("@protobufjs/inquire");
        _0x22e4b1.utf8 = _0x5f0848("@protobufjs/utf8");
        _0x22e4b1.pool = _0x5f0848("@protobufjs/pool");
        _0x22e4b1.LongBits = _0x5f0848("./longbits");
        _0x22e4b1.isNode = Boolean("undefined" != typeof global && global && global.process && global.process.versions && global.process.versions.node);
        _0x22e4b1.global = _0x22e4b1.isNode && global || "undefined" != typeof window && window || "undefined" != typeof self && self || this;
        _0x22e4b1.emptyArray = Object.freeze ? Object.freeze([]) : [];
        _0x22e4b1.emptyObject = Object.freeze ? Object.freeze({}) : {};
        _0x22e4b1.isInteger = Number.isInteger || function (_0x2fca17) {
          return "number" == typeof _0x2fca17 && isFinite(_0x2fca17) && Math.floor(_0x2fca17) === _0x2fca17;
        };
        _0x22e4b1.isString = function (_0x72f955) {
          return "string" == typeof _0x72f955 || _0x72f955 instanceof String;
        };
        _0x22e4b1.isObject = function (_0x4ca8b1) {
          return _0x4ca8b1 && "object" == typeof _0x4ca8b1;
        };
        _0x22e4b1.isset = _0x22e4b1.isSet = function (_0x391dae, _0xcd21d9) {
          var _0x1a0b29 = _0x391dae[_0xcd21d9];
          return !(null == _0x1a0b29 || !_0x391dae.hasOwnProperty(_0xcd21d9)) && ("object" != typeof _0x1a0b29 || (Array.isArray(_0x1a0b29) ? _0x1a0b29.length : Object.keys(_0x1a0b29).length) > 0x0);
        };
        _0x22e4b1.Buffer = function () {
          try {
            var _0x6a0153 = _0x22e4b1.inquire("buffer").Buffer;
            return _0x6a0153.prototype.utf8Write ? _0x6a0153 : null;
          } catch (_0xd6bca8) {
            return null;
          }
        }();
        _0x22e4b1._Buffer_from = null;
        _0x22e4b1._Buffer_allocUnsafe = null;
        _0x22e4b1.newBuffer = function (_0x53fc2d) {
          return "number" == typeof _0x53fc2d ? _0x22e4b1.Buffer ? _0x22e4b1._Buffer_allocUnsafe(_0x53fc2d) : new _0x22e4b1.Array(_0x53fc2d) : _0x22e4b1.Buffer ? _0x22e4b1._Buffer_from(_0x53fc2d) : 'undefined' == typeof Uint8Array ? _0x53fc2d : new Uint8Array(_0x53fc2d);
        };
        _0x22e4b1.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array;
        _0x22e4b1.Long = _0x22e4b1.global.dcodeIO && _0x22e4b1.global.dcodeIO.Long || _0x22e4b1.global.Long || _0x22e4b1.inquire('long');
        _0x22e4b1.key2Re = /^true|false|0|1$/;
        _0x22e4b1.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
        _0x22e4b1.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
        _0x22e4b1.longToHash = function (_0x504941) {
          return _0x504941 ? _0x22e4b1.LongBits.from(_0x504941).toHash() : _0x22e4b1.LongBits.zeroHash;
        };
        _0x22e4b1.longFromHash = function (_0x4c3f7d, _0x49e0ff) {
          var _0xc43507 = _0x22e4b1.LongBits.fromHash(_0x4c3f7d);
          return _0x22e4b1.Long ? _0x22e4b1.Long.fromBits(_0xc43507.lo, _0xc43507.hi, _0x49e0ff) : _0xc43507.toNumber(Boolean(_0x49e0ff));
        };
        _0x22e4b1.merge = _0x4f3012;
        _0x22e4b1.lcFirst = function (_0x48d7cc) {
          return _0x48d7cc.charAt(0x0).toLowerCase() + _0x48d7cc.substring(0x1);
        };
        _0x22e4b1.newError = _0x8d3ddc;
        _0x22e4b1.ProtocolError = _0x8d3ddc('ProtocolError');
        _0x22e4b1.oneOfGetter = function (_0x44ea47) {
          var _0x4ee89d = {};
          for (var _0x1c9b2d = 0x0; _0x1c9b2d < _0x44ea47.length; ++_0x1c9b2d) {
            _0x4ee89d[_0x44ea47[_0x1c9b2d]] = 0x1;
          }
          return function () {
            var _0x25c060 = Object.keys(this);
            for (var _0x2dac9b = _0x25c060.length - 0x1; _0x2dac9b > -0x1; --_0x2dac9b) {
              if (0x1 === _0x4ee89d[_0x25c060[_0x2dac9b]] && undefined !== this[_0x25c060[_0x2dac9b]] && null !== this[_0x25c060[_0x2dac9b]]) {
                return _0x25c060[_0x2dac9b];
              }
            }
          };
        };
        _0x22e4b1.oneOfSetter = function (_0x5a4e8) {
          return function (_0x10038d) {
            for (var _0x81eb1d = 0x0; _0x81eb1d < _0x5a4e8.length; ++_0x81eb1d) {
              if (_0x5a4e8[_0x81eb1d] !== _0x10038d) {
                delete this[_0x5a4e8[_0x81eb1d]];
              }
            }
          };
        };
        _0x22e4b1.toJSONOptions = {
          'longs': String,
          'enums': String,
          'bytes': String,
          'json': true
        };
        _0x22e4b1._configure = function () {
          var _0x4fceef = _0x22e4b1.Buffer;
          if (_0x4fceef) {
            _0x22e4b1._Buffer_from = _0x4fceef.from !== Uint8Array.from && _0x4fceef.from || function (_0x57832c, _0x3d6268) {
              return new _0x4fceef(_0x57832c, _0x3d6268);
            };
            _0x22e4b1._Buffer_allocUnsafe = _0x4fceef.allocUnsafe || function (_0x88cb0a) {
              return new _0x4fceef(_0x88cb0a);
            };
          } else {
            _0x22e4b1._Buffer_from = _0x22e4b1._Buffer_allocUnsafe = null;
          }
        };
        _0xa01a29.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          '@protobufjs/base64': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js",
          '@protobufjs/eventemitter': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js",
          '@protobufjs/float': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/@protobufjs/float/index.js",
          '@protobufjs/inquire': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js',
          '@protobufjs/utf8': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js",
          '@protobufjs/pool': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js",
          './longbits': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js"
        };
      });
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/writer.js", function (_0x1a28e5, _0x5d728c, _0xea0e9d, _0x725025, _0x44dab0) {
        _0xea0e9d.exports = _0x10522e;
        var _0x26e268;
        var _0x324ca0 = _0x5d728c('./util/minimal');
        var _0x18c736 = _0x324ca0.LongBits;
        var _0xf34457 = _0x324ca0.base64;
        var _0x14f95b = _0x324ca0.utf8;
        function _0x533a70(_0x1a9d22, _0x2ef429, _0xde3dbf) {
          this.fn = _0x1a9d22;
          this.len = _0x2ef429;
          this.next = undefined;
          this.val = _0xde3dbf;
        }
        function _0x26849b() {}
        function _0x26e35c(_0x582956) {
          this.head = _0x582956.head;
          this.tail = _0x582956.tail;
          this.len = _0x582956.len;
          this.next = _0x582956.states;
        }
        function _0x10522e() {
          this.len = 0x0;
          this.head = new _0x533a70(_0x26849b, 0x0, 0x0);
          this.tail = this.head;
          this.states = null;
        }
        var _0x5920dc = function () {
          return _0x324ca0.Buffer ? function () {
            return (_0x10522e.create = function () {
              return new _0x26e268();
            })();
          } : function () {
            return new _0x10522e();
          };
        };
        function _0x276cce(_0x1ccfdc, _0x23457e, _0x1cf3c0) {
          _0x23457e[_0x1cf3c0] = 0xff & _0x1ccfdc;
        }
        function _0x4b31a4(_0x1ea44e, _0x460b8c) {
          this.len = _0x1ea44e;
          this.next = undefined;
          this.val = _0x460b8c;
        }
        function _0x4daac3(_0x1ddaac, _0x2d9032, _0x1fd888) {
          for (; _0x1ddaac.hi;) {
            _0x2d9032[_0x1fd888++] = 0x7f & _0x1ddaac.lo | 0x80;
            _0x1ddaac.lo = (_0x1ddaac.lo >>> 0x7 | _0x1ddaac.hi << 0x19) >>> 0x0;
            _0x1ddaac.hi >>>= 0x7;
          }
          for (; _0x1ddaac.lo > 0x7f;) {
            _0x2d9032[_0x1fd888++] = 0x7f & _0x1ddaac.lo | 0x80;
            _0x1ddaac.lo = _0x1ddaac.lo >>> 0x7;
          }
          _0x2d9032[_0x1fd888++] = _0x1ddaac.lo;
        }
        function _0x1f9573(_0x3180a5, _0x57aca8, _0xf3969d) {
          _0x57aca8[_0xf3969d] = 0xff & _0x3180a5;
          _0x57aca8[_0xf3969d + 0x1] = _0x3180a5 >>> 0x8 & 0xff;
          _0x57aca8[_0xf3969d + 0x2] = _0x3180a5 >>> 0x10 & 0xff;
          _0x57aca8[_0xf3969d + 0x3] = _0x3180a5 >>> 0x18;
        }
        _0x10522e.create = _0x5920dc();
        _0x10522e.alloc = function (_0x2b2a94) {
          return new _0x324ca0.Array(_0x2b2a94);
        };
        if (_0x324ca0.Array !== Array) {
          _0x10522e.alloc = _0x324ca0.pool(_0x10522e.alloc, _0x324ca0.Array.prototype.subarray);
        }
        _0x10522e.prototype._push = function (_0x1052d3, _0x36292c, _0xccf82d) {
          this.tail = this.tail.next = new _0x533a70(_0x1052d3, _0x36292c, _0xccf82d);
          this.len += _0x36292c;
          return this;
        };
        _0x4b31a4.prototype = Object.create(_0x533a70.prototype);
        _0x4b31a4.prototype.fn = function (_0x37bdc7, _0x5bfadb, _0x314d63) {
          for (; _0x37bdc7 > 0x7f;) {
            _0x5bfadb[_0x314d63++] = 0x7f & _0x37bdc7 | 0x80;
            _0x37bdc7 >>>= 0x7;
          }
          _0x5bfadb[_0x314d63] = _0x37bdc7;
        };
        _0x10522e.prototype.uint32 = function (_0x36ab55) {
          this.len += (this.tail = this.tail.next = new _0x4b31a4((_0x36ab55 >>>= 0x0) < 0x80 ? 0x1 : _0x36ab55 < 0x4000 ? 0x2 : _0x36ab55 < 0x200000 ? 0x3 : _0x36ab55 < 0x10000000 ? 0x4 : 0x5, _0x36ab55)).len;
          return this;
        };
        _0x10522e.prototype.int32 = function (_0x19f3f7) {
          return _0x19f3f7 < 0x0 ? this._push(_0x4daac3, 0xa, _0x18c736.fromNumber(_0x19f3f7)) : this.uint32(_0x19f3f7);
        };
        _0x10522e.prototype.sint32 = function (_0x44c069) {
          return this.uint32((_0x44c069 << 0x1 ^ _0x44c069 >> 0x1f) >>> 0x0);
        };
        _0x10522e.prototype.uint64 = function (_0x1d6c40) {
          var _0x11c9ca = _0x18c736.from(_0x1d6c40);
          return this._push(_0x4daac3, _0x11c9ca.length(), _0x11c9ca);
        };
        _0x10522e.prototype.int64 = _0x10522e.prototype.uint64;
        _0x10522e.prototype.sint64 = function (_0x3e483b) {
          var _0xc46e34 = _0x18c736.from(_0x3e483b).zzEncode();
          return this._push(_0x4daac3, _0xc46e34.length(), _0xc46e34);
        };
        _0x10522e.prototype.bool = function (_0x3c5365) {
          return this._push(_0x276cce, 0x1, _0x3c5365 ? 0x1 : 0x0);
        };
        _0x10522e.prototype.fixed32 = function (_0x5c03a1) {
          return this._push(_0x1f9573, 0x4, _0x5c03a1 >>> 0x0);
        };
        _0x10522e.prototype.sfixed32 = _0x10522e.prototype.fixed32;
        _0x10522e.prototype.fixed64 = function (_0x3e6b1c) {
          var _0x2d44c6 = _0x18c736.from(_0x3e6b1c);
          return this._push(_0x1f9573, 0x4, _0x2d44c6.lo)._push(_0x1f9573, 0x4, _0x2d44c6.hi);
        };
        _0x10522e.prototype.sfixed64 = _0x10522e.prototype.fixed64;
        _0x10522e.prototype.float = function (_0x244460) {
          return this._push(_0x324ca0.float.writeFloatLE, 0x4, _0x244460);
        };
        _0x10522e.prototype.double = function (_0x23cc49) {
          return this._push(_0x324ca0.float.writeDoubleLE, 0x8, _0x23cc49);
        };
        var _0x91b65c = _0x324ca0.Array.prototype.set ? function (_0x508fdb, _0xb36711, _0x1601cb) {
          _0xb36711.set(_0x508fdb, _0x1601cb);
        } : function (_0x569c87, _0x408fdb, _0x5eab6c) {
          for (var _0xe782dc = 0x0; _0xe782dc < _0x569c87.length; ++_0xe782dc) {
            _0x408fdb[_0x5eab6c + _0xe782dc] = _0x569c87[_0xe782dc];
          }
        };
        _0x10522e.prototype.bytes = function (_0x1b82a1) {
          var _0x2e9a04 = _0x1b82a1.length >>> 0x0;
          if (!_0x2e9a04) {
            return this._push(_0x276cce, 0x1, 0x0);
          }
          if (_0x324ca0.isString(_0x1b82a1)) {
            var _0x290ff9 = _0x10522e.alloc(_0x2e9a04 = _0xf34457.length(_0x1b82a1));
            _0xf34457.decode(_0x1b82a1, _0x290ff9, 0x0);
            _0x1b82a1 = _0x290ff9;
          }
          return this.uint32(_0x2e9a04)._push(_0x91b65c, _0x2e9a04, _0x1b82a1);
        };
        _0x10522e.prototype.string = function (_0x49728c) {
          var _0x332413 = _0x14f95b.length(_0x49728c);
          return _0x332413 ? this.uint32(_0x332413)._push(_0x14f95b.write, _0x332413, _0x49728c) : this._push(_0x276cce, 0x1, 0x0);
        };
        _0x10522e.prototype.fork = function () {
          this.states = new _0x26e35c(this);
          this.head = this.tail = new _0x533a70(_0x26849b, 0x0, 0x0);
          this.len = 0x0;
          return this;
        };
        _0x10522e.prototype.reset = function () {
          if (this.states) {
            this.head = this.states.head;
            this.tail = this.states.tail;
            this.len = this.states.len;
            this.states = this.states.next;
          } else {
            this.head = this.tail = new _0x533a70(_0x26849b, 0x0, 0x0);
            this.len = 0x0;
          }
          return this;
        };
        _0x10522e.prototype.ldelim = function () {
          var _0xca47ec = this.head;
          var _0x32282d = this.tail;
          var _0x27352f = this.len;
          this.reset().uint32(_0x27352f);
          if (_0x27352f) {
            this.tail.next = _0xca47ec.next;
            this.tail = _0x32282d;
            this.len += _0x27352f;
          }
          return this;
        };
        _0x10522e.prototype.finish = function () {
          var _0x22a822 = this.head.next;
          var _0x494c64 = this.constructor.alloc(this.len);
          for (var _0x5bb99f = 0x0; _0x22a822;) {
            _0x22a822.fn(_0x22a822.val, _0x494c64, _0x5bb99f);
            _0x5bb99f += _0x22a822.len;
            _0x22a822 = _0x22a822.next;
          }
          return _0x494c64;
        };
        _0x10522e._configure = function (_0xc718cf) {
          _0x26e268 = _0xc718cf;
          _0x10522e.create = _0x5920dc();
          _0x26e268._configure();
        };
        _0xea0e9d.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x2f4fd2.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js', function (_0x293312, _0xc29568, _0x3e37c4, _0x5e1e45, _0x34f6c6) {
        _0x3e37c4.exports = _0xb31f91;
        var _0x5c4f55 = _0xc29568("./writer");
        (_0xb31f91.prototype = Object.create(_0x5c4f55.prototype)).constructor = _0xb31f91;
        var _0x2713e4 = _0xc29568("./util/minimal");
        function _0xb31f91() {
          _0x5c4f55.call(this);
        }
        function _0x5aa018(_0x40df44, _0x2af45c, _0x1a2e3a) {
          if (_0x40df44.length < 0x28) {
            _0x2713e4.utf8.write(_0x40df44, _0x2af45c, _0x1a2e3a);
          } else if (_0x2af45c.utf8Write) {
            _0x2af45c.utf8Write(_0x40df44, _0x1a2e3a);
          } else {
            _0x2af45c.write(_0x40df44, _0x1a2e3a);
          }
        }
        _0xb31f91._configure = function () {
          _0xb31f91.alloc = _0x2713e4._Buffer_allocUnsafe;
          _0xb31f91.writeBytesBuffer = _0x2713e4.Buffer && _0x2713e4.Buffer.prototype instanceof Uint8Array && "set" === _0x2713e4.Buffer.prototype.set.name ? function (_0x23a063, _0x222fc6, _0x349ae0) {
            _0x222fc6.set(_0x23a063, _0x349ae0);
          } : function (_0x5422e8, _0x5eb4c1, _0x2b8ec7) {
            if (_0x5422e8.copy) {
              _0x5422e8.copy(_0x5eb4c1, _0x2b8ec7, 0x0, _0x5422e8.length);
            } else {
              for (var _0x1f95af = 0x0; _0x1f95af < _0x5422e8.length;) {
                _0x5eb4c1[_0x2b8ec7++] = _0x5422e8[_0x1f95af++];
              }
            }
          };
        };
        _0xb31f91.prototype.bytes = function (_0xdcc703) {
          if (_0x2713e4.isString(_0xdcc703)) {
            _0xdcc703 = _0x2713e4._Buffer_from(_0xdcc703, "base64");
          }
          var _0x177997 = _0xdcc703.length >>> 0x0;
          this.uint32(_0x177997);
          if (_0x177997) {
            this._push(_0xb31f91.writeBytesBuffer, _0x177997, _0xdcc703);
          }
          return this;
        };
        _0xb31f91.prototype.string = function (_0x524376) {
          var _0x2eb8e4 = _0x2713e4.Buffer.byteLength(_0x524376);
          this.uint32(_0x2eb8e4);
          if (_0x2eb8e4) {
            this._push(_0x5aa018, _0x2eb8e4, _0x524376);
          }
          return this;
        };
        _0xb31f91._configure();
        _0x3e37c4.exports;
      }, function () {
        return {
          './writer': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './util/minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/reader.js", function (_0x2232d6, _0xcdaa44, _0x1573be, _0x5e8f0e, _0x3f9d90) {
        _0x1573be.exports = _0x5cd254;
        var _0x1990bb;
        var _0x4949fb = _0xcdaa44("./util/minimal");
        var _0x7398df = _0x4949fb.LongBits;
        var _0x2f4261 = _0x4949fb.utf8;
        function _0x5cd254(_0xfd16d8) {
          this.buf = _0xfd16d8;
          this.pos = 0x0;
          this.len = _0xfd16d8.length;
        }
        var _0x48e6d2;
        var _0x56e113 = "undefined" != typeof Uint8Array ? function (_0x45b0b6) {
          if (_0x45b0b6 instanceof Uint8Array || Array.isArray(_0x45b0b6)) {
            return new _0x5cd254(_0x45b0b6);
          }
          throw Error("illegal buffer");
        } : function (_0xd10ed0) {
          if (Array.isArray(_0xd10ed0)) {
            return new _0x5cd254(_0xd10ed0);
          }
          throw Error("illegal buffer");
        };
        var _0x486dd1 = function () {
          return _0x4949fb.Buffer ? function (_0x361078) {
            return (_0x5cd254.create = function (_0x3b3698) {
              return _0x4949fb.Buffer.isBuffer(_0x3b3698) ? new _0x1990bb(_0x3b3698) : _0x56e113(_0x3b3698);
            })(_0x361078);
          } : _0x56e113;
        };
        function _0x1013e9() {
          var _0x55a6fd = new _0x7398df(0x0, 0x0);
          var _0x515c0b = 0x0;
          if (!(this.len - this.pos > 0x4)) {
            for (; _0x515c0b < 0x3; ++_0x515c0b) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0x55a6fd.lo = (_0x55a6fd.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0x515c0b) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x55a6fd;
              }
            }
            _0x55a6fd.lo = (_0x55a6fd.lo | (0x7f & this.buf[this.pos++]) << 0x7 * _0x515c0b) >>> 0x0;
            return _0x55a6fd;
          }
          for (; _0x515c0b < 0x4; ++_0x515c0b) {
            _0x55a6fd.lo = (_0x55a6fd.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0x515c0b) >>> 0x0;
            if (this.buf[this.pos++] < 0x80) {
              return _0x55a6fd;
            }
          }
          _0x55a6fd.lo = (_0x55a6fd.lo | (0x7f & this.buf[this.pos]) << 0x1c) >>> 0x0;
          _0x55a6fd.hi = (_0x55a6fd.hi | (0x7f & this.buf[this.pos]) >> 0x4) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x55a6fd;
          }
          _0x515c0b = 0x0;
          if (this.len - this.pos > 0x4) {
            for (; _0x515c0b < 0x5; ++_0x515c0b) {
              _0x55a6fd.hi = (_0x55a6fd.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0x515c0b + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x55a6fd;
              }
            }
          } else {
            for (; _0x515c0b < 0x5; ++_0x515c0b) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0x55a6fd.hi = (_0x55a6fd.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0x515c0b + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x55a6fd;
              }
            }
          }
          throw Error("invalid varint encoding");
        }
        function _0x3c4a58() {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x8 || 0x1) + " > " + this.len);
          }
          return new _0x7398df((this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0, (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0);
        }
        _0x5cd254.create = _0x486dd1();
        _0x5cd254.prototype._slice = _0x4949fb.Array.prototype.subarray || _0x4949fb.Array.prototype.slice;
        _0x48e6d2 = 0xffffffff;
        _0x5cd254.prototype.uint32 = function () {
          _0x48e6d2 = (0x7f & this.buf[this.pos]) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x48e6d2;
          }
          _0x48e6d2 = (_0x48e6d2 | (0x7f & this.buf[this.pos]) << 0x7) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x48e6d2;
          }
          _0x48e6d2 = (_0x48e6d2 | (0x7f & this.buf[this.pos]) << 0xe) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x48e6d2;
          }
          _0x48e6d2 = (_0x48e6d2 | (0x7f & this.buf[this.pos]) << 0x15) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x48e6d2;
          }
          _0x48e6d2 = (_0x48e6d2 | (0xf & this.buf[this.pos]) << 0x1c) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x48e6d2;
          }
          if ((this.pos += 0x5) > this.len) {
            this.pos = this.len;
            throw RangeError("index out of range: " + this.pos + " + " + (0xa || 0x1) + " > " + this.len);
          }
          return _0x48e6d2;
        };
        _0x5cd254.prototype.int32 = function () {
          return 0x0 | this.uint32();
        };
        _0x5cd254.prototype.sint32 = function () {
          var _0x510695 = this.uint32();
          return _0x510695 >>> 0x1 ^ -(0x1 & _0x510695) | 0x0;
        };
        _0x5cd254.prototype.bool = function () {
          return 0x0 !== this.uint32();
        };
        _0x5cd254.prototype.fixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0x5cd254.prototype.sfixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return 0x0 | (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0x5cd254.prototype.float = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x99bcf9 = _0x4949fb.float.readFloatLE(this.buf, this.pos);
          this.pos += 0x4;
          return _0x99bcf9;
        };
        _0x5cd254.prototype.double = function () {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x19ee5b = _0x4949fb.float.readDoubleLE(this.buf, this.pos);
          this.pos += 0x8;
          return _0x19ee5b;
        };
        _0x5cd254.prototype.bytes = function () {
          var _0xc9d59c = this.uint32();
          var _0x19e4a5 = this.pos;
          var _0x308480 = this.pos + _0xc9d59c;
          if (_0x308480 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (_0xc9d59c || 0x1) + " > " + this.len);
          }
          this.pos += _0xc9d59c;
          return Array.isArray(this.buf) ? this.buf.slice(_0x19e4a5, _0x308480) : _0x19e4a5 === _0x308480 ? new this.buf.constructor(0x0) : this._slice.call(this.buf, _0x19e4a5, _0x308480);
        };
        _0x5cd254.prototype.string = function () {
          var _0x484b59 = this.bytes();
          return _0x2f4261.read(_0x484b59, 0x0, _0x484b59.length);
        };
        _0x5cd254.prototype.skip = function (_0x4e3867) {
          if ("number" == typeof _0x4e3867) {
            if (this.pos + _0x4e3867 > this.len) {
              throw RangeError("index out of range: " + this.pos + " + " + (_0x4e3867 || 0x1) + " > " + this.len);
            }
            this.pos += _0x4e3867;
          } else {
            do {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
            } while (0x80 & this.buf[this.pos++]);
          }
          return this;
        };
        _0x5cd254.prototype.skipType = function (_0x44f54c) {
          switch (_0x44f54c) {
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
              for (; 0x4 != (_0x44f54c = 0x7 & this.uint32());) {
                this.skipType(_0x44f54c);
              }
              break;
            case 0x5:
              this.skip(0x4);
              break;
            default:
              throw Error("invalid wire type " + _0x44f54c + " at offset " + this.pos);
          }
          return this;
        };
        _0x5cd254._configure = function (_0x48d35d) {
          _0x1990bb = _0x48d35d;
          _0x5cd254.create = _0x486dd1();
          _0x1990bb._configure();
          var _0x4b8e2f = _0x4949fb.Long ? "toLong" : "toNumber";
          _0x4949fb.merge(_0x5cd254.prototype, {
            'int64': function () {
              return _0x1013e9.call(this)[_0x4b8e2f](false);
            },
            'uint64': function () {
              return _0x1013e9.call(this)[_0x4b8e2f](true);
            },
            'sint64': function () {
              return _0x1013e9.call(this).zzDecode()[_0x4b8e2f](false);
            },
            'fixed64': function () {
              return _0x3c4a58.call(this)[_0x4b8e2f](true);
            },
            'sfixed64': function () {
              return _0x3c4a58.call(this)[_0x4b8e2f](false);
            }
          });
        };
        _0x1573be.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js", function (_0x324e92, _0x486253, _0x478360, _0x4cd27b, _0x146a48) {
        _0x478360.exports = _0x51d08b;
        var _0x4bbb6e = _0x486253("./reader");
        (_0x51d08b.prototype = Object.create(_0x4bbb6e.prototype)).constructor = _0x51d08b;
        var _0xf2f91 = _0x486253("./util/minimal");
        function _0x51d08b(_0x38be52) {
          _0x4bbb6e.call(this, _0x38be52);
        }
        _0x51d08b._configure = function () {
          if (_0xf2f91.Buffer) {
            _0x51d08b.prototype._slice = _0xf2f91.Buffer.prototype.slice;
          }
        };
        _0x51d08b.prototype.string = function () {
          var _0x2faea8 = this.uint32();
          return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + _0x2faea8, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + _0x2faea8, this.len));
        };
        _0x51d08b._configure();
        _0x478360.exports;
      }, function () {
        return {
          './reader': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './util/minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js", function (_0x5ef54b, _0x246d49, _0x56acc7, _0x5d6abe, _0x295072) {
        _0x56acc7.exports = _0x255ef0;
        var _0x688074 = _0x246d49("../util/minimal");
        function _0x255ef0(_0x946c2b, _0xdd95a6, _0x579826) {
          if ('function' != typeof _0x946c2b) {
            throw TypeError("rpcImpl must be a function");
          }
          _0x688074.EventEmitter.call(this);
          this.rpcImpl = _0x946c2b;
          this.requestDelimited = Boolean(_0xdd95a6);
          this.responseDelimited = Boolean(_0x579826);
        }
        (_0x255ef0.prototype = Object.create(_0x688074.EventEmitter.prototype)).constructor = _0x255ef0;
        _0x255ef0.prototype.rpcCall = function _0x20ce07(_0x2762c2, _0x41f7b6, _0x38f57d, _0x9f5c81, _0xe59e0) {
          if (!_0x9f5c81) {
            throw TypeError("request must be specified");
          }
          var _0x1162c3 = this;
          if (!_0xe59e0) {
            return _0x688074.asPromise(_0x20ce07, _0x1162c3, _0x2762c2, _0x41f7b6, _0x38f57d, _0x9f5c81);
          }
          if (_0x1162c3.rpcImpl) {
            try {
              return _0x1162c3.rpcImpl(_0x2762c2, _0x41f7b6[_0x1162c3.requestDelimited ? "encodeDelimited" : 'encode'](_0x9f5c81).finish(), function (_0x7aae1b, _0x565311) {
                if (_0x7aae1b) {
                  _0x1162c3.emit("error", _0x7aae1b, _0x2762c2);
                  return _0xe59e0(_0x7aae1b);
                }
                if (null !== _0x565311) {
                  if (!(_0x565311 instanceof _0x38f57d)) {
                    try {
                      _0x565311 = _0x38f57d[_0x1162c3.responseDelimited ? "decodeDelimited" : "decode"](_0x565311);
                    } catch (_0x1d4e24) {
                      _0x1162c3.emit('error', _0x1d4e24, _0x2762c2);
                      return _0xe59e0(_0x1d4e24);
                    }
                  }
                  _0x1162c3.emit("data", _0x565311, _0x2762c2);
                  return _0xe59e0(null, _0x565311);
                }
                _0x1162c3.end(true);
              });
            } catch (_0x4b492a) {
              _0x1162c3.emit("error", _0x4b492a, _0x2762c2);
              return void setTimeout(function () {
                _0xe59e0(_0x4b492a);
              }, 0x0);
            }
          } else {
            setTimeout(function () {
              _0xe59e0(Error("already ended"));
            }, 0x0);
          }
        };
        _0x255ef0.prototype.end = function (_0x36827b) {
          if (this.rpcImpl) {
            if (!_0x36827b) {
              this.rpcImpl(null, null, null);
            }
            this.rpcImpl = null;
            this.emit("end").off();
          }
          return this;
        };
        _0x56acc7.exports;
      }, function () {
        return {
          '../util/minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x2f4fd2.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js', function (_0x4f177e, _0x5b1dac, _0x349c13, _0x25abd6, _0x350500) {
        _0x4f177e.Service = _0x5b1dac("./rpc/service");
        _0x349c13.exports;
      }, function () {
        return {
          './rpc/service': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js"
        };
      });
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/roots.js", function (_0x14c41f, _0x35c9fe, _0x2085a9, _0x429421, _0x2a609a) {
        _0x2085a9.exports = {};
        _0x2085a9.exports;
      }, {});
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js", function (_0x4aa9f2, _0x40189b, _0x53b4aa, _0x3d3e46, _0x36ccd0) {
        function _0x216fba() {
          _0x4aa9f2.util._configure();
          _0x4aa9f2.Writer._configure(_0x4aa9f2.BufferWriter);
          _0x4aa9f2.Reader._configure(_0x4aa9f2.BufferReader);
        }
        _0x4aa9f2.build = 'minimal';
        _0x4aa9f2.Writer = _0x40189b('./writer');
        _0x4aa9f2.BufferWriter = _0x40189b('./writer_buffer');
        _0x4aa9f2.Reader = _0x40189b("./reader");
        _0x4aa9f2.BufferReader = _0x40189b("./reader_buffer");
        _0x4aa9f2.util = _0x40189b("./util/minimal");
        _0x4aa9f2.rpc = _0x40189b("./rpc");
        _0x4aa9f2.roots = _0x40189b("./roots");
        _0x4aa9f2.configure = _0x216fba;
        _0x216fba();
        _0x53b4aa.exports;
      }, function () {
        return {
          './writer': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './writer_buffer': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js',
          './reader': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './reader_buffer': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js",
          './util/minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          './rpc': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js',
          './roots': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/roots.js"
        };
      });
      var _0x21afb0;
      _0x2f4fd2.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/minimal.js', function (_0x5d8d74, _0x4f1563, _0x12a8d1, _0x308a3c, _0xba6fa0) {
        _0x12a8d1.exports = _0x4f1563("./src/index-minimal");
        _0x12a8d1.exports;
      }, function () {
        return {
          './src/index-minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js"
        };
      });
      var _0x191b62;
      var _0x29a481;
      var _0x2600e6;
      var _0xa4834b;
      var _0x268407;
      var _0x55c95f;
      var _0xcaf58d;
      var _0x529fd6;
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/assets/Script/Proto/jpjProto.js", function (_0x3137ba, _0x27636c, _0x5e7f26, _0x26ca65, _0x198a8f) {
        var _0x252ab7;
        var _0x56395e = _0x27636c("protobufjs/minimal");
        var _0xbd601 = _0x56395e.Reader;
        var _0x31c6de = _0x56395e.Writer;
        var _0x1906fd = _0x56395e.util;
        var _0xd2b52 = _0x56395e.roots['default'] || (_0x56395e.roots['default'] = {});
        (_0x252ab7 = {
          "Single": function () {
            function _0x2a5215(_0x3d1d3d) {
              this.Col = [];
              if (_0x3d1d3d) {
                var _0x22ad61 = Object.keys(_0x3d1d3d);
                for (var _0x3b1ede = 0x0; _0x3b1ede < _0x22ad61.length; ++_0x3b1ede) {
                  if (null != _0x3d1d3d[_0x22ad61[_0x3b1ede]]) {
                    this[_0x22ad61[_0x3b1ede]] = _0x3d1d3d[_0x22ad61[_0x3b1ede]];
                  }
                }
              }
            }
            _0x2a5215.prototype.Col = _0x1906fd.emptyArray;
            _0x2a5215.encode = function (_0x25067d, _0x4b07a1) {
              if (!_0x4b07a1) {
                _0x4b07a1 = _0x31c6de.create();
              }
              if (null != _0x25067d.Col && _0x25067d.Col.length) {
                for (var _0xf592b1 = 0x0; _0xf592b1 < _0x25067d.Col.length; ++_0xf592b1) {
                  _0xd2b52.jpjProto.Column.encode(_0x25067d.Col[_0xf592b1], _0x4b07a1.uint32(0xa).fork()).ldelim();
                }
              }
              return _0x4b07a1;
            };
            _0x2a5215.decode = function (_0x265121, _0x38124e) {
              if (!(_0x265121 instanceof _0xbd601)) {
                _0x265121 = _0xbd601.create(_0x265121);
              }
              var _0x1ccbee = undefined === _0x38124e ? _0x265121.len : _0x265121.pos + _0x38124e;
              for (var _0x14e734 = new _0xd2b52.jpjProto.Single(); _0x265121.pos < _0x1ccbee;) {
                var _0x3ba400 = _0x265121.uint32();
                switch (_0x3ba400 >>> 0x3) {
                  case 0x1:
                    if (!(_0x14e734.Col && _0x14e734.Col.length)) {
                      _0x14e734.Col = [];
                    }
                    _0x14e734.Col.push(_0xd2b52.jpjProto.Column.decode(_0x265121, _0x265121.uint32()));
                    break;
                  default:
                    _0x265121.skipType(0x7 & _0x3ba400);
                }
              }
              return _0x14e734;
            };
            _0x2a5215.getTypeUrl = function (_0x530905) {
              if (undefined === _0x530905) {
                _0x530905 = 'type.googleapis.com';
              }
              return _0x530905 + "/jpjProto.Single";
            };
            return _0x2a5215;
          }(),
          "AwardData": function () {
            function _0x20d85d(_0x3c4162) {
              if (_0x3c4162) {
                var _0x4e3aea = Object.keys(_0x3c4162);
                for (var _0x5e9479 = 0x0; _0x5e9479 < _0x4e3aea.length; ++_0x5e9479) {
                  if (null != _0x3c4162[_0x4e3aea[_0x5e9479]]) {
                    this[_0x4e3aea[_0x5e9479]] = _0x3c4162[_0x4e3aea[_0x5e9479]];
                  }
                }
              }
            }
            _0x20d85d.prototype.Symbol = 0x0;
            _0x20d85d.prototype.Line = 0x0;
            _0x20d85d.prototype.Win = 0x0;
            _0x20d85d.encode = function (_0x5445d0, _0x2a1e25) {
              if (!_0x2a1e25) {
                _0x2a1e25 = _0x31c6de.create();
              }
              if (null != _0x5445d0.Symbol && Object.hasOwnProperty.call(_0x5445d0, "Symbol")) {
                _0x2a1e25.uint32(0x8).int32(_0x5445d0.Symbol);
              }
              if (null != _0x5445d0.Line && Object.hasOwnProperty.call(_0x5445d0, "Line")) {
                _0x2a1e25.uint32(0x10).int32(_0x5445d0.Line);
              }
              if (null != _0x5445d0.Win && Object.hasOwnProperty.call(_0x5445d0, "Win")) {
                _0x2a1e25.uint32(0x19).double(_0x5445d0.Win);
              }
              return _0x2a1e25;
            };
            _0x20d85d.decode = function (_0xaf8ca, _0x13aa0a) {
              if (!(_0xaf8ca instanceof _0xbd601)) {
                _0xaf8ca = _0xbd601.create(_0xaf8ca);
              }
              var _0x4e7335 = undefined === _0x13aa0a ? _0xaf8ca.len : _0xaf8ca.pos + _0x13aa0a;
              for (var _0x319706 = new _0xd2b52.jpjProto.AwardData(); _0xaf8ca.pos < _0x4e7335;) {
                var _0x25b6dc = _0xaf8ca.uint32();
                switch (_0x25b6dc >>> 0x3) {
                  case 0x1:
                    _0x319706.Symbol = _0xaf8ca.int32();
                    break;
                  case 0x2:
                    _0x319706.Line = _0xaf8ca.int32();
                    break;
                  case 0x3:
                    _0x319706.Win = _0xaf8ca.double();
                    break;
                  default:
                    _0xaf8ca.skipType(0x7 & _0x25b6dc);
                }
              }
              return _0x319706;
            };
            _0x20d85d.getTypeUrl = function (_0x4be7c1) {
              if (undefined === _0x4be7c1) {
                _0x4be7c1 = "type.googleapis.com";
              }
              return _0x4be7c1 + "/jpjProto.AwardData";
            };
            return _0x20d85d;
          }(),
          "SpinAck": function () {
            function _0x455d1b(_0x4ac87d) {
              this.PlateSymbol = [];
              this.PlateMult = [];
              this.AwardDataVec = [];
              if (_0x4ac87d) {
                var _0x3e3f9d = Object.keys(_0x4ac87d);
                for (var _0x458b13 = 0x0; _0x458b13 < _0x3e3f9d.length; ++_0x458b13) {
                  if (null != _0x4ac87d[_0x3e3f9d[_0x458b13]]) {
                    this[_0x3e3f9d[_0x458b13]] = _0x4ac87d[_0x3e3f9d[_0x458b13]];
                  }
                }
              }
            }
            _0x455d1b.prototype.PlateSymbol = _0x1906fd.emptyArray;
            _0x455d1b.prototype.PlateMult = _0x1906fd.emptyArray;
            _0x455d1b.prototype.AwardDataVec = _0x1906fd.emptyArray;
            _0x455d1b.prototype.JpType = 0x0;
            _0x455d1b.prototype.JPMul = 0x0;
            _0x455d1b.prototype.JPWin = 0x0;
            _0x455d1b.prototype.Mult = 0x0;
            _0x455d1b.prototype.Extra = false;
            _0x455d1b.prototype.CanBuy = false;
            _0x455d1b.prototype.CanBuyRate = 0x0;
            _0x455d1b.prototype.ReSpinSymbol = 0x0;
            _0x455d1b.prototype.ReSpinColumn = 0x0;
            _0x455d1b.prototype.AwardTypeFlag = 0x0;
            _0x455d1b.prototype.TotalWin = 0x0;
            _0x455d1b.prototype.ShowIndex = '';
            _0x455d1b.prototype.NowMoney = 0x0;
            _0x455d1b.prototype.AckType = 0x0;
            _0x455d1b.prototype.IsBuy = false;
            _0x455d1b.prototype.BaseBet = 0x0;
            _0x455d1b.prototype.RTP = 0x0;
            _0x455d1b.prototype.LID = 0x0;
            _0x455d1b.prototype.RID = 0x0;
            _0x455d1b.encode = function (_0x54171e, _0x143a94) {
              if (!_0x143a94) {
                _0x143a94 = _0x31c6de.create();
              }
              if (null != _0x54171e.PlateSymbol && _0x54171e.PlateSymbol.length) {
                for (var _0x1446f8 = 0x0; _0x1446f8 < _0x54171e.PlateSymbol.length; ++_0x1446f8) {
                  _0xd2b52.jpjProto.Single.encode(_0x54171e.PlateSymbol[_0x1446f8], _0x143a94.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0x54171e.PlateMult && _0x54171e.PlateMult.length) {
                _0x143a94.uint32(0x12).fork();
                for (_0x1446f8 = 0x0; _0x1446f8 < _0x54171e.PlateMult.length; ++_0x1446f8) {
                  _0x143a94.int32(_0x54171e.PlateMult[_0x1446f8]);
                }
                _0x143a94.ldelim();
              }
              if (null != _0x54171e.AwardDataVec && _0x54171e.AwardDataVec.length) {
                for (_0x1446f8 = 0x0; _0x1446f8 < _0x54171e.AwardDataVec.length; ++_0x1446f8) {
                  _0xd2b52.jpjProto.AwardData.encode(_0x54171e.AwardDataVec[_0x1446f8], _0x143a94.uint32(0x1a).fork()).ldelim();
                }
              }
              if (null != _0x54171e.JpType && Object.hasOwnProperty.call(_0x54171e, "JpType")) {
                _0x143a94.uint32(0x20).int32(_0x54171e.JpType);
              }
              if (null != _0x54171e.JPMul && Object.hasOwnProperty.call(_0x54171e, "JPMul")) {
                _0x143a94.uint32(0x29).double(_0x54171e.JPMul);
              }
              if (null != _0x54171e.JPWin && Object.hasOwnProperty.call(_0x54171e, "JPWin")) {
                _0x143a94.uint32(0x31).double(_0x54171e.JPWin);
              }
              if (null != _0x54171e.Mult && Object.hasOwnProperty.call(_0x54171e, 'Mult')) {
                _0x143a94.uint32(0x39).double(_0x54171e.Mult);
              }
              if (null != _0x54171e.Extra && Object.hasOwnProperty.call(_0x54171e, "Extra")) {
                _0x143a94.uint32(0x40).bool(_0x54171e.Extra);
              }
              if (null != _0x54171e.AwardTypeFlag && Object.hasOwnProperty.call(_0x54171e, "AwardTypeFlag")) {
                _0x143a94.uint32(0x48).int32(_0x54171e.AwardTypeFlag);
              }
              if (null != _0x54171e.TotalWin && Object.hasOwnProperty.call(_0x54171e, "TotalWin")) {
                _0x143a94.uint32(0x51).double(_0x54171e.TotalWin);
              }
              if (null != _0x54171e.ShowIndex && Object.hasOwnProperty.call(_0x54171e, "ShowIndex")) {
                _0x143a94.uint32(0x5a).string(_0x54171e.ShowIndex);
              }
              if (null != _0x54171e.NowMoney && Object.hasOwnProperty.call(_0x54171e, "NowMoney")) {
                _0x143a94.uint32(0x61).double(_0x54171e.NowMoney);
              }
              if (null != _0x54171e.AckType && Object.hasOwnProperty.call(_0x54171e, "AckType")) {
                _0x143a94.uint32(0x68).int32(_0x54171e.AckType);
              }
              if (null != _0x54171e.CanBuy && Object.hasOwnProperty.call(_0x54171e, "CanBuy")) {
                _0x143a94.uint32(0x70).bool(_0x54171e.CanBuy);
              }
              if (null != _0x54171e.CanBuyRate && Object.hasOwnProperty.call(_0x54171e, "CanBuyRate")) {
                _0x143a94.uint32(0x79).double(_0x54171e.CanBuyRate);
              }
              if (null != _0x54171e.RTP && Object.hasOwnProperty.call(_0x54171e, "RTP")) {
                _0x143a94.uint32(0x81).double(_0x54171e.RTP);
              }
              if (null != _0x54171e.IsBuy && Object.hasOwnProperty.call(_0x54171e, "IsBuy")) {
                _0x143a94.uint32(0x88).bool(_0x54171e.IsBuy);
              }
              if (null != _0x54171e.ReSpinSymbol && Object.hasOwnProperty.call(_0x54171e, "ReSpinSymbol")) {
                _0x143a94.uint32(0x90).int32(_0x54171e.ReSpinSymbol);
              }
              if (null != _0x54171e.ReSpinColumn && Object.hasOwnProperty.call(_0x54171e, "ReSpinColumn")) {
                _0x143a94.uint32(0x98).int32(_0x54171e.ReSpinColumn);
              }
              if (null != _0x54171e.BaseBet && Object.hasOwnProperty.call(_0x54171e, "BaseBet")) {
                _0x143a94.uint32(0xa1).double(_0x54171e.BaseBet);
              }
              if (null != _0x54171e.LID && Object.hasOwnProperty.call(_0x54171e, "LID")) {
                _0x143a94.uint32(0xa8).int32(_0x54171e.LID);
              }
              if (null != _0x54171e.RID && Object.hasOwnProperty.call(_0x54171e, "RID")) {
                _0x143a94.uint32(0xb0).int32(_0x54171e.RID);
              }
              return _0x143a94;
            };
            _0x455d1b.decode = function (_0x95ae5f, _0x1c06a8) {
              if (!(_0x95ae5f instanceof _0xbd601)) {
                _0x95ae5f = _0xbd601.create(_0x95ae5f);
              }
              var _0x574f4d = undefined === _0x1c06a8 ? _0x95ae5f.len : _0x95ae5f.pos + _0x1c06a8;
              for (var _0x19b5f0 = new _0xd2b52.jpjProto.SpinAck(); _0x95ae5f.pos < _0x574f4d;) {
                var _0x1e51d1 = _0x95ae5f.uint32();
                switch (_0x1e51d1 >>> 0x3) {
                  case 0x1:
                    if (!(_0x19b5f0.PlateSymbol && _0x19b5f0.PlateSymbol.length)) {
                      _0x19b5f0.PlateSymbol = [];
                    }
                    _0x19b5f0.PlateSymbol.push(_0xd2b52.jpjProto.Single.decode(_0x95ae5f, _0x95ae5f.uint32()));
                    break;
                  case 0x2:
                    if (!(_0x19b5f0.PlateMult && _0x19b5f0.PlateMult.length)) {
                      _0x19b5f0.PlateMult = [];
                    }
                    if (0x2 == (0x7 & _0x1e51d1)) {
                      for (var _0x27eed7 = _0x95ae5f.uint32() + _0x95ae5f.pos; _0x95ae5f.pos < _0x27eed7;) {
                        _0x19b5f0.PlateMult.push(_0x95ae5f.int32());
                      }
                    } else {
                      _0x19b5f0.PlateMult.push(_0x95ae5f.int32());
                    }
                    break;
                  case 0x3:
                    if (!(_0x19b5f0.AwardDataVec && _0x19b5f0.AwardDataVec.length)) {
                      _0x19b5f0.AwardDataVec = [];
                    }
                    _0x19b5f0.AwardDataVec.push(_0xd2b52.jpjProto.AwardData.decode(_0x95ae5f, _0x95ae5f.uint32()));
                    break;
                  case 0x4:
                    _0x19b5f0.JpType = _0x95ae5f.int32();
                    break;
                  case 0x5:
                    _0x19b5f0.JPMul = _0x95ae5f.double();
                    break;
                  case 0x6:
                    _0x19b5f0.JPWin = _0x95ae5f.double();
                    break;
                  case 0x7:
                    _0x19b5f0.Mult = _0x95ae5f.double();
                    break;
                  case 0x8:
                    _0x19b5f0.Extra = _0x95ae5f.bool();
                    break;
                  case 0xe:
                    _0x19b5f0.CanBuy = _0x95ae5f.bool();
                    break;
                  case 0xf:
                    _0x19b5f0.CanBuyRate = _0x95ae5f.double();
                    break;
                  case 0x12:
                    _0x19b5f0.ReSpinSymbol = _0x95ae5f.int32();
                    break;
                  case 0x13:
                    _0x19b5f0.ReSpinColumn = _0x95ae5f.int32();
                    break;
                  case 0x9:
                    _0x19b5f0.AwardTypeFlag = _0x95ae5f.int32();
                    break;
                  case 0xa:
                    _0x19b5f0.TotalWin = _0x95ae5f.double();
                    break;
                  case 0xb:
                    _0x19b5f0.ShowIndex = _0x95ae5f.string();
                    break;
                  case 0xc:
                    _0x19b5f0.NowMoney = _0x95ae5f.double();
                    break;
                  case 0xd:
                    _0x19b5f0.AckType = _0x95ae5f.int32();
                    break;
                  case 0x11:
                    _0x19b5f0.IsBuy = _0x95ae5f.bool();
                    break;
                  case 0x14:
                    _0x19b5f0.BaseBet = _0x95ae5f.double();
                    break;
                  case 0x10:
                    _0x19b5f0.RTP = _0x95ae5f.double();
                    break;
                  case 0x15:
                    _0x19b5f0.LID = _0x95ae5f.int32();
                    break;
                  case 0x16:
                    _0x19b5f0.RID = _0x95ae5f.int32();
                    break;
                  default:
                    _0x95ae5f.skipType(0x7 & _0x1e51d1);
                }
              }
              return _0x19b5f0;
            };
            _0x455d1b.getTypeUrl = function (_0x3dfc12) {
              if (undefined === _0x3dfc12) {
                _0x3dfc12 = "type.googleapis.com";
              }
              return _0x3dfc12 + "/jpjProto.SpinAck";
            };
            return _0x455d1b;
          }(),
          GameInfoData: function () {
            function _0x2cb386(_0x37c1e3) {
              this.BuyMul = [];
              this.ShowRange = [];
              this.Mul = [];
              if (_0x37c1e3) {
                var _0x4a130b = Object.keys(_0x37c1e3);
                for (var _0x53512e = 0x0; _0x53512e < _0x4a130b.length; ++_0x53512e) {
                  if (null != _0x37c1e3[_0x4a130b[_0x53512e]]) {
                    this[_0x4a130b[_0x53512e]] = _0x37c1e3[_0x4a130b[_0x53512e]];
                  }
                }
              }
            }
            _0x2cb386.prototype.BuyMul = _0x1906fd.emptyArray;
            _0x2cb386.prototype.ShowRange = _0x1906fd.emptyArray;
            _0x2cb386.prototype.Mul = _0x1906fd.emptyArray;
            _0x2cb386.encode = function (_0x42814f, _0x4d91a2) {
              if (!_0x4d91a2) {
                _0x4d91a2 = _0x31c6de.create();
              }
              if (null != _0x42814f.BuyMul && _0x42814f.BuyMul.length) {
                _0x4d91a2.uint32(0xa).fork();
                for (var _0xd07a85 = 0x0; _0xd07a85 < _0x42814f.BuyMul.length; ++_0xd07a85) {
                  _0x4d91a2.double(_0x42814f.BuyMul[_0xd07a85]);
                }
                _0x4d91a2.ldelim();
              }
              if (null != _0x42814f.ShowRange && _0x42814f.ShowRange.length) {
                for (_0xd07a85 = 0x0; _0xd07a85 < _0x42814f.ShowRange.length; ++_0xd07a85) {
                  _0xd2b52.jpjProto.SingleRange.encode(_0x42814f.ShowRange[_0xd07a85], _0x4d91a2.uint32(0x12).fork()).ldelim();
                }
              }
              if (null != _0x42814f.Mul && _0x42814f.Mul.length) {
                _0x4d91a2.uint32(0x1a).fork();
                for (_0xd07a85 = 0x0; _0xd07a85 < _0x42814f.Mul.length; ++_0xd07a85) {
                  _0x4d91a2.double(_0x42814f.Mul[_0xd07a85]);
                }
                _0x4d91a2.ldelim();
              }
              return _0x4d91a2;
            };
            _0x2cb386.decode = function (_0x1a0856, _0x1c03e0) {
              if (!(_0x1a0856 instanceof _0xbd601)) {
                _0x1a0856 = _0xbd601.create(_0x1a0856);
              }
              var _0x29fccb = undefined === _0x1c03e0 ? _0x1a0856.len : _0x1a0856.pos + _0x1c03e0;
              for (var _0x475ffd = new _0xd2b52.jpjProto.GameInfoData(); _0x1a0856.pos < _0x29fccb;) {
                var _0x2f77dd = _0x1a0856.uint32();
                switch (_0x2f77dd >>> 0x3) {
                  case 0x1:
                    if (!(_0x475ffd.BuyMul && _0x475ffd.BuyMul.length)) {
                      _0x475ffd.BuyMul = [];
                    }
                    if (0x2 == (0x7 & _0x2f77dd)) {
                      for (var _0x4d2cd0 = _0x1a0856.uint32() + _0x1a0856.pos; _0x1a0856.pos < _0x4d2cd0;) {
                        _0x475ffd.BuyMul.push(_0x1a0856.double());
                      }
                    } else {
                      _0x475ffd.BuyMul.push(_0x1a0856.double());
                    }
                    break;
                  case 0x2:
                    if (!(_0x475ffd.ShowRange && _0x475ffd.ShowRange.length)) {
                      _0x475ffd.ShowRange = [];
                    }
                    _0x475ffd.ShowRange.push(_0xd2b52.jpjProto.SingleRange.decode(_0x1a0856, _0x1a0856.uint32()));
                    break;
                  case 0x3:
                    if (!(_0x475ffd.Mul && _0x475ffd.Mul.length)) {
                      _0x475ffd.Mul = [];
                    }
                    if (0x2 == (0x7 & _0x2f77dd)) {
                      for (_0x4d2cd0 = _0x1a0856.uint32() + _0x1a0856.pos; _0x1a0856.pos < _0x4d2cd0;) {
                        _0x475ffd.Mul.push(_0x1a0856.double());
                      }
                    } else {
                      _0x475ffd.Mul.push(_0x1a0856.double());
                    }
                    break;
                  default:
                    _0x1a0856.skipType(0x7 & _0x2f77dd);
                }
              }
              return _0x475ffd;
            };
            _0x2cb386.getTypeUrl = function (_0x426c7f) {
              if (undefined === _0x426c7f) {
                _0x426c7f = 'type.googleapis.com';
              }
              return _0x426c7f + "/jpjProto.GameInfoData";
            };
            return _0x2cb386;
          }(),
          SingleRange: function () {
            function _0x276ad3(_0x1cc84f) {
              if (_0x1cc84f) {
                var _0x33d4a7 = Object.keys(_0x1cc84f);
                for (var _0x3e2370 = 0x0; _0x3e2370 < _0x33d4a7.length; ++_0x3e2370) {
                  if (null != _0x1cc84f[_0x33d4a7[_0x3e2370]]) {
                    this[_0x33d4a7[_0x3e2370]] = _0x1cc84f[_0x33d4a7[_0x3e2370]];
                  }
                }
              }
            }
            _0x276ad3.prototype.Min = 0x0;
            _0x276ad3.prototype.Max = 0x0;
            _0x276ad3.encode = function (_0xb11496, _0x95caa5) {
              if (!_0x95caa5) {
                _0x95caa5 = _0x31c6de.create();
              }
              if (null != _0xb11496.Min && Object.hasOwnProperty.call(_0xb11496, "Min")) {
                _0x95caa5.uint32(0x9).double(_0xb11496.Min);
              }
              if (null != _0xb11496.Max && Object.hasOwnProperty.call(_0xb11496, "Max")) {
                _0x95caa5.uint32(0x11).double(_0xb11496.Max);
              }
              return _0x95caa5;
            };
            _0x276ad3.decode = function (_0x505b2c, _0x11720b) {
              if (!(_0x505b2c instanceof _0xbd601)) {
                _0x505b2c = _0xbd601.create(_0x505b2c);
              }
              var _0x73849d = undefined === _0x11720b ? _0x505b2c.len : _0x505b2c.pos + _0x11720b;
              for (var _0x8a5471 = new _0xd2b52.jpjProto.SingleRange(); _0x505b2c.pos < _0x73849d;) {
                var _0x3f9a15 = _0x505b2c.uint32();
                switch (_0x3f9a15 >>> 0x3) {
                  case 0x1:
                    _0x8a5471.Min = _0x505b2c.double();
                    break;
                  case 0x2:
                    _0x8a5471.Max = _0x505b2c.double();
                    break;
                  default:
                    _0x505b2c.skipType(0x7 & _0x3f9a15);
                }
              }
              return _0x8a5471;
            };
            _0x276ad3.getTypeUrl = function (_0x9c32cb) {
              if (undefined === _0x9c32cb) {
                _0x9c32cb = "type.googleapis.com";
              }
              return _0x9c32cb + "/jpjProto.SingleRange";
            };
            return _0x276ad3;
          }(),
          "BuyReq": function () {
            function _0x388ae6(_0x4795f2) {
              if (_0x4795f2) {
                var _0x5144a9 = Object.keys(_0x4795f2);
                for (var _0x3f57a8 = 0x0; _0x3f57a8 < _0x5144a9.length; ++_0x3f57a8) {
                  if (null != _0x4795f2[_0x5144a9[_0x3f57a8]]) {
                    this[_0x5144a9[_0x3f57a8]] = _0x4795f2[_0x5144a9[_0x3f57a8]];
                  }
                }
              }
            }
            _0x388ae6.prototype.BaseBet = 0x0;
            _0x388ae6.encode = function (_0x1e3726, _0x4a2ba2) {
              if (!_0x4a2ba2) {
                _0x4a2ba2 = _0x31c6de.create();
              }
              if (null != _0x1e3726.BaseBet && Object.hasOwnProperty.call(_0x1e3726, 'BaseBet')) {
                _0x4a2ba2.uint32(0x9).double(_0x1e3726.BaseBet);
              }
              return _0x4a2ba2;
            };
            _0x388ae6.decode = function (_0x45f54b, _0x1a0659) {
              if (!(_0x45f54b instanceof _0xbd601)) {
                _0x45f54b = _0xbd601.create(_0x45f54b);
              }
              var _0x271c47 = undefined === _0x1a0659 ? _0x45f54b.len : _0x45f54b.pos + _0x1a0659;
              for (var _0x3d6c6b = new _0xd2b52.jpjProto.BuyReq(); _0x45f54b.pos < _0x271c47;) {
                var _0x296278 = _0x45f54b.uint32();
                switch (_0x296278 >>> 0x3) {
                  case 0x1:
                    _0x3d6c6b.BaseBet = _0x45f54b.double();
                    break;
                  default:
                    _0x45f54b.skipType(0x7 & _0x296278);
                }
              }
              return _0x3d6c6b;
            };
            _0x388ae6.getTypeUrl = function (_0x3ef5df) {
              if (undefined === _0x3ef5df) {
                _0x3ef5df = "type.googleapis.com";
              }
              return _0x3ef5df + "/jpjProto.BuyReq";
            };
            return _0x388ae6;
          }(),
          "StateInfo": function () {
            function _0x5ad690(_0x5821d7) {
              this.Symbol = [];
              this.Mul = [];
              if (_0x5821d7) {
                var _0x244805 = Object.keys(_0x5821d7);
                for (var _0xd87061 = 0x0; _0xd87061 < _0x244805.length; ++_0xd87061) {
                  if (null != _0x5821d7[_0x244805[_0xd87061]]) {
                    this[_0x244805[_0xd87061]] = _0x5821d7[_0x244805[_0xd87061]];
                  }
                }
              }
            }
            _0x5ad690.prototype.Symbol = _0x1906fd.emptyArray;
            _0x5ad690.prototype.Mul = _0x1906fd.emptyArray;
            _0x5ad690.prototype.Buymul = 0x0;
            _0x5ad690.encode = function (_0x5d8709, _0x4b94fb) {
              if (!_0x4b94fb) {
                _0x4b94fb = _0x31c6de.create();
              }
              if (null != _0x5d8709.Symbol && _0x5d8709.Symbol.length) {
                for (var _0x47a181 = 0x0; _0x47a181 < _0x5d8709.Symbol.length; ++_0x47a181) {
                  _0xd2b52.jpjProto.Column.encode(_0x5d8709.Symbol[_0x47a181], _0x4b94fb.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0x5d8709.Mul && _0x5d8709.Mul.length) {
                _0x4b94fb.uint32(0x12).fork();
                for (_0x47a181 = 0x0; _0x47a181 < _0x5d8709.Mul.length; ++_0x47a181) {
                  _0x4b94fb.int32(_0x5d8709.Mul[_0x47a181]);
                }
                _0x4b94fb.ldelim();
              }
              if (null != _0x5d8709.Buymul && Object.hasOwnProperty.call(_0x5d8709, "Buymul")) {
                _0x4b94fb.uint32(0x19).double(_0x5d8709.Buymul);
              }
              return _0x4b94fb;
            };
            _0x5ad690.decode = function (_0x259544, _0x4ba189) {
              if (!(_0x259544 instanceof _0xbd601)) {
                _0x259544 = _0xbd601.create(_0x259544);
              }
              var _0x32036d = undefined === _0x4ba189 ? _0x259544.len : _0x259544.pos + _0x4ba189;
              for (var _0x49f632 = new _0xd2b52.jpjProto.StateInfo(); _0x259544.pos < _0x32036d;) {
                var _0x4506c5 = _0x259544.uint32();
                switch (_0x4506c5 >>> 0x3) {
                  case 0x1:
                    if (!(_0x49f632.Symbol && _0x49f632.Symbol.length)) {
                      _0x49f632.Symbol = [];
                    }
                    _0x49f632.Symbol.push(_0xd2b52.jpjProto.Column.decode(_0x259544, _0x259544.uint32()));
                    break;
                  case 0x2:
                    if (!(_0x49f632.Mul && _0x49f632.Mul.length)) {
                      _0x49f632.Mul = [];
                    }
                    if (0x2 == (0x7 & _0x4506c5)) {
                      for (var _0x182468 = _0x259544.uint32() + _0x259544.pos; _0x259544.pos < _0x182468;) {
                        _0x49f632.Mul.push(_0x259544.int32());
                      }
                    } else {
                      _0x49f632.Mul.push(_0x259544.int32());
                    }
                    break;
                  case 0x3:
                    _0x49f632.Buymul = _0x259544.double();
                    break;
                  default:
                    _0x259544.skipType(0x7 & _0x4506c5);
                }
              }
              return _0x49f632;
            };
            _0x5ad690.getTypeUrl = function (_0x4378c8) {
              if (undefined === _0x4378c8) {
                _0x4378c8 = "type.googleapis.com";
              }
              return _0x4378c8 + "/jpjProto.StateInfo";
            };
            return _0x5ad690;
          }()
        }).Column = function () {
          function _0x4a7a7a(_0x38d7b6) {
            this.Row = [];
            if (_0x38d7b6) {
              var _0x4897c3 = Object.keys(_0x38d7b6);
              for (var _0x3a2a75 = 0x0; _0x3a2a75 < _0x4897c3.length; ++_0x3a2a75) {
                if (null != _0x38d7b6[_0x4897c3[_0x3a2a75]]) {
                  this[_0x4897c3[_0x3a2a75]] = _0x38d7b6[_0x4897c3[_0x3a2a75]];
                }
              }
            }
          }
          _0x4a7a7a.prototype.Row = _0x1906fd.emptyArray;
          _0x4a7a7a.encode = function (_0x3c4bc5, _0x32d60c) {
            if (!_0x32d60c) {
              _0x32d60c = _0x31c6de.create();
            }
            if (null != _0x3c4bc5.Row && _0x3c4bc5.Row.length) {
              _0x32d60c.uint32(0xa).fork();
              for (var _0x4e2424 = 0x0; _0x4e2424 < _0x3c4bc5.Row.length; ++_0x4e2424) {
                _0x32d60c.int32(_0x3c4bc5.Row[_0x4e2424]);
              }
              _0x32d60c.ldelim();
            }
            return _0x32d60c;
          };
          _0x4a7a7a.decode = function (_0x30e59f, _0x385fd7) {
            if (!(_0x30e59f instanceof _0xbd601)) {
              _0x30e59f = _0xbd601.create(_0x30e59f);
            }
            var _0xe051e7 = undefined === _0x385fd7 ? _0x30e59f.len : _0x30e59f.pos + _0x385fd7;
            for (var _0xa76dd7 = new _0xd2b52.jpjProto.Column(); _0x30e59f.pos < _0xe051e7;) {
              var _0x5d52ef = _0x30e59f.uint32();
              switch (_0x5d52ef >>> 0x3) {
                case 0x1:
                  if (!(_0xa76dd7.Row && _0xa76dd7.Row.length)) {
                    _0xa76dd7.Row = [];
                  }
                  if (0x2 == (0x7 & _0x5d52ef)) {
                    for (var _0x21de80 = _0x30e59f.uint32() + _0x30e59f.pos; _0x30e59f.pos < _0x21de80;) {
                      _0xa76dd7.Row.push(_0x30e59f.int32());
                    }
                  } else {
                    _0xa76dd7.Row.push(_0x30e59f.int32());
                  }
                  break;
                default:
                  _0x30e59f.skipType(0x7 & _0x5d52ef);
              }
            }
            return _0xa76dd7;
          };
          _0x4a7a7a.getTypeUrl = function (_0x50ea32) {
            if (undefined === _0x50ea32) {
              _0x50ea32 = "type.googleapis.com";
            }
            return _0x50ea32 + "/jpjProto.Column";
          };
          return _0x4a7a7a;
        }();
        _0xd2b52.jpjProto = _0x252ab7;
        _0x5e7f26.exports = _0xd2b52;
        _0x21afb0 = _0x5e7f26.exports;
      }, function () {
        return {
          'protobufjs/minimal': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/minimal.js'
        };
      });
      _0x2f4fd2.require("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/assets/Script/Proto/jpjProto.js");
      _0x289c18._RF.push({}, "de1aaExEWJCBJJPIQtgtAI4", 'SlotReels', undefined);
      var _0x10d25f = [0x0, 0x1, 0x2];
      var _0x929401 = _0x6126fa.ccclass;
      var _0x1f19ec = _0x6126fa.property;
      _0x191b62 = _0x1f19ec(_0x98ac8);
      _0x29a481 = _0x1f19ec({
        'type': _0x1e3e82,
        'tooltip': "JP大轉輪"
      });
      _0x2600e6 = _0x1f19ec({
        'type': _0x1e3e82,
        'tooltip': "JP大轉輪的大Symbol"
      });
      _0x268407 = function (_0x248d62) {
        function _0x591fe9() {
          var _0x36cbc8;
          var _0x38648d = arguments.length;
          var _0xfa76b7 = new Array(_0x38648d);
          for (var _0x4768b7 = 0x0; _0x4768b7 < _0x38648d; _0x4768b7++) {
            _0xfa76b7[_0x4768b7] = arguments[_0x4768b7];
          }
          _0x40ccb3(_0x36cbc8 = _0x248d62.call.apply(_0x248d62, [this].concat(_0xfa76b7)) || this, "m_symbolSpriteFrames", _0x55c95f, _0x10e60a(_0x36cbc8));
          _0x40ccb3(_0x36cbc8, 'm_jpReel', _0xcaf58d, _0x10e60a(_0x36cbc8));
          _0x40ccb3(_0x36cbc8, "m_jpReelSymbols", _0x529fd6, _0x10e60a(_0x36cbc8));
          _0x36cbc8.m_symbolSize = null;
          _0x36cbc8.m_viewSize = null;
          _0x36cbc8.m_gameView = null;
          _0x36cbc8.m_reelPositionOffset = [_0x243100(-0x2, 0x0), _0x243100(0x0, 0x0), _0x243100(0x2, 0x0)];
          _0x36cbc8.m_symbols = new Array();
          _0x36cbc8.m_upperSymbols = new Array();
          _0x36cbc8.m_lowerSymbols = new Array();
          _0x36cbc8.m_plateInfo = [[], [], []];
          _0x36cbc8.m_columns = [];
          _0x36cbc8.m_upperColumns = [];
          _0x36cbc8.m_lowerColumns = [];
          _0x36cbc8.m_time = 0x0;
          _0x36cbc8.m_stopTime = 0x0;
          _0x36cbc8.m_reelStopTimes = new Array();
          _0x36cbc8.m_reelPreTimes = new Array();
          _0x36cbc8.m_riseTime = 0x0;
          _0x36cbc8.m_multiReelPreTime = null;
          _0x36cbc8.m_multiReelStopTime = null;
          _0x36cbc8.m_totalLength = null;
          _0x36cbc8.m_multiTotalLength = null;
          _0x36cbc8.m_upLength = 0x0;
          _0x36cbc8.m_downLength = 0x14;
          _0x36cbc8.m_spinBufferTime01 = 0.1;
          _0x36cbc8.m_spinBufferTime02 = 0.2;
          _0x36cbc8.m_spinTime = 0.32;
          _0x36cbc8.m_multiSpinTime = 0.32;
          _0x36cbc8.m_nearwinSpinTime = 2.45;
          _0x36cbc8.m_multiNearwinSpinTime = 1.92;
          _0x36cbc8.m_timesOfBaseSpin = 0x1;
          _0x36cbc8.m_spinIntervalTimes = 0x1;
          _0x36cbc8.m_spinDelayTime = 0x0;
          _0x36cbc8.m_hardStopIntervalTime = 0.3;
          _0x36cbc8.m_isChangeSymbol = {};
          _0x36cbc8.m_isChangeMultiSymbol = new Array();
          _0x36cbc8.m_isChangeToFinalSymbol = new Array();
          _0x36cbc8.m_isChangeToFinalMultiSymbol = false;
          _0x36cbc8.m_isStop = false;
          _0x36cbc8.m_isJpWinReelStop = false;
          _0x36cbc8.m_isClickStopBtn = false;
          _0x36cbc8.m_comparePos = [];
          _0x36cbc8.m_reelXPos = [];
          _0x36cbc8.m_reelYPos = [];
          _0x36cbc8.m_symbolPos = new Array();
          _0x36cbc8.m_lockColumn = new Array();
          _0x36cbc8.m_isNearWinPlayed = false;
          _0x36cbc8.m_isMultiNearWinPlayed = false;
          _0x36cbc8.m_playStopSoundCb = null;
          _0x36cbc8.m_isPlaySound = [false, false, false, false];
          _0x36cbc8.m_nearWinStartFunc = null;
          _0x36cbc8.m_nearWinEndFunc = null;
          _0x36cbc8.m_multiNearWinStartFunc = null;
          _0x36cbc8.m_multiNearWinEndFunc = null;
          _0x36cbc8.m_jpWinReelTime = 0x0;
          _0x36cbc8.m_jpWinReelStopTime = 4.2;
          _0x36cbc8.m_jpslowSpinTime = 0x8;
          _0x36cbc8.m_jpTime = 0x0;
          _0x36cbc8.m_isJpslowSpinStop = false;
          _0x36cbc8.m_canStartSlowspin = false;
          _0x36cbc8.m_isSlowChangeSymbol = {};
          _0x36cbc8.m_fakeReel = [[0x3, 0x3, 0x3, 0x6, 0x6, 0x6, 0x0, 0x0, 0x0, 0x7, 0x7, 0x7, 0x5, 0x5, 0x5, 0x8, 0x8, 0x8, 0x4, 0x4, 0x4, 0x8, 0x8, 0x8, 0x5, 0x5, 0x5, 0x3, 0x3, 0x3, 0x8, 0x8, 0x8, 0x1, 0x1, 0x1, 0x6, 0x6, 0x6, 0x2, 0x2, 0x2, 0x7, 0x7, 0x7, 0x5, 0x5, 0x5, 0x8, 0x8, 0x8, 0x4, 0x4, 0x4, 0x2, 0x2, 0x2, 0x7, 0x7, 0x7, 0x0, 0x0, 0x0, 0x6, 0x6, 0x6, 0x1, 0x1, 0x1, 0x8, 0x8, 0x8, 0x3, 0x3, 0x3, 0x7, 0x7, 0x7, 0x4, 0x4, 0x4, 0x8, 0x8, 0x8, 0x6, 0x6, 0x6, 0x1, 0x1, 0x1, 0x8, 0x8, 0x8, 0x2, 0x2, 0x2, 0x6, 0x6, 0x6], [0x1, 0x6, 0x6, 0x6, 0x2, 0x2, 0x2, 0x7, 0x7, 0x7, 0x5, 0x5, 0x5, 0x8, 0x8, 0x8, 0x4, 0x4, 0x4, 0x2, 0x2, 0x2, 0x7, 0x7, 0x7, 0x0, 0x0, 0x0, 0x6, 0x6, 0x6, 0x1, 0x1, 0x1, 0x8, 0x8, 0x8, 0x3, 0x3, 0x3, 0x7, 0x7, 0x7, 0x4, 0x4, 0x4, 0x8, 0x8, 0x8, 0x6, 0x6, 0x6, 0x1, 0x1, 0x1, 0x8, 0x8, 0x8, 0x2, 0x2, 0x2, 0x6, 0x6, 0x6, 0x3, 0x3, 0x3, 0x6, 0x6, 0x6, 0x0, 0x0, 0x0, 0x7, 0x7, 0x7, 0x5, 0x5, 0x5, 0x8, 0x8, 0x8, 0x4, 0x4, 0x4, 0x8, 0x8, 0x8, 0x5, 0x5, 0x5, 0x3, 0x3, 0x3, 0x8, 0x8, 0x8, 0x1, 0x1], [0x1, 0x1, 0x7, 0x7, 0x7, 0x5, 0x5, 0x5, 0x8, 0x8, 0x8, 0x4, 0x4, 0x4, 0x5, 0x5, 0x5, 0x3, 0x3, 0x3, 0x8, 0x8, 0x8, 0x1, 0x1, 0x1, 0x6, 0x6, 0x6, 0x2, 0x2, 0x2, 0x5, 0x5, 0x5, 0x8, 0x8, 0x8, 0x4, 0x4, 0x4, 0x2, 0x2, 0x2, 0x7, 0x7, 0x7, 0x0, 0x0, 0x0, 0x6, 0x6, 0x6, 0x1, 0x1, 0x1, 0x3, 0x3, 0x3, 0x8, 0x8, 0x8, 0x4, 0x4, 0x4, 0x1, 0x1, 0x1, 0x6, 0x6, 0x6, 0x8, 0x8, 0x8, 0x2, 0x2, 0x2, 0x6, 0x6, 0x6, 0x4, 0x4, 0x4, 0x3, 0x3, 0x3, 0x6, 0x6, 0x6, 0x0, 0x0, 0x0, 0x8, 0x8, 0x8, 0x6, 0x6, 0x6, 0x1], [0x0, 0x0, 0x0, 0x8, 0x8, 0x8, 0x8, 0x8, 0x8, 0x1, 0x1, 0x1, 0x8, 0x8, 0x8, 0x8, 0x8, 0x8, 0x2, 0x2, 0x2, 0x8, 0x8, 0x8, 0x8, 0x8, 0x8, 0x3, 0x3, 0x3, 0x8, 0x8, 0x8, 0x8, 0x8, 0x8, 0x4, 0x4, 0x4, 0x8, 0x8, 0x8, 0x8, 0x8, 0x8, 0x5, 0x5, 0x5, 0x8, 0x8, 0x8, 0x8, 0x8, 0x8, 0x6, 0x6, 0x6, 0x8, 0x8, 0x8, 0x8, 0x8, 0x8]];
          _0x36cbc8.m_fakeReelCounter = [0x0, 0x0, 0x0, 0x0];
          _0x36cbc8.m_startNearWinCol = -0x1;
          _0x36cbc8.m_isNewRound = true;
          _0x36cbc8.m_jpReelInterval = 0x19e;
          _0x36cbc8.m_jpWinReelNodePosY = [0x0, -_0x36cbc8.m_jpReelInterval, 0x2 * _0x36cbc8.m_jpReelInterval, _0x36cbc8.m_jpReelInterval];
          _0x36cbc8.m_multipleList = [0x1, 0x2, 0x3, 0x5, 0xa, 0x14];
          return _0x36cbc8;
        }
        _0x39e18e(_0x591fe9, _0x248d62);
        var _0x34bcab = _0x591fe9.prototype;
        _0x34bcab.onLoad = function () {
          var _0x135504 = this;
          this.m_viewSize = this.node.getComponent(_0x5ae348).contentSize;
          this.m_symbolSize = new _0x10042e(this.m_viewSize.width / _0x3f22b0.COL, this.m_viewSize.height / _0x3f22b0.ROW);
          for (var _0x5e876e = 0x0; _0x5e876e < 0x3; ++_0x5e876e) {
            this.m_comparePos.push(this.m_viewSize.height * (_0x5e876e + 0.5));
            this.m_reelYPos.push(this.m_viewSize.height * (_0x5e876e - 1.5));
          }
          for (var _0x4bbde2 = 0x0; _0x4bbde2 < _0x3f22b0.COL; ++_0x4bbde2) {
            this.m_reelXPos.push(this.m_symbolSize.width * (_0x4bbde2 + 0.5) + this.m_reelPositionOffset[_0x4bbde2].x - this.m_viewSize.width / 0x2);
          }
          this.m_totalLength = this.m_viewSize.height * 0x3;
          this.m_multiTotalLength = 0x5 * this.m_gameView.Multiple.Width;
          for (var _0x320f8f = 0x0; _0x320f8f < _0x3f22b0.COL; _0x320f8f++) {
            for (var _0x320bdd = 0x0; _0x320bdd < _0x3f22b0.ROW; _0x320bdd++) {
              var _0xb4c90 = this.m_symbolSize.width * (_0x320f8f + 0.5) + this.m_reelPositionOffset[_0x320f8f].x - this.m_viewSize.width / 0x2;
              var _0x1b153e = this.m_symbolSize.height * (_0x3f22b0.ROW - _0x320bdd - 0.5) + this.m_reelPositionOffset[_0x320f8f].y - this.m_viewSize.height / 0x2;
              this.m_symbolPos.push(_0x243100(_0xb4c90, _0x1b153e, 0x0));
            }
          }
          this.CreateSymbol();
          var _0x1e264a = function () {
            var _0x373b32 = _0xd107.TempoSetting.FortuneGems;
            _0x135504.m_riseTime = _0x373b32.BASE.RISE_TIME;
            _0x135504.m_upLength = _0x373b32.BASE.UP_LENGTH;
            _0x135504.m_spinBufferTime01 = _0x373b32.BASE.SPIN_BUFFER_TIME_01;
            _0x135504.m_spinBufferTime02 = _0x373b32.BASE.SPIN_BUFFER_TIME_02;
            _0x135504.m_downLength = _0x373b32.BASE.DOWN_LENGTH;
            _0x135504.m_spinTime = _0x373b32.BASE.SPIN_SPEED;
            _0x135504.m_multiSpinTime = _0x373b32.BASE.SPIN_SPEED;
            _0x135504.m_timesOfBaseSpin = _0x373b32.BASE.TIMES_OF_BASE_SPIN;
            _0x135504.m_spinIntervalTimes = _0x373b32.BASE.SPIN_INTERVAL_TIMES;
            _0x135504.m_spinDelayTime = _0x373b32.BASE.SPIN_DELAY_TIME;
            _0x135504.m_hardStopIntervalTime = _0x373b32.BASE.HARD_STOP_INTERVAL_TIME;
          };
          _0x1e264a();
          _0xd107.AddCb(_0x1e264a);
        };
        _0x34bcab.CreateSymbol = function () {
          for (var _0x21d0f3 = 0x0; _0x21d0f3 < _0x3f22b0.COL; ++_0x21d0f3) {
            var _0x430e70 = _0x21d0f3.toString();
            var _0x38b0ee = new _0x1ae6ad(this.node, this.m_viewSize.height, this, _0x430e70);
            _0x38b0ee.Name = _0x430e70;
            _0x38b0ee.SetPosition(_0x243100(this.m_reelXPos[_0x21d0f3], this.m_reelYPos[0x1]));
            var _0x42e4bb = new _0x21afb0.jpjProto.Column();
            for (var _0x2245b7 = 0x0; _0x2245b7 < _0x3f22b0.ROW; ++_0x2245b7) {
              _0x42e4bb.Row.push(_0x3f22b0.INIT_PLATE[_0x21d0f3][_0x2245b7]);
              this.m_plateInfo[_0x21d0f3][_0x2245b7] = _0x21d0f3;
            }
            _0x38b0ee.SetSymbols(_0x42e4bb.Row);
            this.m_columns.push(_0x38b0ee);
            this.m_isChangeSymbol[_0x430e70] = true;
          }
          for (var _0x4b612f = 0x0; _0x4b612f < _0x3f22b0.COL; ++_0x4b612f) {
            var _0x13bb64 = 'up' + _0x4b612f.toString();
            var _0x119055 = new _0x1ae6ad(this.node, this.m_viewSize.height, this, _0x13bb64);
            _0x119055.Name = _0x13bb64;
            _0x119055.SetPosition(_0x243100(this.m_reelXPos[_0x4b612f], this.m_reelYPos[0x2]));
            var _0x137059 = [];
            for (var _0x2d919e = 0x0; _0x2d919e < _0x3f22b0.ROW; ++_0x2d919e) {
              _0x137059.push(this.RandomSymbol());
            }
            _0x119055.SetSymbols(_0x137059);
            this.m_upperColumns.push(_0x119055);
            this.m_isChangeSymbol[_0x13bb64] = true;
            var _0x1116c4 = "low" + _0x4b612f.toString();
            var _0x1fa29a = new _0x1ae6ad(this.node, this.m_viewSize.height, this, _0x1116c4);
            _0x1fa29a.Name = _0x1116c4;
            _0x1fa29a.SetPosition(_0x243100(this.m_reelXPos[_0x4b612f], this.m_reelYPos[0x0]));
            var _0x200117 = [];
            for (var _0x4452d4 = 0x0; _0x4452d4 < _0x3f22b0.ROW; ++_0x4452d4) {
              _0x200117.push(this.RandomSymbol());
            }
            _0x1fa29a.SetSymbols(_0x200117);
            this.m_lowerColumns.push(_0x1fa29a);
            this.m_isChangeSymbol[_0x1116c4] = true;
          }
          for (var _0x114b8a = 0x0; _0x114b8a < _0x3f22b0.COL; _0x114b8a++) {
            this.SetLowSymbol(_0x114b8a, false);
          }
        };
        _0x34bcab.Init = function (_0x3de63d) {
          this.m_gameView = _0x3de63d;
        };
        _0x34bcab.SetSprite = function (_0x38b7db) {
          var _0x50b36b = _0x38b7db.getComponent(_0x346ead);
          _0x50b36b.type = _0x346ead.Type.SIMPLE;
          _0x50b36b.sizeMode = _0x346ead.SizeMode.RAW;
          _0x50b36b.trim = false;
        };
        _0x34bcab.ChangeSize = function () {
          this.m_viewSize = this.node.getComponent(_0x5ae348).contentSize;
          this.m_symbolSize = new _0x10042e(this.m_viewSize.width / _0x3f22b0.COL, this.m_viewSize.height / _0x3f22b0.ROW);
        };
        _0x34bcab.GetSymbolSprite = function (_0x2d0668) {
          return _0x2d0668 < this.m_symbolSpriteFrames.length ? this.m_symbolSpriteFrames[_0x2d0668] : null;
        };
        _0x34bcab.StartSpin = function (_0x190779) {
          if (undefined === _0x190779) {
            _0x190779 = true;
          }
          this.m_time = 0x0;
          this.m_stopTime = 0x0;
          this.m_isStop = false;
          this.m_isClickStopBtn = false;
          this.m_isNearWinPlayed = false;
          this.m_isMultiNearWinPlayed = false;
          this.m_isNewRound = _0x190779;
          this.m_isPlaySound = [false, false, false, false];
          this.m_plateInfo = null;
          if (_0x190779) {
            for (var _0x61e2cc = 0x0; _0x61e2cc < _0x3f22b0.COL; _0x61e2cc++) {
              this.m_lockColumn[_0x61e2cc] = false;
            }
          }
          for (var _0x3929eb = 0x0; _0x3929eb < _0x3f22b0.COL; _0x3929eb++) {
            this.m_reelStopTimes[_0x3929eb] = null;
            this.m_reelPreTimes[_0x3929eb] = null;
          }
          this.m_multiReelPreTime = null;
          this.m_multiReelStopTime = null;
          for (var _0x4df07a = 0x0; _0x4df07a < _0x3f22b0.COL; _0x4df07a++) {
            if (!this.m_lockColumn[_0x4df07a]) {
              for (var _0x4ce9bd = 0x0; _0x4ce9bd < _0x3f22b0.ROW; _0x4ce9bd++) {
                this.m_columns[_0x4df07a].GetSymbolNode(_0x4ce9bd).active = true;
              }
            }
          }
          for (var _0x24ba35 = 0x0; _0x24ba35 < this.m_isChangeToFinalSymbol.length; _0x24ba35++) {
            this.m_isChangeToFinalSymbol[_0x24ba35] = false;
          }
          this.m_isChangeToFinalMultiSymbol = false;
          for (var _0x132ec8 in this.m_isChangeSymbol) this.m_isChangeSymbol[_0x132ec8] = true;
          for (var _0x399c4c in this.m_isSlowChangeSymbol) this.m_isSlowChangeSymbol[_0x399c4c] = true;
          for (var _0x1568ce = 0x0; _0x1568ce < _0x3f22b0.COL; _0x1568ce++) {
            this.SetLowSymbol(_0x1568ce, true);
          }
        };
        _0x34bcab.LockColumn = function (_0xc5b390) {
          for (var _0x8b8f86 = 0x0; _0x8b8f86 < _0x3f22b0.ROW; _0x8b8f86++) {
            if (_0xc5b390 != _0x8b8f86) {
              this.m_lockColumn[_0x8b8f86] = true;
            }
          }
        };
        _0x34bcab.SetIsClickStopBtn = function () {
          this.m_isClickStopBtn = true;
          if (0x0 !== this.m_stopTime) {
            var _0x37f8bd = Math.ceil(this.m_time / this.m_spinTime);
            var _0x162cdc = ((_0x37f8bd = _0x37f8bd > 0x0 ? _0x37f8bd : 0x1) - 0x1) * this.m_spinTime;
            var _0x1401b5 = _0x546bb1.strip(_0x37f8bd * this.m_spinTime);
            for (var _0x39dc22 = 0x0; _0x39dc22 < _0x3f22b0.COL; ++_0x39dc22) {
              if (this.m_reelStopTimes[_0x39dc22] > _0x1401b5) {
                this.m_reelStopTimes[_0x39dc22] = _0x1401b5;
                this.m_reelPreTimes[_0x39dc22] = _0x162cdc;
              }
            }
            if (this.m_multiReelStopTime > _0x162cdc) {
              this.m_multiReelPreTime = _0x162cdc;
              this.m_multiReelStopTime = _0x1401b5;
            }
            var _0x62d827 = _0xd107.TempoSetting.FortuneGems.SPEED_UP_STOP_TIME(_0x3f22b0.COL, this.m_time);
            if (_0x62d827 < this.m_stopTime) {
              this.m_stopTime = _0x546bb1.strip(_0x62d827);
            }
            this.m_startNearWinCol = -0x1;
          }
        };
        _0x34bcab.SetWholePlate = function (_0x1abb5c) {
          this.SetPlateSymbol(_0x1abb5c);
          for (var _0x4b7b8b = 0x0; _0x4b7b8b < _0x3f22b0.COL; _0x4b7b8b++) {
            for (var _0x290af6 = 0x0; _0x290af6 < _0x3f22b0.ROW; _0x290af6++) {
              this.m_columns[_0x4b7b8b].GetSymbolNode(_0x290af6).active = true;
            }
          }
        };
        _0x34bcab.JpWinReelStart = function () {
          this.m_jpReel.active = true;
          this.m_jpReel.getComponent(_0xbb1863).opacity = 0xff;
          for (var _0x3f3382 = 0x0; _0x3f3382 < 0x4; _0x3f3382++) {
            this.m_jpReelSymbols[_0x3f3382].setPosition(0x0, this.m_jpWinReelNodePosY[_0x3f3382]);
          }
          this.m_jpWinReelTime = 0x0;
        };
        _0x34bcab.JpWinReelSpin = function (_0x179afa) {
          this.m_jpWinReelTime = _0x546bb1.strip(this.m_jpWinReelTime + _0x179afa);
          if (!this.m_isJpWinReelStop) {
            for (var _0x422d1b = 0x0; _0x422d1b < 0x4; _0x422d1b++) {
              var _0x213957 = 0xa * (this.m_jpWinReelTime + 0x5);
              var _0x1eaa27 = this.m_jpReelSymbols[_0x422d1b].position.y;
              this.m_jpReelSymbols[_0x422d1b].setPosition(0x0, _0x1eaa27 - _0x213957);
              if (this.m_jpReelSymbols[_0x422d1b].position.y <= -this.m_jpReelInterval) {
                this.m_jpReelSymbols[_0x422d1b].setPosition(this.m_jpReelSymbols[_0x422d1b].position.x, this.m_jpReelSymbols[_0x422d1b].position.y + 0x4 * this.m_jpReelInterval);
              }
            }
            if (this.m_jpWinReelTime >= this.m_jpWinReelStopTime || this.m_isClickStopBtn) {
              this.m_isJpWinReelStop = true;
            }
          }
        };
        _0x34bcab.JpWinReelEnd = function () {
          this.m_isJpWinReelStop = false;
        };
        _0x34bcab.Spin = function (_0x1b1304, _0x3c74a7) {
          if (undefined === _0x3c74a7) {
            _0x3c74a7 = false;
          }
          if (!this.m_isStop) {
            this.m_time = _0x546bb1.strip(this.m_time + _0x1b1304);
            if (this.m_gameView.GetCurrentState() !== _0x3f22b0.GameState.RESPIN && this.m_gameView.GetCurrentState() !== _0x3f22b0.GameState.JP_RESPIN) {
              this.m_gameView.Multiple.StartSpin();
            }
            this.SpinAll(_0x10d25f);
            this.Spin_MultiReel();
            if (this.m_time >= this.m_stopTime && 0x0 != this.m_stopTime && _0x3f22b0.IsJpStopOK) {
              this.m_isStop = true;
              if (null != this.m_nearWinEndFunc) {
                this.m_nearWinEndFunc();
              }
              if (null != this.m_multiNearWinEndFunc) {
                this.m_multiNearWinEndFunc();
              }
              if (_0x3c74a7) {
                if (this.m_gameView.SpinAck.TotalWin || this.m_gameView.SpinAck.JPWin > 0x0) {
                  this.m_gameView.Multiple.EndSpinWin();
                }
              } else if (0x1 == this.m_gameView.SpinAck.PlateSymbol.length && (this.m_gameView.SpinAck.TotalWin > 0x0 || this.m_gameView.SpinAck.JPWin > 0x0)) {
                this.m_gameView.Multiple.EndSpinWin();
              }
              if (this.m_nearWinEndFunc) {
                this.m_nearWinEndFunc = null;
                this.m_nearWinStartFunc = null;
              }
              if (this.m_multiNearWinEndFunc) {
                this.m_multiNearWinStartFunc = null;
                this.m_multiNearWinEndFunc = null;
              }
            }
          }
        };
        _0x34bcab.SetNearWinCb = function (_0x1156c5, _0x527aa6) {
          this.m_nearWinStartFunc = _0x1156c5;
          this.m_nearWinEndFunc = _0x527aa6;
        };
        _0x34bcab.SetMultiNearWinCb = function (_0x2e0660, _0x136e4d) {
          this.m_multiNearWinStartFunc = _0x2e0660;
          this.m_multiNearWinEndFunc = _0x136e4d;
        };
        _0x34bcab.NearWinStart = function () {
          var _0x3ffc49 = _0x23d9d7(_0x1a789f().mark(function _0x16651a() {
            return _0x1a789f().wrap(function (_0x2cfc9e) {
              for (;;) {
                switch (_0x2cfc9e.prev = _0x2cfc9e.next) {
                  case 0x0:
                    this.m_gameView.EffectPlate.JpSymbolAnimation(0x0, _0x3f22b0.JP_STAGE.BEFORE_BUY_RESPIN, true);
                    this.m_gameView.EffectPlate.JpSymbolAnimation(0x1, _0x3f22b0.JP_STAGE.BEFORE_BUY_RESPIN, true);
                    _0x2cfc9e.next = 0x4;
                    return _0x2be50b.Wait(this.m_gameView, 0.3);
                  case 0x4:
                    this.m_gameView.EffectPlate.JpSymbolAnimation(0x0, _0x3f22b0.JP_STAGE.NEARWIN, true);
                    this.m_gameView.EffectPlate.JpSymbolAnimation(0x1, _0x3f22b0.JP_STAGE.NEARWIN, true);
                    this.m_gameView.EffectPlate.StartNearWin(this.m_startNearWinCol, true);
                  case 0x7:
                  case 'end':
                    return _0x2cfc9e.stop();
                }
              }
            }, _0x16651a, this);
          }));
          return function () {
            return _0x3ffc49.apply(this, arguments);
          };
        }();
        _0x34bcab.NearWinEnd = function () {
          this.m_gameView.EffectPlate.EndNearWin();
        };
        _0x34bcab.MultiNearWinStart = function () {
          this.m_gameView.EffectPlate.StartMultiNearWin();
        };
        _0x34bcab.MultiNearWinEnd = function () {
          this.m_gameView.EffectPlate.EndMultiNearWin();
        };
        _0x34bcab.SpinAll = function (_0x5a1d14) {
          for (var _0x332d7b = 0x0; _0x332d7b < _0x5a1d14.length; ++_0x332d7b) {
            var _0x18a7e5 = _0x5a1d14[_0x332d7b];
            this.Spin_RealSpinMultiple(_0x18a7e5, this.m_columns[_0x18a7e5], 0x1);
            this.Spin_RealSpinMultiple(_0x18a7e5, this.m_upperColumns[_0x18a7e5], 0x2);
            this.Spin_RealSpinMultiple(_0x18a7e5, this.m_lowerColumns[_0x18a7e5], 0x0);
          }
        };
        _0x34bcab.Spin_RealSpinMultiple = function (_0x5da744, _0x52c410, _0xd44396) {
          var _0xaf5d6a = false;
          var _0x482c3e = -0x1;
          if (this.m_gameView.IsJpGame) {
            _0x482c3e = this.m_gameView.RespinCol;
            _0xaf5d6a = true;
          }
          if (0x1 != this.m_lockColumn[_0x5da744]) {
            var _0x3c36c6 = this.m_spinTime;
            var _0x2e1bae = this.m_time;
            var _0x4c47d6 = this.m_riseTime * _0x3f22b0.COL;
            var _0x48bab3 = this.m_reelStopTimes[_0x5da744];
            if (0x2 == this.m_startNearWinCol && 0x2 == _0x5da744 && this.m_time > this.m_reelStopTimes[_0x5da744 - 0x1]) {
              _0x3c36c6 = this.m_spinTime / 0x2;
              if (!(null == this.m_nearWinStartFunc || this.m_isNearWinPlayed || !this.m_isPlaySound[_0x5da744 - 0x1] || this.IsClickStopBtn)) {
                this.m_isNearWinPlayed = true;
                this.m_nearWinStartFunc(_0x5da744);
              }
            }
            var _0x19a772 = (_0x2e1bae - _0x4c47d6) % _0x3c36c6 / _0x3c36c6 * this.m_totalLength;
            var _0xd22e75 = this.m_reelXPos[_0x5da744];
            var _0x507699 = this.m_reelYPos[_0xd44396];
            if (!(_0x2e1bae < this.m_riseTime * _0x5da744)) {
              if (_0x2e1bae < this.m_riseTime * (_0x5da744 + 0x1)) {
                var _0x41813a = (_0x2e1bae - this.m_riseTime * _0x5da744) / this.m_riseTime * this.m_upLength;
                _0x52c410.SetPosition(_0x243100(_0xd22e75, _0x507699 + _0x41813a));
              } else {
                if (_0x2e1bae < _0x4c47d6) {
                  _0x52c410.SetPosition(_0x243100(_0xd22e75, _0x507699 + this.m_upLength));
                } else {
                  if (null === _0x48bab3 || _0x2e1bae < _0x48bab3 + _0x4c47d6) {
                    var _0x5738d = this.CheckMoveLength(_0x19a772, this.m_comparePos[_0xd44396], _0x5da744, _0x52c410);
                    _0x52c410.SetPosition(_0x243100(_0xd22e75, _0x507699 - _0x5738d));
                  } else {
                    if (_0x2e1bae < _0x48bab3 + _0x4c47d6 + this.m_spinBufferTime01) {
                      var _0x441818 = (_0x2e1bae - _0x48bab3 - _0x4c47d6) / this.m_spinBufferTime01 * this.m_downLength;
                      _0x52c410.SetPosition(_0x243100(_0xd22e75, _0x507699 - _0x441818));
                      this.CheckChangeToFinalSymbol(_0x5da744, _0x52c410, true);
                    } else {
                      if (_0x2e1bae < _0x48bab3 + _0x4c47d6 + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
                        var _0x3bf0b5 = (_0x2e1bae - _0x48bab3 - _0x4c47d6 - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
                        _0x52c410.SetPosition(_0x243100(_0xd22e75, _0x507699 - this.m_downLength + _0x3bf0b5));
                        this.CheckChangeToFinalSymbol(_0x5da744, _0x52c410, true);
                        this.SetLowSymbol(_0x5da744, false);
                      } else {
                        this.CheckChangeToFinalSymbol(_0x5da744, _0x52c410, true);
                        _0x52c410.SetPosition(_0x243100(_0xd22e75, _0x507699));
                        if (!this.m_isPlaySound[_0x5da744]) {
                          this.CheckPlayStopSound(_0x5da744);
                          if (_0xaf5d6a && this.m_isNewRound && 0x0 == this.m_gameView.SpinAck.JPWin && !this.m_isNearWinPlayed && !_0x127133.IsFreeSpin) {
                            this.JokerTurnRight(_0x482c3e, _0x5da744);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        };
        _0x34bcab.JokerTurnRight = function (_0x19867e, _0x2d862a) {
          var _0x127dd6 = this;
          this.m_gameView.IsJpTurnRight = true;
          var _0x3e3e9e = this.m_gameView.SpinAck.CanBuy ? _0x3f22b0.AnimDuration.Symbol_08.Stop : 0x0;
          if (!(0x1 != _0x19867e && 0x2 != _0x19867e)) {
            if (0x2 == _0x2d862a) {
              _0x13a184(this.m_gameView.EffectPlate).delay(_0x3e3e9e).call(function () {
                _0x127dd6.m_gameView.EffectPlate.JpAllSymbolAnimation(_0x3f22b0.JP_STAGE.BEFORE_BUY_RESPIN);
              }).start();
            }
          }
        };
        _0x34bcab.CheckMoveLength = function (_0x18b910, _0x567bf8, _0x2b9ec3, _0x2d3222) {
          var _0x5c8ab5 = _0x2d3222.Name;
          if (_0x18b910 >= _0x567bf8) {
            if (0x1 == this.m_isChangeSymbol[_0x5c8ab5] && _0x18b910 - _0x567bf8 < this.m_viewSize.height) {
              var _0x2cabd2 = false;
              if (this.m_gameView.IsHardStop || this.m_isClickStopBtn) {
                _0x2cabd2 = true;
              }
              this.m_isChangeSymbol[_0x5c8ab5] = false;
              this.ChangeSymbol(_0x2b9ec3, _0x2d3222, _0x2cabd2);
            } else {
              this.m_isChangeSymbol[_0x5c8ab5] = true;
            }
            _0x18b910 -= this.m_totalLength;
          }
          return _0x18b910;
        };
        _0x34bcab.Spin_MultiReel = function () {
          var _0x4de063 = false;
          if (!(this.m_gameView.GetCurrentState() !== _0x3f22b0.GameState.RESPIN && this.m_gameView.GetCurrentState() !== _0x3f22b0.GameState.JP_RESPIN)) {
            _0x4de063 = true;
          }
          if (!_0x4de063) {
            var _0x43507d = this.m_time;
            var _0x506daf = this.m_multiReelStopTime;
            var _0x37cca0 = this.m_gameView.Multiple.Width;
            var _0x5afdfb = this.m_multiSpinTime;
            var _0x39b339 = this.m_gameView.SpinAck;
            var _0x4b4214 = _0x127133.GetNowBetValue();
            if (this.m_time > this.m_reelStopTimes[0x2] && null != this.m_multiNearWinStartFunc && !this.m_isMultiNearWinPlayed && this.m_isPlaySound[0x2] && !this.IsClickStopBtn && _0x39b339.TotalWin >= _0x3f22b0.BIG_WIN_RATE * _0x4b4214 && 0x1 == _0x39b339.PlateSymbol.length) {
              _0x5afdfb = this.m_multiSpinTime / 0x2;
              this.m_isMultiNearWinPlayed = true;
              this.m_multiNearWinStartFunc();
            }
            for (var _0x5ea10b = 0x0; _0x5ea10b < _0x3f22b0.ROW; _0x5ea10b++) {
              var _0x52be83 = _0x37cca0 * (_0x3f22b0.ROW - _0x5ea10b - 0.5) + this.m_reelPositionOffset[0x2].y - this.m_viewSize.height / 0x2 - 0x23;
              if (null === _0x506daf || _0x43507d < _0x506daf) {
                var _0x2e6a1b = _0x43507d % _0x5afdfb / _0x5afdfb * _0x37cca0 * (_0x3f22b0.ROW + 0x2);
                var _0x498599 = this.CheckMultiMoveLength(_0x2e6a1b, _0x37cca0 * (_0x3f22b0.ROW - _0x5ea10b + 0.5), _0x5ea10b + 0x1);
                this.m_gameView.Multiple.SetMultiPosition(_0x5ea10b + 0x1, -(_0x52be83 - _0x498599));
              } else {
                if (_0x43507d < _0x506daf + this.m_spinBufferTime01) {
                  var _0x4e6d44 = (_0x43507d - _0x506daf) / this.m_spinBufferTime01 * this.m_downLength;
                  this.m_gameView.Multiple.SetMultiPosition(_0x5ea10b + 0x1, -(_0x52be83 - _0x4e6d44));
                  this.CheckChangeToFinalMultiSymbol(true);
                } else {
                  if (_0x43507d < _0x506daf + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
                    var _0x48ae94 = (_0x43507d - _0x506daf - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
                    this.m_gameView.Multiple.SetMultiPosition(_0x5ea10b + 0x1, -(_0x52be83 - this.m_downLength + _0x48ae94));
                    this.CheckChangeToFinalMultiSymbol(true);
                  } else {
                    this.m_gameView.Multiple.SetMultiPosition(_0x5ea10b + 0x1, -_0x52be83);
                    this.CheckChangeToFinalMultiSymbol(true);
                  }
                }
              }
            }
            var _0x529724 = _0x37cca0 * (_0x3f22b0.ROW + 0.5) + this.m_reelPositionOffset[0x2].y - this.m_viewSize.height / 0x2 - 0x23;
            var _0x17c48e = -0.5 * _0x37cca0 + this.m_reelPositionOffset[0x2].y - this.m_viewSize.height / 0x2 - 0x23;
            if (null === _0x506daf || _0x43507d < _0x506daf) {
              var _0xde8ffe = _0x43507d % _0x5afdfb / _0x5afdfb * this.m_multiTotalLength;
              var _0x454817 = this.CheckMultiMoveLength(_0xde8ffe, _0x37cca0 * (_0x3f22b0.ROW + 0x1), 0x0);
              this.m_gameView.Multiple.SetMultiPosition(0x0, -(_0x529724 - _0x454817));
              var _0x28af66 = this.CheckMultiMoveLength(_0xde8ffe, 0.5 * _0x37cca0, 0x4);
              this.m_gameView.Multiple.SetMultiPosition(0x4, -(_0x17c48e - _0x28af66));
            } else {
              if (_0x43507d < _0x506daf + this.m_spinBufferTime01) {
                var _0x276cc0 = (_0x43507d - _0x506daf) / this.m_spinBufferTime01 * this.m_downLength;
                this.m_gameView.Multiple.SetMultiPosition(0x0, -(_0x529724 - _0x276cc0));
                this.m_gameView.Multiple.SetMultiPosition(0x4, -(_0x17c48e - _0x276cc0));
              } else {
                if (_0x43507d < _0x506daf + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
                  var _0x550fa3 = (_0x43507d - _0x506daf - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
                  this.m_gameView.Multiple.SetMultiPosition(0x0, -(_0x529724 - this.m_downLength + _0x550fa3));
                  this.m_gameView.Multiple.SetMultiPosition(0x4, -(_0x17c48e - this.m_downLength + _0x550fa3));
                } else {
                  this.m_gameView.Multiple.SetMultiPosition(0x0, -_0x529724);
                  this.m_gameView.Multiple.SetMultiPosition(0x4, -_0x17c48e);
                  if (!this.m_isPlaySound[0x3]) {
                    this.CheckPlayStopSound(0x3);
                  }
                }
              }
            }
          }
        };
        _0x34bcab.CheckMultiMoveLength = function (_0x4dde7f, _0x4f115e, _0x15875c) {
          if (_0x4dde7f >= _0x4f115e) {
            if (this.m_isChangeMultiSymbol[_0x15875c] && _0x4dde7f - _0x4f115e < this.m_multiTotalLength) {
              var _0xcc1e4d = false;
              if (this.m_gameView.IsHardStop || this.m_isClickStopBtn) {
                _0xcc1e4d = true;
              }
              this.ChangeMultiSymbol(_0x15875c, _0xcc1e4d);
              this.m_isChangeMultiSymbol[_0x15875c] = false;
            }
            _0x4dde7f -= this.m_multiTotalLength;
          } else {
            this.m_isChangeMultiSymbol[_0x15875c] = true;
          }
          return _0x4dde7f;
        };
        _0x34bcab.StartSlowSpin = function () {
          this.m_jpTime = 0x0;
          this.m_isJpslowSpinStop = false;
          this.m_isClickStopBtn = false;
        };
        _0x34bcab.JpSlowSpinAll = function (_0x25a25c, _0x4a899f) {
          this.SetLowSymbol(_0x4a899f, true);
          this.JpSlowSpin(_0x25a25c, _0x4a899f, this.m_columns[_0x4a899f], 0x1);
          this.JpSlowSpin(_0x25a25c, _0x4a899f, this.m_upperColumns[_0x4a899f], 0x2);
          this.JpSlowSpin(_0x25a25c, _0x4a899f, this.m_lowerColumns[_0x4a899f], 0x0);
        };
        _0x34bcab.JpSlowSpin = function (_0x58a740, _0x57eac6, _0x13ed15, _0x5f51c9) {
          this.m_jpTime = _0x546bb1.strip(this.m_jpTime + _0x58a740);
          var _0x236e7b = this.m_jpslowSpinTime;
          if (!this.m_isJpslowSpinStop) {
            var _0x2e6aa8 = this.m_reelXPos[_0x57eac6];
            var _0x33ab43 = this.m_reelYPos[_0x5f51c9];
            var _0x2fbada = this.m_jpTime % _0x236e7b / _0x236e7b * this.m_totalLength;
            var _0xdf8ced = this.GetMovelengthJP(_0x2fbada, this.m_comparePos[_0x5f51c9], _0x13ed15);
            _0x13ed15.SetPosition(_0x243100(_0x2e6aa8, _0x33ab43 - _0xdf8ced));
          }
          if (this.m_gameView.EffectPlate.FXReel.IsBuyRespin || this.m_gameView.GetCurrentState() !== _0x227275.IDLE) {
            this.m_isJpslowSpinStop = true;
          }
        };
        _0x34bcab.GetMovelengthJP = function (_0x27c091, _0xa9301e, _0x132727) {
          var _0x4ab405 = _0x132727.Name;
          if (_0x27c091 >= _0xa9301e) {
            if (this.m_isSlowChangeSymbol[_0x4ab405] && _0x27c091 - _0xa9301e < this.m_viewSize.height) {
              var _0x52bcf9 = [-0x1, -0x1, -0x1];
              for (var _0x92aada = 0x0; _0x92aada < _0x3f22b0.ROW; _0x92aada++) {
                _0x52bcf9[_0x92aada] = this.m_fakeReel[0x3][this.m_fakeReelCounter[0x3]];
                this.m_fakeReelCounter[0x3]++;
                if (this.m_fakeReelCounter[0x3] >= this.m_fakeReel[0x3].length) {
                  this.m_fakeReelCounter[0x3] = 0x0;
                }
              }
              _0x132727.SetSymbols(_0x52bcf9);
              this.m_isSlowChangeSymbol[_0x4ab405] = false;
            }
            _0x27c091 -= this.m_totalLength;
          } else {
            this.m_isSlowChangeSymbol[_0x4ab405] = true;
          }
          return _0x27c091;
        };
        _0x34bcab.ChangeSymbol = function (_0x274939, _0x21f87b, _0x182c9c) {
          var _0x492b16 = Number(_0x21f87b.Name);
          var _0xcf053 = this.m_reelPreTimes[_0x274939];
          var _0xa2255d = this.m_riseTime * this.m_viewSize.height * 0x3;
          var _0x574289 = this.m_gameView.GetCurrentState() === _0x3f22b0.GameState.JP_RESPIN || this.m_gameView.GetCurrentState() === _0x3f22b0.GameState.JP_ENTER_RESPIN ? 0x3 : _0x274939;
          var _0x295598 = Math.floor(Math.random() * (_0x3f22b0.MaxSymbolEachColumn - _0x3f22b0.MinSymbolEachColumn)) + _0x3f22b0.MinSymbolEachColumn;
          if (_0x182c9c) {
            if (_0x492b16 >= 0x0 && null !== this.m_plateInfo) {
              _0x21f87b.SetSymbols(this.m_plateInfo[_0x492b16]);
            } else {
              var _0x2c3fb6 = [];
              for (var _0x1d39ea = 0x0; _0x1d39ea < _0x295598; ++_0x1d39ea) {
                var _0x2beb4c = this.m_fakeReel[_0x574289][this.m_fakeReelCounter[_0x574289]];
                this.m_fakeReelCounter[_0x574289]++;
                if (this.m_fakeReelCounter[_0x574289] >= this.m_fakeReel[_0x574289].length) {
                  this.m_fakeReelCounter[_0x574289] = 0x0;
                }
                _0x2c3fb6.push(_0x2beb4c);
              }
              _0x21f87b.SetSymbols(_0x2c3fb6);
            }
          } else {
            if (_0x492b16 >= 0x0 && (null !== _0xcf053 && this.m_time >= _0xcf053 || Math.abs(this.m_time - (_0xcf053 + _0xa2255d)) < this.m_spinTime) && null !== this.m_plateInfo) {
              _0x21f87b.SetSymbols(this.m_plateInfo[_0x492b16]);
            } else {
              var _0x5e803e = [];
              for (var _0x4b3b1a = 0x0; _0x4b3b1a < _0x295598; ++_0x4b3b1a) {
                var _0x97780e = this.m_fakeReel[_0x574289][this.m_fakeReelCounter[_0x574289]];
                this.m_fakeReelCounter[_0x574289]++;
                if (this.m_fakeReelCounter[_0x574289] >= this.m_fakeReel[_0x574289].length) {
                  this.m_fakeReelCounter[_0x574289] = 0x0;
                }
                _0x5e803e.push(_0x97780e);
              }
              _0x21f87b.SetSymbols(_0x5e803e);
            }
          }
        };
        _0x34bcab.ChangeMultiSymbol = function (_0x5c724e, _0x5ed579) {
          var _0x4f69b7 = this.m_multiReelPreTime;
          if (null !== _0x4f69b7 && this.m_time > _0x4f69b7 || _0x5ed579) {
            this.m_gameView.Multiple.SetMultiLabel(_0x5c724e, true);
          } else {
            this.m_gameView.Multiple.SetMultiLabel(_0x5c724e, false);
          }
        };
        _0x34bcab.CheckChangeToFinalSymbol = function (_0x55fd97, _0x485439, _0x310772) {
          if (undefined === _0x310772) {
            _0x310772 = false;
          }
          var _0x2dfa05 = _0x485439.Name;
          if (!this.m_isChangeToFinalSymbol[_0x2dfa05]) {
            this.m_isChangeToFinalSymbol[_0x2dfa05] = true;
            this.ChangeSymbol(_0x55fd97, _0x485439, _0x310772);
          }
        };
        _0x34bcab.CheckChangeToFinalMultiSymbol = function (_0xcbe78b) {
          if (undefined === _0xcbe78b) {
            _0xcbe78b = false;
          }
          if (!this.m_isChangeToFinalMultiSymbol) {
            this.m_isChangeToFinalMultiSymbol = true;
            this.ChangeMultiSymbol(0x1, _0xcbe78b);
            this.ChangeMultiSymbol(0x2, _0xcbe78b);
            this.ChangeMultiSymbol(0x3, _0xcbe78b);
          }
        };
        _0x34bcab.SetPlateInfo = function (_0x29211f) {
          this.m_plateInfo = _0x29211f.map(function (_0x295a7b) {
            return _0x295a7b.slice();
          });
          var _0x3c1199 = this.m_riseTime * _0x3f22b0.COL;
          this.SetNearWinCb(this.NearWinStart, this.NearWinEnd);
          this.SetMultiNearWinCb(this.MultiNearWinStart, this.MultiNearWinEnd);
          var _0x328a25 = Math.ceil((this.m_time - _0x3c1199) / this.m_spinTime);
          var _0x41b459 = 0x0;
          if (this.m_isClickStopBtn) {
            this.m_stopTime = _0x546bb1.strip(this.m_spinTime * _0x328a25 + _0x3c1199 + this.m_spinDelayTime);
            for (var _0x32d348 = 0x0; _0x32d348 < _0x3f22b0.COL; _0x32d348++) {
              this.m_reelStopTimes[_0x32d348] = _0x546bb1.strip(this.m_spinTime * _0x328a25);
              this.m_reelPreTimes[_0x32d348] = _0x546bb1.strip(this.m_spinTime * (_0x328a25 - 0x1));
            }
            this.m_multiReelPreTime = _0x546bb1.strip(this.m_reelPreTimes[0x2] + this.m_multiSpinTime);
            this.m_multiReelStopTime = _0x546bb1.strip(this.m_reelStopTimes[0x2] + this.m_multiSpinTime);
            this.m_stopTime += this.m_multiSpinTime;
          } else {
            this.m_stopTime = _0x546bb1.strip(this.m_spinTime * (_0x328a25 + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinTime * (_0x3f22b0.COL - 0x1) + +_0x3c1199 + this.m_spinBufferTime01 + this.m_spinBufferTime02 + this.m_spinDelayTime);
            for (var _0x554fa2 = 0x0; _0x554fa2 < _0x3f22b0.COL; _0x554fa2++) {
              if (this.m_lockColumn[_0x554fa2]) {
                _0x41b459 += 0x1;
              }
            }
            for (var _0x234bd1 = 0x0; _0x234bd1 < _0x3f22b0.COL; _0x234bd1++) {
              this.m_reelStopTimes[_0x234bd1] = _0x546bb1.strip(this.m_spinTime * (_0x328a25 + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinTime * _0x234bd1);
              this.m_reelPreTimes[_0x234bd1] = _0x546bb1.strip(this.m_spinTime * (_0x328a25 + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinTime * (_0x234bd1 - 0x1));
              this.m_multiReelPreTime = _0x546bb1.strip(this.m_reelPreTimes[0x2] + this.m_multiSpinTime);
              this.m_multiReelStopTime = _0x546bb1.strip(this.m_reelStopTimes[0x2] + this.m_multiSpinTime);
              if (0x0 != _0x41b459) {
                this.m_stopTime = 2.65;
                this.m_reelStopTimes[_0x234bd1] = _0x546bb1.strip(this.m_stopTime - (this.m_spinBufferTime01 + this.m_spinBufferTime02));
                this.m_reelPreTimes[_0x234bd1] = _0x546bb1.strip(this.m_reelStopTimes[_0x234bd1] - this.m_spinIntervalTimes * this.m_spinTime * 0x1);
                this.m_multiReelPreTime = _0x546bb1.strip(this.m_reelPreTimes[0x2] + this.m_multiSpinTime);
                this.m_multiReelStopTime = _0x546bb1.strip(this.m_reelStopTimes[0x2] + this.m_multiSpinTime);
                this.m_stopTime += this.m_multiSpinTime;
              }
            }
            this.m_stopTime += this.m_multiSpinTime;
            this.m_startNearWinCol = -0x1;
            if (!this.m_gameView.IsHardStop && 0x0 == _0x41b459 && this.IsThirdColRespin()) {
              this.m_startNearWinCol = 0x2;
              this.m_reelStopTimes[0x2] = _0x546bb1.strip(this.m_reelStopTimes[0x2] + this.m_nearwinSpinTime);
              this.m_stopTime += this.m_nearwinSpinTime;
              this.m_multiReelStopTime = _0x546bb1.strip(this.m_reelStopTimes[0x2] + this.m_multiSpinTime);
              this.m_multiReelPreTime = this.m_multiReelStopTime - this.m_multiSpinTime;
              this.m_stopTime += this.m_multiSpinTime;
            }
            var _0x49ca34 = this.m_gameView.SpinAck;
            var _0x53be16 = _0x127133.GetNowBetValue();
            if (!this.m_gameView.IsHardStop && 0x0 == _0x41b459 && _0x49ca34.TotalWin >= _0x3f22b0.BIG_WIN_RATE * _0x53be16 && 0x1 == _0x49ca34.PlateSymbol.length) {
              this.m_multiReelStopTime += this.m_multiNearwinSpinTime;
              this.m_multiReelPreTime += this.m_multiNearwinSpinTime;
              this.m_stopTime += this.m_multiNearwinSpinTime;
            }
          }
          for (var _0x587396 = 0x0; _0x587396 < _0x29211f.length; _0x587396++) {
            if ("8,8,8" === _0x29211f[_0x587396].toString()) {
              this.m_gameView.HasJpCol[_0x587396] = true;
            }
          }
        };
        _0x34bcab.IsThirdColRespin = function () {
          return 0x8 === this.m_gameView.SpinAck.PlateSymbol[0x0].Col[0x0].Row[0x0] && this.m_gameView.SpinAck.PlateSymbol[0x0].Col[0x0].Row[0x0] === this.m_gameView.SpinAck.PlateSymbol[0x0].Col[0x0].Row[0x1] && this.m_gameView.SpinAck.PlateSymbol[0x0].Col[0x0].Row[0x1] === this.m_gameView.SpinAck.PlateSymbol[0x0].Col[0x0].Row[0x2] && this.m_gameView.SpinAck.PlateSymbol[0x0].Col[0x0].Row.toString() == this.m_gameView.SpinAck.PlateSymbol[0x0].Col[0x1].Row.toString();
        };
        _0x34bcab.GetToWildColumn = function (_0x510e54, _0x2d073f, _0x4f0c48, _0x54e35f) {
          return _0x510e54 == _0x3f22b0.Symbol.Symbol_Wild && _0x2d073f == _0x3f22b0.Symbol.Symbol_Wild || _0x510e54 != _0x3f22b0.Symbol.Symbol_Wild && _0x2d073f != _0x3f22b0.Symbol.Symbol_Wild ? -0x1 : _0x510e54 == _0x3f22b0.Symbol.Symbol_Wild ? _0x54e35f : _0x4f0c48;
        };
        _0x34bcab.IsSameSymbol = function (_0xafeb4f, _0x3d74e1) {
          return -0x1 != _0xafeb4f && -0x1 != _0x3d74e1 && (_0xafeb4f == _0x3d74e1 || (_0xafeb4f != _0x3f22b0.Symbol.Symbol_JackPot && _0x3d74e1 != _0x3f22b0.Symbol.Symbol_JackPot ? _0xafeb4f == _0x3f22b0.Symbol.Symbol_Wild || _0x3d74e1 == _0x3f22b0.Symbol.Symbol_Wild : undefined));
        };
        _0x34bcab.GetMultiple = function () {
          var _0x2b69df = Math.floor(Math.random() * (this.m_multipleList.length - 0x1)) % this.m_multipleList.length;
          return this.m_multipleList[_0x2b69df];
        };
        _0x34bcab.ToggleSymbolOnPlate = function (_0x12af4b, _0x2bba59) {
          var _0x3d904f;
          for (var _0x558263 = _0x602232(_0x12af4b); !(_0x3d904f = _0x558263()).done;) {
            var _0x4614fc = _0x3d904f.value;
            var _0x37bd12 = Math.floor(_0x4614fc / _0x3f22b0.ROW);
            var _0x34df82 = _0x4614fc % _0x3f22b0.ROW;
            this.m_columns[_0x37bd12].GetSymbolNode(_0x34df82).active = _0x2bba59;
          }
        };
        _0x34bcab.IsPlateStop = function () {
          return this.m_isStop;
        };
        _0x34bcab.IsJpWinReelStop = function () {
          return this.m_isJpWinReelStop;
        };
        _0x34bcab.GetSymbolNode = function (_0x58fd99, _0x1f761f) {
          return this.m_columns[_0x58fd99].GetSymbolNode(_0x1f761f);
        };
        _0x34bcab.SetPlayStopSoundFunction = function (_0x2c64fc) {
          this.m_playStopSoundCb = _0x2c64fc;
        };
        _0x34bcab.CheckPlayStopSound = function (_0x874822) {
          if (this.m_playStopSoundCb && !this.m_isPlaySound[_0x874822]) {
            this.m_isPlaySound[_0x874822] = true;
            this.m_playStopSoundCb(_0x874822);
          }
        };
        _0x34bcab.RecoverPlate = function () {
          var _0x5872ef = _0x23d9d7(_0x1a789f().mark(function _0x5d4995() {
            var _0x26de8d;
            var _0x57fde6;
            return _0x1a789f().wrap(function (_0x41eb2d) {
              for (;;) {
                switch (_0x41eb2d.prev = _0x41eb2d.next) {
                  case 0x0:
                    if (_0x3f22b0.IsExtraBuy) {
                      this.SetPlateSymbol(_0x3f22b0.LAST_PLATE);
                      this.NearWinEnd();
                      this.m_gameView.EffectPlate.FXReel.CloseNearWinNode();
                      _0x33587b.NextState(_0x3f22b0.GameState.JP_ENTER_RESPIN);
                    } else {
                      this.SetPlateSymbol(_0x3f22b0.INIT_PLATE);
                      for (_0x26de8d = 0x0; _0x26de8d < _0x3f22b0.COL; _0x26de8d++) {
                        for (_0x57fde6 = 0x0; _0x57fde6 < _0x3f22b0.ROW; _0x57fde6++) {
                          this.m_columns[_0x26de8d].GetSymbolNode(_0x57fde6).active = true;
                        }
                      }
                    }
                    this.m_gameView.Multiple.RecoverMultiLabel();
                  case 0x2:
                  case "end":
                    return _0x41eb2d.stop();
                }
              }
            }, _0x5d4995, this);
          }));
          return function () {
            return _0x5872ef.apply(this, arguments);
          };
        }();
        _0x34bcab.SetPlateSymbol = function (_0x1d3460) {
          for (var _0x3b6fd7 = 0x0; _0x3b6fd7 < _0x3f22b0.COL; ++_0x3b6fd7) {
            this.m_reelStopTimes[_0x3b6fd7] = null;
            this.m_reelPreTimes[_0x3b6fd7] = null;
            this.m_columns[_0x3b6fd7].SetSymbols(_0x1d3460[_0x3b6fd7]);
            this.m_columns[_0x3b6fd7].SetPosition(_0x243100(this.m_reelXPos[_0x3b6fd7], this.m_reelYPos[0x1]));
            this.SetLowSymbol(_0x3b6fd7, false);
          }
          this.m_multiReelStopTime = 0x0;
          this.m_multiReelPreTime = 0x0;
          for (var _0x4a091d = 0x0; _0x4a091d < _0x3f22b0.COL; ++_0x4a091d) {
            this.m_upperColumns[_0x4a091d].SetPosition(_0x243100(this.m_reelXPos[_0x4a091d], this.m_reelYPos[0x2]));
            this.m_lowerColumns[_0x4a091d].SetPosition(_0x243100(this.m_reelXPos[_0x4a091d], this.m_reelYPos[0x0]));
          }
        };
        _0x34bcab.RandomSymbol = function () {
          return Math.floor(Math.random() * _0x3f22b0.Symbol.Symbol_JackPot);
        };
        _0x34bcab.GetSymbolSpriteFrame = function (_0x3a3334) {
          return this.m_symbolSpriteFrames[_0x3a3334];
        };
        _0x34bcab.ShowSymbolDark = function (_0xd59f27) {
          var _0xf1ac59 = _0xd59f27 ? _0x2f7ea9(101.25, 94.5, 73.5) : _0x2f7ea9(0xff, 0xff, 0xff);
          for (var _0x4f23dd = 0x0; _0x4f23dd < _0x3f22b0.COL; _0x4f23dd++) {
            for (var _0x9632e = 0x0; _0x9632e < _0x3f22b0.ROW; _0x9632e++) {
              this.m_columns[_0x4f23dd].GetSymbolNode(_0x9632e).getComponent(_0x4e6efb).color = _0xf1ac59;
              this.m_upperColumns[_0x4f23dd].GetSymbolNode(_0x9632e).getComponent(_0x4e6efb).color = _0xf1ac59;
              this.m_lowerColumns[_0x4f23dd].GetSymbolNode(_0x9632e).getComponent(_0x4e6efb).color = _0xf1ac59;
            }
          }
        };
        _0x34bcab.PositionToIndex = function (_0x3f8da7, _0x24f510) {
          return _0x3f8da7 * _0x3f22b0.COL + _0x24f510;
        };
        _0x34bcab.SetLowSymbol = function (_0x339243, _0x434c6c) {
          var _0x5992de = _0x434c6c ? 0xff : 0.1;
          for (var _0x131c47 = 0x0; _0x131c47 < _0x3f22b0.ROW; _0x131c47++) {
            this.m_lowerColumns[_0x339243].GetSymbolNode(_0x131c47).getComponent(_0xbb1863).opacity = _0x5992de;
          }
        };
        _0x48eefc(_0x591fe9, [{
          'key': 'SymbolSpriteFrames',
          'get': function () {
            return this.m_symbolSpriteFrames;
          }
        }, {
          'key': "JpReel",
          'get': function () {
            return this.m_jpReel;
          }
        }, {
          'key': 'SymbolSize',
          'get': function () {
            return this.m_symbolSize;
          }
        }, {
          'key': "PlateInfo",
          'get': function () {
            return this.m_plateInfo;
          }
        }, {
          'key': 'Columns',
          'get': function () {
            return this.m_columns;
          }
        }, {
          'key': "IsClickStopBtn",
          'get': function () {
            return this.m_isClickStopBtn;
          }
        }, {
          'key': "SymbolPos",
          'get': function () {
            return this.m_symbolPos;
          }
        }, {
          'key': "IsNearWinPlayed",
          'get': function () {
            return this.m_isNearWinPlayed;
          }
        }, {
          'key': 'IsMultiNearWinPlayed',
          'get': function () {
            return this.m_isMultiNearWinPlayed;
          }
        }, {
          'key': "CanStartSlowspin",
          'get': function () {
            return this.m_canStartSlowspin;
          },
          'set': function (_0x181cd5) {
            this.m_canStartSlowspin = _0x181cd5;
          }
        }]);
        return _0x591fe9;
      }(_0x2d51ac);
      _0x55c95f = _0x1c868d(_0x268407.prototype, "m_symbolSpriteFrames", [_0x191b62], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0xcaf58d = _0x1c868d(_0x268407.prototype, "m_jpReel", [_0x29a481], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x529fd6 = _0x1c868d(_0x268407.prototype, 'm_jpReelSymbols', [_0x2600e6], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      var _0x1d1c71 = _0x929401(_0xa4834b = _0x268407) || _0xa4834b;
      var _0x207c7b;
      var _0x138a90;
      var _0x416aed;
      var _0x580179;
      var _0x4053a1;
      var _0x25daf5;
      var _0xeaf42;
      var _0x4ed0e4;
      var _0x5db3ff;
      var _0x2af337;
      var _0x495ac5;
      var _0x528e12;
      var _0x9e1a3a;
      var _0x34fb84;
      var _0x46b655;
      var _0x5a3bf8;
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, 'e6a8cPwWVFKyogsXoeYEmk3', "FXReel", undefined);
      var _0x16e5e3 = _0x6126fa.ccclass;
      var _0x136e43 = _0x6126fa.property;
      _0x207c7b = _0x136e43({
        'type': _0x1370ff.Skeleton,
        'tooltip': "一般重轉下方板子"
      });
      _0x138a90 = _0x136e43({
        'type': _0x1e3e82,
        'tooltip': "respin declare 下 的 HP_TEXT1"
      });
      _0x416aed = _0x136e43({
        'type': _0x4cb146,
        'tooltip': "輪框霓虹燈(右)"
      });
      _0x580179 = _0x136e43({
        'type': _0x4cb146,
        'tooltip': '輪框霓虹燈(左)'
      });
      _0x4053a1 = _0x136e43({
        'type': _0x350736,
        'tooltip': "Nearwin特效Prefab"
      });
      _0x25daf5 = _0x136e43({
        'type': _0x1e3e82,
        'tooltip': "各輪Nearwin特效"
      });
      _0xeaf42 = _0x136e43({
        'type': _0x1e3e82,
        'tooltip': "背景菱形閃爍特效"
      });
      _0x5db3ff = function (_0x4a0724) {
        function _0x2fc20b() {
          var _0x43e179;
          var _0x262bc4 = arguments.length;
          var _0x27e0da = new Array(_0x262bc4);
          for (var _0x2bd7b4 = 0x0; _0x2bd7b4 < _0x262bc4; _0x2bd7b4++) {
            _0x27e0da[_0x2bd7b4] = arguments[_0x2bd7b4];
          }
          _0x40ccb3(_0x43e179 = _0x4a0724.call.apply(_0x4a0724, [this].concat(_0x27e0da)) || this, "m_respinDeclare", _0x2af337, _0x10e60a(_0x43e179));
          _0x40ccb3(_0x43e179, 'm_hpText1', _0x495ac5, _0x10e60a(_0x43e179));
          _0x40ccb3(_0x43e179, "m_reelFrameR", _0x528e12, _0x10e60a(_0x43e179));
          _0x40ccb3(_0x43e179, "m_reelFrameL", _0x9e1a3a, _0x10e60a(_0x43e179));
          _0x40ccb3(_0x43e179, "m_nearWinPrefab", _0x34fb84, _0x10e60a(_0x43e179));
          _0x40ccb3(_0x43e179, 'm_nearWinParentNode', _0x46b655, _0x10e60a(_0x43e179));
          _0x40ccb3(_0x43e179, "m_fxFreeRespin", _0x5a3bf8, _0x10e60a(_0x43e179));
          _0x43e179.m_gameView = null;
          _0x43e179.m_RespinEnd = null;
          _0x43e179.m_nearWinNode = null;
          _0x43e179.m_buyNearWinNode = null;
          _0x43e179.m_nearWinType = 0x0;
          _0x43e179.m_isBuyRespin = false;
          _0x43e179.m_jpNewRound = false;
          _0x43e179.m_jPCountDownCallBack = null;
          _0x43e179.m_countDownTime = 0xa;
          _0x43e179.m_isClickStop = false;
          return _0x43e179;
        }
        _0x39e18e(_0x2fc20b, _0x4a0724);
        var _0x3b7bb7 = _0x2fc20b.prototype;
        _0x3b7bb7.SetReelFrameSpine = function (_0x42cad0) {
          switch (_0x42cad0) {
            case _0x3f22b0.REEL_FRAME_TYPE.Idle:
              this.m_reelFrameL.play(_0x3f22b0.SpineAnimNames.FX_ReelFrame.Idle);
              this.m_reelFrameR.play(_0x3f22b0.SpineAnimNames.FX_ReelFrame.Idle);
              break;
            case _0x3f22b0.REEL_FRAME_TYPE.JP:
              _0x3f22b0.IsReelFrameIdle = false;
              this.m_reelFrameL.play(_0x3f22b0.SpineAnimNames.FX_ReelFrame.JP);
              this.m_reelFrameR.play(_0x3f22b0.SpineAnimNames.FX_ReelFrame.JP);
              break;
            case _0x3f22b0.REEL_FRAME_TYPE.Respin:
              _0x3f22b0.IsReelFrameIdle = false;
              this.m_reelFrameL.play(_0x3f22b0.SpineAnimNames.FX_ReelFrame.Respin);
              this.m_reelFrameR.play(_0x3f22b0.SpineAnimNames.FX_ReelFrame.Respin);
              break;
            case _0x3f22b0.REEL_FRAME_TYPE.Win:
              _0x3f22b0.IsReelFrameIdle = false;
              this.m_reelFrameL.play(_0x3f22b0.SpineAnimNames.FX_ReelFrame.Win);
              this.m_reelFrameR.play(_0x3f22b0.SpineAnimNames.FX_ReelFrame.Win);
          }
        };
        _0x3b7bb7.Init = function (_0x3b9d10) {
          var _0x434a7f = this;
          this.m_nearWinNode = _0x4497b0(this.m_nearWinPrefab);
          this.m_nearWinNode.addComponent(_0xbb1863);
          this.m_nearWinNode.getComponent(_0xbb1863).opacity = 0.1;
          this.m_buyNearWinNode = _0x4497b0(this.m_nearWinPrefab);
          this.m_buyNearWinNode.addComponent(_0xbb1863);
          this.m_buyNearWinNode.getComponent(_0xbb1863).opacity = 0.1;
          for (var _0x2e5e1e = 0x0; _0x2e5e1e < this.m_nearWinParentNode.length; _0x2e5e1e++) {
            this.m_nearWinParentNode[_0x2e5e1e].getComponent(_0x5ae348).width = 0xc8;
            this.m_nearWinParentNode[_0x2e5e1e].getComponent(_0x5ae348).height = 0x19a;
            var _0x3d8a95 = this.m_nearWinParentNode[_0x2e5e1e].addComponent(_0x4d181c);
            _0x3d8a95.node.on("click", function () {
              _0x3f22b0.IsExtraBuy = true;
              if (!_0x434a7f.JpNewRound) {
                if (_0x3f22b0.CanLog) {
                  _0x434a7f.m_gameView.SendVerificationEvent(_0x3f22b0.EVENT_ID.EXTRA_BUY_YES, _0x3f22b0.EVENT_VALUE.YES);
                }
                if (!_0x434a7f.IfChipsEnough()) {
                  return;
                }
                _0x434a7f.JpNewRound = true;
                _0x434a7f.m_isBuyRespin = true;
                _0x3f22b0.CanLog = false;
                _0x434a7f.m_gameView.EffectPlate.FXReel.NearWinParentNode[_0x434a7f.m_gameView.RespinCol].getComponent(_0x4d181c).enabled = false;
                _0x434a7f.m_gameView.CanPlateSpin = false;
                _0x434a7f.m_gameView.CanSpaceSpin = false;
              }
            }, this);
            _0x3d8a95.enabled = false;
          }
          this.m_gameView = _0x3b9d10;
          this.m_respinDeclare.node.active = false;
          this.m_hpText1.active = false;
          for (var _0x5d90ca = 0x0; _0x5d90ca < 0x3; _0x5d90ca++) {
            for (var _0x22be0b = 0x0; _0x22be0b < 0x5; _0x22be0b++) {
              this.NearWinStart(_0x5d90ca, _0x22be0b);
              this.NearWinEnd();
            }
          }
          this.CloseNearWinNode();
        };
        _0x3b7bb7.SetTxt = function () {
          var _0x580e69 = _0x2b07a4.GetGameAtlas();
          this.m_buyNearWinNode.getChildByName("HP_TEXT1").getComponent(_0x346ead).spriteFrame = _0x580e69.getSpriteFrame("TXT_Respin_At_Price_01");
          this.m_buyNearWinNode.getChildByName("HP_TEXT2").getComponent(_0x346ead).spriteFrame = _0x580e69.getSpriteFrame("TXT_Respin_At_Price_02");
          this.m_buyNearWinNode.getChildByName("HP_TEXT3").getComponent(_0x346ead).spriteFrame = _0x580e69.getSpriteFrame("TXT_Hit_Rate");
          this.m_buyNearWinNode.getChildByName("HP_TEXT4").getComponent(_0x346ead).spriteFrame = _0x580e69.getSpriteFrame("TXT_Respin_At_Price_03");
          this.m_hpText1.getComponent(_0x346ead).spriteFrame = _0x580e69.getSpriteFrame("TXT_Free_Respin_01");
        };
        _0x3b7bb7.IfChipsEnough = function () {
          var _0x16f255 = _0x127133.GetBetList();
          var _0x191fc1 = _0x546bb1.strip(0xa * _0x127133.GetNowBetValue() * this.m_gameView.SpinAck.Mult);
          return _0x127133.GetChips() >= _0x191fc1 || (_0x127133.SetSpinState(0x0), _0x127133.GetChips() < _0x191fc1 && _0x546bb1.strip(_0x127133.GetNowBetValue()) > _0x546bb1.strip(_0x16f255[0x0]) ? (_0x58bcdb.ShowMessageBox(_0x2be50b.StringKey.MSGBOX_MONEY_NOT_ENOUGH_DOWN_BET), false) : (_0x58bcdb.ShowMessageBox(_0x2be50b.StringKey.MSGBOX_MONEY_NOT_ENOUGH), false));
        };
        _0x3b7bb7.Respin = function () {
          var _0x420a2e = _0x23d9d7(_0x1a789f().mark(function _0x4049c9(_0x409f12) {
            var _0x5c4603 = this;
            return _0x1a789f().wrap(function (_0x55509a) {
              for (;;) {
                switch (_0x55509a.prev = _0x55509a.next) {
                  case 0x0:
                    this.m_respinDeclare.node.active = true;
                    this.m_hpText1.active = true;
                    _0x25e445.Play(_0x3f22b0.AudioClips.Respin_Declare);
                    if (this.m_gameView.BgmId_MG_Respin) {
                      _0x25e445.Stop(this.m_gameView.BgmId_MG_Respin);
                      this.m_gameView.BgmId_MG_Respin = null;
                    }
                    this.m_gameView.BgmId_MG_Respin = _0x25e445.Play(_0x3f22b0.AudioClips.MG_Respin);
                    _0x25e445.SetVolume(this.m_gameView.BgmId, 0.3);
                    this.m_gameView.PlayAnimation(this.m_respinDeclare, _0x3f22b0.SpineAnimNames.Start, false);
                    this.PlayBgDiamond(_0x409f12);
                    this.m_RespinEnd = _0x13a184(this.node).delay(_0x3f22b0.AnimDuration.Respin_Declare.Start).call(function () {
                      _0x5c4603.m_gameView.PlayAnimation(_0x5c4603.m_respinDeclare, _0x3f22b0.SpineAnimNames.Loop, true);
                    }).start();
                    _0x55509a.next = 0xb;
                    return _0x2be50b.Wait(this.m_gameView, _0x3f22b0.AnimDuration.Respin_Declare.Start);
                  case 0xb:
                  case "end":
                    return _0x55509a.stop();
                }
              }
            }, _0x4049c9, this);
          }));
          return function (_0x524584) {
            return _0x420a2e.apply(this, arguments);
          };
        }();
        _0x3b7bb7.PlayBgDiamond = function (_0x204ed9) {
          for (var _0x1b08bd = 0x0; _0x1b08bd < this.m_fxFreeRespin.length; _0x1b08bd++) {
            if (_0x1b08bd !== _0x204ed9) {
              this.m_fxFreeRespin[_0x1b08bd].active = true;
              this.m_fxFreeRespin[_0x1b08bd].getComponent(_0x4cb146).play();
            }
          }
        };
        _0x3b7bb7.ClickRespinEnd = function () {
          var _0x202752 = this;
          if (!this.m_isClickStop) {
            if (this.m_RespinEnd) {
              this.m_RespinEnd.stop();
              this.m_RespinEnd = null;
            }
            this.m_RespinEnd = _0x13a184(this.node).call(function () {
              _0x202752.RespinEnd();
            }).start();
            this.m_isClickStop = true;
          }
        };
        _0x3b7bb7.RespinEnd = function () {
          var _0x183b10 = _0x23d9d7(_0x1a789f().mark(function _0x3fd27d() {
            var _0x370f50;
            return _0x1a789f().wrap(function (_0x24c7e) {
              for (;;) {
                switch (_0x24c7e.prev = _0x24c7e.next) {
                  case 0x0:
                    if (this.m_isClickStop) {
                      _0x24c7e.next = 0x7;
                      break;
                    }
                    _0x24c7e.next = 0x3;
                    return this.m_gameView.PlayAnimation(this.m_respinDeclare, _0x3f22b0.SpineAnimNames.End, false);
                  case 0x3:
                    this.m_respinDeclare.node.active = false;
                    this.m_hpText1.active = false;
                    _0x25e445.SetVolume(this.m_gameView.BgmId, 0.4);
                    for (_0x370f50 = 0x0; _0x370f50 < this.m_fxFreeRespin.length; _0x370f50++) {
                      this.m_fxFreeRespin[_0x370f50].active = false;
                    }
                  case 0x7:
                    this.m_isClickStop = false;
                  case 0x8:
                  case "end":
                    return _0x24c7e.stop();
                }
              }
            }, _0x3fd27d, this);
          }));
          return function () {
            return _0x183b10.apply(this, arguments);
          };
        }();
        _0x3b7bb7.NearWinStart = function (_0x5d865b, _0x562b6b) {
          if (-0x1 != _0x5d865b) {
            this.m_nearWinParentNode[_0x5d865b].active = true;
            this.m_nearWinParentNode[_0x5d865b].getComponent(_0xbb1863).opacity = 0xff;
            switch (_0x562b6b) {
              case _0x3f22b0.NearWinType.Respin_NearWin:
                this.m_nearWinNode.setParent(this.m_nearWinParentNode[_0x5d865b]);
                this.m_nearWinNode.active = true;
                this.SetNearWinAnim(_0x562b6b);
                _0x13a184(this.m_nearWinNode.getComponent(_0xbb1863)).to(_0x3f22b0.AnimDuration.RESPIN_NEARWIN_START, {
                  'opacity': 0xff
                }).start();
                break;
              case _0x3f22b0.NearWinType.Respin_NearWin2:
                this.m_nearWinNode.setParent(this.m_nearWinParentNode[_0x5d865b]);
                this.m_nearWinNode.active = true;
                this.SetNearWinAnim(_0x562b6b);
                _0x13a184(this.m_nearWinNode.getComponent(_0xbb1863)).to(_0x3f22b0.AnimDuration.RESPIN_NEARWIN_START, {
                  'opacity': 0xff
                }).start();
                this.RespinNearwinParticle(true);
                break;
              case _0x3f22b0.NearWinType.JP_NearWin:
                this.m_nearWinNode.setParent(this.m_nearWinParentNode[_0x5d865b]);
                this.m_nearWinNode.active = true;
                this.SetNearWinAnim(_0x562b6b);
                _0x13a184(this.m_nearWinNode.getComponent(_0xbb1863)).to(_0x3f22b0.AnimDuration.JP_NEARWIN_START, {
                  'opacity': 0xff
                }).start();
                break;
              case _0x3f22b0.NearWinType.Respin_Buy_Start:
                this.m_buyNearWinNode.setParent(this.m_nearWinParentNode[_0x5d865b]);
                this.m_buyNearWinNode.active = true;
                this.m_buyNearWinNode.getComponent(_0xbb1863).opacity = 0xff;
                this.SetNearWinAnim(_0x562b6b);
                this.ModifyBuyRespinNum();
            }
            this.m_nearWinType = _0x562b6b;
          }
        };
        _0x3b7bb7.ResetNearWinNode = function () {
          this.m_nearWinNode.getChildByName("HP_NUM1").setPosition(-0x9c4, 0x0);
          this.m_nearWinNode.getChildByName("HP_NUM1").setScale(0x1, 0x1);
          this.m_nearWinNode.getChildByName('HP_NUM2').setPosition(-0x9c4, 0x0);
          this.m_nearWinNode.getChildByName('HP_NUM2').setScale(0x1, 0x1);
          this.m_nearWinNode.getChildByName('HP_TEXT1').setPosition(-0x9c4, 0x0);
          this.m_nearWinNode.getChildByName("HP_TEXT1").setScale(0x1, 0x1);
          this.m_nearWinNode.getChildByName("HP_TEXT2").setPosition(-0x9c4, 0x0);
          this.m_nearWinNode.getChildByName("HP_TEXT2").setScale(0x1, 0x1);
        };
        _0x3b7bb7.NearWinEnd = function () {
          var _0x1a4ff9 = this;
          this.m_nearWinParentNode[0x0].getComponent(_0x4d181c).enabled = false;
          this.m_nearWinParentNode[0x1].getComponent(_0x4d181c).enabled = false;
          this.m_nearWinParentNode[0x2].getComponent(_0x4d181c).enabled = false;
          switch (this.m_nearWinType) {
            case _0x3f22b0.NearWinType.Respin_NearWin:
              _0x13a184(this.m_nearWinNode.getComponent(_0xbb1863)).to(_0x3f22b0.AnimDuration.RESPIN_NEARWIN_END, {
                'opacity': 0.1
              }).start();
              break;
            case _0x3f22b0.NearWinType.Respin_NearWin2:
              _0x13a184(this.m_nearWinNode.getComponent(_0xbb1863)).to(_0x3f22b0.AnimDuration.RESPIN_NEARWIN_END, {
                'opacity': 0.1
              }).start();
              this.RespinNearwinParticle(false);
              break;
            case _0x3f22b0.NearWinType.JP_NearWin:
              _0x13a184(this.m_nearWinNode.getComponent(_0xbb1863)).to(_0x3f22b0.AnimDuration.JP_NEARWIN_END, {
                'opacity': 0.1
              }).start();
              break;
            case _0x3f22b0.NearWinType.Respin_Buy_Start:
              _0x13a184(this.m_buyNearWinNode.getComponent(_0xbb1863)).to(_0x3f22b0.AnimDuration.RESPIN_BUY_LOOP_END, {
                'opacity': 0.1
              }).call(function () {
                _0x1a4ff9.SetNearWinTextOpacity(0.1);
              }).start();
          }
        };
        _0x3b7bb7.CloseNearWinNode = function () {
          var _0x47e9ea = this;
          _0x13a184(this.m_nearWinParentNode[0x0].getComponent(_0xbb1863)).to(0.2, {
            'opacity': 0.1
          }).call(function () {
            _0x47e9ea.m_nearWinParentNode[0x0].active = false;
          }).start();
          _0x13a184(this.m_nearWinParentNode[0x1].getComponent(_0xbb1863)).to(0.2, {
            'opacity': 0.1
          }).call(function () {
            _0x47e9ea.m_nearWinParentNode[0x1].active = false;
          }).start();
          _0x13a184(this.m_nearWinParentNode[0x2].getComponent(_0xbb1863)).to(0.2, {
            'opacity': 0.1
          }).call(function () {
            _0x47e9ea.m_nearWinParentNode[0x2].active = false;
          }).start();
        };
        _0x3b7bb7.SetNearWinAnim = function (_0x5d3179) {
          var _0x42a4ad = this;
          var _0x587946 = this.m_nearWinNode.getComponent(_0x1370ff.Skeleton);
          var _0xbec7f0 = this.m_buyNearWinNode.getComponent(_0x1370ff.Skeleton);
          _0xbec7f0.setSkin("Time_Off");
          switch (_0x5d3179) {
            case _0x3f22b0.NearWinType.JP_NearWin:
              this.m_gameView.PlayAnimation(_0x587946, _0x3f22b0.SpineAnimNames.NearWin.JP_NearWin, true);
              this.SetNearWinTextOpacity(0.1);
              break;
            case _0x3f22b0.NearWinType.Respin_NearWin:
              this.m_gameView.PlayAnimation(_0x587946, _0x3f22b0.SpineAnimNames.NearWin.Respin_NearWin, true);
              this.SetNearWinTextOpacity(0.1);
              break;
            case _0x3f22b0.NearWinType.Respin_NearWin2:
              this.m_gameView.PlayAnimation(_0x587946, _0x3f22b0.SpineAnimNames.NearWin.Respin_NearWin2, true);
              this.SetNearWinTextOpacity(0.1);
              break;
            case _0x3f22b0.NearWinType.Respin_Buy_Start:
              this.SetHitRate();
              this.m_gameView.PlayAnimation(_0xbec7f0, _0x3f22b0.SpineAnimNames.NearWin.Respin_Buy_Start, false);
              this.SetNearWinTextOpacity(0.1);
              _0x13a184(this.m_buyNearWinNode).delay(_0x3f22b0.AnimDuration.NearWin.Respin_Buy_Start).call(function () {
                _0x42a4ad.SetNearWinTextOpacity(0xff);
                _0x42a4ad.m_gameView.PlayAnimation(_0xbec7f0, _0x3f22b0.SpineAnimNames.NearWin.Respin_Buy_Loop, true);
              }).delay(0.1).call(function () {
                if (_0x3f22b0.IsInJpEnter) {
                  _0x127133.OpenBetView();
                  _0x42a4ad.m_gameView.SlotReels.CanStartSlowspin = true;
                }
                _0x42a4ad.m_gameView.CanPlateSpin = true;
                _0x42a4ad.m_gameView.CanSpaceSpin = true;
                _0x127133.SetSpinState(0x0);
              }).start();
          }
        };
        _0x3b7bb7.SetNearWinTextOpacity = function (_0x25f21d) {
          this.m_nearWinNode.children[0x0].getComponent(_0xbb1863).opacity = _0x25f21d;
          this.m_nearWinNode.children[0x1].getComponent(_0xbb1863).opacity = _0x25f21d;
          this.m_nearWinNode.children[0x2].getComponent(_0xbb1863).opacity = _0x25f21d;
          this.m_nearWinNode.children[0x3].getComponent(_0xbb1863).opacity = _0x25f21d;
          this.m_nearWinNode.children[0x4].getComponent(_0xbb1863).opacity = _0x25f21d;
          this.m_nearWinNode.children[0x5].getComponent(_0xbb1863).opacity = _0x25f21d;
          this.m_nearWinNode.children[0x6].getComponent(_0xbb1863).opacity = _0x25f21d;
          this.m_buyNearWinNode.children[0x0].getComponent(_0xbb1863).opacity = _0x25f21d;
          this.m_buyNearWinNode.children[0x1].getComponent(_0xbb1863).opacity = _0x25f21d;
          this.m_buyNearWinNode.children[0x2].getComponent(_0xbb1863).opacity = _0x25f21d;
          this.m_buyNearWinNode.children[0x3].getComponent(_0xbb1863).opacity = _0x25f21d;
          this.m_buyNearWinNode.children[0x4].getComponent(_0xbb1863).opacity = _0x25f21d;
          this.m_buyNearWinNode.children[0x5].getComponent(_0xbb1863).opacity = _0x25f21d;
          this.m_buyNearWinNode.children[0x6].getComponent(_0xbb1863).opacity = _0x25f21d;
        };
        _0x3b7bb7.SetHitRate = function () {
          if (this.m_gameView.SpinAck) {
            this.m_buyNearWinNode.getChildByName("HP_NUM3").getChildByName("NUM1").getComponent(_0x19ba3d).string = this.m_gameView.SpinAck.CanBuyRate.toString();
          }
        };
        _0x3b7bb7.ModifyBuyRespinNum = function () {
          if (this.m_gameView.SpinAck) {
            this.m_buyNearWinNode.getChildByName('HP_NUM2').getComponent(_0x19ba3d).string = this.Number2KM(_0x127133.GetNowBetValue() * (this.m_gameView.ExtraBet.IsExtra ? this.m_gameView.BuyMul[0x1] : this.m_gameView.BuyMul[0x0]) * this.m_gameView.SpinAck.Mult).toString();
          }
        };
        _0x3b7bb7.Number2KM = function (_0x4c5507) {
          return Math.abs(_0x4c5507) >= 0xf4240 ? _0x546bb1.strip(_0x4c5507 / 0xf4240).toString() + 'M' : Math.abs(_0x4c5507) >= 0x3e8 ? _0x546bb1.strip(_0x4c5507 / 0x3e8).toString() + 'K' : _0x546bb1.strip(_0x4c5507).toString();
        };
        _0x3b7bb7.SetJPCountDown = function (_0x47cd17) {
          var _0x2b6392 = this;
          this.m_buyNearWinNode.getChildByName("HP_NUM1").active = true;
          this.m_buyNearWinNode.getChildByName('HP_NUM1').getComponent(_0x19ba3d).string = this.m_countDownTime.toString();
          this.m_countDownTime--;
          var _0x15a8f7 = function _0x3e4451() {
            _0x25e445.Play(_0x3f22b0.AudioClips.ExtraBuy_Clock);
            _0x2b6392.m_buyNearWinNode.getChildByName("HP_NUM1").getComponent(_0x19ba3d).string = _0x2b6392.m_countDownTime.toString();
            _0x2b6392.m_countDownTime--;
            if (_0x2b6392.m_countDownTime < 0x0) {
              _0x2b6392.unschedule(_0x3e4451);
              _0x47cd17();
            }
          };
          this.m_jPCountDownCallBack = _0x15a8f7;
          this.schedule(_0x15a8f7, 0x1, 0xa);
        };
        _0x3b7bb7.JPCountdownEnd = function () {
          this.m_buyNearWinNode.getComponent(_0x1370ff.Skeleton).setSkin("Time_Off");
          this.m_buyNearWinNode.getChildByName("HP_NUM1").active = false;
          this.unschedule(this.m_jPCountDownCallBack);
        };
        _0x3b7bb7.ResetReelFramePos = function () {
          this.m_reelFrameL.node.active = false;
          this.m_reelFrameL.node.active = true;
          this.m_reelFrameR.node.active = false;
          this.m_reelFrameR.node.active = true;
        };
        _0x3b7bb7.RespinNearwinParticle = function (_0xa8c197) {
          this.m_nearWinNode.getChildByName("PP1").active = _0xa8c197;
          this.m_nearWinNode.getChildByName('PP2').active = _0xa8c197;
        };
        _0x48eefc(_0x2fc20b, [{
          'key': "ReelFrameR",
          'get': function () {
            return this.m_reelFrameR;
          }
        }, {
          'key': "ReelFrameL",
          'get': function () {
            return this.m_reelFrameL;
          }
        }, {
          'key': 'NearWinParentNode',
          'get': function () {
            return this.m_nearWinParentNode;
          }
        }, {
          'key': "IsBuyRespin",
          'get': function () {
            return this.m_isBuyRespin;
          },
          'set': function (_0x5a060c) {
            this.m_isBuyRespin = _0x5a060c;
          }
        }, {
          'key': "JpNewRound",
          'get': function () {
            return this.m_jpNewRound;
          },
          'set': function (_0x5860f5) {
            this.m_jpNewRound = _0x5860f5;
          }
        }, {
          'key': 'CountDownTime',
          'set': function (_0x4588ff) {
            this.m_countDownTime = _0x4588ff;
          }
        }]);
        return _0x2fc20b;
      }(_0x2d51ac);
      _0x2af337 = _0x1c868d(_0x5db3ff.prototype, "m_respinDeclare", [_0x207c7b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x495ac5 = _0x1c868d(_0x5db3ff.prototype, "m_hpText1", [_0x138a90], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x528e12 = _0x1c868d(_0x5db3ff.prototype, 'm_reelFrameR', [_0x416aed], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x9e1a3a = _0x1c868d(_0x5db3ff.prototype, 'm_reelFrameL', [_0x580179], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x34fb84 = _0x1c868d(_0x5db3ff.prototype, 'm_nearWinPrefab', [_0x4053a1], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x46b655 = _0x1c868d(_0x5db3ff.prototype, "m_nearWinParentNode", [_0x25daf5], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x5a3bf8 = _0x1c868d(_0x5db3ff.prototype, "m_fxFreeRespin", [_0xeaf42], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      var _0x4959ef = _0x16e5e3(_0x4ed0e4 = _0x5db3ff) || _0x4ed0e4;
      var _0x365610;
      var _0x12c7ee;
      var _0x3e74ae;
      var _0x46feaf;
      var _0x5a14b3;
      var _0x912ba9;
      var _0x13eff6;
      var _0x172b23;
      var _0x400dc1;
      var _0x276e08;
      var _0x349132;
      var _0x52bc98;
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "91e32yhjgxA1ozzmvch9IKe", 'GameIntro', undefined);
      var _0x5c012b = _0x6126fa.ccclass;
      var _0x53ad24 = _0x6126fa.property;
      _0x365610 = _0x53ad24({
        'type': _0x1370ff.Skeleton,
        'tooltip': "背景L"
      });
      _0x12c7ee = _0x53ad24({
        'type': _0x1e3e82,
        'tooltip': '背景L節點'
      });
      _0x3e74ae = _0x53ad24({
        'type': _0x1370ff.Skeleton,
        'tooltip': '背景S'
      });
      _0x46feaf = _0x53ad24({
        'type': _0x1e3e82,
        'tooltip': "背景S節點"
      });
      _0x5a14b3 = _0x53ad24({
        'type': _0x1370ff.Skeleton,
        'tooltip': '人物'
      });
      _0x13eff6 = function (_0x7c5ed7) {
        function _0x1cfd8d() {
          var _0x432f8f;
          var _0x1deb27 = arguments.length;
          var _0x177ab1 = new Array(_0x1deb27);
          for (var _0x173f37 = 0x0; _0x173f37 < _0x1deb27; _0x173f37++) {
            _0x177ab1[_0x173f37] = arguments[_0x173f37];
          }
          _0x40ccb3(_0x432f8f = _0x7c5ed7.call.apply(_0x7c5ed7, [this].concat(_0x177ab1)) || this, 'm_backGroundL', _0x172b23, _0x10e60a(_0x432f8f));
          _0x40ccb3(_0x432f8f, "m_backGroundLNode", _0x400dc1, _0x10e60a(_0x432f8f));
          _0x40ccb3(_0x432f8f, "m_backGroundS", _0x276e08, _0x10e60a(_0x432f8f));
          _0x40ccb3(_0x432f8f, "m_backGroundSNode", _0x349132, _0x10e60a(_0x432f8f));
          _0x40ccb3(_0x432f8f, "m_character", _0x52bc98, _0x10e60a(_0x432f8f));
          _0x432f8f.m_gameView = null;
          return _0x432f8f;
        }
        _0x39e18e(_0x1cfd8d, _0x7c5ed7);
        var _0x47e28a = _0x1cfd8d.prototype;
        _0x47e28a.Init = function (_0x56cf62) {
          this.m_gameView = _0x56cf62;
          this.m_backGroundLNode.active = false;
          this.m_backGroundSNode.active = false;
          this.m_character.node.active = false;
        };
        _0x47e28a.GameIntroStart = function () {
          this.node.active = true;
          this.m_character.node.active = true;
          this.m_backGroundL.timeScale = 0x0;
          this.m_backGroundS.timeScale = 0x0;
          this.m_character.timeScale = 0x0;
          if (this.m_gameView.IsLandscape) {
            this.m_backGroundLNode.active = true;
            this.m_backGroundL.setAnimation(0x0, _0x3f22b0.SpineAnimNames.GameIntro_L, true);
            this.m_character.setAnimation(0x0, _0x3f22b0.SpineAnimNames.GameIntro_L, false);
          } else {
            this.m_backGroundSNode.active = true;
            this.m_backGroundS.setAnimation(0x0, _0x3f22b0.SpineAnimNames.GameIntro_S, true);
            this.m_character.setAnimation(0x0, _0x3f22b0.SpineAnimNames.GameIntro_S, false);
          }
        };
        _0x47e28a.GameIntro = function () {
          var _0x3a45fd;
          var _0x223dc5 = this;
          this.m_backGroundL.timeScale = 0x1;
          this.m_backGroundS.timeScale = 0x1;
          this.m_character.timeScale = 0x1;
          if (this.m_gameView.IsLandscape) {
            this.m_backGroundL.setAnimation(0x0, _0x3f22b0.SpineAnimNames.GameIntro_L, true);
            _0x3a45fd = this.m_character.setAnimation(0x0, _0x3f22b0.SpineAnimNames.GameIntro_L, false);
          } else {
            this.m_backGroundS.setAnimation(0x0, _0x3f22b0.SpineAnimNames.GameIntro_S, true);
            _0x3a45fd = this.m_character.setAnimation(0x0, _0x3f22b0.SpineAnimNames.GameIntro_S, false);
          }
          if (null != _0x3a45fd) {
            _0x13a184(this.node).delay(_0x3a45fd.animation.duration).call(function () {
              _0x223dc5.m_gameView.EffectPlate.GameIntroEnd();
              _0x223dc5.m_backGroundLNode.active = false;
              _0x223dc5.m_backGroundSNode.active = false;
              _0x223dc5.m_character.node.active = false;
              _0x223dc5.node.active = false;
            }).start();
          }
          return _0x3a45fd.animation.duration;
        };
        _0x47e28a.ChangeSize = function () {
          if (this.m_gameView) {
            if (this.m_gameView.IsLandscape) {
              this.m_backGroundL.setAnimation(0x0, _0x3f22b0.SpineAnimNames.GameIntro_L, true);
              this.m_character.setAnimation(0x0, _0x3f22b0.SpineAnimNames.GameIntro_L, false);
            } else {
              this.m_backGroundS.setAnimation(0x0, _0x3f22b0.SpineAnimNames.GameIntro_S, true);
              this.m_character.setAnimation(0x0, _0x3f22b0.SpineAnimNames.GameIntro_S, false);
            }
          }
        };
        return _0x1cfd8d;
      }(_0x2d51ac);
      _0x172b23 = _0x1c868d(_0x13eff6.prototype, "m_backGroundL", [_0x365610], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x400dc1 = _0x1c868d(_0x13eff6.prototype, "m_backGroundLNode", [_0x12c7ee], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x276e08 = _0x1c868d(_0x13eff6.prototype, "m_backGroundS", [_0x3e74ae], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x349132 = _0x1c868d(_0x13eff6.prototype, "m_backGroundSNode", [_0x46feaf], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x52bc98 = _0x1c868d(_0x13eff6.prototype, "m_character", [_0x5a14b3], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x57cc2f = _0x5c012b(_0x912ba9 = _0x13eff6) || _0x912ba9;
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, 'eb033pmYDhAjadYFiwbi8gp', 'SpineKit', undefined);
      var _0x3b97c8 = function () {
        function _0x21b37e() {}
        _0x21b37e.ForceCancel = function (_0x3caaa8, _0x3831c4) {
          var _0x2d25d0;
          var _0x26fdf6;
          var _0x1caee7;
          if (!(null == (_0x2d25d0 = this.m_cancelCbs) || null == (_0x26fdf6 = (_0x1caee7 = _0x2d25d0[_0x3caaa8])[_0x3831c4]))) {
            _0x26fdf6.call(_0x1caee7);
          }
        };
        _0x21b37e.PlayAnimation = function (_0x1a490f, _0x501fa6, _0x591d37, _0x10075a, _0x4eed7e, _0x2219bf) {
          var _0x364d13 = this;
          if (undefined === _0x591d37) {
            _0x591d37 = false;
          }
          if (undefined === _0x10075a) {
            _0x10075a = 0x0;
          }
          if (undefined === _0x2219bf) {
            _0x2219bf = true;
          }
          return new Promise(function (_0x36918b) {
            _0x364d13.m_cancelCbs[_0x1a490f.name] = {};
            _0x364d13.m_cancelCbs[_0x1a490f.name][_0x501fa6] = function () {
              _0x36918b(true);
            };
            var _0x4e39e8 = true;
            var _0x30e9da = _0x1a490f.getState();
            if (_0x30e9da) {
              var _0x5d616e = _0x30e9da.expandToIndex(_0x10075a);
              if (_0x5d616e) {
                var _0x5965d9 = _0x5d616e.animation.name + '.' + _0x501fa6;
                _0x4e39e8 = undefined === _0x30e9da.data.animationToMixTime[_0x5965d9];
              }
            }
            if (_0x4e39e8) {
              _0x1a490f.clearTrack(_0x10075a);
              if (_0x2219bf) {
                _0x1a490f.setToSetupPose();
              }
            }
            var _0x159a40 = _0x1a490f.setAnimation(_0x10075a, _0x501fa6, _0x591d37);
            if (_0x159a40) {
              _0x1a490f.setTrackEventListener(_0x159a40, function (_0x4d85ff, _0x27c644) {
                if (_0x159a40 && _0x159a40.animation.name == _0x4d85ff.animation.name) {
                  if (!(null == _0x4eed7e)) {
                    _0x4eed7e(_0x27c644.data.name);
                  }
                }
              });
              _0x1a490f.setTrackCompleteListener(_0x159a40, function (_0x502dc7) {
                if (_0x159a40 && _0x159a40.animation.name == _0x502dc7.animation.name) {
                  _0x1a490f.setTrackCompleteListener(_0x159a40, function () {});
                  _0x1a490f.setTrackInterruptListener(_0x159a40, function () {});
                  if (_0x364d13.m_cancelCbs[_0x1a490f.name] && _0x364d13.m_cancelCbs[_0x1a490f.name][_0x501fa6]) {
                    _0x364d13.m_cancelCbs[_0x1a490f.name][_0x501fa6] = null;
                  }
                  _0x36918b(false);
                }
              });
              _0x1a490f.setTrackInterruptListener(_0x159a40, function (_0x237d14) {
                if (_0x159a40 && _0x159a40.animation.name == _0x237d14.animation.name) {
                  _0x1a490f.setTrackCompleteListener(_0x159a40, function () {});
                  _0x1a490f.setTrackInterruptListener(_0x159a40, function () {});
                  if (_0x364d13.m_cancelCbs[_0x1a490f.name] && _0x364d13.m_cancelCbs[_0x1a490f.name][_0x501fa6]) {
                    _0x364d13.m_cancelCbs[_0x1a490f.name][_0x501fa6] = null;
                  }
                  _0x36918b(true);
                }
              });
            } else {
              _0x1a490f.setCompleteListener(function () {
                _0x1a490f.setCompleteListener(null);
                _0x1a490f.setInterruptListener(null);
                if (_0x364d13.m_cancelCbs[_0x1a490f.name] && _0x364d13.m_cancelCbs[_0x1a490f.name][_0x501fa6]) {
                  _0x364d13.m_cancelCbs[_0x1a490f.name][_0x501fa6] = null;
                }
                _0x36918b(false);
              });
              _0x1a490f.setInterruptListener(function () {
                _0x1a490f.setCompleteListener(null);
                _0x1a490f.setInterruptListener(null);
                if (_0x364d13.m_cancelCbs[_0x1a490f.name] && _0x364d13.m_cancelCbs[_0x1a490f.name][_0x501fa6]) {
                  _0x364d13.m_cancelCbs[_0x1a490f.name][_0x501fa6] = null;
                }
                _0x36918b(true);
              });
            }
          });
        };
        return _0x21b37e;
      }();
      var _0x489e49;
      var _0x133f43;
      var _0x489781;
      var _0x4d39dd;
      var _0x14012a;
      _0x3b97c8.m_cancelCbs = {};
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "8a31cgKi45F66NmbNgwFhhs", "MultiNearWinSpine", undefined);
      var _0x2f04c0 = _0x6126fa.ccclass;
      var _0x2acbb3 = _0x6126fa.property;
      _0x489e49 = _0x2f04c0('MultiNearWinSpine');
      _0x133f43 = _0x2acbb3({
        'type': _0x1370ff.Skeleton,
        'tooltip': 'Spine'
      });
      _0x4d39dd = function (_0x449630) {
        function _0x3c2d3a() {
          var _0x3e7d4b;
          var _0x315f85 = arguments.length;
          var _0x1fb086 = new Array(_0x315f85);
          for (var _0xd43720 = 0x0; _0xd43720 < _0x315f85; _0xd43720++) {
            _0x1fb086[_0xd43720] = arguments[_0xd43720];
          }
          _0x40ccb3(_0x3e7d4b = _0x449630.call.apply(_0x449630, [this].concat(_0x1fb086)) || this, 'm_spine', _0x14012a, _0x10e60a(_0x3e7d4b));
          return _0x3e7d4b;
        }
        _0x39e18e(_0x3c2d3a, _0x449630);
        _0x3c2d3a.prototype.PlayNearWin = function () {
          _0x3b97c8.PlayAnimation(this.m_spine, "Loop", true);
        };
        return _0x3c2d3a;
      }(_0x2d51ac);
      _0x14012a = _0x1c868d(_0x4d39dd.prototype, 'm_spine', [_0x133f43], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x4eea5a = _0x489e49(_0x489781 = _0x4d39dd) || _0x489781;
      var _0x491902;
      var _0x2135fb;
      var _0x4d806d;
      var _0x48b679;
      var _0x130879;
      var _0xf7f91f;
      var _0x387f43;
      var _0x4cb713;
      var _0xadf68f;
      var _0x36feea;
      var _0xbd833a;
      var _0x443553;
      var _0x239283;
      var _0x52b433;
      var _0x5ba337;
      var _0x4de161;
      var _0x3a5a32;
      var _0x3c0442;
      var _0x54c594;
      var _0x3f0afd;
      var _0x2d0168;
      var _0x45815c;
      var _0x4e7d7b;
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "0eb65MCx2hPgakNMH1hlLym", "EffectPlate", undefined);
      var _0x298896 = _0x6126fa.property;
      _0x491902 = _0x298896({
        'type': _0x1d1c71,
        'tooltip': '轉輪'
      });
      _0x2135fb = _0x298896({
        'type': _0x4888f0,
        'tooltip': '跑分'
      });
      _0x4d806d = _0x298896({
        'type': _0x1e3e82,
        'tooltip': "JP Win Parent Node"
      });
      _0x48b679 = _0x298896({
        'type': _0x4959ef,
        'tooltip': "重轉周邊"
      });
      _0x130879 = _0x298896(_0x350736);
      _0xf7f91f = _0x298896(_0x1e3e82);
      _0x387f43 = _0x298896({
        'type': _0xd5aced,
        'tooltip': '大獎跑分'
      });
      _0x4cb713 = _0x298896(_0x1e3e82);
      _0xadf68f = _0x298896(_0x1370ff.Skeleton);
      _0x36feea = _0x298896({
        'type': _0x57cc2f,
        'tooltip': '遊戲開始'
      });
      _0xbd833a = _0x298896({
        'type': _0x4eea5a,
        'tooltip': "乘倍輪NearWin特效"
      });
      _0x443553 = function (_0x41a2df) {
        function _0x2ce5cf() {
          var _0x4a21fc;
          var _0x3ac783 = arguments.length;
          var _0x49a618 = new Array(_0x3ac783);
          for (var _0x9e9e32 = 0x0; _0x9e9e32 < _0x3ac783; _0x9e9e32++) {
            _0x49a618[_0x9e9e32] = arguments[_0x9e9e32];
          }
          _0x40ccb3(_0x4a21fc = _0x41a2df.call.apply(_0x41a2df, [this].concat(_0x49a618)) || this, "m_slotReels", _0x239283, _0x10e60a(_0x4a21fc));
          _0x40ccb3(_0x4a21fc, "m_bottomBarRunningWinValue", _0x52b433, _0x10e60a(_0x4a21fc));
          _0x40ccb3(_0x4a21fc, "m_jpWinNode", _0x5ba337, _0x10e60a(_0x4a21fc));
          _0x40ccb3(_0x4a21fc, 'm_FXReel', _0x4de161, _0x10e60a(_0x4a21fc));
          _0x40ccb3(_0x4a21fc, 'm_symbolList', _0x3a5a32, _0x10e60a(_0x4a21fc));
          _0x40ccb3(_0x4a21fc, "m_linesAward", _0x3c0442, _0x10e60a(_0x4a21fc));
          _0x40ccb3(_0x4a21fc, 'm_bigWin', _0x54c594, _0x10e60a(_0x4a21fc));
          _0x40ccb3(_0x4a21fc, 'm_characterNode', _0x3f0afd, _0x10e60a(_0x4a21fc));
          _0x40ccb3(_0x4a21fc, "m_characterSpine", _0x2d0168, _0x10e60a(_0x4a21fc));
          _0x40ccb3(_0x4a21fc, 'm_gameIntro', _0x45815c, _0x10e60a(_0x4a21fc));
          _0x40ccb3(_0x4a21fc, "m_multiNearWinSpine", _0x4e7d7b, _0x10e60a(_0x4a21fc));
          _0x4a21fc.m_gameView = null;
          _0x4a21fc.m_jpAward = false;
          _0x4a21fc.m_award = false;
          _0x4a21fc.m_idleAward = false;
          _0x4a21fc.m_runningAward = false;
          _0x4a21fc.m_bigWinAward = false;
          _0x4a21fc.m_nearWinCol = 0x0;
          _0x4a21fc.m_isGameIntro = true;
          _0x4a21fc.nodeAll = new _0x1e3e82();
          _0x4a21fc.m_awardIdleNumber = 0x0;
          _0x4a21fc.m_awardIdle = false;
          _0x4a21fc.m_bigWinAni = null;
          _0x4a21fc.m_bigWinTouchable = false;
          _0x4a21fc.m_bigWinChange = null;
          _0x4a21fc.m_symbolEffects = [null, null, null, null, null, null, null, null, null];
          _0x4a21fc.m_isFirstTimeAward = false;
          _0x4a21fc.m_isStopIdleAward = false;
          _0x4a21fc.showValueCb = function (_0x3d7579) {
            return _0x127133.GetDisplayValue(_0x3d7579);
          };
          return _0x4a21fc;
        }
        _0x39e18e(_0x2ce5cf, _0x41a2df);
        var _0x36a6bb = _0x2ce5cf.prototype;
        _0x36a6bb.GameIntroEnd = function () {
          this.m_isGameIntro = false;
        };
        _0x36a6bb.AwardIdleClose = function () {
          this.m_awardIdle = false;
        };
        _0x36a6bb.onLoad = function () {};
        _0x36a6bb.start = function () {};
        _0x36a6bb.Init = function (_0x4e12d2) {
          this.m_gameView = _0x4e12d2;
          this.node.addChild(this.nodeAll);
          this.m_bottomBarRunningWinValue.Init(this.m_gameView);
          this.m_FXReel.Init(this.m_gameView);
          this.m_characterNode.active = true;
          this.m_characterSpine.setAnimation(0x0, _0x3f22b0.SpineAnimNames.Character.Idle, true);
          this.m_bigWin.node.active = false;
          if (!_0x2be50b.LoadLite) {
            this.m_gameIntro.Init(this.m_gameView);
          }
        };
        _0x36a6bb.InitJpSymbol = function () {
          for (var _0x15e039 = 0x0; _0x15e039 < _0x3f22b0.COL * _0x3f22b0.ROW; _0x15e039++) {
            var _0x2cc164 = new _0x1e3e82();
            (_0x2cc164 = _0x4497b0(this.m_symbolList[_0x3f22b0.Symbol.Symbol_JackPot])).name = 'JP_' + _0x15e039.toString();
            this.nodeAll.addChild(_0x2cc164);
            _0x2cc164.position = new _0x22f092(this.m_slotReels.SymbolPos[_0x15e039].x, this.m_slotReels.SymbolPos[_0x15e039].y, 0x0);
            _0x2cc164.rotation.getEulerAngles(new _0x22f092(0x0, 0x0, 0x0));
            _0x2cc164.getChildByName("Symbol").getComponent(_0x1370ff.Skeleton).setMix(_0x3f22b0.SpineAnimNames.Symbol_08.Left_Stare_Loop1, _0x3f22b0.SpineAnimNames.Symbol_08.Left_Stare_Loop2, 0.15);
            _0x2cc164.getChildByName('Symbol').getComponent(_0x1370ff.Skeleton).setMix(_0x3f22b0.SpineAnimNames.Symbol_08.Left_Stare_Loop2, _0x3f22b0.SpineAnimNames.Symbol_08.Left_Stare_Loop1, 0.15);
            _0x2cc164.getChildByName("Symbol").getComponent(_0x1370ff.Skeleton).setMix(_0x3f22b0.SpineAnimNames.Symbol_08.Right_Stare_Loop1, _0x3f22b0.SpineAnimNames.Symbol_08.Right_Stare_Loop2, 0.15);
            _0x2cc164.getChildByName("Symbol").getComponent(_0x1370ff.Skeleton).setMix(_0x3f22b0.SpineAnimNames.Symbol_08.Right_Stare_Loop2, _0x3f22b0.SpineAnimNames.Symbol_08.Right_Stare_Loop1, 0.15);
            _0x2cc164.getChildByName('Symbol').getComponent(_0x1370ff.Skeleton).setMix(_0x3f22b0.SpineAnimNames.Symbol_08.Right_Stare_Loop2, _0x3f22b0.SpineAnimNames.Symbol_08.Win, 0.15);
            _0x2cc164.active = false;
          }
        };
        _0x36a6bb.update = function () {
          if (!this.m_isStopIdleAward && 0x0 == this.m_idleAward && (this.m_gameView.GetCurrentState() === _0x227275.IDLE || this.m_gameView.GetCurrentState() === _0x3f22b0.GameState.AWARD) && 0x1 == this.m_awardIdle && 0x0 == this.m_award && !_0x444f9a.IsFeaturesDemoMode && (!_0x127133.IsAutoSpin || this.m_gameView.SpinAck.TotalWin >= _0x3f22b0.BIG_WIN_RATE * _0x127133.GetNowBetValue() || this.m_runningAward) && !this.m_isFirstTimeAward) {
            this.StopAward();
            var _0x2adf1c = this.m_gameView.SpinAck;
            this.AwardAnimation(_0x2adf1c.AwardDataVec[this.m_awardIdleNumber], true);
            this.m_awardIdleNumber++;
            if (this.m_awardIdleNumber == _0x2adf1c.AwardDataVec.length) {
              this.m_awardIdleNumber = 0x0;
            }
          }
        };
        _0x36a6bb.AwardJpEnd = function () {
          this.m_jpAward = false;
        };
        _0x36a6bb.ShowWinBoard = function (_0x5bd434, _0x1c69e5) {
          this.m_bottomBarRunningWinValue.node.active = true;
          this.m_bottomBarRunningWinValue.node.getComponent(_0x4cb146).play(_0x3f22b0.SpineAnimNames.Multiply_Win);
          this.m_bottomBarRunningWinValue.startAward(0x0, _0x5bd434, !(_0x1c69e5 > 0x1));
        };
        _0x36a6bb.SkipGameIntro = function () {
          if (this.m_gameIntro) {
            this.m_gameIntro.Init(this.m_gameView);
          }
        };
        _0x36a6bb.BigWinPlay = function (_0x29a81e) {
          _0x127133.SetSpinState(0xf);
          this.m_gameView.CanSpaceStop = true;
          this.m_gameView.CanPlateStop = true;
          var _0x147491 = 0x0;
          _0x147491 = _0x29a81e.TotalWin >= _0x3f22b0.SUPER_WIN_RATE * _0x127133.GetNowBetValue() ? _0x3f22b0.SUPERWIN_LV : _0x29a81e.TotalWin >= _0x3f22b0.MEGA_WIN_RATE * _0x127133.GetNowBetValue() ? _0x3f22b0.MEGAWIN_LV : _0x3f22b0.BIGWIN_LV;
          this.m_bigWin.node.active = true;
          this.m_bigWin.Show(_0x29a81e.TotalWin, _0x147491);
        };
        _0x36a6bb.Idle = function () {
          if (null != this.m_gameView.SpinAck && 0x0 != this.m_gameView.SpinAck.AwardDataVec.length) {
            this.m_awardIdle = true;
            this.m_awardIdleNumber = 0x0;
          }
        };
        _0x36a6bb.ShowAllAward = function () {
          var _0x213326 = _0x23d9d7(_0x1a789f().mark(function _0x4526bd(_0x48cd0a) {
            var _0x565928;
            var _0x25974b;
            var _0x478e91;
            return _0x1a789f().wrap(function (_0x832fa3) {
              for (;;) {
                switch (_0x832fa3.prev = _0x832fa3.next) {
                  case 0x0:
                    for (_0x565928 = _0x602232(_0x3f22b0.LINE_DEFINE[_0x48cd0a.Line]); !(_0x25974b = _0x565928()).done;) {
                      _0x478e91 = _0x25974b.value;
                      this.SymbolAnimation(0x3 * _0x478e91[0x0] + _0x478e91[0x1], this.m_slotReels.PlateInfo[_0x478e91[0x0]][_0x478e91[0x1]], _0x3f22b0.SpineAnimNames.Win);
                    }
                    _0x832fa3.next = 0x3;
                    return _0x2be50b.Wait(this.m_gameView, _0x3f22b0.DELAYTIME.WIN);
                  case 0x3:
                  case "end":
                    return _0x832fa3.stop();
                }
              }
            }, _0x4526bd, this);
          }));
          return function (_0x5596be) {
            return _0x213326.apply(this, arguments);
          };
        }();
        _0x36a6bb.AwardAnimationFirstTime = function () {
          var _0x48225b = _0x23d9d7(_0x1a789f().mark(function _0xcdebac(_0x3f6af2, _0x39a0a6, _0x5361fb) {
            return _0x1a789f().wrap(function (_0x12f0f7) {
              for (;;) {
                switch (_0x12f0f7.prev = _0x12f0f7.next) {
                  case 0x0:
                    this.m_isFirstTimeAward = true;
                    if (_0x39a0a6) {
                      this.m_idleAward = true;
                    } else {
                      this.m_award = true;
                    }
                    this.m_slotReels.ShowSymbolDark(true);
                    this.sortSymbolPrafabInstance();
                    this.m_linesAward[_0x3f6af2.Line].active = true;
                    if (!(_0x5361fb > 0x1)) {
                      _0x12f0f7.next = 0xc;
                      break;
                    }
                    _0x12f0f7.next = 0x8;
                    return this.ShowAllAward(_0x3f6af2);
                  case 0x8:
                    _0x12f0f7.next = 0xa;
                    return this.ShowAllAward(_0x3f6af2);
                  case 0xa:
                    _0x12f0f7.next = 0xe;
                    break;
                  case 0xc:
                    _0x12f0f7.next = 0xe;
                    return this.ShowAllAward(_0x3f6af2);
                  case 0xe:
                    this.m_isFirstTimeAward = false;
                    if (_0x39a0a6) {
                      this.m_idleAward = false;
                    } else {
                      this.m_award = false;
                      this.m_gameView.EffectPlate.Idle();
                    }
                  case 0x10:
                  case "end":
                    return _0x12f0f7.stop();
                }
              }
            }, _0xcdebac, this);
          }));
          return function (_0x1f156d, _0x4b4fe0, _0x196b68) {
            return _0x48225b.apply(this, arguments);
          };
        }();
        _0x36a6bb.AwardAnimation = function (_0x20a672, _0x480647) {
          var _0x2363e2 = this;
          if (_0x480647) {
            this.m_idleAward = true;
          } else {
            this.m_award = true;
          }
          this.ShowAllAward(_0x20a672);
          this.m_linesAward[_0x20a672.Line].active = true;
          this.m_slotReels.ShowSymbolDark(true);
          this.sortSymbolPrafabInstance();
          _0x13a184(this.node).delay(_0x3f22b0.DELAYTIME.WIN).call(function () {
            if (_0x480647) {
              _0x2363e2.m_idleAward = false;
            } else {
              _0x2363e2.m_award = false;
              _0x2363e2.m_gameView.EffectPlate.Idle();
            }
          }).start();
        };
        _0x36a6bb.SymbolAnimation = function (_0x1b7399, _0x42eb8f, _0x2165b9) {
          var _0x5c899e;
          this.m_slotReels.ToggleSymbolOnPlate([_0x1b7399], false);
          if (this.m_symbolEffects[_0x1b7399]) {
            (_0x5c899e = this.m_symbolEffects[_0x1b7399]).active = true;
          } else {
            (_0x5c899e = _0x4497b0(this.m_symbolList[_0x42eb8f])).name = _0x1b7399.toString();
            this.nodeAll.addChild(_0x5c899e);
            _0x5c899e.position = new _0x22f092(this.m_slotReels.SymbolPos[_0x1b7399].x, this.m_slotReels.SymbolPos[_0x1b7399].y, 0x0);
            _0x5c899e.rotation.getEulerAngles(new _0x22f092(0x0, 0x0, 0x0));
            this.m_symbolEffects[_0x1b7399] = _0x5c899e;
          }
          _0x5c899e.getChildByName("Symbol").getComponent(_0x1370ff.Skeleton).setAnimation(0x0, _0x2165b9, false);
          this.SetZIndex(_0x5c899e, _0x42eb8f);
        };
        _0x36a6bb.StopAward = function (_0x256db6) {
          if (undefined === _0x256db6) {
            _0x256db6 = false;
          }
          if (!this.m_gameView.IsJpGame || _0x256db6) {
            var _0x654059;
            for (var _0x53e9f7 = _0x602232(this.nodeAll.children); !(_0x654059 = _0x53e9f7()).done;) {
              var _0x5e7e7a = _0x654059.value;
              if (!_0x5e7e7a.name.includes('JP')) {
                _0x5e7e7a.active = false;
              }
            }
            this.m_slotReels.ToggleSymbolOnPlate([0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8], true);
            var _0x25300f;
            for (var _0x131455 = _0x602232(this.m_linesAward); !(_0x25300f = _0x131455()).done;) {
              _0x25300f.value.active = false;
            }
          }
        };
        _0x36a6bb.CleanAward = function () {
          var _0x2121e5;
          for (var _0x1058d7 = _0x602232(this.nodeAll.children); !(_0x2121e5 = _0x1058d7()).done;) {
            var _0x21eac9 = _0x2121e5.value;
            if (!_0x21eac9.name.includes('JP')) {
              _0x21eac9.destroy();
              _0x21eac9 = null;
            }
          }
          this.m_slotReels.ToggleSymbolOnPlate([0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8], true);
          var _0x4a9775;
          for (var _0xf69b7 = _0x602232(this.m_linesAward); !(_0x4a9775 = _0xf69b7()).done;) {
            _0x4a9775.value.active = false;
          }
        };
        _0x36a6bb.HideJpEffect = function () {
          var _0x4007b6;
          for (var _0x2a12c9 = _0x602232(this.nodeAll.children); !(_0x4007b6 = _0x2a12c9()).done;) {
            var _0x4a5f20 = _0x4007b6.value;
            if (_0x4a5f20.name.includes('JP')) {
              _0x4a5f20.active = false;
            }
          }
        };
        _0x36a6bb.sortSymbolPrafabInstance = function () {
          for (var _0x3eeab1 = 0x0; _0x3eeab1 < 0x9; _0x3eeab1++) {
            var _0x35060b;
            for (var _0x541613 = _0x602232(this.nodeAll.children); !(_0x35060b = _0x541613()).done;) {
              var _0x104157 = _0x35060b.value;
              if (Number(_0x104157.name) == _0x3eeab1) {
                _0x104157.setSiblingIndex(0x0);
              }
            }
          }
        };
        _0x36a6bb.StartSpin = function () {
          this.m_awardIdle = false;
          this.CleanAward();
          this.m_slotReels.ShowSymbolDark(false);
          _0x25e445.Play(_0x3f22b0.AudioClips.Reel_Spin);
          for (var _0x34fde4 = 0x0; _0x34fde4 < this.m_symbolEffects.length; _0x34fde4++) {
            this.m_symbolEffects[_0x34fde4] = null;
          }
        };
        _0x36a6bb.JpAllSymbolAnimation = function (_0x288de8, _0x45385e, _0x1deaa7) {
          if (undefined === _0x45385e) {
            _0x45385e = true;
          }
          if (undefined === _0x1deaa7) {
            _0x1deaa7 = false;
          }
          for (var _0x514286 = 0x0; _0x514286 < _0x3f22b0.COL; _0x514286++) {
            if (!(_0x514286 == this.m_gameView.RespinCol && _0x45385e)) {
              this.JpSymbolAnimation(_0x514286, _0x288de8, _0x1deaa7);
            }
          }
        };
        _0x36a6bb.JpSymbolAnimation = function () {
          var _0x3ae06f = _0x23d9d7(_0x1a789f().mark(function _0x547bdf(_0x54f4ef, _0x533636, _0x2961f8) {
            var _0x17c3a6;
            var _0x58b841;
            var _0x94846c;
            var _0x5f2209;
            var _0x2e9b62;
            return _0x1a789f().wrap(function (_0x27ebfb) {
              for (;;) {
                switch (_0x27ebfb.prev = _0x27ebfb.next) {
                  case 0x0:
                    if (undefined === _0x2961f8) {
                      _0x2961f8 = false;
                    }
                    _0x17c3a6 = [];
                    _0x58b841 = 0x0;
                  case 0x3:
                    if (!(_0x58b841 < _0x3f22b0.ROW)) {
                      _0x27ebfb.next = 0x1f;
                      break;
                    }
                    _0x94846c = _0x54f4ef * _0x3f22b0.ROW + _0x58b841;
                    (_0x5f2209 = this.nodeAll.getChildByName('JP_' + _0x94846c.toString())).active = true;
                    _0x2e9b62 = _0x5f2209.getChildByName("Symbol").getComponent(_0x1370ff.Skeleton);
                    _0x27ebfb.t0 = _0x533636;
                    _0x27ebfb.next = _0x27ebfb.t0 === _0x3f22b0.JP_STAGE.STOP ? 0xb : _0x27ebfb.t0 === _0x3f22b0.JP_STAGE.BEFORE_BUY_RESPIN ? 0xe : _0x27ebfb.t0 === _0x3f22b0.JP_STAGE.BUY_RESPIN ? 0x10 : _0x27ebfb.t0 === _0x3f22b0.JP_STAGE.NEARWIN ? 0x13 : _0x27ebfb.t0 === _0x3f22b0.JP_STAGE.AWARD ? 0x16 : _0x27ebfb.t0 === _0x3f22b0.JP_STAGE.TURN_LEFT ? 0x19 : 0x1c;
                    break;
                  case 0xb:
                    _0x3f22b0.IsJpStopOK = false;
                    this.m_gameView.PlayAnimation(_0x2e9b62, _0x3f22b0.SpineAnimNames.Stop, false);
                    return _0x27ebfb.abrupt("break", 0x1c);
                  case 0xe:
                    if (this.m_gameView.RespinCol > _0x54f4ef || _0x2961f8) {
                      this.m_gameView.PlayAnimation(_0x2e9b62, _0x3f22b0.SpineAnimNames.Symbol_08.Right_Stare_Start, false);
                      this.m_slotReels.GetSymbolNode(_0x54f4ef, _0x58b841).scale = _0x243100(-0x1, 0x1, 0x0);
                    }
                    return _0x27ebfb.abrupt('break', 0x1c);
                  case 0x10:
                    _0x3f22b0.JokerTurnRight = true;
                    if (this.m_gameView.RespinCol > _0x54f4ef) {
                      this.m_gameView.PlayAnimation(_0x2e9b62, _0x3f22b0.SpineAnimNames.Symbol_08.Right_Stare_Loop1, true, 0x1, false);
                      this.m_slotReels.GetSymbolNode(_0x54f4ef, _0x58b841).scale = _0x243100(-0x1, 0x1, 0x0);
                    } else if (this.m_gameView.RespinCol < _0x54f4ef) {
                      this.m_gameView.PlayAnimation(_0x2e9b62, _0x3f22b0.SpineAnimNames.Symbol_08.Left_Stare_Loop1, true, 0x1, false);
                      this.m_slotReels.GetSymbolNode(_0x54f4ef, _0x58b841).scale = _0x243100(0x1, 0x1, 0x0);
                    }
                    return _0x27ebfb.abrupt("break", 0x1c);
                  case 0x13:
                    _0x3f22b0.JokerTurnRight = true;
                    if (this.m_gameView.RespinCol > _0x54f4ef || _0x2961f8) {
                      this.m_gameView.PlayAnimation(_0x2e9b62, _0x3f22b0.SpineAnimNames.Symbol_08.Right_Stare_Loop2, true, 0x1, false);
                      this.m_slotReels.GetSymbolNode(_0x54f4ef, _0x58b841).scale = _0x243100(-0x1, 0x1, 0x0);
                    } else if (this.m_gameView.RespinCol < _0x54f4ef) {
                      this.m_gameView.PlayAnimation(_0x2e9b62, _0x3f22b0.SpineAnimNames.Symbol_08.Left_Stare_Loop2, true, 0x1, false);
                      this.m_slotReels.GetSymbolNode(_0x54f4ef, _0x58b841).scale = _0x243100(0x1, 0x1, 0x0);
                    }
                    return _0x27ebfb.abrupt('break', 0x1c);
                  case 0x16:
                    if (this.m_gameView.RespinCol > _0x54f4ef && this.m_gameView.IsJpTurnRight) {
                      this.m_slotReels.GetSymbolNode(_0x54f4ef, _0x58b841).scale = _0x243100(0x1, 0x1, 0x0);
                    }
                    this.m_gameView.PlayAnimation(_0x2e9b62, _0x3f22b0.SpineAnimNames.Win, false);
                    return _0x27ebfb.abrupt("break", 0x1c);
                  case 0x19:
                    this.m_slotReels.GetSymbolNode(_0x54f4ef, _0x58b841).scale = _0x243100(0x1, 0x1, 0x0);
                    _0x17c3a6.push(this.m_gameView.PlayAnimation(_0x2e9b62, _0x3f22b0.SpineAnimNames.Symbol_08.Right_Turn_Left, false));
                    return _0x27ebfb.abrupt("break", 0x1c);
                  case 0x1c:
                    _0x58b841++;
                    _0x27ebfb.next = 0x3;
                    break;
                  case 0x1f:
                    _0x27ebfb.next = 0x21;
                    return Promise.all(_0x17c3a6);
                  case 0x21:
                  case "end":
                    return _0x27ebfb.stop();
                }
              }
            }, _0x547bdf, this);
          }));
          return function (_0x4e3d82, _0x246769, _0x1d6e64) {
            return _0x3ae06f.apply(this, arguments);
          };
        }();
        _0x36a6bb.HideJpSymbol = function () {
          var _0x190bd4 = this;
          if (_0x3f22b0.JokerTurnRight) {
            var _0x17ada1 = false;
            this.nodeAll.children.forEach(function (_0x5aa313) {
              if (_0x5aa313.active && ["JP_0", "JP_1", "JP_2"].includes(_0x5aa313.name)) {
                _0x17ada1 = true;
              }
            });
            if (_0x17ada1) {
              this.nodeAll.children.forEach(function (_0x19ba55) {
                if (_0x19ba55.active && ['JP_0', 'JP_1', "JP_2", "JP_3", "JP_4", 'JP_5'].includes(_0x19ba55.name)) {
                  var _0x4d35a0 = _0x19ba55.getChildByName("Symbol").getComponent(_0x1370ff.Skeleton);
                  _0x190bd4.m_gameView.PlayAnimation(_0x4d35a0, _0x3f22b0.SpineAnimNames.Symbol_08.Right_Turn_Left, false);
                }
              });
            }
          }
          for (var _0x663f81 = 0x0; _0x663f81 < _0x3f22b0.COL; _0x663f81++) {
            for (var _0x436741 = 0x0; _0x436741 < _0x3f22b0.ROW; _0x436741++) {
              this.m_slotReels.GetSymbolNode(_0x663f81, _0x436741).scale = _0x243100(0x1, 0x1, 0x0);
            }
          }
          this.nodeAll.children.forEach(function (_0xc30d26) {
            _0xc30d26.active = false;
          });
          _0x3f22b0.JokerTurnRight = false;
        };
        _0x36a6bb.BuyJpRequest = function (_0x126e71) {
          this.FXReel.CountDownTime = 0xa;
          _0x25e445.Play(_0x3f22b0.AudioClips.ExtraBuy_Show);
          this.m_FXReel.NearWinStart(_0x126e71, _0x3f22b0.NearWinType.Respin_Buy_Start);
          _0x3f22b0.CanLog = true;
        };
        _0x36a6bb.StartNearWin = function (_0xddf1c0, _0xc53934) {
          if (undefined === _0xc53934) {
            _0xc53934 = false;
          }
          this.m_nearWinCol = _0xddf1c0;
          if (!this.m_gameView.IsHardStop) {
            if (this.m_gameView.IsJpGame || _0xc53934) {
              this.m_FXReel.NearWinStart(_0xddf1c0, _0x3f22b0.NearWinType.JP_NearWin);
            } else {
              this.m_FXReel.NearWinStart(_0xddf1c0, _0x3f22b0.NearWinType.Respin_NearWin);
            }
            if (this.m_gameView.BgmId_NearWin) {
              _0x25e445.Stop(this.m_gameView.BgmId_NearWin);
              this.m_gameView.BgmId_NearWin = null;
            }
            this.m_gameView.BgmId_NearWin = _0x25e445.Play(_0x3f22b0.AudioClips.NearWin);
          }
        };
        _0x36a6bb.EndNearWin = function () {
          var _0x1f708f = _0x23d9d7(_0x1a789f().mark(function _0x5481ed() {
            return _0x1a789f().wrap(function (_0x55f8cb) {
              for (;;) {
                switch (_0x55f8cb.prev = _0x55f8cb.next) {
                  case 0x0:
                    this.m_FXReel.NearWinEnd();
                    if (this.m_gameView.BgmId_NearWin) {
                      this.m_gameView.SetBGMVolumeByFade(0x1, 0x0, 0.2, this.m_gameView.BgmId_NearWin);
                      this.m_gameView.BgmId_NearWin = null;
                    }
                    if (this.m_gameView.BgmId_MG_Respin) {
                      this.m_gameView.SetBGMVolumeByFade(0x1, 0x0, 0.2, this.m_gameView.BgmId_MG_Respin);
                      this.m_gameView.BgmId_MG_Respin = null;
                    }
                    if (!this.m_gameView.SlotReels.IsThirdColRespin() || !_0x3f22b0.JokerTurnRight || this.m_gameView.SpinAck.CanBuy) {
                      _0x55f8cb.next = 0xf;
                      break;
                    }
                    _0x3f22b0.JokerTurnRight = false;
                    if (0x2 != this.m_nearWinCol) {
                      _0x55f8cb.next = 0xb;
                      break;
                    }
                    this.JpSymbolAnimation(0x0, _0x3f22b0.JP_STAGE.TURN_LEFT);
                    _0x55f8cb.next = 0x9;
                    return this.JpSymbolAnimation(0x1, _0x3f22b0.JP_STAGE.TURN_LEFT);
                  case 0x9:
                    _0x55f8cb.next = 0xe;
                    break;
                  case 0xb:
                    if (0x1 != this.m_nearWinCol) {
                      _0x55f8cb.next = 0xe;
                      break;
                    }
                    _0x55f8cb.next = 0xe;
                    return this.JpSymbolAnimation(0x0, _0x3f22b0.JP_STAGE.TURN_LEFT);
                  case 0xe:
                    this.nodeAll.children.forEach(function (_0x52d26b) {
                      _0x52d26b.active = false;
                    });
                  case 0xf:
                  case "end":
                    return _0x55f8cb.stop();
                }
              }
            }, _0x5481ed, this);
          }));
          return function () {
            return _0x1f708f.apply(this, arguments);
          };
        }();
        _0x36a6bb.ChangeSize = function () {
          if (this.m_gameIntro) {
            this.m_gameIntro.ChangeSize();
          }
        };
        _0x36a6bb.ShowGameIntro = function () {
          if (this.m_gameIntro) {
            var _0x5c6cb3 = this.m_gameIntro.GameIntro();
            _0x25e445.Play(_0x3f22b0.AudioClips.Play_Ready);
            return _0x5c6cb3;
          }
        };
        _0x36a6bb.GameIntroStart = function () {
          if (this.m_gameIntro) {
            this.m_gameIntro.GameIntroStart();
          }
        };
        _0x36a6bb.SetZIndex = function (_0x84417a, _0xeb44d) {
          if (_0xeb44d == _0x3f22b0.Symbol.Symbol_JackPot) {
            _0x546bb1.SetOrderedZindex(_0x84417a, _0x3f22b0.EFFECT_ZINDEX.JOKER);
          } else if (_0xeb44d == _0x3f22b0.Symbol.Symbol_Wild) {
            _0x546bb1.SetOrderedZindex(_0x84417a, _0x3f22b0.EFFECT_ZINDEX.WILD);
          } else {
            _0x546bb1.SetOrderedZindex(_0x84417a, _0x3f22b0.EFFECT_ZINDEX.NORMAL);
          }
        };
        _0x36a6bb.StartMultiNearWin = function () {
          this.m_multiNearWinSpine.node.active = true;
          _0x13a184(this.m_multiNearWinSpine.getComponent(_0xbb1863)).to(_0x3f22b0.AnimDuration.RESPIN_NEARWIN_START, {
            'opacity': 0xff
          }).start();
          this.m_multiNearWinSpine.PlayNearWin();
          if (this.m_gameView.BgmId_NearWin) {
            _0x25e445.Stop(this.m_gameView.BgmId_NearWin);
            this.m_gameView.BgmId_NearWin = null;
          }
          this.m_gameView.BgmId_NearWin = _0x25e445.Play(_0x3f22b0.AudioClips.NearWin);
        };
        _0x36a6bb.EndMultiNearWin = function () {
          _0x13a184(this.m_multiNearWinSpine.getComponent(_0xbb1863)).to(_0x3f22b0.AnimDuration.RESPIN_NEARWIN_END, {
            'opacity': 0.1
          }).start();
          this.m_multiNearWinSpine.node.active = false;
          if (this.m_gameView.BgmId_NearWin) {
            this.m_gameView.SetBGMVolumeByFade(0x1, 0x0, 0.2, this.m_gameView.BgmId_NearWin);
            this.m_gameView.BgmId_NearWin = null;
          }
        };
        _0x48eefc(_0x2ce5cf, [{
          'key': "BottomBarRunningWinValue",
          'get': function () {
            return this.m_bottomBarRunningWinValue;
          }
        }, {
          'key': 'FXReel',
          'get': function () {
            return this.m_FXReel;
          }
        }, {
          'key': "BigWin",
          'get': function () {
            return this.m_bigWin;
          }
        }, {
          'key': "GameIntro",
          'get': function () {
            return this.m_gameIntro;
          }
        }, {
          'key': "JpAward",
          'set': function (_0x3a5da) {
            this.m_jpAward = _0x3a5da;
          }
        }, {
          'key': "RunningAward",
          'set': function (_0x19a8c7) {
            this.m_runningAward = _0x19a8c7;
          }
        }, {
          'key': "BigWinAward",
          'get': function () {
            return this.m_bigWinAward;
          },
          'set': function (_0x41d916) {
            this.m_bigWinAward = _0x41d916;
          }
        }, {
          'key': "GetAward",
          'get': function () {
            return this.m_award || this.m_runningAward || this.m_jpAward;
          }
        }, {
          'key': "GetGameIntro",
          'get': function () {
            return this.m_isGameIntro;
          }
        }, {
          'key': "AwardIdle",
          'get': function () {
            return this.m_awardIdle;
          }
        }, {
          'key': 'IsStopIdleAward',
          'set': function (_0x2dc95b) {
            this.m_isStopIdleAward = _0x2dc95b;
          }
        }]);
        return _0x2ce5cf;
      }(_0x2d51ac);
      _0x239283 = _0x1c868d(_0x443553.prototype, "m_slotReels", [_0x491902], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x52b433 = _0x1c868d(_0x443553.prototype, "m_bottomBarRunningWinValue", [_0x2135fb], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5ba337 = _0x1c868d(_0x443553.prototype, 'm_jpWinNode', [_0x4d806d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4de161 = _0x1c868d(_0x443553.prototype, "m_FXReel", [_0x48b679], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3a5a32 = _0x1c868d(_0x443553.prototype, "m_symbolList", [_0x130879], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x3c0442 = _0x1c868d(_0x443553.prototype, "m_linesAward", [_0xf7f91f], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x54c594 = _0x1c868d(_0x443553.prototype, 'm_bigWin', [_0x387f43], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3f0afd = _0x1c868d(_0x443553.prototype, "m_characterNode", [_0x4cb713], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2d0168 = _0x1c868d(_0x443553.prototype, 'm_characterSpine', [_0xadf68f], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x45815c = _0x1c868d(_0x443553.prototype, "m_gameIntro", [_0x36feea], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4e7d7b = _0x1c868d(_0x443553.prototype, "m_multiNearWinSpine", [_0xbd833a], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "145a2+OnJ1Fw7kzIFPLoZWq", "ExtraBet", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, 'c65422NbENFQrHmYTFtdSLQ', 'FeatureSpinAck', undefined);
      var _0x331216 = function () {};
      var _0x3e226a;
      _0x331216.FEATURE_BET_VALUE = 0xa;
      _0x331216.FeaturesSpinAck = {
        'RESPIN_WILD_10': {
          'PlateSymbol': [{
            'Col': [{
              'Row': [0x6, 0x6, 0x6]
            }, {
              'Row': [0x1, 0x2, 0x1]
            }, {
              'Row': [0x6, 0x6, 0x6]
            }]
          }, {
            'Col': [{
              'Row': [0x6, 0x6, 0x6]
            }, {
              'Row': [0x6, 0x6, 0x6]
            }, {
              'Row': [0x6, 0x6, 0x6]
            }]
          }],
          'PlateMult': [0x3, 0xa, 0x1],
          'AwardDataVec': [{
            'Symbol': 0x6,
            'Line': 0x0,
            'Win': 0x8
          }, {
            'Symbol': 0x6,
            'Line': 0x1,
            'Win': 0x8
          }, {
            'Symbol': 0x6,
            'Line': 0x2,
            'Win': 0x8
          }, {
            'Symbol': 0x6,
            'Line': 0x3,
            'Win': 0x8
          }, {
            'Symbol': 0x6,
            'Line': 0x4,
            'Win': 0x8
          }],
          'JpType': 0x0,
          'JPMul': 0x0,
          'JPWin': 0x0,
          'Mult': 0xa,
          'Extra': false,
          'CanBuy': false,
          'CanBuyRate': 0x0,
          'AwardTypeFlag': 0x1,
          'TotalWin': 0xc8,
          'ShowIndex': '17020-074820-21701301',
          'NowMoney': 0x4c4c07,
          'AckType': 0x0,
          'ReSpinColumn': 0x2
        },
        'JP_ALL_15': {
          'PlateSymbol': [{
            'Col': [{
              'Row': [0x8, 0x8, 0x8]
            }, {
              'Row': [0x8, 0x8, 0x8]
            }, {
              'Row': [0x8, 0x8, 0x8]
            }]
          }],
          'PlateMult': [0x5, 0xf, 0x1],
          'AwardDataVec': [],
          'JpType': 0x3,
          'JPMul': 0x3e8,
          'JPWin': 0x3a98,
          'Mult': 0xf,
          'Extra': false,
          'CanBuy': false,
          'CanBuyRate': 0x0,
          'AwardTypeFlag': 0x0,
          'TotalWin': 0x3a98,
          'ShowIndex': '17020-074820-21761301',
          'NowMoney': 0x4c85d7,
          'AckType': 0x0
        }
      };
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "1d854+nhA1JgLXZLaNHz9eU", "LicenseSetting", undefined);
      (function (_0x3b4e6d) {
        _0x3b4e6d[_0x3b4e6d.ShopingMall = 0x1] = 'ShopingMall';
        _0x3b4e6d[_0x3b4e6d.ShowAutoSetting = 0x10] = "ShowAutoSetting";
        _0x3b4e6d[_0x3b4e6d.NoSoundUnder1 = 0x11] = "NoSoundUnder1";
        _0x3b4e6d[_0x3b4e6d.NoQuickSpin = 0x12] = 'NoQuickSpin';
        _0x3b4e6d[_0x3b4e6d.CloseManual = 0x27] = "CloseManual";
        _0x3b4e6d[_0x3b4e6d.CloseExtraBet = 0x3d] = "CloseExtraBet";
      })(_0x3e226a || (_0x3e226a = {}));
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, 'b9d9f83bdhCDre9GUTlMCVZ', "AwardState", undefined);
      var _0x5f2fc9;
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "b31997xnL9G3K62L8k7eSrD", "CheckState", undefined);
      var _0x52570a = _0x6126fa.ccclass;
      _0x5f2fc9 = _0x52570a('CheckState');
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "7131bj4kQBIA7y0LcCcOu83", "EnterRespinState", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, 'e22777seeBGepO4MXbpBwJp', "FeatureShowState", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, '77acaFcNgVDULwRQEtO5wYa', "BigWinComponent", undefined);
      var _0x1a865f;
      var _0x172df4;
      var _0x1a9747;
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "74f7dljUZhO+6o0Pu2tNSAk", "ConnectionManager", undefined);
      (function (_0x2c70ec) {
        _0x2c70ec[_0x2c70ec.TYPE_HTTP = 0x1] = "TYPE_HTTP";
        _0x2c70ec[_0x2c70ec.TYPE_WEBSOCKET = 0x2] = 'TYPE_WEBSOCKET';
        _0x2c70ec[_0x2c70ec.MAX = 0x3] = "MAX";
      })(_0x1a865f || (_0x1a865f = {}));
      (function (_0x54ac2b) {
        _0x54ac2b.TYPE_GET = "get";
        _0x54ac2b.TYPE_POST = 'post';
      })(_0x172df4 || (_0x172df4 = {}));
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "34d81gQVlJAaJJHg6IUTjH6", "TimeBool", undefined);
      (function (_0x1111e6) {
        _0x1111e6[_0x1111e6.MAX_UINT = 0xffffffff] = "MAX_UINT";
        _0x1111e6[_0x1111e6.MAX_UINT64 = 0x10000000000000000] = 'MAX_UINT64';
        _0x1111e6[_0x1111e6.MAX_INT = -0x1] = "MAX_INT";
        _0x1111e6[_0x1111e6.MIN_INT = 0x0] = "MIN_INT";
      })(_0x1a9747 || (_0x1a9747 = {}));
      var _0x1faf5d;
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "5cd11K4+Y1DBJ0WZfuiBSee", "Common_IdleState", undefined);
      var _0x43df04 = _0x6126fa.ccclass;
      _0x1faf5d = _0x43df04('Common_IdleState');
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "9099fuoIOdA/qc/GkvbZ7rH", "GroupNode", undefined);
      var _0x558ed2;
      var _0x123014;
      var _0x134fbc;
      var _0x4d735b;
      !function (_0x5ef064) {
        _0x5ef064[_0x5ef064.WIDTH = 0x1] = "WIDTH";
        _0x5ef064[_0x5ef064.HEIGHT = 0x2] = "HEIGHT";
        _0x5ef064[_0x5ef064.BOTH = 0x3] = "BOTH";
      }(_0x558ed2 || (_0x558ed2 = {}));
      (function (_0x41461b) {
        _0x41461b[_0x41461b.X = 0x1] = 'X';
        _0x41461b[_0x41461b.Y = 0x2] = 'Y';
        _0x41461b[_0x41461b.BOTH = 0x3] = "BOTH";
      })(_0x123014 || (_0x123014 = {}));
      (function (_0x4a7bd6) {
        _0x4a7bd6[_0x4a7bd6.X = 0x1] = 'X';
        _0x4a7bd6[_0x4a7bd6.Y = 0x2] = 'Y';
        _0x4a7bd6[_0x4a7bd6.BOTH = 0x3] = 'BOTH';
      })(_0x134fbc || (_0x134fbc = {}));
      (function (_0x306100) {
        _0x306100[_0x306100.R = 0x1] = 'R';
        _0x306100[_0x306100.G = 0x2] = 'G';
        _0x306100[_0x306100.B = 0x4] = 'B';
        _0x306100[_0x306100.RGB = 0x7] = "RGB";
        _0x306100[_0x306100.A = 0x8] = 'A';
        _0x306100[_0x306100.RGBA = 0xf] = "RGBA";
      })(_0x4d735b || (_0x4d735b = {}));
      var _0x46989a;
      var _0x1d3137;
      var _0x4e3732;
      var _0x3a17df;
      var _0x4bc7c4;
      var _0x14b6a2;
      var _0x45eadb;
      var _0x3b1540;
      var _0x235126;
      var _0x360958;
      var _0x33ccbf;
      var _0x354b79;
      var _0x26d48a;
      var _0x26e5b2;
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, '0c18bO40hVJB4/zzDByb8vr', "ManualComponent", undefined);
      var _0x289d93 = _0x6126fa.ccclass;
      var _0x3e93c1 = _0x6126fa.property;
      _0x46989a = _0x289d93("ManualComponent");
      _0x1d3137 = _0x3e93c1({
        'type': _0x1e3e82,
        'tooltip': '特色說明按鈕(新版跑馬燈)'
      });
      _0x4e3732 = _0x3e93c1({
        'type': _0x1e3e82,
        'tooltip': '特色說明本體(新版跑馬燈)'
      });
      _0x3a17df = _0x3e93c1({
        'type': _0x1e3e82,
        'tooltip': '特色說明關閉按鈕(新版跑馬燈)'
      });
      _0x4bc7c4 = _0x3e93c1({
        'type': _0x1e3e82,
        'tooltip': "特色說明周圍關閉按鈕(新版跑馬燈)"
      });
      _0x14b6a2 = _0x3e93c1({
        'type': _0x346ead,
        'tooltip': "特色說明內容(新版跑馬燈)"
      });
      _0x45eadb = _0x3e93c1({
        'type': _0x346ead,
        'tooltip': '標題'
      });
      _0x3b1540 = function (_0xf86edb) {
        function _0x1826b9() {
          var _0x3d0bc6;
          var _0x57628c = arguments.length;
          var _0x225ab0 = new Array(_0x57628c);
          for (var _0x2e6fdd = 0x0; _0x2e6fdd < _0x57628c; _0x2e6fdd++) {
            _0x225ab0[_0x2e6fdd] = arguments[_0x2e6fdd];
          }
          _0x40ccb3(_0x3d0bc6 = _0xf86edb.call.apply(_0xf86edb, [this].concat(_0x225ab0)) || this, "m_featureInfoBtn", _0x235126, _0x10e60a(_0x3d0bc6));
          _0x40ccb3(_0x3d0bc6, "m_featureInfoBoard", _0x360958, _0x10e60a(_0x3d0bc6));
          _0x40ccb3(_0x3d0bc6, "m_featureInfoCloseBtn", _0x33ccbf, _0x10e60a(_0x3d0bc6));
          _0x40ccb3(_0x3d0bc6, "m_featureInfoSideBtn", _0x354b79, _0x10e60a(_0x3d0bc6));
          _0x40ccb3(_0x3d0bc6, "m_featureInfoTxt", _0x26d48a, _0x10e60a(_0x3d0bc6));
          _0x40ccb3(_0x3d0bc6, "m_titleSprite", _0x26e5b2, _0x10e60a(_0x3d0bc6));
          _0x3d0bc6.m_manulState = "Close";
          _0x3d0bc6.m_manulOpenLock = false;
          return _0x3d0bc6;
        }
        _0x39e18e(_0x1826b9, _0xf86edb);
        var _0x56296b = _0x1826b9.prototype;
        _0x56296b.onLoad = function () {
          var _0x442e4f = this;
          if (_0x546bb1.CheckSwitchOff(_0x3e226a.CloseManual)) {
            this.node.active = false;
          } else {
            if (this.m_featureInfoBtn) {
              this.m_featureInfoBtn.on(_0x1e3e82.EventType.TOUCH_END, function () {
                _0x442e4f.OpenManul();
                _0x25e445.Play(Astarte.Define.AudioClips.COMMON_BTN);
              });
            }
            if (this.m_featureInfoCloseBtn) {
              this.m_featureInfoCloseBtn.on(_0x1e3e82.EventType.TOUCH_END, function () {
                _0x442e4f.CloseManul();
                _0x25e445.Play(Astarte.Define.AudioClips.COMMON_BTN);
              });
            }
            if (this.m_featureInfoSideBtn) {
              this.m_featureInfoSideBtn.on(_0x1e3e82.EventType.TOUCH_END, function () {
                _0x442e4f.CloseManul();
              });
            }
          }
        };
        _0x56296b.OpenManul = function () {
          var _0x42b5e8 = this;
          if (this.m_manulOpenLock) {
            _0x58bcdb.ShowMessageBox(Astarte.Define.StringKey.FREEWINCASH_PLAYING1);
          } else if (this.m_manulState == "Close") {
            this.m_featureInfoBoard.active = true;
            _0x13a184(this.m_featureInfoBoard).call(function () {
              _0x42b5e8.m_manulState = 'Opening';
              _0x42b5e8.m_featureInfoBoard.getComponentInChildren(_0x4cb146).play("Manual_Open");
            }).delay(0.5).call(function () {
              _0x42b5e8.m_manulState = "Open";
            }).start();
          }
        };
        _0x56296b.CloseManul = function () {
          var _0x34188a = this;
          if (this.m_manulState == "Open") {
            _0x13a184(this.m_featureInfoBoard).call(function () {
              _0x34188a.m_manulState = "Closing";
              _0x34188a.m_featureInfoBoard.getComponentInChildren(_0x4cb146).play("Manual_Close");
            }).delay(0.5).call(function () {
              _0x34188a.m_manulState = "Close";
              _0x34188a.m_featureInfoBoard.active = false;
            }).start();
          }
        };
        _0x56296b.SetTxt = function (_0xbc8f54, _0x4a22a2) {
          if (undefined === _0x4a22a2) {
            _0x4a22a2 = null;
          }
          var _0x249877 = _0x2b07a4.GetGameAtlas();
          for (var _0x1dd1a4 = 0x0; _0x1dd1a4 < this.m_featureInfoTxt.length; _0x1dd1a4++) {
            if (_0x249877.getSpriteFrame(_0xbc8f54[_0x1dd1a4])) {
              this.m_featureInfoTxt[_0x1dd1a4].spriteFrame = _0x249877.getSpriteFrame(_0xbc8f54[_0x1dd1a4]);
            }
          }
          if (this.m_titleSprite && _0x4a22a2) {
            this.m_titleSprite.spriteFrame = _0x249877.getSpriteFrame(_0x4a22a2);
          }
        };
        _0x48eefc(_0x1826b9, [{
          'key': 'FeatureInfoBtn',
          'get': function () {
            return this.m_featureInfoBtn;
          }
        }, {
          'key': "ManulState",
          'get': function () {
            return this.m_manulState;
          }
        }, {
          'key': 'ManulOpenLock',
          'get': function () {
            return this.m_manulOpenLock;
          },
          'set': function (_0x27c3f8) {
            this.m_manulOpenLock = _0x27c3f8;
          }
        }]);
        return _0x1826b9;
      }(_0x2d51ac);
      _0x235126 = _0x1c868d(_0x3b1540.prototype, "m_featureInfoBtn", [_0x1d3137], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x360958 = _0x1c868d(_0x3b1540.prototype, 'm_featureInfoBoard', [_0x4e3732], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x33ccbf = _0x1c868d(_0x3b1540.prototype, "m_featureInfoCloseBtn", [_0x3a17df], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x354b79 = _0x1c868d(_0x3b1540.prototype, "m_featureInfoSideBtn", [_0x4bc7c4], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x26d48a = _0x1c868d(_0x3b1540.prototype, "m_featureInfoTxt", [_0x14b6a2], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x26e5b2 = _0x1c868d(_0x3b1540.prototype, 'm_titleSprite', [_0x45eadb], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "1d950BFoN5LhJJ79uyt+/E+", "MarqueeComponent", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "93417uqlh9Fm6TH2poz4GO4", 'NearWinEffectComponent', undefined);
      var _0x558b01;
      var _0x2df13b;
      var _0x5e5ab0;
      var _0x2e41f2;
      var _0x543288;
      var _0x4c9b41;
      var _0x607de0;
      var _0x1a3fb9;
      var _0x213981;
      var _0x4e4550;
      var _0x5bfe57;
      var _0x3267fc;
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "02e880GcB9Jw7QDr8UUWxEV", "ShakeComponent", undefined);
      var _0x125b4f = _0x6126fa.ccclass;
      var _0x10303b = _0x6126fa.property;
      var _0x2a9532 = _0x1389c6({});
      var _0x21ff19;
      !function (_0x5c4f38) {
        _0x5c4f38[_0x5c4f38.None = 0x0] = "None";
        _0x5c4f38[_0x5c4f38.FadeIn = 0x1] = "FadeIn";
        _0x5c4f38[_0x5c4f38.FadeOut = 0x2] = "FadeOut";
      }(_0x21ff19 || (_0x21ff19 = {}));
      var _0x5533d1 = _0x1389c6({
        'None': _0x21ff19.None,
        'FadeIn': _0x21ff19.FadeIn,
        'FadeOut': _0x21ff19.FadeOut
      });
      _0x558b01 = _0x125b4f("_TweenInfo");
      _0x2df13b = _0x10303b({
        'visible': false,
        'tooltip': "Easing"
      });
      _0x5e5ab0 = _0x10303b({
        'type': _0x2a9532,
        'visible': false
      });
      _0x2e41f2 = _0x10303b({
        'visible': true,
        'displayName': '緩動效果',
        'type': _0x2a9532
      });
      _0x543288 = _0x10303b({
        'type': _0x5533d1,
        'visible': false
      });
      _0x4c9b41 = _0x10303b({
        'visible': true,
        'displayName': "fade type",
        'type': _0x5533d1
      });
      _0x607de0 = _0x10303b({
        'min': 0x0,
        'visible': true,
        'displayName': '時間'
      });
      _0x1a3fb9 = function () {
        function _0x7aca12() {
          _0x40ccb3(this, "m_EasingName", _0x213981, this);
          _0x40ccb3(this, '__easingIdx', _0x4e4550, this);
          _0x40ccb3(this, '__fadeType', _0x5bfe57, this);
          this._EasingEnumList = [];
          _0x40ccb3(this, 'duration', _0x3267fc, this);
        }
        _0x48eefc(_0x7aca12, [{
          'key': '_easingIdx',
          'get': function () {},
          'set': function (_0xd9665c) {}
        }, {
          'key': "_fadeType",
          'get': function () {
            return this.__fadeType;
          },
          'set': function (_0x2138a6) {}
        }]);
        return _0x7aca12;
      }();
      _0x213981 = _0x1c868d(_0x1a3fb9.prototype, "m_EasingName", [_0x2df13b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return '';
        }
      });
      _0x4e4550 = _0x1c868d(_0x1a3fb9.prototype, "__easingIdx", [_0x5e5ab0], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1c868d(_0x1a3fb9.prototype, "_easingIdx", [_0x2e41f2], Object.getOwnPropertyDescriptor(_0x1a3fb9.prototype, "_easingIdx"), _0x1a3fb9.prototype);
      _0x5bfe57 = _0x1c868d(_0x1a3fb9.prototype, "__fadeType", [_0x543288], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1c868d(_0x1a3fb9.prototype, '_fadeType', [_0x4c9b41], Object.getOwnPropertyDescriptor(_0x1a3fb9.prototype, "_fadeType"), _0x1a3fb9.prototype);
      _0x3267fc = _0x1c868d(_0x1a3fb9.prototype, "duration", [_0x607de0], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return 0x1;
        }
      });
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "b57cahiKlxMZL7TyWc1iHaf", "SloganComponent", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, 'c6e0eKOKjtNwJBDq/hJOYgn', 'index', undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "f9852R4Hc9AJ7D9xsCCKBFW", "IdleState", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "075f7pUMpFMzJ96Bacp7LK+", "JpAwardState", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "2cd72tG79RN/ry1Jic/b477", 'JpEnterRespinState', undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, 'f63c3ikwxBNdKwgC3vIZswc', "JpRespinState", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "5eba1WKf8JBapC1pzhO10Gd", 'PlateShowState', undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "a3e9c/GawROQ6Cc5/uAiEeb", 'RespinState', undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, 'a27203RXy9LCZzNiw97Q1D1', "RoundEndState", undefined);
      var _0x586a9c;
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "6d9e4qcK3RGN726zjWVNb21", 'RoundShowEndState', undefined);
      var _0x2011e4 = _0x6126fa.ccclass;
      _0x586a9c = _0x2011e4("RoundShowEndState");
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "a0fb8bF3rVA5oukLz+x6C7r", "SpinState", undefined);
      var _0x581b47;
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, 'df54fJZMcBMBLvKTPNtrMCY', "UnshowPerpareState", undefined);
      var _0x33e461 = _0x6126fa.ccclass;
      _0x581b47 = _0x33e461("UnshowPerpareState");
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "7a9d2OILf5NCYDdWZclvY5w", "WaitReadyState", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "cdb4diSctdK+bulOj7dYHLI", "WaitResState", undefined);
      var _0x528699;
      var _0x2fc98d;
      var _0x427127;
      var _0x3a8015;
      var _0x422cc6;
      var _0x28622d;
      var _0x18a7a3;
      var _0x16fcc8;
      var _0x29cb8e;
      var _0x58bcd2;
      var _0xafb670;
      var _0x31f8d3;
      var _0x3adaed;
      var _0x343c78;
      var _0x516e1c;
      var _0x427340;
      var _0x1d84e2;
      var _0x30d9f9;
      var _0x213557;
      var _0x11887c;
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "45cdeB7KZtHl61hyZ6QvZok", "Multiply", undefined);
      var _0x3bc287 = _0x6126fa.ccclass;
      var _0x3b9844 = _0x6126fa.property;
      _0x528699 = _0x3bc287("Multiply");
      _0x2fc98d = _0x3b9844({
        'type': _0x1e3e82,
        'tooltip': "倍數轉輪"
      });
      _0x427127 = _0x3b9844({
        'type': _0x1e3e82,
        'tooltip': "倍數節點"
      });
      _0x3a8015 = _0x3b9844({
        'type': _0x1e3e82,
        'tooltip': "NUM"
      });
      _0x422cc6 = _0x3b9844({
        'type': _0x1e3e82,
        'tooltip': "NUM1"
      });
      _0x28622d = _0x3b9844({
        'type': _0x1e3e82,
        'tooltip': "NUM2"
      });
      _0x18a7a3 = _0x3b9844({
        'type': _0x1e3e82,
        'tooltip': "X10背景"
      });
      _0x16fcc8 = _0x3b9844({
        'type': _0x1e3e82,
        'tooltip': "X15背景"
      });
      _0x29cb8e = _0x3b9844({
        'type': _0x4cb146,
        'tooltip': "乘被輪中獎Loop特效"
      });
      _0x58bcd2 = _0x3b9844({
        'type': _0x19ba3d,
        'tooltip': "NUM"
      });
      _0xafb670 = function (_0x7cb32) {
        function _0x203b9d() {
          var _0xa12221;
          var _0x1ae81b = arguments.length;
          var _0x8228cf = new Array(_0x1ae81b);
          for (var _0x327b14 = 0x0; _0x327b14 < _0x1ae81b; _0x327b14++) {
            _0x8228cf[_0x327b14] = arguments[_0x327b14];
          }
          _0x40ccb3(_0xa12221 = _0x7cb32.call.apply(_0x7cb32, [this].concat(_0x8228cf)) || this, "m_multiplePlate", _0x31f8d3, _0x10e60a(_0xa12221));
          _0x40ccb3(_0xa12221, "m_multiplyNode", _0x3adaed, _0x10e60a(_0xa12221));
          _0x40ccb3(_0xa12221, "m_num", _0x343c78, _0x10e60a(_0xa12221));
          _0x40ccb3(_0xa12221, "m_num1", _0x516e1c, _0x10e60a(_0xa12221));
          _0x40ccb3(_0xa12221, 'm_num2', _0x427340, _0x10e60a(_0xa12221));
          _0x40ccb3(_0xa12221, 'm_hightMultipleBgNode', _0x1d84e2, _0x10e60a(_0xa12221));
          _0x40ccb3(_0xa12221, "m_hightMultipleBgRedNode", _0x30d9f9, _0x10e60a(_0xa12221));
          _0x40ccb3(_0xa12221, "m_multiplyWinAnim", _0x213557, _0x10e60a(_0xa12221));
          _0x40ccb3(_0xa12221, "m_winAnimNum", _0x11887c, _0x10e60a(_0xa12221));
          _0xa12221.m_multiPlate = [0xa, 0x3, 0x5];
          _0xa12221.m_multipleSize = null;
          _0xa12221.m_multiples = new Array();
          _0xa12221.m_currMulti = 0x0;
          _0xa12221.m_gameView = null;
          _0xa12221.m_multipleList = [0x1, 0x2, 0x3, 0x5, 0xa, 0xf];
          _0xa12221.m_exMultipleList = [0x2, 0x3, 0x5, 0xa, 0xf];
          return _0xa12221;
        }
        _0x39e18e(_0x203b9d, _0x7cb32);
        var _0x30eeae = _0x203b9d.prototype;
        _0x30eeae.Init = function (_0x164e6b) {
          this.m_gameView = _0x164e6b;
          var _0x442913 = this.m_multiplePlate;
          this.m_multipleSize = new _0x10042e(_0x442913.getComponent(_0x5ae348).contentSize.width / _0x3f22b0.COL, _0x442913.getComponent(_0x5ae348).contentSize.height / _0x3f22b0.ROW);
          var _0x1734ea = this.m_num1;
          var _0x167879 = this.m_num2;
          var _0x458784 = this.m_hightMultipleBgNode;
          var _0x350b06 = this.m_hightMultipleBgRedNode;
          for (var _0x1a4c7e = 0x0; _0x1a4c7e < _0x3f22b0.COL + 0x2; _0x1a4c7e++) {
            var _0x639b5f = new Array();
            if (0x2 == _0x1a4c7e) {
              _0x639b5f.push(_0x1734ea);
              _0x639b5f.push(_0x167879);
              _0x639b5f.push(_0x458784);
              _0x639b5f.push(_0x350b06);
            } else {
              var _0x169a12 = _0x4497b0(_0x1734ea);
              var _0x53450b = _0x4497b0(_0x167879);
              var _0x59c4d1 = _0x4497b0(_0x458784);
              var _0x5c8925 = _0x4497b0(_0x350b06);
              _0x442913.addChild(_0x169a12);
              _0x442913.addChild(_0x53450b);
              _0x442913.addChild(_0x59c4d1);
              _0x442913.addChild(_0x5c8925);
              _0x169a12.position = _0x243100(_0x1734ea.position.x + this.m_multipleSize.x * (_0x1a4c7e - 0x2), _0x1734ea.position.y);
              _0x53450b.position = _0x243100(_0x1734ea.position.x + this.m_multipleSize.x * (_0x1a4c7e - 0x2), _0x1734ea.position.y);
              _0x59c4d1.position = _0x243100(_0x1734ea.position.x + this.m_multipleSize.x * (_0x1a4c7e - 0x2), _0x1734ea.position.y);
              _0x5c8925.position = _0x243100(_0x1734ea.position.x + this.m_multipleSize.x * (_0x1a4c7e - 0x2), _0x1734ea.position.y);
              _0x639b5f.push(_0x169a12);
              _0x639b5f.push(_0x53450b);
              _0x639b5f.push(_0x59c4d1);
              _0x639b5f.push(_0x5c8925);
              _0x546bb1.SetZIndex(_0x59c4d1, 0x0);
              _0x546bb1.SetZIndex(_0x5c8925, 0x19);
              _0x546bb1.SetZIndex(_0x169a12, 0x32);
              _0x546bb1.SetZIndex(_0x53450b, 0x64);
            }
            this.m_multiples.push(_0x639b5f);
          }
          for (var _0x3b2d9a = 0x0; _0x3b2d9a < 0x5; _0x3b2d9a++) {
            var _0x3185de = undefined;
            _0x3185de = _0x3b2d9a >= 0x1 && _0x3b2d9a <= 0x3 ? _0x3f22b0.INIT_MULTI_PLATE[_0x3b2d9a - 0x1] : this.GetMultiple();
            this.m_multiples[_0x3b2d9a][0x0].getComponent(_0x19ba3d).string = 'X' + _0x3185de.toString();
            this.m_multiples[_0x3b2d9a][0x1].getComponent(_0x19ba3d).string = 'X' + _0x3185de.toString();
            if (0xf == _0x3185de) {
              this.m_multiples[_0x3b2d9a][0x3].getComponent(_0xbb1863).opacity = 0xff;
              this.m_multiples[_0x3b2d9a][0x2].getComponent(_0xbb1863).opacity = 0.1;
            } else if (0xa == _0x3185de) {
              this.m_multiples[_0x3b2d9a][0x3].getComponent(_0xbb1863).opacity = 0.1;
              this.m_multiples[_0x3b2d9a][0x2].getComponent(_0xbb1863).opacity = 0xff;
            }
          }
          this.m_num.active = false;
        };
        _0x30eeae.SetMultiPosition = function (_0x41b561, _0x391277) {
          this.m_multiples[_0x41b561][0x0].position = _0x243100(_0x391277, this.m_multiples[_0x41b561][0x0].position.y);
          this.m_multiples[_0x41b561][0x1].position = _0x243100(_0x391277, this.m_multiples[_0x41b561][0x1].position.y);
          this.m_multiples[_0x41b561][0x2].position = _0x243100(_0x391277, this.m_multiples[_0x41b561][0x2].position.y);
          this.m_multiples[_0x41b561][0x3].position = _0x243100(_0x391277, this.m_multiples[_0x41b561][0x3].position.y);
        };
        _0x30eeae.SetMultiLabel = function (_0x353532, _0x4f16b3) {
          this.m_currMulti = this.m_multiPlate[0x1];
          if (_0x4f16b3 && _0x353532 >= 0x1 && _0x353532 <= 0x3 && this.m_multiPlate) {
            this.m_multiples[_0x353532][0x0].getComponent(_0x19ba3d).string = 'X' + this.m_multiPlate[_0x353532 - 0x1].toString();
            this.m_multiples[_0x353532][0x1].getComponent(_0x19ba3d).string = 'X' + this.m_multiPlate[_0x353532 - 0x1].toString();
            this.setBG(this.m_multiPlate[_0x353532 - 0x1], _0x353532);
          } else {
            var _0x506355 = this.GetMultiple();
            this.m_multiples[_0x353532][0x0].getComponent(_0x19ba3d).string = 'X' + _0x506355.toString();
            this.m_multiples[_0x353532][0x1].getComponent(_0x19ba3d).string = 'X' + _0x506355.toString();
            this.setBG(_0x506355, _0x353532);
          }
        };
        _0x30eeae.RecoverMultiLabel = function () {
          for (var _0x4b9409 = 0x0; _0x4b9409 < _0x3f22b0.COL + 0x2; _0x4b9409++) {
            this.SetMultiPosition(_0x4b9409, this.m_multipleSize.x * (_0x4b9409 - 0x2));
          }
          this.ShowInit();
        };
        _0x30eeae.setBG = function (_0x1c517c, _0x55f7eb) {
          if (0xf == _0x1c517c) {
            this.m_multiples[_0x55f7eb][0x3].getComponent(_0xbb1863).opacity = 0xff;
            this.m_multiples[_0x55f7eb][0x2].getComponent(_0xbb1863).opacity = 0.1;
          } else if (0xa == _0x1c517c) {
            this.m_multiples[_0x55f7eb][0x3].getComponent(_0xbb1863).opacity = 0.1;
            this.m_multiples[_0x55f7eb][0x2].getComponent(_0xbb1863).opacity = 0xff;
          } else {
            this.m_multiples[_0x55f7eb][0x3].getComponent(_0xbb1863).opacity = 0.1;
            this.m_multiples[_0x55f7eb][0x2].getComponent(_0xbb1863).opacity = 0.1;
          }
        };
        _0x30eeae.StartSpin = function () {
          this.m_multiples[0x2][0x1].active = false;
          this.ShowMultiDark(false);
        };
        _0x30eeae.EndSpinWin = function () {
          this.m_multiples[0x2][0x1].active = true;
          this.m_multiplyNode.active = true;
          this.m_multiplyNode.getComponent(_0x4cb146).play(_0x3f22b0.SpineAnimNames.Stop);
        };
        _0x30eeae.SetInactive = function () {
          this.m_multiplyNode.active = false;
        };
        _0x30eeae.SetMultiple = function (_0x5170f7) {
          this.m_multiPlate = _0x5170f7;
        };
        _0x30eeae.GetMultiple = function () {
          if (this.m_gameView.ExtraBet.IsExtra) {
            var _0x132c33 = Math.floor(Math.random() * this.m_exMultipleList.length) % this.m_exMultipleList.length;
            return this.m_exMultipleList[_0x132c33];
          }
          var _0x2527fc = Math.floor(Math.random() * this.m_multipleList.length) % this.m_multipleList.length;
          return this.m_multipleList[_0x2527fc];
        };
        _0x30eeae.JpWin = function () {
          this.Win(true);
        };
        _0x30eeae.Win = function () {
          var _0x3b1a83 = _0x23d9d7(_0x1a789f().mark(function _0x2fbadd(_0x2d3346) {
            var _0x29e219;
            var _0x36ad93 = this;
            return _0x1a789f().wrap(function (_0x5800c2) {
              for (;;) {
                switch (_0x5800c2.prev = _0x5800c2.next) {
                  case 0x0:
                    if (undefined === _0x2d3346) {
                      _0x2d3346 = false;
                    }
                    this.m_num.active = true;
                    this.m_num.getComponent(_0x19ba3d).string = 'X' + _0x546bb1.strip(this.m_multiPlate[0x1]).toString();
                    _0x29e219 = 0x0;
                    _0x25e445.Play(_0x3f22b0.AudioClips.Small_Win_Multiply);
                    if (!_0x2d3346) {
                      _0x5800c2.next = 0xa;
                      break;
                    }
                    this.m_multiplyNode.active = true;
                    this.m_multiplyNode.getComponent(_0x4cb146).play(_0x3f22b0.SpineAnimNames.Win_JP);
                    _0x5800c2.next = 0x11;
                    break;
                  case 0xa:
                    this.m_multiplyNode.active = true;
                    this.m_multiplyNode.getComponent(_0x4cb146).play(_0x3f22b0.SpineAnimNames.Win);
                    _0x29e219 = _0x3f22b0.AnimDuration.MULTIPLY_WIN_SOUND;
                    _0x5800c2.next = 0xf;
                    return _0x2be50b.Wait(this.m_gameView, _0x29e219);
                  case 0xf:
                    _0x25e445.Play(_0x3f22b0.AudioClips.JP_Win_Multiply);
                    this.m_gameView.setBottomBar(this.m_gameView.SpinAck.TotalWin);
                  case 0x11:
                    _0x13a184(this.m_multiplyNode).delay(_0x3f22b0.AnimDuration.MULTIPLY_WIN - _0x29e219).call(function () {
                      _0x36ad93.m_multiplyNode.children[0x0].position = _0x243100(0x0, 0x0, 0x0);
                      _0x36ad93.m_num.active = false;
                      _0x36ad93.SetInactive();
                    }).start();
                  case 0x12:
                  case 'end':
                    return _0x5800c2.stop();
                }
              }
            }, _0x2fbadd, this);
          }));
          return function (_0x5e7742) {
            return _0x3b1a83.apply(this, arguments);
          };
        }();
        _0x30eeae.AnimationEvent = function () {
          console.log('AnimationEvent');
          this.m_gameView.EffectPlate.BottomBarRunningWinValue.MultiWin();
        };
        _0x30eeae.ShowMultiDark = function (_0x1504bd) {
          var _0x2fa496 = _0x1504bd ? _0x2f7ea9(101.25, 94.5, 73.5) : _0x2f7ea9(0xff, 0xff, 0xff);
          for (var _0x532b13 = 0x0; _0x532b13 < 0x5; _0x532b13++) {
            if (0x2 !== _0x532b13) {
              this.m_multiples[_0x532b13][0x0].getComponent(_0x4e6efb).color = _0x2fa496;
              this.m_multiples[_0x532b13][0x1].getComponent(_0x4e6efb).color = _0x2fa496;
            }
          }
        };
        _0x30eeae.WinLoop = function (_0x13abd0) {
          this.m_multiples[0x2][0x0].active = false;
          this.m_multiples[0x2][0x1].active = false;
          this.m_winAnimNum.string = 'X' + _0x13abd0.toString();
          this.m_winAnimNum.getComponent(_0xbb1863).opacity = 0xff;
          if (_0x13abd0 >= 0xf) {
            this.m_multiplyWinAnim.play('Win_Loop3');
          } else if (_0x13abd0 >= 0xa) {
            this.m_multiplyWinAnim.play("Win_Loop2");
          } else {
            this.m_multiplyWinAnim.play("Win_Loop1");
          }
        };
        _0x30eeae.StopWinLoop = function () {
          this.m_multiplyWinAnim.stop();
          this.m_multiples[0x2][0x0].active = true;
          this.m_multiples[0x2][0x1].active = true;
          this.m_winAnimNum.getComponent(_0xbb1863).opacity = 0.1;
        };
        _0x30eeae.ClearAward = function () {
          this.m_multiplyWinAnim.stop();
          this.m_multiples[0x2][0x0].active = true;
          this.m_winAnimNum.getComponent(_0xbb1863).opacity = 0.1;
        };
        _0x30eeae.ShowInit = function () {
          var _0x135078;
          _0x135078 = _0x3f22b0.IsExtraBuy ? _0x3f22b0.LAST_MULTI_PLATE : _0x3f22b0.INIT_MULTI_PLATE;
          this.StopWinLoop();
          for (var _0x3027c9 = 0x0; _0x3027c9 < _0x135078.length; _0x3027c9++) {
            var _0x907bfb = _0x3027c9 + 0x1;
            this.m_multiples[_0x907bfb][0x0].getComponent(_0x19ba3d).string = 'X' + _0x135078[_0x3027c9].toString();
            this.m_multiples[_0x907bfb][0x1].getComponent(_0x19ba3d).string = 'X' + _0x135078[_0x3027c9].toString();
            this.setBG(_0x135078[_0x3027c9], _0x907bfb);
          }
          this.m_multiples[0x2][0x1].active = false;
          this.ShowMultiDark(false);
        };
        _0x48eefc(_0x203b9d, [{
          'key': "MultiplePlate",
          'get': function () {
            return this.m_multiplePlate;
          }
        }, {
          'key': 'MultiplyNode',
          'get': function () {
            return this.m_multiplyNode;
          }
        }, {
          'key': "currentMultiple",
          'get': function () {
            return this.m_currMulti;
          }
        }, {
          'key': "Width",
          'get': function () {
            return this.MultiplePlate.getComponent(_0x5ae348).contentSize.width / _0x3f22b0.COL;
          }
        }]);
        return _0x203b9d;
      }(_0x2d51ac);
      _0x31f8d3 = _0x1c868d(_0xafb670.prototype, "m_multiplePlate", [_0x2fc98d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3adaed = _0x1c868d(_0xafb670.prototype, "m_multiplyNode", [_0x427127], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x343c78 = _0x1c868d(_0xafb670.prototype, "m_num", [_0x3a8015], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x516e1c = _0x1c868d(_0xafb670.prototype, "m_num1", [_0x422cc6], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x427340 = _0x1c868d(_0xafb670.prototype, "m_num2", [_0x28622d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1d84e2 = _0x1c868d(_0xafb670.prototype, "m_hightMultipleBgNode", [_0x18a7a3], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x30d9f9 = _0x1c868d(_0xafb670.prototype, "m_hightMultipleBgRedNode", [_0x16fcc8], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x213557 = _0x1c868d(_0xafb670.prototype, 'm_multiplyWinAnim', [_0x29cb8e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x11887c = _0x1c868d(_0xafb670.prototype, "m_winAnimNum", [_0x58bcd2], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x335ded;
      _0x289c18._RF.pop();
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/long/src/long.js", function (_0x320a4f, _0x416b28, _0x3323ff, _0x46fa5c, _0x469e32) {
        _0x3323ff.exports = _0x4f92d9;
        var _0x436b37 = null;
        try {
          _0x436b37 = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0x0, 0x61, 0x73, 0x6d, 0x1, 0x0, 0x0, 0x0, 0x1, 0xd, 0x2, 0x60, 0x0, 0x1, 0x7f, 0x60, 0x4, 0x7f, 0x7f, 0x7f, 0x7f, 0x1, 0x7f, 0x3, 0x7, 0x6, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x6, 0x6, 0x1, 0x7f, 0x1, 0x41, 0x0, 0xb, 0x7, 0x32, 0x6, 0x3, 0x6d, 0x75, 0x6c, 0x0, 0x1, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x73, 0x0, 0x2, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x75, 0x0, 0x3, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x73, 0x0, 0x4, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x75, 0x0, 0x5, 0x8, 0x67, 0x65, 0x74, 0x5f, 0x68, 0x69, 0x67, 0x68, 0x0, 0x0, 0xa, 0xbf, 0x1, 0x6, 0x4, 0x0, 0x23, 0x0, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7e, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7f, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x80, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x81, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x82, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb])), {}).exports;
        } catch (_0x1022f2) {}
        function _0x4f92d9(_0x3cac7b, _0x1bccba, _0xb4be66) {
          this.low = 0x0 | _0x3cac7b;
          this.high = 0x0 | _0x1bccba;
          this.unsigned = !!_0xb4be66;
        }
        function _0x1e6f3f(_0x33b44b) {
          return true === (_0x33b44b && _0x33b44b.__isLong__);
        }
        _0x4f92d9.prototype.__isLong__;
        Object.defineProperty(_0x4f92d9.prototype, "__isLong__", {
          'value': true
        });
        _0x4f92d9.isLong = _0x1e6f3f;
        var _0x4daf81 = {};
        var _0x4f883e = {};
        function _0x5bdcdb(_0x267884, _0x3c916c) {
          var _0x5b6229;
          var _0x451876;
          var _0xb3fbba;
          return _0x3c916c ? (_0xb3fbba = 0x0 <= (_0x267884 >>>= 0x0) && _0x267884 < 0x100) && (_0x451876 = _0x4f883e[_0x267884]) ? _0x451876 : (_0x5b6229 = new _0x4f92d9(_0x267884, (0x0 | _0x267884) < 0x0 ? -0x1 : 0x0, true), _0xb3fbba && (_0x4f883e[_0x267884] = _0x5b6229), _0x5b6229) : (_0xb3fbba = -0x80 <= (_0x267884 |= 0x0) && _0x267884 < 0x80) && (_0x451876 = _0x4daf81[_0x267884]) ? _0x451876 : (_0x5b6229 = new _0x4f92d9(_0x267884, _0x267884 < 0x0 ? -0x1 : 0x0, false), _0xb3fbba && (_0x4daf81[_0x267884] = _0x5b6229), _0x5b6229);
        }
        function _0x2dbc69(_0x56e729, _0xa79f24) {
          if (isNaN(_0x56e729)) {
            return _0xa79f24 ? _0x37dc00 : _0x2462f5;
          }
          if (_0xa79f24) {
            if (_0x56e729 < 0x0) {
              return _0x37dc00;
            }
            if (_0x56e729 >= 18446744073709552000) {
              return _0x4526ad;
            }
          } else {
            if (_0x56e729 <= -9223372036854776000) {
              return _0x494937;
            }
            if (_0x56e729 + 0x1 >= 9223372036854776000) {
              return _0x5e4c18;
            }
          }
          return _0x56e729 < 0x0 ? _0x2dbc69(-_0x56e729, _0xa79f24).neg() : new _0x4f92d9(_0x56e729 % 0x100000000 | 0x0, _0x56e729 / 0x100000000 | 0x0, _0xa79f24);
        }
        function _0x535786(_0x4c0690, _0x48d661, _0x79ff33) {
          return new _0x4f92d9(_0x4c0690, _0x48d661, _0x79ff33);
        }
        _0x4f92d9.fromInt = _0x5bdcdb;
        _0x4f92d9.fromNumber = _0x2dbc69;
        _0x4f92d9.fromBits = _0x535786;
        var _0x40a187 = Math.pow;
        function _0x32e9ed(_0x1ed449, _0x24f50d, _0x3ad38a) {
          if (0x0 === _0x1ed449.length) {
            throw Error("empty string");
          }
          if ("NaN" === _0x1ed449 || "Infinity" === _0x1ed449 || "+Infinity" === _0x1ed449 || '-Infinity' === _0x1ed449) {
            return _0x2462f5;
          }
          if ("number" == typeof _0x24f50d) {
            _0x3ad38a = _0x24f50d;
            _0x24f50d = false;
          } else {
            _0x24f50d = !!_0x24f50d;
          }
          if ((_0x3ad38a = _0x3ad38a || 0xa) < 0x2 || 0x24 < _0x3ad38a) {
            throw RangeError("radix");
          }
          var _0x3d7f52;
          if ((_0x3d7f52 = _0x1ed449.indexOf('-')) > 0x0) {
            throw Error("interior hyphen");
          }
          if (0x0 === _0x3d7f52) {
            return _0x32e9ed(_0x1ed449.substring(0x1), _0x24f50d, _0x3ad38a).neg();
          }
          var _0x24d634 = _0x2dbc69(_0x40a187(_0x3ad38a, 0x8));
          var _0x292697 = _0x2462f5;
          for (var _0x35073e = 0x0; _0x35073e < _0x1ed449.length; _0x35073e += 0x8) {
            var _0x144663 = Math.min(0x8, _0x1ed449.length - _0x35073e);
            var _0x5bcffb = parseInt(_0x1ed449.substring(_0x35073e, _0x35073e + _0x144663), _0x3ad38a);
            if (_0x144663 < 0x8) {
              var _0x425e44 = _0x2dbc69(_0x40a187(_0x3ad38a, _0x144663));
              _0x292697 = _0x292697.mul(_0x425e44).add(_0x2dbc69(_0x5bcffb));
            } else {
              _0x292697 = (_0x292697 = _0x292697.mul(_0x24d634)).add(_0x2dbc69(_0x5bcffb));
            }
          }
          _0x292697.unsigned = _0x24f50d;
          return _0x292697;
        }
        function _0x491a84(_0x13fd59, _0x449ad9) {
          return 'number' == typeof _0x13fd59 ? _0x2dbc69(_0x13fd59, _0x449ad9) : "string" == typeof _0x13fd59 ? _0x32e9ed(_0x13fd59, _0x449ad9) : new _0x4f92d9(_0x13fd59.low, _0x13fd59.high, "boolean" == typeof _0x449ad9 ? _0x449ad9 : _0x13fd59.unsigned);
        }
        _0x4f92d9.fromString = _0x32e9ed;
        _0x4f92d9.fromValue = _0x491a84;
        var _0x4ff1c9 = _0x5bdcdb(16777216);
        var _0x2462f5 = _0x5bdcdb(0x0);
        _0x4f92d9.ZERO = _0x2462f5;
        var _0x37dc00 = _0x5bdcdb(0x0, true);
        _0x4f92d9.UZERO = _0x37dc00;
        var _0x7130d7 = _0x5bdcdb(0x1);
        _0x4f92d9.ONE = _0x7130d7;
        var _0x1c04bd = _0x5bdcdb(0x1, true);
        _0x4f92d9.UONE = _0x1c04bd;
        var _0x1444f0 = _0x5bdcdb(-0x1);
        _0x4f92d9.NEG_ONE = _0x1444f0;
        var _0x5e4c18 = new _0x4f92d9(-0x1, 0x7fffffff, false);
        _0x4f92d9.MAX_VALUE = _0x5e4c18;
        var _0x4526ad = new _0x4f92d9(-0x1, -0x1, true);
        _0x4f92d9.MAX_UNSIGNED_VALUE = _0x4526ad;
        var _0x494937 = new _0x4f92d9(0x0, -0x80000000, false);
        _0x4f92d9.MIN_VALUE = _0x494937;
        var _0x26d2e6 = _0x4f92d9.prototype;
        _0x26d2e6.toInt = function () {
          return this.unsigned ? this.low >>> 0x0 : this.low;
        };
        _0x26d2e6.toNumber = function () {
          return this.unsigned ? (this.high >>> 0x0) * 0x100000000 + (this.low >>> 0x0) : this.high * 0x100000000 + (this.low >>> 0x0);
        };
        _0x26d2e6.toString = function (_0x499560) {
          if ((_0x499560 = _0x499560 || 0xa) < 0x2 || 0x24 < _0x499560) {
            throw RangeError('radix');
          }
          if (this.isZero()) {
            return '0';
          }
          if (this.isNegative()) {
            if (this.eq(_0x494937)) {
              var _0x3d4daf = _0x2dbc69(_0x499560);
              var _0x5ed24c = this.div(_0x3d4daf);
              var _0x5c06aa = _0x5ed24c.mul(_0x3d4daf).sub(this);
              return _0x5ed24c.toString(_0x499560) + _0x5c06aa.toInt().toString(_0x499560);
            }
            return '-' + this.neg().toString(_0x499560);
          }
          var _0x413921 = _0x2dbc69(_0x40a187(_0x499560, 0x6), this.unsigned);
          var _0x36f245 = this;
          for (var _0x4cf359 = '';;) {
            var _0x566a86 = _0x36f245.div(_0x413921);
            var _0x3ceab1 = (_0x36f245.sub(_0x566a86.mul(_0x413921)).toInt() >>> 0x0).toString(_0x499560);
            if ((_0x36f245 = _0x566a86).isZero()) {
              return _0x3ceab1 + _0x4cf359;
            }
            for (; _0x3ceab1.length < 0x6;) {
              _0x3ceab1 = '0' + _0x3ceab1;
            }
            _0x4cf359 = '' + _0x3ceab1 + _0x4cf359;
          }
        };
        _0x26d2e6.getHighBits = function () {
          return this.high;
        };
        _0x26d2e6.getHighBitsUnsigned = function () {
          return this.high >>> 0x0;
        };
        _0x26d2e6.getLowBits = function () {
          return this.low;
        };
        _0x26d2e6.getLowBitsUnsigned = function () {
          return this.low >>> 0x0;
        };
        _0x26d2e6.getNumBitsAbs = function () {
          if (this.isNegative()) {
            return this.eq(_0x494937) ? 0x40 : this.neg().getNumBitsAbs();
          }
          var _0x16a507 = 0x0 != this.high ? this.high : this.low;
          for (var _0x4763bf = 0x1f; _0x4763bf > 0x0 && 0x0 == (_0x16a507 & 0x1 << _0x4763bf); _0x4763bf--) {
            ;
          }
          return 0x0 != this.high ? _0x4763bf + 0x21 : _0x4763bf + 0x1;
        };
        _0x26d2e6.isZero = function () {
          return 0x0 === this.high && 0x0 === this.low;
        };
        _0x26d2e6.eqz = _0x26d2e6.isZero;
        _0x26d2e6.isNegative = function () {
          return !this.unsigned && this.high < 0x0;
        };
        _0x26d2e6.isPositive = function () {
          return this.unsigned || this.high >= 0x0;
        };
        _0x26d2e6.isOdd = function () {
          return 0x1 == (0x1 & this.low);
        };
        _0x26d2e6.isEven = function () {
          return 0x0 == (0x1 & this.low);
        };
        _0x26d2e6.equals = function (_0x51534d) {
          if (!(true === (_0x51534d && _0x51534d.__isLong__))) {
            _0x51534d = 'number' == typeof _0x51534d ? _0x2dbc69(_0x51534d, undefined) : "string" == typeof _0x51534d ? _0x32e9ed(_0x51534d, undefined) : new _0x4f92d9(_0x51534d.low, _0x51534d.high, _0x51534d.unsigned);
          }
          return (this.unsigned === _0x51534d.unsigned || this.high >>> 0x1f != 0x1 || _0x51534d.high >>> 0x1f != 0x1) && this.high === _0x51534d.high && this.low === _0x51534d.low;
        };
        _0x26d2e6.eq = _0x26d2e6.equals;
        _0x26d2e6.notEquals = function (_0x23808f) {
          return !this.eq(_0x23808f);
        };
        _0x26d2e6.neq = _0x26d2e6.notEquals;
        _0x26d2e6.ne = _0x26d2e6.notEquals;
        _0x26d2e6.lessThan = function (_0x5ebcf0) {
          return this.comp(_0x5ebcf0) < 0x0;
        };
        _0x26d2e6.lt = _0x26d2e6.lessThan;
        _0x26d2e6.lessThanOrEqual = function (_0x58e5bc) {
          return this.comp(_0x58e5bc) <= 0x0;
        };
        _0x26d2e6.lte = _0x26d2e6.lessThanOrEqual;
        _0x26d2e6.le = _0x26d2e6.lessThanOrEqual;
        _0x26d2e6.greaterThan = function (_0x1b34d1) {
          return this.comp(_0x1b34d1) > 0x0;
        };
        _0x26d2e6.gt = _0x26d2e6.greaterThan;
        _0x26d2e6.greaterThanOrEqual = function (_0x1a9077) {
          return this.comp(_0x1a9077) >= 0x0;
        };
        _0x26d2e6.gte = _0x26d2e6.greaterThanOrEqual;
        _0x26d2e6.ge = _0x26d2e6.greaterThanOrEqual;
        _0x26d2e6.compare = function (_0x23606d) {
          if (!(true === (_0x23606d && _0x23606d.__isLong__))) {
            _0x23606d = 'number' == typeof _0x23606d ? _0x2dbc69(_0x23606d, undefined) : "string" == typeof _0x23606d ? _0x32e9ed(_0x23606d, undefined) : new _0x4f92d9(_0x23606d.low, _0x23606d.high, _0x23606d.unsigned);
          }
          if (this.eq(_0x23606d)) {
            return 0x0;
          }
          var _0x45710b = this.isNegative();
          var _0x5e05e8 = _0x23606d.isNegative();
          return _0x45710b && !_0x5e05e8 ? -0x1 : !_0x45710b && _0x5e05e8 ? 0x1 : this.unsigned ? _0x23606d.high >>> 0x0 > this.high >>> 0x0 || _0x23606d.high === this.high && _0x23606d.low >>> 0x0 > this.low >>> 0x0 ? -0x1 : 0x1 : this.sub(_0x23606d).isNegative() ? -0x1 : 0x1;
        };
        _0x26d2e6.comp = _0x26d2e6.compare;
        _0x26d2e6.negate = function () {
          return !this.unsigned && this.eq(_0x494937) ? _0x494937 : this.not().add(_0x7130d7);
        };
        _0x26d2e6.neg = _0x26d2e6.negate;
        _0x26d2e6.add = function (_0x143a1c) {
          if (!(true === (_0x143a1c && _0x143a1c.__isLong__))) {
            _0x143a1c = 'number' == typeof _0x143a1c ? _0x2dbc69(_0x143a1c, undefined) : "string" == typeof _0x143a1c ? _0x32e9ed(_0x143a1c, undefined) : new _0x4f92d9(_0x143a1c.low, _0x143a1c.high, _0x143a1c.unsigned);
          }
          var _0x51e879 = this.high >>> 0x10;
          var _0x5205c3 = 0xffff & this.high;
          var _0x30d97f = this.low >>> 0x10;
          var _0x56bb51 = 0xffff & this.low;
          var _0x408518 = _0x143a1c.high >>> 0x10;
          var _0x2cbacb = 0xffff & _0x143a1c.high;
          var _0x9bde4f = _0x143a1c.low >>> 0x10;
          var _0x533202 = 0x0;
          var _0x160fda = 0x0;
          var _0x87b5f7 = 0x0;
          var _0x547da7 = 0x0;
          _0x87b5f7 += (_0x547da7 += _0x56bb51 + (0xffff & _0x143a1c.low)) >>> 0x10;
          _0x160fda += (_0x87b5f7 += _0x30d97f + _0x9bde4f) >>> 0x10;
          _0x533202 += (_0x160fda += _0x5205c3 + _0x2cbacb) >>> 0x10;
          _0x533202 += _0x51e879 + _0x408518;
          return new _0x4f92d9((_0x87b5f7 &= 0xffff) << 0x10 | (_0x547da7 &= 0xffff), (_0x533202 &= 0xffff) << 0x10 | (_0x160fda &= 0xffff), this.unsigned);
        };
        _0x26d2e6.subtract = function (_0x46df18) {
          if (!(true === (_0x46df18 && _0x46df18.__isLong__))) {
            _0x46df18 = 'number' == typeof _0x46df18 ? _0x2dbc69(_0x46df18, undefined) : "string" == typeof _0x46df18 ? _0x32e9ed(_0x46df18, undefined) : new _0x4f92d9(_0x46df18.low, _0x46df18.high, _0x46df18.unsigned);
          }
          return this.add(_0x46df18.neg());
        };
        _0x26d2e6.sub = _0x26d2e6.subtract;
        _0x26d2e6.multiply = function (_0x2c422b) {
          if (this.isZero()) {
            return _0x2462f5;
          }
          if (!(true === (_0x2c422b && _0x2c422b.__isLong__))) {
            _0x2c422b = 'number' == typeof _0x2c422b ? _0x2dbc69(_0x2c422b, undefined) : "string" == typeof _0x2c422b ? _0x32e9ed(_0x2c422b, undefined) : new _0x4f92d9(_0x2c422b.low, _0x2c422b.high, _0x2c422b.unsigned);
          }
          if (_0x436b37) {
            return new _0x4f92d9(_0x436b37.mul(this.low, this.high, _0x2c422b.low, _0x2c422b.high), _0x436b37.get_high(), this.unsigned);
          }
          if (_0x2c422b.isZero()) {
            return _0x2462f5;
          }
          if (this.eq(_0x494937)) {
            return _0x2c422b.isOdd() ? _0x494937 : _0x2462f5;
          }
          if (_0x2c422b.eq(_0x494937)) {
            return this.isOdd() ? _0x494937 : _0x2462f5;
          }
          if (this.isNegative()) {
            return _0x2c422b.isNegative() ? this.neg().mul(_0x2c422b.neg()) : this.neg().mul(_0x2c422b).neg();
          }
          if (_0x2c422b.isNegative()) {
            return this.mul(_0x2c422b.neg()).neg();
          }
          if (this.lt(_0x4ff1c9) && _0x2c422b.lt(_0x4ff1c9)) {
            return _0x2dbc69(this.toNumber() * _0x2c422b.toNumber(), this.unsigned);
          }
          var _0x55dd39 = this.high >>> 0x10;
          var _0x3502ed = 0xffff & this.high;
          var _0x3256d2 = this.low >>> 0x10;
          var _0x463460 = 0xffff & this.low;
          var _0x25534f = _0x2c422b.high >>> 0x10;
          var _0x6e38b8 = 0xffff & _0x2c422b.high;
          var _0x12d7b6 = _0x2c422b.low >>> 0x10;
          var _0x1c9951 = 0xffff & _0x2c422b.low;
          var _0xcd21a6 = 0x0;
          var _0x11610d = 0x0;
          var _0x5a3033 = 0x0;
          var _0x40c60d = 0x0;
          _0x5a3033 += (_0x40c60d += _0x463460 * _0x1c9951) >>> 0x10;
          _0x11610d += (_0x5a3033 += _0x3256d2 * _0x1c9951) >>> 0x10;
          _0x5a3033 &= 0xffff;
          _0x11610d += (_0x5a3033 += _0x463460 * _0x12d7b6) >>> 0x10;
          _0xcd21a6 += (_0x11610d += _0x3502ed * _0x1c9951) >>> 0x10;
          _0x11610d &= 0xffff;
          _0xcd21a6 += (_0x11610d += _0x3256d2 * _0x12d7b6) >>> 0x10;
          _0x11610d &= 0xffff;
          _0xcd21a6 += (_0x11610d += _0x463460 * _0x6e38b8) >>> 0x10;
          _0xcd21a6 += _0x55dd39 * _0x1c9951 + _0x3502ed * _0x12d7b6 + _0x3256d2 * _0x6e38b8 + _0x463460 * _0x25534f;
          return new _0x4f92d9((_0x5a3033 &= 0xffff) << 0x10 | (_0x40c60d &= 0xffff), (_0xcd21a6 &= 0xffff) << 0x10 | (_0x11610d &= 0xffff), this.unsigned);
        };
        _0x26d2e6.mul = _0x26d2e6.multiply;
        _0x26d2e6.divide = function (_0x5c8eb3) {
          if (!(true === (_0x5c8eb3 && _0x5c8eb3.__isLong__))) {
            _0x5c8eb3 = 'number' == typeof _0x5c8eb3 ? _0x2dbc69(_0x5c8eb3, undefined) : "string" == typeof _0x5c8eb3 ? _0x32e9ed(_0x5c8eb3, undefined) : new _0x4f92d9(_0x5c8eb3.low, _0x5c8eb3.high, _0x5c8eb3.unsigned);
          }
          if (_0x5c8eb3.isZero()) {
            throw Error("division by zero");
          }
          var _0x560561;
          var _0x306f05;
          var _0x3d8083;
          if (_0x436b37) {
            return this.unsigned || -0x80000000 !== this.high || -0x1 !== _0x5c8eb3.low || -0x1 !== _0x5c8eb3.high ? new _0x4f92d9((this.unsigned ? _0x436b37.div_u : _0x436b37.div_s)(this.low, this.high, _0x5c8eb3.low, _0x5c8eb3.high), _0x436b37.get_high(), this.unsigned) : this;
          }
          if (this.isZero()) {
            return this.unsigned ? _0x37dc00 : _0x2462f5;
          }
          if (this.unsigned) {
            if (!_0x5c8eb3.unsigned) {
              _0x5c8eb3 = _0x5c8eb3.toUnsigned();
            }
            if (_0x5c8eb3.gt(this)) {
              return _0x37dc00;
            }
            if (_0x5c8eb3.gt(this.shru(0x1))) {
              return _0x1c04bd;
            }
            _0x3d8083 = _0x37dc00;
          } else {
            if (this.eq(_0x494937)) {
              return _0x5c8eb3.eq(_0x7130d7) || _0x5c8eb3.eq(_0x1444f0) ? _0x494937 : _0x5c8eb3.eq(_0x494937) ? _0x7130d7 : (_0x560561 = this.shr(0x1).div(_0x5c8eb3).shl(0x1)).eq(_0x2462f5) ? _0x5c8eb3.isNegative() ? _0x7130d7 : _0x1444f0 : (_0x306f05 = this.sub(_0x5c8eb3.mul(_0x560561)), _0x3d8083 = _0x560561.add(_0x306f05.div(_0x5c8eb3)));
            }
            if (_0x5c8eb3.eq(_0x494937)) {
              return this.unsigned ? _0x37dc00 : _0x2462f5;
            }
            if (this.isNegative()) {
              return _0x5c8eb3.isNegative() ? this.neg().div(_0x5c8eb3.neg()) : this.neg().div(_0x5c8eb3).neg();
            }
            if (_0x5c8eb3.isNegative()) {
              return this.div(_0x5c8eb3.neg()).neg();
            }
            _0x3d8083 = _0x2462f5;
          }
          for (_0x306f05 = this; _0x306f05.gte(_0x5c8eb3);) {
            _0x560561 = Math.max(0x1, Math.floor(_0x306f05.toNumber() / _0x5c8eb3.toNumber()));
            var _0x4cc629 = Math.ceil(Math.log(_0x560561) / Math.LN2);
            var _0x1c7905 = _0x4cc629 <= 0x30 ? 0x1 : _0x40a187(0x2, _0x4cc629 - 0x30);
            var _0x2b0cc8 = _0x2dbc69(_0x560561);
            for (var _0x494eae = _0x2b0cc8.mul(_0x5c8eb3); _0x494eae.isNegative() || _0x494eae.gt(_0x306f05);) {
              _0x494eae = (_0x2b0cc8 = _0x2dbc69(_0x560561 -= _0x1c7905, this.unsigned)).mul(_0x5c8eb3);
            }
            if (_0x2b0cc8.isZero()) {
              _0x2b0cc8 = _0x7130d7;
            }
            _0x3d8083 = _0x3d8083.add(_0x2b0cc8);
            _0x306f05 = _0x306f05.sub(_0x494eae);
          }
          return _0x3d8083;
        };
        _0x26d2e6.div = _0x26d2e6.divide;
        _0x26d2e6.modulo = function (_0x1114bf) {
          if (!(true === (_0x1114bf && _0x1114bf.__isLong__))) {
            _0x1114bf = 'number' == typeof _0x1114bf ? _0x2dbc69(_0x1114bf, undefined) : "string" == typeof _0x1114bf ? _0x32e9ed(_0x1114bf, undefined) : new _0x4f92d9(_0x1114bf.low, _0x1114bf.high, _0x1114bf.unsigned);
          }
          return _0x436b37 ? new _0x4f92d9((this.unsigned ? _0x436b37.rem_u : _0x436b37.rem_s)(this.low, this.high, _0x1114bf.low, _0x1114bf.high), _0x436b37.get_high(), this.unsigned) : this.sub(this.div(_0x1114bf).mul(_0x1114bf));
        };
        _0x26d2e6.mod = _0x26d2e6.modulo;
        _0x26d2e6.rem = _0x26d2e6.modulo;
        _0x26d2e6.not = function () {
          return new _0x4f92d9(~this.low, ~this.high, this.unsigned);
        };
        _0x26d2e6.and = function (_0x24cb14) {
          if (!(true === (_0x24cb14 && _0x24cb14.__isLong__))) {
            _0x24cb14 = 'number' == typeof _0x24cb14 ? _0x2dbc69(_0x24cb14, undefined) : "string" == typeof _0x24cb14 ? _0x32e9ed(_0x24cb14, undefined) : new _0x4f92d9(_0x24cb14.low, _0x24cb14.high, _0x24cb14.unsigned);
          }
          return new _0x4f92d9(this.low & _0x24cb14.low, this.high & _0x24cb14.high, this.unsigned);
        };
        _0x26d2e6.or = function (_0x1b5290) {
          if (!(true === (_0x1b5290 && _0x1b5290.__isLong__))) {
            _0x1b5290 = 'number' == typeof _0x1b5290 ? _0x2dbc69(_0x1b5290, undefined) : "string" == typeof _0x1b5290 ? _0x32e9ed(_0x1b5290, undefined) : new _0x4f92d9(_0x1b5290.low, _0x1b5290.high, _0x1b5290.unsigned);
          }
          return new _0x4f92d9(this.low | _0x1b5290.low, this.high | _0x1b5290.high, this.unsigned);
        };
        _0x26d2e6.xor = function (_0x3e8afe) {
          if (!(true === (_0x3e8afe && _0x3e8afe.__isLong__))) {
            _0x3e8afe = 'number' == typeof _0x3e8afe ? _0x2dbc69(_0x3e8afe, undefined) : "string" == typeof _0x3e8afe ? _0x32e9ed(_0x3e8afe, undefined) : new _0x4f92d9(_0x3e8afe.low, _0x3e8afe.high, _0x3e8afe.unsigned);
          }
          return new _0x4f92d9(this.low ^ _0x3e8afe.low, this.high ^ _0x3e8afe.high, this.unsigned);
        };
        _0x26d2e6.shiftLeft = function (_0xfac15f) {
          if (true === (_0xfac15f && _0xfac15f.__isLong__)) {
            _0xfac15f = _0xfac15f.toInt();
          }
          return 0x0 == (_0xfac15f &= 0x3f) ? this : _0xfac15f < 0x20 ? new _0x4f92d9(this.low << _0xfac15f, this.high << _0xfac15f | this.low >>> 0x20 - _0xfac15f, this.unsigned) : new _0x4f92d9(0x0, this.low << _0xfac15f - 0x20, this.unsigned);
        };
        _0x26d2e6.shl = _0x26d2e6.shiftLeft;
        _0x26d2e6.shiftRight = function (_0x57abae) {
          if (true === (_0x57abae && _0x57abae.__isLong__)) {
            _0x57abae = _0x57abae.toInt();
          }
          return 0x0 == (_0x57abae &= 0x3f) ? this : _0x57abae < 0x20 ? new _0x4f92d9(this.low >>> _0x57abae | this.high << 0x20 - _0x57abae, this.high >> _0x57abae, this.unsigned) : new _0x4f92d9(this.high >> _0x57abae - 0x20, this.high >= 0x0 ? 0x0 : -0x1, this.unsigned);
        };
        _0x26d2e6.shr = _0x26d2e6.shiftRight;
        _0x26d2e6.shiftRightUnsigned = function (_0x2648c6) {
          if (true === (_0x2648c6 && _0x2648c6.__isLong__)) {
            _0x2648c6 = _0x2648c6.toInt();
          }
          if (0x0 === (_0x2648c6 &= 0x3f)) {
            return this;
          }
          var _0x4f7765 = this.high;
          return _0x2648c6 < 0x20 ? new _0x4f92d9(this.low >>> _0x2648c6 | _0x4f7765 << 0x20 - _0x2648c6, _0x4f7765 >>> _0x2648c6, this.unsigned) : new _0x4f92d9(0x20 === _0x2648c6 ? _0x4f7765 : _0x4f7765 >>> _0x2648c6 - 0x20, 0x0, this.unsigned);
        };
        _0x26d2e6.shru = _0x26d2e6.shiftRightUnsigned;
        _0x26d2e6.shr_u = _0x26d2e6.shiftRightUnsigned;
        _0x26d2e6.toSigned = function () {
          return this.unsigned ? new _0x4f92d9(this.low, this.high, false) : this;
        };
        _0x26d2e6.toUnsigned = function () {
          return this.unsigned ? this : new _0x4f92d9(this.low, this.high, true);
        };
        _0x26d2e6.toBytes = function (_0x68c17a) {
          return _0x68c17a ? this.toBytesLE() : this.toBytesBE();
        };
        _0x26d2e6.toBytesLE = function () {
          var _0x50be77 = this.high;
          var _0x583f44 = this.low;
          return [0xff & _0x583f44, _0x583f44 >>> 0x8 & 0xff, _0x583f44 >>> 0x10 & 0xff, _0x583f44 >>> 0x18, 0xff & _0x50be77, _0x50be77 >>> 0x8 & 0xff, _0x50be77 >>> 0x10 & 0xff, _0x50be77 >>> 0x18];
        };
        _0x26d2e6.toBytesBE = function () {
          var _0x5573e6 = this.high;
          var _0x59412d = this.low;
          return [_0x5573e6 >>> 0x18, _0x5573e6 >>> 0x10 & 0xff, _0x5573e6 >>> 0x8 & 0xff, 0xff & _0x5573e6, _0x59412d >>> 0x18, _0x59412d >>> 0x10 & 0xff, _0x59412d >>> 0x8 & 0xff, 0xff & _0x59412d];
        };
        _0x4f92d9.fromBytes = function (_0x14a976, _0x53fc29, _0x4ee077) {
          return _0x4ee077 ? _0x4f92d9.fromBytesLE(_0x14a976, _0x53fc29) : _0x4f92d9.fromBytesBE(_0x14a976, _0x53fc29);
        };
        _0x4f92d9.fromBytesLE = function (_0x38fafd, _0x183e58) {
          return new _0x4f92d9(_0x38fafd[0x0] | _0x38fafd[0x1] << 0x8 | _0x38fafd[0x2] << 0x10 | _0x38fafd[0x3] << 0x18, _0x38fafd[0x4] | _0x38fafd[0x5] << 0x8 | _0x38fafd[0x6] << 0x10 | _0x38fafd[0x7] << 0x18, _0x183e58);
        };
        _0x4f92d9.fromBytesBE = function (_0xedc0a9, _0x2225d8) {
          return new _0x4f92d9(_0xedc0a9[0x4] << 0x18 | _0xedc0a9[0x5] << 0x10 | _0xedc0a9[0x6] << 0x8 | _0xedc0a9[0x7], _0xedc0a9[0x0] << 0x18 | _0xedc0a9[0x1] << 0x10 | _0xedc0a9[0x2] << 0x8 | _0xedc0a9[0x3], _0x2225d8);
        };
        _0x335ded = _0x3323ff.exports;
      }, {});
      _0x2f4fd2.require("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/long/src/long.js");
      _0x2f4fd2.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js', function (_0x321da2, _0x518050, _0x51d5a3, _0x409c75, _0x614a9f) {
        function _0x4a0afe(_0x286924, _0x29af7f) {
          if ('string' == typeof _0x286924) {
            _0x29af7f = _0x286924;
            _0x286924 = undefined;
          }
          var _0x2f8373 = [];
          function _0xbd10c(_0x510ce3) {
            if ("string" != typeof _0x510ce3) {
              var _0x5854a6 = "function " + (undefined || _0x29af7f || '') + '(' + (_0x286924 && _0x286924.join(',') || '') + "){\n  " + _0x2f8373.join("\n  ") + "\n}";
              if (_0x4a0afe.verbose) {
                console.log("codegen: " + _0x5854a6);
              }
              _0x5854a6 = "return " + _0x5854a6;
              if (_0x510ce3) {
                var _0x15b1ef = Object.keys(_0x510ce3);
                var _0x4a6249 = new Array(_0x15b1ef.length + 0x1);
                var _0x370d8c = new Array(_0x15b1ef.length);
                for (var _0x13dc3d = 0x0; _0x13dc3d < _0x15b1ef.length;) {
                  _0x4a6249[_0x13dc3d] = _0x15b1ef[_0x13dc3d];
                  _0x370d8c[_0x13dc3d] = _0x510ce3[_0x15b1ef[_0x13dc3d++]];
                }
                _0x4a6249[_0x13dc3d] = _0x5854a6;
                return Function.apply(null, _0x4a6249).apply(null, _0x370d8c);
              }
              return Function(_0x5854a6)();
            }
            var _0x13c983 = new Array(arguments.length - 0x1);
            for (var _0x2b39b2 = 0x0; _0x2b39b2 < _0x13c983.length;) {
              _0x13c983[_0x2b39b2] = arguments[++_0x2b39b2];
            }
            _0x2b39b2 = 0x0;
            _0x510ce3 = _0x510ce3.replace(/%([%dfijs])/g, function (_0x4bf59b, _0x399bdb) {
              var _0x49c0f6 = _0x13c983[_0x2b39b2++];
              switch (_0x399bdb) {
                case 'd':
                case 'f':
                  return String(Number(_0x49c0f6));
                case 'i':
                  return String(Math.floor(_0x49c0f6));
                case 'j':
                  return JSON.stringify(_0x49c0f6);
                case 's':
                  return String(_0x49c0f6);
              }
              return '%';
            });
            if (_0x2b39b2 !== _0x13c983.length) {
              throw Error("parameter count mismatch");
            }
            _0x2f8373.push(_0x510ce3);
            return _0xbd10c;
          }
          function _0x5ad006(_0xf853fe) {
            return "function " + (_0xf853fe || _0x29af7f || '') + '(' + (_0x286924 && _0x286924.join(',') || '') + "){\n  " + _0x2f8373.join("\n  ") + "\n}";
          }
          _0xbd10c.toString = _0x5ad006;
          return _0xbd10c;
        }
        _0x51d5a3.exports = _0x4a0afe;
        _0x4a0afe.verbose = false;
        _0x51d5a3.exports;
      }, {});
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js", function (_0x31a19f, _0x4d83ca, _0x4fe312, _0xa66e8e, _0x1fe752) {
        _0x4fe312.exports = _0x1ff62f;
        var _0x5ee613 = _0x4d83ca("@protobufjs/aspromise");
        var _0x1959c4 = _0x4d83ca('@protobufjs/inquire')('fs');
        function _0x1ff62f(_0x1d9c77, _0x43308e, _0xa5bbfe) {
          if ("function" == typeof _0x43308e) {
            _0xa5bbfe = _0x43308e;
            _0x43308e = {};
          } else if (!_0x43308e) {
            _0x43308e = {};
          }
          return _0xa5bbfe ? !_0x43308e.xhr && _0x1959c4 && _0x1959c4.readFile ? _0x1959c4.readFile(_0x1d9c77, function (_0x3c74cc, _0x4af539) {
            return _0x3c74cc && 'undefined' != typeof XMLHttpRequest ? _0x1ff62f.xhr(_0x1d9c77, _0x43308e, _0xa5bbfe) : _0x3c74cc ? _0xa5bbfe(_0x3c74cc) : _0xa5bbfe(null, _0x43308e.binary ? _0x4af539 : _0x4af539.toString("utf8"));
          }) : _0x1ff62f.xhr(_0x1d9c77, _0x43308e, _0xa5bbfe) : _0x5ee613(_0x1ff62f, this, _0x1d9c77, _0x43308e);
        }
        _0x1ff62f.xhr = function (_0x3e29da, _0x171195, _0x3f03b3) {
          var _0x1f8b89 = new XMLHttpRequest();
          _0x1f8b89.onreadystatechange = function () {
            if (0x4 === _0x1f8b89.readyState) {
              if (0x0 !== _0x1f8b89.status && 0xc8 !== _0x1f8b89.status) {
                return _0x3f03b3(Error("status " + _0x1f8b89.status));
              }
              if (_0x171195.binary) {
                var _0x5993af = _0x1f8b89.response;
                if (!_0x5993af) {
                  _0x5993af = [];
                  for (var _0x47d9aa = 0x0; _0x47d9aa < _0x1f8b89.responseText.length; ++_0x47d9aa) {
                    _0x5993af.push(0xff & _0x1f8b89.responseText.charCodeAt(_0x47d9aa));
                  }
                }
                return _0x3f03b3(null, "undefined" != typeof Uint8Array ? new Uint8Array(_0x5993af) : _0x5993af);
              }
              return _0x3f03b3(null, _0x1f8b89.responseText);
            }
          };
          if (_0x171195.binary) {
            if ("overrideMimeType" in _0x1f8b89) {
              _0x1f8b89.overrideMimeType("text/plain; charset=x-user-defined");
            }
            _0x1f8b89.responseType = "arraybuffer";
          }
          _0x1f8b89.open('GET', _0x3e29da);
          _0x1f8b89.send();
        };
        _0x4fe312.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          '@protobufjs/inquire': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js'
        };
      });
      _0x2f4fd2.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/@protobufjs/path/index.js', function (_0x50fc6d, _0x559f45, _0x5e7205, _0x3a462b, _0x59a4f6) {
        var _0x432aa5 = _0x50fc6d.isAbsolute = function (_0x39cdd0) {
          return /^(?:\/|\w+:)/.test(_0x39cdd0);
        };
        var _0x21e4ed = _0x50fc6d.normalize = function (_0x309521) {
          var _0x1d08c7 = (_0x309521 = _0x309521.replace(/\\/g, '/').replace(/\/{2,}/g, '/')).split('/');
          var _0x1a6e24 = _0x432aa5(_0x309521);
          var _0x45c05e = '';
          if (_0x1a6e24) {
            _0x45c05e = _0x1d08c7.shift() + '/';
          }
          for (var _0x5299b1 = 0x0; _0x5299b1 < _0x1d08c7.length;) {
            if ('..' === _0x1d08c7[_0x5299b1]) {
              if (_0x5299b1 > 0x0 && '..' !== _0x1d08c7[_0x5299b1 - 0x1]) {
                _0x1d08c7.splice(--_0x5299b1, 0x2);
              } else if (_0x1a6e24) {
                _0x1d08c7.splice(_0x5299b1, 0x1);
              } else {
                ++_0x5299b1;
              }
            } else if ('.' === _0x1d08c7[_0x5299b1]) {
              _0x1d08c7.splice(_0x5299b1, 0x1);
            } else {
              ++_0x5299b1;
            }
          }
          return _0x45c05e + _0x1d08c7.join('/');
        };
        _0x50fc6d.resolve = function (_0x325afc, _0x381eff, _0x5d4cdc) {
          if (!_0x5d4cdc) {
            _0x381eff = _0x21e4ed(_0x381eff);
          }
          return _0x432aa5(_0x381eff) ? _0x381eff : (_0x5d4cdc || (_0x325afc = _0x21e4ed(_0x325afc)), (_0x325afc = _0x325afc.replace(/(?:\/|^)[^/]+$/, '')).length ? _0x21e4ed(_0x325afc + '/' + _0x381eff) : _0x381eff);
        };
        _0x5e7205.exports;
      }, {});
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/types.js", function (_0x43e85c, _0x322abb, _0x301d95, _0x529034, _0x8cccf6) {
        var _0x2fea19 = _0x322abb("./util");
        var _0x5dab8a = ["double", "float", "int32", "uint32", 'sint32', "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", 'sfixed64', "bool", "string", "bytes"];
        function _0x18e862(_0x24ac66, _0x726e27) {
          var _0x2c3ca1 = 0x0;
          var _0x5eef90 = {};
          for (_0x726e27 |= 0x0; _0x2c3ca1 < _0x24ac66.length;) {
            _0x5eef90[_0x5dab8a[_0x2c3ca1 + _0x726e27]] = _0x24ac66[_0x2c3ca1++];
          }
          return _0x5eef90;
        }
        _0x43e85c.basic = _0x18e862([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2, 0x2]);
        _0x43e85c.defaults = _0x18e862([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, false, '', _0x2fea19.emptyArray, null]);
        _0x43e85c.long = _0x18e862([0x0, 0x0, 0x0, 0x1, 0x1], 0x7);
        _0x43e85c.mapKey = _0x18e862([0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2], 0x2);
        _0x43e85c.packed = _0x18e862([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0]);
        _0x301d95.exports;
      }, function () {
        return {
          './util': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util.js'
        };
      });
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/field.js", function (_0x102772, _0x246381, _0x1880fc, _0x1bfe48, _0x5b4c41) {
        _0x1880fc.exports = _0xfaa165;
        var _0x53561d = _0x246381('./object');
        ((_0xfaa165.prototype = Object.create(_0x53561d.prototype)).constructor = _0xfaa165).className = 'Field';
        var _0x55e826;
        var _0x45d663 = _0x246381('./enum');
        var _0x236710 = _0x246381("./types");
        var _0x1694f4 = _0x246381('./util');
        var _0x1b0c4d = /^required|optional|repeated$/;
        function _0xfaa165(_0xd0cd6b, _0x32c1f6, _0x17468, _0xf579da, _0x541877, _0x4ff61a, _0x45f316) {
          if (_0x1694f4.isObject(_0xf579da)) {
            _0x45f316 = _0x541877;
            _0x4ff61a = _0xf579da;
            _0xf579da = _0x541877 = undefined;
          } else if (_0x1694f4.isObject(_0x541877)) {
            _0x45f316 = _0x4ff61a;
            _0x4ff61a = _0x541877;
            _0x541877 = undefined;
          }
          _0x53561d.call(this, _0xd0cd6b, _0x4ff61a);
          if (!_0x1694f4.isInteger(_0x32c1f6) || _0x32c1f6 < 0x0) {
            throw TypeError("id must be a non-negative integer");
          }
          if (!_0x1694f4.isString(_0x17468)) {
            throw TypeError("type must be a string");
          }
          if (undefined !== _0xf579da && !_0x1b0c4d.test(_0xf579da = _0xf579da.toString().toLowerCase())) {
            throw TypeError("rule must be a string rule");
          }
          if (undefined !== _0x541877 && !_0x1694f4.isString(_0x541877)) {
            throw TypeError("extend must be a string");
          }
          if ("proto3_optional" === _0xf579da) {
            _0xf579da = 'optional';
          }
          this.rule = _0xf579da && 'optional' !== _0xf579da ? _0xf579da : undefined;
          this.type = _0x17468;
          this.id = _0x32c1f6;
          this.extend = _0x541877 || undefined;
          this.required = 'required' === _0xf579da;
          this.optional = !this.required;
          this.repeated = "repeated" === _0xf579da;
          this.map = false;
          this.message = null;
          this.partOf = null;
          this.typeDefault = null;
          this.defaultValue = null;
          this.long = !!_0x1694f4.Long && undefined !== _0x236710.long[_0x17468];
          this.bytes = 'bytes' === _0x17468;
          this.resolvedType = null;
          this.extensionField = null;
          this.declaringField = null;
          this._packed = null;
          this.comment = _0x45f316;
        }
        _0xfaa165.fromJSON = function (_0x3c8638, _0x3d0730) {
          return new _0xfaa165(_0x3c8638, _0x3d0730.id, _0x3d0730.type, _0x3d0730.rule, _0x3d0730.extend, _0x3d0730.options, _0x3d0730.comment);
        };
        Object.defineProperty(_0xfaa165.prototype, "packed", {
          'get': function () {
            if (null === this._packed) {
              this._packed = false !== this.getOption('packed');
            }
            return this._packed;
          }
        });
        _0xfaa165.prototype.setOption = function (_0x3531a7, _0x51d534, _0x2bd863) {
          if ("packed" === _0x3531a7) {
            this._packed = null;
          }
          return _0x53561d.prototype.setOption.call(this, _0x3531a7, _0x51d534, _0x2bd863);
        };
        _0xfaa165.prototype.toJSON = function (_0xca374f) {
          var _0x5b2452 = !!_0xca374f && Boolean(_0xca374f.keepComments);
          return _0x1694f4.toObject(["rule", 'optional' !== this.rule && this.rule || undefined, 'type', this.type, 'id', this.id, "extend", this.extend, "options", this.options, "comment", _0x5b2452 ? this.comment : undefined]);
        };
        _0xfaa165.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === (this.typeDefault = _0x236710.defaults[this.type])) {
            this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
            if (this.resolvedType instanceof _0x55e826) {
              this.typeDefault = null;
            } else {
              this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0x0]];
            }
          }
          if (this.options && null != this.options["default"]) {
            this.typeDefault = this.options["default"];
            if (this.resolvedType instanceof _0x45d663 && "string" == typeof this.typeDefault) {
              this.typeDefault = this.resolvedType.values[this.typeDefault];
            }
          }
          if (this.options) {
            if (!(true !== this.options.packed && (undefined === this.options.packed || !this.resolvedType || this.resolvedType instanceof _0x45d663))) {
              delete this.options.packed;
            }
            if (!Object.keys(this.options).length) {
              this.options = undefined;
            }
          }
          if (this.long) {
            this.typeDefault = _0x1694f4.Long.fromNumber(this.typeDefault, 'u' === this.type.charAt(0x0));
            if (Object.freeze) {
              Object.freeze(this.typeDefault);
            }
          } else {
            if (this.bytes && 'string' == typeof this.typeDefault) {
              var _0x156bfc;
              if (_0x1694f4.base64.test(this.typeDefault)) {
                _0x1694f4.base64.decode(this.typeDefault, _0x156bfc = _0x1694f4.newBuffer(_0x1694f4.base64.length(this.typeDefault)), 0x0);
              } else {
                _0x1694f4.utf8.write(this.typeDefault, _0x156bfc = _0x1694f4.newBuffer(_0x1694f4.utf8.length(this.typeDefault)), 0x0);
              }
              this.typeDefault = _0x156bfc;
            }
          }
          if (this.map) {
            this.defaultValue = _0x1694f4.emptyObject;
          } else if (this.repeated) {
            this.defaultValue = _0x1694f4.emptyArray;
          } else {
            this.defaultValue = this.typeDefault;
          }
          if (this.parent instanceof _0x55e826) {
            this.parent.ctor.prototype[this.name] = this.defaultValue;
          }
          return _0x53561d.prototype.resolve.call(this);
        };
        _0xfaa165.d = function (_0x2abb4e, _0xc30f4, _0x312c14, _0x32e206) {
          if ("function" == typeof _0xc30f4) {
            _0xc30f4 = _0x1694f4.decorateType(_0xc30f4).name;
          } else if (_0xc30f4 && "object" == typeof _0xc30f4) {
            _0xc30f4 = _0x1694f4.decorateEnum(_0xc30f4).name;
          }
          return function (_0xedeb08, _0x5e3bca) {
            _0x1694f4.decorateType(_0xedeb08.constructor).add(new _0xfaa165(_0x5e3bca, _0x2abb4e, _0xc30f4, _0x312c14, {
              'default': _0x32e206
            }));
          };
        };
        _0xfaa165._configure = function (_0x298795) {
          _0x55e826 = _0x298795;
        };
        _0x1880fc.exports;
      }, function () {
        return {
          './object': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util.js'
        };
      });
      _0x2f4fd2.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js', function (_0x1bfbb7, _0x2a4aad, _0x2dd0df, _0x46152d, _0x31758e) {
        _0x2dd0df.exports = _0x132bd5;
        var _0x5f34ff = _0x2a4aad("./object");
        ((_0x132bd5.prototype = Object.create(_0x5f34ff.prototype)).constructor = _0x132bd5).className = "OneOf";
        var _0x5b0046 = _0x2a4aad("./field");
        var _0x483eda = _0x2a4aad("./util");
        function _0x132bd5(_0x47385c, _0x589a8f, _0x2df7d6, _0x140cdd) {
          if (!Array.isArray(_0x589a8f)) {
            _0x2df7d6 = _0x589a8f;
            _0x589a8f = undefined;
          }
          _0x5f34ff.call(this, _0x47385c, _0x2df7d6);
          if (undefined !== _0x589a8f && !Array.isArray(_0x589a8f)) {
            throw TypeError("fieldNames must be an Array");
          }
          this.oneof = _0x589a8f || [];
          this.fieldsArray = [];
          this.comment = _0x140cdd;
        }
        function _0xbca278(_0x52e73a) {
          if (_0x52e73a.parent) {
            for (var _0xc34765 = 0x0; _0xc34765 < _0x52e73a.fieldsArray.length; ++_0xc34765) {
              if (!_0x52e73a.fieldsArray[_0xc34765].parent) {
                _0x52e73a.parent.add(_0x52e73a.fieldsArray[_0xc34765]);
              }
            }
          }
        }
        _0x132bd5.fromJSON = function (_0x471dc9, _0x388e93) {
          return new _0x132bd5(_0x471dc9, _0x388e93.oneof, _0x388e93.options, _0x388e93.comment);
        };
        _0x132bd5.prototype.toJSON = function (_0x182d71) {
          var _0x3e7cc9 = !!_0x182d71 && Boolean(_0x182d71.keepComments);
          return _0x483eda.toObject(["options", this.options, 'oneof', this.oneof, "comment", _0x3e7cc9 ? this.comment : undefined]);
        };
        _0x132bd5.prototype.add = function (_0x297c2a) {
          if (!(_0x297c2a instanceof _0x5b0046)) {
            throw TypeError("field must be a Field");
          }
          if (_0x297c2a.parent && _0x297c2a.parent !== this.parent) {
            _0x297c2a.parent.remove(_0x297c2a);
          }
          this.oneof.push(_0x297c2a.name);
          this.fieldsArray.push(_0x297c2a);
          _0x297c2a.partOf = this;
          _0xbca278(this);
          return this;
        };
        _0x132bd5.prototype.remove = function (_0x1333e4) {
          if (!(_0x1333e4 instanceof _0x5b0046)) {
            throw TypeError("field must be a Field");
          }
          var _0x2cbb47 = this.fieldsArray.indexOf(_0x1333e4);
          if (_0x2cbb47 < 0x0) {
            throw Error(_0x1333e4 + " is not a member of " + this);
          }
          this.fieldsArray.splice(_0x2cbb47, 0x1);
          if ((_0x2cbb47 = this.oneof.indexOf(_0x1333e4.name)) > -0x1) {
            this.oneof.splice(_0x2cbb47, 0x1);
          }
          _0x1333e4.partOf = null;
          return this;
        };
        _0x132bd5.prototype.onAdd = function (_0x51f82e) {
          _0x5f34ff.prototype.onAdd.call(this, _0x51f82e);
          for (var _0x15e3bf = 0x0; _0x15e3bf < this.oneof.length; ++_0x15e3bf) {
            var _0x1796a1 = _0x51f82e.get(this.oneof[_0x15e3bf]);
            if (_0x1796a1 && !_0x1796a1.partOf) {
              _0x1796a1.partOf = this;
              this.fieldsArray.push(_0x1796a1);
            }
          }
          _0xbca278(this);
        };
        _0x132bd5.prototype.onRemove = function (_0x5bddd0) {
          var _0x2f8b1a;
          for (var _0xb62d87 = 0x0; _0xb62d87 < this.fieldsArray.length; ++_0xb62d87) {
            if ((_0x2f8b1a = this.fieldsArray[_0xb62d87]).parent) {
              _0x2f8b1a.parent.remove(_0x2f8b1a);
            }
          }
          _0x5f34ff.prototype.onRemove.call(this, _0x5bddd0);
        };
        _0x132bd5.d = function () {
          var _0x96a503 = new Array(arguments.length);
          for (var _0x3cbd49 = 0x0; _0x3cbd49 < arguments.length;) {
            _0x96a503[_0x3cbd49] = arguments[_0x3cbd49++];
          }
          return function (_0x48247b, _0x1fad09) {
            _0x483eda.decorateType(_0x48247b.constructor).add(new _0x132bd5(_0x1fad09, _0x96a503));
            Object.defineProperty(_0x48247b, _0x1fad09, {
              'get': _0x483eda.oneOfGetter(_0x96a503),
              'set': _0x483eda.oneOfSetter(_0x96a503)
            });
          };
        };
        _0x2dd0df.exports;
      }, function () {
        return {
          './object': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './field': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './util': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util.js'
        };
      });
      _0x2f4fd2.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js', function (_0x5d6f3b, _0x3f012d, _0x3dfbe9, _0x57d34b, _0x1478dc) {
        _0x3dfbe9.exports = _0x5c8605;
        var _0x3b0a49 = _0x3f012d("./object");
        ((_0x5c8605.prototype = Object.create(_0x3b0a49.prototype)).constructor = _0x5c8605).className = "Namespace";
        var _0x47e341;
        var _0x4ac178;
        var _0x170584;
        var _0x58bbc7 = _0x3f012d("./field");
        var _0x313531 = _0x3f012d("./oneof");
        var _0x1e3910 = _0x3f012d("./util");
        function _0x508e5c(_0x5537c5, _0x486246) {
          if (_0x5537c5 && _0x5537c5.length) {
            var _0x28db2e = {};
            for (var _0x30ad7c = 0x0; _0x30ad7c < _0x5537c5.length; ++_0x30ad7c) {
              _0x28db2e[_0x5537c5[_0x30ad7c].name] = _0x5537c5[_0x30ad7c].toJSON(_0x486246);
            }
            return _0x28db2e;
          }
        }
        function _0x5c8605(_0x3e02e0, _0x128c0e) {
          _0x3b0a49.call(this, _0x3e02e0, _0x128c0e);
          this.nested = undefined;
          this._nestedArray = null;
        }
        function _0x45b7df(_0x429989) {
          _0x429989._nestedArray = null;
          return _0x429989;
        }
        _0x5c8605.fromJSON = function (_0x58bf15, _0x8a2d73) {
          return new _0x5c8605(_0x58bf15, _0x8a2d73.options).addJSON(_0x8a2d73.nested);
        };
        _0x5c8605.arrayToJSON = _0x508e5c;
        _0x5c8605.isReservedId = function (_0x5de82e, _0x6ad634) {
          if (_0x5de82e) {
            for (var _0x20a18e = 0x0; _0x20a18e < _0x5de82e.length; ++_0x20a18e) {
              if ("string" != typeof _0x5de82e[_0x20a18e] && _0x5de82e[_0x20a18e][0x0] <= _0x6ad634 && _0x5de82e[_0x20a18e][0x1] > _0x6ad634) {
                return true;
              }
            }
          }
          return false;
        };
        _0x5c8605.isReservedName = function (_0x542c36, _0x3b36ca) {
          if (_0x542c36) {
            for (var _0x1485a5 = 0x0; _0x1485a5 < _0x542c36.length; ++_0x1485a5) {
              if (_0x542c36[_0x1485a5] === _0x3b36ca) {
                return true;
              }
            }
          }
          return false;
        };
        Object.defineProperty(_0x5c8605.prototype, "nestedArray", {
          'get': function () {
            return this._nestedArray || (this._nestedArray = _0x1e3910.toArray(this.nested));
          }
        });
        _0x5c8605.prototype.toJSON = function (_0x4486fc) {
          return _0x1e3910.toObject(["options", this.options, "nested", _0x508e5c(this.nestedArray, _0x4486fc)]);
        };
        _0x5c8605.prototype.addJSON = function (_0x5ef6cd) {
          if (_0x5ef6cd) {
            var _0x7fb449;
            var _0x20442f = Object.keys(_0x5ef6cd);
            for (var _0x58c057 = 0x0; _0x58c057 < _0x20442f.length; ++_0x58c057) {
              _0x7fb449 = _0x5ef6cd[_0x20442f[_0x58c057]];
              this.add((undefined !== _0x7fb449.fields ? _0x47e341.fromJSON : undefined !== _0x7fb449.values ? _0x170584.fromJSON : undefined !== _0x7fb449.methods ? _0x4ac178.fromJSON : undefined !== _0x7fb449.id ? _0x58bbc7.fromJSON : _0x5c8605.fromJSON)(_0x20442f[_0x58c057], _0x7fb449));
            }
          }
          return this;
        };
        _0x5c8605.prototype.get = function (_0x4c1f64) {
          return this.nested && this.nested[_0x4c1f64] || null;
        };
        _0x5c8605.prototype.getEnum = function (_0x4dee33) {
          if (this.nested && this.nested[_0x4dee33] instanceof _0x170584) {
            return this.nested[_0x4dee33].values;
          }
          throw Error("no such enum: " + _0x4dee33);
        };
        _0x5c8605.prototype.add = function (_0x598582) {
          if (!(_0x598582 instanceof _0x58bbc7 && undefined !== _0x598582.extend || _0x598582 instanceof _0x47e341 || _0x598582 instanceof _0x170584 || _0x598582 instanceof _0x4ac178 || _0x598582 instanceof _0x5c8605 || _0x598582 instanceof _0x313531)) {
            throw TypeError("object must be a valid nested object");
          }
          if (this.nested) {
            var _0x17c2a2 = this.get(_0x598582.name);
            if (_0x17c2a2) {
              if (!(_0x17c2a2 instanceof _0x5c8605 && _0x598582 instanceof _0x5c8605) || _0x17c2a2 instanceof _0x47e341 || _0x17c2a2 instanceof _0x4ac178) {
                throw Error("duplicate name '" + _0x598582.name + "' in " + this);
              }
              var _0x2b2845 = _0x17c2a2.nestedArray;
              for (var _0x438bfc = 0x0; _0x438bfc < _0x2b2845.length; ++_0x438bfc) {
                _0x598582.add(_0x2b2845[_0x438bfc]);
              }
              this.remove(_0x17c2a2);
              if (!this.nested) {
                this.nested = {};
              }
              _0x598582.setOptions(_0x17c2a2.options, true);
            }
          } else {
            this.nested = {};
          }
          this.nested[_0x598582.name] = _0x598582;
          _0x598582.onAdd(this);
          return _0x45b7df(this);
        };
        _0x5c8605.prototype.remove = function (_0x573a2e) {
          if (!(_0x573a2e instanceof _0x3b0a49)) {
            throw TypeError("object must be a ReflectionObject");
          }
          if (_0x573a2e.parent !== this) {
            throw Error(_0x573a2e + " is not a member of " + this);
          }
          delete this.nested[_0x573a2e.name];
          if (!Object.keys(this.nested).length) {
            this.nested = undefined;
          }
          _0x573a2e.onRemove(this);
          return _0x45b7df(this);
        };
        _0x5c8605.prototype.define = function (_0x1a02c3, _0x2decfe) {
          if (_0x1e3910.isString(_0x1a02c3)) {
            _0x1a02c3 = _0x1a02c3.split('.');
          } else {
            if (!Array.isArray(_0x1a02c3)) {
              throw TypeError("illegal path");
            }
          }
          if (_0x1a02c3 && _0x1a02c3.length && '' === _0x1a02c3[0x0]) {
            throw Error("path must be relative");
          }
          for (var _0x539744 = this; _0x1a02c3.length > 0x0;) {
            var _0x4b5ffa = _0x1a02c3.shift();
            if (_0x539744.nested && _0x539744.nested[_0x4b5ffa]) {
              if (!((_0x539744 = _0x539744.nested[_0x4b5ffa]) instanceof _0x5c8605)) {
                throw Error("path conflicts with non-namespace objects");
              }
            } else {
              _0x539744.add(_0x539744 = new _0x5c8605(_0x4b5ffa));
            }
          }
          if (_0x2decfe) {
            _0x539744.addJSON(_0x2decfe);
          }
          return _0x539744;
        };
        _0x5c8605.prototype.resolveAll = function () {
          var _0x1fed18 = this.nestedArray;
          for (var _0x4db473 = 0x0; _0x4db473 < _0x1fed18.length;) {
            if (_0x1fed18[_0x4db473] instanceof _0x5c8605) {
              _0x1fed18[_0x4db473++].resolveAll();
            } else {
              _0x1fed18[_0x4db473++].resolve();
            }
          }
          return this.resolve();
        };
        _0x5c8605.prototype.lookup = function (_0x5de689, _0x298a90, _0x3a7ed2) {
          if ('boolean' == typeof _0x298a90) {
            _0x3a7ed2 = _0x298a90;
            _0x298a90 = undefined;
          } else if (_0x298a90 && !Array.isArray(_0x298a90)) {
            _0x298a90 = [_0x298a90];
          }
          if (_0x1e3910.isString(_0x5de689) && _0x5de689.length) {
            if ('.' === _0x5de689) {
              return this.root;
            }
            _0x5de689 = _0x5de689.split('.');
          } else {
            if (!_0x5de689.length) {
              return this;
            }
          }
          if ('' === _0x5de689[0x0]) {
            return this.root.lookup(_0x5de689.slice(0x1), _0x298a90);
          }
          var _0x196e6e = this.get(_0x5de689[0x0]);
          if (_0x196e6e) {
            if (0x1 === _0x5de689.length) {
              if (!_0x298a90 || _0x298a90.indexOf(_0x196e6e.constructor) > -0x1) {
                return _0x196e6e;
              }
            } else {
              if (_0x196e6e instanceof _0x5c8605 && (_0x196e6e = _0x196e6e.lookup(_0x5de689.slice(0x1), _0x298a90, true))) {
                return _0x196e6e;
              }
            }
          } else {
            for (var _0x880d4c = 0x0; _0x880d4c < this.nestedArray.length; ++_0x880d4c) {
              if (this._nestedArray[_0x880d4c] instanceof _0x5c8605 && (_0x196e6e = this._nestedArray[_0x880d4c].lookup(_0x5de689, _0x298a90, true))) {
                return _0x196e6e;
              }
            }
          }
          return null === this.parent || _0x3a7ed2 ? null : this.parent.lookup(_0x5de689, _0x298a90);
        };
        _0x5c8605.prototype.lookupType = function (_0x3d8d32) {
          var _0x37acfa = this.lookup(_0x3d8d32, [_0x47e341]);
          if (!_0x37acfa) {
            throw Error("no such type: " + _0x3d8d32);
          }
          return _0x37acfa;
        };
        _0x5c8605.prototype.lookupEnum = function (_0x4e9271) {
          var _0x2cc4f4 = this.lookup(_0x4e9271, [_0x170584]);
          if (!_0x2cc4f4) {
            throw Error("no such Enum '" + _0x4e9271 + "' in " + this);
          }
          return _0x2cc4f4;
        };
        _0x5c8605.prototype.lookupTypeOrEnum = function (_0x159f8c) {
          var _0x2b4f7c = this.lookup(_0x159f8c, [_0x47e341, _0x170584]);
          if (!_0x2b4f7c) {
            throw Error("no such Type or Enum '" + _0x159f8c + "' in " + this);
          }
          return _0x2b4f7c;
        };
        _0x5c8605.prototype.lookupService = function (_0x1e727b) {
          var _0x1ee985 = this.lookup(_0x1e727b, [_0x4ac178]);
          if (!_0x1ee985) {
            throw Error("no such Service '" + _0x1e727b + "' in " + this);
          }
          return _0x1ee985;
        };
        _0x5c8605._configure = function (_0x1b6502, _0x20f3da, _0x2f4d57) {
          _0x47e341 = _0x1b6502;
          _0x4ac178 = _0x20f3da;
          _0x170584 = _0x2f4d57;
        };
        _0x3dfbe9.exports;
      }, function () {
        return {
          './object': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './field': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './oneof': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js',
          './util': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util.js'
        };
      });
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js", function (_0x47f0d8, _0x2f46e1, _0xa65fc3, _0x47bad0, _0x118212) {
        _0xa65fc3.exports = _0x4e7e5b;
        var _0x25e2e8 = _0x2f46e1("./field");
        ((_0x4e7e5b.prototype = Object.create(_0x25e2e8.prototype)).constructor = _0x4e7e5b).className = "MapField";
        var _0xf87359 = _0x2f46e1("./types");
        var _0x9207f4 = _0x2f46e1("./util");
        function _0x4e7e5b(_0x39b5dc, _0x24f04e, _0x44def8, _0xade36e, _0x69db4c, _0x506154) {
          _0x25e2e8.call(this, _0x39b5dc, _0x24f04e, _0xade36e, undefined, undefined, _0x69db4c, _0x506154);
          if (!_0x9207f4.isString(_0x44def8)) {
            throw TypeError("keyType must be a string");
          }
          this.keyType = _0x44def8;
          this.resolvedKeyType = null;
          this.map = true;
        }
        _0x4e7e5b.fromJSON = function (_0x236704, _0x3a51f8) {
          return new _0x4e7e5b(_0x236704, _0x3a51f8.id, _0x3a51f8.keyType, _0x3a51f8.type, _0x3a51f8.options, _0x3a51f8.comment);
        };
        _0x4e7e5b.prototype.toJSON = function (_0x124c9a) {
          var _0x47efd9 = !!_0x124c9a && Boolean(_0x124c9a.keepComments);
          return _0x9207f4.toObject(['keyType', this.keyType, "type", this.type, 'id', this.id, "extend", this.extend, 'options', this.options, 'comment', _0x47efd9 ? this.comment : undefined]);
        };
        _0x4e7e5b.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === _0xf87359.mapKey[this.keyType]) {
            throw Error("invalid key type: " + this.keyType);
          }
          return _0x25e2e8.prototype.resolve.call(this);
        };
        _0x4e7e5b.d = function (_0x5c3ae4, _0x3516c9, _0x23c702) {
          if ("function" == typeof _0x23c702) {
            _0x23c702 = _0x9207f4.decorateType(_0x23c702).name;
          } else if (_0x23c702 && "object" == typeof _0x23c702) {
            _0x23c702 = _0x9207f4.decorateEnum(_0x23c702).name;
          }
          return function (_0x5a4148, _0x1fb5f1) {
            _0x9207f4.decorateType(_0x5a4148.constructor).add(new _0x4e7e5b(_0x1fb5f1, _0x5c3ae4, _0x3516c9, _0x23c702));
          };
        };
        _0xa65fc3.exports;
      }, function () {
        return {
          './field': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './types': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util.js'
        };
      });
      _0x2f4fd2.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/method.js', function (_0x5064d3, _0x4079e3, _0x13bdf6, _0x31cb5a, _0x45e5d6) {
        _0x13bdf6.exports = _0x37f4b0;
        var _0x457da2 = _0x4079e3("./object");
        ((_0x37f4b0.prototype = Object.create(_0x457da2.prototype)).constructor = _0x37f4b0).className = "Method";
        var _0x287861 = _0x4079e3("./util");
        function _0x37f4b0(_0x2654ba, _0x369ab4, _0x4b6f61, _0x6f6a1, _0xabdfb0, _0x17b426, _0x4c5cf6, _0x172a07, _0x23b9ec) {
          if (_0x287861.isObject(_0xabdfb0)) {
            _0x4c5cf6 = _0xabdfb0;
            _0xabdfb0 = _0x17b426 = undefined;
          } else if (_0x287861.isObject(_0x17b426)) {
            _0x4c5cf6 = _0x17b426;
            _0x17b426 = undefined;
          }
          if (undefined !== _0x369ab4 && !_0x287861.isString(_0x369ab4)) {
            throw TypeError("type must be a string");
          }
          if (!_0x287861.isString(_0x4b6f61)) {
            throw TypeError("requestType must be a string");
          }
          if (!_0x287861.isString(_0x6f6a1)) {
            throw TypeError("responseType must be a string");
          }
          _0x457da2.call(this, _0x2654ba, _0x4c5cf6);
          this.type = _0x369ab4 || "rpc";
          this.requestType = _0x4b6f61;
          this.requestStream = !!_0xabdfb0 || undefined;
          this.responseType = _0x6f6a1;
          this.responseStream = !!_0x17b426 || undefined;
          this.resolvedRequestType = null;
          this.resolvedResponseType = null;
          this.comment = _0x172a07;
          this.parsedOptions = _0x23b9ec;
        }
        _0x37f4b0.fromJSON = function (_0x38cb2d, _0x35799a) {
          return new _0x37f4b0(_0x38cb2d, _0x35799a.type, _0x35799a.requestType, _0x35799a.responseType, _0x35799a.requestStream, _0x35799a.responseStream, _0x35799a.options, _0x35799a.comment, _0x35799a.parsedOptions);
        };
        _0x37f4b0.prototype.toJSON = function (_0x33d597) {
          var _0x2bea54 = !!_0x33d597 && Boolean(_0x33d597.keepComments);
          return _0x287861.toObject(["type", "rpc" !== this.type && this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, 'responseStream', this.responseStream, "options", this.options, "comment", _0x2bea54 ? this.comment : undefined, "parsedOptions", this.parsedOptions]);
        };
        _0x37f4b0.prototype.resolve = function () {
          return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), _0x457da2.prototype.resolve.call(this));
        };
        _0x13bdf6.exports;
      }, function () {
        return {
          './object': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './util': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util.js'
        };
      });
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/service.js", function (_0x34293a, _0x4f7dec, _0x4d90e8, _0x2003c1, _0x4a3de8) {
        _0x4d90e8.exports = _0x4c6ca4;
        var _0x11d3d2 = _0x4f7dec("./namespace");
        ((_0x4c6ca4.prototype = Object.create(_0x11d3d2.prototype)).constructor = _0x4c6ca4).className = "Service";
        var _0x1a26cd = _0x4f7dec("./method");
        var _0x4b9c24 = _0x4f7dec("./util");
        var _0x4d9af9 = _0x4f7dec("./rpc");
        function _0x4c6ca4(_0x5b9f88, _0x474b74) {
          _0x11d3d2.call(this, _0x5b9f88, _0x474b74);
          this.methods = {};
          this._methodsArray = null;
        }
        function _0x5a520d(_0x116bf6) {
          _0x116bf6._methodsArray = null;
          return _0x116bf6;
        }
        _0x4c6ca4.fromJSON = function (_0x562f3a, _0x471f6a) {
          var _0x5c7f9e = new _0x4c6ca4(_0x562f3a, _0x471f6a.options);
          if (_0x471f6a.methods) {
            var _0x1f85d3 = Object.keys(_0x471f6a.methods);
            for (var _0x58acc9 = 0x0; _0x58acc9 < _0x1f85d3.length; ++_0x58acc9) {
              _0x5c7f9e.add(_0x1a26cd.fromJSON(_0x1f85d3[_0x58acc9], _0x471f6a.methods[_0x1f85d3[_0x58acc9]]));
            }
          }
          if (_0x471f6a.nested) {
            _0x5c7f9e.addJSON(_0x471f6a.nested);
          }
          _0x5c7f9e.comment = _0x471f6a.comment;
          return _0x5c7f9e;
        };
        _0x4c6ca4.prototype.toJSON = function (_0x20ab37) {
          var _0xd6675b = _0x11d3d2.prototype.toJSON.call(this, _0x20ab37);
          var _0x31781b = !!_0x20ab37 && Boolean(_0x20ab37.keepComments);
          return _0x4b9c24.toObject(['options', _0xd6675b && _0xd6675b.options || undefined, "methods", _0x11d3d2.arrayToJSON(this.methodsArray, _0x20ab37) || {}, 'nested', _0xd6675b && _0xd6675b.nested || undefined, 'comment', _0x31781b ? this.comment : undefined]);
        };
        Object.defineProperty(_0x4c6ca4.prototype, "methodsArray", {
          'get': function () {
            return this._methodsArray || (this._methodsArray = _0x4b9c24.toArray(this.methods));
          }
        });
        _0x4c6ca4.prototype.get = function (_0x41e695) {
          return this.methods[_0x41e695] || _0x11d3d2.prototype.get.call(this, _0x41e695);
        };
        _0x4c6ca4.prototype.resolveAll = function () {
          var _0x1134da = this.methodsArray;
          for (var _0x3f23bd = 0x0; _0x3f23bd < _0x1134da.length; ++_0x3f23bd) {
            _0x1134da[_0x3f23bd].resolve();
          }
          return _0x11d3d2.prototype.resolve.call(this);
        };
        _0x4c6ca4.prototype.add = function (_0x3f25a2) {
          if (this.get(_0x3f25a2.name)) {
            throw Error("duplicate name '" + _0x3f25a2.name + "' in " + this);
          }
          return _0x3f25a2 instanceof _0x1a26cd ? (this.methods[_0x3f25a2.name] = _0x3f25a2, _0x3f25a2.parent = this, _0x5a520d(this)) : _0x11d3d2.prototype.add.call(this, _0x3f25a2);
        };
        _0x4c6ca4.prototype.remove = function (_0x16d3b6) {
          if (_0x16d3b6 instanceof _0x1a26cd) {
            if (this.methods[_0x16d3b6.name] !== _0x16d3b6) {
              throw Error(_0x16d3b6 + " is not a member of " + this);
            }
            delete this.methods[_0x16d3b6.name];
            _0x16d3b6.parent = null;
            return _0x5a520d(this);
          }
          return _0x11d3d2.prototype.remove.call(this, _0x16d3b6);
        };
        _0x4c6ca4.prototype.create = function (_0x47075a, _0x1a984e, _0x5367a9) {
          var _0x42aee0;
          var _0x37ef1c = new _0x4d9af9.Service(_0x47075a, _0x1a984e, _0x5367a9);
          for (var _0x1e3f1c = 0x0; _0x1e3f1c < this.methodsArray.length; ++_0x1e3f1c) {
            var _0x599db6 = _0x4b9c24.lcFirst((_0x42aee0 = this._methodsArray[_0x1e3f1c]).resolve().name).replace(/[^$\w_]/g, '');
            _0x37ef1c[_0x599db6] = _0x4b9c24.codegen(['r', 'c'], _0x4b9c24.isReserved(_0x599db6) ? _0x599db6 + '_' : _0x599db6)("return this.rpcCall(m,q,s,r,c)")({
              'm': _0x42aee0,
              'q': _0x42aee0.resolvedRequestType.ctor,
              's': _0x42aee0.resolvedResponseType.ctor
            });
          }
          return _0x37ef1c;
        };
        _0x4d90e8.exports;
      }, function () {
        return {
          './namespace': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js',
          './method': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/method.js',
          './util': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util.js',
          './rpc': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js'
        };
      });
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/message.js", function (_0x47a886, _0x35abcf, _0x1b4ebc, _0x1fadfd, _0xba78d5) {
        _0x1b4ebc.exports = _0x2e5526;
        var _0x4bde51 = _0x35abcf("./util/minimal");
        function _0x2e5526(_0x435b96) {
          if (_0x435b96) {
            var _0x1528f5 = Object.keys(_0x435b96);
            for (var _0x5604ed = 0x0; _0x5604ed < _0x1528f5.length; ++_0x5604ed) {
              this[_0x1528f5[_0x5604ed]] = _0x435b96[_0x1528f5[_0x5604ed]];
            }
          }
        }
        _0x2e5526.create = function (_0x4ccd3e) {
          return this.$type.create(_0x4ccd3e);
        };
        _0x2e5526.encode = function (_0x45e5a5, _0x2904af) {
          return this.$type.encode(_0x45e5a5, _0x2904af);
        };
        _0x2e5526.encodeDelimited = function (_0x3915eb, _0x585e9c) {
          return this.$type.encodeDelimited(_0x3915eb, _0x585e9c);
        };
        _0x2e5526.decode = function (_0x18bb62) {
          return this.$type.decode(_0x18bb62);
        };
        _0x2e5526.decodeDelimited = function (_0x3eda8c) {
          return this.$type.decodeDelimited(_0x3eda8c);
        };
        _0x2e5526.verify = function (_0x16f12b) {
          return this.$type.verify(_0x16f12b);
        };
        _0x2e5526.fromObject = function (_0x4f719f) {
          return this.$type.fromObject(_0x4f719f);
        };
        _0x2e5526.toObject = function (_0x4a37ef, _0x1f78f2) {
          return this.$type.toObject(_0x4a37ef, _0x1f78f2);
        };
        _0x2e5526.prototype.toJSON = function () {
          return this.$type.toObject(this, _0x4bde51.toJSONOptions);
        };
        _0x1b4ebc.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js", function (_0x36ec53, _0x513228, _0xf03718, _0x4409a3, _0x433617) {
        _0xf03718.exports = function (_0x585143) {
          var _0x372fd2 = _0x5127ef.codegen(['r', 'l'], _0x585143.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (_0x585143.fieldsArray.filter(function (_0x255847) {
            return _0x255847.map;
          }).length ? ',k,value' : ''))('while(r.pos<c){')("var t=r.uint32()");
          if (_0x585143.group) {
            _0x372fd2("if((t&7)===4)")("break");
          }
          _0x372fd2('switch(t>>>3){');
          for (var _0x504e7c = 0x0; _0x504e7c < _0x585143.fieldsArray.length; ++_0x504e7c) {
            var _0x24d438 = _0x585143._fieldsArray[_0x504e7c].resolve();
            var _0xc2f99c = _0x24d438.resolvedType instanceof _0x58a461 ? "int32" : _0x24d438.type;
            var _0x53fa00 = 'm' + _0x5127ef.safeProp(_0x24d438.name);
            _0x372fd2("case %i:", _0x24d438.id);
            if (_0x24d438.map) {
              _0x372fd2("if(%s===util.emptyObject)", _0x53fa00)("%s={}", _0x53fa00)("var c2 = r.uint32()+r.pos");
              if (undefined !== _0x4de134.defaults[_0x24d438.keyType]) {
                _0x372fd2("k=%j", _0x4de134.defaults[_0x24d438.keyType]);
              } else {
                _0x372fd2("k=null");
              }
              if (undefined !== _0x4de134.defaults[_0xc2f99c]) {
                _0x372fd2("value=%j", _0x4de134.defaults[_0xc2f99c]);
              } else {
                _0x372fd2("value=null");
              }
              _0x372fd2("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", _0x24d438.keyType)("case 2:");
              if (undefined === _0x4de134.basic[_0xc2f99c]) {
                _0x372fd2("value=types[%i].decode(r,r.uint32())", _0x504e7c);
              } else {
                _0x372fd2("value=r.%s()", _0xc2f99c);
              }
              _0x372fd2("break")("default:")("r.skipType(tag2&7)")("break")('}')('}');
              if (undefined !== _0x4de134.long[_0x24d438.keyType]) {
                _0x372fd2("%s[typeof k===\"object\"?util.longToHash(k):k]=value", _0x53fa00);
              } else {
                _0x372fd2("%s[k]=value", _0x53fa00);
              }
            } else if (_0x24d438.repeated) {
              _0x372fd2("if(!(%s&&%s.length))", _0x53fa00, _0x53fa00)("%s=[]", _0x53fa00);
              if (undefined !== _0x4de134.packed[_0xc2f99c]) {
                _0x372fd2("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", _0x53fa00, _0xc2f99c)("}else");
              }
              if (undefined === _0x4de134.basic[_0xc2f99c]) {
                _0x372fd2(_0x24d438.resolvedType.group ? '%s.push(types[%i].decode(r))' : '%s.push(types[%i].decode(r,r.uint32()))', _0x53fa00, _0x504e7c);
              } else {
                _0x372fd2("%s.push(r.%s())", _0x53fa00, _0xc2f99c);
              }
            } else if (undefined === _0x4de134.basic[_0xc2f99c]) {
              _0x372fd2(_0x24d438.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", _0x53fa00, _0x504e7c);
            } else {
              _0x372fd2("%s=r.%s()", _0x53fa00, _0xc2f99c);
            }
            _0x372fd2("break");
          }
          _0x372fd2("default:")("r.skipType(t&7)")("break")('}')('}');
          for (_0x504e7c = 0x0; _0x504e7c < _0x585143._fieldsArray.length; ++_0x504e7c) {
            var _0x17bb6b = _0x585143._fieldsArray[_0x504e7c];
            if (_0x17bb6b.required) {
              _0x372fd2('if(!m.hasOwnProperty(%j))', _0x17bb6b.name)("throw util.ProtocolError(%j,{instance:m})", "missing required '" + _0x17bb6b.name + "'");
            }
          }
          return _0x372fd2("return m");
        };
        var _0x58a461 = _0x513228("./enum");
        var _0x4de134 = _0x513228("./types");
        var _0x5127ef = _0x513228("./util");
        _0xf03718.exports;
      }, function () {
        return {
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util.js'
        };
      });
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js", function (_0x5c62a3, _0x14cdd1, _0x1e6583, _0x43dc27, _0x1c792c) {
        _0x1e6583.exports = function (_0xc03d9b) {
          var _0x54f974 = _0xdb4e33.codegen(['m'], _0xc03d9b.name + "$verify")("if(typeof m!==\"object\"||m===null)")("return%j", "object expected");
          var _0x348cfb = _0xc03d9b.oneofsArray;
          var _0x5a21f0 = {};
          if (_0x348cfb.length) {
            _0x54f974("var p={}");
          }
          for (var _0x3e78eb = 0x0; _0x3e78eb < _0xc03d9b.fieldsArray.length; ++_0x3e78eb) {
            var _0xd6fc15 = _0xc03d9b._fieldsArray[_0x3e78eb].resolve();
            var _0x11240e = 'm' + _0xdb4e33.safeProp(_0xd6fc15.name);
            if (_0xd6fc15.optional) {
              _0x54f974("if(%s!=null&&m.hasOwnProperty(%j)){", _0x11240e, _0xd6fc15.name);
            }
            if (_0xd6fc15.map) {
              _0x54f974('if(!util.isObject(%s))', _0x11240e)('return%j', _0xd6fc15.name + ": " + _0xf38f(0x8a0) + (_0xd6fc15.repeated && "array" !== _0xf38f(0x8a0) ? '[]' : _0xd6fc15.map && false ? "{k:" + _0xd6fc15.keyType + '}' : '') + " expected")("var k=Object.keys(%s)", _0x11240e)("for(var i=0;i<k.length;++i){");
              _0x56ad24(_0x54f974, _0xd6fc15, "k[i]");
              _0x38ea8d(_0x54f974, _0xd6fc15, _0x3e78eb, _0x11240e + "[k[i]]")('}');
            } else {
              if (_0xd6fc15.repeated) {
                _0x54f974("if(!Array.isArray(%s))", _0x11240e)('return%j', _0xd6fc15.name + ": " + _0xf38f(0xdfa) + (_0xd6fc15.repeated && "array" !== _0xf38f(0xdfa) ? '[]' : _0xd6fc15.map && true ? "{k:" + _0xd6fc15.keyType + '}' : '') + " expected")("for(var i=0;i<%s.length;++i){", _0x11240e);
                _0x38ea8d(_0x54f974, _0xd6fc15, _0x3e78eb, _0x11240e + '[i]')('}');
              } else {
                if (_0xd6fc15.partOf) {
                  var _0x23e5f6 = _0xdb4e33.safeProp(_0xd6fc15.partOf.name);
                  if (0x1 === _0x5a21f0[_0xd6fc15.partOf.name]) {
                    _0x54f974("if(p%s===1)", _0x23e5f6)("return%j", _0xd6fc15.partOf.name + ": multiple values");
                  }
                  _0x5a21f0[_0xd6fc15.partOf.name] = 0x1;
                  _0x54f974('p%s=1', _0x23e5f6);
                }
                _0x38ea8d(_0x54f974, _0xd6fc15, _0x3e78eb, _0x11240e);
              }
            }
            if (_0xd6fc15.optional) {
              _0x54f974('}');
            }
          }
          return _0x54f974("return null");
        };
        var _0x192191 = _0x14cdd1('./enum');
        var _0xdb4e33 = _0x14cdd1("./util");
        function _0x38ea8d(_0x19e5c0, _0x1a45b0, _0x352838, _0x1de584) {
          if (_0x1a45b0.resolvedType) {
            if (_0x1a45b0.resolvedType instanceof _0x192191) {
              _0x19e5c0("switch(%s){", _0x1de584)('default:')("return%j", _0x1a45b0.name + ": " + _0xf38f(0x862) + (_0x1a45b0.repeated && "array" !== _0xf38f(0x862) ? '[]' : _0x1a45b0.map && true ? "{k:" + _0x1a45b0.keyType + '}' : '') + " expected");
              var _0x441fd3 = Object.keys(_0x1a45b0.resolvedType.values);
              for (var _0x36b37c = 0x0; _0x36b37c < _0x441fd3.length; ++_0x36b37c) {
                _0x19e5c0("case %i:", _0x1a45b0.resolvedType.values[_0x441fd3[_0x36b37c]]);
              }
              _0x19e5c0("break")('}');
            } else {
              _0x19e5c0('{')("var e=types[%i].verify(%s);", _0x352838, _0x1de584)("if(e)")("return%j+e", _0x1a45b0.name + '.')('}');
            }
          } else {
            switch (_0x1a45b0.type) {
              case 'int32':
              case 'uint32':
              case "sint32":
              case 'fixed32':
              case 'sfixed32':
                _0x19e5c0("if(!util.isInteger(%s))", _0x1de584)("return%j", _0x1a45b0.name + ": " + _0xf38f(0x706) + (_0x1a45b0.repeated && "array" !== _0xf38f(0x706) ? '[]' : _0x1a45b0.map && true ? "{k:" + _0x1a45b0.keyType + '}' : '') + " expected");
                break;
              case "int64":
              case 'uint64':
              case 'sint64':
              case "fixed64":
              case 'sfixed64':
                _0x19e5c0("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", _0x1de584, _0x1de584, _0x1de584, _0x1de584)("return%j", _0x1a45b0.name + ": " + 'integer|Long' + (_0x1a45b0.repeated && true ? '[]' : _0x1a45b0.map && true ? "{k:" + _0x1a45b0.keyType + '}' : '') + " expected");
                break;
              case "float":
              case "double":
                _0x19e5c0("if(typeof %s!==\"number\")", _0x1de584)("return%j", _0x1a45b0.name + ": " + 'number' + (_0x1a45b0.repeated && true ? '[]' : _0x1a45b0.map && true ? "{k:" + _0x1a45b0.keyType + '}' : '') + " expected");
                break;
              case "bool":
                _0x19e5c0("if(typeof %s!==\"boolean\")", _0x1de584)("return%j", _0x1a45b0.name + ": " + _0xf38f(0x39b) + (_0x1a45b0.repeated && "array" !== _0xf38f(0x39b) ? '[]' : _0x1a45b0.map && true ? "{k:" + _0x1a45b0.keyType + '}' : '') + " expected");
                break;
              case "string":
                _0x19e5c0('if(!util.isString(%s))', _0x1de584)("return%j", _0x1a45b0.name + ": " + _0xf38f(0xb14) + (_0x1a45b0.repeated && "array" !== _0xf38f(0xb14) ? '[]' : _0x1a45b0.map && true ? "{k:" + _0x1a45b0.keyType + '}' : '') + " expected");
                break;
              case "bytes":
                _0x19e5c0("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", _0x1de584, _0x1de584, _0x1de584)("return%j", _0x1a45b0.name + ": " + _0xf38f(0x374) + (_0x1a45b0.repeated && "array" !== _0xf38f(0x374) ? '[]' : _0x1a45b0.map && true ? "{k:" + _0x1a45b0.keyType + '}' : '') + " expected");
            }
          }
          return _0x19e5c0;
        }
        function _0x56ad24(_0x607ed, _0x530ec4, _0x33cad7) {
          switch (_0x530ec4.keyType) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
              _0x607ed("if(!util.key32Re.test(%s))", _0x33cad7)("return%j", _0x530ec4.name + ": " + _0xf38f(0xe0d) + (_0x530ec4.repeated && "array" !== _0xf38f(0xe0d) ? '[]' : _0x530ec4.map && true ? "{k:" + _0x530ec4.keyType + '}' : '') + " expected");
              break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case 'sfixed64':
              _0x607ed("if(!util.key64Re.test(%s))", _0x33cad7)("return%j", _0x530ec4.name + ": " + _0xf38f(0xe27) + (_0x530ec4.repeated && "array" !== _0xf38f(0xe27) ? '[]' : _0x530ec4.map && true ? "{k:" + _0x530ec4.keyType + '}' : '') + " expected");
              break;
            case "bool":
              _0x607ed("if(!util.key2Re.test(%s))", _0x33cad7)("return%j", _0x530ec4.name + ": " + _0xf38f(0xe91) + (_0x530ec4.repeated && "array" !== _0xf38f(0xe91) ? '[]' : _0x530ec4.map && true ? "{k:" + _0x530ec4.keyType + '}' : '') + " expected");
          }
          return _0x607ed;
        }
        _0x1e6583.exports;
      }, function () {
        return {
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './util': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util.js'
        };
      });
      _0x2f4fd2.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/converter.js', function (_0x4cf677, _0x500f7c, _0x4327eb, _0x372cae, _0x42eea8) {
        var _0x2a8c1e = _0x500f7c("./enum");
        var _0x5f075e = _0x500f7c('./util');
        function _0x4f6b81(_0x1c220c, _0x174dba, _0x28055a, _0x3a0f6a) {
          if (_0x174dba.resolvedType) {
            if (_0x174dba.resolvedType instanceof _0x2a8c1e) {
              _0x1c220c("switch(d%s){", _0x3a0f6a);
              var _0x431ec7 = _0x174dba.resolvedType.values;
              var _0x59f460 = Object.keys(_0x431ec7);
              for (var _0x40644c = 0x0; _0x40644c < _0x59f460.length; ++_0x40644c) {
                if (_0x174dba.repeated && _0x431ec7[_0x59f460[_0x40644c]] === _0x174dba.typeDefault) {
                  _0x1c220c("default:");
                }
                _0x1c220c("case%j:", _0x59f460[_0x40644c])("case %i:", _0x431ec7[_0x59f460[_0x40644c]])('m%s=%j', _0x3a0f6a, _0x431ec7[_0x59f460[_0x40644c]])("break");
              }
              _0x1c220c('}');
            } else {
              _0x1c220c("if(typeof d%s!==\"object\")", _0x3a0f6a)("throw TypeError(%j)", _0x174dba.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", _0x3a0f6a, _0x28055a, _0x3a0f6a);
            }
          } else {
            var _0x4d1d3a = false;
            switch (_0x174dba.type) {
              case 'double':
              case 'float':
                _0x1c220c("m%s=Number(d%s)", _0x3a0f6a, _0x3a0f6a);
                break;
              case "uint32":
              case 'fixed32':
                _0x1c220c("m%s=d%s>>>0", _0x3a0f6a, _0x3a0f6a);
                break;
              case "int32":
              case "sint32":
              case "sfixed32":
                _0x1c220c('m%s=d%s|0', _0x3a0f6a, _0x3a0f6a);
                break;
              case "uint64":
                _0x4d1d3a = true;
              case "int64":
              case 'sint64':
              case 'fixed64':
              case 'sfixed64':
                _0x1c220c("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", _0x3a0f6a, _0x3a0f6a, _0x4d1d3a)("else if(typeof d%s===\"string\")", _0x3a0f6a)("m%s=parseInt(d%s,10)", _0x3a0f6a, _0x3a0f6a)("else if(typeof d%s===\"number\")", _0x3a0f6a)('m%s=d%s', _0x3a0f6a, _0x3a0f6a)("else if(typeof d%s===\"object\")", _0x3a0f6a)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", _0x3a0f6a, _0x3a0f6a, _0x3a0f6a, _0x4d1d3a ? "true" : '');
                break;
              case 'bytes':
                _0x1c220c("if(typeof d%s===\"string\")", _0x3a0f6a)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", _0x3a0f6a, _0x3a0f6a, _0x3a0f6a)("else if(d%s.length)", _0x3a0f6a)('m%s=d%s', _0x3a0f6a, _0x3a0f6a);
                break;
              case "string":
                _0x1c220c("m%s=String(d%s)", _0x3a0f6a, _0x3a0f6a);
                break;
              case "bool":
                _0x1c220c("m%s=Boolean(d%s)", _0x3a0f6a, _0x3a0f6a);
            }
          }
          return _0x1c220c;
        }
        function _0x3e950a(_0x594b0c, _0x259466, _0x30504f, _0x2acc2b) {
          if (_0x259466.resolvedType) {
            if (_0x259466.resolvedType instanceof _0x2a8c1e) {
              _0x594b0c('d%s=o.enums===String?types[%i].values[m%s]:m%s', _0x2acc2b, _0x30504f, _0x2acc2b, _0x2acc2b);
            } else {
              _0x594b0c("d%s=types[%i].toObject(m%s,o)", _0x2acc2b, _0x30504f, _0x2acc2b);
            }
          } else {
            var _0x6776a = false;
            switch (_0x259466.type) {
              case "double":
              case "float":
                _0x594b0c("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", _0x2acc2b, _0x2acc2b, _0x2acc2b, _0x2acc2b);
                break;
              case "uint64":
                _0x6776a = true;
              case 'int64':
              case "sint64":
              case "fixed64":
              case "sfixed64":
                _0x594b0c("if(typeof m%s===\"number\")", _0x2acc2b)("d%s=o.longs===String?String(m%s):m%s", _0x2acc2b, _0x2acc2b, _0x2acc2b)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", _0x2acc2b, _0x2acc2b, _0x2acc2b, _0x2acc2b, _0x6776a ? "true" : '', _0x2acc2b);
                break;
              case "bytes":
                _0x594b0c("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", _0x2acc2b, _0x2acc2b, _0x2acc2b, _0x2acc2b, _0x2acc2b);
                break;
              default:
                _0x594b0c("d%s=m%s", _0x2acc2b, _0x2acc2b);
            }
          }
          return _0x594b0c;
        }
        _0x4cf677.fromObject = function (_0x48105d) {
          var _0x38592d = _0x48105d.fieldsArray;
          var _0x1d23b1 = _0x5f075e.codegen(['d'], _0x48105d.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
          if (!_0x38592d.length) {
            return _0x1d23b1("return new this.ctor");
          }
          _0x1d23b1("var m=new this.ctor");
          for (var _0x3a0356 = 0x0; _0x3a0356 < _0x38592d.length; ++_0x3a0356) {
            var _0x174050 = _0x38592d[_0x3a0356].resolve();
            var _0x333742 = _0x5f075e.safeProp(_0x174050.name);
            if (_0x174050.map) {
              _0x1d23b1('if(d%s){', _0x333742)("if(typeof d%s!==\"object\")", _0x333742)("throw TypeError(%j)", _0x174050.fullName + ": object expected")("m%s={}", _0x333742)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", _0x333742);
              _0x4f6b81(_0x1d23b1, _0x174050, _0x3a0356, _0x333742 + "[ks[i]]")('}')('}');
            } else if (_0x174050.repeated) {
              _0x1d23b1("if(d%s){", _0x333742)("if(!Array.isArray(d%s))", _0x333742)("throw TypeError(%j)", _0x174050.fullName + ": array expected")("m%s=[]", _0x333742)("for(var i=0;i<d%s.length;++i){", _0x333742);
              _0x4f6b81(_0x1d23b1, _0x174050, _0x3a0356, _0x333742 + '[i]')('}')('}');
            } else {
              if (!(_0x174050.resolvedType instanceof _0x2a8c1e)) {
                _0x1d23b1("if(d%s!=null){", _0x333742);
              }
              _0x4f6b81(_0x1d23b1, _0x174050, _0x3a0356, _0x333742);
              if (!(_0x174050.resolvedType instanceof _0x2a8c1e)) {
                _0x1d23b1('}');
              }
            }
          }
          return _0x1d23b1("return m");
        };
        _0x4cf677.toObject = function (_0x3bee7b) {
          var _0x386b10 = _0x3bee7b.fieldsArray.slice().sort(_0x5f075e.compareFieldsById);
          if (!_0x386b10.length) {
            return _0x5f075e.codegen()("return {}");
          }
          var _0x47114c = _0x5f075e.codegen(['m', 'o'], _0x3bee7b.name + "$toObject")("if(!o)")("o={}")("var d={}");
          var _0x30d97c = [];
          var _0x16a235 = [];
          var _0x8ab4ca = [];
          for (var _0x5ddf03 = 0x0; _0x5ddf03 < _0x386b10.length; ++_0x5ddf03) {
            if (!_0x386b10[_0x5ddf03].partOf) {
              (_0x386b10[_0x5ddf03].resolve().repeated ? _0x30d97c : _0x386b10[_0x5ddf03].map ? _0x16a235 : _0x8ab4ca).push(_0x386b10[_0x5ddf03]);
            }
          }
          if (_0x30d97c.length) {
            _0x47114c("if(o.arrays||o.defaults){");
            for (_0x5ddf03 = 0x0; _0x5ddf03 < _0x30d97c.length; ++_0x5ddf03) {
              _0x47114c("d%s=[]", _0x5f075e.safeProp(_0x30d97c[_0x5ddf03].name));
            }
            _0x47114c('}');
          }
          if (_0x16a235.length) {
            _0x47114c("if(o.objects||o.defaults){");
            for (_0x5ddf03 = 0x0; _0x5ddf03 < _0x16a235.length; ++_0x5ddf03) {
              _0x47114c("d%s={}", _0x5f075e.safeProp(_0x16a235[_0x5ddf03].name));
            }
            _0x47114c('}');
          }
          if (_0x8ab4ca.length) {
            _0x47114c("if(o.defaults){");
            for (_0x5ddf03 = 0x0; _0x5ddf03 < _0x8ab4ca.length; ++_0x5ddf03) {
              var _0x574b31 = _0x8ab4ca[_0x5ddf03];
              var _0x3d3f4b = _0x5f075e.safeProp(_0x574b31.name);
              if (_0x574b31.resolvedType instanceof _0x2a8c1e) {
                _0x47114c("d%s=o.enums===String?%j:%j", _0x3d3f4b, _0x574b31.resolvedType.valuesById[_0x574b31.typeDefault], _0x574b31.typeDefault);
              } else {
                if (_0x574b31.long) {
                  _0x47114c("if(util.Long){")("var n=new util.Long(%i,%i,%j)", _0x574b31.typeDefault.low, _0x574b31.typeDefault.high, _0x574b31.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", _0x3d3f4b)("}else")("d%s=o.longs===String?%j:%i", _0x3d3f4b, _0x574b31.typeDefault.toString(), _0x574b31.typeDefault.toNumber());
                } else {
                  if (_0x574b31.bytes) {
                    var _0x39c52d = '[' + Array.prototype.slice.call(_0x574b31.typeDefault).join(',') + ']';
                    _0x47114c('if(o.bytes===String)d%s=%j', _0x3d3f4b, String.fromCharCode.apply(String, _0x574b31.typeDefault))("else{")("d%s=%s", _0x3d3f4b, _0x39c52d)('if(o.bytes!==Array)d%s=util.newBuffer(d%s)', _0x3d3f4b, _0x3d3f4b)('}');
                  } else {
                    _0x47114c('d%s=%j', _0x3d3f4b, _0x574b31.typeDefault);
                  }
                }
              }
            }
            _0x47114c('}');
          }
          var _0x225f9d = false;
          for (_0x5ddf03 = 0x0; _0x5ddf03 < _0x386b10.length; ++_0x5ddf03) {
            _0x574b31 = _0x386b10[_0x5ddf03];
            var _0x656995 = _0x3bee7b._fieldsArray.indexOf(_0x574b31);
            _0x3d3f4b = _0x5f075e.safeProp(_0x574b31.name);
            if (_0x574b31.map) {
              if (!_0x225f9d) {
                _0x225f9d = true;
                _0x47114c("var ks2");
              }
              _0x47114c("if(m%s&&(ks2=Object.keys(m%s)).length){", _0x3d3f4b, _0x3d3f4b)('d%s={}', _0x3d3f4b)("for(var j=0;j<ks2.length;++j){");
              _0x3e950a(_0x47114c, _0x574b31, _0x656995, _0x3d3f4b + "[ks2[j]]")('}');
            } else if (_0x574b31.repeated) {
              _0x47114c("if(m%s&&m%s.length){", _0x3d3f4b, _0x3d3f4b)('d%s=[]', _0x3d3f4b)("for(var j=0;j<m%s.length;++j){", _0x3d3f4b);
              _0x3e950a(_0x47114c, _0x574b31, _0x656995, _0x3d3f4b + "[j]")('}');
            } else {
              _0x47114c("if(m%s!=null&&m.hasOwnProperty(%j)){", _0x3d3f4b, _0x574b31.name);
              _0x3e950a(_0x47114c, _0x574b31, _0x656995, _0x3d3f4b);
              if (_0x574b31.partOf) {
                _0x47114c("if(o.oneofs)")("d%s=%j", _0x5f075e.safeProp(_0x574b31.partOf.name), _0x574b31.name);
              }
            }
            _0x47114c('}');
          }
          return _0x47114c("return d");
        };
        _0x4327eb.exports;
      }, function () {
        return {
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './util': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util.js'
        };
      });
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js", function (_0x1f99fb, _0x26901c, _0x52fc82, _0x4f49c8, _0x388de0) {
        var _0x33b576 = _0x26901c('./message');
        _0x1f99fb[".google.protobuf.Any"] = {
          'fromObject': function (_0x428d5d) {
            if (_0x428d5d && _0x428d5d['@type']) {
              var _0x2a6b3a = _0x428d5d["@type"].substring(_0x428d5d["@type"].lastIndexOf('/') + 0x1);
              var _0x7adc11 = this.lookup(_0x2a6b3a);
              if (_0x7adc11) {
                var _0x512d80 = '.' === _0x428d5d["@type"].charAt(0x0) ? _0x428d5d['@type'].substr(0x1) : _0x428d5d['@type'];
                if (-0x1 === _0x512d80.indexOf('/')) {
                  _0x512d80 = '/' + _0x512d80;
                }
                return this.create({
                  'type_url': _0x512d80,
                  'value': _0x7adc11.encode(_0x7adc11.fromObject(_0x428d5d)).finish()
                });
              }
            }
            return this.fromObject(_0x428d5d);
          },
          'toObject': function (_0xd784ea, _0x4cb62e) {
            var _0x2d9851 = '';
            var _0xa1e94f = '';
            if (_0x4cb62e && _0x4cb62e.json && _0xd784ea.type_url && _0xd784ea.value) {
              _0xa1e94f = _0xd784ea.type_url.substring(_0xd784ea.type_url.lastIndexOf('/') + 0x1);
              _0x2d9851 = _0xd784ea.type_url.substring(0x0, _0xd784ea.type_url.lastIndexOf('/') + 0x1);
              var _0x5b456d = this.lookup(_0xa1e94f);
              if (_0x5b456d) {
                _0xd784ea = _0x5b456d.decode(_0xd784ea.value);
              }
            }
            if (!(_0xd784ea instanceof this.ctor) && _0xd784ea instanceof _0x33b576) {
              var _0x46a7f2 = _0xd784ea.$type.toObject(_0xd784ea, _0x4cb62e);
              if ('' === _0x2d9851) {
                _0x2d9851 = 'type.googleapis.com/';
              }
              _0xa1e94f = _0x2d9851 + ('.' === _0xd784ea.$type.fullName[0x0] ? _0xd784ea.$type.fullName.substr(0x1) : _0xd784ea.$type.fullName);
              _0x46a7f2['@type'] = _0xa1e94f;
              return _0x46a7f2;
            }
            return this.toObject(_0xd784ea, _0x4cb62e);
          }
        };
        _0x52fc82.exports;
      }, function () {
        return {
          './message': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/message.js"
        };
      });
      _0x2f4fd2.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/type.js', function (_0x4f4733, _0x1bd9e1, _0xa3f498, _0x1add36, _0xdb2c2b) {
        _0xa3f498.exports = _0x154466;
        var _0x4d6390 = _0x1bd9e1("./namespace");
        ((_0x154466.prototype = Object.create(_0x4d6390.prototype)).constructor = _0x154466).className = "Type";
        var _0x54107a = _0x1bd9e1("./enum");
        var _0x155ddc = _0x1bd9e1("./oneof");
        var _0x253afb = _0x1bd9e1("./field");
        var _0x4a894a = _0x1bd9e1("./mapfield");
        var _0x539cfa = _0x1bd9e1("./service");
        var _0x5639bb = _0x1bd9e1("./message");
        var _0x1bc605 = _0x1bd9e1('./reader');
        var _0xb8c546 = _0x1bd9e1("./writer");
        var _0x7ada8 = _0x1bd9e1('./util');
        var _0x2f27d9 = _0x1bd9e1("./encoder");
        var _0x22c2bc = _0x1bd9e1("./decoder");
        var _0x17c3d2 = _0x1bd9e1("./verifier");
        var _0x3078cc = _0x1bd9e1('./converter');
        var _0x6de068 = _0x1bd9e1("./wrappers");
        function _0x154466(_0x5822a2, _0x4207db) {
          _0x4d6390.call(this, _0x5822a2, _0x4207db);
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
        function _0x36ef80(_0x57f92e) {
          _0x57f92e._fieldsById = _0x57f92e._fieldsArray = _0x57f92e._oneofsArray = null;
          delete _0x57f92e.encode;
          delete _0x57f92e.decode;
          delete _0x57f92e.verify;
          return _0x57f92e;
        }
        Object.defineProperties(_0x154466.prototype, {
          'fieldsById': {
            'get': function () {
              if (this._fieldsById) {
                return this._fieldsById;
              }
              this._fieldsById = {};
              var _0x140e9b = Object.keys(this.fields);
              for (var _0x516730 = 0x0; _0x516730 < _0x140e9b.length; ++_0x516730) {
                var _0x55ce1a = this.fields[_0x140e9b[_0x516730]];
                var _0x3b1c1f = _0x55ce1a.id;
                if (this._fieldsById[_0x3b1c1f]) {
                  throw Error("duplicate id " + _0x3b1c1f + " in " + this);
                }
                this._fieldsById[_0x3b1c1f] = _0x55ce1a;
              }
              return this._fieldsById;
            }
          },
          'fieldsArray': {
            'get': function () {
              return this._fieldsArray || (this._fieldsArray = _0x7ada8.toArray(this.fields));
            }
          },
          'oneofsArray': {
            'get': function () {
              return this._oneofsArray || (this._oneofsArray = _0x7ada8.toArray(this.oneofs));
            }
          },
          'ctor': {
            'get': function () {
              return this._ctor || (this.ctor = _0x154466.generateConstructor(this)());
            },
            'set': function (_0x198321) {
              var _0x5676d3 = _0x198321.prototype;
              if (!(_0x5676d3 instanceof _0x5639bb)) {
                (_0x198321.prototype = new _0x5639bb()).constructor = _0x198321;
                _0x7ada8.merge(_0x198321.prototype, _0x5676d3);
              }
              _0x198321.$type = _0x198321.prototype.$type = this;
              _0x7ada8.merge(_0x198321, _0x5639bb, true);
              this._ctor = _0x198321;
              for (var _0x2944ed = 0x0; _0x2944ed < this.fieldsArray.length; ++_0x2944ed) {
                this._fieldsArray[_0x2944ed].resolve();
              }
              var _0x29022e = {};
              for (_0x2944ed = 0x0; _0x2944ed < this.oneofsArray.length; ++_0x2944ed) {
                _0x29022e[this._oneofsArray[_0x2944ed].resolve().name] = {
                  'get': _0x7ada8.oneOfGetter(this._oneofsArray[_0x2944ed].oneof),
                  'set': _0x7ada8.oneOfSetter(this._oneofsArray[_0x2944ed].oneof)
                };
              }
              if (_0x2944ed) {
                Object.defineProperties(_0x198321.prototype, _0x29022e);
              }
            }
          }
        });
        _0x154466.generateConstructor = function (_0x4932f5) {
          var _0x2c29c7;
          var _0x4ad521 = _0x7ada8.codegen(['p'], _0x4932f5.name);
          for (var _0x29841f = 0x0; _0x29841f < _0x4932f5.fieldsArray.length; ++_0x29841f) {
            if ((_0x2c29c7 = _0x4932f5._fieldsArray[_0x29841f]).map) {
              _0x4ad521("this%s={}", _0x7ada8.safeProp(_0x2c29c7.name));
            } else if (_0x2c29c7.repeated) {
              _0x4ad521('this%s=[]', _0x7ada8.safeProp(_0x2c29c7.name));
            }
          }
          return _0x4ad521("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
        };
        _0x154466.fromJSON = function (_0x3d511b, _0x5da1ef) {
          var _0x3a8649 = new _0x154466(_0x3d511b, _0x5da1ef.options);
          _0x3a8649.extensions = _0x5da1ef.extensions;
          _0x3a8649.reserved = _0x5da1ef.reserved;
          var _0xaf52ae = Object.keys(_0x5da1ef.fields);
          for (var _0x384dde = 0x0; _0x384dde < _0xaf52ae.length; ++_0x384dde) {
            _0x3a8649.add((undefined !== _0x5da1ef.fields[_0xaf52ae[_0x384dde]].keyType ? _0x4a894a.fromJSON : _0x253afb.fromJSON)(_0xaf52ae[_0x384dde], _0x5da1ef.fields[_0xaf52ae[_0x384dde]]));
          }
          if (_0x5da1ef.oneofs) {
            _0xaf52ae = Object.keys(_0x5da1ef.oneofs);
            for (_0x384dde = 0x0; _0x384dde < _0xaf52ae.length; ++_0x384dde) {
              _0x3a8649.add(_0x155ddc.fromJSON(_0xaf52ae[_0x384dde], _0x5da1ef.oneofs[_0xaf52ae[_0x384dde]]));
            }
          }
          if (_0x5da1ef.nested) {
            _0xaf52ae = Object.keys(_0x5da1ef.nested);
            for (_0x384dde = 0x0; _0x384dde < _0xaf52ae.length; ++_0x384dde) {
              var _0x3e7202 = _0x5da1ef.nested[_0xaf52ae[_0x384dde]];
              _0x3a8649.add((undefined !== _0x3e7202.id ? _0x253afb.fromJSON : undefined !== _0x3e7202.fields ? _0x154466.fromJSON : undefined !== _0x3e7202.values ? _0x54107a.fromJSON : undefined !== _0x3e7202.methods ? _0x539cfa.fromJSON : _0x4d6390.fromJSON)(_0xaf52ae[_0x384dde], _0x3e7202));
            }
          }
          if (_0x5da1ef.extensions && _0x5da1ef.extensions.length) {
            _0x3a8649.extensions = _0x5da1ef.extensions;
          }
          if (_0x5da1ef.reserved && _0x5da1ef.reserved.length) {
            _0x3a8649.reserved = _0x5da1ef.reserved;
          }
          if (_0x5da1ef.group) {
            _0x3a8649.group = true;
          }
          if (_0x5da1ef.comment) {
            _0x3a8649.comment = _0x5da1ef.comment;
          }
          return _0x3a8649;
        };
        _0x154466.prototype.toJSON = function (_0x246a23) {
          var _0x173af1 = _0x4d6390.prototype.toJSON.call(this, _0x246a23);
          var _0x1b7304 = !!_0x246a23 && Boolean(_0x246a23.keepComments);
          return _0x7ada8.toObject(["options", _0x173af1 && _0x173af1.options || undefined, "oneofs", _0x4d6390.arrayToJSON(this.oneofsArray, _0x246a23), "fields", _0x4d6390.arrayToJSON(this.fieldsArray.filter(function (_0x2b116c) {
            return !_0x2b116c.declaringField;
          }), _0x246a23) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, 'nested', _0x173af1 && _0x173af1.nested || undefined, "comment", _0x1b7304 ? this.comment : undefined]);
        };
        _0x154466.prototype.resolveAll = function () {
          var _0x303227 = this.fieldsArray;
          for (var _0x50355e = 0x0; _0x50355e < _0x303227.length;) {
            _0x303227[_0x50355e++].resolve();
          }
          var _0x108bb1 = this.oneofsArray;
          for (_0x50355e = 0x0; _0x50355e < _0x108bb1.length;) {
            _0x108bb1[_0x50355e++].resolve();
          }
          return _0x4d6390.prototype.resolveAll.call(this);
        };
        _0x154466.prototype.get = function (_0x2e23d3) {
          return this.fields[_0x2e23d3] || this.oneofs && this.oneofs[_0x2e23d3] || this.nested && this.nested[_0x2e23d3] || null;
        };
        _0x154466.prototype.add = function (_0x56ab41) {
          if (this.get(_0x56ab41.name)) {
            throw Error("duplicate name '" + _0x56ab41.name + "' in " + this);
          }
          if (_0x56ab41 instanceof _0x253afb && undefined === _0x56ab41.extend) {
            if (this._fieldsById ? this._fieldsById[_0x56ab41.id] : this.fieldsById[_0x56ab41.id]) {
              throw Error("duplicate id " + _0x56ab41.id + " in " + this);
            }
            if (this.isReservedId(_0x56ab41.id)) {
              throw Error("id " + _0x56ab41.id + " is reserved in " + this);
            }
            if (this.isReservedName(_0x56ab41.name)) {
              throw Error("name '" + _0x56ab41.name + "' is reserved in " + this);
            }
            if (_0x56ab41.parent) {
              _0x56ab41.parent.remove(_0x56ab41);
            }
            this.fields[_0x56ab41.name] = _0x56ab41;
            _0x56ab41.message = this;
            _0x56ab41.onAdd(this);
            return _0x36ef80(this);
          }
          return _0x56ab41 instanceof _0x155ddc ? (this.oneofs || (this.oneofs = {}), this.oneofs[_0x56ab41.name] = _0x56ab41, _0x56ab41.onAdd(this), _0x36ef80(this)) : _0x4d6390.prototype.add.call(this, _0x56ab41);
        };
        _0x154466.prototype.remove = function (_0x3ff889) {
          if (_0x3ff889 instanceof _0x253afb && undefined === _0x3ff889.extend) {
            if (!this.fields || this.fields[_0x3ff889.name] !== _0x3ff889) {
              throw Error(_0x3ff889 + " is not a member of " + this);
            }
            delete this.fields[_0x3ff889.name];
            _0x3ff889.parent = null;
            _0x3ff889.onRemove(this);
            return _0x36ef80(this);
          }
          if (_0x3ff889 instanceof _0x155ddc) {
            if (!this.oneofs || this.oneofs[_0x3ff889.name] !== _0x3ff889) {
              throw Error(_0x3ff889 + " is not a member of " + this);
            }
            delete this.oneofs[_0x3ff889.name];
            _0x3ff889.parent = null;
            _0x3ff889.onRemove(this);
            return _0x36ef80(this);
          }
          return _0x4d6390.prototype.remove.call(this, _0x3ff889);
        };
        _0x154466.prototype.isReservedId = function (_0x16874a) {
          return _0x4d6390.isReservedId(this.reserved, _0x16874a);
        };
        _0x154466.prototype.isReservedName = function (_0x1119a6) {
          return _0x4d6390.isReservedName(this.reserved, _0x1119a6);
        };
        _0x154466.prototype.create = function (_0x215fcf) {
          return new this.ctor(_0x215fcf);
        };
        _0x154466.prototype.setup = function () {
          var _0x41c194 = this.fullName;
          var _0xbc5ad7 = [];
          for (var _0x26ccf3 = 0x0; _0x26ccf3 < this.fieldsArray.length; ++_0x26ccf3) {
            _0xbc5ad7.push(this._fieldsArray[_0x26ccf3].resolve().resolvedType);
          }
          this.encode = _0x2f27d9(this)({
            'Writer': _0xb8c546,
            'types': _0xbc5ad7,
            'util': _0x7ada8
          });
          this.decode = _0x22c2bc(this)({
            'Reader': _0x1bc605,
            'types': _0xbc5ad7,
            'util': _0x7ada8
          });
          this.verify = _0x17c3d2(this)({
            'types': _0xbc5ad7,
            'util': _0x7ada8
          });
          this.fromObject = _0x3078cc.fromObject(this)({
            'types': _0xbc5ad7,
            'util': _0x7ada8
          });
          this.toObject = _0x3078cc.toObject(this)({
            'types': _0xbc5ad7,
            'util': _0x7ada8
          });
          var _0x271fad = _0x6de068[_0x41c194];
          if (_0x271fad) {
            var _0x489715 = Object.create(this);
            _0x489715.fromObject = this.fromObject;
            this.fromObject = _0x271fad.fromObject.bind(_0x489715);
            _0x489715.toObject = this.toObject;
            this.toObject = _0x271fad.toObject.bind(_0x489715);
          }
          return this;
        };
        _0x154466.prototype.encode = function (_0x5e51d7, _0x15819b) {
          return this.setup().encode(_0x5e51d7, _0x15819b);
        };
        _0x154466.prototype.encodeDelimited = function (_0x51f81e, _0x4bf2b3) {
          return this.encode(_0x51f81e, _0x4bf2b3 && _0x4bf2b3.len ? _0x4bf2b3.fork() : _0x4bf2b3).ldelim();
        };
        _0x154466.prototype.decode = function (_0x50273e, _0x119b58) {
          return this.setup().decode(_0x50273e, _0x119b58);
        };
        _0x154466.prototype.decodeDelimited = function (_0x2ba59c) {
          if (!(_0x2ba59c instanceof _0x1bc605)) {
            _0x2ba59c = _0x1bc605.create(_0x2ba59c);
          }
          return this.decode(_0x2ba59c, _0x2ba59c.uint32());
        };
        _0x154466.prototype.verify = function (_0x1bfeb6) {
          return this.setup().verify(_0x1bfeb6);
        };
        _0x154466.prototype.fromObject = function (_0x2a115e) {
          return this.setup().fromObject(_0x2a115e);
        };
        _0x154466.prototype.toObject = function (_0x5a0893, _0x58d8e7) {
          return this.setup().toObject(_0x5a0893, _0x58d8e7);
        };
        _0x154466.d = function (_0x2681d5) {
          return function (_0x21dcdf) {
            _0x7ada8.decorateType(_0x21dcdf, _0x2681d5);
          };
        };
        _0xa3f498.exports;
      }, function () {
        return {
          './namespace': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js',
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './oneof': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js',
          './field': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './mapfield': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './service': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          './message': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          './reader': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './writer': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './util': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util.js',
          './encoder': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js",
          './decoder': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          './verifier': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          './converter': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/converter.js',
          './wrappers': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js"
        };
      });
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/root.js", function (_0x320b97, _0x289428, _0x414dd3, _0x4e657d, _0x53d0e7) {
        _0x414dd3.exports = _0x2cdeab;
        var _0xfd6155 = _0x289428('./namespace');
        ((_0x2cdeab.prototype = Object.create(_0xfd6155.prototype)).constructor = _0x2cdeab).className = 'Root';
        var _0x2f7b69;
        var _0x2a8608;
        var _0x26b998;
        var _0xe3c25e = _0x289428('./field');
        var _0x3bbfdd = _0x289428("./enum");
        var _0x36060e = _0x289428("./oneof");
        var _0x1357f4 = _0x289428('./util');
        function _0x2cdeab(_0x17d135) {
          _0xfd6155.call(this, '', _0x17d135);
          this.deferred = [];
          this.files = [];
        }
        function _0x20b18d() {}
        _0x2cdeab.fromJSON = function (_0xa40b5d, _0x22dc11) {
          if (!_0x22dc11) {
            _0x22dc11 = new _0x2cdeab();
          }
          if (_0xa40b5d.options) {
            _0x22dc11.setOptions(_0xa40b5d.options);
          }
          return _0x22dc11.addJSON(_0xa40b5d.nested);
        };
        _0x2cdeab.prototype.resolvePath = _0x1357f4.path.resolve;
        _0x2cdeab.prototype.fetch = _0x1357f4.fetch;
        _0x2cdeab.prototype.load = function _0x44b6ca(_0x570c93, _0x25ab1d, _0x4b5fd3) {
          if ("function" == typeof _0x25ab1d) {
            _0x4b5fd3 = _0x25ab1d;
            _0x25ab1d = undefined;
          }
          var _0x4fc16b = this;
          if (!_0x4b5fd3) {
            return _0x1357f4.asPromise(_0x44b6ca, _0x4fc16b, _0x570c93, _0x25ab1d);
          }
          var _0x22aebb = _0x4b5fd3 === _0x20b18d;
          function _0x361fac(_0x42f389, _0x1142e5) {
            if (_0x4b5fd3) {
              var _0xe98951 = _0x4b5fd3;
              _0x4b5fd3 = null;
              if (_0x22aebb) {
                throw _0x42f389;
              }
              _0xe98951(_0x42f389, _0x1142e5);
            }
          }
          function _0x1684ad(_0x314629) {
            var _0x565658 = _0x314629.lastIndexOf('google/protobuf/');
            if (_0x565658 > -0x1) {
              var _0xd7dd5f = _0x314629.substring(_0x565658);
              if (_0xd7dd5f in _0x26b998) {
                return _0xd7dd5f;
              }
            }
            return null;
          }
          function _0x53c602(_0x97cdfd, _0x53936c) {
            try {
              if (_0x1357f4.isString(_0x53936c) && '{' === _0x53936c.charAt(0x0)) {
                _0x53936c = JSON.parse(_0x53936c);
              }
              if (_0x1357f4.isString(_0x53936c)) {
                _0x2a8608.filename = _0x97cdfd;
                var _0x5342f2;
                var _0x1843fb = _0x2a8608(_0x53936c, _0x4fc16b, _0x25ab1d);
                var _0x54ee52 = 0x0;
                if (_0x1843fb.imports) {
                  for (; _0x54ee52 < _0x1843fb.imports.length; ++_0x54ee52) {
                    if (_0x5342f2 = _0x1684ad(_0x1843fb.imports[_0x54ee52]) || _0x4fc16b.resolvePath(_0x97cdfd, _0x1843fb.imports[_0x54ee52])) {
                      _0x2c939a(_0x5342f2);
                    }
                  }
                }
                if (_0x1843fb.weakImports) {
                  for (_0x54ee52 = 0x0; _0x54ee52 < _0x1843fb.weakImports.length; ++_0x54ee52) {
                    if (_0x5342f2 = _0x1684ad(_0x1843fb.weakImports[_0x54ee52]) || _0x4fc16b.resolvePath(_0x97cdfd, _0x1843fb.weakImports[_0x54ee52])) {
                      _0x2c939a(_0x5342f2, true);
                    }
                  }
                }
              } else {
                _0x4fc16b.setOptions(_0x53936c.options).addJSON(_0x53936c.nested);
              }
            } catch (_0x1ade51) {
              _0x361fac(_0x1ade51);
            }
            if (!(_0x22aebb || _0x1b1ada)) {
              _0x361fac(null, _0x4fc16b);
            }
          }
          function _0x2c939a(_0x67f0cb, _0x3c1bd9) {
            if (!(_0x4fc16b.files.indexOf(_0x67f0cb) > -0x1)) {
              _0x4fc16b.files.push(_0x67f0cb);
              if (_0x67f0cb in _0x26b998) {
                if (_0x22aebb) {
                  _0x53c602(_0x67f0cb, _0x26b998[_0x67f0cb]);
                } else {
                  ++_0x1b1ada;
                  setTimeout(function () {
                    --_0x1b1ada;
                    _0x53c602(_0x67f0cb, _0x26b998[_0x67f0cb]);
                  });
                }
              } else {
                if (_0x22aebb) {
                  var _0x2a7176;
                  try {
                    _0x2a7176 = _0x1357f4.fs.readFileSync(_0x67f0cb).toString("utf8");
                  } catch (_0x49ca94) {
                    return void (_0x3c1bd9 || _0x361fac(_0x49ca94));
                  }
                  _0x53c602(_0x67f0cb, _0x2a7176);
                } else {
                  ++_0x1b1ada;
                  _0x4fc16b.fetch(_0x67f0cb, function (_0x4e8048, _0x22a179) {
                    --_0x1b1ada;
                    if (_0x4b5fd3) {
                      if (_0x4e8048) {
                        if (_0x3c1bd9) {
                          if (!_0x1b1ada) {
                            _0x361fac(null, _0x4fc16b);
                          }
                        } else {
                          _0x361fac(_0x4e8048);
                        }
                      } else {
                        _0x53c602(_0x67f0cb, _0x22a179);
                      }
                    }
                  });
                }
              }
            }
          }
          var _0x1b1ada = 0x0;
          if (_0x1357f4.isString(_0x570c93)) {
            _0x570c93 = [_0x570c93];
          }
          var _0x3c4f37;
          for (var _0x5a7747 = 0x0; _0x5a7747 < _0x570c93.length; ++_0x5a7747) {
            if (_0x3c4f37 = _0x4fc16b.resolvePath('', _0x570c93[_0x5a7747])) {
              _0x2c939a(_0x3c4f37);
            }
          }
          if (_0x22aebb) {
            return _0x4fc16b;
          }
          if (!_0x1b1ada) {
            _0x361fac(null, _0x4fc16b);
          }
        };
        _0x2cdeab.prototype.loadSync = function (_0x54d73d, _0x5ab1f4) {
          if (!_0x1357f4.isNode) {
            throw Error("not supported");
          }
          return this.load(_0x54d73d, _0x5ab1f4, _0x20b18d);
        };
        _0x2cdeab.prototype.resolveAll = function () {
          if (this.deferred.length) {
            throw Error("unresolvable extensions: " + this.deferred.map(function (_0x2362ff) {
              return "'extend " + _0x2362ff.extend + "' in " + _0x2362ff.parent.fullName;
            }).join(", "));
          }
          return _0xfd6155.prototype.resolveAll.call(this);
        };
        var _0x4c36d4 = /^[A-Z]/;
        function _0x5465e7(_0x3d33f4, _0xac073e) {
          var _0xa1d360 = _0xac073e.parent.lookup(_0xac073e.extend);
          if (_0xa1d360) {
            var _0x19bc5d = new _0xe3c25e(_0xac073e.fullName, _0xac073e.id, _0xac073e.type, _0xac073e.rule, undefined, _0xac073e.options);
            _0x19bc5d.declaringField = _0xac073e;
            _0xac073e.extensionField = _0x19bc5d;
            _0xa1d360.add(_0x19bc5d);
            return true;
          }
          return false;
        }
        _0x2cdeab.prototype._handleAdd = function (_0x519bb6) {
          if (_0x519bb6 instanceof _0xe3c25e) {
            if (!(undefined === _0x519bb6.extend || _0x519bb6.extensionField || _0x5465e7(0x0, _0x519bb6))) {
              this.deferred.push(_0x519bb6);
            }
          } else {
            if (_0x519bb6 instanceof _0x3bbfdd) {
              if (_0x4c36d4.test(_0x519bb6.name)) {
                _0x519bb6.parent[_0x519bb6.name] = _0x519bb6.values;
              }
            } else {
              if (!(_0x519bb6 instanceof _0x36060e)) {
                if (_0x519bb6 instanceof _0x2f7b69) {
                  for (var _0x2584e6 = 0x0; _0x2584e6 < this.deferred.length;) {
                    if (_0x5465e7(0x0, this.deferred[_0x2584e6])) {
                      this.deferred.splice(_0x2584e6, 0x1);
                    } else {
                      ++_0x2584e6;
                    }
                  }
                }
                for (var _0x27edbd = 0x0; _0x27edbd < _0x519bb6.nestedArray.length; ++_0x27edbd) {
                  this._handleAdd(_0x519bb6._nestedArray[_0x27edbd]);
                }
                if (_0x4c36d4.test(_0x519bb6.name)) {
                  _0x519bb6.parent[_0x519bb6.name] = _0x519bb6;
                }
              }
            }
          }
        };
        _0x2cdeab.prototype._handleRemove = function (_0x4d4ccf) {
          if (_0x4d4ccf instanceof _0xe3c25e) {
            if (undefined !== _0x4d4ccf.extend) {
              if (_0x4d4ccf.extensionField) {
                _0x4d4ccf.extensionField.parent.remove(_0x4d4ccf.extensionField);
                _0x4d4ccf.extensionField = null;
              } else {
                var _0x290016 = this.deferred.indexOf(_0x4d4ccf);
                if (_0x290016 > -0x1) {
                  this.deferred.splice(_0x290016, 0x1);
                }
              }
            }
          } else {
            if (_0x4d4ccf instanceof _0x3bbfdd) {
              if (_0x4c36d4.test(_0x4d4ccf.name)) {
                delete _0x4d4ccf.parent[_0x4d4ccf.name];
              }
            } else {
              if (_0x4d4ccf instanceof _0xfd6155) {
                for (var _0x25384f = 0x0; _0x25384f < _0x4d4ccf.nestedArray.length; ++_0x25384f) {
                  this._handleRemove(_0x4d4ccf._nestedArray[_0x25384f]);
                }
                if (_0x4c36d4.test(_0x4d4ccf.name)) {
                  delete _0x4d4ccf.parent[_0x4d4ccf.name];
                }
              }
            }
          }
        };
        _0x2cdeab._configure = function (_0x51f97d, _0x4fe6ca, _0x1d2d79) {
          _0x2f7b69 = _0x51f97d;
          _0x2a8608 = _0x4fe6ca;
          _0x26b998 = _0x1d2d79;
        };
        _0x414dd3.exports;
      }, function () {
        return {
          './namespace': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js',
          './field': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './oneof': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js',
          './util': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util.js'
        };
      });
      _0x2f4fd2.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util.js', function (_0x42aaea, _0x3ae01f, _0x5c1828, _0x1f444, _0x1a7426) {
        var _0x1c7391;
        var _0x338de4;
        var _0x598c48 = _0x5c1828.exports = _0x3ae01f("./util/minimal");
        var _0x1b2959 = _0x3ae01f("./roots");
        _0x598c48.codegen = _0x3ae01f("@protobufjs/codegen");
        _0x598c48.fetch = _0x3ae01f("@protobufjs/fetch");
        _0x598c48.path = _0x3ae01f("@protobufjs/path");
        _0x598c48.fs = _0x598c48.inquire('fs');
        _0x598c48.toArray = function (_0x9e6f48) {
          if (_0x9e6f48) {
            var _0x41ea54 = Object.keys(_0x9e6f48);
            var _0x2cc3af = new Array(_0x41ea54.length);
            for (var _0x21d161 = 0x0; _0x21d161 < _0x41ea54.length;) {
              _0x2cc3af[_0x21d161] = _0x9e6f48[_0x41ea54[_0x21d161++]];
            }
            return _0x2cc3af;
          }
          return [];
        };
        _0x598c48.toObject = function (_0x43282e) {
          var _0x52b436 = {};
          for (var _0x5eaf28 = 0x0; _0x5eaf28 < _0x43282e.length;) {
            var _0x2bca00 = _0x43282e[_0x5eaf28++];
            var _0x476972 = _0x43282e[_0x5eaf28++];
            if (undefined !== _0x476972) {
              _0x52b436[_0x2bca00] = _0x476972;
            }
          }
          return _0x52b436;
        };
        var _0x251e53 = /\\/g;
        var _0x573a34 = /"/g;
        _0x598c48.isReserved = function (_0x34c123) {
          return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(_0x34c123);
        };
        _0x598c48.safeProp = function (_0x265341) {
          return !/^[$\w_]+$/.test(_0x265341) || _0x598c48.isReserved(_0x265341) ? "[\"" + _0x265341.replace(_0x251e53, "\\\\").replace(_0x573a34, "\\\"") + "\"]" : '.' + _0x265341;
        };
        _0x598c48.ucFirst = function (_0x361c5a) {
          return _0x361c5a.charAt(0x0).toUpperCase() + _0x361c5a.substring(0x1);
        };
        var _0x184c7c = /_([a-z])/g;
        _0x598c48.camelCase = function (_0x2ead04) {
          return _0x2ead04.substring(0x0, 0x1) + _0x2ead04.substring(0x1).replace(_0x184c7c, function (_0x574ae4, _0x57576c) {
            return _0x57576c.toUpperCase();
          });
        };
        _0x598c48.compareFieldsById = function (_0x2e0ef7, _0x384fd0) {
          return _0x2e0ef7.id - _0x384fd0.id;
        };
        _0x598c48.decorateType = function (_0x201c12, _0x3d952c) {
          if (_0x201c12.$type) {
            if (_0x3d952c && _0x201c12.$type.name !== _0x3d952c) {
              _0x598c48.decorateRoot.remove(_0x201c12.$type);
              _0x201c12.$type.name = _0x3d952c;
              _0x598c48.decorateRoot.add(_0x201c12.$type);
            }
            return _0x201c12.$type;
          }
          if (!_0x1c7391) {
            _0x1c7391 = _0x3ae01f('./type');
          }
          var _0x29a267 = new _0x1c7391(_0x3d952c || _0x201c12.name);
          _0x598c48.decorateRoot.add(_0x29a267);
          _0x29a267.ctor = _0x201c12;
          Object.defineProperty(_0x201c12, "$type", {
            'value': _0x29a267,
            'enumerable': false
          });
          Object.defineProperty(_0x201c12.prototype, "$type", {
            'value': _0x29a267,
            'enumerable': false
          });
          return _0x29a267;
        };
        var _0x1042df = 0x0;
        _0x598c48.decorateEnum = function (_0x5b7fa8) {
          if (_0x5b7fa8.$type) {
            return _0x5b7fa8.$type;
          }
          if (!_0x338de4) {
            _0x338de4 = _0x3ae01f('./enum');
          }
          var _0x12105b = new _0x338de4('Enum' + _0x1042df++, _0x5b7fa8);
          _0x598c48.decorateRoot.add(_0x12105b);
          Object.defineProperty(_0x5b7fa8, '$type', {
            'value': _0x12105b,
            'enumerable': false
          });
          return _0x12105b;
        };
        _0x598c48.setProperty = function (_0x44ce12, _0x2748c4, _0x2fe647) {
          if ("object" != typeof _0x44ce12) {
            throw TypeError("dst must be an object");
          }
          if (!_0x2748c4) {
            throw TypeError("path must be specified");
          }
          return function _0x24ded1(_0x492f6c, _0x3cc145, _0x2f9bd1) {
            var _0x68a811 = _0x3cc145.shift();
            if ("__proto__" === _0x68a811 || "prototype" === _0x68a811) {
              return _0x492f6c;
            }
            if (_0x3cc145.length > 0x0) {
              _0x492f6c[_0x68a811] = _0x24ded1(_0x492f6c[_0x68a811] || {}, _0x3cc145, _0x2f9bd1);
            } else {
              var _0x348878 = _0x492f6c[_0x68a811];
              if (_0x348878) {
                _0x2f9bd1 = [].concat(_0x348878).concat(_0x2f9bd1);
              }
              _0x492f6c[_0x68a811] = _0x2f9bd1;
            }
            return _0x492f6c;
          }(_0x44ce12, _0x2748c4 = _0x2748c4.split('.'), _0x2fe647);
        };
        Object.defineProperty(_0x598c48, "decorateRoot", {
          'get': function () {
            return _0x1b2959.decorated || (_0x1b2959.decorated = new (_0x3ae01f("./root"))());
          }
        });
        _0x5c1828.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          './roots': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/roots.js",
          '@protobufjs/codegen': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js',
          '@protobufjs/fetch': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js",
          '@protobufjs/path': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/@protobufjs/path/index.js',
          './type': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/type.js',
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './root': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/root.js"
        };
      });
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/object.js", function (_0x31cb65, _0x3cce0c, _0x35bdab, _0x344157, _0x539dd4) {
        _0x35bdab.exports = _0x10184d;
        _0x10184d.className = 'ReflectionObject';
        var _0x378894;
        var _0x262cdf = _0x3cce0c("./util");
        function _0x10184d(_0x1e82cd, _0x3a4813) {
          if (!_0x262cdf.isString(_0x1e82cd)) {
            throw TypeError("name must be a string");
          }
          if (_0x3a4813 && !_0x262cdf.isObject(_0x3a4813)) {
            throw TypeError("options must be an object");
          }
          this.options = _0x3a4813;
          this.parsedOptions = null;
          this.name = _0x1e82cd;
          this.parent = null;
          this.resolved = false;
          this.comment = null;
          this.filename = null;
        }
        Object.defineProperties(_0x10184d.prototype, {
          'root': {
            'get': function () {
              for (var _0x5d2e4a = this; null !== _0x5d2e4a.parent;) {
                _0x5d2e4a = _0x5d2e4a.parent;
              }
              return _0x5d2e4a;
            }
          },
          'fullName': {
            'get': function () {
              var _0x5f47f4 = [this.name];
              for (var _0x2c12dd = this.parent; _0x2c12dd;) {
                _0x5f47f4.unshift(_0x2c12dd.name);
                _0x2c12dd = _0x2c12dd.parent;
              }
              return _0x5f47f4.join('.');
            }
          }
        });
        _0x10184d.prototype.toJSON = function () {
          throw Error();
        };
        _0x10184d.prototype.onAdd = function (_0x18c698) {
          if (this.parent && this.parent !== _0x18c698) {
            this.parent.remove(this);
          }
          this.parent = _0x18c698;
          this.resolved = false;
          var _0x5d369b = _0x18c698.root;
          if (_0x5d369b instanceof _0x378894) {
            _0x5d369b._handleAdd(this);
          }
        };
        _0x10184d.prototype.onRemove = function (_0x4169d5) {
          var _0x11c3ce = _0x4169d5.root;
          if (_0x11c3ce instanceof _0x378894) {
            _0x11c3ce._handleRemove(this);
          }
          this.parent = null;
          this.resolved = false;
        };
        _0x10184d.prototype.resolve = function () {
          if (!this.resolved) {
            if (this.root instanceof _0x378894) {
              this.resolved = true;
            }
          }
          return this;
        };
        _0x10184d.prototype.getOption = function (_0x38066f) {
          if (this.options) {
            return this.options[_0x38066f];
          }
        };
        _0x10184d.prototype.setOption = function (_0x2a284b, _0xff1ae9, _0x59d69b) {
          if (!(_0x59d69b && this.options && undefined !== this.options[_0x2a284b])) {
            (this.options || (this.options = {}))[_0x2a284b] = _0xff1ae9;
          }
          return this;
        };
        _0x10184d.prototype.setParsedOption = function (_0x3bdaf5, _0x29e8ae, _0x55b22a) {
          if (!this.parsedOptions) {
            this.parsedOptions = [];
          }
          var _0x29f617 = this.parsedOptions;
          if (_0x55b22a) {
            var _0x737149 = _0x29f617.find(function (_0x1d29e9) {
              return Object.prototype.hasOwnProperty.call(_0x1d29e9, _0x3bdaf5);
            });
            if (_0x737149) {
              var _0x70d3b0 = _0x737149[_0x3bdaf5];
              _0x262cdf.setProperty(_0x70d3b0, _0x55b22a, _0x29e8ae);
            } else {
              (_0x737149 = {})[_0x3bdaf5] = _0x262cdf.setProperty({}, _0x55b22a, _0x29e8ae);
              _0x29f617.push(_0x737149);
            }
          } else {
            var _0x29767a = {
              _0x3bdaf5: _0x29e8ae
            };
            _0x29f617.push(_0x29767a);
          }
          return this;
        };
        _0x10184d.prototype.setOptions = function (_0x49aa67, _0x57fd03) {
          if (_0x49aa67) {
            var _0xa2209d = Object.keys(_0x49aa67);
            for (var _0x4a1603 = 0x0; _0x4a1603 < _0xa2209d.length; ++_0x4a1603) {
              this.setOption(_0xa2209d[_0x4a1603], _0x49aa67[_0xa2209d[_0x4a1603]], _0x57fd03);
            }
          }
          return this;
        };
        _0x10184d.prototype.toString = function () {
          var _0x22c180 = this.constructor.className;
          var _0x400396 = this.fullName;
          return _0x400396.length ? _0x22c180 + " " + _0x400396 : _0x22c180;
        };
        _0x10184d._configure = function (_0x2909f6) {
          _0x378894 = _0x2909f6;
        };
        _0x35bdab.exports;
      }, function () {
        return {
          './util': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util.js'
        };
      });
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/enum.js", function (_0x4b2ea6, _0x3f9575, _0xd1854b, _0x5172a0, _0x10315c) {
        _0xd1854b.exports = _0x95ea53;
        var _0x2ba85d = _0x3f9575("./object");
        ((_0x95ea53.prototype = Object.create(_0x2ba85d.prototype)).constructor = _0x95ea53).className = 'Enum';
        var _0x796f17 = _0x3f9575('./namespace');
        var _0x5ab7f6 = _0x3f9575('./util');
        function _0x95ea53(_0x21fc4a, _0x47da3b, _0x4ca124, _0x32c603, _0x5c262d) {
          _0x2ba85d.call(this, _0x21fc4a, _0x4ca124);
          if (_0x47da3b && "object" != typeof _0x47da3b) {
            throw TypeError("values must be an object");
          }
          this.valuesById = {};
          this.values = Object.create(this.valuesById);
          this.comment = _0x32c603;
          this.comments = _0x5c262d || {};
          this.reserved = undefined;
          if (_0x47da3b) {
            var _0x3f935b = Object.keys(_0x47da3b);
            for (var _0x22115e = 0x0; _0x22115e < _0x3f935b.length; ++_0x22115e) {
              if ('number' == typeof _0x47da3b[_0x3f935b[_0x22115e]]) {
                this.valuesById[this.values[_0x3f935b[_0x22115e]] = _0x47da3b[_0x3f935b[_0x22115e]]] = _0x3f935b[_0x22115e];
              }
            }
          }
        }
        _0x95ea53.fromJSON = function (_0x3eb87e, _0x4d2cbd) {
          var _0x360a65 = new _0x95ea53(_0x3eb87e, _0x4d2cbd.values, _0x4d2cbd.options, _0x4d2cbd.comment, _0x4d2cbd.comments);
          _0x360a65.reserved = _0x4d2cbd.reserved;
          return _0x360a65;
        };
        _0x95ea53.prototype.toJSON = function (_0x381be5) {
          var _0x116eb5 = !!_0x381be5 && Boolean(_0x381be5.keepComments);
          return _0x5ab7f6.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", _0x116eb5 ? this.comment : undefined, "comments", _0x116eb5 ? this.comments : undefined]);
        };
        _0x95ea53.prototype.add = function (_0x31d79d, _0x5aa0dc, _0x48d1a6) {
          if (!_0x5ab7f6.isString(_0x31d79d)) {
            throw TypeError("name must be a string");
          }
          if (!_0x5ab7f6.isInteger(_0x5aa0dc)) {
            throw TypeError("id must be an integer");
          }
          if (undefined !== this.values[_0x31d79d]) {
            throw Error("duplicate name '" + _0x31d79d + "' in " + this);
          }
          if (this.isReservedId(_0x5aa0dc)) {
            throw Error("id " + _0x5aa0dc + " is reserved in " + this);
          }
          if (this.isReservedName(_0x31d79d)) {
            throw Error("name '" + _0x31d79d + "' is reserved in " + this);
          }
          if (undefined !== this.valuesById[_0x5aa0dc]) {
            if (!this.options || !this.options.allow_alias) {
              throw Error("duplicate id " + _0x5aa0dc + " in " + this);
            }
            this.values[_0x31d79d] = _0x5aa0dc;
          } else {
            this.valuesById[this.values[_0x31d79d] = _0x5aa0dc] = _0x31d79d;
          }
          this.comments[_0x31d79d] = _0x48d1a6 || null;
          return this;
        };
        _0x95ea53.prototype.remove = function (_0x59c477) {
          if (!_0x5ab7f6.isString(_0x59c477)) {
            throw TypeError("name must be a string");
          }
          var _0x8f0dd2 = this.values[_0x59c477];
          if (null == _0x8f0dd2) {
            throw Error("name '" + _0x59c477 + "' does not exist in " + this);
          }
          delete this.valuesById[_0x8f0dd2];
          delete this.values[_0x59c477];
          delete this.comments[_0x59c477];
          return this;
        };
        _0x95ea53.prototype.isReservedId = function (_0x13352b) {
          return _0x796f17.isReservedId(this.reserved, _0x13352b);
        };
        _0x95ea53.prototype.isReservedName = function (_0x2d916d) {
          return _0x796f17.isReservedName(this.reserved, _0x2d916d);
        };
        _0xd1854b.exports;
      }, function () {
        return {
          './object': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './namespace': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js',
          './util': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util.js'
        };
      });
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js", function (_0x14e5c1, _0x5899b8, _0x485a4f, _0xc886e, _0x152ebc) {
        _0x485a4f.exports = function (_0x18c1c1) {
          var _0x4c31b6;
          var _0x58f550 = _0x2bccce.codegen(['m', 'w'], _0x18c1c1.name + "$encode")("if(!w)")("w=Writer.create()");
          var _0x1ff27d = _0x18c1c1.fieldsArray.slice().sort(_0x2bccce.compareFieldsById);
          for (var _0x2788d8 = 0x0; _0x2788d8 < _0x1ff27d.length; ++_0x2788d8) {
            var _0x47428a = _0x1ff27d[_0x2788d8].resolve();
            var _0x2461e8 = _0x18c1c1._fieldsArray.indexOf(_0x47428a);
            var _0x56de02 = _0x47428a.resolvedType instanceof _0x474f76 ? 'int32' : _0x47428a.type;
            var _0x53f0d0 = _0x78c0fb.basic[_0x56de02];
            _0x4c31b6 = 'm' + _0x2bccce.safeProp(_0x47428a.name);
            if (_0x47428a.map) {
              _0x58f550("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", _0x4c31b6, _0x47428a.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", _0x4c31b6)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (_0x47428a.id << 0x3 | 0x2) >>> 0x0, 0x8 | _0x78c0fb.mapKey[_0x47428a.keyType], _0x47428a.keyType);
              if (undefined === _0x53f0d0) {
                _0x58f550('types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()', _0x2461e8, _0x4c31b6);
              } else {
                _0x58f550(".uint32(%i).%s(%s[ks[i]]).ldelim()", 0x10 | _0x53f0d0, _0x56de02, _0x4c31b6);
              }
              _0x58f550('}')('}');
            } else if (_0x47428a.repeated) {
              _0x58f550("if(%s!=null&&%s.length){", _0x4c31b6, _0x4c31b6);
              if (_0x47428a.packed && undefined !== _0x78c0fb.packed[_0x56de02]) {
                _0x58f550("w.uint32(%i).fork()", (_0x47428a.id << 0x3 | 0x2) >>> 0x0)("for(var i=0;i<%s.length;++i)", _0x4c31b6)("w.%s(%s[i])", _0x56de02, _0x4c31b6)('w.ldelim()');
              } else {
                _0x58f550("for(var i=0;i<%s.length;++i)", _0x4c31b6);
                if (undefined === _0x53f0d0) {
                  if (_0x47428a.resolvedType.group) {
                    _0x58f550("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0x2461e8, _0x4c31b6 + "[i]", (_0x47428a.id << 0x3 | 0x3) >>> 0x0, (_0x47428a.id << 0x3 | 0x4) >>> 0x0);
                  } else {
                    _0x58f550("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", _0x2461e8, _0x4c31b6 + "[i]", (_0x47428a.id << 0x3 | 0x2) >>> 0x0);
                  }
                } else {
                  _0x58f550("w.uint32(%i).%s(%s[i])", (_0x47428a.id << 0x3 | _0x53f0d0) >>> 0x0, _0x56de02, _0x4c31b6);
                }
              }
              _0x58f550('}');
            } else {
              if (_0x47428a.optional) {
                _0x58f550("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", _0x4c31b6, _0x47428a.name);
              }
              if (undefined === _0x53f0d0) {
                if (_0x47428a.resolvedType.group) {
                  _0x58f550("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0x2461e8, _0x4c31b6, (_0x47428a.id << 0x3 | 0x3) >>> 0x0, (_0x47428a.id << 0x3 | 0x4) >>> 0x0);
                } else {
                  _0x58f550("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", _0x2461e8, _0x4c31b6, (_0x47428a.id << 0x3 | 0x2) >>> 0x0);
                }
              } else {
                _0x58f550('w.uint32(%i).%s(%s)', (_0x47428a.id << 0x3 | _0x53f0d0) >>> 0x0, _0x56de02, _0x4c31b6);
              }
            }
          }
          return _0x58f550("return w");
        };
        var _0x474f76 = _0x5899b8("./enum");
        var _0x78c0fb = _0x5899b8("./types");
        var _0x2bccce = _0x5899b8('./util');
        _0x485a4f.exports;
      }, function () {
        return {
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util.js'
        };
      });
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js", function (_0x5255d8, _0x5ec192, _0xc2f5d3, _0x1c122c, _0x51dca2) {
        var _0x2c6690 = _0xc2f5d3.exports = _0x5ec192("./index-minimal");
        _0x2c6690.build = "light";
        _0x2c6690.load = function (_0x2373b4, _0x1a62b8, _0x45240e) {
          if ("function" == typeof _0x1a62b8) {
            _0x45240e = _0x1a62b8;
            _0x1a62b8 = new _0x2c6690.Root();
          } else if (!_0x1a62b8) {
            _0x1a62b8 = new _0x2c6690.Root();
          }
          return _0x1a62b8.load(_0x2373b4, _0x45240e);
        };
        _0x2c6690.loadSync = function (_0x389e01, _0x356a04) {
          if (!_0x356a04) {
            _0x356a04 = new _0x2c6690.Root();
          }
          return _0x356a04.loadSync(_0x389e01);
        };
        _0x2c6690.encoder = _0x5ec192("./encoder");
        _0x2c6690.decoder = _0x5ec192("./decoder");
        _0x2c6690.verifier = _0x5ec192("./verifier");
        _0x2c6690.converter = _0x5ec192("./converter");
        _0x2c6690.ReflectionObject = _0x5ec192("./object");
        _0x2c6690.Namespace = _0x5ec192("./namespace");
        _0x2c6690.Root = _0x5ec192('./root');
        _0x2c6690.Enum = _0x5ec192('./enum');
        _0x2c6690.Type = _0x5ec192("./type");
        _0x2c6690.Field = _0x5ec192('./field');
        _0x2c6690.OneOf = _0x5ec192('./oneof');
        _0x2c6690.MapField = _0x5ec192("./mapfield");
        _0x2c6690.Service = _0x5ec192("./service");
        _0x2c6690.Method = _0x5ec192("./method");
        _0x2c6690.Message = _0x5ec192('./message');
        _0x2c6690.wrappers = _0x5ec192("./wrappers");
        _0x2c6690.types = _0x5ec192("./types");
        _0x2c6690.util = _0x5ec192("./util");
        _0x2c6690.ReflectionObject._configure(_0x2c6690.Root);
        _0x2c6690.Namespace._configure(_0x2c6690.Type, _0x2c6690.Service, _0x2c6690.Enum);
        _0x2c6690.Root._configure(_0x2c6690.Type);
        _0x2c6690.Field._configure(_0x2c6690.Type);
        _0xc2f5d3.exports;
      }, function () {
        return {
          './index-minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js",
          './encoder': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js",
          './decoder': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          './verifier': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          './converter': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/converter.js',
          './object': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './namespace': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js',
          './root': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './type': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/type.js',
          './field': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './oneof': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js',
          './mapfield': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './service': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          './method': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/method.js',
          './message': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          './wrappers': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js",
          './types': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util.js'
        };
      });
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js", function (_0x18038c, _0x52a018, _0x231895, _0x1ff54c, _0x510624) {
        _0x231895.exports = _0x22e36f;
        var _0xcf00e2 = /[\s{}=;:[\],'"()<>]/g;
        var _0x50ffa9 = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
        var _0x4abe8c = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
        var _0x4fb994 = /^ *[*/]+ */;
        var _0x2658e8 = /^\s*\*?\/*/;
        var _0x400fd1 = /\n/g;
        var _0x2d3f86 = /\s/;
        var _0x12f7d5 = /\\(.?)/g;
        var _0x452a66 = {
          0x0: "\0",
          'r': "\r",
          'n': "\n",
          't': "\t"
        };
        function _0x121bb0(_0x967c32) {
          return _0x967c32.replace(_0x12f7d5, function (_0x2bd5b8, _0x570bba) {
            switch (_0x570bba) {
              case "\\":
              case '':
                return _0x570bba;
              default:
                return _0x452a66[_0x570bba] || '';
            }
          });
        }
        function _0x22e36f(_0x426834, _0x36cbe8) {
          _0x426834 = _0x426834.toString();
          var _0x4d9de8 = 0x0;
          var _0x3f4dec = _0x426834.length;
          var _0x7457cc = 0x1;
          var _0x3b3c8a = null;
          var _0x2c93ab = null;
          var _0x423c98 = 0x0;
          var _0x353f6c = false;
          var _0x4aac07 = false;
          var _0x20ec33 = [];
          var _0x460a59 = null;
          function _0x488b5b(_0x5d43cc, _0x5f5a1e, _0xf1554f) {
            _0x3b3c8a = _0x426834.charAt(_0x5d43cc++);
            _0x423c98 = _0x7457cc;
            _0x353f6c = false;
            _0x4aac07 = _0xf1554f;
            var _0xddfebb;
            var _0x39dfad = _0x5d43cc - (_0x36cbe8 ? 0x2 : 0x3);
            do {
              if (--_0x39dfad < 0x0 || "\n" === (_0xddfebb = _0x426834.charAt(_0x39dfad))) {
                _0x353f6c = true;
                break;
              }
            } while (" " === _0xddfebb || "\t" === _0xddfebb);
            var _0x4f9e81 = _0x426834.substring(_0x5d43cc, _0x5f5a1e).split(_0x400fd1);
            for (var _0x18b32e = 0x0; _0x18b32e < _0x4f9e81.length; ++_0x18b32e) {
              _0x4f9e81[_0x18b32e] = _0x4f9e81[_0x18b32e].replace(_0x36cbe8 ? _0x2658e8 : _0x4fb994, '').trim();
            }
            _0x2c93ab = _0x4f9e81.join("\n").trim();
          }
          function _0x54afde(_0x5bb320) {
            var _0x4b6518 = _0x3576c5(_0x5bb320);
            var _0xfc9714 = _0x426834.substring(_0x5bb320, _0x4b6518);
            return /^\s*\/{1,2}/.test(_0xfc9714);
          }
          function _0x3576c5(_0x9bd308) {
            for (var _0x4b4670 = _0x9bd308; _0x4b4670 < _0x3f4dec && "\n" !== _0x426834.charAt(_0x4b4670);) {
              _0x4b4670++;
            }
            return _0x4b4670;
          }
          function _0x175f14() {
            if (_0x20ec33.length > 0x0) {
              return _0x20ec33.shift();
            }
            if (_0x460a59) {
              return function () {
                var _0x344975 = "'" === _0x460a59 ? _0x4abe8c : _0x50ffa9;
                _0x344975.lastIndex = _0x4d9de8 - 0x1;
                var _0x5eb5e3 = _0x344975.exec(_0x426834);
                if (!_0x5eb5e3) {
                  throw Error("illegal string (line " + _0x7457cc + ')');
                }
                _0x4d9de8 = _0x344975.lastIndex;
                _0x501bb6(_0x460a59);
                _0x460a59 = null;
                return _0x121bb0(_0x5eb5e3[0x1]);
              }();
            }
            var _0x320cf1;
            var _0x4d0e72;
            var _0x1cbe16;
            var _0x69485a;
            var _0xfcea5b;
            var _0x281576 = 0x0 === _0x4d9de8;
            do {
              if (_0x4d9de8 === _0x3f4dec) {
                return null;
              }
              for (_0x320cf1 = false; _0x2d3f86.test(_0x1cbe16 = _0x426834.charAt(_0x4d9de8));) {
                if ("\n" === _0x1cbe16) {
                  _0x281576 = true;
                  ++_0x7457cc;
                }
                if (++_0x4d9de8 === _0x3f4dec) {
                  return null;
                }
              }
              if ('/' === _0x426834.charAt(_0x4d9de8)) {
                if (++_0x4d9de8 === _0x3f4dec) {
                  throw Error("illegal comment (line " + _0x7457cc + ')');
                }
                if ('/' === _0x426834.charAt(_0x4d9de8)) {
                  if (_0x36cbe8) {
                    _0x69485a = _0x4d9de8;
                    _0xfcea5b = false;
                    if (_0x54afde(_0x4d9de8)) {
                      _0xfcea5b = true;
                      do {
                        if ((_0x4d9de8 = _0x3576c5(_0x4d9de8)) === _0x3f4dec) {
                          break;
                        }
                        _0x4d9de8++;
                      } while (_0x54afde(_0x4d9de8));
                    } else {
                      _0x4d9de8 = Math.min(_0x3f4dec, _0x3576c5(_0x4d9de8) + 0x1);
                    }
                    if (_0xfcea5b) {
                      _0x488b5b(_0x69485a, _0x4d9de8, _0x281576);
                    }
                    _0x7457cc++;
                    _0x320cf1 = true;
                  } else {
                    for (_0xfcea5b = '/' === _0x426834.charAt(_0x69485a = _0x4d9de8 + 0x1); "\n" !== _0x426834.charAt(++_0x4d9de8);) {
                      if (_0x4d9de8 === _0x3f4dec) {
                        return null;
                      }
                    }
                    ++_0x4d9de8;
                    if (_0xfcea5b) {
                      _0x488b5b(_0x69485a, _0x4d9de8 - 0x1, _0x281576);
                    }
                    ++_0x7457cc;
                    _0x320cf1 = true;
                  }
                } else {
                  if ('*' !== (_0x1cbe16 = _0x426834.charAt(_0x4d9de8))) {
                    return '/';
                  }
                  _0x69485a = _0x4d9de8 + 0x1;
                  _0xfcea5b = _0x36cbe8 || '*' === _0x426834.charAt(_0x69485a);
                  do {
                    if ("\n" === _0x1cbe16) {
                      ++_0x7457cc;
                    }
                    if (++_0x4d9de8 === _0x3f4dec) {
                      throw Error("illegal comment (line " + _0x7457cc + ')');
                    }
                    _0x4d0e72 = _0x1cbe16;
                    _0x1cbe16 = _0x426834.charAt(_0x4d9de8);
                  } while ('*' !== _0x4d0e72 || '/' !== _0x1cbe16);
                  ++_0x4d9de8;
                  if (_0xfcea5b) {
                    _0x488b5b(_0x69485a, _0x4d9de8 - 0x2, _0x281576);
                  }
                  _0x320cf1 = true;
                }
              }
            } while (_0x320cf1);
            var _0x4555b2 = _0x4d9de8;
            _0xcf00e2.lastIndex = 0x0;
            if (!_0xcf00e2.test(_0x426834.charAt(_0x4555b2++))) {
              for (; _0x4555b2 < _0x3f4dec && !_0xcf00e2.test(_0x426834.charAt(_0x4555b2));) {
                ++_0x4555b2;
              }
            }
            var _0x4c83aa = _0x426834.substring(_0x4d9de8, _0x4d9de8 = _0x4555b2);
            if (!("\"" !== _0x4c83aa && "'" !== _0x4c83aa)) {
              _0x460a59 = _0x4c83aa;
            }
            return _0x4c83aa;
          }
          function _0x501bb6(_0x43370a) {
            _0x20ec33.push(_0x43370a);
          }
          function _0x1e4c04() {
            if (!_0x20ec33.length) {
              var _0x450ebb = _0x175f14();
              if (null === _0x450ebb) {
                return null;
              }
              _0x501bb6(_0x450ebb);
            }
            return _0x20ec33[0x0];
          }
          return Object.defineProperty({
            'next': _0x175f14,
            'peek': _0x1e4c04,
            'push': _0x501bb6,
            'skip': function (_0x16001a, _0x44d8f2) {
              var _0x57adde = _0x1e4c04();
              if (_0x57adde === _0x16001a) {
                _0x175f14();
                return true;
              }
              if (!_0x44d8f2) {
                throw Error("illegal " + ("token '" + _0x57adde + "', '" + _0x16001a + "' expected") + " (line " + _0x7457cc + ')');
              }
              return false;
            },
            'cmnt': function (_0x320e6f) {
              var _0x20fab4 = null;
              if (undefined === _0x320e6f) {
                if (_0x423c98 === _0x7457cc - 0x1 && (_0x36cbe8 || '*' === _0x3b3c8a || _0x353f6c)) {
                  _0x20fab4 = _0x4aac07 ? _0x2c93ab : null;
                }
              } else {
                if (_0x423c98 < _0x320e6f) {
                  _0x1e4c04();
                }
                if (!(_0x423c98 !== _0x320e6f || _0x353f6c || !_0x36cbe8 && '/' !== _0x3b3c8a)) {
                  _0x20fab4 = _0x4aac07 ? null : _0x2c93ab;
                }
              }
              return _0x20fab4;
            }
          }, 'line', {
            'get': function () {
              return _0x7457cc;
            }
          });
        }
        _0x22e36f.unescape = _0x121bb0;
        _0x231895.exports;
      }, {});
      _0x2f4fd2.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/parse.js', function (_0x19ffa1, _0x33121a, _0xf2ff19, _0x2d5b48, _0x4481b1) {
        _0xf2ff19.exports = _0x538239;
        _0x538239.filename = null;
        _0x538239.defaults = {
          'keepCase': false
        };
        var _0x53c3ba = _0x33121a("./tokenize");
        var _0x578680 = _0x33121a('./root');
        var _0x6ca509 = _0x33121a('./type');
        var _0x2d972b = _0x33121a("./field");
        var _0x507ada = _0x33121a("./mapfield");
        var _0x1bc464 = _0x33121a("./oneof");
        var _0x1d4872 = _0x33121a("./enum");
        var _0x40f31a = _0x33121a("./service");
        var _0x1e4dcd = _0x33121a('./method');
        var _0x3b3fa0 = _0x33121a("./types");
        var _0x25966a = _0x33121a("./util");
        var _0x23c04c = /^[1-9][0-9]*$/;
        var _0x57f7a4 = /^-?[1-9][0-9]*$/;
        var _0x397def = /^0[x][0-9a-fA-F]+$/;
        var _0x888257 = /^-?0[x][0-9a-fA-F]+$/;
        var _0x513341 = /^0[0-7]+$/;
        var _0x50f4a5 = /^-?0[0-7]+$/;
        var _0x175d85 = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
        var _0x319e71 = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
        var _0x29584e = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
        var _0x527409 = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
        function _0x538239(_0x10e89c, _0x443299, _0x32878c) {
          if (!(_0x443299 instanceof _0x578680)) {
            _0x32878c = _0x443299;
            _0x443299 = new _0x578680();
          }
          if (!_0x32878c) {
            _0x32878c = _0x538239.defaults;
          }
          var _0x3f9dec;
          var _0x428788;
          var _0x271fc1;
          var _0x5b9fff;
          var _0x4d41e4;
          var _0x3bf08b = _0x32878c.preferTrailingComment || false;
          var _0x2c4c58 = _0x53c3ba(_0x10e89c, _0x32878c.alternateCommentMode || false);
          var _0x43b93d = _0x2c4c58.next;
          var _0x145042 = _0x2c4c58.push;
          var _0x4a6392 = _0x2c4c58.peek;
          var _0x1e35aa = _0x2c4c58.skip;
          var _0x3686c4 = _0x2c4c58.cmnt;
          var _0xb16bfc = true;
          var _0x16dac3 = false;
          var _0x68851f = _0x443299;
          var _0x676be0 = _0x32878c.keepCase ? function (_0x2ea4d1) {
            return _0x2ea4d1;
          } : _0x25966a.camelCase;
          function _0x51fdb5(_0x3cf88c, _0x343008, _0x324852) {
            var _0x3b64b5 = _0x538239.filename;
            if (!_0x324852) {
              _0x538239.filename = null;
            }
            return Error("illegal " + (_0x343008 || "token") + " '" + _0x3cf88c + "' (" + (_0x3b64b5 ? _0x3b64b5 + ", " : '') + "line " + _0x2c4c58.line + ')');
          }
          function _0x11aa97() {
            var _0x2e594e;
            var _0x527872 = [];
            do {
              if ("\"" !== (_0x2e594e = _0x43b93d()) && "'" !== _0x2e594e) {
                throw _0x51fdb5(_0x2e594e);
              }
              _0x527872.push(_0x43b93d());
              _0x1e35aa(_0x2e594e);
              _0x2e594e = _0x4a6392();
            } while ("\"" === _0x2e594e || "'" === _0x2e594e);
            return _0x527872.join('');
          }
          function _0xfffbbb(_0x56b978) {
            var _0x5f1661 = _0x43b93d();
            switch (_0x5f1661) {
              case "'":
              case "\"":
                _0x145042(_0x5f1661);
                return _0x11aa97();
              case "true":
              case "TRUE":
                return true;
              case "false":
              case "FALSE":
                return false;
            }
            try {
              return function (_0x117b5f, _0x37749a) {
                var _0x484e6a = 0x1;
                if ('-' === _0x117b5f.charAt(0x0)) {
                  _0x484e6a = -0x1;
                  _0x117b5f = _0x117b5f.substring(0x1);
                }
                switch (_0x117b5f) {
                  case "inf":
                  case "INF":
                  case 'Inf':
                    return _0x484e6a * Infinity;
                  case 'nan':
                  case "NAN":
                  case "Nan":
                  case "NaN":
                    return NaN;
                  case '0':
                    return 0x0;
                }
                if (_0x23c04c.test(_0x117b5f)) {
                  return _0x484e6a * parseInt(_0x117b5f, 0xa);
                }
                if (_0x397def.test(_0x117b5f)) {
                  return _0x484e6a * parseInt(_0x117b5f, 0x10);
                }
                if (_0x513341.test(_0x117b5f)) {
                  return _0x484e6a * parseInt(_0x117b5f, 0x8);
                }
                if (_0x175d85.test(_0x117b5f)) {
                  return _0x484e6a * parseFloat(_0x117b5f);
                }
                throw _0x51fdb5(_0x117b5f, "number", _0x37749a);
              }(_0x5f1661, true);
            } catch (_0x5a7460) {
              if (_0x56b978 && _0x29584e.test(_0x5f1661)) {
                return _0x5f1661;
              }
              throw _0x51fdb5(_0x5f1661, "value");
            }
          }
          function _0x14efbd(_0x313cd9, _0x4b91d5) {
            var _0xb05143;
            var _0x4590d4;
            do {
              if (!_0x4b91d5 || "\"" !== (_0xb05143 = _0x4a6392()) && "'" !== _0xb05143) {
                _0x313cd9.push([_0x4590d4 = _0x1d4d67(_0x43b93d()), _0x1e35aa('to', true) ? _0x1d4d67(_0x43b93d()) : _0x4590d4]);
              } else {
                _0x313cd9.push(_0x11aa97());
              }
            } while (_0x1e35aa(',', true));
            _0x1e35aa(';');
          }
          function _0x1d4d67(_0x14dadf, _0x56211e) {
            switch (_0x14dadf) {
              case "max":
              case 'MAX':
              case "Max":
                return 0x1fffffff;
              case '0':
                return 0x0;
            }
            if (!_0x56211e && '-' === _0x14dadf.charAt(0x0)) {
              throw _0x51fdb5(_0x14dadf, 'id');
            }
            if (_0x57f7a4.test(_0x14dadf)) {
              return parseInt(_0x14dadf, 0xa);
            }
            if (_0x888257.test(_0x14dadf)) {
              return parseInt(_0x14dadf, 0x10);
            }
            if (_0x50f4a5.test(_0x14dadf)) {
              return parseInt(_0x14dadf, 0x8);
            }
            throw _0x51fdb5(_0x14dadf, 'id');
          }
          function _0x246b70() {
            if (undefined !== _0x3f9dec) {
              throw _0x51fdb5("package");
            }
            _0x3f9dec = _0x43b93d();
            if (!_0x29584e.test(_0x3f9dec)) {
              throw _0x51fdb5(_0x3f9dec, "name");
            }
            _0x68851f = _0x68851f.define(_0x3f9dec);
            _0x1e35aa(';');
          }
          function _0xb5049() {
            var _0x272120;
            var _0x528dd1 = _0x4a6392();
            switch (_0x528dd1) {
              case "weak":
                _0x272120 = _0x271fc1 || (_0x271fc1 = []);
                _0x43b93d();
                break;
              case "public":
                _0x43b93d();
              default:
                _0x272120 = _0x428788 || (_0x428788 = []);
            }
            _0x528dd1 = _0x11aa97();
            _0x1e35aa(';');
            _0x272120.push(_0x528dd1);
          }
          function _0x49e9e2() {
            _0x1e35aa('=');
            _0x5b9fff = _0x11aa97();
            if (!(_0x16dac3 = "proto3" === _0x5b9fff) && "proto2" !== _0x5b9fff) {
              throw _0x51fdb5(_0x5b9fff, "syntax");
            }
            _0x1e35aa(';');
          }
          function _0x4563a8(_0x51b95d, _0x572e28) {
            switch (_0x572e28) {
              case "option":
                _0x73b35e(_0x51b95d, _0x572e28);
                _0x1e35aa(';');
                return true;
              case 'message':
                (function (_0x4ff609, _0x2b84da) {
                  if (!_0x319e71.test(_0x2b84da = _0x43b93d())) {
                    throw _0x51fdb5(_0x2b84da, "type name");
                  }
                  var _0x3b243a = new _0x6ca509(_0x2b84da);
                  _0x3cccde(_0x3b243a, function (_0x1d5dde) {
                    if (!_0x4563a8(_0x3b243a, _0x1d5dde)) {
                      switch (_0x1d5dde) {
                        case "map":
                          !function (_0x43866f) {
                            _0x1e35aa('<');
                            var _0x5498ea = _0x43b93d();
                            if (undefined === _0x3b3fa0.mapKey[_0x5498ea]) {
                              throw _0x51fdb5(_0x5498ea, "type");
                            }
                            _0x1e35aa(',');
                            var _0x573151 = _0x43b93d();
                            if (!_0x29584e.test(_0x573151)) {
                              throw _0x51fdb5(_0x573151, "type");
                            }
                            _0x1e35aa('>');
                            var _0x7da5f6 = _0x43b93d();
                            if (!_0x319e71.test(_0x7da5f6)) {
                              throw _0x51fdb5(_0x7da5f6, "name");
                            }
                            _0x1e35aa('=');
                            var _0xc7fdfa = new _0x507ada(_0x676be0(_0x7da5f6), _0x1d4d67(_0x43b93d()), _0x5498ea, _0x573151);
                            _0x3cccde(_0xc7fdfa, function (_0x40da12) {
                              if ('option' !== _0x40da12) {
                                throw _0x51fdb5(_0x40da12);
                              }
                              _0x73b35e(_0xc7fdfa, _0x40da12);
                              _0x1e35aa(';');
                            }, function () {
                              _0x1c930f(_0xc7fdfa);
                            });
                            _0x43866f.add(_0xc7fdfa);
                          }(_0x3b243a);
                          break;
                        case "required":
                        case "repeated":
                          _0x2fcc58(_0x3b243a, _0x1d5dde);
                          break;
                        case "optional":
                          _0x2fcc58(_0x3b243a, _0x16dac3 ? "proto3_optional" : "optional");
                          break;
                        case "oneof":
                          !function (_0x217f83, _0x2fc3eb) {
                            if (!_0x319e71.test(_0x2fc3eb = _0x43b93d())) {
                              throw _0x51fdb5(_0x2fc3eb, "name");
                            }
                            var _0x157a57 = new _0x1bc464(_0x676be0(_0x2fc3eb));
                            _0x3cccde(_0x157a57, function (_0x54856a) {
                              if ("option" === _0x54856a) {
                                _0x73b35e(_0x157a57, _0x54856a);
                                _0x1e35aa(';');
                              } else {
                                _0x145042(_0x54856a);
                                _0x2fcc58(_0x157a57, 'optional');
                              }
                            });
                            _0x217f83.add(_0x157a57);
                          }(_0x3b243a, _0x1d5dde);
                          break;
                        case "extensions":
                          _0x14efbd(_0x3b243a.extensions || (_0x3b243a.extensions = []));
                          break;
                        case "reserved":
                          _0x14efbd(_0x3b243a.reserved || (_0x3b243a.reserved = []), true);
                          break;
                        default:
                          if (!_0x16dac3 || !_0x29584e.test(_0x1d5dde)) {
                            throw _0x51fdb5(_0x1d5dde);
                          }
                          _0x145042(_0x1d5dde);
                          _0x2fcc58(_0x3b243a, "optional");
                      }
                    }
                  });
                  _0x4ff609.add(_0x3b243a);
                })(_0x51b95d, _0x572e28);
                return true;
              case 'enum':
                (function (_0x4c8017, _0x1200fd) {
                  if (!_0x319e71.test(_0x1200fd = _0x43b93d())) {
                    throw _0x51fdb5(_0x1200fd, 'name');
                  }
                  var _0x2670ab = new _0x1d4872(_0x1200fd);
                  _0x3cccde(_0x2670ab, function (_0xc4e090) {
                    switch (_0xc4e090) {
                      case "option":
                        _0x73b35e(_0x2670ab, _0xc4e090);
                        _0x1e35aa(';');
                        break;
                      case "reserved":
                        _0x14efbd(_0x2670ab.reserved || (_0x2670ab.reserved = []), true);
                        break;
                      default:
                        !function (_0x186360, _0x205b4c) {
                          if (!_0x319e71.test(_0x205b4c)) {
                            throw _0x51fdb5(_0x205b4c, "name");
                          }
                          _0x1e35aa('=');
                          var _0x18ad1c = _0x1d4d67(_0x43b93d(), true);
                          var _0x5d6bb8 = {};
                          _0x3cccde(_0x5d6bb8, function (_0x148b04) {
                            if ('option' !== _0x148b04) {
                              throw _0x51fdb5(_0x148b04);
                            }
                            _0x73b35e(_0x5d6bb8, _0x148b04);
                            _0x1e35aa(';');
                          }, function () {
                            _0x1c930f(_0x5d6bb8);
                          });
                          _0x186360.add(_0x205b4c, _0x18ad1c, _0x5d6bb8.comment);
                        }(_0x2670ab, _0xc4e090);
                    }
                  });
                  _0x4c8017.add(_0x2670ab);
                })(_0x51b95d, _0x572e28);
                return true;
              case "service":
                (function (_0x129f2d, _0xc59c98) {
                  if (!_0x319e71.test(_0xc59c98 = _0x43b93d())) {
                    throw _0x51fdb5(_0xc59c98, "service name");
                  }
                  var _0x332fd5 = new _0x40f31a(_0xc59c98);
                  _0x3cccde(_0x332fd5, function (_0x3213ff) {
                    if (!_0x4563a8(_0x332fd5, _0x3213ff)) {
                      if ("rpc" !== _0x3213ff) {
                        throw _0x51fdb5(_0x3213ff);
                      }
                      !function (_0x57f22d, _0x46fc21) {
                        var _0x46e5f3 = _0x3686c4();
                        var _0x245284 = _0x46fc21;
                        if (!_0x319e71.test(_0x46fc21 = _0x43b93d())) {
                          throw _0x51fdb5(_0x46fc21, "name");
                        }
                        var _0x1e5946;
                        var _0x494397;
                        var _0x364446;
                        var _0xf5162e;
                        var _0x7b4260 = _0x46fc21;
                        _0x1e35aa('(');
                        if (_0x1e35aa("stream", true)) {
                          _0x494397 = true;
                        }
                        if (!_0x29584e.test(_0x46fc21 = _0x43b93d())) {
                          throw _0x51fdb5(_0x46fc21);
                        }
                        _0x1e5946 = _0x46fc21;
                        _0x1e35aa(')');
                        _0x1e35aa("returns");
                        _0x1e35aa('(');
                        if (_0x1e35aa("stream", true)) {
                          _0xf5162e = true;
                        }
                        if (!_0x29584e.test(_0x46fc21 = _0x43b93d())) {
                          throw _0x51fdb5(_0x46fc21);
                        }
                        _0x364446 = _0x46fc21;
                        _0x1e35aa(')');
                        var _0x1d09be = new _0x1e4dcd(_0x7b4260, _0x245284, _0x1e5946, _0x364446, _0x494397, _0xf5162e);
                        _0x1d09be.comment = _0x46e5f3;
                        _0x3cccde(_0x1d09be, function (_0x49c309) {
                          if ("option" !== _0x49c309) {
                            throw _0x51fdb5(_0x49c309);
                          }
                          _0x73b35e(_0x1d09be, _0x49c309);
                          _0x1e35aa(';');
                        });
                        _0x57f22d.add(_0x1d09be);
                      }(_0x332fd5, _0x3213ff);
                    }
                  });
                  _0x129f2d.add(_0x332fd5);
                })(_0x51b95d, _0x572e28);
                return true;
              case 'extend':
                (function (_0x39bf68, _0x15e159) {
                  if (!_0x29584e.test(_0x15e159 = _0x43b93d())) {
                    throw _0x51fdb5(_0x15e159, "reference");
                  }
                  var _0x3552d6 = _0x15e159;
                  _0x3cccde(null, function (_0x3315be) {
                    switch (_0x3315be) {
                      case 'required':
                      case "repeated":
                        _0x2fcc58(_0x39bf68, _0x3315be, _0x3552d6);
                        break;
                      case "optional":
                        _0x2fcc58(_0x39bf68, _0x16dac3 ? "proto3_optional" : "optional", _0x3552d6);
                        break;
                      default:
                        if (!_0x16dac3 || !_0x29584e.test(_0x3315be)) {
                          throw _0x51fdb5(_0x3315be);
                        }
                        _0x145042(_0x3315be);
                        _0x2fcc58(_0x39bf68, 'optional', _0x3552d6);
                    }
                  });
                })(_0x51b95d, _0x572e28);
                return true;
            }
            return false;
          }
          function _0x3cccde(_0x38f978, _0x25756d, _0x3f7097) {
            var _0x329325 = _0x2c4c58.line;
            if (_0x38f978) {
              if ("string" != typeof _0x38f978.comment) {
                _0x38f978.comment = _0x3686c4();
              }
              _0x38f978.filename = _0x538239.filename;
            }
            if (_0x1e35aa('{', true)) {
              for (var _0x2a43e8; '}' !== (_0x2a43e8 = _0x43b93d());) {
                _0x25756d(_0x2a43e8);
              }
              _0x1e35aa(';', true);
            } else {
              if (_0x3f7097) {
                _0x3f7097();
              }
              _0x1e35aa(';');
              if (_0x38f978 && ("string" != typeof _0x38f978.comment || _0x3bf08b)) {
                _0x38f978.comment = _0x3686c4(_0x329325) || _0x38f978.comment;
              }
            }
          }
          function _0x2fcc58(_0x5c64aa, _0x24b71c, _0x37c27b) {
            var _0x107860 = _0x43b93d();
            if ('group' !== _0x107860) {
              if (!_0x29584e.test(_0x107860)) {
                throw _0x51fdb5(_0x107860, "type");
              }
              var _0xbdd26f = _0x43b93d();
              if (!_0x319e71.test(_0xbdd26f)) {
                throw _0x51fdb5(_0xbdd26f, "name");
              }
              _0xbdd26f = _0x676be0(_0xbdd26f);
              _0x1e35aa('=');
              var _0x5be39b = new _0x2d972b(_0xbdd26f, _0x1d4d67(_0x43b93d()), _0x107860, _0x24b71c, _0x37c27b);
              _0x3cccde(_0x5be39b, function (_0x3751e0) {
                if ("option" !== _0x3751e0) {
                  throw _0x51fdb5(_0x3751e0);
                }
                _0x73b35e(_0x5be39b, _0x3751e0);
                _0x1e35aa(';');
              }, function () {
                _0x1c930f(_0x5be39b);
              });
              if ("proto3_optional" === _0x24b71c) {
                var _0x2a3591 = new _0x1bc464('_' + _0xbdd26f);
                _0x5be39b.setOption('proto3_optional', true);
                _0x2a3591.add(_0x5be39b);
                _0x5c64aa.add(_0x2a3591);
              } else {
                _0x5c64aa.add(_0x5be39b);
              }
              if (!(_0x16dac3 || !_0x5be39b.repeated || undefined === _0x3b3fa0.packed[_0x107860] && undefined !== _0x3b3fa0.basic[_0x107860])) {
                _0x5be39b.setOption('packed', false, true);
              }
            } else {
              !function (_0x27ba63, _0x4a05fa) {
                var _0x32fb11 = _0x43b93d();
                if (!_0x319e71.test(_0x32fb11)) {
                  throw _0x51fdb5(_0x32fb11, "name");
                }
                var _0x48f3ac = _0x25966a.lcFirst(_0x32fb11);
                if (_0x32fb11 === _0x48f3ac) {
                  _0x32fb11 = _0x25966a.ucFirst(_0x32fb11);
                }
                _0x1e35aa('=');
                var _0x23986f = _0x1d4d67(_0x43b93d());
                var _0x185381 = new _0x6ca509(_0x32fb11);
                _0x185381.group = true;
                var _0x382ce7 = new _0x2d972b(_0x48f3ac, _0x23986f, _0x32fb11, _0x4a05fa);
                _0x382ce7.filename = _0x538239.filename;
                _0x3cccde(_0x185381, function (_0x3fa1aa) {
                  switch (_0x3fa1aa) {
                    case "option":
                      _0x73b35e(_0x185381, _0x3fa1aa);
                      _0x1e35aa(';');
                      break;
                    case "required":
                    case "repeated":
                      _0x2fcc58(_0x185381, _0x3fa1aa);
                      break;
                    case "optional":
                      _0x2fcc58(_0x185381, _0x16dac3 ? "proto3_optional" : "optional");
                      break;
                    default:
                      throw _0x51fdb5(_0x3fa1aa);
                  }
                });
                _0x27ba63.add(_0x185381).add(_0x382ce7);
              }(_0x5c64aa, _0x24b71c);
            }
          }
          function _0x73b35e(_0x5c8958, _0x240358) {
            var _0x59f3d1 = _0x1e35aa('(', true);
            if (!_0x29584e.test(_0x240358 = _0x43b93d())) {
              throw _0x51fdb5(_0x240358, 'name');
            }
            var _0xace423;
            var _0x3c0f39 = _0x240358;
            var _0x12f67c = _0x3c0f39;
            if (_0x59f3d1) {
              _0x1e35aa(')');
              _0x12f67c = _0x3c0f39 = '(' + _0x3c0f39 + ')';
              _0x240358 = _0x4a6392();
              if (_0x527409.test(_0x240358)) {
                _0xace423 = _0x240358.substr(0x1);
                _0x3c0f39 += _0x240358;
                _0x43b93d();
              }
            }
            _0x1e35aa('=');
            (function (_0x272753, _0xf3ab54, _0x3aae81, _0x5e20cc) {
              if (_0x272753.setParsedOption) {
                _0x272753.setParsedOption(_0xf3ab54, _0x3aae81, _0x5e20cc);
              }
            })(_0x5c8958, _0x12f67c, _0x2a70c0(_0x5c8958, _0x3c0f39), _0xace423);
          }
          function _0x2a70c0(_0x17ec1c, _0x25ad94) {
            if (_0x1e35aa('{', true)) {
              for (var _0x14b906 = {}; !_0x1e35aa('}', true);) {
                if (!_0x319e71.test(_0x4d41e4 = _0x43b93d())) {
                  throw _0x51fdb5(_0x4d41e4, "name");
                }
                var _0x5c90c3;
                var _0x2cd065 = _0x4d41e4;
                if ('{' === _0x4a6392()) {
                  _0x5c90c3 = _0x2a70c0(_0x17ec1c, _0x25ad94 + '.' + _0x4d41e4);
                } else {
                  _0x1e35aa(':');
                  if ('{' === _0x4a6392()) {
                    _0x5c90c3 = _0x2a70c0(_0x17ec1c, _0x25ad94 + '.' + _0x4d41e4);
                  } else {
                    _0x5c90c3 = _0xfffbbb(true);
                    _0x1dd6fd(_0x17ec1c, _0x25ad94 + '.' + _0x4d41e4, _0x5c90c3);
                  }
                }
                var _0x21ed46 = _0x14b906[_0x2cd065];
                if (_0x21ed46) {
                  _0x5c90c3 = [].concat(_0x21ed46).concat(_0x5c90c3);
                }
                _0x14b906[_0x2cd065] = _0x5c90c3;
                _0x1e35aa(',', true);
              }
              return _0x14b906;
            }
            var _0x301a7f = _0xfffbbb(true);
            _0x1dd6fd(_0x17ec1c, _0x25ad94, _0x301a7f);
            return _0x301a7f;
          }
          function _0x1dd6fd(_0x15db84, _0x7ef0e4, _0x5b51ef) {
            if (_0x15db84.setOption) {
              _0x15db84.setOption(_0x7ef0e4, _0x5b51ef);
            }
          }
          function _0x1c930f(_0x22f2cf) {
            if (_0x1e35aa('[', true)) {
              do {
                _0x73b35e(_0x22f2cf, 'option');
              } while (_0x1e35aa(',', true));
              _0x1e35aa(']');
            }
            return _0x22f2cf;
          }
          for (; null !== (_0x4d41e4 = _0x43b93d());) {
            switch (_0x4d41e4) {
              case "package":
                if (!_0xb16bfc) {
                  throw _0x51fdb5(_0x4d41e4);
                }
                _0x246b70();
                break;
              case "import":
                if (!_0xb16bfc) {
                  throw _0x51fdb5(_0x4d41e4);
                }
                _0xb5049();
                break;
              case 'syntax':
                if (!_0xb16bfc) {
                  throw _0x51fdb5(_0x4d41e4);
                }
                _0x49e9e2();
                break;
              case 'option':
                _0x73b35e(_0x68851f, _0x4d41e4);
                _0x1e35aa(';');
                break;
              default:
                if (_0x4563a8(_0x68851f, _0x4d41e4)) {
                  _0xb16bfc = false;
                  continue;
                }
                throw _0x51fdb5(_0x4d41e4);
            }
          }
          _0x538239.filename = null;
          return {
            'package': _0x3f9dec,
            'imports': _0x428788,
            'weakImports': _0x271fc1,
            'syntax': _0x5b9fff,
            'root': _0x443299
          };
        }
        _0xf2ff19.exports;
      }, function () {
        return {
          './tokenize': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          './root': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          './type': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/type.js',
          './field': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './mapfield': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './oneof': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js',
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './service': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          './method': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/method.js',
          './types': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/util.js'
        };
      });
      _0x2f4fd2.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/common.js', function (_0x196dd8, _0x306cc8, _0x58df36, _0x35b5c7, _0x3f2aa1) {
        _0x58df36.exports = _0x1d3c66;
        var _0x199e81;
        var _0x41f471 = /\/|\./;
        function _0x1d3c66(_0x4e4b0a, _0x2b2290) {
          if (!_0x41f471.test(_0x4e4b0a)) {
            _0x4e4b0a = 'google/protobuf/' + _0x4e4b0a + '.proto';
            _0x2b2290 = {
              'nested': {
                'google': {
                  'nested': {
                    'protobuf': {
                      'nested': _0x2b2290
                    }
                  }
                }
              }
            };
          }
          _0x1d3c66[_0x4e4b0a] = _0x2b2290;
        }
        _0x1d3c66("any", {
          'Any': {
            'fields': {
              'type_url': {
                'type': 'string',
                'id': 0x1
              },
              'value': {
                'type': 'bytes',
                'id': 0x2
              }
            }
          }
        });
        _0x1d3c66('duration', {
          'Duration': _0x199e81 = {
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
        _0x1d3c66('timestamp', {
          'Timestamp': _0x199e81
        });
        _0x1d3c66("empty", {
          'Empty': {
            'fields': {}
          }
        });
        _0x1d3c66("struct", {
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
                'oneof': ['nullValue', "numberValue", "stringValue", "boolValue", 'structValue', "listValue"]
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
                'type': 'string',
                'id': 0x3
              },
              'boolValue': {
                'type': 'bool',
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
        _0x1d3c66('wrappers', {
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
        _0x1d3c66("field_mask", {
          'FieldMask': {
            'fields': {
              'paths': {
                'rule': "repeated",
                'type': 'string',
                'id': 0x1
              }
            }
          }
        });
        _0x1d3c66.get = function (_0x171af5) {
          return _0x1d3c66[_0x171af5] || null;
        };
        _0x58df36.exports;
      }, {});
      var _0x2a6dbe;
      _0x2f4fd2.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/index.js', function (_0xbc9868, _0x99a258, _0x166313, _0x47b9f2, _0x8c010c) {
        var _0x3aa7d7 = _0x166313.exports = _0x99a258("./index-light");
        _0x3aa7d7.build = 'full';
        _0x3aa7d7.tokenize = _0x99a258("./tokenize");
        _0x3aa7d7.parse = _0x99a258("./parse");
        _0x3aa7d7.common = _0x99a258("./common");
        _0x3aa7d7.Root._configure(_0x3aa7d7.Type, _0x3aa7d7.parse, _0x3aa7d7.common);
        _0x166313.exports;
      }, function () {
        return {
          './index-light': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js",
          './tokenize': "file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          './parse': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/parse.js',
          './common': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/common.js'
        };
      });
      var _0x19e117;
      var _0x55ce93;
      var _0x185944;
      var _0x47e965;
      var _0x139738;
      var _0x498f16;
      var _0x13960d;
      var _0x53cb3d;
      var _0x4326c2;
      var _0xfb39f5;
      var _0x5697f4;
      var _0x36d92c;
      var _0x1c6512;
      var _0x37ac28;
      var _0x419255;
      var _0x4a4b83;
      var _0x26a58d;
      _0x2f4fd2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/index.js", function (_0x52d120, _0x17d7b5, _0x55f6b0, _0x2baf33, _0x52b5c2) {
        _0x55f6b0.exports = _0x17d7b5("./src/index");
        _0x2a6dbe = _0x55f6b0.exports;
      }, function () {
        return {
          './src/index': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/src/index.js'
        };
      });
      _0x2f4fd2.require("file:///Users/m2mac1/Desktop/H5/Client/workspace/JackPotJoker/Client/Thai_UAT/node_modules/protobufjs/index.js");
      _0x289c18._RF.push({}, 'f34139liEtOX7eeljN8Cz8w', "index", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "a4b83idlNlHcZQFqX6vJhFz", 'ExtraBetComponent', undefined);
      var _0xc20843 = _0x6126fa.property;
      _0x19e117 = _0xc20843({
        'type': _0x1e3e82,
        'tooltip': "EX 按鈕最頂層節點(整顆node)"
      });
      _0x55ce93 = _0xc20843({
        'type': _0x4d181c,
        'tooltip': "EX 按鈕"
      });
      _0x185944 = _0xc20843({
        'type': _0x4d181c,
        'tooltip': "按鈕ON"
      });
      _0x47e965 = _0xc20843({
        'type': _0x4d181c,
        'tooltip': "按鈕OFF"
      });
      _0x139738 = _0xc20843({
        'type': _0x4d181c,
        'tooltip': "提示問號按鈕"
      });
      _0x498f16 = _0xc20843({
        'type': _0x1e3e82,
        'tooltip': '提示文字tip面板'
      });
      _0x13960d = _0xc20843({
        'type': _0x19ba3d,
        'tooltip': "功能說明文字串Label"
      });
      _0x53cb3d = _0xc20843({
        'type': _0x346ead,
        'tooltip': "本體ExtraBet文字圖片"
      });
      _0x4326c2 = function (_0x30a23a) {
        function _0x214830() {
          var _0x27cef8;
          var _0xc4144e = arguments.length;
          var _0xa654a0 = new Array(_0xc4144e);
          for (var _0x723bed = 0x0; _0x723bed < _0xc4144e; _0x723bed++) {
            _0xa654a0[_0x723bed] = arguments[_0x723bed];
          }
          _0x40ccb3(_0x27cef8 = _0x30a23a.call.apply(_0x30a23a, [this].concat(_0xa654a0)) || this, 'm_multiExtraBetNode', _0xfb39f5, _0x10e60a(_0x27cef8));
          _0x40ccb3(_0x27cef8, "m_multiBtn", _0x5697f4, _0x10e60a(_0x27cef8));
          _0x40ccb3(_0x27cef8, "m_multiBtn_on", _0x36d92c, _0x10e60a(_0x27cef8));
          _0x40ccb3(_0x27cef8, "m_multiBtn_off", _0x1c6512, _0x10e60a(_0x27cef8));
          _0x40ccb3(_0x27cef8, 'm_multiBtn_TipQuesMark', _0x37ac28, _0x10e60a(_0x27cef8));
          _0x40ccb3(_0x27cef8, "m_multiBtn_Tip", _0x419255, _0x10e60a(_0x27cef8));
          _0x40ccb3(_0x27cef8, "m_multiBtn_Description", _0x4a4b83, _0x10e60a(_0x27cef8));
          _0x40ccb3(_0x27cef8, 'm_Txt_Extra_Bet', _0x26a58d, _0x10e60a(_0x27cef8));
          _0x27cef8.m_isExtendShowBar = false;
          _0x27cef8.m_ExtraBetAniPlaying = null;
          _0x27cef8.m_isExtra = false;
          _0x27cef8.m_isForceExtraOnEnd = false;
          _0x27cef8.m_isTwoStep = false;
          _0x27cef8.m_toStepTwo = false;
          _0x27cef8.m_triggerCb = null;
          _0x27cef8.m_canExtend = true;
          return _0x27cef8;
        }
        _0x39e18e(_0x214830, _0x30a23a);
        var _0x50f9f0 = _0x214830.prototype;
        _0x50f9f0.Init = function (_0x5385eb, _0x34a17c, _0x55e46f, _0x106235, _0x3df471) {
          var _0x35b5d2 = this;
          if (undefined === _0x106235) {
            _0x106235 = false;
          }
          if (undefined === _0x3df471) {
            _0x3df471 = false;
          }
          if (_0x546bb1.CheckSwitchOff(_0x3e226a.CloseExtraBet)) {
            this.node.active = false;
            return void this.node.on(_0x308dfb.ACTIVE_IN_HIERARCHY_CHANGED, function () {
              _0x35b5d2.node.active = false;
            });
          }
          this.m_triggerCb = _0x5385eb;
          this.m_isTwoStep = _0x106235;
          if (this.m_multiBtn_Description && this.m_Txt_Extra_Bet) {
            _0x56df80(" localeStringManager.CurrLang : " + _0x2b07a4.CurrLang);
            this.m_multiBtn_Description.string = _0x2b07a4.GetString(_0x34a17c);
            this.m_Txt_Extra_Bet.spriteFrame = _0x2b07a4.GetGameAtlas().getSpriteFrame(_0x55e46f);
          }
          _0xb1ea.Init(_0x3df471 ? null : this.node, this.ForceSetExtraBet.bind(this));
        };
        _0x50f9f0.onLoad = function () {
          var _0x33c73d = this;
          if (!_0x546bb1.CheckSwitchOff(_0x3e226a.CloseExtraBet)) {
            _0x56df80("ExtraBet onLoad");
            if (this.m_multiBtn) {
              this.m_multiBtn.node.on(_0x1e3e82.EventType.TOUCH_END, function () {
                if (!_0x33c73d.m_ExtraBetAniPlaying) {
                  _0x25e445.Play(_0x2be50b.AudioClips.COMMON_BTN);
                  if (_0x33c73d.CheckCanUseBtn()) {
                    _0x33c73d.ExtendShowBar(!_0x33c73d.m_isExtendShowBar);
                  } else {
                    _0x58bcdb.ShowMessageBox(_0x2be50b.StringKey.FREEWINCASH_PLAYING1);
                  }
                }
              });
            }
            for (var _0xe949ab = 0x0; _0xe949ab < this.m_multiBtn_on.length; _0xe949ab++) {
              this.m_multiBtn_on[_0xe949ab].node.on(_0x1e3e82.EventType.TOUCH_END, function () {
                if (!_0x33c73d.m_ExtraBetAniPlaying) {
                  if (_0x33c73d.CheckCanUseBtn()) {
                    _0x33c73d.ChangeBetMode();
                  } else {
                    _0x58bcdb.ShowMessageBox(_0x2be50b.StringKey.FREEWINCASH_PLAYING1);
                  }
                }
              });
              if (this.m_multiBtn_off[_0xe949ab]) {
                this.m_multiBtn_off[_0xe949ab].node.on(_0x1e3e82.EventType.TOUCH_END, function () {
                  if (!_0x33c73d.m_ExtraBetAniPlaying) {
                    _0x25e445.Play(_0x2be50b.AudioClips.COMMON_BTN);
                    if (_0x33c73d.CheckCanUseBtn()) {
                      _0x33c73d.ChangeBetMode();
                    }
                  }
                });
              }
            }
            if (this.m_multiBtn_TipQuesMark) {
              this.m_multiBtn_TipQuesMark.node.on(_0x1e3e82.EventType.TOUCH_END, _0x23d9d7(_0x1a789f().mark(function _0x22af96() {
                return _0x1a789f().wrap(function (_0x41ade0) {
                  for (;;) {
                    switch (_0x41ade0.prev = _0x41ade0.next) {
                      case 0x0:
                        if (_0x33c73d.m_ExtraBetAniPlaying) {
                          _0x41ade0.next = 0xd;
                          break;
                        }
                        _0x25e445.Play(_0x2be50b.AudioClips.COMMON_BTN);
                        if (_0x33587b.Current() != _0x227275.IDLE || _0x1e0c51.IsBuyBonus) {
                          _0x41ade0.next = 0xc;
                          break;
                        }
                        if (!_0x33c73d.m_isExtendShowBar) {
                          _0x41ade0.next = 0x7;
                          break;
                        }
                        _0x33c73d.m_multiBtn_Tip.active = !_0x33c73d.m_multiBtn_Tip.active;
                        _0x41ade0.next = 0xa;
                        break;
                      case 0x7:
                        _0x41ade0.next = 0x9;
                        return _0x33c73d.ExtendShowBar(true);
                      case 0x9:
                        if (!_0x33c73d.m_multiBtn_Tip.active && _0x33c73d.m_isExtendShowBar) {
                          _0x33c73d.m_multiBtn_Tip.active = true;
                        }
                      case 0xa:
                        _0x41ade0.next = 0xd;
                        break;
                      case 0xc:
                        _0x58bcdb.ShowMessageBox(_0x2be50b.StringKey.FREEWINCASH_PLAYING1);
                      case 0xd:
                      case "end":
                        return _0x41ade0.stop();
                    }
                  }
                }, _0x22af96);
              })));
            }
            this.ExtendShowBar(false);
          }
        };
        _0x50f9f0.start = function () {
          _0x56df80("ExtraBet start");
        };
        _0x50f9f0.CheckCanUseBtn = function () {
          return _0x2be50b.IsInMG() && _0x33587b.Current() == _0x227275.IDLE && !_0x2be50b.IsUsingItem && !_0x1e0c51.IsBuyBonus && !_0x444f9a.IsFeaturesDemoMode && !_0x546bb1.CheckSwitchOff(_0x3e226a.CloseExtraBet);
        };
        _0x50f9f0.OnSpin = function () {
          this.ExtendShowBar(false);
        };
        _0x50f9f0.ShowExtra = function (_0x3417fe) {
          if (this.m_multiExtraBetNode && !_0x546bb1.CheckSwitchOff(_0x3e226a.CloseExtraBet)) {
            this.m_multiExtraBetNode.active = _0x3417fe;
          }
        };
        _0x50f9f0.GoToFeatures = function () {};
        _0x50f9f0.ExtendShowBar = function () {
          var _0x3ef3c1 = _0x23d9d7(_0x1a789f().mark(function _0x3b6a90(_0x30bea5) {
            var _0x1fe092;
            return _0x1a789f().wrap(function (_0x511c12) {
              for (;;) {
                switch (_0x511c12.prev = _0x511c12.next) {
                  case 0x0:
                    if (this.m_canExtend && !_0x546bb1.CheckSwitchOff(_0x3e226a.CloseExtraBet)) {
                      _0x511c12.next = 0x2;
                      break;
                    }
                    return _0x511c12.abrupt("return");
                  case 0x2:
                    if (!_0x127133 || this.m_ExtraBetAniPlaying) {
                      _0x511c12.next = 0x1f;
                      break;
                    }
                    if (!_0x30bea5) {
                      _0x511c12.next = 0x14;
                      break;
                    }
                    if (_0x127133.IsAutoSpin || _0x2be50b.IsUsingItem || _0x1e0c51.IsBuyBonus) {
                      _0x511c12.next = 0x11;
                      break;
                    }
                    if (this.m_isExtendShowBar) {
                      _0x511c12.next = 0xf;
                      break;
                    }
                    this.m_isExtendShowBar = true;
                    _0x127133.SetSpinState(0x1);
                    this.m_ExtraBetAniPlaying = true;
                    if (!this.m_multiExtraBetNode) {
                      _0x511c12.next = 0xc;
                      break;
                    }
                    _0x511c12.next = 0xc;
                    return this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x4cb146), "ExtraBet_Show");
                  case 0xc:
                    this.m_ExtraBetAniPlaying = false;
                    _0x127133.SetSpinState(0x0);
                    if (this.m_isExtra && this.m_multiExtraBetNode) {
                      this.m_multiExtraBetNode.getComponent(_0x4cb146).play("ExtraBet_Active");
                    }
                  case 0xf:
                    _0x511c12.next = 0x12;
                    break;
                  case 0x11:
                    _0x58bcdb.ShowMessageBox(_0x2be50b.StringKey.FREEWINCASH_PLAYING1);
                  case 0x12:
                    _0x511c12.next = 0x1f;
                    break;
                  case 0x14:
                    if (!this.m_isExtendShowBar) {
                      _0x511c12.next = 0x1f;
                      break;
                    }
                    if (!_0x127133.IsAutoSpin) {
                      _0x127133.SetSpinState(0x1);
                    }
                    if (this.m_multiBtn_Tip) {
                      this.m_multiBtn_Tip.active = false;
                    }
                    this.m_ExtraBetAniPlaying = true;
                    if (!this.m_multiExtraBetNode) {
                      _0x511c12.next = 0x1b;
                      break;
                    }
                    _0x511c12.next = 0x1b;
                    return this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x4cb146), "ExtraBet_Close");
                  case 0x1b:
                    this.m_ExtraBetAniPlaying = false;
                    if (!_0x127133.IsAutoSpin) {
                      _0x127133.SetSpinState(0x0);
                    }
                    if (this.m_multiExtraBetNode) {
                      if (this.m_isExtra) {
                        this.m_multiExtraBetNode.getComponent(_0x4cb146).play('ExtraBet_Active');
                      } else {
                        this.m_multiExtraBetNode.getComponent(_0x4cb146).play("ExtraBet_OFF");
                        (_0x1fe092 = this.m_multiExtraBetNode.getComponent(_0x4cb146).getState("ExtraBet_OFF")).setTime(_0x1fe092.duration);
                      }
                    }
                    this.m_isExtendShowBar = false;
                  case 0x1f:
                  case "end":
                    return _0x511c12.stop();
                }
              }
            }, _0x3b6a90, this);
          }));
          return function (_0x193406) {
            return _0x3ef3c1.apply(this, arguments);
          };
        }();
        _0x50f9f0.ChangeBetMode = function () {
          var _0x3fca5d = _0x23d9d7(_0x1a789f().mark(function _0x5df049() {
            var _0x3ee371;
            return _0x1a789f().wrap(function (_0x51bfbe) {
              for (;;) {
                switch (_0x51bfbe.prev = _0x51bfbe.next) {
                  case 0x0:
                    if (!_0x546bb1.CheckSwitchOff(_0x3e226a.CloseExtraBet)) {
                      _0x51bfbe.next = 0x2;
                      break;
                    }
                    return _0x51bfbe.abrupt('return');
                  case 0x2:
                    _0x56df80("ChangeBetMode stateManager.Current() : ", _0x33587b.Current());
                    if (!_0x127133 || _0x1e0c51.IsBuyBonus || _0x33587b.Current() !== _0x227275.IDLE && !this.m_isExtra) {
                      _0x51bfbe.next = 0x24;
                      break;
                    }
                    this.m_isExtra = !this.m_isExtra;
                    _0x3ee371 = [];
                    if (!this.m_isExtra) {
                      _0x51bfbe.next = 0x18;
                      break;
                    }
                    if (this.m_isTwoStep) {
                      this.m_toStepTwo = true;
                    } else {
                      _0x127133.ChangeMultiBet(0x1);
                    }
                    if (0x1 == this.m_multiBtn_on.length) {
                      this.m_multiBtn_on[0x0].node.active = true;
                      this.m_multiBtn_off[0x0].node.active = false;
                    }
                    this.m_ExtraBetAniPlaying = true;
                    if (!(null == _0x127133)) {
                      _0x127133.SetSpinState(0x1);
                    }
                    if (!(null == _0x444f9a)) {
                      _0x444f9a.SetBuyBonusState(false);
                    }
                    if (this.m_multiExtraBetNode) {
                      _0x3ee371.push(this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x4cb146), "ExtraBet_ON"));
                    }
                    _0x3ee371.push(this.m_triggerCb(this.m_isExtra, false));
                    _0x51bfbe.next = 0x10;
                    return Promise.all(_0x3ee371);
                  case 0x10:
                    this.m_ExtraBetAniPlaying = false;
                    if (!(null == _0x127133)) {
                      _0x127133.SetSpinState(0x0);
                    }
                    if (this.m_multiExtraBetNode) {
                      this.m_multiExtraBetNode.getComponent(_0x4cb146).play("ExtraBet_Active");
                    }
                    _0x51bfbe.next = 0x15;
                    return _0x2be50b.Wait(this, 0.2);
                  case 0x15:
                    if (!(null == _0x444f9a)) {
                      _0x444f9a.SetBuyBonusState(true);
                    }
                    _0x51bfbe.next = 0x22;
                    break;
                  case 0x18:
                    _0x127133.ChangeMultiBet(0x0);
                    if (0x1 == this.m_multiBtn_on.length) {
                      this.m_multiBtn_on[0x0].node.active = false;
                      this.m_multiBtn_off[0x0].node.active = true;
                    }
                    this.m_ExtraBetAniPlaying = true;
                    if (!(null == _0x127133)) {
                      _0x127133.SetSpinState(0x1);
                    }
                    if (this.m_multiExtraBetNode) {
                      _0x3ee371.push(this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x4cb146), "ExtraBet_OFF"));
                    }
                    _0x3ee371.push(this.m_triggerCb(this.m_isExtra, false));
                    _0x51bfbe.next = 0x20;
                    return Promise.all(_0x3ee371);
                  case 0x20:
                    this.m_ExtraBetAniPlaying = false;
                    if (!(null == _0x127133)) {
                      _0x127133.SetSpinState(0x0);
                    }
                  case 0x22:
                    _0x51bfbe.next = 0x25;
                    break;
                  case 0x24:
                    if (_0x33587b.Current() !== _0x227275.IDLE) {
                      _0x56df80("TRIAL_REFUSED_REASON 1 ");
                      _0x58bcdb.ShowMessageBox(_0x2be50b.StringKey.FREEWINCASH_PLAYING1);
                    }
                  case 0x25:
                  case "end":
                    return _0x51bfbe.stop();
                }
              }
            }, _0x5df049, this);
          }));
          return function () {
            return _0x3fca5d.apply(this, arguments);
          };
        }();
        _0x50f9f0.SetTwoStepMulti = function () {
          var _0x5f2a4d = _0x23d9d7(_0x1a789f().mark(function _0x30bba5(_0x36d130, _0x3d4d4a) {
            return _0x1a789f().wrap(function (_0x37a258) {
              for (;;) {
                switch (_0x37a258.prev = _0x37a258.next) {
                  case 0x0:
                    if (!_0x546bb1.CheckSwitchOff(_0x3e226a.CloseExtraBet)) {
                      _0x37a258.next = 0x2;
                      break;
                    }
                    return _0x37a258.abrupt("return");
                  case 0x2:
                    if (!this.m_isTwoStep || !this.m_toStepTwo) {
                      _0x37a258.next = 0xf;
                      break;
                    }
                    if (!_0x36d130) {
                      _0x37a258.next = 0x7;
                      break;
                    }
                    _0x127133.ChangeMultiBet(_0x3d4d4a);
                    _0x37a258.next = 0xf;
                    break;
                  case 0x7:
                    this.m_isExtra = false;
                    if (0x1 == this.m_multiBtn_on.length) {
                      this.m_multiBtn_on[0x0].node.active = false;
                      this.m_multiBtn_off[0x0].node.active = true;
                    }
                    this.m_ExtraBetAniPlaying = true;
                    if (_0x127133) {
                      _0x127133.SetSpinState(0x1);
                    }
                    if (!this.m_multiExtraBetNode) {
                      _0x37a258.next = 0xe;
                      break;
                    }
                    _0x37a258.next = 0xe;
                    return this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x4cb146), "ExtraBet_OFF");
                  case 0xe:
                    this.m_ExtraBetAniPlaying = false;
                  case 0xf:
                  case "end":
                    return _0x37a258.stop();
                }
              }
            }, _0x30bba5, this);
          }));
          return function (_0x2697db, _0x904fa) {
            return _0x5f2a4d.apply(this, arguments);
          };
        }();
        _0x50f9f0.ForceSetExtraBet = function () {
          var _0x629947 = _0x23d9d7(_0x1a789f().mark(function _0xe75b23(_0x3aaac9, _0x481083) {
            var _0x156010;
            return _0x1a789f().wrap(function (_0x529a80) {
              for (;;) {
                switch (_0x529a80.prev = _0x529a80.next) {
                  case 0x0:
                    if (undefined === _0x481083) {
                      _0x481083 = 0x1;
                    }
                    if (!_0x546bb1.CheckSwitchOff(_0x3e226a.CloseExtraBet)) {
                      _0x529a80.next = 0x3;
                      break;
                    }
                    return _0x529a80.abrupt('return');
                  case 0x3:
                    if (!_0x3aaac9) {
                      _0x529a80.next = 0xe;
                      break;
                    }
                    this.m_isForceExtraOnEnd = false;
                    this.m_isExtra = true;
                    if (0x1 == this.m_multiBtn_on.length) {
                      this.m_multiBtn_on[0x0].node.active = true;
                      this.m_multiBtn_off[0x0].node.active = false;
                    }
                    if (this.m_multiExtraBetNode) {
                      this.m_multiExtraBetNode.getComponent(_0x4cb146).play("ExtraBet_Active");
                    }
                    if (this.m_isTwoStep) {
                      this.m_toStepTwo = true;
                      this.SetTwoStepMulti(_0x3aaac9, _0x481083);
                    } else {
                      _0x127133.ChangeMultiBet(_0x481083);
                    }
                    _0x529a80.next = 0xb;
                    return this.m_triggerCb(_0x3aaac9, true);
                  case 0xb:
                    this.m_isForceExtraOnEnd = true;
                    _0x529a80.next = 0x17;
                    break;
                  case 0xe:
                    if (!this.m_isExtra) {
                      _0x529a80.next = 0x17;
                      break;
                    }
                    _0x156010 = [];
                    this.m_isExtra = false;
                    if (0x1 == this.m_multiBtn_on.length) {
                      this.m_multiBtn_on[0x0].node.active = false;
                      this.m_multiBtn_off[0x0].node.active = true;
                    }
                    _0x127133.ChangeMultiBet(0x0);
                    if (this.m_multiExtraBetNode) {
                      if (this.m_isExtendShowBar) {
                        _0x156010.push(this.ExtendShowBar(false));
                      } else {
                        _0x156010.push(this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x4cb146), "ExtraBet_OFF"));
                      }
                    }
                    _0x156010.push(this.m_triggerCb(_0x3aaac9, true));
                    _0x529a80.next = 0x17;
                    return Promise.all(_0x156010);
                  case 0x17:
                  case "end":
                    return _0x529a80.stop();
                }
              }
            }, _0xe75b23, this);
          }));
          return function (_0x5d0db9, _0x2ed106) {
            return _0x629947.apply(this, arguments);
          };
        }();
        _0x50f9f0.OnRotation = function () {
          if (!_0x546bb1.CheckSwitchOff(_0x3e226a.CloseExtraBet)) {
            if (this.m_multiExtraBetNode) {
              if (this.m_isExtra) {
                this.m_multiExtraBetNode.getComponent(_0x4cb146).play("ExtraBet_Active");
              } else {
                this.m_multiExtraBetNode.getComponent(_0x4cb146).play("ExtraBet_Stop");
              }
            }
            if (this.m_multiBtn_Tip) {
              this.m_multiBtn_Tip.active = false;
            }
          }
        };
        _0x50f9f0.IsExAnimationTouchable = function () {
          return !this.m_ExtraBetAniPlaying;
        };
        _0x50f9f0.FirstShowBar = function () {};
        _0x50f9f0.PlayAnimation = function (_0x4b4295, _0x1b24c1, _0x22eafe) {
          if (undefined === _0x22eafe) {
            _0x22eafe = false;
          }
          return new Promise(function (_0x4a6df8) {
            _0x4b4295.play(_0x1b24c1);
            if (_0x22eafe) {
              var _0x26db8b = _0x4b4295.getState(_0x1b24c1);
              if (_0x26db8b) {
                _0x26db8b.wrapMode = _0x4f0878.WrapMode.Loop;
              }
            }
            _0x4b4295.once(_0x4cb146.EventType.FINISHED, function () {
              _0x4a6df8(true);
            });
          });
        };
        _0x48eefc(_0x214830, [{
          'key': 'ExtraBetAniPlaying',
          'set': function (_0xd05fcd) {
            this.m_ExtraBetAniPlaying = _0xd05fcd;
          }
        }, {
          'key': "IsExtra",
          'get': function () {
            return this.m_isExtra;
          }
        }, {
          'key': "IsForceExtraOnEnd",
          'get': function () {
            return this.m_isForceExtraOnEnd;
          }
        }, {
          'key': "CanExtend",
          'set': function (_0x45a681) {
            this.m_canExtend = _0x45a681;
          }
        }]);
        return _0x214830;
      }(_0x2d51ac);
      _0xfb39f5 = _0x1c868d(_0x4326c2.prototype, "m_multiExtraBetNode", [_0x19e117], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5697f4 = _0x1c868d(_0x4326c2.prototype, "m_multiBtn", [_0x55ce93], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x36d92c = _0x1c868d(_0x4326c2.prototype, "m_multiBtn_on", [_0x185944], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x1c6512 = _0x1c868d(_0x4326c2.prototype, "m_multiBtn_off", [_0x47e965], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x37ac28 = _0x1c868d(_0x4326c2.prototype, "m_multiBtn_TipQuesMark", [_0x139738], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x419255 = _0x1c868d(_0x4326c2.prototype, "m_multiBtn_Tip", [_0x498f16], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4a4b83 = _0x1c868d(_0x4326c2.prototype, "m_multiBtn_Description", [_0x13960d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x26a58d = _0x1c868d(_0x4326c2.prototype, "m_Txt_Extra_Bet", [_0x53cb3d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "e62e8XBlpFCEroGAjrWjuWd", "GameView", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "dd200sFwOxFkYWzqAdayVz8", 'NearWin', undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "84c5byXmKBEJIwVBTwOs7ly", "ButtonPro", undefined);
      var _0x14a212;
      var _0x2342e4;
      var _0x90cbb5;
      !function (_0x62ffe0) {
        _0x62ffe0[_0x62ffe0.NONE = 0x0] = 'NONE';
        _0x62ffe0[_0x62ffe0.COLOR = 0x1] = 'COLOR';
        _0x62ffe0[_0x62ffe0.SPRITE = 0x2] = 'SPRITE';
        _0x62ffe0[_0x62ffe0.SCALE = 0x4] = 'SCALE';
        _0x62ffe0[_0x62ffe0.COLOR_SPRITE = 0x3] = "COLOR_SPRITE";
        _0x62ffe0[_0x62ffe0.COLOR_SCALE = 0x5] = "COLOR_SCALE";
        _0x62ffe0[_0x62ffe0.SPRITE_SCALE = 0x6] = 'SPRITE_SCALE';
        _0x62ffe0[_0x62ffe0.ALL = 0x7] = 'ALL';
      }(_0x14a212 || (_0x14a212 = {}));
      _0x2c6c56(_0x14a212);
      (function (_0xf8364a) {
        _0xf8364a.NORMAL = "normal";
        _0xf8364a.HOVER = 'hover';
        _0xf8364a.PRESSED = "pressed";
        _0xf8364a.DISABLED = "disabled";
      })(_0x2342e4 || (_0x2342e4 = {}));
      (function (_0x1e1844) {
        _0x1e1844.CLICK = "click";
      })(_0x90cbb5 || (_0x90cbb5 = {}));
      var _0x50f951;
      var _0x1ca502;
      var _0xa8bc65;
      var _0x44c4a7;
      var _0x4f5ad1;
      var _0x248b60;
      var _0x1fc1fc;
      var _0x4a1e30;
      var _0x2fb5c2;
      var _0x341aa1;
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, '58afbgi72RCYrg3eW8ahovc', 'CommonBuyBonusCell', undefined);
      var _0x23d513 = _0x6126fa.ccclass;
      var _0x178c4d = _0x6126fa.property;
      _0x50f951 = _0x23d513("CommonBuyBonusCell");
      _0x1ca502 = _0x178c4d({
        'type': _0x346ead,
        'tooltip': '購買文字'
      });
      _0xa8bc65 = _0x178c4d({
        'type': _0x346ead,
        'tooltip': "項目標題"
      });
      _0x44c4a7 = _0x178c4d({
        'type': _0x1e4500,
        'tooltip': "標題圖片名稱"
      });
      _0x4f5ad1 = _0x178c4d({
        'type': _0x19ba3d,
        'tooltip': '金額'
      });
      _0x248b60 = function (_0x149277) {
        function _0x56f03f() {
          var _0x1c09a8;
          var _0x2bcf36 = arguments.length;
          var _0x288850 = new Array(_0x2bcf36);
          for (var _0x420691 = 0x0; _0x420691 < _0x2bcf36; _0x420691++) {
            _0x288850[_0x420691] = arguments[_0x420691];
          }
          _0x40ccb3(_0x1c09a8 = _0x149277.call.apply(_0x149277, [this].concat(_0x288850)) || this, "m_buyHintSprite", _0x1fc1fc, _0x10e60a(_0x1c09a8));
          _0x40ccb3(_0x1c09a8, 'm_titleSprite', _0x4a1e30, _0x10e60a(_0x1c09a8));
          _0x40ccb3(_0x1c09a8, "m_titlePicName", _0x2fb5c2, _0x10e60a(_0x1c09a8));
          _0x40ccb3(_0x1c09a8, 'm_priceLabel', _0x341aa1, _0x10e60a(_0x1c09a8));
          return _0x1c09a8;
        }
        _0x39e18e(_0x56f03f, _0x149277);
        var _0x54b57c = _0x56f03f.prototype;
        _0x54b57c.start = function () {
          var _0x2b5662 = _0x2b07a4.GetGameAtlas();
          if (_0x2b07a4.CurrLang !== _0x2be50b.Lang.EN) {
            this.m_buyHintSprite.spriteFrame = _0x2b5662.getSpriteFrame("Txt_Buy_Feature_Buy");
            this.m_titleSprite.spriteFrame = _0x2b5662.getSpriteFrame(this.m_titlePicName);
          }
        };
        _0x54b57c.SetPrice = function (_0x496a59) {
          this.m_priceLabel.string = _0x496a59;
        };
        return _0x56f03f;
      }(_0x2d51ac);
      _0x1fc1fc = _0x1c868d(_0x248b60.prototype, "m_buyHintSprite", [_0x1ca502], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4a1e30 = _0x1c868d(_0x248b60.prototype, 'm_titleSprite', [_0xa8bc65], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2fb5c2 = _0x1c868d(_0x248b60.prototype, "m_titlePicName", [_0x44c4a7], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return '';
        }
      });
      _0x341aa1 = _0x1c868d(_0x248b60.prototype, "m_priceLabel", [_0x4f5ad1], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, 'deede8s0zBMX57ZpiWkWMfR', "CommonBuyBonus", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "da7972YP9VAta/rfkmC0gmE", "ColorText", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "ccb69RBfI5KBKNPuwywfE10", "ColorFadingUI", undefined);
      var _0x247cf4;
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "9cd57oopkhBmZJ5o4EZK1tk", "EvtReceiver", undefined);
      var _0x33f79d = _0x6126fa.ccclass;
      var _0x26611c = _0x33f79d(_0x247cf4 = function (_0x4ff30b) {
        function _0x411090() {
          var _0x2d8ac1;
          var _0x3b6558 = arguments.length;
          var _0x12da41 = new Array(_0x3b6558);
          for (var _0x2ca191 = 0x0; _0x2ca191 < _0x3b6558; _0x2ca191++) {
            _0x12da41[_0x2ca191] = arguments[_0x2ca191];
          }
          (_0x2d8ac1 = _0x4ff30b.call.apply(_0x4ff30b, [this].concat(_0x12da41)) || this).m_callback = undefined;
          return _0x2d8ac1;
        }
        _0x39e18e(_0x411090, _0x4ff30b);
        _0x411090.Pack = function (_0x3e1286, _0x367ffd) {
          _0x3e1286.addComponent(_0x411090);
          _0x3e1286.getComponent(_0x411090).SetCallback(_0x367ffd);
        };
        var _0x163528 = _0x411090.prototype;
        _0x163528.EvtReciever = function (_0x165060) {
          _0x56df80("AnimEvtReciever: ", _0x165060);
          if (this.m_callback) {
            this.m_callback(_0x165060);
          } else {
            _0x56df80("callback沒有設定，無法處理event: ", _0x165060);
          }
        };
        _0x163528.triggerAnimationEvent = function (_0x422c58) {
          _0x56df80("triggerAnimationEvent: ", _0x422c58);
          if (this.m_callback) {
            this.m_callback(_0x422c58);
          } else {
            _0x56df80("callback沒有設定，無法處理event: ", _0x422c58);
          }
        };
        _0x163528.SetCallback = function (_0x4d74e8) {
          this.m_callback = _0x4d74e8;
        };
        _0x163528.onDestroy = function () {
          this.m_callback = null;
        };
        return _0x411090;
      }(_0x2d51ac)) || _0x247cf4;
      var _0x2c8d3a;
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "bc3c97zP8pM2I5NAob2S72W", "EffectView", undefined);
      var _0x11eaa6 = function (_0xa559fd) {
        function _0x2273f() {
          var _0x14bc07;
          (_0x14bc07 = _0xa559fd.call(this) || this).m_awardBoardFile = _0x2273f.EFFECT_ROOT + "win/awardBoard";
          _0x14bc07.m_effectList = {};
          _0x14bc07.m_timeLineList = {};
          _0x14bc07.m_winEffCbFunc = null;
          _0x14bc07.m_currentWinEffect = null;
          _0x14bc07.m_currentWinEffectTimeline = null;
          _0x14bc07.m_awardBoard = null;
          _0x14bc07.m_awardBoardTimeline = null;
          _0x14bc07.m_txtWinValue = null;
          _0x14bc07.m_durRollMoneyTick = _0x2273f.MONEY_ROLL_TIME;
          _0x14bc07.m_moneyRealValue = 0x0;
          _0x14bc07.m_moneyRollValue = 0x0;
          _0x14bc07.m_bgMaskNode = null;
          _0x14bc07.m_commonGetCoinCbFunc = null;
          _0x14bc07.m_commonGetCoinMidCbFunc = null;
          _0x14bc07.m_commonGetCoinEff = null;
          _0x14bc07.m_commonGetCoinTline = null;
          _0x14bc07.m_updateMoneyEff = null;
          _0x14bc07.m_updateMoneyTline = null;
          _0x14bc07.m_getCoinParticle = null;
          _0x14bc07.m_odds = [0x3, 0x5, 0xa, 0x14, 0x1e];
          _0x14bc07.m_winEffectFiles = [null, null, _0x2273f.EFFECT_ROOT + _0x2273f.FILE_PATH.BIG_WIN, _0x2273f.EFFECT_ROOT + _0x2273f.FILE_PATH.MEGA_WIN, _0x2273f.EFFECT_ROOT + _0x2273f.FILE_PATH.SUPER_WIN];
          _0x14bc07.m_coinEffects = [0x2, 0x3, 0x5, 0x5, 0x5];
          _0x14bc07.m_coinTimes = [0x2, 0x2, 0x5, 0x5, 0x5];
          _0x14bc07.m_soundNameByOdds = [];
          _0x14bc07.m_isAutoCheckFloat = false;
          _0x14bc07.m_rotateCoins = {};
          _0x14bc07.m_coinEffectNode = undefined;
          _0x14bc07.m_loadedSound = undefined;
          _0x14bc07.m_isLandscape = false;
          _0x14bc07.m_LandscapeRate = 0x1;
          _0x14bc07.m_winType = undefined;
          _0x14bc07.m_nowPlaySoundID = null;
          _0x14bc07.m_loadedSound = false;
          return _0x14bc07;
        }
        _0x39e18e(_0x2273f, _0xa559fd);
        var _0x25d351 = _0x2273f.prototype;
        _0x25d351.LoadSound = function () {
          this.m_loadedSound = true;
        };
        _0x25d351.OnUpdate = function (_0x55d5fa) {
          this.RollWinMoney(_0x55d5fa);
        };
        _0x25d351.ShowWinAndCoinEffect = function (_0x2f9daa, _0xf62415, _0x3f5769) {
          if (undefined === _0x3f5769) {
            _0x3f5769 = null;
          }
          _0x3f5769 = _0x3f5769 || null;
          var _0x1e3dd1 = _0x3abdaf.GetManagerId(_0x3f5769);
          this.ShowWinEffect(_0x2f9daa, _0x1e3dd1);
          if (!(undefined !== _0x2f9daa.playCoinAtWinEffect && true !== _0x2f9daa.playCoinAtWinEffect)) {
            this.playCoinEffect(_0xf62415, _0x1e3dd1);
          }
          _0x3abdaf.StartLoad(_0x1e3dd1);
        };
        _0x25d351.ShowWinEffect = function (_0x52ffdc, _0x2986c6) {
          var _0x71a242 = this;
          if (undefined === _0x2986c6) {
            _0x2986c6 = -0x1;
          }
          var _0x2967f5 = _0x52ffdc.effectFile;
          var _0x3af478 = _0x52ffdc.winValue;
          var _0x438c28 = _0x52ffdc.cbFunc;
          var _0x5e2f0e = _0x52ffdc.yPos;
          var _0x58dbe4 = _0x52ffdc.deltaY;
          var _0x21b617 = _0x52ffdc.cbFuncBtoM;
          var _0x110fc6 = _0x52ffdc.cbFuncMtoS;
          var _0x27e7b0 = _0x52ffdc.cbFuncPlaying;
          var _0x56ffa2 = _0x52ffdc.isLoop || false;
          var _0x3f1e48 = _0x52ffdc.rollTime;
          if (null != _0x3af478) {
            var _0x1c636c = function () {
              if (_0x71a242.m_bgMaskNode) {
                _0x71a242.m_bgMaskNode.active = true;
              }
              _0x56df80("LoadPrefabManager CB", _0x3af478);
              _0x5e2f0e = null != _0x5e2f0e && _0x5e2f0e || _0x2273f.DEFAULT_Y;
              _0x71a242.m_effectList[_0x2967f5].setPosition(_0x243100(_0x2273f.DesignSize.width / 0x2, _0x5e2f0e));
              _0x71a242.m_effectList[_0x2967f5].active = true;
              _0x71a242.m_timeLineList[_0x2967f5].play(_0x2273f.ANI_LABEL.ACT);
              _0x71a242.m_currentWinEffect = _0x71a242.m_effectList[_0x2967f5];
              _0x71a242.m_currentWinEffectTimeline = _0x71a242.m_timeLineList[_0x2967f5];
              _0x71a242.m_currentWinEffectTimeline.name = _0x2967f5;
              _0x58dbe4 = _0x2967f5 == _0x2273f.FILE_PATH.JACKPOT ? 0xb4 : null != _0x58dbe4 ? _0x58dbe4 : 0xe6;
              _0x71a242.m_awardBoard.setPosition(_0x243100(_0x2273f.DesignSize.width / 0x2, _0x5e2f0e - _0x58dbe4));
              _0x71a242.m_awardBoard.active = true;
              _0x71a242.m_awardBoardTimeline.play(_0x2273f.ANI_LABEL.ACT);
              _0x71a242.SetWinValue(_0x3af478, _0x3f1e48);
              if (!(null == _0x27e7b0)) {
                _0x27e7b0();
              }
            };
            var _0x303249 = _0x2986c6;
            if (-0x1 == _0x2986c6) {
              _0x303249 = _0x3abdaf.GetManagerId(_0x1c636c);
            }
            this.m_winEffCbFunc = _0x438c28;
            if (null == this.m_effectList[_0x2967f5]) {
              _0x3abdaf.AddLoad(_0x303249);
              _0x2be50b.GameBundle.load(_0x2967f5, function (_0x1c5f1c, _0x299ae3) {
                if (_0x1c5f1c) {
                  _0x59835f(_0x1c5f1c.message || _0x1c5f1c);
                } else {
                  var _0x1d2d95 = _0x4497b0(_0x299ae3);
                  _0x1d2d95.active = false;
                  _0x71a242.addChild(_0x1d2d95);
                  _0x546bb1.SetZIndex(_0x1d2d95, _0x2273f.EFF_ZORDER.WIN_EFFECT);
                  var _0x2e805b = _0x1d2d95.getComponent(_0x4cb146);
                  _0x26611c.Pack(_0x1d2d95, function (_0xc517ca) {
                    if (_0xc517ca == _0x2273f.ANI_FRAME_EVENT.ENDING) {
                      if (_0x71a242.m_awardBoard && _0x71a242.m_awardBoard.active) {
                        _0x71a242.m_awardBoardTimeline.play(_0x2273f.ANI_LABEL.ENDING);
                      }
                    } else {
                      if (_0xc517ca == _0x2273f.ANI_FRAME_EVENT.LOOP) {
                        if (_0x56ffa2) {
                          _0x2e805b.play(_0x2273f.ANI_LABEL.LOOP);
                          _0x2e805b.getState(_0x2273f.ANI_LABEL.LOOP).wrapMode = _0x4f0878.WrapMode.Loop;
                        }
                      } else if (_0xc517ca == _0x2273f.ANI_FRAME_EVENT.B_TO_M) {
                        if (_0x71a242.m_awardBoard && _0x71a242.m_awardBoard.active) {
                          _0x13a184(_0x71a242.m_txtWinValue).by(0.25, {
                            'scale': _0x243100(1.5, 1.5, 1.5)
                          }).by(0.1, {
                            'scale': _0x243100(0.9, 0.9, 0.9)
                          }).start();
                        }
                        if (_0x21b617) {
                          _0x21b617();
                        }
                      } else if (_0xc517ca == _0x2273f.ANI_FRAME_EVENT.M_TO_S) {
                        if (_0x71a242.m_awardBoard && _0x71a242.m_awardBoard.active) {
                          _0x13a184(_0x71a242.m_txtWinValue).by(0.25, {
                            'scale': _0x243100(1.5, 1.5, 1.5)
                          }).by(0.1, {
                            'scale': _0x243100(0.9, 0.9, 0.9)
                          }).start();
                        }
                        if (!(null == _0x110fc6)) {
                          _0x110fc6();
                        }
                      } else if (_0xc517ca == _0x2273f.ANI_FRAME_EVENT.END) {
                        _0x56df80('ANI_FRAME_EVENT.END');
                        _0x71a242.OnAnimationEnd();
                        if (_0x71a242.m_winEffCbFunc) {
                          _0x71a242.m_winEffCbFunc();
                        }
                      }
                    }
                  });
                  _0x1d2d95.active = false;
                  _0x71a242.m_effectList[_0x2967f5] = _0x1d2d95;
                  _0x71a242.m_timeLineList[_0x2967f5] = _0x2e805b;
                  _0x3abdaf.OnLoaded(_0x303249);
                }
              });
              if (null == this.m_awardBoard) {
                _0x3abdaf.AddLoad(_0x303249);
                _0x2be50b.GameBundle.load(this.m_awardBoardFile, function (_0x45e65f, _0x5e2836) {
                  if (_0x45e65f) {
                    _0x59835f(_0x45e65f.message || _0x45e65f);
                  } else {
                    _0x71a242.m_awardBoard = _0x4497b0(_0x5e2836);
                    _0x71a242.addChild(_0x71a242.m_awardBoard);
                    _0x546bb1.SetZIndex(_0x71a242.m_awardBoard, _0x2273f.EFF_ZORDER.AWARD_BOARD);
                    _0x71a242.m_awardBoard.active = false;
                    _0x71a242.m_awardBoardTimeline = _0x71a242.m_awardBoard.getComponent(_0x4cb146);
                    _0x71a242.m_txtWinValue = _0x71a242.m_awardBoard.getChildByName("win_value_label");
                    _0x3abdaf.OnLoaded(_0x303249);
                  }
                });
              }
              if (-0x1 == _0x2986c6) {
                _0x3abdaf.StartLoad(_0x303249);
              } else {
                _0x3abdaf.AddOnLoadedCallback(_0x303249, _0x1c636c);
              }
            } else if (-0x1 == _0x2986c6) {
              _0x1c636c();
            } else {
              _0x3abdaf.AddOnLoadedCallback(_0x303249, _0x1c636c);
            }
          } else if (this.m_awardBoard) {
            this.m_awardBoard.active = false;
            this.m_awardBoardTimeline.stop();
          }
        };
        _0x25d351.WinEffect = function () {
          if (this.m_currentWinEffectTimeline) {
            this.m_currentWinEffectTimeline.play(_0x2273f.ANI_LABEL.ENDING, false);
          }
        };
        _0x25d351.SetWinValue = function (_0x393256, _0x22f817, _0x373080) {
          if (undefined === _0x22f817) {
            _0x22f817 = null;
          }
          if (undefined === _0x373080) {
            _0x373080 = 0x0;
          }
          this.m_moneyRealValue = _0x546bb1.strip(_0x393256);
          this.m_moneyRollValue = _0x373080;
          _0x22f817 = null == _0x22f817 && _0x2273f.MONEY_ROLL_TIME || _0x22f817;
          this.m_durRollMoneyTick = _0x546bb1.strip(_0x22f817);
        };
        _0x25d351.RollWinMoney = function (_0x1a35a9) {
          this.m_moneyRealValue = _0x546bb1.strip(this.m_moneyRealValue);
          this.m_moneyRollValue = _0x546bb1.strip(this.m_moneyRollValue);
          if (this.m_moneyRollValue < this.m_moneyRealValue) {
            var _0x4505c0 = _0x546bb1.divide(this.m_durRollMoneyTick, _0x546bb1.strip(_0x1a35a9));
            var _0x11e703 = _0x546bb1.divide(_0x546bb1.strip(this.m_moneyRealValue - this.m_moneyRollValue), _0x4505c0);
            var _0xe4d2b = _0x546bb1.FORMAT_NUMBER_TYPE.DEFINE_DOT;
            if (this.m_isAutoCheckFloat) {
              _0xe4d2b = this.m_moneyRealValue.toString().indexOf('.') > -0x1 ? _0x546bb1.FORMAT_NUMBER_TYPE.PERMANENT_DOT : _0x546bb1.FORMAT_NUMBER_TYPE.NONE_DOT;
            }
            this.m_moneyRollValue = _0x546bb1.strip(this.m_moneyRollValue + _0x11e703);
            if (this.m_moneyRollValue > this.m_moneyRealValue) {
              this.m_moneyRollValue = this.m_moneyRealValue;
            }
            this.SetLabelString(this.m_txtWinValue, this.m_moneyRollValue, _0xe4d2b);
            this.m_durRollMoneyTick = _0x546bb1.strip(this.m_durRollMoneyTick - _0x1a35a9);
          }
        };
        _0x25d351.SetLabelString = function (_0x458155, _0x485076, _0x2e4fa2) {
          if (undefined === _0x2e4fa2) {
            _0x2e4fa2 = null;
          }
          var _0x17ef2f = _0x458155.getComponent(_0x19ba3d);
          if (null != _0x17ef2f && null != _0x17ef2f) {
            if (null == _0x2e4fa2 || null == _0x2e4fa2) {
              _0x17ef2f.string = _0x485076.toString();
            } else {
              var _0x1ffd3e;
              if ("number" == typeof _0x485076) {
                _0x1ffd3e = _0x485076;
              } else {
                var _0x36c0a6 = _0x485076.replace(/,/g, '');
                _0x1ffd3e = isNaN(Number(_0x36c0a6)) ? 0x0 : Number(_0x36c0a6);
              }
              _0x17ef2f.string = _0x546bb1.FormatNumberThousands(_0x1ffd3e, _0x2e4fa2);
            }
            _0x546bb1.SetFont(_0x17ef2f);
          } else {
            _0x56df80("Warning!!!!!!!!!! SetLabelString: ", _0x458155);
          }
        };
        _0x25d351.SetWinMoneyToMax = function () {};
        _0x25d351.IsRollMoneyEnd = function () {
          return this.m_moneyRollValue == this.m_moneyRealValue;
        };
        _0x25d351.StopAnimation = function (_0x36319d) {
          if (this.m_currentWinEffectTimeline) {
            this.m_currentWinEffectTimeline.stop();
          }
          if (this.m_awardBoard) {
            this.m_awardBoard.active = false;
            this.m_awardBoardTimeline.stop();
          }
          if (0x1 != _0x36319d && this.m_winEffCbFunc) {
            this.m_winEffCbFunc();
          }
          this.m_winEffCbFunc = null;
          this.OnAnimationEnd();
        };
        _0x25d351.OnAnimationEnd = function () {
          if (this.m_currentWinEffect) {
            this.m_currentWinEffect.active = false;
          }
          if (this.m_bgMaskNode) {
            this.m_bgMaskNode.active = false;
          }
          this.m_moneyRealValue = 0x0;
          this.m_moneyRollValue = 0x0;
        };
        _0x25d351.playCoinEffect = function (_0x1afa41, _0x370de5) {
          var _0x269f40 = this;
          if (undefined === _0x370de5) {
            _0x370de5 = -0x1;
          }
          if (_0x2be50b.CommonBundle) {
            var _0x32c3c0 = _0x1afa41.level;
            var _0x230c9c = _0x1afa41.position;
            var _0x47a8b1 = _0x1afa41.time;
            if (null == _0x47a8b1) {
              _0x47a8b1 = 0x0;
            }
            var _0x59a735 = _0x1afa41.zOrder;
            if (null == _0x59a735) {
              _0x59a735 = 0x0;
            }
            var _0x59de4b = _0x1afa41.parent;
            this.stopCoinEffectImmly();
            var _0x15d902 = _0x2273f.COIN_EFFECT_LIST[_0x32c3c0];
            if (_0x15d902 = _0x546bb1.GetFilePath(_0x15d902)) {
              _0x56df80('~~~~~~~~~~~~~~~~~~~~~~', _0x1afa41, _0x47a8b1, _0x59a735);
              var _0x533d7c = function () {
                _0x269f40.m_coinEffectNode.setPosition(_0x243100(_0x230c9c.x, _0x230c9c.y));
                if (null == _0x59de4b || null == _0x59de4b) {
                  _0x269f40.addChild(_0x269f40.m_coinEffectNode);
                  _0x546bb1.SetZIndex(_0x269f40.m_coinEffectNode, 0x0);
                } else {
                  _0x59de4b.addChild(_0x269f40.m_coinEffectNode);
                  _0x546bb1.SetZIndex(_0x269f40.m_coinEffectNode, _0x59a735);
                }
                if (0x0 != _0x47a8b1) {
                  _0x13a184(_0x269f40).delay(_0x47a8b1).call(function () {
                    _0x269f40.stopCoinEffect();
                  }).start();
                }
              };
              if (-0x1 != _0x370de5) {
                _0x3abdaf.AddOnLoadedCallback(_0x370de5, _0x533d7c);
                _0x3abdaf.AddLoad(_0x370de5);
              }
              _0x2be50b.CommonBundle.load(_0x15d902, function (_0x5271e3, _0x3c7a0e) {
                _0x56df80("LoadRes ", _0x15d902);
                if (_0x5271e3) {
                  _0x59835f(_0x5271e3.message || _0x5271e3);
                } else {
                  _0x269f40.m_coinEffectNode = _0x4497b0(_0x3c7a0e);
                  if (_0x269f40.m_coinEffectNode) {
                    if (-0x1 == _0x370de5) {
                      _0x533d7c();
                    } else {
                      _0x3abdaf.OnLoaded(_0x370de5);
                    }
                  } else {
                    _0x56df80("SlotBottomBarView.playCoinEffect m_coinEffect is null");
                  }
                }
              });
            }
          }
        };
        _0x25d351.stopCoinEffectImmly = function () {
          if (null != this.m_coinEffectNode && this.m_coinEffectNode.removeFromParent) {
            this.m_coinEffectNode.removeFromParent();
            this.m_coinEffectNode = null;
          }
        };
        _0x25d351.stopCoinEffect = function () {
          if (null != this.m_coinEffectNode && this.m_coinEffectNode) {
            var _0x52e0d7 = this.m_coinEffectNode.getChildByName("Particle_1").getComponent(_0x539d82);
            var _0x5c1e24 = this.m_coinEffectNode.getChildByName("Particle_2").getComponent(_0x539d82);
            if (_0x52e0d7) {
              _0x52e0d7.stopSystem();
            }
            if (_0x5c1e24) {
              _0x5c1e24.stopSystem();
            }
          }
        };
        _0x25d351.ShowCommonEffect = function (_0x132d99, _0x28d952, _0x3afb63, _0x2ac78b) {
          if (undefined === _0x3afb63) {
            _0x3afb63 = null;
          }
          if (undefined === _0x2ac78b) {
            _0x2ac78b = null;
          }
          _0x3afb63 = _0x3afb63 || {};
          _0x2ac78b = _0x2ac78b || {};
          var _0x30e5d5 = new _0x4f13a8(_0x2273f.DesignSize.width / 0x2, _0x2273f.DesignSize.height);
          var _0x4d8aa6 = new _0x4f13a8(_0x2273f.DesignSize.width / 0x2 - 0xa, 0x91);
          var _0x2fb808 = undefined;
          var _0x4ad489 = _0x132d99 / _0x28d952;
          if (_0x127133) {
            _0x132d99 = _0x127133.GetDisplayValue(_0x132d99);
          }
          for (var _0x28551d = this.m_odds.length - 0x1; _0x28551d >= 0x0; _0x28551d--) {
            if (_0x4ad489 >= this.m_odds[_0x28551d]) {
              _0x2ac78b.level = this.m_coinEffects[_0x28551d];
              if (0x5 == this.m_coinEffects[_0x28551d]) {
                _0x2ac78b.position = _0x2ac78b.position ? _0x2ac78b.position : _0x30e5d5;
              } else {
                _0x2ac78b.position = _0x2ac78b.smallPosition ? _0x2ac78b.smallPosition : _0x2ac78b.position ? _0x2ac78b.position : _0x4d8aa6;
              }
              if (null == _0x2ac78b.time || _0x2ac78b.time <= 0x0) {
                _0x2ac78b.time = this.m_coinTimes[_0x28551d];
              }
              if (0x5 == this.m_coinEffects[_0x28551d]) {
                _0x3afb63.effectFile = this.m_winEffectFiles[_0x28551d];
                _0x3afb63.winValue = _0x132d99;
                this.SetWinType(_0x28551d);
                this.ShowWinAndCoinEffect(_0x3afb63, _0x2ac78b);
              } else {
                this.playCoinEffect(_0x2ac78b);
              }
              _0x2fb808 = this.m_soundNameByOdds[_0x28551d];
              break;
            }
          }
          if (null != _0x2fb808) {
            this.m_nowPlaySoundID = _0x25e445.Play(_0x2fb808, false);
          }
          if (null == _0x2ac78b.time) {
            _0x2ac78b.time = 0x0;
          }
          return _0x2ac78b.time;
        };
        _0x25d351.SkipEffect = function () {
          this.stopCoinEffect();
          _0x38e59e.instance.ActionManager.removeAllActionsFromTarget(this);
          if (this.m_currentWinEffectTimeline) {
            var _0x6a0c59 = this.m_currentWinEffectTimeline.name;
            var _0x4d556a = _0x546bb1.FORMAT_NUMBER_TYPE.DEFINE_DOT;
            if (!(_0x6a0c59 != _0x2273f.FILE_PATH.BIG_WIN && _0x6a0c59 != _0x2273f.FILE_PATH.MEGA_WIN && _0x6a0c59 != _0x2273f.FILE_PATH.SUPER_WIN)) {
              this.m_moneyRollValue = _0x546bb1.strip(this.m_moneyRollValue);
              this.m_moneyRealValue = _0x546bb1.strip(this.m_moneyRealValue);
              if (this.m_moneyRollValue == this.m_moneyRealValue) {
                this.m_awardBoardTimeline.play(_0x2273f.ANI_LABEL.ENDING);
                this.m_currentWinEffectTimeline.setCurrentTime(0x5);
              } else {
                if (this.m_isAutoCheckFloat) {
                  _0x4d556a = this.m_moneyRealValue.toString().indexOf('.') > -0x1 ? _0x546bb1.FORMAT_NUMBER_TYPE.PERMANENT_DOT : _0x546bb1.FORMAT_NUMBER_TYPE.NONE_DOT;
                }
                this.SetLabelString(this.m_txtWinValue, this.m_moneyRealValue, _0x4d556a);
                this.m_currentWinEffectTimeline.setCurrentTime(3.8);
              }
              this.m_currentWinEffectTimeline = null;
            }
            this.m_moneyRollValue = this.m_moneyRealValue;
          }
        };
        _0x25d351.SkipEffectSound = function () {
          if (this.m_nowPlaySoundID) {
            _0x25e445.Stop(this.m_nowPlaySoundID);
            this.m_nowPlaySoundID = null;
          }
        };
        _0x25d351.SetAutoCheckFloat = function (_0x2db223) {
          this.m_isAutoCheckFloat = _0x2db223;
        };
        _0x25d351.SetOdds = function (_0x47e73) {
          this.m_odds = _0x47e73;
        };
        _0x25d351.SetWinEffectFiles = function (_0x7a8502) {
          this.m_winEffectFiles = _0x7a8502;
        };
        _0x25d351.SetAwardBoardFile = function (_0xc0efeb) {
          this.m_awardBoardFile = _0xc0efeb;
        };
        _0x25d351.SetEffectLevels = function (_0x3501ef) {
          this.m_coinEffects = _0x3501ef;
        };
        _0x25d351.SetEffectTimes = function (_0x3cb140) {
          this.m_coinTimes = _0x3cb140;
        };
        _0x25d351.SetSoundNameByOdds = function (_0x34344f) {
          this.m_soundNameByOdds = _0x34344f;
        };
        _0x25d351.SetBGMaskNode = function (_0x5f20c4) {
          if (null != _0x5f20c4) {
            this.m_bgMaskNode = _0x5f20c4;
          }
        };
        _0x25d351.SetWinTextFontSize = function (_0x56a0fa) {
          if (this.m_txtWinValue) {
            this.m_txtWinValue.getComponent(_0x19ba3d).fontSize = _0x56a0fa;
          }
        };
        _0x25d351.SetWinType = function (_0x271b6) {
          this.m_winType = _0x271b6;
        };
        _0x48eefc(_0x2273f, [{
          'key': 'CoinEffectNode',
          'set': function (_0x18429d) {
            this.m_coinEffectNode = _0x18429d;
          }
        }]);
        return _0x2273f;
      }(_0x1e3e82);
      _0x11eaa6.DesignSize = {
        'width': 0x470,
        'height': 0x280
      };
      _0x11eaa6.SOUND_FILE = {
        'COMMON_SUPER_WIN': null,
        'COMMON_MEGA_WIN': null,
        'COMMON_COIN_SMALL': null,
        'COMMON_COIN_MEDIUM': null,
        'COMMON_BIG_WIN': null
      };
      _0x11eaa6.EFFECT_ROOT = "Astt/%s/effect/GameCommonEffect/";
      _0x11eaa6.FILE_PATH = {
        'BIG_WIN': "win/big_anim",
        'MEGA_WIN': "win/mega_anim",
        'SUPER_WIN': "win/super_anim",
        'JACKPOT': "win/effect_Jackpot",
        'BIG_TO_MEGA_WIN': "win/bigToMega_anim",
        'BIG_TO_SUPER_WIN': "win/bigToSuper_anim",
        'FIVE_OF_A_KIND': "win/5ofa_anim"
      };
      _0x2c8d3a = {
        [_0x11eaa6.FILE_PATH.BIG_WIN]: "Common_big_win",
        [_0x11eaa6.FILE_PATH.MEGA_WIN]: 'Common_mega_win',
        [_0x11eaa6.FILE_PATH.SUPER_WIN]: "Common_super_win",
        [_0x11eaa6.FILE_PATH.JACKPOT]: "Common_JP_win",
        [_0x11eaa6.FILE_PATH.BIG_TO_MEGA_WIN]: "Common_big_win",
        [_0x11eaa6.FILE_PATH.BIG_TO_SUPER_WIN]: "Common_big_win",
        [_0x11eaa6.FILE_PATH.FIVE_OF_A_KIND]: "Common_big_win"
      };
      _0x11eaa6.WIN_EFFECT_SOUND_NAME = _0x2c8d3a;
      _0x11eaa6.EffectViewUIName = _0x1389c6({
        'TXT_WIN_MONEY': "label_final_value",
        'PARTICLE': "Particle_"
      });
      _0x11eaa6.DEFAULT_Y = 0x190;
      _0x11eaa6.PARTICLE_AMOUNT_MAX = 0x2;
      _0x11eaa6.MONEY_ROLL_TIME = 0x3;
      _0x11eaa6.UPDATE_MONEY_CSB = _0x11eaa6.EFFECT_ROOT + "common_get_coin/Node_GetCoin01.csb";
      _0x11eaa6.COMMON_GET_COIN_CSB = _0x11eaa6.EFFECT_ROOT + "common_get_coin/Node_GetCoin02.csb";
      _0x11eaa6.GET_COIN_PARTICLE_CSB = _0x11eaa6.EFFECT_ROOT + 'common_get_coin/Particle/_V3_GetCoin02.plist';
      _0x11eaa6.ROTATE_COIN_CSB = _0x11eaa6.EFFECT_ROOT + "common_get_coin/Node_CoinRotation01.csb";
      _0x11eaa6.TRIAL_COIN_CSB = _0x11eaa6.EFFECT_ROOT + "common_get_coin/Node_GetTrialCoin.csb";
      _0x11eaa6.COIN_APPEAR_PARTICLE_CSB = _0x11eaa6.EFFECT_ROOT + "common_get_coin/Particle/New_CoinShine03.plist";
      _0x11eaa6.COMMON_COIN_AMOUNT = 0x8;
      _0x11eaa6.ANI_LABEL = {
        'ACT': 'main',
        'LOOP': "loop",
        'ENDING': "ending"
      };
      _0x11eaa6.ANI_FRAME_EVENT = {
        'MID': "AniMid",
        'B_TO_M': "AniBtoM",
        'M_TO_S': 'AniMtoS',
        'ENDING': 'AniEnding',
        'END': "AniEnd",
        'LOOP': "AniLoop"
      };
      _0x11eaa6.EFF_ZORDER = {
        'COIN_FALL': 0x1,
        'WIN_EFFECT': 0x2,
        'AWARD_BOARD': 0x3,
        'COMMON_GET_COIN': 0x4,
        'GET_TRIAL_COIN': 0x5
      };
      _0x11eaa6.COIN_EFFECT_LIST = {
        0x1: _0x11eaa6.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_1",
        0x2: _0x11eaa6.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_2",
        0x3: _0x11eaa6.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_3",
        0x4: _0x11eaa6.EFFECT_ROOT + 'coin/2_BigGoldCoinFX_1',
        0x5: _0x11eaa6.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_1",
        0x6: _0x11eaa6.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_2",
        0x7: _0x11eaa6.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_3"
      };
      _0x11eaa6.WIN_TYPE = {
        'BIG': 0x2,
        'MEGA': 0x3,
        'SUPER': 0x4
      };
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "5cf68x6BTZHP5QWXU3HRb/c", "FeaturePageComponent", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "e33faPhWqxMHa92Db40WLqj", 'LabelSpacingX', undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, 'a6f15DRaTNJEaqvyk6QuIo3', 'LangImg', undefined);
      var _0x5e6304;
      !function (_0x112c9c) {
        _0x112c9c[_0x112c9c.PNG = 0x0] = "PNG";
        _0x112c9c[_0x112c9c.JPG = 0x1] = "JPG";
      }(_0x5e6304 || (_0x5e6304 = {}));
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, '3638c7rYSpEjZ7x8wtqusdg', 'RenderDataBump', undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "75a969XvAFPfax+l1fDcqo9", "ScrollEventHandler", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "eb577rwRR5ASa6OivNuPgEY", "SeriesComponent", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "18f47v83XtI64h+ISwRgq3A", "BoneFollow", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "44834DdFVNM2reoglp7HL82", "NewBoneFollow", undefined);
      var _0x599d20;
      !function (_0x48fdaf) {
        _0x48fdaf[_0x48fdaf["default"] = 0x1] = "default";
      }(_0x599d20 || (_0x599d20 = {}));
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "2da2cEqApNLm7hZxNo+Lfkx", 'NewSlotColorFollow', undefined);
      var _0x14ce48;
      !function (_0x5bd353) {
        _0x5bd353[_0x5bd353["default"] = 0x1] = "default";
      }(_0x14ce48 || (_0x14ce48 = {}));
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "866f1RjwMhFfapt6JLtipxM", "SkeletonSync", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "e2171n/i+xGsoWeQMXewobE", "SlotActivator", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "e23desmKVBLjKgDg5KLcySp", "SlotColorFollow", undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, 'ff032nME8lBJKBpMlK8O/1z', 'SlotCulling', undefined);
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "f8b5e4BLTJNX7FPcFOEaBkq", "ZipBundleLoader", undefined);
      var _0x1fc2f3 = new Map();
      var _0x2bf2b1 = new Map();
      var _0x38f424 = new Map();
      var _0x355de8 = function () {
        function _0x2e75b5() {
          this.loadedZipNames = new Array();
        }
        var _0x2c666c = _0x2e75b5.prototype;
        _0x2c666c.downloadZip = function (_0x40818e, _0x4a41aa) {
          return new Promise(function (_0x295a5d) {
            var _0x23d9ec = _0x40818e.match(/[^/]+$/);
            if (null !== _0x23d9ec) {
              var _0x253f59 = '' + _0x23d9ec[0x0] + _0x4a41aa + ".zip";
              _0x271f38.downloader.downloadFile(_0x40818e + '/' + _0x253f59, {
                'xhrResponseType': "arraybuffer"
              }, null, function (_0x282de6, _0x178341) {
                _0x295a5d(_0x178341);
              });
            } else {
              _0x295a5d(null);
            }
          });
        };
        _0x2c666c.loadZip = function () {
          var _0x2171c2 = _0x23d9d7(_0x1a789f().mark(function _0x1b5501(_0x5a9850, _0x1bfdd1) {
            var _0x17761c;
            var _0x511e38;
            var _0x513059;
            return _0x1a789f().wrap(function (_0x3fa99e) {
              for (;;) {
                switch (_0x3fa99e.prev = _0x3fa99e.next) {
                  case 0x0:
                    _0x17761c = _0x1bfdd1 ? '.' + _0x1bfdd1 : '';
                    _0x3fa99e.next = 0x3;
                    return this.downloadZip(_0x5a9850, _0x17761c);
                  case 0x3:
                    if (null !== (_0x511e38 = _0x3fa99e.sent)) {
                      _0x513059 = _0x5a9850.replace(/(.*?)\/assets\//, "assets/");
                      globalThis.fflate.unzip(new Uint8Array(_0x511e38), function (_0x2e2026, _0x23a112) {
                        if (_0x2e2026) {
                          console.warn("Unzip failed:", _0x2e2026.message);
                        } else {
                          Object.keys(_0x23a112).forEach(function (_0x3b75a8) {
                            _0x1fc2f3.set(_0x5a9850 + '/' + _0x3b75a8, _0x23a112[_0x3b75a8]);
                            _0x1fc2f3.set(_0x513059 + '/' + _0x3b75a8, _0x23a112[_0x3b75a8]);
                          });
                        }
                      });
                    }
                  case 0x5:
                  case "end":
                    return _0x3fa99e.stop();
                }
              }
            }, _0x1b5501, this);
          }));
          return function (_0x32b737, _0x35970b) {
            return _0x2171c2.apply(this, arguments);
          };
        }();
        _0x2c666c.init = function () {
          if (globalThis.fflate) {
            var _0x451fd6 = Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, "response");
            Object.defineProperty(XMLHttpRequest.prototype, "response", {
              'get': function () {
                return this.ZipCacheUrl ? _0x2bf2b1.get(this.ZipCacheUrl) : _0x451fd6.get.call(this);
              },
              'set': function (_0xa70262) {},
              'configurable': true
            });
            var _0x33edd3 = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function (_0x2a9f63, _0x52fa8a, _0x2edcfb, _0x5691fc, _0x22cce4) {
              function _0x5a8c4e() {
                var _0x7304ea = this.status >= 0xc8 && this.status < 0x12c || 0x130 == this.status;
                if (this.readyState == XMLHttpRequest.DONE && !_0x7304ea && 0x194 != this.status && _0x52fa8a.includes('http')) {
                  _0x502a81(0x2bd, this.status);
                  _0x502a81(0x2be, _0x52fa8a);
                }
                this.removeEventListener("load", _0x5a8c4e);
              }
              if (_0x1fc2f3.has(_0x52fa8a)) {
                this.ZipCacheUrl = _0x52fa8a;
              }
              this.addEventListener("load", _0x5a8c4e.bind(this));
              return _0x33edd3.apply(this, arguments);
            };
            var _0x17ea59 = XMLHttpRequest.prototype.send;
            XMLHttpRequest.prototype.send = _0x23d9d7(_0x1a789f().mark(function _0xb22a26(_0x3d0ef2) {
              var _0x1af47a;
              var _0x69cb6e;
              var _0x2a5231;
              var _0x1b41f3;
              var _0x123bb1;
              var _0x205d68;
              var _0x2655d1;
              var _0x3b0659;
              return _0x1a789f().wrap(function (_0x161a13) {
                for (;;) {
                  switch (_0x161a13.prev = _0x161a13.next) {
                    case 0x0:
                      if (!this.ZipCacheUrl) {
                        _0x161a13.next = 0x1a;
                        break;
                      }
                      if (_0x2bf2b1.has(this.ZipCacheUrl)) {
                        _0x161a13.next = 0x18;
                        break;
                      }
                      _0x1af47a = this.responseType;
                      _0x69cb6e = _0x1fc2f3.get(this.ZipCacheUrl);
                      _0x2a5231 = null;
                      _0x161a13.t0 = _0x1af47a;
                      _0x161a13.next = "arraybuffer" === _0x161a13.t0 ? 0x8 : "json" === _0x161a13.t0 ? 0xa : "text" === _0x161a13.t0 ? 0xe : 0x11;
                      break;
                    case 0x8:
                      _0x2a5231 = _0x69cb6e.buffer ? _0x69cb6e.buffer : _0x69cb6e;
                      return _0x161a13.abrupt("break", 0x12);
                    case 0xa:
                      _0x1b41f3 = new TextDecoder();
                      _0x123bb1 = _0x1b41f3.decode(_0x69cb6e);
                      _0x2a5231 = JSON.parse(_0x123bb1);
                      return _0x161a13.abrupt('break', 0x12);
                    case 0xe:
                      _0x205d68 = new TextDecoder();
                      _0x2a5231 = _0x205d68.decode(_0x69cb6e);
                      return _0x161a13.abrupt("break", 0x12);
                    case 0x11:
                      console.error("Unknown type in zipCache:", _0x1af47a);
                    case 0x12:
                      if (_0x2655d1 = _0x38f424.get(this.ZipCacheUrl)) {
                        _0x2bf2b1["delete"](this.ZipCacheUrl + "@version" + _0x2655d1);
                        _0x38f424["delete"](this.ZipCacheUrl);
                      }
                      _0x3b0659 = performance.now();
                      _0x38f424.set(this.ZipCacheUrl, _0x3b0659);
                      this.ZipCacheUrl = this.ZipCacheUrl + "@version" + _0x3b0659;
                      _0x2bf2b1.set(this.ZipCacheUrl, _0x2a5231);
                    case 0x18:
                      this.onload();
                      return _0x161a13.abrupt("return");
                    case 0x1a:
                      return _0x161a13.abrupt("return", _0x17ea59.apply(this, arguments));
                    case 0x1b:
                    case 'end':
                      return _0x161a13.stop();
                  }
                }
              }, _0xb22a26, this);
            }));
          } else {
            console.error("fflate is not found.");
          }
        };
        return _0x2e75b5;
      }();
      function _0x502a81(_0x3c51ac, _0x1e3eb7) {
        if (!_0x5bde3e.isNative) {
          var _0x4ee240 = 'https://' + window.location.host + '/';
          if (-0x1 == _0x4ee240.indexOf("localhost") && 0x1 != /^http(s)?:\/\/([0-9]{1,3}\.){3}[0-9]{1,3}(:[0-9]+)?\/.*?$/.test(_0x4ee240)) {
            var _0x30694b = 0x0;
            switch (_0x5bde3e.browserType) {
              case _0x5bde3e.BrowserType.CHROME:
                _0x30694b = 0x1;
                break;
              case _0x5bde3e.BrowserType.SAFARI:
                _0x30694b = 0x2;
                break;
              case _0x5bde3e.BrowserType.IE:
                _0x30694b = 0x3;
                break;
              case _0x5bde3e.BrowserType.UC:
                _0x30694b = 0x4;
                break;
              case _0x5bde3e.BrowserType.QQ:
              case _0x5bde3e.BrowserType.MOBILE_QQ:
                _0x30694b = 0x5;
                break;
              case _0x5bde3e.BrowserType.FIREFOX:
                _0x30694b = 0x6;
            }
            var _0x343bc7 = 0x0;
            switch (_0x5bde3e.os) {
              case _0x5bde3e.OS.ANDROID:
                _0x343bc7 = 0x1;
                break;
              case _0x5bde3e.OS.IOS:
                _0x343bc7 = 0x2;
                break;
              case _0x5bde3e.OS.WINDOWS:
                _0x343bc7 = 0x3;
                break;
              default:
                _0x343bc7 = 0x0;
            }
            var _0x270152 = _0x6631bb("apiId") || '-1';
            var _0x47650b = _0x6631bb('ssoKey') || '1';
            var _0x43b1ff = _0x6631bb("gameID") || '-1';
            var _0x5d5eb9 = "https://" + (_0x6631bb("domain_platform") || _0x6631bb('gs') || "gnidnawcs").split('').reverse().join('') + "/webservice/event/assetUpdate?";
            _0x59d17d(_0x5d5eb9 += "?AccountID=-1&GameID=" + _0x43b1ff + "&GameVersion=" + new Date().getTime() + '&EventID=' + _0x3c51ac + '&EventValue=' + _0x1e3eb7 + "&BrowserSystem=" + _0x30694b + "&DeviceSystem=" + _0x343bc7 + "&CreateTime=" + new Date().toISOString() + '&Screen=0&SSOKey=' + _0x47650b + "&ApiId=" + _0x270152 + "&LogIndex=11");
          }
        }
      }
      function _0x59d17d(_0x3a2d5e) {
        var _0x2c98ef = {
          'Accept': "application/json, text/javascript, text/plain"
        };
        var _0x3d487b = new XMLHttpRequest();
        _0x3d487b.open("GET", _0x3a2d5e, true);
        if (_0x2c98ef) {
          Object.keys(_0x2c98ef).forEach(function (_0x2faf87) {
            return _0x3d487b.setRequestHeader(_0x2faf87, _0x2c98ef[_0x2faf87]);
          });
        }
        _0x3d487b.timeout = 0x1388;
        _0x3d487b.onload = function () {};
        _0x3d487b.onerror = function () {};
        _0x3d487b.ontimeout = function () {};
        _0x3d487b.send();
      }
      function _0x6631bb(_0x5d5650, _0x1ef15c) {
        if (undefined === _0x1ef15c) {
          _0x1ef15c = null;
        }
        if (!_0x1ef15c) {
          _0x1ef15c = _0x41f46d();
        }
        _0x5d5650 = _0x5d5650.replace(/[[\]]/g, "\\$&");
        var _0x3c8611 = new RegExp("[?&]" + _0x5d5650 + "(=([^&#]*)|&|#|$)").exec(_0x1ef15c);
        return _0x3c8611 ? _0x3c8611[0x2] ? decodeURIComponent(_0x3c8611[0x2].replace(/\+/g, " ")) : '' : null;
      }
      function _0x41f46d() {
        var _0x2ee2fa = window.location.href;
        var _0x5cb4dc = this.GetLinkParameterByName('replaydata', _0x2ee2fa);
        if (!_0x5cb4dc) {
          return _0x2ee2fa;
        }
        var _0x39f4f1 = '0'.charCodeAt(0x0);
        var _0x42498b = '9'.charCodeAt(0x0);
        var _0x4a290b = 'a'.charCodeAt(0x0);
        var _0x362fef = 'z'.charCodeAt(0x0);
        var _0x4950d8 = 'A'.charCodeAt(0x0);
        var _0x74b5b9 = 'Z'.charCodeAt(0x0);
        var _0x3967c7 = '';
        for (var _0x214cac = 0x0; _0x214cac < _0x5cb4dc.length; _0x214cac++) {
          var _0x4c1931 = _0x5cb4dc.charCodeAt(_0x214cac);
          if (_0x4c1931 >= _0x39f4f1 && _0x4c1931 <= _0x42498b) {
            _0x4c1931 = _0x42498b - (_0x4c1931 - _0x39f4f1);
            _0x3967c7 += String.fromCharCode(_0x4c1931);
          } else if (_0x4c1931 >= _0x4a290b && _0x4c1931 <= _0x362fef && _0x214cac % 0x2 == 0x0) {
            _0x4c1931 = _0x362fef - (_0x4c1931 - _0x4a290b);
            _0x3967c7 += String.fromCharCode(_0x4c1931);
          } else if (_0x4c1931 >= _0x4950d8 && _0x4c1931 <= _0x74b5b9 && _0x214cac % 0x3 == 0x0) {
            _0x4c1931 = _0x74b5b9 - (_0x4c1931 - _0x4950d8);
            _0x3967c7 += String.fromCharCode(_0x4c1931);
          } else {
            _0x3967c7 += String.fromCharCode(_0x4c1931);
          }
        }
        var _0x4a0e16 = _0x2ee2fa.split("replaydata=" + _0x5cb4dc);
        _0x4a0e16.join('');
        return _0x4a0e16 + atob(_0x3967c7);
      }
      var _0x23237b = globalThis.__zipBundleLoader;
      var _0xf9862d;
      var _0x432854;
      var _0x28a315;
      var _0x51df34;
      var _0x28392b;
      var _0x3bc531;
      var _0x281610;
      var _0x55c3c8;
      var _0x1e9853;
      var _0x346278;
      var _0x3132f0;
      var _0x15eba0;
      var _0x2bd92f;
      var _0x5689d1;
      var _0x93b3f8;
      var _0x386fea;
      var _0xa5b879;
      var _0x3b490c;
      if (globalThis.fflate && !_0x23237b) {
        _0x23237b = new _0x355de8();
        globalThis.__zipBundleLoader = _0x23237b;
        _0x23237b.init();
      }
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "c933866GvpLKaZlVxLlOz0C", "FeatureManagerComponent", undefined);
      var _0x3b711d = _0x6126fa.ccclass;
      var _0x23c31c = _0x6126fa.property;
      var _0xa48c4b;
      !function (_0x3edd11) {
        _0x3edd11[_0x3edd11.CommonMainBundle = 0x0] = "CommonMainBundle";
        _0x3edd11[_0x3edd11.CommonBundle = 0x1] = "CommonBundle";
        _0x3edd11[_0x3edd11.OtherBundle = 0x2] = "OtherBundle";
        _0x3edd11[_0x3edd11.DefaultLangBundle = 0x3] = "DefaultLangBundle";
        _0x3edd11[_0x3edd11.LangTextBundle = 0x4] = "LangTextBundle";
        _0x3edd11[_0x3edd11.GameBundle = 0x5] = 'GameBundle';
      }(_0xa48c4b || (_0xa48c4b = {}));
      var _0x2be8af;
      var _0x577476;
      !function (_0x393f24) {
        _0x393f24[_0x393f24.None = 0x0] = "None";
        _0x393f24[_0x393f24.AutoPlaySettingPanel = 0x1] = 'AutoPlaySettingPanel';
        _0x393f24[_0x393f24.AutoPlaySettingPanel_DFI = 0x2] = "AutoPlaySettingPanel_DFI";
        _0x393f24[_0x393f24.AutoPlaySettingPanel_DFIII = 0x3] = 'AutoPlaySettingPanel_DFIII';
        _0x393f24[_0x393f24.AutoPlaySettingPanel_BS = 0x4] = "AutoPlaySettingPanel_BS";
        _0x393f24[_0x393f24.AutoPlaySetting_AG2 = 0x5] = "AutoPlaySetting_AG2";
        _0x393f24[_0x393f24.AutoPlaySetting_FD = 0x6] = 'AutoPlaySetting_FD';
        _0x393f24[_0x393f24.AutoPlaySettingPanel_MS = 0x7] = "AutoPlaySettingPanel_MS";
      }(_0x2be8af || (_0x2be8af = {}));
      (function (_0x50f557) {
        _0x50f557[_0x50f557.None = 0x0] = "None";
        _0x50f557[_0x50f557.Dark = 0x1] = "Dark";
      })(_0x577476 || (_0x577476 = {}));
      _0xf9862d = _0x3b711d("StyleSetting");
      _0x432854 = _0x23c31c({
        'type': _0x2f2a21,
        'tooltip': "是否有骰子造型"
      });
      _0x28a315 = _0x23c31c({
        'type': _0x2f2a21,
        'tooltip': "是否有萬聖造型"
      });
      _0x51df34 = _0x23c31c({
        'type': _0x2f2a21,
        'tooltip': "是否有聖誕造型"
      });
      _0x28392b = _0x23c31c({
        'type': _0x2f2a21,
        'tooltip': '是否有OKBET廠商造型'
      });
      _0x3bc531 = _0x23c31c({
        'type': _0x1389c6(_0x577476),
        'tooltip': '系列'
      });
      _0x281610 = function () {
        _0x40ccb3(this, "HasDice", _0x55c3c8, this);
        _0x40ccb3(this, "HasHolloween", _0x1e9853, this);
        _0x40ccb3(this, "HasXmas", _0x346278, this);
        _0x40ccb3(this, "HasOkbet", _0x3132f0, this);
        _0x40ccb3(this, 'Series', _0x15eba0, this);
      };
      _0x55c3c8 = _0x1c868d(_0x281610.prototype, "HasDice", [_0x432854], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x1e9853 = _0x1c868d(_0x281610.prototype, "HasHolloween", [_0x28a315], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x346278 = _0x1c868d(_0x281610.prototype, "HasXmas", [_0x51df34], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x3132f0 = _0x1c868d(_0x281610.prototype, "HasOkbet", [_0x28392b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x15eba0 = _0x1c868d(_0x281610.prototype, 'Series', [_0x3bc531], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return _0x577476.None;
        }
      });
      _0x2bd92f = _0x3b711d("PlayTypeSetting");
      _0x5689d1 = _0x23c31c({
        'type': _0x2f2a21,
        'tooltip': "Match"
      });
      _0x93b3f8 = _0x23c31c({
        'type': _0x2f2a21,
        'tooltip': "Break"
      });
      _0x386fea = function () {
        _0x40ccb3(this, "Match", _0xa5b879, this);
        _0x40ccb3(this, "Break", _0x3b490c, this);
      };
      _0xa5b879 = _0x1c868d(_0x386fea.prototype, "Match", [_0x5689d1], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x3b490c = _0x1c868d(_0x386fea.prototype, 'Break', [_0x93b3f8], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x289c18._RF.pop();
      _0x289c18._RF.push({}, "89025dALbBFj7AFo+6o3xYM", "SwipeScreen", undefined);
      _0x289c18._RF.pop();
    }
  };
});
(function (_0x5ccd5d) {
  _0x5ccd5d("virtual:///prerequisite-imports/main", 'chunks:///main.js');
})(function (_0x1e5645, _0x94430b) {
  System.register(_0x1e5645, [_0x94430b], function (_0x102f8b, _0x446782) {
    return {
      'setters': [function (_0x45d731) {
        var _0x58e5a8 = {};
        for (var _0x8bffcf in _0x45d731) {
          if (_0x8bffcf !== "default" && _0x8bffcf !== "__esModule") {
            _0x58e5a8[_0x8bffcf] = _0x45d731[_0x8bffcf];
          }
        }
        _0x102f8b(_0x58e5a8);
      }],
      'execute': function () {}
    };
  });
});