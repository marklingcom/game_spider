System.register("chunks:///main.js", ['cc'], function (_0xd2295e, _0x579a4f) {
  'use strict';

  var _0xec9bd2;
  var _0xa38d5e;
  var _0x1536ed;
  var _0x29171a;
  var _0x5d46d6;
  var _0x3e9873;
  var _0x31b16c;
  var _0x515a13;
  var _0x2855cd;
  var _0x14cfe4;
  var _0x84773f;
  var _0x4bf747;
  var _0x29b18a;
  var _0x5c9b0d;
  var _0x2d27e6;
  var _0x959fe3;
  var _0x2b0134;
  var _0x21d275;
  var _0x1a18d5;
  var _0x174aa1;
  var _0x50093a;
  var _0x4232fe;
  var _0x392c7c;
  var _0x3cf955;
  var _0x3ddb9c;
  var _0x5f367b;
  var _0x535144;
  var _0x51f52f;
  var _0x11b13a;
  var _0x1270c0;
  var _0x3d8b38;
  var _0x1ff11d;
  var _0x18c578;
  var _0x58bcab;
  var _0x39aa6b;
  var _0x4e3d3c;
  var _0x496361;
  var _0x1c8731;
  var _0x1c2e69;
  var _0x57a7ec;
  var _0xb9487a;
  var _0x4339c0;
  var _0x4ce05e;
  var _0xae3ea5;
  var _0x5cb97a;
  var _0x4e27e0;
  var _0x1113b1;
  var _0x3ddfb3;
  var _0x407709;
  var _0x5c22e8;
  var _0x39c69b;
  var _0x3ced8e;
  var _0x1d67a0;
  var _0x379d40;
  var _0x5827e0;
  var _0x534fc5;
  var _0xce1530;
  var _0x597cb1;
  var _0x14bd31;
  var _0x2555f1;
  var _0x4df84c;
  var _0x4adbd5;
  var _0x18680f;
  var _0x4ee23e;
  var _0x4bec2b;
  var _0x2eac50;
  var _0x41a400;
  var _0x58506a;
  var _0x2c1a59;
  var _0x2ee06d;
  var _0x4636df;
  var _0x5ea88b;
  return {
    'setters': [function (_0x21a279) {
      _0xec9bd2 = _0x21a279.cclegacy;
      _0xa38d5e = _0x21a279.warn;
      _0x1536ed = _0x21a279.v3;
      _0x29171a = _0x21a279.v2;
      _0x5d46d6 = _0x21a279.macro;
      _0x3e9873 = _0x21a279._decorator;
      _0x31b16c = _0x21a279.Sprite;
      _0x515a13 = _0x21a279.CCString;
      _0x2855cd = _0x21a279.Label;
      _0x14cfe4 = _0x21a279.Component;
      _0x84773f = _0x21a279.Node;
      _0x4bf747 = _0x21a279.Animation;
      _0x29b18a = _0x21a279.Button;
      _0x5c9b0d = _0x21a279.Enum;
      _0x2d27e6 = _0x21a279.color;
      _0x959fe3 = _0x21a279.sp;
      _0x2b0134 = _0x21a279.instantiate;
      _0x21d275 = _0x21a279.UITransform;
      _0x1a18d5 = _0x21a279.Prefab;
      _0x174aa1 = _0x21a279.tween;
      _0x50093a = _0x21a279.UIOpacity;
      _0x4232fe = _0x21a279.Vec3;
      _0x392c7c = _0x21a279.log;
      _0x3cf955 = _0x21a279.CCFloat;
      _0x3ddb9c = _0x21a279.director;
      _0x5f367b = _0x21a279.Director;
      _0x535144 = _0x21a279.UIRenderer;
      _0x51f52f = _0x21a279.error;
      _0x11b13a = _0x21a279.RichText;
      _0x1270c0 = _0x21a279.CCBoolean;
      _0x3d8b38 = _0x21a279.Tween;
      _0x1ff11d = _0x21a279.Color;
      _0x18c578 = _0x21a279.JsonAsset;
      _0x58bcab = _0x21a279.math;
      _0x39aa6b = _0x21a279.SpriteFrame;
      _0x4e3d3c = _0x21a279.Size;
      _0x496361 = _0x21a279.TweenSystem;
      _0x1c8731 = _0x21a279.UITransformComponent;
      _0x1c2e69 = _0x21a279.AnimationClip;
      _0x57a7ec = _0x21a279.SpriteAtlas;
      _0xb9487a = _0x21a279.Font;
      _0x4339c0 = _0x21a279.sys;
      _0x4ce05e = _0x21a279.input;
      _0xae3ea5 = _0x21a279.Input;
      _0x5cb97a = _0x21a279.KeyCode;
      _0x4e27e0 = _0x21a279.screen;
      _0x1113b1 = _0x21a279.view;
      _0x3ddfb3 = _0x21a279.ResolutionPolicy;
      _0x407709 = _0x21a279.ccenum;
      _0x5c22e8 = _0x21a279.EventHandler;
      _0x39c69b = _0x21a279.assetManager;
      _0x3ced8e = _0x21a279.lerp;
      _0x1d67a0 = _0x21a279.NodeEventType;
      _0x379d40 = _0x21a279.TransformBit;
      _0x5827e0 = _0x21a279.Material;
      _0x534fc5 = _0x21a279.Gradient;
      _0xce1530 = _0x21a279.v4;
      _0x597cb1 = _0x21a279.Texture2D;
      _0x14bd31 = _0x21a279.clamp01;
      _0x2555f1 = _0x21a279.EffectAsset;
      _0x4df84c = _0x21a279.CCInteger;
      _0x4adbd5 = _0x21a279.ImageAsset;
      _0x18680f = _0x21a279.ParticleSystem2D;
      _0x4ee23e = _0x21a279.Vec2;
      _0x4bec2b = _0x21a279.ScrollView;
      _0x2eac50 = _0x21a279.isValid;
      _0x41a400 = _0x21a279.CCClass;
      _0x58506a = _0x21a279.js;
      _0x2c1a59 = _0x21a279.settings;
      _0x2ee06d = _0x21a279.Settings;
      _0x4636df = _0x21a279.VERSION;
      _0x5ea88b = _0x21a279.find;
    }],
    'execute': function () {
      function _0x352743() {
        _0x352743 = function () {
          return _0x34264b;
        };
        var _0x34264b = {};
        var _0x48d0c2 = Object.prototype;
        var _0x529493 = _0x48d0c2.hasOwnProperty;
        var _0x39641e = 'function' == typeof Symbol ? Symbol : {};
        var _0x54271a = _0x39641e.iterator || "@@iterator";
        var _0x4abf41 = _0x39641e.asyncIterator || "@@asyncIterator";
        var _0x329b45 = _0x39641e.toStringTag || '@@toStringTag';
        function _0x15557f(_0x469170, _0x2b7c9d, _0x1c16fa) {
          Object.defineProperty(_0x469170, _0x2b7c9d, {
            'value': _0x1c16fa,
            'enumerable': true,
            'configurable': true,
            'writable': true
          });
          return _0x469170[_0x2b7c9d];
        }
        try {
          _0x15557f({}, '');
        } catch (_0x456661) {
          _0x15557f = function (_0x54424e, _0x2c8608, _0x24e2ed) {
            return _0x54424e[_0x2c8608] = _0x24e2ed;
          };
        }
        function _0x42625e(_0x569b2a, _0x27e66d, _0x46382b, _0x18267b) {
          var _0x31e9a2 = _0x27e66d && _0x27e66d.prototype instanceof _0x72d02c ? _0x27e66d : _0x72d02c;
          var _0x412c62 = Object.create(_0x31e9a2.prototype);
          var _0x63678f = new _0x1e08fc(_0x18267b || []);
          _0x412c62._invoke = function (_0x2b9b40, _0x4f5d94, _0x21f8a1) {
            var _0x1a086c = "suspendedStart";
            return function (_0x1e2db5, _0x639679) {
              if ('executing' === _0x1a086c) {
                throw new Error("Generator is already running");
              }
              if ('completed' === _0x1a086c) {
                if ("throw" === _0x1e2db5) {
                  throw _0x639679;
                }
                return {
                  'value': undefined,
                  'done': true
                };
              }
              _0x21f8a1.method = _0x1e2db5;
              for (_0x21f8a1.arg = _0x639679;;) {
                var _0x69db83 = _0x21f8a1.delegate;
                if (_0x69db83) {
                  var _0x3cd132 = _0xa34457(_0x69db83, _0x21f8a1);
                  if (_0x3cd132) {
                    if (_0x3cd132 === _0x2ebfb6) {
                      continue;
                    }
                    return _0x3cd132;
                  }
                }
                if ("next" === _0x21f8a1.method) {
                  _0x21f8a1.sent = _0x21f8a1._sent = _0x21f8a1.arg;
                } else {
                  if ('throw' === _0x21f8a1.method) {
                    if ("suspendedStart" === _0x1a086c) {
                      _0x1a086c = "completed";
                      throw _0x21f8a1.arg;
                    }
                    _0x21f8a1.dispatchException(_0x21f8a1.arg);
                  } else if ("return" === _0x21f8a1.method) {
                    _0x21f8a1.abrupt("return", _0x21f8a1.arg);
                  }
                }
                _0x1a086c = "executing";
                var _0x47d3f7 = _0xa024ff(_0x2b9b40, _0x4f5d94, _0x21f8a1);
                if ("normal" === _0x47d3f7.type) {
                  _0x1a086c = _0x21f8a1.done ? "completed" : "suspendedYield";
                  if (_0x47d3f7.arg === _0x2ebfb6) {
                    continue;
                  }
                  return {
                    'value': _0x47d3f7.arg,
                    'done': _0x21f8a1.done
                  };
                }
                if ("throw" === _0x47d3f7.type) {
                  _0x1a086c = "completed";
                  _0x21f8a1.method = "throw";
                  _0x21f8a1.arg = _0x47d3f7.arg;
                }
              }
            };
          }(_0x569b2a, _0x46382b, _0x63678f);
          return _0x412c62;
        }
        function _0xa024ff(_0x15176c, _0x101278, _0x22133a) {
          try {
            return {
              'type': 'normal',
              'arg': _0x15176c.call(_0x101278, _0x22133a)
            };
          } catch (_0xc95b3a) {
            return {
              'type': "throw",
              'arg': _0xc95b3a
            };
          }
        }
        _0x34264b.wrap = _0x42625e;
        var _0x2ebfb6 = {};
        function _0x72d02c() {}
        function _0x502091() {}
        function _0x18081a() {}
        var _0x5d9091 = {};
        _0x15557f(_0x5d9091, _0x54271a, function () {
          return this;
        });
        var _0x1ca0ee = Object.getPrototypeOf;
        var _0x4061a8 = _0x1ca0ee && _0x1ca0ee(_0x1ca0ee(_0x5a1e3b([])));
        if (_0x4061a8 && _0x4061a8 !== _0x48d0c2 && _0x529493.call(_0x4061a8, _0x54271a)) {
          _0x5d9091 = _0x4061a8;
        }
        var _0x20c5dd = _0x18081a.prototype = _0x72d02c.prototype = Object.create(_0x5d9091);
        function _0x20ebb1(_0x4c97c9) {
          ["next", "throw", "return"].forEach(function (_0x46ed36) {
            _0x15557f(_0x4c97c9, _0x46ed36, function (_0x47da93) {
              return this._invoke(_0x46ed36, _0x47da93);
            });
          });
        }
        function _0x4e8da0(_0x21bb45, _0x12cc3b) {
          function _0x2e0deb(_0x98d087, _0x20cc03, _0x4d257a, _0x56768d) {
            var _0x291ae8 = _0xa024ff(_0x21bb45[_0x98d087], _0x21bb45, _0x20cc03);
            if ('throw' !== _0x291ae8.type) {
              var _0x4b6233 = _0x291ae8.arg;
              var _0x18d09a = _0x4b6233.value;
              return _0x18d09a && "object" == typeof _0x18d09a && _0x529493.call(_0x18d09a, "__await") ? _0x12cc3b.resolve(_0x18d09a.__await).then(function (_0x44ec3a) {
                _0x2e0deb('next', _0x44ec3a, _0x4d257a, _0x56768d);
              }, function (_0x1d950b) {
                _0x2e0deb("throw", _0x1d950b, _0x4d257a, _0x56768d);
              }) : _0x12cc3b.resolve(_0x18d09a).then(function (_0x238b1e) {
                _0x4b6233.value = _0x238b1e;
                _0x4d257a(_0x4b6233);
              }, function (_0x462f34) {
                return _0x2e0deb("throw", _0x462f34, _0x4d257a, _0x56768d);
              });
            }
            _0x56768d(_0x291ae8.arg);
          }
          var _0xd6fd15;
          this._invoke = function (_0x1d96ff, _0xbc300d) {
            function _0x575f0b() {
              return new _0x12cc3b(function (_0x331873, _0x420401) {
                _0x2e0deb(_0x1d96ff, _0xbc300d, _0x331873, _0x420401);
              });
            }
            return _0xd6fd15 = _0xd6fd15 ? _0xd6fd15.then(_0x575f0b, _0x575f0b) : _0x575f0b();
          };
        }
        function _0xa34457(_0x29c2ad, _0x2e72d8) {
          var _0x4850b0 = _0x29c2ad.iterator[_0x2e72d8.method];
          if (undefined === _0x4850b0) {
            _0x2e72d8.delegate = null;
            if ('throw' === _0x2e72d8.method) {
              if (_0x29c2ad.iterator["return"] && (_0x2e72d8.method = 'return', _0x2e72d8.arg = undefined, _0xa34457(_0x29c2ad, _0x2e72d8), "throw" === _0x2e72d8.method)) {
                return _0x2ebfb6;
              }
              _0x2e72d8.method = 'throw';
              _0x2e72d8.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return _0x2ebfb6;
          }
          var _0x1356f1 = _0xa024ff(_0x4850b0, _0x29c2ad.iterator, _0x2e72d8.arg);
          if ('throw' === _0x1356f1.type) {
            _0x2e72d8.method = "throw";
            _0x2e72d8.arg = _0x1356f1.arg;
            _0x2e72d8.delegate = null;
            return _0x2ebfb6;
          }
          var _0xffd78 = _0x1356f1.arg;
          return _0xffd78 ? _0xffd78.done ? (_0x2e72d8[_0x29c2ad.resultName] = _0xffd78.value, _0x2e72d8.next = _0x29c2ad.nextLoc, "return" !== _0x2e72d8.method && (_0x2e72d8.method = 'next', _0x2e72d8.arg = undefined), _0x2e72d8.delegate = null, _0x2ebfb6) : _0xffd78 : (_0x2e72d8.method = "throw", _0x2e72d8.arg = new TypeError("iterator result is not an object"), _0x2e72d8.delegate = null, _0x2ebfb6);
        }
        function _0x409f6d(_0x5b335b) {
          var _0x20e785 = {
            'tryLoc': _0x5b335b[0x0]
          };
          if (0x1 in _0x5b335b) {
            _0x20e785.catchLoc = _0x5b335b[0x1];
          }
          if (0x2 in _0x5b335b) {
            _0x20e785.finallyLoc = _0x5b335b[0x2];
            _0x20e785.afterLoc = _0x5b335b[0x3];
          }
          this.tryEntries.push(_0x20e785);
        }
        function _0x1911b2(_0x13f6ef) {
          var _0x48105b = _0x13f6ef.completion || {};
          _0x48105b.type = "normal";
          delete _0x48105b.arg;
          _0x13f6ef.completion = _0x48105b;
        }
        function _0x1e08fc(_0x14f0dd) {
          this.tryEntries = [{
            'tryLoc': "root"
          }];
          _0x14f0dd.forEach(_0x409f6d, this);
          this.reset(true);
        }
        function _0x5a1e3b(_0x452ea4) {
          if (_0x452ea4) {
            var _0x230685 = _0x452ea4[_0x54271a];
            if (_0x230685) {
              return _0x230685.call(_0x452ea4);
            }
            if ('function' == typeof _0x452ea4.next) {
              return _0x452ea4;
            }
            if (!isNaN(_0x452ea4.length)) {
              var _0x5c8dca = -0x1;
              var _0x5ec9fb = function _0x4c6bd7() {
                for (; ++_0x5c8dca < _0x452ea4.length;) {
                  if (_0x529493.call(_0x452ea4, _0x5c8dca)) {
                    _0x4c6bd7.value = _0x452ea4[_0x5c8dca];
                    _0x4c6bd7.done = false;
                    return _0x4c6bd7;
                  }
                }
                _0x4c6bd7.value = undefined;
                _0x4c6bd7.done = true;
                return _0x4c6bd7;
              };
              return _0x5ec9fb.next = _0x5ec9fb;
            }
          }
          return {
            'next': _0x4efd14
          };
        }
        function _0x4efd14() {
          return {
            'value': undefined,
            'done': true
          };
        }
        _0x502091.prototype = _0x18081a;
        _0x15557f(_0x20c5dd, "constructor", _0x18081a);
        _0x15557f(_0x18081a, "constructor", _0x502091);
        _0x502091.displayName = _0x15557f(_0x18081a, _0x329b45, "GeneratorFunction");
        _0x34264b.isGeneratorFunction = function (_0x249ace) {
          var _0x4649f8 = "function" == typeof _0x249ace && _0x249ace.constructor;
          return !!_0x4649f8 && (_0x4649f8 === _0x502091 || "GeneratorFunction" === (_0x4649f8.displayName || _0x4649f8.name));
        };
        _0x34264b.mark = function (_0x31c834) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(_0x31c834, _0x18081a);
          } else {
            _0x31c834.__proto__ = _0x18081a;
            _0x15557f(_0x31c834, _0x329b45, "GeneratorFunction");
          }
          _0x31c834.prototype = Object.create(_0x20c5dd);
          return _0x31c834;
        };
        _0x34264b.awrap = function (_0x424b3a) {
          return {
            '__await': _0x424b3a
          };
        };
        _0x20ebb1(_0x4e8da0.prototype);
        _0x15557f(_0x4e8da0.prototype, _0x4abf41, function () {
          return this;
        });
        _0x34264b.AsyncIterator = _0x4e8da0;
        _0x34264b.async = function (_0x4732e7, _0x3681ae, _0x148e18, _0x355319, _0x292dff) {
          if (undefined === _0x292dff) {
            _0x292dff = Promise;
          }
          var _0x47054f = new _0x4e8da0(_0x42625e(_0x4732e7, _0x3681ae, _0x148e18, _0x355319), _0x292dff);
          return _0x34264b.isGeneratorFunction(_0x3681ae) ? _0x47054f : _0x47054f.next().then(function (_0x35ca9e) {
            return _0x35ca9e.done ? _0x35ca9e.value : _0x47054f.next();
          });
        };
        _0x20ebb1(_0x20c5dd);
        _0x15557f(_0x20c5dd, _0x329b45, "Generator");
        _0x15557f(_0x20c5dd, _0x54271a, function () {
          return this;
        });
        _0x15557f(_0x20c5dd, "toString", function () {
          return "[object Generator]";
        });
        _0x34264b.keys = function (_0x1700a1) {
          var _0x289058 = [];
          for (var _0x70324a in _0x1700a1) _0x289058.push(_0x70324a);
          _0x289058.reverse();
          return function _0x252875() {
            for (; _0x289058.length;) {
              var _0x41e9a6 = _0x289058.pop();
              if (_0x41e9a6 in _0x1700a1) {
                _0x252875.value = _0x41e9a6;
                _0x252875.done = false;
                return _0x252875;
              }
            }
            _0x252875.done = true;
            return _0x252875;
          };
        };
        _0x34264b.values = _0x5a1e3b;
        _0x1e08fc.prototype = {
          'constructor': _0x1e08fc,
          'reset': function (_0x10bd13) {
            this.prev = 0x0;
            this.next = 0x0;
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(_0x1911b2);
            if (!_0x10bd13) {
              for (var _0x4a8f47 in this) if ('t' === _0x4a8f47.charAt(0x0) && _0x529493.call(this, _0x4a8f47) && !isNaN(+_0x4a8f47.slice(0x1))) {
                this[_0x4a8f47] = undefined;
              }
            }
          },
          'stop': function () {
            this.done = true;
            var _0x27b20a = this.tryEntries[0x0].completion;
            if ("throw" === _0x27b20a.type) {
              throw _0x27b20a.arg;
            }
            return this.rval;
          },
          'dispatchException': function (_0x8b8a9b) {
            if (this.done) {
              throw _0x8b8a9b;
            }
            var _0x5a6342 = this;
            function _0x1c92c8(_0x127e77, _0x2b7dcd) {
              _0x5c7dd5.type = "throw";
              _0x5c7dd5.arg = _0x8b8a9b;
              _0x5a6342.next = _0x127e77;
              if (_0x2b7dcd) {
                _0x5a6342.method = 'next';
                _0x5a6342.arg = undefined;
              }
              return !!_0x2b7dcd;
            }
            for (var _0x388abd = this.tryEntries.length - 0x1; _0x388abd >= 0x0; --_0x388abd) {
              var _0x303be2 = this.tryEntries[_0x388abd];
              var _0x5c7dd5 = _0x303be2.completion;
              if ("root" === _0x303be2.tryLoc) {
                return _0x1c92c8('end');
              }
              if (_0x303be2.tryLoc <= this.prev) {
                var _0x496e2c = _0x529493.call(_0x303be2, 'catchLoc');
                var _0x3e332a = _0x529493.call(_0x303be2, "finallyLoc");
                if (_0x496e2c && _0x3e332a) {
                  if (this.prev < _0x303be2.catchLoc) {
                    return _0x1c92c8(_0x303be2.catchLoc, true);
                  }
                  if (this.prev < _0x303be2.finallyLoc) {
                    return _0x1c92c8(_0x303be2.finallyLoc);
                  }
                } else {
                  if (_0x496e2c) {
                    if (this.prev < _0x303be2.catchLoc) {
                      return _0x1c92c8(_0x303be2.catchLoc, true);
                    }
                  } else {
                    if (!_0x3e332a) {
                      throw new Error("try statement without catch or finally");
                    }
                    if (this.prev < _0x303be2.finallyLoc) {
                      return _0x1c92c8(_0x303be2.finallyLoc);
                    }
                  }
                }
              }
            }
          },
          'abrupt': function (_0x4f2aee, _0x1c87bb) {
            for (var _0x39e819 = this.tryEntries.length - 0x1; _0x39e819 >= 0x0; --_0x39e819) {
              var _0x4bca25 = this.tryEntries[_0x39e819];
              if (_0x4bca25.tryLoc <= this.prev && _0x529493.call(_0x4bca25, "finallyLoc") && this.prev < _0x4bca25.finallyLoc) {
                var _0x266f4a = _0x4bca25;
                break;
              }
            }
            if (_0x266f4a && ('break' === _0x4f2aee || "continue" === _0x4f2aee) && _0x266f4a.tryLoc <= _0x1c87bb && _0x1c87bb <= _0x266f4a.finallyLoc) {
              _0x266f4a = null;
            }
            var _0x174c90 = _0x266f4a ? _0x266f4a.completion : {};
            _0x174c90.type = _0x4f2aee;
            _0x174c90.arg = _0x1c87bb;
            return _0x266f4a ? (this.method = 'next', this.next = _0x266f4a.finallyLoc, _0x2ebfb6) : this.complete(_0x174c90);
          },
          'complete': function (_0x4108ca, _0x39039d) {
            if ("throw" === _0x4108ca.type) {
              throw _0x4108ca.arg;
            }
            if ("break" === _0x4108ca.type || 'continue' === _0x4108ca.type) {
              this.next = _0x4108ca.arg;
            } else if ("return" === _0x4108ca.type) {
              this.rval = this.arg = _0x4108ca.arg;
              this.method = "return";
              this.next = "end";
            } else if ("normal" === _0x4108ca.type && _0x39039d) {
              this.next = _0x39039d;
            }
            return _0x2ebfb6;
          },
          'finish': function (_0x560521) {
            for (var _0x30cb30 = this.tryEntries.length - 0x1; _0x30cb30 >= 0x0; --_0x30cb30) {
              var _0xf1a435 = this.tryEntries[_0x30cb30];
              if (_0xf1a435.finallyLoc === _0x560521) {
                this.complete(_0xf1a435.completion, _0xf1a435.afterLoc);
                _0x1911b2(_0xf1a435);
                return _0x2ebfb6;
              }
            }
          },
          'catch': function (_0x121e30) {
            for (var _0x161478 = this.tryEntries.length - 0x1; _0x161478 >= 0x0; --_0x161478) {
              var _0xfae690 = this.tryEntries[_0x161478];
              if (_0xfae690.tryLoc === _0x121e30) {
                var _0x42c90b = _0xfae690.completion;
                if ("throw" === _0x42c90b.type) {
                  var _0x51f143 = _0x42c90b.arg;
                  _0x1911b2(_0xfae690);
                }
                return _0x51f143;
              }
            }
            throw new Error("illegal catch attempt");
          },
          'delegateYield': function (_0x57f227, _0x3c308a, _0x476bad) {
            this.delegate = {
              'iterator': _0x5a1e3b(_0x57f227),
              'resultName': _0x3c308a,
              'nextLoc': _0x476bad
            };
            if ("next" === this.method) {
              this.arg = undefined;
            }
            return _0x2ebfb6;
          }
        };
        return _0x34264b;
      }
      function _0x498d31(_0x2b9903, _0x2f36f5, _0x4c27fe, _0x3ecebf, _0x182ac3, _0x1074b7, _0x5885b1) {
        try {
          var _0x514698 = _0x2b9903[_0x1074b7](_0x5885b1);
          var _0x4fecb4 = _0x514698.value;
        } catch (_0x46a6a8) {
          return void _0x4c27fe(_0x46a6a8);
        }
        if (_0x514698.done) {
          _0x2f36f5(_0x4fecb4);
        } else {
          Promise.resolve(_0x4fecb4).then(_0x3ecebf, _0x182ac3);
        }
      }
      function _0x26fe6f(_0x180a12) {
        return function () {
          var _0x497b51 = this;
          return new Promise(function (_0x1861c7, _0x2a1150) {
            var _0x33fdd2 = _0x180a12.apply(_0x497b51, arguments);
            function _0x4530cd(_0x1ebce1) {
              _0x498d31(_0x33fdd2, _0x1861c7, _0x2a1150, _0x4530cd, _0x41c8b2, "next", _0x1ebce1);
            }
            function _0x41c8b2(_0x5dddc5) {
              _0x498d31(_0x33fdd2, _0x1861c7, _0x2a1150, _0x4530cd, _0x41c8b2, "throw", _0x5dddc5);
            }
            _0x4530cd(undefined);
          });
        };
      }
      function _0x5df418(_0x4e1ab1, _0x46b335) {
        for (var _0x3d931 = 0x0; _0x3d931 < _0x46b335.length; _0x3d931++) {
          var _0x39511a = _0x46b335[_0x3d931];
          _0x39511a.enumerable = _0x39511a.enumerable || false;
          _0x39511a.configurable = true;
          if ("value" in _0x39511a) {
            _0x39511a.writable = true;
          }
          Object.defineProperty(_0x4e1ab1, _0x39511a.key, _0x39511a);
        }
      }
      function _0x4b136a(_0x477bf3, _0x3c691f, _0x4ccc09) {
        if (_0x3c691f) {
          _0x5df418(_0x477bf3.prototype, _0x3c691f);
        }
        if (_0x4ccc09) {
          _0x5df418(_0x477bf3, _0x4ccc09);
        }
        Object.defineProperty(_0x477bf3, "prototype", {
          'writable': false
        });
        return _0x477bf3;
      }
      function _0xed7a37(_0x1d6019, _0x321524) {
        _0x1d6019.prototype = Object.create(_0x321524.prototype);
        _0x1d6019.prototype.constructor = _0x1d6019;
        _0x20c33a(_0x1d6019, _0x321524);
      }
      function _0x20c33a(_0x120f91, _0x2fe4c6) {
        return (_0x20c33a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (_0x4e5356, _0xff0163) {
          _0x4e5356.__proto__ = _0xff0163;
          return _0x4e5356;
        })(_0x120f91, _0x2fe4c6);
      }
      function _0x11be3a(_0x149975) {
        if (undefined === _0x149975) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return _0x149975;
      }
      function _0xec902e(_0x4dfee4, _0x2df5ef, _0x27af95, _0x4b43be) {
        if (_0x27af95) {
          Object.defineProperty(_0x4dfee4, _0x2df5ef, {
            'enumerable': _0x27af95.enumerable,
            'configurable': _0x27af95.configurable,
            'writable': _0x27af95.writable,
            'value': _0x27af95.initializer ? _0x27af95.initializer.call(_0x4b43be) : undefined
          });
        }
      }
      function _0x196fb6(_0x269438, _0x2c7fe1, _0x28c593, _0x34bb84, _0x318380) {
        var _0x479e1e = {};
        Object.keys(_0x34bb84).forEach(function (_0x1e1669) {
          _0x479e1e[_0x1e1669] = _0x34bb84[_0x1e1669];
        });
        _0x479e1e.enumerable = !!_0x479e1e.enumerable;
        _0x479e1e.configurable = !!_0x479e1e.configurable;
        if ("value" in _0x479e1e || _0x479e1e.initializer) {
          _0x479e1e.writable = true;
        }
        _0x479e1e = _0x28c593.slice().reverse().reduce(function (_0x1cdd7f, _0x1ea709) {
          return _0x1ea709(_0x269438, _0x2c7fe1, _0x1cdd7f) || _0x1cdd7f;
        }, _0x479e1e);
        if (_0x318380 && undefined !== _0x479e1e.initializer) {
          _0x479e1e.value = _0x479e1e.initializer ? _0x479e1e.initializer.call(_0x318380) : undefined;
          _0x479e1e.initializer = undefined;
        }
        if (undefined === _0x479e1e.initializer) {
          Object.defineProperty(_0x269438, _0x2c7fe1, _0x479e1e);
          _0x479e1e = null;
        }
        return _0x479e1e;
      }
      _0xec9bd2._RF.push({}, 'db4337zK39CwpvA3Bh+gyjl', "index", undefined);
      if (!globalThis.Astarte) {
        globalThis.Astarte = {};
      }
      var _0x9b36ce;
      var _0x52f4ee;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "2c465urF+5E6a8SAy0Y1679", "AppManager", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "01a4bCeOlRFS4PxU4ftD5wn", 'BackpackManager', undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "e98d6g3Sn5F/phbS0JGqk6v", "BuyBonusManager", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "810fcmXyb9Bu4OzTZmIkoz9", 'CommonGameManager', undefined);
      (function (_0x32122e) {
        _0x32122e[_0x32122e.Get = 0x0] = "Get";
        _0x32122e[_0x32122e.Post = 0x1] = 'Post';
      })(_0x9b36ce || (_0x9b36ce = {}));
      (function (_0x4bb15e) {
        _0x4bb15e[_0x4bb15e.Ignore = 0x0] = "Ignore";
        _0x4bb15e[_0x4bb15e.Handle = 0x1] = "Handle";
      })(_0x52f4ee || (_0x52f4ee = {}));
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, '0e324Erw0JDW6aCYO5d0i2g', "DailyMissionManager", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "dd020H2ox5CQ70Z9VNWXYpK", "DebrisManager", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, '1fcfdTjgMdDr4mh99NzZ29B', 'GaiaManager', undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "a3f63TygSlA6KwEkLDlQIoJ", "GiftCodeManager", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, '9692fSvI0xNR5GVPmbcEfzq', 'IframeCommandManager', undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, 'd8221PEwlRBep+hz+x7w5Ot', 'NewBottomBarManager', undefined);
      var _0x1e89f8;
      var _0x46c884;
      var _0x26e98f;
      var _0x21b8ed;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "28748R+s5pCY7kwYZ0zkqKk", "NewExtraManager", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, '861e1J/bwRGlI4J13TOOh4y', 'TrialManager', undefined);
      (function (_0x1a7375) {
        _0x1a7375[_0x1a7375.None = 0x0] = "None";
        _0x1a7375[_0x1a7375.Playing = 0x1] = "Playing";
        _0x1a7375[_0x1a7375.Item = 0x2] = "Item";
      })(_0x26e98f || (_0x26e98f = {}));
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "0f3df9al6NIJJ1/5ZP5aShG", 'MsgBoxManager', undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, '8de065l1yBCNoeRGxK2yzaD', "StateManager", undefined);
      var _0x388974;
      var _0x5c41b4;
      var _0x5cb46c;
      var _0x2b2431;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, 'c7e3d4LY9dOUokI+wu7YgCQ', "AutoShowManager", undefined);
      (function (_0x49b25c) {
        _0x49b25c[_0x49b25c.SKY_BAR = 0x0] = "SKY_BAR";
        _0x49b25c[_0x49b25c.PAYTABLE = 0x1] = "PAYTABLE";
        _0x49b25c[_0x49b25c.LANDING = 0x2] = "LANDING";
        _0x49b25c[_0x49b25c.DISCOUNT = 0x3] = "DISCOUNT";
        _0x49b25c[_0x49b25c.EXTRA_BET = 0x4] = "EXTRA_BET";
        _0x49b25c[_0x49b25c.ICONBOX = 0x5] = "ICONBOX";
      })(_0x5c41b4 || (_0x5c41b4 = {}));
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "d388f5XkRRFcYXg5usnXTa/", "LocaleStringManager", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "077a5gmYEpIQqr+YOtt+g08", "LocalStorageManager", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "8c0f7IX3HNLY6BaWiL8u0j4", "SoundManager", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "50f8dtxxuFDo6qJW6FBFBaO", "EventManager", undefined);
      var _0x4bb301;
      var _0x5ca67d;
      var _0x27c287;
      var _0x14c118;
      var _0x72b0e5;
      var _0x4048a4;
      var _0xd8402d;
      var _0x26fd97;
      var _0xf3ebeb;
      var _0x817a79;
      var _0x3ec15f;
      var _0x2a3cf7;
      var _0xcab112;
      var _0xa1579f;
      var _0x4ceebe;
      var _0x199207;
      var _0x4f87d3;
      var _0x27141e;
      var _0x4a0a8e;
      var _0x534405;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, '18947v7ICNDlYz3G5vE642k', "LoadPrefabManager", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, 'de7f6JwfsBHBYba0UlqLoFI', 'NotificationManager', undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "81438uBGiNJXoDkKAmuxEJu", "FunctionControlManager", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "3e41doUMVNLQbg53Jn6N9ch", "SoundAudioManager", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, 'cfe9e3/byhFGL1S1brGrbPU', "DebugManager", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "858d45NBqBLW5W3J41WER1G", "index", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "4c480cU1LpMo4WqCcvtd0ph", "Tools", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "de32cbzFmBN4rL/N8DkMkAD", 'Define', undefined);
      (function (_0x41c024) {
        _0x41c024[_0x41c024.NORMAL = 0x0] = "NORMAL";
        _0x41c024[_0x41c024.USING = 0x1] = "USING";
      })(_0x72b0e5 || (_0x72b0e5 = {}));
      (function (_0x2d1899) {
        _0x2d1899[_0x2d1899.GAME_CLOSE = 0x3e8] = "GAME_CLOSE";
        _0x2d1899[_0x2d1899.LOGIN = 0x3e9] = 'LOGIN';
        _0x2d1899[_0x2d1899.WAIT_RES = 0x3ea] = "WAIT_RES";
        _0x2d1899[_0x2d1899.CHECK_UNSHOW = 0x3eb] = 'CHECK_UNSHOW';
        _0x2d1899[_0x2d1899.CHECK_FREESPIN = 0x3ec] = "CHECK_FREESPIN";
        _0x2d1899[_0x2d1899.IDLE = 0x3ed] = "IDLE";
        _0x2d1899[_0x2d1899.SPIN_REQ = 0x3ee] = "SPIN_REQ";
        _0x2d1899[_0x2d1899.SPIN = 0x3ef] = "SPIN";
        _0x2d1899[_0x2d1899.COMMON_SHOW = 0x3f0] = "COMMON_SHOW";
        _0x2d1899[_0x2d1899.MHB_SHOW = 0x3f1] = "MHB_SHOW";
        _0x2d1899[_0x2d1899.JP_SHOW = 0x3f2] = 'JP_SHOW';
        _0x2d1899[_0x2d1899.CHECK_STATE = 0x3f3] = "CHECK_STATE";
        _0x2d1899[_0x2d1899.END = 0x3f4] = "END";
        _0x2d1899[_0x2d1899.FREESPIN_WAIT_RES = 0x3f5] = "FREESPIN_WAIT_RES";
        _0x2d1899[_0x2d1899.TURBO = 0x3f6] = "TURBO";
        _0x2d1899[_0x2d1899.FIRST_IN_GAME = 0x3f7] = "FIRST_IN_GAME";
        _0x2d1899[_0x2d1899.CHECK_APP_REWARD = 0x3f8] = "CHECK_APP_REWARD";
        _0x2d1899[_0x2d1899.CHECK_BUFF = 0x3f9] = 'CHECK_BUFF';
        _0x2d1899[_0x2d1899.ACTIVATE_BUFF = 0x3fa] = "ACTIVATE_BUFF";
        _0x2d1899[_0x2d1899.END_BUFF = 0x3fb] = 'END_BUFF';
        _0x2d1899[_0x2d1899.GRAND_JP = 0x3fc] = 'GRAND_JP';
      })(_0x4048a4 || (_0x4048a4 = {}));
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "813162EnmlPD6ZkP+n93pP2", "RoundController", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "1d5a8ODImpC9qtSki10xwQQ", 'ExtraBetController', undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, 'cd534oKcOFFap8T54HqFCAE', "FakeServer", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "3ec76bGz5NECbh3RNjc2SdI", "TempoSetting", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "6f779uo//FP8owPSb4jjuXE", "CommonEffect", undefined);
      (function (_0x22f1a8) {
        var _0x4d855e = function () {
          function _0x23baf6() {}
          _0x23baf6.PascalTriangleLine = function (_0x33e3c6) {
            var _0x5904e7 = [0x1];
            for (var _0x1f01b0 = 0x1; _0x1f01b0 < _0x33e3c6; _0x1f01b0++) {
              _0x5904e7[_0x1f01b0] = _0x5904e7[_0x1f01b0 - 0x1] * (_0x33e3c6 - _0x1f01b0) / _0x1f01b0;
            }
            return _0x5904e7;
          };
          _0x23baf6.RangedRandom = function (_0x5d46f4, _0x543abc) {
            return (_0x543abc - _0x5d46f4) * Math.random() + _0x5d46f4;
          };
          _0x23baf6.GetRandomRectPos = function (_0x145e1a, _0x28688a, _0x194ca5) {
            var _0x1c3475 = _0x29171a(this.RangedRandom(-_0x28688a.x, _0x28688a.x) / 0x2 | 0x0, this.RangedRandom(-_0x28688a.x, _0x28688a.x) / 0x2 | 0x0).rotate(_0x194ca5 * _0x5d46d6.RAD);
            return _0x145e1a.add(_0x1c3475);
          };
          _0x23baf6.GetRandomOvalPos = function (_0x72e497, _0x1a0e89, _0x534e19) {
            var _0x1e83eb = _0x1a0e89.y / Math.max(0x1, _0x1a0e89.x);
            var _0x2fe738 = Math.random() * _0x1a0e89.x * 0.5;
            var _0x4ad139 = Math.random() * Math.PI * 0x2;
            var _0x1d6946 = _0x29171a(_0x2fe738 * Math.cos(_0x4ad139), _0x2fe738 * Math.sin(_0x4ad139) * _0x1e83eb).rotate(_0x534e19 * _0x5d46d6.RAD);
            return _0x72e497.add(_0x1d6946);
          };
          _0x23baf6.ZoomAndFlip = function (_0x2ff795, _0x2d86db, _0x29b360, _0x9bf900) {
            var _0x10eec0 = Math.sin(_0x9bf900 * Math.PI) * (_0x2d86db - _0x2ff795) + _0x2ff795;
            var _0x27b4a0 = Math.cos(_0x9bf900 * Math.PI * _0x29b360);
            return _0x29171a(_0x10eec0 * _0x27b4a0, _0x10eec0);
          };
          return _0x23baf6;
        }();
        _0x22f1a8.ExtendsMath = _0x4d855e;
        var _0x9ddea = function () {
          function _0x315afa(_0x33f4fa) {
            this.pts = null;
            this.len = 0x0;
            this.ptl = null;
            this.bez = null;
            this.len = _0x33f4fa.length;
            if (0x0 == this.len) {
              _0x33f4fa.push(_0x1536ed(0x0, 0x0));
              _0x33f4fa.push(_0x1536ed(0x0, 0x0));
            } else if (0x1 == this.len) {
              _0x33f4fa.push(_0x1536ed(_0x33f4fa[0x0].x, _0x33f4fa[0x0].y));
            }
            this.pts = _0x33f4fa;
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
                this.ptl = _0x4d855e.PascalTriangleLine(this.len);
                this.bez = this.BezierN;
            }
          }
          var _0x46294a = _0x315afa.prototype;
          _0x46294a.GetPosition = function (_0x4d5520) {
            return this.bez.apply(this, [_0x4d5520]);
          };
          _0x46294a.Bezier2 = function (_0x591d74) {
            var _0x410df3 = 0x1 - _0x591d74;
            return _0x1536ed(_0x410df3 * this.pts[0x0].x + _0x591d74 * this.pts[0x1].x, _0x410df3 * this.pts[0x0].y + _0x591d74 * this.pts[0x1].y);
          };
          _0x46294a.Bezier3 = function (_0x401a8c) {
            var _0x369739 = 0x1 - _0x401a8c;
            var _0x212f89 = [_0x369739 * _0x369739, 0x2 * _0x369739 * _0x401a8c, _0x401a8c * _0x401a8c];
            return _0x1536ed(_0x212f89[0x0] * this.pts[0x0].x + _0x212f89[0x1] * this.pts[0x1].x + _0x212f89[0x2] * this.pts[0x2].x, _0x212f89[0x0] * this.pts[0x0].y + _0x212f89[0x1] * this.pts[0x1].y + _0x212f89[0x2] * this.pts[0x2].y);
          };
          _0x46294a.Bezier4 = function (_0x144302) {
            var _0x59ba6a = 0x1 - _0x144302;
            var _0x28f103 = [_0x59ba6a * _0x59ba6a * _0x59ba6a, 0x3 * _0x59ba6a * _0x59ba6a * _0x144302, 0x3 * _0x59ba6a * _0x144302 * _0x144302, _0x144302 * _0x144302 * _0x144302];
            return _0x1536ed(_0x28f103[0x0] * this.pts[0x0].x + _0x28f103[0x1] * this.pts[0x1].x + _0x28f103[0x2] * this.pts[0x2].x + _0x28f103[0x3] * this.pts[0x3].x, _0x28f103[0x0] * this.pts[0x0].y + _0x28f103[0x1] * this.pts[0x1].y + _0x28f103[0x2] * this.pts[0x2].y + _0x28f103[0x3] * this.pts[0x3].y);
          };
          _0x46294a.Bezier5 = function (_0xdf3c43) {
            var _0x3b32d5 = 0x1 - _0xdf3c43;
            var _0x11e40e = [_0x3b32d5 * _0x3b32d5 * _0x3b32d5 * _0x3b32d5, 0x4 * _0x3b32d5 * _0x3b32d5 * _0x3b32d5 * _0xdf3c43, 0x6 * _0x3b32d5 * _0x3b32d5 * _0xdf3c43 * _0xdf3c43, 0x4 * _0x3b32d5 * _0xdf3c43 * _0xdf3c43 * _0xdf3c43, _0xdf3c43 * _0xdf3c43 * _0xdf3c43 * _0xdf3c43];
            return _0x1536ed(_0x11e40e[0x0] * this.pts[0x0].x + _0x11e40e[0x1] * this.pts[0x1].x + _0x11e40e[0x2] * this.pts[0x2].x + _0x11e40e[0x3] * this.pts[0x3].x + _0x11e40e[0x4] * this.pts[0x4].x, _0x11e40e[0x0] * this.pts[0x0].y + _0x11e40e[0x1] * this.pts[0x1].y + _0x11e40e[0x2] * this.pts[0x2].y + _0x11e40e[0x3] * this.pts[0x3].y + _0x11e40e[0x4] * this.pts[0x4].y);
          };
          _0x46294a.Bezier6 = function (_0x4545fa) {
            var _0x4164a2 = 0x1 - _0x4545fa;
            var _0x196f6f = [_0x4164a2 * _0x4164a2 * _0x4164a2 * _0x4164a2 * _0x4164a2, 0x5 * _0x4164a2 * _0x4164a2 * _0x4164a2 * _0x4164a2 * _0x4545fa, 0xa * _0x4164a2 * _0x4164a2 * _0x4164a2 * _0x4545fa * _0x4545fa, 0xa * _0x4164a2 * _0x4164a2 * _0x4545fa * _0x4545fa * _0x4545fa, 0x5 * _0x4164a2 * _0x4545fa * _0x4545fa * _0x4545fa * _0x4545fa, _0x4545fa * _0x4545fa * _0x4545fa * _0x4545fa * _0x4545fa];
            return _0x1536ed(_0x196f6f[0x0] * this.pts[0x0].x + _0x196f6f[0x1] * this.pts[0x1].x + _0x196f6f[0x2] * this.pts[0x2].x + _0x196f6f[0x3] * this.pts[0x3].x + _0x196f6f[0x4] * this.pts[0x4].x + _0x196f6f[0x5] * this.pts[0x5].x, _0x196f6f[0x0] * this.pts[0x0].y + _0x196f6f[0x1] * this.pts[0x1].y + _0x196f6f[0x2] * this.pts[0x2].y + _0x196f6f[0x3] * this.pts[0x3].y + _0x196f6f[0x4] * this.pts[0x4].y + _0x196f6f[0x5] * this.pts[0x5].y);
          };
          _0x46294a.BezierN = function (_0x43b945) {
            var _0x5e3991 = 0x1 - _0x43b945;
            var _0x406f5f = _0x1536ed(0x0, 0x0);
            for (var _0x5b1f7a = 0x0; _0x5b1f7a < this.len; _0x5b1f7a++) {
              var _0x461cd4 = 0x1;
              for (var _0x2dd3c0 = 0x0; _0x2dd3c0 < this.len - _0x5b1f7a - 0x1; _0x2dd3c0++) {
                _0x461cd4 *= _0x5e3991;
              }
              for (var _0x322021 = 0x0; _0x322021 < _0x5b1f7a; _0x322021++) {
                _0x461cd4 *= _0x43b945;
              }
              _0x406f5f.x += _0x461cd4 * this.ptl[_0x5b1f7a] * this.pts[_0x5b1f7a].x;
              _0x406f5f.y += _0x461cd4 * this.ptl[_0x5b1f7a] * this.pts[_0x5b1f7a].y;
            }
            return _0x406f5f;
          };
          return _0x315afa;
        }();
        _0x22f1a8.Bezier = _0x9ddea;
      })(_0x817a79 || (_0x817a79 = {}));
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, '391b6CLPVhBEqeFr1f7nxDE', 'index', undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "8b703272kBLZoKi+PHcuK9c", "BuyBonusCell", undefined);
      var _0x595e55 = _0x3e9873.ccclass;
      var _0x3a07ad = _0x3e9873.property;
      _0x3ec15f = _0x595e55("BuyBonusCell");
      _0x2a3cf7 = _0x3a07ad({
        'type': _0x31b16c,
        'tooltip': '購買文字'
      });
      _0xcab112 = _0x3a07ad({
        'type': _0x31b16c,
        'tooltip': '項目標題'
      });
      _0xa1579f = _0x3a07ad({
        'type': _0x515a13,
        'tooltip': "標題圖片名稱"
      });
      _0x4ceebe = _0x3a07ad({
        'type': _0x2855cd,
        'tooltip': '金額'
      });
      _0x199207 = function (_0x683126) {
        function _0x2f1704() {
          var _0x2546b4;
          var _0x71eb2f = arguments.length;
          var _0x1bbbbe = new Array(_0x71eb2f);
          for (var _0x14c144 = 0x0; _0x14c144 < _0x71eb2f; _0x14c144++) {
            _0x1bbbbe[_0x14c144] = arguments[_0x14c144];
          }
          _0xec902e(_0x2546b4 = _0x683126.call.apply(_0x683126, [this].concat(_0x1bbbbe)) || this, "m_buyHintSprite", _0x4f87d3, _0x11be3a(_0x2546b4));
          _0xec902e(_0x2546b4, "m_titleSprite", _0x27141e, _0x11be3a(_0x2546b4));
          _0xec902e(_0x2546b4, "m_titlePicName", _0x4a0a8e, _0x11be3a(_0x2546b4));
          _0xec902e(_0x2546b4, "m_priceLabel", _0x534405, _0x11be3a(_0x2546b4));
          return _0x2546b4;
        }
        _0xed7a37(_0x2f1704, _0x683126);
        var _0x5592d4 = _0x2f1704.prototype;
        _0x5592d4.start = function () {
          var _0x459952 = _0x5cb46c.GetGameAtlas();
          if (_0x5cb46c.CurrLang !== _0xd8402d.Lang.EN) {
            this.m_buyHintSprite.spriteFrame = _0x459952.getSpriteFrame('Txt_Buy_Feature_Buy');
            this.m_titleSprite.spriteFrame = _0x459952.getSpriteFrame(this.m_titlePicName);
          }
        };
        _0x5592d4.SetPrice = function (_0x697037) {
          this.m_priceLabel.string = _0x697037;
        };
        return _0x2f1704;
      }(_0x14cfe4);
      _0x4f87d3 = _0x196fb6(_0x199207.prototype, "m_buyHintSprite", [_0x2a3cf7], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x27141e = _0x196fb6(_0x199207.prototype, 'm_titleSprite', [_0xcab112], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4a0a8e = _0x196fb6(_0x199207.prototype, "m_titlePicName", [_0xa1579f], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return '';
        }
      });
      _0x534405 = _0x196fb6(_0x199207.prototype, "m_priceLabel", [_0x4ceebe], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x54a6a8;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "1d854+nhA1JgLXZLaNHz9eU", 'LicenseSetting', undefined);
      (function (_0x4f5b4e) {
        _0x4f5b4e[_0x4f5b4e.ShopingMall = 0x1] = "ShopingMall";
        _0x4f5b4e[_0x4f5b4e.ShowAutoSetting = 0x10] = "ShowAutoSetting";
        _0x4f5b4e[_0x4f5b4e.NoSoundUnder1 = 0x11] = "NoSoundUnder1";
        _0x4f5b4e[_0x4f5b4e.NoQuickSpin = 0x12] = "NoQuickSpin";
        _0x4f5b4e[_0x4f5b4e.CloseManual = 0x27] = 'CloseManual';
        _0x4f5b4e[_0x4f5b4e.CloseExtraBet = 0x3d] = "CloseExtraBet";
      })(_0x54a6a8 || (_0x54a6a8 = {}));
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "5509bk20K5Ay4jTXAUo2OtK", 'BuyBonus', undefined);
      var _0x1779e3;
      var _0x5debce;
      var _0x1f9b12;
      var _0x32738d;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "516c1gQb4ZDW5PJPKVrTOxt", "Game_Define", undefined);
      (function (_0x322381) {
        _0x322381[_0x322381.WAIT_READY = 0x0] = "WAIT_READY";
        _0x322381[_0x322381.PLATE_SHOW = 0x1] = 'PLATE_SHOW';
        _0x322381[_0x322381.FEATURE_SHOW = 0x2] = 'FEATURE_SHOW';
        _0x322381[_0x322381.UNSHOW_PREPARE = 0x3] = "UNSHOW_PREPARE";
        _0x322381[_0x322381.CHECK_MAX_FLAG = 0x4] = "CHECK_MAX_FLAG";
        _0x322381[_0x322381.AWARD = 0x5] = "AWARD";
        _0x322381[_0x322381.ROUND_SHOW_END = 0x6] = 'ROUND_SHOW_END';
        _0x322381[_0x322381.ROUND_END = 0x7] = "ROUND_END";
        _0x322381[_0x322381.EFFECT_START = 0x8] = "EFFECT_START";
        _0x322381[_0x322381.SCATTER_SHOW = 0x9] = 'SCATTER_SHOW';
        _0x322381[_0x322381.ENTER_FREE = 0xa] = "ENTER_FREE";
        _0x322381[_0x322381.FULL_REWARD = 0xb] = "FULL_REWARD";
        _0x322381[_0x322381.LEAVE_FREE = 0xc] = "LEAVE_FREE";
        _0x322381[_0x322381.ADD_FREE = 0xd] = "ADD_FREE";
      })(_0x1779e3 || (_0x1779e3 = {}));
      (function (_0x80476c) {
        _0x80476c[_0x80476c.Empty_0 = 0x0] = "Empty_0";
        _0x80476c[_0x80476c.Empty_1 = 0x1] = "Empty_1";
        _0x80476c[_0x80476c.J = 0x2] = 'J';
        _0x80476c[_0x80476c.Q = 0x3] = 'Q';
        _0x80476c[_0x80476c.K = 0x4] = 'K';
        _0x80476c[_0x80476c.A = 0x5] = 'A';
        _0x80476c[_0x80476c.Banknote = 0x6] = "Banknote";
        _0x80476c[_0x80476c.Diamond = 0x7] = "Diamond";
        _0x80476c[_0x80476c.Car = 0x8] = "Car";
        _0x80476c[_0x80476c.Ship = 0x9] = "Ship";
        _0x80476c[_0x80476c.Airplane = 0xa] = 'Airplane';
        _0x80476c[_0x80476c.WILD = 0xb] = "WILD";
        _0x80476c[_0x80476c.Scatter_Blue = 0xc] = "Scatter_Blue";
        _0x80476c[_0x80476c.Scatter_Red = 0xd] = "Scatter_Red";
        _0x80476c[_0x80476c.Scatter_Green = 0xe] = "Scatter_Green";
        _0x80476c[_0x80476c.Coin = 0xf] = "Coin";
        _0x80476c[_0x80476c.Coin_Blue = 0x10] = "Coin_Blue";
        _0x80476c[_0x80476c.Coin_Red = 0x11] = 'Coin_Red';
        _0x80476c[_0x80476c.Coin_Green = 0x12] = "Coin_Green";
        _0x80476c[_0x80476c.MAX = 0x15] = "MAX";
      })(_0x5debce || (_0x5debce = {}));
      (function (_0x2afafe) {
        _0x2afafe[_0x2afafe.Empty_0 = 0x0] = 'Empty_0';
        _0x2afafe[_0x2afafe.Empty_1 = 0x1] = "Empty_1";
        _0x2afafe[_0x2afafe.J = 0x2] = 'J';
        _0x2afafe[_0x2afafe.Q = 0x3] = 'Q';
        _0x2afafe[_0x2afafe.K = 0x4] = 'K';
        _0x2afafe[_0x2afafe.A = 0x5] = 'A';
        _0x2afafe[_0x2afafe.Banknote = 0x6] = "Banknote";
        _0x2afafe[_0x2afafe.Diamond = 0x7] = 'Diamond';
        _0x2afafe[_0x2afafe.Car = 0x8] = 'Car';
        _0x2afafe[_0x2afafe.Ship = 0x9] = 'Ship';
        _0x2afafe[_0x2afafe.Airplane = 0xa] = 'Airplane';
        _0x2afafe[_0x2afafe.WILD = 0xb] = "WILD";
        _0x2afafe[_0x2afafe.Scatter_Blue = 0xc] = 'Scatter_Blue';
        _0x2afafe[_0x2afafe.Scatter_Red = 0xd] = "Scatter_Red";
        _0x2afafe[_0x2afafe.Scatter_Green = 0xe] = 'Scatter_Green';
        _0x2afafe[_0x2afafe.Coin = 0xf] = "Coin";
        _0x2afafe[_0x2afafe.Coin_Blue = 0x10] = 'Coin_Blue';
        _0x2afafe[_0x2afafe.Coin_Red = 0x11] = "Coin_Red";
        _0x2afafe[_0x2afafe.Coin_Green = 0x12] = "Coin_Green";
      })(_0x1f9b12 || (_0x1f9b12 = {}));
      (function (_0x1a9272) {
        _0x1a9272[_0x1a9272.FX_FRAME = 0x0] = "FX_FRAME";
        _0x1a9272[_0x1a9272.SCATTER_FX = 0x1] = "SCATTER_FX";
      })(_0x32738d || (_0x32738d = {}));
      var _0x57bf99 = function () {
        this.Symbol = undefined;
        this.Value = undefined;
        this.JpType = undefined;
        this.JpMult = undefined;
      };
      var _0xcba612 = function () {
        function _0x34b8ed() {}
        _0x34b8ed.GetNowBetValue = function () {
          return _0x1e89f8.GetNowBetValue();
        };
        _0x34b8ed.ConvertIndex2ColRow = function (_0x1dba02) {
          if (_0x1dba02 >= 0x0 && _0x1dba02 < _0x34b8ed.COL * _0x34b8ed.ROW) {
            var _0x3682f7 = _0x29171a(-0x1, -0x1);
            _0x3682f7.y = _0x1dba02 % _0x34b8ed.ROW;
            _0x3682f7.x = (_0x1dba02 - _0x3682f7.y) / _0x34b8ed.ROW;
            return _0x3682f7;
          }
          return null;
        };
        _0x34b8ed.OnExit = function () {
          this.BgAudioId = -0x1;
          this.AudioClips = {
            'MG_BGM': null,
            'FG_BGM': null,
            'MG_in': null,
            'Spin': null,
            'reel_stop': null,
            'scatter_stop': null,
            'scatter_switch': null,
            'scatter_collect': null,
            'symbol_award': null,
            'near_win1': null,
            'near_win2': null,
            'near_win3': null,
            'scatter_win': null,
            'scatter_ring': null,
            'scatter_FG_near': null,
            'scatter_FG_win': null,
            'scatter_FG_win2': null,
            'FG_declare': null,
            'FG_in': null,
            'FG_out': null,
            'Small_Win01': null,
            'Small_Win02': null,
            'Small_Win03': null,
            'Big_Win': null,
            'Big_Win_End': null,
            'Change_Win': null,
            'scatter_yellow': null,
            'scatter_add_fly': null,
            'scatter_add_end': null,
            'scatter_add': null,
            'scatter_add2': null,
            'Bet_lock': null,
            'Bet_unlock': null,
            'respin_switch': null,
            'FG_Respin': null,
            'FG_near': null,
            'Grand_lock': null,
            'Grand_win': null,
            'Grand_declare': null,
            'end_declare': null,
            'MG_omen': null
          };
          this.ShowDisplayValue = null;
        };
        return _0x34b8ed;
      }();
      var _0x2de6b6;
      var _0x4ae71d;
      _0xcba612.SYMBOL_OFFSET = 0x2;
      _0xcba612.Ver = '67';
      _0xcba612.BgAudioId = -0x1;
      _0xcba612.SPICY_LEVEL = 0x2;
      _0xcba612.Symbol = _0x5c9b0d(_0x5debce);
      _0xcba612.GameState = _0x5c9b0d(_0x1779e3);
      _0xcba612.SYMBOL_IMG_REPLACE_OFFSET = 0x7;
      _0xcba612.MgOmenOddThreshold = 0x14;
      _0xcba612.MgOmenOdd = 0.5;
      _0xcba612.MgOmenSpinTimes = 0x14;
      _0xcba612.FG_NEARWIN_NUM = 0xe;
      _0xcba612.JP_STRING = ["MINI", "MINOR", "MAJOR"];
      _0xcba612.INTRO_STRING = "Start";
      _0xcba612.GameId = 0x190;
      _0xcba612.ShortGameName = "tlp";
      _0xcba612.Color = {
        'Light': _0x2d27e6(0xff, 0xff, 0xff),
        'Dark': _0x2d27e6(101.25, 94.5, 73.5)
      };
      _0xcba612.MANUAL_STRING = ["String_01", "String_02", "String_03", 'String_04'];
      _0xcba612.MANUAL_TITLE_STRING = "String_00";
      _0xcba612.JP_SKIN_STRING = ["default", 'MINI', "MINOR", 'MAJOR'];
      _0xcba612.FG_DECLARE_TYPES = ["default", '1_B', "1_R", '2_BR', "1_G", '2_BG', '2_RG', "3_BRG"];
      _0xcba612.AVATAR_PREFIX = "Scatter_";
      _0xcba612.DATA_PREFIX = "Data_";
      _0xcba612.ANIM_SKINS = ["3MG", '1B', '1R', "2BR", '1G', '2BG', "2RG", "3FG"];
      _0xcba612.REEL_SKIN = {
        'MG': 'MG',
        'FG': 'FG'
      };
      _0xcba612.FGBG_SKIN = ['MG', "FG_B", "FG_R", 'FG', 'FG_G', 'FG', 'FG', 'FG'];
      _0xcba612.SCATTER_SPINE_ANIM_NAME = {
        'SCATTER_IDLE': "Scatter_Idle",
        'SCATTER_IDLE_BACK': "Scatter_Idle_Back",
        'SCATTER_STOP': "Scatter_Stop",
        'SCATTER_SWITCH': "Scatter_Switch",
        'SCATTER_TURN': "Scatter_Turn",
        'SCATTER_TURN_2': "Scatter_Turn2",
        'TRACK_1_SCATTER': "Track1_Scatter",
        'TRACK_2_EAR': "Track2_Ear",
        'WIN': "Win"
      };
      _0xcba612.BUY_BONUS_TXT = ["Txt_Buy_Feature_Bet", "Txt_Buy_Feature_Title"];
      _0xcba612.FG_COMPLIMENT_TXT = ["Txt_FG_Congrats"];
      _0xcba612.FREE_SPIN_TXT = ["Freespin"];
      _0xcba612.WIN_LV_CHANGE = 0xa;
      _0xcba612.WIN_LV1 = "WinLv1";
      _0xcba612.WIN_LV2 = "WinLv2";
      _0xcba612.FAKE_COIN_ODD = 0.2;
      _0xcba612.FAKE_SCATTER_ODD = 0.2;
      _0xcba612.FAKE_JP_ODD = [0.11, 0.06, 0.01];
      _0xcba612.COL = 0x5;
      _0xcba612.ROW = 0x3;
      _0xcba612.FULL_PLATE_NUM = 0xf;
      _0xcba612.SeparateLineWidth = 0x4;
      _0xcba612.MaxSymbolEachColumn = 0x3;
      _0xcba612.MinSymbolEachColumn = 0x3;
      _0xcba612.SymbolHeight = 0x7c;
      _0xcba612.SymbolWidth = 0x7c;
      _0xcba612.IsFG = false;
      _0xcba612.FullRound = 0x3;
      _0xcba612.CanScaleWinValue = true;
      _0xcba612.InitSize = _0x1536ed(0.1, 0.1);
      _0xcba612.EndSize = _0x1536ed(0x1, 0x1);
      _0xcba612.MIDDLE_PLATE_INDEX = 0x1;
      _0xcba612.NODE_PREFIX_NAME = ["low", '', 'up'];
      _0xcba612.THOUSAND = 0x3e8;
      _0xcba612.MILLION = 0xf4240;
      _0xcba612.FLY_TYPES = 0x4;
      _0xcba612.EFFECT_LAYER_NUMS = 0x4;
      _0xcba612.LAYERS = {
        'ONE': 0x0,
        'TWO': 0x1,
        'THREE': 0x2,
        'FOUR': 0x3,
        'FIVE': 0x4
      };
      _0xcba612.EFFECT_TYPES = 0x3;
      _0xcba612.EFFECT_TYPE = {
        'SYMBOL': 0x0,
        'ADD_EFFECT': 0x1,
        'FLY': 0x2
      };
      _0xcba612.ADD_EFFECT_TYPE = {
        'MG': 0x0,
        'FG': 0x1
      };
      _0xcba612.SCATTERS = {
        'BLUE': 0x0,
        'RED': 0x1,
        'GREEN': 0x2
      };
      _0xcba612.BIG_NUM = 0xf423f;
      _0xcba612.MAX_LEVEL = 0x2;
      _0xcba612.FG_LEVEL = 0x3;
      _0xcba612.SCATTER_DISTANCE = [0x3, 0x3, 0x6];
      _0xcba612.COIN_NAME = ["Coin_B", "Coin_R", 'Coin_G', "Coin_N"];
      _0xcba612.FX_TYPE = ["FX_Fly_B", "FX_Fly_R", 'FX_Fly_G', "FX_Fly_N"];
      _0xcba612.FX_COIN_TYPE = ["Coin_B", "Coin_R", 'Coin_G', "Coin_N"];
      _0xcba612.AFTER_HIT = ["Scatter_B_Hit", "Scatter_R_Hit", 'Scatter_G_Hit'];
      _0xcba612.ACTION_DELAY_TIME = {
        'TIME_FOR_AWARD_LINE_EFFECT': 1.5,
        'FG_FIRST_NEAR_WIN_TIME': 1.1,
        'FG_IN_NEAR_WIN_TIME': 0.5
      };
      _0xcba612.AWARD_TYPE = {
        'AWARD_TYPE_NON': 0x0,
        'AWARD_TYPE_LINE': 0x1,
        'AWARD_TYPE_ALL_PLATE': 0x2,
        'AWARD_TYPE_MAX': 0x7fff
      };
      _0xcba612.SpeedUp = 0x1;
      _0xcba612.scaleUpTime = 0.35;
      _0xcba612.scaleDownTime = 0.15;
      _0xcba612.ActualFlyTime = 0.5;
      _0xcba612.WaitTime = 0.5;
      _0xcba612.HitTime = 0.1;
      _0xcba612.SymbolWinName = "Win";
      _0xcba612.AudioFileRoot = "Sound/";
      _0xcba612.AudioFilePath = {
        'MG_BGM': "MG_BGM",
        'FG_BGM': 'FG_BGM',
        'MG_in': "MG_in",
        'Spin': "Spin",
        'reel_stop': "reel_Stop",
        'scatter_stop': "scatter_stop",
        'scatter_switch': 'scatter_switch',
        'scatter_collect': "scatter_collect",
        'symbol_award': 'symbol_award',
        'near_win1': "near_win1",
        'near_win2': "near_win2",
        'near_win3': "near_win3",
        'scatter_win': "scatter_win",
        'scatter_ring': "scatter_ring",
        'scatter_FG_near': "scatter_FG_near",
        'scatter_FG_win': "scatter_FG_win",
        'scatter_FG_win2': "scatter_FG_win2",
        'scatter_lv': 'scatter_lv',
        'FG_declare': "FG_declare",
        'FG_in': "FG_in",
        'FG_out': 'FG_out',
        'Small_Win01': "Small_Win01",
        'Small_Win02': "Small_Win02",
        'Small_Win03': "Small_Win03",
        'Big_Win': "Big_Win",
        'Big_Win_End': "Big_Win_End",
        'Change_Win': 'Change_Win',
        'scatter_yellow': "scatter_yellow",
        'scatter_add_fly': "scatter_add_fly",
        'scatter_add_end': "scatter_add_end",
        'scatter_add': "scatter_add",
        'scatter_add2': "scatter_add2",
        'Bet_lock': "Bet_lock",
        'Bet_unlock': "Bet_unlock",
        'respin_switch': "respin_switch",
        'FG_Respin': 'FG_Respin',
        'FG_near': "FG_near",
        'Grand_lock': "Grand_lock",
        'Grand_win': "Grand_win",
        'Grand_declare': "Grand_declare",
        'end_declare': "end_declare",
        'MG_omen': "MG_omen"
      };
      _0xcba612.AudioClips = {
        'MG_BGM': null,
        'FG_BGM': null,
        'MG_in': null,
        'Spin': null,
        'reel_stop': null,
        'scatter_stop': null,
        'scatter_switch': null,
        'scatter_collect': null,
        'symbol_award': null,
        'near_win1': null,
        'near_win2': null,
        'near_win3': null,
        'scatter_win': null,
        'scatter_ring': null,
        'scatter_FG_near': null,
        'scatter_FG_win': null,
        'scatter_FG_win2': null,
        'scatter_lv': null,
        'FG_declare': null,
        'FG_in': null,
        'FG_out': null,
        'Small_Win01': null,
        'Small_Win02': null,
        'Small_Win03': null,
        'Big_Win': null,
        'Big_Win_End': null,
        'Change_Win': null,
        'scatter_yellow': null,
        'scatter_add_fly': null,
        'scatter_add_end': null,
        'scatter_add': null,
        'scatter_add2': null,
        'Bet_lock': null,
        'Bet_unlock': null,
        'respin_switch': null,
        'FG_Respin': null,
        'FG_near': null,
        'Grand_lock': null,
        'Grand_win': null,
        'Grand_declare': null,
        'end_declare': null,
        'MG_omen': null
      };
      _0xcba612.PlateEftOdds = [0x1, 0x3, 0x6, 0xf, 0x1e];
      _0xcba612.LineInfos = [[0x1, 0x4, 0x7, 0xa, 0xd], [0x0, 0x3, 0x6, 0x9, 0xc], [0x2, 0x5, 0x8, 0xb, 0xe], [0x0, 0x4, 0x8, 0xa, 0xc], [0x2, 0x4, 0x6, 0xa, 0xe], [0x0, 0x3, 0x7, 0x9, 0xc], [0x2, 0x5, 0x7, 0xb, 0xe], [0x1, 0x5, 0x8, 0xb, 0xd], [0x1, 0x3, 0x6, 0x9, 0xd], [0x0, 0x4, 0x7, 0xa, 0xc], [0x2, 0x4, 0x7, 0xa, 0xe], [0x0, 0x4, 0x6, 0xa, 0xc], [0x2, 0x4, 0x8, 0xa, 0xe], [0x1, 0x3, 0x7, 0x9, 0xd], [0x1, 0x5, 0x7, 0xb, 0xd], [0x1, 0x4, 0x6, 0xa, 0xd], [0x1, 0x4, 0x8, 0xa, 0xd], [0x0, 0x5, 0x6, 0xb, 0xc], [0x2, 0x3, 0x8, 0x9, 0xe], [0x1, 0x3, 0x8, 0x9, 0xd], [0x1, 0x5, 0x6, 0xb, 0xd], [0x0, 0x3, 0x8, 0x9, 0xc], [0x2, 0x5, 0x6, 0xb, 0xe], [0x0, 0x5, 0x8, 0xb, 0xc], [0x2, 0x3, 0x6, 0x9, 0xe], [0x0, 0x5, 0x7, 0xb, 0xc], [0x2, 0x3, 0x7, 0x9, 0xe], [0x1, 0x4, 0x7, 0xa, 0xe], [0x0, 0x3, 0x7, 0xb, 0xe], [0x2, 0x5, 0x7, 0x9, 0xc], [0x0, 0x4, 0x7, 0xa, 0xe], [0x2, 0x4, 0x7, 0xa, 0xc], [0x0, 0x4, 0x8, 0xa, 0xe], [0x2, 0x4, 0x6, 0xa, 0xc], [0x0, 0x3, 0x6, 0x9, 0xd], [0x2, 0x5, 0x8, 0xb, 0xd], [0x0, 0x4, 0x6, 0xa, 0xe], [0x2, 0x4, 0x8, 0xa, 0xc], [0x1, 0x3, 0x7, 0xb, 0xd], [0x1, 0x5, 0x7, 0x9, 0xd], [0x1, 0x4, 0x6, 0x9, 0xc], [0x1, 0x4, 0x8, 0xb, 0xe], [0x1, 0x3, 0x6, 0xa, 0xe], [0x1, 0x5, 0x8, 0xa, 0xc], [0x1, 0x3, 0x7, 0xb, 0xe], [0x1, 0x5, 0x7, 0x9, 0xc], [0x2, 0x4, 0x6, 0x9, 0xd], [0x0, 0x4, 0x8, 0xb, 0xd], [0x0, 0x3, 0x7, 0xb, 0xd], [0x2, 0x5, 0x7, 0x9, 0xd], [0x1, 0x3, 0x8, 0xa, 0xe], [0x1, 0x5, 0x6, 0xa, 0xc], [0x0, 0x5, 0x6, 0xa, 0xe], [0x2, 0x3, 0x8, 0xa, 0xc], [0x0, 0x4, 0x6, 0xa, 0xd], [0x2, 0x4, 0x8, 0xa, 0xd], [0x0, 0x5, 0x6, 0x9, 0xd], [0x2, 0x3, 0x8, 0xb, 0xd], [0x0, 0x4, 0x6, 0xb, 0xc], [0x2, 0x4, 0x8, 0x9, 0xe]];
      _0xcba612.SERVER_RET_TYPE = {
        'SERVER_SUCCESS': 0x0,
        'SERVER_ERROR_SEATE': 0x31f,
        'SERVER_NOUSE': 0x383,
        'SERVER_MAINTAIN': 0x3e6,
        'SERVER_SHUTDOWN': 0x3e7,
        'SERVER_NEED_UID': 0x3e9,
        'SERVER_NEED_LOGIN': 0x3ea,
        'SERVER_TOKEN_ERROR': 0x3eb
      };
      _0xcba612.LOGIN_RESULT_TYPE = {
        'LOGIN_SUCCESS': 0x0,
        'LOGIN_FAIL': 0x1,
        'API_VERIFY_FAIL': 0x7d1,
        'API_LOGIN_REPEAT_FAIL': 0x7d2
      };
      _0xcba612.HEART_BEAT_STATE = {
        'NOTIFY': 0x61,
        'MAINTAIN': 0x62,
        'CLOSE': 0x63
      };
      _0xcba612.StringKey = {
        'MC_FEATURES_LEFT': "MC_FEATURES_LEFT",
        'MC_FEATURES_RIGHT': 'MC_FEATURES_RIGHT',
        'FREE_GAME_NAME_STRING': "FREE_GAME_NAME_STRING"
      };
      _0xcba612.ShowDisplayValue = null;
      _0xcba612.FeatureBetValue = 0xa;
      _0xcba612.FeaturesSpinAck = [{
        'RoundQueue': [{
          'MainPlateSymbol': [{
            'Col': [0x6, 0x6, 0x6]
          }, {
            'Col': [0xa, 0xe, 0x4]
          }, {
            'Col': [0xc, 0x3, 0x6]
          }, {
            'Col': [0x4, 0x2, 0xd]
          }, {
            'Col': [0x7, 0x7, 0x4]
          }],
          'FreePlateSymbol': [{
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.5
            }, {
              'Symbol': 0x12,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.5
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.5
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0x11,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }]
          }, {
            'Col': [{
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }]
          }],
          'FreePlateSymbolLog': [{
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x12,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 24.3
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x2,
              'JPMult': 0x2,
              'Number': 0x14
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0x11,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.5
            }]
          }, {
            'Col': [{
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }]
          }],
          'AwardTypeFlag': 0x72,
          'RoundWin': 0x0,
          'FreeRemainRound': 0x3,
          'BlueData': [{
            'ScatterPos': 0x6,
            'JPState': 0x2,
            'Number': 0xa
          }],
          'RedData': [{
            'ScatterPos': 0xb,
            'EffectPos': [0x0, 0x3, 0x5, 0x6, 0x8, 0x9],
            'JPState': 0x0,
            'Number': 0.5
          }],
          'GreenData': [{
            'ScatterPos': 0x4,
            'EffectPos': [0x0, 0x3, 0x5, 0x6, 0x8, 0x9, 0xb],
            'JPState': 0x0,
            'Number': 24.3
          }],
          'AddCrack': [false, false, false],
          'MaxFlag': false
        }, {
          'MainPlateSymbol': [{
            'Col': [0x6, 0x6, 0x6]
          }, {
            'Col': [0xa, 0xe, 0x4]
          }, {
            'Col': [0xc, 0x3, 0x6]
          }, {
            'Col': [0x4, 0x2, 0xd]
          }, {
            'Col': [0x7, 0x7, 0x4]
          }],
          'FreePlateSymbol': [{
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x12,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 24.3
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x2,
              'JPMult': 0x2,
              'Number': 0x14
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0x11,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.5
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }],
          'FreePlateSymbolLog': [{
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x12,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 24.3
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x2,
              'JPMult': 0x2,
              'Number': 0x14
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0x11,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.5
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x1,
              'JPMult': 0x1,
              'Number': 0x5
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }],
          'AwardTypeFlag': 0x14,
          'RoundWin': 0x0,
          'FreeRemainRound': 0x3,
          'BlueData': [{
            'ScatterPos': 0xc,
            'JPState': 0x1,
            'Number': 0x5
          }],
          'AddCrack': [false, false, false],
          'MaxFlag': false
        }, {
          'MainPlateSymbol': [{
            'Col': [0x6, 0x6, 0x6]
          }, {
            'Col': [0xa, 0xe, 0x4]
          }, {
            'Col': [0xc, 0x3, 0x6]
          }, {
            'Col': [0x4, 0x2, 0xd]
          }, {
            'Col': [0x7, 0x7, 0x4]
          }],
          'FreePlateSymbol': [{
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x12,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 24.3
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x2,
              'JPMult': 0x2,
              'Number': 0x14
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0x11,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.5
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x1,
              'JPMult': 0x1,
              'Number': 0x5
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }],
          'FreePlateSymbolLog': [{
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x12,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 24.3
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x2,
              'JPMult': 0x2,
              'Number': 0x14
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0x11,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.5
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x1,
              'JPMult': 0x1,
              'Number': 0x5
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }],
          'AwardTypeFlag': 0x4,
          'RoundWin': 0x0,
          'FreeRemainRound': 0x3,
          'AddCrack': [false, false, false],
          'MaxFlag': false
        }, {
          'MainPlateSymbol': [{
            'Col': [0x6, 0x6, 0x6]
          }, {
            'Col': [0xa, 0xe, 0x4]
          }, {
            'Col': [0xc, 0x3, 0x6]
          }, {
            'Col': [0x4, 0x2, 0xd]
          }, {
            'Col': [0x7, 0x7, 0x4]
          }],
          'FreePlateSymbol': [{
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x12,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 24.3
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x2,
              'JPMult': 0x2,
              'Number': 0x14
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0x11,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.5
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x1,
              'JPMult': 0x1,
              'Number': 0x5
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }],
          'FreePlateSymbolLog': [{
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x12,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 24.3
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x2,
              'JPMult': 0x2,
              'Number': 0x14
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0x11,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.5
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x1,
              'JPMult': 0x1,
              'Number': 0x5
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }],
          'AwardTypeFlag': 0x4,
          'RoundWin': 0x0,
          'FreeRemainRound': 0x2,
          'AddCrack': [false, false, false],
          'MaxFlag': false
        }, {
          'MainPlateSymbol': [{
            'Col': [0x6, 0x6, 0x6]
          }, {
            'Col': [0xa, 0xe, 0x4]
          }, {
            'Col': [0xc, 0x3, 0x6]
          }, {
            'Col': [0x4, 0x2, 0xd]
          }, {
            'Col': [0x7, 0x7, 0x4]
          }],
          'FreePlateSymbol': [{
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x12,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 24.3
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x2,
              'JPMult': 0x2,
              'Number': 0x14
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0x11,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.5
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x1,
              'JPMult': 0x1,
              'Number': 0x5
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }],
          'FreePlateSymbolLog': [{
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x12,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 24.3
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x2,
              'JPMult': 0x2,
              'Number': 0x14
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0x11,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.5
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x1,
              'JPMult': 0x1,
              'Number': 0x5
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }],
          'AwardTypeFlag': 0x4,
          'RoundWin': 0x0,
          'FreeRemainRound': 0x3,
          'AddCrack': [false, false, false],
          'MaxFlag': false
        }, {
          'MainPlateSymbol': [{
            'Col': [0x6, 0x6, 0x6]
          }, {
            'Col': [0xa, 0xe, 0x4]
          }, {
            'Col': [0xc, 0x3, 0x6]
          }, {
            'Col': [0x4, 0x2, 0xd]
          }, {
            'Col': [0x7, 0x7, 0x4]
          }],
          'FreePlateSymbol': [{
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x12,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 24.3
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x2,
              'JPMult': 0x2,
              'Number': 0x14
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0x11,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.5
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x1,
              'JPMult': 0x1,
              'Number': 0x5
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }],
          'FreePlateSymbolLog': [{
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x12,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 24.3
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x2,
              'JPMult': 0x2,
              'Number': 0x14
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0x11,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.5
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x1,
              'JPMult': 0x1,
              'Number': 0x5
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }],
          'AwardTypeFlag': 0x4,
          'RoundWin': 0x0,
          'FreeRemainRound': 0x2,
          'AddCrack': [false, false, false],
          'MaxFlag': false
        }, {
          'MainPlateSymbol': [{
            'Col': [0x6, 0x6, 0x6]
          }, {
            'Col': [0xa, 0xe, 0x4]
          }, {
            'Col': [0xc, 0x3, 0x6]
          }, {
            'Col': [0x4, 0x2, 0xd]
          }, {
            'Col': [0x7, 0x7, 0x4]
          }],
          'FreePlateSymbol': [{
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x12,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 24.3
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x2,
              'JPMult': 0x2,
              'Number': 0x14
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0x11,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.5
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x1,
              'JPMult': 0x1,
              'Number': 0x5
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }],
          'FreePlateSymbolLog': [{
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x12,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 24.3
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x2,
              'JPMult': 0x2,
              'Number': 0x14
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0x11,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.5
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x1,
              'JPMult': 0x1,
              'Number': 0x5
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }],
          'AwardTypeFlag': 0x4,
          'RoundWin': 0x0,
          'FreeRemainRound': 0x1,
          'AddCrack': [false, false, false],
          'MaxFlag': false
        }, {
          'MainPlateSymbol': [{
            'Col': [0x6, 0x6, 0x6]
          }, {
            'Col': [0xa, 0xe, 0x4]
          }, {
            'Col': [0xc, 0x3, 0x6]
          }, {
            'Col': [0x4, 0x2, 0xd]
          }, {
            'Col': [0x7, 0x7, 0x4]
          }],
          'FreePlateSymbol': [{
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x12,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 24.3
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x2,
              'JPMult': 0x2,
              'Number': 0x14
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0x11,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.5
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x1,
              'JPMult': 0x1,
              'Number': 0x5
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }],
          'FreePlateSymbolLog': [{
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x12,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 24.3
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x2,
              'JPMult': 0x2,
              'Number': 0x14
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0x11,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.5
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x1,
              'JPMult': 0x1,
              'Number': 0x5
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }],
          'AwardTypeFlag': 0x4,
          'RoundWin': 0x0,
          'FreeRemainRound': 0x3,
          'AddCrack': [false, false, false],
          'MaxFlag': false
        }, {
          'MainPlateSymbol': [{
            'Col': [0x6, 0x6, 0x6]
          }, {
            'Col': [0xa, 0xe, 0x4]
          }, {
            'Col': [0xc, 0x3, 0x6]
          }, {
            'Col': [0x4, 0x2, 0xd]
          }, {
            'Col': [0x7, 0x7, 0x4]
          }],
          'FreePlateSymbol': [{
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x12,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 24.3
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x2,
              'JPMult': 0x2,
              'Number': 0x14
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0x11,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.5
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x1,
              'JPMult': 0x1,
              'Number': 0x5
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }],
          'FreePlateSymbolLog': [{
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x12,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 24.3
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x2,
              'JPMult': 0x2,
              'Number': 0x14
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0x11,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.5
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x1,
              'JPMult': 0x1,
              'Number': 0x5
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }],
          'AwardTypeFlag': 0x4,
          'RoundWin': 0x0,
          'FreeRemainRound': 0x2,
          'AddCrack': [false, false, false],
          'MaxFlag': false
        }, {
          'MainPlateSymbol': [{
            'Col': [0x6, 0x6, 0x6]
          }, {
            'Col': [0xa, 0xe, 0x4]
          }, {
            'Col': [0xc, 0x3, 0x6]
          }, {
            'Col': [0x4, 0x2, 0xd]
          }, {
            'Col': [0x7, 0x7, 0x4]
          }],
          'FreePlateSymbol': [{
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x12,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 24.3
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x2,
              'JPMult': 0x2,
              'Number': 0x14
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0x11,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.5
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x1,
              'JPMult': 0x1,
              'Number': 0x5
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }],
          'FreePlateSymbolLog': [{
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x12,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 24.3
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x2,
              'JPMult': 0x2,
              'Number': 0x14
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x15,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x0
            }, {
              'Symbol': 0x11,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.5
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x1,
              'JPMult': 0x1,
              'Number': 0x5
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }],
          'AwardTypeFlag': 0x4,
          'RoundWin': 0x0,
          'FreeRemainRound': 0x1,
          'AddCrack': [false, false, false],
          'MaxFlag': false
        }, {
          'MainPlateSymbol': [{
            'Col': [0x6, 0x6, 0x6]
          }, {
            'Col': [0xa, 0xe, 0x4]
          }, {
            'Col': [0xc, 0x3, 0x6]
          }, {
            'Col': [0x4, 0x2, 0xd]
          }, {
            'Col': [0x7, 0x7, 0x4]
          }],
          'FreePlateSymbol': [{
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x12,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 24.3
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x2,
              'JPMult': 0x2,
              'Number': 0x14
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }, {
              'Symbol': 0x11,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.5
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x1,
              'JPMult': 0x1,
              'Number': 0x5
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }],
          'FreePlateSymbolLog': [{
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0x12,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 24.3
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.4
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x2,
              'JPMult': 0x2,
              'Number': 0x14
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.2
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }]
          }, {
            'Col': [{
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0x1
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }, {
              'Symbol': 0x11,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.5
            }]
          }, {
            'Col': [{
              'Symbol': 0x10,
              'JPState': 0x1,
              'JPMult': 0x1,
              'Number': 0x5
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }, {
              'Symbol': 0xf,
              'JPState': 0x0,
              'JPMult': 0x0,
              'Number': 0.1
            }]
          }],
          'AwardTypeFlag': 0x8c,
          'RoundWin': 5054.4,
          'FreeRemainRound': 0x3,
          'AddCrack': [false, false, false],
          'MaxFlag': false
        }],
        'FreeTotalWin': 5054.4,
        'TotalWin': 5054.4,
        'ShowIndex': '',
        'NowMoney': 0x0,
        'AckType': 0x0,
        'Bet': 0x1,
        'FolderIndex': 0x0
      }, {
        'RoundQueue': [{
          'MainPlateSymbol': [{
            'Col': [0xa, 0xa, 0xa]
          }, {
            'Col': [0xa, 0xa, 0xa]
          }, {
            'Col': [0xa, 0xa, 0xa]
          }, {
            'Col': [0xa, 0xa, 0xa]
          }, {
            'Col': [0xa, 0xa, 0xa]
          }],
          'AwardDataVec': [{
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x0,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x1,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x2,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x3,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x4,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x5,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x6,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x7,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x8,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x9,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0xa,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0xb,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0xc,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0xd,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0xe,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0xf,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x10,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x11,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x12,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x13,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x14,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x15,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x16,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x17,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x18,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x19,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x1a,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x1b,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x1c,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x1d,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x1e,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x1f,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x20,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x21,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x22,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x23,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x24,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x25,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x26,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x27,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x28,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x29,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x2a,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x2b,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x2c,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x2d,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x2e,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x2f,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x30,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x31,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x32,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x33,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x34,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x35,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x36,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x37,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x38,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x39,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x3a,
            'Win': 0.55
          }, {
            'Symbol': 0xa,
            'Count': 0x5,
            'Line': 0x3b,
            'Win': 0.55
          }],
          'AwardTypeFlag': 0x1,
          'RoundWin': 0x21,
          'FreeRemainRound': 0x0,
          'AddCrack': [false, false, false]
        }],
        'FreeTotalWin': 0x0,
        'TotalWin': 0x21,
        'ShowIndex': '',
        'NowMoney': 0x0,
        'AckType': 0x0,
        'Bet': 0x1,
        'FolderIndex': 0x0
      }];
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "be9e5+6XplH5a4tvm0dYxZd", "ColumnSymbol", undefined);
      var _0x47aeb7 = _0x3e9873.ccclass;
      _0x2de6b6 = _0x47aeb7('ColumnSymbol');
      var _0x346a01 = _0x2de6b6(_0x4ae71d = function () {
        function _0x3700a0(_0x1c5f86, _0x4fc4bc, _0x59cd35, _0x24b9d6) {
          this.m_parentNode = null;
          this.m_symbolSprites = new Array();
          this.m_gameView = null;
          this.m_symbols = [];
          this.m_name = '';
          this.m_basePos = _0x1536ed(0x0, 0x0, 0x0);
          this.m_parentNode = _0x1c5f86;
          this.m_gameView = _0x59cd35;
          for (var _0x3e86fe = 0x0; _0x3e86fe < _0xcba612.ROW; ++_0x3e86fe) {
            var _0x5eb6af = new _0x84773f();
            _0x5eb6af.name = _0x24b9d6 + _0x3e86fe.toString();
            _0x5eb6af.layer = _0xd8402d.Layer2D;
            var _0x4567a3 = _0x5eb6af.addComponent(_0x31b16c);
            _0x4567a3.type = _0x31b16c.Type.SIMPLE;
            _0x4567a3.sizeMode = _0x31b16c.SizeMode.RAW;
            _0x4567a3.trim = false;
            this.m_parentNode.addChild(_0x5eb6af);
            this.m_symbolSprites[_0x3e86fe] = _0x4567a3;
          }
        }
        var _0x17ef64 = _0x3700a0.prototype;
        _0x17ef64.SetSymbols = function (_0x3578ff) {
          this.m_symbols = _0x3578ff;
          for (var _0x5d9b55 = 0x0; _0x5d9b55 < this.m_symbolSprites.length; ++_0x5d9b55) {
            if (_0x5d9b55 < _0x3578ff.length) {
              this.m_symbolSprites[_0x5d9b55].node.active = true;
              this.m_symbolSprites[_0x5d9b55].spriteFrame = this.m_gameView.GetSymbolSpriteFrame(_0x3578ff[_0x5d9b55]);
              this.m_symbolSprites[_0x5d9b55].node.setPosition(this.CalPosY(_0x5d9b55));
            } else {
              this.m_symbolSprites[_0x5d9b55].node.active = false;
            }
          }
        };
        _0x17ef64.ChangeSymbol = function (_0x11ff9d, _0x5a38c9) {
          this.m_symbolSprites[_0x5a38c9].spriteFrame = this.m_gameView.GetSymbolSpriteFrame(_0x11ff9d);
          this.m_symbolSprites[_0x5a38c9].node.active = true;
        };
        _0x17ef64.SetPosition = function (_0x5eee54) {
          this.m_basePos = _0x5eee54;
          for (var _0x5b4325 = 0x0; _0x5b4325 < this.m_symbols.length; ++_0x5b4325) {
            var _0x341841 = this.CalPosY(_0x5b4325);
            this.m_symbolSprites[_0x5b4325].node.setPosition(_0x341841);
          }
        };
        _0x17ef64.CalPosY = function (_0x4d4c3c) {
          var _0x53d16c = this.m_basePos.clone();
          _0x53d16c.y += (_0xcba612.ROW - 0x1 - _0x4d4c3c + 0.5) * _0xcba612.SymbolHeight;
          return _0x53d16c;
        };
        _0x17ef64.CalStopPosY = function (_0x379391) {
          var _0x429769 = _0x1536ed(0x0, 0x0, 0x0);
          _0x429769.y += (_0xcba612.ROW - 2.5 - _0x379391 + 0.5) * _0xcba612.SymbolHeight;
          return _0x429769;
        };
        _0x17ef64.HideSymbolByRow = function (_0x5e7d72) {
          this.m_symbolSprites[_0x5e7d72].node.active = false;
        };
        _0x17ef64.SetColumnVisiable = function (_0x4c9d2a) {
          for (var _0x1e870a = 0x0; _0x1e870a < _0xcba612.ROW; ++_0x1e870a) {
            this.m_symbolSprites[_0x1e870a].node.active = _0x4c9d2a;
          }
        };
        _0x17ef64.SetSymbolDark = function (_0x24e426) {
          for (var _0xe2f489 = 0x0; _0xe2f489 < _0xcba612.ROW; ++_0xe2f489) {
            this.m_symbolSprites[_0xe2f489].color = _0x24e426 ? _0xcba612.Color.Dark : _0xcba612.Color.Light;
          }
        };
        _0x4b136a(_0x3700a0, [{
          'key': 'Name',
          'get': function () {
            return this.m_name;
          },
          'set': function (_0x1b6010) {
            this.m_name = _0x1b6010;
          }
        }]);
        return _0x3700a0;
      }()) || _0x4ae71d;
      var _0x5b815f;
      var _0x28fab1;
      var _0x3e1c5b;
      var _0x1aa4f7;
      var _0x558105;
      var _0x478c92;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "48548CFDUBNhp8v7GHTNHoK", "CommonEffect", undefined);
      (function (_0x35fc55) {
        var _0x27eea0 = function () {
          function _0x280bb5() {}
          _0x280bb5.PascalTriangleLine = function (_0x3eeb9b) {
            var _0x2022cc = [0x1];
            for (var _0x28efbd = 0x1; _0x28efbd < _0x3eeb9b; _0x28efbd++) {
              _0x2022cc[_0x28efbd] = _0x2022cc[_0x28efbd - 0x1] * (_0x3eeb9b - _0x28efbd) / _0x28efbd;
            }
            return _0x2022cc;
          };
          _0x280bb5.RangedRandom = function (_0x2ba1d3, _0x3fbf1d) {
            return (_0x3fbf1d - _0x2ba1d3) * Math.random() + _0x2ba1d3;
          };
          _0x280bb5.GetRandomRectPos = function (_0x2df833, _0x1e39a6, _0x5a0e71) {
            var _0x4cc3fd = _0x29171a(this.RangedRandom(-_0x1e39a6.x, _0x1e39a6.x) / 0x2 | 0x0, this.RangedRandom(-_0x1e39a6.x, _0x1e39a6.x) / 0x2 | 0x0).rotate(_0x5a0e71 * _0x5d46d6.RAD);
            return _0x2df833.add(_0x4cc3fd);
          };
          _0x280bb5.GetRandomOvalPos = function (_0x4c2a94, _0x3cb76c, _0x26faa1) {
            var _0x555879 = _0x3cb76c.y / Math.max(0x1, _0x3cb76c.x);
            var _0x38f919 = Math.random() * _0x3cb76c.x * 0.5;
            var _0x24602b = Math.random() * Math.PI * 0x2;
            var _0x3a5431 = _0x29171a(_0x38f919 * Math.cos(_0x24602b), _0x38f919 * Math.sin(_0x24602b) * _0x555879).rotate(_0x26faa1 * _0x5d46d6.RAD);
            return _0x4c2a94.add(_0x3a5431);
          };
          _0x280bb5.ZoomAndFlip = function (_0x5a44e6, _0x28be1e, _0x234f53, _0x4b55ce) {
            var _0xa2b3fc = Math.sin(_0x4b55ce * Math.PI) * (_0x28be1e - _0x5a44e6) + _0x5a44e6;
            var _0x35c740 = Math.cos(_0x4b55ce * Math.PI * _0x234f53);
            return _0x29171a(_0xa2b3fc * _0x35c740, _0xa2b3fc);
          };
          return _0x280bb5;
        }();
        _0x35fc55.ExtendsMath = _0x27eea0;
        var _0x16ef18 = function () {
          function _0x13c82d(_0x13a9f0) {
            this.pts = null;
            this.len = 0x0;
            this.ptl = null;
            this.bez = null;
            this.len = _0x13a9f0.length;
            if (0x0 == this.len) {
              _0x13a9f0.push(_0x1536ed(0x0, 0x0));
              _0x13a9f0.push(_0x1536ed(0x0, 0x0));
            } else if (0x1 == this.len) {
              _0x13a9f0.push(_0x1536ed(_0x13a9f0[0x0].x, _0x13a9f0[0x0].y));
            }
            this.pts = _0x13a9f0;
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
                this.ptl = _0x27eea0.PascalTriangleLine(this.len);
                this.bez = this.BezierN;
            }
          }
          var _0x47cdc9 = _0x13c82d.prototype;
          _0x47cdc9.GetPosition = function (_0x2211af) {
            return this.bez.apply(this, [_0x2211af]);
          };
          _0x47cdc9.Bezier2 = function (_0x179f2a) {
            var _0x44dee0 = 0x1 - _0x179f2a;
            return _0x1536ed(_0x44dee0 * this.pts[0x0].x + _0x179f2a * this.pts[0x1].x, _0x44dee0 * this.pts[0x0].y + _0x179f2a * this.pts[0x1].y);
          };
          _0x47cdc9.Bezier3 = function (_0x506d11) {
            var _0x54b7c9 = 0x1 - _0x506d11;
            var _0x5aa902 = [_0x54b7c9 * _0x54b7c9, 0x2 * _0x54b7c9 * _0x506d11, _0x506d11 * _0x506d11];
            return _0x1536ed(_0x5aa902[0x0] * this.pts[0x0].x + _0x5aa902[0x1] * this.pts[0x1].x + _0x5aa902[0x2] * this.pts[0x2].x, _0x5aa902[0x0] * this.pts[0x0].y + _0x5aa902[0x1] * this.pts[0x1].y + _0x5aa902[0x2] * this.pts[0x2].y);
          };
          _0x47cdc9.Bezier4 = function (_0x9a27d5) {
            var _0x2d1e41 = 0x1 - _0x9a27d5;
            var _0xe01166 = [_0x2d1e41 * _0x2d1e41 * _0x2d1e41, 0x3 * _0x2d1e41 * _0x2d1e41 * _0x9a27d5, 0x3 * _0x2d1e41 * _0x9a27d5 * _0x9a27d5, _0x9a27d5 * _0x9a27d5 * _0x9a27d5];
            return _0x1536ed(_0xe01166[0x0] * this.pts[0x0].x + _0xe01166[0x1] * this.pts[0x1].x + _0xe01166[0x2] * this.pts[0x2].x + _0xe01166[0x3] * this.pts[0x3].x, _0xe01166[0x0] * this.pts[0x0].y + _0xe01166[0x1] * this.pts[0x1].y + _0xe01166[0x2] * this.pts[0x2].y + _0xe01166[0x3] * this.pts[0x3].y);
          };
          _0x47cdc9.Bezier5 = function (_0x207da3) {
            var _0x50be68 = 0x1 - _0x207da3;
            var _0x2d0bbd = [_0x50be68 * _0x50be68 * _0x50be68 * _0x50be68, 0x4 * _0x50be68 * _0x50be68 * _0x50be68 * _0x207da3, 0x6 * _0x50be68 * _0x50be68 * _0x207da3 * _0x207da3, 0x4 * _0x50be68 * _0x207da3 * _0x207da3 * _0x207da3, _0x207da3 * _0x207da3 * _0x207da3 * _0x207da3];
            return _0x1536ed(_0x2d0bbd[0x0] * this.pts[0x0].x + _0x2d0bbd[0x1] * this.pts[0x1].x + _0x2d0bbd[0x2] * this.pts[0x2].x + _0x2d0bbd[0x3] * this.pts[0x3].x + _0x2d0bbd[0x4] * this.pts[0x4].x, _0x2d0bbd[0x0] * this.pts[0x0].y + _0x2d0bbd[0x1] * this.pts[0x1].y + _0x2d0bbd[0x2] * this.pts[0x2].y + _0x2d0bbd[0x3] * this.pts[0x3].y + _0x2d0bbd[0x4] * this.pts[0x4].y);
          };
          _0x47cdc9.Bezier6 = function (_0x558c80) {
            var _0x148576 = 0x1 - _0x558c80;
            var _0xd91a79 = [_0x148576 * _0x148576 * _0x148576 * _0x148576 * _0x148576, 0x5 * _0x148576 * _0x148576 * _0x148576 * _0x148576 * _0x558c80, 0xa * _0x148576 * _0x148576 * _0x148576 * _0x558c80 * _0x558c80, 0xa * _0x148576 * _0x148576 * _0x558c80 * _0x558c80 * _0x558c80, 0x5 * _0x148576 * _0x558c80 * _0x558c80 * _0x558c80 * _0x558c80, _0x558c80 * _0x558c80 * _0x558c80 * _0x558c80 * _0x558c80];
            return _0x1536ed(_0xd91a79[0x0] * this.pts[0x0].x + _0xd91a79[0x1] * this.pts[0x1].x + _0xd91a79[0x2] * this.pts[0x2].x + _0xd91a79[0x3] * this.pts[0x3].x + _0xd91a79[0x4] * this.pts[0x4].x + _0xd91a79[0x5] * this.pts[0x5].x, _0xd91a79[0x0] * this.pts[0x0].y + _0xd91a79[0x1] * this.pts[0x1].y + _0xd91a79[0x2] * this.pts[0x2].y + _0xd91a79[0x3] * this.pts[0x3].y + _0xd91a79[0x4] * this.pts[0x4].y + _0xd91a79[0x5] * this.pts[0x5].y);
          };
          _0x47cdc9.BezierN = function (_0x88961a) {
            var _0x46efc4 = 0x1 - _0x88961a;
            var _0xee6300 = _0x1536ed(0x0, 0x0);
            for (var _0x348c61 = 0x0; _0x348c61 < this.len; _0x348c61++) {
              var _0x2f879d = 0x1;
              for (var _0x1d8155 = 0x0; _0x1d8155 < this.len - _0x348c61 - 0x1; _0x1d8155++) {
                _0x2f879d *= _0x46efc4;
              }
              for (var _0x4aac50 = 0x0; _0x4aac50 < _0x348c61; _0x4aac50++) {
                _0x2f879d *= _0x88961a;
              }
              _0xee6300.x += _0x2f879d * this.ptl[_0x348c61] * this.pts[_0x348c61].x;
              _0xee6300.y += _0x2f879d * this.ptl[_0x348c61] * this.pts[_0x348c61].y;
            }
            return _0xee6300;
          };
          return _0x13c82d;
        }();
        _0x35fc55.Bezier = _0x16ef18;
      })(_0x5b815f || (_0x5b815f = {}));
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, '9ed9fFv1MVLaYxZDdoMQiZM', 'DataStructure', undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "2542d7CzctM5ZX0ccoAYtjl", "BaseSpine", undefined);
      var _0x24cd9b = _0x3e9873.ccclass;
      var _0x6784b6 = _0x3e9873.property;
      _0x28fab1 = _0x24cd9b("BaseSpine");
      _0x3e1c5b = _0x6784b6({
        'type': _0x959fe3.Skeleton,
        'tooltip': 'Spine'
      });
      _0x558105 = function (_0x3d6c21) {
        function _0x3b15b8() {
          var _0x282320;
          var _0x54b10f = arguments.length;
          var _0x34aa54 = new Array(_0x54b10f);
          for (var _0x498d84 = 0x0; _0x498d84 < _0x54b10f; _0x498d84++) {
            _0x34aa54[_0x498d84] = arguments[_0x498d84];
          }
          _0xec902e(_0x282320 = _0x3d6c21.call.apply(_0x3d6c21, [this].concat(_0x34aa54)) || this, "m_spine", _0x478c92, _0x11be3a(_0x282320));
          return _0x282320;
        }
        _0xed7a37(_0x3b15b8, _0x3d6c21);
        var _0x1384b2 = _0x3b15b8.prototype;
        _0x1384b2.Stop = function () {
          this.m_spine.clearTrack(0x0);
        };
        _0x1384b2.SetSkin = function (_0x5e8fa9, _0x7a4c9d) {
          if (undefined === _0x7a4c9d) {
            _0x7a4c9d = this.m_spine;
          }
          _0x7a4c9d.setSkin(_0x5e8fa9);
        };
        _0x1384b2.SetNodeActivity = function (_0x3e0124) {
          this.node.active = _0x3e0124;
        };
        _0x1384b2.SetSpineNodeActivity = function (_0x4de08e) {
          this.m_spine.node.active = _0x4de08e;
        };
        _0x1384b2.PlayAnimation = function (_0x2168bf, _0x52fb03, _0x5cb94e, _0x5dee74, _0x5dfb82) {
          if (undefined === _0x52fb03) {
            _0x52fb03 = this.m_spine;
          }
          if (undefined === _0x5cb94e) {
            _0x5cb94e = false;
          }
          if (undefined === _0x5dee74) {
            _0x5dee74 = _0xcba612.SpeedUp;
          }
          return new Promise(function (_0x18e0e8) {
            _0x52fb03.timeScale = _0x5dee74;
            _0x52fb03.clearTrack(0x0);
            _0x52fb03.setToSetupPose();
            var _0xf73fc1 = _0x52fb03.setAnimation(0x0, _0x2168bf, _0x5cb94e);
            if (_0xf73fc1) {
              _0x52fb03.setTrackEventListener(_0xf73fc1, function (_0x5d9bbe, _0x1c3445) {
                var _0x277f15 = _0x1c3445.data.name;
                if (!(null == _0x5dfb82)) {
                  _0x5dfb82(_0x277f15);
                }
              });
              _0x52fb03.setTrackCompleteListener(_0xf73fc1, function () {
                _0x18e0e8(null);
              });
            } else {
              _0x52fb03.setCompleteListener(function () {
                _0x18e0e8(null);
              });
            }
          });
        };
        _0x1384b2.StopSpine = function () {
          this.m_spine.clearTrack(0x0);
        };
        return _0x3b15b8;
      }(_0x14cfe4);
      _0x478c92 = _0x196fb6(_0x558105.prototype, "m_spine", [_0x3e1c5b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x304e58 = _0x28fab1(_0x1aa4f7 = _0x558105) || _0x1aa4f7;
      var _0x2a0616;
      var _0x1d603d;
      var _0x293e65;
      var _0x7bb7bb;
      var _0x5d31a1;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "bea94Ozx+BK9IVsUMXZ/yyM", 'SymbolSpine', undefined);
      var _0x5d84ad = _0x3e9873.ccclass;
      var _0x3e125e = _0x3e9873.property;
      _0x2a0616 = _0x5d84ad('SymbolSpine');
      _0x1d603d = _0x3e125e({
        'type': _0x5c9b0d(_0x1f9b12),
        'tooltip': '編號'
      });
      _0x7bb7bb = function (_0x364e1d) {
        function _0x2a8fba() {
          var _0x2310de;
          var _0x2b4a44 = arguments.length;
          var _0x3d201e = new Array(_0x2b4a44);
          for (var _0x291459 = 0x0; _0x291459 < _0x2b4a44; _0x291459++) {
            _0x3d201e[_0x291459] = arguments[_0x291459];
          }
          _0xec902e(_0x2310de = _0x364e1d.call.apply(_0x364e1d, [this].concat(_0x3d201e)) || this, "m_symbol", _0x5d31a1, _0x11be3a(_0x2310de));
          return _0x2310de;
        }
        _0xed7a37(_0x2a8fba, _0x364e1d);
        var _0x8e1bdc = _0x2a8fba.prototype;
        _0x8e1bdc.Stop = function () {
          this.m_spine.clearTrack(0x0);
        };
        _0x8e1bdc.GetWinTime = function (_0x16911b, _0x3cefda) {
          var _0x29f14b = this.m_spine.findAnimation(_0xcba612.SymbolWinName).duration;
          return _0x14c118.divide(_0x29f14b, _0x16911b);
        };
        _0x8e1bdc.PlayWin = function () {
          var _0x5f7082 = _0x26fe6f(_0x352743().mark(function _0x28307e(_0x3c0928, _0x4e6feb) {
            return _0x352743().wrap(function (_0xcc30e1) {
              for (;;) {
                switch (_0xcc30e1.prev = _0xcc30e1.next) {
                  case 0x0:
                    if (undefined === _0x4e6feb) {
                      _0x4e6feb = false;
                    }
                    this.SetNodeActivity(true);
                    if (!_0x4e6feb) {
                      _0xcc30e1.next = 0x5;
                      break;
                    }
                    return _0xcc30e1.abrupt("return");
                  case 0x5:
                    _0xcc30e1.next = 0x7;
                    return this.PlayAnimation(_0xcba612.SymbolWinName, this.m_spine, _0x4e6feb);
                  case 0x7:
                  case "end":
                    return _0xcc30e1.stop();
                }
              }
            }, _0x28307e, this);
          }));
          return function (_0x33f519, _0x50ea5f) {
            return _0x5f7082.apply(this, arguments);
          };
        }();
        _0x4b136a(_0x2a8fba, [{
          'key': 'Symbol',
          'get': function () {
            return this.m_symbol;
          }
        }]);
        return _0x2a8fba;
      }(_0x304e58);
      _0x5d31a1 = _0x196fb6(_0x7bb7bb.prototype, "m_symbol", [_0x1d603d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': null
      });
      var _0x1b3034 = _0x2a0616(_0x293e65 = _0x7bb7bb) || _0x293e65;
      var _0x5bdeb9;
      var _0x35212e;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "42226K4quVPJY4s0YxsKeSn", 'FgCoinSpine', undefined);
      var _0x2659e4 = _0x3e9873.ccclass;
      _0x5bdeb9 = _0x2659e4("FgCoinSpine");
      var _0x4d51fe = _0x5bdeb9(_0x35212e = function (_0x4f3528) {
        function _0x1ff6fb() {
          return _0x4f3528.apply(this, arguments) || this;
        }
        _0xed7a37(_0x1ff6fb, _0x4f3528);
        _0x1ff6fb.prototype.PlayStop = function () {
          var _0x2dfe65 = _0x26fe6f(_0x352743().mark(function _0xeeb4ae(_0x90665f) {
            return _0x352743().wrap(function (_0x524e03) {
              for (;;) {
                switch (_0x524e03.prev = _0x524e03.next) {
                  case 0x0:
                    if (undefined === _0x90665f) {
                      _0x90665f = false;
                    }
                    this.SetNodeActivity(true);
                    this.SetSpineNodeActivity(true);
                    if (!_0x90665f) {
                      _0x524e03.next = 0x8;
                      break;
                    }
                    _0x524e03.next = 0x6;
                    return this.PlayAnimation(_0xcba612.SCATTER_SPINE_ANIM_NAME.TRACK_2_EAR);
                  case 0x6:
                    _0x524e03.next = 0xa;
                    break;
                  case 0x8:
                    _0x524e03.next = 0xa;
                    return this.PlayAnimation("Scatter_Stop");
                  case 0xa:
                  case "end":
                    return _0x524e03.stop();
                }
              }
            }, _0xeeb4ae, this);
          }));
          return function (_0x42e7a4) {
            return _0x2dfe65.apply(this, arguments);
          };
        }();
        return _0x1ff6fb;
      }(_0x1b3034)) || _0x35212e;
      var _0x1c837c;
      var _0x140d73;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, '16119pm4FxCfKKoWvMeS8GP', 'ScatterSpine', undefined);
      var _0x2e2cda = ["default", "default", "default"];
      var _0x34f26a = _0x3e9873.ccclass;
      _0x1c837c = _0x34f26a('ScatterSpine');
      var _0x37d95b = _0x1c837c(_0x140d73 = function (_0xd0a230) {
        function _0x44aceb() {
          return _0xd0a230.apply(this, arguments) || this;
        }
        _0xed7a37(_0x44aceb, _0xd0a230);
        var _0x4a3d1b = _0x44aceb.prototype;
        _0x4a3d1b.PlayScatterTurn = function () {
          var _0x3fcfef = _0x26fe6f(_0x352743().mark(function _0x4e4a57(_0x124ffa, _0x1bb68d) {
            return _0x352743().wrap(function (_0x195cc7) {
              for (;;) {
                switch (_0x195cc7.prev = _0x195cc7.next) {
                  case 0x0:
                    this.SetNodeActivity(true);
                    _0x195cc7.next = 0x5;
                    return this.PlayAnimation(_0xcba612.SCATTER_SPINE_ANIM_NAME.SCATTER_TURN);
                  case 0x5:
                  case "end":
                    return _0x195cc7.stop();
                }
              }
            }, _0x4e4a57, this);
          }));
          return function (_0x2cf81c, _0x4dbe87) {
            return _0x3fcfef.apply(this, arguments);
          };
        }();
        _0x4a3d1b.PlayScatterTurn2 = function () {
          var _0x414685 = _0x26fe6f(_0x352743().mark(function _0x102840(_0x304379) {
            return _0x352743().wrap(function (_0x4dc858) {
              for (;;) {
                switch (_0x4dc858.prev = _0x4dc858.next) {
                  case 0x0:
                    this.SetNodeActivity(true);
                    _0x4dc858.next = 0x3;
                    return this.PlayAnimation(_0xcba612.SCATTER_SPINE_ANIM_NAME.SCATTER_TURN_2);
                  case 0x3:
                    if (_0x304379) {
                      _0x304379();
                    }
                  case 0x4:
                  case "end":
                    return _0x4dc858.stop();
                }
              }
            }, _0x102840, this);
          }));
          return function (_0x1de3c6) {
            return _0x414685.apply(this, arguments);
          };
        }();
        _0x4a3d1b.PlayScatterSwitch = function () {
          var _0x1f8cc3 = _0x26fe6f(_0x352743().mark(function _0x2ca6e1(_0x55166f) {
            return _0x352743().wrap(function (_0x31b0e2) {
              for (;;) {
                switch (_0x31b0e2.prev = _0x31b0e2.next) {
                  case 0x0:
                    _0x31b0e2.next = 0x2;
                    return this.PlayAnimation(_0xcba612.SCATTER_SPINE_ANIM_NAME.SCATTER_SWITCH);
                  case 0x2:
                    if (_0x55166f) {
                      _0x55166f();
                    }
                    this.PlayAnimation(_0xcba612.SCATTER_SPINE_ANIM_NAME.SCATTER_IDLE_BACK);
                  case 0x4:
                  case "end":
                    return _0x31b0e2.stop();
                }
              }
            }, _0x2ca6e1, this);
          }));
          return function (_0x18068a) {
            return _0x1f8cc3.apply(this, arguments);
          };
        }();
        _0x4a3d1b.PlaySwitchIdle = function () {
          this.PlayAnimation(_0xcba612.SCATTER_SPINE_ANIM_NAME.SCATTER_IDLE_BACK);
        };
        _0x4a3d1b.SetScatterSkin = function (_0x3c5339) {
          this.SetSkin(_0x2e2cda[_0x3c5339]);
        };
        _0x4a3d1b.ResetScatterSkin = function (_0x3a0466) {
          if (undefined === _0x3a0466) {
            _0x3a0466 = "default";
          }
          this.SetSkin(_0x3a0466);
        };
        _0x4a3d1b.SetFgScatterAnim = function (_0x133be5) {
          if (undefined === _0x133be5) {
            _0x133be5 = false;
          }
          if (_0x133be5) {
            this.PlayAnimation(_0xcba612.SCATTER_SPINE_ANIM_NAME.TRACK_2_EAR);
          } else {
            this.PlayAnimation(_0xcba612.SCATTER_SPINE_ANIM_NAME.SCATTER_IDLE);
          }
        };
        _0x4a3d1b.PlayScatterRing = function () {
          var _0x829984 = _0x26fe6f(_0x352743().mark(function _0x3006fb() {
            return _0x352743().wrap(function (_0x48c47c) {
              for (;;) {
                switch (_0x48c47c.prev = _0x48c47c.next) {
                  case 0x0:
                    _0x48c47c.next = 0x2;
                    return this.PlayAnimation(_0xcba612.SCATTER_SPINE_ANIM_NAME.WIN);
                  case 0x2:
                    this.PlayAnimation(_0xcba612.SCATTER_SPINE_ANIM_NAME.WIN);
                  case 0x3:
                  case "end":
                    return _0x48c47c.stop();
                }
              }
            }, _0x3006fb, this);
          }));
          return function () {
            return _0x829984.apply(this, arguments);
          };
        }();
        _0x4a3d1b.GetAnimationTime = function (_0x9364d4, _0xbe76b5) {
          if (undefined === _0xbe76b5) {
            _0xbe76b5 = this.m_spine;
          }
          _0xbe76b5.node.parent.active = true;
          var _0x456894 = _0xbe76b5.findAnimation(_0x9364d4).duration;
          _0xbe76b5.node.parent.active = false;
          return _0x456894;
        };
        return _0x44aceb;
      }(_0x4d51fe)) || _0x140d73;
      var _0x112ef1;
      var _0x2889fa;
      var _0x55aded;
      var _0x5bc903;
      var _0x2a846f;
      var _0x4a98d2;
      var _0x58cc34;
      var _0x443786;
      var _0x4b869d;
      var _0x3493e0;
      var _0x21384d;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "20ad5yd515AQ4AqANETx5ng", "CoinController_N_Spine", undefined);
      var _0x39c5cc = _0x3e9873.ccclass;
      var _0x627b3d = _0x3e9873.property;
      _0x112ef1 = _0x39c5cc('CoinController_N_Spine');
      _0x2889fa = _0x627b3d({
        'type': _0x2855cd
      });
      _0x55aded = _0x627b3d({
        'type': _0x2855cd,
        'tooltip': "乘倍文字(小的, 給一般金幣用)"
      });
      _0x5bc903 = _0x627b3d({
        'type': _0x31b16c,
        'tooltip': "乘倍圖(大的, 給紅色金幣用)"
      });
      _0x2a846f = _0x627b3d({
        'type': _0x31b16c
      });
      _0x58cc34 = function (_0x550f81) {
        function _0x491ddf() {
          var _0x42ec66;
          var _0x8a4390 = arguments.length;
          var _0x6fd804 = new Array(_0x8a4390);
          for (var _0x6dacbb = 0x0; _0x6dacbb < _0x8a4390; _0x6dacbb++) {
            _0x6fd804[_0x6dacbb] = arguments[_0x6dacbb];
          }
          _0xec902e(_0x42ec66 = _0x550f81.call.apply(_0x550f81, [this].concat(_0x6fd804)) || this, "m_numLabel", _0x443786, _0x11be3a(_0x42ec66));
          _0xec902e(_0x42ec66, "m_multiplyLabel", _0x4b869d, _0x11be3a(_0x42ec66));
          _0xec902e(_0x42ec66, "m_multiplyImg", _0x3493e0, _0x11be3a(_0x42ec66));
          _0xec902e(_0x42ec66, "m_staticSprite", _0x21384d, _0x11be3a(_0x42ec66));
          _0x42ec66.m_curValue = 0x0;
          _0x42ec66.m_curShowValue = 0x0;
          _0x42ec66.m_curMulti = 0x0;
          _0x42ec66.m_curJpType = 0x0;
          return _0x42ec66;
        }
        _0xed7a37(_0x491ddf, _0x550f81);
        var _0x43c37a = _0x491ddf.prototype;
        _0x43c37a.ShowStaticSprite = function () {
          this.m_staticSprite.node.active = true;
        };
        _0x43c37a.HideStaticSprite = function () {
          this.m_staticSprite.node.active = false;
        };
        _0x43c37a.ShowNum = function () {
          this.m_numLabel.node.active = true;
          this.m_numLabel.getComponent(_0x4bf747).play('JP_Num');
        };
        _0x43c37a.HideNum = function () {
          this.m_numLabel.node.active = false;
        };
        _0x43c37a.ShowMulti = function () {
          this.m_multiplyLabel.node.active = true;
        };
        _0x43c37a.HideMulti = function () {
          this.m_multiplyLabel.node.active = false;
        };
        _0x43c37a.ShowMultiImg = function () {
          this.m_multiplyImg.node.active = true;
        };
        _0x43c37a.HideMultiImg = function () {
          this.m_multiplyImg.node.active = false;
        };
        _0x43c37a.SetJpType = function (_0x145f87) {
          this.SetSkin(_0xcba612.JP_SKIN_STRING[_0x145f87]);
        };
        _0x43c37a.SetMultiplyLabel = function (_0x57a049) {
          if (_0x57a049 > 0x0) {
            this.ShowMulti();
            this.m_curMulti = _0x57a049;
            this.m_multiplyLabel.string = 'X' + _0x57a049.toString();
          } else {
            this.HideMulti();
          }
        };
        _0x43c37a.SetMultiplyImgVisible = function (_0x31357f) {
          if (_0x31357f) {
            this.ShowMultiImg();
          } else {
            this.HideMultiImg();
          }
        };
        _0x43c37a.SuckCoin = function (_0x4a8cda) {
          this.m_curValue = _0x14c118.strip(this.m_curValue + _0x4a8cda.Value);
          this.SetNumLabel_n_Value(this.m_curValue);
        };
        _0x43c37a.SetNumLabel_n_Value = function (_0xadef74) {
          _0xadef74 = _0x14c118.strip(_0xadef74);
          this.ShowNum();
          this.m_curValue = _0xadef74;
          var _0x3e6f1f = '';
          if (_0xadef74 >= _0xcba612.MILLION) {
            var _0xcee2fc = _0x14c118.divide(_0xadef74, _0xcba612.MILLION).toString();
            var _0x414658 = _0xcee2fc.indexOf('.');
            _0x414658 = -0x1 === _0x414658 ? _0xcee2fc.length : _0x414658 + 0x3 > _0xcee2fc.length ? _0x414658 + 0x2 : _0x414658 + 0x3;
            _0x3e6f1f = _0xcee2fc.substring(0x0, _0x414658);
            _0x3e6f1f += 'M';
          } else {
            if (_0xadef74 >= _0xcba612.THOUSAND) {
              var _0x40403f = _0x14c118.divide(_0xadef74, _0xcba612.THOUSAND).toString();
              var _0x1deb1b = _0x40403f.indexOf('.');
              _0x1deb1b = -0x1 === _0x1deb1b ? _0x40403f.length : _0x1deb1b + 0x3 > _0x40403f.length ? _0x1deb1b + 0x2 : _0x1deb1b + 0x3;
              _0x3e6f1f = _0x40403f.substring(0x0, _0x1deb1b);
              _0x3e6f1f += 'K';
            } else {
              _0x3e6f1f = _0xadef74.toString();
            }
          }
          this.m_numLabel.string = _0x3e6f1f;
        };
        _0x43c37a.ClearJpLabel = function () {
          this.m_numLabel.string = '';
        };
        _0x43c37a.PlayNumIdle = function () {
          this.SetSpineNodeActivity(true);
          this.PlayAnimation("Num", this.m_spine, true);
        };
        _0x43c37a.PlayNumStart = function () {
          var _0x26852f = _0x26fe6f(_0x352743().mark(function _0x3515f2() {
            return _0x352743().wrap(function (_0x2e542c) {
              for (;;) {
                switch (_0x2e542c.prev = _0x2e542c.next) {
                  case 0x0:
                    this.SetSpineNodeActivity(true);
                    _0x2e542c.next = 0x3;
                    return this.PlayAnimation("Num_Start");
                  case 0x3:
                    this.PlayNumIdle();
                  case 0x4:
                  case "end":
                    return _0x2e542c.stop();
                }
              }
            }, _0x3515f2, this);
          }));
          return function () {
            return _0x26852f.apply(this, arguments);
          };
        }();
        _0x43c37a.PlayJpMultiIdle = function () {
          this.SetSpineNodeActivity(true);
          this.PlayAnimation("JP_Multiply", this.m_spine, true);
        };
        _0x43c37a.PlayJpMultiStart = function () {
          var _0x40fb6c = _0x26fe6f(_0x352743().mark(function _0x2ab7cd() {
            return _0x352743().wrap(function (_0x5c59d1) {
              for (;;) {
                switch (_0x5c59d1.prev = _0x5c59d1.next) {
                  case 0x0:
                    this.SetSpineNodeActivity(true);
                    _0x5c59d1.next = 0x3;
                    return this.PlayAnimation("JP_Multiply_Start");
                  case 0x3:
                    this.PlayJpMultiIdle();
                  case 0x4:
                  case "end":
                    return _0x5c59d1.stop();
                }
              }
            }, _0x2ab7cd, this);
          }));
          return function () {
            return _0x40fb6c.apply(this, arguments);
          };
        }();
        _0x43c37a.PlayJpMultiNumIdle = function () {
          this.SetSpineNodeActivity(true);
          this.PlayAnimation("JP_Multiply_Num", this.m_spine, true);
        };
        _0x43c37a.PlayJpMultiNumStart = function () {
          var _0x441da7 = _0x26fe6f(_0x352743().mark(function _0x4d12a2() {
            return _0x352743().wrap(function (_0x2f5205) {
              for (;;) {
                switch (_0x2f5205.prev = _0x2f5205.next) {
                  case 0x0:
                    this.SetSpineNodeActivity(true);
                    _0x2f5205.next = 0x3;
                    return this.PlayAnimation("JP_Multiply_Num_Start");
                  case 0x3:
                    this.PlayJpMultiNumIdle();
                  case 0x4:
                  case "end":
                    return _0x2f5205.stop();
                }
              }
            }, _0x4d12a2, this);
          }));
          return function () {
            return _0x441da7.apply(this, arguments);
          };
        }();
        _0x43c37a.PlayJpIdle = function () {
          var _0x4f2814 = _0x26fe6f(_0x352743().mark(function _0x1d3f45() {
            return _0x352743().wrap(function (_0x5e42aa) {
              for (;;) {
                switch (_0x5e42aa.prev = _0x5e42aa.next) {
                  case 0x0:
                    this.SetSpineNodeActivity(true);
                    this.PlayAnimation('JP');
                  case 0x2:
                  case 'end':
                    return _0x5e42aa.stop();
                }
              }
            }, _0x1d3f45, this);
          }));
          return function () {
            return _0x4f2814.apply(this, arguments);
          };
        }();
        _0x43c37a.ClearAll = function () {
          this.PlayNumStart();
          this.SetJpType(0x0);
          this.m_curValue = 0x0;
          this.m_numLabel.string = '';
          this.m_multiplyLabel.string = '';
        };
        return _0x491ddf;
      }(_0x304e58);
      _0x443786 = _0x196fb6(_0x58cc34.prototype, "m_numLabel", [_0x2889fa], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4b869d = _0x196fb6(_0x58cc34.prototype, 'm_multiplyLabel', [_0x55aded], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3493e0 = _0x196fb6(_0x58cc34.prototype, "m_multiplyImg", [_0x5bc903], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x21384d = _0x196fb6(_0x58cc34.prototype, "m_staticSprite", [_0x2a846f], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x1a5c29 = _0x112ef1(_0x4a98d2 = _0x58cc34) || _0x4a98d2;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "dba26vXLuFMLoy2uJ+FHoci", 'BaseNodePool', undefined);
      var _0x3c8fad = function () {
        function _0x443fc6() {
          this.m_Prefabs = [];
          this.m_symbolEffects = [];
          if (_0x443fc6._instance) {
            throw new Error("Error: Instantiation failed: Use NodePool.getInstance() instead of new.");
          }
          _0x443fc6._instance = this;
        }
        _0x443fc6.getInstance = function () {
          if (!this._instance) {
            this._instance = new _0x443fc6();
          }
          return _0x443fc6._instance;
        };
        var _0x204ff7 = _0x443fc6.prototype;
        _0x204ff7.Init = function () {
          this.m_Prefabs.length = _0xcba612.EFFECT_TYPES;
          this.m_symbolEffects.length = _0xcba612.EFFECT_TYPES;
        };
        _0x204ff7.SetPrefabs = function (_0x4bd70a, _0x28d24b) {
          var _0x1bc7b9 = new Array();
          for (var _0x45ca07 = 0x0; _0x45ca07 < _0x4bd70a.length; ++_0x45ca07) {
            _0x1bc7b9.push(new Array());
          }
          this.m_Prefabs[_0x28d24b] = _0x4bd70a;
          this.m_symbolEffects[_0x28d24b] = _0x1bc7b9;
        };
        _0x204ff7.GetNode = function (_0x54688b, _0x275caa) {
          return this.m_symbolEffects[_0x54688b][_0x275caa].length > 0x0 ? this.m_symbolEffects[_0x54688b][_0x275caa].shift() : this.m_Prefabs[_0x54688b][_0x275caa] ? _0x2b0134(this.m_Prefabs[_0x54688b][_0x275caa]) : undefined;
        };
        _0x204ff7.ReturnNode = function (_0xd1213e, _0x235c73, _0x128fb0) {
          if (this.m_symbolEffects[_0xd1213e][_0x235c73]) {
            this.m_symbolEffects[_0xd1213e][_0x235c73].push(_0x128fb0);
          }
        };
        return _0x443fc6;
      }();
      var _0x321c6e;
      var _0x1bd2b4;
      var _0x16e3ef;
      var _0x3dc88b;
      var _0x31904e;
      _0x3c8fad._instance = new _0x3c8fad();
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "500a21vXxBDGYjrn4Tp6fT+", "SymbolEffectSpine", undefined);
      var _0x5ecf42 = _0x3e9873.ccclass;
      var _0x440c86 = _0x3e9873.property;
      _0x321c6e = _0x5ecf42("SymbolEffectSpine");
      _0x1bd2b4 = _0x440c86({
        'type': _0x5c9b0d(_0x32738d),
        'tooltip': '編號'
      });
      _0x3dc88b = function (_0x286dbd) {
        function _0x1a2d9b() {
          var _0x29faf0;
          var _0x3c7c33 = arguments.length;
          var _0x34c624 = new Array(_0x3c7c33);
          for (var _0x4e485d = 0x0; _0x4e485d < _0x3c7c33; _0x4e485d++) {
            _0x34c624[_0x4e485d] = arguments[_0x4e485d];
          }
          _0xec902e(_0x29faf0 = _0x286dbd.call.apply(_0x286dbd, [this].concat(_0x34c624)) || this, "m_addEffectType", _0x31904e, _0x11be3a(_0x29faf0));
          return _0x29faf0;
        }
        _0xed7a37(_0x1a2d9b, _0x286dbd);
        var _0x255825 = _0x1a2d9b.prototype;
        _0x255825.ClearTrackZero = function () {
          this.m_spine.clearTrack(0x0);
        };
        _0x255825.PlayWin = function () {
          var _0x5465d4 = _0x26fe6f(_0x352743().mark(function _0x2d3b9d(_0x43c5ac, _0x1b6725) {
            return _0x352743().wrap(function (_0x1b4f05) {
              for (;;) {
                switch (_0x1b4f05.prev = _0x1b4f05.next) {
                  case 0x0:
                    if (undefined === _0x1b6725) {
                      _0x1b6725 = false;
                    }
                    this.SetNodeActivity(true);
                    if (!_0x1b6725) {
                      _0x1b4f05.next = 0x7;
                      break;
                    }
                    this.PlayAnimation(_0xcba612.SymbolWinName, this.m_spine, _0x1b6725);
                    _0x1b4f05.next = 0xa;
                    break;
                  case 0x7:
                    _0x1b4f05.next = 0x9;
                    return this.PlayAnimation(_0xcba612.SymbolWinName);
                  case 0x9:
                    this.SetNodeActivity(false);
                  case 0xa:
                  case 'end':
                    return _0x1b4f05.stop();
                }
              }
            }, _0x2d3b9d, this);
          }));
          return function (_0x851955, _0x4f5234) {
            return _0x5465d4.apply(this, arguments);
          };
        }();
        _0x255825.PlaySwitch = function () {
          var _0x12f2ff = _0x26fe6f(_0x352743().mark(function _0x83fcbc() {
            return _0x352743().wrap(function (_0x615dc) {
              for (;;) {
                switch (_0x615dc.prev = _0x615dc.next) {
                  case 0x0:
                    this.SetNodeActivity(true);
                    _0x27c287.Play(_0xcba612.AudioClips.scatter_switch);
                    _0x615dc.next = 0x4;
                    return this.PlayAnimation("Switch");
                  case 0x4:
                    this.SetNodeActivity(false);
                  case 0x5:
                  case "end":
                    return _0x615dc.stop();
                }
              }
            }, _0x83fcbc, this);
          }));
          return function () {
            return _0x12f2ff.apply(this, arguments);
          };
        }();
        _0x4b136a(_0x1a2d9b, [{
          'key': 'AddEffectType',
          'get': function () {
            return this.m_addEffectType;
          }
        }]);
        return _0x1a2d9b;
      }(_0x1b3034);
      _0x31904e = _0x196fb6(_0x3dc88b.prototype, 'm_addEffectType', [_0x1bd2b4], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': null
      });
      var _0x44aa83 = _0x321c6e(_0x16e3ef = _0x3dc88b) || _0x16e3ef;
      var _0x3dc59f;
      var _0x195981;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "62fdcbLvkBArZEWf6PJvVHD", "SingleCell", undefined);
      var _0x722235 = _0x3e9873.ccclass;
      _0x3dc59f = _0x722235('SingleCell');
      var _0x244110 = _0x3dc59f(_0x195981 = function () {
        function _0x3e1d5c(_0x353d05, _0xe5edb2, _0x23d5c4, _0xf2c8da) {
          this.m_parentNode = null;
          this.m_symbolSprite = null;
          this.m_jpSprite = null;
          this.m_label = null;
          this.m_thisNode = null;
          this.m_gameView = null;
          this.m_value = 0x0;
          this.m_name = '';
          this.m_basePos = _0x1536ed(0x0, 0x0, 0x0);
          this.m_parentNode = _0x353d05;
          this.m_gameView = _0xe5edb2;
          var _0x2ba101 = new _0x84773f();
          _0x2ba101.name = _0x23d5c4 + _0xf2c8da.toString();
          this.Name = _0x2ba101.name;
          _0x2ba101.layer = _0xd8402d.Layer2D;
          var _0x3e8d1a = new _0x84773f();
          _0x3e8d1a.name = 'Sprite';
          _0x3e8d1a.layer = _0xd8402d.Layer2D;
          var _0x284536 = _0x3e8d1a.addComponent(_0x31b16c);
          _0x284536.type = _0x31b16c.Type.SIMPLE;
          _0x284536.sizeMode = _0x31b16c.SizeMode.RAW;
          _0x284536.trim = false;
          _0x2ba101.addChild(_0x3e8d1a);
          this.m_symbolSprite = _0x284536;
          var _0x490d76 = new _0x84773f();
          _0x490d76.name = "JP_Sprite";
          _0x490d76.layer = _0xd8402d.Layer2D;
          var _0x323292 = _0x490d76.addComponent(_0x31b16c);
          _0x323292.type = _0x31b16c.Type.SIMPLE;
          _0x323292.sizeMode = _0x31b16c.SizeMode.RAW;
          _0x323292.trim = false;
          _0x2ba101.addChild(_0x490d76);
          this.m_jpSprite = _0x323292;
          var _0x3a8fc5 = new _0x84773f();
          _0x3a8fc5.name = "Label";
          _0x3a8fc5.layer = _0xd8402d.Layer2D;
          var _0x542993 = _0x3a8fc5.addComponent(_0x2855cd);
          _0x542993.font = this.m_gameView.Font;
          _0x542993.fontSize = 0x20;
          _0x542993.spacingX = -0xa;
          _0x2ba101.addChild(_0x3a8fc5);
          this.m_label = _0x542993;
          this.m_parentNode.addChild(_0x2ba101);
          this.m_thisNode = _0x2ba101;
        }
        var _0x326a9c = _0x3e1d5c.prototype;
        _0x326a9c.SetInfo = function (_0x171d3e) {
          this.ChangeSymbol(_0x171d3e);
          if (_0x171d3e.Symbol === _0xcba612.Symbol.Coin) {
            if (_0x171d3e.JpType > 0x0) {
              ;
            } else {
              if (_0x171d3e.Value) {
                this.m_label.node.active = false;
                _0x171d3e.Value = _0x14c118.strip(_0x171d3e.Value);
                this.m_value = _0x171d3e.Value;
                var _0x392469 = '';
                if (_0x171d3e.Value >= _0xcba612.MILLION) {
                  var _0x4c27db = _0x14c118.divide(_0x171d3e.Value, _0xcba612.MILLION).toString();
                  var _0x143955 = _0x4c27db.indexOf('.');
                  _0x143955 = -0x1 === _0x143955 ? _0x4c27db.length : _0x143955 + 0x3 > _0x4c27db.length ? _0x143955 + 0x2 : _0x143955 + 0x3;
                  _0x392469 = _0x4c27db.substring(0x0, _0x143955);
                  _0x392469 += 'M';
                } else {
                  if (_0x171d3e.Value >= _0xcba612.THOUSAND) {
                    var _0x4f7973 = _0x14c118.divide(_0x171d3e.Value, _0xcba612.THOUSAND).toString();
                    var _0x34ca99 = _0x4f7973.indexOf('.');
                    _0x34ca99 = -0x1 === _0x34ca99 ? _0x4f7973.length : _0x34ca99 + 0x3 > _0x4f7973.length ? _0x34ca99 + 0x2 : _0x34ca99 + 0x3;
                    _0x392469 = _0x4f7973.substring(0x0, _0x34ca99);
                    _0x392469 += 'K';
                  } else {
                    _0x392469 = _0x171d3e.Value.toString();
                  }
                }
                this.m_label.string = _0x392469;
              }
            }
          } else {
            this.m_jpSprite.spriteFrame = null;
            this.m_label.string = '';
          }
          this.m_thisNode.setPosition(this.CalPosY());
        };
        _0x326a9c.ClearAll = function () {
          this.m_jpSprite.spriteFrame = null;
          this.m_label.string = '';
          this.m_label.node.active = true;
        };
        _0x326a9c.ChangeSymbol = function (_0x58082d) {
          if (_0x58082d.Symbol < _0xcba612.Symbol.Scatter_Blue) {
            this.SetSymbolDark(true);
          } else {
            this.SetSymbolDark(false);
          }
          if (this.m_gameView.IsFreeGame && _0x58082d.Symbol > _0xcba612.Symbol.WILD && _0x58082d.Symbol != _0xcba612.Symbol.Coin) {
            this.m_symbolSprite.spriteFrame = this.m_gameView.GetSymbolSpriteFrame(_0x58082d.Symbol + _0xcba612.SYMBOL_IMG_REPLACE_OFFSET);
          } else {
            this.m_symbolSprite.spriteFrame = this.m_gameView.GetSymbolSpriteFrame(_0x58082d.Symbol);
          }
        };
        _0x326a9c.SetPosition = function (_0x24cafd) {
          this.m_basePos = _0x24cafd;
          var _0x162fcd = this.CalPosY();
          this.m_thisNode.setPosition(_0x162fcd);
        };
        _0x326a9c.CalPosY = function (_0x1673c0) {
          if (undefined === _0x1673c0) {
            _0x1673c0 = 0x0;
          }
          var _0x5abb82 = this.m_basePos.clone();
          _0x5abb82.y += (0 - _0x1673c0 + 0.5) * _0xcba612.SymbolHeight;
          return _0x5abb82;
        };
        _0x326a9c.HideSymbol = function () {
          this.m_thisNode.active = false;
        };
        _0x326a9c.ShowSymbol = function () {
          this.m_thisNode.active = true;
        };
        _0x326a9c.SetSymbolDark = function (_0x2f3db9) {
          var _0x32d730 = _0x2f3db9 ? _0xcba612.Color.Dark : _0xcba612.Color.Light;
          this.m_symbolSprite.color = _0x32d730;
        };
        _0x4b136a(_0x3e1d5c, [{
          'key': 'ThisNode',
          'get': function () {
            return this.m_thisNode;
          }
        }, {
          'key': "Name",
          'get': function () {
            return this.m_name;
          },
          'set': function (_0x192e84) {
            this.m_name = _0x192e84;
          }
        }]);
        return _0x3e1d5c;
      }()) || _0x195981;
      var _0x2ab0ad;
      var _0x5dec1c;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "51ec67EFlxHkriUSNg+DvtC", 'SingleSlotReels', undefined);
      var _0x4447cb = _0x3e9873.ccclass;
      _0x2ab0ad = _0x4447cb("SingleSlotReel");
      var _0xa6820d = _0x2ab0ad(_0x5dec1c = function (_0x5e5323) {
        function _0xc48271() {
          var _0x4e1bd6;
          var _0x3eb32e = arguments.length;
          var _0x5ad763 = new Array(_0x3eb32e);
          for (var _0x286f63 = 0x0; _0x286f63 < _0x3eb32e; _0x286f63++) {
            _0x5ad763[_0x286f63] = arguments[_0x286f63];
          }
          (_0x4e1bd6 = _0x5e5323.call.apply(_0x5e5323, [this].concat(_0x5ad763)) || this).m_isLoadingComplete = false;
          _0x4e1bd6.m_viewSize = null;
          _0x4e1bd6.m_allColumns = [];
          _0x4e1bd6.m_totalLength = null;
          _0x4e1bd6.m_spinBufferTime01 = 0.1;
          _0x4e1bd6.m_spinBufferTime02 = 0.1;
          _0x4e1bd6.m_riseTime = 0x0;
          _0x4e1bd6.m_upLength = 0x0;
          _0x4e1bd6.m_downLength = 0xf;
          _0x4e1bd6.m_spinTime = 0.25;
          _0x4e1bd6.m_spinDelayTime = 0x0;
          _0x4e1bd6.m_time = 0x0;
          _0x4e1bd6.m_stopTime = 0x0;
          _0x4e1bd6.m_reelStopTime = null;
          _0x4e1bd6.m_reelPreTime = null;
          _0x4e1bd6.m_isClickStopBtn = false;
          _0x4e1bd6.m_comparePos = [];
          _0x4e1bd6.m_reelXPos = 0x0;
          _0x4e1bd6.m_reelYPos = [];
          _0x4e1bd6.m_isNotChangeSymbolThisRound = {};
          _0x4e1bd6.m_isStop = false;
          _0x4e1bd6.m_isChangeToFinalSymbol = [false, false, false];
          _0x4e1bd6.m_nearWinNowCol = -0x1;
          _0x4e1bd6.m_nearWinMoreSpin = 0x6;
          _0x4e1bd6.m_nearWinLock = false;
          _0x4e1bd6.m_isScatter = false;
          _0x4e1bd6.m_isCoin = false;
          _0x4e1bd6.m_nearWinStartFunc = null;
          _0x4e1bd6.m_nearWinEndFunc = null;
          _0x4e1bd6.m_symbolInfo = undefined;
          _0x4e1bd6.m_curNearWinSymbols = [];
          _0x4e1bd6.m_isPlayStopSound = false;
          _0x4e1bd6.m_isPlayStopEffect = false;
          _0x4e1bd6.m_reelSoundId = null;
          _0x4e1bd6.m_nearWinSoundId = [-0x1, -0x1, -0x1, -0x1, -0x1, -0x1];
          _0x4e1bd6.m_gameView = null;
          _0x4e1bd6.m_hasPlayNearWin = false;
          _0x4e1bd6.m_col = null;
          _0x4e1bd6.m_row = null;
          return _0x4e1bd6;
        }
        _0xed7a37(_0xc48271, _0x5e5323);
        var _0x2755a6 = _0xc48271.prototype;
        _0x2755a6.onLoad = function () {
          this.m_viewSize = this.node.getComponent(_0x21d275).contentSize;
          for (var _0x4575b7 = 0x0; _0x4575b7 < 0x3; ++_0x4575b7) {
            this.m_comparePos.push(this.m_viewSize.height * _0x4575b7);
            this.m_reelYPos.push(this.m_viewSize.height * (_0x4575b7 - 0x1 - 0.5));
            this.m_allColumns[_0x4575b7].SetPosition(_0x1536ed(this.ReelXPos, this.m_reelYPos[_0x4575b7]));
          }
          this.m_totalLength = this.m_viewSize.height * 0x3;
        };
        _0x2755a6.Init = function (_0x4a946e, _0x39f2ee, _0x2be779, _0x339446) {
          this.m_gameView = _0x4a946e;
          this.m_symbolInfo = _0x339446;
          this.m_col = _0x39f2ee;
          this.m_row = _0x2be779;
          this.CreateSymbol(this.m_col);
        };
        _0x2755a6.CreateSymbol = function (_0x31c2d2) {
          for (var _0x3b6025 = 0x0; _0x3b6025 < 0x3; ++_0x3b6025) {
            this.m_allColumns.push(null);
          }
          for (var _0x5a81ee = 2; _0x5a81ee >= 0x0; --_0x5a81ee) {
            var _0x287748 = _0xcba612.NODE_PREFIX_NAME[_0x5a81ee];
            var _0x3b9860 = new _0x244110(this.node, this.m_gameView, _0x287748, _0x31c2d2);
            this.m_allColumns[_0x5a81ee] = _0x3b9860;
          }
          this.m_isLoadingComplete = true;
        };
        _0x2755a6.SetPlateSymbol = function (_0x121cf5) {
          this.m_reelStopTime = null;
          this.m_reelPreTime = null;
          this.m_allColumns[0x1].SetInfo(_0x121cf5);
          for (var _0x2dab1d = 0x0; _0x2dab1d < 0x3; ++_0x2dab1d) {
            this.m_allColumns[_0x2dab1d].SetPosition(_0x1536ed(this.ReelXPos, this.m_reelYPos[_0x2dab1d]));
          }
        };
        _0x2755a6.RandomSymbolInfo = function () {
          var _0x16a6d4 = new _0x57bf99();
          var _0x2bdd96 = Math.random();
          if (_0x2bdd96 < _0xcba612.FAKE_COIN_ODD) {
            if ((_0x2bdd96 = Math.random()) < _0xcba612.FAKE_SCATTER_ODD) {
              var _0x27e2b1 = Math.floor(Math.random() * this.m_gameView.CurScatters.length);
              _0x16a6d4.Symbol = this.m_gameView.CurScatters[_0x27e2b1];
            } else {
              _0x16a6d4.Symbol = _0xcba612.Symbol.Coin;
              _0x2bdd96 = Math.random();
              if (_0x16a6d4.Symbol < _0xcba612.FAKE_JP_ODD[0x0]) {
                if (_0x16a6d4.Symbol < _0xcba612.FAKE_JP_ODD[0x1]) {
                  if (_0x16a6d4.Symbol < _0xcba612.FAKE_JP_ODD[0x2]) {
                    _0x16a6d4.JpType = 0x2;
                  } else {
                    _0x16a6d4.JpType = 0x1;
                  }
                } else {
                  _0x16a6d4.JpType = 0x0;
                }
              } else {
                var _0x170830 = this.m_gameView.SpinAck.FolderIndex;
                var _0x5c6865 = this.m_gameView.CoinOdds[_0x170830].Col.length - 0x3;
                var _0x1ee02a = Math.floor(Math.random() * _0x5c6865);
                var _0x66a28a = this.m_gameView.CoinOdds[_0x170830].Col[_0x1ee02a] * _0x1e89f8.GetNowBetValue();
                _0x16a6d4.Value = _0x66a28a;
              }
            }
          } else {
            _0x16a6d4.Symbol = Math.floor(Math.random() * _0xcba612.Symbol.WILD);
          }
          return _0x16a6d4;
        };
        _0x2755a6.StartSpin = function () {
          this.Time = 0x0;
          this.m_stopTime = 0x0;
          this.m_isStop = false;
          this.m_isClickStopBtn = false;
          this.m_isPlayStopSound = false;
          this.m_isPlayStopEffect = false;
          this.m_hasPlayNearWin = false;
          this.m_nearWinNowCol = -0x1;
          this.IsScatter = false;
          this.IsCoin = false;
          this.m_reelStopTime = this.m_reelPreTime = null;
          this.m_isChangeToFinalSymbol = [false, false, false];
          for (var _0x2c1088 in this.m_isNotChangeSymbolThisRound) this.m_isNotChangeSymbolThisRound[_0x2c1088] = true;
        };
        _0x2755a6.ShowStopSymbolEffect = function () {
          var _0xab89e1 = _0x26fe6f(_0x352743().mark(function _0x55961f(_0x5385f1) {
            return _0x352743().wrap(function (_0x35e701) {
              for (;;) {
                switch (_0x35e701.prev = _0x35e701.next) {
                  case 0x0:
                    if (this.IsCoin && !this.m_isPlayStopEffect) {
                      _0x35e701.next = 0x2;
                      break;
                    }
                    return _0x35e701.abrupt("return");
                  case 0x2:
                    if (!this.m_gameView.HasPlayAddRound) {
                      this.m_gameView.HasPlayAddRound = true;
                      this.m_gameView.FgCounter.AddRound();
                    }
                    this.m_isPlayStopEffect = true;
                    this.m_gameView.SinglePlateMgr.CurCoinNum = this.m_gameView.SinglePlateMgr.CurCoinNum + 0x1;
                    this.m_gameView.FgCounter.AddCoinCount();
                    if (this.m_gameView.SinglePlateMgr.CurCoinNum === _0xcba612.FULL_PLATE_NUM) {
                      _0x27c287.Play(_0xcba612.AudioClips.Grand_lock);
                    }
                    if (!_0x5385f1) {
                      _0x35e701.next = 0xc;
                      break;
                    }
                    _0x35e701.next = 0xa;
                    return this.m_gameView.EffectPlate.FgStop(this.m_symbolInfo, this.m_col, this.m_row);
                  case 0xa:
                    _0x35e701.next = 0xe;
                    break;
                  case 0xc:
                    _0x35e701.next = 0xe;
                    return this.m_gameView.EffectPlate.FgStop(this.m_symbolInfo, this.m_col, this.m_row);
                  case 0xe:
                  case "end":
                    return _0x35e701.stop();
                }
              }
            }, _0x55961f, this);
          }));
          return function (_0x14b43a) {
            return _0xab89e1.apply(this, arguments);
          };
        }();
        _0x2755a6.PlayReelSound = function () {
          if (!this.m_isClickStopBtn) {
            if (this.m_symbolInfo.Symbol >= _0xcba612.Symbol.Scatter_Blue && this.m_symbolInfo.Symbol <= _0xcba612.Symbol.Coin_Green) {
              _0x27c287.Play(_0xcba612.AudioClips.scatter_stop);
            } else {
              _0x27c287.Play(_0xcba612.AudioClips.reel_stop);
            }
          }
        };
        _0x2755a6.ClickStopBtn = function () {
          if (0x0 !== this.m_stopTime) {
            this.m_isClickStopBtn = true;
            var _0x4b8473 = Math.ceil(this.Time / this.m_spinTime);
            var _0x40a3cf = ((_0x4b8473 = _0x4b8473 > 0x0 ? _0x4b8473 : 0x1) - 0x1) * this.m_spinTime;
            var _0x2c1389 = _0x14c118.strip(_0x40a3cf + this.m_spinTime);
            if (this.m_reelStopTime > _0x2c1389) {
              this.m_reelStopTime = _0x2c1389;
              this.m_reelPreTime = _0x40a3cf;
            }
            var _0x4b98d4 = _0x2c1389 + this.m_spinDelayTime + this.m_spinBufferTime01 + this.m_spinBufferTime02;
            if (this.m_stopTime > _0x4b98d4) {
              this.m_stopTime = _0x14c118.strip(_0x4b98d4);
            }
          }
        };
        _0x2755a6.Spin = function (_0x25720) {
          this.Time = _0x14c118.strip(this.Time + _0x25720);
          if (!this.m_isStop) {
            this.SpinAll();
            if (!(0x0 === this.m_stopTime || this.Time < this.m_stopTime)) {
              this.m_isStop = true;
              if (this.m_nearWinEndFunc) {
                this.m_nearWinEndFunc();
                this.m_nearWinEndFunc = this.m_nearWinStartFunc = null;
              }
              if (this.IsNearWin) {
                this.StopNearWinSound();
              }
              if (this.m_reelSoundId) {
                _0x27c287.Stop(this.m_reelSoundId);
                this.m_reelSoundId = null;
              }
            }
          }
        };
        _0x2755a6.StopNearWinSound = function () {
          for (var _0x48a671 = 0x0; _0x48a671 < this.m_nearWinSoundId.length; ++_0x48a671) {
            _0x27c287.Stop(this.m_nearWinSoundId[_0x48a671]);
            this.m_nearWinSoundId[_0x48a671] = -0x1;
          }
        };
        _0x2755a6.SpinAll = function () {
          if (!(this.m_gameView.SinglePlateMgr.CurCoinNum !== _0xcba612.FG_NEARWIN_NUM || this.m_hasPlayNearWin)) {
            _0x27c287.Play(_0xcba612.AudioClips.FG_near);
            this.m_hasPlayNearWin = true;
            this.m_stopTime = this.m_stopTime + this.m_nearWinMoreSpin * this.m_spinTime;
            this.m_reelPreTime = this.m_reelPreTime + this.m_nearWinMoreSpin * this.m_spinTime;
            this.m_reelStopTime = this.m_reelStopTime + this.m_nearWinMoreSpin * this.m_spinTime;
            this.m_gameView.EffectPlate.PlayNearWin(this.m_col, this.m_row);
          }
          var _0xcc5b7b = this.CalculateSpinPos(this.IsNearWin());
          for (var _0x509c93 = 0x0; _0x509c93 < 0x3; ++_0x509c93) {
            this.Spin_RealSpinMultiple(this.m_allColumns[_0x509c93], _0x509c93, _0xcc5b7b);
          }
        };
        _0x2755a6.Spin_RealSpinMultiple = function (_0xda806e, _0x28a589, _0x1cad3f) {
          var _0x1d516e = this.Time;
          var _0x7179f = this.m_reelStopTime;
          var _0x5efd54 = this.m_riseTime;
          var _0x35df71 = this.m_reelXPos;
          var _0x21e2cf = this.m_reelYPos[_0x28a589];
          if (_0x28a589 === _0xcba612.MIDDLE_PLATE_INDEX && _0x1d516e > _0x7179f + _0x5efd54 + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
            _0x21e2cf = this.m_reelYPos[_0x28a589];
            _0xda806e.SetPosition(_0x1536ed(_0x35df71, _0x21e2cf));
          }
          if (_0x1d516e < this.m_riseTime) {
            _0xda806e.SetPosition(_0x1536ed(_0x35df71, _0x21e2cf + this.m_upLength));
          } else {
            if (null === _0x7179f || _0x1d516e < _0x7179f + _0x5efd54) {
              var _0x30f5ae = this.CheckMoveLength(_0x1cad3f, this.m_comparePos[_0x28a589], _0xda806e, _0x28a589);
              _0xda806e.SetPosition(_0x1536ed(_0x35df71, _0x21e2cf - _0x30f5ae));
            } else {
              if (_0x1d516e < _0x7179f + _0x5efd54 + this.m_spinBufferTime01) {
                var _0x241827 = (_0x1d516e - _0x7179f - _0x5efd54) / this.m_spinBufferTime01 * this.m_downLength;
                _0xda806e.SetPosition(_0x1536ed(_0x35df71, _0x21e2cf - _0x241827));
                this.CheckChangeToFinalSymbol(_0xda806e, _0x28a589, true);
                this.ShowStopSymbolEffect(this.m_isClickStopBtn);
              } else {
                if (_0x1d516e < _0x7179f + _0x5efd54 + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
                  var _0x6e52ac = (_0x1d516e - _0x7179f - _0x5efd54 - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
                  _0xda806e.SetPosition(_0x1536ed(_0x35df71, _0x21e2cf - this.m_downLength + _0x6e52ac));
                  this.CheckChangeToFinalSymbol(_0xda806e, _0x28a589, true);
                } else {
                  this.CheckChangeToFinalSymbol(_0xda806e, _0x28a589, true);
                  _0xda806e.SetPosition(_0x1536ed(_0x35df71, _0x21e2cf));
                  this.CheckPlayStopSoundAndEffect();
                  this.ShowStopSymbolEffect(this.m_isClickStopBtn);
                }
              }
            }
          }
        };
        _0x2755a6.CheckMoveLength = function (_0x5c776f, _0x114214, _0x2cb20d, _0x478d51) {
          return _0x5c776f < _0x114214 ? _0x5c776f : (this.m_isNotChangeSymbolThisRound[_0x478d51] && _0x5c776f - _0x114214 < this.m_viewSize.height ? (this.ChangeSymbol(_0x2cb20d, this.m_isClickStopBtn, _0x478d51), this.m_isNotChangeSymbolThisRound[_0x478d51] = false) : this.m_isNotChangeSymbolThisRound[_0x478d51] = true, _0x5c776f - this.m_totalLength);
        };
        _0x2755a6.ChangeSymbol = function (_0x65a310, _0x2ff53c, _0x32d50b) {
          var _0x108401 = Number(_0x65a310.Name);
          var _0xb095f = this.m_reelPreTime;
          var _0x272ff0 = this.m_riseTime * this.m_viewSize.height * 0x3;
          if (_0x2ff53c) {
            if (0x1 === _0x32d50b) {
              _0x65a310.SetInfo(this.m_symbolInfo);
            } else {
              var _0x598aef = this.RandomSymbolInfo();
              _0x65a310.SetInfo(_0x598aef);
            }
          } else {
            if (_0x108401 >= 0x0 && (null !== _0xb095f && this.Time >= _0xb095f || Math.abs(this.Time - (_0xb095f + _0x272ff0)) < this.m_spinTime)) {
              _0x65a310.SetInfo(this.m_symbolInfo);
            } else {
              var _0x2b08d7 = this.RandomSymbolInfo();
              _0x65a310.SetInfo(_0x2b08d7);
            }
          }
        };
        _0x2755a6.ClearAll = function () {
          this.m_allColumns[_0xcba612.MIDDLE_PLATE_INDEX].ClearAll();
        };
        _0x2755a6.CheckChangeToFinalSymbol = function (_0x1f2dbd, _0x4d581b, _0x3fccc8) {
          if (undefined === _0x3fccc8) {
            _0x3fccc8 = false;
          }
          if (!this.m_isChangeToFinalSymbol[_0x4d581b]) {
            this.ChangeSymbol(_0x1f2dbd, _0x3fccc8, _0x4d581b);
            this.m_isChangeToFinalSymbol[_0x4d581b] = true;
          }
        };
        _0x2755a6.CheckPlayStopSoundAndEffect = function () {
          if (!this.m_isPlayStopSound) {
            this.m_isPlayStopSound = true;
            this.PlayReelSound();
          }
        };
        _0x2755a6.SetSymbolInfos = function (_0x376f6d, _0x3fcbdd) {
          this.m_symbolInfo = _0x376f6d;
          var _0x7c7612 = this.m_riseTime;
          var _0x4c4993 = Math.ceil((this.Time - _0x7c7612) / this.m_spinTime);
          _0x4c4993 = 0x0 !== _0x4c4993 ? _0x4c4993 : 0x1;
          this.m_reelPreTime = this.m_spinTime * (_0x3fcbdd - 0x1 + _0x4c4993) + this.m_spinDelayTime + _0x7c7612;
          this.m_reelStopTime = this.m_spinTime * (_0x3fcbdd + _0x4c4993) + this.m_spinDelayTime + _0x7c7612;
          this.m_stopTime = this.m_reelStopTime + this.m_spinBufferTime01 + this.m_spinBufferTime02;
          if (_0x376f6d.Symbol > _0xcba612.Symbol.WILD && _0x376f6d.Symbol <= _0xcba612.Symbol.Coin_Green) {
            this.IsCoin = true;
            if (_0x376f6d.Symbol < _0xcba612.Symbol.Coin) {
              this.IsScatter = true;
            }
          }
        };
        _0x2755a6.IsNearWin = function () {
          return -0x1 !== this.m_nearWinNowCol && this.m_nearWinNowCol !== _0xcba612.COL && !this.m_gameView.IsHardStop;
        };
        _0x2755a6.NearWinEffect = function () {
          if (this.m_nearWinStartFunc && !this.m_nearWinLock) {
            this.m_nearWinLock = true;
            if (this.m_nearWinNowCol < _0xcba612.COL) {
              this.m_nearWinStartFunc(this.m_nearWinNowCol);
              this.m_nearWinNowCol = this.m_nearWinNowCol + 0x1;
            } else {
              this.m_nearWinEndFunc();
            }
          }
        };
        _0x2755a6.SetSymbolDark = function (_0x56213a) {
          for (var _0x3a69bd = 0x0; _0x3a69bd < 0x3; ++_0x3a69bd) {
            this.m_allColumns[_0x3a69bd].SetSymbolDark(_0x56213a);
          }
        };
        _0x2755a6.CheckColIsStop = function () {
          return this.Time >= this.m_reelStopTime;
        };
        _0x2755a6.CalculateSpinPos = function (_0xf8784e) {
          if (undefined === _0xf8784e) {
            _0xf8784e = false;
          }
          var _0x9c69c9 = _0xf8784e ? this.m_spinTime / 0x2 : this.m_spinTime;
          return (this.Time - this.m_riseTime) % _0x9c69c9 / _0x9c69c9 * this.m_totalLength;
        };
        _0x4b136a(_0xc48271, [{
          'key': 'IsLoadingComplete',
          'get': function () {
            return this.m_isLoadingComplete;
          }
        }, {
          'key': "AllColumns",
          'get': function () {
            return this.m_allColumns;
          }
        }, {
          'key': "SpinTime",
          'get': function () {
            return this.m_spinTime;
          },
          'set': function (_0x215661) {
            this.m_spinTime = _0x215661;
          }
        }, {
          'key': 'Time',
          'get': function () {
            return this.m_time;
          },
          'set': function (_0x51e64d) {
            this.m_time = _0x51e64d;
          }
        }, {
          'key': 'IsClickStopBtn',
          'get': function () {
            return this.m_isClickStopBtn;
          }
        }, {
          'key': 'ReelXPos',
          'get': function () {
            return this.m_reelXPos;
          }
        }, {
          'key': 'IsStop',
          'get': function () {
            return this.m_isStop;
          }
        }, {
          'key': 'IsScatter',
          'get': function () {
            return this.m_isScatter;
          },
          'set': function (_0x19e807) {
            this.m_isScatter = _0x19e807;
          }
        }, {
          'key': "IsCoin",
          'get': function () {
            return this.m_isCoin;
          },
          'set': function (_0x35b3f2) {
            this.m_isCoin = _0x35b3f2;
          }
        }, {
          'key': 'SymbolInfo',
          'get': function () {
            return this.m_symbolInfo;
          }
        }, {
          'key': "CurNearWinSymbols",
          'get': function () {
            return this.m_curNearWinSymbols;
          }
        }]);
        return _0xc48271;
      }(_0x14cfe4)) || _0x5dec1c;
      var _0x41e7f4;
      var _0x386911;
      var _0x1c42bc;
      var _0x4803d3;
      var _0x54e006;
      var _0x177f5f;
      var _0x435264;
      var _0x50b626;
      var _0x39782c;
      var _0x71c755;
      var _0x2f45b5;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "a9a8d32PEBA3YxD3Q7tPSru", "EffectPlate", undefined);
      var _0xab8b4 = _0x3e9873.property;
      _0x41e7f4 = _0xab8b4({
        'type': _0x1a18d5,
        'tooltip': 'symbol動態Prefabs'
      });
      _0x386911 = _0xab8b4({
        'type': _0x1a18d5,
        'tooltip': "symbol 共用動態Prefabs"
      });
      _0x1c42bc = _0xab8b4({
        'type': _0x84773f,
        'tooltip': "symbol相關表演的節點們"
      });
      _0x4803d3 = _0xab8b4({
        'type': _0x1a18d5
      });
      _0x54e006 = _0xab8b4({
        'type': _0x1a18d5
      });
      _0x177f5f = function (_0x4d73d4) {
        function _0x4dafb8() {
          var _0x4b7f84;
          var _0x1fc473 = arguments.length;
          var _0x3da11b = new Array(_0x1fc473);
          for (var _0x2b139c = 0x0; _0x2b139c < _0x1fc473; _0x2b139c++) {
            _0x3da11b[_0x2b139c] = arguments[_0x2b139c];
          }
          _0xec902e(_0x4b7f84 = _0x4d73d4.call.apply(_0x4d73d4, [this].concat(_0x3da11b)) || this, "m_symbolEffectPrefabs", _0x435264, _0x11be3a(_0x4b7f84));
          _0xec902e(_0x4b7f84, "m_symbolAddEffectPrefabs", _0x50b626, _0x11be3a(_0x4b7f84));
          _0xec902e(_0x4b7f84, 'm_effectNode', _0x39782c, _0x11be3a(_0x4b7f84));
          _0xec902e(_0x4b7f84, "m_flyEffectPrefabs", _0x71c755, _0x11be3a(_0x4b7f84));
          _0xec902e(_0x4b7f84, "m_nearWinEffectPrefab", _0x2f45b5, _0x11be3a(_0x4b7f84));
          _0x4b7f84.m_nearWinEffect = null;
          _0x4b7f84.m_curAwardLines = [];
          _0x4b7f84.m_symbolSpines = new Array();
          _0x4b7f84.m_symbolAddEffectSpines = new Array();
          _0x4b7f84.m_flyNodes = new Array();
          _0x4b7f84.m_singleLineAni = null;
          _0x4b7f84.m_gameView = null;
          return _0x4b7f84;
        }
        _0xed7a37(_0x4dafb8, _0x4d73d4);
        var _0x3d5764 = _0x4dafb8.prototype;
        _0x3d5764.onLoad = function () {
          for (var _0x534bc9 = 0x0; _0x534bc9 < _0xcba612.COL; _0x534bc9++) {
            var _0x9a603e = [];
            var _0x19d1ca = [];
            for (var _0x1e00f5 = 0x0; _0x1e00f5 < _0xcba612.ROW; _0x1e00f5++) {
              var _0x13df44 = new Array();
              var _0x281506 = new Array();
              _0x13df44.length = _0xcba612.EFFECT_LAYER_NUMS;
              _0x281506.length = _0xcba612.EFFECT_LAYER_NUMS;
              _0x9a603e.push(_0x13df44);
              _0x19d1ca.push(_0x281506);
            }
            this.m_symbolSpines.push(_0x9a603e);
            this.m_symbolAddEffectSpines.push(new Array());
          }
          for (var _0x6563c3 = 0x0; _0x6563c3 < _0xcba612.FLY_TYPES; _0x6563c3++) {
            var _0x496307 = new Array();
            this.m_flyNodes.push(_0x496307);
          }
        };
        _0x3d5764.Init = function (_0xa38ea1) {
          this.m_gameView = _0xa38ea1;
          _0x3c8fad.getInstance().SetPrefabs(this.m_symbolEffectPrefabs, _0xcba612.EFFECT_TYPE.SYMBOL);
          _0x3c8fad.getInstance().SetPrefabs(this.m_symbolAddEffectPrefabs, _0xcba612.EFFECT_TYPE.ADD_EFFECT);
          _0x3c8fad.getInstance().SetPrefabs(this.m_flyEffectPrefabs, _0xcba612.EFFECT_TYPE.FLY);
          this.m_nearWinEffect = _0x2b0134(this.m_nearWinEffectPrefab);
          this.m_effectNode[_0xcba612.LAYERS.FIVE].addChild(this.m_nearWinEffect);
          this.m_nearWinEffect.active = false;
        };
        _0x3d5764.CleanSymbolAnim = function (_0xcc0402, _0x4e46c4, _0x34c448) {
          if (this.m_symbolSpines[_0xcc0402][_0x4e46c4][_0x34c448]) {
            var _0xb97e5 = this.m_symbolSpines[_0xcc0402][_0x4e46c4][_0x34c448];
            if (_0xb97e5.getComponent(_0x1a5c29)) {
              _0xb97e5.getComponent(_0x1a5c29).ClearAll();
            }
            if (_0xb97e5.getComponent(_0x37d95b)) {
              _0xb97e5.getComponent(_0x37d95b).PlayStop();
            }
            _0x3c8fad.getInstance().ReturnNode(_0xcba612.EFFECT_TYPE.SYMBOL, _0xb97e5.Symbol, _0xb97e5.node);
            _0xb97e5.node.active = false;
            _0xb97e5.node.removeFromParent();
            this.m_symbolSpines[_0xcc0402][_0x4e46c4][_0x34c448] = null;
          }
          if (this.m_symbolAddEffectSpines[_0xcc0402][_0x4e46c4]) {
            var _0x3dbd86 = this.m_symbolAddEffectSpines[_0xcc0402][_0x4e46c4];
            _0x3c8fad.getInstance().ReturnNode(_0xcba612.EFFECT_TYPE.ADD_EFFECT, _0x3dbd86.Symbol, _0x3dbd86.node);
            _0x3dbd86.node.active = false;
            _0x3dbd86.node.removeFromParent();
            this.m_symbolAddEffectSpines[_0xcc0402][_0x4e46c4] = null;
          }
        };
        _0x3d5764.CleanFlyNode = function (_0xfb933a, _0x23c592) {
          if (this.m_flyNodes[_0xfb933a][_0x23c592]) {
            _0x3c8fad.getInstance().ReturnNode(_0xcba612.EFFECT_TYPE.FLY, _0xfb933a, this.m_flyNodes[_0xfb933a][_0x23c592]);
            this.m_flyNodes[_0xfb933a][_0x23c592].removeFromParent();
            this.m_flyNodes[_0xfb933a][_0x23c592] = null;
          }
        };
        _0x3d5764.ReturnFly = function () {
          for (var _0x55ca24 = 0x0; _0x55ca24 < _0xcba612.FLY_TYPES; ++_0x55ca24) {
            if (this.m_flyNodes[_0x55ca24]) {
              for (var _0x21b5f6 = 0x0; _0x21b5f6 < this.m_flyNodes[_0x55ca24].length; ++_0x21b5f6) {
                this.CleanFlyNode(_0x55ca24, _0x21b5f6);
              }
            }
          }
        };
        _0x3d5764.ReturnAll = function () {
          for (var _0x1c9a3b = 0x0; _0x1c9a3b < _0xcba612.COL; ++_0x1c9a3b) {
            for (var _0x405d42 = 0x0; _0x405d42 < _0xcba612.ROW; ++_0x405d42) {
              for (var _0x30ba60 = 0x0; _0x30ba60 < _0xcba612.EFFECT_LAYER_NUMS; ++_0x30ba60) {
                this.CleanSymbolAnim(_0x1c9a3b, _0x405d42, _0x30ba60);
              }
            }
          }
        };
        _0x3d5764.UnActiveEffects = function () {
          for (var _0x36e12c = 0x0; _0x36e12c < _0xcba612.COL; ++_0x36e12c) {
            for (var _0x4bd957 = 0x0; _0x4bd957 < _0xcba612.ROW; ++_0x4bd957) {
              for (var _0x6811d2 = 0x0; _0x6811d2 < _0xcba612.EFFECT_LAYER_NUMS; ++_0x6811d2) {
                if (this.m_symbolSpines[_0x36e12c][_0x4bd957][_0x6811d2]) {
                  this.m_symbolSpines[_0x36e12c][_0x4bd957][_0x6811d2].node.active = false;
                }
              }
              if (this.m_symbolAddEffectSpines[_0x36e12c][_0x4bd957]) {
                this.m_symbolAddEffectSpines[_0x36e12c][_0x4bd957].node.active = false;
              }
            }
          }
        };
        _0x3d5764.ReturnNormalLayer = function () {
          for (var _0x5088a4 = 0x0; _0x5088a4 < _0xcba612.COL; ++_0x5088a4) {
            for (var _0x1e7303 = 0x0; _0x1e7303 < _0xcba612.ROW; ++_0x1e7303) {
              this.CleanSymbolAnim(_0x5088a4, _0x1e7303, _0xcba612.LAYERS.TWO);
            }
          }
        };
        _0x3d5764.CreateEffectNode_NodePool = function (_0x2baa89, _0x5c2b25, _0x4ade36, _0x423845, _0x2ed946) {
          if (undefined === _0x2ed946) {
            _0x2ed946 = _0x1536ed(0x1, 0x1, 0x1);
          }
          var _0x1f2a36 = this.m_symbolSpines[_0x2baa89][_0x5c2b25][_0x4ade36];
          if (_0x1f2a36) {
            return _0x1f2a36.node;
          }
          var _0x332946 = this.m_gameView.SlotReels.AllColumns[0x1][_0x2baa89];
          var _0x16bdd0 = this.GetPosX(_0x2baa89);
          var _0x1507fe = _0x332946.CalStopPosY(_0x5c2b25).y;
          var _0x265e0d = _0x3c8fad.getInstance().GetNode(_0xcba612.EFFECT_TYPE.SYMBOL, _0x423845).getComponent(_0x1b3034);
          this.m_effectNode[_0x4ade36].addChild(_0x265e0d.node);
          _0x265e0d.node.name = (0xa * _0x2baa89 + _0x5c2b25).toString();
          _0x265e0d.node.setScale(_0x2ed946);
          _0x265e0d.node.setPosition(_0x16bdd0, _0x1507fe);
          _0x265e0d.node.active = true;
          _0x14c118.SetOrderedZindex(_0x265e0d.node, 0xa * _0x2baa89 + _0x5c2b25);
          this.m_symbolSpines[_0x2baa89][_0x5c2b25][_0x4ade36] = _0x265e0d;
          if (_0x423845 < _0xcba612.Symbol.Scatter_Blue) {
            var _0x687a63 = _0x3c8fad.getInstance().GetNode(_0xcba612.EFFECT_TYPE.ADD_EFFECT, _0xcba612.ADD_EFFECT_TYPE.MG).getComponent(_0x44aa83);
            this.m_effectNode[_0xcba612.LAYERS.THREE].addChild(_0x687a63.node);
            _0x687a63.node.name = (0xa * _0x2baa89 + _0x5c2b25).toString();
            _0x687a63.node.setScale(_0x2ed946);
            _0x687a63.node.setPosition(_0x16bdd0, _0x1507fe);
            _0x687a63.node.active = true;
            this.m_symbolAddEffectSpines[_0x2baa89][_0x5c2b25] = _0x687a63;
          } else {
            var _0x2a5637 = _0x3c8fad.getInstance().GetNode(_0xcba612.EFFECT_TYPE.ADD_EFFECT, _0xcba612.ADD_EFFECT_TYPE.FG).getComponent(_0x44aa83);
            this.m_effectNode[_0xcba612.LAYERS.THREE].addChild(_0x2a5637.node);
            _0x2a5637.node.name = (0xa * _0x2baa89 + _0x5c2b25).toString();
            _0x2a5637.node.setScale(_0x2ed946);
            _0x2a5637.node.setPosition(_0x16bdd0, _0x1507fe);
            _0x2a5637.SetSkin(_0xcba612.WIN_LV1);
            _0x2a5637.node.active = true;
            this.m_symbolAddEffectSpines[_0x2baa89][_0x5c2b25] = _0x2a5637;
          }
          return _0x265e0d.node;
        };
        _0x3d5764.CreateFlyNode_NodePool = function (_0x401e8f, _0x1cb3af, _0x21fb3a) {
          var _0x4139b8 = _0x3c8fad.getInstance().GetNode(_0xcba612.EFFECT_TYPE.FLY, _0x21fb3a);
          this.m_flyNodes[_0x21fb3a].push(_0x4139b8);
          this.m_effectNode[_0xcba612.LAYERS.FIVE].addChild(_0x4139b8);
          _0x4139b8.active = true;
          _0x4139b8.setPosition(this.GetPosX(_0x401e8f), this.GetPosY(_0x1cb3af));
          _0x4139b8.getComponent(_0x4bf747).getState(_0xcba612.FX_TYPE[_0x21fb3a]).stop();
          var _0x4c5fe6 = _0xcba612.COIN_NAME[_0x21fb3a];
          var _0x1ffc72 = _0x4139b8.getChildByName(_0x4c5fe6);
          var _0x5d8220 = _0x4139b8.getChildByName('FX');
          _0x1ffc72.active = !this.m_gameView.IsFreeGame;
          if ("Coin_N" != _0x1ffc72.name) {
            _0x5d8220.active = !this.m_gameView.IsFreeGame;
          }
          return _0x4139b8;
        };
        _0x3d5764.ShowSymbolEffect = function () {
          var _0x2dbf66 = _0x26fe6f(_0x352743().mark(function _0x469d2f(_0x5e2364) {
            var _0x11428b;
            var _0x171d33;
            var _0x49de88;
            var _0x24bc7b;
            var _0x1c1013;
            var _0x19e546;
            var _0xb3031d;
            var _0x154549;
            var _0xe66ccc;
            return _0x352743().wrap(function (_0x172181) {
              for (;;) {
                switch (_0x172181.prev = _0x172181.next) {
                  case 0x0:
                    if (_0x5e2364) {
                      _0x172181.next = 0x2;
                      break;
                    }
                    return _0x172181.abrupt('return');
                  case 0x2:
                    _0x11428b = new Set();
                    for (_0x171d33 = 0x0; _0x171d33 < _0x5e2364.length; ++_0x171d33) {
                      _0x49de88 = new Array();
                      _0x24bc7b = 0x0;
                      for (_0x1c1013 = 0x0; _0x1c1013 < _0x5e2364.length; _0x1c1013++) {
                        _0x19e546 = _0xcba612.LineInfos[_0x5e2364[_0x1c1013].Line];
                        _0x24bc7b = _0x14c118.plus(_0x24bc7b, _0x5e2364[_0x1c1013].Win);
                        for (_0xb3031d = 0x0; _0xb3031d < _0x5e2364[_0x1c1013].Count; _0xb3031d++) {
                          _0x154549 = _0xcba612.ConvertIndex2ColRow(_0x19e546[_0xb3031d]);
                          _0xe66ccc = this.EncodePos(_0x154549.x, _0x154549.y, this.m_gameView.SlotReels.PlateInfo[_0x154549.x].Col[_0x154549.y]);
                          if (this.m_gameView.SlotReels.PlateInfo[_0x154549.x].Col[_0x154549.y] === _0xcba612.Symbol.Ship) {
                            this.m_gameView.HasSpecialAward[0x0] = true;
                          }
                          if (this.m_gameView.SlotReels.PlateInfo[_0x154549.x].Col[_0x154549.y] === _0xcba612.Symbol.Airplane) {
                            this.m_gameView.HasSpecialAward[0x1] = true;
                          }
                          if (this.m_gameView.SlotReels.PlateInfo[_0x154549.x].Col[_0x154549.y] === _0xcba612.Symbol.Car) {
                            this.m_gameView.HasSpecialAward[0x2] = true;
                          }
                          _0x49de88.push(_0xe66ccc);
                          _0x11428b.add(_0xe66ccc);
                        }
                      }
                      this.CurAwardLines.push(_0x49de88);
                    }
                    this.m_gameView.SlotReels.SetSymbolDark(true, -0x1);
                    _0x27c287.Play(_0xcba612.AudioClips.symbol_award);
                    _0x172181.next = 0x8;
                    return this.ShowSymbolWin(_0x11428b);
                  case 0x8:
                  case "end":
                    return _0x172181.stop();
                }
              }
            }, _0x469d2f, this);
          }));
          return function (_0x36690b) {
            return _0x2dbf66.apply(this, arguments);
          };
        }();
        _0x3d5764.ShowSymbolWin = function () {
          var _0x2ed1d6 = _0x26fe6f(_0x352743().mark(function _0x3aa6b1(_0x1e20b0) {
            var _0x3eddf6;
            var _0x2c1526;
            var _0x2ab9e5;
            var _0x544801;
            var _0x332a4c;
            var _0x566c80;
            var _0x2aabc5;
            var _0x5fab9b;
            return _0x352743().wrap(function (_0x538608) {
              for (;;) {
                switch (_0x538608.prev = _0x538608.next) {
                  case 0x0:
                    _0x3eddf6 = [];
                    _0x2c1526 = Array.from(_0x1e20b0).sort(function (_0x18d07d, _0x1a1095) {
                      return _0x18d07d - _0x1a1095;
                    });
                    for (_0x2ab9e5 = 0x0; _0x2ab9e5 < _0x2c1526.length; ++_0x2ab9e5) {
                      _0x544801 = this.DecodePos(_0x2c1526[_0x2ab9e5]);
                      _0x332a4c = _0x544801[0x0];
                      _0x566c80 = _0x544801[0x1];
                      _0x2aabc5 = _0x544801[0x2];
                      _0x5fab9b = this.CreateEffectNode_NodePool(_0x332a4c, _0x566c80, _0xcba612.LAYERS.TWO, _0x2aabc5);
                      this.m_gameView.SlotReels.AllColumns[_0xcba612.MIDDLE_PLATE_INDEX][_0x332a4c].HideSymbolByRow(_0x566c80);
                      _0x3eddf6.push(_0x5fab9b.getComponent(_0x1b3034).PlayWin());
                      _0x3eddf6.push(this.m_symbolAddEffectSpines[_0x332a4c][_0x566c80].PlayWin(0x1, true));
                    }
                    _0x538608.next = 0x5;
                    return Promise.all(_0x3eddf6);
                  case 0x5:
                  case "end":
                    return _0x538608.stop();
                }
              }
            }, _0x3aa6b1, this);
          }));
          return function (_0x150dd8) {
            return _0x2ed1d6.apply(this, arguments);
          };
        }();
        _0x3d5764.ShowSingleLineEffect = function () {
          var _0x3674c2 = this;
          if (!this.m_singleLineAni && this.CurAwardLines && 0x0 !== this.CurAwardLines.length) {
            var _0x1401e4 = this.CurAwardLines.length;
            this.m_gameView.SlotReels.SetSymbolDark(true, -0x1);
            var _0x2fbd5a = 0x0;
            this.m_singleLineAni = _0x174aa1(this.node).repeatForever(_0x174aa1().call(function () {
              _0x3674c2.m_gameView.SlotReels.ShowPlate();
              _0x3674c2.UnActiveEffects();
              _0x3674c2.ShowSymbolWin(_0x3674c2.CurAwardLines[_0x2fbd5a]);
              if (++_0x2fbd5a === _0x1401e4) {
                _0x2fbd5a = 0x0;
              }
            }).delay(_0xcba612.ACTION_DELAY_TIME.TIME_FOR_AWARD_LINE_EFFECT)).start();
          }
        };
        _0x3d5764.StopOneLineShow = function () {
          if (this.m_singleLineAni) {
            this.m_gameView.SlotReels.ShowPlate();
            this.m_gameView.SlotReels.SetSymbolDark(false, -0x1);
            this.m_singleLineAni.stop();
            this.m_singleLineAni = null;
            this.CurAwardLines.length = 0x0;
          }
        };
        _0x3d5764.ShowScatterStop = function () {
          var _0x4a6770 = _0x26fe6f(_0x352743().mark(function _0x4d0c40(_0x5c2b1e) {
            var _0x1d4089;
            var _0x26d35b;
            var _0x3e1dc4 = this;
            return _0x352743().wrap(function (_0x24f5d8) {
              for (;;) {
                switch (_0x24f5d8.prev = _0x24f5d8.next) {
                  case 0x0:
                    _0x27c287.Play(_0xcba612.AudioClips.scatter_stop);
                    _0x1d4089 = this.m_gameView.OldRealPlate;
                    _0x26d35b = 0x0;
                  case 0x3:
                    if (!(_0x26d35b < _0x1d4089[_0x5c2b1e].Col.length)) {
                      _0x24f5d8.next = 0x9;
                      break;
                    }
                    if (_0x1d4089[_0x5c2b1e].Col[_0x26d35b] !== _0xcba612.Symbol.Scatter_Blue && _0x1d4089[_0x5c2b1e].Col[_0x26d35b] !== _0xcba612.Symbol.Scatter_Red && _0x1d4089[_0x5c2b1e].Col[_0x26d35b] !== _0xcba612.Symbol.Scatter_Green) {
                      _0x24f5d8.next = 0x6;
                      break;
                    }
                    return _0x24f5d8.delegateYield(_0x352743().mark(function _0x3cf5b2() {
                      var _0x405009;
                      var _0x3d27d3;
                      var _0x4afde2;
                      var _0x14c68f;
                      var _0x65b996;
                      var _0x40b813;
                      var _0x5e8e37;
                      var _0x11cdd6;
                      var _0x457591;
                      var _0x193f4e;
                      var _0x3386ee;
                      var _0x1b8de2;
                      return _0x352743().wrap(function (_0xf3ebf0) {
                        for (;;) {
                          switch (_0xf3ebf0.prev = _0xf3ebf0.next) {
                            case 0x0:
                              _0x405009 = _0x3e1dc4.CreateEffectNode_NodePool(_0x5c2b1e, _0x26d35b, _0xcba612.LAYERS.TWO, _0x1d4089[_0x5c2b1e].Col[_0x26d35b]);
                              _0x3d27d3 = _0x405009.getComponent(_0x37d95b);
                              _0x4afde2 = _0x3e1dc4.GetScatterType(_0x1d4089[_0x5c2b1e].Col[_0x26d35b]);
                              _0x14c68f = _0x3e1dc4.CreateFlyNode_NodePool(_0x5c2b1e, _0x26d35b, _0x4afde2);
                              _0x65b996 = _0xcba612.FX_TYPE[_0x4afde2];
                              _0x40b813 = _0xcba612.FX_COIN_TYPE[_0x4afde2];
                              _0x5e8e37 = _0x14c68f.getChildByName(_0x40b813);
                              _0x11cdd6 = _0x14c68f.getComponent(_0x4bf747);
                              (_0x457591 = _0x11cdd6.getState(_0x65b996)).setTime(0x2d);
                              _0x457591.sample();
                              _0x457591.speed = 1.25;
                              _0x5e8e37.getComponent(_0x50093a).opacity = 0xff;
                              _0x5e8e37.active = true;
                              _0x193f4e = _0x3e1dc4.GetWorldLocation(_0x14c68f.getComponent(_0x4bf747));
                              _0x3386ee = _0x3e1dc4.GetWorldLocation(_0x3e1dc4.m_gameView.ScatterCoinSpines[_0x4afde2].FlyPos);
                              _0x1b8de2 = function () {
                                var _0x383eb6 = _0x26fe6f(_0x352743().mark(function _0x29d8f1() {
                                  return _0x352743().wrap(function (_0x33a0bf) {
                                    for (;;) {
                                      switch (_0x33a0bf.prev = _0x33a0bf.next) {
                                        case 0x0:
                                          _0x3e1dc4.m_gameView.SlotReels.ScatterFlyStopCount--;
                                          _0x3e1dc4.m_gameView.ScatterCoinSpines[_0x4afde2].InsertCoin();
                                          _0x3e1dc4.m_gameView.HasPlayedNearWin[_0x4afde2] = true;
                                          _0x11cdd6.play(_0x65b996);
                                          _0x33a0bf.next = 0x6;
                                          return _0xd8402d.Wait(_0x3e1dc4, _0xcba612.HitTime);
                                        case 0x6:
                                        case "end":
                                          return _0x33a0bf.stop();
                                      }
                                    }
                                  }, _0x29d8f1);
                                }));
                                return function () {
                                  return _0x383eb6.apply(this, arguments);
                                };
                              }();
                              _0x27c287.Play(_0xcba612.AudioClips.scatter_collect);
                              _0xf3ebf0.next = 0x14;
                              return Promise.all([_0x3e1dc4.flyCoinScale(_0x14c68f), _0x3e1dc4.ShowQuadraticBez(_0x14c68f, _0x193f4e, _0x3386ee, _0x1b8de2), _0x3d27d3.PlayStop()]);
                            case 0x14:
                            case 'end':
                              return _0xf3ebf0.stop();
                          }
                        }
                      }, _0x3cf5b2);
                    })(), 't0', 0x6);
                  case 0x6:
                    ++_0x26d35b;
                    _0x24f5d8.next = 0x3;
                    break;
                  case 0x9:
                  case 'end':
                    return _0x24f5d8.stop();
                }
              }
            }, _0x4d0c40, this);
          }));
          return function (_0xb91d37) {
            return _0x4a6770.apply(this, arguments);
          };
        }();
        _0x3d5764.ShowAllScatterStop = function () {
          var _0x1cb59c = _0x26fe6f(_0x352743().mark(function _0x187f3d() {
            var _0x5032ca;
            var _0x20f1ad;
            var _0x5f4a6c;
            var _0xf017f3;
            var _0x23b297 = this;
            return _0x352743().wrap(function (_0x3d4c9a) {
              for (;;) {
                switch (_0x3d4c9a.prev = _0x3d4c9a.next) {
                  case 0x0:
                    _0x5032ca = this.m_gameView.OldRealPlate;
                    _0x20f1ad = [];
                    for (_0x5f4a6c = 0x0; _0x5f4a6c < _0xcba612.COL; ++_0x5f4a6c) {
                      for (_0xf017f3 = 0x0; _0xf017f3 < _0x5032ca[_0x5f4a6c].Col.length; ++_0xf017f3) {
                        if (!(_0x5032ca[_0x5f4a6c].Col[_0xf017f3] !== _0xcba612.Symbol.Scatter_Blue && _0x5032ca[_0x5f4a6c].Col[_0xf017f3] !== _0xcba612.Symbol.Scatter_Red && _0x5032ca[_0x5f4a6c].Col[_0xf017f3] !== _0xcba612.Symbol.Scatter_Green)) {
                          (function () {
                            var _0x1ad9b2 = _0x23b297.CreateEffectNode_NodePool(_0x5f4a6c, _0xf017f3, _0xcba612.LAYERS.TWO, _0x5032ca[_0x5f4a6c].Col[_0xf017f3]).getComponent(_0x37d95b);
                            var _0x54d0ab = _0x23b297.GetScatterType(_0x5032ca[_0x5f4a6c].Col[_0xf017f3]);
                            var _0x3a56a7 = _0x23b297.CreateFlyNode_NodePool(_0x5f4a6c, _0xf017f3, _0x54d0ab);
                            var _0x47b7b8 = _0xcba612.FX_TYPE[_0x54d0ab];
                            var _0x5a7fc1 = _0xcba612.FX_COIN_TYPE[_0x54d0ab];
                            var _0x208c77 = _0x3a56a7.getChildByName(_0x5a7fc1);
                            var _0x9dbf68 = _0x3a56a7.getComponent(_0x4bf747);
                            var _0x3e2071 = _0x9dbf68.getState(_0x47b7b8);
                            _0x3e2071.setTime(0x2d);
                            _0x3e2071.sample();
                            _0x3e2071.speed = 1.25;
                            _0x208c77.getComponent(_0x50093a).opacity = 0xff;
                            _0x208c77.active = true;
                            var _0x51746c = _0x23b297.GetWorldLocation(_0x3a56a7.getComponent(_0x4bf747));
                            var _0x143af3 = _0x23b297.GetWorldLocation(_0x23b297.m_gameView.ScatterCoinSpines[_0x54d0ab].FlyPos);
                            var _0x269b80 = function () {
                              var _0x44277a = _0x26fe6f(_0x352743().mark(function _0x33f4ba() {
                                return _0x352743().wrap(function (_0x37b6e9) {
                                  for (;;) {
                                    switch (_0x37b6e9.prev = _0x37b6e9.next) {
                                      case 0x0:
                                        _0x23b297.m_gameView.SlotReels.ScatterFlyStopCount--;
                                        _0x23b297.m_gameView.ScatterCoinSpines[_0x54d0ab].InsertCoin();
                                        if (_0x23b297.m_gameView.HasPlayedNearWin[_0x54d0ab]) {
                                          _0x37b6e9.next = 0x9;
                                          break;
                                        }
                                        _0x23b297.m_gameView.HasPlayedNearWin[_0x54d0ab] = true;
                                        _0x9dbf68.play(_0x47b7b8);
                                        _0x37b6e9.next = 0x7;
                                        return _0xd8402d.Wait(_0x23b297, _0xcba612.HitTime);
                                      case 0x7:
                                        _0x37b6e9.next = 0xc;
                                        break;
                                      case 0x9:
                                        _0x3a56a7.active = false;
                                        _0x37b6e9.next = 0xc;
                                        return _0xd8402d.Wait(_0x23b297, _0xcba612.HitTime);
                                      case 0xc:
                                      case "end":
                                        return _0x37b6e9.stop();
                                    }
                                  }
                                }, _0x33f4ba);
                              }));
                              return function () {
                                return _0x44277a.apply(this, arguments);
                              };
                            }();
                            _0x20f1ad.push(_0x23b297.flyCoinScale(_0x3a56a7));
                            _0x20f1ad.push(_0x23b297.ShowQuadraticBez(_0x3a56a7, _0x51746c, _0x143af3, _0x269b80));
                            _0x20f1ad.push(_0x1ad9b2.PlayStop());
                          })();
                        }
                      }
                    }
                    _0x27c287.Play(_0xcba612.AudioClips.scatter_collect);
                    _0x3d4c9a.next = 0x6;
                    return Promise.all(_0x20f1ad);
                  case 0x6:
                    this.m_gameView.SlotReels.ShowPlate();
                  case 0x7:
                  case "end":
                    return _0x3d4c9a.stop();
                }
              }
            }, _0x187f3d, this);
          }));
          return function () {
            return _0x1cb59c.apply(this, arguments);
          };
        }();
        _0x3d5764.RecoverScatter = function () {
          var _0x2e3ba7 = this.m_gameView.RoundInfo.MainPlateSymbol;
          var _0xb0807e = this.m_gameView.RoundInfo.FreePlateSymbol;
          for (var _0xde87de = 0x0; _0xde87de < _0xcba612.COL; ++_0xde87de) {
            for (var _0xff2210 = 0x0; _0xff2210 < _0xcba612.ROW; ++_0xff2210) {
              if (!(_0x2e3ba7[_0xde87de].Col[_0xff2210] < _0xcba612.Symbol.Scatter_Blue || _0x2e3ba7[_0xde87de].Col[_0xff2210] > _0xcba612.Symbol.Scatter_Green)) {
                if (_0xb0807e[_0xde87de].Col[_0xff2210].Symbol !== _0xcba612.Symbol.MAX) {
                  if (!(_0xb0807e[_0xde87de].Col[_0xff2210].Symbol < _0xcba612.Symbol.Scatter_Blue || _0xb0807e[_0xde87de].Col[_0xff2210].Symbol === _0xcba612.Symbol.Coin)) {
                    this.m_gameView.SinglePlateMgr.IsLocked[_0xde87de][_0xff2210] = true;
                    this.CreateEffectNode_NodePool(_0xde87de, _0xff2210, _0xcba612.LAYERS.TWO, _0x2e3ba7[_0xde87de].Col[_0xff2210]);
                  }
                }
              }
            }
          }
        };
        _0x3d5764.UnshowRecover = function (_0x152d15) {
          for (var _0x54d54f = 0x0; _0x54d54f < _0xcba612.COL; ++_0x54d54f) {
            for (var _0x315ea4 = 0x0; _0x315ea4 < _0xcba612.ROW; ++_0x315ea4) {
              var _0x382c35 = _0x152d15[_0x54d54f].Col[_0x315ea4];
              if (!(_0x382c35.Symbol < _0xcba612.Symbol.Scatter_Blue || _0x382c35.Symbol > _0xcba612.Symbol.Coin_Green)) {
                var _0x42d526 = undefined;
                this.m_gameView.SinglePlateMgr.IsLocked[_0x54d54f][_0x315ea4] = true;
                if (_0x382c35.Symbol < _0xcba612.Symbol.Coin) {
                  _0x42d526 = this.CreateEffectNode_NodePool(_0x54d54f, _0x315ea4, _0xcba612.LAYERS.TWO, _0x382c35.Symbol + 0x4);
                } else {
                  (_0x42d526 = this.CreateEffectNode_NodePool(_0x54d54f, _0x315ea4, _0xcba612.LAYERS.TWO, _0x382c35.Symbol)).getComponent(_0x37d95b).PlaySwitchIdle();
                }
                var _0x33753f = _0x42d526.getComponent(_0x1a5c29);
                if (_0x382c35.JPState) {
                  _0x33753f.SetJpType(_0x382c35.JPState);
                  if (_0x382c35.JPMult > 0x1) {
                    _0x33753f.PlayJpMultiStart();
                    _0x33753f.SetMultiplyLabel(_0x382c35.JPMult);
                  } else {
                    _0x33753f.PlayJpIdle();
                  }
                  _0x33753f.ClearJpLabel();
                } else {
                  _0x33753f.PlayNumStart();
                  _0x33753f.SetNumLabel_n_Value(_0x382c35.Number);
                }
              }
            }
          }
        };
        _0x3d5764.ScatterFlip = function () {
          var _0x45f503 = _0x26fe6f(_0x352743().mark(function _0xe9b50d(_0x36c5d8, _0x18335c, _0x5ef475) {
            var _0x43ce4d;
            var _0x3b22e3;
            var _0x543ac0;
            var _0x405188;
            var _0x29d4f1;
            var _0x5c557b = this;
            return _0x352743().wrap(function (_0x5c2d64) {
              for (;;) {
                switch (_0x5c2d64.prev = _0x5c2d64.next) {
                  case 0x0:
                    if (undefined === _0x18335c) {
                      _0x18335c = -0x1;
                    }
                    if (undefined === _0x5ef475) {
                      _0x5ef475 = -0x1;
                    }
                    _0x43ce4d = this.GetScatterType(_0x36c5d8);
                    _0x3b22e3 = function () {
                      _0x5c557b.m_gameView.ScatterCoinSpines[_0x43ce4d].playRedOrGreenEffect(_0x43ce4d);
                    };
                    if (-0x1 !== _0x18335c && -0x1 !== _0x5ef475) {
                      _0x5c2d64.next = 0x9;
                      break;
                    }
                    _0x5c2d64.next = 0x7;
                    return this.m_gameView.ScatterCoinSpines[_0x43ce4d].PlayFGWin(_0x3b22e3);
                  case 0x7:
                    this.m_gameView.ScatterCoinSpines[_0x43ce4d].PlayIdle();
                    return _0x5c2d64.abrupt('return');
                  case 0x9:
                    _0x543ac0 = this.CreateEffectNode_NodePool(_0x18335c, _0x5ef475, _0xcba612.LAYERS.TWO, _0x36c5d8);
                    _0x405188 = _0x543ac0.getComponent(_0x37d95b);
                    _0x29d4f1 = function () {
                      _0x543ac0.getComponent(_0x1a5c29).SetMultiplyImgVisible(true);
                    };
                    this.m_gameView.SinglePlateMgr.SingleReelNodes[_0x18335c][_0x5ef475].getComponent(_0xa6820d).AllColumns[_0xcba612.MIDDLE_PLATE_INDEX].HideSymbol();
                    _0x5c2d64.next = 0xf;
                    return Promise.all([this.m_gameView.ScatterCoinSpines[_0x43ce4d].PlayFGWin(_0x3b22e3), _0x405188.PlayScatterTurn2(_0x29d4f1)]);
                  case 0xf:
                    this.m_gameView.ScatterCoinSpines[_0x43ce4d].PlayIdle();
                    0x1;
                    _0x5c2d64.next = 0x13;
                    return _0xd8402d.Wait(this, 0x1);
                  case 0x13:
                  case "end":
                    return _0x5c2d64.stop();
                }
              }
            }, _0xe9b50d, this);
          }));
          return function (_0x4fe710, _0x5b1167, _0x2471dd) {
            return _0x45f503.apply(this, arguments);
          };
        }();
        _0x3d5764.ScatterSwitch = function () {
          var _0x409460 = _0x26fe6f(_0x352743().mark(function _0x46f601(_0x4ecfd8, _0x9242d2, _0x2ecba1, _0x3490a5) {
            var _0x5b22ca;
            var _0x3a3723;
            return _0x352743().wrap(function (_0xb9c851) {
              for (;;) {
                switch (_0xb9c851.prev = _0xb9c851.next) {
                  case 0x0:
                    _0x5b22ca = _0xcba612.LAYERS.TWO;
                    _0x3a3723 = this.m_symbolSpines[_0x4ecfd8][_0x9242d2][_0x5b22ca].getComponent(_0x37d95b);
                    if (_0x2ecba1 >= _0xcba612.WIN_LV_CHANGE) {
                      _0x27c287.Play(_0xcba612.AudioClips.scatter_add2);
                    } else {
                      _0x27c287.Play(_0xcba612.AudioClips.scatter_add);
                    }
                    this.m_symbolAddEffectSpines[_0x4ecfd8][_0x9242d2].SetSkin(_0xcba612.WIN_LV1);
                    _0xb9c851.next = 0x7;
                    return Promise.all([this.m_gameView.SinglePlateMgr.SingleReelNodes[_0x4ecfd8][_0x9242d2].getComponent(_0xa6820d).AllColumns[_0xcba612.MIDDLE_PLATE_INDEX].HideSymbol(), this.m_symbolAddEffectSpines[_0x4ecfd8][_0x9242d2].PlaySwitch(), _0x3a3723.PlayScatterSwitch(_0x3490a5)]);
                  case 0x7:
                  case 'end':
                    return _0xb9c851.stop();
                }
              }
            }, _0x46f601, this);
          }));
          return function (_0x32ad39, _0x1c1024, _0x3fc6ac, _0x314d58) {
            return _0x409460.apply(this, arguments);
          };
        }();
        _0x3d5764.PlayBluePigEffect = function () {
          var _0x22c694 = _0x26fe6f(_0x352743().mark(function _0x50c8a0(_0x42044f) {
            var _0x5a711e;
            var _0x477ced;
            var _0x3609e6;
            var _0x338236 = this;
            return _0x352743().wrap(function (_0x3ce1c7) {
              for (;;) {
                switch (_0x3ce1c7.prev = _0x3ce1c7.next) {
                  case 0x0:
                    if (_0x42044f && _0x42044f[0x0]) {
                      _0x3ce1c7.next = 0x2;
                      break;
                    }
                    return _0x3ce1c7.abrupt("return");
                  case 0x2:
                    _0x5a711e = this.GetWorldLocation(this.m_gameView.ScatterCoinSpines[_0xcba612.SCATTERS.BLUE].FlyPos);
                    _0x477ced = _0x352743().mark(function _0x417535(_0x324383) {
                      var _0x8835c2;
                      var _0x493ec7;
                      var _0x3a0a11;
                      var _0x4c3a9f;
                      var _0x21efca;
                      var _0x655cb5;
                      var _0x48e3bf;
                      var _0x28a470;
                      var _0x39cbee;
                      return _0x352743().wrap(function (_0x1075f2) {
                        for (;;) {
                          switch (_0x1075f2.prev = _0x1075f2.next) {
                            case 0x0:
                              _0x8835c2 = _0x338236.DecodeServerPos(_0x42044f[_0x324383].ScatterPos);
                              _0x493ec7 = _0x8835c2[0x0];
                              _0x3a0a11 = _0x8835c2[0x1];
                              _0x4c3a9f = _0x338236.GetWorldLocation(_0x338236.m_symbolSpines[_0x493ec7][_0x3a0a11][_0xcba612.LAYERS.TWO]);
                              _0x1075f2.next = 0x6;
                              return _0x338236.m_gameView.ScatterCoinSpines[_0xcba612.SCATTERS.BLUE].PlayBluePigEffect(_0x42044f[_0x324383].Number);
                            case 0x6:
                              _0x21efca = _0x338236.CreateFlyNode_NodePool(_0x493ec7, _0x3a0a11, _0xcba612.SCATTERS.BLUE);
                              _0x1075f2.next = 0x9;
                              return _0x338236.FlyANode(_0x4c3a9f, _0x5a711e, _0x21efca, 0x0, 0.016);
                            case 0x9:
                              _0x655cb5 = _0x338236.m_gameView.ScatterCoinSpines[_0xcba612.SCATTERS.BLUE].CurInfo;
                              _0x48e3bf = function () {
                                var _0x2ffe30 = _0x26fe6f(_0x352743().mark(function _0x8759a4() {
                                  return _0x352743().wrap(function (_0x1334e7) {
                                    for (;;) {
                                      switch (_0x1334e7.prev = _0x1334e7.next) {
                                        case 0x0:
                                          _0x338236.m_gameView.SinglePlateMgr.PlateInfo[_0x493ec7].Col[_0x3a0a11].Number = _0x655cb5.Value;
                                          _0x338236.m_gameView.SinglePlateMgr.PlateInfo[_0x493ec7].Col[_0x3a0a11].JPState = _0x655cb5.JpType;
                                          _0x338236.m_gameView.SinglePlateMgr.PlateInfo[_0x493ec7].Col[_0x3a0a11].JPMult = _0x655cb5.JpMult;
                                          _0x338236.m_symbolAddEffectSpines[_0x493ec7][_0x3a0a11].ClearTrackZero();
                                          _0x338236.m_symbolAddEffectSpines[_0x493ec7][_0x3a0a11].node.active = false;
                                          if (_0x655cb5.Value / _0x1e89f8.GetNowBetValue() < _0xcba612.WIN_LV_CHANGE) {
                                            _0x338236.m_symbolAddEffectSpines[_0x493ec7][_0x3a0a11].SetSkin(_0xcba612.WIN_LV1);
                                          } else {
                                            _0x338236.m_symbolAddEffectSpines[_0x493ec7][_0x3a0a11].SetSkin(_0xcba612.WIN_LV2);
                                          }
                                          _0x338236.m_symbolAddEffectSpines[_0x493ec7][_0x3a0a11].PlayWin();
                                        case 0x8:
                                        case 'end':
                                          return _0x1334e7.stop();
                                      }
                                    }
                                  }, _0x8759a4);
                                }));
                                return function () {
                                  return _0x2ffe30.apply(this, arguments);
                                };
                              }();
                              _0x28a470 = function () {
                                var _0x47bdab = _0x338236.m_symbolSpines[_0x493ec7][_0x3a0a11][_0xcba612.LAYERS.TWO].getComponent(_0x1a5c29);
                                if (_0x655cb5.JpType) {
                                  _0x47bdab.SetJpType(_0x655cb5.JpType);
                                  _0x47bdab.PlayJpIdle();
                                } else {
                                  _0x47bdab.SetNumLabel_n_Value(_0x655cb5.Value);
                                }
                              };
                              _0x27c287.Play(_0xcba612.AudioClips.scatter_add_fly);
                              _0x1075f2.next = 0xf;
                              return _0x338236.ShowQuadraticBez(_0x21efca, _0x5a711e, _0x4c3a9f, _0x48e3bf);
                            case 0xf:
                              _0x338236.CleanFlyNode(0x0, 0x0);
                              _0x338236.m_symbolSpines[_0x493ec7][_0x3a0a11][_0xcba612.LAYERS.TWO].getComponent(_0x37d95b).ResetScatterSkin('B');
                              _0x39cbee = _0x655cb5.Value / _0x1e89f8.GetNowBetValue();
                              _0x1075f2.next = 0x15;
                              return _0x338236.ScatterSwitch(_0x493ec7, _0x3a0a11, _0x39cbee, _0x28a470);
                            case 0x15:
                            case 'end':
                              return _0x1075f2.stop();
                          }
                        }
                      }, _0x417535);
                    });
                    _0x3609e6 = 0x0;
                  case 0x5:
                    if (!(_0x3609e6 < _0x42044f.length)) {
                      _0x3ce1c7.next = 0xa;
                      break;
                    }
                    return _0x3ce1c7.delegateYield(_0x477ced(_0x3609e6), 't0', 0x7);
                  case 0x7:
                    ++_0x3609e6;
                    _0x3ce1c7.next = 0x5;
                    break;
                  case 0xa:
                  case "end":
                    return _0x3ce1c7.stop();
                }
              }
            }, _0x50c8a0, this);
          }));
          return function (_0x1ef96b) {
            return _0x22c694.apply(this, arguments);
          };
        }();
        _0x3d5764.PlayRedPigEffect = function () {
          var _0x9dc285 = _0x26fe6f(_0x352743().mark(function _0x1f8d1b(_0x3c75d3) {
            var _0x1fe6f3;
            var _0x483175;
            var _0x2f1eb4 = this;
            return _0x352743().wrap(function (_0x33cd3e) {
              for (;;) {
                switch (_0x33cd3e.prev = _0x33cd3e.next) {
                  case 0x0:
                    if (_0x3c75d3 && _0x3c75d3[0x0]) {
                      _0x33cd3e.next = 0x2;
                      break;
                    }
                    return _0x33cd3e.abrupt('return');
                  case 0x2:
                    _0x1fe6f3 = _0x352743().mark(function _0x3b260b(_0x36861b) {
                      var _0x4365b2;
                      var _0x1eb106;
                      var _0x28aa07;
                      var _0x4d7ea0;
                      var _0x13b801;
                      var _0x2fba62;
                      var _0x3f6d79;
                      var _0x9df877;
                      var _0x2bb541;
                      var _0x66f5b2;
                      var _0x979657;
                      return _0x352743().wrap(function (_0x37ce21) {
                        for (;;) {
                          switch (_0x37ce21.prev = _0x37ce21.next) {
                            case 0x0:
                              _0x4365b2 = _0x2f1eb4.DecodeServerPos(_0x3c75d3[_0x36861b].ScatterPos);
                              _0x1eb106 = _0x4365b2[0x0];
                              _0x28aa07 = _0x4365b2[0x1];
                              _0x4d7ea0 = _0x2f1eb4.GetWorldLocation(_0x2f1eb4.m_symbolSpines[_0x1eb106][_0x28aa07][_0xcba612.LAYERS.TWO]);
                              _0x13b801 = _0x2f1eb4.m_gameView.SinglePlateMgr.PlateInfo;
                              _0x37ce21.next = 0x7;
                              return _0x2f1eb4.ScatterFlip(_0xcba612.Symbol.Scatter_Red, _0x1eb106, _0x28aa07);
                            case 0x7:
                              _0x2fba62 = _0x352743().mark(function _0xc09fa5(_0x56f641) {
                                var _0x47bfb4;
                                var _0x7e78b8;
                                var _0x5ee204;
                                var _0x215cf4;
                                var _0x46a667;
                                var _0x4c2512;
                                var _0x16a37c;
                                var _0x9d5740;
                                var _0x2e3614;
                                return _0x352743().wrap(function (_0x56fc1d) {
                                  for (;;) {
                                    switch (_0x56fc1d.prev = _0x56fc1d.next) {
                                      case 0x0:
                                        _0x47bfb4 = _0x2f1eb4.DecodeServerPos(_0x3c75d3[_0x36861b].EffectPos[_0x56f641]);
                                        _0x7e78b8 = _0x47bfb4[0x0];
                                        _0x5ee204 = _0x47bfb4[0x1];
                                        _0x215cf4 = _0x2f1eb4.m_symbolSpines[_0x7e78b8][_0x5ee204][_0xcba612.LAYERS.TWO];
                                        _0x46a667 = _0x2f1eb4.GetWorldLocation(_0x215cf4);
                                        _0x4c2512 = _0x2f1eb4.CreateFlyNode_NodePool(_0x1eb106, _0x28aa07, _0xcba612.SCATTERS.RED);
                                        _0x16a37c = new _0x57bf99();
                                        if (_0x13b801[_0x7e78b8].Col[_0x5ee204].JPState) {
                                          _0x16a37c.JpMult = 0x1;
                                        }
                                        _0x16a37c.Value = _0x13b801[_0x7e78b8].Col[_0x5ee204].Number = _0x14c118.times(_0x13b801[_0x7e78b8].Col[_0x5ee204].Number, 0x2);
                                        _0x16a37c.JpMult = _0x13b801[_0x7e78b8].Col[_0x5ee204].JPMult = _0x14c118.times(_0x13b801[_0x7e78b8].Col[_0x5ee204].JPMult, 0x2);
                                        _0x9d5740 = _0x16a37c.Value > _0xcba612.WIN_LV_CHANGE * _0x1e89f8.GetNowBetValue() ? _0xcba612.WIN_LV2 : _0xcba612.WIN_LV1;
                                        _0x2f1eb4.m_symbolAddEffectSpines[_0x7e78b8][_0x5ee204].SetSkin(_0x9d5740);
                                        _0x2e3614 = function () {
                                          var _0x210500 = _0x26fe6f(_0x352743().mark(function _0x379db3() {
                                            var _0x467f54;
                                            return _0x352743().wrap(function (_0x1192ee) {
                                              for (;;) {
                                                switch (_0x1192ee.prev = _0x1192ee.next) {
                                                  case 0x0:
                                                    _0x467f54 = _0x2f1eb4.m_symbolSpines[_0x7e78b8][_0x5ee204][_0xcba612.LAYERS.TWO].getComponent(_0x1a5c29);
                                                    if (_0x16a37c.JpMult) {
                                                      _0x467f54.PlayJpMultiStart();
                                                      _0x467f54.SetMultiplyLabel(_0x16a37c.JpMult);
                                                    } else if (_0x16a37c.Value) {
                                                      _0x467f54.SetNumLabel_n_Value(_0x16a37c.Value);
                                                    }
                                                    _0x2f1eb4.m_symbolAddEffectSpines[_0x7e78b8][_0x5ee204].ClearTrackZero();
                                                    _0x2f1eb4.m_symbolAddEffectSpines[_0x7e78b8][_0x5ee204].node.active = false;
                                                    if (_0x16a37c.Value / _0x1e89f8.GetNowBetValue() < _0xcba612.WIN_LV_CHANGE) {
                                                      _0x2f1eb4.m_symbolAddEffectSpines[_0x7e78b8][_0x5ee204].SetSkin(_0xcba612.WIN_LV1);
                                                    } else {
                                                      _0x2f1eb4.m_symbolAddEffectSpines[_0x7e78b8][_0x5ee204].SetSkin(_0xcba612.WIN_LV2);
                                                    }
                                                    _0x2f1eb4.m_symbolAddEffectSpines[_0x7e78b8][_0x5ee204].PlayWin();
                                                  case 0x7:
                                                  case "end":
                                                    return _0x1192ee.stop();
                                                }
                                              }
                                            }, _0x379db3);
                                          }));
                                          return function () {
                                            return _0x210500.apply(this, arguments);
                                          };
                                        }();
                                        _0x27c287.Play(_0xcba612.AudioClips.scatter_add_fly);
                                        _0x56fc1d.next = 0x10;
                                        return _0x2f1eb4.ShowQuadraticBez(_0x4c2512, _0x4d7ea0, _0x46a667, _0x2e3614);
                                      case 0x10:
                                        _0x2f1eb4.CleanFlyNode(0x1, 0x0);
                                      case 0x11:
                                      case "end":
                                        return _0x56fc1d.stop();
                                    }
                                  }
                                }, _0xc09fa5);
                              });
                              _0x3f6d79 = 0x0;
                            case 0x9:
                              if (!(_0x3f6d79 < _0x3c75d3[_0x36861b].EffectPos.length)) {
                                _0x37ce21.next = 0xe;
                                break;
                              }
                              return _0x37ce21.delegateYield(_0x2fba62(_0x3f6d79), 't0', 0xb);
                            case 0xb:
                              ++_0x3f6d79;
                              _0x37ce21.next = 0x9;
                              break;
                            case 0xe:
                              _0x9df877 = _0x2f1eb4.m_symbolSpines[_0x1eb106][_0x28aa07][_0xcba612.LAYERS.TWO].getComponent(_0x1a5c29);
                              (_0x2bb541 = new _0x57bf99()).Value = _0x3c75d3[_0x36861b].Number;
                              _0x2bb541.JpType = _0x3c75d3[_0x36861b].JPState;
                              _0x2bb541.JpMult = _0x2bb541.JpType ? 0x1 : 0x0;
                              _0x66f5b2 = function () {
                                if (_0x2bb541.JpType) {
                                  _0x9df877.SetJpType(_0x2bb541.JpType);
                                  if (_0x2bb541.JpMult > 0x1) {
                                    _0x9df877.ClearJpLabel();
                                    _0x9df877.PlayJpMultiStart();
                                  } else {
                                    _0x9df877.PlayJpIdle();
                                  }
                                } else {
                                  _0x9df877.SetNumLabel_n_Value(_0x2bb541.Value);
                                  _0x9df877.PlayNumStart();
                                }
                                _0x9df877.SetMultiplyImgVisible(false);
                                _0x9df877.HideStaticSprite();
                              };
                              _0x9df877.ShowStaticSprite();
                              _0x979657 = _0x2bb541.Value / _0x1e89f8.GetNowBetValue();
                              _0x2f1eb4.m_gameView.ScatterCoinSpines[_0xcba612.SCATTERS.RED].SetJpTxt(-0x1);
                              _0x37ce21.next = 0x19;
                              return _0x2f1eb4.ScatterSwitch(_0x1eb106, _0x28aa07, _0x979657, _0x66f5b2);
                            case 0x19:
                              _0x13b801[_0x1eb106].Col[_0x28aa07].Number = _0x3c75d3[_0x36861b].Number;
                              _0x13b801[_0x1eb106].Col[_0x28aa07].JPState = _0x3c75d3[_0x36861b].JPState;
                              _0x13b801[_0x1eb106].Col[_0x28aa07].JPMult = _0x3c75d3[_0x36861b].JPState ? 0x1 : 0x0;
                            case 0x1c:
                            case "end":
                              return _0x37ce21.stop();
                          }
                        }
                      }, _0x3b260b);
                    });
                    _0x483175 = 0x0;
                  case 0x4:
                    if (!(_0x483175 < _0x3c75d3.length)) {
                      _0x33cd3e.next = 0x9;
                      break;
                    }
                    return _0x33cd3e.delegateYield(_0x1fe6f3(_0x483175), 't0', 0x6);
                  case 0x6:
                    ++_0x483175;
                    _0x33cd3e.next = 0x4;
                    break;
                  case 0x9:
                  case "end":
                    return _0x33cd3e.stop();
                }
              }
            }, _0x1f8d1b);
          }));
          return function (_0x44e64e) {
            return _0x9dc285.apply(this, arguments);
          };
        }();
        _0x3d5764.PlayGreenPigEffect = function () {
          var _0x2ce555 = _0x26fe6f(_0x352743().mark(function _0x2b275c(_0x5c764e) {
            var _0xb58e8d;
            var _0x566511;
            var _0x5afc7f = this;
            return _0x352743().wrap(function (_0x2da8d1) {
              for (;;) {
                switch (_0x2da8d1.prev = _0x2da8d1.next) {
                  case 0x0:
                    if (_0x5c764e && _0x5c764e[0x0]) {
                      _0x2da8d1.next = 0x2;
                      break;
                    }
                    return _0x2da8d1.abrupt("return");
                  case 0x2:
                    _0xb58e8d = _0x352743().mark(function _0x4816d7(_0x3ee373) {
                      var _0x3f4e3d;
                      var _0x398c63;
                      var _0x2bb164;
                      var _0x2a1c73;
                      var _0x348694;
                      var _0x138cec;
                      var _0x8d95f3;
                      var _0x3fa800;
                      var _0x2392c2;
                      var _0x226eab;
                      return _0x352743().wrap(function (_0x779695) {
                        for (;;) {
                          switch (_0x779695.prev = _0x779695.next) {
                            case 0x0:
                              _0x3f4e3d = _0x5afc7f.DecodeServerPos(_0x5c764e[_0x3ee373].ScatterPos);
                              _0x398c63 = _0x3f4e3d[0x0];
                              _0x2bb164 = _0x3f4e3d[0x1];
                              _0x2a1c73 = _0x5afc7f.GetWorldLocation(_0x5afc7f.m_symbolSpines[_0x398c63][_0x2bb164][_0xcba612.LAYERS.TWO]);
                              _0x348694 = _0x5afc7f.m_gameView.SinglePlateMgr.PlateInfo;
                              _0x138cec = 0x0;
                              _0x779695.next = 0x8;
                              return _0x5afc7f.ScatterFlip(_0xcba612.Symbol.Scatter_Green);
                            case 0x8:
                              (_0x8d95f3 = _0x5afc7f.m_symbolSpines[_0x398c63][_0x2bb164][_0xcba612.LAYERS.TWO].getComponent(_0x1a5c29)).PlayNumStart();
                              _0x8d95f3.ShowStaticSprite();
                              _0x3fa800 = _0x352743().mark(function _0x518932(_0x125c78) {
                                var _0x39f52d;
                                var _0x1ed1a0;
                                var _0x2db1b8;
                                var _0x38e126;
                                var _0x3ba388;
                                var _0x192f9a;
                                var _0x494d14;
                                var _0x2589d4;
                                return _0x352743().wrap(function (_0x1176e5) {
                                  for (;;) {
                                    switch (_0x1176e5.prev = _0x1176e5.next) {
                                      case 0x0:
                                        _0x39f52d = _0x5afc7f.DecodeServerPos(_0x5c764e[_0x3ee373].EffectPos[_0x125c78]);
                                        _0x1ed1a0 = _0x39f52d[0x0];
                                        _0x2db1b8 = _0x39f52d[0x1];
                                        _0x38e126 = _0x5afc7f.m_symbolSpines[_0x1ed1a0][_0x2db1b8][_0xcba612.LAYERS.TWO];
                                        _0x3ba388 = _0x5afc7f.GetWorldLocation(_0x38e126);
                                        _0x192f9a = _0x5afc7f.CreateFlyNode_NodePool(_0x1ed1a0, _0x2db1b8, _0xcba612.SCATTERS.GREEN);
                                        (_0x494d14 = new _0x57bf99()).Value = _0x348694[_0x1ed1a0].Col[_0x2db1b8].Number;
                                        _0x138cec = _0x14c118.strip(_0x138cec + _0x494d14.Value);
                                        _0x2589d4 = function () {
                                          var _0x2e39dd = _0x26fe6f(_0x352743().mark(function _0xd33c78() {
                                            var _0x4d16c0;
                                            return _0x352743().wrap(function (_0x482d2a) {
                                              for (;;) {
                                                switch (_0x482d2a.prev = _0x482d2a.next) {
                                                  case 0x0:
                                                    _0x8d95f3.SuckCoin(_0x494d14);
                                                    _0x4d16c0 = _0x138cec / _0x1e89f8.GetNowBetValue();
                                                    _0x5afc7f.m_symbolAddEffectSpines[_0x398c63][_0x2bb164].ClearTrackZero();
                                                    _0x5afc7f.m_symbolAddEffectSpines[_0x398c63][_0x2bb164].node.active = false;
                                                    if (_0x4d16c0 < _0xcba612.WIN_LV_CHANGE) {
                                                      _0x5afc7f.m_symbolAddEffectSpines[_0x398c63][_0x2bb164].SetSkin(_0xcba612.WIN_LV1);
                                                    } else {
                                                      _0x5afc7f.m_symbolAddEffectSpines[_0x398c63][_0x2bb164].SetSkin(_0xcba612.WIN_LV2);
                                                    }
                                                    _0x5afc7f.m_symbolAddEffectSpines[_0x398c63][_0x2bb164].PlayWin();
                                                  case 0x6:
                                                  case 'end':
                                                    return _0x482d2a.stop();
                                                }
                                              }
                                            }, _0xd33c78);
                                          }));
                                          return function () {
                                            return _0x2e39dd.apply(this, arguments);
                                          };
                                        }();
                                        _0x27c287.Play(_0xcba612.AudioClips.scatter_add_fly);
                                        _0x1176e5.next = 0xd;
                                        return _0x5afc7f.ShowQuadraticBez(_0x192f9a, _0x3ba388, _0x2a1c73, _0x2589d4);
                                      case 0xd:
                                        _0x5afc7f.CleanFlyNode(0x2, 0x0);
                                      case 0xe:
                                      case 'end':
                                        return _0x1176e5.stop();
                                    }
                                  }
                                }, _0x518932);
                              });
                              _0x2392c2 = 0x0;
                            case 0xd:
                              if (!(_0x2392c2 < _0x5c764e[_0x3ee373].EffectPos.length)) {
                                _0x779695.next = 0x12;
                                break;
                              }
                              return _0x779695.delegateYield(_0x3fa800(_0x2392c2), 't0', 0xf);
                            case 0xf:
                              ++_0x2392c2;
                              _0x779695.next = 0xd;
                              break;
                            case 0x12:
                              _0x226eab = _0x138cec / _0x1e89f8.GetNowBetValue();
                              _0x5afc7f.m_gameView.ScatterCoinSpines[_0xcba612.SCATTERS.GREEN].SetJpTxt(-0x1);
                              _0x779695.next = 0x16;
                              return _0x5afc7f.ScatterSwitch(_0x398c63, _0x2bb164, _0x226eab);
                            case 0x16:
                              _0x8d95f3.HideStaticSprite();
                              _0x5afc7f.m_gameView.SinglePlateMgr.PlateInfo[_0x398c63].Col[_0x2bb164].Number = _0x138cec;
                            case 0x18:
                            case "end":
                              return _0x779695.stop();
                          }
                        }
                      }, _0x4816d7);
                    });
                    _0x566511 = 0x0;
                  case 0x4:
                    if (!(_0x566511 < _0x5c764e.length)) {
                      _0x2da8d1.next = 0x9;
                      break;
                    }
                    return _0x2da8d1.delegateYield(_0xb58e8d(_0x566511), 't0', 0x6);
                  case 0x6:
                    ++_0x566511;
                    _0x2da8d1.next = 0x4;
                    break;
                  case 0x9:
                  case 'end':
                    return _0x2da8d1.stop();
                }
              }
            }, _0x2b275c);
          }));
          return function (_0x3eec24) {
            return _0x2ce555.apply(this, arguments);
          };
        }();
        _0x3d5764.PlayScatterRing = function () {
          if (this.m_gameView.IsEnteringBluePig) {
            var _0x14e8c1 = this.m_gameView.RoundInfo.BlueData;
            for (var _0x1c592a = 0x0; _0x1c592a < _0x14e8c1.length; ++_0x1c592a) {
              var _0x271f3a = this.DecodeServerPos(_0x14e8c1[_0x1c592a].ScatterPos);
              var _0xba3351 = _0x271f3a[0x0];
              var _0xeb3f40 = _0x271f3a[0x1];
              this.m_gameView.SlotReels.AllColumns[_0xcba612.MIDDLE_PLATE_INDEX][_0xba3351].HideSymbolByRow(_0xeb3f40);
              this.m_symbolSpines[_0xba3351][_0xeb3f40][_0xcba612.LAYERS.TWO].getComponent(_0x37d95b).PlayScatterRing();
            }
          }
          if (this.m_gameView.IsEnteringRedPig) {
            var _0x5a9e97 = this.m_gameView.RoundInfo.RedData;
            for (var _0x48f5ce = 0x0; _0x48f5ce < _0x5a9e97.length; ++_0x48f5ce) {
              var _0x5123cb = this.DecodeServerPos(_0x5a9e97[_0x48f5ce].ScatterPos);
              var _0x1b1bdc = _0x5123cb[0x0];
              var _0x51bbda = _0x5123cb[0x1];
              this.m_gameView.SlotReels.AllColumns[_0xcba612.MIDDLE_PLATE_INDEX][_0x1b1bdc].HideSymbolByRow(_0x51bbda);
              this.m_symbolSpines[_0x1b1bdc][_0x51bbda][_0xcba612.LAYERS.TWO].getComponent(_0x37d95b).PlayScatterRing();
            }
          }
          if (this.m_gameView.IsEnteringGreenPig) {
            var _0x3d6bdc = this.m_gameView.RoundInfo.GreenData;
            for (var _0x44468d = 0x0; _0x44468d < _0x3d6bdc.length; ++_0x44468d) {
              var _0xd1030c = this.DecodeServerPos(_0x3d6bdc[_0x44468d].ScatterPos);
              var _0x90385c = _0xd1030c[0x0];
              var _0x166c0b = _0xd1030c[0x1];
              this.m_gameView.SlotReels.AllColumns[_0xcba612.MIDDLE_PLATE_INDEX][_0x90385c].HideSymbolByRow(_0x166c0b);
              this.m_symbolSpines[_0x90385c][_0x166c0b][_0xcba612.LAYERS.TWO].getComponent(_0x37d95b).PlayScatterRing();
            }
          }
        };
        _0x3d5764.PlayLeaveFgCoinEffects = function () {
          for (var _0x286797 = 0x0; _0x286797 < _0xcba612.COL; ++_0x286797) {
            for (var _0xcd9453 = 0x0; _0xcd9453 < _0xcba612.ROW; ++_0xcd9453) {
              if (this.m_symbolAddEffectSpines[_0x286797][_0xcd9453]) {
                this.m_symbolAddEffectSpines[_0x286797][_0xcd9453].SetSkin(_0xcba612.WIN_LV1);
                this.m_symbolAddEffectSpines[_0x286797][_0xcd9453].SetNodeActivity(true);
                this.m_symbolAddEffectSpines[_0x286797][_0xcd9453].PlayWin(0x1, true);
              }
            }
          }
        };
        _0x3d5764.CollectScore = function () {
          var _0x1b5a4f = _0x26fe6f(_0x352743().mark(function _0xfb1007() {
            var _0xf1354b;
            var _0x5831ea;
            var _0x33dfb9;
            var _0x27d4c8 = this;
            return _0x352743().wrap(function (_0x54863f) {
              for (;;) {
                switch (_0x54863f.prev = _0x54863f.next) {
                  case 0x0:
                    this.PlayLeaveFgCoinEffects();
                    this.m_gameView.FgCounter.HideRoundLabel();
                    this.m_gameView.FgCollect.node.active = true;
                    _0xf1354b = this.m_gameView.SpinAck.FreeTotalWin - this.m_gameView.JpWin > 0x0 ? this.m_gameView.SpinAck.FreeTotalWin - this.m_gameView.JpWin : 0x0;
                    _0x5831ea = _0x352743().mark(function _0x45757a(_0x16fb14) {
                      var _0x3e5f3c;
                      var _0x50566a;
                      return _0x352743().wrap(function (_0x46712b) {
                        for (;;) {
                          switch (_0x46712b.prev = _0x46712b.next) {
                            case 0x0:
                              _0x3e5f3c = _0x352743().mark(function _0x1b6805(_0x1e2cad) {
                                var _0xd7e0f;
                                var _0x23184e;
                                var _0x5e9988;
                                var _0x1eea2d;
                                var _0x2b5e4a;
                                var _0xd87ef9;
                                return _0x352743().wrap(function (_0x272165) {
                                  for (;;) {
                                    switch (_0x272165.prev = _0x272165.next) {
                                      case 0x0:
                                        if (!(_0x27d4c8.m_gameView.SinglePlateMgr.PlateInfo[_0x16fb14].Col[_0x1e2cad].Number > 0x0)) {
                                          _0x272165.next = 0x13;
                                          break;
                                        }
                                        0x3;
                                        _0xd7e0f = _0x27d4c8.CreateFlyNode_NodePool(_0x16fb14, _0x1e2cad, 0x3);
                                        _0x23184e = _0x27d4c8.m_symbolSpines[_0x16fb14][_0x1e2cad][_0xcba612.LAYERS.TWO].node;
                                        (_0x5e9988 = _0x23184e.parent).removeChild(_0x23184e);
                                        _0x27d4c8.m_effectNode[_0xcba612.LAYERS.FOUR].addChild(_0x23184e);
                                        _0x14c118.SetOrderedZindex(_0x23184e, _0xcba612.BIG_NUM);
                                        _0x1eea2d = _0x27d4c8.GetWorldLocation(_0xd7e0f.getComponent(_0x4bf747));
                                        _0x2b5e4a = _0x27d4c8.GetWorldLocation(_0x27d4c8.m_gameView.FgCollect);
                                        _0xd87ef9 = function () {
                                          var _0x5b2c5a = _0x26fe6f(_0x352743().mark(function _0x11fc24() {
                                            return _0x352743().wrap(function (_0x1fa2bc) {
                                              for (;;) {
                                                switch (_0x1fa2bc.prev = _0x1fa2bc.next) {
                                                  case 0x0:
                                                    _0x27c287.Play(_0xcba612.AudioClips.scatter_add_end);
                                                    _0x27d4c8.m_gameView.FgCollect.AddNum(_0x27d4c8.m_gameView.SinglePlateMgr.PlateInfo[_0x16fb14].Col[_0x1e2cad].Number, _0xf1354b);
                                                  case 0x2:
                                                  case "end":
                                                    return _0x1fa2bc.stop();
                                                }
                                              }
                                            }, _0x11fc24);
                                          }));
                                          return function () {
                                            return _0x5b2c5a.apply(this, arguments);
                                          };
                                        }();
                                        _0x27c287.Play(_0xcba612.AudioClips.scatter_add_fly);
                                        _0x27d4c8.m_symbolAddEffectSpines[_0x16fb14][_0x1e2cad].SetNodeActivity(false);
                                        _0x272165.next = 0xf;
                                        return _0x27d4c8.ShowQuadraticBez(_0xd7e0f, _0x1eea2d, _0x2b5e4a, _0xd87ef9, 0.1);
                                      case 0xf:
                                        _0x27d4c8.m_effectNode[_0xcba612.LAYERS.FOUR].removeChild(_0x23184e);
                                        _0x5e9988.addChild(_0x23184e);
                                        _0x14c118.SetOrderedZindex(_0x23184e, _0x27d4c8.EncodePos(_0x16fb14, _0x1e2cad, _0xcba612.Symbol.Coin));
                                        _0x27d4c8.CleanFlyNode(0x3, 0x0);
                                      case 0x13:
                                      case "end":
                                        return _0x272165.stop();
                                    }
                                  }
                                }, _0x1b6805);
                              });
                              _0x50566a = 0x0;
                            case 0x2:
                              if (!(_0x50566a < _0xcba612.ROW)) {
                                _0x46712b.next = 0x7;
                                break;
                              }
                              return _0x46712b.delegateYield(_0x3e5f3c(_0x50566a), 't0', 0x4);
                            case 0x4:
                              ++_0x50566a;
                              _0x46712b.next = 0x2;
                              break;
                            case 0x7:
                            case "end":
                              return _0x46712b.stop();
                          }
                        }
                      }, _0x45757a);
                    });
                    _0x33dfb9 = 0x0;
                  case 0x6:
                    if (!(_0x33dfb9 < _0xcba612.COL)) {
                      _0x54863f.next = 0xb;
                      break;
                    }
                    return _0x54863f.delegateYield(_0x5831ea(_0x33dfb9), 't0', 0x8);
                  case 0x8:
                    ++_0x33dfb9;
                    _0x54863f.next = 0x6;
                    break;
                  case 0xb:
                  case "end":
                    return _0x54863f.stop();
                }
              }
            }, _0xfb1007, this);
          }));
          return function () {
            return _0x1b5a4f.apply(this, arguments);
          };
        }();
        _0x3d5764.FgStop = function () {
          var _0x1fbb04 = _0x26fe6f(_0x352743().mark(function _0x4f87a5(_0x1c4012, _0x433bc6, _0x1785a4) {
            var _0x59bb11;
            var _0x4a7e2f;
            return _0x352743().wrap(function (_0x368719) {
              for (;;) {
                switch (_0x368719.prev = _0x368719.next) {
                  case 0x0:
                    _0x59bb11 = this.SetEffectInfo(_0x1c4012, _0x433bc6, _0x1785a4);
                    _0x4a7e2f = _0x59bb11.getComponent(_0x4d51fe);
                    this.m_gameView.SinglePlateMgr.SingleReelNodes[_0x433bc6][_0x1785a4].getComponent(_0xa6820d).AllColumns[_0xcba612.MIDDLE_PLATE_INDEX].HideSymbol();
                    if (this.m_gameView.IsFreeGame && _0x1c4012.Symbol > _0xcba612.Symbol.WILD && _0x1c4012.Symbol != _0xcba612.Symbol.Coin) {
                      _0x4a7e2f.PlayStop(true);
                    } else {
                      _0x4a7e2f.PlayStop();
                    }
                    this.m_gameView.SinglePlateMgr.HasNewCoin = true;
                  case 0x5:
                  case "end":
                    return _0x368719.stop();
                }
              }
            }, _0x4f87a5, this);
          }));
          return function (_0x269f3b, _0x2f0b3d, _0x300a56) {
            return _0x1fbb04.apply(this, arguments);
          };
        }();
        _0x3d5764.PlayNearWin = function (_0x1d3a7a, _0xf6513f) {
          this.m_gameView.FGBGSpine.PlayNearWin();
          this.m_nearWinEffect.setPosition(this.GetPosX(_0x1d3a7a), this.GetPosY(_0xf6513f));
          this.m_nearWinEffect.active = true;
        };
        _0x3d5764.CloseNearWin = function () {
          this.m_gameView.FGBGSpine.PlayIdle();
          this.m_nearWinEffect.active = false;
        };
        _0x3d5764.SetEffectInfo = function (_0x20f0b7, _0x5b43e7, _0xa03ae5) {
          var _0x10103b = this.CreateStaticEffectNode(_0x5b43e7, _0xa03ae5, _0x20f0b7.Symbol);
          var _0xe64e29 = _0x10103b.getComponent(_0x1a5c29);
          if (_0x20f0b7.JpType > 0x0) {
            if (_0x20f0b7.JpMult > 0x1) {
              _0xe64e29.PlayJpMultiStart();
              _0xe64e29.SetMultiplyLabel(_0x20f0b7.JpMult);
            } else {
              _0xe64e29.PlayJpIdle();
              _0xe64e29.ClearJpLabel();
            }
            _0xe64e29.SetSkin(_0xcba612.JP_SKIN_STRING[_0x20f0b7.JpType]);
          } else if (_0x20f0b7.Value) {
            _0xe64e29.PlayNumStart();
            _0xe64e29.SetNumLabel_n_Value(_0x20f0b7.Value);
          }
          return _0x10103b;
        };
        _0x3d5764.CreateStaticEffectNode = function (_0x23d99f, _0xa962f7, _0xd4611b) {
          _0xd4611b = _0xd4611b || _0xcba612.Symbol.Coin;
          this.m_gameView.SinglePlateMgr.IsLocked[_0x23d99f][_0xa962f7] = true;
          return this.m_gameView.EffectPlate.CreateEffectNode_NodePool(_0x23d99f, _0xa962f7, _0xcba612.LAYERS.TWO, _0xd4611b);
        };
        _0x3d5764.GetScatterType = function (_0x584a15) {
          return _0x584a15 - _0xcba612.Symbol.Scatter_Blue;
        };
        _0x3d5764.GetScatterType2 = function (_0x13c630) {
          return _0x13c630 - _0xcba612.Symbol.Coin_Blue;
        };
        _0x3d5764.DecodeServerPos = function (_0x5f46f0) {
          var _0x305995 = [];
          _0x305995.push(Math.floor(_0x5f46f0 / _0xcba612.ROW));
          _0x305995.push(_0x5f46f0 % _0xcba612.ROW);
          return _0x305995;
        };
        _0x3d5764.EncodePos = function (_0x1559d3, _0x18debd, _0x37a400) {
          return 0x3e8 * _0x1559d3 + 0x64 * _0x18debd + _0x37a400;
        };
        _0x3d5764.DecodePos = function (_0x148923) {
          var _0x5bf4d4 = new Array();
          _0x5bf4d4.push(Math.floor(_0x148923 / 0x3e8));
          _0x5bf4d4.push(Math.floor(_0x148923 % 0x3e8 / 0x64));
          _0x5bf4d4.push(Math.floor(_0x148923 % 0x64));
          return _0x5bf4d4;
        };
        _0x3d5764.PlayScatterToEar = function () {
          var _0x52c81f = this.m_gameView.RoundInfo.BlueData;
          var _0x2e099e = this.m_gameView.RoundInfo.RedData;
          var _0x271d64 = this.m_gameView.RoundInfo.GreenData;
          if (_0x52c81f) {
            for (var _0x158f04 = 0x0; _0x158f04 < _0x52c81f.length; ++_0x158f04) {
              var _0x4c121c = this.DecodeServerPos(_0x52c81f[_0x158f04].ScatterPos);
              var _0x119e72 = _0x4c121c[0x0];
              var _0xee4a20 = _0x4c121c[0x1];
              this.m_symbolSpines[_0x119e72][_0xee4a20][_0xcba612.LAYERS.TWO].getComponent(_0x37d95b).SetFgScatterAnim(true);
              this.m_gameView.FgCounter.AddCoinCount();
            }
          }
          if (_0x2e099e) {
            for (var _0x19af72 = 0x0; _0x19af72 < _0x2e099e.length; ++_0x19af72) {
              var _0x4b20c3 = this.DecodeServerPos(_0x2e099e[_0x19af72].ScatterPos);
              var _0x5d18a1 = _0x4b20c3[0x0];
              var _0x522cd2 = _0x4b20c3[0x1];
              this.m_symbolSpines[_0x5d18a1][_0x522cd2][_0xcba612.LAYERS.TWO].getComponent(_0x37d95b).SetFgScatterAnim(true);
              this.m_gameView.FgCounter.AddCoinCount();
            }
          }
          if (_0x271d64) {
            for (var _0x2f0897 = 0x0; _0x2f0897 < _0x271d64.length; ++_0x2f0897) {
              var _0x54770f = this.DecodeServerPos(_0x271d64[_0x2f0897].ScatterPos);
              var _0x159020 = _0x54770f[0x0];
              var _0x42a92e = _0x54770f[0x1];
              this.m_symbolSpines[_0x159020][_0x42a92e][_0xcba612.LAYERS.TWO].getComponent(_0x37d95b).SetFgScatterAnim(true);
              this.m_gameView.FgCounter.AddCoinCount();
            }
          }
        };
        _0x3d5764.NodeScalingEffect = function () {
          var _0x59e1b3 = _0x26fe6f(_0x352743().mark(function _0x5adb6e(_0x164f0e, _0x2e0df0, _0x227851, _0x557eb8) {
            return _0x352743().wrap(function (_0x74ab66) {
              for (;;) {
                switch (_0x74ab66.prev = _0x74ab66.next) {
                  case 0x0:
                    _0x164f0e.active = true;
                    _0x164f0e.getComponent(_0x4bf747).play("ScatterN_Start");
                    _0x74ab66.next = 0x4;
                    return _0xd8402d.Wait(this, _0x557eb8);
                  case 0x4:
                  case "end":
                    return _0x74ab66.stop();
                }
              }
            }, _0x5adb6e, this);
          }));
          return function (_0x2f3801, _0x1b87f1, _0x1ed135, _0xee2ec6) {
            return _0x59e1b3.apply(this, arguments);
          };
        }();
        _0x3d5764.GetMiddlePos = function (_0x22ba13, _0x5e493a) {
          var _0x41510f = _0x5e493a.x - _0x22ba13.x;
          var _0xd434af = _0x5e493a.y - _0x22ba13.y;
          var _0x38a4dc = _0x1536ed((_0x22ba13.x + _0x5e493a.x) / 0x2, (_0x22ba13.y + _0x5e493a.y) / 0x2);
          var _0x4d86b1 = _0x1536ed();
          _0x4d86b1.x = _0x38a4dc.x - _0xd434af / 0x2;
          _0x4d86b1.y = _0x38a4dc.y + _0x41510f / 0x2;
          if (_0x4d86b1.x > 0x139 || _0x4d86b1.x < -0x139) {
            _0x4d86b1.x = _0x38a4dc.x + _0xd434af / 0x2;
            _0x4d86b1.y = _0x38a4dc.y - _0x41510f / 0x2;
          }
          return _0x4d86b1;
        };
        _0x3d5764.flyCoinScale = function () {
          var _0x940974 = _0x26fe6f(_0x352743().mark(function _0x47530e(_0x4c53ae) {
            return _0x352743().wrap(function (_0x2370e7) {
              for (;;) {
                switch (_0x2370e7.prev = _0x2370e7.next) {
                  case 0x0:
                    _0x174aa1(_0x4c53ae).to(_0xcba612.scaleUpTime, {
                      'scale': _0x1536ed(1.5, 1.5)
                    }).to(_0xcba612.scaleDownTime, {
                      'scale': _0x1536ed(0.8, 0.8)
                    }).start();
                    _0x2370e7.next = 0x3;
                    return _0xd8402d.Wait(this, _0xcba612.scaleUpTime + _0xcba612.scaleDownTime);
                  case 0x3:
                    _0x4c53ae.setScale(0x1, 0x1);
                  case 0x4:
                  case "end":
                    return _0x2370e7.stop();
                }
              }
            }, _0x47530e, this);
          }));
          return function (_0x3040d5) {
            return _0x940974.apply(this, arguments);
          };
        }();
        _0x3d5764.ShowQuadraticBez = function () {
          var _0x3aec30 = _0x26fe6f(_0x352743().mark(function _0x491f03(_0x36ecf1, _0x5b099e, _0x1ca111, _0xb3c0d7, _0x533422) {
            var _0x565f8d;
            var _0x46cdcd;
            var _0x4cebd2;
            var _0x228af5;
            var _0x26c7aa;
            return _0x352743().wrap(function (_0x41d6ed) {
              for (;;) {
                switch (_0x41d6ed.prev = _0x41d6ed.next) {
                  case 0x0:
                    if (undefined === _0x533422) {
                      _0x533422 = 0x0;
                    }
                    _0x565f8d = _0x36ecf1.position.clone();
                    (_0x46cdcd = new _0x4232fe()).x = _0x1ca111.x - _0x5b099e.x + _0x36ecf1.position.x;
                    _0x46cdcd.y = _0x1ca111.y - _0x5b099e.y + _0x36ecf1.position.y;
                    _0x46cdcd.z = _0x1ca111.z - _0x5b099e.z + _0x36ecf1.position.z;
                    _0x4cebd2 = this.GetMiddlePos(_0x565f8d, _0x46cdcd);
                    _0x228af5 = [_0x565f8d, _0x4cebd2, _0x46cdcd];
                    _0x26c7aa = new _0x5b815f.Bezier(_0x228af5);
                    _0x174aa1(_0x36ecf1).to(_0xcba612.ActualFlyTime, {
                      'position': _0x46cdcd
                    }, {
                      'onUpdate': function (_0x541245, _0x1c187e) {
                        _0x36ecf1.position = _0x26c7aa.GetPosition(_0x1c187e);
                      }
                    }).start();
                    _0x41d6ed.next = 0xc;
                    return _0xd8402d.Wait(this, _0xcba612.ActualFlyTime);
                  case 0xc:
                    _0x41d6ed.next = 0xe;
                    return _0xb3c0d7();
                  case 0xe:
                    _0x41d6ed.next = 0x10;
                    return _0xd8402d.Wait(this, _0x533422);
                  case 0x10:
                  case "end":
                    return _0x41d6ed.stop();
                }
              }
            }, _0x491f03, this);
          }));
          return function (_0xd35404, _0x3e9561, _0x896e5a, _0x4f9a57, _0xb0019a) {
            return _0x3aec30.apply(this, arguments);
          };
        }();
        _0x3d5764.FlyANode = function () {
          var _0x3377bb = _0x26fe6f(_0x352743().mark(function _0x33a67e(_0x30f4db, _0x230d0e, _0x22e40f, _0x2f2c12, _0x355cfa) {
            var _0x3e2192;
            var _0x354652;
            return _0x352743().wrap(function (_0x5403a2) {
              for (;;) {
                switch (_0x5403a2.prev = _0x5403a2.next) {
                  case 0x0:
                    _0x3e2192 = _0x22e40f.position.clone();
                    (_0x354652 = new _0x4232fe()).x = _0x230d0e.x - _0x30f4db.x + _0x22e40f.position.x;
                    _0x354652.y = _0x230d0e.y - _0x30f4db.y + _0x22e40f.position.y;
                    _0x354652.z = _0x230d0e.z - _0x30f4db.z + _0x22e40f.position.z;
                    _0x174aa1(_0x22e40f).to(_0x2f2c12, {
                      'position': _0x354652
                    }).delay(0x1).call(function () {
                      _0x22e40f.setPosition(_0x3e2192);
                    }).start();
                    if (!_0x355cfa) {
                      _0x5403a2.next = 0x9;
                      break;
                    }
                    _0x5403a2.next = 0x9;
                    return _0xd8402d.Wait(this, _0x355cfa);
                  case 0x9:
                  case "end":
                    return _0x5403a2.stop();
                }
              }
            }, _0x33a67e, this);
          }));
          return function (_0x2cdbfa, _0x619d3, _0x47b57e, _0x21cb2c, _0x1cfd65) {
            return _0x3377bb.apply(this, arguments);
          };
        }();
        _0x3d5764.GetWorldLocation = function (_0x501e1f) {
          return _0x501e1f.getComponent(_0x21d275).convertToWorldSpaceAR(_0x1536ed(0x0, 0x0, 0x0));
        };
        _0x3d5764.GetPosX = function (_0x5c4ab6) {
          return this.m_gameView.SlotReels.ReelXPos[_0x5c4ab6];
        };
        _0x3d5764.GetPosY = function (_0x125572) {
          return (_0xcba612.ROW - 2.5 - _0x125572 + 0.5) * _0xcba612.SymbolHeight;
        };
        _0x4b136a(_0x4dafb8, [{
          'key': 'CurAwardLines',
          'get': function () {
            return this.m_curAwardLines;
          }
        }]);
        return _0x4dafb8;
      }(_0x14cfe4);
      _0x435264 = _0x196fb6(_0x177f5f.prototype, 'm_symbolEffectPrefabs', [_0x41e7f4], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x50b626 = _0x196fb6(_0x177f5f.prototype, "m_symbolAddEffectPrefabs", [_0x386911], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x39782c = _0x196fb6(_0x177f5f.prototype, 'm_effectNode', [_0x1c42bc], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x71c755 = _0x196fb6(_0x177f5f.prototype, "m_flyEffectPrefabs", [_0x4803d3], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x2f45b5 = _0x196fb6(_0x177f5f.prototype, "m_nearWinEffectPrefab", [_0x54e006], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "eb033pmYDhAjadYFiwbi8gp", "SpineKit", undefined);
      var _0x274c8e = function () {
        function _0x515933() {}
        _0x515933.ForceCancel = function (_0x52bccc, _0x217085) {
          var _0x367f68;
          var _0x28c701;
          var _0x29b390;
          if (!(null == (_0x367f68 = this.m_cancelCbs) || null == (_0x28c701 = (_0x29b390 = _0x367f68[_0x52bccc])[_0x217085]))) {
            _0x28c701.call(_0x29b390);
          }
        };
        _0x515933.PlayAnimation = function (_0x2704b8, _0x1d7fa1, _0x5e9b47, _0x53a919, _0x101aba, _0x4d6234) {
          var _0x599f6c = this;
          if (undefined === _0x5e9b47) {
            _0x5e9b47 = false;
          }
          if (undefined === _0x53a919) {
            _0x53a919 = 0x0;
          }
          if (undefined === _0x4d6234) {
            _0x4d6234 = true;
          }
          return new Promise(function (_0x5f2f77) {
            _0x599f6c.m_cancelCbs[_0x2704b8.name] = {};
            _0x599f6c.m_cancelCbs[_0x2704b8.name][_0x1d7fa1] = function () {
              _0x5f2f77(true);
            };
            var _0x412fb1 = true;
            var _0x4c9d28 = _0x2704b8.getState();
            if (_0x4c9d28) {
              var _0x522a09 = _0x4c9d28.expandToIndex(_0x53a919);
              if (_0x522a09) {
                var _0x31785d = _0x522a09.animation.name + '.' + _0x1d7fa1;
                _0x412fb1 = undefined === _0x4c9d28.data.animationToMixTime[_0x31785d];
              }
            }
            if (_0x412fb1) {
              _0x2704b8.clearTrack(_0x53a919);
              if (_0x4d6234) {
                _0x2704b8.setToSetupPose();
              }
            }
            var _0x15a341 = _0x2704b8.setAnimation(_0x53a919, _0x1d7fa1, _0x5e9b47);
            if (_0x15a341) {
              _0x2704b8.setTrackEventListener(_0x15a341, function (_0x2f88c2, _0x4999a3) {
                if (_0x15a341 && _0x15a341.animation.name == _0x2f88c2.animation.name) {
                  if (!(null == _0x101aba)) {
                    _0x101aba(_0x4999a3.data.name);
                  }
                }
              });
              _0x2704b8.setTrackCompleteListener(_0x15a341, function (_0x51bd29) {
                if (_0x15a341 && _0x15a341.animation.name == _0x51bd29.animation.name) {
                  _0x2704b8.setTrackCompleteListener(_0x15a341, function () {});
                  _0x2704b8.setTrackInterruptListener(_0x15a341, function () {});
                  if (_0x599f6c.m_cancelCbs[_0x2704b8.name] && _0x599f6c.m_cancelCbs[_0x2704b8.name][_0x1d7fa1]) {
                    _0x599f6c.m_cancelCbs[_0x2704b8.name][_0x1d7fa1] = null;
                  }
                  _0x5f2f77(false);
                }
              });
              _0x2704b8.setTrackInterruptListener(_0x15a341, function (_0x5df2d6) {
                if (_0x15a341 && _0x15a341.animation.name == _0x5df2d6.animation.name) {
                  _0x2704b8.setTrackCompleteListener(_0x15a341, function () {});
                  _0x2704b8.setTrackInterruptListener(_0x15a341, function () {});
                  if (_0x599f6c.m_cancelCbs[_0x2704b8.name] && _0x599f6c.m_cancelCbs[_0x2704b8.name][_0x1d7fa1]) {
                    _0x599f6c.m_cancelCbs[_0x2704b8.name][_0x1d7fa1] = null;
                  }
                  _0x5f2f77(true);
                }
              });
            } else {
              _0x2704b8.setCompleteListener(function () {
                _0x2704b8.setCompleteListener(null);
                _0x2704b8.setInterruptListener(null);
                if (_0x599f6c.m_cancelCbs[_0x2704b8.name] && _0x599f6c.m_cancelCbs[_0x2704b8.name][_0x1d7fa1]) {
                  _0x599f6c.m_cancelCbs[_0x2704b8.name][_0x1d7fa1] = null;
                }
                _0x5f2f77(false);
              });
              _0x2704b8.setInterruptListener(function () {
                _0x2704b8.setCompleteListener(null);
                _0x2704b8.setInterruptListener(null);
                if (_0x599f6c.m_cancelCbs[_0x2704b8.name] && _0x599f6c.m_cancelCbs[_0x2704b8.name][_0x1d7fa1]) {
                  _0x599f6c.m_cancelCbs[_0x2704b8.name][_0x1d7fa1] = null;
                }
                _0x5f2f77(true);
              });
            }
          });
        };
        return _0x515933;
      }();
      var _0x5958bc;
      var _0x41b4e9;
      var _0x301c8a;
      var _0x8aa5d1;
      var _0x5adebd;
      _0x274c8e.m_cancelCbs = {};
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, '0081139pqtKbIbX2z5Ka/4r', "GameIntro", undefined);
      var _0x76b79e = _0x3e9873.property;
      _0x5958bc = _0x76b79e({
        'type': _0x959fe3.Skeleton,
        'tooltip': "spine"
      });
      _0x41b4e9 = _0x76b79e({
        'type': _0x84773f,
        'tooltip': "硬幣別點"
      });
      _0x301c8a = function (_0x49afa3) {
        function _0x4dd4ac() {
          var _0x4d3a29;
          var _0x3b4db0 = arguments.length;
          var _0x40a389 = new Array(_0x3b4db0);
          for (var _0x578823 = 0x0; _0x578823 < _0x3b4db0; _0x578823++) {
            _0x40a389[_0x578823] = arguments[_0x578823];
          }
          _0xec902e(_0x4d3a29 = _0x49afa3.call.apply(_0x49afa3, [this].concat(_0x40a389)) || this, "m_spine", _0x8aa5d1, _0x11be3a(_0x4d3a29));
          _0xec902e(_0x4d3a29, "m_scatterNodes", _0x5adebd, _0x11be3a(_0x4d3a29));
          _0x4d3a29.m_gameView = null;
          return _0x4d3a29;
        }
        _0xed7a37(_0x4dd4ac, _0x49afa3);
        var _0x43663c = _0x4dd4ac.prototype;
        _0x43663c.Init = function (_0x2bb4f9) {
          this.m_gameView = _0x2bb4f9;
        };
        _0x43663c.start = function () {
          this.m_spine.paused = false;
          _0x274c8e.PlayAnimation(this.m_spine, "Start");
          this.m_spine.paused = true;
        };
        _0x43663c.ShowIntro = function () {
          var _0x59b491 = _0x26fe6f(_0x352743().mark(function _0x393d23() {
            var _0x276eb5 = this;
            return _0x352743().wrap(function (_0x44f51f) {
              for (;;) {
                switch (_0x44f51f.prev = _0x44f51f.next) {
                  case 0x0:
                    _0x27c287.Play(_0xcba612.AudioClips.MG_in);
                    this.m_spine.paused = false;
                    _0x44f51f.next = 0x4;
                    return _0x274c8e.PlayAnimation(this.m_spine, "Start", false, 0x0, function (_0x38abc1) {
                      for (var _0x1760dc = 0x0; _0x1760dc < _0x276eb5.m_gameView.ScatterCoinSpines.length; ++_0x1760dc) {
                        _0x276eb5.m_gameView.ScatterCoinSpines[_0x1760dc].ChangeScatterLevel(_0x276eb5.m_gameView.CrackLevels[_0x1760dc]);
                      }
                      if (_0x38abc1 === 'Scatter') {
                        for (var _0x3694ef = 0x0; _0x3694ef < _0x276eb5.m_scatterNodes.length; _0x3694ef++) {
                          _0x276eb5.m_scatterNodes[_0x3694ef].active = true;
                        }
                      }
                    });
                  case 0x4:
                    this.node.active = false;
                  case 0x5:
                  case "end":
                    return _0x44f51f.stop();
                }
              }
            }, _0x393d23, this);
          }));
          return function () {
            return _0x59b491.apply(this, arguments);
          };
        }();
        return _0x4dd4ac;
      }(_0x14cfe4);
      _0x8aa5d1 = _0x196fb6(_0x301c8a.prototype, "m_spine", [_0x5958bc], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5adebd = _0x196fb6(_0x301c8a.prototype, "m_scatterNodes", [_0x41b4e9], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      var _0x2b84eb;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, '2ec1cIAvvRKm7bPulbUtZrK', "AddFreeState", undefined);
      var _0x477cbd = _0x3e9873.ccclass;
      _0x2b84eb = _0x477cbd("AddFreeState");
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "dbf799I+wxK7bUDuGGydDMe", "AwardState", undefined);
      var _0x8bd10e;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "e7f8b/Tj+BPnbx3LYPB6SOb", "CheckJpState", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "893d3cK4zFHprEluo8HOPbQ", "CheckMaxFlagState", undefined);
      var _0x52c57b = _0x3e9873.ccclass;
      _0x8bd10e = _0x52c57b("CheckMaxFlagState");
      var _0x2612de;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "88b7epI/hVDSLV2aGmkznbo", "CheckState", undefined);
      var _0x5395e8 = _0x3e9873.ccclass;
      _0x2612de = _0x5395e8("CheckState");
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "93221Q7nMlOX5MztNbc4CxR", 'CoinState', undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "10905Iqr4xHxr6z7EIRhvXS", "EffectStartState", undefined);
      var _0x20f9ba;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "079abAkglhFvYQ3atI3VejG", "EnterFreeState", undefined);
      var _0x42ea58 = _0x3e9873.ccclass;
      _0x20f9ba = _0x42ea58("EnterFreeState");
      var _0x4b8435;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, 'fe1bbFkQt9Gmqpd6cOo97f2', 'FeatureShowState', undefined);
      var _0x529ab0 = _0x3e9873.ccclass;
      _0x4b8435 = _0x529ab0("FeatureShowState");
      var _0x3698d3;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "cd709OrF4NE1bWzd+ZSYfwm", "FullRewardState", undefined);
      var _0x4a6304 = _0x3e9873.ccclass;
      _0x3698d3 = _0x4a6304("FullRewardState");
      var _0x4275f7;
      var _0x5b1fd0;
      var _0xe40f1c;
      var _0x4159de;
      var _0x43ebea;
      var _0x422681;
      var _0x37d7d2;
      var _0x44ad9c;
      var _0x5f01d6;
      var _0x14f158;
      var _0x3f708e;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "77acaFcNgVDULwRQEtO5wYa", "BigWinComponent", undefined);
      var _0x38b27b = {
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
      var _0x7de26c = _0x3e9873.property;
      _0x4275f7 = _0x7de26c({
        'type': _0x959fe3.Skeleton,
        'tooltip': "spine"
      });
      _0x5b1fd0 = _0x7de26c({
        'type': _0x959fe3.Skeleton,
        'tooltip': '遮罩'
      });
      _0xe40f1c = _0x7de26c({
        'type': _0x959fe3.Skeleton,
        'tooltip': "Extra Spine"
      });
      _0x4159de = _0x7de26c({
        'type': _0x2855cd,
        'tooltip': '贏分'
      });
      _0x43ebea = _0x7de26c({
        'type': _0x3cf955,
        'tooltip': "End extra effect delay time"
      });
      _0x3f708e = function (_0x562882) {
        function _0x3ea5c3() {
          var _0x1fa0d1;
          var _0x190097 = arguments.length;
          var _0x4c302c = new Array(_0x190097);
          for (var _0x23d6ba = 0x0; _0x23d6ba < _0x190097; _0x23d6ba++) {
            _0x4c302c[_0x23d6ba] = arguments[_0x23d6ba];
          }
          _0xec902e(_0x1fa0d1 = _0x562882.call.apply(_0x562882, [this].concat(_0x4c302c)) || this, "m_spine", _0x422681, _0x11be3a(_0x1fa0d1));
          _0xec902e(_0x1fa0d1, "m_maskSpine", _0x37d7d2, _0x11be3a(_0x1fa0d1));
          _0xec902e(_0x1fa0d1, "m_extraSpine", _0x44ad9c, _0x11be3a(_0x1fa0d1));
          _0xec902e(_0x1fa0d1, "m_winLabel", _0x5f01d6, _0x11be3a(_0x1fa0d1));
          _0xec902e(_0x1fa0d1, "m_endExtraDelayTime", _0x14f158, _0x11be3a(_0x1fa0d1));
          _0x1fa0d1.m_isEnd = true;
          _0x1fa0d1.m_isShowEnd = true;
          _0x1fa0d1.m_isShowAward = false;
          _0x1fa0d1.m_eventCb = null;
          _0x1fa0d1.m_showValueCb = null;
          _0x1fa0d1.m_cancelCb = null;
          _0x1fa0d1.m_lvl = 0x0;
          _0x1fa0d1.m_nowLvl = 0x0;
          _0x1fa0d1.m_win = 0x0;
          _0x1fa0d1.m_showWin = 0x0;
          _0x1fa0d1.m_step = 0x0;
          _0x1fa0d1.m_isShowingExtraEnd = false;
          return _0x1fa0d1;
        }
        _0xed7a37(_0x3ea5c3, _0x562882);
        var _0xde34ea = _0x3ea5c3.prototype;
        _0xde34ea.update = function (_0x57f4f4) {
          if (this.m_isShowAward) {
            this.m_showWin += this.m_step * _0x57f4f4;
            if (this.m_showWin >= this.m_win) {
              this.m_showWin = this.m_win;
              this.m_isShowAward = false;
            }
            this.m_winLabel.string = _0x14c118.FormatNumberThousands(_0x14c118.strip(this.m_showValueCb ? this.m_showValueCb(this.m_showWin) : this.m_showWin), _0x14c118.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          }
        };
        _0xde34ea.Init = function (_0xfb681a, _0x5188e2) {
          this.m_eventCb = _0xfb681a;
          this.m_showValueCb = _0x5188e2;
          if (this.m_maskSpine) {
            this.m_maskSpine.node.active = false;
          }
        };
        _0xde34ea.Show = function (_0x47b933, _0x29d5ab, _0x1bcf2c) {
          if (undefined === _0x1bcf2c) {
            _0x1bcf2c = true;
          }
          if (_0x47b933 > 0x0 && _0x29d5ab > _0x3ea5c3.Level.NONE && _0x29d5ab <= _0x3ea5c3.Level.SUPER) {
            this.m_isEnd = false;
            this.m_lvl = _0x29d5ab;
            this.m_nowLvl = _0x1bcf2c ? 0x0 : _0x29d5ab - 0x1;
            this.m_win = _0x47b933;
            this.m_showWin = 0x0;
            this.m_winLabel.string = '0';
            this.m_isShowEnd = false;
            var _0x47259d = 0x0;
            for (var _0x53a635 = _0x1bcf2c ? _0x3ea5c3.Level.BIG : this.m_lvl; _0x53a635 <= this.m_lvl; _0x53a635++) {
              var _0x237f65 = '';
              var _0x35c923 = '';
              switch (_0x53a635) {
                case _0x3ea5c3.Level.BIG:
                  _0x237f65 = _0x38b27b.Big.Start;
                  _0x35c923 = _0x38b27b.Big.End;
                  break;
                case _0x3ea5c3.Level.MEGA:
                  _0x237f65 = _0x38b27b.Mega.Start;
                  _0x35c923 = _0x38b27b.Mega.End;
                  break;
                case _0x3ea5c3.Level.SUPER:
                  _0x237f65 = _0x38b27b.Super.Start;
                  _0x35c923 = _0x38b27b.Super.End;
              }
              if ('' !== _0x237f65 && '' !== _0x35c923) {
                var _0xb45115 = this.m_spine.findAnimation(_0x237f65);
                if (_0xb45115) {
                  _0x47259d += _0xb45115.duration;
                }
              }
            }
            this.m_step = _0x14c118.divide(this.m_win, _0x47259d || 0x5);
            this.m_isShowAward = true;
            if (this.m_maskSpine) {
              this.m_maskSpine.node.active = true;
              this.PlayAnimation(this.m_maskSpine, "BigWin_Start");
            }
            this.ShowNext();
          }
        };
        _0xde34ea.Stop = function () {
          if (!this.m_isShowEnd) {
            if (this.m_cancelCb) {
              this.m_cancelCb();
            }
            this.ShowEnd();
          }
        };
        _0xde34ea.SetSkin = function (_0x5b0a0b) {
          this.m_spine.setSkin(_0x5b0a0b);
        };
        _0xde34ea.ShowNext = function () {
          var _0xaeb4e3 = _0x26fe6f(_0x352743().mark(function _0x2b6a66() {
            var _0x2d55ae;
            return _0x352743().wrap(function (_0x53679b) {
              for (;;) {
                switch (_0x53679b.prev = _0x53679b.next) {
                  case 0x0:
                    if (this.m_nowLvl !== this.m_lvl) {
                      _0x53679b.next = 0x4;
                      break;
                    }
                    this.ShowEnd();
                    _0x53679b.next = 0x17;
                    break;
                  case 0x4:
                    this.m_nowLvl++;
                    _0x2d55ae = false;
                    _0x53679b.t0 = this.m_nowLvl;
                    _0x53679b.next = _0x53679b.t0 === _0x3ea5c3.Level.BIG ? 0x9 : _0x53679b.t0 === _0x3ea5c3.Level.MEGA ? 0xe : _0x53679b.t0 === _0x3ea5c3.Level.SUPER ? 0x12 : 0x16;
                    break;
                  case 0x9:
                    this.CheckExtraSpineStart();
                    _0x53679b.next = 0xc;
                    return this.PlayAnimation(this.m_spine, _0x38b27b.Big.Start);
                  case 0xc:
                    _0x2d55ae = _0x53679b.sent;
                    return _0x53679b.abrupt('break', 0x16);
                  case 0xe:
                    _0x53679b.next = 0x10;
                    return this.PlayAnimation(this.m_spine, _0x38b27b.Mega.Start);
                  case 0x10:
                    _0x2d55ae = _0x53679b.sent;
                    return _0x53679b.abrupt("break", 0x16);
                  case 0x12:
                    _0x53679b.next = 0x14;
                    return this.PlayAnimation(this.m_spine, _0x38b27b.Super.Start);
                  case 0x14:
                    _0x2d55ae = _0x53679b.sent;
                    return _0x53679b.abrupt("break", 0x16);
                  case 0x16:
                    if (!_0x2d55ae) {
                      this.ShowNext();
                    }
                  case 0x17:
                  case "end":
                    return _0x53679b.stop();
                }
              }
            }, _0x2b6a66, this);
          }));
          return function () {
            return _0xaeb4e3.apply(this, arguments);
          };
        }();
        _0xde34ea.ShowEnd = function () {
          var _0x4c4de7 = _0x26fe6f(_0x352743().mark(function _0x4798e3() {
            var _0x19ecd1;
            return _0x352743().wrap(function (_0x254323) {
              for (;;) {
                switch (_0x254323.prev = _0x254323.next) {
                  case 0x0:
                    if (!this.m_isShowEnd) {
                      _0x254323.next = 0x2;
                      break;
                    }
                    return _0x254323.abrupt("return");
                  case 0x2:
                    this.m_isShowEnd = true;
                    this.m_isShowAward = false;
                    this.m_winLabel.string = _0x14c118.FormatNumberThousands(_0x14c118.strip(this.m_showValueCb ? this.m_showValueCb(this.m_win) : this.m_win), _0x14c118.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
                    if (this.m_maskSpine) {
                      this.PlayAnimation(this.m_maskSpine, "BigWin_End");
                    }
                    _0x19ecd1 = '';
                    _0x254323.t0 = this.m_lvl;
                    _0x254323.next = _0x254323.t0 === _0x3ea5c3.Level.BIG ? 0xa : _0x254323.t0 === _0x3ea5c3.Level.MEGA ? 0xc : _0x254323.t0 === _0x3ea5c3.Level.SUPER ? 0xe : 0x10;
                    break;
                  case 0xa:
                    _0x19ecd1 = _0x38b27b.Big.End;
                    return _0x254323.abrupt('break', 0x10);
                  case 0xc:
                    _0x19ecd1 = _0x38b27b.Mega.End;
                    return _0x254323.abrupt("break", 0x10);
                  case 0xe:
                    _0x19ecd1 = _0x38b27b.Super.End;
                    return _0x254323.abrupt("break", 0x10);
                  case 0x10:
                    if ('' === _0x19ecd1) {
                      _0x254323.next = 0x15;
                      break;
                    }
                    _0x254323.next = 0x13;
                    return Promise.all([this.CheckExtraSpineEnd(), this.PlayAnimation(this.m_spine, _0x19ecd1)]);
                  case 0x13:
                    _0x254323.next = 0x16;
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
                    return _0x254323.stop();
                }
              }
            }, _0x4798e3, this);
          }));
          return function () {
            return _0x4c4de7.apply(this, arguments);
          };
        }();
        _0xde34ea.CheckExtraSpineStart = function () {
          var _0x4b39db = this;
          if (this.m_extraSpine) {
            this.m_extraSpine.node.active = true;
            this.PlayAnimation(this.m_extraSpine, 'Start').then(function () {
              if (!_0x4b39db.m_isShowingExtraEnd) {
                _0x4b39db.PlayAnimation(_0x4b39db.m_extraSpine, "Loop", true);
              }
            });
          }
        };
        _0xde34ea.CheckExtraSpineEnd = function () {
          var _0x51ebe7 = _0x26fe6f(_0x352743().mark(function _0x249e86() {
            return _0x352743().wrap(function (_0x47cc6d) {
              for (;;) {
                switch (_0x47cc6d.prev = _0x47cc6d.next) {
                  case 0x0:
                    if (this.m_extraSpine) {
                      _0x47cc6d.next = 0x2;
                      break;
                    }
                    return _0x47cc6d.abrupt("return");
                  case 0x2:
                    this.m_isShowingExtraEnd = true;
                    _0x47cc6d.next = 0x5;
                    return _0xd8402d.Wait(this, this.m_endExtraDelayTime);
                  case 0x5:
                    _0x47cc6d.next = 0x7;
                    return this.PlayAnimation(this.m_extraSpine, 'End');
                  case 0x7:
                    this.m_isShowingExtraEnd = false;
                  case 0x8:
                  case "end":
                    return _0x47cc6d.stop();
                }
              }
            }, _0x249e86, this);
          }));
          return function () {
            return _0x51ebe7.apply(this, arguments);
          };
        }();
        _0xde34ea.PlayAnimation = function (_0x44edde, _0x38f6fb, _0xbb4d8a, _0x13d4fb) {
          var _0x233155 = this;
          if (undefined === _0xbb4d8a) {
            _0xbb4d8a = false;
          }
          if (undefined === _0x13d4fb) {
            _0x13d4fb = 0x0;
          }
          return new Promise(function (_0x36f884) {
            var _0x1bc856 = false;
            _0x233155.m_cancelCb = function () {
              _0x36f884(_0x1bc856 = true);
            };
            _0x44edde.clearTrack(_0x13d4fb);
            _0x44edde.setToSetupPose();
            var _0x2afd10 = _0x44edde.setAnimation(_0x13d4fb, _0x38f6fb, _0xbb4d8a);
            var _0x3425d5 = function () {
              _0x233155.m_cancelCb = null;
              _0x36f884(_0x1bc856);
            };
            if (_0x2afd10) {
              _0x44edde.setTrackEventListener(_0x2afd10, function (_0x1eda05, _0x356db5) {
                var _0x230740 = _0x356db5.data.name;
                var _0x39d289 = _0x356db5.stringValue;
                if (_0x233155.m_eventCb) {
                  _0x233155.m_eventCb(_0x230740, _0x39d289, _0x38f6fb);
                }
              });
              _0x44edde.setTrackCompleteListener(_0x2afd10, function () {
                _0x44edde.setTrackCompleteListener(_0x2afd10, function () {});
                _0x3425d5();
              });
            } else {
              _0x44edde.setCompleteListener(function () {
                _0x44edde.setCompleteListener(null);
                _0x3425d5();
              });
            }
          });
        };
        _0x4b136a(_0x3ea5c3, [{
          'key': "IsEnd",
          'get': function () {
            return this.m_isEnd;
          },
          'set': function (_0x3219d3) {
            this.m_isEnd = _0x3219d3;
          }
        }]);
        return _0x3ea5c3;
      }(_0x14cfe4);
      _0x3f708e.Level = {
        'NONE': 0x0,
        'BIG': 0x1,
        'MEGA': 0x2,
        'SUPER': 0x3
      };
      _0x422681 = _0x196fb6(_0x3f708e.prototype, "m_spine", [_0x4275f7], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x37d7d2 = _0x196fb6(_0x3f708e.prototype, 'm_maskSpine', [_0x5b1fd0], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x44ad9c = _0x196fb6(_0x3f708e.prototype, "m_extraSpine", [_0xe40f1c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5f01d6 = _0x196fb6(_0x3f708e.prototype, "m_winLabel", [_0x4159de], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x14f158 = _0x196fb6(_0x3f708e.prototype, "m_endExtraDelayTime", [_0x43ebea], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return 1.5;
        }
      });
      var _0x3fc7d5;
      var _0x41f3ad;
      var _0x58ecbf;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "74f7dljUZhO+6o0Pu2tNSAk", "ConnectionManager", undefined);
      (function (_0x5e096d) {
        _0x5e096d[_0x5e096d.TYPE_HTTP = 0x1] = "TYPE_HTTP";
        _0x5e096d[_0x5e096d.TYPE_WEBSOCKET = 0x2] = 'TYPE_WEBSOCKET';
        _0x5e096d[_0x5e096d.MAX = 0x3] = "MAX";
      })(_0x3fc7d5 || (_0x3fc7d5 = {}));
      (function (_0x14210b) {
        _0x14210b.TYPE_GET = "get";
        _0x14210b.TYPE_POST = "post";
      })(_0x41f3ad || (_0x41f3ad = {}));
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "34d81gQVlJAaJJHg6IUTjH6", 'TimeBool', undefined);
      (function (_0x160ef6) {
        _0x160ef6[_0x160ef6.MAX_UINT = 0xffffffff] = "MAX_UINT";
        _0x160ef6[_0x160ef6.MAX_UINT64 = 0x10000000000000000] = "MAX_UINT64";
        _0x160ef6[_0x160ef6.MAX_INT = -0x1] = 'MAX_INT';
        _0x160ef6[_0x160ef6.MIN_INT = 0x0] = "MIN_INT";
      })(_0x58ecbf || (_0x58ecbf = {}));
      var _0x374f75;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "5cd11K4+Y1DBJ0WZfuiBSee", "Common_IdleState", undefined);
      var _0x282e30 = _0x3e9873.ccclass;
      _0x374f75 = _0x282e30('Common_IdleState');
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, '9099fuoIOdA/qc/GkvbZ7rH', "GroupNode", undefined);
      var _0x3246b5;
      var _0x4f2ab8;
      var _0x3740a9;
      var _0x476ab5;
      !function (_0x1bc3fd) {
        _0x1bc3fd[_0x1bc3fd.WIDTH = 0x1] = "WIDTH";
        _0x1bc3fd[_0x1bc3fd.HEIGHT = 0x2] = "HEIGHT";
        _0x1bc3fd[_0x1bc3fd.BOTH = 0x3] = "BOTH";
      }(_0x3246b5 || (_0x3246b5 = {}));
      (function (_0x12078a) {
        _0x12078a[_0x12078a.X = 0x1] = 'X';
        _0x12078a[_0x12078a.Y = 0x2] = 'Y';
        _0x12078a[_0x12078a.BOTH = 0x3] = "BOTH";
      })(_0x4f2ab8 || (_0x4f2ab8 = {}));
      (function (_0x16d45d) {
        _0x16d45d[_0x16d45d.X = 0x1] = 'X';
        _0x16d45d[_0x16d45d.Y = 0x2] = 'Y';
        _0x16d45d[_0x16d45d.BOTH = 0x3] = "BOTH";
      })(_0x3740a9 || (_0x3740a9 = {}));
      (function (_0x19ef40) {
        _0x19ef40[_0x19ef40.R = 0x1] = 'R';
        _0x19ef40[_0x19ef40.G = 0x2] = 'G';
        _0x19ef40[_0x19ef40.B = 0x4] = 'B';
        _0x19ef40[_0x19ef40.RGB = 0x7] = "RGB";
        _0x19ef40[_0x19ef40.A = 0x8] = 'A';
        _0x19ef40[_0x19ef40.RGBA = 0xf] = "RGBA";
      })(_0x476ab5 || (_0x476ab5 = {}));
      var _0xc58e65;
      var _0x124804;
      var _0x4a8ac3;
      var _0x22af3b;
      var _0x52d93f;
      var _0x3e848e;
      var _0x46af91;
      var _0x8f9a6c;
      var _0x2578b8;
      var _0x5b70fd;
      var _0xfade4d;
      var _0x4a8156;
      var _0x203de0;
      var _0x26a278;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, '0c18bO40hVJB4/zzDByb8vr', "ManualComponent", undefined);
      var _0x1b4b58 = _0x3e9873.ccclass;
      var _0x33c417 = _0x3e9873.property;
      _0xc58e65 = _0x1b4b58("ManualComponent");
      _0x124804 = _0x33c417({
        'type': _0x84773f,
        'tooltip': "特色說明按鈕(新版跑馬燈)"
      });
      _0x4a8ac3 = _0x33c417({
        'type': _0x84773f,
        'tooltip': "特色說明本體(新版跑馬燈)"
      });
      _0x22af3b = _0x33c417({
        'type': _0x84773f,
        'tooltip': "特色說明關閉按鈕(新版跑馬燈)"
      });
      _0x52d93f = _0x33c417({
        'type': _0x84773f,
        'tooltip': "特色說明周圍關閉按鈕(新版跑馬燈)"
      });
      _0x3e848e = _0x33c417({
        'type': _0x31b16c,
        'tooltip': "特色說明內容(新版跑馬燈)"
      });
      _0x46af91 = _0x33c417({
        'type': _0x31b16c,
        'tooltip': '標題'
      });
      _0x8f9a6c = function (_0x33dfc9) {
        function _0x59dd51() {
          var _0x1ab5a8;
          var _0x3d6557 = arguments.length;
          var _0x53d546 = new Array(_0x3d6557);
          for (var _0xc2f499 = 0x0; _0xc2f499 < _0x3d6557; _0xc2f499++) {
            _0x53d546[_0xc2f499] = arguments[_0xc2f499];
          }
          _0xec902e(_0x1ab5a8 = _0x33dfc9.call.apply(_0x33dfc9, [this].concat(_0x53d546)) || this, 'm_featureInfoBtn', _0x2578b8, _0x11be3a(_0x1ab5a8));
          _0xec902e(_0x1ab5a8, "m_featureInfoBoard", _0x5b70fd, _0x11be3a(_0x1ab5a8));
          _0xec902e(_0x1ab5a8, "m_featureInfoCloseBtn", _0xfade4d, _0x11be3a(_0x1ab5a8));
          _0xec902e(_0x1ab5a8, "m_featureInfoSideBtn", _0x4a8156, _0x11be3a(_0x1ab5a8));
          _0xec902e(_0x1ab5a8, 'm_featureInfoTxt', _0x203de0, _0x11be3a(_0x1ab5a8));
          _0xec902e(_0x1ab5a8, "m_titleSprite", _0x26a278, _0x11be3a(_0x1ab5a8));
          _0x1ab5a8.m_manulState = "Close";
          _0x1ab5a8.m_manulOpenLock = false;
          return _0x1ab5a8;
        }
        _0xed7a37(_0x59dd51, _0x33dfc9);
        var _0x503095 = _0x59dd51.prototype;
        _0x503095.onLoad = function () {
          var _0x162a60 = this;
          if (_0x14c118.CheckSwitchOff(_0x54a6a8.CloseManual)) {
            this.node.active = false;
          } else {
            if (this.m_featureInfoBtn) {
              this.m_featureInfoBtn.on(_0x84773f.EventType.TOUCH_END, function () {
                _0x162a60.OpenManul();
                _0x2b2431.Play(Astarte.Define.AudioClips.COMMON_BTN);
              });
            }
            if (this.m_featureInfoCloseBtn) {
              this.m_featureInfoCloseBtn.on(_0x84773f.EventType.TOUCH_END, function () {
                _0x162a60.CloseManul();
                _0x2b2431.Play(Astarte.Define.AudioClips.COMMON_BTN);
              });
            }
            if (this.m_featureInfoSideBtn) {
              this.m_featureInfoSideBtn.on(_0x84773f.EventType.TOUCH_END, function () {
                _0x162a60.CloseManul();
              });
            }
          }
        };
        _0x503095.OpenManul = function () {
          var _0x235c27 = this;
          if (this.m_manulOpenLock) {
            _0x21b8ed.ShowMessageBox(Astarte.Define.StringKey.FREEWINCASH_PLAYING1);
          } else if (this.m_manulState == "Close") {
            this.m_featureInfoBoard.active = true;
            _0x174aa1(this.m_featureInfoBoard).call(function () {
              _0x235c27.m_manulState = "Opening";
              _0x235c27.m_featureInfoBoard.getComponentInChildren(_0x4bf747).play("Manual_Open");
            }).delay(0.5).call(function () {
              _0x235c27.m_manulState = 'Open';
            }).start();
          }
        };
        _0x503095.CloseManul = function () {
          var _0x4a93e2 = this;
          if (this.m_manulState == 'Open') {
            _0x174aa1(this.m_featureInfoBoard).call(function () {
              _0x4a93e2.m_manulState = "Closing";
              _0x4a93e2.m_featureInfoBoard.getComponentInChildren(_0x4bf747).play('Manual_Close');
            }).delay(0.5).call(function () {
              _0x4a93e2.m_manulState = "Close";
              _0x4a93e2.m_featureInfoBoard.active = false;
            }).start();
          }
        };
        _0x503095.SetTxt = function (_0x27da9f, _0x29c2c3) {
          if (undefined === _0x29c2c3) {
            _0x29c2c3 = null;
          }
          var _0x46da5d = _0x5cb46c.GetGameAtlas();
          for (var _0x17f646 = 0x0; _0x17f646 < this.m_featureInfoTxt.length; _0x17f646++) {
            if (_0x46da5d.getSpriteFrame(_0x27da9f[_0x17f646])) {
              this.m_featureInfoTxt[_0x17f646].spriteFrame = _0x46da5d.getSpriteFrame(_0x27da9f[_0x17f646]);
            }
          }
          if (this.m_titleSprite && _0x29c2c3) {
            this.m_titleSprite.spriteFrame = _0x46da5d.getSpriteFrame(_0x29c2c3);
          }
        };
        _0x4b136a(_0x59dd51, [{
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
          'set': function (_0x9ead9e) {
            this.m_manulOpenLock = _0x9ead9e;
          }
        }]);
        return _0x59dd51;
      }(_0x14cfe4);
      _0x2578b8 = _0x196fb6(_0x8f9a6c.prototype, "m_featureInfoBtn", [_0x124804], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5b70fd = _0x196fb6(_0x8f9a6c.prototype, 'm_featureInfoBoard', [_0x4a8ac3], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0xfade4d = _0x196fb6(_0x8f9a6c.prototype, "m_featureInfoCloseBtn", [_0x22af3b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4a8156 = _0x196fb6(_0x8f9a6c.prototype, 'm_featureInfoSideBtn', [_0x52d93f], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x203de0 = _0x196fb6(_0x8f9a6c.prototype, "m_featureInfoTxt", [_0x3e848e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x26a278 = _0x196fb6(_0x8f9a6c.prototype, "m_titleSprite", [_0x46af91], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "1d950BFoN5LhJJ79uyt+/E+", 'MarqueeComponent', undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, '93417uqlh9Fm6TH2poz4GO4', 'NearWinEffectComponent', undefined);
      var _0x168eb2;
      var _0xbd690;
      var _0x8d1b37;
      var _0xaf067d;
      var _0x462515;
      var _0x231851;
      var _0x383d98;
      var _0xf7456;
      var _0x28f56a;
      var _0x4e223c;
      var _0x344a3d;
      var _0x5ec410;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "02e880GcB9Jw7QDr8UUWxEV", "ShakeComponent", undefined);
      var _0x30d05b = _0x3e9873.ccclass;
      var _0x1114dc = _0x3e9873.property;
      var _0x20457d = _0x5c9b0d({});
      var _0x118277;
      !function (_0x58fe96) {
        _0x58fe96[_0x58fe96.None = 0x0] = "None";
        _0x58fe96[_0x58fe96.FadeIn = 0x1] = "FadeIn";
        _0x58fe96[_0x58fe96.FadeOut = 0x2] = "FadeOut";
      }(_0x118277 || (_0x118277 = {}));
      var _0x46c4af = _0x5c9b0d({
        'None': _0x118277.None,
        'FadeIn': _0x118277.FadeIn,
        'FadeOut': _0x118277.FadeOut
      });
      _0x168eb2 = _0x30d05b("_TweenInfo");
      _0xbd690 = _0x1114dc({
        'visible': false,
        'tooltip': "Easing"
      });
      _0x8d1b37 = _0x1114dc({
        'type': _0x20457d,
        'visible': false
      });
      _0xaf067d = _0x1114dc({
        'visible': true,
        'displayName': "緩動效果",
        'type': _0x20457d
      });
      _0x462515 = _0x1114dc({
        'type': _0x46c4af,
        'visible': false
      });
      _0x231851 = _0x1114dc({
        'visible': true,
        'displayName': "fade type",
        'type': _0x46c4af
      });
      _0x383d98 = _0x1114dc({
        'min': 0x0,
        'visible': true,
        'displayName': '時間'
      });
      _0xf7456 = function () {
        function _0x5a32c3() {
          _0xec902e(this, "m_EasingName", _0x28f56a, this);
          _0xec902e(this, "__easingIdx", _0x4e223c, this);
          _0xec902e(this, "__fadeType", _0x344a3d, this);
          this._EasingEnumList = [];
          _0xec902e(this, "duration", _0x5ec410, this);
        }
        _0x4b136a(_0x5a32c3, [{
          'key': '_easingIdx',
          'get': function () {},
          'set': function (_0x504b9f) {}
        }, {
          'key': "_fadeType",
          'get': function () {
            return this.__fadeType;
          },
          'set': function (_0x311917) {}
        }]);
        return _0x5a32c3;
      }();
      _0x28f56a = _0x196fb6(_0xf7456.prototype, 'm_EasingName', [_0xbd690], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return '';
        }
      });
      _0x4e223c = _0x196fb6(_0xf7456.prototype, "__easingIdx", [_0x8d1b37], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x196fb6(_0xf7456.prototype, "_easingIdx", [_0xaf067d], Object.getOwnPropertyDescriptor(_0xf7456.prototype, "_easingIdx"), _0xf7456.prototype);
      _0x344a3d = _0x196fb6(_0xf7456.prototype, "__fadeType", [_0x462515], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x196fb6(_0xf7456.prototype, "_fadeType", [_0x231851], Object.getOwnPropertyDescriptor(_0xf7456.prototype, "_fadeType"), _0xf7456.prototype);
      _0x5ec410 = _0x196fb6(_0xf7456.prototype, 'duration', [_0x383d98], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return 0x1;
        }
      });
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "b57cahiKlxMZL7TyWc1iHaf", "SloganComponent", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "c6e0eKOKjtNwJBDq/hJOYgn", "index", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "e5e419MNvBPyINpZp1ekoJ2", 'IdleState', undefined);
      var _0x35844b;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "0e0e8VuwO5K1auIdIgXrD/m", "LeaveFreeState", undefined);
      var _0x40882c = _0x3e9873.ccclass;
      _0x35844b = _0x40882c("LeaveFreeState");
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "30640aTiGJMQ5hihYltmw3x", "PlateShowState", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, '878da6HJ/VAV42GywbuRjnq', 'RoundEndState', undefined);
      var _0x213c7e;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "89b81pfP/FHTr1+W83Kwu6K", "RoundShowEndState", undefined);
      var _0x424d45 = _0x3e9873.ccclass;
      _0x213c7e = _0x424d45("RoundShowEndState");
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "3d6b2GLEg5GlZKo3tMevD/W", "ScatterShowState", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "20ac9f8XLZPJJMT9SXZ6W1k", "SpinState", undefined);
      var _0x1a763c;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "5f68fFItX9KQ4m0TiGv3kmM", 'UnshowPrepareState', undefined);
      var _0x32964d = _0x3e9873.ccclass;
      _0x1a763c = _0x32964d("UnshowPrepareState");
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "7c139HzMc9BxJD5Mops48Dd", 'WaitReadyState', undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "c70a5o3xUhJG6CIscuM2IXI", 'WaitResState', undefined);
      _0xec9bd2._RF.pop();
      var _0x1632e6 = function () {
        function _0x55e0b4() {
          this._registry = {};
          this._moduleCache = {};
        }
        var _0x576bec = _0x55e0b4.prototype;
        _0x576bec.define = function (_0x2f4424, _0x44add4, _0x88ed79) {
          this._registry[_0x2f4424] = {
            'factory': _0x44add4,
            'resolveMap': _0x88ed79
          };
        };
        _0x576bec.require = function (_0x9aac86) {
          return this._require(_0x9aac86);
        };
        _0x576bec.throwInvalidWrapper = function (_0x31ba42, _0x4a5e1d) {
          throw new Error("Module '" + _0x31ba42 + "' imported from '" + _0x4a5e1d + "' is expected be an ESM-wrapped CommonJS module but it doesn't.");
        };
        _0x576bec._require = function (_0x4146b4, _0x59eb64) {
          var _0x8d38e0 = this._moduleCache[_0x4146b4];
          if (_0x8d38e0) {
            return _0x8d38e0.exports;
          }
          var _0x3d27cb = {
            'id': _0x4146b4,
            'exports': {}
          };
          this._moduleCache[_0x4146b4] = _0x3d27cb;
          this._tryModuleLoad(_0x3d27cb, _0x4146b4);
          return _0x3d27cb.exports;
        };
        _0x576bec._resolve = function (_0x34e1d9, _0x48bf52) {
          return this._resolveFromInfos(_0x34e1d9, _0x48bf52) || this._throwUnresolved(_0x34e1d9, _0x48bf52);
        };
        _0x576bec._resolveFromInfos = function (_0x43404d, _0x295a4f) {
          var _0x43f7b0;
          var _0x23fe1e;
          return _0x43404d in cjsInfos ? _0x43404d : _0x295a4f && null != (_0x43f7b0 = null == (_0x23fe1e = cjsInfos[_0x295a4f]) ? undefined : _0x23fe1e.resolveCache[_0x43404d]) ? _0x43f7b0 : undefined;
        };
        _0x576bec._tryModuleLoad = function (_0x5efb88, _0x1ff8cf) {
          var _0x3ea7dd = true;
          try {
            this._load(_0x5efb88, _0x1ff8cf);
            _0x3ea7dd = false;
          } finally {
            if (_0x3ea7dd) {
              delete this._moduleCache[_0x1ff8cf];
            }
          }
        };
        _0x576bec._load = function (_0xf72acd, _0x4c4739) {
          var _0x355d14 = this._loadWrapper(_0x4c4739);
          var _0x4a2a63 = _0x355d14.factory;
          var _0x434263 = _0x355d14.resolveMap;
          var _0x1ec6f2 = this._createRequire(_0xf72acd);
          var _0x1740fb = _0x434263 ? this._createRequireWithResolveMap("function" == typeof _0x434263 ? _0x434263() : _0x434263, _0x1ec6f2) : _0x1ec6f2;
          _0x4a2a63(_0xf72acd.exports, _0x1740fb, _0xf72acd);
        };
        _0x576bec._loadWrapper = function (_0x4519ad) {
          return _0x4519ad in this._registry ? this._registry[_0x4519ad] : this._loadHostProvidedModules(_0x4519ad);
        };
        _0x576bec._loadHostProvidedModules = function (_0x352169) {
          return {
            'factory': function (_0x515fe9, _0x1a8a40, _0x4a3ee3) {
              if ("undefined" == typeof require) {
                throw new Error("Current environment does not provide a require() for requiring '" + _0x352169 + "'.");
              }
              try {
                _0x4a3ee3.exports = require(_0x352169);
              } catch (_0x30c822) {
                throw new Error("Exception thrown when calling host defined require('" + _0x352169 + "').", {
                  'cause': _0x30c822
                });
              }
            }
          };
        };
        _0x576bec._createRequire = function (_0x5e095a) {
          var _0x3af4ee = this;
          return function (_0x2cd502) {
            return _0x3af4ee._require(_0x2cd502, _0x5e095a);
          };
        };
        _0x576bec._createRequireWithResolveMap = function (_0x170b15, _0x3c7e58) {
          return function (_0x56f26d) {
            var _0x3ce7f5 = _0x170b15[_0x56f26d];
            if (_0x3ce7f5) {
              return _0x3c7e58(_0x3ce7f5);
            }
            throw new Error("Unresolved specifier " + _0x56f26d);
          };
        };
        _0x576bec._throwUnresolved = function (_0x3b9a96, _0x5afdd1) {
          throw new Error("Unable to resolve " + _0x3b9a96 + " from " + parent + '.');
        };
        return _0x55e0b4;
      }();
      var _0x3a1ca5 = new _0x1632e6();
      var _0x409c4f;
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/long/src/long.js", function (_0x620fca, _0x264f66, _0x1a471f, _0x441976, _0x704e20) {
        _0x1a471f.exports = _0x542197;
        var _0x3d08ee = null;
        try {
          _0x3d08ee = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0x0, 0x61, 0x73, 0x6d, 0x1, 0x0, 0x0, 0x0, 0x1, 0xd, 0x2, 0x60, 0x0, 0x1, 0x7f, 0x60, 0x4, 0x7f, 0x7f, 0x7f, 0x7f, 0x1, 0x7f, 0x3, 0x7, 0x6, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x6, 0x6, 0x1, 0x7f, 0x1, 0x41, 0x0, 0xb, 0x7, 0x32, 0x6, 0x3, 0x6d, 0x75, 0x6c, 0x0, 0x1, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x73, 0x0, 0x2, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x75, 0x0, 0x3, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x73, 0x0, 0x4, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x75, 0x0, 0x5, 0x8, 0x67, 0x65, 0x74, 0x5f, 0x68, 0x69, 0x67, 0x68, 0x0, 0x0, 0xa, 0xbf, 0x1, 0x6, 0x4, 0x0, 0x23, 0x0, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7e, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7f, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x80, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x81, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x82, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb])), {}).exports;
        } catch (_0x2bc05f) {}
        function _0x542197(_0x1fde8b, _0x4dc700, _0x417f56) {
          this.low = 0x0 | _0x1fde8b;
          this.high = 0x0 | _0x4dc700;
          this.unsigned = !!_0x417f56;
        }
        function _0x2691a5(_0x4c5e1b) {
          return true === (_0x4c5e1b && _0x4c5e1b.__isLong__);
        }
        _0x542197.prototype.__isLong__;
        Object.defineProperty(_0x542197.prototype, "__isLong__", {
          'value': true
        });
        _0x542197.isLong = _0x2691a5;
        var _0x44752a = {};
        var _0x4c25db = {};
        function _0x3ea5ef(_0x57523e, _0x286a5e) {
          var _0xe62c34;
          var _0x2a4904;
          var _0x40b59b;
          return _0x286a5e ? (_0x40b59b = 0x0 <= (_0x57523e >>>= 0x0) && _0x57523e < 0x100) && (_0x2a4904 = _0x4c25db[_0x57523e]) ? _0x2a4904 : (_0xe62c34 = new _0x542197(_0x57523e, (0x0 | _0x57523e) < 0x0 ? -0x1 : 0x0, true), _0x40b59b && (_0x4c25db[_0x57523e] = _0xe62c34), _0xe62c34) : (_0x40b59b = -0x80 <= (_0x57523e |= 0x0) && _0x57523e < 0x80) && (_0x2a4904 = _0x44752a[_0x57523e]) ? _0x2a4904 : (_0xe62c34 = new _0x542197(_0x57523e, _0x57523e < 0x0 ? -0x1 : 0x0, false), _0x40b59b && (_0x44752a[_0x57523e] = _0xe62c34), _0xe62c34);
        }
        function _0xac4251(_0x5a6000, _0xfe515e) {
          if (isNaN(_0x5a6000)) {
            return _0xfe515e ? _0x4b5116 : _0x24732c;
          }
          if (_0xfe515e) {
            if (_0x5a6000 < 0x0) {
              return _0x4b5116;
            }
            if (_0x5a6000 >= 18446744073709552000) {
              return _0x37497c;
            }
          } else {
            if (_0x5a6000 <= -9223372036854776000) {
              return _0x11fbb6;
            }
            if (_0x5a6000 + 0x1 >= 9223372036854776000) {
              return _0x280e97;
            }
          }
          return _0x5a6000 < 0x0 ? _0xac4251(-_0x5a6000, _0xfe515e).neg() : new _0x542197(_0x5a6000 % 0x100000000 | 0x0, _0x5a6000 / 0x100000000 | 0x0, _0xfe515e);
        }
        function _0x21cb65(_0x496eb4, _0x1b2a5f, _0x9bf2c3) {
          return new _0x542197(_0x496eb4, _0x1b2a5f, _0x9bf2c3);
        }
        _0x542197.fromInt = _0x3ea5ef;
        _0x542197.fromNumber = _0xac4251;
        _0x542197.fromBits = _0x21cb65;
        var _0x24151d = Math.pow;
        function _0x1edba8(_0x4be6a7, _0x1d3d36, _0x486893) {
          if (0x0 === _0x4be6a7.length) {
            throw Error("empty string");
          }
          if ('NaN' === _0x4be6a7 || "Infinity" === _0x4be6a7 || "+Infinity" === _0x4be6a7 || "-Infinity" === _0x4be6a7) {
            return _0x24732c;
          }
          if ('number' == typeof _0x1d3d36) {
            _0x486893 = _0x1d3d36;
            _0x1d3d36 = false;
          } else {
            _0x1d3d36 = !!_0x1d3d36;
          }
          if ((_0x486893 = _0x486893 || 0xa) < 0x2 || 0x24 < _0x486893) {
            throw RangeError("radix");
          }
          var _0x5eee69;
          if ((_0x5eee69 = _0x4be6a7.indexOf('-')) > 0x0) {
            throw Error("interior hyphen");
          }
          if (0x0 === _0x5eee69) {
            return _0x1edba8(_0x4be6a7.substring(0x1), _0x1d3d36, _0x486893).neg();
          }
          var _0x406164 = _0xac4251(_0x24151d(_0x486893, 0x8));
          var _0x341fcf = _0x24732c;
          for (var _0x5ef7f1 = 0x0; _0x5ef7f1 < _0x4be6a7.length; _0x5ef7f1 += 0x8) {
            var _0x42f425 = Math.min(0x8, _0x4be6a7.length - _0x5ef7f1);
            var _0x34f8b2 = parseInt(_0x4be6a7.substring(_0x5ef7f1, _0x5ef7f1 + _0x42f425), _0x486893);
            if (_0x42f425 < 0x8) {
              var _0x75ceea = _0xac4251(_0x24151d(_0x486893, _0x42f425));
              _0x341fcf = _0x341fcf.mul(_0x75ceea).add(_0xac4251(_0x34f8b2));
            } else {
              _0x341fcf = (_0x341fcf = _0x341fcf.mul(_0x406164)).add(_0xac4251(_0x34f8b2));
            }
          }
          _0x341fcf.unsigned = _0x1d3d36;
          return _0x341fcf;
        }
        function _0xf79c34(_0x55af7d, _0x4b67ef) {
          return "number" == typeof _0x55af7d ? _0xac4251(_0x55af7d, _0x4b67ef) : 'string' == typeof _0x55af7d ? _0x1edba8(_0x55af7d, _0x4b67ef) : new _0x542197(_0x55af7d.low, _0x55af7d.high, "boolean" == typeof _0x4b67ef ? _0x4b67ef : _0x55af7d.unsigned);
        }
        _0x542197.fromString = _0x1edba8;
        _0x542197.fromValue = _0xf79c34;
        var _0x144825 = _0x3ea5ef(16777216);
        var _0x24732c = _0x3ea5ef(0x0);
        _0x542197.ZERO = _0x24732c;
        var _0x4b5116 = _0x3ea5ef(0x0, true);
        _0x542197.UZERO = _0x4b5116;
        var _0x3bdf9f = _0x3ea5ef(0x1);
        _0x542197.ONE = _0x3bdf9f;
        var _0x298d8a = _0x3ea5ef(0x1, true);
        _0x542197.UONE = _0x298d8a;
        var _0x816d43 = _0x3ea5ef(-0x1);
        _0x542197.NEG_ONE = _0x816d43;
        var _0x280e97 = new _0x542197(-0x1, 0x7fffffff, false);
        _0x542197.MAX_VALUE = _0x280e97;
        var _0x37497c = new _0x542197(-0x1, -0x1, true);
        _0x542197.MAX_UNSIGNED_VALUE = _0x37497c;
        var _0x11fbb6 = new _0x542197(0x0, -0x80000000, false);
        _0x542197.MIN_VALUE = _0x11fbb6;
        var _0x7d9164 = _0x542197.prototype;
        _0x7d9164.toInt = function () {
          return this.unsigned ? this.low >>> 0x0 : this.low;
        };
        _0x7d9164.toNumber = function () {
          return this.unsigned ? (this.high >>> 0x0) * 0x100000000 + (this.low >>> 0x0) : this.high * 0x100000000 + (this.low >>> 0x0);
        };
        _0x7d9164.toString = function (_0x47d024) {
          if ((_0x47d024 = _0x47d024 || 0xa) < 0x2 || 0x24 < _0x47d024) {
            throw RangeError("radix");
          }
          if (this.isZero()) {
            return '0';
          }
          if (this.isNegative()) {
            if (this.eq(_0x11fbb6)) {
              var _0x351ed7 = _0xac4251(_0x47d024);
              var _0x3e5765 = this.div(_0x351ed7);
              var _0x2521f5 = _0x3e5765.mul(_0x351ed7).sub(this);
              return _0x3e5765.toString(_0x47d024) + _0x2521f5.toInt().toString(_0x47d024);
            }
            return '-' + this.neg().toString(_0x47d024);
          }
          var _0xf0307f = _0xac4251(_0x24151d(_0x47d024, 0x6), this.unsigned);
          var _0x136c2f = this;
          for (var _0x4901e0 = '';;) {
            var _0x2eadac = _0x136c2f.div(_0xf0307f);
            var _0x5213b6 = (_0x136c2f.sub(_0x2eadac.mul(_0xf0307f)).toInt() >>> 0x0).toString(_0x47d024);
            if ((_0x136c2f = _0x2eadac).isZero()) {
              return _0x5213b6 + _0x4901e0;
            }
            for (; _0x5213b6.length < 0x6;) {
              _0x5213b6 = '0' + _0x5213b6;
            }
            _0x4901e0 = '' + _0x5213b6 + _0x4901e0;
          }
        };
        _0x7d9164.getHighBits = function () {
          return this.high;
        };
        _0x7d9164.getHighBitsUnsigned = function () {
          return this.high >>> 0x0;
        };
        _0x7d9164.getLowBits = function () {
          return this.low;
        };
        _0x7d9164.getLowBitsUnsigned = function () {
          return this.low >>> 0x0;
        };
        _0x7d9164.getNumBitsAbs = function () {
          if (this.isNegative()) {
            return this.eq(_0x11fbb6) ? 0x40 : this.neg().getNumBitsAbs();
          }
          var _0x5788c3 = 0x0 != this.high ? this.high : this.low;
          for (var _0x1bcd82 = 0x1f; _0x1bcd82 > 0x0 && 0x0 == (_0x5788c3 & 0x1 << _0x1bcd82); _0x1bcd82--) {
            ;
          }
          return 0x0 != this.high ? _0x1bcd82 + 0x21 : _0x1bcd82 + 0x1;
        };
        _0x7d9164.isZero = function () {
          return 0x0 === this.high && 0x0 === this.low;
        };
        _0x7d9164.eqz = _0x7d9164.isZero;
        _0x7d9164.isNegative = function () {
          return !this.unsigned && this.high < 0x0;
        };
        _0x7d9164.isPositive = function () {
          return this.unsigned || this.high >= 0x0;
        };
        _0x7d9164.isOdd = function () {
          return 0x1 == (0x1 & this.low);
        };
        _0x7d9164.isEven = function () {
          return 0x0 == (0x1 & this.low);
        };
        _0x7d9164.equals = function (_0x53ad8f) {
          if (!(true === (_0x53ad8f && _0x53ad8f.__isLong__))) {
            _0x53ad8f = "number" == typeof _0x53ad8f ? _0xac4251(_0x53ad8f, undefined) : 'string' == typeof _0x53ad8f ? _0x1edba8(_0x53ad8f, undefined) : new _0x542197(_0x53ad8f.low, _0x53ad8f.high, _0x53ad8f.unsigned);
          }
          return (this.unsigned === _0x53ad8f.unsigned || this.high >>> 0x1f != 0x1 || _0x53ad8f.high >>> 0x1f != 0x1) && this.high === _0x53ad8f.high && this.low === _0x53ad8f.low;
        };
        _0x7d9164.eq = _0x7d9164.equals;
        _0x7d9164.notEquals = function (_0x518a3e) {
          return !this.eq(_0x518a3e);
        };
        _0x7d9164.neq = _0x7d9164.notEquals;
        _0x7d9164.ne = _0x7d9164.notEquals;
        _0x7d9164.lessThan = function (_0x1f2f1c) {
          return this.comp(_0x1f2f1c) < 0x0;
        };
        _0x7d9164.lt = _0x7d9164.lessThan;
        _0x7d9164.lessThanOrEqual = function (_0xae92a7) {
          return this.comp(_0xae92a7) <= 0x0;
        };
        _0x7d9164.lte = _0x7d9164.lessThanOrEqual;
        _0x7d9164.le = _0x7d9164.lessThanOrEqual;
        _0x7d9164.greaterThan = function (_0x3a84d3) {
          return this.comp(_0x3a84d3) > 0x0;
        };
        _0x7d9164.gt = _0x7d9164.greaterThan;
        _0x7d9164.greaterThanOrEqual = function (_0x5e4e8e) {
          return this.comp(_0x5e4e8e) >= 0x0;
        };
        _0x7d9164.gte = _0x7d9164.greaterThanOrEqual;
        _0x7d9164.ge = _0x7d9164.greaterThanOrEqual;
        _0x7d9164.compare = function (_0x27843e) {
          if (!(true === (_0x27843e && _0x27843e.__isLong__))) {
            _0x27843e = "number" == typeof _0x27843e ? _0xac4251(_0x27843e, undefined) : 'string' == typeof _0x27843e ? _0x1edba8(_0x27843e, undefined) : new _0x542197(_0x27843e.low, _0x27843e.high, _0x27843e.unsigned);
          }
          if (this.eq(_0x27843e)) {
            return 0x0;
          }
          var _0x39fce8 = this.isNegative();
          var _0x4ab3c0 = _0x27843e.isNegative();
          return _0x39fce8 && !_0x4ab3c0 ? -0x1 : !_0x39fce8 && _0x4ab3c0 ? 0x1 : this.unsigned ? _0x27843e.high >>> 0x0 > this.high >>> 0x0 || _0x27843e.high === this.high && _0x27843e.low >>> 0x0 > this.low >>> 0x0 ? -0x1 : 0x1 : this.sub(_0x27843e).isNegative() ? -0x1 : 0x1;
        };
        _0x7d9164.comp = _0x7d9164.compare;
        _0x7d9164.negate = function () {
          return !this.unsigned && this.eq(_0x11fbb6) ? _0x11fbb6 : this.not().add(_0x3bdf9f);
        };
        _0x7d9164.neg = _0x7d9164.negate;
        _0x7d9164.add = function (_0x2f86b8) {
          if (!(true === (_0x2f86b8 && _0x2f86b8.__isLong__))) {
            _0x2f86b8 = "number" == typeof _0x2f86b8 ? _0xac4251(_0x2f86b8, undefined) : 'string' == typeof _0x2f86b8 ? _0x1edba8(_0x2f86b8, undefined) : new _0x542197(_0x2f86b8.low, _0x2f86b8.high, _0x2f86b8.unsigned);
          }
          var _0x449ac8 = this.high >>> 0x10;
          var _0x426d14 = 0xffff & this.high;
          var _0x1f608f = this.low >>> 0x10;
          var _0x357a65 = 0xffff & this.low;
          var _0x6ccd24 = _0x2f86b8.high >>> 0x10;
          var _0x49b84c = 0xffff & _0x2f86b8.high;
          var _0x3c2933 = _0x2f86b8.low >>> 0x10;
          var _0x504855 = 0x0;
          var _0x527f1b = 0x0;
          var _0x431a75 = 0x0;
          var _0x2280c0 = 0x0;
          _0x431a75 += (_0x2280c0 += _0x357a65 + (0xffff & _0x2f86b8.low)) >>> 0x10;
          _0x527f1b += (_0x431a75 += _0x1f608f + _0x3c2933) >>> 0x10;
          _0x504855 += (_0x527f1b += _0x426d14 + _0x49b84c) >>> 0x10;
          _0x504855 += _0x449ac8 + _0x6ccd24;
          return new _0x542197((_0x431a75 &= 0xffff) << 0x10 | (_0x2280c0 &= 0xffff), (_0x504855 &= 0xffff) << 0x10 | (_0x527f1b &= 0xffff), this.unsigned);
        };
        _0x7d9164.subtract = function (_0x1a0421) {
          if (!(true === (_0x1a0421 && _0x1a0421.__isLong__))) {
            _0x1a0421 = "number" == typeof _0x1a0421 ? _0xac4251(_0x1a0421, undefined) : 'string' == typeof _0x1a0421 ? _0x1edba8(_0x1a0421, undefined) : new _0x542197(_0x1a0421.low, _0x1a0421.high, _0x1a0421.unsigned);
          }
          return this.add(_0x1a0421.neg());
        };
        _0x7d9164.sub = _0x7d9164.subtract;
        _0x7d9164.multiply = function (_0x5457a4) {
          if (this.isZero()) {
            return _0x24732c;
          }
          if (!(true === (_0x5457a4 && _0x5457a4.__isLong__))) {
            _0x5457a4 = "number" == typeof _0x5457a4 ? _0xac4251(_0x5457a4, undefined) : 'string' == typeof _0x5457a4 ? _0x1edba8(_0x5457a4, undefined) : new _0x542197(_0x5457a4.low, _0x5457a4.high, _0x5457a4.unsigned);
          }
          if (_0x3d08ee) {
            return new _0x542197(_0x3d08ee.mul(this.low, this.high, _0x5457a4.low, _0x5457a4.high), _0x3d08ee.get_high(), this.unsigned);
          }
          if (_0x5457a4.isZero()) {
            return _0x24732c;
          }
          if (this.eq(_0x11fbb6)) {
            return _0x5457a4.isOdd() ? _0x11fbb6 : _0x24732c;
          }
          if (_0x5457a4.eq(_0x11fbb6)) {
            return this.isOdd() ? _0x11fbb6 : _0x24732c;
          }
          if (this.isNegative()) {
            return _0x5457a4.isNegative() ? this.neg().mul(_0x5457a4.neg()) : this.neg().mul(_0x5457a4).neg();
          }
          if (_0x5457a4.isNegative()) {
            return this.mul(_0x5457a4.neg()).neg();
          }
          if (this.lt(_0x144825) && _0x5457a4.lt(_0x144825)) {
            return _0xac4251(this.toNumber() * _0x5457a4.toNumber(), this.unsigned);
          }
          var _0x45406f = this.high >>> 0x10;
          var _0x44d7d6 = 0xffff & this.high;
          var _0x31aabe = this.low >>> 0x10;
          var _0x574018 = 0xffff & this.low;
          var _0x2ba40e = _0x5457a4.high >>> 0x10;
          var _0x9e053 = 0xffff & _0x5457a4.high;
          var _0xd4a592 = _0x5457a4.low >>> 0x10;
          var _0x20f83a = 0xffff & _0x5457a4.low;
          var _0x4aaf8c = 0x0;
          var _0x3091ae = 0x0;
          var _0x5b6f0d = 0x0;
          var _0x3cecfd = 0x0;
          _0x5b6f0d += (_0x3cecfd += _0x574018 * _0x20f83a) >>> 0x10;
          _0x3091ae += (_0x5b6f0d += _0x31aabe * _0x20f83a) >>> 0x10;
          _0x5b6f0d &= 0xffff;
          _0x3091ae += (_0x5b6f0d += _0x574018 * _0xd4a592) >>> 0x10;
          _0x4aaf8c += (_0x3091ae += _0x44d7d6 * _0x20f83a) >>> 0x10;
          _0x3091ae &= 0xffff;
          _0x4aaf8c += (_0x3091ae += _0x31aabe * _0xd4a592) >>> 0x10;
          _0x3091ae &= 0xffff;
          _0x4aaf8c += (_0x3091ae += _0x574018 * _0x9e053) >>> 0x10;
          _0x4aaf8c += _0x45406f * _0x20f83a + _0x44d7d6 * _0xd4a592 + _0x31aabe * _0x9e053 + _0x574018 * _0x2ba40e;
          return new _0x542197((_0x5b6f0d &= 0xffff) << 0x10 | (_0x3cecfd &= 0xffff), (_0x4aaf8c &= 0xffff) << 0x10 | (_0x3091ae &= 0xffff), this.unsigned);
        };
        _0x7d9164.mul = _0x7d9164.multiply;
        _0x7d9164.divide = function (_0xc9457d) {
          if (!(true === (_0xc9457d && _0xc9457d.__isLong__))) {
            _0xc9457d = "number" == typeof _0xc9457d ? _0xac4251(_0xc9457d, undefined) : 'string' == typeof _0xc9457d ? _0x1edba8(_0xc9457d, undefined) : new _0x542197(_0xc9457d.low, _0xc9457d.high, _0xc9457d.unsigned);
          }
          if (_0xc9457d.isZero()) {
            throw Error("division by zero");
          }
          var _0x3cfaef;
          var _0x54e178;
          var _0x13f46b;
          if (_0x3d08ee) {
            return this.unsigned || -0x80000000 !== this.high || -0x1 !== _0xc9457d.low || -0x1 !== _0xc9457d.high ? new _0x542197((this.unsigned ? _0x3d08ee.div_u : _0x3d08ee.div_s)(this.low, this.high, _0xc9457d.low, _0xc9457d.high), _0x3d08ee.get_high(), this.unsigned) : this;
          }
          if (this.isZero()) {
            return this.unsigned ? _0x4b5116 : _0x24732c;
          }
          if (this.unsigned) {
            if (!_0xc9457d.unsigned) {
              _0xc9457d = _0xc9457d.toUnsigned();
            }
            if (_0xc9457d.gt(this)) {
              return _0x4b5116;
            }
            if (_0xc9457d.gt(this.shru(0x1))) {
              return _0x298d8a;
            }
            _0x13f46b = _0x4b5116;
          } else {
            if (this.eq(_0x11fbb6)) {
              return _0xc9457d.eq(_0x3bdf9f) || _0xc9457d.eq(_0x816d43) ? _0x11fbb6 : _0xc9457d.eq(_0x11fbb6) ? _0x3bdf9f : (_0x3cfaef = this.shr(0x1).div(_0xc9457d).shl(0x1)).eq(_0x24732c) ? _0xc9457d.isNegative() ? _0x3bdf9f : _0x816d43 : (_0x54e178 = this.sub(_0xc9457d.mul(_0x3cfaef)), _0x13f46b = _0x3cfaef.add(_0x54e178.div(_0xc9457d)));
            }
            if (_0xc9457d.eq(_0x11fbb6)) {
              return this.unsigned ? _0x4b5116 : _0x24732c;
            }
            if (this.isNegative()) {
              return _0xc9457d.isNegative() ? this.neg().div(_0xc9457d.neg()) : this.neg().div(_0xc9457d).neg();
            }
            if (_0xc9457d.isNegative()) {
              return this.div(_0xc9457d.neg()).neg();
            }
            _0x13f46b = _0x24732c;
          }
          for (_0x54e178 = this; _0x54e178.gte(_0xc9457d);) {
            _0x3cfaef = Math.max(0x1, Math.floor(_0x54e178.toNumber() / _0xc9457d.toNumber()));
            var _0x3e77af = Math.ceil(Math.log(_0x3cfaef) / Math.LN2);
            var _0x3f5152 = _0x3e77af <= 0x30 ? 0x1 : _0x24151d(0x2, _0x3e77af - 0x30);
            var _0x1a4297 = _0xac4251(_0x3cfaef);
            for (var _0x5f5621 = _0x1a4297.mul(_0xc9457d); _0x5f5621.isNegative() || _0x5f5621.gt(_0x54e178);) {
              _0x5f5621 = (_0x1a4297 = _0xac4251(_0x3cfaef -= _0x3f5152, this.unsigned)).mul(_0xc9457d);
            }
            if (_0x1a4297.isZero()) {
              _0x1a4297 = _0x3bdf9f;
            }
            _0x13f46b = _0x13f46b.add(_0x1a4297);
            _0x54e178 = _0x54e178.sub(_0x5f5621);
          }
          return _0x13f46b;
        };
        _0x7d9164.div = _0x7d9164.divide;
        _0x7d9164.modulo = function (_0x3b869c) {
          if (!(true === (_0x3b869c && _0x3b869c.__isLong__))) {
            _0x3b869c = "number" == typeof _0x3b869c ? _0xac4251(_0x3b869c, undefined) : 'string' == typeof _0x3b869c ? _0x1edba8(_0x3b869c, undefined) : new _0x542197(_0x3b869c.low, _0x3b869c.high, _0x3b869c.unsigned);
          }
          return _0x3d08ee ? new _0x542197((this.unsigned ? _0x3d08ee.rem_u : _0x3d08ee.rem_s)(this.low, this.high, _0x3b869c.low, _0x3b869c.high), _0x3d08ee.get_high(), this.unsigned) : this.sub(this.div(_0x3b869c).mul(_0x3b869c));
        };
        _0x7d9164.mod = _0x7d9164.modulo;
        _0x7d9164.rem = _0x7d9164.modulo;
        _0x7d9164.not = function () {
          return new _0x542197(~this.low, ~this.high, this.unsigned);
        };
        _0x7d9164.and = function (_0x1052fe) {
          if (!(true === (_0x1052fe && _0x1052fe.__isLong__))) {
            _0x1052fe = "number" == typeof _0x1052fe ? _0xac4251(_0x1052fe, undefined) : 'string' == typeof _0x1052fe ? _0x1edba8(_0x1052fe, undefined) : new _0x542197(_0x1052fe.low, _0x1052fe.high, _0x1052fe.unsigned);
          }
          return new _0x542197(this.low & _0x1052fe.low, this.high & _0x1052fe.high, this.unsigned);
        };
        _0x7d9164.or = function (_0x25fe54) {
          if (!(true === (_0x25fe54 && _0x25fe54.__isLong__))) {
            _0x25fe54 = "number" == typeof _0x25fe54 ? _0xac4251(_0x25fe54, undefined) : 'string' == typeof _0x25fe54 ? _0x1edba8(_0x25fe54, undefined) : new _0x542197(_0x25fe54.low, _0x25fe54.high, _0x25fe54.unsigned);
          }
          return new _0x542197(this.low | _0x25fe54.low, this.high | _0x25fe54.high, this.unsigned);
        };
        _0x7d9164.xor = function (_0x5a0e86) {
          if (!(true === (_0x5a0e86 && _0x5a0e86.__isLong__))) {
            _0x5a0e86 = "number" == typeof _0x5a0e86 ? _0xac4251(_0x5a0e86, undefined) : 'string' == typeof _0x5a0e86 ? _0x1edba8(_0x5a0e86, undefined) : new _0x542197(_0x5a0e86.low, _0x5a0e86.high, _0x5a0e86.unsigned);
          }
          return new _0x542197(this.low ^ _0x5a0e86.low, this.high ^ _0x5a0e86.high, this.unsigned);
        };
        _0x7d9164.shiftLeft = function (_0x544dc6) {
          if (true === (_0x544dc6 && _0x544dc6.__isLong__)) {
            _0x544dc6 = _0x544dc6.toInt();
          }
          return 0x0 == (_0x544dc6 &= 0x3f) ? this : _0x544dc6 < 0x20 ? new _0x542197(this.low << _0x544dc6, this.high << _0x544dc6 | this.low >>> 0x20 - _0x544dc6, this.unsigned) : new _0x542197(0x0, this.low << _0x544dc6 - 0x20, this.unsigned);
        };
        _0x7d9164.shl = _0x7d9164.shiftLeft;
        _0x7d9164.shiftRight = function (_0x174156) {
          if (true === (_0x174156 && _0x174156.__isLong__)) {
            _0x174156 = _0x174156.toInt();
          }
          return 0x0 == (_0x174156 &= 0x3f) ? this : _0x174156 < 0x20 ? new _0x542197(this.low >>> _0x174156 | this.high << 0x20 - _0x174156, this.high >> _0x174156, this.unsigned) : new _0x542197(this.high >> _0x174156 - 0x20, this.high >= 0x0 ? 0x0 : -0x1, this.unsigned);
        };
        _0x7d9164.shr = _0x7d9164.shiftRight;
        _0x7d9164.shiftRightUnsigned = function (_0x30fd0e) {
          if (true === (_0x30fd0e && _0x30fd0e.__isLong__)) {
            _0x30fd0e = _0x30fd0e.toInt();
          }
          if (0x0 === (_0x30fd0e &= 0x3f)) {
            return this;
          }
          var _0x21c372 = this.high;
          return _0x30fd0e < 0x20 ? new _0x542197(this.low >>> _0x30fd0e | _0x21c372 << 0x20 - _0x30fd0e, _0x21c372 >>> _0x30fd0e, this.unsigned) : new _0x542197(0x20 === _0x30fd0e ? _0x21c372 : _0x21c372 >>> _0x30fd0e - 0x20, 0x0, this.unsigned);
        };
        _0x7d9164.shru = _0x7d9164.shiftRightUnsigned;
        _0x7d9164.shr_u = _0x7d9164.shiftRightUnsigned;
        _0x7d9164.toSigned = function () {
          return this.unsigned ? new _0x542197(this.low, this.high, false) : this;
        };
        _0x7d9164.toUnsigned = function () {
          return this.unsigned ? this : new _0x542197(this.low, this.high, true);
        };
        _0x7d9164.toBytes = function (_0x30b9cb) {
          return _0x30b9cb ? this.toBytesLE() : this.toBytesBE();
        };
        _0x7d9164.toBytesLE = function () {
          var _0x5ac6ba = this.high;
          var _0x116da2 = this.low;
          return [0xff & _0x116da2, _0x116da2 >>> 0x8 & 0xff, _0x116da2 >>> 0x10 & 0xff, _0x116da2 >>> 0x18, 0xff & _0x5ac6ba, _0x5ac6ba >>> 0x8 & 0xff, _0x5ac6ba >>> 0x10 & 0xff, _0x5ac6ba >>> 0x18];
        };
        _0x7d9164.toBytesBE = function () {
          var _0x23b473 = this.high;
          var _0x3cae65 = this.low;
          return [_0x23b473 >>> 0x18, _0x23b473 >>> 0x10 & 0xff, _0x23b473 >>> 0x8 & 0xff, 0xff & _0x23b473, _0x3cae65 >>> 0x18, _0x3cae65 >>> 0x10 & 0xff, _0x3cae65 >>> 0x8 & 0xff, 0xff & _0x3cae65];
        };
        _0x542197.fromBytes = function (_0x5676be, _0x5ec1e9, _0x103e55) {
          return _0x103e55 ? _0x542197.fromBytesLE(_0x5676be, _0x5ec1e9) : _0x542197.fromBytesBE(_0x5676be, _0x5ec1e9);
        };
        _0x542197.fromBytesLE = function (_0xbb25d5, _0xbe5a12) {
          return new _0x542197(_0xbb25d5[0x0] | _0xbb25d5[0x1] << 0x8 | _0xbb25d5[0x2] << 0x10 | _0xbb25d5[0x3] << 0x18, _0xbb25d5[0x4] | _0xbb25d5[0x5] << 0x8 | _0xbb25d5[0x6] << 0x10 | _0xbb25d5[0x7] << 0x18, _0xbe5a12);
        };
        _0x542197.fromBytesBE = function (_0x381ae4, _0x4f2da4) {
          return new _0x542197(_0x381ae4[0x4] << 0x18 | _0x381ae4[0x5] << 0x10 | _0x381ae4[0x6] << 0x8 | _0x381ae4[0x7], _0x381ae4[0x0] << 0x18 | _0x381ae4[0x1] << 0x10 | _0x381ae4[0x2] << 0x8 | _0x381ae4[0x3], _0x4f2da4);
        };
        _0x409c4f = _0x1a471f.exports;
      }, {});
      _0x3a1ca5.require("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/long/src/long.js");
      _0x3a1ca5.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js', function (_0x52adb1, _0x4142a0, _0x3dbaa5, _0x225e1d, _0x1cb5d3) {
        _0x3dbaa5.exports = function (_0x3f1750, _0x44e040) {
          var _0x1c0fd8 = new Array(arguments.length - 0x1);
          var _0x58e814 = 0x0;
          var _0x5185ae = 0x2;
          var _0x746c8c = true;
          for (; _0x5185ae < arguments.length;) {
            _0x1c0fd8[_0x58e814++] = arguments[_0x5185ae++];
          }
          return new Promise(function (_0x5f5036, _0x4ff4ee) {
            _0x1c0fd8[_0x58e814] = function (_0x1aa962) {
              if (_0x746c8c) {
                _0x746c8c = false;
                if (_0x1aa962) {
                  _0x4ff4ee(_0x1aa962);
                } else {
                  var _0xb4be64 = new Array(arguments.length - 0x1);
                  for (var _0x51a93d = 0x0; _0x51a93d < _0xb4be64.length;) {
                    _0xb4be64[_0x51a93d++] = arguments[_0x51a93d];
                  }
                  _0x5f5036.apply(null, _0xb4be64);
                }
              }
            };
            try {
              _0x3f1750.apply(_0x44e040 || null, _0x1c0fd8);
            } catch (_0x217074) {
              if (_0x746c8c) {
                _0x746c8c = false;
                _0x4ff4ee(_0x217074);
              }
            }
          });
        };
        _0x3dbaa5.exports;
      }, {});
      _0x3a1ca5.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js', function (_0x3cce08, _0x3ee0b7, _0x3a2c00, _0x523fa3, _0xc111fd) {
        _0x3cce08.length = function (_0x4c951c) {
          var _0x174798 = _0x4c951c.length;
          if (!_0x174798) {
            return 0x0;
          }
          for (var _0x4abf23 = 0x0; --_0x174798 % 0x4 > 0x1 && '=' === _0x4c951c.charAt(_0x174798);) {
            ++_0x4abf23;
          }
          return Math.ceil(0x3 * _0x4c951c.length) / 0x4 - _0x4abf23;
        };
        var _0xe7c40f = new Array(0x40);
        var _0x16c3b9 = new Array(0x7b);
        for (var _0x489259 = 0x0; _0x489259 < 0x40;) {
          _0x16c3b9[_0xe7c40f[_0x489259] = _0x489259 < 0x1a ? _0x489259 + 0x41 : _0x489259 < 0x34 ? _0x489259 + 0x47 : _0x489259 < 0x3e ? _0x489259 - 0x4 : _0x489259 - 0x3b | 0x2b] = _0x489259++;
        }
        _0x3cce08.encode = function (_0x23f596, _0x496ec7, _0x2dd744) {
          var _0x4098b4;
          var _0x24c5a2 = null;
          var _0x4ea53e = [];
          var _0x124278 = 0x0;
          for (var _0x18f51d = 0x0; _0x496ec7 < _0x2dd744;) {
            var _0x2665de = _0x23f596[_0x496ec7++];
            switch (_0x18f51d) {
              case 0x0:
                _0x4ea53e[_0x124278++] = _0xe7c40f[_0x2665de >> 0x2];
                _0x4098b4 = (0x3 & _0x2665de) << 0x4;
                _0x18f51d = 0x1;
                break;
              case 0x1:
                _0x4ea53e[_0x124278++] = _0xe7c40f[_0x4098b4 | _0x2665de >> 0x4];
                _0x4098b4 = (0xf & _0x2665de) << 0x2;
                _0x18f51d = 0x2;
                break;
              case 0x2:
                _0x4ea53e[_0x124278++] = _0xe7c40f[_0x4098b4 | _0x2665de >> 0x6];
                _0x4ea53e[_0x124278++] = _0xe7c40f[0x3f & _0x2665de];
                _0x18f51d = 0x0;
            }
            if (_0x124278 > 0x1fff) {
              (_0x24c5a2 || (_0x24c5a2 = [])).push(String.fromCharCode.apply(String, _0x4ea53e));
              _0x124278 = 0x0;
            }
          }
          if (_0x18f51d) {
            _0x4ea53e[_0x124278++] = _0xe7c40f[_0x4098b4];
            _0x4ea53e[_0x124278++] = 0x3d;
            if (0x1 === _0x18f51d) {
              _0x4ea53e[_0x124278++] = 0x3d;
            }
          }
          return _0x24c5a2 ? (_0x124278 && _0x24c5a2.push(String.fromCharCode.apply(String, _0x4ea53e.slice(0x0, _0x124278))), _0x24c5a2.join('')) : String.fromCharCode.apply(String, _0x4ea53e.slice(0x0, _0x124278));
        };
        _0x3cce08.decode = function (_0x185435, _0x337665, _0x359e68) {
          var _0x3f85e3;
          var _0x2bb8f7 = _0x359e68;
          var _0x34db8e = 0x0;
          for (var _0x2b8467 = 0x0; _0x2b8467 < _0x185435.length;) {
            var _0x5546f1 = _0x185435.charCodeAt(_0x2b8467++);
            if (0x3d === _0x5546f1 && _0x34db8e > 0x1) {
              break;
            }
            if (undefined === (_0x5546f1 = _0x16c3b9[_0x5546f1])) {
              throw Error("invalid encoding");
            }
            switch (_0x34db8e) {
              case 0x0:
                _0x3f85e3 = _0x5546f1;
                _0x34db8e = 0x1;
                break;
              case 0x1:
                _0x337665[_0x359e68++] = _0x3f85e3 << 0x2 | (0x30 & _0x5546f1) >> 0x4;
                _0x3f85e3 = _0x5546f1;
                _0x34db8e = 0x2;
                break;
              case 0x2:
                _0x337665[_0x359e68++] = (0xf & _0x3f85e3) << 0x4 | (0x3c & _0x5546f1) >> 0x2;
                _0x3f85e3 = _0x5546f1;
                _0x34db8e = 0x3;
                break;
              case 0x3:
                _0x337665[_0x359e68++] = (0x3 & _0x3f85e3) << 0x6 | _0x5546f1;
                _0x34db8e = 0x0;
            }
          }
          if (0x1 === _0x34db8e) {
            throw Error("invalid encoding");
          }
          return _0x359e68 - _0x2bb8f7;
        };
        _0x3cce08.test = function (_0x5bb0f8) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(_0x5bb0f8);
        };
        _0x3a2c00.exports;
      }, {});
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js", function (_0x2906d4, _0x31dd8f, _0x1e91e2, _0x1cca3f, _0x188906) {
        function _0x143665() {
          this._listeners = {};
        }
        _0x1e91e2.exports = _0x143665;
        _0x143665.prototype.on = function (_0x1413d9, _0x3aa678, _0x3ccdc3) {
          (this._listeners[_0x1413d9] || (this._listeners[_0x1413d9] = [])).push({
            'fn': _0x3aa678,
            'ctx': _0x3ccdc3 || this
          });
          return this;
        };
        _0x143665.prototype.off = function (_0x1cd2d3, _0x646466) {
          if (undefined === _0x1cd2d3) {
            this._listeners = {};
          } else {
            if (undefined === _0x646466) {
              this._listeners[_0x1cd2d3] = [];
            } else {
              var _0x2706ff = this._listeners[_0x1cd2d3];
              for (var _0x4c8820 = 0x0; _0x4c8820 < _0x2706ff.length;) {
                if (_0x2706ff[_0x4c8820].fn === _0x646466) {
                  _0x2706ff.splice(_0x4c8820, 0x1);
                } else {
                  ++_0x4c8820;
                }
              }
            }
          }
          return this;
        };
        _0x143665.prototype.emit = function (_0x5de2c0) {
          var _0x135a07 = this._listeners[_0x5de2c0];
          if (_0x135a07) {
            var _0x2e7cd4 = [];
            for (var _0x30a493 = 0x1; _0x30a493 < arguments.length;) {
              _0x2e7cd4.push(arguments[_0x30a493++]);
            }
            for (_0x30a493 = 0x0; _0x30a493 < _0x135a07.length;) {
              _0x135a07[_0x30a493].fn.apply(_0x135a07[_0x30a493++].ctx, _0x2e7cd4);
            }
          }
          return this;
        };
        _0x1e91e2.exports;
      }, {});
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/@protobufjs/float/index.js", function (_0x37557e, _0x4c1997, _0x24d886, _0x3ffeb6, _0x39a6bd) {
        function _0x1c15ca(_0x3467e8) {
          if ("undefined" != typeof Float32Array) {
            (function () {
              var _0x3f4b50 = new Float32Array([-0x0]);
              var _0x290a3b = new Uint8Array(_0x3f4b50.buffer);
              var _0x13dc27 = 0x80 === _0x290a3b[0x3];
              function _0x4a4432(_0x30b2c4, _0x175b0f, _0x41a066) {
                _0x3f4b50[0x0] = _0x30b2c4;
                _0x175b0f[_0x41a066] = _0x290a3b[0x0];
                _0x175b0f[_0x41a066 + 0x1] = _0x290a3b[0x1];
                _0x175b0f[_0x41a066 + 0x2] = _0x290a3b[0x2];
                _0x175b0f[_0x41a066 + 0x3] = _0x290a3b[0x3];
              }
              function _0x362513(_0x4a3cc4, _0x46f28e, _0x4682c2) {
                _0x3f4b50[0x0] = _0x4a3cc4;
                _0x46f28e[_0x4682c2] = _0x290a3b[0x3];
                _0x46f28e[_0x4682c2 + 0x1] = _0x290a3b[0x2];
                _0x46f28e[_0x4682c2 + 0x2] = _0x290a3b[0x1];
                _0x46f28e[_0x4682c2 + 0x3] = _0x290a3b[0x0];
              }
              function _0x1c4f48(_0xbf0a12, _0x7f26e4) {
                _0x290a3b[0x0] = _0xbf0a12[_0x7f26e4];
                _0x290a3b[0x1] = _0xbf0a12[_0x7f26e4 + 0x1];
                _0x290a3b[0x2] = _0xbf0a12[_0x7f26e4 + 0x2];
                _0x290a3b[0x3] = _0xbf0a12[_0x7f26e4 + 0x3];
                return _0x3f4b50[0x0];
              }
              function _0x431588(_0x37baad, _0x4c6042) {
                _0x290a3b[0x3] = _0x37baad[_0x4c6042];
                _0x290a3b[0x2] = _0x37baad[_0x4c6042 + 0x1];
                _0x290a3b[0x1] = _0x37baad[_0x4c6042 + 0x2];
                _0x290a3b[0x0] = _0x37baad[_0x4c6042 + 0x3];
                return _0x3f4b50[0x0];
              }
              _0x3467e8.writeFloatLE = _0x13dc27 ? _0x4a4432 : _0x362513;
              _0x3467e8.writeFloatBE = _0x13dc27 ? _0x362513 : _0x4a4432;
              _0x3467e8.readFloatLE = _0x13dc27 ? _0x1c4f48 : _0x431588;
              _0x3467e8.readFloatBE = _0x13dc27 ? _0x431588 : _0x1c4f48;
            })();
          } else {
            (function () {
              function _0x210633(_0x44640b, _0x5b62fc, _0x317dfb, _0x473309) {
                var _0x430350 = _0x5b62fc < 0x0 ? 0x1 : 0x0;
                if (_0x430350) {
                  _0x5b62fc = -_0x5b62fc;
                }
                if (0x0 === _0x5b62fc) {
                  _0x44640b(0x1 / _0x5b62fc > 0x0 ? 0x0 : 0x80000000, _0x317dfb, _0x473309);
                } else {
                  if (isNaN(_0x5b62fc)) {
                    _0x44640b(0x7fc00000, _0x317dfb, _0x473309);
                  } else {
                    if (_0x5b62fc > 0xffffff00000000000000000000000000) {
                      _0x44640b((_0x430350 << 0x1f | 0x7f800000) >>> 0x0, _0x317dfb, _0x473309);
                    } else {
                      if (_0x5b62fc < 1.1754943508222875e-38) {
                        _0x44640b((_0x430350 << 0x1f | Math.round(_0x5b62fc / 1.401298464324817e-45)) >>> 0x0, _0x317dfb, _0x473309);
                      } else {
                        var _0x22ef59 = Math.floor(Math.log(_0x5b62fc) / Math.LN2);
                        _0x44640b((_0x430350 << 0x1f | _0x22ef59 + 0x7f << 0x17 | 0x7fffff & Math.round(_0x5b62fc * Math.pow(0x2, -_0x22ef59) * 0x800000)) >>> 0x0, _0x317dfb, _0x473309);
                      }
                    }
                  }
                }
              }
              function _0x16ec31(_0x1e6682, _0x8c4f3a, _0x1c466e) {
                var _0x21ef66 = _0x1e6682(_0x8c4f3a, _0x1c466e);
                var _0xd82dd0 = 0x2 * (_0x21ef66 >> 0x1f) + 0x1;
                var _0x4832cd = _0x21ef66 >>> 0x17 & 0xff;
                var _0xed13c9 = 0x7fffff & _0x21ef66;
                return 0xff === _0x4832cd ? _0xed13c9 ? NaN : _0xd82dd0 * Infinity : 0x0 === _0x4832cd ? 1.401298464324817e-45 * _0xd82dd0 * _0xed13c9 : _0xd82dd0 * Math.pow(0x2, _0x4832cd - 0x96) * (_0xed13c9 + 0x800000);
              }
              _0x3467e8.writeFloatLE = _0x210633.bind(null, _0x4fc8c9);
              _0x3467e8.writeFloatBE = _0x210633.bind(null, _0x4c571a);
              _0x3467e8.readFloatLE = _0x16ec31.bind(null, _0x6f7647);
              _0x3467e8.readFloatBE = _0x16ec31.bind(null, _0xd00b38);
            })();
          }
          if ("undefined" != typeof Float64Array) {
            (function () {
              var _0x30932d = new Float64Array([-0x0]);
              var _0x316e69 = new Uint8Array(_0x30932d.buffer);
              var _0x3af5bf = 0x80 === _0x316e69[0x7];
              function _0x4d14ee(_0x568425, _0xe2d0bc, _0x2d9b3a) {
                _0x30932d[0x0] = _0x568425;
                _0xe2d0bc[_0x2d9b3a] = _0x316e69[0x0];
                _0xe2d0bc[_0x2d9b3a + 0x1] = _0x316e69[0x1];
                _0xe2d0bc[_0x2d9b3a + 0x2] = _0x316e69[0x2];
                _0xe2d0bc[_0x2d9b3a + 0x3] = _0x316e69[0x3];
                _0xe2d0bc[_0x2d9b3a + 0x4] = _0x316e69[0x4];
                _0xe2d0bc[_0x2d9b3a + 0x5] = _0x316e69[0x5];
                _0xe2d0bc[_0x2d9b3a + 0x6] = _0x316e69[0x6];
                _0xe2d0bc[_0x2d9b3a + 0x7] = _0x316e69[0x7];
              }
              function _0x55227c(_0x35c20d, _0x8b4392, _0x35b512) {
                _0x30932d[0x0] = _0x35c20d;
                _0x8b4392[_0x35b512] = _0x316e69[0x7];
                _0x8b4392[_0x35b512 + 0x1] = _0x316e69[0x6];
                _0x8b4392[_0x35b512 + 0x2] = _0x316e69[0x5];
                _0x8b4392[_0x35b512 + 0x3] = _0x316e69[0x4];
                _0x8b4392[_0x35b512 + 0x4] = _0x316e69[0x3];
                _0x8b4392[_0x35b512 + 0x5] = _0x316e69[0x2];
                _0x8b4392[_0x35b512 + 0x6] = _0x316e69[0x1];
                _0x8b4392[_0x35b512 + 0x7] = _0x316e69[0x0];
              }
              function _0x46b676(_0x545a97, _0x161722) {
                _0x316e69[0x0] = _0x545a97[_0x161722];
                _0x316e69[0x1] = _0x545a97[_0x161722 + 0x1];
                _0x316e69[0x2] = _0x545a97[_0x161722 + 0x2];
                _0x316e69[0x3] = _0x545a97[_0x161722 + 0x3];
                _0x316e69[0x4] = _0x545a97[_0x161722 + 0x4];
                _0x316e69[0x5] = _0x545a97[_0x161722 + 0x5];
                _0x316e69[0x6] = _0x545a97[_0x161722 + 0x6];
                _0x316e69[0x7] = _0x545a97[_0x161722 + 0x7];
                return _0x30932d[0x0];
              }
              function _0x4b71b5(_0xad275f, _0x55ebd5) {
                _0x316e69[0x7] = _0xad275f[_0x55ebd5];
                _0x316e69[0x6] = _0xad275f[_0x55ebd5 + 0x1];
                _0x316e69[0x5] = _0xad275f[_0x55ebd5 + 0x2];
                _0x316e69[0x4] = _0xad275f[_0x55ebd5 + 0x3];
                _0x316e69[0x3] = _0xad275f[_0x55ebd5 + 0x4];
                _0x316e69[0x2] = _0xad275f[_0x55ebd5 + 0x5];
                _0x316e69[0x1] = _0xad275f[_0x55ebd5 + 0x6];
                _0x316e69[0x0] = _0xad275f[_0x55ebd5 + 0x7];
                return _0x30932d[0x0];
              }
              _0x3467e8.writeDoubleLE = _0x3af5bf ? _0x4d14ee : _0x55227c;
              _0x3467e8.writeDoubleBE = _0x3af5bf ? _0x55227c : _0x4d14ee;
              _0x3467e8.readDoubleLE = _0x3af5bf ? _0x46b676 : _0x4b71b5;
              _0x3467e8.readDoubleBE = _0x3af5bf ? _0x4b71b5 : _0x46b676;
            })();
          } else {
            (function () {
              function _0x31e4eb(_0x178d14, _0x4db4e6, _0x23075d, _0x11387b, _0x348bb8, _0x1d450c) {
                var _0xf63a32 = _0x11387b < 0x0 ? 0x1 : 0x0;
                if (_0xf63a32) {
                  _0x11387b = -_0x11387b;
                }
                if (0x0 === _0x11387b) {
                  _0x178d14(0x0, _0x348bb8, _0x1d450c + _0x4db4e6);
                  _0x178d14(0x1 / _0x11387b > 0x0 ? 0x0 : 0x80000000, _0x348bb8, _0x1d450c + _0x23075d);
                } else {
                  if (isNaN(_0x11387b)) {
                    _0x178d14(0x0, _0x348bb8, _0x1d450c + _0x4db4e6);
                    _0x178d14(0x7ff80000, _0x348bb8, _0x1d450c + _0x23075d);
                  } else {
                    if (_0x11387b > 0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
                      _0x178d14(0x0, _0x348bb8, _0x1d450c + _0x4db4e6);
                      _0x178d14((_0xf63a32 << 0x1f | 0x7ff00000) >>> 0x0, _0x348bb8, _0x1d450c + _0x23075d);
                    } else {
                      var _0x33c87c;
                      if (_0x11387b < 2.2250738585072014e-308) {
                        _0x178d14((_0x33c87c = _0x11387b / 5e-324) >>> 0x0, _0x348bb8, _0x1d450c + _0x4db4e6);
                        _0x178d14((_0xf63a32 << 0x1f | _0x33c87c / 0x100000000) >>> 0x0, _0x348bb8, _0x1d450c + _0x23075d);
                      } else {
                        var _0x36705d = Math.floor(Math.log(_0x11387b) / Math.LN2);
                        if (0x400 === _0x36705d) {
                          _0x36705d = 0x3ff;
                        }
                        _0x178d14(0x10000000000000 * (_0x33c87c = _0x11387b * Math.pow(0x2, -_0x36705d)) >>> 0x0, _0x348bb8, _0x1d450c + _0x4db4e6);
                        _0x178d14((_0xf63a32 << 0x1f | _0x36705d + 0x3ff << 0x14 | 0x100000 * _0x33c87c & 0xfffff) >>> 0x0, _0x348bb8, _0x1d450c + _0x23075d);
                      }
                    }
                  }
                }
              }
              function _0x54e97a(_0x5768c0, _0x221ceb, _0x3c3397, _0x5f145b, _0x2013e4) {
                var _0x433b1b = _0x5768c0(_0x5f145b, _0x2013e4 + _0x221ceb);
                var _0x223e39 = _0x5768c0(_0x5f145b, _0x2013e4 + _0x3c3397);
                var _0x437c4e = 0x2 * (_0x223e39 >> 0x1f) + 0x1;
                var _0x54e4ca = _0x223e39 >>> 0x14 & 0x7ff;
                var _0x322e9e = 0x100000000 * (0xfffff & _0x223e39) + _0x433b1b;
                return 0x7ff === _0x54e4ca ? _0x322e9e ? NaN : _0x437c4e * Infinity : 0x0 === _0x54e4ca ? 5e-324 * _0x437c4e * _0x322e9e : _0x437c4e * Math.pow(0x2, _0x54e4ca - 0x433) * (_0x322e9e + 0x10000000000000);
              }
              _0x3467e8.writeDoubleLE = _0x31e4eb.bind(null, _0x4fc8c9, 0x0, 0x4);
              _0x3467e8.writeDoubleBE = _0x31e4eb.bind(null, _0x4c571a, 0x4, 0x0);
              _0x3467e8.readDoubleLE = _0x54e97a.bind(null, _0x6f7647, 0x0, 0x4);
              _0x3467e8.readDoubleBE = _0x54e97a.bind(null, _0xd00b38, 0x4, 0x0);
            })();
          }
          return _0x3467e8;
        }
        function _0x4fc8c9(_0x63c59a, _0x4e1889, _0x2661bf) {
          _0x4e1889[_0x2661bf] = 0xff & _0x63c59a;
          _0x4e1889[_0x2661bf + 0x1] = _0x63c59a >>> 0x8 & 0xff;
          _0x4e1889[_0x2661bf + 0x2] = _0x63c59a >>> 0x10 & 0xff;
          _0x4e1889[_0x2661bf + 0x3] = _0x63c59a >>> 0x18;
        }
        function _0x4c571a(_0xc3fe17, _0x129b7a, _0x1c0ea1) {
          _0x129b7a[_0x1c0ea1] = _0xc3fe17 >>> 0x18;
          _0x129b7a[_0x1c0ea1 + 0x1] = _0xc3fe17 >>> 0x10 & 0xff;
          _0x129b7a[_0x1c0ea1 + 0x2] = _0xc3fe17 >>> 0x8 & 0xff;
          _0x129b7a[_0x1c0ea1 + 0x3] = 0xff & _0xc3fe17;
        }
        function _0x6f7647(_0x580216, _0x71c11f) {
          return (_0x580216[_0x71c11f] | _0x580216[_0x71c11f + 0x1] << 0x8 | _0x580216[_0x71c11f + 0x2] << 0x10 | _0x580216[_0x71c11f + 0x3] << 0x18) >>> 0x0;
        }
        function _0xd00b38(_0x4464f1, _0x559c75) {
          return (_0x4464f1[_0x559c75] << 0x18 | _0x4464f1[_0x559c75 + 0x1] << 0x10 | _0x4464f1[_0x559c75 + 0x2] << 0x8 | _0x4464f1[_0x559c75 + 0x3]) >>> 0x0;
        }
        _0x24d886.exports = _0x1c15ca(_0x1c15ca);
        _0x24d886.exports;
        _0x24d886.exports.writeFloatLE;
        _0x24d886.exports.writeFloatBE;
        _0x24d886.exports.readFloatLE;
        _0x24d886.exports.readFloatBE;
        _0x24d886.exports.writeDoubleLE;
        _0x24d886.exports.writeDoubleBE;
        _0x24d886.exports.readDoubleLE;
        _0x24d886.exports.readDoubleBE;
      }, {});
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js", function (_0x2853d1, _0xf2fbb2, _0x4f1439, _0x3f2242, _0x3584ad) {
        function _0xd7f78d(_0x27ea2f) {
          try {
            var _0x3c3a48 = eval('quire'.replace(/^/, 're'))(_0x27ea2f);
            if (_0x3c3a48 && (_0x3c3a48.length || Object.keys(_0x3c3a48).length)) {
              return _0x3c3a48;
            }
          } catch (_0x3ec2ed) {}
          return null;
        }
        _0x4f1439.exports = _0xd7f78d;
        _0x4f1439.exports;
      }, {});
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js", function (_0x3d1553, _0x4f1415, _0x286c31, _0x405926, _0x2b5e6d) {
        _0x3d1553.length = function (_0x1dd025) {
          var _0x3ac999 = 0x0;
          var _0x2ad912 = 0x0;
          for (var _0x5b3618 = 0x0; _0x5b3618 < _0x1dd025.length; ++_0x5b3618) {
            if ((_0x2ad912 = _0x1dd025.charCodeAt(_0x5b3618)) < 0x80) {
              _0x3ac999 += 0x1;
            } else if (_0x2ad912 < 0x800) {
              _0x3ac999 += 0x2;
            } else if (0xd800 == (0xfc00 & _0x2ad912) && 0xdc00 == (0xfc00 & _0x1dd025.charCodeAt(_0x5b3618 + 0x1))) {
              ++_0x5b3618;
              _0x3ac999 += 0x4;
            } else {
              _0x3ac999 += 0x3;
            }
          }
          return _0x3ac999;
        };
        _0x3d1553.read = function (_0x1ab3fd, _0x1c8234, _0xd3058b) {
          if (_0xd3058b - _0x1c8234 < 0x1) {
            return '';
          }
          var _0x44da83;
          var _0xdf9c95 = null;
          var _0x141618 = [];
          for (var _0x4ecca3 = 0x0; _0x1c8234 < _0xd3058b;) {
            if ((_0x44da83 = _0x1ab3fd[_0x1c8234++]) < 0x80) {
              _0x141618[_0x4ecca3++] = _0x44da83;
            } else if (_0x44da83 > 0xbf && _0x44da83 < 0xe0) {
              _0x141618[_0x4ecca3++] = (0x1f & _0x44da83) << 0x6 | 0x3f & _0x1ab3fd[_0x1c8234++];
            } else if (_0x44da83 > 0xef && _0x44da83 < 0x16d) {
              _0x44da83 = ((0x7 & _0x44da83) << 0x12 | (0x3f & _0x1ab3fd[_0x1c8234++]) << 0xc | (0x3f & _0x1ab3fd[_0x1c8234++]) << 0x6 | 0x3f & _0x1ab3fd[_0x1c8234++]) - 0x10000;
              _0x141618[_0x4ecca3++] = 0xd800 + (_0x44da83 >> 0xa);
              _0x141618[_0x4ecca3++] = 0xdc00 + (0x3ff & _0x44da83);
            } else {
              _0x141618[_0x4ecca3++] = (0xf & _0x44da83) << 0xc | (0x3f & _0x1ab3fd[_0x1c8234++]) << 0x6 | 0x3f & _0x1ab3fd[_0x1c8234++];
            }
            if (_0x4ecca3 > 0x1fff) {
              (_0xdf9c95 || (_0xdf9c95 = [])).push(String.fromCharCode.apply(String, _0x141618));
              _0x4ecca3 = 0x0;
            }
          }
          return _0xdf9c95 ? (_0x4ecca3 && _0xdf9c95.push(String.fromCharCode.apply(String, _0x141618.slice(0x0, _0x4ecca3))), _0xdf9c95.join('')) : String.fromCharCode.apply(String, _0x141618.slice(0x0, _0x4ecca3));
        };
        _0x3d1553.write = function (_0x2210b4, _0x383075, _0x113d2b) {
          var _0x4c3156;
          var _0x50046a;
          var _0x40cbd8 = _0x113d2b;
          for (var _0x33e6a4 = 0x0; _0x33e6a4 < _0x2210b4.length; ++_0x33e6a4) {
            if ((_0x4c3156 = _0x2210b4.charCodeAt(_0x33e6a4)) < 0x80) {
              _0x383075[_0x113d2b++] = _0x4c3156;
            } else if (_0x4c3156 < 0x800) {
              _0x383075[_0x113d2b++] = _0x4c3156 >> 0x6 | 0xc0;
              _0x383075[_0x113d2b++] = 0x3f & _0x4c3156 | 0x80;
            } else if (0xd800 == (0xfc00 & _0x4c3156) && 0xdc00 == (0xfc00 & (_0x50046a = _0x2210b4.charCodeAt(_0x33e6a4 + 0x1)))) {
              _0x4c3156 = 0x10000 + ((0x3ff & _0x4c3156) << 0xa) + (0x3ff & _0x50046a);
              ++_0x33e6a4;
              _0x383075[_0x113d2b++] = _0x4c3156 >> 0x12 | 0xf0;
              _0x383075[_0x113d2b++] = _0x4c3156 >> 0xc & 0x3f | 0x80;
              _0x383075[_0x113d2b++] = _0x4c3156 >> 0x6 & 0x3f | 0x80;
              _0x383075[_0x113d2b++] = 0x3f & _0x4c3156 | 0x80;
            } else {
              _0x383075[_0x113d2b++] = _0x4c3156 >> 0xc | 0xe0;
              _0x383075[_0x113d2b++] = _0x4c3156 >> 0x6 & 0x3f | 0x80;
              _0x383075[_0x113d2b++] = 0x3f & _0x4c3156 | 0x80;
            }
          }
          return _0x113d2b - _0x40cbd8;
        };
        _0x286c31.exports;
      }, {});
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js", function (_0x6dc9f3, _0x488467, _0x145c8f, _0x48f418, _0x2ba4e9) {
        _0x145c8f.exports = function (_0x23cf7f, _0x1b119a, _0x109785) {
          var _0xacf7a0 = _0x109785 || 0x2000;
          var _0x3b4ab5 = _0xacf7a0 >>> 0x1;
          var _0x34751a = null;
          var _0x4733f6 = _0xacf7a0;
          return function (_0x1189a5) {
            if (_0x1189a5 < 0x1 || _0x1189a5 > _0x3b4ab5) {
              return _0x23cf7f(_0x1189a5);
            }
            if (_0x4733f6 + _0x1189a5 > _0xacf7a0) {
              _0x34751a = _0x23cf7f(_0xacf7a0);
              _0x4733f6 = 0x0;
            }
            var _0x247145 = _0x1b119a.call(_0x34751a, _0x4733f6, _0x4733f6 += _0x1189a5);
            if (0x7 & _0x4733f6) {
              _0x4733f6 = 0x1 + (0x7 | _0x4733f6);
            }
            return _0x247145;
          };
        };
        _0x145c8f.exports;
      }, {});
      _0x3a1ca5.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js', function (_0x383699, _0xdd72f5, _0x46ea29, _0x1b3fa0, _0x37f4d8) {
        _0x46ea29.exports = _0x570429;
        var _0x51935d = _0xdd72f5('../util/minimal');
        function _0x570429(_0x461c4d, _0x5cf5a4) {
          this.lo = _0x461c4d >>> 0x0;
          this.hi = _0x5cf5a4 >>> 0x0;
        }
        var _0x45ccc2 = _0x570429.zero = new _0x570429(0x0, 0x0);
        _0x45ccc2.toNumber = function () {
          return 0x0;
        };
        _0x45ccc2.zzEncode = _0x45ccc2.zzDecode = function () {
          return this;
        };
        _0x45ccc2.length = function () {
          return 0x1;
        };
        var _0x145a7b = _0x570429.zeroHash = "\0\0\0\0\0\0\0\0";
        _0x570429.fromNumber = function (_0xe97311) {
          if (0x0 === _0xe97311) {
            return _0x45ccc2;
          }
          var _0x4cc0f6 = _0xe97311 < 0x0;
          if (_0x4cc0f6) {
            _0xe97311 = -_0xe97311;
          }
          var _0x99fa4 = _0xe97311 >>> 0x0;
          var _0x4f6575 = (_0xe97311 - _0x99fa4) / 0x100000000 >>> 0x0;
          if (_0x4cc0f6) {
            _0x4f6575 = ~_0x4f6575 >>> 0x0;
            _0x99fa4 = ~_0x99fa4 >>> 0x0;
            if (++_0x99fa4 > 0xffffffff) {
              _0x99fa4 = 0x0;
              if (++_0x4f6575 > 0xffffffff) {
                _0x4f6575 = 0x0;
              }
            }
          }
          return new _0x570429(_0x99fa4, _0x4f6575);
        };
        _0x570429.from = function (_0x39e559) {
          if ("number" == typeof _0x39e559) {
            return _0x570429.fromNumber(_0x39e559);
          }
          if (_0x51935d.isString(_0x39e559)) {
            if (!_0x51935d.Long) {
              return _0x570429.fromNumber(parseInt(_0x39e559, 0xa));
            }
            _0x39e559 = _0x51935d.Long.fromString(_0x39e559);
          }
          return _0x39e559.low || _0x39e559.high ? new _0x570429(_0x39e559.low >>> 0x0, _0x39e559.high >>> 0x0) : _0x45ccc2;
        };
        _0x570429.prototype.toNumber = function (_0x2d6878) {
          if (!_0x2d6878 && this.hi >>> 0x1f) {
            var _0x2a4e52 = 0x1 + ~this.lo >>> 0x0;
            var _0x27ea69 = ~this.hi >>> 0x0;
            if (!_0x2a4e52) {
              _0x27ea69 = _0x27ea69 + 0x1 >>> 0x0;
            }
            return -(_0x2a4e52 + 0x100000000 * _0x27ea69);
          }
          return this.lo + 0x100000000 * this.hi;
        };
        _0x570429.prototype.toLong = function (_0x37429f) {
          return _0x51935d.Long ? new _0x51935d.Long(0x0 | this.lo, 0x0 | this.hi, Boolean(_0x37429f)) : {
            'low': 0x0 | this.lo,
            'high': 0x0 | this.hi,
            'unsigned': Boolean(_0x37429f)
          };
        };
        var _0x1cc11b = String.prototype.charCodeAt;
        _0x570429.fromHash = function (_0x30b630) {
          return _0x30b630 === _0x145a7b ? _0x45ccc2 : new _0x570429((_0x1cc11b.call(_0x30b630, 0x0) | _0x1cc11b.call(_0x30b630, 0x1) << 0x8 | _0x1cc11b.call(_0x30b630, 0x2) << 0x10 | _0x1cc11b.call(_0x30b630, 0x3) << 0x18) >>> 0x0, (_0x1cc11b.call(_0x30b630, 0x4) | _0x1cc11b.call(_0x30b630, 0x5) << 0x8 | _0x1cc11b.call(_0x30b630, 0x6) << 0x10 | _0x1cc11b.call(_0x30b630, 0x7) << 0x18) >>> 0x0);
        };
        _0x570429.prototype.toHash = function () {
          return String.fromCharCode(0xff & this.lo, this.lo >>> 0x8 & 0xff, this.lo >>> 0x10 & 0xff, this.lo >>> 0x18, 0xff & this.hi, this.hi >>> 0x8 & 0xff, this.hi >>> 0x10 & 0xff, this.hi >>> 0x18);
        };
        _0x570429.prototype.zzEncode = function () {
          var _0x1b4b97 = this.hi >> 0x1f;
          this.hi = ((this.hi << 0x1 | this.lo >>> 0x1f) ^ _0x1b4b97) >>> 0x0;
          this.lo = (this.lo << 0x1 ^ _0x1b4b97) >>> 0x0;
          return this;
        };
        _0x570429.prototype.zzDecode = function () {
          var _0x2a078f = -(0x1 & this.lo);
          this.lo = ((this.lo >>> 0x1 | this.hi << 0x1f) ^ _0x2a078f) >>> 0x0;
          this.hi = (this.hi >>> 0x1 ^ _0x2a078f) >>> 0x0;
          return this;
        };
        _0x570429.prototype.length = function () {
          var _0x4d6714 = this.lo;
          var _0x38b4aa = (this.lo >>> 0x1c | this.hi << 0x4) >>> 0x0;
          var _0x46cc6b = this.hi >>> 0x18;
          return 0x0 === _0x46cc6b ? 0x0 === _0x38b4aa ? _0x4d6714 < 0x4000 ? _0x4d6714 < 0x80 ? 0x1 : 0x2 : _0x4d6714 < 0x200000 ? 0x3 : 0x4 : _0x38b4aa < 0x4000 ? _0x38b4aa < 0x80 ? 0x5 : 0x6 : _0x38b4aa < 0x200000 ? 0x7 : 0x8 : _0x46cc6b < 0x80 ? 0x9 : 0xa;
        };
        _0x46ea29.exports;
      }, function () {
        return {
          '../util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js", function (_0x2a3147, _0x2fb0d2, _0x1e35b1, _0x1f497c, _0x5a88fa) {
        function _0x2b21d9(_0x32fbbf, _0x91f742, _0x3019b5) {
          var _0x52fb9f = Object.keys(_0x91f742);
          for (var _0x577bdf = 0x0; _0x577bdf < _0x52fb9f.length; ++_0x577bdf) {
            if (!(undefined !== _0x32fbbf[_0x52fb9f[_0x577bdf]] && _0x3019b5)) {
              _0x32fbbf[_0x52fb9f[_0x577bdf]] = _0x91f742[_0x52fb9f[_0x577bdf]];
            }
          }
          return _0x32fbbf;
        }
        function _0x5c9221(_0x337fa4) {
          function _0x598da6(_0x27d30f, _0x5d8f62) {
            if (!(this instanceof _0x598da6)) {
              return new _0x598da6(_0x27d30f, _0x5d8f62);
            }
            Object.defineProperty(this, "message", {
              'get': function () {
                return _0x27d30f;
              }
            });
            if (Error.captureStackTrace) {
              Error.captureStackTrace(this, _0x598da6);
            } else {
              Object.defineProperty(this, 'stack', {
                'value': new Error().stack || ''
              });
            }
            if (_0x5d8f62) {
              _0x2b21d9(this, _0x5d8f62);
            }
          }
          (_0x598da6.prototype = Object.create(Error.prototype)).constructor = _0x598da6;
          Object.defineProperty(_0x598da6.prototype, 'name', {
            'get': function () {
              return _0x337fa4;
            }
          });
          _0x598da6.prototype.toString = function () {
            return this.name + ": " + this.message;
          };
          return _0x598da6;
        }
        _0x2a3147.asPromise = _0x2fb0d2("@protobufjs/aspromise");
        _0x2a3147.base64 = _0x2fb0d2("@protobufjs/base64");
        _0x2a3147.EventEmitter = _0x2fb0d2("@protobufjs/eventemitter");
        _0x2a3147.float = _0x2fb0d2('@protobufjs/float');
        _0x2a3147.inquire = _0x2fb0d2("@protobufjs/inquire");
        _0x2a3147.utf8 = _0x2fb0d2("@protobufjs/utf8");
        _0x2a3147.pool = _0x2fb0d2("@protobufjs/pool");
        _0x2a3147.LongBits = _0x2fb0d2('./longbits');
        _0x2a3147.isNode = Boolean("undefined" != typeof global && global && global.process && global.process.versions && global.process.versions.node);
        _0x2a3147.global = _0x2a3147.isNode && global || "undefined" != typeof window && window || 'undefined' != typeof self && self || this;
        _0x2a3147.emptyArray = Object.freeze ? Object.freeze([]) : [];
        _0x2a3147.emptyObject = Object.freeze ? Object.freeze({}) : {};
        _0x2a3147.isInteger = Number.isInteger || function (_0x2b21fc) {
          return "number" == typeof _0x2b21fc && isFinite(_0x2b21fc) && Math.floor(_0x2b21fc) === _0x2b21fc;
        };
        _0x2a3147.isString = function (_0x218b1a) {
          return "string" == typeof _0x218b1a || _0x218b1a instanceof String;
        };
        _0x2a3147.isObject = function (_0x497317) {
          return _0x497317 && "object" == typeof _0x497317;
        };
        _0x2a3147.isset = _0x2a3147.isSet = function (_0x8489ed, _0x2505a9) {
          var _0x2a0de6 = _0x8489ed[_0x2505a9];
          return !(null == _0x2a0de6 || !_0x8489ed.hasOwnProperty(_0x2505a9)) && ("object" != typeof _0x2a0de6 || (Array.isArray(_0x2a0de6) ? _0x2a0de6.length : Object.keys(_0x2a0de6).length) > 0x0);
        };
        _0x2a3147.Buffer = function () {
          try {
            var _0x738de3 = _0x2a3147.inquire("buffer").Buffer;
            return _0x738de3.prototype.utf8Write ? _0x738de3 : null;
          } catch (_0x22e7f3) {
            return null;
          }
        }();
        _0x2a3147._Buffer_from = null;
        _0x2a3147._Buffer_allocUnsafe = null;
        _0x2a3147.newBuffer = function (_0x43337e) {
          return "number" == typeof _0x43337e ? _0x2a3147.Buffer ? _0x2a3147._Buffer_allocUnsafe(_0x43337e) : new _0x2a3147.Array(_0x43337e) : _0x2a3147.Buffer ? _0x2a3147._Buffer_from(_0x43337e) : "undefined" == typeof Uint8Array ? _0x43337e : new Uint8Array(_0x43337e);
        };
        _0x2a3147.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array;
        _0x2a3147.Long = _0x2a3147.global.dcodeIO && _0x2a3147.global.dcodeIO.Long || _0x2a3147.global.Long || _0x2a3147.inquire('long');
        _0x2a3147.key2Re = /^true|false|0|1$/;
        _0x2a3147.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
        _0x2a3147.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
        _0x2a3147.longToHash = function (_0x2c2760) {
          return _0x2c2760 ? _0x2a3147.LongBits.from(_0x2c2760).toHash() : _0x2a3147.LongBits.zeroHash;
        };
        _0x2a3147.longFromHash = function (_0x4707ed, _0x5ef062) {
          var _0x5d998d = _0x2a3147.LongBits.fromHash(_0x4707ed);
          return _0x2a3147.Long ? _0x2a3147.Long.fromBits(_0x5d998d.lo, _0x5d998d.hi, _0x5ef062) : _0x5d998d.toNumber(Boolean(_0x5ef062));
        };
        _0x2a3147.merge = _0x2b21d9;
        _0x2a3147.lcFirst = function (_0x50866f) {
          return _0x50866f.charAt(0x0).toLowerCase() + _0x50866f.substring(0x1);
        };
        _0x2a3147.newError = _0x5c9221;
        _0x2a3147.ProtocolError = _0x5c9221("ProtocolError");
        _0x2a3147.oneOfGetter = function (_0x566e86) {
          var _0x1e2585 = {};
          for (var _0x3e1a72 = 0x0; _0x3e1a72 < _0x566e86.length; ++_0x3e1a72) {
            _0x1e2585[_0x566e86[_0x3e1a72]] = 0x1;
          }
          return function () {
            var _0x49b55e = Object.keys(this);
            for (var _0x2dae59 = _0x49b55e.length - 0x1; _0x2dae59 > -0x1; --_0x2dae59) {
              if (0x1 === _0x1e2585[_0x49b55e[_0x2dae59]] && undefined !== this[_0x49b55e[_0x2dae59]] && null !== this[_0x49b55e[_0x2dae59]]) {
                return _0x49b55e[_0x2dae59];
              }
            }
          };
        };
        _0x2a3147.oneOfSetter = function (_0x361982) {
          return function (_0x3ca3dd) {
            for (var _0x1930d7 = 0x0; _0x1930d7 < _0x361982.length; ++_0x1930d7) {
              if (_0x361982[_0x1930d7] !== _0x3ca3dd) {
                delete this[_0x361982[_0x1930d7]];
              }
            }
          };
        };
        _0x2a3147.toJSONOptions = {
          'longs': String,
          'enums': String,
          'bytes': String,
          'json': true
        };
        _0x2a3147._configure = function () {
          var _0x43dd45 = _0x2a3147.Buffer;
          if (_0x43dd45) {
            _0x2a3147._Buffer_from = _0x43dd45.from !== Uint8Array.from && _0x43dd45.from || function (_0x3b848d, _0x50fc45) {
              return new _0x43dd45(_0x3b848d, _0x50fc45);
            };
            _0x2a3147._Buffer_allocUnsafe = _0x43dd45.allocUnsafe || function (_0x129b6c) {
              return new _0x43dd45(_0x129b6c);
            };
          } else {
            _0x2a3147._Buffer_from = _0x2a3147._Buffer_allocUnsafe = null;
          }
        };
        _0x1e35b1.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js',
          '@protobufjs/base64': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js',
          '@protobufjs/eventemitter': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js",
          '@protobufjs/float': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/@protobufjs/float/index.js",
          '@protobufjs/inquire': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js",
          '@protobufjs/utf8': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js",
          '@protobufjs/pool': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js",
          './longbits': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js'
        };
      });
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/writer.js", function (_0x2e0dbd, _0x4cfab5, _0x371571, _0x3c47b9, _0x3a2664) {
        _0x371571.exports = _0x4db10a;
        var _0x29bb88;
        var _0x3a3249 = _0x4cfab5('./util/minimal');
        var _0x2e6641 = _0x3a3249.LongBits;
        var _0x54c39 = _0x3a3249.base64;
        var _0x491df6 = _0x3a3249.utf8;
        function _0x5b3317(_0x3f37de, _0x638738, _0x38afa3) {
          this.fn = _0x3f37de;
          this.len = _0x638738;
          this.next = undefined;
          this.val = _0x38afa3;
        }
        function _0x15c5cc() {}
        function _0x4c4083(_0x18673a) {
          this.head = _0x18673a.head;
          this.tail = _0x18673a.tail;
          this.len = _0x18673a.len;
          this.next = _0x18673a.states;
        }
        function _0x4db10a() {
          this.len = 0x0;
          this.head = new _0x5b3317(_0x15c5cc, 0x0, 0x0);
          this.tail = this.head;
          this.states = null;
        }
        var _0x318aaa = function () {
          return _0x3a3249.Buffer ? function () {
            return (_0x4db10a.create = function () {
              return new _0x29bb88();
            })();
          } : function () {
            return new _0x4db10a();
          };
        };
        function _0xde7c36(_0x8f3f5a, _0x4ed7c4, _0x3a03eb) {
          _0x4ed7c4[_0x3a03eb] = 0xff & _0x8f3f5a;
        }
        function _0x7b4635(_0x18dcb0, _0x55f57f) {
          this.len = _0x18dcb0;
          this.next = undefined;
          this.val = _0x55f57f;
        }
        function _0x1ff00a(_0x3f13cd, _0xe80e06, _0x418cf2) {
          for (; _0x3f13cd.hi;) {
            _0xe80e06[_0x418cf2++] = 0x7f & _0x3f13cd.lo | 0x80;
            _0x3f13cd.lo = (_0x3f13cd.lo >>> 0x7 | _0x3f13cd.hi << 0x19) >>> 0x0;
            _0x3f13cd.hi >>>= 0x7;
          }
          for (; _0x3f13cd.lo > 0x7f;) {
            _0xe80e06[_0x418cf2++] = 0x7f & _0x3f13cd.lo | 0x80;
            _0x3f13cd.lo = _0x3f13cd.lo >>> 0x7;
          }
          _0xe80e06[_0x418cf2++] = _0x3f13cd.lo;
        }
        function _0x5e2e3d(_0x5ef39f, _0x2d486b, _0x48b050) {
          _0x2d486b[_0x48b050] = 0xff & _0x5ef39f;
          _0x2d486b[_0x48b050 + 0x1] = _0x5ef39f >>> 0x8 & 0xff;
          _0x2d486b[_0x48b050 + 0x2] = _0x5ef39f >>> 0x10 & 0xff;
          _0x2d486b[_0x48b050 + 0x3] = _0x5ef39f >>> 0x18;
        }
        _0x4db10a.create = _0x318aaa();
        _0x4db10a.alloc = function (_0x1ee53e) {
          return new _0x3a3249.Array(_0x1ee53e);
        };
        if (_0x3a3249.Array !== Array) {
          _0x4db10a.alloc = _0x3a3249.pool(_0x4db10a.alloc, _0x3a3249.Array.prototype.subarray);
        }
        _0x4db10a.prototype._push = function (_0x55caf4, _0x37202d, _0x105025) {
          this.tail = this.tail.next = new _0x5b3317(_0x55caf4, _0x37202d, _0x105025);
          this.len += _0x37202d;
          return this;
        };
        _0x7b4635.prototype = Object.create(_0x5b3317.prototype);
        _0x7b4635.prototype.fn = function (_0x1e8a01, _0x5c62b9, _0x2cd460) {
          for (; _0x1e8a01 > 0x7f;) {
            _0x5c62b9[_0x2cd460++] = 0x7f & _0x1e8a01 | 0x80;
            _0x1e8a01 >>>= 0x7;
          }
          _0x5c62b9[_0x2cd460] = _0x1e8a01;
        };
        _0x4db10a.prototype.uint32 = function (_0x2940e0) {
          this.len += (this.tail = this.tail.next = new _0x7b4635((_0x2940e0 >>>= 0x0) < 0x80 ? 0x1 : _0x2940e0 < 0x4000 ? 0x2 : _0x2940e0 < 0x200000 ? 0x3 : _0x2940e0 < 0x10000000 ? 0x4 : 0x5, _0x2940e0)).len;
          return this;
        };
        _0x4db10a.prototype.int32 = function (_0x319213) {
          return _0x319213 < 0x0 ? this._push(_0x1ff00a, 0xa, _0x2e6641.fromNumber(_0x319213)) : this.uint32(_0x319213);
        };
        _0x4db10a.prototype.sint32 = function (_0x143781) {
          return this.uint32((_0x143781 << 0x1 ^ _0x143781 >> 0x1f) >>> 0x0);
        };
        _0x4db10a.prototype.uint64 = function (_0x1bf328) {
          var _0xd303a7 = _0x2e6641.from(_0x1bf328);
          return this._push(_0x1ff00a, _0xd303a7.length(), _0xd303a7);
        };
        _0x4db10a.prototype.int64 = _0x4db10a.prototype.uint64;
        _0x4db10a.prototype.sint64 = function (_0x37f8ae) {
          var _0xf5f4de = _0x2e6641.from(_0x37f8ae).zzEncode();
          return this._push(_0x1ff00a, _0xf5f4de.length(), _0xf5f4de);
        };
        _0x4db10a.prototype.bool = function (_0x4d278d) {
          return this._push(_0xde7c36, 0x1, _0x4d278d ? 0x1 : 0x0);
        };
        _0x4db10a.prototype.fixed32 = function (_0x52fec7) {
          return this._push(_0x5e2e3d, 0x4, _0x52fec7 >>> 0x0);
        };
        _0x4db10a.prototype.sfixed32 = _0x4db10a.prototype.fixed32;
        _0x4db10a.prototype.fixed64 = function (_0x4d0f82) {
          var _0x121957 = _0x2e6641.from(_0x4d0f82);
          return this._push(_0x5e2e3d, 0x4, _0x121957.lo)._push(_0x5e2e3d, 0x4, _0x121957.hi);
        };
        _0x4db10a.prototype.sfixed64 = _0x4db10a.prototype.fixed64;
        _0x4db10a.prototype.float = function (_0x33b8f7) {
          return this._push(_0x3a3249.float.writeFloatLE, 0x4, _0x33b8f7);
        };
        _0x4db10a.prototype.double = function (_0x40652d) {
          return this._push(_0x3a3249.float.writeDoubleLE, 0x8, _0x40652d);
        };
        var _0x1152c7 = _0x3a3249.Array.prototype.set ? function (_0x44f3ed, _0x5aa43c, _0x279527) {
          _0x5aa43c.set(_0x44f3ed, _0x279527);
        } : function (_0x23a149, _0x5eadea, _0x90a686) {
          for (var _0x1100b2 = 0x0; _0x1100b2 < _0x23a149.length; ++_0x1100b2) {
            _0x5eadea[_0x90a686 + _0x1100b2] = _0x23a149[_0x1100b2];
          }
        };
        _0x4db10a.prototype.bytes = function (_0x3ba4e9) {
          var _0x21d5f1 = _0x3ba4e9.length >>> 0x0;
          if (!_0x21d5f1) {
            return this._push(_0xde7c36, 0x1, 0x0);
          }
          if (_0x3a3249.isString(_0x3ba4e9)) {
            var _0x1a0aed = _0x4db10a.alloc(_0x21d5f1 = _0x54c39.length(_0x3ba4e9));
            _0x54c39.decode(_0x3ba4e9, _0x1a0aed, 0x0);
            _0x3ba4e9 = _0x1a0aed;
          }
          return this.uint32(_0x21d5f1)._push(_0x1152c7, _0x21d5f1, _0x3ba4e9);
        };
        _0x4db10a.prototype.string = function (_0x1ecaf1) {
          var _0x44248d = _0x491df6.length(_0x1ecaf1);
          return _0x44248d ? this.uint32(_0x44248d)._push(_0x491df6.write, _0x44248d, _0x1ecaf1) : this._push(_0xde7c36, 0x1, 0x0);
        };
        _0x4db10a.prototype.fork = function () {
          this.states = new _0x4c4083(this);
          this.head = this.tail = new _0x5b3317(_0x15c5cc, 0x0, 0x0);
          this.len = 0x0;
          return this;
        };
        _0x4db10a.prototype.reset = function () {
          if (this.states) {
            this.head = this.states.head;
            this.tail = this.states.tail;
            this.len = this.states.len;
            this.states = this.states.next;
          } else {
            this.head = this.tail = new _0x5b3317(_0x15c5cc, 0x0, 0x0);
            this.len = 0x0;
          }
          return this;
        };
        _0x4db10a.prototype.ldelim = function () {
          var _0x56e23d = this.head;
          var _0x4e873c = this.tail;
          var _0x1c52c9 = this.len;
          this.reset().uint32(_0x1c52c9);
          if (_0x1c52c9) {
            this.tail.next = _0x56e23d.next;
            this.tail = _0x4e873c;
            this.len += _0x1c52c9;
          }
          return this;
        };
        _0x4db10a.prototype.finish = function () {
          var _0x3f4781 = this.head.next;
          var _0x95dc2e = this.constructor.alloc(this.len);
          for (var _0x26578a = 0x0; _0x3f4781;) {
            _0x3f4781.fn(_0x3f4781.val, _0x95dc2e, _0x26578a);
            _0x26578a += _0x3f4781.len;
            _0x3f4781 = _0x3f4781.next;
          }
          return _0x95dc2e;
        };
        _0x4db10a._configure = function (_0x593dc6) {
          _0x29bb88 = _0x593dc6;
          _0x4db10a.create = _0x318aaa();
          _0x29bb88._configure();
        };
        _0x371571.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js", function (_0x502dbc, _0x146244, _0x5dae77, _0x41f248, _0x29abd6) {
        _0x5dae77.exports = _0x534f8b;
        var _0x2cbbd1 = _0x146244("./writer");
        (_0x534f8b.prototype = Object.create(_0x2cbbd1.prototype)).constructor = _0x534f8b;
        var _0x2ee60b = _0x146244("./util/minimal");
        function _0x534f8b() {
          _0x2cbbd1.call(this);
        }
        function _0x25a117(_0x3b6601, _0x1c7c79, _0x1cd290) {
          if (_0x3b6601.length < 0x28) {
            _0x2ee60b.utf8.write(_0x3b6601, _0x1c7c79, _0x1cd290);
          } else if (_0x1c7c79.utf8Write) {
            _0x1c7c79.utf8Write(_0x3b6601, _0x1cd290);
          } else {
            _0x1c7c79.write(_0x3b6601, _0x1cd290);
          }
        }
        _0x534f8b._configure = function () {
          _0x534f8b.alloc = _0x2ee60b._Buffer_allocUnsafe;
          _0x534f8b.writeBytesBuffer = _0x2ee60b.Buffer && _0x2ee60b.Buffer.prototype instanceof Uint8Array && "set" === _0x2ee60b.Buffer.prototype.set.name ? function (_0x59c648, _0x2d6c0d, _0x1834bd) {
            _0x2d6c0d.set(_0x59c648, _0x1834bd);
          } : function (_0x50ba11, _0x1c6e0c, _0x1e12cf) {
            if (_0x50ba11.copy) {
              _0x50ba11.copy(_0x1c6e0c, _0x1e12cf, 0x0, _0x50ba11.length);
            } else {
              for (var _0xeeaf6 = 0x0; _0xeeaf6 < _0x50ba11.length;) {
                _0x1c6e0c[_0x1e12cf++] = _0x50ba11[_0xeeaf6++];
              }
            }
          };
        };
        _0x534f8b.prototype.bytes = function (_0x14c3fb) {
          if (_0x2ee60b.isString(_0x14c3fb)) {
            _0x14c3fb = _0x2ee60b._Buffer_from(_0x14c3fb, "base64");
          }
          var _0x5f3e9c = _0x14c3fb.length >>> 0x0;
          this.uint32(_0x5f3e9c);
          if (_0x5f3e9c) {
            this._push(_0x534f8b.writeBytesBuffer, _0x5f3e9c, _0x14c3fb);
          }
          return this;
        };
        _0x534f8b.prototype.string = function (_0x1bc56b) {
          var _0x21f3da = _0x2ee60b.Buffer.byteLength(_0x1bc56b);
          this.uint32(_0x21f3da);
          if (_0x21f3da) {
            this._push(_0x25a117, _0x21f3da, _0x1bc56b);
          }
          return this;
        };
        _0x534f8b._configure();
        _0x5dae77.exports;
      }, function () {
        return {
          './writer': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/reader.js", function (_0x2f3575, _0xf9a833, _0x152837, _0x15a65f, _0x499ad3) {
        _0x152837.exports = _0x3f80ab;
        var _0x392971;
        var _0x1abab5 = _0xf9a833("./util/minimal");
        var _0x220d45 = _0x1abab5.LongBits;
        var _0x48e952 = _0x1abab5.utf8;
        function _0x3f80ab(_0x58e8ab) {
          this.buf = _0x58e8ab;
          this.pos = 0x0;
          this.len = _0x58e8ab.length;
        }
        var _0x34737b;
        var _0x27908e = 'undefined' != typeof Uint8Array ? function (_0x109cda) {
          if (_0x109cda instanceof Uint8Array || Array.isArray(_0x109cda)) {
            return new _0x3f80ab(_0x109cda);
          }
          throw Error("illegal buffer");
        } : function (_0x36bcdb) {
          if (Array.isArray(_0x36bcdb)) {
            return new _0x3f80ab(_0x36bcdb);
          }
          throw Error("illegal buffer");
        };
        var _0x44ba79 = function () {
          return _0x1abab5.Buffer ? function (_0x2cd996) {
            return (_0x3f80ab.create = function (_0x3dfc40) {
              return _0x1abab5.Buffer.isBuffer(_0x3dfc40) ? new _0x392971(_0x3dfc40) : _0x27908e(_0x3dfc40);
            })(_0x2cd996);
          } : _0x27908e;
        };
        function _0x5182a6() {
          var _0x6e0da7 = new _0x220d45(0x0, 0x0);
          var _0x337020 = 0x0;
          if (!(this.len - this.pos > 0x4)) {
            for (; _0x337020 < 0x3; ++_0x337020) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0x6e0da7.lo = (_0x6e0da7.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0x337020) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x6e0da7;
              }
            }
            _0x6e0da7.lo = (_0x6e0da7.lo | (0x7f & this.buf[this.pos++]) << 0x7 * _0x337020) >>> 0x0;
            return _0x6e0da7;
          }
          for (; _0x337020 < 0x4; ++_0x337020) {
            _0x6e0da7.lo = (_0x6e0da7.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0x337020) >>> 0x0;
            if (this.buf[this.pos++] < 0x80) {
              return _0x6e0da7;
            }
          }
          _0x6e0da7.lo = (_0x6e0da7.lo | (0x7f & this.buf[this.pos]) << 0x1c) >>> 0x0;
          _0x6e0da7.hi = (_0x6e0da7.hi | (0x7f & this.buf[this.pos]) >> 0x4) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x6e0da7;
          }
          _0x337020 = 0x0;
          if (this.len - this.pos > 0x4) {
            for (; _0x337020 < 0x5; ++_0x337020) {
              _0x6e0da7.hi = (_0x6e0da7.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0x337020 + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x6e0da7;
              }
            }
          } else {
            for (; _0x337020 < 0x5; ++_0x337020) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0x6e0da7.hi = (_0x6e0da7.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0x337020 + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x6e0da7;
              }
            }
          }
          throw Error("invalid varint encoding");
        }
        function _0x2600d9() {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x8 || 0x1) + " > " + this.len);
          }
          return new _0x220d45((this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0, (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0);
        }
        _0x3f80ab.create = _0x44ba79();
        _0x3f80ab.prototype._slice = _0x1abab5.Array.prototype.subarray || _0x1abab5.Array.prototype.slice;
        _0x34737b = 0xffffffff;
        _0x3f80ab.prototype.uint32 = function () {
          _0x34737b = (0x7f & this.buf[this.pos]) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x34737b;
          }
          _0x34737b = (_0x34737b | (0x7f & this.buf[this.pos]) << 0x7) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x34737b;
          }
          _0x34737b = (_0x34737b | (0x7f & this.buf[this.pos]) << 0xe) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x34737b;
          }
          _0x34737b = (_0x34737b | (0x7f & this.buf[this.pos]) << 0x15) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x34737b;
          }
          _0x34737b = (_0x34737b | (0xf & this.buf[this.pos]) << 0x1c) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x34737b;
          }
          if ((this.pos += 0x5) > this.len) {
            this.pos = this.len;
            throw RangeError("index out of range: " + this.pos + " + " + (0xa || 0x1) + " > " + this.len);
          }
          return _0x34737b;
        };
        _0x3f80ab.prototype.int32 = function () {
          return 0x0 | this.uint32();
        };
        _0x3f80ab.prototype.sint32 = function () {
          var _0x430584 = this.uint32();
          return _0x430584 >>> 0x1 ^ -(0x1 & _0x430584) | 0x0;
        };
        _0x3f80ab.prototype.bool = function () {
          return 0x0 !== this.uint32();
        };
        _0x3f80ab.prototype.fixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0x3f80ab.prototype.sfixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return 0x0 | (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0x3f80ab.prototype.float = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x3a6adf = _0x1abab5.float.readFloatLE(this.buf, this.pos);
          this.pos += 0x4;
          return _0x3a6adf;
        };
        _0x3f80ab.prototype.double = function () {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x1269b2 = _0x1abab5.float.readDoubleLE(this.buf, this.pos);
          this.pos += 0x8;
          return _0x1269b2;
        };
        _0x3f80ab.prototype.bytes = function () {
          var _0x386ce2 = this.uint32();
          var _0x3cbbc4 = this.pos;
          var _0x4deb6c = this.pos + _0x386ce2;
          if (_0x4deb6c > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (_0x386ce2 || 0x1) + " > " + this.len);
          }
          this.pos += _0x386ce2;
          return Array.isArray(this.buf) ? this.buf.slice(_0x3cbbc4, _0x4deb6c) : _0x3cbbc4 === _0x4deb6c ? new this.buf.constructor(0x0) : this._slice.call(this.buf, _0x3cbbc4, _0x4deb6c);
        };
        _0x3f80ab.prototype.string = function () {
          var _0x2aebc7 = this.bytes();
          return _0x48e952.read(_0x2aebc7, 0x0, _0x2aebc7.length);
        };
        _0x3f80ab.prototype.skip = function (_0x6c3515) {
          if ("number" == typeof _0x6c3515) {
            if (this.pos + _0x6c3515 > this.len) {
              throw RangeError("index out of range: " + this.pos + " + " + (_0x6c3515 || 0x1) + " > " + this.len);
            }
            this.pos += _0x6c3515;
          } else {
            do {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
            } while (0x80 & this.buf[this.pos++]);
          }
          return this;
        };
        _0x3f80ab.prototype.skipType = function (_0x4e9358) {
          switch (_0x4e9358) {
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
              for (; 0x4 != (_0x4e9358 = 0x7 & this.uint32());) {
                this.skipType(_0x4e9358);
              }
              break;
            case 0x5:
              this.skip(0x4);
              break;
            default:
              throw Error("invalid wire type " + _0x4e9358 + " at offset " + this.pos);
          }
          return this;
        };
        _0x3f80ab._configure = function (_0x2f65c3) {
          _0x392971 = _0x2f65c3;
          _0x3f80ab.create = _0x44ba79();
          _0x392971._configure();
          var _0x40b0aa = _0x1abab5.Long ? "toLong" : "toNumber";
          _0x1abab5.merge(_0x3f80ab.prototype, {
            'int64': function () {
              return _0x5182a6.call(this)[_0x40b0aa](false);
            },
            'uint64': function () {
              return _0x5182a6.call(this)[_0x40b0aa](true);
            },
            'sint64': function () {
              return _0x5182a6.call(this).zzDecode()[_0x40b0aa](false);
            },
            'fixed64': function () {
              return _0x2600d9.call(this)[_0x40b0aa](true);
            },
            'sfixed64': function () {
              return _0x2600d9.call(this)[_0x40b0aa](false);
            }
          });
        };
        _0x152837.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js", function (_0x1fb1c2, _0x2a45f4, _0x1ad207, _0x2de271, _0x1645dc) {
        _0x1ad207.exports = _0x330eb7;
        var _0x4ecb75 = _0x2a45f4("./reader");
        (_0x330eb7.prototype = Object.create(_0x4ecb75.prototype)).constructor = _0x330eb7;
        var _0x329406 = _0x2a45f4("./util/minimal");
        function _0x330eb7(_0x53bf66) {
          _0x4ecb75.call(this, _0x53bf66);
        }
        _0x330eb7._configure = function () {
          if (_0x329406.Buffer) {
            _0x330eb7.prototype._slice = _0x329406.Buffer.prototype.slice;
          }
        };
        _0x330eb7.prototype.string = function () {
          var _0x551cc7 = this.uint32();
          return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + _0x551cc7, this.len)) : this.buf.toString('utf-8', this.pos, this.pos = Math.min(this.pos + _0x551cc7, this.len));
        };
        _0x330eb7._configure();
        _0x1ad207.exports;
      }, function () {
        return {
          './reader': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js", function (_0x509def, _0x1645a9, _0x233575, _0xce7632, _0x264bd7) {
        _0x233575.exports = _0x2663da;
        var _0x1ccc18 = _0x1645a9("../util/minimal");
        function _0x2663da(_0x267d08, _0x1633a2, _0x19040f) {
          if ('function' != typeof _0x267d08) {
            throw TypeError("rpcImpl must be a function");
          }
          _0x1ccc18.EventEmitter.call(this);
          this.rpcImpl = _0x267d08;
          this.requestDelimited = Boolean(_0x1633a2);
          this.responseDelimited = Boolean(_0x19040f);
        }
        (_0x2663da.prototype = Object.create(_0x1ccc18.EventEmitter.prototype)).constructor = _0x2663da;
        _0x2663da.prototype.rpcCall = function _0x805f32(_0x21d4e1, _0x11d776, _0x5777bc, _0x3f7a0d, _0x3d6c23) {
          if (!_0x3f7a0d) {
            throw TypeError("request must be specified");
          }
          var _0x5c81bf = this;
          if (!_0x3d6c23) {
            return _0x1ccc18.asPromise(_0x805f32, _0x5c81bf, _0x21d4e1, _0x11d776, _0x5777bc, _0x3f7a0d);
          }
          if (_0x5c81bf.rpcImpl) {
            try {
              return _0x5c81bf.rpcImpl(_0x21d4e1, _0x11d776[_0x5c81bf.requestDelimited ? 'encodeDelimited' : "encode"](_0x3f7a0d).finish(), function (_0x59d08d, _0x329a9b) {
                if (_0x59d08d) {
                  _0x5c81bf.emit("error", _0x59d08d, _0x21d4e1);
                  return _0x3d6c23(_0x59d08d);
                }
                if (null !== _0x329a9b) {
                  if (!(_0x329a9b instanceof _0x5777bc)) {
                    try {
                      _0x329a9b = _0x5777bc[_0x5c81bf.responseDelimited ? "decodeDelimited" : 'decode'](_0x329a9b);
                    } catch (_0x311595) {
                      _0x5c81bf.emit('error', _0x311595, _0x21d4e1);
                      return _0x3d6c23(_0x311595);
                    }
                  }
                  _0x5c81bf.emit('data', _0x329a9b, _0x21d4e1);
                  return _0x3d6c23(null, _0x329a9b);
                }
                _0x5c81bf.end(true);
              });
            } catch (_0x2722c0) {
              _0x5c81bf.emit("error", _0x2722c0, _0x21d4e1);
              return void setTimeout(function () {
                _0x3d6c23(_0x2722c0);
              }, 0x0);
            }
          } else {
            setTimeout(function () {
              _0x3d6c23(Error("already ended"));
            }, 0x0);
          }
        };
        _0x2663da.prototype.end = function (_0x47db81) {
          if (this.rpcImpl) {
            if (!_0x47db81) {
              this.rpcImpl(null, null, null);
            }
            this.rpcImpl = null;
            this.emit("end").off();
          }
          return this;
        };
        _0x233575.exports;
      }, function () {
        return {
          '../util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js", function (_0x5ddbeb, _0x53f98e, _0x4b09d7, _0x4290d2, _0x44e0ae) {
        _0x5ddbeb.Service = _0x53f98e("./rpc/service");
        _0x4b09d7.exports;
      }, function () {
        return {
          './rpc/service': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js"
        };
      });
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/roots.js", function (_0x264049, _0x10b927, _0x315257, _0x4940ad, _0xfd3efc) {
        _0x315257.exports = {};
        _0x315257.exports;
      }, {});
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js", function (_0x232cc1, _0x513339, _0xb45669, _0xb69780, _0x9a01bc) {
        function _0x143a06() {
          _0x232cc1.util._configure();
          _0x232cc1.Writer._configure(_0x232cc1.BufferWriter);
          _0x232cc1.Reader._configure(_0x232cc1.BufferReader);
        }
        _0x232cc1.build = 'minimal';
        _0x232cc1.Writer = _0x513339("./writer");
        _0x232cc1.BufferWriter = _0x513339("./writer_buffer");
        _0x232cc1.Reader = _0x513339("./reader");
        _0x232cc1.BufferReader = _0x513339("./reader_buffer");
        _0x232cc1.util = _0x513339("./util/minimal");
        _0x232cc1.rpc = _0x513339("./rpc");
        _0x232cc1.roots = _0x513339("./roots");
        _0x232cc1.configure = _0x143a06;
        _0x143a06();
        _0xb45669.exports;
      }, function () {
        return {
          './writer': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './writer_buffer': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js",
          './reader': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './reader_buffer': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js",
          './util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          './rpc': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js",
          './roots': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/roots.js"
        };
      });
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js", function (_0xeaab26, _0x4e058b, _0x2c0390, _0x2b0d47, _0x4e0e1c) {
        function _0x3c77a5(_0x1978fc, _0x40df6c) {
          if ("string" == typeof _0x1978fc) {
            _0x40df6c = _0x1978fc;
            _0x1978fc = undefined;
          }
          var _0x5b3fa0 = [];
          function _0x5d64c5(_0x41323b) {
            if ("string" != typeof _0x41323b) {
              var _0xbbf94e = "function " + (undefined || _0x40df6c || '') + '(' + (_0x1978fc && _0x1978fc.join(',') || '') + "){\n  " + _0x5b3fa0.join("\n  ") + "\n}";
              if (_0x3c77a5.verbose) {
                console.log("codegen: " + _0xbbf94e);
              }
              _0xbbf94e = "return " + _0xbbf94e;
              if (_0x41323b) {
                var _0x414da7 = Object.keys(_0x41323b);
                var _0x6979f4 = new Array(_0x414da7.length + 0x1);
                var _0x1e1d23 = new Array(_0x414da7.length);
                for (var _0x35433a = 0x0; _0x35433a < _0x414da7.length;) {
                  _0x6979f4[_0x35433a] = _0x414da7[_0x35433a];
                  _0x1e1d23[_0x35433a] = _0x41323b[_0x414da7[_0x35433a++]];
                }
                _0x6979f4[_0x35433a] = _0xbbf94e;
                return Function.apply(null, _0x6979f4).apply(null, _0x1e1d23);
              }
              return Function(_0xbbf94e)();
            }
            var _0x3bf158 = new Array(arguments.length - 0x1);
            for (var _0x3a499b = 0x0; _0x3a499b < _0x3bf158.length;) {
              _0x3bf158[_0x3a499b] = arguments[++_0x3a499b];
            }
            _0x3a499b = 0x0;
            _0x41323b = _0x41323b.replace(/%([%dfijs])/g, function (_0x13764f, _0x34c708) {
              var _0x2b5f30 = _0x3bf158[_0x3a499b++];
              switch (_0x34c708) {
                case 'd':
                case 'f':
                  return String(Number(_0x2b5f30));
                case 'i':
                  return String(Math.floor(_0x2b5f30));
                case 'j':
                  return JSON.stringify(_0x2b5f30);
                case 's':
                  return String(_0x2b5f30);
              }
              return '%';
            });
            if (_0x3a499b !== _0x3bf158.length) {
              throw Error("parameter count mismatch");
            }
            _0x5b3fa0.push(_0x41323b);
            return _0x5d64c5;
          }
          function _0x38ab04(_0x24ef78) {
            return "function " + (_0x24ef78 || _0x40df6c || '') + '(' + (_0x1978fc && _0x1978fc.join(',') || '') + "){\n  " + _0x5b3fa0.join("\n  ") + "\n}";
          }
          _0x5d64c5.toString = _0x38ab04;
          return _0x5d64c5;
        }
        _0x2c0390.exports = _0x3c77a5;
        _0x3c77a5.verbose = false;
        _0x2c0390.exports;
      }, {});
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js", function (_0x81525f, _0x203cc7, _0x1dcbfc, _0x1e280f, _0x525b69) {
        _0x1dcbfc.exports = _0x5b563b;
        var _0x27022f = _0x203cc7("@protobufjs/aspromise");
        var _0x41392e = _0x203cc7("@protobufjs/inquire")('fs');
        function _0x5b563b(_0x27ce10, _0x235a6c, _0x3231e5) {
          if ("function" == typeof _0x235a6c) {
            _0x3231e5 = _0x235a6c;
            _0x235a6c = {};
          } else if (!_0x235a6c) {
            _0x235a6c = {};
          }
          return _0x3231e5 ? !_0x235a6c.xhr && _0x41392e && _0x41392e.readFile ? _0x41392e.readFile(_0x27ce10, function (_0x2f637e, _0x456a81) {
            return _0x2f637e && "undefined" != typeof XMLHttpRequest ? _0x5b563b.xhr(_0x27ce10, _0x235a6c, _0x3231e5) : _0x2f637e ? _0x3231e5(_0x2f637e) : _0x3231e5(null, _0x235a6c.binary ? _0x456a81 : _0x456a81.toString("utf8"));
          }) : _0x5b563b.xhr(_0x27ce10, _0x235a6c, _0x3231e5) : _0x27022f(_0x5b563b, this, _0x27ce10, _0x235a6c);
        }
        _0x5b563b.xhr = function (_0x1d1af2, _0x18819f, _0x7cd539) {
          var _0x4c5c12 = new XMLHttpRequest();
          _0x4c5c12.onreadystatechange = function () {
            if (0x4 === _0x4c5c12.readyState) {
              if (0x0 !== _0x4c5c12.status && 0xc8 !== _0x4c5c12.status) {
                return _0x7cd539(Error("status " + _0x4c5c12.status));
              }
              if (_0x18819f.binary) {
                var _0x57d69f = _0x4c5c12.response;
                if (!_0x57d69f) {
                  _0x57d69f = [];
                  for (var _0x19858a = 0x0; _0x19858a < _0x4c5c12.responseText.length; ++_0x19858a) {
                    _0x57d69f.push(0xff & _0x4c5c12.responseText.charCodeAt(_0x19858a));
                  }
                }
                return _0x7cd539(null, "undefined" != typeof Uint8Array ? new Uint8Array(_0x57d69f) : _0x57d69f);
              }
              return _0x7cd539(null, _0x4c5c12.responseText);
            }
          };
          if (_0x18819f.binary) {
            if ('overrideMimeType' in _0x4c5c12) {
              _0x4c5c12.overrideMimeType("text/plain; charset=x-user-defined");
            }
            _0x4c5c12.responseType = 'arraybuffer';
          }
          _0x4c5c12.open("GET", _0x1d1af2);
          _0x4c5c12.send();
        };
        _0x1dcbfc.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js',
          '@protobufjs/inquire': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js"
        };
      });
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/@protobufjs/path/index.js", function (_0x5506c5, _0x75fef9, _0x53badd, _0x2eedf6, _0x2942bb) {
        var _0x236605 = _0x5506c5.isAbsolute = function (_0xf050d7) {
          return /^(?:\/|\w+:)/.test(_0xf050d7);
        };
        var _0x316c83 = _0x5506c5.normalize = function (_0x320015) {
          var _0x161851 = (_0x320015 = _0x320015.replace(/\\/g, '/').replace(/\/{2,}/g, '/')).split('/');
          var _0x31c7ea = _0x236605(_0x320015);
          var _0xea1607 = '';
          if (_0x31c7ea) {
            _0xea1607 = _0x161851.shift() + '/';
          }
          for (var _0x5338a1 = 0x0; _0x5338a1 < _0x161851.length;) {
            if ('..' === _0x161851[_0x5338a1]) {
              if (_0x5338a1 > 0x0 && '..' !== _0x161851[_0x5338a1 - 0x1]) {
                _0x161851.splice(--_0x5338a1, 0x2);
              } else if (_0x31c7ea) {
                _0x161851.splice(_0x5338a1, 0x1);
              } else {
                ++_0x5338a1;
              }
            } else if ('.' === _0x161851[_0x5338a1]) {
              _0x161851.splice(_0x5338a1, 0x1);
            } else {
              ++_0x5338a1;
            }
          }
          return _0xea1607 + _0x161851.join('/');
        };
        _0x5506c5.resolve = function (_0x4373d7, _0x1a88ee, _0x5f0498) {
          if (!_0x5f0498) {
            _0x1a88ee = _0x316c83(_0x1a88ee);
          }
          return _0x236605(_0x1a88ee) ? _0x1a88ee : (_0x5f0498 || (_0x4373d7 = _0x316c83(_0x4373d7)), (_0x4373d7 = _0x4373d7.replace(/(?:\/|^)[^/]+$/, '')).length ? _0x316c83(_0x4373d7 + '/' + _0x1a88ee) : _0x1a88ee);
        };
        _0x53badd.exports;
      }, {});
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/types.js", function (_0x4c7d74, _0x563ec5, _0x1a7c4b, _0x37a956, _0x208740) {
        var _0x1fd9b4 = _0x563ec5('./util');
        var _0xe42a6 = ['double', 'float', "int32", "uint32", "sint32", 'fixed32', 'sfixed32', 'int64', "uint64", "sint64", "fixed64", 'sfixed64', "bool", "string", "bytes"];
        function _0x2ebdf2(_0x53ee5f, _0x37aee2) {
          var _0x5ecba7 = 0x0;
          var _0x59b905 = {};
          for (_0x37aee2 |= 0x0; _0x5ecba7 < _0x53ee5f.length;) {
            _0x59b905[_0xe42a6[_0x5ecba7 + _0x37aee2]] = _0x53ee5f[_0x5ecba7++];
          }
          return _0x59b905;
        }
        _0x4c7d74.basic = _0x2ebdf2([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2, 0x2]);
        _0x4c7d74.defaults = _0x2ebdf2([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, false, '', _0x1fd9b4.emptyArray, null]);
        _0x4c7d74.long = _0x2ebdf2([0x0, 0x0, 0x0, 0x1, 0x1], 0x7);
        _0x4c7d74.mapKey = _0x2ebdf2([0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2], 0x2);
        _0x4c7d74.packed = _0x2ebdf2([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0]);
        _0x1a7c4b.exports;
      }, function () {
        return {
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/field.js", function (_0x2ba66e, _0x3795de, _0x45db9b, _0x21cc23, _0x54b94a) {
        _0x45db9b.exports = _0x2248f3;
        var _0x2ad537 = _0x3795de("./object");
        ((_0x2248f3.prototype = Object.create(_0x2ad537.prototype)).constructor = _0x2248f3).className = "Field";
        var _0x374a18;
        var _0x47af33 = _0x3795de('./enum');
        var _0xc2d791 = _0x3795de("./types");
        var _0x136998 = _0x3795de('./util');
        var _0x2c4e2d = /^required|optional|repeated$/;
        function _0x2248f3(_0x39d08e, _0x26ea4e, _0x498d79, _0x4edf2f, _0x5b09f8, _0x545be9, _0x5059ac) {
          if (_0x136998.isObject(_0x4edf2f)) {
            _0x5059ac = _0x5b09f8;
            _0x545be9 = _0x4edf2f;
            _0x4edf2f = _0x5b09f8 = undefined;
          } else if (_0x136998.isObject(_0x5b09f8)) {
            _0x5059ac = _0x545be9;
            _0x545be9 = _0x5b09f8;
            _0x5b09f8 = undefined;
          }
          _0x2ad537.call(this, _0x39d08e, _0x545be9);
          if (!_0x136998.isInteger(_0x26ea4e) || _0x26ea4e < 0x0) {
            throw TypeError("id must be a non-negative integer");
          }
          if (!_0x136998.isString(_0x498d79)) {
            throw TypeError("type must be a string");
          }
          if (undefined !== _0x4edf2f && !_0x2c4e2d.test(_0x4edf2f = _0x4edf2f.toString().toLowerCase())) {
            throw TypeError("rule must be a string rule");
          }
          if (undefined !== _0x5b09f8 && !_0x136998.isString(_0x5b09f8)) {
            throw TypeError("extend must be a string");
          }
          if ("proto3_optional" === _0x4edf2f) {
            _0x4edf2f = "optional";
          }
          this.rule = _0x4edf2f && "optional" !== _0x4edf2f ? _0x4edf2f : undefined;
          this.type = _0x498d79;
          this.id = _0x26ea4e;
          this.extend = _0x5b09f8 || undefined;
          this.required = "required" === _0x4edf2f;
          this.optional = !this.required;
          this.repeated = "repeated" === _0x4edf2f;
          this.map = false;
          this.message = null;
          this.partOf = null;
          this.typeDefault = null;
          this.defaultValue = null;
          this.long = !!_0x136998.Long && undefined !== _0xc2d791.long[_0x498d79];
          this.bytes = 'bytes' === _0x498d79;
          this.resolvedType = null;
          this.extensionField = null;
          this.declaringField = null;
          this._packed = null;
          this.comment = _0x5059ac;
        }
        _0x2248f3.fromJSON = function (_0x124566, _0x9fddc) {
          return new _0x2248f3(_0x124566, _0x9fddc.id, _0x9fddc.type, _0x9fddc.rule, _0x9fddc.extend, _0x9fddc.options, _0x9fddc.comment);
        };
        Object.defineProperty(_0x2248f3.prototype, "packed", {
          'get': function () {
            if (null === this._packed) {
              this._packed = false !== this.getOption("packed");
            }
            return this._packed;
          }
        });
        _0x2248f3.prototype.setOption = function (_0x982418, _0x472e18, _0x806b43) {
          if ("packed" === _0x982418) {
            this._packed = null;
          }
          return _0x2ad537.prototype.setOption.call(this, _0x982418, _0x472e18, _0x806b43);
        };
        _0x2248f3.prototype.toJSON = function (_0x24a5b0) {
          var _0x425659 = !!_0x24a5b0 && Boolean(_0x24a5b0.keepComments);
          return _0x136998.toObject(["rule", 'optional' !== this.rule && this.rule || undefined, "type", this.type, 'id', this.id, 'extend', this.extend, "options", this.options, 'comment', _0x425659 ? this.comment : undefined]);
        };
        _0x2248f3.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === (this.typeDefault = _0xc2d791.defaults[this.type])) {
            this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
            if (this.resolvedType instanceof _0x374a18) {
              this.typeDefault = null;
            } else {
              this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0x0]];
            }
          }
          if (this.options && null != this.options['default']) {
            this.typeDefault = this.options['default'];
            if (this.resolvedType instanceof _0x47af33 && "string" == typeof this.typeDefault) {
              this.typeDefault = this.resolvedType.values[this.typeDefault];
            }
          }
          if (this.options) {
            if (!(true !== this.options.packed && (undefined === this.options.packed || !this.resolvedType || this.resolvedType instanceof _0x47af33))) {
              delete this.options.packed;
            }
            if (!Object.keys(this.options).length) {
              this.options = undefined;
            }
          }
          if (this.long) {
            this.typeDefault = _0x136998.Long.fromNumber(this.typeDefault, 'u' === this.type.charAt(0x0));
            if (Object.freeze) {
              Object.freeze(this.typeDefault);
            }
          } else {
            if (this.bytes && "string" == typeof this.typeDefault) {
              var _0x50352f;
              if (_0x136998.base64.test(this.typeDefault)) {
                _0x136998.base64.decode(this.typeDefault, _0x50352f = _0x136998.newBuffer(_0x136998.base64.length(this.typeDefault)), 0x0);
              } else {
                _0x136998.utf8.write(this.typeDefault, _0x50352f = _0x136998.newBuffer(_0x136998.utf8.length(this.typeDefault)), 0x0);
              }
              this.typeDefault = _0x50352f;
            }
          }
          if (this.map) {
            this.defaultValue = _0x136998.emptyObject;
          } else if (this.repeated) {
            this.defaultValue = _0x136998.emptyArray;
          } else {
            this.defaultValue = this.typeDefault;
          }
          if (this.parent instanceof _0x374a18) {
            this.parent.ctor.prototype[this.name] = this.defaultValue;
          }
          return _0x2ad537.prototype.resolve.call(this);
        };
        _0x2248f3.d = function (_0xfef0b8, _0x16ff6d, _0x7b7fa8, _0x1100b3) {
          if ("function" == typeof _0x16ff6d) {
            _0x16ff6d = _0x136998.decorateType(_0x16ff6d).name;
          } else if (_0x16ff6d && 'object' == typeof _0x16ff6d) {
            _0x16ff6d = _0x136998.decorateEnum(_0x16ff6d).name;
          }
          return function (_0x29ddac, _0x1f4397) {
            _0x136998.decorateType(_0x29ddac.constructor).add(new _0x2248f3(_0x1f4397, _0xfef0b8, _0x16ff6d, _0x7b7fa8, {
              'default': _0x1100b3
            }));
          };
        };
        _0x2248f3._configure = function (_0x2a7201) {
          _0x374a18 = _0x2a7201;
        };
        _0x45db9b.exports;
      }, function () {
        return {
          './object': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js", function (_0x15b973, _0x3eda92, _0x461717, _0x1bd459, _0x46c9b4) {
        _0x461717.exports = _0x423f21;
        var _0x6b2d53 = _0x3eda92('./object');
        ((_0x423f21.prototype = Object.create(_0x6b2d53.prototype)).constructor = _0x423f21).className = "OneOf";
        var _0x45c4f0 = _0x3eda92("./field");
        var _0x12005c = _0x3eda92('./util');
        function _0x423f21(_0x59c365, _0x5a5c4b, _0x11aa22, _0x5d030a) {
          if (!Array.isArray(_0x5a5c4b)) {
            _0x11aa22 = _0x5a5c4b;
            _0x5a5c4b = undefined;
          }
          _0x6b2d53.call(this, _0x59c365, _0x11aa22);
          if (undefined !== _0x5a5c4b && !Array.isArray(_0x5a5c4b)) {
            throw TypeError("fieldNames must be an Array");
          }
          this.oneof = _0x5a5c4b || [];
          this.fieldsArray = [];
          this.comment = _0x5d030a;
        }
        function _0x3d02c6(_0x3eb785) {
          if (_0x3eb785.parent) {
            for (var _0x37611a = 0x0; _0x37611a < _0x3eb785.fieldsArray.length; ++_0x37611a) {
              if (!_0x3eb785.fieldsArray[_0x37611a].parent) {
                _0x3eb785.parent.add(_0x3eb785.fieldsArray[_0x37611a]);
              }
            }
          }
        }
        _0x423f21.fromJSON = function (_0x31f33a, _0x7b6a07) {
          return new _0x423f21(_0x31f33a, _0x7b6a07.oneof, _0x7b6a07.options, _0x7b6a07.comment);
        };
        _0x423f21.prototype.toJSON = function (_0x5685e6) {
          var _0x4add50 = !!_0x5685e6 && Boolean(_0x5685e6.keepComments);
          return _0x12005c.toObject(["options", this.options, "oneof", this.oneof, "comment", _0x4add50 ? this.comment : undefined]);
        };
        _0x423f21.prototype.add = function (_0x42af6a) {
          if (!(_0x42af6a instanceof _0x45c4f0)) {
            throw TypeError("field must be a Field");
          }
          if (_0x42af6a.parent && _0x42af6a.parent !== this.parent) {
            _0x42af6a.parent.remove(_0x42af6a);
          }
          this.oneof.push(_0x42af6a.name);
          this.fieldsArray.push(_0x42af6a);
          _0x42af6a.partOf = this;
          _0x3d02c6(this);
          return this;
        };
        _0x423f21.prototype.remove = function (_0x105936) {
          if (!(_0x105936 instanceof _0x45c4f0)) {
            throw TypeError("field must be a Field");
          }
          var _0x3baa55 = this.fieldsArray.indexOf(_0x105936);
          if (_0x3baa55 < 0x0) {
            throw Error(_0x105936 + " is not a member of " + this);
          }
          this.fieldsArray.splice(_0x3baa55, 0x1);
          if ((_0x3baa55 = this.oneof.indexOf(_0x105936.name)) > -0x1) {
            this.oneof.splice(_0x3baa55, 0x1);
          }
          _0x105936.partOf = null;
          return this;
        };
        _0x423f21.prototype.onAdd = function (_0x47888e) {
          _0x6b2d53.prototype.onAdd.call(this, _0x47888e);
          for (var _0x23901d = 0x0; _0x23901d < this.oneof.length; ++_0x23901d) {
            var _0x4bc863 = _0x47888e.get(this.oneof[_0x23901d]);
            if (_0x4bc863 && !_0x4bc863.partOf) {
              _0x4bc863.partOf = this;
              this.fieldsArray.push(_0x4bc863);
            }
          }
          _0x3d02c6(this);
        };
        _0x423f21.prototype.onRemove = function (_0x311c65) {
          var _0x4d198c;
          for (var _0x39575e = 0x0; _0x39575e < this.fieldsArray.length; ++_0x39575e) {
            if ((_0x4d198c = this.fieldsArray[_0x39575e]).parent) {
              _0x4d198c.parent.remove(_0x4d198c);
            }
          }
          _0x6b2d53.prototype.onRemove.call(this, _0x311c65);
        };
        _0x423f21.d = function () {
          var _0x2f1e8f = new Array(arguments.length);
          for (var _0x528226 = 0x0; _0x528226 < arguments.length;) {
            _0x2f1e8f[_0x528226] = arguments[_0x528226++];
          }
          return function (_0x2b4981, _0x4e12b6) {
            _0x12005c.decorateType(_0x2b4981.constructor).add(new _0x423f21(_0x4e12b6, _0x2f1e8f));
            Object.defineProperty(_0x2b4981, _0x4e12b6, {
              'get': _0x12005c.oneOfGetter(_0x2f1e8f),
              'set': _0x12005c.oneOfSetter(_0x2f1e8f)
            });
          };
        };
        _0x461717.exports;
      }, function () {
        return {
          './object': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './field': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js", function (_0xc1f024, _0x3f43b0, _0x5dee31, _0x544de1, _0x3da549) {
        _0x5dee31.exports = _0x566f16;
        var _0x371728 = _0x3f43b0('./object');
        ((_0x566f16.prototype = Object.create(_0x371728.prototype)).constructor = _0x566f16).className = "Namespace";
        var _0x27b36a;
        var _0x2d6ae7;
        var _0x2b0ba4;
        var _0x4f05be = _0x3f43b0('./field');
        var _0x1d6303 = _0x3f43b0("./oneof");
        var _0x2d34fa = _0x3f43b0('./util');
        function _0x56b4c3(_0x19fe52, _0x43073a) {
          if (_0x19fe52 && _0x19fe52.length) {
            var _0x224235 = {};
            for (var _0x2f07f6 = 0x0; _0x2f07f6 < _0x19fe52.length; ++_0x2f07f6) {
              _0x224235[_0x19fe52[_0x2f07f6].name] = _0x19fe52[_0x2f07f6].toJSON(_0x43073a);
            }
            return _0x224235;
          }
        }
        function _0x566f16(_0x15dcb2, _0x55ca9a) {
          _0x371728.call(this, _0x15dcb2, _0x55ca9a);
          this.nested = undefined;
          this._nestedArray = null;
        }
        function _0x7ef36(_0x2cb4f1) {
          _0x2cb4f1._nestedArray = null;
          return _0x2cb4f1;
        }
        _0x566f16.fromJSON = function (_0x547ff1, _0x27fe1c) {
          return new _0x566f16(_0x547ff1, _0x27fe1c.options).addJSON(_0x27fe1c.nested);
        };
        _0x566f16.arrayToJSON = _0x56b4c3;
        _0x566f16.isReservedId = function (_0x25ae2a, _0xaaaf0b) {
          if (_0x25ae2a) {
            for (var _0x8963ee = 0x0; _0x8963ee < _0x25ae2a.length; ++_0x8963ee) {
              if ("string" != typeof _0x25ae2a[_0x8963ee] && _0x25ae2a[_0x8963ee][0x0] <= _0xaaaf0b && _0x25ae2a[_0x8963ee][0x1] > _0xaaaf0b) {
                return true;
              }
            }
          }
          return false;
        };
        _0x566f16.isReservedName = function (_0x1055e7, _0x2e2a72) {
          if (_0x1055e7) {
            for (var _0x45d8c8 = 0x0; _0x45d8c8 < _0x1055e7.length; ++_0x45d8c8) {
              if (_0x1055e7[_0x45d8c8] === _0x2e2a72) {
                return true;
              }
            }
          }
          return false;
        };
        Object.defineProperty(_0x566f16.prototype, "nestedArray", {
          'get': function () {
            return this._nestedArray || (this._nestedArray = _0x2d34fa.toArray(this.nested));
          }
        });
        _0x566f16.prototype.toJSON = function (_0x4391be) {
          return _0x2d34fa.toObject(['options', this.options, "nested", _0x56b4c3(this.nestedArray, _0x4391be)]);
        };
        _0x566f16.prototype.addJSON = function (_0x30b311) {
          if (_0x30b311) {
            var _0x15d008;
            var _0x4e5ccf = Object.keys(_0x30b311);
            for (var _0x3cde6d = 0x0; _0x3cde6d < _0x4e5ccf.length; ++_0x3cde6d) {
              _0x15d008 = _0x30b311[_0x4e5ccf[_0x3cde6d]];
              this.add((undefined !== _0x15d008.fields ? _0x27b36a.fromJSON : undefined !== _0x15d008.values ? _0x2b0ba4.fromJSON : undefined !== _0x15d008.methods ? _0x2d6ae7.fromJSON : undefined !== _0x15d008.id ? _0x4f05be.fromJSON : _0x566f16.fromJSON)(_0x4e5ccf[_0x3cde6d], _0x15d008));
            }
          }
          return this;
        };
        _0x566f16.prototype.get = function (_0x1c60b7) {
          return this.nested && this.nested[_0x1c60b7] || null;
        };
        _0x566f16.prototype.getEnum = function (_0xe85fb1) {
          if (this.nested && this.nested[_0xe85fb1] instanceof _0x2b0ba4) {
            return this.nested[_0xe85fb1].values;
          }
          throw Error("no such enum: " + _0xe85fb1);
        };
        _0x566f16.prototype.add = function (_0x3940f7) {
          if (!(_0x3940f7 instanceof _0x4f05be && undefined !== _0x3940f7.extend || _0x3940f7 instanceof _0x27b36a || _0x3940f7 instanceof _0x2b0ba4 || _0x3940f7 instanceof _0x2d6ae7 || _0x3940f7 instanceof _0x566f16 || _0x3940f7 instanceof _0x1d6303)) {
            throw TypeError("object must be a valid nested object");
          }
          if (this.nested) {
            var _0x3b1589 = this.get(_0x3940f7.name);
            if (_0x3b1589) {
              if (!(_0x3b1589 instanceof _0x566f16 && _0x3940f7 instanceof _0x566f16) || _0x3b1589 instanceof _0x27b36a || _0x3b1589 instanceof _0x2d6ae7) {
                throw Error("duplicate name '" + _0x3940f7.name + "' in " + this);
              }
              var _0x379299 = _0x3b1589.nestedArray;
              for (var _0x5cf239 = 0x0; _0x5cf239 < _0x379299.length; ++_0x5cf239) {
                _0x3940f7.add(_0x379299[_0x5cf239]);
              }
              this.remove(_0x3b1589);
              if (!this.nested) {
                this.nested = {};
              }
              _0x3940f7.setOptions(_0x3b1589.options, true);
            }
          } else {
            this.nested = {};
          }
          this.nested[_0x3940f7.name] = _0x3940f7;
          _0x3940f7.onAdd(this);
          return _0x7ef36(this);
        };
        _0x566f16.prototype.remove = function (_0x353e74) {
          if (!(_0x353e74 instanceof _0x371728)) {
            throw TypeError("object must be a ReflectionObject");
          }
          if (_0x353e74.parent !== this) {
            throw Error(_0x353e74 + " is not a member of " + this);
          }
          delete this.nested[_0x353e74.name];
          if (!Object.keys(this.nested).length) {
            this.nested = undefined;
          }
          _0x353e74.onRemove(this);
          return _0x7ef36(this);
        };
        _0x566f16.prototype.define = function (_0x4a25ea, _0x4e4fb8) {
          if (_0x2d34fa.isString(_0x4a25ea)) {
            _0x4a25ea = _0x4a25ea.split('.');
          } else {
            if (!Array.isArray(_0x4a25ea)) {
              throw TypeError("illegal path");
            }
          }
          if (_0x4a25ea && _0x4a25ea.length && '' === _0x4a25ea[0x0]) {
            throw Error("path must be relative");
          }
          for (var _0x5cebe1 = this; _0x4a25ea.length > 0x0;) {
            var _0x1eb2b2 = _0x4a25ea.shift();
            if (_0x5cebe1.nested && _0x5cebe1.nested[_0x1eb2b2]) {
              if (!((_0x5cebe1 = _0x5cebe1.nested[_0x1eb2b2]) instanceof _0x566f16)) {
                throw Error("path conflicts with non-namespace objects");
              }
            } else {
              _0x5cebe1.add(_0x5cebe1 = new _0x566f16(_0x1eb2b2));
            }
          }
          if (_0x4e4fb8) {
            _0x5cebe1.addJSON(_0x4e4fb8);
          }
          return _0x5cebe1;
        };
        _0x566f16.prototype.resolveAll = function () {
          var _0x4235f5 = this.nestedArray;
          for (var _0x1cecdb = 0x0; _0x1cecdb < _0x4235f5.length;) {
            if (_0x4235f5[_0x1cecdb] instanceof _0x566f16) {
              _0x4235f5[_0x1cecdb++].resolveAll();
            } else {
              _0x4235f5[_0x1cecdb++].resolve();
            }
          }
          return this.resolve();
        };
        _0x566f16.prototype.lookup = function (_0x3eeb5a, _0x350326, _0x5047ae) {
          if ('boolean' == typeof _0x350326) {
            _0x5047ae = _0x350326;
            _0x350326 = undefined;
          } else if (_0x350326 && !Array.isArray(_0x350326)) {
            _0x350326 = [_0x350326];
          }
          if (_0x2d34fa.isString(_0x3eeb5a) && _0x3eeb5a.length) {
            if ('.' === _0x3eeb5a) {
              return this.root;
            }
            _0x3eeb5a = _0x3eeb5a.split('.');
          } else {
            if (!_0x3eeb5a.length) {
              return this;
            }
          }
          if ('' === _0x3eeb5a[0x0]) {
            return this.root.lookup(_0x3eeb5a.slice(0x1), _0x350326);
          }
          var _0x40bae4 = this.get(_0x3eeb5a[0x0]);
          if (_0x40bae4) {
            if (0x1 === _0x3eeb5a.length) {
              if (!_0x350326 || _0x350326.indexOf(_0x40bae4.constructor) > -0x1) {
                return _0x40bae4;
              }
            } else {
              if (_0x40bae4 instanceof _0x566f16 && (_0x40bae4 = _0x40bae4.lookup(_0x3eeb5a.slice(0x1), _0x350326, true))) {
                return _0x40bae4;
              }
            }
          } else {
            for (var _0x460ae9 = 0x0; _0x460ae9 < this.nestedArray.length; ++_0x460ae9) {
              if (this._nestedArray[_0x460ae9] instanceof _0x566f16 && (_0x40bae4 = this._nestedArray[_0x460ae9].lookup(_0x3eeb5a, _0x350326, true))) {
                return _0x40bae4;
              }
            }
          }
          return null === this.parent || _0x5047ae ? null : this.parent.lookup(_0x3eeb5a, _0x350326);
        };
        _0x566f16.prototype.lookupType = function (_0x2337c9) {
          var _0x2f43e0 = this.lookup(_0x2337c9, [_0x27b36a]);
          if (!_0x2f43e0) {
            throw Error("no such type: " + _0x2337c9);
          }
          return _0x2f43e0;
        };
        _0x566f16.prototype.lookupEnum = function (_0x4f49ac) {
          var _0x55cd81 = this.lookup(_0x4f49ac, [_0x2b0ba4]);
          if (!_0x55cd81) {
            throw Error("no such Enum '" + _0x4f49ac + "' in " + this);
          }
          return _0x55cd81;
        };
        _0x566f16.prototype.lookupTypeOrEnum = function (_0x4a5b36) {
          var _0x3f7907 = this.lookup(_0x4a5b36, [_0x27b36a, _0x2b0ba4]);
          if (!_0x3f7907) {
            throw Error("no such Type or Enum '" + _0x4a5b36 + "' in " + this);
          }
          return _0x3f7907;
        };
        _0x566f16.prototype.lookupService = function (_0x36b88d) {
          var _0x255dc9 = this.lookup(_0x36b88d, [_0x2d6ae7]);
          if (!_0x255dc9) {
            throw Error("no such Service '" + _0x36b88d + "' in " + this);
          }
          return _0x255dc9;
        };
        _0x566f16._configure = function (_0x255d20, _0x114832, _0x430ee0) {
          _0x27b36a = _0x255d20;
          _0x2d6ae7 = _0x114832;
          _0x2b0ba4 = _0x430ee0;
        };
        _0x5dee31.exports;
      }, function () {
        return {
          './object': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './field': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './oneof': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js", function (_0x41172b, _0x45faa9, _0x4f5e5b, _0x308836, _0x345210) {
        _0x4f5e5b.exports = _0x49195f;
        var _0x1755c8 = _0x45faa9('./field');
        ((_0x49195f.prototype = Object.create(_0x1755c8.prototype)).constructor = _0x49195f).className = "MapField";
        var _0x2e0843 = _0x45faa9('./types');
        var _0x621aa9 = _0x45faa9("./util");
        function _0x49195f(_0x638767, _0x5dde08, _0x410adc, _0xf34a16, _0x45a065, _0xa644cc) {
          _0x1755c8.call(this, _0x638767, _0x5dde08, _0xf34a16, undefined, undefined, _0x45a065, _0xa644cc);
          if (!_0x621aa9.isString(_0x410adc)) {
            throw TypeError("keyType must be a string");
          }
          this.keyType = _0x410adc;
          this.resolvedKeyType = null;
          this.map = true;
        }
        _0x49195f.fromJSON = function (_0x27f110, _0x3abe20) {
          return new _0x49195f(_0x27f110, _0x3abe20.id, _0x3abe20.keyType, _0x3abe20.type, _0x3abe20.options, _0x3abe20.comment);
        };
        _0x49195f.prototype.toJSON = function (_0x5885f6) {
          var _0x4ec78b = !!_0x5885f6 && Boolean(_0x5885f6.keepComments);
          return _0x621aa9.toObject(["keyType", this.keyType, "type", this.type, 'id', this.id, "extend", this.extend, "options", this.options, 'comment', _0x4ec78b ? this.comment : undefined]);
        };
        _0x49195f.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === _0x2e0843.mapKey[this.keyType]) {
            throw Error("invalid key type: " + this.keyType);
          }
          return _0x1755c8.prototype.resolve.call(this);
        };
        _0x49195f.d = function (_0x5b8f5d, _0x4684be, _0x2ef91d) {
          if ("function" == typeof _0x2ef91d) {
            _0x2ef91d = _0x621aa9.decorateType(_0x2ef91d).name;
          } else if (_0x2ef91d && 'object' == typeof _0x2ef91d) {
            _0x2ef91d = _0x621aa9.decorateEnum(_0x2ef91d).name;
          }
          return function (_0xa7b2eb, _0x34b2a3) {
            _0x621aa9.decorateType(_0xa7b2eb.constructor).add(new _0x49195f(_0x34b2a3, _0x5b8f5d, _0x4684be, _0x2ef91d));
          };
        };
        _0x4f5e5b.exports;
      }, function () {
        return {
          './field': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './types': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/method.js", function (_0x21c96b, _0x2888cb, _0x2faa05, _0x17d815, _0x315e83) {
        _0x2faa05.exports = _0x20d7e4;
        var _0x15fe18 = _0x2888cb("./object");
        ((_0x20d7e4.prototype = Object.create(_0x15fe18.prototype)).constructor = _0x20d7e4).className = "Method";
        var _0x218a5b = _0x2888cb("./util");
        function _0x20d7e4(_0x2e69de, _0x14772a, _0x25d7e9, _0x87c94a, _0x2cb7e2, _0x59bed2, _0x1e47a3, _0x179a02, _0xe28003) {
          if (_0x218a5b.isObject(_0x2cb7e2)) {
            _0x1e47a3 = _0x2cb7e2;
            _0x2cb7e2 = _0x59bed2 = undefined;
          } else if (_0x218a5b.isObject(_0x59bed2)) {
            _0x1e47a3 = _0x59bed2;
            _0x59bed2 = undefined;
          }
          if (undefined !== _0x14772a && !_0x218a5b.isString(_0x14772a)) {
            throw TypeError("type must be a string");
          }
          if (!_0x218a5b.isString(_0x25d7e9)) {
            throw TypeError("requestType must be a string");
          }
          if (!_0x218a5b.isString(_0x87c94a)) {
            throw TypeError("responseType must be a string");
          }
          _0x15fe18.call(this, _0x2e69de, _0x1e47a3);
          this.type = _0x14772a || "rpc";
          this.requestType = _0x25d7e9;
          this.requestStream = !!_0x2cb7e2 || undefined;
          this.responseType = _0x87c94a;
          this.responseStream = !!_0x59bed2 || undefined;
          this.resolvedRequestType = null;
          this.resolvedResponseType = null;
          this.comment = _0x179a02;
          this.parsedOptions = _0xe28003;
        }
        _0x20d7e4.fromJSON = function (_0xd063db, _0x47d438) {
          return new _0x20d7e4(_0xd063db, _0x47d438.type, _0x47d438.requestType, _0x47d438.responseType, _0x47d438.requestStream, _0x47d438.responseStream, _0x47d438.options, _0x47d438.comment, _0x47d438.parsedOptions);
        };
        _0x20d7e4.prototype.toJSON = function (_0x5d6dcd) {
          var _0x50be00 = !!_0x5d6dcd && Boolean(_0x5d6dcd.keepComments);
          return _0x218a5b.toObject(["type", "rpc" !== this.type && this.type || undefined, "requestType", this.requestType, 'requestStream', this.requestStream, 'responseType', this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", _0x50be00 ? this.comment : undefined, "parsedOptions", this.parsedOptions]);
        };
        _0x20d7e4.prototype.resolve = function () {
          return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), _0x15fe18.prototype.resolve.call(this));
        };
        _0x2faa05.exports;
      }, function () {
        return {
          './object': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3a1ca5.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/service.js', function (_0x4c7559, _0x199456, _0x470004, _0x352ca8, _0x55fadd) {
        _0x470004.exports = _0x302d71;
        var _0x274794 = _0x199456("./namespace");
        ((_0x302d71.prototype = Object.create(_0x274794.prototype)).constructor = _0x302d71).className = "Service";
        var _0x39f1df = _0x199456('./method');
        var _0x4f8af9 = _0x199456('./util');
        var _0x324caa = _0x199456('./rpc');
        function _0x302d71(_0x1e2f49, _0x85680c) {
          _0x274794.call(this, _0x1e2f49, _0x85680c);
          this.methods = {};
          this._methodsArray = null;
        }
        function _0x43736b(_0xf260a4) {
          _0xf260a4._methodsArray = null;
          return _0xf260a4;
        }
        _0x302d71.fromJSON = function (_0xe39aed, _0x38a986) {
          var _0x4ef7c0 = new _0x302d71(_0xe39aed, _0x38a986.options);
          if (_0x38a986.methods) {
            var _0x9972e9 = Object.keys(_0x38a986.methods);
            for (var _0x4e6022 = 0x0; _0x4e6022 < _0x9972e9.length; ++_0x4e6022) {
              _0x4ef7c0.add(_0x39f1df.fromJSON(_0x9972e9[_0x4e6022], _0x38a986.methods[_0x9972e9[_0x4e6022]]));
            }
          }
          if (_0x38a986.nested) {
            _0x4ef7c0.addJSON(_0x38a986.nested);
          }
          _0x4ef7c0.comment = _0x38a986.comment;
          return _0x4ef7c0;
        };
        _0x302d71.prototype.toJSON = function (_0x393d10) {
          var _0xa3639c = _0x274794.prototype.toJSON.call(this, _0x393d10);
          var _0x3b7d48 = !!_0x393d10 && Boolean(_0x393d10.keepComments);
          return _0x4f8af9.toObject(["options", _0xa3639c && _0xa3639c.options || undefined, 'methods', _0x274794.arrayToJSON(this.methodsArray, _0x393d10) || {}, "nested", _0xa3639c && _0xa3639c.nested || undefined, 'comment', _0x3b7d48 ? this.comment : undefined]);
        };
        Object.defineProperty(_0x302d71.prototype, "methodsArray", {
          'get': function () {
            return this._methodsArray || (this._methodsArray = _0x4f8af9.toArray(this.methods));
          }
        });
        _0x302d71.prototype.get = function (_0x5d4732) {
          return this.methods[_0x5d4732] || _0x274794.prototype.get.call(this, _0x5d4732);
        };
        _0x302d71.prototype.resolveAll = function () {
          var _0x8238f4 = this.methodsArray;
          for (var _0x1d49a3 = 0x0; _0x1d49a3 < _0x8238f4.length; ++_0x1d49a3) {
            _0x8238f4[_0x1d49a3].resolve();
          }
          return _0x274794.prototype.resolve.call(this);
        };
        _0x302d71.prototype.add = function (_0x3938b3) {
          if (this.get(_0x3938b3.name)) {
            throw Error("duplicate name '" + _0x3938b3.name + "' in " + this);
          }
          return _0x3938b3 instanceof _0x39f1df ? (this.methods[_0x3938b3.name] = _0x3938b3, _0x3938b3.parent = this, _0x43736b(this)) : _0x274794.prototype.add.call(this, _0x3938b3);
        };
        _0x302d71.prototype.remove = function (_0x32ec99) {
          if (_0x32ec99 instanceof _0x39f1df) {
            if (this.methods[_0x32ec99.name] !== _0x32ec99) {
              throw Error(_0x32ec99 + " is not a member of " + this);
            }
            delete this.methods[_0x32ec99.name];
            _0x32ec99.parent = null;
            return _0x43736b(this);
          }
          return _0x274794.prototype.remove.call(this, _0x32ec99);
        };
        _0x302d71.prototype.create = function (_0x3de505, _0x5c6f45, _0x59381d) {
          var _0x2fcc28;
          var _0xab0ed0 = new _0x324caa.Service(_0x3de505, _0x5c6f45, _0x59381d);
          for (var _0x41c566 = 0x0; _0x41c566 < this.methodsArray.length; ++_0x41c566) {
            var _0x53a1a4 = _0x4f8af9.lcFirst((_0x2fcc28 = this._methodsArray[_0x41c566]).resolve().name).replace(/[^$\w_]/g, '');
            _0xab0ed0[_0x53a1a4] = _0x4f8af9.codegen(['r', 'c'], _0x4f8af9.isReserved(_0x53a1a4) ? _0x53a1a4 + '_' : _0x53a1a4)("return this.rpcCall(m,q,s,r,c)")({
              'm': _0x2fcc28,
              'q': _0x2fcc28.resolvedRequestType.ctor,
              's': _0x2fcc28.resolvedResponseType.ctor
            });
          }
          return _0xab0ed0;
        };
        _0x470004.exports;
      }, function () {
        return {
          './namespace': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './method': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './rpc': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js"
        };
      });
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/message.js", function (_0x2285a1, _0x4318ef, _0x291aca, _0x22df73, _0x144e94) {
        _0x291aca.exports = _0x1db72f;
        var _0x6343db = _0x4318ef('./util/minimal');
        function _0x1db72f(_0x2206d3) {
          if (_0x2206d3) {
            var _0x25b085 = Object.keys(_0x2206d3);
            for (var _0x518f88 = 0x0; _0x518f88 < _0x25b085.length; ++_0x518f88) {
              this[_0x25b085[_0x518f88]] = _0x2206d3[_0x25b085[_0x518f88]];
            }
          }
        }
        _0x1db72f.create = function (_0x4c6c1f) {
          return this.$type.create(_0x4c6c1f);
        };
        _0x1db72f.encode = function (_0x41c410, _0x28b6f2) {
          return this.$type.encode(_0x41c410, _0x28b6f2);
        };
        _0x1db72f.encodeDelimited = function (_0x37b870, _0x588a33) {
          return this.$type.encodeDelimited(_0x37b870, _0x588a33);
        };
        _0x1db72f.decode = function (_0x32aaad) {
          return this.$type.decode(_0x32aaad);
        };
        _0x1db72f.decodeDelimited = function (_0x17aee1) {
          return this.$type.decodeDelimited(_0x17aee1);
        };
        _0x1db72f.verify = function (_0x13204e) {
          return this.$type.verify(_0x13204e);
        };
        _0x1db72f.fromObject = function (_0x5611da) {
          return this.$type.fromObject(_0x5611da);
        };
        _0x1db72f.toObject = function (_0x30f46c, _0x2b3dcc) {
          return this.$type.toObject(_0x30f46c, _0x2b3dcc);
        };
        _0x1db72f.prototype.toJSON = function () {
          return this.$type.toObject(this, _0x6343db.toJSONOptions);
        };
        _0x291aca.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x3a1ca5.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js', function (_0x3bc438, _0x441bad, _0x4738ec, _0x565b7a, _0x36172c) {
        _0x4738ec.exports = function (_0x41426) {
          var _0x5bd66d = _0x273a95.codegen(['r', 'l'], _0x41426.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (_0x41426.fieldsArray.filter(function (_0x6905ba) {
            return _0x6905ba.map;
          }).length ? ",k,value" : ''))("while(r.pos<c){")("var t=r.uint32()");
          if (_0x41426.group) {
            _0x5bd66d("if((t&7)===4)")("break");
          }
          _0x5bd66d('switch(t>>>3){');
          for (var _0x52861c = 0x0; _0x52861c < _0x41426.fieldsArray.length; ++_0x52861c) {
            var _0x25f255 = _0x41426._fieldsArray[_0x52861c].resolve();
            var _0x56b4a0 = _0x25f255.resolvedType instanceof _0x4f7357 ? "int32" : _0x25f255.type;
            var _0x2dba14 = 'm' + _0x273a95.safeProp(_0x25f255.name);
            _0x5bd66d("case %i:", _0x25f255.id);
            if (_0x25f255.map) {
              _0x5bd66d("if(%s===util.emptyObject)", _0x2dba14)("%s={}", _0x2dba14)("var c2 = r.uint32()+r.pos");
              if (undefined !== _0xefee18.defaults[_0x25f255.keyType]) {
                _0x5bd66d('k=%j', _0xefee18.defaults[_0x25f255.keyType]);
              } else {
                _0x5bd66d('k=null');
              }
              if (undefined !== _0xefee18.defaults[_0x56b4a0]) {
                _0x5bd66d("value=%j", _0xefee18.defaults[_0x56b4a0]);
              } else {
                _0x5bd66d("value=null");
              }
              _0x5bd66d('while(r.pos<c2){')("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", _0x25f255.keyType)("case 2:");
              if (undefined === _0xefee18.basic[_0x56b4a0]) {
                _0x5bd66d("value=types[%i].decode(r,r.uint32())", _0x52861c);
              } else {
                _0x5bd66d('value=r.%s()', _0x56b4a0);
              }
              _0x5bd66d("break")("default:")("r.skipType(tag2&7)")('break')('}')('}');
              if (undefined !== _0xefee18.long[_0x25f255.keyType]) {
                _0x5bd66d("%s[typeof k===\"object\"?util.longToHash(k):k]=value", _0x2dba14);
              } else {
                _0x5bd66d("%s[k]=value", _0x2dba14);
              }
            } else if (_0x25f255.repeated) {
              _0x5bd66d("if(!(%s&&%s.length))", _0x2dba14, _0x2dba14)("%s=[]", _0x2dba14);
              if (undefined !== _0xefee18.packed[_0x56b4a0]) {
                _0x5bd66d("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")('%s.push(r.%s())', _0x2dba14, _0x56b4a0)("}else");
              }
              if (undefined === _0xefee18.basic[_0x56b4a0]) {
                _0x5bd66d(_0x25f255.resolvedType.group ? '%s.push(types[%i].decode(r))' : '%s.push(types[%i].decode(r,r.uint32()))', _0x2dba14, _0x52861c);
              } else {
                _0x5bd66d("%s.push(r.%s())", _0x2dba14, _0x56b4a0);
              }
            } else if (undefined === _0xefee18.basic[_0x56b4a0]) {
              _0x5bd66d(_0x25f255.resolvedType.group ? "%s=types[%i].decode(r)" : '%s=types[%i].decode(r,r.uint32())', _0x2dba14, _0x52861c);
            } else {
              _0x5bd66d("%s=r.%s()", _0x2dba14, _0x56b4a0);
            }
            _0x5bd66d("break");
          }
          _0x5bd66d("default:")('r.skipType(t&7)')('break')('}')('}');
          for (_0x52861c = 0x0; _0x52861c < _0x41426._fieldsArray.length; ++_0x52861c) {
            var _0x4da52d = _0x41426._fieldsArray[_0x52861c];
            if (_0x4da52d.required) {
              _0x5bd66d("if(!m.hasOwnProperty(%j))", _0x4da52d.name)("throw util.ProtocolError(%j,{instance:m})", "missing required '" + _0x4da52d.name + "'");
            }
          }
          return _0x5bd66d("return m");
        };
        var _0x4f7357 = _0x441bad("./enum");
        var _0xefee18 = _0x441bad("./types");
        var _0x273a95 = _0x441bad('./util');
        _0x4738ec.exports;
      }, function () {
        return {
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3a1ca5.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js', function (_0x26169e, _0x2a25a3, _0x49d904, _0x5d2fc4, _0x16a4e6) {
        _0x49d904.exports = function (_0x58d9ed) {
          var _0x5da8af = _0x34411d.codegen(['m'], _0x58d9ed.name + "$verify")("if(typeof m!==\"object\"||m===null)")("return%j", "object expected");
          var _0x18464a = _0x58d9ed.oneofsArray;
          var _0x4a79f1 = {};
          if (_0x18464a.length) {
            _0x5da8af("var p={}");
          }
          for (var _0x6a7031 = 0x0; _0x6a7031 < _0x58d9ed.fieldsArray.length; ++_0x6a7031) {
            var _0x1ee8bb = _0x58d9ed._fieldsArray[_0x6a7031].resolve();
            var _0x2b17a2 = 'm' + _0x34411d.safeProp(_0x1ee8bb.name);
            if (_0x1ee8bb.optional) {
              _0x5da8af("if(%s!=null&&m.hasOwnProperty(%j)){", _0x2b17a2, _0x1ee8bb.name);
            }
            if (_0x1ee8bb.map) {
              _0x5da8af('if(!util.isObject(%s))', _0x2b17a2)("return%j", _0x1ee8bb.name + ": " + 'object' + (_0x1ee8bb.repeated && true ? '[]' : _0x1ee8bb.map && false ? "{k:" + _0x1ee8bb.keyType + '}' : '') + " expected")("var k=Object.keys(%s)", _0x2b17a2)("for(var i=0;i<k.length;++i){");
              _0x1cc2fc(_0x5da8af, _0x1ee8bb, "k[i]");
              _0xb6fdf2(_0x5da8af, _0x1ee8bb, _0x6a7031, _0x2b17a2 + "[k[i]]")('}');
            } else {
              if (_0x1ee8bb.repeated) {
                _0x5da8af("if(!Array.isArray(%s))", _0x2b17a2)("return%j", _0x1ee8bb.name + ": " + 'array' + (_0x1ee8bb.repeated && false ? '[]' : _0x1ee8bb.map && true ? "{k:" + _0x1ee8bb.keyType + '}' : '') + " expected")("for(var i=0;i<%s.length;++i){", _0x2b17a2);
                _0xb6fdf2(_0x5da8af, _0x1ee8bb, _0x6a7031, _0x2b17a2 + "[i]")('}');
              } else {
                if (_0x1ee8bb.partOf) {
                  var _0xc30faa = _0x34411d.safeProp(_0x1ee8bb.partOf.name);
                  if (0x1 === _0x4a79f1[_0x1ee8bb.partOf.name]) {
                    _0x5da8af('if(p%s===1)', _0xc30faa)("return%j", _0x1ee8bb.partOf.name + ": multiple values");
                  }
                  _0x4a79f1[_0x1ee8bb.partOf.name] = 0x1;
                  _0x5da8af("p%s=1", _0xc30faa);
                }
                _0xb6fdf2(_0x5da8af, _0x1ee8bb, _0x6a7031, _0x2b17a2);
              }
            }
            if (_0x1ee8bb.optional) {
              _0x5da8af('}');
            }
          }
          return _0x5da8af("return null");
        };
        var _0x210a00 = _0x2a25a3("./enum");
        var _0x34411d = _0x2a25a3("./util");
        function _0xb6fdf2(_0x53a4a1, _0x5b1e94, _0xb81c92, _0x4a7a6c) {
          if (_0x5b1e94.resolvedType) {
            if (_0x5b1e94.resolvedType instanceof _0x210a00) {
              _0x53a4a1('switch(%s){', _0x4a7a6c)('default:')("return%j", _0x5b1e94.name + ": " + "enum value" + (_0x5b1e94.repeated && true ? '[]' : _0x5b1e94.map && true ? "{k:" + _0x5b1e94.keyType + '}' : '') + " expected");
              var _0x4e839d = Object.keys(_0x5b1e94.resolvedType.values);
              for (var _0x1ac268 = 0x0; _0x1ac268 < _0x4e839d.length; ++_0x1ac268) {
                _0x53a4a1("case %i:", _0x5b1e94.resolvedType.values[_0x4e839d[_0x1ac268]]);
              }
              _0x53a4a1("break")('}');
            } else {
              _0x53a4a1('{')("var e=types[%i].verify(%s);", _0xb81c92, _0x4a7a6c)("if(e)")('return%j+e', _0x5b1e94.name + '.')('}');
            }
          } else {
            switch (_0x5b1e94.type) {
              case "int32":
              case "uint32":
              case "sint32":
              case 'fixed32':
              case 'sfixed32':
                _0x53a4a1("if(!util.isInteger(%s))", _0x4a7a6c)("return%j", _0x5b1e94.name + ": " + _0x29c9(0x8bb) + (_0x5b1e94.repeated && 'array' !== _0x29c9(0x8bb) ? '[]' : _0x5b1e94.map && true ? "{k:" + _0x5b1e94.keyType + '}' : '') + " expected");
                break;
              case 'int64':
              case "uint64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                _0x53a4a1("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", _0x4a7a6c, _0x4a7a6c, _0x4a7a6c, _0x4a7a6c)("return%j", _0x5b1e94.name + ": " + _0x29c9(0x5e0) + (_0x5b1e94.repeated && 'array' !== _0x29c9(0x5e0) ? '[]' : _0x5b1e94.map && true ? "{k:" + _0x5b1e94.keyType + '}' : '') + " expected");
                break;
              case 'float':
              case "double":
                _0x53a4a1("if(typeof %s!==\"number\")", _0x4a7a6c)("return%j", _0x5b1e94.name + ": " + 'number' + (_0x5b1e94.repeated && true ? '[]' : _0x5b1e94.map && true ? "{k:" + _0x5b1e94.keyType + '}' : '') + " expected");
                break;
              case "bool":
                _0x53a4a1("if(typeof %s!==\"boolean\")", _0x4a7a6c)("return%j", _0x5b1e94.name + ": " + _0x29c9(0xe45) + (_0x5b1e94.repeated && 'array' !== _0x29c9(0xe45) ? '[]' : _0x5b1e94.map && true ? "{k:" + _0x5b1e94.keyType + '}' : '') + " expected");
                break;
              case 'string':
                _0x53a4a1("if(!util.isString(%s))", _0x4a7a6c)('return%j', _0x5b1e94.name + ": " + _0x29c9(0x37f) + (_0x5b1e94.repeated && 'array' !== _0x29c9(0x37f) ? '[]' : _0x5b1e94.map && true ? "{k:" + _0x5b1e94.keyType + '}' : '') + " expected");
                break;
              case 'bytes':
                _0x53a4a1("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", _0x4a7a6c, _0x4a7a6c, _0x4a7a6c)("return%j", _0x5b1e94.name + ": " + _0x29c9(0x4d0) + (_0x5b1e94.repeated && 'array' !== _0x29c9(0x4d0) ? '[]' : _0x5b1e94.map && true ? "{k:" + _0x5b1e94.keyType + '}' : '') + " expected");
            }
          }
          return _0x53a4a1;
        }
        function _0x1cc2fc(_0x4362ee, _0x2987c7, _0x7f6549) {
          switch (_0x2987c7.keyType) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
              _0x4362ee("if(!util.key32Re.test(%s))", _0x7f6549)("return%j", _0x2987c7.name + ": " + _0x29c9(0xf9a) + (_0x2987c7.repeated && 'array' !== _0x29c9(0xf9a) ? '[]' : _0x2987c7.map && true ? "{k:" + _0x2987c7.keyType + '}' : '') + " expected");
              break;
            case "int64":
            case "uint64":
            case 'sint64':
            case "fixed64":
            case "sfixed64":
              _0x4362ee('if(!util.key64Re.test(%s))', _0x7f6549)('return%j', _0x2987c7.name + ": " + _0x29c9(0xac4) + (_0x2987c7.repeated && 'array' !== _0x29c9(0xac4) ? '[]' : _0x2987c7.map && true ? "{k:" + _0x2987c7.keyType + '}' : '') + " expected");
              break;
            case 'bool':
              _0x4362ee("if(!util.key2Re.test(%s))", _0x7f6549)('return%j', _0x2987c7.name + ": " + "boolean key" + (_0x2987c7.repeated && true ? '[]' : _0x2987c7.map && true ? "{k:" + _0x2987c7.keyType + '}' : '') + " expected");
          }
          return _0x4362ee;
        }
        _0x49d904.exports;
      }, function () {
        return {
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/converter.js", function (_0x309768, _0x55ef84, _0x2d7e60, _0x55bd38, _0x428244) {
        var _0xb78b23 = _0x55ef84('./enum');
        var _0x4f0527 = _0x55ef84("./util");
        function _0x4a9fb7(_0x783a16, _0x129933, _0x43cd02, _0x253225) {
          if (_0x129933.resolvedType) {
            if (_0x129933.resolvedType instanceof _0xb78b23) {
              _0x783a16("switch(d%s){", _0x253225);
              var _0x509a96 = _0x129933.resolvedType.values;
              var _0x41d5db = Object.keys(_0x509a96);
              for (var _0x151ff6 = 0x0; _0x151ff6 < _0x41d5db.length; ++_0x151ff6) {
                if (_0x129933.repeated && _0x509a96[_0x41d5db[_0x151ff6]] === _0x129933.typeDefault) {
                  _0x783a16("default:");
                }
                _0x783a16("case%j:", _0x41d5db[_0x151ff6])("case %i:", _0x509a96[_0x41d5db[_0x151ff6]])("m%s=%j", _0x253225, _0x509a96[_0x41d5db[_0x151ff6]])("break");
              }
              _0x783a16('}');
            } else {
              _0x783a16("if(typeof d%s!==\"object\")", _0x253225)("throw TypeError(%j)", _0x129933.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", _0x253225, _0x43cd02, _0x253225);
            }
          } else {
            var _0x11a303 = false;
            switch (_0x129933.type) {
              case "double":
              case "float":
                _0x783a16('m%s=Number(d%s)', _0x253225, _0x253225);
                break;
              case 'uint32':
              case "fixed32":
                _0x783a16('m%s=d%s>>>0', _0x253225, _0x253225);
                break;
              case 'int32':
              case "sint32":
              case 'sfixed32':
                _0x783a16("m%s=d%s|0", _0x253225, _0x253225);
                break;
              case "uint64":
                _0x11a303 = true;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                _0x783a16("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", _0x253225, _0x253225, _0x11a303)("else if(typeof d%s===\"string\")", _0x253225)("m%s=parseInt(d%s,10)", _0x253225, _0x253225)("else if(typeof d%s===\"number\")", _0x253225)("m%s=d%s", _0x253225, _0x253225)("else if(typeof d%s===\"object\")", _0x253225)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", _0x253225, _0x253225, _0x253225, _0x11a303 ? "true" : '');
                break;
              case "bytes":
                _0x783a16("if(typeof d%s===\"string\")", _0x253225)('util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)', _0x253225, _0x253225, _0x253225)("else if(d%s.length)", _0x253225)("m%s=d%s", _0x253225, _0x253225);
                break;
              case "string":
                _0x783a16("m%s=String(d%s)", _0x253225, _0x253225);
                break;
              case "bool":
                _0x783a16("m%s=Boolean(d%s)", _0x253225, _0x253225);
            }
          }
          return _0x783a16;
        }
        function _0x299365(_0xd425b, _0x56bb7e, _0x23b0bd, _0x2f0260) {
          if (_0x56bb7e.resolvedType) {
            if (_0x56bb7e.resolvedType instanceof _0xb78b23) {
              _0xd425b("d%s=o.enums===String?types[%i].values[m%s]:m%s", _0x2f0260, _0x23b0bd, _0x2f0260, _0x2f0260);
            } else {
              _0xd425b('d%s=types[%i].toObject(m%s,o)', _0x2f0260, _0x23b0bd, _0x2f0260);
            }
          } else {
            var _0x5b34f6 = false;
            switch (_0x56bb7e.type) {
              case "double":
              case "float":
                _0xd425b("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", _0x2f0260, _0x2f0260, _0x2f0260, _0x2f0260);
                break;
              case "uint64":
                _0x5b34f6 = true;
              case "int64":
              case "sint64":
              case 'fixed64':
              case "sfixed64":
                _0xd425b("if(typeof m%s===\"number\")", _0x2f0260)("d%s=o.longs===String?String(m%s):m%s", _0x2f0260, _0x2f0260, _0x2f0260)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", _0x2f0260, _0x2f0260, _0x2f0260, _0x2f0260, _0x5b34f6 ? "true" : '', _0x2f0260);
                break;
              case "bytes":
                _0xd425b("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", _0x2f0260, _0x2f0260, _0x2f0260, _0x2f0260, _0x2f0260);
                break;
              default:
                _0xd425b("d%s=m%s", _0x2f0260, _0x2f0260);
            }
          }
          return _0xd425b;
        }
        _0x309768.fromObject = function (_0x31846c) {
          var _0x2cbb00 = _0x31846c.fieldsArray;
          var _0x259820 = _0x4f0527.codegen(['d'], _0x31846c.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
          if (!_0x2cbb00.length) {
            return _0x259820("return new this.ctor");
          }
          _0x259820("var m=new this.ctor");
          for (var _0x4993b0 = 0x0; _0x4993b0 < _0x2cbb00.length; ++_0x4993b0) {
            var _0x5efcce = _0x2cbb00[_0x4993b0].resolve();
            var _0x234e0b = _0x4f0527.safeProp(_0x5efcce.name);
            if (_0x5efcce.map) {
              _0x259820("if(d%s){", _0x234e0b)("if(typeof d%s!==\"object\")", _0x234e0b)("throw TypeError(%j)", _0x5efcce.fullName + ": object expected")("m%s={}", _0x234e0b)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", _0x234e0b);
              _0x4a9fb7(_0x259820, _0x5efcce, _0x4993b0, _0x234e0b + '[ks[i]]')('}')('}');
            } else if (_0x5efcce.repeated) {
              _0x259820("if(d%s){", _0x234e0b)("if(!Array.isArray(d%s))", _0x234e0b)("throw TypeError(%j)", _0x5efcce.fullName + ": array expected")("m%s=[]", _0x234e0b)("for(var i=0;i<d%s.length;++i){", _0x234e0b);
              _0x4a9fb7(_0x259820, _0x5efcce, _0x4993b0, _0x234e0b + '[i]')('}')('}');
            } else {
              if (!(_0x5efcce.resolvedType instanceof _0xb78b23)) {
                _0x259820("if(d%s!=null){", _0x234e0b);
              }
              _0x4a9fb7(_0x259820, _0x5efcce, _0x4993b0, _0x234e0b);
              if (!(_0x5efcce.resolvedType instanceof _0xb78b23)) {
                _0x259820('}');
              }
            }
          }
          return _0x259820("return m");
        };
        _0x309768.toObject = function (_0x705c70) {
          var _0x4275d3 = _0x705c70.fieldsArray.slice().sort(_0x4f0527.compareFieldsById);
          if (!_0x4275d3.length) {
            return _0x4f0527.codegen()("return {}");
          }
          var _0x2e9724 = _0x4f0527.codegen(['m', 'o'], _0x705c70.name + "$toObject")("if(!o)")("o={}")("var d={}");
          var _0x5da049 = [];
          var _0x4ba743 = [];
          var _0x104690 = [];
          for (var _0x4423f1 = 0x0; _0x4423f1 < _0x4275d3.length; ++_0x4423f1) {
            if (!_0x4275d3[_0x4423f1].partOf) {
              (_0x4275d3[_0x4423f1].resolve().repeated ? _0x5da049 : _0x4275d3[_0x4423f1].map ? _0x4ba743 : _0x104690).push(_0x4275d3[_0x4423f1]);
            }
          }
          if (_0x5da049.length) {
            _0x2e9724("if(o.arrays||o.defaults){");
            for (_0x4423f1 = 0x0; _0x4423f1 < _0x5da049.length; ++_0x4423f1) {
              _0x2e9724("d%s=[]", _0x4f0527.safeProp(_0x5da049[_0x4423f1].name));
            }
            _0x2e9724('}');
          }
          if (_0x4ba743.length) {
            _0x2e9724("if(o.objects||o.defaults){");
            for (_0x4423f1 = 0x0; _0x4423f1 < _0x4ba743.length; ++_0x4423f1) {
              _0x2e9724("d%s={}", _0x4f0527.safeProp(_0x4ba743[_0x4423f1].name));
            }
            _0x2e9724('}');
          }
          if (_0x104690.length) {
            _0x2e9724("if(o.defaults){");
            for (_0x4423f1 = 0x0; _0x4423f1 < _0x104690.length; ++_0x4423f1) {
              var _0x26fcb8 = _0x104690[_0x4423f1];
              var _0x59d69b = _0x4f0527.safeProp(_0x26fcb8.name);
              if (_0x26fcb8.resolvedType instanceof _0xb78b23) {
                _0x2e9724('d%s=o.enums===String?%j:%j', _0x59d69b, _0x26fcb8.resolvedType.valuesById[_0x26fcb8.typeDefault], _0x26fcb8.typeDefault);
              } else {
                if (_0x26fcb8.long) {
                  _0x2e9724("if(util.Long){")("var n=new util.Long(%i,%i,%j)", _0x26fcb8.typeDefault.low, _0x26fcb8.typeDefault.high, _0x26fcb8.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", _0x59d69b)("}else")('d%s=o.longs===String?%j:%i', _0x59d69b, _0x26fcb8.typeDefault.toString(), _0x26fcb8.typeDefault.toNumber());
                } else {
                  if (_0x26fcb8.bytes) {
                    var _0xf28420 = '[' + Array.prototype.slice.call(_0x26fcb8.typeDefault).join(',') + ']';
                    _0x2e9724("if(o.bytes===String)d%s=%j", _0x59d69b, String.fromCharCode.apply(String, _0x26fcb8.typeDefault))("else{")('d%s=%s', _0x59d69b, _0xf28420)('if(o.bytes!==Array)d%s=util.newBuffer(d%s)', _0x59d69b, _0x59d69b)('}');
                  } else {
                    _0x2e9724("d%s=%j", _0x59d69b, _0x26fcb8.typeDefault);
                  }
                }
              }
            }
            _0x2e9724('}');
          }
          var _0x303f4b = false;
          for (_0x4423f1 = 0x0; _0x4423f1 < _0x4275d3.length; ++_0x4423f1) {
            _0x26fcb8 = _0x4275d3[_0x4423f1];
            var _0x177801 = _0x705c70._fieldsArray.indexOf(_0x26fcb8);
            _0x59d69b = _0x4f0527.safeProp(_0x26fcb8.name);
            if (_0x26fcb8.map) {
              if (!_0x303f4b) {
                _0x303f4b = true;
                _0x2e9724("var ks2");
              }
              _0x2e9724("if(m%s&&(ks2=Object.keys(m%s)).length){", _0x59d69b, _0x59d69b)('d%s={}', _0x59d69b)("for(var j=0;j<ks2.length;++j){");
              _0x299365(_0x2e9724, _0x26fcb8, _0x177801, _0x59d69b + "[ks2[j]]")('}');
            } else if (_0x26fcb8.repeated) {
              _0x2e9724("if(m%s&&m%s.length){", _0x59d69b, _0x59d69b)("d%s=[]", _0x59d69b)("for(var j=0;j<m%s.length;++j){", _0x59d69b);
              _0x299365(_0x2e9724, _0x26fcb8, _0x177801, _0x59d69b + '[j]')('}');
            } else {
              _0x2e9724("if(m%s!=null&&m.hasOwnProperty(%j)){", _0x59d69b, _0x26fcb8.name);
              _0x299365(_0x2e9724, _0x26fcb8, _0x177801, _0x59d69b);
              if (_0x26fcb8.partOf) {
                _0x2e9724("if(o.oneofs)")("d%s=%j", _0x4f0527.safeProp(_0x26fcb8.partOf.name), _0x26fcb8.name);
              }
            }
            _0x2e9724('}');
          }
          return _0x2e9724("return d");
        };
        _0x2d7e60.exports;
      }, function () {
        return {
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js", function (_0x28ff62, _0x2af47a, _0x34fe6f, _0x33cb27, _0x136cd0) {
        var _0x1981d4 = _0x2af47a('./message');
        _0x28ff62[".google.protobuf.Any"] = {
          'fromObject': function (_0x86cd6d) {
            if (_0x86cd6d && _0x86cd6d["@type"]) {
              var _0xd507a8 = _0x86cd6d["@type"].substring(_0x86cd6d["@type"].lastIndexOf('/') + 0x1);
              var _0x19a696 = this.lookup(_0xd507a8);
              if (_0x19a696) {
                var _0xda8d88 = '.' === _0x86cd6d["@type"].charAt(0x0) ? _0x86cd6d["@type"].substr(0x1) : _0x86cd6d["@type"];
                if (-0x1 === _0xda8d88.indexOf('/')) {
                  _0xda8d88 = '/' + _0xda8d88;
                }
                return this.create({
                  'type_url': _0xda8d88,
                  'value': _0x19a696.encode(_0x19a696.fromObject(_0x86cd6d)).finish()
                });
              }
            }
            return this.fromObject(_0x86cd6d);
          },
          'toObject': function (_0x1de7ef, _0x1765b4) {
            var _0x29afed = '';
            var _0x3c55e1 = '';
            if (_0x1765b4 && _0x1765b4.json && _0x1de7ef.type_url && _0x1de7ef.value) {
              _0x3c55e1 = _0x1de7ef.type_url.substring(_0x1de7ef.type_url.lastIndexOf('/') + 0x1);
              _0x29afed = _0x1de7ef.type_url.substring(0x0, _0x1de7ef.type_url.lastIndexOf('/') + 0x1);
              var _0x5cb72b = this.lookup(_0x3c55e1);
              if (_0x5cb72b) {
                _0x1de7ef = _0x5cb72b.decode(_0x1de7ef.value);
              }
            }
            if (!(_0x1de7ef instanceof this.ctor) && _0x1de7ef instanceof _0x1981d4) {
              var _0x49eadd = _0x1de7ef.$type.toObject(_0x1de7ef, _0x1765b4);
              if ('' === _0x29afed) {
                _0x29afed = "type.googleapis.com/";
              }
              _0x3c55e1 = _0x29afed + ('.' === _0x1de7ef.$type.fullName[0x0] ? _0x1de7ef.$type.fullName.substr(0x1) : _0x1de7ef.$type.fullName);
              _0x49eadd["@type"] = _0x3c55e1;
              return _0x49eadd;
            }
            return this.toObject(_0x1de7ef, _0x1765b4);
          }
        };
        _0x34fe6f.exports;
      }, function () {
        return {
          './message': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/message.js"
        };
      });
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/type.js", function (_0x5e7217, _0x444c4a, _0x43e66a, _0x56d764, _0x2ed9aa) {
        _0x43e66a.exports = _0x3aea18;
        var _0x55ed80 = _0x444c4a("./namespace");
        ((_0x3aea18.prototype = Object.create(_0x55ed80.prototype)).constructor = _0x3aea18).className = 'Type';
        var _0xe3b553 = _0x444c4a("./enum");
        var _0x704fdf = _0x444c4a("./oneof");
        var _0x2c5b31 = _0x444c4a('./field');
        var _0x1d275e = _0x444c4a("./mapfield");
        var _0x5924d5 = _0x444c4a("./service");
        var _0x234f4e = _0x444c4a("./message");
        var _0x571a28 = _0x444c4a('./reader');
        var _0x4701cc = _0x444c4a("./writer");
        var _0x32968e = _0x444c4a("./util");
        var _0x4c0bb0 = _0x444c4a("./encoder");
        var _0x3cbb8a = _0x444c4a("./decoder");
        var _0x21e111 = _0x444c4a("./verifier");
        var _0x2f9e58 = _0x444c4a("./converter");
        var _0x467881 = _0x444c4a("./wrappers");
        function _0x3aea18(_0x4abf70, _0x330713) {
          _0x55ed80.call(this, _0x4abf70, _0x330713);
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
        function _0x391716(_0x197a31) {
          _0x197a31._fieldsById = _0x197a31._fieldsArray = _0x197a31._oneofsArray = null;
          delete _0x197a31.encode;
          delete _0x197a31.decode;
          delete _0x197a31.verify;
          return _0x197a31;
        }
        Object.defineProperties(_0x3aea18.prototype, {
          'fieldsById': {
            'get': function () {
              if (this._fieldsById) {
                return this._fieldsById;
              }
              this._fieldsById = {};
              var _0x3a6640 = Object.keys(this.fields);
              for (var _0x5070c3 = 0x0; _0x5070c3 < _0x3a6640.length; ++_0x5070c3) {
                var _0x5a1f7e = this.fields[_0x3a6640[_0x5070c3]];
                var _0x15feac = _0x5a1f7e.id;
                if (this._fieldsById[_0x15feac]) {
                  throw Error("duplicate id " + _0x15feac + " in " + this);
                }
                this._fieldsById[_0x15feac] = _0x5a1f7e;
              }
              return this._fieldsById;
            }
          },
          'fieldsArray': {
            'get': function () {
              return this._fieldsArray || (this._fieldsArray = _0x32968e.toArray(this.fields));
            }
          },
          'oneofsArray': {
            'get': function () {
              return this._oneofsArray || (this._oneofsArray = _0x32968e.toArray(this.oneofs));
            }
          },
          'ctor': {
            'get': function () {
              return this._ctor || (this.ctor = _0x3aea18.generateConstructor(this)());
            },
            'set': function (_0x135797) {
              var _0x12dde6 = _0x135797.prototype;
              if (!(_0x12dde6 instanceof _0x234f4e)) {
                (_0x135797.prototype = new _0x234f4e()).constructor = _0x135797;
                _0x32968e.merge(_0x135797.prototype, _0x12dde6);
              }
              _0x135797.$type = _0x135797.prototype.$type = this;
              _0x32968e.merge(_0x135797, _0x234f4e, true);
              this._ctor = _0x135797;
              for (var _0x42b7ad = 0x0; _0x42b7ad < this.fieldsArray.length; ++_0x42b7ad) {
                this._fieldsArray[_0x42b7ad].resolve();
              }
              var _0x4f8cc0 = {};
              for (_0x42b7ad = 0x0; _0x42b7ad < this.oneofsArray.length; ++_0x42b7ad) {
                _0x4f8cc0[this._oneofsArray[_0x42b7ad].resolve().name] = {
                  'get': _0x32968e.oneOfGetter(this._oneofsArray[_0x42b7ad].oneof),
                  'set': _0x32968e.oneOfSetter(this._oneofsArray[_0x42b7ad].oneof)
                };
              }
              if (_0x42b7ad) {
                Object.defineProperties(_0x135797.prototype, _0x4f8cc0);
              }
            }
          }
        });
        _0x3aea18.generateConstructor = function (_0x3637a6) {
          var _0x14be9d;
          var _0x2a9066 = _0x32968e.codegen(['p'], _0x3637a6.name);
          for (var _0x498f96 = 0x0; _0x498f96 < _0x3637a6.fieldsArray.length; ++_0x498f96) {
            if ((_0x14be9d = _0x3637a6._fieldsArray[_0x498f96]).map) {
              _0x2a9066("this%s={}", _0x32968e.safeProp(_0x14be9d.name));
            } else if (_0x14be9d.repeated) {
              _0x2a9066('this%s=[]', _0x32968e.safeProp(_0x14be9d.name));
            }
          }
          return _0x2a9066("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
        };
        _0x3aea18.fromJSON = function (_0x1e908e, _0x5098fc) {
          var _0x483bf3 = new _0x3aea18(_0x1e908e, _0x5098fc.options);
          _0x483bf3.extensions = _0x5098fc.extensions;
          _0x483bf3.reserved = _0x5098fc.reserved;
          var _0x414619 = Object.keys(_0x5098fc.fields);
          for (var _0x5ce7e4 = 0x0; _0x5ce7e4 < _0x414619.length; ++_0x5ce7e4) {
            _0x483bf3.add((undefined !== _0x5098fc.fields[_0x414619[_0x5ce7e4]].keyType ? _0x1d275e.fromJSON : _0x2c5b31.fromJSON)(_0x414619[_0x5ce7e4], _0x5098fc.fields[_0x414619[_0x5ce7e4]]));
          }
          if (_0x5098fc.oneofs) {
            _0x414619 = Object.keys(_0x5098fc.oneofs);
            for (_0x5ce7e4 = 0x0; _0x5ce7e4 < _0x414619.length; ++_0x5ce7e4) {
              _0x483bf3.add(_0x704fdf.fromJSON(_0x414619[_0x5ce7e4], _0x5098fc.oneofs[_0x414619[_0x5ce7e4]]));
            }
          }
          if (_0x5098fc.nested) {
            _0x414619 = Object.keys(_0x5098fc.nested);
            for (_0x5ce7e4 = 0x0; _0x5ce7e4 < _0x414619.length; ++_0x5ce7e4) {
              var _0x14207e = _0x5098fc.nested[_0x414619[_0x5ce7e4]];
              _0x483bf3.add((undefined !== _0x14207e.id ? _0x2c5b31.fromJSON : undefined !== _0x14207e.fields ? _0x3aea18.fromJSON : undefined !== _0x14207e.values ? _0xe3b553.fromJSON : undefined !== _0x14207e.methods ? _0x5924d5.fromJSON : _0x55ed80.fromJSON)(_0x414619[_0x5ce7e4], _0x14207e));
            }
          }
          if (_0x5098fc.extensions && _0x5098fc.extensions.length) {
            _0x483bf3.extensions = _0x5098fc.extensions;
          }
          if (_0x5098fc.reserved && _0x5098fc.reserved.length) {
            _0x483bf3.reserved = _0x5098fc.reserved;
          }
          if (_0x5098fc.group) {
            _0x483bf3.group = true;
          }
          if (_0x5098fc.comment) {
            _0x483bf3.comment = _0x5098fc.comment;
          }
          return _0x483bf3;
        };
        _0x3aea18.prototype.toJSON = function (_0x2f130f) {
          var _0x12ec16 = _0x55ed80.prototype.toJSON.call(this, _0x2f130f);
          var _0x13b089 = !!_0x2f130f && Boolean(_0x2f130f.keepComments);
          return _0x32968e.toObject(["options", _0x12ec16 && _0x12ec16.options || undefined, 'oneofs', _0x55ed80.arrayToJSON(this.oneofsArray, _0x2f130f), "fields", _0x55ed80.arrayToJSON(this.fieldsArray.filter(function (_0x564871) {
            return !_0x564871.declaringField;
          }), _0x2f130f) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, "nested", _0x12ec16 && _0x12ec16.nested || undefined, "comment", _0x13b089 ? this.comment : undefined]);
        };
        _0x3aea18.prototype.resolveAll = function () {
          var _0x7d4130 = this.fieldsArray;
          for (var _0x59cb3f = 0x0; _0x59cb3f < _0x7d4130.length;) {
            _0x7d4130[_0x59cb3f++].resolve();
          }
          var _0x5305ad = this.oneofsArray;
          for (_0x59cb3f = 0x0; _0x59cb3f < _0x5305ad.length;) {
            _0x5305ad[_0x59cb3f++].resolve();
          }
          return _0x55ed80.prototype.resolveAll.call(this);
        };
        _0x3aea18.prototype.get = function (_0x204fc6) {
          return this.fields[_0x204fc6] || this.oneofs && this.oneofs[_0x204fc6] || this.nested && this.nested[_0x204fc6] || null;
        };
        _0x3aea18.prototype.add = function (_0x5a5e89) {
          if (this.get(_0x5a5e89.name)) {
            throw Error("duplicate name '" + _0x5a5e89.name + "' in " + this);
          }
          if (_0x5a5e89 instanceof _0x2c5b31 && undefined === _0x5a5e89.extend) {
            if (this._fieldsById ? this._fieldsById[_0x5a5e89.id] : this.fieldsById[_0x5a5e89.id]) {
              throw Error("duplicate id " + _0x5a5e89.id + " in " + this);
            }
            if (this.isReservedId(_0x5a5e89.id)) {
              throw Error("id " + _0x5a5e89.id + " is reserved in " + this);
            }
            if (this.isReservedName(_0x5a5e89.name)) {
              throw Error("name '" + _0x5a5e89.name + "' is reserved in " + this);
            }
            if (_0x5a5e89.parent) {
              _0x5a5e89.parent.remove(_0x5a5e89);
            }
            this.fields[_0x5a5e89.name] = _0x5a5e89;
            _0x5a5e89.message = this;
            _0x5a5e89.onAdd(this);
            return _0x391716(this);
          }
          return _0x5a5e89 instanceof _0x704fdf ? (this.oneofs || (this.oneofs = {}), this.oneofs[_0x5a5e89.name] = _0x5a5e89, _0x5a5e89.onAdd(this), _0x391716(this)) : _0x55ed80.prototype.add.call(this, _0x5a5e89);
        };
        _0x3aea18.prototype.remove = function (_0x56805e) {
          if (_0x56805e instanceof _0x2c5b31 && undefined === _0x56805e.extend) {
            if (!this.fields || this.fields[_0x56805e.name] !== _0x56805e) {
              throw Error(_0x56805e + " is not a member of " + this);
            }
            delete this.fields[_0x56805e.name];
            _0x56805e.parent = null;
            _0x56805e.onRemove(this);
            return _0x391716(this);
          }
          if (_0x56805e instanceof _0x704fdf) {
            if (!this.oneofs || this.oneofs[_0x56805e.name] !== _0x56805e) {
              throw Error(_0x56805e + " is not a member of " + this);
            }
            delete this.oneofs[_0x56805e.name];
            _0x56805e.parent = null;
            _0x56805e.onRemove(this);
            return _0x391716(this);
          }
          return _0x55ed80.prototype.remove.call(this, _0x56805e);
        };
        _0x3aea18.prototype.isReservedId = function (_0x2148e3) {
          return _0x55ed80.isReservedId(this.reserved, _0x2148e3);
        };
        _0x3aea18.prototype.isReservedName = function (_0x3cc311) {
          return _0x55ed80.isReservedName(this.reserved, _0x3cc311);
        };
        _0x3aea18.prototype.create = function (_0x5ce702) {
          return new this.ctor(_0x5ce702);
        };
        _0x3aea18.prototype.setup = function () {
          var _0x5c21c1 = this.fullName;
          var _0x27bb84 = [];
          for (var _0x2c1ad1 = 0x0; _0x2c1ad1 < this.fieldsArray.length; ++_0x2c1ad1) {
            _0x27bb84.push(this._fieldsArray[_0x2c1ad1].resolve().resolvedType);
          }
          this.encode = _0x4c0bb0(this)({
            'Writer': _0x4701cc,
            'types': _0x27bb84,
            'util': _0x32968e
          });
          this.decode = _0x3cbb8a(this)({
            'Reader': _0x571a28,
            'types': _0x27bb84,
            'util': _0x32968e
          });
          this.verify = _0x21e111(this)({
            'types': _0x27bb84,
            'util': _0x32968e
          });
          this.fromObject = _0x2f9e58.fromObject(this)({
            'types': _0x27bb84,
            'util': _0x32968e
          });
          this.toObject = _0x2f9e58.toObject(this)({
            'types': _0x27bb84,
            'util': _0x32968e
          });
          var _0x22b958 = _0x467881[_0x5c21c1];
          if (_0x22b958) {
            var _0x598cff = Object.create(this);
            _0x598cff.fromObject = this.fromObject;
            this.fromObject = _0x22b958.fromObject.bind(_0x598cff);
            _0x598cff.toObject = this.toObject;
            this.toObject = _0x22b958.toObject.bind(_0x598cff);
          }
          return this;
        };
        _0x3aea18.prototype.encode = function (_0x7a502c, _0x14d013) {
          return this.setup().encode(_0x7a502c, _0x14d013);
        };
        _0x3aea18.prototype.encodeDelimited = function (_0x1206be, _0x1062a8) {
          return this.encode(_0x1206be, _0x1062a8 && _0x1062a8.len ? _0x1062a8.fork() : _0x1062a8).ldelim();
        };
        _0x3aea18.prototype.decode = function (_0x20e39a, _0x1d79d8) {
          return this.setup().decode(_0x20e39a, _0x1d79d8);
        };
        _0x3aea18.prototype.decodeDelimited = function (_0x27c46a) {
          if (!(_0x27c46a instanceof _0x571a28)) {
            _0x27c46a = _0x571a28.create(_0x27c46a);
          }
          return this.decode(_0x27c46a, _0x27c46a.uint32());
        };
        _0x3aea18.prototype.verify = function (_0x17cb7d) {
          return this.setup().verify(_0x17cb7d);
        };
        _0x3aea18.prototype.fromObject = function (_0x5f5408) {
          return this.setup().fromObject(_0x5f5408);
        };
        _0x3aea18.prototype.toObject = function (_0x45f5c, _0x2000e2) {
          return this.setup().toObject(_0x45f5c, _0x2000e2);
        };
        _0x3aea18.d = function (_0x22ad0b) {
          return function (_0xd85f30) {
            _0x32968e.decorateType(_0xd85f30, _0x22ad0b);
          };
        };
        _0x43e66a.exports;
      }, function () {
        return {
          './namespace': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './oneof': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './field': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './mapfield': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './service': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/service.js',
          './message': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          './reader': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './writer': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './encoder': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js',
          './decoder': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js',
          './verifier': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js',
          './converter': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          './wrappers': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js"
        };
      });
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/root.js", function (_0x1b6322, _0x4b2a3e, _0xe9aaa9, _0x394b9f, _0x48f35e) {
        _0xe9aaa9.exports = _0x5c7d5a;
        var _0x5707b2 = _0x4b2a3e("./namespace");
        ((_0x5c7d5a.prototype = Object.create(_0x5707b2.prototype)).constructor = _0x5c7d5a).className = "Root";
        var _0x54ac31;
        var _0x583acd;
        var _0x178d0e;
        var _0x5b937d = _0x4b2a3e("./field");
        var _0x1f85a4 = _0x4b2a3e("./enum");
        var _0x170f24 = _0x4b2a3e("./oneof");
        var _0x296baa = _0x4b2a3e("./util");
        function _0x5c7d5a(_0x400c80) {
          _0x5707b2.call(this, '', _0x400c80);
          this.deferred = [];
          this.files = [];
        }
        function _0x3b5453() {}
        _0x5c7d5a.fromJSON = function (_0x38d250, _0x3a9350) {
          if (!_0x3a9350) {
            _0x3a9350 = new _0x5c7d5a();
          }
          if (_0x38d250.options) {
            _0x3a9350.setOptions(_0x38d250.options);
          }
          return _0x3a9350.addJSON(_0x38d250.nested);
        };
        _0x5c7d5a.prototype.resolvePath = _0x296baa.path.resolve;
        _0x5c7d5a.prototype.fetch = _0x296baa.fetch;
        _0x5c7d5a.prototype.load = function _0x75f52e(_0x1c3368, _0x28aab2, _0x6150b8) {
          if ('function' == typeof _0x28aab2) {
            _0x6150b8 = _0x28aab2;
            _0x28aab2 = undefined;
          }
          var _0x4884f5 = this;
          if (!_0x6150b8) {
            return _0x296baa.asPromise(_0x75f52e, _0x4884f5, _0x1c3368, _0x28aab2);
          }
          var _0x2553e9 = _0x6150b8 === _0x3b5453;
          function _0x28f892(_0x1fd11a, _0x850a0f) {
            if (_0x6150b8) {
              var _0x4fbb82 = _0x6150b8;
              _0x6150b8 = null;
              if (_0x2553e9) {
                throw _0x1fd11a;
              }
              _0x4fbb82(_0x1fd11a, _0x850a0f);
            }
          }
          function _0x515fcd(_0x26ec9c) {
            var _0x5e575d = _0x26ec9c.lastIndexOf("google/protobuf/");
            if (_0x5e575d > -0x1) {
              var _0x5b3d7c = _0x26ec9c.substring(_0x5e575d);
              if (_0x5b3d7c in _0x178d0e) {
                return _0x5b3d7c;
              }
            }
            return null;
          }
          function _0x2d3253(_0x115694, _0x33f414) {
            try {
              if (_0x296baa.isString(_0x33f414) && '{' === _0x33f414.charAt(0x0)) {
                _0x33f414 = JSON.parse(_0x33f414);
              }
              if (_0x296baa.isString(_0x33f414)) {
                _0x583acd.filename = _0x115694;
                var _0xadfe89;
                var _0x40826f = _0x583acd(_0x33f414, _0x4884f5, _0x28aab2);
                var _0x39acff = 0x0;
                if (_0x40826f.imports) {
                  for (; _0x39acff < _0x40826f.imports.length; ++_0x39acff) {
                    if (_0xadfe89 = _0x515fcd(_0x40826f.imports[_0x39acff]) || _0x4884f5.resolvePath(_0x115694, _0x40826f.imports[_0x39acff])) {
                      _0x19cdbc(_0xadfe89);
                    }
                  }
                }
                if (_0x40826f.weakImports) {
                  for (_0x39acff = 0x0; _0x39acff < _0x40826f.weakImports.length; ++_0x39acff) {
                    if (_0xadfe89 = _0x515fcd(_0x40826f.weakImports[_0x39acff]) || _0x4884f5.resolvePath(_0x115694, _0x40826f.weakImports[_0x39acff])) {
                      _0x19cdbc(_0xadfe89, true);
                    }
                  }
                }
              } else {
                _0x4884f5.setOptions(_0x33f414.options).addJSON(_0x33f414.nested);
              }
            } catch (_0x594c1f) {
              _0x28f892(_0x594c1f);
            }
            if (!(_0x2553e9 || _0x2b601c)) {
              _0x28f892(null, _0x4884f5);
            }
          }
          function _0x19cdbc(_0x3e3c43, _0x3d8686) {
            if (!(_0x4884f5.files.indexOf(_0x3e3c43) > -0x1)) {
              _0x4884f5.files.push(_0x3e3c43);
              if (_0x3e3c43 in _0x178d0e) {
                if (_0x2553e9) {
                  _0x2d3253(_0x3e3c43, _0x178d0e[_0x3e3c43]);
                } else {
                  ++_0x2b601c;
                  setTimeout(function () {
                    --_0x2b601c;
                    _0x2d3253(_0x3e3c43, _0x178d0e[_0x3e3c43]);
                  });
                }
              } else {
                if (_0x2553e9) {
                  var _0xe1cd73;
                  try {
                    _0xe1cd73 = _0x296baa.fs.readFileSync(_0x3e3c43).toString('utf8');
                  } catch (_0x16b9bd) {
                    return void (_0x3d8686 || _0x28f892(_0x16b9bd));
                  }
                  _0x2d3253(_0x3e3c43, _0xe1cd73);
                } else {
                  ++_0x2b601c;
                  _0x4884f5.fetch(_0x3e3c43, function (_0x348617, _0x3ddc13) {
                    --_0x2b601c;
                    if (_0x6150b8) {
                      if (_0x348617) {
                        if (_0x3d8686) {
                          if (!_0x2b601c) {
                            _0x28f892(null, _0x4884f5);
                          }
                        } else {
                          _0x28f892(_0x348617);
                        }
                      } else {
                        _0x2d3253(_0x3e3c43, _0x3ddc13);
                      }
                    }
                  });
                }
              }
            }
          }
          var _0x2b601c = 0x0;
          if (_0x296baa.isString(_0x1c3368)) {
            _0x1c3368 = [_0x1c3368];
          }
          var _0x1ff15a;
          for (var _0x52c242 = 0x0; _0x52c242 < _0x1c3368.length; ++_0x52c242) {
            if (_0x1ff15a = _0x4884f5.resolvePath('', _0x1c3368[_0x52c242])) {
              _0x19cdbc(_0x1ff15a);
            }
          }
          if (_0x2553e9) {
            return _0x4884f5;
          }
          if (!_0x2b601c) {
            _0x28f892(null, _0x4884f5);
          }
        };
        _0x5c7d5a.prototype.loadSync = function (_0x5884fe, _0x122b67) {
          if (!_0x296baa.isNode) {
            throw Error("not supported");
          }
          return this.load(_0x5884fe, _0x122b67, _0x3b5453);
        };
        _0x5c7d5a.prototype.resolveAll = function () {
          if (this.deferred.length) {
            throw Error("unresolvable extensions: " + this.deferred.map(function (_0x539d9b) {
              return "'extend " + _0x539d9b.extend + "' in " + _0x539d9b.parent.fullName;
            }).join(", "));
          }
          return _0x5707b2.prototype.resolveAll.call(this);
        };
        var _0x11e041 = /^[A-Z]/;
        function _0x1c682a(_0x13a3b4, _0x5b8057) {
          var _0x44d124 = _0x5b8057.parent.lookup(_0x5b8057.extend);
          if (_0x44d124) {
            var _0x251be8 = new _0x5b937d(_0x5b8057.fullName, _0x5b8057.id, _0x5b8057.type, _0x5b8057.rule, undefined, _0x5b8057.options);
            _0x251be8.declaringField = _0x5b8057;
            _0x5b8057.extensionField = _0x251be8;
            _0x44d124.add(_0x251be8);
            return true;
          }
          return false;
        }
        _0x5c7d5a.prototype._handleAdd = function (_0x26f932) {
          if (_0x26f932 instanceof _0x5b937d) {
            if (!(undefined === _0x26f932.extend || _0x26f932.extensionField || _0x1c682a(0x0, _0x26f932))) {
              this.deferred.push(_0x26f932);
            }
          } else {
            if (_0x26f932 instanceof _0x1f85a4) {
              if (_0x11e041.test(_0x26f932.name)) {
                _0x26f932.parent[_0x26f932.name] = _0x26f932.values;
              }
            } else {
              if (!(_0x26f932 instanceof _0x170f24)) {
                if (_0x26f932 instanceof _0x54ac31) {
                  for (var _0x2062f4 = 0x0; _0x2062f4 < this.deferred.length;) {
                    if (_0x1c682a(0x0, this.deferred[_0x2062f4])) {
                      this.deferred.splice(_0x2062f4, 0x1);
                    } else {
                      ++_0x2062f4;
                    }
                  }
                }
                for (var _0x53c8b3 = 0x0; _0x53c8b3 < _0x26f932.nestedArray.length; ++_0x53c8b3) {
                  this._handleAdd(_0x26f932._nestedArray[_0x53c8b3]);
                }
                if (_0x11e041.test(_0x26f932.name)) {
                  _0x26f932.parent[_0x26f932.name] = _0x26f932;
                }
              }
            }
          }
        };
        _0x5c7d5a.prototype._handleRemove = function (_0x2ca03f) {
          if (_0x2ca03f instanceof _0x5b937d) {
            if (undefined !== _0x2ca03f.extend) {
              if (_0x2ca03f.extensionField) {
                _0x2ca03f.extensionField.parent.remove(_0x2ca03f.extensionField);
                _0x2ca03f.extensionField = null;
              } else {
                var _0x516629 = this.deferred.indexOf(_0x2ca03f);
                if (_0x516629 > -0x1) {
                  this.deferred.splice(_0x516629, 0x1);
                }
              }
            }
          } else {
            if (_0x2ca03f instanceof _0x1f85a4) {
              if (_0x11e041.test(_0x2ca03f.name)) {
                delete _0x2ca03f.parent[_0x2ca03f.name];
              }
            } else {
              if (_0x2ca03f instanceof _0x5707b2) {
                for (var _0x3e3ff4 = 0x0; _0x3e3ff4 < _0x2ca03f.nestedArray.length; ++_0x3e3ff4) {
                  this._handleRemove(_0x2ca03f._nestedArray[_0x3e3ff4]);
                }
                if (_0x11e041.test(_0x2ca03f.name)) {
                  delete _0x2ca03f.parent[_0x2ca03f.name];
                }
              }
            }
          }
        };
        _0x5c7d5a._configure = function (_0x411828, _0x48d153, _0x1b2ae0) {
          _0x54ac31 = _0x411828;
          _0x583acd = _0x48d153;
          _0x178d0e = _0x1b2ae0;
        };
        _0xe9aaa9.exports;
      }, function () {
        return {
          './namespace': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './field': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './oneof': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util.js", function (_0x3b68a1, _0xa674fe, _0x5f4649, _0x2348cb, _0x4f205e) {
        var _0x2edd90;
        var _0x38499e;
        var _0x504aaa = _0x5f4649.exports = _0xa674fe("./util/minimal");
        var _0x25fbd3 = _0xa674fe('./roots');
        _0x504aaa.codegen = _0xa674fe("@protobufjs/codegen");
        _0x504aaa.fetch = _0xa674fe("@protobufjs/fetch");
        _0x504aaa.path = _0xa674fe("@protobufjs/path");
        _0x504aaa.fs = _0x504aaa.inquire('fs');
        _0x504aaa.toArray = function (_0x6327e) {
          if (_0x6327e) {
            var _0xde2baa = Object.keys(_0x6327e);
            var _0x3a6fb7 = new Array(_0xde2baa.length);
            for (var _0x505d25 = 0x0; _0x505d25 < _0xde2baa.length;) {
              _0x3a6fb7[_0x505d25] = _0x6327e[_0xde2baa[_0x505d25++]];
            }
            return _0x3a6fb7;
          }
          return [];
        };
        _0x504aaa.toObject = function (_0x5d7a83) {
          var _0x200279 = {};
          for (var _0x2cc522 = 0x0; _0x2cc522 < _0x5d7a83.length;) {
            var _0x19ba15 = _0x5d7a83[_0x2cc522++];
            var _0x1fb639 = _0x5d7a83[_0x2cc522++];
            if (undefined !== _0x1fb639) {
              _0x200279[_0x19ba15] = _0x1fb639;
            }
          }
          return _0x200279;
        };
        var _0x1d5cce = /\\/g;
        var _0x510378 = /"/g;
        _0x504aaa.isReserved = function (_0x6808a9) {
          return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(_0x6808a9);
        };
        _0x504aaa.safeProp = function (_0xcb2553) {
          return !/^[$\w_]+$/.test(_0xcb2553) || _0x504aaa.isReserved(_0xcb2553) ? "[\"" + _0xcb2553.replace(_0x1d5cce, "\\\\").replace(_0x510378, "\\\"") + "\"]" : '.' + _0xcb2553;
        };
        _0x504aaa.ucFirst = function (_0x5bb945) {
          return _0x5bb945.charAt(0x0).toUpperCase() + _0x5bb945.substring(0x1);
        };
        var _0x419967 = /_([a-z])/g;
        _0x504aaa.camelCase = function (_0x3768cb) {
          return _0x3768cb.substring(0x0, 0x1) + _0x3768cb.substring(0x1).replace(_0x419967, function (_0xda0fe6, _0x27dc8f) {
            return _0x27dc8f.toUpperCase();
          });
        };
        _0x504aaa.compareFieldsById = function (_0x40812a, _0x4c3d18) {
          return _0x40812a.id - _0x4c3d18.id;
        };
        _0x504aaa.decorateType = function (_0x23ef96, _0x4b79bf) {
          if (_0x23ef96.$type) {
            if (_0x4b79bf && _0x23ef96.$type.name !== _0x4b79bf) {
              _0x504aaa.decorateRoot.remove(_0x23ef96.$type);
              _0x23ef96.$type.name = _0x4b79bf;
              _0x504aaa.decorateRoot.add(_0x23ef96.$type);
            }
            return _0x23ef96.$type;
          }
          if (!_0x2edd90) {
            _0x2edd90 = _0xa674fe("./type");
          }
          var _0x2d1b54 = new _0x2edd90(_0x4b79bf || _0x23ef96.name);
          _0x504aaa.decorateRoot.add(_0x2d1b54);
          _0x2d1b54.ctor = _0x23ef96;
          Object.defineProperty(_0x23ef96, "$type", {
            'value': _0x2d1b54,
            'enumerable': false
          });
          Object.defineProperty(_0x23ef96.prototype, "$type", {
            'value': _0x2d1b54,
            'enumerable': false
          });
          return _0x2d1b54;
        };
        var _0x7aa579 = 0x0;
        _0x504aaa.decorateEnum = function (_0x46346a) {
          if (_0x46346a.$type) {
            return _0x46346a.$type;
          }
          if (!_0x38499e) {
            _0x38499e = _0xa674fe("./enum");
          }
          var _0x27902f = new _0x38499e("Enum" + _0x7aa579++, _0x46346a);
          _0x504aaa.decorateRoot.add(_0x27902f);
          Object.defineProperty(_0x46346a, "$type", {
            'value': _0x27902f,
            'enumerable': false
          });
          return _0x27902f;
        };
        _0x504aaa.setProperty = function (_0x3bea79, _0x2d7d25, _0x7c5a83) {
          if ("object" != typeof _0x3bea79) {
            throw TypeError("dst must be an object");
          }
          if (!_0x2d7d25) {
            throw TypeError("path must be specified");
          }
          return function _0x1b6989(_0x3c5b9c, _0x4e39ee, _0x243cec) {
            var _0x23fddd = _0x4e39ee.shift();
            if ('__proto__' === _0x23fddd || "prototype" === _0x23fddd) {
              return _0x3c5b9c;
            }
            if (_0x4e39ee.length > 0x0) {
              _0x3c5b9c[_0x23fddd] = _0x1b6989(_0x3c5b9c[_0x23fddd] || {}, _0x4e39ee, _0x243cec);
            } else {
              var _0x137219 = _0x3c5b9c[_0x23fddd];
              if (_0x137219) {
                _0x243cec = [].concat(_0x137219).concat(_0x243cec);
              }
              _0x3c5b9c[_0x23fddd] = _0x243cec;
            }
            return _0x3c5b9c;
          }(_0x3bea79, _0x2d7d25 = _0x2d7d25.split('.'), _0x7c5a83);
        };
        Object.defineProperty(_0x504aaa, "decorateRoot", {
          'get': function () {
            return _0x25fbd3.decorated || (_0x25fbd3.decorated = new (_0xa674fe('./root'))());
          }
        });
        _0x5f4649.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          './roots': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/roots.js",
          '@protobufjs/codegen': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js",
          '@protobufjs/fetch': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js",
          '@protobufjs/path': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/@protobufjs/path/index.js",
          './type': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './root': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/root.js"
        };
      });
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/object.js", function (_0x765190, _0x41255a, _0x4c02c4, _0x32775e, _0x1f821b) {
        _0x4c02c4.exports = _0x54939a;
        _0x54939a.className = "ReflectionObject";
        var _0x2ad563;
        var _0x5ed1be = _0x41255a('./util');
        function _0x54939a(_0x181b63, _0x9cf031) {
          if (!_0x5ed1be.isString(_0x181b63)) {
            throw TypeError("name must be a string");
          }
          if (_0x9cf031 && !_0x5ed1be.isObject(_0x9cf031)) {
            throw TypeError("options must be an object");
          }
          this.options = _0x9cf031;
          this.parsedOptions = null;
          this.name = _0x181b63;
          this.parent = null;
          this.resolved = false;
          this.comment = null;
          this.filename = null;
        }
        Object.defineProperties(_0x54939a.prototype, {
          'root': {
            'get': function () {
              for (var _0x340f79 = this; null !== _0x340f79.parent;) {
                _0x340f79 = _0x340f79.parent;
              }
              return _0x340f79;
            }
          },
          'fullName': {
            'get': function () {
              var _0x576e7b = [this.name];
              for (var _0x32ef3c = this.parent; _0x32ef3c;) {
                _0x576e7b.unshift(_0x32ef3c.name);
                _0x32ef3c = _0x32ef3c.parent;
              }
              return _0x576e7b.join('.');
            }
          }
        });
        _0x54939a.prototype.toJSON = function () {
          throw Error();
        };
        _0x54939a.prototype.onAdd = function (_0x154d75) {
          if (this.parent && this.parent !== _0x154d75) {
            this.parent.remove(this);
          }
          this.parent = _0x154d75;
          this.resolved = false;
          var _0x254682 = _0x154d75.root;
          if (_0x254682 instanceof _0x2ad563) {
            _0x254682._handleAdd(this);
          }
        };
        _0x54939a.prototype.onRemove = function (_0x2ded7a) {
          var _0x546a54 = _0x2ded7a.root;
          if (_0x546a54 instanceof _0x2ad563) {
            _0x546a54._handleRemove(this);
          }
          this.parent = null;
          this.resolved = false;
        };
        _0x54939a.prototype.resolve = function () {
          if (!this.resolved) {
            if (this.root instanceof _0x2ad563) {
              this.resolved = true;
            }
          }
          return this;
        };
        _0x54939a.prototype.getOption = function (_0x152438) {
          if (this.options) {
            return this.options[_0x152438];
          }
        };
        _0x54939a.prototype.setOption = function (_0x1ddfd6, _0x2561b9, _0x40ec65) {
          if (!(_0x40ec65 && this.options && undefined !== this.options[_0x1ddfd6])) {
            (this.options || (this.options = {}))[_0x1ddfd6] = _0x2561b9;
          }
          return this;
        };
        _0x54939a.prototype.setParsedOption = function (_0x558977, _0x286a22, _0x120ecf) {
          if (!this.parsedOptions) {
            this.parsedOptions = [];
          }
          var _0x261f1e = this.parsedOptions;
          if (_0x120ecf) {
            var _0x3300d0 = _0x261f1e.find(function (_0x5eb90a) {
              return Object.prototype.hasOwnProperty.call(_0x5eb90a, _0x558977);
            });
            if (_0x3300d0) {
              var _0x2a070a = _0x3300d0[_0x558977];
              _0x5ed1be.setProperty(_0x2a070a, _0x120ecf, _0x286a22);
            } else {
              (_0x3300d0 = {})[_0x558977] = _0x5ed1be.setProperty({}, _0x120ecf, _0x286a22);
              _0x261f1e.push(_0x3300d0);
            }
          } else {
            var _0x6700c8 = {
              _0x558977: _0x286a22
            };
            _0x261f1e.push(_0x6700c8);
          }
          return this;
        };
        _0x54939a.prototype.setOptions = function (_0x2d4a93, _0x345f66) {
          if (_0x2d4a93) {
            var _0x3de47f = Object.keys(_0x2d4a93);
            for (var _0x1c010c = 0x0; _0x1c010c < _0x3de47f.length; ++_0x1c010c) {
              this.setOption(_0x3de47f[_0x1c010c], _0x2d4a93[_0x3de47f[_0x1c010c]], _0x345f66);
            }
          }
          return this;
        };
        _0x54939a.prototype.toString = function () {
          var _0xdd99fd = this.constructor.className;
          var _0x1604fc = this.fullName;
          return _0x1604fc.length ? _0xdd99fd + " " + _0x1604fc : _0xdd99fd;
        };
        _0x54939a._configure = function (_0x4895e7) {
          _0x2ad563 = _0x4895e7;
        };
        _0x4c02c4.exports;
      }, function () {
        return {
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/enum.js", function (_0xc470f6, _0x4be401, _0x3517b4, _0x2fc36b, _0x53ac22) {
        _0x3517b4.exports = _0x3cc3e0;
        var _0x4ec7ed = _0x4be401("./object");
        ((_0x3cc3e0.prototype = Object.create(_0x4ec7ed.prototype)).constructor = _0x3cc3e0).className = "Enum";
        var _0x2415bb = _0x4be401('./namespace');
        var _0x4ec231 = _0x4be401("./util");
        function _0x3cc3e0(_0x41f418, _0x166b76, _0x56fb07, _0x4a0ab3, _0x2e76b6) {
          _0x4ec7ed.call(this, _0x41f418, _0x56fb07);
          if (_0x166b76 && "object" != typeof _0x166b76) {
            throw TypeError("values must be an object");
          }
          this.valuesById = {};
          this.values = Object.create(this.valuesById);
          this.comment = _0x4a0ab3;
          this.comments = _0x2e76b6 || {};
          this.reserved = undefined;
          if (_0x166b76) {
            var _0x101c6e = Object.keys(_0x166b76);
            for (var _0x1985c4 = 0x0; _0x1985c4 < _0x101c6e.length; ++_0x1985c4) {
              if ("number" == typeof _0x166b76[_0x101c6e[_0x1985c4]]) {
                this.valuesById[this.values[_0x101c6e[_0x1985c4]] = _0x166b76[_0x101c6e[_0x1985c4]]] = _0x101c6e[_0x1985c4];
              }
            }
          }
        }
        _0x3cc3e0.fromJSON = function (_0x427cd0, _0x57ec4d) {
          var _0x5934dc = new _0x3cc3e0(_0x427cd0, _0x57ec4d.values, _0x57ec4d.options, _0x57ec4d.comment, _0x57ec4d.comments);
          _0x5934dc.reserved = _0x57ec4d.reserved;
          return _0x5934dc;
        };
        _0x3cc3e0.prototype.toJSON = function (_0x4411d9) {
          var _0x4517cb = !!_0x4411d9 && Boolean(_0x4411d9.keepComments);
          return _0x4ec231.toObject(["options", this.options, "values", this.values, 'reserved', this.reserved && this.reserved.length ? this.reserved : undefined, 'comment', _0x4517cb ? this.comment : undefined, 'comments', _0x4517cb ? this.comments : undefined]);
        };
        _0x3cc3e0.prototype.add = function (_0x3d7362, _0x2106a3, _0x5a3d76) {
          if (!_0x4ec231.isString(_0x3d7362)) {
            throw TypeError("name must be a string");
          }
          if (!_0x4ec231.isInteger(_0x2106a3)) {
            throw TypeError("id must be an integer");
          }
          if (undefined !== this.values[_0x3d7362]) {
            throw Error("duplicate name '" + _0x3d7362 + "' in " + this);
          }
          if (this.isReservedId(_0x2106a3)) {
            throw Error("id " + _0x2106a3 + " is reserved in " + this);
          }
          if (this.isReservedName(_0x3d7362)) {
            throw Error("name '" + _0x3d7362 + "' is reserved in " + this);
          }
          if (undefined !== this.valuesById[_0x2106a3]) {
            if (!this.options || !this.options.allow_alias) {
              throw Error("duplicate id " + _0x2106a3 + " in " + this);
            }
            this.values[_0x3d7362] = _0x2106a3;
          } else {
            this.valuesById[this.values[_0x3d7362] = _0x2106a3] = _0x3d7362;
          }
          this.comments[_0x3d7362] = _0x5a3d76 || null;
          return this;
        };
        _0x3cc3e0.prototype.remove = function (_0x51c675) {
          if (!_0x4ec231.isString(_0x51c675)) {
            throw TypeError("name must be a string");
          }
          var _0x3b558b = this.values[_0x51c675];
          if (null == _0x3b558b) {
            throw Error("name '" + _0x51c675 + "' does not exist in " + this);
          }
          delete this.valuesById[_0x3b558b];
          delete this.values[_0x51c675];
          delete this.comments[_0x51c675];
          return this;
        };
        _0x3cc3e0.prototype.isReservedId = function (_0x272357) {
          return _0x2415bb.isReservedId(this.reserved, _0x272357);
        };
        _0x3cc3e0.prototype.isReservedName = function (_0x486323) {
          return _0x2415bb.isReservedName(this.reserved, _0x486323);
        };
        _0x3517b4.exports;
      }, function () {
        return {
          './object': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './namespace': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3a1ca5.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js', function (_0x2e7fc5, _0x3146b4, _0xe595ec, _0x2078d1, _0x3edef4) {
        _0xe595ec.exports = function (_0x426536) {
          var _0x3c6795;
          var _0x28a832 = _0x283fdf.codegen(['m', 'w'], _0x426536.name + "$encode")("if(!w)")('w=Writer.create()');
          var _0x37b924 = _0x426536.fieldsArray.slice().sort(_0x283fdf.compareFieldsById);
          for (var _0x50e32b = 0x0; _0x50e32b < _0x37b924.length; ++_0x50e32b) {
            var _0x459f84 = _0x37b924[_0x50e32b].resolve();
            var _0xa2e1c = _0x426536._fieldsArray.indexOf(_0x459f84);
            var _0x143b00 = _0x459f84.resolvedType instanceof _0x145091 ? 'int32' : _0x459f84.type;
            var _0x34dd87 = _0x2d3694.basic[_0x143b00];
            _0x3c6795 = 'm' + _0x283fdf.safeProp(_0x459f84.name);
            if (_0x459f84.map) {
              _0x28a832("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", _0x3c6795, _0x459f84.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", _0x3c6795)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (_0x459f84.id << 0x3 | 0x2) >>> 0x0, 0x8 | _0x2d3694.mapKey[_0x459f84.keyType], _0x459f84.keyType);
              if (undefined === _0x34dd87) {
                _0x28a832("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", _0xa2e1c, _0x3c6795);
              } else {
                _0x28a832(".uint32(%i).%s(%s[ks[i]]).ldelim()", 0x10 | _0x34dd87, _0x143b00, _0x3c6795);
              }
              _0x28a832('}')('}');
            } else if (_0x459f84.repeated) {
              _0x28a832('if(%s!=null&&%s.length){', _0x3c6795, _0x3c6795);
              if (_0x459f84.packed && undefined !== _0x2d3694.packed[_0x143b00]) {
                _0x28a832("w.uint32(%i).fork()", (_0x459f84.id << 0x3 | 0x2) >>> 0x0)("for(var i=0;i<%s.length;++i)", _0x3c6795)("w.%s(%s[i])", _0x143b00, _0x3c6795)("w.ldelim()");
              } else {
                _0x28a832("for(var i=0;i<%s.length;++i)", _0x3c6795);
                if (undefined === _0x34dd87) {
                  if (_0x459f84.resolvedType.group) {
                    _0x28a832("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0xa2e1c, _0x3c6795 + "[i]", (_0x459f84.id << 0x3 | 0x3) >>> 0x0, (_0x459f84.id << 0x3 | 0x4) >>> 0x0);
                  } else {
                    _0x28a832("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", _0xa2e1c, _0x3c6795 + "[i]", (_0x459f84.id << 0x3 | 0x2) >>> 0x0);
                  }
                } else {
                  _0x28a832("w.uint32(%i).%s(%s[i])", (_0x459f84.id << 0x3 | _0x34dd87) >>> 0x0, _0x143b00, _0x3c6795);
                }
              }
              _0x28a832('}');
            } else {
              if (_0x459f84.optional) {
                _0x28a832('if(%s!=null&&Object.hasOwnProperty.call(m,%j))', _0x3c6795, _0x459f84.name);
              }
              if (undefined === _0x34dd87) {
                if (_0x459f84.resolvedType.group) {
                  _0x28a832("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0xa2e1c, _0x3c6795, (_0x459f84.id << 0x3 | 0x3) >>> 0x0, (_0x459f84.id << 0x3 | 0x4) >>> 0x0);
                } else {
                  _0x28a832("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", _0xa2e1c, _0x3c6795, (_0x459f84.id << 0x3 | 0x2) >>> 0x0);
                }
              } else {
                _0x28a832("w.uint32(%i).%s(%s)", (_0x459f84.id << 0x3 | _0x34dd87) >>> 0x0, _0x143b00, _0x3c6795);
              }
            }
          }
          return _0x28a832("return w");
        };
        var _0x145091 = _0x3146b4("./enum");
        var _0x2d3694 = _0x3146b4("./types");
        var _0x283fdf = _0x3146b4("./util");
        _0xe595ec.exports;
      }, function () {
        return {
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js", function (_0x467312, _0x47f968, _0x3422b1, _0x1f7718, _0x4731bd) {
        var _0x4dca66 = _0x3422b1.exports = _0x47f968('./index-minimal');
        _0x4dca66.build = "light";
        _0x4dca66.load = function (_0x5d811b, _0x57b489, _0x320770) {
          if ("function" == typeof _0x57b489) {
            _0x320770 = _0x57b489;
            _0x57b489 = new _0x4dca66.Root();
          } else if (!_0x57b489) {
            _0x57b489 = new _0x4dca66.Root();
          }
          return _0x57b489.load(_0x5d811b, _0x320770);
        };
        _0x4dca66.loadSync = function (_0x1909c2, _0x19d29a) {
          if (!_0x19d29a) {
            _0x19d29a = new _0x4dca66.Root();
          }
          return _0x19d29a.loadSync(_0x1909c2);
        };
        _0x4dca66.encoder = _0x47f968("./encoder");
        _0x4dca66.decoder = _0x47f968('./decoder');
        _0x4dca66.verifier = _0x47f968("./verifier");
        _0x4dca66.converter = _0x47f968("./converter");
        _0x4dca66.ReflectionObject = _0x47f968("./object");
        _0x4dca66.Namespace = _0x47f968('./namespace');
        _0x4dca66.Root = _0x47f968('./root');
        _0x4dca66.Enum = _0x47f968("./enum");
        _0x4dca66.Type = _0x47f968("./type");
        _0x4dca66.Field = _0x47f968("./field");
        _0x4dca66.OneOf = _0x47f968("./oneof");
        _0x4dca66.MapField = _0x47f968("./mapfield");
        _0x4dca66.Service = _0x47f968("./service");
        _0x4dca66.Method = _0x47f968("./method");
        _0x4dca66.Message = _0x47f968("./message");
        _0x4dca66.wrappers = _0x47f968("./wrappers");
        _0x4dca66.types = _0x47f968("./types");
        _0x4dca66.util = _0x47f968("./util");
        _0x4dca66.ReflectionObject._configure(_0x4dca66.Root);
        _0x4dca66.Namespace._configure(_0x4dca66.Type, _0x4dca66.Service, _0x4dca66.Enum);
        _0x4dca66.Root._configure(_0x4dca66.Type);
        _0x4dca66.Field._configure(_0x4dca66.Type);
        _0x3422b1.exports;
      }, function () {
        return {
          './index-minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js",
          './encoder': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js',
          './decoder': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js',
          './verifier': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js',
          './converter': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          './object': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './namespace': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './root': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './type': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './field': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './oneof': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './mapfield': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './service': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/service.js',
          './method': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          './message': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          './wrappers': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js",
          './types': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js", function (_0x57ba58, _0xf410eb, _0x1711b5, _0x49e0b7, _0x47d67e) {
        _0x1711b5.exports = _0x302752;
        var _0x344ecc = /[\s{}=;:[\],'"()<>]/g;
        var _0x58b630 = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
        var _0x1fd48c = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
        var _0x101d0f = /^ *[*/]+ */;
        var _0x5a5bda = /^\s*\*?\/*/;
        var _0x1f0fe6 = /\n/g;
        var _0x22b151 = /\s/;
        var _0xd245c1 = /\\(.?)/g;
        var _0x33f598 = {
          0x0: "\0",
          'r': "\r",
          'n': "\n",
          't': "\t"
        };
        function _0x4b7c84(_0x36d945) {
          return _0x36d945.replace(_0xd245c1, function (_0xb4da1e, _0x1235d5) {
            switch (_0x1235d5) {
              case "\\":
              case '':
                return _0x1235d5;
              default:
                return _0x33f598[_0x1235d5] || '';
            }
          });
        }
        function _0x302752(_0x432745, _0x537bce) {
          _0x432745 = _0x432745.toString();
          var _0x355472 = 0x0;
          var _0x1caf23 = _0x432745.length;
          var _0x2debac = 0x1;
          var _0x7d2168 = null;
          var _0x9f213f = null;
          var _0x3c57ee = 0x0;
          var _0x1254b7 = false;
          var _0x236623 = false;
          var _0x34d98c = [];
          var _0x33a43c = null;
          function _0x3c8ecc(_0x1b6b72, _0x30aaee, _0x5cacee) {
            _0x7d2168 = _0x432745.charAt(_0x1b6b72++);
            _0x3c57ee = _0x2debac;
            _0x1254b7 = false;
            _0x236623 = _0x5cacee;
            var _0x208e61;
            var _0x4547ee = _0x1b6b72 - (_0x537bce ? 0x2 : 0x3);
            do {
              if (--_0x4547ee < 0x0 || "\n" === (_0x208e61 = _0x432745.charAt(_0x4547ee))) {
                _0x1254b7 = true;
                break;
              }
            } while (" " === _0x208e61 || "\t" === _0x208e61);
            var _0xac4afe = _0x432745.substring(_0x1b6b72, _0x30aaee).split(_0x1f0fe6);
            for (var _0x532af5 = 0x0; _0x532af5 < _0xac4afe.length; ++_0x532af5) {
              _0xac4afe[_0x532af5] = _0xac4afe[_0x532af5].replace(_0x537bce ? _0x5a5bda : _0x101d0f, '').trim();
            }
            _0x9f213f = _0xac4afe.join("\n").trim();
          }
          function _0x4fe210(_0x3867c3) {
            var _0x1e1232 = _0x29bc43(_0x3867c3);
            var _0x5c7efa = _0x432745.substring(_0x3867c3, _0x1e1232);
            return /^\s*\/{1,2}/.test(_0x5c7efa);
          }
          function _0x29bc43(_0x3f9b69) {
            for (var _0x4b8ff2 = _0x3f9b69; _0x4b8ff2 < _0x1caf23 && "\n" !== _0x432745.charAt(_0x4b8ff2);) {
              _0x4b8ff2++;
            }
            return _0x4b8ff2;
          }
          function _0x1f058c() {
            if (_0x34d98c.length > 0x0) {
              return _0x34d98c.shift();
            }
            if (_0x33a43c) {
              return function () {
                var _0x455693 = "'" === _0x33a43c ? _0x1fd48c : _0x58b630;
                _0x455693.lastIndex = _0x355472 - 0x1;
                var _0x3729fa = _0x455693.exec(_0x432745);
                if (!_0x3729fa) {
                  throw Error("illegal string (line " + _0x2debac + ')');
                }
                _0x355472 = _0x455693.lastIndex;
                _0x9559cb(_0x33a43c);
                _0x33a43c = null;
                return _0x4b7c84(_0x3729fa[0x1]);
              }();
            }
            var _0x26fd50;
            var _0x32c8dc;
            var _0x33cbf3;
            var _0x3f1c09;
            var _0x4d983e;
            var _0x4509e4 = 0x0 === _0x355472;
            do {
              if (_0x355472 === _0x1caf23) {
                return null;
              }
              for (_0x26fd50 = false; _0x22b151.test(_0x33cbf3 = _0x432745.charAt(_0x355472));) {
                if ("\n" === _0x33cbf3) {
                  _0x4509e4 = true;
                  ++_0x2debac;
                }
                if (++_0x355472 === _0x1caf23) {
                  return null;
                }
              }
              if ('/' === _0x432745.charAt(_0x355472)) {
                if (++_0x355472 === _0x1caf23) {
                  throw Error("illegal comment (line " + _0x2debac + ')');
                }
                if ('/' === _0x432745.charAt(_0x355472)) {
                  if (_0x537bce) {
                    _0x3f1c09 = _0x355472;
                    _0x4d983e = false;
                    if (_0x4fe210(_0x355472)) {
                      _0x4d983e = true;
                      do {
                        if ((_0x355472 = _0x29bc43(_0x355472)) === _0x1caf23) {
                          break;
                        }
                        _0x355472++;
                      } while (_0x4fe210(_0x355472));
                    } else {
                      _0x355472 = Math.min(_0x1caf23, _0x29bc43(_0x355472) + 0x1);
                    }
                    if (_0x4d983e) {
                      _0x3c8ecc(_0x3f1c09, _0x355472, _0x4509e4);
                    }
                    _0x2debac++;
                    _0x26fd50 = true;
                  } else {
                    for (_0x4d983e = '/' === _0x432745.charAt(_0x3f1c09 = _0x355472 + 0x1); "\n" !== _0x432745.charAt(++_0x355472);) {
                      if (_0x355472 === _0x1caf23) {
                        return null;
                      }
                    }
                    ++_0x355472;
                    if (_0x4d983e) {
                      _0x3c8ecc(_0x3f1c09, _0x355472 - 0x1, _0x4509e4);
                    }
                    ++_0x2debac;
                    _0x26fd50 = true;
                  }
                } else {
                  if ('*' !== (_0x33cbf3 = _0x432745.charAt(_0x355472))) {
                    return '/';
                  }
                  _0x3f1c09 = _0x355472 + 0x1;
                  _0x4d983e = _0x537bce || '*' === _0x432745.charAt(_0x3f1c09);
                  do {
                    if ("\n" === _0x33cbf3) {
                      ++_0x2debac;
                    }
                    if (++_0x355472 === _0x1caf23) {
                      throw Error("illegal comment (line " + _0x2debac + ')');
                    }
                    _0x32c8dc = _0x33cbf3;
                    _0x33cbf3 = _0x432745.charAt(_0x355472);
                  } while ('*' !== _0x32c8dc || '/' !== _0x33cbf3);
                  ++_0x355472;
                  if (_0x4d983e) {
                    _0x3c8ecc(_0x3f1c09, _0x355472 - 0x2, _0x4509e4);
                  }
                  _0x26fd50 = true;
                }
              }
            } while (_0x26fd50);
            var _0x78b431 = _0x355472;
            _0x344ecc.lastIndex = 0x0;
            if (!_0x344ecc.test(_0x432745.charAt(_0x78b431++))) {
              for (; _0x78b431 < _0x1caf23 && !_0x344ecc.test(_0x432745.charAt(_0x78b431));) {
                ++_0x78b431;
              }
            }
            var _0x161253 = _0x432745.substring(_0x355472, _0x355472 = _0x78b431);
            if (!("\"" !== _0x161253 && "'" !== _0x161253)) {
              _0x33a43c = _0x161253;
            }
            return _0x161253;
          }
          function _0x9559cb(_0x1e221f) {
            _0x34d98c.push(_0x1e221f);
          }
          function _0x7fc061() {
            if (!_0x34d98c.length) {
              var _0x58515a = _0x1f058c();
              if (null === _0x58515a) {
                return null;
              }
              _0x9559cb(_0x58515a);
            }
            return _0x34d98c[0x0];
          }
          return Object.defineProperty({
            'next': _0x1f058c,
            'peek': _0x7fc061,
            'push': _0x9559cb,
            'skip': function (_0x52f8e9, _0xd2277c) {
              var _0x3b7fcd = _0x7fc061();
              if (_0x3b7fcd === _0x52f8e9) {
                _0x1f058c();
                return true;
              }
              if (!_0xd2277c) {
                throw Error("illegal " + ("token '" + _0x3b7fcd + "', '" + _0x52f8e9 + "' expected") + " (line " + _0x2debac + ')');
              }
              return false;
            },
            'cmnt': function (_0x32e477) {
              var _0x286d23 = null;
              if (undefined === _0x32e477) {
                if (_0x3c57ee === _0x2debac - 0x1 && (_0x537bce || '*' === _0x7d2168 || _0x1254b7)) {
                  _0x286d23 = _0x236623 ? _0x9f213f : null;
                }
              } else {
                if (_0x3c57ee < _0x32e477) {
                  _0x7fc061();
                }
                if (!(_0x3c57ee !== _0x32e477 || _0x1254b7 || !_0x537bce && '/' !== _0x7d2168)) {
                  _0x286d23 = _0x236623 ? null : _0x9f213f;
                }
              }
              return _0x286d23;
            }
          }, "line", {
            'get': function () {
              return _0x2debac;
            }
          });
        }
        _0x302752.unescape = _0x4b7c84;
        _0x1711b5.exports;
      }, {});
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/parse.js", function (_0x1e89cb, _0x8279bc, _0x3693ef, _0x5a5ec1, _0x34b088) {
        _0x3693ef.exports = _0x5c699a;
        _0x5c699a.filename = null;
        _0x5c699a.defaults = {
          'keepCase': false
        };
        var _0x3508eb = _0x8279bc("./tokenize");
        var _0x4256a1 = _0x8279bc("./root");
        var _0x1105aa = _0x8279bc('./type');
        var _0x3f7755 = _0x8279bc("./field");
        var _0xe8fabd = _0x8279bc("./mapfield");
        var _0x11c49d = _0x8279bc("./oneof");
        var _0x2a2c0d = _0x8279bc("./enum");
        var _0x1b54f8 = _0x8279bc("./service");
        var _0x15db22 = _0x8279bc("./method");
        var _0x2cc26f = _0x8279bc('./types');
        var _0x146701 = _0x8279bc("./util");
        var _0x5913af = /^[1-9][0-9]*$/;
        var _0x577352 = /^-?[1-9][0-9]*$/;
        var _0x15a0a8 = /^0[x][0-9a-fA-F]+$/;
        var _0x46c1a0 = /^-?0[x][0-9a-fA-F]+$/;
        var _0x54e0b9 = /^0[0-7]+$/;
        var _0xad0585 = /^-?0[0-7]+$/;
        var _0x4628a8 = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
        var _0x30c2f1 = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
        var _0x987546 = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
        var _0x5cfe92 = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
        function _0x5c699a(_0x82c1, _0x2e5b7c, _0x37c9b9) {
          if (!(_0x2e5b7c instanceof _0x4256a1)) {
            _0x37c9b9 = _0x2e5b7c;
            _0x2e5b7c = new _0x4256a1();
          }
          if (!_0x37c9b9) {
            _0x37c9b9 = _0x5c699a.defaults;
          }
          var _0xbad121;
          var _0x18eb2e;
          var _0x1b8a26;
          var _0x1f5884;
          var _0x363ab9;
          var _0x3c9b5f = _0x37c9b9.preferTrailingComment || false;
          var _0x43fe1b = _0x3508eb(_0x82c1, _0x37c9b9.alternateCommentMode || false);
          var _0x3cb31a = _0x43fe1b.next;
          var _0x1cd59a = _0x43fe1b.push;
          var _0x1ed10a = _0x43fe1b.peek;
          var _0xd2420e = _0x43fe1b.skip;
          var _0x133726 = _0x43fe1b.cmnt;
          var _0x2a7420 = true;
          var _0x41442f = false;
          var _0x553f52 = _0x2e5b7c;
          var _0x44f84b = _0x37c9b9.keepCase ? function (_0x3d9dcf) {
            return _0x3d9dcf;
          } : _0x146701.camelCase;
          function _0xa4c7a9(_0x392c3f, _0xaefad3, _0x3cc070) {
            var _0x3ef069 = _0x5c699a.filename;
            if (!_0x3cc070) {
              _0x5c699a.filename = null;
            }
            return Error("illegal " + (_0xaefad3 || "token") + " '" + _0x392c3f + "' (" + (_0x3ef069 ? _0x3ef069 + ", " : '') + "line " + _0x43fe1b.line + ')');
          }
          function _0x3f15e0() {
            var _0x11961e;
            var _0x17a40f = [];
            do {
              if ("\"" !== (_0x11961e = _0x3cb31a()) && "'" !== _0x11961e) {
                throw _0xa4c7a9(_0x11961e);
              }
              _0x17a40f.push(_0x3cb31a());
              _0xd2420e(_0x11961e);
              _0x11961e = _0x1ed10a();
            } while ("\"" === _0x11961e || "'" === _0x11961e);
            return _0x17a40f.join('');
          }
          function _0x3b6d13(_0x18986c) {
            var _0xa20c38 = _0x3cb31a();
            switch (_0xa20c38) {
              case "'":
              case "\"":
                _0x1cd59a(_0xa20c38);
                return _0x3f15e0();
              case "true":
              case "TRUE":
                return true;
              case "false":
              case "FALSE":
                return false;
            }
            try {
              return function (_0x47f1f1, _0x3c7907) {
                var _0x128f0f = 0x1;
                if ('-' === _0x47f1f1.charAt(0x0)) {
                  _0x128f0f = -0x1;
                  _0x47f1f1 = _0x47f1f1.substring(0x1);
                }
                switch (_0x47f1f1) {
                  case "inf":
                  case "INF":
                  case "Inf":
                    return _0x128f0f * Infinity;
                  case "nan":
                  case "NAN":
                  case "Nan":
                  case 'NaN':
                    return NaN;
                  case '0':
                    return 0x0;
                }
                if (_0x5913af.test(_0x47f1f1)) {
                  return _0x128f0f * parseInt(_0x47f1f1, 0xa);
                }
                if (_0x15a0a8.test(_0x47f1f1)) {
                  return _0x128f0f * parseInt(_0x47f1f1, 0x10);
                }
                if (_0x54e0b9.test(_0x47f1f1)) {
                  return _0x128f0f * parseInt(_0x47f1f1, 0x8);
                }
                if (_0x4628a8.test(_0x47f1f1)) {
                  return _0x128f0f * parseFloat(_0x47f1f1);
                }
                throw _0xa4c7a9(_0x47f1f1, "number", _0x3c7907);
              }(_0xa20c38, true);
            } catch (_0x5561d2) {
              if (_0x18986c && _0x987546.test(_0xa20c38)) {
                return _0xa20c38;
              }
              throw _0xa4c7a9(_0xa20c38, "value");
            }
          }
          function _0x22e440(_0x306fa2, _0x5845d9) {
            var _0x1aa682;
            var _0x1dedc8;
            do {
              if (!_0x5845d9 || "\"" !== (_0x1aa682 = _0x1ed10a()) && "'" !== _0x1aa682) {
                _0x306fa2.push([_0x1dedc8 = _0x48250e(_0x3cb31a()), _0xd2420e('to', true) ? _0x48250e(_0x3cb31a()) : _0x1dedc8]);
              } else {
                _0x306fa2.push(_0x3f15e0());
              }
            } while (_0xd2420e(',', true));
            _0xd2420e(';');
          }
          function _0x48250e(_0x2fad79, _0x540a2f) {
            switch (_0x2fad79) {
              case 'max':
              case "MAX":
              case "Max":
                return 0x1fffffff;
              case '0':
                return 0x0;
            }
            if (!_0x540a2f && '-' === _0x2fad79.charAt(0x0)) {
              throw _0xa4c7a9(_0x2fad79, 'id');
            }
            if (_0x577352.test(_0x2fad79)) {
              return parseInt(_0x2fad79, 0xa);
            }
            if (_0x46c1a0.test(_0x2fad79)) {
              return parseInt(_0x2fad79, 0x10);
            }
            if (_0xad0585.test(_0x2fad79)) {
              return parseInt(_0x2fad79, 0x8);
            }
            throw _0xa4c7a9(_0x2fad79, 'id');
          }
          function _0x5a068e() {
            if (undefined !== _0xbad121) {
              throw _0xa4c7a9("package");
            }
            _0xbad121 = _0x3cb31a();
            if (!_0x987546.test(_0xbad121)) {
              throw _0xa4c7a9(_0xbad121, "name");
            }
            _0x553f52 = _0x553f52.define(_0xbad121);
            _0xd2420e(';');
          }
          function _0x5064e2() {
            var _0xa43c45;
            var _0x3dceab = _0x1ed10a();
            switch (_0x3dceab) {
              case 'weak':
                _0xa43c45 = _0x1b8a26 || (_0x1b8a26 = []);
                _0x3cb31a();
                break;
              case "public":
                _0x3cb31a();
              default:
                _0xa43c45 = _0x18eb2e || (_0x18eb2e = []);
            }
            _0x3dceab = _0x3f15e0();
            _0xd2420e(';');
            _0xa43c45.push(_0x3dceab);
          }
          function _0x200ac3() {
            _0xd2420e('=');
            _0x1f5884 = _0x3f15e0();
            if (!(_0x41442f = 'proto3' === _0x1f5884) && "proto2" !== _0x1f5884) {
              throw _0xa4c7a9(_0x1f5884, "syntax");
            }
            _0xd2420e(';');
          }
          function _0xe99b6c(_0x11e762, _0x2a800d) {
            switch (_0x2a800d) {
              case "option":
                _0x2720e4(_0x11e762, _0x2a800d);
                _0xd2420e(';');
                return true;
              case 'message':
                (function (_0x2f9d87, _0x16877a) {
                  if (!_0x30c2f1.test(_0x16877a = _0x3cb31a())) {
                    throw _0xa4c7a9(_0x16877a, "type name");
                  }
                  var _0x3d3087 = new _0x1105aa(_0x16877a);
                  _0xbf3bb2(_0x3d3087, function (_0x37651e) {
                    if (!_0xe99b6c(_0x3d3087, _0x37651e)) {
                      switch (_0x37651e) {
                        case "map":
                          !function (_0x5500ed) {
                            _0xd2420e('<');
                            var _0x4b10c2 = _0x3cb31a();
                            if (undefined === _0x2cc26f.mapKey[_0x4b10c2]) {
                              throw _0xa4c7a9(_0x4b10c2, "type");
                            }
                            _0xd2420e(',');
                            var _0x545de3 = _0x3cb31a();
                            if (!_0x987546.test(_0x545de3)) {
                              throw _0xa4c7a9(_0x545de3, "type");
                            }
                            _0xd2420e('>');
                            var _0x45687e = _0x3cb31a();
                            if (!_0x30c2f1.test(_0x45687e)) {
                              throw _0xa4c7a9(_0x45687e, "name");
                            }
                            _0xd2420e('=');
                            var _0x17b5eb = new _0xe8fabd(_0x44f84b(_0x45687e), _0x48250e(_0x3cb31a()), _0x4b10c2, _0x545de3);
                            _0xbf3bb2(_0x17b5eb, function (_0x58147c) {
                              if ("option" !== _0x58147c) {
                                throw _0xa4c7a9(_0x58147c);
                              }
                              _0x2720e4(_0x17b5eb, _0x58147c);
                              _0xd2420e(';');
                            }, function () {
                              _0x55e964(_0x17b5eb);
                            });
                            _0x5500ed.add(_0x17b5eb);
                          }(_0x3d3087);
                          break;
                        case "required":
                        case "repeated":
                          _0x58ff00(_0x3d3087, _0x37651e);
                          break;
                        case 'optional':
                          _0x58ff00(_0x3d3087, _0x41442f ? "proto3_optional" : 'optional');
                          break;
                        case 'oneof':
                          !function (_0x2e6edf, _0x2cd96f) {
                            if (!_0x30c2f1.test(_0x2cd96f = _0x3cb31a())) {
                              throw _0xa4c7a9(_0x2cd96f, "name");
                            }
                            var _0x4f3f1d = new _0x11c49d(_0x44f84b(_0x2cd96f));
                            _0xbf3bb2(_0x4f3f1d, function (_0xd6f4a) {
                              if ("option" === _0xd6f4a) {
                                _0x2720e4(_0x4f3f1d, _0xd6f4a);
                                _0xd2420e(';');
                              } else {
                                _0x1cd59a(_0xd6f4a);
                                _0x58ff00(_0x4f3f1d, "optional");
                              }
                            });
                            _0x2e6edf.add(_0x4f3f1d);
                          }(_0x3d3087, _0x37651e);
                          break;
                        case "extensions":
                          _0x22e440(_0x3d3087.extensions || (_0x3d3087.extensions = []));
                          break;
                        case "reserved":
                          _0x22e440(_0x3d3087.reserved || (_0x3d3087.reserved = []), true);
                          break;
                        default:
                          if (!_0x41442f || !_0x987546.test(_0x37651e)) {
                            throw _0xa4c7a9(_0x37651e);
                          }
                          _0x1cd59a(_0x37651e);
                          _0x58ff00(_0x3d3087, "optional");
                      }
                    }
                  });
                  _0x2f9d87.add(_0x3d3087);
                })(_0x11e762, _0x2a800d);
                return true;
              case 'enum':
                (function (_0x59ccc7, _0x492eed) {
                  if (!_0x30c2f1.test(_0x492eed = _0x3cb31a())) {
                    throw _0xa4c7a9(_0x492eed, "name");
                  }
                  var _0x2c6f18 = new _0x2a2c0d(_0x492eed);
                  _0xbf3bb2(_0x2c6f18, function (_0x292f55) {
                    switch (_0x292f55) {
                      case "option":
                        _0x2720e4(_0x2c6f18, _0x292f55);
                        _0xd2420e(';');
                        break;
                      case "reserved":
                        _0x22e440(_0x2c6f18.reserved || (_0x2c6f18.reserved = []), true);
                        break;
                      default:
                        !function (_0x4c8308, _0x1a08f4) {
                          if (!_0x30c2f1.test(_0x1a08f4)) {
                            throw _0xa4c7a9(_0x1a08f4, "name");
                          }
                          _0xd2420e('=');
                          var _0x360e44 = _0x48250e(_0x3cb31a(), true);
                          var _0x25641b = {};
                          _0xbf3bb2(_0x25641b, function (_0x3042e1) {
                            if ("option" !== _0x3042e1) {
                              throw _0xa4c7a9(_0x3042e1);
                            }
                            _0x2720e4(_0x25641b, _0x3042e1);
                            _0xd2420e(';');
                          }, function () {
                            _0x55e964(_0x25641b);
                          });
                          _0x4c8308.add(_0x1a08f4, _0x360e44, _0x25641b.comment);
                        }(_0x2c6f18, _0x292f55);
                    }
                  });
                  _0x59ccc7.add(_0x2c6f18);
                })(_0x11e762, _0x2a800d);
                return true;
              case "service":
                (function (_0xf3b9c2, _0x4b21e9) {
                  if (!_0x30c2f1.test(_0x4b21e9 = _0x3cb31a())) {
                    throw _0xa4c7a9(_0x4b21e9, "service name");
                  }
                  var _0xcac0b7 = new _0x1b54f8(_0x4b21e9);
                  _0xbf3bb2(_0xcac0b7, function (_0x5634d3) {
                    if (!_0xe99b6c(_0xcac0b7, _0x5634d3)) {
                      if ("rpc" !== _0x5634d3) {
                        throw _0xa4c7a9(_0x5634d3);
                      }
                      !function (_0x32fd0e, _0x4d3216) {
                        var _0x2e2cd1 = _0x133726();
                        var _0x29a54d = _0x4d3216;
                        if (!_0x30c2f1.test(_0x4d3216 = _0x3cb31a())) {
                          throw _0xa4c7a9(_0x4d3216, "name");
                        }
                        var _0x49e97;
                        var _0x45515a;
                        var _0x5537bb;
                        var _0x4544ed;
                        var _0x19250d = _0x4d3216;
                        _0xd2420e('(');
                        if (_0xd2420e("stream", true)) {
                          _0x45515a = true;
                        }
                        if (!_0x987546.test(_0x4d3216 = _0x3cb31a())) {
                          throw _0xa4c7a9(_0x4d3216);
                        }
                        _0x49e97 = _0x4d3216;
                        _0xd2420e(')');
                        _0xd2420e('returns');
                        _0xd2420e('(');
                        if (_0xd2420e("stream", true)) {
                          _0x4544ed = true;
                        }
                        if (!_0x987546.test(_0x4d3216 = _0x3cb31a())) {
                          throw _0xa4c7a9(_0x4d3216);
                        }
                        _0x5537bb = _0x4d3216;
                        _0xd2420e(')');
                        var _0x2e926e = new _0x15db22(_0x19250d, _0x29a54d, _0x49e97, _0x5537bb, _0x45515a, _0x4544ed);
                        _0x2e926e.comment = _0x2e2cd1;
                        _0xbf3bb2(_0x2e926e, function (_0xd32fe5) {
                          if ("option" !== _0xd32fe5) {
                            throw _0xa4c7a9(_0xd32fe5);
                          }
                          _0x2720e4(_0x2e926e, _0xd32fe5);
                          _0xd2420e(';');
                        });
                        _0x32fd0e.add(_0x2e926e);
                      }(_0xcac0b7, _0x5634d3);
                    }
                  });
                  _0xf3b9c2.add(_0xcac0b7);
                })(_0x11e762, _0x2a800d);
                return true;
              case "extend":
                (function (_0xd6021, _0x248879) {
                  if (!_0x987546.test(_0x248879 = _0x3cb31a())) {
                    throw _0xa4c7a9(_0x248879, "reference");
                  }
                  var _0xf6f8 = _0x248879;
                  _0xbf3bb2(null, function (_0x583967) {
                    switch (_0x583967) {
                      case "required":
                      case "repeated":
                        _0x58ff00(_0xd6021, _0x583967, _0xf6f8);
                        break;
                      case "optional":
                        _0x58ff00(_0xd6021, _0x41442f ? "proto3_optional" : "optional", _0xf6f8);
                        break;
                      default:
                        if (!_0x41442f || !_0x987546.test(_0x583967)) {
                          throw _0xa4c7a9(_0x583967);
                        }
                        _0x1cd59a(_0x583967);
                        _0x58ff00(_0xd6021, 'optional', _0xf6f8);
                    }
                  });
                })(_0x11e762, _0x2a800d);
                return true;
            }
            return false;
          }
          function _0xbf3bb2(_0x52f8bd, _0x26457b, _0x11f42a) {
            var _0x21b4aa = _0x43fe1b.line;
            if (_0x52f8bd) {
              if ("string" != typeof _0x52f8bd.comment) {
                _0x52f8bd.comment = _0x133726();
              }
              _0x52f8bd.filename = _0x5c699a.filename;
            }
            if (_0xd2420e('{', true)) {
              for (var _0x1420aa; '}' !== (_0x1420aa = _0x3cb31a());) {
                _0x26457b(_0x1420aa);
              }
              _0xd2420e(';', true);
            } else {
              if (_0x11f42a) {
                _0x11f42a();
              }
              _0xd2420e(';');
              if (_0x52f8bd && ('string' != typeof _0x52f8bd.comment || _0x3c9b5f)) {
                _0x52f8bd.comment = _0x133726(_0x21b4aa) || _0x52f8bd.comment;
              }
            }
          }
          function _0x58ff00(_0x5afa7e, _0xab938, _0x5cc18d) {
            var _0x549b8f = _0x3cb31a();
            if ("group" !== _0x549b8f) {
              if (!_0x987546.test(_0x549b8f)) {
                throw _0xa4c7a9(_0x549b8f, 'type');
              }
              var _0x3fe323 = _0x3cb31a();
              if (!_0x30c2f1.test(_0x3fe323)) {
                throw _0xa4c7a9(_0x3fe323, "name");
              }
              _0x3fe323 = _0x44f84b(_0x3fe323);
              _0xd2420e('=');
              var _0x639ea8 = new _0x3f7755(_0x3fe323, _0x48250e(_0x3cb31a()), _0x549b8f, _0xab938, _0x5cc18d);
              _0xbf3bb2(_0x639ea8, function (_0x546f6e) {
                if ("option" !== _0x546f6e) {
                  throw _0xa4c7a9(_0x546f6e);
                }
                _0x2720e4(_0x639ea8, _0x546f6e);
                _0xd2420e(';');
              }, function () {
                _0x55e964(_0x639ea8);
              });
              if ("proto3_optional" === _0xab938) {
                var _0x55689e = new _0x11c49d('_' + _0x3fe323);
                _0x639ea8.setOption('proto3_optional', true);
                _0x55689e.add(_0x639ea8);
                _0x5afa7e.add(_0x55689e);
              } else {
                _0x5afa7e.add(_0x639ea8);
              }
              if (!(_0x41442f || !_0x639ea8.repeated || undefined === _0x2cc26f.packed[_0x549b8f] && undefined !== _0x2cc26f.basic[_0x549b8f])) {
                _0x639ea8.setOption('packed', false, true);
              }
            } else {
              !function (_0x523180, _0x545f7e) {
                var _0x39b940 = _0x3cb31a();
                if (!_0x30c2f1.test(_0x39b940)) {
                  throw _0xa4c7a9(_0x39b940, 'name');
                }
                var _0x4b5005 = _0x146701.lcFirst(_0x39b940);
                if (_0x39b940 === _0x4b5005) {
                  _0x39b940 = _0x146701.ucFirst(_0x39b940);
                }
                _0xd2420e('=');
                var _0x56fd48 = _0x48250e(_0x3cb31a());
                var _0x239773 = new _0x1105aa(_0x39b940);
                _0x239773.group = true;
                var _0x153bc4 = new _0x3f7755(_0x4b5005, _0x56fd48, _0x39b940, _0x545f7e);
                _0x153bc4.filename = _0x5c699a.filename;
                _0xbf3bb2(_0x239773, function (_0x57617a) {
                  switch (_0x57617a) {
                    case "option":
                      _0x2720e4(_0x239773, _0x57617a);
                      _0xd2420e(';');
                      break;
                    case "required":
                    case "repeated":
                      _0x58ff00(_0x239773, _0x57617a);
                      break;
                    case "optional":
                      _0x58ff00(_0x239773, _0x41442f ? "proto3_optional" : "optional");
                      break;
                    default:
                      throw _0xa4c7a9(_0x57617a);
                  }
                });
                _0x523180.add(_0x239773).add(_0x153bc4);
              }(_0x5afa7e, _0xab938);
            }
          }
          function _0x2720e4(_0x189254, _0x346f5d) {
            var _0x24ea08 = _0xd2420e('(', true);
            if (!_0x987546.test(_0x346f5d = _0x3cb31a())) {
              throw _0xa4c7a9(_0x346f5d, "name");
            }
            var _0x53b183;
            var _0x1cbbc4 = _0x346f5d;
            var _0x1c1b80 = _0x1cbbc4;
            if (_0x24ea08) {
              _0xd2420e(')');
              _0x1c1b80 = _0x1cbbc4 = '(' + _0x1cbbc4 + ')';
              _0x346f5d = _0x1ed10a();
              if (_0x5cfe92.test(_0x346f5d)) {
                _0x53b183 = _0x346f5d.substr(0x1);
                _0x1cbbc4 += _0x346f5d;
                _0x3cb31a();
              }
            }
            _0xd2420e('=');
            (function (_0x598bfb, _0x432231, _0xe11be3, _0x548da7) {
              if (_0x598bfb.setParsedOption) {
                _0x598bfb.setParsedOption(_0x432231, _0xe11be3, _0x548da7);
              }
            })(_0x189254, _0x1c1b80, _0x2b2ada(_0x189254, _0x1cbbc4), _0x53b183);
          }
          function _0x2b2ada(_0x2e2cbb, _0x28d1fe) {
            if (_0xd2420e('{', true)) {
              for (var _0x35a24b = {}; !_0xd2420e('}', true);) {
                if (!_0x30c2f1.test(_0x363ab9 = _0x3cb31a())) {
                  throw _0xa4c7a9(_0x363ab9, "name");
                }
                var _0x46c034;
                var _0x9a15d6 = _0x363ab9;
                if ('{' === _0x1ed10a()) {
                  _0x46c034 = _0x2b2ada(_0x2e2cbb, _0x28d1fe + '.' + _0x363ab9);
                } else {
                  _0xd2420e(':');
                  if ('{' === _0x1ed10a()) {
                    _0x46c034 = _0x2b2ada(_0x2e2cbb, _0x28d1fe + '.' + _0x363ab9);
                  } else {
                    _0x46c034 = _0x3b6d13(true);
                    _0x5905e3(_0x2e2cbb, _0x28d1fe + '.' + _0x363ab9, _0x46c034);
                  }
                }
                var _0x160922 = _0x35a24b[_0x9a15d6];
                if (_0x160922) {
                  _0x46c034 = [].concat(_0x160922).concat(_0x46c034);
                }
                _0x35a24b[_0x9a15d6] = _0x46c034;
                _0xd2420e(',', true);
              }
              return _0x35a24b;
            }
            var _0x4308d4 = _0x3b6d13(true);
            _0x5905e3(_0x2e2cbb, _0x28d1fe, _0x4308d4);
            return _0x4308d4;
          }
          function _0x5905e3(_0x2a3190, _0x1d5b34, _0x54b93b) {
            if (_0x2a3190.setOption) {
              _0x2a3190.setOption(_0x1d5b34, _0x54b93b);
            }
          }
          function _0x55e964(_0x875081) {
            if (_0xd2420e('[', true)) {
              do {
                _0x2720e4(_0x875081, 'option');
              } while (_0xd2420e(',', true));
              _0xd2420e(']');
            }
            return _0x875081;
          }
          for (; null !== (_0x363ab9 = _0x3cb31a());) {
            switch (_0x363ab9) {
              case "package":
                if (!_0x2a7420) {
                  throw _0xa4c7a9(_0x363ab9);
                }
                _0x5a068e();
                break;
              case "import":
                if (!_0x2a7420) {
                  throw _0xa4c7a9(_0x363ab9);
                }
                _0x5064e2();
                break;
              case "syntax":
                if (!_0x2a7420) {
                  throw _0xa4c7a9(_0x363ab9);
                }
                _0x200ac3();
                break;
              case "option":
                _0x2720e4(_0x553f52, _0x363ab9);
                _0xd2420e(';');
                break;
              default:
                if (_0xe99b6c(_0x553f52, _0x363ab9)) {
                  _0x2a7420 = false;
                  continue;
                }
                throw _0xa4c7a9(_0x363ab9);
            }
          }
          _0x5c699a.filename = null;
          return {
            'package': _0xbad121,
            'imports': _0x18eb2e,
            'weakImports': _0x1b8a26,
            'syntax': _0x1f5884,
            'root': _0x2e5b7c
          };
        }
        _0x3693ef.exports;
      }, function () {
        return {
          './tokenize': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          './root': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          './type': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './field': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './mapfield': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './oneof': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './service': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/service.js',
          './method': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          './types': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x3a1ca5.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/common.js", function (_0x1ad477, _0x1099c5, _0x41a0af, _0x52ba5c, _0x4b6d72) {
        _0x41a0af.exports = _0x2799dc;
        var _0x50e2f5;
        var _0x2404f6 = /\/|\./;
        function _0x2799dc(_0x183211, _0x576a99) {
          if (!_0x2404f6.test(_0x183211)) {
            _0x183211 = "google/protobuf/" + _0x183211 + ".proto";
            _0x576a99 = {
              'nested': {
                'google': {
                  'nested': {
                    'protobuf': {
                      'nested': _0x576a99
                    }
                  }
                }
              }
            };
          }
          _0x2799dc[_0x183211] = _0x576a99;
        }
        _0x2799dc("any", {
          'Any': {
            'fields': {
              'type_url': {
                'type': "string",
                'id': 0x1
              },
              'value': {
                'type': 'bytes',
                'id': 0x2
              }
            }
          }
        });
        _0x2799dc("duration", {
          'Duration': _0x50e2f5 = {
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
        _0x2799dc('timestamp', {
          'Timestamp': _0x50e2f5
        });
        _0x2799dc("empty", {
          'Empty': {
            'fields': {}
          }
        });
        _0x2799dc("struct", {
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
                'oneof': ["nullValue", "numberValue", "stringValue", 'boolValue', "structValue", 'listValue']
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
        _0x2799dc("wrappers", {
          'DoubleValue': {
            'fields': {
              'value': {
                'type': 'double',
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
                'type': 'bytes',
                'id': 0x1
              }
            }
          }
        });
        _0x2799dc("field_mask", {
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
        _0x2799dc.get = function (_0x224094) {
          return _0x2799dc[_0x224094] || null;
        };
        _0x41a0af.exports;
      }, {});
      var _0x46aada;
      _0x3a1ca5.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/index.js', function (_0x574e65, _0x10b470, _0x5a0d42, _0x160efb, _0x38be48) {
        var _0x459c1c = _0x5a0d42.exports = _0x10b470('./index-light');
        _0x459c1c.build = "full";
        _0x459c1c.tokenize = _0x10b470("./tokenize");
        _0x459c1c.parse = _0x10b470("./parse");
        _0x459c1c.common = _0x10b470("./common");
        _0x459c1c.Root._configure(_0x459c1c.Type, _0x459c1c.parse, _0x459c1c.common);
        _0x5a0d42.exports;
      }, function () {
        return {
          './index-light': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js",
          './tokenize': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          './parse': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/parse.js",
          './common': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/common.js"
        };
      });
      _0x3a1ca5.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/index.js', function (_0x37e089, _0x3df371, _0x1862df, _0x23a9e3, _0x13e4bf) {
        _0x1862df.exports = _0x3df371("./src/index");
        _0x46aada = _0x1862df.exports;
      }, function () {
        return {
          './src/index': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/index.js'
        };
      });
      _0x3a1ca5.require('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/index.js');
      _0xec9bd2._RF.push({}, "f34139liEtOX7eeljN8Cz8w", "index", undefined);
      _0xec9bd2._RF.pop();
      var _0x3a0561;
      _0x3a1ca5.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/minimal.js', function (_0x3a1f7b, _0x1c7af6, _0x46d367, _0x303d74, _0x5988b9) {
        _0x46d367.exports = _0x1c7af6('./src/index-minimal');
        _0x46d367.exports;
      }, function () {
        return {
          './src/index-minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js"
        };
      });
      var _0x444124;
      var _0xc5fc10;
      var _0x54e290;
      var _0x437f4f;
      _0x3a1ca5.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/assets/Script/Proto/tlpProto.js', function (_0x78b364, _0x43bec1, _0x571da8, _0x5ca943, _0x58d3af) {
        var _0x425819;
        var _0x41d732 = _0x43bec1("protobufjs/minimal");
        var _0x40d7df = _0x41d732.Reader;
        var _0x3c60c4 = _0x41d732.Writer;
        var _0x17d41e = _0x41d732.util;
        var _0x32aff5 = _0x41d732.roots['default'] || (_0x41d732.roots["default"] = {});
        (_0x425819 = {
          CColumn: function () {
            function _0x464eda(_0x40337a) {
              this.Col = [];
              if (_0x40337a) {
                var _0x21feb5 = Object.keys(_0x40337a);
                for (var _0x46dbd3 = 0x0; _0x46dbd3 < _0x21feb5.length; ++_0x46dbd3) {
                  if (null != _0x40337a[_0x21feb5[_0x46dbd3]]) {
                    this[_0x21feb5[_0x46dbd3]] = _0x40337a[_0x21feb5[_0x46dbd3]];
                  }
                }
              }
            }
            _0x464eda.prototype.Col = _0x17d41e.emptyArray;
            _0x464eda.create = function (_0x47da9c) {
              return new _0x464eda(_0x47da9c);
            };
            _0x464eda.encode = function (_0x408336, _0x494f02) {
              if (!_0x494f02) {
                _0x494f02 = _0x3c60c4.create();
              }
              if (null != _0x408336.Col && _0x408336.Col.length) {
                for (var _0x421578 = 0x0; _0x421578 < _0x408336.Col.length; ++_0x421578) {
                  _0x32aff5.tlpProto.CSymbol.encode(_0x408336.Col[_0x421578], _0x494f02.uint32(0xa).fork()).ldelim();
                }
              }
              return _0x494f02;
            };
            _0x464eda.encodeDelimited = function (_0x4b31c2, _0x5cc041) {
              return this.encode(_0x4b31c2, _0x5cc041).ldelim();
            };
            _0x464eda.decode = function (_0x3bf9ce, _0x739df6) {
              if (!(_0x3bf9ce instanceof _0x40d7df)) {
                _0x3bf9ce = _0x40d7df.create(_0x3bf9ce);
              }
              var _0x28d87a = undefined === _0x739df6 ? _0x3bf9ce.len : _0x3bf9ce.pos + _0x739df6;
              for (var _0x3c6c0a = new _0x32aff5.tlpProto.CColumn(); _0x3bf9ce.pos < _0x28d87a;) {
                var _0x394f58 = _0x3bf9ce.uint32();
                switch (_0x394f58 >>> 0x3) {
                  case 0x1:
                    if (!(_0x3c6c0a.Col && _0x3c6c0a.Col.length)) {
                      _0x3c6c0a.Col = [];
                    }
                    _0x3c6c0a.Col.push(_0x32aff5.tlpProto.CSymbol.decode(_0x3bf9ce, _0x3bf9ce.uint32()));
                    break;
                  default:
                    _0x3bf9ce.skipType(0x7 & _0x394f58);
                }
              }
              return _0x3c6c0a;
            };
            _0x464eda.decodeDelimited = function (_0x613151) {
              if (!(_0x613151 instanceof _0x40d7df)) {
                _0x613151 = new _0x40d7df(_0x613151);
              }
              return this.decode(_0x613151, _0x613151.uint32());
            };
            _0x464eda.verify = function (_0x53a702) {
              if ('object' != typeof _0x53a702 || null === _0x53a702) {
                return "object expected";
              }
              if (null != _0x53a702.Col && _0x53a702.hasOwnProperty("Col")) {
                if (!Array.isArray(_0x53a702.Col)) {
                  return "Col: array expected";
                }
                for (var _0x4c266c = 0x0; _0x4c266c < _0x53a702.Col.length; ++_0x4c266c) {
                  var _0x165ef2 = _0x32aff5.tlpProto.CSymbol.verify(_0x53a702.Col[_0x4c266c]);
                  if (_0x165ef2) {
                    return "Col." + _0x165ef2;
                  }
                }
              }
              return null;
            };
            _0x464eda.fromObject = function (_0xf10622) {
              if (_0xf10622 instanceof _0x32aff5.tlpProto.CColumn) {
                return _0xf10622;
              }
              var _0x7e2bee = new _0x32aff5.tlpProto.CColumn();
              if (_0xf10622.Col) {
                if (!Array.isArray(_0xf10622.Col)) {
                  throw TypeError(".tlpProto.CColumn.Col: array expected");
                }
                _0x7e2bee.Col = [];
                for (var _0x492b3f = 0x0; _0x492b3f < _0xf10622.Col.length; ++_0x492b3f) {
                  if ("object" != typeof _0xf10622.Col[_0x492b3f]) {
                    throw TypeError(".tlpProto.CColumn.Col: object expected");
                  }
                  _0x7e2bee.Col[_0x492b3f] = _0x32aff5.tlpProto.CSymbol.fromObject(_0xf10622.Col[_0x492b3f]);
                }
              }
              return _0x7e2bee;
            };
            _0x464eda.toObject = function (_0x20ec54, _0x56d430) {
              if (!_0x56d430) {
                _0x56d430 = {};
              }
              var _0x444232 = {};
              if (_0x56d430.arrays || _0x56d430.defaults) {
                _0x444232.Col = [];
              }
              if (_0x20ec54.Col && _0x20ec54.Col.length) {
                _0x444232.Col = [];
                for (var _0x51004b = 0x0; _0x51004b < _0x20ec54.Col.length; ++_0x51004b) {
                  _0x444232.Col[_0x51004b] = _0x32aff5.tlpProto.CSymbol.toObject(_0x20ec54.Col[_0x51004b], _0x56d430);
                }
              }
              return _0x444232;
            };
            _0x464eda.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x41d732.util.toJSONOptions);
            };
            return _0x464eda;
          }(),
          "CSymbol": function () {
            function _0x1f9fdd(_0x3f4e99) {
              if (_0x3f4e99) {
                var _0x492632 = Object.keys(_0x3f4e99);
                for (var _0x5578db = 0x0; _0x5578db < _0x492632.length; ++_0x5578db) {
                  if (null != _0x3f4e99[_0x492632[_0x5578db]]) {
                    this[_0x492632[_0x5578db]] = _0x3f4e99[_0x492632[_0x5578db]];
                  }
                }
              }
            }
            _0x1f9fdd.prototype.Symbol = 0x0;
            _0x1f9fdd.prototype.JPState = 0x0;
            _0x1f9fdd.prototype.JPMult = 0x0;
            _0x1f9fdd.prototype.Number = 0x0;
            _0x1f9fdd.create = function (_0xb82f1) {
              return new _0x1f9fdd(_0xb82f1);
            };
            _0x1f9fdd.encode = function (_0xb7161f, _0x4f3f67) {
              if (!_0x4f3f67) {
                _0x4f3f67 = _0x3c60c4.create();
              }
              if (null != _0xb7161f.Symbol && Object.hasOwnProperty.call(_0xb7161f, "Symbol")) {
                _0x4f3f67.uint32(0x8).int32(_0xb7161f.Symbol);
              }
              if (null != _0xb7161f.JPState && Object.hasOwnProperty.call(_0xb7161f, "JPState")) {
                _0x4f3f67.uint32(0x10).int32(_0xb7161f.JPState);
              }
              if (null != _0xb7161f.JPMult && Object.hasOwnProperty.call(_0xb7161f, "JPMult")) {
                _0x4f3f67.uint32(0x18).int32(_0xb7161f.JPMult);
              }
              if (null != _0xb7161f.Number && Object.hasOwnProperty.call(_0xb7161f, "Number")) {
                _0x4f3f67.uint32(0x21).double(_0xb7161f.Number);
              }
              return _0x4f3f67;
            };
            _0x1f9fdd.encodeDelimited = function (_0x293194, _0x2e532a) {
              return this.encode(_0x293194, _0x2e532a).ldelim();
            };
            _0x1f9fdd.decode = function (_0x8d6b3c, _0x3d2261) {
              if (!(_0x8d6b3c instanceof _0x40d7df)) {
                _0x8d6b3c = _0x40d7df.create(_0x8d6b3c);
              }
              var _0x47a7ac = undefined === _0x3d2261 ? _0x8d6b3c.len : _0x8d6b3c.pos + _0x3d2261;
              for (var _0x45ac79 = new _0x32aff5.tlpProto.CSymbol(); _0x8d6b3c.pos < _0x47a7ac;) {
                var _0x31fe2f = _0x8d6b3c.uint32();
                switch (_0x31fe2f >>> 0x3) {
                  case 0x1:
                    _0x45ac79.Symbol = _0x8d6b3c.int32();
                    break;
                  case 0x2:
                    _0x45ac79.JPState = _0x8d6b3c.int32();
                    break;
                  case 0x3:
                    _0x45ac79.JPMult = _0x8d6b3c.int32();
                    break;
                  case 0x4:
                    _0x45ac79.Number = _0x8d6b3c.double();
                    break;
                  default:
                    _0x8d6b3c.skipType(0x7 & _0x31fe2f);
                }
              }
              return _0x45ac79;
            };
            _0x1f9fdd.decodeDelimited = function (_0x3a9f57) {
              if (!(_0x3a9f57 instanceof _0x40d7df)) {
                _0x3a9f57 = new _0x40d7df(_0x3a9f57);
              }
              return this.decode(_0x3a9f57, _0x3a9f57.uint32());
            };
            _0x1f9fdd.verify = function (_0x5a9940) {
              return "object" != typeof _0x5a9940 || null === _0x5a9940 ? "object expected" : null != _0x5a9940.Symbol && _0x5a9940.hasOwnProperty('Symbol') && !_0x17d41e.isInteger(_0x5a9940.Symbol) ? "Symbol: integer expected" : null != _0x5a9940.JPState && _0x5a9940.hasOwnProperty("JPState") && !_0x17d41e.isInteger(_0x5a9940.JPState) ? "JPState: integer expected" : null != _0x5a9940.JPMult && _0x5a9940.hasOwnProperty("JPMult") && !_0x17d41e.isInteger(_0x5a9940.JPMult) ? "JPMult: integer expected" : null != _0x5a9940.Number && _0x5a9940.hasOwnProperty('Number') && "number" != typeof _0x5a9940.Number ? "Number: number expected" : null;
            };
            _0x1f9fdd.fromObject = function (_0x6552ae) {
              if (_0x6552ae instanceof _0x32aff5.tlpProto.CSymbol) {
                return _0x6552ae;
              }
              var _0x922027 = new _0x32aff5.tlpProto.CSymbol();
              if (null != _0x6552ae.Symbol) {
                _0x922027.Symbol = 0x0 | _0x6552ae.Symbol;
              }
              if (null != _0x6552ae.JPState) {
                _0x922027.JPState = 0x0 | _0x6552ae.JPState;
              }
              if (null != _0x6552ae.JPMult) {
                _0x922027.JPMult = 0x0 | _0x6552ae.JPMult;
              }
              if (null != _0x6552ae.Number) {
                _0x922027.Number = Number(_0x6552ae.Number);
              }
              return _0x922027;
            };
            _0x1f9fdd.toObject = function (_0x41892d, _0x3c3666) {
              if (!_0x3c3666) {
                _0x3c3666 = {};
              }
              var _0x54a6d3 = {};
              if (_0x3c3666.defaults) {
                _0x54a6d3.Symbol = 0x0;
                _0x54a6d3.JPState = 0x0;
                _0x54a6d3.JPMult = 0x0;
                _0x54a6d3.Number = 0x0;
              }
              if (null != _0x41892d.Symbol && _0x41892d.hasOwnProperty("Symbol")) {
                _0x54a6d3.Symbol = _0x41892d.Symbol;
              }
              if (null != _0x41892d.JPState && _0x41892d.hasOwnProperty("JPState")) {
                _0x54a6d3.JPState = _0x41892d.JPState;
              }
              if (null != _0x41892d.JPMult && _0x41892d.hasOwnProperty("JPMult")) {
                _0x54a6d3.JPMult = _0x41892d.JPMult;
              }
              if (null != _0x41892d.Number && _0x41892d.hasOwnProperty("Number")) {
                _0x54a6d3.Number = _0x3c3666.json && !isFinite(_0x41892d.Number) ? String(_0x41892d.Number) : _0x41892d.Number;
              }
              return _0x54a6d3;
            };
            _0x1f9fdd.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x41d732.util.toJSONOptions);
            };
            return _0x1f9fdd;
          }(),
          AwardData: function () {
            function _0x1e0449(_0x3071bd) {
              if (_0x3071bd) {
                var _0x1d52b4 = Object.keys(_0x3071bd);
                for (var _0x271beb = 0x0; _0x271beb < _0x1d52b4.length; ++_0x271beb) {
                  if (null != _0x3071bd[_0x1d52b4[_0x271beb]]) {
                    this[_0x1d52b4[_0x271beb]] = _0x3071bd[_0x1d52b4[_0x271beb]];
                  }
                }
              }
            }
            _0x1e0449.prototype.Symbol = 0x0;
            _0x1e0449.prototype.Count = 0x0;
            _0x1e0449.prototype.Line = 0x0;
            _0x1e0449.prototype.Win = 0x0;
            _0x1e0449.create = function (_0x3c2a23) {
              return new _0x1e0449(_0x3c2a23);
            };
            _0x1e0449.encode = function (_0x3f7557, _0x1ccd5e) {
              if (!_0x1ccd5e) {
                _0x1ccd5e = _0x3c60c4.create();
              }
              if (null != _0x3f7557.Symbol && Object.hasOwnProperty.call(_0x3f7557, "Symbol")) {
                _0x1ccd5e.uint32(0x8).int32(_0x3f7557.Symbol);
              }
              if (null != _0x3f7557.Count && Object.hasOwnProperty.call(_0x3f7557, "Count")) {
                _0x1ccd5e.uint32(0x10).int32(_0x3f7557.Count);
              }
              if (null != _0x3f7557.Line && Object.hasOwnProperty.call(_0x3f7557, "Line")) {
                _0x1ccd5e.uint32(0x18).int32(_0x3f7557.Line);
              }
              if (null != _0x3f7557.Win && Object.hasOwnProperty.call(_0x3f7557, 'Win')) {
                _0x1ccd5e.uint32(0x21).double(_0x3f7557.Win);
              }
              return _0x1ccd5e;
            };
            _0x1e0449.encodeDelimited = function (_0x3f4739, _0x52a6c8) {
              return this.encode(_0x3f4739, _0x52a6c8).ldelim();
            };
            _0x1e0449.decode = function (_0x1875f3, _0x5176cf) {
              if (!(_0x1875f3 instanceof _0x40d7df)) {
                _0x1875f3 = _0x40d7df.create(_0x1875f3);
              }
              var _0x15e535 = undefined === _0x5176cf ? _0x1875f3.len : _0x1875f3.pos + _0x5176cf;
              for (var _0x53f318 = new _0x32aff5.tlpProto.AwardData(); _0x1875f3.pos < _0x15e535;) {
                var _0x58a64a = _0x1875f3.uint32();
                switch (_0x58a64a >>> 0x3) {
                  case 0x1:
                    _0x53f318.Symbol = _0x1875f3.int32();
                    break;
                  case 0x2:
                    _0x53f318.Count = _0x1875f3.int32();
                    break;
                  case 0x3:
                    _0x53f318.Line = _0x1875f3.int32();
                    break;
                  case 0x4:
                    _0x53f318.Win = _0x1875f3.double();
                    break;
                  default:
                    _0x1875f3.skipType(0x7 & _0x58a64a);
                }
              }
              return _0x53f318;
            };
            _0x1e0449.decodeDelimited = function (_0x16fff4) {
              if (!(_0x16fff4 instanceof _0x40d7df)) {
                _0x16fff4 = new _0x40d7df(_0x16fff4);
              }
              return this.decode(_0x16fff4, _0x16fff4.uint32());
            };
            _0x1e0449.verify = function (_0x49e961) {
              return "object" != typeof _0x49e961 || null === _0x49e961 ? "object expected" : null != _0x49e961.Symbol && _0x49e961.hasOwnProperty("Symbol") && !_0x17d41e.isInteger(_0x49e961.Symbol) ? "Symbol: integer expected" : null != _0x49e961.Count && _0x49e961.hasOwnProperty("Count") && !_0x17d41e.isInteger(_0x49e961.Count) ? "Count: integer expected" : null != _0x49e961.Line && _0x49e961.hasOwnProperty('Line') && !_0x17d41e.isInteger(_0x49e961.Line) ? "Line: integer expected" : null != _0x49e961.Win && _0x49e961.hasOwnProperty("Win") && 'number' != typeof _0x49e961.Win ? "Win: number expected" : null;
            };
            _0x1e0449.fromObject = function (_0xb04421) {
              if (_0xb04421 instanceof _0x32aff5.tlpProto.AwardData) {
                return _0xb04421;
              }
              var _0x193dc5 = new _0x32aff5.tlpProto.AwardData();
              if (null != _0xb04421.Symbol) {
                _0x193dc5.Symbol = 0x0 | _0xb04421.Symbol;
              }
              if (null != _0xb04421.Count) {
                _0x193dc5.Count = 0x0 | _0xb04421.Count;
              }
              if (null != _0xb04421.Line) {
                _0x193dc5.Line = 0x0 | _0xb04421.Line;
              }
              if (null != _0xb04421.Win) {
                _0x193dc5.Win = Number(_0xb04421.Win);
              }
              return _0x193dc5;
            };
            _0x1e0449.toObject = function (_0x2e40b2, _0x2a4a33) {
              if (!_0x2a4a33) {
                _0x2a4a33 = {};
              }
              var _0x1e0124 = {};
              if (_0x2a4a33.defaults) {
                _0x1e0124.Symbol = 0x0;
                _0x1e0124.Count = 0x0;
                _0x1e0124.Line = 0x0;
                _0x1e0124.Win = 0x0;
              }
              if (null != _0x2e40b2.Symbol && _0x2e40b2.hasOwnProperty("Symbol")) {
                _0x1e0124.Symbol = _0x2e40b2.Symbol;
              }
              if (null != _0x2e40b2.Count && _0x2e40b2.hasOwnProperty('Count')) {
                _0x1e0124.Count = _0x2e40b2.Count;
              }
              if (null != _0x2e40b2.Line && _0x2e40b2.hasOwnProperty("Line")) {
                _0x1e0124.Line = _0x2e40b2.Line;
              }
              if (null != _0x2e40b2.Win && _0x2e40b2.hasOwnProperty("Win")) {
                _0x1e0124.Win = _0x2a4a33.json && !isFinite(_0x2e40b2.Win) ? String(_0x2e40b2.Win) : _0x2e40b2.Win;
              }
              return _0x1e0124;
            };
            _0x1e0449.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x41d732.util.toJSONOptions);
            };
            return _0x1e0449;
          }(),
          "FeatureEffect": function () {
            function _0x3a183b(_0x405488) {
              this.EffectPos = [];
              if (_0x405488) {
                var _0x414d83 = Object.keys(_0x405488);
                for (var _0x2dccfc = 0x0; _0x2dccfc < _0x414d83.length; ++_0x2dccfc) {
                  if (null != _0x405488[_0x414d83[_0x2dccfc]]) {
                    this[_0x414d83[_0x2dccfc]] = _0x405488[_0x414d83[_0x2dccfc]];
                  }
                }
              }
            }
            _0x3a183b.prototype.ScatterPos = 0x0;
            _0x3a183b.prototype.EffectPos = _0x17d41e.emptyArray;
            _0x3a183b.prototype.JPState = 0x0;
            _0x3a183b.prototype.Number = 0x0;
            _0x3a183b.create = function (_0x1da073) {
              return new _0x3a183b(_0x1da073);
            };
            _0x3a183b.encode = function (_0x375f0c, _0x473fda) {
              if (!_0x473fda) {
                _0x473fda = _0x3c60c4.create();
              }
              if (null != _0x375f0c.ScatterPos && Object.hasOwnProperty.call(_0x375f0c, "ScatterPos")) {
                _0x473fda.uint32(0x8).int32(_0x375f0c.ScatterPos);
              }
              if (null != _0x375f0c.EffectPos && _0x375f0c.EffectPos.length) {
                _0x473fda.uint32(0x12).fork();
                for (var _0x840e4d = 0x0; _0x840e4d < _0x375f0c.EffectPos.length; ++_0x840e4d) {
                  _0x473fda.int32(_0x375f0c.EffectPos[_0x840e4d]);
                }
                _0x473fda.ldelim();
              }
              if (null != _0x375f0c.JPState && Object.hasOwnProperty.call(_0x375f0c, 'JPState')) {
                _0x473fda.uint32(0x18).int32(_0x375f0c.JPState);
              }
              if (null != _0x375f0c.Number && Object.hasOwnProperty.call(_0x375f0c, "Number")) {
                _0x473fda.uint32(0x21).double(_0x375f0c.Number);
              }
              return _0x473fda;
            };
            _0x3a183b.encodeDelimited = function (_0x1166c5, _0x52f4ec) {
              return this.encode(_0x1166c5, _0x52f4ec).ldelim();
            };
            _0x3a183b.decode = function (_0x4a0dc4, _0x32c5d5) {
              if (!(_0x4a0dc4 instanceof _0x40d7df)) {
                _0x4a0dc4 = _0x40d7df.create(_0x4a0dc4);
              }
              var _0x33a1ab = undefined === _0x32c5d5 ? _0x4a0dc4.len : _0x4a0dc4.pos + _0x32c5d5;
              for (var _0x39e09a = new _0x32aff5.tlpProto.FeatureEffect(); _0x4a0dc4.pos < _0x33a1ab;) {
                var _0x41a84a = _0x4a0dc4.uint32();
                switch (_0x41a84a >>> 0x3) {
                  case 0x1:
                    _0x39e09a.ScatterPos = _0x4a0dc4.int32();
                    break;
                  case 0x2:
                    if (!(_0x39e09a.EffectPos && _0x39e09a.EffectPos.length)) {
                      _0x39e09a.EffectPos = [];
                    }
                    if (0x2 == (0x7 & _0x41a84a)) {
                      for (var _0xd69c0 = _0x4a0dc4.uint32() + _0x4a0dc4.pos; _0x4a0dc4.pos < _0xd69c0;) {
                        _0x39e09a.EffectPos.push(_0x4a0dc4.int32());
                      }
                    } else {
                      _0x39e09a.EffectPos.push(_0x4a0dc4.int32());
                    }
                    break;
                  case 0x3:
                    _0x39e09a.JPState = _0x4a0dc4.int32();
                    break;
                  case 0x4:
                    _0x39e09a.Number = _0x4a0dc4.double();
                    break;
                  default:
                    _0x4a0dc4.skipType(0x7 & _0x41a84a);
                }
              }
              return _0x39e09a;
            };
            _0x3a183b.decodeDelimited = function (_0xc2dc5) {
              if (!(_0xc2dc5 instanceof _0x40d7df)) {
                _0xc2dc5 = new _0x40d7df(_0xc2dc5);
              }
              return this.decode(_0xc2dc5, _0xc2dc5.uint32());
            };
            _0x3a183b.verify = function (_0x35c852) {
              if ('object' != typeof _0x35c852 || null === _0x35c852) {
                return "object expected";
              }
              if (null != _0x35c852.ScatterPos && _0x35c852.hasOwnProperty('ScatterPos') && !_0x17d41e.isInteger(_0x35c852.ScatterPos)) {
                return "ScatterPos: integer expected";
              }
              if (null != _0x35c852.EffectPos && _0x35c852.hasOwnProperty("EffectPos")) {
                if (!Array.isArray(_0x35c852.EffectPos)) {
                  return "EffectPos: array expected";
                }
                for (var _0x7e2e20 = 0x0; _0x7e2e20 < _0x35c852.EffectPos.length; ++_0x7e2e20) {
                  if (!_0x17d41e.isInteger(_0x35c852.EffectPos[_0x7e2e20])) {
                    return "EffectPos: integer[] expected";
                  }
                }
              }
              return null != _0x35c852.JPState && _0x35c852.hasOwnProperty("JPState") && !_0x17d41e.isInteger(_0x35c852.JPState) ? "JPState: integer expected" : null != _0x35c852.Number && _0x35c852.hasOwnProperty('Number') && "number" != typeof _0x35c852.Number ? "Number: number expected" : null;
            };
            _0x3a183b.fromObject = function (_0x3fe7a9) {
              if (_0x3fe7a9 instanceof _0x32aff5.tlpProto.FeatureEffect) {
                return _0x3fe7a9;
              }
              var _0x5295cd = new _0x32aff5.tlpProto.FeatureEffect();
              if (null != _0x3fe7a9.ScatterPos) {
                _0x5295cd.ScatterPos = 0x0 | _0x3fe7a9.ScatterPos;
              }
              if (_0x3fe7a9.EffectPos) {
                if (!Array.isArray(_0x3fe7a9.EffectPos)) {
                  throw TypeError(".tlpProto.FeatureEffect.EffectPos: array expected");
                }
                _0x5295cd.EffectPos = [];
                for (var _0xa35eab = 0x0; _0xa35eab < _0x3fe7a9.EffectPos.length; ++_0xa35eab) {
                  _0x5295cd.EffectPos[_0xa35eab] = 0x0 | _0x3fe7a9.EffectPos[_0xa35eab];
                }
              }
              if (null != _0x3fe7a9.JPState) {
                _0x5295cd.JPState = 0x0 | _0x3fe7a9.JPState;
              }
              if (null != _0x3fe7a9.Number) {
                _0x5295cd.Number = Number(_0x3fe7a9.Number);
              }
              return _0x5295cd;
            };
            _0x3a183b.toObject = function (_0x4666d4, _0x10702d) {
              if (!_0x10702d) {
                _0x10702d = {};
              }
              var _0x4fdaab = {};
              if (_0x10702d.arrays || _0x10702d.defaults) {
                _0x4fdaab.EffectPos = [];
              }
              if (_0x10702d.defaults) {
                _0x4fdaab.ScatterPos = 0x0;
                _0x4fdaab.JPState = 0x0;
                _0x4fdaab.Number = 0x0;
              }
              if (null != _0x4666d4.ScatterPos && _0x4666d4.hasOwnProperty('ScatterPos')) {
                _0x4fdaab.ScatterPos = _0x4666d4.ScatterPos;
              }
              if (_0x4666d4.EffectPos && _0x4666d4.EffectPos.length) {
                _0x4fdaab.EffectPos = [];
                for (var _0x537d60 = 0x0; _0x537d60 < _0x4666d4.EffectPos.length; ++_0x537d60) {
                  _0x4fdaab.EffectPos[_0x537d60] = _0x4666d4.EffectPos[_0x537d60];
                }
              }
              if (null != _0x4666d4.JPState && _0x4666d4.hasOwnProperty('JPState')) {
                _0x4fdaab.JPState = _0x4666d4.JPState;
              }
              if (null != _0x4666d4.Number && _0x4666d4.hasOwnProperty('Number')) {
                _0x4fdaab.Number = _0x10702d.json && !isFinite(_0x4666d4.Number) ? String(_0x4666d4.Number) : _0x4666d4.Number;
              }
              return _0x4fdaab;
            };
            _0x3a183b.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x41d732.util.toJSONOptions);
            };
            return _0x3a183b;
          }(),
          "RoundInfo": function () {
            function _0x2bd201(_0x529e45) {
              this.MainPlateSymbol = [];
              this.FreePlateSymbol = [];
              this.FreePlateSymbolLog = [];
              this.AwardDataVec = [];
              this.BlueData = [];
              this.RedData = [];
              this.GreenData = [];
              this.AddCrack = [];
              if (_0x529e45) {
                var _0x4f97fd = Object.keys(_0x529e45);
                for (var _0x5a600b = 0x0; _0x5a600b < _0x4f97fd.length; ++_0x5a600b) {
                  if (null != _0x529e45[_0x4f97fd[_0x5a600b]]) {
                    this[_0x4f97fd[_0x5a600b]] = _0x529e45[_0x4f97fd[_0x5a600b]];
                  }
                }
              }
            }
            _0x2bd201.prototype.MainPlateSymbol = _0x17d41e.emptyArray;
            _0x2bd201.prototype.FreePlateSymbol = _0x17d41e.emptyArray;
            _0x2bd201.prototype.FreePlateSymbolLog = _0x17d41e.emptyArray;
            _0x2bd201.prototype.AwardDataVec = _0x17d41e.emptyArray;
            _0x2bd201.prototype.AwardTypeFlag = 0x0;
            _0x2bd201.prototype.RoundWin = 0x0;
            _0x2bd201.prototype.FreeRemainRound = 0x0;
            _0x2bd201.prototype.FreeNowRound = 0x0;
            _0x2bd201.prototype.MGReelWeightResult = 0x0;
            _0x2bd201.prototype.BlueData = _0x17d41e.emptyArray;
            _0x2bd201.prototype.RedData = _0x17d41e.emptyArray;
            _0x2bd201.prototype.GreenData = _0x17d41e.emptyArray;
            _0x2bd201.prototype.AddCrack = _0x17d41e.emptyArray;
            _0x2bd201.prototype.MaxFlag = false;
            _0x2bd201.create = function (_0xee08dd) {
              return new _0x2bd201(_0xee08dd);
            };
            _0x2bd201.encode = function (_0x2c52c0, _0x205806) {
              if (!_0x205806) {
                _0x205806 = _0x3c60c4.create();
              }
              if (null != _0x2c52c0.MainPlateSymbol && _0x2c52c0.MainPlateSymbol.length) {
                for (var _0x183a02 = 0x0; _0x183a02 < _0x2c52c0.MainPlateSymbol.length; ++_0x183a02) {
                  _0x32aff5.tlpProto.Column.encode(_0x2c52c0.MainPlateSymbol[_0x183a02], _0x205806.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0x2c52c0.FreePlateSymbol && _0x2c52c0.FreePlateSymbol.length) {
                for (_0x183a02 = 0x0; _0x183a02 < _0x2c52c0.FreePlateSymbol.length; ++_0x183a02) {
                  _0x32aff5.tlpProto.CColumn.encode(_0x2c52c0.FreePlateSymbol[_0x183a02], _0x205806.uint32(0x12).fork()).ldelim();
                }
              }
              if (null != _0x2c52c0.FreePlateSymbolLog && _0x2c52c0.FreePlateSymbolLog.length) {
                for (_0x183a02 = 0x0; _0x183a02 < _0x2c52c0.FreePlateSymbolLog.length; ++_0x183a02) {
                  _0x32aff5.tlpProto.CColumn.encode(_0x2c52c0.FreePlateSymbolLog[_0x183a02], _0x205806.uint32(0x1a).fork()).ldelim();
                }
              }
              if (null != _0x2c52c0.AwardDataVec && _0x2c52c0.AwardDataVec.length) {
                for (_0x183a02 = 0x0; _0x183a02 < _0x2c52c0.AwardDataVec.length; ++_0x183a02) {
                  _0x32aff5.tlpProto.AwardData.encode(_0x2c52c0.AwardDataVec[_0x183a02], _0x205806.uint32(0x22).fork()).ldelim();
                }
              }
              if (null != _0x2c52c0.AwardTypeFlag && Object.hasOwnProperty.call(_0x2c52c0, "AwardTypeFlag")) {
                _0x205806.uint32(0x28).int32(_0x2c52c0.AwardTypeFlag);
              }
              if (null != _0x2c52c0.RoundWin && Object.hasOwnProperty.call(_0x2c52c0, "RoundWin")) {
                _0x205806.uint32(0x31).double(_0x2c52c0.RoundWin);
              }
              if (null != _0x2c52c0.FreeRemainRound && Object.hasOwnProperty.call(_0x2c52c0, 'FreeRemainRound')) {
                _0x205806.uint32(0x38).int32(_0x2c52c0.FreeRemainRound);
              }
              if (null != _0x2c52c0.FreeNowRound && Object.hasOwnProperty.call(_0x2c52c0, "FreeNowRound")) {
                _0x205806.uint32(0x40).int32(_0x2c52c0.FreeNowRound);
              }
              if (null != _0x2c52c0.MGReelWeightResult && Object.hasOwnProperty.call(_0x2c52c0, 'MGReelWeightResult')) {
                _0x205806.uint32(0x50).int32(_0x2c52c0.MGReelWeightResult);
              }
              if (null != _0x2c52c0.BlueData && _0x2c52c0.BlueData.length) {
                for (_0x183a02 = 0x0; _0x183a02 < _0x2c52c0.BlueData.length; ++_0x183a02) {
                  _0x32aff5.tlpProto.FeatureEffect.encode(_0x2c52c0.BlueData[_0x183a02], _0x205806.uint32(0x5a).fork()).ldelim();
                }
              }
              if (null != _0x2c52c0.RedData && _0x2c52c0.RedData.length) {
                for (_0x183a02 = 0x0; _0x183a02 < _0x2c52c0.RedData.length; ++_0x183a02) {
                  _0x32aff5.tlpProto.FeatureEffect.encode(_0x2c52c0.RedData[_0x183a02], _0x205806.uint32(0x62).fork()).ldelim();
                }
              }
              if (null != _0x2c52c0.GreenData && _0x2c52c0.GreenData.length) {
                for (_0x183a02 = 0x0; _0x183a02 < _0x2c52c0.GreenData.length; ++_0x183a02) {
                  _0x32aff5.tlpProto.FeatureEffect.encode(_0x2c52c0.GreenData[_0x183a02], _0x205806.uint32(0x6a).fork()).ldelim();
                }
              }
              if (null != _0x2c52c0.AddCrack && _0x2c52c0.AddCrack.length) {
                _0x205806.uint32(0x72).fork();
                for (_0x183a02 = 0x0; _0x183a02 < _0x2c52c0.AddCrack.length; ++_0x183a02) {
                  _0x205806.bool(_0x2c52c0.AddCrack[_0x183a02]);
                }
                _0x205806.ldelim();
              }
              if (null != _0x2c52c0.MaxFlag && Object.hasOwnProperty.call(_0x2c52c0, "MaxFlag")) {
                _0x205806.uint32(0x78).bool(_0x2c52c0.MaxFlag);
              }
              return _0x205806;
            };
            _0x2bd201.encodeDelimited = function (_0x4bea5a, _0x550a0d) {
              return this.encode(_0x4bea5a, _0x550a0d).ldelim();
            };
            _0x2bd201.decode = function (_0x2aa7d1, _0x5c893a) {
              if (!(_0x2aa7d1 instanceof _0x40d7df)) {
                _0x2aa7d1 = _0x40d7df.create(_0x2aa7d1);
              }
              var _0x46975f = undefined === _0x5c893a ? _0x2aa7d1.len : _0x2aa7d1.pos + _0x5c893a;
              for (var _0x471d45 = new _0x32aff5.tlpProto.RoundInfo(); _0x2aa7d1.pos < _0x46975f;) {
                var _0x4c5470 = _0x2aa7d1.uint32();
                switch (_0x4c5470 >>> 0x3) {
                  case 0x1:
                    if (!(_0x471d45.MainPlateSymbol && _0x471d45.MainPlateSymbol.length)) {
                      _0x471d45.MainPlateSymbol = [];
                    }
                    _0x471d45.MainPlateSymbol.push(_0x32aff5.tlpProto.Column.decode(_0x2aa7d1, _0x2aa7d1.uint32()));
                    break;
                  case 0x2:
                    if (!(_0x471d45.FreePlateSymbol && _0x471d45.FreePlateSymbol.length)) {
                      _0x471d45.FreePlateSymbol = [];
                    }
                    _0x471d45.FreePlateSymbol.push(_0x32aff5.tlpProto.CColumn.decode(_0x2aa7d1, _0x2aa7d1.uint32()));
                    break;
                  case 0x3:
                    if (!(_0x471d45.FreePlateSymbolLog && _0x471d45.FreePlateSymbolLog.length)) {
                      _0x471d45.FreePlateSymbolLog = [];
                    }
                    _0x471d45.FreePlateSymbolLog.push(_0x32aff5.tlpProto.CColumn.decode(_0x2aa7d1, _0x2aa7d1.uint32()));
                    break;
                  case 0x4:
                    if (!(_0x471d45.AwardDataVec && _0x471d45.AwardDataVec.length)) {
                      _0x471d45.AwardDataVec = [];
                    }
                    _0x471d45.AwardDataVec.push(_0x32aff5.tlpProto.AwardData.decode(_0x2aa7d1, _0x2aa7d1.uint32()));
                    break;
                  case 0x5:
                    _0x471d45.AwardTypeFlag = _0x2aa7d1.int32();
                    break;
                  case 0x6:
                    _0x471d45.RoundWin = _0x2aa7d1.double();
                    break;
                  case 0x7:
                    _0x471d45.FreeRemainRound = _0x2aa7d1.int32();
                    break;
                  case 0x8:
                    _0x471d45.FreeNowRound = _0x2aa7d1.int32();
                    break;
                  case 0xa:
                    _0x471d45.MGReelWeightResult = _0x2aa7d1.int32();
                    break;
                  case 0xb:
                    if (!(_0x471d45.BlueData && _0x471d45.BlueData.length)) {
                      _0x471d45.BlueData = [];
                    }
                    _0x471d45.BlueData.push(_0x32aff5.tlpProto.FeatureEffect.decode(_0x2aa7d1, _0x2aa7d1.uint32()));
                    break;
                  case 0xc:
                    if (!(_0x471d45.RedData && _0x471d45.RedData.length)) {
                      _0x471d45.RedData = [];
                    }
                    _0x471d45.RedData.push(_0x32aff5.tlpProto.FeatureEffect.decode(_0x2aa7d1, _0x2aa7d1.uint32()));
                    break;
                  case 0xd:
                    if (!(_0x471d45.GreenData && _0x471d45.GreenData.length)) {
                      _0x471d45.GreenData = [];
                    }
                    _0x471d45.GreenData.push(_0x32aff5.tlpProto.FeatureEffect.decode(_0x2aa7d1, _0x2aa7d1.uint32()));
                    break;
                  case 0xe:
                    if (!(_0x471d45.AddCrack && _0x471d45.AddCrack.length)) {
                      _0x471d45.AddCrack = [];
                    }
                    if (0x2 == (0x7 & _0x4c5470)) {
                      for (var _0x1b0ad9 = _0x2aa7d1.uint32() + _0x2aa7d1.pos; _0x2aa7d1.pos < _0x1b0ad9;) {
                        _0x471d45.AddCrack.push(_0x2aa7d1.bool());
                      }
                    } else {
                      _0x471d45.AddCrack.push(_0x2aa7d1.bool());
                    }
                    break;
                  case 0xf:
                    _0x471d45.MaxFlag = _0x2aa7d1.bool();
                    break;
                  default:
                    _0x2aa7d1.skipType(0x7 & _0x4c5470);
                }
              }
              return _0x471d45;
            };
            _0x2bd201.decodeDelimited = function (_0x56c136) {
              if (!(_0x56c136 instanceof _0x40d7df)) {
                _0x56c136 = new _0x40d7df(_0x56c136);
              }
              return this.decode(_0x56c136, _0x56c136.uint32());
            };
            _0x2bd201.verify = function (_0x1f1b71) {
              if ("object" != typeof _0x1f1b71 || null === _0x1f1b71) {
                return "object expected";
              }
              if (null != _0x1f1b71.MainPlateSymbol && _0x1f1b71.hasOwnProperty("MainPlateSymbol")) {
                if (!Array.isArray(_0x1f1b71.MainPlateSymbol)) {
                  return "MainPlateSymbol: array expected";
                }
                for (var _0xdddc6 = 0x0; _0xdddc6 < _0x1f1b71.MainPlateSymbol.length; ++_0xdddc6) {
                  if (_0x233abd = _0x32aff5.tlpProto.Column.verify(_0x1f1b71.MainPlateSymbol[_0xdddc6])) {
                    return "MainPlateSymbol." + _0x233abd;
                  }
                }
              }
              if (null != _0x1f1b71.FreePlateSymbol && _0x1f1b71.hasOwnProperty('FreePlateSymbol')) {
                if (!Array.isArray(_0x1f1b71.FreePlateSymbol)) {
                  return "FreePlateSymbol: array expected";
                }
                for (_0xdddc6 = 0x0; _0xdddc6 < _0x1f1b71.FreePlateSymbol.length; ++_0xdddc6) {
                  if (_0x233abd = _0x32aff5.tlpProto.CColumn.verify(_0x1f1b71.FreePlateSymbol[_0xdddc6])) {
                    return 'FreePlateSymbol.' + _0x233abd;
                  }
                }
              }
              if (null != _0x1f1b71.FreePlateSymbolLog && _0x1f1b71.hasOwnProperty("FreePlateSymbolLog")) {
                if (!Array.isArray(_0x1f1b71.FreePlateSymbolLog)) {
                  return "FreePlateSymbolLog: array expected";
                }
                for (_0xdddc6 = 0x0; _0xdddc6 < _0x1f1b71.FreePlateSymbolLog.length; ++_0xdddc6) {
                  if (_0x233abd = _0x32aff5.tlpProto.CColumn.verify(_0x1f1b71.FreePlateSymbolLog[_0xdddc6])) {
                    return "FreePlateSymbolLog." + _0x233abd;
                  }
                }
              }
              if (null != _0x1f1b71.AwardDataVec && _0x1f1b71.hasOwnProperty("AwardDataVec")) {
                if (!Array.isArray(_0x1f1b71.AwardDataVec)) {
                  return "AwardDataVec: array expected";
                }
                for (_0xdddc6 = 0x0; _0xdddc6 < _0x1f1b71.AwardDataVec.length; ++_0xdddc6) {
                  if (_0x233abd = _0x32aff5.tlpProto.AwardData.verify(_0x1f1b71.AwardDataVec[_0xdddc6])) {
                    return "AwardDataVec." + _0x233abd;
                  }
                }
              }
              if (null != _0x1f1b71.AwardTypeFlag && _0x1f1b71.hasOwnProperty("AwardTypeFlag") && !_0x17d41e.isInteger(_0x1f1b71.AwardTypeFlag)) {
                return "AwardTypeFlag: integer expected";
              }
              if (null != _0x1f1b71.RoundWin && _0x1f1b71.hasOwnProperty("RoundWin") && 'number' != typeof _0x1f1b71.RoundWin) {
                return "RoundWin: number expected";
              }
              if (null != _0x1f1b71.FreeRemainRound && _0x1f1b71.hasOwnProperty("FreeRemainRound") && !_0x17d41e.isInteger(_0x1f1b71.FreeRemainRound)) {
                return "FreeRemainRound: integer expected";
              }
              if (null != _0x1f1b71.FreeNowRound && _0x1f1b71.hasOwnProperty("FreeNowRound") && !_0x17d41e.isInteger(_0x1f1b71.FreeNowRound)) {
                return "FreeNowRound: integer expected";
              }
              if (null != _0x1f1b71.MGReelWeightResult && _0x1f1b71.hasOwnProperty("MGReelWeightResult") && !_0x17d41e.isInteger(_0x1f1b71.MGReelWeightResult)) {
                return "MGReelWeightResult: integer expected";
              }
              if (null != _0x1f1b71.BlueData && _0x1f1b71.hasOwnProperty("BlueData")) {
                if (!Array.isArray(_0x1f1b71.BlueData)) {
                  return "BlueData: array expected";
                }
                for (_0xdddc6 = 0x0; _0xdddc6 < _0x1f1b71.BlueData.length; ++_0xdddc6) {
                  if (_0x233abd = _0x32aff5.tlpProto.FeatureEffect.verify(_0x1f1b71.BlueData[_0xdddc6])) {
                    return "BlueData." + _0x233abd;
                  }
                }
              }
              if (null != _0x1f1b71.RedData && _0x1f1b71.hasOwnProperty("RedData")) {
                if (!Array.isArray(_0x1f1b71.RedData)) {
                  return "RedData: array expected";
                }
                for (_0xdddc6 = 0x0; _0xdddc6 < _0x1f1b71.RedData.length; ++_0xdddc6) {
                  if (_0x233abd = _0x32aff5.tlpProto.FeatureEffect.verify(_0x1f1b71.RedData[_0xdddc6])) {
                    return "RedData." + _0x233abd;
                  }
                }
              }
              if (null != _0x1f1b71.GreenData && _0x1f1b71.hasOwnProperty("GreenData")) {
                if (!Array.isArray(_0x1f1b71.GreenData)) {
                  return "GreenData: array expected";
                }
                for (_0xdddc6 = 0x0; _0xdddc6 < _0x1f1b71.GreenData.length; ++_0xdddc6) {
                  var _0x233abd;
                  if (_0x233abd = _0x32aff5.tlpProto.FeatureEffect.verify(_0x1f1b71.GreenData[_0xdddc6])) {
                    return "GreenData." + _0x233abd;
                  }
                }
              }
              if (null != _0x1f1b71.AddCrack && _0x1f1b71.hasOwnProperty("AddCrack")) {
                if (!Array.isArray(_0x1f1b71.AddCrack)) {
                  return "AddCrack: array expected";
                }
                for (_0xdddc6 = 0x0; _0xdddc6 < _0x1f1b71.AddCrack.length; ++_0xdddc6) {
                  if ("boolean" != typeof _0x1f1b71.AddCrack[_0xdddc6]) {
                    return "AddCrack: boolean[] expected";
                  }
                }
              }
              return null != _0x1f1b71.MaxFlag && _0x1f1b71.hasOwnProperty("MaxFlag") && "boolean" != typeof _0x1f1b71.MaxFlag ? "MaxFlag: boolean expected" : null;
            };
            _0x2bd201.fromObject = function (_0x3afafd) {
              if (_0x3afafd instanceof _0x32aff5.tlpProto.RoundInfo) {
                return _0x3afafd;
              }
              var _0xc2fe87 = new _0x32aff5.tlpProto.RoundInfo();
              if (_0x3afafd.MainPlateSymbol) {
                if (!Array.isArray(_0x3afafd.MainPlateSymbol)) {
                  throw TypeError(".tlpProto.RoundInfo.MainPlateSymbol: array expected");
                }
                _0xc2fe87.MainPlateSymbol = [];
                for (var _0x1f80b2 = 0x0; _0x1f80b2 < _0x3afafd.MainPlateSymbol.length; ++_0x1f80b2) {
                  if ("object" != typeof _0x3afafd.MainPlateSymbol[_0x1f80b2]) {
                    throw TypeError(".tlpProto.RoundInfo.MainPlateSymbol: object expected");
                  }
                  _0xc2fe87.MainPlateSymbol[_0x1f80b2] = _0x32aff5.tlpProto.Column.fromObject(_0x3afafd.MainPlateSymbol[_0x1f80b2]);
                }
              }
              if (_0x3afafd.FreePlateSymbol) {
                if (!Array.isArray(_0x3afafd.FreePlateSymbol)) {
                  throw TypeError(".tlpProto.RoundInfo.FreePlateSymbol: array expected");
                }
                _0xc2fe87.FreePlateSymbol = [];
                for (_0x1f80b2 = 0x0; _0x1f80b2 < _0x3afafd.FreePlateSymbol.length; ++_0x1f80b2) {
                  if ("object" != typeof _0x3afafd.FreePlateSymbol[_0x1f80b2]) {
                    throw TypeError(".tlpProto.RoundInfo.FreePlateSymbol: object expected");
                  }
                  _0xc2fe87.FreePlateSymbol[_0x1f80b2] = _0x32aff5.tlpProto.CColumn.fromObject(_0x3afafd.FreePlateSymbol[_0x1f80b2]);
                }
              }
              if (_0x3afafd.FreePlateSymbolLog) {
                if (!Array.isArray(_0x3afafd.FreePlateSymbolLog)) {
                  throw TypeError(".tlpProto.RoundInfo.FreePlateSymbolLog: array expected");
                }
                _0xc2fe87.FreePlateSymbolLog = [];
                for (_0x1f80b2 = 0x0; _0x1f80b2 < _0x3afafd.FreePlateSymbolLog.length; ++_0x1f80b2) {
                  if ("object" != typeof _0x3afafd.FreePlateSymbolLog[_0x1f80b2]) {
                    throw TypeError(".tlpProto.RoundInfo.FreePlateSymbolLog: object expected");
                  }
                  _0xc2fe87.FreePlateSymbolLog[_0x1f80b2] = _0x32aff5.tlpProto.CColumn.fromObject(_0x3afafd.FreePlateSymbolLog[_0x1f80b2]);
                }
              }
              if (_0x3afafd.AwardDataVec) {
                if (!Array.isArray(_0x3afafd.AwardDataVec)) {
                  throw TypeError(".tlpProto.RoundInfo.AwardDataVec: array expected");
                }
                _0xc2fe87.AwardDataVec = [];
                for (_0x1f80b2 = 0x0; _0x1f80b2 < _0x3afafd.AwardDataVec.length; ++_0x1f80b2) {
                  if ("object" != typeof _0x3afafd.AwardDataVec[_0x1f80b2]) {
                    throw TypeError(".tlpProto.RoundInfo.AwardDataVec: object expected");
                  }
                  _0xc2fe87.AwardDataVec[_0x1f80b2] = _0x32aff5.tlpProto.AwardData.fromObject(_0x3afafd.AwardDataVec[_0x1f80b2]);
                }
              }
              if (null != _0x3afafd.AwardTypeFlag) {
                _0xc2fe87.AwardTypeFlag = 0x0 | _0x3afafd.AwardTypeFlag;
              }
              if (null != _0x3afafd.RoundWin) {
                _0xc2fe87.RoundWin = Number(_0x3afafd.RoundWin);
              }
              if (null != _0x3afafd.FreeRemainRound) {
                _0xc2fe87.FreeRemainRound = 0x0 | _0x3afafd.FreeRemainRound;
              }
              if (null != _0x3afafd.FreeNowRound) {
                _0xc2fe87.FreeNowRound = 0x0 | _0x3afafd.FreeNowRound;
              }
              if (null != _0x3afafd.MGReelWeightResult) {
                _0xc2fe87.MGReelWeightResult = 0x0 | _0x3afafd.MGReelWeightResult;
              }
              if (_0x3afafd.BlueData) {
                if (!Array.isArray(_0x3afafd.BlueData)) {
                  throw TypeError(".tlpProto.RoundInfo.BlueData: array expected");
                }
                _0xc2fe87.BlueData = [];
                for (_0x1f80b2 = 0x0; _0x1f80b2 < _0x3afafd.BlueData.length; ++_0x1f80b2) {
                  if ("object" != typeof _0x3afafd.BlueData[_0x1f80b2]) {
                    throw TypeError(".tlpProto.RoundInfo.BlueData: object expected");
                  }
                  _0xc2fe87.BlueData[_0x1f80b2] = _0x32aff5.tlpProto.FeatureEffect.fromObject(_0x3afafd.BlueData[_0x1f80b2]);
                }
              }
              if (_0x3afafd.RedData) {
                if (!Array.isArray(_0x3afafd.RedData)) {
                  throw TypeError(".tlpProto.RoundInfo.RedData: array expected");
                }
                _0xc2fe87.RedData = [];
                for (_0x1f80b2 = 0x0; _0x1f80b2 < _0x3afafd.RedData.length; ++_0x1f80b2) {
                  if ("object" != typeof _0x3afafd.RedData[_0x1f80b2]) {
                    throw TypeError(".tlpProto.RoundInfo.RedData: object expected");
                  }
                  _0xc2fe87.RedData[_0x1f80b2] = _0x32aff5.tlpProto.FeatureEffect.fromObject(_0x3afafd.RedData[_0x1f80b2]);
                }
              }
              if (_0x3afafd.GreenData) {
                if (!Array.isArray(_0x3afafd.GreenData)) {
                  throw TypeError(".tlpProto.RoundInfo.GreenData: array expected");
                }
                _0xc2fe87.GreenData = [];
                for (_0x1f80b2 = 0x0; _0x1f80b2 < _0x3afafd.GreenData.length; ++_0x1f80b2) {
                  if ("object" != typeof _0x3afafd.GreenData[_0x1f80b2]) {
                    throw TypeError(".tlpProto.RoundInfo.GreenData: object expected");
                  }
                  _0xc2fe87.GreenData[_0x1f80b2] = _0x32aff5.tlpProto.FeatureEffect.fromObject(_0x3afafd.GreenData[_0x1f80b2]);
                }
              }
              if (_0x3afafd.AddCrack) {
                if (!Array.isArray(_0x3afafd.AddCrack)) {
                  throw TypeError(".tlpProto.RoundInfo.AddCrack: array expected");
                }
                _0xc2fe87.AddCrack = [];
                for (_0x1f80b2 = 0x0; _0x1f80b2 < _0x3afafd.AddCrack.length; ++_0x1f80b2) {
                  _0xc2fe87.AddCrack[_0x1f80b2] = Boolean(_0x3afafd.AddCrack[_0x1f80b2]);
                }
              }
              if (null != _0x3afafd.MaxFlag) {
                _0xc2fe87.MaxFlag = Boolean(_0x3afafd.MaxFlag);
              }
              return _0xc2fe87;
            };
            _0x2bd201.toObject = function (_0x23b590, _0x1102ea) {
              if (!_0x1102ea) {
                _0x1102ea = {};
              }
              var _0x1ee344 = {};
              if (_0x1102ea.arrays || _0x1102ea.defaults) {
                _0x1ee344.MainPlateSymbol = [];
                _0x1ee344.FreePlateSymbol = [];
                _0x1ee344.FreePlateSymbolLog = [];
                _0x1ee344.AwardDataVec = [];
                _0x1ee344.BlueData = [];
                _0x1ee344.RedData = [];
                _0x1ee344.GreenData = [];
                _0x1ee344.AddCrack = [];
              }
              if (_0x1102ea.defaults) {
                _0x1ee344.AwardTypeFlag = 0x0;
                _0x1ee344.RoundWin = 0x0;
                _0x1ee344.FreeRemainRound = 0x0;
                _0x1ee344.FreeNowRound = 0x0;
                _0x1ee344.MGReelWeightResult = 0x0;
                _0x1ee344.MaxFlag = false;
              }
              if (_0x23b590.MainPlateSymbol && _0x23b590.MainPlateSymbol.length) {
                _0x1ee344.MainPlateSymbol = [];
                for (var _0x22179c = 0x0; _0x22179c < _0x23b590.MainPlateSymbol.length; ++_0x22179c) {
                  _0x1ee344.MainPlateSymbol[_0x22179c] = _0x32aff5.tlpProto.Column.toObject(_0x23b590.MainPlateSymbol[_0x22179c], _0x1102ea);
                }
              }
              if (_0x23b590.FreePlateSymbol && _0x23b590.FreePlateSymbol.length) {
                _0x1ee344.FreePlateSymbol = [];
                for (_0x22179c = 0x0; _0x22179c < _0x23b590.FreePlateSymbol.length; ++_0x22179c) {
                  _0x1ee344.FreePlateSymbol[_0x22179c] = _0x32aff5.tlpProto.CColumn.toObject(_0x23b590.FreePlateSymbol[_0x22179c], _0x1102ea);
                }
              }
              if (_0x23b590.FreePlateSymbolLog && _0x23b590.FreePlateSymbolLog.length) {
                _0x1ee344.FreePlateSymbolLog = [];
                for (_0x22179c = 0x0; _0x22179c < _0x23b590.FreePlateSymbolLog.length; ++_0x22179c) {
                  _0x1ee344.FreePlateSymbolLog[_0x22179c] = _0x32aff5.tlpProto.CColumn.toObject(_0x23b590.FreePlateSymbolLog[_0x22179c], _0x1102ea);
                }
              }
              if (_0x23b590.AwardDataVec && _0x23b590.AwardDataVec.length) {
                _0x1ee344.AwardDataVec = [];
                for (_0x22179c = 0x0; _0x22179c < _0x23b590.AwardDataVec.length; ++_0x22179c) {
                  _0x1ee344.AwardDataVec[_0x22179c] = _0x32aff5.tlpProto.AwardData.toObject(_0x23b590.AwardDataVec[_0x22179c], _0x1102ea);
                }
              }
              if (null != _0x23b590.AwardTypeFlag && _0x23b590.hasOwnProperty('AwardTypeFlag')) {
                _0x1ee344.AwardTypeFlag = _0x23b590.AwardTypeFlag;
              }
              if (null != _0x23b590.RoundWin && _0x23b590.hasOwnProperty("RoundWin")) {
                _0x1ee344.RoundWin = _0x1102ea.json && !isFinite(_0x23b590.RoundWin) ? String(_0x23b590.RoundWin) : _0x23b590.RoundWin;
              }
              if (null != _0x23b590.FreeRemainRound && _0x23b590.hasOwnProperty("FreeRemainRound")) {
                _0x1ee344.FreeRemainRound = _0x23b590.FreeRemainRound;
              }
              if (null != _0x23b590.FreeNowRound && _0x23b590.hasOwnProperty("FreeNowRound")) {
                _0x1ee344.FreeNowRound = _0x23b590.FreeNowRound;
              }
              if (null != _0x23b590.MGReelWeightResult && _0x23b590.hasOwnProperty("MGReelWeightResult")) {
                _0x1ee344.MGReelWeightResult = _0x23b590.MGReelWeightResult;
              }
              if (_0x23b590.BlueData && _0x23b590.BlueData.length) {
                _0x1ee344.BlueData = [];
                for (_0x22179c = 0x0; _0x22179c < _0x23b590.BlueData.length; ++_0x22179c) {
                  _0x1ee344.BlueData[_0x22179c] = _0x32aff5.tlpProto.FeatureEffect.toObject(_0x23b590.BlueData[_0x22179c], _0x1102ea);
                }
              }
              if (_0x23b590.RedData && _0x23b590.RedData.length) {
                _0x1ee344.RedData = [];
                for (_0x22179c = 0x0; _0x22179c < _0x23b590.RedData.length; ++_0x22179c) {
                  _0x1ee344.RedData[_0x22179c] = _0x32aff5.tlpProto.FeatureEffect.toObject(_0x23b590.RedData[_0x22179c], _0x1102ea);
                }
              }
              if (_0x23b590.GreenData && _0x23b590.GreenData.length) {
                _0x1ee344.GreenData = [];
                for (_0x22179c = 0x0; _0x22179c < _0x23b590.GreenData.length; ++_0x22179c) {
                  _0x1ee344.GreenData[_0x22179c] = _0x32aff5.tlpProto.FeatureEffect.toObject(_0x23b590.GreenData[_0x22179c], _0x1102ea);
                }
              }
              if (_0x23b590.AddCrack && _0x23b590.AddCrack.length) {
                _0x1ee344.AddCrack = [];
                for (_0x22179c = 0x0; _0x22179c < _0x23b590.AddCrack.length; ++_0x22179c) {
                  _0x1ee344.AddCrack[_0x22179c] = _0x23b590.AddCrack[_0x22179c];
                }
              }
              if (null != _0x23b590.MaxFlag && _0x23b590.hasOwnProperty("MaxFlag")) {
                _0x1ee344.MaxFlag = _0x23b590.MaxFlag;
              }
              return _0x1ee344;
            };
            _0x2bd201.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x41d732.util.toJSONOptions);
            };
            return _0x2bd201;
          }(),
          "SpinAck": function () {
            function _0x17d41d(_0xb659b5) {
              this.RoundQueue = [];
              this.CrackLevels = [];
              if (_0xb659b5) {
                var _0x28f095 = Object.keys(_0xb659b5);
                for (var _0x1a64f4 = 0x0; _0x1a64f4 < _0x28f095.length; ++_0x1a64f4) {
                  if (null != _0xb659b5[_0x28f095[_0x1a64f4]]) {
                    this[_0x28f095[_0x1a64f4]] = _0xb659b5[_0x28f095[_0x1a64f4]];
                  }
                }
              }
            }
            _0x17d41d.prototype.RoundQueue = _0x17d41e.emptyArray;
            _0x17d41d.prototype.FreeTotalWin = 0x0;
            _0x17d41d.prototype.TotalWin = 0x0;
            _0x17d41d.prototype.ShowIndex = '';
            _0x17d41d.prototype.NowMoney = 0x0;
            _0x17d41d.prototype.AckType = 0x0;
            _0x17d41d.prototype.RTP = 0x0;
            _0x17d41d.prototype.Bet = 0x0;
            _0x17d41d.prototype.FolderIndex = 0x0;
            _0x17d41d.prototype.CrackLevels = _0x17d41e.emptyArray;
            _0x17d41d.create = function (_0x1ea768) {
              return new _0x17d41d(_0x1ea768);
            };
            _0x17d41d.encode = function (_0x4cbca6, _0x39149d) {
              if (!_0x39149d) {
                _0x39149d = _0x3c60c4.create();
              }
              if (null != _0x4cbca6.RoundQueue && _0x4cbca6.RoundQueue.length) {
                for (var _0x203305 = 0x0; _0x203305 < _0x4cbca6.RoundQueue.length; ++_0x203305) {
                  _0x32aff5.tlpProto.RoundInfo.encode(_0x4cbca6.RoundQueue[_0x203305], _0x39149d.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0x4cbca6.FreeTotalWin && Object.hasOwnProperty.call(_0x4cbca6, "FreeTotalWin")) {
                _0x39149d.uint32(0x11).double(_0x4cbca6.FreeTotalWin);
              }
              if (null != _0x4cbca6.TotalWin && Object.hasOwnProperty.call(_0x4cbca6, "TotalWin")) {
                _0x39149d.uint32(0x19).double(_0x4cbca6.TotalWin);
              }
              if (null != _0x4cbca6.ShowIndex && Object.hasOwnProperty.call(_0x4cbca6, "ShowIndex")) {
                _0x39149d.uint32(0x22).string(_0x4cbca6.ShowIndex);
              }
              if (null != _0x4cbca6.NowMoney && Object.hasOwnProperty.call(_0x4cbca6, 'NowMoney')) {
                _0x39149d.uint32(0x29).double(_0x4cbca6.NowMoney);
              }
              if (null != _0x4cbca6.AckType && Object.hasOwnProperty.call(_0x4cbca6, "AckType")) {
                _0x39149d.uint32(0x30).int32(_0x4cbca6.AckType);
              }
              if (null != _0x4cbca6.RTP && Object.hasOwnProperty.call(_0x4cbca6, "RTP")) {
                _0x39149d.uint32(0x39).double(_0x4cbca6.RTP);
              }
              if (null != _0x4cbca6.Bet && Object.hasOwnProperty.call(_0x4cbca6, "Bet")) {
                _0x39149d.uint32(0x41).double(_0x4cbca6.Bet);
              }
              if (null != _0x4cbca6.FolderIndex && Object.hasOwnProperty.call(_0x4cbca6, "FolderIndex")) {
                _0x39149d.uint32(0x48).int32(_0x4cbca6.FolderIndex);
              }
              if (null != _0x4cbca6.CrackLevels && _0x4cbca6.CrackLevels.length) {
                _0x39149d.uint32(0x52).fork();
                for (_0x203305 = 0x0; _0x203305 < _0x4cbca6.CrackLevels.length; ++_0x203305) {
                  _0x39149d.int32(_0x4cbca6.CrackLevels[_0x203305]);
                }
                _0x39149d.ldelim();
              }
              return _0x39149d;
            };
            _0x17d41d.encodeDelimited = function (_0x4001dd, _0x1a5ea8) {
              return this.encode(_0x4001dd, _0x1a5ea8).ldelim();
            };
            _0x17d41d.decode = function (_0x464972, _0x3bc9e2) {
              if (!(_0x464972 instanceof _0x40d7df)) {
                _0x464972 = _0x40d7df.create(_0x464972);
              }
              var _0x1f8163 = undefined === _0x3bc9e2 ? _0x464972.len : _0x464972.pos + _0x3bc9e2;
              for (var _0x64b743 = new _0x32aff5.tlpProto.SpinAck(); _0x464972.pos < _0x1f8163;) {
                var _0x2bbe1d = _0x464972.uint32();
                switch (_0x2bbe1d >>> 0x3) {
                  case 0x1:
                    if (!(_0x64b743.RoundQueue && _0x64b743.RoundQueue.length)) {
                      _0x64b743.RoundQueue = [];
                    }
                    _0x64b743.RoundQueue.push(_0x32aff5.tlpProto.RoundInfo.decode(_0x464972, _0x464972.uint32()));
                    break;
                  case 0x2:
                    _0x64b743.FreeTotalWin = _0x464972.double();
                    break;
                  case 0x3:
                    _0x64b743.TotalWin = _0x464972.double();
                    break;
                  case 0x4:
                    _0x64b743.ShowIndex = _0x464972.string();
                    break;
                  case 0x5:
                    _0x64b743.NowMoney = _0x464972.double();
                    break;
                  case 0x6:
                    _0x64b743.AckType = _0x464972.int32();
                    break;
                  case 0x7:
                    _0x64b743.RTP = _0x464972.double();
                    break;
                  case 0x8:
                    _0x64b743.Bet = _0x464972.double();
                    break;
                  case 0x9:
                    _0x64b743.FolderIndex = _0x464972.int32();
                    break;
                  case 0xa:
                    if (!(_0x64b743.CrackLevels && _0x64b743.CrackLevels.length)) {
                      _0x64b743.CrackLevels = [];
                    }
                    if (0x2 == (0x7 & _0x2bbe1d)) {
                      for (var _0x4710ce = _0x464972.uint32() + _0x464972.pos; _0x464972.pos < _0x4710ce;) {
                        _0x64b743.CrackLevels.push(_0x464972.int32());
                      }
                    } else {
                      _0x64b743.CrackLevels.push(_0x464972.int32());
                    }
                    break;
                  default:
                    _0x464972.skipType(0x7 & _0x2bbe1d);
                }
              }
              return _0x64b743;
            };
            _0x17d41d.decodeDelimited = function (_0x1a96dd) {
              if (!(_0x1a96dd instanceof _0x40d7df)) {
                _0x1a96dd = new _0x40d7df(_0x1a96dd);
              }
              return this.decode(_0x1a96dd, _0x1a96dd.uint32());
            };
            _0x17d41d.verify = function (_0x356a64) {
              if ("object" != typeof _0x356a64 || null === _0x356a64) {
                return "object expected";
              }
              if (null != _0x356a64.RoundQueue && _0x356a64.hasOwnProperty('RoundQueue')) {
                if (!Array.isArray(_0x356a64.RoundQueue)) {
                  return "RoundQueue: array expected";
                }
                for (var _0x51b062 = 0x0; _0x51b062 < _0x356a64.RoundQueue.length; ++_0x51b062) {
                  var _0x493d84 = _0x32aff5.tlpProto.RoundInfo.verify(_0x356a64.RoundQueue[_0x51b062]);
                  if (_0x493d84) {
                    return "RoundQueue." + _0x493d84;
                  }
                }
              }
              if (null != _0x356a64.FreeTotalWin && _0x356a64.hasOwnProperty('FreeTotalWin') && "number" != typeof _0x356a64.FreeTotalWin) {
                return "FreeTotalWin: number expected";
              }
              if (null != _0x356a64.TotalWin && _0x356a64.hasOwnProperty("TotalWin") && "number" != typeof _0x356a64.TotalWin) {
                return "TotalWin: number expected";
              }
              if (null != _0x356a64.ShowIndex && _0x356a64.hasOwnProperty("ShowIndex") && !_0x17d41e.isString(_0x356a64.ShowIndex)) {
                return "ShowIndex: string expected";
              }
              if (null != _0x356a64.NowMoney && _0x356a64.hasOwnProperty("NowMoney") && "number" != typeof _0x356a64.NowMoney) {
                return "NowMoney: number expected";
              }
              if (null != _0x356a64.AckType && _0x356a64.hasOwnProperty("AckType") && !_0x17d41e.isInteger(_0x356a64.AckType)) {
                return "AckType: integer expected";
              }
              if (null != _0x356a64.RTP && _0x356a64.hasOwnProperty("RTP") && "number" != typeof _0x356a64.RTP) {
                return "RTP: number expected";
              }
              if (null != _0x356a64.Bet && _0x356a64.hasOwnProperty("Bet") && "number" != typeof _0x356a64.Bet) {
                return "Bet: number expected";
              }
              if (null != _0x356a64.FolderIndex && _0x356a64.hasOwnProperty("FolderIndex") && !_0x17d41e.isInteger(_0x356a64.FolderIndex)) {
                return "FolderIndex: integer expected";
              }
              if (null != _0x356a64.CrackLevels && _0x356a64.hasOwnProperty("CrackLevels")) {
                if (!Array.isArray(_0x356a64.CrackLevels)) {
                  return "CrackLevels: array expected";
                }
                for (_0x51b062 = 0x0; _0x51b062 < _0x356a64.CrackLevels.length; ++_0x51b062) {
                  if (!_0x17d41e.isInteger(_0x356a64.CrackLevels[_0x51b062])) {
                    return "CrackLevels: integer[] expected";
                  }
                }
              }
              return null;
            };
            _0x17d41d.fromObject = function (_0x578700) {
              if (_0x578700 instanceof _0x32aff5.tlpProto.SpinAck) {
                return _0x578700;
              }
              var _0x37cb3d = new _0x32aff5.tlpProto.SpinAck();
              if (_0x578700.RoundQueue) {
                if (!Array.isArray(_0x578700.RoundQueue)) {
                  throw TypeError(".tlpProto.SpinAck.RoundQueue: array expected");
                }
                _0x37cb3d.RoundQueue = [];
                for (var _0x2e77e2 = 0x0; _0x2e77e2 < _0x578700.RoundQueue.length; ++_0x2e77e2) {
                  if ("object" != typeof _0x578700.RoundQueue[_0x2e77e2]) {
                    throw TypeError(".tlpProto.SpinAck.RoundQueue: object expected");
                  }
                  _0x37cb3d.RoundQueue[_0x2e77e2] = _0x32aff5.tlpProto.RoundInfo.fromObject(_0x578700.RoundQueue[_0x2e77e2]);
                }
              }
              if (null != _0x578700.FreeTotalWin) {
                _0x37cb3d.FreeTotalWin = Number(_0x578700.FreeTotalWin);
              }
              if (null != _0x578700.TotalWin) {
                _0x37cb3d.TotalWin = Number(_0x578700.TotalWin);
              }
              if (null != _0x578700.ShowIndex) {
                _0x37cb3d.ShowIndex = String(_0x578700.ShowIndex);
              }
              if (null != _0x578700.NowMoney) {
                _0x37cb3d.NowMoney = Number(_0x578700.NowMoney);
              }
              if (null != _0x578700.AckType) {
                _0x37cb3d.AckType = 0x0 | _0x578700.AckType;
              }
              if (null != _0x578700.RTP) {
                _0x37cb3d.RTP = Number(_0x578700.RTP);
              }
              if (null != _0x578700.Bet) {
                _0x37cb3d.Bet = Number(_0x578700.Bet);
              }
              if (null != _0x578700.FolderIndex) {
                _0x37cb3d.FolderIndex = 0x0 | _0x578700.FolderIndex;
              }
              if (_0x578700.CrackLevels) {
                if (!Array.isArray(_0x578700.CrackLevels)) {
                  throw TypeError(".tlpProto.SpinAck.CrackLevels: array expected");
                }
                _0x37cb3d.CrackLevels = [];
                for (_0x2e77e2 = 0x0; _0x2e77e2 < _0x578700.CrackLevels.length; ++_0x2e77e2) {
                  _0x37cb3d.CrackLevels[_0x2e77e2] = 0x0 | _0x578700.CrackLevels[_0x2e77e2];
                }
              }
              return _0x37cb3d;
            };
            _0x17d41d.toObject = function (_0x330d0d, _0x3e37e6) {
              if (!_0x3e37e6) {
                _0x3e37e6 = {};
              }
              var _0x4a61b4 = {};
              if (_0x3e37e6.arrays || _0x3e37e6.defaults) {
                _0x4a61b4.RoundQueue = [];
                _0x4a61b4.CrackLevels = [];
              }
              if (_0x3e37e6.defaults) {
                _0x4a61b4.FreeTotalWin = 0x0;
                _0x4a61b4.TotalWin = 0x0;
                _0x4a61b4.ShowIndex = '';
                _0x4a61b4.NowMoney = 0x0;
                _0x4a61b4.AckType = 0x0;
                _0x4a61b4.RTP = 0x0;
                _0x4a61b4.Bet = 0x0;
                _0x4a61b4.FolderIndex = 0x0;
              }
              if (_0x330d0d.RoundQueue && _0x330d0d.RoundQueue.length) {
                _0x4a61b4.RoundQueue = [];
                for (var _0x5ec21e = 0x0; _0x5ec21e < _0x330d0d.RoundQueue.length; ++_0x5ec21e) {
                  _0x4a61b4.RoundQueue[_0x5ec21e] = _0x32aff5.tlpProto.RoundInfo.toObject(_0x330d0d.RoundQueue[_0x5ec21e], _0x3e37e6);
                }
              }
              if (null != _0x330d0d.FreeTotalWin && _0x330d0d.hasOwnProperty("FreeTotalWin")) {
                _0x4a61b4.FreeTotalWin = _0x3e37e6.json && !isFinite(_0x330d0d.FreeTotalWin) ? String(_0x330d0d.FreeTotalWin) : _0x330d0d.FreeTotalWin;
              }
              if (null != _0x330d0d.TotalWin && _0x330d0d.hasOwnProperty("TotalWin")) {
                _0x4a61b4.TotalWin = _0x3e37e6.json && !isFinite(_0x330d0d.TotalWin) ? String(_0x330d0d.TotalWin) : _0x330d0d.TotalWin;
              }
              if (null != _0x330d0d.ShowIndex && _0x330d0d.hasOwnProperty("ShowIndex")) {
                _0x4a61b4.ShowIndex = _0x330d0d.ShowIndex;
              }
              if (null != _0x330d0d.NowMoney && _0x330d0d.hasOwnProperty('NowMoney')) {
                _0x4a61b4.NowMoney = _0x3e37e6.json && !isFinite(_0x330d0d.NowMoney) ? String(_0x330d0d.NowMoney) : _0x330d0d.NowMoney;
              }
              if (null != _0x330d0d.AckType && _0x330d0d.hasOwnProperty("AckType")) {
                _0x4a61b4.AckType = _0x330d0d.AckType;
              }
              if (null != _0x330d0d.RTP && _0x330d0d.hasOwnProperty("RTP")) {
                _0x4a61b4.RTP = _0x3e37e6.json && !isFinite(_0x330d0d.RTP) ? String(_0x330d0d.RTP) : _0x330d0d.RTP;
              }
              if (null != _0x330d0d.Bet && _0x330d0d.hasOwnProperty("Bet")) {
                _0x4a61b4.Bet = _0x3e37e6.json && !isFinite(_0x330d0d.Bet) ? String(_0x330d0d.Bet) : _0x330d0d.Bet;
              }
              if (null != _0x330d0d.FolderIndex && _0x330d0d.hasOwnProperty("FolderIndex")) {
                _0x4a61b4.FolderIndex = _0x330d0d.FolderIndex;
              }
              if (_0x330d0d.CrackLevels && _0x330d0d.CrackLevels.length) {
                _0x4a61b4.CrackLevels = [];
                for (_0x5ec21e = 0x0; _0x5ec21e < _0x330d0d.CrackLevels.length; ++_0x5ec21e) {
                  _0x4a61b4.CrackLevels[_0x5ec21e] = _0x330d0d.CrackLevels[_0x5ec21e];
                }
              }
              return _0x4a61b4;
            };
            _0x17d41d.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x41d732.util.toJSONOptions);
            };
            return _0x17d41d;
          }(),
          "StateInfo": function () {
            function _0x4270c2(_0x36e60e) {
              this.CrackLevels = [];
              if (_0x36e60e) {
                var _0x3afa93 = Object.keys(_0x36e60e);
                for (var _0xe8ef2f = 0x0; _0xe8ef2f < _0x3afa93.length; ++_0xe8ef2f) {
                  if (null != _0x36e60e[_0x3afa93[_0xe8ef2f]]) {
                    this[_0x3afa93[_0xe8ef2f]] = _0x36e60e[_0x3afa93[_0xe8ef2f]];
                  }
                }
              }
            }
            _0x4270c2.prototype.CrackLevels = _0x17d41e.emptyArray;
            _0x4270c2.create = function (_0x22a8ed) {
              return new _0x4270c2(_0x22a8ed);
            };
            _0x4270c2.encode = function (_0x24f7f3, _0x545eee) {
              if (!_0x545eee) {
                _0x545eee = _0x3c60c4.create();
              }
              if (null != _0x24f7f3.CrackLevels && _0x24f7f3.CrackLevels.length) {
                _0x545eee.uint32(0xa).fork();
                for (var _0x4dea8f = 0x0; _0x4dea8f < _0x24f7f3.CrackLevels.length; ++_0x4dea8f) {
                  _0x545eee.int32(_0x24f7f3.CrackLevels[_0x4dea8f]);
                }
                _0x545eee.ldelim();
              }
              return _0x545eee;
            };
            _0x4270c2.encodeDelimited = function (_0x50f397, _0x4c005f) {
              return this.encode(_0x50f397, _0x4c005f).ldelim();
            };
            _0x4270c2.decode = function (_0x161b46, _0x4f72b6) {
              if (!(_0x161b46 instanceof _0x40d7df)) {
                _0x161b46 = _0x40d7df.create(_0x161b46);
              }
              var _0x8ec2fe = undefined === _0x4f72b6 ? _0x161b46.len : _0x161b46.pos + _0x4f72b6;
              for (var _0x30cf42 = new _0x32aff5.tlpProto.StateInfo(); _0x161b46.pos < _0x8ec2fe;) {
                var _0x289434 = _0x161b46.uint32();
                switch (_0x289434 >>> 0x3) {
                  case 0x1:
                    if (!(_0x30cf42.CrackLevels && _0x30cf42.CrackLevels.length)) {
                      _0x30cf42.CrackLevels = [];
                    }
                    if (0x2 == (0x7 & _0x289434)) {
                      for (var _0x5633b1 = _0x161b46.uint32() + _0x161b46.pos; _0x161b46.pos < _0x5633b1;) {
                        _0x30cf42.CrackLevels.push(_0x161b46.int32());
                      }
                    } else {
                      _0x30cf42.CrackLevels.push(_0x161b46.int32());
                    }
                    break;
                  default:
                    _0x161b46.skipType(0x7 & _0x289434);
                }
              }
              return _0x30cf42;
            };
            _0x4270c2.decodeDelimited = function (_0x3258eb) {
              if (!(_0x3258eb instanceof _0x40d7df)) {
                _0x3258eb = new _0x40d7df(_0x3258eb);
              }
              return this.decode(_0x3258eb, _0x3258eb.uint32());
            };
            _0x4270c2.verify = function (_0x5e4df0) {
              if ("object" != typeof _0x5e4df0 || null === _0x5e4df0) {
                return "object expected";
              }
              if (null != _0x5e4df0.CrackLevels && _0x5e4df0.hasOwnProperty('CrackLevels')) {
                if (!Array.isArray(_0x5e4df0.CrackLevels)) {
                  return "CrackLevels: array expected";
                }
                for (var _0x814b68 = 0x0; _0x814b68 < _0x5e4df0.CrackLevels.length; ++_0x814b68) {
                  if (!_0x17d41e.isInteger(_0x5e4df0.CrackLevels[_0x814b68])) {
                    return "CrackLevels: integer[] expected";
                  }
                }
              }
              return null;
            };
            _0x4270c2.fromObject = function (_0x133635) {
              if (_0x133635 instanceof _0x32aff5.tlpProto.StateInfo) {
                return _0x133635;
              }
              var _0xd0f495 = new _0x32aff5.tlpProto.StateInfo();
              if (_0x133635.CrackLevels) {
                if (!Array.isArray(_0x133635.CrackLevels)) {
                  throw TypeError(".tlpProto.StateInfo.CrackLevels: array expected");
                }
                _0xd0f495.CrackLevels = [];
                for (var _0x140aee = 0x0; _0x140aee < _0x133635.CrackLevels.length; ++_0x140aee) {
                  _0xd0f495.CrackLevels[_0x140aee] = 0x0 | _0x133635.CrackLevels[_0x140aee];
                }
              }
              return _0xd0f495;
            };
            _0x4270c2.toObject = function (_0x11570a, _0x1b78de) {
              if (!_0x1b78de) {
                _0x1b78de = {};
              }
              var _0x1787e7 = {};
              if (_0x1b78de.arrays || _0x1b78de.defaults) {
                _0x1787e7.CrackLevels = [];
              }
              if (_0x11570a.CrackLevels && _0x11570a.CrackLevels.length) {
                _0x1787e7.CrackLevels = [];
                for (var _0x132d38 = 0x0; _0x132d38 < _0x11570a.CrackLevels.length; ++_0x132d38) {
                  _0x1787e7.CrackLevels[_0x132d38] = _0x11570a.CrackLevels[_0x132d38];
                }
              }
              return _0x1787e7;
            };
            _0x4270c2.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x41d732.util.toJSONOptions);
            };
            return _0x4270c2;
          }(),
          "GameInfoData": function () {
            function _0xea4c87(_0x2bd68a) {
              this.Mul = [];
              this.JPOdds = [];
              this.BlueOdds = [];
              this.CoinOdds = [];
              this.CrackLevels = [];
              this.BuyMul = [];
              if (_0x2bd68a) {
                var _0x47aa6c = Object.keys(_0x2bd68a);
                for (var _0x169ab9 = 0x0; _0x169ab9 < _0x47aa6c.length; ++_0x169ab9) {
                  if (null != _0x2bd68a[_0x47aa6c[_0x169ab9]]) {
                    this[_0x47aa6c[_0x169ab9]] = _0x2bd68a[_0x47aa6c[_0x169ab9]];
                  }
                }
              }
            }
            _0xea4c87.prototype.ShowExtra = false;
            _0xea4c87.prototype.Mul = _0x17d41e.emptyArray;
            _0xea4c87.prototype.JPOdds = _0x17d41e.emptyArray;
            _0xea4c87.prototype.BlueOdds = _0x17d41e.emptyArray;
            _0xea4c87.prototype.CoinOdds = _0x17d41e.emptyArray;
            _0xea4c87.prototype.CrackLevels = _0x17d41e.emptyArray;
            _0xea4c87.prototype.MaxBet = 0x0;
            _0xea4c87.prototype.BuyMul = _0x17d41e.emptyArray;
            _0xea4c87.create = function (_0x98dd08) {
              return new _0xea4c87(_0x98dd08);
            };
            _0xea4c87.encode = function (_0x18b2f3, _0x520bc5) {
              if (!_0x520bc5) {
                _0x520bc5 = _0x3c60c4.create();
              }
              if (null != _0x18b2f3.ShowExtra && Object.hasOwnProperty.call(_0x18b2f3, 'ShowExtra')) {
                _0x520bc5.uint32(0x8).bool(_0x18b2f3.ShowExtra);
              }
              if (null != _0x18b2f3.Mul && _0x18b2f3.Mul.length) {
                _0x520bc5.uint32(0x12).fork();
                for (var _0x4e65e8 = 0x0; _0x4e65e8 < _0x18b2f3.Mul.length; ++_0x4e65e8) {
                  _0x520bc5.double(_0x18b2f3.Mul[_0x4e65e8]);
                }
                _0x520bc5.ldelim();
              }
              if (null != _0x18b2f3.JPOdds && _0x18b2f3.JPOdds.length) {
                _0x520bc5.uint32(0x1a).fork();
                for (_0x4e65e8 = 0x0; _0x4e65e8 < _0x18b2f3.JPOdds.length; ++_0x4e65e8) {
                  _0x520bc5.int32(_0x18b2f3.JPOdds[_0x4e65e8]);
                }
                _0x520bc5.ldelim();
              }
              if (null != _0x18b2f3.BlueOdds && _0x18b2f3.BlueOdds.length) {
                for (_0x4e65e8 = 0x0; _0x4e65e8 < _0x18b2f3.BlueOdds.length; ++_0x4e65e8) {
                  _0x32aff5.tlpProto.Column.encode(_0x18b2f3.BlueOdds[_0x4e65e8], _0x520bc5.uint32(0x22).fork()).ldelim();
                }
              }
              if (null != _0x18b2f3.CoinOdds && _0x18b2f3.CoinOdds.length) {
                for (_0x4e65e8 = 0x0; _0x4e65e8 < _0x18b2f3.CoinOdds.length; ++_0x4e65e8) {
                  _0x32aff5.tlpProto.Column.encode(_0x18b2f3.CoinOdds[_0x4e65e8], _0x520bc5.uint32(0x2a).fork()).ldelim();
                }
              }
              if (null != _0x18b2f3.CrackLevels && _0x18b2f3.CrackLevels.length) {
                _0x520bc5.uint32(0x32).fork();
                for (_0x4e65e8 = 0x0; _0x4e65e8 < _0x18b2f3.CrackLevels.length; ++_0x4e65e8) {
                  _0x520bc5.int32(_0x18b2f3.CrackLevels[_0x4e65e8]);
                }
                _0x520bc5.ldelim();
              }
              if (null != _0x18b2f3.MaxBet && Object.hasOwnProperty.call(_0x18b2f3, "MaxBet")) {
                _0x520bc5.uint32(0x39).double(_0x18b2f3.MaxBet);
              }
              if (null != _0x18b2f3.BuyMul && _0x18b2f3.BuyMul.length) {
                _0x520bc5.uint32(0x42).fork();
                for (_0x4e65e8 = 0x0; _0x4e65e8 < _0x18b2f3.BuyMul.length; ++_0x4e65e8) {
                  _0x520bc5.double(_0x18b2f3.BuyMul[_0x4e65e8]);
                }
                _0x520bc5.ldelim();
              }
              return _0x520bc5;
            };
            _0xea4c87.encodeDelimited = function (_0x4d1ba4, _0x49a94a) {
              return this.encode(_0x4d1ba4, _0x49a94a).ldelim();
            };
            _0xea4c87.decode = function (_0x2058b4, _0x37d08e) {
              if (!(_0x2058b4 instanceof _0x40d7df)) {
                _0x2058b4 = _0x40d7df.create(_0x2058b4);
              }
              var _0x718d8d = undefined === _0x37d08e ? _0x2058b4.len : _0x2058b4.pos + _0x37d08e;
              for (var _0xd82825 = new _0x32aff5.tlpProto.GameInfoData(); _0x2058b4.pos < _0x718d8d;) {
                var _0x8b292a = _0x2058b4.uint32();
                switch (_0x8b292a >>> 0x3) {
                  case 0x1:
                    _0xd82825.ShowExtra = _0x2058b4.bool();
                    break;
                  case 0x2:
                    if (!(_0xd82825.Mul && _0xd82825.Mul.length)) {
                      _0xd82825.Mul = [];
                    }
                    if (0x2 == (0x7 & _0x8b292a)) {
                      for (var _0x4f9d2b = _0x2058b4.uint32() + _0x2058b4.pos; _0x2058b4.pos < _0x4f9d2b;) {
                        _0xd82825.Mul.push(_0x2058b4.double());
                      }
                    } else {
                      _0xd82825.Mul.push(_0x2058b4.double());
                    }
                    break;
                  case 0x3:
                    if (!(_0xd82825.JPOdds && _0xd82825.JPOdds.length)) {
                      _0xd82825.JPOdds = [];
                    }
                    if (0x2 == (0x7 & _0x8b292a)) {
                      for (_0x4f9d2b = _0x2058b4.uint32() + _0x2058b4.pos; _0x2058b4.pos < _0x4f9d2b;) {
                        _0xd82825.JPOdds.push(_0x2058b4.int32());
                      }
                    } else {
                      _0xd82825.JPOdds.push(_0x2058b4.int32());
                    }
                    break;
                  case 0x4:
                    if (!(_0xd82825.BlueOdds && _0xd82825.BlueOdds.length)) {
                      _0xd82825.BlueOdds = [];
                    }
                    _0xd82825.BlueOdds.push(_0x32aff5.tlpProto.Column.decode(_0x2058b4, _0x2058b4.uint32()));
                    break;
                  case 0x5:
                    if (!(_0xd82825.CoinOdds && _0xd82825.CoinOdds.length)) {
                      _0xd82825.CoinOdds = [];
                    }
                    _0xd82825.CoinOdds.push(_0x32aff5.tlpProto.Column.decode(_0x2058b4, _0x2058b4.uint32()));
                    break;
                  case 0x6:
                    if (!(_0xd82825.CrackLevels && _0xd82825.CrackLevels.length)) {
                      _0xd82825.CrackLevels = [];
                    }
                    if (0x2 == (0x7 & _0x8b292a)) {
                      for (_0x4f9d2b = _0x2058b4.uint32() + _0x2058b4.pos; _0x2058b4.pos < _0x4f9d2b;) {
                        _0xd82825.CrackLevels.push(_0x2058b4.int32());
                      }
                    } else {
                      _0xd82825.CrackLevels.push(_0x2058b4.int32());
                    }
                    break;
                  case 0x7:
                    _0xd82825.MaxBet = _0x2058b4.double();
                    break;
                  case 0x8:
                    if (!(_0xd82825.BuyMul && _0xd82825.BuyMul.length)) {
                      _0xd82825.BuyMul = [];
                    }
                    if (0x2 == (0x7 & _0x8b292a)) {
                      for (_0x4f9d2b = _0x2058b4.uint32() + _0x2058b4.pos; _0x2058b4.pos < _0x4f9d2b;) {
                        _0xd82825.BuyMul.push(_0x2058b4.double());
                      }
                    } else {
                      _0xd82825.BuyMul.push(_0x2058b4.double());
                    }
                    break;
                  default:
                    _0x2058b4.skipType(0x7 & _0x8b292a);
                }
              }
              return _0xd82825;
            };
            _0xea4c87.decodeDelimited = function (_0x5911e9) {
              if (!(_0x5911e9 instanceof _0x40d7df)) {
                _0x5911e9 = new _0x40d7df(_0x5911e9);
              }
              return this.decode(_0x5911e9, _0x5911e9.uint32());
            };
            _0xea4c87.verify = function (_0x20010f) {
              if ("object" != typeof _0x20010f || null === _0x20010f) {
                return "object expected";
              }
              if (null != _0x20010f.ShowExtra && _0x20010f.hasOwnProperty('ShowExtra') && "boolean" != typeof _0x20010f.ShowExtra) {
                return "ShowExtra: boolean expected";
              }
              if (null != _0x20010f.Mul && _0x20010f.hasOwnProperty('Mul')) {
                if (!Array.isArray(_0x20010f.Mul)) {
                  return "Mul: array expected";
                }
                for (var _0x38cef1 = 0x0; _0x38cef1 < _0x20010f.Mul.length; ++_0x38cef1) {
                  if ("number" != typeof _0x20010f.Mul[_0x38cef1]) {
                    return "Mul: number[] expected";
                  }
                }
              }
              if (null != _0x20010f.JPOdds && _0x20010f.hasOwnProperty('JPOdds')) {
                if (!Array.isArray(_0x20010f.JPOdds)) {
                  return "JPOdds: array expected";
                }
                for (_0x38cef1 = 0x0; _0x38cef1 < _0x20010f.JPOdds.length; ++_0x38cef1) {
                  if (!_0x17d41e.isInteger(_0x20010f.JPOdds[_0x38cef1])) {
                    return "JPOdds: integer[] expected";
                  }
                }
              }
              if (null != _0x20010f.BlueOdds && _0x20010f.hasOwnProperty('BlueOdds')) {
                if (!Array.isArray(_0x20010f.BlueOdds)) {
                  return "BlueOdds: array expected";
                }
                for (_0x38cef1 = 0x0; _0x38cef1 < _0x20010f.BlueOdds.length; ++_0x38cef1) {
                  if (_0x9fd3ec = _0x32aff5.tlpProto.Column.verify(_0x20010f.BlueOdds[_0x38cef1])) {
                    return "BlueOdds." + _0x9fd3ec;
                  }
                }
              }
              if (null != _0x20010f.CoinOdds && _0x20010f.hasOwnProperty("CoinOdds")) {
                if (!Array.isArray(_0x20010f.CoinOdds)) {
                  return "CoinOdds: array expected";
                }
                for (_0x38cef1 = 0x0; _0x38cef1 < _0x20010f.CoinOdds.length; ++_0x38cef1) {
                  var _0x9fd3ec;
                  if (_0x9fd3ec = _0x32aff5.tlpProto.Column.verify(_0x20010f.CoinOdds[_0x38cef1])) {
                    return "CoinOdds." + _0x9fd3ec;
                  }
                }
              }
              if (null != _0x20010f.CrackLevels && _0x20010f.hasOwnProperty("CrackLevels")) {
                if (!Array.isArray(_0x20010f.CrackLevels)) {
                  return "CrackLevels: array expected";
                }
                for (_0x38cef1 = 0x0; _0x38cef1 < _0x20010f.CrackLevels.length; ++_0x38cef1) {
                  if (!_0x17d41e.isInteger(_0x20010f.CrackLevels[_0x38cef1])) {
                    return "CrackLevels: integer[] expected";
                  }
                }
              }
              if (null != _0x20010f.MaxBet && _0x20010f.hasOwnProperty('MaxBet') && "number" != typeof _0x20010f.MaxBet) {
                return "MaxBet: number expected";
              }
              if (null != _0x20010f.BuyMul && _0x20010f.hasOwnProperty('BuyMul')) {
                if (!Array.isArray(_0x20010f.BuyMul)) {
                  return "BuyMul: array expected";
                }
                for (_0x38cef1 = 0x0; _0x38cef1 < _0x20010f.BuyMul.length; ++_0x38cef1) {
                  if ('number' != typeof _0x20010f.BuyMul[_0x38cef1]) {
                    return "BuyMul: number[] expected";
                  }
                }
              }
              return null;
            };
            _0xea4c87.fromObject = function (_0x4566a0) {
              if (_0x4566a0 instanceof _0x32aff5.tlpProto.GameInfoData) {
                return _0x4566a0;
              }
              var _0x2d107f = new _0x32aff5.tlpProto.GameInfoData();
              if (null != _0x4566a0.ShowExtra) {
                _0x2d107f.ShowExtra = Boolean(_0x4566a0.ShowExtra);
              }
              if (_0x4566a0.Mul) {
                if (!Array.isArray(_0x4566a0.Mul)) {
                  throw TypeError(".tlpProto.GameInfoData.Mul: array expected");
                }
                _0x2d107f.Mul = [];
                for (var _0x2bbee8 = 0x0; _0x2bbee8 < _0x4566a0.Mul.length; ++_0x2bbee8) {
                  _0x2d107f.Mul[_0x2bbee8] = Number(_0x4566a0.Mul[_0x2bbee8]);
                }
              }
              if (_0x4566a0.JPOdds) {
                if (!Array.isArray(_0x4566a0.JPOdds)) {
                  throw TypeError(".tlpProto.GameInfoData.JPOdds: array expected");
                }
                _0x2d107f.JPOdds = [];
                for (_0x2bbee8 = 0x0; _0x2bbee8 < _0x4566a0.JPOdds.length; ++_0x2bbee8) {
                  _0x2d107f.JPOdds[_0x2bbee8] = 0x0 | _0x4566a0.JPOdds[_0x2bbee8];
                }
              }
              if (_0x4566a0.BlueOdds) {
                if (!Array.isArray(_0x4566a0.BlueOdds)) {
                  throw TypeError(".tlpProto.GameInfoData.BlueOdds: array expected");
                }
                _0x2d107f.BlueOdds = [];
                for (_0x2bbee8 = 0x0; _0x2bbee8 < _0x4566a0.BlueOdds.length; ++_0x2bbee8) {
                  if ("object" != typeof _0x4566a0.BlueOdds[_0x2bbee8]) {
                    throw TypeError(".tlpProto.GameInfoData.BlueOdds: object expected");
                  }
                  _0x2d107f.BlueOdds[_0x2bbee8] = _0x32aff5.tlpProto.Column.fromObject(_0x4566a0.BlueOdds[_0x2bbee8]);
                }
              }
              if (_0x4566a0.CoinOdds) {
                if (!Array.isArray(_0x4566a0.CoinOdds)) {
                  throw TypeError(".tlpProto.GameInfoData.CoinOdds: array expected");
                }
                _0x2d107f.CoinOdds = [];
                for (_0x2bbee8 = 0x0; _0x2bbee8 < _0x4566a0.CoinOdds.length; ++_0x2bbee8) {
                  if ("object" != typeof _0x4566a0.CoinOdds[_0x2bbee8]) {
                    throw TypeError(".tlpProto.GameInfoData.CoinOdds: object expected");
                  }
                  _0x2d107f.CoinOdds[_0x2bbee8] = _0x32aff5.tlpProto.Column.fromObject(_0x4566a0.CoinOdds[_0x2bbee8]);
                }
              }
              if (_0x4566a0.CrackLevels) {
                if (!Array.isArray(_0x4566a0.CrackLevels)) {
                  throw TypeError(".tlpProto.GameInfoData.CrackLevels: array expected");
                }
                _0x2d107f.CrackLevels = [];
                for (_0x2bbee8 = 0x0; _0x2bbee8 < _0x4566a0.CrackLevels.length; ++_0x2bbee8) {
                  _0x2d107f.CrackLevels[_0x2bbee8] = 0x0 | _0x4566a0.CrackLevels[_0x2bbee8];
                }
              }
              if (null != _0x4566a0.MaxBet) {
                _0x2d107f.MaxBet = Number(_0x4566a0.MaxBet);
              }
              if (_0x4566a0.BuyMul) {
                if (!Array.isArray(_0x4566a0.BuyMul)) {
                  throw TypeError(".tlpProto.GameInfoData.BuyMul: array expected");
                }
                _0x2d107f.BuyMul = [];
                for (_0x2bbee8 = 0x0; _0x2bbee8 < _0x4566a0.BuyMul.length; ++_0x2bbee8) {
                  _0x2d107f.BuyMul[_0x2bbee8] = Number(_0x4566a0.BuyMul[_0x2bbee8]);
                }
              }
              return _0x2d107f;
            };
            _0xea4c87.toObject = function (_0x521b97, _0x1b0633) {
              if (!_0x1b0633) {
                _0x1b0633 = {};
              }
              var _0x1c2f34 = {};
              if (_0x1b0633.arrays || _0x1b0633.defaults) {
                _0x1c2f34.Mul = [];
                _0x1c2f34.JPOdds = [];
                _0x1c2f34.BlueOdds = [];
                _0x1c2f34.CoinOdds = [];
                _0x1c2f34.CrackLevels = [];
                _0x1c2f34.BuyMul = [];
              }
              if (_0x1b0633.defaults) {
                _0x1c2f34.ShowExtra = false;
                _0x1c2f34.MaxBet = 0x0;
              }
              if (null != _0x521b97.ShowExtra && _0x521b97.hasOwnProperty("ShowExtra")) {
                _0x1c2f34.ShowExtra = _0x521b97.ShowExtra;
              }
              if (_0x521b97.Mul && _0x521b97.Mul.length) {
                _0x1c2f34.Mul = [];
                for (var _0x50c8f5 = 0x0; _0x50c8f5 < _0x521b97.Mul.length; ++_0x50c8f5) {
                  _0x1c2f34.Mul[_0x50c8f5] = _0x1b0633.json && !isFinite(_0x521b97.Mul[_0x50c8f5]) ? String(_0x521b97.Mul[_0x50c8f5]) : _0x521b97.Mul[_0x50c8f5];
                }
              }
              if (_0x521b97.JPOdds && _0x521b97.JPOdds.length) {
                _0x1c2f34.JPOdds = [];
                for (_0x50c8f5 = 0x0; _0x50c8f5 < _0x521b97.JPOdds.length; ++_0x50c8f5) {
                  _0x1c2f34.JPOdds[_0x50c8f5] = _0x521b97.JPOdds[_0x50c8f5];
                }
              }
              if (_0x521b97.BlueOdds && _0x521b97.BlueOdds.length) {
                _0x1c2f34.BlueOdds = [];
                for (_0x50c8f5 = 0x0; _0x50c8f5 < _0x521b97.BlueOdds.length; ++_0x50c8f5) {
                  _0x1c2f34.BlueOdds[_0x50c8f5] = _0x32aff5.tlpProto.Column.toObject(_0x521b97.BlueOdds[_0x50c8f5], _0x1b0633);
                }
              }
              if (_0x521b97.CoinOdds && _0x521b97.CoinOdds.length) {
                _0x1c2f34.CoinOdds = [];
                for (_0x50c8f5 = 0x0; _0x50c8f5 < _0x521b97.CoinOdds.length; ++_0x50c8f5) {
                  _0x1c2f34.CoinOdds[_0x50c8f5] = _0x32aff5.tlpProto.Column.toObject(_0x521b97.CoinOdds[_0x50c8f5], _0x1b0633);
                }
              }
              if (_0x521b97.CrackLevels && _0x521b97.CrackLevels.length) {
                _0x1c2f34.CrackLevels = [];
                for (_0x50c8f5 = 0x0; _0x50c8f5 < _0x521b97.CrackLevels.length; ++_0x50c8f5) {
                  _0x1c2f34.CrackLevels[_0x50c8f5] = _0x521b97.CrackLevels[_0x50c8f5];
                }
              }
              if (null != _0x521b97.MaxBet && _0x521b97.hasOwnProperty("MaxBet")) {
                _0x1c2f34.MaxBet = _0x1b0633.json && !isFinite(_0x521b97.MaxBet) ? String(_0x521b97.MaxBet) : _0x521b97.MaxBet;
              }
              if (_0x521b97.BuyMul && _0x521b97.BuyMul.length) {
                _0x1c2f34.BuyMul = [];
                for (_0x50c8f5 = 0x0; _0x50c8f5 < _0x521b97.BuyMul.length; ++_0x50c8f5) {
                  _0x1c2f34.BuyMul[_0x50c8f5] = _0x1b0633.json && !isFinite(_0x521b97.BuyMul[_0x50c8f5]) ? String(_0x521b97.BuyMul[_0x50c8f5]) : _0x521b97.BuyMul[_0x50c8f5];
                }
              }
              return _0x1c2f34;
            };
            _0xea4c87.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x41d732.util.toJSONOptions);
            };
            return _0xea4c87;
          }(),
          "BuyReq": function () {
            function _0x308cda(_0x1604ed) {
              if (_0x1604ed) {
                var _0x581d16 = Object.keys(_0x1604ed);
                for (var _0xe501a9 = 0x0; _0xe501a9 < _0x581d16.length; ++_0xe501a9) {
                  if (null != _0x1604ed[_0x581d16[_0xe501a9]]) {
                    this[_0x581d16[_0xe501a9]] = _0x1604ed[_0x581d16[_0xe501a9]];
                  }
                }
              }
            }
            _0x308cda.prototype.BaseBet = 0x0;
            _0x308cda.prototype.BuyType = 0x0;
            _0x308cda.create = function (_0x3b77be) {
              return new _0x308cda(_0x3b77be);
            };
            _0x308cda.encode = function (_0x310998, _0x3d4aa8) {
              if (!_0x3d4aa8) {
                _0x3d4aa8 = _0x3c60c4.create();
              }
              if (null != _0x310998.BaseBet && Object.hasOwnProperty.call(_0x310998, "BaseBet")) {
                _0x3d4aa8.uint32(0x9).double(_0x310998.BaseBet);
              }
              if (null != _0x310998.BuyType && Object.hasOwnProperty.call(_0x310998, "BuyType")) {
                _0x3d4aa8.uint32(0x10).int32(_0x310998.BuyType);
              }
              return _0x3d4aa8;
            };
            _0x308cda.encodeDelimited = function (_0x27f419, _0x14692f) {
              return this.encode(_0x27f419, _0x14692f).ldelim();
            };
            _0x308cda.decode = function (_0x45c856, _0x3c6092) {
              if (!(_0x45c856 instanceof _0x40d7df)) {
                _0x45c856 = _0x40d7df.create(_0x45c856);
              }
              var _0x320bf9 = undefined === _0x3c6092 ? _0x45c856.len : _0x45c856.pos + _0x3c6092;
              for (var _0x5c975d = new _0x32aff5.tlpProto.BuyReq(); _0x45c856.pos < _0x320bf9;) {
                var _0x2219ec = _0x45c856.uint32();
                switch (_0x2219ec >>> 0x3) {
                  case 0x1:
                    _0x5c975d.BaseBet = _0x45c856.double();
                    break;
                  case 0x2:
                    _0x5c975d.BuyType = _0x45c856.int32();
                    break;
                  default:
                    _0x45c856.skipType(0x7 & _0x2219ec);
                }
              }
              return _0x5c975d;
            };
            _0x308cda.decodeDelimited = function (_0x415470) {
              if (!(_0x415470 instanceof _0x40d7df)) {
                _0x415470 = new _0x40d7df(_0x415470);
              }
              return this.decode(_0x415470, _0x415470.uint32());
            };
            _0x308cda.verify = function (_0x5c11eb) {
              return "object" != typeof _0x5c11eb || null === _0x5c11eb ? "object expected" : null != _0x5c11eb.BaseBet && _0x5c11eb.hasOwnProperty("BaseBet") && 'number' != typeof _0x5c11eb.BaseBet ? "BaseBet: number expected" : null != _0x5c11eb.BuyType && _0x5c11eb.hasOwnProperty('BuyType') && !_0x17d41e.isInteger(_0x5c11eb.BuyType) ? "BuyType: integer expected" : null;
            };
            _0x308cda.fromObject = function (_0x3b3199) {
              if (_0x3b3199 instanceof _0x32aff5.tlpProto.BuyReq) {
                return _0x3b3199;
              }
              var _0x8fb784 = new _0x32aff5.tlpProto.BuyReq();
              if (null != _0x3b3199.BaseBet) {
                _0x8fb784.BaseBet = Number(_0x3b3199.BaseBet);
              }
              if (null != _0x3b3199.BuyType) {
                _0x8fb784.BuyType = 0x0 | _0x3b3199.BuyType;
              }
              return _0x8fb784;
            };
            _0x308cda.toObject = function (_0x316ebf, _0x2eaa58) {
              if (!_0x2eaa58) {
                _0x2eaa58 = {};
              }
              var _0x35707a = {};
              if (_0x2eaa58.defaults) {
                _0x35707a.BaseBet = 0x0;
                _0x35707a.BuyType = 0x0;
              }
              if (null != _0x316ebf.BaseBet && _0x316ebf.hasOwnProperty("BaseBet")) {
                _0x35707a.BaseBet = _0x2eaa58.json && !isFinite(_0x316ebf.BaseBet) ? String(_0x316ebf.BaseBet) : _0x316ebf.BaseBet;
              }
              if (null != _0x316ebf.BuyType && _0x316ebf.hasOwnProperty("BuyType")) {
                _0x35707a.BuyType = _0x316ebf.BuyType;
              }
              return _0x35707a;
            };
            _0x308cda.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x41d732.util.toJSONOptions);
            };
            return _0x308cda;
          }()
        }).Column = function () {
          function _0xc3075(_0x4336d2) {
            this.Col = [];
            if (_0x4336d2) {
              var _0x36bda6 = Object.keys(_0x4336d2);
              for (var _0x1ac1b1 = 0x0; _0x1ac1b1 < _0x36bda6.length; ++_0x1ac1b1) {
                if (null != _0x4336d2[_0x36bda6[_0x1ac1b1]]) {
                  this[_0x36bda6[_0x1ac1b1]] = _0x4336d2[_0x36bda6[_0x1ac1b1]];
                }
              }
            }
          }
          _0xc3075.prototype.Col = _0x17d41e.emptyArray;
          _0xc3075.create = function (_0x4f5c42) {
            return new _0xc3075(_0x4f5c42);
          };
          _0xc3075.encode = function (_0x1588da, _0x1a4974) {
            if (!_0x1a4974) {
              _0x1a4974 = _0x3c60c4.create();
            }
            if (null != _0x1588da.Col && _0x1588da.Col.length) {
              _0x1a4974.uint32(0xa).fork();
              for (var _0x2afd0d = 0x0; _0x2afd0d < _0x1588da.Col.length; ++_0x2afd0d) {
                _0x1a4974.int32(_0x1588da.Col[_0x2afd0d]);
              }
              _0x1a4974.ldelim();
            }
            return _0x1a4974;
          };
          _0xc3075.encodeDelimited = function (_0x1dcd33, _0x30b820) {
            return this.encode(_0x1dcd33, _0x30b820).ldelim();
          };
          _0xc3075.decode = function (_0x48f747, _0x3bb051) {
            if (!(_0x48f747 instanceof _0x40d7df)) {
              _0x48f747 = _0x40d7df.create(_0x48f747);
            }
            var _0x49e0b9 = undefined === _0x3bb051 ? _0x48f747.len : _0x48f747.pos + _0x3bb051;
            for (var _0x3ca2f5 = new _0x32aff5.tlpProto.Column(); _0x48f747.pos < _0x49e0b9;) {
              var _0x52a5b5 = _0x48f747.uint32();
              switch (_0x52a5b5 >>> 0x3) {
                case 0x1:
                  if (!(_0x3ca2f5.Col && _0x3ca2f5.Col.length)) {
                    _0x3ca2f5.Col = [];
                  }
                  if (0x2 == (0x7 & _0x52a5b5)) {
                    for (var _0x33343a = _0x48f747.uint32() + _0x48f747.pos; _0x48f747.pos < _0x33343a;) {
                      _0x3ca2f5.Col.push(_0x48f747.int32());
                    }
                  } else {
                    _0x3ca2f5.Col.push(_0x48f747.int32());
                  }
                  break;
                default:
                  _0x48f747.skipType(0x7 & _0x52a5b5);
              }
            }
            return _0x3ca2f5;
          };
          _0xc3075.decodeDelimited = function (_0x53913f) {
            if (!(_0x53913f instanceof _0x40d7df)) {
              _0x53913f = new _0x40d7df(_0x53913f);
            }
            return this.decode(_0x53913f, _0x53913f.uint32());
          };
          _0xc3075.verify = function (_0x4a9064) {
            if ('object' != typeof _0x4a9064 || null === _0x4a9064) {
              return "object expected";
            }
            if (null != _0x4a9064.Col && _0x4a9064.hasOwnProperty("Col")) {
              if (!Array.isArray(_0x4a9064.Col)) {
                return "Col: array expected";
              }
              for (var _0x268638 = 0x0; _0x268638 < _0x4a9064.Col.length; ++_0x268638) {
                if (!_0x17d41e.isInteger(_0x4a9064.Col[_0x268638])) {
                  return "Col: integer[] expected";
                }
              }
            }
            return null;
          };
          _0xc3075.fromObject = function (_0x7ca436) {
            if (_0x7ca436 instanceof _0x32aff5.tlpProto.Column) {
              return _0x7ca436;
            }
            var _0x4823a3 = new _0x32aff5.tlpProto.Column();
            if (_0x7ca436.Col) {
              if (!Array.isArray(_0x7ca436.Col)) {
                throw TypeError(".tlpProto.Column.Col: array expected");
              }
              _0x4823a3.Col = [];
              for (var _0x656571 = 0x0; _0x656571 < _0x7ca436.Col.length; ++_0x656571) {
                _0x4823a3.Col[_0x656571] = 0x0 | _0x7ca436.Col[_0x656571];
              }
            }
            return _0x4823a3;
          };
          _0xc3075.toObject = function (_0x1cd291, _0x16d9ca) {
            if (!_0x16d9ca) {
              _0x16d9ca = {};
            }
            var _0x39041c = {};
            if (_0x16d9ca.arrays || _0x16d9ca.defaults) {
              _0x39041c.Col = [];
            }
            if (_0x1cd291.Col && _0x1cd291.Col.length) {
              _0x39041c.Col = [];
              for (var _0x1e99a7 = 0x0; _0x1e99a7 < _0x1cd291.Col.length; ++_0x1e99a7) {
                _0x39041c.Col[_0x1e99a7] = _0x1cd291.Col[_0x1e99a7];
              }
            }
            return _0x39041c;
          };
          _0xc3075.prototype.toJSON = function () {
            return this.constructor.toObject(this, _0x41d732.util.toJSONOptions);
          };
          return _0xc3075;
        }();
        _0x32aff5.tlpProto = _0x425819;
        _0x571da8.exports = _0x32aff5;
        _0x3a0561 = _0x571da8.exports;
      }, function () {
        return {
          'protobufjs/minimal': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/node_modules/protobufjs/minimal.js'
        };
      });
      _0x3a1ca5.require('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/LuckyPig/Client/Thai_UAT/assets/Script/Proto/tlpProto.js');
      _0xec9bd2._RF.push({}, 'ad7a1ulsJFA+rzJT7It5c01', "SlotReels", undefined);
      var _0x4202e5 = [0x0, 0x1, 0x2, 0x3, 0x4];
      var _0x2ebf90 = _0x3e9873.ccclass;
      var _0x2d6734 = _0x3e9873.property;
      _0x444124 = _0x2ebf90("SlotReel");
      _0xc5fc10 = _0x2d6734({
        'type': _0x1a18d5,
        'tooltip': "Scatter"
      });
      _0x54e290 = function (_0x6a2683) {
        function _0x399eac() {
          var _0x13ca67;
          var _0x4643dc = arguments.length;
          var _0x80d85b = new Array(_0x4643dc);
          for (var _0x15a620 = 0x0; _0x15a620 < _0x4643dc; _0x15a620++) {
            _0x80d85b[_0x15a620] = arguments[_0x15a620];
          }
          _0xec902e(_0x13ca67 = _0x6a2683.call.apply(_0x6a2683, [this].concat(_0x80d85b)) || this, "m_scatterPrefab", _0x437f4f, _0x11be3a(_0x13ca67));
          _0x13ca67.m_isLoadingComplete = false;
          _0x13ca67.m_viewSize = null;
          _0x13ca67.m_symbolSize = null;
          _0x13ca67.m_allColumns = [];
          _0x13ca67.m_totalLength = null;
          _0x13ca67.m_spinBufferTime01 = 0.1;
          _0x13ca67.m_spinBufferTime02 = 0.1;
          _0x13ca67.m_riseTime = 0x0;
          _0x13ca67.m_upLength = 0x0;
          _0x13ca67.m_downLength = 0xf;
          _0x13ca67.m_spinTime = 0.25;
          _0x13ca67.m_spinDelayTime = 0x0;
          _0x13ca67.m_time = 0x0;
          _0x13ca67.m_stopTime = 0x0;
          _0x13ca67.m_reelStopTime = new Array();
          _0x13ca67.m_reelPreTime = new Array();
          _0x13ca67.m_isClickStopBtn = false;
          _0x13ca67.m_lockColumn = new Array();
          _0x13ca67.m_timesOfBaseSpin = 0x2;
          _0x13ca67.m_spinIntervalTimes = 0x1;
          _0x13ca67.m_comparePos = [];
          _0x13ca67.m_reelXPos = [];
          _0x13ca67.m_reelYPos = [];
          _0x13ca67.m_isNotChangeSymbolThisRound = {};
          _0x13ca67.m_isStop = false;
          _0x13ca67.m_showScatter = false;
          _0x13ca67.m_scatterFlyStopCount = 0x0;
          _0x13ca67.m_allReelsStop = false;
          _0x13ca67.m_isChangeToFinalSymbol = new Array();
          _0x13ca67.m_nearWinStartCol = -0x1;
          _0x13ca67.m_nearWinNowCol = -0x1;
          _0x13ca67.m_nearWinMoreSpin = 0xa;
          _0x13ca67.m_nearWinLock = [false, false, false, false, false];
          _0x13ca67.m_scatterNum = -0x1;
          _0x13ca67.m_plateInfo = new Array();
          _0x13ca67.m_reelPositionOffset = [_0x1536ed(0x0, 0x0), _0x1536ed(0x0, 0x0), _0x1536ed(0x0, 0x0), _0x1536ed(0x0, 0x0), _0x1536ed(0x0, 0x0)];
          _0x13ca67.m_FGInitPlate = [];
          _0x13ca67.m_isPlayStopSound = [false, false, false, false, false];
          _0x13ca67.m_isPlayStopEffect = [false, false, false, false, false];
          _0x13ca67.m_reelSoundId = null;
          _0x13ca67.m_nearWinSoundId = [-0x1, -0x1, -0x1, -0x1, -0x1, -0x1];
          _0x13ca67.m_hasPlayedStopAllEffect = false;
          _0x13ca67.m_isPlayingEffect = false;
          _0x13ca67.m_gameView = null;
          return _0x13ca67;
        }
        _0xed7a37(_0x399eac, _0x6a2683);
        var _0x42084c = _0x399eac.prototype;
        _0x42084c.onLoad = function () {
          var _0x31d9db = this;
          this.m_viewSize = this.node.getComponent(_0x21d275).contentSize;
          this.m_symbolSize = new _0x4e3d3c((this.m_viewSize.width - _0xcba612.SeparateLineWidth * (_0xcba612.COL - 0x1)) / _0xcba612.COL, this.m_viewSize.height / _0xcba612.ROW);
          for (var _0x245c68 = 0x0; _0x245c68 < 0x3; ++_0x245c68) {
            this.m_comparePos.push(this.m_viewSize.height * _0x245c68);
            this.m_reelYPos.push(this.m_viewSize.height * (_0x245c68 - 1.5));
          }
          for (var _0x5a46e4 = 0x0; _0x5a46e4 < _0xcba612.COL; ++_0x5a46e4) {
            this.m_reelXPos.push(this.m_symbolSize.width * (_0x5a46e4 + 0.5) - this.m_viewSize.width / 0x2 + _0xcba612.SeparateLineWidth * _0x5a46e4 + this.m_reelPositionOffset[_0x5a46e4].x);
          }
          this.m_totalLength = this.m_viewSize.height * 0x3;
          var _0x53fe81 = function () {
            var _0x5932b0 = _0xf3ebeb.TempoSetting.TripleCoinTreasure;
            _0x31d9db.m_riseTime = _0x5932b0.BASE.RISE_TIME;
            _0x31d9db.m_upLength = _0x5932b0.BASE.UP_LENGTH;
            _0x31d9db.m_spinBufferTime01 = _0x5932b0.BASE.SPIN_BUFFER_TIME_01;
            _0x31d9db.m_spinBufferTime02 = _0x5932b0.BASE.SPIN_BUFFER_TIME_02;
            _0x31d9db.m_downLength = _0x5932b0.BASE.DOWN_LENGTH;
            _0x31d9db.m_spinTime = _0x5932b0.BASE.SPIN_SPEED;
            _0x31d9db.m_timesOfBaseSpin = _0x5932b0.BASE.TIMES_OF_BASE_SPIN;
            _0x31d9db.m_spinIntervalTimes = _0x5932b0.BASE.SPIN_INTERVAL_TIMES;
            _0x31d9db.m_spinDelayTime = _0x5932b0.BASE.SPIN_DELAY_TIME;
          };
          _0x53fe81();
          _0xf3ebeb.AddCb(_0x53fe81);
        };
        _0x42084c.Init = function (_0x5ac115) {
          this.m_gameView = _0x5ac115;
        };
        _0x42084c.CreateSymbol = function () {
          for (var _0x5ab557 = 0x0; _0x5ab557 < 0x3; ++_0x5ab557) {
            var _0x108fef = new Array();
            this.m_allColumns.push(_0x108fef);
          }
          for (var _0x2027fc = 2; _0x2027fc >= 0x0; --_0x2027fc) {
            this.CreatePlate(_0x2027fc);
          }
          this.m_gameView.OldRealPlate = JSON.parse(JSON.stringify(this.m_plateInfo));
          this.m_isLoadingComplete = true;
        };
        _0x42084c.CreatePlate = function (_0x45a5fd) {
          for (var _0x497a52 = 0x0; _0x497a52 < _0xcba612.COL; ++_0x497a52) {
            var _0x22b00f = _0x497a52.toString();
            var _0x4935d6 = _0xcba612.NODE_PREFIX_NAME[_0x45a5fd] + _0x22b00f;
            var _0x4bb5cc = new _0x346a01(this.node, this.m_viewSize.height, this.m_gameView, _0x4935d6);
            _0x4bb5cc.Name = _0x4935d6;
            _0x4bb5cc.SetPosition(_0x1536ed(this.m_reelXPos[_0x497a52], this.m_reelYPos[_0x45a5fd]));
            var _0x4fac32 = new _0x3a0561.tlpProto.Column();
            for (var _0x378f80 = 0x0; _0x378f80 < _0xcba612.ROW; ++_0x378f80) {
              _0x4fac32.Col.push(_0xcba612.Symbol.Banknote + _0x497a52);
            }
            _0x4bb5cc.SetSymbols(_0x4fac32.Col);
            if (_0x45a5fd === _0xcba612.MIDDLE_PLATE_INDEX) {
              this.m_plateInfo.push(_0x4fac32);
            }
            this.m_allColumns[_0x45a5fd].push(_0x4bb5cc);
          }
        };
        _0x42084c.SetPlateSymbol = function (_0x5b3798) {
          if (0x0 === _0x5b3798.length || _0x5b3798.length < _0xcba612.COL) {
            _0x5b3798 = this.m_gameView.OldRealPlate;
          }
          for (var _0x2f452c = 0x0; _0x2f452c < _0xcba612.COL; ++_0x2f452c) {
            this.m_reelStopTime[_0x2f452c] = this.m_reelPreTime[_0x2f452c] = null;
            this.m_allColumns[_0xcba612.MIDDLE_PLATE_INDEX][_0x2f452c].SetSymbols(_0x5b3798[_0x2f452c].Col);
          }
          for (var _0x5e62c6 = 0x0; _0x5e62c6 < 0x3; ++_0x5e62c6) {
            for (var _0x30e8e3 = 0x0; _0x30e8e3 < _0xcba612.COL; ++_0x30e8e3) {
              this.m_allColumns[_0x5e62c6][_0x30e8e3].SetPosition(_0x1536ed(this.ReelXPos[_0x30e8e3], this.m_reelYPos[_0x5e62c6]));
            }
          }
        };
        _0x42084c.RandomSymbol = function () {
          return Math.floor(Math.random() * (_0xcba612.Symbol.Scatter_Green - _0xcba612.SYMBOL_OFFSET)) + _0xcba612.SYMBOL_OFFSET;
        };
        _0x42084c.StartSpin = function () {
          this.m_time = 0x0;
          this.StopTime = 0x0;
          this.m_isStop = false;
          this.m_showScatter = false;
          this.m_scatterFlyStopCount = 0x0;
          this.m_allReelsStop = false;
          this.m_isClickStopBtn = false;
          this.m_hasPlayedStopAllEffect = false;
          this.m_isPlayStopSound = [false, false, false, false, false];
          this.m_isPlayStopEffect = [false, false, false, false, false];
          this.m_nearWinLock = [false, false, false, false, false];
          this.m_nearWinNowCol = -0x1;
          this.m_scatterNum = 0x0;
          for (var _0x17d6ec = 0x0; _0x17d6ec < _0xcba612.COL; ++_0x17d6ec) {
            this.m_reelStopTime[_0x17d6ec] = this.m_reelPreTime[_0x17d6ec] = null;
          }
          for (var _0x58183b = 0x0; _0x58183b < this.m_isChangeToFinalSymbol.length; ++_0x58183b) {
            this.m_isChangeToFinalSymbol[_0x58183b] = this.m_lockColumn[_0x58183b] = false;
          }
          for (var _0x5e040a in this.m_isNotChangeSymbolThisRound) this.m_isNotChangeSymbolThisRound[_0x5e040a] = true;
        };
        _0x42084c.CountScatter = function () {
          for (var _0x5c0b0d = 0x0; _0x5c0b0d < _0xcba612.COL; _0x5c0b0d++) {
            for (var _0x48630a = 0x0; _0x48630a < this.m_plateInfo[_0x5c0b0d].Col.length; ++_0x48630a) {
              if (!(this.m_plateInfo[_0x5c0b0d].Col[_0x48630a] !== _0xcba612.Symbol.Scatter_Blue && this.m_plateInfo[_0x5c0b0d].Col[_0x48630a] !== _0xcba612.Symbol.Scatter_Red && this.m_plateInfo[_0x5c0b0d].Col[_0x48630a] !== _0xcba612.Symbol.Scatter_Green)) {
                this.ScatterFlyStopCount++;
              }
            }
          }
        };
        _0x42084c.ShowStopSymbolEffect = function () {
          var _0x2554f7 = _0x26fe6f(_0x352743().mark(function _0x275413(_0x8d96a5, _0x501d2a) {
            var _0x4cb7db;
            var _0x31bd10;
            return _0x352743().wrap(function (_0x424f91) {
              for (;;) {
                switch (_0x424f91.prev = _0x424f91.next) {
                  case 0x0:
                    if (!this.m_isPlayStopEffect[_0x501d2a]) {
                      _0x424f91.next = 0x3;
                      break;
                    }
                    if (_0x501d2a == _0xcba612.COL - 0x1) {
                      this.m_allReelsStop = true;
                    }
                    return _0x424f91.abrupt('return');
                  case 0x3:
                    this.m_isPlayStopEffect[_0x501d2a] = true;
                    _0x4cb7db = false;
                    for (_0x31bd10 = 0x0; _0x31bd10 < this.m_plateInfo[_0x501d2a].Col.length; ++_0x31bd10) {
                      if (this.m_plateInfo[_0x501d2a].Col[_0x31bd10] === _0xcba612.Symbol.Scatter_Blue) {
                        _0x4cb7db = true;
                        if (this.m_gameView.RoundInfo.BlueData[0x0] || this.CheckCanTriggerNearWin(_0xcba612.SCATTERS.BLUE)) {
                          this.m_gameView.IsTriggerBluePig = true;
                        }
                      }
                      if (this.m_plateInfo[_0x501d2a].Col[_0x31bd10] === _0xcba612.Symbol.Scatter_Red) {
                        _0x4cb7db = true;
                        if (this.m_gameView.RoundInfo.RedData[0x0] || this.CheckCanTriggerNearWin(_0xcba612.SCATTERS.RED)) {
                          this.m_gameView.IsTriggerRedPig = true;
                        }
                      }
                      if (this.m_plateInfo[_0x501d2a].Col[_0x31bd10] === _0xcba612.Symbol.Scatter_Green) {
                        _0x4cb7db = true;
                        if (this.m_gameView.RoundInfo.GreenData[0x0] || this.CheckCanTriggerNearWin(_0xcba612.SCATTERS.GREEN)) {
                          this.m_gameView.IsTriggerGreenPig = true;
                        }
                      }
                    }
                    if (_0x4cb7db) {
                      _0x424f91.next = 0xb;
                      break;
                    }
                    if (_0x8d96a5 || _0x501d2a == _0xcba612.COL - 0x1) {
                      this.m_allReelsStop = true;
                    }
                    _0x424f91.next = 0xa;
                    return _0xd8402d.Wait(this, _0xcba612.HitTime);
                  case 0xa:
                    return _0x424f91.abrupt("return");
                  case 0xb:
                    this.m_showScatter = true;
                    if (!_0x8d96a5 || this.m_hasPlayedStopAllEffect) {
                      _0x424f91.next = 0x16;
                      break;
                    }
                    this.m_hasPlayedStopAllEffect = true;
                    this.m_isPlayingEffect = true;
                    _0x27c287.Play(_0xcba612.AudioClips.scatter_stop);
                    _0x424f91.next = 0x12;
                    return this.m_gameView.EffectPlate.ShowAllScatterStop();
                  case 0x12:
                    this.m_isPlayingEffect = false;
                    this.m_allReelsStop = true;
                    _0x424f91.next = 0x1a;
                    break;
                  case 0x16:
                    this.m_isPlayingEffect = true;
                    _0x424f91.next = 0x19;
                    return this.m_gameView.EffectPlate.ShowScatterStop(_0x501d2a);
                  case 0x19:
                    this.m_isPlayingEffect = false;
                  case 0x1a:
                    _0x424f91.next = 0x1c;
                    return _0xd8402d.Wait(this, _0xcba612.HitTime);
                  case 0x1c:
                    if (_0x8d96a5 || _0x501d2a == _0xcba612.COL - 0x1) {
                      this.m_allReelsStop = true;
                    }
                  case 0x1d:
                  case "end":
                    return _0x424f91.stop();
                }
              }
            }, _0x275413, this);
          }));
          return function (_0x4e012f, _0x59eb25) {
            return _0x2554f7.apply(this, arguments);
          };
        }();
        _0x42084c.CheckCanTriggerNearWin = function (_0x4365e9) {
          var _0x1ddf05 = this.m_gameView.AddCrack[_0x4365e9] ? 0x0 : Math.random();
          switch (this.m_gameView.CrackLevels[_0x4365e9]) {
            case 0x0:
              _0x392c7c("upgrageDebug CheckCanTriggerNearWin.", _0x4365e9, _0x1ddf05, _0x1ddf05 < 0.05);
              return _0x1ddf05 < 0.05;
            case 0x1:
              _0x392c7c("upgrageDebug CheckCanTriggerNearWin.", _0x4365e9, _0x1ddf05, _0x1ddf05 < 0.1);
              return _0x1ddf05 < 0.1;
            case 0x2:
              _0x392c7c("upgrageDebug CheckCanTriggerNearWin.", _0x4365e9, _0x1ddf05, _0x1ddf05 < 0.15);
              return _0x1ddf05 < 0.15;
            default:
              _0x392c7c("upgrageDebug CheckCanTriggerNearWin.", _0x4365e9, "false");
              return false;
          }
        };
        _0x42084c.CheckAddLevel = function (_0x23aa95) {
          if (this.m_gameView.AddCrack[_0x23aa95] && this.m_gameView.CrackLevels[_0x23aa95] < _0xcba612.MAX_LEVEL) {
            this.m_gameView.CrackLevels[_0x23aa95] = _0x14c118.strip(this.m_gameView.CrackLevels[_0x23aa95] + 0x1);
            _0x392c7c("upgrageDebug addCrackLevelSuccess.", _0x23aa95, "upgrade to", this.m_gameView.CrackLevels[_0x23aa95]);
          } else if (this.m_gameView.CrackLevels[_0x23aa95] >= _0xcba612.MAX_LEVEL) {
            _0x51f52f("upgrageDebug addCrackLevelFail!!!", _0x23aa95, " already grow to max level.");
          }
        };
        _0x42084c.PlayReelSound = function () {
          _0x27c287.Play(_0xcba612.AudioClips.reel_stop);
        };
        _0x42084c.ClickStopBtn = function () {
          if (0x0 !== this.StopTime) {
            this.m_isClickStopBtn = true;
            var _0x5875ab = Math.ceil(this.m_time / this.m_spinTime);
            var _0x307a7c = ((_0x5875ab = _0x5875ab > 0x0 ? _0x5875ab : 0x1) - 0x1) * this.m_spinTime;
            var _0x59a524 = _0x14c118.strip(_0x307a7c + this.m_spinTime);
            for (var _0x8b784 = 0x0; _0x8b784 < _0xcba612.COL; ++_0x8b784) {
              if (this.m_reelStopTime[_0x8b784] > _0x59a524) {
                this.m_reelStopTime[_0x8b784] = _0x59a524;
                this.m_reelPreTime[_0x8b784] = _0x307a7c;
              }
            }
            var _0x1e047a = _0xf3ebeb.TempoSetting.TripleCoinTreasure.SPEED_UP_STOP_TIME(0x0, this.m_time);
            if (_0x1e047a < this.m_stopTime) {
              this.StopTime = _0x14c118.strip(_0x1e047a);
            }
          }
        };
        _0x42084c.Spin = function (_0x5cad3b) {
          this.m_time = _0x14c118.strip(this.m_time + _0x5cad3b);
          if (!this.m_isStop) {
            this.SpinAll(_0x5cad3b, _0x4202e5);
            if (!(0x0 === this.StopTime || this.m_time <= this.m_stopTime)) {
              this.m_isStop = true;
              if (this.m_reelSoundId) {
                _0x27c287.Stop(this.m_reelSoundId);
                this.m_reelSoundId = null;
              }
            }
          }
        };
        _0x42084c.StopNearWinSound = function () {
          for (var _0x4ce769 = 0x0; _0x4ce769 < this.m_nearWinSoundId.length; ++_0x4ce769) {
            _0x27c287.Stop(this.m_nearWinSoundId[_0x4ce769]);
            this.m_nearWinSoundId[_0x4ce769] = -0x1;
          }
        };
        _0x42084c.SpinAll = function (_0x5d7e20, _0x236a8a) {
          for (var _0x3a4aa4 = 0x0; _0x3a4aa4 < _0x236a8a.length; ++_0x3a4aa4) {
            var _0x2ccc0e = this.m_spinTime;
            var _0x5a9556 = (this.m_time - this.m_riseTime * _0xcba612.COL) % _0x2ccc0e / _0x2ccc0e * this.m_totalLength;
            var _0x29f25f = _0x236a8a[_0x3a4aa4];
            for (var _0x51186a = 0x0; _0x51186a < 0x3; ++_0x51186a) {
              this.Spin_RealSpinMultiple(_0x29f25f, this.m_allColumns[_0x51186a][_0x29f25f], _0x51186a, _0x5a9556);
            }
          }
        };
        _0x42084c.Spin_RealSpinMultiple = function (_0x5baee8, _0x42fec1, _0x5b4843, _0x5773b7) {
          var _0x542edd = this.m_time;
          var _0x3e301a = this.m_reelStopTime[_0x5baee8];
          var _0x4d724d = this.m_riseTime * _0xcba612.COL;
          var _0x5b4db1 = this.m_reelXPos[_0x5baee8];
          var _0x1e432a = this.m_reelYPos[_0x5b4843];
          if (_0x5b4843 === _0xcba612.MIDDLE_PLATE_INDEX && _0x542edd > _0x3e301a + _0x4d724d + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
            _0x1e432a = this.m_reelYPos[_0x5b4843];
            _0x42fec1.SetPosition(_0x1536ed(_0x5b4db1, _0x1e432a));
          }
          if (!(_0x542edd < this.m_riseTime * _0x5baee8)) {
            if (_0x542edd < this.m_riseTime * (_0x5baee8 + 0x1)) {
              var _0x224086 = (_0x542edd - this.m_riseTime * _0x5baee8) / this.m_riseTime * this.m_upLength;
              _0x42fec1.SetPosition(_0x1536ed(_0x5b4db1, _0x1e432a + _0x224086));
            } else {
              if (_0x542edd < _0x4d724d) {
                _0x42fec1.SetPosition(_0x1536ed(_0x5b4db1, _0x1e432a + this.m_upLength));
              } else {
                if (null === _0x3e301a || _0x542edd < _0x3e301a + _0x4d724d) {
                  var _0x724669 = this.CheckMoveLength(_0x5773b7, this.m_comparePos[_0x5b4843], _0x5baee8, _0x42fec1);
                  _0x42fec1.SetPosition(_0x1536ed(_0x5b4db1, _0x1e432a - _0x724669));
                } else {
                  if (_0x542edd < _0x3e301a + _0x4d724d + this.m_spinBufferTime01) {
                    var _0x397b6d = (_0x542edd - _0x3e301a - _0x4d724d) / this.m_spinBufferTime01 * this.m_downLength;
                    _0x42fec1.SetPosition(_0x1536ed(_0x5b4db1, _0x1e432a - _0x397b6d));
                    this.CheckChangeToFinalSymbol(_0x5baee8, _0x42fec1, true);
                    this.CheckPlayStopSoundAndEffect(_0x5baee8);
                  } else {
                    if (_0x542edd < _0x3e301a + _0x4d724d + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
                      var _0x555701 = (_0x542edd - _0x3e301a - _0x4d724d - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
                      _0x42fec1.SetPosition(_0x1536ed(_0x5b4db1, _0x1e432a - this.m_downLength + _0x555701));
                      this.CheckChangeToFinalSymbol(_0x5baee8, _0x42fec1, true);
                    } else {
                      this.CheckChangeToFinalSymbol(_0x5baee8, _0x42fec1, true);
                      _0x42fec1.SetPosition(_0x1536ed(_0x5b4db1, _0x1e432a));
                      this.CheckPlayStopSoundAndEffect(_0x5baee8);
                      this.ShowStopSymbolEffect(this.m_isClickStopBtn, _0x5baee8);
                    }
                  }
                }
              }
            }
          }
        };
        _0x42084c.CheckMoveLength = function (_0xad64fd, _0x495854, _0x4c5d80, _0x28a6b5) {
          var _0x167b75 = Number(_0x28a6b5.Name) % 0xa;
          return _0xad64fd < _0x495854 ? _0xad64fd : (this.m_isNotChangeSymbolThisRound[_0x167b75] && _0xad64fd - _0x495854 < this.m_viewSize.height ? (this.ChangeSymbol(_0x4c5d80, _0x28a6b5, this.m_isClickStopBtn), this.m_isNotChangeSymbolThisRound[_0x167b75] = false) : this.m_isNotChangeSymbolThisRound[_0x167b75] = true, _0xad64fd - this.m_totalLength);
        };
        _0x42084c.ChangeSymbol = function (_0x1982a4, _0x47c3b6, _0x311a3a) {
          var _0x4383c0 = Number(_0x47c3b6.Name);
          var _0x4bc58d = this.m_reelPreTime[_0x1982a4];
          var _0x5c0269 = this.m_riseTime * this.m_viewSize.height * 0x3;
          var _0x2a268d = Math.floor(Math.random() * (_0xcba612.MaxSymbolEachColumn - _0xcba612.MinSymbolEachColumn)) + _0xcba612.MinSymbolEachColumn;
          if (_0x311a3a) {
            if (isNaN(_0x4383c0)) {
              var _0x4599e7 = this.CheckIsFreeGameAndGetSymbols(_0x2a268d);
              _0x47c3b6.SetSymbols(_0x4599e7);
            } else {
              _0x47c3b6.SetSymbols(this.m_plateInfo[_0x4383c0].Col);
            }
          } else {
            if (!isNaN(_0x4383c0) && (null !== _0x4bc58d && this.m_time >= _0x4bc58d || Math.abs(this.m_time - (_0x4bc58d + _0x5c0269)) < this.m_spinTime)) {
              _0x47c3b6.SetSymbols(this.m_plateInfo[_0x4383c0].Col);
            } else {
              var _0x475bae = this.CheckIsFreeGameAndGetSymbols(_0x2a268d);
              _0x47c3b6.SetSymbols(_0x475bae);
            }
          }
        };
        _0x42084c.CheckIsFreeGameAndGetSymbols = function (_0x31964f) {
          var _0x324793 = [];
          for (var _0x3f304a = 0x0; _0x3f304a < _0x31964f; ++_0x3f304a) {
            _0x324793.push(this.RandomSymbol());
          }
          return _0x324793;
        };
        _0x42084c.CheckChangeToFinalSymbol = function (_0x44c68e, _0xaa5f97, _0x1aed7c) {
          if (undefined === _0x1aed7c) {
            _0x1aed7c = false;
          }
          var _0x53ebc4 = _0xaa5f97.Name;
          if (!this.m_isChangeToFinalSymbol[_0x53ebc4]) {
            this.m_isChangeToFinalSymbol[_0x53ebc4] = true;
            this.ChangeSymbol(_0x44c68e, _0xaa5f97, _0x1aed7c);
          }
        };
        _0x42084c.CheckPlayStopSoundAndEffect = function (_0x17572d) {
          if (!this.m_isPlayStopSound[_0x17572d]) {
            this.m_isPlayStopSound[_0x17572d] = true;
            if (this.m_isClickStopBtn) {
              this.m_isPlayStopSound = [true, true, true, true, true];
            }
            this.PlayReelSound();
          }
        };
        _0x42084c.SetPlateInfo = function (_0x1c0d16) {
          _0x51f52f("This Plate is ", _0x1c0d16);
          this.m_plateInfo = _0x1c0d16;
          if (!this.m_gameView.IsMgOmen) {
            this.SetReelTimes();
          }
        };
        _0x42084c.SetReelTimes = function (_0x2d0d07) {
          var _0x2f03d7 = this.m_riseTime * _0xcba612.COL;
          if (!_0x2d0d07) {
            if (this.m_gameView.IsMgOmen) {
              return;
            }
            _0x2d0d07 = 0x0 !== (_0x2d0d07 = Math.ceil((this.m_time - _0x2f03d7) / this.m_spinTime)) ? _0x2d0d07 : 0x1;
          }
          var _0x3025f0 = 0x0;
          if (this.m_isClickStopBtn) {
            this.StopTime = _0x14c118.strip(this.m_spinTime * _0x2d0d07 + this.m_spinDelayTime + _0x2f03d7);
            var _0x343988 = _0x14c118.strip(this.m_spinTime * _0x2d0d07);
            var _0x385aa6 = _0x14c118.strip(this.m_spinTime * (_0x2d0d07 - 0x1));
            for (var _0x456ded = 0x0; _0x456ded < _0xcba612.COL; ++_0x456ded) {
              this.m_reelStopTime[_0x456ded] = _0x343988;
              this.m_reelPreTime[_0x456ded] = _0x385aa6;
            }
          } else {
            this.StopTime = _0x14c118.strip(this.m_spinTime * (_0x2d0d07 + this.m_timesOfBaseSpin + this.m_spinIntervalTimes * (_0xcba612.COL - 0x1)) + this.m_spinDelayTime + _0x2f03d7 + this.m_spinBufferTime01 + this.m_spinBufferTime02);
            for (var _0x1e61f4 = 0x0; _0x1e61f4 < _0xcba612.COL; ++_0x1e61f4) {
              if (this.m_lockColumn[_0x1e61f4]) {
                ++_0x3025f0;
              }
              this.m_reelStopTime[_0x1e61f4] = _0x14c118.strip(this.m_spinTime * (_0x2d0d07 + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinTime * (_0x1e61f4 - _0x3025f0));
              this.m_reelPreTime[_0x1e61f4] = _0x14c118.strip(this.m_reelStopTime[_0x1e61f4] - this.m_spinTime);
            }
          }
        };
        _0x42084c.SetSymbolDark = function (_0x21993a, _0x2b6011) {
          for (var _0x29ec1e = 0x0; _0x29ec1e < _0xcba612.COL; ++_0x29ec1e) {
            if (_0x29ec1e !== _0x2b6011) {
              for (var _0x450395 = 0x0; _0x450395 < 0x3; ++_0x450395) {
                this.m_allColumns[_0x450395][_0x29ec1e].SetSymbolDark(_0x21993a);
              }
            } else {
              for (var _0x3ab722 = 0x0; _0x3ab722 < 0x3; ++_0x3ab722) {
                this.m_allColumns[_0x3ab722][_0x29ec1e].SetSymbolDark(false);
              }
            }
          }
        };
        _0x42084c.CheckFGPlateEqual = function (_0x20f666) {
          for (var _0x5e8a51 = 0x0; _0x5e8a51 < _0x20f666.length; ++_0x5e8a51) {
            if (_0x20f666[_0x5e8a51] && _0x20f666[_0x5e8a51][0x0] && 0x0 !== _0x20f666[_0x5e8a51][0x0]) {
              return false;
            }
          }
          return true;
        };
        _0x42084c.CheckColIsStop = function (_0x534105) {
          return this.m_time >= this.m_reelStopTime[_0x534105];
        };
        _0x42084c.CalculateSpinPos = function () {};
        _0x42084c.HidePlate = function () {
          var _0x5abf36 = _0x26fe6f(_0x352743().mark(function _0x2e8122(_0x24a167) {
            var _0x581af5;
            return _0x352743().wrap(function (_0x37793c) {
              for (;;) {
                switch (_0x37793c.prev = _0x37793c.next) {
                  case 0x0:
                    if (undefined === _0x24a167) {
                      _0x24a167 = 0x0;
                    }
                    _0x37793c.next = 0x3;
                    return _0xd8402d.Wait(this, _0x24a167);
                  case 0x3:
                    for (_0x581af5 = 0x0; _0x581af5 < _0xcba612.COL; ++_0x581af5) {
                      this.AllColumns[_0xcba612.MIDDLE_PLATE_INDEX][_0x581af5].SetColumnVisiable(false);
                    }
                  case 0x4:
                  case "end":
                    return _0x37793c.stop();
                }
              }
            }, _0x2e8122, this);
          }));
          return function (_0x32323c) {
            return _0x5abf36.apply(this, arguments);
          };
        }();
        _0x42084c.ShowPlate = function () {
          for (var _0x533047 = 0x0; _0x533047 < _0xcba612.COL; ++_0x533047) {
            this.AllColumns[_0xcba612.MIDDLE_PLATE_INDEX][_0x533047].SetColumnVisiable(true);
          }
        };
        _0x4b136a(_0x399eac, [{
          'key': "IsLoadingComplete",
          'get': function () {
            return this.m_isLoadingComplete;
          }
        }, {
          'key': "AllColumns",
          'get': function () {
            return this.m_allColumns;
          }
        }, {
          'key': "SpinTime",
          'get': function () {
            return this.m_spinTime;
          },
          'set': function (_0x1f239f) {
            this.m_spinTime = _0x1f239f;
          }
        }, {
          'key': "StopTime",
          'get': function () {
            return this.m_stopTime;
          },
          'set': function (_0x1443f1) {
            this.m_stopTime = _0x1443f1;
          }
        }, {
          'key': 'IsClickStopBtn',
          'get': function () {
            return this.m_isClickStopBtn;
          }
        }, {
          'key': "SpinIntervalTimes",
          'get': function () {
            return this.m_spinIntervalTimes;
          },
          'set': function (_0x57cb32) {
            this.m_spinIntervalTimes = _0x57cb32;
          }
        }, {
          'key': "ReelXPos",
          'get': function () {
            return this.m_reelXPos;
          }
        }, {
          'key': "IsStop",
          'get': function () {
            return this.m_isStop;
          }
        }, {
          'key': "ShowScatter",
          'get': function () {
            return this.m_showScatter;
          }
        }, {
          'key': "ScatterFlyStopCount",
          'get': function () {
            return this.m_scatterFlyStopCount;
          },
          'set': function (_0xd35a0e) {
            this.m_scatterFlyStopCount = _0xd35a0e;
          }
        }, {
          'key': "IsAllScatterFlyStopAndReelStop",
          'get': function () {
            return this.m_scatterFlyStopCount <= 0x0 && this.m_allReelsStop;
          }
        }, {
          'key': "ScatterNum",
          'get': function () {
            return this.m_scatterNum;
          },
          'set': function (_0xa10e3d) {
            this.m_scatterNum = _0xa10e3d;
          }
        }, {
          'key': "PlateInfo",
          'get': function () {
            return this.m_plateInfo;
          }
        }, {
          'key': "FGInitPlate",
          'get': function () {
            return this.m_FGInitPlate;
          }
        }, {
          'key': "IsPlayingEffect",
          'get': function () {
            return this.m_isPlayingEffect;
          }
        }]);
        return _0x399eac;
      }(_0x14cfe4);
      _0x437f4f = _0x196fb6(_0x54e290.prototype, "m_scatterPrefab", [_0xc5fc10], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x54957b;
      var _0x247c2b;
      var _0x51175c;
      var _0x50a3f5;
      var _0x58e506;
      var _0x2b9477;
      var _0x3dc258;
      var _0x4a7660;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "76101Ua+jJOX7mU2Po4rSFC", "WinEffects", undefined);
      var _0x105596 = _0x3e9873.ccclass;
      var _0x2df54b = _0x3e9873.property;
      _0x54957b = _0x105596("WinEffects");
      _0x247c2b = _0x2df54b({
        'type': _0x2855cd
      });
      _0x51175c = _0x2df54b({
        'type': _0x84773f,
        'tooltip': "跑分LABEL背景"
      });
      _0x50a3f5 = _0x2df54b({
        'type': _0x84773f,
        'tooltip': "跑分Root節點"
      });
      _0x58e506 = function (_0x5581c7) {
        function _0x51037a() {
          var _0x284658;
          var _0x48ddf7 = arguments.length;
          var _0x2551b6 = new Array(_0x48ddf7);
          for (var _0x6b39ba = 0x0; _0x6b39ba < _0x48ddf7; _0x6b39ba++) {
            _0x2551b6[_0x6b39ba] = arguments[_0x6b39ba];
          }
          _0xec902e(_0x284658 = _0x5581c7.call.apply(_0x5581c7, [this].concat(_0x2551b6)) || this, 'm_winLabel', _0x2b9477, _0x11be3a(_0x284658));
          _0xec902e(_0x284658, "m_winLabelBackGround", _0x3dc258, _0x11be3a(_0x284658));
          _0xec902e(_0x284658, "m_winRoot", _0x4a7660, _0x11be3a(_0x284658));
          _0x284658.m_isRunningSmallWin = false;
          return _0x284658;
        }
        _0xed7a37(_0x51037a, _0x5581c7);
        var _0x4879de = _0x51037a.prototype;
        _0x4879de.SetWinLabelRunning = function (_0x537e22, _0x3a258f) {
          var _0xbffd4b = this;
          if (!(_0x537e22 <= 0x0)) {
            this.node.active = true;
            this.m_isRunningSmallWin = true;
            this.m_winLabel.string = '0';
            var _0x5dc858 = _0x14c118.divide(_0x3a258f, 0.02);
            var _0xd27498 = Number(this.m_winLabel.string.replace(/,/g, ''));
            var _0xe63ba7 = _0x14c118.divide(_0x14c118.strip(_0x537e22 - _0xd27498), _0x5dc858);
            _0x3d8b38.stopAllByTarget(this.m_winRoot);
            this.m_winRoot.setScale(0x1, 0x1, 0x1);
            _0x174aa1(this.m_winRoot).parallel(_0x174aa1().repeat(_0x5dc858, _0x174aa1().call(function () {
              _0xd27498 += _0xe63ba7;
              _0xbffd4b.m_winLabel.string = _0x14c118.FormatNumberThousands(_0x1e89f8.GetDisplayValue(_0xd27498), _0x14c118.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
            }).delay(0.02)), _0x174aa1().call(function () {
              _0x174aa1(_0xbffd4b.m_winRoot.getComponent(_0x50093a)).to(0.2, {
                'opacity': 0xff
              }).start();
            }), _0x174aa1().to(_0x3a258f, {
              'scale': _0x1536ed(1.2, 1.2)
            })).call(function () {
              _0xbffd4b.StopWinLabelRunning(false, _0x537e22);
            }).start();
          }
        };
        _0x4879de.StopWinLabelRunning = function (_0x31b4cd, _0x23c13c) {
          var _0x1f45fb = this;
          if (undefined === _0x31b4cd) {
            _0x31b4cd = false;
          }
          this.m_winLabel.string = _0x14c118.FormatNumberThousands(_0x1e89f8.GetDisplayValue(_0x23c13c), _0x14c118.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          if (_0x31b4cd) {
            _0x3d8b38.stopAllByTarget(this.m_winRoot);
            _0x174aa1(this.m_winRoot).to(0.1, {
              'scale': _0x1536ed(1.8, 1.8)
            }).delay(1.4).parallel(_0x174aa1().call(function () {
              _0x174aa1(_0x1f45fb.m_winRoot.getComponent(_0x50093a)).to(0.05, {
                'opacity': 0.1
              }).start();
            }), _0x174aa1().to(0.05, {
              'scale': _0x1536ed(0x1, 0x1)
            })).call(function () {
              _0x1f45fb.m_isRunningSmallWin = false;
            }).start();
          } else {
            _0x174aa1(this.m_winRoot).delay(1.4).parallel(_0x174aa1().call(function () {
              _0x174aa1(_0x1f45fb.m_winRoot.getComponent(_0x50093a)).to(0.3, {
                'opacity': 0.1
              }).start();
            }), _0x174aa1().to(0.3, {
              'scale': _0x1536ed(0x1, 0x1)
            })).call(function () {
              _0x1f45fb.m_isRunningSmallWin = false;
            }).start();
          }
        };
        _0x4b136a(_0x51037a, [{
          'key': "isRunningSmallWin",
          'get': function () {
            return this.m_isRunningSmallWin;
          }
        }]);
        return _0x51037a;
      }(_0x14cfe4);
      _0x2b9477 = _0x196fb6(_0x58e506.prototype, "m_winLabel", [_0x247c2b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3dc258 = _0x196fb6(_0x58e506.prototype, "m_winLabelBackGround", [_0x51175c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4a7660 = _0x196fb6(_0x58e506.prototype, "m_winRoot", [_0x50a3f5], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x43481c;
      var _0x1358ef;
      var _0xa97d21;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, '806beabNHFA9I+cO3J2C7OY', "RecoverSpinAck", undefined);
      var _0x5941b9 = _0x3e9873.ccclass;
      _0x43481c = _0x5941b9('RecoverSpinAck');
      _0xa97d21 = function () {
        function _0x1f724b() {
          if (_0x1f724b._instance) {
            throw new Error("Error: Instantiation failed: Use soundManager instead of new.");
          }
          _0x1f724b._instance = this;
        }
        _0x1f724b.getInstance = function () {
          if (!this._instance) {
            this._instance = new _0x1f724b();
          }
          return _0x1f724b._instance;
        };
        var _0x4236d6 = _0x1f724b.prototype;
        _0x4236d6.RecoverSpinAck = function (_0x17214a) {
          var _0x1b37bd = new _0x3a0561.tlpProto.SpinAck();
          _0x1b37bd.Bet = _0x17214a.Bet || 0x0;
          _0x1b37bd.AckType = _0x17214a.AckType || 0x0;
          _0x1b37bd.FreeTotalWin = _0x17214a.FreeTotalWin || 0x0;
          _0x1b37bd.NowMoney = _0x17214a.NowMoney || 0x0;
          _0x1b37bd.ShowIndex = _0x17214a.ShowIndex || '';
          _0x1b37bd.TotalWin = _0x17214a.TotalWin || 0x0;
          _0x1b37bd.FolderIndex = _0x17214a.FolderIndex || 0x0;
          _0x1b37bd.RoundQueue = this.TraverseRoundQueue(_0x17214a.RoundQueue);
          return _0x1b37bd;
        };
        _0x4236d6.TraverseRoundQueue = function (_0x13e055) {
          var _0x1149a9 = [];
          for (var _0x522c0a = 0x0; _0x522c0a < _0x13e055.length; ++_0x522c0a) {
            var _0x1eaa4f = new _0x3a0561.tlpProto.RoundInfo();
            var _0x13e58d = _0x13e055[_0x522c0a];
            _0x1eaa4f.MainPlateSymbol = this.TraverseColumns(_0x13e58d.MainPlateSymbol);
            _0x1eaa4f.FreePlateSymbol = this.TraverseCColumns(_0x13e58d.FreePlateSymbol);
            _0x1eaa4f.FreePlateSymbolLog = this.TraverseCColumns(_0x13e58d.FreePlateSymbolLog);
            _0x1eaa4f.AwardDataVec = this.TraverseAwardDataVec(_0x13e58d.AwardDataVec);
            _0x1eaa4f.AwardTypeFlag = _0x13e58d.AwardTypeFlag || 0x0;
            _0x1eaa4f.RoundWin = _0x13e58d.RoundWin || 0x0;
            _0x1eaa4f.FreeRemainRound = _0x13e58d.FreeRemainRound || 0x0;
            _0x1eaa4f.AddCrack = this.TraverseArrays(_0x13e58d.AddCrack);
            _0x1eaa4f.MaxFlag = _0x13e58d.MaxFlag;
            if (_0x13e58d.BlueData) {
              for (var _0x29d3c6 = 0x0; _0x29d3c6 < _0x13e58d.BlueData.length; ++_0x29d3c6) {
                _0x1eaa4f.BlueData[_0x29d3c6] = this.TraverseFeatureEffect(_0x13e58d.BlueData[_0x29d3c6]);
              }
            }
            if (_0x13e58d.RedData) {
              for (var _0x11307a = 0x0; _0x11307a < _0x13e58d.RedData.length; ++_0x11307a) {
                _0x1eaa4f.RedData[_0x11307a] = this.TraverseFeatureEffect(_0x13e58d.RedData[_0x11307a]);
              }
            }
            if (_0x13e58d.GreenData) {
              for (var _0x44cd7d = 0x0; _0x44cd7d < _0x13e58d.GreenData.length; ++_0x44cd7d) {
                _0x1eaa4f.GreenData[_0x44cd7d] = this.TraverseFeatureEffect(_0x13e58d.GreenData[_0x44cd7d]);
              }
            }
            _0x1149a9.push(_0x1eaa4f);
          }
          return _0x1149a9;
        };
        _0x4236d6.TraverseColumns = function (_0x565766) {
          if (_0x565766) {
            for (var _0x60d4dc = 0x0; _0x60d4dc < _0x565766.length; ++_0x60d4dc) {
              if (!_0x565766[_0x60d4dc]) {
                _0x565766[_0x60d4dc] = new _0x3a0561.tlpProto.Column();
              }
              _0x565766[_0x60d4dc] = this.TraverseColumn(_0x565766[_0x60d4dc]);
            }
            return _0x565766;
          }
        };
        _0x4236d6.TraverseColumn = function (_0x5af0c5) {
          var _0x11ee5c = new _0x3a0561.tlpProto.Column();
          if (!_0x5af0c5.Col) {
            _0x5af0c5.Col = [];
          }
          for (var _0x2e635a = 0x0; _0x2e635a < _0x5af0c5.Col.length; ++_0x2e635a) {
            _0x5af0c5.Col[_0x2e635a] = this.EnsureNum(_0x5af0c5.Col[_0x2e635a]);
            _0x11ee5c.Col.push(_0x5af0c5.Col[_0x2e635a]);
          }
          return _0x11ee5c;
        };
        _0x4236d6.TraverseCColumns = function (_0x4b963f) {
          if (_0x4b963f) {
            for (var _0x264c3d = 0x0; _0x264c3d < _0x4b963f.length; ++_0x264c3d) {
              if (!_0x4b963f[_0x264c3d]) {
                _0x4b963f[_0x264c3d] = new _0x3a0561.tlpProto.Column();
              }
              _0x4b963f[_0x264c3d] = this.TraverseCColumn(_0x4b963f[_0x264c3d]);
            }
            return _0x4b963f;
          }
        };
        _0x4236d6.TraverseCColumn = function (_0x4c854b) {
          var _0x432a53 = new _0x3a0561.tlpProto.CColumn();
          if (!_0x4c854b.Col) {
            return _0x432a53;
          }
          for (var _0x19592a = 0x0; _0x19592a < _0x4c854b.Col.length; ++_0x19592a) {
            _0x432a53.Col.push(this.TraverseCSymbol(_0x4c854b.Col[_0x19592a]));
          }
          return _0x432a53;
        };
        _0x4236d6.TraverseCSymbol = function (_0x33546e) {
          _0x33546e.Symbol = _0x33546e.Symbol || 0x0;
          _0x33546e.JPState = _0x33546e.JPState || 0x0;
          _0x33546e.JPMult = _0x33546e.JPMult || 0x0;
          _0x33546e.Number = _0x33546e.Number || 0x0;
          return _0x33546e;
        };
        _0x4236d6.TraverseAwardDataVec = function (_0x101f7c) {
          if (_0x101f7c) {
            var _0x4ec255 = [];
            for (var _0x1dbab2 = 0x0; _0x1dbab2 < _0x101f7c.length; ++_0x1dbab2) {
              var _0x229969 = new _0x3a0561.tlpProto.AwardData();
              _0x229969 = this.TraverseAwardData(_0x101f7c[_0x1dbab2]);
              _0x4ec255.push(_0x229969);
            }
            return _0x4ec255;
          }
        };
        _0x4236d6.TraverseIntegerList = function (_0x3d3a90) {
          if (_0x3d3a90) {
            var _0x2aa530 = [];
            for (var _0x270ce3 = 0x0; _0x270ce3 < _0x3d3a90.length; ++_0x270ce3) {
              var _0x368a41 = this.EnsureNum(_0x3d3a90[_0x270ce3]);
              _0x2aa530.push(_0x368a41);
            }
            return _0x2aa530;
          }
        };
        _0x4236d6.TraverseAwardData = function (_0x415088) {
          var _0x1d6d6e = new _0x3a0561.tlpProto.AwardData();
          _0x1d6d6e.Symbol = this.EnsureNum(_0x415088.Symbol);
          _0x1d6d6e.Count = this.EnsureNum(_0x415088.Count);
          _0x1d6d6e.Line = this.EnsureNum(_0x415088.Line);
          _0x1d6d6e.Win = this.EnsureNum(_0x415088.Win);
          return _0x1d6d6e;
        };
        _0x4236d6.TraverseFeatureEffect = function (_0x33d6bc) {
          if (_0x33d6bc) {
            _0x33d6bc.ScatterPos = this.EnsureNum(_0x33d6bc.ScatterPos);
            if (_0x33d6bc.EffectPos) {
              for (var _0x2b703d = 0x0; _0x2b703d < _0x33d6bc.EffectPos.length; ++_0x2b703d) {
                _0x33d6bc.EffectPos[_0x2b703d] = this.EnsureNum(_0x33d6bc.EffectPos[_0x2b703d]);
              }
            }
            _0x33d6bc.JPState = this.EnsureNum(_0x33d6bc.JPState);
            _0x33d6bc.Number = this.EnsureNum(_0x33d6bc.Number);
            return _0x33d6bc;
          }
        };
        _0x4236d6.TraverseArrays = function (_0x2e0588) {
          var _0xf94f86 = [];
          for (var _0x24c6c4 = 0x0; _0x24c6c4 < _0x2e0588.length; ++_0x24c6c4) {
            _0xf94f86[_0x24c6c4] = _0x2e0588[_0x24c6c4];
          }
          return _0xf94f86;
        };
        _0x4236d6.ConvertPlate = function (_0x208ba5) {
          if (_0x208ba5) {
            var _0xd73aaa = [];
            for (var _0x5c1cea = 0x0; _0x5c1cea < _0x208ba5.length; _0x5c1cea++) {
              var _0x3acc91 = new _0x3a0561.tlpProto.Column(_0x208ba5[_0x5c1cea]);
              _0xd73aaa.push(_0x3acc91);
            }
            return _0xd73aaa;
          }
        };
        _0x4236d6.ConvertFgPlate = function (_0x5e92a6) {
          if (_0x5e92a6) {
            var _0x10dbc7 = [];
            for (var _0x34cc7e = 0x0; _0x34cc7e < _0x5e92a6.length; _0x34cc7e++) {
              var _0x3c71b0 = new _0x3a0561.tlpProto.CColumn(_0x5e92a6[_0x34cc7e]);
              for (var _0x1c599e = 0x0; _0x1c599e < _0x3c71b0.Col.length; ++_0x1c599e) {
                if (_0x3c71b0.Col[_0x1c599e].Symbol === _0xcba612.Symbol.MAX) {
                  var _0xbba27a = Math.floor(Math.random() * (_0xcba612.Symbol.Airplane - _0xcba612.SYMBOL_OFFSET)) + _0xcba612.SYMBOL_OFFSET;
                  _0x3c71b0.Col[_0x1c599e].Symbol = _0xbba27a;
                } else if (_0x3c71b0.Col[_0x1c599e].Symbol >= _0xcba612.Symbol.Coin_Blue && _0x3c71b0.Col[_0x1c599e].Symbol <= _0xcba612.Symbol.Coin_Green) {
                  _0x3c71b0.Col[_0x1c599e].Symbol = _0x3c71b0.Col[_0x1c599e].Symbol - 0x4;
                }
              }
              _0x10dbc7.push(_0x3c71b0);
            }
            return _0x10dbc7;
          }
        };
        _0x4236d6.ConvertFgInPlateBefore = function (_0x2e177, _0x53a398) {
          if (_0x2e177) {
            var _0x4a51b5 = [];
            for (var _0x1b5bb4 = 0x0; _0x1b5bb4 < _0x2e177.length; _0x1b5bb4++) {
              var _0x22012e = new _0x3a0561.tlpProto.CColumn(_0x2e177[_0x1b5bb4]);
              _0x22012e.Col.length = _0x53a398[_0x1b5bb4].Col.length;
              for (var _0x5e55f7 = 0x0; _0x5e55f7 < _0x53a398[_0x1b5bb4].Col.length; ++_0x5e55f7) {
                if (_0x53a398[_0x1b5bb4].Col[_0x5e55f7] < _0xcba612.Symbol.Scatter_Blue || _0x53a398[_0x1b5bb4].Col[_0x5e55f7] > _0xcba612.Symbol.Scatter_Green) {
                  _0x22012e.Col[_0x5e55f7].Symbol = _0x53a398[_0x1b5bb4].Col[_0x5e55f7];
                } else {
                  if (_0x2e177[_0x1b5bb4].Col[_0x5e55f7].Symbol < _0xcba612.Symbol.Scatter_Blue || _0x2e177[_0x1b5bb4].Col[_0x5e55f7].Symbol === _0xcba612.Symbol.Coin || _0x2e177[_0x1b5bb4].Col[_0x5e55f7].Symbol === _0xcba612.Symbol.MAX) {
                    var _0x29ae40 = _0x53a398[_0x1b5bb4].Col[_0x5e55f7] - _0xcba612.Symbol.Scatter_Blue;
                    var _0x21d0ab = _0xcba612.SCATTER_DISTANCE[_0x29ae40];
                    _0x22012e.Col[_0x5e55f7].Symbol = _0x53a398[_0x1b5bb4].Col[_0x5e55f7] - _0x21d0ab;
                  } else {
                    _0x22012e.Col[_0x5e55f7].Symbol = _0x53a398[_0x1b5bb4].Col[_0x5e55f7];
                  }
                }
              }
              _0x4a51b5.push(_0x22012e);
            }
            return _0x4a51b5;
          }
        };
        _0x4236d6.ConvertFgInPlateAfter = function (_0x5958bd, _0x14be8a) {
          if (_0x5958bd) {
            var _0x50d8b3 = [];
            for (var _0x546aa0 = 0x0; _0x546aa0 < _0x5958bd.length; _0x546aa0++) {
              var _0x5b719b = new _0x3a0561.tlpProto.CColumn(_0x5958bd[_0x546aa0]);
              _0x5b719b.Col.length = _0x5958bd[_0x546aa0].Col.length;
              for (var _0x55d906 = 0x0; _0x55d906 < _0x5b719b.Col.length; ++_0x55d906) {
                _0x5b719b.Col[_0x55d906].Symbol = _0x14be8a[_0x546aa0].Col[_0x55d906].Symbol;
              }
              _0x50d8b3.push(_0x5b719b);
            }
            return _0x50d8b3;
          }
        };
        _0x4236d6.EnsureNum = function (_0x248143) {
          return _0x248143 || 0x0;
        };
        return _0x1f724b;
      }();
      _0xa97d21._instance = new _0xa97d21();
      var _0x1b7c84 = _0x43481c(_0x1358ef = _0xa97d21) || _0x1358ef;
      var _0x4887c7;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "0ff06iLYwBH6LlMOQ0uq57L", "FgDeclareSpine", undefined);
      var _0x3d37cf = _0x3e9873.ccclass;
      _0x4887c7 = _0x3d37cf("FgDeclareSpine");
      var _0x3b021d;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "3fd51wQp2JAb5nhZgWzo6Mg", "FgFullRewardSpine", undefined);
      var _0x73b78b = _0x3e9873.ccclass;
      _0x3b021d = _0x73b78b("FgFullRewardSpine");
      var _0x592f1d;
      var _0x4d0f26;
      var _0x52f29e;
      var _0xd858b0;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "15975oicF5HTIy4OjG6Ktx8", "FgComplimentSpine", undefined);
      var _0x14bb47 = _0x3e9873.ccclass;
      var _0x440b8e = _0x3e9873.property;
      _0x592f1d = _0x14bb47("FgComplimentSpine");
      _0x4d0f26 = _0x440b8e({
        'type': _0x2855cd,
        'tooltip': "FG End Win Label"
      });
      _0x52f29e = function (_0x2bb2ce) {
        function _0x4e0522() {
          var _0x311484;
          var _0x286ae1 = arguments.length;
          var _0x8cca9e = new Array(_0x286ae1);
          for (var _0x108bd6 = 0x0; _0x108bd6 < _0x286ae1; _0x108bd6++) {
            _0x8cca9e[_0x108bd6] = arguments[_0x108bd6];
          }
          _0xec902e(_0x311484 = _0x2bb2ce.call.apply(_0x2bb2ce, [this].concat(_0x8cca9e)) || this, "m_fgEndWin", _0xd858b0, _0x11be3a(_0x311484));
          _0x311484.m_fgEndRepeatAction = null;
          _0x311484.m_complimentTime = 0x0;
          _0x311484.m_gameView = null;
          return _0x311484;
        }
        _0xed7a37(_0x4e0522, _0x2bb2ce);
        var _0x541349 = _0x4e0522.prototype;
        _0x541349.Init = function (_0x458502) {
          this.m_gameView = _0x458502;
          this.m_complimentTime += this.GetAnimationTime("Start", this.m_spine);
          this.m_complimentTime -= 1.5;
        };
        _0x541349.ChangeScene = function () {
          this.m_gameView.FgBackGround.active = false;
          this.m_gameView.MgBackGround.active = true;
          this.m_gameView.ReelSkinSpine.SetReelSkin(_0xcba612.REEL_SKIN.MG);
          this.m_gameView.MGBGSpine.PlayIdle();
          this.m_gameView.MGBGSpine.SetBgSkin(_0xcba612.FGBG_SKIN[0x0]);
          this.m_gameView.LogoNode.active = true;
          this.m_gameView.LogoNode2.active = false;
          this.m_gameView.FgType = 0x0;
          this.m_gameView.EffectPlate.ReturnAll();
          for (var _0x4c9213 = 0x0; _0x4c9213 < this.m_gameView.ScatterCoinSpines.length; ++_0x4c9213) {
            if (false === this.m_gameView.ScatterCoinSpines[_0x4c9213].node.active) {
              this.m_gameView.ScatterCoinSpines[_0x4c9213].node.active = true;
              this.m_gameView.ScatterCoinSpines[_0x4c9213].ChangeScatterLevel(this.m_gameView.CrackLevels[_0x4c9213]);
              this.m_gameView.ScatterCoinSpines[_0x4c9213].node.active = false;
            }
          }
          this.m_gameView.SinglePlateMgr.CurCoinNum = 0x0;
          this.m_gameView.SinglePlateMgr.ResetLock();
          this.m_gameView.SinglePlateMgr.ClearAll();
          this.m_gameView.SlotReels.node.active = true;
          this.m_gameView.SinglePlateMgr.node.active = false;
          this.m_gameView.FgSceneAnim.play(_0xcba612.AVATAR_PREFIX + _0xcba612.ANIM_SKINS[0x0]);
          this.m_gameView.FgDataAnim.play(_0xcba612.AVATAR_PREFIX + _0xcba612.ANIM_SKINS[0x0]);
          for (var _0x26831a = 0x0; _0x26831a < this.m_gameView.ScatterCoinSpines.length; ++_0x26831a) {
            this.m_gameView.ScatterCoinSpines[_0x26831a].PlayIdle();
            this.m_gameView.ScatterCoinSpines[_0x26831a].ChangeScatterLevel(this.m_gameView.CrackLevels[_0x26831a]);
          }
        };
        _0x541349.PlayFgCompliment = function () {
          var _0x423f67 = _0x26fe6f(_0x352743().mark(function _0x134bfe(_0x5741f4) {
            var _0x18005d = this;
            return _0x352743().wrap(function (_0xf2a43c) {
              for (;;) {
                switch (_0xf2a43c.prev = _0xf2a43c.next) {
                  case 0x0:
                    this.SetFreeGameRunningWinValue(_0xcba612.CanScaleWinValue, _0x5741f4, this.m_complimentTime);
                    this.SetNodeActivity(true);
                    _0x27c287.Play(_0xcba612.AudioClips.end_declare);
                    _0xf2a43c.next = 0x5;
                    return this.PlayAnimation("Start", this.m_spine, false, 0x1, function () {
                      _0x18005d.ChangeScene();
                    });
                  case 0x5:
                    _0xf2a43c.next = 0x7;
                    return this.PlayAnimation("Loop");
                  case 0x7:
                    _0x27c287.Play(_0xcba612.AudioClips.FG_out);
                    _0xf2a43c.next = 0xa;
                    return this.PlayAnimation("End");
                  case 0xa:
                    this.SetNodeActivity(false);
                  case 0xb:
                  case "end":
                    return _0xf2a43c.stop();
                }
              }
            }, _0x134bfe, this);
          }));
          return function (_0x4893dc) {
            return _0x423f67.apply(this, arguments);
          };
        }();
        _0x541349.SetWinValue = function (_0x311322, _0x425b52, _0xc35179, _0x48d0bf, _0x30f2aa) {
          if (undefined === _0x48d0bf) {
            _0x48d0bf = true;
          }
          if (undefined === _0x30f2aa) {
            _0x30f2aa = false;
          }
          if (_0x48d0bf) {
            _0x496361.instance.ActionManager.removeAllActionsFromTarget(_0x311322.node);
            _0x3d8b38.stopAllByTarget(_0x311322.node);
          }
          var _0x3a97cd = _0x14c118.strip(_0xc35179);
          _0x311322.string = _0x14c118.FormatNumberThousands(_0x14c118.strip(_0x3a97cd), _0x14c118.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          if (_0x425b52 && !_0x30f2aa) {
            _0x311322.node.setScale(0x1, 0x1);
            if (_0xc35179 > 0x0) {
              _0x174aa1(_0x311322.node).to(0.1, {
                'scale': _0x1536ed(1.5, 1.5)
              }).delay(0.4).to(0.15, {
                'scale': _0x1536ed(0x1, 0x1)
              }).start();
            }
          }
        };
        _0x541349.SetFreeGameRunningWinValue = function (_0x330d29, _0x12153f, _0x2f8701) {
          var _0x438f71 = this;
          this.m_fgEndWin.string = '0';
          var _0x339780 = Number(this.m_fgEndWin.string);
          if (!(_0x339780 >= _0x12153f)) {
            var _0x3103e9 = _0x14c118.divide(_0x2f8701, 0.02);
            var _0x34d54c = _0x14c118.divide(_0x14c118.strip(_0x12153f - _0x339780), _0x3103e9);
            this.m_fgEndRepeatAction = _0x174aa1(this.m_fgEndWin.node).repeat(_0x3103e9, _0x174aa1().call(function () {
              if ((_0x339780 += _0x34d54c) >= _0x12153f) {
                _0x339780 = _0x12153f;
              }
              _0x438f71.SetWinValue(_0x438f71.m_fgEndWin, _0x330d29, _0x339780, false, true);
            }).delay(0.02));
            var _0x389043 = this.m_fgEndRepeatAction;
            if (_0x330d29) {
              _0x389043 = _0x174aa1(this.m_fgEndWin.node).parallel(_0x174aa1().to(0.1, {
                'scale': _0x1536ed(1.5, 1.5)
              }), this.m_fgEndRepeatAction).delay(0.4).to(0.15, {
                'scale': _0x1536ed(0x1, 0x1)
              });
            }
            _0x174aa1(this.m_fgEndWin.node).then(_0x389043).call(function () {
              _0x438f71.SetWinValue(_0x438f71.m_fgEndWin, _0x330d29, _0x12153f, true, true);
            }).start();
          }
        };
        _0x541349.GetAnimationTime = function (_0x305a03, _0x426cc3) {
          if (undefined === _0x426cc3) {
            _0x426cc3 = this.m_spine;
          }
          _0x426cc3.node.parent.active = true;
          var _0x4ba306 = _0x426cc3.findAnimation(_0x305a03).duration;
          _0x426cc3.node.parent.active = false;
          return _0x4ba306;
        };
        return _0x4e0522;
      }(_0x304e58);
      _0xd858b0 = _0x196fb6(_0x52f29e.prototype, "m_fgEndWin", [_0x4d0f26], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x26b2e1;
      var _0x2079f4;
      var _0x43af5f;
      var _0x5f03d4;
      var _0x4b90d5;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "48f6bp6QPdNCLK4AoUUzX+q", "SinglePlateMgr", undefined);
      var _0x413182 = _0x3e9873.property;
      _0x26b2e1 = _0x413182({
        'type': _0x1a18d5,
        'tooltip': "Single單一轉輪"
      });
      _0x2079f4 = _0x413182({
        'type': _0x84773f,
        'tooltip': "reelMask"
      });
      _0x43af5f = function (_0x3659a7) {
        function _0x4d7888() {
          var _0x1f9d0f;
          var _0x329d30 = arguments.length;
          var _0x2e66d3 = new Array(_0x329d30);
          for (var _0x5e97f2 = 0x0; _0x5e97f2 < _0x329d30; _0x5e97f2++) {
            _0x2e66d3[_0x5e97f2] = arguments[_0x5e97f2];
          }
          _0xec902e(_0x1f9d0f = _0x3659a7.call.apply(_0x3659a7, [this].concat(_0x2e66d3)) || this, "m_SingleSingleReel", _0x5f03d4, _0x11be3a(_0x1f9d0f));
          _0xec902e(_0x1f9d0f, "m_reelMask", _0x4b90d5, _0x11be3a(_0x1f9d0f));
          _0x1f9d0f.m_singleReelNodes = new Array();
          _0x1f9d0f.m_spinTime = 0x0;
          _0x1f9d0f.m_SingleReelSpinTimes = [[0x1, 0x2, 0x3], [0x2, 0x3, 0x4], [0x3, 0x4, 0x5], [0x4, 0x5, 0x6], [0x5, 0x6, 0x7]];
          _0x1f9d0f.m_fastSingleReelSpinTimes = [[0x2, 0x2, 0x2], [0x2, 0x2, 0x2], [0x2, 0x2, 0x2], [0x2, 0x2, 0x2], [0x2, 0x2, 0x2]];
          _0x1f9d0f.m_isLocked = [[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]];
          _0x1f9d0f.m_countCoin = [];
          _0x1f9d0f.m_curCoinNum = 0x0;
          _0x1f9d0f.m_plateInfo = new Array();
          _0x1f9d0f.m_hasNewCoin = false;
          _0x1f9d0f.m_symbolSize = null;
          _0x1f9d0f.m_viewSize = null;
          _0x1f9d0f.m_gameView = null;
          return _0x1f9d0f;
        }
        _0xed7a37(_0x4d7888, _0x3659a7);
        var _0x3da477 = _0x4d7888.prototype;
        _0x3da477.onLoad = function () {};
        _0x3da477.Init = function (_0x1bd2b2) {
          this.m_gameView = _0x1bd2b2;
          this.m_viewSize = this.node.getComponent(_0x21d275).contentSize;
          this.m_symbolSize = new _0x4e3d3c((this.m_viewSize.width - _0xcba612.SeparateLineWidth * (_0xcba612.COL - 0x1)) / _0xcba612.COL, this.m_viewSize.height / _0xcba612.ROW);
          this.SetSingleReelSpinOrder();
          for (var _0xe46e77 = 0x0; _0xe46e77 < _0xcba612.COL; ++_0xe46e77) {
            var _0x3e0c2b = [];
            var _0x376079 = [];
            var _0x223601 = [];
            var _0x5255c9 = this.m_symbolSize.width * (_0xe46e77 + 0.5) - this.m_viewSize.width / 0x2 + _0xcba612.SeparateLineWidth * _0xe46e77;
            for (var _0x412a14 = 0x0; _0x412a14 < _0xcba612.ROW; ++_0x412a14) {
              var _0x206ae5 = _0x2b0134(this.m_SingleSingleReel);
              var _0x1e587e = 0xa * _0xe46e77 + _0x412a14;
              _0x206ae5.name = _0x1e587e.toString();
              var _0x297e51 = new _0x57bf99();
              _0x297e51.Symbol = _0xcba612.Symbol.Coin;
              _0x206ae5.getComponent(_0xa6820d).Init(this.m_gameView, _0xe46e77, _0x412a14, _0x297e51);
              _0x206ae5.setPosition(_0x5255c9, 0x0);
              this.m_reelMask[_0x412a14].addChild(_0x206ae5);
              _0x3e0c2b.push(_0x206ae5);
              _0x376079.push(false);
              _0x223601.push(0x0);
            }
            this.m_singleReelNodes.push(_0x3e0c2b);
            this.m_isLocked.push(_0x376079);
            this.m_countCoin.push(_0x223601);
          }
        };
        _0x3da477.CheckCoinNumbers = function () {
          var _0xa479ab = 0x0;
          for (var _0x3aaf5d = 0x0; _0x3aaf5d < _0xcba612.COL; ++_0x3aaf5d) {
            for (var _0x5da2a7 = 0x0; _0x5da2a7 < _0xcba612.ROW; ++_0x5da2a7) {
              if (this.m_plateInfo[_0x3aaf5d].Col[_0x5da2a7].Symbol >= _0xcba612.Symbol.Scatter_Blue && this.m_plateInfo[_0x3aaf5d].Col[_0x5da2a7].Symbol <= _0xcba612.Symbol.Coin_Green) {
                this.IsLocked[_0x3aaf5d][_0x5da2a7] = true;
                ++_0xa479ab;
              }
            }
          }
          this.CurCoinNum = _0xa479ab;
        };
        _0x3da477.ShowFgInScaling = function () {
          var _0x5322c7 = _0x26fe6f(_0x352743().mark(function _0xa0ef5d() {
            var _0x555b6f;
            var _0x173e04;
            var _0x3f3383;
            var _0xfd805c;
            return _0x352743().wrap(function (_0x30b782) {
              for (;;) {
                switch (_0x30b782.prev = _0x30b782.next) {
                  case 0x0:
                    _0x555b6f = 0x0;
                  case 0x1:
                    if (!(_0x555b6f < _0xcba612.COL)) {
                      _0x30b782.next = 0x14;
                      break;
                    }
                    _0x173e04 = 0x0;
                  case 0x3:
                    if (!(_0x173e04 < _0xcba612.ROW)) {
                      _0x30b782.next = 0x11;
                      break;
                    }
                    if (this.m_plateInfo[_0x555b6f].Col[_0x173e04].Symbol !== _0xcba612.Symbol.Coin) {
                      _0x30b782.next = 0xe;
                      break;
                    }
                    (_0x3f3383 = new _0x57bf99()).Symbol = this.m_plateInfo[_0x555b6f].Col[_0x173e04].Symbol;
                    _0x3f3383.Value = this.m_plateInfo[_0x555b6f].Col[_0x173e04].Number;
                    _0x3f3383.JpType = this.m_plateInfo[_0x555b6f].Col[_0x173e04].JPState;
                    _0xfd805c = this.m_gameView.EffectPlate.SetEffectInfo(_0x3f3383, _0x555b6f, _0x173e04);
                    this.m_gameView.FgCounter.AddCoinCount();
                    _0x27c287.Play(_0xcba612.AudioClips.scatter_yellow);
                    _0x30b782.next = 0xe;
                    return this.m_gameView.EffectPlate.NodeScalingEffect(_0xfd805c, _0xcba612.InitSize, _0xcba612.EndSize, 0.5);
                  case 0xe:
                    ++_0x173e04;
                    _0x30b782.next = 0x3;
                    break;
                  case 0x11:
                    ++_0x555b6f;
                    _0x30b782.next = 0x1;
                    break;
                  case 0x14:
                  case "end":
                    return _0x30b782.stop();
                }
              }
            }, _0xa0ef5d, this);
          }));
          return function () {
            return _0x5322c7.apply(this, arguments);
          };
        }();
        _0x3da477.SetFgInPlateInfo = function (_0x23bc35) {
          this.PlateInfo = _0x1b7c84.getInstance().ConvertFgPlate(_0x23bc35);
          for (var _0x26cafb = 0x0; _0x26cafb < _0xcba612.COL; ++_0x26cafb) {
            for (var _0x2fe222 = 0x0; _0x2fe222 < _0xcba612.ROW; ++_0x2fe222) {
              if (!this.m_isLocked[_0x26cafb][_0x2fe222]) {
                var _0x34eb24 = new _0x57bf99();
                _0x34eb24.Symbol = this.m_plateInfo[_0x26cafb].Col[_0x2fe222].Symbol;
                _0x34eb24.Value = this.m_plateInfo[_0x26cafb].Col[_0x2fe222].Number;
                _0x34eb24.JpType = this.m_plateInfo[_0x26cafb].Col[_0x2fe222].JPState;
                _0x34eb24.JpMult = this.m_plateInfo[_0x26cafb].Col[_0x2fe222].JPMult;
                this.m_singleReelNodes[_0x26cafb][_0x2fe222].getComponent(_0xa6820d).SetSymbolInfos(_0x34eb24, this.m_SingleReelSpinTimes[_0x26cafb][_0x2fe222]);
              }
            }
          }
        };
        _0x3da477.SetPlateInfo = function (_0xcf84c7) {
          this.PlateInfo = _0x1b7c84.getInstance().ConvertFgPlate(_0xcf84c7);
          for (var _0x1c21e7 = 0x0; _0x1c21e7 < _0xcba612.COL; ++_0x1c21e7) {
            for (var _0x74c476 = 0x0; _0x74c476 < _0xcba612.ROW; ++_0x74c476) {
              if (!this.m_isLocked[_0x1c21e7][_0x74c476]) {
                var _0x117cbb = new _0x57bf99();
                _0x117cbb.Symbol = _0x14c118.strip(this.m_plateInfo[_0x1c21e7].Col[_0x74c476].Symbol);
                _0x117cbb.Value = _0x14c118.strip(this.m_plateInfo[_0x1c21e7].Col[_0x74c476].Number);
                _0x117cbb.JpType = this.m_plateInfo[_0x1c21e7].Col[_0x74c476].JPState;
                _0x117cbb.JpMult = this.m_plateInfo[_0x1c21e7].Col[_0x74c476].JPMult;
                var _0x35b6d9 = this.m_SingleReelSpinTimes[_0x1c21e7][_0x74c476];
                this.m_singleReelNodes[_0x1c21e7][_0x74c476].getComponent(_0xa6820d).SetSymbolInfos(_0x117cbb, _0x35b6d9);
              }
            }
          }
        };
        _0x3da477.SetPlateSymbol = function (_0x84eb9a) {
          this.PlateInfo = _0x1b7c84.getInstance().ConvertFgPlate(_0x84eb9a);
          for (var _0x4f81d7 = 0x0; _0x4f81d7 < _0xcba612.COL; ++_0x4f81d7) {
            for (var _0x34fc94 = 0x0; _0x34fc94 < _0xcba612.ROW; ++_0x34fc94) {
              if (!this.m_isLocked[_0x4f81d7][_0x34fc94]) {
                var _0x4c5784 = new _0x57bf99();
                _0x4c5784.Symbol = _0x14c118.strip(this.m_plateInfo[_0x4f81d7].Col[_0x34fc94].Symbol);
                _0x4c5784.Value = _0x14c118.strip(this.m_plateInfo[_0x4f81d7].Col[_0x34fc94].Number);
                _0x4c5784.JpType = this.m_plateInfo[_0x4f81d7].Col[_0x34fc94].JPState;
                _0x4c5784.JpMult = this.m_plateInfo[_0x4f81d7].Col[_0x34fc94].JPMult;
                var _0x32617f = this.m_SingleReelSpinTimes[_0x4f81d7][_0x34fc94];
                this.m_singleReelNodes[_0x4f81d7][_0x34fc94].getComponent(_0xa6820d).SetSymbolInfos(_0x4c5784, _0x32617f);
                this.m_singleReelNodes[_0x4f81d7][_0x34fc94].getComponent(_0xa6820d).AllColumns[_0xcba612.MIDDLE_PLATE_INDEX].ChangeSymbol(_0x4c5784);
                for (var _0x2dd3c4 = 0x0; _0x2dd3c4 < 0x3; ++_0x2dd3c4) {
                  this.m_singleReelNodes[_0x4f81d7][_0x34fc94].getComponent(_0xa6820d).AllColumns[_0x2dd3c4].ShowSymbol();
                }
              }
            }
          }
        };
        _0x3da477.SetCell = function (_0x2311d3, _0x118a8a, _0x418754) {
          this.m_singleReelNodes[_0x2311d3][_0x118a8a].getComponent(_0xa6820d).AllColumns[_0xcba612.MIDDLE_PLATE_INDEX].ChangeSymbol(_0x418754);
        };
        _0x3da477.GetSymbolByIndex = function (_0x4c9b0f, _0x26690b) {
          return this.m_singleReelNodes[_0x4c9b0f][_0x26690b];
        };
        _0x3da477.SetSingleReelSpinOrder = function () {
          for (var _0x19aaad = 0x0; _0x19aaad < _0xcba612.ROW; _0x19aaad++) {
            for (var _0x167ec7 = 0x0; _0x167ec7 < _0xcba612.COL; _0x167ec7++) {
              this.m_SingleReelSpinTimes[_0x167ec7][_0x19aaad] = _0x167ec7 + _0x19aaad + 0x1;
            }
          }
        };
        _0x3da477.SetSymbolDark = function (_0x5a480e, _0x2a27ec, _0x28cc69) {
          if (undefined === _0x28cc69) {
            _0x28cc69 = true;
          }
          this.m_singleReelNodes[_0x5a480e][_0x2a27ec].getComponent(_0xa6820d).SetSymbolDark(_0x28cc69);
        };
        _0x3da477.ClickStopBtn = function () {
          var _0x56b69c = false;
          for (var _0x3f9147 = 0x0; _0x3f9147 < _0xcba612.COL; ++_0x3f9147) {
            for (var _0x2f6346 = 0x0; _0x2f6346 < _0xcba612.ROW; ++_0x2f6346) {
              if (!this.m_isLocked[_0x3f9147][_0x2f6346]) {
                if (this.m_plateInfo[_0x3f9147].Col[_0x2f6346].Symbol < _0xcba612.Symbol.Scatter_Blue || this.m_plateInfo[_0x3f9147].Col[_0x2f6346].Symbol === _0xcba612.Symbol.MAX) {
                  _0x56b69c = true;
                }
                this.m_singleReelNodes[_0x3f9147][_0x2f6346].getComponent(_0xa6820d).ClickStopBtn();
              }
            }
          }
          if (_0x56b69c) {
            _0x27c287.Play(_0xcba612.AudioClips.scatter_stop);
          } else {
            _0x27c287.Play(_0xcba612.AudioClips.reel_stop);
          }
        };
        _0x3da477.StartSpin = function () {
          this.HasNewCoin = false;
          this.m_gameView.HasPlayAddRound = false;
          this.m_spinTime = 0x0;
          for (var _0x53f638 = 0x0; _0x53f638 < _0xcba612.COL; ++_0x53f638) {
            for (var _0x5bb9e5 = 0x0; _0x5bb9e5 < _0xcba612.ROW; ++_0x5bb9e5) {
              if (!this.m_isLocked[_0x53f638][_0x5bb9e5]) {
                this.m_singleReelNodes[_0x53f638][_0x5bb9e5].getComponent(_0xa6820d).StartSpin();
              }
            }
          }
        };
        _0x3da477.Spin = function (_0x5388a9) {
          this.m_spinTime = _0x14c118.strip(this.m_spinTime + _0x5388a9);
          for (var _0x4c01d9 = 0x0; _0x4c01d9 < _0xcba612.COL; ++_0x4c01d9) {
            for (var _0x1d570c = 0x0; _0x1d570c < _0xcba612.ROW; ++_0x1d570c) {
              if (!this.m_isLocked[_0x4c01d9][_0x1d570c]) {
                this.m_singleReelNodes[_0x4c01d9][_0x1d570c].getComponent(_0xa6820d).Spin(_0x5388a9);
              }
            }
          }
        };
        _0x3da477.IsPlateStop = function () {
          for (var _0x313304 = 0x0; _0x313304 < _0xcba612.COL; ++_0x313304) {
            for (var _0x2a83c5 = 0x0; _0x2a83c5 < _0xcba612.ROW; ++_0x2a83c5) {
              if (!this.m_isLocked[_0x313304][_0x2a83c5] && !this.m_singleReelNodes[_0x313304][_0x2a83c5].getComponent(_0xa6820d).IsStop) {
                return false;
              }
            }
          }
          return true;
        };
        _0x3da477.ClearAll = function () {
          for (var _0x36bc1e = 0x0; _0x36bc1e < _0xcba612.COL; ++_0x36bc1e) {
            for (var _0x428395 = 0x0; _0x428395 < _0xcba612.ROW; ++_0x428395) {
              this.m_singleReelNodes[_0x36bc1e][_0x428395].getComponent(_0xa6820d).ClearAll();
            }
          }
          this.CurCoinNum = 0x0;
        };
        _0x3da477.ResetLock = function () {
          for (var _0x3eb855 = 0x0; _0x3eb855 < _0xcba612.COL; ++_0x3eb855) {
            for (var _0x5cb315 = 0x0; _0x5cb315 < _0xcba612.ROW; ++_0x5cb315) {
              this.IsLocked[_0x3eb855][_0x5cb315] = false;
            }
          }
        };
        _0x3da477.CountCurCoins = function () {
          var _0x36287c = 0x0;
          for (var _0xdef178 = 0x0; _0xdef178 < _0xcba612.COL; ++_0xdef178) {
            for (var _0x164571 = 0x0; _0x164571 < _0xcba612.ROW; ++_0x164571) {
              if (this.IsLocked[_0xdef178][_0x164571]) {
                ++_0x36287c;
              }
              this.m_countCoin[_0xdef178][_0x164571] = _0x36287c;
            }
          }
          this.m_curCoinNum = _0x36287c;
        };
        _0x4b136a(_0x4d7888, [{
          'key': "SingleReelNodes",
          'get': function () {
            return this.m_singleReelNodes;
          }
        }, {
          'key': "IsLocked",
          'get': function () {
            return this.m_isLocked;
          },
          'set': function (_0x278c31) {
            this.m_isLocked = _0x278c31;
          }
        }, {
          'key': 'CurCoinNum',
          'get': function () {
            return this.m_curCoinNum;
          },
          'set': function (_0x39f00f) {
            this.m_curCoinNum = _0x39f00f;
          }
        }, {
          'key': "PlateInfo",
          'get': function () {
            return this.m_plateInfo;
          },
          'set': function (_0x337ff6) {
            this.m_plateInfo = _0x337ff6;
          }
        }, {
          'key': "HasNewCoin",
          'get': function () {
            return this.m_hasNewCoin;
          },
          'set': function (_0x48cd4e) {
            this.m_hasNewCoin = _0x48cd4e;
          }
        }]);
        return _0x4d7888;
      }(_0x14cfe4);
      _0x5f03d4 = _0x196fb6(_0x43af5f.prototype, 'm_SingleSingleReel', [_0x26b2e1], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4b90d5 = _0x196fb6(_0x43af5f.prototype, "m_reelMask", [_0x2079f4], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      var _0x106c66;
      var _0x199c9f;
      var _0x18f5cd;
      var _0x2626d1;
      var _0x1f8652;
      var _0x20c635;
      var _0x5c37a5;
      var _0xe9d41d;
      var _0x9787ae;
      var _0x4b3745;
      var _0x934cab;
      var _0x438391;
      var _0x537a17;
      var _0x34202f;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "9b89cxKncpHM4ekn8TS2s+u", "ScatterCoinSpine", undefined);
      var _0x598ca0 = ["lv1", "lv2", "lv3", 'FG'];
      var _0x3a4f81 = _0x3e9873.ccclass;
      var _0xc64177 = _0x3e9873.property;
      _0x106c66 = _0x3a4f81("ScatterCoinSpine");
      _0x199c9f = _0xc64177({
        'type': _0x1c8731
      });
      _0x18f5cd = _0xc64177({
        'type': _0x4bf747
      });
      _0x2626d1 = _0xc64177({
        'type': _0x29b18a
      });
      _0x1f8652 = _0xc64177({
        'type': _0x2855cd
      });
      _0x20c635 = _0xc64177({
        'type': _0x84773f
      });
      _0x5c37a5 = _0xc64177({
        'type': _0x84773f
      });
      _0xe9d41d = function (_0x4b9e02) {
        function _0x2f72bb() {
          var _0x2a9e36;
          var _0x170e87 = arguments.length;
          var _0x3cf762 = new Array(_0x170e87);
          for (var _0x5a097c = 0x0; _0x5a097c < _0x170e87; _0x5a097c++) {
            _0x3cf762[_0x5a097c] = arguments[_0x5a097c];
          }
          _0xec902e(_0x2a9e36 = _0x4b9e02.call.apply(_0x4b9e02, [this].concat(_0x3cf762)) || this, "m_flyPos", _0x9787ae, _0x11be3a(_0x2a9e36));
          _0xec902e(_0x2a9e36, "m_txtAnim", _0x4b3745, _0x11be3a(_0x2a9e36));
          _0xec902e(_0x2a9e36, 'm_touchNode', _0x934cab, _0x11be3a(_0x2a9e36));
          _0xec902e(_0x2a9e36, 'm_numLabel', _0x438391, _0x11be3a(_0x2a9e36));
          _0xec902e(_0x2a9e36, "m_jpNode", _0x537a17, _0x11be3a(_0x2a9e36));
          _0xec902e(_0x2a9e36, "m_fxLight", _0x34202f, _0x11be3a(_0x2a9e36));
          _0x2a9e36.m_curInfo = null;
          _0x2a9e36.m_curLevel = 0x0;
          _0x2a9e36.m_thisScatterType = null;
          _0x2a9e36.m_pigJumpId = new Array();
          _0x2a9e36.m_gameView = null;
          return _0x2a9e36;
        }
        _0xed7a37(_0x2f72bb, _0x4b9e02);
        var _0x42aa2e = _0x2f72bb.prototype;
        _0x42aa2e.Init = function (_0x46d35b, _0x94bbb) {
          this.m_gameView = _0x46d35b;
          this.m_thisScatterType = _0x94bbb;
        };
        _0x42aa2e.ChangeScatterLevel = function () {
          var _0x189e4b = _0x26fe6f(_0x352743().mark(function _0xb400e8(_0x160939) {
            return _0x352743().wrap(function (_0x40620c) {
              for (;;) {
                switch (_0x40620c.prev = _0x40620c.next) {
                  case 0x0:
                    this.SetNodeActivity(true);
                    if (!(_0x160939 != _0xcba612.FG_LEVEL && this.m_curLevel < _0x160939)) {
                      _0x40620c.next = 0x5;
                      break;
                    }
                    _0x27c287.Play(_0xcba612.AudioClips.scatter_lv);
                    _0x40620c.next = 0x5;
                    return this.PlayAnimation("UpGrade");
                  case 0x5:
                    this.SetSkin(_0x598ca0[_0x160939]);
                    this.m_curLevel = _0x160939;
                    this.PlayIdle();
                    this.m_fxLight.active = _0x160939 > 0x1;
                  case 0x9:
                  case "end":
                    return _0x40620c.stop();
                }
              }
            }, _0xb400e8, this);
          }));
          return function (_0x5bc8ae) {
            return _0x189e4b.apply(this, arguments);
          };
        }();
        _0x42aa2e.InsertCoin = function () {
          var _0x42221d = _0x26fe6f(_0x352743().mark(function _0x29daaa() {
            return _0x352743().wrap(function (_0x4ee497) {
              for (;;) {
                switch (_0x4ee497.prev = _0x4ee497.next) {
                  case 0x0:
                    _0x4ee497.next = 0x2;
                    return this.PlayAnimation("Collect2");
                  case 0x2:
                    this.PlayIdle();
                  case 0x3:
                  case "end":
                    return _0x4ee497.stop();
                }
              }
            }, _0x29daaa, this);
          }));
          return function () {
            return _0x42221d.apply(this, arguments);
          };
        }();
        _0x42aa2e.PlayIdle = function () {
          this.PlayAnimation("Idle", this.m_spine, true);
        };
        _0x42aa2e.SetJpTxt = function (_0x34e26e) {
          if (_0x34e26e < 0x0) {
            this.m_txtAnim.getState("Pig_Win_Zoom").wrapMode = _0x1c2e69.WrapMode.Reverse;
            return void this.m_txtAnim.play("Pig_Win_Zoom");
          }
          for (var _0x53e619 = 0x0; _0x53e619 < _0xcba612.JP_SKIN_STRING.length; _0x53e619++) {
            if (this.m_jpNode[_0x53e619]) {
              this.m_jpNode[_0x53e619].active = _0x53e619 == _0x34e26e;
            }
          }
        };
        _0x42aa2e.SetNumLabel = function (_0x177a43) {
          this.m_numLabel.node.active = true;
          if (0x0 === _0x177a43) {
            this.m_numLabel.string = '';
          } else {
            var _0x2d774e = '';
            if (_0x177a43 >= _0xcba612.MILLION) {
              var _0x372dcc = _0x14c118.divide(_0x177a43, _0xcba612.MILLION).toString();
              var _0x5b943e = _0x372dcc.indexOf('.');
              _0x5b943e = -0x1 === _0x5b943e ? _0x372dcc.length : _0x5b943e + 0x3 > _0x372dcc.length ? _0x5b943e + 0x2 : _0x5b943e + 0x3;
              _0x2d774e = _0x372dcc.substring(0x0, _0x5b943e);
              _0x2d774e += 'M';
            } else {
              if (_0x177a43 >= _0xcba612.THOUSAND) {
                var _0xb08fd5 = _0x14c118.divide(_0x177a43, _0xcba612.THOUSAND).toString();
                var _0x1486cf = _0xb08fd5.indexOf('.');
                _0x1486cf = -0x1 === _0x1486cf ? _0xb08fd5.length : _0x1486cf + 0x3 > _0xb08fd5.length ? _0x1486cf + 0x2 : _0x1486cf + 0x3;
                _0x2d774e = _0xb08fd5.substring(0x0, _0x1486cf);
                _0x2d774e += 'K';
              } else {
                _0x2d774e = _0x177a43.toString();
              }
            }
            this.m_numLabel.string = _0x2d774e;
          }
        };
        _0x42aa2e.PlayFGWin = function () {
          var _0x578a95 = _0x26fe6f(_0x352743().mark(function _0x560b6f(_0x3fa0b3) {
            var _0x5905b3 = this;
            return _0x352743().wrap(function (_0x1ff1bc) {
              for (;;) {
                switch (_0x1ff1bc.prev = _0x1ff1bc.next) {
                  case 0x0:
                    _0x174aa1(this.m_spine).call(function () {
                      _0x27c287.Play(_0xcba612.AudioClips.scatter_FG_win);
                    }).delay(0.2).call(function () {
                      _0x5905b3.m_gameView.FGBGSpine.PlayFgWin();
                    }).start();
                    _0x1ff1bc.next = 0x3;
                    return this.PlayAnimation("FG_Win", this.m_spine, false, 0x1, function () {
                      if (_0x3fa0b3) {
                        _0x3fa0b3();
                      }
                    });
                  case 0x3:
                  case 'end':
                    return _0x1ff1bc.stop();
                }
              }
            }, _0x560b6f, this);
          }));
          return function (_0x2b4507) {
            return _0x578a95.apply(this, arguments);
          };
        }();
        _0x42aa2e.PlayFGWin2 = function () {
          var _0x5e7ad2 = _0x26fe6f(_0x352743().mark(function _0x567818() {
            var _0xf80cd8 = this;
            return _0x352743().wrap(function (_0x271b31) {
              for (;;) {
                switch (_0x271b31.prev = _0x271b31.next) {
                  case 0x0:
                    _0x271b31.next = 0x2;
                    return this.PlayAnimation("FG_Win2", this.m_spine, false, 0x1, function () {
                      for (; _0xf80cd8.m_pigJumpId.length > 0x0;) {
                        _0x27c287.Stop(_0xf80cd8.m_pigJumpId.pop());
                      }
                    });
                  case 0x2:
                    this.PlayIdle();
                  case 0x3:
                  case 'end':
                    return _0x271b31.stop();
                }
              }
            }, _0x567818, this);
          }));
          return function () {
            return _0x5e7ad2.apply(this, arguments);
          };
        }();
        _0x42aa2e.PlayNearWin = function () {
          var _0x157820 = _0x26fe6f(_0x352743().mark(function _0x150ca4() {
            return _0x352743().wrap(function (_0x3d4355) {
              for (;;) {
                switch (_0x3d4355.prev = _0x3d4355.next) {
                  case 0x0:
                    this.SetNodeActivity(true);
                    this.PlayAnimation("NearWin", this.m_spine, true);
                  case 0x2:
                  case "end":
                    return _0x3d4355.stop();
                }
              }
            }, _0x150ca4, this);
          }));
          return function () {
            return _0x157820.apply(this, arguments);
          };
        }();
        _0x42aa2e.PlayNearWinEnd = function () {
          var _0x2cb4da = _0x26fe6f(_0x352743().mark(function _0x394568() {
            return _0x352743().wrap(function (_0x29c4c9) {
              for (;;) {
                switch (_0x29c4c9.prev = _0x29c4c9.next) {
                  case 0x0:
                    this.PlayIdle();
                  case 0x1:
                  case "end":
                    return _0x29c4c9.stop();
                }
              }
            }, _0x394568, this);
          }));
          return function () {
            return _0x2cb4da.apply(this, arguments);
          };
        }();
        _0x42aa2e.PlayScatterWin = function () {
          var _0x21ac35 = _0x26fe6f(_0x352743().mark(function _0x4f05ed() {
            return _0x352743().wrap(function (_0x238367) {
              for (;;) {
                switch (_0x238367.prev = _0x238367.next) {
                  case 0x0:
                    _0x238367.next = 0x2;
                    return this.PlayAnimation('Win');
                  case 0x2:
                    this.PlayAnimation('Coin', this.m_spine, true);
                  case 0x3:
                  case "end":
                    return _0x238367.stop();
                }
              }
            }, _0x4f05ed, this);
          }));
          return function () {
            return _0x21ac35.apply(this, arguments);
          };
        }();
        _0x42aa2e.PlayOmen = function () {
          var _0x562a9d = _0x26fe6f(_0x352743().mark(function _0xf74d8b() {
            return _0x352743().wrap(function (_0x55a03b) {
              for (;;) {
                switch (_0x55a03b.prev = _0x55a03b.next) {
                  case 0x0:
                    _0x55a03b.next = 0x2;
                    return this.PlayAnimation("MG_Omen");
                  case 0x2:
                    this.PlayIdle();
                  case 0x3:
                  case "end":
                    return _0x55a03b.stop();
                }
              }
            }, _0xf74d8b, this);
          }));
          return function () {
            return _0x562a9d.apply(this, arguments);
          };
        }();
        _0x42aa2e.PlayFgFullReward = function () {
          var _0x272921 = _0x26fe6f(_0x352743().mark(function _0x2566c9() {
            return _0x352743().wrap(function (_0x285115) {
              for (;;) {
                switch (_0x285115.prev = _0x285115.next) {
                  case 0x0:
                    _0x285115.next = 0x2;
                    return this.PlayAnimation("FG_FullReward");
                  case 0x2:
                    this.PlayIdle();
                  case 0x3:
                  case "end":
                    return _0x285115.stop();
                }
              }
            }, _0x2566c9, this);
          }));
          return function () {
            return _0x272921.apply(this, arguments);
          };
        }();
        _0x42aa2e.playRedOrGreenEffect = function (_0x27e73f) {
          var _0x200d8f = this;
          if (this.m_txtAnim) {
            this.m_txtAnim.getState("Pig_Win_Zoom").wrapMode = _0x1c2e69.WrapMode.Normal;
            this.m_txtAnim.play("Pig_Win_Zoom");
            this.m_txtAnim.once(_0x4bf747.EventType.FINISHED, function () {
              _0x200d8f.m_txtAnim.play('Pig_Win_Loop');
            });
          }
          this.SetJpTxt(0x0);
        };
        _0x42aa2e.PlayBluePigEffect = function () {
          var _0x57e23c = _0x26fe6f(_0x352743().mark(function _0x35fc4f(_0x2cc4fb) {
            var _0x2d68a6;
            var _0x2d9330;
            var _0x21f5e1;
            var _0x3b81f1;
            var _0x5d3cce;
            var _0x1a9230;
            var _0x434385 = this;
            return _0x352743().wrap(function (_0x4af94a) {
              for (;;) {
                switch (_0x4af94a.prev = _0x4af94a.next) {
                  case 0x0:
                    if (!(_0x2cc4fb < 0x0)) {
                      _0x4af94a.next = 0x2;
                      break;
                    }
                    return _0x4af94a.abrupt('return');
                  case 0x2:
                    _0x2d68a6 = this.m_gameView.SpinAck.FolderIndex;
                    _0x2d9330 = _0x1e89f8.GetNowBetValue();
                    this.PlayIdle();
                    _0x4af94a.next = 0x7;
                    return _0xd8402d.Wait(this, 1.2);
                  case 0x7:
                    _0x27c287.Play(_0xcba612.AudioClips.scatter_FG_win);
                    _0x21f5e1 = 0x0;
                    _0x3b81f1 = 0x0;
                    _0x5d3cce = new _0x57bf99();
                  case 0xb:
                    if (!(_0x21f5e1 < _0x2cc4fb)) {
                      _0x4af94a.next = 0x13;
                      break;
                    }
                    _0x1a9230 = function () {
                      _0x21f5e1 = _0x434385.m_gameView.BlueOdds[_0x2d68a6].Col[_0x3b81f1];
                      if (_0x434385.m_txtAnim) {
                        _0x434385.m_txtAnim.play('Pig_Win_Zoom');
                        _0x434385.m_txtAnim.once(_0x4bf747.EventType.FINISHED, function () {
                          _0x434385.m_txtAnim.play("Pig_Win_Loop");
                        });
                      }
                      if (_0x21f5e1 < 0x0) {
                        _0x5d3cce.JpType = -_0x21f5e1;
                        _0x5d3cce.Value = _0x21f5e1 = _0x14c118.times(_0x434385.m_gameView.JpManager.JpOdds[_0x5d3cce.JpType - 0x1], _0x2d9330);
                        _0x5d3cce.JpMult = 0x1;
                        _0x434385.SetJpTxt(_0x5d3cce.JpType);
                        _0x434385.SetNumLabel(0x0);
                      } else {
                        _0x5d3cce.JpMult = 0x0;
                        _0x5d3cce.JpType = 0x0;
                        _0x5d3cce.Value = _0x21f5e1 = _0x14c118.times(_0x434385.m_gameView.BlueOdds[_0x2d68a6].Col[_0x3b81f1], _0x2d9330);
                        _0x434385.SetJpTxt(0x0);
                        _0x434385.SetNumLabel(_0x21f5e1);
                      }
                    };
                    _0x4af94a.next = 0xf;
                    return this.PlayFGWin(_0x1a9230);
                  case 0xf:
                    ++_0x3b81f1;
                    if (_0x21f5e1 < _0x2cc4fb) {
                      _0x27c287.Play(_0xcba612.AudioClips.scatter_FG_win);
                    } else {
                      _0x27c287.Play(_0xcba612.AudioClips.scatter_FG_near);
                    }
                    _0x4af94a.next = 0xb;
                    break;
                  case 0x13:
                    _0x4af94a.next = 0x15;
                    return this.PlayFGWin2();
                  case 0x15:
                    this.SetNumLabel(0x0);
                    this.SetJpTxt(0x0);
                    this.m_curInfo = _0x5d3cce;
                  case 0x18:
                  case "end":
                    return _0x4af94a.stop();
                }
              }
            }, _0x35fc4f, this);
          }));
          return function (_0x10b769) {
            return _0x57e23c.apply(this, arguments);
          };
        }();
        _0x4b136a(_0x2f72bb, [{
          'key': "FlyPos",
          'get': function () {
            return this.m_flyPos;
          }
        }, {
          'key': "TouchNode",
          'get': function () {
            return this.m_touchNode;
          }
        }, {
          'key': 'CurInfo',
          'get': function () {
            return this.m_curInfo;
          }
        }]);
        return _0x2f72bb;
      }(_0x37d95b);
      _0x9787ae = _0x196fb6(_0xe9d41d.prototype, "m_flyPos", [_0x199c9f], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4b3745 = _0x196fb6(_0xe9d41d.prototype, "m_txtAnim", [_0x18f5cd], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x934cab = _0x196fb6(_0xe9d41d.prototype, 'm_touchNode', [_0x2626d1], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x438391 = _0x196fb6(_0xe9d41d.prototype, "m_numLabel", [_0x1f8652], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x537a17 = _0x196fb6(_0xe9d41d.prototype, "m_jpNode", [_0x20c635], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x34202f = _0x196fb6(_0xe9d41d.prototype, "m_fxLight", [_0x5c37a5], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x576def;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "8796ezwBFdF2YQ4iZ2VI4hp", 'JP_Define', undefined);
      (function (_0x19cbdf) {
        _0x19cbdf[_0x19cbdf.MINI = 0x0] = 'MINI';
        _0x19cbdf[_0x19cbdf.MINOR = 0x1] = "MINOR";
        _0x19cbdf[_0x19cbdf.MAJOR = 0x2] = "MAJOR";
        _0x19cbdf[_0x19cbdf.GRAND = 0x3] = "GRAND";
      })(_0x576def || (_0x576def = {}));
      var _0x4b7804 = ['K', 'M'];
      var _0x20c088;
      var _0x5bb309;
      var _0x6cfb22;
      var _0x54025b;
      var _0x455c58;
      var _0x5552fb;
      var _0x4205c4;
      var _0x35417b;
      var _0x1d9666;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "03526XnXjtPg7+yltsCQSUK", 'JP_Cell', undefined);
      var _0x2f7759 = _0x3e9873.ccclass;
      var _0x49f543 = _0x3e9873.property;
      _0x20c088 = _0x2f7759("JP_Cell");
      _0x5bb309 = _0x49f543({
        'type': _0x5c9b0d(_0x576def),
        'tooltip': "JP階層"
      });
      _0x6cfb22 = _0x49f543({
        'type': _0x4bf747,
        'tooltip': '動畫'
      });
      _0x54025b = _0x49f543({
        'type': _0x2855cd,
        'tooltip': '金額'
      });
      _0x5552fb = function (_0x18bb6c) {
        function _0x4961ce() {
          var _0x221baa;
          var _0x2535b5 = arguments.length;
          var _0x3672c5 = new Array(_0x2535b5);
          for (var _0x2eb3ca = 0x0; _0x2eb3ca < _0x2535b5; _0x2eb3ca++) {
            _0x3672c5[_0x2eb3ca] = arguments[_0x2eb3ca];
          }
          _0xec902e(_0x221baa = _0x18bb6c.call.apply(_0x18bb6c, [this].concat(_0x3672c5)) || this, "m_jpLvl", _0x4205c4, _0x11be3a(_0x221baa));
          _0xec902e(_0x221baa, 'm_anim', _0x35417b, _0x11be3a(_0x221baa));
          _0xec902e(_0x221baa, "m_winLabel", _0x1d9666, _0x11be3a(_0x221baa));
          _0x221baa.m_hasAnims = {};
          return _0x221baa;
        }
        _0xed7a37(_0x4961ce, _0x18bb6c);
        var _0x180b83 = _0x4961ce.prototype;
        _0x180b83.start = function () {
          var _0x27171e = this.m_anim.clips;
          for (var _0x25cabc = 0x0; _0x25cabc < _0x27171e.length; _0x25cabc++) {
            this.m_hasAnims[_0x27171e[_0x25cabc].name] = true;
          }
        };
        _0x180b83.SetJp = function (_0x18ba28, _0xe59ca) {
          this.m_winLabel.string = _0x14c118.FormatNumberThousands(_0x18ba28, _0x14c118.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO) + _0xe59ca;
        };
        _0x180b83.ShowIdle = function () {
          this.ShowAnim("JP_Idle");
        };
        _0x180b83.ShowLock = function () {
          var _0x1cefa8 = _0x26fe6f(_0x352743().mark(function _0x574c2d() {
            return _0x352743().wrap(function (_0x2f7081) {
              for (;;) {
                switch (_0x2f7081.prev = _0x2f7081.next) {
                  case 0x0:
                    this.ShowAnim('JP_Lock');
                  case 0x1:
                  case "end":
                    return _0x2f7081.stop();
                }
              }
            }, _0x574c2d, this);
          }));
          return function () {
            return _0x1cefa8.apply(this, arguments);
          };
        }();
        _0x180b83.ShowUnlock = function () {
          this.ShowAnim("JP_LockBet");
        };
        _0x180b83.ShowBet = function () {
          this.ShowAnim("JP_Bet");
        };
        _0x180b83.ShowLockBet = function () {
          this.ShowAnim("JP_LockBet");
        };
        _0x180b83.ShowWin = function () {
          this.ShowAnim("JP_Win");
        };
        _0x180b83.ShowAnim = function () {
          var _0x27b252 = _0x26fe6f(_0x352743().mark(function _0x23e2bf(_0x22aef5) {
            var _0x2031a5;
            return _0x352743().wrap(function (_0x18fb19) {
              for (;;) {
                switch (_0x18fb19.prev = _0x18fb19.next) {
                  case 0x0:
                    if (!this.m_hasAnims[_0x22aef5]) {
                      _0x18fb19.next = 0x6;
                      break;
                    }
                    this.m_anim.play(_0x22aef5);
                    _0x2031a5 = this.m_anim.getState(_0x22aef5);
                    if (_0x22aef5 === "JP_Idle") {
                      _0x18fb19.next = 0x6;
                      break;
                    }
                    _0x18fb19.next = 0x6;
                    return _0xd8402d.Wait(this, _0x2031a5.duration);
                  case 0x6:
                  case "end":
                    return _0x18fb19.stop();
                }
              }
            }, _0x23e2bf, this);
          }));
          return function (_0x5a35e5) {
            return _0x27b252.apply(this, arguments);
          };
        }();
        return _0x4961ce;
      }(_0x14cfe4);
      _0x4205c4 = _0x196fb6(_0x5552fb.prototype, 'm_jpLvl', [_0x5bb309], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return _0x576def.MINI;
        }
      });
      _0x35417b = _0x196fb6(_0x5552fb.prototype, "m_anim", [_0x6cfb22], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1d9666 = _0x196fb6(_0x5552fb.prototype, "m_winLabel", [_0x54025b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x12eafb = _0x20c088(_0x455c58 = _0x5552fb) || _0x455c58;
      var _0x332195;
      var _0x86a9b4;
      var _0xa1b32a;
      var _0x539ae1;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, '7d773LukmFBvKBjWGFUlVQF', "JP_Manager", undefined);
      var _0xcb6e0b = _0x3e9873.ccclass;
      var _0x12e8a2 = _0x3e9873.property;
      _0x332195 = _0xcb6e0b("JP_Manager");
      _0x86a9b4 = _0x12e8a2({
        'type': _0x12eafb,
        'tooltip': "jp資訊顯示，由小到大放"
      });
      _0xa1b32a = function (_0x28f2b7) {
        function _0x4b1bfd() {
          var _0x12dc1a;
          var _0x3c5329 = arguments.length;
          var _0x5d1346 = new Array(_0x3c5329);
          for (var _0xa7b01b = 0x0; _0xa7b01b < _0x3c5329; _0xa7b01b++) {
            _0x5d1346[_0xa7b01b] = arguments[_0xa7b01b];
          }
          _0xec902e(_0x12dc1a = _0x28f2b7.call.apply(_0x28f2b7, [this].concat(_0x5d1346)) || this, "m_jpCells", _0x539ae1, _0x11be3a(_0x12dc1a));
          _0x12dc1a.m_jpOdds = null;
          return _0x12dc1a;
        }
        _0xed7a37(_0x4b1bfd, _0x28f2b7);
        var _0x116360 = _0x4b1bfd.prototype;
        _0x116360.Init = function (_0x1a6d7e) {
          this.m_jpOdds = _0x1a6d7e;
          if (this.m_jpOdds.length === this.m_jpCells.length) {
            this.OnChageBet(_0x1e89f8.GetNowBetValue());
          } else {
            _0x51f52f("Can't Match JP!!");
          }
        };
        _0x116360.OnChageBet = function (_0xaaa25a) {
          var _0x1ec931 = '';
          for (var _0x5d218b = _0x4b7804.length - 0x1; _0x5d218b >= 0x0; _0x5d218b--) {
            var _0x490aaf = Math.pow(0x3e8, _0x5d218b + 0x1);
            if (_0xaaa25a >= _0x490aaf) {
              _0x1ec931 = _0x4b7804[_0x5d218b];
              _0xaaa25a = _0x14c118.divide(_0xaaa25a, _0x490aaf);
              break;
            }
          }
          for (var _0x39751c = 0x0; _0x39751c < this.m_jpOdds.length; _0x39751c++) {
            this.m_jpCells[_0x39751c].SetJp(_0x14c118.times(_0xaaa25a, this.m_jpOdds[_0x39751c]), _0x1ec931);
          }
        };
        _0x4b136a(_0x4b1bfd, [{
          'key': "JpOdds",
          'get': function () {
            return this.m_jpOdds;
          }
        }]);
        return _0x4b1bfd;
      }(_0x14cfe4);
      _0x539ae1 = _0x196fb6(_0xa1b32a.prototype, "m_jpCells", [_0x86a9b4], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      var _0x7c28da;
      var _0x5ce9c3;
      var _0x4f2de9;
      var _0x19575d;
      var _0xc88f78;
      var _0x4f4676;
      var _0x44ed8c;
      var _0x4b4f92;
      var _0x20b07f;
      var _0xb67732;
      var _0x42673b;
      var _0x4506af;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "e54c72zxYlFWKQe+nOH/up4", "FgCounter", undefined);
      var _0x8f44c7 = _0x3e9873.ccclass;
      var _0x17c285 = _0x3e9873.property;
      _0x7c28da = _0x8f44c7("FgCounter");
      _0x5ce9c3 = _0x17c285({
        'type': _0x84773f,
        'tooltip': "FreeSpin圖"
      });
      _0x4f2de9 = _0x17c285({
        'type': _0x2855cd
      });
      _0x19575d = _0x17c285({
        'type': _0x2855cd,
        'tooltip': "收集了幾個金幣(混)"
      });
      _0xc88f78 = _0x17c285({
        'type': _0x4bf747
      });
      _0x4f4676 = _0x17c285({
        'type': _0x4bf747
      });
      _0x44ed8c = function (_0x9bef2a) {
        function _0x2fd018() {
          var _0x3c92fd;
          var _0x3fc99c = arguments.length;
          var _0xba70b8 = new Array(_0x3fc99c);
          for (var _0x1057b7 = 0x0; _0x1057b7 < _0x3fc99c; _0x1057b7++) {
            _0xba70b8[_0x1057b7] = arguments[_0x1057b7];
          }
          _0xec902e(_0x3c92fd = _0x9bef2a.call.apply(_0x9bef2a, [this].concat(_0xba70b8)) || this, "m_sprite", _0x4b4f92, _0x11be3a(_0x3c92fd));
          _0xec902e(_0x3c92fd, 'm_label', _0x20b07f, _0x11be3a(_0x3c92fd));
          _0xec902e(_0x3c92fd, "m_coinCountLabel", _0xb67732, _0x11be3a(_0x3c92fd));
          _0x3c92fd.m_coinCount = 0x0;
          _0xec902e(_0x3c92fd, 'm_animPlayFire', _0x42673b, _0x11be3a(_0x3c92fd));
          _0xec902e(_0x3c92fd, "m_animAddRound", _0x4506af, _0x11be3a(_0x3c92fd));
          _0x3c92fd.m_curRound = 0x0;
          _0x3c92fd.m_totoalRound = 0x0;
          return _0x3c92fd;
        }
        _0xed7a37(_0x2fd018, _0x9bef2a);
        var _0x26f7b6 = _0x2fd018.prototype;
        _0x26f7b6.PlayFire = function () {
          var _0x472387 = _0x26fe6f(_0x352743().mark(function _0x116ef2() {
            return _0x352743().wrap(function (_0x113655) {
              for (;;) {
                switch (_0x113655.prev = _0x113655.next) {
                  case 0x0:
                    this.m_animPlayFire.play("FX_FGRespins");
                    _0x113655.next = 0x3;
                    return _0xd8402d.Wait(this, 0x1);
                  case 0x3:
                  case 'end':
                    return _0x113655.stop();
                }
              }
            }, _0x116ef2, this);
          }));
          return function () {
            return _0x472387.apply(this, arguments);
          };
        }();
        _0x26f7b6.HideRoundLabel = function () {
          this.m_label.node.active = false;
          this.m_sprite.active = false;
        };
        _0x26f7b6.HideCounter = function () {
          this.node.active = false;
          this.m_label.node.active = true;
          this.m_sprite.active = true;
        };
        _0x26f7b6.ShowCounter = function () {
          this.node.active = true;
        };
        _0x26f7b6.AddRound = function () {
          _0x27c287.Play(_0xcba612.AudioClips.FG_Respin);
          this.m_animAddRound.play('FX_Respins');
          this.m_totoalRound = 0x3;
          this.CurRound = 0x3;
          this.SetLabel();
        };
        _0x26f7b6.CountCurRound = function () {
          this.CurRound = this.m_curRound - 0x1;
          this.SetLabel();
        };
        _0x26f7b6.SetLabel = function () {
          this.m_label.string = this.m_curRound + '/' + this.m_totoalRound;
        };
        _0x26f7b6.AddCoinCount = function () {
          this.m_coinCount++;
          this.SetCoinCount();
        };
        _0x26f7b6.ResetCoinCount = function () {
          this.m_coinCount = 0x0;
          this.SetCoinCount();
        };
        _0x26f7b6.SetCoinCount = function (_0x5cd325) {
          if (_0x5cd325) {
            this.m_coinCount = _0x5cd325;
          }
          this.m_coinCountLabel.string = this.m_coinCount;
        };
        _0x26f7b6.SetCurRound = function (_0x3a4f72) {
          this.CurRound = _0x3a4f72;
          this.SetLabel();
        };
        _0x26f7b6.EnterFreeGame = function () {
          this.CurRound = 0x3;
          this.m_totoalRound = 0x3;
          this.SetLabel();
          this.ResetCoinCount();
          this.ShowCounter();
        };
        _0x26f7b6.LeaveFreeGame = function () {
          this.CurRound = 0x0;
          this.m_totoalRound = 0x0;
          this.m_label.string = '';
          this.HideCounter();
        };
        _0x4b136a(_0x2fd018, [{
          'key': 'CurRound',
          'set': function (_0x4382de) {
            this.m_curRound = _0x4382de;
          }
        }]);
        return _0x2fd018;
      }(_0x14cfe4);
      _0x4b4f92 = _0x196fb6(_0x44ed8c.prototype, "m_sprite", [_0x5ce9c3], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x20b07f = _0x196fb6(_0x44ed8c.prototype, "m_label", [_0x4f2de9], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0xb67732 = _0x196fb6(_0x44ed8c.prototype, "m_coinCountLabel", [_0x19575d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x42673b = _0x196fb6(_0x44ed8c.prototype, "m_animPlayFire", [_0xc88f78], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4506af = _0x196fb6(_0x44ed8c.prototype, "m_animAddRound", [_0x4f4676], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x19a700;
      var _0x4af5a3;
      var _0x372a34;
      var _0x4887e3;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "bd2eemnuv5FlJ3jgh6uKaWk", "FgCollect", undefined);
      var _0x233d3b = _0x3e9873.ccclass;
      var _0x53d020 = _0x3e9873.property;
      _0x19a700 = _0x233d3b("FgCollect");
      _0x4af5a3 = _0x53d020({
        'type': _0x2855cd
      });
      _0x372a34 = function (_0x52a403) {
        function _0x347301() {
          var _0x3af9e4;
          var _0x6003ae = arguments.length;
          var _0x168f44 = new Array(_0x6003ae);
          for (var _0x43afe7 = 0x0; _0x43afe7 < _0x6003ae; _0x43afe7++) {
            _0x168f44[_0x43afe7] = arguments[_0x43afe7];
          }
          _0xec902e(_0x3af9e4 = _0x52a403.call.apply(_0x52a403, [this].concat(_0x168f44)) || this, "m_label", _0x4887e3, _0x11be3a(_0x3af9e4));
          _0x3af9e4.m_count = 0x0;
          return _0x3af9e4;
        }
        _0xed7a37(_0x347301, _0x52a403);
        var _0x1bbc07 = _0x347301.prototype;
        _0x1bbc07.onLoad = function () {
          this.m_label.string = this.m_count.toString();
        };
        _0x1bbc07.AddNum = function (_0x31456b, _0x341abc) {
          this.m_count = _0x14c118.strip(this.m_count + _0x31456b);
          if (this.m_count > _0x341abc) {
            this.m_count = _0x341abc;
          }
          this.m_label.string = _0x14c118.FormatNumberThousands(_0x14c118.strip(this.m_count), _0x14c118.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO);
          this.m_label.getComponent(_0x4bf747).play("Collect_Win");
        };
        _0x1bbc07.ClearAll = function () {
          this.m_count = 0x0;
          this.m_label.string = this.m_count.toString();
        };
        return _0x347301;
      }(_0x14cfe4);
      _0x4887e3 = _0x196fb6(_0x372a34.prototype, "m_label", [_0x4af5a3], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x110b79;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "097a1nYjaND/q2pVoK4GXkl", "MgOmenSpine", undefined);
      var _0xbd5ae3 = _0x3e9873.ccclass;
      _0x110b79 = _0xbd5ae3('MgOmenSpine');
      var _0x5935ef;
      var _0x5102c7;
      var _0x5beea1;
      var _0x189dd6;
      var _0x280d35;
      var _0x130383;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "fe683Fk/S1BzKSan1ZkBTL+", "JpComplimentSpine", undefined);
      var _0x5eaf1b = _0x3e9873.ccclass;
      var _0x1370f1 = _0x3e9873.property;
      _0x5935ef = _0x5eaf1b("JpComplimentSpine");
      _0x5102c7 = _0x1370f1({
        'type': _0x2855cd
      });
      _0x5beea1 = _0x1370f1({
        'type': [_0x959fe3.Skeleton],
        'tooltip': 'Spine'
      });
      _0x189dd6 = function (_0x148c08) {
        function _0x12ff6e() {
          var _0xf11fd5;
          var _0x12c491 = arguments.length;
          var _0x591dd7 = new Array(_0x12c491);
          for (var _0x577f49 = 0x0; _0x577f49 < _0x12c491; _0x577f49++) {
            _0x591dd7[_0x577f49] = arguments[_0x577f49];
          }
          _0xec902e(_0xf11fd5 = _0x148c08.call.apply(_0x148c08, [this].concat(_0x591dd7)) || this, "m_jpLabel", _0x280d35, _0x11be3a(_0xf11fd5));
          _0xec902e(_0xf11fd5, "m_pigSpine", _0x130383, _0x11be3a(_0xf11fd5));
          _0xf11fd5.m_gameView = null;
          return _0xf11fd5;
        }
        _0xed7a37(_0x12ff6e, _0x148c08);
        var _0x385c9f = _0x12ff6e.prototype;
        _0x385c9f.Init = function (_0x1ad91a) {
          this.m_gameView = _0x1ad91a;
        };
        _0x385c9f.PlayJpCompliment = function () {
          var _0x4beb32 = _0x26fe6f(_0x352743().mark(function _0x392575() {
            var _0x54fbc0;
            var _0x115aaa;
            return _0x352743().wrap(function (_0x85460c) {
              for (;;) {
                switch (_0x85460c.prev = _0x85460c.next) {
                  case 0x0:
                    _0x54fbc0 = this.m_gameView.JpManager.JpOdds;
                    this.m_jpLabel.string = _0x14c118.times(_0x54fbc0[_0x54fbc0.length - 0x1], _0x1e89f8.GetNowBetValue()).toString();
                    this.m_gameView.JpWin = _0x14c118.times(_0x54fbc0[_0x54fbc0.length - 0x1], _0x1e89f8.GetNowBetValue());
                    this.SetNodeActivity(true);
                    _0x27c287.Pause(this.m_gameView.FreeBgmId);
                    for (_0x115aaa = 0x0; _0x115aaa < 0x3; _0x115aaa++) {
                      this.m_pigSpine[_0x115aaa].clearTrack(0x0);
                      this.m_pigSpine[_0x115aaa].setToSetupPose();
                      this.m_pigSpine[_0x115aaa].setSkin("lv3");
                      this.m_pigSpine[_0x115aaa].setAnimation(0x0, "JP_Comp", true);
                    }
                    _0x85460c.next = 0x8;
                    return this.PlayAnimation('Start');
                  case 0x8:
                    _0x85460c.next = 0xa;
                    return this.PlayAnimation('Loop');
                  case 0xa:
                    _0x85460c.next = 0xc;
                    return this.PlayAnimation('End');
                  case 0xc:
                    this.SetNodeActivity(false);
                  case 0xd:
                  case "end":
                    return _0x85460c.stop();
                }
              }
            }, _0x392575, this);
          }));
          return function () {
            return _0x4beb32.apply(this, arguments);
          };
        }();
        return _0x12ff6e;
      }(_0x304e58);
      _0x280d35 = _0x196fb6(_0x189dd6.prototype, "m_jpLabel", [_0x5102c7], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x130383 = _0x196fb6(_0x189dd6.prototype, 'm_pigSpine', [_0x5beea1], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      var _0x2ad644;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, 'd76f1l+5nRISahURpU/yaU8', "ReelSkinSpine", undefined);
      var _0x367cbf = _0x3e9873.ccclass;
      _0x2ad644 = _0x367cbf("ReelSkinSpine");
      var _0x5ce8fe;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "0e836ZSxjNFl4GwzT1PyClc", "BackGroundSpine", undefined);
      var _0x2b74e0 = _0x3e9873.ccclass;
      _0x5ce8fe = _0x2b74e0("BackGroundSpine");
      var _0x214977;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, 'f8b6dvvehNDQZuaQB8u2vOm', "TriLuckSpine", undefined);
      var _0x4ec3ca = _0x3e9873.ccclass;
      _0x214977 = _0x4ec3ca('TriLuckSpine');
      var _0x147bef;
      var _0x5319e7;
      var _0x1dd316;
      var _0x21903f;
      var _0x305019;
      var _0xc7b743;
      var _0x182111;
      var _0x4811fc;
      var _0x19629d;
      var _0x4d096d;
      var _0x5f290e;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "58afbgi72RCYrg3eW8ahovc", "CommonBuyBonusCell", undefined);
      var _0x344db7 = _0x3e9873.ccclass;
      var _0x34ba0f = _0x3e9873.property;
      _0x147bef = _0x344db7('CommonBuyBonusCell');
      _0x5319e7 = _0x34ba0f({
        'type': _0x31b16c,
        'tooltip': '購買文字'
      });
      _0x1dd316 = _0x34ba0f({
        'type': _0x31b16c,
        'tooltip': '項目標題'
      });
      _0x21903f = _0x34ba0f({
        'type': _0x515a13,
        'tooltip': "標題圖片名稱"
      });
      _0x305019 = _0x34ba0f({
        'type': _0x2855cd,
        'tooltip': '金額'
      });
      _0x182111 = function (_0x196c6a) {
        function _0x17ebcd() {
          var _0x341ded;
          var _0xea4032 = arguments.length;
          var _0x431284 = new Array(_0xea4032);
          for (var _0x350435 = 0x0; _0x350435 < _0xea4032; _0x350435++) {
            _0x431284[_0x350435] = arguments[_0x350435];
          }
          _0xec902e(_0x341ded = _0x196c6a.call.apply(_0x196c6a, [this].concat(_0x431284)) || this, "m_buyHintSprite", _0x4811fc, _0x11be3a(_0x341ded));
          _0xec902e(_0x341ded, 'm_titleSprite', _0x19629d, _0x11be3a(_0x341ded));
          _0xec902e(_0x341ded, 'm_titlePicName', _0x4d096d, _0x11be3a(_0x341ded));
          _0xec902e(_0x341ded, "m_priceLabel", _0x5f290e, _0x11be3a(_0x341ded));
          return _0x341ded;
        }
        _0xed7a37(_0x17ebcd, _0x196c6a);
        var _0x701daa = _0x17ebcd.prototype;
        _0x701daa.start = function () {
          var _0x45eddb = _0x5cb46c.GetGameAtlas();
          if (_0x5cb46c.CurrLang !== _0xd8402d.Lang.EN) {
            this.m_buyHintSprite.spriteFrame = _0x45eddb.getSpriteFrame("Txt_Buy_Feature_Buy");
            this.m_titleSprite.spriteFrame = _0x45eddb.getSpriteFrame(this.m_titlePicName);
          }
        };
        _0x701daa.SetPrice = function (_0x279333) {
          this.m_priceLabel.string = _0x279333;
        };
        return _0x17ebcd;
      }(_0x14cfe4);
      _0x4811fc = _0x196fb6(_0x182111.prototype, "m_buyHintSprite", [_0x5319e7], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x19629d = _0x196fb6(_0x182111.prototype, "m_titleSprite", [_0x1dd316], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4d096d = _0x196fb6(_0x182111.prototype, "m_titlePicName", [_0x21903f], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return '';
        }
      });
      _0x5f290e = _0x196fb6(_0x182111.prototype, "m_priceLabel", [_0x305019], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x47bf0d = _0x147bef(_0xc7b743 = _0x182111) || _0xc7b743;
      var _0x740b86;
      var _0x1c37f6;
      var _0x2c7f64;
      var _0x562769;
      var _0x23be4d;
      var _0x5d30c6;
      var _0x500cc6;
      var _0x1573f7;
      var _0x109d79;
      var _0x283354;
      var _0x59a396;
      var _0x2a803e;
      var _0x5aa19e;
      var _0x3f7a73;
      var _0x1313dc;
      var _0x58acc1;
      var _0x436ec3;
      var _0x109a35;
      var _0x178a5f;
      var _0x1b6564;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, 'deede8s0zBMX57ZpiWkWMfR', "CommonBuyBonus", undefined);
      var _0x524238 = _0x3e9873.ccclass;
      var _0x49ff07 = _0x3e9873.property;
      _0x740b86 = _0x524238('CommonBuyBonus');
      _0x1c37f6 = _0x49ff07({
        'type': _0x84773f,
        'tooltip': '介面'
      });
      _0x2c7f64 = _0x49ff07({
        'type': _0x4bf747,
        'tooltip': "介面開關動畫"
      });
      _0x562769 = _0x49ff07({
        'type': _0x84773f,
        'tooltip': "開啟按鈕節點"
      });
      _0x23be4d = _0x49ff07({
        'type': _0x31b16c,
        'tooltip': "開啟按鈕標題"
      });
      _0x5d30c6 = _0x49ff07({
        'type': _0x2855cd,
        'tooltip': '押注金額'
      });
      _0x500cc6 = _0x49ff07({
        'type': _0x47bf0d,
        'tooltip': '購買項目'
      });
      _0x1573f7 = _0x49ff07({
        'type': _0x31b16c,
        'tooltip': '標題'
      });
      _0x109d79 = _0x49ff07({
        'type': _0x31b16c,
        'tooltip': '押注'
      });
      _0x283354 = _0x49ff07({
        'type': _0x2855cd,
        'tooltip': "幣別符號"
      });
      _0x59a396 = function (_0x5825a9) {
        function _0x3d1405() {
          var _0x3a5328;
          var _0x1e74fb = arguments.length;
          var _0xdcc460 = new Array(_0x1e74fb);
          for (var _0x2f9074 = 0x0; _0x2f9074 < _0x1e74fb; _0x2f9074++) {
            _0xdcc460[_0x2f9074] = arguments[_0x2f9074];
          }
          _0xec902e(_0x3a5328 = _0x5825a9.call.apply(_0x5825a9, [this].concat(_0xdcc460)) || this, "m_viewNode", _0x2a803e, _0x11be3a(_0x3a5328));
          _0xec902e(_0x3a5328, 'm_anim', _0x5aa19e, _0x11be3a(_0x3a5328));
          _0xec902e(_0x3a5328, "m_openBtnNode", _0x3f7a73, _0x11be3a(_0x3a5328));
          _0xec902e(_0x3a5328, "m_openBtnTitle", _0x1313dc, _0x11be3a(_0x3a5328));
          _0xec902e(_0x3a5328, "m_betLabel", _0x58acc1, _0x11be3a(_0x3a5328));
          _0xec902e(_0x3a5328, "m_buyBonusCells", _0x436ec3, _0x11be3a(_0x3a5328));
          _0xec902e(_0x3a5328, "m_titleSprite", _0x109a35, _0x11be3a(_0x3a5328));
          _0xec902e(_0x3a5328, "m_betSprite", _0x178a5f, _0x11be3a(_0x3a5328));
          _0xec902e(_0x3a5328, "m_currencyLabel", _0x1b6564, _0x11be3a(_0x3a5328));
          _0x3a5328.m_iGameView = null;
          _0x3a5328.m_setting = null;
          _0x3a5328.m_betList = null;
          _0x3a5328.m_betIdx = 0x0;
          _0x3a5328.m_bonusType = null;
          _0x3a5328.m_isPlayingAnim = false;
          return _0x3a5328;
        }
        _0xed7a37(_0x3d1405, _0x5825a9);
        var _0x16266f = _0x3d1405.prototype;
        _0x16266f.start = function () {
          this.m_viewNode.active = true;
          var _0x1c1842 = _0x5cb46c.GetGameAtlas();
          if (_0x5cb46c.CurrLang !== _0xd8402d.Lang.EN) {
            this.m_betSprite.spriteFrame = _0x1c1842.getSpriteFrame('Txt_Buy_Feature_Bet');
            this.m_titleSprite.spriteFrame = _0x1c1842.getSpriteFrame('Txt_Buy_Feature_Title');
            if (this.m_openBtnTitle) {
              this.m_openBtnTitle.spriteFrame = _0x1c1842.getSpriteFrame("BuyBonus_IconName");
            }
          }
          _0x4bb301.Register("TriggerFreeSpin", this);
          _0x4bb301.Register("FreeSpinTotalWinEnd", this);
          _0x4bb301.Register('PauseFreeSpin', this);
        };
        _0x16266f.Init = function (_0x17215c, _0x29e4f5, _0x18f9e5, _0x27334f) {
          var _0x211058 = this;
          if (undefined === _0x18f9e5) {
            _0x18f9e5 = false;
          }
          if (undefined === _0x27334f) {
            _0x27334f = null;
          }
          this.m_viewNode.active = false;
          if (_0x17215c && !_0x14c118.CheckSwitchOff(_0x54a6a8.ShopingMall)) {
            this.m_setting = _0x17215c;
            this.m_iGameView = _0x29e4f5;
            this.m_betList = JSON.parse(JSON.stringify(_0x1e89f8.GetBetList()));
            for (var _0x4b4aba = this.m_betList.length - 0x1; _0x4b4aba >= 0x0 && this.m_betList[_0x4b4aba] > this.m_setting.MaxBet; _0x4b4aba--) {
              this.m_betList.splice(_0x4b4aba);
            }
            this.m_betIdx = _0x1e89f8.GetNowBetIndex();
            if (!this.m_betList[this.m_betIdx] || this.m_betList[this.m_betIdx] > this.m_betList[this.m_betList.length - 0x1]) {
              this.m_betIdx = this.m_betList.length - 0x1;
            }
            this.SetPrice();
            var _0x6fbc1a = function (_0x29bb5d) {
              _0x211058.m_buyBonusCells[_0x29bb5d].getComponent(_0x29b18a).node.on(_0x84773f.EventType.TOUCH_END, function () {
                if (_0x46c884.IsFeaturesDemoMode) {
                  _0x211058.Hide();
                } else {
                  if (!(null == _0x27334f)) {
                    _0x27334f();
                  }
                  _0x2b2431.Play(_0xd8402d.AudioClips.COMMON_BTN);
                  if (!_0x211058.m_isPlayingAnim) {
                    _0x26fd97.ForceChangeExtraBetMode(false);
                    _0x211058.m_bonusType = _0x29bb5d;
                    _0x211058.Hide();
                    _0x1e89f8.SetNowBet(_0x211058.m_betList[_0x211058.m_betIdx]);
                    _0x211058.m_iGameView.ClickSpin();
                  }
                }
              });
            };
            for (var _0x308d0a = 0x0; _0x308d0a < this.m_buyBonusCells.length; _0x308d0a++) {
              _0x6fbc1a(_0x308d0a);
            }
            this.m_viewNode.active = false;
            if (_0x18f9e5 && this.m_openBtnNode) {
              this.m_openBtnNode.removeFromParent();
              _0x46c884.SetGameBuyBonus(this.m_openBtnNode);
            }
          } else {
            this.SetBuyBtnVisible(false);
          }
        };
        _0x16266f.OnEvent = function (_0x1ed624) {
          if (_0x1ed624 === "TriggerFreeSpin") {
            this.Hide();
            this.SetBuyBtnVisible(false);
          } else if (!(_0x1ed624 !== "FreeSpinTotalWinEnd" && _0x1ed624 !== 'PauseFreeSpin')) {
            this.SetBuyBtnVisible(true);
          }
        };
        _0x16266f.SetPrice = function () {
          var _0x149af4 = this.m_betList[this.m_betIdx];
          if (this.m_currencyLabel) {
            if (_0xd8402d.DollarSymbol) {
              this.m_currencyLabel.string = '(' + _0xd8402d.DollarSymbol + ')';
            } else {
              this.m_currencyLabel.node.active = false;
            }
          }
          this.m_betLabel.string = _0x14c118.FormatNumberThousands(_0x149af4, _0x14c118.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          for (var _0x1facd9 = 0x0; _0x1facd9 < this.m_buyBonusCells.length; _0x1facd9++) {
            var _0x1259ec = _0x14c118.times(_0x149af4, this.m_setting.PriceOdd[_0x1facd9]);
            this.m_buyBonusCells[_0x1facd9].SetPrice(_0x14c118.FormatNumberThousands(_0x1259ec, _0x14c118.FORMAT_NUMBER_TYPE.PERMANENT_DOT));
          }
        };
        _0x16266f.SetBuyBtnVisible = function (_0xb017a7) {
          this.m_openBtnNode.active = !!this.m_setting && _0xb017a7;
        };
        _0x16266f.GetBuyBtnVisible = function () {
          return this.m_openBtnNode.active;
        };
        _0x16266f.GetBuyBonusBet = function () {
          return this.m_setting && null !== this.m_bonusType ? _0x14c118.times(this.m_setting.PriceOdd[this.m_bonusType], _0x1e89f8.GetNowBetValue()) : _0x14c118.strip(_0x1e89f8.GetNowBetValue());
        };
        _0x16266f.CleanInfo = function () {
          this.m_bonusType = null;
        };
        _0x16266f.IsOpen = function () {
          return this.m_viewNode.active;
        };
        _0x16266f.Show = function () {
          var _0x554f16 = this;
          if (!(_0x388974.Current() !== _0x4048a4.IDLE || _0xd8402d.FreeSpinRemain > 0x0) && !this.m_anim.getState("Buy_Feature_Close").isPlaying && !this.m_viewNode.active) {
            _0x3d8b38.stopAllByTarget(this.node);
            this.m_isPlayingAnim = true;
            _0x2b2431.Play(_0xd8402d.AudioClips.COMMON_BTN);
            this.m_viewNode.active = true;
            this.m_anim.play("Buy_Feature_Open");
            var _0x1349fe = this.m_anim.getState("Buy_Feature_Open");
            _0x174aa1(this.node).delay(_0x1349fe.duration).call(function () {
              _0x554f16.m_isPlayingAnim = false;
            }).start();
            var _0x11e550 = '-1';
            var _0x5ae1ca = 0x0;
            if (_0xd8402d.APP) {
              _0x11e550 = _0xd8402d.APP.GetAID();
              _0x5ae1ca = Number(_0xd8402d.APP.GetApiID());
            }
            _0xd8402d.SendBtnClickEvent(Number(_0x11e550), _0x5ae1ca, Number(_0xd8402d.NOW_GAME_ID), this.m_iGameView.Version, _0xd8402d.BTN_CLICK_EVENT.INGAME_BUY_BONUS, 0x0, false);
          }
        };
        _0x16266f.Hide = function () {
          var _0x25d695 = _0x26fe6f(_0x352743().mark(function _0x49a611() {
            var _0x109aab;
            var _0x385618;
            var _0x59b734;
            var _0x3003fd = this;
            return _0x352743().wrap(function (_0x43f2aa) {
              for (;;) {
                switch (_0x43f2aa.prev = _0x43f2aa.next) {
                  case 0x0:
                    _0x109aab = this.m_anim.getState("Buy_Feature_Close");
                    if (this.m_viewNode.active && !_0x109aab.isPlaying) {
                      _0x43f2aa.next = 0x3;
                      break;
                    }
                    return _0x43f2aa.abrupt('return');
                  case 0x3:
                    if ((_0x385618 = this.m_anim.getState("Buy_Feature_Open")).isPlaying) {
                      _0x385618.stop();
                    }
                    _0x3d8b38.stopAllByTarget(this.node);
                    this.m_isPlayingAnim = true;
                    _0x2b2431.Play(_0xd8402d.AudioClips.COMMON_BTN);
                    this.m_anim.play("Buy_Feature_Close");
                    _0x109aab = this.m_anim.getState("Buy_Feature_Close");
                    _0x174aa1(this.node).delay(_0x385618.duration).call(function () {
                      _0x3003fd.m_isPlayingAnim = false;
                    }).start();
                    _0x59b734 = this.m_anim.getState("Buy_Feature_Close");
                    _0x43f2aa.next = 0xe;
                    return _0xd8402d.Wait(this, _0x59b734.duration);
                  case 0xe:
                    this.m_viewNode.active = false;
                  case 0xf:
                  case 'end':
                    return _0x43f2aa.stop();
                }
              }
            }, _0x49a611, this);
          }));
          return function () {
            return _0x25d695.apply(this, arguments);
          };
        }();
        _0x16266f.AddBet = function () {
          if (!(this.m_betIdx + 0x1 > this.m_betList.length - 0x1)) {
            _0x2b2431.Play(_0xd8402d.AudioClips.COMMON_BTN);
            this.m_betIdx++;
            this.SetPrice();
          }
        };
        _0x16266f.SubBet = function () {
          if (!(this.m_betIdx - 0x1 < 0x0)) {
            _0x2b2431.Play(_0xd8402d.AudioClips.COMMON_BTN);
            this.m_betIdx--;
            this.SetPrice();
          }
        };
        _0x4b136a(_0x3d1405, [{
          'key': 'BonusType',
          'get': function () {
            return this.m_bonusType;
          }
        }]);
        return _0x3d1405;
      }(_0x14cfe4);
      _0x2a803e = _0x196fb6(_0x59a396.prototype, 'm_viewNode', [_0x1c37f6], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5aa19e = _0x196fb6(_0x59a396.prototype, "m_anim", [_0x2c7f64], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3f7a73 = _0x196fb6(_0x59a396.prototype, 'm_openBtnNode', [_0x562769], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1313dc = _0x196fb6(_0x59a396.prototype, 'm_openBtnTitle', [_0x23be4d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x58acc1 = _0x196fb6(_0x59a396.prototype, "m_betLabel", [_0x5d30c6], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x436ec3 = _0x196fb6(_0x59a396.prototype, "m_buyBonusCells", [_0x500cc6], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x109a35 = _0x196fb6(_0x59a396.prototype, "m_titleSprite", [_0x1573f7], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x178a5f = _0x196fb6(_0x59a396.prototype, "m_betSprite", [_0x109d79], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1b6564 = _0x196fb6(_0x59a396.prototype, 'm_currencyLabel', [_0x283354], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "0d90b/PWvJCrIP7va14s9hL", 'GameView', undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "606c7/ZiN5E4LsOqauPfURu", "BigBottomSpine", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "df7076kFG1EB7E1zyFeWJkW", 'BigTopSpine', undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "d2ba6yX/SdG0p6iswjqFoDm", "DuelBackGroundSpine", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "ad1c8W5MZlO/q1aBWTMieDQ", "IntroSpine", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "8bde8TLIAFLaa26n/g5f37x", 'NodePool', undefined);
      var _0x1c2fbc = function () {
        function _0x496677() {
          this.m_symbolEffectPrefabs = null;
          this.m_symbolEffects = null;
          this.m_symbolAddEffectPrefabs = null;
          this.m_symbolAddEffect = null;
          this.m_flyEffectPrefabs = null;
          this.m_flyEffects = null;
          if (_0x496677._instance) {
            throw new Error("Error: Instantiation failed: Use NodePool.getInstance() instead of new.");
          }
          _0x496677._instance = this;
        }
        _0x496677.getInstance = function () {
          if (!this._instance) {
            this._instance = new _0x496677();
          }
          return _0x496677._instance;
        };
        var _0x2896f9 = _0x496677.prototype;
        _0x2896f9.SetSymbolAddEffectPrefabs = function (_0x2a99bb) {
          this.m_symbolAddEffectPrefabs = _0x2a99bb;
          this.m_symbolAddEffect = new Array();
        };
        _0x2896f9.GetSymbolAddNode = function (_0x5e2cc0) {
          if (this.m_symbolAddEffect.length > 0x0) {
            return this.m_symbolAddEffect[_0x5e2cc0].shift();
          }
          if (this.m_symbolAddEffectPrefabs) {
            var _0x282d9d = _0x2b0134(this.m_symbolAddEffectPrefabs[_0x5e2cc0]).getComponent(_0x44aa83);
            if (!_0x282d9d) {
              _0x51f52f("Forget to put Script on your prefab?");
            }
            return _0x282d9d;
          }
        };
        _0x2896f9.ReturnSymbolAddEffect = function (_0x324653, _0x194049) {
          this.m_symbolAddEffect[_0x324653].push(_0x194049);
        };
        _0x2896f9.SetSymbolSpineEffectPrefabs = function (_0x10cc02) {
          this.m_symbolEffectPrefabs = _0x10cc02;
          this.m_symbolEffects = new Array();
          for (var _0x104715 = 0x0; _0x104715 < _0x10cc02.length; ++_0x104715) {
            this.m_symbolEffects.push(new Array());
          }
        };
        _0x2896f9.GetSymbolSpineNode = function (_0x1f9dc4) {
          if (this.m_symbolEffects[_0x1f9dc4].length > 0x0) {
            return this.m_symbolEffects[_0x1f9dc4].shift();
          }
          if (this.m_symbolEffectPrefabs[_0x1f9dc4]) {
            var _0x290825 = _0x2b0134(this.m_symbolEffectPrefabs[_0x1f9dc4]).getComponent(_0x1b3034);
            if (!_0x290825) {
              _0x51f52f("Forget to put Script on your prefab?");
            }
            return _0x290825;
          }
          _0x51f52f("Symbol effect prefabs does not contain symbol ", _0x1f9dc4, " !!!");
        };
        _0x2896f9.ReturnSymbolSpineEffect = function (_0xc24970) {
          if (this.m_symbolEffects[_0xc24970.Symbol]) {
            this.m_symbolEffects[_0xc24970.Symbol].push(_0xc24970);
          }
        };
        _0x2896f9.SetSymbolFlyPrefabs = function (_0x187f64) {
          this.m_flyEffectPrefabs = _0x187f64;
          this.m_flyEffects = new Array();
          for (var _0x5bc952 = 0x0; _0x5bc952 < _0x187f64.length; ++_0x5bc952) {
            this.m_flyEffects.push(new Array());
          }
        };
        _0x2896f9.GetFlyNode = function (_0x32034a) {
          return this.m_flyEffects[_0x32034a].length > 0x0 ? this.m_flyEffects[_0x32034a].shift() : this.m_flyEffectPrefabs[_0x32034a] ? _0x2b0134(this.m_flyEffectPrefabs[_0x32034a]) : void _0x51f52f("Fly effect prefabs does not contain symbol ", _0x32034a, " !!!");
        };
        _0x2896f9.ReturnFlyEffect = function (_0x50f6ee, _0x433015) {
          if (this.m_flyEffects[_0x50f6ee]) {
            this.m_flyEffects[_0x50f6ee].push(_0x433015);
          }
        };
        return _0x496677;
      }();
      _0x1c2fbc._instance = new _0x1c2fbc();
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, '205fduYTD5LVrkEFoq9ow2+', "ScatterFxSpine", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "84c5byXmKBEJIwVBTwOs7ly", 'ButtonPro', undefined);
      var _0x18fc56;
      var _0x166c2e;
      var _0x279c61;
      !function (_0x43a53c) {
        _0x43a53c[_0x43a53c.NONE = 0x0] = "NONE";
        _0x43a53c[_0x43a53c.COLOR = 0x1] = "COLOR";
        _0x43a53c[_0x43a53c.SPRITE = 0x2] = "SPRITE";
        _0x43a53c[_0x43a53c.SCALE = 0x4] = "SCALE";
        _0x43a53c[_0x43a53c.COLOR_SPRITE = 0x3] = "COLOR_SPRITE";
        _0x43a53c[_0x43a53c.COLOR_SCALE = 0x5] = "COLOR_SCALE";
        _0x43a53c[_0x43a53c.SPRITE_SCALE = 0x6] = "SPRITE_SCALE";
        _0x43a53c[_0x43a53c.ALL = 0x7] = "ALL";
      }(_0x18fc56 || (_0x18fc56 = {}));
      _0x407709(_0x18fc56);
      (function (_0x688a08) {
        _0x688a08.NORMAL = "normal";
        _0x688a08.HOVER = "hover";
        _0x688a08.PRESSED = 'pressed';
        _0x688a08.DISABLED = "disabled";
      })(_0x166c2e || (_0x166c2e = {}));
      (function (_0x433cf4) {
        _0x433cf4.CLICK = "click";
      })(_0x279c61 || (_0x279c61 = {}));
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, 'da7972YP9VAta/rfkmC0gmE', "ColorText", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "ccb69RBfI5KBKNPuwywfE10", 'ColorFadingUI', undefined);
      var _0x3667c1;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, '9cd57oopkhBmZJ5o4EZK1tk', "EvtReceiver", undefined);
      var _0x538c66 = _0x3e9873.ccclass;
      var _0xf16b4d = _0x538c66(_0x3667c1 = function (_0x7c0cc4) {
        function _0xa42ac2() {
          var _0x21e056;
          var _0x53aa80 = arguments.length;
          var _0x2a38c7 = new Array(_0x53aa80);
          for (var _0x3e1712 = 0x0; _0x3e1712 < _0x53aa80; _0x3e1712++) {
            _0x2a38c7[_0x3e1712] = arguments[_0x3e1712];
          }
          (_0x21e056 = _0x7c0cc4.call.apply(_0x7c0cc4, [this].concat(_0x2a38c7)) || this).m_callback = undefined;
          return _0x21e056;
        }
        _0xed7a37(_0xa42ac2, _0x7c0cc4);
        _0xa42ac2.Pack = function (_0x2d4719, _0xabc90c) {
          _0x2d4719.addComponent(_0xa42ac2);
          _0x2d4719.getComponent(_0xa42ac2).SetCallback(_0xabc90c);
        };
        var _0x2341b9 = _0xa42ac2.prototype;
        _0x2341b9.EvtReciever = function (_0x5bc807) {
          _0x392c7c("AnimEvtReciever: ", _0x5bc807);
          if (this.m_callback) {
            this.m_callback(_0x5bc807);
          } else {
            _0x392c7c("callback沒有設定，無法處理event: ", _0x5bc807);
          }
        };
        _0x2341b9.triggerAnimationEvent = function (_0x2915db) {
          _0x392c7c("triggerAnimationEvent: ", _0x2915db);
          if (this.m_callback) {
            this.m_callback(_0x2915db);
          } else {
            _0x392c7c("callback沒有設定，無法處理event: ", _0x2915db);
          }
        };
        _0x2341b9.SetCallback = function (_0x11a274) {
          this.m_callback = _0x11a274;
        };
        _0x2341b9.onDestroy = function () {
          this.m_callback = null;
        };
        return _0xa42ac2;
      }(_0x14cfe4)) || _0x3667c1;
      var _0xd9506c;
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, 'bc3c97zP8pM2I5NAob2S72W', "EffectView", undefined);
      var _0xa6c6b8 = function (_0x100ce8) {
        function _0x1d8907() {
          var _0x237aa3;
          (_0x237aa3 = _0x100ce8.call(this) || this).m_awardBoardFile = _0x1d8907.EFFECT_ROOT + "win/awardBoard";
          _0x237aa3.m_effectList = {};
          _0x237aa3.m_timeLineList = {};
          _0x237aa3.m_winEffCbFunc = null;
          _0x237aa3.m_currentWinEffect = null;
          _0x237aa3.m_currentWinEffectTimeline = null;
          _0x237aa3.m_awardBoard = null;
          _0x237aa3.m_awardBoardTimeline = null;
          _0x237aa3.m_txtWinValue = null;
          _0x237aa3.m_durRollMoneyTick = _0x1d8907.MONEY_ROLL_TIME;
          _0x237aa3.m_moneyRealValue = 0x0;
          _0x237aa3.m_moneyRollValue = 0x0;
          _0x237aa3.m_bgMaskNode = null;
          _0x237aa3.m_commonGetCoinCbFunc = null;
          _0x237aa3.m_commonGetCoinMidCbFunc = null;
          _0x237aa3.m_commonGetCoinEff = null;
          _0x237aa3.m_commonGetCoinTline = null;
          _0x237aa3.m_updateMoneyEff = null;
          _0x237aa3.m_updateMoneyTline = null;
          _0x237aa3.m_getCoinParticle = null;
          _0x237aa3.m_odds = [0x3, 0x5, 0xa, 0x14, 0x1e];
          _0x237aa3.m_winEffectFiles = [null, null, _0x1d8907.EFFECT_ROOT + _0x1d8907.FILE_PATH.BIG_WIN, _0x1d8907.EFFECT_ROOT + _0x1d8907.FILE_PATH.MEGA_WIN, _0x1d8907.EFFECT_ROOT + _0x1d8907.FILE_PATH.SUPER_WIN];
          _0x237aa3.m_coinEffects = [0x2, 0x3, 0x5, 0x5, 0x5];
          _0x237aa3.m_coinTimes = [0x2, 0x2, 0x5, 0x5, 0x5];
          _0x237aa3.m_soundNameByOdds = [];
          _0x237aa3.m_isAutoCheckFloat = false;
          _0x237aa3.m_rotateCoins = {};
          _0x237aa3.m_coinEffectNode = undefined;
          _0x237aa3.m_loadedSound = undefined;
          _0x237aa3.m_isLandscape = false;
          _0x237aa3.m_LandscapeRate = 0x1;
          _0x237aa3.m_winType = undefined;
          _0x237aa3.m_nowPlaySoundID = null;
          _0x237aa3.m_loadedSound = false;
          return _0x237aa3;
        }
        _0xed7a37(_0x1d8907, _0x100ce8);
        var _0x495503 = _0x1d8907.prototype;
        _0x495503.LoadSound = function () {
          this.m_loadedSound = true;
        };
        _0x495503.OnUpdate = function (_0x315d2f) {
          this.RollWinMoney(_0x315d2f);
        };
        _0x495503.ShowWinAndCoinEffect = function (_0x52108e, _0x23fa02, _0x4598da) {
          if (undefined === _0x4598da) {
            _0x4598da = null;
          }
          _0x4598da = _0x4598da || null;
          var _0x3612cd = _0x5ca67d.GetManagerId(_0x4598da);
          this.ShowWinEffect(_0x52108e, _0x3612cd);
          if (!(undefined !== _0x52108e.playCoinAtWinEffect && true !== _0x52108e.playCoinAtWinEffect)) {
            this.playCoinEffect(_0x23fa02, _0x3612cd);
          }
          _0x5ca67d.StartLoad(_0x3612cd);
        };
        _0x495503.ShowWinEffect = function (_0x427499, _0x46e305) {
          var _0x227cb7 = this;
          if (undefined === _0x46e305) {
            _0x46e305 = -0x1;
          }
          var _0x5e41ed = _0x427499.effectFile;
          var _0x585f5a = _0x427499.winValue;
          var _0x129434 = _0x427499.cbFunc;
          var _0x3e940b = _0x427499.yPos;
          var _0x5e880a = _0x427499.deltaY;
          var _0x471fae = _0x427499.cbFuncBtoM;
          var _0x4e8338 = _0x427499.cbFuncMtoS;
          var _0x78fa0a = _0x427499.cbFuncPlaying;
          var _0x493d4c = _0x427499.isLoop || false;
          var _0x56ed5d = _0x427499.rollTime;
          if (null != _0x585f5a) {
            var _0xc7813 = function () {
              if (_0x227cb7.m_bgMaskNode) {
                _0x227cb7.m_bgMaskNode.active = true;
              }
              _0x392c7c("LoadPrefabManager CB", _0x585f5a);
              _0x3e940b = null != _0x3e940b && _0x3e940b || _0x1d8907.DEFAULT_Y;
              _0x227cb7.m_effectList[_0x5e41ed].setPosition(_0x1536ed(_0x1d8907.DesignSize.width / 0x2, _0x3e940b));
              _0x227cb7.m_effectList[_0x5e41ed].active = true;
              _0x227cb7.m_timeLineList[_0x5e41ed].play(_0x1d8907.ANI_LABEL.ACT);
              _0x227cb7.m_currentWinEffect = _0x227cb7.m_effectList[_0x5e41ed];
              _0x227cb7.m_currentWinEffectTimeline = _0x227cb7.m_timeLineList[_0x5e41ed];
              _0x227cb7.m_currentWinEffectTimeline.name = _0x5e41ed;
              _0x5e880a = _0x5e41ed == _0x1d8907.FILE_PATH.JACKPOT ? 0xb4 : null != _0x5e880a ? _0x5e880a : 0xe6;
              _0x227cb7.m_awardBoard.setPosition(_0x1536ed(_0x1d8907.DesignSize.width / 0x2, _0x3e940b - _0x5e880a));
              _0x227cb7.m_awardBoard.active = true;
              _0x227cb7.m_awardBoardTimeline.play(_0x1d8907.ANI_LABEL.ACT);
              _0x227cb7.SetWinValue(_0x585f5a, _0x56ed5d);
              if (!(null == _0x78fa0a)) {
                _0x78fa0a();
              }
            };
            var _0x4a3c17 = _0x46e305;
            if (-0x1 == _0x46e305) {
              _0x4a3c17 = _0x5ca67d.GetManagerId(_0xc7813);
            }
            this.m_winEffCbFunc = _0x129434;
            if (null == this.m_effectList[_0x5e41ed]) {
              _0x5ca67d.AddLoad(_0x4a3c17);
              _0xd8402d.GameBundle.load(_0x5e41ed, function (_0x49d850, _0x2ad4c4) {
                if (_0x49d850) {
                  _0x51f52f(_0x49d850.message || _0x49d850);
                } else {
                  var _0x546bb7 = _0x2b0134(_0x2ad4c4);
                  _0x546bb7.active = false;
                  _0x227cb7.addChild(_0x546bb7);
                  _0x14c118.SetZIndex(_0x546bb7, _0x1d8907.EFF_ZORDER.WIN_EFFECT);
                  var _0xa2c929 = _0x546bb7.getComponent(_0x4bf747);
                  _0xf16b4d.Pack(_0x546bb7, function (_0x1f1ff4) {
                    if (_0x1f1ff4 == _0x1d8907.ANI_FRAME_EVENT.ENDING) {
                      if (_0x227cb7.m_awardBoard && _0x227cb7.m_awardBoard.active) {
                        _0x227cb7.m_awardBoardTimeline.play(_0x1d8907.ANI_LABEL.ENDING);
                      }
                    } else {
                      if (_0x1f1ff4 == _0x1d8907.ANI_FRAME_EVENT.LOOP) {
                        if (_0x493d4c) {
                          _0xa2c929.play(_0x1d8907.ANI_LABEL.LOOP);
                          _0xa2c929.getState(_0x1d8907.ANI_LABEL.LOOP).wrapMode = _0x1c2e69.WrapMode.Loop;
                        }
                      } else if (_0x1f1ff4 == _0x1d8907.ANI_FRAME_EVENT.B_TO_M) {
                        if (_0x227cb7.m_awardBoard && _0x227cb7.m_awardBoard.active) {
                          _0x174aa1(_0x227cb7.m_txtWinValue).by(0.25, {
                            'scale': _0x1536ed(1.5, 1.5, 1.5)
                          }).by(0.1, {
                            'scale': _0x1536ed(0.9, 0.9, 0.9)
                          }).start();
                        }
                        if (_0x471fae) {
                          _0x471fae();
                        }
                      } else if (_0x1f1ff4 == _0x1d8907.ANI_FRAME_EVENT.M_TO_S) {
                        if (_0x227cb7.m_awardBoard && _0x227cb7.m_awardBoard.active) {
                          _0x174aa1(_0x227cb7.m_txtWinValue).by(0.25, {
                            'scale': _0x1536ed(1.5, 1.5, 1.5)
                          }).by(0.1, {
                            'scale': _0x1536ed(0.9, 0.9, 0.9)
                          }).start();
                        }
                        if (!(null == _0x4e8338)) {
                          _0x4e8338();
                        }
                      } else if (_0x1f1ff4 == _0x1d8907.ANI_FRAME_EVENT.END) {
                        _0x392c7c("ANI_FRAME_EVENT.END");
                        _0x227cb7.OnAnimationEnd();
                        if (_0x227cb7.m_winEffCbFunc) {
                          _0x227cb7.m_winEffCbFunc();
                        }
                      }
                    }
                  });
                  _0x546bb7.active = false;
                  _0x227cb7.m_effectList[_0x5e41ed] = _0x546bb7;
                  _0x227cb7.m_timeLineList[_0x5e41ed] = _0xa2c929;
                  _0x5ca67d.OnLoaded(_0x4a3c17);
                }
              });
              if (null == this.m_awardBoard) {
                _0x5ca67d.AddLoad(_0x4a3c17);
                _0xd8402d.GameBundle.load(this.m_awardBoardFile, function (_0x53bb32, _0x31b847) {
                  if (_0x53bb32) {
                    _0x51f52f(_0x53bb32.message || _0x53bb32);
                  } else {
                    _0x227cb7.m_awardBoard = _0x2b0134(_0x31b847);
                    _0x227cb7.addChild(_0x227cb7.m_awardBoard);
                    _0x14c118.SetZIndex(_0x227cb7.m_awardBoard, _0x1d8907.EFF_ZORDER.AWARD_BOARD);
                    _0x227cb7.m_awardBoard.active = false;
                    _0x227cb7.m_awardBoardTimeline = _0x227cb7.m_awardBoard.getComponent(_0x4bf747);
                    _0x227cb7.m_txtWinValue = _0x227cb7.m_awardBoard.getChildByName("win_value_label");
                    _0x5ca67d.OnLoaded(_0x4a3c17);
                  }
                });
              }
              if (-0x1 == _0x46e305) {
                _0x5ca67d.StartLoad(_0x4a3c17);
              } else {
                _0x5ca67d.AddOnLoadedCallback(_0x4a3c17, _0xc7813);
              }
            } else if (-0x1 == _0x46e305) {
              _0xc7813();
            } else {
              _0x5ca67d.AddOnLoadedCallback(_0x4a3c17, _0xc7813);
            }
          } else if (this.m_awardBoard) {
            this.m_awardBoard.active = false;
            this.m_awardBoardTimeline.stop();
          }
        };
        _0x495503.WinEffect = function () {
          if (this.m_currentWinEffectTimeline) {
            this.m_currentWinEffectTimeline.play(_0x1d8907.ANI_LABEL.ENDING, false);
          }
        };
        _0x495503.SetWinValue = function (_0x133191, _0x55929c, _0x4ddfd4) {
          if (undefined === _0x55929c) {
            _0x55929c = null;
          }
          if (undefined === _0x4ddfd4) {
            _0x4ddfd4 = 0x0;
          }
          this.m_moneyRealValue = _0x14c118.strip(_0x133191);
          this.m_moneyRollValue = _0x4ddfd4;
          _0x55929c = null == _0x55929c && _0x1d8907.MONEY_ROLL_TIME || _0x55929c;
          this.m_durRollMoneyTick = _0x14c118.strip(_0x55929c);
        };
        _0x495503.RollWinMoney = function (_0x16bbe6) {
          this.m_moneyRealValue = _0x14c118.strip(this.m_moneyRealValue);
          this.m_moneyRollValue = _0x14c118.strip(this.m_moneyRollValue);
          if (this.m_moneyRollValue < this.m_moneyRealValue) {
            var _0xf3cd12 = _0x14c118.divide(this.m_durRollMoneyTick, _0x14c118.strip(_0x16bbe6));
            var _0x2a45eb = _0x14c118.divide(_0x14c118.strip(this.m_moneyRealValue - this.m_moneyRollValue), _0xf3cd12);
            var _0x2c9c8e = _0x14c118.FORMAT_NUMBER_TYPE.DEFINE_DOT;
            if (this.m_isAutoCheckFloat) {
              _0x2c9c8e = this.m_moneyRealValue.toString().indexOf('.') > -0x1 ? _0x14c118.FORMAT_NUMBER_TYPE.PERMANENT_DOT : _0x14c118.FORMAT_NUMBER_TYPE.NONE_DOT;
            }
            this.m_moneyRollValue = _0x14c118.strip(this.m_moneyRollValue + _0x2a45eb);
            if (this.m_moneyRollValue > this.m_moneyRealValue) {
              this.m_moneyRollValue = this.m_moneyRealValue;
            }
            this.SetLabelString(this.m_txtWinValue, this.m_moneyRollValue, _0x2c9c8e);
            this.m_durRollMoneyTick = _0x14c118.strip(this.m_durRollMoneyTick - _0x16bbe6);
          }
        };
        _0x495503.SetLabelString = function (_0x11478a, _0x6b01fd, _0x458371) {
          if (undefined === _0x458371) {
            _0x458371 = null;
          }
          var _0x5cb331 = _0x11478a.getComponent(_0x2855cd);
          if (null != _0x5cb331 && null != _0x5cb331) {
            if (null == _0x458371 || null == _0x458371) {
              _0x5cb331.string = _0x6b01fd.toString();
            } else {
              var _0x6e64c6;
              if ("number" == typeof _0x6b01fd) {
                _0x6e64c6 = _0x6b01fd;
              } else {
                var _0x42b184 = _0x6b01fd.replace(/,/g, '');
                _0x6e64c6 = isNaN(Number(_0x42b184)) ? 0x0 : Number(_0x42b184);
              }
              _0x5cb331.string = _0x14c118.FormatNumberThousands(_0x6e64c6, _0x458371);
            }
            _0x14c118.SetFont(_0x5cb331);
          } else {
            _0x392c7c("Warning!!!!!!!!!! SetLabelString: ", _0x11478a);
          }
        };
        _0x495503.SetWinMoneyToMax = function () {};
        _0x495503.IsRollMoneyEnd = function () {
          return this.m_moneyRollValue == this.m_moneyRealValue;
        };
        _0x495503.StopAnimation = function (_0x3d467a) {
          if (this.m_currentWinEffectTimeline) {
            this.m_currentWinEffectTimeline.stop();
          }
          if (this.m_awardBoard) {
            this.m_awardBoard.active = false;
            this.m_awardBoardTimeline.stop();
          }
          if (0x1 != _0x3d467a && this.m_winEffCbFunc) {
            this.m_winEffCbFunc();
          }
          this.m_winEffCbFunc = null;
          this.OnAnimationEnd();
        };
        _0x495503.OnAnimationEnd = function () {
          if (this.m_currentWinEffect) {
            this.m_currentWinEffect.active = false;
          }
          if (this.m_bgMaskNode) {
            this.m_bgMaskNode.active = false;
          }
          this.m_moneyRealValue = 0x0;
          this.m_moneyRollValue = 0x0;
        };
        _0x495503.playCoinEffect = function (_0x5478e2, _0xa4c96f) {
          var _0x655ad6 = this;
          if (undefined === _0xa4c96f) {
            _0xa4c96f = -0x1;
          }
          if (_0xd8402d.CommonBundle) {
            var _0x15f263 = _0x5478e2.level;
            var _0x2b8c44 = _0x5478e2.position;
            var _0x207175 = _0x5478e2.time;
            if (null == _0x207175) {
              _0x207175 = 0x0;
            }
            var _0x34d93e = _0x5478e2.zOrder;
            if (null == _0x34d93e) {
              _0x34d93e = 0x0;
            }
            var _0x39f909 = _0x5478e2.parent;
            this.stopCoinEffectImmly();
            var _0x4dd5dc = _0x1d8907.COIN_EFFECT_LIST[_0x15f263];
            if (_0x4dd5dc = _0x14c118.GetFilePath(_0x4dd5dc)) {
              _0x392c7c("~~~~~~~~~~~~~~~~~~~~~~", _0x5478e2, _0x207175, _0x34d93e);
              var _0x4d3127 = function () {
                _0x655ad6.m_coinEffectNode.setPosition(_0x1536ed(_0x2b8c44.x, _0x2b8c44.y));
                if (null == _0x39f909 || null == _0x39f909) {
                  _0x655ad6.addChild(_0x655ad6.m_coinEffectNode);
                  _0x14c118.SetZIndex(_0x655ad6.m_coinEffectNode, 0x0);
                } else {
                  _0x39f909.addChild(_0x655ad6.m_coinEffectNode);
                  _0x14c118.SetZIndex(_0x655ad6.m_coinEffectNode, _0x34d93e);
                }
                if (0x0 != _0x207175) {
                  _0x174aa1(_0x655ad6).delay(_0x207175).call(function () {
                    _0x655ad6.stopCoinEffect();
                  }).start();
                }
              };
              if (-0x1 != _0xa4c96f) {
                _0x5ca67d.AddOnLoadedCallback(_0xa4c96f, _0x4d3127);
                _0x5ca67d.AddLoad(_0xa4c96f);
              }
              _0xd8402d.CommonBundle.load(_0x4dd5dc, function (_0x55c040, _0x21ebe5) {
                _0x392c7c("LoadRes ", _0x4dd5dc);
                if (_0x55c040) {
                  _0x51f52f(_0x55c040.message || _0x55c040);
                } else {
                  _0x655ad6.m_coinEffectNode = _0x2b0134(_0x21ebe5);
                  if (_0x655ad6.m_coinEffectNode) {
                    if (-0x1 == _0xa4c96f) {
                      _0x4d3127();
                    } else {
                      _0x5ca67d.OnLoaded(_0xa4c96f);
                    }
                  } else {
                    _0x392c7c("SlotBottomBarView.playCoinEffect m_coinEffect is null");
                  }
                }
              });
            }
          }
        };
        _0x495503.stopCoinEffectImmly = function () {
          if (null != this.m_coinEffectNode && this.m_coinEffectNode.removeFromParent) {
            this.m_coinEffectNode.removeFromParent();
            this.m_coinEffectNode = null;
          }
        };
        _0x495503.stopCoinEffect = function () {
          if (null != this.m_coinEffectNode && this.m_coinEffectNode) {
            var _0xabd765 = this.m_coinEffectNode.getChildByName("Particle_1").getComponent(_0x18680f);
            var _0x5538b5 = this.m_coinEffectNode.getChildByName('Particle_2').getComponent(_0x18680f);
            if (_0xabd765) {
              _0xabd765.stopSystem();
            }
            if (_0x5538b5) {
              _0x5538b5.stopSystem();
            }
          }
        };
        _0x495503.ShowCommonEffect = function (_0xe5b950, _0x5f006a, _0x98b25, _0x33f723) {
          if (undefined === _0x98b25) {
            _0x98b25 = null;
          }
          if (undefined === _0x33f723) {
            _0x33f723 = null;
          }
          _0x98b25 = _0x98b25 || {};
          _0x33f723 = _0x33f723 || {};
          var _0x434e61 = new _0x4ee23e(_0x1d8907.DesignSize.width / 0x2, _0x1d8907.DesignSize.height);
          var _0x373387 = new _0x4ee23e(_0x1d8907.DesignSize.width / 0x2 - 0xa, 0x91);
          var _0x5d77bf = undefined;
          var _0x14eb82 = _0xe5b950 / _0x5f006a;
          if (_0x1e89f8) {
            _0xe5b950 = _0x1e89f8.GetDisplayValue(_0xe5b950);
          }
          for (var _0x9d970d = this.m_odds.length - 0x1; _0x9d970d >= 0x0; _0x9d970d--) {
            if (_0x14eb82 >= this.m_odds[_0x9d970d]) {
              _0x33f723.level = this.m_coinEffects[_0x9d970d];
              if (0x5 == this.m_coinEffects[_0x9d970d]) {
                _0x33f723.position = _0x33f723.position ? _0x33f723.position : _0x434e61;
              } else {
                _0x33f723.position = _0x33f723.smallPosition ? _0x33f723.smallPosition : _0x33f723.position ? _0x33f723.position : _0x373387;
              }
              if (null == _0x33f723.time || _0x33f723.time <= 0x0) {
                _0x33f723.time = this.m_coinTimes[_0x9d970d];
              }
              if (0x5 == this.m_coinEffects[_0x9d970d]) {
                _0x98b25.effectFile = this.m_winEffectFiles[_0x9d970d];
                _0x98b25.winValue = _0xe5b950;
                this.SetWinType(_0x9d970d);
                this.ShowWinAndCoinEffect(_0x98b25, _0x33f723);
              } else {
                this.playCoinEffect(_0x33f723);
              }
              _0x5d77bf = this.m_soundNameByOdds[_0x9d970d];
              break;
            }
          }
          if (null != _0x5d77bf) {
            this.m_nowPlaySoundID = _0x2b2431.Play(_0x5d77bf, false);
          }
          if (null == _0x33f723.time) {
            _0x33f723.time = 0x0;
          }
          return _0x33f723.time;
        };
        _0x495503.SkipEffect = function () {
          this.stopCoinEffect();
          _0x496361.instance.ActionManager.removeAllActionsFromTarget(this);
          if (this.m_currentWinEffectTimeline) {
            var _0x16f762 = this.m_currentWinEffectTimeline.name;
            var _0x275d1d = _0x14c118.FORMAT_NUMBER_TYPE.DEFINE_DOT;
            if (!(_0x16f762 != _0x1d8907.FILE_PATH.BIG_WIN && _0x16f762 != _0x1d8907.FILE_PATH.MEGA_WIN && _0x16f762 != _0x1d8907.FILE_PATH.SUPER_WIN)) {
              this.m_moneyRollValue = _0x14c118.strip(this.m_moneyRollValue);
              this.m_moneyRealValue = _0x14c118.strip(this.m_moneyRealValue);
              if (this.m_moneyRollValue == this.m_moneyRealValue) {
                this.m_awardBoardTimeline.play(_0x1d8907.ANI_LABEL.ENDING);
                this.m_currentWinEffectTimeline.setCurrentTime(0x5);
              } else {
                if (this.m_isAutoCheckFloat) {
                  _0x275d1d = this.m_moneyRealValue.toString().indexOf('.') > -0x1 ? _0x14c118.FORMAT_NUMBER_TYPE.PERMANENT_DOT : _0x14c118.FORMAT_NUMBER_TYPE.NONE_DOT;
                }
                this.SetLabelString(this.m_txtWinValue, this.m_moneyRealValue, _0x275d1d);
                this.m_currentWinEffectTimeline.setCurrentTime(3.8);
              }
              this.m_currentWinEffectTimeline = null;
            }
            this.m_moneyRollValue = this.m_moneyRealValue;
          }
        };
        _0x495503.SkipEffectSound = function () {
          if (this.m_nowPlaySoundID) {
            _0x2b2431.Stop(this.m_nowPlaySoundID);
            this.m_nowPlaySoundID = null;
          }
        };
        _0x495503.SetAutoCheckFloat = function (_0x424c2c) {
          this.m_isAutoCheckFloat = _0x424c2c;
        };
        _0x495503.SetOdds = function (_0x5dd081) {
          this.m_odds = _0x5dd081;
        };
        _0x495503.SetWinEffectFiles = function (_0xd1a952) {
          this.m_winEffectFiles = _0xd1a952;
        };
        _0x495503.SetAwardBoardFile = function (_0x397b8e) {
          this.m_awardBoardFile = _0x397b8e;
        };
        _0x495503.SetEffectLevels = function (_0x5ad764) {
          this.m_coinEffects = _0x5ad764;
        };
        _0x495503.SetEffectTimes = function (_0x49faa2) {
          this.m_coinTimes = _0x49faa2;
        };
        _0x495503.SetSoundNameByOdds = function (_0x399053) {
          this.m_soundNameByOdds = _0x399053;
        };
        _0x495503.SetBGMaskNode = function (_0x187ac7) {
          if (null != _0x187ac7) {
            this.m_bgMaskNode = _0x187ac7;
          }
        };
        _0x495503.SetWinTextFontSize = function (_0x2eb900) {
          if (this.m_txtWinValue) {
            this.m_txtWinValue.getComponent(_0x2855cd).fontSize = _0x2eb900;
          }
        };
        _0x495503.SetWinType = function (_0x37aa51) {
          this.m_winType = _0x37aa51;
        };
        _0x4b136a(_0x1d8907, [{
          'key': 'CoinEffectNode',
          'set': function (_0x37ae49) {
            this.m_coinEffectNode = _0x37ae49;
          }
        }]);
        return _0x1d8907;
      }(_0x84773f);
      _0xa6c6b8.DesignSize = {
        'width': 0x470,
        'height': 0x280
      };
      _0xa6c6b8.SOUND_FILE = {
        'COMMON_SUPER_WIN': null,
        'COMMON_MEGA_WIN': null,
        'COMMON_COIN_SMALL': null,
        'COMMON_COIN_MEDIUM': null,
        'COMMON_BIG_WIN': null
      };
      _0xa6c6b8.EFFECT_ROOT = 'Astt/%s/effect/GameCommonEffect/';
      _0xa6c6b8.FILE_PATH = {
        'BIG_WIN': "win/big_anim",
        'MEGA_WIN': "win/mega_anim",
        'SUPER_WIN': "win/super_anim",
        'JACKPOT': "win/effect_Jackpot",
        'BIG_TO_MEGA_WIN': "win/bigToMega_anim",
        'BIG_TO_SUPER_WIN': "win/bigToSuper_anim",
        'FIVE_OF_A_KIND': "win/5ofa_anim"
      };
      _0xd9506c = {
        [_0xa6c6b8.FILE_PATH.BIG_WIN]: 'Common_big_win',
        [_0xa6c6b8.FILE_PATH.MEGA_WIN]: 'Common_mega_win',
        [_0xa6c6b8.FILE_PATH.SUPER_WIN]: "Common_super_win",
        [_0xa6c6b8.FILE_PATH.JACKPOT]: "Common_JP_win",
        [_0xa6c6b8.FILE_PATH.BIG_TO_MEGA_WIN]: "Common_big_win",
        [_0xa6c6b8.FILE_PATH.BIG_TO_SUPER_WIN]: "Common_big_win",
        [_0xa6c6b8.FILE_PATH.FIVE_OF_A_KIND]: 'Common_big_win'
      };
      _0xa6c6b8.WIN_EFFECT_SOUND_NAME = _0xd9506c;
      _0xa6c6b8.EffectViewUIName = _0x5c9b0d({
        'TXT_WIN_MONEY': "label_final_value",
        'PARTICLE': "Particle_"
      });
      _0xa6c6b8.DEFAULT_Y = 0x190;
      _0xa6c6b8.PARTICLE_AMOUNT_MAX = 0x2;
      _0xa6c6b8.MONEY_ROLL_TIME = 0x3;
      _0xa6c6b8.UPDATE_MONEY_CSB = _0xa6c6b8.EFFECT_ROOT + 'common_get_coin/Node_GetCoin01.csb';
      _0xa6c6b8.COMMON_GET_COIN_CSB = _0xa6c6b8.EFFECT_ROOT + "common_get_coin/Node_GetCoin02.csb";
      _0xa6c6b8.GET_COIN_PARTICLE_CSB = _0xa6c6b8.EFFECT_ROOT + "common_get_coin/Particle/_V3_GetCoin02.plist";
      _0xa6c6b8.ROTATE_COIN_CSB = _0xa6c6b8.EFFECT_ROOT + "common_get_coin/Node_CoinRotation01.csb";
      _0xa6c6b8.TRIAL_COIN_CSB = _0xa6c6b8.EFFECT_ROOT + "common_get_coin/Node_GetTrialCoin.csb";
      _0xa6c6b8.COIN_APPEAR_PARTICLE_CSB = _0xa6c6b8.EFFECT_ROOT + 'common_get_coin/Particle/New_CoinShine03.plist';
      _0xa6c6b8.COMMON_COIN_AMOUNT = 0x8;
      _0xa6c6b8.ANI_LABEL = {
        'ACT': 'main',
        'LOOP': "loop",
        'ENDING': "ending"
      };
      _0xa6c6b8.ANI_FRAME_EVENT = {
        'MID': 'AniMid',
        'B_TO_M': "AniBtoM",
        'M_TO_S': 'AniMtoS',
        'ENDING': "AniEnding",
        'END': "AniEnd",
        'LOOP': "AniLoop"
      };
      _0xa6c6b8.EFF_ZORDER = {
        'COIN_FALL': 0x1,
        'WIN_EFFECT': 0x2,
        'AWARD_BOARD': 0x3,
        'COMMON_GET_COIN': 0x4,
        'GET_TRIAL_COIN': 0x5
      };
      _0xa6c6b8.COIN_EFFECT_LIST = {
        0x1: _0xa6c6b8.EFFECT_ROOT + 'coin/1_SmallGoldCoinFX_1',
        0x2: _0xa6c6b8.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_2",
        0x3: _0xa6c6b8.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_3",
        0x4: _0xa6c6b8.EFFECT_ROOT + 'coin/2_BigGoldCoinFX_1',
        0x5: _0xa6c6b8.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_1",
        0x6: _0xa6c6b8.EFFECT_ROOT + 'coin/3_MegaGoldCoinFX_2',
        0x7: _0xa6c6b8.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_3"
      };
      _0xa6c6b8.WIN_TYPE = {
        'BIG': 0x2,
        'MEGA': 0x3,
        'SUPER': 0x4
      };
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, 'a4b83idlNlHcZQFqX6vJhFz', "ExtraBetComponent", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, '5cf68x6BTZHP5QWXU3HRb/c', 'FeaturePageComponent', undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, 'e33faPhWqxMHa92Db40WLqj', "LabelSpacingX", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "a6f15DRaTNJEaqvyk6QuIo3", 'LangImg', undefined);
      var _0x4a878b;
      !function (_0x3aef24) {
        _0x3aef24[_0x3aef24.PNG = 0x0] = "PNG";
        _0x3aef24[_0x3aef24.JPG = 0x1] = "JPG";
      }(_0x4a878b || (_0x4a878b = {}));
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "3638c7rYSpEjZ7x8wtqusdg", "RenderDataBump", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "75a969XvAFPfax+l1fDcqo9", "ScrollEventHandler", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "eb577rwRR5ASa6OivNuPgEY", "SeriesComponent", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "18f47v83XtI64h+ISwRgq3A", "BoneFollow", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "44834DdFVNM2reoglp7HL82", "NewBoneFollow", undefined);
      var _0x260de2;
      !function (_0x2e7d1c) {
        _0x2e7d1c[_0x2e7d1c['default'] = 0x1] = 'default';
      }(_0x260de2 || (_0x260de2 = {}));
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, '2da2cEqApNLm7hZxNo+Lfkx', 'NewSlotColorFollow', undefined);
      var _0x44c1c7;
      !function (_0x3497af) {
        _0x3497af[_0x3497af["default"] = 0x1] = "default";
      }(_0x44c1c7 || (_0x44c1c7 = {}));
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "866f1RjwMhFfapt6JLtipxM", "SkeletonSync", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "e2171n/i+xGsoWeQMXewobE", "SlotActivator", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "e23desmKVBLjKgDg5KLcySp", 'SlotColorFollow', undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "ff032nME8lBJKBpMlK8O/1z", "SlotCulling", undefined);
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, 'f8b5e4BLTJNX7FPcFOEaBkq', "ZipBundleLoader", undefined);
      var _0x2ea2d3 = new Map();
      var _0x337012 = new Map();
      var _0x34d95a = new Map();
      var _0x13a0e6 = function () {
        function _0xa92132() {
          this.loadedZipNames = new Array();
        }
        var _0x360e2e = _0xa92132.prototype;
        _0x360e2e.downloadZip = function (_0x286b66, _0x21d7fd) {
          return new Promise(function (_0x9939d7) {
            var _0x4f11a5 = _0x286b66.match(/[^/]+$/);
            if (null !== _0x4f11a5) {
              var _0x3aa59f = '' + _0x4f11a5[0x0] + _0x21d7fd + ".zip";
              _0x39c69b.downloader.downloadFile(_0x286b66 + '/' + _0x3aa59f, {
                'xhrResponseType': 'arraybuffer'
              }, null, function (_0x503a7b, _0x9e00b2) {
                _0x9939d7(_0x9e00b2);
              });
            } else {
              _0x9939d7(null);
            }
          });
        };
        _0x360e2e.loadZip = function () {
          var _0x27e86f = _0x26fe6f(_0x352743().mark(function _0xba0889(_0x2c8515, _0xfb0bbd) {
            var _0x534f08;
            var _0x5ee5ac;
            var _0x13d951;
            return _0x352743().wrap(function (_0x378d72) {
              for (;;) {
                switch (_0x378d72.prev = _0x378d72.next) {
                  case 0x0:
                    _0x534f08 = _0xfb0bbd ? '.' + _0xfb0bbd : '';
                    _0x378d72.next = 0x3;
                    return this.downloadZip(_0x2c8515, _0x534f08);
                  case 0x3:
                    if (null !== (_0x5ee5ac = _0x378d72.sent)) {
                      _0x13d951 = _0x2c8515.replace(/(.*?)\/assets\//, "assets/");
                      globalThis.fflate.unzip(new Uint8Array(_0x5ee5ac), function (_0x5ccdd3, _0x39c4e2) {
                        if (_0x5ccdd3) {
                          console.warn("Unzip failed:", _0x5ccdd3.message);
                        } else {
                          Object.keys(_0x39c4e2).forEach(function (_0x714d10) {
                            _0x2ea2d3.set(_0x2c8515 + '/' + _0x714d10, _0x39c4e2[_0x714d10]);
                            _0x2ea2d3.set(_0x13d951 + '/' + _0x714d10, _0x39c4e2[_0x714d10]);
                          });
                        }
                      });
                    }
                  case 0x5:
                  case 'end':
                    return _0x378d72.stop();
                }
              }
            }, _0xba0889, this);
          }));
          return function (_0x2928b2, _0x270128) {
            return _0x27e86f.apply(this, arguments);
          };
        }();
        _0x360e2e.init = function () {
          if (globalThis.fflate) {
            var _0x56633d = Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, "response");
            Object.defineProperty(XMLHttpRequest.prototype, 'response', {
              'get': function () {
                return this.ZipCacheUrl ? _0x337012.get(this.ZipCacheUrl) : _0x56633d.get.call(this);
              },
              'set': function (_0xb4bb5f) {},
              'configurable': true
            });
            var _0x2cb6c4 = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function (_0x10f117, _0x50852f, _0x12d6c3, _0x571d64, _0x3cb774) {
              function _0x3254eb() {
                var _0x39c22d = this.status >= 0xc8 && this.status < 0x12c || 0x130 == this.status;
                if (this.readyState == XMLHttpRequest.DONE && !_0x39c22d && 0x194 != this.status && _0x50852f.includes('http')) {
                  _0x45dd8b(0x2bd, this.status);
                  _0x45dd8b(0x2be, _0x50852f);
                }
                this.removeEventListener('load', _0x3254eb);
              }
              if (_0x2ea2d3.has(_0x50852f)) {
                this.ZipCacheUrl = _0x50852f;
              }
              this.addEventListener("load", _0x3254eb.bind(this));
              return _0x2cb6c4.apply(this, arguments);
            };
            var _0x19d176 = XMLHttpRequest.prototype.send;
            XMLHttpRequest.prototype.send = _0x26fe6f(_0x352743().mark(function _0xdd9e73(_0x760bf2) {
              var _0x23f027;
              var _0x5ed343;
              var _0x322f97;
              var _0x236e10;
              var _0x459fd2;
              var _0x29bed5;
              var _0x34a810;
              var _0x56246c;
              return _0x352743().wrap(function (_0x340e63) {
                for (;;) {
                  switch (_0x340e63.prev = _0x340e63.next) {
                    case 0x0:
                      if (!this.ZipCacheUrl) {
                        _0x340e63.next = 0x1a;
                        break;
                      }
                      if (_0x337012.has(this.ZipCacheUrl)) {
                        _0x340e63.next = 0x18;
                        break;
                      }
                      _0x23f027 = this.responseType;
                      _0x5ed343 = _0x2ea2d3.get(this.ZipCacheUrl);
                      _0x322f97 = null;
                      _0x340e63.t0 = _0x23f027;
                      _0x340e63.next = "arraybuffer" === _0x340e63.t0 ? 0x8 : 'json' === _0x340e63.t0 ? 0xa : "text" === _0x340e63.t0 ? 0xe : 0x11;
                      break;
                    case 0x8:
                      _0x322f97 = _0x5ed343.buffer ? _0x5ed343.buffer : _0x5ed343;
                      return _0x340e63.abrupt("break", 0x12);
                    case 0xa:
                      _0x236e10 = new TextDecoder();
                      _0x459fd2 = _0x236e10.decode(_0x5ed343);
                      _0x322f97 = JSON.parse(_0x459fd2);
                      return _0x340e63.abrupt("break", 0x12);
                    case 0xe:
                      _0x29bed5 = new TextDecoder();
                      _0x322f97 = _0x29bed5.decode(_0x5ed343);
                      return _0x340e63.abrupt("break", 0x12);
                    case 0x11:
                      console.error("Unknown type in zipCache:", _0x23f027);
                    case 0x12:
                      if (_0x34a810 = _0x34d95a.get(this.ZipCacheUrl)) {
                        _0x337012["delete"](this.ZipCacheUrl + "@version" + _0x34a810);
                        _0x34d95a["delete"](this.ZipCacheUrl);
                      }
                      _0x56246c = performance.now();
                      _0x34d95a.set(this.ZipCacheUrl, _0x56246c);
                      this.ZipCacheUrl = this.ZipCacheUrl + "@version" + _0x56246c;
                      _0x337012.set(this.ZipCacheUrl, _0x322f97);
                    case 0x18:
                      this.onload();
                      return _0x340e63.abrupt('return');
                    case 0x1a:
                      return _0x340e63.abrupt("return", _0x19d176.apply(this, arguments));
                    case 0x1b:
                    case "end":
                      return _0x340e63.stop();
                  }
                }
              }, _0xdd9e73, this);
            }));
          } else {
            console.error("fflate is not found.");
          }
        };
        return _0xa92132;
      }();
      function _0x45dd8b(_0x2e19a5, _0x1f6f55) {
        if (!_0x4339c0.isNative) {
          var _0x582e67 = "https://" + window.location.host + '/';
          if (-0x1 == _0x582e67.indexOf("localhost") && 0x1 != /^http(s)?:\/\/([0-9]{1,3}\.){3}[0-9]{1,3}(:[0-9]+)?\/.*?$/.test(_0x582e67)) {
            var _0x3537e7 = 0x0;
            switch (_0x4339c0.browserType) {
              case _0x4339c0.BrowserType.CHROME:
                _0x3537e7 = 0x1;
                break;
              case _0x4339c0.BrowserType.SAFARI:
                _0x3537e7 = 0x2;
                break;
              case _0x4339c0.BrowserType.IE:
                _0x3537e7 = 0x3;
                break;
              case _0x4339c0.BrowserType.UC:
                _0x3537e7 = 0x4;
                break;
              case _0x4339c0.BrowserType.QQ:
              case _0x4339c0.BrowserType.MOBILE_QQ:
                _0x3537e7 = 0x5;
                break;
              case _0x4339c0.BrowserType.FIREFOX:
                _0x3537e7 = 0x6;
            }
            var _0x51d1b8 = 0x0;
            switch (_0x4339c0.os) {
              case _0x4339c0.OS.ANDROID:
                _0x51d1b8 = 0x1;
                break;
              case _0x4339c0.OS.IOS:
                _0x51d1b8 = 0x2;
                break;
              case _0x4339c0.OS.WINDOWS:
                _0x51d1b8 = 0x3;
                break;
              default:
                _0x51d1b8 = 0x0;
            }
            var _0x393f84 = _0xac87ff("apiId") || '-1';
            var _0x202d88 = _0xac87ff("ssoKey") || '1';
            var _0x32233c = _0xac87ff("gameID") || '-1';
            var _0x3729e4 = "https://" + (_0xac87ff('domain_platform') || _0xac87ff('gs') || 'gnidnawcs').split('').reverse().join('') + "/webservice/event/assetUpdate?";
            _0x4e8954(_0x3729e4 += "?AccountID=-1&GameID=" + _0x32233c + "&GameVersion=" + new Date().getTime() + "&EventID=" + _0x2e19a5 + "&EventValue=" + _0x1f6f55 + "&BrowserSystem=" + _0x3537e7 + '&DeviceSystem=' + _0x51d1b8 + '&CreateTime=' + new Date().toISOString() + "&Screen=0&SSOKey=" + _0x202d88 + "&ApiId=" + _0x393f84 + "&LogIndex=11");
          }
        }
      }
      function _0x4e8954(_0x45d7b3) {
        var _0x177f4c = {
          'Accept': "application/json, text/javascript, text/plain"
        };
        var _0x4cc892 = new XMLHttpRequest();
        _0x4cc892.open("GET", _0x45d7b3, true);
        if (_0x177f4c) {
          Object.keys(_0x177f4c).forEach(function (_0x2067c5) {
            return _0x4cc892.setRequestHeader(_0x2067c5, _0x177f4c[_0x2067c5]);
          });
        }
        _0x4cc892.timeout = 0x1388;
        _0x4cc892.onload = function () {};
        _0x4cc892.onerror = function () {};
        _0x4cc892.ontimeout = function () {};
        _0x4cc892.send();
      }
      function _0xac87ff(_0x418171, _0x4fc279) {
        if (undefined === _0x4fc279) {
          _0x4fc279 = null;
        }
        if (!_0x4fc279) {
          _0x4fc279 = _0x23c75b();
        }
        _0x418171 = _0x418171.replace(/[[\]]/g, "\\$&");
        var _0x260783 = new RegExp("[?&]" + _0x418171 + "(=([^&#]*)|&|#|$)").exec(_0x4fc279);
        return _0x260783 ? _0x260783[0x2] ? decodeURIComponent(_0x260783[0x2].replace(/\+/g, " ")) : '' : null;
      }
      function _0x23c75b() {
        var _0x52958c = window.location.href;
        var _0x5f32cb = this.GetLinkParameterByName("replaydata", _0x52958c);
        if (!_0x5f32cb) {
          return _0x52958c;
        }
        var _0x1f2d97 = '0'.charCodeAt(0x0);
        var _0x54a6d0 = '9'.charCodeAt(0x0);
        var _0x37cba2 = 'a'.charCodeAt(0x0);
        var _0x348507 = 'z'.charCodeAt(0x0);
        var _0x29bbe1 = 'A'.charCodeAt(0x0);
        var _0x35286b = 'Z'.charCodeAt(0x0);
        var _0x29b63d = '';
        for (var _0x117cdd = 0x0; _0x117cdd < _0x5f32cb.length; _0x117cdd++) {
          var _0x3eebe5 = _0x5f32cb.charCodeAt(_0x117cdd);
          if (_0x3eebe5 >= _0x1f2d97 && _0x3eebe5 <= _0x54a6d0) {
            _0x3eebe5 = _0x54a6d0 - (_0x3eebe5 - _0x1f2d97);
            _0x29b63d += String.fromCharCode(_0x3eebe5);
          } else if (_0x3eebe5 >= _0x37cba2 && _0x3eebe5 <= _0x348507 && _0x117cdd % 0x2 == 0x0) {
            _0x3eebe5 = _0x348507 - (_0x3eebe5 - _0x37cba2);
            _0x29b63d += String.fromCharCode(_0x3eebe5);
          } else if (_0x3eebe5 >= _0x29bbe1 && _0x3eebe5 <= _0x35286b && _0x117cdd % 0x3 == 0x0) {
            _0x3eebe5 = _0x35286b - (_0x3eebe5 - _0x29bbe1);
            _0x29b63d += String.fromCharCode(_0x3eebe5);
          } else {
            _0x29b63d += String.fromCharCode(_0x3eebe5);
          }
        }
        var _0x466ccb = _0x52958c.split("replaydata=" + _0x5f32cb);
        _0x466ccb.join('');
        return _0x466ccb + atob(_0x29b63d);
      }
      var _0x5827d2 = globalThis.__zipBundleLoader;
      var _0x297248;
      var _0x1b7413;
      var _0x4ef7c6;
      var _0x12c445;
      var _0x2653e3;
      var _0x2c31a1;
      var _0x5abfa0;
      var _0x4b744d;
      var _0x209ea4;
      var _0x45506d;
      var _0x1fbf46;
      var _0x566ed0;
      var _0x40f4cb;
      var _0x15370b;
      var _0x55f3ad;
      var _0x3656f4;
      var _0x44f7b5;
      var _0x5416c7;
      if (globalThis.fflate && !_0x5827d2) {
        _0x5827d2 = new _0x13a0e6();
        globalThis.__zipBundleLoader = _0x5827d2;
        _0x5827d2.init();
      }
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "c933866GvpLKaZlVxLlOz0C", 'FeatureManagerComponent', undefined);
      var _0x2a5ac5 = _0x3e9873.ccclass;
      var _0x311156 = _0x3e9873.property;
      var _0x3cd5d9;
      !function (_0x16f104) {
        _0x16f104[_0x16f104.CommonMainBundle = 0x0] = 'CommonMainBundle';
        _0x16f104[_0x16f104.CommonBundle = 0x1] = "CommonBundle";
        _0x16f104[_0x16f104.OtherBundle = 0x2] = "OtherBundle";
        _0x16f104[_0x16f104.DefaultLangBundle = 0x3] = "DefaultLangBundle";
        _0x16f104[_0x16f104.LangTextBundle = 0x4] = 'LangTextBundle';
        _0x16f104[_0x16f104.GameBundle = 0x5] = 'GameBundle';
      }(_0x3cd5d9 || (_0x3cd5d9 = {}));
      var _0x3af77a;
      var _0x50326c;
      !function (_0x454d83) {
        _0x454d83[_0x454d83.None = 0x0] = 'None';
        _0x454d83[_0x454d83.AutoPlaySettingPanel = 0x1] = "AutoPlaySettingPanel";
        _0x454d83[_0x454d83.AutoPlaySettingPanel_DFI = 0x2] = "AutoPlaySettingPanel_DFI";
        _0x454d83[_0x454d83.AutoPlaySettingPanel_DFIII = 0x3] = 'AutoPlaySettingPanel_DFIII';
        _0x454d83[_0x454d83.AutoPlaySettingPanel_BS = 0x4] = "AutoPlaySettingPanel_BS";
        _0x454d83[_0x454d83.AutoPlaySetting_AG2 = 0x5] = "AutoPlaySetting_AG2";
        _0x454d83[_0x454d83.AutoPlaySetting_FD = 0x6] = 'AutoPlaySetting_FD';
        _0x454d83[_0x454d83.AutoPlaySettingPanel_MS = 0x7] = "AutoPlaySettingPanel_MS";
      }(_0x3af77a || (_0x3af77a = {}));
      (function (_0x34c6db) {
        _0x34c6db[_0x34c6db.None = 0x0] = "None";
        _0x34c6db[_0x34c6db.Dark = 0x1] = "Dark";
      })(_0x50326c || (_0x50326c = {}));
      _0x297248 = _0x2a5ac5("StyleSetting");
      _0x1b7413 = _0x311156({
        'type': _0x1270c0,
        'tooltip': "是否有骰子造型"
      });
      _0x4ef7c6 = _0x311156({
        'type': _0x1270c0,
        'tooltip': '是否有萬聖造型'
      });
      _0x12c445 = _0x311156({
        'type': _0x1270c0,
        'tooltip': '是否有聖誕造型'
      });
      _0x2653e3 = _0x311156({
        'type': _0x1270c0,
        'tooltip': '是否有OKBET廠商造型'
      });
      _0x2c31a1 = _0x311156({
        'type': _0x5c9b0d(_0x50326c),
        'tooltip': '系列'
      });
      _0x5abfa0 = function () {
        _0xec902e(this, "HasDice", _0x4b744d, this);
        _0xec902e(this, "HasHolloween", _0x209ea4, this);
        _0xec902e(this, "HasXmas", _0x45506d, this);
        _0xec902e(this, "HasOkbet", _0x1fbf46, this);
        _0xec902e(this, "Series", _0x566ed0, this);
      };
      _0x4b744d = _0x196fb6(_0x5abfa0.prototype, "HasDice", [_0x1b7413], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x209ea4 = _0x196fb6(_0x5abfa0.prototype, "HasHolloween", [_0x4ef7c6], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x45506d = _0x196fb6(_0x5abfa0.prototype, "HasXmas", [_0x12c445], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x1fbf46 = _0x196fb6(_0x5abfa0.prototype, "HasOkbet", [_0x2653e3], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x566ed0 = _0x196fb6(_0x5abfa0.prototype, 'Series', [_0x2c31a1], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return _0x50326c.None;
        }
      });
      _0x40f4cb = _0x2a5ac5("PlayTypeSetting");
      _0x15370b = _0x311156({
        'type': _0x1270c0,
        'tooltip': "Match"
      });
      _0x55f3ad = _0x311156({
        'type': _0x1270c0,
        'tooltip': 'Break'
      });
      _0x3656f4 = function () {
        _0xec902e(this, "Match", _0x44f7b5, this);
        _0xec902e(this, "Break", _0x5416c7, this);
      };
      _0x44f7b5 = _0x196fb6(_0x3656f4.prototype, "Match", [_0x15370b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x5416c7 = _0x196fb6(_0x3656f4.prototype, "Break", [_0x55f3ad], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0xec9bd2._RF.pop();
      _0xec9bd2._RF.push({}, "89025dALbBFj7AFo+6o3xYM", "SwipeScreen", undefined);
      _0xec9bd2._RF.pop();
    }
  };
});
(function (_0x104f53) {
  _0x104f53("virtual:///prerequisite-imports/main", "chunks:///main.js");
})(function (_0x3d4473, _0x887c1c) {
  System.register(_0x3d4473, [_0x887c1c], function (_0xb9fee8, _0x488f9a) {
    return {
      'setters': [function (_0x20ba9a) {
        var _0x528dbe = {};
        for (var _0x2ed3d8 in _0x20ba9a) {
          if (_0x2ed3d8 !== "default" && _0x2ed3d8 !== '__esModule') {
            _0x528dbe[_0x2ed3d8] = _0x20ba9a[_0x2ed3d8];
          }
        }
        _0xb9fee8(_0x528dbe);
      }],
      'execute': function () {}
    };
  });
});