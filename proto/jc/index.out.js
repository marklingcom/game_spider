System.register("chunks:///main.js", ['cc'], function (_0xb4daf6, _0x5ca317) {
  'use strict';

  var _0x3db04a;
  var _0x5d1a01;
  var _0x15933b;
  var _0x55da1e;
  var _0xead8bf;
  var _0x1971e0;
  var _0x3dc7e8;
  var _0x70e19b;
  var _0x43f438;
  var _0x2387f8;
  var _0x40bacd;
  var _0x3e8f31;
  var _0x468343;
  var _0x502387;
  var _0x126986;
  var _0x2fc2f7;
  var _0x328c5f;
  var _0x1656ca;
  var _0x5d000f;
  var _0x50b2c7;
  var _0x2cb940;
  var _0x523ca8;
  var _0x43508a;
  var _0x34dc9d;
  var _0x4e23dc;
  var _0x4a7b33;
  var _0x4ca72a;
  var _0x3ce4da;
  var _0x46b79d;
  var _0x37eba0;
  var _0x27831c;
  var _0x5e80ec;
  var _0x4e7326;
  var _0x341d90;
  var _0x25a4a1;
  var _0x5ade6c;
  var _0x41a45e;
  var _0x4b784e;
  var _0x32d80e;
  var _0x4d24d6;
  var _0x1fc3c1;
  var _0x4a273f;
  var _0x3e97fb;
  var _0x1e468e;
  var _0x2a97d9;
  var _0x3e0fd3;
  var _0x2f0625;
  var _0x1e223d;
  var _0x4151a5;
  var _0x7dfc7e;
  var _0x45d5a9;
  var _0x3eeb0d;
  var _0x2d96f1;
  var _0x3d3709;
  var _0x4f5581;
  var _0x4e86fb;
  var _0x52d31c;
  var _0x2b6a20;
  var _0x38106c;
  var _0x1cd7ab;
  var _0x4a1d16;
  var _0x19400b;
  var _0x4cf417;
  var _0x5a5f4f;
  var _0x1194f7;
  var _0x52840e;
  var _0x3c8689;
  var _0x5dc32f;
  var _0x1e756d;
  var _0x5a520f;
  var _0x37669a;
  return {
    'setters': [function (_0xdc31fc) {
      _0x3db04a = _0xdc31fc.cclegacy;
      _0x5d1a01 = _0xdc31fc._decorator;
      _0x15933b = _0xdc31fc.Enum;
      _0x55da1e = _0xdc31fc.color;
      _0xead8bf = _0xdc31fc.Component;
      _0x1971e0 = _0xdc31fc.sp;
      _0x3dc7e8 = _0xdc31fc.error;
      _0x70e19b = _0xdc31fc.tween;
      _0x43f438 = _0xdc31fc.warn;
      _0x2387f8 = _0xdc31fc.UITransform;
      _0x40bacd = _0xdc31fc.v3;
      _0x3e8f31 = _0xdc31fc.v2;
      _0x468343 = _0xdc31fc.macro;
      _0x502387 = _0xdc31fc.Label;
      _0x126986 = _0xdc31fc.CCFloat;
      _0x2fc2f7 = _0xdc31fc.log;
      _0x328c5f = _0xdc31fc.Node;
      _0x1656ca = _0xdc31fc.director;
      _0x5d000f = _0xdc31fc.Director;
      _0x50b2c7 = _0xdc31fc.Vec3;
      _0x2cb940 = _0xdc31fc.UIRenderer;
      _0x523ca8 = _0xdc31fc.UIOpacity;
      _0x43508a = _0xdc31fc.Sprite;
      _0x34dc9d = _0xdc31fc.Animation;
      _0x4e23dc = _0xdc31fc.RichText;
      _0x4a7b33 = _0xdc31fc.CCBoolean;
      _0x4ca72a = _0xdc31fc.Tween;
      _0x3ce4da = _0xdc31fc.Color;
      _0x46b79d = _0xdc31fc.JsonAsset;
      _0x37eba0 = _0xdc31fc.math;
      _0x27831c = _0xdc31fc.SpriteFrame;
      _0x5e80ec = _0xdc31fc.Prefab;
      _0x4e7326 = _0xdc31fc.instantiate;
      _0x341d90 = _0xdc31fc.Font;
      _0x25a4a1 = _0xdc31fc.Size;
      _0x5ade6c = _0xdc31fc.CCString;
      _0x41a45e = _0xdc31fc.Button;
      _0x4b784e = _0xdc31fc.SpriteAtlas;
      _0x32d80e = _0xdc31fc.input;
      _0x4d24d6 = _0xdc31fc.Input;
      _0x1fc3c1 = _0xdc31fc.KeyCode;
      _0x4a273f = _0xdc31fc.screen;
      _0x3e97fb = _0xdc31fc.view;
      _0x1e468e = _0xdc31fc.ResolutionPolicy;
      _0x2a97d9 = _0xdc31fc.ccenum;
      _0x3e0fd3 = _0xdc31fc.EventHandler;
      _0x2f0625 = _0xdc31fc.assetManager;
      _0x1e223d = _0xdc31fc.lerp;
      _0x4151a5 = _0xdc31fc.NodeEventType;
      _0x7dfc7e = _0xdc31fc.TransformBit;
      _0x45d5a9 = _0xdc31fc.Material;
      _0x3eeb0d = _0xdc31fc.Gradient;
      _0x2d96f1 = _0xdc31fc.v4;
      _0x3d3709 = _0xdc31fc.Texture2D;
      _0x4f5581 = _0xdc31fc.clamp01;
      _0x4e86fb = _0xdc31fc.EffectAsset;
      _0x52d31c = _0xdc31fc.CCInteger;
      _0x2b6a20 = _0xdc31fc.ImageAsset;
      _0x38106c = _0xdc31fc.AnimationClip;
      _0x1cd7ab = _0xdc31fc.ParticleSystem2D;
      _0x4a1d16 = _0xdc31fc.Vec2;
      _0x19400b = _0xdc31fc.TweenSystem;
      _0x4cf417 = _0xdc31fc.ScrollView;
      _0x5a5f4f = _0xdc31fc.isValid;
      _0x1194f7 = _0xdc31fc.CCClass;
      _0x52840e = _0xdc31fc.sys;
      _0x3c8689 = _0xdc31fc.js;
      _0x5dc32f = _0xdc31fc.settings;
      _0x1e756d = _0xdc31fc.Settings;
      _0x5a520f = _0xdc31fc.VERSION;
      _0x37669a = _0xdc31fc.find;
    }],
    'execute': function () {
      function _0x288614() {
        _0x288614 = function () {
          return _0x4c5c50;
        };
        var _0x4c5c50 = {};
        var _0x1537ff = Object.prototype;
        var _0x3c53e4 = _0x1537ff.hasOwnProperty;
        var _0x21d699 = 'function' == typeof Symbol ? Symbol : {};
        var _0x467cc7 = _0x21d699.iterator || "@@iterator";
        var _0x3ba5a6 = _0x21d699.asyncIterator || "@@asyncIterator";
        var _0x437c28 = _0x21d699.toStringTag || "@@toStringTag";
        function _0xc4dc0f(_0x47cd6f, _0x4ac93b, _0x238648) {
          Object.defineProperty(_0x47cd6f, _0x4ac93b, {
            'value': _0x238648,
            'enumerable': true,
            'configurable': true,
            'writable': true
          });
          return _0x47cd6f[_0x4ac93b];
        }
        try {
          _0xc4dc0f({}, '');
        } catch (_0x15a601) {
          _0xc4dc0f = function (_0x369328, _0x48e1b1, _0x103fb9) {
            return _0x369328[_0x48e1b1] = _0x103fb9;
          };
        }
        function _0x14d97b(_0x4ed76e, _0x3576f4, _0x13be20, _0x4f0493) {
          var _0x301e1b = _0x3576f4 && _0x3576f4.prototype instanceof _0x1ca2e7 ? _0x3576f4 : _0x1ca2e7;
          var _0x248f86 = Object.create(_0x301e1b.prototype);
          var _0x319d12 = new _0x23ef78(_0x4f0493 || []);
          _0x248f86._invoke = function (_0x5d5f9f, _0x4726ba, _0x37108d) {
            var _0x1447f4 = "suspendedStart";
            return function (_0x3549d6, _0x4940e0) {
              if ("executing" === _0x1447f4) {
                throw new Error("Generator is already running");
              }
              if ("completed" === _0x1447f4) {
                if ("throw" === _0x3549d6) {
                  throw _0x4940e0;
                }
                return {
                  'value': undefined,
                  'done': true
                };
              }
              _0x37108d.method = _0x3549d6;
              for (_0x37108d.arg = _0x4940e0;;) {
                var _0x2aef1b = _0x37108d.delegate;
                if (_0x2aef1b) {
                  var _0x44ec1f = _0x50ac8d(_0x2aef1b, _0x37108d);
                  if (_0x44ec1f) {
                    if (_0x44ec1f === _0x245e66) {
                      continue;
                    }
                    return _0x44ec1f;
                  }
                }
                if ("next" === _0x37108d.method) {
                  _0x37108d.sent = _0x37108d._sent = _0x37108d.arg;
                } else {
                  if ("throw" === _0x37108d.method) {
                    if ("suspendedStart" === _0x1447f4) {
                      _0x1447f4 = "completed";
                      throw _0x37108d.arg;
                    }
                    _0x37108d.dispatchException(_0x37108d.arg);
                  } else if ("return" === _0x37108d.method) {
                    _0x37108d.abrupt("return", _0x37108d.arg);
                  }
                }
                _0x1447f4 = "executing";
                var _0x5a92ec = _0x5e5ea8(_0x5d5f9f, _0x4726ba, _0x37108d);
                if ("normal" === _0x5a92ec.type) {
                  _0x1447f4 = _0x37108d.done ? "completed" : "suspendedYield";
                  if (_0x5a92ec.arg === _0x245e66) {
                    continue;
                  }
                  return {
                    'value': _0x5a92ec.arg,
                    'done': _0x37108d.done
                  };
                }
                if ("throw" === _0x5a92ec.type) {
                  _0x1447f4 = "completed";
                  _0x37108d.method = "throw";
                  _0x37108d.arg = _0x5a92ec.arg;
                }
              }
            };
          }(_0x4ed76e, _0x13be20, _0x319d12);
          return _0x248f86;
        }
        function _0x5e5ea8(_0x4478b7, _0x5736d6, _0x29deaf) {
          try {
            return {
              'type': "normal",
              'arg': _0x4478b7.call(_0x5736d6, _0x29deaf)
            };
          } catch (_0x576c69) {
            return {
              'type': 'throw',
              'arg': _0x576c69
            };
          }
        }
        _0x4c5c50.wrap = _0x14d97b;
        var _0x245e66 = {};
        function _0x1ca2e7() {}
        function _0x48710d() {}
        function _0x1de886() {}
        var _0x40fd0a = {};
        _0xc4dc0f(_0x40fd0a, _0x467cc7, function () {
          return this;
        });
        var _0x41b601 = Object.getPrototypeOf;
        var _0x2b58d6 = _0x41b601 && _0x41b601(_0x41b601(_0x4f018b([])));
        if (_0x2b58d6 && _0x2b58d6 !== _0x1537ff && _0x3c53e4.call(_0x2b58d6, _0x467cc7)) {
          _0x40fd0a = _0x2b58d6;
        }
        var _0x5e5032 = _0x1de886.prototype = _0x1ca2e7.prototype = Object.create(_0x40fd0a);
        function _0x4494ab(_0x27b5a8) {
          ["next", "throw", "return"].forEach(function (_0x4a07e1) {
            _0xc4dc0f(_0x27b5a8, _0x4a07e1, function (_0x1e9b16) {
              return this._invoke(_0x4a07e1, _0x1e9b16);
            });
          });
        }
        function _0x2c1f0e(_0x1cbc01, _0x371298) {
          function _0xb9594f(_0x511dfc, _0x2175c2, _0x54b0f0, _0x43d3d8) {
            var _0x102a9e = _0x5e5ea8(_0x1cbc01[_0x511dfc], _0x1cbc01, _0x2175c2);
            if ("throw" !== _0x102a9e.type) {
              var _0x3f5ab4 = _0x102a9e.arg;
              var _0x4dc009 = _0x3f5ab4.value;
              return _0x4dc009 && "object" == typeof _0x4dc009 && _0x3c53e4.call(_0x4dc009, "__await") ? _0x371298.resolve(_0x4dc009.__await).then(function (_0x3e0c26) {
                _0xb9594f("next", _0x3e0c26, _0x54b0f0, _0x43d3d8);
              }, function (_0xaf921d) {
                _0xb9594f("throw", _0xaf921d, _0x54b0f0, _0x43d3d8);
              }) : _0x371298.resolve(_0x4dc009).then(function (_0xf6675f) {
                _0x3f5ab4.value = _0xf6675f;
                _0x54b0f0(_0x3f5ab4);
              }, function (_0x31716d) {
                return _0xb9594f("throw", _0x31716d, _0x54b0f0, _0x43d3d8);
              });
            }
            _0x43d3d8(_0x102a9e.arg);
          }
          var _0x3470e6;
          this._invoke = function (_0x5347a6, _0x5aee79) {
            function _0x157d7a() {
              return new _0x371298(function (_0x21f765, _0x1b1fae) {
                _0xb9594f(_0x5347a6, _0x5aee79, _0x21f765, _0x1b1fae);
              });
            }
            return _0x3470e6 = _0x3470e6 ? _0x3470e6.then(_0x157d7a, _0x157d7a) : _0x157d7a();
          };
        }
        function _0x50ac8d(_0x3669f2, _0x58dd1b) {
          var _0x81f9f = _0x3669f2.iterator[_0x58dd1b.method];
          if (undefined === _0x81f9f) {
            _0x58dd1b.delegate = null;
            if ("throw" === _0x58dd1b.method) {
              if (_0x3669f2.iterator["return"] && (_0x58dd1b.method = "return", _0x58dd1b.arg = undefined, _0x50ac8d(_0x3669f2, _0x58dd1b), "throw" === _0x58dd1b.method)) {
                return _0x245e66;
              }
              _0x58dd1b.method = 'throw';
              _0x58dd1b.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return _0x245e66;
          }
          var _0x4b48a5 = _0x5e5ea8(_0x81f9f, _0x3669f2.iterator, _0x58dd1b.arg);
          if ("throw" === _0x4b48a5.type) {
            _0x58dd1b.method = 'throw';
            _0x58dd1b.arg = _0x4b48a5.arg;
            _0x58dd1b.delegate = null;
            return _0x245e66;
          }
          var _0x2e573e = _0x4b48a5.arg;
          return _0x2e573e ? _0x2e573e.done ? (_0x58dd1b[_0x3669f2.resultName] = _0x2e573e.value, _0x58dd1b.next = _0x3669f2.nextLoc, "return" !== _0x58dd1b.method && (_0x58dd1b.method = "next", _0x58dd1b.arg = undefined), _0x58dd1b.delegate = null, _0x245e66) : _0x2e573e : (_0x58dd1b.method = "throw", _0x58dd1b.arg = new TypeError("iterator result is not an object"), _0x58dd1b.delegate = null, _0x245e66);
        }
        function _0x5b614f(_0x21fcb7) {
          var _0x395e94 = {
            'tryLoc': _0x21fcb7[0x0]
          };
          if (0x1 in _0x21fcb7) {
            _0x395e94.catchLoc = _0x21fcb7[0x1];
          }
          if (0x2 in _0x21fcb7) {
            _0x395e94.finallyLoc = _0x21fcb7[0x2];
            _0x395e94.afterLoc = _0x21fcb7[0x3];
          }
          this.tryEntries.push(_0x395e94);
        }
        function _0x54d849(_0x4889a0) {
          var _0x58fbf1 = _0x4889a0.completion || {};
          _0x58fbf1.type = "normal";
          delete _0x58fbf1.arg;
          _0x4889a0.completion = _0x58fbf1;
        }
        function _0x23ef78(_0x2fbf50) {
          this.tryEntries = [{
            'tryLoc': "root"
          }];
          _0x2fbf50.forEach(_0x5b614f, this);
          this.reset(true);
        }
        function _0x4f018b(_0x28ac55) {
          if (_0x28ac55) {
            var _0x507225 = _0x28ac55[_0x467cc7];
            if (_0x507225) {
              return _0x507225.call(_0x28ac55);
            }
            if ("function" == typeof _0x28ac55.next) {
              return _0x28ac55;
            }
            if (!isNaN(_0x28ac55.length)) {
              var _0x3a8319 = -0x1;
              var _0x1d4344 = function _0x1e0cf2() {
                for (; ++_0x3a8319 < _0x28ac55.length;) {
                  if (_0x3c53e4.call(_0x28ac55, _0x3a8319)) {
                    _0x1e0cf2.value = _0x28ac55[_0x3a8319];
                    _0x1e0cf2.done = false;
                    return _0x1e0cf2;
                  }
                }
                _0x1e0cf2.value = undefined;
                _0x1e0cf2.done = true;
                return _0x1e0cf2;
              };
              return _0x1d4344.next = _0x1d4344;
            }
          }
          return {
            'next': _0x4f3cb3
          };
        }
        function _0x4f3cb3() {
          return {
            'value': undefined,
            'done': true
          };
        }
        _0x48710d.prototype = _0x1de886;
        _0xc4dc0f(_0x5e5032, 'constructor', _0x1de886);
        _0xc4dc0f(_0x1de886, "constructor", _0x48710d);
        _0x48710d.displayName = _0xc4dc0f(_0x1de886, _0x437c28, "GeneratorFunction");
        _0x4c5c50.isGeneratorFunction = function (_0x2dae12) {
          var _0x2b6aba = "function" == typeof _0x2dae12 && _0x2dae12.constructor;
          return !!_0x2b6aba && (_0x2b6aba === _0x48710d || "GeneratorFunction" === (_0x2b6aba.displayName || _0x2b6aba.name));
        };
        _0x4c5c50.mark = function (_0xdd94a7) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(_0xdd94a7, _0x1de886);
          } else {
            _0xdd94a7.__proto__ = _0x1de886;
            _0xc4dc0f(_0xdd94a7, _0x437c28, "GeneratorFunction");
          }
          _0xdd94a7.prototype = Object.create(_0x5e5032);
          return _0xdd94a7;
        };
        _0x4c5c50.awrap = function (_0x248e8d) {
          return {
            '__await': _0x248e8d
          };
        };
        _0x4494ab(_0x2c1f0e.prototype);
        _0xc4dc0f(_0x2c1f0e.prototype, _0x3ba5a6, function () {
          return this;
        });
        _0x4c5c50.AsyncIterator = _0x2c1f0e;
        _0x4c5c50.async = function (_0x51ae81, _0x1dbb7e, _0x5bf9fa, _0x54f7ed, _0x10c2bd) {
          if (undefined === _0x10c2bd) {
            _0x10c2bd = Promise;
          }
          var _0x1de6db = new _0x2c1f0e(_0x14d97b(_0x51ae81, _0x1dbb7e, _0x5bf9fa, _0x54f7ed), _0x10c2bd);
          return _0x4c5c50.isGeneratorFunction(_0x1dbb7e) ? _0x1de6db : _0x1de6db.next().then(function (_0x2c19aa) {
            return _0x2c19aa.done ? _0x2c19aa.value : _0x1de6db.next();
          });
        };
        _0x4494ab(_0x5e5032);
        _0xc4dc0f(_0x5e5032, _0x437c28, 'Generator');
        _0xc4dc0f(_0x5e5032, _0x467cc7, function () {
          return this;
        });
        _0xc4dc0f(_0x5e5032, 'toString', function () {
          return "[object Generator]";
        });
        _0x4c5c50.keys = function (_0x23b1d2) {
          var _0x34e089 = [];
          for (var _0xa556d2 in _0x23b1d2) _0x34e089.push(_0xa556d2);
          _0x34e089.reverse();
          return function _0x41d456() {
            for (; _0x34e089.length;) {
              var _0x67a6ac = _0x34e089.pop();
              if (_0x67a6ac in _0x23b1d2) {
                _0x41d456.value = _0x67a6ac;
                _0x41d456.done = false;
                return _0x41d456;
              }
            }
            _0x41d456.done = true;
            return _0x41d456;
          };
        };
        _0x4c5c50.values = _0x4f018b;
        _0x23ef78.prototype = {
          'constructor': _0x23ef78,
          'reset': function (_0x555dee) {
            this.prev = 0x0;
            this.next = 0x0;
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = 'next';
            this.arg = undefined;
            this.tryEntries.forEach(_0x54d849);
            if (!_0x555dee) {
              for (var _0x4e0a68 in this) if ('t' === _0x4e0a68.charAt(0x0) && _0x3c53e4.call(this, _0x4e0a68) && !isNaN(+_0x4e0a68.slice(0x1))) {
                this[_0x4e0a68] = undefined;
              }
            }
          },
          'stop': function () {
            this.done = true;
            var _0x5a2ceb = this.tryEntries[0x0].completion;
            if ('throw' === _0x5a2ceb.type) {
              throw _0x5a2ceb.arg;
            }
            return this.rval;
          },
          'dispatchException': function (_0x4efd76) {
            if (this.done) {
              throw _0x4efd76;
            }
            var _0x41b30f = this;
            function _0x25c94f(_0x3d12f0, _0x473188) {
              _0x2d46c5.type = "throw";
              _0x2d46c5.arg = _0x4efd76;
              _0x41b30f.next = _0x3d12f0;
              if (_0x473188) {
                _0x41b30f.method = "next";
                _0x41b30f.arg = undefined;
              }
              return !!_0x473188;
            }
            for (var _0x27a8be = this.tryEntries.length - 0x1; _0x27a8be >= 0x0; --_0x27a8be) {
              var _0x259d8d = this.tryEntries[_0x27a8be];
              var _0x2d46c5 = _0x259d8d.completion;
              if ("root" === _0x259d8d.tryLoc) {
                return _0x25c94f("end");
              }
              if (_0x259d8d.tryLoc <= this.prev) {
                var _0x26b291 = _0x3c53e4.call(_0x259d8d, 'catchLoc');
                var _0x186fe9 = _0x3c53e4.call(_0x259d8d, "finallyLoc");
                if (_0x26b291 && _0x186fe9) {
                  if (this.prev < _0x259d8d.catchLoc) {
                    return _0x25c94f(_0x259d8d.catchLoc, true);
                  }
                  if (this.prev < _0x259d8d.finallyLoc) {
                    return _0x25c94f(_0x259d8d.finallyLoc);
                  }
                } else {
                  if (_0x26b291) {
                    if (this.prev < _0x259d8d.catchLoc) {
                      return _0x25c94f(_0x259d8d.catchLoc, true);
                    }
                  } else {
                    if (!_0x186fe9) {
                      throw new Error("try statement without catch or finally");
                    }
                    if (this.prev < _0x259d8d.finallyLoc) {
                      return _0x25c94f(_0x259d8d.finallyLoc);
                    }
                  }
                }
              }
            }
          },
          'abrupt': function (_0x574009, _0x43c155) {
            for (var _0x143afc = this.tryEntries.length - 0x1; _0x143afc >= 0x0; --_0x143afc) {
              var _0x4040d4 = this.tryEntries[_0x143afc];
              if (_0x4040d4.tryLoc <= this.prev && _0x3c53e4.call(_0x4040d4, 'finallyLoc') && this.prev < _0x4040d4.finallyLoc) {
                var _0x214001 = _0x4040d4;
                break;
              }
            }
            if (_0x214001 && ("break" === _0x574009 || "continue" === _0x574009) && _0x214001.tryLoc <= _0x43c155 && _0x43c155 <= _0x214001.finallyLoc) {
              _0x214001 = null;
            }
            var _0x5b5f46 = _0x214001 ? _0x214001.completion : {};
            _0x5b5f46.type = _0x574009;
            _0x5b5f46.arg = _0x43c155;
            return _0x214001 ? (this.method = "next", this.next = _0x214001.finallyLoc, _0x245e66) : this.complete(_0x5b5f46);
          },
          'complete': function (_0x295232, _0x556810) {
            if ("throw" === _0x295232.type) {
              throw _0x295232.arg;
            }
            if ("break" === _0x295232.type || "continue" === _0x295232.type) {
              this.next = _0x295232.arg;
            } else if ("return" === _0x295232.type) {
              this.rval = this.arg = _0x295232.arg;
              this.method = 'return';
              this.next = 'end';
            } else if ("normal" === _0x295232.type && _0x556810) {
              this.next = _0x556810;
            }
            return _0x245e66;
          },
          'finish': function (_0x2fe29b) {
            for (var _0x3a4dd6 = this.tryEntries.length - 0x1; _0x3a4dd6 >= 0x0; --_0x3a4dd6) {
              var _0x320466 = this.tryEntries[_0x3a4dd6];
              if (_0x320466.finallyLoc === _0x2fe29b) {
                this.complete(_0x320466.completion, _0x320466.afterLoc);
                _0x54d849(_0x320466);
                return _0x245e66;
              }
            }
          },
          'catch': function (_0x193c3b) {
            for (var _0x1c3ebd = this.tryEntries.length - 0x1; _0x1c3ebd >= 0x0; --_0x1c3ebd) {
              var _0x5038fb = this.tryEntries[_0x1c3ebd];
              if (_0x5038fb.tryLoc === _0x193c3b) {
                var _0x596684 = _0x5038fb.completion;
                if ("throw" === _0x596684.type) {
                  var _0x2902d2 = _0x596684.arg;
                  _0x54d849(_0x5038fb);
                }
                return _0x2902d2;
              }
            }
            throw new Error("illegal catch attempt");
          },
          'delegateYield': function (_0xcff2f7, _0x1c3bd2, _0x1d471a) {
            this.delegate = {
              'iterator': _0x4f018b(_0xcff2f7),
              'resultName': _0x1c3bd2,
              'nextLoc': _0x1d471a
            };
            if ("next" === this.method) {
              this.arg = undefined;
            }
            return _0x245e66;
          }
        };
        return _0x4c5c50;
      }
      function _0x6cf04c(_0x556343, _0xf88f9d, _0x37aed6, _0x4b8460, _0x1d8978, _0x50b693, _0xb047f1) {
        try {
          var _0x106085 = _0x556343[_0x50b693](_0xb047f1);
          var _0x2b16cd = _0x106085.value;
        } catch (_0x1ec7a2) {
          return void _0x37aed6(_0x1ec7a2);
        }
        if (_0x106085.done) {
          _0xf88f9d(_0x2b16cd);
        } else {
          Promise.resolve(_0x2b16cd).then(_0x4b8460, _0x1d8978);
        }
      }
      function _0x9f23dc(_0x1fe2d1) {
        return function () {
          var _0x44b366 = this;
          return new Promise(function (_0x5d4d7f, _0x49cd9a) {
            var _0x3b9289 = _0x1fe2d1.apply(_0x44b366, arguments);
            function _0x247105(_0x34efd3) {
              _0x6cf04c(_0x3b9289, _0x5d4d7f, _0x49cd9a, _0x247105, _0x2c9cb0, "next", _0x34efd3);
            }
            function _0x2c9cb0(_0x1389be) {
              _0x6cf04c(_0x3b9289, _0x5d4d7f, _0x49cd9a, _0x247105, _0x2c9cb0, "throw", _0x1389be);
            }
            _0x247105(undefined);
          });
        };
      }
      function _0x969b65(_0x45475b, _0x1d7403) {
        for (var _0x337eac = 0x0; _0x337eac < _0x1d7403.length; _0x337eac++) {
          var _0x5aac9a = _0x1d7403[_0x337eac];
          _0x5aac9a.enumerable = _0x5aac9a.enumerable || false;
          _0x5aac9a.configurable = true;
          if ("value" in _0x5aac9a) {
            _0x5aac9a.writable = true;
          }
          Object.defineProperty(_0x45475b, _0x5aac9a.key, _0x5aac9a);
        }
      }
      function _0xef4a8(_0x340435, _0x38b3af, _0x395a0f) {
        if (_0x38b3af) {
          _0x969b65(_0x340435.prototype, _0x38b3af);
        }
        if (_0x395a0f) {
          _0x969b65(_0x340435, _0x395a0f);
        }
        Object.defineProperty(_0x340435, "prototype", {
          'writable': false
        });
        return _0x340435;
      }
      function _0x4235b3(_0x1b5d14, _0x115664) {
        _0x1b5d14.prototype = Object.create(_0x115664.prototype);
        _0x1b5d14.prototype.constructor = _0x1b5d14;
        _0x49a18f(_0x1b5d14, _0x115664);
      }
      function _0x49a18f(_0x366012, _0x327fa6) {
        return (_0x49a18f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (_0x2a2cf4, _0x4eca7c) {
          _0x2a2cf4.__proto__ = _0x4eca7c;
          return _0x2a2cf4;
        })(_0x366012, _0x327fa6);
      }
      function _0x1cc4fd(_0x314e59) {
        if (undefined === _0x314e59) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return _0x314e59;
      }
      function _0x25f3aa(_0x56b8d0, _0xbeae20) {
        if (_0x56b8d0) {
          if ('string' == typeof _0x56b8d0) {
            return _0x58964f(_0x56b8d0, _0xbeae20);
          }
          var _0x29c155 = Object.prototype.toString.call(_0x56b8d0).slice(0x8, -0x1);
          if ("Object" === _0x29c155 && _0x56b8d0.constructor) {
            _0x29c155 = _0x56b8d0.constructor.name;
          }
          return "Map" === _0x29c155 || 'Set' === _0x29c155 ? Array.from(_0x56b8d0) : "Arguments" === _0x29c155 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x29c155) ? _0x58964f(_0x56b8d0, _0xbeae20) : undefined;
        }
      }
      function _0x58964f(_0x25c5d7, _0x381b55) {
        if (null == _0x381b55 || _0x381b55 > _0x25c5d7.length) {
          _0x381b55 = _0x25c5d7.length;
        }
        var _0x1395c6 = 0x0;
        for (var _0x3e5926 = new Array(_0x381b55); _0x1395c6 < _0x381b55; _0x1395c6++) {
          _0x3e5926[_0x1395c6] = _0x25c5d7[_0x1395c6];
        }
        return _0x3e5926;
      }
      function _0x499970(_0x4bd52a, _0x6b4ad) {
        var _0x3d7622 = "undefined" != typeof Symbol && _0x4bd52a[Symbol.iterator] || _0x4bd52a['@@iterator'];
        if (_0x3d7622) {
          return (_0x3d7622 = _0x3d7622.call(_0x4bd52a)).next.bind(_0x3d7622);
        }
        if (Array.isArray(_0x4bd52a) || (_0x3d7622 = _0x25f3aa(_0x4bd52a)) || _0x6b4ad && _0x4bd52a && "number" == typeof _0x4bd52a.length) {
          if (_0x3d7622) {
            _0x4bd52a = _0x3d7622;
          }
          var _0x1e0ad4 = 0x0;
          return function () {
            return _0x1e0ad4 >= _0x4bd52a.length ? {
              'done': true
            } : {
              'done': false,
              'value': _0x4bd52a[_0x1e0ad4++]
            };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _0x29845c(_0x4a2b49, _0x56973e, _0x4c40a9, _0x5e10a4) {
        if (_0x4c40a9) {
          Object.defineProperty(_0x4a2b49, _0x56973e, {
            'enumerable': _0x4c40a9.enumerable,
            'configurable': _0x4c40a9.configurable,
            'writable': _0x4c40a9.writable,
            'value': _0x4c40a9.initializer ? _0x4c40a9.initializer.call(_0x5e10a4) : undefined
          });
        }
      }
      function _0x2f48b7(_0x3fc39d, _0x154593, _0x13edf1, _0x3c8c36, _0x81e866) {
        var _0x544f71 = {};
        Object.keys(_0x3c8c36).forEach(function (_0x2daeb5) {
          _0x544f71[_0x2daeb5] = _0x3c8c36[_0x2daeb5];
        });
        _0x544f71.enumerable = !!_0x544f71.enumerable;
        _0x544f71.configurable = !!_0x544f71.configurable;
        if ("value" in _0x544f71 || _0x544f71.initializer) {
          _0x544f71.writable = true;
        }
        _0x544f71 = _0x13edf1.slice().reverse().reduce(function (_0x2b9ac2, _0x28a088) {
          return _0x28a088(_0x3fc39d, _0x154593, _0x2b9ac2) || _0x2b9ac2;
        }, _0x544f71);
        if (_0x81e866 && undefined !== _0x544f71.initializer) {
          _0x544f71.value = _0x544f71.initializer ? _0x544f71.initializer.call(_0x81e866) : undefined;
          _0x544f71.initializer = undefined;
        }
        if (undefined === _0x544f71.initializer) {
          Object.defineProperty(_0x3fc39d, _0x154593, _0x544f71);
          _0x544f71 = null;
        }
        return _0x544f71;
      }
      _0x3db04a._RF.push({}, "37305O7kjVPRplF2I06Mb/f", 'BGAck', undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "97443TPBHZJ9b+sV1XivIW7", 'DataStructure', undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "eb033pmYDhAjadYFiwbi8gp", "SpineKit", undefined);
      var _0x32d2d6 = function () {
        function _0x5d16d0() {}
        _0x5d16d0.ForceCancel = function (_0x9e0284, _0x35b484) {
          var _0x243d73;
          var _0x289f74;
          var _0x13349e;
          if (!(null == (_0x243d73 = this.m_cancelCbs) || null == (_0x289f74 = (_0x13349e = _0x243d73[_0x9e0284])[_0x35b484]))) {
            _0x289f74.call(_0x13349e);
          }
        };
        _0x5d16d0.PlayAnimation = function (_0x57e45d, _0x5a3f32, _0x30a170, _0x480577, _0x159c44, _0x3fe4bf) {
          var _0xbf0f74 = this;
          if (undefined === _0x30a170) {
            _0x30a170 = false;
          }
          if (undefined === _0x480577) {
            _0x480577 = 0x0;
          }
          if (undefined === _0x3fe4bf) {
            _0x3fe4bf = true;
          }
          return new Promise(function (_0x1581c5) {
            _0xbf0f74.m_cancelCbs[_0x57e45d.name] = {};
            _0xbf0f74.m_cancelCbs[_0x57e45d.name][_0x5a3f32] = function () {
              _0x1581c5(true);
            };
            var _0x40b81a = true;
            var _0x3dea14 = _0x57e45d.getState();
            if (_0x3dea14) {
              var _0x1edf70 = _0x3dea14.expandToIndex(_0x480577);
              if (_0x1edf70) {
                var _0x3b65ed = _0x1edf70.animation.name + '.' + _0x5a3f32;
                _0x40b81a = undefined === _0x3dea14.data.animationToMixTime[_0x3b65ed];
              }
            }
            if (_0x40b81a) {
              _0x57e45d.clearTrack(_0x480577);
              if (_0x3fe4bf) {
                _0x57e45d.setToSetupPose();
              }
            }
            var _0x4d35da = _0x57e45d.setAnimation(_0x480577, _0x5a3f32, _0x30a170);
            if (_0x4d35da) {
              _0x57e45d.setTrackEventListener(_0x4d35da, function (_0x9c3f0, _0x42b4a2) {
                if (_0x4d35da && _0x4d35da.animation.name == _0x9c3f0.animation.name) {
                  if (!(null == _0x159c44)) {
                    _0x159c44(_0x42b4a2.data.name);
                  }
                }
              });
              _0x57e45d.setTrackCompleteListener(_0x4d35da, function (_0x4c1166) {
                if (_0x4d35da && _0x4d35da.animation.name == _0x4c1166.animation.name) {
                  _0x57e45d.setTrackCompleteListener(_0x4d35da, function () {});
                  _0x57e45d.setTrackInterruptListener(_0x4d35da, function () {});
                  if (_0xbf0f74.m_cancelCbs[_0x57e45d.name] && _0xbf0f74.m_cancelCbs[_0x57e45d.name][_0x5a3f32]) {
                    _0xbf0f74.m_cancelCbs[_0x57e45d.name][_0x5a3f32] = null;
                  }
                  _0x1581c5(false);
                }
              });
              _0x57e45d.setTrackInterruptListener(_0x4d35da, function (_0x98e23f) {
                if (_0x4d35da && _0x4d35da.animation.name == _0x98e23f.animation.name) {
                  _0x57e45d.setTrackCompleteListener(_0x4d35da, function () {});
                  _0x57e45d.setTrackInterruptListener(_0x4d35da, function () {});
                  if (_0xbf0f74.m_cancelCbs[_0x57e45d.name] && _0xbf0f74.m_cancelCbs[_0x57e45d.name][_0x5a3f32]) {
                    _0xbf0f74.m_cancelCbs[_0x57e45d.name][_0x5a3f32] = null;
                  }
                  _0x1581c5(true);
                }
              });
            } else {
              _0x57e45d.setCompleteListener(function () {
                _0x57e45d.setCompleteListener(null);
                _0x57e45d.setInterruptListener(null);
                if (_0xbf0f74.m_cancelCbs[_0x57e45d.name] && _0xbf0f74.m_cancelCbs[_0x57e45d.name][_0x5a3f32]) {
                  _0xbf0f74.m_cancelCbs[_0x57e45d.name][_0x5a3f32] = null;
                }
                _0x1581c5(false);
              });
              _0x57e45d.setInterruptListener(function () {
                _0x57e45d.setCompleteListener(null);
                _0x57e45d.setInterruptListener(null);
                if (_0xbf0f74.m_cancelCbs[_0x57e45d.name] && _0xbf0f74.m_cancelCbs[_0x57e45d.name][_0x5a3f32]) {
                  _0xbf0f74.m_cancelCbs[_0x57e45d.name][_0x5a3f32] = null;
                }
                _0x1581c5(true);
              });
            }
          });
        };
        return _0x5d16d0;
      }();
      _0x32d2d6.m_cancelCbs = {};
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, '596e9MhMqpHVIQDNe/qOdAx', "FeatureAck", undefined);
      var _0x5021d5 = [{
        'RoundQueue': [{
          'Symbol': [{
            'Col': [0x3, 0x1, 0x1]
          }, {
            'Col': [0x3, 0xc, 0x1]
          }, {
            'Col': [0x2, 0x2, 0x4]
          }],
          'Mul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'Frame': [{
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }],
          'FinalSymbol': [{
            'Col': [0x3, 0x1, 0x1]
          }, {
            'Col': [0x3, 0xc, 0x1]
          }, {
            'Col': [0x0, 0x2, 0x0]
          }],
          'FinalMul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x1e, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalFrame': [{
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }],
          'AwardDataVec': [{
            'Atype': 0x2,
            'Pos': 0x4,
            'Mul': 0x1e,
            'Win': 0x1e
          }],
          'RoundWin': 0x1e,
          'PotList': [{
            'Pos': 0x6,
            'Symbol': 0xa,
            'Mul': 0x5
          }, {
            'Pos': 0x8,
            'Symbol': 0xb,
            'Mul': 0x19
          }],
          'AwardTypeFlag': 0x12
        }],
        'TotalWin': 0x1e,
        'RTP': 0.97
      }, {
        'RoundQueue': [{
          'Symbol': [{
            'Col': [0x2, 0x2, 0x2]
          }, {
            'Col': [0xc, 0x5, 0x1]
          }, {
            'Col': [0x4, 0x1, 0x7]
          }],
          'Mul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'Frame': [{
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }],
          'FinalSymbol': [{
            'Col': [0x2, 0x0, 0x2]
          }, {
            'Col': [0xc, 0x5, 0x1]
          }, {
            'Col': [0x4, 0x1, 0x0]
          }],
          'FinalMul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x5, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalFrame': [{
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }],
          'PotList': [{
            'Pos': 0x1,
            'Symbol': 0xa,
            'Mul': 0x2
          }, {
            'Pos': 0x8,
            'Symbol': 0xa,
            'Mul': 0x3
          }],
          'BonusRemainRound': 0x3,
          'GetBonus': true,
          'AwardTypeFlag': 0x4
        }, {
          'Symbol': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0xc, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'Mul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x5, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'Frame': [{
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }],
          'FinalSymbol': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0xc, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalMul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x5, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalFrame': [{
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }],
          'BonusRemainRound': 0x2,
          'BonusTotalRound': 0x1,
          'AwardTypeFlag': 0x8
        }, {
          'Symbol': [{
            'Col': [0x0, 0xa, 0x0]
          }, {
            'Col': [0xc, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'Mul': [{
            'Col': [0x0, 0x2, 0x0]
          }, {
            'Col': [0x5, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'Frame': [{
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }],
          'FinalSymbol': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0xc, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalMul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x7, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalFrame': [{
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x2]
          }],
          'BonusRemainRound': 0x3,
          'BonusTotalRound': 0x2,
          'AwardTypeFlag': 0x8
        }, {
          'Symbol': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0xc, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'Mul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x7, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'Frame': [{
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x2]
          }],
          'FinalSymbol': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0xc, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalMul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x7, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalFrame': [{
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x2]
          }],
          'BonusRemainRound': 0x2,
          'BonusTotalRound': 0x3,
          'AwardTypeFlag': 0x8
        }, {
          'Symbol': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0xc, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'Mul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x7, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'Frame': [{
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x2]
          }],
          'FinalSymbol': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0xc, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalMul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x7, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalFrame': [{
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x2]
          }],
          'BonusRemainRound': 0x1,
          'BonusTotalRound': 0x4,
          'AwardTypeFlag': 0x8
        }, {
          'Symbol': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0xc, 0x0, 0x0]
          }, {
            'Col': [0x0, 0xb, 0x0]
          }],
          'Mul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x7, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x19, 0x0]
          }],
          'Frame': [{
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x2]
          }],
          'FinalSymbol': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0xc, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalMul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x20, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalFrame': [{
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x2]
          }],
          'BonusRemainRound': 0x3,
          'BonusTotalRound': 0x5,
          'AwardTypeFlag': 0x8
        }, {
          'Symbol': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0xc, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'Mul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x20, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'Frame': [{
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x2]
          }],
          'FinalSymbol': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0xc, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalMul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x20, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalFrame': [{
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x3]
          }],
          'BonusRemainRound': 0x2,
          'BonusTotalRound': 0x6,
          'AwardTypeFlag': 0x8
        }, {
          'Symbol': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0xc, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'Mul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x20, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'Frame': [{
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x3]
          }],
          'FinalSymbol': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0xc, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalMul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x20, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalFrame': [{
            'Col': [0x1, 0x2, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x3]
          }],
          'BonusRemainRound': 0x1,
          'BonusTotalRound': 0x7,
          'AwardTypeFlag': 0x8
        }, {
          'Symbol': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0xc, 0x0, 0x0]
          }, {
            'Col': [0x0, 0xa, 0x0]
          }],
          'Mul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x20, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x1, 0x0]
          }],
          'Frame': [{
            'Col': [0x1, 0x2, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x3]
          }],
          'FinalSymbol': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0xc, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalMul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x21, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalFrame': [{
            'Col': [0x1, 0x2, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x3]
          }],
          'BonusRemainRound': 0x3,
          'BonusTotalRound': 0x8,
          'AwardTypeFlag': 0x8
        }, {
          'Symbol': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0xc, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'Mul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x21, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'Frame': [{
            'Col': [0x1, 0x2, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x3]
          }],
          'FinalSymbol': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0xc, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalMul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x21, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalFrame': [{
            'Col': [0x1, 0x2, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x2, 0x1, 0x3]
          }],
          'BonusRemainRound': 0x2,
          'BonusTotalRound': 0x9,
          'AwardTypeFlag': 0x8
        }, {
          'Symbol': [{
            'Col': [0x0, 0xa, 0x0]
          }, {
            'Col': [0xc, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'Mul': [{
            'Col': [0x0, 0x7, 0x0]
          }, {
            'Col': [0x21, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'Frame': [{
            'Col': [0x1, 0x2, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x2, 0x1, 0x3]
          }],
          'FinalSymbol': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0xc, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalMul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x2f, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalFrame': [{
            'Col': [0x1, 0x2, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x2, 0x1, 0x3]
          }],
          'BonusRemainRound': 0x3,
          'BonusTotalRound': 0xa,
          'AwardTypeFlag': 0x8
        }, {
          'Symbol': [{
            'Col': [0xa, 0x0, 0x0]
          }, {
            'Col': [0xc, 0x0, 0x0]
          }, {
            'Col': [0xa, 0x0, 0x0]
          }],
          'Mul': [{
            'Col': [0x1, 0x0, 0x0]
          }, {
            'Col': [0x2f, 0x0, 0x0]
          }, {
            'Col': [0x1, 0x0, 0x0]
          }],
          'Frame': [{
            'Col': [0x1, 0x2, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x2, 0x1, 0x3]
          }],
          'FinalSymbol': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0xc, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalMul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x32, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalFrame': [{
            'Col': [0x1, 0x2, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x2, 0x1, 0x3]
          }],
          'BonusRemainRound': 0x3,
          'BonusTotalRound': 0xb,
          'AwardTypeFlag': 0x8
        }, {
          'Symbol': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0xc, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'Mul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x32, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'Frame': [{
            'Col': [0x1, 0x2, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x2, 0x1, 0x3]
          }],
          'FinalSymbol': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0xc, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalMul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x32, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalFrame': [{
            'Col': [0x1, 0x2, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x2, 0x1, 0x3]
          }],
          'BonusRemainRound': 0x2,
          'BonusTotalRound': 0xc,
          'AwardTypeFlag': 0x8
        }, {
          'Symbol': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0xc, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'Mul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x32, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'Frame': [{
            'Col': [0x1, 0x2, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x2, 0x1, 0x3]
          }],
          'FinalSymbol': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0xc, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalMul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x32, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalFrame': [{
            'Col': [0x1, 0x2, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x2, 0x1, 0x3]
          }],
          'BonusRemainRound': 0x1,
          'BonusTotalRound': 0xd,
          'AwardTypeFlag': 0x8
        }, {
          'Symbol': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0xc, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'Mul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x32, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'Frame': [{
            'Col': [0x1, 0x2, 0x1]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x2, 0x1, 0x3]
          }],
          'FinalSymbol': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0xc, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalMul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x32, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalFrame': [{
            'Col': [0x1, 0x2, 0x2]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x2, 0x1, 0x3]
          }],
          'AwardDataVec': [{
            'Atype': 0x2,
            'Pos': 0x3,
            'Mul': 0x32,
            'Win': 0x32
          }],
          'RoundWin': 0x32,
          'BonusTotalRound': 0xe,
          'AwardTypeFlag': 0x1a
        }],
        'BonusTotalWin': 0x32,
        'TotalWin': 0x32,
        'RTP': 0.97
      }];
      var _0x4694cb;
      var _0x41416f;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "797ddeUlDVOU4nf57irQN6d", "Game_Define", undefined);
      var _0x4c274a = _0x5d1a01.ccclass;
      var _0x2b587c;
      var _0x36ee90;
      var _0x5891e9;
      var _0x1b258a;
      var _0x2b9fa8;
      var _0x15d468;
      !function (_0x1b4d6d) {
        _0x1b4d6d[_0x1b4d6d.WAIT_READY = 0x0] = "WAIT_READY";
        _0x1b4d6d[_0x1b4d6d.UNSHOW_PREPARE = 0x1] = "UNSHOW_PREPARE";
        _0x1b4d6d[_0x1b4d6d.FEATURE_SHOW = 0x2] = "FEATURE_SHOW";
        _0x1b4d6d[_0x1b4d6d.PLATE_SHOW = 0x3] = "PLATE_SHOW";
        _0x1b4d6d[_0x1b4d6d.AWARD = 0x4] = "AWARD";
        _0x1b4d6d[_0x1b4d6d.ROUND_SHOW_END = 0x5] = 'ROUND_SHOW_END';
        _0x1b4d6d[_0x1b4d6d.ROUND_END = 0x6] = "ROUND_END";
        _0x1b4d6d[_0x1b4d6d.ENTER_BONUS = 0x7] = "ENTER_BONUS";
        _0x1b4d6d[_0x1b4d6d.LEAVE_BONUS = 0x8] = "LEAVE_BONUS";
        _0x1b4d6d[_0x1b4d6d.ADD_BONUS = 0x9] = 'ADD_BONUS';
        _0x1b4d6d[_0x1b4d6d.BIG_AWARD_EFFECT = 0xa] = "BIG_AWARD_EFFECT";
        _0x1b4d6d[_0x1b4d6d.CHECK_MAX_FLAG = 0xb] = "CHECK_MAX_FLAG";
        _0x1b4d6d[_0x1b4d6d.BG_COLLECT = 0xc] = 'BG_COLLECT';
        _0x1b4d6d[_0x1b4d6d.MG_COLLECT = 0xd] = "MG_COLLECT";
      }(_0x2b587c || (_0x2b587c = {}));
      (function (_0x12e528) {
        _0x12e528[_0x12e528.EMPTY = 0x0] = 'EMPTY';
        _0x12e528[_0x12e528.CHERRY = 0x1] = "CHERRY";
        _0x12e528[_0x12e528.LEMON = 0x2] = 'LEMON';
        _0x12e528[_0x12e528.ORANGE = 0x3] = "ORANGE";
        _0x12e528[_0x12e528.GRAPE = 0x4] = "GRAPE";
        _0x12e528[_0x12e528.PLUM = 0x5] = "PLUM";
        _0x12e528[_0x12e528.WATERMELON = 0x6] = 'WATERMELON';
        _0x12e528[_0x12e528.BAR = 0x7] = "BAR";
        _0x12e528[_0x12e528.BELL = 0x8] = 'BELL';
        _0x12e528[_0x12e528.WILD777 = 0x9] = "WILD777";
        _0x12e528[_0x12e528.BONUS_COIN = 0xa] = "BONUS_COIN";
        _0x12e528[_0x12e528.BONUS_COIN_JP = 0xb] = "BONUS_COIN_JP";
        _0x12e528[_0x12e528.ROYAL_BONUS_COIN = 0xc] = "ROYAL_BONUS_COIN";
      })(_0x36ee90 || (_0x36ee90 = {}));
      (function (_0x26d8bc) {
        _0x26d8bc[_0x26d8bc.MINI = 0x0] = "MINI";
        _0x26d8bc[_0x26d8bc.MINOR = 0x1] = "MINOR";
        _0x26d8bc[_0x26d8bc.MAJOR = 0x2] = "MAJOR";
        _0x26d8bc[_0x26d8bc.GRAND = 0x3] = "GRAND";
      })(_0x5891e9 || (_0x5891e9 = {}));
      (function (_0x4bf036) {
        _0x4bf036[_0x4bf036.NONE = 0x0] = "NONE";
        _0x4bf036[_0x4bf036.BONUS = 0x1] = "BONUS";
        _0x4bf036[_0x4bf036.GRAND = 0x2] = "GRAND";
        _0x4bf036[_0x4bf036.MAJOR = 0x3] = "MAJOR";
        _0x4bf036[_0x4bf036.MINI = 0x4] = "MINI";
        _0x4bf036[_0x4bf036.MINOR = 0x5] = "MINOR";
        _0x4bf036[_0x4bf036.ROYALBONUS = 0x6] = 'ROYALBONUS';
      })(_0x1b258a || (_0x1b258a = {}));
      (function (_0x12dbd3) {
        _0x12dbd3[_0x12dbd3.SymbolEmp = 0x0] = "SymbolEmp";
        _0x12dbd3[_0x12dbd3.Symbol1 = 0x1] = "Symbol1";
        _0x12dbd3[_0x12dbd3.Symbol2 = 0x2] = "Symbol2";
        _0x12dbd3[_0x12dbd3.Symbol3 = 0x3] = "Symbol3";
        _0x12dbd3[_0x12dbd3.Symbol4 = 0x4] = "Symbol4";
        _0x12dbd3[_0x12dbd3.Symbol5 = 0x5] = 'Symbol5';
        _0x12dbd3[_0x12dbd3.Symbol6 = 0x6] = "Symbol6";
        _0x12dbd3[_0x12dbd3.Symbol7 = 0x7] = 'Symbol7';
        _0x12dbd3[_0x12dbd3.Symbol8 = 0x8] = 'Symbol8';
        _0x12dbd3[_0x12dbd3.SymbolWild = 0x9] = "SymbolWild";
        _0x12dbd3[_0x12dbd3.SymbolCoin = 0xa] = 'SymbolCoin';
        _0x12dbd3[_0x12dbd3.SymbolCoinJP = 0xb] = 'SymbolCoinJP';
        _0x12dbd3[_0x12dbd3.SymbolCoinScatter = 0xc] = "SymbolCoinScatter";
      })(_0x2b9fa8 || (_0x2b9fa8 = {}));
      (function (_0x1d4bf2) {
        _0x1d4bf2[_0x1d4bf2.Normal = 0x0] = "Normal";
        _0x1d4bf2[_0x1d4bf2.Shrink = 0x1] = 'Shrink';
        _0x1d4bf2[_0x1d4bf2.Grow = 0x2] = 'Grow';
      })(_0x15d468 || (_0x15d468 = {}));
      _0x41416f = function (_0x18d20a) {
        function _0x5f139a() {
          return _0x18d20a.apply(this, arguments) || this;
        }
        _0x4235b3(_0x5f139a, _0x18d20a);
        _0x5f139a.OnExit = function () {
          this.AudioClips = {
            'Reel_Spin': null,
            'Reel_Stop': null,
            'BGM_Debut': null,
            'BGM_MG': null,
            'Reel_NearWin': null,
            'Small_Win01': null,
            'Small_Win02': null,
            'Small_Win03': null,
            'Big_Win': null,
            'Change_Win': null,
            'Big_Win_End': null,
            'Coin_Stop_1': null,
            'Coin_Stop_2': null,
            'Coin_Stop_3': null,
            'Coin_Stop_4': null,
            'Coin_Show': null,
            'Collect_Fly': null,
            'Collect_Flip': null,
            'Scatter_Bell': null,
            'Pot_Upgrate': null,
            'Pot_Nearwin': null,
            'Pot_Win': null,
            'BG_Start': null,
            'BG_Expand_Down': null,
            'Coin_Collect': null,
            'BGM_BG': null,
            'BG_Jp_Coin': null,
            'BG_FreeSpins': null,
            'Total_Win_Show': null,
            'BG_End': null,
            'Scatter_CoinIn': null,
            'Coin_Win': null,
            'Pot_Collect': null,
            'Pot_Loop': null,
            'FX_feature_Start': null,
            'FX_feature_End': null,
            'BG_FreeSpins00': null,
            'BG_FreeSpins01': null,
            'BG_FreeSpins02': null,
            'MultipleOmen_Start': null,
            'Multiplier_Fire': null,
            'Multiplier_FireHit': null,
            'Multiplier_Win': null,
            'Joker_MG_Idle2': null,
            'Joker_MG_Win': null,
            'Joker_Pot_Upgrade': null,
            'Joker_Pot_Win': null,
            'Joker_FG_Muttiplier_Align': null,
            'Multiplier_Win2': null,
            'Character_Nice_win': null,
            'Character_Great_win': null
          };
        };
        return _0x5f139a;
      }(_0xead8bf);
      _0x41416f.Ver = '32';
      _0x41416f.SPICY_LEVEL = 0x3;
      _0x41416f.GameState = _0x15933b(_0x2b587c);
      _0x41416f.Symbol = _0x15933b(_0x36ee90);
      _0x41416f.AnimeSkin = _0x15933b(_0x1b258a);
      _0x41416f.ServerSymbolIndex = _0x15933b(_0x2b9fa8);
      _0x41416f.JP_TYPES = _0x15933b(_0x5891e9);
      _0x41416f.FlyType = _0x15933b(_0x15d468);
      _0x41416f.COL = 0x3;
      _0x41416f.ROW = 0x3;
      _0x41416f.ROW_CENTER = 0x1;
      _0x41416f.flyingTime = 0.5;
      _0x41416f.scatter_num_prefab_index = 0xb;
      _0x41416f.StringKey = {
        'FEATURES_LEFT': "FEATURE_LEFT",
        'FEATURES_RIGHT': 'FEATURE_RIGHT'
      };
      _0x41416f.FEATURE_BET_VALUE = 0xa;
      _0x41416f.FeaturesSpinAck = _0x5021d5;
      _0x41416f.NODE_PREFIX_NAME = ["low", '', 'up'];
      _0x41416f.FULL_PLATE_NUM = 0x9;
      _0x41416f.MIDDLE_PLATE_INDEX = 0x1;
      _0x41416f.Color = {
        'Light': _0x55da1e(0xff, 0xff, 0xff),
        'Dark': _0x55da1e(101.25, 94.5, 73.5)
      };
      _0x41416f.AWARDTYPEFLAG = {
        'AwardTypeNon': 0x0,
        'AwardTypeLine': 0x1,
        'AwardTypeCoin': 0x2,
        'AwardTypeGetBonus': 0x4,
        'AwardTypeInBonus': 0x8,
        'AwardTypeLeaveBonus': 0x10
      };
      _0x41416f.JP_ODD = {
        'MINI': 0xf,
        'MINOR': 0x19,
        'MAJOR': 0x64,
        'GRAND': 0x3e8
      };
      _0x41416f.Atype = {
        'LINE': 0x1,
        'COIN': 0x2
      };
      _0x41416f.PlateEftOdds = [0x6, 0xf, 0x1e];
      _0x41416f.BonusCoinMul = [0x1, 0x2, 0x3, 0x5, 0x7, 0xa];
      _0x41416f.ChrUpgradeOdd = 0.1;
      _0x41416f.ChrNearWinOdd = 0.5;
      _0x41416f.CharacterAnim = {
        'START': 0x0,
        'LOOP': 0x1,
        'END': 0x2
      };
      _0x41416f.IntroAnim = {
        'LANDSCAPE': "GameIntro_L",
        'PORTRAIT': "GameIntro_P"
      };
      _0x41416f.BUY_BONUS_TXT = ['Txt_Buy_Feature_Bet', 'Txt_Buy_Feature_Title', "BuyBonus_IconName"];
      _0x41416f.complimentLabelTag = 0x7b;
      _0x41416f.nearScreenTag = 0x7c;
      _0x41416f.JPPanelTag = 0x7d;
      _0x41416f.MG_SYMBOLS = [_0x41416f.Symbol.CHERRY, _0x41416f.Symbol.LEMON, _0x41416f.Symbol.ORANGE, _0x41416f.Symbol.GRAPE, _0x41416f.Symbol.PLUM, _0x41416f.Symbol.WATERMELON, _0x41416f.Symbol.BELL, _0x41416f.Symbol.BAR, _0x41416f.Symbol.WILD777];
      _0x41416f.JP_SYMBOLS = [_0x41416f.JP_TYPES.MINI, _0x41416f.JP_TYPES.MINOR, _0x41416f.JP_TYPES.MAJOR, _0x41416f.JP_TYPES.GRAND];
      _0x41416f.MID_FAKE_SYMBOLS_MG = _0x41416f.MG_SYMBOLS.concat([_0x41416f.Symbol.ROYAL_BONUS_COIN]);
      _0x41416f.MID_FAKE_SYMBOLS_BG = [_0x41416f.Symbol.EMPTY].concat(_0x41416f.Symbol.ROYAL_BONUS_COIN);
      _0x41416f.FAKE_SYMBOLS_MG = _0x41416f.MG_SYMBOLS.concat([_0x41416f.Symbol.BONUS_COIN, _0x41416f.Symbol.BONUS_COIN_JP]);
      _0x41416f.FAKE_SYMBOLS_BG = [_0x41416f.Symbol.EMPTY, _0x41416f.Symbol.BONUS_COIN, _0x41416f.Symbol.BONUS_COIN_JP];
      _0x41416f.SmallWinSoundOdd = [0x2, 0x4, 0x6];
      _0x41416f.BigWinSoundOdd = [0x6, 0xf, 0x1e];
      _0x41416f.ManualFeatureInfoTxt = ["String_01"];
      _0x41416f.ManualFeatureInfoTitle = "String_00";
      _0x41416f.CharacterT1UpgradeDuration = 0x0;
      _0x41416f.CharacterWinStartDuration = 0x0;
      _0x41416f.JokerMGWinThreshold = 0x5;
      _0x41416f.MID_COL = 0x1;
      _0x41416f.WIN_LINE = [[0x1, 0x4, 0x7], [0x0, 0x3, 0x6], [0x2, 0x5, 0x8], [0x0, 0x4, 0x8], [0x2, 0x4, 0x6]];
      _0x41416f.JPSpinOdd = [0.4, 0.3, 0.2, 0.1];
      _0x41416f.AudioFileRoot = "Sound/";
      _0x41416f.AudioFilePath = {
        'Reel_Spin': _0x41416f.AudioFileRoot + "Reel_Spin",
        'Reel_Stop': _0x41416f.AudioFileRoot + "Reel_Stop",
        'BGM_Debut': _0x41416f.AudioFileRoot + "BGM_Debut",
        'BGM_MG': _0x41416f.AudioFileRoot + "BGM_MG",
        'Reel_NearWin': _0x41416f.AudioFileRoot + 'Reel_NearWin',
        'Small_Win01': _0x41416f.AudioFileRoot + "Small_Win01",
        'Small_Win02': _0x41416f.AudioFileRoot + "Small_Win02",
        'Small_Win03': _0x41416f.AudioFileRoot + "Small_Win03",
        'Big_Win': _0x41416f.AudioFileRoot + "Big_Win",
        'Change_Win': _0x41416f.AudioFileRoot + "Change_Win",
        'Big_Win_End': _0x41416f.AudioFileRoot + "Big_Win_End",
        'Coin_Stop_1': _0x41416f.AudioFileRoot + 'Coin_Stop_1',
        'Coin_Stop_2': _0x41416f.AudioFileRoot + 'Coin_Stop_2',
        'Coin_Stop_3': _0x41416f.AudioFileRoot + "Coin_Stop_3",
        'Coin_Stop_4': _0x41416f.AudioFileRoot + 'Coin_Stop_4',
        'Coin_Show': _0x41416f.AudioFileRoot + "Coin_Show",
        'Collect_Fly': _0x41416f.AudioFileRoot + "Collect_Fly",
        'Collect_Flip': _0x41416f.AudioFileRoot + 'Collect_Flip',
        'Scatter_Bell': _0x41416f.AudioFileRoot + "Scatter_Bell",
        'Pot_Upgrate': _0x41416f.AudioFileRoot + "Pot_Upgrate",
        'Pot_Nearwin': _0x41416f.AudioFileRoot + 'Pot_Nearwin',
        'Pot_Win': _0x41416f.AudioFileRoot + "Pot_Win",
        'BG_Start': _0x41416f.AudioFileRoot + "BG_Start",
        'BG_Expand_Down': _0x41416f.AudioFileRoot + 'BG_Expand_Down',
        'Coin_Collect': _0x41416f.AudioFileRoot + "Coin_Collect",
        'BGM_BG': _0x41416f.AudioFileRoot + "BGM_BG",
        'BG_Jp_Coin': _0x41416f.AudioFileRoot + "BG_Jp_Coin",
        'BG_FreeSpins': _0x41416f.AudioFileRoot + "BG_FreeSpins",
        'Total_Win_Show': _0x41416f.AudioFileRoot + "Total_Win_Show",
        'BG_End': _0x41416f.AudioFileRoot + "BG_End",
        'Scatter_CoinIn': _0x41416f.AudioFileRoot + "Scatter_CoinIn",
        'Coin_Win': _0x41416f.AudioFileRoot + "Coin_Win",
        'Pot_Collect': _0x41416f.AudioFileRoot + 'Pot_Collect',
        'Pot_Loop': _0x41416f.AudioFileRoot + 'Pot_Loop',
        'FX_feature_Start': _0x41416f.AudioFileRoot + 'FX_feature_Start',
        'FX_feature_End': _0x41416f.AudioFileRoot + "FX_feature_End",
        'BG_FreeSpins00': _0x41416f.AudioFileRoot + "BG_FreeSpins00",
        'BG_FreeSpins01': _0x41416f.AudioFileRoot + "BG_FreeSpins01",
        'BG_FreeSpins02': _0x41416f.AudioFileRoot + 'BG_FreeSpins02',
        'MultipleOmen_Start': _0x41416f.AudioFileRoot + "MultipleOmen_Start",
        'Multiplier_Fire': _0x41416f.AudioFileRoot + "Multiplier_Fire",
        'Multiplier_FireHit': _0x41416f.AudioFileRoot + "Multiplier_FireHit",
        'Multiplier_Win': _0x41416f.AudioFileRoot + "Multiplier_Win",
        'Joker_MG_Idle2': _0x41416f.AudioFileRoot + 'Joker_MG_Idle2',
        'Joker_MG_Win': _0x41416f.AudioFileRoot + "Joker_MG_Win",
        'Joker_Pot_Upgrade': _0x41416f.AudioFileRoot + "Joker_Pot_Upgrade",
        'Joker_Pot_Win': _0x41416f.AudioFileRoot + 'Joker_Pot_Win',
        'Joker_FG_Muttiplier_Align': _0x41416f.AudioFileRoot + "Joker_FG_Muttiplier_Align",
        'Multiplier_Win2': _0x41416f.AudioFileRoot + 'Multiplier_Win2',
        'Character_Nice_win': _0x41416f.AudioFileRoot + "Character_Nice_win",
        'Character_Great_win': _0x41416f.AudioFileRoot + 'Character_Great_win'
      };
      _0x41416f.AudioClips = {
        'Reel_Spin': null,
        'Reel_Stop': null,
        'BGM_Debut': null,
        'BGM_MG': null,
        'Reel_NearWin': null,
        'Small_Win01': null,
        'Small_Win02': null,
        'Small_Win03': null,
        'Big_Win': null,
        'Change_Win': null,
        'Big_Win_End': null,
        'Coin_Stop_1': null,
        'Coin_Stop_2': null,
        'Coin_Stop_3': null,
        'Coin_Stop_4': null,
        'Coin_Show': null,
        'Collect_Fly': null,
        'Collect_Flip': null,
        'Scatter_Bell': null,
        'Pot_Upgrate': null,
        'Pot_Nearwin': null,
        'Pot_Win': null,
        'BG_Start': null,
        'BG_Expand_Down': null,
        'Coin_Collect': null,
        'BGM_BG': null,
        'BG_Jp_Coin': null,
        'BG_FreeSpins': null,
        'Total_Win_Show': null,
        'BG_End': null,
        'Scatter_CoinIn': null,
        'Coin_Win': null,
        'Pot_Collect': null,
        'Pot_Loop': null,
        'FX_feature_Start': null,
        'FX_feature_End': null,
        'BG_FreeSpins00': null,
        'BG_FreeSpins01': null,
        'BG_FreeSpins02': null,
        'MultipleOmen_Start': null,
        'Multiplier_Fire': null,
        'Multiplier_FireHit': null,
        'Multiplier_Win': null,
        'Joker_MG_Idle2': null,
        'Joker_MG_Win': null,
        'Joker_Pot_Upgrade': null,
        'Joker_Pot_Win': null,
        'Joker_FG_Muttiplier_Align': null,
        'Multiplier_Win2': null,
        'Character_Nice_win': null,
        'Character_Great_win': null
      };
      var _0x55e059 = _0x4c274a(_0x4694cb = _0x41416f) || _0x4694cb;
      var _0x1c50e1;
      var _0x3be27a;
      var _0x5cc518;
      var _0x230dea;
      var _0x120cc7;
      var _0x588c50;
      var _0x4c48a7;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "6b4c2xsN/hOXY0ofmj5VTZI", "CharacterEffect", undefined);
      var _0x4ddaf1 = _0x5d1a01.ccclass;
      var _0x14e304 = _0x5d1a01.property;
      _0x1c50e1 = _0x4ddaf1('CharacterEffect');
      _0x3be27a = _0x14e304({
        'type': _0x1971e0.Skeleton,
        'tooltip': "character skeleton"
      });
      _0x5cc518 = _0x14e304({
        'type': _0x1971e0.Skeleton,
        'tooltip': "character coin skeleton"
      });
      _0x120cc7 = function (_0x812caf) {
        function _0x524a89() {
          var _0x1b18e0;
          var _0x395b65 = arguments.length;
          var _0x31ffbe = new Array(_0x395b65);
          for (var _0x34f2e6 = 0x0; _0x34f2e6 < _0x395b65; _0x34f2e6++) {
            _0x31ffbe[_0x34f2e6] = arguments[_0x34f2e6];
          }
          _0x29845c(_0x1b18e0 = _0x812caf.call.apply(_0x812caf, [this].concat(_0x31ffbe)) || this, 'm_spine', _0x588c50, _0x1cc4fd(_0x1b18e0));
          _0x29845c(_0x1b18e0, "m_CharacterCoin", _0x4c48a7, _0x1cc4fd(_0x1b18e0));
          _0x1b18e0.m_lv = 0x1;
          _0x1b18e0.m_isNearWin = false;
          return _0x1b18e0;
        }
        _0x4235b3(_0x524a89, _0x812caf);
        var _0x19ea8f = _0x524a89.prototype;
        _0x19ea8f.onLoad = function () {
          this.PlayIdle();
          this.m_CharacterCoin.node.active = false;
        };
        _0x19ea8f.PlayCharacterCoin = function () {
          var _0x373c51 = _0x9f23dc(_0x288614().mark(function _0x4e7d88(_0x257092) {
            return _0x288614().wrap(function (_0x50a79b) {
              for (;;) {
                switch (_0x50a79b.prev = _0x50a79b.next) {
                  case 0x0:
                    this.m_CharacterCoin.node.active = true;
                    _0x50a79b.t0 = _0x257092;
                    _0x50a79b.next = 0x1 === _0x50a79b.t0 ? 0x4 : 0x2 === _0x50a79b.t0 ? 0x6 : 0x3 === _0x50a79b.t0 ? 0x8 : 0x4 === _0x50a79b.t0 ? 0xa : 0xc;
                    break;
                  case 0x4:
                    this.m_CharacterCoin.setSkin('LV1');
                    return _0x50a79b.abrupt("break", 0xc);
                  case 0x6:
                    this.m_CharacterCoin.setSkin("LV2");
                    return _0x50a79b.abrupt('break', 0xc);
                  case 0x8:
                    this.m_CharacterCoin.setSkin('LV3');
                    return _0x50a79b.abrupt("break", 0xc);
                  case 0xa:
                    this.m_CharacterCoin.setSkin('LV4');
                    return _0x50a79b.abrupt("break", 0xc);
                  case 0xc:
                    _0x50a79b.next = 0xe;
                    return _0x32d2d6.PlayAnimation(this.m_CharacterCoin, "Upgrade", false);
                  case 0xe:
                    this.m_CharacterCoin.node.active = false;
                  case 0xf:
                  case "end":
                    return _0x50a79b.stop();
                }
              }
            }, _0x4e7d88, this);
          }));
          return function (_0x5b6770) {
            return _0x373c51.apply(this, arguments);
          };
        }();
        _0x19ea8f.PlayIdle = function () {
          var _0x452fa3 = _0x9f23dc(_0x288614().mark(function _0x492b3d() {
            return _0x288614().wrap(function (_0x43c12c) {
              for (;;) {
                switch (_0x43c12c.prev = _0x43c12c.next) {
                  case 0x0:
                    _0x3dc7e8("PlayIdle");
                    this.m_spine.clearTrack(0x0);
                    _0x43c12c.t0 = this.m_lv;
                    _0x43c12c.next = 0x1 === _0x43c12c.t0 ? 0x5 : 0x2 === _0x43c12c.t0 ? 0x7 : 0x3 === _0x43c12c.t0 ? 0x9 : 0x4 === _0x43c12c.t0 ? 0xb : 0xd;
                    break;
                  case 0x5:
                    _0x32d2d6.PlayAnimation(this.m_spine, 'Lv1_Idle', true);
                    return _0x43c12c.abrupt("break", 0xd);
                  case 0x7:
                    _0x32d2d6.PlayAnimation(this.m_spine, 'Lv2_Idle', true);
                    return _0x43c12c.abrupt("break", 0xd);
                  case 0x9:
                    _0x32d2d6.PlayAnimation(this.m_spine, 'Lv3_Idle', true);
                    return _0x43c12c.abrupt("break", 0xd);
                  case 0xb:
                    _0x32d2d6.PlayAnimation(this.m_spine, "Lv4_Idle", true);
                    return _0x43c12c.abrupt("break", 0xd);
                  case 0xd:
                  case "end":
                    return _0x43c12c.stop();
                }
              }
            }, _0x492b3d, this);
          }));
          return function () {
            return _0x452fa3.apply(this, arguments);
          };
        }();
        _0x19ea8f.PlayUpgrade = function () {
          var _0x49b85d = _0x9f23dc(_0x288614().mark(function _0x390535() {
            return _0x288614().wrap(function (_0x4fd949) {
              for (;;) {
                switch (_0x4fd949.prev = _0x4fd949.next) {
                  case 0x0:
                    _0x3dc7e8("PlayUpgrade");
                    this.PlayCharacterCoin(this.m_lv);
                    _0x4fd949.t0 = this.m_lv;
                    _0x4fd949.next = 0x1 === _0x4fd949.t0 ? 0x5 : 0x2 === _0x4fd949.t0 ? 0x8 : 0x3 === _0x4fd949.t0 ? 0xb : 0x4 === _0x4fd949.t0 ? 0xe : 0x11;
                    break;
                  case 0x5:
                    _0x4fd949.next = 0x7;
                    return _0x32d2d6.PlayAnimation(this.m_spine, "Lv1_Upgrade", false);
                  case 0x7:
                    return _0x4fd949.abrupt("break", 0x11);
                  case 0x8:
                    _0x4fd949.next = 0xa;
                    return _0x32d2d6.PlayAnimation(this.m_spine, "Lv2_Upgrade", false);
                  case 0xa:
                    return _0x4fd949.abrupt('break', 0x11);
                  case 0xb:
                    _0x4fd949.next = 0xd;
                    return _0x32d2d6.PlayAnimation(this.m_spine, 'Lv3_Upgrade', false);
                  case 0xd:
                    return _0x4fd949.abrupt('break', 0x11);
                  case 0xe:
                    _0x4fd949.next = 0x10;
                    return _0x32d2d6.PlayAnimation(this.m_spine, 'Lv4_Upgrade', false);
                  case 0x10:
                    return _0x4fd949.abrupt("break", 0x11);
                  case 0x11:
                    this.m_lv = this.m_lv == 0x4 ? 0x4 : this.m_lv + 0x1;
                    this.PlayIdle();
                  case 0x13:
                  case "end":
                    return _0x4fd949.stop();
                }
              }
            }, _0x390535, this);
          }));
          return function () {
            return _0x49b85d.apply(this, arguments);
          };
        }();
        _0x19ea8f.PlayWinStart = function () {
          var _0x507639 = _0x9f23dc(_0x288614().mark(function _0x2ce3de() {
            return _0x288614().wrap(function (_0x55c5e7) {
              for (;;) {
                switch (_0x55c5e7.prev = _0x55c5e7.next) {
                  case 0x0:
                    _0x3dc7e8('PlayWinStart');
                    this.m_spine.clearTrack(0x0);
                    _0x55e059.CharacterWinStartDuration = this.m_spine.findAnimation('Win_Start').duration;
                    _0x55c5e7.next = 0x5;
                    return _0x32d2d6.PlayAnimation(this.m_spine, 'Win_Start', false);
                  case 0x5:
                  case 'end':
                    return _0x55c5e7.stop();
                }
              }
            }, _0x2ce3de, this);
          }));
          return function () {
            return _0x507639.apply(this, arguments);
          };
        }();
        _0x19ea8f.PlayWinLoop = function () {
          var _0x245528 = _0x9f23dc(_0x288614().mark(function _0x3208d9() {
            return _0x288614().wrap(function (_0x11004d) {
              for (;;) {
                switch (_0x11004d.prev = _0x11004d.next) {
                  case 0x0:
                    _0x3dc7e8("PlayWinLoop");
                    _0x11004d.next = 0x3;
                    return _0x32d2d6.PlayAnimation(this.m_spine, "Win_Loop", true);
                  case 0x3:
                  case "end":
                    return _0x11004d.stop();
                }
              }
            }, _0x3208d9, this);
          }));
          return function () {
            return _0x245528.apply(this, arguments);
          };
        }();
        _0x19ea8f.PlayWinEnd = function () {
          var _0x5c06c8 = _0x9f23dc(_0x288614().mark(function _0x40adc5() {
            return _0x288614().wrap(function (_0x5a8b68) {
              for (;;) {
                switch (_0x5a8b68.prev = _0x5a8b68.next) {
                  case 0x0:
                    _0x3dc7e8("PlayWinEnd");
                    _0x5a8b68.next = 0x3;
                    return _0x32d2d6.PlayAnimation(this.m_spine, "Win_End", false);
                  case 0x3:
                    this.m_lv = 0x1;
                    this.m_spine.clearTrack(0x0);
                    this.PlayIdle();
                  case 0x6:
                  case "end":
                    return _0x5a8b68.stop();
                }
              }
            }, _0x40adc5, this);
          }));
          return function () {
            return _0x5c06c8.apply(this, arguments);
          };
        }();
        _0x19ea8f.PlayT1NearWin = function () {
          var _0x4e6364 = _0x9f23dc(_0x288614().mark(function _0x43c69f() {
            return _0x288614().wrap(function (_0x5055c7) {
              for (;;) {
                switch (_0x5055c7.prev = _0x5055c7.next) {
                  case 0x0:
                    _0x3dc7e8('PlayT1NearWin');
                    this.m_isNearWin = true;
                    _0x5055c7.next = 0x4;
                    return _0x32d2d6.PlayAnimation(this.m_spine, "T1_NearWin", true, 0x1);
                  case 0x4:
                  case 'end':
                    return _0x5055c7.stop();
                }
              }
            }, _0x43c69f, this);
          }));
          return function () {
            return _0x4e6364.apply(this, arguments);
          };
        }();
        _0x19ea8f.EndT1NearWin = function () {
          var _0x7f8f23 = _0x9f23dc(_0x288614().mark(function _0x2477d4() {
            return _0x288614().wrap(function (_0x3bcca8) {
              for (;;) {
                switch (_0x3bcca8.prev = _0x3bcca8.next) {
                  case 0x0:
                    _0x3dc7e8("EndT1NearWin");
                    this.m_isNearWin = false;
                    this.m_spine.clearTrack(0x1);
                    this.PlayIdle();
                  case 0x4:
                  case "end":
                    return _0x3bcca8.stop();
                }
              }
            }, _0x2477d4, this);
          }));
          return function () {
            return _0x7f8f23.apply(this, arguments);
          };
        }();
        _0x19ea8f.PlayT1Upgrade = function () {
          var _0x4eb6b5 = _0x9f23dc(_0x288614().mark(function _0x38f772() {
            var _0x54e7d6;
            var _0x283128 = this;
            return _0x288614().wrap(function (_0x5eac81) {
              for (;;) {
                switch (_0x5eac81.prev = _0x5eac81.next) {
                  case 0x0:
                    _0x3dc7e8("PlayT1Upgrade");
                    _0x54e7d6 = function (_0x4b8b0e) {
                      if ("Upgrade" == _0x4b8b0e) {
                        _0x70e19b(_0x283128.node).delay(0.016).call(function () {
                          _0x283128.m_lv = 0x4;
                          _0x283128.PlayIdle();
                        }).start();
                      }
                    };
                    this.m_spine.clearTrack(0x1);
                    _0x5eac81.next = 0x5;
                    return _0x32d2d6.PlayAnimation(this.m_spine, "T1_Upgrade", false, 0x1, _0x54e7d6);
                  case 0x5:
                    this.m_spine.clearTrack(0x1);
                  case 0x6:
                  case "end":
                    return _0x5eac81.stop();
                }
              }
            }, _0x38f772, this);
          }));
          return function () {
            return _0x4eb6b5.apply(this, arguments);
          };
        }();
        _0x19ea8f.PlayT1Collect = function () {
          var _0x31d0a4 = _0x9f23dc(_0x288614().mark(function _0xc2edea() {
            return _0x288614().wrap(function (_0x182539) {
              for (;;) {
                switch (_0x182539.prev = _0x182539.next) {
                  case 0x0:
                    _0x3dc7e8("PlayT1Collect");
                    _0x182539.next = 0x3;
                    return _0x32d2d6.PlayAnimation(this.m_spine, "T1_Collect", false, 0x1);
                  case 0x3:
                    this.m_spine.clearTrack(0x1);
                  case 0x4:
                  case "end":
                    return _0x182539.stop();
                }
              }
            }, _0xc2edea, this);
          }));
          return function () {
            return _0x31d0a4.apply(this, arguments);
          };
        }();
        _0xef4a8(_0x524a89, [{
          'key': 'Lv',
          'get': function () {
            return this.m_lv;
          },
          'set': function (_0x1040b5) {
            this.m_lv = _0x1040b5;
          }
        }]);
        return _0x524a89;
      }(_0xead8bf);
      _0x588c50 = _0x2f48b7(_0x120cc7.prototype, "m_spine", [_0x3be27a], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4c48a7 = _0x2f48b7(_0x120cc7.prototype, 'm_CharacterCoin', [_0x5cc518], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x43e1e0 = _0x1c50e1(_0x230dea = _0x120cc7) || _0x230dea;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "db4337zK39CwpvA3Bh+gyjl", "index", undefined);
      if (!globalThis.Astarte) {
        globalThis.Astarte = {};
      }
      var _0x47fd8a;
      var _0x10def2;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "2c465urF+5E6a8SAy0Y1679", "AppManager", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "01a4bCeOlRFS4PxU4ftD5wn", "BackpackManager", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "e98d6g3Sn5F/phbS0JGqk6v", 'BuyBonusManager', undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "810fcmXyb9Bu4OzTZmIkoz9", "CommonGameManager", undefined);
      (function (_0x39a202) {
        _0x39a202[_0x39a202.Get = 0x0] = 'Get';
        _0x39a202[_0x39a202.Post = 0x1] = "Post";
      })(_0x47fd8a || (_0x47fd8a = {}));
      (function (_0x37ab88) {
        _0x37ab88[_0x37ab88.Ignore = 0x0] = "Ignore";
        _0x37ab88[_0x37ab88.Handle = 0x1] = "Handle";
      })(_0x10def2 || (_0x10def2 = {}));
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, '0e324Erw0JDW6aCYO5d0i2g', "DailyMissionManager", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "dd020H2ox5CQ70Z9VNWXYpK", "DebrisManager", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, '1fcfdTjgMdDr4mh99NzZ29B', 'GaiaManager', undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, 'a3f63TygSlA6KwEkLDlQIoJ', 'GiftCodeManager', undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "9692fSvI0xNR5GVPmbcEfzq", "IframeCommandManager", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "d8221PEwlRBep+hz+x7w5Ot", 'NewBottomBarManager', undefined);
      var _0x3f2a41;
      var _0xfbfa53;
      var _0xa626c7;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "28748R+s5pCY7kwYZ0zkqKk", "NewExtraManager", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, '861e1J/bwRGlI4J13TOOh4y', "TrialManager", undefined);
      (function (_0x2314d5) {
        _0x2314d5[_0x2314d5.None = 0x0] = "None";
        _0x2314d5[_0x2314d5.Playing = 0x1] = "Playing";
        _0x2314d5[_0x2314d5.Item = 0x2] = "Item";
      })(_0xa626c7 || (_0xa626c7 = {}));
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "0f3df9al6NIJJ1/5ZP5aShG", 'MsgBoxManager', undefined);
      var _0x49193a;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "8de065l1yBCNoeRGxK2yzaD", "StateManager", undefined);
      var _0x342605;
      var _0xa1be7d;
      var _0x53def9;
      var _0x509786;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, 'c7e3d4LY9dOUokI+wu7YgCQ', "AutoShowManager", undefined);
      (function (_0x498ecb) {
        _0x498ecb[_0x498ecb.SKY_BAR = 0x0] = "SKY_BAR";
        _0x498ecb[_0x498ecb.PAYTABLE = 0x1] = "PAYTABLE";
        _0x498ecb[_0x498ecb.LANDING = 0x2] = 'LANDING';
        _0x498ecb[_0x498ecb.DISCOUNT = 0x3] = "DISCOUNT";
        _0x498ecb[_0x498ecb.EXTRA_BET = 0x4] = "EXTRA_BET";
        _0x498ecb[_0x498ecb.ICONBOX = 0x5] = 'ICONBOX';
      })(_0xa1be7d || (_0xa1be7d = {}));
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "d388f5XkRRFcYXg5usnXTa/", 'LocaleStringManager', undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "077a5gmYEpIQqr+YOtt+g08", 'LocalStorageManager', undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "8c0f7IX3HNLY6BaWiL8u0j4", "SoundManager", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "50f8dtxxuFDo6qJW6FBFBaO", 'EventManager', undefined);
      var _0x5a50fc;
      var _0x36c32f;
      var _0x350c15;
      var _0xc51b4b;
      var _0x19a94e;
      var _0x6a0c0b;
      var _0x3b8dba;
      var _0x2a89de;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, '18947v7ICNDlYz3G5vE642k', "LoadPrefabManager", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "de7f6JwfsBHBYba0UlqLoFI", "NotificationManager", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, '81438uBGiNJXoDkKAmuxEJu', "FunctionControlManager", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "3e41doUMVNLQbg53Jn6N9ch", "SoundAudioManager", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, 'cfe9e3/byhFGL1S1brGrbPU', "DebugManager", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "858d45NBqBLW5W3J41WER1G", "index", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "d64818316tNYbiLzXOADkPU", "CharacterJokerEffect", undefined);
      var _0x1ec5f2 = _0x5d1a01.ccclass;
      var _0x3beb84 = _0x5d1a01.property;
      _0xc51b4b = _0x1ec5f2("CharacterJokerEffect");
      _0x19a94e = _0x3beb84({
        'type': _0x1971e0.Skeleton,
        'tooltip': "joker effect spine"
      });
      _0x3b8dba = function (_0x5c05ea) {
        function _0x378ab8() {
          var _0x57b960;
          var _0x539f88 = arguments.length;
          var _0x2b3074 = new Array(_0x539f88);
          for (var _0x412828 = 0x0; _0x412828 < _0x539f88; _0x412828++) {
            _0x2b3074[_0x412828] = arguments[_0x412828];
          }
          _0x29845c(_0x57b960 = _0x5c05ea.call.apply(_0x5c05ea, [this].concat(_0x2b3074)) || this, "m_spine", _0x2a89de, _0x1cc4fd(_0x57b960));
          _0x57b960.m_isBigWinLoop = false;
          _0x57b960.m_isNearWinLoop = false;
          _0x57b960.m_isIdleLooping = false;
          _0x57b960.m_isUpgrading = false;
          _0x57b960.m_mixTime = 0.15;
          return _0x57b960;
        }
        _0x4235b3(_0x378ab8, _0x5c05ea);
        var _0x29e1e8 = _0x378ab8.prototype;
        _0x29e1e8.onLoad = function () {
          this.m_spine.setMix("Pot_Upgrade", "MG_BigWin_Start", this.m_mixTime);
          this.m_spine.setMix("Pot_Upgrade", "MG_Win", this.m_mixTime);
          this.m_spine.setMix("MG_Win", "Pot_Upgrade", this.m_mixTime);
          this.SetDarker();
        };
        _0x29e1e8.SetDarker = function () {
          var _0x32dee2 = this.m_spine.color;
          this.m_spine.color = _0x55da1e(0.9 * _0x32dee2.r, 0.9 * _0x32dee2.g, 0.9 * _0x32dee2.b, _0x32dee2.a);
        };
        _0x29e1e8.PlayIdle = function () {
          var _0x3086fc = _0x9f23dc(_0x288614().mark(function _0x312350() {
            var _0x757f75;
            var _0x271355;
            var _0x3f22a8;
            return _0x288614().wrap(function (_0x90bf1a) {
              for (;;) {
                switch (_0x90bf1a.prev = _0x90bf1a.next) {
                  case 0x0:
                    _0x3dc7e8("joker play idle");
                    if (!this.m_isBigWinLoop && !this.m_isIdleLooping) {
                      _0x90bf1a.next = 0x3;
                      break;
                    }
                    return _0x90bf1a.abrupt('return');
                  case 0x3:
                    this.CloseAllFlag();
                    this.m_isIdleLooping = true;
                  case 0x5:
                    if (!this.m_isIdleLooping) {
                      _0x90bf1a.next = 0x1c;
                      break;
                    }
                    _0x757f75 = 0x3 + Math.floor(0x3 * Math.random());
                    _0x271355 = 0x0;
                  case 0x8:
                    if (!(_0x271355 < _0x757f75)) {
                      _0x90bf1a.next = 0x10;
                      break;
                    }
                    _0x90bf1a.next = 0xb;
                    return _0x32d2d6.PlayAnimation(this.m_spine, 'MG_Idle', false);
                  case 0xb:
                    if (this.m_isIdleLooping) {
                      _0x90bf1a.next = 0xd;
                      break;
                    }
                    return _0x90bf1a.abrupt("return");
                  case 0xd:
                    _0x271355++;
                    _0x90bf1a.next = 0x8;
                    break;
                  case 0x10:
                    _0x3f22a8 = 0x0;
                  case 0x11:
                    if (!(_0x3f22a8 < 0x2)) {
                      _0x90bf1a.next = 0x1a;
                      break;
                    }
                    _0x350c15.Play(_0x55e059.AudioClips.Joker_MG_Idle2);
                    _0x90bf1a.next = 0x15;
                    return _0x32d2d6.PlayAnimation(this.m_spine, "MG_Idle2", false);
                  case 0x15:
                    if (this.m_isIdleLooping) {
                      _0x90bf1a.next = 0x17;
                      break;
                    }
                    return _0x90bf1a.abrupt("return");
                  case 0x17:
                    _0x3f22a8++;
                    _0x90bf1a.next = 0x11;
                    break;
                  case 0x1a:
                    _0x90bf1a.next = 0x5;
                    break;
                  case 0x1c:
                  case "end":
                    return _0x90bf1a.stop();
                }
              }
            }, _0x312350, this);
          }));
          return function () {
            return _0x3086fc.apply(this, arguments);
          };
        }();
        _0x29e1e8.PlayBigWin = function () {
          var _0xbf702 = _0x9f23dc(_0x288614().mark(function _0x5c800a() {
            return _0x288614().wrap(function (_0x3d2582) {
              for (;;) {
                switch (_0x3d2582.prev = _0x3d2582.next) {
                  case 0x0:
                    _0x3dc7e8("joker play big win");
                    this.CloseAllFlag();
                    this.m_isBigWinLoop = true;
                    _0x3d2582.next = 0x5;
                    return _0x32d2d6.PlayAnimation(this.m_spine, "MG_BigWin_Start", false);
                  case 0x5:
                    _0x32d2d6.PlayAnimation(this.m_spine, 'MG_BigWin_Loop', true);
                  case 0x6:
                  case "end":
                    return _0x3d2582.stop();
                }
              }
            }, _0x5c800a, this);
          }));
          return function () {
            return _0xbf702.apply(this, arguments);
          };
        }();
        _0x29e1e8.PlayBigWinEnd = function () {
          var _0x358467 = _0x9f23dc(_0x288614().mark(function _0x5d6663() {
            return _0x288614().wrap(function (_0x2616d0) {
              for (;;) {
                switch (_0x2616d0.prev = _0x2616d0.next) {
                  case 0x0:
                    if (this.m_isBigWinLoop) {
                      _0x2616d0.next = 0x2;
                      break;
                    }
                    return _0x2616d0.abrupt("return");
                  case 0x2:
                    this.CloseAllFlag();
                    _0x2616d0.next = 0x5;
                    return _0x32d2d6.PlayAnimation(this.m_spine, "MG_BigWin_End", false);
                  case 0x5:
                    this.PlayIdle();
                  case 0x6:
                  case "end":
                    return _0x2616d0.stop();
                }
              }
            }, _0x5d6663, this);
          }));
          return function () {
            return _0x358467.apply(this, arguments);
          };
        }();
        _0x29e1e8.PlayPotNearWin = function () {
          var _0x1b16c6 = _0x9f23dc(_0x288614().mark(function _0x4029e0() {
            return _0x288614().wrap(function (_0x3b253b) {
              for (;;) {
                switch (_0x3b253b.prev = _0x3b253b.next) {
                  case 0x0:
                    this.CloseAllFlag();
                    this.m_isNearWinLoop = true;
                    _0x3b253b.next = 0x4;
                    return _0x32d2d6.PlayAnimation(this.m_spine, "Pot_NearWin_Start", false);
                  case 0x4:
                    _0x32d2d6.PlayAnimation(this.m_spine, "Pot_NearWin_Loop", true);
                  case 0x5:
                  case "end":
                    return _0x3b253b.stop();
                }
              }
            }, _0x4029e0, this);
          }));
          return function () {
            return _0x1b16c6.apply(this, arguments);
          };
        }();
        _0x29e1e8.PlayPotNearWinEnd = function () {
          var _0x5a51ae = _0x9f23dc(_0x288614().mark(function _0x5a2b50() {
            return _0x288614().wrap(function (_0x521222) {
              for (;;) {
                switch (_0x521222.prev = _0x521222.next) {
                  case 0x0:
                    if (this.m_isNearWinLoop) {
                      _0x521222.next = 0x2;
                      break;
                    }
                    return _0x521222.abrupt("return");
                  case 0x2:
                    this.CloseAllFlag();
                    _0x521222.next = 0x5;
                    return _0x32d2d6.PlayAnimation(this.m_spine, 'Pot_NearWin_End', false);
                  case 0x5:
                    this.PlayIdle();
                  case 0x6:
                  case "end":
                    return _0x521222.stop();
                }
              }
            }, _0x5a2b50, this);
          }));
          return function () {
            return _0x5a51ae.apply(this, arguments);
          };
        }();
        _0x29e1e8.PlayMGWin = function () {
          var _0x29f8e7 = _0x9f23dc(_0x288614().mark(function _0x3c4e16() {
            return _0x288614().wrap(function (_0x521e45) {
              for (;;) {
                switch (_0x521e45.prev = _0x521e45.next) {
                  case 0x0:
                    _0x3dc7e8("joker play mg win");
                    if (!this.m_isUpgrading) {
                      _0x521e45.next = 0x3;
                      break;
                    }
                    return _0x521e45.abrupt("return");
                  case 0x3:
                    this.CloseAllFlag();
                    _0x350c15.Play(_0x55e059.AudioClips.Joker_MG_Win);
                    _0x521e45.next = 0x7;
                    return _0x32d2d6.PlayAnimation(this.m_spine, "MG_Win", false);
                  case 0x7:
                    if (!this.m_isUpgrading) {
                      _0x521e45.next = 0x9;
                      break;
                    }
                    return _0x521e45.abrupt("return");
                  case 0x9:
                    this.PlayIdle();
                  case 0xa:
                  case "end":
                    return _0x521e45.stop();
                }
              }
            }, _0x3c4e16, this);
          }));
          return function () {
            return _0x29f8e7.apply(this, arguments);
          };
        }();
        _0x29e1e8.PlayPotWin = function () {
          var _0x58ad7b = _0x9f23dc(_0x288614().mark(function _0x471c4a() {
            return _0x288614().wrap(function (_0x1d8019) {
              for (;;) {
                switch (_0x1d8019.prev = _0x1d8019.next) {
                  case 0x0:
                    this.CloseAllFlag();
                    _0x350c15.Play(_0x55e059.AudioClips.Joker_Pot_Win);
                    _0x1d8019.next = 0x4;
                    return _0x32d2d6.PlayAnimation(this.m_spine, "Pot_Win", false);
                  case 0x4:
                    this.PlayIdle();
                  case 0x5:
                  case "end":
                    return _0x1d8019.stop();
                }
              }
            }, _0x471c4a, this);
          }));
          return function () {
            return _0x58ad7b.apply(this, arguments);
          };
        }();
        _0x29e1e8.PlayPotUpgrade = function () {
          var _0x4d9734 = _0x9f23dc(_0x288614().mark(function _0x218987(_0x3168ab) {
            return _0x288614().wrap(function (_0x16a938) {
              for (;;) {
                switch (_0x16a938.prev = _0x16a938.next) {
                  case 0x0:
                    if (undefined === _0x3168ab) {
                      _0x3168ab = false;
                    }
                    if (!this.m_isUpgrading) {
                      _0x16a938.next = 0x3;
                      break;
                    }
                    return _0x16a938.abrupt("return");
                  case 0x3:
                    _0x3dc7e8("joker play pot upgrade");
                    this.CloseAllFlag();
                    this.m_isUpgrading = true;
                    if (!_0x3168ab) {
                      _0x350c15.Play(_0x55e059.AudioClips.Joker_Pot_Upgrade);
                    }
                    _0x16a938.next = 0x9;
                    return _0x32d2d6.PlayAnimation(this.m_spine, "Pot_Upgrade", false);
                  case 0x9:
                    this.PlayIdle();
                  case 0xa:
                  case "end":
                    return _0x16a938.stop();
                }
              }
            }, _0x218987, this);
          }));
          return function (_0xd7158a) {
            return _0x4d9734.apply(this, arguments);
          };
        }();
        _0x29e1e8.PlayFGMultiplier = function () {
          var _0x57e1c2 = _0x9f23dc(_0x288614().mark(function _0x21493b(_0x61803a, _0x264915) {
            return _0x288614().wrap(function (_0x65f958) {
              for (;;) {
                switch (_0x65f958.prev = _0x65f958.next) {
                  case 0x0:
                    this.CloseAllFlag();
                    _0x350c15.Play(_0x55e059.AudioClips.Joker_FG_Muttiplier_Align);
                    _0x65f958.next = 0x4;
                    return _0x32d2d6.PlayAnimation(this.m_spine, "FG_Multiplier", false, 0x0, _0x264915);
                  case 0x4:
                    this.PlayIdle();
                  case 0x5:
                  case "end":
                    return _0x65f958.stop();
                }
              }
            }, _0x21493b, this);
          }));
          return function (_0x40d806, _0x23b8ad) {
            return _0x57e1c2.apply(this, arguments);
          };
        }();
        _0x29e1e8.CloseAllFlag = function () {
          this.m_isIdleLooping = false;
          this.m_isBigWinLoop = false;
          this.m_isNearWinLoop = false;
          this.m_isUpgrading = false;
        };
        return _0x378ab8;
      }(_0xead8bf);
      _0x2a89de = _0x2f48b7(_0x3b8dba.prototype, "m_spine", [_0x19a94e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x4fec41 = _0xc51b4b(_0x6a0c0b = _0x3b8dba) || _0x6a0c0b;
      var _0x54ee42;
      var _0x54bcd2;
      var _0x2f8bb0;
      var _0x583abf;
      var _0xa6d966;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "2c1f7CKfypO14PDamiLOm6T", "CounterEffect", undefined);
      var _0x4b1a40 = _0x5d1a01.ccclass;
      var _0x79d5f6 = _0x5d1a01.property;
      _0x54ee42 = _0x4b1a40("CounterEffect");
      _0x54bcd2 = _0x79d5f6({
        'type': _0x1971e0.Skeleton,
        'tooltip': "counter spine"
      });
      _0x583abf = function (_0x52e73) {
        function _0x3062b0() {
          var _0x367581;
          var _0x685f6c = arguments.length;
          var _0x35acf6 = new Array(_0x685f6c);
          for (var _0x9cf14f = 0x0; _0x9cf14f < _0x685f6c; _0x9cf14f++) {
            _0x35acf6[_0x9cf14f] = arguments[_0x9cf14f];
          }
          _0x29845c(_0x367581 = _0x52e73.call.apply(_0x52e73, [this].concat(_0x35acf6)) || this, "m_counterAnim", _0xa6d966, _0x1cc4fd(_0x367581));
          return _0x367581;
        }
        _0x4235b3(_0x3062b0, _0x52e73);
        var _0x49d672 = _0x3062b0.prototype;
        _0x49d672.CounterChange = function () {
          var _0x4cb227 = _0x9f23dc(_0x288614().mark(function _0x1cfa98(_0x5516fe, _0x2c047c) {
            return _0x288614().wrap(function (_0x460fec) {
              for (;;) {
                switch (_0x460fec.prev = _0x460fec.next) {
                  case 0x0:
                    if (0x3 != _0x5516fe) {
                      _0x460fec.next = 0x7;
                      break;
                    }
                    if (_0x2c047c != _0x5516fe - 0x1) {
                      _0x460fec.next = 0x5;
                      break;
                    }
                    this.m_counterAnim.node.active = true;
                    _0x460fec.next = 0x5;
                    return _0x32d2d6.PlayAnimation(this.m_counterAnim, 'Time_3_to_2', false);
                  case 0x5:
                    _0x460fec.next = 0x26;
                    break;
                  case 0x7:
                    if (0x2 != _0x5516fe) {
                      _0x460fec.next = 0x14;
                      break;
                    }
                    if (_0x2c047c != _0x5516fe - 0x1) {
                      _0x460fec.next = 0xe;
                      break;
                    }
                    this.m_counterAnim.node.active = true;
                    _0x460fec.next = 0xc;
                    return _0x32d2d6.PlayAnimation(this.m_counterAnim, 'Time_2_to_1', false);
                  case 0xc:
                    _0x460fec.next = 0x12;
                    break;
                  case 0xe:
                    this.m_counterAnim.node.active = true;
                    _0x350c15.Play(_0x55e059.AudioClips.BG_FreeSpins02, false);
                    _0x460fec.next = 0x12;
                    return _0x32d2d6.PlayAnimation(this.m_counterAnim, "Time_2_to_3", false);
                  case 0x12:
                    _0x460fec.next = 0x26;
                    break;
                  case 0x14:
                    if (0x1 != _0x5516fe) {
                      _0x460fec.next = 0x21;
                      break;
                    }
                    if (_0x2c047c != _0x5516fe - 0x1) {
                      _0x460fec.next = 0x1b;
                      break;
                    }
                    this.m_counterAnim.node.active = true;
                    _0x460fec.next = 0x19;
                    return _0x32d2d6.PlayAnimation(this.m_counterAnim, "Time_1_to_0", false);
                  case 0x19:
                    _0x460fec.next = 0x1f;
                    break;
                  case 0x1b:
                    this.m_counterAnim.node.active = true;
                    _0x350c15.Play(_0x55e059.AudioClips.BG_FreeSpins01, false);
                    _0x460fec.next = 0x1f;
                    return _0x32d2d6.PlayAnimation(this.m_counterAnim, "Time_1_to_3", false);
                  case 0x1f:
                    _0x460fec.next = 0x26;
                    break;
                  case 0x21:
                    if (0x0 != _0x5516fe) {
                      _0x460fec.next = 0x26;
                      break;
                    }
                    this.m_counterAnim.node.active = true;
                    _0x350c15.Play(_0x55e059.AudioClips.BG_FreeSpins00, false);
                    _0x460fec.next = 0x26;
                    return _0x32d2d6.PlayAnimation(this.m_counterAnim, "Time_0_to_3", false);
                  case 0x26:
                  case "end":
                    return _0x460fec.stop();
                }
              }
            }, _0x1cfa98, this);
          }));
          return function (_0x2c5738, _0x433aee) {
            return _0x4cb227.apply(this, arguments);
          };
        }();
        _0x49d672.CounterClose = function () {
          var _0x59c023 = _0x9f23dc(_0x288614().mark(function _0x8a21b7() {
            return _0x288614().wrap(function (_0x16f365) {
              for (;;) {
                switch (_0x16f365.prev = _0x16f365.next) {
                  case 0x0:
                    this.m_counterAnim.node.active = true;
                    _0x16f365.next = 0x3;
                    return _0x32d2d6.PlayAnimation(this.m_counterAnim, 'Close', false);
                  case 0x3:
                    this.m_counterAnim.node.active = false;
                  case 0x4:
                  case "end":
                    return _0x16f365.stop();
                }
              }
            }, _0x8a21b7, this);
          }));
          return function () {
            return _0x59c023.apply(this, arguments);
          };
        }();
        _0x49d672.CounterShow = function () {
          var _0x5a0c0d = _0x9f23dc(_0x288614().mark(function _0x107854() {
            return _0x288614().wrap(function (_0xe4ad5) {
              for (;;) {
                switch (_0xe4ad5.prev = _0xe4ad5.next) {
                  case 0x0:
                    this.m_counterAnim.node.getParent().active = true;
                    this.m_counterAnim.node.active = true;
                    _0xe4ad5.next = 0x4;
                    return _0x32d2d6.PlayAnimation(this.m_counterAnim, "Show", false);
                  case 0x4:
                  case "end":
                    return _0xe4ad5.stop();
                }
              }
            }, _0x107854, this);
          }));
          return function () {
            return _0x5a0c0d.apply(this, arguments);
          };
        }();
        return _0x3062b0;
      }(_0xead8bf);
      _0xa6d966 = _0x2f48b7(_0x583abf.prototype, "m_counterAnim", [_0x54bcd2], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x585337 = _0x54ee42(_0x2f8bb0 = _0x583abf) || _0x2f8bb0;
      var _0x1f90ba;
      var _0x2c815d;
      var _0x18be1d;
      var _0x2ec282;
      var _0x41f86c;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "db3e1uTgHlBNaa30AEopabV", "FXReelEffect", undefined);
      var _0x20d236 = _0x5d1a01.ccclass;
      var _0x147965 = _0x5d1a01.property;
      _0x1f90ba = _0x20d236('FXReelEffect');
      _0x2c815d = _0x147965({
        'type': _0x1971e0.Skeleton,
        'tooltip': "FX Reel anim"
      });
      _0x2ec282 = function (_0x3b6905) {
        function _0x1946dd() {
          var _0x468088;
          var _0xbbb937 = arguments.length;
          var _0x151dae = new Array(_0xbbb937);
          for (var _0x4955d3 = 0x0; _0x4955d3 < _0xbbb937; _0x4955d3++) {
            _0x151dae[_0x4955d3] = arguments[_0x4955d3];
          }
          _0x29845c(_0x468088 = _0x3b6905.call.apply(_0x3b6905, [this].concat(_0x151dae)) || this, "m_FXReel", _0x41f86c, _0x1cc4fd(_0x468088));
          _0x468088.m_gameView = null;
          return _0x468088;
        }
        _0x4235b3(_0x1946dd, _0x3b6905);
        var _0x2f1cd5 = _0x1946dd.prototype;
        _0x2f1cd5.Init = function (_0x53da5e) {
          this.m_gameView = _0x53da5e;
        };
        _0x2f1cd5.ShowFXFeature = function () {
          var _0x3a78c0 = _0x9f23dc(_0x288614().mark(function _0x2a6fe8() {
            return _0x288614().wrap(function (_0x3c2f58) {
              for (;;) {
                switch (_0x3c2f58.prev = _0x3c2f58.next) {
                  case 0x0:
                    this.m_FXReel.node.getParent().active = true;
                    this.m_FXReel.node.active = true;
                    if (!this.m_gameView.IsLandscape) {
                      _0x3c2f58.next = 0x8;
                      break;
                    }
                    _0x3c2f58.next = 0x5;
                    return _0x32d2d6.PlayAnimation(this.m_FXReel, "Start_L", false);
                  case 0x5:
                    _0x32d2d6.PlayAnimation(this.m_FXReel, 'Loop_L', true);
                    _0x3c2f58.next = 0xb;
                    break;
                  case 0x8:
                    _0x3c2f58.next = 0xa;
                    return _0x32d2d6.PlayAnimation(this.m_FXReel, 'Start_S', false);
                  case 0xa:
                    _0x32d2d6.PlayAnimation(this.m_FXReel, "Loop_S", true);
                  case 0xb:
                  case 'end':
                    return _0x3c2f58.stop();
                }
              }
            }, _0x2a6fe8, this);
          }));
          return function () {
            return _0x3a78c0.apply(this, arguments);
          };
        }();
        _0x2f1cd5.ShowFXFeatureEnd = function () {
          var _0x2d341c = _0x9f23dc(_0x288614().mark(function _0x36856d() {
            return _0x288614().wrap(function (_0x2a8909) {
              for (;;) {
                switch (_0x2a8909.prev = _0x2a8909.next) {
                  case 0x0:
                    if (!this.m_gameView.IsLandscape) {
                      _0x2a8909.next = 0x5;
                      break;
                    }
                    _0x2a8909.next = 0x3;
                    return _0x32d2d6.PlayAnimation(this.m_FXReel, "End_L", false);
                  case 0x3:
                    _0x2a8909.next = 0x7;
                    break;
                  case 0x5:
                    _0x2a8909.next = 0x7;
                    return _0x32d2d6.PlayAnimation(this.m_FXReel, 'End_S', false);
                  case 0x7:
                    this.m_FXReel.node.active = false;
                  case 0x8:
                  case "end":
                    return _0x2a8909.stop();
                }
              }
            }, _0x36856d, this);
          }));
          return function () {
            return _0x2d341c.apply(this, arguments);
          };
        }();
        _0x2f1cd5.ShowJPStopFeature = function () {
          var _0x22e7b5 = _0x9f23dc(_0x288614().mark(function _0x29374f() {
            return _0x288614().wrap(function (_0x47f2f6) {
              for (;;) {
                switch (_0x47f2f6.prev = _0x47f2f6.next) {
                  case 0x0:
                    this.m_FXReel.node.getParent().active = true;
                    this.m_FXReel.node.active = true;
                    if (!this.m_gameView.IsLandscape) {
                      _0x47f2f6.next = 0x7;
                      break;
                    }
                    _0x47f2f6.next = 0x5;
                    return _0x32d2d6.PlayAnimation(this.m_FXReel, "JP_Start_L", false);
                  case 0x5:
                    _0x47f2f6.next = 0x9;
                    break;
                  case 0x7:
                    _0x47f2f6.next = 0x9;
                    return _0x32d2d6.PlayAnimation(this.m_FXReel, 'JP_Start_S', false);
                  case 0x9:
                    this.m_FXReel.node.active = false;
                  case 0xa:
                  case "end":
                    return _0x47f2f6.stop();
                }
              }
            }, _0x29374f, this);
          }));
          return function () {
            return _0x22e7b5.apply(this, arguments);
          };
        }();
        return _0x1946dd;
      }(_0xead8bf);
      _0x41f86c = _0x2f48b7(_0x2ec282.prototype, "m_FXReel", [_0x2c815d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x322adf = _0x1f90ba(_0x18be1d = _0x2ec282) || _0x18be1d;
      var _0x52c40d;
      var _0x354282;
      var _0x292c51;
      var _0x44f2b1;
      var _0x1af3c8;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "16b0cGTYVFGJoQ55GpzNYN5", "FlyEffect", undefined);
      var _0x3c9871 = _0x5d1a01.ccclass;
      var _0x22d807 = _0x5d1a01.property;
      _0x52c40d = _0x3c9871('FlyEffect');
      _0x354282 = _0x22d807({
        'type': _0x1971e0.Skeleton,
        'tooltip': "fly prefab spine"
      });
      _0x44f2b1 = function (_0x3b49fc) {
        function _0x9251e9() {
          var _0x2ba5ce;
          var _0x407c55 = arguments.length;
          var _0x147552 = new Array(_0x407c55);
          for (var _0xcc71e9 = 0x0; _0xcc71e9 < _0x407c55; _0xcc71e9++) {
            _0x147552[_0xcc71e9] = arguments[_0xcc71e9];
          }
          _0x29845c(_0x2ba5ce = _0x3b49fc.call.apply(_0x3b49fc, [this].concat(_0x147552)) || this, "m_flySpine", _0x1af3c8, _0x1cc4fd(_0x2ba5ce));
          _0x2ba5ce.m_effectPlate = null;
          return _0x2ba5ce;
        }
        _0x4235b3(_0x9251e9, _0x3b49fc);
        var _0x3248d6 = _0x9251e9.prototype;
        _0x3248d6.Init = function (_0x163c5c) {
          this.m_effectPlate = _0x163c5c;
        };
        _0x3248d6.SetSkin = function (_0x49baad, _0x24fe7d) {
          if (undefined === _0x49baad) {
            _0x49baad = 0x0;
          }
          if (undefined === _0x24fe7d) {
            _0x24fe7d = 0x0;
          }
          switch (_0x49baad) {
            case _0x55e059.Symbol.BONUS_COIN:
              this.m_flySpine.setSkin("Bonus");
              break;
            case _0x55e059.Symbol.BONUS_COIN_JP:
              switch (_0x24fe7d) {
                case _0x55e059.JP_TYPES.GRAND:
                  this.m_flySpine.setSkin("Grand");
                  break;
                case _0x55e059.JP_TYPES.MAJOR:
                  this.m_flySpine.setSkin("Major");
                  break;
                case _0x55e059.JP_TYPES.MINI:
                  this.m_flySpine.setSkin("Mini");
                  break;
                case _0x55e059.JP_TYPES.MINOR:
                  this.m_flySpine.setSkin("Minor");
              }
              break;
            case _0x55e059.Symbol.ROYAL_BONUS_COIN:
              this.m_flySpine.setSkin('RoyalBonus');
              break;
            default:
              this.m_flySpine.setSkin("Bonus");
          }
        };
        _0x3248d6.FlyNonShrink = function () {
          var _0x1bc3e7 = _0x9f23dc(_0x288614().mark(function _0x2484ec(_0x13ff25, _0x5a4ae5, _0x52824c, _0x41ee55, _0x1734af) {
            var _0x36576c;
            var _0x1fc8ea = this;
            return _0x288614().wrap(function (_0x3a118a) {
              for (;;) {
                switch (_0x3a118a.prev = _0x3a118a.next) {
                  case 0x0:
                    if (undefined === _0x5a4ae5) {
                      _0x5a4ae5 = 0x0;
                    }
                    if (undefined === _0x41ee55) {
                      _0x41ee55 = false;
                    }
                    if (undefined === _0x1734af) {
                      _0x1734af = true;
                    }
                    this.SetSkin(_0x13ff25, _0x5a4ae5);
                    _0x70e19b(this.node).delay(0.016666666666666666).call(function () {
                      var _0x2c8dff = _0x1fc8ea.m_flySpine.findBone('HP_END');
                      var _0x31bfda = _0x1fc8ea.node.getComponent(_0x2387f8).convertToNodeSpaceAR(_0x52824c);
                      _0x2c8dff.x = _0x31bfda.x;
                      _0x2c8dff.y = _0x31bfda.y;
                    }).start();
                    _0x36576c = _0x1734af ? 'Fly_JP_1' : "Fly_JP_2";
                    _0x3a118a.next = 0x8;
                    return _0x32d2d6.PlayAnimation(this.m_flySpine, _0x36576c, false, 0x0, function (_0x336e07) {
                      if ('Hit' == _0x336e07) {
                        _0x1fc8ea.m_effectPlate.ShowHit(_0x52824c, _0x41ee55);
                      }
                      _0x1fc8ea.node.active = false;
                    });
                  case 0x8:
                  case "end":
                    return _0x3a118a.stop();
                }
              }
            }, _0x2484ec, this);
          }));
          return function (_0x52191d, _0x262364, _0xb3c85a, _0x50b466, _0x2eb04c) {
            return _0x1bc3e7.apply(this, arguments);
          };
        }();
        _0x3248d6.FlyShrink = function () {
          var _0x4e4635 = _0x9f23dc(_0x288614().mark(function _0x5d4a59(_0x20b83e, _0x5b856d, _0x40eee5, _0x15d6fd, _0x276d3f) {
            var _0x24881f;
            var _0x5d576a = this;
            return _0x288614().wrap(function (_0x4f7883) {
              for (;;) {
                switch (_0x4f7883.prev = _0x4f7883.next) {
                  case 0x0:
                    if (undefined === _0x5b856d) {
                      _0x5b856d = 0x0;
                    }
                    if (undefined === _0x15d6fd) {
                      _0x15d6fd = false;
                    }
                    if (undefined === _0x276d3f) {
                      _0x276d3f = true;
                    }
                    this.SetSkin(_0x20b83e, _0x5b856d);
                    _0x70e19b(this.node).delay(0.016666666666666666).call(function () {
                      var _0x5e93bf = _0x5d576a.m_flySpine.findBone("HP_END");
                      var _0x5a864a = _0x5d576a.node.getComponent(_0x2387f8).convertToNodeSpaceAR(_0x40eee5);
                      _0x5e93bf.x = _0x5a864a.x;
                      _0x5e93bf.y = _0x5a864a.y;
                    }).start();
                    _0x24881f = _0x276d3f ? "Fly_1" : 'Fly_2';
                    _0x4f7883.next = 0x8;
                    return _0x32d2d6.PlayAnimation(this.m_flySpine, _0x24881f, false, 0x0, function (_0x1e7fe4) {
                      if ("Hit" == _0x1e7fe4) {
                        _0x5d576a.m_effectPlate.ShowHit(_0x40eee5, _0x15d6fd);
                      }
                      _0x5d576a.node.active = false;
                    });
                  case 0x8:
                  case "end":
                    return _0x4f7883.stop();
                }
              }
            }, _0x5d4a59, this);
          }));
          return function (_0x94ec83, _0x3bf941, _0x43426b, _0x2747ac, _0x17546b) {
            return _0x4e4635.apply(this, arguments);
          };
        }();
        _0x3248d6.FlyGrow = function () {
          var _0x48a857 = _0x9f23dc(_0x288614().mark(function _0x4417a8(_0xb436bb, _0x566d5e, _0xd2cd79, _0x2b8b40, _0x101944) {
            var _0x5ff40c;
            var _0xd8af9d = this;
            return _0x288614().wrap(function (_0x2b37e0) {
              for (;;) {
                switch (_0x2b37e0.prev = _0x2b37e0.next) {
                  case 0x0:
                    if (undefined === _0x566d5e) {
                      _0x566d5e = 0x0;
                    }
                    if (undefined === _0x2b8b40) {
                      _0x2b8b40 = false;
                    }
                    if (undefined === _0x101944) {
                      _0x101944 = true;
                    }
                    this.SetSkin(_0xb436bb, _0x566d5e);
                    _0x70e19b(this.node).delay(0.016666666666666666).call(function () {
                      var _0x5c8a3c = _0xd8af9d.m_flySpine.findBone('HP_END');
                      var _0x35ce03 = _0xd8af9d.node.getComponent(_0x2387f8).convertToNodeSpaceAR(_0xd2cd79);
                      _0x5c8a3c.x = _0x35ce03.x;
                      _0x5c8a3c.y = _0x35ce03.y;
                    }).start();
                    _0x5ff40c = _0x101944 ? "Fly_3" : 'Fly_4';
                    _0x2b37e0.next = 0x8;
                    return _0x32d2d6.PlayAnimation(this.m_flySpine, _0x5ff40c, false, 0x0, function (_0x262282) {
                      if ("Hit" == _0x262282) {
                        _0xd8af9d.m_effectPlate.ShowHit(_0xd2cd79, _0x2b8b40);
                      }
                      _0xd8af9d.node.active = false;
                    });
                  case 0x8:
                  case "end":
                    return _0x2b37e0.stop();
                }
              }
            }, _0x4417a8, this);
          }));
          return function (_0x5a1f79, _0xecbbe6, _0x20e6f7, _0x55af35, _0x9f7e14) {
            return _0x48a857.apply(this, arguments);
          };
        }();
        _0x3248d6.SetTimeScale = function (_0x1d1902) {
          this.m_flySpine.timeScale = _0x1d1902;
        };
        return _0x9251e9;
      }(_0xead8bf);
      _0x1af3c8 = _0x2f48b7(_0x44f2b1.prototype, 'm_flySpine', [_0x354282], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x17ba94 = _0x52c40d(_0x292c51 = _0x44f2b1) || _0x292c51;
      var _0x319b78;
      var _0x2bddf5;
      var _0x3a0457;
      var _0x546112;
      var _0x1c2657;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, 'ac7fauaQDZNb6+rm5l/DoHM', "HitEffect", undefined);
      var _0x2cbd28 = _0x5d1a01.ccclass;
      var _0x160a65 = _0x5d1a01.property;
      _0x319b78 = _0x2cbd28("HitEffect");
      _0x2bddf5 = _0x160a65({
        'type': _0x1971e0.Skeleton,
        'tooltip': "hit anim"
      });
      _0x546112 = function (_0x55ee49) {
        function _0x1866dc() {
          var _0x384527;
          var _0x289c95 = arguments.length;
          var _0xf0b851 = new Array(_0x289c95);
          for (var _0x5d2be3 = 0x0; _0x5d2be3 < _0x289c95; _0x5d2be3++) {
            _0xf0b851[_0x5d2be3] = arguments[_0x5d2be3];
          }
          _0x29845c(_0x384527 = _0x55ee49.call.apply(_0x55ee49, [this].concat(_0xf0b851)) || this, "m_hitSpine", _0x1c2657, _0x1cc4fd(_0x384527));
          return _0x384527;
        }
        _0x4235b3(_0x1866dc, _0x55ee49);
        _0x1866dc.prototype.ShowHit = function () {
          var _0x5baf68 = _0x9f23dc(_0x288614().mark(function _0x19d31f() {
            return _0x288614().wrap(function (_0x3c0f6b) {
              for (;;) {
                switch (_0x3c0f6b.prev = _0x3c0f6b.next) {
                  case 0x0:
                    _0x3c0f6b.next = 0x2;
                    return _0x32d2d6.PlayAnimation(this.m_hitSpine, "Hit", false);
                  case 0x2:
                  case "end":
                    return _0x3c0f6b.stop();
                }
              }
            }, _0x19d31f, this);
          }));
          return function () {
            return _0x5baf68.apply(this, arguments);
          };
        }();
        return _0x1866dc;
      }(_0xead8bf);
      _0x1c2657 = _0x2f48b7(_0x546112.prototype, "m_hitSpine", [_0x2bddf5], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x26492b = _0x319b78(_0x3a0457 = _0x546112) || _0x3a0457;
      var _0x1cac53;
      var _0x63c36b;
      var _0x10ffc8;
      var _0x2516e0;
      var _0x1783d7;
      var _0x44215b;
      var _0x285fb6;
      var _0x37bf87;
      var _0x1a7fb4;
      var _0x52264e;
      var _0xf77025;
      var _0x4f95b7;
      var _0x3ae4ab;
      var _0x532aaf;
      var _0x5afec7;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, '4c480cU1LpMo4WqCcvtd0ph', "Tools", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "de32cbzFmBN4rL/N8DkMkAD", "Define", undefined);
      (function (_0x54a26d) {
        _0x54a26d[_0x54a26d.NORMAL = 0x0] = "NORMAL";
        _0x54a26d[_0x54a26d.USING = 0x1] = 'USING';
      })(_0x63c36b || (_0x63c36b = {}));
      (function (_0x4cb295) {
        _0x4cb295[_0x4cb295.GAME_CLOSE = 0x3e8] = "GAME_CLOSE";
        _0x4cb295[_0x4cb295.LOGIN = 0x3e9] = "LOGIN";
        _0x4cb295[_0x4cb295.WAIT_RES = 0x3ea] = "WAIT_RES";
        _0x4cb295[_0x4cb295.CHECK_UNSHOW = 0x3eb] = 'CHECK_UNSHOW';
        _0x4cb295[_0x4cb295.CHECK_FREESPIN = 0x3ec] = "CHECK_FREESPIN";
        _0x4cb295[_0x4cb295.IDLE = 0x3ed] = "IDLE";
        _0x4cb295[_0x4cb295.SPIN_REQ = 0x3ee] = "SPIN_REQ";
        _0x4cb295[_0x4cb295.SPIN = 0x3ef] = "SPIN";
        _0x4cb295[_0x4cb295.COMMON_SHOW = 0x3f0] = 'COMMON_SHOW';
        _0x4cb295[_0x4cb295.MHB_SHOW = 0x3f1] = "MHB_SHOW";
        _0x4cb295[_0x4cb295.JP_SHOW = 0x3f2] = "JP_SHOW";
        _0x4cb295[_0x4cb295.CHECK_STATE = 0x3f3] = "CHECK_STATE";
        _0x4cb295[_0x4cb295.END = 0x3f4] = "END";
        _0x4cb295[_0x4cb295.FREESPIN_WAIT_RES = 0x3f5] = "FREESPIN_WAIT_RES";
        _0x4cb295[_0x4cb295.TURBO = 0x3f6] = "TURBO";
        _0x4cb295[_0x4cb295.FIRST_IN_GAME = 0x3f7] = 'FIRST_IN_GAME';
        _0x4cb295[_0x4cb295.CHECK_APP_REWARD = 0x3f8] = 'CHECK_APP_REWARD';
        _0x4cb295[_0x4cb295.CHECK_BUFF = 0x3f9] = "CHECK_BUFF";
        _0x4cb295[_0x4cb295.ACTIVATE_BUFF = 0x3fa] = "ACTIVATE_BUFF";
        _0x4cb295[_0x4cb295.END_BUFF = 0x3fb] = "END_BUFF";
        _0x4cb295[_0x4cb295.GRAND_JP = 0x3fc] = 'GRAND_JP';
      })(_0x10ffc8 || (_0x10ffc8 = {}));
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, '813162EnmlPD6ZkP+n93pP2', "RoundController", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, '1d5a8ODImpC9qtSki10xwQQ', "ExtraBetController", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "cd534oKcOFFap8T54HqFCAE", "FakeServer", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, '3ec76bGz5NECbh3RNjc2SdI', "TempoSetting", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "6f779uo//FP8owPSb4jjuXE", "CommonEffect", undefined);
      (function (_0x27f0e0) {
        var _0x47d9da = function () {
          function _0x35ef62() {}
          _0x35ef62.PascalTriangleLine = function (_0x4d2d91) {
            var _0x50171f = [0x1];
            for (var _0xb2527c = 0x1; _0xb2527c < _0x4d2d91; _0xb2527c++) {
              _0x50171f[_0xb2527c] = _0x50171f[_0xb2527c - 0x1] * (_0x4d2d91 - _0xb2527c) / _0xb2527c;
            }
            return _0x50171f;
          };
          _0x35ef62.RangedRandom = function (_0x4a2d22, _0x4d48c6) {
            return (_0x4d48c6 - _0x4a2d22) * Math.random() + _0x4a2d22;
          };
          _0x35ef62.GetRandomRectPos = function (_0x4ac92a, _0x1a4c44, _0x164693) {
            var _0x4f3436 = _0x3e8f31(this.RangedRandom(-_0x1a4c44.x, _0x1a4c44.x) / 0x2 | 0x0, this.RangedRandom(-_0x1a4c44.x, _0x1a4c44.x) / 0x2 | 0x0).rotate(_0x164693 * _0x468343.RAD);
            return _0x4ac92a.add(_0x4f3436);
          };
          _0x35ef62.GetRandomOvalPos = function (_0xefc798, _0x21778c, _0x282683) {
            var _0x2962d3 = _0x21778c.y / Math.max(0x1, _0x21778c.x);
            var _0xcc5653 = Math.random() * _0x21778c.x * 0.5;
            var _0x235d76 = Math.random() * Math.PI * 0x2;
            var _0x7ab004 = _0x3e8f31(_0xcc5653 * Math.cos(_0x235d76), _0xcc5653 * Math.sin(_0x235d76) * _0x2962d3).rotate(_0x282683 * _0x468343.RAD);
            return _0xefc798.add(_0x7ab004);
          };
          _0x35ef62.ZoomAndFlip = function (_0x306990, _0x433f21, _0x591246, _0x4b06be) {
            var _0x214638 = Math.sin(_0x4b06be * Math.PI) * (_0x433f21 - _0x306990) + _0x306990;
            var _0x3fc52d = Math.cos(_0x4b06be * Math.PI * _0x591246);
            return _0x3e8f31(_0x214638 * _0x3fc52d, _0x214638);
          };
          return _0x35ef62;
        }();
        _0x27f0e0.ExtendsMath = _0x47d9da;
        var _0x17b763 = function () {
          function _0x330759(_0xafdbc8) {
            this.pts = null;
            this.len = 0x0;
            this.ptl = null;
            this.bez = null;
            this.len = _0xafdbc8.length;
            if (0x0 == this.len) {
              _0xafdbc8.push(_0x40bacd(0x0, 0x0));
              _0xafdbc8.push(_0x40bacd(0x0, 0x0));
            } else if (0x1 == this.len) {
              _0xafdbc8.push(_0x40bacd(_0xafdbc8[0x0].x, _0xafdbc8[0x0].y));
            }
            this.pts = _0xafdbc8;
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
                this.ptl = _0x47d9da.PascalTriangleLine(this.len);
                this.bez = this.BezierN;
            }
          }
          var _0x1e0cc5 = _0x330759.prototype;
          _0x1e0cc5.GetPosition = function (_0x1c1df8) {
            return this.bez.apply(this, [_0x1c1df8]);
          };
          _0x1e0cc5.Bezier2 = function (_0x12c246) {
            var _0x18dd92 = 0x1 - _0x12c246;
            return _0x40bacd(_0x18dd92 * this.pts[0x0].x + _0x12c246 * this.pts[0x1].x, _0x18dd92 * this.pts[0x0].y + _0x12c246 * this.pts[0x1].y);
          };
          _0x1e0cc5.Bezier3 = function (_0x478a94) {
            var _0x4dafa8 = 0x1 - _0x478a94;
            var _0x59dc62 = [_0x4dafa8 * _0x4dafa8, 0x2 * _0x4dafa8 * _0x478a94, _0x478a94 * _0x478a94];
            return _0x40bacd(_0x59dc62[0x0] * this.pts[0x0].x + _0x59dc62[0x1] * this.pts[0x1].x + _0x59dc62[0x2] * this.pts[0x2].x, _0x59dc62[0x0] * this.pts[0x0].y + _0x59dc62[0x1] * this.pts[0x1].y + _0x59dc62[0x2] * this.pts[0x2].y);
          };
          _0x1e0cc5.Bezier4 = function (_0x1bb0ff) {
            var _0x53b46a = 0x1 - _0x1bb0ff;
            var _0x32ca10 = [_0x53b46a * _0x53b46a * _0x53b46a, 0x3 * _0x53b46a * _0x53b46a * _0x1bb0ff, 0x3 * _0x53b46a * _0x1bb0ff * _0x1bb0ff, _0x1bb0ff * _0x1bb0ff * _0x1bb0ff];
            return _0x40bacd(_0x32ca10[0x0] * this.pts[0x0].x + _0x32ca10[0x1] * this.pts[0x1].x + _0x32ca10[0x2] * this.pts[0x2].x + _0x32ca10[0x3] * this.pts[0x3].x, _0x32ca10[0x0] * this.pts[0x0].y + _0x32ca10[0x1] * this.pts[0x1].y + _0x32ca10[0x2] * this.pts[0x2].y + _0x32ca10[0x3] * this.pts[0x3].y);
          };
          _0x1e0cc5.Bezier5 = function (_0x1a8301) {
            var _0x1433ef = 0x1 - _0x1a8301;
            var _0xaded50 = [_0x1433ef * _0x1433ef * _0x1433ef * _0x1433ef, 0x4 * _0x1433ef * _0x1433ef * _0x1433ef * _0x1a8301, 0x6 * _0x1433ef * _0x1433ef * _0x1a8301 * _0x1a8301, 0x4 * _0x1433ef * _0x1a8301 * _0x1a8301 * _0x1a8301, _0x1a8301 * _0x1a8301 * _0x1a8301 * _0x1a8301];
            return _0x40bacd(_0xaded50[0x0] * this.pts[0x0].x + _0xaded50[0x1] * this.pts[0x1].x + _0xaded50[0x2] * this.pts[0x2].x + _0xaded50[0x3] * this.pts[0x3].x + _0xaded50[0x4] * this.pts[0x4].x, _0xaded50[0x0] * this.pts[0x0].y + _0xaded50[0x1] * this.pts[0x1].y + _0xaded50[0x2] * this.pts[0x2].y + _0xaded50[0x3] * this.pts[0x3].y + _0xaded50[0x4] * this.pts[0x4].y);
          };
          _0x1e0cc5.Bezier6 = function (_0x5ea16c) {
            var _0x1aef39 = 0x1 - _0x5ea16c;
            var _0x850765 = [_0x1aef39 * _0x1aef39 * _0x1aef39 * _0x1aef39 * _0x1aef39, 0x5 * _0x1aef39 * _0x1aef39 * _0x1aef39 * _0x1aef39 * _0x5ea16c, 0xa * _0x1aef39 * _0x1aef39 * _0x1aef39 * _0x5ea16c * _0x5ea16c, 0xa * _0x1aef39 * _0x1aef39 * _0x5ea16c * _0x5ea16c * _0x5ea16c, 0x5 * _0x1aef39 * _0x5ea16c * _0x5ea16c * _0x5ea16c * _0x5ea16c, _0x5ea16c * _0x5ea16c * _0x5ea16c * _0x5ea16c * _0x5ea16c];
            return _0x40bacd(_0x850765[0x0] * this.pts[0x0].x + _0x850765[0x1] * this.pts[0x1].x + _0x850765[0x2] * this.pts[0x2].x + _0x850765[0x3] * this.pts[0x3].x + _0x850765[0x4] * this.pts[0x4].x + _0x850765[0x5] * this.pts[0x5].x, _0x850765[0x0] * this.pts[0x0].y + _0x850765[0x1] * this.pts[0x1].y + _0x850765[0x2] * this.pts[0x2].y + _0x850765[0x3] * this.pts[0x3].y + _0x850765[0x4] * this.pts[0x4].y + _0x850765[0x5] * this.pts[0x5].y);
          };
          _0x1e0cc5.BezierN = function (_0x21ed15) {
            var _0x3e71f3 = 0x1 - _0x21ed15;
            var _0x5f3683 = _0x40bacd(0x0, 0x0);
            for (var _0x1b0346 = 0x0; _0x1b0346 < this.len; _0x1b0346++) {
              var _0x54a7ad = 0x1;
              for (var _0x3f6fb2 = 0x0; _0x3f6fb2 < this.len - _0x1b0346 - 0x1; _0x3f6fb2++) {
                _0x54a7ad *= _0x3e71f3;
              }
              for (var _0x4a8d3d = 0x0; _0x4a8d3d < _0x1b0346; _0x4a8d3d++) {
                _0x54a7ad *= _0x21ed15;
              }
              _0x5f3683.x += _0x54a7ad * this.ptl[_0x1b0346] * this.pts[_0x1b0346].x;
              _0x5f3683.y += _0x54a7ad * this.ptl[_0x1b0346] * this.pts[_0x1b0346].y;
            }
            return _0x5f3683;
          };
          return _0x330759;
        }();
        _0x27f0e0.Bezier = _0x17b763;
      })(_0x37bf87 || (_0x37bf87 = {}));
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "391b6CLPVhBEqeFr1f7nxDE", "index", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "6595at5PQ9L8JgeqDVDOEnx", "MultipleFlyEffect", undefined);
      var _0x52a318 = _0x5d1a01.ccclass;
      var _0x43c8f0 = _0x5d1a01.property;
      _0x1a7fb4 = _0x52a318("MultipleFlyEffect");
      _0x52264e = _0x43c8f0({
        'type': _0x1971e0.Skeleton,
        'tooltip': "multiple fly spine"
      });
      _0xf77025 = _0x43c8f0({
        'type': _0x502387,
        'tooltip': "multiple fly label"
      });
      _0x3ae4ab = function (_0xc5e0ea) {
        function _0x2870a3() {
          var _0xb3a07c;
          var _0x191d7e = arguments.length;
          var _0x38cda6 = new Array(_0x191d7e);
          for (var _0x5822dd = 0x0; _0x5822dd < _0x191d7e; _0x5822dd++) {
            _0x38cda6[_0x5822dd] = arguments[_0x5822dd];
          }
          _0x29845c(_0xb3a07c = _0xc5e0ea.call.apply(_0xc5e0ea, [this].concat(_0x38cda6)) || this, "m_spine", _0x532aaf, _0x1cc4fd(_0xb3a07c));
          _0x29845c(_0xb3a07c, "m_label", _0x5afec7, _0x1cc4fd(_0xb3a07c));
          return _0xb3a07c;
        }
        _0x4235b3(_0x2870a3, _0xc5e0ea);
        _0x2870a3.prototype.MultipleFly = function () {
          var _0x175b7f = _0x9f23dc(_0x288614().mark(function _0x2935c0(_0x16701d, _0x397a47, _0x493d94, _0x56084c, _0x9978cb) {
            var _0x13714c;
            var _0xa5ddd6;
            var _0x36aa18 = this;
            return _0x288614().wrap(function (_0x45cbcc) {
              for (;;) {
                switch (_0x45cbcc.prev = _0x45cbcc.next) {
                  case 0x0:
                    this.m_label.node.active = true;
                    this.m_label.string = 'X' + _0x9978cb;
                    _0x70e19b(this.node).delay(0.016666666666666666).call(function () {
                      var _0x3c0640 = _0x36aa18.m_spine.findBone("HP_END");
                      var _0x19cab4 = _0x36aa18.node.getComponent(_0x2387f8).convertToNodeSpaceAR(_0x397a47);
                      _0x3c0640.x = _0x19cab4.x;
                      _0x3c0640.y = _0x19cab4.y;
                      var _0x4eff57 = _0x36aa18.m_spine.findBone("HP_START");
                      var _0x40b47a = _0x36aa18.node.getComponent(_0x2387f8).convertToNodeSpaceAR(_0x16701d);
                      _0x4eff57.x = _0x40b47a.x;
                      _0x4eff57.y = _0x40b47a.y;
                    }).start();
                    _0x13714c = _0x56084c ? "MultipleFly_JP2" : "MultipleFly_JP";
                    _0xa5ddd6 = this.m_spine.setAnimation(0x0, _0x13714c, false);
                    this.m_spine.setTrackEventListener(_0xa5ddd6, function (_0x597797, _0x2c6bdd) {
                      if (_0xa5ddd6 && _0xa5ddd6.animation.name == _0x597797.animation.name) {
                        if (!(null == _0x493d94)) {
                          _0x493d94(_0x2c6bdd.data.name);
                        }
                      }
                    });
                    _0x45cbcc.next = 0x8;
                    return _0x2516e0.Wait(this, this.m_spine.findAnimation(_0x13714c).duration);
                  case 0x8:
                    this.node.active = false;
                  case 0x9:
                  case 'end':
                    return _0x45cbcc.stop();
                }
              }
            }, _0x2935c0, this);
          }));
          return function (_0x4ee366, _0x2f0727, _0x232c69, _0x5e5f35, _0x2d2bb4) {
            return _0x175b7f.apply(this, arguments);
          };
        }();
        return _0x2870a3;
      }(_0xead8bf);
      _0x532aaf = _0x2f48b7(_0x3ae4ab.prototype, "m_spine", [_0x52264e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5afec7 = _0x2f48b7(_0x3ae4ab.prototype, "m_label", [_0xf77025], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x3da614 = _0x1a7fb4(_0x4f95b7 = _0x3ae4ab) || _0x4f95b7;
      var _0xa7b073;
      var _0x5964e5;
      var _0x4fe832;
      var _0x2f508e;
      var _0x11e87f;
      var _0x2b91d8;
      var _0x1b43f4;
      var _0x2011fe;
      var _0x9396b5;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "7c745YxIhVIia6ExynuymK7", "MultipleFrameEffect", undefined);
      var _0x379d46 = _0x5d1a01.ccclass;
      var _0x88ee4d = _0x5d1a01.property;
      _0xa7b073 = _0x379d46('MultipleFrameEffect');
      _0x5964e5 = _0x88ee4d({
        'type': _0x1971e0.Skeleton,
        'tooltip': "multiple frame spine"
      });
      _0x4fe832 = _0x88ee4d({
        'type': _0x502387,
        'tooltip': "multiple frame label1"
      });
      _0x2f508e = _0x88ee4d({
        'type': _0x502387,
        'tooltip': "multiple frame label2"
      });
      _0x2b91d8 = function (_0x3839fb) {
        function _0x28ad57() {
          var _0x2574e3;
          var _0x4bfd3b = arguments.length;
          var _0x3b37d7 = new Array(_0x4bfd3b);
          for (var _0x1df8b2 = 0x0; _0x1df8b2 < _0x4bfd3b; _0x1df8b2++) {
            _0x3b37d7[_0x1df8b2] = arguments[_0x1df8b2];
          }
          _0x29845c(_0x2574e3 = _0x3839fb.call.apply(_0x3839fb, [this].concat(_0x3b37d7)) || this, "m_spine", _0x1b43f4, _0x1cc4fd(_0x2574e3));
          _0x29845c(_0x2574e3, "m_label1", _0x2011fe, _0x1cc4fd(_0x2574e3));
          _0x29845c(_0x2574e3, "m_label2", _0x9396b5, _0x1cc4fd(_0x2574e3));
          return _0x2574e3;
        }
        _0x4235b3(_0x28ad57, _0x3839fb);
        var _0x32c4f0 = _0x28ad57.prototype;
        _0x32c4f0.PlayMultipleFrameStart = function () {
          var _0x460316 = _0x9f23dc(_0x288614().mark(function _0x382475(_0xfc8921) {
            return _0x288614().wrap(function (_0x5b3646) {
              for (;;) {
                switch (_0x5b3646.prev = _0x5b3646.next) {
                  case 0x0:
                    _0x5b3646.next = 0x2;
                    return _0x32d2d6.PlayAnimation(this.m_spine, 'MultipleFrame_Start', false, 0x0, _0xfc8921);
                  case 0x2:
                  case "end":
                    return _0x5b3646.stop();
                }
              }
            }, _0x382475, this);
          }));
          return function (_0x13f25e) {
            return _0x460316.apply(this, arguments);
          };
        }();
        _0x32c4f0.PlayMultipleFrameLoop = function () {
          var _0x5975b3 = _0x9f23dc(_0x288614().mark(function _0x2a2f42() {
            return _0x288614().wrap(function (_0x5b127f) {
              for (;;) {
                switch (_0x5b127f.prev = _0x5b127f.next) {
                  case 0x0:
                    _0x5b127f.next = 0x2;
                    return _0x32d2d6.PlayAnimation(this.m_spine, "MultipleFrame_Loop", true);
                  case 0x2:
                  case "end":
                    return _0x5b127f.stop();
                }
              }
            }, _0x2a2f42, this);
          }));
          return function () {
            return _0x5975b3.apply(this, arguments);
          };
        }();
        _0x32c4f0.PlayMultipleFrameEnd = function () {
          var _0x2ccaf0 = _0x9f23dc(_0x288614().mark(function _0x3d9bab(_0x3a33d8) {
            return _0x288614().wrap(function (_0x25aba6) {
              for (;;) {
                switch (_0x25aba6.prev = _0x25aba6.next) {
                  case 0x0:
                    _0x25aba6.next = 0x2;
                    return _0x32d2d6.PlayAnimation(this.m_spine, "MultipleFrame_End", false, 0x0, _0x3a33d8);
                  case 0x2:
                  case "end":
                    return _0x25aba6.stop();
                }
              }
            }, _0x3d9bab, this);
          }));
          return function (_0x10e484) {
            return _0x2ccaf0.apply(this, arguments);
          };
        }();
        _0x32c4f0.PlayMultipleFrameUp = function () {
          var _0x4990ef = _0x9f23dc(_0x288614().mark(function _0x2c9ac9(_0x40ec9a) {
            return _0x288614().wrap(function (_0x165311) {
              for (;;) {
                switch (_0x165311.prev = _0x165311.next) {
                  case 0x0:
                    _0x165311.next = 0x2;
                    return _0x32d2d6.PlayAnimation(this.m_spine, 'MultipleFrame_Up', false, 0x0, _0x40ec9a);
                  case 0x2:
                  case "end":
                    return _0x165311.stop();
                }
              }
            }, _0x2c9ac9, this);
          }));
          return function (_0x21b7cc) {
            return _0x4990ef.apply(this, arguments);
          };
        }();
        _0x32c4f0.PlayMultipleFrameLoop2 = function () {
          var _0x51d1ee = _0x9f23dc(_0x288614().mark(function _0x4cef9f() {
            return _0x288614().wrap(function (_0x1f475d) {
              for (;;) {
                switch (_0x1f475d.prev = _0x1f475d.next) {
                  case 0x0:
                    _0x1f475d.next = 0x2;
                    return _0x32d2d6.PlayAnimation(this.m_spine, 'MultipleFrame_Loop2', true);
                  case 0x2:
                  case 'end':
                    return _0x1f475d.stop();
                }
              }
            }, _0x4cef9f, this);
          }));
          return function () {
            return _0x51d1ee.apply(this, arguments);
          };
        }();
        _0x32c4f0.PlayMultipleFrameReset = function () {
          var _0x5d8047 = _0x9f23dc(_0x288614().mark(function _0x5dd5b4() {
            return _0x288614().wrap(function (_0x2a5f98) {
              for (;;) {
                switch (_0x2a5f98.prev = _0x2a5f98.next) {
                  case 0x0:
                    _0x2a5f98.next = 0x2;
                    return _0x32d2d6.PlayAnimation(this.m_spine, "MultipleFrame_Reset", false);
                  case 0x2:
                  case 'end':
                    return _0x2a5f98.stop();
                }
              }
            }, _0x5dd5b4, this);
          }));
          return function () {
            return _0x5d8047.apply(this, arguments);
          };
        }();
        _0x32c4f0.SetMultipleFrameLabel = function (_0x3ebbb8) {
          this.m_label1.string = 'X' + _0x3ebbb8;
          this.m_label2.string = 'X' + _0x3ebbb8;
        };
        _0x32c4f0.SetMultipleFrameLabelActive = function (_0x45e938) {
          this.m_label1.node.active = _0x45e938;
          this.m_label2.node.active = _0x45e938;
        };
        _0x32c4f0.PlayMultipleFrameSpin = function () {
          var _0x3245ac = _0x9f23dc(_0x288614().mark(function _0x46d21e() {
            return _0x288614().wrap(function (_0x21afc1) {
              for (;;) {
                switch (_0x21afc1.prev = _0x21afc1.next) {
                  case 0x0:
                    _0x21afc1.next = 0x2;
                    return _0x32d2d6.PlayAnimation(this.m_spine, "FG_Spin", false, 0x1);
                  case 0x2:
                  case "end":
                    return _0x21afc1.stop();
                }
              }
            }, _0x46d21e, this);
          }));
          return function () {
            return _0x3245ac.apply(this, arguments);
          };
        }();
        _0x32c4f0.ClearTrack = function () {
          this.m_spine.clearTrack(0x0);
        };
        return _0x28ad57;
      }(_0xead8bf);
      _0x1b43f4 = _0x2f48b7(_0x2b91d8.prototype, 'm_spine', [_0x5964e5], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2011fe = _0x2f48b7(_0x2b91d8.prototype, "m_label1", [_0x4fe832], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x9396b5 = _0x2f48b7(_0x2b91d8.prototype, "m_label2", [_0x2f508e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x32f2cd = _0xa7b073(_0x11e87f = _0x2b91d8) || _0x11e87f;
      var _0x1949d0;
      var _0x1a7c0f;
      var _0x601417;
      var _0x3df4f0;
      var _0xac8a00;
      var _0x48abba;
      var _0x66d87c;
      var _0x142c0f;
      var _0x247501;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, 'ecaeaH77tBEr7qLFDaYSU/Z', "ScatterEffect", undefined);
      var _0x15fae4 = _0x5d1a01.ccclass;
      var _0x19a1a9 = _0x5d1a01.property;
      _0x1949d0 = _0x15fae4("ScatterEffect");
      _0x1a7c0f = _0x19a1a9({
        'type': _0x1971e0.Skeleton,
        'tooltip': "symbol spine"
      });
      _0x601417 = _0x19a1a9({
        'type': _0x502387,
        'tooltip': "bonus symbol number"
      });
      _0x3df4f0 = _0x19a1a9({
        'type': _0x502387,
        'tooltip': "JP multiplier label"
      });
      _0x48abba = function (_0x53fe16) {
        function _0x55cec5() {
          var _0x10ebdb;
          var _0x2d8461 = arguments.length;
          var _0x452e69 = new Array(_0x2d8461);
          for (var _0x2a64da = 0x0; _0x2a64da < _0x2d8461; _0x2a64da++) {
            _0x452e69[_0x2a64da] = arguments[_0x2a64da];
          }
          _0x29845c(_0x10ebdb = _0x53fe16.call.apply(_0x53fe16, [this].concat(_0x452e69)) || this, 'm_symbolAnim', _0x66d87c, _0x1cc4fd(_0x10ebdb));
          _0x29845c(_0x10ebdb, "m_symbolNum", _0x142c0f, _0x1cc4fd(_0x10ebdb));
          _0x29845c(_0x10ebdb, "m_JPMulLabel", _0x247501, _0x1cc4fd(_0x10ebdb));
          return _0x10ebdb;
        }
        _0x4235b3(_0x55cec5, _0x53fe16);
        var _0x5b4473 = _0x55cec5.prototype;
        _0x5b4473.onLoad = function () {
          if (this.m_symbolNum) {
            this.m_symbolNum.string = '0';
          }
        };
        _0x5b4473.SetSkin = function (_0x22259d, _0x5d2d28) {
          if (undefined === _0x22259d) {
            _0x22259d = 0x0;
          }
          if (undefined === _0x5d2d28) {
            _0x5d2d28 = 0x0;
          }
          this.SetNumberVisible(false);
          switch (_0x22259d) {
            case _0x55e059.Symbol.BONUS_COIN:
              this.m_symbolAnim.setSkin("Bonus");
              break;
            case _0x55e059.Symbol.BONUS_COIN_JP:
              switch (_0x5d2d28) {
                case _0x55e059.JP_TYPES.GRAND:
                  this.m_symbolAnim.setSkin("Grand");
                  break;
                case _0x55e059.JP_TYPES.MAJOR:
                  this.m_symbolAnim.setSkin("Major");
                  break;
                case _0x55e059.JP_TYPES.MINI:
                  this.m_symbolAnim.setSkin("Mini");
                  break;
                case _0x55e059.JP_TYPES.MINOR:
                  this.m_symbolAnim.setSkin("Minor");
              }
              break;
            case _0x55e059.Symbol.ROYAL_BONUS_COIN:
              this.m_symbolAnim.setSkin("RoyalBonus");
              break;
            default:
              this.m_symbolAnim.setSkin("Bonus");
          }
        };
        _0x5b4473.ShowWin = function () {
          var _0x238803 = _0x9f23dc(_0x288614().mark(function _0xc4556d(_0x1bd2a9, _0xbad403, _0x45694e) {
            return _0x288614().wrap(function (_0x18007a) {
              for (;;) {
                switch (_0x18007a.prev = _0x18007a.next) {
                  case 0x0:
                    if (undefined === _0x1bd2a9) {
                      _0x1bd2a9 = 0x0;
                    }
                    if (undefined === _0xbad403) {
                      _0xbad403 = false;
                    }
                    if (undefined === _0x45694e) {
                      _0x45694e = 0x0;
                    }
                    if (_0x1bd2a9) {
                      this.SetSkin(_0x1bd2a9, _0x45694e);
                    }
                    if (_0x1bd2a9 == _0x55e059.Symbol.BONUS_COIN) {
                      this.SetNumberVisible(true);
                    }
                    _0x18007a.next = 0x7;
                    return _0x32d2d6.PlayAnimation(this.m_symbolAnim, "Win", _0xbad403);
                  case 0x7:
                  case "end":
                    return _0x18007a.stop();
                }
              }
            }, _0xc4556d, this);
          }));
          return function (_0x24f1e8, _0x3cb2e9, _0x1fde20) {
            return _0x238803.apply(this, arguments);
          };
        }();
        _0x5b4473.ShowStop = function () {
          var _0x576d4b = _0x9f23dc(_0x288614().mark(function _0x596186(_0x5aabfb, _0x447dde) {
            return _0x288614().wrap(function (_0xc8dea0) {
              for (;;) {
                switch (_0xc8dea0.prev = _0xc8dea0.next) {
                  case 0x0:
                    if (undefined === _0x5aabfb) {
                      _0x5aabfb = 0x0;
                    }
                    if (undefined === _0x447dde) {
                      _0x447dde = 0x0;
                    }
                    if (!_0x5aabfb) {
                      _0xc8dea0.next = 0xa;
                      break;
                    }
                    this.SetSkin(_0x5aabfb, _0x447dde);
                    if (_0x5aabfb == _0x55e059.Symbol.BONUS_COIN) {
                      this.SetNumberVisible(true);
                    }
                    _0xc8dea0.next = 0x7;
                    return _0x32d2d6.PlayAnimation(this.m_symbolAnim, "Stop", false);
                  case 0x7:
                    this.ShowIdle(_0x5aabfb, _0x447dde);
                    _0xc8dea0.next = 0xb;
                    break;
                  case 0xa:
                    _0x32d2d6.PlayAnimation(this.m_symbolAnim, "Stop", false);
                  case 0xb:
                  case "end":
                    return _0xc8dea0.stop();
                }
              }
            }, _0x596186, this);
          }));
          return function (_0x4a777b, _0x328fcf) {
            return _0x576d4b.apply(this, arguments);
          };
        }();
        _0x5b4473.ShowMultiple = function () {
          var _0x1eeedc = _0x9f23dc(_0x288614().mark(function _0x18f321(_0x28a888, _0x2f14ea) {
            return _0x288614().wrap(function (_0x4e2109) {
              for (;;) {
                switch (_0x4e2109.prev = _0x4e2109.next) {
                  case 0x0:
                    if (undefined === _0x28a888) {
                      _0x28a888 = 0x0;
                    }
                    if (undefined === _0x2f14ea) {
                      _0x2f14ea = 0x0;
                    }
                    if (_0x28a888) {
                      this.SetSkin(_0x28a888, _0x2f14ea);
                      if (_0x28a888 == _0x55e059.Symbol.BONUS_COIN) {
                        this.SetNumberVisible(true);
                      }
                    }
                    _0x32d2d6.PlayAnimation(this.m_symbolAnim, "Multiple", false);
                    _0x4e2109.next = 0x6;
                    return _0x2516e0.Wait(this, this.m_symbolAnim.findAnimation("Multiple").duration);
                  case 0x6:
                  case "end":
                    return _0x4e2109.stop();
                }
              }
            }, _0x18f321, this);
          }));
          return function (_0xdec492, _0x319c64) {
            return _0x1eeedc.apply(this, arguments);
          };
        }();
        _0x5b4473.ShowShow = function () {
          var _0x1dcb39 = _0x9f23dc(_0x288614().mark(function _0x51506a(_0x18eac2, _0x48cc2c) {
            return _0x288614().wrap(function (_0x45ef04) {
              for (;;) {
                switch (_0x45ef04.prev = _0x45ef04.next) {
                  case 0x0:
                    if (undefined === _0x48cc2c) {
                      _0x48cc2c = 0x0;
                    }
                    if (_0x18eac2) {
                      this.SetSkin(_0x18eac2, _0x48cc2c);
                      if (_0x18eac2 == _0x55e059.Symbol.BONUS_COIN) {
                        this.SetNumberVisible(true);
                      }
                    }
                    _0x45ef04.next = 0x4;
                    return _0x32d2d6.PlayAnimation(this.m_symbolAnim, "Show", false);
                  case 0x4:
                  case "end":
                    return _0x45ef04.stop();
                }
              }
            }, _0x51506a, this);
          }));
          return function (_0x246f2b, _0x53c821) {
            return _0x1dcb39.apply(this, arguments);
          };
        }();
        _0x5b4473.ShowChange = function () {
          var _0x4d2b91 = _0x9f23dc(_0x288614().mark(function _0x46f7c8(_0x42ae78, _0x5a872c) {
            return _0x288614().wrap(function (_0x10f2c9) {
              for (;;) {
                switch (_0x10f2c9.prev = _0x10f2c9.next) {
                  case 0x0:
                    if (undefined === _0x5a872c) {
                      _0x5a872c = 0x0;
                    }
                    if (_0x42ae78) {
                      this.SetSkin(_0x42ae78, _0x5a872c);
                      if (_0x42ae78 == _0x55e059.Symbol.BONUS_COIN) {
                        this.SetNumberVisible(false);
                      }
                    }
                    _0x10f2c9.next = 0x4;
                    return _0x32d2d6.PlayAnimation(this.m_symbolAnim, "Change", false);
                  case 0x4:
                  case "end":
                    return _0x10f2c9.stop();
                }
              }
            }, _0x46f7c8, this);
          }));
          return function (_0x5afbab, _0x14513f) {
            return _0x4d2b91.apply(this, arguments);
          };
        }();
        _0x5b4473.showWinJP = function () {
          var _0x44fbca = _0x9f23dc(_0x288614().mark(function _0x460bda(_0x1083d9, _0x147047, _0x79e50f, _0x467280, _0x282cd1, _0xa10758, _0x239700) {
            var _0x4a85cc;
            var _0x5d4f17 = this;
            return _0x288614().wrap(function (_0x187a78) {
              for (;;) {
                switch (_0x187a78.prev = _0x187a78.next) {
                  case 0x0:
                    if (undefined === _0x147047) {
                      _0x147047 = 0x0;
                    }
                    if (undefined === _0x467280) {
                      _0x467280 = 0x1;
                    }
                    if (undefined === _0x239700) {
                      _0x239700 = 0x0;
                    }
                    _0x4a85cc = function () {
                      var _0x43e880 = _0x9f23dc(_0x288614().mark(function _0x36617a(_0x9fc7d4) {
                        return _0x288614().wrap(function (_0x355760) {
                          for (;;) {
                            switch (_0x355760.prev = _0x355760.next) {
                              case 0x0:
                                if ('Hit' == _0x9fc7d4) {
                                  _0x282cd1();
                                }
                                if ("Event" == _0x9fc7d4) {
                                  _0x5d4f17.SetNumber(_0x239700 * _0x467280);
                                  _0xa10758();
                                }
                              case 0x2:
                              case 'end':
                                return _0x355760.stop();
                            }
                          }
                        }, _0x36617a);
                      }));
                      return function (_0xca3dcf) {
                        return _0x43e880.apply(this, arguments);
                      };
                    }();
                    if (_0x1083d9) {
                      this.SetSkin(_0x1083d9, _0x147047);
                      this.SetNumberVisible(true);
                    }
                    _0x187a78.t0 = _0x147047;
                    _0x187a78.next = _0x187a78.t0 === _0x55e059.JP_TYPES.GRAND ? 0x8 : _0x187a78.t0 === _0x55e059.JP_TYPES.MAJOR ? 0xa : _0x187a78.t0 === _0x55e059.JP_TYPES.MINOR ? 0xc : _0x187a78.t0 === _0x55e059.JP_TYPES.MINI ? 0xe : 0x10;
                    break;
                  case 0x8:
                    _0x32d2d6.PlayAnimation(this.m_symbolAnim, "Track_LV4", false, 0x1);
                    return _0x187a78.abrupt("break", 0x10);
                  case 0xa:
                    _0x32d2d6.PlayAnimation(this.m_symbolAnim, 'Track_LV3', false, 0x1);
                    return _0x187a78.abrupt("break", 0x10);
                  case 0xc:
                    _0x32d2d6.PlayAnimation(this.m_symbolAnim, 'Track_LV2', false, 0x1);
                    return _0x187a78.abrupt("break", 0x10);
                  case 0xe:
                    _0x32d2d6.PlayAnimation(this.m_symbolAnim, 'Track_LV1', false, 0x1);
                    return _0x187a78.abrupt("break", 0x10);
                  case 0x10:
                    _0x187a78.t1 = _0x79e50f;
                    _0x187a78.next = 0x0 === _0x187a78.t1 ? 0x13 : 0x1 === _0x187a78.t1 ? 0x1c : 0x2 === _0x187a78.t1 ? 0x25 : 0x2e;
                    break;
                  case 0x13:
                    if (!(_0x467280 > 0x1)) {
                      _0x187a78.next = 0x19;
                      break;
                    }
                    this.SetMultiplierLabel(_0x467280);
                    _0x187a78.next = 0x17;
                    return _0x32d2d6.PlayAnimation(this.m_symbolAnim, "Win_JP_1_Multiple", false, 0x0, _0x4a85cc);
                  case 0x17:
                    _0x187a78.next = 0x1b;
                    break;
                  case 0x19:
                    _0x187a78.next = 0x1b;
                    return _0x32d2d6.PlayAnimation(this.m_symbolAnim, 'Win_JP_1', false, 0x0, _0x4a85cc);
                  case 0x1b:
                    return _0x187a78.abrupt("break", 0x2e);
                  case 0x1c:
                    if (!(_0x467280 > 0x1)) {
                      _0x187a78.next = 0x22;
                      break;
                    }
                    this.SetMultiplierLabel(_0x467280);
                    _0x187a78.next = 0x20;
                    return _0x32d2d6.PlayAnimation(this.m_symbolAnim, 'Win_JP_2_Multiple', false, 0x0, _0x4a85cc);
                  case 0x20:
                    _0x187a78.next = 0x24;
                    break;
                  case 0x22:
                    _0x187a78.next = 0x24;
                    return _0x32d2d6.PlayAnimation(this.m_symbolAnim, "Win_JP_2", false, 0x0, _0x4a85cc);
                  case 0x24:
                    return _0x187a78.abrupt('break', 0x2e);
                  case 0x25:
                    if (!(_0x467280 > 0x1)) {
                      _0x187a78.next = 0x2b;
                      break;
                    }
                    this.SetMultiplierLabel(_0x467280);
                    _0x187a78.next = 0x29;
                    return _0x32d2d6.PlayAnimation(this.m_symbolAnim, "Win_JP_3_Multiple", false, 0x0, _0x4a85cc);
                  case 0x29:
                    _0x187a78.next = 0x2d;
                    break;
                  case 0x2b:
                    _0x187a78.next = 0x2d;
                    return _0x32d2d6.PlayAnimation(this.m_symbolAnim, "Win_JP_3", false, 0x0, _0x4a85cc);
                  case 0x2d:
                    return _0x187a78.abrupt("break", 0x2e);
                  case 0x2e:
                  case "end":
                    return _0x187a78.stop();
                }
              }
            }, _0x460bda, this);
          }));
          return function (_0x2a5f38, _0x24bf9b, _0x329715, _0x3987f6, _0x50943a, _0x1eaab3, _0x2ad128) {
            return _0x44fbca.apply(this, arguments);
          };
        }();
        _0x5b4473.ShowNearWin = function () {
          var _0x325221 = _0x9f23dc(_0x288614().mark(function _0x40e585(_0x49b714, _0x1171b2) {
            return _0x288614().wrap(function (_0x33a7d2) {
              for (;;) {
                switch (_0x33a7d2.prev = _0x33a7d2.next) {
                  case 0x0:
                    if (undefined === _0x49b714) {
                      _0x49b714 = 0x0;
                    }
                    if (undefined === _0x1171b2) {
                      _0x1171b2 = 0x0;
                    }
                    if (_0x49b714) {
                      this.SetSkin(_0x49b714, _0x1171b2);
                      if (_0x49b714 == _0x55e059.Symbol.BONUS_COIN) {
                        this.SetNumberVisible(true);
                      }
                    }
                    _0x33a7d2.next = 0x5;
                    return _0x32d2d6.PlayAnimation(this.m_symbolAnim, 'NearWin', true);
                  case 0x5:
                  case "end":
                    return _0x33a7d2.stop();
                }
              }
            }, _0x40e585, this);
          }));
          return function (_0x3e6fd6, _0x2d6110) {
            return _0x325221.apply(this, arguments);
          };
        }();
        _0x5b4473.ShowIdle = function (_0x12d0b0, _0xd72f0d) {
          if (undefined === _0x12d0b0) {
            _0x12d0b0 = 0x0;
          }
          if (undefined === _0xd72f0d) {
            _0xd72f0d = 0x0;
          }
          if (_0x12d0b0) {
            this.SetSkin(_0x12d0b0, _0xd72f0d);
            if (_0x12d0b0 == _0x55e059.Symbol.BONUS_COIN) {
              this.SetNumberVisible(true);
            }
          }
          _0x32d2d6.PlayAnimation(this.m_symbolAnim, "Idle", true);
        };
        _0x5b4473.SetNumber = function (_0x2ddb5a) {
          this.m_symbolNum.node.active = true;
          this.m_symbolNum.string = _0x1cac53.strip(_0x2ddb5a).toString();
        };
        _0x5b4473.GetNumber = function () {
          return Number(this.m_symbolNum.string);
        };
        _0x5b4473.SetMultiplierLabel = function (_0x32c7e6) {
          this.m_JPMulLabel.string = 'X' + _0x32c7e6;
        };
        _0x5b4473.SetMultiplierVisible = function (_0x4eee80) {
          this.m_JPMulLabel.node.active = _0x4eee80;
        };
        _0x5b4473.SetNumberVisible = function (_0x191665) {
          this.m_symbolNum.node.active = _0x191665;
        };
        return _0x55cec5;
      }(_0xead8bf);
      _0x66d87c = _0x2f48b7(_0x48abba.prototype, "m_symbolAnim", [_0x1a7c0f], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x142c0f = _0x2f48b7(_0x48abba.prototype, "m_symbolNum", [_0x601417], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x247501 = _0x2f48b7(_0x48abba.prototype, "m_JPMulLabel", [_0x3df4f0], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x1695b4 = _0x1949d0(_0xac8a00 = _0x48abba) || _0xac8a00;
      var _0x140108;
      var _0x15066f;
      var _0x5821ba;
      var _0xf0d39;
      var _0xb9d5b7;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "df99dN8akNKR5GI4XZlAXe+", "SymbolEffect", undefined);
      var _0x8ad577 = _0x5d1a01.ccclass;
      var _0x577fcf = _0x5d1a01.property;
      _0x140108 = _0x8ad577("SymbolEffect");
      _0x15066f = _0x577fcf({
        'type': _0x1971e0.Skeleton,
        'tooltip': "symbol spine"
      });
      _0xf0d39 = function (_0x1e4185) {
        function _0x6f5e78() {
          var _0x56c073;
          var _0x43cc74 = arguments.length;
          var _0x4143cf = new Array(_0x43cc74);
          for (var _0xf6cf70 = 0x0; _0xf6cf70 < _0x43cc74; _0xf6cf70++) {
            _0x4143cf[_0xf6cf70] = arguments[_0xf6cf70];
          }
          _0x29845c(_0x56c073 = _0x1e4185.call.apply(_0x1e4185, [this].concat(_0x4143cf)) || this, 'm_symbolAnim', _0xb9d5b7, _0x1cc4fd(_0x56c073));
          return _0x56c073;
        }
        _0x4235b3(_0x6f5e78, _0x1e4185);
        var _0x1e9ef3 = _0x6f5e78.prototype;
        _0x1e9ef3.ShowWin = function () {
          var _0x68bd56 = _0x9f23dc(_0x288614().mark(function _0x5d7b6d(_0x4b52a6) {
            return _0x288614().wrap(function (_0x1fd897) {
              for (;;) {
                switch (_0x1fd897.prev = _0x1fd897.next) {
                  case 0x0:
                    if (undefined === _0x4b52a6) {
                      _0x4b52a6 = true;
                    }
                    _0x1fd897.next = 0x3;
                    return _0x32d2d6.PlayAnimation(this.m_symbolAnim, "Win", _0x4b52a6);
                  case 0x3:
                  case "end":
                    return _0x1fd897.stop();
                }
              }
            }, _0x5d7b6d, this);
          }));
          return function (_0x2bdf95) {
            return _0x68bd56.apply(this, arguments);
          };
        }();
        _0x1e9ef3.ShowStop = function () {
          var _0x454752 = _0x9f23dc(_0x288614().mark(function _0x220ff0() {
            return _0x288614().wrap(function (_0x299040) {
              for (;;) {
                switch (_0x299040.prev = _0x299040.next) {
                  case 0x0:
                    _0x32d2d6.PlayAnimation(this.m_symbolAnim, "Stop", false);
                  case 0x1:
                  case "end":
                    return _0x299040.stop();
                }
              }
            }, _0x220ff0, this);
          }));
          return function () {
            return _0x454752.apply(this, arguments);
          };
        }();
        return _0x6f5e78;
      }(_0xead8bf);
      _0xb9d5b7 = _0x2f48b7(_0xf0d39.prototype, "m_symbolAnim", [_0x15066f], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x42f899 = _0x140108(_0x5821ba = _0xf0d39) || _0x5821ba;
      var _0x38ad44;
      var _0x46df0e;
      var _0x4b5f88;
      var _0x49d3d9;
      var _0x1c8ec8;
      var _0x59adb1;
      var _0x1b929f;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "27593NtppJIVpSRYjT9ugjS", 'SymbolNumEffect', undefined);
      var _0x13b97c = _0x5d1a01.ccclass;
      var _0x162792 = _0x5d1a01.property;
      _0x38ad44 = _0x13b97c("SymbolNumEffect");
      _0x46df0e = _0x162792({
        'type': _0x1971e0.Skeleton,
        'tooltip': "symbol spine"
      });
      _0x4b5f88 = _0x162792({
        'type': _0x502387,
        'tooltip': "bonus symbol number"
      });
      _0x1c8ec8 = function (_0x57e3b2) {
        function _0x45193a() {
          var _0x11b744;
          var _0x3de035 = arguments.length;
          var _0x4b5fda = new Array(_0x3de035);
          for (var _0x3bee96 = 0x0; _0x3bee96 < _0x3de035; _0x3bee96++) {
            _0x4b5fda[_0x3bee96] = arguments[_0x3bee96];
          }
          _0x29845c(_0x11b744 = _0x57e3b2.call.apply(_0x57e3b2, [this].concat(_0x4b5fda)) || this, "m_symbolAnim", _0x59adb1, _0x1cc4fd(_0x11b744));
          _0x29845c(_0x11b744, "m_symbolNum", _0x1b929f, _0x1cc4fd(_0x11b744));
          return _0x11b744;
        }
        _0x4235b3(_0x45193a, _0x57e3b2);
        var _0x43efa7 = _0x45193a.prototype;
        _0x43efa7.onEnable = function () {
          if (this.m_symbolNum) {
            this.m_symbolNum.string = '0';
          }
        };
        _0x43efa7.ShowChange = function () {
          var _0x23ffdc = _0x9f23dc(_0x288614().mark(function _0x4ec950() {
            return _0x288614().wrap(function (_0x4f74b0) {
              for (;;) {
                switch (_0x4f74b0.prev = _0x4f74b0.next) {
                  case 0x0:
                    _0x4f74b0.next = 0x2;
                    return _0x32d2d6.PlayAnimation(this.m_symbolAnim, "Change", false);
                  case 0x2:
                  case "end":
                    return _0x4f74b0.stop();
                }
              }
            }, _0x4ec950, this);
          }));
          return function () {
            return _0x23ffdc.apply(this, arguments);
          };
        }();
        _0x43efa7.ShowCollect = function () {
          var _0x55db72 = _0x9f23dc(_0x288614().mark(function _0x213fb8() {
            return _0x288614().wrap(function (_0x577a0c) {
              for (;;) {
                switch (_0x577a0c.prev = _0x577a0c.next) {
                  case 0x0:
                    _0x577a0c.next = 0x2;
                    return _0x32d2d6.PlayAnimation(this.m_symbolAnim, 'Collect', false);
                  case 0x2:
                  case "end":
                    return _0x577a0c.stop();
                }
              }
            }, _0x213fb8, this);
          }));
          return function () {
            return _0x55db72.apply(this, arguments);
          };
        }();
        _0x43efa7.ShowWin = function () {
          var _0x262082 = _0x9f23dc(_0x288614().mark(function _0x3aa3c1() {
            return _0x288614().wrap(function (_0x566b42) {
              for (;;) {
                switch (_0x566b42.prev = _0x566b42.next) {
                  case 0x0:
                    _0x566b42.next = 0x2;
                    return _0x32d2d6.PlayAnimation(this.m_symbolAnim, "Win", false);
                  case 0x2:
                  case 'end':
                    return _0x566b42.stop();
                }
              }
            }, _0x3aa3c1, this);
          }));
          return function () {
            return _0x262082.apply(this, arguments);
          };
        }();
        _0x43efa7.ShowIdle = function () {
          var _0x30268a = _0x9f23dc(_0x288614().mark(function _0x49d23f() {
            return _0x288614().wrap(function (_0x52657d) {
              for (;;) {
                switch (_0x52657d.prev = _0x52657d.next) {
                  case 0x0:
                    _0x52657d.next = 0x2;
                    return _0x32d2d6.PlayAnimation(this.m_symbolAnim, 'Idle', true);
                  case 0x2:
                  case "end":
                    return _0x52657d.stop();
                }
              }
            }, _0x49d23f, this);
          }));
          return function () {
            return _0x30268a.apply(this, arguments);
          };
        }();
        _0x43efa7.SetNumber = function (_0x188805) {
          this.m_symbolNum.node.active = true;
          this.m_symbolNum.string = _0x1cac53.strip(_0x188805).toString();
        };
        _0x43efa7.GetNumber = function () {
          return Number(this.m_symbolNum.string);
        };
        return _0x45193a;
      }(_0xead8bf);
      _0x59adb1 = _0x2f48b7(_0x1c8ec8.prototype, "m_symbolAnim", [_0x46df0e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1b929f = _0x2f48b7(_0x1c8ec8.prototype, 'm_symbolNum', [_0x4b5f88], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x208c21 = _0x38ad44(_0x49d3d9 = _0x1c8ec8) || _0x49d3d9;
      var _0x29bf77;
      var _0x39aebd;
      var _0x473f09;
      var _0x5d19f4;
      var _0x4b0291;
      var _0x1078b7;
      var _0x2e48a0;
      var _0x39d2c4;
      var _0x5a716b;
      var _0x20ddd6;
      var _0x2dec7a;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "77acaFcNgVDULwRQEtO5wYa", "BigWinComponent", undefined);
      var _0x3c824d = {
        'Big': {
          'Start': 'BigWin_Start',
          'End': 'BigWin_End'
        },
        'Mega': {
          'Start': 'MegaWin_Start',
          'End': 'MegaWin_End'
        },
        'Super': {
          'Start': 'SuperWin_Start',
          'End': "SuperWin_End"
        }
      };
      var _0x52db50 = _0x5d1a01.property;
      _0x29bf77 = _0x52db50({
        'type': _0x1971e0.Skeleton,
        'tooltip': "spine"
      });
      _0x39aebd = _0x52db50({
        'type': _0x1971e0.Skeleton,
        'tooltip': '遮罩'
      });
      _0x473f09 = _0x52db50({
        'type': _0x1971e0.Skeleton,
        'tooltip': "Extra Spine"
      });
      _0x5d19f4 = _0x52db50({
        'type': _0x502387,
        'tooltip': '贏分'
      });
      _0x4b0291 = _0x52db50({
        'type': _0x126986,
        'tooltip': "End extra effect delay time"
      });
      _0x2dec7a = function (_0x37fa7f) {
        function _0x350487() {
          var _0x38a760;
          var _0x354a9d = arguments.length;
          var _0x4ce728 = new Array(_0x354a9d);
          for (var _0x2d6012 = 0x0; _0x2d6012 < _0x354a9d; _0x2d6012++) {
            _0x4ce728[_0x2d6012] = arguments[_0x2d6012];
          }
          _0x29845c(_0x38a760 = _0x37fa7f.call.apply(_0x37fa7f, [this].concat(_0x4ce728)) || this, 'm_spine', _0x1078b7, _0x1cc4fd(_0x38a760));
          _0x29845c(_0x38a760, 'm_maskSpine', _0x2e48a0, _0x1cc4fd(_0x38a760));
          _0x29845c(_0x38a760, "m_extraSpine", _0x39d2c4, _0x1cc4fd(_0x38a760));
          _0x29845c(_0x38a760, "m_winLabel", _0x5a716b, _0x1cc4fd(_0x38a760));
          _0x29845c(_0x38a760, "m_endExtraDelayTime", _0x20ddd6, _0x1cc4fd(_0x38a760));
          _0x38a760.m_isEnd = true;
          _0x38a760.m_isShowEnd = true;
          _0x38a760.m_isShowAward = false;
          _0x38a760.m_eventCb = null;
          _0x38a760.m_showValueCb = null;
          _0x38a760.m_cancelCb = null;
          _0x38a760.m_lvl = 0x0;
          _0x38a760.m_nowLvl = 0x0;
          _0x38a760.m_win = 0x0;
          _0x38a760.m_showWin = 0x0;
          _0x38a760.m_step = 0x0;
          _0x38a760.m_isShowingExtraEnd = false;
          return _0x38a760;
        }
        _0x4235b3(_0x350487, _0x37fa7f);
        var _0x1cd398 = _0x350487.prototype;
        _0x1cd398.update = function (_0x17dd40) {
          if (this.m_isShowAward) {
            this.m_showWin += this.m_step * _0x17dd40;
            if (this.m_showWin >= this.m_win) {
              this.m_showWin = this.m_win;
              this.m_isShowAward = false;
            }
            this.m_winLabel.string = _0x1cac53.FormatNumberThousands(_0x1cac53.strip(this.m_showValueCb ? this.m_showValueCb(this.m_showWin) : this.m_showWin), _0x1cac53.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          }
        };
        _0x1cd398.Init = function (_0x3e3148, _0x331415) {
          this.m_eventCb = _0x3e3148;
          this.m_showValueCb = _0x331415;
          if (this.m_maskSpine) {
            this.m_maskSpine.node.active = false;
          }
        };
        _0x1cd398.Show = function (_0x4c1d2d, _0x45188b, _0x46d238) {
          if (undefined === _0x46d238) {
            _0x46d238 = true;
          }
          if (_0x4c1d2d > 0x0 && _0x45188b > _0x350487.Level.NONE && _0x45188b <= _0x350487.Level.SUPER) {
            this.m_isEnd = false;
            this.m_lvl = _0x45188b;
            this.m_nowLvl = _0x46d238 ? 0x0 : _0x45188b - 0x1;
            this.m_win = _0x4c1d2d;
            this.m_showWin = 0x0;
            this.m_winLabel.string = '0';
            this.m_isShowEnd = false;
            var _0x584644 = 0x0;
            for (var _0x411a0c = _0x46d238 ? _0x350487.Level.BIG : this.m_lvl; _0x411a0c <= this.m_lvl; _0x411a0c++) {
              var _0x36a078 = '';
              var _0x313ec9 = '';
              switch (_0x411a0c) {
                case _0x350487.Level.BIG:
                  _0x36a078 = _0x3c824d.Big.Start;
                  _0x313ec9 = _0x3c824d.Big.End;
                  break;
                case _0x350487.Level.MEGA:
                  _0x36a078 = _0x3c824d.Mega.Start;
                  _0x313ec9 = _0x3c824d.Mega.End;
                  break;
                case _0x350487.Level.SUPER:
                  _0x36a078 = _0x3c824d.Super.Start;
                  _0x313ec9 = _0x3c824d.Super.End;
              }
              if ('' !== _0x36a078 && '' !== _0x313ec9) {
                var _0x4ad31b = this.m_spine.findAnimation(_0x36a078);
                if (_0x4ad31b) {
                  _0x584644 += _0x4ad31b.duration;
                }
              }
            }
            this.m_step = _0x1cac53.divide(this.m_win, _0x584644 || 0x5);
            this.m_isShowAward = true;
            if (this.m_maskSpine) {
              this.m_maskSpine.node.active = true;
              this.PlayAnimation(this.m_maskSpine, 'BigWin_Start');
            }
            this.ShowNext();
          }
        };
        _0x1cd398.Stop = function () {
          if (!this.m_isShowEnd) {
            if (this.m_cancelCb) {
              this.m_cancelCb();
            }
            this.ShowEnd();
          }
        };
        _0x1cd398.SetSkin = function (_0x130059) {
          this.m_spine.setSkin(_0x130059);
        };
        _0x1cd398.ShowNext = function () {
          var _0x2c42ee = _0x9f23dc(_0x288614().mark(function _0x9c266b() {
            var _0x50cc6e;
            return _0x288614().wrap(function (_0x101818) {
              for (;;) {
                switch (_0x101818.prev = _0x101818.next) {
                  case 0x0:
                    if (this.m_nowLvl !== this.m_lvl) {
                      _0x101818.next = 0x4;
                      break;
                    }
                    this.ShowEnd();
                    _0x101818.next = 0x17;
                    break;
                  case 0x4:
                    this.m_nowLvl++;
                    _0x50cc6e = false;
                    _0x101818.t0 = this.m_nowLvl;
                    _0x101818.next = _0x101818.t0 === _0x350487.Level.BIG ? 0x9 : _0x101818.t0 === _0x350487.Level.MEGA ? 0xe : _0x101818.t0 === _0x350487.Level.SUPER ? 0x12 : 0x16;
                    break;
                  case 0x9:
                    this.CheckExtraSpineStart();
                    _0x101818.next = 0xc;
                    return this.PlayAnimation(this.m_spine, _0x3c824d.Big.Start);
                  case 0xc:
                    _0x50cc6e = _0x101818.sent;
                    return _0x101818.abrupt("break", 0x16);
                  case 0xe:
                    _0x101818.next = 0x10;
                    return this.PlayAnimation(this.m_spine, _0x3c824d.Mega.Start);
                  case 0x10:
                    _0x50cc6e = _0x101818.sent;
                    return _0x101818.abrupt("break", 0x16);
                  case 0x12:
                    _0x101818.next = 0x14;
                    return this.PlayAnimation(this.m_spine, _0x3c824d.Super.Start);
                  case 0x14:
                    _0x50cc6e = _0x101818.sent;
                    return _0x101818.abrupt("break", 0x16);
                  case 0x16:
                    if (!_0x50cc6e) {
                      this.ShowNext();
                    }
                  case 0x17:
                  case "end":
                    return _0x101818.stop();
                }
              }
            }, _0x9c266b, this);
          }));
          return function () {
            return _0x2c42ee.apply(this, arguments);
          };
        }();
        _0x1cd398.ShowEnd = function () {
          var _0x4b52c7 = _0x9f23dc(_0x288614().mark(function _0x54c90b() {
            var _0x54b610;
            return _0x288614().wrap(function (_0x5a0297) {
              for (;;) {
                switch (_0x5a0297.prev = _0x5a0297.next) {
                  case 0x0:
                    if (!this.m_isShowEnd) {
                      _0x5a0297.next = 0x2;
                      break;
                    }
                    return _0x5a0297.abrupt("return");
                  case 0x2:
                    this.m_isShowEnd = true;
                    this.m_isShowAward = false;
                    this.m_winLabel.string = _0x1cac53.FormatNumberThousands(_0x1cac53.strip(this.m_showValueCb ? this.m_showValueCb(this.m_win) : this.m_win), _0x1cac53.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
                    if (this.m_maskSpine) {
                      this.PlayAnimation(this.m_maskSpine, 'BigWin_End');
                    }
                    _0x54b610 = '';
                    _0x5a0297.t0 = this.m_lvl;
                    _0x5a0297.next = _0x5a0297.t0 === _0x350487.Level.BIG ? 0xa : _0x5a0297.t0 === _0x350487.Level.MEGA ? 0xc : _0x5a0297.t0 === _0x350487.Level.SUPER ? 0xe : 0x10;
                    break;
                  case 0xa:
                    _0x54b610 = _0x3c824d.Big.End;
                    return _0x5a0297.abrupt("break", 0x10);
                  case 0xc:
                    _0x54b610 = _0x3c824d.Mega.End;
                    return _0x5a0297.abrupt('break', 0x10);
                  case 0xe:
                    _0x54b610 = _0x3c824d.Super.End;
                    return _0x5a0297.abrupt("break", 0x10);
                  case 0x10:
                    if ('' === _0x54b610) {
                      _0x5a0297.next = 0x15;
                      break;
                    }
                    _0x5a0297.next = 0x13;
                    return Promise.all([this.CheckExtraSpineEnd(), this.PlayAnimation(this.m_spine, _0x54b610)]);
                  case 0x13:
                    _0x5a0297.next = 0x16;
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
                    return _0x5a0297.stop();
                }
              }
            }, _0x54c90b, this);
          }));
          return function () {
            return _0x4b52c7.apply(this, arguments);
          };
        }();
        _0x1cd398.CheckExtraSpineStart = function () {
          var _0x1d8d9e = this;
          if (this.m_extraSpine) {
            this.m_extraSpine.node.active = true;
            this.PlayAnimation(this.m_extraSpine, "Start").then(function () {
              if (!_0x1d8d9e.m_isShowingExtraEnd) {
                _0x1d8d9e.PlayAnimation(_0x1d8d9e.m_extraSpine, "Loop", true);
              }
            });
          }
        };
        _0x1cd398.CheckExtraSpineEnd = function () {
          var _0x46664d = _0x9f23dc(_0x288614().mark(function _0x558104() {
            return _0x288614().wrap(function (_0x34810f) {
              for (;;) {
                switch (_0x34810f.prev = _0x34810f.next) {
                  case 0x0:
                    if (this.m_extraSpine) {
                      _0x34810f.next = 0x2;
                      break;
                    }
                    return _0x34810f.abrupt("return");
                  case 0x2:
                    this.m_isShowingExtraEnd = true;
                    _0x34810f.next = 0x5;
                    return _0x2516e0.Wait(this, this.m_endExtraDelayTime);
                  case 0x5:
                    _0x34810f.next = 0x7;
                    return this.PlayAnimation(this.m_extraSpine, "End");
                  case 0x7:
                    this.m_isShowingExtraEnd = false;
                  case 0x8:
                  case "end":
                    return _0x34810f.stop();
                }
              }
            }, _0x558104, this);
          }));
          return function () {
            return _0x46664d.apply(this, arguments);
          };
        }();
        _0x1cd398.PlayAnimation = function (_0x348259, _0x25a0ad, _0x17e460, _0x3bcd7a) {
          var _0x53131b = this;
          if (undefined === _0x17e460) {
            _0x17e460 = false;
          }
          if (undefined === _0x3bcd7a) {
            _0x3bcd7a = 0x0;
          }
          return new Promise(function (_0x535746) {
            var _0x5b362d = false;
            _0x53131b.m_cancelCb = function () {
              _0x535746(_0x5b362d = true);
            };
            _0x348259.clearTrack(_0x3bcd7a);
            _0x348259.setToSetupPose();
            var _0x44f253 = _0x348259.setAnimation(_0x3bcd7a, _0x25a0ad, _0x17e460);
            var _0x2f128a = function () {
              _0x53131b.m_cancelCb = null;
              _0x535746(_0x5b362d);
            };
            if (_0x44f253) {
              _0x348259.setTrackEventListener(_0x44f253, function (_0x56fa8c, _0x4074e4) {
                var _0x2b56c4 = _0x4074e4.data.name;
                var _0x13bcfb = _0x4074e4.stringValue;
                if (_0x53131b.m_eventCb) {
                  _0x53131b.m_eventCb(_0x2b56c4, _0x13bcfb, _0x25a0ad);
                }
              });
              _0x348259.setTrackCompleteListener(_0x44f253, function () {
                _0x348259.setTrackCompleteListener(_0x44f253, function () {});
                _0x2f128a();
              });
            } else {
              _0x348259.setCompleteListener(function () {
                _0x348259.setCompleteListener(null);
                _0x2f128a();
              });
            }
          });
        };
        _0xef4a8(_0x350487, [{
          'key': "IsEnd",
          'get': function () {
            return this.m_isEnd;
          },
          'set': function (_0x15e99f) {
            this.m_isEnd = _0x15e99f;
          }
        }]);
        return _0x350487;
      }(_0xead8bf);
      _0x2dec7a.Level = {
        'NONE': 0x0,
        'BIG': 0x1,
        'MEGA': 0x2,
        'SUPER': 0x3
      };
      _0x1078b7 = _0x2f48b7(_0x2dec7a.prototype, "m_spine", [_0x29bf77], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2e48a0 = _0x2f48b7(_0x2dec7a.prototype, 'm_maskSpine', [_0x39aebd], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x39d2c4 = _0x2f48b7(_0x2dec7a.prototype, "m_extraSpine", [_0x473f09], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5a716b = _0x2f48b7(_0x2dec7a.prototype, "m_winLabel", [_0x5d19f4], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x20ddd6 = _0x2f48b7(_0x2dec7a.prototype, "m_endExtraDelayTime", [_0x4b0291], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return 1.5;
        }
      });
      var _0x29b921;
      var _0x30144;
      var _0x48d6bd;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "74f7dljUZhO+6o0Pu2tNSAk", "ConnectionManager", undefined);
      (function (_0x242b4c) {
        _0x242b4c[_0x242b4c.TYPE_HTTP = 0x1] = "TYPE_HTTP";
        _0x242b4c[_0x242b4c.TYPE_WEBSOCKET = 0x2] = "TYPE_WEBSOCKET";
        _0x242b4c[_0x242b4c.MAX = 0x3] = "MAX";
      })(_0x29b921 || (_0x29b921 = {}));
      (function (_0x4455fc) {
        _0x4455fc.TYPE_GET = "get";
        _0x4455fc.TYPE_POST = "post";
      })(_0x30144 || (_0x30144 = {}));
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "34d81gQVlJAaJJHg6IUTjH6", "TimeBool", undefined);
      (function (_0x29cb0d) {
        _0x29cb0d[_0x29cb0d.MAX_UINT = 0xffffffff] = 'MAX_UINT';
        _0x29cb0d[_0x29cb0d.MAX_UINT64 = 0x10000000000000000] = "MAX_UINT64";
        _0x29cb0d[_0x29cb0d.MAX_INT = -0x1] = "MAX_INT";
        _0x29cb0d[_0x29cb0d.MIN_INT = 0x0] = "MIN_INT";
      })(_0x48d6bd || (_0x48d6bd = {}));
      var _0x66f435;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "5cd11K4+Y1DBJ0WZfuiBSee", 'Common_IdleState', undefined);
      var _0xe053e1 = _0x5d1a01.ccclass;
      _0x66f435 = _0xe053e1('Common_IdleState');
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, '9099fuoIOdA/qc/GkvbZ7rH', "GroupNode", undefined);
      var _0x3774be;
      var _0x173abe;
      var _0x15a821;
      var _0x469420;
      !function (_0x43303d) {
        _0x43303d[_0x43303d.WIDTH = 0x1] = "WIDTH";
        _0x43303d[_0x43303d.HEIGHT = 0x2] = "HEIGHT";
        _0x43303d[_0x43303d.BOTH = 0x3] = 'BOTH';
      }(_0x3774be || (_0x3774be = {}));
      (function (_0xe62809) {
        _0xe62809[_0xe62809.X = 0x1] = 'X';
        _0xe62809[_0xe62809.Y = 0x2] = 'Y';
        _0xe62809[_0xe62809.BOTH = 0x3] = "BOTH";
      })(_0x173abe || (_0x173abe = {}));
      (function (_0x490227) {
        _0x490227[_0x490227.X = 0x1] = 'X';
        _0x490227[_0x490227.Y = 0x2] = 'Y';
        _0x490227[_0x490227.BOTH = 0x3] = "BOTH";
      })(_0x15a821 || (_0x15a821 = {}));
      (function (_0x149676) {
        _0x149676[_0x149676.R = 0x1] = 'R';
        _0x149676[_0x149676.G = 0x2] = 'G';
        _0x149676[_0x149676.B = 0x4] = 'B';
        _0x149676[_0x149676.RGB = 0x7] = "RGB";
        _0x149676[_0x149676.A = 0x8] = 'A';
        _0x149676[_0x149676.RGBA = 0xf] = "RGBA";
      })(_0x469420 || (_0x469420 = {}));
      var _0x5c2901;
      var _0x55b4aa;
      var _0x27c50f;
      var _0x4cb84e;
      var _0x251aa9;
      var _0x37c0c8;
      var _0x275534;
      var _0x445488;
      var _0x31cc57;
      var _0x507bc7;
      var _0x288093;
      var _0x1ef50c;
      var _0x48e7a5;
      var _0x272b0c;
      var _0x46ee23;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "1d854+nhA1JgLXZLaNHz9eU", "LicenseSetting", undefined);
      (function (_0x519be7) {
        _0x519be7[_0x519be7.ShopingMall = 0x1] = "ShopingMall";
        _0x519be7[_0x519be7.ShowAutoSetting = 0x10] = "ShowAutoSetting";
        _0x519be7[_0x519be7.NoSoundUnder1 = 0x11] = "NoSoundUnder1";
        _0x519be7[_0x519be7.NoQuickSpin = 0x12] = 'NoQuickSpin';
        _0x519be7[_0x519be7.CloseManual = 0x27] = "CloseManual";
        _0x519be7[_0x519be7.CloseExtraBet = 0x3d] = "CloseExtraBet";
      })(_0x5c2901 || (_0x5c2901 = {}));
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "0c18bO40hVJB4/zzDByb8vr", "ManualComponent", undefined);
      var _0x49919a = _0x5d1a01.ccclass;
      var _0x2bfbb2 = _0x5d1a01.property;
      _0x55b4aa = _0x49919a('ManualComponent');
      _0x27c50f = _0x2bfbb2({
        'type': _0x328c5f,
        'tooltip': "特色說明按鈕(新版跑馬燈)"
      });
      _0x4cb84e = _0x2bfbb2({
        'type': _0x328c5f,
        'tooltip': "特色說明本體(新版跑馬燈)"
      });
      _0x251aa9 = _0x2bfbb2({
        'type': _0x328c5f,
        'tooltip': "特色說明關閉按鈕(新版跑馬燈)"
      });
      _0x37c0c8 = _0x2bfbb2({
        'type': _0x328c5f,
        'tooltip': "特色說明周圍關閉按鈕(新版跑馬燈)"
      });
      _0x275534 = _0x2bfbb2({
        'type': _0x43508a,
        'tooltip': "特色說明內容(新版跑馬燈)"
      });
      _0x445488 = _0x2bfbb2({
        'type': _0x43508a,
        'tooltip': '標題'
      });
      _0x31cc57 = function (_0x11e938) {
        function _0x4e9ad7() {
          var _0xc3626e;
          var _0x11bd61 = arguments.length;
          var _0x1f5a1e = new Array(_0x11bd61);
          for (var _0x34d1da = 0x0; _0x34d1da < _0x11bd61; _0x34d1da++) {
            _0x1f5a1e[_0x34d1da] = arguments[_0x34d1da];
          }
          _0x29845c(_0xc3626e = _0x11e938.call.apply(_0x11e938, [this].concat(_0x1f5a1e)) || this, 'm_featureInfoBtn', _0x507bc7, _0x1cc4fd(_0xc3626e));
          _0x29845c(_0xc3626e, "m_featureInfoBoard", _0x288093, _0x1cc4fd(_0xc3626e));
          _0x29845c(_0xc3626e, "m_featureInfoCloseBtn", _0x1ef50c, _0x1cc4fd(_0xc3626e));
          _0x29845c(_0xc3626e, "m_featureInfoSideBtn", _0x48e7a5, _0x1cc4fd(_0xc3626e));
          _0x29845c(_0xc3626e, "m_featureInfoTxt", _0x272b0c, _0x1cc4fd(_0xc3626e));
          _0x29845c(_0xc3626e, "m_titleSprite", _0x46ee23, _0x1cc4fd(_0xc3626e));
          _0xc3626e.m_manulState = "Close";
          _0xc3626e.m_manulOpenLock = false;
          return _0xc3626e;
        }
        _0x4235b3(_0x4e9ad7, _0x11e938);
        var _0x46bb1f = _0x4e9ad7.prototype;
        _0x46bb1f.onLoad = function () {
          var _0x447dff = this;
          if (_0x1cac53.CheckSwitchOff(_0x5c2901.CloseManual)) {
            this.node.active = false;
          } else {
            if (this.m_featureInfoBtn) {
              this.m_featureInfoBtn.on(_0x328c5f.EventType.TOUCH_END, function () {
                _0x447dff.OpenManul();
                _0x509786.Play(Astarte.Define.AudioClips.COMMON_BTN);
              });
            }
            if (this.m_featureInfoCloseBtn) {
              this.m_featureInfoCloseBtn.on(_0x328c5f.EventType.TOUCH_END, function () {
                _0x447dff.CloseManul();
                _0x509786.Play(Astarte.Define.AudioClips.COMMON_BTN);
              });
            }
            if (this.m_featureInfoSideBtn) {
              this.m_featureInfoSideBtn.on(_0x328c5f.EventType.TOUCH_END, function () {
                _0x447dff.CloseManul();
              });
            }
          }
        };
        _0x46bb1f.OpenManul = function () {
          var _0x3766e0 = this;
          if (this.m_manulOpenLock) {
            _0x49193a.ShowMessageBox(Astarte.Define.StringKey.FREEWINCASH_PLAYING1);
          } else if (this.m_manulState == "Close") {
            this.m_featureInfoBoard.active = true;
            _0x70e19b(this.m_featureInfoBoard).call(function () {
              _0x3766e0.m_manulState = 'Opening';
              _0x3766e0.m_featureInfoBoard.getComponentInChildren(_0x34dc9d).play("Manual_Open");
            }).delay(0.5).call(function () {
              _0x3766e0.m_manulState = 'Open';
            }).start();
          }
        };
        _0x46bb1f.CloseManul = function () {
          var _0x277c55 = this;
          if (this.m_manulState == 'Open') {
            _0x70e19b(this.m_featureInfoBoard).call(function () {
              _0x277c55.m_manulState = 'Closing';
              _0x277c55.m_featureInfoBoard.getComponentInChildren(_0x34dc9d).play('Manual_Close');
            }).delay(0.5).call(function () {
              _0x277c55.m_manulState = "Close";
              _0x277c55.m_featureInfoBoard.active = false;
            }).start();
          }
        };
        _0x46bb1f.SetTxt = function (_0x2f7f7a, _0x2413cb) {
          if (undefined === _0x2413cb) {
            _0x2413cb = null;
          }
          var _0x432c4d = _0x53def9.GetGameAtlas();
          for (var _0x7510f3 = 0x0; _0x7510f3 < this.m_featureInfoTxt.length; _0x7510f3++) {
            if (_0x432c4d.getSpriteFrame(_0x2f7f7a[_0x7510f3])) {
              this.m_featureInfoTxt[_0x7510f3].spriteFrame = _0x432c4d.getSpriteFrame(_0x2f7f7a[_0x7510f3]);
            }
          }
          if (this.m_titleSprite && _0x2413cb) {
            this.m_titleSprite.spriteFrame = _0x432c4d.getSpriteFrame(_0x2413cb);
          }
        };
        _0xef4a8(_0x4e9ad7, [{
          'key': "FeatureInfoBtn",
          'get': function () {
            return this.m_featureInfoBtn;
          }
        }, {
          'key': 'ManulState',
          'get': function () {
            return this.m_manulState;
          }
        }, {
          'key': "ManulOpenLock",
          'get': function () {
            return this.m_manulOpenLock;
          },
          'set': function (_0x122e22) {
            this.m_manulOpenLock = _0x122e22;
          }
        }]);
        return _0x4e9ad7;
      }(_0xead8bf);
      _0x507bc7 = _0x2f48b7(_0x31cc57.prototype, "m_featureInfoBtn", [_0x27c50f], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x288093 = _0x2f48b7(_0x31cc57.prototype, "m_featureInfoBoard", [_0x4cb84e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1ef50c = _0x2f48b7(_0x31cc57.prototype, "m_featureInfoCloseBtn", [_0x251aa9], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x48e7a5 = _0x2f48b7(_0x31cc57.prototype, "m_featureInfoSideBtn", [_0x37c0c8], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x272b0c = _0x2f48b7(_0x31cc57.prototype, "m_featureInfoTxt", [_0x275534], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x46ee23 = _0x2f48b7(_0x31cc57.prototype, "m_titleSprite", [_0x445488], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, '1d950BFoN5LhJJ79uyt+/E+', "MarqueeComponent", undefined);
      var _0x55f6ce;
      var _0x2d91c6;
      var _0x2f7f36;
      var _0x25415c;
      var _0x202ded;
      var _0x17c382;
      var _0x5992c7;
      var _0x20136a;
      var _0x56185c;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, '93417uqlh9Fm6TH2poz4GO4', 'NearWinEffectComponent', undefined);
      var _0x3b1e1c = _0x5d1a01.ccclass;
      var _0x59b1fb = _0x5d1a01.property;
      _0x55f6ce = _0x3b1e1c("NearWinEffectComponent");
      _0x2d91c6 = _0x59b1fb({
        'type': Number,
        'tooltip': "淡入時間"
      });
      _0x2f7f36 = _0x59b1fb({
        'type': Number,
        'tooltip': '淡出時間'
      });
      _0x25415c = _0x59b1fb({
        'type': _0x4a7b33,
        'tooltip': "是否使用spine動畫"
      });
      _0x17c382 = function (_0x480360) {
        function _0x5570ee() {
          var _0x3637e0;
          var _0x56ce42 = arguments.length;
          var _0x5f1efc = new Array(_0x56ce42);
          for (var _0x19ff02 = 0x0; _0x19ff02 < _0x56ce42; _0x19ff02++) {
            _0x5f1efc[_0x19ff02] = arguments[_0x19ff02];
          }
          _0x29845c(_0x3637e0 = _0x480360.call.apply(_0x480360, [this].concat(_0x5f1efc)) || this, "m_fadeInTime", _0x5992c7, _0x1cc4fd(_0x3637e0));
          _0x29845c(_0x3637e0, "m_fadeOutTime", _0x20136a, _0x1cc4fd(_0x3637e0));
          _0x29845c(_0x3637e0, "m_isPlaySpine", _0x56185c, _0x1cc4fd(_0x3637e0));
          _0x3637e0.m_cancelCb = null;
          _0x3637e0.m_spine = null;
          return _0x3637e0;
        }
        _0x4235b3(_0x5570ee, _0x480360);
        var _0x36caec = _0x5570ee.prototype;
        _0x36caec.start = function () {
          if (!this.m_spine) {
            this.node.active = false;
          }
        };
        _0x36caec.FadeIn = function () {
          var _0x44cef9 = _0x9f23dc(_0x288614().mark(function _0x35bd04(_0x498f30) {
            var _0x235785;
            var _0x47194f = this;
            return _0x288614().wrap(function (_0x585266) {
              for (;;) {
                switch (_0x585266.prev = _0x585266.next) {
                  case 0x0:
                    this.CheckSpine();
                    this.node.active = true;
                    if (!this.m_isPlaySpine) {
                      _0x585266.next = 0x9;
                      break;
                    }
                    _0x585266.next = 0x5;
                    return _0x32d2d6.PlayAnimation(this.m_spine, "FadeIn");
                  case 0x5:
                    if (!_0x585266.sent) {
                      _0x32d2d6.PlayAnimation(this.m_spine, 'NearWin', true);
                    }
                    _0x585266.next = 0x10;
                    break;
                  case 0x9:
                    _0x4ca72a.stopAllByTarget(this.m_spine.color);
                    if (!(null == (_0x235785 = this.m_cancelCb))) {
                      _0x235785.call(this);
                    }
                    this.node.active = true;
                    this.m_spine.color = new _0x3ce4da(this.m_spine.color.r, this.m_spine.color.g, this.m_spine.color.b, 0x0);
                    if (!(null == _0x498f30)) {
                      _0x498f30();
                    }
                    _0x585266.next = 0x10;
                    return new Promise(function (_0x5d64ca) {
                      _0x47194f.m_cancelCb = function () {
                        _0x5d64ca();
                      };
                      _0x70e19b(_0x47194f.m_spine.color).to(_0x47194f.m_fadeInTime, {
                        'a': 0xff
                      }).call(function () {
                        _0x5d64ca();
                        _0x47194f.m_cancelCb = null;
                      }).start();
                    });
                  case 0x10:
                  case 'end':
                    return _0x585266.stop();
                }
              }
            }, _0x35bd04, this);
          }));
          return function (_0x31220a) {
            return _0x44cef9.apply(this, arguments);
          };
        }();
        _0x36caec.FadeOut = function () {
          var _0x4c04ea = _0x9f23dc(_0x288614().mark(function _0x8867c8() {
            var _0x3df4cd;
            var _0x4c6f31;
            var _0xa53c6 = this;
            return _0x288614().wrap(function (_0x4c74df) {
              for (;;) {
                switch (_0x4c74df.prev = _0x4c74df.next) {
                  case 0x0:
                    this.CheckSpine();
                    if (!this.m_isPlaySpine) {
                      _0x4c74df.next = 0xc;
                      break;
                    }
                    if (this.node.active) {
                      _0x4c74df.next = 0x4;
                      break;
                    }
                    return _0x4c74df.abrupt("return", true);
                  case 0x4:
                    this.CheckSpine();
                    _0x4c74df.next = 0x7;
                    return _0x32d2d6.PlayAnimation(this.m_spine, 'FadeOut');
                  case 0x7:
                    if (!(_0x3df4cd = _0x4c74df.sent)) {
                      this.node.active = false;
                    }
                    return _0x4c74df.abrupt("return", !_0x3df4cd);
                  case 0xc:
                    if (!(this.m_spine.color.a <= 0x0)) {
                      _0x4c74df.next = 0xe;
                      break;
                    }
                    return _0x4c74df.abrupt("return", false);
                  case 0xe:
                    _0x4ca72a.stopAllByTarget(this.m_spine.color);
                    if (!(null == (_0x4c6f31 = this.m_cancelCb))) {
                      _0x4c6f31.call(this);
                    }
                    _0x4c74df.next = 0x12;
                    return new Promise(function (_0x16711c) {
                      _0xa53c6.m_cancelCb = function () {
                        _0x16711c(false);
                      };
                      _0x70e19b(_0xa53c6.m_spine.color).to(_0xa53c6.m_fadeOutTime, {
                        'a': 0x0
                      }).call(function () {
                        _0x16711c(true);
                        _0xa53c6.m_cancelCb = null;
                        _0xa53c6.node.active = false;
                      }).start();
                    });
                  case 0x12:
                  case "end":
                    return _0x4c74df.stop();
                }
              }
            }, _0x8867c8, this);
          }));
          return function () {
            return _0x4c04ea.apply(this, arguments);
          };
        }();
        _0x36caec.CheckSpine = function () {
          if (!this.m_spine) {
            this.m_spine = this.node.getComponent(_0x1971e0.Skeleton);
            if (this.m_isPlaySpine) {
              this.m_spine.setMix("FadeIn", 'FadeOut', 0.05);
            }
          }
        };
        return _0x5570ee;
      }(_0xead8bf);
      _0x5992c7 = _0x2f48b7(_0x17c382.prototype, "m_fadeInTime", [_0x2d91c6], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return 0.1;
        }
      });
      _0x20136a = _0x2f48b7(_0x17c382.prototype, "m_fadeOutTime", [_0x2f7f36], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return 0.2;
        }
      });
      _0x56185c = _0x2f48b7(_0x17c382.prototype, "m_isPlaySpine", [_0x25415c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      var _0x342406 = _0x55f6ce(_0x202ded = _0x17c382) || _0x202ded;
      var _0xde64ce;
      var _0x14b8a2;
      var _0x40f8f7;
      var _0x29ae36;
      var _0x4025ad;
      var _0x3cd544;
      var _0x908cf1;
      var _0xf61561;
      var _0xa4cded;
      var _0x4c921d;
      var _0xc09317;
      var _0x298e5;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, '02e880GcB9Jw7QDr8UUWxEV', "ShakeComponent", undefined);
      var _0x4bb7ea = _0x5d1a01.ccclass;
      var _0x150103 = _0x5d1a01.property;
      var _0x314835 = _0x15933b({});
      var _0x5ccdbc;
      !function (_0x22d2ef) {
        _0x22d2ef[_0x22d2ef.None = 0x0] = 'None';
        _0x22d2ef[_0x22d2ef.FadeIn = 0x1] = "FadeIn";
        _0x22d2ef[_0x22d2ef.FadeOut = 0x2] = "FadeOut";
      }(_0x5ccdbc || (_0x5ccdbc = {}));
      var _0x98933c = _0x15933b({
        'None': _0x5ccdbc.None,
        'FadeIn': _0x5ccdbc.FadeIn,
        'FadeOut': _0x5ccdbc.FadeOut
      });
      _0xde64ce = _0x4bb7ea('_TweenInfo');
      _0x14b8a2 = _0x150103({
        'visible': false,
        'tooltip': "Easing"
      });
      _0x40f8f7 = _0x150103({
        'type': _0x314835,
        'visible': false
      });
      _0x29ae36 = _0x150103({
        'visible': true,
        'displayName': "緩動效果",
        'type': _0x314835
      });
      _0x4025ad = _0x150103({
        'type': _0x98933c,
        'visible': false
      });
      _0x3cd544 = _0x150103({
        'visible': true,
        'displayName': "fade type",
        'type': _0x98933c
      });
      _0x908cf1 = _0x150103({
        'min': 0x0,
        'visible': true,
        'displayName': '時間'
      });
      _0xf61561 = function () {
        function _0x4a90df() {
          _0x29845c(this, 'm_EasingName', _0xa4cded, this);
          _0x29845c(this, '__easingIdx', _0x4c921d, this);
          _0x29845c(this, "__fadeType", _0xc09317, this);
          this._EasingEnumList = [];
          _0x29845c(this, "duration", _0x298e5, this);
        }
        _0xef4a8(_0x4a90df, [{
          'key': "_easingIdx",
          'get': function () {},
          'set': function (_0x273e0d) {}
        }, {
          'key': '_fadeType',
          'get': function () {
            return this.__fadeType;
          },
          'set': function (_0x19b0b4) {}
        }]);
        return _0x4a90df;
      }();
      _0xa4cded = _0x2f48b7(_0xf61561.prototype, "m_EasingName", [_0x14b8a2], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return '';
        }
      });
      _0x4c921d = _0x2f48b7(_0xf61561.prototype, "__easingIdx", [_0x40f8f7], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2f48b7(_0xf61561.prototype, "_easingIdx", [_0x29ae36], Object.getOwnPropertyDescriptor(_0xf61561.prototype, "_easingIdx"), _0xf61561.prototype);
      _0xc09317 = _0x2f48b7(_0xf61561.prototype, "__fadeType", [_0x4025ad], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2f48b7(_0xf61561.prototype, "_fadeType", [_0x3cd544], Object.getOwnPropertyDescriptor(_0xf61561.prototype, "_fadeType"), _0xf61561.prototype);
      _0x298e5 = _0x2f48b7(_0xf61561.prototype, "duration", [_0x908cf1], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return 0x1;
        }
      });
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "b57cahiKlxMZL7TyWc1iHaf", "SloganComponent", undefined);
      var _0x3f63d8;
      var _0x3ac886;
      var _0x1ec022;
      var _0x5cbe2e;
      var _0x925e3f;
      var _0x1da3c8;
      var _0x199779;
      var _0x5c26eb;
      var _0xdd6b33;
      var _0x3f0bca;
      var _0x28d796;
      var _0x1cd347;
      var _0x2f25f7;
      var _0x415fcc;
      var _0xcb73a2;
      var _0xd5bb4b;
      var _0x21aff8;
      var _0x2b7435;
      var _0x4b36e8;
      var _0x43e83d;
      var _0x2b8e67;
      var _0x12ceb8;
      var _0x43c6bb;
      var _0x44ddb3;
      var _0x1f1392;
      var _0x171a44;
      var _0x6065fa;
      var _0x3d4dd7;
      var _0x3cf17c;
      var _0x39ffb2;
      var _0x1974bc;
      var _0x2c1514;
      var _0x130297;
      var _0x1c0320;
      var _0x303ce9;
      var _0x197014;
      var _0x43d26f;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "c6e0eKOKjtNwJBDq/hJOYgn", "index", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "394e72JYgpJK6UACSxatreM", "EffectPlate", undefined);
      var _0x38dd06 = _0x5d1a01.property;
      var _0x135924 = [[0x1, 0x4, 0x7], [0x0, 0x3, 0x6], [0x2, 0x5, 0x8], [0x0, 0x4, 0x8], [0x2, 0x4, 0x6]];
      _0x3f63d8 = _0x38dd06({
        'type': _0x328c5f,
        'tooltip': "destination for fly effect"
      });
      _0x3ac886 = _0x38dd06({
        'type': _0x322adf,
        'tooltip': "FX feature effect"
      });
      _0x1ec022 = _0x38dd06({
        'type': _0x328c5f,
        'tooltip': "nearwin node"
      });
      _0x5cbe2e = _0x38dd06({
        'type': _0x328c5f,
        'tooltip': "counter node"
      });
      _0x925e3f = _0x38dd06({
        'type': _0x1971e0.Skeleton,
        'tooltip': "total win spine"
      });
      _0x1da3c8 = _0x38dd06({
        'type': _0x502387,
        'tooltip': "total label"
      });
      _0x199779 = _0x38dd06({
        'type': _0x1971e0.Skeleton,
        'tooltip': "compliment spine"
      });
      _0x5c26eb = _0x38dd06({
        'type': _0x502387,
        'tooltip': "compliment label"
      });
      _0xdd6b33 = _0x38dd06({
        'type': _0x43e1e0,
        'tooltip': "Character spines"
      });
      _0x3f0bca = _0x38dd06({
        'type': _0x1971e0.Skeleton,
        'tooltip': "FX reel spine"
      });
      _0x28d796 = _0x38dd06({
        'type': _0x32f2cd,
        'tooltip': "multiplier frame effect"
      });
      _0x1cd347 = _0x38dd06({
        'type': _0x5e80ec,
        'tooltip': "multiplier fly effect"
      });
      _0x2f25f7 = _0x38dd06({
        'type': _0x4fec41,
        'tooltip': "joker character"
      });
      _0x415fcc = _0x38dd06({
        'type': _0x328c5f,
        'tooltip': "multiplier fly start position"
      });
      _0xcb73a2 = _0x38dd06({
        'type': _0x1971e0.Skeleton,
        'tooltip': "multiple omen spine"
      });
      _0xd5bb4b = _0x38dd06({
        'type': _0x34dc9d,
        'tooltip': "JP panel animation"
      });
      _0x21aff8 = _0x38dd06({
        'type': _0x1971e0.Skeleton,
        'tooltip': "jp win scatter coin"
      });
      _0x2b7435 = _0x38dd06({
        'type': _0x1971e0.Skeleton,
        'tooltip': "jp win scatter coin"
      });
      _0x4b36e8 = function (_0x2bf0c5) {
        function _0x526f93() {
          var _0x3b9abc;
          var _0x55f209 = arguments.length;
          var _0x27cae4 = new Array(_0x55f209);
          for (var _0x463394 = 0x0; _0x463394 < _0x55f209; _0x463394++) {
            _0x27cae4[_0x463394] = arguments[_0x463394];
          }
          _0x29845c(_0x3b9abc = _0x2bf0c5.call.apply(_0x2bf0c5, [this].concat(_0x27cae4)) || this, "m_flyDestination", _0x43e83d, _0x1cc4fd(_0x3b9abc));
          _0x29845c(_0x3b9abc, "m_FXFeature", _0x2b8e67, _0x1cc4fd(_0x3b9abc));
          _0x29845c(_0x3b9abc, "m_nearwinNode", _0x12ceb8, _0x1cc4fd(_0x3b9abc));
          _0x29845c(_0x3b9abc, "m_counterNode", _0x43c6bb, _0x1cc4fd(_0x3b9abc));
          _0x29845c(_0x3b9abc, "m_totalWinAnim", _0x44ddb3, _0x1cc4fd(_0x3b9abc));
          _0x29845c(_0x3b9abc, "m_totalLabel", _0x1f1392, _0x1cc4fd(_0x3b9abc));
          _0x29845c(_0x3b9abc, "m_complimentAnim", _0x171a44, _0x1cc4fd(_0x3b9abc));
          _0x29845c(_0x3b9abc, "m_complimentLabel", _0x6065fa, _0x1cc4fd(_0x3b9abc));
          _0x29845c(_0x3b9abc, "m_character", _0x3d4dd7, _0x1cc4fd(_0x3b9abc));
          _0x29845c(_0x3b9abc, "m_FXReel", _0x3cf17c, _0x1cc4fd(_0x3b9abc));
          _0x29845c(_0x3b9abc, 'm_multiplierFrame', _0x39ffb2, _0x1cc4fd(_0x3b9abc));
          _0x29845c(_0x3b9abc, "m_multiplierFlyPrefab", _0x1974bc, _0x1cc4fd(_0x3b9abc));
          _0x29845c(_0x3b9abc, "m_jokerCharacter", _0x2c1514, _0x1cc4fd(_0x3b9abc));
          _0x29845c(_0x3b9abc, "m_multiplierFlyStart", _0x130297, _0x1cc4fd(_0x3b9abc));
          _0x29845c(_0x3b9abc, "m_multipleOmen", _0x1c0320, _0x1cc4fd(_0x3b9abc));
          _0x29845c(_0x3b9abc, 'm_JPPanelAnim', _0x303ce9, _0x1cc4fd(_0x3b9abc));
          _0x29845c(_0x3b9abc, 'm_JPWinCoinEffect', _0x197014, _0x1cc4fd(_0x3b9abc));
          _0x29845c(_0x3b9abc, "m_JPWinCoinEffectMult", _0x43d26f, _0x1cc4fd(_0x3b9abc));
          _0x3b9abc.m_gameView = null;
          _0x3b9abc.m_symbolNodes = null;
          _0x3b9abc.m_curEftNodes = [];
          _0x3b9abc.m_symbolNumNodeContainer = null;
          _0x3b9abc.m_symbolNodeContainer = null;
          _0x3b9abc.m_islastfly = false;
          _0x3b9abc.m_flyDestinationWorldPos = null;
          _0x3b9abc.m_isHardstopAudio = false;
          _0x3b9abc.m_multiplierFly = null;
          _0x3b9abc.m_royalIsStop = [];
          _0x3b9abc.m_isLoopStop = false;
          _0x3b9abc.m_isCurNearWin = false;
          _0x3b9abc.m_isCloseWhenBigWin = [];
          return _0x3b9abc;
        }
        _0x4235b3(_0x526f93, _0x2bf0c5);
        var _0x530d21 = _0x526f93.prototype;
        _0x530d21.Init = function (_0x18c468) {
          this.m_gameView = _0x18c468;
          this.m_FXFeature.Init(_0x18c468);
          var _0x55be2f = _0x4e7326(this.m_multiplierFlyPrefab);
          this.m_multiplierFly = _0x55be2f.getComponent(_0x3da614);
          _0x55be2f.setParent(this.node);
          _0x55be2f.active = false;
          this.InitialMultiplierFrame();
        };
        _0x530d21.onLoad = function () {
          for (var _0x48dec4 = 0x0; _0x48dec4 < _0x55e059.COL; _0x48dec4++) {
            this.m_curEftNodes.push(new Array(0x3));
          }
          this.m_symbolNumNodeContainer = new _0x328c5f();
          this.node.addChild(this.m_symbolNumNodeContainer);
          this.m_symbolNodeContainer = new _0x328c5f();
          this.node.addChild(this.m_symbolNodeContainer);
          this.m_flyDestinationWorldPos = this.m_flyDestination.getWorldPosition();
        };
        _0x530d21.ShowSymbolEffect = function () {
          var _0x28c188 = _0x9f23dc(_0x288614().mark(function _0x46d4c6(_0x59a927) {
            var _0x59ed04;
            var _0x502c05;
            var _0x27090e;
            var _0x3ee5c5;
            var _0x2f4133;
            var _0x1d7b5b;
            var _0x45a669;
            var _0x5340bf;
            var _0x4ee9d8;
            var _0x85262f;
            var _0x4a732e;
            return _0x288614().wrap(function (_0x28401b) {
              for (;;) {
                switch (_0x28401b.prev = _0x28401b.next) {
                  case 0x0:
                    if (_0x59a927) {
                      _0x28401b.next = 0x2;
                      break;
                    }
                    return _0x28401b.abrupt("return");
                  case 0x2:
                    _0x59ed04 = new Set();
                    _0x502c05 = new Set();
                    _0x27090e = 0x0;
                  case 0x5:
                    if (!(_0x27090e < _0x59a927.length)) {
                      _0x28401b.next = 0x2d;
                      break;
                    }
                    if (0x1 != _0x59a927[_0x27090e].Atype) {
                      _0x28401b.next = 0xb;
                      break;
                    }
                    if (!_0x59a927[_0x27090e].Index) {
                      _0x59a927[_0x27090e].Index = 0x0;
                    }
                    for (_0x3ee5c5 = 0x0; _0x3ee5c5 < _0x135924[_0x59a927[_0x27090e].Index].length; _0x3ee5c5++) {
                      _0x59ed04.add(_0x135924[_0x59a927[_0x27090e].Index][_0x3ee5c5]);
                    }
                    _0x28401b.next = 0x2a;
                    break;
                  case 0xb:
                    _0x59ed04.add(_0x59a927[_0x27090e].Pos);
                    _0x502c05.add(_0x59a927[_0x27090e].Pos);
                    _0x2f4133 = this.m_gameView.GetRoundInfo();
                    _0x1d7b5b = 0x0;
                  case 0xf:
                    if (!(_0x1d7b5b < _0x55e059.COL)) {
                      _0x28401b.next = 0x1d;
                      break;
                    }
                    _0x45a669 = 0x0;
                  case 0x11:
                    if (!(_0x45a669 < _0x55e059.ROW)) {
                      _0x28401b.next = 0x1a;
                      break;
                    }
                    if (!(_0x2f4133.Mul[_0x1d7b5b].Col[_0x45a669] > 0x0)) {
                      _0x28401b.next = 0x17;
                      break;
                    }
                    _0x502c05.add(_0x1d7b5b * _0x55e059.ROW + _0x45a669);
                    if (0x1 == _0x1d7b5b) {
                      _0x28401b.next = 0x16;
                      break;
                    }
                    return _0x28401b.abrupt('continue', 0x17);
                  case 0x16:
                    _0x59ed04.add(_0x1d7b5b * _0x55e059.ROW + _0x45a669);
                  case 0x17:
                    _0x45a669++;
                    _0x28401b.next = 0x11;
                    break;
                  case 0x1a:
                    _0x1d7b5b++;
                    _0x28401b.next = 0xf;
                    break;
                  case 0x1d:
                    if (!_0x2f4133.PotList) {
                      _0x28401b.next = 0x2a;
                      break;
                    }
                    _0x5340bf = this.m_gameView.GetRoundInfo().PotList;
                    _0x4ee9d8 = 0x0;
                  case 0x20:
                    if (!(_0x4ee9d8 < _0x5340bf.length)) {
                      _0x28401b.next = 0x2a;
                      break;
                    }
                    _0x85262f = _0x5340bf[_0x4ee9d8].Pos;
                    _0x4a732e = Math.floor(_0x85262f / _0x55e059.ROW);
                    _0x502c05.add(_0x5340bf[_0x4ee9d8].Pos);
                    if (0x1 == _0x4a732e) {
                      _0x28401b.next = 0x26;
                      break;
                    }
                    return _0x28401b.abrupt('continue', 0x27);
                  case 0x26:
                    _0x59ed04.add(_0x5340bf[_0x4ee9d8].Pos);
                  case 0x27:
                    _0x4ee9d8++;
                    _0x28401b.next = 0x20;
                    break;
                  case 0x2a:
                    _0x27090e++;
                    _0x28401b.next = 0x5;
                    break;
                  case 0x2d:
                    _0x28401b.next = 0x2f;
                    return this.ShowSymbolWin(Array.from(_0x59ed04), Array.from(_0x502c05));
                  case 0x2f:
                    _0x59ed04 = null;
                    _0x502c05 = null;
                  case 0x31:
                  case "end":
                    return _0x28401b.stop();
                }
              }
            }, _0x46d4c6, this);
          }));
          return function (_0x2fc882) {
            return _0x28c188.apply(this, arguments);
          };
        }();
        _0x530d21.GetEftNode = function (_0x2b5475, _0x197e42) {
          var _0x312e8a = this.m_gameView.SlotReels.GetSymbolPosition(_0x2b5475, _0x197e42);
          _0x312e8a = this.m_gameView.SlotReels.getComponent(_0x2387f8).convertToWorldSpaceAR(_0x312e8a);
          _0x312e8a = this.node.getComponent(_0x2387f8).convertToNodeSpaceAR(_0x312e8a);
          var _0x44339f = this.m_curEftNodes[_0x2b5475][_0x197e42];
          var _0x256e68 = this.m_gameView.GetRoundInfo();
          if (!(0x0 == _0x256e68.Symbol[_0x2b5475].Col[_0x197e42] || _0x44339f)) {
            if (_0x256e68.Symbol[_0x2b5475].Col[_0x197e42] >= _0x55e059.Symbol.BONUS_COIN) {
              _0x44339f = this.m_gameView.NodePools.GetScatterNode();
              if (_0x256e68.Symbol[_0x2b5475].Col[_0x197e42] == _0x55e059.Symbol.ROYAL_BONUS_COIN) {
                _0x44339f.setParent(this.m_symbolNumNodeContainer);
              } else {
                _0x44339f.setParent(this.m_symbolNodeContainer);
              }
            } else {
              (_0x44339f = this.m_gameView.NodePools.GetEffectNode(_0x256e68.Symbol[_0x2b5475].Col[_0x197e42])).setParent(this.m_symbolNodeContainer);
            }
            _0x44339f.setPosition(_0x312e8a);
            _0x1cac53.SetZIndex(_0x44339f, _0x2b5475 * _0x55e059.ROW + _0x197e42);
            this.m_curEftNodes[_0x2b5475][_0x197e42] = _0x44339f;
          }
          return _0x44339f;
        };
        _0x530d21.ShowSymbolWin = function () {
          var _0x2df3ce = _0x9f23dc(_0x288614().mark(function _0x13c58b(_0x1772e2, _0x4af111) {
            var _0xed0fac;
            var _0x4aebdb;
            var _0x3ef4de;
            var _0x28e5e6;
            var _0x5be1ee;
            var _0x5c727a;
            var _0x5482fc;
            var _0x56a082;
            return _0x288614().wrap(function (_0x1bcef2) {
              for (;;) {
                switch (_0x1bcef2.prev = _0x1bcef2.next) {
                  case 0x0:
                    if (undefined === _0x4af111) {
                      _0x4af111 = [];
                    }
                    _0xed0fac = this.m_gameView.GetRoundInfo().Symbol;
                    this.ReturnAllSymbolEffect(_0x4af111);
                    _0x4aebdb = [];
                    for (_0x3ef4de = 0x0; _0x3ef4de < _0x1772e2.length; _0x3ef4de++) {
                      _0x28e5e6 = Math.floor(_0x1772e2[_0x3ef4de] / _0x55e059.ROW);
                      _0x5be1ee = _0x1772e2[_0x3ef4de] % _0x55e059.ROW;
                      if (_0x5c727a = this.GetEftNode(_0x28e5e6, _0x5be1ee)) {
                        if (_0x5c727a.getComponent(_0x208c21)) {
                          _0x5482fc = _0x5c727a.getComponent(_0x208c21);
                          _0x4aebdb.push(_0x5482fc.ShowWin());
                        } else if (_0xed0fac[_0x28e5e6].Col[_0x5be1ee] >= _0x55e059.Symbol.BONUS_COIN) {
                          _0x56a082 = _0x5c727a.getComponent(_0x1695b4);
                          _0x4aebdb.push(_0x56a082.ShowWin(_0xed0fac[_0x28e5e6].Col[_0x5be1ee], false, this.m_gameView.GetRoundInfo().Mul[_0x28e5e6].Col[_0x5be1ee]));
                        } else {
                          _0x4aebdb.push(_0x5c727a.getComponent(_0x42f899).ShowWin(false));
                        }
                        this.m_gameView.SlotReels.SetSymbolActive(_0x28e5e6, _0x5be1ee, false);
                      }
                    }
                    _0x1bcef2.next = 0x7;
                    return Promise.all(_0x4aebdb);
                  case 0x7:
                  case "end":
                    return _0x1bcef2.stop();
                }
              }
            }, _0x13c58b, this);
          }));
          return function (_0x3bdfec, _0x524336) {
            return _0x2df3ce.apply(this, arguments);
          };
        }();
        _0x530d21.PlaySymbolWinLoop = function () {
          var _0x1f85d5 = _0x9f23dc(_0x288614().mark(function _0x2dfb8a(_0x1ea4aa) {
            var _0x29ccf4;
            var _0x2737a5;
            var _0x57af7c;
            return _0x288614().wrap(function (_0x509d0c) {
              for (;;) {
                switch (_0x509d0c.prev = _0x509d0c.next) {
                  case 0x0:
                    _0x29ccf4 = 0x0;
                    if (0x0 != (_0x2737a5 = _0x1ea4aa.length)) {
                      _0x509d0c.next = 0x4;
                      break;
                    }
                    return _0x509d0c.abrupt("return");
                  case 0x4:
                    this.m_isLoopStop = false;
                  case 0x5:
                    if (this.m_isLoopStop) {
                      _0x509d0c.next = 0xd;
                      break;
                    }
                    this.StopAllSymbolEffect(true);
                    _0x57af7c = _0x1ea4aa[_0x29ccf4 % _0x2737a5];
                    _0x509d0c.next = 0xa;
                    return this.ShowWinLine(_0x57af7c);
                  case 0xa:
                    _0x29ccf4++;
                    _0x509d0c.next = 0x5;
                    break;
                  case 0xd:
                  case 'end':
                    return _0x509d0c.stop();
                }
              }
            }, _0x2dfb8a, this);
          }));
          return function (_0x5d9d99) {
            return _0x1f85d5.apply(this, arguments);
          };
        }();
        _0x530d21.ShowWinLine = function () {
          var _0x1cf435 = _0x9f23dc(_0x288614().mark(function _0x9d1f6f(_0x439a41) {
            var _0x1a54db;
            var _0x296282;
            var _0x108d57;
            var _0x3dfbcd;
            var _0x18e66b;
            var _0x17d63a;
            var _0x2d7eb4;
            var _0x236ef3;
            var _0x200caa;
            var _0x2b6ed7;
            var _0x4a4025;
            return _0x288614().wrap(function (_0x323ff9) {
              for (;;) {
                switch (_0x323ff9.prev = _0x323ff9.next) {
                  case 0x0:
                    if (0x1 != _0x439a41.Atype) {
                      _0x323ff9.next = 0x1a;
                      break;
                    }
                    _0x1a54db = _0x55e059.WIN_LINE[_0x439a41.Index];
                    _0x296282 = [];
                    _0x108d57 = 0x0;
                  case 0x4:
                    if (!(_0x108d57 < _0x1a54db.length)) {
                      _0x323ff9.next = 0x16;
                      break;
                    }
                    _0x3dfbcd = _0x1a54db[_0x108d57] % _0x55e059.ROW;
                    _0x18e66b = Math.floor(_0x1a54db[_0x108d57] / _0x55e059.ROW);
                    this.m_gameView.SlotReels.SetSymbolActive(_0x18e66b, _0x3dfbcd, false);
                    if (_0x17d63a = this.m_curEftNodes[_0x18e66b][_0x3dfbcd]) {
                      _0x323ff9.next = 0x11;
                      break;
                    }
                    if (!((_0x2d7eb4 = this.m_gameView.GetRoundInfo().FinalSymbol[_0x18e66b].Col[_0x3dfbcd]) >= _0x55e059.Symbol.BONUS_COIN || _0x2d7eb4 == _0x55e059.Symbol.EMPTY)) {
                      _0x323ff9.next = 0xd;
                      break;
                    }
                    return _0x323ff9.abrupt("continue", 0x13);
                  case 0xd:
                    (_0x17d63a = this.m_gameView.NodePools.GetEffectNode(_0x2d7eb4)).setParent(this.m_symbolNodeContainer);
                    _0x17d63a.setPosition(this.m_gameView.SlotReels.GetSymbolPosition(_0x18e66b, _0x3dfbcd));
                    this.m_curEftNodes[_0x18e66b][_0x3dfbcd] = _0x17d63a;
                  case 0x11:
                    _0x17d63a.active = true;
                    _0x296282.push(_0x17d63a.getComponent(_0x42f899).ShowWin());
                  case 0x13:
                    _0x108d57++;
                    _0x323ff9.next = 0x4;
                    break;
                  case 0x16:
                    _0x323ff9.next = 0x18;
                    return Promise.all(_0x296282);
                  case 0x18:
                    _0x323ff9.next = 0x2a;
                    break;
                  case 0x1a:
                    _0x236ef3 = _0x439a41.Pos;
                    _0x200caa = Math.floor(_0x236ef3 / _0x55e059.ROW);
                    _0x2b6ed7 = _0x236ef3 % _0x55e059.ROW;
                    if (!(_0x4a4025 = this.m_curEftNodes[_0x200caa][_0x2b6ed7])) {
                      (_0x4a4025 = this.m_gameView.NodePools.GetScatterNumNode()).setParent(this.m_symbolNumNodeContainer);
                      _0x4a4025.setPosition(this.m_gameView.SlotReels.GetSymbolPosition(_0x200caa, _0x2b6ed7));
                      _0x1cac53.SetZIndex(_0x4a4025, _0x200caa * _0x55e059.ROW + _0x2b6ed7);
                      this.m_curEftNodes[_0x200caa][_0x2b6ed7] = _0x4a4025;
                      _0x4a4025.getComponent(_0x208c21).SetNumber(_0x439a41.Win);
                    }
                    _0x4a4025.active = true;
                    this.m_gameView.SlotReels.SetSymbolActive(_0x200caa, _0x2b6ed7, false);
                    if (!_0x4a4025.getComponent(_0x1695b4)) {
                      _0x323ff9.next = 0x26;
                      break;
                    }
                    _0x323ff9.next = 0x24;
                    return _0x4a4025.getComponent(_0x1695b4).ShowWin(this.m_gameView.GetRoundInfo().Symbol[_0x200caa].Col[_0x2b6ed7], false, this.m_gameView.GetJPIndex(_0x200caa, _0x2b6ed7));
                  case 0x24:
                    _0x323ff9.next = 0x2a;
                    break;
                  case 0x26:
                    if (!_0x4a4025.getComponent(_0x208c21)) {
                      _0x323ff9.next = 0x2a;
                      break;
                    }
                    _0x4a4025.getComponent(_0x208c21).SetNumber(_0x439a41.Win);
                    _0x323ff9.next = 0x2a;
                    return _0x4a4025.getComponent(_0x208c21).ShowIdle();
                  case 0x2a:
                  case "end":
                    return _0x323ff9.stop();
                }
              }
            }, _0x9d1f6f, this);
          }));
          return function (_0x590baf) {
            return _0x1cf435.apply(this, arguments);
          };
        }();
        _0x530d21.StopAllSymbolEffect = function (_0xf4b5c9) {
          if (undefined === _0xf4b5c9) {
            _0xf4b5c9 = false;
          }
          for (var _0x5d4b69 = 0x0; _0x5d4b69 < _0x55e059.COL; _0x5d4b69++) {
            for (var _0x3ad1c5 = 0x0; _0x3ad1c5 < _0x55e059.ROW; _0x3ad1c5++) {
              if (this.m_curEftNodes[_0x5d4b69][_0x3ad1c5]) {
                if (this.m_curEftNodes[_0x5d4b69][_0x3ad1c5].getComponent(_0x208c21) && _0xf4b5c9) {
                  continue;
                }
                this.m_curEftNodes[_0x5d4b69][_0x3ad1c5].active = false;
                this.m_gameView.SlotReels.SetSymbolActive(_0x5d4b69, _0x3ad1c5, true);
              }
            }
          }
        };
        _0x530d21.ReturnAllSymbolEffect = function (_0x226214) {
          if (undefined === _0x226214) {
            _0x226214 = [];
          }
          for (var _0x278f4a = 0x0; _0x278f4a < _0x55e059.COL; _0x278f4a++) {
            for (var _0x301f73 = 0x0; _0x301f73 < _0x55e059.ROW; _0x301f73++) {
              if (!_0x226214.includes(_0x278f4a * _0x55e059.ROW + _0x301f73)) {
                var _0x235254 = this.m_curEftNodes[_0x278f4a][_0x301f73];
                if (_0x235254) {
                  if (_0x235254.getComponent(_0x42f899)) {
                    this.m_gameView.NodePools.ReturnEffectNode(_0x235254);
                  } else if (_0x235254.getComponent(_0x1695b4)) {
                    this.m_gameView.NodePools.reutrnScatterNode(_0x235254);
                  } else if (_0x235254.getComponent(_0x208c21)) {
                    this.m_gameView.NodePools.reutrnScatterNumNode(_0x235254);
                  } else {
                    _0x3dc7e8("Symbol effect node type error");
                  }
                  _0x235254.removeFromParent();
                  this.m_curEftNodes[_0x278f4a][_0x301f73] = null;
                }
                this.m_gameView.SlotReels.SetSymbolActive(_0x278f4a, _0x301f73, true);
              }
            }
          }
        };
        _0x530d21.ShowSymbolStop = function () {
          var _0x5a6cd8 = _0x9f23dc(_0x288614().mark(function _0x4a9287(_0x2833ed, _0x495cbf) {
            var _0x25faed;
            var _0x54aca7;
            var _0x4c3443;
            var _0x1e440a;
            var _0x131613;
            var _0x47720c;
            return _0x288614().wrap(function (_0x129080) {
              for (;;) {
                switch (_0x129080.prev = _0x129080.next) {
                  case 0x0:
                    if (undefined === _0x495cbf) {
                      _0x495cbf = null;
                    }
                    _0x25faed = this.m_gameView.GetRoundInfo().Symbol;
                    _0x54aca7 = -0x1;
                    for (_0x4c3443 = 0x0; _0x4c3443 < _0x55e059.ROW; _0x4c3443++) {
                      if (_0x25faed[_0x2833ed].Col[_0x4c3443] >= _0x55e059.Symbol.WILD777) {
                        _0x54aca7 = _0x4c3443;
                      }
                    }
                    _0x1e440a = 0x0;
                  case 0x5:
                    if (!(_0x1e440a < _0x55e059.ROW)) {
                      _0x129080.next = 0x2c;
                      break;
                    }
                    if (!(_0x25faed[_0x2833ed].Col[_0x1e440a] < _0x55e059.Symbol.WILD777)) {
                      _0x129080.next = 0x9;
                      break;
                    }
                    _0x495cbf[_0x2833ed][_0x1e440a] = null;
                    return _0x129080.abrupt('continue', 0x29);
                  case 0x9:
                    if (!(_0x131613 = this.GetEftNode(_0x2833ed, _0x1e440a))) {
                      _0x129080.next = 0x29;
                      break;
                    }
                    if (!(_0x25faed[_0x2833ed].Col[_0x1e440a] >= _0x55e059.Symbol.BONUS_COIN)) {
                      _0x129080.next = 0x25;
                      break;
                    }
                    if (!(_0x131613.getComponent(_0x208c21) || this.m_royalIsStop[_0x1e440a] && 0x1 == _0x2833ed)) {
                      _0x129080.next = 0xe;
                      break;
                    }
                    return _0x129080.abrupt('continue', 0x29);
                  case 0xe:
                    _0x495cbf[_0x2833ed][_0x1e440a] = _0x131613;
                    _0x129080.t0 = _0x25faed[_0x2833ed].Col[_0x1e440a];
                    _0x129080.next = _0x129080.t0 === _0x55e059.Symbol.BONUS_COIN ? 0x12 : _0x129080.t0 === _0x55e059.Symbol.BONUS_COIN_JP ? 0x14 : _0x129080.t0 === _0x55e059.Symbol.ROYAL_BONUS_COIN ? 0x16 : 0x19;
                    break;
                  case 0x12:
                    _0x350c15.Play(_0x55e059.AudioClips.Coin_Stop_1, false);
                    return _0x129080.abrupt("break", 0x19);
                  case 0x14:
                    if (this.m_gameView.GetJPIndex(_0x2833ed, _0x1e440a) <= _0x55e059.JP_TYPES.MINOR) {
                      _0x350c15.Play(_0x55e059.AudioClips.Coin_Stop_2, false);
                    } else {
                      _0x350c15.Play(_0x55e059.AudioClips.Coin_Stop_3, false);
                    }
                    return _0x129080.abrupt("break", 0x19);
                  case 0x16:
                    this.m_royalIsStop[_0x1e440a] = true;
                    _0x350c15.Play(_0x55e059.AudioClips.Coin_Stop_4, false);
                    return _0x129080.abrupt("break", 0x19);
                  case 0x19:
                    if (this.m_gameView.GetRoundInfo().Symbol[_0x2833ed].Col[_0x1e440a] == _0x55e059.Symbol.BONUS_COIN) {
                      _0x131613.getComponent(_0x1695b4).SetNumber(this.m_gameView.GetRoundInfo().Mul[_0x2833ed].Col[_0x1e440a] * _0x3f2a41.GetNowBetValue());
                    }
                    if (this.m_gameView.GetRoundInfo().Symbol[_0x2833ed].Col[_0x1e440a] == _0x55e059.Symbol.BONUS_COIN_JP) {
                      if (!this.m_gameView.HasShowJPStop) {
                        _0x350c15.Play(_0x55e059.AudioClips.FX_feature_Start, false);
                        this.m_gameView.HasShowJPStop = true;
                        this.ShowFXJPStop();
                        if (!this.m_gameView.IsInBG) {
                          this.m_gameView.IsJPFlyStop = false;
                        }
                      }
                      _0x47720c = this.m_gameView.GetJPIndex(_0x2833ed, _0x1e440a);
                      this.m_JPPanelAnim[_0x47720c].play("JP_Win");
                    }
                    if (this.m_gameView.IsInBG && _0x25faed[_0x2833ed].Col[_0x1e440a] >= _0x55e059.Symbol.ROYAL_BONUS_COIN) {
                      this.ShowFXReel(_0x1e440a, true);
                    }
                    this.m_gameView.SlotReels.SetSymbolActive(_0x2833ed, _0x1e440a, false);
                    if (_0x1e440a != _0x54aca7) {
                      _0x129080.next = 0x22;
                      break;
                    }
                    _0x129080.next = 0x20;
                    return _0x131613.getComponent(_0x1695b4).ShowStop(_0x25faed[_0x2833ed].Col[_0x1e440a], this.m_gameView.GetJPIndex(_0x2833ed, _0x1e440a));
                  case 0x20:
                    _0x129080.next = 0x23;
                    break;
                  case 0x22:
                    _0x131613.getComponent(_0x1695b4).ShowStop(_0x25faed[_0x2833ed].Col[_0x1e440a], this.m_gameView.GetJPIndex(_0x2833ed, _0x1e440a));
                  case 0x23:
                    _0x129080.next = 0x29;
                    break;
                  case 0x25:
                    _0x495cbf[_0x2833ed][_0x1e440a] = _0x131613;
                    this.m_gameView.SlotReels.SetSymbolActive(_0x2833ed, _0x1e440a, false);
                    _0x129080.next = 0x29;
                    return _0x131613.getComponent(_0x42f899).ShowStop();
                  case 0x29:
                    _0x1e440a++;
                    _0x129080.next = 0x5;
                    break;
                  case 0x2c:
                  case 'end':
                    return _0x129080.stop();
                }
              }
            }, _0x4a9287, this);
          }));
          return function (_0x169c70, _0x422f4a) {
            return _0x5a6cd8.apply(this, arguments);
          };
        }();
        _0x530d21.ShowSymbolShow = function () {
          var _0x43fd4d = _0x9f23dc(_0x288614().mark(function _0x5625a0(_0x5daf67, _0x2969d2, _0x2ff7de) {
            var _0x1b1d65;
            var _0x5e4e77;
            var _0x2c2714;
            var _0x1c9a3f;
            var _0x467ce1;
            return _0x288614().wrap(function (_0x1ed08f) {
              for (;;) {
                switch (_0x1ed08f.prev = _0x1ed08f.next) {
                  case 0x0:
                    if (undefined === _0x2ff7de) {
                      _0x2ff7de = 0x0;
                    }
                    _0x1b1d65 = this.m_gameView.GetRoundInfo().PotList;
                    _0x5e4e77 = _0x5daf67 * _0x55e059.ROW + _0x2969d2;
                    _0x2c2714 = 0x0;
                  case 0x4:
                    if (!(_0x2c2714 < _0x1b1d65.length)) {
                      _0x1ed08f.next = 0x13;
                      break;
                    }
                    if (_0x1b1d65[_0x2c2714].Pos != _0x5e4e77) {
                      _0x1ed08f.next = 0x10;
                      break;
                    }
                    _0x1c9a3f = this.m_gameView.SlotReels.GetSymbolPosition(_0x5daf67, _0x2969d2);
                    _0x1c9a3f = this.m_gameView.SlotReels.getComponent(_0x2387f8).convertToWorldSpaceAR(_0x1c9a3f);
                    _0x1c9a3f = this.node.getComponent(_0x2387f8).convertToNodeSpaceAR(_0x1c9a3f);
                    if (!((_0x467ce1 = this.m_curEftNodes[_0x5daf67][_0x2969d2]) && _0x467ce1.getComponent(_0x1695b4))) {
                      if (_0x467ce1) {
                        this.m_gameView.NodePools.ReturnEffectNode(_0x467ce1);
                        _0x467ce1.removeFromParent();
                      }
                      (_0x467ce1 = this.m_gameView.NodePools.GetScatterNode()).setPosition(_0x1c9a3f);
                      _0x467ce1.setParent(this.m_symbolNodeContainer);
                      _0x1cac53.SetZIndex(_0x467ce1, _0x5e4e77);
                      this.m_curEftNodes[_0x5daf67][_0x2969d2] = _0x467ce1;
                    }
                    if (!_0x467ce1) {
                      _0x1ed08f.next = 0x10;
                      break;
                    }
                    if (_0x1b1d65[_0x2c2714].Symbol == _0x55e059.Symbol.BONUS_COIN) {
                      _0x467ce1.getComponent(_0x1695b4).SetNumber(_0x2ff7de);
                    }
                    _0x350c15.Play(_0x55e059.AudioClips.Coin_Show, false);
                    _0x1ed08f.next = 0x10;
                    return _0x467ce1.getComponent(_0x1695b4).ShowShow(_0x1b1d65[_0x2c2714].Symbol, this.m_gameView.GetJPIndexByOdd(_0x1b1d65[_0x2c2714].Mul));
                  case 0x10:
                    _0x2c2714++;
                    _0x1ed08f.next = 0x4;
                    break;
                  case 0x13:
                  case 'end':
                    return _0x1ed08f.stop();
                }
              }
            }, _0x5625a0, this);
          }));
          return function (_0x48f3ce, _0x390178, _0x511c6e) {
            return _0x43fd4d.apply(this, arguments);
          };
        }();
        _0x530d21.ShowSymbolChange = function () {
          var _0x4e78ba = _0x9f23dc(_0x288614().mark(function _0x155583(_0x3cc43d, _0x6ff4b4, _0x20191e) {
            var _0x4f24d5;
            var _0x36c726;
            return _0x288614().wrap(function (_0x4923f6) {
              for (;;) {
                switch (_0x4923f6.prev = _0x4923f6.next) {
                  case 0x0:
                    if (undefined === _0x20191e) {
                      _0x20191e = 0x0;
                    }
                    _0x4f24d5 = this.m_gameView.GetRoundInfo().Symbol;
                    if (!(_0x36c726 = this.GetEftNode(_0x3cc43d, _0x6ff4b4))) {
                      _0x4923f6.next = 0xd;
                      break;
                    }
                    if (_0x20191e) {
                      _0x36c726.getComponent(_0x208c21).SetNumber(_0x20191e + _0x36c726.getComponent(_0x208c21).GetNumber());
                    }
                    if (_0x4f24d5[_0x3cc43d].Col[_0x6ff4b4] == _0x55e059.Symbol.ROYAL_BONUS_COIN) {
                      _0x4923f6.next = 0xb;
                      break;
                    }
                    if (_0x4f24d5[_0x3cc43d].Col[_0x6ff4b4] == _0x55e059.Symbol.BONUS_COIN) {
                      _0x36c726.getComponent(_0x1695b4).SetNumberVisible(false);
                    }
                    _0x4923f6.next = 0x9;
                    return _0x36c726.getComponent(_0x1695b4).ShowChange(_0x4f24d5[_0x3cc43d].Col[_0x6ff4b4], this.m_gameView.GetJPIndex(_0x3cc43d, _0x6ff4b4));
                  case 0x9:
                    _0x4923f6.next = 0xd;
                    break;
                  case 0xb:
                    _0x4923f6.next = 0xd;
                    return _0x36c726.getComponent(_0x208c21).ShowChange();
                  case 0xd:
                  case 'end':
                    return _0x4923f6.stop();
                }
              }
            }, _0x155583, this);
          }));
          return function (_0x20628d, _0x535417, _0x2252ca) {
            return _0x4e78ba.apply(this, arguments);
          };
        }();
        _0x530d21.ShowFly = function () {
          var _0x1a0755 = _0x9f23dc(_0x288614().mark(function _0x427f2a(_0x296e16, _0x9d217f, _0x51e9a1, _0xb4ce9, _0x2568e8, _0x1d13a1, _0x212fac) {
            var _0x18df9a;
            return _0x288614().wrap(function (_0x450524) {
              for (;;) {
                switch (_0x450524.prev = _0x450524.next) {
                  case 0x0:
                    if (undefined === _0x2568e8) {
                      _0x2568e8 = 0x0;
                    }
                    if (undefined === _0x1d13a1) {
                      _0x1d13a1 = false;
                    }
                    if (undefined === _0x212fac) {
                      _0x212fac = true;
                    }
                    (_0x18df9a = this.m_gameView.NodePools.GetFlyNode()).getComponent(_0x17ba94).Init(this);
                    _0x18df9a.setPosition(this.node.getParent().getParent().getComponent(_0x2387f8).convertToNodeSpaceAR(_0x296e16));
                    _0x18df9a.setParent(this.node.getParent().getParent());
                    _0x350c15.Play(_0x55e059.AudioClips.Collect_Fly, false);
                    _0x450524.t0 = _0x51e9a1;
                    _0x450524.next = _0x450524.t0 === _0x55e059.FlyType.Normal ? 0xb : _0x450524.t0 === _0x55e059.FlyType.Shrink ? 0xe : _0x450524.t0 === _0x55e059.FlyType.Grow ? 0x11 : 0x14;
                    break;
                  case 0xb:
                    _0x450524.next = 0xd;
                    return _0x18df9a.getComponent(_0x17ba94).FlyNonShrink(_0xb4ce9, _0x2568e8, _0x9d217f, _0x1d13a1, _0x212fac);
                  case 0xd:
                    return _0x450524.abrupt('break', 0x14);
                  case 0xe:
                    _0x450524.next = 0x10;
                    return _0x18df9a.getComponent(_0x17ba94).FlyShrink(_0xb4ce9, _0x2568e8, _0x9d217f, _0x1d13a1, _0x212fac);
                  case 0x10:
                    return _0x450524.abrupt("break", 0x14);
                  case 0x11:
                    _0x450524.next = 0x13;
                    return _0x18df9a.getComponent(_0x17ba94).FlyGrow(_0xb4ce9, _0x2568e8, _0x9d217f, _0x1d13a1, _0x212fac);
                  case 0x13:
                    return _0x450524.abrupt("break", 0x14);
                  case 0x14:
                    this.m_gameView.NodePools.ReturnFlyNode(_0x18df9a);
                  case 0x15:
                  case 'end':
                    return _0x450524.stop();
                }
              }
            }, _0x427f2a, this);
          }));
          return function (_0x19b484, _0x8e1245, _0x5434e6, _0x3fc7de, _0x2aee1f, _0xee97db, _0x22e0a6) {
            return _0x1a0755.apply(this, arguments);
          };
        }();
        _0x530d21.ShowHit = function () {
          var _0xfd7c30 = _0x9f23dc(_0x288614().mark(function _0x47d391(_0x26b24c, _0x20f717) {
            var _0x1bc948;
            var _0x33241a = this;
            return _0x288614().wrap(function (_0x443443) {
              for (;;) {
                switch (_0x443443.prev = _0x443443.next) {
                  case 0x0:
                    if (undefined === _0x20f717) {
                      _0x20f717 = false;
                    }
                    (_0x1bc948 = this.m_gameView.NodePools.GetHitNode()).setPosition(this.m_character.node.getComponent(_0x2387f8).convertToNodeSpaceAR(_0x26b24c));
                    _0x1bc948.setParent(this.m_character.node);
                    _0x1bc948.setScale(1.5, 1.5, 0x1);
                    if (_0x20f717) {
                      _0x443443.next = 0x8;
                      break;
                    }
                    this.m_gameView.NodePools.ReturnHitNode(_0x1bc948);
                    return _0x443443.abrupt("return");
                  case 0x8:
                    if (!this.m_isHardstopAudio && this.m_gameView.IsHardStop) {
                      _0x350c15.Play(_0x55e059.AudioClips.Scatter_CoinIn, false);
                      this.m_isHardstopAudio = true;
                    } else if (!this.m_gameView.IsHardStop) {
                      _0x350c15.Play(_0x55e059.AudioClips.Scatter_CoinIn, false);
                    }
                    _0x350c15.Play(_0x55e059.AudioClips.Scatter_CoinIn, false);
                    _0x350c15.Play(_0x55e059.AudioClips.Pot_Collect, false);
                    _0x1bc948.getComponent(_0x26492b).ShowHit().then(function () {
                      _0x33241a.m_gameView.NodePools.ReturnHitNode(_0x1bc948);
                    });
                    this.m_character.PlayT1Collect();
                    this.m_gameView.CoinCount -= 0x1;
                  case 0xe:
                  case "end":
                    return _0x443443.stop();
                }
              }
            }, _0x47d391, this);
          }));
          return function (_0x4dcff9, _0xbbb719) {
            return _0xfd7c30.apply(this, arguments);
          };
        }();
        _0x530d21.ShowCharacterUpgrade = function () {
          var _0x3e0383 = _0x9f23dc(_0x288614().mark(function _0x2785c3(_0x47c096) {
            return _0x288614().wrap(function (_0x54874f) {
              for (;;) {
                switch (_0x54874f.prev = _0x54874f.next) {
                  case 0x0:
                    if (undefined === _0x47c096) {
                      _0x47c096 = false;
                    }
                    if (!_0x47c096) {
                      _0x54874f.next = 0x6;
                      break;
                    }
                    _0x54874f.next = 0x4;
                    return this.m_character.PlayT1Upgrade();
                  case 0x4:
                    _0x54874f.next = 0x9;
                    break;
                  case 0x6:
                    _0x350c15.Play(_0x55e059.AudioClips.Pot_Upgrate, false);
                    _0x54874f.next = 0x9;
                    return this.m_character.PlayUpgrade();
                  case 0x9:
                  case "end":
                    return _0x54874f.stop();
                }
              }
            }, _0x2785c3, this);
          }));
          return function (_0x2012aa) {
            return _0x3e0383.apply(this, arguments);
          };
        }();
        _0x530d21.ShowFXFeature = function () {
          var _0x4dd5ae = _0x9f23dc(_0x288614().mark(function _0x574b26() {
            return _0x288614().wrap(function (_0x1d7e9d) {
              for (;;) {
                switch (_0x1d7e9d.prev = _0x1d7e9d.next) {
                  case 0x0:
                    _0x1d7e9d.next = 0x2;
                    return this.m_FXFeature.ShowFXFeature();
                  case 0x2:
                  case 'end':
                    return _0x1d7e9d.stop();
                }
              }
            }, _0x574b26, this);
          }));
          return function () {
            return _0x4dd5ae.apply(this, arguments);
          };
        }();
        _0x530d21.ShowFeatureEnd = function () {
          this.m_FXFeature.ShowFXFeatureEnd();
        };
        _0x530d21.ShowFXJPStop = function () {
          var _0x5cff36 = _0x9f23dc(_0x288614().mark(function _0x22e04e() {
            return _0x288614().wrap(function (_0x228285) {
              for (;;) {
                switch (_0x228285.prev = _0x228285.next) {
                  case 0x0:
                    _0x228285.next = 0x2;
                    return this.m_FXFeature.ShowJPStopFeature();
                  case 0x2:
                  case "end":
                    return _0x228285.stop();
                }
              }
            }, _0x22e04e, this);
          }));
          return function () {
            return _0x5cff36.apply(this, arguments);
          };
        }();
        _0x530d21.ShowNearwinEffect = function () {
          var _0x6d3e65 = _0x9f23dc(_0x288614().mark(function _0x2f995c() {
            return _0x288614().wrap(function (_0x5d7e87) {
              for (;;) {
                switch (_0x5d7e87.prev = _0x5d7e87.next) {
                  case 0x0:
                    this.m_nearwinNode.getParent().active = true;
                    this.m_nearwinNode.getComponent(_0x342406).FadeIn();
                    _0x350c15.Play(_0x55e059.AudioClips.Reel_NearWin, false);
                    this.m_nearwinNode.getComponent(_0x1971e0.Skeleton).setAnimation(0x0, "NearWin", true);
                    this.m_jokerCharacter.PlayPotNearWin();
                    this.m_character.PlayT1NearWin();
                    this.m_gameView.NearScreen();
                  case 0x7:
                  case "end":
                    return _0x5d7e87.stop();
                }
              }
            }, _0x2f995c, this);
          }));
          return function () {
            return _0x6d3e65.apply(this, arguments);
          };
        }();
        _0x530d21.HideNearwinEffect = function () {
          var _0x415f7f = _0x9f23dc(_0x288614().mark(function _0x3b2e43() {
            return _0x288614().wrap(function (_0x5db3b5) {
              for (;;) {
                switch (_0x5db3b5.prev = _0x5db3b5.next) {
                  case 0x0:
                    this.m_gameView.FarScreen();
                    this.SymbolStopNearWin();
                    this.m_nearwinNode.getComponent(_0x342406).FadeOut();
                    this.m_character.EndT1NearWin();
                    this.m_jokerCharacter.PlayPotNearWinEnd();
                  case 0x5:
                  case "end":
                    return _0x5db3b5.stop();
                }
              }
            }, _0x3b2e43, this);
          }));
          return function () {
            return _0x415f7f.apply(this, arguments);
          };
        }();
        _0x530d21.ShowSymbolNearWin = function () {
          this.m_isCurNearWin = true;
          for (var _0x13f6fe = 0x0; _0x13f6fe < _0x55e059.COL; _0x13f6fe++) {
            for (var _0xaabe92 = 0x0; _0xaabe92 < _0x55e059.ROW; _0xaabe92++) {
              var _0x3d9e1d = this.m_curEftNodes[_0x13f6fe][_0xaabe92];
              if (_0x3d9e1d && _0x3d9e1d.getComponent(_0x1695b4)) {
                _0x3d9e1d.getComponent(_0x1695b4).ShowNearWin(this.m_gameView.GetRoundInfo().Symbol[_0x13f6fe].Col[_0xaabe92], this.m_gameView.GetJPIndex(_0x13f6fe, _0xaabe92));
              }
            }
          }
          if (!this.m_gameView.IsHardStop) {
            this.m_gameView.SlotReels.SetAllSymbolDark(true);
          }
        };
        _0x530d21.SymbolStopNearWin = function () {
          for (var _0x426314 = 0x0; _0x426314 < _0x55e059.COL; _0x426314++) {
            for (var _0x59b973 = 0x0; _0x59b973 < _0x55e059.ROW; _0x59b973++) {
              var _0xb1c6b = this.m_curEftNodes[_0x426314][_0x59b973];
              if (_0xb1c6b && _0xb1c6b.getComponent(_0x1695b4)) {
                _0xb1c6b.getComponent(_0x1695b4).ShowIdle();
              }
            }
          }
        };
        _0x530d21.ShowCounterChange = function () {
          var _0x360a4e = _0x9f23dc(_0x288614().mark(function _0x24e2c7(_0x39c574, _0xcd8e27) {
            return _0x288614().wrap(function (_0x167a91) {
              for (;;) {
                switch (_0x167a91.prev = _0x167a91.next) {
                  case 0x0:
                    _0x167a91.next = 0x2;
                    return this.m_counterNode.getComponent(_0x585337).CounterChange(_0x39c574, _0xcd8e27);
                  case 0x2:
                  case 'end':
                    return _0x167a91.stop();
                }
              }
            }, _0x24e2c7, this);
          }));
          return function (_0x2c6a61, _0x483b14) {
            return _0x360a4e.apply(this, arguments);
          };
        }();
        _0x530d21.ShowCounterClose = function () {
          this.m_counterNode.getComponent(_0x585337).CounterClose();
        };
        _0x530d21.ShowCounterShow = function () {
          this.m_counterNode.getComponent(_0x585337).CounterShow();
        };
        _0x530d21.ShowTotalWin = function () {
          var _0x40e6a1 = _0x9f23dc(_0x288614().mark(function _0x2b6c72(_0x57843e) {
            return _0x288614().wrap(function (_0x4a9507) {
              for (;;) {
                switch (_0x4a9507.prev = _0x4a9507.next) {
                  case 0x0:
                    this.m_totalWinAnim.node.active = true;
                    this.m_totalWinAnim.node.getParent().active = true;
                    if (_0x57843e != 'Win') {
                      _0x4a9507.next = 0x9;
                      break;
                    }
                    this.m_totalWinAnim.node.active = true;
                    _0x4a9507.next = 0x6;
                    return _0x32d2d6.PlayAnimation(this.m_totalWinAnim, 'Win', false);
                  case 0x6:
                    _0x32d2d6.PlayAnimation(this.m_totalWinAnim, "Idle", false);
                    _0x4a9507.next = 0x16;
                    break;
                  case 0x9:
                    if (_0x57843e != "Show") {
                      _0x4a9507.next = 0xf;
                      break;
                    }
                    this.m_totalLabel.string = '0';
                    _0x4a9507.next = 0xd;
                    return _0x32d2d6.PlayAnimation(this.m_totalWinAnim, "Show", false);
                  case 0xd:
                    _0x4a9507.next = 0x16;
                    break;
                  case 0xf:
                    if (_0x57843e != "Idle") {
                      _0x4a9507.next = 0x13;
                      break;
                    }
                    _0x32d2d6.PlayAnimation(this.m_totalWinAnim, "Idle", true);
                    _0x4a9507.next = 0x16;
                    break;
                  case 0x13:
                    _0x4a9507.next = 0x15;
                    return _0x32d2d6.PlayAnimation(this.m_totalWinAnim, 'End', false);
                  case 0x15:
                    this.m_totalWinAnim.node.active = false;
                  case 0x16:
                  case "end":
                    return _0x4a9507.stop();
                }
              }
            }, _0x2b6c72, this);
          }));
          return function (_0x16c3b3) {
            return _0x40e6a1.apply(this, arguments);
          };
        }();
        _0x530d21.ShowCompliment = function () {
          var _0x259941 = _0x9f23dc(_0x288614().mark(function _0x85eb45(_0x531de7) {
            return _0x288614().wrap(function (_0x2815ca) {
              for (;;) {
                switch (_0x2815ca.prev = _0x2815ca.next) {
                  case 0x0:
                    this.m_complimentAnim.node.active = true;
                    this.m_complimentLabel.node.active = true;
                    this.m_complimentAnim.node.getParent().active = true;
                    if (_0x531de7 != "Start") {
                      _0x2815ca.next = 0x8;
                      break;
                    }
                    _0x2815ca.next = 0x6;
                    return _0x32d2d6.PlayAnimation(this.m_complimentAnim, "Start", false);
                  case 0x6:
                    _0x2815ca.next = 0x13;
                    break;
                  case 0x8:
                    if (_0x531de7 != "End") {
                      _0x2815ca.next = 0x10;
                      break;
                    }
                    this.ShowTotalWin('End');
                    _0x2815ca.next = 0xc;
                    return _0x32d2d6.PlayAnimation(this.m_complimentAnim, "End", false);
                  case 0xc:
                    this.m_complimentAnim.node.active = false;
                    this.m_complimentLabel.node.active = false;
                    _0x2815ca.next = 0x13;
                    break;
                  case 0x10:
                    if (_0x531de7 != "Loop") {
                      _0x2815ca.next = 0x13;
                      break;
                    }
                    _0x2815ca.next = 0x13;
                    return _0x32d2d6.PlayAnimation(this.m_complimentAnim, "Loop", true);
                  case 0x13:
                  case "end":
                    return _0x2815ca.stop();
                }
              }
            }, _0x85eb45, this);
          }));
          return function (_0x404fa7) {
            return _0x259941.apply(this, arguments);
          };
        }();
        _0x530d21.RecoverPlate = function (_0x356d45, _0x448dca, _0x5d6515) {
          for (var _0x5bb1b9 = 0x0; _0x5bb1b9 < _0x55e059.COL; _0x5bb1b9++) {
            for (var _0x28e991 = 0x0; _0x28e991 < _0x55e059.ROW; _0x28e991++) {
              if (0x0 != _0x356d45[_0x5bb1b9].Col[_0x28e991]) {
                this.m_gameView.SlotReels.SetSymbolActive(_0x5bb1b9, _0x28e991, false);
              }
              if (0x1 == _0x5bb1b9 && _0x448dca[_0x28e991] == _0x55e059.Symbol.ROYAL_BONUS_COIN) {
                this.m_gameView.SlotReels.SetSymbolActive(_0x5bb1b9, _0x28e991, false);
                if (0x0 == _0x5d6515[_0x28e991]) {
                  var _0x5b0f01 = this.m_gameView.NodePools.GetScatterNode();
                  this.m_curEftNodes[_0x5bb1b9][_0x28e991] = _0x5b0f01;
                  _0x5b0f01.setParent(this.m_symbolNodeContainer);
                  _0x5b0f01.setPosition(this.m_gameView.SlotReels.GetSymbolPosition(_0x5bb1b9, _0x28e991));
                  _0x5b0f01.getComponent(_0x1695b4).ShowIdle(_0x55e059.Symbol.ROYAL_BONUS_COIN);
                  _0x1cac53.SetZIndex(_0x5b0f01, _0x5bb1b9 * _0x55e059.ROW + _0x28e991);
                } else {
                  var _0x2d723d = this.m_gameView.NodePools.GetScatterNumNode();
                  this.m_curEftNodes[_0x5bb1b9][_0x28e991] = _0x2d723d;
                  _0x2d723d.setParent(this.m_symbolNumNodeContainer);
                  _0x2d723d.setPosition(this.m_gameView.SlotReels.GetSymbolPosition(_0x5bb1b9, _0x28e991));
                  _0x2d723d.getComponent(_0x208c21).SetNumber(_0x5d6515[_0x28e991] * _0x3f2a41.GetNowBetValue());
                  _0x2d723d.getComponent(_0x208c21).ShowIdle();
                  _0x1cac53.SetZIndex(_0x2d723d, _0x5bb1b9 * _0x55e059.ROW + _0x28e991);
                }
              }
            }
          }
        };
        _0x530d21.ShowCharacter = function () {
          var _0x575749 = _0x9f23dc(_0x288614().mark(function _0x3cb41c(_0x2ab1ac) {
            return _0x288614().wrap(function (_0x3c4b0c) {
              for (;;) {
                switch (_0x3c4b0c.prev = _0x3c4b0c.next) {
                  case 0x0:
                    _0x3c4b0c.t0 = _0x2ab1ac;
                    _0x3c4b0c.next = _0x3c4b0c.t0 === _0x55e059.CharacterAnim.START ? 0x3 : _0x3c4b0c.t0 === _0x55e059.CharacterAnim.LOOP ? 0x6 : _0x3c4b0c.t0 === _0x55e059.CharacterAnim.END ? 0x9 : 0xc;
                    break;
                  case 0x3:
                    _0x3c4b0c.next = 0x5;
                    return this.m_character.PlayWinStart();
                  case 0x5:
                    return _0x3c4b0c.abrupt("break", 0xc);
                  case 0x6:
                    _0x3c4b0c.next = 0x8;
                    return this.m_character.PlayWinLoop();
                  case 0x8:
                    return _0x3c4b0c.abrupt("break", 0xc);
                  case 0x9:
                    _0x3c4b0c.next = 0xb;
                    return this.m_character.PlayWinEnd();
                  case 0xb:
                    return _0x3c4b0c.abrupt('break', 0xc);
                  case 0xc:
                  case 'end':
                    return _0x3c4b0c.stop();
                }
              }
            }, _0x3cb41c, this);
          }));
          return function (_0x3e6e56) {
            return _0x575749.apply(this, arguments);
          };
        }();
        _0x530d21.ShowFXReel = function (_0x5b6e8e, _0xae60a5) {
          var _0x61ab39 = this;
          if (_0xae60a5) {
            this.m_FXReel[_0x5b6e8e].node.getComponent(_0x523ca8).opacity = 0x1;
            this.m_FXReel[_0x5b6e8e].node.active = true;
            _0x32d2d6.PlayAnimation(this.m_FXReel[_0x5b6e8e].getComponent(_0x1971e0.Skeleton), 'Loop_Lock', true);
            _0x70e19b(this.m_FXReel[_0x5b6e8e].node.getComponent(_0x523ca8)).to(0.5, {
              'opacity': 0xff
            }).start();
          } else {
            this.m_FXReel[_0x5b6e8e].node.getComponent(_0x523ca8).opacity = 0xff;
            _0x70e19b(this.m_FXReel[_0x5b6e8e].node.getComponent(_0x523ca8)).to(0.5, {
              'opacity': 0x1
            }).call(function () {
              _0x61ab39.m_FXReel[_0x5b6e8e].node.active = false;
            }).start();
          }
        };
        _0x530d21.RemoveNotCoinSymbol = function () {
          var _0x28d5b9 = this.m_gameView.GetRoundInfo();
          for (var _0x53ba7d = 0x0; _0x53ba7d < _0x55e059.COL; _0x53ba7d++) {
            for (var _0x43d1a0 = 0x0; _0x43d1a0 < _0x55e059.ROW; _0x43d1a0++) {
              if (_0x28d5b9.Symbol[_0x53ba7d].Col[_0x43d1a0] < _0x55e059.Symbol.BONUS_COIN) {
                this.m_gameView.SlotReels.SetSymbolActive(_0x53ba7d, _0x43d1a0, true);
                this.m_gameView.SlotReels.EmptySymbolFadeIn(_0x53ba7d, _0x43d1a0);
                var _0x3a1b2b = this.m_curEftNodes[_0x53ba7d][_0x43d1a0];
                if (_0x3a1b2b) {
                  this.m_gameView.NodePools.ReturnEffectNode(_0x3a1b2b);
                  _0x3a1b2b.removeFromParent();
                  this.m_curEftNodes[_0x53ba7d][_0x43d1a0] = null;
                }
              }
            }
          }
        };
        _0x530d21.FadeOutAllFrame = function () {
          for (var _0x560e59 = 0x0; _0x560e59 < _0x55e059.COL * _0x55e059.ROW; _0x560e59++) {
            if (this.m_multiplierFrame[_0x560e59] && this.m_multiplierFrame[_0x560e59].node.active) {
              if (!this.m_multiplierFrame[_0x560e59].node.getComponent(_0x523ca8)) {
                this.m_multiplierFrame[_0x560e59].node.addComponent(_0x523ca8);
              }
              this.m_gameView.NodeFade(this.m_multiplierFrame[_0x560e59].node, false);
              this.m_multiplierFrame[_0x560e59].ClearTrack();
            }
          }
        };
        _0x530d21.CollectCoinsOnBoard = function () {
          var _0x2da534 = _0x9f23dc(_0x288614().mark(function _0x49fcbc() {
            var _0x716d1b;
            var _0x1527a7;
            var _0x544128;
            var _0x2c5fc0;
            var _0x4d08ab;
            var _0x45b23a;
            var _0x497ea2;
            var _0xc74a00 = this;
            return _0x288614().wrap(function (_0x561296) {
              for (;;) {
                switch (_0x561296.prev = _0x561296.next) {
                  case 0x0:
                    _0x716d1b = this.m_gameView.GetRoundInfo();
                    _0x1527a7 = 0x0;
                    _0x544128 = Array(_0x55e059.ROW).fill(false);
                    _0x2c5fc0 = false;
                    for (_0x4d08ab = 0x0; _0x4d08ab < _0x55e059.ROW; _0x4d08ab++) {
                      if (_0x716d1b.FinalSymbol[0x1].Col[_0x4d08ab] == _0x55e059.Symbol.ROYAL_BONUS_COIN) {
                        _0x1527a7 += 0x1;
                      }
                      if (this.CurEftNodes[0x1][_0x4d08ab] && this.CurEftNodes[0x1][_0x4d08ab].getComponent(_0x208c21)) {
                        _0x544128[_0x4d08ab] = true;
                      }
                    }
                    _0x45b23a = _0x288614().mark(function _0x2830d1(_0x49b488) {
                      var _0x262de1;
                      var _0x57d12d;
                      return _0x288614().wrap(function (_0x335f41) {
                        for (;;) {
                          switch (_0x335f41.prev = _0x335f41.next) {
                            case 0x0:
                              if (0x1 != _0x49b488) {
                                _0x335f41.next = 0x2;
                                break;
                              }
                              return _0x335f41.abrupt("return", "continue");
                            case 0x2:
                              if (_0x2c5fc0) {
                                _0x335f41.next = 0x6;
                                break;
                              }
                              _0x2c5fc0 = true;
                              _0x335f41.next = 0x6;
                              return _0x2516e0.Wait(_0xc74a00.m_gameView, 0.05);
                            case 0x6:
                              _0x262de1 = _0x288614().mark(function _0x5e92f7(_0xb699bf) {
                                var _0xdbc3d;
                                var _0x239185;
                                var _0x137870;
                                var _0x48b02b;
                                var _0x754532;
                                var _0x189c05;
                                var _0x4afb2e;
                                var _0x4f335a;
                                var _0x12e4f8;
                                var _0x574e9b;
                                var _0x168acf;
                                var _0x52f59a;
                                var _0xcabed5;
                                var _0xec6ff7;
                                var _0x543b08;
                                return _0x288614().wrap(function (_0xb0005b) {
                                  for (;;) {
                                    switch (_0xb0005b.prev = _0xb0005b.next) {
                                      case 0x0:
                                        if (!(_0xc74a00.m_gameView.EffectPlate.CurEftNodes[_0x49b488][_0xb699bf] && _0x716d1b.Symbol[_0x49b488].Col[_0xb699bf] >= _0x55e059.Symbol.BONUS_COIN)) {
                                          _0xb0005b.next = 0x2b;
                                          break;
                                        }
                                        _0xdbc3d = _0x716d1b.Mul[_0x49b488].Col[_0xb699bf] * _0x3f2a41.GetNowBetValue();
                                        _0x239185 = _0xc74a00.m_gameView.MultiplierNums[_0x49b488 * _0x55e059.ROW + _0xb699bf];
                                        if (_0x342605.Current() != _0x55e059.GameState.BG_COLLECT && _0x716d1b.PotList) {
                                          _0x716d1b.PotList.forEach(function (_0x472dd0) {
                                            if (_0x472dd0.Pos == _0x49b488 * _0x55e059.ROW + _0xb699bf) {
                                              _0xdbc3d = _0x472dd0.Mul * _0x3f2a41.GetNowBetValue();
                                            }
                                          });
                                        }
                                        if (!(_0x716d1b.FinalFrame && _0x716d1b.FinalFrame[_0x49b488].Col[_0xb699bf] > 0x1)) {
                                          _0xb0005b.next = 0xb;
                                          break;
                                        }
                                        _0x48b02b = function (_0x124c01) {
                                          if ('Hit' == _0x124c01) {
                                            _0x350c15.Play(_0x55e059.AudioClips.Multiplier_Win2, false);
                                            if (_0x716d1b.Symbol[_0x49b488].Col[_0xb699bf] >= _0x55e059.Symbol.BONUS_COIN) {
                                              _0xc74a00.CurEftNodes[_0x49b488][_0xb699bf].getComponent(_0x1695b4).SetMultiplierVisible(false);
                                              if (_0x716d1b.Symbol[_0x49b488].Col[_0xb699bf] == _0x55e059.Symbol.BONUS_COIN) {
                                                _0xc74a00.CurEftNodes[_0x49b488][_0xb699bf].getComponent(_0x1695b4).SetNumber(_0xdbc3d * _0x239185);
                                              } else {
                                                _0xc74a00.CurEftNodes[_0x49b488][_0xb699bf].getComponent(_0x1695b4).SetMultiplierVisible(true);
                                                _0xc74a00.CurEftNodes[_0x49b488][_0xb699bf].getComponent(_0x1695b4).SetMultiplierLabel(_0x239185);
                                              }
                                            }
                                          }
                                        };
                                        (_0x137870 = []).push(_0xc74a00.ShowMultipleFrameEnd(_0x49b488 * _0x55e059.ROW + _0xb699bf, _0x48b02b));
                                        if (_0x716d1b.Symbol[_0x49b488].Col[_0xb699bf] >= _0x55e059.Symbol.BONUS_COIN) {
                                          _0x137870.push(_0xc74a00.CurEftNodes[_0x49b488][_0xb699bf].getComponent(_0x1695b4).ShowMultiple(_0x716d1b.Symbol[_0x49b488].Col[_0xb699bf], _0xc74a00.m_gameView.GetJPIndex(_0x49b488, _0xb699bf)));
                                        }
                                        _0xb0005b.next = 0xb;
                                        return Promise.all(_0x137870);
                                      case 0xb:
                                        _0x754532 = 0x0;
                                        _0x189c05 = _0xc74a00.m_gameView.EffectPlate.CurEftNodes[_0x49b488][_0xb699bf].getWorldPosition();
                                        _0x4afb2e = 0x0;
                                      case 0xe:
                                        if (!(_0x4afb2e < _0x55e059.ROW)) {
                                          _0xb0005b.next = 0x2a;
                                          break;
                                        }
                                        if (!_0xc74a00.m_gameView.EffectPlate.CurEftNodes[0x1][_0x4afb2e] || _0x716d1b.Symbol[0x1].Col[_0x4afb2e] != _0x55e059.Symbol.ROYAL_BONUS_COIN) {
                                          _0xb0005b.next = 0x27;
                                          break;
                                        }
                                        _0x754532 += 0x1;
                                        _0x4f335a = _0xc74a00.m_gameView.EffectPlate.CurEftNodes[0x1][_0x4afb2e].getWorldPosition();
                                        if (_0x754532 == _0x1527a7) {
                                          _0xc74a00.m_gameView.SlotReels.SetSymbolActive(_0x49b488, _0xb699bf, false);
                                          _0xc74a00.m_gameView.EffectPlate.ShowSymbolChange(_0x49b488, _0xb699bf);
                                          _0xc74a00.m_gameView.NodePools.reutrnScatterNode(_0xc74a00.m_gameView.EffectPlate.CurEftNodes[_0x49b488][_0xb699bf]);
                                          _0xc74a00.m_gameView.EffectPlate.CurEftNodes[_0x49b488][_0xb699bf].removeFromParent();
                                          _0xc74a00.m_gameView.EffectPlate.CurEftNodes[_0x49b488][_0xb699bf] = null;
                                        }
                                        if (_0xc74a00.m_gameView.GetRoundInfo().Symbol[_0x49b488].Col[_0xb699bf] != _0x55e059.Symbol.BONUS_COIN_JP) {
                                          _0xb0005b.next = 0x23;
                                          break;
                                        }
                                        _0x12e4f8 = _0xc74a00.m_gameView.GetJPIndexByOdd(_0x1cac53.divide(_0xdbc3d, _0x3f2a41.GetNowBetValue()));
                                        _0x4f335a = _0xc74a00.m_gameView.SlotReels.GetSymbolPosition(0x1, 0x1, true);
                                        _0xc74a00.m_gameView.EffectPlate.ShowFly(_0x189c05, _0x4f335a, _0x55e059.FlyType.Normal, _0x716d1b.Symbol[_0x49b488].Col[_0xb699bf], _0x12e4f8, false, _0x49b488 > _0x55e059.MID_COL);
                                        _0x574e9b = function () {
                                          var _0x10764b = _0x9f23dc(_0x288614().mark(function _0x15ef28() {
                                            var _0x5c3a1f;
                                            return _0x288614().wrap(function (_0x44e71c) {
                                              for (;;) {
                                                switch (_0x44e71c.prev = _0x44e71c.next) {
                                                  case 0x0:
                                                    (_0x5c3a1f = _0xc74a00.m_JPWinCoinEffect).node.active = true;
                                                    _0x44e71c.next = 0x4;
                                                    return _0x32d2d6.PlayAnimation(_0x5c3a1f, "Win_JP");
                                                  case 0x4:
                                                    _0x5c3a1f.node.active = false;
                                                  case 0x5:
                                                  case "end":
                                                    return _0x44e71c.stop();
                                                }
                                              }
                                            }, _0x15ef28);
                                          }));
                                          return function () {
                                            return _0x10764b.apply(this, arguments);
                                          };
                                        }();
                                        _0x168acf = function () {
                                          var _0xde95ed = _0x9f23dc(_0x288614().mark(function _0x343a05() {
                                            var _0x527582;
                                            return _0x288614().wrap(function (_0xef7670) {
                                              for (;;) {
                                                switch (_0xef7670.prev = _0xef7670.next) {
                                                  case 0x0:
                                                    (_0x527582 = _0xc74a00.m_JPWinCoinEffectMult).node.active = true;
                                                    _0x350c15.Play(_0x55e059.AudioClips.Multiplier_Win, false);
                                                    _0xef7670.next = 0x5;
                                                    return _0x32d2d6.PlayAnimation(_0x527582, "Win_JP2");
                                                  case 0x5:
                                                    _0x527582.node.active = false;
                                                  case 0x6:
                                                  case "end":
                                                    return _0xef7670.stop();
                                                }
                                              }
                                            }, _0x343a05);
                                          }));
                                          return function () {
                                            return _0xde95ed.apply(this, arguments);
                                          };
                                        }();
                                        _0x350c15.Play(_0x55e059.AudioClips.BG_Jp_Coin, false);
                                        (_0x52f59a = _0xc74a00.m_gameView.JPWinAnim).node.active = true;
                                        _0x52f59a.SetNumber(_0xdbc3d);
                                        if (_0x239185 > 0x1) {
                                          _0x52f59a.SetMultiplierLabel(_0x239185);
                                          _0x52f59a.SetMultiplierVisible(true);
                                        } else {
                                          _0x52f59a.SetMultiplierVisible(false);
                                        }
                                        _0xb0005b.next = 0x20;
                                        return _0x52f59a.showWinJP(_0x55e059.Symbol.BONUS_COIN_JP, _0x12e4f8, _0x4afb2e, _0x239185, _0x574e9b, _0x168acf, _0xdbc3d);
                                      case 0x20:
                                        _0x52f59a.node.active = false;
                                        _0xb0005b.next = 0x25;
                                        break;
                                      case 0x23:
                                        _0xb0005b.next = 0x25;
                                        return _0xc74a00.m_gameView.EffectPlate.ShowFly(_0x189c05, _0x4f335a, _0x55e059.FlyType.Shrink, _0x716d1b.Symbol[_0x49b488].Col[_0xb699bf], _0xc74a00.m_gameView.GetJPIndexByOdd(_0x1cac53.divide(_0xdbc3d, _0x3f2a41.GetNowBetValue())), false, _0x49b488 > _0x55e059.MID_COL);
                                      case 0x25:
                                        _0x350c15.Play(_0x55e059.AudioClips.Coin_Collect, false);
                                        if (_0x544128[_0x4afb2e]) {
                                          (_0x543b08 = _0xc74a00.m_gameView.EffectPlate.CurEftNodes[0x1][_0x4afb2e].getComponent(_0x208c21)).SetNumber(_0x543b08.GetNumber() + _0xdbc3d * _0x239185);
                                          _0x543b08.ShowCollect();
                                        } else {
                                          (_0xcabed5 = _0xc74a00.m_gameView.NodePools.GetScatterNumNode()).setPosition(_0xc74a00.m_gameView.EffectPlate.CurEftNodes[0x1][_0x4afb2e].getPosition());
                                          _0xcabed5.setParent(_0xc74a00.m_gameView.EffectPlate.SymbolNumNodeContainer);
                                          _0x1cac53.SetZIndex(_0xcabed5, 0x1 * _0x55e059.ROW + _0x4afb2e);
                                          _0xec6ff7 = _0xc74a00.m_gameView.EffectPlate.CurEftNodes[0x1][_0x4afb2e];
                                          _0xc74a00.m_gameView.EffectPlate.CurEftNodes[0x1][_0x4afb2e] = _0xcabed5;
                                          _0x544128[_0x4afb2e] = true;
                                          _0xec6ff7.getComponent(_0x1695b4).ShowChange(_0x716d1b.Symbol[_0x49b488].Col[_0xb699bf], _0xc74a00.m_gameView.GetJPIndexByOdd(_0x1cac53.divide(_0xdbc3d, _0x3f2a41.GetNowBetValue())));
                                          _0xc74a00.m_gameView.EffectPlate.ShowSymbolChange(0x1, _0x4afb2e, _0xdbc3d * _0x239185);
                                          _0xc74a00.m_gameView.NodePools.reutrnScatterNode(_0xec6ff7);
                                        }
                                      case 0x27:
                                        _0x4afb2e++;
                                        _0xb0005b.next = 0xe;
                                        break;
                                      case 0x2a:
                                        if (_0x716d1b.FinalFrame && _0x716d1b.FinalFrame[_0x49b488].Col[_0xb699bf] > 0x1) {
                                          _0xc74a00.ShowMultipleFrameReset(_0x49b488 * _0x55e059.ROW + _0xb699bf);
                                        }
                                      case 0x2b:
                                      case "end":
                                        return _0xb0005b.stop();
                                    }
                                  }
                                }, _0x5e92f7);
                              });
                              _0x57d12d = 0x0;
                            case 0x8:
                              if (!(_0x57d12d < _0x55e059.ROW)) {
                                _0x335f41.next = 0xd;
                                break;
                              }
                              return _0x335f41.delegateYield(_0x262de1(_0x57d12d), 't0', 0xa);
                            case 0xa:
                              _0x57d12d++;
                              _0x335f41.next = 0x8;
                              break;
                            case 0xd:
                            case "end":
                              return _0x335f41.stop();
                          }
                        }
                      }, _0x2830d1);
                    });
                    _0x497ea2 = 0x0;
                  case 0x7:
                    if (!(_0x497ea2 < _0x55e059.COL)) {
                      _0x561296.next = 0xf;
                      break;
                    }
                    return _0x561296.delegateYield(_0x45b23a(_0x497ea2), 't0', 0x9);
                  case 0x9:
                    if ("continue" !== _0x561296.t0) {
                      _0x561296.next = 0xc;
                      break;
                    }
                    return _0x561296.abrupt("continue", 0xc);
                  case 0xc:
                    _0x497ea2++;
                    _0x561296.next = 0x7;
                    break;
                  case 0xf:
                    if (_0x342605.Current() != _0x55e059.GameState.MG_COLLECT) {
                      _0x561296.next = 0x12;
                      break;
                    }
                    _0x561296.next = 0x12;
                    return _0x2516e0.Wait(this.m_gameView, 0.5);
                  case 0x12:
                  case "end":
                    return _0x561296.stop();
                }
              }
            }, _0x49fcbc, this);
          }));
          return function () {
            return _0x2da534.apply(this, arguments);
          };
        }();
        _0x530d21.ShowAddMultiplier = function () {
          var _0x4e9eaf = _0x9f23dc(_0x288614().mark(function _0xaf5e5b(_0x20bc24) {
            var _0x5cb455;
            var _0x3d109b;
            var _0x468cff;
            var _0x463cf0;
            var _0x39cf93 = this;
            return _0x288614().wrap(function (_0x3a0427) {
              for (;;) {
                switch (_0x3a0427.prev = _0x3a0427.next) {
                  case 0x0:
                    this.m_multiplierFly.node.active = true;
                    _0x5cb455 = this.m_multiplierFrame[_0x20bc24].node.getWorldPosition();
                    _0x3d109b = function (_0x4d28f7) {
                      if ('Hit' == _0x4d28f7) {
                        _0x350c15.Play(_0x55e059.AudioClips.Multiplier_FireHit, false);
                        _0x39cf93.ShowMultipleFrame(_0x20bc24);
                      }
                    };
                    _0x468cff = !this.m_gameView.IsLandscape && _0x20bc24 / 0x3 < 0x1;
                    _0x350c15.Play(_0x55e059.AudioClips.Multiplier_Fire, false);
                    _0x463cf0 = 0x2 == this.m_gameView.MultiplierNums[_0x20bc24] ? 0x2 : 0x1;
                    _0x3a0427.next = 0x8;
                    return this.m_multiplierFly.MultipleFly(this.m_multiplierFlyStart.getWorldPosition(), _0x5cb455, _0x3d109b, _0x468cff, _0x463cf0);
                  case 0x8:
                  case "end":
                    return _0x3a0427.stop();
                }
              }
            }, _0xaf5e5b, this);
          }));
          return function (_0xc3274c) {
            return _0x4e9eaf.apply(this, arguments);
          };
        }();
        _0x530d21.ShowMultipleFrame = function () {
          var _0x41a68f = _0x9f23dc(_0x288614().mark(function _0x16272f(_0x4cdfb1) {
            var _0x5ce924;
            var _0xab2060 = this;
            return _0x288614().wrap(function (_0x3662b4) {
              for (;;) {
                switch (_0x3662b4.prev = _0x3662b4.next) {
                  case 0x0:
                    this.m_multiplierFrame[_0x4cdfb1].node.active = true;
                    _0x5ce924 = function (_0x1ff0e8) {
                      if ('Hit' == _0x1ff0e8) {
                        _0xab2060.m_multiplierFrame[_0x4cdfb1].SetMultipleFrameLabelActive(true);
                        _0xab2060.m_multiplierFrame[_0x4cdfb1].SetMultipleFrameLabel(_0xab2060.m_gameView.MultiplierNums[_0x4cdfb1]);
                      }
                    };
                    if (!(this.m_gameView.MultiplierNums[_0x4cdfb1] <= 0x1)) {
                      _0x3662b4.next = 0x4;
                      break;
                    }
                    return _0x3662b4.abrupt('return');
                  case 0x4:
                    if (0x2 != this.m_gameView.MultiplierNums[_0x4cdfb1]) {
                      _0x3662b4.next = 0xa;
                      break;
                    }
                    this.m_multiplierFrame[_0x4cdfb1].SetMultipleFrameLabelActive(true);
                    _0x3662b4.next = 0x8;
                    return this.m_multiplierFrame[_0x4cdfb1].PlayMultipleFrameStart(_0x5ce924);
                  case 0x8:
                    _0x3662b4.next = 0xc;
                    break;
                  case 0xa:
                    _0x3662b4.next = 0xc;
                    return this.m_multiplierFrame[_0x4cdfb1].PlayMultipleFrameUp(_0x5ce924);
                  case 0xc:
                    this.m_multiplierFrame[_0x4cdfb1].PlayMultipleFrameLoop();
                  case 0xd:
                  case "end":
                    return _0x3662b4.stop();
                }
              }
            }, _0x16272f, this);
          }));
          return function (_0x5e2530) {
            return _0x41a68f.apply(this, arguments);
          };
        }();
        _0x530d21.ShowMultipleFrameEnd = function () {
          var _0x30fc94 = _0x9f23dc(_0x288614().mark(function _0x1c8cc3(_0x2c67e8, _0x3bfcea) {
            return _0x288614().wrap(function (_0x10c0a8) {
              for (;;) {
                switch (_0x10c0a8.prev = _0x10c0a8.next) {
                  case 0x0:
                    _0x1cac53.SetZIndex(this.m_multiplierFrame[_0x2c67e8].node, 0x3e8);
                    _0x350c15.Play(_0x55e059.AudioClips.Multiplier_Win, false);
                    _0x10c0a8.next = 0x4;
                    return this.m_multiplierFrame[_0x2c67e8].PlayMultipleFrameEnd(_0x3bfcea);
                  case 0x4:
                    this.m_multiplierFrame[_0x2c67e8].PlayMultipleFrameLoop2();
                    _0x1cac53.SetZIndex(this.m_multiplierFrame[_0x2c67e8].node, _0x2c67e8);
                  case 0x6:
                  case "end":
                    return _0x10c0a8.stop();
                }
              }
            }, _0x1c8cc3, this);
          }));
          return function (_0x35aea4, _0x48dcbd) {
            return _0x30fc94.apply(this, arguments);
          };
        }();
        _0x530d21.ShowMultipleFrameReset = function () {
          var _0x57c8a2 = _0x9f23dc(_0x288614().mark(function _0x92e3b6(_0x50439e) {
            return _0x288614().wrap(function (_0x39e077) {
              for (;;) {
                switch (_0x39e077.prev = _0x39e077.next) {
                  case 0x0:
                    _0x39e077.next = 0x2;
                    return this.m_multiplierFrame[_0x50439e].PlayMultipleFrameReset();
                  case 0x2:
                    this.m_multiplierFrame[_0x50439e].PlayMultipleFrameLoop();
                  case 0x3:
                  case "end":
                    return _0x39e077.stop();
                }
              }
            }, _0x92e3b6, this);
          }));
          return function (_0x87823a) {
            return _0x57c8a2.apply(this, arguments);
          };
        }();
        _0x530d21.InitialMultiplierFrame = function () {
          for (var _0x4abc54 = 0x0; _0x4abc54 < this.m_multiplierFrame.length; _0x4abc54++) {
            if (this.m_multiplierFrame[_0x4abc54]) {
              this.m_multiplierFrame[_0x4abc54].node.active = false;
            }
          }
        };
        _0x530d21.ShowMultipleOmenStart = function () {
          var _0x5f3285 = _0x9f23dc(_0x288614().mark(function _0x28126a() {
            return _0x288614().wrap(function (_0x4dbb2a) {
              for (;;) {
                switch (_0x4dbb2a.prev = _0x4dbb2a.next) {
                  case 0x0:
                    _0x350c15.Play(_0x55e059.AudioClips.MultipleOmen_Start, false);
                    this.m_multipleOmen.node.getParent().active = true;
                    this.m_multipleOmen.node.active = true;
                    this.m_gameView.IsLockRotation = true;
                    this.m_multipleOmen.setMix("MultipleOmen_Start_S", "MultipleOmen_Loop_S", 0.2);
                    this.m_multipleOmen.setMix("MultipleOmen_Start_L", "MultipleOmen_Loop_L", 0.2);
                    if (!this.m_gameView.IsLandscape) {
                      _0x4dbb2a.next = 0xc;
                      break;
                    }
                    _0x4dbb2a.next = 0x9;
                    return _0x32d2d6.PlayAnimation(this.m_multipleOmen, "MultipleOmen_Start_L", false);
                  case 0x9:
                    _0x32d2d6.PlayAnimation(this.m_multipleOmen, 'MultipleOmen_Loop_L', true);
                    _0x4dbb2a.next = 0xf;
                    break;
                  case 0xc:
                    _0x4dbb2a.next = 0xe;
                    return _0x32d2d6.PlayAnimation(this.m_multipleOmen, "MultipleOmen_Start_S", false);
                  case 0xe:
                    _0x32d2d6.PlayAnimation(this.m_multipleOmen, "MultipleOmen_Loop_S", true);
                  case 0xf:
                  case 'end':
                    return _0x4dbb2a.stop();
                }
              }
            }, _0x28126a, this);
          }));
          return function () {
            return _0x5f3285.apply(this, arguments);
          };
        }();
        _0x530d21.ShowMultipleOmenEnd = function () {
          var _0x339a58 = _0x9f23dc(_0x288614().mark(function _0x4e7871() {
            return _0x288614().wrap(function (_0x5a3d15) {
              for (;;) {
                switch (_0x5a3d15.prev = _0x5a3d15.next) {
                  case 0x0:
                    if (!this.m_gameView.IsLandscape) {
                      _0x5a3d15.next = 0x5;
                      break;
                    }
                    _0x5a3d15.next = 0x3;
                    return _0x32d2d6.PlayAnimation(this.m_multipleOmen, "MultipleOmen_End_L", false);
                  case 0x3:
                    _0x5a3d15.next = 0x7;
                    break;
                  case 0x5:
                    _0x5a3d15.next = 0x7;
                    return _0x32d2d6.PlayAnimation(this.m_multipleOmen, "MultipleOmen_End_S", false);
                  case 0x7:
                    this.m_multipleOmen.node.active = false;
                    this.m_gameView.IsLockRotation = false;
                  case 0x9:
                  case "end":
                    return _0x5a3d15.stop();
                }
              }
            }, _0x4e7871, this);
          }));
          return function () {
            return _0x339a58.apply(this, arguments);
          };
        }();
        _0x530d21.CloseSymbolEffectForBigWin = function () {
          for (var _0x3256f6 = 0x0; _0x3256f6 < _0x55e059.COL; _0x3256f6++) {
            for (var _0x23920e = 0x0; _0x23920e < _0x55e059.ROW; _0x23920e++) {
              this.m_isCloseWhenBigWin.push(false);
              var _0x1c82c7 = this.m_curEftNodes[_0x3256f6][_0x23920e];
              if (_0x1c82c7 && (_0x1c82c7.getComponent(_0x1695b4) || _0x1c82c7.getComponent(_0x42f899))) {
                _0x1c82c7.active = false;
                this.m_gameView.SlotReels.SetSymbolActive(_0x3256f6, _0x23920e, true);
                this.m_isCloseWhenBigWin[_0x3256f6 * _0x55e059.ROW + _0x23920e] = true;
              }
            }
          }
        };
        _0x530d21.ReopenSymbolEffectAfterBigWin = function () {
          for (var _0x33b3f6 = 0x0; _0x33b3f6 < _0x55e059.COL; _0x33b3f6++) {
            for (var _0x26000c = 0x0; _0x26000c < _0x55e059.ROW; _0x26000c++) {
              if (this.m_isCloseWhenBigWin[_0x33b3f6 * _0x55e059.ROW + _0x26000c]) {
                var _0x5d2cae = this.m_curEftNodes[_0x33b3f6][_0x26000c];
                if (_0x5d2cae) {
                  _0x5d2cae.active = true;
                  this.m_gameView.SlotReels.SetSymbolActive(_0x33b3f6, _0x26000c, false);
                }
              }
            }
          }
          this.m_isCloseWhenBigWin = [];
        };
        _0x530d21.BGSpinEffect = function () {
          var _0x6514a0 = _0x9f23dc(_0x288614().mark(function _0x17e0f2() {
            var _0x2ffda4;
            var _0x4ceee7;
            var _0xb07c0b;
            var _0x20a548;
            var _0x1bf02a;
            var _0x34527e;
            var _0x1ca75b;
            return _0x288614().wrap(function (_0x110055) {
              for (;;) {
                switch (_0x110055.prev = _0x110055.next) {
                  case 0x0:
                    _0x2ffda4 = [];
                    _0x4ceee7 = [];
                    _0xb07c0b = [];
                    for (_0x20a548 = 0x0; _0x20a548 < this.m_FXReel.length; _0x20a548++) {
                      if (!this.m_FXReel[_0x20a548].node.active) {
                        _0x4ceee7.push(_0x20a548);
                        this.m_FXReel[_0x20a548].node.active = true;
                      }
                      _0x2ffda4.push(_0x32d2d6.PlayAnimation(this.m_FXReel[_0x20a548], "FG_Spin", false, 0x1));
                    }
                    _0x1bf02a = 0x0;
                  case 0x5:
                    if (!(_0x1bf02a < this.m_multiplierFrame.length)) {
                      _0x110055.next = 0xd;
                      break;
                    }
                    if (this.m_multiplierFrame[_0x1bf02a]) {
                      _0x110055.next = 0x8;
                      break;
                    }
                    return _0x110055.abrupt("continue", 0xa);
                  case 0x8:
                    if (!this.m_multiplierFrame[_0x1bf02a].node.active) {
                      _0xb07c0b.push(_0x1bf02a);
                      this.m_multiplierFrame[_0x1bf02a].node.active = true;
                    }
                    _0x2ffda4.push(this.m_multiplierFrame[_0x1bf02a].PlayMultipleFrameSpin());
                  case 0xa:
                    _0x1bf02a++;
                    _0x110055.next = 0x5;
                    break;
                  case 0xd:
                    _0x110055.next = 0xf;
                    return Promise.all(_0x2ffda4);
                  case 0xf:
                    for (_0x34527e = 0x0; _0x34527e < _0x4ceee7.length; _0x34527e++) {
                      if (this.m_gameView.GetRoundInfo().FinalSymbol[0x1].Col[_0x4ceee7[_0x34527e]] != _0x55e059.Symbol.ROYAL_BONUS_COIN) {
                        this.m_FXReel[_0x4ceee7[_0x34527e]].node.active = false;
                      }
                    }
                    for (_0x1ca75b = 0x0; _0x1ca75b < _0xb07c0b.length; _0x1ca75b++) {
                      this.m_multiplierFrame[_0xb07c0b[_0x1ca75b]].node.active = false;
                    }
                  case 0x11:
                  case "end":
                    return _0x110055.stop();
                }
              }
            }, _0x17e0f2, this);
          }));
          return function () {
            return _0x6514a0.apply(this, arguments);
          };
        }();
        _0xef4a8(_0x526f93, [{
          'key': 'FlyDestination',
          'get': function () {
            return this.m_flyDestination;
          }
        }, {
          'key': 'TotalWinAnim',
          'get': function () {
            return this.m_totalWinAnim;
          }
        }, {
          'key': "TotalLabel",
          'get': function () {
            return this.m_totalLabel;
          }
        }, {
          'key': 'ComplimentLabel',
          'get': function () {
            return this.m_complimentLabel;
          }
        }, {
          'key': 'Character',
          'get': function () {
            return this.m_character;
          }
        }, {
          'key': 'JokerCharacter',
          'get': function () {
            return this.m_jokerCharacter;
          }
        }, {
          'key': 'MultiplierFlyStart',
          'get': function () {
            return this.m_multiplierFlyStart;
          }
        }, {
          'key': "MultipleOmen",
          'get': function () {
            return this.m_multipleOmen;
          }
        }, {
          'key': "CurEftNodes",
          'get': function () {
            return this.m_curEftNodes;
          },
          'set': function (_0x12cbd4) {
            this.m_curEftNodes = _0x12cbd4;
          }
        }, {
          'key': "SymbolNumNodeContainer",
          'get': function () {
            return this.m_symbolNumNodeContainer;
          }
        }, {
          'key': 'SymbolNodeContainer',
          'get': function () {
            return this.m_symbolNodeContainer;
          }
        }, {
          'key': "IsLastFly",
          'get': function () {
            return this.m_islastfly;
          },
          'set': function (_0x2429ff) {
            this.m_islastfly = _0x2429ff;
          }
        }, {
          'key': 'FlyDestinationWordlPos',
          'get': function () {
            return this.m_flyDestinationWorldPos;
          }
        }, {
          'key': 'IsHardstopAudio',
          'get': function () {
            return this.m_isHardstopAudio;
          },
          'set': function (_0xfc4069) {
            this.m_isHardstopAudio = _0xfc4069;
          }
        }, {
          'key': "MultiplierFly",
          'get': function () {
            return this.m_multiplierFly;
          }
        }, {
          'key': "RoyalIsStop",
          'get': function () {
            return this.m_royalIsStop;
          },
          'set': function (_0x1c3e1a) {
            this.m_royalIsStop = _0x1c3e1a;
          }
        }, {
          'key': 'IsLoopStop',
          'get': function () {
            return this.m_isLoopStop;
          },
          'set': function (_0x446fe1) {
            this.m_isLoopStop = _0x446fe1;
          }
        }, {
          'key': "IsCurNearWin",
          'get': function () {
            return this.m_isCurNearWin;
          },
          'set': function (_0x4ebdbf) {
            this.m_isCurNearWin = _0x4ebdbf;
          }
        }]);
        return _0x526f93;
      }(_0xead8bf);
      _0x43e83d = _0x2f48b7(_0x4b36e8.prototype, "m_flyDestination", [_0x3f63d8], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2b8e67 = _0x2f48b7(_0x4b36e8.prototype, "m_FXFeature", [_0x3ac886], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x12ceb8 = _0x2f48b7(_0x4b36e8.prototype, "m_nearwinNode", [_0x1ec022], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x43c6bb = _0x2f48b7(_0x4b36e8.prototype, "m_counterNode", [_0x5cbe2e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x44ddb3 = _0x2f48b7(_0x4b36e8.prototype, "m_totalWinAnim", [_0x925e3f], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1f1392 = _0x2f48b7(_0x4b36e8.prototype, "m_totalLabel", [_0x1da3c8], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x171a44 = _0x2f48b7(_0x4b36e8.prototype, "m_complimentAnim", [_0x199779], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x6065fa = _0x2f48b7(_0x4b36e8.prototype, "m_complimentLabel", [_0x5c26eb], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3d4dd7 = _0x2f48b7(_0x4b36e8.prototype, "m_character", [_0xdd6b33], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3cf17c = _0x2f48b7(_0x4b36e8.prototype, "m_FXReel", [_0x3f0bca], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x39ffb2 = _0x2f48b7(_0x4b36e8.prototype, "m_multiplierFrame", [_0x28d796], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x1974bc = _0x2f48b7(_0x4b36e8.prototype, 'm_multiplierFlyPrefab', [_0x1cd347], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2c1514 = _0x2f48b7(_0x4b36e8.prototype, "m_jokerCharacter", [_0x2f25f7], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x130297 = _0x2f48b7(_0x4b36e8.prototype, 'm_multiplierFlyStart', [_0x415fcc], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1c0320 = _0x2f48b7(_0x4b36e8.prototype, "m_multipleOmen", [_0xcb73a2], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x303ce9 = _0x2f48b7(_0x4b36e8.prototype, 'm_JPPanelAnim', [_0xd5bb4b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x197014 = _0x2f48b7(_0x4b36e8.prototype, "m_JPWinCoinEffect", [_0x21aff8], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x43d26f = _0x2f48b7(_0x4b36e8.prototype, "m_JPWinCoinEffectMult", [_0x2b7435], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x482e56;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "9621bx2lvZHFaeHM2vChtyz", "AddBonusState", undefined);
      var _0x2f7a0b = _0x5d1a01.ccclass;
      _0x482e56 = _0x2f7a0b('AddBonusState');
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "4b71897/HdBorZDooSe88ix", 'AwardState', undefined);
      var _0x4f0077;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "bcf030OAsVJHqYwprmYzju9", "BGCollectState", undefined);
      var _0x11a049 = _0x5d1a01.ccclass;
      _0x4f0077 = _0x11a049("BGCollectState");
      var _0x2055a6;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "2f62fqXfElGBan2/3Ypkvya", "BigAwardEffectState", undefined);
      var _0xc74360 = _0x5d1a01.ccclass;
      _0x2055a6 = _0xc74360("BigAwardEffectState");
      var _0x3e954a;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "e8521WUHxNBpI367ccReJVV", 'CheckMaxFlagState', undefined);
      var _0x2f7253 = _0x5d1a01.ccclass;
      _0x3e954a = _0x2f7253("CheckMaxFlagState");
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "d7d8fqaYE9D9JAra/WwWKgq", "CheckState", undefined);
      var _0x1ed6df;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, 'a526dCwQaVAT4PKT2ubxho3', "EnterBonusState", undefined);
      var _0x5a1efe = _0x5d1a01.ccclass;
      _0x1ed6df = _0x5a1efe('EnterBonusState');
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "3e322Zg/15IgaW08e0Y6rD5", "FeatureShowState", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "1f34aXQ97pIircyjVweKvmp", "IdleState", undefined);
      var _0x1571ea;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "85ec93WAZBJw6QXCgbMQC7l", 'LeaveBonusState', undefined);
      var _0x4421ca = _0x5d1a01.ccclass;
      _0x1571ea = _0x4421ca('LeaveBonusState');
      var _0x4f7961;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "60c0e9Zw6tGT7eD/+5ciaI1", "MGCollectState", undefined);
      var _0xdef185 = _0x5d1a01.ccclass;
      _0x4f7961 = _0xdef185("MGCollectState");
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "0181e1hYhtOp6bTGF3W4dFm", "PlateShowState", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "5369dby1DhNdI0IAcuZXe4z", "RoundEndState", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, 'ee3d34KNrtLqYun6PqRLF5e', "RoundShowEndState", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "92f12EH7DBCDr60HRj6R7fs", "SpinState", undefined);
      var _0xfd70c3;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "e0e69iwpzlIqqmhS/zyk46J", "UnshowPrepareState", undefined);
      var _0x3f56f6 = _0x5d1a01.ccclass;
      _0xfd70c3 = _0x3f56f6("UnshowPrepareState");
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, 'e7a7f3qnGxPwpvUFfU5H+ZR', "WaitReadyState", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "24eaasgw4VJGpr7e5XTEUL+", "WaitResState", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "f34139liEtOX7eeljN8Cz8w", "index", undefined);
      _0x3db04a._RF.pop(); /**
                           * @license
                           * Copyright 2009 The Closure Library Authors
                           * Copyright 2020 Daniel Wirtz / The long.js Authors.
                           *
                           * Licensed under the Apache License, Version 2.0 (the "License");
                           * you may not use this file except in compliance with the License.
                           * You may obtain a copy of the License at
                           *
                           *     http://www.apache.org/licenses/LICENSE-2.0
                           *
                           * Unless required by applicable law or agreed to in writing, software
                           * distributed under the License is distributed on an "AS IS" BASIS,
                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                           * See the License for the specific language governing permissions and
                           * limitations under the License.
                           *
                           * SPDX-License-Identifier: Apache-2.0
                           */
      var _0x305b5c = null;
      try {
        _0x305b5c = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0x0, 0x61, 0x73, 0x6d, 0x1, 0x0, 0x0, 0x0, 0x1, 0xd, 0x2, 0x60, 0x0, 0x1, 0x7f, 0x60, 0x4, 0x7f, 0x7f, 0x7f, 0x7f, 0x1, 0x7f, 0x3, 0x7, 0x6, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x6, 0x6, 0x1, 0x7f, 0x1, 0x41, 0x0, 0xb, 0x7, 0x32, 0x6, 0x3, 0x6d, 0x75, 0x6c, 0x0, 0x1, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x73, 0x0, 0x2, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x75, 0x0, 0x3, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x73, 0x0, 0x4, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x75, 0x0, 0x5, 0x8, 0x67, 0x65, 0x74, 0x5f, 0x68, 0x69, 0x67, 0x68, 0x0, 0x0, 0xa, 0xbf, 0x1, 0x6, 0x4, 0x0, 0x23, 0x0, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7e, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7f, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x80, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x81, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x82, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb])), {}).exports;
      } catch (_0x45737c) {}
      function _0x59e8bc(_0x5014b6, _0x2f5d87, _0x5c6792) {
        this.low = 0x0 | _0x5014b6;
        this.high = 0x0 | _0x2f5d87;
        this.unsigned = !!_0x5c6792;
      }
      function _0x123031(_0x2eb04e) {
        return true === (_0x2eb04e && _0x2eb04e.__isLong__);
      }
      function _0x4cdf89(_0x36939a) {
        var _0x5c7303 = Math.clz32(_0x36939a & -_0x36939a);
        return _0x36939a ? 0x1f - _0x5c7303 : _0x5c7303;
      }
      _0x59e8bc.prototype.__isLong__;
      Object.defineProperty(_0x59e8bc.prototype, "__isLong__", {
        'value': true
      });
      _0x59e8bc.isLong = _0x123031;
      var _0x477022 = {};
      var _0x430d68 = {};
      function _0x4126e7(_0x4f70aa, _0x233654) {
        var _0x3ef521;
        var _0x6f5ec2;
        var _0x4c047d;
        return _0x233654 ? (_0x4c047d = 0x0 <= (_0x4f70aa >>>= 0x0) && _0x4f70aa < 0x100) && (_0x6f5ec2 = _0x430d68[_0x4f70aa]) ? _0x6f5ec2 : (_0x3ef521 = new _0x59e8bc(_0x4f70aa, 0x0, true), _0x4c047d && (_0x430d68[_0x4f70aa] = _0x3ef521), _0x3ef521) : (_0x4c047d = -0x80 <= (_0x4f70aa |= 0x0) && _0x4f70aa < 0x80) && (_0x6f5ec2 = _0x477022[_0x4f70aa]) ? _0x6f5ec2 : (_0x3ef521 = new _0x59e8bc(_0x4f70aa, _0x4f70aa < 0x0 ? -0x1 : 0x0, false), _0x4c047d && (_0x477022[_0x4f70aa] = _0x3ef521), _0x3ef521);
      }
      function _0x12535d(_0xad60ff, _0x310405) {
        if (isNaN(_0xad60ff)) {
          return _0x310405 ? _0x30d038 : _0x1c4961;
        }
        if (_0x310405) {
          if (_0xad60ff < 0x0) {
            return _0x30d038;
          }
          if (_0xad60ff >= 18446744073709552000) {
            return _0x2cff9a;
          }
        } else {
          if (_0xad60ff <= -9223372036854776000) {
            return _0x28f776;
          }
          if (_0xad60ff + 0x1 >= 9223372036854776000) {
            return _0xffcc3f;
          }
        }
        return _0xad60ff < 0x0 ? _0x12535d(-_0xad60ff, _0x310405).neg() : new _0x59e8bc(_0xad60ff % 4294967296 | 0x0, _0xad60ff / 4294967296 | 0x0, _0x310405);
      }
      function _0x31946c(_0x22cdc0, _0x3f26cd, _0x48a440) {
        return new _0x59e8bc(_0x22cdc0, _0x3f26cd, _0x48a440);
      }
      _0x59e8bc.fromInt = _0x4126e7;
      _0x59e8bc.fromNumber = _0x12535d;
      _0x59e8bc.fromBits = _0x31946c;
      var _0x3c5863 = Math.pow;
      function _0x41e22a(_0x2ff4e8, _0x34dced, _0x11233b) {
        if (0x0 === _0x2ff4e8.length) {
          throw Error("empty string");
        }
        if ('number' == typeof _0x34dced) {
          _0x11233b = _0x34dced;
          _0x34dced = false;
        } else {
          _0x34dced = !!_0x34dced;
        }
        if ("NaN" === _0x2ff4e8 || "Infinity" === _0x2ff4e8 || "+Infinity" === _0x2ff4e8 || '-Infinity' === _0x2ff4e8) {
          return _0x34dced ? _0x30d038 : _0x1c4961;
        }
        if ((_0x11233b = _0x11233b || 0xa) < 0x2 || 0x24 < _0x11233b) {
          throw RangeError("radix");
        }
        var _0x446f3e;
        if ((_0x446f3e = _0x2ff4e8.indexOf('-')) > 0x0) {
          throw Error("interior hyphen");
        }
        if (0x0 === _0x446f3e) {
          return _0x41e22a(_0x2ff4e8.substring(0x1), _0x34dced, _0x11233b).neg();
        }
        var _0x4a3bed = _0x12535d(_0x3c5863(_0x11233b, 0x8));
        var _0x1b9265 = _0x1c4961;
        for (var _0x1a4c40 = 0x0; _0x1a4c40 < _0x2ff4e8.length; _0x1a4c40 += 0x8) {
          var _0x286ad6 = Math.min(0x8, _0x2ff4e8.length - _0x1a4c40);
          var _0x1496e1 = parseInt(_0x2ff4e8.substring(_0x1a4c40, _0x1a4c40 + _0x286ad6), _0x11233b);
          if (_0x286ad6 < 0x8) {
            var _0x39ba6e = _0x12535d(_0x3c5863(_0x11233b, _0x286ad6));
            _0x1b9265 = _0x1b9265.mul(_0x39ba6e).add(_0x12535d(_0x1496e1));
          } else {
            _0x1b9265 = (_0x1b9265 = _0x1b9265.mul(_0x4a3bed)).add(_0x12535d(_0x1496e1));
          }
        }
        _0x1b9265.unsigned = _0x34dced;
        return _0x1b9265;
      }
      function _0xed962c(_0x4beb87, _0x2338f7) {
        return 'number' == typeof _0x4beb87 ? _0x12535d(_0x4beb87, _0x2338f7) : "string" == typeof _0x4beb87 ? _0x41e22a(_0x4beb87, _0x2338f7) : new _0x59e8bc(_0x4beb87.low, _0x4beb87.high, 'boolean' == typeof _0x2338f7 ? _0x2338f7 : _0x4beb87.unsigned);
      }
      _0x59e8bc.fromString = _0x41e22a;
      _0x59e8bc.fromValue = _0xed962c;
      var _0x390b2b = _0x4126e7(16777216);
      var _0x1c4961 = _0x4126e7(0x0);
      _0x59e8bc.ZERO = _0x1c4961;
      var _0x30d038 = _0x4126e7(0x0, true);
      _0x59e8bc.UZERO = _0x30d038;
      var _0xcc3467 = _0x4126e7(0x1);
      _0x59e8bc.ONE = _0xcc3467;
      var _0x46e151 = _0x4126e7(0x1, true);
      _0x59e8bc.UONE = _0x46e151;
      var _0x1c301f = _0x4126e7(-0x1);
      _0x59e8bc.NEG_ONE = _0x1c301f;
      var _0xffcc3f = new _0x59e8bc(-0x1, 0x7fffffff, false);
      _0x59e8bc.MAX_VALUE = _0xffcc3f;
      var _0x2cff9a = new _0x59e8bc(-0x1, -0x1, true);
      _0x59e8bc.MAX_UNSIGNED_VALUE = _0x2cff9a;
      var _0x28f776 = new _0x59e8bc(0x0, -0x80000000, false);
      _0x59e8bc.MIN_VALUE = _0x28f776;
      var _0x16afb1 = _0x59e8bc.prototype;
      _0x16afb1.toInt = function () {
        return this.unsigned ? this.low >>> 0x0 : this.low;
      };
      _0x16afb1.toNumber = function () {
        return this.unsigned ? (this.high >>> 0x0) * 4294967296 + (this.low >>> 0x0) : this.high * 4294967296 + (this.low >>> 0x0);
      };
      _0x16afb1.toString = function (_0x32d58c) {
        if ((_0x32d58c = _0x32d58c || 0xa) < 0x2 || 0x24 < _0x32d58c) {
          throw RangeError('radix');
        }
        if (this.isZero()) {
          return '0';
        }
        if (this.isNegative()) {
          if (this.eq(_0x28f776)) {
            var _0x43c3f3 = _0x12535d(_0x32d58c);
            var _0x1644aa = this.div(_0x43c3f3);
            var _0x403334 = _0x1644aa.mul(_0x43c3f3).sub(this);
            return _0x1644aa.toString(_0x32d58c) + _0x403334.toInt().toString(_0x32d58c);
          }
          return '-' + this.neg().toString(_0x32d58c);
        }
        var _0xa12498 = _0x12535d(_0x3c5863(_0x32d58c, 0x6), this.unsigned);
        var _0x209b30 = this;
        for (var _0x60b229 = '';;) {
          var _0x3373bd = _0x209b30.div(_0xa12498);
          var _0x10a2e5 = (_0x209b30.sub(_0x3373bd.mul(_0xa12498)).toInt() >>> 0x0).toString(_0x32d58c);
          if ((_0x209b30 = _0x3373bd).isZero()) {
            return _0x10a2e5 + _0x60b229;
          }
          for (; _0x10a2e5.length < 0x6;) {
            _0x10a2e5 = '0' + _0x10a2e5;
          }
          _0x60b229 = '' + _0x10a2e5 + _0x60b229;
        }
      };
      _0x16afb1.getHighBits = function () {
        return this.high;
      };
      _0x16afb1.getHighBitsUnsigned = function () {
        return this.high >>> 0x0;
      };
      _0x16afb1.getLowBits = function () {
        return this.low;
      };
      _0x16afb1.getLowBitsUnsigned = function () {
        return this.low >>> 0x0;
      };
      _0x16afb1.getNumBitsAbs = function () {
        if (this.isNegative()) {
          return this.eq(_0x28f776) ? 0x40 : this.neg().getNumBitsAbs();
        }
        var _0x3a7f00 = 0x0 != this.high ? this.high : this.low;
        for (var _0x41a59b = 0x1f; _0x41a59b > 0x0 && 0x0 == (_0x3a7f00 & 0x1 << _0x41a59b); _0x41a59b--) {
          ;
        }
        return 0x0 != this.high ? _0x41a59b + 0x21 : _0x41a59b + 0x1;
      };
      _0x16afb1.isZero = function () {
        return 0x0 === this.high && 0x0 === this.low;
      };
      _0x16afb1.eqz = _0x16afb1.isZero;
      _0x16afb1.isNegative = function () {
        return !this.unsigned && this.high < 0x0;
      };
      _0x16afb1.isPositive = function () {
        return this.unsigned || this.high >= 0x0;
      };
      _0x16afb1.isOdd = function () {
        return 0x1 == (0x1 & this.low);
      };
      _0x16afb1.isEven = function () {
        return 0x0 == (0x1 & this.low);
      };
      _0x16afb1.equals = function (_0x136914) {
        if (!(true === (_0x136914 && _0x136914.__isLong__))) {
          _0x136914 = 'number' == typeof _0x136914 ? _0x12535d(_0x136914, undefined) : "string" == typeof _0x136914 ? _0x41e22a(_0x136914, undefined) : new _0x59e8bc(_0x136914.low, _0x136914.high, _0x136914.unsigned);
        }
        return (this.unsigned === _0x136914.unsigned || this.high >>> 0x1f != 0x1 || _0x136914.high >>> 0x1f != 0x1) && this.high === _0x136914.high && this.low === _0x136914.low;
      };
      _0x16afb1.eq = _0x16afb1.equals;
      _0x16afb1.notEquals = function (_0x527047) {
        return !this.eq(_0x527047);
      };
      _0x16afb1.neq = _0x16afb1.notEquals;
      _0x16afb1.ne = _0x16afb1.notEquals;
      _0x16afb1.lessThan = function (_0x170b7e) {
        return this.comp(_0x170b7e) < 0x0;
      };
      _0x16afb1.lt = _0x16afb1.lessThan;
      _0x16afb1.lessThanOrEqual = function (_0x479e30) {
        return this.comp(_0x479e30) <= 0x0;
      };
      _0x16afb1.lte = _0x16afb1.lessThanOrEqual;
      _0x16afb1.le = _0x16afb1.lessThanOrEqual;
      _0x16afb1.greaterThan = function (_0x5503d7) {
        return this.comp(_0x5503d7) > 0x0;
      };
      _0x16afb1.gt = _0x16afb1.greaterThan;
      _0x16afb1.greaterThanOrEqual = function (_0x43559d) {
        return this.comp(_0x43559d) >= 0x0;
      };
      _0x16afb1.gte = _0x16afb1.greaterThanOrEqual;
      _0x16afb1.ge = _0x16afb1.greaterThanOrEqual;
      _0x16afb1.compare = function (_0x3ffeb9) {
        if (!(true === (_0x3ffeb9 && _0x3ffeb9.__isLong__))) {
          _0x3ffeb9 = 'number' == typeof _0x3ffeb9 ? _0x12535d(_0x3ffeb9, undefined) : "string" == typeof _0x3ffeb9 ? _0x41e22a(_0x3ffeb9, undefined) : new _0x59e8bc(_0x3ffeb9.low, _0x3ffeb9.high, _0x3ffeb9.unsigned);
        }
        if (this.eq(_0x3ffeb9)) {
          return 0x0;
        }
        var _0x472d8c = this.isNegative();
        var _0x47f7a9 = _0x3ffeb9.isNegative();
        return _0x472d8c && !_0x47f7a9 ? -0x1 : !_0x472d8c && _0x47f7a9 ? 0x1 : this.unsigned ? _0x3ffeb9.high >>> 0x0 > this.high >>> 0x0 || _0x3ffeb9.high === this.high && _0x3ffeb9.low >>> 0x0 > this.low >>> 0x0 ? -0x1 : 0x1 : this.sub(_0x3ffeb9).isNegative() ? -0x1 : 0x1;
      };
      _0x16afb1.comp = _0x16afb1.compare;
      _0x16afb1.negate = function () {
        return !this.unsigned && this.eq(_0x28f776) ? _0x28f776 : this.not().add(_0xcc3467);
      };
      _0x16afb1.neg = _0x16afb1.negate;
      _0x16afb1.add = function (_0x3e9d72) {
        if (!(true === (_0x3e9d72 && _0x3e9d72.__isLong__))) {
          _0x3e9d72 = 'number' == typeof _0x3e9d72 ? _0x12535d(_0x3e9d72, undefined) : "string" == typeof _0x3e9d72 ? _0x41e22a(_0x3e9d72, undefined) : new _0x59e8bc(_0x3e9d72.low, _0x3e9d72.high, _0x3e9d72.unsigned);
        }
        var _0x482108 = this.high >>> 0x10;
        var _0x1edab5 = 0xffff & this.high;
        var _0x29251e = this.low >>> 0x10;
        var _0x3fbea2 = 0xffff & this.low;
        var _0x3c60cb = _0x3e9d72.high >>> 0x10;
        var _0x3c618d = 0xffff & _0x3e9d72.high;
        var _0x486d9e = _0x3e9d72.low >>> 0x10;
        var _0x37f530 = 0x0;
        var _0x183e42 = 0x0;
        var _0x2f6eb8 = 0x0;
        var _0x445ded = 0x0;
        _0x2f6eb8 += (_0x445ded += _0x3fbea2 + (0xffff & _0x3e9d72.low)) >>> 0x10;
        _0x183e42 += (_0x2f6eb8 += _0x29251e + _0x486d9e) >>> 0x10;
        _0x37f530 += (_0x183e42 += _0x1edab5 + _0x3c618d) >>> 0x10;
        _0x37f530 += _0x482108 + _0x3c60cb;
        return new _0x59e8bc((_0x2f6eb8 &= 0xffff) << 0x10 | (_0x445ded &= 0xffff), (_0x37f530 &= 0xffff) << 0x10 | (_0x183e42 &= 0xffff), this.unsigned);
      };
      _0x16afb1.subtract = function (_0x547025) {
        if (!(true === (_0x547025 && _0x547025.__isLong__))) {
          _0x547025 = 'number' == typeof _0x547025 ? _0x12535d(_0x547025, undefined) : "string" == typeof _0x547025 ? _0x41e22a(_0x547025, undefined) : new _0x59e8bc(_0x547025.low, _0x547025.high, _0x547025.unsigned);
        }
        return this.add(_0x547025.neg());
      };
      _0x16afb1.sub = _0x16afb1.subtract;
      _0x16afb1.multiply = function (_0x251693) {
        if (this.isZero()) {
          return this;
        }
        if (!(true === (_0x251693 && _0x251693.__isLong__))) {
          _0x251693 = 'number' == typeof _0x251693 ? _0x12535d(_0x251693, undefined) : "string" == typeof _0x251693 ? _0x41e22a(_0x251693, undefined) : new _0x59e8bc(_0x251693.low, _0x251693.high, _0x251693.unsigned);
        }
        if (_0x305b5c) {
          return new _0x59e8bc(_0x305b5c.mul(this.low, this.high, _0x251693.low, _0x251693.high), _0x305b5c.get_high(), this.unsigned);
        }
        if (_0x251693.isZero()) {
          return this.unsigned ? _0x30d038 : _0x1c4961;
        }
        if (this.eq(_0x28f776)) {
          return _0x251693.isOdd() ? _0x28f776 : _0x1c4961;
        }
        if (_0x251693.eq(_0x28f776)) {
          return this.isOdd() ? _0x28f776 : _0x1c4961;
        }
        if (this.isNegative()) {
          return _0x251693.isNegative() ? this.neg().mul(_0x251693.neg()) : this.neg().mul(_0x251693).neg();
        }
        if (_0x251693.isNegative()) {
          return this.mul(_0x251693.neg()).neg();
        }
        if (this.lt(_0x390b2b) && _0x251693.lt(_0x390b2b)) {
          return _0x12535d(this.toNumber() * _0x251693.toNumber(), this.unsigned);
        }
        var _0x3758bb = this.high >>> 0x10;
        var _0x2616bf = 0xffff & this.high;
        var _0xcbc184 = this.low >>> 0x10;
        var _0x1c5bce = 0xffff & this.low;
        var _0xcdb875 = _0x251693.high >>> 0x10;
        var _0x413dc2 = 0xffff & _0x251693.high;
        var _0x478af8 = _0x251693.low >>> 0x10;
        var _0x4b8b67 = 0xffff & _0x251693.low;
        var _0x29e234 = 0x0;
        var _0x4d871d = 0x0;
        var _0x616356 = 0x0;
        var _0x26a62f = 0x0;
        _0x616356 += (_0x26a62f += _0x1c5bce * _0x4b8b67) >>> 0x10;
        _0x4d871d += (_0x616356 += _0xcbc184 * _0x4b8b67) >>> 0x10;
        _0x616356 &= 0xffff;
        _0x4d871d += (_0x616356 += _0x1c5bce * _0x478af8) >>> 0x10;
        _0x29e234 += (_0x4d871d += _0x2616bf * _0x4b8b67) >>> 0x10;
        _0x4d871d &= 0xffff;
        _0x29e234 += (_0x4d871d += _0xcbc184 * _0x478af8) >>> 0x10;
        _0x4d871d &= 0xffff;
        _0x29e234 += (_0x4d871d += _0x1c5bce * _0x413dc2) >>> 0x10;
        _0x29e234 += _0x3758bb * _0x4b8b67 + _0x2616bf * _0x478af8 + _0xcbc184 * _0x413dc2 + _0x1c5bce * _0xcdb875;
        return new _0x59e8bc((_0x616356 &= 0xffff) << 0x10 | (_0x26a62f &= 0xffff), (_0x29e234 &= 0xffff) << 0x10 | (_0x4d871d &= 0xffff), this.unsigned);
      };
      _0x16afb1.mul = _0x16afb1.multiply;
      _0x16afb1.divide = function (_0x1a7b9c) {
        if (!(true === (_0x1a7b9c && _0x1a7b9c.__isLong__))) {
          _0x1a7b9c = 'number' == typeof _0x1a7b9c ? _0x12535d(_0x1a7b9c, undefined) : "string" == typeof _0x1a7b9c ? _0x41e22a(_0x1a7b9c, undefined) : new _0x59e8bc(_0x1a7b9c.low, _0x1a7b9c.high, _0x1a7b9c.unsigned);
        }
        if (_0x1a7b9c.isZero()) {
          throw Error("division by zero");
        }
        var _0xdf3ae2;
        var _0x40d602;
        var _0x38bd41;
        if (_0x305b5c) {
          return this.unsigned || -0x80000000 !== this.high || -0x1 !== _0x1a7b9c.low || -0x1 !== _0x1a7b9c.high ? new _0x59e8bc((this.unsigned ? _0x305b5c.div_u : _0x305b5c.div_s)(this.low, this.high, _0x1a7b9c.low, _0x1a7b9c.high), _0x305b5c.get_high(), this.unsigned) : this;
        }
        if (this.isZero()) {
          return this.unsigned ? _0x30d038 : _0x1c4961;
        }
        if (this.unsigned) {
          if (!_0x1a7b9c.unsigned) {
            _0x1a7b9c = _0x1a7b9c.toUnsigned();
          }
          if (_0x1a7b9c.gt(this)) {
            return _0x30d038;
          }
          if (_0x1a7b9c.gt(this.shru(0x1))) {
            return _0x46e151;
          }
          _0x38bd41 = _0x30d038;
        } else {
          if (this.eq(_0x28f776)) {
            return _0x1a7b9c.eq(_0xcc3467) || _0x1a7b9c.eq(_0x1c301f) ? _0x28f776 : _0x1a7b9c.eq(_0x28f776) ? _0xcc3467 : (_0xdf3ae2 = this.shr(0x1).div(_0x1a7b9c).shl(0x1)).eq(_0x1c4961) ? _0x1a7b9c.isNegative() ? _0xcc3467 : _0x1c301f : (_0x40d602 = this.sub(_0x1a7b9c.mul(_0xdf3ae2)), _0x38bd41 = _0xdf3ae2.add(_0x40d602.div(_0x1a7b9c)));
          }
          if (_0x1a7b9c.eq(_0x28f776)) {
            return this.unsigned ? _0x30d038 : _0x1c4961;
          }
          if (this.isNegative()) {
            return _0x1a7b9c.isNegative() ? this.neg().div(_0x1a7b9c.neg()) : this.neg().div(_0x1a7b9c).neg();
          }
          if (_0x1a7b9c.isNegative()) {
            return this.div(_0x1a7b9c.neg()).neg();
          }
          _0x38bd41 = _0x1c4961;
        }
        for (_0x40d602 = this; _0x40d602.gte(_0x1a7b9c);) {
          _0xdf3ae2 = Math.max(0x1, Math.floor(_0x40d602.toNumber() / _0x1a7b9c.toNumber()));
          var _0x30c0f9 = Math.ceil(Math.log(_0xdf3ae2) / Math.LN2);
          var _0xdf86b7 = _0x30c0f9 <= 0x30 ? 0x1 : _0x3c5863(0x2, _0x30c0f9 - 0x30);
          var _0x3aab49 = _0x12535d(_0xdf3ae2);
          for (var _0x831a25 = _0x3aab49.mul(_0x1a7b9c); _0x831a25.isNegative() || _0x831a25.gt(_0x40d602);) {
            _0x831a25 = (_0x3aab49 = _0x12535d(_0xdf3ae2 -= _0xdf86b7, this.unsigned)).mul(_0x1a7b9c);
          }
          if (_0x3aab49.isZero()) {
            _0x3aab49 = _0xcc3467;
          }
          _0x38bd41 = _0x38bd41.add(_0x3aab49);
          _0x40d602 = _0x40d602.sub(_0x831a25);
        }
        return _0x38bd41;
      };
      _0x16afb1.div = _0x16afb1.divide;
      _0x16afb1.modulo = function (_0x5e8ff2) {
        if (!(true === (_0x5e8ff2 && _0x5e8ff2.__isLong__))) {
          _0x5e8ff2 = 'number' == typeof _0x5e8ff2 ? _0x12535d(_0x5e8ff2, undefined) : "string" == typeof _0x5e8ff2 ? _0x41e22a(_0x5e8ff2, undefined) : new _0x59e8bc(_0x5e8ff2.low, _0x5e8ff2.high, _0x5e8ff2.unsigned);
        }
        return _0x305b5c ? new _0x59e8bc((this.unsigned ? _0x305b5c.rem_u : _0x305b5c.rem_s)(this.low, this.high, _0x5e8ff2.low, _0x5e8ff2.high), _0x305b5c.get_high(), this.unsigned) : this.sub(this.div(_0x5e8ff2).mul(_0x5e8ff2));
      };
      _0x16afb1.mod = _0x16afb1.modulo;
      _0x16afb1.rem = _0x16afb1.modulo;
      _0x16afb1.not = function () {
        return new _0x59e8bc(~this.low, ~this.high, this.unsigned);
      };
      _0x16afb1.countLeadingZeros = function () {
        return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 0x20;
      };
      _0x16afb1.clz = _0x16afb1.countLeadingZeros;
      _0x16afb1.countTrailingZeros = function () {
        return this.low ? _0x4cdf89(this.low) : _0x4cdf89(this.high) + 0x20;
      };
      _0x16afb1.ctz = _0x16afb1.countTrailingZeros;
      _0x16afb1.and = function (_0x17e70b) {
        if (!(true === (_0x17e70b && _0x17e70b.__isLong__))) {
          _0x17e70b = 'number' == typeof _0x17e70b ? _0x12535d(_0x17e70b, undefined) : "string" == typeof _0x17e70b ? _0x41e22a(_0x17e70b, undefined) : new _0x59e8bc(_0x17e70b.low, _0x17e70b.high, _0x17e70b.unsigned);
        }
        return new _0x59e8bc(this.low & _0x17e70b.low, this.high & _0x17e70b.high, this.unsigned);
      };
      _0x16afb1.or = function (_0x3dcc36) {
        if (!(true === (_0x3dcc36 && _0x3dcc36.__isLong__))) {
          _0x3dcc36 = 'number' == typeof _0x3dcc36 ? _0x12535d(_0x3dcc36, undefined) : "string" == typeof _0x3dcc36 ? _0x41e22a(_0x3dcc36, undefined) : new _0x59e8bc(_0x3dcc36.low, _0x3dcc36.high, _0x3dcc36.unsigned);
        }
        return new _0x59e8bc(this.low | _0x3dcc36.low, this.high | _0x3dcc36.high, this.unsigned);
      };
      _0x16afb1.xor = function (_0x2ada0f) {
        if (!(true === (_0x2ada0f && _0x2ada0f.__isLong__))) {
          _0x2ada0f = 'number' == typeof _0x2ada0f ? _0x12535d(_0x2ada0f, undefined) : "string" == typeof _0x2ada0f ? _0x41e22a(_0x2ada0f, undefined) : new _0x59e8bc(_0x2ada0f.low, _0x2ada0f.high, _0x2ada0f.unsigned);
        }
        return new _0x59e8bc(this.low ^ _0x2ada0f.low, this.high ^ _0x2ada0f.high, this.unsigned);
      };
      _0x16afb1.shiftLeft = function (_0x31415b) {
        if (true === (_0x31415b && _0x31415b.__isLong__)) {
          _0x31415b = _0x31415b.toInt();
        }
        return 0x0 == (_0x31415b &= 0x3f) ? this : _0x31415b < 0x20 ? new _0x59e8bc(this.low << _0x31415b, this.high << _0x31415b | this.low >>> 0x20 - _0x31415b, this.unsigned) : new _0x59e8bc(0x0, this.low << _0x31415b - 0x20, this.unsigned);
      };
      _0x16afb1.shl = _0x16afb1.shiftLeft;
      _0x16afb1.shiftRight = function (_0x2ac282) {
        if (true === (_0x2ac282 && _0x2ac282.__isLong__)) {
          _0x2ac282 = _0x2ac282.toInt();
        }
        return 0x0 == (_0x2ac282 &= 0x3f) ? this : _0x2ac282 < 0x20 ? new _0x59e8bc(this.low >>> _0x2ac282 | this.high << 0x20 - _0x2ac282, this.high >> _0x2ac282, this.unsigned) : new _0x59e8bc(this.high >> _0x2ac282 - 0x20, this.high >= 0x0 ? 0x0 : -0x1, this.unsigned);
      };
      _0x16afb1.shr = _0x16afb1.shiftRight;
      _0x16afb1.shiftRightUnsigned = function (_0x4c5584) {
        if (true === (_0x4c5584 && _0x4c5584.__isLong__)) {
          _0x4c5584 = _0x4c5584.toInt();
        }
        return 0x0 == (_0x4c5584 &= 0x3f) ? this : _0x4c5584 < 0x20 ? new _0x59e8bc(this.low >>> _0x4c5584 | this.high << 0x20 - _0x4c5584, this.high >>> _0x4c5584, this.unsigned) : new _0x59e8bc(0x20 === _0x4c5584 ? this.high : this.high >>> _0x4c5584 - 0x20, 0x0, this.unsigned);
      };
      _0x16afb1.shru = _0x16afb1.shiftRightUnsigned;
      _0x16afb1.shr_u = _0x16afb1.shiftRightUnsigned;
      _0x16afb1.rotateLeft = function (_0x20de24) {
        var _0x2b06a3;
        if (true === (_0x20de24 && _0x20de24.__isLong__)) {
          _0x20de24 = _0x20de24.toInt();
        }
        return 0x0 == (_0x20de24 &= 0x3f) ? this : 0x20 === _0x20de24 ? new _0x59e8bc(this.high, this.low, this.unsigned) : _0x20de24 < 0x20 ? (_0x2b06a3 = 0x20 - _0x20de24, new _0x59e8bc(this.low << _0x20de24 | this.high >>> _0x2b06a3, this.high << _0x20de24 | this.low >>> _0x2b06a3, this.unsigned)) : (_0x2b06a3 = 0x20 - (_0x20de24 -= 0x20), new _0x59e8bc(this.high << _0x20de24 | this.low >>> _0x2b06a3, this.low << _0x20de24 | this.high >>> _0x2b06a3, this.unsigned));
      };
      _0x16afb1.rotl = _0x16afb1.rotateLeft;
      _0x16afb1.rotateRight = function (_0x3b5ef8) {
        var _0x41bd40;
        if (true === (_0x3b5ef8 && _0x3b5ef8.__isLong__)) {
          _0x3b5ef8 = _0x3b5ef8.toInt();
        }
        return 0x0 == (_0x3b5ef8 &= 0x3f) ? this : 0x20 === _0x3b5ef8 ? new _0x59e8bc(this.high, this.low, this.unsigned) : _0x3b5ef8 < 0x20 ? (_0x41bd40 = 0x20 - _0x3b5ef8, new _0x59e8bc(this.high << _0x41bd40 | this.low >>> _0x3b5ef8, this.low << _0x41bd40 | this.high >>> _0x3b5ef8, this.unsigned)) : (_0x41bd40 = 0x20 - (_0x3b5ef8 -= 0x20), new _0x59e8bc(this.low << _0x41bd40 | this.high >>> _0x3b5ef8, this.high << _0x41bd40 | this.low >>> _0x3b5ef8, this.unsigned));
      };
      _0x16afb1.rotr = _0x16afb1.rotateRight;
      _0x16afb1.toSigned = function () {
        return this.unsigned ? new _0x59e8bc(this.low, this.high, false) : this;
      };
      _0x16afb1.toUnsigned = function () {
        return this.unsigned ? this : new _0x59e8bc(this.low, this.high, true);
      };
      _0x16afb1.toBytes = function (_0xe49027) {
        return _0xe49027 ? this.toBytesLE() : this.toBytesBE();
      };
      _0x16afb1.toBytesLE = function () {
        var _0x39d83f = this.high;
        var _0x16a8ff = this.low;
        return [0xff & _0x16a8ff, _0x16a8ff >>> 0x8 & 0xff, _0x16a8ff >>> 0x10 & 0xff, _0x16a8ff >>> 0x18, 0xff & _0x39d83f, _0x39d83f >>> 0x8 & 0xff, _0x39d83f >>> 0x10 & 0xff, _0x39d83f >>> 0x18];
      };
      _0x16afb1.toBytesBE = function () {
        var _0x150f9d = this.high;
        var _0x456a5a = this.low;
        return [_0x150f9d >>> 0x18, _0x150f9d >>> 0x10 & 0xff, _0x150f9d >>> 0x8 & 0xff, 0xff & _0x150f9d, _0x456a5a >>> 0x18, _0x456a5a >>> 0x10 & 0xff, _0x456a5a >>> 0x8 & 0xff, 0xff & _0x456a5a];
      };
      _0x59e8bc.fromBytes = function (_0x543bd6, _0x4c60e6, _0x102455) {
        return _0x102455 ? _0x59e8bc.fromBytesLE(_0x543bd6, _0x4c60e6) : _0x59e8bc.fromBytesBE(_0x543bd6, _0x4c60e6);
      };
      _0x59e8bc.fromBytesLE = function (_0x298d42, _0x3516cc) {
        return new _0x59e8bc(_0x298d42[0x0] | _0x298d42[0x1] << 0x8 | _0x298d42[0x2] << 0x10 | _0x298d42[0x3] << 0x18, _0x298d42[0x4] | _0x298d42[0x5] << 0x8 | _0x298d42[0x6] << 0x10 | _0x298d42[0x7] << 0x18, _0x3516cc);
      };
      _0x59e8bc.fromBytesBE = function (_0x278798, _0xedadae) {
        return new _0x59e8bc(_0x278798[0x4] << 0x18 | _0x278798[0x5] << 0x10 | _0x278798[0x6] << 0x8 | _0x278798[0x7], _0x278798[0x0] << 0x18 | _0x278798[0x1] << 0x10 | _0x278798[0x2] << 0x8 | _0x278798[0x3], _0xedadae);
      };
      var _0x468fb8 = function () {
        function _0xf042a6() {
          this._registry = {};
          this._moduleCache = {};
        }
        var _0x5d42c7 = _0xf042a6.prototype;
        _0x5d42c7.define = function (_0x3ece09, _0x1db1f3, _0x1fb5e1) {
          this._registry[_0x3ece09] = {
            'factory': _0x1db1f3,
            'resolveMap': _0x1fb5e1
          };
        };
        _0x5d42c7.require = function (_0x141ccc) {
          return this._require(_0x141ccc);
        };
        _0x5d42c7.throwInvalidWrapper = function (_0x43bd47, _0x526d76) {
          throw new Error("Module '" + _0x43bd47 + "' imported from '" + _0x526d76 + "' is expected be an ESM-wrapped CommonJS module but it doesn't.");
        };
        _0x5d42c7._require = function (_0x1297da, _0x44c5f0) {
          var _0xb8fa90 = this._moduleCache[_0x1297da];
          if (_0xb8fa90) {
            return _0xb8fa90.exports;
          }
          var _0x5c6f77 = {
            'id': _0x1297da,
            'exports': {}
          };
          this._moduleCache[_0x1297da] = _0x5c6f77;
          this._tryModuleLoad(_0x5c6f77, _0x1297da);
          return _0x5c6f77.exports;
        };
        _0x5d42c7._resolve = function (_0x46d7b4, _0x14188a) {
          return this._resolveFromInfos(_0x46d7b4, _0x14188a) || this._throwUnresolved(_0x46d7b4, _0x14188a);
        };
        _0x5d42c7._resolveFromInfos = function (_0x3b81c2, _0x7d4239) {
          var _0x4f1d21;
          var _0x2551e0;
          return _0x3b81c2 in cjsInfos ? _0x3b81c2 : _0x7d4239 && null != (_0x4f1d21 = null == (_0x2551e0 = cjsInfos[_0x7d4239]) ? undefined : _0x2551e0.resolveCache[_0x3b81c2]) ? _0x4f1d21 : undefined;
        };
        _0x5d42c7._tryModuleLoad = function (_0x13bec3, _0x30749c) {
          var _0x1fe72e = true;
          try {
            this._load(_0x13bec3, _0x30749c);
            _0x1fe72e = false;
          } finally {
            if (_0x1fe72e) {
              delete this._moduleCache[_0x30749c];
            }
          }
        };
        _0x5d42c7._load = function (_0x9ac22e, _0x4ecc57) {
          var _0x20bf33 = this._loadWrapper(_0x4ecc57);
          var _0xfbb646 = _0x20bf33.factory;
          var _0x561eab = _0x20bf33.resolveMap;
          var _0x57a649 = this._createRequire(_0x9ac22e);
          var _0x126546 = _0x561eab ? this._createRequireWithResolveMap("function" == typeof _0x561eab ? _0x561eab() : _0x561eab, _0x57a649) : _0x57a649;
          _0xfbb646(_0x9ac22e.exports, _0x126546, _0x9ac22e);
        };
        _0x5d42c7._loadWrapper = function (_0x2741c0) {
          return _0x2741c0 in this._registry ? this._registry[_0x2741c0] : this._loadHostProvidedModules(_0x2741c0);
        };
        _0x5d42c7._loadHostProvidedModules = function (_0xa60ee2) {
          return {
            'factory': function (_0x4ea474, _0x4e64f8, _0x5735f7) {
              if ('undefined' == typeof require) {
                throw new Error("Current environment does not provide a require() for requiring '" + _0xa60ee2 + "'.");
              }
              try {
                _0x5735f7.exports = require(_0xa60ee2);
              } catch (_0x21ea72) {
                throw new Error("Exception thrown when calling host defined require('" + _0xa60ee2 + "').", {
                  'cause': _0x21ea72
                });
              }
            }
          };
        };
        _0x5d42c7._createRequire = function (_0x16cc26) {
          var _0x3e22bd = this;
          return function (_0x15e6be) {
            return _0x3e22bd._require(_0x15e6be, _0x16cc26);
          };
        };
        _0x5d42c7._createRequireWithResolveMap = function (_0x1b1ffc, _0x36f670) {
          return function (_0x54530c) {
            var _0x1f3a39 = _0x1b1ffc[_0x54530c];
            if (_0x1f3a39) {
              return _0x36f670(_0x1f3a39);
            }
            throw new Error("Unresolved specifier " + _0x54530c);
          };
        };
        _0x5d42c7._throwUnresolved = function (_0x5ad1e0, _0x1a663e) {
          throw new Error("Unable to resolve " + _0x5ad1e0 + " from " + parent + '.');
        };
        return _0xf042a6;
      }();
      var _0x217aa0 = new _0x468fb8();
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js", function (_0x3aace9, _0x123b22, _0x3e9251, _0x30d0c9, _0x49dacb) {
        _0x3e9251.exports = function (_0x3298d0, _0x106a75) {
          var _0x2b4e3c = new Array(arguments.length - 0x1);
          var _0x443170 = 0x0;
          var _0x150250 = 0x2;
          var _0xd30034 = true;
          for (; _0x150250 < arguments.length;) {
            _0x2b4e3c[_0x443170++] = arguments[_0x150250++];
          }
          return new Promise(function (_0x2c8a54, _0x3bba8b) {
            _0x2b4e3c[_0x443170] = function (_0x2f4bd4) {
              if (_0xd30034) {
                _0xd30034 = false;
                if (_0x2f4bd4) {
                  _0x3bba8b(_0x2f4bd4);
                } else {
                  var _0x7b2c3 = new Array(arguments.length - 0x1);
                  for (var _0x30fe5a = 0x0; _0x30fe5a < _0x7b2c3.length;) {
                    _0x7b2c3[_0x30fe5a++] = arguments[_0x30fe5a];
                  }
                  _0x2c8a54.apply(null, _0x7b2c3);
                }
              }
            };
            try {
              _0x3298d0.apply(_0x106a75 || null, _0x2b4e3c);
            } catch (_0xfa6ef3) {
              if (_0xd30034) {
                _0xd30034 = false;
                _0x3bba8b(_0xfa6ef3);
              }
            }
          });
        };
        _0x3e9251.exports;
      }, {});
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js", function (_0x3b12d6, _0x46ccbf, _0x2e1c5d, _0x5460da, _0x2eab2e) {
        _0x3b12d6.length = function (_0x31f09d) {
          var _0x2fe82d = _0x31f09d.length;
          if (!_0x2fe82d) {
            return 0x0;
          }
          for (var _0x55ce8c = 0x0; --_0x2fe82d % 0x4 > 0x1 && '=' === _0x31f09d.charAt(_0x2fe82d);) {
            ++_0x55ce8c;
          }
          return Math.ceil(0x3 * _0x31f09d.length) / 0x4 - _0x55ce8c;
        };
        var _0x236cca = new Array(0x40);
        var _0x3f9a26 = new Array(0x7b);
        for (var _0x339738 = 0x0; _0x339738 < 0x40;) {
          _0x3f9a26[_0x236cca[_0x339738] = _0x339738 < 0x1a ? _0x339738 + 0x41 : _0x339738 < 0x34 ? _0x339738 + 0x47 : _0x339738 < 0x3e ? _0x339738 - 0x4 : _0x339738 - 0x3b | 0x2b] = _0x339738++;
        }
        _0x3b12d6.encode = function (_0xe0e80a, _0x55859c, _0xb71746) {
          var _0x5a265d;
          var _0x3943e5 = null;
          var _0x373dda = [];
          var _0x5e4c36 = 0x0;
          for (var _0x44ead4 = 0x0; _0x55859c < _0xb71746;) {
            var _0x1f2a2c = _0xe0e80a[_0x55859c++];
            switch (_0x44ead4) {
              case 0x0:
                _0x373dda[_0x5e4c36++] = _0x236cca[_0x1f2a2c >> 0x2];
                _0x5a265d = (0x3 & _0x1f2a2c) << 0x4;
                _0x44ead4 = 0x1;
                break;
              case 0x1:
                _0x373dda[_0x5e4c36++] = _0x236cca[_0x5a265d | _0x1f2a2c >> 0x4];
                _0x5a265d = (0xf & _0x1f2a2c) << 0x2;
                _0x44ead4 = 0x2;
                break;
              case 0x2:
                _0x373dda[_0x5e4c36++] = _0x236cca[_0x5a265d | _0x1f2a2c >> 0x6];
                _0x373dda[_0x5e4c36++] = _0x236cca[0x3f & _0x1f2a2c];
                _0x44ead4 = 0x0;
            }
            if (_0x5e4c36 > 0x1fff) {
              (_0x3943e5 || (_0x3943e5 = [])).push(String.fromCharCode.apply(String, _0x373dda));
              _0x5e4c36 = 0x0;
            }
          }
          if (_0x44ead4) {
            _0x373dda[_0x5e4c36++] = _0x236cca[_0x5a265d];
            _0x373dda[_0x5e4c36++] = 0x3d;
            if (0x1 === _0x44ead4) {
              _0x373dda[_0x5e4c36++] = 0x3d;
            }
          }
          return _0x3943e5 ? (_0x5e4c36 && _0x3943e5.push(String.fromCharCode.apply(String, _0x373dda.slice(0x0, _0x5e4c36))), _0x3943e5.join('')) : String.fromCharCode.apply(String, _0x373dda.slice(0x0, _0x5e4c36));
        };
        _0x3b12d6.decode = function (_0x3426d1, _0x4d3d16, _0xf41d35) {
          var _0x368fb3;
          var _0xd5046e = _0xf41d35;
          var _0x26617a = 0x0;
          for (var _0x3a6f06 = 0x0; _0x3a6f06 < _0x3426d1.length;) {
            var _0x1673da = _0x3426d1.charCodeAt(_0x3a6f06++);
            if (0x3d === _0x1673da && _0x26617a > 0x1) {
              break;
            }
            if (undefined === (_0x1673da = _0x3f9a26[_0x1673da])) {
              throw Error("invalid encoding");
            }
            switch (_0x26617a) {
              case 0x0:
                _0x368fb3 = _0x1673da;
                _0x26617a = 0x1;
                break;
              case 0x1:
                _0x4d3d16[_0xf41d35++] = _0x368fb3 << 0x2 | (0x30 & _0x1673da) >> 0x4;
                _0x368fb3 = _0x1673da;
                _0x26617a = 0x2;
                break;
              case 0x2:
                _0x4d3d16[_0xf41d35++] = (0xf & _0x368fb3) << 0x4 | (0x3c & _0x1673da) >> 0x2;
                _0x368fb3 = _0x1673da;
                _0x26617a = 0x3;
                break;
              case 0x3:
                _0x4d3d16[_0xf41d35++] = (0x3 & _0x368fb3) << 0x6 | _0x1673da;
                _0x26617a = 0x0;
            }
          }
          if (0x1 === _0x26617a) {
            throw Error("invalid encoding");
          }
          return _0xf41d35 - _0xd5046e;
        };
        _0x3b12d6.test = function (_0x42ff48) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(_0x42ff48);
        };
        _0x2e1c5d.exports;
      }, {});
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js", function (_0x340792, _0xbcd3ee, _0x563861, _0x137a70, _0x3658c5) {
        function _0x57a609() {
          this._listeners = {};
        }
        _0x563861.exports = _0x57a609;
        _0x57a609.prototype.on = function (_0x4128a6, _0x492845, _0x4069b6) {
          (this._listeners[_0x4128a6] || (this._listeners[_0x4128a6] = [])).push({
            'fn': _0x492845,
            'ctx': _0x4069b6 || this
          });
          return this;
        };
        _0x57a609.prototype.off = function (_0x26145d, _0x29fc33) {
          if (undefined === _0x26145d) {
            this._listeners = {};
          } else {
            if (undefined === _0x29fc33) {
              this._listeners[_0x26145d] = [];
            } else {
              var _0x47d8e6 = this._listeners[_0x26145d];
              for (var _0x30e862 = 0x0; _0x30e862 < _0x47d8e6.length;) {
                if (_0x47d8e6[_0x30e862].fn === _0x29fc33) {
                  _0x47d8e6.splice(_0x30e862, 0x1);
                } else {
                  ++_0x30e862;
                }
              }
            }
          }
          return this;
        };
        _0x57a609.prototype.emit = function (_0x2949ef) {
          var _0x273d37 = this._listeners[_0x2949ef];
          if (_0x273d37) {
            var _0x4d7727 = [];
            for (var _0x1b741d = 0x1; _0x1b741d < arguments.length;) {
              _0x4d7727.push(arguments[_0x1b741d++]);
            }
            for (_0x1b741d = 0x0; _0x1b741d < _0x273d37.length;) {
              _0x273d37[_0x1b741d].fn.apply(_0x273d37[_0x1b741d++].ctx, _0x4d7727);
            }
          }
          return this;
        };
        _0x563861.exports;
      }, {});
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/@protobufjs/float/index.js", function (_0x1302a1, _0x42c592, _0x28f012, _0x1f16d3, _0x37513f) {
        function _0x575498(_0x171e59) {
          if ("undefined" != typeof Float32Array) {
            (function () {
              var _0x3ebcb2 = new Float32Array([-0x0]);
              var _0x592fc4 = new Uint8Array(_0x3ebcb2.buffer);
              var _0xd977f7 = 0x80 === _0x592fc4[0x3];
              function _0x103f11(_0x256858, _0x4182a9, _0x574477) {
                _0x3ebcb2[0x0] = _0x256858;
                _0x4182a9[_0x574477] = _0x592fc4[0x0];
                _0x4182a9[_0x574477 + 0x1] = _0x592fc4[0x1];
                _0x4182a9[_0x574477 + 0x2] = _0x592fc4[0x2];
                _0x4182a9[_0x574477 + 0x3] = _0x592fc4[0x3];
              }
              function _0x39c952(_0x5f53f6, _0x57196f, _0x4597e9) {
                _0x3ebcb2[0x0] = _0x5f53f6;
                _0x57196f[_0x4597e9] = _0x592fc4[0x3];
                _0x57196f[_0x4597e9 + 0x1] = _0x592fc4[0x2];
                _0x57196f[_0x4597e9 + 0x2] = _0x592fc4[0x1];
                _0x57196f[_0x4597e9 + 0x3] = _0x592fc4[0x0];
              }
              function _0x422489(_0x4d9873, _0x58515d) {
                _0x592fc4[0x0] = _0x4d9873[_0x58515d];
                _0x592fc4[0x1] = _0x4d9873[_0x58515d + 0x1];
                _0x592fc4[0x2] = _0x4d9873[_0x58515d + 0x2];
                _0x592fc4[0x3] = _0x4d9873[_0x58515d + 0x3];
                return _0x3ebcb2[0x0];
              }
              function _0x147175(_0x40c1bb, _0x198ab7) {
                _0x592fc4[0x3] = _0x40c1bb[_0x198ab7];
                _0x592fc4[0x2] = _0x40c1bb[_0x198ab7 + 0x1];
                _0x592fc4[0x1] = _0x40c1bb[_0x198ab7 + 0x2];
                _0x592fc4[0x0] = _0x40c1bb[_0x198ab7 + 0x3];
                return _0x3ebcb2[0x0];
              }
              _0x171e59.writeFloatLE = _0xd977f7 ? _0x103f11 : _0x39c952;
              _0x171e59.writeFloatBE = _0xd977f7 ? _0x39c952 : _0x103f11;
              _0x171e59.readFloatLE = _0xd977f7 ? _0x422489 : _0x147175;
              _0x171e59.readFloatBE = _0xd977f7 ? _0x147175 : _0x422489;
            })();
          } else {
            (function () {
              function _0x350b56(_0xca7dfc, _0x1c32be, _0x280692, _0xef74f8) {
                var _0x3d5d47 = _0x1c32be < 0x0 ? 0x1 : 0x0;
                if (_0x3d5d47) {
                  _0x1c32be = -_0x1c32be;
                }
                if (0x0 === _0x1c32be) {
                  _0xca7dfc(0x1 / _0x1c32be > 0x0 ? 0x0 : 0x80000000, _0x280692, _0xef74f8);
                } else {
                  if (isNaN(_0x1c32be)) {
                    _0xca7dfc(0x7fc00000, _0x280692, _0xef74f8);
                  } else {
                    if (_0x1c32be > 0xffffff00000000000000000000000000) {
                      _0xca7dfc((_0x3d5d47 << 0x1f | 0x7f800000) >>> 0x0, _0x280692, _0xef74f8);
                    } else {
                      if (_0x1c32be < 1.1754943508222875e-38) {
                        _0xca7dfc((_0x3d5d47 << 0x1f | Math.round(_0x1c32be / 1.401298464324817e-45)) >>> 0x0, _0x280692, _0xef74f8);
                      } else {
                        var _0x487619 = Math.floor(Math.log(_0x1c32be) / Math.LN2);
                        _0xca7dfc((_0x3d5d47 << 0x1f | _0x487619 + 0x7f << 0x17 | 0x7fffff & Math.round(_0x1c32be * Math.pow(0x2, -_0x487619) * 0x800000)) >>> 0x0, _0x280692, _0xef74f8);
                      }
                    }
                  }
                }
              }
              function _0x448bc4(_0x189f51, _0x5a2c0c, _0x58ee29) {
                var _0x9aabbf = _0x189f51(_0x5a2c0c, _0x58ee29);
                var _0x44f5ee = 0x2 * (_0x9aabbf >> 0x1f) + 0x1;
                var _0x9deb3c = _0x9aabbf >>> 0x17 & 0xff;
                var _0x18011d = 0x7fffff & _0x9aabbf;
                return 0xff === _0x9deb3c ? _0x18011d ? NaN : _0x44f5ee * Infinity : 0x0 === _0x9deb3c ? 1.401298464324817e-45 * _0x44f5ee * _0x18011d : _0x44f5ee * Math.pow(0x2, _0x9deb3c - 0x96) * (_0x18011d + 0x800000);
              }
              _0x171e59.writeFloatLE = _0x350b56.bind(null, _0x4af90f);
              _0x171e59.writeFloatBE = _0x350b56.bind(null, _0x3c526c);
              _0x171e59.readFloatLE = _0x448bc4.bind(null, _0x4fc885);
              _0x171e59.readFloatBE = _0x448bc4.bind(null, _0x2d958c);
            })();
          }
          if ('undefined' != typeof Float64Array) {
            (function () {
              var _0x1e6e69 = new Float64Array([-0x0]);
              var _0x5812cf = new Uint8Array(_0x1e6e69.buffer);
              var _0x3f8ca0 = 0x80 === _0x5812cf[0x7];
              function _0x4980f0(_0x25706c, _0x1991f1, _0x21ef71) {
                _0x1e6e69[0x0] = _0x25706c;
                _0x1991f1[_0x21ef71] = _0x5812cf[0x0];
                _0x1991f1[_0x21ef71 + 0x1] = _0x5812cf[0x1];
                _0x1991f1[_0x21ef71 + 0x2] = _0x5812cf[0x2];
                _0x1991f1[_0x21ef71 + 0x3] = _0x5812cf[0x3];
                _0x1991f1[_0x21ef71 + 0x4] = _0x5812cf[0x4];
                _0x1991f1[_0x21ef71 + 0x5] = _0x5812cf[0x5];
                _0x1991f1[_0x21ef71 + 0x6] = _0x5812cf[0x6];
                _0x1991f1[_0x21ef71 + 0x7] = _0x5812cf[0x7];
              }
              function _0x21c087(_0x5dd703, _0x362593, _0x5773a9) {
                _0x1e6e69[0x0] = _0x5dd703;
                _0x362593[_0x5773a9] = _0x5812cf[0x7];
                _0x362593[_0x5773a9 + 0x1] = _0x5812cf[0x6];
                _0x362593[_0x5773a9 + 0x2] = _0x5812cf[0x5];
                _0x362593[_0x5773a9 + 0x3] = _0x5812cf[0x4];
                _0x362593[_0x5773a9 + 0x4] = _0x5812cf[0x3];
                _0x362593[_0x5773a9 + 0x5] = _0x5812cf[0x2];
                _0x362593[_0x5773a9 + 0x6] = _0x5812cf[0x1];
                _0x362593[_0x5773a9 + 0x7] = _0x5812cf[0x0];
              }
              function _0xa5fd66(_0x4310d5, _0xaee7c8) {
                _0x5812cf[0x0] = _0x4310d5[_0xaee7c8];
                _0x5812cf[0x1] = _0x4310d5[_0xaee7c8 + 0x1];
                _0x5812cf[0x2] = _0x4310d5[_0xaee7c8 + 0x2];
                _0x5812cf[0x3] = _0x4310d5[_0xaee7c8 + 0x3];
                _0x5812cf[0x4] = _0x4310d5[_0xaee7c8 + 0x4];
                _0x5812cf[0x5] = _0x4310d5[_0xaee7c8 + 0x5];
                _0x5812cf[0x6] = _0x4310d5[_0xaee7c8 + 0x6];
                _0x5812cf[0x7] = _0x4310d5[_0xaee7c8 + 0x7];
                return _0x1e6e69[0x0];
              }
              function _0x3cccea(_0x2a65eb, _0x1cc912) {
                _0x5812cf[0x7] = _0x2a65eb[_0x1cc912];
                _0x5812cf[0x6] = _0x2a65eb[_0x1cc912 + 0x1];
                _0x5812cf[0x5] = _0x2a65eb[_0x1cc912 + 0x2];
                _0x5812cf[0x4] = _0x2a65eb[_0x1cc912 + 0x3];
                _0x5812cf[0x3] = _0x2a65eb[_0x1cc912 + 0x4];
                _0x5812cf[0x2] = _0x2a65eb[_0x1cc912 + 0x5];
                _0x5812cf[0x1] = _0x2a65eb[_0x1cc912 + 0x6];
                _0x5812cf[0x0] = _0x2a65eb[_0x1cc912 + 0x7];
                return _0x1e6e69[0x0];
              }
              _0x171e59.writeDoubleLE = _0x3f8ca0 ? _0x4980f0 : _0x21c087;
              _0x171e59.writeDoubleBE = _0x3f8ca0 ? _0x21c087 : _0x4980f0;
              _0x171e59.readDoubleLE = _0x3f8ca0 ? _0xa5fd66 : _0x3cccea;
              _0x171e59.readDoubleBE = _0x3f8ca0 ? _0x3cccea : _0xa5fd66;
            })();
          } else {
            (function () {
              function _0x208d97(_0x58639b, _0xbce92d, _0x375389, _0x18a30a, _0x3fb3c1, _0x436361) {
                var _0x29b391 = _0x18a30a < 0x0 ? 0x1 : 0x0;
                if (_0x29b391) {
                  _0x18a30a = -_0x18a30a;
                }
                if (0x0 === _0x18a30a) {
                  _0x58639b(0x0, _0x3fb3c1, _0x436361 + _0xbce92d);
                  _0x58639b(0x1 / _0x18a30a > 0x0 ? 0x0 : 0x80000000, _0x3fb3c1, _0x436361 + _0x375389);
                } else {
                  if (isNaN(_0x18a30a)) {
                    _0x58639b(0x0, _0x3fb3c1, _0x436361 + _0xbce92d);
                    _0x58639b(0x7ff80000, _0x3fb3c1, _0x436361 + _0x375389);
                  } else {
                    if (_0x18a30a > 0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
                      _0x58639b(0x0, _0x3fb3c1, _0x436361 + _0xbce92d);
                      _0x58639b((_0x29b391 << 0x1f | 0x7ff00000) >>> 0x0, _0x3fb3c1, _0x436361 + _0x375389);
                    } else {
                      var _0x50446a;
                      if (_0x18a30a < 2.2250738585072014e-308) {
                        _0x58639b((_0x50446a = _0x18a30a / 5e-324) >>> 0x0, _0x3fb3c1, _0x436361 + _0xbce92d);
                        _0x58639b((_0x29b391 << 0x1f | _0x50446a / 0x100000000) >>> 0x0, _0x3fb3c1, _0x436361 + _0x375389);
                      } else {
                        var _0x586d5e = Math.floor(Math.log(_0x18a30a) / Math.LN2);
                        if (0x400 === _0x586d5e) {
                          _0x586d5e = 0x3ff;
                        }
                        _0x58639b(0x10000000000000 * (_0x50446a = _0x18a30a * Math.pow(0x2, -_0x586d5e)) >>> 0x0, _0x3fb3c1, _0x436361 + _0xbce92d);
                        _0x58639b((_0x29b391 << 0x1f | _0x586d5e + 0x3ff << 0x14 | 0x100000 * _0x50446a & 0xfffff) >>> 0x0, _0x3fb3c1, _0x436361 + _0x375389);
                      }
                    }
                  }
                }
              }
              function _0x47866d(_0x4353c3, _0x2cd30c, _0x400023, _0x160637, _0x9b08ab) {
                var _0x6b49c0 = _0x4353c3(_0x160637, _0x9b08ab + _0x2cd30c);
                var _0x45bb66 = _0x4353c3(_0x160637, _0x9b08ab + _0x400023);
                var _0x3bb548 = 0x2 * (_0x45bb66 >> 0x1f) + 0x1;
                var _0x546944 = _0x45bb66 >>> 0x14 & 0x7ff;
                var _0x4c2d62 = 0x100000000 * (0xfffff & _0x45bb66) + _0x6b49c0;
                return 0x7ff === _0x546944 ? _0x4c2d62 ? NaN : _0x3bb548 * Infinity : 0x0 === _0x546944 ? 5e-324 * _0x3bb548 * _0x4c2d62 : _0x3bb548 * Math.pow(0x2, _0x546944 - 0x433) * (_0x4c2d62 + 0x10000000000000);
              }
              _0x171e59.writeDoubleLE = _0x208d97.bind(null, _0x4af90f, 0x0, 0x4);
              _0x171e59.writeDoubleBE = _0x208d97.bind(null, _0x3c526c, 0x4, 0x0);
              _0x171e59.readDoubleLE = _0x47866d.bind(null, _0x4fc885, 0x0, 0x4);
              _0x171e59.readDoubleBE = _0x47866d.bind(null, _0x2d958c, 0x4, 0x0);
            })();
          }
          return _0x171e59;
        }
        function _0x4af90f(_0x9e4a54, _0x2a6a50, _0x2e4d40) {
          _0x2a6a50[_0x2e4d40] = 0xff & _0x9e4a54;
          _0x2a6a50[_0x2e4d40 + 0x1] = _0x9e4a54 >>> 0x8 & 0xff;
          _0x2a6a50[_0x2e4d40 + 0x2] = _0x9e4a54 >>> 0x10 & 0xff;
          _0x2a6a50[_0x2e4d40 + 0x3] = _0x9e4a54 >>> 0x18;
        }
        function _0x3c526c(_0x65425c, _0x103e7b, _0x5f5a69) {
          _0x103e7b[_0x5f5a69] = _0x65425c >>> 0x18;
          _0x103e7b[_0x5f5a69 + 0x1] = _0x65425c >>> 0x10 & 0xff;
          _0x103e7b[_0x5f5a69 + 0x2] = _0x65425c >>> 0x8 & 0xff;
          _0x103e7b[_0x5f5a69 + 0x3] = 0xff & _0x65425c;
        }
        function _0x4fc885(_0x5087ca, _0x3501aa) {
          return (_0x5087ca[_0x3501aa] | _0x5087ca[_0x3501aa + 0x1] << 0x8 | _0x5087ca[_0x3501aa + 0x2] << 0x10 | _0x5087ca[_0x3501aa + 0x3] << 0x18) >>> 0x0;
        }
        function _0x2d958c(_0x5a32e2, _0x4ccedf) {
          return (_0x5a32e2[_0x4ccedf] << 0x18 | _0x5a32e2[_0x4ccedf + 0x1] << 0x10 | _0x5a32e2[_0x4ccedf + 0x2] << 0x8 | _0x5a32e2[_0x4ccedf + 0x3]) >>> 0x0;
        }
        _0x28f012.exports = _0x575498(_0x575498);
        _0x28f012.exports;
        _0x28f012.exports.writeFloatLE;
        _0x28f012.exports.writeFloatBE;
        _0x28f012.exports.readFloatLE;
        _0x28f012.exports.readFloatBE;
        _0x28f012.exports.writeDoubleLE;
        _0x28f012.exports.writeDoubleBE;
        _0x28f012.exports.readDoubleLE;
        _0x28f012.exports.readDoubleBE;
      }, {});
      _0x217aa0.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js', function (_0x52a417, _0x3a4127, _0x455153, _0x4510bb, _0xe73331) {
        function _0x1be211(_0x5a27a2) {
          try {
            var _0x2173e7 = eval("quire".replace(/^/, 're'))(_0x5a27a2);
            if (_0x2173e7 && (_0x2173e7.length || Object.keys(_0x2173e7).length)) {
              return _0x2173e7;
            }
          } catch (_0x32d717) {}
          return null;
        }
        _0x455153.exports = _0x1be211;
        _0x455153.exports;
      }, {});
      _0x217aa0.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js', function (_0x117ba9, _0x5671aa, _0x1a7b60, _0x3809c2, _0x336a03) {
        _0x117ba9.length = function (_0x11c317) {
          var _0x140add = 0x0;
          var _0x46fbc4 = 0x0;
          for (var _0x2117f1 = 0x0; _0x2117f1 < _0x11c317.length; ++_0x2117f1) {
            if ((_0x46fbc4 = _0x11c317.charCodeAt(_0x2117f1)) < 0x80) {
              _0x140add += 0x1;
            } else if (_0x46fbc4 < 0x800) {
              _0x140add += 0x2;
            } else if (0xd800 == (0xfc00 & _0x46fbc4) && 0xdc00 == (0xfc00 & _0x11c317.charCodeAt(_0x2117f1 + 0x1))) {
              ++_0x2117f1;
              _0x140add += 0x4;
            } else {
              _0x140add += 0x3;
            }
          }
          return _0x140add;
        };
        _0x117ba9.read = function (_0x15e32b, _0x581d1e, _0x241203) {
          if (_0x241203 - _0x581d1e < 0x1) {
            return '';
          }
          var _0x27f0d1;
          var _0x323f38 = null;
          var _0x361952 = [];
          for (var _0xbf1e8e = 0x0; _0x581d1e < _0x241203;) {
            if ((_0x27f0d1 = _0x15e32b[_0x581d1e++]) < 0x80) {
              _0x361952[_0xbf1e8e++] = _0x27f0d1;
            } else if (_0x27f0d1 > 0xbf && _0x27f0d1 < 0xe0) {
              _0x361952[_0xbf1e8e++] = (0x1f & _0x27f0d1) << 0x6 | 0x3f & _0x15e32b[_0x581d1e++];
            } else if (_0x27f0d1 > 0xef && _0x27f0d1 < 0x16d) {
              _0x27f0d1 = ((0x7 & _0x27f0d1) << 0x12 | (0x3f & _0x15e32b[_0x581d1e++]) << 0xc | (0x3f & _0x15e32b[_0x581d1e++]) << 0x6 | 0x3f & _0x15e32b[_0x581d1e++]) - 0x10000;
              _0x361952[_0xbf1e8e++] = 0xd800 + (_0x27f0d1 >> 0xa);
              _0x361952[_0xbf1e8e++] = 0xdc00 + (0x3ff & _0x27f0d1);
            } else {
              _0x361952[_0xbf1e8e++] = (0xf & _0x27f0d1) << 0xc | (0x3f & _0x15e32b[_0x581d1e++]) << 0x6 | 0x3f & _0x15e32b[_0x581d1e++];
            }
            if (_0xbf1e8e > 0x1fff) {
              (_0x323f38 || (_0x323f38 = [])).push(String.fromCharCode.apply(String, _0x361952));
              _0xbf1e8e = 0x0;
            }
          }
          return _0x323f38 ? (_0xbf1e8e && _0x323f38.push(String.fromCharCode.apply(String, _0x361952.slice(0x0, _0xbf1e8e))), _0x323f38.join('')) : String.fromCharCode.apply(String, _0x361952.slice(0x0, _0xbf1e8e));
        };
        _0x117ba9.write = function (_0x3f577f, _0x13f489, _0x4be4af) {
          var _0x50277c;
          var _0x21da04;
          var _0x319e60 = _0x4be4af;
          for (var _0x27b000 = 0x0; _0x27b000 < _0x3f577f.length; ++_0x27b000) {
            if ((_0x50277c = _0x3f577f.charCodeAt(_0x27b000)) < 0x80) {
              _0x13f489[_0x4be4af++] = _0x50277c;
            } else if (_0x50277c < 0x800) {
              _0x13f489[_0x4be4af++] = _0x50277c >> 0x6 | 0xc0;
              _0x13f489[_0x4be4af++] = 0x3f & _0x50277c | 0x80;
            } else if (0xd800 == (0xfc00 & _0x50277c) && 0xdc00 == (0xfc00 & (_0x21da04 = _0x3f577f.charCodeAt(_0x27b000 + 0x1)))) {
              _0x50277c = 0x10000 + ((0x3ff & _0x50277c) << 0xa) + (0x3ff & _0x21da04);
              ++_0x27b000;
              _0x13f489[_0x4be4af++] = _0x50277c >> 0x12 | 0xf0;
              _0x13f489[_0x4be4af++] = _0x50277c >> 0xc & 0x3f | 0x80;
              _0x13f489[_0x4be4af++] = _0x50277c >> 0x6 & 0x3f | 0x80;
              _0x13f489[_0x4be4af++] = 0x3f & _0x50277c | 0x80;
            } else {
              _0x13f489[_0x4be4af++] = _0x50277c >> 0xc | 0xe0;
              _0x13f489[_0x4be4af++] = _0x50277c >> 0x6 & 0x3f | 0x80;
              _0x13f489[_0x4be4af++] = 0x3f & _0x50277c | 0x80;
            }
          }
          return _0x4be4af - _0x319e60;
        };
        _0x1a7b60.exports;
      }, {});
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js", function (_0x228d8c, _0x53ab88, _0x376357, _0x4bfd5f, _0x56a2dc) {
        _0x376357.exports = function (_0x2e2791, _0x173d4b, _0x4ac650) {
          var _0x2004d2 = _0x4ac650 || 0x2000;
          var _0x2bed69 = _0x2004d2 >>> 0x1;
          var _0x981be9 = null;
          var _0xd9de6b = _0x2004d2;
          return function (_0x5ba71e) {
            if (_0x5ba71e < 0x1 || _0x5ba71e > _0x2bed69) {
              return _0x2e2791(_0x5ba71e);
            }
            if (_0xd9de6b + _0x5ba71e > _0x2004d2) {
              _0x981be9 = _0x2e2791(_0x2004d2);
              _0xd9de6b = 0x0;
            }
            var _0x2b0a9b = _0x173d4b.call(_0x981be9, _0xd9de6b, _0xd9de6b += _0x5ba71e);
            if (0x7 & _0xd9de6b) {
              _0xd9de6b = 0x1 + (0x7 | _0xd9de6b);
            }
            return _0x2b0a9b;
          };
        };
        _0x376357.exports;
      }, {});
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js", function (_0x2d1076, _0x5ce77b, _0x4e8868, _0x1e6030, _0x4dc349) {
        _0x4e8868.exports = _0xecb645;
        var _0x55cfb3 = _0x5ce77b("../util/minimal");
        function _0xecb645(_0x101734, _0x268c2b) {
          this.lo = _0x101734 >>> 0x0;
          this.hi = _0x268c2b >>> 0x0;
        }
        var _0x1826e4 = _0xecb645.zero = new _0xecb645(0x0, 0x0);
        _0x1826e4.toNumber = function () {
          return 0x0;
        };
        _0x1826e4.zzEncode = _0x1826e4.zzDecode = function () {
          return this;
        };
        _0x1826e4.length = function () {
          return 0x1;
        };
        var _0x28526b = _0xecb645.zeroHash = "\0\0\0\0\0\0\0\0";
        _0xecb645.fromNumber = function (_0x311ac4) {
          if (0x0 === _0x311ac4) {
            return _0x1826e4;
          }
          var _0x458fbd = _0x311ac4 < 0x0;
          if (_0x458fbd) {
            _0x311ac4 = -_0x311ac4;
          }
          var _0x49ea12 = _0x311ac4 >>> 0x0;
          var _0x44d52a = (_0x311ac4 - _0x49ea12) / 0x100000000 >>> 0x0;
          if (_0x458fbd) {
            _0x44d52a = ~_0x44d52a >>> 0x0;
            _0x49ea12 = ~_0x49ea12 >>> 0x0;
            if (++_0x49ea12 > 0xffffffff) {
              _0x49ea12 = 0x0;
              if (++_0x44d52a > 0xffffffff) {
                _0x44d52a = 0x0;
              }
            }
          }
          return new _0xecb645(_0x49ea12, _0x44d52a);
        };
        _0xecb645.from = function (_0x2dec8b) {
          if ('number' == typeof _0x2dec8b) {
            return _0xecb645.fromNumber(_0x2dec8b);
          }
          if (_0x55cfb3.isString(_0x2dec8b)) {
            if (!_0x55cfb3.Long) {
              return _0xecb645.fromNumber(parseInt(_0x2dec8b, 0xa));
            }
            _0x2dec8b = _0x55cfb3.Long.fromString(_0x2dec8b);
          }
          return _0x2dec8b.low || _0x2dec8b.high ? new _0xecb645(_0x2dec8b.low >>> 0x0, _0x2dec8b.high >>> 0x0) : _0x1826e4;
        };
        _0xecb645.prototype.toNumber = function (_0xbe807) {
          if (!_0xbe807 && this.hi >>> 0x1f) {
            var _0x4b2fab = 0x1 + ~this.lo >>> 0x0;
            var _0x2e8a4a = ~this.hi >>> 0x0;
            if (!_0x4b2fab) {
              _0x2e8a4a = _0x2e8a4a + 0x1 >>> 0x0;
            }
            return -(_0x4b2fab + 0x100000000 * _0x2e8a4a);
          }
          return this.lo + 0x100000000 * this.hi;
        };
        _0xecb645.prototype.toLong = function (_0x28da99) {
          return _0x55cfb3.Long ? new _0x55cfb3.Long(0x0 | this.lo, 0x0 | this.hi, Boolean(_0x28da99)) : {
            'low': 0x0 | this.lo,
            'high': 0x0 | this.hi,
            'unsigned': Boolean(_0x28da99)
          };
        };
        var _0x3dd0ac = String.prototype.charCodeAt;
        _0xecb645.fromHash = function (_0x2f0eaa) {
          return _0x2f0eaa === _0x28526b ? _0x1826e4 : new _0xecb645((_0x3dd0ac.call(_0x2f0eaa, 0x0) | _0x3dd0ac.call(_0x2f0eaa, 0x1) << 0x8 | _0x3dd0ac.call(_0x2f0eaa, 0x2) << 0x10 | _0x3dd0ac.call(_0x2f0eaa, 0x3) << 0x18) >>> 0x0, (_0x3dd0ac.call(_0x2f0eaa, 0x4) | _0x3dd0ac.call(_0x2f0eaa, 0x5) << 0x8 | _0x3dd0ac.call(_0x2f0eaa, 0x6) << 0x10 | _0x3dd0ac.call(_0x2f0eaa, 0x7) << 0x18) >>> 0x0);
        };
        _0xecb645.prototype.toHash = function () {
          return String.fromCharCode(0xff & this.lo, this.lo >>> 0x8 & 0xff, this.lo >>> 0x10 & 0xff, this.lo >>> 0x18, 0xff & this.hi, this.hi >>> 0x8 & 0xff, this.hi >>> 0x10 & 0xff, this.hi >>> 0x18);
        };
        _0xecb645.prototype.zzEncode = function () {
          var _0x197c88 = this.hi >> 0x1f;
          this.hi = ((this.hi << 0x1 | this.lo >>> 0x1f) ^ _0x197c88) >>> 0x0;
          this.lo = (this.lo << 0x1 ^ _0x197c88) >>> 0x0;
          return this;
        };
        _0xecb645.prototype.zzDecode = function () {
          var _0x46c82b = -(0x1 & this.lo);
          this.lo = ((this.lo >>> 0x1 | this.hi << 0x1f) ^ _0x46c82b) >>> 0x0;
          this.hi = (this.hi >>> 0x1 ^ _0x46c82b) >>> 0x0;
          return this;
        };
        _0xecb645.prototype.length = function () {
          var _0x4fa38c = this.lo;
          var _0x4e37ea = (this.lo >>> 0x1c | this.hi << 0x4) >>> 0x0;
          var _0x57e61c = this.hi >>> 0x18;
          return 0x0 === _0x57e61c ? 0x0 === _0x4e37ea ? _0x4fa38c < 0x4000 ? _0x4fa38c < 0x80 ? 0x1 : 0x2 : _0x4fa38c < 0x200000 ? 0x3 : 0x4 : _0x4e37ea < 0x4000 ? _0x4e37ea < 0x80 ? 0x5 : 0x6 : _0x4e37ea < 0x200000 ? 0x7 : 0x8 : _0x57e61c < 0x80 ? 0x9 : 0xa;
        };
        _0x4e8868.exports;
      }, function () {
        return {
          '../util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js", function (_0x2e0cff, _0xa044a4, _0x546d2e, _0x527fea, _0x484611) {
        function _0x3739b3(_0x37568d, _0x314859, _0x3296b7) {
          var _0x19da1d = Object.keys(_0x314859);
          for (var _0x20e4e6 = 0x0; _0x20e4e6 < _0x19da1d.length; ++_0x20e4e6) {
            if (!(undefined !== _0x37568d[_0x19da1d[_0x20e4e6]] && _0x3296b7)) {
              _0x37568d[_0x19da1d[_0x20e4e6]] = _0x314859[_0x19da1d[_0x20e4e6]];
            }
          }
          return _0x37568d;
        }
        function _0x494b13(_0x13f016) {
          function _0x92619d(_0x3e6b54, _0x4d69b3) {
            if (!(this instanceof _0x92619d)) {
              return new _0x92619d(_0x3e6b54, _0x4d69b3);
            }
            Object.defineProperty(this, "message", {
              'get': function () {
                return _0x3e6b54;
              }
            });
            if (Error.captureStackTrace) {
              Error.captureStackTrace(this, _0x92619d);
            } else {
              Object.defineProperty(this, "stack", {
                'value': new Error().stack || ''
              });
            }
            if (_0x4d69b3) {
              _0x3739b3(this, _0x4d69b3);
            }
          }
          _0x92619d.prototype = Object.create(Error.prototype, {
            'constructor': {
              'value': _0x92619d,
              'writable': true,
              'enumerable': false,
              'configurable': true
            },
            'name': {
              'get': function () {
                return _0x13f016;
              },
              'set': undefined,
              'enumerable': false,
              'configurable': true
            },
            'toString': {
              'value': function () {
                return this.name + ": " + this.message;
              },
              'writable': true,
              'enumerable': false,
              'configurable': true
            }
          });
          return _0x92619d;
        }
        _0x2e0cff.asPromise = _0xa044a4("@protobufjs/aspromise");
        _0x2e0cff.base64 = _0xa044a4("@protobufjs/base64");
        _0x2e0cff.EventEmitter = _0xa044a4("@protobufjs/eventemitter");
        _0x2e0cff.float = _0xa044a4("@protobufjs/float");
        _0x2e0cff.inquire = _0xa044a4('@protobufjs/inquire');
        _0x2e0cff.utf8 = _0xa044a4("@protobufjs/utf8");
        _0x2e0cff.pool = _0xa044a4("@protobufjs/pool");
        _0x2e0cff.LongBits = _0xa044a4("./longbits");
        _0x2e0cff.isNode = Boolean("undefined" != typeof global && global && global.process && global.process.versions && global.process.versions.node);
        _0x2e0cff.global = _0x2e0cff.isNode && global || "undefined" != typeof window && window || "undefined" != typeof self && self || this;
        _0x2e0cff.emptyArray = Object.freeze ? Object.freeze([]) : [];
        _0x2e0cff.emptyObject = Object.freeze ? Object.freeze({}) : {};
        _0x2e0cff.isInteger = Number.isInteger || function (_0x537928) {
          return 'number' == typeof _0x537928 && isFinite(_0x537928) && Math.floor(_0x537928) === _0x537928;
        };
        _0x2e0cff.isString = function (_0x556740) {
          return "string" == typeof _0x556740 || _0x556740 instanceof String;
        };
        _0x2e0cff.isObject = function (_0x5452e4) {
          return _0x5452e4 && "object" == typeof _0x5452e4;
        };
        _0x2e0cff.isset = _0x2e0cff.isSet = function (_0x28099d, _0xb4a531) {
          var _0x539b38 = _0x28099d[_0xb4a531];
          return !(null == _0x539b38 || !_0x28099d.hasOwnProperty(_0xb4a531)) && ("object" != typeof _0x539b38 || (Array.isArray(_0x539b38) ? _0x539b38.length : Object.keys(_0x539b38).length) > 0x0);
        };
        _0x2e0cff.Buffer = function () {
          try {
            var _0x13419b = _0x2e0cff.inquire("buffer").Buffer;
            return _0x13419b.prototype.utf8Write ? _0x13419b : null;
          } catch (_0x23763f) {
            return null;
          }
        }();
        _0x2e0cff._Buffer_from = null;
        _0x2e0cff._Buffer_allocUnsafe = null;
        _0x2e0cff.newBuffer = function (_0x94c36a) {
          return "number" == typeof _0x94c36a ? _0x2e0cff.Buffer ? _0x2e0cff._Buffer_allocUnsafe(_0x94c36a) : new _0x2e0cff.Array(_0x94c36a) : _0x2e0cff.Buffer ? _0x2e0cff._Buffer_from(_0x94c36a) : "undefined" == typeof Uint8Array ? _0x94c36a : new Uint8Array(_0x94c36a);
        };
        _0x2e0cff.Array = 'undefined' != typeof Uint8Array ? Uint8Array : Array;
        _0x2e0cff.Long = _0x2e0cff.global.dcodeIO && _0x2e0cff.global.dcodeIO.Long || _0x2e0cff.global.Long || _0x2e0cff.inquire("long");
        _0x2e0cff.key2Re = /^true|false|0|1$/;
        _0x2e0cff.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
        _0x2e0cff.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
        _0x2e0cff.longToHash = function (_0x3236e4) {
          return _0x3236e4 ? _0x2e0cff.LongBits.from(_0x3236e4).toHash() : _0x2e0cff.LongBits.zeroHash;
        };
        _0x2e0cff.longFromHash = function (_0x581dcb, _0x2801b7) {
          var _0x18f241 = _0x2e0cff.LongBits.fromHash(_0x581dcb);
          return _0x2e0cff.Long ? _0x2e0cff.Long.fromBits(_0x18f241.lo, _0x18f241.hi, _0x2801b7) : _0x18f241.toNumber(Boolean(_0x2801b7));
        };
        _0x2e0cff.merge = _0x3739b3;
        _0x2e0cff.lcFirst = function (_0x63995b) {
          return _0x63995b.charAt(0x0).toLowerCase() + _0x63995b.substring(0x1);
        };
        _0x2e0cff.newError = _0x494b13;
        _0x2e0cff.ProtocolError = _0x494b13("ProtocolError");
        _0x2e0cff.oneOfGetter = function (_0x24e268) {
          var _0x4ffb17 = {};
          for (var _0x37037e = 0x0; _0x37037e < _0x24e268.length; ++_0x37037e) {
            _0x4ffb17[_0x24e268[_0x37037e]] = 0x1;
          }
          return function () {
            var _0x33b04c = Object.keys(this);
            for (var _0xa98874 = _0x33b04c.length - 0x1; _0xa98874 > -0x1; --_0xa98874) {
              if (0x1 === _0x4ffb17[_0x33b04c[_0xa98874]] && undefined !== this[_0x33b04c[_0xa98874]] && null !== this[_0x33b04c[_0xa98874]]) {
                return _0x33b04c[_0xa98874];
              }
            }
          };
        };
        _0x2e0cff.oneOfSetter = function (_0x385e93) {
          return function (_0x316b92) {
            for (var _0x43d57c = 0x0; _0x43d57c < _0x385e93.length; ++_0x43d57c) {
              if (_0x385e93[_0x43d57c] !== _0x316b92) {
                delete this[_0x385e93[_0x43d57c]];
              }
            }
          };
        };
        _0x2e0cff.toJSONOptions = {
          'longs': String,
          'enums': String,
          'bytes': String,
          'json': true
        };
        _0x2e0cff._configure = function () {
          var _0x2adc1c = _0x2e0cff.Buffer;
          if (_0x2adc1c) {
            _0x2e0cff._Buffer_from = _0x2adc1c.from !== Uint8Array.from && _0x2adc1c.from || function (_0x2ae011, _0x4c8acf) {
              return new _0x2adc1c(_0x2ae011, _0x4c8acf);
            };
            _0x2e0cff._Buffer_allocUnsafe = _0x2adc1c.allocUnsafe || function (_0x3a2089) {
              return new _0x2adc1c(_0x3a2089);
            };
          } else {
            _0x2e0cff._Buffer_from = _0x2e0cff._Buffer_allocUnsafe = null;
          }
        };
        _0x546d2e.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          '@protobufjs/base64': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js",
          '@protobufjs/eventemitter': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js",
          '@protobufjs/float': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/@protobufjs/float/index.js",
          '@protobufjs/inquire': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js',
          '@protobufjs/utf8': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js',
          '@protobufjs/pool': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js",
          './longbits': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js"
        };
      });
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/writer.js", function (_0x3167e9, _0x34cb63, _0x20555d, _0x109b20, _0x732643) {
        _0x20555d.exports = _0xe13656;
        var _0x22f250;
        var _0x76f34b = _0x34cb63('./util/minimal');
        var _0x419a72 = _0x76f34b.LongBits;
        var _0x2e2ad9 = _0x76f34b.base64;
        var _0x32b0b3 = _0x76f34b.utf8;
        function _0x19a44d(_0x6caf27, _0x6415ba, _0x5c40ca) {
          this.fn = _0x6caf27;
          this.len = _0x6415ba;
          this.next = undefined;
          this.val = _0x5c40ca;
        }
        function _0xb5a673() {}
        function _0x32a090(_0x45583e) {
          this.head = _0x45583e.head;
          this.tail = _0x45583e.tail;
          this.len = _0x45583e.len;
          this.next = _0x45583e.states;
        }
        function _0xe13656() {
          this.len = 0x0;
          this.head = new _0x19a44d(_0xb5a673, 0x0, 0x0);
          this.tail = this.head;
          this.states = null;
        }
        var _0x137859 = function () {
          return _0x76f34b.Buffer ? function () {
            return (_0xe13656.create = function () {
              return new _0x22f250();
            })();
          } : function () {
            return new _0xe13656();
          };
        };
        function _0x58d5ed(_0x5d76b6, _0x2bd4dd, _0x3fc5b8) {
          _0x2bd4dd[_0x3fc5b8] = 0xff & _0x5d76b6;
        }
        function _0x3af8fc(_0x294847, _0x42849f) {
          this.len = _0x294847;
          this.next = undefined;
          this.val = _0x42849f;
        }
        function _0x10f5f8(_0x2dbbc6, _0x4d234, _0x276a43) {
          for (; _0x2dbbc6.hi;) {
            _0x4d234[_0x276a43++] = 0x7f & _0x2dbbc6.lo | 0x80;
            _0x2dbbc6.lo = (_0x2dbbc6.lo >>> 0x7 | _0x2dbbc6.hi << 0x19) >>> 0x0;
            _0x2dbbc6.hi >>>= 0x7;
          }
          for (; _0x2dbbc6.lo > 0x7f;) {
            _0x4d234[_0x276a43++] = 0x7f & _0x2dbbc6.lo | 0x80;
            _0x2dbbc6.lo = _0x2dbbc6.lo >>> 0x7;
          }
          _0x4d234[_0x276a43++] = _0x2dbbc6.lo;
        }
        function _0x319046(_0x31cb62, _0xda2946, _0x58525d) {
          _0xda2946[_0x58525d] = 0xff & _0x31cb62;
          _0xda2946[_0x58525d + 0x1] = _0x31cb62 >>> 0x8 & 0xff;
          _0xda2946[_0x58525d + 0x2] = _0x31cb62 >>> 0x10 & 0xff;
          _0xda2946[_0x58525d + 0x3] = _0x31cb62 >>> 0x18;
        }
        _0xe13656.create = _0x137859();
        _0xe13656.alloc = function (_0x2a4d5f) {
          return new _0x76f34b.Array(_0x2a4d5f);
        };
        if (_0x76f34b.Array !== Array) {
          _0xe13656.alloc = _0x76f34b.pool(_0xe13656.alloc, _0x76f34b.Array.prototype.subarray);
        }
        _0xe13656.prototype._push = function (_0x376e04, _0x4e60bb, _0x1a8bf9) {
          this.tail = this.tail.next = new _0x19a44d(_0x376e04, _0x4e60bb, _0x1a8bf9);
          this.len += _0x4e60bb;
          return this;
        };
        _0x3af8fc.prototype = Object.create(_0x19a44d.prototype);
        _0x3af8fc.prototype.fn = function (_0x2037be, _0x58bf1c, _0x23910e) {
          for (; _0x2037be > 0x7f;) {
            _0x58bf1c[_0x23910e++] = 0x7f & _0x2037be | 0x80;
            _0x2037be >>>= 0x7;
          }
          _0x58bf1c[_0x23910e] = _0x2037be;
        };
        _0xe13656.prototype.uint32 = function (_0x5d6859) {
          this.len += (this.tail = this.tail.next = new _0x3af8fc((_0x5d6859 >>>= 0x0) < 0x80 ? 0x1 : _0x5d6859 < 0x4000 ? 0x2 : _0x5d6859 < 0x200000 ? 0x3 : _0x5d6859 < 0x10000000 ? 0x4 : 0x5, _0x5d6859)).len;
          return this;
        };
        _0xe13656.prototype.int32 = function (_0x2d5d65) {
          return _0x2d5d65 < 0x0 ? this._push(_0x10f5f8, 0xa, _0x419a72.fromNumber(_0x2d5d65)) : this.uint32(_0x2d5d65);
        };
        _0xe13656.prototype.sint32 = function (_0x41dd16) {
          return this.uint32((_0x41dd16 << 0x1 ^ _0x41dd16 >> 0x1f) >>> 0x0);
        };
        _0xe13656.prototype.uint64 = function (_0x5e5d78) {
          var _0x534369 = _0x419a72.from(_0x5e5d78);
          return this._push(_0x10f5f8, _0x534369.length(), _0x534369);
        };
        _0xe13656.prototype.int64 = _0xe13656.prototype.uint64;
        _0xe13656.prototype.sint64 = function (_0xaf41b5) {
          var _0x2ad65d = _0x419a72.from(_0xaf41b5).zzEncode();
          return this._push(_0x10f5f8, _0x2ad65d.length(), _0x2ad65d);
        };
        _0xe13656.prototype.bool = function (_0x1592fc) {
          return this._push(_0x58d5ed, 0x1, _0x1592fc ? 0x1 : 0x0);
        };
        _0xe13656.prototype.fixed32 = function (_0x444155) {
          return this._push(_0x319046, 0x4, _0x444155 >>> 0x0);
        };
        _0xe13656.prototype.sfixed32 = _0xe13656.prototype.fixed32;
        _0xe13656.prototype.fixed64 = function (_0x324492) {
          var _0x4fd029 = _0x419a72.from(_0x324492);
          return this._push(_0x319046, 0x4, _0x4fd029.lo)._push(_0x319046, 0x4, _0x4fd029.hi);
        };
        _0xe13656.prototype.sfixed64 = _0xe13656.prototype.fixed64;
        _0xe13656.prototype.float = function (_0x36fb67) {
          return this._push(_0x76f34b.float.writeFloatLE, 0x4, _0x36fb67);
        };
        _0xe13656.prototype.double = function (_0x2a16ee) {
          return this._push(_0x76f34b.float.writeDoubleLE, 0x8, _0x2a16ee);
        };
        var _0x504909 = _0x76f34b.Array.prototype.set ? function (_0x2406e6, _0x5d6b24, _0x328c12) {
          _0x5d6b24.set(_0x2406e6, _0x328c12);
        } : function (_0x16761c, _0x5adc5d, _0x4507db) {
          for (var _0x3d27b2 = 0x0; _0x3d27b2 < _0x16761c.length; ++_0x3d27b2) {
            _0x5adc5d[_0x4507db + _0x3d27b2] = _0x16761c[_0x3d27b2];
          }
        };
        _0xe13656.prototype.bytes = function (_0x526830) {
          var _0x5b8daa = _0x526830.length >>> 0x0;
          if (!_0x5b8daa) {
            return this._push(_0x58d5ed, 0x1, 0x0);
          }
          if (_0x76f34b.isString(_0x526830)) {
            var _0x72a2ff = _0xe13656.alloc(_0x5b8daa = _0x2e2ad9.length(_0x526830));
            _0x2e2ad9.decode(_0x526830, _0x72a2ff, 0x0);
            _0x526830 = _0x72a2ff;
          }
          return this.uint32(_0x5b8daa)._push(_0x504909, _0x5b8daa, _0x526830);
        };
        _0xe13656.prototype.string = function (_0x3158cb) {
          var _0x1e469a = _0x32b0b3.length(_0x3158cb);
          return _0x1e469a ? this.uint32(_0x1e469a)._push(_0x32b0b3.write, _0x1e469a, _0x3158cb) : this._push(_0x58d5ed, 0x1, 0x0);
        };
        _0xe13656.prototype.fork = function () {
          this.states = new _0x32a090(this);
          this.head = this.tail = new _0x19a44d(_0xb5a673, 0x0, 0x0);
          this.len = 0x0;
          return this;
        };
        _0xe13656.prototype.reset = function () {
          if (this.states) {
            this.head = this.states.head;
            this.tail = this.states.tail;
            this.len = this.states.len;
            this.states = this.states.next;
          } else {
            this.head = this.tail = new _0x19a44d(_0xb5a673, 0x0, 0x0);
            this.len = 0x0;
          }
          return this;
        };
        _0xe13656.prototype.ldelim = function () {
          var _0x4c5c56 = this.head;
          var _0x3339c8 = this.tail;
          var _0x593778 = this.len;
          this.reset().uint32(_0x593778);
          if (_0x593778) {
            this.tail.next = _0x4c5c56.next;
            this.tail = _0x3339c8;
            this.len += _0x593778;
          }
          return this;
        };
        _0xe13656.prototype.finish = function () {
          var _0x5d2945 = this.head.next;
          var _0x40e847 = this.constructor.alloc(this.len);
          for (var _0x2e3fdf = 0x0; _0x5d2945;) {
            _0x5d2945.fn(_0x5d2945.val, _0x40e847, _0x2e3fdf);
            _0x2e3fdf += _0x5d2945.len;
            _0x5d2945 = _0x5d2945.next;
          }
          return _0x40e847;
        };
        _0xe13656._configure = function (_0x1934ee) {
          _0x22f250 = _0x1934ee;
          _0xe13656.create = _0x137859();
          _0x22f250._configure();
        };
        _0x20555d.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js", function (_0x25c059, _0x1706ce, _0x7acd76, _0x5b90a9, _0x4b811d) {
        _0x7acd76.exports = _0xff53a1;
        var _0xe4e122 = _0x1706ce('./writer');
        (_0xff53a1.prototype = Object.create(_0xe4e122.prototype)).constructor = _0xff53a1;
        var _0xf155da = _0x1706ce('./util/minimal');
        function _0xff53a1() {
          _0xe4e122.call(this);
        }
        function _0x3064b8(_0x39fcf8, _0x5349b3, _0x51d36f) {
          if (_0x39fcf8.length < 0x28) {
            _0xf155da.utf8.write(_0x39fcf8, _0x5349b3, _0x51d36f);
          } else if (_0x5349b3.utf8Write) {
            _0x5349b3.utf8Write(_0x39fcf8, _0x51d36f);
          } else {
            _0x5349b3.write(_0x39fcf8, _0x51d36f);
          }
        }
        _0xff53a1._configure = function () {
          _0xff53a1.alloc = _0xf155da._Buffer_allocUnsafe;
          _0xff53a1.writeBytesBuffer = _0xf155da.Buffer && _0xf155da.Buffer.prototype instanceof Uint8Array && "set" === _0xf155da.Buffer.prototype.set.name ? function (_0x1a993e, _0x3efc00, _0x11b598) {
            _0x3efc00.set(_0x1a993e, _0x11b598);
          } : function (_0x42ca18, _0x4c24d2, _0x34bd12) {
            if (_0x42ca18.copy) {
              _0x42ca18.copy(_0x4c24d2, _0x34bd12, 0x0, _0x42ca18.length);
            } else {
              for (var _0xf51ffd = 0x0; _0xf51ffd < _0x42ca18.length;) {
                _0x4c24d2[_0x34bd12++] = _0x42ca18[_0xf51ffd++];
              }
            }
          };
        };
        _0xff53a1.prototype.bytes = function (_0x2ef40a) {
          if (_0xf155da.isString(_0x2ef40a)) {
            _0x2ef40a = _0xf155da._Buffer_from(_0x2ef40a, "base64");
          }
          var _0x51d914 = _0x2ef40a.length >>> 0x0;
          this.uint32(_0x51d914);
          if (_0x51d914) {
            this._push(_0xff53a1.writeBytesBuffer, _0x51d914, _0x2ef40a);
          }
          return this;
        };
        _0xff53a1.prototype.string = function (_0x66b60c) {
          var _0x4ec9a6 = _0xf155da.Buffer.byteLength(_0x66b60c);
          this.uint32(_0x4ec9a6);
          if (_0x4ec9a6) {
            this._push(_0x3064b8, _0x4ec9a6, _0x66b60c);
          }
          return this;
        };
        _0xff53a1._configure();
        _0x7acd76.exports;
      }, function () {
        return {
          './writer': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/reader.js", function (_0x5200e0, _0x2fd5f6, _0x54ea3e, _0x42dfb8, _0x108756) {
        _0x54ea3e.exports = _0x4e93e9;
        var _0x3248f9;
        var _0x103147 = _0x2fd5f6('./util/minimal');
        var _0xf37759 = _0x103147.LongBits;
        var _0x753a30 = _0x103147.utf8;
        function _0x4e93e9(_0x233fd5) {
          this.buf = _0x233fd5;
          this.pos = 0x0;
          this.len = _0x233fd5.length;
        }
        var _0x3e33d7;
        var _0x5a500c = 'undefined' != typeof Uint8Array ? function (_0x4efecc) {
          if (_0x4efecc instanceof Uint8Array || Array.isArray(_0x4efecc)) {
            return new _0x4e93e9(_0x4efecc);
          }
          throw Error("illegal buffer");
        } : function (_0x5531e3) {
          if (Array.isArray(_0x5531e3)) {
            return new _0x4e93e9(_0x5531e3);
          }
          throw Error("illegal buffer");
        };
        var _0xd2b902 = function () {
          return _0x103147.Buffer ? function (_0x250bb6) {
            return (_0x4e93e9.create = function (_0x2bed3a) {
              return _0x103147.Buffer.isBuffer(_0x2bed3a) ? new _0x3248f9(_0x2bed3a) : _0x5a500c(_0x2bed3a);
            })(_0x250bb6);
          } : _0x5a500c;
        };
        function _0x19708f() {
          var _0x1edfb7 = new _0xf37759(0x0, 0x0);
          var _0x2e7a5e = 0x0;
          if (!(this.len - this.pos > 0x4)) {
            for (; _0x2e7a5e < 0x3; ++_0x2e7a5e) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0x1edfb7.lo = (_0x1edfb7.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0x2e7a5e) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x1edfb7;
              }
            }
            _0x1edfb7.lo = (_0x1edfb7.lo | (0x7f & this.buf[this.pos++]) << 0x7 * _0x2e7a5e) >>> 0x0;
            return _0x1edfb7;
          }
          for (; _0x2e7a5e < 0x4; ++_0x2e7a5e) {
            _0x1edfb7.lo = (_0x1edfb7.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0x2e7a5e) >>> 0x0;
            if (this.buf[this.pos++] < 0x80) {
              return _0x1edfb7;
            }
          }
          _0x1edfb7.lo = (_0x1edfb7.lo | (0x7f & this.buf[this.pos]) << 0x1c) >>> 0x0;
          _0x1edfb7.hi = (_0x1edfb7.hi | (0x7f & this.buf[this.pos]) >> 0x4) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x1edfb7;
          }
          _0x2e7a5e = 0x0;
          if (this.len - this.pos > 0x4) {
            for (; _0x2e7a5e < 0x5; ++_0x2e7a5e) {
              _0x1edfb7.hi = (_0x1edfb7.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0x2e7a5e + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x1edfb7;
              }
            }
          } else {
            for (; _0x2e7a5e < 0x5; ++_0x2e7a5e) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0x1edfb7.hi = (_0x1edfb7.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0x2e7a5e + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x1edfb7;
              }
            }
          }
          throw Error("invalid varint encoding");
        }
        function _0xab6a75() {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x8 || 0x1) + " > " + this.len);
          }
          return new _0xf37759((this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0, (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0);
        }
        _0x4e93e9.create = _0xd2b902();
        _0x4e93e9.prototype._slice = _0x103147.Array.prototype.subarray || _0x103147.Array.prototype.slice;
        _0x3e33d7 = 0xffffffff;
        _0x4e93e9.prototype.uint32 = function () {
          _0x3e33d7 = (0x7f & this.buf[this.pos]) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x3e33d7;
          }
          _0x3e33d7 = (_0x3e33d7 | (0x7f & this.buf[this.pos]) << 0x7) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x3e33d7;
          }
          _0x3e33d7 = (_0x3e33d7 | (0x7f & this.buf[this.pos]) << 0xe) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x3e33d7;
          }
          _0x3e33d7 = (_0x3e33d7 | (0x7f & this.buf[this.pos]) << 0x15) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x3e33d7;
          }
          _0x3e33d7 = (_0x3e33d7 | (0xf & this.buf[this.pos]) << 0x1c) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x3e33d7;
          }
          if ((this.pos += 0x5) > this.len) {
            this.pos = this.len;
            throw RangeError("index out of range: " + this.pos + " + " + (0xa || 0x1) + " > " + this.len);
          }
          return _0x3e33d7;
        };
        _0x4e93e9.prototype.int32 = function () {
          return 0x0 | this.uint32();
        };
        _0x4e93e9.prototype.sint32 = function () {
          var _0x26e543 = this.uint32();
          return _0x26e543 >>> 0x1 ^ -(0x1 & _0x26e543) | 0x0;
        };
        _0x4e93e9.prototype.bool = function () {
          return 0x0 !== this.uint32();
        };
        _0x4e93e9.prototype.fixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0x4e93e9.prototype.sfixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return 0x0 | (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0x4e93e9.prototype.float = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x4aa332 = _0x103147.float.readFloatLE(this.buf, this.pos);
          this.pos += 0x4;
          return _0x4aa332;
        };
        _0x4e93e9.prototype.double = function () {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x193ca7 = _0x103147.float.readDoubleLE(this.buf, this.pos);
          this.pos += 0x8;
          return _0x193ca7;
        };
        _0x4e93e9.prototype.bytes = function () {
          var _0x3dcdbc = this.uint32();
          var _0x339c08 = this.pos;
          var _0x1217aa = this.pos + _0x3dcdbc;
          if (_0x1217aa > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (_0x3dcdbc || 0x1) + " > " + this.len);
          }
          this.pos += _0x3dcdbc;
          if (Array.isArray(this.buf)) {
            return this.buf.slice(_0x339c08, _0x1217aa);
          }
          if (_0x339c08 === _0x1217aa) {
            var _0x2177df = _0x103147.Buffer;
            return _0x2177df ? _0x2177df.alloc(0x0) : new this.buf.constructor(0x0);
          }
          return this._slice.call(this.buf, _0x339c08, _0x1217aa);
        };
        _0x4e93e9.prototype.string = function () {
          var _0x11c1dd = this.bytes();
          return _0x753a30.read(_0x11c1dd, 0x0, _0x11c1dd.length);
        };
        _0x4e93e9.prototype.skip = function (_0xafda85) {
          if ("number" == typeof _0xafda85) {
            if (this.pos + _0xafda85 > this.len) {
              throw RangeError("index out of range: " + this.pos + " + " + (_0xafda85 || 0x1) + " > " + this.len);
            }
            this.pos += _0xafda85;
          } else {
            do {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
            } while (0x80 & this.buf[this.pos++]);
          }
          return this;
        };
        _0x4e93e9.prototype.skipType = function (_0x598faf) {
          switch (_0x598faf) {
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
              for (; 0x4 != (_0x598faf = 0x7 & this.uint32());) {
                this.skipType(_0x598faf);
              }
              break;
            case 0x5:
              this.skip(0x4);
              break;
            default:
              throw Error("invalid wire type " + _0x598faf + " at offset " + this.pos);
          }
          return this;
        };
        _0x4e93e9._configure = function (_0x299331) {
          _0x3248f9 = _0x299331;
          _0x4e93e9.create = _0xd2b902();
          _0x3248f9._configure();
          var _0xfd8891 = _0x103147.Long ? 'toLong' : "toNumber";
          _0x103147.merge(_0x4e93e9.prototype, {
            'int64': function () {
              return _0x19708f.call(this)[_0xfd8891](false);
            },
            'uint64': function () {
              return _0x19708f.call(this)[_0xfd8891](true);
            },
            'sint64': function () {
              return _0x19708f.call(this).zzDecode()[_0xfd8891](false);
            },
            'fixed64': function () {
              return _0xab6a75.call(this)[_0xfd8891](true);
            },
            'sfixed64': function () {
              return _0xab6a75.call(this)[_0xfd8891](false);
            }
          });
        };
        _0x54ea3e.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js", function (_0x3657c3, _0xbee684, _0x1fa1b5, _0x3cd128, _0x44b408) {
        _0x1fa1b5.exports = _0x10ef46;
        var _0x446998 = _0xbee684('./reader');
        (_0x10ef46.prototype = Object.create(_0x446998.prototype)).constructor = _0x10ef46;
        var _0x563e56 = _0xbee684('./util/minimal');
        function _0x10ef46(_0x39ff26) {
          _0x446998.call(this, _0x39ff26);
        }
        _0x10ef46._configure = function () {
          if (_0x563e56.Buffer) {
            _0x10ef46.prototype._slice = _0x563e56.Buffer.prototype.slice;
          }
        };
        _0x10ef46.prototype.string = function () {
          var _0x5ab066 = this.uint32();
          return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + _0x5ab066, this.len)) : this.buf.toString('utf-8', this.pos, this.pos = Math.min(this.pos + _0x5ab066, this.len));
        };
        _0x10ef46._configure();
        _0x1fa1b5.exports;
      }, function () {
        return {
          './reader': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js", function (_0x81ae60, _0x153cfa, _0x3ca717, _0x35ad9c, _0x4f82ca) {
        _0x3ca717.exports = _0x1d2c28;
        var _0x43f915 = _0x153cfa("../util/minimal");
        function _0x1d2c28(_0x8ffc7e, _0x3d2c9e, _0x45eb72) {
          if ("function" != typeof _0x8ffc7e) {
            throw TypeError("rpcImpl must be a function");
          }
          _0x43f915.EventEmitter.call(this);
          this.rpcImpl = _0x8ffc7e;
          this.requestDelimited = Boolean(_0x3d2c9e);
          this.responseDelimited = Boolean(_0x45eb72);
        }
        (_0x1d2c28.prototype = Object.create(_0x43f915.EventEmitter.prototype)).constructor = _0x1d2c28;
        _0x1d2c28.prototype.rpcCall = function _0x4b5612(_0x302444, _0x239349, _0x22dff8, _0x4f9c4f, _0x5563fb) {
          if (!_0x4f9c4f) {
            throw TypeError("request must be specified");
          }
          var _0x539e29 = this;
          if (!_0x5563fb) {
            return _0x43f915.asPromise(_0x4b5612, _0x539e29, _0x302444, _0x239349, _0x22dff8, _0x4f9c4f);
          }
          if (_0x539e29.rpcImpl) {
            try {
              return _0x539e29.rpcImpl(_0x302444, _0x239349[_0x539e29.requestDelimited ? "encodeDelimited" : "encode"](_0x4f9c4f).finish(), function (_0x5f447e, _0x2a151b) {
                if (_0x5f447e) {
                  _0x539e29.emit("error", _0x5f447e, _0x302444);
                  return _0x5563fb(_0x5f447e);
                }
                if (null !== _0x2a151b) {
                  if (!(_0x2a151b instanceof _0x22dff8)) {
                    try {
                      _0x2a151b = _0x22dff8[_0x539e29.responseDelimited ? 'decodeDelimited' : "decode"](_0x2a151b);
                    } catch (_0x328d3a) {
                      _0x539e29.emit("error", _0x328d3a, _0x302444);
                      return _0x5563fb(_0x328d3a);
                    }
                  }
                  _0x539e29.emit("data", _0x2a151b, _0x302444);
                  return _0x5563fb(null, _0x2a151b);
                }
                _0x539e29.end(true);
              });
            } catch (_0x4e7fbd) {
              _0x539e29.emit("error", _0x4e7fbd, _0x302444);
              return void setTimeout(function () {
                _0x5563fb(_0x4e7fbd);
              }, 0x0);
            }
          } else {
            setTimeout(function () {
              _0x5563fb(Error("already ended"));
            }, 0x0);
          }
        };
        _0x1d2c28.prototype.end = function (_0x31d945) {
          if (this.rpcImpl) {
            if (!_0x31d945) {
              this.rpcImpl(null, null, null);
            }
            this.rpcImpl = null;
            this.emit("end").off();
          }
          return this;
        };
        _0x3ca717.exports;
      }, function () {
        return {
          '../util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x217aa0.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js', function (_0x21a9fb, _0xbaaeba, _0x4f0b08, _0x3fa496, _0x287b8c) {
        _0x21a9fb.Service = _0xbaaeba("./rpc/service");
        _0x4f0b08.exports;
      }, function () {
        return {
          './rpc/service': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js"
        };
      });
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/roots.js", function (_0x371391, _0x306a92, _0x116dda, _0x124dfa, _0xbd4356) {
        _0x116dda.exports = {};
        _0x116dda.exports;
      }, {});
      _0x217aa0.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js', function (_0x222524, _0x3d2897, _0x51b18d, _0x250050, _0x23b381) {
        function _0x40a36e() {
          _0x222524.util._configure();
          _0x222524.Writer._configure(_0x222524.BufferWriter);
          _0x222524.Reader._configure(_0x222524.BufferReader);
        }
        _0x222524.build = "minimal";
        _0x222524.Writer = _0x3d2897("./writer");
        _0x222524.BufferWriter = _0x3d2897("./writer_buffer");
        _0x222524.Reader = _0x3d2897('./reader');
        _0x222524.BufferReader = _0x3d2897('./reader_buffer');
        _0x222524.util = _0x3d2897('./util/minimal');
        _0x222524.rpc = _0x3d2897("./rpc");
        _0x222524.roots = _0x3d2897('./roots');
        _0x222524.configure = _0x40a36e;
        _0x40a36e();
        _0x51b18d.exports;
      }, function () {
        return {
          './writer': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './writer_buffer': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js",
          './reader': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './reader_buffer': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js",
          './util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          './rpc': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js',
          './roots': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/roots.js"
        };
      });
      _0x217aa0.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js', function (_0xf8a4e4, _0x25b360, _0x3dfbf2, _0x32d4f4, _0x4d0a65) {
        function _0x3751a4(_0x1a107f, _0x1fc2cc) {
          if ("string" == typeof _0x1a107f) {
            _0x1fc2cc = _0x1a107f;
            _0x1a107f = undefined;
          }
          var _0x2a6d67 = [];
          function _0x107c0d(_0x5b7490) {
            if ("string" != typeof _0x5b7490) {
              var _0x57d0e3 = "function " + (undefined || _0x1fc2cc || '') + '(' + (_0x1a107f && _0x1a107f.join(',') || '') + "){\n  " + _0x2a6d67.join("\n  ") + "\n}";
              if (_0x3751a4.verbose) {
                console.log("codegen: " + _0x57d0e3);
              }
              _0x57d0e3 = "return " + _0x57d0e3;
              if (_0x5b7490) {
                var _0x1e0161 = Object.keys(_0x5b7490);
                var _0x51a3a0 = new Array(_0x1e0161.length + 0x1);
                var _0x80da8c = new Array(_0x1e0161.length);
                for (var _0xe5f699 = 0x0; _0xe5f699 < _0x1e0161.length;) {
                  _0x51a3a0[_0xe5f699] = _0x1e0161[_0xe5f699];
                  _0x80da8c[_0xe5f699] = _0x5b7490[_0x1e0161[_0xe5f699++]];
                }
                _0x51a3a0[_0xe5f699] = _0x57d0e3;
                return Function.apply(null, _0x51a3a0).apply(null, _0x80da8c);
              }
              return Function(_0x57d0e3)();
            }
            var _0x537ac8 = new Array(arguments.length - 0x1);
            for (var _0x534bf4 = 0x0; _0x534bf4 < _0x537ac8.length;) {
              _0x537ac8[_0x534bf4] = arguments[++_0x534bf4];
            }
            _0x534bf4 = 0x0;
            _0x5b7490 = _0x5b7490.replace(/%([%dfijs])/g, function (_0x5a495b, _0x1193d7) {
              var _0x363c1a = _0x537ac8[_0x534bf4++];
              switch (_0x1193d7) {
                case 'd':
                case 'f':
                  return String(Number(_0x363c1a));
                case 'i':
                  return String(Math.floor(_0x363c1a));
                case 'j':
                  return JSON.stringify(_0x363c1a);
                case 's':
                  return String(_0x363c1a);
              }
              return '%';
            });
            if (_0x534bf4 !== _0x537ac8.length) {
              throw Error("parameter count mismatch");
            }
            _0x2a6d67.push(_0x5b7490);
            return _0x107c0d;
          }
          function _0x1bc9be(_0x469c6e) {
            return "function " + (_0x469c6e || _0x1fc2cc || '') + '(' + (_0x1a107f && _0x1a107f.join(',') || '') + "){\n  " + _0x2a6d67.join("\n  ") + "\n}";
          }
          _0x107c0d.toString = _0x1bc9be;
          return _0x107c0d;
        }
        _0x3dfbf2.exports = _0x3751a4;
        _0x3751a4.verbose = false;
        _0x3dfbf2.exports;
      }, {});
      _0x217aa0.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js', function (_0xbc0d0e, _0x41c0b0, _0x324678, _0x5acf9f, _0x326ca1) {
        _0x324678.exports = _0x3b8a84;
        var _0xdc24c2 = _0x41c0b0("@protobufjs/aspromise");
        var _0x5340d4 = _0x41c0b0("@protobufjs/inquire")('fs');
        function _0x3b8a84(_0x5db38b, _0x25469e, _0x17a973) {
          if ("function" == typeof _0x25469e) {
            _0x17a973 = _0x25469e;
            _0x25469e = {};
          } else if (!_0x25469e) {
            _0x25469e = {};
          }
          return _0x17a973 ? !_0x25469e.xhr && _0x5340d4 && _0x5340d4.readFile ? _0x5340d4.readFile(_0x5db38b, function (_0x3542a1, _0x26721a) {
            return _0x3542a1 && 'undefined' != typeof XMLHttpRequest ? _0x3b8a84.xhr(_0x5db38b, _0x25469e, _0x17a973) : _0x3542a1 ? _0x17a973(_0x3542a1) : _0x17a973(null, _0x25469e.binary ? _0x26721a : _0x26721a.toString("utf8"));
          }) : _0x3b8a84.xhr(_0x5db38b, _0x25469e, _0x17a973) : _0xdc24c2(_0x3b8a84, this, _0x5db38b, _0x25469e);
        }
        _0x3b8a84.xhr = function (_0x222d77, _0x451ca3, _0x548b10) {
          var _0x5a7eb2 = new XMLHttpRequest();
          _0x5a7eb2.onreadystatechange = function () {
            if (0x4 === _0x5a7eb2.readyState) {
              if (0x0 !== _0x5a7eb2.status && 0xc8 !== _0x5a7eb2.status) {
                return _0x548b10(Error("status " + _0x5a7eb2.status));
              }
              if (_0x451ca3.binary) {
                var _0x3b14a3 = _0x5a7eb2.response;
                if (!_0x3b14a3) {
                  _0x3b14a3 = [];
                  for (var _0xf00f4a = 0x0; _0xf00f4a < _0x5a7eb2.responseText.length; ++_0xf00f4a) {
                    _0x3b14a3.push(0xff & _0x5a7eb2.responseText.charCodeAt(_0xf00f4a));
                  }
                }
                return _0x548b10(null, "undefined" != typeof Uint8Array ? new Uint8Array(_0x3b14a3) : _0x3b14a3);
              }
              return _0x548b10(null, _0x5a7eb2.responseText);
            }
          };
          if (_0x451ca3.binary) {
            if ('overrideMimeType' in _0x5a7eb2) {
              _0x5a7eb2.overrideMimeType("text/plain; charset=x-user-defined");
            }
            _0x5a7eb2.responseType = "arraybuffer";
          }
          _0x5a7eb2.open("GET", _0x222d77);
          _0x5a7eb2.send();
        };
        _0x324678.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          '@protobufjs/inquire': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js'
        };
      });
      _0x217aa0.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/@protobufjs/path/index.js', function (_0x149cdd, _0x1ef76c, _0x3b5501, _0x4a7c19, _0x31bdbe) {
        var _0x2cdba3 = _0x149cdd.isAbsolute = function (_0x593f58) {
          return /^(?:\/|\w+:)/.test(_0x593f58);
        };
        var _0x46d836 = _0x149cdd.normalize = function (_0x571b0e) {
          var _0x427e39 = (_0x571b0e = _0x571b0e.replace(/\\/g, '/').replace(/\/{2,}/g, '/')).split('/');
          var _0x54eca3 = _0x2cdba3(_0x571b0e);
          var _0xb2a47a = '';
          if (_0x54eca3) {
            _0xb2a47a = _0x427e39.shift() + '/';
          }
          for (var _0x446401 = 0x0; _0x446401 < _0x427e39.length;) {
            if ('..' === _0x427e39[_0x446401]) {
              if (_0x446401 > 0x0 && '..' !== _0x427e39[_0x446401 - 0x1]) {
                _0x427e39.splice(--_0x446401, 0x2);
              } else if (_0x54eca3) {
                _0x427e39.splice(_0x446401, 0x1);
              } else {
                ++_0x446401;
              }
            } else if ('.' === _0x427e39[_0x446401]) {
              _0x427e39.splice(_0x446401, 0x1);
            } else {
              ++_0x446401;
            }
          }
          return _0xb2a47a + _0x427e39.join('/');
        };
        _0x149cdd.resolve = function (_0x5f194a, _0x360711, _0x635fc2) {
          if (!_0x635fc2) {
            _0x360711 = _0x46d836(_0x360711);
          }
          return _0x2cdba3(_0x360711) ? _0x360711 : (_0x635fc2 || (_0x5f194a = _0x46d836(_0x5f194a)), (_0x5f194a = _0x5f194a.replace(/(?:\/|^)[^/]+$/, '')).length ? _0x46d836(_0x5f194a + '/' + _0x360711) : _0x360711);
        };
        _0x3b5501.exports;
      }, {});
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/types.js", function (_0x2e12fb, _0x5e6166, _0x5dc127, _0x1e9a93, _0x532e87) {
        var _0x5a783d = _0x5e6166('./util');
        var _0x558835 = ['double', "float", 'int32', "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", 'sint64', "fixed64", "sfixed64", 'bool', "string", 'bytes'];
        function _0x45fe8a(_0x5b1942, _0x2d554b) {
          var _0x19d6ae = 0x0;
          var _0x15f2ff = {};
          for (_0x2d554b |= 0x0; _0x19d6ae < _0x5b1942.length;) {
            _0x15f2ff[_0x558835[_0x19d6ae + _0x2d554b]] = _0x5b1942[_0x19d6ae++];
          }
          return _0x15f2ff;
        }
        _0x2e12fb.basic = _0x45fe8a([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2, 0x2]);
        _0x2e12fb.defaults = _0x45fe8a([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, false, '', _0x5a783d.emptyArray, null]);
        _0x2e12fb.long = _0x45fe8a([0x0, 0x0, 0x0, 0x1, 0x1], 0x7);
        _0x2e12fb.mapKey = _0x45fe8a([0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2], 0x2);
        _0x2e12fb.packed = _0x45fe8a([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0]);
        _0x5dc127.exports;
      }, function () {
        return {
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/field.js", function (_0x7bddc, _0x4d1fbf, _0x4bcf8e, _0x509c6e, _0x318e72) {
        _0x4bcf8e.exports = _0x4b6976;
        var _0xf18575 = _0x4d1fbf('./object');
        ((_0x4b6976.prototype = Object.create(_0xf18575.prototype)).constructor = _0x4b6976).className = 'Field';
        var _0x16d8a8;
        var _0x301b66 = _0x4d1fbf('./enum');
        var _0x3d148f = _0x4d1fbf('./types');
        var _0xc1c745 = _0x4d1fbf("./util");
        var _0x23c192 = /^required|optional|repeated$/;
        function _0x4b6976(_0x879cd1, _0x2beea2, _0x1471c2, _0x183b8f, _0x2a1564, _0x2c6fc7, _0x17d0ba) {
          if (_0xc1c745.isObject(_0x183b8f)) {
            _0x17d0ba = _0x2a1564;
            _0x2c6fc7 = _0x183b8f;
            _0x183b8f = _0x2a1564 = undefined;
          } else if (_0xc1c745.isObject(_0x2a1564)) {
            _0x17d0ba = _0x2c6fc7;
            _0x2c6fc7 = _0x2a1564;
            _0x2a1564 = undefined;
          }
          _0xf18575.call(this, _0x879cd1, _0x2c6fc7);
          if (!_0xc1c745.isInteger(_0x2beea2) || _0x2beea2 < 0x0) {
            throw TypeError("id must be a non-negative integer");
          }
          if (!_0xc1c745.isString(_0x1471c2)) {
            throw TypeError("type must be a string");
          }
          if (undefined !== _0x183b8f && !_0x23c192.test(_0x183b8f = _0x183b8f.toString().toLowerCase())) {
            throw TypeError("rule must be a string rule");
          }
          if (undefined !== _0x2a1564 && !_0xc1c745.isString(_0x2a1564)) {
            throw TypeError("extend must be a string");
          }
          if ('proto3_optional' === _0x183b8f) {
            _0x183b8f = "optional";
          }
          this.rule = _0x183b8f && "optional" !== _0x183b8f ? _0x183b8f : undefined;
          this.type = _0x1471c2;
          this.id = _0x2beea2;
          this.extend = _0x2a1564 || undefined;
          this.required = "required" === _0x183b8f;
          this.optional = !this.required;
          this.repeated = "repeated" === _0x183b8f;
          this.map = false;
          this.message = null;
          this.partOf = null;
          this.typeDefault = null;
          this.defaultValue = null;
          this.long = !!_0xc1c745.Long && undefined !== _0x3d148f.long[_0x1471c2];
          this.bytes = 'bytes' === _0x1471c2;
          this.resolvedType = null;
          this.extensionField = null;
          this.declaringField = null;
          this._packed = null;
          this.comment = _0x17d0ba;
        }
        _0x4b6976.fromJSON = function (_0x585e55, _0x4bea37) {
          return new _0x4b6976(_0x585e55, _0x4bea37.id, _0x4bea37.type, _0x4bea37.rule, _0x4bea37.extend, _0x4bea37.options, _0x4bea37.comment);
        };
        Object.defineProperty(_0x4b6976.prototype, "packed", {
          'get': function () {
            if (null === this._packed) {
              this._packed = false !== this.getOption("packed");
            }
            return this._packed;
          }
        });
        _0x4b6976.prototype.setOption = function (_0x16655e, _0xaa65b6, _0x268bfc) {
          if ("packed" === _0x16655e) {
            this._packed = null;
          }
          return _0xf18575.prototype.setOption.call(this, _0x16655e, _0xaa65b6, _0x268bfc);
        };
        _0x4b6976.prototype.toJSON = function (_0x4b5708) {
          var _0x4635c4 = !!_0x4b5708 && Boolean(_0x4b5708.keepComments);
          return _0xc1c745.toObject(["rule", 'optional' !== this.rule && this.rule || undefined, "type", this.type, 'id', this.id, 'extend', this.extend, "options", this.options, "comment", _0x4635c4 ? this.comment : undefined]);
        };
        _0x4b6976.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === (this.typeDefault = _0x3d148f.defaults[this.type])) {
            this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
            if (this.resolvedType instanceof _0x16d8a8) {
              this.typeDefault = null;
            } else {
              this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0x0]];
            }
          } else if (this.options && this.options.proto3_optional) {
            this.typeDefault = null;
          }
          if (this.options && null != this.options["default"]) {
            this.typeDefault = this.options['default'];
            if (this.resolvedType instanceof _0x301b66 && "string" == typeof this.typeDefault) {
              this.typeDefault = this.resolvedType.values[this.typeDefault];
            }
          }
          if (this.options) {
            if (!(true !== this.options.packed && (undefined === this.options.packed || !this.resolvedType || this.resolvedType instanceof _0x301b66))) {
              delete this.options.packed;
            }
            if (!Object.keys(this.options).length) {
              this.options = undefined;
            }
          }
          if (this.long) {
            this.typeDefault = _0xc1c745.Long.fromNumber(this.typeDefault, 'u' === this.type.charAt(0x0));
            if (Object.freeze) {
              Object.freeze(this.typeDefault);
            }
          } else {
            if (this.bytes && "string" == typeof this.typeDefault) {
              var _0x4f4c14;
              if (_0xc1c745.base64.test(this.typeDefault)) {
                _0xc1c745.base64.decode(this.typeDefault, _0x4f4c14 = _0xc1c745.newBuffer(_0xc1c745.base64.length(this.typeDefault)), 0x0);
              } else {
                _0xc1c745.utf8.write(this.typeDefault, _0x4f4c14 = _0xc1c745.newBuffer(_0xc1c745.utf8.length(this.typeDefault)), 0x0);
              }
              this.typeDefault = _0x4f4c14;
            }
          }
          if (this.map) {
            this.defaultValue = _0xc1c745.emptyObject;
          } else if (this.repeated) {
            this.defaultValue = _0xc1c745.emptyArray;
          } else {
            this.defaultValue = this.typeDefault;
          }
          if (this.parent instanceof _0x16d8a8) {
            this.parent.ctor.prototype[this.name] = this.defaultValue;
          }
          return _0xf18575.prototype.resolve.call(this);
        };
        _0x4b6976.d = function (_0x456774, _0x4becf1, _0x4eec20, _0x5584f7) {
          if ("function" == typeof _0x4becf1) {
            _0x4becf1 = _0xc1c745.decorateType(_0x4becf1).name;
          } else if (_0x4becf1 && 'object' == typeof _0x4becf1) {
            _0x4becf1 = _0xc1c745.decorateEnum(_0x4becf1).name;
          }
          return function (_0x849e63, _0x4e43f8) {
            _0xc1c745.decorateType(_0x849e63.constructor).add(new _0x4b6976(_0x4e43f8, _0x456774, _0x4becf1, _0x4eec20, {
              'default': _0x5584f7
            }));
          };
        };
        _0x4b6976._configure = function (_0x155cc4) {
          _0x16d8a8 = _0x155cc4;
        };
        _0x4bcf8e.exports;
      }, function () {
        return {
          './object': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/object.js',
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js", function (_0x6d876d, _0x2c6510, _0x2b67ff, _0x55fccc, _0x283d9e) {
        _0x2b67ff.exports = _0x39f923;
        var _0xda0ede = _0x2c6510("./object");
        ((_0x39f923.prototype = Object.create(_0xda0ede.prototype)).constructor = _0x39f923).className = 'OneOf';
        var _0x2ae1ce = _0x2c6510("./field");
        var _0x24ef8a = _0x2c6510("./util");
        function _0x39f923(_0x29472d, _0x510a86, _0x5b103c, _0x450211) {
          if (!Array.isArray(_0x510a86)) {
            _0x5b103c = _0x510a86;
            _0x510a86 = undefined;
          }
          _0xda0ede.call(this, _0x29472d, _0x5b103c);
          if (undefined !== _0x510a86 && !Array.isArray(_0x510a86)) {
            throw TypeError("fieldNames must be an Array");
          }
          this.oneof = _0x510a86 || [];
          this.fieldsArray = [];
          this.comment = _0x450211;
        }
        function _0x4e6e00(_0x3ce43a) {
          if (_0x3ce43a.parent) {
            for (var _0x5bac5f = 0x0; _0x5bac5f < _0x3ce43a.fieldsArray.length; ++_0x5bac5f) {
              if (!_0x3ce43a.fieldsArray[_0x5bac5f].parent) {
                _0x3ce43a.parent.add(_0x3ce43a.fieldsArray[_0x5bac5f]);
              }
            }
          }
        }
        _0x39f923.fromJSON = function (_0x2017f0, _0x253619) {
          return new _0x39f923(_0x2017f0, _0x253619.oneof, _0x253619.options, _0x253619.comment);
        };
        _0x39f923.prototype.toJSON = function (_0x3010de) {
          var _0x33a158 = !!_0x3010de && Boolean(_0x3010de.keepComments);
          return _0x24ef8a.toObject(['options', this.options, 'oneof', this.oneof, "comment", _0x33a158 ? this.comment : undefined]);
        };
        _0x39f923.prototype.add = function (_0x4bd557) {
          if (!(_0x4bd557 instanceof _0x2ae1ce)) {
            throw TypeError("field must be a Field");
          }
          if (_0x4bd557.parent && _0x4bd557.parent !== this.parent) {
            _0x4bd557.parent.remove(_0x4bd557);
          }
          this.oneof.push(_0x4bd557.name);
          this.fieldsArray.push(_0x4bd557);
          _0x4bd557.partOf = this;
          _0x4e6e00(this);
          return this;
        };
        _0x39f923.prototype.remove = function (_0x117250) {
          if (!(_0x117250 instanceof _0x2ae1ce)) {
            throw TypeError("field must be a Field");
          }
          var _0x590b5d = this.fieldsArray.indexOf(_0x117250);
          if (_0x590b5d < 0x0) {
            throw Error(_0x117250 + " is not a member of " + this);
          }
          this.fieldsArray.splice(_0x590b5d, 0x1);
          if ((_0x590b5d = this.oneof.indexOf(_0x117250.name)) > -0x1) {
            this.oneof.splice(_0x590b5d, 0x1);
          }
          _0x117250.partOf = null;
          return this;
        };
        _0x39f923.prototype.onAdd = function (_0x405df6) {
          _0xda0ede.prototype.onAdd.call(this, _0x405df6);
          for (var _0x472d33 = 0x0; _0x472d33 < this.oneof.length; ++_0x472d33) {
            var _0x3fda7d = _0x405df6.get(this.oneof[_0x472d33]);
            if (_0x3fda7d && !_0x3fda7d.partOf) {
              _0x3fda7d.partOf = this;
              this.fieldsArray.push(_0x3fda7d);
            }
          }
          _0x4e6e00(this);
        };
        _0x39f923.prototype.onRemove = function (_0x3e31fa) {
          var _0x128623;
          for (var _0xcc733b = 0x0; _0xcc733b < this.fieldsArray.length; ++_0xcc733b) {
            if ((_0x128623 = this.fieldsArray[_0xcc733b]).parent) {
              _0x128623.parent.remove(_0x128623);
            }
          }
          _0xda0ede.prototype.onRemove.call(this, _0x3e31fa);
        };
        _0x39f923.d = function () {
          var _0x301422 = new Array(arguments.length);
          for (var _0x5c3ed7 = 0x0; _0x5c3ed7 < arguments.length;) {
            _0x301422[_0x5c3ed7] = arguments[_0x5c3ed7++];
          }
          return function (_0x1f57ef, _0x3c6f3e) {
            _0x24ef8a.decorateType(_0x1f57ef.constructor).add(new _0x39f923(_0x3c6f3e, _0x301422));
            Object.defineProperty(_0x1f57ef, _0x3c6f3e, {
              'get': _0x24ef8a.oneOfGetter(_0x301422),
              'set': _0x24ef8a.oneOfSetter(_0x301422)
            });
          };
        };
        _0x2b67ff.exports;
      }, function () {
        return {
          './object': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/object.js',
          './field': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js", function (_0x5de7cb, _0x4606dc, _0x4f4b76, _0x298ff5, _0x343531) {
        _0x4f4b76.exports = _0x2523d8;
        var _0x27c61e = _0x4606dc("./object");
        ((_0x2523d8.prototype = Object.create(_0x27c61e.prototype)).constructor = _0x2523d8).className = "Namespace";
        var _0x47d532;
        var _0x5e8fd4;
        var _0x274856;
        var _0x179552 = _0x4606dc("./field");
        var _0x5e4dd0 = _0x4606dc("./util");
        var _0x4c8e48 = _0x4606dc("./oneof");
        function _0x22bacd(_0x289502, _0x46f796) {
          if (_0x289502 && _0x289502.length) {
            var _0x4241e8 = {};
            for (var _0x63b3e = 0x0; _0x63b3e < _0x289502.length; ++_0x63b3e) {
              _0x4241e8[_0x289502[_0x63b3e].name] = _0x289502[_0x63b3e].toJSON(_0x46f796);
            }
            return _0x4241e8;
          }
        }
        function _0x2523d8(_0x3b3388, _0x190814) {
          _0x27c61e.call(this, _0x3b3388, _0x190814);
          this.nested = undefined;
          this._nestedArray = null;
        }
        function _0x23669e(_0x51ae4e) {
          _0x51ae4e._nestedArray = null;
          return _0x51ae4e;
        }
        _0x2523d8.fromJSON = function (_0x15a39a, _0x43b6bf) {
          return new _0x2523d8(_0x15a39a, _0x43b6bf.options).addJSON(_0x43b6bf.nested);
        };
        _0x2523d8.arrayToJSON = _0x22bacd;
        _0x2523d8.isReservedId = function (_0x22126b, _0x17fe56) {
          if (_0x22126b) {
            for (var _0x1721a3 = 0x0; _0x1721a3 < _0x22126b.length; ++_0x1721a3) {
              if ("string" != typeof _0x22126b[_0x1721a3] && _0x22126b[_0x1721a3][0x0] <= _0x17fe56 && _0x22126b[_0x1721a3][0x1] > _0x17fe56) {
                return true;
              }
            }
          }
          return false;
        };
        _0x2523d8.isReservedName = function (_0x2a9fa2, _0x5dd72c) {
          if (_0x2a9fa2) {
            for (var _0x4af347 = 0x0; _0x4af347 < _0x2a9fa2.length; ++_0x4af347) {
              if (_0x2a9fa2[_0x4af347] === _0x5dd72c) {
                return true;
              }
            }
          }
          return false;
        };
        Object.defineProperty(_0x2523d8.prototype, "nestedArray", {
          'get': function () {
            return this._nestedArray || (this._nestedArray = _0x5e4dd0.toArray(this.nested));
          }
        });
        _0x2523d8.prototype.toJSON = function (_0x54f9ba) {
          return _0x5e4dd0.toObject(["options", this.options, "nested", _0x22bacd(this.nestedArray, _0x54f9ba)]);
        };
        _0x2523d8.prototype.addJSON = function (_0x2b456d) {
          if (_0x2b456d) {
            var _0x1e18cd;
            var _0x1b2ca2 = Object.keys(_0x2b456d);
            for (var _0x3bafca = 0x0; _0x3bafca < _0x1b2ca2.length; ++_0x3bafca) {
              _0x1e18cd = _0x2b456d[_0x1b2ca2[_0x3bafca]];
              this.add((undefined !== _0x1e18cd.fields ? _0x47d532.fromJSON : undefined !== _0x1e18cd.values ? _0x274856.fromJSON : undefined !== _0x1e18cd.methods ? _0x5e8fd4.fromJSON : undefined !== _0x1e18cd.id ? _0x179552.fromJSON : _0x2523d8.fromJSON)(_0x1b2ca2[_0x3bafca], _0x1e18cd));
            }
          }
          return this;
        };
        _0x2523d8.prototype.get = function (_0x3291eb) {
          return this.nested && this.nested[_0x3291eb] || null;
        };
        _0x2523d8.prototype.getEnum = function (_0x2c4acb) {
          if (this.nested && this.nested[_0x2c4acb] instanceof _0x274856) {
            return this.nested[_0x2c4acb].values;
          }
          throw Error("no such enum: " + _0x2c4acb);
        };
        _0x2523d8.prototype.add = function (_0x3a0253) {
          if (!(_0x3a0253 instanceof _0x179552 && undefined !== _0x3a0253.extend || _0x3a0253 instanceof _0x47d532 || _0x3a0253 instanceof _0x4c8e48 || _0x3a0253 instanceof _0x274856 || _0x3a0253 instanceof _0x5e8fd4 || _0x3a0253 instanceof _0x2523d8)) {
            throw TypeError("object must be a valid nested object");
          }
          if (this.nested) {
            var _0x3bba90 = this.get(_0x3a0253.name);
            if (_0x3bba90) {
              if (!(_0x3bba90 instanceof _0x2523d8 && _0x3a0253 instanceof _0x2523d8) || _0x3bba90 instanceof _0x47d532 || _0x3bba90 instanceof _0x5e8fd4) {
                throw Error("duplicate name '" + _0x3a0253.name + "' in " + this);
              }
              var _0x2db879 = _0x3bba90.nestedArray;
              for (var _0xeb0b81 = 0x0; _0xeb0b81 < _0x2db879.length; ++_0xeb0b81) {
                _0x3a0253.add(_0x2db879[_0xeb0b81]);
              }
              this.remove(_0x3bba90);
              if (!this.nested) {
                this.nested = {};
              }
              _0x3a0253.setOptions(_0x3bba90.options, true);
            }
          } else {
            this.nested = {};
          }
          this.nested[_0x3a0253.name] = _0x3a0253;
          _0x3a0253.onAdd(this);
          return _0x23669e(this);
        };
        _0x2523d8.prototype.remove = function (_0xa8d523) {
          if (!(_0xa8d523 instanceof _0x27c61e)) {
            throw TypeError("object must be a ReflectionObject");
          }
          if (_0xa8d523.parent !== this) {
            throw Error(_0xa8d523 + " is not a member of " + this);
          }
          delete this.nested[_0xa8d523.name];
          if (!Object.keys(this.nested).length) {
            this.nested = undefined;
          }
          _0xa8d523.onRemove(this);
          return _0x23669e(this);
        };
        _0x2523d8.prototype.define = function (_0x5a2c31, _0x58df07) {
          if (_0x5e4dd0.isString(_0x5a2c31)) {
            _0x5a2c31 = _0x5a2c31.split('.');
          } else {
            if (!Array.isArray(_0x5a2c31)) {
              throw TypeError("illegal path");
            }
          }
          if (_0x5a2c31 && _0x5a2c31.length && '' === _0x5a2c31[0x0]) {
            throw Error("path must be relative");
          }
          for (var _0x2af5f5 = this; _0x5a2c31.length > 0x0;) {
            var _0x484853 = _0x5a2c31.shift();
            if (_0x2af5f5.nested && _0x2af5f5.nested[_0x484853]) {
              if (!((_0x2af5f5 = _0x2af5f5.nested[_0x484853]) instanceof _0x2523d8)) {
                throw Error("path conflicts with non-namespace objects");
              }
            } else {
              _0x2af5f5.add(_0x2af5f5 = new _0x2523d8(_0x484853));
            }
          }
          if (_0x58df07) {
            _0x2af5f5.addJSON(_0x58df07);
          }
          return _0x2af5f5;
        };
        _0x2523d8.prototype.resolveAll = function () {
          var _0x2b81d5 = this.nestedArray;
          for (var _0x16b5e8 = 0x0; _0x16b5e8 < _0x2b81d5.length;) {
            if (_0x2b81d5[_0x16b5e8] instanceof _0x2523d8) {
              _0x2b81d5[_0x16b5e8++].resolveAll();
            } else {
              _0x2b81d5[_0x16b5e8++].resolve();
            }
          }
          return this.resolve();
        };
        _0x2523d8.prototype.lookup = function (_0x4ccdf1, _0xd034f1, _0x50f81b) {
          if ("boolean" == typeof _0xd034f1) {
            _0x50f81b = _0xd034f1;
            _0xd034f1 = undefined;
          } else if (_0xd034f1 && !Array.isArray(_0xd034f1)) {
            _0xd034f1 = [_0xd034f1];
          }
          if (_0x5e4dd0.isString(_0x4ccdf1) && _0x4ccdf1.length) {
            if ('.' === _0x4ccdf1) {
              return this.root;
            }
            _0x4ccdf1 = _0x4ccdf1.split('.');
          } else {
            if (!_0x4ccdf1.length) {
              return this;
            }
          }
          if ('' === _0x4ccdf1[0x0]) {
            return this.root.lookup(_0x4ccdf1.slice(0x1), _0xd034f1);
          }
          var _0x482918 = this.get(_0x4ccdf1[0x0]);
          if (_0x482918) {
            if (0x1 === _0x4ccdf1.length) {
              if (!_0xd034f1 || _0xd034f1.indexOf(_0x482918.constructor) > -0x1) {
                return _0x482918;
              }
            } else {
              if (_0x482918 instanceof _0x2523d8 && (_0x482918 = _0x482918.lookup(_0x4ccdf1.slice(0x1), _0xd034f1, true))) {
                return _0x482918;
              }
            }
          } else {
            for (var _0x1d0487 = 0x0; _0x1d0487 < this.nestedArray.length; ++_0x1d0487) {
              if (this._nestedArray[_0x1d0487] instanceof _0x2523d8 && (_0x482918 = this._nestedArray[_0x1d0487].lookup(_0x4ccdf1, _0xd034f1, true))) {
                return _0x482918;
              }
            }
          }
          return null === this.parent || _0x50f81b ? null : this.parent.lookup(_0x4ccdf1, _0xd034f1);
        };
        _0x2523d8.prototype.lookupType = function (_0x3178bb) {
          var _0x1fd7fb = this.lookup(_0x3178bb, [_0x47d532]);
          if (!_0x1fd7fb) {
            throw Error("no such type: " + _0x3178bb);
          }
          return _0x1fd7fb;
        };
        _0x2523d8.prototype.lookupEnum = function (_0x3e22d2) {
          var _0x11d15c = this.lookup(_0x3e22d2, [_0x274856]);
          if (!_0x11d15c) {
            throw Error("no such Enum '" + _0x3e22d2 + "' in " + this);
          }
          return _0x11d15c;
        };
        _0x2523d8.prototype.lookupTypeOrEnum = function (_0x2908bd) {
          var _0x1d3315 = this.lookup(_0x2908bd, [_0x47d532, _0x274856]);
          if (!_0x1d3315) {
            throw Error("no such Type or Enum '" + _0x2908bd + "' in " + this);
          }
          return _0x1d3315;
        };
        _0x2523d8.prototype.lookupService = function (_0x5073e4) {
          var _0xb3fc95 = this.lookup(_0x5073e4, [_0x5e8fd4]);
          if (!_0xb3fc95) {
            throw Error("no such Service '" + _0x5073e4 + "' in " + this);
          }
          return _0xb3fc95;
        };
        _0x2523d8._configure = function (_0x355fd2, _0x41f5e7, _0x3ce716) {
          _0x47d532 = _0x355fd2;
          _0x5e8fd4 = _0x41f5e7;
          _0x274856 = _0x3ce716;
        };
        _0x4f4b76.exports;
      }, function () {
        return {
          './object': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/object.js',
          './field': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './oneof': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js"
        };
      });
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js", function (_0x1b1816, _0x314532, _0x577d87, _0x23bbf9, _0x3e3ee7) {
        _0x577d87.exports = _0x239bbb;
        var _0x289115 = _0x314532('./field');
        ((_0x239bbb.prototype = Object.create(_0x289115.prototype)).constructor = _0x239bbb).className = "MapField";
        var _0x5c85e9 = _0x314532("./types");
        var _0x498b9b = _0x314532('./util');
        function _0x239bbb(_0x4e8188, _0x355689, _0x3041bb, _0x951046, _0x5cf3ed, _0x2a3013) {
          _0x289115.call(this, _0x4e8188, _0x355689, _0x951046, undefined, undefined, _0x5cf3ed, _0x2a3013);
          if (!_0x498b9b.isString(_0x3041bb)) {
            throw TypeError("keyType must be a string");
          }
          this.keyType = _0x3041bb;
          this.resolvedKeyType = null;
          this.map = true;
        }
        _0x239bbb.fromJSON = function (_0x243da1, _0x535f54) {
          return new _0x239bbb(_0x243da1, _0x535f54.id, _0x535f54.keyType, _0x535f54.type, _0x535f54.options, _0x535f54.comment);
        };
        _0x239bbb.prototype.toJSON = function (_0xd7b274) {
          var _0x2fee71 = !!_0xd7b274 && Boolean(_0xd7b274.keepComments);
          return _0x498b9b.toObject(["keyType", this.keyType, 'type', this.type, 'id', this.id, "extend", this.extend, "options", this.options, "comment", _0x2fee71 ? this.comment : undefined]);
        };
        _0x239bbb.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === _0x5c85e9.mapKey[this.keyType]) {
            throw Error("invalid key type: " + this.keyType);
          }
          return _0x289115.prototype.resolve.call(this);
        };
        _0x239bbb.d = function (_0x3d6985, _0x1d897e, _0x45c8f8) {
          if ("function" == typeof _0x45c8f8) {
            _0x45c8f8 = _0x498b9b.decorateType(_0x45c8f8).name;
          } else if (_0x45c8f8 && "object" == typeof _0x45c8f8) {
            _0x45c8f8 = _0x498b9b.decorateEnum(_0x45c8f8).name;
          }
          return function (_0x774d08, _0x33935f) {
            _0x498b9b.decorateType(_0x774d08.constructor).add(new _0x239bbb(_0x33935f, _0x3d6985, _0x1d897e, _0x45c8f8));
          };
        };
        _0x577d87.exports;
      }, function () {
        return {
          './field': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './types': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x217aa0.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/method.js', function (_0x34096c, _0x4a9436, _0x357de6, _0x54280f, _0x48510c) {
        _0x357de6.exports = _0x3e74ad;
        var _0x301497 = _0x4a9436('./object');
        ((_0x3e74ad.prototype = Object.create(_0x301497.prototype)).constructor = _0x3e74ad).className = "Method";
        var _0x23bb63 = _0x4a9436("./util");
        function _0x3e74ad(_0x41a3bf, _0x46073f, _0x2dfa55, _0x179d54, _0x2f4aef, _0x1ae61f, _0x2ea624, _0x1bb73b, _0x20a064) {
          if (_0x23bb63.isObject(_0x2f4aef)) {
            _0x2ea624 = _0x2f4aef;
            _0x2f4aef = _0x1ae61f = undefined;
          } else if (_0x23bb63.isObject(_0x1ae61f)) {
            _0x2ea624 = _0x1ae61f;
            _0x1ae61f = undefined;
          }
          if (undefined !== _0x46073f && !_0x23bb63.isString(_0x46073f)) {
            throw TypeError("type must be a string");
          }
          if (!_0x23bb63.isString(_0x2dfa55)) {
            throw TypeError("requestType must be a string");
          }
          if (!_0x23bb63.isString(_0x179d54)) {
            throw TypeError("responseType must be a string");
          }
          _0x301497.call(this, _0x41a3bf, _0x2ea624);
          this.type = _0x46073f || "rpc";
          this.requestType = _0x2dfa55;
          this.requestStream = !!_0x2f4aef || undefined;
          this.responseType = _0x179d54;
          this.responseStream = !!_0x1ae61f || undefined;
          this.resolvedRequestType = null;
          this.resolvedResponseType = null;
          this.comment = _0x1bb73b;
          this.parsedOptions = _0x20a064;
        }
        _0x3e74ad.fromJSON = function (_0x3148ff, _0x2fa640) {
          return new _0x3e74ad(_0x3148ff, _0x2fa640.type, _0x2fa640.requestType, _0x2fa640.responseType, _0x2fa640.requestStream, _0x2fa640.responseStream, _0x2fa640.options, _0x2fa640.comment, _0x2fa640.parsedOptions);
        };
        _0x3e74ad.prototype.toJSON = function (_0x130e14) {
          var _0x2dbed9 = !!_0x130e14 && Boolean(_0x130e14.keepComments);
          return _0x23bb63.toObject(["type", "rpc" !== this.type && this.type || undefined, 'requestType', this.requestType, 'requestStream', this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", _0x2dbed9 ? this.comment : undefined, "parsedOptions", this.parsedOptions]);
        };
        _0x3e74ad.prototype.resolve = function () {
          return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), _0x301497.prototype.resolve.call(this));
        };
        _0x357de6.exports;
      }, function () {
        return {
          './object': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/object.js',
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/service.js", function (_0x256d3d, _0x3f4852, _0x3ff518, _0x1a5d63, _0x50af9e) {
        _0x3ff518.exports = _0x4db7fe;
        var _0x33fffb = _0x3f4852("./namespace");
        ((_0x4db7fe.prototype = Object.create(_0x33fffb.prototype)).constructor = _0x4db7fe).className = "Service";
        var _0x1315c4 = _0x3f4852("./method");
        var _0x5cebe6 = _0x3f4852("./util");
        var _0x6ec30b = _0x3f4852('./rpc');
        function _0x4db7fe(_0x437103, _0x6fb5b9) {
          _0x33fffb.call(this, _0x437103, _0x6fb5b9);
          this.methods = {};
          this._methodsArray = null;
        }
        function _0x2378f4(_0x3fe521) {
          _0x3fe521._methodsArray = null;
          return _0x3fe521;
        }
        _0x4db7fe.fromJSON = function (_0x34f669, _0x1b7215) {
          var _0x44545a = new _0x4db7fe(_0x34f669, _0x1b7215.options);
          if (_0x1b7215.methods) {
            var _0x60c68c = Object.keys(_0x1b7215.methods);
            for (var _0x4bcc89 = 0x0; _0x4bcc89 < _0x60c68c.length; ++_0x4bcc89) {
              _0x44545a.add(_0x1315c4.fromJSON(_0x60c68c[_0x4bcc89], _0x1b7215.methods[_0x60c68c[_0x4bcc89]]));
            }
          }
          if (_0x1b7215.nested) {
            _0x44545a.addJSON(_0x1b7215.nested);
          }
          _0x44545a.comment = _0x1b7215.comment;
          return _0x44545a;
        };
        _0x4db7fe.prototype.toJSON = function (_0x2b9598) {
          var _0x540c8e = _0x33fffb.prototype.toJSON.call(this, _0x2b9598);
          var _0x434b09 = !!_0x2b9598 && Boolean(_0x2b9598.keepComments);
          return _0x5cebe6.toObject(["options", _0x540c8e && _0x540c8e.options || undefined, "methods", _0x33fffb.arrayToJSON(this.methodsArray, _0x2b9598) || {}, "nested", _0x540c8e && _0x540c8e.nested || undefined, "comment", _0x434b09 ? this.comment : undefined]);
        };
        Object.defineProperty(_0x4db7fe.prototype, "methodsArray", {
          'get': function () {
            return this._methodsArray || (this._methodsArray = _0x5cebe6.toArray(this.methods));
          }
        });
        _0x4db7fe.prototype.get = function (_0x38cb97) {
          return this.methods[_0x38cb97] || _0x33fffb.prototype.get.call(this, _0x38cb97);
        };
        _0x4db7fe.prototype.resolveAll = function () {
          var _0x31ebb5 = this.methodsArray;
          for (var _0x5652fd = 0x0; _0x5652fd < _0x31ebb5.length; ++_0x5652fd) {
            _0x31ebb5[_0x5652fd].resolve();
          }
          return _0x33fffb.prototype.resolve.call(this);
        };
        _0x4db7fe.prototype.add = function (_0x58c00d) {
          if (this.get(_0x58c00d.name)) {
            throw Error("duplicate name '" + _0x58c00d.name + "' in " + this);
          }
          return _0x58c00d instanceof _0x1315c4 ? (this.methods[_0x58c00d.name] = _0x58c00d, _0x58c00d.parent = this, _0x2378f4(this)) : _0x33fffb.prototype.add.call(this, _0x58c00d);
        };
        _0x4db7fe.prototype.remove = function (_0x2b760a) {
          if (_0x2b760a instanceof _0x1315c4) {
            if (this.methods[_0x2b760a.name] !== _0x2b760a) {
              throw Error(_0x2b760a + " is not a member of " + this);
            }
            delete this.methods[_0x2b760a.name];
            _0x2b760a.parent = null;
            return _0x2378f4(this);
          }
          return _0x33fffb.prototype.remove.call(this, _0x2b760a);
        };
        _0x4db7fe.prototype.create = function (_0x4d5000, _0x57bcc1, _0x2a642d) {
          var _0x2c14ef;
          var _0x301fe5 = new _0x6ec30b.Service(_0x4d5000, _0x57bcc1, _0x2a642d);
          for (var _0x541db5 = 0x0; _0x541db5 < this.methodsArray.length; ++_0x541db5) {
            var _0x3a740c = _0x5cebe6.lcFirst((_0x2c14ef = this._methodsArray[_0x541db5]).resolve().name).replace(/[^$\w_]/g, '');
            _0x301fe5[_0x3a740c] = _0x5cebe6.codegen(['r', 'c'], _0x5cebe6.isReserved(_0x3a740c) ? _0x3a740c + '_' : _0x3a740c)("return this.rpcCall(m,q,s,r,c)")({
              'm': _0x2c14ef,
              'q': _0x2c14ef.resolvedRequestType.ctor,
              's': _0x2c14ef.resolvedResponseType.ctor
            });
          }
          return _0x301fe5;
        };
        _0x3ff518.exports;
      }, function () {
        return {
          './namespace': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './method': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/method.js',
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './rpc': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js'
        };
      });
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/message.js", function (_0x8565fa, _0x561c32, _0x22c9fb, _0x23880b, _0x21f479) {
        _0x22c9fb.exports = _0x48115a;
        var _0x3720aa = _0x561c32("./util/minimal");
        function _0x48115a(_0x24b217) {
          if (_0x24b217) {
            var _0x1a514e = Object.keys(_0x24b217);
            for (var _0x339aad = 0x0; _0x339aad < _0x1a514e.length; ++_0x339aad) {
              this[_0x1a514e[_0x339aad]] = _0x24b217[_0x1a514e[_0x339aad]];
            }
          }
        }
        _0x48115a.create = function (_0x1b2a02) {
          return this.$type.create(_0x1b2a02);
        };
        _0x48115a.encode = function (_0x913629, _0x5288d5) {
          return this.$type.encode(_0x913629, _0x5288d5);
        };
        _0x48115a.encodeDelimited = function (_0x3989af, _0x1f42bb) {
          return this.$type.encodeDelimited(_0x3989af, _0x1f42bb);
        };
        _0x48115a.decode = function (_0x1c7fd6) {
          return this.$type.decode(_0x1c7fd6);
        };
        _0x48115a.decodeDelimited = function (_0xfcc2c8) {
          return this.$type.decodeDelimited(_0xfcc2c8);
        };
        _0x48115a.verify = function (_0x58ef09) {
          return this.$type.verify(_0x58ef09);
        };
        _0x48115a.fromObject = function (_0x7d88f1) {
          return this.$type.fromObject(_0x7d88f1);
        };
        _0x48115a.toObject = function (_0x505850, _0x3a6efa) {
          return this.$type.toObject(_0x505850, _0x3a6efa);
        };
        _0x48115a.prototype.toJSON = function () {
          return this.$type.toObject(this, _0x3720aa.toJSONOptions);
        };
        _0x22c9fb.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x217aa0.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js', function (_0x452232, _0x29b3cd, _0x10cd35, _0x479779, _0x28f042) {
        _0x10cd35.exports = function (_0x2ba29f) {
          var _0x323e39 = _0x463d7e.codegen(['r', 'l'], _0x2ba29f.name + '$decode')("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (_0x2ba29f.fieldsArray.filter(function (_0x3b023d) {
            return _0x3b023d.map;
          }).length ? ",k,value" : ''))("while(r.pos<c){")("var t=r.uint32()");
          if (_0x2ba29f.group) {
            _0x323e39("if((t&7)===4)")("break");
          }
          _0x323e39('switch(t>>>3){');
          for (var _0x47cf6b = 0x0; _0x47cf6b < _0x2ba29f.fieldsArray.length; ++_0x47cf6b) {
            var _0x2c66ce = _0x2ba29f._fieldsArray[_0x47cf6b].resolve();
            var _0x4f4804 = _0x2c66ce.resolvedType instanceof _0x28edea ? 'int32' : _0x2c66ce.type;
            var _0x1ab574 = 'm' + _0x463d7e.safeProp(_0x2c66ce.name);
            _0x323e39("case %i: {", _0x2c66ce.id);
            if (_0x2c66ce.map) {
              _0x323e39("if(%s===util.emptyObject)", _0x1ab574)('%s={}', _0x1ab574)("var c2 = r.uint32()+r.pos");
              if (undefined !== _0x3334c5.defaults[_0x2c66ce.keyType]) {
                _0x323e39('k=%j', _0x3334c5.defaults[_0x2c66ce.keyType]);
              } else {
                _0x323e39("k=null");
              }
              if (undefined !== _0x3334c5.defaults[_0x4f4804]) {
                _0x323e39("value=%j", _0x3334c5.defaults[_0x4f4804]);
              } else {
                _0x323e39('value=null');
              }
              _0x323e39("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", _0x2c66ce.keyType)("case 2:");
              if (undefined === _0x3334c5.basic[_0x4f4804]) {
                _0x323e39("value=types[%i].decode(r,r.uint32())", _0x47cf6b);
              } else {
                _0x323e39("value=r.%s()", _0x4f4804);
              }
              _0x323e39("break")("default:")('r.skipType(tag2&7)')("break")('}')('}');
              if (undefined !== _0x3334c5.long[_0x2c66ce.keyType]) {
                _0x323e39("%s[typeof k===\"object\"?util.longToHash(k):k]=value", _0x1ab574);
              } else {
                _0x323e39("%s[k]=value", _0x1ab574);
              }
            } else if (_0x2c66ce.repeated) {
              _0x323e39('if(!(%s&&%s.length))', _0x1ab574, _0x1ab574)("%s=[]", _0x1ab574);
              if (undefined !== _0x3334c5.packed[_0x4f4804]) {
                _0x323e39("if((t&7)===2){")("var c2=r.uint32()+r.pos")('while(r.pos<c2)')("%s.push(r.%s())", _0x1ab574, _0x4f4804)('}else');
              }
              if (undefined === _0x3334c5.basic[_0x4f4804]) {
                _0x323e39(_0x2c66ce.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", _0x1ab574, _0x47cf6b);
              } else {
                _0x323e39("%s.push(r.%s())", _0x1ab574, _0x4f4804);
              }
            } else if (undefined === _0x3334c5.basic[_0x4f4804]) {
              _0x323e39(_0x2c66ce.resolvedType.group ? "%s=types[%i].decode(r)" : '%s=types[%i].decode(r,r.uint32())', _0x1ab574, _0x47cf6b);
            } else {
              _0x323e39("%s=r.%s()", _0x1ab574, _0x4f4804);
            }
            _0x323e39("break")('}');
          }
          _0x323e39('default:')("r.skipType(t&7)")("break")('}')('}');
          for (_0x47cf6b = 0x0; _0x47cf6b < _0x2ba29f._fieldsArray.length; ++_0x47cf6b) {
            var _0x159934 = _0x2ba29f._fieldsArray[_0x47cf6b];
            if (_0x159934.required) {
              _0x323e39("if(!m.hasOwnProperty(%j))", _0x159934.name)("throw util.ProtocolError(%j,{instance:m})", "missing required '" + _0x159934.name + "'");
            }
          }
          return _0x323e39("return m");
        };
        var _0x28edea = _0x29b3cd("./enum");
        var _0x3334c5 = _0x29b3cd("./types");
        var _0x463d7e = _0x29b3cd("./util");
        _0x10cd35.exports;
      }, function () {
        return {
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js", function (_0x4a9194, _0x48881d, _0xcc24f1, _0x5ddad4, _0x419897) {
        _0xcc24f1.exports = function (_0x103d6e) {
          var _0x3cdf99 = _0x535a37.codegen(['m'], _0x103d6e.name + "$verify")("if(typeof m!==\"object\"||m===null)")("return%j", "object expected");
          var _0x20e057 = _0x103d6e.oneofsArray;
          var _0xca6490 = {};
          if (_0x20e057.length) {
            _0x3cdf99("var p={}");
          }
          for (var _0x5e8a47 = 0x0; _0x5e8a47 < _0x103d6e.fieldsArray.length; ++_0x5e8a47) {
            var _0x2e1cf0 = _0x103d6e._fieldsArray[_0x5e8a47].resolve();
            var _0x5a0d00 = 'm' + _0x535a37.safeProp(_0x2e1cf0.name);
            if (_0x2e1cf0.optional) {
              _0x3cdf99("if(%s!=null&&m.hasOwnProperty(%j)){", _0x5a0d00, _0x2e1cf0.name);
            }
            if (_0x2e1cf0.map) {
              _0x3cdf99("if(!util.isObject(%s))", _0x5a0d00)('return%j', _0x2e1cf0.name + ": " + _0x5c93(0xf9e) + (_0x2e1cf0.repeated && "array" !== _0x5c93(0xf9e) ? '[]' : _0x2e1cf0.map && false ? "{k:" + _0x2e1cf0.keyType + '}' : '') + " expected")("var k=Object.keys(%s)", _0x5a0d00)("for(var i=0;i<k.length;++i){");
              _0x4ef69c(_0x3cdf99, _0x2e1cf0, "k[i]");
              _0x1c2ff9(_0x3cdf99, _0x2e1cf0, _0x5e8a47, _0x5a0d00 + "[k[i]]")('}');
            } else {
              if (_0x2e1cf0.repeated) {
                _0x3cdf99('if(!Array.isArray(%s))', _0x5a0d00)("return%j", _0x2e1cf0.name + ": " + _0x5c93(0xe2f) + (_0x2e1cf0.repeated && "array" !== _0x5c93(0xe2f) ? '[]' : _0x2e1cf0.map && true ? "{k:" + _0x2e1cf0.keyType + '}' : '') + " expected")("for(var i=0;i<%s.length;++i){", _0x5a0d00);
                _0x1c2ff9(_0x3cdf99, _0x2e1cf0, _0x5e8a47, _0x5a0d00 + '[i]')('}');
              } else {
                if (_0x2e1cf0.partOf) {
                  var _0x112c38 = _0x535a37.safeProp(_0x2e1cf0.partOf.name);
                  if (0x1 === _0xca6490[_0x2e1cf0.partOf.name]) {
                    _0x3cdf99("if(p%s===1)", _0x112c38)("return%j", _0x2e1cf0.partOf.name + ": multiple values");
                  }
                  _0xca6490[_0x2e1cf0.partOf.name] = 0x1;
                  _0x3cdf99("p%s=1", _0x112c38);
                }
                _0x1c2ff9(_0x3cdf99, _0x2e1cf0, _0x5e8a47, _0x5a0d00);
              }
            }
            if (_0x2e1cf0.optional) {
              _0x3cdf99('}');
            }
          }
          return _0x3cdf99("return null");
        };
        var _0x4c4cf4 = _0x48881d("./enum");
        var _0x535a37 = _0x48881d("./util");
        function _0x1c2ff9(_0x3e6e81, _0x565e26, _0x192b0f, _0xd4c1de) {
          if (_0x565e26.resolvedType) {
            if (_0x565e26.resolvedType instanceof _0x4c4cf4) {
              _0x3e6e81("switch(%s){", _0xd4c1de)('default:')("return%j", _0x565e26.name + ": " + "enum value" + (_0x565e26.repeated && true ? '[]' : _0x565e26.map && true ? "{k:" + _0x565e26.keyType + '}' : '') + " expected");
              var _0x43e567 = Object.keys(_0x565e26.resolvedType.values);
              for (var _0x37334c = 0x0; _0x37334c < _0x43e567.length; ++_0x37334c) {
                _0x3e6e81("case %i:", _0x565e26.resolvedType.values[_0x43e567[_0x37334c]]);
              }
              _0x3e6e81("break")('}');
            } else {
              _0x3e6e81('{')("var e=types[%i].verify(%s);", _0x192b0f, _0xd4c1de)("if(e)")("return%j+e", _0x565e26.name + '.')('}');
            }
          } else {
            switch (_0x565e26.type) {
              case "int32":
              case "uint32":
              case 'sint32':
              case "fixed32":
              case 'sfixed32':
                _0x3e6e81("if(!util.isInteger(%s))", _0xd4c1de)("return%j", _0x565e26.name + ": " + _0x5c93(0xc71) + (_0x565e26.repeated && "array" !== _0x5c93(0xc71) ? '[]' : _0x565e26.map && true ? "{k:" + _0x565e26.keyType + '}' : '') + " expected");
                break;
              case "int64":
              case "uint64":
              case 'sint64':
              case "fixed64":
              case 'sfixed64':
                _0x3e6e81("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", _0xd4c1de, _0xd4c1de, _0xd4c1de, _0xd4c1de)("return%j", _0x565e26.name + ": " + _0x5c93(0x259) + (_0x565e26.repeated && "array" !== _0x5c93(0x259) ? '[]' : _0x565e26.map && true ? "{k:" + _0x565e26.keyType + '}' : '') + " expected");
                break;
              case "float":
              case 'double':
                _0x3e6e81("if(typeof %s!==\"number\")", _0xd4c1de)("return%j", _0x565e26.name + ": " + _0x5c93(0x3b3) + (_0x565e26.repeated && "array" !== _0x5c93(0x3b3) ? '[]' : _0x565e26.map && true ? "{k:" + _0x565e26.keyType + '}' : '') + " expected");
                break;
              case "bool":
                _0x3e6e81("if(typeof %s!==\"boolean\")", _0xd4c1de)("return%j", _0x565e26.name + ": " + 'boolean' + (_0x565e26.repeated && true ? '[]' : _0x565e26.map && true ? "{k:" + _0x565e26.keyType + '}' : '') + " expected");
                break;
              case "string":
                _0x3e6e81('if(!util.isString(%s))', _0xd4c1de)("return%j", _0x565e26.name + ": " + _0x5c93(0x7f2) + (_0x565e26.repeated && "array" !== _0x5c93(0x7f2) ? '[]' : _0x565e26.map && true ? "{k:" + _0x565e26.keyType + '}' : '') + " expected");
                break;
              case "bytes":
                _0x3e6e81("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", _0xd4c1de, _0xd4c1de, _0xd4c1de)("return%j", _0x565e26.name + ": " + _0x5c93(0x28f) + (_0x565e26.repeated && "array" !== _0x5c93(0x28f) ? '[]' : _0x565e26.map && true ? "{k:" + _0x565e26.keyType + '}' : '') + " expected");
            }
          }
          return _0x3e6e81;
        }
        function _0x4ef69c(_0x2c2fee, _0x20f1ae, _0x3409b5) {
          switch (_0x20f1ae.keyType) {
            case "int32":
            case "uint32":
            case 'sint32':
            case 'fixed32':
            case "sfixed32":
              _0x2c2fee('if(!util.key32Re.test(%s))', _0x3409b5)("return%j", _0x20f1ae.name + ": " + _0x5c93(0x69c) + (_0x20f1ae.repeated && "array" !== _0x5c93(0x69c) ? '[]' : _0x20f1ae.map && true ? "{k:" + _0x20f1ae.keyType + '}' : '') + " expected");
              break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case 'sfixed64':
              _0x2c2fee("if(!util.key64Re.test(%s))", _0x3409b5)("return%j", _0x20f1ae.name + ": " + _0x5c93(0x384) + (_0x20f1ae.repeated && "array" !== _0x5c93(0x384) ? '[]' : _0x20f1ae.map && true ? "{k:" + _0x20f1ae.keyType + '}' : '') + " expected");
              break;
            case "bool":
              _0x2c2fee("if(!util.key2Re.test(%s))", _0x3409b5)('return%j', _0x20f1ae.name + ": " + _0x5c93(0xfb8) + (_0x20f1ae.repeated && "array" !== _0x5c93(0xfb8) ? '[]' : _0x20f1ae.map && true ? "{k:" + _0x20f1ae.keyType + '}' : '') + " expected");
          }
          return _0x2c2fee;
        }
        _0xcc24f1.exports;
      }, function () {
        return {
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/converter.js", function (_0xa75105, _0x4adb5f, _0x1a4986, _0x53cad6, _0x463cbc) {
        var _0x5eea96 = _0x4adb5f("./enum");
        var _0x52fd34 = _0x4adb5f("./util");
        function _0x1b01f6(_0x52bae1, _0x3f5bb6, _0x260a90, _0x11a2f2) {
          var _0xc9beb8 = false;
          if (_0x3f5bb6.resolvedType) {
            if (_0x3f5bb6.resolvedType instanceof _0x5eea96) {
              _0x52bae1('switch(d%s){', _0x11a2f2);
              var _0x56dadf = _0x3f5bb6.resolvedType.values;
              var _0x280c00 = Object.keys(_0x56dadf);
              for (var _0x59bf3f = 0x0; _0x59bf3f < _0x280c00.length; ++_0x59bf3f) {
                if (!(_0x56dadf[_0x280c00[_0x59bf3f]] !== _0x3f5bb6.typeDefault || _0xc9beb8)) {
                  _0x52bae1("default:")("if(typeof(d%s)===\"number\"){m%s=d%s;break}", _0x11a2f2, _0x11a2f2, _0x11a2f2);
                  if (!_0x3f5bb6.repeated) {
                    _0x52bae1("break");
                  }
                  _0xc9beb8 = true;
                }
                _0x52bae1("case%j:", _0x280c00[_0x59bf3f])("case %i:", _0x56dadf[_0x280c00[_0x59bf3f]])('m%s=%j', _0x11a2f2, _0x56dadf[_0x280c00[_0x59bf3f]])("break");
              }
              _0x52bae1('}');
            } else {
              _0x52bae1("if(typeof d%s!==\"object\")", _0x11a2f2)("throw TypeError(%j)", _0x3f5bb6.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", _0x11a2f2, _0x260a90, _0x11a2f2);
            }
          } else {
            var _0x20e3d9 = false;
            switch (_0x3f5bb6.type) {
              case "double":
              case 'float':
                _0x52bae1("m%s=Number(d%s)", _0x11a2f2, _0x11a2f2);
                break;
              case "uint32":
              case "fixed32":
                _0x52bae1('m%s=d%s>>>0', _0x11a2f2, _0x11a2f2);
                break;
              case "int32":
              case 'sint32':
              case "sfixed32":
                _0x52bae1("m%s=d%s|0", _0x11a2f2, _0x11a2f2);
                break;
              case "uint64":
                _0x20e3d9 = true;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                _0x52bae1("if(util.Long)")('(m%s=util.Long.fromValue(d%s)).unsigned=%j', _0x11a2f2, _0x11a2f2, _0x20e3d9)("else if(typeof d%s===\"string\")", _0x11a2f2)("m%s=parseInt(d%s,10)", _0x11a2f2, _0x11a2f2)("else if(typeof d%s===\"number\")", _0x11a2f2)("m%s=d%s", _0x11a2f2, _0x11a2f2)("else if(typeof d%s===\"object\")", _0x11a2f2)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", _0x11a2f2, _0x11a2f2, _0x11a2f2, _0x20e3d9 ? 'true' : '');
                break;
              case "bytes":
                _0x52bae1("if(typeof d%s===\"string\")", _0x11a2f2)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", _0x11a2f2, _0x11a2f2, _0x11a2f2)("else if(d%s.length >= 0)", _0x11a2f2)("m%s=d%s", _0x11a2f2, _0x11a2f2);
                break;
              case 'string':
                _0x52bae1("m%s=String(d%s)", _0x11a2f2, _0x11a2f2);
                break;
              case "bool":
                _0x52bae1("m%s=Boolean(d%s)", _0x11a2f2, _0x11a2f2);
            }
          }
          return _0x52bae1;
        }
        function _0x14fb7b(_0x18de8a, _0x2e956f, _0x3e263b, _0x1735e3) {
          if (_0x2e956f.resolvedType) {
            if (_0x2e956f.resolvedType instanceof _0x5eea96) {
              _0x18de8a("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s", _0x1735e3, _0x3e263b, _0x1735e3, _0x1735e3, _0x3e263b, _0x1735e3, _0x1735e3);
            } else {
              _0x18de8a("d%s=types[%i].toObject(m%s,o)", _0x1735e3, _0x3e263b, _0x1735e3);
            }
          } else {
            var _0x6c8471 = false;
            switch (_0x2e956f.type) {
              case "double":
              case "float":
                _0x18de8a("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", _0x1735e3, _0x1735e3, _0x1735e3, _0x1735e3);
                break;
              case 'uint64':
                _0x6c8471 = true;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                _0x18de8a("if(typeof m%s===\"number\")", _0x1735e3)("d%s=o.longs===String?String(m%s):m%s", _0x1735e3, _0x1735e3, _0x1735e3)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", _0x1735e3, _0x1735e3, _0x1735e3, _0x1735e3, _0x6c8471 ? "true" : '', _0x1735e3);
                break;
              case 'bytes':
                _0x18de8a("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", _0x1735e3, _0x1735e3, _0x1735e3, _0x1735e3, _0x1735e3);
                break;
              default:
                _0x18de8a("d%s=m%s", _0x1735e3, _0x1735e3);
            }
          }
          return _0x18de8a;
        }
        _0xa75105.fromObject = function (_0x113bcd) {
          var _0x34bf2c = _0x113bcd.fieldsArray;
          var _0x575ea8 = _0x52fd34.codegen(['d'], _0x113bcd.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
          if (!_0x34bf2c.length) {
            return _0x575ea8("return new this.ctor");
          }
          _0x575ea8("var m=new this.ctor");
          for (var _0x47dd35 = 0x0; _0x47dd35 < _0x34bf2c.length; ++_0x47dd35) {
            var _0x50a2de = _0x34bf2c[_0x47dd35].resolve();
            var _0x58cb57 = _0x52fd34.safeProp(_0x50a2de.name);
            if (_0x50a2de.map) {
              _0x575ea8('if(d%s){', _0x58cb57)("if(typeof d%s!==\"object\")", _0x58cb57)("throw TypeError(%j)", _0x50a2de.fullName + ": object expected")('m%s={}', _0x58cb57)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", _0x58cb57);
              _0x1b01f6(_0x575ea8, _0x50a2de, _0x47dd35, _0x58cb57 + "[ks[i]]")('}')('}');
            } else if (_0x50a2de.repeated) {
              _0x575ea8("if(d%s){", _0x58cb57)('if(!Array.isArray(d%s))', _0x58cb57)("throw TypeError(%j)", _0x50a2de.fullName + ": array expected")("m%s=[]", _0x58cb57)("for(var i=0;i<d%s.length;++i){", _0x58cb57);
              _0x1b01f6(_0x575ea8, _0x50a2de, _0x47dd35, _0x58cb57 + '[i]')('}')('}');
            } else {
              if (!(_0x50a2de.resolvedType instanceof _0x5eea96)) {
                _0x575ea8("if(d%s!=null){", _0x58cb57);
              }
              _0x1b01f6(_0x575ea8, _0x50a2de, _0x47dd35, _0x58cb57);
              if (!(_0x50a2de.resolvedType instanceof _0x5eea96)) {
                _0x575ea8('}');
              }
            }
          }
          return _0x575ea8("return m");
        };
        _0xa75105.toObject = function (_0x4794b8) {
          var _0xc397b = _0x4794b8.fieldsArray.slice().sort(_0x52fd34.compareFieldsById);
          if (!_0xc397b.length) {
            return _0x52fd34.codegen()("return {}");
          }
          var _0x23c06c = _0x52fd34.codegen(['m', 'o'], _0x4794b8.name + "$toObject")("if(!o)")("o={}")("var d={}");
          var _0x196f56 = [];
          var _0x417db0 = [];
          var _0x52cdd9 = [];
          for (var _0x5adf68 = 0x0; _0x5adf68 < _0xc397b.length; ++_0x5adf68) {
            if (!_0xc397b[_0x5adf68].partOf) {
              (_0xc397b[_0x5adf68].resolve().repeated ? _0x196f56 : _0xc397b[_0x5adf68].map ? _0x417db0 : _0x52cdd9).push(_0xc397b[_0x5adf68]);
            }
          }
          if (_0x196f56.length) {
            _0x23c06c("if(o.arrays||o.defaults){");
            for (_0x5adf68 = 0x0; _0x5adf68 < _0x196f56.length; ++_0x5adf68) {
              _0x23c06c('d%s=[]', _0x52fd34.safeProp(_0x196f56[_0x5adf68].name));
            }
            _0x23c06c('}');
          }
          if (_0x417db0.length) {
            _0x23c06c('if(o.objects||o.defaults){');
            for (_0x5adf68 = 0x0; _0x5adf68 < _0x417db0.length; ++_0x5adf68) {
              _0x23c06c('d%s={}', _0x52fd34.safeProp(_0x417db0[_0x5adf68].name));
            }
            _0x23c06c('}');
          }
          if (_0x52cdd9.length) {
            _0x23c06c("if(o.defaults){");
            for (_0x5adf68 = 0x0; _0x5adf68 < _0x52cdd9.length; ++_0x5adf68) {
              var _0x5c76e3 = _0x52cdd9[_0x5adf68];
              var _0x1e1110 = _0x52fd34.safeProp(_0x5c76e3.name);
              if (_0x5c76e3.resolvedType instanceof _0x5eea96) {
                _0x23c06c("d%s=o.enums===String?%j:%j", _0x1e1110, _0x5c76e3.resolvedType.valuesById[_0x5c76e3.typeDefault], _0x5c76e3.typeDefault);
              } else {
                if (_0x5c76e3.long) {
                  _0x23c06c("if(util.Long){")("var n=new util.Long(%i,%i,%j)", _0x5c76e3.typeDefault.low, _0x5c76e3.typeDefault.high, _0x5c76e3.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", _0x1e1110)("}else")("d%s=o.longs===String?%j:%i", _0x1e1110, _0x5c76e3.typeDefault.toString(), _0x5c76e3.typeDefault.toNumber());
                } else {
                  if (_0x5c76e3.bytes) {
                    var _0x20644c = '[' + Array.prototype.slice.call(_0x5c76e3.typeDefault).join(',') + ']';
                    _0x23c06c("if(o.bytes===String)d%s=%j", _0x1e1110, String.fromCharCode.apply(String, _0x5c76e3.typeDefault))("else{")("d%s=%s", _0x1e1110, _0x20644c)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", _0x1e1110, _0x1e1110)('}');
                  } else {
                    _0x23c06c("d%s=%j", _0x1e1110, _0x5c76e3.typeDefault);
                  }
                }
              }
            }
            _0x23c06c('}');
          }
          var _0x15d5a7 = false;
          for (_0x5adf68 = 0x0; _0x5adf68 < _0xc397b.length; ++_0x5adf68) {
            _0x5c76e3 = _0xc397b[_0x5adf68];
            var _0x551b51 = _0x4794b8._fieldsArray.indexOf(_0x5c76e3);
            _0x1e1110 = _0x52fd34.safeProp(_0x5c76e3.name);
            if (_0x5c76e3.map) {
              if (!_0x15d5a7) {
                _0x15d5a7 = true;
                _0x23c06c("var ks2");
              }
              _0x23c06c('if(m%s&&(ks2=Object.keys(m%s)).length){', _0x1e1110, _0x1e1110)('d%s={}', _0x1e1110)("for(var j=0;j<ks2.length;++j){");
              _0x14fb7b(_0x23c06c, _0x5c76e3, _0x551b51, _0x1e1110 + '[ks2[j]]')('}');
            } else if (_0x5c76e3.repeated) {
              _0x23c06c("if(m%s&&m%s.length){", _0x1e1110, _0x1e1110)('d%s=[]', _0x1e1110)("for(var j=0;j<m%s.length;++j){", _0x1e1110);
              _0x14fb7b(_0x23c06c, _0x5c76e3, _0x551b51, _0x1e1110 + '[j]')('}');
            } else {
              _0x23c06c("if(m%s!=null&&m.hasOwnProperty(%j)){", _0x1e1110, _0x5c76e3.name);
              _0x14fb7b(_0x23c06c, _0x5c76e3, _0x551b51, _0x1e1110);
              if (_0x5c76e3.partOf) {
                _0x23c06c("if(o.oneofs)")('d%s=%j', _0x52fd34.safeProp(_0x5c76e3.partOf.name), _0x5c76e3.name);
              }
            }
            _0x23c06c('}');
          }
          return _0x23c06c("return d");
        };
        _0x1a4986.exports;
      }, function () {
        return {
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js", function (_0x4c4717, _0x1a506e, _0x1cfd3b, _0x38dbd7, _0x66dff9) {
        var _0x5e7bc8 = _0x1a506e("./message");
        _0x4c4717['.google.protobuf.Any'] = {
          'fromObject': function (_0x138a86) {
            if (_0x138a86 && _0x138a86['@type']) {
              var _0x72c291 = _0x138a86["@type"].substring(_0x138a86["@type"].lastIndexOf('/') + 0x1);
              var _0x105ec4 = this.lookup(_0x72c291);
              if (_0x105ec4) {
                var _0xc470e6 = '.' === _0x138a86['@type'].charAt(0x0) ? _0x138a86["@type"].slice(0x1) : _0x138a86["@type"];
                if (-0x1 === _0xc470e6.indexOf('/')) {
                  _0xc470e6 = '/' + _0xc470e6;
                }
                return this.create({
                  'type_url': _0xc470e6,
                  'value': _0x105ec4.encode(_0x105ec4.fromObject(_0x138a86)).finish()
                });
              }
            }
            return this.fromObject(_0x138a86);
          },
          'toObject': function (_0x54a253, _0x3dec54) {
            var _0x4549fb = '';
            var _0x170888 = '';
            if (_0x3dec54 && _0x3dec54.json && _0x54a253.type_url && _0x54a253.value) {
              _0x170888 = _0x54a253.type_url.substring(_0x54a253.type_url.lastIndexOf('/') + 0x1);
              _0x4549fb = _0x54a253.type_url.substring(0x0, _0x54a253.type_url.lastIndexOf('/') + 0x1);
              var _0x400fab = this.lookup(_0x170888);
              if (_0x400fab) {
                _0x54a253 = _0x400fab.decode(_0x54a253.value);
              }
            }
            if (!(_0x54a253 instanceof this.ctor) && _0x54a253 instanceof _0x5e7bc8) {
              var _0x61dd2c = _0x54a253.$type.toObject(_0x54a253, _0x3dec54);
              if ('' === _0x4549fb) {
                _0x4549fb = "type.googleapis.com/";
              }
              _0x170888 = _0x4549fb + ('.' === _0x54a253.$type.fullName[0x0] ? _0x54a253.$type.fullName.slice(0x1) : _0x54a253.$type.fullName);
              _0x61dd2c['@type'] = _0x170888;
              return _0x61dd2c;
            }
            return this.toObject(_0x54a253, _0x3dec54);
          }
        };
        _0x1cfd3b.exports;
      }, function () {
        return {
          './message': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/message.js"
        };
      });
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/type.js", function (_0x3e7b35, _0x5d8b1a, _0x289c68, _0x2045a6, _0x510899) {
        _0x289c68.exports = _0x51f5c7;
        var _0x50801d = _0x5d8b1a("./namespace");
        ((_0x51f5c7.prototype = Object.create(_0x50801d.prototype)).constructor = _0x51f5c7).className = "Type";
        var _0x39b89f = _0x5d8b1a("./enum");
        var _0x45dce5 = _0x5d8b1a('./oneof');
        var _0x17a633 = _0x5d8b1a("./field");
        var _0x5ba7b8 = _0x5d8b1a("./mapfield");
        var _0x305b02 = _0x5d8b1a("./service");
        var _0x13790b = _0x5d8b1a('./message');
        var _0x58ddde = _0x5d8b1a("./reader");
        var _0x44b424 = _0x5d8b1a("./writer");
        var _0x4c4089 = _0x5d8b1a("./util");
        var _0x4138d2 = _0x5d8b1a("./encoder");
        var _0x4d8749 = _0x5d8b1a("./decoder");
        var _0x137fa1 = _0x5d8b1a("./verifier");
        var _0x52908e = _0x5d8b1a('./converter');
        var _0x29a522 = _0x5d8b1a("./wrappers");
        function _0x51f5c7(_0x213808, _0x2daeed) {
          _0x50801d.call(this, _0x213808, _0x2daeed);
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
        function _0x4e1780(_0x467602) {
          _0x467602._fieldsById = _0x467602._fieldsArray = _0x467602._oneofsArray = null;
          delete _0x467602.encode;
          delete _0x467602.decode;
          delete _0x467602.verify;
          return _0x467602;
        }
        Object.defineProperties(_0x51f5c7.prototype, {
          'fieldsById': {
            'get': function () {
              if (this._fieldsById) {
                return this._fieldsById;
              }
              this._fieldsById = {};
              var _0x19bf81 = Object.keys(this.fields);
              for (var _0x46e025 = 0x0; _0x46e025 < _0x19bf81.length; ++_0x46e025) {
                var _0x33c77d = this.fields[_0x19bf81[_0x46e025]];
                var _0x106190 = _0x33c77d.id;
                if (this._fieldsById[_0x106190]) {
                  throw Error("duplicate id " + _0x106190 + " in " + this);
                }
                this._fieldsById[_0x106190] = _0x33c77d;
              }
              return this._fieldsById;
            }
          },
          'fieldsArray': {
            'get': function () {
              return this._fieldsArray || (this._fieldsArray = _0x4c4089.toArray(this.fields));
            }
          },
          'oneofsArray': {
            'get': function () {
              return this._oneofsArray || (this._oneofsArray = _0x4c4089.toArray(this.oneofs));
            }
          },
          'ctor': {
            'get': function () {
              return this._ctor || (this.ctor = _0x51f5c7.generateConstructor(this)());
            },
            'set': function (_0x3cf376) {
              var _0xece978 = _0x3cf376.prototype;
              if (!(_0xece978 instanceof _0x13790b)) {
                (_0x3cf376.prototype = new _0x13790b()).constructor = _0x3cf376;
                _0x4c4089.merge(_0x3cf376.prototype, _0xece978);
              }
              _0x3cf376.$type = _0x3cf376.prototype.$type = this;
              _0x4c4089.merge(_0x3cf376, _0x13790b, true);
              this._ctor = _0x3cf376;
              for (var _0x1e6eb8 = 0x0; _0x1e6eb8 < this.fieldsArray.length; ++_0x1e6eb8) {
                this._fieldsArray[_0x1e6eb8].resolve();
              }
              var _0x8e6dd0 = {};
              for (_0x1e6eb8 = 0x0; _0x1e6eb8 < this.oneofsArray.length; ++_0x1e6eb8) {
                _0x8e6dd0[this._oneofsArray[_0x1e6eb8].resolve().name] = {
                  'get': _0x4c4089.oneOfGetter(this._oneofsArray[_0x1e6eb8].oneof),
                  'set': _0x4c4089.oneOfSetter(this._oneofsArray[_0x1e6eb8].oneof)
                };
              }
              if (_0x1e6eb8) {
                Object.defineProperties(_0x3cf376.prototype, _0x8e6dd0);
              }
            }
          }
        });
        _0x51f5c7.generateConstructor = function (_0x110f5a) {
          var _0x361927;
          var _0x56338e = _0x4c4089.codegen(['p'], _0x110f5a.name);
          for (var _0x4822ac = 0x0; _0x4822ac < _0x110f5a.fieldsArray.length; ++_0x4822ac) {
            if ((_0x361927 = _0x110f5a._fieldsArray[_0x4822ac]).map) {
              _0x56338e("this%s={}", _0x4c4089.safeProp(_0x361927.name));
            } else if (_0x361927.repeated) {
              _0x56338e("this%s=[]", _0x4c4089.safeProp(_0x361927.name));
            }
          }
          return _0x56338e("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")('this[ks[i]]=p[ks[i]]');
        };
        _0x51f5c7.fromJSON = function (_0x315378, _0x2f3176) {
          var _0x331389 = new _0x51f5c7(_0x315378, _0x2f3176.options);
          _0x331389.extensions = _0x2f3176.extensions;
          _0x331389.reserved = _0x2f3176.reserved;
          var _0x576b57 = Object.keys(_0x2f3176.fields);
          for (var _0x26fcbd = 0x0; _0x26fcbd < _0x576b57.length; ++_0x26fcbd) {
            _0x331389.add((undefined !== _0x2f3176.fields[_0x576b57[_0x26fcbd]].keyType ? _0x5ba7b8.fromJSON : _0x17a633.fromJSON)(_0x576b57[_0x26fcbd], _0x2f3176.fields[_0x576b57[_0x26fcbd]]));
          }
          if (_0x2f3176.oneofs) {
            _0x576b57 = Object.keys(_0x2f3176.oneofs);
            for (_0x26fcbd = 0x0; _0x26fcbd < _0x576b57.length; ++_0x26fcbd) {
              _0x331389.add(_0x45dce5.fromJSON(_0x576b57[_0x26fcbd], _0x2f3176.oneofs[_0x576b57[_0x26fcbd]]));
            }
          }
          if (_0x2f3176.nested) {
            _0x576b57 = Object.keys(_0x2f3176.nested);
            for (_0x26fcbd = 0x0; _0x26fcbd < _0x576b57.length; ++_0x26fcbd) {
              var _0x4a3bd7 = _0x2f3176.nested[_0x576b57[_0x26fcbd]];
              _0x331389.add((undefined !== _0x4a3bd7.id ? _0x17a633.fromJSON : undefined !== _0x4a3bd7.fields ? _0x51f5c7.fromJSON : undefined !== _0x4a3bd7.values ? _0x39b89f.fromJSON : undefined !== _0x4a3bd7.methods ? _0x305b02.fromJSON : _0x50801d.fromJSON)(_0x576b57[_0x26fcbd], _0x4a3bd7));
            }
          }
          if (_0x2f3176.extensions && _0x2f3176.extensions.length) {
            _0x331389.extensions = _0x2f3176.extensions;
          }
          if (_0x2f3176.reserved && _0x2f3176.reserved.length) {
            _0x331389.reserved = _0x2f3176.reserved;
          }
          if (_0x2f3176.group) {
            _0x331389.group = true;
          }
          if (_0x2f3176.comment) {
            _0x331389.comment = _0x2f3176.comment;
          }
          return _0x331389;
        };
        _0x51f5c7.prototype.toJSON = function (_0x13bb40) {
          var _0x52c5a5 = _0x50801d.prototype.toJSON.call(this, _0x13bb40);
          var _0x287862 = !!_0x13bb40 && Boolean(_0x13bb40.keepComments);
          return _0x4c4089.toObject(["options", _0x52c5a5 && _0x52c5a5.options || undefined, "oneofs", _0x50801d.arrayToJSON(this.oneofsArray, _0x13bb40), "fields", _0x50801d.arrayToJSON(this.fieldsArray.filter(function (_0x5679e3) {
            return !_0x5679e3.declaringField;
          }), _0x13bb40) || {}, 'extensions', this.extensions && this.extensions.length ? this.extensions : undefined, 'reserved', this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, "nested", _0x52c5a5 && _0x52c5a5.nested || undefined, "comment", _0x287862 ? this.comment : undefined]);
        };
        _0x51f5c7.prototype.resolveAll = function () {
          var _0x599bc8 = this.fieldsArray;
          for (var _0x5a5dcb = 0x0; _0x5a5dcb < _0x599bc8.length;) {
            _0x599bc8[_0x5a5dcb++].resolve();
          }
          var _0x23ebc8 = this.oneofsArray;
          for (_0x5a5dcb = 0x0; _0x5a5dcb < _0x23ebc8.length;) {
            _0x23ebc8[_0x5a5dcb++].resolve();
          }
          return _0x50801d.prototype.resolveAll.call(this);
        };
        _0x51f5c7.prototype.get = function (_0x1729a3) {
          return this.fields[_0x1729a3] || this.oneofs && this.oneofs[_0x1729a3] || this.nested && this.nested[_0x1729a3] || null;
        };
        _0x51f5c7.prototype.add = function (_0x1450d1) {
          if (this.get(_0x1450d1.name)) {
            throw Error("duplicate name '" + _0x1450d1.name + "' in " + this);
          }
          if (_0x1450d1 instanceof _0x17a633 && undefined === _0x1450d1.extend) {
            if (this._fieldsById ? this._fieldsById[_0x1450d1.id] : this.fieldsById[_0x1450d1.id]) {
              throw Error("duplicate id " + _0x1450d1.id + " in " + this);
            }
            if (this.isReservedId(_0x1450d1.id)) {
              throw Error("id " + _0x1450d1.id + " is reserved in " + this);
            }
            if (this.isReservedName(_0x1450d1.name)) {
              throw Error("name '" + _0x1450d1.name + "' is reserved in " + this);
            }
            if (_0x1450d1.parent) {
              _0x1450d1.parent.remove(_0x1450d1);
            }
            this.fields[_0x1450d1.name] = _0x1450d1;
            _0x1450d1.message = this;
            _0x1450d1.onAdd(this);
            return _0x4e1780(this);
          }
          return _0x1450d1 instanceof _0x45dce5 ? (this.oneofs || (this.oneofs = {}), this.oneofs[_0x1450d1.name] = _0x1450d1, _0x1450d1.onAdd(this), _0x4e1780(this)) : _0x50801d.prototype.add.call(this, _0x1450d1);
        };
        _0x51f5c7.prototype.remove = function (_0x3708c1) {
          if (_0x3708c1 instanceof _0x17a633 && undefined === _0x3708c1.extend) {
            if (!this.fields || this.fields[_0x3708c1.name] !== _0x3708c1) {
              throw Error(_0x3708c1 + " is not a member of " + this);
            }
            delete this.fields[_0x3708c1.name];
            _0x3708c1.parent = null;
            _0x3708c1.onRemove(this);
            return _0x4e1780(this);
          }
          if (_0x3708c1 instanceof _0x45dce5) {
            if (!this.oneofs || this.oneofs[_0x3708c1.name] !== _0x3708c1) {
              throw Error(_0x3708c1 + " is not a member of " + this);
            }
            delete this.oneofs[_0x3708c1.name];
            _0x3708c1.parent = null;
            _0x3708c1.onRemove(this);
            return _0x4e1780(this);
          }
          return _0x50801d.prototype.remove.call(this, _0x3708c1);
        };
        _0x51f5c7.prototype.isReservedId = function (_0x5c8a70) {
          return _0x50801d.isReservedId(this.reserved, _0x5c8a70);
        };
        _0x51f5c7.prototype.isReservedName = function (_0x3099c2) {
          return _0x50801d.isReservedName(this.reserved, _0x3099c2);
        };
        _0x51f5c7.prototype.create = function (_0x2f004a) {
          return new this.ctor(_0x2f004a);
        };
        _0x51f5c7.prototype.setup = function () {
          var _0x401ccc = this.fullName;
          var _0x2c61f6 = [];
          for (var _0x922144 = 0x0; _0x922144 < this.fieldsArray.length; ++_0x922144) {
            _0x2c61f6.push(this._fieldsArray[_0x922144].resolve().resolvedType);
          }
          this.encode = _0x4138d2(this)({
            'Writer': _0x44b424,
            'types': _0x2c61f6,
            'util': _0x4c4089
          });
          this.decode = _0x4d8749(this)({
            'Reader': _0x58ddde,
            'types': _0x2c61f6,
            'util': _0x4c4089
          });
          this.verify = _0x137fa1(this)({
            'types': _0x2c61f6,
            'util': _0x4c4089
          });
          this.fromObject = _0x52908e.fromObject(this)({
            'types': _0x2c61f6,
            'util': _0x4c4089
          });
          this.toObject = _0x52908e.toObject(this)({
            'types': _0x2c61f6,
            'util': _0x4c4089
          });
          var _0x357dc4 = _0x29a522[_0x401ccc];
          if (_0x357dc4) {
            var _0x2c2e8d = Object.create(this);
            _0x2c2e8d.fromObject = this.fromObject;
            this.fromObject = _0x357dc4.fromObject.bind(_0x2c2e8d);
            _0x2c2e8d.toObject = this.toObject;
            this.toObject = _0x357dc4.toObject.bind(_0x2c2e8d);
          }
          return this;
        };
        _0x51f5c7.prototype.encode = function (_0x42a21d, _0x17c4bb) {
          return this.setup().encode(_0x42a21d, _0x17c4bb);
        };
        _0x51f5c7.prototype.encodeDelimited = function (_0x56d14c, _0x53fe5e) {
          return this.encode(_0x56d14c, _0x53fe5e && _0x53fe5e.len ? _0x53fe5e.fork() : _0x53fe5e).ldelim();
        };
        _0x51f5c7.prototype.decode = function (_0x2d5ec6, _0x3ea402) {
          return this.setup().decode(_0x2d5ec6, _0x3ea402);
        };
        _0x51f5c7.prototype.decodeDelimited = function (_0x57bab1) {
          if (!(_0x57bab1 instanceof _0x58ddde)) {
            _0x57bab1 = _0x58ddde.create(_0x57bab1);
          }
          return this.decode(_0x57bab1, _0x57bab1.uint32());
        };
        _0x51f5c7.prototype.verify = function (_0x5a4ad3) {
          return this.setup().verify(_0x5a4ad3);
        };
        _0x51f5c7.prototype.fromObject = function (_0x29ca72) {
          return this.setup().fromObject(_0x29ca72);
        };
        _0x51f5c7.prototype.toObject = function (_0x1f49fb, _0x30cff0) {
          return this.setup().toObject(_0x1f49fb, _0x30cff0);
        };
        _0x51f5c7.d = function (_0x449c98) {
          return function (_0x4dd09f) {
            _0x4c4089.decorateType(_0x4dd09f, _0x449c98);
          };
        };
        _0x289c68.exports;
      }, function () {
        return {
          './namespace': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './oneof': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './field': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './mapfield': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './service': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          './message': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          './reader': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './writer': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './encoder': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js",
          './decoder': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js',
          './verifier': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          './converter': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          './wrappers': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js"
        };
      });
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/root.js", function (_0x20ff5d, _0x4adccc, _0xea18ca, _0x14ac14, _0x2df93c) {
        _0xea18ca.exports = _0x2f757a;
        var _0x41c439 = _0x4adccc("./namespace");
        ((_0x2f757a.prototype = Object.create(_0x41c439.prototype)).constructor = _0x2f757a).className = "Root";
        var _0x1ed904;
        var _0x1e9892;
        var _0x3cd3d5;
        var _0x1acdf1 = _0x4adccc("./field");
        var _0x1ef5df = _0x4adccc("./enum");
        var _0x2eeed3 = _0x4adccc("./oneof");
        var _0x9bdb65 = _0x4adccc("./util");
        function _0x2f757a(_0x3139b8) {
          _0x41c439.call(this, '', _0x3139b8);
          this.deferred = [];
          this.files = [];
        }
        function _0x308976() {}
        _0x2f757a.fromJSON = function (_0xcd197b, _0x41d579) {
          if (!_0x41d579) {
            _0x41d579 = new _0x2f757a();
          }
          if (_0xcd197b.options) {
            _0x41d579.setOptions(_0xcd197b.options);
          }
          return _0x41d579.addJSON(_0xcd197b.nested);
        };
        _0x2f757a.prototype.resolvePath = _0x9bdb65.path.resolve;
        _0x2f757a.prototype.fetch = _0x9bdb65.fetch;
        _0x2f757a.prototype.load = function _0x4ec053(_0x96b287, _0x1a4512, _0x264ce3) {
          if ("function" == typeof _0x1a4512) {
            _0x264ce3 = _0x1a4512;
            _0x1a4512 = undefined;
          }
          var _0x207ad5 = this;
          if (!_0x264ce3) {
            return _0x9bdb65.asPromise(_0x4ec053, _0x207ad5, _0x96b287, _0x1a4512);
          }
          var _0x3d9a33 = _0x264ce3 === _0x308976;
          function _0x42bca7(_0x3a0650, _0x76346a) {
            if (_0x264ce3) {
              if (_0x3d9a33) {
                throw _0x3a0650;
              }
              var _0xd4d99 = _0x264ce3;
              _0x264ce3 = null;
              _0xd4d99(_0x3a0650, _0x76346a);
            }
          }
          function _0x3e3500(_0x23b09d) {
            var _0x24c9a7 = _0x23b09d.lastIndexOf("google/protobuf/");
            if (_0x24c9a7 > -0x1) {
              var _0x5abce5 = _0x23b09d.substring(_0x24c9a7);
              if (_0x5abce5 in _0x3cd3d5) {
                return _0x5abce5;
              }
            }
            return null;
          }
          function _0x527701(_0x534519, _0x4ff794) {
            try {
              if (_0x9bdb65.isString(_0x4ff794) && '{' === _0x4ff794.charAt(0x0)) {
                _0x4ff794 = JSON.parse(_0x4ff794);
              }
              if (_0x9bdb65.isString(_0x4ff794)) {
                _0x1e9892.filename = _0x534519;
                var _0x8080d8;
                var _0x95ec73 = _0x1e9892(_0x4ff794, _0x207ad5, _0x1a4512);
                var _0x4ee7f5 = 0x0;
                if (_0x95ec73.imports) {
                  for (; _0x4ee7f5 < _0x95ec73.imports.length; ++_0x4ee7f5) {
                    if (_0x8080d8 = _0x3e3500(_0x95ec73.imports[_0x4ee7f5]) || _0x207ad5.resolvePath(_0x534519, _0x95ec73.imports[_0x4ee7f5])) {
                      _0x1cac32(_0x8080d8);
                    }
                  }
                }
                if (_0x95ec73.weakImports) {
                  for (_0x4ee7f5 = 0x0; _0x4ee7f5 < _0x95ec73.weakImports.length; ++_0x4ee7f5) {
                    if (_0x8080d8 = _0x3e3500(_0x95ec73.weakImports[_0x4ee7f5]) || _0x207ad5.resolvePath(_0x534519, _0x95ec73.weakImports[_0x4ee7f5])) {
                      _0x1cac32(_0x8080d8, true);
                    }
                  }
                }
              } else {
                _0x207ad5.setOptions(_0x4ff794.options).addJSON(_0x4ff794.nested);
              }
            } catch (_0x592ab1) {
              _0x42bca7(_0x592ab1);
            }
            if (!(_0x3d9a33 || _0x2144a0)) {
              _0x42bca7(null, _0x207ad5);
            }
          }
          function _0x1cac32(_0xd8e08a, _0x221304) {
            _0xd8e08a = _0x3e3500(_0xd8e08a) || _0xd8e08a;
            if (!(_0x207ad5.files.indexOf(_0xd8e08a) > -0x1)) {
              _0x207ad5.files.push(_0xd8e08a);
              if (_0xd8e08a in _0x3cd3d5) {
                if (_0x3d9a33) {
                  _0x527701(_0xd8e08a, _0x3cd3d5[_0xd8e08a]);
                } else {
                  ++_0x2144a0;
                  setTimeout(function () {
                    --_0x2144a0;
                    _0x527701(_0xd8e08a, _0x3cd3d5[_0xd8e08a]);
                  });
                }
              } else {
                if (_0x3d9a33) {
                  var _0x462c2b;
                  try {
                    _0x462c2b = _0x9bdb65.fs.readFileSync(_0xd8e08a).toString("utf8");
                  } catch (_0x2a2ebd) {
                    return void (_0x221304 || _0x42bca7(_0x2a2ebd));
                  }
                  _0x527701(_0xd8e08a, _0x462c2b);
                } else {
                  ++_0x2144a0;
                  _0x207ad5.fetch(_0xd8e08a, function (_0x2cc727, _0x9cb5a2) {
                    --_0x2144a0;
                    if (_0x264ce3) {
                      if (_0x2cc727) {
                        if (_0x221304) {
                          if (!_0x2144a0) {
                            _0x42bca7(null, _0x207ad5);
                          }
                        } else {
                          _0x42bca7(_0x2cc727);
                        }
                      } else {
                        _0x527701(_0xd8e08a, _0x9cb5a2);
                      }
                    }
                  });
                }
              }
            }
          }
          var _0x2144a0 = 0x0;
          if (_0x9bdb65.isString(_0x96b287)) {
            _0x96b287 = [_0x96b287];
          }
          var _0x1ea375;
          for (var _0x524fe7 = 0x0; _0x524fe7 < _0x96b287.length; ++_0x524fe7) {
            if (_0x1ea375 = _0x207ad5.resolvePath('', _0x96b287[_0x524fe7])) {
              _0x1cac32(_0x1ea375);
            }
          }
          if (_0x3d9a33) {
            return _0x207ad5;
          }
          if (!_0x2144a0) {
            _0x42bca7(null, _0x207ad5);
          }
        };
        _0x2f757a.prototype.loadSync = function (_0x51e164, _0x44e1fc) {
          if (!_0x9bdb65.isNode) {
            throw Error("not supported");
          }
          return this.load(_0x51e164, _0x44e1fc, _0x308976);
        };
        _0x2f757a.prototype.resolveAll = function () {
          if (this.deferred.length) {
            throw Error("unresolvable extensions: " + this.deferred.map(function (_0x5d0f25) {
              return "'extend " + _0x5d0f25.extend + "' in " + _0x5d0f25.parent.fullName;
            }).join(", "));
          }
          return _0x41c439.prototype.resolveAll.call(this);
        };
        var _0x3432d2 = /^[A-Z]/;
        function _0x481194(_0x5adc5f, _0x1c089d) {
          var _0x4ec492 = _0x1c089d.parent.lookup(_0x1c089d.extend);
          if (_0x4ec492) {
            var _0x24f94d = new _0x1acdf1(_0x1c089d.fullName, _0x1c089d.id, _0x1c089d.type, _0x1c089d.rule, undefined, _0x1c089d.options);
            if (!_0x4ec492.get(_0x24f94d.name)) {
              _0x24f94d.declaringField = _0x1c089d;
              _0x1c089d.extensionField = _0x24f94d;
              _0x4ec492.add(_0x24f94d);
            }
            return true;
          }
          return false;
        }
        _0x2f757a.prototype._handleAdd = function (_0x1cf17c) {
          if (_0x1cf17c instanceof _0x1acdf1) {
            if (!(undefined === _0x1cf17c.extend || _0x1cf17c.extensionField || _0x481194(0x0, _0x1cf17c))) {
              this.deferred.push(_0x1cf17c);
            }
          } else {
            if (_0x1cf17c instanceof _0x1ef5df) {
              if (_0x3432d2.test(_0x1cf17c.name)) {
                _0x1cf17c.parent[_0x1cf17c.name] = _0x1cf17c.values;
              }
            } else {
              if (!(_0x1cf17c instanceof _0x2eeed3)) {
                if (_0x1cf17c instanceof _0x1ed904) {
                  for (var _0x276aca = 0x0; _0x276aca < this.deferred.length;) {
                    if (_0x481194(0x0, this.deferred[_0x276aca])) {
                      this.deferred.splice(_0x276aca, 0x1);
                    } else {
                      ++_0x276aca;
                    }
                  }
                }
                for (var _0x4d0ef3 = 0x0; _0x4d0ef3 < _0x1cf17c.nestedArray.length; ++_0x4d0ef3) {
                  this._handleAdd(_0x1cf17c._nestedArray[_0x4d0ef3]);
                }
                if (_0x3432d2.test(_0x1cf17c.name)) {
                  _0x1cf17c.parent[_0x1cf17c.name] = _0x1cf17c;
                }
              }
            }
          }
        };
        _0x2f757a.prototype._handleRemove = function (_0x578f05) {
          if (_0x578f05 instanceof _0x1acdf1) {
            if (undefined !== _0x578f05.extend) {
              if (_0x578f05.extensionField) {
                _0x578f05.extensionField.parent.remove(_0x578f05.extensionField);
                _0x578f05.extensionField = null;
              } else {
                var _0x4488d4 = this.deferred.indexOf(_0x578f05);
                if (_0x4488d4 > -0x1) {
                  this.deferred.splice(_0x4488d4, 0x1);
                }
              }
            }
          } else {
            if (_0x578f05 instanceof _0x1ef5df) {
              if (_0x3432d2.test(_0x578f05.name)) {
                delete _0x578f05.parent[_0x578f05.name];
              }
            } else {
              if (_0x578f05 instanceof _0x41c439) {
                for (var _0x1f184e = 0x0; _0x1f184e < _0x578f05.nestedArray.length; ++_0x1f184e) {
                  this._handleRemove(_0x578f05._nestedArray[_0x1f184e]);
                }
                if (_0x3432d2.test(_0x578f05.name)) {
                  delete _0x578f05.parent[_0x578f05.name];
                }
              }
            }
          }
        };
        _0x2f757a._configure = function (_0x10330f, _0x419b42, _0x12e5bd) {
          _0x1ed904 = _0x10330f;
          _0x1e9892 = _0x419b42;
          _0x3cd3d5 = _0x12e5bd;
        };
        _0xea18ca.exports;
      }, function () {
        return {
          './namespace': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './field': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './oneof': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util.js", function (_0x3fcf3c, _0x30d0fe, _0x4eb522, _0x342e1f, _0x48ea20) {
        var _0xa7fda;
        var _0x4dda36;
        var _0x3de41a = _0x4eb522.exports = _0x30d0fe("./util/minimal");
        var _0x5cb5bc = _0x30d0fe("./roots");
        _0x3de41a.codegen = _0x30d0fe("@protobufjs/codegen");
        _0x3de41a.fetch = _0x30d0fe("@protobufjs/fetch");
        _0x3de41a.path = _0x30d0fe('@protobufjs/path');
        _0x3de41a.fs = _0x3de41a.inquire('fs');
        _0x3de41a.toArray = function (_0xc9267f) {
          if (_0xc9267f) {
            var _0x48a701 = Object.keys(_0xc9267f);
            var _0x265cdd = new Array(_0x48a701.length);
            for (var _0x238b9a = 0x0; _0x238b9a < _0x48a701.length;) {
              _0x265cdd[_0x238b9a] = _0xc9267f[_0x48a701[_0x238b9a++]];
            }
            return _0x265cdd;
          }
          return [];
        };
        _0x3de41a.toObject = function (_0x5e30df) {
          var _0x1fb2d8 = {};
          for (var _0x4f89fe = 0x0; _0x4f89fe < _0x5e30df.length;) {
            var _0x5a2313 = _0x5e30df[_0x4f89fe++];
            var _0x2f1e40 = _0x5e30df[_0x4f89fe++];
            if (undefined !== _0x2f1e40) {
              _0x1fb2d8[_0x5a2313] = _0x2f1e40;
            }
          }
          return _0x1fb2d8;
        };
        var _0x42d7ae = /\\/g;
        var _0x465c71 = /"/g;
        _0x3de41a.isReserved = function (_0x53416f) {
          return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(_0x53416f);
        };
        _0x3de41a.safeProp = function (_0x5509fd) {
          return !/^[$\w_]+$/.test(_0x5509fd) || _0x3de41a.isReserved(_0x5509fd) ? "[\"" + _0x5509fd.replace(_0x42d7ae, "\\\\").replace(_0x465c71, "\\\"") + "\"]" : '.' + _0x5509fd;
        };
        _0x3de41a.ucFirst = function (_0x2afc5f) {
          return _0x2afc5f.charAt(0x0).toUpperCase() + _0x2afc5f.substring(0x1);
        };
        var _0x4d11a3 = /_([a-z])/g;
        _0x3de41a.camelCase = function (_0x5b52af) {
          return _0x5b52af.substring(0x0, 0x1) + _0x5b52af.substring(0x1).replace(_0x4d11a3, function (_0x49fc5a, _0x2bf7c5) {
            return _0x2bf7c5.toUpperCase();
          });
        };
        _0x3de41a.compareFieldsById = function (_0x195b7c, _0x3ff2bc) {
          return _0x195b7c.id - _0x3ff2bc.id;
        };
        _0x3de41a.decorateType = function (_0x94ba25, _0x12db1a) {
          if (_0x94ba25.$type) {
            if (_0x12db1a && _0x94ba25.$type.name !== _0x12db1a) {
              _0x3de41a.decorateRoot.remove(_0x94ba25.$type);
              _0x94ba25.$type.name = _0x12db1a;
              _0x3de41a.decorateRoot.add(_0x94ba25.$type);
            }
            return _0x94ba25.$type;
          }
          if (!_0xa7fda) {
            _0xa7fda = _0x30d0fe("./type");
          }
          var _0x3acec1 = new _0xa7fda(_0x12db1a || _0x94ba25.name);
          _0x3de41a.decorateRoot.add(_0x3acec1);
          _0x3acec1.ctor = _0x94ba25;
          Object.defineProperty(_0x94ba25, "$type", {
            'value': _0x3acec1,
            'enumerable': false
          });
          Object.defineProperty(_0x94ba25.prototype, "$type", {
            'value': _0x3acec1,
            'enumerable': false
          });
          return _0x3acec1;
        };
        var _0x4c0f70 = 0x0;
        _0x3de41a.decorateEnum = function (_0x14770b) {
          if (_0x14770b.$type) {
            return _0x14770b.$type;
          }
          if (!_0x4dda36) {
            _0x4dda36 = _0x30d0fe("./enum");
          }
          var _0x48a5bd = new _0x4dda36('Enum' + _0x4c0f70++, _0x14770b);
          _0x3de41a.decorateRoot.add(_0x48a5bd);
          Object.defineProperty(_0x14770b, "$type", {
            'value': _0x48a5bd,
            'enumerable': false
          });
          return _0x48a5bd;
        };
        _0x3de41a.setProperty = function (_0x49b2cd, _0x80230c, _0x399a96) {
          if ('object' != typeof _0x49b2cd) {
            throw TypeError("dst must be an object");
          }
          if (!_0x80230c) {
            throw TypeError("path must be specified");
          }
          return function _0x1358b0(_0x16891d, _0x3bb6dd, _0x57c1c9) {
            var _0x2c5bdc = _0x3bb6dd.shift();
            if ("__proto__" === _0x2c5bdc || "prototype" === _0x2c5bdc) {
              return _0x16891d;
            }
            if (_0x3bb6dd.length > 0x0) {
              _0x16891d[_0x2c5bdc] = _0x1358b0(_0x16891d[_0x2c5bdc] || {}, _0x3bb6dd, _0x57c1c9);
            } else {
              var _0x4a5dbf = _0x16891d[_0x2c5bdc];
              if (_0x4a5dbf) {
                _0x57c1c9 = [].concat(_0x4a5dbf).concat(_0x57c1c9);
              }
              _0x16891d[_0x2c5bdc] = _0x57c1c9;
            }
            return _0x16891d;
          }(_0x49b2cd, _0x80230c = _0x80230c.split('.'), _0x399a96);
        };
        Object.defineProperty(_0x3de41a, "decorateRoot", {
          'get': function () {
            return _0x5cb5bc.decorated || (_0x5cb5bc.decorated = new (_0x30d0fe("./root"))());
          }
        });
        _0x4eb522.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          './roots': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/roots.js",
          '@protobufjs/codegen': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js',
          '@protobufjs/fetch': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js',
          '@protobufjs/path': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/@protobufjs/path/index.js',
          './type': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './root': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/root.js"
        };
      });
      _0x217aa0.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/object.js', function (_0x505096, _0x2b994d, _0x1a0b2f, _0x8175f5, _0xa32754) {
        _0x1a0b2f.exports = _0x34773f;
        _0x34773f.className = 'ReflectionObject';
        var _0x21707b;
        var _0x1cc79f = _0x2b994d('./util');
        function _0x34773f(_0x3b4406, _0x4e92ac) {
          if (!_0x1cc79f.isString(_0x3b4406)) {
            throw TypeError("name must be a string");
          }
          if (_0x4e92ac && !_0x1cc79f.isObject(_0x4e92ac)) {
            throw TypeError("options must be an object");
          }
          this.options = _0x4e92ac;
          this.parsedOptions = null;
          this.name = _0x3b4406;
          this.parent = null;
          this.resolved = false;
          this.comment = null;
          this.filename = null;
        }
        Object.defineProperties(_0x34773f.prototype, {
          'root': {
            'get': function () {
              for (var _0x48dd0c = this; null !== _0x48dd0c.parent;) {
                _0x48dd0c = _0x48dd0c.parent;
              }
              return _0x48dd0c;
            }
          },
          'fullName': {
            'get': function () {
              var _0x3e4fe7 = [this.name];
              for (var _0x1d5abd = this.parent; _0x1d5abd;) {
                _0x3e4fe7.unshift(_0x1d5abd.name);
                _0x1d5abd = _0x1d5abd.parent;
              }
              return _0x3e4fe7.join('.');
            }
          }
        });
        _0x34773f.prototype.toJSON = function () {
          throw Error();
        };
        _0x34773f.prototype.onAdd = function (_0x23cfd5) {
          if (this.parent && this.parent !== _0x23cfd5) {
            this.parent.remove(this);
          }
          this.parent = _0x23cfd5;
          this.resolved = false;
          var _0x463ec2 = _0x23cfd5.root;
          if (_0x463ec2 instanceof _0x21707b) {
            _0x463ec2._handleAdd(this);
          }
        };
        _0x34773f.prototype.onRemove = function (_0x3a8df2) {
          var _0x3ac483 = _0x3a8df2.root;
          if (_0x3ac483 instanceof _0x21707b) {
            _0x3ac483._handleRemove(this);
          }
          this.parent = null;
          this.resolved = false;
        };
        _0x34773f.prototype.resolve = function () {
          if (!this.resolved) {
            if (this.root instanceof _0x21707b) {
              this.resolved = true;
            }
          }
          return this;
        };
        _0x34773f.prototype.getOption = function (_0x12f9e1) {
          if (this.options) {
            return this.options[_0x12f9e1];
          }
        };
        _0x34773f.prototype.setOption = function (_0x5e6565, _0x5778c2, _0x5334bb) {
          if (!(_0x5334bb && this.options && undefined !== this.options[_0x5e6565])) {
            (this.options || (this.options = {}))[_0x5e6565] = _0x5778c2;
          }
          return this;
        };
        _0x34773f.prototype.setParsedOption = function (_0x5158af, _0x4bb934, _0x8264d6) {
          if (!this.parsedOptions) {
            this.parsedOptions = [];
          }
          var _0x4a6b38 = this.parsedOptions;
          if (_0x8264d6) {
            var _0x8e21eb = _0x4a6b38.find(function (_0x2cef93) {
              return Object.prototype.hasOwnProperty.call(_0x2cef93, _0x5158af);
            });
            if (_0x8e21eb) {
              var _0x5ac3fb = _0x8e21eb[_0x5158af];
              _0x1cc79f.setProperty(_0x5ac3fb, _0x8264d6, _0x4bb934);
            } else {
              (_0x8e21eb = {})[_0x5158af] = _0x1cc79f.setProperty({}, _0x8264d6, _0x4bb934);
              _0x4a6b38.push(_0x8e21eb);
            }
          } else {
            var _0x52feb1 = {
              _0x5158af: _0x4bb934
            };
            _0x4a6b38.push(_0x52feb1);
          }
          return this;
        };
        _0x34773f.prototype.setOptions = function (_0x13de55, _0x53fabf) {
          if (_0x13de55) {
            var _0x1e80a6 = Object.keys(_0x13de55);
            for (var _0x4549ce = 0x0; _0x4549ce < _0x1e80a6.length; ++_0x4549ce) {
              this.setOption(_0x1e80a6[_0x4549ce], _0x13de55[_0x1e80a6[_0x4549ce]], _0x53fabf);
            }
          }
          return this;
        };
        _0x34773f.prototype.toString = function () {
          var _0x116d2e = this.constructor.className;
          var _0x3d6ec6 = this.fullName;
          return _0x3d6ec6.length ? _0x116d2e + " " + _0x3d6ec6 : _0x116d2e;
        };
        _0x34773f._configure = function (_0x4268b8) {
          _0x21707b = _0x4268b8;
        };
        _0x1a0b2f.exports;
      }, function () {
        return {
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/enum.js", function (_0x360c7e, _0x2c9d14, _0x5b748e, _0x2653b0, _0x4b43d2) {
        _0x5b748e.exports = _0x11a9ca;
        var _0x54e3f2 = _0x2c9d14("./object");
        ((_0x11a9ca.prototype = Object.create(_0x54e3f2.prototype)).constructor = _0x11a9ca).className = "Enum";
        var _0x2c1436 = _0x2c9d14("./namespace");
        var _0x3cba8e = _0x2c9d14("./util");
        function _0x11a9ca(_0x38a8d8, _0x4cdde9, _0x3bb798, _0x36ac0a, _0x2ec0dd, _0x4f9302) {
          _0x54e3f2.call(this, _0x38a8d8, _0x3bb798);
          if (_0x4cdde9 && "object" != typeof _0x4cdde9) {
            throw TypeError("values must be an object");
          }
          this.valuesById = {};
          this.values = Object.create(this.valuesById);
          this.comment = _0x36ac0a;
          this.comments = _0x2ec0dd || {};
          this.valuesOptions = _0x4f9302;
          this.reserved = undefined;
          if (_0x4cdde9) {
            var _0x4d8437 = Object.keys(_0x4cdde9);
            for (var _0x24f27a = 0x0; _0x24f27a < _0x4d8437.length; ++_0x24f27a) {
              if ("number" == typeof _0x4cdde9[_0x4d8437[_0x24f27a]]) {
                this.valuesById[this.values[_0x4d8437[_0x24f27a]] = _0x4cdde9[_0x4d8437[_0x24f27a]]] = _0x4d8437[_0x24f27a];
              }
            }
          }
        }
        _0x11a9ca.fromJSON = function (_0x38aa7d, _0x51f42c) {
          var _0x6d6f2a = new _0x11a9ca(_0x38aa7d, _0x51f42c.values, _0x51f42c.options, _0x51f42c.comment, _0x51f42c.comments);
          _0x6d6f2a.reserved = _0x51f42c.reserved;
          return _0x6d6f2a;
        };
        _0x11a9ca.prototype.toJSON = function (_0x3ed756) {
          var _0x126109 = !!_0x3ed756 && Boolean(_0x3ed756.keepComments);
          return _0x3cba8e.toObject(["options", this.options, 'valuesOptions', this.valuesOptions, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", _0x126109 ? this.comment : undefined, "comments", _0x126109 ? this.comments : undefined]);
        };
        _0x11a9ca.prototype.add = function (_0x30ec52, _0x85a50d, _0x2f9d62, _0x3f211a) {
          if (!_0x3cba8e.isString(_0x30ec52)) {
            throw TypeError("name must be a string");
          }
          if (!_0x3cba8e.isInteger(_0x85a50d)) {
            throw TypeError("id must be an integer");
          }
          if (undefined !== this.values[_0x30ec52]) {
            throw Error("duplicate name '" + _0x30ec52 + "' in " + this);
          }
          if (this.isReservedId(_0x85a50d)) {
            throw Error("id " + _0x85a50d + " is reserved in " + this);
          }
          if (this.isReservedName(_0x30ec52)) {
            throw Error("name '" + _0x30ec52 + "' is reserved in " + this);
          }
          if (undefined !== this.valuesById[_0x85a50d]) {
            if (!this.options || !this.options.allow_alias) {
              throw Error("duplicate id " + _0x85a50d + " in " + this);
            }
            this.values[_0x30ec52] = _0x85a50d;
          } else {
            this.valuesById[this.values[_0x30ec52] = _0x85a50d] = _0x30ec52;
          }
          if (_0x3f211a) {
            if (undefined === this.valuesOptions) {
              this.valuesOptions = {};
            }
            this.valuesOptions[_0x30ec52] = _0x3f211a || null;
          }
          this.comments[_0x30ec52] = _0x2f9d62 || null;
          return this;
        };
        _0x11a9ca.prototype.remove = function (_0x4e22ea) {
          if (!_0x3cba8e.isString(_0x4e22ea)) {
            throw TypeError("name must be a string");
          }
          var _0x23c49d = this.values[_0x4e22ea];
          if (null == _0x23c49d) {
            throw Error("name '" + _0x4e22ea + "' does not exist in " + this);
          }
          delete this.valuesById[_0x23c49d];
          delete this.values[_0x4e22ea];
          delete this.comments[_0x4e22ea];
          if (this.valuesOptions) {
            delete this.valuesOptions[_0x4e22ea];
          }
          return this;
        };
        _0x11a9ca.prototype.isReservedId = function (_0x556041) {
          return _0x2c1436.isReservedId(this.reserved, _0x556041);
        };
        _0x11a9ca.prototype.isReservedName = function (_0x519212) {
          return _0x2c1436.isReservedName(this.reserved, _0x519212);
        };
        _0x5b748e.exports;
      }, function () {
        return {
          './object': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/object.js',
          './namespace': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js", function (_0xd8dc73, _0x2d5462, _0x5ac649, _0xb84ce3, _0x24ce5e) {
        _0x5ac649.exports = function (_0x137466) {
          var _0x2671a3;
          var _0x44869a = _0x2abf9d.codegen(['m', 'w'], _0x137466.name + "$encode")("if(!w)")('w=Writer.create()');
          var _0x3a9de0 = _0x137466.fieldsArray.slice().sort(_0x2abf9d.compareFieldsById);
          for (var _0x11355c = 0x0; _0x11355c < _0x3a9de0.length; ++_0x11355c) {
            var _0x1f21e0 = _0x3a9de0[_0x11355c].resolve();
            var _0x229bcf = _0x137466._fieldsArray.indexOf(_0x1f21e0);
            var _0x3cad80 = _0x1f21e0.resolvedType instanceof _0x2ce1e7 ? "int32" : _0x1f21e0.type;
            var _0x20aa74 = _0x3f03ab.basic[_0x3cad80];
            _0x2671a3 = 'm' + _0x2abf9d.safeProp(_0x1f21e0.name);
            if (_0x1f21e0.map) {
              _0x44869a("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", _0x2671a3, _0x1f21e0.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", _0x2671a3)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (_0x1f21e0.id << 0x3 | 0x2) >>> 0x0, 0x8 | _0x3f03ab.mapKey[_0x1f21e0.keyType], _0x1f21e0.keyType);
              if (undefined === _0x20aa74) {
                _0x44869a("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", _0x229bcf, _0x2671a3);
              } else {
                _0x44869a(".uint32(%i).%s(%s[ks[i]]).ldelim()", 0x10 | _0x20aa74, _0x3cad80, _0x2671a3);
              }
              _0x44869a('}')('}');
            } else if (_0x1f21e0.repeated) {
              _0x44869a('if(%s!=null&&%s.length){', _0x2671a3, _0x2671a3);
              if (_0x1f21e0.packed && undefined !== _0x3f03ab.packed[_0x3cad80]) {
                _0x44869a("w.uint32(%i).fork()", (_0x1f21e0.id << 0x3 | 0x2) >>> 0x0)("for(var i=0;i<%s.length;++i)", _0x2671a3)("w.%s(%s[i])", _0x3cad80, _0x2671a3)('w.ldelim()');
              } else {
                _0x44869a("for(var i=0;i<%s.length;++i)", _0x2671a3);
                if (undefined === _0x20aa74) {
                  if (_0x1f21e0.resolvedType.group) {
                    _0x44869a("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0x229bcf, _0x2671a3 + '[i]', (_0x1f21e0.id << 0x3 | 0x3) >>> 0x0, (_0x1f21e0.id << 0x3 | 0x4) >>> 0x0);
                  } else {
                    _0x44869a("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", _0x229bcf, _0x2671a3 + '[i]', (_0x1f21e0.id << 0x3 | 0x2) >>> 0x0);
                  }
                } else {
                  _0x44869a('w.uint32(%i).%s(%s[i])', (_0x1f21e0.id << 0x3 | _0x20aa74) >>> 0x0, _0x3cad80, _0x2671a3);
                }
              }
              _0x44869a('}');
            } else {
              if (_0x1f21e0.optional) {
                _0x44869a("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", _0x2671a3, _0x1f21e0.name);
              }
              if (undefined === _0x20aa74) {
                if (_0x1f21e0.resolvedType.group) {
                  _0x44869a("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0x229bcf, _0x2671a3, (_0x1f21e0.id << 0x3 | 0x3) >>> 0x0, (_0x1f21e0.id << 0x3 | 0x4) >>> 0x0);
                } else {
                  _0x44869a("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", _0x229bcf, _0x2671a3, (_0x1f21e0.id << 0x3 | 0x2) >>> 0x0);
                }
              } else {
                _0x44869a("w.uint32(%i).%s(%s)", (_0x1f21e0.id << 0x3 | _0x20aa74) >>> 0x0, _0x3cad80, _0x2671a3);
              }
            }
          }
          return _0x44869a("return w");
        };
        var _0x2ce1e7 = _0x2d5462("./enum");
        var _0x3f03ab = _0x2d5462("./types");
        var _0x2abf9d = _0x2d5462("./util");
        _0x5ac649.exports;
      }, function () {
        return {
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js", function (_0x1c270d, _0x40992f, _0xe70e61, _0x42466f, _0xbab03f) {
        var _0x1cb06f = _0xe70e61.exports = _0x40992f("./index-minimal");
        _0x1cb06f.build = "light";
        _0x1cb06f.load = function (_0x5beed3, _0x3bca93, _0x4acd59) {
          if ('function' == typeof _0x3bca93) {
            _0x4acd59 = _0x3bca93;
            _0x3bca93 = new _0x1cb06f.Root();
          } else if (!_0x3bca93) {
            _0x3bca93 = new _0x1cb06f.Root();
          }
          return _0x3bca93.load(_0x5beed3, _0x4acd59);
        };
        _0x1cb06f.loadSync = function (_0x2a40ca, _0xe9fbf2) {
          if (!_0xe9fbf2) {
            _0xe9fbf2 = new _0x1cb06f.Root();
          }
          return _0xe9fbf2.loadSync(_0x2a40ca);
        };
        _0x1cb06f.encoder = _0x40992f("./encoder");
        _0x1cb06f.decoder = _0x40992f("./decoder");
        _0x1cb06f.verifier = _0x40992f('./verifier');
        _0x1cb06f.converter = _0x40992f("./converter");
        _0x1cb06f.ReflectionObject = _0x40992f("./object");
        _0x1cb06f.Namespace = _0x40992f("./namespace");
        _0x1cb06f.Root = _0x40992f('./root');
        _0x1cb06f.Enum = _0x40992f("./enum");
        _0x1cb06f.Type = _0x40992f("./type");
        _0x1cb06f.Field = _0x40992f("./field");
        _0x1cb06f.OneOf = _0x40992f("./oneof");
        _0x1cb06f.MapField = _0x40992f("./mapfield");
        _0x1cb06f.Service = _0x40992f("./service");
        _0x1cb06f.Method = _0x40992f("./method");
        _0x1cb06f.Message = _0x40992f("./message");
        _0x1cb06f.wrappers = _0x40992f("./wrappers");
        _0x1cb06f.types = _0x40992f("./types");
        _0x1cb06f.util = _0x40992f("./util");
        _0x1cb06f.ReflectionObject._configure(_0x1cb06f.Root);
        _0x1cb06f.Namespace._configure(_0x1cb06f.Type, _0x1cb06f.Service, _0x1cb06f.Enum);
        _0x1cb06f.Root._configure(_0x1cb06f.Type);
        _0x1cb06f.Field._configure(_0x1cb06f.Type);
        _0xe70e61.exports;
      }, function () {
        return {
          './index-minimal': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js',
          './encoder': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js",
          './decoder': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js',
          './verifier': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          './converter': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          './object': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/object.js',
          './namespace': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './root': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './type': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './field': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './oneof': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './mapfield': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './service': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          './method': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/method.js',
          './message': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          './wrappers': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js",
          './types': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js", function (_0x52162c, _0x5ca9f9, _0x67d75e, _0x298b9f, _0x38aaed) {
        _0x67d75e.exports = _0x2aa6f1;
        var _0x521d49 = /[\s{}=;:[\],'"()<>]/g;
        var _0x17554e = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
        var _0x47f1c6 = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
        var _0x48b726 = /^ *[*/]+ */;
        var _0x7a5482 = /^\s*\*?\/*/;
        var _0x5e5c6d = /\n/g;
        var _0x47b201 = /\s/;
        var _0x20ae48 = /\\(.?)/g;
        var _0x4cd924 = {
          0x0: "\0",
          'r': "\r",
          'n': "\n",
          't': "\t"
        };
        function _0xe45939(_0x343079) {
          return _0x343079.replace(_0x20ae48, function (_0x4b7a71, _0x137671) {
            switch (_0x137671) {
              case "\\":
              case '':
                return _0x137671;
              default:
                return _0x4cd924[_0x137671] || '';
            }
          });
        }
        function _0x2aa6f1(_0x174bd3, _0x209213) {
          _0x174bd3 = _0x174bd3.toString();
          var _0x21a01f = 0x0;
          var _0x27e52b = _0x174bd3.length;
          var _0x3f7238 = 0x1;
          var _0x21ea2e = 0x0;
          var _0x460c92 = {};
          var _0x2c17cc = [];
          var _0x46f2f8 = null;
          function _0x454327(_0x51c6fb, _0x214786, _0x537fe3) {
            var _0x2cd95f;
            var _0x1a23dc = {
              'type': _0x174bd3.charAt(_0x51c6fb++),
              'lineEmpty': false,
              'leading': _0x537fe3
            };
            var _0x53735c = _0x51c6fb - (_0x209213 ? 0x2 : 0x3);
            do {
              if (--_0x53735c < 0x0 || "\n" === (_0x2cd95f = _0x174bd3.charAt(_0x53735c))) {
                _0x1a23dc.lineEmpty = true;
                break;
              }
            } while (" " === _0x2cd95f || "\t" === _0x2cd95f);
            var _0x2d63e7 = _0x174bd3.substring(_0x51c6fb, _0x214786).split(_0x5e5c6d);
            for (var _0x2caa98 = 0x0; _0x2caa98 < _0x2d63e7.length; ++_0x2caa98) {
              _0x2d63e7[_0x2caa98] = _0x2d63e7[_0x2caa98].replace(_0x209213 ? _0x7a5482 : _0x48b726, '').trim();
            }
            _0x1a23dc.text = _0x2d63e7.join("\n").trim();
            _0x460c92[_0x3f7238] = _0x1a23dc;
            _0x21ea2e = _0x3f7238;
          }
          function _0x367052(_0x548e0c) {
            var _0x165649 = _0x1537df(_0x548e0c);
            var _0x217156 = _0x174bd3.substring(_0x548e0c, _0x165649);
            return /^\s*\/\//.test(_0x217156);
          }
          function _0x1537df(_0x96bfcc) {
            for (var _0x21ab19 = _0x96bfcc; _0x21ab19 < _0x27e52b && "\n" !== _0x174bd3.charAt(_0x21ab19);) {
              _0x21ab19++;
            }
            return _0x21ab19;
          }
          function _0x3a7854() {
            if (_0x2c17cc.length > 0x0) {
              return _0x2c17cc.shift();
            }
            if (_0x46f2f8) {
              return function () {
                var _0x4b1b28 = "'" === _0x46f2f8 ? _0x47f1c6 : _0x17554e;
                _0x4b1b28.lastIndex = _0x21a01f - 0x1;
                var _0x53f2cf = _0x4b1b28.exec(_0x174bd3);
                if (!_0x53f2cf) {
                  throw Error("illegal string (line " + _0x3f7238 + ')');
                }
                _0x21a01f = _0x4b1b28.lastIndex;
                _0x1323fe(_0x46f2f8);
                _0x46f2f8 = null;
                return _0xe45939(_0x53f2cf[0x1]);
              }();
            }
            var _0x52557d;
            var _0x59f937;
            var _0x5af672;
            var _0x152595;
            var _0x5a0e91;
            var _0xe3f64 = 0x0 === _0x21a01f;
            do {
              if (_0x21a01f === _0x27e52b) {
                return null;
              }
              for (_0x52557d = false; _0x47b201.test(_0x5af672 = _0x174bd3.charAt(_0x21a01f));) {
                if ("\n" === _0x5af672) {
                  _0xe3f64 = true;
                  ++_0x3f7238;
                }
                if (++_0x21a01f === _0x27e52b) {
                  return null;
                }
              }
              if ('/' === _0x174bd3.charAt(_0x21a01f)) {
                if (++_0x21a01f === _0x27e52b) {
                  throw Error("illegal comment (line " + _0x3f7238 + ')');
                }
                if ('/' === _0x174bd3.charAt(_0x21a01f)) {
                  if (_0x209213) {
                    _0x152595 = _0x21a01f;
                    _0x5a0e91 = false;
                    if (_0x367052(_0x21a01f - 0x1)) {
                      _0x5a0e91 = true;
                      do {
                        if ((_0x21a01f = _0x1537df(_0x21a01f)) === _0x27e52b) {
                          break;
                        }
                        _0x21a01f++;
                        if (!_0xe3f64) {
                          break;
                        }
                      } while (_0x367052(_0x21a01f));
                    } else {
                      _0x21a01f = Math.min(_0x27e52b, _0x1537df(_0x21a01f) + 0x1);
                    }
                    if (_0x5a0e91) {
                      _0x454327(_0x152595, _0x21a01f, _0xe3f64);
                      _0xe3f64 = true;
                    }
                    _0x3f7238++;
                    _0x52557d = true;
                  } else {
                    for (_0x5a0e91 = '/' === _0x174bd3.charAt(_0x152595 = _0x21a01f + 0x1); "\n" !== _0x174bd3.charAt(++_0x21a01f);) {
                      if (_0x21a01f === _0x27e52b) {
                        return null;
                      }
                    }
                    ++_0x21a01f;
                    if (_0x5a0e91) {
                      _0x454327(_0x152595, _0x21a01f - 0x1, _0xe3f64);
                      _0xe3f64 = true;
                    }
                    ++_0x3f7238;
                    _0x52557d = true;
                  }
                } else {
                  if ('*' !== (_0x5af672 = _0x174bd3.charAt(_0x21a01f))) {
                    return '/';
                  }
                  _0x152595 = _0x21a01f + 0x1;
                  _0x5a0e91 = _0x209213 || '*' === _0x174bd3.charAt(_0x152595);
                  do {
                    if ("\n" === _0x5af672) {
                      ++_0x3f7238;
                    }
                    if (++_0x21a01f === _0x27e52b) {
                      throw Error("illegal comment (line " + _0x3f7238 + ')');
                    }
                    _0x59f937 = _0x5af672;
                    _0x5af672 = _0x174bd3.charAt(_0x21a01f);
                  } while ('*' !== _0x59f937 || '/' !== _0x5af672);
                  ++_0x21a01f;
                  if (_0x5a0e91) {
                    _0x454327(_0x152595, _0x21a01f - 0x2, _0xe3f64);
                    _0xe3f64 = true;
                  }
                  _0x52557d = true;
                }
              }
            } while (_0x52557d);
            var _0x3b21c6 = _0x21a01f;
            _0x521d49.lastIndex = 0x0;
            if (!_0x521d49.test(_0x174bd3.charAt(_0x3b21c6++))) {
              for (; _0x3b21c6 < _0x27e52b && !_0x521d49.test(_0x174bd3.charAt(_0x3b21c6));) {
                ++_0x3b21c6;
              }
            }
            var _0x43fec4 = _0x174bd3.substring(_0x21a01f, _0x21a01f = _0x3b21c6);
            if (!("\"" !== _0x43fec4 && "'" !== _0x43fec4)) {
              _0x46f2f8 = _0x43fec4;
            }
            return _0x43fec4;
          }
          function _0x1323fe(_0x2cbdea) {
            _0x2c17cc.push(_0x2cbdea);
          }
          function _0x564a92() {
            if (!_0x2c17cc.length) {
              var _0x262c18 = _0x3a7854();
              if (null === _0x262c18) {
                return null;
              }
              _0x1323fe(_0x262c18);
            }
            return _0x2c17cc[0x0];
          }
          return Object.defineProperty({
            'next': _0x3a7854,
            'peek': _0x564a92,
            'push': _0x1323fe,
            'skip': function (_0x36e2e2, _0x3346ab) {
              var _0x3cf48b = _0x564a92();
              if (_0x3cf48b === _0x36e2e2) {
                _0x3a7854();
                return true;
              }
              if (!_0x3346ab) {
                throw Error("illegal " + ("token '" + _0x3cf48b + "', '" + _0x36e2e2 + "' expected") + " (line " + _0x3f7238 + ')');
              }
              return false;
            },
            'cmnt': function (_0x4e0272) {
              var _0x1bbd7a;
              var _0x28f987 = null;
              if (undefined === _0x4e0272) {
                _0x1bbd7a = _0x460c92[_0x3f7238 - 0x1];
                delete _0x460c92[_0x3f7238 - 0x1];
                if (_0x1bbd7a && (_0x209213 || '*' === _0x1bbd7a.type || _0x1bbd7a.lineEmpty)) {
                  _0x28f987 = _0x1bbd7a.leading ? _0x1bbd7a.text : null;
                }
              } else {
                if (_0x21ea2e < _0x4e0272) {
                  _0x564a92();
                }
                _0x1bbd7a = _0x460c92[_0x4e0272];
                delete _0x460c92[_0x4e0272];
                if (!(!_0x1bbd7a || _0x1bbd7a.lineEmpty || !_0x209213 && '/' !== _0x1bbd7a.type)) {
                  _0x28f987 = _0x1bbd7a.leading ? null : _0x1bbd7a.text;
                }
              }
              return _0x28f987;
            }
          }, "line", {
            'get': function () {
              return _0x3f7238;
            }
          });
        }
        _0x2aa6f1.unescape = _0xe45939;
        _0x67d75e.exports;
      }, {});
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/parse.js", function (_0x563fd5, _0x2e55b5, _0xdb8e70, _0x1d1bd6, _0x28b814) {
        _0xdb8e70.exports = _0x285917;
        _0x285917.filename = null;
        _0x285917.defaults = {
          'keepCase': false
        };
        var _0x3fdb76 = _0x2e55b5('./tokenize');
        var _0x55fc84 = _0x2e55b5("./root");
        var _0x38175a = _0x2e55b5('./type');
        var _0x568461 = _0x2e55b5("./field");
        var _0x1e50c6 = _0x2e55b5('./mapfield');
        var _0xfcd3ac = _0x2e55b5("./oneof");
        var _0x5d7664 = _0x2e55b5("./enum");
        var _0x162319 = _0x2e55b5("./service");
        var _0x364cd4 = _0x2e55b5("./method");
        var _0x1a8735 = _0x2e55b5("./types");
        var _0x4e9847 = _0x2e55b5("./util");
        var _0x499f53 = /^[1-9][0-9]*$/;
        var _0x11bf0f = /^-?[1-9][0-9]*$/;
        var _0x312001 = /^0[x][0-9a-fA-F]+$/;
        var _0x2a7a0b = /^-?0[x][0-9a-fA-F]+$/;
        var _0x50a320 = /^0[0-7]+$/;
        var _0x479d88 = /^-?0[0-7]+$/;
        var _0x26bd57 = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
        var _0x53ba14 = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
        var _0x481648 = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
        var _0x2d2b62 = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
        function _0x285917(_0x1e4fd5, _0x59926e, _0x10edea) {
          if (!(_0x59926e instanceof _0x55fc84)) {
            _0x10edea = _0x59926e;
            _0x59926e = new _0x55fc84();
          }
          if (!_0x10edea) {
            _0x10edea = _0x285917.defaults;
          }
          var _0x55a57f;
          var _0x234a75;
          var _0x5498f9;
          var _0x4285a8;
          var _0x26a908;
          var _0x32e045 = _0x10edea.preferTrailingComment || false;
          var _0x557d0c = _0x3fdb76(_0x1e4fd5, _0x10edea.alternateCommentMode || false);
          var _0x4fbc6b = _0x557d0c.next;
          var _0x138e3f = _0x557d0c.push;
          var _0x2fdd10 = _0x557d0c.peek;
          var _0x40444a = _0x557d0c.skip;
          var _0x3814fb = _0x557d0c.cmnt;
          var _0x1504bf = true;
          var _0x2cae61 = false;
          var _0x3ce80a = _0x59926e;
          var _0xa76601 = _0x10edea.keepCase ? function (_0x551a3c) {
            return _0x551a3c;
          } : _0x4e9847.camelCase;
          function _0x4f1725(_0x2a47c4, _0x3589bc, _0x2c851c) {
            var _0x35958f = _0x285917.filename;
            if (!_0x2c851c) {
              _0x285917.filename = null;
            }
            return Error("illegal " + (_0x3589bc || "token") + " '" + _0x2a47c4 + "' (" + (_0x35958f ? _0x35958f + ", " : '') + "line " + _0x557d0c.line + ')');
          }
          function _0x507e4e() {
            var _0x3e151e;
            var _0x5c8070 = [];
            do {
              if ("\"" !== (_0x3e151e = _0x4fbc6b()) && "'" !== _0x3e151e) {
                throw _0x4f1725(_0x3e151e);
              }
              _0x5c8070.push(_0x4fbc6b());
              _0x40444a(_0x3e151e);
              _0x3e151e = _0x2fdd10();
            } while ("\"" === _0x3e151e || "'" === _0x3e151e);
            return _0x5c8070.join('');
          }
          function _0x759439(_0x41cefb) {
            var _0x289da5 = _0x4fbc6b();
            switch (_0x289da5) {
              case "'":
              case "\"":
                _0x138e3f(_0x289da5);
                return _0x507e4e();
              case "true":
              case 'TRUE':
                return true;
              case "false":
              case "FALSE":
                return false;
            }
            try {
              return function (_0x1185f4, _0x3da854) {
                var _0x376148 = 0x1;
                if ('-' === _0x1185f4.charAt(0x0)) {
                  _0x376148 = -0x1;
                  _0x1185f4 = _0x1185f4.substring(0x1);
                }
                switch (_0x1185f4) {
                  case "inf":
                  case "INF":
                  case "Inf":
                    return _0x376148 * Infinity;
                  case "nan":
                  case "NAN":
                  case "Nan":
                  case "NaN":
                    return NaN;
                  case '0':
                    return 0x0;
                }
                if (_0x499f53.test(_0x1185f4)) {
                  return _0x376148 * parseInt(_0x1185f4, 0xa);
                }
                if (_0x312001.test(_0x1185f4)) {
                  return _0x376148 * parseInt(_0x1185f4, 0x10);
                }
                if (_0x50a320.test(_0x1185f4)) {
                  return _0x376148 * parseInt(_0x1185f4, 0x8);
                }
                if (_0x26bd57.test(_0x1185f4)) {
                  return _0x376148 * parseFloat(_0x1185f4);
                }
                throw _0x4f1725(_0x1185f4, "number", _0x3da854);
              }(_0x289da5, true);
            } catch (_0x50fe6f) {
              if (_0x41cefb && _0x481648.test(_0x289da5)) {
                return _0x289da5;
              }
              throw _0x4f1725(_0x289da5, "value");
            }
          }
          function _0xcbe390(_0xfafea9, _0x4aede6) {
            var _0x163bea;
            var _0x306b97;
            do {
              if (!_0x4aede6 || "\"" !== (_0x163bea = _0x2fdd10()) && "'" !== _0x163bea) {
                _0xfafea9.push([_0x306b97 = _0x169ec0(_0x4fbc6b()), _0x40444a('to', true) ? _0x169ec0(_0x4fbc6b()) : _0x306b97]);
              } else {
                _0xfafea9.push(_0x507e4e());
              }
            } while (_0x40444a(',', true));
            var _0x1f1c61 = {
              'options': undefined,
              'setOption': function (_0x3a7591, _0x1f6f30) {
                if (undefined === this.options) {
                  this.options = {};
                }
                this.options[_0x3a7591] = _0x1f6f30;
              }
            };
            _0x1f9d91(_0x1f1c61, function (_0x37c13b) {
              if ("option" !== _0x37c13b) {
                throw _0x4f1725(_0x37c13b);
              }
              _0x155433(_0x1f1c61, _0x37c13b);
              _0x40444a(';');
            }, function () {
              _0x52688b(_0x1f1c61);
            });
          }
          function _0x169ec0(_0x39dbb5, _0x139848) {
            switch (_0x39dbb5) {
              case "max":
              case "MAX":
              case 'Max':
                return 0x1fffffff;
              case '0':
                return 0x0;
            }
            if (!_0x139848 && '-' === _0x39dbb5.charAt(0x0)) {
              throw _0x4f1725(_0x39dbb5, 'id');
            }
            if (_0x11bf0f.test(_0x39dbb5)) {
              return parseInt(_0x39dbb5, 0xa);
            }
            if (_0x2a7a0b.test(_0x39dbb5)) {
              return parseInt(_0x39dbb5, 0x10);
            }
            if (_0x479d88.test(_0x39dbb5)) {
              return parseInt(_0x39dbb5, 0x8);
            }
            throw _0x4f1725(_0x39dbb5, 'id');
          }
          function _0x291c19() {
            if (undefined !== _0x55a57f) {
              throw _0x4f1725("package");
            }
            _0x55a57f = _0x4fbc6b();
            if (!_0x481648.test(_0x55a57f)) {
              throw _0x4f1725(_0x55a57f, "name");
            }
            _0x3ce80a = _0x3ce80a.define(_0x55a57f);
            _0x40444a(';');
          }
          function _0x2b8c80() {
            var _0x571f81;
            var _0x742691 = _0x2fdd10();
            switch (_0x742691) {
              case "weak":
                _0x571f81 = _0x5498f9 || (_0x5498f9 = []);
                _0x4fbc6b();
                break;
              case 'public':
                _0x4fbc6b();
              default:
                _0x571f81 = _0x234a75 || (_0x234a75 = []);
            }
            _0x742691 = _0x507e4e();
            _0x40444a(';');
            _0x571f81.push(_0x742691);
          }
          function _0x283b49() {
            _0x40444a('=');
            _0x4285a8 = _0x507e4e();
            if (!(_0x2cae61 = 'proto3' === _0x4285a8) && "proto2" !== _0x4285a8) {
              throw _0x4f1725(_0x4285a8, "syntax");
            }
            _0x59926e.setOption("syntax", _0x4285a8);
            _0x40444a(';');
          }
          function _0x50ec93(_0x157592, _0x42454e) {
            switch (_0x42454e) {
              case "option":
                _0x155433(_0x157592, _0x42454e);
                _0x40444a(';');
                return true;
              case "message":
                _0x51a10b(_0x157592, _0x42454e);
                return true;
              case 'enum':
                _0x489616(_0x157592, _0x42454e);
                return true;
              case "service":
                (function (_0x5187b6, _0x46f1a9) {
                  if (!_0x53ba14.test(_0x46f1a9 = _0x4fbc6b())) {
                    throw _0x4f1725(_0x46f1a9, "service name");
                  }
                  var _0x5be46e = new _0x162319(_0x46f1a9);
                  _0x1f9d91(_0x5be46e, function (_0x1ca776) {
                    if (!_0x50ec93(_0x5be46e, _0x1ca776)) {
                      if ("rpc" !== _0x1ca776) {
                        throw _0x4f1725(_0x1ca776);
                      }
                      !function (_0x1cd0d9, _0x1ed353) {
                        var _0x5d6c87 = _0x3814fb();
                        var _0x3ee27a = _0x1ed353;
                        if (!_0x53ba14.test(_0x1ed353 = _0x4fbc6b())) {
                          throw _0x4f1725(_0x1ed353, "name");
                        }
                        var _0x39cf33;
                        var _0x6fe4cb;
                        var _0x3a7f41;
                        var _0x472561;
                        var _0x2a39f6 = _0x1ed353;
                        _0x40444a('(');
                        if (_0x40444a("stream", true)) {
                          _0x6fe4cb = true;
                        }
                        if (!_0x481648.test(_0x1ed353 = _0x4fbc6b())) {
                          throw _0x4f1725(_0x1ed353);
                        }
                        _0x39cf33 = _0x1ed353;
                        _0x40444a(')');
                        _0x40444a('returns');
                        _0x40444a('(');
                        if (_0x40444a('stream', true)) {
                          _0x472561 = true;
                        }
                        if (!_0x481648.test(_0x1ed353 = _0x4fbc6b())) {
                          throw _0x4f1725(_0x1ed353);
                        }
                        _0x3a7f41 = _0x1ed353;
                        _0x40444a(')');
                        var _0x1104af = new _0x364cd4(_0x2a39f6, _0x3ee27a, _0x39cf33, _0x3a7f41, _0x6fe4cb, _0x472561);
                        _0x1104af.comment = _0x5d6c87;
                        _0x1f9d91(_0x1104af, function (_0x3cec93) {
                          if ("option" !== _0x3cec93) {
                            throw _0x4f1725(_0x3cec93);
                          }
                          _0x155433(_0x1104af, _0x3cec93);
                          _0x40444a(';');
                        });
                        _0x1cd0d9.add(_0x1104af);
                      }(_0x5be46e, _0x1ca776);
                    }
                  });
                  _0x5187b6.add(_0x5be46e);
                })(_0x157592, _0x42454e);
                return true;
              case "extend":
                (function (_0x238378, _0x2da43c) {
                  if (!_0x481648.test(_0x2da43c = _0x4fbc6b())) {
                    throw _0x4f1725(_0x2da43c, "reference");
                  }
                  var _0x35fe24 = _0x2da43c;
                  _0x1f9d91(null, function (_0x241b28) {
                    switch (_0x241b28) {
                      case 'required':
                      case "repeated":
                        _0xba02f9(_0x238378, _0x241b28, _0x35fe24);
                        break;
                      case 'optional':
                        _0xba02f9(_0x238378, _0x2cae61 ? "proto3_optional" : "optional", _0x35fe24);
                        break;
                      default:
                        if (!_0x2cae61 || !_0x481648.test(_0x241b28)) {
                          throw _0x4f1725(_0x241b28);
                        }
                        _0x138e3f(_0x241b28);
                        _0xba02f9(_0x238378, "optional", _0x35fe24);
                    }
                  });
                })(_0x157592, _0x42454e);
                return true;
            }
            return false;
          }
          function _0x1f9d91(_0x19c930, _0xd46f2a, _0x360086) {
            var _0x33b54f = _0x557d0c.line;
            if (_0x19c930) {
              if ("string" != typeof _0x19c930.comment) {
                _0x19c930.comment = _0x3814fb();
              }
              _0x19c930.filename = _0x285917.filename;
            }
            if (_0x40444a('{', true)) {
              for (var _0x38fde4; '}' !== (_0x38fde4 = _0x4fbc6b());) {
                _0xd46f2a(_0x38fde4);
              }
              _0x40444a(';', true);
            } else {
              if (_0x360086) {
                _0x360086();
              }
              _0x40444a(';');
              if (_0x19c930 && ("string" != typeof _0x19c930.comment || _0x32e045)) {
                _0x19c930.comment = _0x3814fb(_0x33b54f) || _0x19c930.comment;
              }
            }
          }
          function _0x51a10b(_0x2109aa, _0x57aae6) {
            if (!_0x53ba14.test(_0x57aae6 = _0x4fbc6b())) {
              throw _0x4f1725(_0x57aae6, "type name");
            }
            var _0x26726d = new _0x38175a(_0x57aae6);
            _0x1f9d91(_0x26726d, function (_0x9caf4b) {
              if (!_0x50ec93(_0x26726d, _0x9caf4b)) {
                switch (_0x9caf4b) {
                  case 'map':
                    !function (_0x4b462a) {
                      _0x40444a('<');
                      var _0x5c2bbd = _0x4fbc6b();
                      if (undefined === _0x1a8735.mapKey[_0x5c2bbd]) {
                        throw _0x4f1725(_0x5c2bbd, "type");
                      }
                      _0x40444a(',');
                      var _0x88a304 = _0x4fbc6b();
                      if (!_0x481648.test(_0x88a304)) {
                        throw _0x4f1725(_0x88a304, "type");
                      }
                      _0x40444a('>');
                      var _0xc70570 = _0x4fbc6b();
                      if (!_0x53ba14.test(_0xc70570)) {
                        throw _0x4f1725(_0xc70570, "name");
                      }
                      _0x40444a('=');
                      var _0x358aae = new _0x1e50c6(_0xa76601(_0xc70570), _0x169ec0(_0x4fbc6b()), _0x5c2bbd, _0x88a304);
                      _0x1f9d91(_0x358aae, function (_0x2c1d0b) {
                        if ("option" !== _0x2c1d0b) {
                          throw _0x4f1725(_0x2c1d0b);
                        }
                        _0x155433(_0x358aae, _0x2c1d0b);
                        _0x40444a(';');
                      }, function () {
                        _0x52688b(_0x358aae);
                      });
                      _0x4b462a.add(_0x358aae);
                    }(_0x26726d);
                    break;
                  case 'required':
                  case "repeated":
                    _0xba02f9(_0x26726d, _0x9caf4b);
                    break;
                  case "optional":
                    _0xba02f9(_0x26726d, _0x2cae61 ? "proto3_optional" : "optional");
                    break;
                  case "oneof":
                    !function (_0x230109, _0x196163) {
                      if (!_0x53ba14.test(_0x196163 = _0x4fbc6b())) {
                        throw _0x4f1725(_0x196163, "name");
                      }
                      var _0x4a9000 = new _0xfcd3ac(_0xa76601(_0x196163));
                      _0x1f9d91(_0x4a9000, function (_0x4c046f) {
                        if ("option" === _0x4c046f) {
                          _0x155433(_0x4a9000, _0x4c046f);
                          _0x40444a(';');
                        } else {
                          _0x138e3f(_0x4c046f);
                          _0xba02f9(_0x4a9000, "optional");
                        }
                      });
                      _0x230109.add(_0x4a9000);
                    }(_0x26726d, _0x9caf4b);
                    break;
                  case 'extensions':
                    _0xcbe390(_0x26726d.extensions || (_0x26726d.extensions = []));
                    break;
                  case "reserved":
                    _0xcbe390(_0x26726d.reserved || (_0x26726d.reserved = []), true);
                    break;
                  default:
                    if (!_0x2cae61 || !_0x481648.test(_0x9caf4b)) {
                      throw _0x4f1725(_0x9caf4b);
                    }
                    _0x138e3f(_0x9caf4b);
                    _0xba02f9(_0x26726d, "optional");
                }
              }
            });
            _0x2109aa.add(_0x26726d);
          }
          function _0xba02f9(_0x1c0f5c, _0x2156d5, _0x4f8311) {
            var _0x6e655c = _0x4fbc6b();
            if ("group" !== _0x6e655c) {
              for (; _0x6e655c.endsWith('.') || _0x2fdd10().startsWith('.');) {
                _0x6e655c += _0x4fbc6b();
              }
              if (!_0x481648.test(_0x6e655c)) {
                throw _0x4f1725(_0x6e655c, 'type');
              }
              var _0x17807a = _0x4fbc6b();
              if (!_0x53ba14.test(_0x17807a)) {
                throw _0x4f1725(_0x17807a, "name");
              }
              _0x17807a = _0xa76601(_0x17807a);
              _0x40444a('=');
              var _0x1f52b4 = new _0x568461(_0x17807a, _0x169ec0(_0x4fbc6b()), _0x6e655c, _0x2156d5, _0x4f8311);
              _0x1f9d91(_0x1f52b4, function (_0x1627d2) {
                if ("option" !== _0x1627d2) {
                  throw _0x4f1725(_0x1627d2);
                }
                _0x155433(_0x1f52b4, _0x1627d2);
                _0x40444a(';');
              }, function () {
                _0x52688b(_0x1f52b4);
              });
              if ("proto3_optional" === _0x2156d5) {
                var _0x23ed44 = new _0xfcd3ac('_' + _0x17807a);
                _0x1f52b4.setOption("proto3_optional", true);
                _0x23ed44.add(_0x1f52b4);
                _0x1c0f5c.add(_0x23ed44);
              } else {
                _0x1c0f5c.add(_0x1f52b4);
              }
              if (!(_0x2cae61 || !_0x1f52b4.repeated || undefined === _0x1a8735.packed[_0x6e655c] && undefined !== _0x1a8735.basic[_0x6e655c])) {
                _0x1f52b4.setOption("packed", false, true);
              }
            } else {
              !function (_0x3ed94a, _0x152527) {
                var _0x1d83a5 = _0x4fbc6b();
                if (!_0x53ba14.test(_0x1d83a5)) {
                  throw _0x4f1725(_0x1d83a5, 'name');
                }
                var _0x5ea82a = _0x4e9847.lcFirst(_0x1d83a5);
                if (_0x1d83a5 === _0x5ea82a) {
                  _0x1d83a5 = _0x4e9847.ucFirst(_0x1d83a5);
                }
                _0x40444a('=');
                var _0x360b91 = _0x169ec0(_0x4fbc6b());
                var _0x2ee7c4 = new _0x38175a(_0x1d83a5);
                _0x2ee7c4.group = true;
                var _0x51b6b9 = new _0x568461(_0x5ea82a, _0x360b91, _0x1d83a5, _0x152527);
                _0x51b6b9.filename = _0x285917.filename;
                _0x1f9d91(_0x2ee7c4, function (_0x3e4df1) {
                  switch (_0x3e4df1) {
                    case 'option':
                      _0x155433(_0x2ee7c4, _0x3e4df1);
                      _0x40444a(';');
                      break;
                    case "required":
                    case "repeated":
                      _0xba02f9(_0x2ee7c4, _0x3e4df1);
                      break;
                    case "optional":
                      _0xba02f9(_0x2ee7c4, _0x2cae61 ? 'proto3_optional' : 'optional');
                      break;
                    case "message":
                      _0x51a10b(_0x2ee7c4, _0x3e4df1);
                      break;
                    case "enum":
                      _0x489616(_0x2ee7c4, _0x3e4df1);
                      break;
                    default:
                      throw _0x4f1725(_0x3e4df1);
                  }
                });
                _0x3ed94a.add(_0x2ee7c4).add(_0x51b6b9);
              }(_0x1c0f5c, _0x2156d5);
            }
          }
          function _0x489616(_0xfc51c1, _0x3404b8) {
            if (!_0x53ba14.test(_0x3404b8 = _0x4fbc6b())) {
              throw _0x4f1725(_0x3404b8, "name");
            }
            var _0xee471b = new _0x5d7664(_0x3404b8);
            _0x1f9d91(_0xee471b, function (_0x27542f) {
              switch (_0x27542f) {
                case "option":
                  _0x155433(_0xee471b, _0x27542f);
                  _0x40444a(';');
                  break;
                case "reserved":
                  _0xcbe390(_0xee471b.reserved || (_0xee471b.reserved = []), true);
                  break;
                default:
                  !function (_0x33d7c1, _0x3cd991) {
                    if (!_0x53ba14.test(_0x3cd991)) {
                      throw _0x4f1725(_0x3cd991, "name");
                    }
                    _0x40444a('=');
                    var _0x19d1a5 = _0x169ec0(_0x4fbc6b(), true);
                    var _0x15d728 = {
                      'options': undefined,
                      'setOption': function (_0x1f6eba, _0x18970e) {
                        if (undefined === this.options) {
                          this.options = {};
                        }
                        this.options[_0x1f6eba] = _0x18970e;
                      }
                    };
                    _0x1f9d91(_0x15d728, function (_0x285918) {
                      if ('option' !== _0x285918) {
                        throw _0x4f1725(_0x285918);
                      }
                      _0x155433(_0x15d728, _0x285918);
                      _0x40444a(';');
                    }, function () {
                      _0x52688b(_0x15d728);
                    });
                    _0x33d7c1.add(_0x3cd991, _0x19d1a5, _0x15d728.comment, _0x15d728.options);
                  }(_0xee471b, _0x27542f);
              }
            });
            _0xfc51c1.add(_0xee471b);
          }
          function _0x155433(_0x49fd09, _0x2740e5) {
            var _0x1cb1f3 = _0x40444a('(', true);
            if (!_0x481648.test(_0x2740e5 = _0x4fbc6b())) {
              throw _0x4f1725(_0x2740e5, "name");
            }
            var _0x59cf01;
            var _0x13951f = _0x2740e5;
            var _0x351a1f = _0x13951f;
            if (_0x1cb1f3) {
              _0x40444a(')');
              _0x351a1f = _0x13951f = '(' + _0x13951f + ')';
              _0x2740e5 = _0x2fdd10();
              if (_0x2d2b62.test(_0x2740e5)) {
                _0x59cf01 = _0x2740e5.slice(0x1);
                _0x13951f += _0x2740e5;
                _0x4fbc6b();
              }
            }
            _0x40444a('=');
            (function (_0x27f1ce, _0x266868, _0x538042, _0x12d41f) {
              if (_0x27f1ce.setParsedOption) {
                _0x27f1ce.setParsedOption(_0x266868, _0x538042, _0x12d41f);
              }
            })(_0x49fd09, _0x351a1f, _0x13c849(_0x49fd09, _0x13951f), _0x59cf01);
          }
          function _0x13c849(_0x36a020, _0x3a5297) {
            if (_0x40444a('{', true)) {
              for (var _0x3a3d13 = {}; !_0x40444a('}', true);) {
                if (!_0x53ba14.test(_0x26a908 = _0x4fbc6b())) {
                  throw _0x4f1725(_0x26a908, "name");
                }
                if (null === _0x26a908) {
                  throw _0x4f1725(_0x26a908, "end of input");
                }
                var _0x3c0fe7;
                var _0x186278 = _0x26a908;
                _0x40444a(':', true);
                if ('{' === _0x2fdd10()) {
                  _0x3c0fe7 = _0x13c849(_0x36a020, _0x3a5297 + '.' + _0x26a908);
                } else {
                  if ('[' === _0x2fdd10()) {
                    var _0x2bd3e4;
                    _0x3c0fe7 = [];
                    if (_0x40444a('[', true)) {
                      do {
                        _0x2bd3e4 = _0x759439(true);
                        _0x3c0fe7.push(_0x2bd3e4);
                      } while (_0x40444a(',', true));
                      _0x40444a(']');
                      if (undefined !== _0x2bd3e4) {
                        _0x48f0bf(_0x36a020, _0x3a5297 + '.' + _0x26a908, _0x2bd3e4);
                      }
                    }
                  } else {
                    _0x3c0fe7 = _0x759439(true);
                    _0x48f0bf(_0x36a020, _0x3a5297 + '.' + _0x26a908, _0x3c0fe7);
                  }
                }
                var _0x42071e = _0x3a3d13[_0x186278];
                if (_0x42071e) {
                  _0x3c0fe7 = [].concat(_0x42071e).concat(_0x3c0fe7);
                }
                _0x3a3d13[_0x186278] = _0x3c0fe7;
                _0x40444a(',', true);
                _0x40444a(';', true);
              }
              return _0x3a3d13;
            }
            var _0x3e3533 = _0x759439(true);
            _0x48f0bf(_0x36a020, _0x3a5297, _0x3e3533);
            return _0x3e3533;
          }
          function _0x48f0bf(_0x55af78, _0x161363, _0x2425a2) {
            if (_0x55af78.setOption) {
              _0x55af78.setOption(_0x161363, _0x2425a2);
            }
          }
          function _0x52688b(_0x9c29f0) {
            if (_0x40444a('[', true)) {
              do {
                _0x155433(_0x9c29f0, 'option');
              } while (_0x40444a(',', true));
              _0x40444a(']');
            }
            return _0x9c29f0;
          }
          for (; null !== (_0x26a908 = _0x4fbc6b());) {
            switch (_0x26a908) {
              case "package":
                if (!_0x1504bf) {
                  throw _0x4f1725(_0x26a908);
                }
                _0x291c19();
                break;
              case "import":
                if (!_0x1504bf) {
                  throw _0x4f1725(_0x26a908);
                }
                _0x2b8c80();
                break;
              case "syntax":
                if (!_0x1504bf) {
                  throw _0x4f1725(_0x26a908);
                }
                _0x283b49();
                break;
              case "option":
                _0x155433(_0x3ce80a, _0x26a908);
                _0x40444a(';');
                break;
              default:
                if (_0x50ec93(_0x3ce80a, _0x26a908)) {
                  _0x1504bf = false;
                  continue;
                }
                throw _0x4f1725(_0x26a908);
            }
          }
          _0x285917.filename = null;
          return {
            'package': _0x55a57f,
            'imports': _0x234a75,
            'weakImports': _0x5498f9,
            'syntax': _0x4285a8,
            'root': _0x59926e
          };
        }
        _0xdb8e70.exports;
      }, function () {
        return {
          './tokenize': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          './root': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          './type': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './field': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './mapfield': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './oneof': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './service': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          './method': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/method.js',
          './types': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/common.js", function (_0x6945c5, _0x584e10, _0x4040dc, _0x219e12, _0x5633a) {
        _0x4040dc.exports = _0x474eb3;
        var _0x3b95b3;
        var _0x34507f = /\/|\./;
        function _0x474eb3(_0x1437f4, _0x4448ea) {
          if (!_0x34507f.test(_0x1437f4)) {
            _0x1437f4 = "google/protobuf/" + _0x1437f4 + '.proto';
            _0x4448ea = {
              'nested': {
                'google': {
                  'nested': {
                    'protobuf': {
                      'nested': _0x4448ea
                    }
                  }
                }
              }
            };
          }
          _0x474eb3[_0x1437f4] = _0x4448ea;
        }
        _0x474eb3("any", {
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
        _0x474eb3('duration', {
          'Duration': _0x3b95b3 = {
            'fields': {
              'seconds': {
                'type': 'int64',
                'id': 0x1
              },
              'nanos': {
                'type': "int32",
                'id': 0x2
              }
            }
          }
        });
        _0x474eb3("timestamp", {
          'Timestamp': _0x3b95b3
        });
        _0x474eb3("empty", {
          'Empty': {
            'fields': {}
          }
        });
        _0x474eb3('struct', {
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
                'oneof': ["nullValue", 'numberValue', "stringValue", "boolValue", "structValue", 'listValue']
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
                'type': 'Value',
                'id': 0x1
              }
            }
          }
        });
        _0x474eb3("wrappers", {
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
        _0x474eb3("field_mask", {
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
        _0x474eb3.get = function (_0x59142e) {
          return _0x474eb3[_0x59142e] || null;
        };
        _0x4040dc.exports;
      }, {});
      var _0x4b69f3;
      _0x217aa0.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/index.js', function (_0x373ae0, _0x3cbc9e, _0x303f7f, _0x2a5638, _0x589469) {
        var _0x185fbd = _0x303f7f.exports = _0x3cbc9e("./index-light");
        _0x185fbd.build = "full";
        _0x185fbd.tokenize = _0x3cbc9e("./tokenize");
        _0x185fbd.parse = _0x3cbc9e("./parse");
        _0x185fbd.common = _0x3cbc9e("./common");
        _0x185fbd.Root._configure(_0x185fbd.Type, _0x185fbd.parse, _0x185fbd.common);
        _0x303f7f.exports;
      }, function () {
        return {
          './index-light': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js",
          './tokenize': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          './parse': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/parse.js",
          './common': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/common.js"
        };
      });
      var _0x242a14;
      var _0x454b71;
      var _0xc58b7e;
      var _0x1d5635;
      var _0x23903a;
      var _0x38e74c;
      var _0x491c24;
      var _0x3638d4;
      var _0x40a6bb;
      var _0x37a7ce;
      var _0xedf50c;
      var _0x20ae25;
      var _0x2ea847;
      _0x217aa0.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/index.js', function (_0xc94242, _0xa5ec52, _0x53a582, _0x3c97c8, _0x543d3b) {
        _0x53a582.exports = _0xa5ec52("./src/index");
        _0x4b69f3 = _0x53a582.exports;
      }, function () {
        return {
          './src/index': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/index.js'
        };
      });
      _0x217aa0.require('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/index.js');
      _0x3db04a._RF.push({}, 'c54e8DKve5HYLUir1LO+4gr', "SymbolWithBG", undefined);
      var _0x43ba24 = _0x5d1a01.ccclass;
      var _0x2b2423 = _0x5d1a01.property;
      _0x242a14 = _0x43ba24('SymbolWithBG');
      _0x454b71 = _0x2b2423({
        'type': _0x27831c,
        'tooltip': "symbol sprite frame"
      });
      _0xc58b7e = _0x2b2423({
        'type': _0x27831c,
        'tooltip': "JP symbol sprite frame"
      });
      _0x1d5635 = _0x2b2423({
        'type': _0x27831c,
        'tooltip': "JP background sprite frame"
      });
      _0x23903a = _0x2b2423({
        'type': _0x328c5f,
        'tooltip': "symbol node"
      });
      _0x38e74c = _0x2b2423({
        'type': _0x328c5f,
        'tooltip': "background node"
      });
      _0x3638d4 = function (_0x4c37ba) {
        function _0x733462() {
          var _0x5ddbcd;
          var _0x1624aa = arguments.length;
          var _0x3d6f71 = new Array(_0x1624aa);
          for (var _0x4f055f = 0x0; _0x4f055f < _0x1624aa; _0x4f055f++) {
            _0x3d6f71[_0x4f055f] = arguments[_0x4f055f];
          }
          _0x29845c(_0x5ddbcd = _0x4c37ba.call.apply(_0x4c37ba, [this].concat(_0x3d6f71)) || this, "m_SpriteFrames", _0x40a6bb, _0x1cc4fd(_0x5ddbcd));
          _0x29845c(_0x5ddbcd, "m_JPSpriteFrames", _0x37a7ce, _0x1cc4fd(_0x5ddbcd));
          _0x29845c(_0x5ddbcd, "m_backgroundSpriteFrames", _0xedf50c, _0x1cc4fd(_0x5ddbcd));
          _0x29845c(_0x5ddbcd, "m_symbolNode", _0x20ae25, _0x1cc4fd(_0x5ddbcd));
          _0x29845c(_0x5ddbcd, "m_backgroundNode", _0x2ea847, _0x1cc4fd(_0x5ddbcd));
          _0x5ddbcd.m_symbolType = 0x0;
          return _0x5ddbcd;
        }
        _0x4235b3(_0x733462, _0x4c37ba);
        var _0xab5d0c = _0x733462.prototype;
        _0xab5d0c.SetSymbolType = function (_0xf4302c, _0x1983f9) {
          if (undefined === _0xf4302c) {
            _0xf4302c = 0x0;
          }
          if (undefined === _0x1983f9) {
            _0x1983f9 = 0x0;
          }
          this.m_symbolType = _0xf4302c;
          if (_0xf4302c == _0x55e059.Symbol.BONUS_COIN_JP) {
            this.SetJPType(_0x1983f9);
            this.SetBackgroundActive(true);
          } else {
            this.m_symbolNode.getComponent(_0x43508a).spriteFrame = this.m_SpriteFrames[_0xf4302c];
            this.SetBackgroundActive(false);
          }
        };
        _0xab5d0c.SetJPType = function (_0x30fbb2) {
          if (undefined === _0x30fbb2) {
            _0x30fbb2 = 0x0;
          }
          switch (_0x30fbb2) {
            case 0x0:
              this.m_symbolNode.getComponent(_0x43508a).spriteFrame = this.m_JPSpriteFrames[0x0];
              this.m_backgroundNode.getComponent(_0x43508a).spriteFrame = this.m_backgroundSpriteFrames[0x0];
              break;
            case 0x1:
              this.m_symbolNode.getComponent(_0x43508a).spriteFrame = this.m_JPSpriteFrames[0x1];
              this.m_backgroundNode.getComponent(_0x43508a).spriteFrame = this.m_backgroundSpriteFrames[0x1];
              break;
            case 0x2:
              this.m_symbolNode.getComponent(_0x43508a).spriteFrame = this.m_JPSpriteFrames[0x2];
              this.m_backgroundNode.getComponent(_0x43508a).spriteFrame = this.m_backgroundSpriteFrames[0x2];
              break;
            case 0x3:
              this.m_symbolNode.getComponent(_0x43508a).spriteFrame = this.m_JPSpriteFrames[0x3];
              this.m_backgroundNode.getComponent(_0x43508a).spriteFrame = this.m_backgroundSpriteFrames[0x3];
          }
        };
        _0xab5d0c.SetSymbolActive = function (_0x2a71be) {
          this.m_symbolNode.active = _0x2a71be;
        };
        _0xab5d0c.SetBackgroundActive = function (_0x245a89) {
          this.m_backgroundNode.active = _0x245a89;
        };
        _0xab5d0c.SetAllActive = function (_0x47084e) {
          this.m_symbolNode.active = _0x47084e;
          this.m_backgroundNode.active = _0x47084e;
        };
        _0xab5d0c.SetDark = function (_0x65368b) {
          this.m_symbolNode.getComponent(_0x43508a).color = _0x65368b ? _0x55e059.Color.Dark : _0x55e059.Color.Light;
        };
        _0xef4a8(_0x733462, [{
          'key': "SymbolType",
          'get': function () {
            return this.m_symbolType;
          }
        }]);
        return _0x733462;
      }(_0xead8bf);
      _0x40a6bb = _0x2f48b7(_0x3638d4.prototype, "m_SpriteFrames", [_0x454b71], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x37a7ce = _0x2f48b7(_0x3638d4.prototype, 'm_JPSpriteFrames', [_0xc58b7e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0xedf50c = _0x2f48b7(_0x3638d4.prototype, "m_backgroundSpriteFrames", [_0x1d5635], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x20ae25 = _0x2f48b7(_0x3638d4.prototype, "m_symbolNode", [_0x23903a], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2ea847 = _0x2f48b7(_0x3638d4.prototype, "m_backgroundNode", [_0x38e74c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x492b27 = _0x242a14(_0x491c24 = _0x3638d4) || _0x491c24;
      var _0x57531a;
      var _0x1f47ad;
      var _0x5937e2;
      var _0x137799;
      var _0x1009ad;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "34de2pyU3tGgLxGDSuvsbBA", 'SlotReels', undefined);
      var _0x49be81 = [[0x1, 0x2, 0x1], [0x3, 0x4, 0x3], [0x5, 0x6, 0x5]];
      var _0xf5eef3 = [_0x40bacd(0x0, 0x0), _0x40bacd(0x0, 0x0), _0x40bacd(0x0, 0x0)];
      var _0x217e57 = -0x9;
      var _0x29dcaa = _0x5d1a01.property;
      _0x57531a = _0x29dcaa({
        'type': _0x5e80ec,
        'tooltip': "JP Symbol prefab"
      });
      _0x1f47ad = _0x29dcaa({
        'type': _0x341d90,
        'tooltip': "Symbol font"
      });
      _0x5937e2 = function (_0x399d69) {
        function _0x5858d2() {
          var _0xb81269;
          var _0x1f00ea = arguments.length;
          var _0x1f9ebb = new Array(_0x1f00ea);
          for (var _0xf0119c = 0x0; _0xf0119c < _0x1f00ea; _0xf0119c++) {
            _0x1f9ebb[_0xf0119c] = arguments[_0xf0119c];
          }
          _0x29845c(_0xb81269 = _0x399d69.call.apply(_0x399d69, [this].concat(_0x1f9ebb)) || this, "m_symbolPrefab", _0x137799, _0x1cc4fd(_0xb81269));
          _0x29845c(_0xb81269, "m_symbolFont", _0x1009ad, _0x1cc4fd(_0xb81269));
          _0xb81269.m_gameView = null;
          _0xb81269.m_viewSize = null;
          _0xb81269.m_symbolSize = null;
          _0xb81269.m_symbols = [];
          _0xb81269.m_plateInfo = _0x49be81;
          _0xb81269.m_upperSymbols = [];
          _0xb81269.m_lowerSymbols = [];
          _0xb81269.m_riseTime = 0x0;
          _0xb81269.m_upLength = 0x14;
          _0xb81269.m_spinBufferTime01 = 0.05;
          _0xb81269.m_spinBufferTime02 = 0.05;
          _0xb81269.m_spinSpeed = 0.18;
          _0xb81269.m_spinSpeedNormal = 0.18;
          _0xb81269.m_spinSpeedSpecial = 0.18;
          _0xb81269.m_downLength = 0x1e;
          _0xb81269.m_timesOfBaseSpin = 0x1;
          _0xb81269.m_spinIntervalTimes = 0x2;
          _0xb81269.m_spinDelayTime = 0x0;
          _0xb81269.m_timeOfNearWinSpin = 0xa;
          _0xb81269.m_time = 0x0;
          _0xb81269.m_stopTime = 0x0;
          _0xb81269.m_reelStopTimes = [];
          _0xb81269.m_reelPreTimes = [];
          _0xb81269.m_isStop = false;
          _0xb81269.m_isClickStopBtn = false;
          _0xb81269.m_isChangeToFinalSymbol = [];
          _0xb81269.m_isChangeSymbol = new Map();
          _0xb81269.m_currentMoveLength = new Map();
          _0xb81269.m_numberOfSymbol = 0x0;
          _0xb81269.m_isColStops = [];
          _0xb81269.m_isStopCbCall = [];
          _0xb81269.m_isArriveCbCall = [];
          _0xb81269.m_labelNode = [];
          _0xb81269.m_upperLabels = [];
          _0xb81269.m_lowerLabels = [];
          _0xb81269.m_symbolContainer = null;
          _0xb81269.m_labelContainer = null;
          _0xb81269.m_effectNode = [];
          _0xb81269.m_islastfly = false;
          return _0xb81269;
        }
        _0x4235b3(_0x5858d2, _0x399d69);
        var _0x41bd08 = _0x5858d2.prototype;
        _0x41bd08.onLoad = function () {
          var _0x475dd2 = this;
          this.m_viewSize = this.node.getComponent(_0x2387f8).contentSize;
          this.m_symbolSize = new _0x25a4a1(this.m_viewSize.width / 0x3, this.m_viewSize.height / 0x3);
          this.m_symbolContainer = new _0x328c5f();
          this.m_labelContainer = new _0x328c5f();
          this.node.addChild(this.m_symbolContainer);
          this.node.addChild(this.m_labelContainer);
          for (var _0x368897 = 0x0; _0x368897 < 0x3; _0x368897++) {
            this.m_reelStopTimes.push(null);
            this.m_reelPreTimes.push(null);
            var _0x4222d0 = this.m_symbolSize.width * (_0x368897 + 0.5) + _0xf5eef3[_0x368897].x - this.m_viewSize.width / 0x2;
            var _0x4286a1 = [];
            var _0x3445d4 = [];
            for (var _0x352cfa = 0x0; _0x352cfa < 0x3; _0x352cfa++) {
              var _0x3a409e = this.NewSymbolNode(this.m_plateInfo[_0x368897][_0x352cfa], String(this.m_numberOfSymbol));
              this.m_numberOfSymbol++;
              this.m_symbolContainer.addChild(_0x3a409e);
              var _0x7115e1 = this.m_symbolSize.height * (0x3 - (_0x352cfa + 0.5)) + _0xf5eef3[_0x368897].y - this.m_viewSize.height / 0x2;
              _0x3a409e.setPosition(_0x4222d0, _0x7115e1);
              _0x4286a1.push(_0x3a409e);
              var _0xad8051 = new _0x328c5f();
              _0xad8051.addComponent(_0x502387);
              _0xad8051.getComponent(_0x502387).string = '';
              _0xad8051.getComponent(_0x502387).font = this.m_symbolFont;
              _0xad8051.getComponent(_0x502387).spacingX = _0x217e57;
              this.m_labelContainer.addChild(_0xad8051);
              _0xad8051.setPosition(_0x4222d0, _0x7115e1);
              _0xad8051.name = _0x3a409e.name;
              _0x3445d4.push(_0xad8051);
              this.m_isChangeSymbol.set(_0x3a409e.name, false);
              this.m_currentMoveLength.set(_0x3a409e.name, 0x0);
            }
            this.m_symbols.push(_0x4286a1);
            this.m_labelNode.push(_0x3445d4);
          }
          for (var _0x287d25 = 0x0; _0x287d25 < 0x3; _0x287d25++) {
            var _0x6e7961 = this.m_symbolSize.width * (_0x287d25 + 0.5) + _0xf5eef3[_0x287d25].x - this.m_viewSize.width / 0x2;
            var _0x4eef9b = this.m_symbolSize.height * 3.5 + _0xf5eef3[_0x287d25].y - this.m_viewSize.height / 0x2;
            var _0x278433 = this.NewSymbolNode(_0x55e059.Symbol.CHERRY + _0x287d25, String(this.m_numberOfSymbol));
            this.m_numberOfSymbol++;
            this.m_symbolContainer.addChild(_0x278433);
            _0x278433.setPosition(_0x6e7961, _0x4eef9b);
            this.m_upperSymbols.push(_0x278433);
            var _0x564d3f = new _0x328c5f();
            _0x564d3f.addComponent(_0x502387);
            _0x564d3f.getComponent(_0x502387).string = '';
            _0x564d3f.getComponent(_0x502387).font = this.m_symbolFont;
            _0x564d3f.getComponent(_0x502387).spacingX = _0x217e57;
            this.m_labelContainer.addChild(_0x564d3f);
            _0x564d3f.setPosition(_0x6e7961, _0x4eef9b);
            _0x564d3f.name = String(this.m_numberOfSymbol);
            this.m_upperLabels.push(_0x564d3f);
            _0x278433.active = false;
            this.m_isChangeSymbol.set(_0x278433.name, false);
            this.m_currentMoveLength.set(_0x278433.name, 0x0);
          }
          for (var _0x3f6cde = 0x0; _0x3f6cde < 0x3; _0x3f6cde++) {
            var _0x4d335c = this.m_symbolSize.width * (_0x3f6cde + 0.5) + _0xf5eef3[_0x3f6cde].x - this.m_viewSize.width / 0x2;
            var _0x26298c = -0.5 * this.m_symbolSize.height + _0xf5eef3[_0x3f6cde].y - this.m_viewSize.height / 0x2;
            var _0x2e0a76 = this.NewSymbolNode(_0x55e059.Symbol.CHERRY + _0x3f6cde, String(this.m_numberOfSymbol));
            this.m_numberOfSymbol++;
            this.m_symbolContainer.addChild(_0x2e0a76);
            _0x2e0a76.setPosition(_0x4d335c, _0x26298c);
            this.m_lowerSymbols.push(_0x2e0a76);
            var _0x4f2e08 = new _0x328c5f();
            _0x4f2e08.addComponent(_0x502387);
            _0x4f2e08.getComponent(_0x502387).string = '';
            _0x4f2e08.getComponent(_0x502387).font = this.m_symbolFont;
            _0x4f2e08.getComponent(_0x502387).spacingX = _0x217e57;
            this.m_labelContainer.addChild(_0x4f2e08);
            _0x4f2e08.setPosition(_0x4d335c, _0x26298c);
            _0x4f2e08.name = String(this.m_numberOfSymbol);
            this.m_lowerLabels.push(_0x4f2e08);
            _0x2e0a76.active = false;
            this.m_isChangeSymbol.set(_0x2e0a76.name, false);
            this.m_currentMoveLength.set(_0x2e0a76.name, 0x0);
          }
          this.m_isChangeToFinalSymbol = Array(this.m_numberOfSymbol).fill(false);
          var _0x5856c9 = function () {
            var _0x427a7b = _0x285fb6.TempoSetting.FortuneGems;
            _0x475dd2.m_riseTime = _0x427a7b.BASE.RISE_TIME;
            _0x475dd2.m_upLength = _0x427a7b.BASE.UP_LENGTH;
            _0x475dd2.m_spinBufferTime01 = _0x427a7b.BASE.SPIN_BUFFER_TIME_01;
            _0x475dd2.m_spinBufferTime02 = _0x427a7b.BASE.SPIN_BUFFER_TIME_02;
            _0x475dd2.m_downLength = _0x427a7b.BASE.DOWN_LENGTH;
            _0x475dd2.m_spinSpeed = _0x427a7b.BASE.SPIN_SPEED;
            _0x475dd2.m_timesOfBaseSpin = _0x427a7b.BASE.TIMES_OF_BASE_SPIN;
            _0x475dd2.m_spinIntervalTimes = _0x427a7b.BASE.SPIN_INTERVAL_TIMES;
            _0x475dd2.m_spinDelayTime = _0x427a7b.BASE.SPIN_DELAY_TIME;
            _0x475dd2.m_spinSpeedNormal = _0x427a7b.BASE.SPIN_SPEED;
            _0x475dd2.m_spinSpeedSpecial = _0x427a7b.BASE.SPIN_MULT_SPEED;
          };
          _0x5856c9();
          _0x285fb6.AddCb(_0x5856c9);
        };
        _0x41bd08.Init = function (_0xb7eec3) {
          this.m_gameView = _0xb7eec3;
        };
        _0x41bd08.NewSymbolNode = function (_0x2d315d, _0x5d9873) {
          var _0x5e7cce = _0x4e7326(this.m_symbolPrefab);
          _0x5e7cce.name = _0x5d9873;
          _0x5e7cce.getComponent(_0x492b27).SetSymbolType(_0x2d315d);
          return _0x5e7cce;
        };
        _0x41bd08.SetPlateSymbol = function (_0x5a793b, _0xfe7f03) {
          if (undefined === _0x5a793b) {
            _0x5a793b = [];
          }
          if (undefined === _0xfe7f03) {
            _0xfe7f03 = [];
          }
          for (var _0x2adc5d = 0x0; _0x2adc5d < 0x3; _0x2adc5d++) {
            for (var _0x4949b4 = 0x0; _0x4949b4 < 0x3; _0x4949b4++) {
              this.m_labelNode[_0x2adc5d][_0x4949b4].getComponent(_0x502387).string = '';
              this.m_symbols[_0x2adc5d][_0x4949b4].active = true;
            }
          }
          if (0x0 == _0x5a793b.length) {
            _0x5a793b = _0x49be81;
            for (var _0x43215e = 0x0; _0x43215e < 0x3; _0x43215e++) {
              _0xfe7f03.push([0x0, 0x0, 0x0]);
            }
          }
          for (var _0x2f3478 = 0x0; _0x2f3478 < 0x3; _0x2f3478++) {
            var _0xc7d81 = this.m_symbolSize.width * (_0x2f3478 + 0.5) + _0xf5eef3[_0x2f3478].x - this.m_viewSize.width / 0x2;
            for (var _0x3b7293 = 0x0; _0x3b7293 < 0x3; _0x3b7293++) {
              this.m_symbols[_0x2f3478][_0x3b7293].getComponent(_0x492b27).SetSymbolType(_0x5a793b[_0x2f3478][_0x3b7293]);
              this.m_labelNode[_0x2f3478][_0x3b7293].getComponent(_0x502387).string = 0x0 == _0xfe7f03[_0x2f3478][_0x3b7293] ? '' : _0xfe7f03[_0x2f3478][_0x3b7293].toString();
              var _0x2e388f = this.m_symbolSize.height * (0x3 - _0x3b7293 - 0.5) + _0xf5eef3[_0x2f3478].y - this.m_viewSize.height / 0x2;
              this.m_symbols[_0x2f3478][_0x3b7293].setPosition(_0xc7d81, _0x2e388f);
              this.m_labelNode[_0x2f3478][_0x3b7293].setPosition(_0xc7d81, _0x2e388f);
            }
          }
          for (var _0x322d31 = 0x0; _0x322d31 < 0x3; _0x322d31++) {
            var _0x459a5e = this.m_symbolSize.width * (_0x322d31 + 0.5) + _0xf5eef3[_0x322d31].x - this.m_viewSize.width / 0x2;
            var _0xf801c8 = this.m_symbolSize.height * 3.5 + _0xf5eef3[_0x322d31].y - this.m_viewSize.height / 0x2;
            this.m_upperSymbols[_0x322d31].setPosition(_0x459a5e, _0xf801c8);
            this.m_upperSymbols[_0x322d31].active = false;
            this.m_upperLabels[_0x322d31].setPosition(_0x459a5e, _0xf801c8);
            this.m_upperLabels[_0x322d31].active = false;
            var _0x556920 = -0.5 * this.m_symbolSize.height + _0xf5eef3[_0x322d31].y - this.m_viewSize.height / 0x2;
            this.m_lowerSymbols[_0x322d31].setPosition(_0x459a5e, _0x556920);
            this.m_lowerSymbols[_0x322d31].active = false;
            this.m_lowerLabels[_0x322d31].setPosition(_0x459a5e, _0x556920);
            this.m_lowerLabels[_0x322d31].active = false;
          }
        };
        _0x41bd08.StartSpin = function () {
          this.m_time = 0x0;
          this.m_stopTime = 0x0;
          this.m_isStop = false;
          this.m_isClickStopBtn = false;
          this.m_isColStops = Array(_0x55e059.COL).fill(false);
          this.m_isStopCbCall = Array(_0x55e059.COL).fill(false);
          this.m_isArriveCbCall = Array(_0x55e059.COL).fill(false);
          this.m_effectNode = [];
          _0x1783d7.StartSpin();
          if (this.m_gameView.IsInBG) {
            this.m_spinSpeed = this.m_spinSpeedSpecial;
          } else {
            this.m_spinSpeed = this.m_spinSpeedNormal;
          }
          for (var _0x19e404 = 0x0; _0x19e404 < 0x3; _0x19e404++) {
            this.m_reelStopTimes[_0x19e404] = null;
            this.m_reelPreTimes[_0x19e404] = null;
            this.m_effectNode.push([null, null, null]);
          }
          for (var _0x2e9e0e = 0x0; _0x2e9e0e < this.m_isChangeToFinalSymbol.length; _0x2e9e0e++) {
            this.m_isChangeToFinalSymbol[_0x2e9e0e] = false;
          }
          var _0x5dc07b;
          for (var _0x11775e = _0x499970(this.m_currentMoveLength.keys()); !(_0x5dc07b = _0x11775e()).done;) {
            var _0x21122c = _0x5dc07b.value;
            this.m_currentMoveLength.set(_0x21122c, 0x0);
          }
          this.SetUpperAndLowerActive(true);
        };
        _0x41bd08.SetPlateInfo = function (_0x421a64) {
          this.m_plateInfo = this.ConvertPlateInfo(_0x421a64);
          var _0x36a53b = this.m_riseTime * 0x3;
          var _0x585259 = Math.ceil((this.m_time - _0x36a53b) / this.m_spinSpeed);
          _0x585259 = _0x585259 <= 0x0 ? 0x1 : _0x585259;
          if (this.m_isClickStopBtn) {
            this.m_stopTime = _0x1cac53.strip(this.m_spinSpeed * (_0x585259 + 0x1) + this.m_spinDelayTime + _0x36a53b + this.m_spinBufferTime01 + this.m_spinBufferTime02 + 0x0);
            for (var _0x46cfe4 = 0x0; _0x46cfe4 < 0x3; _0x46cfe4++) {
              this.m_reelStopTimes[_0x46cfe4] = _0x1cac53.strip(this.m_spinSpeed * _0x585259 + 0x1);
              this.m_reelPreTimes[_0x46cfe4] = _0x1cac53.strip(this.m_spinSpeed * _0x585259);
            }
          } else {
            this.m_stopTime = _0x1cac53.strip(this.m_spinSpeed * (_0x585259 + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * 2 + this.m_spinDelayTime + _0x36a53b + this.m_spinBufferTime01 + this.m_spinBufferTime02);
            for (var _0x356c2c = 0x0; _0x356c2c < 0x3; _0x356c2c++) {
              this.m_reelStopTimes[_0x356c2c] = _0x1cac53.strip(this.m_spinSpeed * (_0x585259 + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * _0x356c2c * this.m_spinSpeed);
              this.m_reelPreTimes[_0x356c2c] = _0x1cac53.strip(this.m_reelStopTimes[_0x356c2c] - this.m_spinSpeed);
            }
            if (this.m_gameView.IsNearwin) {
              this.m_stopTime = _0x1cac53.strip(this.m_stopTime + this.m_timeOfNearWinSpin * this.m_spinSpeed);
              this.m_reelStopTimes[_0x55e059.COL - 0x1] += this.m_timeOfNearWinSpin * this.m_spinSpeed;
              this.m_reelPreTimes[_0x55e059.COL - 0x1] += this.m_timeOfNearWinSpin * this.m_spinSpeed;
            }
          }
        };
        _0x41bd08.SetIsClickStopBtn = function () {
          if (!this.m_gameView.IsInBG && (this.m_isClickStopBtn = true, this.m_gameView.IsNearwin = false, this.m_gameView.EffectPlate.HideNearwinEffect(), 0x0 != this.m_stopTime)) {
            var _0x27389a = this.m_riseTime * 0x3;
            var _0x12ef53 = Math.ceil((this.m_time - _0x27389a) / this.m_spinSpeed);
            var _0x2a82d8 = (_0x12ef53 = _0x12ef53 <= 0x0 ? 0x1 : _0x12ef53) * this.m_spinSpeed + this.m_spinDelayTime + this.m_spinBufferTime01 + this.m_spinBufferTime02 + 0x0;
            if (_0x2a82d8 < this.m_stopTime) {
              this.m_stopTime = _0x1cac53.strip(_0x2a82d8);
            }
            var _0x377d01 = _0x12ef53 * this.m_spinSpeed;
            for (var _0x30a0fc = 0x0; _0x30a0fc < 0x3; _0x30a0fc++) {
              if (this.m_reelStopTimes[_0x30a0fc] > _0x377d01) {
                this.m_reelStopTimes[_0x30a0fc] = _0x1cac53.strip(_0x377d01);
                this.m_reelPreTimes[_0x30a0fc] = _0x1cac53.strip(_0x377d01 - this.m_spinSpeed);
              }
            }
          }
        };
        _0x41bd08.Spin = function (_0x31d716) {
          this.m_time = _0x1cac53.strip(this.m_time + _0x31d716);
          if (!this.m_isStop) {
            this.Spin_RealSpinMultiple();
            if (this.m_time >= this.m_stopTime && 0x0 != this.m_stopTime && this.m_isColStops[_0x55e059.COL - 0x1] && this.m_isColStops[0x0] && this.m_isColStops[0x1] && this.m_isColStops[0x2]) {
              this.m_isStop = true;
              this.SetUpperAndLowerActive(false);
            }
          }
        };
        _0x41bd08.Spin_RealSpinMultiple = function () {
          var _0x948063 = this;
          var _0x3d9044 = function (_0x5059ee) {
            var _0x2ac555 = _0x948063.m_spinSpeed;
            for (var _0x5d7d88 = 0x0; _0x5d7d88 < _0x55e059.ROW; _0x5d7d88++) {
              _0x948063.SpinMoving(_0x5059ee, _0x5d7d88, _0x948063.m_symbols[_0x5059ee][_0x5d7d88], _0x2ac555, null, _0x948063.m_labelNode[_0x5059ee][_0x5d7d88]);
            }
            var _0x29f689 = function () {
              var _0x156b33 = _0x9f23dc(_0x288614().mark(function _0x3cc07b() {
                var _0x4bed5d;
                var _0x5975f2;
                var _0x5b70fa;
                var _0x429491;
                var _0x1b8552;
                var _0x1c5cf1;
                return _0x288614().wrap(function (_0x41bb84) {
                  for (;;) {
                    switch (_0x41bb84.prev = _0x41bb84.next) {
                      case 0x0:
                        _0x4bed5d = _0x948063.m_gameView.GetRoundInfo().Symbol;
                        _0x5975f2 = 0x0;
                      case 0x2:
                        if (!(_0x5975f2 < _0x55e059.ROW)) {
                          _0x41bb84.next = 0x1d;
                          break;
                        }
                        if (!(_0x4bed5d[_0x5059ee].Col[_0x5975f2] < _0x55e059.Symbol.BONUS_COIN)) {
                          _0x41bb84.next = 0x5;
                          break;
                        }
                        return _0x41bb84.abrupt("continue", 0x1a);
                      case 0x5:
                        if (_0x948063.m_gameView.IsInBG) {
                          _0x41bb84.next = 0x1a;
                          break;
                        }
                        _0x5b70fa = false;
                        _0x429491 = _0x55e059.COL - 0x1;
                      case 0x8:
                        if (!(_0x429491 >= 0x0)) {
                          _0x41bb84.next = 0x17;
                          break;
                        }
                        _0x1b8552 = _0x55e059.ROW - 0x1;
                      case 0xa:
                        if (!(_0x1b8552 >= 0x0)) {
                          _0x41bb84.next = 0x12;
                          break;
                        }
                        if (!(_0x948063.m_gameView.GetRoundInfo().Symbol[_0x429491].Col[_0x1b8552] >= _0x55e059.Symbol.BONUS_COIN)) {
                          _0x41bb84.next = 0xf;
                          break;
                        }
                        _0x5b70fa = true;
                        _0x948063.m_islastfly = _0x429491 == _0x5059ee && _0x1b8552 == _0x5975f2;
                        return _0x41bb84.abrupt("break", 0x12);
                      case 0xf:
                        _0x1b8552--;
                        _0x41bb84.next = 0xa;
                        break;
                      case 0x12:
                        if (!_0x5b70fa) {
                          _0x41bb84.next = 0x14;
                          break;
                        }
                        return _0x41bb84.abrupt("break", 0x17);
                      case 0x14:
                        _0x429491--;
                        _0x41bb84.next = 0x8;
                        break;
                      case 0x17:
                        _0x1c5cf1 = _0x948063.m_gameView.EffectPlate.FlyDestination.getWorldPosition();
                        if (_0x948063.m_islastfly) {
                          _0x948063.m_gameView.EffectPlate.ShowFly(_0x948063.m_gameView.SlotReels.GetSymbolPosition(_0x5059ee, _0x5975f2, true), _0x1c5cf1, _0x55e059.FlyType.Shrink, _0x4bed5d[_0x5059ee].Col[_0x5975f2], _0x948063.m_gameView.GetJPIndex(_0x5059ee, _0x5975f2), true, _0x5059ee <= _0x55e059.MID_COL).then(_0x9f23dc(_0x288614().mark(function _0x4b33fc() {
                            return _0x288614().wrap(function (_0x340d0d) {
                              for (;;) {
                                switch (_0x340d0d.prev = _0x340d0d.next) {
                                  case 0x0:
                                    _0x948063.m_gameView.IsJPFlyStop = true;
                                    _0x340d0d.next = 0x3;
                                    return _0x2516e0.Wait(_0x948063.m_gameView, 0.75);
                                  case 0x3:
                                    if (!(Math.random() < _0x55e059.ChrUpgradeOdd) || _0x948063.m_gameView.IsBigAward) {
                                      _0x340d0d.next = 0x7;
                                      break;
                                    }
                                    _0x948063.m_gameView.EffectPlate.JokerCharacter.PlayPotUpgrade();
                                    _0x340d0d.next = 0x7;
                                    return _0x948063.m_gameView.EffectPlate.ShowCharacterUpgrade(false);
                                  case 0x7:
                                  case "end":
                                    return _0x340d0d.stop();
                                }
                              }
                            }, _0x4b33fc);
                          })));
                        }
                        _0x948063.m_gameView.EffectPlate.ShowFly(_0x948063.m_gameView.SlotReels.GetSymbolPosition(_0x5059ee, _0x5975f2, true), _0x1c5cf1, _0x55e059.FlyType.Shrink, _0x4bed5d[_0x5059ee].Col[_0x5975f2], _0x948063.m_gameView.GetJPIndex(_0x5059ee, _0x5975f2), true, _0x5059ee <= _0x55e059.MID_COL);
                      case 0x1a:
                        _0x5975f2++;
                        _0x41bb84.next = 0x2;
                        break;
                      case 0x1d:
                        if (!_0x948063.m_isColStops[_0x5059ee]) {
                          _0x948063.m_upperSymbols[_0x5059ee].active = false;
                          _0x948063.m_lowerSymbols[_0x5059ee].active = false;
                          _0x948063.m_isColStops[_0x5059ee] = true;
                          if (_0x5059ee == _0x55e059.COL - 0x1 && _0x948063.m_gameView.IsNearwin) {
                            _0x948063.m_gameView.EffectPlate.HideNearwinEffect();
                            _0x948063.m_gameView.IsNearwin = false;
                          }
                          if (0x1 == _0x5059ee && _0x948063.m_gameView.IsNearwin) {
                            _0x948063.m_gameView.EffectPlate.ShowNearwinEffect();
                            _0x948063.m_gameView.EffectPlate.ShowSymbolNearWin();
                          }
                        }
                      case 0x1e:
                      case "end":
                        return _0x41bb84.stop();
                    }
                  }
                }, _0x3cc07b);
              }));
              return function () {
                return _0x156b33.apply(this, arguments);
              };
            }();
            _0x948063.SpinMoving(_0x5059ee, -0x1, _0x948063.m_upperSymbols[_0x5059ee], _0x2ac555, _0x29f689, _0x948063.m_upperLabels[_0x5059ee], function () {
              _0x948063.m_gameView.EffectPlate.ShowSymbolStop(_0x5059ee, _0x948063.m_effectNode);
              _0x350c15.Play(_0x55e059.AudioClips.Reel_Stop, false);
            });
            _0x948063.SpinMoving(_0x5059ee, _0x55e059.ROW, _0x948063.m_lowerSymbols[_0x5059ee], _0x2ac555, null, _0x948063.m_lowerLabels[_0x5059ee]);
          };
          for (var _0x40b85b = 0x0; _0x40b85b < _0x55e059.COL; _0x40b85b++) {
            _0x3d9044(_0x40b85b);
          }
        };
        _0x41bd08.SpinMoving = function (_0x366513, _0x2cf53c, _0x3a1d02, _0x5d1725, _0x3c746f, _0x51345c, _0x26079e) {
          if (undefined === _0x51345c) {
            _0x51345c = null;
          }
          var _0x2bde2e = this.m_time;
          var _0x130898 = this.m_reelStopTimes[_0x366513];
          var _0x3a25c3 = this.m_riseTime * _0x55e059.COL;
          var _0x23f824 = this.m_symbolSize.height * (_0x55e059.ROW + 0x2);
          var _0x23107f = this.m_symbolSize.height * (_0x55e059.ROW - _0x2cf53c + 0.5);
          var _0x4a2253 = this.m_symbolSize.width * (_0x366513 + 0.5) + _0xf5eef3[_0x366513].x - this.m_viewSize.width / 0x2;
          var _0x175088 = this.m_symbolSize.height * (0x3 - (_0x2cf53c + 0.5)) + _0xf5eef3[_0x366513].y - this.m_viewSize.height / 0x2;
          var _0x23adad = 0x0;
          if (_0x2bde2e < this.m_riseTime * _0x366513) {
            ;
          } else {
            if (_0x2bde2e < this.m_riseTime * (_0x366513 + 0x1)) {
              _0x23adad = (_0x2bde2e - this.m_riseTime * _0x366513) / this.m_riseTime * this.m_upLength;
            } else {
              if (_0x2bde2e < _0x3a25c3) {
                _0x23adad = this.m_upLength;
              } else {
                if (null == _0x130898 || _0x2bde2e < _0x130898 + _0x3a25c3) {
                  var _0x494f02 = (_0x2bde2e - _0x3a25c3) % _0x5d1725 / _0x5d1725 * _0x23f824;
                  _0x23adad = -this.GetMovelength(_0x494f02, _0x23107f, _0x23f824, _0x366513, _0x2cf53c, _0x3a1d02, _0x51345c.getComponent(_0x502387));
                } else if (_0x2bde2e < _0x130898 + _0x3a25c3 + this.m_spinBufferTime01) {
                  _0x23adad = -(_0x2bde2e - _0x130898 - _0x3a25c3) / this.m_spinBufferTime01 * this.m_downLength;
                  this.CheckChangeToFinalSymbol(_0x366513, _0x2cf53c, _0x3a1d02, _0x51345c.getComponent(_0x502387));
                } else if (_0x2bde2e < _0x130898 + _0x3a25c3 + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
                  _0x23adad = (_0x2bde2e - _0x130898 - _0x3a25c3 - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
                  _0x23adad -= this.m_downLength;
                  this.CheckChangeToFinalSymbol(_0x366513, _0x2cf53c, _0x3a1d02, _0x51345c.getComponent(_0x502387));
                } else {
                  this.CheckChangeToFinalSymbol(_0x366513, _0x2cf53c, _0x3a1d02, _0x51345c.getComponent(_0x502387));
                }
              }
            }
          }
          _0x3a1d02.setPosition(_0x4a2253, _0x175088 + _0x23adad);
          _0x51345c.setPosition(_0x4a2253, _0x175088 + _0x23adad);
          if (_0x130898 && _0x2bde2e >= _0x130898 + _0x3a25c3 + this.m_spinBufferTime01 + this.m_spinBufferTime02 && _0x3c746f && !this.m_isStopCbCall[_0x366513]) {
            this.m_isStopCbCall[_0x366513] = true;
            _0x3c746f();
          }
          if (_0x130898 && _0x2bde2e >= _0x130898 + _0x3a25c3 && _0x26079e && !this.m_isArriveCbCall[_0x366513]) {
            this.m_isArriveCbCall[_0x366513] = true;
            _0x26079e();
          }
          if (_0x2cf53c >= 0x0 && _0x2cf53c < _0x55e059.ROW && this.m_effectNode[_0x366513][_0x2cf53c]) {
            this.m_effectNode[_0x366513][_0x2cf53c].setPosition(_0x4a2253, _0x175088 + _0x23adad);
          }
        };
        _0x41bd08.GetMovelength = function (_0x4ff0ac, _0x4cab30, _0x2a9e38, _0x5d3fca, _0x54208b, _0x13668f, _0xfe9f4c) {
          if (_0x4ff0ac >= _0x4cab30) {
            _0x4ff0ac -= _0x2a9e38;
          }
          if (this.m_currentMoveLength.get(_0x13668f.name) >= _0x4ff0ac) {
            if (!this.m_isChangeSymbol.get(_0x13668f.name)) {
              this.m_isChangeSymbol.set(_0x13668f.name, true);
              this.ChangeSymbol(_0x5d3fca, _0x54208b, _0x13668f, false, _0xfe9f4c);
            }
          } else {
            this.m_isChangeSymbol.set(_0x13668f.name, false);
          }
          this.m_currentMoveLength.set(_0x13668f.name, _0x4ff0ac);
          return _0x4ff0ac;
        };
        _0x41bd08.ChangeSymbol = function (_0x1ca477, _0x155fa0, _0x1f003f, _0x41c337, _0x4a5a23) {
          var _0x9619e0 = this.m_reelPreTimes[_0x1ca477];
          var _0x443734 = this.m_riseTime * 0x3;
          var _0x1c9f2c = 0x0;
          if (!_0x1f003f.getComponent(_0x502387)) {
            _0x4a5a23.string = '';
            if (_0x9619e0 && this.m_time - _0x443734 > _0x9619e0 || _0x41c337) {
              if (_0x155fa0 >= 0x0 && _0x155fa0 < _0x55e059.ROW) {
                _0x1c9f2c = this.m_plateInfo[_0x1ca477][_0x155fa0];
                _0x1f003f.getComponent(_0x492b27).SetSymbolType(_0x1c9f2c, this.m_gameView.GetJPIndex(_0x1ca477, _0x155fa0));
                if (_0x1c9f2c == _0x55e059.Symbol.BONUS_COIN) {
                  _0x4a5a23.string = _0x1cac53.strip(this.m_gameView.GetRoundInfo().Mul[_0x1ca477].Col[_0x155fa0] * _0x3f2a41.GetNowBetValue()).toString();
                }
                if (this.m_gameView.IsInBG && _0x1c9f2c == _0x55e059.Symbol.ROYAL_BONUS_COIN && this.m_gameView.GetRoundInfo().Mul[_0x1ca477].Col[_0x155fa0] > 0x0) {
                  this.SetSymbolActive(_0x1ca477, _0x155fa0, false);
                }
              } else {
                if ((_0x1c9f2c = this.GetRandomSymbol(_0x1ca477, _0x1f003f)) == _0x55e059.Symbol.BONUS_COIN) {
                  var _0x255dfa = _0x55e059.BonusCoinMul[Math.floor(Math.random() * _0x55e059.BonusCoinMul.length)];
                  _0x4a5a23.string = _0x1cac53.strip(_0x255dfa * _0x3f2a41.GetNowBetValue()).toString();
                }
              }
            } else {
              if ((_0x1c9f2c = this.GetRandomSymbol(_0x1ca477, _0x1f003f)) == _0x55e059.Symbol.BONUS_COIN) {
                var _0x3307a2 = _0x55e059.BonusCoinMul[Math.floor(Math.random() * _0x55e059.BonusCoinMul.length)];
                _0x4a5a23.string = _0x1cac53.strip(_0x3307a2 * _0x3f2a41.GetNowBetValue()).toString();
              }
            }
            if (_0x1c9f2c == _0x55e059.Symbol.EMPTY) {
              _0x1cac53.SetZIndex(_0x1f003f, -0x3e8);
            } else {
              _0x1cac53.SetZIndex(_0x1f003f, _0x1ca477 * _0x55e059.ROW + _0x155fa0);
            }
            if (this.m_gameView.EffectPlate.IsCurNearWin && _0x1c9f2c < _0x55e059.Symbol.BONUS_COIN) {
              this.SetSymbolDark(_0x1ca477, _0x155fa0, true);
            } else {
              this.SetSymbolDark(_0x1ca477, _0x155fa0, false);
            }
          }
        };
        _0x41bd08.CheckChangeToFinalSymbol = function (_0xb16181, _0x5f6399, _0x59e812, _0x5312fa) {
          var _0x57774f = Number(_0x59e812.name);
          if (!this.m_isChangeToFinalSymbol[_0x57774f]) {
            this.m_isChangeToFinalSymbol[_0x57774f] = true;
            this.ChangeSymbol(_0xb16181, _0x5f6399, _0x59e812, true, _0x5312fa);
          }
        };
        _0x41bd08.IsPlateStop = function () {
          return this.m_isStop;
        };
        _0x41bd08.GetRandomSymbol = function (_0x447bad, _0x20461c) {
          var _0x46f2d1 = 0x0;
          if (this.m_gameView.IsInBG) {
            var _0x3bd671 = [];
            if (0x1 == _0x447bad) {
              var _0x4a2a07 = (_0x3bd671 = _0x55e059.MID_FAKE_SYMBOLS_BG).length;
              _0x46f2d1 = _0x3bd671[Math.floor(Math.random() * _0x4a2a07)];
            } else {
              _0x3bd671 = _0x55e059.FAKE_SYMBOLS_BG;
              var _0x118082 = Math.random();
              _0x46f2d1 = _0x118082 < 0.3 ? _0x55e059.Symbol.EMPTY : (_0x118082 = Math.random()) < 0.9 ? _0x55e059.Symbol.BONUS_COIN : _0x55e059.Symbol.BONUS_COIN_JP;
            }
          } else {
            var _0x2a8ef2 = [];
            var _0x2d304b = (_0x2a8ef2 = 0x1 == _0x447bad ? _0x55e059.MID_FAKE_SYMBOLS_MG : _0x55e059.FAKE_SYMBOLS_MG).length;
            _0x46f2d1 = _0x2a8ef2[Math.floor(Math.random() * _0x2d304b)];
          }
          if (_0x46f2d1 == _0x55e059.Symbol.BONUS_COIN_JP) {
            var _0x11ce4d = Math.random();
            if (_0x11ce4d < _0x55e059.JPSpinOdd[_0x55e059.JP_TYPES.GRAND]) {
              _0x20461c.getComponent(_0x492b27).SetSymbolType(_0x55e059.Symbol.BONUS_COIN_JP, _0x55e059.JP_TYPES.GRAND);
            } else if (_0x11ce4d < _0x55e059.JPSpinOdd[_0x55e059.JP_TYPES.GRAND] + _0x55e059.JPSpinOdd[_0x55e059.JP_TYPES.MAJOR]) {
              _0x20461c.getComponent(_0x492b27).SetSymbolType(_0x55e059.Symbol.BONUS_COIN_JP, _0x55e059.JP_TYPES.MAJOR);
            } else if (_0x11ce4d < _0x55e059.JPSpinOdd[_0x55e059.JP_TYPES.GRAND] + _0x55e059.JPSpinOdd[_0x55e059.JP_TYPES.MAJOR] + _0x55e059.JPSpinOdd[_0x55e059.JP_TYPES.MINOR]) {
              _0x20461c.getComponent(_0x492b27).SetSymbolType(_0x55e059.Symbol.BONUS_COIN_JP, _0x55e059.JP_TYPES.MINOR);
            } else {
              _0x20461c.getComponent(_0x492b27).SetSymbolType(_0x55e059.Symbol.BONUS_COIN_JP, _0x55e059.JP_TYPES.MINI);
            }
          } else {
            _0x20461c.getComponent(_0x492b27).SetSymbolType(_0x46f2d1);
          }
          return _0x46f2d1;
        };
        _0x41bd08.SetUpperAndLowerActive = function (_0x237b9b) {
          for (var _0x4bb90d = 0x0; _0x4bb90d < 0x3; _0x4bb90d++) {
            this.m_upperSymbols[_0x4bb90d].active = _0x237b9b;
            this.m_lowerSymbols[_0x4bb90d].active = _0x237b9b;
            this.m_upperLabels[_0x4bb90d].active = _0x237b9b;
            this.m_lowerLabels[_0x4bb90d].active = _0x237b9b;
          }
        };
        _0x41bd08.GetSymbolPosition = function (_0x2302f4, _0x2580b9, _0x4aa790) {
          if (undefined === _0x4aa790) {
            _0x4aa790 = false;
          }
          return _0x4aa790 ? this.m_symbols[_0x2302f4][_0x2580b9].getWorldPosition() : this.m_symbols[_0x2302f4][_0x2580b9].getPosition();
        };
        _0x41bd08.ConvertPlateInfo = function (_0x9f19fc) {
          var _0x2054f9 = [];
          for (var _0x40d1c3 = 0x0; _0x40d1c3 < _0x9f19fc.length; _0x40d1c3++) {
            _0x2054f9.push([]);
            for (var _0x1c6c74 = 0x0; _0x1c6c74 < _0x9f19fc[_0x40d1c3].Col.length; _0x1c6c74++) {
              _0x2054f9[_0x40d1c3].push(_0x9f19fc[_0x40d1c3].Col[_0x1c6c74]);
            }
          }
          return _0x2054f9;
        };
        _0x41bd08.SetAllSymbolDark = function (_0x20eca3) {
          if (undefined === _0x20eca3) {
            _0x20eca3 = true;
          }
          for (var _0x7639c3 = 0x0; _0x7639c3 < 0x3; _0x7639c3++) {
            for (var _0x4e25bd = 0x0; _0x4e25bd < 0x3; _0x4e25bd++) {
              this.SetSymbolDark(_0x7639c3, _0x4e25bd, _0x20eca3);
            }
          }
          for (var _0x324e68 = 0x0; _0x324e68 < 0x3; _0x324e68++) {
            this.SetSymbolDark(_0x324e68, -0x1, _0x20eca3);
            this.SetSymbolDark(_0x324e68, 0x3, _0x20eca3);
          }
        };
        _0x41bd08.SetSymbolDark = function (_0x467a58, _0x40c6b2, _0x46a587) {
          if (-0x1 == _0x40c6b2) {
            this.m_upperSymbols[_0x467a58].getComponent(_0x492b27).SetDark(_0x46a587);
            this.m_upperLabels[_0x467a58].getComponent(_0x502387).color = _0x46a587 ? _0x55e059.Color.Dark : _0x55e059.Color.Light;
          } else if (_0x40c6b2 == 0x3) {
            this.m_lowerSymbols[_0x467a58].getComponent(_0x492b27).SetDark(_0x46a587);
            this.m_lowerLabels[_0x467a58].getComponent(_0x502387).color = _0x46a587 ? _0x55e059.Color.Dark : _0x55e059.Color.Light;
          } else {
            this.m_symbols[_0x467a58][_0x40c6b2].getComponent(_0x492b27).SetDark(_0x46a587);
            this.m_labelNode[_0x467a58][_0x40c6b2].getComponent(_0x502387).color = _0x46a587 ? _0x55e059.Color.Dark : _0x55e059.Color.Light;
          }
        };
        _0x41bd08.SetSymbolActive = function (_0x14fb73, _0x29ce51, _0x206913) {
          this.m_symbols[_0x14fb73][_0x29ce51].active = _0x206913;
          this.m_labelNode[_0x14fb73][_0x29ce51].active = _0x206913;
        };
        _0x41bd08.SetSymbolEmpty = function (_0x71a20f, _0x270ee4) {
          this.m_plateInfo[_0x71a20f][_0x270ee4] = 0x0;
          this.m_symbols[_0x71a20f][_0x270ee4].getComponent(_0x492b27).SetSymbolType(0x0);
        };
        _0x41bd08.EmptySymbolFadeIn = function (_0x275fc5, _0x53030b) {
          var _0x3e7ef5 = this;
          this.m_plateInfo[_0x275fc5][_0x53030b] = 0x0;
          _0x70e19b(this.m_symbols[_0x275fc5][_0x53030b].getComponent(_0x523ca8)).to(0.5, {
            'opacity': 0x1
          }).call(function () {
            _0x3e7ef5.m_symbols[_0x275fc5][_0x53030b].getComponent(_0x492b27).SetSymbolType(0x0);
          }).to(0.5, {
            'opacity': 0xff
          }).start();
        };
        _0xef4a8(_0x5858d2, [{
          'key': 'SpinBufferTime01',
          'get': function () {
            return this.m_spinBufferTime01;
          }
        }, {
          'key': "IsLastFly",
          'get': function () {
            return this.m_islastfly;
          },
          'set': function (_0x15dd43) {
            this.m_islastfly = _0x15dd43;
          }
        }]);
        return _0x5858d2;
      }(_0xead8bf);
      _0x137799 = _0x2f48b7(_0x5937e2.prototype, "m_symbolPrefab", [_0x57531a], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1009ad = _0x2f48b7(_0x5937e2.prototype, "m_symbolFont", [_0x1f47ad], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3db04a._RF.pop();
      var _0x1c9322;
      _0x217aa0.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/minimal.js", function (_0xebe0bb, _0x220ea2, _0x24cb68, _0x116b4f, _0x3543b0) {
        _0x24cb68.exports = _0x220ea2("./src/index-minimal");
        _0x24cb68.exports;
      }, function () {
        return {
          './src/index-minimal': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js'
        };
      });
      var _0x441558;
      var _0x4e012e;
      var _0xb65f6e;
      var _0x73ef5c;
      var _0x1a773c;
      var _0x3ae748;
      _0x217aa0.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/@old-rd1/jokercoins-proto/jcProto.js', function (_0x35e902, _0x5e6e00, _0x5379bb, _0x3c3246, _0x36b8a7) {
        var _0x58b7e1;
        var _0x48e0fa = _0x5e6e00("protobufjs/minimal");
        var _0x31131b = _0x48e0fa.Reader;
        var _0x46e0c4 = _0x48e0fa.Writer;
        var _0x2aa192 = _0x48e0fa.util;
        var _0x1036fa = _0x48e0fa.roots["default"] || (_0x48e0fa.roots["default"] = {});
        (_0x58b7e1 = {
          "ColumnM": function () {
            function _0x209697(_0x5b185a) {
              this.Col = [];
              if (_0x5b185a) {
                var _0x509d55 = Object.keys(_0x5b185a);
                for (var _0x3fb088 = 0x0; _0x3fb088 < _0x509d55.length; ++_0x3fb088) {
                  if (null != _0x5b185a[_0x509d55[_0x3fb088]]) {
                    this[_0x509d55[_0x3fb088]] = _0x5b185a[_0x509d55[_0x3fb088]];
                  }
                }
              }
            }
            _0x209697.prototype.Col = _0x2aa192.emptyArray;
            _0x209697.create = function (_0x59d9db) {
              return new _0x209697(_0x59d9db);
            };
            _0x209697.encode = function (_0x2ac0bf, _0x360190) {
              if (!_0x360190) {
                _0x360190 = _0x46e0c4.create();
              }
              if (null != _0x2ac0bf.Col && _0x2ac0bf.Col.length) {
                _0x360190.uint32(0xa).fork();
                for (var _0xf1b85e = 0x0; _0xf1b85e < _0x2ac0bf.Col.length; ++_0xf1b85e) {
                  _0x360190.double(_0x2ac0bf.Col[_0xf1b85e]);
                }
                _0x360190.ldelim();
              }
              return _0x360190;
            };
            _0x209697.encodeDelimited = function (_0x160c5, _0x5ab6b0) {
              return this.encode(_0x160c5, _0x5ab6b0).ldelim();
            };
            _0x209697.decode = function (_0x38fec3, _0x244a5a) {
              if (!(_0x38fec3 instanceof _0x31131b)) {
                _0x38fec3 = _0x31131b.create(_0x38fec3);
              }
              var _0xaedcc5 = undefined === _0x244a5a ? _0x38fec3.len : _0x38fec3.pos + _0x244a5a;
              for (var _0x2528e3 = new _0x1036fa.jcProto.ColumnM(); _0x38fec3.pos < _0xaedcc5;) {
                var _0x44da12 = _0x38fec3.uint32();
                switch (_0x44da12 >>> 0x3) {
                  case 0x1:
                    if (!(_0x2528e3.Col && _0x2528e3.Col.length)) {
                      _0x2528e3.Col = [];
                    }
                    if (0x2 == (0x7 & _0x44da12)) {
                      for (var _0x11ca8a = _0x38fec3.uint32() + _0x38fec3.pos; _0x38fec3.pos < _0x11ca8a;) {
                        _0x2528e3.Col.push(_0x38fec3.double());
                      }
                    } else {
                      _0x2528e3.Col.push(_0x38fec3.double());
                    }
                    break;
                  default:
                    _0x38fec3.skipType(0x7 & _0x44da12);
                }
              }
              return _0x2528e3;
            };
            _0x209697.decodeDelimited = function (_0x502b59) {
              if (!(_0x502b59 instanceof _0x31131b)) {
                _0x502b59 = new _0x31131b(_0x502b59);
              }
              return this.decode(_0x502b59, _0x502b59.uint32());
            };
            _0x209697.verify = function (_0x3622ce) {
              if ("object" != typeof _0x3622ce || null === _0x3622ce) {
                return "object expected";
              }
              if (null != _0x3622ce.Col && _0x3622ce.hasOwnProperty("Col")) {
                if (!Array.isArray(_0x3622ce.Col)) {
                  return "Col: array expected";
                }
                for (var _0x1ee5f7 = 0x0; _0x1ee5f7 < _0x3622ce.Col.length; ++_0x1ee5f7) {
                  if ('number' != typeof _0x3622ce.Col[_0x1ee5f7]) {
                    return "Col: number[] expected";
                  }
                }
              }
              return null;
            };
            _0x209697.fromObject = function (_0x577d55) {
              if (_0x577d55 instanceof _0x1036fa.jcProto.ColumnM) {
                return _0x577d55;
              }
              var _0x20dcd0 = new _0x1036fa.jcProto.ColumnM();
              if (_0x577d55.Col) {
                if (!Array.isArray(_0x577d55.Col)) {
                  throw TypeError(".jcProto.ColumnM.Col: array expected");
                }
                _0x20dcd0.Col = [];
                for (var _0x5bf4a6 = 0x0; _0x5bf4a6 < _0x577d55.Col.length; ++_0x5bf4a6) {
                  _0x20dcd0.Col[_0x5bf4a6] = Number(_0x577d55.Col[_0x5bf4a6]);
                }
              }
              return _0x20dcd0;
            };
            _0x209697.toObject = function (_0x59770c, _0x763d44) {
              if (!_0x763d44) {
                _0x763d44 = {};
              }
              var _0x56de11 = {};
              if (_0x763d44.arrays || _0x763d44.defaults) {
                _0x56de11.Col = [];
              }
              if (_0x59770c.Col && _0x59770c.Col.length) {
                _0x56de11.Col = [];
                for (var _0x24832f = 0x0; _0x24832f < _0x59770c.Col.length; ++_0x24832f) {
                  _0x56de11.Col[_0x24832f] = _0x763d44.json && !isFinite(_0x59770c.Col[_0x24832f]) ? String(_0x59770c.Col[_0x24832f]) : _0x59770c.Col[_0x24832f];
                }
              }
              return _0x56de11;
            };
            _0x209697.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x48e0fa.util.toJSONOptions);
            };
            _0x209697.getTypeUrl = function (_0x594dd1) {
              if (undefined === _0x594dd1) {
                _0x594dd1 = "type.googleapis.com";
              }
              return _0x594dd1 + "/jcProto.ColumnM";
            };
            return _0x209697;
          }(),
          "AwardData": function () {
            function _0x2c9386(_0xa3131f) {
              if (_0xa3131f) {
                var _0x5c75bb = Object.keys(_0xa3131f);
                for (var _0x416aba = 0x0; _0x416aba < _0x5c75bb.length; ++_0x416aba) {
                  if (null != _0xa3131f[_0x5c75bb[_0x416aba]]) {
                    this[_0x5c75bb[_0x416aba]] = _0xa3131f[_0x5c75bb[_0x416aba]];
                  }
                }
              }
            }
            _0x2c9386.prototype.Atype = 0x0;
            _0x2c9386.prototype.Index = 0x0;
            _0x2c9386.prototype.Symbol = 0x0;
            _0x2c9386.prototype.Pos = 0x0;
            _0x2c9386.prototype.Mul = 0x0;
            _0x2c9386.prototype.Win = 0x0;
            _0x2c9386.create = function (_0xbfb6f0) {
              return new _0x2c9386(_0xbfb6f0);
            };
            _0x2c9386.encode = function (_0x4d90c9, _0x5c409f) {
              if (!_0x5c409f) {
                _0x5c409f = _0x46e0c4.create();
              }
              if (null != _0x4d90c9.Atype && Object.hasOwnProperty.call(_0x4d90c9, "Atype")) {
                _0x5c409f.uint32(0x8).int32(_0x4d90c9.Atype);
              }
              if (null != _0x4d90c9.Index && Object.hasOwnProperty.call(_0x4d90c9, "Index")) {
                _0x5c409f.uint32(0x10).int32(_0x4d90c9.Index);
              }
              if (null != _0x4d90c9.Symbol && Object.hasOwnProperty.call(_0x4d90c9, "Symbol")) {
                _0x5c409f.uint32(0x18).int32(_0x4d90c9.Symbol);
              }
              if (null != _0x4d90c9.Pos && Object.hasOwnProperty.call(_0x4d90c9, "Pos")) {
                _0x5c409f.uint32(0x20).int32(_0x4d90c9.Pos);
              }
              if (null != _0x4d90c9.Mul && Object.hasOwnProperty.call(_0x4d90c9, "Mul")) {
                _0x5c409f.uint32(0x29).double(_0x4d90c9.Mul);
              }
              if (null != _0x4d90c9.Win && Object.hasOwnProperty.call(_0x4d90c9, "Win")) {
                _0x5c409f.uint32(0x31).double(_0x4d90c9.Win);
              }
              return _0x5c409f;
            };
            _0x2c9386.encodeDelimited = function (_0xe16d26, _0x195475) {
              return this.encode(_0xe16d26, _0x195475).ldelim();
            };
            _0x2c9386.decode = function (_0x13c349, _0x216669) {
              if (!(_0x13c349 instanceof _0x31131b)) {
                _0x13c349 = _0x31131b.create(_0x13c349);
              }
              var _0x4e8e20 = undefined === _0x216669 ? _0x13c349.len : _0x13c349.pos + _0x216669;
              for (var _0x49b240 = new _0x1036fa.jcProto.AwardData(); _0x13c349.pos < _0x4e8e20;) {
                var _0x471a3f = _0x13c349.uint32();
                switch (_0x471a3f >>> 0x3) {
                  case 0x1:
                    _0x49b240.Atype = _0x13c349.int32();
                    break;
                  case 0x2:
                    _0x49b240.Index = _0x13c349.int32();
                    break;
                  case 0x3:
                    _0x49b240.Symbol = _0x13c349.int32();
                    break;
                  case 0x4:
                    _0x49b240.Pos = _0x13c349.int32();
                    break;
                  case 0x5:
                    _0x49b240.Mul = _0x13c349.double();
                    break;
                  case 0x6:
                    _0x49b240.Win = _0x13c349.double();
                    break;
                  default:
                    _0x13c349.skipType(0x7 & _0x471a3f);
                }
              }
              return _0x49b240;
            };
            _0x2c9386.decodeDelimited = function (_0x2d6128) {
              if (!(_0x2d6128 instanceof _0x31131b)) {
                _0x2d6128 = new _0x31131b(_0x2d6128);
              }
              return this.decode(_0x2d6128, _0x2d6128.uint32());
            };
            _0x2c9386.verify = function (_0x57d617) {
              return "object" != typeof _0x57d617 || null === _0x57d617 ? "object expected" : null != _0x57d617.Atype && _0x57d617.hasOwnProperty('Atype') && !_0x2aa192.isInteger(_0x57d617.Atype) ? "Atype: integer expected" : null != _0x57d617.Index && _0x57d617.hasOwnProperty("Index") && !_0x2aa192.isInteger(_0x57d617.Index) ? "Index: integer expected" : null != _0x57d617.Symbol && _0x57d617.hasOwnProperty("Symbol") && !_0x2aa192.isInteger(_0x57d617.Symbol) ? "Symbol: integer expected" : null != _0x57d617.Pos && _0x57d617.hasOwnProperty("Pos") && !_0x2aa192.isInteger(_0x57d617.Pos) ? "Pos: integer expected" : null != _0x57d617.Mul && _0x57d617.hasOwnProperty("Mul") && "number" != typeof _0x57d617.Mul ? "Mul: number expected" : null != _0x57d617.Win && _0x57d617.hasOwnProperty("Win") && "number" != typeof _0x57d617.Win ? "Win: number expected" : null;
            };
            _0x2c9386.fromObject = function (_0x33aed4) {
              if (_0x33aed4 instanceof _0x1036fa.jcProto.AwardData) {
                return _0x33aed4;
              }
              var _0x49ae9e = new _0x1036fa.jcProto.AwardData();
              if (null != _0x33aed4.Atype) {
                _0x49ae9e.Atype = 0x0 | _0x33aed4.Atype;
              }
              if (null != _0x33aed4.Index) {
                _0x49ae9e.Index = 0x0 | _0x33aed4.Index;
              }
              if (null != _0x33aed4.Symbol) {
                _0x49ae9e.Symbol = 0x0 | _0x33aed4.Symbol;
              }
              if (null != _0x33aed4.Pos) {
                _0x49ae9e.Pos = 0x0 | _0x33aed4.Pos;
              }
              if (null != _0x33aed4.Mul) {
                _0x49ae9e.Mul = Number(_0x33aed4.Mul);
              }
              if (null != _0x33aed4.Win) {
                _0x49ae9e.Win = Number(_0x33aed4.Win);
              }
              return _0x49ae9e;
            };
            _0x2c9386.toObject = function (_0x455395, _0x40fb9b) {
              if (!_0x40fb9b) {
                _0x40fb9b = {};
              }
              var _0x4a9d53 = {};
              if (_0x40fb9b.defaults) {
                _0x4a9d53.Atype = 0x0;
                _0x4a9d53.Index = 0x0;
                _0x4a9d53.Symbol = 0x0;
                _0x4a9d53.Pos = 0x0;
                _0x4a9d53.Mul = 0x0;
                _0x4a9d53.Win = 0x0;
              }
              if (null != _0x455395.Atype && _0x455395.hasOwnProperty("Atype")) {
                _0x4a9d53.Atype = _0x455395.Atype;
              }
              if (null != _0x455395.Index && _0x455395.hasOwnProperty("Index")) {
                _0x4a9d53.Index = _0x455395.Index;
              }
              if (null != _0x455395.Symbol && _0x455395.hasOwnProperty("Symbol")) {
                _0x4a9d53.Symbol = _0x455395.Symbol;
              }
              if (null != _0x455395.Pos && _0x455395.hasOwnProperty('Pos')) {
                _0x4a9d53.Pos = _0x455395.Pos;
              }
              if (null != _0x455395.Mul && _0x455395.hasOwnProperty("Mul")) {
                _0x4a9d53.Mul = _0x40fb9b.json && !isFinite(_0x455395.Mul) ? String(_0x455395.Mul) : _0x455395.Mul;
              }
              if (null != _0x455395.Win && _0x455395.hasOwnProperty('Win')) {
                _0x4a9d53.Win = _0x40fb9b.json && !isFinite(_0x455395.Win) ? String(_0x455395.Win) : _0x455395.Win;
              }
              return _0x4a9d53;
            };
            _0x2c9386.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x48e0fa.util.toJSONOptions);
            };
            _0x2c9386.getTypeUrl = function (_0x39a451) {
              if (undefined === _0x39a451) {
                _0x39a451 = 'type.googleapis.com';
              }
              return _0x39a451 + "/jcProto.AwardData";
            };
            return _0x2c9386;
          }(),
          "PotSymbol": function () {
            function _0x4a8068(_0x4ba83d) {
              if (_0x4ba83d) {
                var _0x4a2a19 = Object.keys(_0x4ba83d);
                for (var _0x15e53f = 0x0; _0x15e53f < _0x4a2a19.length; ++_0x15e53f) {
                  if (null != _0x4ba83d[_0x4a2a19[_0x15e53f]]) {
                    this[_0x4a2a19[_0x15e53f]] = _0x4ba83d[_0x4a2a19[_0x15e53f]];
                  }
                }
              }
            }
            _0x4a8068.prototype.Pos = 0x0;
            _0x4a8068.prototype.Symbol = 0x0;
            _0x4a8068.prototype.Mul = 0x0;
            _0x4a8068.create = function (_0x1bbd6f) {
              return new _0x4a8068(_0x1bbd6f);
            };
            _0x4a8068.encode = function (_0x2383db, _0x2d6a2e) {
              if (!_0x2d6a2e) {
                _0x2d6a2e = _0x46e0c4.create();
              }
              if (null != _0x2383db.Pos && Object.hasOwnProperty.call(_0x2383db, "Pos")) {
                _0x2d6a2e.uint32(0x8).int32(_0x2383db.Pos);
              }
              if (null != _0x2383db.Symbol && Object.hasOwnProperty.call(_0x2383db, "Symbol")) {
                _0x2d6a2e.uint32(0x10).int32(_0x2383db.Symbol);
              }
              if (null != _0x2383db.Mul && Object.hasOwnProperty.call(_0x2383db, "Mul")) {
                _0x2d6a2e.uint32(0x19).double(_0x2383db.Mul);
              }
              return _0x2d6a2e;
            };
            _0x4a8068.encodeDelimited = function (_0x416102, _0x3b6fdb) {
              return this.encode(_0x416102, _0x3b6fdb).ldelim();
            };
            _0x4a8068.decode = function (_0x3fdcf6, _0x46a751) {
              if (!(_0x3fdcf6 instanceof _0x31131b)) {
                _0x3fdcf6 = _0x31131b.create(_0x3fdcf6);
              }
              var _0x4bb848 = undefined === _0x46a751 ? _0x3fdcf6.len : _0x3fdcf6.pos + _0x46a751;
              for (var _0x3f73f3 = new _0x1036fa.jcProto.PotSymbol(); _0x3fdcf6.pos < _0x4bb848;) {
                var _0x41307c = _0x3fdcf6.uint32();
                switch (_0x41307c >>> 0x3) {
                  case 0x1:
                    _0x3f73f3.Pos = _0x3fdcf6.int32();
                    break;
                  case 0x2:
                    _0x3f73f3.Symbol = _0x3fdcf6.int32();
                    break;
                  case 0x3:
                    _0x3f73f3.Mul = _0x3fdcf6.double();
                    break;
                  default:
                    _0x3fdcf6.skipType(0x7 & _0x41307c);
                }
              }
              return _0x3f73f3;
            };
            _0x4a8068.decodeDelimited = function (_0x3542ff) {
              if (!(_0x3542ff instanceof _0x31131b)) {
                _0x3542ff = new _0x31131b(_0x3542ff);
              }
              return this.decode(_0x3542ff, _0x3542ff.uint32());
            };
            _0x4a8068.verify = function (_0x23deed) {
              return "object" != typeof _0x23deed || null === _0x23deed ? "object expected" : null != _0x23deed.Pos && _0x23deed.hasOwnProperty("Pos") && !_0x2aa192.isInteger(_0x23deed.Pos) ? "Pos: integer expected" : null != _0x23deed.Symbol && _0x23deed.hasOwnProperty('Symbol') && !_0x2aa192.isInteger(_0x23deed.Symbol) ? "Symbol: integer expected" : null != _0x23deed.Mul && _0x23deed.hasOwnProperty("Mul") && "number" != typeof _0x23deed.Mul ? "Mul: number expected" : null;
            };
            _0x4a8068.fromObject = function (_0x10cacf) {
              if (_0x10cacf instanceof _0x1036fa.jcProto.PotSymbol) {
                return _0x10cacf;
              }
              var _0x4c354f = new _0x1036fa.jcProto.PotSymbol();
              if (null != _0x10cacf.Pos) {
                _0x4c354f.Pos = 0x0 | _0x10cacf.Pos;
              }
              if (null != _0x10cacf.Symbol) {
                _0x4c354f.Symbol = 0x0 | _0x10cacf.Symbol;
              }
              if (null != _0x10cacf.Mul) {
                _0x4c354f.Mul = Number(_0x10cacf.Mul);
              }
              return _0x4c354f;
            };
            _0x4a8068.toObject = function (_0x393eea, _0x2db6b2) {
              if (!_0x2db6b2) {
                _0x2db6b2 = {};
              }
              var _0x4709fa = {};
              if (_0x2db6b2.defaults) {
                _0x4709fa.Pos = 0x0;
                _0x4709fa.Symbol = 0x0;
                _0x4709fa.Mul = 0x0;
              }
              if (null != _0x393eea.Pos && _0x393eea.hasOwnProperty("Pos")) {
                _0x4709fa.Pos = _0x393eea.Pos;
              }
              if (null != _0x393eea.Symbol && _0x393eea.hasOwnProperty("Symbol")) {
                _0x4709fa.Symbol = _0x393eea.Symbol;
              }
              if (null != _0x393eea.Mul && _0x393eea.hasOwnProperty("Mul")) {
                _0x4709fa.Mul = _0x2db6b2.json && !isFinite(_0x393eea.Mul) ? String(_0x393eea.Mul) : _0x393eea.Mul;
              }
              return _0x4709fa;
            };
            _0x4a8068.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x48e0fa.util.toJSONOptions);
            };
            _0x4a8068.getTypeUrl = function (_0x5f2563) {
              if (undefined === _0x5f2563) {
                _0x5f2563 = "type.googleapis.com";
              }
              return _0x5f2563 + "/jcProto.PotSymbol";
            };
            return _0x4a8068;
          }(),
          "RoundInfo": function () {
            function _0x26522e(_0x599c1a) {
              this.Symbol = [];
              this.Mul = [];
              this.Frame = [];
              this.FinalSymbol = [];
              this.FinalMul = [];
              this.FinalFrame = [];
              this.AwardDataVec = [];
              this.PotList = [];
              if (_0x599c1a) {
                var _0xc4db72 = Object.keys(_0x599c1a);
                for (var _0x1bdf79 = 0x0; _0x1bdf79 < _0xc4db72.length; ++_0x1bdf79) {
                  if (null != _0x599c1a[_0xc4db72[_0x1bdf79]]) {
                    this[_0xc4db72[_0x1bdf79]] = _0x599c1a[_0xc4db72[_0x1bdf79]];
                  }
                }
              }
            }
            _0x26522e.prototype.Symbol = _0x2aa192.emptyArray;
            _0x26522e.prototype.Mul = _0x2aa192.emptyArray;
            _0x26522e.prototype.Frame = _0x2aa192.emptyArray;
            _0x26522e.prototype.FinalSymbol = _0x2aa192.emptyArray;
            _0x26522e.prototype.FinalMul = _0x2aa192.emptyArray;
            _0x26522e.prototype.FinalFrame = _0x2aa192.emptyArray;
            _0x26522e.prototype.AwardDataVec = _0x2aa192.emptyArray;
            _0x26522e.prototype.RoundWin = 0x0;
            _0x26522e.prototype.PotList = _0x2aa192.emptyArray;
            _0x26522e.prototype.BonusRemainRound = 0x0;
            _0x26522e.prototype.BonusTotalRound = 0x0;
            _0x26522e.prototype.GetBonus = false;
            _0x26522e.prototype.AwardTypeFlag = 0x0;
            _0x26522e.prototype.MaxFlag = false;
            _0x26522e.create = function (_0x134bd4) {
              return new _0x26522e(_0x134bd4);
            };
            _0x26522e.encode = function (_0x4fe9f1, _0x4e43b6) {
              if (!_0x4e43b6) {
                _0x4e43b6 = _0x46e0c4.create();
              }
              if (null != _0x4fe9f1.Symbol && _0x4fe9f1.Symbol.length) {
                for (var _0x45f3ef = 0x0; _0x45f3ef < _0x4fe9f1.Symbol.length; ++_0x45f3ef) {
                  _0x1036fa.jcProto.Column.encode(_0x4fe9f1.Symbol[_0x45f3ef], _0x4e43b6.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0x4fe9f1.Mul && _0x4fe9f1.Mul.length) {
                for (_0x45f3ef = 0x0; _0x45f3ef < _0x4fe9f1.Mul.length; ++_0x45f3ef) {
                  _0x1036fa.jcProto.ColumnM.encode(_0x4fe9f1.Mul[_0x45f3ef], _0x4e43b6.uint32(0x12).fork()).ldelim();
                }
              }
              if (null != _0x4fe9f1.Frame && _0x4fe9f1.Frame.length) {
                for (_0x45f3ef = 0x0; _0x45f3ef < _0x4fe9f1.Frame.length; ++_0x45f3ef) {
                  _0x1036fa.jcProto.ColumnM.encode(_0x4fe9f1.Frame[_0x45f3ef], _0x4e43b6.uint32(0x1a).fork()).ldelim();
                }
              }
              if (null != _0x4fe9f1.FinalSymbol && _0x4fe9f1.FinalSymbol.length) {
                for (_0x45f3ef = 0x0; _0x45f3ef < _0x4fe9f1.FinalSymbol.length; ++_0x45f3ef) {
                  _0x1036fa.jcProto.Column.encode(_0x4fe9f1.FinalSymbol[_0x45f3ef], _0x4e43b6.uint32(0x22).fork()).ldelim();
                }
              }
              if (null != _0x4fe9f1.FinalMul && _0x4fe9f1.FinalMul.length) {
                for (_0x45f3ef = 0x0; _0x45f3ef < _0x4fe9f1.FinalMul.length; ++_0x45f3ef) {
                  _0x1036fa.jcProto.ColumnM.encode(_0x4fe9f1.FinalMul[_0x45f3ef], _0x4e43b6.uint32(0x2a).fork()).ldelim();
                }
              }
              if (null != _0x4fe9f1.FinalFrame && _0x4fe9f1.FinalFrame.length) {
                for (_0x45f3ef = 0x0; _0x45f3ef < _0x4fe9f1.FinalFrame.length; ++_0x45f3ef) {
                  _0x1036fa.jcProto.ColumnM.encode(_0x4fe9f1.FinalFrame[_0x45f3ef], _0x4e43b6.uint32(0x32).fork()).ldelim();
                }
              }
              if (null != _0x4fe9f1.AwardDataVec && _0x4fe9f1.AwardDataVec.length) {
                for (_0x45f3ef = 0x0; _0x45f3ef < _0x4fe9f1.AwardDataVec.length; ++_0x45f3ef) {
                  _0x1036fa.jcProto.AwardData.encode(_0x4fe9f1.AwardDataVec[_0x45f3ef], _0x4e43b6.uint32(0x3a).fork()).ldelim();
                }
              }
              if (null != _0x4fe9f1.RoundWin && Object.hasOwnProperty.call(_0x4fe9f1, "RoundWin")) {
                _0x4e43b6.uint32(0x41).double(_0x4fe9f1.RoundWin);
              }
              if (null != _0x4fe9f1.PotList && _0x4fe9f1.PotList.length) {
                for (_0x45f3ef = 0x0; _0x45f3ef < _0x4fe9f1.PotList.length; ++_0x45f3ef) {
                  _0x1036fa.jcProto.PotSymbol.encode(_0x4fe9f1.PotList[_0x45f3ef], _0x4e43b6.uint32(0x4a).fork()).ldelim();
                }
              }
              if (null != _0x4fe9f1.BonusRemainRound && Object.hasOwnProperty.call(_0x4fe9f1, 'BonusRemainRound')) {
                _0x4e43b6.uint32(0x50).int32(_0x4fe9f1.BonusRemainRound);
              }
              if (null != _0x4fe9f1.BonusTotalRound && Object.hasOwnProperty.call(_0x4fe9f1, "BonusTotalRound")) {
                _0x4e43b6.uint32(0x58).int32(_0x4fe9f1.BonusTotalRound);
              }
              if (null != _0x4fe9f1.GetBonus && Object.hasOwnProperty.call(_0x4fe9f1, 'GetBonus')) {
                _0x4e43b6.uint32(0x60).bool(_0x4fe9f1.GetBonus);
              }
              if (null != _0x4fe9f1.AwardTypeFlag && Object.hasOwnProperty.call(_0x4fe9f1, 'AwardTypeFlag')) {
                _0x4e43b6.uint32(0x68).int32(_0x4fe9f1.AwardTypeFlag);
              }
              if (null != _0x4fe9f1.MaxFlag && Object.hasOwnProperty.call(_0x4fe9f1, "MaxFlag")) {
                _0x4e43b6.uint32(0x70).bool(_0x4fe9f1.MaxFlag);
              }
              return _0x4e43b6;
            };
            _0x26522e.encodeDelimited = function (_0x57a0f1, _0x4a0c08) {
              return this.encode(_0x57a0f1, _0x4a0c08).ldelim();
            };
            _0x26522e.decode = function (_0xc75993, _0x245307) {
              if (!(_0xc75993 instanceof _0x31131b)) {
                _0xc75993 = _0x31131b.create(_0xc75993);
              }
              var _0x2c9903 = undefined === _0x245307 ? _0xc75993.len : _0xc75993.pos + _0x245307;
              for (var _0x22474e = new _0x1036fa.jcProto.RoundInfo(); _0xc75993.pos < _0x2c9903;) {
                var _0x142ffc = _0xc75993.uint32();
                switch (_0x142ffc >>> 0x3) {
                  case 0x1:
                    if (!(_0x22474e.Symbol && _0x22474e.Symbol.length)) {
                      _0x22474e.Symbol = [];
                    }
                    _0x22474e.Symbol.push(_0x1036fa.jcProto.Column.decode(_0xc75993, _0xc75993.uint32()));
                    break;
                  case 0x2:
                    if (!(_0x22474e.Mul && _0x22474e.Mul.length)) {
                      _0x22474e.Mul = [];
                    }
                    _0x22474e.Mul.push(_0x1036fa.jcProto.ColumnM.decode(_0xc75993, _0xc75993.uint32()));
                    break;
                  case 0x3:
                    if (!(_0x22474e.Frame && _0x22474e.Frame.length)) {
                      _0x22474e.Frame = [];
                    }
                    _0x22474e.Frame.push(_0x1036fa.jcProto.ColumnM.decode(_0xc75993, _0xc75993.uint32()));
                    break;
                  case 0x4:
                    if (!(_0x22474e.FinalSymbol && _0x22474e.FinalSymbol.length)) {
                      _0x22474e.FinalSymbol = [];
                    }
                    _0x22474e.FinalSymbol.push(_0x1036fa.jcProto.Column.decode(_0xc75993, _0xc75993.uint32()));
                    break;
                  case 0x5:
                    if (!(_0x22474e.FinalMul && _0x22474e.FinalMul.length)) {
                      _0x22474e.FinalMul = [];
                    }
                    _0x22474e.FinalMul.push(_0x1036fa.jcProto.ColumnM.decode(_0xc75993, _0xc75993.uint32()));
                    break;
                  case 0x6:
                    if (!(_0x22474e.FinalFrame && _0x22474e.FinalFrame.length)) {
                      _0x22474e.FinalFrame = [];
                    }
                    _0x22474e.FinalFrame.push(_0x1036fa.jcProto.ColumnM.decode(_0xc75993, _0xc75993.uint32()));
                    break;
                  case 0x7:
                    if (!(_0x22474e.AwardDataVec && _0x22474e.AwardDataVec.length)) {
                      _0x22474e.AwardDataVec = [];
                    }
                    _0x22474e.AwardDataVec.push(_0x1036fa.jcProto.AwardData.decode(_0xc75993, _0xc75993.uint32()));
                    break;
                  case 0x8:
                    _0x22474e.RoundWin = _0xc75993.double();
                    break;
                  case 0x9:
                    if (!(_0x22474e.PotList && _0x22474e.PotList.length)) {
                      _0x22474e.PotList = [];
                    }
                    _0x22474e.PotList.push(_0x1036fa.jcProto.PotSymbol.decode(_0xc75993, _0xc75993.uint32()));
                    break;
                  case 0xa:
                    _0x22474e.BonusRemainRound = _0xc75993.int32();
                    break;
                  case 0xb:
                    _0x22474e.BonusTotalRound = _0xc75993.int32();
                    break;
                  case 0xc:
                    _0x22474e.GetBonus = _0xc75993.bool();
                    break;
                  case 0xd:
                    _0x22474e.AwardTypeFlag = _0xc75993.int32();
                    break;
                  case 0xe:
                    _0x22474e.MaxFlag = _0xc75993.bool();
                    break;
                  default:
                    _0xc75993.skipType(0x7 & _0x142ffc);
                }
              }
              return _0x22474e;
            };
            _0x26522e.decodeDelimited = function (_0x1bbeb3) {
              if (!(_0x1bbeb3 instanceof _0x31131b)) {
                _0x1bbeb3 = new _0x31131b(_0x1bbeb3);
              }
              return this.decode(_0x1bbeb3, _0x1bbeb3.uint32());
            };
            _0x26522e.verify = function (_0x1af8bb) {
              if ("object" != typeof _0x1af8bb || null === _0x1af8bb) {
                return "object expected";
              }
              if (null != _0x1af8bb.Symbol && _0x1af8bb.hasOwnProperty("Symbol")) {
                if (!Array.isArray(_0x1af8bb.Symbol)) {
                  return "Symbol: array expected";
                }
                for (var _0x11db20 = 0x0; _0x11db20 < _0x1af8bb.Symbol.length; ++_0x11db20) {
                  if (_0x1333ae = _0x1036fa.jcProto.Column.verify(_0x1af8bb.Symbol[_0x11db20])) {
                    return 'Symbol.' + _0x1333ae;
                  }
                }
              }
              if (null != _0x1af8bb.Mul && _0x1af8bb.hasOwnProperty("Mul")) {
                if (!Array.isArray(_0x1af8bb.Mul)) {
                  return "Mul: array expected";
                }
                for (_0x11db20 = 0x0; _0x11db20 < _0x1af8bb.Mul.length; ++_0x11db20) {
                  if (_0x1333ae = _0x1036fa.jcProto.ColumnM.verify(_0x1af8bb.Mul[_0x11db20])) {
                    return "Mul." + _0x1333ae;
                  }
                }
              }
              if (null != _0x1af8bb.Frame && _0x1af8bb.hasOwnProperty("Frame")) {
                if (!Array.isArray(_0x1af8bb.Frame)) {
                  return "Frame: array expected";
                }
                for (_0x11db20 = 0x0; _0x11db20 < _0x1af8bb.Frame.length; ++_0x11db20) {
                  if (_0x1333ae = _0x1036fa.jcProto.ColumnM.verify(_0x1af8bb.Frame[_0x11db20])) {
                    return "Frame." + _0x1333ae;
                  }
                }
              }
              if (null != _0x1af8bb.FinalSymbol && _0x1af8bb.hasOwnProperty("FinalSymbol")) {
                if (!Array.isArray(_0x1af8bb.FinalSymbol)) {
                  return "FinalSymbol: array expected";
                }
                for (_0x11db20 = 0x0; _0x11db20 < _0x1af8bb.FinalSymbol.length; ++_0x11db20) {
                  if (_0x1333ae = _0x1036fa.jcProto.Column.verify(_0x1af8bb.FinalSymbol[_0x11db20])) {
                    return "FinalSymbol." + _0x1333ae;
                  }
                }
              }
              if (null != _0x1af8bb.FinalMul && _0x1af8bb.hasOwnProperty("FinalMul")) {
                if (!Array.isArray(_0x1af8bb.FinalMul)) {
                  return "FinalMul: array expected";
                }
                for (_0x11db20 = 0x0; _0x11db20 < _0x1af8bb.FinalMul.length; ++_0x11db20) {
                  if (_0x1333ae = _0x1036fa.jcProto.ColumnM.verify(_0x1af8bb.FinalMul[_0x11db20])) {
                    return "FinalMul." + _0x1333ae;
                  }
                }
              }
              if (null != _0x1af8bb.FinalFrame && _0x1af8bb.hasOwnProperty("FinalFrame")) {
                if (!Array.isArray(_0x1af8bb.FinalFrame)) {
                  return "FinalFrame: array expected";
                }
                for (_0x11db20 = 0x0; _0x11db20 < _0x1af8bb.FinalFrame.length; ++_0x11db20) {
                  if (_0x1333ae = _0x1036fa.jcProto.ColumnM.verify(_0x1af8bb.FinalFrame[_0x11db20])) {
                    return "FinalFrame." + _0x1333ae;
                  }
                }
              }
              if (null != _0x1af8bb.AwardDataVec && _0x1af8bb.hasOwnProperty('AwardDataVec')) {
                if (!Array.isArray(_0x1af8bb.AwardDataVec)) {
                  return "AwardDataVec: array expected";
                }
                for (_0x11db20 = 0x0; _0x11db20 < _0x1af8bb.AwardDataVec.length; ++_0x11db20) {
                  if (_0x1333ae = _0x1036fa.jcProto.AwardData.verify(_0x1af8bb.AwardDataVec[_0x11db20])) {
                    return "AwardDataVec." + _0x1333ae;
                  }
                }
              }
              if (null != _0x1af8bb.RoundWin && _0x1af8bb.hasOwnProperty('RoundWin') && "number" != typeof _0x1af8bb.RoundWin) {
                return "RoundWin: number expected";
              }
              if (null != _0x1af8bb.PotList && _0x1af8bb.hasOwnProperty('PotList')) {
                if (!Array.isArray(_0x1af8bb.PotList)) {
                  return "PotList: array expected";
                }
                for (_0x11db20 = 0x0; _0x11db20 < _0x1af8bb.PotList.length; ++_0x11db20) {
                  var _0x1333ae;
                  if (_0x1333ae = _0x1036fa.jcProto.PotSymbol.verify(_0x1af8bb.PotList[_0x11db20])) {
                    return "PotList." + _0x1333ae;
                  }
                }
              }
              return null != _0x1af8bb.BonusRemainRound && _0x1af8bb.hasOwnProperty("BonusRemainRound") && !_0x2aa192.isInteger(_0x1af8bb.BonusRemainRound) ? "BonusRemainRound: integer expected" : null != _0x1af8bb.BonusTotalRound && _0x1af8bb.hasOwnProperty("BonusTotalRound") && !_0x2aa192.isInteger(_0x1af8bb.BonusTotalRound) ? "BonusTotalRound: integer expected" : null != _0x1af8bb.GetBonus && _0x1af8bb.hasOwnProperty("GetBonus") && "boolean" != typeof _0x1af8bb.GetBonus ? "GetBonus: boolean expected" : null != _0x1af8bb.AwardTypeFlag && _0x1af8bb.hasOwnProperty('AwardTypeFlag') && !_0x2aa192.isInteger(_0x1af8bb.AwardTypeFlag) ? "AwardTypeFlag: integer expected" : null != _0x1af8bb.MaxFlag && _0x1af8bb.hasOwnProperty('MaxFlag') && "boolean" != typeof _0x1af8bb.MaxFlag ? "MaxFlag: boolean expected" : null;
            };
            _0x26522e.fromObject = function (_0x2962df) {
              if (_0x2962df instanceof _0x1036fa.jcProto.RoundInfo) {
                return _0x2962df;
              }
              var _0x1dae20 = new _0x1036fa.jcProto.RoundInfo();
              if (_0x2962df.Symbol) {
                if (!Array.isArray(_0x2962df.Symbol)) {
                  throw TypeError(".jcProto.RoundInfo.Symbol: array expected");
                }
                _0x1dae20.Symbol = [];
                for (var _0x3ca358 = 0x0; _0x3ca358 < _0x2962df.Symbol.length; ++_0x3ca358) {
                  if ('object' != typeof _0x2962df.Symbol[_0x3ca358]) {
                    throw TypeError(".jcProto.RoundInfo.Symbol: object expected");
                  }
                  _0x1dae20.Symbol[_0x3ca358] = _0x1036fa.jcProto.Column.fromObject(_0x2962df.Symbol[_0x3ca358]);
                }
              }
              if (_0x2962df.Mul) {
                if (!Array.isArray(_0x2962df.Mul)) {
                  throw TypeError(".jcProto.RoundInfo.Mul: array expected");
                }
                _0x1dae20.Mul = [];
                for (_0x3ca358 = 0x0; _0x3ca358 < _0x2962df.Mul.length; ++_0x3ca358) {
                  if ("object" != typeof _0x2962df.Mul[_0x3ca358]) {
                    throw TypeError(".jcProto.RoundInfo.Mul: object expected");
                  }
                  _0x1dae20.Mul[_0x3ca358] = _0x1036fa.jcProto.ColumnM.fromObject(_0x2962df.Mul[_0x3ca358]);
                }
              }
              if (_0x2962df.Frame) {
                if (!Array.isArray(_0x2962df.Frame)) {
                  throw TypeError(".jcProto.RoundInfo.Frame: array expected");
                }
                _0x1dae20.Frame = [];
                for (_0x3ca358 = 0x0; _0x3ca358 < _0x2962df.Frame.length; ++_0x3ca358) {
                  if ("object" != typeof _0x2962df.Frame[_0x3ca358]) {
                    throw TypeError(".jcProto.RoundInfo.Frame: object expected");
                  }
                  _0x1dae20.Frame[_0x3ca358] = _0x1036fa.jcProto.ColumnM.fromObject(_0x2962df.Frame[_0x3ca358]);
                }
              }
              if (_0x2962df.FinalSymbol) {
                if (!Array.isArray(_0x2962df.FinalSymbol)) {
                  throw TypeError(".jcProto.RoundInfo.FinalSymbol: array expected");
                }
                _0x1dae20.FinalSymbol = [];
                for (_0x3ca358 = 0x0; _0x3ca358 < _0x2962df.FinalSymbol.length; ++_0x3ca358) {
                  if ('object' != typeof _0x2962df.FinalSymbol[_0x3ca358]) {
                    throw TypeError(".jcProto.RoundInfo.FinalSymbol: object expected");
                  }
                  _0x1dae20.FinalSymbol[_0x3ca358] = _0x1036fa.jcProto.Column.fromObject(_0x2962df.FinalSymbol[_0x3ca358]);
                }
              }
              if (_0x2962df.FinalMul) {
                if (!Array.isArray(_0x2962df.FinalMul)) {
                  throw TypeError(".jcProto.RoundInfo.FinalMul: array expected");
                }
                _0x1dae20.FinalMul = [];
                for (_0x3ca358 = 0x0; _0x3ca358 < _0x2962df.FinalMul.length; ++_0x3ca358) {
                  if ("object" != typeof _0x2962df.FinalMul[_0x3ca358]) {
                    throw TypeError(".jcProto.RoundInfo.FinalMul: object expected");
                  }
                  _0x1dae20.FinalMul[_0x3ca358] = _0x1036fa.jcProto.ColumnM.fromObject(_0x2962df.FinalMul[_0x3ca358]);
                }
              }
              if (_0x2962df.FinalFrame) {
                if (!Array.isArray(_0x2962df.FinalFrame)) {
                  throw TypeError(".jcProto.RoundInfo.FinalFrame: array expected");
                }
                _0x1dae20.FinalFrame = [];
                for (_0x3ca358 = 0x0; _0x3ca358 < _0x2962df.FinalFrame.length; ++_0x3ca358) {
                  if ('object' != typeof _0x2962df.FinalFrame[_0x3ca358]) {
                    throw TypeError(".jcProto.RoundInfo.FinalFrame: object expected");
                  }
                  _0x1dae20.FinalFrame[_0x3ca358] = _0x1036fa.jcProto.ColumnM.fromObject(_0x2962df.FinalFrame[_0x3ca358]);
                }
              }
              if (_0x2962df.AwardDataVec) {
                if (!Array.isArray(_0x2962df.AwardDataVec)) {
                  throw TypeError(".jcProto.RoundInfo.AwardDataVec: array expected");
                }
                _0x1dae20.AwardDataVec = [];
                for (_0x3ca358 = 0x0; _0x3ca358 < _0x2962df.AwardDataVec.length; ++_0x3ca358) {
                  if ("object" != typeof _0x2962df.AwardDataVec[_0x3ca358]) {
                    throw TypeError(".jcProto.RoundInfo.AwardDataVec: object expected");
                  }
                  _0x1dae20.AwardDataVec[_0x3ca358] = _0x1036fa.jcProto.AwardData.fromObject(_0x2962df.AwardDataVec[_0x3ca358]);
                }
              }
              if (null != _0x2962df.RoundWin) {
                _0x1dae20.RoundWin = Number(_0x2962df.RoundWin);
              }
              if (_0x2962df.PotList) {
                if (!Array.isArray(_0x2962df.PotList)) {
                  throw TypeError(".jcProto.RoundInfo.PotList: array expected");
                }
                _0x1dae20.PotList = [];
                for (_0x3ca358 = 0x0; _0x3ca358 < _0x2962df.PotList.length; ++_0x3ca358) {
                  if ("object" != typeof _0x2962df.PotList[_0x3ca358]) {
                    throw TypeError(".jcProto.RoundInfo.PotList: object expected");
                  }
                  _0x1dae20.PotList[_0x3ca358] = _0x1036fa.jcProto.PotSymbol.fromObject(_0x2962df.PotList[_0x3ca358]);
                }
              }
              if (null != _0x2962df.BonusRemainRound) {
                _0x1dae20.BonusRemainRound = 0x0 | _0x2962df.BonusRemainRound;
              }
              if (null != _0x2962df.BonusTotalRound) {
                _0x1dae20.BonusTotalRound = 0x0 | _0x2962df.BonusTotalRound;
              }
              if (null != _0x2962df.GetBonus) {
                _0x1dae20.GetBonus = Boolean(_0x2962df.GetBonus);
              }
              if (null != _0x2962df.AwardTypeFlag) {
                _0x1dae20.AwardTypeFlag = 0x0 | _0x2962df.AwardTypeFlag;
              }
              if (null != _0x2962df.MaxFlag) {
                _0x1dae20.MaxFlag = Boolean(_0x2962df.MaxFlag);
              }
              return _0x1dae20;
            };
            _0x26522e.toObject = function (_0x342bdb, _0xa2a291) {
              if (!_0xa2a291) {
                _0xa2a291 = {};
              }
              var _0x16778b = {};
              if (_0xa2a291.arrays || _0xa2a291.defaults) {
                _0x16778b.Symbol = [];
                _0x16778b.Mul = [];
                _0x16778b.Frame = [];
                _0x16778b.FinalSymbol = [];
                _0x16778b.FinalMul = [];
                _0x16778b.FinalFrame = [];
                _0x16778b.AwardDataVec = [];
                _0x16778b.PotList = [];
              }
              if (_0xa2a291.defaults) {
                _0x16778b.RoundWin = 0x0;
                _0x16778b.BonusRemainRound = 0x0;
                _0x16778b.BonusTotalRound = 0x0;
                _0x16778b.GetBonus = false;
                _0x16778b.AwardTypeFlag = 0x0;
                _0x16778b.MaxFlag = false;
              }
              if (_0x342bdb.Symbol && _0x342bdb.Symbol.length) {
                _0x16778b.Symbol = [];
                for (var _0x2ac78f = 0x0; _0x2ac78f < _0x342bdb.Symbol.length; ++_0x2ac78f) {
                  _0x16778b.Symbol[_0x2ac78f] = _0x1036fa.jcProto.Column.toObject(_0x342bdb.Symbol[_0x2ac78f], _0xa2a291);
                }
              }
              if (_0x342bdb.Mul && _0x342bdb.Mul.length) {
                _0x16778b.Mul = [];
                for (_0x2ac78f = 0x0; _0x2ac78f < _0x342bdb.Mul.length; ++_0x2ac78f) {
                  _0x16778b.Mul[_0x2ac78f] = _0x1036fa.jcProto.ColumnM.toObject(_0x342bdb.Mul[_0x2ac78f], _0xa2a291);
                }
              }
              if (_0x342bdb.Frame && _0x342bdb.Frame.length) {
                _0x16778b.Frame = [];
                for (_0x2ac78f = 0x0; _0x2ac78f < _0x342bdb.Frame.length; ++_0x2ac78f) {
                  _0x16778b.Frame[_0x2ac78f] = _0x1036fa.jcProto.ColumnM.toObject(_0x342bdb.Frame[_0x2ac78f], _0xa2a291);
                }
              }
              if (_0x342bdb.FinalSymbol && _0x342bdb.FinalSymbol.length) {
                _0x16778b.FinalSymbol = [];
                for (_0x2ac78f = 0x0; _0x2ac78f < _0x342bdb.FinalSymbol.length; ++_0x2ac78f) {
                  _0x16778b.FinalSymbol[_0x2ac78f] = _0x1036fa.jcProto.Column.toObject(_0x342bdb.FinalSymbol[_0x2ac78f], _0xa2a291);
                }
              }
              if (_0x342bdb.FinalMul && _0x342bdb.FinalMul.length) {
                _0x16778b.FinalMul = [];
                for (_0x2ac78f = 0x0; _0x2ac78f < _0x342bdb.FinalMul.length; ++_0x2ac78f) {
                  _0x16778b.FinalMul[_0x2ac78f] = _0x1036fa.jcProto.ColumnM.toObject(_0x342bdb.FinalMul[_0x2ac78f], _0xa2a291);
                }
              }
              if (_0x342bdb.FinalFrame && _0x342bdb.FinalFrame.length) {
                _0x16778b.FinalFrame = [];
                for (_0x2ac78f = 0x0; _0x2ac78f < _0x342bdb.FinalFrame.length; ++_0x2ac78f) {
                  _0x16778b.FinalFrame[_0x2ac78f] = _0x1036fa.jcProto.ColumnM.toObject(_0x342bdb.FinalFrame[_0x2ac78f], _0xa2a291);
                }
              }
              if (_0x342bdb.AwardDataVec && _0x342bdb.AwardDataVec.length) {
                _0x16778b.AwardDataVec = [];
                for (_0x2ac78f = 0x0; _0x2ac78f < _0x342bdb.AwardDataVec.length; ++_0x2ac78f) {
                  _0x16778b.AwardDataVec[_0x2ac78f] = _0x1036fa.jcProto.AwardData.toObject(_0x342bdb.AwardDataVec[_0x2ac78f], _0xa2a291);
                }
              }
              if (null != _0x342bdb.RoundWin && _0x342bdb.hasOwnProperty('RoundWin')) {
                _0x16778b.RoundWin = _0xa2a291.json && !isFinite(_0x342bdb.RoundWin) ? String(_0x342bdb.RoundWin) : _0x342bdb.RoundWin;
              }
              if (_0x342bdb.PotList && _0x342bdb.PotList.length) {
                _0x16778b.PotList = [];
                for (_0x2ac78f = 0x0; _0x2ac78f < _0x342bdb.PotList.length; ++_0x2ac78f) {
                  _0x16778b.PotList[_0x2ac78f] = _0x1036fa.jcProto.PotSymbol.toObject(_0x342bdb.PotList[_0x2ac78f], _0xa2a291);
                }
              }
              if (null != _0x342bdb.BonusRemainRound && _0x342bdb.hasOwnProperty("BonusRemainRound")) {
                _0x16778b.BonusRemainRound = _0x342bdb.BonusRemainRound;
              }
              if (null != _0x342bdb.BonusTotalRound && _0x342bdb.hasOwnProperty("BonusTotalRound")) {
                _0x16778b.BonusTotalRound = _0x342bdb.BonusTotalRound;
              }
              if (null != _0x342bdb.GetBonus && _0x342bdb.hasOwnProperty('GetBonus')) {
                _0x16778b.GetBonus = _0x342bdb.GetBonus;
              }
              if (null != _0x342bdb.AwardTypeFlag && _0x342bdb.hasOwnProperty("AwardTypeFlag")) {
                _0x16778b.AwardTypeFlag = _0x342bdb.AwardTypeFlag;
              }
              if (null != _0x342bdb.MaxFlag && _0x342bdb.hasOwnProperty("MaxFlag")) {
                _0x16778b.MaxFlag = _0x342bdb.MaxFlag;
              }
              return _0x16778b;
            };
            _0x26522e.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x48e0fa.util.toJSONOptions);
            };
            _0x26522e.getTypeUrl = function (_0x50c460) {
              if (undefined === _0x50c460) {
                _0x50c460 = "type.googleapis.com";
              }
              return _0x50c460 + "/jcProto.RoundInfo";
            };
            return _0x26522e;
          }(),
          "SpinAck": function () {
            function _0x43c223(_0x4c6f0a) {
              this.RoundQueue = [];
              if (_0x4c6f0a) {
                var _0x1c7e43 = Object.keys(_0x4c6f0a);
                for (var _0x58c475 = 0x0; _0x58c475 < _0x1c7e43.length; ++_0x58c475) {
                  if (null != _0x4c6f0a[_0x1c7e43[_0x58c475]]) {
                    this[_0x1c7e43[_0x58c475]] = _0x4c6f0a[_0x1c7e43[_0x58c475]];
                  }
                }
              }
            }
            _0x43c223.prototype.RoundQueue = _0x2aa192.emptyArray;
            _0x43c223.prototype.BonusTotalWin = 0x0;
            _0x43c223.prototype.TotalWin = 0x0;
            _0x43c223.prototype.RTP = 0x0;
            _0x43c223.prototype.LID = 0x0;
            _0x43c223.prototype.RID = 0x0;
            _0x43c223.create = function (_0x2c6c88) {
              return new _0x43c223(_0x2c6c88);
            };
            _0x43c223.encode = function (_0x4e69e9, _0x1a441e) {
              if (!_0x1a441e) {
                _0x1a441e = _0x46e0c4.create();
              }
              if (null != _0x4e69e9.RoundQueue && _0x4e69e9.RoundQueue.length) {
                for (var _0x2bbc2b = 0x0; _0x2bbc2b < _0x4e69e9.RoundQueue.length; ++_0x2bbc2b) {
                  _0x1036fa.jcProto.RoundInfo.encode(_0x4e69e9.RoundQueue[_0x2bbc2b], _0x1a441e.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0x4e69e9.BonusTotalWin && Object.hasOwnProperty.call(_0x4e69e9, 'BonusTotalWin')) {
                _0x1a441e.uint32(0x11).double(_0x4e69e9.BonusTotalWin);
              }
              if (null != _0x4e69e9.TotalWin && Object.hasOwnProperty.call(_0x4e69e9, "TotalWin")) {
                _0x1a441e.uint32(0x19).double(_0x4e69e9.TotalWin);
              }
              if (null != _0x4e69e9.RTP && Object.hasOwnProperty.call(_0x4e69e9, "RTP")) {
                _0x1a441e.uint32(0x21).double(_0x4e69e9.RTP);
              }
              if (null != _0x4e69e9.LID && Object.hasOwnProperty.call(_0x4e69e9, "LID")) {
                _0x1a441e.uint32(0x28).int32(_0x4e69e9.LID);
              }
              if (null != _0x4e69e9.RID && Object.hasOwnProperty.call(_0x4e69e9, "RID")) {
                _0x1a441e.uint32(0x30).int32(_0x4e69e9.RID);
              }
              return _0x1a441e;
            };
            _0x43c223.encodeDelimited = function (_0x5cc8dc, _0x4399d9) {
              return this.encode(_0x5cc8dc, _0x4399d9).ldelim();
            };
            _0x43c223.decode = function (_0x2613be, _0x2a1250) {
              if (!(_0x2613be instanceof _0x31131b)) {
                _0x2613be = _0x31131b.create(_0x2613be);
              }
              var _0x476f22 = undefined === _0x2a1250 ? _0x2613be.len : _0x2613be.pos + _0x2a1250;
              for (var _0x2c553d = new _0x1036fa.jcProto.SpinAck(); _0x2613be.pos < _0x476f22;) {
                var _0x1e80be = _0x2613be.uint32();
                switch (_0x1e80be >>> 0x3) {
                  case 0x1:
                    if (!(_0x2c553d.RoundQueue && _0x2c553d.RoundQueue.length)) {
                      _0x2c553d.RoundQueue = [];
                    }
                    _0x2c553d.RoundQueue.push(_0x1036fa.jcProto.RoundInfo.decode(_0x2613be, _0x2613be.uint32()));
                    break;
                  case 0x2:
                    _0x2c553d.BonusTotalWin = _0x2613be.double();
                    break;
                  case 0x3:
                    _0x2c553d.TotalWin = _0x2613be.double();
                    break;
                  case 0x4:
                    _0x2c553d.RTP = _0x2613be.double();
                    break;
                  case 0x5:
                    _0x2c553d.LID = _0x2613be.int32();
                    break;
                  case 0x6:
                    _0x2c553d.RID = _0x2613be.int32();
                    break;
                  default:
                    _0x2613be.skipType(0x7 & _0x1e80be);
                }
              }
              return _0x2c553d;
            };
            _0x43c223.decodeDelimited = function (_0x3bd328) {
              if (!(_0x3bd328 instanceof _0x31131b)) {
                _0x3bd328 = new _0x31131b(_0x3bd328);
              }
              return this.decode(_0x3bd328, _0x3bd328.uint32());
            };
            _0x43c223.verify = function (_0xda20e5) {
              if ("object" != typeof _0xda20e5 || null === _0xda20e5) {
                return "object expected";
              }
              if (null != _0xda20e5.RoundQueue && _0xda20e5.hasOwnProperty("RoundQueue")) {
                if (!Array.isArray(_0xda20e5.RoundQueue)) {
                  return "RoundQueue: array expected";
                }
                for (var _0x5805eb = 0x0; _0x5805eb < _0xda20e5.RoundQueue.length; ++_0x5805eb) {
                  var _0x31869e = _0x1036fa.jcProto.RoundInfo.verify(_0xda20e5.RoundQueue[_0x5805eb]);
                  if (_0x31869e) {
                    return "RoundQueue." + _0x31869e;
                  }
                }
              }
              return null != _0xda20e5.BonusTotalWin && _0xda20e5.hasOwnProperty("BonusTotalWin") && 'number' != typeof _0xda20e5.BonusTotalWin ? "BonusTotalWin: number expected" : null != _0xda20e5.TotalWin && _0xda20e5.hasOwnProperty('TotalWin') && "number" != typeof _0xda20e5.TotalWin ? "TotalWin: number expected" : null != _0xda20e5.RTP && _0xda20e5.hasOwnProperty("RTP") && "number" != typeof _0xda20e5.RTP ? "RTP: number expected" : null != _0xda20e5.LID && _0xda20e5.hasOwnProperty("LID") && !_0x2aa192.isInteger(_0xda20e5.LID) ? "LID: integer expected" : null != _0xda20e5.RID && _0xda20e5.hasOwnProperty("RID") && !_0x2aa192.isInteger(_0xda20e5.RID) ? "RID: integer expected" : null;
            };
            _0x43c223.fromObject = function (_0x313a65) {
              if (_0x313a65 instanceof _0x1036fa.jcProto.SpinAck) {
                return _0x313a65;
              }
              var _0x131a99 = new _0x1036fa.jcProto.SpinAck();
              if (_0x313a65.RoundQueue) {
                if (!Array.isArray(_0x313a65.RoundQueue)) {
                  throw TypeError(".jcProto.SpinAck.RoundQueue: array expected");
                }
                _0x131a99.RoundQueue = [];
                for (var _0x18d41f = 0x0; _0x18d41f < _0x313a65.RoundQueue.length; ++_0x18d41f) {
                  if ('object' != typeof _0x313a65.RoundQueue[_0x18d41f]) {
                    throw TypeError(".jcProto.SpinAck.RoundQueue: object expected");
                  }
                  _0x131a99.RoundQueue[_0x18d41f] = _0x1036fa.jcProto.RoundInfo.fromObject(_0x313a65.RoundQueue[_0x18d41f]);
                }
              }
              if (null != _0x313a65.BonusTotalWin) {
                _0x131a99.BonusTotalWin = Number(_0x313a65.BonusTotalWin);
              }
              if (null != _0x313a65.TotalWin) {
                _0x131a99.TotalWin = Number(_0x313a65.TotalWin);
              }
              if (null != _0x313a65.RTP) {
                _0x131a99.RTP = Number(_0x313a65.RTP);
              }
              if (null != _0x313a65.LID) {
                _0x131a99.LID = 0x0 | _0x313a65.LID;
              }
              if (null != _0x313a65.RID) {
                _0x131a99.RID = 0x0 | _0x313a65.RID;
              }
              return _0x131a99;
            };
            _0x43c223.toObject = function (_0x1e31df, _0x3952b7) {
              if (!_0x3952b7) {
                _0x3952b7 = {};
              }
              var _0x50ef87 = {};
              if (_0x3952b7.arrays || _0x3952b7.defaults) {
                _0x50ef87.RoundQueue = [];
              }
              if (_0x3952b7.defaults) {
                _0x50ef87.BonusTotalWin = 0x0;
                _0x50ef87.TotalWin = 0x0;
                _0x50ef87.RTP = 0x0;
                _0x50ef87.LID = 0x0;
                _0x50ef87.RID = 0x0;
              }
              if (_0x1e31df.RoundQueue && _0x1e31df.RoundQueue.length) {
                _0x50ef87.RoundQueue = [];
                for (var _0x538477 = 0x0; _0x538477 < _0x1e31df.RoundQueue.length; ++_0x538477) {
                  _0x50ef87.RoundQueue[_0x538477] = _0x1036fa.jcProto.RoundInfo.toObject(_0x1e31df.RoundQueue[_0x538477], _0x3952b7);
                }
              }
              if (null != _0x1e31df.BonusTotalWin && _0x1e31df.hasOwnProperty("BonusTotalWin")) {
                _0x50ef87.BonusTotalWin = _0x3952b7.json && !isFinite(_0x1e31df.BonusTotalWin) ? String(_0x1e31df.BonusTotalWin) : _0x1e31df.BonusTotalWin;
              }
              if (null != _0x1e31df.TotalWin && _0x1e31df.hasOwnProperty("TotalWin")) {
                _0x50ef87.TotalWin = _0x3952b7.json && !isFinite(_0x1e31df.TotalWin) ? String(_0x1e31df.TotalWin) : _0x1e31df.TotalWin;
              }
              if (null != _0x1e31df.RTP && _0x1e31df.hasOwnProperty('RTP')) {
                _0x50ef87.RTP = _0x3952b7.json && !isFinite(_0x1e31df.RTP) ? String(_0x1e31df.RTP) : _0x1e31df.RTP;
              }
              if (null != _0x1e31df.LID && _0x1e31df.hasOwnProperty("LID")) {
                _0x50ef87.LID = _0x1e31df.LID;
              }
              if (null != _0x1e31df.RID && _0x1e31df.hasOwnProperty('RID')) {
                _0x50ef87.RID = _0x1e31df.RID;
              }
              return _0x50ef87;
            };
            _0x43c223.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x48e0fa.util.toJSONOptions);
            };
            _0x43c223.getTypeUrl = function (_0x46777f) {
              if (undefined === _0x46777f) {
                _0x46777f = 'type.googleapis.com';
              }
              return _0x46777f + '/jcProto.SpinAck';
            };
            return _0x43c223;
          }()
        }).Column = function () {
          function _0x224358(_0x14eefd) {
            this.Col = [];
            if (_0x14eefd) {
              var _0x204cfc = Object.keys(_0x14eefd);
              for (var _0x35a8c9 = 0x0; _0x35a8c9 < _0x204cfc.length; ++_0x35a8c9) {
                if (null != _0x14eefd[_0x204cfc[_0x35a8c9]]) {
                  this[_0x204cfc[_0x35a8c9]] = _0x14eefd[_0x204cfc[_0x35a8c9]];
                }
              }
            }
          }
          _0x224358.prototype.Col = _0x2aa192.emptyArray;
          _0x224358.create = function (_0x1fa708) {
            return new _0x224358(_0x1fa708);
          };
          _0x224358.encode = function (_0x529e08, _0x29e0aa) {
            if (!_0x29e0aa) {
              _0x29e0aa = _0x46e0c4.create();
            }
            if (null != _0x529e08.Col && _0x529e08.Col.length) {
              _0x29e0aa.uint32(0xa).fork();
              for (var _0x3aee31 = 0x0; _0x3aee31 < _0x529e08.Col.length; ++_0x3aee31) {
                _0x29e0aa.int32(_0x529e08.Col[_0x3aee31]);
              }
              _0x29e0aa.ldelim();
            }
            return _0x29e0aa;
          };
          _0x224358.encodeDelimited = function (_0x1a67d7, _0x1a0255) {
            return this.encode(_0x1a67d7, _0x1a0255).ldelim();
          };
          _0x224358.decode = function (_0x11e043, _0x4abf0a) {
            if (!(_0x11e043 instanceof _0x31131b)) {
              _0x11e043 = _0x31131b.create(_0x11e043);
            }
            var _0x8b27a9 = undefined === _0x4abf0a ? _0x11e043.len : _0x11e043.pos + _0x4abf0a;
            for (var _0x16bffd = new _0x1036fa.jcProto.Column(); _0x11e043.pos < _0x8b27a9;) {
              var _0xfafe07 = _0x11e043.uint32();
              switch (_0xfafe07 >>> 0x3) {
                case 0x1:
                  if (!(_0x16bffd.Col && _0x16bffd.Col.length)) {
                    _0x16bffd.Col = [];
                  }
                  if (0x2 == (0x7 & _0xfafe07)) {
                    for (var _0x43c995 = _0x11e043.uint32() + _0x11e043.pos; _0x11e043.pos < _0x43c995;) {
                      _0x16bffd.Col.push(_0x11e043.int32());
                    }
                  } else {
                    _0x16bffd.Col.push(_0x11e043.int32());
                  }
                  break;
                default:
                  _0x11e043.skipType(0x7 & _0xfafe07);
              }
            }
            return _0x16bffd;
          };
          _0x224358.decodeDelimited = function (_0x5aa4e3) {
            if (!(_0x5aa4e3 instanceof _0x31131b)) {
              _0x5aa4e3 = new _0x31131b(_0x5aa4e3);
            }
            return this.decode(_0x5aa4e3, _0x5aa4e3.uint32());
          };
          _0x224358.verify = function (_0x5c9ea0) {
            if ("object" != typeof _0x5c9ea0 || null === _0x5c9ea0) {
              return "object expected";
            }
            if (null != _0x5c9ea0.Col && _0x5c9ea0.hasOwnProperty('Col')) {
              if (!Array.isArray(_0x5c9ea0.Col)) {
                return "Col: array expected";
              }
              for (var _0x7d99f3 = 0x0; _0x7d99f3 < _0x5c9ea0.Col.length; ++_0x7d99f3) {
                if (!_0x2aa192.isInteger(_0x5c9ea0.Col[_0x7d99f3])) {
                  return "Col: integer[] expected";
                }
              }
            }
            return null;
          };
          _0x224358.fromObject = function (_0x274fbf) {
            if (_0x274fbf instanceof _0x1036fa.jcProto.Column) {
              return _0x274fbf;
            }
            var _0x5ac968 = new _0x1036fa.jcProto.Column();
            if (_0x274fbf.Col) {
              if (!Array.isArray(_0x274fbf.Col)) {
                throw TypeError(".jcProto.Column.Col: array expected");
              }
              _0x5ac968.Col = [];
              for (var _0xbc20c8 = 0x0; _0xbc20c8 < _0x274fbf.Col.length; ++_0xbc20c8) {
                _0x5ac968.Col[_0xbc20c8] = 0x0 | _0x274fbf.Col[_0xbc20c8];
              }
            }
            return _0x5ac968;
          };
          _0x224358.toObject = function (_0x10521c, _0x102250) {
            if (!_0x102250) {
              _0x102250 = {};
            }
            var _0x2f7184 = {};
            if (_0x102250.arrays || _0x102250.defaults) {
              _0x2f7184.Col = [];
            }
            if (_0x10521c.Col && _0x10521c.Col.length) {
              _0x2f7184.Col = [];
              for (var _0x4244f4 = 0x0; _0x4244f4 < _0x10521c.Col.length; ++_0x4244f4) {
                _0x2f7184.Col[_0x4244f4] = _0x10521c.Col[_0x4244f4];
              }
            }
            return _0x2f7184;
          };
          _0x224358.prototype.toJSON = function () {
            return this.constructor.toObject(this, _0x48e0fa.util.toJSONOptions);
          };
          _0x224358.getTypeUrl = function (_0x28e84d) {
            if (undefined === _0x28e84d) {
              _0x28e84d = "type.googleapis.com";
            }
            return _0x28e84d + "/jcProto.Column";
          };
          return _0x224358;
        }();
        _0x1036fa.jcProto = _0x58b7e1;
        _0x5379bb.exports = _0x1036fa;
        _0x1c9322 = _0x5379bb.exports;
      }, function () {
        return {
          'protobufjs/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/protobufjs/minimal.js"
        };
      });
      _0x217aa0.require('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/JokerCoins/Client/Thai_UAT/node_modules/@old-rd1/jokercoins-proto/jcProto.js');
      _0x3db04a._RF.push({}, "70234UdEYtN2IX52DcVs6XL", 'WinEffect', undefined);
      var _0x1ec8c8 = _0x5d1a01.ccclass;
      var _0x3a57b8 = _0x5d1a01.property;
      _0x441558 = _0x1ec8c8("WinEffect");
      _0x4e012e = _0x3a57b8({
        'type': _0x502387
      });
      _0xb65f6e = _0x3a57b8({
        'type': _0x328c5f,
        'tooltip': "跑分Root節點"
      });
      _0x73ef5c = function (_0x466428) {
        function _0xab76d3() {
          var _0x30d01b;
          var _0x43c2b7 = arguments.length;
          var _0x43a903 = new Array(_0x43c2b7);
          for (var _0x238ba2 = 0x0; _0x238ba2 < _0x43c2b7; _0x238ba2++) {
            _0x43a903[_0x238ba2] = arguments[_0x238ba2];
          }
          _0x29845c(_0x30d01b = _0x466428.call.apply(_0x466428, [this].concat(_0x43a903)) || this, "m_winLabel", _0x1a773c, _0x1cc4fd(_0x30d01b));
          _0x29845c(_0x30d01b, 'm_winRoot', _0x3ae748, _0x1cc4fd(_0x30d01b));
          _0x30d01b.m_isRunningSmallWin = false;
          return _0x30d01b;
        }
        _0x4235b3(_0xab76d3, _0x466428);
        var _0x584960 = _0xab76d3.prototype;
        _0x584960.SetWinLabelRunning = function (_0x182137, _0x1ed66c) {
          var _0x2f1812 = this;
          if (!(_0x182137 <= 0x0)) {
            this.node.active = true;
            this.m_isRunningSmallWin = true;
            this.m_winLabel.string = '0';
            var _0x2a7410 = _0x1cac53.divide(_0x1ed66c, 0.02);
            var _0x21e8b6 = Number(this.m_winLabel.string.replace(/,/g, ''));
            var _0x48f4c3 = _0x1cac53.divide(_0x1cac53.strip(_0x182137 - _0x21e8b6), _0x2a7410);
            _0x4ca72a.stopAllByTarget(this.m_winRoot);
            this.m_winRoot.setScale(0x1, 0x1, 0x1);
            _0x70e19b(this.m_winRoot).parallel(_0x70e19b().repeat(_0x2a7410, _0x70e19b().call(function () {
              _0x21e8b6 += _0x48f4c3;
              _0x2f1812.m_winLabel.string = _0x1cac53.FormatNumberThousands(_0x3f2a41.GetDisplayValue(_0x21e8b6), _0x1cac53.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
            }).delay(0.02)), _0x70e19b().call(function () {
              _0x70e19b(_0x2f1812.m_winRoot.getComponent(_0x523ca8)).to(0.2, {
                'opacity': 0xff
              }).start();
            }), _0x70e19b().to(_0x1ed66c, {
              'scale': _0x40bacd(1.2, 1.2)
            })).call(function () {
              _0x2f1812.StopWinLabelRunning(false, _0x182137);
            }).start();
          }
        };
        _0x584960.StopWinLabelRunning = function (_0xef18d5, _0x131ac4) {
          var _0x4699b9 = this;
          if (undefined === _0xef18d5) {
            _0xef18d5 = false;
          }
          this.m_winLabel.string = _0x1cac53.FormatNumberThousands(_0x3f2a41.GetDisplayValue(_0x131ac4), _0x1cac53.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          if (_0xef18d5) {
            _0x4ca72a.stopAllByTarget(this.m_winRoot);
            _0x70e19b(this.m_winRoot).to(0.1, {
              'scale': _0x40bacd(1.8, 1.8)
            }).delay(1.1).parallel(_0x70e19b().call(function () {
              _0x70e19b(_0x4699b9.m_winRoot.getComponent(_0x523ca8)).to(0.01, {
                'opacity': 0.1
              }).start();
            }), _0x70e19b().to(0.05, {
              'scale': _0x40bacd(0x1, 0x1)
            })).call(function () {
              _0x4699b9.m_isRunningSmallWin = false;
            }).start();
          } else {
            _0x70e19b(this.m_winRoot).delay(1.1).parallel(_0x70e19b().call(function () {
              _0x70e19b(_0x4699b9.m_winRoot.getComponent(_0x523ca8)).to(0.01, {
                'opacity': 0.1
              }).start();
            }), _0x70e19b().to(0.3, {
              'scale': _0x40bacd(0x1, 0x1)
            })).call(function () {
              _0x4699b9.m_isRunningSmallWin = false;
            }).start();
          }
        };
        _0x584960.Reset = function () {
          this.m_winLabel.string = '0';
          this.m_winRoot.getComponent(_0x523ca8).opacity = 0.1;
        };
        _0xef4a8(_0xab76d3, [{
          'key': "isRunningSmallWin",
          'get': function () {
            return this.m_isRunningSmallWin;
          }
        }]);
        return _0xab76d3;
      }(_0xead8bf);
      _0x1a773c = _0x2f48b7(_0x73ef5c.prototype, 'm_winLabel', [_0x4e012e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3ae748 = _0x2f48b7(_0x73ef5c.prototype, "m_winRoot", [_0xb65f6e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0xa06762;
      var _0x5222af;
      var _0x2d5ba7;
      var _0xed58f0;
      var _0x5a72b0;
      var _0xd6f166;
      var _0x23b291;
      var _0x4a9b8f;
      var _0x3920f6;
      var _0x59751a;
      var _0x444207;
      var _0x266e3b;
      var _0x4d806a;
      var _0xee4073;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, '0643f5cxxJHRLaBD/q7luOs', "NodePools", undefined);
      var _0xeb77d7 = _0x5d1a01.ccclass;
      var _0x124b35 = _0x5d1a01.property;
      _0xa06762 = _0xeb77d7("NodePools");
      _0x5222af = _0x124b35({
        'type': _0x5e80ec,
        'tooltip': "Symbol 動態"
      });
      _0x2d5ba7 = _0x124b35({
        'type': _0x5e80ec,
        'tooltip': "prefab for JP"
      });
      _0xed58f0 = _0x124b35({
        'type': _0x5e80ec,
        'tooltip': "prefab for scatter"
      });
      _0x5a72b0 = _0x124b35({
        'type': _0x5e80ec,
        'tooltip': "prefab for scatterNum"
      });
      _0xd6f166 = _0x124b35({
        'type': _0x5e80ec,
        'tooltip': "fly prefab"
      });
      _0x23b291 = _0x124b35({
        'type': _0x5e80ec,
        'tooltip': "hit anim prefab"
      });
      _0x4a9b8f = function (_0x5c221f) {
        function _0x407144() {
          var _0x166615;
          var _0x9dfe36 = arguments.length;
          var _0x117644 = new Array(_0x9dfe36);
          for (var _0x463302 = 0x0; _0x463302 < _0x9dfe36; _0x463302++) {
            _0x117644[_0x463302] = arguments[_0x463302];
          }
          _0x29845c(_0x166615 = _0x5c221f.call.apply(_0x5c221f, [this].concat(_0x117644)) || this, 'm_symbolPrefabs', _0x3920f6, _0x1cc4fd(_0x166615));
          _0x29845c(_0x166615, "m_symbolJP", _0x59751a, _0x1cc4fd(_0x166615));
          _0x29845c(_0x166615, "m_symbolScatter", _0x444207, _0x1cc4fd(_0x166615));
          _0x29845c(_0x166615, "m_symbolScatterNum", _0x266e3b, _0x1cc4fd(_0x166615));
          _0x29845c(_0x166615, "m_flyPrefab", _0x4d806a, _0x1cc4fd(_0x166615));
          _0x29845c(_0x166615, "m_hitPrefab", _0xee4073, _0x1cc4fd(_0x166615));
          _0x166615.m_symbolNodes = null;
          _0x166615.m_flyNodePool = [];
          _0x166615.m_hitNodePool = [];
          _0x166615.m_effetNodePool = [];
          _0x166615.m_scatterNodePool = [];
          _0x166615.m_scatterNumNodePool = [];
          return _0x166615;
        }
        _0x4235b3(_0x407144, _0x5c221f);
        var _0x55d504 = _0x407144.prototype;
        _0x55d504.onLoad = function () {
          for (var _0x360118 = 0x0; _0x360118 < _0x55e059.Symbol.ROYAL_BONUS_COIN + 0x1; _0x360118++) {
            this.m_effetNodePool.push([]);
          }
        };
        _0x55d504.GetEffectNode = function (_0xdf6404) {
          var _0x512f7b = this.m_effetNodePool[_0xdf6404].shift();
          if (!_0x512f7b) {
            (_0x512f7b = _0x4e7326(this.m_symbolPrefabs[_0xdf6404])).name = _0xdf6404.toString();
          }
          _0x512f7b.active = true;
          return _0x512f7b;
        };
        _0x55d504.ReturnEffectNode = function (_0x216e4a) {
          var _0x163263 = Number(_0x216e4a.name);
          _0x216e4a.active = false;
          this.m_effetNodePool[_0x163263].push(_0x216e4a);
        };
        _0x55d504.GetScatterNode = function () {
          var _0x32cfe5 = this.m_scatterNodePool.shift();
          if (!_0x32cfe5) {
            _0x32cfe5 = _0x4e7326(this.m_symbolScatter);
          }
          _0x32cfe5.active = true;
          return _0x32cfe5;
        };
        _0x55d504.reutrnScatterNode = function (_0x334aea) {
          _0x334aea.getComponent(_0x1695b4).SetMultiplierVisible(false);
          _0x334aea.active = false;
          this.m_scatterNodePool.push(_0x334aea);
        };
        _0x55d504.GetScatterNumNode = function () {
          var _0x245eaf = this.m_scatterNumNodePool.shift();
          if (!_0x245eaf) {
            _0x245eaf = _0x4e7326(this.m_symbolScatterNum);
          }
          _0x245eaf.active = true;
          return _0x245eaf;
        };
        _0x55d504.reutrnScatterNumNode = function (_0x36f30c) {
          _0x36f30c.active = false;
          this.m_scatterNumNodePool.push(_0x36f30c);
        };
        _0x55d504.GetFlyNode = function () {
          var _0x761d29 = this.m_flyNodePool.shift();
          if (!_0x761d29) {
            _0x761d29 = _0x4e7326(this.m_flyPrefab);
          }
          _0x761d29.active = true;
          return _0x761d29;
        };
        _0x55d504.ReturnFlyNode = function (_0x501c03) {
          _0x501c03.active = false;
          this.m_flyNodePool.push(_0x501c03);
        };
        _0x55d504.GetHitNode = function () {
          var _0x41b0b0 = this.m_hitNodePool.shift();
          if (!_0x41b0b0) {
            _0x41b0b0 = _0x4e7326(this.m_hitPrefab);
          }
          _0x41b0b0.active = true;
          return _0x41b0b0;
        };
        _0x55d504.ReturnHitNode = function (_0x158243) {
          _0x158243.active = false;
          this.m_hitNodePool.push(_0x158243);
        };
        _0x55d504.GetSymbolPrefab = function (_0x2b0708) {
          return this.m_symbolPrefabs[_0x2b0708];
        };
        return _0x407144;
      }(_0xead8bf);
      _0x3920f6 = _0x2f48b7(_0x4a9b8f.prototype, "m_symbolPrefabs", [_0x5222af], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x59751a = _0x2f48b7(_0x4a9b8f.prototype, 'm_symbolJP', [_0x2d5ba7], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x444207 = _0x2f48b7(_0x4a9b8f.prototype, 'm_symbolScatter', [_0xed58f0], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x266e3b = _0x2f48b7(_0x4a9b8f.prototype, 'm_symbolScatterNum', [_0x5a72b0], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4d806a = _0x2f48b7(_0x4a9b8f.prototype, "m_flyPrefab", [_0xd6f166], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': null
      });
      _0xee4073 = _0x2f48b7(_0x4a9b8f.prototype, 'm_hitPrefab', [_0x23b291], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x37087b;
      var _0x109316;
      var _0x1233e6;
      var _0x1e2460;
      var _0x33a146;
      var _0x59b4c0;
      var _0x28e195;
      var _0x179ddc;
      var _0x14d3d1;
      var _0x487f59;
      var _0x1c3c7a;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "58afbgi72RCYrg3eW8ahovc", 'CommonBuyBonusCell', undefined);
      var _0x34490b = _0x5d1a01.ccclass;
      var _0x47e924 = _0x5d1a01.property;
      _0x37087b = _0x34490b("CommonBuyBonusCell");
      _0x109316 = _0x47e924({
        'type': _0x43508a,
        'tooltip': "購買文字"
      });
      _0x1233e6 = _0x47e924({
        'type': _0x43508a,
        'tooltip': "項目標題"
      });
      _0x1e2460 = _0x47e924({
        'type': _0x5ade6c,
        'tooltip': "標題圖片名稱"
      });
      _0x33a146 = _0x47e924({
        'type': _0x502387,
        'tooltip': '金額'
      });
      _0x28e195 = function (_0x503676) {
        function _0x5eed65() {
          var _0x3dd9da;
          var _0x5f3f44 = arguments.length;
          var _0x41a814 = new Array(_0x5f3f44);
          for (var _0x5af4b9 = 0x0; _0x5af4b9 < _0x5f3f44; _0x5af4b9++) {
            _0x41a814[_0x5af4b9] = arguments[_0x5af4b9];
          }
          _0x29845c(_0x3dd9da = _0x503676.call.apply(_0x503676, [this].concat(_0x41a814)) || this, "m_buyHintSprite", _0x179ddc, _0x1cc4fd(_0x3dd9da));
          _0x29845c(_0x3dd9da, "m_titleSprite", _0x14d3d1, _0x1cc4fd(_0x3dd9da));
          _0x29845c(_0x3dd9da, "m_titlePicName", _0x487f59, _0x1cc4fd(_0x3dd9da));
          _0x29845c(_0x3dd9da, "m_priceLabel", _0x1c3c7a, _0x1cc4fd(_0x3dd9da));
          return _0x3dd9da;
        }
        _0x4235b3(_0x5eed65, _0x503676);
        var _0x22f241 = _0x5eed65.prototype;
        _0x22f241.start = function () {
          var _0x6980d2 = _0x53def9.GetGameAtlas();
          if (_0x53def9.CurrLang !== _0x2516e0.Lang.EN) {
            this.m_buyHintSprite.spriteFrame = _0x6980d2.getSpriteFrame("Txt_Buy_Feature_Buy");
            this.m_titleSprite.spriteFrame = _0x6980d2.getSpriteFrame(this.m_titlePicName);
          }
        };
        _0x22f241.SetPrice = function (_0x49c1b8) {
          this.m_priceLabel.string = _0x49c1b8;
        };
        return _0x5eed65;
      }(_0xead8bf);
      _0x179ddc = _0x2f48b7(_0x28e195.prototype, "m_buyHintSprite", [_0x109316], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x14d3d1 = _0x2f48b7(_0x28e195.prototype, "m_titleSprite", [_0x1233e6], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x487f59 = _0x2f48b7(_0x28e195.prototype, "m_titlePicName", [_0x1e2460], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return '';
        }
      });
      _0x1c3c7a = _0x2f48b7(_0x28e195.prototype, 'm_priceLabel', [_0x33a146], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x3f5b31 = _0x37087b(_0x59b4c0 = _0x28e195) || _0x59b4c0;
      var _0x31da64;
      var _0x2d80d9;
      var _0x4e521f;
      var _0x2d4c4c;
      var _0x2c83af;
      var _0x5e0020;
      var _0x496af9;
      var _0x543ed8;
      var _0x3de431;
      var _0x250318;
      var _0x1d06de;
      var _0x596526;
      var _0x16d56b;
      var _0x528ffe;
      var _0x14e9cc;
      var _0x5632de;
      var _0x18e660;
      var _0x5dbab0;
      var _0x94e365;
      var _0x36f958;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "deede8s0zBMX57ZpiWkWMfR", "CommonBuyBonus", undefined);
      var _0x394f24 = _0x5d1a01.ccclass;
      var _0x2a9d27 = _0x5d1a01.property;
      _0x31da64 = _0x394f24('CommonBuyBonus');
      _0x2d80d9 = _0x2a9d27({
        'type': _0x328c5f,
        'tooltip': '介面'
      });
      _0x4e521f = _0x2a9d27({
        'type': _0x34dc9d,
        'tooltip': "介面開關動畫"
      });
      _0x2d4c4c = _0x2a9d27({
        'type': _0x328c5f,
        'tooltip': "開啟按鈕節點"
      });
      _0x2c83af = _0x2a9d27({
        'type': _0x43508a,
        'tooltip': '開啟按鈕標題'
      });
      _0x5e0020 = _0x2a9d27({
        'type': _0x502387,
        'tooltip': "押注金額"
      });
      _0x496af9 = _0x2a9d27({
        'type': _0x3f5b31,
        'tooltip': "購買項目"
      });
      _0x543ed8 = _0x2a9d27({
        'type': _0x43508a,
        'tooltip': '標題'
      });
      _0x3de431 = _0x2a9d27({
        'type': _0x43508a,
        'tooltip': '押注'
      });
      _0x250318 = _0x2a9d27({
        'type': _0x502387,
        'tooltip': "幣別符號"
      });
      _0x1d06de = function (_0x1dc23d) {
        function _0x53318c() {
          var _0x585a6e;
          var _0x336b55 = arguments.length;
          var _0x582c3d = new Array(_0x336b55);
          for (var _0x5a37f8 = 0x0; _0x5a37f8 < _0x336b55; _0x5a37f8++) {
            _0x582c3d[_0x5a37f8] = arguments[_0x5a37f8];
          }
          _0x29845c(_0x585a6e = _0x1dc23d.call.apply(_0x1dc23d, [this].concat(_0x582c3d)) || this, "m_viewNode", _0x596526, _0x1cc4fd(_0x585a6e));
          _0x29845c(_0x585a6e, "m_anim", _0x16d56b, _0x1cc4fd(_0x585a6e));
          _0x29845c(_0x585a6e, "m_openBtnNode", _0x528ffe, _0x1cc4fd(_0x585a6e));
          _0x29845c(_0x585a6e, "m_openBtnTitle", _0x14e9cc, _0x1cc4fd(_0x585a6e));
          _0x29845c(_0x585a6e, "m_betLabel", _0x5632de, _0x1cc4fd(_0x585a6e));
          _0x29845c(_0x585a6e, "m_buyBonusCells", _0x18e660, _0x1cc4fd(_0x585a6e));
          _0x29845c(_0x585a6e, 'm_titleSprite', _0x5dbab0, _0x1cc4fd(_0x585a6e));
          _0x29845c(_0x585a6e, 'm_betSprite', _0x94e365, _0x1cc4fd(_0x585a6e));
          _0x29845c(_0x585a6e, 'm_currencyLabel', _0x36f958, _0x1cc4fd(_0x585a6e));
          _0x585a6e.m_iGameView = null;
          _0x585a6e.m_setting = null;
          _0x585a6e.m_betList = null;
          _0x585a6e.m_betIdx = 0x0;
          _0x585a6e.m_bonusType = null;
          _0x585a6e.m_isPlayingAnim = false;
          return _0x585a6e;
        }
        _0x4235b3(_0x53318c, _0x1dc23d);
        var _0x441d8f = _0x53318c.prototype;
        _0x441d8f.start = function () {
          this.m_viewNode.active = true;
          var _0x1b364d = _0x53def9.GetGameAtlas();
          if (_0x53def9.CurrLang !== _0x2516e0.Lang.EN) {
            this.m_betSprite.spriteFrame = _0x1b364d.getSpriteFrame('Txt_Buy_Feature_Bet');
            this.m_titleSprite.spriteFrame = _0x1b364d.getSpriteFrame('Txt_Buy_Feature_Title');
            if (this.m_openBtnTitle) {
              this.m_openBtnTitle.spriteFrame = _0x1b364d.getSpriteFrame("BuyBonus_IconName");
            }
          }
          _0x5a50fc.Register("TriggerFreeSpin", this);
          _0x5a50fc.Register("FreeSpinTotalWinEnd", this);
          _0x5a50fc.Register("PauseFreeSpin", this);
        };
        _0x441d8f.Init = function (_0x348633, _0x55332c, _0x34bf39, _0x2eae4b) {
          var _0x4525ff = this;
          if (undefined === _0x34bf39) {
            _0x34bf39 = false;
          }
          if (undefined === _0x2eae4b) {
            _0x2eae4b = null;
          }
          this.m_viewNode.active = false;
          if (_0x348633 && !_0x1cac53.CheckSwitchOff(_0x5c2901.ShopingMall)) {
            this.m_setting = _0x348633;
            this.m_iGameView = _0x55332c;
            this.m_betList = JSON.parse(JSON.stringify(_0x3f2a41.GetBetList()));
            for (var _0x46f115 = this.m_betList.length - 0x1; _0x46f115 >= 0x0 && this.m_betList[_0x46f115] > this.m_setting.MaxBet; _0x46f115--) {
              this.m_betList.splice(_0x46f115);
            }
            this.m_betIdx = _0x3f2a41.GetNowBetIndex();
            if (!this.m_betList[this.m_betIdx] || this.m_betList[this.m_betIdx] > this.m_betList[this.m_betList.length - 0x1]) {
              this.m_betIdx = this.m_betList.length - 0x1;
            }
            this.SetPrice();
            var _0x46edd4 = function (_0x3ae755) {
              _0x4525ff.m_buyBonusCells[_0x3ae755].getComponent(_0x41a45e).node.on(_0x328c5f.EventType.TOUCH_END, function () {
                if (_0xfbfa53.IsFeaturesDemoMode) {
                  _0x4525ff.Hide();
                } else {
                  if (!(null == _0x2eae4b)) {
                    _0x2eae4b();
                  }
                  _0x509786.Play(_0x2516e0.AudioClips.COMMON_BTN);
                  if (!_0x4525ff.m_isPlayingAnim) {
                    _0x44215b.ForceChangeExtraBetMode(false);
                    _0x4525ff.m_bonusType = _0x3ae755;
                    _0x4525ff.Hide();
                    _0x3f2a41.SetNowBet(_0x4525ff.m_betList[_0x4525ff.m_betIdx]);
                    _0x4525ff.m_iGameView.ClickSpin();
                  }
                }
              });
            };
            for (var _0x137762 = 0x0; _0x137762 < this.m_buyBonusCells.length; _0x137762++) {
              _0x46edd4(_0x137762);
            }
            this.m_viewNode.active = false;
            if (_0x34bf39 && this.m_openBtnNode) {
              this.m_openBtnNode.removeFromParent();
              _0xfbfa53.SetGameBuyBonus(this.m_openBtnNode);
            }
          } else {
            this.SetBuyBtnVisible(false);
          }
        };
        _0x441d8f.OnEvent = function (_0x528d8c) {
          if (_0x528d8c === "TriggerFreeSpin") {
            this.Hide();
            this.SetBuyBtnVisible(false);
          } else if (!(_0x528d8c !== "FreeSpinTotalWinEnd" && _0x528d8c !== "PauseFreeSpin")) {
            this.SetBuyBtnVisible(true);
          }
        };
        _0x441d8f.SetPrice = function () {
          var _0x5d818a = this.m_betList[this.m_betIdx];
          if (this.m_currencyLabel) {
            if (_0x2516e0.DollarSymbol) {
              this.m_currencyLabel.string = '(' + _0x2516e0.DollarSymbol + ')';
            } else {
              this.m_currencyLabel.node.active = false;
            }
          }
          this.m_betLabel.string = _0x1cac53.FormatNumberThousands(_0x5d818a, _0x1cac53.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          for (var _0x1eb734 = 0x0; _0x1eb734 < this.m_buyBonusCells.length; _0x1eb734++) {
            var _0x308430 = _0x1cac53.times(_0x5d818a, this.m_setting.PriceOdd[_0x1eb734]);
            this.m_buyBonusCells[_0x1eb734].SetPrice(_0x1cac53.FormatNumberThousands(_0x308430, _0x1cac53.FORMAT_NUMBER_TYPE.PERMANENT_DOT));
          }
        };
        _0x441d8f.SetBuyBtnVisible = function (_0x2567d3) {
          this.m_openBtnNode.active = !!this.m_setting && _0x2567d3;
        };
        _0x441d8f.GetBuyBtnVisible = function () {
          return this.m_openBtnNode.active;
        };
        _0x441d8f.GetBuyBonusBet = function () {
          return this.m_setting && null !== this.m_bonusType ? _0x1cac53.times(this.m_setting.PriceOdd[this.m_bonusType], _0x3f2a41.GetNowBetValue()) : _0x1cac53.strip(_0x3f2a41.GetNowBetValue());
        };
        _0x441d8f.CleanInfo = function () {
          this.m_bonusType = null;
        };
        _0x441d8f.IsOpen = function () {
          return this.m_viewNode.active;
        };
        _0x441d8f.Show = function () {
          var _0x16e573 = this;
          if (!(_0x342605.Current() !== _0x10ffc8.IDLE || _0x2516e0.FreeSpinRemain > 0x0) && !this.m_anim.getState("Buy_Feature_Close").isPlaying && !this.m_viewNode.active) {
            _0x4ca72a.stopAllByTarget(this.node);
            this.m_isPlayingAnim = true;
            _0x509786.Play(_0x2516e0.AudioClips.COMMON_BTN);
            this.m_viewNode.active = true;
            this.m_anim.play('Buy_Feature_Open');
            var _0x57fc43 = this.m_anim.getState('Buy_Feature_Open');
            _0x70e19b(this.node).delay(_0x57fc43.duration).call(function () {
              _0x16e573.m_isPlayingAnim = false;
            }).start();
            var _0x108697 = '-1';
            var _0x453ebb = 0x0;
            if (_0x2516e0.APP) {
              _0x108697 = _0x2516e0.APP.GetAID();
              _0x453ebb = Number(_0x2516e0.APP.GetApiID());
            }
            _0x2516e0.SendBtnClickEvent(Number(_0x108697), _0x453ebb, Number(_0x2516e0.NOW_GAME_ID), this.m_iGameView.Version, _0x2516e0.BTN_CLICK_EVENT.INGAME_BUY_BONUS, 0x0, false);
          }
        };
        _0x441d8f.Hide = function () {
          var _0x189336 = _0x9f23dc(_0x288614().mark(function _0x5d2509() {
            var _0x3357cd;
            var _0x401d9e;
            var _0x25c23c;
            var _0x40a825 = this;
            return _0x288614().wrap(function (_0x14525a) {
              for (;;) {
                switch (_0x14525a.prev = _0x14525a.next) {
                  case 0x0:
                    _0x3357cd = this.m_anim.getState("Buy_Feature_Close");
                    if (this.m_viewNode.active && !_0x3357cd.isPlaying) {
                      _0x14525a.next = 0x3;
                      break;
                    }
                    return _0x14525a.abrupt('return');
                  case 0x3:
                    if ((_0x401d9e = this.m_anim.getState('Buy_Feature_Open')).isPlaying) {
                      _0x401d9e.stop();
                    }
                    _0x4ca72a.stopAllByTarget(this.node);
                    this.m_isPlayingAnim = true;
                    _0x509786.Play(_0x2516e0.AudioClips.COMMON_BTN);
                    this.m_anim.play("Buy_Feature_Close");
                    _0x3357cd = this.m_anim.getState("Buy_Feature_Close");
                    _0x70e19b(this.node).delay(_0x401d9e.duration).call(function () {
                      _0x40a825.m_isPlayingAnim = false;
                    }).start();
                    _0x25c23c = this.m_anim.getState("Buy_Feature_Close");
                    _0x14525a.next = 0xe;
                    return _0x2516e0.Wait(this, _0x25c23c.duration);
                  case 0xe:
                    this.m_viewNode.active = false;
                  case 0xf:
                  case "end":
                    return _0x14525a.stop();
                }
              }
            }, _0x5d2509, this);
          }));
          return function () {
            return _0x189336.apply(this, arguments);
          };
        }();
        _0x441d8f.AddBet = function () {
          if (!(this.m_betIdx + 0x1 > this.m_betList.length - 0x1)) {
            _0x509786.Play(_0x2516e0.AudioClips.COMMON_BTN);
            this.m_betIdx++;
            this.SetPrice();
          }
        };
        _0x441d8f.SubBet = function () {
          if (!(this.m_betIdx - 0x1 < 0x0)) {
            _0x509786.Play(_0x2516e0.AudioClips.COMMON_BTN);
            this.m_betIdx--;
            this.SetPrice();
          }
        };
        _0xef4a8(_0x53318c, [{
          'key': "BonusType",
          'get': function () {
            return this.m_bonusType;
          }
        }]);
        return _0x53318c;
      }(_0xead8bf);
      _0x596526 = _0x2f48b7(_0x1d06de.prototype, "m_viewNode", [_0x2d80d9], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x16d56b = _0x2f48b7(_0x1d06de.prototype, "m_anim", [_0x4e521f], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x528ffe = _0x2f48b7(_0x1d06de.prototype, "m_openBtnNode", [_0x2d4c4c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x14e9cc = _0x2f48b7(_0x1d06de.prototype, 'm_openBtnTitle', [_0x2c83af], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5632de = _0x2f48b7(_0x1d06de.prototype, "m_betLabel", [_0x5e0020], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x18e660 = _0x2f48b7(_0x1d06de.prototype, "m_buyBonusCells", [_0x496af9], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x5dbab0 = _0x2f48b7(_0x1d06de.prototype, "m_titleSprite", [_0x543ed8], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x94e365 = _0x2f48b7(_0x1d06de.prototype, 'm_betSprite', [_0x3de431], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x36f958 = _0x2f48b7(_0x1d06de.prototype, 'm_currencyLabel', [_0x250318], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "e7a72q0wLNPWZqcdH9Ty9PF", 'GameView', undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "84c5byXmKBEJIwVBTwOs7ly", "ButtonPro", undefined);
      var _0x178aa1;
      var _0x38a4c2;
      var _0x4000f9;
      !function (_0x1cb3b8) {
        _0x1cb3b8[_0x1cb3b8.NONE = 0x0] = "NONE";
        _0x1cb3b8[_0x1cb3b8.COLOR = 0x1] = 'COLOR';
        _0x1cb3b8[_0x1cb3b8.SPRITE = 0x2] = "SPRITE";
        _0x1cb3b8[_0x1cb3b8.SCALE = 0x4] = "SCALE";
        _0x1cb3b8[_0x1cb3b8.COLOR_SPRITE = 0x3] = "COLOR_SPRITE";
        _0x1cb3b8[_0x1cb3b8.COLOR_SCALE = 0x5] = "COLOR_SCALE";
        _0x1cb3b8[_0x1cb3b8.SPRITE_SCALE = 0x6] = "SPRITE_SCALE";
        _0x1cb3b8[_0x1cb3b8.ALL = 0x7] = "ALL";
      }(_0x178aa1 || (_0x178aa1 = {}));
      _0x2a97d9(_0x178aa1);
      (function (_0x1fbe3e) {
        _0x1fbe3e.NORMAL = "normal";
        _0x1fbe3e.HOVER = "hover";
        _0x1fbe3e.PRESSED = "pressed";
        _0x1fbe3e.DISABLED = 'disabled';
      })(_0x38a4c2 || (_0x38a4c2 = {}));
      (function (_0x4b72f2) {
        _0x4b72f2.CLICK = "click";
      })(_0x4000f9 || (_0x4000f9 = {}));
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, 'da7972YP9VAta/rfkmC0gmE', "ColorText", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "ccb69RBfI5KBKNPuwywfE10", 'ColorFadingUI', undefined);
      var _0xe93bfc;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "9cd57oopkhBmZJ5o4EZK1tk", 'EvtReceiver', undefined);
      var _0x1b91de = _0x5d1a01.ccclass;
      var _0x3ec31e = _0x1b91de(_0xe93bfc = function (_0x68648) {
        function _0x148687() {
          var _0x2c626b;
          var _0x477fed = arguments.length;
          var _0x4a64e0 = new Array(_0x477fed);
          for (var _0x1c0022 = 0x0; _0x1c0022 < _0x477fed; _0x1c0022++) {
            _0x4a64e0[_0x1c0022] = arguments[_0x1c0022];
          }
          (_0x2c626b = _0x68648.call.apply(_0x68648, [this].concat(_0x4a64e0)) || this).m_callback = undefined;
          return _0x2c626b;
        }
        _0x4235b3(_0x148687, _0x68648);
        _0x148687.Pack = function (_0x41fac3, _0x16b3c7) {
          _0x41fac3.addComponent(_0x148687);
          _0x41fac3.getComponent(_0x148687).SetCallback(_0x16b3c7);
        };
        var _0x3d08a2 = _0x148687.prototype;
        _0x3d08a2.EvtReciever = function (_0x3e095e) {
          _0x2fc2f7("AnimEvtReciever: ", _0x3e095e);
          if (this.m_callback) {
            this.m_callback(_0x3e095e);
          } else {
            _0x2fc2f7("callback沒有設定，無法處理event: ", _0x3e095e);
          }
        };
        _0x3d08a2.triggerAnimationEvent = function (_0x1f64f6) {
          _0x2fc2f7("triggerAnimationEvent: ", _0x1f64f6);
          if (this.m_callback) {
            this.m_callback(_0x1f64f6);
          } else {
            _0x2fc2f7("callback沒有設定，無法處理event: ", _0x1f64f6);
          }
        };
        _0x3d08a2.SetCallback = function (_0xbb54ff) {
          this.m_callback = _0xbb54ff;
        };
        _0x3d08a2.onDestroy = function () {
          this.m_callback = null;
        };
        return _0x148687;
      }(_0xead8bf)) || _0xe93bfc;
      var _0x5863b5;
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "bc3c97zP8pM2I5NAob2S72W", "EffectView", undefined);
      var _0x2fa38c = function (_0x21f825) {
        function _0x3abd15() {
          var _0x32ea82;
          (_0x32ea82 = _0x21f825.call(this) || this).m_awardBoardFile = _0x3abd15.EFFECT_ROOT + "win/awardBoard";
          _0x32ea82.m_effectList = {};
          _0x32ea82.m_timeLineList = {};
          _0x32ea82.m_winEffCbFunc = null;
          _0x32ea82.m_currentWinEffect = null;
          _0x32ea82.m_currentWinEffectTimeline = null;
          _0x32ea82.m_awardBoard = null;
          _0x32ea82.m_awardBoardTimeline = null;
          _0x32ea82.m_txtWinValue = null;
          _0x32ea82.m_durRollMoneyTick = _0x3abd15.MONEY_ROLL_TIME;
          _0x32ea82.m_moneyRealValue = 0x0;
          _0x32ea82.m_moneyRollValue = 0x0;
          _0x32ea82.m_bgMaskNode = null;
          _0x32ea82.m_commonGetCoinCbFunc = null;
          _0x32ea82.m_commonGetCoinMidCbFunc = null;
          _0x32ea82.m_commonGetCoinEff = null;
          _0x32ea82.m_commonGetCoinTline = null;
          _0x32ea82.m_updateMoneyEff = null;
          _0x32ea82.m_updateMoneyTline = null;
          _0x32ea82.m_getCoinParticle = null;
          _0x32ea82.m_odds = [0x3, 0x5, 0xa, 0x14, 0x1e];
          _0x32ea82.m_winEffectFiles = [null, null, _0x3abd15.EFFECT_ROOT + _0x3abd15.FILE_PATH.BIG_WIN, _0x3abd15.EFFECT_ROOT + _0x3abd15.FILE_PATH.MEGA_WIN, _0x3abd15.EFFECT_ROOT + _0x3abd15.FILE_PATH.SUPER_WIN];
          _0x32ea82.m_coinEffects = [0x2, 0x3, 0x5, 0x5, 0x5];
          _0x32ea82.m_coinTimes = [0x2, 0x2, 0x5, 0x5, 0x5];
          _0x32ea82.m_soundNameByOdds = [];
          _0x32ea82.m_isAutoCheckFloat = false;
          _0x32ea82.m_rotateCoins = {};
          _0x32ea82.m_coinEffectNode = undefined;
          _0x32ea82.m_loadedSound = undefined;
          _0x32ea82.m_isLandscape = false;
          _0x32ea82.m_LandscapeRate = 0x1;
          _0x32ea82.m_winType = undefined;
          _0x32ea82.m_nowPlaySoundID = null;
          _0x32ea82.m_loadedSound = false;
          return _0x32ea82;
        }
        _0x4235b3(_0x3abd15, _0x21f825);
        var _0x193771 = _0x3abd15.prototype;
        _0x193771.LoadSound = function () {
          this.m_loadedSound = true;
        };
        _0x193771.OnUpdate = function (_0x2cf389) {
          this.RollWinMoney(_0x2cf389);
        };
        _0x193771.ShowWinAndCoinEffect = function (_0x4056fd, _0x540881, _0x4a943e) {
          if (undefined === _0x4a943e) {
            _0x4a943e = null;
          }
          _0x4a943e = _0x4a943e || null;
          var _0x5d61a0 = _0x36c32f.GetManagerId(_0x4a943e);
          this.ShowWinEffect(_0x4056fd, _0x5d61a0);
          if (!(undefined !== _0x4056fd.playCoinAtWinEffect && true !== _0x4056fd.playCoinAtWinEffect)) {
            this.playCoinEffect(_0x540881, _0x5d61a0);
          }
          _0x36c32f.StartLoad(_0x5d61a0);
        };
        _0x193771.ShowWinEffect = function (_0x1cb444, _0x19cd55) {
          var _0x506788 = this;
          if (undefined === _0x19cd55) {
            _0x19cd55 = -0x1;
          }
          var _0x195d20 = _0x1cb444.effectFile;
          var _0x20a78a = _0x1cb444.winValue;
          var _0x3065ce = _0x1cb444.cbFunc;
          var _0x5ce3f3 = _0x1cb444.yPos;
          var _0x3ce1c2 = _0x1cb444.deltaY;
          var _0x27f22f = _0x1cb444.cbFuncBtoM;
          var _0x4d838b = _0x1cb444.cbFuncMtoS;
          var _0x58000c = _0x1cb444.cbFuncPlaying;
          var _0x524497 = _0x1cb444.isLoop || false;
          var _0x28a680 = _0x1cb444.rollTime;
          if (null != _0x20a78a) {
            var _0x43cc53 = function () {
              if (_0x506788.m_bgMaskNode) {
                _0x506788.m_bgMaskNode.active = true;
              }
              _0x2fc2f7("LoadPrefabManager CB", _0x20a78a);
              _0x5ce3f3 = null != _0x5ce3f3 && _0x5ce3f3 || _0x3abd15.DEFAULT_Y;
              _0x506788.m_effectList[_0x195d20].setPosition(_0x40bacd(_0x3abd15.DesignSize.width / 0x2, _0x5ce3f3));
              _0x506788.m_effectList[_0x195d20].active = true;
              _0x506788.m_timeLineList[_0x195d20].play(_0x3abd15.ANI_LABEL.ACT);
              _0x506788.m_currentWinEffect = _0x506788.m_effectList[_0x195d20];
              _0x506788.m_currentWinEffectTimeline = _0x506788.m_timeLineList[_0x195d20];
              _0x506788.m_currentWinEffectTimeline.name = _0x195d20;
              _0x3ce1c2 = _0x195d20 == _0x3abd15.FILE_PATH.JACKPOT ? 0xb4 : null != _0x3ce1c2 ? _0x3ce1c2 : 0xe6;
              _0x506788.m_awardBoard.setPosition(_0x40bacd(_0x3abd15.DesignSize.width / 0x2, _0x5ce3f3 - _0x3ce1c2));
              _0x506788.m_awardBoard.active = true;
              _0x506788.m_awardBoardTimeline.play(_0x3abd15.ANI_LABEL.ACT);
              _0x506788.SetWinValue(_0x20a78a, _0x28a680);
              if (!(null == _0x58000c)) {
                _0x58000c();
              }
            };
            var _0x37ecf2 = _0x19cd55;
            if (-0x1 == _0x19cd55) {
              _0x37ecf2 = _0x36c32f.GetManagerId(_0x43cc53);
            }
            this.m_winEffCbFunc = _0x3065ce;
            if (null == this.m_effectList[_0x195d20]) {
              _0x36c32f.AddLoad(_0x37ecf2);
              _0x2516e0.GameBundle.load(_0x195d20, function (_0x103fc9, _0x503813) {
                if (_0x103fc9) {
                  _0x3dc7e8(_0x103fc9.message || _0x103fc9);
                } else {
                  var _0x1e600e = _0x4e7326(_0x503813);
                  _0x1e600e.active = false;
                  _0x506788.addChild(_0x1e600e);
                  _0x1cac53.SetZIndex(_0x1e600e, _0x3abd15.EFF_ZORDER.WIN_EFFECT);
                  var _0x1bff8a = _0x1e600e.getComponent(_0x34dc9d);
                  _0x3ec31e.Pack(_0x1e600e, function (_0x1c66dc) {
                    if (_0x1c66dc == _0x3abd15.ANI_FRAME_EVENT.ENDING) {
                      if (_0x506788.m_awardBoard && _0x506788.m_awardBoard.active) {
                        _0x506788.m_awardBoardTimeline.play(_0x3abd15.ANI_LABEL.ENDING);
                      }
                    } else {
                      if (_0x1c66dc == _0x3abd15.ANI_FRAME_EVENT.LOOP) {
                        if (_0x524497) {
                          _0x1bff8a.play(_0x3abd15.ANI_LABEL.LOOP);
                          _0x1bff8a.getState(_0x3abd15.ANI_LABEL.LOOP).wrapMode = _0x38106c.WrapMode.Loop;
                        }
                      } else if (_0x1c66dc == _0x3abd15.ANI_FRAME_EVENT.B_TO_M) {
                        if (_0x506788.m_awardBoard && _0x506788.m_awardBoard.active) {
                          _0x70e19b(_0x506788.m_txtWinValue).by(0.25, {
                            'scale': _0x40bacd(1.5, 1.5, 1.5)
                          }).by(0.1, {
                            'scale': _0x40bacd(0.9, 0.9, 0.9)
                          }).start();
                        }
                        if (_0x27f22f) {
                          _0x27f22f();
                        }
                      } else if (_0x1c66dc == _0x3abd15.ANI_FRAME_EVENT.M_TO_S) {
                        if (_0x506788.m_awardBoard && _0x506788.m_awardBoard.active) {
                          _0x70e19b(_0x506788.m_txtWinValue).by(0.25, {
                            'scale': _0x40bacd(1.5, 1.5, 1.5)
                          }).by(0.1, {
                            'scale': _0x40bacd(0.9, 0.9, 0.9)
                          }).start();
                        }
                        if (!(null == _0x4d838b)) {
                          _0x4d838b();
                        }
                      } else if (_0x1c66dc == _0x3abd15.ANI_FRAME_EVENT.END) {
                        _0x2fc2f7("ANI_FRAME_EVENT.END");
                        _0x506788.OnAnimationEnd();
                        if (_0x506788.m_winEffCbFunc) {
                          _0x506788.m_winEffCbFunc();
                        }
                      }
                    }
                  });
                  _0x1e600e.active = false;
                  _0x506788.m_effectList[_0x195d20] = _0x1e600e;
                  _0x506788.m_timeLineList[_0x195d20] = _0x1bff8a;
                  _0x36c32f.OnLoaded(_0x37ecf2);
                }
              });
              if (null == this.m_awardBoard) {
                _0x36c32f.AddLoad(_0x37ecf2);
                _0x2516e0.GameBundle.load(this.m_awardBoardFile, function (_0x4f98f5, _0x499d88) {
                  if (_0x4f98f5) {
                    _0x3dc7e8(_0x4f98f5.message || _0x4f98f5);
                  } else {
                    _0x506788.m_awardBoard = _0x4e7326(_0x499d88);
                    _0x506788.addChild(_0x506788.m_awardBoard);
                    _0x1cac53.SetZIndex(_0x506788.m_awardBoard, _0x3abd15.EFF_ZORDER.AWARD_BOARD);
                    _0x506788.m_awardBoard.active = false;
                    _0x506788.m_awardBoardTimeline = _0x506788.m_awardBoard.getComponent(_0x34dc9d);
                    _0x506788.m_txtWinValue = _0x506788.m_awardBoard.getChildByName("win_value_label");
                    _0x36c32f.OnLoaded(_0x37ecf2);
                  }
                });
              }
              if (-0x1 == _0x19cd55) {
                _0x36c32f.StartLoad(_0x37ecf2);
              } else {
                _0x36c32f.AddOnLoadedCallback(_0x37ecf2, _0x43cc53);
              }
            } else if (-0x1 == _0x19cd55) {
              _0x43cc53();
            } else {
              _0x36c32f.AddOnLoadedCallback(_0x37ecf2, _0x43cc53);
            }
          } else if (this.m_awardBoard) {
            this.m_awardBoard.active = false;
            this.m_awardBoardTimeline.stop();
          }
        };
        _0x193771.WinEffect = function () {
          if (this.m_currentWinEffectTimeline) {
            this.m_currentWinEffectTimeline.play(_0x3abd15.ANI_LABEL.ENDING, false);
          }
        };
        _0x193771.SetWinValue = function (_0x510f5a, _0x43967c, _0x376d99) {
          if (undefined === _0x43967c) {
            _0x43967c = null;
          }
          if (undefined === _0x376d99) {
            _0x376d99 = 0x0;
          }
          this.m_moneyRealValue = _0x1cac53.strip(_0x510f5a);
          this.m_moneyRollValue = _0x376d99;
          _0x43967c = null == _0x43967c && _0x3abd15.MONEY_ROLL_TIME || _0x43967c;
          this.m_durRollMoneyTick = _0x1cac53.strip(_0x43967c);
        };
        _0x193771.RollWinMoney = function (_0x13f118) {
          this.m_moneyRealValue = _0x1cac53.strip(this.m_moneyRealValue);
          this.m_moneyRollValue = _0x1cac53.strip(this.m_moneyRollValue);
          if (this.m_moneyRollValue < this.m_moneyRealValue) {
            var _0xd2f7c9 = _0x1cac53.divide(this.m_durRollMoneyTick, _0x1cac53.strip(_0x13f118));
            var _0x3965dc = _0x1cac53.divide(_0x1cac53.strip(this.m_moneyRealValue - this.m_moneyRollValue), _0xd2f7c9);
            var _0xe92016 = _0x1cac53.FORMAT_NUMBER_TYPE.DEFINE_DOT;
            if (this.m_isAutoCheckFloat) {
              _0xe92016 = this.m_moneyRealValue.toString().indexOf('.') > -0x1 ? _0x1cac53.FORMAT_NUMBER_TYPE.PERMANENT_DOT : _0x1cac53.FORMAT_NUMBER_TYPE.NONE_DOT;
            }
            this.m_moneyRollValue = _0x1cac53.strip(this.m_moneyRollValue + _0x3965dc);
            if (this.m_moneyRollValue > this.m_moneyRealValue) {
              this.m_moneyRollValue = this.m_moneyRealValue;
            }
            this.SetLabelString(this.m_txtWinValue, this.m_moneyRollValue, _0xe92016);
            this.m_durRollMoneyTick = _0x1cac53.strip(this.m_durRollMoneyTick - _0x13f118);
          }
        };
        _0x193771.SetLabelString = function (_0x44c399, _0x5da3ac, _0x2046b3) {
          if (undefined === _0x2046b3) {
            _0x2046b3 = null;
          }
          var _0x1b1300 = _0x44c399.getComponent(_0x502387);
          if (null != _0x1b1300 && null != _0x1b1300) {
            if (null == _0x2046b3 || null == _0x2046b3) {
              _0x1b1300.string = _0x5da3ac.toString();
            } else {
              var _0x3e76dc;
              if ("number" == typeof _0x5da3ac) {
                _0x3e76dc = _0x5da3ac;
              } else {
                var _0x53f840 = _0x5da3ac.replace(/,/g, '');
                _0x3e76dc = isNaN(Number(_0x53f840)) ? 0x0 : Number(_0x53f840);
              }
              _0x1b1300.string = _0x1cac53.FormatNumberThousands(_0x3e76dc, _0x2046b3);
            }
            _0x1cac53.SetFont(_0x1b1300);
          } else {
            _0x2fc2f7("Warning!!!!!!!!!! SetLabelString: ", _0x44c399);
          }
        };
        _0x193771.SetWinMoneyToMax = function () {};
        _0x193771.IsRollMoneyEnd = function () {
          return this.m_moneyRollValue == this.m_moneyRealValue;
        };
        _0x193771.StopAnimation = function (_0x1499a5) {
          if (this.m_currentWinEffectTimeline) {
            this.m_currentWinEffectTimeline.stop();
          }
          if (this.m_awardBoard) {
            this.m_awardBoard.active = false;
            this.m_awardBoardTimeline.stop();
          }
          if (0x1 != _0x1499a5 && this.m_winEffCbFunc) {
            this.m_winEffCbFunc();
          }
          this.m_winEffCbFunc = null;
          this.OnAnimationEnd();
        };
        _0x193771.OnAnimationEnd = function () {
          if (this.m_currentWinEffect) {
            this.m_currentWinEffect.active = false;
          }
          if (this.m_bgMaskNode) {
            this.m_bgMaskNode.active = false;
          }
          this.m_moneyRealValue = 0x0;
          this.m_moneyRollValue = 0x0;
        };
        _0x193771.playCoinEffect = function (_0x5ef4a5, _0x5bdcda) {
          var _0x3707da = this;
          if (undefined === _0x5bdcda) {
            _0x5bdcda = -0x1;
          }
          if (_0x2516e0.CommonBundle) {
            var _0xc4352e = _0x5ef4a5.level;
            var _0x588465 = _0x5ef4a5.position;
            var _0x5fbb8e = _0x5ef4a5.time;
            if (null == _0x5fbb8e) {
              _0x5fbb8e = 0x0;
            }
            var _0x40d69e = _0x5ef4a5.zOrder;
            if (null == _0x40d69e) {
              _0x40d69e = 0x0;
            }
            var _0x307001 = _0x5ef4a5.parent;
            this.stopCoinEffectImmly();
            var _0x103232 = _0x3abd15.COIN_EFFECT_LIST[_0xc4352e];
            if (_0x103232 = _0x1cac53.GetFilePath(_0x103232)) {
              _0x2fc2f7('~~~~~~~~~~~~~~~~~~~~~~', _0x5ef4a5, _0x5fbb8e, _0x40d69e);
              var _0x1e5e39 = function () {
                _0x3707da.m_coinEffectNode.setPosition(_0x40bacd(_0x588465.x, _0x588465.y));
                if (null == _0x307001 || null == _0x307001) {
                  _0x3707da.addChild(_0x3707da.m_coinEffectNode);
                  _0x1cac53.SetZIndex(_0x3707da.m_coinEffectNode, 0x0);
                } else {
                  _0x307001.addChild(_0x3707da.m_coinEffectNode);
                  _0x1cac53.SetZIndex(_0x3707da.m_coinEffectNode, _0x40d69e);
                }
                if (0x0 != _0x5fbb8e) {
                  _0x70e19b(_0x3707da).delay(_0x5fbb8e).call(function () {
                    _0x3707da.stopCoinEffect();
                  }).start();
                }
              };
              if (-0x1 != _0x5bdcda) {
                _0x36c32f.AddOnLoadedCallback(_0x5bdcda, _0x1e5e39);
                _0x36c32f.AddLoad(_0x5bdcda);
              }
              _0x2516e0.CommonBundle.load(_0x103232, function (_0x21a226, _0x11c674) {
                _0x2fc2f7("LoadRes ", _0x103232);
                if (_0x21a226) {
                  _0x3dc7e8(_0x21a226.message || _0x21a226);
                } else {
                  _0x3707da.m_coinEffectNode = _0x4e7326(_0x11c674);
                  if (_0x3707da.m_coinEffectNode) {
                    if (-0x1 == _0x5bdcda) {
                      _0x1e5e39();
                    } else {
                      _0x36c32f.OnLoaded(_0x5bdcda);
                    }
                  } else {
                    _0x2fc2f7("SlotBottomBarView.playCoinEffect m_coinEffect is null");
                  }
                }
              });
            }
          }
        };
        _0x193771.stopCoinEffectImmly = function () {
          if (null != this.m_coinEffectNode && this.m_coinEffectNode.removeFromParent) {
            this.m_coinEffectNode.removeFromParent();
            this.m_coinEffectNode = null;
          }
        };
        _0x193771.stopCoinEffect = function () {
          if (null != this.m_coinEffectNode && this.m_coinEffectNode) {
            var _0x26e342 = this.m_coinEffectNode.getChildByName("Particle_1").getComponent(_0x1cd7ab);
            var _0x110957 = this.m_coinEffectNode.getChildByName('Particle_2').getComponent(_0x1cd7ab);
            if (_0x26e342) {
              _0x26e342.stopSystem();
            }
            if (_0x110957) {
              _0x110957.stopSystem();
            }
          }
        };
        _0x193771.ShowCommonEffect = function (_0x54332a, _0x594bf1, _0x1e0328, _0x305bee) {
          if (undefined === _0x1e0328) {
            _0x1e0328 = null;
          }
          if (undefined === _0x305bee) {
            _0x305bee = null;
          }
          _0x1e0328 = _0x1e0328 || {};
          _0x305bee = _0x305bee || {};
          var _0x1721f3 = new _0x4a1d16(_0x3abd15.DesignSize.width / 0x2, _0x3abd15.DesignSize.height);
          var _0x1bf7c5 = new _0x4a1d16(_0x3abd15.DesignSize.width / 0x2 - 0xa, 0x91);
          var _0x26ebcd = undefined;
          var _0x17ac7b = _0x54332a / _0x594bf1;
          if (_0x3f2a41) {
            _0x54332a = _0x3f2a41.GetDisplayValue(_0x54332a);
          }
          for (var _0x446943 = this.m_odds.length - 0x1; _0x446943 >= 0x0; _0x446943--) {
            if (_0x17ac7b >= this.m_odds[_0x446943]) {
              _0x305bee.level = this.m_coinEffects[_0x446943];
              if (0x5 == this.m_coinEffects[_0x446943]) {
                _0x305bee.position = _0x305bee.position ? _0x305bee.position : _0x1721f3;
              } else {
                _0x305bee.position = _0x305bee.smallPosition ? _0x305bee.smallPosition : _0x305bee.position ? _0x305bee.position : _0x1bf7c5;
              }
              if (null == _0x305bee.time || _0x305bee.time <= 0x0) {
                _0x305bee.time = this.m_coinTimes[_0x446943];
              }
              if (0x5 == this.m_coinEffects[_0x446943]) {
                _0x1e0328.effectFile = this.m_winEffectFiles[_0x446943];
                _0x1e0328.winValue = _0x54332a;
                this.SetWinType(_0x446943);
                this.ShowWinAndCoinEffect(_0x1e0328, _0x305bee);
              } else {
                this.playCoinEffect(_0x305bee);
              }
              _0x26ebcd = this.m_soundNameByOdds[_0x446943];
              break;
            }
          }
          if (null != _0x26ebcd) {
            this.m_nowPlaySoundID = _0x509786.Play(_0x26ebcd, false);
          }
          if (null == _0x305bee.time) {
            _0x305bee.time = 0x0;
          }
          return _0x305bee.time;
        };
        _0x193771.SkipEffect = function () {
          this.stopCoinEffect();
          _0x19400b.instance.ActionManager.removeAllActionsFromTarget(this);
          if (this.m_currentWinEffectTimeline) {
            var _0x580515 = this.m_currentWinEffectTimeline.name;
            var _0x4a679b = _0x1cac53.FORMAT_NUMBER_TYPE.DEFINE_DOT;
            if (!(_0x580515 != _0x3abd15.FILE_PATH.BIG_WIN && _0x580515 != _0x3abd15.FILE_PATH.MEGA_WIN && _0x580515 != _0x3abd15.FILE_PATH.SUPER_WIN)) {
              this.m_moneyRollValue = _0x1cac53.strip(this.m_moneyRollValue);
              this.m_moneyRealValue = _0x1cac53.strip(this.m_moneyRealValue);
              if (this.m_moneyRollValue == this.m_moneyRealValue) {
                this.m_awardBoardTimeline.play(_0x3abd15.ANI_LABEL.ENDING);
                this.m_currentWinEffectTimeline.setCurrentTime(0x5);
              } else {
                if (this.m_isAutoCheckFloat) {
                  _0x4a679b = this.m_moneyRealValue.toString().indexOf('.') > -0x1 ? _0x1cac53.FORMAT_NUMBER_TYPE.PERMANENT_DOT : _0x1cac53.FORMAT_NUMBER_TYPE.NONE_DOT;
                }
                this.SetLabelString(this.m_txtWinValue, this.m_moneyRealValue, _0x4a679b);
                this.m_currentWinEffectTimeline.setCurrentTime(3.8);
              }
              this.m_currentWinEffectTimeline = null;
            }
            this.m_moneyRollValue = this.m_moneyRealValue;
          }
        };
        _0x193771.SkipEffectSound = function () {
          if (this.m_nowPlaySoundID) {
            _0x509786.Stop(this.m_nowPlaySoundID);
            this.m_nowPlaySoundID = null;
          }
        };
        _0x193771.SetAutoCheckFloat = function (_0x2d1ea8) {
          this.m_isAutoCheckFloat = _0x2d1ea8;
        };
        _0x193771.SetOdds = function (_0x6d3f1d) {
          this.m_odds = _0x6d3f1d;
        };
        _0x193771.SetWinEffectFiles = function (_0x485229) {
          this.m_winEffectFiles = _0x485229;
        };
        _0x193771.SetAwardBoardFile = function (_0x46845f) {
          this.m_awardBoardFile = _0x46845f;
        };
        _0x193771.SetEffectLevels = function (_0x3ec204) {
          this.m_coinEffects = _0x3ec204;
        };
        _0x193771.SetEffectTimes = function (_0x33be18) {
          this.m_coinTimes = _0x33be18;
        };
        _0x193771.SetSoundNameByOdds = function (_0x5b7ba3) {
          this.m_soundNameByOdds = _0x5b7ba3;
        };
        _0x193771.SetBGMaskNode = function (_0x16c257) {
          if (null != _0x16c257) {
            this.m_bgMaskNode = _0x16c257;
          }
        };
        _0x193771.SetWinTextFontSize = function (_0x555e4b) {
          if (this.m_txtWinValue) {
            this.m_txtWinValue.getComponent(_0x502387).fontSize = _0x555e4b;
          }
        };
        _0x193771.SetWinType = function (_0xd50e5a) {
          this.m_winType = _0xd50e5a;
        };
        _0xef4a8(_0x3abd15, [{
          'key': "CoinEffectNode",
          'set': function (_0x320766) {
            this.m_coinEffectNode = _0x320766;
          }
        }]);
        return _0x3abd15;
      }(_0x328c5f);
      _0x2fa38c.DesignSize = {
        'width': 0x470,
        'height': 0x280
      };
      _0x2fa38c.SOUND_FILE = {
        'COMMON_SUPER_WIN': null,
        'COMMON_MEGA_WIN': null,
        'COMMON_COIN_SMALL': null,
        'COMMON_COIN_MEDIUM': null,
        'COMMON_BIG_WIN': null
      };
      _0x2fa38c.EFFECT_ROOT = "Astt/%s/effect/GameCommonEffect/";
      _0x2fa38c.FILE_PATH = {
        'BIG_WIN': 'win/big_anim',
        'MEGA_WIN': "win/mega_anim",
        'SUPER_WIN': 'win/super_anim',
        'JACKPOT': "win/effect_Jackpot",
        'BIG_TO_MEGA_WIN': 'win/bigToMega_anim',
        'BIG_TO_SUPER_WIN': "win/bigToSuper_anim",
        'FIVE_OF_A_KIND': "win/5ofa_anim"
      };
      _0x5863b5 = {
        [_0x2fa38c.FILE_PATH.BIG_WIN]: "Common_big_win",
        [_0x2fa38c.FILE_PATH.MEGA_WIN]: 'Common_mega_win',
        [_0x2fa38c.FILE_PATH.SUPER_WIN]: "Common_super_win",
        [_0x2fa38c.FILE_PATH.JACKPOT]: "Common_JP_win",
        [_0x2fa38c.FILE_PATH.BIG_TO_MEGA_WIN]: "Common_big_win",
        [_0x2fa38c.FILE_PATH.BIG_TO_SUPER_WIN]: "Common_big_win",
        [_0x2fa38c.FILE_PATH.FIVE_OF_A_KIND]: "Common_big_win"
      };
      _0x2fa38c.WIN_EFFECT_SOUND_NAME = _0x5863b5;
      _0x2fa38c.EffectViewUIName = _0x15933b({
        'TXT_WIN_MONEY': "label_final_value",
        'PARTICLE': 'Particle_'
      });
      _0x2fa38c.DEFAULT_Y = 0x190;
      _0x2fa38c.PARTICLE_AMOUNT_MAX = 0x2;
      _0x2fa38c.MONEY_ROLL_TIME = 0x3;
      _0x2fa38c.UPDATE_MONEY_CSB = _0x2fa38c.EFFECT_ROOT + "common_get_coin/Node_GetCoin01.csb";
      _0x2fa38c.COMMON_GET_COIN_CSB = _0x2fa38c.EFFECT_ROOT + "common_get_coin/Node_GetCoin02.csb";
      _0x2fa38c.GET_COIN_PARTICLE_CSB = _0x2fa38c.EFFECT_ROOT + 'common_get_coin/Particle/_V3_GetCoin02.plist';
      _0x2fa38c.ROTATE_COIN_CSB = _0x2fa38c.EFFECT_ROOT + "common_get_coin/Node_CoinRotation01.csb";
      _0x2fa38c.TRIAL_COIN_CSB = _0x2fa38c.EFFECT_ROOT + "common_get_coin/Node_GetTrialCoin.csb";
      _0x2fa38c.COIN_APPEAR_PARTICLE_CSB = _0x2fa38c.EFFECT_ROOT + 'common_get_coin/Particle/New_CoinShine03.plist';
      _0x2fa38c.COMMON_COIN_AMOUNT = 0x8;
      _0x2fa38c.ANI_LABEL = {
        'ACT': "main",
        'LOOP': 'loop',
        'ENDING': "ending"
      };
      _0x2fa38c.ANI_FRAME_EVENT = {
        'MID': "AniMid",
        'B_TO_M': 'AniBtoM',
        'M_TO_S': 'AniMtoS',
        'ENDING': 'AniEnding',
        'END': "AniEnd",
        'LOOP': 'AniLoop'
      };
      _0x2fa38c.EFF_ZORDER = {
        'COIN_FALL': 0x1,
        'WIN_EFFECT': 0x2,
        'AWARD_BOARD': 0x3,
        'COMMON_GET_COIN': 0x4,
        'GET_TRIAL_COIN': 0x5
      };
      _0x2fa38c.COIN_EFFECT_LIST = {
        0x1: _0x2fa38c.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_1",
        0x2: _0x2fa38c.EFFECT_ROOT + 'coin/1_SmallGoldCoinFX_2',
        0x3: _0x2fa38c.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_3",
        0x4: _0x2fa38c.EFFECT_ROOT + 'coin/2_BigGoldCoinFX_1',
        0x5: _0x2fa38c.EFFECT_ROOT + 'coin/3_MegaGoldCoinFX_1',
        0x6: _0x2fa38c.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_2",
        0x7: _0x2fa38c.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_3"
      };
      _0x2fa38c.WIN_TYPE = {
        'BIG': 0x2,
        'MEGA': 0x3,
        'SUPER': 0x4
      };
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "a4b83idlNlHcZQFqX6vJhFz", "ExtraBetComponent", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "5cf68x6BTZHP5QWXU3HRb/c", "FeaturePageComponent", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "e33faPhWqxMHa92Db40WLqj", 'LabelSpacingX', undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "a6f15DRaTNJEaqvyk6QuIo3", "LangImg", undefined);
      var _0x32c2c8;
      !function (_0xff4136) {
        _0xff4136[_0xff4136.PNG = 0x0] = "PNG";
        _0xff4136[_0xff4136.JPG = 0x1] = "JPG";
      }(_0x32c2c8 || (_0x32c2c8 = {}));
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "3638c7rYSpEjZ7x8wtqusdg", 'RenderDataBump', undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "75a969XvAFPfax+l1fDcqo9", "ScrollEventHandler", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "eb577rwRR5ASa6OivNuPgEY", "SeriesComponent", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "18f47v83XtI64h+ISwRgq3A", "BoneFollow", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "44834DdFVNM2reoglp7HL82", "NewBoneFollow", undefined);
      var _0x144642;
      !function (_0x43e5dc) {
        _0x43e5dc[_0x43e5dc["default"] = 0x1] = 'default';
      }(_0x144642 || (_0x144642 = {}));
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, '2da2cEqApNLm7hZxNo+Lfkx', "NewSlotColorFollow", undefined);
      var _0x4532f5;
      !function (_0x806e76) {
        _0x806e76[_0x806e76["default"] = 0x1] = 'default';
      }(_0x4532f5 || (_0x4532f5 = {}));
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "866f1RjwMhFfapt6JLtipxM", 'SkeletonSync', undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "e2171n/i+xGsoWeQMXewobE", "SlotActivator", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "e23desmKVBLjKgDg5KLcySp", "SlotColorFollow", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, 'ff032nME8lBJKBpMlK8O/1z', "SlotCulling", undefined);
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, 'f8b5e4BLTJNX7FPcFOEaBkq', "ZipBundleLoader", undefined);
      var _0x2cfb36 = new Map();
      var _0x581641 = new Map();
      var _0x1bad49 = new Map();
      var _0x3cc4c3 = function () {
        function _0x5d9529() {
          this.loadedZipNames = new Array();
        }
        var _0x1b1a09 = _0x5d9529.prototype;
        _0x1b1a09.downloadZip = function (_0x378485, _0x40f00d) {
          return new Promise(function (_0x3d680d) {
            var _0x382ec7 = _0x378485.match(/[^/]+$/);
            if (null !== _0x382ec7) {
              var _0x2925bd = '' + _0x382ec7[0x0] + _0x40f00d + ".zip";
              _0x2f0625.downloader.downloadFile(_0x378485 + '/' + _0x2925bd, {
                'xhrResponseType': 'arraybuffer'
              }, null, function (_0x4f03f5, _0x2f08ba) {
                _0x3d680d(_0x2f08ba);
              });
            } else {
              _0x3d680d(null);
            }
          });
        };
        _0x1b1a09.loadZip = function () {
          var _0x12c899 = _0x9f23dc(_0x288614().mark(function _0x5f4c51(_0x21b955, _0x7acfce) {
            var _0x5b4970;
            var _0x4011d7;
            var _0x423770;
            return _0x288614().wrap(function (_0x2b2bbd) {
              for (;;) {
                switch (_0x2b2bbd.prev = _0x2b2bbd.next) {
                  case 0x0:
                    _0x5b4970 = _0x7acfce ? '.' + _0x7acfce : '';
                    _0x2b2bbd.next = 0x3;
                    return this.downloadZip(_0x21b955, _0x5b4970);
                  case 0x3:
                    if (null !== (_0x4011d7 = _0x2b2bbd.sent)) {
                      _0x423770 = _0x21b955.replace(/(.*?)\/assets\//, "assets/");
                      globalThis.fflate.unzip(new Uint8Array(_0x4011d7), function (_0x175c96, _0xb67647) {
                        if (_0x175c96) {
                          console.warn("Unzip failed:", _0x175c96.message);
                        } else {
                          Object.keys(_0xb67647).forEach(function (_0x47cae5) {
                            _0x2cfb36.set(_0x21b955 + '/' + _0x47cae5, _0xb67647[_0x47cae5]);
                            _0x2cfb36.set(_0x423770 + '/' + _0x47cae5, _0xb67647[_0x47cae5]);
                          });
                        }
                      });
                    }
                  case 0x5:
                  case "end":
                    return _0x2b2bbd.stop();
                }
              }
            }, _0x5f4c51, this);
          }));
          return function (_0x534c0d, _0x592e39) {
            return _0x12c899.apply(this, arguments);
          };
        }();
        _0x1b1a09.init = function () {
          if (globalThis.fflate) {
            var _0x1d97bd = Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, "response");
            Object.defineProperty(XMLHttpRequest.prototype, "response", {
              'get': function () {
                return this.ZipCacheUrl ? _0x581641.get(this.ZipCacheUrl) : _0x1d97bd.get.call(this);
              },
              'set': function (_0x1bb097) {},
              'configurable': true
            });
            var _0x369bd8 = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function (_0x1dda32, _0x2571ca, _0x38881d, _0x842f0c, _0x5e162b) {
              function _0x1e09a4() {
                var _0x3611c4 = this.status >= 0xc8 && this.status < 0x12c || 0x130 == this.status;
                if (this.readyState == XMLHttpRequest.DONE && !_0x3611c4 && 0x194 != this.status && _0x2571ca.includes('http')) {
                  _0x3c3a37(0x2bd, this.status);
                  _0x3c3a37(0x2be, _0x2571ca);
                }
                this.removeEventListener("load", _0x1e09a4);
              }
              if (_0x2cfb36.has(_0x2571ca)) {
                this.ZipCacheUrl = _0x2571ca;
              }
              this.addEventListener('load', _0x1e09a4.bind(this));
              return _0x369bd8.apply(this, arguments);
            };
            var _0x34b6b7 = XMLHttpRequest.prototype.send;
            XMLHttpRequest.prototype.send = _0x9f23dc(_0x288614().mark(function _0x142feb(_0x1d6f5b) {
              var _0x125c5a;
              var _0x13e7c0;
              var _0x562fbf;
              var _0xdceb3e;
              var _0x271094;
              var _0x41eb94;
              var _0x423cb9;
              var _0x50e1f7;
              return _0x288614().wrap(function (_0x7f6638) {
                for (;;) {
                  switch (_0x7f6638.prev = _0x7f6638.next) {
                    case 0x0:
                      if (!this.ZipCacheUrl) {
                        _0x7f6638.next = 0x1a;
                        break;
                      }
                      if (_0x581641.has(this.ZipCacheUrl)) {
                        _0x7f6638.next = 0x18;
                        break;
                      }
                      _0x125c5a = this.responseType;
                      _0x13e7c0 = _0x2cfb36.get(this.ZipCacheUrl);
                      _0x562fbf = null;
                      _0x7f6638.t0 = _0x125c5a;
                      _0x7f6638.next = 'arraybuffer' === _0x7f6638.t0 ? 0x8 : "json" === _0x7f6638.t0 ? 0xa : 'text' === _0x7f6638.t0 ? 0xe : 0x11;
                      break;
                    case 0x8:
                      _0x562fbf = _0x13e7c0.buffer ? _0x13e7c0.buffer : _0x13e7c0;
                      return _0x7f6638.abrupt('break', 0x12);
                    case 0xa:
                      _0xdceb3e = new TextDecoder();
                      _0x271094 = _0xdceb3e.decode(_0x13e7c0);
                      _0x562fbf = JSON.parse(_0x271094);
                      return _0x7f6638.abrupt("break", 0x12);
                    case 0xe:
                      _0x41eb94 = new TextDecoder();
                      _0x562fbf = _0x41eb94.decode(_0x13e7c0);
                      return _0x7f6638.abrupt("break", 0x12);
                    case 0x11:
                      console.error("Unknown type in zipCache:", _0x125c5a);
                    case 0x12:
                      if (_0x423cb9 = _0x1bad49.get(this.ZipCacheUrl)) {
                        _0x581641['delete'](this.ZipCacheUrl + "@version" + _0x423cb9);
                        _0x1bad49["delete"](this.ZipCacheUrl);
                      }
                      _0x50e1f7 = performance.now();
                      _0x1bad49.set(this.ZipCacheUrl, _0x50e1f7);
                      this.ZipCacheUrl = this.ZipCacheUrl + "@version" + _0x50e1f7;
                      _0x581641.set(this.ZipCacheUrl, _0x562fbf);
                    case 0x18:
                      this.onload();
                      return _0x7f6638.abrupt("return");
                    case 0x1a:
                      return _0x7f6638.abrupt("return", _0x34b6b7.apply(this, arguments));
                    case 0x1b:
                    case "end":
                      return _0x7f6638.stop();
                  }
                }
              }, _0x142feb, this);
            }));
          } else {
            console.error("fflate is not found.");
          }
        };
        return _0x5d9529;
      }();
      function _0x3c3a37(_0x2dbad5, _0x1c4818) {
        if (!_0x52840e.isNative) {
          var _0x505256 = "https://" + window.location.host + '/';
          if (-0x1 == _0x505256.indexOf('localhost') && 0x1 != /^http(s)?:\/\/([0-9]{1,3}\.){3}[0-9]{1,3}(:[0-9]+)?\/.*?$/.test(_0x505256)) {
            var _0x696e30 = 0x0;
            switch (_0x52840e.browserType) {
              case _0x52840e.BrowserType.CHROME:
                _0x696e30 = 0x1;
                break;
              case _0x52840e.BrowserType.SAFARI:
                _0x696e30 = 0x2;
                break;
              case _0x52840e.BrowserType.IE:
                _0x696e30 = 0x3;
                break;
              case _0x52840e.BrowserType.UC:
                _0x696e30 = 0x4;
                break;
              case _0x52840e.BrowserType.QQ:
              case _0x52840e.BrowserType.MOBILE_QQ:
                _0x696e30 = 0x5;
                break;
              case _0x52840e.BrowserType.FIREFOX:
                _0x696e30 = 0x6;
            }
            var _0x46ccb7 = 0x0;
            switch (_0x52840e.os) {
              case _0x52840e.OS.ANDROID:
                _0x46ccb7 = 0x1;
                break;
              case _0x52840e.OS.IOS:
                _0x46ccb7 = 0x2;
                break;
              case _0x52840e.OS.WINDOWS:
                _0x46ccb7 = 0x3;
                break;
              default:
                _0x46ccb7 = 0x0;
            }
            var _0x4f03f4 = _0x560a25('apiId') || '-1';
            var _0x4bbfd6 = _0x560a25("ssoKey") || '1';
            var _0x150522 = _0x560a25("gameID") || '-1';
            var _0x1bbdc4 = "https://" + (_0x560a25("domain_platform") || _0x560a25('gs') || 'gnidnawcs').split('').reverse().join('') + "/webservice/event/assetUpdate?";
            _0x398f1e(_0x1bbdc4 += "?AccountID=-1&GameID=" + _0x150522 + "&GameVersion=" + new Date().getTime() + '&EventID=' + _0x2dbad5 + "&EventValue=" + _0x1c4818 + "&BrowserSystem=" + _0x696e30 + '&DeviceSystem=' + _0x46ccb7 + "&CreateTime=" + new Date().toISOString() + "&Screen=0&SSOKey=" + _0x4bbfd6 + '&ApiId=' + _0x4f03f4 + "&LogIndex=11");
          }
        }
      }
      function _0x398f1e(_0x4337f1) {
        var _0x2cccda = {
          'Accept': "application/json, text/javascript, text/plain"
        };
        var _0x1d623f = new XMLHttpRequest();
        _0x1d623f.open('GET', _0x4337f1, true);
        if (_0x2cccda) {
          Object.keys(_0x2cccda).forEach(function (_0x3f0932) {
            return _0x1d623f.setRequestHeader(_0x3f0932, _0x2cccda[_0x3f0932]);
          });
        }
        _0x1d623f.timeout = 0x1388;
        _0x1d623f.onload = function () {};
        _0x1d623f.onerror = function () {};
        _0x1d623f.ontimeout = function () {};
        _0x1d623f.send();
      }
      function _0x560a25(_0x185824, _0x355376) {
        if (undefined === _0x355376) {
          _0x355376 = null;
        }
        if (!_0x355376) {
          _0x355376 = _0x4dad44();
        }
        _0x185824 = _0x185824.replace(/[[\]]/g, "\\$&");
        var _0x245f1d = new RegExp('[?&]' + _0x185824 + '(=([^&#]*)|&|#|$)').exec(_0x355376);
        return _0x245f1d ? _0x245f1d[0x2] ? decodeURIComponent(_0x245f1d[0x2].replace(/\+/g, " ")) : '' : null;
      }
      function _0x4dad44() {
        var _0xf1c790 = window.location.href;
        var _0x3600af = this.GetLinkParameterByName("replaydata", _0xf1c790);
        if (!_0x3600af) {
          return _0xf1c790;
        }
        var _0x46be38 = '0'.charCodeAt(0x0);
        var _0x2e3343 = '9'.charCodeAt(0x0);
        var _0x56ea52 = 'a'.charCodeAt(0x0);
        var _0x11308c = 'z'.charCodeAt(0x0);
        var _0x47e5ab = 'A'.charCodeAt(0x0);
        var _0x454af4 = 'Z'.charCodeAt(0x0);
        var _0x23f7bc = '';
        for (var _0x552705 = 0x0; _0x552705 < _0x3600af.length; _0x552705++) {
          var _0x3e2fd4 = _0x3600af.charCodeAt(_0x552705);
          if (_0x3e2fd4 >= _0x46be38 && _0x3e2fd4 <= _0x2e3343) {
            _0x3e2fd4 = _0x2e3343 - (_0x3e2fd4 - _0x46be38);
            _0x23f7bc += String.fromCharCode(_0x3e2fd4);
          } else if (_0x3e2fd4 >= _0x56ea52 && _0x3e2fd4 <= _0x11308c && _0x552705 % 0x2 == 0x0) {
            _0x3e2fd4 = _0x11308c - (_0x3e2fd4 - _0x56ea52);
            _0x23f7bc += String.fromCharCode(_0x3e2fd4);
          } else if (_0x3e2fd4 >= _0x47e5ab && _0x3e2fd4 <= _0x454af4 && _0x552705 % 0x3 == 0x0) {
            _0x3e2fd4 = _0x454af4 - (_0x3e2fd4 - _0x47e5ab);
            _0x23f7bc += String.fromCharCode(_0x3e2fd4);
          } else {
            _0x23f7bc += String.fromCharCode(_0x3e2fd4);
          }
        }
        var _0x517b2c = _0xf1c790.split("replaydata=" + _0x3600af);
        _0x517b2c.join('');
        return _0x517b2c + atob(_0x23f7bc);
      }
      var _0x528437 = globalThis.__zipBundleLoader;
      var _0x340939;
      var _0x3c2899;
      var _0x26f869;
      var _0x510c2a;
      var _0x14079a;
      var _0x89af6a;
      var _0x39eef3;
      var _0x213cf9;
      var _0x46e4c8;
      var _0x4a0e35;
      var _0x794db5;
      var _0x4e126b;
      var _0x297ae8;
      var _0x2d9ffc;
      var _0x37a94c;
      var _0x7788e2;
      var _0x2ae13a;
      var _0x3df6a5;
      if (globalThis.fflate && !_0x528437) {
        _0x528437 = new _0x3cc4c3();
        globalThis.__zipBundleLoader = _0x528437;
        _0x528437.init();
      }
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, 'c933866GvpLKaZlVxLlOz0C', "FeatureManagerComponent", undefined);
      var _0x5703c5 = _0x5d1a01.ccclass;
      var _0x34cecb = _0x5d1a01.property;
      var _0x17fe7c;
      !function (_0x21648c) {
        _0x21648c[_0x21648c.CommonMainBundle = 0x0] = "CommonMainBundle";
        _0x21648c[_0x21648c.CommonBundle = 0x1] = "CommonBundle";
        _0x21648c[_0x21648c.OtherBundle = 0x2] = "OtherBundle";
        _0x21648c[_0x21648c.DefaultLangBundle = 0x3] = "DefaultLangBundle";
        _0x21648c[_0x21648c.LangTextBundle = 0x4] = "LangTextBundle";
        _0x21648c[_0x21648c.GameBundle = 0x5] = "GameBundle";
      }(_0x17fe7c || (_0x17fe7c = {}));
      var _0x136156;
      var _0x2d9de3;
      !function (_0x4369eb) {
        _0x4369eb[_0x4369eb.None = 0x0] = "None";
        _0x4369eb[_0x4369eb.AutoPlaySettingPanel = 0x1] = "AutoPlaySettingPanel";
        _0x4369eb[_0x4369eb.AutoPlaySettingPanel_DFI = 0x2] = "AutoPlaySettingPanel_DFI";
        _0x4369eb[_0x4369eb.AutoPlaySettingPanel_DFIII = 0x3] = "AutoPlaySettingPanel_DFIII";
        _0x4369eb[_0x4369eb.AutoPlaySettingPanel_BS = 0x4] = "AutoPlaySettingPanel_BS";
        _0x4369eb[_0x4369eb.AutoPlaySetting_AG2 = 0x5] = "AutoPlaySetting_AG2";
        _0x4369eb[_0x4369eb.AutoPlaySetting_FD = 0x6] = 'AutoPlaySetting_FD';
        _0x4369eb[_0x4369eb.AutoPlaySettingPanel_MS = 0x7] = "AutoPlaySettingPanel_MS";
      }(_0x136156 || (_0x136156 = {}));
      (function (_0x322c4f) {
        _0x322c4f[_0x322c4f.None = 0x0] = "None";
        _0x322c4f[_0x322c4f.Dark = 0x1] = 'Dark';
      })(_0x2d9de3 || (_0x2d9de3 = {}));
      _0x340939 = _0x5703c5("StyleSetting");
      _0x3c2899 = _0x34cecb({
        'type': _0x4a7b33,
        'tooltip': "是否有骰子造型"
      });
      _0x26f869 = _0x34cecb({
        'type': _0x4a7b33,
        'tooltip': "是否有萬聖造型"
      });
      _0x510c2a = _0x34cecb({
        'type': _0x4a7b33,
        'tooltip': "是否有聖誕造型"
      });
      _0x14079a = _0x34cecb({
        'type': _0x4a7b33,
        'tooltip': "是否有OKBET廠商造型"
      });
      _0x89af6a = _0x34cecb({
        'type': _0x15933b(_0x2d9de3),
        'tooltip': '系列'
      });
      _0x39eef3 = function () {
        _0x29845c(this, "HasDice", _0x213cf9, this);
        _0x29845c(this, "HasHolloween", _0x46e4c8, this);
        _0x29845c(this, "HasXmas", _0x4a0e35, this);
        _0x29845c(this, "HasOkbet", _0x794db5, this);
        _0x29845c(this, "Series", _0x4e126b, this);
      };
      _0x213cf9 = _0x2f48b7(_0x39eef3.prototype, "HasDice", [_0x3c2899], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x46e4c8 = _0x2f48b7(_0x39eef3.prototype, "HasHolloween", [_0x26f869], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x4a0e35 = _0x2f48b7(_0x39eef3.prototype, "HasXmas", [_0x510c2a], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x794db5 = _0x2f48b7(_0x39eef3.prototype, "HasOkbet", [_0x14079a], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x4e126b = _0x2f48b7(_0x39eef3.prototype, 'Series', [_0x89af6a], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return _0x2d9de3.None;
        }
      });
      _0x297ae8 = _0x5703c5("PlayTypeSetting");
      _0x2d9ffc = _0x34cecb({
        'type': _0x4a7b33,
        'tooltip': "Match"
      });
      _0x37a94c = _0x34cecb({
        'type': _0x4a7b33,
        'tooltip': "Break"
      });
      _0x7788e2 = function () {
        _0x29845c(this, 'Match', _0x2ae13a, this);
        _0x29845c(this, "Break", _0x3df6a5, this);
      };
      _0x2ae13a = _0x2f48b7(_0x7788e2.prototype, "Match", [_0x2d9ffc], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x3df6a5 = _0x2f48b7(_0x7788e2.prototype, "Break", [_0x37a94c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x3db04a._RF.pop();
      _0x3db04a._RF.push({}, "89025dALbBFj7AFo+6o3xYM", "SwipeScreen", undefined);
      _0x3db04a._RF.pop();
    }
  };
});
(function (_0x9ef5e0) {
  _0x9ef5e0("virtual:///prerequisite-imports/main", "chunks:///main.js");
})(function (_0x2da752, _0x9f273e) {
  System.register(_0x2da752, [_0x9f273e], function (_0x56983e, _0x1ab566) {
    return {
      'setters': [function (_0x2df76f) {
        var _0x476d31 = {};
        for (var _0xc0e0ed in _0x2df76f) {
          if (_0xc0e0ed !== "default" && _0xc0e0ed !== '__esModule') {
            _0x476d31[_0xc0e0ed] = _0x2df76f[_0xc0e0ed];
          }
        }
        _0x56983e(_0x476d31);
      }],
      'execute': function () {}
    };
  });
});