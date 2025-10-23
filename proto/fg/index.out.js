System.register("chunks:///main.js", ['cc'], function (_0x2b0530, _0xbee036) {
  'use strict';

  var _0x5a9fe0;
  var _0x1d0e7a;
  var _0x565251;
  var _0x6cd26b;
  var _0x570c07;
  var _0x297ef0;
  var _0x3d8e42;
  var _0x3127b3;
  var _0x1c3d03;
  var _0x4457da;
  var _0x483679;
  var _0x3ad8f0;
  var _0x57e446;
  var _0x458427;
  var _0x4fc6ef;
  var _0x5e283f;
  var _0x46c9e5;
  var _0x1cbbb9;
  var _0x177872;
  var _0xf1750c;
  var _0x2ece74;
  var _0x292e71;
  var _0x2793f6;
  var _0x19d01e;
  var _0x2a92ae;
  var _0x3ac177;
  var _0x19efb2;
  var _0x5b301d;
  var _0x56e875;
  var _0x43d302;
  var _0x2133bd;
  var _0x21d52f;
  var _0x462739;
  var _0x453a7c;
  var _0xc588c2;
  var _0x52e01e;
  var _0x5c7736;
  var _0x38d506;
  var _0x487a87;
  var _0x42062f;
  var _0x5bea10;
  var _0x128e73;
  var _0x3e0746;
  var _0x3c2dc7;
  var _0x3550c9;
  var _0xd8aeb;
  var _0x4dc69f;
  var _0x9666f7;
  var _0x2d2813;
  var _0x298152;
  var _0x4c8eb2;
  var _0x184a6f;
  var _0x24db79;
  var _0x41c406;
  var _0x4751d8;
  var _0x431739;
  var _0x59e17c;
  var _0x448d88;
  var _0x3cc7c9;
  var _0x3fa266;
  var _0xa19059;
  var _0x57e515;
  var _0x56c0de;
  var _0x102a8f;
  var _0x24d221;
  var _0x5141d4;
  var _0x7ea46b;
  var _0x3a78ae;
  var _0xcd5d7d;
  return {
    'setters': [function (_0x5a32dd) {
      _0x5a9fe0 = _0x5a32dd.cclegacy;
      _0x1d0e7a = _0x5a32dd.warn;
      _0x565251 = _0x5a32dd.v3;
      _0x6cd26b = _0x5a32dd.v2;
      _0x570c07 = _0x5a32dd.macro;
      _0x297ef0 = _0x5a32dd._decorator;
      _0x3d8e42 = _0x5a32dd.Enum;
      _0x3127b3 = _0x5a32dd.Component;
      _0x1c3d03 = _0x5a32dd.Animation;
      _0x4457da = _0x5a32dd.Label;
      _0x483679 = _0x5a32dd.UIOpacity;
      _0x3ad8f0 = _0x5a32dd.tween;
      _0x57e446 = _0x5a32dd.Tween;
      _0x458427 = _0x5a32dd.SpriteFrame;
      _0x4fc6ef = _0x5a32dd.Node;
      _0x5e283f = _0x5a32dd.UITransform;
      _0x46c9e5 = _0x5a32dd.Size;
      _0x1cbbb9 = _0x5a32dd.Sprite;
      _0x177872 = _0x5a32dd.Color;
      _0xf1750c = _0x5a32dd.Prefab;
      _0x2ece74 = _0x5a32dd.instantiate;
      _0x292e71 = _0x5a32dd.color;
      _0x2793f6 = _0x5a32dd.log;
      _0x19d01e = _0x5a32dd.sp;
      _0x2a92ae = _0x5a32dd.CCFloat;
      _0x3ac177 = _0x5a32dd.director;
      _0x19efb2 = _0x5a32dd.Director;
      _0x5b301d = _0x5a32dd.Vec3;
      _0x56e875 = _0x5a32dd.UIRenderer;
      _0x43d302 = _0x5a32dd.error;
      _0x2133bd = _0x5a32dd.RichText;
      _0x21d52f = _0x5a32dd.CCBoolean;
      _0x462739 = _0x5a32dd.JsonAsset;
      _0x453a7c = _0x5a32dd.math;
      _0xc588c2 = _0x5a32dd.Button;
      _0x52e01e = _0x5a32dd.NodeEventType;
      _0x5c7736 = _0x5a32dd.AnimationClip;
      _0x38d506 = _0x5a32dd.SpriteAtlas;
      _0x487a87 = _0x5a32dd.sys;
      _0x42062f = _0x5a32dd.input;
      _0x5bea10 = _0x5a32dd.Input;
      _0x128e73 = _0x5a32dd.KeyCode;
      _0x3e0746 = _0x5a32dd.view;
      _0x3c2dc7 = _0x5a32dd.ResolutionPolicy;
      _0x3550c9 = _0x5a32dd.ccenum;
      _0xd8aeb = _0x5a32dd.EventHandler;
      _0x4dc69f = _0x5a32dd.assetManager;
      _0x9666f7 = _0x5a32dd.lerp;
      _0x2d2813 = _0x5a32dd.TransformBit;
      _0x298152 = _0x5a32dd.CCString;
      _0x4c8eb2 = _0x5a32dd.Material;
      _0x184a6f = _0x5a32dd.Gradient;
      _0x24db79 = _0x5a32dd.v4;
      _0x41c406 = _0x5a32dd.Texture2D;
      _0x4751d8 = _0x5a32dd.clamp01;
      _0x431739 = _0x5a32dd.EffectAsset;
      _0x59e17c = _0x5a32dd.CCInteger;
      _0x448d88 = _0x5a32dd.ImageAsset;
      _0x3cc7c9 = _0x5a32dd.ParticleSystem2D;
      _0x3fa266 = _0x5a32dd.Vec2;
      _0xa19059 = _0x5a32dd.TweenSystem;
      _0x57e515 = _0x5a32dd.ScrollView;
      _0x56c0de = _0x5a32dd.isValid;
      _0x102a8f = _0x5a32dd.CCClass;
      _0x24d221 = _0x5a32dd.js;
      _0x5141d4 = _0x5a32dd.settings;
      _0x7ea46b = _0x5a32dd.Settings;
      _0x3a78ae = _0x5a32dd.VERSION;
      _0xcd5d7d = _0x5a32dd.find;
    }],
    'execute': function () {
      function _0xb84dc1() {
        _0xb84dc1 = function () {
          return _0xc83f45;
        };
        var _0xc83f45 = {};
        var _0x123e3c = Object.prototype;
        var _0x9cf3aa = _0x123e3c.hasOwnProperty;
        var _0x1269bb = 'function' == typeof Symbol ? Symbol : {};
        var _0x41c297 = _0x1269bb.iterator || '@@iterator';
        var _0x5d7b4d = _0x1269bb.asyncIterator || "@@asyncIterator";
        var _0x4c93c0 = _0x1269bb.toStringTag || "@@toStringTag";
        function _0x311714(_0x4d4a59, _0x33dd67, _0x49001c) {
          Object.defineProperty(_0x4d4a59, _0x33dd67, {
            'value': _0x49001c,
            'enumerable': true,
            'configurable': true,
            'writable': true
          });
          return _0x4d4a59[_0x33dd67];
        }
        try {
          _0x311714({}, '');
        } catch (_0x46ac29) {
          _0x311714 = function (_0x156210, _0x2cc195, _0x23a398) {
            return _0x156210[_0x2cc195] = _0x23a398;
          };
        }
        function _0xc70ff(_0x4c6b2e, _0x467338, _0x41b885, _0x41c957) {
          var _0x4252be = _0x467338 && _0x467338.prototype instanceof _0x567aa4 ? _0x467338 : _0x567aa4;
          var _0x1a7cb8 = Object.create(_0x4252be.prototype);
          var _0x5296c3 = new _0x1ce5b2(_0x41c957 || []);
          _0x1a7cb8._invoke = function (_0x48ceb6, _0x34e371, _0x437780) {
            var _0x1c255 = 'suspendedStart';
            return function (_0x35c7e0, _0x3df88b) {
              if ("executing" === _0x1c255) {
                throw new Error("Generator is already running");
              }
              if ("completed" === _0x1c255) {
                if ("throw" === _0x35c7e0) {
                  throw _0x3df88b;
                }
                return {
                  'value': undefined,
                  'done': true
                };
              }
              _0x437780.method = _0x35c7e0;
              for (_0x437780.arg = _0x3df88b;;) {
                var _0x2590d5 = _0x437780.delegate;
                if (_0x2590d5) {
                  var _0x4c18f6 = _0x44f22b(_0x2590d5, _0x437780);
                  if (_0x4c18f6) {
                    if (_0x4c18f6 === _0x5b328f) {
                      continue;
                    }
                    return _0x4c18f6;
                  }
                }
                if ("next" === _0x437780.method) {
                  _0x437780.sent = _0x437780._sent = _0x437780.arg;
                } else {
                  if ('throw' === _0x437780.method) {
                    if ("suspendedStart" === _0x1c255) {
                      _0x1c255 = "completed";
                      throw _0x437780.arg;
                    }
                    _0x437780.dispatchException(_0x437780.arg);
                  } else if ("return" === _0x437780.method) {
                    _0x437780.abrupt("return", _0x437780.arg);
                  }
                }
                _0x1c255 = "executing";
                var _0x4ad701 = _0x29d31b(_0x48ceb6, _0x34e371, _0x437780);
                if ("normal" === _0x4ad701.type) {
                  _0x1c255 = _0x437780.done ? "completed" : "suspendedYield";
                  if (_0x4ad701.arg === _0x5b328f) {
                    continue;
                  }
                  return {
                    'value': _0x4ad701.arg,
                    'done': _0x437780.done
                  };
                }
                if ("throw" === _0x4ad701.type) {
                  _0x1c255 = "completed";
                  _0x437780.method = "throw";
                  _0x437780.arg = _0x4ad701.arg;
                }
              }
            };
          }(_0x4c6b2e, _0x41b885, _0x5296c3);
          return _0x1a7cb8;
        }
        function _0x29d31b(_0x307c8f, _0x2d7686, _0x1418f6) {
          try {
            return {
              'type': 'normal',
              'arg': _0x307c8f.call(_0x2d7686, _0x1418f6)
            };
          } catch (_0x14d04d) {
            return {
              'type': "throw",
              'arg': _0x14d04d
            };
          }
        }
        _0xc83f45.wrap = _0xc70ff;
        var _0x5b328f = {};
        function _0x567aa4() {}
        function _0x399e55() {}
        function _0x51031b() {}
        var _0x37dea4 = {};
        _0x311714(_0x37dea4, _0x41c297, function () {
          return this;
        });
        var _0x3d41e9 = Object.getPrototypeOf;
        var _0x14fdc5 = _0x3d41e9 && _0x3d41e9(_0x3d41e9(_0x123fc8([])));
        if (_0x14fdc5 && _0x14fdc5 !== _0x123e3c && _0x9cf3aa.call(_0x14fdc5, _0x41c297)) {
          _0x37dea4 = _0x14fdc5;
        }
        var _0x59e356 = _0x51031b.prototype = _0x567aa4.prototype = Object.create(_0x37dea4);
        function _0x24bd2e(_0xbac8a5) {
          ["next", "throw", 'return'].forEach(function (_0x5e9240) {
            _0x311714(_0xbac8a5, _0x5e9240, function (_0x1a9c46) {
              return this._invoke(_0x5e9240, _0x1a9c46);
            });
          });
        }
        function _0x99988e(_0x290978, _0x5d3a66) {
          function _0x10ef3f(_0x468dad, _0x536caa, _0x5cc893, _0x5bb522) {
            var _0x580937 = _0x29d31b(_0x290978[_0x468dad], _0x290978, _0x536caa);
            if ("throw" !== _0x580937.type) {
              var _0x44f5a0 = _0x580937.arg;
              var _0x3d16e8 = _0x44f5a0.value;
              return _0x3d16e8 && "object" == typeof _0x3d16e8 && _0x9cf3aa.call(_0x3d16e8, '__await') ? _0x5d3a66.resolve(_0x3d16e8.__await).then(function (_0x19d1a0) {
                _0x10ef3f('next', _0x19d1a0, _0x5cc893, _0x5bb522);
              }, function (_0x4e8bfd) {
                _0x10ef3f("throw", _0x4e8bfd, _0x5cc893, _0x5bb522);
              }) : _0x5d3a66.resolve(_0x3d16e8).then(function (_0x22241b) {
                _0x44f5a0.value = _0x22241b;
                _0x5cc893(_0x44f5a0);
              }, function (_0x2fbfb6) {
                return _0x10ef3f('throw', _0x2fbfb6, _0x5cc893, _0x5bb522);
              });
            }
            _0x5bb522(_0x580937.arg);
          }
          var _0x5268b7;
          this._invoke = function (_0x2affe4, _0xfb2353) {
            function _0x4fafd5() {
              return new _0x5d3a66(function (_0x17e903, _0x1208b1) {
                _0x10ef3f(_0x2affe4, _0xfb2353, _0x17e903, _0x1208b1);
              });
            }
            return _0x5268b7 = _0x5268b7 ? _0x5268b7.then(_0x4fafd5, _0x4fafd5) : _0x4fafd5();
          };
        }
        function _0x44f22b(_0x2d5710, _0x4e146b) {
          var _0x11b414 = _0x2d5710.iterator[_0x4e146b.method];
          if (undefined === _0x11b414) {
            _0x4e146b.delegate = null;
            if ('throw' === _0x4e146b.method) {
              if (_0x2d5710.iterator["return"] && (_0x4e146b.method = "return", _0x4e146b.arg = undefined, _0x44f22b(_0x2d5710, _0x4e146b), 'throw' === _0x4e146b.method)) {
                return _0x5b328f;
              }
              _0x4e146b.method = "throw";
              _0x4e146b.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return _0x5b328f;
          }
          var _0x4e49d1 = _0x29d31b(_0x11b414, _0x2d5710.iterator, _0x4e146b.arg);
          if ("throw" === _0x4e49d1.type) {
            _0x4e146b.method = "throw";
            _0x4e146b.arg = _0x4e49d1.arg;
            _0x4e146b.delegate = null;
            return _0x5b328f;
          }
          var _0x2187b1 = _0x4e49d1.arg;
          return _0x2187b1 ? _0x2187b1.done ? (_0x4e146b[_0x2d5710.resultName] = _0x2187b1.value, _0x4e146b.next = _0x2d5710.nextLoc, "return" !== _0x4e146b.method && (_0x4e146b.method = "next", _0x4e146b.arg = undefined), _0x4e146b.delegate = null, _0x5b328f) : _0x2187b1 : (_0x4e146b.method = "throw", _0x4e146b.arg = new TypeError("iterator result is not an object"), _0x4e146b.delegate = null, _0x5b328f);
        }
        function _0x42bb77(_0x6d1431) {
          var _0x442aaf = {
            'tryLoc': _0x6d1431[0x0]
          };
          if (0x1 in _0x6d1431) {
            _0x442aaf.catchLoc = _0x6d1431[0x1];
          }
          if (0x2 in _0x6d1431) {
            _0x442aaf.finallyLoc = _0x6d1431[0x2];
            _0x442aaf.afterLoc = _0x6d1431[0x3];
          }
          this.tryEntries.push(_0x442aaf);
        }
        function _0x110f97(_0x233f3b) {
          var _0x25edcb = _0x233f3b.completion || {};
          _0x25edcb.type = "normal";
          delete _0x25edcb.arg;
          _0x233f3b.completion = _0x25edcb;
        }
        function _0x1ce5b2(_0x812db7) {
          this.tryEntries = [{
            'tryLoc': "root"
          }];
          _0x812db7.forEach(_0x42bb77, this);
          this.reset(true);
        }
        function _0x123fc8(_0x1088c6) {
          if (_0x1088c6) {
            var _0x26e52a = _0x1088c6[_0x41c297];
            if (_0x26e52a) {
              return _0x26e52a.call(_0x1088c6);
            }
            if ("function" == typeof _0x1088c6.next) {
              return _0x1088c6;
            }
            if (!isNaN(_0x1088c6.length)) {
              var _0x4ab40f = -0x1;
              var _0x5ee137 = function _0x159e78() {
                for (; ++_0x4ab40f < _0x1088c6.length;) {
                  if (_0x9cf3aa.call(_0x1088c6, _0x4ab40f)) {
                    _0x159e78.value = _0x1088c6[_0x4ab40f];
                    _0x159e78.done = false;
                    return _0x159e78;
                  }
                }
                _0x159e78.value = undefined;
                _0x159e78.done = true;
                return _0x159e78;
              };
              return _0x5ee137.next = _0x5ee137;
            }
          }
          return {
            'next': _0x23de48
          };
        }
        function _0x23de48() {
          return {
            'value': undefined,
            'done': true
          };
        }
        _0x399e55.prototype = _0x51031b;
        _0x311714(_0x59e356, "constructor", _0x51031b);
        _0x311714(_0x51031b, "constructor", _0x399e55);
        _0x399e55.displayName = _0x311714(_0x51031b, _0x4c93c0, "GeneratorFunction");
        _0xc83f45.isGeneratorFunction = function (_0x510170) {
          var _0x110cbd = 'function' == typeof _0x510170 && _0x510170.constructor;
          return !!_0x110cbd && (_0x110cbd === _0x399e55 || "GeneratorFunction" === (_0x110cbd.displayName || _0x110cbd.name));
        };
        _0xc83f45.mark = function (_0x57e6df) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(_0x57e6df, _0x51031b);
          } else {
            _0x57e6df.__proto__ = _0x51031b;
            _0x311714(_0x57e6df, _0x4c93c0, "GeneratorFunction");
          }
          _0x57e6df.prototype = Object.create(_0x59e356);
          return _0x57e6df;
        };
        _0xc83f45.awrap = function (_0x40d682) {
          return {
            '__await': _0x40d682
          };
        };
        _0x24bd2e(_0x99988e.prototype);
        _0x311714(_0x99988e.prototype, _0x5d7b4d, function () {
          return this;
        });
        _0xc83f45.AsyncIterator = _0x99988e;
        _0xc83f45.async = function (_0x4bec25, _0x2ea189, _0x4b0c70, _0x30220d, _0x66c980) {
          if (undefined === _0x66c980) {
            _0x66c980 = Promise;
          }
          var _0x5f3eee = new _0x99988e(_0xc70ff(_0x4bec25, _0x2ea189, _0x4b0c70, _0x30220d), _0x66c980);
          return _0xc83f45.isGeneratorFunction(_0x2ea189) ? _0x5f3eee : _0x5f3eee.next().then(function (_0x104c3b) {
            return _0x104c3b.done ? _0x104c3b.value : _0x5f3eee.next();
          });
        };
        _0x24bd2e(_0x59e356);
        _0x311714(_0x59e356, _0x4c93c0, 'Generator');
        _0x311714(_0x59e356, _0x41c297, function () {
          return this;
        });
        _0x311714(_0x59e356, "toString", function () {
          return "[object Generator]";
        });
        _0xc83f45.keys = function (_0x575944) {
          var _0x316d24 = [];
          for (var _0x5484ea in _0x575944) _0x316d24.push(_0x5484ea);
          _0x316d24.reverse();
          return function _0x715eeb() {
            for (; _0x316d24.length;) {
              var _0x3c614c = _0x316d24.pop();
              if (_0x3c614c in _0x575944) {
                _0x715eeb.value = _0x3c614c;
                _0x715eeb.done = false;
                return _0x715eeb;
              }
            }
            _0x715eeb.done = true;
            return _0x715eeb;
          };
        };
        _0xc83f45.values = _0x123fc8;
        _0x1ce5b2.prototype = {
          'constructor': _0x1ce5b2,
          'reset': function (_0x3c2d03) {
            this.prev = 0x0;
            this.next = 0x0;
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(_0x110f97);
            if (!_0x3c2d03) {
              for (var _0x1de42a in this) if ('t' === _0x1de42a.charAt(0x0) && _0x9cf3aa.call(this, _0x1de42a) && !isNaN(+_0x1de42a.slice(0x1))) {
                this[_0x1de42a] = undefined;
              }
            }
          },
          'stop': function () {
            this.done = true;
            var _0x9cc712 = this.tryEntries[0x0].completion;
            if ('throw' === _0x9cc712.type) {
              throw _0x9cc712.arg;
            }
            return this.rval;
          },
          'dispatchException': function (_0x2cd109) {
            if (this.done) {
              throw _0x2cd109;
            }
            var _0x56418e = this;
            function _0x54b94a(_0x2916d5, _0x136b0b) {
              _0x36c0c3.type = "throw";
              _0x36c0c3.arg = _0x2cd109;
              _0x56418e.next = _0x2916d5;
              if (_0x136b0b) {
                _0x56418e.method = "next";
                _0x56418e.arg = undefined;
              }
              return !!_0x136b0b;
            }
            for (var _0x2ba17b = this.tryEntries.length - 0x1; _0x2ba17b >= 0x0; --_0x2ba17b) {
              var _0x53e1da = this.tryEntries[_0x2ba17b];
              var _0x36c0c3 = _0x53e1da.completion;
              if ("root" === _0x53e1da.tryLoc) {
                return _0x54b94a("end");
              }
              if (_0x53e1da.tryLoc <= this.prev) {
                var _0x41eee3 = _0x9cf3aa.call(_0x53e1da, "catchLoc");
                var _0x52a0b0 = _0x9cf3aa.call(_0x53e1da, 'finallyLoc');
                if (_0x41eee3 && _0x52a0b0) {
                  if (this.prev < _0x53e1da.catchLoc) {
                    return _0x54b94a(_0x53e1da.catchLoc, true);
                  }
                  if (this.prev < _0x53e1da.finallyLoc) {
                    return _0x54b94a(_0x53e1da.finallyLoc);
                  }
                } else {
                  if (_0x41eee3) {
                    if (this.prev < _0x53e1da.catchLoc) {
                      return _0x54b94a(_0x53e1da.catchLoc, true);
                    }
                  } else {
                    if (!_0x52a0b0) {
                      throw new Error("try statement without catch or finally");
                    }
                    if (this.prev < _0x53e1da.finallyLoc) {
                      return _0x54b94a(_0x53e1da.finallyLoc);
                    }
                  }
                }
              }
            }
          },
          'abrupt': function (_0x2f5347, _0x4e88e9) {
            for (var _0x3a9706 = this.tryEntries.length - 0x1; _0x3a9706 >= 0x0; --_0x3a9706) {
              var _0x2048e6 = this.tryEntries[_0x3a9706];
              if (_0x2048e6.tryLoc <= this.prev && _0x9cf3aa.call(_0x2048e6, "finallyLoc") && this.prev < _0x2048e6.finallyLoc) {
                var _0x2fb16e = _0x2048e6;
                break;
              }
            }
            if (_0x2fb16e && ("break" === _0x2f5347 || "continue" === _0x2f5347) && _0x2fb16e.tryLoc <= _0x4e88e9 && _0x4e88e9 <= _0x2fb16e.finallyLoc) {
              _0x2fb16e = null;
            }
            var _0x2fdb99 = _0x2fb16e ? _0x2fb16e.completion : {};
            _0x2fdb99.type = _0x2f5347;
            _0x2fdb99.arg = _0x4e88e9;
            return _0x2fb16e ? (this.method = "next", this.next = _0x2fb16e.finallyLoc, _0x5b328f) : this.complete(_0x2fdb99);
          },
          'complete': function (_0x5941fd, _0x3569a7) {
            if ("throw" === _0x5941fd.type) {
              throw _0x5941fd.arg;
            }
            if ("break" === _0x5941fd.type || "continue" === _0x5941fd.type) {
              this.next = _0x5941fd.arg;
            } else if ("return" === _0x5941fd.type) {
              this.rval = this.arg = _0x5941fd.arg;
              this.method = "return";
              this.next = "end";
            } else if ('normal' === _0x5941fd.type && _0x3569a7) {
              this.next = _0x3569a7;
            }
            return _0x5b328f;
          },
          'finish': function (_0x4abda9) {
            for (var _0x486777 = this.tryEntries.length - 0x1; _0x486777 >= 0x0; --_0x486777) {
              var _0x1c473f = this.tryEntries[_0x486777];
              if (_0x1c473f.finallyLoc === _0x4abda9) {
                this.complete(_0x1c473f.completion, _0x1c473f.afterLoc);
                _0x110f97(_0x1c473f);
                return _0x5b328f;
              }
            }
          },
          'catch': function (_0x42b7d0) {
            for (var _0x5b728b = this.tryEntries.length - 0x1; _0x5b728b >= 0x0; --_0x5b728b) {
              var _0x318d14 = this.tryEntries[_0x5b728b];
              if (_0x318d14.tryLoc === _0x42b7d0) {
                var _0x228c8f = _0x318d14.completion;
                if ("throw" === _0x228c8f.type) {
                  var _0x24bbe0 = _0x228c8f.arg;
                  _0x110f97(_0x318d14);
                }
                return _0x24bbe0;
              }
            }
            throw new Error("illegal catch attempt");
          },
          'delegateYield': function (_0x5e46f7, _0x45a0ad, _0x3e48a5) {
            this.delegate = {
              'iterator': _0x123fc8(_0x5e46f7),
              'resultName': _0x45a0ad,
              'nextLoc': _0x3e48a5
            };
            if ('next' === this.method) {
              this.arg = undefined;
            }
            return _0x5b328f;
          }
        };
        return _0xc83f45;
      }
      function _0x4c7e54(_0x4223ce, _0x4824e9, _0x4afae1, _0x2655a4, _0x847f7b, _0x36d637, _0x10f4c2) {
        try {
          var _0x85941e = _0x4223ce[_0x36d637](_0x10f4c2);
          var _0x2bd9a8 = _0x85941e.value;
        } catch (_0x138f3c) {
          return void _0x4afae1(_0x138f3c);
        }
        if (_0x85941e.done) {
          _0x4824e9(_0x2bd9a8);
        } else {
          Promise.resolve(_0x2bd9a8).then(_0x2655a4, _0x847f7b);
        }
      }
      function _0x219aea(_0x582b6d) {
        return function () {
          var _0x41fd3e = this;
          return new Promise(function (_0x2fe50a, _0x1e61b9) {
            var _0x5c5171 = _0x582b6d.apply(_0x41fd3e, arguments);
            function _0x573849(_0x50e045) {
              _0x4c7e54(_0x5c5171, _0x2fe50a, _0x1e61b9, _0x573849, _0x253f40, "next", _0x50e045);
            }
            function _0x253f40(_0x23fd56) {
              _0x4c7e54(_0x5c5171, _0x2fe50a, _0x1e61b9, _0x573849, _0x253f40, "throw", _0x23fd56);
            }
            _0x573849(undefined);
          });
        };
      }
      function _0x43623f(_0xf8f451, _0x816434) {
        for (var _0x4eadff = 0x0; _0x4eadff < _0x816434.length; _0x4eadff++) {
          var _0xfb409a = _0x816434[_0x4eadff];
          _0xfb409a.enumerable = _0xfb409a.enumerable || false;
          _0xfb409a.configurable = true;
          if ('value' in _0xfb409a) {
            _0xfb409a.writable = true;
          }
          Object.defineProperty(_0xf8f451, _0xfb409a.key, _0xfb409a);
        }
      }
      function _0x2d513c(_0x11b0a6, _0x4843cf, _0x135add) {
        if (_0x4843cf) {
          _0x43623f(_0x11b0a6.prototype, _0x4843cf);
        }
        if (_0x135add) {
          _0x43623f(_0x11b0a6, _0x135add);
        }
        Object.defineProperty(_0x11b0a6, "prototype", {
          'writable': false
        });
        return _0x11b0a6;
      }
      function _0x4a7452(_0x191f09, _0x293002) {
        _0x191f09.prototype = Object.create(_0x293002.prototype);
        _0x191f09.prototype.constructor = _0x191f09;
        _0x3a79a1(_0x191f09, _0x293002);
      }
      function _0x3a79a1(_0x3e3c48, _0x15322d) {
        return (_0x3a79a1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (_0x10a374, _0x114ad7) {
          _0x10a374.__proto__ = _0x114ad7;
          return _0x10a374;
        })(_0x3e3c48, _0x15322d);
      }
      function _0x5199ec(_0x315058) {
        if (undefined === _0x315058) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return _0x315058;
      }
      function _0x1a08d3(_0x414b27, _0x362ce8, _0x2f2a93, _0x4895df) {
        if (_0x2f2a93) {
          Object.defineProperty(_0x414b27, _0x362ce8, {
            'enumerable': _0x2f2a93.enumerable,
            'configurable': _0x2f2a93.configurable,
            'writable': _0x2f2a93.writable,
            'value': _0x2f2a93.initializer ? _0x2f2a93.initializer.call(_0x4895df) : undefined
          });
        }
      }
      function _0x159f02(_0x21d71b, _0x119893, _0x5a9796, _0x51d773, _0x338023) {
        var _0x3cb2e1 = {};
        Object.keys(_0x51d773).forEach(function (_0x1dcd34) {
          _0x3cb2e1[_0x1dcd34] = _0x51d773[_0x1dcd34];
        });
        _0x3cb2e1.enumerable = !!_0x3cb2e1.enumerable;
        _0x3cb2e1.configurable = !!_0x3cb2e1.configurable;
        if ("value" in _0x3cb2e1 || _0x3cb2e1.initializer) {
          _0x3cb2e1.writable = true;
        }
        _0x3cb2e1 = _0x5a9796.slice().reverse().reduce(function (_0x480af8, _0x3d0c02) {
          return _0x3d0c02(_0x21d71b, _0x119893, _0x480af8) || _0x480af8;
        }, _0x3cb2e1);
        if (_0x338023 && undefined !== _0x3cb2e1.initializer) {
          _0x3cb2e1.value = _0x3cb2e1.initializer ? _0x3cb2e1.initializer.call(_0x338023) : undefined;
          _0x3cb2e1.initializer = undefined;
        }
        if (undefined === _0x3cb2e1.initializer) {
          Object.defineProperty(_0x21d71b, _0x119893, _0x3cb2e1);
          _0x3cb2e1 = null;
        }
        return _0x3cb2e1;
      }
      _0x5a9fe0._RF.push({}, "db4337zK39CwpvA3Bh+gyjl", "index", undefined);
      if (!globalThis.Astarte) {
        globalThis.Astarte = {};
      }
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "2c465urF+5E6a8SAy0Y1679", "AppManager", undefined);
      var _0x183401;
      var _0x1503aa;
      var _0x3ee648;
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "01a4bCeOlRFS4PxU4ftD5wn", "BackpackManager", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "e98d6g3Sn5F/phbS0JGqk6v", "BuyBonusManager", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "810fcmXyb9Bu4OzTZmIkoz9", "CommonGameManager", undefined);
      (function (_0x311d7b) {
        _0x311d7b[_0x311d7b.Get = 0x0] = 'Get';
        _0x311d7b[_0x311d7b.Post = 0x1] = 'Post';
      })(_0x1503aa || (_0x1503aa = {}));
      (function (_0x5bb073) {
        _0x5bb073[_0x5bb073.Ignore = 0x0] = 'Ignore';
        _0x5bb073[_0x5bb073.Handle = 0x1] = 'Handle';
      })(_0x3ee648 || (_0x3ee648 = {}));
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, '0e324Erw0JDW6aCYO5d0i2g', "DailyMissionManager", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "dd020H2ox5CQ70Z9VNWXYpK", "DebrisManager", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, '1fcfdTjgMdDr4mh99NzZ29B', 'GaiaManager', undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "a3f63TygSlA6KwEkLDlQIoJ", "GiftCodeManager", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "9692fSvI0xNR5GVPmbcEfzq", 'IframeCommandManager', undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, 'd8221PEwlRBep+hz+x7w5Ot', 'NewBottomBarManager', undefined);
      var _0x4bd5fc;
      var _0x1bd3eb;
      var _0x383045;
      var _0x150149;
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, '28748R+s5pCY7kwYZ0zkqKk', "NewExtraManager", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "861e1J/bwRGlI4J13TOOh4y", 'TrialManager', undefined);
      (function (_0x46fe3d) {
        _0x46fe3d[_0x46fe3d.None = 0x0] = "None";
        _0x46fe3d[_0x46fe3d.Playing = 0x1] = "Playing";
        _0x46fe3d[_0x46fe3d.Item = 0x2] = "Item";
      })(_0x383045 || (_0x383045 = {}));
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "0f3df9al6NIJJ1/5ZP5aShG", 'MsgBoxManager', undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "8de065l1yBCNoeRGxK2yzaD", "StateManager", undefined);
      var _0x7e0b1c;
      var _0x28feb4;
      var _0x1e91b3;
      var _0x3a77d3;
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "c7e3d4LY9dOUokI+wu7YgCQ", "AutoShowManager", undefined);
      (function (_0x19c161) {
        _0x19c161[_0x19c161.SKY_BAR = 0x0] = 'SKY_BAR';
        _0x19c161[_0x19c161.PAYTABLE = 0x1] = "PAYTABLE";
        _0x19c161[_0x19c161.LANDING = 0x2] = "LANDING";
        _0x19c161[_0x19c161.DISCOUNT = 0x3] = "DISCOUNT";
        _0x19c161[_0x19c161.EXTRA_BET = 0x4] = "EXTRA_BET";
        _0x19c161[_0x19c161.ICONBOX = 0x5] = "ICONBOX";
      })(_0x28feb4 || (_0x28feb4 = {}));
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "d388f5XkRRFcYXg5usnXTa/", 'LocaleStringManager', undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "077a5gmYEpIQqr+YOtt+g08", "LocalStorageManager", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, '8c0f7IX3HNLY6BaWiL8u0j4', 'SoundManager', undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "50f8dtxxuFDo6qJW6FBFBaO", 'EventManager', undefined);
      var _0x1f905e;
      var _0x3d013c;
      var _0x4defef;
      var _0x4ecfde;
      var _0x534918;
      var _0x175559;
      var _0x2ecc2b;
      var _0x198dd9;
      var _0x289285;
      var _0x2cb05a;
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "18947v7ICNDlYz3G5vE642k", "LoadPrefabManager", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, 'de7f6JwfsBHBYba0UlqLoFI', "NotificationManager", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, '81438uBGiNJXoDkKAmuxEJu', 'FunctionControlManager', undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "3e41doUMVNLQbg53Jn6N9ch", "SoundAudioManager", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, 'cfe9e3/byhFGL1S1brGrbPU', "DebugManager", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, '858d45NBqBLW5W3J41WER1G', 'index', undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "4c480cU1LpMo4WqCcvtd0ph", 'Tools', undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "de32cbzFmBN4rL/N8DkMkAD", "Define", undefined);
      (function (_0x809ff3) {
        _0x809ff3[_0x809ff3.NORMAL = 0x0] = "NORMAL";
        _0x809ff3[_0x809ff3.USING = 0x1] = "USING";
      })(_0x4defef || (_0x4defef = {}));
      (function (_0x2e45ed) {
        _0x2e45ed[_0x2e45ed.GAME_CLOSE = 0x3e8] = "GAME_CLOSE";
        _0x2e45ed[_0x2e45ed.LOGIN = 0x3e9] = "LOGIN";
        _0x2e45ed[_0x2e45ed.WAIT_RES = 0x3ea] = 'WAIT_RES';
        _0x2e45ed[_0x2e45ed.CHECK_UNSHOW = 0x3eb] = "CHECK_UNSHOW";
        _0x2e45ed[_0x2e45ed.CHECK_FREESPIN = 0x3ec] = 'CHECK_FREESPIN';
        _0x2e45ed[_0x2e45ed.IDLE = 0x3ed] = "IDLE";
        _0x2e45ed[_0x2e45ed.SPIN_REQ = 0x3ee] = "SPIN_REQ";
        _0x2e45ed[_0x2e45ed.SPIN = 0x3ef] = "SPIN";
        _0x2e45ed[_0x2e45ed.COMMON_SHOW = 0x3f0] = "COMMON_SHOW";
        _0x2e45ed[_0x2e45ed.MHB_SHOW = 0x3f1] = "MHB_SHOW";
        _0x2e45ed[_0x2e45ed.JP_SHOW = 0x3f2] = 'JP_SHOW';
        _0x2e45ed[_0x2e45ed.CHECK_STATE = 0x3f3] = "CHECK_STATE";
        _0x2e45ed[_0x2e45ed.END = 0x3f4] = "END";
        _0x2e45ed[_0x2e45ed.FREESPIN_WAIT_RES = 0x3f5] = "FREESPIN_WAIT_RES";
        _0x2e45ed[_0x2e45ed.TURBO = 0x3f6] = 'TURBO';
        _0x2e45ed[_0x2e45ed.FIRST_IN_GAME = 0x3f7] = "FIRST_IN_GAME";
        _0x2e45ed[_0x2e45ed.CHECK_APP_REWARD = 0x3f8] = "CHECK_APP_REWARD";
        _0x2e45ed[_0x2e45ed.CHECK_BUFF = 0x3f9] = "CHECK_BUFF";
        _0x2e45ed[_0x2e45ed.ACTIVATE_BUFF = 0x3fa] = "ACTIVATE_BUFF";
        _0x2e45ed[_0x2e45ed.END_BUFF = 0x3fb] = 'END_BUFF';
        _0x2e45ed[_0x2e45ed.GRAND_JP = 0x3fc] = "GRAND_JP";
      })(_0x4ecfde || (_0x4ecfde = {}));
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "813162EnmlPD6ZkP+n93pP2", "RoundController", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "1d5a8ODImpC9qtSki10xwQQ", "ExtraBetController", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, 'cd534oKcOFFap8T54HqFCAE', 'FakeServer', undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "3ec76bGz5NECbh3RNjc2SdI", "TempoSetting", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "6f779uo//FP8owPSb4jjuXE", "CommonEffect", undefined);
      (function (_0x2de9d1) {
        var _0x29ef81 = function () {
          function _0x178353() {}
          _0x178353.PascalTriangleLine = function (_0x1d5ac1) {
            var _0x3579b0 = [0x1];
            for (var _0x2b6259 = 0x1; _0x2b6259 < _0x1d5ac1; _0x2b6259++) {
              _0x3579b0[_0x2b6259] = _0x3579b0[_0x2b6259 - 0x1] * (_0x1d5ac1 - _0x2b6259) / _0x2b6259;
            }
            return _0x3579b0;
          };
          _0x178353.RangedRandom = function (_0x24392f, _0x394fd4) {
            return (_0x394fd4 - _0x24392f) * Math.random() + _0x24392f;
          };
          _0x178353.GetRandomRectPos = function (_0x555c86, _0x3fd475, _0x5e4a39) {
            var _0x2e717a = _0x6cd26b(this.RangedRandom(-_0x3fd475.x, _0x3fd475.x) / 0x2 | 0x0, this.RangedRandom(-_0x3fd475.x, _0x3fd475.x) / 0x2 | 0x0).rotate(_0x5e4a39 * _0x570c07.RAD);
            return _0x555c86.add(_0x2e717a);
          };
          _0x178353.GetRandomOvalPos = function (_0x4b23ff, _0x1acced, _0x30f6a4) {
            var _0x1a0a54 = _0x1acced.y / Math.max(0x1, _0x1acced.x);
            var _0x38ef03 = Math.random() * _0x1acced.x * 0.5;
            var _0x153ca5 = Math.random() * Math.PI * 0x2;
            var _0x339a44 = _0x6cd26b(_0x38ef03 * Math.cos(_0x153ca5), _0x38ef03 * Math.sin(_0x153ca5) * _0x1a0a54).rotate(_0x30f6a4 * _0x570c07.RAD);
            return _0x4b23ff.add(_0x339a44);
          };
          _0x178353.ZoomAndFlip = function (_0x131304, _0x10373c, _0x295940, _0x1e37ed) {
            var _0x5e049c = Math.sin(_0x1e37ed * Math.PI) * (_0x10373c - _0x131304) + _0x131304;
            var _0x5b4854 = Math.cos(_0x1e37ed * Math.PI * _0x295940);
            return _0x6cd26b(_0x5e049c * _0x5b4854, _0x5e049c);
          };
          return _0x178353;
        }();
        _0x2de9d1.ExtendsMath = _0x29ef81;
        var _0x19d46b = function () {
          function _0x38f07c(_0x2ec4fd) {
            this.pts = null;
            this.len = 0x0;
            this.ptl = null;
            this.bez = null;
            this.len = _0x2ec4fd.length;
            if (0x0 == this.len) {
              _0x2ec4fd.push(_0x565251(0x0, 0x0));
              _0x2ec4fd.push(_0x565251(0x0, 0x0));
            } else if (0x1 == this.len) {
              _0x2ec4fd.push(_0x565251(_0x2ec4fd[0x0].x, _0x2ec4fd[0x0].y));
            }
            this.pts = _0x2ec4fd;
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
                this.ptl = _0x29ef81.PascalTriangleLine(this.len);
                this.bez = this.BezierN;
            }
          }
          var _0x56535a = _0x38f07c.prototype;
          _0x56535a.GetPosition = function (_0x4ae5b3) {
            return this.bez.apply(this, [_0x4ae5b3]);
          };
          _0x56535a.Bezier2 = function (_0x2da045) {
            var _0x1a6d55 = 0x1 - _0x2da045;
            return _0x565251(_0x1a6d55 * this.pts[0x0].x + _0x2da045 * this.pts[0x1].x, _0x1a6d55 * this.pts[0x0].y + _0x2da045 * this.pts[0x1].y);
          };
          _0x56535a.Bezier3 = function (_0x2dc577) {
            var _0x5bd9f5 = 0x1 - _0x2dc577;
            var _0x4976d6 = [_0x5bd9f5 * _0x5bd9f5, 0x2 * _0x5bd9f5 * _0x2dc577, _0x2dc577 * _0x2dc577];
            return _0x565251(_0x4976d6[0x0] * this.pts[0x0].x + _0x4976d6[0x1] * this.pts[0x1].x + _0x4976d6[0x2] * this.pts[0x2].x, _0x4976d6[0x0] * this.pts[0x0].y + _0x4976d6[0x1] * this.pts[0x1].y + _0x4976d6[0x2] * this.pts[0x2].y);
          };
          _0x56535a.Bezier4 = function (_0x38ee38) {
            var _0x4c25f3 = 0x1 - _0x38ee38;
            var _0x4759bf = [_0x4c25f3 * _0x4c25f3 * _0x4c25f3, 0x3 * _0x4c25f3 * _0x4c25f3 * _0x38ee38, 0x3 * _0x4c25f3 * _0x38ee38 * _0x38ee38, _0x38ee38 * _0x38ee38 * _0x38ee38];
            return _0x565251(_0x4759bf[0x0] * this.pts[0x0].x + _0x4759bf[0x1] * this.pts[0x1].x + _0x4759bf[0x2] * this.pts[0x2].x + _0x4759bf[0x3] * this.pts[0x3].x, _0x4759bf[0x0] * this.pts[0x0].y + _0x4759bf[0x1] * this.pts[0x1].y + _0x4759bf[0x2] * this.pts[0x2].y + _0x4759bf[0x3] * this.pts[0x3].y);
          };
          _0x56535a.Bezier5 = function (_0x1d8094) {
            var _0x1831a7 = 0x1 - _0x1d8094;
            var _0xa8c487 = [_0x1831a7 * _0x1831a7 * _0x1831a7 * _0x1831a7, 0x4 * _0x1831a7 * _0x1831a7 * _0x1831a7 * _0x1d8094, 0x6 * _0x1831a7 * _0x1831a7 * _0x1d8094 * _0x1d8094, 0x4 * _0x1831a7 * _0x1d8094 * _0x1d8094 * _0x1d8094, _0x1d8094 * _0x1d8094 * _0x1d8094 * _0x1d8094];
            return _0x565251(_0xa8c487[0x0] * this.pts[0x0].x + _0xa8c487[0x1] * this.pts[0x1].x + _0xa8c487[0x2] * this.pts[0x2].x + _0xa8c487[0x3] * this.pts[0x3].x + _0xa8c487[0x4] * this.pts[0x4].x, _0xa8c487[0x0] * this.pts[0x0].y + _0xa8c487[0x1] * this.pts[0x1].y + _0xa8c487[0x2] * this.pts[0x2].y + _0xa8c487[0x3] * this.pts[0x3].y + _0xa8c487[0x4] * this.pts[0x4].y);
          };
          _0x56535a.Bezier6 = function (_0x5e2ea8) {
            var _0x2ec40a = 0x1 - _0x5e2ea8;
            var _0x5055a0 = [_0x2ec40a * _0x2ec40a * _0x2ec40a * _0x2ec40a * _0x2ec40a, 0x5 * _0x2ec40a * _0x2ec40a * _0x2ec40a * _0x2ec40a * _0x5e2ea8, 0xa * _0x2ec40a * _0x2ec40a * _0x2ec40a * _0x5e2ea8 * _0x5e2ea8, 0xa * _0x2ec40a * _0x2ec40a * _0x5e2ea8 * _0x5e2ea8 * _0x5e2ea8, 0x5 * _0x2ec40a * _0x5e2ea8 * _0x5e2ea8 * _0x5e2ea8 * _0x5e2ea8, _0x5e2ea8 * _0x5e2ea8 * _0x5e2ea8 * _0x5e2ea8 * _0x5e2ea8];
            return _0x565251(_0x5055a0[0x0] * this.pts[0x0].x + _0x5055a0[0x1] * this.pts[0x1].x + _0x5055a0[0x2] * this.pts[0x2].x + _0x5055a0[0x3] * this.pts[0x3].x + _0x5055a0[0x4] * this.pts[0x4].x + _0x5055a0[0x5] * this.pts[0x5].x, _0x5055a0[0x0] * this.pts[0x0].y + _0x5055a0[0x1] * this.pts[0x1].y + _0x5055a0[0x2] * this.pts[0x2].y + _0x5055a0[0x3] * this.pts[0x3].y + _0x5055a0[0x4] * this.pts[0x4].y + _0x5055a0[0x5] * this.pts[0x5].y);
          };
          _0x56535a.BezierN = function (_0x487575) {
            var _0x2f763d = 0x1 - _0x487575;
            var _0x4a24c9 = _0x565251(0x0, 0x0);
            for (var _0x3b45c9 = 0x0; _0x3b45c9 < this.len; _0x3b45c9++) {
              var _0x1045ab = 0x1;
              for (var _0x5a8c11 = 0x0; _0x5a8c11 < this.len - _0x3b45c9 - 0x1; _0x5a8c11++) {
                _0x1045ab *= _0x2f763d;
              }
              for (var _0x3a5f7b = 0x0; _0x3a5f7b < _0x3b45c9; _0x3a5f7b++) {
                _0x1045ab *= _0x487575;
              }
              _0x4a24c9.x += _0x1045ab * this.ptl[_0x3b45c9] * this.pts[_0x3b45c9].x;
              _0x4a24c9.y += _0x1045ab * this.ptl[_0x3b45c9] * this.pts[_0x3b45c9].y;
            }
            return _0x4a24c9;
          };
          return _0x38f07c;
        }();
        _0x2de9d1.Bezier = _0x19d46b;
      })(_0x198dd9 || (_0x198dd9 = {}));
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "391b6CLPVhBEqeFr1f7nxDE", "index", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "6798aSLknVN976z3h/RHRZy", "EM_Define", undefined);
      var _0x11cb74 = _0x297ef0.ccclass;
      var _0x230c48;
      !function (_0x36eeb3) {
        _0x36eeb3[_0x36eeb3.UNSHOW_PREPARE = 0x0] = 'UNSHOW_PREPARE';
        _0x36eeb3[_0x36eeb3.WAIT_READY = 0x1] = 'WAIT_READY';
        _0x36eeb3[_0x36eeb3.PLATE_SHOW = 0x2] = "PLATE_SHOW";
        _0x36eeb3[_0x36eeb3.FEATURE_SHOW = 0x3] = 'FEATURE_SHOW';
        _0x36eeb3[_0x36eeb3.AWARD = 0x4] = "AWARD";
        _0x36eeb3[_0x36eeb3.ROUND_SHOW_END = 0x5] = "ROUND_SHOW_END";
        _0x36eeb3[_0x36eeb3.ROUND_END = 0x6] = "ROUND_END";
        _0x36eeb3[_0x36eeb3.LEVEL_UP = 0x7] = "LEVEL_UP";
        _0x36eeb3[_0x36eeb3.CHECK_SOCKET = 0x8] = "CHECK_SOCKET";
        _0x36eeb3[_0x36eeb3.RESYNC = 0x9] = "RESYNC";
      }(_0x230c48 || (_0x230c48 = {}));
      _0x2cb05a = function (_0x730415) {
        function _0x2a08fc() {
          return _0x730415.apply(this, arguments) || this;
        }
        _0x4a7452(_0x2a08fc, _0x730415);
        _0x2a08fc.OnExit = function () {
          this.AudioClip = {
            'Game_Intro': null,
            'Mg_bgm': null,
            'Link': null,
            'Win': null,
            'Big_Win': null,
            'Big_Win_End': null,
            'ChangeWin': null,
            'Double': null,
            'Fly': null,
            'Spin': null,
            'Reel_Start': null,
            'Reel_Stop': null,
            'Multiplier01': null,
            'Multiplier02': null,
            'Multiplier03': null,
            'Near_Win': null,
            'Wild_Stop': null,
            'Extra_Bet_On': null,
            'DoubleShow_Lv2': null
          };
        };
        return _0x2a08fc;
      }(_0x3127b3);
      _0x2cb05a.Ver = "306";
      _0x2cb05a.SceneID = 0x1426aad;
      _0x2cb05a.GameId = 0x38;
      _0x2cb05a.GameState = _0x3d8e42(_0x230c48);
      _0x2cb05a.BgAudioId = -0x1;
      _0x2cb05a.LINE_NUMBER = 0x5;
      _0x2cb05a.AWARD_ALL_TO_SINGLE = 0x2;
      _0x2cb05a.EXTRA_RATE = [0x1, 1.5];
      _0x2cb05a.NORMAL_SYMBOL_NUMBER = 0xe;
      _0x2cb05a.SPIN_ACK_TYPE = {
        'AT_SUCCESS': 0x0,
        'AT_MONEY_NOT_ENOUGH': 0x1,
        'AT_MONEY_ABNORMAL': 0x2,
        'API_BETONCE_FAIL': 0x7d3
      };
      _0x2cb05a.AWARD_TYPE = {
        'AWARD_TYPE_NON': 0x0,
        'AWARD_TYPE_LINE': 0x1,
        'AWARD_TYPE_ALL_PLATE': 0x2,
        'AWARD_TYPE_MAX': 0x7fff
      };
      _0x2cb05a.AudioFileRoot = "Sound/";
      _0x2cb05a.AudioFilePath = {
        'Game_Intro': _0x2cb05a.AudioFileRoot + 'Guide_Effect',
        'Mg_bgm': _0x2cb05a.AudioFileRoot + "Mg_bgm",
        'Link': _0x2cb05a.AudioFileRoot + "Link",
        'Win': _0x2cb05a.AudioFileRoot + "Win",
        'Big_Win': _0x2cb05a.AudioFileRoot + "Big_Win",
        'Big_Win_End': _0x2cb05a.AudioFileRoot + "BigWin_End",
        'ChangeWin': _0x2cb05a.AudioFileRoot + 'ChangeWin',
        'Double': _0x2cb05a.AudioFileRoot + "Double",
        'Fly': _0x2cb05a.AudioFileRoot + 'Fly',
        'Spin': _0x2cb05a.AudioFileRoot + "Spin",
        'Reel_Start': _0x2cb05a.AudioFileRoot + 'Reel_Start',
        'Reel_Stop': _0x2cb05a.AudioFileRoot + "Reel_Stop",
        'Multiplier01': _0x2cb05a.AudioFileRoot + 'Multiplier01',
        'Multiplier02': _0x2cb05a.AudioFileRoot + 'Multiplier02',
        'Multiplier03': _0x2cb05a.AudioFileRoot + "Multiplier03",
        'Near_Win': _0x2cb05a.AudioFileRoot + 'Near_Win',
        'Wild_Stop': _0x2cb05a.AudioFileRoot + "Wild_Stop",
        'Extra_Bet_On': _0x2cb05a.AudioFileRoot + "Extra_Bet_On",
        'DoubleShow_Lv2': _0x2cb05a.AudioFileRoot + 'DoubleShow_Lv2'
      };
      _0x2cb05a.AudioClip = {
        'Game_Intro': null,
        'Mg_bgm': null,
        'Link': null,
        'Win': null,
        'Big_Win': null,
        'Big_Win_End': null,
        'ChangeWin': null,
        'Double': null,
        'Fly': null,
        'Spin': null,
        'Reel_Start': null,
        'Reel_Stop': null,
        'Multiplier01': null,
        'Multiplier02': null,
        'Multiplier03': null,
        'Near_Win': null,
        'Wild_Stop': null,
        'Extra_Bet_On': null,
        'DoubleShow_Lv2': null
      };
      _0x2cb05a.AckType = {
        'login': 0x0,
        'info': 0xb,
        'spin': 0xc,
        'spinEnd': 0xd,
        'exchangeChips': 0x2,
        'unshow': 0x52,
        'heartBeat': 0x62,
        'serverMsg': 0x63
      };
      _0x2cb05a.LINE_AWARD_SETTING = [{
        'betRate': 0xa,
        'soundName': 'Common_big_win',
        'runScoreTime': 10.5
      }, {
        'betRate': 0x64,
        'soundName': 'Common_mega_win',
        'runScoreTime': 0x10
      }, {
        'betRate': 0xfa,
        'soundName': 'Common_super_win',
        'runScoreTime': 0x15
      }];
      _0x2cb05a.StringKey = {
        'TWK_FEATURES_LEFT': "TWK_FEATURES_LEFT",
        'TWK_FEATURES_RIGHT': "TWK_FEATURES_RIGHT"
      };
      _0x2cb05a.SERVER_RET_TYPE = {
        'SERVER_SUCCESS': 0x0,
        'SERVER_ERROR_SEATE': 0x31f,
        'SERVER_NOUSE': 0x383,
        'SERVER_MAINTAIN': 0x3e6,
        'SERVER_SHUTDOWN': 0x3e7,
        'SERVER_NEED_UID': 0x3e9,
        'SERVER_NEED_LOGIN': 0x3ea,
        'SERVER_TOKEN_ERROR': 0x3eb
      };
      _0x2cb05a.LOGIN_RESULT_TYPE = {
        'LOGIN_SUCCESS': 0x0,
        'LOGIN_FAIL': 0x1,
        'API_VERIFY_FAIL': 0x7d1,
        'API_LOGIN_REPEAT_FAIL': 0x7d2
      };
      _0x2cb05a.HEART_BEAT_STATE = {
        'NOTIFY': 0x61,
        'MAINTAIN': 0x62,
        'CLOSE': 0x63
      };
      _0x2cb05a.FAKE_LENGTH = 0x5ac;
      _0x2cb05a.SYMBOL_LINE = [[_0x565251(0x0, 0x1), _0x565251(0x1, 0x1), _0x565251(0x2, 0x1)], [_0x565251(0x0, 0x0), _0x565251(0x1, 0x0), _0x565251(0x2, 0x0)], [_0x565251(0x0, 0x2), _0x565251(0x1, 0x2), _0x565251(0x2, 0x2)], [_0x565251(0x0, 0x0), _0x565251(0x1, 0x1), _0x565251(0x2, 0x2)], [_0x565251(0x0, 0x2), _0x565251(0x1, 0x1), _0x565251(0x2, 0x0)]];
      _0x2cb05a.AnimEventName = {
        'AnimEvetFunc': "AnimationEvent",
        'Change': "Change",
        'Start': "Sound1",
        'End': "Sound2",
        'RollEnd': 'RollEnd',
        'GameIntro': "GameIntro_Show"
      };
      _0x2cb05a.DelayType = {
        'Normal': 0x0,
        'Get': 0x1,
        'NotGet': 0x2
      };
      _0x2cb05a.ITEM_PATH = "TWK/Plist/Item_card";
      _0x2cb05a.USE_ITEM_REASON = {
        'NORMAL': 0x0,
        'USING': 0x1
      };
      _0x2cb05a.PlateEftOdds = [0x1, 0x3, 0x5, 0xa, 0xf];
      _0x2cb05a.NearWinRate = 0x5;
      _0x2cb05a.ChangeExtraPlate = [[0x7, 0x7, 0x7], [0x6, 0x6, 0x6], [0x5, 0x5, 0x5], [0xc, 0xd, 0xb]];
      _0x2cb05a.FeaturesAck = {
        'info': {
          'PlateSymbol': [[0x6, 0x6, 0x6], [0x6, 0x6, 0x6], [0x6, 0x6, 0x6], [0x9, 0xd, 0xb]],
          'AwardTypeFlag': 0x1,
          'AwardDataVec': [{
            'Symbol': 0x6,
            'Line': 0x0,
            'Win': 0x3c
          }, {
            'Symbol': 0x6,
            'Line': 0x1,
            'Win': 0x3c
          }, {
            'Symbol': 0x6,
            'Line': 0x2,
            'Win': 0x3c
          }, {
            'Symbol': 0x6,
            'Line': 0x3,
            'Win': 0x3c
          }, {
            'Symbol': 0x6,
            'Line': 0x4,
            'Win': 0x3c
          }],
          'Mult': 0xf,
          'TotalWin': 0x12c,
          'AckType': 0x0,
          'ShowIndex': "16213-209180-06600109",
          'NowMoney': 0x4c5117
        }
      };
      var _0x1a2af6 = _0x11cb74(_0x289285 = _0x2cb05a) || _0x289285;
      var _0x58bd84;
      var _0x41ba7a;
      var _0x59222f;
      var _0x38469f;
      var _0x11610a;
      var _0x46e3fb;
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "8cbea5fXylF54LCDyh23V4+", 'BigWin', undefined);
      var _0xa5742d = [{
        'betRate': 0x5,
        'animNames': [],
        'changeTime': [],
        'runningTime': 0x0,
        'lastClip': null
      }, {
        'betRate': 0xf,
        'animNames': [],
        'changeTime': [],
        'runningTime': 0x0,
        'lastClip': null
      }, {
        'betRate': 0x1e,
        'animNames': [],
        'changeTime': [],
        'runningTime': 0x0,
        'lastClip': null
      }];
      var _0x3e1b8c = _0x297ef0.ccclass;
      var _0x258022 = _0x297ef0.property;
      _0x58bd84 = _0x258022({
        'type': _0x1c3d03,
        'tooltip': '動畫'
      });
      _0x41ba7a = _0x258022({
        'type': _0x4457da,
        'tooltip': '贏分'
      });
      _0x38469f = function (_0x157f06) {
        function _0x5e346c() {
          var _0x416faf;
          var _0x23e4b6 = arguments.length;
          var _0x664d7d = new Array(_0x23e4b6);
          for (var _0x36d6cf = 0x0; _0x36d6cf < _0x23e4b6; _0x36d6cf++) {
            _0x664d7d[_0x36d6cf] = arguments[_0x36d6cf];
          }
          _0x1a08d3(_0x416faf = _0x157f06.call.apply(_0x157f06, [this].concat(_0x664d7d)) || this, 'm_anim', _0x11610a, _0x5199ec(_0x416faf));
          _0x1a08d3(_0x416faf, "m_winLabel", _0x46e3fb, _0x5199ec(_0x416faf));
          _0x416faf.m_animName = [{
            'START': "BigWin",
            'END': "BigWin_End",
            'END_TIME': 0x0,
            'CLIP': null
          }, {
            'START': "MegaWin",
            'END': "MegaWin_End",
            'END_TIME': 0x0,
            'CLIP': null
          }, {
            'START': "SuperWin",
            'END': "SuperWin_End",
            'END_TIME': 0x0,
            'CLIP': null
          }];
          _0x416faf.m_win = 0x0;
          _0x416faf.m_showWin = 0x0;
          _0x416faf.m_step = 0x0;
          _0x416faf.m_setting = null;
          _0x416faf.m_isShowAward = false;
          _0x416faf.m_winAnimState = null;
          _0x416faf.m_changeTime = 0x0;
          _0x416faf.m_endCb = null;
          _0x416faf.m_isEnd = true;
          _0x416faf.m_soundId = null;
          _0x416faf.m_isFirst = true;
          _0x416faf.m_rollSoundId = null;
          return _0x416faf;
        }
        _0x4a7452(_0x5e346c, _0x157f06);
        var _0x449be9 = _0x5e346c.prototype;
        _0x449be9.Init = function () {
          this.m_animName[0x0].END_TIME = _0x3d013c.plus(0x7, _0x3d013c.divide(0x8, 0x3c));
          this.m_animName[0x1].END_TIME = _0x3d013c.plus(0x8, _0x3d013c.divide(0xa, 0x3c));
          this.m_animName[0x2].END_TIME = _0x3d013c.plus(0x7, _0x3d013c.divide(0x32, 0x3c));
          var _0x3c5c46 = this.m_anim.clips;
          for (var _0x4e0dd5 = 0x0; _0x4e0dd5 < _0x3c5c46.length; _0x4e0dd5++) {
            for (var _0xa33f37 = 0x0; _0xa33f37 < this.m_animName.length; _0xa33f37++) {
              if (this.m_animName[_0xa33f37].START === _0x3c5c46[_0x4e0dd5].name) {
                this.m_animName[_0xa33f37].END_TIME = _0x3d013c.GetAnimEventTime(_0x3c5c46[_0x4e0dd5], _0x1a2af6.AnimEventName.AnimEvetFunc, _0x1a2af6.AnimEventName.Change);
                this.m_animName[_0xa33f37].CLIP = _0x3c5c46[_0x4e0dd5];
                break;
              }
            }
          }
          for (var _0x11033f = 0x0; _0x11033f < _0xa5742d.length; _0x11033f++) {
            var _0x47d79a = 0x0;
            for (var _0x3aa7a0 = 0x0; _0x3aa7a0 <= _0x11033f; _0x3aa7a0++) {
              _0x47d79a += this.m_animName[_0x3aa7a0].END_TIME;
              _0xa5742d[_0x11033f].changeTime.push(this.m_animName[_0x3aa7a0].END_TIME);
              _0xa5742d[_0x11033f].animNames.push(this.m_animName[_0x3aa7a0].START);
              _0xa5742d[_0x11033f].lastClip = this.m_animName[_0x11033f].CLIP;
            }
            _0xa5742d[_0x11033f].runningTime = _0x47d79a;
          }
        };
        _0x449be9.CheckSetting = function (_0x307387, _0x236199) {
          var _0x4e5005 = _0x3d013c.divide(_0x307387, _0x236199);
          for (var _0x12e5b2 = _0xa5742d.length - 0x1; _0x12e5b2 >= 0x0; _0x12e5b2--) {
            if (_0x4e5005 >= _0xa5742d[_0x12e5b2].betRate) {
              this.m_setting = JSON.parse(JSON.stringify(_0xa5742d[_0x12e5b2]));
              this.m_setting.lastClip = _0xa5742d[_0x12e5b2].lastClip;
              return true;
            }
          }
          return false;
        };
        _0x449be9.ShowWin = function (_0x553580, _0x664518, _0x51d1b8, _0x38b8f1) {
          this.m_isEnd = false;
          this.m_setting = null;
          this.CheckSetting(_0x553580, _0x51d1b8);
          if (this.m_setting) {
            this.node.active = true;
            this.node.getComponent(_0x483679).opacity = 0xff;
            this.m_endCb = _0x38b8f1;
            this.m_isFirst = true;
            this.m_isShowAward = true;
            this.m_showWin = 0x0;
            this.m_win = _0x553580;
            this.m_step = _0x3d013c.divide(this.m_win, this.m_setting.runningTime);
            this.m_soundId = _0x3a77d3.Play(_0x1a2af6.AudioClip.Big_Win);
            this.ShowNextLvl();
          } else {
            this.node.active = false;
            this.m_isEnd = true;
            if (_0x38b8f1) {
              _0x38b8f1();
            }
          }
        };
        _0x449be9.ShowNextLvl = function () {
          var _0x4888ce = this;
          if (this.m_setting.animNames.length > 0x0) {
            var _0x4dd9ff = this.m_setting.animNames.shift();
            this.m_anim.play(_0x4dd9ff);
            this.m_winAnimState = this.m_anim.getState(_0x4dd9ff);
            this.m_changeTime = this.m_setting.changeTime.shift();
            _0x3ad8f0(this.node).delay(this.m_changeTime).call(function () {
              _0x4888ce.ShowNextLvl();
            }).start();
            if (this.m_isFirst) {
              this.m_isFirst = false;
            } else {
              var _0x5da9bd = _0x3d013c.GetAnimEventTime(this.m_winAnimState.clip, _0x1a2af6.AnimEventName.AnimEvetFunc, _0x1a2af6.AnimEventName.Start);
              _0x3ad8f0(this.node).delay(_0x5da9bd).call(function () {
                _0x3a77d3.Play(_0x1a2af6.AudioClip.ChangeWin, false);
              }).start();
            }
          } else {
            this.End();
          }
        };
        _0x449be9.End = function () {
          var _0x3d90f7 = _0x219aea(_0xb84dc1().mark(function _0x98c796() {
            var _0x4a25d4;
            var _0x581ec8;
            var _0x4485a4;
            return _0xb84dc1().wrap(function (_0x23038d) {
              for (;;) {
                switch (_0x23038d.prev = _0x23038d.next) {
                  case 0x0:
                    this.m_isEnd = true;
                    this.m_isShowAward = false;
                    if (null !== this.m_rollSoundId) {
                      _0x3a77d3.Stop(this.m_rollSoundId);
                      this.m_rollSoundId = null;
                    }
                    this.m_winLabel.string = _0x3d013c.FormatNumberThousands(_0x3d013c.strip(this.m_win), _0x3d013c.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
                    _0x4a25d4 = _0x3d013c.GetAnimEventTime(this.m_setting.lastClip, _0x1a2af6.AnimEventName.AnimEvetFunc, _0x1a2af6.AnimEventName.End);
                    _0x581ec8 = _0x4a25d4 - this.m_changeTime;
                    _0x4485a4 = this.m_winAnimState.duration - _0x4a25d4;
                    _0x23038d.next = 0x9;
                    return _0x534918.Wait(this, _0x581ec8);
                  case 0x9:
                    if (this.m_soundId) {
                      _0x3a77d3.Stop(this.m_soundId);
                      this.m_soundId = null;
                    }
                    _0x3a77d3.Play(_0x1a2af6.AudioClip.Big_Win_End);
                    _0x23038d.next = 0xd;
                    return _0x534918.Wait(this, _0x4485a4);
                  case 0xd:
                    if (null !== this.m_soundId) {
                      _0x3a77d3.Stop(this.m_soundId);
                      this.m_soundId = null;
                    }
                    if (this.m_endCb) {
                      this.m_endCb();
                    }
                    this.m_endCb = null;
                    this.node.active = false;
                  case 0x11:
                  case 'end':
                    return _0x23038d.stop();
                }
              }
            }, _0x98c796, this);
          }));
          return function () {
            return _0x3d90f7.apply(this, arguments);
          };
        }();
        _0x449be9.Stop = function () {
          var _0x4e0352 = this;
          if (!this.m_isEnd && this.m_winAnimState && this.m_winAnimState.isPlaying) {
            if (0x0 === this.m_setting.animNames.length) {
              var _0x331133 = this.m_winAnimState.time;
              this.m_changeTime = _0x3d013c.GetAnimEventTime(this.m_setting.lastClip, _0x1a2af6.AnimEventName.AnimEvetFunc, _0x1a2af6.AnimEventName.Change);
              if (_0x331133 < this.m_changeTime) {
                this.m_anim.clips.forEach(function (_0x102098) {
                  var _0x3edc57 = _0x4e0352.m_anim.getState(_0x102098.name);
                  _0x3edc57.setTime(_0x4e0352.m_changeTime);
                  _0x3edc57.sample();
                });
                _0x57e446.stopAllByTarget(this.node);
              }
            } else {
              this.m_anim.stop();
              for (var _0x473497 = this.m_setting.animNames.shift(); this.m_setting.animNames.length > 0x0;) {
                _0x473497 = this.m_setting.animNames.shift();
              }
              for (this.m_changeTime = this.m_setting.changeTime.shift(); this.m_setting.changeTime.length > 0x0;) {
                this.m_changeTime = this.m_setting.changeTime.shift();
              }
              this.m_anim.play(_0x473497);
              this.m_winAnimState = this.m_anim.getState(_0x473497);
              this.m_winAnimState.setTime(this.m_changeTime);
              this.m_winAnimState.sample();
              _0x57e446.stopAllByTarget(this.node);
            }
            this.End();
          }
        };
        _0x449be9.update = function (_0x1b9ea4) {
          if (this.m_isShowAward) {
            this.m_showWin += this.m_step * _0x1b9ea4;
            if (this.m_showWin >= this.m_win) {
              this.m_showWin = this.m_win;
              this.m_isShowAward = false;
              if (null !== this.m_rollSoundId) {
                _0x3a77d3.Stop(this.m_rollSoundId);
                this.m_rollSoundId = null;
              }
            }
            this.m_winLabel.string = _0x3d013c.FormatNumberThousands(_0x3d013c.strip(this.m_showWin), _0x3d013c.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          }
        };
        return _0x5e346c;
      }(_0x3127b3);
      _0x11610a = _0x159f02(_0x38469f.prototype, "m_anim", [_0x58bd84], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x46e3fb = _0x159f02(_0x38469f.prototype, 'm_winLabel', [_0x41ba7a], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x2bc3d5 = _0x3e1b8c(_0x59222f = _0x38469f) || _0x59222f;
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "f2543EGk2RB5qNf0tEN+22e", 'DataStructure', undefined);
      var _0x143bca;
      var _0x5018d1;
      var _0x4083a8;
      var _0x3c6f50;
      var _0x21557e;
      var _0x40a878;
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "20386Vl0sVGoJg6LWQvSg+u", 'SlotReels', undefined);
      var _0xaa6bb2 = _0x297ef0.ccclass;
      var _0x2cd78b = _0x297ef0.property;
      _0x143bca = _0x2cd78b(_0x458427);
      _0x5018d1 = _0x2cd78b({
        'type': _0x4fc6ef,
        'tooltip': "NearWin特效"
      });
      _0x3c6f50 = function (_0x163871) {
        function _0x18b29e() {
          var _0x3ad675;
          var _0x27103d = arguments.length;
          var _0x2cae63 = new Array(_0x27103d);
          for (var _0x2445c2 = 0x0; _0x2445c2 < _0x27103d; _0x2445c2++) {
            _0x2cae63[_0x2445c2] = arguments[_0x2445c2];
          }
          _0x1a08d3(_0x3ad675 = _0x163871.call.apply(_0x163871, [this].concat(_0x2cae63)) || this, "m_symbolSpriteFrames", _0x21557e, _0x5199ec(_0x3ad675));
          _0x1a08d3(_0x3ad675, "m_nearWinNode", _0x40a878, _0x5199ec(_0x3ad675));
          _0x3ad675.m_gameView = null;
          _0x3ad675.m_symbolSize = null;
          _0x3ad675.m_viewSize = null;
          _0x3ad675.m_reelPositionOffset = [_0x565251(-0x5, 0x0), _0x565251(0x0, 0x0), _0x565251(0x3, 0x0), _0x565251(0x7, 0x0)];
          _0x3ad675.m_symbol = new Array();
          _0x3ad675.m_plateInfo = [[0x0, 0x0, 0x0], [0x0, 0x0, 0x0], [0x0, 0x0, 0x0], [0x8, 0x9, 0xa]];
          _0x3ad675.m_platePool = [[0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7], [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7], [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7], [0x8, 0x9, 0xa, 0xb, 0xc, 0xd]];
          _0x3ad675.m_upperSymbol = new Array();
          _0x3ad675.m_lowerSymbol = new Array();
          _0x3ad675.m_reelStopTime = new Array();
          _0x3ad675.m_reelPreTime = new Array();
          _0x3ad675.m_isChangeSymbol = new Array();
          _0x3ad675.m_isChangeToFinalSymbol = new Array();
          _0x3ad675.m_time = 0x0;
          _0x3ad675.m_stopTime = 0x0;
          _0x3ad675.m_riseTime = 0x0;
          _0x3ad675.m_spinBufferTime01 = 0.1;
          _0x3ad675.m_spinBufferTime02 = 0.2;
          _0x3ad675.m_spinSpeed = 0.2;
          _0x3ad675.m_spinMultSpeed = 0.35;
          _0x3ad675.m_upLength = 0x0;
          _0x3ad675.m_numberOfSymbol = 0x0;
          _0x3ad675.m_downLength = 0x14;
          _0x3ad675.m_timesOfBaseSpin = 0x1;
          _0x3ad675.m_spinIntervalTimes = 0x1;
          _0x3ad675.m_spinDelayTime = 0x0;
          _0x3ad675.m_hardStopIntervalTime = 0.3;
          _0x3ad675.m_isStop = false;
          _0x3ad675.m_isClickStopBtn = false;
          _0x3ad675.m_playStopSound = null;
          _0x3ad675.m_isPlaySound = [false, false, false, false];
          _0x3ad675.m_reelSoundId = null;
          _0x3ad675.m_lockColumn = new Array();
          _0x3ad675.m_errorMsgCount = false;
          _0x3ad675.m_isNearWin = false;
          _0x3ad675.m_nearWinPlayed = false;
          _0x3ad675.m_nearWinAudioId = 0x0;
          _0x3ad675.m_hasWild = [false, false, false];
          _0x3ad675.m_hardStopSound = false;
          return _0x3ad675;
        }
        _0x4a7452(_0x18b29e, _0x163871);
        var _0x5c2eb6 = _0x18b29e.prototype;
        _0x5c2eb6.onLoad = function () {
          var _0x16236e = this;
          this.m_spinSpeed = _0x534918.IsSubmit ? 0.25 : 0.2;
          this.m_spinMultSpeed = _0x534918.IsSubmit ? 0.4 : 0.35;
          this.m_downLength = _0x534918.IsSubmit ? 0x19 : 0x14;
          this.m_timesOfBaseSpin = _0x534918.IsSubmit ? 0x4 : 0x1;
          this.m_spinDelayTime = _0x534918.IsSubmit ? 0.3 : 0x0;
          var _0x39ff93 = function () {
            var _0x3949ce = _0x2ecc2b.TempoSetting.FortuneGems;
            _0x16236e.m_riseTime = _0x3949ce.BASE.RISE_TIME;
            _0x16236e.m_upLength = _0x3949ce.BASE.UP_LENGTH;
            _0x16236e.m_spinBufferTime01 = _0x3949ce.BASE.SPIN_BUFFER_TIME_01;
            _0x16236e.m_spinBufferTime02 = _0x3949ce.BASE.SPIN_BUFFER_TIME_02;
            _0x16236e.m_downLength = _0x3949ce.BASE.DOWN_LENGTH;
            _0x16236e.m_spinSpeed = _0x3949ce.BASE.SPIN_SPEED;
            _0x16236e.m_spinMultSpeed = _0x3949ce.BASE.SPIN_MULT_SPEED;
            _0x16236e.m_timesOfBaseSpin = _0x3949ce.BASE.TIMES_OF_BASE_SPIN;
            _0x16236e.m_spinIntervalTimes = _0x3949ce.BASE.SPIN_INTERVAL_TIMES;
            _0x16236e.m_spinDelayTime = _0x3949ce.BASE.SPIN_DELAY_TIME;
            _0x16236e.m_hardStopIntervalTime = _0x3949ce.BASE.HARD_STOP_INTERVAL_TIME;
          };
          _0x39ff93();
          _0x2ecc2b.AddCb(_0x39ff93);
          this.m_viewSize = this.node.getComponent(_0x5e283f).contentSize;
          this.m_symbolSize = new _0x46c9e5(this.m_viewSize.width / 0x4, this.m_viewSize.height / 0x3);
          for (var _0x58b09e = 0x0; _0x58b09e < 0x4; _0x58b09e++) {
            this.m_lockColumn.push(false);
            this.m_reelStopTime.push(null);
            this.m_reelPreTime.push(null);
            var _0x3e2cd6 = new Array();
            for (var _0x26ebc1 = 0x0; _0x26ebc1 < 0x3; _0x26ebc1++) {
              var _0x20ef23 = Math.floor(Math.random() * this.m_platePool[_0x58b09e].length) % this.m_platePool[_0x58b09e].length;
              var _0x349bc1 = new _0x4fc6ef();
              _0x349bc1.addComponent(_0x1cbbb9);
              this.node.addChild(_0x349bc1);
              _0x349bc1.name = String(this.m_numberOfSymbol);
              this.m_numberOfSymbol += 0x1;
              this.m_isChangeToFinalSymbol.push(false);
              _0x349bc1.getComponent(_0x1cbbb9).spriteFrame = this.m_symbolSpriteFrames[this.m_platePool[_0x58b09e][_0x20ef23]];
              if (0x7 == this.m_platePool[_0x58b09e][_0x20ef23]) {
                switch (_0x26ebc1) {
                  case 0x0:
                    _0x3d013c.SetZIndex(_0x349bc1, 0x5a);
                    break;
                  case 0x1:
                    _0x3d013c.SetZIndex(_0x349bc1, 0x5f);
                    break;
                  case 0x2:
                    _0x3d013c.SetZIndex(_0x349bc1, 0x64);
                }
              } else {
                _0x3d013c.SetZIndex(_0x349bc1, 0x0);
              }
              _0x3e2cd6.push(_0x349bc1);
              var _0x1b595b = this.m_symbolSize.width * (_0x58b09e + 0.5) + this.m_reelPositionOffset[_0x58b09e].x - this.m_viewSize.width / 0x2;
              var _0x5623c8 = this.m_symbolSize.height * (0x2 - _0x26ebc1 + 0.5) + this.m_reelPositionOffset[_0x58b09e].y - this.m_viewSize.height / 0x2;
              _0x349bc1.position = _0x565251(_0x1b595b, _0x5623c8);
              this.m_plateInfo[_0x58b09e][_0x26ebc1] = this.m_platePool[_0x58b09e][_0x20ef23];
            }
            this.m_symbol.push(_0x3e2cd6);
          }
          this.m_gameView.OldPlate = this.m_plateInfo;
          for (var _0x84bb6b = 0x0; _0x84bb6b < 0x4; _0x84bb6b++) {
            var _0x479a34 = this.m_symbolSize.width * (_0x84bb6b + 0.5) + this.m_reelPositionOffset[_0x84bb6b].x - this.m_viewSize.width / 0x2;
            var _0x3afa06 = this.m_symbolSize.height * 3.5 + this.m_reelPositionOffset[_0x84bb6b].y - this.m_viewSize.height / 0x2;
            var _0x3d5c36 = Math.floor(Math.random() * this.m_platePool[_0x84bb6b].length) % this.m_platePool[_0x84bb6b].length;
            if (0x7 == _0x3d5c36) {
              _0x3d5c36 = 0x6;
            }
            var _0xe6e7f6 = new _0x4fc6ef();
            var _0x577c3a = _0xe6e7f6.addComponent(_0x1cbbb9);
            this.node.addChild(_0xe6e7f6);
            _0xe6e7f6.name = String(this.m_numberOfSymbol + _0x84bb6b);
            _0xe6e7f6.getComponent(_0x1cbbb9).spriteFrame = this.m_symbolSpriteFrames[this.m_platePool[_0x84bb6b][_0x3d5c36]];
            _0xe6e7f6.position = _0x565251(_0x479a34, _0x3afa06);
            this.m_upperSymbol.push(_0x577c3a);
            _0x3afa06 = -0.5 * this.m_symbolSize.height + this.m_reelPositionOffset[_0x84bb6b].y - this.m_viewSize.height / 0x2;
            _0x3d5c36 = Math.floor(Math.random() * this.m_platePool[_0x84bb6b].length) % this.m_platePool[_0x84bb6b].length;
            var _0x870f8c = new _0x4fc6ef();
            var _0x302ca7 = _0x870f8c.addComponent(_0x1cbbb9);
            this.node.addChild(_0x870f8c);
            _0x870f8c.name = String(-(_0x84bb6b + 0x1));
            _0x870f8c.getComponent(_0x1cbbb9).spriteFrame = this.m_symbolSpriteFrames[this.m_platePool[_0x84bb6b][_0x3d5c36]];
            _0x870f8c.position = _0x565251(_0x479a34, _0x3afa06);
            this.m_lowerSymbol.push(_0x302ca7);
          }
        };
        _0x5c2eb6.Init = function (_0x8de3ce) {
          this.m_gameView = _0x8de3ce;
          this.m_gameView.OldRealPlate = this.m_plateInfo;
        };
        _0x5c2eb6.ShowPlate = function (_0xdab1dc) {
          for (var _0x3305e0 = 0x0; _0x3305e0 < 0x4; _0x3305e0++) {
            for (var _0x319a04 = 0x0; _0x319a04 < 0x3; _0x319a04++) {
              this.m_symbol[_0x3305e0][_0x319a04].setScale(_0xdab1dc, _0xdab1dc);
            }
          }
        };
        _0x5c2eb6.FirstShowPlate = function () {
          var _0x23bf5a = this;
          var _0x4a3523 = [[_0x6cd26b(0x0, 0x0)], [_0x6cd26b(0x0, 0x1), _0x6cd26b(0x1, 0x0)], [_0x6cd26b(0x0, 0x2), _0x6cd26b(0x1, 0x1), _0x6cd26b(0x2, 0x0)], [_0x6cd26b(0x1, 0x2), _0x6cd26b(0x2, 0x1), _0x6cd26b(0x3, 0x0)], [_0x6cd26b(0x2, 0x2), _0x6cd26b(0x3, 0x1)], [_0x6cd26b(0x3, 0x2)]];
          var _0xebd098 = 0x0;
          _0x3ad8f0(this.node).repeat(_0x4a3523.length, _0x3ad8f0().call(function () {
            _0x23bf5a.ShowSymbol(_0x4a3523[_0xebd098]);
            _0xebd098++;
          }).delay(0.08)).start();
        };
        _0x5c2eb6.ShowSymbol = function (_0x5abc6c) {
          for (var _0xbcaa28 = 0x0; _0xbcaa28 < _0x5abc6c.length; _0xbcaa28++) {
            var _0x487bbb = _0x5abc6c[_0xbcaa28].x;
            var _0x120e72 = _0x5abc6c[_0xbcaa28].y;
            _0x3ad8f0(this.m_symbol[_0x487bbb][_0x120e72]).to(0.25, {
              'scale': _0x565251(1.2, 1.2, 0x1)
            }).to(0.25, {
              'scale': _0x565251(0x1, 0x1, 0x1)
            }).start();
          }
        };
        _0x5c2eb6.FirstShowPlateLite = function () {
          for (var _0x2aefe9 = 0x0; _0x2aefe9 < 0x4; _0x2aefe9++) {
            for (var _0x4cebf5 = 0x0; _0x4cebf5 < 0x3; _0x4cebf5++) {
              _0x3ad8f0(this.m_symbol[_0x2aefe9][_0x4cebf5]).to(0x0, {
                'scale': _0x565251(0x1, 0x1, 0x1)
              }).start();
            }
          }
        };
        _0x5c2eb6.SetPlateSymbol = function (_0x192863, _0x4cd00b) {
          if (undefined === _0x4cd00b) {
            _0x4cd00b = 0x4;
          }
          if (0x0 == _0x192863.length) {
            for (var _0x5c3d32 = 0x0; _0x5c3d32 < 0x4; _0x5c3d32++) {
              this.m_lockColumn[_0x5c3d32] = false;
              this.m_reelStopTime[_0x5c3d32] = null;
              this.m_reelPreTime[_0x5c3d32] = null;
              for (var _0x237d54 = 0x0; _0x237d54 < 0x3; _0x237d54++) {
                this.m_symbol[_0x5c3d32][_0x237d54].getComponent(_0x1cbbb9).spriteFrame = this.m_symbolSpriteFrames[_0x237d54];
                var _0xb024ca = this.m_symbolSize.width * (_0x5c3d32 + 0.5) + this.m_reelPositionOffset[_0x5c3d32].x - this.m_viewSize.width / 0x2;
                var _0x844262 = this.m_symbolSize.height * (0x2 - _0x237d54 + 0.5) + this.m_reelPositionOffset[_0x5c3d32].y - this.m_viewSize.height / 0x2;
                this.m_symbol[_0x5c3d32][_0x237d54].position = _0x565251(_0xb024ca, _0x844262);
              }
            }
          } else {
            for (var _0x18f352 = 0x0; _0x18f352 < _0x4cd00b; _0x18f352++) {
              this.m_lockColumn[_0x18f352] = false;
              this.m_reelStopTime[_0x18f352] = null;
              this.m_reelPreTime[_0x18f352] = null;
              for (var _0x183bd2 = 0x0; _0x183bd2 < 0x3; _0x183bd2++) {
                var _0x413aca = _0x192863[_0x18f352][_0x183bd2];
                var _0x152dbc = this.m_symbolSpriteFrames[_0x413aca];
                this.m_symbol[_0x18f352][_0x183bd2].getComponent(_0x1cbbb9).spriteFrame = _0x152dbc;
                var _0x3db717 = this.m_symbolSize.width * (_0x18f352 + 0.5) + this.m_reelPositionOffset[_0x18f352].x - this.m_viewSize.width / 0x2;
                var _0x1bc531 = this.m_symbolSize.height * (0x2 - _0x183bd2 + 0.5) + this.m_reelPositionOffset[_0x18f352].y - this.m_viewSize.height / 0x2;
                this.m_symbol[_0x18f352][_0x183bd2].position = _0x565251(_0x3db717, _0x1bc531);
                this.m_symbol[_0x18f352][_0x183bd2].active = true;
                if (0x7 == _0x413aca) {
                  switch (_0x183bd2) {
                    case 0x0:
                      _0x3d013c.SetZIndex(this.m_symbol[_0x18f352][_0x183bd2], 0x5a);
                      break;
                    case 0x1:
                      _0x3d013c.SetZIndex(this.m_symbol[_0x18f352][_0x183bd2], 0x5f);
                      break;
                    case 0x2:
                      _0x3d013c.SetZIndex(this.m_symbol[_0x18f352][_0x183bd2], 0x64);
                  }
                } else {
                  _0x3d013c.SetZIndex(this.m_symbol[_0x18f352][_0x183bd2], 0x0);
                }
              }
            }
          }
          for (var _0x28e284 = 0x0; _0x28e284 < 0x4; _0x28e284++) {
            var _0x3969c4 = this.m_symbolSize.width * (_0x28e284 + 0.5) + this.m_reelPositionOffset[_0x28e284].x - this.m_viewSize.width / 0x2;
            var _0xe0a8f4 = this.m_symbolSize.height * 3.5 + this.m_reelPositionOffset[_0x28e284].y - this.m_viewSize.height / 0x2;
            this.m_upperSymbol[_0x28e284].node.setPosition(_0x3969c4, _0xe0a8f4);
            _0xe0a8f4 = -0.5 * this.m_symbolSize.height + this.m_reelPositionOffset[_0x28e284].y - this.m_viewSize.height / 0x2;
            this.m_lowerSymbol[_0x28e284].node.setPosition(_0x3969c4, _0xe0a8f4);
          }
        };
        _0x5c2eb6.StartSpin = function (_0x891ca9) {
          if (undefined === _0x891ca9) {
            _0x891ca9 = true;
          }
          this.m_time = 0x0;
          this.m_stopTime = 0x0;
          this.m_errorMsgCount = false;
          this.m_isStop = false;
          this.m_isClickStopBtn = false;
          this.m_isPlaySound = [false, false, false, false, false];
          this.m_hasWild = [false, false, false];
          this.m_hardStopSound = false;
          this.m_nearWinPlayed = false;
          this.SetUpAndDownSymbolActive(true);
          if (_0x891ca9) {
            for (var _0x4bc709 = 0x0; _0x4bc709 < 0x4; _0x4bc709++) {
              this.m_lockColumn[_0x4bc709] = false;
            }
          }
          for (var _0x514a9b = 0x0; _0x514a9b < 0x4; _0x514a9b++) {
            this.m_reelStopTime[_0x514a9b] = null;
            this.m_reelPreTime[_0x514a9b] = null;
          }
          for (var _0x4d7c43 = 0x0; _0x4d7c43 < 0x4; _0x4d7c43++) {
            if (!this.m_lockColumn[_0x4d7c43]) {
              for (var _0x176cff = 0x0; _0x176cff < 0x3; _0x176cff++) {
                this.m_symbol[_0x4d7c43][_0x176cff].active = true;
              }
            }
          }
          for (var _0xda6900 = 0x0; _0xda6900 < this.m_isChangeToFinalSymbol.length; _0xda6900++) {
            this.m_isChangeToFinalSymbol[_0xda6900] = false;
          }
        };
        _0x5c2eb6.SetIsClickStopBtn = function () {
          this.m_isClickStopBtn = true;
          if (0x0 != this.m_stopTime) {
            var _0xbafa04 = Math.floor(this.m_time / this.m_spinSpeed);
            var _0x55eab3 = _0x2ecc2b.TempoSetting.FortuneGems.SPEED_UP_STOP_TIME(0x4, this.m_time);
            if (_0x55eab3 < this.m_stopTime) {
              this.m_stopTime = _0x3d013c.strip(_0x55eab3);
            }
            var _0x387c43 = (_0xbafa04 + 0x1) * this.m_spinSpeed;
            for (var _0x2ca2c4 = 0x0; _0x2ca2c4 < 0x4; _0x2ca2c4++) {
              if (this.m_reelStopTime[_0x2ca2c4] > _0x387c43) {
                this.m_reelStopTime[_0x2ca2c4] = _0x3d013c.strip(_0x387c43);
                this.m_reelPreTime[_0x2ca2c4] = _0xbafa04 * this.m_spinSpeed;
              }
            }
          }
        };
        _0x5c2eb6.Spin = function (_0x18ccfa) {
          this.m_time = _0x3d013c.strip(this.m_time + _0x18ccfa);
          if (!this.m_isStop) {
            this.Spin_RealSpinMultiple(_0x18ccfa);
            if (this.m_time >= this.m_stopTime && 0x0 != this.m_stopTime && this.IsAllSymbolChangeToRight()) {
              this.m_isStop = true;
              if (this.m_reelSoundId) {
                this.m_reelSoundId = null;
              }
            }
          }
        };
        _0x5c2eb6.Spin_RealSpinMultiple = function (_0x2bfbdd) {
          this.m_symbolSize.height;
          for (var _0x3416bb = 0x0; _0x3416bb < 0x4; _0x3416bb++) {
            var _0x3ab84b = 0x3 == _0x3416bb ? this.m_spinMultSpeed : this.m_spinSpeed;
            var _0x3d14af = this.m_time;
            var _0x2c2898 = this.m_reelStopTime[_0x3416bb];
            var _0x43d7d4 = this.m_reelPreTime[_0x3416bb];
            var _0x1184cb = this.m_riseTime * 0x4;
            for (var _0x8bba5 = 0x0; _0x8bba5 < 0x3; _0x8bba5++) {
              var _0x4c0bbe = this.m_symbolSize.width * (_0x3416bb + 0.5) + this.m_reelPositionOffset[_0x3416bb].x - this.m_viewSize.width / 0x2;
              var _0x5612d3 = this.m_symbolSize.height * (2 - _0x8bba5 + 0.5) + this.m_reelPositionOffset[_0x3416bb].y - this.m_viewSize.height / 0x2;
              this.m_symbolSize.height;
              if (_0x3d14af < this.m_riseTime * _0x3416bb) {
                ;
              } else {
                if (_0x3d14af < this.m_riseTime * (_0x3416bb + 0x1)) {
                  var _0x220fd0 = (_0x3d14af - this.m_riseTime * _0x3416bb) / this.m_riseTime * this.m_upLength;
                  this.m_symbol[_0x3416bb][_0x8bba5].position = _0x565251(_0x4c0bbe, _0x5612d3 + _0x220fd0);
                } else {
                  if (_0x3d14af < _0x1184cb) {
                    this.m_symbol[_0x3416bb][_0x8bba5].position = _0x565251(_0x4c0bbe, _0x5612d3 + this.m_upLength);
                  } else {
                    if (null == _0x2c2898 || _0x3d14af < _0x43d7d4 + _0x1184cb) {
                      var _0xbef5aa = (_0x3d14af - _0x1184cb) % _0x3ab84b / _0x3ab84b * this.m_symbolSize.height * 5;
                      var _0x1eb24a = this.GetMovelength(_0xbef5aa, this.m_symbolSize.height * (0x3 - _0x8bba5 + 0.5), this.m_symbolSize.height * 5, _0x3416bb, this.m_symbol[_0x3416bb][_0x8bba5].name, this.m_symbol[_0x3416bb][_0x8bba5], false);
                      this.m_symbol[_0x3416bb][_0x8bba5].position = _0x565251(_0x4c0bbe, _0x5612d3 - _0x1eb24a);
                    } else {
                      if (_0x3d14af < _0x2c2898 + _0x1184cb) {
                        var _0x4b9932 = (_0x3d14af - _0x1184cb) % _0x3ab84b / _0x3ab84b * this.m_symbolSize.height * 5;
                        var _0x72fb0b = this.GetMovelength(_0x4b9932, this.m_symbolSize.height * (0x3 - _0x8bba5 + 0.5), this.m_symbolSize.height * 5, _0x3416bb, this.m_symbol[_0x3416bb][_0x8bba5].name, this.m_symbol[_0x3416bb][_0x8bba5], false);
                        this.m_symbol[_0x3416bb][_0x8bba5].position = _0x565251(_0x4c0bbe, _0x5612d3 - _0x72fb0b);
                      } else {
                        if (_0x3d14af < _0x2c2898 + _0x1184cb + this.m_spinBufferTime01) {
                          this.CheckPlayStopSound(_0x3416bb, _0x8bba5);
                          var _0x181108 = (_0x3d14af - _0x2c2898 - _0x1184cb) / this.m_spinBufferTime01 * this.m_downLength;
                          this.m_symbol[_0x3416bb][_0x8bba5].setPosition(_0x4c0bbe, _0x5612d3 - _0x181108);
                          if (this.m_isClickStopBtn) {
                            this.CheckChangeToFinalSymbol(_0x3416bb, this.m_symbol[_0x3416bb][_0x8bba5].name, this.m_symbol[_0x3416bb][_0x8bba5], true);
                          }
                        } else {
                          if (_0x3d14af < _0x2c2898 + _0x1184cb + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
                            this.CheckPlayStopSound(_0x3416bb, _0x8bba5);
                            var _0x5956f6 = (_0x3d14af - _0x2c2898 - _0x1184cb - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
                            this.m_symbol[_0x3416bb][_0x8bba5].setPosition(_0x4c0bbe, _0x5612d3 - this.m_downLength + _0x5956f6);
                            if (this.m_isClickStopBtn) {
                              this.CheckChangeToFinalSymbol(_0x3416bb, this.m_symbol[_0x3416bb][_0x8bba5].name, this.m_symbol[_0x3416bb][_0x8bba5], true);
                            }
                          } else {
                            this.CheckChangeToFinalSymbol(_0x3416bb, this.m_symbol[_0x3416bb][_0x8bba5].name, this.m_symbol[_0x3416bb][_0x8bba5], true);
                            this.CheckPlayStopSound(_0x3416bb, _0x8bba5);
                            this.CheckNearWin();
                            this.m_symbol[_0x3416bb][_0x8bba5].position = _0x565251(_0x4c0bbe, _0x5612d3);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            var _0x2a2706 = this.m_symbolSize.width * (_0x3416bb + 0.5) + this.m_reelPositionOffset[_0x3416bb].x - this.m_viewSize.width / 0x2;
            var _0x3fa291 = this.m_symbolSize.height * 3.5 + this.m_reelPositionOffset[_0x3416bb].y - this.m_viewSize.height / 0x2;
            if (_0x3d14af < this.m_riseTime * _0x3416bb) {
              ;
            } else {
              if (_0x3d14af < this.m_riseTime * (_0x3416bb + 0x1)) {
                var _0x4a2fae = (_0x3d14af - this.m_riseTime * _0x3416bb) / this.m_riseTime * this.m_upLength;
                this.m_upperSymbol[_0x3416bb].node.setPosition(_0x2a2706, _0x3fa291 + _0x4a2fae);
              } else {
                if (_0x3d14af < _0x1184cb) {
                  this.m_upperSymbol[_0x3416bb].node.setPosition(_0x2a2706, _0x3fa291 + this.m_upLength);
                } else {
                  if (null == _0x2c2898 || _0x3d14af < _0x2c2898 + _0x1184cb) {
                    var _0x4f854e = (_0x3d14af - _0x1184cb) % _0x3ab84b / _0x3ab84b * this.m_symbolSize.height * 5;
                    var _0x2b50dd = this.GetMovelength(_0x4f854e, this.m_symbolSize.height * 4, this.m_symbolSize.height * 5, _0x3416bb, String(this.m_numberOfSymbol + _0x3416bb), this.m_upperSymbol[_0x3416bb].node, false);
                    this.m_upperSymbol[_0x3416bb].node.setPosition(_0x2a2706, _0x3fa291 - _0x2b50dd);
                  } else {
                    if (_0x3d14af < _0x2c2898 + _0x1184cb + this.m_spinBufferTime01) {
                      var _0x58672a = (_0x3d14af - _0x2c2898 - _0x1184cb) / this.m_spinBufferTime01 * this.m_downLength;
                      this.m_upperSymbol[_0x3416bb].node.setPosition(_0x2a2706, _0x3fa291 - _0x58672a);
                      if (this.m_isClickStopBtn) {
                        this.CheckChangeToFinalSymbol(_0x3416bb, String(this.m_numberOfSymbol + _0x3416bb), this.m_upperSymbol[_0x3416bb].node);
                      }
                    } else {
                      if (_0x3d14af < _0x2c2898 + _0x1184cb + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
                        var _0x337ddb = (_0x3d14af - _0x2c2898 - _0x1184cb - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
                        this.m_upperSymbol[_0x3416bb].node.setPosition(_0x2a2706, _0x3fa291 - this.m_downLength + _0x337ddb);
                        if (this.m_isClickStopBtn) {
                          this.CheckChangeToFinalSymbol(_0x3416bb, String(this.m_numberOfSymbol + _0x3416bb), this.m_upperSymbol[_0x3416bb].node);
                        }
                      } else {
                        this.CheckChangeToFinalSymbol(_0x3416bb, String(this.m_numberOfSymbol + _0x3416bb), this.m_upperSymbol[_0x3416bb].node);
                        this.m_upperSymbol[_0x3416bb].node.setPosition(_0x2a2706, _0x3fa291);
                      }
                    }
                  }
                }
              }
            }
            _0x2a2706 = this.m_symbolSize.width * (_0x3416bb + 0.5) + this.m_reelPositionOffset[_0x3416bb].x - this.m_viewSize.width / 0x2;
            _0x3fa291 = -0.5 * this.m_symbolSize.height + this.m_reelPositionOffset[_0x3416bb].y - this.m_viewSize.height / 0x2;
            if (_0x3d14af < this.m_riseTime * _0x3416bb) {
              ;
            } else {
              if (_0x3d14af < this.m_riseTime * (_0x3416bb + 0x1)) {
                var _0x380d87 = (_0x3d14af - this.m_riseTime * _0x3416bb) / this.m_riseTime * this.m_upLength;
                this.m_lowerSymbol[_0x3416bb].node.setPosition(_0x2a2706, _0x3fa291 + _0x380d87);
              } else {
                if (_0x3d14af < _0x1184cb) {
                  this.m_lowerSymbol[_0x3416bb].node.setPosition(_0x2a2706, _0x3fa291 + this.m_upLength);
                } else {
                  if (null == _0x2c2898 || _0x3d14af < _0x2c2898 + _0x1184cb) {
                    var _0x17ecbe = (_0x3d14af - _0x1184cb) % _0x3ab84b / _0x3ab84b * this.m_symbolSize.height * 5;
                    var _0x5213d4 = this.GetMovelength(_0x17ecbe, 0.5 * this.m_symbolSize.height, this.m_symbolSize.height * 5, _0x3416bb, String(-(_0x3416bb + 0x1)), this.m_lowerSymbol[_0x3416bb].node, false);
                    this.m_lowerSymbol[_0x3416bb].node.setPosition(_0x2a2706, _0x3fa291 - _0x5213d4);
                  } else {
                    if (_0x3d14af < _0x2c2898 + _0x1184cb + this.m_spinBufferTime01) {
                      var _0x52d52f = (_0x3d14af - _0x2c2898 - _0x1184cb) / this.m_spinBufferTime01 * this.m_downLength;
                      this.m_lowerSymbol[_0x3416bb].node.setPosition(_0x2a2706, _0x3fa291 - _0x52d52f);
                      if (this.m_isClickStopBtn) {
                        this.CheckChangeToFinalSymbol(_0x3416bb, String(this.m_numberOfSymbol + _0x3416bb), this.m_lowerSymbol[_0x3416bb].node);
                      }
                    } else {
                      if (_0x3d14af < _0x2c2898 + _0x1184cb + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
                        var _0x382c9e = (_0x3d14af - _0x2c2898 - _0x1184cb - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
                        this.m_lowerSymbol[_0x3416bb].node.setPosition(_0x2a2706, _0x3fa291 - this.m_downLength + _0x382c9e);
                        if (this.m_isClickStopBtn) {
                          this.CheckChangeToFinalSymbol(_0x3416bb, String(this.m_numberOfSymbol + _0x3416bb), this.m_lowerSymbol[_0x3416bb].node);
                        }
                      } else {
                        this.CheckChangeToFinalSymbol(_0x3416bb, String(-(_0x3416bb + 0x1)), this.m_lowerSymbol[_0x3416bb].node);
                        this.m_lowerSymbol[_0x3416bb].node.setPosition(_0x2a2706, _0x3fa291);
                      }
                    }
                  }
                }
              }
            }
          }
        };
        _0x5c2eb6.GetMovelength = function (_0x19598a, _0x49f585, _0x28e64e, _0x5a5994, _0x3facc4, _0x2e2dbf, _0x38211b) {
          if (_0x19598a >= _0x49f585) {
            _0x19598a -= _0x28e64e;
            if (this.m_isChangeSymbol[_0x3facc4] && !this.m_isClickStopBtn) {
              this.m_isChangeSymbol[_0x3facc4] = false;
              this.ChangeSymbol(_0x5a5994, _0x2e2dbf, _0x38211b);
            }
          } else {
            this.m_isChangeSymbol[_0x3facc4] = true;
          }
          return _0x19598a;
        };
        _0x5c2eb6.ChangeSymbol = function (_0x19af39, _0x536f80, _0x502104) {
          var _0x3c67d7;
          var _0x347c9d;
          var _0x26a213 = Number(_0x536f80.name);
          var _0x5ac844 = this.m_reelPreTime[_0x19af39];
          var _0x2c8d46 = _0x26a213 >= 0x0 ? _0x26a213 % 0x3 : (Math.abs(_0x26a213) - 0x1) % 0x3;
          var _0x1d4604 = this.m_riseTime * 5;
          if (_0x502104) {
            var _0x3190d0 = _0x536f80.getComponent(_0x1cbbb9);
            _0x347c9d = this.m_plateInfo[_0x19af39][_0x2c8d46];
            var _0x3a5406 = this.m_symbolSpriteFrames[_0x347c9d];
            _0x3190d0.spriteFrame = _0x3a5406;
            if (0x7 == _0x347c9d) {
              switch (_0x2c8d46) {
                case 0x0:
                  _0x3d013c.SetZIndex(_0x536f80, 0x5a);
                  break;
                case 0x1:
                  _0x3d013c.SetZIndex(_0x536f80, 0x5f);
                  break;
                case 0x2:
                  _0x3d013c.SetZIndex(_0x536f80, 0x64);
              }
            } else {
              _0x3d013c.SetZIndex(_0x536f80, 0x0);
            }
          } else {
            if (null != _0x5ac844 && (this.m_time >= _0x5ac844 || Math.abs(this.m_time - (_0x5ac844 + _0x1d4604)) < this.m_spinSpeed)) {
              var _0x4ab922 = _0x536f80.getComponent(_0x1cbbb9);
              _0x347c9d = this.m_plateInfo[_0x19af39][_0x2c8d46];
              var _0x46f282 = this.m_symbolSpriteFrames[_0x347c9d];
              _0x4ab922.spriteFrame = _0x46f282;
              if (0x7 == _0x347c9d) {
                switch (_0x2c8d46) {
                  case 0x0:
                    _0x3d013c.SetZIndex(_0x536f80, 0x5a);
                    break;
                  case 0x1:
                    _0x3d013c.SetZIndex(_0x536f80, 0x5f);
                    break;
                  case 0x2:
                    _0x3d013c.SetZIndex(_0x536f80, 0x64);
                }
              } else {
                _0x3d013c.SetZIndex(_0x536f80, 0x0);
              }
            } else {
              _0x3c67d7 = Math.floor(Math.random() * this.m_platePool[_0x19af39].length) % this.m_platePool[_0x19af39].length;
              _0x347c9d = this.m_platePool[_0x19af39][_0x3c67d7];
              if (this.m_gameView.IsExtra && 0x8 == _0x347c9d) {
                _0x347c9d = 0x9;
              }
              _0x536f80.getComponent(_0x1cbbb9).spriteFrame = this.m_symbolSpriteFrames[_0x347c9d];
              if (0x7 == _0x347c9d) {
                switch (_0x2c8d46) {
                  case 0x0:
                    _0x3d013c.SetZIndex(_0x536f80, 0x5a);
                    break;
                  case 0x1:
                    _0x3d013c.SetZIndex(_0x536f80, 0x5f);
                    break;
                  case 0x2:
                    _0x3d013c.SetZIndex(_0x536f80, 0x64);
                }
              } else {
                _0x3d013c.SetZIndex(_0x536f80, 0x0);
              }
            }
          }
        };
        _0x5c2eb6.CheckChangeToFinalSymbol = function (_0x2a4913, _0x386900, _0x418f67, _0x11fb03) {
          if (undefined === _0x11fb03) {
            _0x11fb03 = false;
          }
          if (!this.m_isChangeToFinalSymbol[_0x386900]) {
            this.m_isChangeToFinalSymbol[_0x386900] = true;
            this.ChangeSymbol(_0x2a4913, _0x418f67, _0x11fb03);
          }
        };
        _0x5c2eb6.IsAllSymbolChangeToRight = function () {
          var _0x26b754 = true;
          if (!this.m_errorMsgCount) {
            for (var _0xf7c6fb = 0x0; _0xf7c6fb < 0xc; _0xf7c6fb++) {
              if (!this.m_isChangeToFinalSymbol[_0xf7c6fb]) {
                var _0x286816 = 'a';
                for (var _0x4a58e6 = 0x0; _0x4a58e6 < 0x4; _0x4a58e6++) {
                  for (var _0x56c5f2 = 0x0; _0x56c5f2 < 0x3; _0x56c5f2++) {
                    _0x286816 = _0x286816 + this.m_symbol[_0x4a58e6][_0x56c5f2].getComponent(_0x1cbbb9).spriteFrame.name + ',';
                  }
                }
                var _0x5b07f8 = "this.m_reelStopTime";
                for (var _0x24187f = 0x0; _0x24187f < this.m_reelStopTime.length; _0x24187f++) {
                  _0x5b07f8 = _0x5b07f8 + this.m_reelStopTime[_0x24187f] + ',';
                }
                var _0x268ae7 = "this.m_reelPreTime";
                for (var _0x36c807 = 0x0; _0x36c807 < this.m_reelPreTime.length; _0x36c807++) {
                  _0x268ae7 = _0x268ae7 + this.m_reelPreTime[_0x36c807] + ',';
                }
                this.m_time;
                this.m_stopTime;
                this.m_errorMsgCount = true;
                _0x26b754 = false;
                break;
              }
            }
          }
          return _0x26b754;
        };
        _0x5c2eb6.SetPlayStopSoundFunction = function (_0x1ed24a) {
          this.m_playStopSound = _0x1ed24a;
        };
        _0x5c2eb6.CheckPlayStopSound = function (_0x810467, _0x44f02e) {
          if (this.m_playStopSound && !this.m_isPlaySound[_0x810467] && 0x0 == _0x44f02e) {
            this.m_isPlaySound[_0x810467] = true;
            if (0x3 == _0x810467 && this.m_isNearWin) {
              this.m_nearWinNode.getComponent(_0x1c3d03).stop();
              this.m_nearWinNode.active = false;
            }
            if (this.m_isClickStopBtn) {
              if (this.m_hasWild[_0x810467] && !this.m_hardStopSound) {
                this.m_playStopSound(_0x810467, this.m_hasWild[_0x810467]);
                this.m_hardStopSound = true;
              } else if (!(0x3 != _0x810467 || this.m_hardStopSound)) {
                this.m_playStopSound(_0x810467, false);
                this.m_hardStopSound = true;
              }
            } else {
              this.m_playStopSound(_0x810467, this.m_hasWild[_0x810467]);
            }
          }
        };
        _0x5c2eb6.CheckNearWin = function () {
          if (this.m_nearWinPlayed && this.m_isClickStopBtn) {
            _0x3a77d3.Stop(this.m_nearWinAudioId);
          } else if (!(this.m_nearWinPlayed || this.m_isClickStopBtn)) {
            if (this.m_isPlaySound[0x0] && this.m_isPlaySound[0x1] && this.m_isPlaySound[0x2] && this.m_isNearWin) {
              this.m_nearWinAudioId = _0x3a77d3.Play(_0x1a2af6.AudioClip.Near_Win, false);
              this.m_nearWinNode.active = true;
              this.m_nearWinNode.getComponent(_0x1c3d03).play("Clip_FX_NearWin_Loop");
              this.m_nearWinPlayed = true;
            }
          }
        };
        _0x5c2eb6.SetPlateInfo = function (_0x5e51c1, _0x342907) {
          this.m_plateInfo = _0x5e51c1;
          var _0x16dc2a = this.m_riseTime * 0x3;
          var _0x56198f = Math.ceil((this.m_time - _0x16dc2a) / this.m_spinSpeed) + 0x1;
          var _0xd999d7 = 0x0;
          this.m_isNearWin = _0x342907;
          for (var _0x2ec891 = 0x0; _0x2ec891 < 0x3; _0x2ec891++) {
            for (var _0x572a3f = 0x0; _0x572a3f < 0x3; _0x572a3f++) {
              if (0x7 == this.m_plateInfo[_0x2ec891][_0x572a3f]) {
                this.m_hasWild[_0x2ec891] = true;
                break;
              }
            }
          }
          if (this.m_isClickStopBtn) {
            this.m_stopTime = _0x3d013c.strip(this.m_spinSpeed * _0x56198f + this.m_spinDelayTime + _0x16dc2a);
            for (var _0x5b7bcc = 0x0; _0x5b7bcc < 0x4; _0x5b7bcc++) {
              this.m_reelStopTime[_0x5b7bcc] = _0x3d013c.strip(this.m_spinSpeed * _0x56198f);
              this.m_reelPreTime[_0x5b7bcc] = _0x3d013c.strip(this.m_spinSpeed * (_0x56198f - 0x1));
            }
          } else {
            this.m_stopTime = _0x3d013c.strip(this.m_spinSpeed * (_0x56198f + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * 3 + this.m_spinDelayTime + _0x16dc2a + this.m_spinBufferTime01 + this.m_spinBufferTime02);
            if (_0x342907) {
              this.m_stopTime += 0x2;
            }
            for (var _0xad902a = 0x0; _0xad902a < 0x4; _0xad902a++) {
              if (this.m_lockColumn[_0xad902a]) {
                _0xd999d7 += 0x1;
              }
              this.m_reelStopTime[_0xad902a] = _0x3d013c.strip(this.m_spinSpeed * (_0x56198f + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * (_0xad902a - _0xd999d7));
              this.m_reelPreTime[_0xad902a] = _0x3d013c.strip(this.m_spinSpeed * (_0x56198f + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * (_0xad902a - _0xd999d7 - 0x1));
              if (_0x342907 && 0x3 == _0xad902a) {
                this.m_reelStopTime[_0xad902a] += 0x2;
                this.m_reelPreTime[_0xad902a] += 0x2;
              }
            }
          }
        };
        _0x5c2eb6.IsPlateStop = function () {
          return this.m_isStop;
        };
        _0x5c2eb6.GetSymbolByIndex = function (_0x13022a) {
          return this.m_symbol[_0x13022a.x][_0x13022a.y];
        };
        _0x5c2eb6.ChangeUpLowSymbolColor = function (_0x698b8c) {
          for (var _0x52c88f = 0x0; _0x52c88f < this.m_upperSymbol.length; _0x52c88f++) {
            this.m_upperSymbol[_0x52c88f].color = new _0x177872(_0x698b8c, _0x698b8c, _0x698b8c);
            this.m_lowerSymbol[_0x52c88f].color = new _0x177872(_0x698b8c, _0x698b8c, _0x698b8c);
          }
        };
        _0x5c2eb6.HideColumnSymbol = function (_0x1f7b16) {
          if (_0x1f7b16 >= 0x0 && _0x1f7b16 < 0x4) {
            for (var _0x3fc4c = 0x0; _0x3fc4c < 0x3; _0x3fc4c++) {
              this.m_symbol[_0x1f7b16][_0x3fc4c].active = false;
            }
            this.m_lockColumn[_0x1f7b16] = true;
          }
        };
        _0x5c2eb6.GetAwardSymbolPosition = function (_0xee21b0, _0x3d982f) {
          return this.m_symbol[_0xee21b0][_0x3d982f].position;
        };
        _0x5c2eb6.SetUpAndDownSymbolActive = function (_0x228d34) {
          for (var _0x4b9d0f = 0x0; _0x4b9d0f < 0x4; _0x4b9d0f++) {
            this.m_upperSymbol[_0x4b9d0f].node.active = _0x228d34;
            this.m_lowerSymbol[_0x4b9d0f].node.active = _0x228d34;
          }
        };
        _0x5c2eb6.SetTxt = function (_0x134915) {
          var _0x411cab = ['09', '10', '08'];
          for (var _0x259f1d = 0x0; _0x259f1d < 0x3; _0x259f1d++) {
            this.m_symbolSpriteFrames[_0x259f1d + 0x7] = _0x134915.getSpriteFrame("Symbol" + _0x411cab[_0x259f1d]);
          }
        };
        _0x2d513c(_0x18b29e, [{
          'key': "SymbolSpriteFrames",
          'get': function () {
            return this.m_symbolSpriteFrames;
          }
        }]);
        return _0x18b29e;
      }(_0x3127b3);
      _0x21557e = _0x159f02(_0x3c6f50.prototype, 'm_symbolSpriteFrames', [_0x143bca], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x40a878 = _0x159f02(_0x3c6f50.prototype, 'm_nearWinNode', [_0x5018d1], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x294ace = _0xaa6bb2(_0x4083a8 = _0x3c6f50) || _0x4083a8;
      var _0x2c0493;
      var _0x31bc9b;
      var _0x26f779;
      var _0xb2b12a;
      var _0x128913;
      var _0x40cfc4;
      var _0xb6bf86;
      var _0x51d643;
      var _0x1397a3;
      var _0x35da04;
      var _0x445221;
      var _0x5027d3;
      var _0x581bc6;
      var _0x4c6e5d;
      var _0x179674;
      var _0x2b609c;
      var _0x32b6e5;
      var _0x44aada;
      var _0x2c67b6;
      var _0x58912f;
      var _0x5014ba;
      var _0x5132cc;
      var _0x5c0102;
      var _0x2a3f41;
      var _0x686c74;
      var _0x3247c1;
      var _0x1b9af5;
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "a8ca71prVtJ+KSdYvCt1yq6", "EffectPlate", undefined);
      var _0xf3fec5 = _0x297ef0.property;
      var _0x272a8d = -0x32;
      _0x2c0493 = _0xf3fec5({
        'type': _0x294ace,
        'tooltip': '轉輪'
      });
      _0x31bc9b = _0xf3fec5({
        'type': _0xf1750c,
        'tooltip': "symbol連線動畫"
      });
      _0x26f779 = _0xf3fec5({
        'type': _0x4fc6ef,
        'tooltip': 'symbol相關表演的節點'
      });
      _0xb2b12a = _0xf3fec5({
        'type': _0x4fc6ef,
        'tooltip': "連線節點"
      });
      _0x128913 = _0xf3fec5({
        'type': _0x4fc6ef,
        'tooltip': "big win節點"
      });
      _0x40cfc4 = _0xf3fec5({
        'type': _0xf1750c,
        'tooltip': "BigWin prefab"
      });
      _0xb6bf86 = _0xf3fec5({
        'type': _0xf1750c,
        'tooltip': '倍率飛入動畫'
      });
      _0x51d643 = _0xf3fec5({
        'type': _0x4fc6ef,
        'tooltip': "倍率飛入節點"
      });
      _0x1397a3 = _0xf3fec5({
        'type': _0x458427,
        'tooltip': "倍率飛入數字"
      });
      _0x35da04 = _0xf3fec5({
        'type': _0x458427,
        'tooltip': "倍率飛入背景"
      });
      _0x445221 = _0xf3fec5({
        'type': _0xf1750c,
        'tooltip': "倍率符號轉變動畫"
      });
      _0x5027d3 = _0xf3fec5({
        'type': _0x4fc6ef,
        'tooltip': "線樹節點"
      });
      _0x581bc6 = _0xf3fec5({
        'type': _0x458427,
        'tooltip': "線數用symbol"
      });
      _0x4c6e5d = function (_0x4214f3) {
        function _0x5c043b() {
          var _0x4b415e;
          var _0x5a563a = arguments.length;
          var _0x436789 = new Array(_0x5a563a);
          for (var _0x5d71d6 = 0x0; _0x5d71d6 < _0x5a563a; _0x5d71d6++) {
            _0x436789[_0x5d71d6] = arguments[_0x5d71d6];
          }
          _0x1a08d3(_0x4b415e = _0x4214f3.call.apply(_0x4214f3, [this].concat(_0x436789)) || this, "m_slotReels", _0x179674, _0x5199ec(_0x4b415e));
          _0x1a08d3(_0x4b415e, 'm_symbolEffectPrefabs', _0x2b609c, _0x5199ec(_0x4b415e));
          _0x1a08d3(_0x4b415e, "m_effectNode", _0x32b6e5, _0x5199ec(_0x4b415e));
          _0x1a08d3(_0x4b415e, "m_hintLineNode", _0x44aada, _0x5199ec(_0x4b415e));
          _0x1a08d3(_0x4b415e, 'm_bigWinNode', _0x2c67b6, _0x5199ec(_0x4b415e));
          _0x1a08d3(_0x4b415e, "m_bigWinPrefab", _0x58912f, _0x5199ec(_0x4b415e));
          _0x1a08d3(_0x4b415e, 'm_multFlyPrefab', _0x5014ba, _0x5199ec(_0x4b415e));
          _0x1a08d3(_0x4b415e, "m_multFlyNode", _0x5132cc, _0x5199ec(_0x4b415e));
          _0x1a08d3(_0x4b415e, 'm_multFlyNum', _0x5c0102, _0x5199ec(_0x4b415e));
          _0x1a08d3(_0x4b415e, "m_multFlyBg", _0x2a3f41, _0x5199ec(_0x4b415e));
          _0x1a08d3(_0x4b415e, 'm_changeMult', _0x686c74, _0x5199ec(_0x4b415e));
          _0x1a08d3(_0x4b415e, 'm_wayShow', _0x3247c1, _0x5199ec(_0x4b415e));
          _0x1a08d3(_0x4b415e, 'm_waySymbol', _0x1b9af5, _0x5199ec(_0x4b415e));
          _0x4b415e.m_gameView = null;
          _0x4b415e.m_symbolEffects = new Array();
          _0x4b415e.m_effectsPool = new Array();
          _0x4b415e.m_multChangeEffects = new Array();
          _0x4b415e.m_singleLineAni = null;
          _0x4b415e.m_bigWinLabel = null;
          _0x4b415e.m_winNode = null;
          _0x4b415e.m_multNode = null;
          _0x4b415e.m_multSprite = null;
          _0x4b415e.m_multSpriteBg = null;
          _0x4b415e.m_bigWin = null;
          return _0x4b415e;
        }
        _0x4a7452(_0x5c043b, _0x4214f3);
        var _0x5122ca = _0x5c043b.prototype;
        _0x5122ca.onLoad = function () {
          for (var _0x1f6b62 = 0x0; _0x1f6b62 < _0x1a2af6.NORMAL_SYMBOL_NUMBER; _0x1f6b62++) {
            var _0x38e233 = new Array();
            this.m_effectsPool.push(_0x38e233);
            var _0x13de29 = new Array();
            for (var _0x5e98ee = 0x0; _0x5e98ee < 0x4; _0x5e98ee++) {
              var _0x19518c = new Array();
              for (var _0x34c15e = 0x0; _0x34c15e < 0x3; _0x34c15e++) {
                _0x19518c.push(null);
              }
              _0x13de29.push(_0x19518c);
            }
            this.m_symbolEffects.push(_0x13de29);
          }
        };
        _0x5122ca.start = function () {};
        _0x5122ca.Init = function (_0x1fbfab) {
          this.m_gameView = _0x1fbfab;
          this.m_winNode = _0x2ece74(this.m_bigWinPrefab);
          this.m_winNode.active = false;
          this.m_bigWinNode.addChild(this.m_winNode);
          this.m_bigWin = this.m_winNode.getComponent(_0x2bc3d5);
          this.m_bigWin.Init();
        };
        _0x5122ca.GetSymbolEffect = function (_0x53bac7) {
          for (var _0x3650ba = 0x0; _0x3650ba < this.m_effectsPool[_0x53bac7].length; _0x3650ba++) {
            if (this.m_effectsPool[_0x53bac7][_0x3650ba]) {
              return this.m_effectsPool[_0x53bac7].pop();
            }
          }
          return null;
        };
        _0x5122ca.ShowSymbolEffect = function (_0x2bfb82, _0x35d883, _0x128907) {
          var _0x24de56 = 0x0;
          for (var _0x41ffd9 = 0x0; _0x41ffd9 < 0x4; _0x41ffd9++) {
            for (var _0x4b2f41 = 0x0; _0x4b2f41 < 0x3; _0x4b2f41++) {
              if (_0x35d883[_0x41ffd9][_0x4b2f41] || 0x3 == _0x41ffd9 && 0x1 == _0x4b2f41) {
                var _0x2d18b3 = _0x2bfb82[_0x41ffd9][_0x4b2f41];
                var _0xd42886 = this.m_slotReels.GetSymbolByIndex(_0x565251(_0x41ffd9, _0x4b2f41));
                if (0x3 != _0x41ffd9 && 0x1 != _0x4b2f41) {
                  _0xd42886.active = false;
                }
                var _0x60bfc9 = this.GetSymbolEffect(_0x2d18b3);
                if (_0x60bfc9) {
                  _0x60bfc9.position = _0x565251(_0xd42886.getPosition());
                  this.m_effectNode.addChild(_0x60bfc9);
                  this.m_symbolEffects[_0x2d18b3][_0x41ffd9][_0x4b2f41] = _0x60bfc9;
                  if (0x7 == _0x2d18b3) {
                    switch (_0x4b2f41) {
                      case 0x0:
                        _0x3d013c.SetZIndex(_0x60bfc9, 0x5a);
                        break;
                      case 0x1:
                        _0x3d013c.SetZIndex(_0x60bfc9, 0x5f);
                        break;
                      case 0x2:
                        _0x3d013c.SetZIndex(_0x60bfc9, 0x64);
                    }
                  } else {
                    _0x3d013c.SetZIndex(_0x60bfc9, _0x24de56);
                    _0x24de56 += 0x5;
                  }
                  _0x60bfc9.active = true;
                  _0x60bfc9.getComponent(_0x1c3d03).play();
                } else {
                  var _0x13fc9a = undefined;
                  (_0x13fc9a = _0x2ece74(this.m_symbolEffectPrefabs[_0x2d18b3])).position = _0x565251(_0xd42886.getPosition());
                  this.m_effectNode.addChild(_0x13fc9a);
                  _0x13fc9a.getComponent(_0x1c3d03).play();
                  this.m_symbolEffects[_0x2d18b3][_0x41ffd9][_0x4b2f41] = _0x13fc9a;
                  if (0x7 == _0x2d18b3) {
                    switch (_0x4b2f41) {
                      case 0x0:
                        _0x3d013c.SetZIndex(_0x13fc9a, 0x5a);
                        break;
                      case 0x1:
                        _0x3d013c.SetZIndex(_0x13fc9a, 0x5f);
                        break;
                      case 0x2:
                        _0x3d013c.SetZIndex(_0x13fc9a, 0x64);
                    }
                  } else {
                    _0x3d013c.SetZIndex(_0x13fc9a, _0x24de56);
                    _0x24de56 += 0x5;
                  }
                }
              } else {
                this.m_slotReels.GetSymbolByIndex(_0x565251(_0x41ffd9, _0x4b2f41)).getComponent(_0x1cbbb9).color = new _0x177872(0x6e, 0x6e, 0x6e);
              }
            }
          }
          this.m_slotReels.ChangeUpLowSymbolColor(0x6e);
        };
        _0x5122ca.ShowAwardLine = function (_0x48a176) {
          for (var _0xd5ab1b = 0x0; _0xd5ab1b < _0x48a176.length; _0xd5ab1b++) {
            this.m_hintLineNode[_0x48a176[_0xd5ab1b]].active = true;
          }
        };
        _0x5122ca.ShowWays = function (_0xb5285d, _0x828c60) {
          var _0x37ef5b = this.m_gameView.ChangeMultToSymbolNum(_0x828c60);
          for (var _0x13e5b2 = 0x0; _0x13e5b2 < _0xb5285d.length; _0x13e5b2++) {
            if (_0x13e5b2 < this.m_wayShow.length) {
              var _0x5b1e7a = this.m_wayShow[_0x13e5b2].getComponent(_0x1c3d03);
              var _0x56d50d = this.m_wayShow[_0x13e5b2].getChildByName('Node').getChildByName("symbol1").getComponent(_0x1cbbb9);
              var _0x42c0c8 = this.m_wayShow[_0x13e5b2].getChildByName("Node").getChildByName("ways_label02").getComponent(_0x4457da);
              var _0x5b869b = this.m_wayShow[_0x13e5b2].getChildByName('Node').getChildByName("ways_label").getComponent(_0x4457da);
              var _0x10b7f6 = this.m_wayShow[_0x13e5b2].getChildByName('Node').getChildByName("symbol2").getComponent(_0x1cbbb9);
              var _0x106d03 = this.m_wayShow[_0x13e5b2].getChildByName("Node").getChildByName('win_label').getComponent(_0x4457da);
              _0x56d50d.spriteFrame = this.m_waySymbol[_0xb5285d[_0x13e5b2].Symbol];
              _0x42c0c8.string = _0x3d013c.divide(_0xb5285d[_0x13e5b2].Win, _0x828c60).toString();
              _0x5b869b.string = _0xb5285d[_0x13e5b2].Line.toString();
              _0x10b7f6.spriteFrame = this.m_waySymbol[_0x37ef5b];
              _0x106d03.string = _0x3d013c.times(_0xb5285d[_0x13e5b2].Win, _0xb5285d[_0x13e5b2].Line).toString();
              this.m_wayShow[_0x13e5b2].active = true;
              _0x5b1e7a.play();
            }
          }
        };
        _0x5122ca.ShowChangeMult = function () {
          for (var _0xc9a75 = 0x0; _0xc9a75 < 0x3; _0xc9a75++) {
            var _0x462aa1 = this.m_slotReels.GetSymbolByIndex(_0x565251(0x3, _0xc9a75));
            var _0x56bcef = this.m_multChangeEffects[_0xc9a75];
            if (_0x56bcef) {
              _0x56bcef.active = true;
              _0x56bcef.getComponent(_0x1c3d03).play();
            } else {
              var _0x57b204 = undefined;
              (_0x57b204 = _0x2ece74(this.m_changeMult)).position = _0x565251(_0x462aa1.getPosition());
              this.m_effectNode.addChild(_0x57b204);
              _0x57b204.getComponent(_0x1c3d03).play();
              this.m_multChangeEffects[_0xc9a75] = _0x57b204;
            }
          }
        };
        _0x5122ca.ShowSingleLineEffect = function (_0x55a51a, _0x3a4357, _0x29fa8b) {
          var _0x24c6e1 = this;
          var _0x20c81d = _0x3a4357.length;
          var _0xf52896 = 0x0;
          this.m_singleLineAni = _0x3ad8f0(this.node).repeatForever(_0x3ad8f0().delay(_0x1a2af6.AWARD_ALL_TO_SINGLE).call(function () {
            for (var _0xf09cb2 = 0x0; _0xf09cb2 < _0x55a51a.length - 0x1; _0xf09cb2++) {
              for (var _0x28c744 = 0x0; _0x28c744 < _0x55a51a[_0xf09cb2].length; _0x28c744++) {
                var _0x103c42 = _0x55a51a[_0xf09cb2][_0x28c744];
                var _0x5b4fa2 = _0x24c6e1.m_slotReels.GetSymbolByIndex(_0x565251(_0xf09cb2, _0x28c744));
                _0x5b4fa2.active = true;
                _0x5b4fa2.getComponent(_0x1cbbb9).color = _0x292e71(0x6e, 0x6e, 0x6e);
                var _0x2904fc = _0x24c6e1.m_symbolEffects[_0x103c42][_0xf09cb2][_0x28c744];
                if (_0x2904fc) {
                  _0x2904fc.active = false;
                }
              }
            }
            for (var _0x12b92b = 0x0; _0x12b92b < _0x24c6e1.m_hintLineNode.length; _0x12b92b++) {
              _0x24c6e1.m_hintLineNode[_0x12b92b].active = false;
            }
            for (var _0x3f53e9 = 0x0; _0x3f53e9 < 0x3; _0x3f53e9++) {
              var _0x331e36 = _0x1a2af6.SYMBOL_LINE[_0x3a4357[_0xf52896]][_0x3f53e9].x;
              var _0x5a2d0f = _0x1a2af6.SYMBOL_LINE[_0x3a4357[_0xf52896]][_0x3f53e9].y;
              var _0x13569d = _0x24c6e1.m_symbolEffects[_0x55a51a[_0x331e36][_0x5a2d0f]][_0x331e36][_0x5a2d0f];
              _0x13569d.position = _0x565251(_0x24c6e1.m_slotReels.GetAwardSymbolPosition(_0x331e36, _0x5a2d0f));
              _0x13569d.active = true;
              _0x13569d.getComponent(_0x1c3d03).play();
              _0x24c6e1.m_hintLineNode[_0x3a4357[_0xf52896]].active = true;
            }
            if (_0xf52896 < _0x20c81d - 0x1) {
              _0xf52896++;
            } else {
              _0xf52896 = 0x0;
            }
          })).start();
        };
        _0x5122ca.HideSymbolEffect = function () {
          for (var _0x41535e = 0x0; _0x41535e < this.m_hintLineNode.length; _0x41535e++) {
            this.m_hintLineNode[_0x41535e].active = false;
          }
          for (var _0x10cddd = 0x0; _0x10cddd < this.m_wayShow.length; _0x10cddd++) {
            this.m_wayShow[_0x10cddd].active = false;
          }
          for (var _0x9ad710 = 0x0; _0x9ad710 < this.m_symbolEffects.length; _0x9ad710++) {
            if (this.m_symbolEffects[_0x9ad710]) {
              for (var _0x5ae8d5 = 0x0; _0x5ae8d5 < this.m_symbolEffects[_0x9ad710].length; _0x5ae8d5++) {
                if (this.m_symbolEffects[_0x9ad710][_0x5ae8d5]) {
                  for (var _0x4f12c2 = 0x0; _0x4f12c2 < this.m_symbolEffects[_0x5ae8d5].length; _0x4f12c2++) {
                    if (this.m_symbolEffects[_0x9ad710][_0x5ae8d5][_0x4f12c2]) {
                      this.m_symbolEffects[_0x9ad710][_0x5ae8d5][_0x4f12c2].active = false;
                      this.m_symbolEffects[_0x9ad710][_0x5ae8d5][_0x4f12c2].removeFromParent();
                      this.m_effectsPool[_0x9ad710].push(this.m_symbolEffects[_0x9ad710][_0x5ae8d5][_0x4f12c2]);
                      this.m_symbolEffects[_0x9ad710][_0x5ae8d5][_0x4f12c2] = null;
                    }
                  }
                }
              }
            }
          }
          for (var _0x3dc653 = 0x0; _0x3dc653 < 0x4; _0x3dc653++) {
            for (var _0x2f0d52 = 0x0; _0x2f0d52 < 0x3; _0x2f0d52++) {
              this.m_slotReels.GetSymbolByIndex(_0x565251(_0x3dc653, _0x2f0d52)).getComponent(_0x1cbbb9).color = _0x292e71(0xff, 0xff, 0xff);
            }
          }
          this.m_slotReels.ChangeUpLowSymbolColor(0xff);
        };
        _0x5122ca.ShowBigWin = function (_0x5a7cb0, _0x2f88ce, _0x581af1) {
          this.m_winNode.active = true;
          _0x4bd5fc.GetNowBetValue();
          this.m_bigWin.ShowWin(_0x5a7cb0, _0x2f88ce, _0x4bd5fc.GetNowBetValue(), _0x581af1);
        };
        _0x5122ca.ShowMultFly = function (_0x865c1b, _0x3b7c49) {
          var _0x3074bd = this;
          var _0x3ae589 = this.ChangeMult(_0x865c1b);
          if (null == this.m_multNode) {
            this.m_multNode = _0x2ece74(this.m_multFlyPrefab);
            this.m_multFlyNode.addChild(this.m_multNode);
            var _0x3e2df6 = this.m_multNode.getChildByName("All").getChildByName("Img");
            var _0x4b47b2 = this.m_multNode.getChildByName("All").getChildByName('Bg');
            this.m_multSprite = _0x3e2df6.getComponent(_0x1cbbb9);
            this.m_multSpriteBg = _0x4b47b2.getComponent(_0x1cbbb9);
          }
          this.m_multNode.position = _0x565251(_0x3b7c49);
          this.m_multSprite.spriteFrame = this.m_multFlyNum[_0x3ae589];
          this.m_multSpriteBg.spriteFrame = this.m_multFlyBg[_0x3ae589];
          var _0x10ce1b = this.m_multNode.getComponent(_0x1c3d03);
          var _0x3cf90f = this.node.parent.getChildByName("Node_DoubleShow");
          var _0xab5c7e = this.node.parent.getComponent(_0x5e283f).convertToWorldSpaceAR(_0x3cf90f.getPosition());
          var _0x30817c = this.m_effectNode.getComponent(_0x5e283f).convertToNodeSpaceAR(_0xab5c7e);
          var _0x4d07a7 = _0x3b7c49.x + (_0x30817c.x - _0x3b7c49.x) / 0x4 - 0x32;
          _0x6cd26b(_0x4d07a7, _0x272a8d + _0x3b7c49.y + Math.cos(0.1745327777777778) * _0x4d07a7);
          var _0xc2fdf5 = _0x3b7c49.x + (_0x30817c.x - _0x3b7c49.x) / 0x2;
          _0x6cd26b(_0xc2fdf5, _0x272a8d + _0x3b7c49.y + Math.cos(0.1745327777777778) * _0xc2fdf5 + 0x32);
          this.m_multNode.getComponent(_0x483679).opacity = 0xff;
          _0x3ad8f0(this.m_multNode).call(function () {
            _0x10ce1b.play('Clip_FX_SP_Reel_Fly_Start');
            _0x3a77d3.Play(_0x1a2af6.AudioClip.Double, false);
          }).delay(0x1).call(function () {
            _0x3a77d3.Play(_0x1a2af6.AudioClip.Fly, false);
          }).parallel(_0x3ad8f0().to(0.3, {
            'position': _0x30817c
          }), _0x3ad8f0().call(function () {
            _0x3ad8f0(_0x3074bd.m_multNode.getComponent(_0x483679)).to(0.5, {
              'opacity': 0x0
            }).start();
          })).delay(0.1).call(function () {
            _0x10ce1b.play("Clip_FX_SP_Reel_Fly_End");
          }).start();
        };
        _0x5122ca.ChangeMult = function (_0xca9ac5) {
          switch (_0xca9ac5) {
            case 0x8:
              return 0x0;
            case 0x9:
              return 0x1;
            case 0xa:
              return 0x2;
            case 0xb:
              return 0x3;
            case 0xc:
              return 0x4;
            case 0xd:
              return 0x5;
            default:
              return 0x0;
          }
        };
        _0x5122ca.StopSingleLineEffect = function () {
          if (this.m_singleLineAni) {
            this.m_singleLineAni.stop();
            this.m_singleLineAni = null;
          }
        };
        _0x5122ca.SetTxt = function (_0x4f91bc) {
          for (var _0x45acef = 0x0; _0x45acef < this.m_wayShow.length; _0x45acef++) {
            this.m_wayShow[_0x45acef].getChildByName('Node').getChildByName("ways_show").getComponent(_0x1cbbb9).spriteFrame = _0x4f91bc.getSpriteFrame("txt_ways");
          }
        };
        _0x2d513c(_0x5c043b, [{
          'key': "BigWin",
          'get': function () {
            if (null != this.m_bigWin) {
              return this.m_bigWin;
            }
          }
        }]);
        return _0x5c043b;
      }(_0x3127b3);
      _0x179674 = _0x159f02(_0x4c6e5d.prototype, "m_slotReels", [_0x2c0493], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2b609c = _0x159f02(_0x4c6e5d.prototype, "m_symbolEffectPrefabs", [_0x31bc9b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x32b6e5 = _0x159f02(_0x4c6e5d.prototype, "m_effectNode", [_0x26f779], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x44aada = _0x159f02(_0x4c6e5d.prototype, 'm_hintLineNode', [_0xb2b12a], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x2c67b6 = _0x159f02(_0x4c6e5d.prototype, 'm_bigWinNode', [_0x128913], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x58912f = _0x159f02(_0x4c6e5d.prototype, 'm_bigWinPrefab', [_0x40cfc4], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5014ba = _0x159f02(_0x4c6e5d.prototype, "m_multFlyPrefab", [_0xb6bf86], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5132cc = _0x159f02(_0x4c6e5d.prototype, 'm_multFlyNode', [_0x51d643], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5c0102 = _0x159f02(_0x4c6e5d.prototype, "m_multFlyNum", [_0x1397a3], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x2a3f41 = _0x159f02(_0x4c6e5d.prototype, "m_multFlyBg", [_0x35da04], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x686c74 = _0x159f02(_0x4c6e5d.prototype, 'm_changeMult', [_0x445221], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3247c1 = _0x159f02(_0x4c6e5d.prototype, "m_wayShow", [_0x5027d3], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x1b9af5 = _0x159f02(_0x4c6e5d.prototype, 'm_waySymbol', [_0x581bc6], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, 'bcd6aBMLxJCvLh54Xob5ivT', 'AwardState', undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, 'c9a13MwTCdPjbiZ223M30Py', 'CheckState', undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "0d4f1WyM5lJb6XaBAh7UGPv", "FeatureShowState", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "77acaFcNgVDULwRQEtO5wYa", "BigWinComponent", undefined);
      var _0x52dfa9;
      var _0x245cba;
      var _0x13a8d7;
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "74f7dljUZhO+6o0Pu2tNSAk", 'ConnectionManager', undefined);
      (function (_0x214f7b) {
        _0x214f7b[_0x214f7b.TYPE_HTTP = 0x1] = "TYPE_HTTP";
        _0x214f7b[_0x214f7b.TYPE_WEBSOCKET = 0x2] = "TYPE_WEBSOCKET";
        _0x214f7b[_0x214f7b.MAX = 0x3] = "MAX";
      })(_0x52dfa9 || (_0x52dfa9 = {}));
      (function (_0x168391) {
        _0x168391.TYPE_GET = "get";
        _0x168391.TYPE_POST = "post";
      })(_0x245cba || (_0x245cba = {}));
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "34d81gQVlJAaJJHg6IUTjH6", 'TimeBool', undefined);
      (function (_0x1f4ded) {
        _0x1f4ded[_0x1f4ded.MAX_UINT = 0xffffffff] = 'MAX_UINT';
        _0x1f4ded[_0x1f4ded.MAX_UINT64 = 0x10000000000000000] = "MAX_UINT64";
        _0x1f4ded[_0x1f4ded.MAX_INT = -0x1] = "MAX_INT";
        _0x1f4ded[_0x1f4ded.MIN_INT = 0x0] = 'MIN_INT';
      })(_0x13a8d7 || (_0x13a8d7 = {}));
      var _0xaf2c28;
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "5cd11K4+Y1DBJ0WZfuiBSee", "Common_IdleState", undefined);
      var _0x32b493 = _0x297ef0.ccclass;
      _0xaf2c28 = _0x32b493("Common_IdleState");
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "9099fuoIOdA/qc/GkvbZ7rH", "GroupNode", undefined);
      var _0x73ee91;
      var _0x24986a;
      var _0x8e15cc;
      var _0x5dc6b8;
      !function (_0x146bb8) {
        _0x146bb8[_0x146bb8.WIDTH = 0x1] = "WIDTH";
        _0x146bb8[_0x146bb8.HEIGHT = 0x2] = "HEIGHT";
        _0x146bb8[_0x146bb8.BOTH = 0x3] = "BOTH";
      }(_0x73ee91 || (_0x73ee91 = {}));
      (function (_0x3c4ebf) {
        _0x3c4ebf[_0x3c4ebf.X = 0x1] = 'X';
        _0x3c4ebf[_0x3c4ebf.Y = 0x2] = 'Y';
        _0x3c4ebf[_0x3c4ebf.BOTH = 0x3] = 'BOTH';
      })(_0x24986a || (_0x24986a = {}));
      (function (_0x5d9a0f) {
        _0x5d9a0f[_0x5d9a0f.X = 0x1] = 'X';
        _0x5d9a0f[_0x5d9a0f.Y = 0x2] = 'Y';
        _0x5d9a0f[_0x5d9a0f.BOTH = 0x3] = "BOTH";
      })(_0x8e15cc || (_0x8e15cc = {}));
      (function (_0x5d6641) {
        _0x5d6641[_0x5d6641.R = 0x1] = 'R';
        _0x5d6641[_0x5d6641.G = 0x2] = 'G';
        _0x5d6641[_0x5d6641.B = 0x4] = 'B';
        _0x5d6641[_0x5d6641.RGB = 0x7] = "RGB";
        _0x5d6641[_0x5d6641.A = 0x8] = 'A';
        _0x5d6641[_0x5d6641.RGBA = 0xf] = "RGBA";
      })(_0x5dc6b8 || (_0x5dc6b8 = {}));
      var _0x4aa9e1;
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "1d854+nhA1JgLXZLaNHz9eU", 'LicenseSetting', undefined);
      (function (_0x257570) {
        _0x257570[_0x257570.ShopingMall = 0x1] = "ShopingMall";
        _0x257570[_0x257570.ShowAutoSetting = 0x10] = "ShowAutoSetting";
        _0x257570[_0x257570.NoSoundUnder1 = 0x11] = "NoSoundUnder1";
        _0x257570[_0x257570.NoQuickSpin = 0x12] = "NoQuickSpin";
        _0x257570[_0x257570.CloseManual = 0x27] = "CloseManual";
        _0x257570[_0x257570.CloseExtraBet = 0x3d] = "CloseExtraBet";
      })(_0x4aa9e1 || (_0x4aa9e1 = {}));
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, '0c18bO40hVJB4/zzDByb8vr', "ManualComponent", undefined);
      var _0x237ee5;
      var _0x5a0325;
      var _0x1d492c;
      var _0x13cc9f;
      var _0x50a90f;
      var _0x59736b;
      var _0x3b72e6;
      var _0x5466ac;
      var _0x260a7a;
      var _0x5e3ae8;
      var _0xa8b301;
      var _0x3ac695;
      var _0x234e5d;
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "1d950BFoN5LhJJ79uyt+/E+", "MarqueeComponent", undefined);
      var _0x372a1f = _0x297ef0.property;
      _0x237ee5 = _0x372a1f({
        'type': _0x2a92ae,
        'tooltip': "每秒的位移量"
      });
      _0x5a0325 = _0x372a1f({
        'type': _0x2a92ae,
        'tooltip': "循環播放的間隔"
      });
      _0x1d492c = _0x372a1f({
        'type': _0x2a92ae,
        'tooltip': "未超出的停留時間"
      });
      _0x13cc9f = _0x372a1f({
        'type': _0x2a92ae,
        'tooltip': "超出時的停留時間"
      });
      _0x50a90f = _0x372a1f({
        'type': _0x2a92ae,
        'tooltip': "尾部保留的空間"
      });
      _0x59736b = _0x372a1f({
        'type': _0x4fc6ef,
        'tooltip': '跑馬燈內容節點'
      });
      _0x3b72e6 = function (_0x555500) {
        function _0x2e2527() {
          var _0x1934ff;
          var _0x5bca70 = arguments.length;
          var _0x31a450 = new Array(_0x5bca70);
          for (var _0x21227f = 0x0; _0x21227f < _0x5bca70; _0x21227f++) {
            _0x31a450[_0x21227f] = arguments[_0x21227f];
          }
          _0x1a08d3(_0x1934ff = _0x555500.call.apply(_0x555500, [this].concat(_0x31a450)) || this, 'm_moveSpeed', _0x5466ac, _0x5199ec(_0x1934ff));
          _0x1a08d3(_0x1934ff, 'm_delayTime', _0x260a7a, _0x5199ec(_0x1934ff));
          _0x1a08d3(_0x1934ff, "m_waitTime", _0x5e3ae8, _0x5199ec(_0x1934ff));
          _0x1a08d3(_0x1934ff, "m_moveDelayTime", _0xa8b301, _0x5199ec(_0x1934ff));
          _0x1a08d3(_0x1934ff, "m_tailLeftSpace", _0x3ac695, _0x5199ec(_0x1934ff));
          _0x1a08d3(_0x1934ff, "m_content", _0x234e5d, _0x5199ec(_0x1934ff));
          _0x1934ff.m_imgs = null;
          _0x1934ff.m_viewWidth = null;
          _0x1934ff.m_stringSprite = null;
          _0x1934ff.m_isStart = false;
          _0x1934ff.m_isStop = false;
          _0x1934ff.m_scale = 0x1;
          _0x1934ff.m_imgIndex = -0x1;
          return _0x1934ff;
        }
        _0x4a7452(_0x2e2527, _0x555500);
        var _0x576123 = _0x2e2527.prototype;
        _0x576123.Init = function (_0x2c5099) {
          this.m_imgs = _0x2c5099;
          this.m_viewWidth = this.node.getComponent(_0x5e283f).contentSize.width;
          var _0x5c6e16 = this.m_content ? this.m_content : this.node.children[0x0];
          if (_0x2c5099 && _0x2c5099.length > 0x0) {
            if (!_0x5c6e16) {
              (_0x5c6e16 = new _0x4fc6ef()).addComponent(_0x5e283f);
              this.node.addChild(_0x5c6e16);
            }
            this.m_stringSprite = _0x5c6e16.getComponent(_0x1cbbb9);
            if (!this.m_stringSprite) {
              this.m_stringSprite = _0x5c6e16.addComponent(_0x1cbbb9);
            }
            this.m_stringSprite.type = _0x1cbbb9.Type.SIMPLE;
            this.m_stringSprite.sizeMode = _0x1cbbb9.SizeMode.TRIMMED;
          }
          _0x5c6e16.getComponent(_0x5e283f).setAnchorPoint(_0x6cd26b(0x0, 0.5));
          this.m_scale = _0x5c6e16.scale.x;
        };
        _0x576123.ShowOnce = function () {
          var _0xeeceb3 = _0x219aea(_0xb84dc1().mark(function _0x5a05c5(_0x1aae10) {
            var _0x35027a;
            var _0x4cb8ad;
            var _0x1c79a2;
            var _0x33e94e;
            var _0x469c2d;
            var _0xace8e4;
            var _0x33cbba;
            var _0x28d50e;
            var _0x4fa359;
            var _0x59b1e9;
            return _0xb84dc1().wrap(function (_0x498670) {
              for (;;) {
                switch (_0x498670.prev = _0x498670.next) {
                  case 0x0:
                    if (!this.m_isStart) {
                      _0x498670.next = 0x2;
                      break;
                    }
                    return _0x498670.abrupt('return');
                  case 0x2:
                    this.m_isStart = true;
                    if ("string" != typeof _0x1aae10) {
                      _0x498670.next = 0x18;
                      break;
                    }
                    if (!(_0x35027a = this.m_content.getComponent(_0x2133bd))) {
                      _0x498670.next = 0x13;
                      break;
                    }
                    _0x35027a.string = _0x1aae10;
                    _0x4cb8ad = _0x3d013c.times(_0x35027a.node.getComponent(_0x5e283f).width + this.m_tailLeftSpace, this.m_scale);
                    _0x35027a.node.active = true;
                    _0x1c79a2 = _0x4cb8ad + this.m_viewWidth;
                    _0x33e94e = _0x3d013c.divide(_0x1c79a2, this.m_moveSpeed);
                    _0x469c2d = _0x35027a.node.position.x;
                    _0x3ad8f0(_0x35027a.node).to(_0x33e94e, {
                      'position': _0x565251(_0x469c2d - _0x1c79a2, 0x0)
                    }).start();
                    _0x498670.next = 0xf;
                    return _0x534918.Wait(this, _0x33e94e);
                  case 0xf:
                    _0x35027a.node.active = false;
                    _0x35027a.node.setPosition(_0x565251(this.m_viewWidth, 0x0));
                    _0x498670.next = 0x16;
                    break;
                  case 0x13:
                    _0x43d302("RichText doesn't exist");
                    this.m_isStart = false;
                    return _0x498670.abrupt("return");
                  case 0x16:
                    _0x498670.next = 0x2c;
                    break;
                  case 0x18:
                    if (_0x1aae10) {
                      this.m_imgIndex++;
                      if (this.m_imgIndex >= this.m_imgs.length) {
                        this.m_imgIndex = 0x0;
                      }
                      _0xace8e4 = this.m_imgs[this.m_imgIndex];
                    } else {
                      _0xace8e4 = this.m_imgs[Math.floor(Math.random() * this.m_imgs.length)];
                    }
                    this.m_stringSprite.spriteFrame = _0xace8e4;
                    _0x33cbba = _0x3d013c.times(this.m_stringSprite.spriteFrame.rect.width + this.m_tailLeftSpace, this.m_scale);
                    this.m_stringSprite.node.active = true;
                    if (!(_0x33cbba > this.m_viewWidth)) {
                      _0x498670.next = 0x27;
                      break;
                    }
                    this.m_stringSprite.node.position = _0x565251(0x0, 0x0);
                    _0x498670.next = 0x20;
                    return _0x534918.Wait(this, this.m_moveDelayTime);
                  case 0x20:
                    _0x28d50e = _0x33cbba + this.m_viewWidth;
                    _0x4fa359 = _0x3d013c.divide(_0x28d50e, this.m_moveSpeed);
                    _0x3ad8f0(this.m_stringSprite.node).to(_0x4fa359, {
                      'position': _0x565251(-_0x33cbba, 0x0)
                    }).start();
                    _0x498670.next = 0x25;
                    return _0x534918.Wait(this, _0x4fa359);
                  case 0x25:
                    _0x498670.next = 0x2b;
                    break;
                  case 0x27:
                    _0x59b1e9 = _0x3d013c.minus(this.m_viewWidth, _0x33cbba);
                    this.m_stringSprite.node.position = _0x565251(_0x3d013c.divide(_0x59b1e9, 0x2), 0x0);
                    _0x498670.next = 0x2b;
                    return _0x534918.Wait(this, this.m_waitTime);
                  case 0x2b:
                    this.m_stringSprite.node.active = false;
                  case 0x2c:
                    this.m_isStart = false;
                  case 0x2d:
                  case "end":
                    return _0x498670.stop();
                }
              }
            }, _0x5a05c5, this);
          }));
          return function (_0x199b16) {
            return _0xeeceb3.apply(this, arguments);
          };
        }();
        _0x576123.ShowForever = function () {
          var _0x1185de = _0x219aea(_0xb84dc1().mark(function _0x2e7eee(_0x1359f0) {
            return _0xb84dc1().wrap(function (_0x5d9c22) {
              for (;;) {
                switch (_0x5d9c22.prev = _0x5d9c22.next) {
                  case 0x0:
                    if (undefined === _0x1359f0) {
                      _0x1359f0 = false;
                    }
                  case 0x1:
                    if (this.m_isStop) {
                      _0x5d9c22.next = 0x9;
                      break;
                    }
                    _0x5d9c22.next = 0x4;
                    return this.ShowOnce(_0x1359f0);
                  case 0x4:
                    if (!(this.m_delayTime && this.m_delayTime > 0x0)) {
                      _0x5d9c22.next = 0x7;
                      break;
                    }
                    _0x5d9c22.next = 0x7;
                    return _0x534918.Wait(this, this.m_delayTime);
                  case 0x7:
                    _0x5d9c22.next = 0x1;
                    break;
                  case 0x9:
                    this.m_isStop = false;
                  case 0xa:
                  case "end":
                    return _0x5d9c22.stop();
                }
              }
            }, _0x2e7eee, this);
          }));
          return function (_0x281311) {
            return _0x1185de.apply(this, arguments);
          };
        }();
        _0x576123.Stop = function () {
          this.m_isStop = true;
        };
        _0x576123.ChangeTimeSetting = function (_0x4d7307, _0x1e2509, _0x219a2c, _0x34185a, _0x29f05d) {
          this.m_moveSpeed = _0x4d7307;
          this.m_delayTime = _0x1e2509;
          this.m_waitTime = _0x219a2c;
          this.m_moveDelayTime = _0x34185a;
          this.m_tailLeftSpace = _0x29f05d;
        };
        return _0x2e2527;
      }(_0x3127b3);
      _0x5466ac = _0x159f02(_0x3b72e6.prototype, "m_moveSpeed", [_0x237ee5], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return 0x0;
        }
      });
      _0x260a7a = _0x159f02(_0x3b72e6.prototype, "m_delayTime", [_0x5a0325], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return 0x0;
        }
      });
      _0x5e3ae8 = _0x159f02(_0x3b72e6.prototype, 'm_waitTime', [_0x1d492c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return 0x0;
        }
      });
      _0xa8b301 = _0x159f02(_0x3b72e6.prototype, 'm_moveDelayTime', [_0x13cc9f], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return 0x0;
        }
      });
      _0x3ac695 = _0x159f02(_0x3b72e6.prototype, "m_tailLeftSpace", [_0x50a90f], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return 0x0;
        }
      });
      _0x234e5d = _0x159f02(_0x3b72e6.prototype, 'm_content', [_0x59736b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "eb033pmYDhAjadYFiwbi8gp", 'SpineKit', undefined);
      var _0x36917c = function () {
        function _0x480afa() {}
        _0x480afa.ForceCancel = function (_0x3e3cbe, _0x2bdbc2) {
          var _0x3f8dc0;
          var _0x1caf3e;
          var _0xf94e3c;
          if (!(null == (_0x3f8dc0 = this.m_cancelCbs) || null == (_0x1caf3e = (_0xf94e3c = _0x3f8dc0[_0x3e3cbe])[_0x2bdbc2]))) {
            _0x1caf3e.call(_0xf94e3c);
          }
        };
        _0x480afa.PlayAnimation = function (_0x11da78, _0x3c047f, _0x5328cc, _0x12bf82, _0x84cb06, _0x38da9e) {
          var _0x28f795 = this;
          if (undefined === _0x5328cc) {
            _0x5328cc = false;
          }
          if (undefined === _0x12bf82) {
            _0x12bf82 = 0x0;
          }
          if (undefined === _0x38da9e) {
            _0x38da9e = true;
          }
          return new Promise(function (_0x3b2ed0) {
            _0x28f795.m_cancelCbs[_0x11da78.name] = {};
            _0x28f795.m_cancelCbs[_0x11da78.name][_0x3c047f] = function () {
              _0x3b2ed0(true);
            };
            var _0x292061 = true;
            var _0x4fae57 = _0x11da78.getState();
            if (_0x4fae57) {
              var _0xed3c8f = _0x4fae57.expandToIndex(_0x12bf82);
              if (_0xed3c8f) {
                var _0x4f7999 = _0xed3c8f.animation.name + '.' + _0x3c047f;
                _0x292061 = undefined === _0x4fae57.data.animationToMixTime[_0x4f7999];
              }
            }
            if (_0x292061) {
              _0x11da78.clearTrack(_0x12bf82);
              if (_0x38da9e) {
                _0x11da78.setToSetupPose();
              }
            }
            var _0x3f4c6e = _0x11da78.setAnimation(_0x12bf82, _0x3c047f, _0x5328cc);
            if (_0x3f4c6e) {
              _0x11da78.setTrackEventListener(_0x3f4c6e, function (_0x5f56a0, _0x5b0f40) {
                if (_0x3f4c6e && _0x3f4c6e.animation.name == _0x5f56a0.animation.name) {
                  if (!(null == _0x84cb06)) {
                    _0x84cb06(_0x5b0f40.data.name);
                  }
                }
              });
              _0x11da78.setTrackCompleteListener(_0x3f4c6e, function (_0x8a3bc) {
                if (_0x3f4c6e && _0x3f4c6e.animation.name == _0x8a3bc.animation.name) {
                  _0x11da78.setTrackCompleteListener(_0x3f4c6e, function () {});
                  _0x11da78.setTrackInterruptListener(_0x3f4c6e, function () {});
                  if (_0x28f795.m_cancelCbs[_0x11da78.name] && _0x28f795.m_cancelCbs[_0x11da78.name][_0x3c047f]) {
                    _0x28f795.m_cancelCbs[_0x11da78.name][_0x3c047f] = null;
                  }
                  _0x3b2ed0(false);
                }
              });
              _0x11da78.setTrackInterruptListener(_0x3f4c6e, function (_0x18ec32) {
                if (_0x3f4c6e && _0x3f4c6e.animation.name == _0x18ec32.animation.name) {
                  _0x11da78.setTrackCompleteListener(_0x3f4c6e, function () {});
                  _0x11da78.setTrackInterruptListener(_0x3f4c6e, function () {});
                  if (_0x28f795.m_cancelCbs[_0x11da78.name] && _0x28f795.m_cancelCbs[_0x11da78.name][_0x3c047f]) {
                    _0x28f795.m_cancelCbs[_0x11da78.name][_0x3c047f] = null;
                  }
                  _0x3b2ed0(true);
                }
              });
            } else {
              _0x11da78.setCompleteListener(function () {
                _0x11da78.setCompleteListener(null);
                _0x11da78.setInterruptListener(null);
                if (_0x28f795.m_cancelCbs[_0x11da78.name] && _0x28f795.m_cancelCbs[_0x11da78.name][_0x3c047f]) {
                  _0x28f795.m_cancelCbs[_0x11da78.name][_0x3c047f] = null;
                }
                _0x3b2ed0(false);
              });
              _0x11da78.setInterruptListener(function () {
                _0x11da78.setCompleteListener(null);
                _0x11da78.setInterruptListener(null);
                if (_0x28f795.m_cancelCbs[_0x11da78.name] && _0x28f795.m_cancelCbs[_0x11da78.name][_0x3c047f]) {
                  _0x28f795.m_cancelCbs[_0x11da78.name][_0x3c047f] = null;
                }
                _0x3b2ed0(true);
              });
            }
          });
        };
        return _0x480afa;
      }();
      _0x36917c.m_cancelCbs = {};
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "93417uqlh9Fm6TH2poz4GO4", "NearWinEffectComponent", undefined);
      var _0x5e182a;
      var _0x46b2e9;
      var _0x464f4d;
      var _0x1bf0cb;
      var _0x441521;
      var _0x570bd7;
      var _0x24fcec;
      var _0x372a6b;
      var _0x4d20f8;
      var _0x4f1337;
      var _0x1f27b7;
      var _0x4e60b9;
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "02e880GcB9Jw7QDr8UUWxEV", "ShakeComponent", undefined);
      var _0x116e6e = _0x297ef0.ccclass;
      var _0x5079ad = _0x297ef0.property;
      var _0x5e04f4 = _0x3d8e42({});
      var _0x58fcd0;
      !function (_0xcf9d2c) {
        _0xcf9d2c[_0xcf9d2c.None = 0x0] = "None";
        _0xcf9d2c[_0xcf9d2c.FadeIn = 0x1] = "FadeIn";
        _0xcf9d2c[_0xcf9d2c.FadeOut = 0x2] = 'FadeOut';
      }(_0x58fcd0 || (_0x58fcd0 = {}));
      var _0x5ebd9b = _0x3d8e42({
        'None': _0x58fcd0.None,
        'FadeIn': _0x58fcd0.FadeIn,
        'FadeOut': _0x58fcd0.FadeOut
      });
      _0x5e182a = _0x116e6e('_TweenInfo');
      _0x46b2e9 = _0x5079ad({
        'visible': false,
        'tooltip': 'Easing'
      });
      _0x464f4d = _0x5079ad({
        'type': _0x5e04f4,
        'visible': false
      });
      _0x1bf0cb = _0x5079ad({
        'visible': true,
        'displayName': "緩動效果",
        'type': _0x5e04f4
      });
      _0x441521 = _0x5079ad({
        'type': _0x5ebd9b,
        'visible': false
      });
      _0x570bd7 = _0x5079ad({
        'visible': true,
        'displayName': "fade type",
        'type': _0x5ebd9b
      });
      _0x24fcec = _0x5079ad({
        'min': 0x0,
        'visible': true,
        'displayName': '時間'
      });
      _0x372a6b = function () {
        function _0x113bfe() {
          _0x1a08d3(this, 'm_EasingName', _0x4d20f8, this);
          _0x1a08d3(this, "__easingIdx", _0x4f1337, this);
          _0x1a08d3(this, '__fadeType', _0x1f27b7, this);
          this._EasingEnumList = [];
          _0x1a08d3(this, "duration", _0x4e60b9, this);
        }
        _0x2d513c(_0x113bfe, [{
          'key': "_easingIdx",
          'get': function () {},
          'set': function (_0x50b74d) {}
        }, {
          'key': "_fadeType",
          'get': function () {
            return this.__fadeType;
          },
          'set': function (_0x3966d1) {}
        }]);
        return _0x113bfe;
      }();
      _0x4d20f8 = _0x159f02(_0x372a6b.prototype, "m_EasingName", [_0x46b2e9], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return '';
        }
      });
      _0x4f1337 = _0x159f02(_0x372a6b.prototype, '__easingIdx', [_0x464f4d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x159f02(_0x372a6b.prototype, "_easingIdx", [_0x1bf0cb], Object.getOwnPropertyDescriptor(_0x372a6b.prototype, "_easingIdx"), _0x372a6b.prototype);
      _0x1f27b7 = _0x159f02(_0x372a6b.prototype, '__fadeType', [_0x441521], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x159f02(_0x372a6b.prototype, '_fadeType', [_0x570bd7], Object.getOwnPropertyDescriptor(_0x372a6b.prototype, "_fadeType"), _0x372a6b.prototype);
      _0x4e60b9 = _0x159f02(_0x372a6b.prototype, 'duration', [_0x24fcec], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return 0x1;
        }
      });
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "b57cahiKlxMZL7TyWc1iHaf", "SloganComponent", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, 'c6e0eKOKjtNwJBDq/hJOYgn', 'index', undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "03d74kKNtJBzYINByPAwVPP", "IdleState", undefined);
      var _0x14b88b;
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, '35603hPHUdKBKD1XTU2iWOK', "SpineManager", undefined);
      _0x14b88b = function (_0x74277d) {
        function _0x10c19b() {
          var _0x3ee316;
          var _0x33948d = arguments.length;
          var _0x11e946 = new Array(_0x33948d);
          for (var _0x30b8d8 = 0x0; _0x30b8d8 < _0x33948d; _0x30b8d8++) {
            _0x11e946[_0x30b8d8] = arguments[_0x30b8d8];
          }
          (_0x3ee316 = _0x74277d.call.apply(_0x74277d, [this].concat(_0x11e946)) || this).m_spine = undefined;
          _0x3ee316.m_endCb = undefined;
          _0x3ee316.m_frameCb = undefined;
          _0x3ee316.m_isCallEndCb = false;
          return _0x3ee316;
        }
        _0x4a7452(_0x10c19b, _0x74277d);
        var _0x2c3d62 = _0x10c19b.prototype;
        _0x2c3d62.onLoad = function () {
          this.m_spine = this.node.getComponent(_0x19d01e.Skeleton);
        };
        _0x2c3d62.Play = function (_0x1ea3ec, _0x12aeaa, _0x2edebd, _0x40b333, _0x5425a0) {
          var _0x12ceb9 = this;
          if (undefined === _0x2edebd) {
            _0x2edebd = false;
          }
          if (undefined === _0x40b333) {
            _0x40b333 = null;
          }
          if (undefined === _0x5425a0) {
            _0x5425a0 = null;
          }
          if (!this.m_spine) {
            this.m_spine = this.node.getComponent(_0x19d01e.Skeleton);
          }
          var _0x792e3b = this.m_spine.setAnimation(_0x12aeaa, _0x1ea3ec, _0x2edebd);
          this.m_isCallEndCb = false;
          this.m_endCb = _0x5425a0;
          this.m_frameCb = _0x40b333;
          if (_0x792e3b) {
            if (_0x40b333) {
              this.m_spine.setTrackEventListener(_0x792e3b, function (_0x56a909, _0x1cfae2) {
                if (_0x12ceb9.m_frameCb) {
                  _0x12ceb9.m_frameCb(_0x1cfae2);
                }
              });
            }
            if (_0x5425a0) {
              this.m_spine.setTrackCompleteListener(_0x792e3b, function () {
                if (_0x12ceb9.m_endCb && !_0x12ceb9.m_isCallEndCb) {
                  _0x12ceb9.m_isCallEndCb = true;
                  _0x12ceb9.m_endCb();
                }
              });
            }
          }
        };
        _0x2c3d62.NextPlay = function (_0x451a03, _0x1db570, _0x1e4214) {
          if (undefined === _0x1e4214) {
            _0x1e4214 = false;
          }
          this.m_spine.addAnimation(_0x1db570, _0x451a03, _0x1e4214);
        };
        _0x2c3d62.ChangeSkin = function (_0x160584) {
          if (!this.m_spine) {
            this.m_spine = this.node.getComponent(_0x19d01e.Skeleton);
          }
          this.m_spine.setSkin(_0x160584);
        };
        return _0x10c19b;
      }(_0x3127b3);
      _0x14b88b.Animation = {
        'Show': "Show",
        'Update': "Update",
        'Reset': 'Reset',
        'Lock': "Lock",
        'Lock2': "Lock2",
        'Lock3': "Lock3",
        'Win': "Win",
        'Scatter_Win': "Scatter_Win",
        'ScatterWin_Start': 'ScatterWin_Start',
        'ScatterWin_End': "ScatterWin_End",
        'Expand_1x1': "Expand_1x1",
        'Expand_1x3': 'Expand_1x3',
        'Expand_Ready': "Expand_Ready",
        'Expand_Spawn': "Expand_Spawn",
        'Shift': "Shift",
        'Idle': "Idle",
        'Hit': 'Hit',
        'Hit2': "Hit2",
        'Hit3': "Hit3",
        'Ready': "Ready",
        'Fire1': 'Fire1',
        'Fire2': "Fire2",
        'Start': "Start",
        'Start2': "Start2",
        'Loop': 'Loop',
        'Loop2': "Loop2",
        'Loop_L': "Loop_L",
        'Loop_S': "Loop_S",
        'End': 'End',
        'End2': "End2",
        'FG_1_Start': 'FG_1_Start',
        'FG_2_Start': "FG_2_Start",
        'On': 'On',
        'Off': 'Off',
        'Setup_On': "Setup_On",
        'Setup_Off': 'Setup_Off',
        'Wait': "wait",
        'FgReveal': 'FG_Reveal',
        'NearWin': "NearWin",
        'CharNearWin': "Nearwin",
        'Stop': "Stop",
        'Setup': "Setup",
        'Respin_Show': "Respin_Show",
        'Respin_Off': "Respin_Off",
        'Respin_End': "Respin_End",
        'Respin_Start': "Respin_Start"
      };
      _0x14b88b.Skin = {
        'Skin1': "Skin1",
        'Skin2': "Skin2",
        'MG': 'MG',
        'FG': 'FG'
      };
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "ec603srITxFc4c1KIE3TUfT", "PlateShowState", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "16d75WPn61A6bj6DY417Xv8", 'RoundEndState', undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "3bcbbbQZ6tBN5AQBU9rTB5u", "RoundShowEndState", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "d3179jq84BDVpPZjC1AYJMV", "SpinState", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "e8faeY7SeVEibmSC8wYVrc5", "UnshowPrepareState", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "4114f2lBAJBfbR+U9HCAqYv", "WaitReadyState", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "8aedbeDu9FJFaUSNqlGxvw6", 'WaitResState', undefined);
      var _0x27d0a8;
      var _0x1acc02;
      var _0x142832;
      var _0x5bc641;
      var _0x5a5ee;
      var _0x35c89c;
      var _0x62502c;
      var _0x134a59;
      var _0x38cbae;
      var _0x58ba13;
      var _0x4b9064;
      var _0x302de2;
      var _0x1e6b9a;
      var _0x2e820b;
      var _0x431c83;
      var _0x147193;
      var _0x47c2f1;
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, 'a4b83idlNlHcZQFqX6vJhFz', "ExtraBetComponent", undefined);
      var _0x52e6c6 = _0x297ef0.property;
      _0x27d0a8 = _0x52e6c6({
        'type': _0x4fc6ef,
        'tooltip': "EX 按鈕最頂層節點(整顆node)"
      });
      _0x1acc02 = _0x52e6c6({
        'type': _0xc588c2,
        'tooltip': "EX 按鈕"
      });
      _0x142832 = _0x52e6c6({
        'type': _0xc588c2,
        'tooltip': '按鈕ON'
      });
      _0x5bc641 = _0x52e6c6({
        'type': _0xc588c2,
        'tooltip': '按鈕OFF'
      });
      _0x5a5ee = _0x52e6c6({
        'type': _0xc588c2,
        'tooltip': '提示問號按鈕'
      });
      _0x35c89c = _0x52e6c6({
        'type': _0x4fc6ef,
        'tooltip': '提示文字tip面板'
      });
      _0x62502c = _0x52e6c6({
        'type': _0x4457da,
        'tooltip': "功能說明文字串Label"
      });
      _0x134a59 = _0x52e6c6({
        'type': _0x1cbbb9,
        'tooltip': "本體ExtraBet文字圖片"
      });
      _0x38cbae = function (_0x1c1690) {
        function _0x451184() {
          var _0x30ab30;
          var _0x5e4c59 = arguments.length;
          var _0xa3067b = new Array(_0x5e4c59);
          for (var _0x377c32 = 0x0; _0x377c32 < _0x5e4c59; _0x377c32++) {
            _0xa3067b[_0x377c32] = arguments[_0x377c32];
          }
          _0x1a08d3(_0x30ab30 = _0x1c1690.call.apply(_0x1c1690, [this].concat(_0xa3067b)) || this, "m_multiExtraBetNode", _0x58ba13, _0x5199ec(_0x30ab30));
          _0x1a08d3(_0x30ab30, "m_multiBtn", _0x4b9064, _0x5199ec(_0x30ab30));
          _0x1a08d3(_0x30ab30, "m_multiBtn_on", _0x302de2, _0x5199ec(_0x30ab30));
          _0x1a08d3(_0x30ab30, 'm_multiBtn_off', _0x1e6b9a, _0x5199ec(_0x30ab30));
          _0x1a08d3(_0x30ab30, "m_multiBtn_TipQuesMark", _0x2e820b, _0x5199ec(_0x30ab30));
          _0x1a08d3(_0x30ab30, "m_multiBtn_Tip", _0x431c83, _0x5199ec(_0x30ab30));
          _0x1a08d3(_0x30ab30, "m_multiBtn_Description", _0x147193, _0x5199ec(_0x30ab30));
          _0x1a08d3(_0x30ab30, "m_Txt_Extra_Bet", _0x47c2f1, _0x5199ec(_0x30ab30));
          _0x30ab30.m_isExtendShowBar = false;
          _0x30ab30.m_ExtraBetAniPlaying = null;
          _0x30ab30.m_isExtra = false;
          _0x30ab30.m_isForceExtraOnEnd = false;
          _0x30ab30.m_isTwoStep = false;
          _0x30ab30.m_toStepTwo = false;
          _0x30ab30.m_triggerCb = null;
          _0x30ab30.m_canExtend = true;
          return _0x30ab30;
        }
        _0x4a7452(_0x451184, _0x1c1690);
        var _0x51afb5 = _0x451184.prototype;
        _0x51afb5.Init = function (_0x3a0117, _0x13d9f6, _0x4a1982, _0x40dac3, _0x2ec0f8) {
          var _0x191bcc = this;
          if (undefined === _0x40dac3) {
            _0x40dac3 = false;
          }
          if (undefined === _0x2ec0f8) {
            _0x2ec0f8 = false;
          }
          if (_0x3d013c.CheckSwitchOff(_0x4aa9e1.CloseExtraBet)) {
            this.node.active = false;
            return void this.node.on(_0x52e01e.ACTIVE_IN_HIERARCHY_CHANGED, function () {
              _0x191bcc.node.active = false;
            });
          }
          this.m_triggerCb = _0x3a0117;
          this.m_isTwoStep = _0x40dac3;
          if (this.m_multiBtn_Description && this.m_Txt_Extra_Bet) {
            _0x2793f6(" localeStringManager.CurrLang : " + _0x1e91b3.CurrLang);
            this.m_multiBtn_Description.string = _0x1e91b3.GetString(_0x13d9f6);
            this.m_Txt_Extra_Bet.spriteFrame = _0x1e91b3.GetGameAtlas().getSpriteFrame(_0x4a1982);
          }
          _0x175559.Init(_0x2ec0f8 ? null : this.node, this.ForceSetExtraBet.bind(this));
        };
        _0x51afb5.onLoad = function () {
          var _0x44903b = this;
          if (!_0x3d013c.CheckSwitchOff(_0x4aa9e1.CloseExtraBet)) {
            _0x2793f6("ExtraBet onLoad");
            if (this.m_multiBtn) {
              this.m_multiBtn.node.on(_0x4fc6ef.EventType.TOUCH_END, function () {
                if (!_0x44903b.m_ExtraBetAniPlaying) {
                  _0x3a77d3.Play(_0x534918.AudioClips.COMMON_BTN);
                  if (_0x44903b.CheckCanUseBtn()) {
                    _0x44903b.ExtendShowBar(!_0x44903b.m_isExtendShowBar);
                  } else {
                    _0x150149.ShowMessageBox(_0x534918.StringKey.FREEWINCASH_PLAYING1);
                  }
                }
              });
            }
            for (var _0x1a27d8 = 0x0; _0x1a27d8 < this.m_multiBtn_on.length; _0x1a27d8++) {
              this.m_multiBtn_on[_0x1a27d8].node.on(_0x4fc6ef.EventType.TOUCH_END, function () {
                if (!_0x44903b.m_ExtraBetAniPlaying) {
                  if (_0x44903b.CheckCanUseBtn()) {
                    _0x44903b.ChangeBetMode();
                  } else {
                    _0x150149.ShowMessageBox(_0x534918.StringKey.FREEWINCASH_PLAYING1);
                  }
                }
              });
              if (this.m_multiBtn_off[_0x1a27d8]) {
                this.m_multiBtn_off[_0x1a27d8].node.on(_0x4fc6ef.EventType.TOUCH_END, function () {
                  if (!_0x44903b.m_ExtraBetAniPlaying) {
                    _0x3a77d3.Play(_0x534918.AudioClips.COMMON_BTN);
                    if (_0x44903b.CheckCanUseBtn()) {
                      _0x44903b.ChangeBetMode();
                    }
                  }
                });
              }
            }
            if (this.m_multiBtn_TipQuesMark) {
              this.m_multiBtn_TipQuesMark.node.on(_0x4fc6ef.EventType.TOUCH_END, _0x219aea(_0xb84dc1().mark(function _0x23af6a() {
                return _0xb84dc1().wrap(function (_0x30218c) {
                  for (;;) {
                    switch (_0x30218c.prev = _0x30218c.next) {
                      case 0x0:
                        if (_0x44903b.m_ExtraBetAniPlaying) {
                          _0x30218c.next = 0xd;
                          break;
                        }
                        _0x3a77d3.Play(_0x534918.AudioClips.COMMON_BTN);
                        if (_0x7e0b1c.Current() != _0x4ecfde.IDLE || _0x183401.IsBuyBonus) {
                          _0x30218c.next = 0xc;
                          break;
                        }
                        if (!_0x44903b.m_isExtendShowBar) {
                          _0x30218c.next = 0x7;
                          break;
                        }
                        _0x44903b.m_multiBtn_Tip.active = !_0x44903b.m_multiBtn_Tip.active;
                        _0x30218c.next = 0xa;
                        break;
                      case 0x7:
                        _0x30218c.next = 0x9;
                        return _0x44903b.ExtendShowBar(true);
                      case 0x9:
                        if (!_0x44903b.m_multiBtn_Tip.active && _0x44903b.m_isExtendShowBar) {
                          _0x44903b.m_multiBtn_Tip.active = true;
                        }
                      case 0xa:
                        _0x30218c.next = 0xd;
                        break;
                      case 0xc:
                        _0x150149.ShowMessageBox(_0x534918.StringKey.FREEWINCASH_PLAYING1);
                      case 0xd:
                      case "end":
                        return _0x30218c.stop();
                    }
                  }
                }, _0x23af6a);
              })));
            }
            this.ExtendShowBar(false);
          }
        };
        _0x51afb5.start = function () {
          _0x2793f6("ExtraBet start");
        };
        _0x51afb5.CheckCanUseBtn = function () {
          return _0x534918.IsInMG() && _0x7e0b1c.Current() == _0x4ecfde.IDLE && !_0x534918.IsUsingItem && !_0x183401.IsBuyBonus && !_0x1bd3eb.IsFeaturesDemoMode && !_0x3d013c.CheckSwitchOff(_0x4aa9e1.CloseExtraBet);
        };
        _0x51afb5.OnSpin = function () {
          this.ExtendShowBar(false);
        };
        _0x51afb5.ShowExtra = function (_0xaa4eee) {
          if (this.m_multiExtraBetNode && !_0x3d013c.CheckSwitchOff(_0x4aa9e1.CloseExtraBet)) {
            this.m_multiExtraBetNode.active = _0xaa4eee;
          }
        };
        _0x51afb5.GoToFeatures = function () {};
        _0x51afb5.ExtendShowBar = function () {
          var _0x2904c3 = _0x219aea(_0xb84dc1().mark(function _0x2f4f6d(_0x52278a) {
            var _0x9b9262;
            return _0xb84dc1().wrap(function (_0x4eb0fb) {
              for (;;) {
                switch (_0x4eb0fb.prev = _0x4eb0fb.next) {
                  case 0x0:
                    if (this.m_canExtend && !_0x3d013c.CheckSwitchOff(_0x4aa9e1.CloseExtraBet)) {
                      _0x4eb0fb.next = 0x2;
                      break;
                    }
                    return _0x4eb0fb.abrupt('return');
                  case 0x2:
                    if (!_0x4bd5fc || this.m_ExtraBetAniPlaying) {
                      _0x4eb0fb.next = 0x1f;
                      break;
                    }
                    if (!_0x52278a) {
                      _0x4eb0fb.next = 0x14;
                      break;
                    }
                    if (_0x4bd5fc.IsAutoSpin || _0x534918.IsUsingItem || _0x183401.IsBuyBonus) {
                      _0x4eb0fb.next = 0x11;
                      break;
                    }
                    if (this.m_isExtendShowBar) {
                      _0x4eb0fb.next = 0xf;
                      break;
                    }
                    this.m_isExtendShowBar = true;
                    _0x4bd5fc.SetSpinState(0x1);
                    this.m_ExtraBetAniPlaying = true;
                    if (!this.m_multiExtraBetNode) {
                      _0x4eb0fb.next = 0xc;
                      break;
                    }
                    _0x4eb0fb.next = 0xc;
                    return this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x1c3d03), "ExtraBet_Show");
                  case 0xc:
                    this.m_ExtraBetAniPlaying = false;
                    _0x4bd5fc.SetSpinState(0x0);
                    if (this.m_isExtra && this.m_multiExtraBetNode) {
                      this.m_multiExtraBetNode.getComponent(_0x1c3d03).play("ExtraBet_Active");
                    }
                  case 0xf:
                    _0x4eb0fb.next = 0x12;
                    break;
                  case 0x11:
                    _0x150149.ShowMessageBox(_0x534918.StringKey.FREEWINCASH_PLAYING1);
                  case 0x12:
                    _0x4eb0fb.next = 0x1f;
                    break;
                  case 0x14:
                    if (!this.m_isExtendShowBar) {
                      _0x4eb0fb.next = 0x1f;
                      break;
                    }
                    if (!_0x4bd5fc.IsAutoSpin) {
                      _0x4bd5fc.SetSpinState(0x1);
                    }
                    if (this.m_multiBtn_Tip) {
                      this.m_multiBtn_Tip.active = false;
                    }
                    this.m_ExtraBetAniPlaying = true;
                    if (!this.m_multiExtraBetNode) {
                      _0x4eb0fb.next = 0x1b;
                      break;
                    }
                    _0x4eb0fb.next = 0x1b;
                    return this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x1c3d03), 'ExtraBet_Close');
                  case 0x1b:
                    this.m_ExtraBetAniPlaying = false;
                    if (!_0x4bd5fc.IsAutoSpin) {
                      _0x4bd5fc.SetSpinState(0x0);
                    }
                    if (this.m_multiExtraBetNode) {
                      if (this.m_isExtra) {
                        this.m_multiExtraBetNode.getComponent(_0x1c3d03).play("ExtraBet_Active");
                      } else {
                        this.m_multiExtraBetNode.getComponent(_0x1c3d03).play("ExtraBet_OFF");
                        (_0x9b9262 = this.m_multiExtraBetNode.getComponent(_0x1c3d03).getState("ExtraBet_OFF")).setTime(_0x9b9262.duration);
                      }
                    }
                    this.m_isExtendShowBar = false;
                  case 0x1f:
                  case "end":
                    return _0x4eb0fb.stop();
                }
              }
            }, _0x2f4f6d, this);
          }));
          return function (_0x52c71e) {
            return _0x2904c3.apply(this, arguments);
          };
        }();
        _0x51afb5.ChangeBetMode = function () {
          var _0x18f4a0 = _0x219aea(_0xb84dc1().mark(function _0x198464() {
            var _0x40fa06;
            return _0xb84dc1().wrap(function (_0x2716a1) {
              for (;;) {
                switch (_0x2716a1.prev = _0x2716a1.next) {
                  case 0x0:
                    if (!_0x3d013c.CheckSwitchOff(_0x4aa9e1.CloseExtraBet)) {
                      _0x2716a1.next = 0x2;
                      break;
                    }
                    return _0x2716a1.abrupt("return");
                  case 0x2:
                    _0x2793f6("ChangeBetMode stateManager.Current() : ", _0x7e0b1c.Current());
                    if (!_0x4bd5fc || _0x183401.IsBuyBonus || _0x7e0b1c.Current() !== _0x4ecfde.IDLE && !this.m_isExtra) {
                      _0x2716a1.next = 0x24;
                      break;
                    }
                    this.m_isExtra = !this.m_isExtra;
                    _0x40fa06 = [];
                    if (!this.m_isExtra) {
                      _0x2716a1.next = 0x18;
                      break;
                    }
                    if (this.m_isTwoStep) {
                      this.m_toStepTwo = true;
                    } else {
                      _0x4bd5fc.ChangeMultiBet(0x1);
                    }
                    if (0x1 == this.m_multiBtn_on.length) {
                      this.m_multiBtn_on[0x0].node.active = true;
                      this.m_multiBtn_off[0x0].node.active = false;
                    }
                    this.m_ExtraBetAniPlaying = true;
                    if (!(null == _0x4bd5fc)) {
                      _0x4bd5fc.SetSpinState(0x1);
                    }
                    if (!(null == _0x1bd3eb)) {
                      _0x1bd3eb.SetBuyBonusState(false);
                    }
                    if (this.m_multiExtraBetNode) {
                      _0x40fa06.push(this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x1c3d03), 'ExtraBet_ON'));
                    }
                    _0x40fa06.push(this.m_triggerCb(this.m_isExtra, false));
                    _0x2716a1.next = 0x10;
                    return Promise.all(_0x40fa06);
                  case 0x10:
                    this.m_ExtraBetAniPlaying = false;
                    if (!(null == _0x4bd5fc)) {
                      _0x4bd5fc.SetSpinState(0x0);
                    }
                    if (this.m_multiExtraBetNode) {
                      this.m_multiExtraBetNode.getComponent(_0x1c3d03).play("ExtraBet_Active");
                    }
                    _0x2716a1.next = 0x15;
                    return _0x534918.Wait(this, 0.2);
                  case 0x15:
                    if (!(null == _0x1bd3eb)) {
                      _0x1bd3eb.SetBuyBonusState(true);
                    }
                    _0x2716a1.next = 0x22;
                    break;
                  case 0x18:
                    _0x4bd5fc.ChangeMultiBet(0x0);
                    if (0x1 == this.m_multiBtn_on.length) {
                      this.m_multiBtn_on[0x0].node.active = false;
                      this.m_multiBtn_off[0x0].node.active = true;
                    }
                    this.m_ExtraBetAniPlaying = true;
                    if (!(null == _0x4bd5fc)) {
                      _0x4bd5fc.SetSpinState(0x1);
                    }
                    if (this.m_multiExtraBetNode) {
                      _0x40fa06.push(this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x1c3d03), "ExtraBet_OFF"));
                    }
                    _0x40fa06.push(this.m_triggerCb(this.m_isExtra, false));
                    _0x2716a1.next = 0x20;
                    return Promise.all(_0x40fa06);
                  case 0x20:
                    this.m_ExtraBetAniPlaying = false;
                    if (!(null == _0x4bd5fc)) {
                      _0x4bd5fc.SetSpinState(0x0);
                    }
                  case 0x22:
                    _0x2716a1.next = 0x25;
                    break;
                  case 0x24:
                    if (_0x7e0b1c.Current() !== _0x4ecfde.IDLE) {
                      _0x2793f6("TRIAL_REFUSED_REASON 1 ");
                      _0x150149.ShowMessageBox(_0x534918.StringKey.FREEWINCASH_PLAYING1);
                    }
                  case 0x25:
                  case "end":
                    return _0x2716a1.stop();
                }
              }
            }, _0x198464, this);
          }));
          return function () {
            return _0x18f4a0.apply(this, arguments);
          };
        }();
        _0x51afb5.SetTwoStepMulti = function () {
          var _0x4efdf = _0x219aea(_0xb84dc1().mark(function _0x5aa5d3(_0x5cc7bb, _0x380da9) {
            return _0xb84dc1().wrap(function (_0x2f5ce1) {
              for (;;) {
                switch (_0x2f5ce1.prev = _0x2f5ce1.next) {
                  case 0x0:
                    if (!_0x3d013c.CheckSwitchOff(_0x4aa9e1.CloseExtraBet)) {
                      _0x2f5ce1.next = 0x2;
                      break;
                    }
                    return _0x2f5ce1.abrupt("return");
                  case 0x2:
                    if (!this.m_isTwoStep || !this.m_toStepTwo) {
                      _0x2f5ce1.next = 0xf;
                      break;
                    }
                    if (!_0x5cc7bb) {
                      _0x2f5ce1.next = 0x7;
                      break;
                    }
                    _0x4bd5fc.ChangeMultiBet(_0x380da9);
                    _0x2f5ce1.next = 0xf;
                    break;
                  case 0x7:
                    this.m_isExtra = false;
                    if (0x1 == this.m_multiBtn_on.length) {
                      this.m_multiBtn_on[0x0].node.active = false;
                      this.m_multiBtn_off[0x0].node.active = true;
                    }
                    this.m_ExtraBetAniPlaying = true;
                    if (_0x4bd5fc) {
                      _0x4bd5fc.SetSpinState(0x1);
                    }
                    if (!this.m_multiExtraBetNode) {
                      _0x2f5ce1.next = 0xe;
                      break;
                    }
                    _0x2f5ce1.next = 0xe;
                    return this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x1c3d03), "ExtraBet_OFF");
                  case 0xe:
                    this.m_ExtraBetAniPlaying = false;
                  case 0xf:
                  case "end":
                    return _0x2f5ce1.stop();
                }
              }
            }, _0x5aa5d3, this);
          }));
          return function (_0x3e100c, _0x3d26c7) {
            return _0x4efdf.apply(this, arguments);
          };
        }();
        _0x51afb5.ForceSetExtraBet = function () {
          var _0x2db505 = _0x219aea(_0xb84dc1().mark(function _0x319045(_0x54d38c, _0x3fd92f) {
            var _0x1ce8fa;
            return _0xb84dc1().wrap(function (_0x407c64) {
              for (;;) {
                switch (_0x407c64.prev = _0x407c64.next) {
                  case 0x0:
                    if (undefined === _0x3fd92f) {
                      _0x3fd92f = 0x1;
                    }
                    if (!_0x3d013c.CheckSwitchOff(_0x4aa9e1.CloseExtraBet)) {
                      _0x407c64.next = 0x3;
                      break;
                    }
                    return _0x407c64.abrupt("return");
                  case 0x3:
                    if (!_0x54d38c) {
                      _0x407c64.next = 0xe;
                      break;
                    }
                    this.m_isForceExtraOnEnd = false;
                    this.m_isExtra = true;
                    if (0x1 == this.m_multiBtn_on.length) {
                      this.m_multiBtn_on[0x0].node.active = true;
                      this.m_multiBtn_off[0x0].node.active = false;
                    }
                    if (this.m_multiExtraBetNode) {
                      this.m_multiExtraBetNode.getComponent(_0x1c3d03).play("ExtraBet_Active");
                    }
                    if (this.m_isTwoStep) {
                      this.m_toStepTwo = true;
                      this.SetTwoStepMulti(_0x54d38c, _0x3fd92f);
                    } else {
                      _0x4bd5fc.ChangeMultiBet(_0x3fd92f);
                    }
                    _0x407c64.next = 0xb;
                    return this.m_triggerCb(_0x54d38c, true);
                  case 0xb:
                    this.m_isForceExtraOnEnd = true;
                    _0x407c64.next = 0x17;
                    break;
                  case 0xe:
                    if (!this.m_isExtra) {
                      _0x407c64.next = 0x17;
                      break;
                    }
                    _0x1ce8fa = [];
                    this.m_isExtra = false;
                    if (0x1 == this.m_multiBtn_on.length) {
                      this.m_multiBtn_on[0x0].node.active = false;
                      this.m_multiBtn_off[0x0].node.active = true;
                    }
                    _0x4bd5fc.ChangeMultiBet(0x0);
                    if (this.m_multiExtraBetNode) {
                      if (this.m_isExtendShowBar) {
                        _0x1ce8fa.push(this.ExtendShowBar(false));
                      } else {
                        _0x1ce8fa.push(this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x1c3d03), 'ExtraBet_OFF'));
                      }
                    }
                    _0x1ce8fa.push(this.m_triggerCb(_0x54d38c, true));
                    _0x407c64.next = 0x17;
                    return Promise.all(_0x1ce8fa);
                  case 0x17:
                  case "end":
                    return _0x407c64.stop();
                }
              }
            }, _0x319045, this);
          }));
          return function (_0x412704, _0xb39c26) {
            return _0x2db505.apply(this, arguments);
          };
        }();
        _0x51afb5.OnRotation = function () {
          if (!_0x3d013c.CheckSwitchOff(_0x4aa9e1.CloseExtraBet)) {
            if (this.m_multiExtraBetNode) {
              if (this.m_isExtra) {
                this.m_multiExtraBetNode.getComponent(_0x1c3d03).play("ExtraBet_Active");
              } else {
                this.m_multiExtraBetNode.getComponent(_0x1c3d03).play('ExtraBet_Stop');
              }
            }
            if (this.m_multiBtn_Tip) {
              this.m_multiBtn_Tip.active = false;
            }
          }
        };
        _0x51afb5.IsExAnimationTouchable = function () {
          return !this.m_ExtraBetAniPlaying;
        };
        _0x51afb5.FirstShowBar = function () {};
        _0x51afb5.PlayAnimation = function (_0x1afd15, _0x55640d, _0x40e403) {
          if (undefined === _0x40e403) {
            _0x40e403 = false;
          }
          return new Promise(function (_0x663573) {
            _0x1afd15.play(_0x55640d);
            if (_0x40e403) {
              var _0xeed541 = _0x1afd15.getState(_0x55640d);
              if (_0xeed541) {
                _0xeed541.wrapMode = _0x5c7736.WrapMode.Loop;
              }
            }
            _0x1afd15.once(_0x1c3d03.EventType.FINISHED, function () {
              _0x663573(true);
            });
          });
        };
        _0x2d513c(_0x451184, [{
          'key': "ExtraBetAniPlaying",
          'set': function (_0x1b8bbe) {
            this.m_ExtraBetAniPlaying = _0x1b8bbe;
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
          'set': function (_0x4005d2) {
            this.m_canExtend = _0x4005d2;
          }
        }]);
        return _0x451184;
      }(_0x3127b3);
      _0x58ba13 = _0x159f02(_0x38cbae.prototype, "m_multiExtraBetNode", [_0x27d0a8], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4b9064 = _0x159f02(_0x38cbae.prototype, 'm_multiBtn', [_0x1acc02], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x302de2 = _0x159f02(_0x38cbae.prototype, "m_multiBtn_on", [_0x142832], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x1e6b9a = _0x159f02(_0x38cbae.prototype, "m_multiBtn_off", [_0x5bc641], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x2e820b = _0x159f02(_0x38cbae.prototype, "m_multiBtn_TipQuesMark", [_0x5a5ee], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x431c83 = _0x159f02(_0x38cbae.prototype, "m_multiBtn_Tip", [_0x35c89c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x147193 = _0x159f02(_0x38cbae.prototype, 'm_multiBtn_Description', [_0x62502c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x47c2f1 = _0x159f02(_0x38cbae.prototype, "m_Txt_Extra_Bet", [_0x134a59], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5a9fe0._RF.pop();
      var _0x46b945 = function () {
        function _0x101c85() {
          this._registry = {};
          this._moduleCache = {};
        }
        var _0xf93f = _0x101c85.prototype;
        _0xf93f.define = function (_0x5a06f2, _0x2ae577, _0x345178) {
          this._registry[_0x5a06f2] = {
            'factory': _0x2ae577,
            'resolveMap': _0x345178
          };
        };
        _0xf93f.require = function (_0x5a2638) {
          return this._require(_0x5a2638);
        };
        _0xf93f.throwInvalidWrapper = function (_0x459d84, _0x2bfe78) {
          throw new Error("Module '" + _0x459d84 + "' imported from '" + _0x2bfe78 + "' is expected be an ESM-wrapped CommonJS module but it doesn't.");
        };
        _0xf93f._require = function (_0x53510, _0x29c5d2) {
          var _0xc3baa6 = this._moduleCache[_0x53510];
          if (_0xc3baa6) {
            return _0xc3baa6.exports;
          }
          var _0x424bd8 = {
            'id': _0x53510,
            'exports': {}
          };
          this._moduleCache[_0x53510] = _0x424bd8;
          this._tryModuleLoad(_0x424bd8, _0x53510);
          return _0x424bd8.exports;
        };
        _0xf93f._resolve = function (_0x33c750, _0x5e389c) {
          return this._resolveFromInfos(_0x33c750, _0x5e389c) || this._throwUnresolved(_0x33c750, _0x5e389c);
        };
        _0xf93f._resolveFromInfos = function (_0x3f3991, _0x243663) {
          var _0x1a19f3;
          var _0x1a3372;
          return _0x3f3991 in cjsInfos ? _0x3f3991 : _0x243663 && null != (_0x1a19f3 = null == (_0x1a3372 = cjsInfos[_0x243663]) ? undefined : _0x1a3372.resolveCache[_0x3f3991]) ? _0x1a19f3 : undefined;
        };
        _0xf93f._tryModuleLoad = function (_0x3a00fb, _0x39ea17) {
          var _0x2e0f5b = true;
          try {
            this._load(_0x3a00fb, _0x39ea17);
            _0x2e0f5b = false;
          } finally {
            if (_0x2e0f5b) {
              delete this._moduleCache[_0x39ea17];
            }
          }
        };
        _0xf93f._load = function (_0x509b3a, _0x4ea60b) {
          var _0x586a24 = this._loadWrapper(_0x4ea60b);
          var _0x3df28e = _0x586a24.factory;
          var _0x466081 = _0x586a24.resolveMap;
          var _0x16b1a9 = this._createRequire(_0x509b3a);
          var _0x52816e = _0x466081 ? this._createRequireWithResolveMap("function" == typeof _0x466081 ? _0x466081() : _0x466081, _0x16b1a9) : _0x16b1a9;
          _0x3df28e(_0x509b3a.exports, _0x52816e, _0x509b3a);
        };
        _0xf93f._loadWrapper = function (_0x2858ac) {
          return _0x2858ac in this._registry ? this._registry[_0x2858ac] : this._loadHostProvidedModules(_0x2858ac);
        };
        _0xf93f._loadHostProvidedModules = function (_0x37bc3a) {
          return {
            'factory': function (_0x58eeee, _0x5443dd, _0x28dbbe) {
              if ("undefined" == typeof require) {
                throw new Error("Current environment does not provide a require() for requiring '" + _0x37bc3a + "'.");
              }
              try {
                _0x28dbbe.exports = require(_0x37bc3a);
              } catch (_0x1fadc0) {
                throw new Error("Exception thrown when calling host defined require('" + _0x37bc3a + "').", {
                  'cause': _0x1fadc0
                });
              }
            }
          };
        };
        _0xf93f._createRequire = function (_0x86d0f5) {
          var _0x6cc65a = this;
          return function (_0x6af2c1) {
            return _0x6cc65a._require(_0x6af2c1, _0x86d0f5);
          };
        };
        _0xf93f._createRequireWithResolveMap = function (_0x23f6fb, _0x1bc77f) {
          return function (_0x19ed9f) {
            var _0x2f23c5 = _0x23f6fb[_0x19ed9f];
            if (_0x2f23c5) {
              return _0x1bc77f(_0x2f23c5);
            }
            throw new Error("Unresolved specifier " + _0x19ed9f);
          };
        };
        _0xf93f._throwUnresolved = function (_0x129721, _0x3f893a) {
          throw new Error("Unable to resolve " + _0x129721 + " from " + parent + '.');
        };
        return _0x101c85;
      }();
      var _0x11aabe = new _0x46b945();
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js", function (_0x1c824d, _0x18ac8d, _0xbc56aa, _0x507fea, _0x32f5b2) {
        _0xbc56aa.exports = function (_0x11bc92, _0x1077c7) {
          var _0x3c04f1 = new Array(arguments.length - 0x1);
          var _0x4ad23d = 0x0;
          var _0xd686ed = 0x2;
          var _0x35459a = true;
          for (; _0xd686ed < arguments.length;) {
            _0x3c04f1[_0x4ad23d++] = arguments[_0xd686ed++];
          }
          return new Promise(function (_0x562188, _0x51500e) {
            _0x3c04f1[_0x4ad23d] = function (_0x2eab4d) {
              if (_0x35459a) {
                _0x35459a = false;
                if (_0x2eab4d) {
                  _0x51500e(_0x2eab4d);
                } else {
                  var _0x282cab = new Array(arguments.length - 0x1);
                  for (var _0x2fca6c = 0x0; _0x2fca6c < _0x282cab.length;) {
                    _0x282cab[_0x2fca6c++] = arguments[_0x2fca6c];
                  }
                  _0x562188.apply(null, _0x282cab);
                }
              }
            };
            try {
              _0x11bc92.apply(_0x1077c7 || null, _0x3c04f1);
            } catch (_0x197d58) {
              if (_0x35459a) {
                _0x35459a = false;
                _0x51500e(_0x197d58);
              }
            }
          });
        };
        _0xbc56aa.exports;
      }, {});
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js", function (_0x4738e4, _0x98e428, _0x2d609c, _0x117bbc, _0x1e7582) {
        _0x4738e4.length = function (_0x1c8c7c) {
          var _0x18ddd5 = _0x1c8c7c.length;
          if (!_0x18ddd5) {
            return 0x0;
          }
          for (var _0x5dbe68 = 0x0; --_0x18ddd5 % 0x4 > 0x1 && '=' === _0x1c8c7c.charAt(_0x18ddd5);) {
            ++_0x5dbe68;
          }
          return Math.ceil(0x3 * _0x1c8c7c.length) / 0x4 - _0x5dbe68;
        };
        var _0x4aa16c = new Array(0x40);
        var _0x47f33c = new Array(0x7b);
        for (var _0x184b33 = 0x0; _0x184b33 < 0x40;) {
          _0x47f33c[_0x4aa16c[_0x184b33] = _0x184b33 < 0x1a ? _0x184b33 + 0x41 : _0x184b33 < 0x34 ? _0x184b33 + 0x47 : _0x184b33 < 0x3e ? _0x184b33 - 0x4 : _0x184b33 - 0x3b | 0x2b] = _0x184b33++;
        }
        _0x4738e4.encode = function (_0x1c1134, _0x51eb61, _0x42e79c) {
          var _0x3d0d60;
          var _0x5d503e = null;
          var _0x2954e4 = [];
          var _0x123913 = 0x0;
          for (var _0x38f196 = 0x0; _0x51eb61 < _0x42e79c;) {
            var _0x111990 = _0x1c1134[_0x51eb61++];
            switch (_0x38f196) {
              case 0x0:
                _0x2954e4[_0x123913++] = _0x4aa16c[_0x111990 >> 0x2];
                _0x3d0d60 = (0x3 & _0x111990) << 0x4;
                _0x38f196 = 0x1;
                break;
              case 0x1:
                _0x2954e4[_0x123913++] = _0x4aa16c[_0x3d0d60 | _0x111990 >> 0x4];
                _0x3d0d60 = (0xf & _0x111990) << 0x2;
                _0x38f196 = 0x2;
                break;
              case 0x2:
                _0x2954e4[_0x123913++] = _0x4aa16c[_0x3d0d60 | _0x111990 >> 0x6];
                _0x2954e4[_0x123913++] = _0x4aa16c[0x3f & _0x111990];
                _0x38f196 = 0x0;
            }
            if (_0x123913 > 0x1fff) {
              (_0x5d503e || (_0x5d503e = [])).push(String.fromCharCode.apply(String, _0x2954e4));
              _0x123913 = 0x0;
            }
          }
          if (_0x38f196) {
            _0x2954e4[_0x123913++] = _0x4aa16c[_0x3d0d60];
            _0x2954e4[_0x123913++] = 0x3d;
            if (0x1 === _0x38f196) {
              _0x2954e4[_0x123913++] = 0x3d;
            }
          }
          return _0x5d503e ? (_0x123913 && _0x5d503e.push(String.fromCharCode.apply(String, _0x2954e4.slice(0x0, _0x123913))), _0x5d503e.join('')) : String.fromCharCode.apply(String, _0x2954e4.slice(0x0, _0x123913));
        };
        _0x4738e4.decode = function (_0x430b94, _0x578d4e, _0xfeae92) {
          var _0x6bfe68;
          var _0x90b6a8 = _0xfeae92;
          var _0x19cc9e = 0x0;
          for (var _0x45e05c = 0x0; _0x45e05c < _0x430b94.length;) {
            var _0x488e31 = _0x430b94.charCodeAt(_0x45e05c++);
            if (0x3d === _0x488e31 && _0x19cc9e > 0x1) {
              break;
            }
            if (undefined === (_0x488e31 = _0x47f33c[_0x488e31])) {
              throw Error("invalid encoding");
            }
            switch (_0x19cc9e) {
              case 0x0:
                _0x6bfe68 = _0x488e31;
                _0x19cc9e = 0x1;
                break;
              case 0x1:
                _0x578d4e[_0xfeae92++] = _0x6bfe68 << 0x2 | (0x30 & _0x488e31) >> 0x4;
                _0x6bfe68 = _0x488e31;
                _0x19cc9e = 0x2;
                break;
              case 0x2:
                _0x578d4e[_0xfeae92++] = (0xf & _0x6bfe68) << 0x4 | (0x3c & _0x488e31) >> 0x2;
                _0x6bfe68 = _0x488e31;
                _0x19cc9e = 0x3;
                break;
              case 0x3:
                _0x578d4e[_0xfeae92++] = (0x3 & _0x6bfe68) << 0x6 | _0x488e31;
                _0x19cc9e = 0x0;
            }
          }
          if (0x1 === _0x19cc9e) {
            throw Error("invalid encoding");
          }
          return _0xfeae92 - _0x90b6a8;
        };
        _0x4738e4.test = function (_0x4312e1) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(_0x4312e1);
        };
        _0x2d609c.exports;
      }, {});
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js", function (_0x29f258, _0x445b12, _0x158621, _0x365889, _0x5afc82) {
        function _0x2f4a0d() {
          this._listeners = {};
        }
        _0x158621.exports = _0x2f4a0d;
        _0x2f4a0d.prototype.on = function (_0x2c15cc, _0x416fe7, _0x2ed21d) {
          (this._listeners[_0x2c15cc] || (this._listeners[_0x2c15cc] = [])).push({
            'fn': _0x416fe7,
            'ctx': _0x2ed21d || this
          });
          return this;
        };
        _0x2f4a0d.prototype.off = function (_0xb718f2, _0x46046b) {
          if (undefined === _0xb718f2) {
            this._listeners = {};
          } else {
            if (undefined === _0x46046b) {
              this._listeners[_0xb718f2] = [];
            } else {
              var _0x346c67 = this._listeners[_0xb718f2];
              for (var _0x40862c = 0x0; _0x40862c < _0x346c67.length;) {
                if (_0x346c67[_0x40862c].fn === _0x46046b) {
                  _0x346c67.splice(_0x40862c, 0x1);
                } else {
                  ++_0x40862c;
                }
              }
            }
          }
          return this;
        };
        _0x2f4a0d.prototype.emit = function (_0xea3185) {
          var _0xfe4263 = this._listeners[_0xea3185];
          if (_0xfe4263) {
            var _0x1f7022 = [];
            for (var _0x26d302 = 0x1; _0x26d302 < arguments.length;) {
              _0x1f7022.push(arguments[_0x26d302++]);
            }
            for (_0x26d302 = 0x0; _0x26d302 < _0xfe4263.length;) {
              _0xfe4263[_0x26d302].fn.apply(_0xfe4263[_0x26d302++].ctx, _0x1f7022);
            }
          }
          return this;
        };
        _0x158621.exports;
      }, {});
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/@protobufjs/float/index.js", function (_0x3b7fef, _0x1697e3, _0x361f71, _0x4c1ab3, _0x3c5aaa) {
        function _0x5724bf(_0x47fa2f) {
          if ("undefined" != typeof Float32Array) {
            (function () {
              var _0x24790f = new Float32Array([-0x0]);
              var _0x3f54c6 = new Uint8Array(_0x24790f.buffer);
              var _0x2f9b29 = 0x80 === _0x3f54c6[0x3];
              function _0xf9002a(_0x24de47, _0x541e73, _0x428ece) {
                _0x24790f[0x0] = _0x24de47;
                _0x541e73[_0x428ece] = _0x3f54c6[0x0];
                _0x541e73[_0x428ece + 0x1] = _0x3f54c6[0x1];
                _0x541e73[_0x428ece + 0x2] = _0x3f54c6[0x2];
                _0x541e73[_0x428ece + 0x3] = _0x3f54c6[0x3];
              }
              function _0x105371(_0x54419a, _0x59d14e, _0x21cd8c) {
                _0x24790f[0x0] = _0x54419a;
                _0x59d14e[_0x21cd8c] = _0x3f54c6[0x3];
                _0x59d14e[_0x21cd8c + 0x1] = _0x3f54c6[0x2];
                _0x59d14e[_0x21cd8c + 0x2] = _0x3f54c6[0x1];
                _0x59d14e[_0x21cd8c + 0x3] = _0x3f54c6[0x0];
              }
              function _0x21bf00(_0x116430, _0x2c06c4) {
                _0x3f54c6[0x0] = _0x116430[_0x2c06c4];
                _0x3f54c6[0x1] = _0x116430[_0x2c06c4 + 0x1];
                _0x3f54c6[0x2] = _0x116430[_0x2c06c4 + 0x2];
                _0x3f54c6[0x3] = _0x116430[_0x2c06c4 + 0x3];
                return _0x24790f[0x0];
              }
              function _0x26ead4(_0x146ff8, _0x136584) {
                _0x3f54c6[0x3] = _0x146ff8[_0x136584];
                _0x3f54c6[0x2] = _0x146ff8[_0x136584 + 0x1];
                _0x3f54c6[0x1] = _0x146ff8[_0x136584 + 0x2];
                _0x3f54c6[0x0] = _0x146ff8[_0x136584 + 0x3];
                return _0x24790f[0x0];
              }
              _0x47fa2f.writeFloatLE = _0x2f9b29 ? _0xf9002a : _0x105371;
              _0x47fa2f.writeFloatBE = _0x2f9b29 ? _0x105371 : _0xf9002a;
              _0x47fa2f.readFloatLE = _0x2f9b29 ? _0x21bf00 : _0x26ead4;
              _0x47fa2f.readFloatBE = _0x2f9b29 ? _0x26ead4 : _0x21bf00;
            })();
          } else {
            (function () {
              function _0x32ec18(_0x2f22d3, _0x275e44, _0x470440, _0xb27930) {
                var _0x3d3669 = _0x275e44 < 0x0 ? 0x1 : 0x0;
                if (_0x3d3669) {
                  _0x275e44 = -_0x275e44;
                }
                if (0x0 === _0x275e44) {
                  _0x2f22d3(0x1 / _0x275e44 > 0x0 ? 0x0 : 0x80000000, _0x470440, _0xb27930);
                } else {
                  if (isNaN(_0x275e44)) {
                    _0x2f22d3(0x7fc00000, _0x470440, _0xb27930);
                  } else {
                    if (_0x275e44 > 0xffffff00000000000000000000000000) {
                      _0x2f22d3((_0x3d3669 << 0x1f | 0x7f800000) >>> 0x0, _0x470440, _0xb27930);
                    } else {
                      if (_0x275e44 < 1.1754943508222875e-38) {
                        _0x2f22d3((_0x3d3669 << 0x1f | Math.round(_0x275e44 / 1.401298464324817e-45)) >>> 0x0, _0x470440, _0xb27930);
                      } else {
                        var _0x54e24f = Math.floor(Math.log(_0x275e44) / Math.LN2);
                        _0x2f22d3((_0x3d3669 << 0x1f | _0x54e24f + 0x7f << 0x17 | 0x7fffff & Math.round(_0x275e44 * Math.pow(0x2, -_0x54e24f) * 0x800000)) >>> 0x0, _0x470440, _0xb27930);
                      }
                    }
                  }
                }
              }
              function _0x3b6ba5(_0x2c9a0d, _0x1c19a0, _0x35fdd1) {
                var _0x272420 = _0x2c9a0d(_0x1c19a0, _0x35fdd1);
                var _0x36c7f4 = 0x2 * (_0x272420 >> 0x1f) + 0x1;
                var _0x3e9916 = _0x272420 >>> 0x17 & 0xff;
                var _0x24a585 = 0x7fffff & _0x272420;
                return 0xff === _0x3e9916 ? _0x24a585 ? NaN : _0x36c7f4 * Infinity : 0x0 === _0x3e9916 ? 1.401298464324817e-45 * _0x36c7f4 * _0x24a585 : _0x36c7f4 * Math.pow(0x2, _0x3e9916 - 0x96) * (_0x24a585 + 0x800000);
              }
              _0x47fa2f.writeFloatLE = _0x32ec18.bind(null, _0x1e7683);
              _0x47fa2f.writeFloatBE = _0x32ec18.bind(null, _0xbf13fb);
              _0x47fa2f.readFloatLE = _0x3b6ba5.bind(null, _0x1f82e8);
              _0x47fa2f.readFloatBE = _0x3b6ba5.bind(null, _0xae18af);
            })();
          }
          if ("undefined" != typeof Float64Array) {
            (function () {
              var _0x1bfb00 = new Float64Array([-0x0]);
              var _0x12c583 = new Uint8Array(_0x1bfb00.buffer);
              var _0x106443 = 0x80 === _0x12c583[0x7];
              function _0xb99f84(_0x2b7ec8, _0x3c150c, _0x1f773c) {
                _0x1bfb00[0x0] = _0x2b7ec8;
                _0x3c150c[_0x1f773c] = _0x12c583[0x0];
                _0x3c150c[_0x1f773c + 0x1] = _0x12c583[0x1];
                _0x3c150c[_0x1f773c + 0x2] = _0x12c583[0x2];
                _0x3c150c[_0x1f773c + 0x3] = _0x12c583[0x3];
                _0x3c150c[_0x1f773c + 0x4] = _0x12c583[0x4];
                _0x3c150c[_0x1f773c + 0x5] = _0x12c583[0x5];
                _0x3c150c[_0x1f773c + 0x6] = _0x12c583[0x6];
                _0x3c150c[_0x1f773c + 0x7] = _0x12c583[0x7];
              }
              function _0x4f24f3(_0x4e5ff3, _0x266df4, _0x50ffcc) {
                _0x1bfb00[0x0] = _0x4e5ff3;
                _0x266df4[_0x50ffcc] = _0x12c583[0x7];
                _0x266df4[_0x50ffcc + 0x1] = _0x12c583[0x6];
                _0x266df4[_0x50ffcc + 0x2] = _0x12c583[0x5];
                _0x266df4[_0x50ffcc + 0x3] = _0x12c583[0x4];
                _0x266df4[_0x50ffcc + 0x4] = _0x12c583[0x3];
                _0x266df4[_0x50ffcc + 0x5] = _0x12c583[0x2];
                _0x266df4[_0x50ffcc + 0x6] = _0x12c583[0x1];
                _0x266df4[_0x50ffcc + 0x7] = _0x12c583[0x0];
              }
              function _0x2f8389(_0x346463, _0x5429e5) {
                _0x12c583[0x0] = _0x346463[_0x5429e5];
                _0x12c583[0x1] = _0x346463[_0x5429e5 + 0x1];
                _0x12c583[0x2] = _0x346463[_0x5429e5 + 0x2];
                _0x12c583[0x3] = _0x346463[_0x5429e5 + 0x3];
                _0x12c583[0x4] = _0x346463[_0x5429e5 + 0x4];
                _0x12c583[0x5] = _0x346463[_0x5429e5 + 0x5];
                _0x12c583[0x6] = _0x346463[_0x5429e5 + 0x6];
                _0x12c583[0x7] = _0x346463[_0x5429e5 + 0x7];
                return _0x1bfb00[0x0];
              }
              function _0x14a312(_0x35c152, _0x2502d0) {
                _0x12c583[0x7] = _0x35c152[_0x2502d0];
                _0x12c583[0x6] = _0x35c152[_0x2502d0 + 0x1];
                _0x12c583[0x5] = _0x35c152[_0x2502d0 + 0x2];
                _0x12c583[0x4] = _0x35c152[_0x2502d0 + 0x3];
                _0x12c583[0x3] = _0x35c152[_0x2502d0 + 0x4];
                _0x12c583[0x2] = _0x35c152[_0x2502d0 + 0x5];
                _0x12c583[0x1] = _0x35c152[_0x2502d0 + 0x6];
                _0x12c583[0x0] = _0x35c152[_0x2502d0 + 0x7];
                return _0x1bfb00[0x0];
              }
              _0x47fa2f.writeDoubleLE = _0x106443 ? _0xb99f84 : _0x4f24f3;
              _0x47fa2f.writeDoubleBE = _0x106443 ? _0x4f24f3 : _0xb99f84;
              _0x47fa2f.readDoubleLE = _0x106443 ? _0x2f8389 : _0x14a312;
              _0x47fa2f.readDoubleBE = _0x106443 ? _0x14a312 : _0x2f8389;
            })();
          } else {
            (function () {
              function _0x38f612(_0x566dec, _0x370d23, _0x4d31d3, _0x167b53, _0x50bb01, _0x341d46) {
                var _0xbefd51 = _0x167b53 < 0x0 ? 0x1 : 0x0;
                if (_0xbefd51) {
                  _0x167b53 = -_0x167b53;
                }
                if (0x0 === _0x167b53) {
                  _0x566dec(0x0, _0x50bb01, _0x341d46 + _0x370d23);
                  _0x566dec(0x1 / _0x167b53 > 0x0 ? 0x0 : 0x80000000, _0x50bb01, _0x341d46 + _0x4d31d3);
                } else {
                  if (isNaN(_0x167b53)) {
                    _0x566dec(0x0, _0x50bb01, _0x341d46 + _0x370d23);
                    _0x566dec(0x7ff80000, _0x50bb01, _0x341d46 + _0x4d31d3);
                  } else {
                    if (_0x167b53 > 0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
                      _0x566dec(0x0, _0x50bb01, _0x341d46 + _0x370d23);
                      _0x566dec((_0xbefd51 << 0x1f | 0x7ff00000) >>> 0x0, _0x50bb01, _0x341d46 + _0x4d31d3);
                    } else {
                      var _0x44ba6e;
                      if (_0x167b53 < 2.2250738585072014e-308) {
                        _0x566dec((_0x44ba6e = _0x167b53 / 5e-324) >>> 0x0, _0x50bb01, _0x341d46 + _0x370d23);
                        _0x566dec((_0xbefd51 << 0x1f | _0x44ba6e / 0x100000000) >>> 0x0, _0x50bb01, _0x341d46 + _0x4d31d3);
                      } else {
                        var _0x467d28 = Math.floor(Math.log(_0x167b53) / Math.LN2);
                        if (0x400 === _0x467d28) {
                          _0x467d28 = 0x3ff;
                        }
                        _0x566dec(0x10000000000000 * (_0x44ba6e = _0x167b53 * Math.pow(0x2, -_0x467d28)) >>> 0x0, _0x50bb01, _0x341d46 + _0x370d23);
                        _0x566dec((_0xbefd51 << 0x1f | _0x467d28 + 0x3ff << 0x14 | 0x100000 * _0x44ba6e & 0xfffff) >>> 0x0, _0x50bb01, _0x341d46 + _0x4d31d3);
                      }
                    }
                  }
                }
              }
              function _0x2c6367(_0x3f425e, _0x532c4c, _0x44ad67, _0x5875d3, _0x460d2d) {
                var _0x4e8b92 = _0x3f425e(_0x5875d3, _0x460d2d + _0x532c4c);
                var _0x363f01 = _0x3f425e(_0x5875d3, _0x460d2d + _0x44ad67);
                var _0x19bc2d = 0x2 * (_0x363f01 >> 0x1f) + 0x1;
                var _0x101ac3 = _0x363f01 >>> 0x14 & 0x7ff;
                var _0x565608 = 0x100000000 * (0xfffff & _0x363f01) + _0x4e8b92;
                return 0x7ff === _0x101ac3 ? _0x565608 ? NaN : _0x19bc2d * Infinity : 0x0 === _0x101ac3 ? 5e-324 * _0x19bc2d * _0x565608 : _0x19bc2d * Math.pow(0x2, _0x101ac3 - 0x433) * (_0x565608 + 0x10000000000000);
              }
              _0x47fa2f.writeDoubleLE = _0x38f612.bind(null, _0x1e7683, 0x0, 0x4);
              _0x47fa2f.writeDoubleBE = _0x38f612.bind(null, _0xbf13fb, 0x4, 0x0);
              _0x47fa2f.readDoubleLE = _0x2c6367.bind(null, _0x1f82e8, 0x0, 0x4);
              _0x47fa2f.readDoubleBE = _0x2c6367.bind(null, _0xae18af, 0x4, 0x0);
            })();
          }
          return _0x47fa2f;
        }
        function _0x1e7683(_0x44aa0a, _0x1bf7d3, _0x15868f) {
          _0x1bf7d3[_0x15868f] = 0xff & _0x44aa0a;
          _0x1bf7d3[_0x15868f + 0x1] = _0x44aa0a >>> 0x8 & 0xff;
          _0x1bf7d3[_0x15868f + 0x2] = _0x44aa0a >>> 0x10 & 0xff;
          _0x1bf7d3[_0x15868f + 0x3] = _0x44aa0a >>> 0x18;
        }
        function _0xbf13fb(_0x4e6cc1, _0x412043, _0xa0a7fd) {
          _0x412043[_0xa0a7fd] = _0x4e6cc1 >>> 0x18;
          _0x412043[_0xa0a7fd + 0x1] = _0x4e6cc1 >>> 0x10 & 0xff;
          _0x412043[_0xa0a7fd + 0x2] = _0x4e6cc1 >>> 0x8 & 0xff;
          _0x412043[_0xa0a7fd + 0x3] = 0xff & _0x4e6cc1;
        }
        function _0x1f82e8(_0x4a2715, _0x2ed37d) {
          return (_0x4a2715[_0x2ed37d] | _0x4a2715[_0x2ed37d + 0x1] << 0x8 | _0x4a2715[_0x2ed37d + 0x2] << 0x10 | _0x4a2715[_0x2ed37d + 0x3] << 0x18) >>> 0x0;
        }
        function _0xae18af(_0x24243c, _0x11fc8a) {
          return (_0x24243c[_0x11fc8a] << 0x18 | _0x24243c[_0x11fc8a + 0x1] << 0x10 | _0x24243c[_0x11fc8a + 0x2] << 0x8 | _0x24243c[_0x11fc8a + 0x3]) >>> 0x0;
        }
        _0x361f71.exports = _0x5724bf(_0x5724bf);
        _0x361f71.exports;
        _0x361f71.exports.writeFloatLE;
        _0x361f71.exports.writeFloatBE;
        _0x361f71.exports.readFloatLE;
        _0x361f71.exports.readFloatBE;
        _0x361f71.exports.writeDoubleLE;
        _0x361f71.exports.writeDoubleBE;
        _0x361f71.exports.readDoubleLE;
        _0x361f71.exports.readDoubleBE;
      }, {});
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js", function (_0x4bf2c7, _0x1de7b9, _0x3280ae, _0x5076d0, _0x30dd5f) {
        function _0xc53cf(_0x400b78) {
          try {
            var _0x5166dd = eval("quire".replace(/^/, 're'))(_0x400b78);
            if (_0x5166dd && (_0x5166dd.length || Object.keys(_0x5166dd).length)) {
              return _0x5166dd;
            }
          } catch (_0x388509) {}
          return null;
        }
        _0x3280ae.exports = _0xc53cf;
        _0x3280ae.exports;
      }, {});
      _0x11aabe.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js', function (_0x1a090f, _0x8a13ee, _0x32ac45, _0x4c96ee, _0x22499b) {
        _0x1a090f.length = function (_0x21ead3) {
          var _0x18b546 = 0x0;
          var _0x791129 = 0x0;
          for (var _0x24ad23 = 0x0; _0x24ad23 < _0x21ead3.length; ++_0x24ad23) {
            if ((_0x791129 = _0x21ead3.charCodeAt(_0x24ad23)) < 0x80) {
              _0x18b546 += 0x1;
            } else if (_0x791129 < 0x800) {
              _0x18b546 += 0x2;
            } else if (0xd800 == (0xfc00 & _0x791129) && 0xdc00 == (0xfc00 & _0x21ead3.charCodeAt(_0x24ad23 + 0x1))) {
              ++_0x24ad23;
              _0x18b546 += 0x4;
            } else {
              _0x18b546 += 0x3;
            }
          }
          return _0x18b546;
        };
        _0x1a090f.read = function (_0xe538db, _0x295b65, _0x19083e) {
          if (_0x19083e - _0x295b65 < 0x1) {
            return '';
          }
          var _0x3acb05;
          var _0x35b546 = null;
          var _0x507840 = [];
          for (var _0x3209ce = 0x0; _0x295b65 < _0x19083e;) {
            if ((_0x3acb05 = _0xe538db[_0x295b65++]) < 0x80) {
              _0x507840[_0x3209ce++] = _0x3acb05;
            } else if (_0x3acb05 > 0xbf && _0x3acb05 < 0xe0) {
              _0x507840[_0x3209ce++] = (0x1f & _0x3acb05) << 0x6 | 0x3f & _0xe538db[_0x295b65++];
            } else if (_0x3acb05 > 0xef && _0x3acb05 < 0x16d) {
              _0x3acb05 = ((0x7 & _0x3acb05) << 0x12 | (0x3f & _0xe538db[_0x295b65++]) << 0xc | (0x3f & _0xe538db[_0x295b65++]) << 0x6 | 0x3f & _0xe538db[_0x295b65++]) - 0x10000;
              _0x507840[_0x3209ce++] = 0xd800 + (_0x3acb05 >> 0xa);
              _0x507840[_0x3209ce++] = 0xdc00 + (0x3ff & _0x3acb05);
            } else {
              _0x507840[_0x3209ce++] = (0xf & _0x3acb05) << 0xc | (0x3f & _0xe538db[_0x295b65++]) << 0x6 | 0x3f & _0xe538db[_0x295b65++];
            }
            if (_0x3209ce > 0x1fff) {
              (_0x35b546 || (_0x35b546 = [])).push(String.fromCharCode.apply(String, _0x507840));
              _0x3209ce = 0x0;
            }
          }
          return _0x35b546 ? (_0x3209ce && _0x35b546.push(String.fromCharCode.apply(String, _0x507840.slice(0x0, _0x3209ce))), _0x35b546.join('')) : String.fromCharCode.apply(String, _0x507840.slice(0x0, _0x3209ce));
        };
        _0x1a090f.write = function (_0x2b67b4, _0x5a2123, _0x5b1e74) {
          var _0x1ad24f;
          var _0x5b732;
          var _0x55cfa8 = _0x5b1e74;
          for (var _0x586505 = 0x0; _0x586505 < _0x2b67b4.length; ++_0x586505) {
            if ((_0x1ad24f = _0x2b67b4.charCodeAt(_0x586505)) < 0x80) {
              _0x5a2123[_0x5b1e74++] = _0x1ad24f;
            } else if (_0x1ad24f < 0x800) {
              _0x5a2123[_0x5b1e74++] = _0x1ad24f >> 0x6 | 0xc0;
              _0x5a2123[_0x5b1e74++] = 0x3f & _0x1ad24f | 0x80;
            } else if (0xd800 == (0xfc00 & _0x1ad24f) && 0xdc00 == (0xfc00 & (_0x5b732 = _0x2b67b4.charCodeAt(_0x586505 + 0x1)))) {
              _0x1ad24f = 0x10000 + ((0x3ff & _0x1ad24f) << 0xa) + (0x3ff & _0x5b732);
              ++_0x586505;
              _0x5a2123[_0x5b1e74++] = _0x1ad24f >> 0x12 | 0xf0;
              _0x5a2123[_0x5b1e74++] = _0x1ad24f >> 0xc & 0x3f | 0x80;
              _0x5a2123[_0x5b1e74++] = _0x1ad24f >> 0x6 & 0x3f | 0x80;
              _0x5a2123[_0x5b1e74++] = 0x3f & _0x1ad24f | 0x80;
            } else {
              _0x5a2123[_0x5b1e74++] = _0x1ad24f >> 0xc | 0xe0;
              _0x5a2123[_0x5b1e74++] = _0x1ad24f >> 0x6 & 0x3f | 0x80;
              _0x5a2123[_0x5b1e74++] = 0x3f & _0x1ad24f | 0x80;
            }
          }
          return _0x5b1e74 - _0x55cfa8;
        };
        _0x32ac45.exports;
      }, {});
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js", function (_0x35d8e0, _0x5034f8, _0x4288ef, _0x35e46e, _0xff9d60) {
        _0x4288ef.exports = function (_0x17796f, _0x3a67d2, _0x504236) {
          var _0x1b3fb9 = _0x504236 || 0x2000;
          var _0x46f635 = _0x1b3fb9 >>> 0x1;
          var _0x4edbc4 = null;
          var _0xbd55d7 = _0x1b3fb9;
          return function (_0x5d9c47) {
            if (_0x5d9c47 < 0x1 || _0x5d9c47 > _0x46f635) {
              return _0x17796f(_0x5d9c47);
            }
            if (_0xbd55d7 + _0x5d9c47 > _0x1b3fb9) {
              _0x4edbc4 = _0x17796f(_0x1b3fb9);
              _0xbd55d7 = 0x0;
            }
            var _0x2adf96 = _0x3a67d2.call(_0x4edbc4, _0xbd55d7, _0xbd55d7 += _0x5d9c47);
            if (0x7 & _0xbd55d7) {
              _0xbd55d7 = 0x1 + (0x7 | _0xbd55d7);
            }
            return _0x2adf96;
          };
        };
        _0x4288ef.exports;
      }, {});
      _0x11aabe.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js', function (_0x39d27e, _0x3cd856, _0xb444d7, _0x4c6cf0, _0x238014) {
        _0xb444d7.exports = _0x4ddb97;
        var _0x316a80 = _0x3cd856('../util/minimal');
        function _0x4ddb97(_0x3c6430, _0x545f43) {
          this.lo = _0x3c6430 >>> 0x0;
          this.hi = _0x545f43 >>> 0x0;
        }
        var _0x56db9d = _0x4ddb97.zero = new _0x4ddb97(0x0, 0x0);
        _0x56db9d.toNumber = function () {
          return 0x0;
        };
        _0x56db9d.zzEncode = _0x56db9d.zzDecode = function () {
          return this;
        };
        _0x56db9d.length = function () {
          return 0x1;
        };
        var _0xffd959 = _0x4ddb97.zeroHash = "\0\0\0\0\0\0\0\0";
        _0x4ddb97.fromNumber = function (_0x8044b1) {
          if (0x0 === _0x8044b1) {
            return _0x56db9d;
          }
          var _0x24e443 = _0x8044b1 < 0x0;
          if (_0x24e443) {
            _0x8044b1 = -_0x8044b1;
          }
          var _0x371739 = _0x8044b1 >>> 0x0;
          var _0x1c8545 = (_0x8044b1 - _0x371739) / 0x100000000 >>> 0x0;
          if (_0x24e443) {
            _0x1c8545 = ~_0x1c8545 >>> 0x0;
            _0x371739 = ~_0x371739 >>> 0x0;
            if (++_0x371739 > 0xffffffff) {
              _0x371739 = 0x0;
              if (++_0x1c8545 > 0xffffffff) {
                _0x1c8545 = 0x0;
              }
            }
          }
          return new _0x4ddb97(_0x371739, _0x1c8545);
        };
        _0x4ddb97.from = function (_0x2445e2) {
          if ("number" == typeof _0x2445e2) {
            return _0x4ddb97.fromNumber(_0x2445e2);
          }
          if (_0x316a80.isString(_0x2445e2)) {
            if (!_0x316a80.Long) {
              return _0x4ddb97.fromNumber(parseInt(_0x2445e2, 0xa));
            }
            _0x2445e2 = _0x316a80.Long.fromString(_0x2445e2);
          }
          return _0x2445e2.low || _0x2445e2.high ? new _0x4ddb97(_0x2445e2.low >>> 0x0, _0x2445e2.high >>> 0x0) : _0x56db9d;
        };
        _0x4ddb97.prototype.toNumber = function (_0x358ceb) {
          if (!_0x358ceb && this.hi >>> 0x1f) {
            var _0x1aa219 = 0x1 + ~this.lo >>> 0x0;
            var _0x55a10b = ~this.hi >>> 0x0;
            if (!_0x1aa219) {
              _0x55a10b = _0x55a10b + 0x1 >>> 0x0;
            }
            return -(_0x1aa219 + 0x100000000 * _0x55a10b);
          }
          return this.lo + 0x100000000 * this.hi;
        };
        _0x4ddb97.prototype.toLong = function (_0x5bedd5) {
          return _0x316a80.Long ? new _0x316a80.Long(0x0 | this.lo, 0x0 | this.hi, Boolean(_0x5bedd5)) : {
            'low': 0x0 | this.lo,
            'high': 0x0 | this.hi,
            'unsigned': Boolean(_0x5bedd5)
          };
        };
        var _0x138bbf = String.prototype.charCodeAt;
        _0x4ddb97.fromHash = function (_0x47d963) {
          return _0x47d963 === _0xffd959 ? _0x56db9d : new _0x4ddb97((_0x138bbf.call(_0x47d963, 0x0) | _0x138bbf.call(_0x47d963, 0x1) << 0x8 | _0x138bbf.call(_0x47d963, 0x2) << 0x10 | _0x138bbf.call(_0x47d963, 0x3) << 0x18) >>> 0x0, (_0x138bbf.call(_0x47d963, 0x4) | _0x138bbf.call(_0x47d963, 0x5) << 0x8 | _0x138bbf.call(_0x47d963, 0x6) << 0x10 | _0x138bbf.call(_0x47d963, 0x7) << 0x18) >>> 0x0);
        };
        _0x4ddb97.prototype.toHash = function () {
          return String.fromCharCode(0xff & this.lo, this.lo >>> 0x8 & 0xff, this.lo >>> 0x10 & 0xff, this.lo >>> 0x18, 0xff & this.hi, this.hi >>> 0x8 & 0xff, this.hi >>> 0x10 & 0xff, this.hi >>> 0x18);
        };
        _0x4ddb97.prototype.zzEncode = function () {
          var _0x35e229 = this.hi >> 0x1f;
          this.hi = ((this.hi << 0x1 | this.lo >>> 0x1f) ^ _0x35e229) >>> 0x0;
          this.lo = (this.lo << 0x1 ^ _0x35e229) >>> 0x0;
          return this;
        };
        _0x4ddb97.prototype.zzDecode = function () {
          var _0x2ee181 = -(0x1 & this.lo);
          this.lo = ((this.lo >>> 0x1 | this.hi << 0x1f) ^ _0x2ee181) >>> 0x0;
          this.hi = (this.hi >>> 0x1 ^ _0x2ee181) >>> 0x0;
          return this;
        };
        _0x4ddb97.prototype.length = function () {
          var _0x320270 = this.lo;
          var _0x1c0b32 = (this.lo >>> 0x1c | this.hi << 0x4) >>> 0x0;
          var _0x2989b7 = this.hi >>> 0x18;
          return 0x0 === _0x2989b7 ? 0x0 === _0x1c0b32 ? _0x320270 < 0x4000 ? _0x320270 < 0x80 ? 0x1 : 0x2 : _0x320270 < 0x200000 ? 0x3 : 0x4 : _0x1c0b32 < 0x4000 ? _0x1c0b32 < 0x80 ? 0x5 : 0x6 : _0x1c0b32 < 0x200000 ? 0x7 : 0x8 : _0x2989b7 < 0x80 ? 0x9 : 0xa;
        };
        _0xb444d7.exports;
      }, function () {
        return {
          '../util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js", function (_0x29a476, _0x1d5149, _0x34830a, _0x5e25f0, _0x43c794) {
        function _0x1433f6(_0x35ad96, _0x5f8601, _0x154a56) {
          var _0xfee527 = Object.keys(_0x5f8601);
          for (var _0x2382f2 = 0x0; _0x2382f2 < _0xfee527.length; ++_0x2382f2) {
            if (!(undefined !== _0x35ad96[_0xfee527[_0x2382f2]] && _0x154a56)) {
              _0x35ad96[_0xfee527[_0x2382f2]] = _0x5f8601[_0xfee527[_0x2382f2]];
            }
          }
          return _0x35ad96;
        }
        function _0x2b6db0(_0xf56f99) {
          function _0x383291(_0x67f5b9, _0x4b8629) {
            if (!(this instanceof _0x383291)) {
              return new _0x383291(_0x67f5b9, _0x4b8629);
            }
            Object.defineProperty(this, 'message', {
              'get': function () {
                return _0x67f5b9;
              }
            });
            if (Error.captureStackTrace) {
              Error.captureStackTrace(this, _0x383291);
            } else {
              Object.defineProperty(this, "stack", {
                'value': new Error().stack || ''
              });
            }
            if (_0x4b8629) {
              _0x1433f6(this, _0x4b8629);
            }
          }
          (_0x383291.prototype = Object.create(Error.prototype)).constructor = _0x383291;
          Object.defineProperty(_0x383291.prototype, "name", {
            'get': function () {
              return _0xf56f99;
            }
          });
          _0x383291.prototype.toString = function () {
            return this.name + ": " + this.message;
          };
          return _0x383291;
        }
        _0x29a476.asPromise = _0x1d5149('@protobufjs/aspromise');
        _0x29a476.base64 = _0x1d5149("@protobufjs/base64");
        _0x29a476.EventEmitter = _0x1d5149('@protobufjs/eventemitter');
        _0x29a476.float = _0x1d5149('@protobufjs/float');
        _0x29a476.inquire = _0x1d5149("@protobufjs/inquire");
        _0x29a476.utf8 = _0x1d5149("@protobufjs/utf8");
        _0x29a476.pool = _0x1d5149("@protobufjs/pool");
        _0x29a476.LongBits = _0x1d5149("./longbits");
        _0x29a476.isNode = Boolean("undefined" != typeof global && global && global.process && global.process.versions && global.process.versions.node);
        _0x29a476.global = _0x29a476.isNode && global || "undefined" != typeof window && window || "undefined" != typeof self && self || this;
        _0x29a476.emptyArray = Object.freeze ? Object.freeze([]) : [];
        _0x29a476.emptyObject = Object.freeze ? Object.freeze({}) : {};
        _0x29a476.isInteger = Number.isInteger || function (_0x3ca438) {
          return "number" == typeof _0x3ca438 && isFinite(_0x3ca438) && Math.floor(_0x3ca438) === _0x3ca438;
        };
        _0x29a476.isString = function (_0xbdb795) {
          return "string" == typeof _0xbdb795 || _0xbdb795 instanceof String;
        };
        _0x29a476.isObject = function (_0x10b58f) {
          return _0x10b58f && "object" == typeof _0x10b58f;
        };
        _0x29a476.isset = _0x29a476.isSet = function (_0xc110a8, _0x1c6dfb) {
          var _0xce44d8 = _0xc110a8[_0x1c6dfb];
          return !(null == _0xce44d8 || !_0xc110a8.hasOwnProperty(_0x1c6dfb)) && ("object" != typeof _0xce44d8 || (Array.isArray(_0xce44d8) ? _0xce44d8.length : Object.keys(_0xce44d8).length) > 0x0);
        };
        _0x29a476.Buffer = function () {
          try {
            var _0x2ceee0 = _0x29a476.inquire("buffer").Buffer;
            return _0x2ceee0.prototype.utf8Write ? _0x2ceee0 : null;
          } catch (_0x3fcb55) {
            return null;
          }
        }();
        _0x29a476._Buffer_from = null;
        _0x29a476._Buffer_allocUnsafe = null;
        _0x29a476.newBuffer = function (_0x41b18d) {
          return 'number' == typeof _0x41b18d ? _0x29a476.Buffer ? _0x29a476._Buffer_allocUnsafe(_0x41b18d) : new _0x29a476.Array(_0x41b18d) : _0x29a476.Buffer ? _0x29a476._Buffer_from(_0x41b18d) : 'undefined' == typeof Uint8Array ? _0x41b18d : new Uint8Array(_0x41b18d);
        };
        _0x29a476.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array;
        _0x29a476.Long = _0x29a476.global.dcodeIO && _0x29a476.global.dcodeIO.Long || _0x29a476.global.Long || _0x29a476.inquire("long");
        _0x29a476.key2Re = /^true|false|0|1$/;
        _0x29a476.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
        _0x29a476.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
        _0x29a476.longToHash = function (_0x3bdaf4) {
          return _0x3bdaf4 ? _0x29a476.LongBits.from(_0x3bdaf4).toHash() : _0x29a476.LongBits.zeroHash;
        };
        _0x29a476.longFromHash = function (_0x40ef65, _0x15f605) {
          var _0xeef613 = _0x29a476.LongBits.fromHash(_0x40ef65);
          return _0x29a476.Long ? _0x29a476.Long.fromBits(_0xeef613.lo, _0xeef613.hi, _0x15f605) : _0xeef613.toNumber(Boolean(_0x15f605));
        };
        _0x29a476.merge = _0x1433f6;
        _0x29a476.lcFirst = function (_0x555b5b) {
          return _0x555b5b.charAt(0x0).toLowerCase() + _0x555b5b.substring(0x1);
        };
        _0x29a476.newError = _0x2b6db0;
        _0x29a476.ProtocolError = _0x2b6db0("ProtocolError");
        _0x29a476.oneOfGetter = function (_0x518538) {
          var _0x4eb0a4 = {};
          for (var _0x46a810 = 0x0; _0x46a810 < _0x518538.length; ++_0x46a810) {
            _0x4eb0a4[_0x518538[_0x46a810]] = 0x1;
          }
          return function () {
            var _0x1fb169 = Object.keys(this);
            for (var _0x464e7f = _0x1fb169.length - 0x1; _0x464e7f > -0x1; --_0x464e7f) {
              if (0x1 === _0x4eb0a4[_0x1fb169[_0x464e7f]] && undefined !== this[_0x1fb169[_0x464e7f]] && null !== this[_0x1fb169[_0x464e7f]]) {
                return _0x1fb169[_0x464e7f];
              }
            }
          };
        };
        _0x29a476.oneOfSetter = function (_0x338e75) {
          return function (_0x37a333) {
            for (var _0x305e11 = 0x0; _0x305e11 < _0x338e75.length; ++_0x305e11) {
              if (_0x338e75[_0x305e11] !== _0x37a333) {
                delete this[_0x338e75[_0x305e11]];
              }
            }
          };
        };
        _0x29a476.toJSONOptions = {
          'longs': String,
          'enums': String,
          'bytes': String,
          'json': true
        };
        _0x29a476._configure = function () {
          var _0x425b7e = _0x29a476.Buffer;
          if (_0x425b7e) {
            _0x29a476._Buffer_from = _0x425b7e.from !== Uint8Array.from && _0x425b7e.from || function (_0x54599d, _0x19c4d6) {
              return new _0x425b7e(_0x54599d, _0x19c4d6);
            };
            _0x29a476._Buffer_allocUnsafe = _0x425b7e.allocUnsafe || function (_0x2d9a62) {
              return new _0x425b7e(_0x2d9a62);
            };
          } else {
            _0x29a476._Buffer_from = _0x29a476._Buffer_allocUnsafe = null;
          }
        };
        _0x34830a.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          '@protobufjs/base64': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js",
          '@protobufjs/eventemitter': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js",
          '@protobufjs/float': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/@protobufjs/float/index.js",
          '@protobufjs/inquire': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js",
          '@protobufjs/utf8': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js',
          '@protobufjs/pool': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js",
          './longbits': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js'
        };
      });
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/writer.js", function (_0x9123a9, _0x39c4d3, _0x2052f0, _0x38d8c1, _0x24f9ef) {
        _0x2052f0.exports = _0x2420cb;
        var _0x5626fb;
        var _0x487f64 = _0x39c4d3('./util/minimal');
        var _0x25f816 = _0x487f64.LongBits;
        var _0x521c7 = _0x487f64.base64;
        var _0xf00e69 = _0x487f64.utf8;
        function _0x288a88(_0x5f9403, _0x386e41, _0x46ea02) {
          this.fn = _0x5f9403;
          this.len = _0x386e41;
          this.next = undefined;
          this.val = _0x46ea02;
        }
        function _0x3df1a7() {}
        function _0x51392e(_0x57f4aa) {
          this.head = _0x57f4aa.head;
          this.tail = _0x57f4aa.tail;
          this.len = _0x57f4aa.len;
          this.next = _0x57f4aa.states;
        }
        function _0x2420cb() {
          this.len = 0x0;
          this.head = new _0x288a88(_0x3df1a7, 0x0, 0x0);
          this.tail = this.head;
          this.states = null;
        }
        var _0x251ed8 = function () {
          return _0x487f64.Buffer ? function () {
            return (_0x2420cb.create = function () {
              return new _0x5626fb();
            })();
          } : function () {
            return new _0x2420cb();
          };
        };
        function _0x21420d(_0x417d1b, _0x39a676, _0xc616d7) {
          _0x39a676[_0xc616d7] = 0xff & _0x417d1b;
        }
        function _0x50071f(_0x559674, _0x41e980) {
          this.len = _0x559674;
          this.next = undefined;
          this.val = _0x41e980;
        }
        function _0xde837d(_0x516b76, _0x317e25, _0x12e0fa) {
          for (; _0x516b76.hi;) {
            _0x317e25[_0x12e0fa++] = 0x7f & _0x516b76.lo | 0x80;
            _0x516b76.lo = (_0x516b76.lo >>> 0x7 | _0x516b76.hi << 0x19) >>> 0x0;
            _0x516b76.hi >>>= 0x7;
          }
          for (; _0x516b76.lo > 0x7f;) {
            _0x317e25[_0x12e0fa++] = 0x7f & _0x516b76.lo | 0x80;
            _0x516b76.lo = _0x516b76.lo >>> 0x7;
          }
          _0x317e25[_0x12e0fa++] = _0x516b76.lo;
        }
        function _0x1ccf83(_0x5c4ab6, _0x52c7ce, _0xda45b3) {
          _0x52c7ce[_0xda45b3] = 0xff & _0x5c4ab6;
          _0x52c7ce[_0xda45b3 + 0x1] = _0x5c4ab6 >>> 0x8 & 0xff;
          _0x52c7ce[_0xda45b3 + 0x2] = _0x5c4ab6 >>> 0x10 & 0xff;
          _0x52c7ce[_0xda45b3 + 0x3] = _0x5c4ab6 >>> 0x18;
        }
        _0x2420cb.create = _0x251ed8();
        _0x2420cb.alloc = function (_0x40b747) {
          return new _0x487f64.Array(_0x40b747);
        };
        if (_0x487f64.Array !== Array) {
          _0x2420cb.alloc = _0x487f64.pool(_0x2420cb.alloc, _0x487f64.Array.prototype.subarray);
        }
        _0x2420cb.prototype._push = function (_0x5f122a, _0x6122e, _0x4c39f7) {
          this.tail = this.tail.next = new _0x288a88(_0x5f122a, _0x6122e, _0x4c39f7);
          this.len += _0x6122e;
          return this;
        };
        _0x50071f.prototype = Object.create(_0x288a88.prototype);
        _0x50071f.prototype.fn = function (_0x15f1f6, _0x568d37, _0x5685ed) {
          for (; _0x15f1f6 > 0x7f;) {
            _0x568d37[_0x5685ed++] = 0x7f & _0x15f1f6 | 0x80;
            _0x15f1f6 >>>= 0x7;
          }
          _0x568d37[_0x5685ed] = _0x15f1f6;
        };
        _0x2420cb.prototype.uint32 = function (_0x230b32) {
          this.len += (this.tail = this.tail.next = new _0x50071f((_0x230b32 >>>= 0x0) < 0x80 ? 0x1 : _0x230b32 < 0x4000 ? 0x2 : _0x230b32 < 0x200000 ? 0x3 : _0x230b32 < 0x10000000 ? 0x4 : 0x5, _0x230b32)).len;
          return this;
        };
        _0x2420cb.prototype.int32 = function (_0x3d78e4) {
          return _0x3d78e4 < 0x0 ? this._push(_0xde837d, 0xa, _0x25f816.fromNumber(_0x3d78e4)) : this.uint32(_0x3d78e4);
        };
        _0x2420cb.prototype.sint32 = function (_0x57a132) {
          return this.uint32((_0x57a132 << 0x1 ^ _0x57a132 >> 0x1f) >>> 0x0);
        };
        _0x2420cb.prototype.uint64 = function (_0x19f6bf) {
          var _0x48bfd7 = _0x25f816.from(_0x19f6bf);
          return this._push(_0xde837d, _0x48bfd7.length(), _0x48bfd7);
        };
        _0x2420cb.prototype.int64 = _0x2420cb.prototype.uint64;
        _0x2420cb.prototype.sint64 = function (_0x39b4ca) {
          var _0x150b21 = _0x25f816.from(_0x39b4ca).zzEncode();
          return this._push(_0xde837d, _0x150b21.length(), _0x150b21);
        };
        _0x2420cb.prototype.bool = function (_0x37a089) {
          return this._push(_0x21420d, 0x1, _0x37a089 ? 0x1 : 0x0);
        };
        _0x2420cb.prototype.fixed32 = function (_0x2cfba7) {
          return this._push(_0x1ccf83, 0x4, _0x2cfba7 >>> 0x0);
        };
        _0x2420cb.prototype.sfixed32 = _0x2420cb.prototype.fixed32;
        _0x2420cb.prototype.fixed64 = function (_0xaa6185) {
          var _0x40d2f0 = _0x25f816.from(_0xaa6185);
          return this._push(_0x1ccf83, 0x4, _0x40d2f0.lo)._push(_0x1ccf83, 0x4, _0x40d2f0.hi);
        };
        _0x2420cb.prototype.sfixed64 = _0x2420cb.prototype.fixed64;
        _0x2420cb.prototype.float = function (_0x49614b) {
          return this._push(_0x487f64.float.writeFloatLE, 0x4, _0x49614b);
        };
        _0x2420cb.prototype.double = function (_0x17cf77) {
          return this._push(_0x487f64.float.writeDoubleLE, 0x8, _0x17cf77);
        };
        var _0x4b8d55 = _0x487f64.Array.prototype.set ? function (_0x9df8, _0x3b14bd, _0x30d80a) {
          _0x3b14bd.set(_0x9df8, _0x30d80a);
        } : function (_0xd159ef, _0x15320d, _0x2d24d3) {
          for (var _0x43fd97 = 0x0; _0x43fd97 < _0xd159ef.length; ++_0x43fd97) {
            _0x15320d[_0x2d24d3 + _0x43fd97] = _0xd159ef[_0x43fd97];
          }
        };
        _0x2420cb.prototype.bytes = function (_0x9fd055) {
          var _0x455bff = _0x9fd055.length >>> 0x0;
          if (!_0x455bff) {
            return this._push(_0x21420d, 0x1, 0x0);
          }
          if (_0x487f64.isString(_0x9fd055)) {
            var _0x2ea9d9 = _0x2420cb.alloc(_0x455bff = _0x521c7.length(_0x9fd055));
            _0x521c7.decode(_0x9fd055, _0x2ea9d9, 0x0);
            _0x9fd055 = _0x2ea9d9;
          }
          return this.uint32(_0x455bff)._push(_0x4b8d55, _0x455bff, _0x9fd055);
        };
        _0x2420cb.prototype.string = function (_0x28e36c) {
          var _0x279409 = _0xf00e69.length(_0x28e36c);
          return _0x279409 ? this.uint32(_0x279409)._push(_0xf00e69.write, _0x279409, _0x28e36c) : this._push(_0x21420d, 0x1, 0x0);
        };
        _0x2420cb.prototype.fork = function () {
          this.states = new _0x51392e(this);
          this.head = this.tail = new _0x288a88(_0x3df1a7, 0x0, 0x0);
          this.len = 0x0;
          return this;
        };
        _0x2420cb.prototype.reset = function () {
          if (this.states) {
            this.head = this.states.head;
            this.tail = this.states.tail;
            this.len = this.states.len;
            this.states = this.states.next;
          } else {
            this.head = this.tail = new _0x288a88(_0x3df1a7, 0x0, 0x0);
            this.len = 0x0;
          }
          return this;
        };
        _0x2420cb.prototype.ldelim = function () {
          var _0x58c245 = this.head;
          var _0x25f429 = this.tail;
          var _0x401fa7 = this.len;
          this.reset().uint32(_0x401fa7);
          if (_0x401fa7) {
            this.tail.next = _0x58c245.next;
            this.tail = _0x25f429;
            this.len += _0x401fa7;
          }
          return this;
        };
        _0x2420cb.prototype.finish = function () {
          var _0x186bbb = this.head.next;
          var _0x2640fb = this.constructor.alloc(this.len);
          for (var _0x49323d = 0x0; _0x186bbb;) {
            _0x186bbb.fn(_0x186bbb.val, _0x2640fb, _0x49323d);
            _0x49323d += _0x186bbb.len;
            _0x186bbb = _0x186bbb.next;
          }
          return _0x2640fb;
        };
        _0x2420cb._configure = function (_0x28d010) {
          _0x5626fb = _0x28d010;
          _0x2420cb.create = _0x251ed8();
          _0x5626fb._configure();
        };
        _0x2052f0.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js", function (_0x57519d, _0x47b374, _0x383bc9, _0x65078, _0x56780b) {
        _0x383bc9.exports = _0x11a03c;
        var _0xa96e5f = _0x47b374("./writer");
        (_0x11a03c.prototype = Object.create(_0xa96e5f.prototype)).constructor = _0x11a03c;
        var _0x4bd153 = _0x47b374('./util/minimal');
        function _0x11a03c() {
          _0xa96e5f.call(this);
        }
        function _0x545a41(_0x18b65b, _0x368dd8, _0x2c0026) {
          if (_0x18b65b.length < 0x28) {
            _0x4bd153.utf8.write(_0x18b65b, _0x368dd8, _0x2c0026);
          } else if (_0x368dd8.utf8Write) {
            _0x368dd8.utf8Write(_0x18b65b, _0x2c0026);
          } else {
            _0x368dd8.write(_0x18b65b, _0x2c0026);
          }
        }
        _0x11a03c._configure = function () {
          _0x11a03c.alloc = _0x4bd153._Buffer_allocUnsafe;
          _0x11a03c.writeBytesBuffer = _0x4bd153.Buffer && _0x4bd153.Buffer.prototype instanceof Uint8Array && "set" === _0x4bd153.Buffer.prototype.set.name ? function (_0x83ce01, _0x10d7a4, _0x4a0499) {
            _0x10d7a4.set(_0x83ce01, _0x4a0499);
          } : function (_0x369bff, _0x42f2fb, _0x58ccdd) {
            if (_0x369bff.copy) {
              _0x369bff.copy(_0x42f2fb, _0x58ccdd, 0x0, _0x369bff.length);
            } else {
              for (var _0x58f97c = 0x0; _0x58f97c < _0x369bff.length;) {
                _0x42f2fb[_0x58ccdd++] = _0x369bff[_0x58f97c++];
              }
            }
          };
        };
        _0x11a03c.prototype.bytes = function (_0x1d0492) {
          if (_0x4bd153.isString(_0x1d0492)) {
            _0x1d0492 = _0x4bd153._Buffer_from(_0x1d0492, 'base64');
          }
          var _0x5e5bf2 = _0x1d0492.length >>> 0x0;
          this.uint32(_0x5e5bf2);
          if (_0x5e5bf2) {
            this._push(_0x11a03c.writeBytesBuffer, _0x5e5bf2, _0x1d0492);
          }
          return this;
        };
        _0x11a03c.prototype.string = function (_0x145fe6) {
          var _0x4a5929 = _0x4bd153.Buffer.byteLength(_0x145fe6);
          this.uint32(_0x4a5929);
          if (_0x4a5929) {
            this._push(_0x545a41, _0x4a5929, _0x145fe6);
          }
          return this;
        };
        _0x11a03c._configure();
        _0x383bc9.exports;
      }, function () {
        return {
          './writer': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x11aabe.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/reader.js', function (_0x3be316, _0x3ea8b3, _0x29640a, _0x516bfa, _0x3ecfb1) {
        _0x29640a.exports = _0x2bf367;
        var _0x5abf31;
        var _0x4d62b6 = _0x3ea8b3("./util/minimal");
        var _0x164637 = _0x4d62b6.LongBits;
        var _0x1c98e7 = _0x4d62b6.utf8;
        function _0x2bf367(_0x14867a) {
          this.buf = _0x14867a;
          this.pos = 0x0;
          this.len = _0x14867a.length;
        }
        var _0x2d1b5f;
        var _0x5e4d3a = "undefined" != typeof Uint8Array ? function (_0x26c503) {
          if (_0x26c503 instanceof Uint8Array || Array.isArray(_0x26c503)) {
            return new _0x2bf367(_0x26c503);
          }
          throw Error("illegal buffer");
        } : function (_0x215fff) {
          if (Array.isArray(_0x215fff)) {
            return new _0x2bf367(_0x215fff);
          }
          throw Error("illegal buffer");
        };
        var _0x51e0a4 = function () {
          return _0x4d62b6.Buffer ? function (_0x3747fc) {
            return (_0x2bf367.create = function (_0x4b4e56) {
              return _0x4d62b6.Buffer.isBuffer(_0x4b4e56) ? new _0x5abf31(_0x4b4e56) : _0x5e4d3a(_0x4b4e56);
            })(_0x3747fc);
          } : _0x5e4d3a;
        };
        function _0x438db3() {
          var _0x2d345c = new _0x164637(0x0, 0x0);
          var _0x4c2bb4 = 0x0;
          if (!(this.len - this.pos > 0x4)) {
            for (; _0x4c2bb4 < 0x3; ++_0x4c2bb4) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0x2d345c.lo = (_0x2d345c.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0x4c2bb4) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x2d345c;
              }
            }
            _0x2d345c.lo = (_0x2d345c.lo | (0x7f & this.buf[this.pos++]) << 0x7 * _0x4c2bb4) >>> 0x0;
            return _0x2d345c;
          }
          for (; _0x4c2bb4 < 0x4; ++_0x4c2bb4) {
            _0x2d345c.lo = (_0x2d345c.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0x4c2bb4) >>> 0x0;
            if (this.buf[this.pos++] < 0x80) {
              return _0x2d345c;
            }
          }
          _0x2d345c.lo = (_0x2d345c.lo | (0x7f & this.buf[this.pos]) << 0x1c) >>> 0x0;
          _0x2d345c.hi = (_0x2d345c.hi | (0x7f & this.buf[this.pos]) >> 0x4) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x2d345c;
          }
          _0x4c2bb4 = 0x0;
          if (this.len - this.pos > 0x4) {
            for (; _0x4c2bb4 < 0x5; ++_0x4c2bb4) {
              _0x2d345c.hi = (_0x2d345c.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0x4c2bb4 + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x2d345c;
              }
            }
          } else {
            for (; _0x4c2bb4 < 0x5; ++_0x4c2bb4) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0x2d345c.hi = (_0x2d345c.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0x4c2bb4 + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x2d345c;
              }
            }
          }
          throw Error("invalid varint encoding");
        }
        function _0x547826() {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x8 || 0x1) + " > " + this.len);
          }
          return new _0x164637((this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0, (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0);
        }
        _0x2bf367.create = _0x51e0a4();
        _0x2bf367.prototype._slice = _0x4d62b6.Array.prototype.subarray || _0x4d62b6.Array.prototype.slice;
        _0x2d1b5f = 0xffffffff;
        _0x2bf367.prototype.uint32 = function () {
          _0x2d1b5f = (0x7f & this.buf[this.pos]) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x2d1b5f;
          }
          _0x2d1b5f = (_0x2d1b5f | (0x7f & this.buf[this.pos]) << 0x7) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x2d1b5f;
          }
          _0x2d1b5f = (_0x2d1b5f | (0x7f & this.buf[this.pos]) << 0xe) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x2d1b5f;
          }
          _0x2d1b5f = (_0x2d1b5f | (0x7f & this.buf[this.pos]) << 0x15) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x2d1b5f;
          }
          _0x2d1b5f = (_0x2d1b5f | (0xf & this.buf[this.pos]) << 0x1c) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x2d1b5f;
          }
          if ((this.pos += 0x5) > this.len) {
            this.pos = this.len;
            throw RangeError("index out of range: " + this.pos + " + " + (0xa || 0x1) + " > " + this.len);
          }
          return _0x2d1b5f;
        };
        _0x2bf367.prototype.int32 = function () {
          return 0x0 | this.uint32();
        };
        _0x2bf367.prototype.sint32 = function () {
          var _0x234689 = this.uint32();
          return _0x234689 >>> 0x1 ^ -(0x1 & _0x234689) | 0x0;
        };
        _0x2bf367.prototype.bool = function () {
          return 0x0 !== this.uint32();
        };
        _0x2bf367.prototype.fixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0x2bf367.prototype.sfixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return 0x0 | (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0x2bf367.prototype.float = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x19902d = _0x4d62b6.float.readFloatLE(this.buf, this.pos);
          this.pos += 0x4;
          return _0x19902d;
        };
        _0x2bf367.prototype.double = function () {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x346816 = _0x4d62b6.float.readDoubleLE(this.buf, this.pos);
          this.pos += 0x8;
          return _0x346816;
        };
        _0x2bf367.prototype.bytes = function () {
          var _0x138ad9 = this.uint32();
          var _0x15b738 = this.pos;
          var _0x54c503 = this.pos + _0x138ad9;
          if (_0x54c503 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (_0x138ad9 || 0x1) + " > " + this.len);
          }
          this.pos += _0x138ad9;
          return Array.isArray(this.buf) ? this.buf.slice(_0x15b738, _0x54c503) : _0x15b738 === _0x54c503 ? new this.buf.constructor(0x0) : this._slice.call(this.buf, _0x15b738, _0x54c503);
        };
        _0x2bf367.prototype.string = function () {
          var _0x225caa = this.bytes();
          return _0x1c98e7.read(_0x225caa, 0x0, _0x225caa.length);
        };
        _0x2bf367.prototype.skip = function (_0x320f53) {
          if ("number" == typeof _0x320f53) {
            if (this.pos + _0x320f53 > this.len) {
              throw RangeError("index out of range: " + this.pos + " + " + (_0x320f53 || 0x1) + " > " + this.len);
            }
            this.pos += _0x320f53;
          } else {
            do {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
            } while (0x80 & this.buf[this.pos++]);
          }
          return this;
        };
        _0x2bf367.prototype.skipType = function (_0x378b72) {
          switch (_0x378b72) {
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
              for (; 0x4 != (_0x378b72 = 0x7 & this.uint32());) {
                this.skipType(_0x378b72);
              }
              break;
            case 0x5:
              this.skip(0x4);
              break;
            default:
              throw Error("invalid wire type " + _0x378b72 + " at offset " + this.pos);
          }
          return this;
        };
        _0x2bf367._configure = function (_0x1a2481) {
          _0x5abf31 = _0x1a2481;
          _0x2bf367.create = _0x51e0a4();
          _0x5abf31._configure();
          var _0x3d3729 = _0x4d62b6.Long ? "toLong" : "toNumber";
          _0x4d62b6.merge(_0x2bf367.prototype, {
            'int64': function () {
              return _0x438db3.call(this)[_0x3d3729](false);
            },
            'uint64': function () {
              return _0x438db3.call(this)[_0x3d3729](true);
            },
            'sint64': function () {
              return _0x438db3.call(this).zzDecode()[_0x3d3729](false);
            },
            'fixed64': function () {
              return _0x547826.call(this)[_0x3d3729](true);
            },
            'sfixed64': function () {
              return _0x547826.call(this)[_0x3d3729](false);
            }
          });
        };
        _0x29640a.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x11aabe.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js', function (_0x200de9, _0x5806d9, _0x2da302, _0x5cb065, _0x10c659) {
        _0x2da302.exports = _0x13e630;
        var _0x3e5ffa = _0x5806d9("./reader");
        (_0x13e630.prototype = Object.create(_0x3e5ffa.prototype)).constructor = _0x13e630;
        var _0x507f9d = _0x5806d9("./util/minimal");
        function _0x13e630(_0x546942) {
          _0x3e5ffa.call(this, _0x546942);
        }
        _0x13e630._configure = function () {
          if (_0x507f9d.Buffer) {
            _0x13e630.prototype._slice = _0x507f9d.Buffer.prototype.slice;
          }
        };
        _0x13e630.prototype.string = function () {
          var _0x47097b = this.uint32();
          return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + _0x47097b, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + _0x47097b, this.len));
        };
        _0x13e630._configure();
        _0x2da302.exports;
      }, function () {
        return {
          './reader': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/reader.js',
          './util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x11aabe.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js', function (_0x5275a9, _0x320dbf, _0x5c653f, _0x4e857d, _0x45f4c2) {
        _0x5c653f.exports = _0x1d5da4;
        var _0x375052 = _0x320dbf("../util/minimal");
        function _0x1d5da4(_0x362cc8, _0x455a52, _0x309666) {
          if ("function" != typeof _0x362cc8) {
            throw TypeError("rpcImpl must be a function");
          }
          _0x375052.EventEmitter.call(this);
          this.rpcImpl = _0x362cc8;
          this.requestDelimited = Boolean(_0x455a52);
          this.responseDelimited = Boolean(_0x309666);
        }
        (_0x1d5da4.prototype = Object.create(_0x375052.EventEmitter.prototype)).constructor = _0x1d5da4;
        _0x1d5da4.prototype.rpcCall = function _0x6c59b8(_0x470214, _0x4c042d, _0x1cdf2d, _0x5a0b29, _0x1dfcba) {
          if (!_0x5a0b29) {
            throw TypeError("request must be specified");
          }
          var _0x4674b0 = this;
          if (!_0x1dfcba) {
            return _0x375052.asPromise(_0x6c59b8, _0x4674b0, _0x470214, _0x4c042d, _0x1cdf2d, _0x5a0b29);
          }
          if (_0x4674b0.rpcImpl) {
            try {
              return _0x4674b0.rpcImpl(_0x470214, _0x4c042d[_0x4674b0.requestDelimited ? "encodeDelimited" : "encode"](_0x5a0b29).finish(), function (_0x317892, _0x3143e3) {
                if (_0x317892) {
                  _0x4674b0.emit("error", _0x317892, _0x470214);
                  return _0x1dfcba(_0x317892);
                }
                if (null !== _0x3143e3) {
                  if (!(_0x3143e3 instanceof _0x1cdf2d)) {
                    try {
                      _0x3143e3 = _0x1cdf2d[_0x4674b0.responseDelimited ? "decodeDelimited" : "decode"](_0x3143e3);
                    } catch (_0x105a67) {
                      _0x4674b0.emit("error", _0x105a67, _0x470214);
                      return _0x1dfcba(_0x105a67);
                    }
                  }
                  _0x4674b0.emit("data", _0x3143e3, _0x470214);
                  return _0x1dfcba(null, _0x3143e3);
                }
                _0x4674b0.end(true);
              });
            } catch (_0x204fcd) {
              _0x4674b0.emit("error", _0x204fcd, _0x470214);
              return void setTimeout(function () {
                _0x1dfcba(_0x204fcd);
              }, 0x0);
            }
          } else {
            setTimeout(function () {
              _0x1dfcba(Error("already ended"));
            }, 0x0);
          }
        };
        _0x1d5da4.prototype.end = function (_0x5002ae) {
          if (this.rpcImpl) {
            if (!_0x5002ae) {
              this.rpcImpl(null, null, null);
            }
            this.rpcImpl = null;
            this.emit("end").off();
          }
          return this;
        };
        _0x5c653f.exports;
      }, function () {
        return {
          '../util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js", function (_0x44e478, _0x5439c1, _0xfc94c0, _0x1e358b, _0x172b1b) {
        _0x44e478.Service = _0x5439c1('./rpc/service');
        _0xfc94c0.exports;
      }, function () {
        return {
          './rpc/service': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js'
        };
      });
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/roots.js", function (_0x3d12ed, _0x33c8a9, _0x407e26, _0x4886bf, _0x1b67a9) {
        _0x407e26.exports = {};
        _0x407e26.exports;
      }, {});
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js", function (_0x3fad78, _0x43b6dd, _0x536695, _0x276606, _0x4c2641) {
        function _0x1351a6() {
          _0x3fad78.util._configure();
          _0x3fad78.Writer._configure(_0x3fad78.BufferWriter);
          _0x3fad78.Reader._configure(_0x3fad78.BufferReader);
        }
        _0x3fad78.build = 'minimal';
        _0x3fad78.Writer = _0x43b6dd("./writer");
        _0x3fad78.BufferWriter = _0x43b6dd("./writer_buffer");
        _0x3fad78.Reader = _0x43b6dd("./reader");
        _0x3fad78.BufferReader = _0x43b6dd("./reader_buffer");
        _0x3fad78.util = _0x43b6dd("./util/minimal");
        _0x3fad78.rpc = _0x43b6dd("./rpc");
        _0x3fad78.roots = _0x43b6dd("./roots");
        _0x3fad78.configure = _0x1351a6;
        _0x1351a6();
        _0x536695.exports;
      }, function () {
        return {
          './writer': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './writer_buffer': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js",
          './reader': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/reader.js',
          './reader_buffer': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js',
          './util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          './rpc': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js",
          './roots': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/roots.js"
        };
      });
      var _0x5e9a56;
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/minimal.js", function (_0x1e901d, _0x73e892, _0x496182, _0x56ec86, _0x47b819) {
        _0x496182.exports = _0x73e892("./src/index-minimal");
        _0x496182.exports;
      }, function () {
        return {
          './src/index-minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js"
        };
      });
      var _0x5cc917;
      _0x11aabe.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/assets/Script/Proto/fgProto.js', function (_0x17355a, _0x4f10d8, _0x3a9cce, _0x4b8973, _0x3172ac) {
        var _0x40ac5;
        var _0x568dc9 = _0x4f10d8("protobufjs/minimal");
        var _0x1314a8 = _0x568dc9.Reader;
        var _0x35b2f5 = _0x568dc9.Writer;
        var _0x2f72ce = _0x568dc9.util;
        var _0x32ef0f = _0x568dc9.roots["default"] || (_0x568dc9.roots["default"] = {});
        (_0x40ac5 = {
          "AwardData": function () {
            function _0x4e33d0(_0x4453ec) {
              if (_0x4453ec) {
                var _0x3e5726 = Object.keys(_0x4453ec);
                for (var _0x2c82f8 = 0x0; _0x2c82f8 < _0x3e5726.length; ++_0x2c82f8) {
                  if (null != _0x4453ec[_0x3e5726[_0x2c82f8]]) {
                    this[_0x3e5726[_0x2c82f8]] = _0x4453ec[_0x3e5726[_0x2c82f8]];
                  }
                }
              }
            }
            _0x4e33d0.prototype.Symbol = 0x0;
            _0x4e33d0.prototype.Line = 0x0;
            _0x4e33d0.prototype.Win = 0x0;
            _0x4e33d0.create = function (_0x5a73a9) {
              return new _0x4e33d0(_0x5a73a9);
            };
            _0x4e33d0.encode = function (_0xfb7432, _0x3df55a) {
              if (!_0x3df55a) {
                _0x3df55a = _0x35b2f5.create();
              }
              if (null != _0xfb7432.Symbol && Object.hasOwnProperty.call(_0xfb7432, "Symbol")) {
                _0x3df55a.uint32(0x8).int32(_0xfb7432.Symbol);
              }
              if (null != _0xfb7432.Line && Object.hasOwnProperty.call(_0xfb7432, 'Line')) {
                _0x3df55a.uint32(0x10).int32(_0xfb7432.Line);
              }
              if (null != _0xfb7432.Win && Object.hasOwnProperty.call(_0xfb7432, "Win")) {
                _0x3df55a.uint32(0x19).double(_0xfb7432.Win);
              }
              return _0x3df55a;
            };
            _0x4e33d0.encodeDelimited = function (_0x192de2, _0x538004) {
              return this.encode(_0x192de2, _0x538004).ldelim();
            };
            _0x4e33d0.decode = function (_0x2836d9, _0x230c94) {
              if (!(_0x2836d9 instanceof _0x1314a8)) {
                _0x2836d9 = _0x1314a8.create(_0x2836d9);
              }
              var _0x21d15d = undefined === _0x230c94 ? _0x2836d9.len : _0x2836d9.pos + _0x230c94;
              for (var _0x47ccc1 = new _0x32ef0f.fgProto.AwardData(); _0x2836d9.pos < _0x21d15d;) {
                var _0x3d83d0 = _0x2836d9.uint32();
                switch (_0x3d83d0 >>> 0x3) {
                  case 0x1:
                    _0x47ccc1.Symbol = _0x2836d9.int32();
                    break;
                  case 0x2:
                    _0x47ccc1.Line = _0x2836d9.int32();
                    break;
                  case 0x3:
                    _0x47ccc1.Win = _0x2836d9.double();
                    break;
                  default:
                    _0x2836d9.skipType(0x7 & _0x3d83d0);
                }
              }
              return _0x47ccc1;
            };
            _0x4e33d0.decodeDelimited = function (_0x353a9a) {
              if (!(_0x353a9a instanceof _0x1314a8)) {
                _0x353a9a = new _0x1314a8(_0x353a9a);
              }
              return this.decode(_0x353a9a, _0x353a9a.uint32());
            };
            _0x4e33d0.verify = function (_0xc1bd4d) {
              return "object" != typeof _0xc1bd4d || null === _0xc1bd4d ? "object expected" : null != _0xc1bd4d.Symbol && _0xc1bd4d.hasOwnProperty("Symbol") && !_0x2f72ce.isInteger(_0xc1bd4d.Symbol) ? "Symbol: integer expected" : null != _0xc1bd4d.Line && _0xc1bd4d.hasOwnProperty("Line") && !_0x2f72ce.isInteger(_0xc1bd4d.Line) ? "Line: integer expected" : null != _0xc1bd4d.Win && _0xc1bd4d.hasOwnProperty('Win') && "number" != typeof _0xc1bd4d.Win ? "Win: number expected" : null;
            };
            _0x4e33d0.fromObject = function (_0x48f093) {
              if (_0x48f093 instanceof _0x32ef0f.fgProto.AwardData) {
                return _0x48f093;
              }
              var _0x440ef4 = new _0x32ef0f.fgProto.AwardData();
              if (null != _0x48f093.Symbol) {
                _0x440ef4.Symbol = 0x0 | _0x48f093.Symbol;
              }
              if (null != _0x48f093.Line) {
                _0x440ef4.Line = 0x0 | _0x48f093.Line;
              }
              if (null != _0x48f093.Win) {
                _0x440ef4.Win = Number(_0x48f093.Win);
              }
              return _0x440ef4;
            };
            _0x4e33d0.toObject = function (_0x1166c0, _0xf44517) {
              if (!_0xf44517) {
                _0xf44517 = {};
              }
              var _0x624b98 = {};
              if (_0xf44517.defaults) {
                _0x624b98.Symbol = 0x0;
                _0x624b98.Line = 0x0;
                _0x624b98.Win = 0x0;
              }
              if (null != _0x1166c0.Symbol && _0x1166c0.hasOwnProperty('Symbol')) {
                _0x624b98.Symbol = _0x1166c0.Symbol;
              }
              if (null != _0x1166c0.Line && _0x1166c0.hasOwnProperty("Line")) {
                _0x624b98.Line = _0x1166c0.Line;
              }
              if (null != _0x1166c0.Win && _0x1166c0.hasOwnProperty("Win")) {
                _0x624b98.Win = _0xf44517.json && !isFinite(_0x1166c0.Win) ? String(_0x1166c0.Win) : _0x1166c0.Win;
              }
              return _0x624b98;
            };
            _0x4e33d0.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x568dc9.util.toJSONOptions);
            };
            return _0x4e33d0;
          }(),
          SpinAck: function () {
            function _0x4971be(_0x1f9071) {
              this.PlateSymbol = [];
              this.AwardDataVec = [];
              if (_0x1f9071) {
                var _0x531dbe = Object.keys(_0x1f9071);
                for (var _0x4d46f5 = 0x0; _0x4d46f5 < _0x531dbe.length; ++_0x4d46f5) {
                  if (null != _0x1f9071[_0x531dbe[_0x4d46f5]]) {
                    this[_0x531dbe[_0x4d46f5]] = _0x1f9071[_0x531dbe[_0x4d46f5]];
                  }
                }
              }
            }
            _0x4971be.prototype.PlateSymbol = _0x2f72ce.emptyArray;
            _0x4971be.prototype.AwardDataVec = _0x2f72ce.emptyArray;
            _0x4971be.prototype.AwardTypeFlag = 0x0;
            _0x4971be.prototype.Mult = 0x0;
            _0x4971be.prototype.TotalWin = 0x0;
            _0x4971be.prototype.ShowIndex = '';
            _0x4971be.prototype.NowMoney = 0x0;
            _0x4971be.prototype.AckType = 0x0;
            _0x4971be.prototype.Extra = false;
            _0x4971be.prototype.RTP = 0x0;
            _0x4971be.create = function (_0x5f55c5) {
              return new _0x4971be(_0x5f55c5);
            };
            _0x4971be.encode = function (_0x363e87, _0x354deb) {
              if (!_0x354deb) {
                _0x354deb = _0x35b2f5.create();
              }
              if (null != _0x363e87.PlateSymbol && _0x363e87.PlateSymbol.length) {
                for (var _0x1d9fe8 = 0x0; _0x1d9fe8 < _0x363e87.PlateSymbol.length; ++_0x1d9fe8) {
                  _0x32ef0f.fgProto.Column.encode(_0x363e87.PlateSymbol[_0x1d9fe8], _0x354deb.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0x363e87.AwardDataVec && _0x363e87.AwardDataVec.length) {
                for (_0x1d9fe8 = 0x0; _0x1d9fe8 < _0x363e87.AwardDataVec.length; ++_0x1d9fe8) {
                  _0x32ef0f.fgProto.AwardData.encode(_0x363e87.AwardDataVec[_0x1d9fe8], _0x354deb.uint32(0x12).fork()).ldelim();
                }
              }
              if (null != _0x363e87.AwardTypeFlag && Object.hasOwnProperty.call(_0x363e87, 'AwardTypeFlag')) {
                _0x354deb.uint32(0x18).int32(_0x363e87.AwardTypeFlag);
              }
              if (null != _0x363e87.Mult && Object.hasOwnProperty.call(_0x363e87, "Mult")) {
                _0x354deb.uint32(0x21).double(_0x363e87.Mult);
              }
              if (null != _0x363e87.TotalWin && Object.hasOwnProperty.call(_0x363e87, "TotalWin")) {
                _0x354deb.uint32(0x29).double(_0x363e87.TotalWin);
              }
              if (null != _0x363e87.ShowIndex && Object.hasOwnProperty.call(_0x363e87, "ShowIndex")) {
                _0x354deb.uint32(0x32).string(_0x363e87.ShowIndex);
              }
              if (null != _0x363e87.NowMoney && Object.hasOwnProperty.call(_0x363e87, "NowMoney")) {
                _0x354deb.uint32(0x39).double(_0x363e87.NowMoney);
              }
              if (null != _0x363e87.AckType && Object.hasOwnProperty.call(_0x363e87, "AckType")) {
                _0x354deb.uint32(0x40).int32(_0x363e87.AckType);
              }
              if (null != _0x363e87.Extra && Object.hasOwnProperty.call(_0x363e87, "Extra")) {
                _0x354deb.uint32(0x48).bool(_0x363e87.Extra);
              }
              if (null != _0x363e87.RTP && Object.hasOwnProperty.call(_0x363e87, "RTP")) {
                _0x354deb.uint32(0x51).double(_0x363e87.RTP);
              }
              return _0x354deb;
            };
            _0x4971be.encodeDelimited = function (_0x50eff7, _0xcf6c03) {
              return this.encode(_0x50eff7, _0xcf6c03).ldelim();
            };
            _0x4971be.decode = function (_0x2b4548, _0x3ca446) {
              if (!(_0x2b4548 instanceof _0x1314a8)) {
                _0x2b4548 = _0x1314a8.create(_0x2b4548);
              }
              var _0x479d52 = undefined === _0x3ca446 ? _0x2b4548.len : _0x2b4548.pos + _0x3ca446;
              for (var _0x21a10e = new _0x32ef0f.fgProto.SpinAck(); _0x2b4548.pos < _0x479d52;) {
                var _0xe7425d = _0x2b4548.uint32();
                switch (_0xe7425d >>> 0x3) {
                  case 0x1:
                    if (!(_0x21a10e.PlateSymbol && _0x21a10e.PlateSymbol.length)) {
                      _0x21a10e.PlateSymbol = [];
                    }
                    _0x21a10e.PlateSymbol.push(_0x32ef0f.fgProto.Column.decode(_0x2b4548, _0x2b4548.uint32()));
                    break;
                  case 0x2:
                    if (!(_0x21a10e.AwardDataVec && _0x21a10e.AwardDataVec.length)) {
                      _0x21a10e.AwardDataVec = [];
                    }
                    _0x21a10e.AwardDataVec.push(_0x32ef0f.fgProto.AwardData.decode(_0x2b4548, _0x2b4548.uint32()));
                    break;
                  case 0x3:
                    _0x21a10e.AwardTypeFlag = _0x2b4548.int32();
                    break;
                  case 0x4:
                    _0x21a10e.Mult = _0x2b4548.double();
                    break;
                  case 0x5:
                    _0x21a10e.TotalWin = _0x2b4548.double();
                    break;
                  case 0x6:
                    _0x21a10e.ShowIndex = _0x2b4548.string();
                    break;
                  case 0x7:
                    _0x21a10e.NowMoney = _0x2b4548.double();
                    break;
                  case 0x8:
                    _0x21a10e.AckType = _0x2b4548.int32();
                    break;
                  case 0x9:
                    _0x21a10e.Extra = _0x2b4548.bool();
                    break;
                  case 0xa:
                    _0x21a10e.RTP = _0x2b4548.double();
                    break;
                  default:
                    _0x2b4548.skipType(0x7 & _0xe7425d);
                }
              }
              return _0x21a10e;
            };
            _0x4971be.decodeDelimited = function (_0x1686f7) {
              if (!(_0x1686f7 instanceof _0x1314a8)) {
                _0x1686f7 = new _0x1314a8(_0x1686f7);
              }
              return this.decode(_0x1686f7, _0x1686f7.uint32());
            };
            _0x4971be.verify = function (_0xa26497) {
              if ("object" != typeof _0xa26497 || null === _0xa26497) {
                return "object expected";
              }
              if (null != _0xa26497.PlateSymbol && _0xa26497.hasOwnProperty("PlateSymbol")) {
                if (!Array.isArray(_0xa26497.PlateSymbol)) {
                  return "PlateSymbol: array expected";
                }
                for (var _0x1647b1 = 0x0; _0x1647b1 < _0xa26497.PlateSymbol.length; ++_0x1647b1) {
                  if (_0xc22b8e = _0x32ef0f.fgProto.Column.verify(_0xa26497.PlateSymbol[_0x1647b1])) {
                    return "PlateSymbol." + _0xc22b8e;
                  }
                }
              }
              if (null != _0xa26497.AwardDataVec && _0xa26497.hasOwnProperty("AwardDataVec")) {
                if (!Array.isArray(_0xa26497.AwardDataVec)) {
                  return "AwardDataVec: array expected";
                }
                for (_0x1647b1 = 0x0; _0x1647b1 < _0xa26497.AwardDataVec.length; ++_0x1647b1) {
                  var _0xc22b8e;
                  if (_0xc22b8e = _0x32ef0f.fgProto.AwardData.verify(_0xa26497.AwardDataVec[_0x1647b1])) {
                    return "AwardDataVec." + _0xc22b8e;
                  }
                }
              }
              return null != _0xa26497.AwardTypeFlag && _0xa26497.hasOwnProperty("AwardTypeFlag") && !_0x2f72ce.isInteger(_0xa26497.AwardTypeFlag) ? "AwardTypeFlag: integer expected" : null != _0xa26497.Mult && _0xa26497.hasOwnProperty('Mult') && "number" != typeof _0xa26497.Mult ? "Mult: number expected" : null != _0xa26497.TotalWin && _0xa26497.hasOwnProperty("TotalWin") && "number" != typeof _0xa26497.TotalWin ? "TotalWin: number expected" : null != _0xa26497.ShowIndex && _0xa26497.hasOwnProperty("ShowIndex") && !_0x2f72ce.isString(_0xa26497.ShowIndex) ? "ShowIndex: string expected" : null != _0xa26497.NowMoney && _0xa26497.hasOwnProperty("NowMoney") && 'number' != typeof _0xa26497.NowMoney ? "NowMoney: number expected" : null != _0xa26497.AckType && _0xa26497.hasOwnProperty("AckType") && !_0x2f72ce.isInteger(_0xa26497.AckType) ? "AckType: integer expected" : null != _0xa26497.Extra && _0xa26497.hasOwnProperty("Extra") && "boolean" != typeof _0xa26497.Extra ? "Extra: boolean expected" : null != _0xa26497.RTP && _0xa26497.hasOwnProperty("RTP") && "number" != typeof _0xa26497.RTP ? "RTP: number expected" : null;
            };
            _0x4971be.fromObject = function (_0xabe5ca) {
              if (_0xabe5ca instanceof _0x32ef0f.fgProto.SpinAck) {
                return _0xabe5ca;
              }
              var _0x3846ad = new _0x32ef0f.fgProto.SpinAck();
              if (_0xabe5ca.PlateSymbol) {
                if (!Array.isArray(_0xabe5ca.PlateSymbol)) {
                  throw TypeError(".fgProto.SpinAck.PlateSymbol: array expected");
                }
                _0x3846ad.PlateSymbol = [];
                for (var _0x142905 = 0x0; _0x142905 < _0xabe5ca.PlateSymbol.length; ++_0x142905) {
                  if ("object" != typeof _0xabe5ca.PlateSymbol[_0x142905]) {
                    throw TypeError(".fgProto.SpinAck.PlateSymbol: object expected");
                  }
                  _0x3846ad.PlateSymbol[_0x142905] = _0x32ef0f.fgProto.Column.fromObject(_0xabe5ca.PlateSymbol[_0x142905]);
                }
              }
              if (_0xabe5ca.AwardDataVec) {
                if (!Array.isArray(_0xabe5ca.AwardDataVec)) {
                  throw TypeError(".fgProto.SpinAck.AwardDataVec: array expected");
                }
                _0x3846ad.AwardDataVec = [];
                for (_0x142905 = 0x0; _0x142905 < _0xabe5ca.AwardDataVec.length; ++_0x142905) {
                  if ("object" != typeof _0xabe5ca.AwardDataVec[_0x142905]) {
                    throw TypeError(".fgProto.SpinAck.AwardDataVec: object expected");
                  }
                  _0x3846ad.AwardDataVec[_0x142905] = _0x32ef0f.fgProto.AwardData.fromObject(_0xabe5ca.AwardDataVec[_0x142905]);
                }
              }
              if (null != _0xabe5ca.AwardTypeFlag) {
                _0x3846ad.AwardTypeFlag = 0x0 | _0xabe5ca.AwardTypeFlag;
              }
              if (null != _0xabe5ca.Mult) {
                _0x3846ad.Mult = Number(_0xabe5ca.Mult);
              }
              if (null != _0xabe5ca.TotalWin) {
                _0x3846ad.TotalWin = Number(_0xabe5ca.TotalWin);
              }
              if (null != _0xabe5ca.ShowIndex) {
                _0x3846ad.ShowIndex = String(_0xabe5ca.ShowIndex);
              }
              if (null != _0xabe5ca.NowMoney) {
                _0x3846ad.NowMoney = Number(_0xabe5ca.NowMoney);
              }
              if (null != _0xabe5ca.AckType) {
                _0x3846ad.AckType = 0x0 | _0xabe5ca.AckType;
              }
              if (null != _0xabe5ca.Extra) {
                _0x3846ad.Extra = Boolean(_0xabe5ca.Extra);
              }
              if (null != _0xabe5ca.RTP) {
                _0x3846ad.RTP = Number(_0xabe5ca.RTP);
              }
              return _0x3846ad;
            };
            _0x4971be.toObject = function (_0x464f2e, _0x22806e) {
              if (!_0x22806e) {
                _0x22806e = {};
              }
              var _0x33fd6e = {};
              if (_0x22806e.arrays || _0x22806e.defaults) {
                _0x33fd6e.PlateSymbol = [];
                _0x33fd6e.AwardDataVec = [];
              }
              if (_0x22806e.defaults) {
                _0x33fd6e.AwardTypeFlag = 0x0;
                _0x33fd6e.Mult = 0x0;
                _0x33fd6e.TotalWin = 0x0;
                _0x33fd6e.ShowIndex = '';
                _0x33fd6e.NowMoney = 0x0;
                _0x33fd6e.AckType = 0x0;
                _0x33fd6e.Extra = false;
                _0x33fd6e.RTP = 0x0;
              }
              if (_0x464f2e.PlateSymbol && _0x464f2e.PlateSymbol.length) {
                _0x33fd6e.PlateSymbol = [];
                for (var _0x297fdd = 0x0; _0x297fdd < _0x464f2e.PlateSymbol.length; ++_0x297fdd) {
                  _0x33fd6e.PlateSymbol[_0x297fdd] = _0x32ef0f.fgProto.Column.toObject(_0x464f2e.PlateSymbol[_0x297fdd], _0x22806e);
                }
              }
              if (_0x464f2e.AwardDataVec && _0x464f2e.AwardDataVec.length) {
                _0x33fd6e.AwardDataVec = [];
                for (_0x297fdd = 0x0; _0x297fdd < _0x464f2e.AwardDataVec.length; ++_0x297fdd) {
                  _0x33fd6e.AwardDataVec[_0x297fdd] = _0x32ef0f.fgProto.AwardData.toObject(_0x464f2e.AwardDataVec[_0x297fdd], _0x22806e);
                }
              }
              if (null != _0x464f2e.AwardTypeFlag && _0x464f2e.hasOwnProperty("AwardTypeFlag")) {
                _0x33fd6e.AwardTypeFlag = _0x464f2e.AwardTypeFlag;
              }
              if (null != _0x464f2e.Mult && _0x464f2e.hasOwnProperty("Mult")) {
                _0x33fd6e.Mult = _0x22806e.json && !isFinite(_0x464f2e.Mult) ? String(_0x464f2e.Mult) : _0x464f2e.Mult;
              }
              if (null != _0x464f2e.TotalWin && _0x464f2e.hasOwnProperty("TotalWin")) {
                _0x33fd6e.TotalWin = _0x22806e.json && !isFinite(_0x464f2e.TotalWin) ? String(_0x464f2e.TotalWin) : _0x464f2e.TotalWin;
              }
              if (null != _0x464f2e.ShowIndex && _0x464f2e.hasOwnProperty("ShowIndex")) {
                _0x33fd6e.ShowIndex = _0x464f2e.ShowIndex;
              }
              if (null != _0x464f2e.NowMoney && _0x464f2e.hasOwnProperty("NowMoney")) {
                _0x33fd6e.NowMoney = _0x22806e.json && !isFinite(_0x464f2e.NowMoney) ? String(_0x464f2e.NowMoney) : _0x464f2e.NowMoney;
              }
              if (null != _0x464f2e.AckType && _0x464f2e.hasOwnProperty('AckType')) {
                _0x33fd6e.AckType = _0x464f2e.AckType;
              }
              if (null != _0x464f2e.Extra && _0x464f2e.hasOwnProperty("Extra")) {
                _0x33fd6e.Extra = _0x464f2e.Extra;
              }
              if (null != _0x464f2e.RTP && _0x464f2e.hasOwnProperty('RTP')) {
                _0x33fd6e.RTP = _0x22806e.json && !isFinite(_0x464f2e.RTP) ? String(_0x464f2e.RTP) : _0x464f2e.RTP;
              }
              return _0x33fd6e;
            };
            _0x4971be.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x568dc9.util.toJSONOptions);
            };
            return _0x4971be;
          }(),
          "GameInfoData": function () {
            function _0x5cc378(_0x1b85ac) {
              this.Mul = [];
              if (_0x1b85ac) {
                var _0x4018c2 = Object.keys(_0x1b85ac);
                for (var _0x19195d = 0x0; _0x19195d < _0x4018c2.length; ++_0x19195d) {
                  if (null != _0x1b85ac[_0x4018c2[_0x19195d]]) {
                    this[_0x4018c2[_0x19195d]] = _0x1b85ac[_0x4018c2[_0x19195d]];
                  }
                }
              }
            }
            _0x5cc378.prototype.ShowExtra = false;
            _0x5cc378.prototype.Mul = _0x2f72ce.emptyArray;
            _0x5cc378.create = function (_0x15a052) {
              return new _0x5cc378(_0x15a052);
            };
            _0x5cc378.encode = function (_0x2598c7, _0x4241db) {
              if (!_0x4241db) {
                _0x4241db = _0x35b2f5.create();
              }
              if (null != _0x2598c7.ShowExtra && Object.hasOwnProperty.call(_0x2598c7, "ShowExtra")) {
                _0x4241db.uint32(0x8).bool(_0x2598c7.ShowExtra);
              }
              if (null != _0x2598c7.Mul && _0x2598c7.Mul.length) {
                _0x4241db.uint32(0x12).fork();
                for (var _0x51e2b2 = 0x0; _0x51e2b2 < _0x2598c7.Mul.length; ++_0x51e2b2) {
                  _0x4241db.double(_0x2598c7.Mul[_0x51e2b2]);
                }
                _0x4241db.ldelim();
              }
              return _0x4241db;
            };
            _0x5cc378.encodeDelimited = function (_0x15ea45, _0x370e58) {
              return this.encode(_0x15ea45, _0x370e58).ldelim();
            };
            _0x5cc378.decode = function (_0x4da1ae, _0x321f59) {
              if (!(_0x4da1ae instanceof _0x1314a8)) {
                _0x4da1ae = _0x1314a8.create(_0x4da1ae);
              }
              var _0x303c83 = undefined === _0x321f59 ? _0x4da1ae.len : _0x4da1ae.pos + _0x321f59;
              for (var _0x5eafd3 = new _0x32ef0f.fgProto.GameInfoData(); _0x4da1ae.pos < _0x303c83;) {
                var _0x30b321 = _0x4da1ae.uint32();
                switch (_0x30b321 >>> 0x3) {
                  case 0x1:
                    _0x5eafd3.ShowExtra = _0x4da1ae.bool();
                    break;
                  case 0x2:
                    if (!(_0x5eafd3.Mul && _0x5eafd3.Mul.length)) {
                      _0x5eafd3.Mul = [];
                    }
                    if (0x2 == (0x7 & _0x30b321)) {
                      for (var _0x336722 = _0x4da1ae.uint32() + _0x4da1ae.pos; _0x4da1ae.pos < _0x336722;) {
                        _0x5eafd3.Mul.push(_0x4da1ae.double());
                      }
                    } else {
                      _0x5eafd3.Mul.push(_0x4da1ae.double());
                    }
                    break;
                  default:
                    _0x4da1ae.skipType(0x7 & _0x30b321);
                }
              }
              return _0x5eafd3;
            };
            _0x5cc378.decodeDelimited = function (_0x58c7e8) {
              if (!(_0x58c7e8 instanceof _0x1314a8)) {
                _0x58c7e8 = new _0x1314a8(_0x58c7e8);
              }
              return this.decode(_0x58c7e8, _0x58c7e8.uint32());
            };
            _0x5cc378.verify = function (_0x40d7eb) {
              if ("object" != typeof _0x40d7eb || null === _0x40d7eb) {
                return "object expected";
              }
              if (null != _0x40d7eb.ShowExtra && _0x40d7eb.hasOwnProperty("ShowExtra") && "boolean" != typeof _0x40d7eb.ShowExtra) {
                return "ShowExtra: boolean expected";
              }
              if (null != _0x40d7eb.Mul && _0x40d7eb.hasOwnProperty('Mul')) {
                if (!Array.isArray(_0x40d7eb.Mul)) {
                  return "Mul: array expected";
                }
                for (var _0x1a3c10 = 0x0; _0x1a3c10 < _0x40d7eb.Mul.length; ++_0x1a3c10) {
                  if ("number" != typeof _0x40d7eb.Mul[_0x1a3c10]) {
                    return "Mul: number[] expected";
                  }
                }
              }
              return null;
            };
            _0x5cc378.fromObject = function (_0x29bbff) {
              if (_0x29bbff instanceof _0x32ef0f.fgProto.GameInfoData) {
                return _0x29bbff;
              }
              var _0x295478 = new _0x32ef0f.fgProto.GameInfoData();
              if (null != _0x29bbff.ShowExtra) {
                _0x295478.ShowExtra = Boolean(_0x29bbff.ShowExtra);
              }
              if (_0x29bbff.Mul) {
                if (!Array.isArray(_0x29bbff.Mul)) {
                  throw TypeError(".fgProto.GameInfoData.Mul: array expected");
                }
                _0x295478.Mul = [];
                for (var _0x2f61d1 = 0x0; _0x2f61d1 < _0x29bbff.Mul.length; ++_0x2f61d1) {
                  _0x295478.Mul[_0x2f61d1] = Number(_0x29bbff.Mul[_0x2f61d1]);
                }
              }
              return _0x295478;
            };
            _0x5cc378.toObject = function (_0x2d0a36, _0x3a5177) {
              if (!_0x3a5177) {
                _0x3a5177 = {};
              }
              var _0x458953 = {};
              if (_0x3a5177.arrays || _0x3a5177.defaults) {
                _0x458953.Mul = [];
              }
              if (_0x3a5177.defaults) {
                _0x458953.ShowExtra = false;
              }
              if (null != _0x2d0a36.ShowExtra && _0x2d0a36.hasOwnProperty("ShowExtra")) {
                _0x458953.ShowExtra = _0x2d0a36.ShowExtra;
              }
              if (_0x2d0a36.Mul && _0x2d0a36.Mul.length) {
                _0x458953.Mul = [];
                for (var _0x4ef227 = 0x0; _0x4ef227 < _0x2d0a36.Mul.length; ++_0x4ef227) {
                  _0x458953.Mul[_0x4ef227] = _0x3a5177.json && !isFinite(_0x2d0a36.Mul[_0x4ef227]) ? String(_0x2d0a36.Mul[_0x4ef227]) : _0x2d0a36.Mul[_0x4ef227];
                }
              }
              return _0x458953;
            };
            _0x5cc378.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x568dc9.util.toJSONOptions);
            };
            return _0x5cc378;
          }()
        }).Column = function () {
          function _0x26f95c(_0x394c62) {
            this.Col = [];
            if (_0x394c62) {
              var _0x1ff552 = Object.keys(_0x394c62);
              for (var _0x268811 = 0x0; _0x268811 < _0x1ff552.length; ++_0x268811) {
                if (null != _0x394c62[_0x1ff552[_0x268811]]) {
                  this[_0x1ff552[_0x268811]] = _0x394c62[_0x1ff552[_0x268811]];
                }
              }
            }
          }
          _0x26f95c.prototype.Col = _0x2f72ce.emptyArray;
          _0x26f95c.create = function (_0xb8566) {
            return new _0x26f95c(_0xb8566);
          };
          _0x26f95c.encode = function (_0x3cb447, _0x51f475) {
            if (!_0x51f475) {
              _0x51f475 = _0x35b2f5.create();
            }
            if (null != _0x3cb447.Col && _0x3cb447.Col.length) {
              _0x51f475.uint32(0xa).fork();
              for (var _0x1b92bf = 0x0; _0x1b92bf < _0x3cb447.Col.length; ++_0x1b92bf) {
                _0x51f475.int32(_0x3cb447.Col[_0x1b92bf]);
              }
              _0x51f475.ldelim();
            }
            return _0x51f475;
          };
          _0x26f95c.encodeDelimited = function (_0x551d55, _0x4b732c) {
            return this.encode(_0x551d55, _0x4b732c).ldelim();
          };
          _0x26f95c.decode = function (_0x16ddea, _0x5b3132) {
            if (!(_0x16ddea instanceof _0x1314a8)) {
              _0x16ddea = _0x1314a8.create(_0x16ddea);
            }
            var _0x153914 = undefined === _0x5b3132 ? _0x16ddea.len : _0x16ddea.pos + _0x5b3132;
            for (var _0x59560a = new _0x32ef0f.fgProto.Column(); _0x16ddea.pos < _0x153914;) {
              var _0x39f7a4 = _0x16ddea.uint32();
              switch (_0x39f7a4 >>> 0x3) {
                case 0x1:
                  if (!(_0x59560a.Col && _0x59560a.Col.length)) {
                    _0x59560a.Col = [];
                  }
                  if (0x2 == (0x7 & _0x39f7a4)) {
                    for (var _0x535347 = _0x16ddea.uint32() + _0x16ddea.pos; _0x16ddea.pos < _0x535347;) {
                      _0x59560a.Col.push(_0x16ddea.int32());
                    }
                  } else {
                    _0x59560a.Col.push(_0x16ddea.int32());
                  }
                  break;
                default:
                  _0x16ddea.skipType(0x7 & _0x39f7a4);
              }
            }
            return _0x59560a;
          };
          _0x26f95c.decodeDelimited = function (_0xbe918e) {
            if (!(_0xbe918e instanceof _0x1314a8)) {
              _0xbe918e = new _0x1314a8(_0xbe918e);
            }
            return this.decode(_0xbe918e, _0xbe918e.uint32());
          };
          _0x26f95c.verify = function (_0x5ca9db) {
            if ("object" != typeof _0x5ca9db || null === _0x5ca9db) {
              return "object expected";
            }
            if (null != _0x5ca9db.Col && _0x5ca9db.hasOwnProperty('Col')) {
              if (!Array.isArray(_0x5ca9db.Col)) {
                return "Col: array expected";
              }
              for (var _0x3bf5dd = 0x0; _0x3bf5dd < _0x5ca9db.Col.length; ++_0x3bf5dd) {
                if (!_0x2f72ce.isInteger(_0x5ca9db.Col[_0x3bf5dd])) {
                  return "Col: integer[] expected";
                }
              }
            }
            return null;
          };
          _0x26f95c.fromObject = function (_0x5735b5) {
            if (_0x5735b5 instanceof _0x32ef0f.fgProto.Column) {
              return _0x5735b5;
            }
            var _0xc8279d = new _0x32ef0f.fgProto.Column();
            if (_0x5735b5.Col) {
              if (!Array.isArray(_0x5735b5.Col)) {
                throw TypeError(".fgProto.Column.Col: array expected");
              }
              _0xc8279d.Col = [];
              for (var _0x35f2a6 = 0x0; _0x35f2a6 < _0x5735b5.Col.length; ++_0x35f2a6) {
                _0xc8279d.Col[_0x35f2a6] = 0x0 | _0x5735b5.Col[_0x35f2a6];
              }
            }
            return _0xc8279d;
          };
          _0x26f95c.toObject = function (_0x3a377e, _0x1cc5ee) {
            if (!_0x1cc5ee) {
              _0x1cc5ee = {};
            }
            var _0xa92772 = {};
            if (_0x1cc5ee.arrays || _0x1cc5ee.defaults) {
              _0xa92772.Col = [];
            }
            if (_0x3a377e.Col && _0x3a377e.Col.length) {
              _0xa92772.Col = [];
              for (var _0x2795de = 0x0; _0x2795de < _0x3a377e.Col.length; ++_0x2795de) {
                _0xa92772.Col[_0x2795de] = _0x3a377e.Col[_0x2795de];
              }
            }
            return _0xa92772;
          };
          _0x26f95c.prototype.toJSON = function () {
            return this.constructor.toObject(this, _0x568dc9.util.toJSONOptions);
          };
          return _0x26f95c;
        }();
        _0x32ef0f.fgProto = _0x40ac5;
        _0x3a9cce.exports = _0x32ef0f;
        _0x5e9a56 = _0x3a9cce.exports;
      }, function () {
        return {
          'protobufjs/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/minimal.js"
        };
      });
      _0x11aabe.require('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/assets/Script/Proto/fgProto.js');
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/long/src/long.js", function (_0x403206, _0x4ce83c, _0x4c5d9f, _0x3ac5a8, _0x2b4619) {
        _0x4c5d9f.exports = _0x26df13;
        var _0x1eabb6 = null;
        try {
          _0x1eabb6 = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0x0, 0x61, 0x73, 0x6d, 0x1, 0x0, 0x0, 0x0, 0x1, 0xd, 0x2, 0x60, 0x0, 0x1, 0x7f, 0x60, 0x4, 0x7f, 0x7f, 0x7f, 0x7f, 0x1, 0x7f, 0x3, 0x7, 0x6, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x6, 0x6, 0x1, 0x7f, 0x1, 0x41, 0x0, 0xb, 0x7, 0x32, 0x6, 0x3, 0x6d, 0x75, 0x6c, 0x0, 0x1, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x73, 0x0, 0x2, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x75, 0x0, 0x3, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x73, 0x0, 0x4, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x75, 0x0, 0x5, 0x8, 0x67, 0x65, 0x74, 0x5f, 0x68, 0x69, 0x67, 0x68, 0x0, 0x0, 0xa, 0xbf, 0x1, 0x6, 0x4, 0x0, 0x23, 0x0, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7e, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7f, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x80, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x81, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x82, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb])), {}).exports;
        } catch (_0x3ce308) {}
        function _0x26df13(_0x4e98eb, _0x5e59c4, _0x58f6e3) {
          this.low = 0x0 | _0x4e98eb;
          this.high = 0x0 | _0x5e59c4;
          this.unsigned = !!_0x58f6e3;
        }
        function _0x5e6b1d(_0x4a7bba) {
          return true === (_0x4a7bba && _0x4a7bba.__isLong__);
        }
        _0x26df13.prototype.__isLong__;
        Object.defineProperty(_0x26df13.prototype, "__isLong__", {
          'value': true
        });
        _0x26df13.isLong = _0x5e6b1d;
        var _0x12d303 = {};
        var _0x13a146 = {};
        function _0x11e640(_0x5b89dc, _0x4f5287) {
          var _0x3f6b22;
          var _0x422275;
          var _0x2ce5a4;
          return _0x4f5287 ? (_0x2ce5a4 = 0x0 <= (_0x5b89dc >>>= 0x0) && _0x5b89dc < 0x100) && (_0x422275 = _0x13a146[_0x5b89dc]) ? _0x422275 : (_0x3f6b22 = new _0x26df13(_0x5b89dc, (0x0 | _0x5b89dc) < 0x0 ? -0x1 : 0x0, true), _0x2ce5a4 && (_0x13a146[_0x5b89dc] = _0x3f6b22), _0x3f6b22) : (_0x2ce5a4 = -0x80 <= (_0x5b89dc |= 0x0) && _0x5b89dc < 0x80) && (_0x422275 = _0x12d303[_0x5b89dc]) ? _0x422275 : (_0x3f6b22 = new _0x26df13(_0x5b89dc, _0x5b89dc < 0x0 ? -0x1 : 0x0, false), _0x2ce5a4 && (_0x12d303[_0x5b89dc] = _0x3f6b22), _0x3f6b22);
        }
        function _0x21510b(_0x114bf4, _0x194a31) {
          if (isNaN(_0x114bf4)) {
            return _0x194a31 ? _0x3ab14a : _0x1b6b16;
          }
          if (_0x194a31) {
            if (_0x114bf4 < 0x0) {
              return _0x3ab14a;
            }
            if (_0x114bf4 >= 18446744073709552000) {
              return _0x5df285;
            }
          } else {
            if (_0x114bf4 <= -9223372036854776000) {
              return _0x58ce62;
            }
            if (_0x114bf4 + 0x1 >= 9223372036854776000) {
              return _0x7b6f21;
            }
          }
          return _0x114bf4 < 0x0 ? _0x21510b(-_0x114bf4, _0x194a31).neg() : new _0x26df13(_0x114bf4 % 0x100000000 | 0x0, _0x114bf4 / 0x100000000 | 0x0, _0x194a31);
        }
        function _0x15468e(_0x2ed8e3, _0x268700, _0x49c2de) {
          return new _0x26df13(_0x2ed8e3, _0x268700, _0x49c2de);
        }
        _0x26df13.fromInt = _0x11e640;
        _0x26df13.fromNumber = _0x21510b;
        _0x26df13.fromBits = _0x15468e;
        var _0x5d02b5 = Math.pow;
        function _0x96142f(_0xb93ffa, _0x239cfc, _0x11d1e7) {
          if (0x0 === _0xb93ffa.length) {
            throw Error("empty string");
          }
          if ("NaN" === _0xb93ffa || "Infinity" === _0xb93ffa || "+Infinity" === _0xb93ffa || "-Infinity" === _0xb93ffa) {
            return _0x1b6b16;
          }
          if ("number" == typeof _0x239cfc) {
            _0x11d1e7 = _0x239cfc;
            _0x239cfc = false;
          } else {
            _0x239cfc = !!_0x239cfc;
          }
          if ((_0x11d1e7 = _0x11d1e7 || 0xa) < 0x2 || 0x24 < _0x11d1e7) {
            throw RangeError("radix");
          }
          var _0x1151c1;
          if ((_0x1151c1 = _0xb93ffa.indexOf('-')) > 0x0) {
            throw Error("interior hyphen");
          }
          if (0x0 === _0x1151c1) {
            return _0x96142f(_0xb93ffa.substring(0x1), _0x239cfc, _0x11d1e7).neg();
          }
          var _0x20a6ab = _0x21510b(_0x5d02b5(_0x11d1e7, 0x8));
          var _0x430058 = _0x1b6b16;
          for (var _0x412483 = 0x0; _0x412483 < _0xb93ffa.length; _0x412483 += 0x8) {
            var _0x54d328 = Math.min(0x8, _0xb93ffa.length - _0x412483);
            var _0x585183 = parseInt(_0xb93ffa.substring(_0x412483, _0x412483 + _0x54d328), _0x11d1e7);
            if (_0x54d328 < 0x8) {
              var _0x34db38 = _0x21510b(_0x5d02b5(_0x11d1e7, _0x54d328));
              _0x430058 = _0x430058.mul(_0x34db38).add(_0x21510b(_0x585183));
            } else {
              _0x430058 = (_0x430058 = _0x430058.mul(_0x20a6ab)).add(_0x21510b(_0x585183));
            }
          }
          _0x430058.unsigned = _0x239cfc;
          return _0x430058;
        }
        function _0x39aa56(_0x4d759f, _0x5b8898) {
          return "number" == typeof _0x4d759f ? _0x21510b(_0x4d759f, _0x5b8898) : "string" == typeof _0x4d759f ? _0x96142f(_0x4d759f, _0x5b8898) : new _0x26df13(_0x4d759f.low, _0x4d759f.high, "boolean" == typeof _0x5b8898 ? _0x5b8898 : _0x4d759f.unsigned);
        }
        _0x26df13.fromString = _0x96142f;
        _0x26df13.fromValue = _0x39aa56;
        var _0xdd22f1 = _0x11e640(16777216);
        var _0x1b6b16 = _0x11e640(0x0);
        _0x26df13.ZERO = _0x1b6b16;
        var _0x3ab14a = _0x11e640(0x0, true);
        _0x26df13.UZERO = _0x3ab14a;
        var _0x53c3b7 = _0x11e640(0x1);
        _0x26df13.ONE = _0x53c3b7;
        var _0x2f249d = _0x11e640(0x1, true);
        _0x26df13.UONE = _0x2f249d;
        var _0x3b7829 = _0x11e640(-0x1);
        _0x26df13.NEG_ONE = _0x3b7829;
        var _0x7b6f21 = new _0x26df13(-0x1, 0x7fffffff, false);
        _0x26df13.MAX_VALUE = _0x7b6f21;
        var _0x5df285 = new _0x26df13(-0x1, -0x1, true);
        _0x26df13.MAX_UNSIGNED_VALUE = _0x5df285;
        var _0x58ce62 = new _0x26df13(0x0, -0x80000000, false);
        _0x26df13.MIN_VALUE = _0x58ce62;
        var _0x4551e9 = _0x26df13.prototype;
        _0x4551e9.toInt = function () {
          return this.unsigned ? this.low >>> 0x0 : this.low;
        };
        _0x4551e9.toNumber = function () {
          return this.unsigned ? (this.high >>> 0x0) * 0x100000000 + (this.low >>> 0x0) : this.high * 0x100000000 + (this.low >>> 0x0);
        };
        _0x4551e9.toString = function (_0xd5c25c) {
          if ((_0xd5c25c = _0xd5c25c || 0xa) < 0x2 || 0x24 < _0xd5c25c) {
            throw RangeError("radix");
          }
          if (this.isZero()) {
            return '0';
          }
          if (this.isNegative()) {
            if (this.eq(_0x58ce62)) {
              var _0x46cf09 = _0x21510b(_0xd5c25c);
              var _0x2595e2 = this.div(_0x46cf09);
              var _0x3831cd = _0x2595e2.mul(_0x46cf09).sub(this);
              return _0x2595e2.toString(_0xd5c25c) + _0x3831cd.toInt().toString(_0xd5c25c);
            }
            return '-' + this.neg().toString(_0xd5c25c);
          }
          var _0x324c6a = _0x21510b(_0x5d02b5(_0xd5c25c, 0x6), this.unsigned);
          var _0x1b2fcf = this;
          for (var _0x5114ab = '';;) {
            var _0x5898e7 = _0x1b2fcf.div(_0x324c6a);
            var _0x3309f5 = (_0x1b2fcf.sub(_0x5898e7.mul(_0x324c6a)).toInt() >>> 0x0).toString(_0xd5c25c);
            if ((_0x1b2fcf = _0x5898e7).isZero()) {
              return _0x3309f5 + _0x5114ab;
            }
            for (; _0x3309f5.length < 0x6;) {
              _0x3309f5 = '0' + _0x3309f5;
            }
            _0x5114ab = '' + _0x3309f5 + _0x5114ab;
          }
        };
        _0x4551e9.getHighBits = function () {
          return this.high;
        };
        _0x4551e9.getHighBitsUnsigned = function () {
          return this.high >>> 0x0;
        };
        _0x4551e9.getLowBits = function () {
          return this.low;
        };
        _0x4551e9.getLowBitsUnsigned = function () {
          return this.low >>> 0x0;
        };
        _0x4551e9.getNumBitsAbs = function () {
          if (this.isNegative()) {
            return this.eq(_0x58ce62) ? 0x40 : this.neg().getNumBitsAbs();
          }
          var _0x2356b9 = 0x0 != this.high ? this.high : this.low;
          for (var _0x482ae8 = 0x1f; _0x482ae8 > 0x0 && 0x0 == (_0x2356b9 & 0x1 << _0x482ae8); _0x482ae8--) {
            ;
          }
          return 0x0 != this.high ? _0x482ae8 + 0x21 : _0x482ae8 + 0x1;
        };
        _0x4551e9.isZero = function () {
          return 0x0 === this.high && 0x0 === this.low;
        };
        _0x4551e9.eqz = _0x4551e9.isZero;
        _0x4551e9.isNegative = function () {
          return !this.unsigned && this.high < 0x0;
        };
        _0x4551e9.isPositive = function () {
          return this.unsigned || this.high >= 0x0;
        };
        _0x4551e9.isOdd = function () {
          return 0x1 == (0x1 & this.low);
        };
        _0x4551e9.isEven = function () {
          return 0x0 == (0x1 & this.low);
        };
        _0x4551e9.equals = function (_0x59cc6f) {
          if (!(true === (_0x59cc6f && _0x59cc6f.__isLong__))) {
            _0x59cc6f = "number" == typeof _0x59cc6f ? _0x21510b(_0x59cc6f, undefined) : "string" == typeof _0x59cc6f ? _0x96142f(_0x59cc6f, undefined) : new _0x26df13(_0x59cc6f.low, _0x59cc6f.high, _0x59cc6f.unsigned);
          }
          return (this.unsigned === _0x59cc6f.unsigned || this.high >>> 0x1f != 0x1 || _0x59cc6f.high >>> 0x1f != 0x1) && this.high === _0x59cc6f.high && this.low === _0x59cc6f.low;
        };
        _0x4551e9.eq = _0x4551e9.equals;
        _0x4551e9.notEquals = function (_0x594ca8) {
          return !this.eq(_0x594ca8);
        };
        _0x4551e9.neq = _0x4551e9.notEquals;
        _0x4551e9.ne = _0x4551e9.notEquals;
        _0x4551e9.lessThan = function (_0x37c0ff) {
          return this.comp(_0x37c0ff) < 0x0;
        };
        _0x4551e9.lt = _0x4551e9.lessThan;
        _0x4551e9.lessThanOrEqual = function (_0x348c8b) {
          return this.comp(_0x348c8b) <= 0x0;
        };
        _0x4551e9.lte = _0x4551e9.lessThanOrEqual;
        _0x4551e9.le = _0x4551e9.lessThanOrEqual;
        _0x4551e9.greaterThan = function (_0x1f3ed9) {
          return this.comp(_0x1f3ed9) > 0x0;
        };
        _0x4551e9.gt = _0x4551e9.greaterThan;
        _0x4551e9.greaterThanOrEqual = function (_0xe67f90) {
          return this.comp(_0xe67f90) >= 0x0;
        };
        _0x4551e9.gte = _0x4551e9.greaterThanOrEqual;
        _0x4551e9.ge = _0x4551e9.greaterThanOrEqual;
        _0x4551e9.compare = function (_0xd48b42) {
          if (!(true === (_0xd48b42 && _0xd48b42.__isLong__))) {
            _0xd48b42 = "number" == typeof _0xd48b42 ? _0x21510b(_0xd48b42, undefined) : "string" == typeof _0xd48b42 ? _0x96142f(_0xd48b42, undefined) : new _0x26df13(_0xd48b42.low, _0xd48b42.high, _0xd48b42.unsigned);
          }
          if (this.eq(_0xd48b42)) {
            return 0x0;
          }
          var _0x30b952 = this.isNegative();
          var _0x529703 = _0xd48b42.isNegative();
          return _0x30b952 && !_0x529703 ? -0x1 : !_0x30b952 && _0x529703 ? 0x1 : this.unsigned ? _0xd48b42.high >>> 0x0 > this.high >>> 0x0 || _0xd48b42.high === this.high && _0xd48b42.low >>> 0x0 > this.low >>> 0x0 ? -0x1 : 0x1 : this.sub(_0xd48b42).isNegative() ? -0x1 : 0x1;
        };
        _0x4551e9.comp = _0x4551e9.compare;
        _0x4551e9.negate = function () {
          return !this.unsigned && this.eq(_0x58ce62) ? _0x58ce62 : this.not().add(_0x53c3b7);
        };
        _0x4551e9.neg = _0x4551e9.negate;
        _0x4551e9.add = function (_0x2bbfd1) {
          if (!(true === (_0x2bbfd1 && _0x2bbfd1.__isLong__))) {
            _0x2bbfd1 = "number" == typeof _0x2bbfd1 ? _0x21510b(_0x2bbfd1, undefined) : "string" == typeof _0x2bbfd1 ? _0x96142f(_0x2bbfd1, undefined) : new _0x26df13(_0x2bbfd1.low, _0x2bbfd1.high, _0x2bbfd1.unsigned);
          }
          var _0x4c5541 = this.high >>> 0x10;
          var _0x2568bc = 0xffff & this.high;
          var _0x4c3eca = this.low >>> 0x10;
          var _0xd20a95 = 0xffff & this.low;
          var _0x577ddb = _0x2bbfd1.high >>> 0x10;
          var _0x2a74b6 = 0xffff & _0x2bbfd1.high;
          var _0x44b441 = _0x2bbfd1.low >>> 0x10;
          var _0x37f983 = 0x0;
          var _0x2454ca = 0x0;
          var _0x12c135 = 0x0;
          var _0x58d80a = 0x0;
          _0x12c135 += (_0x58d80a += _0xd20a95 + (0xffff & _0x2bbfd1.low)) >>> 0x10;
          _0x2454ca += (_0x12c135 += _0x4c3eca + _0x44b441) >>> 0x10;
          _0x37f983 += (_0x2454ca += _0x2568bc + _0x2a74b6) >>> 0x10;
          _0x37f983 += _0x4c5541 + _0x577ddb;
          return new _0x26df13((_0x12c135 &= 0xffff) << 0x10 | (_0x58d80a &= 0xffff), (_0x37f983 &= 0xffff) << 0x10 | (_0x2454ca &= 0xffff), this.unsigned);
        };
        _0x4551e9.subtract = function (_0x2855e0) {
          if (!(true === (_0x2855e0 && _0x2855e0.__isLong__))) {
            _0x2855e0 = "number" == typeof _0x2855e0 ? _0x21510b(_0x2855e0, undefined) : "string" == typeof _0x2855e0 ? _0x96142f(_0x2855e0, undefined) : new _0x26df13(_0x2855e0.low, _0x2855e0.high, _0x2855e0.unsigned);
          }
          return this.add(_0x2855e0.neg());
        };
        _0x4551e9.sub = _0x4551e9.subtract;
        _0x4551e9.multiply = function (_0x50bf83) {
          if (this.isZero()) {
            return _0x1b6b16;
          }
          if (!(true === (_0x50bf83 && _0x50bf83.__isLong__))) {
            _0x50bf83 = "number" == typeof _0x50bf83 ? _0x21510b(_0x50bf83, undefined) : "string" == typeof _0x50bf83 ? _0x96142f(_0x50bf83, undefined) : new _0x26df13(_0x50bf83.low, _0x50bf83.high, _0x50bf83.unsigned);
          }
          if (_0x1eabb6) {
            return new _0x26df13(_0x1eabb6.mul(this.low, this.high, _0x50bf83.low, _0x50bf83.high), _0x1eabb6.get_high(), this.unsigned);
          }
          if (_0x50bf83.isZero()) {
            return _0x1b6b16;
          }
          if (this.eq(_0x58ce62)) {
            return _0x50bf83.isOdd() ? _0x58ce62 : _0x1b6b16;
          }
          if (_0x50bf83.eq(_0x58ce62)) {
            return this.isOdd() ? _0x58ce62 : _0x1b6b16;
          }
          if (this.isNegative()) {
            return _0x50bf83.isNegative() ? this.neg().mul(_0x50bf83.neg()) : this.neg().mul(_0x50bf83).neg();
          }
          if (_0x50bf83.isNegative()) {
            return this.mul(_0x50bf83.neg()).neg();
          }
          if (this.lt(_0xdd22f1) && _0x50bf83.lt(_0xdd22f1)) {
            return _0x21510b(this.toNumber() * _0x50bf83.toNumber(), this.unsigned);
          }
          var _0x17a314 = this.high >>> 0x10;
          var _0x3e72fc = 0xffff & this.high;
          var _0x4aeb75 = this.low >>> 0x10;
          var _0x5c3ebb = 0xffff & this.low;
          var _0x339b03 = _0x50bf83.high >>> 0x10;
          var _0x27ed25 = 0xffff & _0x50bf83.high;
          var _0x2138ab = _0x50bf83.low >>> 0x10;
          var _0x2d1812 = 0xffff & _0x50bf83.low;
          var _0x5c324b = 0x0;
          var _0xab0fad = 0x0;
          var _0x5cff74 = 0x0;
          var _0x2f1f8e = 0x0;
          _0x5cff74 += (_0x2f1f8e += _0x5c3ebb * _0x2d1812) >>> 0x10;
          _0xab0fad += (_0x5cff74 += _0x4aeb75 * _0x2d1812) >>> 0x10;
          _0x5cff74 &= 0xffff;
          _0xab0fad += (_0x5cff74 += _0x5c3ebb * _0x2138ab) >>> 0x10;
          _0x5c324b += (_0xab0fad += _0x3e72fc * _0x2d1812) >>> 0x10;
          _0xab0fad &= 0xffff;
          _0x5c324b += (_0xab0fad += _0x4aeb75 * _0x2138ab) >>> 0x10;
          _0xab0fad &= 0xffff;
          _0x5c324b += (_0xab0fad += _0x5c3ebb * _0x27ed25) >>> 0x10;
          _0x5c324b += _0x17a314 * _0x2d1812 + _0x3e72fc * _0x2138ab + _0x4aeb75 * _0x27ed25 + _0x5c3ebb * _0x339b03;
          return new _0x26df13((_0x5cff74 &= 0xffff) << 0x10 | (_0x2f1f8e &= 0xffff), (_0x5c324b &= 0xffff) << 0x10 | (_0xab0fad &= 0xffff), this.unsigned);
        };
        _0x4551e9.mul = _0x4551e9.multiply;
        _0x4551e9.divide = function (_0x1c399d) {
          if (!(true === (_0x1c399d && _0x1c399d.__isLong__))) {
            _0x1c399d = "number" == typeof _0x1c399d ? _0x21510b(_0x1c399d, undefined) : "string" == typeof _0x1c399d ? _0x96142f(_0x1c399d, undefined) : new _0x26df13(_0x1c399d.low, _0x1c399d.high, _0x1c399d.unsigned);
          }
          if (_0x1c399d.isZero()) {
            throw Error("division by zero");
          }
          var _0x2e8081;
          var _0x2afefc;
          var _0x590a1e;
          if (_0x1eabb6) {
            return this.unsigned || -0x80000000 !== this.high || -0x1 !== _0x1c399d.low || -0x1 !== _0x1c399d.high ? new _0x26df13((this.unsigned ? _0x1eabb6.div_u : _0x1eabb6.div_s)(this.low, this.high, _0x1c399d.low, _0x1c399d.high), _0x1eabb6.get_high(), this.unsigned) : this;
          }
          if (this.isZero()) {
            return this.unsigned ? _0x3ab14a : _0x1b6b16;
          }
          if (this.unsigned) {
            if (!_0x1c399d.unsigned) {
              _0x1c399d = _0x1c399d.toUnsigned();
            }
            if (_0x1c399d.gt(this)) {
              return _0x3ab14a;
            }
            if (_0x1c399d.gt(this.shru(0x1))) {
              return _0x2f249d;
            }
            _0x590a1e = _0x3ab14a;
          } else {
            if (this.eq(_0x58ce62)) {
              return _0x1c399d.eq(_0x53c3b7) || _0x1c399d.eq(_0x3b7829) ? _0x58ce62 : _0x1c399d.eq(_0x58ce62) ? _0x53c3b7 : (_0x2e8081 = this.shr(0x1).div(_0x1c399d).shl(0x1)).eq(_0x1b6b16) ? _0x1c399d.isNegative() ? _0x53c3b7 : _0x3b7829 : (_0x2afefc = this.sub(_0x1c399d.mul(_0x2e8081)), _0x590a1e = _0x2e8081.add(_0x2afefc.div(_0x1c399d)));
            }
            if (_0x1c399d.eq(_0x58ce62)) {
              return this.unsigned ? _0x3ab14a : _0x1b6b16;
            }
            if (this.isNegative()) {
              return _0x1c399d.isNegative() ? this.neg().div(_0x1c399d.neg()) : this.neg().div(_0x1c399d).neg();
            }
            if (_0x1c399d.isNegative()) {
              return this.div(_0x1c399d.neg()).neg();
            }
            _0x590a1e = _0x1b6b16;
          }
          for (_0x2afefc = this; _0x2afefc.gte(_0x1c399d);) {
            _0x2e8081 = Math.max(0x1, Math.floor(_0x2afefc.toNumber() / _0x1c399d.toNumber()));
            var _0x14605a = Math.ceil(Math.log(_0x2e8081) / Math.LN2);
            var _0x461c18 = _0x14605a <= 0x30 ? 0x1 : _0x5d02b5(0x2, _0x14605a - 0x30);
            var _0x568adc = _0x21510b(_0x2e8081);
            for (var _0x4aa703 = _0x568adc.mul(_0x1c399d); _0x4aa703.isNegative() || _0x4aa703.gt(_0x2afefc);) {
              _0x4aa703 = (_0x568adc = _0x21510b(_0x2e8081 -= _0x461c18, this.unsigned)).mul(_0x1c399d);
            }
            if (_0x568adc.isZero()) {
              _0x568adc = _0x53c3b7;
            }
            _0x590a1e = _0x590a1e.add(_0x568adc);
            _0x2afefc = _0x2afefc.sub(_0x4aa703);
          }
          return _0x590a1e;
        };
        _0x4551e9.div = _0x4551e9.divide;
        _0x4551e9.modulo = function (_0x3d8ec0) {
          if (!(true === (_0x3d8ec0 && _0x3d8ec0.__isLong__))) {
            _0x3d8ec0 = "number" == typeof _0x3d8ec0 ? _0x21510b(_0x3d8ec0, undefined) : "string" == typeof _0x3d8ec0 ? _0x96142f(_0x3d8ec0, undefined) : new _0x26df13(_0x3d8ec0.low, _0x3d8ec0.high, _0x3d8ec0.unsigned);
          }
          return _0x1eabb6 ? new _0x26df13((this.unsigned ? _0x1eabb6.rem_u : _0x1eabb6.rem_s)(this.low, this.high, _0x3d8ec0.low, _0x3d8ec0.high), _0x1eabb6.get_high(), this.unsigned) : this.sub(this.div(_0x3d8ec0).mul(_0x3d8ec0));
        };
        _0x4551e9.mod = _0x4551e9.modulo;
        _0x4551e9.rem = _0x4551e9.modulo;
        _0x4551e9.not = function () {
          return new _0x26df13(~this.low, ~this.high, this.unsigned);
        };
        _0x4551e9.and = function (_0x54000a) {
          if (!(true === (_0x54000a && _0x54000a.__isLong__))) {
            _0x54000a = "number" == typeof _0x54000a ? _0x21510b(_0x54000a, undefined) : "string" == typeof _0x54000a ? _0x96142f(_0x54000a, undefined) : new _0x26df13(_0x54000a.low, _0x54000a.high, _0x54000a.unsigned);
          }
          return new _0x26df13(this.low & _0x54000a.low, this.high & _0x54000a.high, this.unsigned);
        };
        _0x4551e9.or = function (_0x2e47dd) {
          if (!(true === (_0x2e47dd && _0x2e47dd.__isLong__))) {
            _0x2e47dd = "number" == typeof _0x2e47dd ? _0x21510b(_0x2e47dd, undefined) : "string" == typeof _0x2e47dd ? _0x96142f(_0x2e47dd, undefined) : new _0x26df13(_0x2e47dd.low, _0x2e47dd.high, _0x2e47dd.unsigned);
          }
          return new _0x26df13(this.low | _0x2e47dd.low, this.high | _0x2e47dd.high, this.unsigned);
        };
        _0x4551e9.xor = function (_0x4654a3) {
          if (!(true === (_0x4654a3 && _0x4654a3.__isLong__))) {
            _0x4654a3 = "number" == typeof _0x4654a3 ? _0x21510b(_0x4654a3, undefined) : "string" == typeof _0x4654a3 ? _0x96142f(_0x4654a3, undefined) : new _0x26df13(_0x4654a3.low, _0x4654a3.high, _0x4654a3.unsigned);
          }
          return new _0x26df13(this.low ^ _0x4654a3.low, this.high ^ _0x4654a3.high, this.unsigned);
        };
        _0x4551e9.shiftLeft = function (_0x187d2e) {
          if (true === (_0x187d2e && _0x187d2e.__isLong__)) {
            _0x187d2e = _0x187d2e.toInt();
          }
          return 0x0 == (_0x187d2e &= 0x3f) ? this : _0x187d2e < 0x20 ? new _0x26df13(this.low << _0x187d2e, this.high << _0x187d2e | this.low >>> 0x20 - _0x187d2e, this.unsigned) : new _0x26df13(0x0, this.low << _0x187d2e - 0x20, this.unsigned);
        };
        _0x4551e9.shl = _0x4551e9.shiftLeft;
        _0x4551e9.shiftRight = function (_0x1d2c63) {
          if (true === (_0x1d2c63 && _0x1d2c63.__isLong__)) {
            _0x1d2c63 = _0x1d2c63.toInt();
          }
          return 0x0 == (_0x1d2c63 &= 0x3f) ? this : _0x1d2c63 < 0x20 ? new _0x26df13(this.low >>> _0x1d2c63 | this.high << 0x20 - _0x1d2c63, this.high >> _0x1d2c63, this.unsigned) : new _0x26df13(this.high >> _0x1d2c63 - 0x20, this.high >= 0x0 ? 0x0 : -0x1, this.unsigned);
        };
        _0x4551e9.shr = _0x4551e9.shiftRight;
        _0x4551e9.shiftRightUnsigned = function (_0x423b12) {
          if (true === (_0x423b12 && _0x423b12.__isLong__)) {
            _0x423b12 = _0x423b12.toInt();
          }
          if (0x0 === (_0x423b12 &= 0x3f)) {
            return this;
          }
          var _0xcbd40e = this.high;
          return _0x423b12 < 0x20 ? new _0x26df13(this.low >>> _0x423b12 | _0xcbd40e << 0x20 - _0x423b12, _0xcbd40e >>> _0x423b12, this.unsigned) : new _0x26df13(0x20 === _0x423b12 ? _0xcbd40e : _0xcbd40e >>> _0x423b12 - 0x20, 0x0, this.unsigned);
        };
        _0x4551e9.shru = _0x4551e9.shiftRightUnsigned;
        _0x4551e9.shr_u = _0x4551e9.shiftRightUnsigned;
        _0x4551e9.toSigned = function () {
          return this.unsigned ? new _0x26df13(this.low, this.high, false) : this;
        };
        _0x4551e9.toUnsigned = function () {
          return this.unsigned ? this : new _0x26df13(this.low, this.high, true);
        };
        _0x4551e9.toBytes = function (_0x7f6fbe) {
          return _0x7f6fbe ? this.toBytesLE() : this.toBytesBE();
        };
        _0x4551e9.toBytesLE = function () {
          var _0x2aa3c8 = this.high;
          var _0xc25c22 = this.low;
          return [0xff & _0xc25c22, _0xc25c22 >>> 0x8 & 0xff, _0xc25c22 >>> 0x10 & 0xff, _0xc25c22 >>> 0x18, 0xff & _0x2aa3c8, _0x2aa3c8 >>> 0x8 & 0xff, _0x2aa3c8 >>> 0x10 & 0xff, _0x2aa3c8 >>> 0x18];
        };
        _0x4551e9.toBytesBE = function () {
          var _0x1fb197 = this.high;
          var _0x7ee763 = this.low;
          return [_0x1fb197 >>> 0x18, _0x1fb197 >>> 0x10 & 0xff, _0x1fb197 >>> 0x8 & 0xff, 0xff & _0x1fb197, _0x7ee763 >>> 0x18, _0x7ee763 >>> 0x10 & 0xff, _0x7ee763 >>> 0x8 & 0xff, 0xff & _0x7ee763];
        };
        _0x26df13.fromBytes = function (_0x114ea4, _0x17dd65, _0x1c0dbc) {
          return _0x1c0dbc ? _0x26df13.fromBytesLE(_0x114ea4, _0x17dd65) : _0x26df13.fromBytesBE(_0x114ea4, _0x17dd65);
        };
        _0x26df13.fromBytesLE = function (_0xb6e9ce, _0x4c3e4d) {
          return new _0x26df13(_0xb6e9ce[0x0] | _0xb6e9ce[0x1] << 0x8 | _0xb6e9ce[0x2] << 0x10 | _0xb6e9ce[0x3] << 0x18, _0xb6e9ce[0x4] | _0xb6e9ce[0x5] << 0x8 | _0xb6e9ce[0x6] << 0x10 | _0xb6e9ce[0x7] << 0x18, _0x4c3e4d);
        };
        _0x26df13.fromBytesBE = function (_0x4204eb, _0x228da7) {
          return new _0x26df13(_0x4204eb[0x4] << 0x18 | _0x4204eb[0x5] << 0x10 | _0x4204eb[0x6] << 0x8 | _0x4204eb[0x7], _0x4204eb[0x0] << 0x18 | _0x4204eb[0x1] << 0x10 | _0x4204eb[0x2] << 0x8 | _0x4204eb[0x3], _0x228da7);
        };
        _0x5cc917 = _0x4c5d9f.exports;
      }, {});
      _0x11aabe.require("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/long/src/long.js");
      _0x11aabe.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js', function (_0x48ab19, _0x38e647, _0x407fba, _0x56dd5a, _0x57861a) {
        function _0x1df0f2(_0x187100, _0x22a87f) {
          if ('string' == typeof _0x187100) {
            _0x22a87f = _0x187100;
            _0x187100 = undefined;
          }
          var _0x316476 = [];
          function _0x5b6fb4(_0x21de6e) {
            if ('string' != typeof _0x21de6e) {
              var _0x58cacc = "function " + (undefined || _0x22a87f || '') + '(' + (_0x187100 && _0x187100.join(',') || '') + "){\n  " + _0x316476.join("\n  ") + "\n}";
              if (_0x1df0f2.verbose) {
                console.log("codegen: " + _0x58cacc);
              }
              _0x58cacc = "return " + _0x58cacc;
              if (_0x21de6e) {
                var _0x5f5d47 = Object.keys(_0x21de6e);
                var _0x111f68 = new Array(_0x5f5d47.length + 0x1);
                var _0x5e54d3 = new Array(_0x5f5d47.length);
                for (var _0x4f431c = 0x0; _0x4f431c < _0x5f5d47.length;) {
                  _0x111f68[_0x4f431c] = _0x5f5d47[_0x4f431c];
                  _0x5e54d3[_0x4f431c] = _0x21de6e[_0x5f5d47[_0x4f431c++]];
                }
                _0x111f68[_0x4f431c] = _0x58cacc;
                return Function.apply(null, _0x111f68).apply(null, _0x5e54d3);
              }
              return Function(_0x58cacc)();
            }
            var _0x42499d = new Array(arguments.length - 0x1);
            for (var _0xd4a6d9 = 0x0; _0xd4a6d9 < _0x42499d.length;) {
              _0x42499d[_0xd4a6d9] = arguments[++_0xd4a6d9];
            }
            _0xd4a6d9 = 0x0;
            _0x21de6e = _0x21de6e.replace(/%([%dfijs])/g, function (_0x4192a5, _0x377bac) {
              var _0x2e638f = _0x42499d[_0xd4a6d9++];
              switch (_0x377bac) {
                case 'd':
                case 'f':
                  return String(Number(_0x2e638f));
                case 'i':
                  return String(Math.floor(_0x2e638f));
                case 'j':
                  return JSON.stringify(_0x2e638f);
                case 's':
                  return String(_0x2e638f);
              }
              return '%';
            });
            if (_0xd4a6d9 !== _0x42499d.length) {
              throw Error("parameter count mismatch");
            }
            _0x316476.push(_0x21de6e);
            return _0x5b6fb4;
          }
          function _0x461601(_0x5165a6) {
            return "function " + (_0x5165a6 || _0x22a87f || '') + '(' + (_0x187100 && _0x187100.join(',') || '') + "){\n  " + _0x316476.join("\n  ") + "\n}";
          }
          _0x5b6fb4.toString = _0x461601;
          return _0x5b6fb4;
        }
        _0x407fba.exports = _0x1df0f2;
        _0x1df0f2.verbose = false;
        _0x407fba.exports;
      }, {});
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js", function (_0x475723, _0x2fa077, _0x24afc2, _0x4c1378, _0x3912ab) {
        _0x24afc2.exports = _0x4b9895;
        var _0x102f34 = _0x2fa077('@protobufjs/aspromise');
        var _0x284cbf = _0x2fa077("@protobufjs/inquire")('fs');
        function _0x4b9895(_0x34d705, _0x3241cc, _0x4d8cb3) {
          if ("function" == typeof _0x3241cc) {
            _0x4d8cb3 = _0x3241cc;
            _0x3241cc = {};
          } else if (!_0x3241cc) {
            _0x3241cc = {};
          }
          return _0x4d8cb3 ? !_0x3241cc.xhr && _0x284cbf && _0x284cbf.readFile ? _0x284cbf.readFile(_0x34d705, function (_0x1e9bf7, _0xfad067) {
            return _0x1e9bf7 && "undefined" != typeof XMLHttpRequest ? _0x4b9895.xhr(_0x34d705, _0x3241cc, _0x4d8cb3) : _0x1e9bf7 ? _0x4d8cb3(_0x1e9bf7) : _0x4d8cb3(null, _0x3241cc.binary ? _0xfad067 : _0xfad067.toString("utf8"));
          }) : _0x4b9895.xhr(_0x34d705, _0x3241cc, _0x4d8cb3) : _0x102f34(_0x4b9895, this, _0x34d705, _0x3241cc);
        }
        _0x4b9895.xhr = function (_0x174be6, _0x2a5541, _0x24dee5) {
          var _0x2956a7 = new XMLHttpRequest();
          _0x2956a7.onreadystatechange = function () {
            if (0x4 === _0x2956a7.readyState) {
              if (0x0 !== _0x2956a7.status && 0xc8 !== _0x2956a7.status) {
                return _0x24dee5(Error("status " + _0x2956a7.status));
              }
              if (_0x2a5541.binary) {
                var _0x48e6f1 = _0x2956a7.response;
                if (!_0x48e6f1) {
                  _0x48e6f1 = [];
                  for (var _0x47201c = 0x0; _0x47201c < _0x2956a7.responseText.length; ++_0x47201c) {
                    _0x48e6f1.push(0xff & _0x2956a7.responseText.charCodeAt(_0x47201c));
                  }
                }
                return _0x24dee5(null, "undefined" != typeof Uint8Array ? new Uint8Array(_0x48e6f1) : _0x48e6f1);
              }
              return _0x24dee5(null, _0x2956a7.responseText);
            }
          };
          if (_0x2a5541.binary) {
            if ("overrideMimeType" in _0x2956a7) {
              _0x2956a7.overrideMimeType("text/plain; charset=x-user-defined");
            }
            _0x2956a7.responseType = "arraybuffer";
          }
          _0x2956a7.open("GET", _0x174be6);
          _0x2956a7.send();
        };
        _0x24afc2.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          '@protobufjs/inquire': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js"
        };
      });
      _0x11aabe.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/@protobufjs/path/index.js', function (_0x4e3130, _0x339f68, _0x20186b, _0x443ba9, _0x545337) {
        var _0x2aa0ad = _0x4e3130.isAbsolute = function (_0x4516b4) {
          return /^(?:\/|\w+:)/.test(_0x4516b4);
        };
        var _0x5136ac = _0x4e3130.normalize = function (_0x44c59d) {
          var _0x42b98c = (_0x44c59d = _0x44c59d.replace(/\\/g, '/').replace(/\/{2,}/g, '/')).split('/');
          var _0xcf1e6d = _0x2aa0ad(_0x44c59d);
          var _0xd5ab8b = '';
          if (_0xcf1e6d) {
            _0xd5ab8b = _0x42b98c.shift() + '/';
          }
          for (var _0x28d662 = 0x0; _0x28d662 < _0x42b98c.length;) {
            if ('..' === _0x42b98c[_0x28d662]) {
              if (_0x28d662 > 0x0 && '..' !== _0x42b98c[_0x28d662 - 0x1]) {
                _0x42b98c.splice(--_0x28d662, 0x2);
              } else if (_0xcf1e6d) {
                _0x42b98c.splice(_0x28d662, 0x1);
              } else {
                ++_0x28d662;
              }
            } else if ('.' === _0x42b98c[_0x28d662]) {
              _0x42b98c.splice(_0x28d662, 0x1);
            } else {
              ++_0x28d662;
            }
          }
          return _0xd5ab8b + _0x42b98c.join('/');
        };
        _0x4e3130.resolve = function (_0x3998b2, _0x12a6be, _0x3dd495) {
          if (!_0x3dd495) {
            _0x12a6be = _0x5136ac(_0x12a6be);
          }
          return _0x2aa0ad(_0x12a6be) ? _0x12a6be : (_0x3dd495 || (_0x3998b2 = _0x5136ac(_0x3998b2)), (_0x3998b2 = _0x3998b2.replace(/(?:\/|^)[^/]+$/, '')).length ? _0x5136ac(_0x3998b2 + '/' + _0x12a6be) : _0x12a6be);
        };
        _0x20186b.exports;
      }, {});
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/types.js", function (_0xc05c56, _0x172d66, _0x4e1830, _0x3d4380, _0x286f83) {
        var _0x5ca0c6 = _0x172d66("./util");
        var _0x57480f = ["double", 'float', "int32", "uint32", 'sint32', "fixed32", 'sfixed32', "int64", "uint64", "sint64", 'fixed64', "sfixed64", "bool", 'string', "bytes"];
        function _0x3f507b(_0x39ccb2, _0x27d06b) {
          var _0x1e1632 = 0x0;
          var _0x157949 = {};
          for (_0x27d06b |= 0x0; _0x1e1632 < _0x39ccb2.length;) {
            _0x157949[_0x57480f[_0x1e1632 + _0x27d06b]] = _0x39ccb2[_0x1e1632++];
          }
          return _0x157949;
        }
        _0xc05c56.basic = _0x3f507b([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2, 0x2]);
        _0xc05c56.defaults = _0x3f507b([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, false, '', _0x5ca0c6.emptyArray, null]);
        _0xc05c56.long = _0x3f507b([0x0, 0x0, 0x0, 0x1, 0x1], 0x7);
        _0xc05c56.mapKey = _0x3f507b([0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2], 0x2);
        _0xc05c56.packed = _0x3f507b([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0]);
        _0x4e1830.exports;
      }, function () {
        return {
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/field.js", function (_0x2d476e, _0x4eece9, _0xeffd63, _0x5bc6ba, _0xf4afe3) {
        _0xeffd63.exports = _0x1e7106;
        var _0x1efce7 = _0x4eece9('./object');
        ((_0x1e7106.prototype = Object.create(_0x1efce7.prototype)).constructor = _0x1e7106).className = "Field";
        var _0x4371a4;
        var _0x33b9cc = _0x4eece9("./enum");
        var _0x5d832f = _0x4eece9("./types");
        var _0x2ff12e = _0x4eece9('./util');
        var _0x1e6938 = /^required|optional|repeated$/;
        function _0x1e7106(_0x5302f8, _0x341215, _0x4d2ff7, _0x5e4caa, _0x10e939, _0x2864a6, _0x5a01dc) {
          if (_0x2ff12e.isObject(_0x5e4caa)) {
            _0x5a01dc = _0x10e939;
            _0x2864a6 = _0x5e4caa;
            _0x5e4caa = _0x10e939 = undefined;
          } else if (_0x2ff12e.isObject(_0x10e939)) {
            _0x5a01dc = _0x2864a6;
            _0x2864a6 = _0x10e939;
            _0x10e939 = undefined;
          }
          _0x1efce7.call(this, _0x5302f8, _0x2864a6);
          if (!_0x2ff12e.isInteger(_0x341215) || _0x341215 < 0x0) {
            throw TypeError("id must be a non-negative integer");
          }
          if (!_0x2ff12e.isString(_0x4d2ff7)) {
            throw TypeError("type must be a string");
          }
          if (undefined !== _0x5e4caa && !_0x1e6938.test(_0x5e4caa = _0x5e4caa.toString().toLowerCase())) {
            throw TypeError("rule must be a string rule");
          }
          if (undefined !== _0x10e939 && !_0x2ff12e.isString(_0x10e939)) {
            throw TypeError("extend must be a string");
          }
          if ("proto3_optional" === _0x5e4caa) {
            _0x5e4caa = "optional";
          }
          this.rule = _0x5e4caa && "optional" !== _0x5e4caa ? _0x5e4caa : undefined;
          this.type = _0x4d2ff7;
          this.id = _0x341215;
          this.extend = _0x10e939 || undefined;
          this.required = "required" === _0x5e4caa;
          this.optional = !this.required;
          this.repeated = "repeated" === _0x5e4caa;
          this.map = false;
          this.message = null;
          this.partOf = null;
          this.typeDefault = null;
          this.defaultValue = null;
          this.long = !!_0x2ff12e.Long && undefined !== _0x5d832f.long[_0x4d2ff7];
          this.bytes = "bytes" === _0x4d2ff7;
          this.resolvedType = null;
          this.extensionField = null;
          this.declaringField = null;
          this._packed = null;
          this.comment = _0x5a01dc;
        }
        _0x1e7106.fromJSON = function (_0x2db510, _0x2f54dc) {
          return new _0x1e7106(_0x2db510, _0x2f54dc.id, _0x2f54dc.type, _0x2f54dc.rule, _0x2f54dc.extend, _0x2f54dc.options, _0x2f54dc.comment);
        };
        Object.defineProperty(_0x1e7106.prototype, "packed", {
          'get': function () {
            if (null === this._packed) {
              this._packed = false !== this.getOption('packed');
            }
            return this._packed;
          }
        });
        _0x1e7106.prototype.setOption = function (_0x1ebf66, _0x3e1548, _0x4fc055) {
          if ('packed' === _0x1ebf66) {
            this._packed = null;
          }
          return _0x1efce7.prototype.setOption.call(this, _0x1ebf66, _0x3e1548, _0x4fc055);
        };
        _0x1e7106.prototype.toJSON = function (_0x160361) {
          var _0x29b1a6 = !!_0x160361 && Boolean(_0x160361.keepComments);
          return _0x2ff12e.toObject(['rule', "optional" !== this.rule && this.rule || undefined, "type", this.type, 'id', this.id, "extend", this.extend, "options", this.options, "comment", _0x29b1a6 ? this.comment : undefined]);
        };
        _0x1e7106.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === (this.typeDefault = _0x5d832f.defaults[this.type])) {
            this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
            if (this.resolvedType instanceof _0x4371a4) {
              this.typeDefault = null;
            } else {
              this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0x0]];
            }
          }
          if (this.options && null != this.options["default"]) {
            this.typeDefault = this.options['default'];
            if (this.resolvedType instanceof _0x33b9cc && "string" == typeof this.typeDefault) {
              this.typeDefault = this.resolvedType.values[this.typeDefault];
            }
          }
          if (this.options) {
            if (!(true !== this.options.packed && (undefined === this.options.packed || !this.resolvedType || this.resolvedType instanceof _0x33b9cc))) {
              delete this.options.packed;
            }
            if (!Object.keys(this.options).length) {
              this.options = undefined;
            }
          }
          if (this.long) {
            this.typeDefault = _0x2ff12e.Long.fromNumber(this.typeDefault, 'u' === this.type.charAt(0x0));
            if (Object.freeze) {
              Object.freeze(this.typeDefault);
            }
          } else {
            if (this.bytes && 'string' == typeof this.typeDefault) {
              var _0x251877;
              if (_0x2ff12e.base64.test(this.typeDefault)) {
                _0x2ff12e.base64.decode(this.typeDefault, _0x251877 = _0x2ff12e.newBuffer(_0x2ff12e.base64.length(this.typeDefault)), 0x0);
              } else {
                _0x2ff12e.utf8.write(this.typeDefault, _0x251877 = _0x2ff12e.newBuffer(_0x2ff12e.utf8.length(this.typeDefault)), 0x0);
              }
              this.typeDefault = _0x251877;
            }
          }
          if (this.map) {
            this.defaultValue = _0x2ff12e.emptyObject;
          } else if (this.repeated) {
            this.defaultValue = _0x2ff12e.emptyArray;
          } else {
            this.defaultValue = this.typeDefault;
          }
          if (this.parent instanceof _0x4371a4) {
            this.parent.ctor.prototype[this.name] = this.defaultValue;
          }
          return _0x1efce7.prototype.resolve.call(this);
        };
        _0x1e7106.d = function (_0x311f6c, _0x25e43b, _0x277511, _0x4b1a8a) {
          if ("function" == typeof _0x25e43b) {
            _0x25e43b = _0x2ff12e.decorateType(_0x25e43b).name;
          } else if (_0x25e43b && 'object' == typeof _0x25e43b) {
            _0x25e43b = _0x2ff12e.decorateEnum(_0x25e43b).name;
          }
          return function (_0x2ab45f, _0x193b27) {
            _0x2ff12e.decorateType(_0x2ab45f.constructor).add(new _0x1e7106(_0x193b27, _0x311f6c, _0x25e43b, _0x277511, {
              'default': _0x4b1a8a
            }));
          };
        };
        _0x1e7106._configure = function (_0x2242be) {
          _0x4371a4 = _0x2242be;
        };
        _0xeffd63.exports;
      }, function () {
        return {
          './object': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x11aabe.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js', function (_0x1c4065, _0x4b27c0, _0xec34d1, _0x44b222, _0x5d0e76) {
        _0xec34d1.exports = _0x20fe89;
        var _0x1702e9 = _0x4b27c0("./object");
        ((_0x20fe89.prototype = Object.create(_0x1702e9.prototype)).constructor = _0x20fe89).className = "OneOf";
        var _0x179651 = _0x4b27c0("./field");
        var _0x1e7eff = _0x4b27c0("./util");
        function _0x20fe89(_0x4680cb, _0x103a07, _0x7875d7, _0x4b1c85) {
          if (!Array.isArray(_0x103a07)) {
            _0x7875d7 = _0x103a07;
            _0x103a07 = undefined;
          }
          _0x1702e9.call(this, _0x4680cb, _0x7875d7);
          if (undefined !== _0x103a07 && !Array.isArray(_0x103a07)) {
            throw TypeError("fieldNames must be an Array");
          }
          this.oneof = _0x103a07 || [];
          this.fieldsArray = [];
          this.comment = _0x4b1c85;
        }
        function _0x54b796(_0x21d7a9) {
          if (_0x21d7a9.parent) {
            for (var _0x3d683c = 0x0; _0x3d683c < _0x21d7a9.fieldsArray.length; ++_0x3d683c) {
              if (!_0x21d7a9.fieldsArray[_0x3d683c].parent) {
                _0x21d7a9.parent.add(_0x21d7a9.fieldsArray[_0x3d683c]);
              }
            }
          }
        }
        _0x20fe89.fromJSON = function (_0x4be099, _0x34e3f3) {
          return new _0x20fe89(_0x4be099, _0x34e3f3.oneof, _0x34e3f3.options, _0x34e3f3.comment);
        };
        _0x20fe89.prototype.toJSON = function (_0x515b7c) {
          var _0xeafca5 = !!_0x515b7c && Boolean(_0x515b7c.keepComments);
          return _0x1e7eff.toObject(["options", this.options, "oneof", this.oneof, "comment", _0xeafca5 ? this.comment : undefined]);
        };
        _0x20fe89.prototype.add = function (_0x220ac6) {
          if (!(_0x220ac6 instanceof _0x179651)) {
            throw TypeError("field must be a Field");
          }
          if (_0x220ac6.parent && _0x220ac6.parent !== this.parent) {
            _0x220ac6.parent.remove(_0x220ac6);
          }
          this.oneof.push(_0x220ac6.name);
          this.fieldsArray.push(_0x220ac6);
          _0x220ac6.partOf = this;
          _0x54b796(this);
          return this;
        };
        _0x20fe89.prototype.remove = function (_0x260594) {
          if (!(_0x260594 instanceof _0x179651)) {
            throw TypeError("field must be a Field");
          }
          var _0x5c8360 = this.fieldsArray.indexOf(_0x260594);
          if (_0x5c8360 < 0x0) {
            throw Error(_0x260594 + " is not a member of " + this);
          }
          this.fieldsArray.splice(_0x5c8360, 0x1);
          if ((_0x5c8360 = this.oneof.indexOf(_0x260594.name)) > -0x1) {
            this.oneof.splice(_0x5c8360, 0x1);
          }
          _0x260594.partOf = null;
          return this;
        };
        _0x20fe89.prototype.onAdd = function (_0x36295b) {
          _0x1702e9.prototype.onAdd.call(this, _0x36295b);
          for (var _0x13240b = 0x0; _0x13240b < this.oneof.length; ++_0x13240b) {
            var _0x34baac = _0x36295b.get(this.oneof[_0x13240b]);
            if (_0x34baac && !_0x34baac.partOf) {
              _0x34baac.partOf = this;
              this.fieldsArray.push(_0x34baac);
            }
          }
          _0x54b796(this);
        };
        _0x20fe89.prototype.onRemove = function (_0x1a53db) {
          var _0x3e2245;
          for (var _0x2c1f0e = 0x0; _0x2c1f0e < this.fieldsArray.length; ++_0x2c1f0e) {
            if ((_0x3e2245 = this.fieldsArray[_0x2c1f0e]).parent) {
              _0x3e2245.parent.remove(_0x3e2245);
            }
          }
          _0x1702e9.prototype.onRemove.call(this, _0x1a53db);
        };
        _0x20fe89.d = function () {
          var _0x82a481 = new Array(arguments.length);
          for (var _0x4436fb = 0x0; _0x4436fb < arguments.length;) {
            _0x82a481[_0x4436fb] = arguments[_0x4436fb++];
          }
          return function (_0x7886ad, _0x405b94) {
            _0x1e7eff.decorateType(_0x7886ad.constructor).add(new _0x20fe89(_0x405b94, _0x82a481));
            Object.defineProperty(_0x7886ad, _0x405b94, {
              'get': _0x1e7eff.oneOfGetter(_0x82a481),
              'set': _0x1e7eff.oneOfSetter(_0x82a481)
            });
          };
        };
        _0xec34d1.exports;
      }, function () {
        return {
          './object': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './field': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js", function (_0x4d977b, _0x72852f, _0x31049a, _0x358d45, _0x1edbed) {
        _0x31049a.exports = _0x4e9698;
        var _0x54d514 = _0x72852f("./object");
        ((_0x4e9698.prototype = Object.create(_0x54d514.prototype)).constructor = _0x4e9698).className = "Namespace";
        var _0x311289;
        var _0x4e2dd2;
        var _0x3ebb5b;
        var _0x36fc16 = _0x72852f("./field");
        var _0x2e1c18 = _0x72852f("./oneof");
        var _0x44334b = _0x72852f("./util");
        function _0x504578(_0x2f6c12, _0x463986) {
          if (_0x2f6c12 && _0x2f6c12.length) {
            var _0x16d079 = {};
            for (var _0x4f686d = 0x0; _0x4f686d < _0x2f6c12.length; ++_0x4f686d) {
              _0x16d079[_0x2f6c12[_0x4f686d].name] = _0x2f6c12[_0x4f686d].toJSON(_0x463986);
            }
            return _0x16d079;
          }
        }
        function _0x4e9698(_0xf7d3ae, _0x5af5f8) {
          _0x54d514.call(this, _0xf7d3ae, _0x5af5f8);
          this.nested = undefined;
          this._nestedArray = null;
        }
        function _0x522eb9(_0x34155d) {
          _0x34155d._nestedArray = null;
          return _0x34155d;
        }
        _0x4e9698.fromJSON = function (_0x5e48f3, _0x390421) {
          return new _0x4e9698(_0x5e48f3, _0x390421.options).addJSON(_0x390421.nested);
        };
        _0x4e9698.arrayToJSON = _0x504578;
        _0x4e9698.isReservedId = function (_0xf44dfd, _0x3180f2) {
          if (_0xf44dfd) {
            for (var _0x5d3ec5 = 0x0; _0x5d3ec5 < _0xf44dfd.length; ++_0x5d3ec5) {
              if ('string' != typeof _0xf44dfd[_0x5d3ec5] && _0xf44dfd[_0x5d3ec5][0x0] <= _0x3180f2 && _0xf44dfd[_0x5d3ec5][0x1] > _0x3180f2) {
                return true;
              }
            }
          }
          return false;
        };
        _0x4e9698.isReservedName = function (_0x3682f9, _0x3dc464) {
          if (_0x3682f9) {
            for (var _0x3311cf = 0x0; _0x3311cf < _0x3682f9.length; ++_0x3311cf) {
              if (_0x3682f9[_0x3311cf] === _0x3dc464) {
                return true;
              }
            }
          }
          return false;
        };
        Object.defineProperty(_0x4e9698.prototype, "nestedArray", {
          'get': function () {
            return this._nestedArray || (this._nestedArray = _0x44334b.toArray(this.nested));
          }
        });
        _0x4e9698.prototype.toJSON = function (_0x4bb3c7) {
          return _0x44334b.toObject(["options", this.options, "nested", _0x504578(this.nestedArray, _0x4bb3c7)]);
        };
        _0x4e9698.prototype.addJSON = function (_0x2f7e11) {
          if (_0x2f7e11) {
            var _0x3562f7;
            var _0x669dfd = Object.keys(_0x2f7e11);
            for (var _0x5226de = 0x0; _0x5226de < _0x669dfd.length; ++_0x5226de) {
              _0x3562f7 = _0x2f7e11[_0x669dfd[_0x5226de]];
              this.add((undefined !== _0x3562f7.fields ? _0x311289.fromJSON : undefined !== _0x3562f7.values ? _0x3ebb5b.fromJSON : undefined !== _0x3562f7.methods ? _0x4e2dd2.fromJSON : undefined !== _0x3562f7.id ? _0x36fc16.fromJSON : _0x4e9698.fromJSON)(_0x669dfd[_0x5226de], _0x3562f7));
            }
          }
          return this;
        };
        _0x4e9698.prototype.get = function (_0x56f196) {
          return this.nested && this.nested[_0x56f196] || null;
        };
        _0x4e9698.prototype.getEnum = function (_0x31e7dd) {
          if (this.nested && this.nested[_0x31e7dd] instanceof _0x3ebb5b) {
            return this.nested[_0x31e7dd].values;
          }
          throw Error("no such enum: " + _0x31e7dd);
        };
        _0x4e9698.prototype.add = function (_0xdee126) {
          if (!(_0xdee126 instanceof _0x36fc16 && undefined !== _0xdee126.extend || _0xdee126 instanceof _0x311289 || _0xdee126 instanceof _0x3ebb5b || _0xdee126 instanceof _0x4e2dd2 || _0xdee126 instanceof _0x4e9698 || _0xdee126 instanceof _0x2e1c18)) {
            throw TypeError("object must be a valid nested object");
          }
          if (this.nested) {
            var _0x4b688e = this.get(_0xdee126.name);
            if (_0x4b688e) {
              if (!(_0x4b688e instanceof _0x4e9698 && _0xdee126 instanceof _0x4e9698) || _0x4b688e instanceof _0x311289 || _0x4b688e instanceof _0x4e2dd2) {
                throw Error("duplicate name '" + _0xdee126.name + "' in " + this);
              }
              var _0x1e0566 = _0x4b688e.nestedArray;
              for (var _0x18ed01 = 0x0; _0x18ed01 < _0x1e0566.length; ++_0x18ed01) {
                _0xdee126.add(_0x1e0566[_0x18ed01]);
              }
              this.remove(_0x4b688e);
              if (!this.nested) {
                this.nested = {};
              }
              _0xdee126.setOptions(_0x4b688e.options, true);
            }
          } else {
            this.nested = {};
          }
          this.nested[_0xdee126.name] = _0xdee126;
          _0xdee126.onAdd(this);
          return _0x522eb9(this);
        };
        _0x4e9698.prototype.remove = function (_0x42520b) {
          if (!(_0x42520b instanceof _0x54d514)) {
            throw TypeError("object must be a ReflectionObject");
          }
          if (_0x42520b.parent !== this) {
            throw Error(_0x42520b + " is not a member of " + this);
          }
          delete this.nested[_0x42520b.name];
          if (!Object.keys(this.nested).length) {
            this.nested = undefined;
          }
          _0x42520b.onRemove(this);
          return _0x522eb9(this);
        };
        _0x4e9698.prototype.define = function (_0x1cd677, _0x42ab96) {
          if (_0x44334b.isString(_0x1cd677)) {
            _0x1cd677 = _0x1cd677.split('.');
          } else {
            if (!Array.isArray(_0x1cd677)) {
              throw TypeError("illegal path");
            }
          }
          if (_0x1cd677 && _0x1cd677.length && '' === _0x1cd677[0x0]) {
            throw Error("path must be relative");
          }
          for (var _0x4f80fb = this; _0x1cd677.length > 0x0;) {
            var _0x3a4d16 = _0x1cd677.shift();
            if (_0x4f80fb.nested && _0x4f80fb.nested[_0x3a4d16]) {
              if (!((_0x4f80fb = _0x4f80fb.nested[_0x3a4d16]) instanceof _0x4e9698)) {
                throw Error("path conflicts with non-namespace objects");
              }
            } else {
              _0x4f80fb.add(_0x4f80fb = new _0x4e9698(_0x3a4d16));
            }
          }
          if (_0x42ab96) {
            _0x4f80fb.addJSON(_0x42ab96);
          }
          return _0x4f80fb;
        };
        _0x4e9698.prototype.resolveAll = function () {
          var _0x55fce1 = this.nestedArray;
          for (var _0x3d9e47 = 0x0; _0x3d9e47 < _0x55fce1.length;) {
            if (_0x55fce1[_0x3d9e47] instanceof _0x4e9698) {
              _0x55fce1[_0x3d9e47++].resolveAll();
            } else {
              _0x55fce1[_0x3d9e47++].resolve();
            }
          }
          return this.resolve();
        };
        _0x4e9698.prototype.lookup = function (_0x4d5735, _0x5f456f, _0x3a9707) {
          if ("boolean" == typeof _0x5f456f) {
            _0x3a9707 = _0x5f456f;
            _0x5f456f = undefined;
          } else if (_0x5f456f && !Array.isArray(_0x5f456f)) {
            _0x5f456f = [_0x5f456f];
          }
          if (_0x44334b.isString(_0x4d5735) && _0x4d5735.length) {
            if ('.' === _0x4d5735) {
              return this.root;
            }
            _0x4d5735 = _0x4d5735.split('.');
          } else {
            if (!_0x4d5735.length) {
              return this;
            }
          }
          if ('' === _0x4d5735[0x0]) {
            return this.root.lookup(_0x4d5735.slice(0x1), _0x5f456f);
          }
          var _0x34c5b7 = this.get(_0x4d5735[0x0]);
          if (_0x34c5b7) {
            if (0x1 === _0x4d5735.length) {
              if (!_0x5f456f || _0x5f456f.indexOf(_0x34c5b7.constructor) > -0x1) {
                return _0x34c5b7;
              }
            } else {
              if (_0x34c5b7 instanceof _0x4e9698 && (_0x34c5b7 = _0x34c5b7.lookup(_0x4d5735.slice(0x1), _0x5f456f, true))) {
                return _0x34c5b7;
              }
            }
          } else {
            for (var _0x443995 = 0x0; _0x443995 < this.nestedArray.length; ++_0x443995) {
              if (this._nestedArray[_0x443995] instanceof _0x4e9698 && (_0x34c5b7 = this._nestedArray[_0x443995].lookup(_0x4d5735, _0x5f456f, true))) {
                return _0x34c5b7;
              }
            }
          }
          return null === this.parent || _0x3a9707 ? null : this.parent.lookup(_0x4d5735, _0x5f456f);
        };
        _0x4e9698.prototype.lookupType = function (_0x45dd8d) {
          var _0x54918e = this.lookup(_0x45dd8d, [_0x311289]);
          if (!_0x54918e) {
            throw Error("no such type: " + _0x45dd8d);
          }
          return _0x54918e;
        };
        _0x4e9698.prototype.lookupEnum = function (_0x2bf7be) {
          var _0x1d8ed8 = this.lookup(_0x2bf7be, [_0x3ebb5b]);
          if (!_0x1d8ed8) {
            throw Error("no such Enum '" + _0x2bf7be + "' in " + this);
          }
          return _0x1d8ed8;
        };
        _0x4e9698.prototype.lookupTypeOrEnum = function (_0x5e2ed0) {
          var _0x5be065 = this.lookup(_0x5e2ed0, [_0x311289, _0x3ebb5b]);
          if (!_0x5be065) {
            throw Error("no such Type or Enum '" + _0x5e2ed0 + "' in " + this);
          }
          return _0x5be065;
        };
        _0x4e9698.prototype.lookupService = function (_0x1adee4) {
          var _0x4a729d = this.lookup(_0x1adee4, [_0x4e2dd2]);
          if (!_0x4a729d) {
            throw Error("no such Service '" + _0x1adee4 + "' in " + this);
          }
          return _0x4a729d;
        };
        _0x4e9698._configure = function (_0xa3fd28, _0x5134bb, _0xca13) {
          _0x311289 = _0xa3fd28;
          _0x4e2dd2 = _0x5134bb;
          _0x3ebb5b = _0xca13;
        };
        _0x31049a.exports;
      }, function () {
        return {
          './object': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './field': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './oneof': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js',
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js", function (_0x53c009, _0x1ea84b, _0x277b6c, _0x43a2a0, _0x2e240d) {
        _0x277b6c.exports = _0xdd1c30;
        var _0x4dfe80 = _0x1ea84b("./field");
        ((_0xdd1c30.prototype = Object.create(_0x4dfe80.prototype)).constructor = _0xdd1c30).className = "MapField";
        var _0x561fe1 = _0x1ea84b("./types");
        var _0x27a7b4 = _0x1ea84b("./util");
        function _0xdd1c30(_0x3f5d95, _0x479c0d, _0x387355, _0x19e0ac, _0x1ad914, _0x60e51a) {
          _0x4dfe80.call(this, _0x3f5d95, _0x479c0d, _0x19e0ac, undefined, undefined, _0x1ad914, _0x60e51a);
          if (!_0x27a7b4.isString(_0x387355)) {
            throw TypeError("keyType must be a string");
          }
          this.keyType = _0x387355;
          this.resolvedKeyType = null;
          this.map = true;
        }
        _0xdd1c30.fromJSON = function (_0x57ff65, _0x5310b2) {
          return new _0xdd1c30(_0x57ff65, _0x5310b2.id, _0x5310b2.keyType, _0x5310b2.type, _0x5310b2.options, _0x5310b2.comment);
        };
        _0xdd1c30.prototype.toJSON = function (_0x199d50) {
          var _0x28768f = !!_0x199d50 && Boolean(_0x199d50.keepComments);
          return _0x27a7b4.toObject(["keyType", this.keyType, "type", this.type, 'id', this.id, "extend", this.extend, "options", this.options, "comment", _0x28768f ? this.comment : undefined]);
        };
        _0xdd1c30.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === _0x561fe1.mapKey[this.keyType]) {
            throw Error("invalid key type: " + this.keyType);
          }
          return _0x4dfe80.prototype.resolve.call(this);
        };
        _0xdd1c30.d = function (_0x2f737e, _0x53e2fe, _0x50d446) {
          if ('function' == typeof _0x50d446) {
            _0x50d446 = _0x27a7b4.decorateType(_0x50d446).name;
          } else if (_0x50d446 && "object" == typeof _0x50d446) {
            _0x50d446 = _0x27a7b4.decorateEnum(_0x50d446).name;
          }
          return function (_0x1761b2, _0x57aeb3) {
            _0x27a7b4.decorateType(_0x1761b2.constructor).add(new _0xdd1c30(_0x57aeb3, _0x2f737e, _0x53e2fe, _0x50d446));
          };
        };
        _0x277b6c.exports;
      }, function () {
        return {
          './field': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './types': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/method.js", function (_0x5bedaf, _0x12c00f, _0x38ec13, _0x1ccf3c, _0x56a41f) {
        _0x38ec13.exports = _0x3dd9fc;
        var _0x2ca374 = _0x12c00f("./object");
        ((_0x3dd9fc.prototype = Object.create(_0x2ca374.prototype)).constructor = _0x3dd9fc).className = "Method";
        var _0x1c2a39 = _0x12c00f('./util');
        function _0x3dd9fc(_0x42c405, _0x210bb8, _0x31a33e, _0x491532, _0x5eddf3, _0x4b874d, _0x45a839, _0x4015c6, _0x2b7abc) {
          if (_0x1c2a39.isObject(_0x5eddf3)) {
            _0x45a839 = _0x5eddf3;
            _0x5eddf3 = _0x4b874d = undefined;
          } else if (_0x1c2a39.isObject(_0x4b874d)) {
            _0x45a839 = _0x4b874d;
            _0x4b874d = undefined;
          }
          if (undefined !== _0x210bb8 && !_0x1c2a39.isString(_0x210bb8)) {
            throw TypeError("type must be a string");
          }
          if (!_0x1c2a39.isString(_0x31a33e)) {
            throw TypeError("requestType must be a string");
          }
          if (!_0x1c2a39.isString(_0x491532)) {
            throw TypeError("responseType must be a string");
          }
          _0x2ca374.call(this, _0x42c405, _0x45a839);
          this.type = _0x210bb8 || "rpc";
          this.requestType = _0x31a33e;
          this.requestStream = !!_0x5eddf3 || undefined;
          this.responseType = _0x491532;
          this.responseStream = !!_0x4b874d || undefined;
          this.resolvedRequestType = null;
          this.resolvedResponseType = null;
          this.comment = _0x4015c6;
          this.parsedOptions = _0x2b7abc;
        }
        _0x3dd9fc.fromJSON = function (_0x83f4b1, _0x26234a) {
          return new _0x3dd9fc(_0x83f4b1, _0x26234a.type, _0x26234a.requestType, _0x26234a.responseType, _0x26234a.requestStream, _0x26234a.responseStream, _0x26234a.options, _0x26234a.comment, _0x26234a.parsedOptions);
        };
        _0x3dd9fc.prototype.toJSON = function (_0x34935b) {
          var _0x363607 = !!_0x34935b && Boolean(_0x34935b.keepComments);
          return _0x1c2a39.toObject(['type', 'rpc' !== this.type && this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, 'responseType', this.responseType, "responseStream", this.responseStream, 'options', this.options, 'comment', _0x363607 ? this.comment : undefined, "parsedOptions", this.parsedOptions]);
        };
        _0x3dd9fc.prototype.resolve = function () {
          return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), _0x2ca374.prototype.resolve.call(this));
        };
        _0x38ec13.exports;
      }, function () {
        return {
          './object': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/service.js", function (_0x48f9e7, _0x2fb122, _0x313f73, _0x30d919, _0x259963) {
        _0x313f73.exports = _0x34f62d;
        var _0x8bbb5a = _0x2fb122("./namespace");
        ((_0x34f62d.prototype = Object.create(_0x8bbb5a.prototype)).constructor = _0x34f62d).className = "Service";
        var _0x34b770 = _0x2fb122('./method');
        var _0x4c775f = _0x2fb122("./util");
        var _0x5747bf = _0x2fb122("./rpc");
        function _0x34f62d(_0x2016e8, _0x5a1e4b) {
          _0x8bbb5a.call(this, _0x2016e8, _0x5a1e4b);
          this.methods = {};
          this._methodsArray = null;
        }
        function _0x5764d2(_0x3b03ed) {
          _0x3b03ed._methodsArray = null;
          return _0x3b03ed;
        }
        _0x34f62d.fromJSON = function (_0x1c7f36, _0x1aba2f) {
          var _0x589edf = new _0x34f62d(_0x1c7f36, _0x1aba2f.options);
          if (_0x1aba2f.methods) {
            var _0xb2949e = Object.keys(_0x1aba2f.methods);
            for (var _0x218f8d = 0x0; _0x218f8d < _0xb2949e.length; ++_0x218f8d) {
              _0x589edf.add(_0x34b770.fromJSON(_0xb2949e[_0x218f8d], _0x1aba2f.methods[_0xb2949e[_0x218f8d]]));
            }
          }
          if (_0x1aba2f.nested) {
            _0x589edf.addJSON(_0x1aba2f.nested);
          }
          _0x589edf.comment = _0x1aba2f.comment;
          return _0x589edf;
        };
        _0x34f62d.prototype.toJSON = function (_0x5d0868) {
          var _0xf45e9 = _0x8bbb5a.prototype.toJSON.call(this, _0x5d0868);
          var _0x34ee70 = !!_0x5d0868 && Boolean(_0x5d0868.keepComments);
          return _0x4c775f.toObject(["options", _0xf45e9 && _0xf45e9.options || undefined, "methods", _0x8bbb5a.arrayToJSON(this.methodsArray, _0x5d0868) || {}, "nested", _0xf45e9 && _0xf45e9.nested || undefined, "comment", _0x34ee70 ? this.comment : undefined]);
        };
        Object.defineProperty(_0x34f62d.prototype, "methodsArray", {
          'get': function () {
            return this._methodsArray || (this._methodsArray = _0x4c775f.toArray(this.methods));
          }
        });
        _0x34f62d.prototype.get = function (_0x479b1a) {
          return this.methods[_0x479b1a] || _0x8bbb5a.prototype.get.call(this, _0x479b1a);
        };
        _0x34f62d.prototype.resolveAll = function () {
          var _0x2b7e9e = this.methodsArray;
          for (var _0x2fc63f = 0x0; _0x2fc63f < _0x2b7e9e.length; ++_0x2fc63f) {
            _0x2b7e9e[_0x2fc63f].resolve();
          }
          return _0x8bbb5a.prototype.resolve.call(this);
        };
        _0x34f62d.prototype.add = function (_0x171ba1) {
          if (this.get(_0x171ba1.name)) {
            throw Error("duplicate name '" + _0x171ba1.name + "' in " + this);
          }
          return _0x171ba1 instanceof _0x34b770 ? (this.methods[_0x171ba1.name] = _0x171ba1, _0x171ba1.parent = this, _0x5764d2(this)) : _0x8bbb5a.prototype.add.call(this, _0x171ba1);
        };
        _0x34f62d.prototype.remove = function (_0x354be7) {
          if (_0x354be7 instanceof _0x34b770) {
            if (this.methods[_0x354be7.name] !== _0x354be7) {
              throw Error(_0x354be7 + " is not a member of " + this);
            }
            delete this.methods[_0x354be7.name];
            _0x354be7.parent = null;
            return _0x5764d2(this);
          }
          return _0x8bbb5a.prototype.remove.call(this, _0x354be7);
        };
        _0x34f62d.prototype.create = function (_0x3cc389, _0x4c0a11, _0x2a00ee) {
          var _0x5c801a;
          var _0x1ef374 = new _0x5747bf.Service(_0x3cc389, _0x4c0a11, _0x2a00ee);
          for (var _0x448850 = 0x0; _0x448850 < this.methodsArray.length; ++_0x448850) {
            var _0x2e0444 = _0x4c775f.lcFirst((_0x5c801a = this._methodsArray[_0x448850]).resolve().name).replace(/[^$\w_]/g, '');
            _0x1ef374[_0x2e0444] = _0x4c775f.codegen(['r', 'c'], _0x4c775f.isReserved(_0x2e0444) ? _0x2e0444 + '_' : _0x2e0444)("return this.rpcCall(m,q,s,r,c)")({
              'm': _0x5c801a,
              'q': _0x5c801a.resolvedRequestType.ctor,
              's': _0x5c801a.resolvedResponseType.ctor
            });
          }
          return _0x1ef374;
        };
        _0x313f73.exports;
      }, function () {
        return {
          './namespace': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './method': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './rpc': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js"
        };
      });
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/message.js", function (_0x253589, _0x494de1, _0x58cdad, _0x1c2cba, _0x3e5d46) {
        _0x58cdad.exports = _0x30f675;
        var _0x5acbda = _0x494de1("./util/minimal");
        function _0x30f675(_0x112988) {
          if (_0x112988) {
            var _0x1111ee = Object.keys(_0x112988);
            for (var _0x568d88 = 0x0; _0x568d88 < _0x1111ee.length; ++_0x568d88) {
              this[_0x1111ee[_0x568d88]] = _0x112988[_0x1111ee[_0x568d88]];
            }
          }
        }
        _0x30f675.create = function (_0xad5f29) {
          return this.$type.create(_0xad5f29);
        };
        _0x30f675.encode = function (_0x117f23, _0x2f04da) {
          return this.$type.encode(_0x117f23, _0x2f04da);
        };
        _0x30f675.encodeDelimited = function (_0x5385d5, _0x553086) {
          return this.$type.encodeDelimited(_0x5385d5, _0x553086);
        };
        _0x30f675.decode = function (_0x4493b3) {
          return this.$type.decode(_0x4493b3);
        };
        _0x30f675.decodeDelimited = function (_0x4a4540) {
          return this.$type.decodeDelimited(_0x4a4540);
        };
        _0x30f675.verify = function (_0x3a6662) {
          return this.$type.verify(_0x3a6662);
        };
        _0x30f675.fromObject = function (_0x394913) {
          return this.$type.fromObject(_0x394913);
        };
        _0x30f675.toObject = function (_0x58a7a3, _0x2ac78e) {
          return this.$type.toObject(_0x58a7a3, _0x2ac78e);
        };
        _0x30f675.prototype.toJSON = function () {
          return this.$type.toObject(this, _0x5acbda.toJSONOptions);
        };
        _0x58cdad.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js", function (_0x241d99, _0x54c3b8, _0x1d2140, _0x2cba88, _0x15bf9b) {
        _0x1d2140.exports = function (_0x584919) {
          var _0x344443 = _0x1c9be9.codegen(['r', 'l'], _0x584919.name + "$decode")("if(!(r instanceof Reader))")('r=Reader.create(r)')("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (_0x584919.fieldsArray.filter(function (_0x2d2e78) {
            return _0x2d2e78.map;
          }).length ? ",k,value" : ''))('while(r.pos<c){')("var t=r.uint32()");
          if (_0x584919.group) {
            _0x344443("if((t&7)===4)")("break");
          }
          _0x344443("switch(t>>>3){");
          for (var _0x389ed9 = 0x0; _0x389ed9 < _0x584919.fieldsArray.length; ++_0x389ed9) {
            var _0x2cb460 = _0x584919._fieldsArray[_0x389ed9].resolve();
            var _0x1b61cb = _0x2cb460.resolvedType instanceof _0x5771bf ? "int32" : _0x2cb460.type;
            var _0x7e0aa2 = 'm' + _0x1c9be9.safeProp(_0x2cb460.name);
            _0x344443("case %i:", _0x2cb460.id);
            if (_0x2cb460.map) {
              _0x344443("if(%s===util.emptyObject)", _0x7e0aa2)("%s={}", _0x7e0aa2)("var c2 = r.uint32()+r.pos");
              if (undefined !== _0x3f7708.defaults[_0x2cb460.keyType]) {
                _0x344443('k=%j', _0x3f7708.defaults[_0x2cb460.keyType]);
              } else {
                _0x344443("k=null");
              }
              if (undefined !== _0x3f7708.defaults[_0x1b61cb]) {
                _0x344443("value=%j", _0x3f7708.defaults[_0x1b61cb]);
              } else {
                _0x344443("value=null");
              }
              _0x344443("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", _0x2cb460.keyType)("case 2:");
              if (undefined === _0x3f7708.basic[_0x1b61cb]) {
                _0x344443('value=types[%i].decode(r,r.uint32())', _0x389ed9);
              } else {
                _0x344443('value=r.%s()', _0x1b61cb);
              }
              _0x344443("break")("default:")("r.skipType(tag2&7)")("break")('}')('}');
              if (undefined !== _0x3f7708.long[_0x2cb460.keyType]) {
                _0x344443("%s[typeof k===\"object\"?util.longToHash(k):k]=value", _0x7e0aa2);
              } else {
                _0x344443("%s[k]=value", _0x7e0aa2);
              }
            } else if (_0x2cb460.repeated) {
              _0x344443("if(!(%s&&%s.length))", _0x7e0aa2, _0x7e0aa2)('%s=[]', _0x7e0aa2);
              if (undefined !== _0x3f7708.packed[_0x1b61cb]) {
                _0x344443('if((t&7)===2){')("var c2=r.uint32()+r.pos")("while(r.pos<c2)")('%s.push(r.%s())', _0x7e0aa2, _0x1b61cb)("}else");
              }
              if (undefined === _0x3f7708.basic[_0x1b61cb]) {
                _0x344443(_0x2cb460.resolvedType.group ? '%s.push(types[%i].decode(r))' : '%s.push(types[%i].decode(r,r.uint32()))', _0x7e0aa2, _0x389ed9);
              } else {
                _0x344443('%s.push(r.%s())', _0x7e0aa2, _0x1b61cb);
              }
            } else if (undefined === _0x3f7708.basic[_0x1b61cb]) {
              _0x344443(_0x2cb460.resolvedType.group ? '%s=types[%i].decode(r)' : "%s=types[%i].decode(r,r.uint32())", _0x7e0aa2, _0x389ed9);
            } else {
              _0x344443("%s=r.%s()", _0x7e0aa2, _0x1b61cb);
            }
            _0x344443("break");
          }
          _0x344443("default:")('r.skipType(t&7)')('break')('}')('}');
          for (_0x389ed9 = 0x0; _0x389ed9 < _0x584919._fieldsArray.length; ++_0x389ed9) {
            var _0x514d82 = _0x584919._fieldsArray[_0x389ed9];
            if (_0x514d82.required) {
              _0x344443('if(!m.hasOwnProperty(%j))', _0x514d82.name)("throw util.ProtocolError(%j,{instance:m})", "missing required '" + _0x514d82.name + "'");
            }
          }
          return _0x344443("return m");
        };
        var _0x5771bf = _0x54c3b8('./enum');
        var _0x3f7708 = _0x54c3b8("./types");
        var _0x1c9be9 = _0x54c3b8("./util");
        _0x1d2140.exports;
      }, function () {
        return {
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js", function (_0x33a25e, _0x39c719, _0x4cee8b, _0x534ab1, _0x10f772) {
        _0x4cee8b.exports = function (_0x499543) {
          var _0x2c12e3 = _0x5b3180.codegen(['m'], _0x499543.name + "$verify")("if(typeof m!==\"object\"||m===null)")("return%j", "object expected");
          var _0x134205 = _0x499543.oneofsArray;
          var _0x388fbb = {};
          if (_0x134205.length) {
            _0x2c12e3("var p={}");
          }
          for (var _0x43b0d6 = 0x0; _0x43b0d6 < _0x499543.fieldsArray.length; ++_0x43b0d6) {
            var _0xd35fda = _0x499543._fieldsArray[_0x43b0d6].resolve();
            var _0x5c0c7e = 'm' + _0x5b3180.safeProp(_0xd35fda.name);
            if (_0xd35fda.optional) {
              _0x2c12e3("if(%s!=null&&m.hasOwnProperty(%j)){", _0x5c0c7e, _0xd35fda.name);
            }
            if (_0xd35fda.map) {
              _0x2c12e3("if(!util.isObject(%s))", _0x5c0c7e)("return%j", _0xd35fda.name + ": " + 'object' + (_0xd35fda.repeated && true ? '[]' : _0xd35fda.map && false ? "{k:" + _0xd35fda.keyType + '}' : '') + " expected")("var k=Object.keys(%s)", _0x5c0c7e)("for(var i=0;i<k.length;++i){");
              _0x1b7f23(_0x2c12e3, _0xd35fda, "k[i]");
              _0x57e4e5(_0x2c12e3, _0xd35fda, _0x43b0d6, _0x5c0c7e + "[k[i]]")('}');
            } else {
              if (_0xd35fda.repeated) {
                _0x2c12e3("if(!Array.isArray(%s))", _0x5c0c7e)("return%j", _0xd35fda.name + ": " + 'array' + (_0xd35fda.repeated && false ? '[]' : _0xd35fda.map && true ? "{k:" + _0xd35fda.keyType + '}' : '') + " expected")("for(var i=0;i<%s.length;++i){", _0x5c0c7e);
                _0x57e4e5(_0x2c12e3, _0xd35fda, _0x43b0d6, _0x5c0c7e + "[i]")('}');
              } else {
                if (_0xd35fda.partOf) {
                  var _0x59c248 = _0x5b3180.safeProp(_0xd35fda.partOf.name);
                  if (0x1 === _0x388fbb[_0xd35fda.partOf.name]) {
                    _0x2c12e3("if(p%s===1)", _0x59c248)('return%j', _0xd35fda.partOf.name + ": multiple values");
                  }
                  _0x388fbb[_0xd35fda.partOf.name] = 0x1;
                  _0x2c12e3("p%s=1", _0x59c248);
                }
                _0x57e4e5(_0x2c12e3, _0xd35fda, _0x43b0d6, _0x5c0c7e);
              }
            }
            if (_0xd35fda.optional) {
              _0x2c12e3('}');
            }
          }
          return _0x2c12e3("return null");
        };
        var _0x272d30 = _0x39c719("./enum");
        var _0x5b3180 = _0x39c719('./util');
        function _0x57e4e5(_0x45b829, _0x4679cc, _0x588b26, _0x43d0fd) {
          if (_0x4679cc.resolvedType) {
            if (_0x4679cc.resolvedType instanceof _0x272d30) {
              _0x45b829("switch(%s){", _0x43d0fd)("default:")('return%j', _0x4679cc.name + ": " + "enum value" + (_0x4679cc.repeated && true ? '[]' : _0x4679cc.map && true ? "{k:" + _0x4679cc.keyType + '}' : '') + " expected");
              var _0x34c606 = Object.keys(_0x4679cc.resolvedType.values);
              for (var _0x420920 = 0x0; _0x420920 < _0x34c606.length; ++_0x420920) {
                _0x45b829("case %i:", _0x4679cc.resolvedType.values[_0x34c606[_0x420920]]);
              }
              _0x45b829("break")('}');
            } else {
              _0x45b829('{')("var e=types[%i].verify(%s);", _0x588b26, _0x43d0fd)('if(e)')("return%j+e", _0x4679cc.name + '.')('}');
            }
          } else {
            switch (_0x4679cc.type) {
              case "int32":
              case "uint32":
              case "sint32":
              case "fixed32":
              case "sfixed32":
                _0x45b829("if(!util.isInteger(%s))", _0x43d0fd)("return%j", _0x4679cc.name + ": " + _0x5238(0x392) + (_0x4679cc.repeated && "array" !== _0x5238(0x392) ? '[]' : _0x4679cc.map && true ? "{k:" + _0x4679cc.keyType + '}' : '') + " expected");
                break;
              case "int64":
              case 'uint64':
              case "sint64":
              case "fixed64":
              case "sfixed64":
                _0x45b829("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", _0x43d0fd, _0x43d0fd, _0x43d0fd, _0x43d0fd)("return%j", _0x4679cc.name + ": " + _0x5238(0x49e) + (_0x4679cc.repeated && "array" !== _0x5238(0x49e) ? '[]' : _0x4679cc.map && true ? "{k:" + _0x4679cc.keyType + '}' : '') + " expected");
                break;
              case "float":
              case 'double':
                _0x45b829("if(typeof %s!==\"number\")", _0x43d0fd)("return%j", _0x4679cc.name + ": " + _0x5238(0x9b1) + (_0x4679cc.repeated && "array" !== _0x5238(0x9b1) ? '[]' : _0x4679cc.map && true ? "{k:" + _0x4679cc.keyType + '}' : '') + " expected");
                break;
              case "bool":
                _0x45b829("if(typeof %s!==\"boolean\")", _0x43d0fd)("return%j", _0x4679cc.name + ": " + _0x5238(0xcd1) + (_0x4679cc.repeated && "array" !== _0x5238(0xcd1) ? '[]' : _0x4679cc.map && true ? "{k:" + _0x4679cc.keyType + '}' : '') + " expected");
                break;
              case "string":
                _0x45b829("if(!util.isString(%s))", _0x43d0fd)("return%j", _0x4679cc.name + ": " + 'string' + (_0x4679cc.repeated && true ? '[]' : _0x4679cc.map && true ? "{k:" + _0x4679cc.keyType + '}' : '') + " expected");
                break;
              case 'bytes':
                _0x45b829("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", _0x43d0fd, _0x43d0fd, _0x43d0fd)("return%j", _0x4679cc.name + ": " + 'buffer' + (_0x4679cc.repeated && true ? '[]' : _0x4679cc.map && true ? "{k:" + _0x4679cc.keyType + '}' : '') + " expected");
            }
          }
          return _0x45b829;
        }
        function _0x1b7f23(_0x2a5df0, _0x36acab, _0x643a52) {
          switch (_0x36acab.keyType) {
            case 'int32':
            case 'uint32':
            case 'sint32':
            case "fixed32":
            case "sfixed32":
              _0x2a5df0("if(!util.key32Re.test(%s))", _0x643a52)("return%j", _0x36acab.name + ": " + _0x5238(0x271) + (_0x36acab.repeated && "array" !== _0x5238(0x271) ? '[]' : _0x36acab.map && true ? "{k:" + _0x36acab.keyType + '}' : '') + " expected");
              break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
              _0x2a5df0("if(!util.key64Re.test(%s))", _0x643a52)('return%j', _0x36acab.name + ": " + _0x5238(0x8a3) + (_0x36acab.repeated && "array" !== _0x5238(0x8a3) ? '[]' : _0x36acab.map && true ? "{k:" + _0x36acab.keyType + '}' : '') + " expected");
              break;
            case "bool":
              _0x2a5df0("if(!util.key2Re.test(%s))", _0x643a52)("return%j", _0x36acab.name + ": " + _0x5238(0x69e) + (_0x36acab.repeated && "array" !== _0x5238(0x69e) ? '[]' : _0x36acab.map && true ? "{k:" + _0x36acab.keyType + '}' : '') + " expected");
          }
          return _0x2a5df0;
        }
        _0x4cee8b.exports;
      }, function () {
        return {
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/converter.js", function (_0x3a6bd9, _0x2dc5d5, _0x59f6d8, _0x2ed551, _0x1a4ba0) {
        var _0x46fb90 = _0x2dc5d5("./enum");
        var _0x59b87e = _0x2dc5d5("./util");
        function _0x579c97(_0x3e1fcb, _0x31f40a, _0xf2387e, _0x455f96) {
          if (_0x31f40a.resolvedType) {
            if (_0x31f40a.resolvedType instanceof _0x46fb90) {
              _0x3e1fcb("switch(d%s){", _0x455f96);
              var _0x1bdc03 = _0x31f40a.resolvedType.values;
              var _0x4e6d83 = Object.keys(_0x1bdc03);
              for (var _0x231d2f = 0x0; _0x231d2f < _0x4e6d83.length; ++_0x231d2f) {
                if (_0x31f40a.repeated && _0x1bdc03[_0x4e6d83[_0x231d2f]] === _0x31f40a.typeDefault) {
                  _0x3e1fcb("default:");
                }
                _0x3e1fcb("case%j:", _0x4e6d83[_0x231d2f])("case %i:", _0x1bdc03[_0x4e6d83[_0x231d2f]])("m%s=%j", _0x455f96, _0x1bdc03[_0x4e6d83[_0x231d2f]])('break');
              }
              _0x3e1fcb('}');
            } else {
              _0x3e1fcb("if(typeof d%s!==\"object\")", _0x455f96)("throw TypeError(%j)", _0x31f40a.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", _0x455f96, _0xf2387e, _0x455f96);
            }
          } else {
            var _0x44577c = false;
            switch (_0x31f40a.type) {
              case "double":
              case "float":
                _0x3e1fcb("m%s=Number(d%s)", _0x455f96, _0x455f96);
                break;
              case 'uint32':
              case "fixed32":
                _0x3e1fcb("m%s=d%s>>>0", _0x455f96, _0x455f96);
                break;
              case "int32":
              case "sint32":
              case "sfixed32":
                _0x3e1fcb('m%s=d%s|0', _0x455f96, _0x455f96);
                break;
              case "uint64":
                _0x44577c = true;
              case "int64":
              case "sint64":
              case 'fixed64':
              case "sfixed64":
                _0x3e1fcb('if(util.Long)')("(m%s=util.Long.fromValue(d%s)).unsigned=%j", _0x455f96, _0x455f96, _0x44577c)("else if(typeof d%s===\"string\")", _0x455f96)("m%s=parseInt(d%s,10)", _0x455f96, _0x455f96)("else if(typeof d%s===\"number\")", _0x455f96)("m%s=d%s", _0x455f96, _0x455f96)("else if(typeof d%s===\"object\")", _0x455f96)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", _0x455f96, _0x455f96, _0x455f96, _0x44577c ? 'true' : '');
                break;
              case 'bytes':
                _0x3e1fcb("if(typeof d%s===\"string\")", _0x455f96)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", _0x455f96, _0x455f96, _0x455f96)("else if(d%s.length)", _0x455f96)("m%s=d%s", _0x455f96, _0x455f96);
                break;
              case "string":
                _0x3e1fcb("m%s=String(d%s)", _0x455f96, _0x455f96);
                break;
              case "bool":
                _0x3e1fcb("m%s=Boolean(d%s)", _0x455f96, _0x455f96);
            }
          }
          return _0x3e1fcb;
        }
        function _0x261510(_0x31449c, _0x45637b, _0x5347af, _0x35d8ca) {
          if (_0x45637b.resolvedType) {
            if (_0x45637b.resolvedType instanceof _0x46fb90) {
              _0x31449c("d%s=o.enums===String?types[%i].values[m%s]:m%s", _0x35d8ca, _0x5347af, _0x35d8ca, _0x35d8ca);
            } else {
              _0x31449c("d%s=types[%i].toObject(m%s,o)", _0x35d8ca, _0x5347af, _0x35d8ca);
            }
          } else {
            var _0x5748b3 = false;
            switch (_0x45637b.type) {
              case "double":
              case "float":
                _0x31449c("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", _0x35d8ca, _0x35d8ca, _0x35d8ca, _0x35d8ca);
                break;
              case "uint64":
                _0x5748b3 = true;
              case "int64":
              case 'sint64':
              case "fixed64":
              case 'sfixed64':
                _0x31449c("if(typeof m%s===\"number\")", _0x35d8ca)("d%s=o.longs===String?String(m%s):m%s", _0x35d8ca, _0x35d8ca, _0x35d8ca)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", _0x35d8ca, _0x35d8ca, _0x35d8ca, _0x35d8ca, _0x5748b3 ? 'true' : '', _0x35d8ca);
                break;
              case "bytes":
                _0x31449c("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", _0x35d8ca, _0x35d8ca, _0x35d8ca, _0x35d8ca, _0x35d8ca);
                break;
              default:
                _0x31449c("d%s=m%s", _0x35d8ca, _0x35d8ca);
            }
          }
          return _0x31449c;
        }
        _0x3a6bd9.fromObject = function (_0x368d63) {
          var _0x61250a = _0x368d63.fieldsArray;
          var _0x3f6b35 = _0x59b87e.codegen(['d'], _0x368d63.name + '$fromObject')("if(d instanceof this.ctor)")("return d");
          if (!_0x61250a.length) {
            return _0x3f6b35("return new this.ctor");
          }
          _0x3f6b35("var m=new this.ctor");
          for (var _0x215d1d = 0x0; _0x215d1d < _0x61250a.length; ++_0x215d1d) {
            var _0x211826 = _0x61250a[_0x215d1d].resolve();
            var _0x4277d1 = _0x59b87e.safeProp(_0x211826.name);
            if (_0x211826.map) {
              _0x3f6b35('if(d%s){', _0x4277d1)("if(typeof d%s!==\"object\")", _0x4277d1)("throw TypeError(%j)", _0x211826.fullName + ": object expected")("m%s={}", _0x4277d1)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", _0x4277d1);
              _0x579c97(_0x3f6b35, _0x211826, _0x215d1d, _0x4277d1 + "[ks[i]]")('}')('}');
            } else if (_0x211826.repeated) {
              _0x3f6b35("if(d%s){", _0x4277d1)("if(!Array.isArray(d%s))", _0x4277d1)("throw TypeError(%j)", _0x211826.fullName + ": array expected")("m%s=[]", _0x4277d1)("for(var i=0;i<d%s.length;++i){", _0x4277d1);
              _0x579c97(_0x3f6b35, _0x211826, _0x215d1d, _0x4277d1 + "[i]")('}')('}');
            } else {
              if (!(_0x211826.resolvedType instanceof _0x46fb90)) {
                _0x3f6b35('if(d%s!=null){', _0x4277d1);
              }
              _0x579c97(_0x3f6b35, _0x211826, _0x215d1d, _0x4277d1);
              if (!(_0x211826.resolvedType instanceof _0x46fb90)) {
                _0x3f6b35('}');
              }
            }
          }
          return _0x3f6b35("return m");
        };
        _0x3a6bd9.toObject = function (_0x31fd5b) {
          var _0x7e72f9 = _0x31fd5b.fieldsArray.slice().sort(_0x59b87e.compareFieldsById);
          if (!_0x7e72f9.length) {
            return _0x59b87e.codegen()("return {}");
          }
          var _0xf98c73 = _0x59b87e.codegen(['m', 'o'], _0x31fd5b.name + '$toObject')("if(!o)")('o={}')("var d={}");
          var _0x4f1688 = [];
          var _0x11749c = [];
          var _0x50a4f8 = [];
          for (var _0x11f88e = 0x0; _0x11f88e < _0x7e72f9.length; ++_0x11f88e) {
            if (!_0x7e72f9[_0x11f88e].partOf) {
              (_0x7e72f9[_0x11f88e].resolve().repeated ? _0x4f1688 : _0x7e72f9[_0x11f88e].map ? _0x11749c : _0x50a4f8).push(_0x7e72f9[_0x11f88e]);
            }
          }
          if (_0x4f1688.length) {
            _0xf98c73("if(o.arrays||o.defaults){");
            for (_0x11f88e = 0x0; _0x11f88e < _0x4f1688.length; ++_0x11f88e) {
              _0xf98c73("d%s=[]", _0x59b87e.safeProp(_0x4f1688[_0x11f88e].name));
            }
            _0xf98c73('}');
          }
          if (_0x11749c.length) {
            _0xf98c73("if(o.objects||o.defaults){");
            for (_0x11f88e = 0x0; _0x11f88e < _0x11749c.length; ++_0x11f88e) {
              _0xf98c73("d%s={}", _0x59b87e.safeProp(_0x11749c[_0x11f88e].name));
            }
            _0xf98c73('}');
          }
          if (_0x50a4f8.length) {
            _0xf98c73("if(o.defaults){");
            for (_0x11f88e = 0x0; _0x11f88e < _0x50a4f8.length; ++_0x11f88e) {
              var _0xf9f233 = _0x50a4f8[_0x11f88e];
              var _0x263d77 = _0x59b87e.safeProp(_0xf9f233.name);
              if (_0xf9f233.resolvedType instanceof _0x46fb90) {
                _0xf98c73('d%s=o.enums===String?%j:%j', _0x263d77, _0xf9f233.resolvedType.valuesById[_0xf9f233.typeDefault], _0xf9f233.typeDefault);
              } else {
                if (_0xf9f233.long) {
                  _0xf98c73('if(util.Long){')("var n=new util.Long(%i,%i,%j)", _0xf9f233.typeDefault.low, _0xf9f233.typeDefault.high, _0xf9f233.typeDefault.unsigned)('d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n', _0x263d77)('}else')("d%s=o.longs===String?%j:%i", _0x263d77, _0xf9f233.typeDefault.toString(), _0xf9f233.typeDefault.toNumber());
                } else {
                  if (_0xf9f233.bytes) {
                    var _0x3e7d70 = '[' + Array.prototype.slice.call(_0xf9f233.typeDefault).join(',') + ']';
                    _0xf98c73("if(o.bytes===String)d%s=%j", _0x263d77, String.fromCharCode.apply(String, _0xf9f233.typeDefault))("else{")('d%s=%s', _0x263d77, _0x3e7d70)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", _0x263d77, _0x263d77)('}');
                  } else {
                    _0xf98c73("d%s=%j", _0x263d77, _0xf9f233.typeDefault);
                  }
                }
              }
            }
            _0xf98c73('}');
          }
          var _0x41c88b = false;
          for (_0x11f88e = 0x0; _0x11f88e < _0x7e72f9.length; ++_0x11f88e) {
            _0xf9f233 = _0x7e72f9[_0x11f88e];
            var _0x5caa1e = _0x31fd5b._fieldsArray.indexOf(_0xf9f233);
            _0x263d77 = _0x59b87e.safeProp(_0xf9f233.name);
            if (_0xf9f233.map) {
              if (!_0x41c88b) {
                _0x41c88b = true;
                _0xf98c73("var ks2");
              }
              _0xf98c73("if(m%s&&(ks2=Object.keys(m%s)).length){", _0x263d77, _0x263d77)("d%s={}", _0x263d77)("for(var j=0;j<ks2.length;++j){");
              _0x261510(_0xf98c73, _0xf9f233, _0x5caa1e, _0x263d77 + '[ks2[j]]')('}');
            } else if (_0xf9f233.repeated) {
              _0xf98c73("if(m%s&&m%s.length){", _0x263d77, _0x263d77)("d%s=[]", _0x263d77)("for(var j=0;j<m%s.length;++j){", _0x263d77);
              _0x261510(_0xf98c73, _0xf9f233, _0x5caa1e, _0x263d77 + '[j]')('}');
            } else {
              _0xf98c73("if(m%s!=null&&m.hasOwnProperty(%j)){", _0x263d77, _0xf9f233.name);
              _0x261510(_0xf98c73, _0xf9f233, _0x5caa1e, _0x263d77);
              if (_0xf9f233.partOf) {
                _0xf98c73("if(o.oneofs)")('d%s=%j', _0x59b87e.safeProp(_0xf9f233.partOf.name), _0xf9f233.name);
              }
            }
            _0xf98c73('}');
          }
          return _0xf98c73("return d");
        };
        _0x59f6d8.exports;
      }, function () {
        return {
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x11aabe.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js', function (_0x5ca75f, _0x576946, _0x2292e6, _0x376c48, _0x178c40) {
        var _0xe5d95 = _0x576946("./message");
        _0x5ca75f[".google.protobuf.Any"] = {
          'fromObject': function (_0x45cf84) {
            if (_0x45cf84 && _0x45cf84['@type']) {
              var _0x39a7da = _0x45cf84["@type"].substring(_0x45cf84["@type"].lastIndexOf('/') + 0x1);
              var _0x11b796 = this.lookup(_0x39a7da);
              if (_0x11b796) {
                var _0x142b47 = '.' === _0x45cf84["@type"].charAt(0x0) ? _0x45cf84['@type'].substr(0x1) : _0x45cf84["@type"];
                if (-0x1 === _0x142b47.indexOf('/')) {
                  _0x142b47 = '/' + _0x142b47;
                }
                return this.create({
                  'type_url': _0x142b47,
                  'value': _0x11b796.encode(_0x11b796.fromObject(_0x45cf84)).finish()
                });
              }
            }
            return this.fromObject(_0x45cf84);
          },
          'toObject': function (_0xbc1de0, _0xcb38e5) {
            var _0x597e2d = '';
            var _0x20547c = '';
            if (_0xcb38e5 && _0xcb38e5.json && _0xbc1de0.type_url && _0xbc1de0.value) {
              _0x20547c = _0xbc1de0.type_url.substring(_0xbc1de0.type_url.lastIndexOf('/') + 0x1);
              _0x597e2d = _0xbc1de0.type_url.substring(0x0, _0xbc1de0.type_url.lastIndexOf('/') + 0x1);
              var _0x1721fb = this.lookup(_0x20547c);
              if (_0x1721fb) {
                _0xbc1de0 = _0x1721fb.decode(_0xbc1de0.value);
              }
            }
            if (!(_0xbc1de0 instanceof this.ctor) && _0xbc1de0 instanceof _0xe5d95) {
              var _0x3af4db = _0xbc1de0.$type.toObject(_0xbc1de0, _0xcb38e5);
              if ('' === _0x597e2d) {
                _0x597e2d = "type.googleapis.com/";
              }
              _0x20547c = _0x597e2d + ('.' === _0xbc1de0.$type.fullName[0x0] ? _0xbc1de0.$type.fullName.substr(0x1) : _0xbc1de0.$type.fullName);
              _0x3af4db['@type'] = _0x20547c;
              return _0x3af4db;
            }
            return this.toObject(_0xbc1de0, _0xcb38e5);
          }
        };
        _0x2292e6.exports;
      }, function () {
        return {
          './message': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/message.js"
        };
      });
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/type.js", function (_0x207099, _0x19b28b, _0x1719f0, _0x27501b, _0x412242) {
        _0x1719f0.exports = _0x335529;
        var _0x2937e8 = _0x19b28b("./namespace");
        ((_0x335529.prototype = Object.create(_0x2937e8.prototype)).constructor = _0x335529).className = "Type";
        var _0x331a1e = _0x19b28b("./enum");
        var _0x388718 = _0x19b28b("./oneof");
        var _0x1843bd = _0x19b28b("./field");
        var _0xf0beb3 = _0x19b28b("./mapfield");
        var _0xd697db = _0x19b28b("./service");
        var _0x275652 = _0x19b28b("./message");
        var _0x1428e2 = _0x19b28b("./reader");
        var _0x1a3b8c = _0x19b28b("./writer");
        var _0x201e2c = _0x19b28b('./util');
        var _0x31203a = _0x19b28b("./encoder");
        var _0x659c41 = _0x19b28b("./decoder");
        var _0x2dcc98 = _0x19b28b("./verifier");
        var _0x5ba656 = _0x19b28b("./converter");
        var _0x433604 = _0x19b28b("./wrappers");
        function _0x335529(_0x188623, _0x2327f7) {
          _0x2937e8.call(this, _0x188623, _0x2327f7);
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
        function _0x417b03(_0x35915e) {
          _0x35915e._fieldsById = _0x35915e._fieldsArray = _0x35915e._oneofsArray = null;
          delete _0x35915e.encode;
          delete _0x35915e.decode;
          delete _0x35915e.verify;
          return _0x35915e;
        }
        Object.defineProperties(_0x335529.prototype, {
          'fieldsById': {
            'get': function () {
              if (this._fieldsById) {
                return this._fieldsById;
              }
              this._fieldsById = {};
              var _0x5d2b6a = Object.keys(this.fields);
              for (var _0xfe8782 = 0x0; _0xfe8782 < _0x5d2b6a.length; ++_0xfe8782) {
                var _0x39adfe = this.fields[_0x5d2b6a[_0xfe8782]];
                var _0x2cfaba = _0x39adfe.id;
                if (this._fieldsById[_0x2cfaba]) {
                  throw Error("duplicate id " + _0x2cfaba + " in " + this);
                }
                this._fieldsById[_0x2cfaba] = _0x39adfe;
              }
              return this._fieldsById;
            }
          },
          'fieldsArray': {
            'get': function () {
              return this._fieldsArray || (this._fieldsArray = _0x201e2c.toArray(this.fields));
            }
          },
          'oneofsArray': {
            'get': function () {
              return this._oneofsArray || (this._oneofsArray = _0x201e2c.toArray(this.oneofs));
            }
          },
          'ctor': {
            'get': function () {
              return this._ctor || (this.ctor = _0x335529.generateConstructor(this)());
            },
            'set': function (_0x1c441d) {
              var _0x574fc4 = _0x1c441d.prototype;
              if (!(_0x574fc4 instanceof _0x275652)) {
                (_0x1c441d.prototype = new _0x275652()).constructor = _0x1c441d;
                _0x201e2c.merge(_0x1c441d.prototype, _0x574fc4);
              }
              _0x1c441d.$type = _0x1c441d.prototype.$type = this;
              _0x201e2c.merge(_0x1c441d, _0x275652, true);
              this._ctor = _0x1c441d;
              for (var _0x284175 = 0x0; _0x284175 < this.fieldsArray.length; ++_0x284175) {
                this._fieldsArray[_0x284175].resolve();
              }
              var _0x445c3a = {};
              for (_0x284175 = 0x0; _0x284175 < this.oneofsArray.length; ++_0x284175) {
                _0x445c3a[this._oneofsArray[_0x284175].resolve().name] = {
                  'get': _0x201e2c.oneOfGetter(this._oneofsArray[_0x284175].oneof),
                  'set': _0x201e2c.oneOfSetter(this._oneofsArray[_0x284175].oneof)
                };
              }
              if (_0x284175) {
                Object.defineProperties(_0x1c441d.prototype, _0x445c3a);
              }
            }
          }
        });
        _0x335529.generateConstructor = function (_0x29f313) {
          var _0x166dd1;
          var _0x4da015 = _0x201e2c.codegen(['p'], _0x29f313.name);
          for (var _0x532e13 = 0x0; _0x532e13 < _0x29f313.fieldsArray.length; ++_0x532e13) {
            if ((_0x166dd1 = _0x29f313._fieldsArray[_0x532e13]).map) {
              _0x4da015("this%s={}", _0x201e2c.safeProp(_0x166dd1.name));
            } else if (_0x166dd1.repeated) {
              _0x4da015("this%s=[]", _0x201e2c.safeProp(_0x166dd1.name));
            }
          }
          return _0x4da015("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
        };
        _0x335529.fromJSON = function (_0x522d80, _0xec4fff) {
          var _0x2c6648 = new _0x335529(_0x522d80, _0xec4fff.options);
          _0x2c6648.extensions = _0xec4fff.extensions;
          _0x2c6648.reserved = _0xec4fff.reserved;
          var _0x3a462a = Object.keys(_0xec4fff.fields);
          for (var _0x30275e = 0x0; _0x30275e < _0x3a462a.length; ++_0x30275e) {
            _0x2c6648.add((undefined !== _0xec4fff.fields[_0x3a462a[_0x30275e]].keyType ? _0xf0beb3.fromJSON : _0x1843bd.fromJSON)(_0x3a462a[_0x30275e], _0xec4fff.fields[_0x3a462a[_0x30275e]]));
          }
          if (_0xec4fff.oneofs) {
            _0x3a462a = Object.keys(_0xec4fff.oneofs);
            for (_0x30275e = 0x0; _0x30275e < _0x3a462a.length; ++_0x30275e) {
              _0x2c6648.add(_0x388718.fromJSON(_0x3a462a[_0x30275e], _0xec4fff.oneofs[_0x3a462a[_0x30275e]]));
            }
          }
          if (_0xec4fff.nested) {
            _0x3a462a = Object.keys(_0xec4fff.nested);
            for (_0x30275e = 0x0; _0x30275e < _0x3a462a.length; ++_0x30275e) {
              var _0x59b369 = _0xec4fff.nested[_0x3a462a[_0x30275e]];
              _0x2c6648.add((undefined !== _0x59b369.id ? _0x1843bd.fromJSON : undefined !== _0x59b369.fields ? _0x335529.fromJSON : undefined !== _0x59b369.values ? _0x331a1e.fromJSON : undefined !== _0x59b369.methods ? _0xd697db.fromJSON : _0x2937e8.fromJSON)(_0x3a462a[_0x30275e], _0x59b369));
            }
          }
          if (_0xec4fff.extensions && _0xec4fff.extensions.length) {
            _0x2c6648.extensions = _0xec4fff.extensions;
          }
          if (_0xec4fff.reserved && _0xec4fff.reserved.length) {
            _0x2c6648.reserved = _0xec4fff.reserved;
          }
          if (_0xec4fff.group) {
            _0x2c6648.group = true;
          }
          if (_0xec4fff.comment) {
            _0x2c6648.comment = _0xec4fff.comment;
          }
          return _0x2c6648;
        };
        _0x335529.prototype.toJSON = function (_0x18018c) {
          var _0x55d81f = _0x2937e8.prototype.toJSON.call(this, _0x18018c);
          var _0x357627 = !!_0x18018c && Boolean(_0x18018c.keepComments);
          return _0x201e2c.toObject(["options", _0x55d81f && _0x55d81f.options || undefined, 'oneofs', _0x2937e8.arrayToJSON(this.oneofsArray, _0x18018c), "fields", _0x2937e8.arrayToJSON(this.fieldsArray.filter(function (_0x267aa2) {
            return !_0x267aa2.declaringField;
          }), _0x18018c) || {}, 'extensions', this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, "nested", _0x55d81f && _0x55d81f.nested || undefined, "comment", _0x357627 ? this.comment : undefined]);
        };
        _0x335529.prototype.resolveAll = function () {
          var _0x5d8726 = this.fieldsArray;
          for (var _0x551cee = 0x0; _0x551cee < _0x5d8726.length;) {
            _0x5d8726[_0x551cee++].resolve();
          }
          var _0x3c3aba = this.oneofsArray;
          for (_0x551cee = 0x0; _0x551cee < _0x3c3aba.length;) {
            _0x3c3aba[_0x551cee++].resolve();
          }
          return _0x2937e8.prototype.resolveAll.call(this);
        };
        _0x335529.prototype.get = function (_0x3de9d1) {
          return this.fields[_0x3de9d1] || this.oneofs && this.oneofs[_0x3de9d1] || this.nested && this.nested[_0x3de9d1] || null;
        };
        _0x335529.prototype.add = function (_0x39909b) {
          if (this.get(_0x39909b.name)) {
            throw Error("duplicate name '" + _0x39909b.name + "' in " + this);
          }
          if (_0x39909b instanceof _0x1843bd && undefined === _0x39909b.extend) {
            if (this._fieldsById ? this._fieldsById[_0x39909b.id] : this.fieldsById[_0x39909b.id]) {
              throw Error("duplicate id " + _0x39909b.id + " in " + this);
            }
            if (this.isReservedId(_0x39909b.id)) {
              throw Error("id " + _0x39909b.id + " is reserved in " + this);
            }
            if (this.isReservedName(_0x39909b.name)) {
              throw Error("name '" + _0x39909b.name + "' is reserved in " + this);
            }
            if (_0x39909b.parent) {
              _0x39909b.parent.remove(_0x39909b);
            }
            this.fields[_0x39909b.name] = _0x39909b;
            _0x39909b.message = this;
            _0x39909b.onAdd(this);
            return _0x417b03(this);
          }
          return _0x39909b instanceof _0x388718 ? (this.oneofs || (this.oneofs = {}), this.oneofs[_0x39909b.name] = _0x39909b, _0x39909b.onAdd(this), _0x417b03(this)) : _0x2937e8.prototype.add.call(this, _0x39909b);
        };
        _0x335529.prototype.remove = function (_0x5961ec) {
          if (_0x5961ec instanceof _0x1843bd && undefined === _0x5961ec.extend) {
            if (!this.fields || this.fields[_0x5961ec.name] !== _0x5961ec) {
              throw Error(_0x5961ec + " is not a member of " + this);
            }
            delete this.fields[_0x5961ec.name];
            _0x5961ec.parent = null;
            _0x5961ec.onRemove(this);
            return _0x417b03(this);
          }
          if (_0x5961ec instanceof _0x388718) {
            if (!this.oneofs || this.oneofs[_0x5961ec.name] !== _0x5961ec) {
              throw Error(_0x5961ec + " is not a member of " + this);
            }
            delete this.oneofs[_0x5961ec.name];
            _0x5961ec.parent = null;
            _0x5961ec.onRemove(this);
            return _0x417b03(this);
          }
          return _0x2937e8.prototype.remove.call(this, _0x5961ec);
        };
        _0x335529.prototype.isReservedId = function (_0x33032c) {
          return _0x2937e8.isReservedId(this.reserved, _0x33032c);
        };
        _0x335529.prototype.isReservedName = function (_0x207580) {
          return _0x2937e8.isReservedName(this.reserved, _0x207580);
        };
        _0x335529.prototype.create = function (_0x563b6b) {
          return new this.ctor(_0x563b6b);
        };
        _0x335529.prototype.setup = function () {
          var _0x5aee5f = this.fullName;
          var _0x20a5d2 = [];
          for (var _0x54ce12 = 0x0; _0x54ce12 < this.fieldsArray.length; ++_0x54ce12) {
            _0x20a5d2.push(this._fieldsArray[_0x54ce12].resolve().resolvedType);
          }
          this.encode = _0x31203a(this)({
            'Writer': _0x1a3b8c,
            'types': _0x20a5d2,
            'util': _0x201e2c
          });
          this.decode = _0x659c41(this)({
            'Reader': _0x1428e2,
            'types': _0x20a5d2,
            'util': _0x201e2c
          });
          this.verify = _0x2dcc98(this)({
            'types': _0x20a5d2,
            'util': _0x201e2c
          });
          this.fromObject = _0x5ba656.fromObject(this)({
            'types': _0x20a5d2,
            'util': _0x201e2c
          });
          this.toObject = _0x5ba656.toObject(this)({
            'types': _0x20a5d2,
            'util': _0x201e2c
          });
          var _0x1d3d0d = _0x433604[_0x5aee5f];
          if (_0x1d3d0d) {
            var _0x44a157 = Object.create(this);
            _0x44a157.fromObject = this.fromObject;
            this.fromObject = _0x1d3d0d.fromObject.bind(_0x44a157);
            _0x44a157.toObject = this.toObject;
            this.toObject = _0x1d3d0d.toObject.bind(_0x44a157);
          }
          return this;
        };
        _0x335529.prototype.encode = function (_0xb673b7, _0x32c9b3) {
          return this.setup().encode(_0xb673b7, _0x32c9b3);
        };
        _0x335529.prototype.encodeDelimited = function (_0x267c94, _0x30bd69) {
          return this.encode(_0x267c94, _0x30bd69 && _0x30bd69.len ? _0x30bd69.fork() : _0x30bd69).ldelim();
        };
        _0x335529.prototype.decode = function (_0x815ca2, _0x5853df) {
          return this.setup().decode(_0x815ca2, _0x5853df);
        };
        _0x335529.prototype.decodeDelimited = function (_0x20c47e) {
          if (!(_0x20c47e instanceof _0x1428e2)) {
            _0x20c47e = _0x1428e2.create(_0x20c47e);
          }
          return this.decode(_0x20c47e, _0x20c47e.uint32());
        };
        _0x335529.prototype.verify = function (_0x4a424e) {
          return this.setup().verify(_0x4a424e);
        };
        _0x335529.prototype.fromObject = function (_0x52cc7b) {
          return this.setup().fromObject(_0x52cc7b);
        };
        _0x335529.prototype.toObject = function (_0xca0536, _0x3ab1d6) {
          return this.setup().toObject(_0xca0536, _0x3ab1d6);
        };
        _0x335529.d = function (_0x2aa063) {
          return function (_0x4b003e) {
            _0x201e2c.decorateType(_0x4b003e, _0x2aa063);
          };
        };
        _0x1719f0.exports;
      }, function () {
        return {
          './namespace': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './oneof': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js',
          './field': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './mapfield': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './service': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          './message': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          './reader': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/reader.js',
          './writer': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './encoder': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js',
          './decoder': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          './verifier': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          './converter': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          './wrappers': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js'
        };
      });
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/root.js", function (_0x3fae1c, _0x4ffab1, _0x49b9b0, _0x50a4ff, _0x432683) {
        _0x49b9b0.exports = _0x33003d;
        var _0x23d58a = _0x4ffab1("./namespace");
        ((_0x33003d.prototype = Object.create(_0x23d58a.prototype)).constructor = _0x33003d).className = 'Root';
        var _0x1122f9;
        var _0x15d0fc;
        var _0x169431;
        var _0x45a427 = _0x4ffab1("./field");
        var _0x292d28 = _0x4ffab1("./enum");
        var _0x4c0971 = _0x4ffab1("./oneof");
        var _0x35cb16 = _0x4ffab1("./util");
        function _0x33003d(_0x4c5249) {
          _0x23d58a.call(this, '', _0x4c5249);
          this.deferred = [];
          this.files = [];
        }
        function _0x4ff0c2() {}
        _0x33003d.fromJSON = function (_0x208818, _0x88cb6c) {
          if (!_0x88cb6c) {
            _0x88cb6c = new _0x33003d();
          }
          if (_0x208818.options) {
            _0x88cb6c.setOptions(_0x208818.options);
          }
          return _0x88cb6c.addJSON(_0x208818.nested);
        };
        _0x33003d.prototype.resolvePath = _0x35cb16.path.resolve;
        _0x33003d.prototype.fetch = _0x35cb16.fetch;
        _0x33003d.prototype.load = function _0x5ed222(_0x46e2a6, _0x1b7ed5, _0x5246a3) {
          if ("function" == typeof _0x1b7ed5) {
            _0x5246a3 = _0x1b7ed5;
            _0x1b7ed5 = undefined;
          }
          var _0x48daa9 = this;
          if (!_0x5246a3) {
            return _0x35cb16.asPromise(_0x5ed222, _0x48daa9, _0x46e2a6, _0x1b7ed5);
          }
          var _0x428657 = _0x5246a3 === _0x4ff0c2;
          function _0x2c95e1(_0x452c52, _0x4252a7) {
            if (_0x5246a3) {
              var _0x527cb5 = _0x5246a3;
              _0x5246a3 = null;
              if (_0x428657) {
                throw _0x452c52;
              }
              _0x527cb5(_0x452c52, _0x4252a7);
            }
          }
          function _0x49822d(_0x31f6e0) {
            var _0x368f54 = _0x31f6e0.lastIndexOf("google/protobuf/");
            if (_0x368f54 > -0x1) {
              var _0x1d1a03 = _0x31f6e0.substring(_0x368f54);
              if (_0x1d1a03 in _0x169431) {
                return _0x1d1a03;
              }
            }
            return null;
          }
          function _0x52d9d3(_0x1f9a10, _0x33881c) {
            try {
              if (_0x35cb16.isString(_0x33881c) && '{' === _0x33881c.charAt(0x0)) {
                _0x33881c = JSON.parse(_0x33881c);
              }
              if (_0x35cb16.isString(_0x33881c)) {
                _0x15d0fc.filename = _0x1f9a10;
                var _0x4d8a55;
                var _0x6414de = _0x15d0fc(_0x33881c, _0x48daa9, _0x1b7ed5);
                var _0x8f367 = 0x0;
                if (_0x6414de.imports) {
                  for (; _0x8f367 < _0x6414de.imports.length; ++_0x8f367) {
                    if (_0x4d8a55 = _0x49822d(_0x6414de.imports[_0x8f367]) || _0x48daa9.resolvePath(_0x1f9a10, _0x6414de.imports[_0x8f367])) {
                      _0x1d97e7(_0x4d8a55);
                    }
                  }
                }
                if (_0x6414de.weakImports) {
                  for (_0x8f367 = 0x0; _0x8f367 < _0x6414de.weakImports.length; ++_0x8f367) {
                    if (_0x4d8a55 = _0x49822d(_0x6414de.weakImports[_0x8f367]) || _0x48daa9.resolvePath(_0x1f9a10, _0x6414de.weakImports[_0x8f367])) {
                      _0x1d97e7(_0x4d8a55, true);
                    }
                  }
                }
              } else {
                _0x48daa9.setOptions(_0x33881c.options).addJSON(_0x33881c.nested);
              }
            } catch (_0x1fcb9b) {
              _0x2c95e1(_0x1fcb9b);
            }
            if (!(_0x428657 || _0x5cb60a)) {
              _0x2c95e1(null, _0x48daa9);
            }
          }
          function _0x1d97e7(_0x3fbfa4, _0x103e19) {
            if (!(_0x48daa9.files.indexOf(_0x3fbfa4) > -0x1)) {
              _0x48daa9.files.push(_0x3fbfa4);
              if (_0x3fbfa4 in _0x169431) {
                if (_0x428657) {
                  _0x52d9d3(_0x3fbfa4, _0x169431[_0x3fbfa4]);
                } else {
                  ++_0x5cb60a;
                  setTimeout(function () {
                    --_0x5cb60a;
                    _0x52d9d3(_0x3fbfa4, _0x169431[_0x3fbfa4]);
                  });
                }
              } else {
                if (_0x428657) {
                  var _0x15ec30;
                  try {
                    _0x15ec30 = _0x35cb16.fs.readFileSync(_0x3fbfa4).toString("utf8");
                  } catch (_0x85450c) {
                    return void (_0x103e19 || _0x2c95e1(_0x85450c));
                  }
                  _0x52d9d3(_0x3fbfa4, _0x15ec30);
                } else {
                  ++_0x5cb60a;
                  _0x48daa9.fetch(_0x3fbfa4, function (_0x31a9ad, _0x2b3c49) {
                    --_0x5cb60a;
                    if (_0x5246a3) {
                      if (_0x31a9ad) {
                        if (_0x103e19) {
                          if (!_0x5cb60a) {
                            _0x2c95e1(null, _0x48daa9);
                          }
                        } else {
                          _0x2c95e1(_0x31a9ad);
                        }
                      } else {
                        _0x52d9d3(_0x3fbfa4, _0x2b3c49);
                      }
                    }
                  });
                }
              }
            }
          }
          var _0x5cb60a = 0x0;
          if (_0x35cb16.isString(_0x46e2a6)) {
            _0x46e2a6 = [_0x46e2a6];
          }
          var _0x18838e;
          for (var _0x2b9532 = 0x0; _0x2b9532 < _0x46e2a6.length; ++_0x2b9532) {
            if (_0x18838e = _0x48daa9.resolvePath('', _0x46e2a6[_0x2b9532])) {
              _0x1d97e7(_0x18838e);
            }
          }
          if (_0x428657) {
            return _0x48daa9;
          }
          if (!_0x5cb60a) {
            _0x2c95e1(null, _0x48daa9);
          }
        };
        _0x33003d.prototype.loadSync = function (_0x46faf7, _0x3ad333) {
          if (!_0x35cb16.isNode) {
            throw Error("not supported");
          }
          return this.load(_0x46faf7, _0x3ad333, _0x4ff0c2);
        };
        _0x33003d.prototype.resolveAll = function () {
          if (this.deferred.length) {
            throw Error("unresolvable extensions: " + this.deferred.map(function (_0x264fcd) {
              return "'extend " + _0x264fcd.extend + "' in " + _0x264fcd.parent.fullName;
            }).join(", "));
          }
          return _0x23d58a.prototype.resolveAll.call(this);
        };
        var _0x4c7eb3 = /^[A-Z]/;
        function _0x2eee88(_0x3e03ae, _0x38360d) {
          var _0x1f3c5b = _0x38360d.parent.lookup(_0x38360d.extend);
          if (_0x1f3c5b) {
            var _0x317c7f = new _0x45a427(_0x38360d.fullName, _0x38360d.id, _0x38360d.type, _0x38360d.rule, undefined, _0x38360d.options);
            _0x317c7f.declaringField = _0x38360d;
            _0x38360d.extensionField = _0x317c7f;
            _0x1f3c5b.add(_0x317c7f);
            return true;
          }
          return false;
        }
        _0x33003d.prototype._handleAdd = function (_0x442143) {
          if (_0x442143 instanceof _0x45a427) {
            if (!(undefined === _0x442143.extend || _0x442143.extensionField || _0x2eee88(0x0, _0x442143))) {
              this.deferred.push(_0x442143);
            }
          } else {
            if (_0x442143 instanceof _0x292d28) {
              if (_0x4c7eb3.test(_0x442143.name)) {
                _0x442143.parent[_0x442143.name] = _0x442143.values;
              }
            } else {
              if (!(_0x442143 instanceof _0x4c0971)) {
                if (_0x442143 instanceof _0x1122f9) {
                  for (var _0x5973eb = 0x0; _0x5973eb < this.deferred.length;) {
                    if (_0x2eee88(0x0, this.deferred[_0x5973eb])) {
                      this.deferred.splice(_0x5973eb, 0x1);
                    } else {
                      ++_0x5973eb;
                    }
                  }
                }
                for (var _0x383077 = 0x0; _0x383077 < _0x442143.nestedArray.length; ++_0x383077) {
                  this._handleAdd(_0x442143._nestedArray[_0x383077]);
                }
                if (_0x4c7eb3.test(_0x442143.name)) {
                  _0x442143.parent[_0x442143.name] = _0x442143;
                }
              }
            }
          }
        };
        _0x33003d.prototype._handleRemove = function (_0x142b2e) {
          if (_0x142b2e instanceof _0x45a427) {
            if (undefined !== _0x142b2e.extend) {
              if (_0x142b2e.extensionField) {
                _0x142b2e.extensionField.parent.remove(_0x142b2e.extensionField);
                _0x142b2e.extensionField = null;
              } else {
                var _0x4c6a30 = this.deferred.indexOf(_0x142b2e);
                if (_0x4c6a30 > -0x1) {
                  this.deferred.splice(_0x4c6a30, 0x1);
                }
              }
            }
          } else {
            if (_0x142b2e instanceof _0x292d28) {
              if (_0x4c7eb3.test(_0x142b2e.name)) {
                delete _0x142b2e.parent[_0x142b2e.name];
              }
            } else {
              if (_0x142b2e instanceof _0x23d58a) {
                for (var _0x55c13b = 0x0; _0x55c13b < _0x142b2e.nestedArray.length; ++_0x55c13b) {
                  this._handleRemove(_0x142b2e._nestedArray[_0x55c13b]);
                }
                if (_0x4c7eb3.test(_0x142b2e.name)) {
                  delete _0x142b2e.parent[_0x142b2e.name];
                }
              }
            }
          }
        };
        _0x33003d._configure = function (_0x3b19e5, _0x32f5e5, _0xd99466) {
          _0x1122f9 = _0x3b19e5;
          _0x15d0fc = _0x32f5e5;
          _0x169431 = _0xd99466;
        };
        _0x49b9b0.exports;
      }, function () {
        return {
          './namespace': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './field': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './oneof': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js',
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util.js", function (_0x3d7396, _0x2eff94, _0x2fab3f, _0x33ec6a, _0x5d140a) {
        var _0x2d415b;
        var _0x5b3f6e;
        var _0x43da0f = _0x2fab3f.exports = _0x2eff94("./util/minimal");
        var _0x335af7 = _0x2eff94("./roots");
        _0x43da0f.codegen = _0x2eff94("@protobufjs/codegen");
        _0x43da0f.fetch = _0x2eff94("@protobufjs/fetch");
        _0x43da0f.path = _0x2eff94("@protobufjs/path");
        _0x43da0f.fs = _0x43da0f.inquire('fs');
        _0x43da0f.toArray = function (_0x3386e6) {
          if (_0x3386e6) {
            var _0x354996 = Object.keys(_0x3386e6);
            var _0x1ff2d0 = new Array(_0x354996.length);
            for (var _0x1537be = 0x0; _0x1537be < _0x354996.length;) {
              _0x1ff2d0[_0x1537be] = _0x3386e6[_0x354996[_0x1537be++]];
            }
            return _0x1ff2d0;
          }
          return [];
        };
        _0x43da0f.toObject = function (_0x4e9aba) {
          var _0x37cf35 = {};
          for (var _0x559f8d = 0x0; _0x559f8d < _0x4e9aba.length;) {
            var _0x5c585f = _0x4e9aba[_0x559f8d++];
            var _0x1944fa = _0x4e9aba[_0x559f8d++];
            if (undefined !== _0x1944fa) {
              _0x37cf35[_0x5c585f] = _0x1944fa;
            }
          }
          return _0x37cf35;
        };
        var _0x4e6f8e = /\\/g;
        var _0x56ffee = /"/g;
        _0x43da0f.isReserved = function (_0xc17bc0) {
          return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(_0xc17bc0);
        };
        _0x43da0f.safeProp = function (_0x315026) {
          return !/^[$\w_]+$/.test(_0x315026) || _0x43da0f.isReserved(_0x315026) ? "[\"" + _0x315026.replace(_0x4e6f8e, "\\\\").replace(_0x56ffee, "\\\"") + "\"]" : '.' + _0x315026;
        };
        _0x43da0f.ucFirst = function (_0x4f708c) {
          return _0x4f708c.charAt(0x0).toUpperCase() + _0x4f708c.substring(0x1);
        };
        var _0x2f5e6f = /_([a-z])/g;
        _0x43da0f.camelCase = function (_0x38fd29) {
          return _0x38fd29.substring(0x0, 0x1) + _0x38fd29.substring(0x1).replace(_0x2f5e6f, function (_0x23b61b, _0x4a2679) {
            return _0x4a2679.toUpperCase();
          });
        };
        _0x43da0f.compareFieldsById = function (_0x57ab54, _0xac5564) {
          return _0x57ab54.id - _0xac5564.id;
        };
        _0x43da0f.decorateType = function (_0x4a8169, _0x13bf5d) {
          if (_0x4a8169.$type) {
            if (_0x13bf5d && _0x4a8169.$type.name !== _0x13bf5d) {
              _0x43da0f.decorateRoot.remove(_0x4a8169.$type);
              _0x4a8169.$type.name = _0x13bf5d;
              _0x43da0f.decorateRoot.add(_0x4a8169.$type);
            }
            return _0x4a8169.$type;
          }
          if (!_0x2d415b) {
            _0x2d415b = _0x2eff94("./type");
          }
          var _0x5a7f92 = new _0x2d415b(_0x13bf5d || _0x4a8169.name);
          _0x43da0f.decorateRoot.add(_0x5a7f92);
          _0x5a7f92.ctor = _0x4a8169;
          Object.defineProperty(_0x4a8169, "$type", {
            'value': _0x5a7f92,
            'enumerable': false
          });
          Object.defineProperty(_0x4a8169.prototype, "$type", {
            'value': _0x5a7f92,
            'enumerable': false
          });
          return _0x5a7f92;
        };
        var _0x6332b8 = 0x0;
        _0x43da0f.decorateEnum = function (_0x37b48c) {
          if (_0x37b48c.$type) {
            return _0x37b48c.$type;
          }
          if (!_0x5b3f6e) {
            _0x5b3f6e = _0x2eff94("./enum");
          }
          var _0x7f83cc = new _0x5b3f6e("Enum" + _0x6332b8++, _0x37b48c);
          _0x43da0f.decorateRoot.add(_0x7f83cc);
          Object.defineProperty(_0x37b48c, "$type", {
            'value': _0x7f83cc,
            'enumerable': false
          });
          return _0x7f83cc;
        };
        _0x43da0f.setProperty = function (_0x161b0d, _0x283b38, _0x39a0cb) {
          if ("object" != typeof _0x161b0d) {
            throw TypeError("dst must be an object");
          }
          if (!_0x283b38) {
            throw TypeError("path must be specified");
          }
          return function _0x26b518(_0x203ae5, _0x4a6f7a, _0x4fef1a) {
            var _0x29e314 = _0x4a6f7a.shift();
            if (_0x4a6f7a.length > 0x0) {
              _0x203ae5[_0x29e314] = _0x26b518(_0x203ae5[_0x29e314] || {}, _0x4a6f7a, _0x4fef1a);
            } else {
              var _0x5be834 = _0x203ae5[_0x29e314];
              if (_0x5be834) {
                _0x4fef1a = [].concat(_0x5be834).concat(_0x4fef1a);
              }
              _0x203ae5[_0x29e314] = _0x4fef1a;
            }
            return _0x203ae5;
          }(_0x161b0d, _0x283b38 = _0x283b38.split('.'), _0x39a0cb);
        };
        Object.defineProperty(_0x43da0f, "decorateRoot", {
          'get': function () {
            return _0x335af7.decorated || (_0x335af7.decorated = new (_0x2eff94("./root"))());
          }
        });
        _0x2fab3f.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          './roots': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/roots.js",
          '@protobufjs/codegen': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js',
          '@protobufjs/fetch': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js",
          '@protobufjs/path': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/@protobufjs/path/index.js',
          './type': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './root': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/root.js"
        };
      });
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/object.js", function (_0x550a98, _0x218ed8, _0x46b0d0, _0x1e4e31, _0x14f08f) {
        _0x46b0d0.exports = _0x2dd20f;
        _0x2dd20f.className = 'ReflectionObject';
        var _0x49a9f8;
        var _0x2907a7 = _0x218ed8("./util");
        function _0x2dd20f(_0x44aac0, _0x315b7b) {
          if (!_0x2907a7.isString(_0x44aac0)) {
            throw TypeError("name must be a string");
          }
          if (_0x315b7b && !_0x2907a7.isObject(_0x315b7b)) {
            throw TypeError("options must be an object");
          }
          this.options = _0x315b7b;
          this.parsedOptions = null;
          this.name = _0x44aac0;
          this.parent = null;
          this.resolved = false;
          this.comment = null;
          this.filename = null;
        }
        Object.defineProperties(_0x2dd20f.prototype, {
          'root': {
            'get': function () {
              for (var _0x4d2f79 = this; null !== _0x4d2f79.parent;) {
                _0x4d2f79 = _0x4d2f79.parent;
              }
              return _0x4d2f79;
            }
          },
          'fullName': {
            'get': function () {
              var _0x47923d = [this.name];
              for (var _0x30f79a = this.parent; _0x30f79a;) {
                _0x47923d.unshift(_0x30f79a.name);
                _0x30f79a = _0x30f79a.parent;
              }
              return _0x47923d.join('.');
            }
          }
        });
        _0x2dd20f.prototype.toJSON = function () {
          throw Error();
        };
        _0x2dd20f.prototype.onAdd = function (_0x5cd4c4) {
          if (this.parent && this.parent !== _0x5cd4c4) {
            this.parent.remove(this);
          }
          this.parent = _0x5cd4c4;
          this.resolved = false;
          var _0x59dbd2 = _0x5cd4c4.root;
          if (_0x59dbd2 instanceof _0x49a9f8) {
            _0x59dbd2._handleAdd(this);
          }
        };
        _0x2dd20f.prototype.onRemove = function (_0x129bef) {
          var _0xd08da2 = _0x129bef.root;
          if (_0xd08da2 instanceof _0x49a9f8) {
            _0xd08da2._handleRemove(this);
          }
          this.parent = null;
          this.resolved = false;
        };
        _0x2dd20f.prototype.resolve = function () {
          if (!this.resolved) {
            if (this.root instanceof _0x49a9f8) {
              this.resolved = true;
            }
          }
          return this;
        };
        _0x2dd20f.prototype.getOption = function (_0x121f41) {
          if (this.options) {
            return this.options[_0x121f41];
          }
        };
        _0x2dd20f.prototype.setOption = function (_0x309f13, _0x16ced4, _0x440767) {
          if (!(_0x440767 && this.options && undefined !== this.options[_0x309f13])) {
            (this.options || (this.options = {}))[_0x309f13] = _0x16ced4;
          }
          return this;
        };
        _0x2dd20f.prototype.setParsedOption = function (_0x252ba0, _0x3f2f01, _0x40efde) {
          if (!this.parsedOptions) {
            this.parsedOptions = [];
          }
          var _0x2513a4 = this.parsedOptions;
          if (_0x40efde) {
            var _0x51103f = _0x2513a4.find(function (_0x12331a) {
              return Object.prototype.hasOwnProperty.call(_0x12331a, _0x252ba0);
            });
            if (_0x51103f) {
              var _0xc25506 = _0x51103f[_0x252ba0];
              _0x2907a7.setProperty(_0xc25506, _0x40efde, _0x3f2f01);
            } else {
              (_0x51103f = {})[_0x252ba0] = _0x2907a7.setProperty({}, _0x40efde, _0x3f2f01);
              _0x2513a4.push(_0x51103f);
            }
          } else {
            var _0xacd816 = {
              _0x252ba0: _0x3f2f01
            };
            _0x2513a4.push(_0xacd816);
          }
          return this;
        };
        _0x2dd20f.prototype.setOptions = function (_0x53164d, _0x143387) {
          if (_0x53164d) {
            var _0x2aa930 = Object.keys(_0x53164d);
            for (var _0x22b610 = 0x0; _0x22b610 < _0x2aa930.length; ++_0x22b610) {
              this.setOption(_0x2aa930[_0x22b610], _0x53164d[_0x2aa930[_0x22b610]], _0x143387);
            }
          }
          return this;
        };
        _0x2dd20f.prototype.toString = function () {
          var _0x27b9f7 = this.constructor.className;
          var _0x5ea2ed = this.fullName;
          return _0x5ea2ed.length ? _0x27b9f7 + " " + _0x5ea2ed : _0x27b9f7;
        };
        _0x2dd20f._configure = function (_0x3a1266) {
          _0x49a9f8 = _0x3a1266;
        };
        _0x46b0d0.exports;
      }, function () {
        return {
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/enum.js", function (_0xdeed71, _0x1a68f0, _0x270eea, _0xbf11b3, _0x1941aa) {
        _0x270eea.exports = _0x252ccc;
        var _0x1ee2e8 = _0x1a68f0("./object");
        ((_0x252ccc.prototype = Object.create(_0x1ee2e8.prototype)).constructor = _0x252ccc).className = "Enum";
        var _0x474ae9 = _0x1a68f0("./namespace");
        var _0xb24ad4 = _0x1a68f0("./util");
        function _0x252ccc(_0x39a242, _0x3498ec, _0xfb9487, _0x3499eb, _0x22ac4f) {
          _0x1ee2e8.call(this, _0x39a242, _0xfb9487);
          if (_0x3498ec && "object" != typeof _0x3498ec) {
            throw TypeError("values must be an object");
          }
          this.valuesById = {};
          this.values = Object.create(this.valuesById);
          this.comment = _0x3499eb;
          this.comments = _0x22ac4f || {};
          this.reserved = undefined;
          if (_0x3498ec) {
            var _0x3db4c0 = Object.keys(_0x3498ec);
            for (var _0x54c206 = 0x0; _0x54c206 < _0x3db4c0.length; ++_0x54c206) {
              if ("number" == typeof _0x3498ec[_0x3db4c0[_0x54c206]]) {
                this.valuesById[this.values[_0x3db4c0[_0x54c206]] = _0x3498ec[_0x3db4c0[_0x54c206]]] = _0x3db4c0[_0x54c206];
              }
            }
          }
        }
        _0x252ccc.fromJSON = function (_0x513453, _0x212bfc) {
          var _0x3b0b69 = new _0x252ccc(_0x513453, _0x212bfc.values, _0x212bfc.options, _0x212bfc.comment, _0x212bfc.comments);
          _0x3b0b69.reserved = _0x212bfc.reserved;
          return _0x3b0b69;
        };
        _0x252ccc.prototype.toJSON = function (_0x17efd0) {
          var _0x4e378a = !!_0x17efd0 && Boolean(_0x17efd0.keepComments);
          return _0xb24ad4.toObject(['options', this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", _0x4e378a ? this.comment : undefined, "comments", _0x4e378a ? this.comments : undefined]);
        };
        _0x252ccc.prototype.add = function (_0x4a7735, _0x174487, _0x5c42cc) {
          if (!_0xb24ad4.isString(_0x4a7735)) {
            throw TypeError("name must be a string");
          }
          if (!_0xb24ad4.isInteger(_0x174487)) {
            throw TypeError("id must be an integer");
          }
          if (undefined !== this.values[_0x4a7735]) {
            throw Error("duplicate name '" + _0x4a7735 + "' in " + this);
          }
          if (this.isReservedId(_0x174487)) {
            throw Error("id " + _0x174487 + " is reserved in " + this);
          }
          if (this.isReservedName(_0x4a7735)) {
            throw Error("name '" + _0x4a7735 + "' is reserved in " + this);
          }
          if (undefined !== this.valuesById[_0x174487]) {
            if (!this.options || !this.options.allow_alias) {
              throw Error("duplicate id " + _0x174487 + " in " + this);
            }
            this.values[_0x4a7735] = _0x174487;
          } else {
            this.valuesById[this.values[_0x4a7735] = _0x174487] = _0x4a7735;
          }
          this.comments[_0x4a7735] = _0x5c42cc || null;
          return this;
        };
        _0x252ccc.prototype.remove = function (_0x559324) {
          if (!_0xb24ad4.isString(_0x559324)) {
            throw TypeError("name must be a string");
          }
          var _0x535b33 = this.values[_0x559324];
          if (null == _0x535b33) {
            throw Error("name '" + _0x559324 + "' does not exist in " + this);
          }
          delete this.valuesById[_0x535b33];
          delete this.values[_0x559324];
          delete this.comments[_0x559324];
          return this;
        };
        _0x252ccc.prototype.isReservedId = function (_0x37ab60) {
          return _0x474ae9.isReservedId(this.reserved, _0x37ab60);
        };
        _0x252ccc.prototype.isReservedName = function (_0x1413de) {
          return _0x474ae9.isReservedName(this.reserved, _0x1413de);
        };
        _0x270eea.exports;
      }, function () {
        return {
          './object': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './namespace': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x11aabe.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js', function (_0x2fbe31, _0x2b9faf, _0x3d85cd, _0x1c1fae, _0x288172) {
        _0x3d85cd.exports = function (_0x703202) {
          var _0x4b483a;
          var _0x5be93b = _0x570dd6.codegen(['m', 'w'], _0x703202.name + '$encode')('if(!w)')("w=Writer.create()");
          var _0xf6df16 = _0x703202.fieldsArray.slice().sort(_0x570dd6.compareFieldsById);
          for (var _0x18f659 = 0x0; _0x18f659 < _0xf6df16.length; ++_0x18f659) {
            var _0x2c1ea9 = _0xf6df16[_0x18f659].resolve();
            var _0x204d74 = _0x703202._fieldsArray.indexOf(_0x2c1ea9);
            var _0x598374 = _0x2c1ea9.resolvedType instanceof _0x3e679c ? "int32" : _0x2c1ea9.type;
            var _0x157c00 = _0x548876.basic[_0x598374];
            _0x4b483a = 'm' + _0x570dd6.safeProp(_0x2c1ea9.name);
            if (_0x2c1ea9.map) {
              _0x5be93b("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", _0x4b483a, _0x2c1ea9.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", _0x4b483a)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (_0x2c1ea9.id << 0x3 | 0x2) >>> 0x0, 0x8 | _0x548876.mapKey[_0x2c1ea9.keyType], _0x2c1ea9.keyType);
              if (undefined === _0x157c00) {
                _0x5be93b('types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()', _0x204d74, _0x4b483a);
              } else {
                _0x5be93b(".uint32(%i).%s(%s[ks[i]]).ldelim()", 0x10 | _0x157c00, _0x598374, _0x4b483a);
              }
              _0x5be93b('}')('}');
            } else if (_0x2c1ea9.repeated) {
              _0x5be93b('if(%s!=null&&%s.length){', _0x4b483a, _0x4b483a);
              if (_0x2c1ea9.packed && undefined !== _0x548876.packed[_0x598374]) {
                _0x5be93b("w.uint32(%i).fork()", (_0x2c1ea9.id << 0x3 | 0x2) >>> 0x0)("for(var i=0;i<%s.length;++i)", _0x4b483a)("w.%s(%s[i])", _0x598374, _0x4b483a)("w.ldelim()");
              } else {
                _0x5be93b("for(var i=0;i<%s.length;++i)", _0x4b483a);
                if (undefined === _0x157c00) {
                  if (_0x2c1ea9.resolvedType.group) {
                    _0x5be93b("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0x204d74, _0x4b483a + '[i]', (_0x2c1ea9.id << 0x3 | 0x3) >>> 0x0, (_0x2c1ea9.id << 0x3 | 0x4) >>> 0x0);
                  } else {
                    _0x5be93b('types[%i].encode(%s,w.uint32(%i).fork()).ldelim()', _0x204d74, _0x4b483a + '[i]', (_0x2c1ea9.id << 0x3 | 0x2) >>> 0x0);
                  }
                } else {
                  _0x5be93b("w.uint32(%i).%s(%s[i])", (_0x2c1ea9.id << 0x3 | _0x157c00) >>> 0x0, _0x598374, _0x4b483a);
                }
              }
              _0x5be93b('}');
            } else {
              if (_0x2c1ea9.optional) {
                _0x5be93b("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", _0x4b483a, _0x2c1ea9.name);
              }
              if (undefined === _0x157c00) {
                if (_0x2c1ea9.resolvedType.group) {
                  _0x5be93b("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0x204d74, _0x4b483a, (_0x2c1ea9.id << 0x3 | 0x3) >>> 0x0, (_0x2c1ea9.id << 0x3 | 0x4) >>> 0x0);
                } else {
                  _0x5be93b('types[%i].encode(%s,w.uint32(%i).fork()).ldelim()', _0x204d74, _0x4b483a, (_0x2c1ea9.id << 0x3 | 0x2) >>> 0x0);
                }
              } else {
                _0x5be93b("w.uint32(%i).%s(%s)", (_0x2c1ea9.id << 0x3 | _0x157c00) >>> 0x0, _0x598374, _0x4b483a);
              }
            }
          }
          return _0x5be93b("return w");
        };
        var _0x3e679c = _0x2b9faf("./enum");
        var _0x548876 = _0x2b9faf("./types");
        var _0x570dd6 = _0x2b9faf("./util");
        _0x3d85cd.exports;
      }, function () {
        return {
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js", function (_0x54b099, _0x598f11, _0x2241bc, _0x1bc520, _0x5a2d29) {
        var _0x559f64 = _0x2241bc.exports = _0x598f11('./index-minimal');
        _0x559f64.build = "light";
        _0x559f64.load = function (_0x1ead48, _0x4dec9e, _0xfaf3c8) {
          if ("function" == typeof _0x4dec9e) {
            _0xfaf3c8 = _0x4dec9e;
            _0x4dec9e = new _0x559f64.Root();
          } else if (!_0x4dec9e) {
            _0x4dec9e = new _0x559f64.Root();
          }
          return _0x4dec9e.load(_0x1ead48, _0xfaf3c8);
        };
        _0x559f64.loadSync = function (_0x28661c, _0x4ae5b0) {
          if (!_0x4ae5b0) {
            _0x4ae5b0 = new _0x559f64.Root();
          }
          return _0x4ae5b0.loadSync(_0x28661c);
        };
        _0x559f64.encoder = _0x598f11('./encoder');
        _0x559f64.decoder = _0x598f11("./decoder");
        _0x559f64.verifier = _0x598f11("./verifier");
        _0x559f64.converter = _0x598f11("./converter");
        _0x559f64.ReflectionObject = _0x598f11('./object');
        _0x559f64.Namespace = _0x598f11('./namespace');
        _0x559f64.Root = _0x598f11("./root");
        _0x559f64.Enum = _0x598f11('./enum');
        _0x559f64.Type = _0x598f11("./type");
        _0x559f64.Field = _0x598f11("./field");
        _0x559f64.OneOf = _0x598f11("./oneof");
        _0x559f64.MapField = _0x598f11("./mapfield");
        _0x559f64.Service = _0x598f11("./service");
        _0x559f64.Method = _0x598f11("./method");
        _0x559f64.Message = _0x598f11("./message");
        _0x559f64.wrappers = _0x598f11("./wrappers");
        _0x559f64.types = _0x598f11("./types");
        _0x559f64.util = _0x598f11('./util');
        _0x559f64.ReflectionObject._configure(_0x559f64.Root);
        _0x559f64.Namespace._configure(_0x559f64.Type, _0x559f64.Service, _0x559f64.Enum);
        _0x559f64.Root._configure(_0x559f64.Type);
        _0x559f64.Field._configure(_0x559f64.Type);
        _0x2241bc.exports;
      }, function () {
        return {
          './index-minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js",
          './encoder': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js',
          './decoder': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          './verifier': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          './converter': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          './object': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './namespace': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './root': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './type': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './field': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './oneof': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js',
          './mapfield': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './service': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          './method': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          './message': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          './wrappers': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js',
          './types': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x11aabe.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js', function (_0x587ac9, _0x118325, _0x41c38c, _0x4e4ef7, _0x4a1761) {
        _0x41c38c.exports = _0xce9831;
        var _0x15db52 = /[\s{}=;:[\],'"()<>]/g;
        var _0x5b1b77 = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
        var _0x248e93 = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
        var _0x3285a2 = /^ *[*/]+ */;
        var _0x36f402 = /^\s*\*?\/*/;
        var _0x31bee2 = /\n/g;
        var _0x34a5a2 = /\s/;
        var _0x20bf0b = /\\(.?)/g;
        var _0x2b9bfb = {
          0x0: "\0",
          'r': "\r",
          'n': "\n",
          't': "\t"
        };
        function _0xf33f62(_0x3a18f8) {
          return _0x3a18f8.replace(_0x20bf0b, function (_0x16f59a, _0x3fe4dd) {
            switch (_0x3fe4dd) {
              case "\\":
              case '':
                return _0x3fe4dd;
              default:
                return _0x2b9bfb[_0x3fe4dd] || '';
            }
          });
        }
        function _0xce9831(_0x15dc5c, _0x165226) {
          _0x15dc5c = _0x15dc5c.toString();
          var _0x54e574 = 0x0;
          var _0x3fde4b = _0x15dc5c.length;
          var _0x1b935e = 0x1;
          var _0x39ba00 = null;
          var _0x55328e = null;
          var _0x49cc8e = 0x0;
          var _0x19c085 = false;
          var _0x5add0a = false;
          var _0x8a0bef = [];
          var _0x3b179c = null;
          function _0x5bd520(_0x432205, _0xc14f5e, _0x52b207) {
            _0x39ba00 = _0x15dc5c.charAt(_0x432205++);
            _0x49cc8e = _0x1b935e;
            _0x19c085 = false;
            _0x5add0a = _0x52b207;
            var _0x465300;
            var _0x3fa17d = _0x432205 - (_0x165226 ? 0x2 : 0x3);
            do {
              if (--_0x3fa17d < 0x0 || "\n" === (_0x465300 = _0x15dc5c.charAt(_0x3fa17d))) {
                _0x19c085 = true;
                break;
              }
            } while (" " === _0x465300 || "\t" === _0x465300);
            var _0x22c833 = _0x15dc5c.substring(_0x432205, _0xc14f5e).split(_0x31bee2);
            for (var _0x510ffa = 0x0; _0x510ffa < _0x22c833.length; ++_0x510ffa) {
              _0x22c833[_0x510ffa] = _0x22c833[_0x510ffa].replace(_0x165226 ? _0x36f402 : _0x3285a2, '').trim();
            }
            _0x55328e = _0x22c833.join("\n").trim();
          }
          function _0x24515e(_0x472f4e) {
            var _0x4d7c00 = _0x589fea(_0x472f4e);
            var _0x237114 = _0x15dc5c.substring(_0x472f4e, _0x4d7c00);
            return /^\s*\/{1,2}/.test(_0x237114);
          }
          function _0x589fea(_0x438724) {
            for (var _0x11aabb = _0x438724; _0x11aabb < _0x3fde4b && "\n" !== _0x15dc5c.charAt(_0x11aabb);) {
              _0x11aabb++;
            }
            return _0x11aabb;
          }
          function _0x529012() {
            if (_0x8a0bef.length > 0x0) {
              return _0x8a0bef.shift();
            }
            if (_0x3b179c) {
              return function () {
                var _0x5a122b = "'" === _0x3b179c ? _0x248e93 : _0x5b1b77;
                _0x5a122b.lastIndex = _0x54e574 - 0x1;
                var _0x1172a0 = _0x5a122b.exec(_0x15dc5c);
                if (!_0x1172a0) {
                  throw Error("illegal string (line " + _0x1b935e + ')');
                }
                _0x54e574 = _0x5a122b.lastIndex;
                _0x513dee(_0x3b179c);
                _0x3b179c = null;
                return _0xf33f62(_0x1172a0[0x1]);
              }();
            }
            var _0x2551b1;
            var _0x92a40;
            var _0x12ae8e;
            var _0x3641d9;
            var _0x1f2cc8;
            var _0x3e3f9f = 0x0 === _0x54e574;
            do {
              if (_0x54e574 === _0x3fde4b) {
                return null;
              }
              for (_0x2551b1 = false; _0x34a5a2.test(_0x12ae8e = _0x15dc5c.charAt(_0x54e574));) {
                if ("\n" === _0x12ae8e) {
                  _0x3e3f9f = true;
                  ++_0x1b935e;
                }
                if (++_0x54e574 === _0x3fde4b) {
                  return null;
                }
              }
              if ('/' === _0x15dc5c.charAt(_0x54e574)) {
                if (++_0x54e574 === _0x3fde4b) {
                  throw Error("illegal comment (line " + _0x1b935e + ')');
                }
                if ('/' === _0x15dc5c.charAt(_0x54e574)) {
                  if (_0x165226) {
                    _0x3641d9 = _0x54e574;
                    _0x1f2cc8 = false;
                    if (_0x24515e(_0x54e574)) {
                      _0x1f2cc8 = true;
                      do {
                        if ((_0x54e574 = _0x589fea(_0x54e574)) === _0x3fde4b) {
                          break;
                        }
                        _0x54e574++;
                      } while (_0x24515e(_0x54e574));
                    } else {
                      _0x54e574 = Math.min(_0x3fde4b, _0x589fea(_0x54e574) + 0x1);
                    }
                    if (_0x1f2cc8) {
                      _0x5bd520(_0x3641d9, _0x54e574, _0x3e3f9f);
                    }
                    _0x1b935e++;
                    _0x2551b1 = true;
                  } else {
                    for (_0x1f2cc8 = '/' === _0x15dc5c.charAt(_0x3641d9 = _0x54e574 + 0x1); "\n" !== _0x15dc5c.charAt(++_0x54e574);) {
                      if (_0x54e574 === _0x3fde4b) {
                        return null;
                      }
                    }
                    ++_0x54e574;
                    if (_0x1f2cc8) {
                      _0x5bd520(_0x3641d9, _0x54e574 - 0x1, _0x3e3f9f);
                    }
                    ++_0x1b935e;
                    _0x2551b1 = true;
                  }
                } else {
                  if ('*' !== (_0x12ae8e = _0x15dc5c.charAt(_0x54e574))) {
                    return '/';
                  }
                  _0x3641d9 = _0x54e574 + 0x1;
                  _0x1f2cc8 = _0x165226 || '*' === _0x15dc5c.charAt(_0x3641d9);
                  do {
                    if ("\n" === _0x12ae8e) {
                      ++_0x1b935e;
                    }
                    if (++_0x54e574 === _0x3fde4b) {
                      throw Error("illegal comment (line " + _0x1b935e + ')');
                    }
                    _0x92a40 = _0x12ae8e;
                    _0x12ae8e = _0x15dc5c.charAt(_0x54e574);
                  } while ('*' !== _0x92a40 || '/' !== _0x12ae8e);
                  ++_0x54e574;
                  if (_0x1f2cc8) {
                    _0x5bd520(_0x3641d9, _0x54e574 - 0x2, _0x3e3f9f);
                  }
                  _0x2551b1 = true;
                }
              }
            } while (_0x2551b1);
            var _0x419b50 = _0x54e574;
            _0x15db52.lastIndex = 0x0;
            if (!_0x15db52.test(_0x15dc5c.charAt(_0x419b50++))) {
              for (; _0x419b50 < _0x3fde4b && !_0x15db52.test(_0x15dc5c.charAt(_0x419b50));) {
                ++_0x419b50;
              }
            }
            var _0x135b33 = _0x15dc5c.substring(_0x54e574, _0x54e574 = _0x419b50);
            if (!("\"" !== _0x135b33 && "'" !== _0x135b33)) {
              _0x3b179c = _0x135b33;
            }
            return _0x135b33;
          }
          function _0x513dee(_0x4c726c) {
            _0x8a0bef.push(_0x4c726c);
          }
          function _0x5b6f48() {
            if (!_0x8a0bef.length) {
              var _0x8442d6 = _0x529012();
              if (null === _0x8442d6) {
                return null;
              }
              _0x513dee(_0x8442d6);
            }
            return _0x8a0bef[0x0];
          }
          return Object.defineProperty({
            'next': _0x529012,
            'peek': _0x5b6f48,
            'push': _0x513dee,
            'skip': function (_0x47469f, _0x242482) {
              var _0x1107dd = _0x5b6f48();
              if (_0x1107dd === _0x47469f) {
                _0x529012();
                return true;
              }
              if (!_0x242482) {
                throw Error("illegal " + ("token '" + _0x1107dd + "', '" + _0x47469f + "' expected") + " (line " + _0x1b935e + ')');
              }
              return false;
            },
            'cmnt': function (_0x410ab5) {
              var _0x5bcc0a = null;
              if (undefined === _0x410ab5) {
                if (_0x49cc8e === _0x1b935e - 0x1 && (_0x165226 || '*' === _0x39ba00 || _0x19c085)) {
                  _0x5bcc0a = _0x5add0a ? _0x55328e : null;
                }
              } else {
                if (_0x49cc8e < _0x410ab5) {
                  _0x5b6f48();
                }
                if (!(_0x49cc8e !== _0x410ab5 || _0x19c085 || !_0x165226 && '/' !== _0x39ba00)) {
                  _0x5bcc0a = _0x5add0a ? null : _0x55328e;
                }
              }
              return _0x5bcc0a;
            }
          }, "line", {
            'get': function () {
              return _0x1b935e;
            }
          });
        }
        _0xce9831.unescape = _0xf33f62;
        _0x41c38c.exports;
      }, {});
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/parse.js", function (_0x10d8ea, _0x53c589, _0x48cf33, _0x12879f, _0x2e8904) {
        _0x48cf33.exports = _0x50a9c6;
        _0x50a9c6.filename = null;
        _0x50a9c6.defaults = {
          'keepCase': false
        };
        var _0x74f4b4 = _0x53c589('./tokenize');
        var _0x10ed54 = _0x53c589('./root');
        var _0x18c3a2 = _0x53c589('./type');
        var _0x30db41 = _0x53c589("./field");
        var _0x55ae07 = _0x53c589("./mapfield");
        var _0x3d83e5 = _0x53c589("./oneof");
        var _0x294de4 = _0x53c589('./enum');
        var _0x3d6355 = _0x53c589("./service");
        var _0x21af1e = _0x53c589('./method');
        var _0x3e8f75 = _0x53c589("./types");
        var _0x22d313 = _0x53c589("./util");
        var _0x5429a3 = /^[1-9][0-9]*$/;
        var _0x503f0f = /^-?[1-9][0-9]*$/;
        var _0x4dd7d7 = /^0[x][0-9a-fA-F]+$/;
        var _0x2e8e72 = /^-?0[x][0-9a-fA-F]+$/;
        var _0x3e32ef = /^0[0-7]+$/;
        var _0x4bcb30 = /^-?0[0-7]+$/;
        var _0x55e372 = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
        var _0x541914 = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
        var _0x3d5a05 = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
        var _0xf9846c = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
        function _0x50a9c6(_0x4f5f7b, _0x485301, _0x27f4af) {
          if (!(_0x485301 instanceof _0x10ed54)) {
            _0x27f4af = _0x485301;
            _0x485301 = new _0x10ed54();
          }
          if (!_0x27f4af) {
            _0x27f4af = _0x50a9c6.defaults;
          }
          var _0x15432d;
          var _0x11f52f;
          var _0x523e05;
          var _0x59b602;
          var _0x35ce68;
          var _0x41c340 = _0x27f4af.preferTrailingComment || false;
          var _0x19e84a = _0x74f4b4(_0x4f5f7b, _0x27f4af.alternateCommentMode || false);
          var _0x2cba9c = _0x19e84a.next;
          var _0x106ded = _0x19e84a.push;
          var _0x3edfe4 = _0x19e84a.peek;
          var _0x310ffe = _0x19e84a.skip;
          var _0xddb8ec = _0x19e84a.cmnt;
          var _0x1e50f3 = true;
          var _0x18f9e2 = false;
          var _0x4f64ed = _0x485301;
          var _0x589641 = _0x27f4af.keepCase ? function (_0x209d52) {
            return _0x209d52;
          } : _0x22d313.camelCase;
          function _0x25187c(_0x663f32, _0x27d106, _0x1fc28a) {
            var _0x2d9e37 = _0x50a9c6.filename;
            if (!_0x1fc28a) {
              _0x50a9c6.filename = null;
            }
            return Error("illegal " + (_0x27d106 || "token") + " '" + _0x663f32 + "' (" + (_0x2d9e37 ? _0x2d9e37 + ", " : '') + "line " + _0x19e84a.line + ')');
          }
          function _0x5aa1b5() {
            var _0x5a0824;
            var _0xdb4a3d = [];
            do {
              if ("\"" !== (_0x5a0824 = _0x2cba9c()) && "'" !== _0x5a0824) {
                throw _0x25187c(_0x5a0824);
              }
              _0xdb4a3d.push(_0x2cba9c());
              _0x310ffe(_0x5a0824);
              _0x5a0824 = _0x3edfe4();
            } while ("\"" === _0x5a0824 || "'" === _0x5a0824);
            return _0xdb4a3d.join('');
          }
          function _0x599753(_0x30ade2) {
            var _0x222bc = _0x2cba9c();
            switch (_0x222bc) {
              case "'":
              case "\"":
                _0x106ded(_0x222bc);
                return _0x5aa1b5();
              case "true":
              case "TRUE":
                return true;
              case "false":
              case "FALSE":
                return false;
            }
            try {
              return function (_0x4ce4be, _0x409138) {
                var _0x3af9c6 = 0x1;
                if ('-' === _0x4ce4be.charAt(0x0)) {
                  _0x3af9c6 = -0x1;
                  _0x4ce4be = _0x4ce4be.substring(0x1);
                }
                switch (_0x4ce4be) {
                  case "inf":
                  case 'INF':
                  case "Inf":
                    return _0x3af9c6 * Infinity;
                  case "nan":
                  case "NAN":
                  case "Nan":
                  case "NaN":
                    return NaN;
                  case '0':
                    return 0x0;
                }
                if (_0x5429a3.test(_0x4ce4be)) {
                  return _0x3af9c6 * parseInt(_0x4ce4be, 0xa);
                }
                if (_0x4dd7d7.test(_0x4ce4be)) {
                  return _0x3af9c6 * parseInt(_0x4ce4be, 0x10);
                }
                if (_0x3e32ef.test(_0x4ce4be)) {
                  return _0x3af9c6 * parseInt(_0x4ce4be, 0x8);
                }
                if (_0x55e372.test(_0x4ce4be)) {
                  return _0x3af9c6 * parseFloat(_0x4ce4be);
                }
                throw _0x25187c(_0x4ce4be, "number", _0x409138);
              }(_0x222bc, true);
            } catch (_0x372724) {
              if (_0x30ade2 && _0x3d5a05.test(_0x222bc)) {
                return _0x222bc;
              }
              throw _0x25187c(_0x222bc, "value");
            }
          }
          function _0x4a777f(_0x3cdee0, _0x2f0d22) {
            var _0x103915;
            var _0x313dfa;
            do {
              if (!_0x2f0d22 || "\"" !== (_0x103915 = _0x3edfe4()) && "'" !== _0x103915) {
                _0x3cdee0.push([_0x313dfa = _0x50ef8d(_0x2cba9c()), _0x310ffe('to', true) ? _0x50ef8d(_0x2cba9c()) : _0x313dfa]);
              } else {
                _0x3cdee0.push(_0x5aa1b5());
              }
            } while (_0x310ffe(',', true));
            _0x310ffe(';');
          }
          function _0x50ef8d(_0x4c3391, _0x3d9f99) {
            switch (_0x4c3391) {
              case "max":
              case "MAX":
              case "Max":
                return 0x1fffffff;
              case '0':
                return 0x0;
            }
            if (!_0x3d9f99 && '-' === _0x4c3391.charAt(0x0)) {
              throw _0x25187c(_0x4c3391, 'id');
            }
            if (_0x503f0f.test(_0x4c3391)) {
              return parseInt(_0x4c3391, 0xa);
            }
            if (_0x2e8e72.test(_0x4c3391)) {
              return parseInt(_0x4c3391, 0x10);
            }
            if (_0x4bcb30.test(_0x4c3391)) {
              return parseInt(_0x4c3391, 0x8);
            }
            throw _0x25187c(_0x4c3391, 'id');
          }
          function _0xd0c163() {
            if (undefined !== _0x15432d) {
              throw _0x25187c("package");
            }
            _0x15432d = _0x2cba9c();
            if (!_0x3d5a05.test(_0x15432d)) {
              throw _0x25187c(_0x15432d, "name");
            }
            _0x4f64ed = _0x4f64ed.define(_0x15432d);
            _0x310ffe(';');
          }
          function _0x43b299() {
            var _0x1c933a;
            var _0x3dc158 = _0x3edfe4();
            switch (_0x3dc158) {
              case 'weak':
                _0x1c933a = _0x523e05 || (_0x523e05 = []);
                _0x2cba9c();
                break;
              case "public":
                _0x2cba9c();
              default:
                _0x1c933a = _0x11f52f || (_0x11f52f = []);
            }
            _0x3dc158 = _0x5aa1b5();
            _0x310ffe(';');
            _0x1c933a.push(_0x3dc158);
          }
          function _0x34bfe6() {
            _0x310ffe('=');
            _0x59b602 = _0x5aa1b5();
            if (!(_0x18f9e2 = "proto3" === _0x59b602) && "proto2" !== _0x59b602) {
              throw _0x25187c(_0x59b602, "syntax");
            }
            _0x310ffe(';');
          }
          function _0x404cd9(_0x1af1b0, _0x5a9f9a) {
            switch (_0x5a9f9a) {
              case "option":
                _0x217e7c(_0x1af1b0, _0x5a9f9a);
                _0x310ffe(';');
                return true;
              case "message":
                (function (_0x2a3d35, _0x5c82b2) {
                  if (!_0x541914.test(_0x5c82b2 = _0x2cba9c())) {
                    throw _0x25187c(_0x5c82b2, "type name");
                  }
                  var _0x43a183 = new _0x18c3a2(_0x5c82b2);
                  _0x39aa74(_0x43a183, function (_0x1c2b4a) {
                    if (!_0x404cd9(_0x43a183, _0x1c2b4a)) {
                      switch (_0x1c2b4a) {
                        case "map":
                          !function (_0x5d0ef6) {
                            _0x310ffe('<');
                            var _0x558bcd = _0x2cba9c();
                            if (undefined === _0x3e8f75.mapKey[_0x558bcd]) {
                              throw _0x25187c(_0x558bcd, 'type');
                            }
                            _0x310ffe(',');
                            var _0x31cf9a = _0x2cba9c();
                            if (!_0x3d5a05.test(_0x31cf9a)) {
                              throw _0x25187c(_0x31cf9a, "type");
                            }
                            _0x310ffe('>');
                            var _0x12a182 = _0x2cba9c();
                            if (!_0x541914.test(_0x12a182)) {
                              throw _0x25187c(_0x12a182, "name");
                            }
                            _0x310ffe('=');
                            var _0x4b7862 = new _0x55ae07(_0x589641(_0x12a182), _0x50ef8d(_0x2cba9c()), _0x558bcd, _0x31cf9a);
                            _0x39aa74(_0x4b7862, function (_0x2c1c35) {
                              if ("option" !== _0x2c1c35) {
                                throw _0x25187c(_0x2c1c35);
                              }
                              _0x217e7c(_0x4b7862, _0x2c1c35);
                              _0x310ffe(';');
                            }, function () {
                              _0x357f6f(_0x4b7862);
                            });
                            _0x5d0ef6.add(_0x4b7862);
                          }(_0x43a183);
                          break;
                        case "required":
                        case 'repeated':
                          _0xcc3e06(_0x43a183, _0x1c2b4a);
                          break;
                        case 'optional':
                          _0xcc3e06(_0x43a183, _0x18f9e2 ? 'proto3_optional' : "optional");
                          break;
                        case "oneof":
                          !function (_0x3b4984, _0xfd58d5) {
                            if (!_0x541914.test(_0xfd58d5 = _0x2cba9c())) {
                              throw _0x25187c(_0xfd58d5, "name");
                            }
                            var _0x5c201c = new _0x3d83e5(_0x589641(_0xfd58d5));
                            _0x39aa74(_0x5c201c, function (_0x529058) {
                              if ("option" === _0x529058) {
                                _0x217e7c(_0x5c201c, _0x529058);
                                _0x310ffe(';');
                              } else {
                                _0x106ded(_0x529058);
                                _0xcc3e06(_0x5c201c, "optional");
                              }
                            });
                            _0x3b4984.add(_0x5c201c);
                          }(_0x43a183, _0x1c2b4a);
                          break;
                        case "extensions":
                          _0x4a777f(_0x43a183.extensions || (_0x43a183.extensions = []));
                          break;
                        case 'reserved':
                          _0x4a777f(_0x43a183.reserved || (_0x43a183.reserved = []), true);
                          break;
                        default:
                          if (!_0x18f9e2 || !_0x3d5a05.test(_0x1c2b4a)) {
                            throw _0x25187c(_0x1c2b4a);
                          }
                          _0x106ded(_0x1c2b4a);
                          _0xcc3e06(_0x43a183, "optional");
                      }
                    }
                  });
                  _0x2a3d35.add(_0x43a183);
                })(_0x1af1b0, _0x5a9f9a);
                return true;
              case "enum":
                (function (_0x2500b5, _0x8cf7bf) {
                  if (!_0x541914.test(_0x8cf7bf = _0x2cba9c())) {
                    throw _0x25187c(_0x8cf7bf, 'name');
                  }
                  var _0x3e31ae = new _0x294de4(_0x8cf7bf);
                  _0x39aa74(_0x3e31ae, function (_0xaf530f) {
                    switch (_0xaf530f) {
                      case "option":
                        _0x217e7c(_0x3e31ae, _0xaf530f);
                        _0x310ffe(';');
                        break;
                      case "reserved":
                        _0x4a777f(_0x3e31ae.reserved || (_0x3e31ae.reserved = []), true);
                        break;
                      default:
                        !function (_0x96904f, _0x413f57) {
                          if (!_0x541914.test(_0x413f57)) {
                            throw _0x25187c(_0x413f57, "name");
                          }
                          _0x310ffe('=');
                          var _0x578ec5 = _0x50ef8d(_0x2cba9c(), true);
                          var _0x3f0e56 = {};
                          _0x39aa74(_0x3f0e56, function (_0x34c7d2) {
                            if ("option" !== _0x34c7d2) {
                              throw _0x25187c(_0x34c7d2);
                            }
                            _0x217e7c(_0x3f0e56, _0x34c7d2);
                            _0x310ffe(';');
                          }, function () {
                            _0x357f6f(_0x3f0e56);
                          });
                          _0x96904f.add(_0x413f57, _0x578ec5, _0x3f0e56.comment);
                        }(_0x3e31ae, _0xaf530f);
                    }
                  });
                  _0x2500b5.add(_0x3e31ae);
                })(_0x1af1b0, _0x5a9f9a);
                return true;
              case "service":
                (function (_0x23aef8, _0x508598) {
                  if (!_0x541914.test(_0x508598 = _0x2cba9c())) {
                    throw _0x25187c(_0x508598, "service name");
                  }
                  var _0x39a788 = new _0x3d6355(_0x508598);
                  _0x39aa74(_0x39a788, function (_0x56e2ad) {
                    if (!_0x404cd9(_0x39a788, _0x56e2ad)) {
                      if ("rpc" !== _0x56e2ad) {
                        throw _0x25187c(_0x56e2ad);
                      }
                      !function (_0x4d4f44, _0xc1f895) {
                        var _0x1d1406 = _0xddb8ec();
                        var _0x1d4406 = _0xc1f895;
                        if (!_0x541914.test(_0xc1f895 = _0x2cba9c())) {
                          throw _0x25187c(_0xc1f895, "name");
                        }
                        var _0x5b9604;
                        var _0x24783c;
                        var _0x3d60d7;
                        var _0x53a988;
                        var _0x3e24a9 = _0xc1f895;
                        _0x310ffe('(');
                        if (_0x310ffe("stream", true)) {
                          _0x24783c = true;
                        }
                        if (!_0x3d5a05.test(_0xc1f895 = _0x2cba9c())) {
                          throw _0x25187c(_0xc1f895);
                        }
                        _0x5b9604 = _0xc1f895;
                        _0x310ffe(')');
                        _0x310ffe("returns");
                        _0x310ffe('(');
                        if (_0x310ffe("stream", true)) {
                          _0x53a988 = true;
                        }
                        if (!_0x3d5a05.test(_0xc1f895 = _0x2cba9c())) {
                          throw _0x25187c(_0xc1f895);
                        }
                        _0x3d60d7 = _0xc1f895;
                        _0x310ffe(')');
                        var _0x4a589d = new _0x21af1e(_0x3e24a9, _0x1d4406, _0x5b9604, _0x3d60d7, _0x24783c, _0x53a988);
                        _0x4a589d.comment = _0x1d1406;
                        _0x39aa74(_0x4a589d, function (_0x2218f8) {
                          if ("option" !== _0x2218f8) {
                            throw _0x25187c(_0x2218f8);
                          }
                          _0x217e7c(_0x4a589d, _0x2218f8);
                          _0x310ffe(';');
                        });
                        _0x4d4f44.add(_0x4a589d);
                      }(_0x39a788, _0x56e2ad);
                    }
                  });
                  _0x23aef8.add(_0x39a788);
                })(_0x1af1b0, _0x5a9f9a);
                return true;
              case "extend":
                (function (_0x568aee, _0x22989d) {
                  if (!_0x3d5a05.test(_0x22989d = _0x2cba9c())) {
                    throw _0x25187c(_0x22989d, "reference");
                  }
                  var _0x1b816f = _0x22989d;
                  _0x39aa74(null, function (_0x17cf85) {
                    switch (_0x17cf85) {
                      case 'required':
                      case "repeated":
                        _0xcc3e06(_0x568aee, _0x17cf85, _0x1b816f);
                        break;
                      case "optional":
                        _0xcc3e06(_0x568aee, _0x18f9e2 ? "proto3_optional" : "optional", _0x1b816f);
                        break;
                      default:
                        if (!_0x18f9e2 || !_0x3d5a05.test(_0x17cf85)) {
                          throw _0x25187c(_0x17cf85);
                        }
                        _0x106ded(_0x17cf85);
                        _0xcc3e06(_0x568aee, "optional", _0x1b816f);
                    }
                  });
                })(_0x1af1b0, _0x5a9f9a);
                return true;
            }
            return false;
          }
          function _0x39aa74(_0x21b447, _0x2f40ba, _0x2a7f4b) {
            var _0x1ef1d4 = _0x19e84a.line;
            if (_0x21b447) {
              if ("string" != typeof _0x21b447.comment) {
                _0x21b447.comment = _0xddb8ec();
              }
              _0x21b447.filename = _0x50a9c6.filename;
            }
            if (_0x310ffe('{', true)) {
              for (var _0x520d9c; '}' !== (_0x520d9c = _0x2cba9c());) {
                _0x2f40ba(_0x520d9c);
              }
              _0x310ffe(';', true);
            } else {
              if (_0x2a7f4b) {
                _0x2a7f4b();
              }
              _0x310ffe(';');
              if (_0x21b447 && ('string' != typeof _0x21b447.comment || _0x41c340)) {
                _0x21b447.comment = _0xddb8ec(_0x1ef1d4) || _0x21b447.comment;
              }
            }
          }
          function _0xcc3e06(_0x277a88, _0x3846ba, _0x36896b) {
            var _0x396a5f = _0x2cba9c();
            if ('group' !== _0x396a5f) {
              if (!_0x3d5a05.test(_0x396a5f)) {
                throw _0x25187c(_0x396a5f, "type");
              }
              var _0xf83e10 = _0x2cba9c();
              if (!_0x541914.test(_0xf83e10)) {
                throw _0x25187c(_0xf83e10, 'name');
              }
              _0xf83e10 = _0x589641(_0xf83e10);
              _0x310ffe('=');
              var _0x353a1a = new _0x30db41(_0xf83e10, _0x50ef8d(_0x2cba9c()), _0x396a5f, _0x3846ba, _0x36896b);
              _0x39aa74(_0x353a1a, function (_0x5d856b) {
                if ("option" !== _0x5d856b) {
                  throw _0x25187c(_0x5d856b);
                }
                _0x217e7c(_0x353a1a, _0x5d856b);
                _0x310ffe(';');
              }, function () {
                _0x357f6f(_0x353a1a);
              });
              if ('proto3_optional' === _0x3846ba) {
                var _0x2c2861 = new _0x3d83e5('_' + _0xf83e10);
                _0x353a1a.setOption('proto3_optional', true);
                _0x2c2861.add(_0x353a1a);
                _0x277a88.add(_0x2c2861);
              } else {
                _0x277a88.add(_0x353a1a);
              }
              if (!(_0x18f9e2 || !_0x353a1a.repeated || undefined === _0x3e8f75.packed[_0x396a5f] && undefined !== _0x3e8f75.basic[_0x396a5f])) {
                _0x353a1a.setOption("packed", false, true);
              }
            } else {
              !function (_0x1f9d06, _0x2cd586) {
                var _0x312293 = _0x2cba9c();
                if (!_0x541914.test(_0x312293)) {
                  throw _0x25187c(_0x312293, "name");
                }
                var _0x70f5d = _0x22d313.lcFirst(_0x312293);
                if (_0x312293 === _0x70f5d) {
                  _0x312293 = _0x22d313.ucFirst(_0x312293);
                }
                _0x310ffe('=');
                var _0xbc5ad6 = _0x50ef8d(_0x2cba9c());
                var _0x2ad317 = new _0x18c3a2(_0x312293);
                _0x2ad317.group = true;
                var _0x4a0ef6 = new _0x30db41(_0x70f5d, _0xbc5ad6, _0x312293, _0x2cd586);
                _0x4a0ef6.filename = _0x50a9c6.filename;
                _0x39aa74(_0x2ad317, function (_0x5778f3) {
                  switch (_0x5778f3) {
                    case 'option':
                      _0x217e7c(_0x2ad317, _0x5778f3);
                      _0x310ffe(';');
                      break;
                    case 'required':
                    case "repeated":
                      _0xcc3e06(_0x2ad317, _0x5778f3);
                      break;
                    case "optional":
                      _0xcc3e06(_0x2ad317, _0x18f9e2 ? "proto3_optional" : "optional");
                      break;
                    default:
                      throw _0x25187c(_0x5778f3);
                  }
                });
                _0x1f9d06.add(_0x2ad317).add(_0x4a0ef6);
              }(_0x277a88, _0x3846ba);
            }
          }
          function _0x217e7c(_0x26e3f1, _0x37b735) {
            var _0xc13a27 = _0x310ffe('(', true);
            if (!_0x3d5a05.test(_0x37b735 = _0x2cba9c())) {
              throw _0x25187c(_0x37b735, "name");
            }
            var _0x4afa51;
            var _0xb6e7e6 = _0x37b735;
            var _0x5e501e = _0xb6e7e6;
            if (_0xc13a27) {
              _0x310ffe(')');
              _0x5e501e = _0xb6e7e6 = '(' + _0xb6e7e6 + ')';
              _0x37b735 = _0x3edfe4();
              if (_0xf9846c.test(_0x37b735)) {
                _0x4afa51 = _0x37b735.substr(0x1);
                _0xb6e7e6 += _0x37b735;
                _0x2cba9c();
              }
            }
            _0x310ffe('=');
            (function (_0x5d054a, _0x139179, _0x1bde59, _0x5af1ff) {
              if (_0x5d054a.setParsedOption) {
                _0x5d054a.setParsedOption(_0x139179, _0x1bde59, _0x5af1ff);
              }
            })(_0x26e3f1, _0x5e501e, _0x7f6ee8(_0x26e3f1, _0xb6e7e6), _0x4afa51);
          }
          function _0x7f6ee8(_0x3d249b, _0xc65132) {
            if (_0x310ffe('{', true)) {
              for (var _0x176691 = {}; !_0x310ffe('}', true);) {
                if (!_0x541914.test(_0x35ce68 = _0x2cba9c())) {
                  throw _0x25187c(_0x35ce68, "name");
                }
                var _0x226424;
                var _0x4660f5 = _0x35ce68;
                if ('{' === _0x3edfe4()) {
                  _0x226424 = _0x7f6ee8(_0x3d249b, _0xc65132 + '.' + _0x35ce68);
                } else {
                  _0x310ffe(':');
                  if ('{' === _0x3edfe4()) {
                    _0x226424 = _0x7f6ee8(_0x3d249b, _0xc65132 + '.' + _0x35ce68);
                  } else {
                    _0x226424 = _0x599753(true);
                    _0x5f29a6(_0x3d249b, _0xc65132 + '.' + _0x35ce68, _0x226424);
                  }
                }
                var _0xfc87bd = _0x176691[_0x4660f5];
                if (_0xfc87bd) {
                  _0x226424 = [].concat(_0xfc87bd).concat(_0x226424);
                }
                _0x176691[_0x4660f5] = _0x226424;
                _0x310ffe(',', true);
              }
              return _0x176691;
            }
            var _0x496cd9 = _0x599753(true);
            _0x5f29a6(_0x3d249b, _0xc65132, _0x496cd9);
            return _0x496cd9;
          }
          function _0x5f29a6(_0x1ec225, _0x42da15, _0x422b88) {
            if (_0x1ec225.setOption) {
              _0x1ec225.setOption(_0x42da15, _0x422b88);
            }
          }
          function _0x357f6f(_0x38ce8f) {
            if (_0x310ffe('[', true)) {
              do {
                _0x217e7c(_0x38ce8f, "option");
              } while (_0x310ffe(',', true));
              _0x310ffe(']');
            }
            return _0x38ce8f;
          }
          for (; null !== (_0x35ce68 = _0x2cba9c());) {
            switch (_0x35ce68) {
              case "package":
                if (!_0x1e50f3) {
                  throw _0x25187c(_0x35ce68);
                }
                _0xd0c163();
                break;
              case "import":
                if (!_0x1e50f3) {
                  throw _0x25187c(_0x35ce68);
                }
                _0x43b299();
                break;
              case "syntax":
                if (!_0x1e50f3) {
                  throw _0x25187c(_0x35ce68);
                }
                _0x34bfe6();
                break;
              case 'option':
                _0x217e7c(_0x4f64ed, _0x35ce68);
                _0x310ffe(';');
                break;
              default:
                if (_0x404cd9(_0x4f64ed, _0x35ce68)) {
                  _0x1e50f3 = false;
                  continue;
                }
                throw _0x25187c(_0x35ce68);
            }
          }
          _0x50a9c6.filename = null;
          return {
            'package': _0x15432d,
            'imports': _0x11f52f,
            'weakImports': _0x523e05,
            'syntax': _0x59b602,
            'root': _0x485301
          };
        }
        _0x48cf33.exports;
      }, function () {
        return {
          './tokenize': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js',
          './root': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          './type': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './field': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './mapfield': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './oneof': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js',
          './enum': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './service': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          './method': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          './types': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/common.js", function (_0x235d2b, _0x2568af, _0x427c82, _0x54ee31, _0x2f5e95) {
        _0x427c82.exports = _0x4a5d69;
        var _0x410df5;
        var _0xb72990 = /\/|\./;
        function _0x4a5d69(_0x1d07b0, _0x360426) {
          if (!_0xb72990.test(_0x1d07b0)) {
            _0x1d07b0 = "google/protobuf/" + _0x1d07b0 + ".proto";
            _0x360426 = {
              'nested': {
                'google': {
                  'nested': {
                    'protobuf': {
                      'nested': _0x360426
                    }
                  }
                }
              }
            };
          }
          _0x4a5d69[_0x1d07b0] = _0x360426;
        }
        _0x4a5d69("any", {
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
        _0x4a5d69("duration", {
          'Duration': _0x410df5 = {
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
        _0x4a5d69("timestamp", {
          'Timestamp': _0x410df5
        });
        _0x4a5d69("empty", {
          'Empty': {
            'fields': {}
          }
        });
        _0x4a5d69('struct', {
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
                'oneof': ['nullValue', "numberValue", 'stringValue', "boolValue", "structValue", "listValue"]
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
        _0x4a5d69("wrappers", {
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
        _0x4a5d69("field_mask", {
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
        _0x4a5d69.get = function (_0x1dbd37) {
          return _0x4a5d69[_0x1dbd37] || null;
        };
        _0x427c82.exports;
      }, {});
      var _0x3937d0;
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/index.js", function (_0x4d89ec, _0x38f0ff, _0x32ba16, _0x4ad026, _0x4f6107) {
        var _0x2770c1 = _0x32ba16.exports = _0x38f0ff('./index-light');
        _0x2770c1.build = 'full';
        _0x2770c1.tokenize = _0x38f0ff("./tokenize");
        _0x2770c1.parse = _0x38f0ff("./parse");
        _0x2770c1.common = _0x38f0ff("./common");
        _0x2770c1.Root._configure(_0x2770c1.Type, _0x2770c1.parse, _0x2770c1.common);
        _0x32ba16.exports;
      }, function () {
        return {
          './index-light': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js",
          './tokenize': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js',
          './parse': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/parse.js",
          './common': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/common.js"
        };
      });
      _0x11aabe.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/index.js", function (_0xbe63e5, _0x2416ec, _0x5a9b9c, _0x3fb457, _0x5425ea) {
        _0x5a9b9c.exports = _0x2416ec("./src/index");
        _0x3937d0 = _0x5a9b9c.exports;
      }, function () {
        return {
          './src/index': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/src/index.js"
        };
      });
      _0x11aabe.require("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/FortuneGems/Client/Thai_UAT/node_modules/protobufjs/index.js");
      _0x5a9fe0._RF.push({}, "f34139liEtOX7eeljN8Cz8w", "index", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "79200vKauRLUrVnUtg4y+VA", "GameView", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "84c5byXmKBEJIwVBTwOs7ly", "ButtonPro", undefined);
      var _0x50e6f4;
      var _0x3a2b23;
      var _0x407951;
      !function (_0x1a61be) {
        _0x1a61be[_0x1a61be.NONE = 0x0] = 'NONE';
        _0x1a61be[_0x1a61be.COLOR = 0x1] = "COLOR";
        _0x1a61be[_0x1a61be.SPRITE = 0x2] = "SPRITE";
        _0x1a61be[_0x1a61be.SCALE = 0x4] = "SCALE";
        _0x1a61be[_0x1a61be.COLOR_SPRITE = 0x3] = 'COLOR_SPRITE';
        _0x1a61be[_0x1a61be.COLOR_SCALE = 0x5] = "COLOR_SCALE";
        _0x1a61be[_0x1a61be.SPRITE_SCALE = 0x6] = "SPRITE_SCALE";
        _0x1a61be[_0x1a61be.ALL = 0x7] = "ALL";
      }(_0x50e6f4 || (_0x50e6f4 = {}));
      _0x3550c9(_0x50e6f4);
      (function (_0x2702d) {
        _0x2702d.NORMAL = "normal";
        _0x2702d.HOVER = 'hover';
        _0x2702d.PRESSED = "pressed";
        _0x2702d.DISABLED = "disabled";
      })(_0x3a2b23 || (_0x3a2b23 = {}));
      (function (_0x1b1769) {
        _0x1b1769.CLICK = "click";
      })(_0x407951 || (_0x407951 = {}));
      var _0x417058;
      var _0x4b08e7;
      var _0x18e556;
      var _0x2b6b48;
      var _0x575a04;
      var _0x4bf1e6;
      var _0x46c70e;
      var _0x3975fc;
      var _0x5e4ef5;
      var _0x468960;
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, '58afbgi72RCYrg3eW8ahovc', "CommonBuyBonusCell", undefined);
      var _0x24d758 = _0x297ef0.ccclass;
      var _0x3d3c52 = _0x297ef0.property;
      _0x417058 = _0x24d758("CommonBuyBonusCell");
      _0x4b08e7 = _0x3d3c52({
        'type': _0x1cbbb9,
        'tooltip': "購買文字"
      });
      _0x18e556 = _0x3d3c52({
        'type': _0x1cbbb9,
        'tooltip': "項目標題"
      });
      _0x2b6b48 = _0x3d3c52({
        'type': _0x298152,
        'tooltip': "標題圖片名稱"
      });
      _0x575a04 = _0x3d3c52({
        'type': _0x4457da,
        'tooltip': '金額'
      });
      _0x4bf1e6 = function (_0x11d560) {
        function _0x4200c8() {
          var _0x42de27;
          var _0x4a3c72 = arguments.length;
          var _0x60d9f3 = new Array(_0x4a3c72);
          for (var _0x400db1 = 0x0; _0x400db1 < _0x4a3c72; _0x400db1++) {
            _0x60d9f3[_0x400db1] = arguments[_0x400db1];
          }
          _0x1a08d3(_0x42de27 = _0x11d560.call.apply(_0x11d560, [this].concat(_0x60d9f3)) || this, "m_buyHintSprite", _0x46c70e, _0x5199ec(_0x42de27));
          _0x1a08d3(_0x42de27, "m_titleSprite", _0x3975fc, _0x5199ec(_0x42de27));
          _0x1a08d3(_0x42de27, "m_titlePicName", _0x5e4ef5, _0x5199ec(_0x42de27));
          _0x1a08d3(_0x42de27, "m_priceLabel", _0x468960, _0x5199ec(_0x42de27));
          return _0x42de27;
        }
        _0x4a7452(_0x4200c8, _0x11d560);
        var _0x1476b7 = _0x4200c8.prototype;
        _0x1476b7.start = function () {
          var _0x1eb977 = _0x1e91b3.GetGameAtlas();
          if (_0x1e91b3.CurrLang !== _0x534918.Lang.EN) {
            this.m_buyHintSprite.spriteFrame = _0x1eb977.getSpriteFrame("Txt_Buy_Feature_Buy");
            this.m_titleSprite.spriteFrame = _0x1eb977.getSpriteFrame(this.m_titlePicName);
          }
        };
        _0x1476b7.SetPrice = function (_0x57a789) {
          this.m_priceLabel.string = _0x57a789;
        };
        return _0x4200c8;
      }(_0x3127b3);
      _0x46c70e = _0x159f02(_0x4bf1e6.prototype, "m_buyHintSprite", [_0x4b08e7], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3975fc = _0x159f02(_0x4bf1e6.prototype, "m_titleSprite", [_0x18e556], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5e4ef5 = _0x159f02(_0x4bf1e6.prototype, "m_titlePicName", [_0x2b6b48], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return '';
        }
      });
      _0x468960 = _0x159f02(_0x4bf1e6.prototype, "m_priceLabel", [_0x575a04], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "deede8s0zBMX57ZpiWkWMfR", "CommonBuyBonus", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "da7972YP9VAta/rfkmC0gmE", "ColorText", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "ccb69RBfI5KBKNPuwywfE10", "ColorFadingUI", undefined);
      var _0x37c54a;
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "9cd57oopkhBmZJ5o4EZK1tk", "EvtReceiver", undefined);
      var _0x236c59 = _0x297ef0.ccclass;
      var _0x165c0b = _0x236c59(_0x37c54a = function (_0x28d990) {
        function _0x4925c4() {
          var _0x5d0467;
          var _0x1de75e = arguments.length;
          var _0x33745a = new Array(_0x1de75e);
          for (var _0x53e24e = 0x0; _0x53e24e < _0x1de75e; _0x53e24e++) {
            _0x33745a[_0x53e24e] = arguments[_0x53e24e];
          }
          (_0x5d0467 = _0x28d990.call.apply(_0x28d990, [this].concat(_0x33745a)) || this).m_callback = undefined;
          return _0x5d0467;
        }
        _0x4a7452(_0x4925c4, _0x28d990);
        _0x4925c4.Pack = function (_0xcf7780, _0x269549) {
          _0xcf7780.addComponent(_0x4925c4);
          _0xcf7780.getComponent(_0x4925c4).SetCallback(_0x269549);
        };
        var _0x14454f = _0x4925c4.prototype;
        _0x14454f.EvtReciever = function (_0x112eb0) {
          _0x2793f6("AnimEvtReciever: ", _0x112eb0);
          if (this.m_callback) {
            this.m_callback(_0x112eb0);
          } else {
            _0x2793f6("callback沒有設定，無法處理event: ", _0x112eb0);
          }
        };
        _0x14454f.triggerAnimationEvent = function (_0x5865cf) {
          _0x2793f6("triggerAnimationEvent: ", _0x5865cf);
          if (this.m_callback) {
            this.m_callback(_0x5865cf);
          } else {
            _0x2793f6("callback沒有設定，無法處理event: ", _0x5865cf);
          }
        };
        _0x14454f.SetCallback = function (_0x269310) {
          this.m_callback = _0x269310;
        };
        _0x14454f.onDestroy = function () {
          this.m_callback = null;
        };
        return _0x4925c4;
      }(_0x3127b3)) || _0x37c54a;
      var _0x44a648;
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "bc3c97zP8pM2I5NAob2S72W", 'EffectView', undefined);
      var _0x41faef = function (_0x24a3f2) {
        function _0x95df09() {
          var _0x1b316d;
          (_0x1b316d = _0x24a3f2.call(this) || this).m_awardBoardFile = _0x95df09.EFFECT_ROOT + "win/awardBoard";
          _0x1b316d.m_effectList = {};
          _0x1b316d.m_timeLineList = {};
          _0x1b316d.m_winEffCbFunc = null;
          _0x1b316d.m_currentWinEffect = null;
          _0x1b316d.m_currentWinEffectTimeline = null;
          _0x1b316d.m_awardBoard = null;
          _0x1b316d.m_awardBoardTimeline = null;
          _0x1b316d.m_txtWinValue = null;
          _0x1b316d.m_durRollMoneyTick = _0x95df09.MONEY_ROLL_TIME;
          _0x1b316d.m_moneyRealValue = 0x0;
          _0x1b316d.m_moneyRollValue = 0x0;
          _0x1b316d.m_bgMaskNode = null;
          _0x1b316d.m_commonGetCoinCbFunc = null;
          _0x1b316d.m_commonGetCoinMidCbFunc = null;
          _0x1b316d.m_commonGetCoinEff = null;
          _0x1b316d.m_commonGetCoinTline = null;
          _0x1b316d.m_updateMoneyEff = null;
          _0x1b316d.m_updateMoneyTline = null;
          _0x1b316d.m_getCoinParticle = null;
          _0x1b316d.m_odds = [0x3, 0x5, 0xa, 0x14, 0x1e];
          _0x1b316d.m_winEffectFiles = [null, null, _0x95df09.EFFECT_ROOT + _0x95df09.FILE_PATH.BIG_WIN, _0x95df09.EFFECT_ROOT + _0x95df09.FILE_PATH.MEGA_WIN, _0x95df09.EFFECT_ROOT + _0x95df09.FILE_PATH.SUPER_WIN];
          _0x1b316d.m_coinEffects = [0x2, 0x3, 0x5, 0x5, 0x5];
          _0x1b316d.m_coinTimes = [0x2, 0x2, 0x5, 0x5, 0x5];
          _0x1b316d.m_soundNameByOdds = [];
          _0x1b316d.m_isAutoCheckFloat = false;
          _0x1b316d.m_rotateCoins = {};
          _0x1b316d.m_coinEffectNode = undefined;
          _0x1b316d.m_loadedSound = undefined;
          _0x1b316d.m_isLandscape = false;
          _0x1b316d.m_LandscapeRate = 0x1;
          _0x1b316d.m_winType = undefined;
          _0x1b316d.m_nowPlaySoundID = null;
          _0x1b316d.m_loadedSound = false;
          return _0x1b316d;
        }
        _0x4a7452(_0x95df09, _0x24a3f2);
        var _0x23cc14 = _0x95df09.prototype;
        _0x23cc14.LoadSound = function () {
          this.m_loadedSound = true;
        };
        _0x23cc14.OnUpdate = function (_0x39f07b) {
          this.RollWinMoney(_0x39f07b);
        };
        _0x23cc14.ShowWinAndCoinEffect = function (_0x4368c7, _0x525673, _0x4bdb03) {
          if (undefined === _0x4bdb03) {
            _0x4bdb03 = null;
          }
          _0x4bdb03 = _0x4bdb03 || null;
          var _0x5ed347 = _0x1f905e.GetManagerId(_0x4bdb03);
          this.ShowWinEffect(_0x4368c7, _0x5ed347);
          if (!(undefined !== _0x4368c7.playCoinAtWinEffect && true !== _0x4368c7.playCoinAtWinEffect)) {
            this.playCoinEffect(_0x525673, _0x5ed347);
          }
          _0x1f905e.StartLoad(_0x5ed347);
        };
        _0x23cc14.ShowWinEffect = function (_0x4bacfa, _0x2b5714) {
          var _0x505e3a = this;
          if (undefined === _0x2b5714) {
            _0x2b5714 = -0x1;
          }
          var _0x4c4c03 = _0x4bacfa.effectFile;
          var _0x403a91 = _0x4bacfa.winValue;
          var _0x3b8db0 = _0x4bacfa.cbFunc;
          var _0x3ec895 = _0x4bacfa.yPos;
          var _0x289419 = _0x4bacfa.deltaY;
          var _0xbe3b62 = _0x4bacfa.cbFuncBtoM;
          var _0x1b2322 = _0x4bacfa.cbFuncMtoS;
          var _0x333fb8 = _0x4bacfa.cbFuncPlaying;
          var _0x170fb8 = _0x4bacfa.isLoop || false;
          var _0x1db2ba = _0x4bacfa.rollTime;
          if (null != _0x403a91) {
            var _0x3d4246 = function () {
              if (_0x505e3a.m_bgMaskNode) {
                _0x505e3a.m_bgMaskNode.active = true;
              }
              _0x2793f6("LoadPrefabManager CB", _0x403a91);
              _0x3ec895 = null != _0x3ec895 && _0x3ec895 || _0x95df09.DEFAULT_Y;
              _0x505e3a.m_effectList[_0x4c4c03].setPosition(_0x565251(_0x95df09.DesignSize.width / 0x2, _0x3ec895));
              _0x505e3a.m_effectList[_0x4c4c03].active = true;
              _0x505e3a.m_timeLineList[_0x4c4c03].play(_0x95df09.ANI_LABEL.ACT);
              _0x505e3a.m_currentWinEffect = _0x505e3a.m_effectList[_0x4c4c03];
              _0x505e3a.m_currentWinEffectTimeline = _0x505e3a.m_timeLineList[_0x4c4c03];
              _0x505e3a.m_currentWinEffectTimeline.name = _0x4c4c03;
              _0x289419 = _0x4c4c03 == _0x95df09.FILE_PATH.JACKPOT ? 0xb4 : null != _0x289419 ? _0x289419 : 0xe6;
              _0x505e3a.m_awardBoard.setPosition(_0x565251(_0x95df09.DesignSize.width / 0x2, _0x3ec895 - _0x289419));
              _0x505e3a.m_awardBoard.active = true;
              _0x505e3a.m_awardBoardTimeline.play(_0x95df09.ANI_LABEL.ACT);
              _0x505e3a.SetWinValue(_0x403a91, _0x1db2ba);
              if (!(null == _0x333fb8)) {
                _0x333fb8();
              }
            };
            var _0x34f998 = _0x2b5714;
            if (-0x1 == _0x2b5714) {
              _0x34f998 = _0x1f905e.GetManagerId(_0x3d4246);
            }
            this.m_winEffCbFunc = _0x3b8db0;
            if (null == this.m_effectList[_0x4c4c03]) {
              _0x1f905e.AddLoad(_0x34f998);
              _0x534918.GameBundle.load(_0x4c4c03, function (_0x3d247f, _0x1a1373) {
                if (_0x3d247f) {
                  _0x43d302(_0x3d247f.message || _0x3d247f);
                } else {
                  var _0x1ba111 = _0x2ece74(_0x1a1373);
                  _0x1ba111.active = false;
                  _0x505e3a.addChild(_0x1ba111);
                  _0x3d013c.SetZIndex(_0x1ba111, _0x95df09.EFF_ZORDER.WIN_EFFECT);
                  var _0x3ca8fb = _0x1ba111.getComponent(_0x1c3d03);
                  _0x165c0b.Pack(_0x1ba111, function (_0x29211c) {
                    if (_0x29211c == _0x95df09.ANI_FRAME_EVENT.ENDING) {
                      if (_0x505e3a.m_awardBoard && _0x505e3a.m_awardBoard.active) {
                        _0x505e3a.m_awardBoardTimeline.play(_0x95df09.ANI_LABEL.ENDING);
                      }
                    } else {
                      if (_0x29211c == _0x95df09.ANI_FRAME_EVENT.LOOP) {
                        if (_0x170fb8) {
                          _0x3ca8fb.play(_0x95df09.ANI_LABEL.LOOP);
                          _0x3ca8fb.getState(_0x95df09.ANI_LABEL.LOOP).wrapMode = _0x5c7736.WrapMode.Loop;
                        }
                      } else if (_0x29211c == _0x95df09.ANI_FRAME_EVENT.B_TO_M) {
                        if (_0x505e3a.m_awardBoard && _0x505e3a.m_awardBoard.active) {
                          _0x3ad8f0(_0x505e3a.m_txtWinValue).by(0.25, {
                            'scale': _0x565251(1.5, 1.5, 1.5)
                          }).by(0.1, {
                            'scale': _0x565251(0.9, 0.9, 0.9)
                          }).start();
                        }
                        if (_0xbe3b62) {
                          _0xbe3b62();
                        }
                      } else if (_0x29211c == _0x95df09.ANI_FRAME_EVENT.M_TO_S) {
                        if (_0x505e3a.m_awardBoard && _0x505e3a.m_awardBoard.active) {
                          _0x3ad8f0(_0x505e3a.m_txtWinValue).by(0.25, {
                            'scale': _0x565251(1.5, 1.5, 1.5)
                          }).by(0.1, {
                            'scale': _0x565251(0.9, 0.9, 0.9)
                          }).start();
                        }
                        if (!(null == _0x1b2322)) {
                          _0x1b2322();
                        }
                      } else if (_0x29211c == _0x95df09.ANI_FRAME_EVENT.END) {
                        _0x2793f6("ANI_FRAME_EVENT.END");
                        _0x505e3a.OnAnimationEnd();
                        if (_0x505e3a.m_winEffCbFunc) {
                          _0x505e3a.m_winEffCbFunc();
                        }
                      }
                    }
                  });
                  _0x1ba111.active = false;
                  _0x505e3a.m_effectList[_0x4c4c03] = _0x1ba111;
                  _0x505e3a.m_timeLineList[_0x4c4c03] = _0x3ca8fb;
                  _0x1f905e.OnLoaded(_0x34f998);
                }
              });
              if (null == this.m_awardBoard) {
                _0x1f905e.AddLoad(_0x34f998);
                _0x534918.GameBundle.load(this.m_awardBoardFile, function (_0x4bf2d1, _0x455a82) {
                  if (_0x4bf2d1) {
                    _0x43d302(_0x4bf2d1.message || _0x4bf2d1);
                  } else {
                    _0x505e3a.m_awardBoard = _0x2ece74(_0x455a82);
                    _0x505e3a.addChild(_0x505e3a.m_awardBoard);
                    _0x3d013c.SetZIndex(_0x505e3a.m_awardBoard, _0x95df09.EFF_ZORDER.AWARD_BOARD);
                    _0x505e3a.m_awardBoard.active = false;
                    _0x505e3a.m_awardBoardTimeline = _0x505e3a.m_awardBoard.getComponent(_0x1c3d03);
                    _0x505e3a.m_txtWinValue = _0x505e3a.m_awardBoard.getChildByName("win_value_label");
                    _0x1f905e.OnLoaded(_0x34f998);
                  }
                });
              }
              if (-0x1 == _0x2b5714) {
                _0x1f905e.StartLoad(_0x34f998);
              } else {
                _0x1f905e.AddOnLoadedCallback(_0x34f998, _0x3d4246);
              }
            } else if (-0x1 == _0x2b5714) {
              _0x3d4246();
            } else {
              _0x1f905e.AddOnLoadedCallback(_0x34f998, _0x3d4246);
            }
          } else if (this.m_awardBoard) {
            this.m_awardBoard.active = false;
            this.m_awardBoardTimeline.stop();
          }
        };
        _0x23cc14.WinEffect = function () {
          if (this.m_currentWinEffectTimeline) {
            this.m_currentWinEffectTimeline.play(_0x95df09.ANI_LABEL.ENDING, false);
          }
        };
        _0x23cc14.SetWinValue = function (_0x286d51, _0x4bff0a, _0x6a9132) {
          if (undefined === _0x4bff0a) {
            _0x4bff0a = null;
          }
          if (undefined === _0x6a9132) {
            _0x6a9132 = 0x0;
          }
          this.m_moneyRealValue = _0x3d013c.strip(_0x286d51);
          this.m_moneyRollValue = _0x6a9132;
          _0x4bff0a = null == _0x4bff0a && _0x95df09.MONEY_ROLL_TIME || _0x4bff0a;
          this.m_durRollMoneyTick = _0x3d013c.strip(_0x4bff0a);
        };
        _0x23cc14.RollWinMoney = function (_0x104da8) {
          this.m_moneyRealValue = _0x3d013c.strip(this.m_moneyRealValue);
          this.m_moneyRollValue = _0x3d013c.strip(this.m_moneyRollValue);
          if (this.m_moneyRollValue < this.m_moneyRealValue) {
            var _0x38786c = _0x3d013c.divide(this.m_durRollMoneyTick, _0x3d013c.strip(_0x104da8));
            var _0x5e873c = _0x3d013c.divide(_0x3d013c.strip(this.m_moneyRealValue - this.m_moneyRollValue), _0x38786c);
            var _0x31ca39 = _0x3d013c.FORMAT_NUMBER_TYPE.DEFINE_DOT;
            if (this.m_isAutoCheckFloat) {
              _0x31ca39 = this.m_moneyRealValue.toString().indexOf('.') > -0x1 ? _0x3d013c.FORMAT_NUMBER_TYPE.PERMANENT_DOT : _0x3d013c.FORMAT_NUMBER_TYPE.NONE_DOT;
            }
            this.m_moneyRollValue = _0x3d013c.strip(this.m_moneyRollValue + _0x5e873c);
            if (this.m_moneyRollValue > this.m_moneyRealValue) {
              this.m_moneyRollValue = this.m_moneyRealValue;
            }
            this.SetLabelString(this.m_txtWinValue, this.m_moneyRollValue, _0x31ca39);
            this.m_durRollMoneyTick = _0x3d013c.strip(this.m_durRollMoneyTick - _0x104da8);
          }
        };
        _0x23cc14.SetLabelString = function (_0x178793, _0x134efe, _0x1f5451) {
          if (undefined === _0x1f5451) {
            _0x1f5451 = null;
          }
          var _0x339bab = _0x178793.getComponent(_0x4457da);
          if (null != _0x339bab && null != _0x339bab) {
            if (null == _0x1f5451 || null == _0x1f5451) {
              _0x339bab.string = _0x134efe.toString();
            } else {
              var _0x504e19;
              if ("number" == typeof _0x134efe) {
                _0x504e19 = _0x134efe;
              } else {
                var _0x434ff9 = _0x134efe.replace(/,/g, '');
                _0x504e19 = isNaN(Number(_0x434ff9)) ? 0x0 : Number(_0x434ff9);
              }
              _0x339bab.string = _0x3d013c.FormatNumberThousands(_0x504e19, _0x1f5451);
            }
            _0x3d013c.SetFont(_0x339bab);
          } else {
            _0x2793f6("Warning!!!!!!!!!! SetLabelString: ", _0x178793);
          }
        };
        _0x23cc14.SetWinMoneyToMax = function () {};
        _0x23cc14.IsRollMoneyEnd = function () {
          return this.m_moneyRollValue == this.m_moneyRealValue;
        };
        _0x23cc14.StopAnimation = function (_0x4e0da2) {
          if (this.m_currentWinEffectTimeline) {
            this.m_currentWinEffectTimeline.stop();
          }
          if (this.m_awardBoard) {
            this.m_awardBoard.active = false;
            this.m_awardBoardTimeline.stop();
          }
          if (0x1 != _0x4e0da2 && this.m_winEffCbFunc) {
            this.m_winEffCbFunc();
          }
          this.m_winEffCbFunc = null;
          this.OnAnimationEnd();
        };
        _0x23cc14.OnAnimationEnd = function () {
          if (this.m_currentWinEffect) {
            this.m_currentWinEffect.active = false;
          }
          if (this.m_bgMaskNode) {
            this.m_bgMaskNode.active = false;
          }
          this.m_moneyRealValue = 0x0;
          this.m_moneyRollValue = 0x0;
        };
        _0x23cc14.playCoinEffect = function (_0x2ad082, _0x556c73) {
          var _0x4596ab = this;
          if (undefined === _0x556c73) {
            _0x556c73 = -0x1;
          }
          if (_0x534918.CommonBundle) {
            var _0x390aa4 = _0x2ad082.level;
            var _0xcfef48 = _0x2ad082.position;
            var _0x4578d2 = _0x2ad082.time;
            if (null == _0x4578d2) {
              _0x4578d2 = 0x0;
            }
            var _0x68141 = _0x2ad082.zOrder;
            if (null == _0x68141) {
              _0x68141 = 0x0;
            }
            var _0x1ee5a6 = _0x2ad082.parent;
            this.stopCoinEffectImmly();
            var _0x3f814e = _0x95df09.COIN_EFFECT_LIST[_0x390aa4];
            if (_0x3f814e = _0x3d013c.GetFilePath(_0x3f814e)) {
              _0x2793f6("~~~~~~~~~~~~~~~~~~~~~~", _0x2ad082, _0x4578d2, _0x68141);
              var _0x19d219 = function () {
                _0x4596ab.m_coinEffectNode.setPosition(_0x565251(_0xcfef48.x, _0xcfef48.y));
                if (null == _0x1ee5a6 || null == _0x1ee5a6) {
                  _0x4596ab.addChild(_0x4596ab.m_coinEffectNode);
                  _0x3d013c.SetZIndex(_0x4596ab.m_coinEffectNode, 0x0);
                } else {
                  _0x1ee5a6.addChild(_0x4596ab.m_coinEffectNode);
                  _0x3d013c.SetZIndex(_0x4596ab.m_coinEffectNode, _0x68141);
                }
                if (0x0 != _0x4578d2) {
                  _0x3ad8f0(_0x4596ab).delay(_0x4578d2).call(function () {
                    _0x4596ab.stopCoinEffect();
                  }).start();
                }
              };
              if (-0x1 != _0x556c73) {
                _0x1f905e.AddOnLoadedCallback(_0x556c73, _0x19d219);
                _0x1f905e.AddLoad(_0x556c73);
              }
              _0x534918.CommonBundle.load(_0x3f814e, function (_0xbd04cc, _0x3f111e) {
                _0x2793f6("LoadRes ", _0x3f814e);
                if (_0xbd04cc) {
                  _0x43d302(_0xbd04cc.message || _0xbd04cc);
                } else {
                  _0x4596ab.m_coinEffectNode = _0x2ece74(_0x3f111e);
                  if (_0x4596ab.m_coinEffectNode) {
                    if (-0x1 == _0x556c73) {
                      _0x19d219();
                    } else {
                      _0x1f905e.OnLoaded(_0x556c73);
                    }
                  } else {
                    _0x2793f6("SlotBottomBarView.playCoinEffect m_coinEffect is null");
                  }
                }
              });
            }
          }
        };
        _0x23cc14.stopCoinEffectImmly = function () {
          if (null != this.m_coinEffectNode && this.m_coinEffectNode.removeFromParent) {
            this.m_coinEffectNode.removeFromParent();
            this.m_coinEffectNode = null;
          }
        };
        _0x23cc14.stopCoinEffect = function () {
          if (null != this.m_coinEffectNode && this.m_coinEffectNode) {
            var _0x23d9a8 = this.m_coinEffectNode.getChildByName("Particle_1").getComponent(_0x3cc7c9);
            var _0x5bbadd = this.m_coinEffectNode.getChildByName("Particle_2").getComponent(_0x3cc7c9);
            if (_0x23d9a8) {
              _0x23d9a8.stopSystem();
            }
            if (_0x5bbadd) {
              _0x5bbadd.stopSystem();
            }
          }
        };
        _0x23cc14.ShowCommonEffect = function (_0x3ab7b3, _0x12ac7a, _0x74077, _0x1920af) {
          if (undefined === _0x74077) {
            _0x74077 = null;
          }
          if (undefined === _0x1920af) {
            _0x1920af = null;
          }
          _0x74077 = _0x74077 || {};
          _0x1920af = _0x1920af || {};
          var _0x17931a = new _0x3fa266(_0x95df09.DesignSize.width / 0x2, _0x95df09.DesignSize.height);
          var _0x41853c = new _0x3fa266(_0x95df09.DesignSize.width / 0x2 - 0xa, 0x91);
          var _0x46a0cf = undefined;
          var _0x3c6248 = _0x3ab7b3 / _0x12ac7a;
          if (_0x4bd5fc) {
            _0x3ab7b3 = _0x4bd5fc.GetDisplayValue(_0x3ab7b3);
          }
          for (var _0x3bdee2 = this.m_odds.length - 0x1; _0x3bdee2 >= 0x0; _0x3bdee2--) {
            if (_0x3c6248 >= this.m_odds[_0x3bdee2]) {
              _0x1920af.level = this.m_coinEffects[_0x3bdee2];
              if (0x5 == this.m_coinEffects[_0x3bdee2]) {
                _0x1920af.position = _0x1920af.position ? _0x1920af.position : _0x17931a;
              } else {
                _0x1920af.position = _0x1920af.smallPosition ? _0x1920af.smallPosition : _0x1920af.position ? _0x1920af.position : _0x41853c;
              }
              if (null == _0x1920af.time || _0x1920af.time <= 0x0) {
                _0x1920af.time = this.m_coinTimes[_0x3bdee2];
              }
              if (0x5 == this.m_coinEffects[_0x3bdee2]) {
                _0x74077.effectFile = this.m_winEffectFiles[_0x3bdee2];
                _0x74077.winValue = _0x3ab7b3;
                this.SetWinType(_0x3bdee2);
                this.ShowWinAndCoinEffect(_0x74077, _0x1920af);
              } else {
                this.playCoinEffect(_0x1920af);
              }
              _0x46a0cf = this.m_soundNameByOdds[_0x3bdee2];
              break;
            }
          }
          if (null != _0x46a0cf) {
            this.m_nowPlaySoundID = _0x3a77d3.Play(_0x46a0cf, false);
          }
          if (null == _0x1920af.time) {
            _0x1920af.time = 0x0;
          }
          return _0x1920af.time;
        };
        _0x23cc14.SkipEffect = function () {
          this.stopCoinEffect();
          _0xa19059.instance.ActionManager.removeAllActionsFromTarget(this);
          if (this.m_currentWinEffectTimeline) {
            var _0x66f8c8 = this.m_currentWinEffectTimeline.name;
            var _0x18e36a = _0x3d013c.FORMAT_NUMBER_TYPE.DEFINE_DOT;
            if (!(_0x66f8c8 != _0x95df09.FILE_PATH.BIG_WIN && _0x66f8c8 != _0x95df09.FILE_PATH.MEGA_WIN && _0x66f8c8 != _0x95df09.FILE_PATH.SUPER_WIN)) {
              this.m_moneyRollValue = _0x3d013c.strip(this.m_moneyRollValue);
              this.m_moneyRealValue = _0x3d013c.strip(this.m_moneyRealValue);
              if (this.m_moneyRollValue == this.m_moneyRealValue) {
                this.m_awardBoardTimeline.play(_0x95df09.ANI_LABEL.ENDING);
                this.m_currentWinEffectTimeline.setCurrentTime(0x5);
              } else {
                if (this.m_isAutoCheckFloat) {
                  _0x18e36a = this.m_moneyRealValue.toString().indexOf('.') > -0x1 ? _0x3d013c.FORMAT_NUMBER_TYPE.PERMANENT_DOT : _0x3d013c.FORMAT_NUMBER_TYPE.NONE_DOT;
                }
                this.SetLabelString(this.m_txtWinValue, this.m_moneyRealValue, _0x18e36a);
                this.m_currentWinEffectTimeline.setCurrentTime(3.8);
              }
              this.m_currentWinEffectTimeline = null;
            }
            this.m_moneyRollValue = this.m_moneyRealValue;
          }
        };
        _0x23cc14.SkipEffectSound = function () {
          if (this.m_nowPlaySoundID) {
            _0x3a77d3.Stop(this.m_nowPlaySoundID);
            this.m_nowPlaySoundID = null;
          }
        };
        _0x23cc14.SetAutoCheckFloat = function (_0x49ebaa) {
          this.m_isAutoCheckFloat = _0x49ebaa;
        };
        _0x23cc14.SetOdds = function (_0x328da1) {
          this.m_odds = _0x328da1;
        };
        _0x23cc14.SetWinEffectFiles = function (_0x221c6c) {
          this.m_winEffectFiles = _0x221c6c;
        };
        _0x23cc14.SetAwardBoardFile = function (_0x33be64) {
          this.m_awardBoardFile = _0x33be64;
        };
        _0x23cc14.SetEffectLevels = function (_0x13f530) {
          this.m_coinEffects = _0x13f530;
        };
        _0x23cc14.SetEffectTimes = function (_0x38e408) {
          this.m_coinTimes = _0x38e408;
        };
        _0x23cc14.SetSoundNameByOdds = function (_0x45a3b0) {
          this.m_soundNameByOdds = _0x45a3b0;
        };
        _0x23cc14.SetBGMaskNode = function (_0x102651) {
          if (null != _0x102651) {
            this.m_bgMaskNode = _0x102651;
          }
        };
        _0x23cc14.SetWinTextFontSize = function (_0x492dfd) {
          if (this.m_txtWinValue) {
            this.m_txtWinValue.getComponent(_0x4457da).fontSize = _0x492dfd;
          }
        };
        _0x23cc14.SetWinType = function (_0x22beaa) {
          this.m_winType = _0x22beaa;
        };
        _0x2d513c(_0x95df09, [{
          'key': "CoinEffectNode",
          'set': function (_0x4c2f3c) {
            this.m_coinEffectNode = _0x4c2f3c;
          }
        }]);
        return _0x95df09;
      }(_0x4fc6ef);
      _0x41faef.DesignSize = {
        'width': 0x470,
        'height': 0x280
      };
      _0x41faef.SOUND_FILE = {
        'COMMON_SUPER_WIN': null,
        'COMMON_MEGA_WIN': null,
        'COMMON_COIN_SMALL': null,
        'COMMON_COIN_MEDIUM': null,
        'COMMON_BIG_WIN': null
      };
      _0x41faef.EFFECT_ROOT = "Astt/%s/effect/GameCommonEffect/";
      _0x41faef.FILE_PATH = {
        'BIG_WIN': "win/big_anim",
        'MEGA_WIN': 'win/mega_anim',
        'SUPER_WIN': "win/super_anim",
        'JACKPOT': "win/effect_Jackpot",
        'BIG_TO_MEGA_WIN': "win/bigToMega_anim",
        'BIG_TO_SUPER_WIN': 'win/bigToSuper_anim',
        'FIVE_OF_A_KIND': 'win/5ofa_anim'
      };
      _0x44a648 = {
        [_0x41faef.FILE_PATH.BIG_WIN]: "Common_big_win",
        [_0x41faef.FILE_PATH.MEGA_WIN]: "Common_mega_win",
        [_0x41faef.FILE_PATH.SUPER_WIN]: "Common_super_win",
        [_0x41faef.FILE_PATH.JACKPOT]: "Common_JP_win",
        [_0x41faef.FILE_PATH.BIG_TO_MEGA_WIN]: "Common_big_win",
        [_0x41faef.FILE_PATH.BIG_TO_SUPER_WIN]: "Common_big_win",
        [_0x41faef.FILE_PATH.FIVE_OF_A_KIND]: "Common_big_win"
      };
      _0x41faef.WIN_EFFECT_SOUND_NAME = _0x44a648;
      _0x41faef.EffectViewUIName = _0x3d8e42({
        'TXT_WIN_MONEY': "label_final_value",
        'PARTICLE': "Particle_"
      });
      _0x41faef.DEFAULT_Y = 0x190;
      _0x41faef.PARTICLE_AMOUNT_MAX = 0x2;
      _0x41faef.MONEY_ROLL_TIME = 0x3;
      _0x41faef.UPDATE_MONEY_CSB = _0x41faef.EFFECT_ROOT + "common_get_coin/Node_GetCoin01.csb";
      _0x41faef.COMMON_GET_COIN_CSB = _0x41faef.EFFECT_ROOT + "common_get_coin/Node_GetCoin02.csb";
      _0x41faef.GET_COIN_PARTICLE_CSB = _0x41faef.EFFECT_ROOT + 'common_get_coin/Particle/_V3_GetCoin02.plist';
      _0x41faef.ROTATE_COIN_CSB = _0x41faef.EFFECT_ROOT + "common_get_coin/Node_CoinRotation01.csb";
      _0x41faef.TRIAL_COIN_CSB = _0x41faef.EFFECT_ROOT + 'common_get_coin/Node_GetTrialCoin.csb';
      _0x41faef.COIN_APPEAR_PARTICLE_CSB = _0x41faef.EFFECT_ROOT + 'common_get_coin/Particle/New_CoinShine03.plist';
      _0x41faef.COMMON_COIN_AMOUNT = 0x8;
      _0x41faef.ANI_LABEL = {
        'ACT': "main",
        'LOOP': "loop",
        'ENDING': "ending"
      };
      _0x41faef.ANI_FRAME_EVENT = {
        'MID': "AniMid",
        'B_TO_M': "AniBtoM",
        'M_TO_S': "AniMtoS",
        'ENDING': "AniEnding",
        'END': "AniEnd",
        'LOOP': "AniLoop"
      };
      _0x41faef.EFF_ZORDER = {
        'COIN_FALL': 0x1,
        'WIN_EFFECT': 0x2,
        'AWARD_BOARD': 0x3,
        'COMMON_GET_COIN': 0x4,
        'GET_TRIAL_COIN': 0x5
      };
      _0x41faef.COIN_EFFECT_LIST = {
        0x1: _0x41faef.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_1",
        0x2: _0x41faef.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_2",
        0x3: _0x41faef.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_3",
        0x4: _0x41faef.EFFECT_ROOT + 'coin/2_BigGoldCoinFX_1',
        0x5: _0x41faef.EFFECT_ROOT + 'coin/3_MegaGoldCoinFX_1',
        0x6: _0x41faef.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_2",
        0x7: _0x41faef.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_3"
      };
      _0x41faef.WIN_TYPE = {
        'BIG': 0x2,
        'MEGA': 0x3,
        'SUPER': 0x4
      };
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "5cf68x6BTZHP5QWXU3HRb/c", "FeaturePageComponent", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "e33faPhWqxMHa92Db40WLqj", "LabelSpacingX", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "a6f15DRaTNJEaqvyk6QuIo3", "LangImg", undefined);
      var _0x1bfcc7;
      !function (_0xa40ac7) {
        _0xa40ac7[_0xa40ac7.PNG = 0x0] = "PNG";
        _0xa40ac7[_0xa40ac7.JPG = 0x1] = "JPG";
      }(_0x1bfcc7 || (_0x1bfcc7 = {}));
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "3638c7rYSpEjZ7x8wtqusdg", 'RenderDataBump', undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "75a969XvAFPfax+l1fDcqo9", "ScrollEventHandler", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, 'eb577rwRR5ASa6OivNuPgEY', "SeriesComponent", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "18f47v83XtI64h+ISwRgq3A", "BoneFollow", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "44834DdFVNM2reoglp7HL82", 'NewBoneFollow', undefined);
      var _0x1d8b8d;
      !function (_0xf68db1) {
        _0xf68db1[_0xf68db1["default"] = 0x1] = "default";
      }(_0x1d8b8d || (_0x1d8b8d = {}));
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "2da2cEqApNLm7hZxNo+Lfkx", "NewSlotColorFollow", undefined);
      var _0x542d8c;
      !function (_0x5d434e) {
        _0x5d434e[_0x5d434e["default"] = 0x1] = "default";
      }(_0x542d8c || (_0x542d8c = {}));
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "866f1RjwMhFfapt6JLtipxM", "SkeletonSync", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "e2171n/i+xGsoWeQMXewobE", "SlotActivator", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "e23desmKVBLjKgDg5KLcySp", "SlotColorFollow", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "ff032nME8lBJKBpMlK8O/1z", "SlotCulling", undefined);
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "f8b5e4BLTJNX7FPcFOEaBkq", "ZipBundleLoader", undefined);
      var _0x313ff7 = new Map();
      var _0x190aea = new Map();
      var _0x5266c2 = new Map();
      var _0x68ce7a = function () {
        function _0x135f24() {
          this.loadedZipNames = new Array();
        }
        var _0x1f2cf6 = _0x135f24.prototype;
        _0x1f2cf6.downloadZip = function (_0x520d99, _0x859ad4) {
          return new Promise(function (_0x1dd0e2) {
            var _0x30483b = _0x520d99.match(/[^/]+$/);
            if (null !== _0x30483b) {
              var _0x19d984 = '' + _0x30483b[0x0] + _0x859ad4 + ".zip";
              _0x4dc69f.downloader.downloadFile(_0x520d99 + '/' + _0x19d984, {
                'xhrResponseType': 'arraybuffer'
              }, null, function (_0x49bd8b, _0x12c8ba) {
                _0x1dd0e2(_0x12c8ba);
              });
            } else {
              _0x1dd0e2(null);
            }
          });
        };
        _0x1f2cf6.loadZip = function () {
          var _0x2eded2 = _0x219aea(_0xb84dc1().mark(function _0x4c48ef(_0x4e95d3, _0x56392d) {
            var _0xcc795a;
            var _0x1dfd83;
            var _0x397c21;
            return _0xb84dc1().wrap(function (_0x39b001) {
              for (;;) {
                switch (_0x39b001.prev = _0x39b001.next) {
                  case 0x0:
                    _0xcc795a = _0x56392d ? '.' + _0x56392d : '';
                    _0x39b001.next = 0x3;
                    return this.downloadZip(_0x4e95d3, _0xcc795a);
                  case 0x3:
                    if (null !== (_0x1dfd83 = _0x39b001.sent)) {
                      _0x397c21 = _0x4e95d3.replace(/(.*?)\/assets\//, 'assets/');
                      globalThis.fflate.unzip(new Uint8Array(_0x1dfd83), function (_0x11c1f9, _0x50467e) {
                        if (_0x11c1f9) {
                          console.warn("Unzip failed:", _0x11c1f9.message);
                        } else {
                          Object.keys(_0x50467e).forEach(function (_0x64eec5) {
                            _0x313ff7.set(_0x4e95d3 + '/' + _0x64eec5, _0x50467e[_0x64eec5]);
                            _0x313ff7.set(_0x397c21 + '/' + _0x64eec5, _0x50467e[_0x64eec5]);
                          });
                        }
                      });
                    }
                  case 0x5:
                  case 'end':
                    return _0x39b001.stop();
                }
              }
            }, _0x4c48ef, this);
          }));
          return function (_0x1fcf9b, _0x3894e4) {
            return _0x2eded2.apply(this, arguments);
          };
        }();
        _0x1f2cf6.init = function () {
          if (globalThis.fflate) {
            var _0x5e9a6f = Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, "response");
            Object.defineProperty(XMLHttpRequest.prototype, 'response', {
              'get': function () {
                return this.ZipCacheUrl ? _0x190aea.get(this.ZipCacheUrl) : _0x5e9a6f.get.call(this);
              },
              'set': function (_0x2d5e8f) {},
              'configurable': true
            });
            var _0x715f4d = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function (_0x12ee15, _0x1e892d, _0x4dafad, _0x14b433, _0xb05b6f) {
              function _0x1c3730() {
                var _0x289879 = this.status >= 0xc8 && this.status < 0x12c || 0x130 == this.status;
                if (this.readyState == XMLHttpRequest.DONE && !_0x289879 && 0x194 != this.status && _0x1e892d.includes('http')) {
                  _0x215e72(0x2bd, this.status);
                  _0x215e72(0x2be, _0x1e892d);
                }
                this.removeEventListener("load", _0x1c3730);
              }
              if (_0x313ff7.has(_0x1e892d)) {
                this.ZipCacheUrl = _0x1e892d;
              }
              this.addEventListener('load', _0x1c3730.bind(this));
              return _0x715f4d.apply(this, arguments);
            };
            var _0x1ff115 = XMLHttpRequest.prototype.send;
            XMLHttpRequest.prototype.send = _0x219aea(_0xb84dc1().mark(function _0x5a0c65(_0x3ac622) {
              var _0x20f2fc;
              var _0x2898a3;
              var _0x57d29c;
              var _0x561e3d;
              var _0x3edbe8;
              var _0x35e8bc;
              var _0x24870d;
              var _0x550033;
              return _0xb84dc1().wrap(function (_0x2b4a17) {
                for (;;) {
                  switch (_0x2b4a17.prev = _0x2b4a17.next) {
                    case 0x0:
                      if (!this.ZipCacheUrl) {
                        _0x2b4a17.next = 0x1a;
                        break;
                      }
                      if (_0x190aea.has(this.ZipCacheUrl)) {
                        _0x2b4a17.next = 0x18;
                        break;
                      }
                      _0x20f2fc = this.responseType;
                      _0x2898a3 = _0x313ff7.get(this.ZipCacheUrl);
                      _0x57d29c = null;
                      _0x2b4a17.t0 = _0x20f2fc;
                      _0x2b4a17.next = "arraybuffer" === _0x2b4a17.t0 ? 0x8 : "json" === _0x2b4a17.t0 ? 0xa : "text" === _0x2b4a17.t0 ? 0xe : 0x11;
                      break;
                    case 0x8:
                      _0x57d29c = _0x2898a3.buffer ? _0x2898a3.buffer : _0x2898a3;
                      return _0x2b4a17.abrupt('break', 0x12);
                    case 0xa:
                      _0x561e3d = new TextDecoder();
                      _0x3edbe8 = _0x561e3d.decode(_0x2898a3);
                      _0x57d29c = JSON.parse(_0x3edbe8);
                      return _0x2b4a17.abrupt('break', 0x12);
                    case 0xe:
                      _0x35e8bc = new TextDecoder();
                      _0x57d29c = _0x35e8bc.decode(_0x2898a3);
                      return _0x2b4a17.abrupt('break', 0x12);
                    case 0x11:
                      console.error("Unknown type in zipCache:", _0x20f2fc);
                    case 0x12:
                      if (_0x24870d = _0x5266c2.get(this.ZipCacheUrl)) {
                        _0x190aea["delete"](this.ZipCacheUrl + "@version" + _0x24870d);
                        _0x5266c2["delete"](this.ZipCacheUrl);
                      }
                      _0x550033 = performance.now();
                      _0x5266c2.set(this.ZipCacheUrl, _0x550033);
                      this.ZipCacheUrl = this.ZipCacheUrl + "@version" + _0x550033;
                      _0x190aea.set(this.ZipCacheUrl, _0x57d29c);
                    case 0x18:
                      this.onload();
                      return _0x2b4a17.abrupt("return");
                    case 0x1a:
                      return _0x2b4a17.abrupt("return", _0x1ff115.apply(this, arguments));
                    case 0x1b:
                    case "end":
                      return _0x2b4a17.stop();
                  }
                }
              }, _0x5a0c65, this);
            }));
          } else {
            console.error("fflate is not found.");
          }
        };
        return _0x135f24;
      }();
      function _0x215e72(_0x2e75ec, _0x4f34ec) {
        if (!_0x487a87.isNative) {
          var _0x26a4d8 = "https://" + window.location.host + '/';
          if (-0x1 == _0x26a4d8.indexOf("localhost") && 0x1 != /^http(s)?:\/\/([0-9]{1,3}\.){3}[0-9]{1,3}(:[0-9]+)?\/.*?$/.test(_0x26a4d8)) {
            var _0x4fedb9 = 0x0;
            switch (_0x487a87.browserType) {
              case _0x487a87.BrowserType.CHROME:
                _0x4fedb9 = 0x1;
                break;
              case _0x487a87.BrowserType.SAFARI:
                _0x4fedb9 = 0x2;
                break;
              case _0x487a87.BrowserType.IE:
                _0x4fedb9 = 0x3;
                break;
              case _0x487a87.BrowserType.UC:
                _0x4fedb9 = 0x4;
                break;
              case _0x487a87.BrowserType.QQ:
              case _0x487a87.BrowserType.MOBILE_QQ:
                _0x4fedb9 = 0x5;
                break;
              case _0x487a87.BrowserType.FIREFOX:
                _0x4fedb9 = 0x6;
            }
            var _0x1e4b54 = 0x0;
            switch (_0x487a87.os) {
              case _0x487a87.OS.ANDROID:
                _0x1e4b54 = 0x1;
                break;
              case _0x487a87.OS.IOS:
                _0x1e4b54 = 0x2;
                break;
              case _0x487a87.OS.WINDOWS:
                _0x1e4b54 = 0x3;
                break;
              default:
                _0x1e4b54 = 0x0;
            }
            var _0x40d8c8 = _0x508328("apiId") || '-1';
            var _0x2595b2 = _0x508328('ssoKey') || '1';
            var _0x53148d = _0x508328('gameID') || '-1';
            var _0x21359c = 'https://' + (_0x508328("domain_platform") || _0x508328('gs') || "gnidnawcs").split('').reverse().join('') + '/webservice/event/assetUpdate?';
            _0xbf7c6d(_0x21359c += "?AccountID=-1&GameID=" + _0x53148d + "&GameVersion=" + new Date().getTime() + "&EventID=" + _0x2e75ec + "&EventValue=" + _0x4f34ec + "&BrowserSystem=" + _0x4fedb9 + "&DeviceSystem=" + _0x1e4b54 + '&CreateTime=' + new Date().toISOString() + "&Screen=0&SSOKey=" + _0x2595b2 + "&ApiId=" + _0x40d8c8 + "&LogIndex=11");
          }
        }
      }
      function _0xbf7c6d(_0x43649c) {
        var _0x3c5480 = {
          'Accept': "application/json, text/javascript, text/plain"
        };
        var _0x4e3a50 = new XMLHttpRequest();
        _0x4e3a50.open("GET", _0x43649c, true);
        if (_0x3c5480) {
          Object.keys(_0x3c5480).forEach(function (_0x6c016c) {
            return _0x4e3a50.setRequestHeader(_0x6c016c, _0x3c5480[_0x6c016c]);
          });
        }
        _0x4e3a50.timeout = 0x1388;
        _0x4e3a50.onload = function () {};
        _0x4e3a50.onerror = function () {};
        _0x4e3a50.ontimeout = function () {};
        _0x4e3a50.send();
      }
      function _0x508328(_0x1f91dc, _0xaf0af8) {
        if (undefined === _0xaf0af8) {
          _0xaf0af8 = null;
        }
        if (!_0xaf0af8) {
          _0xaf0af8 = _0x4d29bc();
        }
        _0x1f91dc = _0x1f91dc.replace(/[[\]]/g, "\\$&");
        var _0x2b1a19 = new RegExp("[?&]" + _0x1f91dc + "(=([^&#]*)|&|#|$)").exec(_0xaf0af8);
        return _0x2b1a19 ? _0x2b1a19[0x2] ? decodeURIComponent(_0x2b1a19[0x2].replace(/\+/g, " ")) : '' : null;
      }
      function _0x4d29bc() {
        var _0x1f3e95 = window.location.href;
        var _0x2785e7 = this.GetLinkParameterByName("replaydata", _0x1f3e95);
        if (!_0x2785e7) {
          return _0x1f3e95;
        }
        var _0xbce647 = '0'.charCodeAt(0x0);
        var _0x141e98 = '9'.charCodeAt(0x0);
        var _0x20f3fd = 'a'.charCodeAt(0x0);
        var _0xb831cb = 'z'.charCodeAt(0x0);
        var _0x599c9b = 'A'.charCodeAt(0x0);
        var _0x131d09 = 'Z'.charCodeAt(0x0);
        var _0x3d1a01 = '';
        for (var _0x163ba4 = 0x0; _0x163ba4 < _0x2785e7.length; _0x163ba4++) {
          var _0x39e519 = _0x2785e7.charCodeAt(_0x163ba4);
          if (_0x39e519 >= _0xbce647 && _0x39e519 <= _0x141e98) {
            _0x39e519 = _0x141e98 - (_0x39e519 - _0xbce647);
            _0x3d1a01 += String.fromCharCode(_0x39e519);
          } else if (_0x39e519 >= _0x20f3fd && _0x39e519 <= _0xb831cb && _0x163ba4 % 0x2 == 0x0) {
            _0x39e519 = _0xb831cb - (_0x39e519 - _0x20f3fd);
            _0x3d1a01 += String.fromCharCode(_0x39e519);
          } else if (_0x39e519 >= _0x599c9b && _0x39e519 <= _0x131d09 && _0x163ba4 % 0x3 == 0x0) {
            _0x39e519 = _0x131d09 - (_0x39e519 - _0x599c9b);
            _0x3d1a01 += String.fromCharCode(_0x39e519);
          } else {
            _0x3d1a01 += String.fromCharCode(_0x39e519);
          }
        }
        var _0x52ea82 = _0x1f3e95.split('replaydata=' + _0x2785e7);
        _0x52ea82.join('');
        return _0x52ea82 + atob(_0x3d1a01);
      }
      var _0x16082a = globalThis.__zipBundleLoader;
      var _0x3b947e;
      var _0x263d00;
      var _0x3c8bab;
      var _0x56992b;
      var _0x2c7ba4;
      var _0x30e534;
      var _0x2328d3;
      var _0x195bf2;
      var _0x5725;
      var _0x548ea4;
      var _0x3135ad;
      var _0x268a91;
      var _0x425cc5;
      var _0x15ab9b;
      var _0x4007d2;
      var _0x2f3cc9;
      var _0x48787b;
      var _0x103349;
      if (globalThis.fflate && !_0x16082a) {
        _0x16082a = new _0x68ce7a();
        globalThis.__zipBundleLoader = _0x16082a;
        _0x16082a.init();
      }
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "c933866GvpLKaZlVxLlOz0C", "FeatureManagerComponent", undefined);
      var _0x2d67ca = _0x297ef0.ccclass;
      var _0x3f6fde = _0x297ef0.property;
      var _0xefc279;
      !function (_0x444392) {
        _0x444392[_0x444392.CommonMainBundle = 0x0] = "CommonMainBundle";
        _0x444392[_0x444392.CommonBundle = 0x1] = "CommonBundle";
        _0x444392[_0x444392.OtherBundle = 0x2] = "OtherBundle";
        _0x444392[_0x444392.DefaultLangBundle = 0x3] = "DefaultLangBundle";
        _0x444392[_0x444392.LangTextBundle = 0x4] = "LangTextBundle";
        _0x444392[_0x444392.GameBundle = 0x5] = 'GameBundle';
      }(_0xefc279 || (_0xefc279 = {}));
      var _0xafc29;
      var _0x2476a7;
      !function (_0x381b53) {
        _0x381b53[_0x381b53.None = 0x0] = "None";
        _0x381b53[_0x381b53.AutoPlaySettingPanel = 0x1] = "AutoPlaySettingPanel";
        _0x381b53[_0x381b53.AutoPlaySettingPanel_DFI = 0x2] = "AutoPlaySettingPanel_DFI";
        _0x381b53[_0x381b53.AutoPlaySettingPanel_DFIII = 0x3] = "AutoPlaySettingPanel_DFIII";
        _0x381b53[_0x381b53.AutoPlaySettingPanel_BS = 0x4] = "AutoPlaySettingPanel_BS";
        _0x381b53[_0x381b53.AutoPlaySetting_AG2 = 0x5] = "AutoPlaySetting_AG2";
        _0x381b53[_0x381b53.AutoPlaySetting_FD = 0x6] = 'AutoPlaySetting_FD';
        _0x381b53[_0x381b53.AutoPlaySettingPanel_MS = 0x7] = 'AutoPlaySettingPanel_MS';
      }(_0xafc29 || (_0xafc29 = {}));
      (function (_0xd61aed) {
        _0xd61aed[_0xd61aed.None = 0x0] = "None";
        _0xd61aed[_0xd61aed.Dark = 0x1] = "Dark";
      })(_0x2476a7 || (_0x2476a7 = {}));
      _0x3b947e = _0x2d67ca('StyleSetting');
      _0x263d00 = _0x3f6fde({
        'type': _0x21d52f,
        'tooltip': "是否有骰子造型"
      });
      _0x3c8bab = _0x3f6fde({
        'type': _0x21d52f,
        'tooltip': "是否有萬聖造型"
      });
      _0x56992b = _0x3f6fde({
        'type': _0x21d52f,
        'tooltip': "是否有聖誕造型"
      });
      _0x2c7ba4 = _0x3f6fde({
        'type': _0x21d52f,
        'tooltip': '是否有OKBET廠商造型'
      });
      _0x30e534 = _0x3f6fde({
        'type': _0x3d8e42(_0x2476a7),
        'tooltip': '系列'
      });
      _0x2328d3 = function () {
        _0x1a08d3(this, "HasDice", _0x195bf2, this);
        _0x1a08d3(this, "HasHolloween", _0x5725, this);
        _0x1a08d3(this, "HasXmas", _0x548ea4, this);
        _0x1a08d3(this, "HasOkbet", _0x3135ad, this);
        _0x1a08d3(this, "Series", _0x268a91, this);
      };
      _0x195bf2 = _0x159f02(_0x2328d3.prototype, 'HasDice', [_0x263d00], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x5725 = _0x159f02(_0x2328d3.prototype, "HasHolloween", [_0x3c8bab], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x548ea4 = _0x159f02(_0x2328d3.prototype, 'HasXmas', [_0x56992b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x3135ad = _0x159f02(_0x2328d3.prototype, "HasOkbet", [_0x2c7ba4], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x268a91 = _0x159f02(_0x2328d3.prototype, "Series", [_0x30e534], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return _0x2476a7.None;
        }
      });
      _0x425cc5 = _0x2d67ca("PlayTypeSetting");
      _0x15ab9b = _0x3f6fde({
        'type': _0x21d52f,
        'tooltip': "Match"
      });
      _0x4007d2 = _0x3f6fde({
        'type': _0x21d52f,
        'tooltip': 'Break'
      });
      _0x2f3cc9 = function () {
        _0x1a08d3(this, "Match", _0x48787b, this);
        _0x1a08d3(this, "Break", _0x103349, this);
      };
      _0x48787b = _0x159f02(_0x2f3cc9.prototype, "Match", [_0x15ab9b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x103349 = _0x159f02(_0x2f3cc9.prototype, "Break", [_0x4007d2], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x5a9fe0._RF.pop();
      _0x5a9fe0._RF.push({}, "89025dALbBFj7AFo+6o3xYM", 'SwipeScreen', undefined);
      _0x5a9fe0._RF.pop();
    }
  };
});
(function (_0x5e9b9a) {
  _0x5e9b9a("virtual:///prerequisite-imports/main", "chunks:///main.js");
})(function (_0x63bea4, _0x475e3b) {
  System.register(_0x63bea4, [_0x475e3b], function (_0x3c89fe, _0x485e70) {
    return {
      'setters': [function (_0x358c85) {
        var _0x20df17 = {};
        for (var _0x121ac8 in _0x358c85) {
          if (_0x121ac8 !== "default" && _0x121ac8 !== "__esModule") {
            _0x20df17[_0x121ac8] = _0x358c85[_0x121ac8];
          }
        }
        _0x3c89fe(_0x20df17);
      }],
      'execute': function () {}
    };
  });
});