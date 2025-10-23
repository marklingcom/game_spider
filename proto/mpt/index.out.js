System.register("chunks:///main.js", ['cc'], function (_0x291838, _0x1b3796) {
  'use strict';

  var _0x2189a4;
  var _0x54c5ac;
  var _0x318e19;
  var _0x12b535;
  var _0x2b19b2;
  var _0x1ce4de;
  var _0x4b56bb;
  var _0x423384;
  var _0x5465a6;
  var _0x851753;
  var _0x4351ba;
  var _0x5b1fd0;
  var _0x1f1e9d;
  var _0x25cea2;
  var _0x371a7a;
  var _0x397393;
  var _0x4de58f;
  var _0x2a6ea6;
  var _0x29b9bb;
  var _0x27d94b;
  var _0x12ccd4;
  var _0x241210;
  var _0x4571bb;
  var _0x312821;
  var _0x5dfa7a;
  var _0x48c046;
  var _0x2708e3;
  var _0x554a55;
  var _0x473a34;
  var _0x314cbe;
  var _0x1e1e42;
  var _0x19fa6e;
  var _0x221500;
  var _0x3882d9;
  var _0x181821;
  var _0x5411eb;
  var _0x38d9e8;
  var _0x39ff89;
  var _0x482053;
  var _0x185710;
  var _0x261b09;
  var _0x5ed65b;
  var _0x5aa185;
  var _0x279bf9;
  var _0x4f9451;
  var _0x273ff2;
  var _0xca4d39;
  var _0x5a5edc;
  var _0x3ef303;
  var _0x150340;
  var _0x5549ca;
  var _0x4e1d6b;
  var _0x4ec494;
  var _0x744978;
  var _0x305676;
  var _0x24b83d;
  var _0xd9a8f3;
  var _0x131ea9;
  var _0x56bf15;
  var _0x3d9e8d;
  var _0x6e49f9;
  var _0x3b3700;
  var _0x58dfb4;
  var _0x381de9;
  var _0x297bc1;
  var _0xe36d9b;
  var _0x3c4e45;
  var _0x142e9c;
  var _0xba13f0;
  var _0x516a9b;
  return {
    'setters': [function (_0x1662cd) {
      _0x2189a4 = _0x1662cd.cclegacy;
      _0x54c5ac = _0x1662cd.warn;
      _0x318e19 = _0x1662cd.v3;
      _0x12b535 = _0x1662cd.v2;
      _0x2b19b2 = _0x1662cd.macro;
      _0x1ce4de = _0x1662cd.Enum;
      _0x4b56bb = _0x1662cd._decorator;
      _0x423384 = _0x1662cd.sp;
      _0x5465a6 = _0x1662cd.Sprite;
      _0x851753 = _0x1662cd.Label;
      _0x4351ba = _0x1662cd.Component;
      _0x5b1fd0 = _0x1662cd.instantiate;
      _0x1f1e9d = _0x1662cd.error;
      _0x25cea2 = _0x1662cd.Node;
      _0x371a7a = _0x1662cd.UIOpacity;
      _0x397393 = _0x1662cd.tween;
      _0x4de58f = _0x1662cd.color;
      _0x2a6ea6 = _0x1662cd.Prefab;
      _0x29b9bb = _0x1662cd.Vec3;
      _0x27d94b = _0x1662cd.UITransform;
      _0x12ccd4 = _0x1662cd.Animation;
      _0x241210 = _0x1662cd.Button;
      _0x4571bb = _0x1662cd.Tween;
      _0x312821 = _0x1662cd.log;
      _0x5dfa7a = _0x1662cd.CCFloat;
      _0x48c046 = _0x1662cd.director;
      _0x2708e3 = _0x1662cd.Director;
      _0x554a55 = _0x1662cd.UIRenderer;
      _0x473a34 = _0x1662cd.RichText;
      _0x314cbe = _0x1662cd.CCBoolean;
      _0x1e1e42 = _0x1662cd.Color;
      _0x19fa6e = _0x1662cd.JsonAsset;
      _0x221500 = _0x1662cd.math;
      _0x3882d9 = _0x1662cd.SpriteFrame;
      _0x181821 = _0x1662cd.Size;
      _0x5411eb = _0x1662cd.SpriteAtlas;
      _0x38d9e8 = _0x1662cd.sys;
      _0x39ff89 = _0x1662cd.input;
      _0x482053 = _0x1662cd.Input;
      _0x185710 = _0x1662cd.KeyCode;
      _0x261b09 = _0x1662cd.screen;
      _0x5ed65b = _0x1662cd.view;
      _0x5aa185 = _0x1662cd.ResolutionPolicy;
      _0x279bf9 = _0x1662cd.TweenSystem;
      _0x4f9451 = _0x1662cd.ccenum;
      _0x273ff2 = _0x1662cd.EventHandler;
      _0xca4d39 = _0x1662cd.assetManager;
      _0x5a5edc = _0x1662cd.lerp;
      _0x3ef303 = _0x1662cd.NodeEventType;
      _0x150340 = _0x1662cd.TransformBit;
      _0x5549ca = _0x1662cd.CCString;
      _0x4e1d6b = _0x1662cd.Material;
      _0x4ec494 = _0x1662cd.Gradient;
      _0x744978 = _0x1662cd.v4;
      _0x305676 = _0x1662cd.Texture2D;
      _0x24b83d = _0x1662cd.clamp01;
      _0xd9a8f3 = _0x1662cd.EffectAsset;
      _0x131ea9 = _0x1662cd.CCInteger;
      _0x56bf15 = _0x1662cd.ImageAsset;
      _0x3d9e8d = _0x1662cd.AnimationClip;
      _0x6e49f9 = _0x1662cd.ParticleSystem2D;
      _0x3b3700 = _0x1662cd.Vec2;
      _0x58dfb4 = _0x1662cd.ScrollView;
      _0x381de9 = _0x1662cd.isValid;
      _0x297bc1 = _0x1662cd.CCClass;
      _0xe36d9b = _0x1662cd.js;
      _0x3c4e45 = _0x1662cd.settings;
      _0x142e9c = _0x1662cd.Settings;
      _0xba13f0 = _0x1662cd.VERSION;
      _0x516a9b = _0x1662cd.find;
    }],
    'execute': function () {
      function _0x57ce7a() {
        _0x57ce7a = function () {
          return _0x25c2f9;
        };
        var _0x25c2f9 = {};
        var _0x5863d6 = Object.prototype;
        var _0x2e1587 = _0x5863d6.hasOwnProperty;
        var _0x2e8e91 = "function" == typeof Symbol ? Symbol : {};
        var _0x2a4a5a = _0x2e8e91.iterator || "@@iterator";
        var _0x5ef725 = _0x2e8e91.asyncIterator || "@@asyncIterator";
        var _0xe27a65 = _0x2e8e91.toStringTag || "@@toStringTag";
        function _0x24cee4(_0x1b0324, _0x35b1ba, _0x514d06) {
          Object.defineProperty(_0x1b0324, _0x35b1ba, {
            'value': _0x514d06,
            'enumerable': true,
            'configurable': true,
            'writable': true
          });
          return _0x1b0324[_0x35b1ba];
        }
        try {
          _0x24cee4({}, '');
        } catch (_0x2a295a) {
          _0x24cee4 = function (_0xf47b34, _0x232e96, _0x9b057d) {
            return _0xf47b34[_0x232e96] = _0x9b057d;
          };
        }
        function _0x2b5bbc(_0x5068f2, _0x2a4a13, _0x55e880, _0xf8caa5) {
          var _0x4c21f1 = _0x2a4a13 && _0x2a4a13.prototype instanceof _0x1c864e ? _0x2a4a13 : _0x1c864e;
          var _0xc0716f = Object.create(_0x4c21f1.prototype);
          var _0x19f647 = new _0x2f92c8(_0xf8caa5 || []);
          _0xc0716f._invoke = function (_0x486e20, _0x5b8dc6, _0x4605a8) {
            var _0x5a7d97 = "suspendedStart";
            return function (_0x279f1c, _0x5f4dea) {
              if ('executing' === _0x5a7d97) {
                throw new Error("Generator is already running");
              }
              if ("completed" === _0x5a7d97) {
                if ("throw" === _0x279f1c) {
                  throw _0x5f4dea;
                }
                return {
                  'value': undefined,
                  'done': true
                };
              }
              _0x4605a8.method = _0x279f1c;
              for (_0x4605a8.arg = _0x5f4dea;;) {
                var _0x3baac1 = _0x4605a8.delegate;
                if (_0x3baac1) {
                  var _0x4bbc51 = _0x2652d5(_0x3baac1, _0x4605a8);
                  if (_0x4bbc51) {
                    if (_0x4bbc51 === _0x461516) {
                      continue;
                    }
                    return _0x4bbc51;
                  }
                }
                if ('next' === _0x4605a8.method) {
                  _0x4605a8.sent = _0x4605a8._sent = _0x4605a8.arg;
                } else {
                  if ("throw" === _0x4605a8.method) {
                    if ("suspendedStart" === _0x5a7d97) {
                      _0x5a7d97 = 'completed';
                      throw _0x4605a8.arg;
                    }
                    _0x4605a8.dispatchException(_0x4605a8.arg);
                  } else if ('return' === _0x4605a8.method) {
                    _0x4605a8.abrupt("return", _0x4605a8.arg);
                  }
                }
                _0x5a7d97 = "executing";
                var _0x54aeb8 = _0xe09b8b(_0x486e20, _0x5b8dc6, _0x4605a8);
                if ('normal' === _0x54aeb8.type) {
                  _0x5a7d97 = _0x4605a8.done ? "completed" : 'suspendedYield';
                  if (_0x54aeb8.arg === _0x461516) {
                    continue;
                  }
                  return {
                    'value': _0x54aeb8.arg,
                    'done': _0x4605a8.done
                  };
                }
                if ("throw" === _0x54aeb8.type) {
                  _0x5a7d97 = "completed";
                  _0x4605a8.method = 'throw';
                  _0x4605a8.arg = _0x54aeb8.arg;
                }
              }
            };
          }(_0x5068f2, _0x55e880, _0x19f647);
          return _0xc0716f;
        }
        function _0xe09b8b(_0x1b33d1, _0x3ef3c7, _0x145752) {
          try {
            return {
              'type': 'normal',
              'arg': _0x1b33d1.call(_0x3ef3c7, _0x145752)
            };
          } catch (_0x502759) {
            return {
              'type': "throw",
              'arg': _0x502759
            };
          }
        }
        _0x25c2f9.wrap = _0x2b5bbc;
        var _0x461516 = {};
        function _0x1c864e() {}
        function _0x541f33() {}
        function _0x44e3db() {}
        var _0x38456c = {};
        _0x24cee4(_0x38456c, _0x2a4a5a, function () {
          return this;
        });
        var _0x371aa8 = Object.getPrototypeOf;
        var _0x3b2822 = _0x371aa8 && _0x371aa8(_0x371aa8(_0x3686c5([])));
        if (_0x3b2822 && _0x3b2822 !== _0x5863d6 && _0x2e1587.call(_0x3b2822, _0x2a4a5a)) {
          _0x38456c = _0x3b2822;
        }
        var _0x3abcd6 = _0x44e3db.prototype = _0x1c864e.prototype = Object.create(_0x38456c);
        function _0x135f0e(_0x2d05c7) {
          ['next', "throw", 'return'].forEach(function (_0x3b7a5b) {
            _0x24cee4(_0x2d05c7, _0x3b7a5b, function (_0x2ec9e4) {
              return this._invoke(_0x3b7a5b, _0x2ec9e4);
            });
          });
        }
        function _0x2a8fcf(_0xba879a, _0x11d8f3) {
          function _0x229ae6(_0x41e399, _0x11f0b4, _0xe9c0d5, _0xadaab3) {
            var _0x381d87 = _0xe09b8b(_0xba879a[_0x41e399], _0xba879a, _0x11f0b4);
            if ("throw" !== _0x381d87.type) {
              var _0x4bd046 = _0x381d87.arg;
              var _0x213f96 = _0x4bd046.value;
              return _0x213f96 && 'object' == typeof _0x213f96 && _0x2e1587.call(_0x213f96, "__await") ? _0x11d8f3.resolve(_0x213f96.__await).then(function (_0x362c1f) {
                _0x229ae6("next", _0x362c1f, _0xe9c0d5, _0xadaab3);
              }, function (_0x37d0d8) {
                _0x229ae6("throw", _0x37d0d8, _0xe9c0d5, _0xadaab3);
              }) : _0x11d8f3.resolve(_0x213f96).then(function (_0x133278) {
                _0x4bd046.value = _0x133278;
                _0xe9c0d5(_0x4bd046);
              }, function (_0x48655c) {
                return _0x229ae6("throw", _0x48655c, _0xe9c0d5, _0xadaab3);
              });
            }
            _0xadaab3(_0x381d87.arg);
          }
          var _0x38e188;
          this._invoke = function (_0xe13176, _0x492719) {
            function _0x430db0() {
              return new _0x11d8f3(function (_0x3cf0d1, _0xa996c0) {
                _0x229ae6(_0xe13176, _0x492719, _0x3cf0d1, _0xa996c0);
              });
            }
            return _0x38e188 = _0x38e188 ? _0x38e188.then(_0x430db0, _0x430db0) : _0x430db0();
          };
        }
        function _0x2652d5(_0x564b28, _0x5dc4ab) {
          var _0x39e125 = _0x564b28.iterator[_0x5dc4ab.method];
          if (undefined === _0x39e125) {
            _0x5dc4ab.delegate = null;
            if ("throw" === _0x5dc4ab.method) {
              if (_0x564b28.iterator["return"] && (_0x5dc4ab.method = "return", _0x5dc4ab.arg = undefined, _0x2652d5(_0x564b28, _0x5dc4ab), "throw" === _0x5dc4ab.method)) {
                return _0x461516;
              }
              _0x5dc4ab.method = "throw";
              _0x5dc4ab.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return _0x461516;
          }
          var _0x20c6e2 = _0xe09b8b(_0x39e125, _0x564b28.iterator, _0x5dc4ab.arg);
          if ('throw' === _0x20c6e2.type) {
            _0x5dc4ab.method = 'throw';
            _0x5dc4ab.arg = _0x20c6e2.arg;
            _0x5dc4ab.delegate = null;
            return _0x461516;
          }
          var _0x39a429 = _0x20c6e2.arg;
          return _0x39a429 ? _0x39a429.done ? (_0x5dc4ab[_0x564b28.resultName] = _0x39a429.value, _0x5dc4ab.next = _0x564b28.nextLoc, "return" !== _0x5dc4ab.method && (_0x5dc4ab.method = "next", _0x5dc4ab.arg = undefined), _0x5dc4ab.delegate = null, _0x461516) : _0x39a429 : (_0x5dc4ab.method = 'throw', _0x5dc4ab.arg = new TypeError("iterator result is not an object"), _0x5dc4ab.delegate = null, _0x461516);
        }
        function _0x1a225e(_0x2984cd) {
          var _0x585d2f = {
            'tryLoc': _0x2984cd[0x0]
          };
          if (0x1 in _0x2984cd) {
            _0x585d2f.catchLoc = _0x2984cd[0x1];
          }
          if (0x2 in _0x2984cd) {
            _0x585d2f.finallyLoc = _0x2984cd[0x2];
            _0x585d2f.afterLoc = _0x2984cd[0x3];
          }
          this.tryEntries.push(_0x585d2f);
        }
        function _0x45a5ee(_0x1a464f) {
          var _0x3e39a7 = _0x1a464f.completion || {};
          _0x3e39a7.type = 'normal';
          delete _0x3e39a7.arg;
          _0x1a464f.completion = _0x3e39a7;
        }
        function _0x2f92c8(_0x445234) {
          this.tryEntries = [{
            'tryLoc': "root"
          }];
          _0x445234.forEach(_0x1a225e, this);
          this.reset(true);
        }
        function _0x3686c5(_0x2c7d09) {
          if (_0x2c7d09) {
            var _0x461b89 = _0x2c7d09[_0x2a4a5a];
            if (_0x461b89) {
              return _0x461b89.call(_0x2c7d09);
            }
            if ("function" == typeof _0x2c7d09.next) {
              return _0x2c7d09;
            }
            if (!isNaN(_0x2c7d09.length)) {
              var _0x376a67 = -0x1;
              var _0x44312d = function _0xa72342() {
                for (; ++_0x376a67 < _0x2c7d09.length;) {
                  if (_0x2e1587.call(_0x2c7d09, _0x376a67)) {
                    _0xa72342.value = _0x2c7d09[_0x376a67];
                    _0xa72342.done = false;
                    return _0xa72342;
                  }
                }
                _0xa72342.value = undefined;
                _0xa72342.done = true;
                return _0xa72342;
              };
              return _0x44312d.next = _0x44312d;
            }
          }
          return {
            'next': _0x2a0b28
          };
        }
        function _0x2a0b28() {
          return {
            'value': undefined,
            'done': true
          };
        }
        _0x541f33.prototype = _0x44e3db;
        _0x24cee4(_0x3abcd6, 'constructor', _0x44e3db);
        _0x24cee4(_0x44e3db, "constructor", _0x541f33);
        _0x541f33.displayName = _0x24cee4(_0x44e3db, _0xe27a65, "GeneratorFunction");
        _0x25c2f9.isGeneratorFunction = function (_0x572ee9) {
          var _0x28f4e3 = "function" == typeof _0x572ee9 && _0x572ee9.constructor;
          return !!_0x28f4e3 && (_0x28f4e3 === _0x541f33 || 'GeneratorFunction' === (_0x28f4e3.displayName || _0x28f4e3.name));
        };
        _0x25c2f9.mark = function (_0xef6cdb) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(_0xef6cdb, _0x44e3db);
          } else {
            _0xef6cdb.__proto__ = _0x44e3db;
            _0x24cee4(_0xef6cdb, _0xe27a65, "GeneratorFunction");
          }
          _0xef6cdb.prototype = Object.create(_0x3abcd6);
          return _0xef6cdb;
        };
        _0x25c2f9.awrap = function (_0x2e08a5) {
          return {
            '__await': _0x2e08a5
          };
        };
        _0x135f0e(_0x2a8fcf.prototype);
        _0x24cee4(_0x2a8fcf.prototype, _0x5ef725, function () {
          return this;
        });
        _0x25c2f9.AsyncIterator = _0x2a8fcf;
        _0x25c2f9.async = function (_0x557a5b, _0x18ed90, _0x50f122, _0x143d7a, _0x563cdc) {
          if (undefined === _0x563cdc) {
            _0x563cdc = Promise;
          }
          var _0x49cfaf = new _0x2a8fcf(_0x2b5bbc(_0x557a5b, _0x18ed90, _0x50f122, _0x143d7a), _0x563cdc);
          return _0x25c2f9.isGeneratorFunction(_0x18ed90) ? _0x49cfaf : _0x49cfaf.next().then(function (_0x4ba048) {
            return _0x4ba048.done ? _0x4ba048.value : _0x49cfaf.next();
          });
        };
        _0x135f0e(_0x3abcd6);
        _0x24cee4(_0x3abcd6, _0xe27a65, "Generator");
        _0x24cee4(_0x3abcd6, _0x2a4a5a, function () {
          return this;
        });
        _0x24cee4(_0x3abcd6, "toString", function () {
          return "[object Generator]";
        });
        _0x25c2f9.keys = function (_0x4c7402) {
          var _0x3a396c = [];
          for (var _0x510752 in _0x4c7402) _0x3a396c.push(_0x510752);
          _0x3a396c.reverse();
          return function _0x279875() {
            for (; _0x3a396c.length;) {
              var _0xa9cfe2 = _0x3a396c.pop();
              if (_0xa9cfe2 in _0x4c7402) {
                _0x279875.value = _0xa9cfe2;
                _0x279875.done = false;
                return _0x279875;
              }
            }
            _0x279875.done = true;
            return _0x279875;
          };
        };
        _0x25c2f9.values = _0x3686c5;
        _0x2f92c8.prototype = {
          'constructor': _0x2f92c8,
          'reset': function (_0x5b8140) {
            this.prev = 0x0;
            this.next = 0x0;
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(_0x45a5ee);
            if (!_0x5b8140) {
              for (var _0x284b7a in this) if ('t' === _0x284b7a.charAt(0x0) && _0x2e1587.call(this, _0x284b7a) && !isNaN(+_0x284b7a.slice(0x1))) {
                this[_0x284b7a] = undefined;
              }
            }
          },
          'stop': function () {
            this.done = true;
            var _0x4dfbb1 = this.tryEntries[0x0].completion;
            if ("throw" === _0x4dfbb1.type) {
              throw _0x4dfbb1.arg;
            }
            return this.rval;
          },
          'dispatchException': function (_0x3a6e6a) {
            if (this.done) {
              throw _0x3a6e6a;
            }
            var _0x5e47f5 = this;
            function _0x5bb3d7(_0x50b552, _0x301781) {
              _0x2b766d.type = "throw";
              _0x2b766d.arg = _0x3a6e6a;
              _0x5e47f5.next = _0x50b552;
              if (_0x301781) {
                _0x5e47f5.method = "next";
                _0x5e47f5.arg = undefined;
              }
              return !!_0x301781;
            }
            for (var _0x813bd2 = this.tryEntries.length - 0x1; _0x813bd2 >= 0x0; --_0x813bd2) {
              var _0x4b637c = this.tryEntries[_0x813bd2];
              var _0x2b766d = _0x4b637c.completion;
              if ("root" === _0x4b637c.tryLoc) {
                return _0x5bb3d7("end");
              }
              if (_0x4b637c.tryLoc <= this.prev) {
                var _0x378bca = _0x2e1587.call(_0x4b637c, "catchLoc");
                var _0x2104d3 = _0x2e1587.call(_0x4b637c, 'finallyLoc');
                if (_0x378bca && _0x2104d3) {
                  if (this.prev < _0x4b637c.catchLoc) {
                    return _0x5bb3d7(_0x4b637c.catchLoc, true);
                  }
                  if (this.prev < _0x4b637c.finallyLoc) {
                    return _0x5bb3d7(_0x4b637c.finallyLoc);
                  }
                } else {
                  if (_0x378bca) {
                    if (this.prev < _0x4b637c.catchLoc) {
                      return _0x5bb3d7(_0x4b637c.catchLoc, true);
                    }
                  } else {
                    if (!_0x2104d3) {
                      throw new Error("try statement without catch or finally");
                    }
                    if (this.prev < _0x4b637c.finallyLoc) {
                      return _0x5bb3d7(_0x4b637c.finallyLoc);
                    }
                  }
                }
              }
            }
          },
          'abrupt': function (_0x47f8ff, _0x420797) {
            for (var _0xf0e37d = this.tryEntries.length - 0x1; _0xf0e37d >= 0x0; --_0xf0e37d) {
              var _0x477208 = this.tryEntries[_0xf0e37d];
              if (_0x477208.tryLoc <= this.prev && _0x2e1587.call(_0x477208, "finallyLoc") && this.prev < _0x477208.finallyLoc) {
                var _0xcef7a4 = _0x477208;
                break;
              }
            }
            if (_0xcef7a4 && ("break" === _0x47f8ff || "continue" === _0x47f8ff) && _0xcef7a4.tryLoc <= _0x420797 && _0x420797 <= _0xcef7a4.finallyLoc) {
              _0xcef7a4 = null;
            }
            var _0x4a5806 = _0xcef7a4 ? _0xcef7a4.completion : {};
            _0x4a5806.type = _0x47f8ff;
            _0x4a5806.arg = _0x420797;
            return _0xcef7a4 ? (this.method = "next", this.next = _0xcef7a4.finallyLoc, _0x461516) : this.complete(_0x4a5806);
          },
          'complete': function (_0x49a74, _0x5e456b) {
            if ("throw" === _0x49a74.type) {
              throw _0x49a74.arg;
            }
            if ('break' === _0x49a74.type || "continue" === _0x49a74.type) {
              this.next = _0x49a74.arg;
            } else if ("return" === _0x49a74.type) {
              this.rval = this.arg = _0x49a74.arg;
              this.method = 'return';
              this.next = "end";
            } else if ("normal" === _0x49a74.type && _0x5e456b) {
              this.next = _0x5e456b;
            }
            return _0x461516;
          },
          'finish': function (_0x283335) {
            for (var _0x1ffd0b = this.tryEntries.length - 0x1; _0x1ffd0b >= 0x0; --_0x1ffd0b) {
              var _0x5b483b = this.tryEntries[_0x1ffd0b];
              if (_0x5b483b.finallyLoc === _0x283335) {
                this.complete(_0x5b483b.completion, _0x5b483b.afterLoc);
                _0x45a5ee(_0x5b483b);
                return _0x461516;
              }
            }
          },
          'catch': function (_0x17a101) {
            for (var _0x3d54e = this.tryEntries.length - 0x1; _0x3d54e >= 0x0; --_0x3d54e) {
              var _0x2d9b14 = this.tryEntries[_0x3d54e];
              if (_0x2d9b14.tryLoc === _0x17a101) {
                var _0x3ded77 = _0x2d9b14.completion;
                if ("throw" === _0x3ded77.type) {
                  var _0x1997eb = _0x3ded77.arg;
                  _0x45a5ee(_0x2d9b14);
                }
                return _0x1997eb;
              }
            }
            throw new Error("illegal catch attempt");
          },
          'delegateYield': function (_0x7c7e21, _0x3e1be7, _0x1afd9f) {
            this.delegate = {
              'iterator': _0x3686c5(_0x7c7e21),
              'resultName': _0x3e1be7,
              'nextLoc': _0x1afd9f
            };
            if ("next" === this.method) {
              this.arg = undefined;
            }
            return _0x461516;
          }
        };
        return _0x25c2f9;
      }
      function _0x8786a7(_0x350b15, _0x13f00e, _0x374298, _0x1b7a50, _0x4fd41f, _0x4245b0, _0x2bbfb3) {
        try {
          var _0x2b4292 = _0x350b15[_0x4245b0](_0x2bbfb3);
          var _0x50da0f = _0x2b4292.value;
        } catch (_0x9a09db) {
          return void _0x374298(_0x9a09db);
        }
        if (_0x2b4292.done) {
          _0x13f00e(_0x50da0f);
        } else {
          Promise.resolve(_0x50da0f).then(_0x1b7a50, _0x4fd41f);
        }
      }
      function _0x2988f4(_0x21c18d) {
        return function () {
          var _0x2c55f0 = this;
          return new Promise(function (_0x11eadf, _0x3aa6c2) {
            var _0x785bf0 = _0x21c18d.apply(_0x2c55f0, arguments);
            function _0x2ddc58(_0x4d677f) {
              _0x8786a7(_0x785bf0, _0x11eadf, _0x3aa6c2, _0x2ddc58, _0x1ce3ff, "next", _0x4d677f);
            }
            function _0x1ce3ff(_0x5f46d9) {
              _0x8786a7(_0x785bf0, _0x11eadf, _0x3aa6c2, _0x2ddc58, _0x1ce3ff, "throw", _0x5f46d9);
            }
            _0x2ddc58(undefined);
          });
        };
      }
      function _0x1263e8(_0x51d651, _0x254405) {
        for (var _0x4cc056 = 0x0; _0x4cc056 < _0x254405.length; _0x4cc056++) {
          var _0x1200e0 = _0x254405[_0x4cc056];
          _0x1200e0.enumerable = _0x1200e0.enumerable || false;
          _0x1200e0.configurable = true;
          if ("value" in _0x1200e0) {
            _0x1200e0.writable = true;
          }
          Object.defineProperty(_0x51d651, _0x1200e0.key, _0x1200e0);
        }
      }
      function _0x55d7eb(_0x17cce6, _0x133ba2, _0x2f13f6) {
        if (_0x133ba2) {
          _0x1263e8(_0x17cce6.prototype, _0x133ba2);
        }
        if (_0x2f13f6) {
          _0x1263e8(_0x17cce6, _0x2f13f6);
        }
        Object.defineProperty(_0x17cce6, "prototype", {
          'writable': false
        });
        return _0x17cce6;
      }
      function _0x5a9673(_0x406264, _0x10497d) {
        _0x406264.prototype = Object.create(_0x10497d.prototype);
        _0x406264.prototype.constructor = _0x406264;
        _0x1548a6(_0x406264, _0x10497d);
      }
      function _0x1548a6(_0x4e02ad, _0xd3e47c) {
        return (_0x1548a6 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (_0x5d343e, _0x38d0a2) {
          _0x5d343e.__proto__ = _0x38d0a2;
          return _0x5d343e;
        })(_0x4e02ad, _0xd3e47c);
      }
      function _0x2901b4(_0x551bf8) {
        if (undefined === _0x551bf8) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return _0x551bf8;
      }
      function _0x51539b(_0x4a24a9, _0x1c7b0f) {
        if (_0x4a24a9) {
          if ("string" == typeof _0x4a24a9) {
            return _0x1ee333(_0x4a24a9, _0x1c7b0f);
          }
          var _0x368c21 = Object.prototype.toString.call(_0x4a24a9).slice(0x8, -0x1);
          if ("Object" === _0x368c21 && _0x4a24a9.constructor) {
            _0x368c21 = _0x4a24a9.constructor.name;
          }
          return "Map" === _0x368c21 || "Set" === _0x368c21 ? Array.from(_0x4a24a9) : "Arguments" === _0x368c21 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x368c21) ? _0x1ee333(_0x4a24a9, _0x1c7b0f) : undefined;
        }
      }
      function _0x1ee333(_0x2cfc0, _0x7da4e2) {
        if (null == _0x7da4e2 || _0x7da4e2 > _0x2cfc0.length) {
          _0x7da4e2 = _0x2cfc0.length;
        }
        var _0x4e5ad0 = 0x0;
        for (var _0x5478c1 = new Array(_0x7da4e2); _0x4e5ad0 < _0x7da4e2; _0x4e5ad0++) {
          _0x5478c1[_0x4e5ad0] = _0x2cfc0[_0x4e5ad0];
        }
        return _0x5478c1;
      }
      function _0x241b65(_0x2338f9, _0x1f2f0b) {
        var _0x40addb = 'undefined' != typeof Symbol && _0x2338f9[Symbol.iterator] || _0x2338f9["@@iterator"];
        if (_0x40addb) {
          return (_0x40addb = _0x40addb.call(_0x2338f9)).next.bind(_0x40addb);
        }
        if (Array.isArray(_0x2338f9) || (_0x40addb = _0x51539b(_0x2338f9)) || _0x1f2f0b && _0x2338f9 && 'number' == typeof _0x2338f9.length) {
          if (_0x40addb) {
            _0x2338f9 = _0x40addb;
          }
          var _0x4590aa = 0x0;
          return function () {
            return _0x4590aa >= _0x2338f9.length ? {
              'done': true
            } : {
              'done': false,
              'value': _0x2338f9[_0x4590aa++]
            };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _0x588ec8(_0x1ca70e, _0x2de9fc, _0xbdf82f, _0x56c503) {
        if (_0xbdf82f) {
          Object.defineProperty(_0x1ca70e, _0x2de9fc, {
            'enumerable': _0xbdf82f.enumerable,
            'configurable': _0xbdf82f.configurable,
            'writable': _0xbdf82f.writable,
            'value': _0xbdf82f.initializer ? _0xbdf82f.initializer.call(_0x56c503) : undefined
          });
        }
      }
      function _0x4fcd77(_0x157d67, _0x160c75, _0x23cfac, _0x2c64b8, _0x1e2e4e) {
        var _0x2f0e94 = {};
        Object.keys(_0x2c64b8).forEach(function (_0x4d1161) {
          _0x2f0e94[_0x4d1161] = _0x2c64b8[_0x4d1161];
        });
        _0x2f0e94.enumerable = !!_0x2f0e94.enumerable;
        _0x2f0e94.configurable = !!_0x2f0e94.configurable;
        if ('value' in _0x2f0e94 || _0x2f0e94.initializer) {
          _0x2f0e94.writable = true;
        }
        _0x2f0e94 = _0x23cfac.slice().reverse().reduce(function (_0x2ac546, _0x480b58) {
          return _0x480b58(_0x157d67, _0x160c75, _0x2ac546) || _0x2ac546;
        }, _0x2f0e94);
        if (_0x1e2e4e && undefined !== _0x2f0e94.initializer) {
          _0x2f0e94.value = _0x2f0e94.initializer ? _0x2f0e94.initializer.call(_0x1e2e4e) : undefined;
          _0x2f0e94.initializer = undefined;
        }
        if (undefined === _0x2f0e94.initializer) {
          Object.defineProperty(_0x157d67, _0x160c75, _0x2f0e94);
          _0x2f0e94 = null;
        }
        return _0x2f0e94;
      }
      _0x2189a4._RF.push({}, "eb033pmYDhAjadYFiwbi8gp", "SpineKit", undefined);
      var _0x3c0bbf = function () {
        function _0x3d9626() {}
        _0x3d9626.ForceCancel = function (_0x51fb6f, _0x349622) {
          var _0x300b91;
          var _0x4a618a;
          var _0x533d4f;
          if (!(null == (_0x300b91 = this.m_cancelCbs) || null == (_0x4a618a = (_0x533d4f = _0x300b91[_0x51fb6f])[_0x349622]))) {
            _0x4a618a.call(_0x533d4f);
          }
        };
        _0x3d9626.PlayAnimation = function (_0x7b0472, _0x59784d, _0x42e6d3, _0x1d5cd4, _0x32995c, _0x4d3766) {
          var _0x20f892 = this;
          if (undefined === _0x42e6d3) {
            _0x42e6d3 = false;
          }
          if (undefined === _0x1d5cd4) {
            _0x1d5cd4 = 0x0;
          }
          if (undefined === _0x4d3766) {
            _0x4d3766 = true;
          }
          return new Promise(function (_0x33e0d7) {
            _0x20f892.m_cancelCbs[_0x7b0472.name] = {};
            _0x20f892.m_cancelCbs[_0x7b0472.name][_0x59784d] = function () {
              _0x33e0d7(true);
            };
            var _0x4b672d = true;
            var _0x45fd32 = _0x7b0472.getState();
            if (_0x45fd32) {
              var _0x39b7bb = _0x45fd32.expandToIndex(_0x1d5cd4);
              if (_0x39b7bb) {
                var _0x1aeed8 = _0x39b7bb.animation.name + '.' + _0x59784d;
                _0x4b672d = undefined === _0x45fd32.data.animationToMixTime[_0x1aeed8];
              }
            }
            if (_0x4b672d) {
              _0x7b0472.clearTrack(_0x1d5cd4);
              if (_0x4d3766) {
                _0x7b0472.setToSetupPose();
              }
            }
            var _0x354bb5 = _0x7b0472.setAnimation(_0x1d5cd4, _0x59784d, _0x42e6d3);
            if (_0x354bb5) {
              _0x7b0472.setTrackEventListener(_0x354bb5, function (_0x31cdca, _0x3a2e59) {
                if (_0x354bb5 && _0x354bb5.animation.name == _0x31cdca.animation.name) {
                  if (!(null == _0x32995c)) {
                    _0x32995c(_0x3a2e59.data.name);
                  }
                }
              });
              _0x7b0472.setTrackCompleteListener(_0x354bb5, function (_0x193e30) {
                if (_0x354bb5 && _0x354bb5.animation.name == _0x193e30.animation.name) {
                  _0x7b0472.setTrackCompleteListener(_0x354bb5, function () {});
                  _0x7b0472.setTrackInterruptListener(_0x354bb5, function () {});
                  if (_0x20f892.m_cancelCbs[_0x7b0472.name] && _0x20f892.m_cancelCbs[_0x7b0472.name][_0x59784d]) {
                    _0x20f892.m_cancelCbs[_0x7b0472.name][_0x59784d] = null;
                  }
                  _0x33e0d7(false);
                }
              });
              _0x7b0472.setTrackInterruptListener(_0x354bb5, function (_0x103d71) {
                if (_0x354bb5 && _0x354bb5.animation.name == _0x103d71.animation.name) {
                  _0x7b0472.setTrackCompleteListener(_0x354bb5, function () {});
                  _0x7b0472.setTrackInterruptListener(_0x354bb5, function () {});
                  if (_0x20f892.m_cancelCbs[_0x7b0472.name] && _0x20f892.m_cancelCbs[_0x7b0472.name][_0x59784d]) {
                    _0x20f892.m_cancelCbs[_0x7b0472.name][_0x59784d] = null;
                  }
                  _0x33e0d7(true);
                }
              });
            } else {
              _0x7b0472.setCompleteListener(function () {
                _0x7b0472.setCompleteListener(null);
                _0x7b0472.setInterruptListener(null);
                if (_0x20f892.m_cancelCbs[_0x7b0472.name] && _0x20f892.m_cancelCbs[_0x7b0472.name][_0x59784d]) {
                  _0x20f892.m_cancelCbs[_0x7b0472.name][_0x59784d] = null;
                }
                _0x33e0d7(false);
              });
              _0x7b0472.setInterruptListener(function () {
                _0x7b0472.setCompleteListener(null);
                _0x7b0472.setInterruptListener(null);
                if (_0x20f892.m_cancelCbs[_0x7b0472.name] && _0x20f892.m_cancelCbs[_0x7b0472.name][_0x59784d]) {
                  _0x20f892.m_cancelCbs[_0x7b0472.name][_0x59784d] = null;
                }
                _0x33e0d7(true);
              });
            }
          });
        };
        return _0x3d9626;
      }();
      _0x3c0bbf.m_cancelCbs = {};
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, 'db4337zK39CwpvA3Bh+gyjl', "index", undefined);
      if (!globalThis.Astarte) {
        globalThis.Astarte = {};
      }
      var _0x5c0fcf;
      var _0x236583;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, '2c465urF+5E6a8SAy0Y1679', "AppManager", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "01a4bCeOlRFS4PxU4ftD5wn", "BackpackManager", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "e98d6g3Sn5F/phbS0JGqk6v", 'BuyBonusManager', undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "810fcmXyb9Bu4OzTZmIkoz9", "CommonGameManager", undefined);
      (function (_0x1d91c1) {
        _0x1d91c1[_0x1d91c1.Get = 0x0] = "Get";
        _0x1d91c1[_0x1d91c1.Post = 0x1] = "Post";
      })(_0x5c0fcf || (_0x5c0fcf = {}));
      (function (_0x47c817) {
        _0x47c817[_0x47c817.Ignore = 0x0] = 'Ignore';
        _0x47c817[_0x47c817.Handle = 0x1] = 'Handle';
      })(_0x236583 || (_0x236583 = {}));
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "0e324Erw0JDW6aCYO5d0i2g", "DailyMissionManager", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "dd020H2ox5CQ70Z9VNWXYpK", "DebrisManager", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "1fcfdTjgMdDr4mh99NzZ29B", "GaiaManager", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, 'a3f63TygSlA6KwEkLDlQIoJ', "GiftCodeManager", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "9692fSvI0xNR5GVPmbcEfzq", "IframeCommandManager", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "d8221PEwlRBep+hz+x7w5Ot", 'NewBottomBarManager', undefined);
      var _0x1defce;
      var _0x4e47db;
      var _0x3ece10;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "28748R+s5pCY7kwYZ0zkqKk", "NewExtraManager", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, '861e1J/bwRGlI4J13TOOh4y', 'TrialManager', undefined);
      (function (_0x46da94) {
        _0x46da94[_0x46da94.None = 0x0] = "None";
        _0x46da94[_0x46da94.Playing = 0x1] = 'Playing';
        _0x46da94[_0x46da94.Item = 0x2] = "Item";
      })(_0x3ece10 || (_0x3ece10 = {}));
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "0f3df9al6NIJJ1/5ZP5aShG", "MsgBoxManager", undefined);
      var _0x10427c;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, '8de065l1yBCNoeRGxK2yzaD', "StateManager", undefined);
      var _0x215f6f;
      var _0x501208;
      var _0x761887;
      var _0x341da1;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "c7e3d4LY9dOUokI+wu7YgCQ", "AutoShowManager", undefined);
      (function (_0x246640) {
        _0x246640[_0x246640.SKY_BAR = 0x0] = "SKY_BAR";
        _0x246640[_0x246640.PAYTABLE = 0x1] = "PAYTABLE";
        _0x246640[_0x246640.LANDING = 0x2] = 'LANDING';
        _0x246640[_0x246640.DISCOUNT = 0x3] = 'DISCOUNT';
        _0x246640[_0x246640.EXTRA_BET = 0x4] = 'EXTRA_BET';
        _0x246640[_0x246640.ICONBOX = 0x5] = 'ICONBOX';
        _0x246640[_0x246640.FREESPIN_BONUS = 0x6] = 'FREESPIN_BONUS';
      })(_0x501208 || (_0x501208 = {}));
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "d388f5XkRRFcYXg5usnXTa/", "LocaleStringManager", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "077a5gmYEpIQqr+YOtt+g08", "LocalStorageManager", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, '8c0f7IX3HNLY6BaWiL8u0j4', "SoundManager", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "50f8dtxxuFDo6qJW6FBFBaO", "EventManager", undefined);
      var _0x3a387b;
      var _0x164355;
      var _0x2491d9;
      var _0x389a53;
      var _0x10e896;
      var _0x1cf0e5;
      var _0x1cd6b4;
      var _0x4a76a2;
      var _0x4d6808;
      var _0x4171e6;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "18947v7ICNDlYz3G5vE642k", "LoadPrefabManager", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "de7f6JwfsBHBYba0UlqLoFI", "NotificationManager", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, '81438uBGiNJXoDkKAmuxEJu', "FunctionControlManager", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "3e41doUMVNLQbg53Jn6N9ch", "SoundAudioManager", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, 'cfe9e3/byhFGL1S1brGrbPU', "DebugManager", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "858d45NBqBLW5W3J41WER1G", "index", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "4c480cU1LpMo4WqCcvtd0ph", "Tools", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "de32cbzFmBN4rL/N8DkMkAD", "Define", undefined);
      (function (_0x5c5db2) {
        _0x5c5db2[_0x5c5db2.NORMAL = 0x0] = "NORMAL";
        _0x5c5db2[_0x5c5db2.USING = 0x1] = "USING";
      })(_0x2491d9 || (_0x2491d9 = {}));
      (function (_0x17abd2) {
        _0x17abd2[_0x17abd2.GAME_CLOSE = 0x3e8] = 'GAME_CLOSE';
        _0x17abd2[_0x17abd2.LOGIN = 0x3e9] = "LOGIN";
        _0x17abd2[_0x17abd2.WAIT_RES = 0x3ea] = 'WAIT_RES';
        _0x17abd2[_0x17abd2.CHECK_UNSHOW = 0x3eb] = 'CHECK_UNSHOW';
        _0x17abd2[_0x17abd2.CHECK_FREESPIN = 0x3ec] = 'CHECK_FREESPIN';
        _0x17abd2[_0x17abd2.IDLE = 0x3ed] = "IDLE";
        _0x17abd2[_0x17abd2.SPIN_REQ = 0x3ee] = "SPIN_REQ";
        _0x17abd2[_0x17abd2.SPIN = 0x3ef] = 'SPIN';
        _0x17abd2[_0x17abd2.COMMON_SHOW = 0x3f0] = "COMMON_SHOW";
        _0x17abd2[_0x17abd2.MHB_SHOW = 0x3f1] = "MHB_SHOW";
        _0x17abd2[_0x17abd2.JP_SHOW = 0x3f2] = "JP_SHOW";
        _0x17abd2[_0x17abd2.CHECK_STATE = 0x3f3] = "CHECK_STATE";
        _0x17abd2[_0x17abd2.END = 0x3f4] = 'END';
        _0x17abd2[_0x17abd2.FREESPIN_WAIT_RES = 0x3f5] = "FREESPIN_WAIT_RES";
        _0x17abd2[_0x17abd2.TURBO = 0x3f6] = "TURBO";
        _0x17abd2[_0x17abd2.FIRST_IN_GAME = 0x3f7] = "FIRST_IN_GAME";
        _0x17abd2[_0x17abd2.CHECK_APP_REWARD = 0x3f8] = "CHECK_APP_REWARD";
        _0x17abd2[_0x17abd2.CHECK_BUFF = 0x3f9] = "CHECK_BUFF";
        _0x17abd2[_0x17abd2.ACTIVATE_BUFF = 0x3fa] = "ACTIVATE_BUFF";
        _0x17abd2[_0x17abd2.END_BUFF = 0x3fb] = "END_BUFF";
        _0x17abd2[_0x17abd2.GRAND_JP = 0x3fc] = "GRAND_JP";
      })(_0x389a53 || (_0x389a53 = {}));
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, '813162EnmlPD6ZkP+n93pP2', "RoundController", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, '1d5a8ODImpC9qtSki10xwQQ', "ExtraBetController", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "cd534oKcOFFap8T54HqFCAE", "FakeServer", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "3ec76bGz5NECbh3RNjc2SdI", "TempoSetting", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "6f779uo//FP8owPSb4jjuXE", 'CommonEffect', undefined);
      (function (_0xb5a942) {
        var _0x4c7035 = function () {
          function _0x5a1e83() {}
          _0x5a1e83.PascalTriangleLine = function (_0x5662fa) {
            var _0x1b7628 = [0x1];
            for (var _0x1e98f5 = 0x1; _0x1e98f5 < _0x5662fa; _0x1e98f5++) {
              _0x1b7628[_0x1e98f5] = _0x1b7628[_0x1e98f5 - 0x1] * (_0x5662fa - _0x1e98f5) / _0x1e98f5;
            }
            return _0x1b7628;
          };
          _0x5a1e83.RangedRandom = function (_0x1a5508, _0x3b9f20) {
            return (_0x3b9f20 - _0x1a5508) * Math.random() + _0x1a5508;
          };
          _0x5a1e83.GetRandomRectPos = function (_0x1c2eff, _0x5950ee, _0x18d4f4) {
            var _0x39b13c = _0x12b535(this.RangedRandom(-_0x5950ee.x, _0x5950ee.x) / 0x2 | 0x0, this.RangedRandom(-_0x5950ee.x, _0x5950ee.x) / 0x2 | 0x0).rotate(_0x18d4f4 * _0x2b19b2.RAD);
            return _0x1c2eff.add(_0x39b13c);
          };
          _0x5a1e83.GetRandomOvalPos = function (_0x17f39b, _0xaca892, _0x1d65ea) {
            var _0x195614 = _0xaca892.y / Math.max(0x1, _0xaca892.x);
            var _0x1062f7 = Math.random() * _0xaca892.x * 0.5;
            var _0x40edb1 = Math.random() * Math.PI * 0x2;
            var _0x598b35 = _0x12b535(_0x1062f7 * Math.cos(_0x40edb1), _0x1062f7 * Math.sin(_0x40edb1) * _0x195614).rotate(_0x1d65ea * _0x2b19b2.RAD);
            return _0x17f39b.add(_0x598b35);
          };
          _0x5a1e83.ZoomAndFlip = function (_0x351458, _0x1428c0, _0x5f3c0e, _0x48a487) {
            var _0xd761ae = Math.sin(_0x48a487 * Math.PI) * (_0x1428c0 - _0x351458) + _0x351458;
            var _0x75180e = Math.cos(_0x48a487 * Math.PI * _0x5f3c0e);
            return _0x12b535(_0xd761ae * _0x75180e, _0xd761ae);
          };
          return _0x5a1e83;
        }();
        _0xb5a942.ExtendsMath = _0x4c7035;
        var _0x569918 = function () {
          function _0x405c77(_0x25f332) {
            this.pts = null;
            this.len = 0x0;
            this.ptl = null;
            this.bez = null;
            this.len = _0x25f332.length;
            if (0x0 == this.len) {
              _0x25f332.push(_0x318e19(0x0, 0x0));
              _0x25f332.push(_0x318e19(0x0, 0x0));
            } else if (0x1 == this.len) {
              _0x25f332.push(_0x318e19(_0x25f332[0x0].x, _0x25f332[0x0].y));
            }
            this.pts = _0x25f332;
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
                this.ptl = _0x4c7035.PascalTriangleLine(this.len);
                this.bez = this.BezierN;
            }
          }
          var _0x2cabff = _0x405c77.prototype;
          _0x2cabff.GetPosition = function (_0x7729a9) {
            return this.bez.apply(this, [_0x7729a9]);
          };
          _0x2cabff.Bezier2 = function (_0x2e6e2f) {
            var _0x283b0f = 0x1 - _0x2e6e2f;
            return _0x318e19(_0x283b0f * this.pts[0x0].x + _0x2e6e2f * this.pts[0x1].x, _0x283b0f * this.pts[0x0].y + _0x2e6e2f * this.pts[0x1].y);
          };
          _0x2cabff.Bezier3 = function (_0x4e3bd1) {
            var _0x2765c1 = 0x1 - _0x4e3bd1;
            var _0x33abed = [_0x2765c1 * _0x2765c1, 0x2 * _0x2765c1 * _0x4e3bd1, _0x4e3bd1 * _0x4e3bd1];
            return _0x318e19(_0x33abed[0x0] * this.pts[0x0].x + _0x33abed[0x1] * this.pts[0x1].x + _0x33abed[0x2] * this.pts[0x2].x, _0x33abed[0x0] * this.pts[0x0].y + _0x33abed[0x1] * this.pts[0x1].y + _0x33abed[0x2] * this.pts[0x2].y);
          };
          _0x2cabff.Bezier4 = function (_0x53651d) {
            var _0x2c8ec7 = 0x1 - _0x53651d;
            var _0x298bbe = [_0x2c8ec7 * _0x2c8ec7 * _0x2c8ec7, 0x3 * _0x2c8ec7 * _0x2c8ec7 * _0x53651d, 0x3 * _0x2c8ec7 * _0x53651d * _0x53651d, _0x53651d * _0x53651d * _0x53651d];
            return _0x318e19(_0x298bbe[0x0] * this.pts[0x0].x + _0x298bbe[0x1] * this.pts[0x1].x + _0x298bbe[0x2] * this.pts[0x2].x + _0x298bbe[0x3] * this.pts[0x3].x, _0x298bbe[0x0] * this.pts[0x0].y + _0x298bbe[0x1] * this.pts[0x1].y + _0x298bbe[0x2] * this.pts[0x2].y + _0x298bbe[0x3] * this.pts[0x3].y);
          };
          _0x2cabff.Bezier5 = function (_0x4d6475) {
            var _0x1ab6cf = 0x1 - _0x4d6475;
            var _0x4330fd = [_0x1ab6cf * _0x1ab6cf * _0x1ab6cf * _0x1ab6cf, 0x4 * _0x1ab6cf * _0x1ab6cf * _0x1ab6cf * _0x4d6475, 0x6 * _0x1ab6cf * _0x1ab6cf * _0x4d6475 * _0x4d6475, 0x4 * _0x1ab6cf * _0x4d6475 * _0x4d6475 * _0x4d6475, _0x4d6475 * _0x4d6475 * _0x4d6475 * _0x4d6475];
            return _0x318e19(_0x4330fd[0x0] * this.pts[0x0].x + _0x4330fd[0x1] * this.pts[0x1].x + _0x4330fd[0x2] * this.pts[0x2].x + _0x4330fd[0x3] * this.pts[0x3].x + _0x4330fd[0x4] * this.pts[0x4].x, _0x4330fd[0x0] * this.pts[0x0].y + _0x4330fd[0x1] * this.pts[0x1].y + _0x4330fd[0x2] * this.pts[0x2].y + _0x4330fd[0x3] * this.pts[0x3].y + _0x4330fd[0x4] * this.pts[0x4].y);
          };
          _0x2cabff.Bezier6 = function (_0x26c79d) {
            var _0x178072 = 0x1 - _0x26c79d;
            var _0x4862cd = [_0x178072 * _0x178072 * _0x178072 * _0x178072 * _0x178072, 0x5 * _0x178072 * _0x178072 * _0x178072 * _0x178072 * _0x26c79d, 0xa * _0x178072 * _0x178072 * _0x178072 * _0x26c79d * _0x26c79d, 0xa * _0x178072 * _0x178072 * _0x26c79d * _0x26c79d * _0x26c79d, 0x5 * _0x178072 * _0x26c79d * _0x26c79d * _0x26c79d * _0x26c79d, _0x26c79d * _0x26c79d * _0x26c79d * _0x26c79d * _0x26c79d];
            return _0x318e19(_0x4862cd[0x0] * this.pts[0x0].x + _0x4862cd[0x1] * this.pts[0x1].x + _0x4862cd[0x2] * this.pts[0x2].x + _0x4862cd[0x3] * this.pts[0x3].x + _0x4862cd[0x4] * this.pts[0x4].x + _0x4862cd[0x5] * this.pts[0x5].x, _0x4862cd[0x0] * this.pts[0x0].y + _0x4862cd[0x1] * this.pts[0x1].y + _0x4862cd[0x2] * this.pts[0x2].y + _0x4862cd[0x3] * this.pts[0x3].y + _0x4862cd[0x4] * this.pts[0x4].y + _0x4862cd[0x5] * this.pts[0x5].y);
          };
          _0x2cabff.BezierN = function (_0x2bd927) {
            var _0x3ee5a6 = 0x1 - _0x2bd927;
            var _0x57e910 = _0x318e19(0x0, 0x0);
            for (var _0x304ab4 = 0x0; _0x304ab4 < this.len; _0x304ab4++) {
              var _0xcd0c4f = 0x1;
              for (var _0x19acfa = 0x0; _0x19acfa < this.len - _0x304ab4 - 0x1; _0x19acfa++) {
                _0xcd0c4f *= _0x3ee5a6;
              }
              for (var _0x38c36a = 0x0; _0x38c36a < _0x304ab4; _0x38c36a++) {
                _0xcd0c4f *= _0x2bd927;
              }
              _0x57e910.x += _0xcd0c4f * this.ptl[_0x304ab4] * this.pts[_0x304ab4].x;
              _0x57e910.y += _0xcd0c4f * this.ptl[_0x304ab4] * this.pts[_0x304ab4].y;
            }
            return _0x57e910;
          };
          return _0x405c77;
        }();
        _0xb5a942.Bezier = _0x569918;
      })(_0x1cd6b4 || (_0x1cd6b4 = {}));
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "391b6CLPVhBEqeFr1f7nxDE", "index", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "f2b3dAE/D1D9auYZXPbizHv", "Game_Define", undefined);
      (function (_0x507c3e) {
        _0x507c3e[_0x507c3e.WAIT_READY = 0x0] = "WAIT_READY";
        _0x507c3e[_0x507c3e.UNSHOW_PREPARE = 0x1] = 'UNSHOW_PREPARE';
        _0x507c3e[_0x507c3e.FEATURE_SHOW = 0x2] = "FEATURE_SHOW";
        _0x507c3e[_0x507c3e.PLATE_SHOW = 0x3] = "PLATE_SHOW";
        _0x507c3e[_0x507c3e.CHECK_PLATE = 0x4] = "CHECK_PLATE";
        _0x507c3e[_0x507c3e.CHANGE_SYMBOL = 0x5] = "CHANGE_SYMBOL";
        _0x507c3e[_0x507c3e.CHECK_COLLECT = 0x6] = "CHECK_COLLECT";
        _0x507c3e[_0x507c3e.COLLECT_MONEY = 0x7] = "COLLECT_MONEY";
        _0x507c3e[_0x507c3e.CHECK_MYSTERY = 0x8] = "CHECK_MYSTERY";
        _0x507c3e[_0x507c3e.MYSTERY_SPIN = 0x9] = "MYSTERY_SPIN";
        _0x507c3e[_0x507c3e.AWARD = 0xa] = "AWARD";
        _0x507c3e[_0x507c3e.BG_AWARD = 0xb] = 'BG_AWARD';
        _0x507c3e[_0x507c3e.ROUND_SHOW_END = 0xc] = "ROUND_SHOW_END";
        _0x507c3e[_0x507c3e.ENTER_BONUS = 0xd] = "ENTER_BONUS";
        _0x507c3e[_0x507c3e.LEAVE_BONUS = 0xe] = "LEAVE_BONUS";
        _0x507c3e[_0x507c3e.ROUND_END = 0xf] = "ROUND_END";
      })(_0x4a76a2 || (_0x4a76a2 = {}));
      (function (_0x4ea05c) {
        _0x4ea05c[_0x4ea05c.EMPTY = 0x0] = 'EMPTY';
        _0x4ea05c[_0x4ea05c.BRONZE = 0x1] = "BRONZE";
        _0x4ea05c[_0x4ea05c.SILVER = 0x2] = "SILVER";
        _0x4ea05c[_0x4ea05c.GOLD = 0x3] = 'GOLD';
        _0x4ea05c[_0x4ea05c.MINI = 0x4] = "MINI";
        _0x4ea05c[_0x4ea05c.MINOR = 0x5] = "MINOR";
        _0x4ea05c[_0x4ea05c.MAJOR = 0x6] = 'MAJOR';
        _0x4ea05c[_0x4ea05c.MYSTERY = 0x7] = "MYSTERY";
        _0x4ea05c[_0x4ea05c.JP_MYSTERY = 0x8] = 'JP_MYSTERY';
        _0x4ea05c[_0x4ea05c.CAISHEN = 0x9] = "CAISHEN";
      })(_0x4d6808 || (_0x4d6808 = {}));
      (function (_0x57ff82) {
        _0x57ff82[_0x57ff82.EMPTY = 0x0] = "EMPTY";
        _0x57ff82[_0x57ff82.COIN = 0x1] = "COIN";
        _0x57ff82[_0x57ff82.JP = 0x2] = 'JP';
        _0x57ff82[_0x57ff82.MYSTERY = 0x3] = 'MYSTERY';
        _0x57ff82[_0x57ff82.JP_MYSTERY = 0x4] = 'JP_MYSTERY';
        _0x57ff82[_0x57ff82.CAISHEN = 0x5] = "CAISHEN";
        _0x57ff82[_0x57ff82.BG_CAISHEN = 0x6] = 'BG_CAISHEN';
      })(_0x4171e6 || (_0x4171e6 = {}));
      var _0x48463c = [0.46, 0.2, 0.14, 0.07, 0.03, 0.02, 0.01, 0.02, 0x0, 0.05];
      var _0x2f04f4 = [0.33, 0.1, 0.1, 0.08, 0.06, 0.05, 0.03, 0.1, 0.05, 0.1];
      var _0x2f795d = function () {
        function _0x48bd09() {}
        _0x48bd09.GetDisplayNumString = function (_0x11f861, _0x891f2b) {
          if (undefined === _0x891f2b) {
            _0x891f2b = 0x3;
          }
          var _0x15cb09 = Math.pow(0xa, _0x891f2b);
          var _0x122c63 = _0x11f861;
          return _0x11f861 >= _0x164355.times(_0x15cb09, 0x3e8) ? (_0x122c63 = _0x164355.divide(_0x11f861, 0xf4240), _0x164355.FormatNumberThousands(_0x1defce.GetDisplayValue(_0x122c63), _0x164355.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO, false) + 'M') : _0x11f861 >= _0x15cb09 ? (_0x122c63 = _0x164355.divide(_0x11f861, 0x3e8), _0x164355.FormatNumberThousands(_0x1defce.GetDisplayValue(_0x122c63), _0x164355.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO, false) + 'K') : _0x164355.FormatNumberThousands(_0x1defce.GetDisplayValue(_0x122c63), _0x164355.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO, false);
        };
        _0x48bd09.OnExit = function () {
          this.AudioClips = {
            'Debut': null,
            'Reel_Spin': null,
            'Reel_Stop': null,
            'BGM_MG': null,
            'BGM_MG_EX': null,
            'NearWin': null,
            'Coins_Fly': null,
            'Extra_Touch': null,
            'Extra_Bet_On': null,
            'Caishen_Stop': null,
            'Caishen_Symbol_Throw': null,
            'Symbol_Spawn': null,
            'Caishen_Symbol_Bell': null,
            'Caishen_Multiple_Trans': null,
            'Caishen_Multiple_Use': null,
            'Caishen_01': null,
            'Caishen_04': null,
            'Caishen_Throw': null,
            'Caishen_Upgrade': null,
            'Mestery_Show': null,
            'Mestery_Reel': null,
            'Mestery_knock_open': null,
            'Score_Add': null,
            'Small_Win01': null,
            'Small_Win02': null,
            'Small_Win03': null,
            'Big_Win': null,
            'Big_Win_Change': null,
            'Big_Win_End': null,
            'BG_Start': null,
            'BG_Light': null,
            'BGM_BG': null,
            'BG_Count_Reset': null,
            'BG_Compliment': null,
            'BG_Grand_Compliment': null,
            'Mini': null,
            'Minor': null,
            'Major': null
          };
        };
        return _0x48bd09;
      }();
      var _0x36a211;
      var _0x14afe5;
      var _0x504fa1;
      var _0xb1d296;
      var _0x3e0a39;
      var _0x5da1ff;
      var _0x37377f;
      var _0x1fc13d;
      var _0x7a319d;
      _0x2f795d.GameState = _0x1ce4de(_0x4a76a2);
      _0x2f795d.ReelSymbol = _0x1ce4de(_0x4d6808);
      _0x2f795d.SymbolType = _0x1ce4de(_0x4171e6);
      _0x2f795d.Ver = '69';
      _0x2f795d.ShortGameName = "mpt";
      _0x2f795d.ChilliNum = 0x2;
      _0x2f795d.StateLog = [];
      _0x2f795d.EventID = {
        'SPIN_OVERTIME': 0x7d0
      };
      _0x2f795d.IsInBG = false;
      _0x2f795d.IsToBG = false;
      _0x2f795d.IsNearWin = false;
      _0x2f795d.IsGrand = false;
      _0x2f795d.ThrowBack = false;
      _0x2f795d.RoundIdx = 0x0;
      _0x2f795d.MysteryCount = 0x0;
      _0x2f795d.CollectCount = 0x0;
      _0x2f795d.NowPlateInfo = [];
      _0x2f795d.NowMulInfo = [];
      _0x2f795d.FinalPlateInfo = [];
      _0x2f795d.FinalMulInfo = [];
      _0x2f795d.COL = 0x3;
      _0x2f795d.ROW = 0x3;
      _0x2f795d.CS_COL = 0x1;
      _0x2f795d.CS_ROW = 0x1;
      _0x2f795d.MYSTERY_SPIN = 0xd;
      _0x2f795d.Layer2D = 33554432;
      _0x2f795d.BG_MAX_FREESPINS = 0x3;
      _0x2f795d.ExtraType = {
        'None': 0x0,
        'Double': 0x1,
        'Quadruple': 0x2
      };
      _0x2f795d.MulRateArray = [];
      _0x2f795d.COIN_RATE = [0x2, 0x6];
      _0x2f795d.JP_RATE = [0xf, 0x19, 0x32, 0xbb8];
      _0x2f795d.WIN_RATE = [0x5, 0xf, 0x1e];
      _0x2f795d.FAKE_WIN_RATE = 0x1;
      _0x2f795d.SMALL_WIN_ODDS = [0x2, 0x4, 0x6];
      _0x2f795d.FLY_TIME = 0.7;
      _0x2f795d.FLY_INTERVAL = 0.3;
      _0x2f795d.COIN_FLY_TIME = 0.5;
      _0x2f795d.SYMBOL_COIN_JP_SKIN = ["default", "LV_1", "LV_2", "LV_3"];
      _0x2f795d.SMALL_WIN_ANIM = {
        'Win_Start': "Win_Start",
        'Win_Loop': "Win_Loop",
        'Win_End': "Win_End"
      };
      _0x2f795d.POT_LEVEL = 0x0;
      _0x2f795d.POT_LEVELUP_RATE = 0.5;
      _0x2f795d.FAKE_THROW_RATE = [0.15, 0.3, 0.45];
      _0x2f795d.REEL_STOP_TIME = 0.5;
      _0x2f795d.DARK_RGB = 0x89;
      _0x2f795d.JP_BAR_DIGITS = 0x6;
      _0x2f795d.SYMBOL_NUM_DIGITS = 0x4;
      _0x2f795d.BG_COUNTER_TITLE = {
        'FreeSpins': "FreeSpins_txt",
        'TotalWin': "TotalWin_txt"
      };
      _0x2f795d.ManualTxts = ["String_01", "String_02", "String_03"];
      _0x2f795d.ManualTitle = "String_00";
      _0x2f795d.BG_StringKey = {
        'DECLARE_TITLE': "BG_in_title",
        'DECLARE_TXT': "BG_in_txt",
        'DECLARE_SUBTITLE': "BG_in_title_02",
        'COMPLIMENT_TITLE': 'WIN_Settle_title'
      };
      _0x2f795d.StringKey = {
        'GAME_FEATURES_LEFT': "FEATURE_LEFT",
        'GAME_FEATURES_RIGHT': 'FEATURE_RIGHT',
        'GAME_EX_DESCRIPTION': "EX_DESCRIPTION",
        'TRIAL_REFUSED_REASON_1': "TRIAL_REFUSED_REASON_1"
      };
      _0x2f795d.ExtraBetStringKey = {
        'COMFIRM_BTN': "Confirm_txt",
        'EXTRA_SELECT_PANEL': "Etrabet_select",
        'EXTRA_BET': "betnum_txt",
        'EXTRA_TITLE': "ExtraBet_title",
        'EXTRA_DESCRIPTION': 'ExtraBet_txt',
        'EXTRA_BOARD': 'MG_specialTXT_01s'
      };
      _0x2f795d.AUTO_SPIN_BLANK_TIME = 0.3;
      _0x2f795d.FEATURE_BET_VALUE = 0xa;
      _0x2f795d.ANI_ACTION_TIME = {
        'TIME_SHOW_LITTLE_WIN': 0x1
      };
      _0x2f795d.BgmId = -0x1;
      _0x2f795d.NearWinSoundId = -0x1;
      _0x2f795d.AudioFileRoot = 'Sound/';
      _0x2f795d.AudioFilePath = {
        'Debut': "Debut",
        'Reel_Spin': "Reel_Spin",
        'Reel_Stop': 'Reel_Stop',
        'BGM_MG': "BGM_MG",
        'BGM_MG_EX': 'BGM_MG_EX',
        'NearWin': "NearWin",
        'Coins_Fly': "Coins_Fly",
        'Extra_Touch': 'Extra_Touch',
        'Extra_Bet_On': "Extra_Bet_On",
        'Caishen_Stop': 'Caishen_Stop',
        'Caishen_Symbol_Throw': "Caishen_Symbol_Throw",
        'Symbol_Spawn': "Symbol_Spawn",
        'Caishen_Symbol_Bell': "Caishen_Symbol_Bell",
        'Caishen_Multiple_Trans': 'Caishen_Multiple_Trans',
        'Caishen_Multiple_Use': 'Caishen_Multiple_Use',
        'Caishen_01': "Caishen_01",
        'Caishen_04': "Caishen_04",
        'Caishen_Throw': "Caishen_Throw",
        'Caishen_Upgrade': "Caishen_Upgrade",
        'Mestery_Show': "Mestery_Show",
        'Mestery_Reel': "Mestery_Reel",
        'Mestery_knock_open': 'Mestery_knock_open',
        'Score_Add': "Score_Add",
        'Small_Win01': 'Small_Win01',
        'Small_Win02': "Small_Win02",
        'Small_Win03': "Small_Win03",
        'Big_Win': 'Big_Win',
        'Big_Win_Change': "Big_Win_Change",
        'Big_Win_End': "Big_Win_End",
        'BG_Start': "BG_Start",
        'BG_Light': "BG_Light",
        'BGM_BG': 'BGM_BG',
        'BG_Count_Reset': "BG_Count_Reset",
        'BG_Compliment': 'BG_Compliment',
        'BG_Grand_Compliment': "BG_Grand_Compliment",
        'Mini': "Mini",
        'Minor': "Minor",
        'Major': "Major"
      };
      _0x2f795d.AudioClips = {
        'Debut': null,
        'Reel_Spin': null,
        'Reel_Stop': null,
        'BGM_MG': null,
        'BGM_MG_EX': null,
        'NearWin': null,
        'Coins_Fly': null,
        'Extra_Touch': null,
        'Extra_Bet_On': null,
        'Caishen_Stop': null,
        'Caishen_Symbol_Throw': null,
        'Symbol_Spawn': null,
        'Caishen_Symbol_Bell': null,
        'Caishen_Multiple_Trans': null,
        'Caishen_Multiple_Use': null,
        'Caishen_01': null,
        'Caishen_04': null,
        'Caishen_Throw': null,
        'Caishen_Upgrade': null,
        'Mestery_Show': null,
        'Mestery_Reel': null,
        'Mestery_knock_open': null,
        'Score_Add': null,
        'Small_Win01': null,
        'Small_Win02': null,
        'Small_Win03': null,
        'Big_Win': null,
        'Big_Win_Change': null,
        'Big_Win_End': null,
        'BG_Start': null,
        'BG_Light': null,
        'BGM_BG': null,
        'BG_Count_Reset': null,
        'BG_Compliment': null,
        'BG_Grand_Compliment': null,
        'Mini': null,
        'Minor': null,
        'Major': null
      };
      _0x2f795d.FeaturesSpinAck = [{
        'RoundInfo': [{
          'Symbol': [{
            'Col': [0x3, 0x3, 0x1]
          }, {
            'Col': [0x5, 0x1, 0x5]
          }, {
            'Col': [0x1, 0x3, 0x1]
          }],
          'Mul': [{
            'Col': [0x0, 0x0, 0x3]
          }, {
            'Col': [0x0, 0x4, 0x0]
          }, {
            'Col': [0xa, 0x0, 0x1]
          }],
          'FinalSymbol': [{
            'Col': [0x1, 0x1, 0x1]
          }, {
            'Col': [0x5, 0x1, 0x5]
          }, {
            'Col': [0x1, 0x1, 0x1]
          }],
          'FinalMul': [{
            'Col': [0x5, 0x6, 0x3]
          }, {
            'Col': [0x12, 0x4, 0x12]
          }, {
            'Col': [0xa, 0x5, 0x1]
          }],
          'CollectList': [{
            'CPos': [0x2, 0x4, 0x6, 0x8],
            'Pos': 0x3,
            'Mul': 0x12
          }, {
            'CPos': [0x2, 0x4, 0x6, 0x8],
            'Pos': 0x5,
            'Mul': 0x12
          }],
          'MysteryList': [{
            'Symbol': 0x1,
            'Mul': 0x5
          }, {
            'Pos': 0x1,
            'Symbol': 0x1,
            'Mul': 0x6
          }, {
            'Pos': 0x7,
            'Symbol': 0x1,
            'Mul': 0x5
          }],
          'AwardDataVec': [{
            'Symbol': [0x1, 0x5, 0x1],
            'Mul': [0x5, 0x12, 0xa],
            'AllMul': 0x21,
            'Win': 0x21
          }, {
            'Symbol': [0x1, 0x1, 0x1],
            'Mul': [0x6, 0x4, 0x5],
            'Index': 0x1,
            'AllMul': 0xf,
            'Win': 0xf
          }, {
            'Symbol': [0x1, 0x5, 0x1],
            'Mul': [0x3, 0x12, 0x1],
            'Index': 0x2,
            'AllMul': 0x16,
            'Win': 0x16
          }],
          'PotList': [],
          'ComboStageWin': 0x46
        }],
        'ReelType': 0x4,
        'TotalWin': 0x46,
        'RTP': 0x61
      }, {
        'RoundInfo': [{
          'Symbol': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x5, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'Mul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalSymbol': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x5, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'FinalMul': [{
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }, {
            'Col': [0x0, 0x0, 0x0]
          }],
          'CollectList': [],
          'MysteryList': [],
          'AwardDataVec': [],
          'PotList': [],
          'ReSpinRemainRound': 0x3,
          'GetReSpin': true
        }, {
          'Symbol': [{
            'Col': [0x3, 0x1, 0x2]
          }, {
            'Col': [0x3, 0x5, 0x1]
          }, {
            'Col': [0x6, 0x1, 0x2]
          }],
          'Mul': [{
            'Col': [0x0, 0x2, 0xf]
          }, {
            'Col': [0x0, 0x0, 0x2]
          }, {
            'Col': [0x0, 0x3, 0xf]
          }],
          'FinalSymbol': [{
            'Col': [0x1, 0x1, 0x2]
          }, {
            'Col': [0x1, 0x5, 0x1]
          }, {
            'Col': [0x6, 0x1, 0x2]
          }],
          'FinalMul': [{
            'Col': [0x6, 0x2, 0xf]
          }, {
            'Col': [0x3, 0x7, 0x2]
          }, {
            'Col': [0x2a, 0x3, 0xf]
          }],
          'CollectList': [{
            'CPos': [0x1, 0x5, 0x7],
            'Pos': 0x4,
            'Mul': 0x7
          }, {
            'CPos': [0x1, 0x5, 0x7],
            'Pos': 0x6,
            'Mul': 0x7,
            'Extra': 0x6
          }],
          'MysteryList': [{
            'Symbol': 0x1,
            'Mul': 0x6
          }, {
            'Pos': 0x3,
            'Symbol': 0x1,
            'Mul': 0x3
          }],
          'AwardDataVec': [{
            'Symbol': [],
            'Mul': [],
            'Index': 0x63,
            'Pos': 0x9,
            'AllMul': 0xbb8,
            'Win': 0xbb8
          }],
          'PotList': [],
          'ComboStageWin': 0xbb8,
          'ReSpinTotalRound': 0x1
        }],
        'ReelType': 0x2,
        'TotalWin': 0xbb8,
        'RTP': 0x61
      }];
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "6d4b6lTFwpJZoHkIo5Uu8gm", "BGCounter", undefined);
      var _0x36b9bb = _0x4b56bb.ccclass;
      var _0x5d7753 = _0x4b56bb.property;
      _0x36a211 = _0x36b9bb("BGCounter");
      _0x14afe5 = _0x5d7753({
        'type': _0x423384.Skeleton,
        'tooltip': "Counter 特效"
      });
      _0x504fa1 = _0x5d7753({
        'type': _0x5465a6,
        'tooltip': "多語系標題"
      });
      _0xb1d296 = _0x5d7753({
        'type': _0x851753,
        'tooltip': "Counter 數字"
      });
      _0x5da1ff = function (_0x338dea) {
        function _0x25000f() {
          var _0xde0db8;
          var _0x3e3721 = arguments.length;
          var _0x41a70c = new Array(_0x3e3721);
          for (var _0x46977c = 0x0; _0x46977c < _0x3e3721; _0x46977c++) {
            _0x41a70c[_0x46977c] = arguments[_0x46977c];
          }
          _0x588ec8(_0xde0db8 = _0x338dea.call.apply(_0x338dea, [this].concat(_0x41a70c)) || this, "m_spine", _0x37377f, _0x2901b4(_0xde0db8));
          _0x588ec8(_0xde0db8, "m_titleText", _0x1fc13d, _0x2901b4(_0xde0db8));
          _0x588ec8(_0xde0db8, 'm_numLabel', _0x7a319d, _0x2901b4(_0xde0db8));
          _0xde0db8.m_prefix = '';
          return _0xde0db8;
        }
        _0x5a9673(_0x25000f, _0x338dea);
        var _0xc2cb85 = _0x25000f.prototype;
        _0xc2cb85.Init = function (_0x16f1a6) {
          this.m_prefix = _0x16f1a6;
        };
        _0xc2cb85.GetNumLabelNode = function () {
          return this.m_numLabel.node;
        };
        _0xc2cb85.SetupBG = function () {
          var _0x20c3e8 = _0x761887.GetGameAtlas();
          this.m_titleText.spriteFrame = _0x20c3e8.getSpriteFrame(_0x2f795d.BG_COUNTER_TITLE.FreeSpins);
          this.m_numLabel.string = _0x2f795d.BG_MAX_FREESPINS.toString();
        };
        _0xc2cb85.GetLabelNum = function () {
          return Number(this.m_numLabel.string);
        };
        _0xc2cb85.SetNumLabel = function (_0x33daed, _0x4dadce) {
          this.m_numLabel.string = _0x33daed >= 0x0 ? _0x2f795d.GetDisplayNumString(_0x33daed, _0x4dadce) : '';
        };
        _0xc2cb85.DecreaseNumLabel = function () {
          var _0x6c628 = Number(this.m_numLabel.string);
          _0x6c628--;
          this.SetNumLabel(_0x6c628);
        };
        _0xc2cb85.SetupTotalWin = function () {
          var _0x54971c = _0x761887.GetGameAtlas();
          this.m_titleText.spriteFrame = _0x54971c.getSpriteFrame(_0x2f795d.BG_COUNTER_TITLE.TotalWin);
          this.SetNumLabel(0x0);
        };
        _0xc2cb85.TransToCollect = function () {
          return _0x3c0bbf.PlayAnimation(this.m_spine, this.m_prefix + "Trans", false);
        };
        _0xc2cb85.PlayHit = function () {
          return _0x3c0bbf.PlayAnimation(this.m_spine, this.m_prefix + "Hit", false);
        };
        return _0x25000f;
      }(_0x4351ba);
      _0x37377f = _0x4fcd77(_0x5da1ff.prototype, "m_spine", [_0x14afe5], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1fc13d = _0x4fcd77(_0x5da1ff.prototype, "m_titleText", [_0x504fa1], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x7a319d = _0x4fcd77(_0x5da1ff.prototype, 'm_numLabel', [_0xb1d296], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x1bfd4f = _0x36a211(_0x3e0a39 = _0x5da1ff) || _0x3e0a39;
      var _0x3474ee;
      var _0x1d6299;
      var _0x25f2ae;
      var _0x16e9ab;
      var _0x1d0e56;
      var _0x5289f8;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "e1c4aYw8xpJDZVGlZ/cGmY7", "BGCounterController", undefined);
      var _0x4a42a4 = _0x4b56bb.ccclass;
      var _0x5f413b = _0x4b56bb.property;
      _0x3474ee = _0x4a42a4("BGCounterController");
      _0x1d6299 = _0x5f413b({
        'type': _0x1bfd4f,
        'tooltip': "Counter 橫版 Node"
      });
      _0x25f2ae = _0x5f413b({
        'type': _0x1bfd4f,
        'tooltip': "Counter 直版 Node"
      });
      _0x16e9ab = function (_0x25a760) {
        function _0x45a761() {
          var _0xbff3c3;
          var _0x5889f8 = arguments.length;
          var _0x4c6e33 = new Array(_0x5889f8);
          for (var _0xa5ac0d = 0x0; _0xa5ac0d < _0x5889f8; _0xa5ac0d++) {
            _0x4c6e33[_0xa5ac0d] = arguments[_0xa5ac0d];
          }
          _0x588ec8(_0xbff3c3 = _0x25a760.call.apply(_0x25a760, [this].concat(_0x4c6e33)) || this, "m_counterL", _0x1d0e56, _0x2901b4(_0xbff3c3));
          _0x588ec8(_0xbff3c3, "m_counterS", _0x5289f8, _0x2901b4(_0xbff3c3));
          _0xbff3c3.m_totalWin = 0x0;
          return _0xbff3c3;
        }
        _0x5a9673(_0x45a761, _0x25a760);
        var _0x2c8bd0 = _0x45a761.prototype;
        _0x2c8bd0.onLoad = function () {
          this.m_counterL.Init('L_');
          this.m_counterS.Init('S_');
        };
        _0x2c8bd0.GetNumLabelNode = function (_0x371c53) {
          return _0x371c53 ? this.m_counterL.GetNumLabelNode() : this.m_counterS.GetNumLabelNode();
        };
        _0x2c8bd0.Setup = function () {
          this.node.active = true;
          this.m_counterL.SetupBG();
          this.m_counterS.SetupBG();
          this.m_totalWin = 0x0;
        };
        _0x2c8bd0.GetBGRemainRound = function () {
          return this.m_totalWin > 0x0 ? 0x0 : this.m_counterL.GetLabelNum();
        };
        _0x2c8bd0.SetBGRemainRound = function () {
          var _0x32d7d8 = _0x2988f4(_0x57ce7a().mark(function _0x428d3e(_0x371c28, _0x30c277, _0x505f84) {
            return _0x57ce7a().wrap(function (_0x28d917) {
              for (;;) {
                switch (_0x28d917.prev = _0x28d917.next) {
                  case 0x0:
                    if (undefined === _0x30c277) {
                      _0x30c277 = false;
                    }
                    this.m_counterL.SetNumLabel(_0x371c28);
                    this.m_counterS.SetNumLabel(_0x371c28);
                    if (!_0x30c277) {
                      _0x28d917.next = 0xb;
                      break;
                    }
                    if (!_0x505f84) {
                      _0x28d917.next = 0x9;
                      break;
                    }
                    _0x28d917.next = 0x7;
                    return this.m_counterL.PlayHit();
                  case 0x7:
                    _0x28d917.next = 0xb;
                    break;
                  case 0x9:
                    _0x28d917.next = 0xb;
                    return this.m_counterS.PlayHit();
                  case 0xb:
                  case "end":
                    return _0x28d917.stop();
                }
              }
            }, _0x428d3e, this);
          }));
          return function (_0xb471b7, _0x44f2b4, _0x59c052) {
            return _0x32d7d8.apply(this, arguments);
          };
        }();
        _0x2c8bd0.DecreaseBGRound = function () {
          this.m_counterL.DecreaseNumLabel();
          this.m_counterS.DecreaseNumLabel();
        };
        _0x2c8bd0.TransToCollect = function (_0x5017f2) {
          var _0x143771 = this;
          return _0x5017f2 ? (this.m_counterS.SetupTotalWin(), this.m_counterL.TransToCollect().then(function () {
            _0x143771.m_counterL.SetupTotalWin();
          })) : (this.m_counterL.SetupTotalWin(), this.m_counterS.TransToCollect().then(function () {
            _0x143771.m_counterS.SetupTotalWin();
          }));
        };
        _0x2c8bd0.SetTotalWin = function (_0x2f28cf, _0x49fc6b) {
          this.m_totalWin = _0x2f28cf;
          this.m_counterL.SetNumLabel(_0x2f28cf, _0x2f795d.SYMBOL_NUM_DIGITS);
          this.m_counterS.SetNumLabel(_0x2f28cf, _0x2f795d.JP_BAR_DIGITS);
          if (_0x49fc6b) {
            this.m_counterL.PlayHit();
          } else {
            this.m_counterS.PlayHit();
          }
        };
        return _0x45a761;
      }(_0x4351ba);
      _0x1d0e56 = _0x4fcd77(_0x16e9ab.prototype, "m_counterL", [_0x1d6299], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5289f8 = _0x4fcd77(_0x16e9ab.prototype, "m_counterS", [_0x25f2ae], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x5865dd;
      var _0x5dab56;
      var _0x5d48b6;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "9002cpRqftN6YdxMwX1uLR5", "DataStructure", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "899a9w9xpFG7Jeo3V/gXpSh", "NodePool", undefined);
      var _0x34bcb5 = _0x4b56bb.ccclass;
      _0x5865dd = _0x34bcb5("NodePool");
      _0x5d48b6 = function () {
        function _0x444b9d() {
          this.m_symbolPrefabs = null;
          this.m_symbolNodes = [];
          this.m_csNumPrefab = null;
          this.m_csNumNodes = [];
          this.m_numFlyObjPrefab = null;
          this.m_numFlyObjNodes = [];
          this.m_coinFlyObjPrefab = null;
          this.m_coinFlyObjNodes = [];
        }
        _0x444b9d.GetInstance = function () {
          if (!this._instance) {
            this._instance = new _0x444b9d();
          }
          return _0x444b9d._instance;
        };
        _0x444b9d.OnExit = function () {
          delete this._instance;
          this._instance = null;
        };
        var _0x1c4145 = _0x444b9d.prototype;
        _0x1c4145.SetNumFlyObjPrefab = function (_0x590ece) {
          this.m_numFlyObjPrefab = _0x590ece;
        };
        _0x1c4145.GetNumFlyObj = function () {
          return this.m_numFlyObjNodes && this.m_numFlyObjNodes.length > 0x0 ? this.m_numFlyObjNodes.shift() : this.m_numFlyObjPrefab && 0x0 == this.m_numFlyObjNodes.length ? _0x5b1fd0(this.m_numFlyObjPrefab) : void _0x1f1e9d("No Prefabs");
        };
        _0x1c4145.ReturnNumFlyObj = function (_0x50e593) {
          if (_0x50e593.parent) {
            _0x50e593.removeFromParent();
          }
          this.m_numFlyObjNodes.push(_0x50e593);
        };
        _0x1c4145.SetSymbolPrefabs = function (_0x4e8d78) {
          this.m_symbolPrefabs = _0x4e8d78;
          for (var _0x17fcd2 = 0x0; _0x17fcd2 < this.m_symbolPrefabs.length; _0x17fcd2++) {
            this.m_symbolNodes.push([]);
          }
        };
        _0x1c4145.GetSymbol = function (_0x51b29d) {
          if (this.m_symbolNodes[_0x51b29d] && this.m_symbolNodes[_0x51b29d].length > 0x0) {
            return this.m_symbolNodes[_0x51b29d].shift();
          }
          if (this.m_symbolPrefabs && this.m_symbolPrefabs[_0x51b29d]) {
            var _0x590822 = _0x5b1fd0(this.m_symbolPrefabs[_0x51b29d]);
            _0x590822.name = _0x51b29d.toString();
            return _0x590822;
          }
          _0x1f1e9d("No Symbol Prefabs", _0x51b29d);
        };
        _0x1c4145.ReturnSymbol = function (_0x355fc0) {
          if (_0x355fc0.parent) {
            _0x355fc0.removeFromParent();
          }
          var _0x4471ec = Number(_0x355fc0.name);
          this.m_symbolNodes[_0x4471ec].push(_0x355fc0);
        };
        _0x1c4145.SetCSNumPrefab = function (_0x409d48) {
          this.m_csNumPrefab = _0x409d48;
        };
        _0x1c4145.GetCSNum = function () {
          return this.m_csNumNodes && this.m_csNumNodes.length > 0x0 ? this.m_csNumNodes.shift() : this.m_csNumPrefab && 0x0 == this.m_csNumNodes.length ? _0x5b1fd0(this.m_csNumPrefab) : void _0x1f1e9d("No Prefabs");
        };
        _0x1c4145.ReturnCSNum = function (_0x17815c) {
          if (_0x17815c.parent) {
            _0x17815c.removeFromParent();
          }
          this.m_csNumNodes.push(_0x17815c);
        };
        _0x1c4145.SetCoinFlyObjPrefab = function (_0x5bd0cb) {
          this.m_coinFlyObjPrefab = _0x5bd0cb;
        };
        _0x1c4145.GetCoinFlyObj = function () {
          return this.m_coinFlyObjNodes && this.m_coinFlyObjNodes.length > 0x0 ? this.m_coinFlyObjNodes.shift() : this.m_coinFlyObjPrefab && 0x0 == this.m_coinFlyObjNodes.length ? _0x5b1fd0(this.m_coinFlyObjPrefab) : void _0x1f1e9d("No Prefabs");
        };
        _0x1c4145.ReturnCoinFlyObj = function (_0x100c72) {
          if (_0x100c72.parent) {
            _0x100c72.removeFromParent();
          }
          this.m_coinFlyObjNodes.push(_0x100c72);
        };
        return _0x444b9d;
      }();
      _0x5d48b6._instance = new _0x5d48b6();
      var _0x28ef3f = _0x5865dd(_0x5dab56 = _0x5d48b6) || _0x5dab56;
      var _0x520147;
      var _0x4691b8;
      var _0x4ad0dd;
      var _0x2c8696;
      var _0x335f42;
      var _0x3d7ca7;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "4e4c0uBlZRLD5VG5oGZ4gP6", "CharacterSpine", undefined);
      var _0xe6a7bc = _0x4b56bb.ccclass;
      var _0x5ccb03 = _0x4b56bb.property;
      var _0x1859c7 = ['Skin1', "Skin2", 'Skin3'];
      _0x520147 = _0xe6a7bc("CharacterSpine");
      _0x4691b8 = _0x5ccb03({
        'type': _0x423384.Skeleton,
        'tooltip': "spine"
      });
      _0x4ad0dd = _0x5ccb03({
        'type': _0x25cea2,
        'tooltip': "聚寶盆節點"
      });
      _0x2c8696 = function (_0x5bbbc2) {
        function _0x2223a5() {
          var _0x3d4a8e;
          var _0x154a06 = arguments.length;
          var _0x185899 = new Array(_0x154a06);
          for (var _0x3ff574 = 0x0; _0x3ff574 < _0x154a06; _0x3ff574++) {
            _0x185899[_0x3ff574] = arguments[_0x3ff574];
          }
          _0x588ec8(_0x3d4a8e = _0x5bbbc2.call.apply(_0x5bbbc2, [this].concat(_0x185899)) || this, 'm_spine', _0x335f42, _0x2901b4(_0x3d4a8e));
          _0x588ec8(_0x3d4a8e, "m_collectNode", _0x3d7ca7, _0x2901b4(_0x3d4a8e));
          _0x3d4a8e.m_curAnimName = '';
          return _0x3d4a8e;
        }
        _0x5a9673(_0x2223a5, _0x5bbbc2);
        var _0x595e60 = _0x2223a5.prototype;
        _0x595e60.onLoad = function () {
          this.SetMixAnim();
          this.SetSkin(_0x1859c7[_0x2f795d.POT_LEVEL]);
          this.ShowIdle();
          this.m_curAnimName = "Idle";
        };
        _0x595e60.SetMixAnim = function () {
          this.m_spine.setMix("Mystery", "Idle", 0.1);
          this.m_spine.setMix('Win', "Idle", 0.1);
        };
        _0x595e60.SetSkin = function (_0xc8f45c) {
          this.m_spine.setSkin(_0xc8f45c);
        };
        _0x595e60.SetTimeScale = function (_0x15b364) {
          this.m_spine.timeScale = _0x15b364;
        };
        _0x595e60.PlayAnimation = function (_0x2ca13a, _0x5a72ae) {
          var _0x386140 = this;
          if (undefined === _0x5a72ae) {
            _0x5a72ae = false;
          }
          if (this.m_curAnimName !== _0x2ca13a) {
            this.m_curAnimName = _0x2ca13a;
            return new Promise(function (_0x3c6f54) {
              switch (_0x2ca13a) {
                case "Idle":
                  _0x386140.m_spine.setCompleteListener(function () {
                    _0x386140.ShowIdle();
                    _0x3c6f54();
                    _0x386140.m_spine.setCompleteListener(null);
                  });
                  break;
                case 'Win':
                  _0x386140.ShowWin().then(function () {
                    _0x3c6f54();
                  });
                  break;
                default:
                  _0x3c0bbf.PlayAnimation(_0x386140.m_spine, _0x2ca13a, _0x5a72ae).then(function () {
                    if (!_0x5a72ae) {
                      _0x386140.ShowIdle();
                      _0x386140.m_curAnimName = "Idle";
                    }
                    _0x3c6f54();
                  });
              }
            });
          }
          if (_0x2ca13a === 'Win') {
            _0x341da1.Play(_0x2f795d.AudioClips.Caishen_04, false);
          }
        };
        _0x595e60.ShowIdle = function () {
          this.SetTimeScale(0x1);
          _0x3c0bbf.PlayAnimation(this.m_spine, "Idle", true);
        };
        _0x595e60.ShowWin = function () {
          _0x341da1.Play(_0x2f795d.AudioClips.Caishen_04, false);
          this.SetTimeScale(1.2);
          return _0x3c0bbf.PlayAnimation(this.m_spine, 'Win', true);
        };
        _0x595e60.ShowBigWin = function () {
          var _0x129279 = this;
          this.m_curAnimName = "BigWin_Start";
          return _0x3c0bbf.PlayAnimation(this.m_spine, "BigWin_Start", false).then(function () {
            _0x3c0bbf.PlayAnimation(_0x129279.m_spine, "BigWin_Loop", true);
          });
        };
        _0x595e60.StopBigWin = function () {
          var _0xc98c50 = this;
          this.m_curAnimName = 'BigWin_End';
          return _0x3c0bbf.PlayAnimation(this.m_spine, 'BigWin_End', false).then(function () {
            _0xc98c50.ShowIdle();
            _0xc98c50.m_curAnimName = "Idle";
          });
        };
        _0x595e60.PlayOpen = function () {
          var _0x48ffac = this;
          this.m_curAnimName = "Open_L";
          _0x2f795d.POT_LEVEL = 0x0;
          this.SetSkin(_0x1859c7[_0x2f795d.POT_LEVEL]);
          _0x341da1.Play(_0x2f795d.AudioClips.Caishen_01, false);
          return _0x3c0bbf.PlayAnimation(this.m_spine, "Open_L", false).then(function () {
            _0x48ffac.ShowIdle();
            _0x48ffac.m_curAnimName = "Idle";
          });
        };
        _0x595e60.PlayLevelup = function () {
          var _0x3ed607 = _0x2988f4(_0x57ce7a().mark(function _0x15ddaf(_0x312430) {
            var _0x1a36cf;
            var _0x511ec2;
            var _0x599d19;
            var _0x1d6fca = this;
            return _0x57ce7a().wrap(function (_0x2ffe2d) {
              for (;;) {
                switch (_0x2ffe2d.prev = _0x2ffe2d.next) {
                  case 0x0:
                    if (undefined === _0x312430) {
                      _0x312430 = false;
                    }
                    this.m_curAnimName = "Levelup";
                    _0x1a36cf = false;
                    _0x511ec2 = _0x2f795d.POT_LEVEL;
                    if (Math.random() <= _0x2f795d.POT_LEVELUP_RATE && _0x2f795d.POT_LEVEL < 0x2) {
                      _0x2f795d.POT_LEVEL++;
                      _0x1a36cf = true;
                    }
                    this.SetTimeScale(1.2);
                    _0x599d19 = _0x3c0bbf.PlayAnimation(this.m_spine, "Levelup").then(function () {
                      _0x1d6fca.ShowIdle();
                      _0x1d6fca.m_curAnimName = "Idle";
                    });
                    if (!_0x312430 && !_0x1a36cf) {
                      _0x2ffe2d.next = 0xc;
                      break;
                    }
                    _0x2ffe2d.next = 0xa;
                    return _0x599d19;
                  case 0xa:
                    _0x2ffe2d.next = 0xc;
                    return this.PlayUpgrade(_0x511ec2, _0x312430, _0x1a36cf);
                  case 0xc:
                  case "end":
                    return _0x2ffe2d.stop();
                }
              }
            }, _0x15ddaf, this);
          }));
          return function (_0x8dd27d) {
            return _0x3ed607.apply(this, arguments);
          };
        }();
        _0x595e60.PlayUpgrade = function () {
          var _0x7b138b = _0x2988f4(_0x57ce7a().mark(function _0xcefb6e(_0x15138e, _0x2ab27e, _0x64bed7) {
            return _0x57ce7a().wrap(function (_0x1f3b81) {
              for (;;) {
                switch (_0x1f3b81.prev = _0x1f3b81.next) {
                  case 0x0:
                    if (!_0x2ab27e) {
                      _0x1f3b81.next = 0x11;
                      break;
                    }
                    _0x341da1.Play(_0x2f795d.AudioClips.Caishen_Upgrade);
                    _0x1f3b81.t0 = _0x15138e;
                    _0x1f3b81.next = 0x0 === _0x1f3b81.t0 ? 0x5 : 0x1 === _0x1f3b81.t0 ? 0x8 : 0x2 === _0x1f3b81.t0 ? 0xb : 0xe;
                    break;
                  case 0x5:
                    _0x1f3b81.next = 0x7;
                    return _0x3c0bbf.PlayAnimation(this.m_spine, "L1_to_L4");
                  case 0x7:
                    return _0x1f3b81.abrupt("break", 0xf);
                  case 0x8:
                    _0x1f3b81.next = 0xa;
                    return _0x3c0bbf.PlayAnimation(this.m_spine, "L2_to_L4");
                  case 0xa:
                    return _0x1f3b81.abrupt("break", 0xf);
                  case 0xb:
                    _0x1f3b81.next = 0xd;
                    return _0x3c0bbf.PlayAnimation(this.m_spine, "L3_to_L4");
                  case 0xd:
                  case 0xe:
                    return _0x1f3b81.abrupt("break", 0xf);
                  case 0xf:
                    _0x1f3b81.next = 0x20;
                    break;
                  case 0x11:
                    if (!_0x64bed7) {
                      _0x1f3b81.next = 0x20;
                      break;
                    }
                    _0x341da1.Play(_0x2f795d.AudioClips.Caishen_Upgrade);
                    _0x1f3b81.t1 = _0x2f795d.POT_LEVEL;
                    _0x1f3b81.next = 0x1 === _0x1f3b81.t1 ? 0x16 : 0x2 === _0x1f3b81.t1 ? 0x19 : 0x1c;
                    break;
                  case 0x16:
                    _0x1f3b81.next = 0x18;
                    return _0x3c0bbf.PlayAnimation(this.m_spine, "L1_to_L2");
                  case 0x18:
                    return _0x1f3b81.abrupt("break", 0x1d);
                  case 0x19:
                    _0x1f3b81.next = 0x1b;
                    return _0x3c0bbf.PlayAnimation(this.m_spine, 'L2_to_L3');
                  case 0x1b:
                  case 0x1c:
                    return _0x1f3b81.abrupt("break", 0x1d);
                  case 0x1d:
                    this.SetSkin(_0x1859c7[_0x2f795d.POT_LEVEL]);
                    this.ShowIdle();
                    this.m_curAnimName = "Idle";
                  case 0x20:
                  case "end":
                    return _0x1f3b81.stop();
                }
              }
            }, _0xcefb6e, this);
          }));
          return function (_0x55dec4, _0x15da43, _0x1bd973) {
            return _0x7b138b.apply(this, arguments);
          };
        }();
        _0x595e60.PlayThrow = function (_0x4ab786) {
          var _0x5875e5 = this;
          if (undefined === _0x4ab786) {
            _0x4ab786 = null;
          }
          this.m_curAnimName = "Throw";
          _0x341da1.Play(_0x2f795d.AudioClips.Caishen_Throw, false);
          _0x2f795d.POT_LEVEL = 0x0;
          this.SetTimeScale(1.2);
          return _0x3c0bbf.PlayAnimation(this.m_spine, "Throw", false, 0x0, function (_0x187114) {
            switch (_0x187114) {
              case "Throw":
                _0x4ab786();
                _0x5875e5.SetSkin(_0x1859c7[_0x2f795d.POT_LEVEL]);
            }
          }).then(function () {
            _0x5875e5.ShowIdle();
            _0x5875e5.m_curAnimName = "Idle";
          });
        };
        _0x595e60.PlayThrow_BG = function () {
          var _0x244fd5 = this;
          this.m_curAnimName = "Throw_FG";
          _0x341da1.Play(_0x2f795d.AudioClips.Caishen_Throw, false);
          return new Promise(function (_0x58cc78) {
            _0x244fd5.SetTimeScale(1.2);
            _0x3c0bbf.PlayAnimation(_0x244fd5.m_spine, "Throw_FG", false, 0x0, function (_0x5efb4c) {
              switch (_0x5efb4c) {
                case 'Throw':
                  _0x58cc78();
              }
            }).then(function () {
              _0x244fd5.ShowIdle();
              _0x244fd5.m_curAnimName = "Idle";
            });
          });
        };
        _0x55d7eb(_0x2223a5, [{
          'key': "CollectNode",
          'get': function () {
            return this.m_collectNode;
          }
        }]);
        return _0x2223a5;
      }(_0x4351ba);
      _0x335f42 = _0x4fcd77(_0x2c8696.prototype, "m_spine", [_0x4691b8], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3d7ca7 = _0x4fcd77(_0x2c8696.prototype, 'm_collectNode', [_0x4ad0dd], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x332b6a;
      var _0x41cfbf;
      var _0xfc778f;
      var _0x283575;
      var _0x20da8b;
      var _0x30b913;
      var _0x5b852e;
      var _0x5a73dc;
      var _0x39b807;
      var _0x54a2dd;
      var _0x2ed5f1;
      var _0x5cf9e7;
      var _0x2eebe3;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "2da89xLuy5Lk4LngYavOEHI", "JPBarSpine", undefined);
      var _0x156c01 = _0x4b56bb.ccclass;
      var _0x4c16f0 = _0x4b56bb.property;
      _0x332b6a = _0x156c01('JPBarSpine');
      _0x41cfbf = _0x4c16f0({
        'type': _0x423384.Skeleton,
        'tooltip': "spine"
      });
      _0xfc778f = _0x4c16f0({
        'type': _0x851753,
        'tooltip': "Grand 金額"
      });
      _0x283575 = _0x4c16f0({
        'type': _0x851753,
        'tooltip': "Major 金額"
      });
      _0x20da8b = _0x4c16f0({
        'type': _0x851753,
        'tooltip': "Minor 金額"
      });
      _0x30b913 = _0x4c16f0({
        'type': _0x851753,
        'tooltip': "Mini 金額"
      });
      _0x5a73dc = function (_0x359aa9) {
        function _0x2caff8() {
          var _0x2fdd1c;
          var _0x484dae = arguments.length;
          var _0x5eefa9 = new Array(_0x484dae);
          for (var _0x5a2262 = 0x0; _0x5a2262 < _0x484dae; _0x5a2262++) {
            _0x5eefa9[_0x5a2262] = arguments[_0x5a2262];
          }
          _0x588ec8(_0x2fdd1c = _0x359aa9.call.apply(_0x359aa9, [this].concat(_0x5eefa9)) || this, 'm_spine', _0x39b807, _0x2901b4(_0x2fdd1c));
          _0x588ec8(_0x2fdd1c, 'm_grandLabel', _0x54a2dd, _0x2901b4(_0x2fdd1c));
          _0x588ec8(_0x2fdd1c, 'm_majorLabel', _0x2ed5f1, _0x2901b4(_0x2fdd1c));
          _0x588ec8(_0x2fdd1c, "m_minorLabel", _0x5cf9e7, _0x2901b4(_0x2fdd1c));
          _0x588ec8(_0x2fdd1c, "m_miniLabel", _0x2eebe3, _0x2901b4(_0x2fdd1c));
          return _0x2fdd1c;
        }
        _0x5a9673(_0x2caff8, _0x359aa9);
        var _0x3b1745 = _0x2caff8.prototype;
        _0x3b1745.ClearTrack = function () {
          this.m_spine.clearTrack(0x0);
        };
        _0x3b1745.SetNodeActivity = function (_0x2e0764) {
          this.node.active = _0x2e0764;
        };
        _0x3b1745.SetJpValue = function (_0x22d9ca) {
          this.m_grandLabel.string = _0x2f795d.GetDisplayNumString(_0x164355.times(_0x22d9ca, _0x2f795d.JP_RATE[0x3]), _0x2f795d.JP_BAR_DIGITS);
          this.m_majorLabel.string = _0x2f795d.GetDisplayNumString(_0x164355.times(_0x22d9ca, _0x2f795d.JP_RATE[0x2]), _0x2f795d.JP_BAR_DIGITS);
          this.m_minorLabel.string = _0x2f795d.GetDisplayNumString(_0x164355.times(_0x22d9ca, _0x2f795d.JP_RATE[0x1]), _0x2f795d.JP_BAR_DIGITS);
          this.m_miniLabel.string = _0x2f795d.GetDisplayNumString(_0x164355.times(_0x22d9ca, _0x2f795d.JP_RATE[0x0]), _0x2f795d.JP_BAR_DIGITS);
        };
        _0x3b1745.PlayGrandAward = function () {
          var _0x3607fe = this;
          _0x3c0bbf.PlayAnimation(this.m_spine, "Grand_Start", false).then(function () {
            _0x3c0bbf.PlayAnimation(_0x3607fe.m_spine, "Grand_Loop", true);
          });
        };
        _0x3b1745.StopGrandAward = function () {
          _0x3c0bbf.PlayAnimation(this.m_spine, "Grand_End", false);
        };
        return _0x2caff8;
      }(_0x4351ba);
      _0x39b807 = _0x4fcd77(_0x5a73dc.prototype, 'm_spine', [_0x41cfbf], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x54a2dd = _0x4fcd77(_0x5a73dc.prototype, "m_grandLabel", [_0xfc778f], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2ed5f1 = _0x4fcd77(_0x5a73dc.prototype, "m_majorLabel", [_0x283575], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5cf9e7 = _0x4fcd77(_0x5a73dc.prototype, "m_minorLabel", [_0x20da8b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2eebe3 = _0x4fcd77(_0x5a73dc.prototype, 'm_miniLabel', [_0x30b913], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x2ced45 = _0x332b6a(_0x5b852e = _0x5a73dc) || _0x5b852e;
      var _0x202bdc;
      var _0x414cad;
      var _0x22680a;
      var _0x392895;
      var _0x49865f;
      var _0xdfd4ba;
      var _0x76b943;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "6017d2E5UpNao0gbwEpCS/u", "MainFxSpine", undefined);
      var _0x42b650 = _0x4b56bb.ccclass;
      var _0x4dc3de = _0x4b56bb.property;
      _0x202bdc = _0x42b650("MainFxSpine");
      _0x414cad = _0x4dc3de({
        'type': _0x423384.Skeleton,
        'tooltip': "spine"
      });
      _0x22680a = _0x4dc3de({
        'type': _0x423384.Skeleton,
        'tooltip': "BG nearwin spine"
      });
      _0x49865f = function (_0x17f659) {
        function _0xebd532() {
          var _0x1b3c33;
          var _0x1e41ca = arguments.length;
          var _0xcf6b23 = new Array(_0x1e41ca);
          for (var _0x1d8b9d = 0x0; _0x1d8b9d < _0x1e41ca; _0x1d8b9d++) {
            _0xcf6b23[_0x1d8b9d] = arguments[_0x1d8b9d];
          }
          _0x588ec8(_0x1b3c33 = _0x17f659.call.apply(_0x17f659, [this].concat(_0xcf6b23)) || this, "m_spine", _0xdfd4ba, _0x2901b4(_0x1b3c33));
          _0x588ec8(_0x1b3c33, "m_hintGrandSpine", _0x76b943, _0x2901b4(_0x1b3c33));
          return _0x1b3c33;
        }
        _0x5a9673(_0xebd532, _0x17f659);
        var _0x1872cb = _0xebd532.prototype;
        _0x1872cb.ClearTrack = function () {
          this.m_spine.clearTrack(0x0);
          this.m_hintGrandSpine.clearTrack(0x0);
        };
        _0x1872cb.SetNodeActivity = function (_0x503b37) {
          this.node.active = _0x503b37;
        };
        _0x1872cb.ShowNearWin = function () {
          this.SetNodeActivity(true);
          this.m_spine.node.active = true;
          _0x3c0bbf.PlayAnimation(this.m_spine, "Hint", true);
          this.node.getComponent(_0x371a7a).opacity = 0.1;
          _0x397393(this.node.getComponent(_0x371a7a)).to(0.1, {
            'opacity': 0xff
          }).start();
        };
        _0x1872cb.StopNearWin = function () {
          var _0x2381cd = this;
          _0x397393(this.node.getComponent(_0x371a7a)).to(0.2, {
            'opacity': 0.1
          }).call(function () {
            _0x2381cd.m_spine.clearTrack(0x0);
            _0x2381cd.m_spine.node.active = false;
            _0x2381cd.SetNodeActivity(false);
            _0x2381cd.node.getComponent(_0x371a7a).opacity = 0xff;
          }).start();
        };
        _0x1872cb.ShowBGNearWin = function (_0x5a3023) {
          this.SetNodeActivity(true);
          this.m_hintGrandSpine.node.active = true;
          this.m_hintGrandSpine.node.setWorldPosition(_0x5a3023);
          _0x3c0bbf.PlayAnimation(this.m_hintGrandSpine, "Hint_Grand", true);
          this.m_hintGrandSpine.node.getComponent(_0x371a7a).opacity = 0.1;
          _0x397393(this.m_hintGrandSpine.node.getComponent(_0x371a7a)).to(0.1, {
            'opacity': 0xff
          }).start();
        };
        _0x1872cb.StopBGNearWin = function () {
          var _0x22bbec = this;
          _0x397393(this.m_hintGrandSpine.node.getComponent(_0x371a7a)).to(0.2, {
            'opacity': 0.1
          }).call(function () {
            _0x22bbec.m_hintGrandSpine.clearTrack(0x0);
            _0x22bbec.m_hintGrandSpine.node.active = false;
            _0x22bbec.m_hintGrandSpine.node.getComponent(_0x371a7a).opacity = 0xff;
          }).start();
        };
        _0x1872cb.PlayBGSpinEffect = function () {
          var _0x470d89 = this;
          this.SetNodeActivity(true);
          this.m_spine.node.active = true;
          _0x3c0bbf.PlayAnimation(this.m_spine, "BG_Spin", false).then(function () {
            _0x470d89.m_spine.node.active = false;
          });
        };
        _0x1872cb.ShowCompliment = function (_0x4b46f4) {
          var _0x4ea68a = 'Compliment';
          if (_0x4b46f4) {
            _0x4ea68a = "BG_Grand";
          }
          this.SetNodeActivity(true);
          this.m_spine.node.active = true;
          this.node.getComponent(_0x371a7a).opacity = 0.1;
          _0x397393(this.node.getComponent(_0x371a7a)).to(0.5, {
            'opacity': 0xff
          }).start();
          _0x3c0bbf.PlayAnimation(this.m_spine, _0x4ea68a, true);
        };
        _0x1872cb.StopCompliment = function () {
          var _0x1400c0 = this;
          _0x397393(this.node.getComponent(_0x371a7a)).to(0.5, {
            'opacity': 0.1
          }).call(function () {
            _0x1400c0.m_spine.node.active = false;
            _0x1400c0.SetNodeActivity(false);
            _0x1400c0.node.getComponent(_0x371a7a).opacity = 0xff;
          }).start();
        };
        _0x1872cb.ClearMainFx = function () {
          this.ClearTrack();
          this.m_spine.node.active = false;
          this.m_hintGrandSpine.node.active = false;
          this.SetNodeActivity(false);
        };
        return _0xebd532;
      }(_0x4351ba);
      _0xdfd4ba = _0x4fcd77(_0x49865f.prototype, "m_spine", [_0x414cad], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x76b943 = _0x4fcd77(_0x49865f.prototype, "m_hintGrandSpine", [_0x22680a], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x42485b = _0x202bdc(_0x392895 = _0x49865f) || _0x392895;
      var _0x1b1cae;
      var _0x35e233;
      var _0x257c86;
      var _0x8b6eab;
      var _0x57fb92;
      var _0x1d65f3;
      var _0x589eab;
      var _0x22b4a0;
      var _0x2da085;
      var _0x3ba42b;
      var _0x11e530;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "e3e66XLQgdGzYAFnVEQLfPS", "MultipleSpine", undefined);
      var _0x2fce18 = _0x4b56bb.ccclass;
      var _0x46f3b4 = _0x4b56bb.property;
      _0x1b1cae = _0x2fce18("MultipleSpine");
      _0x35e233 = _0x46f3b4({
        'type': _0x851753,
        'tooltip': "累計金額 HP_NUM1"
      });
      _0x257c86 = _0x46f3b4({
        'type': _0x851753,
        'tooltip': "乘倍停留 HP_NUM3"
      });
      _0x8b6eab = _0x46f3b4({
        'type': _0x851753,
        'tooltip': "乘倍 HP_NUM2"
      });
      _0x57fb92 = _0x46f3b4({
        'type': _0x423384.Skeleton,
        'tooltip': "收集&乘倍特效"
      });
      _0x589eab = function (_0x5035aa) {
        function _0x1025b9() {
          var _0xf9f549;
          var _0x2e582e = arguments.length;
          var _0x8800f8 = new Array(_0x2e582e);
          for (var _0x318cbc = 0x0; _0x318cbc < _0x2e582e; _0x318cbc++) {
            _0x8800f8[_0x318cbc] = arguments[_0x318cbc];
          }
          _0x588ec8(_0xf9f549 = _0x5035aa.call.apply(_0x5035aa, [this].concat(_0x8800f8)) || this, "m_numLabel", _0x22b4a0, _0x2901b4(_0xf9f549));
          _0x588ec8(_0xf9f549, 'm_keepLabel', _0x2da085, _0x2901b4(_0xf9f549));
          _0x588ec8(_0xf9f549, 'm_multLabel', _0x3ba42b, _0x2901b4(_0xf9f549));
          _0x588ec8(_0xf9f549, "m_spine", _0x11e530, _0x2901b4(_0xf9f549));
          return _0xf9f549;
        }
        _0x5a9673(_0x1025b9, _0x5035aa);
        var _0x47f28b = _0x1025b9.prototype;
        _0x47f28b.SetNodeActivity = function (_0x2db79c) {
          this.node.active = _0x2db79c;
        };
        _0x47f28b.ClearEffect = function () {
          this.SetNumLabel(0x0);
          this.SetMultLabel(0x1);
          this.m_numLabel.node.active = false;
          this.m_keepLabel.node.active = false;
          this.m_multLabel.node.active = false;
          this.m_spine.node.active = false;
        };
        _0x47f28b.SetNumLabel = function (_0x14c3be) {
          this.m_numLabel.node.active = true;
          this.m_numLabel.string = _0x2f795d.GetDisplayNumString(_0x14c3be, _0x2f795d.SYMBOL_NUM_DIGITS);
        };
        _0x47f28b.SetNumLabelDark = function (_0x472ee5) {
          this.m_numLabel.color = _0x472ee5 ? _0x4de58f(_0x2f795d.DARK_RGB, _0x2f795d.DARK_RGB, _0x2f795d.DARK_RGB) : _0x4de58f(0xff, 0xff, 0xff);
        };
        _0x47f28b.SetMultLabel = function (_0x1afd1b) {
          this.m_multLabel.string = _0x1afd1b.toString() + 'X';
          this.m_keepLabel.string = _0x1afd1b.toString() + 'X';
        };
        _0x47f28b.HideMultLabel = function () {
          this.m_multLabel.node.active = false;
          this.m_keepLabel.node.active = false;
        };
        _0x47f28b.PlayNumCollecting = function () {
          var _0x15d630 = this;
          this.m_spine.node.active = true;
          return _0x3c0bbf.PlayAnimation(this.m_spine, "Collect", false).then(function () {
            _0x15d630.m_spine.node.active = false;
          });
        };
        _0x47f28b.PlayMultiple = function () {
          var _0x5b6fc8 = _0x2988f4(_0x57ce7a().mark(function _0x9bedea(_0x1f5ed0, _0x51b982, _0x19952d) {
            var _0x371cf0;
            var _0x25de13;
            var _0x265536 = this;
            return _0x57ce7a().wrap(function (_0x29a16f) {
              for (;;) {
                switch (_0x29a16f.prev = _0x29a16f.next) {
                  case 0x0:
                    if (undefined === _0x19952d) {
                      _0x19952d = 0x1;
                    }
                    _0x371cf0 = _0x164355.times(_0x1f5ed0, _0x51b982);
                    this.m_spine.node.active = true;
                    this.m_spine.timeScale = _0x19952d;
                    _0x25de13 = function (_0xe8779a) {
                      switch (_0xe8779a) {
                        case 'Trans1':
                          _0x265536.m_multLabel.node.active = true;
                          _0x265536.SetMultLabel(_0x51b982);
                          break;
                        case "Keep":
                          _0x265536.m_keepLabel.node.active = true;
                          break;
                        case 'Trans2':
                          _0x265536.SetNumLabel(_0x371cf0);
                          _0x265536.m_multLabel.node.active = false;
                          _0x341da1.Play(_0x2f795d.AudioClips.Caishen_Multiple_Use, false);
                      }
                    };
                    return _0x29a16f.abrupt("return", _0x3c0bbf.PlayAnimation(this.m_spine, 'Trans', false, 0x0, _0x25de13).then(function () {
                      _0x265536.m_spine.timeScale = 0x1;
                      _0x265536.m_spine.node.active = false;
                    }));
                  case 0x6:
                  case 'end':
                    return _0x29a16f.stop();
                }
              }
            }, _0x9bedea, this);
          }));
          return function (_0x434a98, _0x583a1c, _0x20687c) {
            return _0x5b6fc8.apply(this, arguments);
          };
        }();
        return _0x1025b9;
      }(_0x4351ba);
      _0x22b4a0 = _0x4fcd77(_0x589eab.prototype, "m_numLabel", [_0x35e233], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2da085 = _0x4fcd77(_0x589eab.prototype, "m_keepLabel", [_0x257c86], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3ba42b = _0x4fcd77(_0x589eab.prototype, "m_multLabel", [_0x8b6eab], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x11e530 = _0x4fcd77(_0x589eab.prototype, "m_spine", [_0x57fb92], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x539179 = _0x1b1cae(_0x1d65f3 = _0x589eab) || _0x1d65f3;
      var _0x559183;
      var _0x58c681;
      var _0x51385b;
      var _0x49cecd;
      var _0x1735c6;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "5228dqnE8FLxJ366U5sKPbR", "SymbolSpine", undefined);
      var _0x1bab17 = _0x4b56bb.ccclass;
      var _0x1f3f71 = _0x4b56bb.property;
      _0x559183 = _0x1bab17("SymbolSpine");
      _0x58c681 = _0x1f3f71({
        'type': _0x423384.Skeleton,
        'tooltip': "spine"
      });
      _0x49cecd = function (_0x12e040) {
        function _0x14d5b6() {
          var _0x88e9d4;
          var _0x4c98f7 = arguments.length;
          var _0x20399f = new Array(_0x4c98f7);
          for (var _0x4b52dc = 0x0; _0x4b52dc < _0x4c98f7; _0x4b52dc++) {
            _0x20399f[_0x4b52dc] = arguments[_0x4b52dc];
          }
          _0x588ec8(_0x88e9d4 = _0x12e040.call.apply(_0x12e040, [this].concat(_0x20399f)) || this, 'm_spine', _0x1735c6, _0x2901b4(_0x88e9d4));
          _0x88e9d4.m_value = 0x0;
          _0x88e9d4.m_symbol = 0x0;
          return _0x88e9d4;
        }
        _0x5a9673(_0x14d5b6, _0x12e040);
        var _0x970e20 = _0x14d5b6.prototype;
        _0x970e20.SetSymbol = function (_0xcbe674) {
          this.m_symbol = _0xcbe674;
        };
        _0x970e20.ClearTrack = function () {
          this.m_spine.clearTrack(0x0);
        };
        _0x970e20.ClearEffect = function () {
          this.SetNodeActivity(false);
          this.m_value = 0x0;
        };
        _0x970e20.SetSkin = function (_0x5f2711, _0x56e106) {
          if (undefined === _0x56e106) {
            _0x56e106 = this.m_spine;
          }
          _0x56e106.setSkin(_0x5f2711);
        };
        _0x970e20.SetTimeScale = function (_0x5ab95e) {
          this.m_spine.timeScale = _0x5ab95e;
        };
        _0x970e20.SetNodeActivity = function (_0x36d9af) {
          this.node.active = _0x36d9af;
        };
        _0x970e20.PlayStop = function () {
          var _0x59e930 = _0x2988f4(_0x57ce7a().mark(function _0x545a17() {
            return _0x57ce7a().wrap(function (_0x24cbba) {
              for (;;) {
                switch (_0x24cbba.prev = _0x24cbba.next) {
                  case 0x0:
                    this.m_spine.timeScale = 0x2;
                    _0x24cbba.next = 0x3;
                    return this.PlayAnimation("Stop", false);
                  case 0x3:
                    this.m_spine.timeScale = 0x1;
                  case 0x4:
                  case "end":
                    return _0x24cbba.stop();
                }
              }
            }, _0x545a17, this);
          }));
          return function () {
            return _0x59e930.apply(this, arguments);
          };
        }();
        _0x970e20.Spawn = function () {
          return this.PlayAnimation("Spawn", false);
        };
        _0x970e20.ShowIdle = function () {
          this.m_spine.node.active = true;
        };
        _0x970e20.ShowAward = function () {
          return this.PlayAnimation('Win', true);
        };
        _0x970e20.PlayAnimation = function (_0x3d309c, _0x2aab71, _0x21f813, _0x2c33c9, _0xac0a11) {
          var _0x4fc746 = this;
          if (undefined === _0x21f813) {
            _0x21f813 = true;
          }
          this.m_spine.node.active = true;
          return _0x3c0bbf.PlayAnimation(this.m_spine, _0x3d309c, _0x2aab71, _0x2c33c9, _0xac0a11).then(function () {
            if (!_0x2aab71 && _0x21f813) {
              _0x4fc746.m_spine.node.active = false;
            }
          });
        };
        _0x970e20.SetSymbolDark = function (_0x5d071c) {
          this.m_spine.color = _0x5d071c ? _0x4de58f(_0x2f795d.DARK_RGB, _0x2f795d.DARK_RGB, _0x2f795d.DARK_RGB) : _0x4de58f(0xff, 0xff, 0xff);
        };
        _0x55d7eb(_0x14d5b6, [{
          'key': "Value",
          'get': function () {
            return this.m_value;
          }
        }, {
          'key': "Symbol",
          'get': function () {
            return this.m_symbol;
          }
        }]);
        return _0x14d5b6;
      }(_0x4351ba);
      _0x1735c6 = _0x4fcd77(_0x49cecd.prototype, "m_spine", [_0x58c681], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x1cb3ed = _0x559183(_0x51385b = _0x49cecd) || _0x51385b;
      var _0x19c71e;
      var _0x41c032;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "b970eEpJPBKfYCKtc0tiPXi", 'SymbolCSSpine', undefined);
      var _0x5d1439 = _0x4b56bb.ccclass;
      _0x19c71e = _0x5d1439("SymbolCSSpine");
      var _0x25eee6 = _0x19c71e(_0x41c032 = function (_0x360430) {
        function _0x484eca() {
          var _0x450628;
          var _0x3d22ea = arguments.length;
          var _0x191a41 = new Array(_0x3d22ea);
          for (var _0x688ae8 = 0x0; _0x688ae8 < _0x3d22ea; _0x688ae8++) {
            _0x191a41[_0x688ae8] = arguments[_0x688ae8];
          }
          (_0x450628 = _0x360430.call.apply(_0x360430, [this].concat(_0x191a41)) || this).m_multSpine = null;
          return _0x450628;
        }
        _0x5a9673(_0x484eca, _0x360430);
        var _0x4ca8c6 = _0x484eca.prototype;
        _0x4ca8c6.start = function () {
          this.m_spine.setMix('Win_Loop', "Win_End", 0.2);
        };
        _0x4ca8c6.SetupMultNum = function (_0x3e222e) {
          if (this.m_multSpine) {
            _0x28ef3f.GetInstance().ReturnCSNum(this.m_multSpine.node);
          }
          var _0x2fe9fc = this.node.getWorldPosition();
          _0x3e222e.setWorldPosition(_0x2fe9fc);
          this.m_multSpine = _0x3e222e.getComponent(_0x539179);
          this.m_multSpine.SetNodeActivity(true);
          this.m_multSpine.ClearEffect();
          this.m_value = 0x0;
        };
        _0x4ca8c6.ClearEffect = function () {
          this.m_multSpine.ClearEffect();
          _0x360430.prototype.ClearEffect.call(this);
        };
        _0x4ca8c6.ShowIdle = function () {
          this.PlayAnimation("Idle", true);
        };
        _0x4ca8c6.ShowAward = function () {
          var _0x3d12be = this;
          return this.PlayAnimation("Win_Start", false, false).then(function () {
            _0x3d12be.PlayAnimation('Win_Loop', true);
          });
        };
        _0x4ca8c6.StopAward = function () {
          var _0x157c81 = this;
          return this.PlayAnimation("Win_End", false).then(function () {
            _0x157c81.ShowIdle();
          });
        };
        _0x4ca8c6.ShowEnterBG = function () {
          var _0x14beaf = this;
          return this.PlayAnimation("Win_Start_02", false, false).then(function () {
            _0x14beaf.PlayAnimation('Win_Loop_02', true);
          });
        };
        _0x4ca8c6.StopEnterBG = function () {
          var _0x13e7fb = this;
          return this.PlayAnimation("Win_End_02", false).then(function () {
            _0x13e7fb.ShowIdle();
          });
        };
        _0x4ca8c6.PlayThrow = function () {
          var _0x5a9230 = this;
          return this.PlayAnimation("Throw", false).then(function () {
            _0x5a9230.ShowIdle();
          });
        };
        _0x4ca8c6.PlayTrans = function () {
          var _0x13f226 = this;
          return this.PlayAnimation("Trans", false).then(function () {
            _0x13f226.ShowIdle();
          });
        };
        _0x4ca8c6.PlayNumCollecting = function (_0x53c5aa) {
          this.SetNumLabel(_0x53c5aa);
          return this.m_multSpine.PlayNumCollecting();
        };
        _0x4ca8c6.PlayMultiple = function (_0x2d065d, _0x53dab4) {
          var _0x44db9d = this;
          if (undefined === _0x53dab4) {
            _0x53dab4 = 0x1;
          }
          var _0x2fa03c = this.m_value;
          this.m_spine.timeScale = _0x53dab4;
          this.PlayTrans().then(function () {
            _0x44db9d.m_spine.timeScale = 0x1;
          });
          return this.m_multSpine.PlayMultiple(_0x2fa03c, _0x2d065d, _0x53dab4);
        };
        _0x4ca8c6.SetNumLabel = function (_0x1ec895) {
          this.m_value = _0x1ec895;
          this.m_multSpine.SetNumLabel(_0x1ec895);
        };
        _0x4ca8c6.HideLabel = function () {
          this.m_multSpine.SetNodeActivity(false);
        };
        _0x4ca8c6.HideMultLabel = function () {
          this.m_multSpine.HideMultLabel();
        };
        _0x4ca8c6.SetSymbolDark = function (_0x18a55c) {
          _0x360430.prototype.SetSymbolDark.call(this, _0x18a55c);
          if (_0x18a55c) {
            this.m_multSpine.SetNumLabelDark(true);
          } else {
            this.m_multSpine.SetNumLabelDark(false);
          }
        };
        return _0x484eca;
      }(_0x1cb3ed)) || _0x41c032;
      var _0x1cf282;
      var _0x3033f1;
      var _0x4a3558;
      var _0x2c3dc4;
      var _0x445cd7;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, '637aerF6gpOt7kUjX3VOomL', "SymbolCoinJPSpine", undefined);
      var _0x5d6a64 = _0x4b56bb.ccclass;
      var _0x1dcdc4 = _0x4b56bb.property;
      _0x1cf282 = _0x5d6a64("SymbolCoinJPSpine");
      _0x3033f1 = _0x1dcdc4({
        'type': _0x851753,
        'tooltip': "HP_NUM1"
      });
      _0x2c3dc4 = function (_0x5e64a4) {
        function _0x10a0a5() {
          var _0x427d7e;
          var _0x4dfb4a = arguments.length;
          var _0x460470 = new Array(_0x4dfb4a);
          for (var _0x274954 = 0x0; _0x274954 < _0x4dfb4a; _0x274954++) {
            _0x460470[_0x274954] = arguments[_0x274954];
          }
          _0x588ec8(_0x427d7e = _0x5e64a4.call.apply(_0x5e64a4, [this].concat(_0x460470)) || this, "m_numLabel", _0x445cd7, _0x2901b4(_0x427d7e));
          return _0x427d7e;
        }
        _0x5a9673(_0x10a0a5, _0x5e64a4);
        var _0x2cd9c7 = _0x10a0a5.prototype;
        _0x2cd9c7.onLoad = function () {
          this.m_numLabel.string = '';
        };
        _0x2cd9c7.ShowIdle = function () {
          var _0x5de4bf = this;
          this.m_spine.setAnimation(0x0, "Idle", false);
          _0x10e896.Wait(this, 0.017).then(function () {
            _0x5de4bf.m_spine.node.active = false;
          });
        };
        _0x2cd9c7.ClearEffect = function () {
          this.m_numLabel.string = '';
          _0x5e64a4.prototype.ClearEffect.call(this);
        };
        _0x2cd9c7.ShowReady = function () {
          this.PlayAnimation("Ready", true);
        };
        _0x2cd9c7.PlayCollect = function () {
          return this.PlayAnimation("Collect", false);
        };
        _0x2cd9c7.PlayShake = function () {
          return this.PlayAnimation("Shake", false);
        };
        _0x2cd9c7.PlayShow = function () {
          return this.PlayAnimation("Show", false);
        };
        _0x2cd9c7.SetNumLabel = function (_0x154253) {
          this.m_value = _0x154253;
          this.m_numLabel.node.active = true;
          this.m_numLabel.string = _0x2f795d.GetDisplayNumString(_0x154253, _0x2f795d.SYMBOL_NUM_DIGITS);
        };
        _0x2cd9c7.HideNumLabel = function () {
          this.m_numLabel.node.active = false;
        };
        _0x2cd9c7.SetSymbolDark = function (_0x340100) {
          _0x5e64a4.prototype.SetSymbolDark.call(this, _0x340100);
          this.m_numLabel.color = _0x340100 ? _0x4de58f(_0x2f795d.DARK_RGB, _0x2f795d.DARK_RGB, _0x2f795d.DARK_RGB) : _0x4de58f(0xff, 0xff, 0xff);
        };
        return _0x10a0a5;
      }(_0x1cb3ed);
      _0x445cd7 = _0x4fcd77(_0x2c3dc4.prototype, 'm_numLabel', [_0x3033f1], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x5029aa = _0x1cf282(_0x4a3558 = _0x2c3dc4) || _0x4a3558;
      var _0x2cae77;
      var _0xe91a6;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "8a693BYnAZO/69Jpk+ahKTT", "SymbolMysterySpine", undefined);
      var _0x44ae65 = _0x4b56bb.ccclass;
      _0x2cae77 = _0x44ae65("SymbolMysterySpine");
      var _0x2eb400 = _0x2cae77(_0xe91a6 = function (_0x471681) {
        function _0x588fc7() {
          return _0x471681.apply(this, arguments) || this;
        }
        _0x5a9673(_0x588fc7, _0x471681);
        var _0x580cbb = _0x588fc7.prototype;
        _0x580cbb.onLoad = function () {};
        _0x580cbb.ShowAward = function () {
          return Promise.resolve();
        };
        _0x580cbb.PlayKnockDoor = function () {
          return this.PlayAnimation('Win', false, false);
        };
        _0x580cbb.PlaySpinLoop = function () {
          this.PlayAnimation("Loop", true);
        };
        _0x580cbb.StopSpinLoop = function () {
          return this.PlayAnimation("End", false);
        };
        return _0x588fc7;
      }(_0x1cb3ed)) || _0xe91a6;
      var _0x188cba;
      var _0x394228;
      var _0x37b003;
      var _0x5e0ad8;
      var _0x39836a;
      var _0x19ec32;
      var _0x45fc47;
      var _0x30fca4;
      var _0x4d532c;
      var _0x3527bc;
      var _0x1a90e6;
      var _0x577f57;
      var _0x19155e;
      var _0x5aa09e;
      var _0x16f765;
      var _0x1d1f53;
      var _0x465e90;
      var _0x2a3710;
      var _0x4f73d6;
      var _0x14c0f4;
      var _0x1d7331;
      var _0x1605b6;
      var _0x300f5a;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, '56fa8F1z51BeZcynekO36CX', "EffectPlate", undefined);
      var _0x2b8b6d = _0x4b56bb.property;
      _0x188cba = _0x2b8b6d({
        'type': _0x2a6ea6,
        'tooltip': "symbol動態Prefabs (金銀銅元寶共用，JP獎共用)"
      });
      _0x394228 = _0x2b8b6d({
        'type': _0x25cea2,
        'tooltip': "Symbol表演的父節點"
      });
      _0x37b003 = _0x2b8b6d({
        'type': _0x2a6ea6,
        'tooltip': "丟聚寶盆飛行表演 Prefab"
      });
      _0x5e0ad8 = _0x2b8b6d({
        'type': _0x25cea2,
        'tooltip': "Collect_fly 父節點"
      });
      _0x39836a = _0x2b8b6d({
        'type': _0x2a6ea6,
        'tooltip': "收集數字飛行表演 Prefab"
      });
      _0x19ec32 = _0x2b8b6d({
        'type': _0x2a6ea6,
        'tooltip': "財神含乘倍數字 Prefab"
      });
      _0x45fc47 = _0x2b8b6d({
        'type': _0x25cea2,
        'tooltip': "數字飛行父節點"
      });
      _0x30fca4 = _0x2b8b6d({
        'type': _0x42485b,
        'tooltip': "MainFX 盤面特效"
      });
      _0x4d532c = _0x2b8b6d({
        'type': _0x2ced45,
        'tooltip': "JP Bar"
      });
      _0x3527bc = _0x2b8b6d({
        'type': _0x25cea2,
        'tooltip': '線獎提示編號'
      });
      _0x1a90e6 = _0x2b8b6d({
        'type': _0x25cea2,
        'tooltip': "線獎提示線"
      });
      _0x577f57 = function (_0xca56b2) {
        function _0x3e57ac() {
          var _0x5764bd;
          var _0x1d7c98 = arguments.length;
          var _0x45e757 = new Array(_0x1d7c98);
          for (var _0xbc729d = 0x0; _0xbc729d < _0x1d7c98; _0xbc729d++) {
            _0x45e757[_0xbc729d] = arguments[_0xbc729d];
          }
          _0x588ec8(_0x5764bd = _0xca56b2.call.apply(_0xca56b2, [this].concat(_0x45e757)) || this, 'm_symbolEffectPrefabs', _0x19155e, _0x2901b4(_0x5764bd));
          _0x588ec8(_0x5764bd, "m_symbolEffectNode", _0x5aa09e, _0x2901b4(_0x5764bd));
          _0x588ec8(_0x5764bd, "m_collectFlyPrefab", _0x16f765, _0x2901b4(_0x5764bd));
          _0x588ec8(_0x5764bd, "m_collectFlyNode", _0x1d1f53, _0x2901b4(_0x5764bd));
          _0x588ec8(_0x5764bd, "m_numFlyPrefab", _0x465e90, _0x2901b4(_0x5764bd));
          _0x588ec8(_0x5764bd, 'm_multNumFlyPrefab', _0x2a3710, _0x2901b4(_0x5764bd));
          _0x588ec8(_0x5764bd, "m_numFlyNode", _0x4f73d6, _0x2901b4(_0x5764bd));
          _0x588ec8(_0x5764bd, "m_mainFxSpine", _0x14c0f4, _0x2901b4(_0x5764bd));
          _0x588ec8(_0x5764bd, 'm_jpBarSpine', _0x1d7331, _0x2901b4(_0x5764bd));
          _0x588ec8(_0x5764bd, "m_awardLineNumNodes", _0x1605b6, _0x2901b4(_0x5764bd));
          _0x588ec8(_0x5764bd, "m_awardLineNodes", _0x300f5a, _0x2901b4(_0x5764bd));
          _0x5764bd.m_symbolEffectNodes = new Array();
          _0x5764bd.m_mysterySpinNodeQue = new Array();
          _0x5764bd.m_coinFlyNodes = new Array();
          _0x5764bd.m_numFlyNodes = new Array();
          _0x5764bd.m_gameView = null;
          _0x5764bd.m_isStop = new Array();
          _0x5764bd.m_isThrown = false;
          return _0x5764bd;
        }
        _0x5a9673(_0x3e57ac, _0xca56b2);
        var _0x4604ce = _0x3e57ac.prototype;
        _0x4604ce.onLoad = function () {
          for (var _0x3a3cf5 = 0x0; _0x3a3cf5 < _0x2f795d.COL; _0x3a3cf5++) {
            var _0x434a68 = new Array();
            _0x434a68.length = _0x2f795d.ROW;
            this.m_symbolEffectNodes.push(_0x434a68);
            this.m_isStop.push([false, false, false]);
          }
          for (var _0xf0dc10 = 0x0; _0xf0dc10 < _0x2f795d.COL; _0xf0dc10++) {
            var _0x486866 = new Array();
            _0x486866.length = _0x2f795d.ROW;
            this.m_numFlyNodes.push(_0x486866);
          }
          this.m_coinFlyNodes.length = _0x2f795d.COL * _0x2f795d.ROW;
        };
        _0x4604ce.Init = function (_0x4d0ffd) {
          this.m_gameView = _0x4d0ffd;
          _0x28ef3f.GetInstance().SetSymbolPrefabs(this.m_symbolEffectPrefabs);
          _0x28ef3f.GetInstance().SetCSNumPrefab(this.m_multNumFlyPrefab);
          _0x28ef3f.GetInstance().SetNumFlyObjPrefab(this.m_numFlyPrefab);
          _0x28ef3f.GetInstance().SetCoinFlyObjPrefab(this.m_collectFlyPrefab);
        };
        _0x4604ce.HideSymbolEffect = function () {
          for (var _0xa3e497 = 0x0; _0xa3e497 < _0x2f795d.COL; _0xa3e497++) {
            for (var _0x57fe16 = 0x0; _0x57fe16 < _0x2f795d.ROW; _0x57fe16++) {
              var _0x3c3ed6 = this.m_symbolEffectNodes[_0xa3e497][_0x57fe16];
              if (_0x3c3ed6) {
                _0x3c3ed6.active = false;
              }
            }
          }
        };
        _0x4604ce.ClearAllEffect = function () {
          this.m_gameView.SlotReels.SetAllSymbolsDark(false);
          this.SetSymbolEffectDark([], false);
          for (var _0x45bea2 = 0x0; _0x45bea2 < _0x2f795d.COL; _0x45bea2++) {
            for (var _0x378245 = 0x0; _0x378245 < _0x2f795d.ROW; _0x378245++) {
              var _0x3b73b8 = this.m_symbolEffectNodes[_0x45bea2][_0x378245];
              if (_0x3b73b8) {
                _0x3b73b8.getComponent(_0x1cb3ed).ClearEffect();
                _0x28ef3f.GetInstance().ReturnSymbol(_0x3b73b8);
                this.m_symbolEffectNodes[_0x45bea2][_0x378245] = null;
              }
              this.m_isStop[_0x45bea2][_0x378245] = false;
            }
          }
          this.m_awardLineNodes.forEach(function (_0x1dfe98) {
            _0x1dfe98.active = false;
          });
          this.m_mainFxSpine.ClearMainFx();
          this.m_isThrown = false;
        };
        _0x4604ce.CreateSymbolEffectNode_NodePool = function (_0x3eee3f, _0x55bffe, _0x23b356, _0x2da72c) {
          if (undefined === _0x2da72c) {
            _0x2da72c = _0x318e19(0x1, 0x1, 0x1);
          }
          var _0x598124 = this.m_symbolEffectNodes[_0x3eee3f][_0x55bffe];
          if (_0x598124) {
            return _0x598124;
          }
          var _0x2b62a6 = this.m_gameView.SlotReels.GetSingleSlotReelXY(_0x3eee3f, _0x55bffe);
          var _0x4fa207 = _0x2b62a6.x;
          var _0x3b380f = _0x2b62a6.y;
          var _0x4517d4 = _0x28ef3f.GetInstance().GetSymbol(_0x23b356);
          this.m_symbolEffectNode.addChild(_0x4517d4);
          _0x4517d4.setScale(_0x2da72c);
          _0x4517d4.setPosition(_0x4fa207, _0x3b380f);
          _0x4517d4.active = true;
          _0x164355.SetOrderedZindex(_0x4517d4, _0x3eee3f * _0x2f795d.ROW + _0x55bffe);
          this.m_symbolEffectNodes[_0x3eee3f][_0x55bffe] = _0x4517d4;
          var _0x50d28e = _0x4517d4.getComponent(_0x1cb3ed);
          _0x50d28e.SetSymbol(_0x23b356);
          if (_0x23b356 >= _0x2f795d.ReelSymbol.BRONZE && _0x23b356 <= _0x2f795d.ReelSymbol.GOLD) {
            _0x50d28e.SetSkin(_0x2f795d.SYMBOL_COIN_JP_SKIN[_0x23b356]);
          }
          if (_0x23b356 >= _0x2f795d.ReelSymbol.MINI && _0x23b356 <= _0x2f795d.ReelSymbol.MAJOR) {
            _0x50d28e.SetSkin(_0x2f795d.SYMBOL_COIN_JP_SKIN[_0x23b356 - _0x2f795d.ReelSymbol.GOLD]);
          }
          if (_0x23b356 === _0x2f795d.ReelSymbol.CAISHEN) {
            var _0x2d9864 = _0x4517d4.getComponent(_0x25eee6);
            var _0x5d1088 = _0x28ef3f.GetInstance().GetCSNum();
            this.m_numFlyNode.addChild(_0x5d1088);
            _0x164355.SetOrderedZindex(_0x5d1088, _0x3eee3f * _0x2f795d.ROW + _0x55bffe);
            _0x2d9864.SetupMultNum(_0x5d1088);
          }
          return _0x4517d4;
        };
        _0x4604ce.CreateNumFlyNode_NodePool = function (_0x2cb0ed, _0x4973ca, _0x580948) {
          var _0x3b5d92 = this.m_numFlyNodes[_0x2cb0ed][_0x4973ca];
          var _0x1185e1 = this.m_gameView.SlotReels.GetCoinLabelWorldXY(_0x2cb0ed, _0x4973ca);
          if (_0x3b5d92) {
            _0x3b5d92.setWorldPosition(_0x1185e1);
            return _0x3b5d92;
          }
          var _0x24f92f = _0x28ef3f.GetInstance().GetNumFlyObj();
          this.m_numFlyNode.addChild(_0x24f92f);
          _0x24f92f.name = (_0x2cb0ed * _0x2f795d.ROW + _0x4973ca).toString();
          _0x24f92f.setWorldPosition(_0x1185e1);
          _0x164355.SetOrderedZindex(_0x24f92f, _0x2cb0ed * _0x2f795d.ROW + _0x4973ca + 0xa);
          _0x24f92f.getChildByName("HP_NUM1").getComponent(_0x851753).string = _0x2f795d.GetDisplayNumString(_0x580948, _0x2f795d.SYMBOL_NUM_DIGITS);
          _0x24f92f.active = true;
          this.m_numFlyNodes[_0x2cb0ed][_0x4973ca] = _0x24f92f;
          return _0x24f92f;
        };
        _0x4604ce.CreateCoinFlyNode_NodePool = function (_0x4aa213) {
          var _0x3bbd3b = this.m_coinFlyNodes[_0x4aa213];
          var _0x1e8d04 = this.m_gameView.SlotReels.GetSingleSlotReelWorldXYByPos(_0x4aa213);
          if (_0x3bbd3b) {
            _0x3bbd3b.setWorldPosition(_0x1e8d04);
            return _0x3bbd3b;
          }
          var _0x4cea2c = _0x28ef3f.GetInstance().GetCoinFlyObj();
          this.m_collectFlyNode.addChild(_0x4cea2c);
          _0x4cea2c.name = _0x4aa213.toString();
          _0x4cea2c.setWorldPosition(_0x1e8d04);
          var _0x45ce22 = Math.floor(_0x4aa213 / _0x2f795d.ROW);
          var _0x528943 = _0x4aa213 % _0x2f795d.ROW;
          _0x164355.SetOrderedZindex(_0x4cea2c, _0x45ce22 * _0x2f795d.ROW + _0x528943);
          _0x4cea2c.active = true;
          this.m_coinFlyNodes[_0x4aa213] = _0x4cea2c;
          return _0x4cea2c;
        };
        _0x4604ce.RecoverPlate = function (_0x242ce2, _0x3fe1d8) {
          for (var _0x20afb9 = 0x0; _0x20afb9 < _0x2f795d.COL; _0x20afb9++) {
            for (var _0x377a76 = 0x0; _0x377a76 < _0x2f795d.ROW; _0x377a76++) {
              var _0x47d52a = _0x242ce2[_0x20afb9][_0x377a76];
              if (_0x47d52a) {
                var _0x302e29 = this.CreateSymbolEffectNode_NodePool(_0x20afb9, _0x377a76, _0x47d52a);
                _0x302e29.getComponent(_0x1cb3ed).ShowIdle();
                if (_0x47d52a <= _0x2f795d.ReelSymbol.GOLD) {
                  this.SetSymbolNumLabel(_0x20afb9, _0x377a76, this.m_gameView.GetCoinNumber(_0x20afb9, _0x377a76));
                } else {
                  if (_0x47d52a === _0x2f795d.ReelSymbol.CAISHEN) {
                    var _0x45e65a = _0x302e29.getComponent(_0x25eee6);
                    var _0x4263ce = 0x0;
                    for (var _0x5bb45a = 0x0; _0x5bb45a < _0x3fe1d8.length; _0x5bb45a++) {
                      var _0x4c0d95 = _0x3fe1d8[_0x5bb45a];
                      if (_0x4c0d95.Pos === _0x20afb9 * _0x2f795d.ROW + _0x377a76) {
                        _0x4263ce = _0x4c0d95.Extra;
                        break;
                      }
                    }
                    var _0x3d6c0d = this.m_gameView.GetCoinNumber(_0x20afb9, _0x377a76);
                    if (_0x4263ce) {
                      _0x3d6c0d = _0x164355.divide(_0x3d6c0d, _0x4263ce);
                      _0x45e65a.SetNumLabel(_0x3d6c0d);
                      _0x45e65a.PlayMultiple(_0x4263ce, 0xa);
                    } else if (_0x3d6c0d) {
                      _0x45e65a.PlayNumCollecting(_0x3d6c0d);
                    }
                  }
                }
                this.m_isStop[_0x20afb9][_0x377a76] = true;
              }
            }
          }
        };
        _0x4604ce.ShowSymbolReelStop = function (_0x54b6da, _0xf7820c, _0x3ec916) {
          var _0x1abf6b = this;
          var _0x4a8f8e = this.CreateSymbolEffectNode_NodePool(_0x54b6da, _0xf7820c, _0x3ec916);
          this.m_gameView.SlotReels.HideSymbol(_0x54b6da, _0xf7820c);
          if (_0x3ec916 != _0x2f795d.ReelSymbol.CAISHEN || this.m_isThrown || _0x2f795d.IsInBG) {
            _0x4a8f8e.getComponent(_0x1cb3ed).PlayStop().then(function () {
              _0x1abf6b.m_isStop[_0x54b6da][_0xf7820c] = true;
              if (_0x3ec916 == _0x2f795d.ReelSymbol.CAISHEN) {
                _0x4a8f8e.getComponent(_0x1cb3ed).ShowIdle();
              } else {
                _0x1abf6b.m_gameView.SlotReels.ShowSymbolWithoutNum(_0x54b6da, _0xf7820c);
              }
            });
          } else {
            this.m_isThrown = true;
            this.ShowCoinFlyToPot(_0x54b6da * _0x2f795d.ROW + _0xf7820c).then(function () {
              _0x1abf6b.m_gameView.GetCharacterSpine().PlayLevelup(_0x2f795d.ThrowBack).then(function () {
                _0x1abf6b.m_isStop[_0x54b6da][_0xf7820c] = true;
              });
            });
          }
          if ((_0x3ec916 >= _0x2f795d.ReelSymbol.MINI && _0x3ec916 <= _0x2f795d.ReelSymbol.MAJOR || _0x3ec916 === _0x2f795d.ReelSymbol.JP_MYSTERY) && !this.m_isThrown) {
            _0x341da1.Play(_0x2f795d.AudioClips.Mestery_Show, false);
            this.m_gameView.GetCharacterSpine().PlayAnimation("Mystery");
          }
          if (_0x3ec916 === _0x2f795d.ReelSymbol.CAISHEN) {
            var _0x57e2bb = function (_0x36e4a0) {
              var _0xf646b3 = function (_0x4b388c) {
                if (_0x1abf6b.m_symbolEffectNodes[_0x36e4a0][_0x4b388c]) {
                  var _0x4814c8 = _0x1abf6b.m_symbolEffectNodes[_0x36e4a0][_0x4b388c].getComponent(_0x5029aa);
                  if (_0x4814c8) {
                    _0x1abf6b.m_gameView.SlotReels.HideSymbol(_0x36e4a0, _0x4b388c);
                    _0x4814c8.SetTimeScale(0x1);
                    _0x4814c8.PlayShake().then(function () {
                      _0x1abf6b.m_isStop[_0x36e4a0][_0x4b388c] = true;
                      _0x1abf6b.m_gameView.SlotReels.ShowSymbolWithoutNum(_0x36e4a0, _0x4b388c);
                    });
                  }
                }
              };
              for (var _0x2ced05 = 0x0; _0x2ced05 < _0x2f795d.ROW; _0x2ced05++) {
                _0xf646b3(_0x2ced05);
              }
            };
            for (var _0x40b849 = 0x0; _0x40b849 < _0x2f795d.COL; _0x40b849++) {
              _0x57e2bb(_0x40b849);
            }
          }
        };
        _0x4604ce.IsPlateStop = function (_0xa1c061) {
          if (undefined === _0xa1c061) {
            _0xa1c061 = -0x1;
          }
          if (_0xa1c061 >= 0x0) {
            var _0xd2d888 = Math.floor(_0xa1c061 / _0x2f795d.ROW);
            var _0x35b791 = _0xa1c061 % _0x2f795d.ROW;
            return this.m_isStop[_0xd2d888][_0x35b791];
          }
          var _0x2c5f48 = true;
          for (var _0x4cdb53 = 0x0; _0x4cdb53 < _0x2f795d.COL; _0x4cdb53++) {
            for (var _0x36dfe5 = 0x0; _0x36dfe5 < _0x2f795d.ROW; _0x36dfe5++) {
              if (this.m_symbolEffectNodes[_0x4cdb53][_0x36dfe5] && !this.m_isStop[_0x4cdb53][_0x36dfe5]) {
                return _0x2c5f48 = false;
              }
            }
          }
          return _0x2c5f48;
        };
        _0x4604ce.ShowEnterBG = function () {
          var _0x2eb35e = _0x2988f4(_0x57ce7a().mark(function _0xf0dd22() {
            var _0x451413;
            return _0x57ce7a().wrap(function (_0x341541) {
              for (;;) {
                switch (_0x341541.prev = _0x341541.next) {
                  case 0x0:
                    _0x451413 = this.m_symbolEffectNodes[_0x2f795d.CS_COL][_0x2f795d.CS_ROW];
                    _0x341da1.Play(_0x2f795d.AudioClips.Caishen_Symbol_Bell);
                    if (!_0x451413) {
                      _0x341541.next = 0x6;
                      break;
                    }
                    _0x164355.SetOrderedZindex(_0x451413, _0x2f795d.COL * _0x2f795d.ROW);
                    _0x341541.next = 0x6;
                    return _0x451413.getComponent(_0x25eee6).ShowEnterBG();
                  case 0x6:
                  case 'end':
                    return _0x341541.stop();
                }
              }
            }, _0xf0dd22, this);
          }));
          return function () {
            return _0x2eb35e.apply(this, arguments);
          };
        }();
        _0x4604ce.StopEnterBG = function () {
          var _0xa3537e = this.m_symbolEffectNodes[_0x2f795d.CS_COL][_0x2f795d.CS_ROW];
          if (_0xa3537e) {
            _0xa3537e.getComponent(_0x25eee6).StopEnterBG();
          }
        };
        _0x4604ce.SetSymbolNumLabel = function (_0x427198, _0x56f9ce, _0x5329f1) {
          var _0x47a243 = this.m_symbolEffectNodes[_0x427198][_0x56f9ce].getComponent(_0x5029aa);
          if (_0x47a243 && _0x5329f1 > 0x0) {
            _0x47a243.SetNumLabel(_0x5329f1);
          }
        };
        _0x4604ce.SetSymbolEffectDark = function (_0x3e9fab, _0x4f0753) {
          for (var _0x19e80b = 0x0; _0x19e80b < _0x2f795d.ROW; _0x19e80b++) {
            for (var _0x4bee0b = 0x0; _0x4bee0b < _0x2f795d.COL; _0x4bee0b++) {
              var _0x3e6c9c = _0x4bee0b * _0x2f795d.ROW + _0x19e80b;
              var _0x291d79 = this.m_symbolEffectNodes[_0x4bee0b][_0x19e80b];
              if (_0x3e9fab.includes(_0x3e6c9c)) {
                if (_0x291d79) {
                  _0x291d79.getComponent(_0x1cb3ed).SetSymbolDark(!_0x4f0753);
                }
              } else if (_0x291d79) {
                _0x291d79.getComponent(_0x1cb3ed).SetSymbolDark(_0x4f0753);
              }
            }
          }
        };
        _0x4604ce.ShowSymbolReady = function () {
          var _0x407afe = _0x2988f4(_0x57ce7a().mark(function _0x1e7044() {
            var _0x595d8a;
            var _0x3aceba;
            var _0x5a12cf;
            var _0x17fe86;
            return _0x57ce7a().wrap(function (_0x430792) {
              for (;;) {
                switch (_0x430792.prev = _0x430792.next) {
                  case 0x0:
                    for (_0x595d8a = 0x0; _0x595d8a < _0x2f795d.COL; _0x595d8a++) {
                      for (_0x3aceba = 0x0; _0x3aceba < _0x2f795d.ROW; _0x3aceba++) {
                        if (this.m_symbolEffectNodes[_0x595d8a][_0x3aceba]) {
                          this.m_gameView.SlotReels.HideSymbol(_0x595d8a, _0x3aceba);
                          if (_0x5a12cf = this.m_symbolEffectNodes[_0x595d8a][_0x3aceba].getComponent(_0x5029aa)) {
                            _0x5a12cf.ShowReady();
                          }
                          if (_0x17fe86 = this.m_symbolEffectNodes[_0x595d8a][_0x3aceba].getComponent(_0x25eee6)) {
                            _0x17fe86.HideMultLabel();
                            _0x17fe86.ShowAward();
                          }
                        }
                      }
                    }
                    _0x430792.next = 0x3;
                    return _0x10e896.Wait(this, 1.5);
                  case 0x3:
                  case "end":
                    return _0x430792.stop();
                }
              }
            }, _0x1e7044, this);
          }));
          return function () {
            return _0x407afe.apply(this, arguments);
          };
        }();
        _0x4604ce.ShowSymbolAward = function (_0x3c873d) {
          var _0x38cdb2 = [];
          if (_0x2f795d.IsGrand) {
            for (var _0x5b0592 = 0x0; _0x5b0592 < _0x2f795d.COL; _0x5b0592++) {
              for (var _0x34b8dd = 0x0; _0x34b8dd < _0x2f795d.ROW; _0x34b8dd++) {
                var _0x213734 = this.m_symbolEffectNodes[_0x5b0592][_0x34b8dd].getComponent(_0x1cb3ed);
                if (_0x213734.Symbol !== _0x2f795d.ReelSymbol.MYSTERY && _0x213734.Symbol !== _0x2f795d.ReelSymbol.JP_MYSTERY) {
                  this.m_gameView.SlotReels.HideSymbol(_0x5b0592, _0x34b8dd);
                }
                _0x38cdb2.push(_0x213734.ShowAward());
              }
            }
          } else {
            if (_0x2f795d.IsInBG) {
              for (var _0x3198a1 = 0x0; _0x3198a1 < _0x3c873d.length; _0x3198a1++) {
                var _0x75262a = _0x3c873d[_0x3198a1].Pos;
                var _0x508b9d = Math.floor(_0x75262a / _0x2f795d.ROW);
                var _0x220d9f = _0x75262a % _0x2f795d.ROW;
                this.m_gameView.SlotReels.HideSymbol(_0x508b9d, _0x220d9f);
                _0x38cdb2.push(this.m_symbolEffectNodes[_0x508b9d][_0x220d9f].getComponent(_0x1cb3ed).ShowAward());
              }
            } else {
              var _0x17d5b8 = [];
              for (var _0x56a2b6 = 0x0; _0x56a2b6 < _0x3c873d.length; _0x56a2b6++) {
                var _0x1f593a = _0x3c873d[_0x56a2b6].Index;
                this.m_awardLineNodes[_0x1f593a].active = true;
                for (var _0x61884a = 0x0; _0x61884a < _0x2f795d.COL; _0x61884a++) {
                  _0x17d5b8.push(_0x61884a * _0x2f795d.ROW + _0x1f593a);
                  this.m_gameView.SlotReels.HideSymbol(_0x61884a, _0x1f593a);
                  _0x38cdb2.push(this.m_symbolEffectNodes[_0x61884a][_0x1f593a].getComponent(_0x1cb3ed).ShowAward());
                }
              }
              this.m_gameView.SlotReels.SetAllSymbolsDark(true);
              this.SetSymbolEffectDark(_0x17d5b8, true);
            }
          }
          return Promise.all(_0x38cdb2);
        };
        _0x4604ce.ShowJPNumber = function (_0x48657d) {
          var _0x62dc1e = [];
          for (var _0x22a5cb = 0x0; _0x22a5cb < _0x48657d.length; _0x22a5cb++) {
            if (_0x2f795d.IsInBG) {
              var _0x141996 = _0x48657d[_0x22a5cb].Pos;
              var _0xfdb6dd = Math.floor(_0x141996 / _0x2f795d.ROW);
              var _0x3c0ad4 = _0x141996 % _0x2f795d.ROW;
              if (this.m_symbolEffectNodes[_0xfdb6dd][_0x3c0ad4]) {
                var _0x3d8526 = this.m_symbolEffectNodes[_0xfdb6dd][_0x3c0ad4].getComponent(_0x5029aa);
                if (_0x3d8526 && _0x3d8526.Symbol >= _0x2f795d.ReelSymbol.MINI && _0x3d8526.Symbol <= _0x2f795d.ReelSymbol.MAJOR) {
                  var _0x46553e = this.m_gameView.GetCoinNumber(_0xfdb6dd, _0x3c0ad4, true);
                  _0x3d8526.SetNumLabel(_0x46553e);
                  _0x62dc1e.push(_0x3d8526.PlayShow());
                }
              }
            } else {
              var _0x175656 = _0x48657d[_0x22a5cb].Index;
              for (var _0x5de0c4 = 0x0; _0x5de0c4 < _0x2f795d.COL; _0x5de0c4++) {
                if (this.m_symbolEffectNodes[_0x5de0c4][_0x175656]) {
                  var _0x139159 = this.m_symbolEffectNodes[_0x5de0c4][_0x175656].getComponent(_0x5029aa);
                  if (_0x139159 && _0x139159.Symbol >= _0x2f795d.ReelSymbol.MINI && _0x139159.Symbol <= _0x2f795d.ReelSymbol.MAJOR) {
                    var _0x3acb77 = this.m_gameView.GetCoinNumber(_0x5de0c4, _0x175656, true);
                    _0x139159.SetNumLabel(_0x3acb77);
                    _0x62dc1e.push(_0x139159.PlayShow());
                  }
                }
              }
            }
          }
          _0x341da1.Play(_0x2f795d.AudioClips.Symbol_Spawn);
          return Promise.all(_0x62dc1e);
        };
        _0x4604ce.PlaySymbolSpawn = function (_0x2d1bac, _0x1f8b3a, _0x43303e) {
          var _0xa39325 = this;
          var _0x47635 = Math.floor(_0x2d1bac / _0x2f795d.ROW);
          var _0x9e3ab0 = _0x2d1bac % _0x2f795d.ROW;
          var _0x41376a = this.CreateSymbolEffectNode_NodePool(_0x47635, _0x9e3ab0, _0x1f8b3a);
          if (_0x1f8b3a <= _0x2f795d.ReelSymbol.GOLD) {
            this.SetSymbolNumLabel(_0x47635, _0x9e3ab0, _0x43303e);
          }
          this.m_gameView.SlotReels.HideSymbol(_0x47635, _0x9e3ab0);
          _0x164355.SetOrderedZindex(_0x41376a, _0x47635 * _0x2f795d.ROW + _0x9e3ab0 + 0xa);
          return _0x41376a.getComponent(_0x1cb3ed).Spawn().then(function () {
            _0xa39325.m_isStop[_0x47635][_0x9e3ab0] = true;
            _0x164355.SetOrderedZindex(_0x41376a, _0x47635 * _0x2f795d.ROW + _0x9e3ab0);
            if (_0x1f8b3a === _0x2f795d.ReelSymbol.CAISHEN) {
              _0x41376a.getComponent(_0x25eee6).ShowIdle();
            } else {
              _0xa39325.m_gameView.SlotReels.ShowSymbolWithoutNum(_0x47635, _0x9e3ab0);
            }
          });
        };
        _0x4604ce.GetMiddleBezPos = function (_0xc29e44, _0x5324a7) {
          var _0x13616b = _0xc29e44.clone().add(_0x5324a7).divide(_0x318e19(0x2, 0x2, 0x2));
          var _0x4e3ad9 = _0x164355.divide(_0x5324a7.clone().subtract(_0xc29e44).length(), 0x2);
          return new _0x29b9bb(_0x13616b.x, _0x13616b.y + _0x4e3ad9, _0x13616b.z);
        };
        _0x4604ce.GetDistance = function (_0x2c5c4d, _0x54c1de) {
          return _0x54c1de.clone().subtract(_0x2c5c4d).length() / 0x2;
        };
        _0x4604ce.GetBezierPos = function (_0x4f6072, _0x23b0e2) {
          if (_0x4f6072.x > _0x23b0e2.x) {
            var _0x514227 = _0x4f6072;
            _0x4f6072 = _0x23b0e2;
            _0x23b0e2 = _0x514227;
          }
          var _0x4c1483 = _0x4f6072.x;
          var _0x57924b = _0x4f6072.y;
          var _0x58daf0 = _0x23b0e2.x;
          var _0x296e30 = _0x23b0e2.y;
          var _0x4e1e6f = _0x318e19((_0x4c1483 + _0x57924b + _0x58daf0 - _0x296e30) / 0x2, (_0x57924b + _0x58daf0 + _0x296e30 - _0x4c1483) / 0x2);
          var _0x5340d7 = _0x4e1e6f.x;
          var _0x239196 = _0x4e1e6f.y;
          var _0x19814c = this.GetDistance(_0x4e1e6f, _0x23b0e2);
          var _0x173167 = this.GetDistance(_0x4f6072, _0x4e1e6f);
          var _0x2840e7 = this.GetDistance(_0x4f6072, _0x23b0e2);
          return _0x318e19((_0x19814c * _0x4c1483 + _0x173167 * _0x58daf0 + _0x2840e7 * _0x5340d7) / (_0x19814c + _0x173167 + _0x2840e7), (_0x19814c * _0x57924b + _0x173167 * _0x296e30 + _0x2840e7 * _0x239196) / (_0x19814c + _0x173167 + _0x2840e7));
        };
        _0x4604ce.ShowCoinFlyToPot = function () {
          var _0x2b2082 = _0x2988f4(_0x57ce7a().mark(function _0x441f30(_0x4f2770) {
            var _0x1db7d3;
            var _0x40234a;
            var _0xf44161;
            var _0x79331a;
            var _0x2602f3;
            var _0x17e96e;
            var _0x225dea;
            var _0x9bddcf;
            var _0x5cefe2;
            var _0x2242ba;
            var _0xc66497;
            var _0x4b99e4;
            var _0x2cb158;
            var _0x25ab0e = this;
            return _0x57ce7a().wrap(function (_0x5ea29f) {
              for (;;) {
                switch (_0x5ea29f.prev = _0x5ea29f.next) {
                  case 0x0:
                    this.m_gameView.RotationLock = true;
                    _0x1db7d3 = this.CreateCoinFlyNode_NodePool(_0x4f2770);
                    _0x40234a = _0x1db7d3.getPosition();
                    _0xf44161 = this.m_gameView.GetPotWorldPos();
                    _0x79331a = _0x1db7d3.parent.getComponent(_0x27d94b).convertToNodeSpaceAR(_0xf44161);
                    _0x2602f3 = 'Collect_Fly_01';
                    _0x1db7d3.active = false;
                    _0x17e96e = _0x1db7d3.getComponent(_0x12ccd4);
                    _0x225dea = _0x2f795d.COIN_FLY_TIME;
                    _0x9bddcf = _0x17e96e.getState(_0x2602f3);
                    _0x5cefe2 = _0x9bddcf.duration;
                    _0x9bddcf.speed = _0x164355.divide(_0x5cefe2, _0x225dea);
                    _0x2242ba = new _0x1cd6b4.Bezier([_0x40234a, this.GetMiddleBezPos(_0x40234a, _0x79331a), _0x79331a]);
                    _0xc66497 = Math.floor(_0x4f2770 / _0x2f795d.ROW);
                    _0x4b99e4 = _0x4f2770 % _0x2f795d.ROW;
                    _0x2cb158 = this.m_symbolEffectNodes[_0xc66497][_0x4b99e4].getComponent(_0x25eee6);
                    this.m_gameView.SlotReels.HideSymbol(_0xc66497, _0x4b99e4);
                    _0x2cb158.PlayThrow();
                    0.5;
                    _0x397393(_0x1db7d3).delay(0.5).call(function () {
                      _0x1db7d3.active = true;
                      _0x17e96e.play(_0x2602f3);
                      _0x341da1.Play(_0x2f795d.AudioClips.Caishen_Symbol_Throw, false);
                    }).to(_0x225dea, {
                      'position': _0x79331a
                    }, {
                      'onUpdate': function (_0x2f5784, _0x2ab2cb) {
                        _0x1db7d3.setPosition(_0x2242ba.GetPosition(_0x2ab2cb));
                      },
                      'easing': "backIn"
                    }).call(function () {
                      _0x1db7d3.active = false;
                      _0x28ef3f.GetInstance().ReturnCoinFlyObj(_0x1db7d3);
                      _0x25ab0e.m_coinFlyNodes[_0x4f2770] = null;
                      _0x25ab0e.m_gameView.RotationLock = false;
                    }).start();
                    _0x5ea29f.next = 0x16;
                    return _0x10e896.Wait(this, 0.5 + _0x225dea);
                  case 0x16:
                  case "end":
                    return _0x5ea29f.stop();
                }
              }
            }, _0x441f30, this);
          }));
          return function (_0x3e4fe1) {
            return _0x2b2082.apply(this, arguments);
          };
        }();
        _0x4604ce.ShowCoinFlyToPlate = function () {
          var _0x318ca5 = _0x2988f4(_0x57ce7a().mark(function _0x3902d3(_0x37e28a) {
            var _0x1e4c8;
            var _0x11c0ad;
            var _0x4cac3b;
            var _0x203bce;
            var _0x538b36 = this;
            return _0x57ce7a().wrap(function (_0x4d5498) {
              for (;;) {
                switch (_0x4d5498.prev = _0x4d5498.next) {
                  case 0x0:
                    this.m_gameView.RotationLock = true;
                    _0x1e4c8 = this.m_gameView.GetPotWorldPos();
                    _0x11c0ad = _0x2f795d.COIN_FLY_TIME;
                    _0x4cac3b = function (_0x429407) {
                      var _0x28c3c5 = _0x37e28a[_0x429407].Pos;
                      var _0x2f4f53 = _0x538b36.CreateCoinFlyNode_NodePool(_0x28c3c5);
                      var _0x226125 = _0x2f4f53.parent.getComponent(_0x27d94b).convertToNodeSpaceAR(_0x1e4c8);
                      var _0x2527b3 = _0x2f4f53.getPosition();
                      _0x2f4f53.setPosition(_0x226125);
                      _0x2f4f53.active = true;
                      var _0x5b96e3 = _0x2f4f53.getComponent(_0x12ccd4);
                      var _0x93ef81 = _0x5b96e3.getState("Collect_Fly_02");
                      var _0x452f0a = _0x93ef81.duration;
                      _0x93ef81.speed = _0x164355.divide(_0x452f0a, _0x11c0ad);
                      var _0x58b77a = new _0x1cd6b4.Bezier([_0x226125, _0x538b36.GetMiddleBezPos(_0x226125, _0x2527b3), _0x2527b3]);
                      _0x397393(_0x2f4f53).call(function () {
                        _0x5b96e3.play("Collect_Fly_02");
                      }).to(_0x11c0ad, {
                        'position': _0x2527b3
                      }, {
                        'onUpdate': function (_0x488e81, _0x331765) {
                          _0x2f4f53.setPosition(_0x58b77a.GetPosition(_0x331765));
                        },
                        'easing': "backIn"
                      }).call(function () {
                        _0x2f4f53.active = false;
                        _0x28ef3f.GetInstance().ReturnCoinFlyObj(_0x2f4f53);
                        _0x538b36.m_coinFlyNodes[_0x28c3c5] = null;
                        _0x538b36.m_gameView.RotationLock = false;
                      }).start();
                    };
                    for (_0x203bce = 0x0; _0x203bce < _0x37e28a.length; _0x203bce++) {
                      _0x4cac3b(_0x203bce);
                    }
                    _0x4d5498.next = 0x7;
                    return _0x10e896.Wait(this, _0x11c0ad);
                  case 0x7:
                  case "end":
                    return _0x4d5498.stop();
                }
              }
            }, _0x3902d3, this);
          }));
          return function (_0x4e6329) {
            return _0x318ca5.apply(this, arguments);
          };
        }();
        _0x4604ce.GetEffectSymbolValue = function (_0x6ab417) {
          var _0x87a2b2 = Math.floor(_0x6ab417 / _0x2f795d.ROW);
          var _0x40707e = _0x6ab417 % _0x2f795d.ROW;
          var _0xe58408 = this.m_symbolEffectNodes[_0x87a2b2][_0x40707e].getComponent(_0x1cb3ed);
          return _0xe58408 ? _0xe58408.Value : 0x0;
        };
        _0x4604ce.CreateNumFlyTween = function () {
          var _0x20fb46 = _0x2988f4(_0x57ce7a().mark(function _0x52acde(_0x41fc7d, _0x45fa8b, _0x6363b3) {
            var _0x336eab;
            var _0x367a49;
            var _0x25275e;
            var _0x18599f;
            var _0x3bfe17;
            var _0x53a548;
            var _0x14547a;
            var _0x52bd4f;
            var _0x562216;
            var _0x232f14;
            var _0x395889;
            var _0xe3f092 = this;
            return _0x57ce7a().wrap(function (_0x2e6d27) {
              for (;;) {
                switch (_0x2e6d27.prev = _0x2e6d27.next) {
                  case 0x0:
                    _0x336eab = Math.floor(_0x41fc7d / _0x2f795d.ROW);
                    _0x367a49 = _0x41fc7d % _0x2f795d.ROW;
                    _0x25275e = this.CreateNumFlyNode_NodePool(_0x336eab, _0x367a49, _0x45fa8b);
                    _0x18599f = _0x25275e.getComponent(_0x12ccd4);
                    _0x3bfe17 = "Collect_Num_Fly";
                    _0x53a548 = _0x18599f.getState(_0x3bfe17);
                    _0x14547a = _0x53a548.duration;
                    _0x52bd4f = _0x2f795d.FLY_TIME;
                    _0x53a548.speed = _0x164355.divide(_0x14547a, _0x52bd4f);
                    _0x562216 = _0x25275e.getPosition();
                    _0x232f14 = _0x25275e.parent.getComponent(_0x27d94b).convertToNodeSpaceAR(_0x6363b3.getWorldPosition());
                    _0x395889 = new _0x1cd6b4.Bezier([_0x562216, this.GetBezierPos(_0x562216, _0x232f14), _0x232f14]);
                    _0x397393(_0x25275e).call(function () {
                      _0x18599f.play(_0x3bfe17);
                      _0x341da1.Play(_0x2f795d.AudioClips.Coins_Fly, false);
                    }).to(_0x52bd4f, {
                      'position': _0x232f14
                    }, {
                      'onUpdate': function (_0x2efc6d, _0x35bfa2) {
                        _0x25275e.setPosition(_0x395889.GetPosition(_0x35bfa2));
                      },
                      'easing': 'backIn'
                    }).call(function () {
                      _0x25275e.active = false;
                      _0x28ef3f.GetInstance().ReturnNumFlyObj(_0x25275e);
                      _0xe3f092.m_numFlyNodes[_0x336eab][_0x367a49] = null;
                    }).start();
                    _0x2e6d27.next = 0xf;
                    return _0x10e896.Wait(this, _0x52bd4f);
                  case 0xf:
                  case 'end':
                    return _0x2e6d27.stop();
                }
              }
            }, _0x52acde, this);
          }));
          return function (_0x148fe8, _0x54efce, _0x3ff93f) {
            return _0x20fb46.apply(this, arguments);
          };
        }();
        _0x4604ce.ShowNumFlyByOrder = function () {
          var _0x2a6a0a = _0x2988f4(_0x57ce7a().mark(function _0x3d0027(_0x361045) {
            var _0x5a6834;
            var _0x436cbf;
            var _0x6b66e5;
            var _0x30e2df;
            var _0xf88f08;
            var _0x592c00;
            var _0x42cb99;
            var _0x37909e;
            var _0x4a1d59;
            var _0x4e99a6;
            var _0x31e180;
            var _0x48336e;
            var _0x325f02;
            var _0x451830;
            var _0x2f62eb;
            var _0x3af766;
            var _0x1d60da = this;
            return _0x57ce7a().wrap(function (_0x1131c1) {
              for (;;) {
                switch (_0x1131c1.prev = _0x1131c1.next) {
                  case 0x0:
                    _0x5a6834 = _0x361045.CPos;
                    _0x436cbf = _0x361045.Pos;
                    _0x6b66e5 = this.m_gameView.SlotReels.GetCoinLabelNodeByPos(_0x436cbf);
                    _0x30e2df = Math.floor(_0x436cbf / _0x2f795d.ROW);
                    _0xf88f08 = _0x436cbf % _0x2f795d.ROW;
                    _0x592c00 = this.m_symbolEffectNodes[_0x30e2df][_0xf88f08].getComponent(_0x25eee6);
                    _0x42cb99 = 0x0;
                    (_0x37909e = []).length = _0x2f795d.COL;
                    for (_0x4a1d59 = 0x0; _0x4a1d59 < _0x2f795d.COL; _0x4a1d59++) {
                      _0x37909e[_0x4a1d59] = [-0x1, -0x1, -0x1];
                    }
                    for (_0x4e99a6 = 0x0; _0x4e99a6 < _0x5a6834.length; _0x4e99a6++) {
                      _0x31e180 = _0x5a6834[_0x4e99a6];
                      _0x48336e = Math.floor(_0x31e180 / _0x2f795d.ROW);
                      _0x325f02 = _0x31e180 % _0x2f795d.ROW;
                      _0x37909e[_0x48336e][_0x325f02] = _0x31e180;
                    }
                    _0x451830 = [];
                    _0x2f62eb = _0x57ce7a().mark(function _0x49d286(_0x58122b) {
                      var _0x5aa047;
                      var _0x4966a2;
                      return _0x57ce7a().wrap(function (_0x3d59ac) {
                        for (;;) {
                          switch (_0x3d59ac.prev = _0x3d59ac.next) {
                            case 0x0:
                              _0x5aa047 = _0x57ce7a().mark(function _0x5b14f6(_0x439a1b) {
                                var _0x3a8e47;
                                var _0x5b86cc;
                                var _0x542983;
                                return _0x57ce7a().wrap(function (_0x4a9e23) {
                                  for (;;) {
                                    switch (_0x4a9e23.prev = _0x4a9e23.next) {
                                      case 0x0:
                                        if (-0x1 === (_0x3a8e47 = _0x37909e[_0x439a1b][_0x58122b])) {
                                          _0x4a9e23.next = 0x8;
                                          break;
                                        }
                                        _0x5b86cc = _0x1d60da.GetEffectSymbolValue(_0x3a8e47);
                                        if (_0x542983 = _0x1d60da.m_symbolEffectNodes[_0x439a1b][_0x58122b].getComponent(_0x5029aa)) {
                                          _0x1d60da.m_gameView.SlotReels.HideSymbol(_0x439a1b, _0x58122b);
                                          _0x542983.PlayCollect().then(function () {
                                            _0x1d60da.m_gameView.SlotReels.ShowSymbolWithoutNum(_0x439a1b, _0x58122b);
                                          });
                                        }
                                        _0x451830.push(_0x1d60da.CreateNumFlyTween(_0x3a8e47, _0x5b86cc, _0x6b66e5).then(function () {
                                          _0x42cb99 += _0x5b86cc;
                                          if (_0x592c00) {
                                            _0x592c00.PlayNumCollecting(_0x42cb99);
                                            _0x341da1.Play(_0x2f795d.AudioClips.Score_Add, false);
                                          }
                                        }));
                                        _0x4a9e23.next = 0x8;
                                        return _0x10e896.Wait(_0x1d60da, _0x2f795d.FLY_INTERVAL);
                                      case 0x8:
                                      case "end":
                                        return _0x4a9e23.stop();
                                    }
                                  }
                                }, _0x5b14f6);
                              });
                              _0x4966a2 = 0x0;
                            case 0x2:
                              if (!(_0x4966a2 < _0x2f795d.COL)) {
                                _0x3d59ac.next = 0x7;
                                break;
                              }
                              return _0x3d59ac.delegateYield(_0x5aa047(_0x4966a2), 't0', 0x4);
                            case 0x4:
                              _0x4966a2++;
                              _0x3d59ac.next = 0x2;
                              break;
                            case 0x7:
                            case 'end':
                              return _0x3d59ac.stop();
                          }
                        }
                      }, _0x49d286);
                    });
                    _0x3af766 = 0x0;
                  case 0xe:
                    if (!(_0x3af766 < _0x2f795d.ROW)) {
                      _0x1131c1.next = 0x13;
                      break;
                    }
                    return _0x1131c1.delegateYield(_0x2f62eb(_0x3af766), 't0', 0x10);
                  case 0x10:
                    _0x3af766++;
                    _0x1131c1.next = 0xe;
                    break;
                  case 0x13:
                    return _0x1131c1.abrupt("return", Promise.all(_0x451830));
                  case 0x14:
                  case "end":
                    return _0x1131c1.stop();
                }
              }
            }, _0x3d0027, this);
          }));
          return function (_0x230191) {
            return _0x2a6a0a.apply(this, arguments);
          };
        }();
        _0x4604ce.ShowCollectCoinEffect = function () {
          var _0x16ba90 = _0x2988f4(_0x57ce7a().mark(function _0x1a4672(_0x5e8426) {
            var _0x850302;
            var _0x3cec78;
            var _0x567153;
            var _0x3f3ca9;
            return _0x57ce7a().wrap(function (_0x1d4d15) {
              for (;;) {
                switch (_0x1d4d15.prev = _0x1d4d15.next) {
                  case 0x0:
                    this.m_gameView.RotationLock = true;
                    _0x850302 = Math.floor(_0x5e8426.Pos / _0x2f795d.ROW);
                    _0x3cec78 = _0x5e8426.Pos % _0x2f795d.ROW;
                    _0x567153 = this.m_symbolEffectNodes[_0x850302][_0x3cec78];
                    _0x3f3ca9 = _0x567153.getComponent(_0x25eee6);
                    this.m_gameView.SlotReels.HideSymbol(_0x850302, _0x3cec78);
                    _0x3f3ca9.ShowAward();
                    _0x1d4d15.next = 0x9;
                    return this.ShowNumFlyByOrder(_0x5e8426);
                  case 0x9:
                    if (!_0x5e8426.Extra) {
                      _0x1d4d15.next = 0xf;
                      break;
                    }
                    _0x341da1.Play(_0x2f795d.AudioClips.Caishen_Multiple_Trans, false);
                    _0x1d4d15.next = 0xd;
                    return _0x3f3ca9.PlayMultiple(_0x5e8426.Extra);
                  case 0xd:
                    _0x1d4d15.next = 0x11;
                    break;
                  case 0xf:
                    _0x1d4d15.next = 0x11;
                    return _0x3f3ca9.StopAward();
                  case 0x11:
                    this.m_gameView.RotationLock = false;
                  case 0x12:
                  case "end":
                    return _0x1d4d15.stop();
                }
              }
            }, _0x1a4672, this);
          }));
          return function (_0xe373e8) {
            return _0x16ba90.apply(this, arguments);
          };
        }();
        _0x4604ce.ShowBGCollectNumFly = function () {
          var _0x50bea0 = _0x2988f4(_0x57ce7a().mark(function _0x5107c6(_0xb43d96) {
            var _0x2f1402;
            var _0x444ae5;
            var _0x6feaa9;
            var _0x4103f3;
            var _0x50e936;
            var _0x3e63a2;
            var _0xb9000;
            var _0x56cb43;
            var _0x4db691;
            var _0x5edc41;
            var _0xb155ce;
            var _0x548651 = this;
            return _0x57ce7a().wrap(function (_0x787c4f) {
              for (;;) {
                switch (_0x787c4f.prev = _0x787c4f.next) {
                  case 0x0:
                    this.m_gameView.RotationLock = true;
                    (_0x2f1402 = []).length = _0x2f795d.COL;
                    for (_0x444ae5 = 0x0; _0x444ae5 < _0x2f795d.COL; _0x444ae5++) {
                      _0x2f1402[_0x444ae5] = [];
                      _0x2f1402[_0x444ae5].length = _0x2f795d.ROW;
                    }
                    for (_0x6feaa9 = 0x0; _0x6feaa9 < _0xb43d96.length; _0x6feaa9++) {
                      _0x4103f3 = _0xb43d96[_0x6feaa9].Pos;
                      _0x50e936 = Math.floor(_0x4103f3 / _0x2f795d.ROW);
                      _0x3e63a2 = _0x4103f3 % _0x2f795d.ROW;
                      _0x2f1402[_0x50e936][_0x3e63a2] = _0xb43d96[_0x6feaa9];
                    }
                    _0xb9000 = this.m_gameView.BonusCounter.GetNumLabelNode(this.m_gameView.IsLandscape);
                    _0x56cb43 = 0x0;
                    _0x4db691 = [];
                    _0x5edc41 = _0x57ce7a().mark(function _0x59deb4(_0x26923e) {
                      var _0x4db417;
                      var _0x114f51;
                      return _0x57ce7a().wrap(function (_0x5f346b) {
                        for (;;) {
                          switch (_0x5f346b.prev = _0x5f346b.next) {
                            case 0x0:
                              _0x4db417 = _0x57ce7a().mark(function _0x3d9cbb(_0x3d17cf) {
                                var _0x40bfea;
                                var _0x2eca23;
                                var _0x5c7ec8;
                                return _0x57ce7a().wrap(function (_0x2c247d) {
                                  for (;;) {
                                    switch (_0x2c247d.prev = _0x2c247d.next) {
                                      case 0x0:
                                        if (!_0x2f1402[_0x3d17cf][_0x26923e] || !_0x2f1402[_0x3d17cf][_0x26923e].Win) {
                                          _0x2c247d.next = 0x9;
                                          break;
                                        }
                                        _0x40bfea = _0x2f1402[_0x3d17cf][_0x26923e].Win;
                                        _0x2eca23 = _0x548651.m_symbolEffectNodes[_0x3d17cf][_0x26923e].getComponent(_0x5029aa);
                                        _0x5c7ec8 = _0x548651.m_symbolEffectNodes[_0x3d17cf][_0x26923e].getComponent(_0x25eee6);
                                        if (_0x2eca23) {
                                          _0x2eca23.HideNumLabel();
                                          _0x2eca23.PlayCollect().then(function () {
                                            _0x548651.m_gameView.SlotReels.ShowSymbolWithoutNum(_0x3d17cf, _0x26923e);
                                          });
                                        }
                                        if (_0x5c7ec8) {
                                          _0x5c7ec8.HideLabel();
                                          _0x5c7ec8.StopAward();
                                        }
                                        _0x4db691.push(_0x548651.CreateNumFlyTween(_0x2f1402[_0x3d17cf][_0x26923e].Pos, _0x40bfea, _0xb9000).then(function () {
                                          _0x56cb43 += _0x40bfea;
                                          _0x548651.m_gameView.BonusCounter.SetTotalWin(_0x56cb43, _0x548651.m_gameView.IsLandscape);
                                          _0x341da1.Play(_0x2f795d.AudioClips.Score_Add, false);
                                        }));
                                        _0x2c247d.next = 0x9;
                                        return _0x10e896.Wait(_0x548651, _0x2f795d.FLY_INTERVAL);
                                      case 0x9:
                                      case "end":
                                        return _0x2c247d.stop();
                                    }
                                  }
                                }, _0x3d9cbb);
                              });
                              _0x114f51 = 0x0;
                            case 0x2:
                              if (!(_0x114f51 < _0x2f795d.COL)) {
                                _0x5f346b.next = 0x7;
                                break;
                              }
                              return _0x5f346b.delegateYield(_0x4db417(_0x114f51), 't0', 0x4);
                            case 0x4:
                              _0x114f51++;
                              _0x5f346b.next = 0x2;
                              break;
                            case 0x7:
                            case 'end':
                              return _0x5f346b.stop();
                          }
                        }
                      }, _0x59deb4);
                    });
                    _0xb155ce = 0x0;
                  case 0xa:
                    if (!(_0xb155ce < _0x2f795d.ROW)) {
                      _0x787c4f.next = 0xf;
                      break;
                    }
                    return _0x787c4f.delegateYield(_0x5edc41(_0xb155ce), 't0', 0xc);
                  case 0xc:
                    _0xb155ce++;
                    _0x787c4f.next = 0xa;
                    break;
                  case 0xf:
                    _0x787c4f.next = 0x11;
                    return Promise.all(_0x4db691);
                  case 0x11:
                    this.m_gameView.RotationLock = false;
                  case 0x12:
                  case "end":
                    return _0x787c4f.stop();
                }
              }
            }, _0x5107c6, this);
          }));
          return function (_0x2d23ed) {
            return _0x50bea0.apply(this, arguments);
          };
        }();
        _0x4604ce.MysterySpinEffect = function (_0x306e46, _0x6fc5ad) {
          var _0xe2ed8d = Math.floor(_0x306e46 / _0x2f795d.ROW);
          var _0x4dc1eb = _0x306e46 % _0x2f795d.ROW;
          var _0x20bc94 = this.m_symbolEffectNodes[_0xe2ed8d][_0x4dc1eb];
          var _0x3ac82a = _0x20bc94.getComponent(_0x2eb400);
          _0x164355.SetOrderedZindex(_0x20bc94, _0xe2ed8d * _0x2f795d.ROW + _0x4dc1eb + 0xa);
          if (_0x3ac82a) {
            this.m_gameView.SlotReels.SetAllSymbolsDark(true);
            this.SetSymbolEffectDark([_0x306e46], true);
            this.m_mysterySpinNodeQue.push(_0x20bc94);
            this.m_symbolEffectNodes[_0xe2ed8d][_0x4dc1eb] = null;
            this.m_gameView.SlotReels.HideSymbol(_0xe2ed8d, _0x4dc1eb);
            _0x341da1.Play(_0x2f795d.AudioClips.Mestery_knock_open, false);
            _0x3ac82a.PlayKnockDoor().then(function () {
              if (_0x6fc5ad) {
                _0x6fc5ad();
              }
              _0x3ac82a.PlaySpinLoop();
            });
          }
          this.m_isStop[_0xe2ed8d][_0x4dc1eb] = false;
        };
        _0x4604ce.MysterySpinStop = function () {
          var _0x3d11cd = _0x2988f4(_0x57ce7a().mark(function _0x4a29dc() {
            var _0x494259;
            var _0x231d8b;
            var _0x5995e7;
            var _0x134b67 = this;
            return _0x57ce7a().wrap(function (_0x2a12e3) {
              for (;;) {
                switch (_0x2a12e3.prev = _0x2a12e3.next) {
                  case 0x0:
                    if (!(this.m_mysterySpinNodeQue.length > 0x0)) {
                      _0x2a12e3.next = 0x8;
                      break;
                    }
                    _0x494259 = this.m_mysterySpinNodeQue.shift();
                    _0x231d8b = _0x494259.getComponent(_0x2eb400);
                    (_0x5995e7 = []).push(this.m_gameView.GetCharacterSpine().PlayAnimation('Win').then(function () {
                      _0x134b67.m_gameView.GetCharacterSpine().PlayAnimation("Idle");
                    }));
                    _0x5995e7.push(_0x231d8b.StopSpinLoop().then(function () {
                      _0x494259.active = false;
                      _0x28ef3f.GetInstance().ReturnSymbol(_0x494259);
                    }));
                    _0x2a12e3.next = 0x8;
                    return Promise.all(_0x5995e7);
                  case 0x8:
                  case "end":
                    return _0x2a12e3.stop();
                }
              }
            }, _0x4a29dc, this);
          }));
          return function () {
            return _0x3d11cd.apply(this, arguments);
          };
        }();
        _0x4604ce.StartNearWinEffect = function (_0xb09b8d) {
          if (_0x2f795d.IsNearWin) {
            this.m_gameView.SlotReels.SetAllSymbolsDark(true);
            this.SetSymbolEffectDark([], true);
            this.m_gameView.GetCharacterSpine().PlayAnimation("Mystery", true);
            if (_0x2f795d.IsInBG) {
              this.m_mainFxSpine.ShowBGNearWin(_0xb09b8d);
            } else {
              this.m_mainFxSpine.ShowNearWin();
            }
          }
        };
        _0x4604ce.StopNearWinEffect = function () {
          this.m_gameView.GetCharacterSpine().PlayAnimation("Idle");
          if (_0x2f795d.IsInBG) {
            this.m_mainFxSpine.StopBGNearWin();
          } else {
            this.m_mainFxSpine.StopNearWin();
          }
          this.m_gameView.SlotReels.SetAllSymbolsDark(false);
          this.SetSymbolEffectDark([], false);
        };
        _0x4604ce.PlayBGSpinEffect = function () {
          _0x341da1.Play(_0x2f795d.AudioClips.BG_Light, false);
          this.m_mainFxSpine.PlayBGSpinEffect();
        };
        _0x4604ce.ShowBGComplimentEffect = function () {
          this.m_mainFxSpine.ShowCompliment(_0x2f795d.IsGrand);
        };
        _0x4604ce.StopBGComplimentEffect = function () {
          this.m_mainFxSpine.StopCompliment();
        };
        _0x55d7eb(_0x3e57ac, [{
          'key': "JPBarSpine",
          'get': function () {
            return this.m_jpBarSpine;
          }
        }, {
          'key': 'AwardLineNumNodes',
          'get': function () {
            return this.m_awardLineNumNodes;
          }
        }]);
        return _0x3e57ac;
      }(_0x4351ba);
      _0x19155e = _0x4fcd77(_0x577f57.prototype, "m_symbolEffectPrefabs", [_0x188cba], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x5aa09e = _0x4fcd77(_0x577f57.prototype, 'm_symbolEffectNode', [_0x394228], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x16f765 = _0x4fcd77(_0x577f57.prototype, "m_collectFlyPrefab", [_0x37b003], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1d1f53 = _0x4fcd77(_0x577f57.prototype, "m_collectFlyNode", [_0x5e0ad8], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x465e90 = _0x4fcd77(_0x577f57.prototype, "m_numFlyPrefab", [_0x39836a], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2a3710 = _0x4fcd77(_0x577f57.prototype, "m_multNumFlyPrefab", [_0x19ec32], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4f73d6 = _0x4fcd77(_0x577f57.prototype, 'm_numFlyNode', [_0x45fc47], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x14c0f4 = _0x4fcd77(_0x577f57.prototype, "m_mainFxSpine", [_0x30fca4], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1d7331 = _0x4fcd77(_0x577f57.prototype, "m_jpBarSpine", [_0x4d532c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1605b6 = _0x4fcd77(_0x577f57.prototype, "m_awardLineNumNodes", [_0x3527bc], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x300f5a = _0x4fcd77(_0x577f57.prototype, 'm_awardLineNodes', [_0x1a90e6], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      var _0x7afc0e;
      var _0x56d348;
      var _0x5b6266;
      var _0x69f96d;
      var _0x194471;
      var _0x256635;
      var _0xfe25b1;
      var _0x28ad1e;
      var _0x12996e;
      var _0x257d50;
      var _0x311a53;
      var _0x1c703a;
      var _0x203030;
      var _0x3cdf0c;
      var _0x488441;
      var _0x24cfad;
      var _0x19d0e5;
      var _0x467d4c;
      var _0x1d2258;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, '559b2bJQpxPt7YOXbIgmEiN', 'ExtraBet', undefined);
      var _0x47c8a4 = _0x4b56bb.property;
      _0x7afc0e = _0x47c8a4({
        'type': _0x241210,
        'tooltip': "EX 加倍按鈕"
      });
      _0x56d348 = _0x47c8a4({
        'type': _0x12ccd4,
        'tooltip': "EX 加倍按鈕ani"
      });
      _0x5b6266 = _0x47c8a4({
        'type': _0x241210,
        'tooltip': "EX 加倍按鈕ON"
      });
      _0x69f96d = _0x47c8a4({
        'type': _0x241210,
        'tooltip': "EX 加倍按鈕OFF"
      });
      _0x194471 = _0x47c8a4({
        'type': _0x241210,
        'tooltip': "EX 加倍按鈕提示問號"
      });
      _0x256635 = _0x47c8a4({
        'type': _0x25cea2,
        'tooltip': "EX 加倍按鈕提示文字tip"
      });
      _0xfe25b1 = _0x47c8a4({
        'type': _0x851753,
        'tooltip': "EX 加倍按鈕提示文字tip Label"
      });
      _0x28ad1e = _0x47c8a4({
        'type': _0x5465a6,
        'tooltip': "多語系Txt"
      });
      _0x12996e = _0x47c8a4({
        'type': _0x25cea2,
        'tooltip': "ExtraBetController"
      });
      _0x257d50 = function (_0x1f729f) {
        function _0x3bfa1a() {
          var _0x75c231;
          var _0x3fa3d8 = arguments.length;
          var _0x3b7d26 = new Array(_0x3fa3d8);
          for (var _0x35ebd3 = 0x0; _0x35ebd3 < _0x3fa3d8; _0x35ebd3++) {
            _0x3b7d26[_0x35ebd3] = arguments[_0x35ebd3];
          }
          _0x588ec8(_0x75c231 = _0x1f729f.call.apply(_0x1f729f, [this].concat(_0x3b7d26)) || this, "m_multiBtn", _0x311a53, _0x2901b4(_0x75c231));
          _0x588ec8(_0x75c231, 'm_multiBtnAni', _0x1c703a, _0x2901b4(_0x75c231));
          _0x75c231.m_multiBtnAnimationState = null;
          _0x588ec8(_0x75c231, "m_multiBtnOn", _0x203030, _0x2901b4(_0x75c231));
          _0x588ec8(_0x75c231, "m_multiBtnOff", _0x3cdf0c, _0x2901b4(_0x75c231));
          _0x588ec8(_0x75c231, 'm_multiBtnTipQuesMark', _0x488441, _0x2901b4(_0x75c231));
          _0x588ec8(_0x75c231, "m_multiBtnTip", _0x24cfad, _0x2901b4(_0x75c231));
          _0x588ec8(_0x75c231, "m_multiTipLabel", _0x19d0e5, _0x2901b4(_0x75c231));
          _0x588ec8(_0x75c231, 'm_extraBetTxt', _0x467d4c, _0x2901b4(_0x75c231));
          _0x588ec8(_0x75c231, "m_extraBetControllerNode", _0x1d2258, _0x2901b4(_0x75c231));
          _0x75c231.m_gameView = null;
          _0x75c231.m_isExtra = false;
          _0x75c231.m_isExtendShowBar = true;
          _0x75c231.m_isFirstIdle = true;
          return _0x75c231;
        }
        _0x5a9673(_0x3bfa1a, _0x1f729f);
        var _0x56459e = _0x3bfa1a.prototype;
        _0x56459e.SetIsFirstIdle = function (_0x15d654) {
          this.m_isFirstIdle = _0x15d654;
        };
        _0x56459e.onLoad = function () {
          this.SetTouch();
        };
        _0x56459e.start = function () {};
        _0x56459e.Init = function (_0x455276) {
          this.m_gameView = _0x455276;
        };
        _0x56459e.SetTouch = function () {
          var _0x7177f4 = this;
          this.m_multiBtn.node.on(_0x25cea2.EventType.TOUCH_END, function () {
            if (_0x7177f4.IsExAnimationTouchable()) {
              _0x341da1.Play(_0x10e896.AudioClips.COMMON_BTN);
              if (_0x215f6f.Current() == _0x389a53.IDLE && _0x10e896.IsInMG()) {
                _0x7177f4.ExtendShowBar(!_0x7177f4.m_isExtendShowBar);
              } else {
                _0x10427c.ShowMessageBox(_0x2f795d.StringKey.TRIAL_REFUSED_REASON_1);
              }
            }
          });
          this.m_multiBtnOn.node.on(_0x25cea2.EventType.TOUCH_END, function () {
            if (_0x7177f4.IsExAnimationTouchable()) {
              if (!_0x10e896.IsUsingItem && _0x215f6f.Current() == _0x389a53.IDLE && _0x10e896.IsInMG()) {
                _0x7177f4.ChangeBetMode(true);
                _0x7177f4.m_gameView.ExtraBetMenu.ResetExtra();
                _0x7177f4.m_gameView.ResetFeatureShows();
              } else {
                _0x10427c.ShowMessageBox(_0x2f795d.StringKey.TRIAL_REFUSED_REASON_1);
              }
            }
          });
          this.m_multiBtnOff.node.on(_0x25cea2.EventType.TOUCH_END, function () {
            if (_0x7177f4.IsExAnimationTouchable() && !_0x10e896.IsUsingItem && _0x215f6f.Current() == _0x389a53.IDLE && _0x10e896.IsInMG()) {
              _0x7177f4.m_gameView.ExtraBetMenu.ShowExtraPanel();
              _0x7177f4.ChangeBetMode(true);
            }
          });
          this.m_multiBtnTipQuesMark.node.on(_0x25cea2.EventType.TOUCH_END, function () {
            if (_0x7177f4.IsExAnimationTouchable()) {
              _0x341da1.Play(_0x10e896.AudioClips.COMMON_BTN);
              if (_0x215f6f.Current() == _0x389a53.IDLE && _0x10e896.IsInMG()) {
                if (_0x7177f4.m_isExtendShowBar) {
                  _0x7177f4.m_multiBtnTip.active = !_0x7177f4.m_multiBtnTip.active;
                } else {
                  _0x397393(_0x7177f4.node).call(function () {
                    _0x7177f4.ExtendShowBar(true);
                  }).delay(0.3).call(function () {
                    if (!_0x7177f4.m_multiBtnTip.active) {
                      _0x7177f4.m_multiBtnTip.active = true;
                    }
                  }).start();
                }
              } else {
                _0x10427c.ShowMessageBox(_0x2f795d.StringKey.TRIAL_REFUSED_REASON_1);
              }
            }
          });
        };
        _0x56459e.OnSpin = function () {
          if (this.m_gameView.ExtraBetMenu.IsExtraPanelOpen) {
            this.ChangeBetMode(false, true);
            this.m_gameView.ExtraBetMenu.CloseExtraPanel();
          }
          this.ExtendShowBar(false);
        };
        _0x56459e.ShowExtra = function (_0x1956dc) {
          this.node.active = _0x1956dc;
        };
        _0x56459e.GoToFeatures = function () {
          var _0x13d4c2 = this;
          _0x397393(this.node).call(function () {
            _0x13d4c2.ExtendShowBar(false);
          }).delay(0.2).call(function () {
            if (_0x13d4c2.m_isExtra) {
              _0x13d4c2.ChangeBetMode(false, true);
            }
          }).start();
        };
        _0x56459e.SetTxt = function (_0x5cb346) {
          this.m_extraBetTxt.spriteFrame = _0x5cb346.getSpriteFrame(_0x2f795d.ExtraBetStringKey.EXTRA_BOARD);
          this.m_multiTipLabel.string = _0x761887.GetString(_0x2f795d.StringKey.GAME_EX_DESCRIPTION);
        };
        _0x56459e.ExtendShowBar = function (_0x5a3470) {
          var _0x15bc0f = this;
          if (_0x5a3470) {
            if (_0x1defce.IsAutoSpin || _0x10e896.IsUsingItem) {
              _0x10427c.ShowMessageBox(_0x2f795d.StringKey.TRIAL_REFUSED_REASON_1);
            } else if (!this.m_isExtendShowBar) {
              this.m_isExtendShowBar = true;
              _0x397393(this.node).call(function () {
                _0x15bc0f.m_multiBtnAni.play("ExtraBet_Show");
                _0x15bc0f.m_multiBtnAnimationState = _0x15bc0f.m_multiBtnAni.getState("ExtraBet_Show");
              }).delay(0.2).call(function () {
                _0x1defce.SetSpinState(0x0);
                if (_0x15bc0f.m_isExtra) {
                  _0x15bc0f.m_multiBtnAni.play('ExtraBet_Active');
                  _0x15bc0f.m_multiBtnAnimationState = _0x15bc0f.m_multiBtnAni.getState('ExtraBet_Active');
                }
              }).start();
            }
          } else if (this.m_isExtendShowBar) {
            this.m_isExtendShowBar = false;
            _0x397393(this.node).call(function () {
              _0x15bc0f.m_multiBtnTip.active = false;
              _0x15bc0f.m_multiBtnAni.play("ExtraBet_Close");
              _0x15bc0f.m_multiBtnAnimationState = _0x15bc0f.m_multiBtnAni.getState("ExtraBet_Close");
            }).delay(0.2).call(function () {
              if (_0x15bc0f.m_isExtra) {
                _0x15bc0f.m_multiBtnAni.play('ExtraBet_Active');
                _0x15bc0f.m_multiBtnAnimationState = _0x15bc0f.m_multiBtnAni.getState('ExtraBet_Active');
              }
            }).start();
          }
        };
        _0x56459e.ChangeBetMode = function (_0x45196e, _0x3a314a) {
          var _0x9dff0b = this;
          if (undefined === _0x3a314a) {
            _0x3a314a = false;
          }
          if (_0x10e896.IsUsingItem && !this.m_isExtra || _0x215f6f.Current() !== _0x389a53.IDLE && !this.m_isExtra && !_0x3a314a) {
            if (_0x215f6f.Current() !== _0x389a53.IDLE) {
              _0x10427c.ShowMessageBox(_0x2f795d.StringKey.TRIAL_REFUSED_REASON_1);
            }
          } else {
            this.m_isExtra = !this.m_isExtra;
            if (this.m_isExtra) {
              if (_0x3a314a) {
                _0x1defce.ChangeMultiBet(this.m_gameView.ExtraType);
                this.m_multiBtnAni.play('ExtraBet_ON');
                this.m_multiBtnAnimationState = this.m_multiBtnAni.getState('ExtraBet_ON');
                this.m_multiBtnAnimationState.setTime(this.m_multiBtnAnimationState.duration);
              } else {
                _0x397393(this.node).call(function () {
                  _0x1defce.SetSpinState(0x1);
                  _0x9dff0b.m_multiBtnAni.play('ExtraBet_ON');
                  _0x9dff0b.m_multiBtnAnimationState = _0x9dff0b.m_multiBtnAni.getState('ExtraBet_ON');
                  if (!_0x9dff0b.m_isExtendShowBar) {
                    _0x9dff0b.m_isExtendShowBar = true;
                  }
                }).delay(0x1).call(function () {
                  _0x1defce.SetSpinState(0x0);
                  _0x9dff0b.m_multiBtnAni.play('ExtraBet_Active');
                  _0x9dff0b.m_multiBtnAnimationState = _0x9dff0b.m_multiBtnAni.getState('ExtraBet_Active');
                }).start();
              }
              this.m_multiBtnOn.node.active = true;
              this.m_multiBtnOff.node.active = false;
            } else {
              if (_0x3a314a) {
                this.m_multiBtnAni.play("ExtraBet_OFF");
                this.m_multiBtnAnimationState = this.m_multiBtnAni.getState("ExtraBet_OFF");
                this.m_multiBtnAnimationState.setTime(this.m_multiBtnAnimationState.duration);
              } else {
                _0x397393(this.node).call(function () {
                  _0x1defce.SetSpinState(0x1);
                  _0x9dff0b.m_multiBtnAni.play("ExtraBet_OFF");
                  _0x9dff0b.m_multiBtnAnimationState = _0x9dff0b.m_multiBtnAni.getState("ExtraBet_OFF");
                }).delay(0.25).call(function () {
                  _0x1defce.SetSpinState(0x0);
                }).start();
              }
              this.m_multiBtnOn.node.active = false;
              this.m_multiBtnOff.node.active = true;
            }
            if (_0x45196e) {
              _0x341da1.Play(_0x10e896.AudioClips.COMMON_BTN);
            }
          }
        };
        _0x56459e.IsExAnimationTouchable = function () {
          return null == this.m_multiBtnAnimationState || !this.m_multiBtnAnimationState.isPlaying || this.m_multiBtnAnimationState.name == 'ExtraBet_Active' || 'ExtraBet_Stop' == this.m_multiBtnAnimationState.name;
        };
        _0x56459e.FirstShow = function () {
          var _0x3e6614 = this;
          if (this.m_isFirstIdle && !_0x4e47db.IsFeaturesPageOpen()) {
            this.m_isFirstIdle = false;
            _0x397393(this.node).call(function () {
              _0x3e6614.ExtendShowBar(true);
            }).delay(0.3).call(function () {
              _0x3e6614.m_multiBtnTip.active = true;
            }).delay(0x7).call(function () {
              _0x3e6614.m_multiBtnTip.active = false;
            }).start();
          }
        };
        _0x55d7eb(_0x3bfa1a, [{
          'key': "IsExtra",
          'get': function () {
            return this.m_isExtra;
          },
          'set': function (_0xfd7c0c) {
            this.m_isExtra = _0xfd7c0c;
          }
        }]);
        return _0x3bfa1a;
      }(_0x4351ba);
      _0x311a53 = _0x4fcd77(_0x257d50.prototype, "m_multiBtn", [_0x7afc0e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1c703a = _0x4fcd77(_0x257d50.prototype, 'm_multiBtnAni', [_0x56d348], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x203030 = _0x4fcd77(_0x257d50.prototype, 'm_multiBtnOn', [_0x5b6266], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3cdf0c = _0x4fcd77(_0x257d50.prototype, "m_multiBtnOff", [_0x69f96d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x488441 = _0x4fcd77(_0x257d50.prototype, 'm_multiBtnTipQuesMark', [_0x194471], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x24cfad = _0x4fcd77(_0x257d50.prototype, "m_multiBtnTip", [_0x256635], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x19d0e5 = _0x4fcd77(_0x257d50.prototype, 'm_multiTipLabel', [_0xfe25b1], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x467d4c = _0x4fcd77(_0x257d50.prototype, "m_extraBetTxt", [_0x28ad1e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1d2258 = _0x4fcd77(_0x257d50.prototype, "m_extraBetControllerNode", [_0x12996e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x3b3739;
      var _0x39c42a;
      var _0x266be5;
      var _0xd36bfd;
      var _0x3b7a90;
      var _0x16c9ef;
      var _0x41ce7d;
      var _0x11aa86;
      var _0x4538ce;
      var _0x393877;
      var _0x2c04e9;
      var _0x1be8bd;
      var _0x143a4d;
      var _0x4b9757;
      var _0x509748;
      var _0x562924;
      var _0x48b203;
      var _0x31229e;
      var _0x5ac359;
      var _0x44afe9;
      var _0x738020;
      var _0x3c29b1;
      var _0x5660d9;
      var _0x54f52c;
      var _0x5a9b9e;
      var _0x2b4e39;
      var _0x415bc2;
      var _0x2d0d92;
      var _0x21ff0c;
      var _0x1c91ac;
      var _0x2d444c;
      var _0xa45b60;
      var _0x4ebf27;
      var _0x43306c;
      var _0x5300a4;
      var _0x4929c;
      var _0xc2ee31;
      var _0x23f28c;
      var _0x160ec3;
      var _0x26828a;
      var _0x559989;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "68d09BdYm9AXYUTivWdFYkw", "ExtraBetController", undefined);
      var _0x11e8ae = _0x4b56bb.property;
      _0x3b3739 = _0x11e8ae({
        'type': _0x25cea2,
        'tooltip': "Extra Bet Btn 面板"
      });
      _0x39c42a = _0x11e8ae({
        'type': _0x25cea2,
        'tooltip': "Extra Bet Btn 特效"
      });
      _0x266be5 = _0x11e8ae({
        'type': _0x25cea2,
        'tooltip': "Extra Bet 面板"
      });
      _0xd36bfd = _0x11e8ae({
        'type': _0x851753,
        'tooltip': "Extra Bet 面板的金額"
      });
      _0x3b7a90 = _0x11e8ae({
        'type': _0x851753,
        'tooltip': '幣別圖示'
      });
      _0x16c9ef = _0x11e8ae({
        'type': _0x25cea2,
        'tooltip': "Extra Bet 左面板的選取中高亮"
      });
      _0x41ce7d = _0x11e8ae({
        'type': _0x25cea2,
        'tooltip': "Extra Bet 右面板的選取中高亮"
      });
      _0x11aa86 = _0x11e8ae({
        'type': _0x25cea2,
        'tooltip': "Extra Bet OK Btn 狀態提示"
      });
      _0x4538ce = _0x11e8ae({
        'type': _0x25cea2,
        'tooltip': "Extra Bet OK Btn 按鈕"
      });
      _0x393877 = _0x11e8ae({
        'type': _0x25cea2,
        'tooltip': "Extra Bet OFF節點"
      });
      _0x2c04e9 = _0x11e8ae({
        'type': _0x25cea2,
        'tooltip': "Extra Bet ON節點"
      });
      _0x1be8bd = _0x11e8ae({
        'type': _0x12ccd4,
        'tooltip': "減號動畫"
      });
      _0x143a4d = _0x11e8ae({
        'type': _0x12ccd4,
        'tooltip': "加號動畫"
      });
      _0x4b9757 = _0x11e8ae({
        'type': _0x423384.Skeleton,
        'tooltip': '背景動畫'
      });
      _0x509748 = _0x11e8ae({
        'type': _0x12ccd4,
        'tooltip': "ExtraBet 啟用特效"
      });
      _0x562924 = _0x11e8ae({
        'type': _0x5465a6,
        'tooltip': "Extra Bet OK圖片"
      });
      _0x48b203 = _0x11e8ae({
        'type': _0x5465a6,
        'tooltip': "Extra Bet 押注圖片"
      });
      _0x31229e = _0x11e8ae({
        'type': _0x5465a6,
        'tooltip': "Extra Bet 標題圖片"
      });
      _0x5ac359 = _0x11e8ae({
        'type': _0x5465a6,
        'tooltip': "Extra Bet 選擇圖片"
      });
      _0x44afe9 = _0x11e8ae({
        'type': _0x5465a6,
        'tooltip': "Extra Bet Extra說明圖片"
      });
      _0x738020 = function (_0x567947) {
        function _0x2b9247() {
          var _0xc232ed;
          var _0x4ea0eb = arguments.length;
          var _0x11b223 = new Array(_0x4ea0eb);
          for (var _0x4b8973 = 0x0; _0x4b8973 < _0x4ea0eb; _0x4b8973++) {
            _0x11b223[_0x4b8973] = arguments[_0x4b8973];
          }
          _0x588ec8(_0xc232ed = _0x567947.call.apply(_0x567947, [this].concat(_0x11b223)) || this, "m_extraBtnRootNode", _0x3c29b1, _0x2901b4(_0xc232ed));
          _0x588ec8(_0xc232ed, "m_extraBtnEffectNode", _0x5660d9, _0x2901b4(_0xc232ed));
          _0x588ec8(_0xc232ed, "m_extraSelectPageNode", _0x54f52c, _0x2901b4(_0xc232ed));
          _0x588ec8(_0xc232ed, "m_extraPanelBetNums", _0x5a9b9e, _0x2901b4(_0xc232ed));
          _0x588ec8(_0xc232ed, "m_currencyLabels", _0x2b4e39, _0x2901b4(_0xc232ed));
          _0x588ec8(_0xc232ed, "m_extraPanelLeftHighLight", _0x415bc2, _0x2901b4(_0xc232ed));
          _0x588ec8(_0xc232ed, 'm_extraPanelRightHighLight', _0x2d0d92, _0x2901b4(_0xc232ed));
          _0x588ec8(_0xc232ed, "m_extraPanelOKBtnHighLight", _0x21ff0c, _0x2901b4(_0xc232ed));
          _0x588ec8(_0xc232ed, "m_extraPanelOKBtnNode", _0x1c91ac, _0x2901b4(_0xc232ed));
          _0x588ec8(_0xc232ed, "m_extraOffNodes", _0x2d444c, _0x2901b4(_0xc232ed));
          _0x588ec8(_0xc232ed, "m_extraOnNodes", _0xa45b60, _0x2901b4(_0xc232ed));
          _0x588ec8(_0xc232ed, "m_minusBtnAnimation", _0x4ebf27, _0x2901b4(_0xc232ed));
          _0x588ec8(_0xc232ed, "m_plusBtnAnimation", _0x43306c, _0x2901b4(_0xc232ed));
          _0x588ec8(_0xc232ed, "m_bgSpine", _0x5300a4, _0x2901b4(_0xc232ed));
          _0x588ec8(_0xc232ed, 'm_sunLightAnim', _0x4929c, _0x2901b4(_0xc232ed));
          _0x588ec8(_0xc232ed, "m_okBtnSprite", _0xc2ee31, _0x2901b4(_0xc232ed));
          _0x588ec8(_0xc232ed, "m_betSprite", _0x23f28c, _0x2901b4(_0xc232ed));
          _0x588ec8(_0xc232ed, "m_titleSprite", _0x160ec3, _0x2901b4(_0xc232ed));
          _0x588ec8(_0xc232ed, "m_selectPanelSprites", _0x26828a, _0x2901b4(_0xc232ed));
          _0x588ec8(_0xc232ed, "m_extraSprites", _0x559989, _0x2901b4(_0xc232ed));
          _0xc232ed.m_gameView = null;
          _0xc232ed.m_extraBtnAnimation = null;
          _0xc232ed.m_extraPanelAnimation = null;
          _0xc232ed.m_betIndex = 0x0;
          _0xc232ed.m_tempExtra = 0x0;
          _0xc232ed.m_isExtraSelectLock = true;
          _0xc232ed.m_selectedData = null;
          return _0xc232ed;
        }
        _0x5a9673(_0x2b9247, _0x567947);
        var _0x596010 = _0x2b9247.prototype;
        _0x596010.onLoad = function () {
          this.m_extraBtnAnimation = this.m_extraBtnRootNode.getComponent(_0x12ccd4);
          this.m_extraPanelAnimation = this.m_extraSelectPageNode.getComponent(_0x12ccd4);
        };
        _0x596010.Init = function (_0xc3e73) {
          this.m_gameView = _0xc3e73;
        };
        _0x596010.ResetExtraBar = function () {
          this.SetNodesActive(this.m_extraOffNodes, true);
          this.SetNodesActive(this.m_extraOnNodes, false);
          this.m_extraBtnEffectNode.active = false;
        };
        _0x596010.ShowExtraPanel = function () {
          var _0x197b44 = this;
          this.m_selectedData = null;
          _0x341da1.Play(_0x2f795d.AudioClips.Extra_Touch);
          this.m_extraSelectPageNode.active = true;
          var _0x4d3750 = this.m_gameView.IsLandscape ? '_L' : '_S';
          this.m_extraPanelAnimation.play('ExtraBet_Start' + _0x4d3750);
          var _0x1185b2 = this.m_extraPanelAnimation.getState('ExtraBet_Start' + _0x4d3750).duration;
          this.m_extraPanelLeftHighLight.getComponent(_0x371a7a).opacity = 0x1;
          this.m_extraPanelRightHighLight.getComponent(_0x371a7a).opacity = 0x1;
          this.m_extraPanelOKBtnNode.getComponent(_0x371a7a).opacity = 0x1;
          this.m_extraPanelOKBtnHighLight.getComponent(_0x371a7a).opacity = 0x1;
          _0x397393(this.node).delay(_0x1185b2).call(function () {
            _0x197b44.m_isExtraSelectLock = false;
          }).start();
          this.m_betIndex = _0x1defce.GetNowBetIndex();
          var _0x2b3edf = _0x1defce.GetNowBetValue();
          _0x2b3edf = _0x1defce.GetDisplayValue(_0x2b3edf);
          this.m_extraPanelBetNums[0x0].string = '' + _0x164355.strip(_0x2b3edf);
          this.m_extraPanelBetNums[0x1].string = '' + _0x164355.strip(_0x2b3edf * _0x2f795d.MulRateArray[0x1]);
          this.m_extraPanelBetNums[0x2].string = '' + _0x164355.strip(_0x2b3edf * _0x2f795d.MulRateArray[0x2]);
        };
        _0x596010.CloseExtraPanel = function () {
          var _0x319357 = this;
          this.m_gameView.ExtraType = _0x2f795d.ExtraType.None;
          this.m_tempExtra = this.m_gameView.ExtraType;
          this.m_isExtraSelectLock = true;
          var _0x3df646 = this.m_gameView.IsLandscape ? '_L' : '_S';
          this.m_extraPanelAnimation.play("ExtraBet_End" + _0x3df646);
          var _0x4c495c = this.m_extraPanelAnimation.getState("ExtraBet_End" + _0x3df646).duration;
          _0x397393(this.node).delay(_0x4c495c).call(function () {
            _0x319357.m_extraSelectPageNode.active = false;
          }).start();
        };
        _0x596010.ResetExtra = function () {
          this.m_gameView.ExtraType = _0x2f795d.ExtraType.None;
          this.m_gameView.IsMulti = false;
          _0x1defce.ChangeMultiBet(this.m_gameView.ExtraType);
          this.m_isExtraSelectLock = true;
          this.m_bgSpine.clearTracks();
          this.m_bgSpine.node.active = false;
          _0x4571bb.stopAllByTarget(this.m_sunLightAnim.getComponent(_0x371a7a));
          this.m_sunLightAnim.getComponent(_0x371a7a).opacity = 0x1;
          this.m_sunLightAnim.node.active = false;
        };
        _0x596010.RestartExtra = function () {
          this.m_gameView.ExtraType = this.m_tempExtra;
          this.m_gameView.IsMulti = true;
          _0x1defce.ChangeMultiBet(this.m_gameView.ExtraType);
          if (this.m_gameView.ExtraType == _0x2f795d.ExtraType.Double) {
            this.m_bgSpine.setAnimation(0x0, "End_2", false);
          } else {
            this.m_bgSpine.setAnimation(0x0, 'End_4', false);
          }
        };
        _0x596010.ForceSetExtra = function (_0x43ef2b) {
          this.m_gameView.ExtraType = _0x43ef2b;
          this.m_gameView.IsMulti = !!_0x43ef2b;
          _0x1defce.ChangeMultiBet(this.m_gameView.ExtraType);
          this.m_bgSpine.node.active = this.m_gameView.IsMulti;
          this.m_bgSpine.setAnimation(0x0, 'End_Loop', true);
          if (_0x43ef2b == _0x2f795d.ExtraType.Quadruple) {
            this.m_sunLightAnim.node.active = true;
            this.m_sunLightAnim.getComponent(_0x371a7a).opacity = 0xff;
          }
        };
        _0x596010.OnExtraPanelBetClick = function (_0x13aa0b, _0x3732df) {
          _0x341da1.Play(_0x10e896.AudioClips.COMMON_BTN);
          if ("Minus" == _0x3732df) {
            if (this.m_betIndex > 0x0) {
              this.m_minusBtnAnimation.play("Bet_BtnFx");
              this.m_betIndex -= 0x1;
              this.SetExtraPanelBet();
              var _0x296f32 = _0x1defce.GetBetList()[this.m_betIndex];
              this.m_gameView.EffectPlate.JPBarSpine.SetJpValue(_0x296f32);
            }
          } else {
            if (this.m_betIndex < _0x1defce.GetBetList().length - 0x1) {
              this.m_plusBtnAnimation.play("Bet_BtnFx");
              this.m_betIndex += 0x1;
              this.SetExtraPanelBet();
              var _0x22af14 = _0x1defce.GetBetList()[this.m_betIndex];
              this.m_gameView.EffectPlate.JPBarSpine.SetJpValue(_0x22af14);
            }
          }
        };
        _0x596010.SetExtraPanelBet = function (_0x290cb9) {
          if (undefined === _0x290cb9) {
            _0x290cb9 = -0x1;
          }
          if (_0x290cb9 >= 0x0) {
            this.m_betIndex = _0x290cb9;
          }
          var _0x17778b = _0x1defce.GetBetList()[this.m_betIndex];
          _0x17778b = _0x1defce.GetDisplayValue(_0x17778b);
          this.m_extraPanelBetNums[0x0].string = '' + _0x164355.strip(_0x17778b);
          this.m_extraPanelBetNums[0x1].string = '' + _0x164355.strip(_0x17778b * _0x2f795d.MulRateArray[0x1]);
          this.m_extraPanelBetNums[0x2].string = '' + _0x164355.strip(_0x17778b * _0x2f795d.MulRateArray[0x2]);
        };
        _0x596010.OnExtraPanelSelectClick = function (_0x3aa5d7, _0x5c3054) {
          if (!this.m_isExtraSelectLock) {
            _0x341da1.Play(_0x10e896.AudioClips.COMMON_BTN);
            if (this.m_selectedData === _0x5c3054) {
              return;
            }
            this.m_selectedData = _0x5c3054;
            if ('Left' == _0x5c3054) {
              this.m_gameView.ExtraType = _0x2f795d.ExtraType.Double;
              _0x4571bb.stopAllByTarget(this.m_extraPanelRightHighLight.getComponent(_0x371a7a));
              this.m_extraPanelRightHighLight.getComponent(_0x371a7a).opacity = 0x1;
              _0x397393(this.m_extraPanelOKBtnNode.getComponent(_0x371a7a)).to(0.5, {
                'opacity': 0xff
              }).start();
              _0x397393(this.m_extraPanelOKBtnHighLight.getComponent(_0x371a7a)).to(0.5, {
                'opacity': 0xff
              }).start();
              _0x397393(this.m_extraPanelLeftHighLight.getComponent(_0x371a7a)).to(0.5, {
                'opacity': 0xff
              }).start();
            } else {
              this.m_gameView.ExtraType = _0x2f795d.ExtraType.Quadruple;
              _0x4571bb.stopAllByTarget(this.m_extraPanelLeftHighLight.getComponent(_0x371a7a));
              this.m_extraPanelLeftHighLight.getComponent(_0x371a7a).opacity = 0x1;
              _0x397393(this.m_extraPanelOKBtnNode.getComponent(_0x371a7a)).to(0.5, {
                'opacity': 0xff
              }).start();
              _0x397393(this.m_extraPanelOKBtnHighLight.getComponent(_0x371a7a)).to(0.5, {
                'opacity': 0xff
              }).start();
              _0x397393(this.m_extraPanelRightHighLight.getComponent(_0x371a7a)).to(0.5, {
                'opacity': 0xff
              }).start();
            }
            this.m_tempExtra = this.m_gameView.ExtraType;
          }
        };
        _0x596010.OnExtraPanelEscClick = function () {
          _0x341da1.Play(_0x10e896.AudioClips.COMMON_BTN);
          this.m_gameView.ExtraBetBar.ChangeBetMode(false);
          this.m_gameView.ExtraType = _0x2f795d.ExtraType.None;
          this.m_tempExtra = this.m_gameView.ExtraType;
          this.CloseExtraPanel();
          var _0x5225aa = _0x1defce.GetNowBetValue();
          this.m_gameView.EffectPlate.JPBarSpine.SetJpValue(_0x5225aa);
        };
        _0x596010.OnExtraPanelOKClick = function () {
          var _0x4fb945 = this;
          if (this.m_gameView.ExtraType > 0x0) {
            _0x1defce.SetSpinState(0x7);
            _0x341da1.Play(_0x10e896.AudioClips.COMMON_BTN);
            _0x341da1.Play(_0x2f795d.AudioClips.Extra_Bet_On);
            var _0x1e6842 = this.m_gameView.IsLandscape ? '_L' : '_S';
            this.m_extraPanelAnimation.play("ExtraBet_End" + _0x1e6842);
            this.m_gameView.PlayMGExtraSound(true);
            this.m_extraBtnAnimation.play('ExtraBet_Active');
            this.m_bgSpine.node.active = true;
            this.m_gameView.ConfirmCb();
            var _0xf61f0a = null;
            _0xf61f0a = this.m_gameView.ExtraType == _0x2f795d.ExtraType.Double ? _0x3c0bbf.PlayAnimation(this.m_bgSpine, "End_2", false) : _0x3c0bbf.PlayAnimation(this.m_bgSpine, 'End_4', false);
            var _0x5afa5d = _0x164355.strip(_0x1defce.GetBetList()[this.m_betIndex]);
            _0x1defce.SetNowBet(_0x5afa5d);
            this.m_gameView.IsMulti = true;
            _0x1defce.ChangeMultiBet(this.m_gameView.ExtraType);
            _0xf61f0a.then(function () {
              _0x4fb945.m_extraSelectPageNode.active = false;
              _0x4fb945.m_bgSpine.setAnimation(0x0, 'End_Loop', true);
              if (_0x4fb945.m_gameView.ExtraType == _0x2f795d.ExtraType.Quadruple) {
                _0x4fb945.m_sunLightAnim.node.active = true;
                _0x397393(_0x4fb945.m_sunLightAnim.getComponent(_0x371a7a)).to(0.5, {
                  'opacity': 0xff
                }).start();
              }
              _0x1defce.SetSpinState(0x0);
            });
          }
        };
        _0x596010.SetTxt = function (_0x2b7cbc) {
          this.m_okBtnSprite.spriteFrame = _0x2b7cbc.getSpriteFrame(_0x2f795d.ExtraBetStringKey.COMFIRM_BTN);
          this.m_betSprite.spriteFrame = _0x2b7cbc.getSpriteFrame(_0x2f795d.ExtraBetStringKey.EXTRA_BET);
          this.m_titleSprite.spriteFrame = _0x2b7cbc.getSpriteFrame(_0x2f795d.ExtraBetStringKey.EXTRA_TITLE);
          for (var _0x4f82fd = 0x0; _0x4f82fd < this.m_selectPanelSprites.length; _0x4f82fd++) {
            this.m_selectPanelSprites[_0x4f82fd].spriteFrame = _0x2b7cbc.getSpriteFrame(_0x2f795d.ExtraBetStringKey.EXTRA_SELECT_PANEL);
          }
          for (var _0x5d343a = 0x0; _0x5d343a < this.m_extraSprites.length; _0x5d343a++) {
            this.m_extraSprites[_0x5d343a].spriteFrame = _0x2b7cbc.getSpriteFrame(_0x2f795d.ExtraBetStringKey.EXTRA_DESCRIPTION + (_0x5d343a + 0x1));
          }
          var _0x3eadab = _0x10e896.DollarSymbol;
          for (var _0x50f9c3 = 0x0; _0x50f9c3 < this.m_currencyLabels.length; _0x50f9c3++) {
            this.m_currencyLabels[_0x50f9c3].node.active = !!_0x3eadab;
            this.m_currencyLabels[_0x50f9c3].string = _0x3eadab;
          }
        };
        _0x596010.SetNodesActive = function (_0x16c773, _0x113592) {
          for (var _0x1922dd = 0x0; _0x1922dd < _0x16c773.length; _0x1922dd++) {
            if (_0x16c773[_0x1922dd]) {
              _0x16c773[_0x1922dd].active = _0x113592;
            }
          }
        };
        _0x55d7eb(_0x2b9247, [{
          'key': "TempExtra",
          'get': function () {
            return this.m_tempExtra;
          }
        }, {
          'key': 'IsExtraPanelOpen',
          'get': function () {
            return this.m_extraSelectPageNode.active;
          }
        }]);
        return _0x2b9247;
      }(_0x4351ba);
      _0x3c29b1 = _0x4fcd77(_0x738020.prototype, 'm_extraBtnRootNode', [_0x3b3739], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5660d9 = _0x4fcd77(_0x738020.prototype, "m_extraBtnEffectNode", [_0x39c42a], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x54f52c = _0x4fcd77(_0x738020.prototype, "m_extraSelectPageNode", [_0x266be5], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5a9b9e = _0x4fcd77(_0x738020.prototype, 'm_extraPanelBetNums', [_0xd36bfd], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x2b4e39 = _0x4fcd77(_0x738020.prototype, "m_currencyLabels", [_0x3b7a90], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x415bc2 = _0x4fcd77(_0x738020.prototype, "m_extraPanelLeftHighLight", [_0x16c9ef], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2d0d92 = _0x4fcd77(_0x738020.prototype, 'm_extraPanelRightHighLight', [_0x41ce7d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x21ff0c = _0x4fcd77(_0x738020.prototype, 'm_extraPanelOKBtnHighLight', [_0x11aa86], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1c91ac = _0x4fcd77(_0x738020.prototype, "m_extraPanelOKBtnNode", [_0x4538ce], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2d444c = _0x4fcd77(_0x738020.prototype, "m_extraOffNodes", [_0x393877], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0xa45b60 = _0x4fcd77(_0x738020.prototype, "m_extraOnNodes", [_0x2c04e9], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x4ebf27 = _0x4fcd77(_0x738020.prototype, "m_minusBtnAnimation", [_0x1be8bd], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x43306c = _0x4fcd77(_0x738020.prototype, "m_plusBtnAnimation", [_0x143a4d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5300a4 = _0x4fcd77(_0x738020.prototype, "m_bgSpine", [_0x4b9757], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4929c = _0x4fcd77(_0x738020.prototype, "m_sunLightAnim", [_0x509748], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0xc2ee31 = _0x4fcd77(_0x738020.prototype, "m_okBtnSprite", [_0x562924], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x23f28c = _0x4fcd77(_0x738020.prototype, "m_betSprite", [_0x48b203], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x160ec3 = _0x4fcd77(_0x738020.prototype, 'm_titleSprite', [_0x31229e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x26828a = _0x4fcd77(_0x738020.prototype, "m_selectPanelSprites", [_0x5ac359], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x559989 = _0x4fcd77(_0x738020.prototype, "m_extraSprites", [_0x44afe9], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      var _0x1d7be1;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "7123fCHu9BGb7i9OUAtQZDN", "AwardState", undefined);
      var _0x150f56 = _0x4b56bb.ccclass;
      _0x1d7be1 = _0x150f56("AwardState");
      var _0x5a859f;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "38ae8OtaipMtZtfQ1KdGIGQ", "BGAwardState", undefined);
      var _0x12206d = _0x4b56bb.ccclass;
      _0x5a859f = _0x12206d("BGAwardState");
      var _0x41d936;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "9bd79eq3qpGnIf4D4s1N1eH", "ChangeSymbolState", undefined);
      var _0x976a54 = _0x4b56bb.ccclass;
      _0x41d936 = _0x976a54("ChangeSymbolState");
      var _0x32d22e;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "c428eQC4pVDyKqHqe2WuSn5", "CheckCollectState", undefined);
      var _0x547ef6 = _0x4b56bb.ccclass;
      _0x32d22e = _0x547ef6("CheckCollectState");
      var _0x39dbaf;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "338fdjat/FE2Kl8oa8ramzF", "CheckMysteryState", undefined);
      var _0x4625b1 = _0x4b56bb.ccclass;
      _0x39dbaf = _0x4625b1("CheckMysteryState");
      var _0xd9713f;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "c9e77Bwp+ZEVKEw6AGIUDWT", "CheckPlateState", undefined);
      var _0xf19334 = _0x4b56bb.ccclass;
      _0xd9713f = _0xf19334("CheckPlateState");
      var _0x504bc9;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "58a57WyotRMgYP1LdGQD9eO", "CheckState", undefined);
      var _0x2b1453 = _0x4b56bb.ccclass;
      _0x504bc9 = _0x2b1453("CheckState");
      var _0x1a6071;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "3d1af0TzBtJfJLPo/vud47A", "CollectMoneyState", undefined);
      var _0x3cd0a8 = _0x4b56bb.ccclass;
      _0x1a6071 = _0x3cd0a8("CollectMoneyState");
      var _0x1e0339;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "c4dbb7zBa1PzKmqBFMZA15t", 'EnterBonusState', undefined);
      var _0x2a8347 = _0x4b56bb.ccclass;
      _0x1e0339 = _0x2a8347('EnterBonusState');
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "6c207tjtFdB+bDk63GP7i8C", "FeatureShowState", undefined);
      var _0x3301d3;
      var _0x1e3e2d;
      var _0x23e911;
      var _0x49471c;
      var _0x3015c4;
      var _0x2ea986;
      var _0x507591;
      var _0x244dfe;
      var _0x4b20d7;
      var _0x3c5970;
      var _0x3f6170;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, '77acaFcNgVDULwRQEtO5wYa', "BigWinComponent", undefined);
      var _0x5ea6cb = {
        'Big': {
          'Start': 'BigWin_Start',
          'End': "BigWin_End"
        },
        'Mega': {
          'Start': "MegaWin_Start",
          'End': 'MegaWin_End'
        },
        'Super': {
          'Start': "SuperWin_Start",
          'End': "SuperWin_End"
        }
      };
      var _0x49c0c0 = _0x4b56bb.property;
      _0x3301d3 = _0x49c0c0({
        'type': _0x423384.Skeleton,
        'tooltip': "spine"
      });
      _0x1e3e2d = _0x49c0c0({
        'type': _0x423384.Skeleton,
        'tooltip': '遮罩'
      });
      _0x23e911 = _0x49c0c0({
        'type': _0x423384.Skeleton,
        'tooltip': "Extra Spine"
      });
      _0x49471c = _0x49c0c0({
        'type': _0x851753,
        'tooltip': '贏分'
      });
      _0x3015c4 = _0x49c0c0({
        'type': _0x5dfa7a,
        'tooltip': "End extra effect delay time"
      });
      _0x3f6170 = function (_0x2b44c7) {
        function _0x1276c4() {
          var _0x120b25;
          var _0xfa2ee3 = arguments.length;
          var _0x5a11ca = new Array(_0xfa2ee3);
          for (var _0x5e3479 = 0x0; _0x5e3479 < _0xfa2ee3; _0x5e3479++) {
            _0x5a11ca[_0x5e3479] = arguments[_0x5e3479];
          }
          _0x588ec8(_0x120b25 = _0x2b44c7.call.apply(_0x2b44c7, [this].concat(_0x5a11ca)) || this, "m_spine", _0x2ea986, _0x2901b4(_0x120b25));
          _0x588ec8(_0x120b25, "m_maskSpine", _0x507591, _0x2901b4(_0x120b25));
          _0x588ec8(_0x120b25, "m_extraSpine", _0x244dfe, _0x2901b4(_0x120b25));
          _0x588ec8(_0x120b25, "m_winLabel", _0x4b20d7, _0x2901b4(_0x120b25));
          _0x588ec8(_0x120b25, "m_endExtraDelayTime", _0x3c5970, _0x2901b4(_0x120b25));
          _0x120b25.m_isEnd = true;
          _0x120b25.m_isShowEnd = true;
          _0x120b25.m_isShowAward = false;
          _0x120b25.m_eventCb = null;
          _0x120b25.m_showValueCb = null;
          _0x120b25.m_cancelCb = null;
          _0x120b25.m_lvl = 0x0;
          _0x120b25.m_nowLvl = 0x0;
          _0x120b25.m_win = 0x0;
          _0x120b25.m_showWin = 0x0;
          _0x120b25.m_step = 0x0;
          _0x120b25.m_isShowingExtraEnd = false;
          return _0x120b25;
        }
        _0x5a9673(_0x1276c4, _0x2b44c7);
        var _0x45cbaa = _0x1276c4.prototype;
        _0x45cbaa.update = function (_0xb5cb34) {
          if (this.m_isShowAward) {
            this.m_showWin += this.m_step * _0xb5cb34;
            if (this.m_showWin >= this.m_win) {
              this.m_showWin = this.m_win;
              this.m_isShowAward = false;
            }
            this.m_winLabel.string = _0x164355.FormatNumberThousands(_0x164355.strip(this.m_showValueCb ? this.m_showValueCb(this.m_showWin) : this.m_showWin), _0x164355.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          }
        };
        _0x45cbaa.Init = function (_0x4d2d8c, _0x2d1f8) {
          this.m_eventCb = _0x4d2d8c;
          this.m_showValueCb = _0x2d1f8;
          if (this.m_maskSpine) {
            this.m_maskSpine.node.active = false;
          }
        };
        _0x45cbaa.Show = function (_0x358caa, _0x36323d, _0x4182e6) {
          if (undefined === _0x4182e6) {
            _0x4182e6 = true;
          }
          if (_0x358caa > 0x0 && _0x36323d > _0x1276c4.Level.NONE && _0x36323d <= _0x1276c4.Level.SUPER) {
            this.m_isEnd = false;
            this.m_lvl = _0x36323d;
            this.m_nowLvl = _0x4182e6 ? 0x0 : _0x36323d - 0x1;
            this.m_win = _0x358caa;
            this.m_showWin = 0x0;
            this.m_winLabel.string = '0';
            this.m_isShowEnd = false;
            var _0x1dd94d = 0x0;
            for (var _0x25b83e = _0x4182e6 ? _0x1276c4.Level.BIG : this.m_lvl; _0x25b83e <= this.m_lvl; _0x25b83e++) {
              var _0x40c210 = '';
              var _0x53f665 = '';
              switch (_0x25b83e) {
                case _0x1276c4.Level.BIG:
                  _0x40c210 = _0x5ea6cb.Big.Start;
                  _0x53f665 = _0x5ea6cb.Big.End;
                  break;
                case _0x1276c4.Level.MEGA:
                  _0x40c210 = _0x5ea6cb.Mega.Start;
                  _0x53f665 = _0x5ea6cb.Mega.End;
                  break;
                case _0x1276c4.Level.SUPER:
                  _0x40c210 = _0x5ea6cb.Super.Start;
                  _0x53f665 = _0x5ea6cb.Super.End;
              }
              if ('' !== _0x40c210 && '' !== _0x53f665) {
                var _0x16546f = this.m_spine.findAnimation(_0x40c210);
                if (_0x16546f) {
                  _0x1dd94d += _0x16546f.duration;
                }
              }
            }
            this.m_step = _0x164355.divide(this.m_win, _0x1dd94d || 0x5);
            this.m_isShowAward = true;
            if (this.m_maskSpine) {
              this.m_maskSpine.node.active = true;
              this.PlayAnimation(this.m_maskSpine, "BigWin_Start");
            }
            this.ShowNext();
          }
        };
        _0x45cbaa.Stop = function () {
          if (!this.m_isShowEnd) {
            if (this.m_cancelCb) {
              this.m_cancelCb();
            }
            this.ShowEnd();
          }
        };
        _0x45cbaa.SetSkin = function (_0x3d6f6d) {
          this.m_spine.setSkin(_0x3d6f6d);
        };
        _0x45cbaa.ShowNext = function () {
          var _0x2fce4e = _0x2988f4(_0x57ce7a().mark(function _0x43f013() {
            var _0x34e386;
            return _0x57ce7a().wrap(function (_0x34feb5) {
              for (;;) {
                switch (_0x34feb5.prev = _0x34feb5.next) {
                  case 0x0:
                    if (this.m_nowLvl !== this.m_lvl) {
                      _0x34feb5.next = 0x4;
                      break;
                    }
                    this.ShowEnd();
                    _0x34feb5.next = 0x17;
                    break;
                  case 0x4:
                    this.m_nowLvl++;
                    _0x34e386 = false;
                    _0x34feb5.t0 = this.m_nowLvl;
                    _0x34feb5.next = _0x34feb5.t0 === _0x1276c4.Level.BIG ? 0x9 : _0x34feb5.t0 === _0x1276c4.Level.MEGA ? 0xe : _0x34feb5.t0 === _0x1276c4.Level.SUPER ? 0x12 : 0x16;
                    break;
                  case 0x9:
                    this.CheckExtraSpineStart();
                    _0x34feb5.next = 0xc;
                    return this.PlayAnimation(this.m_spine, _0x5ea6cb.Big.Start);
                  case 0xc:
                    _0x34e386 = _0x34feb5.sent;
                    return _0x34feb5.abrupt("break", 0x16);
                  case 0xe:
                    _0x34feb5.next = 0x10;
                    return this.PlayAnimation(this.m_spine, _0x5ea6cb.Mega.Start);
                  case 0x10:
                    _0x34e386 = _0x34feb5.sent;
                    return _0x34feb5.abrupt("break", 0x16);
                  case 0x12:
                    _0x34feb5.next = 0x14;
                    return this.PlayAnimation(this.m_spine, _0x5ea6cb.Super.Start);
                  case 0x14:
                    _0x34e386 = _0x34feb5.sent;
                    return _0x34feb5.abrupt("break", 0x16);
                  case 0x16:
                    if (!_0x34e386) {
                      this.ShowNext();
                    }
                  case 0x17:
                  case "end":
                    return _0x34feb5.stop();
                }
              }
            }, _0x43f013, this);
          }));
          return function () {
            return _0x2fce4e.apply(this, arguments);
          };
        }();
        _0x45cbaa.ShowEnd = function () {
          var _0x279698 = _0x2988f4(_0x57ce7a().mark(function _0x2c3403() {
            var _0x5d26fe;
            return _0x57ce7a().wrap(function (_0x4a6245) {
              for (;;) {
                switch (_0x4a6245.prev = _0x4a6245.next) {
                  case 0x0:
                    if (!this.m_isShowEnd) {
                      _0x4a6245.next = 0x2;
                      break;
                    }
                    return _0x4a6245.abrupt("return");
                  case 0x2:
                    this.m_isShowEnd = true;
                    this.m_isShowAward = false;
                    this.m_winLabel.string = _0x164355.FormatNumberThousands(_0x164355.strip(this.m_showValueCb ? this.m_showValueCb(this.m_win) : this.m_win), _0x164355.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
                    if (this.m_maskSpine) {
                      this.PlayAnimation(this.m_maskSpine, "BigWin_End");
                    }
                    _0x5d26fe = '';
                    _0x4a6245.t0 = this.m_lvl;
                    _0x4a6245.next = _0x4a6245.t0 === _0x1276c4.Level.BIG ? 0xa : _0x4a6245.t0 === _0x1276c4.Level.MEGA ? 0xc : _0x4a6245.t0 === _0x1276c4.Level.SUPER ? 0xe : 0x10;
                    break;
                  case 0xa:
                    _0x5d26fe = _0x5ea6cb.Big.End;
                    return _0x4a6245.abrupt("break", 0x10);
                  case 0xc:
                    _0x5d26fe = _0x5ea6cb.Mega.End;
                    return _0x4a6245.abrupt("break", 0x10);
                  case 0xe:
                    _0x5d26fe = _0x5ea6cb.Super.End;
                    return _0x4a6245.abrupt("break", 0x10);
                  case 0x10:
                    if ('' === _0x5d26fe) {
                      _0x4a6245.next = 0x15;
                      break;
                    }
                    _0x4a6245.next = 0x13;
                    return Promise.all([this.CheckExtraSpineEnd(), this.PlayAnimation(this.m_spine, _0x5d26fe)]);
                  case 0x13:
                    _0x4a6245.next = 0x16;
                    break;
                  case 0x15:
                    console.error("BigWinComponent ShowEnd animName is empty!", this.m_lvl);
                  case 0x16:
                    if (this.m_maskSpine) {
                      this.m_maskSpine.node.active = false;
                    }
                    this.m_isEnd = true;
                  case 0x18:
                  case 'end':
                    return _0x4a6245.stop();
                }
              }
            }, _0x2c3403, this);
          }));
          return function () {
            return _0x279698.apply(this, arguments);
          };
        }();
        _0x45cbaa.CheckExtraSpineStart = function () {
          var _0xac2dba = this;
          if (this.m_extraSpine) {
            this.m_extraSpine.node.active = true;
            this.PlayAnimation(this.m_extraSpine, "Start").then(function () {
              if (!_0xac2dba.m_isShowingExtraEnd) {
                _0xac2dba.PlayAnimation(_0xac2dba.m_extraSpine, "Loop", true);
              }
            });
          }
        };
        _0x45cbaa.CheckExtraSpineEnd = function () {
          var _0x4fde8c = _0x2988f4(_0x57ce7a().mark(function _0x25845c() {
            return _0x57ce7a().wrap(function (_0x4f87cc) {
              for (;;) {
                switch (_0x4f87cc.prev = _0x4f87cc.next) {
                  case 0x0:
                    if (this.m_extraSpine) {
                      _0x4f87cc.next = 0x2;
                      break;
                    }
                    return _0x4f87cc.abrupt('return');
                  case 0x2:
                    this.m_isShowingExtraEnd = true;
                    _0x4f87cc.next = 0x5;
                    return _0x10e896.Wait(this, this.m_endExtraDelayTime);
                  case 0x5:
                    _0x4f87cc.next = 0x7;
                    return this.PlayAnimation(this.m_extraSpine, 'End');
                  case 0x7:
                    this.m_isShowingExtraEnd = false;
                  case 0x8:
                  case 'end':
                    return _0x4f87cc.stop();
                }
              }
            }, _0x25845c, this);
          }));
          return function () {
            return _0x4fde8c.apply(this, arguments);
          };
        }();
        _0x45cbaa.PlayAnimation = function (_0x1e3967, _0x2442c5, _0x5863b1, _0xba8c31) {
          var _0x20fb38 = this;
          if (undefined === _0x5863b1) {
            _0x5863b1 = false;
          }
          if (undefined === _0xba8c31) {
            _0xba8c31 = 0x0;
          }
          return new Promise(function (_0x514fc9) {
            var _0x17208a = false;
            _0x20fb38.m_cancelCb = function () {
              _0x514fc9(_0x17208a = true);
            };
            _0x1e3967.clearTrack(_0xba8c31);
            _0x1e3967.setToSetupPose();
            var _0x2b9dad = _0x1e3967.setAnimation(_0xba8c31, _0x2442c5, _0x5863b1);
            var _0x1de11a = function () {
              _0x20fb38.m_cancelCb = null;
              _0x514fc9(_0x17208a);
            };
            if (_0x2b9dad) {
              _0x1e3967.setTrackEventListener(_0x2b9dad, function (_0x4a9e17, _0xdec0db) {
                var _0x4a45f7 = _0xdec0db.data.name;
                var _0x59f754 = _0xdec0db.stringValue;
                if (_0x20fb38.m_eventCb) {
                  _0x20fb38.m_eventCb(_0x4a45f7, _0x59f754, _0x2442c5);
                }
              });
              _0x1e3967.setTrackCompleteListener(_0x2b9dad, function () {
                _0x1e3967.setTrackCompleteListener(_0x2b9dad, function () {});
                _0x1de11a();
              });
            } else {
              _0x1e3967.setCompleteListener(function () {
                _0x1e3967.setCompleteListener(null);
                _0x1de11a();
              });
            }
          });
        };
        _0x55d7eb(_0x1276c4, [{
          'key': 'IsEnd',
          'get': function () {
            return this.m_isEnd;
          },
          'set': function (_0xcf169b) {
            this.m_isEnd = _0xcf169b;
          }
        }]);
        return _0x1276c4;
      }(_0x4351ba);
      _0x3f6170.Level = {
        'NONE': 0x0,
        'BIG': 0x1,
        'MEGA': 0x2,
        'SUPER': 0x3
      };
      _0x2ea986 = _0x4fcd77(_0x3f6170.prototype, 'm_spine', [_0x3301d3], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x507591 = _0x4fcd77(_0x3f6170.prototype, "m_maskSpine", [_0x1e3e2d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x244dfe = _0x4fcd77(_0x3f6170.prototype, "m_extraSpine", [_0x23e911], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4b20d7 = _0x4fcd77(_0x3f6170.prototype, 'm_winLabel', [_0x49471c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3c5970 = _0x4fcd77(_0x3f6170.prototype, 'm_endExtraDelayTime', [_0x3015c4], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return 1.5;
        }
      });
      var _0x4d88e0;
      var _0x4969a6;
      var _0x5537f2;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "74f7dljUZhO+6o0Pu2tNSAk", "ConnectionManager", undefined);
      (function (_0x4778b6) {
        _0x4778b6[_0x4778b6.TYPE_HTTP = 0x1] = "TYPE_HTTP";
        _0x4778b6[_0x4778b6.TYPE_WEBSOCKET = 0x2] = 'TYPE_WEBSOCKET';
        _0x4778b6[_0x4778b6.MAX = 0x3] = "MAX";
      })(_0x4d88e0 || (_0x4d88e0 = {}));
      (function (_0x47e669) {
        _0x47e669.TYPE_GET = "get";
        _0x47e669.TYPE_POST = "post";
      })(_0x4969a6 || (_0x4969a6 = {}));
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "34d81gQVlJAaJJHg6IUTjH6", "TimeBool", undefined);
      (function (_0x186ba8) {
        _0x186ba8[_0x186ba8.MAX_UINT = 0xffffffff] = "MAX_UINT";
        _0x186ba8[_0x186ba8.MAX_UINT64 = 0x10000000000000000] = "MAX_UINT64";
        _0x186ba8[_0x186ba8.MAX_INT = -0x1] = 'MAX_INT';
        _0x186ba8[_0x186ba8.MIN_INT = 0x0] = "MIN_INT";
      })(_0x5537f2 || (_0x5537f2 = {}));
      var _0x37ffa1;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, '5cd11K4+Y1DBJ0WZfuiBSee', "Common_IdleState", undefined);
      var _0x2447b1 = _0x4b56bb.ccclass;
      _0x37ffa1 = _0x2447b1("Common_IdleState");
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "9099fuoIOdA/qc/GkvbZ7rH", "GroupNode", undefined);
      var _0x2e5e19;
      var _0x319ee8;
      var _0x3e9a63;
      var _0x6058b8;
      !function (_0x3df3b6) {
        _0x3df3b6[_0x3df3b6.WIDTH = 0x1] = "WIDTH";
        _0x3df3b6[_0x3df3b6.HEIGHT = 0x2] = 'HEIGHT';
        _0x3df3b6[_0x3df3b6.BOTH = 0x3] = "BOTH";
      }(_0x2e5e19 || (_0x2e5e19 = {}));
      (function (_0x656f2b) {
        _0x656f2b[_0x656f2b.X = 0x1] = 'X';
        _0x656f2b[_0x656f2b.Y = 0x2] = 'Y';
        _0x656f2b[_0x656f2b.BOTH = 0x3] = "BOTH";
      })(_0x319ee8 || (_0x319ee8 = {}));
      (function (_0x15902) {
        _0x15902[_0x15902.X = 0x1] = 'X';
        _0x15902[_0x15902.Y = 0x2] = 'Y';
        _0x15902[_0x15902.BOTH = 0x3] = "BOTH";
      })(_0x3e9a63 || (_0x3e9a63 = {}));
      (function (_0x255236) {
        _0x255236[_0x255236.R = 0x1] = 'R';
        _0x255236[_0x255236.G = 0x2] = 'G';
        _0x255236[_0x255236.B = 0x4] = 'B';
        _0x255236[_0x255236.RGB = 0x7] = "RGB";
        _0x255236[_0x255236.A = 0x8] = 'A';
        _0x255236[_0x255236.RGBA = 0xf] = "RGBA";
      })(_0x6058b8 || (_0x6058b8 = {}));
      var _0x41387e;
      var _0x689ff1;
      var _0x1b047a;
      var _0x2adeca;
      var _0x1d106a;
      var _0x18b0ab;
      var _0x45ea69;
      var _0x3f989e;
      var _0x5ab97d;
      var _0x391ee1;
      var _0x4d9cd4;
      var _0x4245cf;
      var _0x2d77f4;
      var _0x3011e2;
      var _0x29aa92;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "1d854+nhA1JgLXZLaNHz9eU", "LicenseSetting", undefined);
      (function (_0x1831af) {
        _0x1831af[_0x1831af.ShopingMall = 0x1] = "ShopingMall";
        _0x1831af[_0x1831af.ShowAutoSetting = 0x10] = "ShowAutoSetting";
        _0x1831af[_0x1831af.NoSoundUnder1 = 0x11] = "NoSoundUnder1";
        _0x1831af[_0x1831af.NoQuickSpin = 0x12] = "NoQuickSpin";
        _0x1831af[_0x1831af.CloseManual = 0x27] = 'CloseManual';
        _0x1831af[_0x1831af.CloseExtraBet = 0x3d] = "CloseExtraBet";
      })(_0x41387e || (_0x41387e = {}));
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "0c18bO40hVJB4/zzDByb8vr", "ManualComponent", undefined);
      var _0xc95595 = _0x4b56bb.ccclass;
      var _0x312975 = _0x4b56bb.property;
      _0x689ff1 = _0xc95595("ManualComponent");
      _0x1b047a = _0x312975({
        'type': _0x25cea2,
        'tooltip': "特色說明按鈕(新版跑馬燈)"
      });
      _0x2adeca = _0x312975({
        'type': _0x25cea2,
        'tooltip': "特色說明本體(新版跑馬燈)"
      });
      _0x1d106a = _0x312975({
        'type': _0x25cea2,
        'tooltip': "特色說明關閉按鈕(新版跑馬燈)"
      });
      _0x18b0ab = _0x312975({
        'type': _0x25cea2,
        'tooltip': '特色說明周圍關閉按鈕(新版跑馬燈)'
      });
      _0x45ea69 = _0x312975({
        'type': _0x5465a6,
        'tooltip': "特色說明內容(新版跑馬燈)"
      });
      _0x3f989e = _0x312975({
        'type': _0x5465a6,
        'tooltip': '標題'
      });
      _0x5ab97d = function (_0xf69e11) {
        function _0x243c12() {
          var _0x2e2927;
          var _0x5dda7e = arguments.length;
          var _0x2ac3f2 = new Array(_0x5dda7e);
          for (var _0x33ba61 = 0x0; _0x33ba61 < _0x5dda7e; _0x33ba61++) {
            _0x2ac3f2[_0x33ba61] = arguments[_0x33ba61];
          }
          _0x588ec8(_0x2e2927 = _0xf69e11.call.apply(_0xf69e11, [this].concat(_0x2ac3f2)) || this, 'm_featureInfoBtn', _0x391ee1, _0x2901b4(_0x2e2927));
          _0x588ec8(_0x2e2927, 'm_featureInfoBoard', _0x4d9cd4, _0x2901b4(_0x2e2927));
          _0x588ec8(_0x2e2927, "m_featureInfoCloseBtn", _0x4245cf, _0x2901b4(_0x2e2927));
          _0x588ec8(_0x2e2927, 'm_featureInfoSideBtn', _0x2d77f4, _0x2901b4(_0x2e2927));
          _0x588ec8(_0x2e2927, 'm_featureInfoTxt', _0x3011e2, _0x2901b4(_0x2e2927));
          _0x588ec8(_0x2e2927, 'm_titleSprite', _0x29aa92, _0x2901b4(_0x2e2927));
          _0x2e2927.m_manulState = "Close";
          _0x2e2927.m_manulOpenLock = false;
          return _0x2e2927;
        }
        _0x5a9673(_0x243c12, _0xf69e11);
        var _0x54b6cd = _0x243c12.prototype;
        _0x54b6cd.onLoad = function () {
          var _0x48b62e = this;
          if (_0x164355.CheckSwitchOff(_0x41387e.CloseManual)) {
            this.node.active = false;
          } else {
            if (this.m_featureInfoBtn) {
              this.m_featureInfoBtn.on(_0x25cea2.EventType.TOUCH_END, function () {
                _0x48b62e.OpenManul();
                _0x341da1.Play(Astarte.Define.AudioClips.COMMON_BTN);
              });
            }
            if (this.m_featureInfoCloseBtn) {
              this.m_featureInfoCloseBtn.on(_0x25cea2.EventType.TOUCH_END, function () {
                _0x48b62e.CloseManul();
                _0x341da1.Play(Astarte.Define.AudioClips.COMMON_BTN);
              });
            }
            if (this.m_featureInfoSideBtn) {
              this.m_featureInfoSideBtn.on(_0x25cea2.EventType.TOUCH_END, function () {
                _0x48b62e.CloseManul();
              });
            }
          }
        };
        _0x54b6cd.OpenManul = function () {
          var _0x34bfc3 = this;
          if (this.m_manulOpenLock) {
            _0x10427c.ShowMessageBox(Astarte.Define.StringKey.FREEWINCASH_PLAYING1);
          } else if (this.m_manulState == "Close") {
            this.m_featureInfoBoard.active = true;
            _0x397393(this.m_featureInfoBoard).call(function () {
              _0x34bfc3.m_manulState = "Opening";
              _0x34bfc3.m_featureInfoBoard.getComponentInChildren(_0x12ccd4).play("Manual_Open");
            }).delay(0.5).call(function () {
              _0x34bfc3.m_manulState = "Open";
            }).start();
          }
        };
        _0x54b6cd.CloseManul = function () {
          var _0x28a050 = this;
          if (this.m_manulState == "Open") {
            _0x397393(this.m_featureInfoBoard).call(function () {
              _0x28a050.m_manulState = "Closing";
              _0x28a050.m_featureInfoBoard.getComponentInChildren(_0x12ccd4).play("Manual_Close");
            }).delay(0.5).call(function () {
              _0x28a050.m_manulState = "Close";
              _0x28a050.m_featureInfoBoard.active = false;
            }).start();
          }
        };
        _0x54b6cd.SetTxt = function (_0x38403c, _0xf8d6a6) {
          if (undefined === _0xf8d6a6) {
            _0xf8d6a6 = null;
          }
          var _0x22a6be = _0x761887.GetGameAtlas();
          for (var _0x3a46c6 = 0x0; _0x3a46c6 < this.m_featureInfoTxt.length; _0x3a46c6++) {
            if (_0x22a6be.getSpriteFrame(_0x38403c[_0x3a46c6])) {
              this.m_featureInfoTxt[_0x3a46c6].spriteFrame = _0x22a6be.getSpriteFrame(_0x38403c[_0x3a46c6]);
            }
          }
          if (this.m_titleSprite && _0xf8d6a6) {
            this.m_titleSprite.spriteFrame = _0x22a6be.getSpriteFrame(_0xf8d6a6);
          }
        };
        _0x55d7eb(_0x243c12, [{
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
          'set': function (_0x4b59b0) {
            this.m_manulOpenLock = _0x4b59b0;
          }
        }]);
        return _0x243c12;
      }(_0x4351ba);
      _0x391ee1 = _0x4fcd77(_0x5ab97d.prototype, "m_featureInfoBtn", [_0x1b047a], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4d9cd4 = _0x4fcd77(_0x5ab97d.prototype, "m_featureInfoBoard", [_0x2adeca], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4245cf = _0x4fcd77(_0x5ab97d.prototype, 'm_featureInfoCloseBtn', [_0x1d106a], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2d77f4 = _0x4fcd77(_0x5ab97d.prototype, "m_featureInfoSideBtn", [_0x18b0ab], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3011e2 = _0x4fcd77(_0x5ab97d.prototype, 'm_featureInfoTxt', [_0x45ea69], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x29aa92 = _0x4fcd77(_0x5ab97d.prototype, "m_titleSprite", [_0x3f989e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "1d950BFoN5LhJJ79uyt+/E+", "MarqueeComponent", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, '93417uqlh9Fm6TH2poz4GO4', "NearWinEffectComponent", undefined);
      var _0x306a85;
      var _0x557f24;
      var _0x10d77f;
      var _0x3f47f4;
      var _0x55c85f;
      var _0x5c1b94;
      var _0x420a87;
      var _0x1f71ba;
      var _0x244621;
      var _0x38363b;
      var _0x242cef;
      var _0x48b84e;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "02e880GcB9Jw7QDr8UUWxEV", "ShakeComponent", undefined);
      var _0x14d62f = _0x4b56bb.ccclass;
      var _0x1c1bda = _0x4b56bb.property;
      var _0x57a21b = _0x1ce4de({});
      var _0x333490;
      !function (_0x446459) {
        _0x446459[_0x446459.None = 0x0] = "None";
        _0x446459[_0x446459.FadeIn = 0x1] = 'FadeIn';
        _0x446459[_0x446459.FadeOut = 0x2] = "FadeOut";
      }(_0x333490 || (_0x333490 = {}));
      var _0x500e52 = _0x1ce4de({
        'None': _0x333490.None,
        'FadeIn': _0x333490.FadeIn,
        'FadeOut': _0x333490.FadeOut
      });
      _0x306a85 = _0x14d62f("_TweenInfo");
      _0x557f24 = _0x1c1bda({
        'visible': false,
        'tooltip': "Easing"
      });
      _0x10d77f = _0x1c1bda({
        'type': _0x57a21b,
        'visible': false
      });
      _0x3f47f4 = _0x1c1bda({
        'visible': true,
        'displayName': "緩動效果",
        'type': _0x57a21b
      });
      _0x55c85f = _0x1c1bda({
        'type': _0x500e52,
        'visible': false
      });
      _0x5c1b94 = _0x1c1bda({
        'visible': true,
        'displayName': "fade type",
        'type': _0x500e52
      });
      _0x420a87 = _0x1c1bda({
        'min': 0x0,
        'visible': true,
        'displayName': '時間'
      });
      _0x1f71ba = function () {
        function _0x5c7ffe() {
          _0x588ec8(this, "m_EasingName", _0x244621, this);
          _0x588ec8(this, '__easingIdx', _0x38363b, this);
          _0x588ec8(this, "__fadeType", _0x242cef, this);
          this._EasingEnumList = [];
          _0x588ec8(this, "duration", _0x48b84e, this);
        }
        _0x55d7eb(_0x5c7ffe, [{
          'key': "_easingIdx",
          'get': function () {},
          'set': function (_0x50ffb8) {}
        }, {
          'key': "_fadeType",
          'get': function () {
            return this.__fadeType;
          },
          'set': function (_0x15a0dd) {}
        }]);
        return _0x5c7ffe;
      }();
      _0x244621 = _0x4fcd77(_0x1f71ba.prototype, "m_EasingName", [_0x557f24], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return '';
        }
      });
      _0x38363b = _0x4fcd77(_0x1f71ba.prototype, "__easingIdx", [_0x10d77f], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4fcd77(_0x1f71ba.prototype, "_easingIdx", [_0x3f47f4], Object.getOwnPropertyDescriptor(_0x1f71ba.prototype, '_easingIdx'), _0x1f71ba.prototype);
      _0x242cef = _0x4fcd77(_0x1f71ba.prototype, "__fadeType", [_0x55c85f], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4fcd77(_0x1f71ba.prototype, "_fadeType", [_0x5c1b94], Object.getOwnPropertyDescriptor(_0x1f71ba.prototype, "_fadeType"), _0x1f71ba.prototype);
      _0x48b84e = _0x4fcd77(_0x1f71ba.prototype, "duration", [_0x420a87], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return 0x1;
        }
      });
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "b57cahiKlxMZL7TyWc1iHaf", 'SloganComponent', undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "c6e0eKOKjtNwJBDq/hJOYgn", 'index', undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "e7636yKUuJJXp70iYJhyJ6d", "IdleState", undefined);
      var _0x43fb95;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "1f6b0j0fWlGLbucgrsor34j", "LeaveBonusState", undefined);
      var _0x5c1d90 = _0x4b56bb.ccclass;
      _0x43fb95 = _0x5c1d90('LeaveBonusState');
      var _0x4e98e3;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, 'ce311XCEXhDOJGomYOi5b/T', "MysterySpinState", undefined);
      var _0x4d77f0 = _0x4b56bb.ccclass;
      _0x4e98e3 = _0x4d77f0("MysterySpinState");
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, 'f3b560JtINIwrSXqMBGI9XM', "PlateShowState", undefined);
      var _0x43a5ec;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, 'dbd62cI7tlGf45a/sr+8wjm', "RoundEndState", undefined);
      var _0x138efc = _0x4b56bb.ccclass;
      _0x43a5ec = _0x138efc("RoundEndState");
      var _0x3e1ce0;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "4ea73CHphNPWYd0KTjr1rok", "RoundShowEndState", undefined);
      var _0x3865f = _0x4b56bb.ccclass;
      _0x3e1ce0 = _0x3865f("RoundShowEndState");
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "f2bc28rtB9PboH3EcXRbYTY", 'SpinState', undefined);
      var _0x256523;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, '71cd1bOB8RJqob27/UTwaX8', "UnshowPrepareState", undefined);
      var _0x27ec4b = _0x4b56bb.ccclass;
      _0x256523 = _0x27ec4b("UnshowPrepareState");
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, 'cad17NpL1BPUqMW7GIDZdVo', 'WaitReadyState', undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, 'd1aa0HhzrRAyYg7IGhtWeWd', 'WaitResState', undefined);
      _0x2189a4._RF.pop();
      var _0x23429b = function () {
        function _0x59509c() {
          this._registry = {};
          this._moduleCache = {};
        }
        var _0x3a767c = _0x59509c.prototype;
        _0x3a767c.define = function (_0x571599, _0x249e9e, _0x27e362) {
          this._registry[_0x571599] = {
            'factory': _0x249e9e,
            'resolveMap': _0x27e362
          };
        };
        _0x3a767c.require = function (_0x38a128) {
          return this._require(_0x38a128);
        };
        _0x3a767c.throwInvalidWrapper = function (_0x759bbe, _0x5717f5) {
          throw new Error("Module '" + _0x759bbe + "' imported from '" + _0x5717f5 + "' is expected be an ESM-wrapped CommonJS module but it doesn't.");
        };
        _0x3a767c._require = function (_0x480f0c, _0x1e7655) {
          var _0x1d07ef = this._moduleCache[_0x480f0c];
          if (_0x1d07ef) {
            return _0x1d07ef.exports;
          }
          var _0x3207a5 = {
            'id': _0x480f0c,
            'exports': {}
          };
          this._moduleCache[_0x480f0c] = _0x3207a5;
          this._tryModuleLoad(_0x3207a5, _0x480f0c);
          return _0x3207a5.exports;
        };
        _0x3a767c._resolve = function (_0x38d28f, _0x16c2d8) {
          return this._resolveFromInfos(_0x38d28f, _0x16c2d8) || this._throwUnresolved(_0x38d28f, _0x16c2d8);
        };
        _0x3a767c._resolveFromInfos = function (_0x38ac6d, _0x378e45) {
          var _0x11ea11;
          var _0x4d8af9;
          return _0x38ac6d in cjsInfos ? _0x38ac6d : _0x378e45 && null != (_0x11ea11 = null == (_0x4d8af9 = cjsInfos[_0x378e45]) ? undefined : _0x4d8af9.resolveCache[_0x38ac6d]) ? _0x11ea11 : undefined;
        };
        _0x3a767c._tryModuleLoad = function (_0x217ba8, _0x558e4d) {
          var _0x140480 = true;
          try {
            this._load(_0x217ba8, _0x558e4d);
            _0x140480 = false;
          } finally {
            if (_0x140480) {
              delete this._moduleCache[_0x558e4d];
            }
          }
        };
        _0x3a767c._load = function (_0x217275, _0x198f52) {
          var _0x16199b = this._loadWrapper(_0x198f52);
          var _0x37dac9 = _0x16199b.factory;
          var _0xfb9836 = _0x16199b.resolveMap;
          var _0x36a8b3 = this._createRequire(_0x217275);
          var _0x496fc2 = _0xfb9836 ? this._createRequireWithResolveMap("function" == typeof _0xfb9836 ? _0xfb9836() : _0xfb9836, _0x36a8b3) : _0x36a8b3;
          _0x37dac9(_0x217275.exports, _0x496fc2, _0x217275);
        };
        _0x3a767c._loadWrapper = function (_0x1f8258) {
          return _0x1f8258 in this._registry ? this._registry[_0x1f8258] : this._loadHostProvidedModules(_0x1f8258);
        };
        _0x3a767c._loadHostProvidedModules = function (_0x3b357b) {
          return {
            'factory': function (_0x76249c, _0x43669c, _0x5dc858) {
              if ("undefined" == typeof require) {
                throw new Error("Current environment does not provide a require() for requiring '" + _0x3b357b + "'.");
              }
              try {
                _0x5dc858.exports = require(_0x3b357b);
              } catch (_0xdbd571) {
                throw new Error("Exception thrown when calling host defined require('" + _0x3b357b + "').", {
                  'cause': _0xdbd571
                });
              }
            }
          };
        };
        _0x3a767c._createRequire = function (_0x18599d) {
          var _0xc4a8c1 = this;
          return function (_0x460770) {
            return _0xc4a8c1._require(_0x460770, _0x18599d);
          };
        };
        _0x3a767c._createRequireWithResolveMap = function (_0x32d276, _0x1be8af) {
          return function (_0x575008) {
            var _0xfceefb = _0x32d276[_0x575008];
            if (_0xfceefb) {
              return _0x1be8af(_0xfceefb);
            }
            throw new Error("Unresolved specifier " + _0x575008);
          };
        };
        _0x3a767c._throwUnresolved = function (_0x2461e6, _0x4ced9a) {
          throw new Error("Unable to resolve " + _0x2461e6 + " from " + parent + '.');
        };
        return _0x59509c;
      }();
      var _0x12e126 = new _0x23429b();
      var _0x4d4beb;
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/long/src/long.js", function (_0x26ee3f, _0x308d7c, _0x36ad3f, _0x387b0a, _0x4293ac) {
        _0x36ad3f.exports = _0x279373;
        var _0x223e70 = null;
        try {
          _0x223e70 = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0x0, 0x61, 0x73, 0x6d, 0x1, 0x0, 0x0, 0x0, 0x1, 0xd, 0x2, 0x60, 0x0, 0x1, 0x7f, 0x60, 0x4, 0x7f, 0x7f, 0x7f, 0x7f, 0x1, 0x7f, 0x3, 0x7, 0x6, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x6, 0x6, 0x1, 0x7f, 0x1, 0x41, 0x0, 0xb, 0x7, 0x32, 0x6, 0x3, 0x6d, 0x75, 0x6c, 0x0, 0x1, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x73, 0x0, 0x2, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x75, 0x0, 0x3, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x73, 0x0, 0x4, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x75, 0x0, 0x5, 0x8, 0x67, 0x65, 0x74, 0x5f, 0x68, 0x69, 0x67, 0x68, 0x0, 0x0, 0xa, 0xbf, 0x1, 0x6, 0x4, 0x0, 0x23, 0x0, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7e, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7f, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x80, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x81, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x82, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb])), {}).exports;
        } catch (_0x42dd77) {}
        function _0x279373(_0x2121b8, _0x572516, _0x466425) {
          this.low = 0x0 | _0x2121b8;
          this.high = 0x0 | _0x572516;
          this.unsigned = !!_0x466425;
        }
        function _0x1ab545(_0x13200b) {
          return true === (_0x13200b && _0x13200b.__isLong__);
        }
        _0x279373.prototype.__isLong__;
        Object.defineProperty(_0x279373.prototype, '__isLong__', {
          'value': true
        });
        _0x279373.isLong = _0x1ab545;
        var _0x5e4afe = {};
        var _0x4a93f1 = {};
        function _0x36291f(_0xc4cc05, _0x4425b0) {
          var _0x25bdbe;
          var _0x2b7614;
          var _0x3bfd39;
          return _0x4425b0 ? (_0x3bfd39 = 0x0 <= (_0xc4cc05 >>>= 0x0) && _0xc4cc05 < 0x100) && (_0x2b7614 = _0x4a93f1[_0xc4cc05]) ? _0x2b7614 : (_0x25bdbe = new _0x279373(_0xc4cc05, (0x0 | _0xc4cc05) < 0x0 ? -0x1 : 0x0, true), _0x3bfd39 && (_0x4a93f1[_0xc4cc05] = _0x25bdbe), _0x25bdbe) : (_0x3bfd39 = -0x80 <= (_0xc4cc05 |= 0x0) && _0xc4cc05 < 0x80) && (_0x2b7614 = _0x5e4afe[_0xc4cc05]) ? _0x2b7614 : (_0x25bdbe = new _0x279373(_0xc4cc05, _0xc4cc05 < 0x0 ? -0x1 : 0x0, false), _0x3bfd39 && (_0x5e4afe[_0xc4cc05] = _0x25bdbe), _0x25bdbe);
        }
        function _0x1a4d12(_0x49fc66, _0x3e6c9f) {
          if (isNaN(_0x49fc66)) {
            return _0x3e6c9f ? _0x5884a0 : _0x247be8;
          }
          if (_0x3e6c9f) {
            if (_0x49fc66 < 0x0) {
              return _0x5884a0;
            }
            if (_0x49fc66 >= 18446744073709552000) {
              return _0x30c235;
            }
          } else {
            if (_0x49fc66 <= -9223372036854776000) {
              return _0x4ee820;
            }
            if (_0x49fc66 + 0x1 >= 9223372036854776000) {
              return _0x5af19;
            }
          }
          return _0x49fc66 < 0x0 ? _0x1a4d12(-_0x49fc66, _0x3e6c9f).neg() : new _0x279373(_0x49fc66 % 0x100000000 | 0x0, _0x49fc66 / 0x100000000 | 0x0, _0x3e6c9f);
        }
        function _0x5078c0(_0x12b351, _0x5b8479, _0x19ffef) {
          return new _0x279373(_0x12b351, _0x5b8479, _0x19ffef);
        }
        _0x279373.fromInt = _0x36291f;
        _0x279373.fromNumber = _0x1a4d12;
        _0x279373.fromBits = _0x5078c0;
        var _0x3a22a7 = Math.pow;
        function _0x33835a(_0xe6e894, _0x10e8b2, _0x48dada) {
          if (0x0 === _0xe6e894.length) {
            throw Error("empty string");
          }
          if ("NaN" === _0xe6e894 || "Infinity" === _0xe6e894 || "+Infinity" === _0xe6e894 || "-Infinity" === _0xe6e894) {
            return _0x247be8;
          }
          if ("number" == typeof _0x10e8b2) {
            _0x48dada = _0x10e8b2;
            _0x10e8b2 = false;
          } else {
            _0x10e8b2 = !!_0x10e8b2;
          }
          if ((_0x48dada = _0x48dada || 0xa) < 0x2 || 0x24 < _0x48dada) {
            throw RangeError("radix");
          }
          var _0x39a003;
          if ((_0x39a003 = _0xe6e894.indexOf('-')) > 0x0) {
            throw Error("interior hyphen");
          }
          if (0x0 === _0x39a003) {
            return _0x33835a(_0xe6e894.substring(0x1), _0x10e8b2, _0x48dada).neg();
          }
          var _0x14e99a = _0x1a4d12(_0x3a22a7(_0x48dada, 0x8));
          var _0x426c5d = _0x247be8;
          for (var _0x43d8dd = 0x0; _0x43d8dd < _0xe6e894.length; _0x43d8dd += 0x8) {
            var _0xdaea1c = Math.min(0x8, _0xe6e894.length - _0x43d8dd);
            var _0x3ad4a6 = parseInt(_0xe6e894.substring(_0x43d8dd, _0x43d8dd + _0xdaea1c), _0x48dada);
            if (_0xdaea1c < 0x8) {
              var _0xebde05 = _0x1a4d12(_0x3a22a7(_0x48dada, _0xdaea1c));
              _0x426c5d = _0x426c5d.mul(_0xebde05).add(_0x1a4d12(_0x3ad4a6));
            } else {
              _0x426c5d = (_0x426c5d = _0x426c5d.mul(_0x14e99a)).add(_0x1a4d12(_0x3ad4a6));
            }
          }
          _0x426c5d.unsigned = _0x10e8b2;
          return _0x426c5d;
        }
        function _0x367064(_0x44a8bc, _0x2e3008) {
          return 'number' == typeof _0x44a8bc ? _0x1a4d12(_0x44a8bc, _0x2e3008) : "string" == typeof _0x44a8bc ? _0x33835a(_0x44a8bc, _0x2e3008) : new _0x279373(_0x44a8bc.low, _0x44a8bc.high, "boolean" == typeof _0x2e3008 ? _0x2e3008 : _0x44a8bc.unsigned);
        }
        _0x279373.fromString = _0x33835a;
        _0x279373.fromValue = _0x367064;
        var _0x494f8c = _0x36291f(16777216);
        var _0x247be8 = _0x36291f(0x0);
        _0x279373.ZERO = _0x247be8;
        var _0x5884a0 = _0x36291f(0x0, true);
        _0x279373.UZERO = _0x5884a0;
        var _0x292214 = _0x36291f(0x1);
        _0x279373.ONE = _0x292214;
        var _0x28bdb6 = _0x36291f(0x1, true);
        _0x279373.UONE = _0x28bdb6;
        var _0x453a8d = _0x36291f(-0x1);
        _0x279373.NEG_ONE = _0x453a8d;
        var _0x5af19 = new _0x279373(-0x1, 0x7fffffff, false);
        _0x279373.MAX_VALUE = _0x5af19;
        var _0x30c235 = new _0x279373(-0x1, -0x1, true);
        _0x279373.MAX_UNSIGNED_VALUE = _0x30c235;
        var _0x4ee820 = new _0x279373(0x0, -0x80000000, false);
        _0x279373.MIN_VALUE = _0x4ee820;
        var _0x4ba948 = _0x279373.prototype;
        _0x4ba948.toInt = function () {
          return this.unsigned ? this.low >>> 0x0 : this.low;
        };
        _0x4ba948.toNumber = function () {
          return this.unsigned ? (this.high >>> 0x0) * 0x100000000 + (this.low >>> 0x0) : this.high * 0x100000000 + (this.low >>> 0x0);
        };
        _0x4ba948.toString = function (_0x59af81) {
          if ((_0x59af81 = _0x59af81 || 0xa) < 0x2 || 0x24 < _0x59af81) {
            throw RangeError("radix");
          }
          if (this.isZero()) {
            return '0';
          }
          if (this.isNegative()) {
            if (this.eq(_0x4ee820)) {
              var _0x377c98 = _0x1a4d12(_0x59af81);
              var _0x4b4493 = this.div(_0x377c98);
              var _0x527f44 = _0x4b4493.mul(_0x377c98).sub(this);
              return _0x4b4493.toString(_0x59af81) + _0x527f44.toInt().toString(_0x59af81);
            }
            return '-' + this.neg().toString(_0x59af81);
          }
          var _0x50d771 = _0x1a4d12(_0x3a22a7(_0x59af81, 0x6), this.unsigned);
          var _0x31dc55 = this;
          for (var _0x479ebc = '';;) {
            var _0x1afcfb = _0x31dc55.div(_0x50d771);
            var _0x2c0aec = (_0x31dc55.sub(_0x1afcfb.mul(_0x50d771)).toInt() >>> 0x0).toString(_0x59af81);
            if ((_0x31dc55 = _0x1afcfb).isZero()) {
              return _0x2c0aec + _0x479ebc;
            }
            for (; _0x2c0aec.length < 0x6;) {
              _0x2c0aec = '0' + _0x2c0aec;
            }
            _0x479ebc = '' + _0x2c0aec + _0x479ebc;
          }
        };
        _0x4ba948.getHighBits = function () {
          return this.high;
        };
        _0x4ba948.getHighBitsUnsigned = function () {
          return this.high >>> 0x0;
        };
        _0x4ba948.getLowBits = function () {
          return this.low;
        };
        _0x4ba948.getLowBitsUnsigned = function () {
          return this.low >>> 0x0;
        };
        _0x4ba948.getNumBitsAbs = function () {
          if (this.isNegative()) {
            return this.eq(_0x4ee820) ? 0x40 : this.neg().getNumBitsAbs();
          }
          var _0xc2b2b6 = 0x0 != this.high ? this.high : this.low;
          for (var _0x45c065 = 0x1f; _0x45c065 > 0x0 && 0x0 == (_0xc2b2b6 & 0x1 << _0x45c065); _0x45c065--) {
            ;
          }
          return 0x0 != this.high ? _0x45c065 + 0x21 : _0x45c065 + 0x1;
        };
        _0x4ba948.isZero = function () {
          return 0x0 === this.high && 0x0 === this.low;
        };
        _0x4ba948.eqz = _0x4ba948.isZero;
        _0x4ba948.isNegative = function () {
          return !this.unsigned && this.high < 0x0;
        };
        _0x4ba948.isPositive = function () {
          return this.unsigned || this.high >= 0x0;
        };
        _0x4ba948.isOdd = function () {
          return 0x1 == (0x1 & this.low);
        };
        _0x4ba948.isEven = function () {
          return 0x0 == (0x1 & this.low);
        };
        _0x4ba948.equals = function (_0x317dc4) {
          if (!(true === (_0x317dc4 && _0x317dc4.__isLong__))) {
            _0x317dc4 = 'number' == typeof _0x317dc4 ? _0x1a4d12(_0x317dc4, undefined) : "string" == typeof _0x317dc4 ? _0x33835a(_0x317dc4, undefined) : new _0x279373(_0x317dc4.low, _0x317dc4.high, _0x317dc4.unsigned);
          }
          return (this.unsigned === _0x317dc4.unsigned || this.high >>> 0x1f != 0x1 || _0x317dc4.high >>> 0x1f != 0x1) && this.high === _0x317dc4.high && this.low === _0x317dc4.low;
        };
        _0x4ba948.eq = _0x4ba948.equals;
        _0x4ba948.notEquals = function (_0x2e5b84) {
          return !this.eq(_0x2e5b84);
        };
        _0x4ba948.neq = _0x4ba948.notEquals;
        _0x4ba948.ne = _0x4ba948.notEquals;
        _0x4ba948.lessThan = function (_0x308d78) {
          return this.comp(_0x308d78) < 0x0;
        };
        _0x4ba948.lt = _0x4ba948.lessThan;
        _0x4ba948.lessThanOrEqual = function (_0x2a5d10) {
          return this.comp(_0x2a5d10) <= 0x0;
        };
        _0x4ba948.lte = _0x4ba948.lessThanOrEqual;
        _0x4ba948.le = _0x4ba948.lessThanOrEqual;
        _0x4ba948.greaterThan = function (_0x56afbd) {
          return this.comp(_0x56afbd) > 0x0;
        };
        _0x4ba948.gt = _0x4ba948.greaterThan;
        _0x4ba948.greaterThanOrEqual = function (_0x35abf8) {
          return this.comp(_0x35abf8) >= 0x0;
        };
        _0x4ba948.gte = _0x4ba948.greaterThanOrEqual;
        _0x4ba948.ge = _0x4ba948.greaterThanOrEqual;
        _0x4ba948.compare = function (_0x59264b) {
          if (!(true === (_0x59264b && _0x59264b.__isLong__))) {
            _0x59264b = 'number' == typeof _0x59264b ? _0x1a4d12(_0x59264b, undefined) : "string" == typeof _0x59264b ? _0x33835a(_0x59264b, undefined) : new _0x279373(_0x59264b.low, _0x59264b.high, _0x59264b.unsigned);
          }
          if (this.eq(_0x59264b)) {
            return 0x0;
          }
          var _0x186569 = this.isNegative();
          var _0x284132 = _0x59264b.isNegative();
          return _0x186569 && !_0x284132 ? -0x1 : !_0x186569 && _0x284132 ? 0x1 : this.unsigned ? _0x59264b.high >>> 0x0 > this.high >>> 0x0 || _0x59264b.high === this.high && _0x59264b.low >>> 0x0 > this.low >>> 0x0 ? -0x1 : 0x1 : this.sub(_0x59264b).isNegative() ? -0x1 : 0x1;
        };
        _0x4ba948.comp = _0x4ba948.compare;
        _0x4ba948.negate = function () {
          return !this.unsigned && this.eq(_0x4ee820) ? _0x4ee820 : this.not().add(_0x292214);
        };
        _0x4ba948.neg = _0x4ba948.negate;
        _0x4ba948.add = function (_0x293994) {
          if (!(true === (_0x293994 && _0x293994.__isLong__))) {
            _0x293994 = 'number' == typeof _0x293994 ? _0x1a4d12(_0x293994, undefined) : "string" == typeof _0x293994 ? _0x33835a(_0x293994, undefined) : new _0x279373(_0x293994.low, _0x293994.high, _0x293994.unsigned);
          }
          var _0x8c5bd = this.high >>> 0x10;
          var _0x4d5182 = 0xffff & this.high;
          var _0x1caf86 = this.low >>> 0x10;
          var _0x489847 = 0xffff & this.low;
          var _0x16790e = _0x293994.high >>> 0x10;
          var _0x348a31 = 0xffff & _0x293994.high;
          var _0x1a850c = _0x293994.low >>> 0x10;
          var _0x537b73 = 0x0;
          var _0x2d7d39 = 0x0;
          var _0x297d3f = 0x0;
          var _0x4df828 = 0x0;
          _0x297d3f += (_0x4df828 += _0x489847 + (0xffff & _0x293994.low)) >>> 0x10;
          _0x2d7d39 += (_0x297d3f += _0x1caf86 + _0x1a850c) >>> 0x10;
          _0x537b73 += (_0x2d7d39 += _0x4d5182 + _0x348a31) >>> 0x10;
          _0x537b73 += _0x8c5bd + _0x16790e;
          return new _0x279373((_0x297d3f &= 0xffff) << 0x10 | (_0x4df828 &= 0xffff), (_0x537b73 &= 0xffff) << 0x10 | (_0x2d7d39 &= 0xffff), this.unsigned);
        };
        _0x4ba948.subtract = function (_0x39c07a) {
          if (!(true === (_0x39c07a && _0x39c07a.__isLong__))) {
            _0x39c07a = 'number' == typeof _0x39c07a ? _0x1a4d12(_0x39c07a, undefined) : "string" == typeof _0x39c07a ? _0x33835a(_0x39c07a, undefined) : new _0x279373(_0x39c07a.low, _0x39c07a.high, _0x39c07a.unsigned);
          }
          return this.add(_0x39c07a.neg());
        };
        _0x4ba948.sub = _0x4ba948.subtract;
        _0x4ba948.multiply = function (_0x397943) {
          if (this.isZero()) {
            return _0x247be8;
          }
          if (!(true === (_0x397943 && _0x397943.__isLong__))) {
            _0x397943 = 'number' == typeof _0x397943 ? _0x1a4d12(_0x397943, undefined) : "string" == typeof _0x397943 ? _0x33835a(_0x397943, undefined) : new _0x279373(_0x397943.low, _0x397943.high, _0x397943.unsigned);
          }
          if (_0x223e70) {
            return new _0x279373(_0x223e70.mul(this.low, this.high, _0x397943.low, _0x397943.high), _0x223e70.get_high(), this.unsigned);
          }
          if (_0x397943.isZero()) {
            return _0x247be8;
          }
          if (this.eq(_0x4ee820)) {
            return _0x397943.isOdd() ? _0x4ee820 : _0x247be8;
          }
          if (_0x397943.eq(_0x4ee820)) {
            return this.isOdd() ? _0x4ee820 : _0x247be8;
          }
          if (this.isNegative()) {
            return _0x397943.isNegative() ? this.neg().mul(_0x397943.neg()) : this.neg().mul(_0x397943).neg();
          }
          if (_0x397943.isNegative()) {
            return this.mul(_0x397943.neg()).neg();
          }
          if (this.lt(_0x494f8c) && _0x397943.lt(_0x494f8c)) {
            return _0x1a4d12(this.toNumber() * _0x397943.toNumber(), this.unsigned);
          }
          var _0x48fc0b = this.high >>> 0x10;
          var _0x35b23d = 0xffff & this.high;
          var _0x33c38c = this.low >>> 0x10;
          var _0x50514c = 0xffff & this.low;
          var _0x310067 = _0x397943.high >>> 0x10;
          var _0x25c732 = 0xffff & _0x397943.high;
          var _0xb1f201 = _0x397943.low >>> 0x10;
          var _0x503044 = 0xffff & _0x397943.low;
          var _0xab5fad = 0x0;
          var _0x26a28b = 0x0;
          var _0x2bc0dd = 0x0;
          var _0x5d3d03 = 0x0;
          _0x2bc0dd += (_0x5d3d03 += _0x50514c * _0x503044) >>> 0x10;
          _0x26a28b += (_0x2bc0dd += _0x33c38c * _0x503044) >>> 0x10;
          _0x2bc0dd &= 0xffff;
          _0x26a28b += (_0x2bc0dd += _0x50514c * _0xb1f201) >>> 0x10;
          _0xab5fad += (_0x26a28b += _0x35b23d * _0x503044) >>> 0x10;
          _0x26a28b &= 0xffff;
          _0xab5fad += (_0x26a28b += _0x33c38c * _0xb1f201) >>> 0x10;
          _0x26a28b &= 0xffff;
          _0xab5fad += (_0x26a28b += _0x50514c * _0x25c732) >>> 0x10;
          _0xab5fad += _0x48fc0b * _0x503044 + _0x35b23d * _0xb1f201 + _0x33c38c * _0x25c732 + _0x50514c * _0x310067;
          return new _0x279373((_0x2bc0dd &= 0xffff) << 0x10 | (_0x5d3d03 &= 0xffff), (_0xab5fad &= 0xffff) << 0x10 | (_0x26a28b &= 0xffff), this.unsigned);
        };
        _0x4ba948.mul = _0x4ba948.multiply;
        _0x4ba948.divide = function (_0x18e308) {
          if (!(true === (_0x18e308 && _0x18e308.__isLong__))) {
            _0x18e308 = 'number' == typeof _0x18e308 ? _0x1a4d12(_0x18e308, undefined) : "string" == typeof _0x18e308 ? _0x33835a(_0x18e308, undefined) : new _0x279373(_0x18e308.low, _0x18e308.high, _0x18e308.unsigned);
          }
          if (_0x18e308.isZero()) {
            throw Error("division by zero");
          }
          var _0x26d1a7;
          var _0x426953;
          var _0x225226;
          if (_0x223e70) {
            return this.unsigned || -0x80000000 !== this.high || -0x1 !== _0x18e308.low || -0x1 !== _0x18e308.high ? new _0x279373((this.unsigned ? _0x223e70.div_u : _0x223e70.div_s)(this.low, this.high, _0x18e308.low, _0x18e308.high), _0x223e70.get_high(), this.unsigned) : this;
          }
          if (this.isZero()) {
            return this.unsigned ? _0x5884a0 : _0x247be8;
          }
          if (this.unsigned) {
            if (!_0x18e308.unsigned) {
              _0x18e308 = _0x18e308.toUnsigned();
            }
            if (_0x18e308.gt(this)) {
              return _0x5884a0;
            }
            if (_0x18e308.gt(this.shru(0x1))) {
              return _0x28bdb6;
            }
            _0x225226 = _0x5884a0;
          } else {
            if (this.eq(_0x4ee820)) {
              return _0x18e308.eq(_0x292214) || _0x18e308.eq(_0x453a8d) ? _0x4ee820 : _0x18e308.eq(_0x4ee820) ? _0x292214 : (_0x26d1a7 = this.shr(0x1).div(_0x18e308).shl(0x1)).eq(_0x247be8) ? _0x18e308.isNegative() ? _0x292214 : _0x453a8d : (_0x426953 = this.sub(_0x18e308.mul(_0x26d1a7)), _0x225226 = _0x26d1a7.add(_0x426953.div(_0x18e308)));
            }
            if (_0x18e308.eq(_0x4ee820)) {
              return this.unsigned ? _0x5884a0 : _0x247be8;
            }
            if (this.isNegative()) {
              return _0x18e308.isNegative() ? this.neg().div(_0x18e308.neg()) : this.neg().div(_0x18e308).neg();
            }
            if (_0x18e308.isNegative()) {
              return this.div(_0x18e308.neg()).neg();
            }
            _0x225226 = _0x247be8;
          }
          for (_0x426953 = this; _0x426953.gte(_0x18e308);) {
            _0x26d1a7 = Math.max(0x1, Math.floor(_0x426953.toNumber() / _0x18e308.toNumber()));
            var _0x320d3c = Math.ceil(Math.log(_0x26d1a7) / Math.LN2);
            var _0x2c3f97 = _0x320d3c <= 0x30 ? 0x1 : _0x3a22a7(0x2, _0x320d3c - 0x30);
            var _0xaed065 = _0x1a4d12(_0x26d1a7);
            for (var _0x2aa0e7 = _0xaed065.mul(_0x18e308); _0x2aa0e7.isNegative() || _0x2aa0e7.gt(_0x426953);) {
              _0x2aa0e7 = (_0xaed065 = _0x1a4d12(_0x26d1a7 -= _0x2c3f97, this.unsigned)).mul(_0x18e308);
            }
            if (_0xaed065.isZero()) {
              _0xaed065 = _0x292214;
            }
            _0x225226 = _0x225226.add(_0xaed065);
            _0x426953 = _0x426953.sub(_0x2aa0e7);
          }
          return _0x225226;
        };
        _0x4ba948.div = _0x4ba948.divide;
        _0x4ba948.modulo = function (_0x41bb4e) {
          if (!(true === (_0x41bb4e && _0x41bb4e.__isLong__))) {
            _0x41bb4e = 'number' == typeof _0x41bb4e ? _0x1a4d12(_0x41bb4e, undefined) : "string" == typeof _0x41bb4e ? _0x33835a(_0x41bb4e, undefined) : new _0x279373(_0x41bb4e.low, _0x41bb4e.high, _0x41bb4e.unsigned);
          }
          return _0x223e70 ? new _0x279373((this.unsigned ? _0x223e70.rem_u : _0x223e70.rem_s)(this.low, this.high, _0x41bb4e.low, _0x41bb4e.high), _0x223e70.get_high(), this.unsigned) : this.sub(this.div(_0x41bb4e).mul(_0x41bb4e));
        };
        _0x4ba948.mod = _0x4ba948.modulo;
        _0x4ba948.rem = _0x4ba948.modulo;
        _0x4ba948.not = function () {
          return new _0x279373(~this.low, ~this.high, this.unsigned);
        };
        _0x4ba948.and = function (_0x44344c) {
          if (!(true === (_0x44344c && _0x44344c.__isLong__))) {
            _0x44344c = 'number' == typeof _0x44344c ? _0x1a4d12(_0x44344c, undefined) : "string" == typeof _0x44344c ? _0x33835a(_0x44344c, undefined) : new _0x279373(_0x44344c.low, _0x44344c.high, _0x44344c.unsigned);
          }
          return new _0x279373(this.low & _0x44344c.low, this.high & _0x44344c.high, this.unsigned);
        };
        _0x4ba948.or = function (_0x176dc2) {
          if (!(true === (_0x176dc2 && _0x176dc2.__isLong__))) {
            _0x176dc2 = 'number' == typeof _0x176dc2 ? _0x1a4d12(_0x176dc2, undefined) : "string" == typeof _0x176dc2 ? _0x33835a(_0x176dc2, undefined) : new _0x279373(_0x176dc2.low, _0x176dc2.high, _0x176dc2.unsigned);
          }
          return new _0x279373(this.low | _0x176dc2.low, this.high | _0x176dc2.high, this.unsigned);
        };
        _0x4ba948.xor = function (_0x308d64) {
          if (!(true === (_0x308d64 && _0x308d64.__isLong__))) {
            _0x308d64 = 'number' == typeof _0x308d64 ? _0x1a4d12(_0x308d64, undefined) : "string" == typeof _0x308d64 ? _0x33835a(_0x308d64, undefined) : new _0x279373(_0x308d64.low, _0x308d64.high, _0x308d64.unsigned);
          }
          return new _0x279373(this.low ^ _0x308d64.low, this.high ^ _0x308d64.high, this.unsigned);
        };
        _0x4ba948.shiftLeft = function (_0x4fd31e) {
          if (true === (_0x4fd31e && _0x4fd31e.__isLong__)) {
            _0x4fd31e = _0x4fd31e.toInt();
          }
          return 0x0 == (_0x4fd31e &= 0x3f) ? this : _0x4fd31e < 0x20 ? new _0x279373(this.low << _0x4fd31e, this.high << _0x4fd31e | this.low >>> 0x20 - _0x4fd31e, this.unsigned) : new _0x279373(0x0, this.low << _0x4fd31e - 0x20, this.unsigned);
        };
        _0x4ba948.shl = _0x4ba948.shiftLeft;
        _0x4ba948.shiftRight = function (_0x2a761a) {
          if (true === (_0x2a761a && _0x2a761a.__isLong__)) {
            _0x2a761a = _0x2a761a.toInt();
          }
          return 0x0 == (_0x2a761a &= 0x3f) ? this : _0x2a761a < 0x20 ? new _0x279373(this.low >>> _0x2a761a | this.high << 0x20 - _0x2a761a, this.high >> _0x2a761a, this.unsigned) : new _0x279373(this.high >> _0x2a761a - 0x20, this.high >= 0x0 ? 0x0 : -0x1, this.unsigned);
        };
        _0x4ba948.shr = _0x4ba948.shiftRight;
        _0x4ba948.shiftRightUnsigned = function (_0x37dd4d) {
          if (true === (_0x37dd4d && _0x37dd4d.__isLong__)) {
            _0x37dd4d = _0x37dd4d.toInt();
          }
          if (0x0 === (_0x37dd4d &= 0x3f)) {
            return this;
          }
          var _0x44bb8f = this.high;
          return _0x37dd4d < 0x20 ? new _0x279373(this.low >>> _0x37dd4d | _0x44bb8f << 0x20 - _0x37dd4d, _0x44bb8f >>> _0x37dd4d, this.unsigned) : new _0x279373(0x20 === _0x37dd4d ? _0x44bb8f : _0x44bb8f >>> _0x37dd4d - 0x20, 0x0, this.unsigned);
        };
        _0x4ba948.shru = _0x4ba948.shiftRightUnsigned;
        _0x4ba948.shr_u = _0x4ba948.shiftRightUnsigned;
        _0x4ba948.toSigned = function () {
          return this.unsigned ? new _0x279373(this.low, this.high, false) : this;
        };
        _0x4ba948.toUnsigned = function () {
          return this.unsigned ? this : new _0x279373(this.low, this.high, true);
        };
        _0x4ba948.toBytes = function (_0x75c0c1) {
          return _0x75c0c1 ? this.toBytesLE() : this.toBytesBE();
        };
        _0x4ba948.toBytesLE = function () {
          var _0x113003 = this.high;
          var _0x495bb4 = this.low;
          return [0xff & _0x495bb4, _0x495bb4 >>> 0x8 & 0xff, _0x495bb4 >>> 0x10 & 0xff, _0x495bb4 >>> 0x18, 0xff & _0x113003, _0x113003 >>> 0x8 & 0xff, _0x113003 >>> 0x10 & 0xff, _0x113003 >>> 0x18];
        };
        _0x4ba948.toBytesBE = function () {
          var _0x48640f = this.high;
          var _0x59e675 = this.low;
          return [_0x48640f >>> 0x18, _0x48640f >>> 0x10 & 0xff, _0x48640f >>> 0x8 & 0xff, 0xff & _0x48640f, _0x59e675 >>> 0x18, _0x59e675 >>> 0x10 & 0xff, _0x59e675 >>> 0x8 & 0xff, 0xff & _0x59e675];
        };
        _0x279373.fromBytes = function (_0x10ef0e, _0x49dfdf, _0x2a91aa) {
          return _0x2a91aa ? _0x279373.fromBytesLE(_0x10ef0e, _0x49dfdf) : _0x279373.fromBytesBE(_0x10ef0e, _0x49dfdf);
        };
        _0x279373.fromBytesLE = function (_0x26850b, _0x2784db) {
          return new _0x279373(_0x26850b[0x0] | _0x26850b[0x1] << 0x8 | _0x26850b[0x2] << 0x10 | _0x26850b[0x3] << 0x18, _0x26850b[0x4] | _0x26850b[0x5] << 0x8 | _0x26850b[0x6] << 0x10 | _0x26850b[0x7] << 0x18, _0x2784db);
        };
        _0x279373.fromBytesBE = function (_0x507846, _0x483244) {
          return new _0x279373(_0x507846[0x4] << 0x18 | _0x507846[0x5] << 0x10 | _0x507846[0x6] << 0x8 | _0x507846[0x7], _0x507846[0x0] << 0x18 | _0x507846[0x1] << 0x10 | _0x507846[0x2] << 0x8 | _0x507846[0x3], _0x483244);
        };
        _0x4d4beb = _0x36ad3f.exports;
      }, {});
      _0x12e126.require("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/long/src/long.js");
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js", function (_0x223459, _0x52b418, _0x1fc9b9, _0x3fc738, _0x214393) {
        _0x1fc9b9.exports = function (_0x1a4d5e, _0x10b8b3) {
          var _0x50126e = new Array(arguments.length - 0x1);
          var _0xf44ec0 = 0x0;
          var _0x53cc67 = 0x2;
          var _0x5a7156 = true;
          for (; _0x53cc67 < arguments.length;) {
            _0x50126e[_0xf44ec0++] = arguments[_0x53cc67++];
          }
          return new Promise(function (_0x37fd2f, _0x56f20a) {
            _0x50126e[_0xf44ec0] = function (_0x4796f6) {
              if (_0x5a7156) {
                _0x5a7156 = false;
                if (_0x4796f6) {
                  _0x56f20a(_0x4796f6);
                } else {
                  var _0xd30127 = new Array(arguments.length - 0x1);
                  for (var _0x554490 = 0x0; _0x554490 < _0xd30127.length;) {
                    _0xd30127[_0x554490++] = arguments[_0x554490];
                  }
                  _0x37fd2f.apply(null, _0xd30127);
                }
              }
            };
            try {
              _0x1a4d5e.apply(_0x10b8b3 || null, _0x50126e);
            } catch (_0x4ef0bc) {
              if (_0x5a7156) {
                _0x5a7156 = false;
                _0x56f20a(_0x4ef0bc);
              }
            }
          });
        };
        _0x1fc9b9.exports;
      }, {});
      _0x12e126.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js', function (_0x9756ab, _0x4f12c5, _0x54f269, _0x217d5d, _0xebd53) {
        _0x9756ab.length = function (_0x55cb79) {
          var _0x4d1bde = _0x55cb79.length;
          if (!_0x4d1bde) {
            return 0x0;
          }
          for (var _0xc232d = 0x0; --_0x4d1bde % 0x4 > 0x1 && '=' === _0x55cb79.charAt(_0x4d1bde);) {
            ++_0xc232d;
          }
          return Math.ceil(0x3 * _0x55cb79.length) / 0x4 - _0xc232d;
        };
        var _0x254154 = new Array(0x40);
        var _0x193b34 = new Array(0x7b);
        for (var _0x352c0e = 0x0; _0x352c0e < 0x40;) {
          _0x193b34[_0x254154[_0x352c0e] = _0x352c0e < 0x1a ? _0x352c0e + 0x41 : _0x352c0e < 0x34 ? _0x352c0e + 0x47 : _0x352c0e < 0x3e ? _0x352c0e - 0x4 : _0x352c0e - 0x3b | 0x2b] = _0x352c0e++;
        }
        _0x9756ab.encode = function (_0x4e5eac, _0x25387b, _0xa4aeca) {
          var _0x14a131;
          var _0x5590f3 = null;
          var _0x13bcc2 = [];
          var _0x20eb00 = 0x0;
          for (var _0x586cc9 = 0x0; _0x25387b < _0xa4aeca;) {
            var _0x596ee3 = _0x4e5eac[_0x25387b++];
            switch (_0x586cc9) {
              case 0x0:
                _0x13bcc2[_0x20eb00++] = _0x254154[_0x596ee3 >> 0x2];
                _0x14a131 = (0x3 & _0x596ee3) << 0x4;
                _0x586cc9 = 0x1;
                break;
              case 0x1:
                _0x13bcc2[_0x20eb00++] = _0x254154[_0x14a131 | _0x596ee3 >> 0x4];
                _0x14a131 = (0xf & _0x596ee3) << 0x2;
                _0x586cc9 = 0x2;
                break;
              case 0x2:
                _0x13bcc2[_0x20eb00++] = _0x254154[_0x14a131 | _0x596ee3 >> 0x6];
                _0x13bcc2[_0x20eb00++] = _0x254154[0x3f & _0x596ee3];
                _0x586cc9 = 0x0;
            }
            if (_0x20eb00 > 0x1fff) {
              (_0x5590f3 || (_0x5590f3 = [])).push(String.fromCharCode.apply(String, _0x13bcc2));
              _0x20eb00 = 0x0;
            }
          }
          if (_0x586cc9) {
            _0x13bcc2[_0x20eb00++] = _0x254154[_0x14a131];
            _0x13bcc2[_0x20eb00++] = 0x3d;
            if (0x1 === _0x586cc9) {
              _0x13bcc2[_0x20eb00++] = 0x3d;
            }
          }
          return _0x5590f3 ? (_0x20eb00 && _0x5590f3.push(String.fromCharCode.apply(String, _0x13bcc2.slice(0x0, _0x20eb00))), _0x5590f3.join('')) : String.fromCharCode.apply(String, _0x13bcc2.slice(0x0, _0x20eb00));
        };
        _0x9756ab.decode = function (_0x1a054e, _0x99d074, _0x1725c5) {
          var _0x3b06b2;
          var _0x5f3472 = _0x1725c5;
          var _0x56d92d = 0x0;
          for (var _0x28ac7c = 0x0; _0x28ac7c < _0x1a054e.length;) {
            var _0x5ad642 = _0x1a054e.charCodeAt(_0x28ac7c++);
            if (0x3d === _0x5ad642 && _0x56d92d > 0x1) {
              break;
            }
            if (undefined === (_0x5ad642 = _0x193b34[_0x5ad642])) {
              throw Error("invalid encoding");
            }
            switch (_0x56d92d) {
              case 0x0:
                _0x3b06b2 = _0x5ad642;
                _0x56d92d = 0x1;
                break;
              case 0x1:
                _0x99d074[_0x1725c5++] = _0x3b06b2 << 0x2 | (0x30 & _0x5ad642) >> 0x4;
                _0x3b06b2 = _0x5ad642;
                _0x56d92d = 0x2;
                break;
              case 0x2:
                _0x99d074[_0x1725c5++] = (0xf & _0x3b06b2) << 0x4 | (0x3c & _0x5ad642) >> 0x2;
                _0x3b06b2 = _0x5ad642;
                _0x56d92d = 0x3;
                break;
              case 0x3:
                _0x99d074[_0x1725c5++] = (0x3 & _0x3b06b2) << 0x6 | _0x5ad642;
                _0x56d92d = 0x0;
            }
          }
          if (0x1 === _0x56d92d) {
            throw Error("invalid encoding");
          }
          return _0x1725c5 - _0x5f3472;
        };
        _0x9756ab.test = function (_0x4bdccf) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(_0x4bdccf);
        };
        _0x54f269.exports;
      }, {});
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js", function (_0x5a4242, _0x3c9578, _0x5975f7, _0x3f5dd2, _0x4d9e15) {
        function _0x18df8e() {
          this._listeners = {};
        }
        _0x5975f7.exports = _0x18df8e;
        _0x18df8e.prototype.on = function (_0x4deba9, _0x39d1ec, _0xe4d739) {
          (this._listeners[_0x4deba9] || (this._listeners[_0x4deba9] = [])).push({
            'fn': _0x39d1ec,
            'ctx': _0xe4d739 || this
          });
          return this;
        };
        _0x18df8e.prototype.off = function (_0x43bfb9, _0x4bdaa6) {
          if (undefined === _0x43bfb9) {
            this._listeners = {};
          } else {
            if (undefined === _0x4bdaa6) {
              this._listeners[_0x43bfb9] = [];
            } else {
              var _0x3ef276 = this._listeners[_0x43bfb9];
              for (var _0x461e52 = 0x0; _0x461e52 < _0x3ef276.length;) {
                if (_0x3ef276[_0x461e52].fn === _0x4bdaa6) {
                  _0x3ef276.splice(_0x461e52, 0x1);
                } else {
                  ++_0x461e52;
                }
              }
            }
          }
          return this;
        };
        _0x18df8e.prototype.emit = function (_0x29410b) {
          var _0x1d9fe5 = this._listeners[_0x29410b];
          if (_0x1d9fe5) {
            var _0x265946 = [];
            for (var _0x2b966a = 0x1; _0x2b966a < arguments.length;) {
              _0x265946.push(arguments[_0x2b966a++]);
            }
            for (_0x2b966a = 0x0; _0x2b966a < _0x1d9fe5.length;) {
              _0x1d9fe5[_0x2b966a].fn.apply(_0x1d9fe5[_0x2b966a++].ctx, _0x265946);
            }
          }
          return this;
        };
        _0x5975f7.exports;
      }, {});
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/@protobufjs/float/index.js", function (_0x465090, _0x1a75aa, _0x475e8e, _0x1a19be, _0x1e4525) {
        function _0x586250(_0x3eee54) {
          if ('undefined' != typeof Float32Array) {
            (function () {
              var _0x396afc = new Float32Array([-0x0]);
              var _0x297731 = new Uint8Array(_0x396afc.buffer);
              var _0x1adf30 = 0x80 === _0x297731[0x3];
              function _0x40b00f(_0x12b5eb, _0x326f9b, _0x7d1afd) {
                _0x396afc[0x0] = _0x12b5eb;
                _0x326f9b[_0x7d1afd] = _0x297731[0x0];
                _0x326f9b[_0x7d1afd + 0x1] = _0x297731[0x1];
                _0x326f9b[_0x7d1afd + 0x2] = _0x297731[0x2];
                _0x326f9b[_0x7d1afd + 0x3] = _0x297731[0x3];
              }
              function _0x4bd8bb(_0x39de32, _0x5615a7, _0xa95f23) {
                _0x396afc[0x0] = _0x39de32;
                _0x5615a7[_0xa95f23] = _0x297731[0x3];
                _0x5615a7[_0xa95f23 + 0x1] = _0x297731[0x2];
                _0x5615a7[_0xa95f23 + 0x2] = _0x297731[0x1];
                _0x5615a7[_0xa95f23 + 0x3] = _0x297731[0x0];
              }
              function _0x2369a4(_0x18ba96, _0x5de294) {
                _0x297731[0x0] = _0x18ba96[_0x5de294];
                _0x297731[0x1] = _0x18ba96[_0x5de294 + 0x1];
                _0x297731[0x2] = _0x18ba96[_0x5de294 + 0x2];
                _0x297731[0x3] = _0x18ba96[_0x5de294 + 0x3];
                return _0x396afc[0x0];
              }
              function _0x21cd06(_0x6d7001, _0x3f6d45) {
                _0x297731[0x3] = _0x6d7001[_0x3f6d45];
                _0x297731[0x2] = _0x6d7001[_0x3f6d45 + 0x1];
                _0x297731[0x1] = _0x6d7001[_0x3f6d45 + 0x2];
                _0x297731[0x0] = _0x6d7001[_0x3f6d45 + 0x3];
                return _0x396afc[0x0];
              }
              _0x3eee54.writeFloatLE = _0x1adf30 ? _0x40b00f : _0x4bd8bb;
              _0x3eee54.writeFloatBE = _0x1adf30 ? _0x4bd8bb : _0x40b00f;
              _0x3eee54.readFloatLE = _0x1adf30 ? _0x2369a4 : _0x21cd06;
              _0x3eee54.readFloatBE = _0x1adf30 ? _0x21cd06 : _0x2369a4;
            })();
          } else {
            (function () {
              function _0x474b30(_0x1b69e3, _0x2fb7bb, _0x56feb7, _0xcf3963) {
                var _0x1fe9c4 = _0x2fb7bb < 0x0 ? 0x1 : 0x0;
                if (_0x1fe9c4) {
                  _0x2fb7bb = -_0x2fb7bb;
                }
                if (0x0 === _0x2fb7bb) {
                  _0x1b69e3(0x1 / _0x2fb7bb > 0x0 ? 0x0 : 0x80000000, _0x56feb7, _0xcf3963);
                } else {
                  if (isNaN(_0x2fb7bb)) {
                    _0x1b69e3(0x7fc00000, _0x56feb7, _0xcf3963);
                  } else {
                    if (_0x2fb7bb > 0xffffff00000000000000000000000000) {
                      _0x1b69e3((_0x1fe9c4 << 0x1f | 0x7f800000) >>> 0x0, _0x56feb7, _0xcf3963);
                    } else {
                      if (_0x2fb7bb < 1.1754943508222875e-38) {
                        _0x1b69e3((_0x1fe9c4 << 0x1f | Math.round(_0x2fb7bb / 1.401298464324817e-45)) >>> 0x0, _0x56feb7, _0xcf3963);
                      } else {
                        var _0x5920ae = Math.floor(Math.log(_0x2fb7bb) / Math.LN2);
                        _0x1b69e3((_0x1fe9c4 << 0x1f | _0x5920ae + 0x7f << 0x17 | 0x7fffff & Math.round(_0x2fb7bb * Math.pow(0x2, -_0x5920ae) * 0x800000)) >>> 0x0, _0x56feb7, _0xcf3963);
                      }
                    }
                  }
                }
              }
              function _0x28f733(_0x1bdba2, _0x5743d3, _0x1cdb16) {
                var _0x23e57c = _0x1bdba2(_0x5743d3, _0x1cdb16);
                var _0x221624 = 0x2 * (_0x23e57c >> 0x1f) + 0x1;
                var _0x22859e = _0x23e57c >>> 0x17 & 0xff;
                var _0x27da7b = 0x7fffff & _0x23e57c;
                return 0xff === _0x22859e ? _0x27da7b ? NaN : _0x221624 * Infinity : 0x0 === _0x22859e ? 1.401298464324817e-45 * _0x221624 * _0x27da7b : _0x221624 * Math.pow(0x2, _0x22859e - 0x96) * (_0x27da7b + 0x800000);
              }
              _0x3eee54.writeFloatLE = _0x474b30.bind(null, _0x5b12b5);
              _0x3eee54.writeFloatBE = _0x474b30.bind(null, _0x373307);
              _0x3eee54.readFloatLE = _0x28f733.bind(null, _0x4bda6b);
              _0x3eee54.readFloatBE = _0x28f733.bind(null, _0x43a716);
            })();
          }
          if ("undefined" != typeof Float64Array) {
            (function () {
              var _0x23ecdc = new Float64Array([-0x0]);
              var _0x406832 = new Uint8Array(_0x23ecdc.buffer);
              var _0xcf2958 = 0x80 === _0x406832[0x7];
              function _0x5c0ba6(_0xa99841, _0x14eb56, _0x40b95e) {
                _0x23ecdc[0x0] = _0xa99841;
                _0x14eb56[_0x40b95e] = _0x406832[0x0];
                _0x14eb56[_0x40b95e + 0x1] = _0x406832[0x1];
                _0x14eb56[_0x40b95e + 0x2] = _0x406832[0x2];
                _0x14eb56[_0x40b95e + 0x3] = _0x406832[0x3];
                _0x14eb56[_0x40b95e + 0x4] = _0x406832[0x4];
                _0x14eb56[_0x40b95e + 0x5] = _0x406832[0x5];
                _0x14eb56[_0x40b95e + 0x6] = _0x406832[0x6];
                _0x14eb56[_0x40b95e + 0x7] = _0x406832[0x7];
              }
              function _0x4feb2f(_0x2e096f, _0x317e46, _0x16ba9f) {
                _0x23ecdc[0x0] = _0x2e096f;
                _0x317e46[_0x16ba9f] = _0x406832[0x7];
                _0x317e46[_0x16ba9f + 0x1] = _0x406832[0x6];
                _0x317e46[_0x16ba9f + 0x2] = _0x406832[0x5];
                _0x317e46[_0x16ba9f + 0x3] = _0x406832[0x4];
                _0x317e46[_0x16ba9f + 0x4] = _0x406832[0x3];
                _0x317e46[_0x16ba9f + 0x5] = _0x406832[0x2];
                _0x317e46[_0x16ba9f + 0x6] = _0x406832[0x1];
                _0x317e46[_0x16ba9f + 0x7] = _0x406832[0x0];
              }
              function _0x4aad3f(_0x33c3f5, _0x2a30c8) {
                _0x406832[0x0] = _0x33c3f5[_0x2a30c8];
                _0x406832[0x1] = _0x33c3f5[_0x2a30c8 + 0x1];
                _0x406832[0x2] = _0x33c3f5[_0x2a30c8 + 0x2];
                _0x406832[0x3] = _0x33c3f5[_0x2a30c8 + 0x3];
                _0x406832[0x4] = _0x33c3f5[_0x2a30c8 + 0x4];
                _0x406832[0x5] = _0x33c3f5[_0x2a30c8 + 0x5];
                _0x406832[0x6] = _0x33c3f5[_0x2a30c8 + 0x6];
                _0x406832[0x7] = _0x33c3f5[_0x2a30c8 + 0x7];
                return _0x23ecdc[0x0];
              }
              function _0x548c2b(_0x2c354f, _0x4c8603) {
                _0x406832[0x7] = _0x2c354f[_0x4c8603];
                _0x406832[0x6] = _0x2c354f[_0x4c8603 + 0x1];
                _0x406832[0x5] = _0x2c354f[_0x4c8603 + 0x2];
                _0x406832[0x4] = _0x2c354f[_0x4c8603 + 0x3];
                _0x406832[0x3] = _0x2c354f[_0x4c8603 + 0x4];
                _0x406832[0x2] = _0x2c354f[_0x4c8603 + 0x5];
                _0x406832[0x1] = _0x2c354f[_0x4c8603 + 0x6];
                _0x406832[0x0] = _0x2c354f[_0x4c8603 + 0x7];
                return _0x23ecdc[0x0];
              }
              _0x3eee54.writeDoubleLE = _0xcf2958 ? _0x5c0ba6 : _0x4feb2f;
              _0x3eee54.writeDoubleBE = _0xcf2958 ? _0x4feb2f : _0x5c0ba6;
              _0x3eee54.readDoubleLE = _0xcf2958 ? _0x4aad3f : _0x548c2b;
              _0x3eee54.readDoubleBE = _0xcf2958 ? _0x548c2b : _0x4aad3f;
            })();
          } else {
            (function () {
              function _0x39b1fc(_0x17cd11, _0x58cf3e, _0x4883a7, _0x2fd40a, _0x1c24dd, _0x3edf3a) {
                var _0x30cf3d = _0x2fd40a < 0x0 ? 0x1 : 0x0;
                if (_0x30cf3d) {
                  _0x2fd40a = -_0x2fd40a;
                }
                if (0x0 === _0x2fd40a) {
                  _0x17cd11(0x0, _0x1c24dd, _0x3edf3a + _0x58cf3e);
                  _0x17cd11(0x1 / _0x2fd40a > 0x0 ? 0x0 : 0x80000000, _0x1c24dd, _0x3edf3a + _0x4883a7);
                } else {
                  if (isNaN(_0x2fd40a)) {
                    _0x17cd11(0x0, _0x1c24dd, _0x3edf3a + _0x58cf3e);
                    _0x17cd11(0x7ff80000, _0x1c24dd, _0x3edf3a + _0x4883a7);
                  } else {
                    if (_0x2fd40a > 0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
                      _0x17cd11(0x0, _0x1c24dd, _0x3edf3a + _0x58cf3e);
                      _0x17cd11((_0x30cf3d << 0x1f | 0x7ff00000) >>> 0x0, _0x1c24dd, _0x3edf3a + _0x4883a7);
                    } else {
                      var _0x5abb72;
                      if (_0x2fd40a < 2.2250738585072014e-308) {
                        _0x17cd11((_0x5abb72 = _0x2fd40a / 5e-324) >>> 0x0, _0x1c24dd, _0x3edf3a + _0x58cf3e);
                        _0x17cd11((_0x30cf3d << 0x1f | _0x5abb72 / 0x100000000) >>> 0x0, _0x1c24dd, _0x3edf3a + _0x4883a7);
                      } else {
                        var _0x17ea4d = Math.floor(Math.log(_0x2fd40a) / Math.LN2);
                        if (0x400 === _0x17ea4d) {
                          _0x17ea4d = 0x3ff;
                        }
                        _0x17cd11(0x10000000000000 * (_0x5abb72 = _0x2fd40a * Math.pow(0x2, -_0x17ea4d)) >>> 0x0, _0x1c24dd, _0x3edf3a + _0x58cf3e);
                        _0x17cd11((_0x30cf3d << 0x1f | _0x17ea4d + 0x3ff << 0x14 | 0x100000 * _0x5abb72 & 0xfffff) >>> 0x0, _0x1c24dd, _0x3edf3a + _0x4883a7);
                      }
                    }
                  }
                }
              }
              function _0xdb5ded(_0x30fb13, _0x413920, _0x322911, _0x3827f3, _0x38d0e2) {
                var _0x1e397e = _0x30fb13(_0x3827f3, _0x38d0e2 + _0x413920);
                var _0x2a97f3 = _0x30fb13(_0x3827f3, _0x38d0e2 + _0x322911);
                var _0x24907e = 0x2 * (_0x2a97f3 >> 0x1f) + 0x1;
                var _0x193220 = _0x2a97f3 >>> 0x14 & 0x7ff;
                var _0x519338 = 0x100000000 * (0xfffff & _0x2a97f3) + _0x1e397e;
                return 0x7ff === _0x193220 ? _0x519338 ? NaN : _0x24907e * Infinity : 0x0 === _0x193220 ? 5e-324 * _0x24907e * _0x519338 : _0x24907e * Math.pow(0x2, _0x193220 - 0x433) * (_0x519338 + 0x10000000000000);
              }
              _0x3eee54.writeDoubleLE = _0x39b1fc.bind(null, _0x5b12b5, 0x0, 0x4);
              _0x3eee54.writeDoubleBE = _0x39b1fc.bind(null, _0x373307, 0x4, 0x0);
              _0x3eee54.readDoubleLE = _0xdb5ded.bind(null, _0x4bda6b, 0x0, 0x4);
              _0x3eee54.readDoubleBE = _0xdb5ded.bind(null, _0x43a716, 0x4, 0x0);
            })();
          }
          return _0x3eee54;
        }
        function _0x5b12b5(_0x187077, _0x3de1e5, _0x50b213) {
          _0x3de1e5[_0x50b213] = 0xff & _0x187077;
          _0x3de1e5[_0x50b213 + 0x1] = _0x187077 >>> 0x8 & 0xff;
          _0x3de1e5[_0x50b213 + 0x2] = _0x187077 >>> 0x10 & 0xff;
          _0x3de1e5[_0x50b213 + 0x3] = _0x187077 >>> 0x18;
        }
        function _0x373307(_0x220315, _0x30e289, _0x5bec1f) {
          _0x30e289[_0x5bec1f] = _0x220315 >>> 0x18;
          _0x30e289[_0x5bec1f + 0x1] = _0x220315 >>> 0x10 & 0xff;
          _0x30e289[_0x5bec1f + 0x2] = _0x220315 >>> 0x8 & 0xff;
          _0x30e289[_0x5bec1f + 0x3] = 0xff & _0x220315;
        }
        function _0x4bda6b(_0x2c6881, _0x249214) {
          return (_0x2c6881[_0x249214] | _0x2c6881[_0x249214 + 0x1] << 0x8 | _0x2c6881[_0x249214 + 0x2] << 0x10 | _0x2c6881[_0x249214 + 0x3] << 0x18) >>> 0x0;
        }
        function _0x43a716(_0x179aa2, _0x34ac3d) {
          return (_0x179aa2[_0x34ac3d] << 0x18 | _0x179aa2[_0x34ac3d + 0x1] << 0x10 | _0x179aa2[_0x34ac3d + 0x2] << 0x8 | _0x179aa2[_0x34ac3d + 0x3]) >>> 0x0;
        }
        _0x475e8e.exports = _0x586250(_0x586250);
        _0x475e8e.exports;
        _0x475e8e.exports.writeFloatLE;
        _0x475e8e.exports.writeFloatBE;
        _0x475e8e.exports.readFloatLE;
        _0x475e8e.exports.readFloatBE;
        _0x475e8e.exports.writeDoubleLE;
        _0x475e8e.exports.writeDoubleBE;
        _0x475e8e.exports.readDoubleLE;
        _0x475e8e.exports.readDoubleBE;
      }, {});
      _0x12e126.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js', function (_0x31bbcd, _0x593540, _0x2e6118, _0x20ebe6, _0x2b3656) {
        function _0x1711e2(_0x83feab) {
          try {
            var _0x4019fe = eval("quire".replace(/^/, 're'))(_0x83feab);
            if (_0x4019fe && (_0x4019fe.length || Object.keys(_0x4019fe).length)) {
              return _0x4019fe;
            }
          } catch (_0x5648ff) {}
          return null;
        }
        _0x2e6118.exports = _0x1711e2;
        _0x2e6118.exports;
      }, {});
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js", function (_0x3f9ae5, _0x20a07e, _0x696378, _0x3e8623, _0x3dab5b) {
        _0x3f9ae5.length = function (_0x3a93e2) {
          var _0x842504 = 0x0;
          var _0x41a6b5 = 0x0;
          for (var _0x1a5321 = 0x0; _0x1a5321 < _0x3a93e2.length; ++_0x1a5321) {
            if ((_0x41a6b5 = _0x3a93e2.charCodeAt(_0x1a5321)) < 0x80) {
              _0x842504 += 0x1;
            } else if (_0x41a6b5 < 0x800) {
              _0x842504 += 0x2;
            } else if (0xd800 == (0xfc00 & _0x41a6b5) && 0xdc00 == (0xfc00 & _0x3a93e2.charCodeAt(_0x1a5321 + 0x1))) {
              ++_0x1a5321;
              _0x842504 += 0x4;
            } else {
              _0x842504 += 0x3;
            }
          }
          return _0x842504;
        };
        _0x3f9ae5.read = function (_0x1339eb, _0x389396, _0x147a21) {
          if (_0x147a21 - _0x389396 < 0x1) {
            return '';
          }
          var _0x4c442b;
          var _0x41c4a4 = null;
          var _0x49d83e = [];
          for (var _0xd8de95 = 0x0; _0x389396 < _0x147a21;) {
            if ((_0x4c442b = _0x1339eb[_0x389396++]) < 0x80) {
              _0x49d83e[_0xd8de95++] = _0x4c442b;
            } else if (_0x4c442b > 0xbf && _0x4c442b < 0xe0) {
              _0x49d83e[_0xd8de95++] = (0x1f & _0x4c442b) << 0x6 | 0x3f & _0x1339eb[_0x389396++];
            } else if (_0x4c442b > 0xef && _0x4c442b < 0x16d) {
              _0x4c442b = ((0x7 & _0x4c442b) << 0x12 | (0x3f & _0x1339eb[_0x389396++]) << 0xc | (0x3f & _0x1339eb[_0x389396++]) << 0x6 | 0x3f & _0x1339eb[_0x389396++]) - 0x10000;
              _0x49d83e[_0xd8de95++] = 0xd800 + (_0x4c442b >> 0xa);
              _0x49d83e[_0xd8de95++] = 0xdc00 + (0x3ff & _0x4c442b);
            } else {
              _0x49d83e[_0xd8de95++] = (0xf & _0x4c442b) << 0xc | (0x3f & _0x1339eb[_0x389396++]) << 0x6 | 0x3f & _0x1339eb[_0x389396++];
            }
            if (_0xd8de95 > 0x1fff) {
              (_0x41c4a4 || (_0x41c4a4 = [])).push(String.fromCharCode.apply(String, _0x49d83e));
              _0xd8de95 = 0x0;
            }
          }
          return _0x41c4a4 ? (_0xd8de95 && _0x41c4a4.push(String.fromCharCode.apply(String, _0x49d83e.slice(0x0, _0xd8de95))), _0x41c4a4.join('')) : String.fromCharCode.apply(String, _0x49d83e.slice(0x0, _0xd8de95));
        };
        _0x3f9ae5.write = function (_0x2a7d17, _0x4fab5d, _0x4885f3) {
          var _0x42f0c1;
          var _0x518e50;
          var _0x276c2b = _0x4885f3;
          for (var _0x88801d = 0x0; _0x88801d < _0x2a7d17.length; ++_0x88801d) {
            if ((_0x42f0c1 = _0x2a7d17.charCodeAt(_0x88801d)) < 0x80) {
              _0x4fab5d[_0x4885f3++] = _0x42f0c1;
            } else if (_0x42f0c1 < 0x800) {
              _0x4fab5d[_0x4885f3++] = _0x42f0c1 >> 0x6 | 0xc0;
              _0x4fab5d[_0x4885f3++] = 0x3f & _0x42f0c1 | 0x80;
            } else if (0xd800 == (0xfc00 & _0x42f0c1) && 0xdc00 == (0xfc00 & (_0x518e50 = _0x2a7d17.charCodeAt(_0x88801d + 0x1)))) {
              _0x42f0c1 = 0x10000 + ((0x3ff & _0x42f0c1) << 0xa) + (0x3ff & _0x518e50);
              ++_0x88801d;
              _0x4fab5d[_0x4885f3++] = _0x42f0c1 >> 0x12 | 0xf0;
              _0x4fab5d[_0x4885f3++] = _0x42f0c1 >> 0xc & 0x3f | 0x80;
              _0x4fab5d[_0x4885f3++] = _0x42f0c1 >> 0x6 & 0x3f | 0x80;
              _0x4fab5d[_0x4885f3++] = 0x3f & _0x42f0c1 | 0x80;
            } else {
              _0x4fab5d[_0x4885f3++] = _0x42f0c1 >> 0xc | 0xe0;
              _0x4fab5d[_0x4885f3++] = _0x42f0c1 >> 0x6 & 0x3f | 0x80;
              _0x4fab5d[_0x4885f3++] = 0x3f & _0x42f0c1 | 0x80;
            }
          }
          return _0x4885f3 - _0x276c2b;
        };
        _0x696378.exports;
      }, {});
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js", function (_0x483f24, _0x54879f, _0x188893, _0x195d79, _0x12c762) {
        _0x188893.exports = function (_0x3ed2af, _0x5bda0b, _0x3d02dd) {
          var _0x30def4 = _0x3d02dd || 0x2000;
          var _0x3ef28f = _0x30def4 >>> 0x1;
          var _0x4b5025 = null;
          var _0x355e12 = _0x30def4;
          return function (_0x27c9da) {
            if (_0x27c9da < 0x1 || _0x27c9da > _0x3ef28f) {
              return _0x3ed2af(_0x27c9da);
            }
            if (_0x355e12 + _0x27c9da > _0x30def4) {
              _0x4b5025 = _0x3ed2af(_0x30def4);
              _0x355e12 = 0x0;
            }
            var _0x4b1714 = _0x5bda0b.call(_0x4b5025, _0x355e12, _0x355e12 += _0x27c9da);
            if (0x7 & _0x355e12) {
              _0x355e12 = 0x1 + (0x7 | _0x355e12);
            }
            return _0x4b1714;
          };
        };
        _0x188893.exports;
      }, {});
      _0x12e126.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js', function (_0x27405c, _0x974c5, _0x2851f3, _0x4d7a81, _0x2608f8) {
        _0x2851f3.exports = _0x256ccf;
        var _0x2058f4 = _0x974c5("../util/minimal");
        function _0x256ccf(_0x3c77e0, _0x1a5929) {
          this.lo = _0x3c77e0 >>> 0x0;
          this.hi = _0x1a5929 >>> 0x0;
        }
        var _0x9ae2a4 = _0x256ccf.zero = new _0x256ccf(0x0, 0x0);
        _0x9ae2a4.toNumber = function () {
          return 0x0;
        };
        _0x9ae2a4.zzEncode = _0x9ae2a4.zzDecode = function () {
          return this;
        };
        _0x9ae2a4.length = function () {
          return 0x1;
        };
        var _0xaa132c = _0x256ccf.zeroHash = "\0\0\0\0\0\0\0\0";
        _0x256ccf.fromNumber = function (_0x530938) {
          if (0x0 === _0x530938) {
            return _0x9ae2a4;
          }
          var _0xa1ba70 = _0x530938 < 0x0;
          if (_0xa1ba70) {
            _0x530938 = -_0x530938;
          }
          var _0x5e8a4d = _0x530938 >>> 0x0;
          var _0x847138 = (_0x530938 - _0x5e8a4d) / 0x100000000 >>> 0x0;
          if (_0xa1ba70) {
            _0x847138 = ~_0x847138 >>> 0x0;
            _0x5e8a4d = ~_0x5e8a4d >>> 0x0;
            if (++_0x5e8a4d > 0xffffffff) {
              _0x5e8a4d = 0x0;
              if (++_0x847138 > 0xffffffff) {
                _0x847138 = 0x0;
              }
            }
          }
          return new _0x256ccf(_0x5e8a4d, _0x847138);
        };
        _0x256ccf.from = function (_0x3af744) {
          if ("number" == typeof _0x3af744) {
            return _0x256ccf.fromNumber(_0x3af744);
          }
          if (_0x2058f4.isString(_0x3af744)) {
            if (!_0x2058f4.Long) {
              return _0x256ccf.fromNumber(parseInt(_0x3af744, 0xa));
            }
            _0x3af744 = _0x2058f4.Long.fromString(_0x3af744);
          }
          return _0x3af744.low || _0x3af744.high ? new _0x256ccf(_0x3af744.low >>> 0x0, _0x3af744.high >>> 0x0) : _0x9ae2a4;
        };
        _0x256ccf.prototype.toNumber = function (_0x58f3eb) {
          if (!_0x58f3eb && this.hi >>> 0x1f) {
            var _0x1c212f = 0x1 + ~this.lo >>> 0x0;
            var _0x2cfade = ~this.hi >>> 0x0;
            if (!_0x1c212f) {
              _0x2cfade = _0x2cfade + 0x1 >>> 0x0;
            }
            return -(_0x1c212f + 0x100000000 * _0x2cfade);
          }
          return this.lo + 0x100000000 * this.hi;
        };
        _0x256ccf.prototype.toLong = function (_0x460b82) {
          return _0x2058f4.Long ? new _0x2058f4.Long(0x0 | this.lo, 0x0 | this.hi, Boolean(_0x460b82)) : {
            'low': 0x0 | this.lo,
            'high': 0x0 | this.hi,
            'unsigned': Boolean(_0x460b82)
          };
        };
        var _0x515575 = String.prototype.charCodeAt;
        _0x256ccf.fromHash = function (_0x16c14d) {
          return _0x16c14d === _0xaa132c ? _0x9ae2a4 : new _0x256ccf((_0x515575.call(_0x16c14d, 0x0) | _0x515575.call(_0x16c14d, 0x1) << 0x8 | _0x515575.call(_0x16c14d, 0x2) << 0x10 | _0x515575.call(_0x16c14d, 0x3) << 0x18) >>> 0x0, (_0x515575.call(_0x16c14d, 0x4) | _0x515575.call(_0x16c14d, 0x5) << 0x8 | _0x515575.call(_0x16c14d, 0x6) << 0x10 | _0x515575.call(_0x16c14d, 0x7) << 0x18) >>> 0x0);
        };
        _0x256ccf.prototype.toHash = function () {
          return String.fromCharCode(0xff & this.lo, this.lo >>> 0x8 & 0xff, this.lo >>> 0x10 & 0xff, this.lo >>> 0x18, 0xff & this.hi, this.hi >>> 0x8 & 0xff, this.hi >>> 0x10 & 0xff, this.hi >>> 0x18);
        };
        _0x256ccf.prototype.zzEncode = function () {
          var _0x35f960 = this.hi >> 0x1f;
          this.hi = ((this.hi << 0x1 | this.lo >>> 0x1f) ^ _0x35f960) >>> 0x0;
          this.lo = (this.lo << 0x1 ^ _0x35f960) >>> 0x0;
          return this;
        };
        _0x256ccf.prototype.zzDecode = function () {
          var _0x5c9a3a = -(0x1 & this.lo);
          this.lo = ((this.lo >>> 0x1 | this.hi << 0x1f) ^ _0x5c9a3a) >>> 0x0;
          this.hi = (this.hi >>> 0x1 ^ _0x5c9a3a) >>> 0x0;
          return this;
        };
        _0x256ccf.prototype.length = function () {
          var _0x154a17 = this.lo;
          var _0x2f6f01 = (this.lo >>> 0x1c | this.hi << 0x4) >>> 0x0;
          var _0x346f0c = this.hi >>> 0x18;
          return 0x0 === _0x346f0c ? 0x0 === _0x2f6f01 ? _0x154a17 < 0x4000 ? _0x154a17 < 0x80 ? 0x1 : 0x2 : _0x154a17 < 0x200000 ? 0x3 : 0x4 : _0x2f6f01 < 0x4000 ? _0x2f6f01 < 0x80 ? 0x5 : 0x6 : _0x2f6f01 < 0x200000 ? 0x7 : 0x8 : _0x346f0c < 0x80 ? 0x9 : 0xa;
        };
        _0x2851f3.exports;
      }, function () {
        return {
          '../util/minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js", function (_0x30048c, _0x504d85, _0x342e68, _0xf59c99, _0x5bcfd4) {
        function _0x19ea7a(_0x37a2c7, _0x9cc80c, _0x5c3fbe) {
          var _0xeb77c8 = Object.keys(_0x9cc80c);
          for (var _0x1248c5 = 0x0; _0x1248c5 < _0xeb77c8.length; ++_0x1248c5) {
            if (!(undefined !== _0x37a2c7[_0xeb77c8[_0x1248c5]] && _0x5c3fbe)) {
              _0x37a2c7[_0xeb77c8[_0x1248c5]] = _0x9cc80c[_0xeb77c8[_0x1248c5]];
            }
          }
          return _0x37a2c7;
        }
        function _0x511125(_0x5918c7) {
          function _0x4a825c(_0x379043, _0x3ec880) {
            if (!(this instanceof _0x4a825c)) {
              return new _0x4a825c(_0x379043, _0x3ec880);
            }
            Object.defineProperty(this, "message", {
              'get': function () {
                return _0x379043;
              }
            });
            if (Error.captureStackTrace) {
              Error.captureStackTrace(this, _0x4a825c);
            } else {
              Object.defineProperty(this, 'stack', {
                'value': new Error().stack || ''
              });
            }
            if (_0x3ec880) {
              _0x19ea7a(this, _0x3ec880);
            }
          }
          (_0x4a825c.prototype = Object.create(Error.prototype)).constructor = _0x4a825c;
          Object.defineProperty(_0x4a825c.prototype, "name", {
            'get': function () {
              return _0x5918c7;
            }
          });
          _0x4a825c.prototype.toString = function () {
            return this.name + ": " + this.message;
          };
          return _0x4a825c;
        }
        _0x30048c.asPromise = _0x504d85('@protobufjs/aspromise');
        _0x30048c.base64 = _0x504d85('@protobufjs/base64');
        _0x30048c.EventEmitter = _0x504d85("@protobufjs/eventemitter");
        _0x30048c.float = _0x504d85('@protobufjs/float');
        _0x30048c.inquire = _0x504d85("@protobufjs/inquire");
        _0x30048c.utf8 = _0x504d85("@protobufjs/utf8");
        _0x30048c.pool = _0x504d85("@protobufjs/pool");
        _0x30048c.LongBits = _0x504d85("./longbits");
        _0x30048c.isNode = Boolean("undefined" != typeof global && global && global.process && global.process.versions && global.process.versions.node);
        _0x30048c.global = _0x30048c.isNode && global || 'undefined' != typeof window && window || 'undefined' != typeof self && self || this;
        _0x30048c.emptyArray = Object.freeze ? Object.freeze([]) : [];
        _0x30048c.emptyObject = Object.freeze ? Object.freeze({}) : {};
        _0x30048c.isInteger = Number.isInteger || function (_0x582539) {
          return "number" == typeof _0x582539 && isFinite(_0x582539) && Math.floor(_0x582539) === _0x582539;
        };
        _0x30048c.isString = function (_0xe4412f) {
          return "string" == typeof _0xe4412f || _0xe4412f instanceof String;
        };
        _0x30048c.isObject = function (_0x16da1a) {
          return _0x16da1a && "object" == typeof _0x16da1a;
        };
        _0x30048c.isset = _0x30048c.isSet = function (_0x2a8e92, _0x3f042e) {
          var _0x4b9513 = _0x2a8e92[_0x3f042e];
          return !(null == _0x4b9513 || !_0x2a8e92.hasOwnProperty(_0x3f042e)) && ("object" != typeof _0x4b9513 || (Array.isArray(_0x4b9513) ? _0x4b9513.length : Object.keys(_0x4b9513).length) > 0x0);
        };
        _0x30048c.Buffer = function () {
          try {
            var _0x2b81ee = _0x30048c.inquire("buffer").Buffer;
            return _0x2b81ee.prototype.utf8Write ? _0x2b81ee : null;
          } catch (_0x13d648) {
            return null;
          }
        }();
        _0x30048c._Buffer_from = null;
        _0x30048c._Buffer_allocUnsafe = null;
        _0x30048c.newBuffer = function (_0x56eb95) {
          return "number" == typeof _0x56eb95 ? _0x30048c.Buffer ? _0x30048c._Buffer_allocUnsafe(_0x56eb95) : new _0x30048c.Array(_0x56eb95) : _0x30048c.Buffer ? _0x30048c._Buffer_from(_0x56eb95) : 'undefined' == typeof Uint8Array ? _0x56eb95 : new Uint8Array(_0x56eb95);
        };
        _0x30048c.Array = 'undefined' != typeof Uint8Array ? Uint8Array : Array;
        _0x30048c.Long = _0x30048c.global.dcodeIO && _0x30048c.global.dcodeIO.Long || _0x30048c.global.Long || _0x30048c.inquire("long");
        _0x30048c.key2Re = /^true|false|0|1$/;
        _0x30048c.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
        _0x30048c.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
        _0x30048c.longToHash = function (_0x51e276) {
          return _0x51e276 ? _0x30048c.LongBits.from(_0x51e276).toHash() : _0x30048c.LongBits.zeroHash;
        };
        _0x30048c.longFromHash = function (_0x38c9c5, _0x4d11b4) {
          var _0x172da2 = _0x30048c.LongBits.fromHash(_0x38c9c5);
          return _0x30048c.Long ? _0x30048c.Long.fromBits(_0x172da2.lo, _0x172da2.hi, _0x4d11b4) : _0x172da2.toNumber(Boolean(_0x4d11b4));
        };
        _0x30048c.merge = _0x19ea7a;
        _0x30048c.lcFirst = function (_0x51e1bc) {
          return _0x51e1bc.charAt(0x0).toLowerCase() + _0x51e1bc.substring(0x1);
        };
        _0x30048c.newError = _0x511125;
        _0x30048c.ProtocolError = _0x511125("ProtocolError");
        _0x30048c.oneOfGetter = function (_0x351087) {
          var _0x17be7f = {};
          for (var _0x269108 = 0x0; _0x269108 < _0x351087.length; ++_0x269108) {
            _0x17be7f[_0x351087[_0x269108]] = 0x1;
          }
          return function () {
            var _0x2c14de = Object.keys(this);
            for (var _0x5946f0 = _0x2c14de.length - 0x1; _0x5946f0 > -0x1; --_0x5946f0) {
              if (0x1 === _0x17be7f[_0x2c14de[_0x5946f0]] && undefined !== this[_0x2c14de[_0x5946f0]] && null !== this[_0x2c14de[_0x5946f0]]) {
                return _0x2c14de[_0x5946f0];
              }
            }
          };
        };
        _0x30048c.oneOfSetter = function (_0x188677) {
          return function (_0x318fce) {
            for (var _0x35c9ad = 0x0; _0x35c9ad < _0x188677.length; ++_0x35c9ad) {
              if (_0x188677[_0x35c9ad] !== _0x318fce) {
                delete this[_0x188677[_0x35c9ad]];
              }
            }
          };
        };
        _0x30048c.toJSONOptions = {
          'longs': String,
          'enums': String,
          'bytes': String,
          'json': true
        };
        _0x30048c._configure = function () {
          var _0x24c00c = _0x30048c.Buffer;
          if (_0x24c00c) {
            _0x30048c._Buffer_from = _0x24c00c.from !== Uint8Array.from && _0x24c00c.from || function (_0x8c77ef, _0x511990) {
              return new _0x24c00c(_0x8c77ef, _0x511990);
            };
            _0x30048c._Buffer_allocUnsafe = _0x24c00c.allocUnsafe || function (_0x45a882) {
              return new _0x24c00c(_0x45a882);
            };
          } else {
            _0x30048c._Buffer_from = _0x30048c._Buffer_allocUnsafe = null;
          }
        };
        _0x342e68.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          '@protobufjs/base64': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js',
          '@protobufjs/eventemitter': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js",
          '@protobufjs/float': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/@protobufjs/float/index.js",
          '@protobufjs/inquire': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js',
          '@protobufjs/utf8': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js",
          '@protobufjs/pool': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js",
          './longbits': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js'
        };
      });
      _0x12e126.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/writer.js', function (_0x34755a, _0x193c40, _0x1bfe46, _0x1e6c58, _0xebf7) {
        _0x1bfe46.exports = _0x4c7ddd;
        var _0x3621c2;
        var _0x50d737 = _0x193c40("./util/minimal");
        var _0x4b1e3c = _0x50d737.LongBits;
        var _0x30b99d = _0x50d737.base64;
        var _0x22d231 = _0x50d737.utf8;
        function _0xc28a2c(_0x4e0d29, _0x3205e0, _0xed519a) {
          this.fn = _0x4e0d29;
          this.len = _0x3205e0;
          this.next = undefined;
          this.val = _0xed519a;
        }
        function _0x5bbdb1() {}
        function _0x48b948(_0x5c6e04) {
          this.head = _0x5c6e04.head;
          this.tail = _0x5c6e04.tail;
          this.len = _0x5c6e04.len;
          this.next = _0x5c6e04.states;
        }
        function _0x4c7ddd() {
          this.len = 0x0;
          this.head = new _0xc28a2c(_0x5bbdb1, 0x0, 0x0);
          this.tail = this.head;
          this.states = null;
        }
        var _0xc9fa40 = function () {
          return _0x50d737.Buffer ? function () {
            return (_0x4c7ddd.create = function () {
              return new _0x3621c2();
            })();
          } : function () {
            return new _0x4c7ddd();
          };
        };
        function _0x23cc33(_0x484660, _0x731d12, _0x3c7588) {
          _0x731d12[_0x3c7588] = 0xff & _0x484660;
        }
        function _0x35ce3d(_0x39c3e5, _0x1f195a) {
          this.len = _0x39c3e5;
          this.next = undefined;
          this.val = _0x1f195a;
        }
        function _0x161e9e(_0x5f33da, _0x2eff9f, _0x16c26d) {
          for (; _0x5f33da.hi;) {
            _0x2eff9f[_0x16c26d++] = 0x7f & _0x5f33da.lo | 0x80;
            _0x5f33da.lo = (_0x5f33da.lo >>> 0x7 | _0x5f33da.hi << 0x19) >>> 0x0;
            _0x5f33da.hi >>>= 0x7;
          }
          for (; _0x5f33da.lo > 0x7f;) {
            _0x2eff9f[_0x16c26d++] = 0x7f & _0x5f33da.lo | 0x80;
            _0x5f33da.lo = _0x5f33da.lo >>> 0x7;
          }
          _0x2eff9f[_0x16c26d++] = _0x5f33da.lo;
        }
        function _0x4a1070(_0x41b376, _0x20ad92, _0x317f1f) {
          _0x20ad92[_0x317f1f] = 0xff & _0x41b376;
          _0x20ad92[_0x317f1f + 0x1] = _0x41b376 >>> 0x8 & 0xff;
          _0x20ad92[_0x317f1f + 0x2] = _0x41b376 >>> 0x10 & 0xff;
          _0x20ad92[_0x317f1f + 0x3] = _0x41b376 >>> 0x18;
        }
        _0x4c7ddd.create = _0xc9fa40();
        _0x4c7ddd.alloc = function (_0x4328a2) {
          return new _0x50d737.Array(_0x4328a2);
        };
        if (_0x50d737.Array !== Array) {
          _0x4c7ddd.alloc = _0x50d737.pool(_0x4c7ddd.alloc, _0x50d737.Array.prototype.subarray);
        }
        _0x4c7ddd.prototype._push = function (_0x1d1e62, _0x9ea79, _0x1761b5) {
          this.tail = this.tail.next = new _0xc28a2c(_0x1d1e62, _0x9ea79, _0x1761b5);
          this.len += _0x9ea79;
          return this;
        };
        _0x35ce3d.prototype = Object.create(_0xc28a2c.prototype);
        _0x35ce3d.prototype.fn = function (_0x147a89, _0x4b37e6, _0x2de4bf) {
          for (; _0x147a89 > 0x7f;) {
            _0x4b37e6[_0x2de4bf++] = 0x7f & _0x147a89 | 0x80;
            _0x147a89 >>>= 0x7;
          }
          _0x4b37e6[_0x2de4bf] = _0x147a89;
        };
        _0x4c7ddd.prototype.uint32 = function (_0x13fec0) {
          this.len += (this.tail = this.tail.next = new _0x35ce3d((_0x13fec0 >>>= 0x0) < 0x80 ? 0x1 : _0x13fec0 < 0x4000 ? 0x2 : _0x13fec0 < 0x200000 ? 0x3 : _0x13fec0 < 0x10000000 ? 0x4 : 0x5, _0x13fec0)).len;
          return this;
        };
        _0x4c7ddd.prototype.int32 = function (_0xd5b015) {
          return _0xd5b015 < 0x0 ? this._push(_0x161e9e, 0xa, _0x4b1e3c.fromNumber(_0xd5b015)) : this.uint32(_0xd5b015);
        };
        _0x4c7ddd.prototype.sint32 = function (_0x28f7db) {
          return this.uint32((_0x28f7db << 0x1 ^ _0x28f7db >> 0x1f) >>> 0x0);
        };
        _0x4c7ddd.prototype.uint64 = function (_0xadc36a) {
          var _0x242c96 = _0x4b1e3c.from(_0xadc36a);
          return this._push(_0x161e9e, _0x242c96.length(), _0x242c96);
        };
        _0x4c7ddd.prototype.int64 = _0x4c7ddd.prototype.uint64;
        _0x4c7ddd.prototype.sint64 = function (_0x4197d8) {
          var _0x5e8004 = _0x4b1e3c.from(_0x4197d8).zzEncode();
          return this._push(_0x161e9e, _0x5e8004.length(), _0x5e8004);
        };
        _0x4c7ddd.prototype.bool = function (_0x2f4677) {
          return this._push(_0x23cc33, 0x1, _0x2f4677 ? 0x1 : 0x0);
        };
        _0x4c7ddd.prototype.fixed32 = function (_0x488c6a) {
          return this._push(_0x4a1070, 0x4, _0x488c6a >>> 0x0);
        };
        _0x4c7ddd.prototype.sfixed32 = _0x4c7ddd.prototype.fixed32;
        _0x4c7ddd.prototype.fixed64 = function (_0x252eca) {
          var _0x2483d0 = _0x4b1e3c.from(_0x252eca);
          return this._push(_0x4a1070, 0x4, _0x2483d0.lo)._push(_0x4a1070, 0x4, _0x2483d0.hi);
        };
        _0x4c7ddd.prototype.sfixed64 = _0x4c7ddd.prototype.fixed64;
        _0x4c7ddd.prototype.float = function (_0x319d25) {
          return this._push(_0x50d737.float.writeFloatLE, 0x4, _0x319d25);
        };
        _0x4c7ddd.prototype.double = function (_0x1c5505) {
          return this._push(_0x50d737.float.writeDoubleLE, 0x8, _0x1c5505);
        };
        var _0x525710 = _0x50d737.Array.prototype.set ? function (_0x51e264, _0x156b4f, _0x133a6d) {
          _0x156b4f.set(_0x51e264, _0x133a6d);
        } : function (_0x286d7f, _0x3435ba, _0x5eff84) {
          for (var _0xd95c88 = 0x0; _0xd95c88 < _0x286d7f.length; ++_0xd95c88) {
            _0x3435ba[_0x5eff84 + _0xd95c88] = _0x286d7f[_0xd95c88];
          }
        };
        _0x4c7ddd.prototype.bytes = function (_0x49049f) {
          var _0x3a1d7a = _0x49049f.length >>> 0x0;
          if (!_0x3a1d7a) {
            return this._push(_0x23cc33, 0x1, 0x0);
          }
          if (_0x50d737.isString(_0x49049f)) {
            var _0xb40cd = _0x4c7ddd.alloc(_0x3a1d7a = _0x30b99d.length(_0x49049f));
            _0x30b99d.decode(_0x49049f, _0xb40cd, 0x0);
            _0x49049f = _0xb40cd;
          }
          return this.uint32(_0x3a1d7a)._push(_0x525710, _0x3a1d7a, _0x49049f);
        };
        _0x4c7ddd.prototype.string = function (_0x20254f) {
          var _0x40eeea = _0x22d231.length(_0x20254f);
          return _0x40eeea ? this.uint32(_0x40eeea)._push(_0x22d231.write, _0x40eeea, _0x20254f) : this._push(_0x23cc33, 0x1, 0x0);
        };
        _0x4c7ddd.prototype.fork = function () {
          this.states = new _0x48b948(this);
          this.head = this.tail = new _0xc28a2c(_0x5bbdb1, 0x0, 0x0);
          this.len = 0x0;
          return this;
        };
        _0x4c7ddd.prototype.reset = function () {
          if (this.states) {
            this.head = this.states.head;
            this.tail = this.states.tail;
            this.len = this.states.len;
            this.states = this.states.next;
          } else {
            this.head = this.tail = new _0xc28a2c(_0x5bbdb1, 0x0, 0x0);
            this.len = 0x0;
          }
          return this;
        };
        _0x4c7ddd.prototype.ldelim = function () {
          var _0x3a5acc = this.head;
          var _0x1515c5 = this.tail;
          var _0x3b1418 = this.len;
          this.reset().uint32(_0x3b1418);
          if (_0x3b1418) {
            this.tail.next = _0x3a5acc.next;
            this.tail = _0x1515c5;
            this.len += _0x3b1418;
          }
          return this;
        };
        _0x4c7ddd.prototype.finish = function () {
          var _0x575b48 = this.head.next;
          var _0xac4ed2 = this.constructor.alloc(this.len);
          for (var _0x4bea7b = 0x0; _0x575b48;) {
            _0x575b48.fn(_0x575b48.val, _0xac4ed2, _0x4bea7b);
            _0x4bea7b += _0x575b48.len;
            _0x575b48 = _0x575b48.next;
          }
          return _0xac4ed2;
        };
        _0x4c7ddd._configure = function (_0x177dd0) {
          _0x3621c2 = _0x177dd0;
          _0x4c7ddd.create = _0xc9fa40();
          _0x3621c2._configure();
        };
        _0x1bfe46.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js", function (_0x212a07, _0x233390, _0x417372, _0x1e6d99, _0x208c59) {
        _0x417372.exports = _0x3daf0f;
        var _0x1095c1 = _0x233390('./writer');
        (_0x3daf0f.prototype = Object.create(_0x1095c1.prototype)).constructor = _0x3daf0f;
        var _0x17a139 = _0x233390("./util/minimal");
        function _0x3daf0f() {
          _0x1095c1.call(this);
        }
        function _0xd4bc28(_0x36196f, _0x131340, _0x4b4699) {
          if (_0x36196f.length < 0x28) {
            _0x17a139.utf8.write(_0x36196f, _0x131340, _0x4b4699);
          } else if (_0x131340.utf8Write) {
            _0x131340.utf8Write(_0x36196f, _0x4b4699);
          } else {
            _0x131340.write(_0x36196f, _0x4b4699);
          }
        }
        _0x3daf0f._configure = function () {
          _0x3daf0f.alloc = _0x17a139._Buffer_allocUnsafe;
          _0x3daf0f.writeBytesBuffer = _0x17a139.Buffer && _0x17a139.Buffer.prototype instanceof Uint8Array && "set" === _0x17a139.Buffer.prototype.set.name ? function (_0x3cc6ac, _0x94eba8, _0x379455) {
            _0x94eba8.set(_0x3cc6ac, _0x379455);
          } : function (_0x59091c, _0x2eb28f, _0x40b2c0) {
            if (_0x59091c.copy) {
              _0x59091c.copy(_0x2eb28f, _0x40b2c0, 0x0, _0x59091c.length);
            } else {
              for (var _0x2c1cd1 = 0x0; _0x2c1cd1 < _0x59091c.length;) {
                _0x2eb28f[_0x40b2c0++] = _0x59091c[_0x2c1cd1++];
              }
            }
          };
        };
        _0x3daf0f.prototype.bytes = function (_0x4dbc82) {
          if (_0x17a139.isString(_0x4dbc82)) {
            _0x4dbc82 = _0x17a139._Buffer_from(_0x4dbc82, "base64");
          }
          var _0x284703 = _0x4dbc82.length >>> 0x0;
          this.uint32(_0x284703);
          if (_0x284703) {
            this._push(_0x3daf0f.writeBytesBuffer, _0x284703, _0x4dbc82);
          }
          return this;
        };
        _0x3daf0f.prototype.string = function (_0x131a6) {
          var _0x2a82aa = _0x17a139.Buffer.byteLength(_0x131a6);
          this.uint32(_0x2a82aa);
          if (_0x2a82aa) {
            this._push(_0xd4bc28, _0x2a82aa, _0x131a6);
          }
          return this;
        };
        _0x3daf0f._configure();
        _0x417372.exports;
      }, function () {
        return {
          './writer': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/writer.js',
          './util/minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x12e126.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/reader.js', function (_0x4d6c92, _0x1bd336, _0x397f32, _0x3a7045, _0x48695a) {
        _0x397f32.exports = _0x46b8a1;
        var _0x1ecac9;
        var _0x318c04 = _0x1bd336("./util/minimal");
        var _0x3142bd = _0x318c04.LongBits;
        var _0x94c41a = _0x318c04.utf8;
        function _0x46b8a1(_0x3ad2a2) {
          this.buf = _0x3ad2a2;
          this.pos = 0x0;
          this.len = _0x3ad2a2.length;
        }
        var _0x52c419;
        var _0x49f299 = "undefined" != typeof Uint8Array ? function (_0x9ea732) {
          if (_0x9ea732 instanceof Uint8Array || Array.isArray(_0x9ea732)) {
            return new _0x46b8a1(_0x9ea732);
          }
          throw Error("illegal buffer");
        } : function (_0x59f502) {
          if (Array.isArray(_0x59f502)) {
            return new _0x46b8a1(_0x59f502);
          }
          throw Error("illegal buffer");
        };
        var _0x1e5b38 = function () {
          return _0x318c04.Buffer ? function (_0x3dc263) {
            return (_0x46b8a1.create = function (_0xa80a1e) {
              return _0x318c04.Buffer.isBuffer(_0xa80a1e) ? new _0x1ecac9(_0xa80a1e) : _0x49f299(_0xa80a1e);
            })(_0x3dc263);
          } : _0x49f299;
        };
        function _0x58be4b() {
          var _0x41a284 = new _0x3142bd(0x0, 0x0);
          var _0x28d8c8 = 0x0;
          if (!(this.len - this.pos > 0x4)) {
            for (; _0x28d8c8 < 0x3; ++_0x28d8c8) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0x41a284.lo = (_0x41a284.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0x28d8c8) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x41a284;
              }
            }
            _0x41a284.lo = (_0x41a284.lo | (0x7f & this.buf[this.pos++]) << 0x7 * _0x28d8c8) >>> 0x0;
            return _0x41a284;
          }
          for (; _0x28d8c8 < 0x4; ++_0x28d8c8) {
            _0x41a284.lo = (_0x41a284.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0x28d8c8) >>> 0x0;
            if (this.buf[this.pos++] < 0x80) {
              return _0x41a284;
            }
          }
          _0x41a284.lo = (_0x41a284.lo | (0x7f & this.buf[this.pos]) << 0x1c) >>> 0x0;
          _0x41a284.hi = (_0x41a284.hi | (0x7f & this.buf[this.pos]) >> 0x4) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x41a284;
          }
          _0x28d8c8 = 0x0;
          if (this.len - this.pos > 0x4) {
            for (; _0x28d8c8 < 0x5; ++_0x28d8c8) {
              _0x41a284.hi = (_0x41a284.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0x28d8c8 + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x41a284;
              }
            }
          } else {
            for (; _0x28d8c8 < 0x5; ++_0x28d8c8) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0x41a284.hi = (_0x41a284.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0x28d8c8 + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x41a284;
              }
            }
          }
          throw Error("invalid varint encoding");
        }
        function _0x323c3d() {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x8 || 0x1) + " > " + this.len);
          }
          return new _0x3142bd((this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0, (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0);
        }
        _0x46b8a1.create = _0x1e5b38();
        _0x46b8a1.prototype._slice = _0x318c04.Array.prototype.subarray || _0x318c04.Array.prototype.slice;
        _0x52c419 = 0xffffffff;
        _0x46b8a1.prototype.uint32 = function () {
          _0x52c419 = (0x7f & this.buf[this.pos]) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x52c419;
          }
          _0x52c419 = (_0x52c419 | (0x7f & this.buf[this.pos]) << 0x7) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x52c419;
          }
          _0x52c419 = (_0x52c419 | (0x7f & this.buf[this.pos]) << 0xe) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x52c419;
          }
          _0x52c419 = (_0x52c419 | (0x7f & this.buf[this.pos]) << 0x15) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x52c419;
          }
          _0x52c419 = (_0x52c419 | (0xf & this.buf[this.pos]) << 0x1c) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x52c419;
          }
          if ((this.pos += 0x5) > this.len) {
            this.pos = this.len;
            throw RangeError("index out of range: " + this.pos + " + " + (0xa || 0x1) + " > " + this.len);
          }
          return _0x52c419;
        };
        _0x46b8a1.prototype.int32 = function () {
          return 0x0 | this.uint32();
        };
        _0x46b8a1.prototype.sint32 = function () {
          var _0x4bd85a = this.uint32();
          return _0x4bd85a >>> 0x1 ^ -(0x1 & _0x4bd85a) | 0x0;
        };
        _0x46b8a1.prototype.bool = function () {
          return 0x0 !== this.uint32();
        };
        _0x46b8a1.prototype.fixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0x46b8a1.prototype.sfixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return 0x0 | (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0x46b8a1.prototype.float = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x3ed01c = _0x318c04.float.readFloatLE(this.buf, this.pos);
          this.pos += 0x4;
          return _0x3ed01c;
        };
        _0x46b8a1.prototype.double = function () {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x2fa2e7 = _0x318c04.float.readDoubleLE(this.buf, this.pos);
          this.pos += 0x8;
          return _0x2fa2e7;
        };
        _0x46b8a1.prototype.bytes = function () {
          var _0x505c68 = this.uint32();
          var _0x5c6170 = this.pos;
          var _0x209454 = this.pos + _0x505c68;
          if (_0x209454 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (_0x505c68 || 0x1) + " > " + this.len);
          }
          this.pos += _0x505c68;
          return Array.isArray(this.buf) ? this.buf.slice(_0x5c6170, _0x209454) : _0x5c6170 === _0x209454 ? new this.buf.constructor(0x0) : this._slice.call(this.buf, _0x5c6170, _0x209454);
        };
        _0x46b8a1.prototype.string = function () {
          var _0x50fca2 = this.bytes();
          return _0x94c41a.read(_0x50fca2, 0x0, _0x50fca2.length);
        };
        _0x46b8a1.prototype.skip = function (_0x521266) {
          if ("number" == typeof _0x521266) {
            if (this.pos + _0x521266 > this.len) {
              throw RangeError("index out of range: " + this.pos + " + " + (_0x521266 || 0x1) + " > " + this.len);
            }
            this.pos += _0x521266;
          } else {
            do {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
            } while (0x80 & this.buf[this.pos++]);
          }
          return this;
        };
        _0x46b8a1.prototype.skipType = function (_0x591940) {
          switch (_0x591940) {
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
              for (; 0x4 != (_0x591940 = 0x7 & this.uint32());) {
                this.skipType(_0x591940);
              }
              break;
            case 0x5:
              this.skip(0x4);
              break;
            default:
              throw Error("invalid wire type " + _0x591940 + " at offset " + this.pos);
          }
          return this;
        };
        _0x46b8a1._configure = function (_0x55c041) {
          _0x1ecac9 = _0x55c041;
          _0x46b8a1.create = _0x1e5b38();
          _0x1ecac9._configure();
          var _0x132ab1 = _0x318c04.Long ? "toLong" : "toNumber";
          _0x318c04.merge(_0x46b8a1.prototype, {
            'int64': function () {
              return _0x58be4b.call(this)[_0x132ab1](false);
            },
            'uint64': function () {
              return _0x58be4b.call(this)[_0x132ab1](true);
            },
            'sint64': function () {
              return _0x58be4b.call(this).zzDecode()[_0x132ab1](false);
            },
            'fixed64': function () {
              return _0x323c3d.call(this)[_0x132ab1](true);
            },
            'sfixed64': function () {
              return _0x323c3d.call(this)[_0x132ab1](false);
            }
          });
        };
        _0x397f32.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js", function (_0x3d3bc8, _0x168c99, _0x1521db, _0x1f49ae, _0x6cf85e) {
        _0x1521db.exports = _0xda0b01;
        var _0x5f09fe = _0x168c99("./reader");
        (_0xda0b01.prototype = Object.create(_0x5f09fe.prototype)).constructor = _0xda0b01;
        var _0x4d18e7 = _0x168c99("./util/minimal");
        function _0xda0b01(_0xb6b2f7) {
          _0x5f09fe.call(this, _0xb6b2f7);
        }
        _0xda0b01._configure = function () {
          if (_0x4d18e7.Buffer) {
            _0xda0b01.prototype._slice = _0x4d18e7.Buffer.prototype.slice;
          }
        };
        _0xda0b01.prototype.string = function () {
          var _0x2841e9 = this.uint32();
          return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + _0x2841e9, this.len)) : this.buf.toString('utf-8', this.pos, this.pos = Math.min(this.pos + _0x2841e9, this.len));
        };
        _0xda0b01._configure();
        _0x1521db.exports;
      }, function () {
        return {
          './reader': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/reader.js',
          './util/minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x12e126.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js', function (_0xfa6b32, _0x2ee788, _0x5a35e7, _0xa1e895, _0x5151cd) {
        _0x5a35e7.exports = _0x4f1a49;
        var _0x1b3105 = _0x2ee788("../util/minimal");
        function _0x4f1a49(_0x4a045d, _0x4fd8f5, _0x4cfaf0) {
          if ("function" != typeof _0x4a045d) {
            throw TypeError("rpcImpl must be a function");
          }
          _0x1b3105.EventEmitter.call(this);
          this.rpcImpl = _0x4a045d;
          this.requestDelimited = Boolean(_0x4fd8f5);
          this.responseDelimited = Boolean(_0x4cfaf0);
        }
        (_0x4f1a49.prototype = Object.create(_0x1b3105.EventEmitter.prototype)).constructor = _0x4f1a49;
        _0x4f1a49.prototype.rpcCall = function _0x57b4bf(_0x44b236, _0x581364, _0x33db1b, _0xb01fff, _0x257ff9) {
          if (!_0xb01fff) {
            throw TypeError("request must be specified");
          }
          var _0xa57714 = this;
          if (!_0x257ff9) {
            return _0x1b3105.asPromise(_0x57b4bf, _0xa57714, _0x44b236, _0x581364, _0x33db1b, _0xb01fff);
          }
          if (_0xa57714.rpcImpl) {
            try {
              return _0xa57714.rpcImpl(_0x44b236, _0x581364[_0xa57714.requestDelimited ? "encodeDelimited" : "encode"](_0xb01fff).finish(), function (_0x14af83, _0x15135a) {
                if (_0x14af83) {
                  _0xa57714.emit("error", _0x14af83, _0x44b236);
                  return _0x257ff9(_0x14af83);
                }
                if (null !== _0x15135a) {
                  if (!(_0x15135a instanceof _0x33db1b)) {
                    try {
                      _0x15135a = _0x33db1b[_0xa57714.responseDelimited ? "decodeDelimited" : "decode"](_0x15135a);
                    } catch (_0x168eef) {
                      _0xa57714.emit("error", _0x168eef, _0x44b236);
                      return _0x257ff9(_0x168eef);
                    }
                  }
                  _0xa57714.emit("data", _0x15135a, _0x44b236);
                  return _0x257ff9(null, _0x15135a);
                }
                _0xa57714.end(true);
              });
            } catch (_0x593e79) {
              _0xa57714.emit("error", _0x593e79, _0x44b236);
              return void setTimeout(function () {
                _0x257ff9(_0x593e79);
              }, 0x0);
            }
          } else {
            setTimeout(function () {
              _0x257ff9(Error("already ended"));
            }, 0x0);
          }
        };
        _0x4f1a49.prototype.end = function (_0x13ecb1) {
          if (this.rpcImpl) {
            if (!_0x13ecb1) {
              this.rpcImpl(null, null, null);
            }
            this.rpcImpl = null;
            this.emit('end').off();
          }
          return this;
        };
        _0x5a35e7.exports;
      }, function () {
        return {
          '../util/minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js", function (_0x20b6ab, _0x40f566, _0x4103b0, _0xdcf7c6, _0x26170a) {
        _0x20b6ab.Service = _0x40f566("./rpc/service");
        _0x4103b0.exports;
      }, function () {
        return {
          './rpc/service': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js'
        };
      });
      _0x12e126.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/roots.js', function (_0x3d809f, _0x303ca5, _0x1d8dde, _0x276626, _0x3e9a5a) {
        _0x1d8dde.exports = {};
        _0x1d8dde.exports;
      }, {});
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js", function (_0x1cc299, _0x496ef6, _0x4f95ed, _0x4de014, _0x4f7d0e) {
        function _0x502bee() {
          _0x1cc299.util._configure();
          _0x1cc299.Writer._configure(_0x1cc299.BufferWriter);
          _0x1cc299.Reader._configure(_0x1cc299.BufferReader);
        }
        _0x1cc299.build = "minimal";
        _0x1cc299.Writer = _0x496ef6("./writer");
        _0x1cc299.BufferWriter = _0x496ef6("./writer_buffer");
        _0x1cc299.Reader = _0x496ef6("./reader");
        _0x1cc299.BufferReader = _0x496ef6("./reader_buffer");
        _0x1cc299.util = _0x496ef6('./util/minimal');
        _0x1cc299.rpc = _0x496ef6("./rpc");
        _0x1cc299.roots = _0x496ef6('./roots');
        _0x1cc299.configure = _0x502bee;
        _0x502bee();
        _0x4f95ed.exports;
      }, function () {
        return {
          './writer': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/writer.js',
          './writer_buffer': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js",
          './reader': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/reader.js',
          './reader_buffer': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js",
          './util/minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          './rpc': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js",
          './roots': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/roots.js'
        };
      });
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js", function (_0x13cb86, _0x12fa91, _0x47c2b1, _0x243cac, _0x26b925) {
        function _0x5e68eb(_0x4a6743, _0x5583b7) {
          if ("string" == typeof _0x4a6743) {
            _0x5583b7 = _0x4a6743;
            _0x4a6743 = undefined;
          }
          var _0x16f7de = [];
          function _0x57d3fb(_0x33b443) {
            if ("string" != typeof _0x33b443) {
              var _0x2c6f64 = "function " + (undefined || _0x5583b7 || '') + '(' + (_0x4a6743 && _0x4a6743.join(',') || '') + "){\n  " + _0x16f7de.join("\n  ") + "\n}";
              if (_0x5e68eb.verbose) {
                console.log("codegen: " + _0x2c6f64);
              }
              _0x2c6f64 = "return " + _0x2c6f64;
              if (_0x33b443) {
                var _0xd2da0b = Object.keys(_0x33b443);
                var _0x1bdaa9 = new Array(_0xd2da0b.length + 0x1);
                var _0x57c0f5 = new Array(_0xd2da0b.length);
                for (var _0x5a21dd = 0x0; _0x5a21dd < _0xd2da0b.length;) {
                  _0x1bdaa9[_0x5a21dd] = _0xd2da0b[_0x5a21dd];
                  _0x57c0f5[_0x5a21dd] = _0x33b443[_0xd2da0b[_0x5a21dd++]];
                }
                _0x1bdaa9[_0x5a21dd] = _0x2c6f64;
                return Function.apply(null, _0x1bdaa9).apply(null, _0x57c0f5);
              }
              return Function(_0x2c6f64)();
            }
            var _0x5af38b = new Array(arguments.length - 0x1);
            for (var _0x593947 = 0x0; _0x593947 < _0x5af38b.length;) {
              _0x5af38b[_0x593947] = arguments[++_0x593947];
            }
            _0x593947 = 0x0;
            _0x33b443 = _0x33b443.replace(/%([%dfijs])/g, function (_0x12e887, _0x260090) {
              var _0x46c14a = _0x5af38b[_0x593947++];
              switch (_0x260090) {
                case 'd':
                case 'f':
                  return String(Number(_0x46c14a));
                case 'i':
                  return String(Math.floor(_0x46c14a));
                case 'j':
                  return JSON.stringify(_0x46c14a);
                case 's':
                  return String(_0x46c14a);
              }
              return '%';
            });
            if (_0x593947 !== _0x5af38b.length) {
              throw Error("parameter count mismatch");
            }
            _0x16f7de.push(_0x33b443);
            return _0x57d3fb;
          }
          function _0x21796e(_0x31beb5) {
            return "function " + (_0x31beb5 || _0x5583b7 || '') + '(' + (_0x4a6743 && _0x4a6743.join(',') || '') + "){\n  " + _0x16f7de.join("\n  ") + "\n}";
          }
          _0x57d3fb.toString = _0x21796e;
          return _0x57d3fb;
        }
        _0x47c2b1.exports = _0x5e68eb;
        _0x5e68eb.verbose = false;
        _0x47c2b1.exports;
      }, {});
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js", function (_0x498a33, _0x565e3a, _0x2dde51, _0x5f0903, _0xd63f8e) {
        _0x2dde51.exports = _0x31eac3;
        var _0x5709e4 = _0x565e3a("@protobufjs/aspromise");
        var _0x40c0a0 = _0x565e3a('@protobufjs/inquire')('fs');
        function _0x31eac3(_0x259f8d, _0x56864e, _0x425264) {
          if ('function' == typeof _0x56864e) {
            _0x425264 = _0x56864e;
            _0x56864e = {};
          } else if (!_0x56864e) {
            _0x56864e = {};
          }
          return _0x425264 ? !_0x56864e.xhr && _0x40c0a0 && _0x40c0a0.readFile ? _0x40c0a0.readFile(_0x259f8d, function (_0x544efd, _0x310bdd) {
            return _0x544efd && 'undefined' != typeof XMLHttpRequest ? _0x31eac3.xhr(_0x259f8d, _0x56864e, _0x425264) : _0x544efd ? _0x425264(_0x544efd) : _0x425264(null, _0x56864e.binary ? _0x310bdd : _0x310bdd.toString("utf8"));
          }) : _0x31eac3.xhr(_0x259f8d, _0x56864e, _0x425264) : _0x5709e4(_0x31eac3, this, _0x259f8d, _0x56864e);
        }
        _0x31eac3.xhr = function (_0xa11600, _0x203e18, _0x55df8d) {
          var _0x154b05 = new XMLHttpRequest();
          _0x154b05.onreadystatechange = function () {
            if (0x4 === _0x154b05.readyState) {
              if (0x0 !== _0x154b05.status && 0xc8 !== _0x154b05.status) {
                return _0x55df8d(Error("status " + _0x154b05.status));
              }
              if (_0x203e18.binary) {
                var _0x5126b4 = _0x154b05.response;
                if (!_0x5126b4) {
                  _0x5126b4 = [];
                  for (var _0x1ab171 = 0x0; _0x1ab171 < _0x154b05.responseText.length; ++_0x1ab171) {
                    _0x5126b4.push(0xff & _0x154b05.responseText.charCodeAt(_0x1ab171));
                  }
                }
                return _0x55df8d(null, "undefined" != typeof Uint8Array ? new Uint8Array(_0x5126b4) : _0x5126b4);
              }
              return _0x55df8d(null, _0x154b05.responseText);
            }
          };
          if (_0x203e18.binary) {
            if ("overrideMimeType" in _0x154b05) {
              _0x154b05.overrideMimeType("text/plain; charset=x-user-defined");
            }
            _0x154b05.responseType = "arraybuffer";
          }
          _0x154b05.open("GET", _0xa11600);
          _0x154b05.send();
        };
        _0x2dde51.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          '@protobufjs/inquire': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js'
        };
      });
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/@protobufjs/path/index.js", function (_0x1ef928, _0x44e647, _0x3410ff, _0x4e6026, _0x55de76) {
        var _0x156931 = _0x1ef928.isAbsolute = function (_0x3330c8) {
          return /^(?:\/|\w+:)/.test(_0x3330c8);
        };
        var _0x35ffc1 = _0x1ef928.normalize = function (_0x454585) {
          var _0x5186cb = (_0x454585 = _0x454585.replace(/\\/g, '/').replace(/\/{2,}/g, '/')).split('/');
          var _0x4a64d0 = _0x156931(_0x454585);
          var _0x50f724 = '';
          if (_0x4a64d0) {
            _0x50f724 = _0x5186cb.shift() + '/';
          }
          for (var _0x243f97 = 0x0; _0x243f97 < _0x5186cb.length;) {
            if ('..' === _0x5186cb[_0x243f97]) {
              if (_0x243f97 > 0x0 && '..' !== _0x5186cb[_0x243f97 - 0x1]) {
                _0x5186cb.splice(--_0x243f97, 0x2);
              } else if (_0x4a64d0) {
                _0x5186cb.splice(_0x243f97, 0x1);
              } else {
                ++_0x243f97;
              }
            } else if ('.' === _0x5186cb[_0x243f97]) {
              _0x5186cb.splice(_0x243f97, 0x1);
            } else {
              ++_0x243f97;
            }
          }
          return _0x50f724 + _0x5186cb.join('/');
        };
        _0x1ef928.resolve = function (_0x264437, _0x4a7356, _0x6b823a) {
          if (!_0x6b823a) {
            _0x4a7356 = _0x35ffc1(_0x4a7356);
          }
          return _0x156931(_0x4a7356) ? _0x4a7356 : (_0x6b823a || (_0x264437 = _0x35ffc1(_0x264437)), (_0x264437 = _0x264437.replace(/(?:\/|^)[^/]+$/, '')).length ? _0x35ffc1(_0x264437 + '/' + _0x4a7356) : _0x4a7356);
        };
        _0x3410ff.exports;
      }, {});
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/types.js", function (_0x31e1b7, _0x3df614, _0x388451, _0x5d6ef7, _0x5df796) {
        var _0x5e5b40 = _0x3df614("./util");
        var _0x5630a8 = ["double", "float", 'int32', 'uint32', "sint32", "fixed32", "sfixed32", "int64", 'uint64', "sint64", "fixed64", "sfixed64", "bool", "string", 'bytes'];
        function _0x2ae931(_0x393ecc, _0x58a3c3) {
          var _0x54f7c1 = 0x0;
          var _0x54853a = {};
          for (_0x58a3c3 |= 0x0; _0x54f7c1 < _0x393ecc.length;) {
            _0x54853a[_0x5630a8[_0x54f7c1 + _0x58a3c3]] = _0x393ecc[_0x54f7c1++];
          }
          return _0x54853a;
        }
        _0x31e1b7.basic = _0x2ae931([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2, 0x2]);
        _0x31e1b7.defaults = _0x2ae931([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, false, '', _0x5e5b40.emptyArray, null]);
        _0x31e1b7.long = _0x2ae931([0x0, 0x0, 0x0, 0x1, 0x1], 0x7);
        _0x31e1b7.mapKey = _0x2ae931([0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2], 0x2);
        _0x31e1b7.packed = _0x2ae931([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0]);
        _0x388451.exports;
      }, function () {
        return {
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/field.js", function (_0xccd2b6, _0x1a49df, _0xa49d3, _0x119ade, _0x5898e4) {
        _0xa49d3.exports = _0x225100;
        var _0x33bd86 = _0x1a49df("./object");
        ((_0x225100.prototype = Object.create(_0x33bd86.prototype)).constructor = _0x225100).className = 'Field';
        var _0x29d71d;
        var _0x2f86b3 = _0x1a49df('./enum');
        var _0x2fc461 = _0x1a49df("./types");
        var _0x206ea7 = _0x1a49df("./util");
        var _0x5d90f1 = /^required|optional|repeated$/;
        function _0x225100(_0x1ef850, _0x263d2c, _0x2c8c15, _0x789642, _0xd4f03f, _0x2e189c, _0x3e917c) {
          if (_0x206ea7.isObject(_0x789642)) {
            _0x3e917c = _0xd4f03f;
            _0x2e189c = _0x789642;
            _0x789642 = _0xd4f03f = undefined;
          } else if (_0x206ea7.isObject(_0xd4f03f)) {
            _0x3e917c = _0x2e189c;
            _0x2e189c = _0xd4f03f;
            _0xd4f03f = undefined;
          }
          _0x33bd86.call(this, _0x1ef850, _0x2e189c);
          if (!_0x206ea7.isInteger(_0x263d2c) || _0x263d2c < 0x0) {
            throw TypeError("id must be a non-negative integer");
          }
          if (!_0x206ea7.isString(_0x2c8c15)) {
            throw TypeError("type must be a string");
          }
          if (undefined !== _0x789642 && !_0x5d90f1.test(_0x789642 = _0x789642.toString().toLowerCase())) {
            throw TypeError("rule must be a string rule");
          }
          if (undefined !== _0xd4f03f && !_0x206ea7.isString(_0xd4f03f)) {
            throw TypeError("extend must be a string");
          }
          if ('proto3_optional' === _0x789642) {
            _0x789642 = "optional";
          }
          this.rule = _0x789642 && "optional" !== _0x789642 ? _0x789642 : undefined;
          this.type = _0x2c8c15;
          this.id = _0x263d2c;
          this.extend = _0xd4f03f || undefined;
          this.required = "required" === _0x789642;
          this.optional = !this.required;
          this.repeated = 'repeated' === _0x789642;
          this.map = false;
          this.message = null;
          this.partOf = null;
          this.typeDefault = null;
          this.defaultValue = null;
          this.long = !!_0x206ea7.Long && undefined !== _0x2fc461.long[_0x2c8c15];
          this.bytes = "bytes" === _0x2c8c15;
          this.resolvedType = null;
          this.extensionField = null;
          this.declaringField = null;
          this._packed = null;
          this.comment = _0x3e917c;
        }
        _0x225100.fromJSON = function (_0x19e86e, _0x2ca746) {
          return new _0x225100(_0x19e86e, _0x2ca746.id, _0x2ca746.type, _0x2ca746.rule, _0x2ca746.extend, _0x2ca746.options, _0x2ca746.comment);
        };
        Object.defineProperty(_0x225100.prototype, 'packed', {
          'get': function () {
            if (null === this._packed) {
              this._packed = false !== this.getOption("packed");
            }
            return this._packed;
          }
        });
        _0x225100.prototype.setOption = function (_0x39fd28, _0x2d6c04, _0x2de1b2) {
          if ("packed" === _0x39fd28) {
            this._packed = null;
          }
          return _0x33bd86.prototype.setOption.call(this, _0x39fd28, _0x2d6c04, _0x2de1b2);
        };
        _0x225100.prototype.toJSON = function (_0x50f23f) {
          var _0x2a6a28 = !!_0x50f23f && Boolean(_0x50f23f.keepComments);
          return _0x206ea7.toObject(["rule", 'optional' !== this.rule && this.rule || undefined, "type", this.type, 'id', this.id, "extend", this.extend, 'options', this.options, "comment", _0x2a6a28 ? this.comment : undefined]);
        };
        _0x225100.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === (this.typeDefault = _0x2fc461.defaults[this.type])) {
            this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
            if (this.resolvedType instanceof _0x29d71d) {
              this.typeDefault = null;
            } else {
              this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0x0]];
            }
          }
          if (this.options && null != this.options["default"]) {
            this.typeDefault = this.options["default"];
            if (this.resolvedType instanceof _0x2f86b3 && "string" == typeof this.typeDefault) {
              this.typeDefault = this.resolvedType.values[this.typeDefault];
            }
          }
          if (this.options) {
            if (!(true !== this.options.packed && (undefined === this.options.packed || !this.resolvedType || this.resolvedType instanceof _0x2f86b3))) {
              delete this.options.packed;
            }
            if (!Object.keys(this.options).length) {
              this.options = undefined;
            }
          }
          if (this.long) {
            this.typeDefault = _0x206ea7.Long.fromNumber(this.typeDefault, 'u' === this.type.charAt(0x0));
            if (Object.freeze) {
              Object.freeze(this.typeDefault);
            }
          } else {
            if (this.bytes && "string" == typeof this.typeDefault) {
              var _0x28cee6;
              if (_0x206ea7.base64.test(this.typeDefault)) {
                _0x206ea7.base64.decode(this.typeDefault, _0x28cee6 = _0x206ea7.newBuffer(_0x206ea7.base64.length(this.typeDefault)), 0x0);
              } else {
                _0x206ea7.utf8.write(this.typeDefault, _0x28cee6 = _0x206ea7.newBuffer(_0x206ea7.utf8.length(this.typeDefault)), 0x0);
              }
              this.typeDefault = _0x28cee6;
            }
          }
          if (this.map) {
            this.defaultValue = _0x206ea7.emptyObject;
          } else if (this.repeated) {
            this.defaultValue = _0x206ea7.emptyArray;
          } else {
            this.defaultValue = this.typeDefault;
          }
          if (this.parent instanceof _0x29d71d) {
            this.parent.ctor.prototype[this.name] = this.defaultValue;
          }
          return _0x33bd86.prototype.resolve.call(this);
        };
        _0x225100.d = function (_0x5f09ea, _0x2beb50, _0x16a612, _0x3bdff8) {
          if ("function" == typeof _0x2beb50) {
            _0x2beb50 = _0x206ea7.decorateType(_0x2beb50).name;
          } else if (_0x2beb50 && "object" == typeof _0x2beb50) {
            _0x2beb50 = _0x206ea7.decorateEnum(_0x2beb50).name;
          }
          return function (_0x25571d, _0x423c77) {
            _0x206ea7.decorateType(_0x25571d.constructor).add(new _0x225100(_0x423c77, _0x5f09ea, _0x2beb50, _0x16a612, {
              'default': _0x3bdff8
            }));
          };
        };
        _0x225100._configure = function (_0x4d8fc1) {
          _0x29d71d = _0x4d8fc1;
        };
        _0xa49d3.exports;
      }, function () {
        return {
          './object': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/object.js',
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js", function (_0xf26fb8, _0x543250, _0x3b62b6, _0x530be6, _0x4b94af) {
        _0x3b62b6.exports = _0x5a26ed;
        var _0x53dff8 = _0x543250("./object");
        ((_0x5a26ed.prototype = Object.create(_0x53dff8.prototype)).constructor = _0x5a26ed).className = "OneOf";
        var _0x384e36 = _0x543250("./field");
        var _0x23785f = _0x543250('./util');
        function _0x5a26ed(_0x39c562, _0x590416, _0x24769f, _0x353cc8) {
          if (!Array.isArray(_0x590416)) {
            _0x24769f = _0x590416;
            _0x590416 = undefined;
          }
          _0x53dff8.call(this, _0x39c562, _0x24769f);
          if (undefined !== _0x590416 && !Array.isArray(_0x590416)) {
            throw TypeError("fieldNames must be an Array");
          }
          this.oneof = _0x590416 || [];
          this.fieldsArray = [];
          this.comment = _0x353cc8;
        }
        function _0x2adb68(_0x28b0d6) {
          if (_0x28b0d6.parent) {
            for (var _0x2e9de1 = 0x0; _0x2e9de1 < _0x28b0d6.fieldsArray.length; ++_0x2e9de1) {
              if (!_0x28b0d6.fieldsArray[_0x2e9de1].parent) {
                _0x28b0d6.parent.add(_0x28b0d6.fieldsArray[_0x2e9de1]);
              }
            }
          }
        }
        _0x5a26ed.fromJSON = function (_0x4f66ba, _0x186375) {
          return new _0x5a26ed(_0x4f66ba, _0x186375.oneof, _0x186375.options, _0x186375.comment);
        };
        _0x5a26ed.prototype.toJSON = function (_0xccbd3) {
          var _0x15fa1b = !!_0xccbd3 && Boolean(_0xccbd3.keepComments);
          return _0x23785f.toObject(["options", this.options, "oneof", this.oneof, "comment", _0x15fa1b ? this.comment : undefined]);
        };
        _0x5a26ed.prototype.add = function (_0x1c5c24) {
          if (!(_0x1c5c24 instanceof _0x384e36)) {
            throw TypeError("field must be a Field");
          }
          if (_0x1c5c24.parent && _0x1c5c24.parent !== this.parent) {
            _0x1c5c24.parent.remove(_0x1c5c24);
          }
          this.oneof.push(_0x1c5c24.name);
          this.fieldsArray.push(_0x1c5c24);
          _0x1c5c24.partOf = this;
          _0x2adb68(this);
          return this;
        };
        _0x5a26ed.prototype.remove = function (_0x2d5d09) {
          if (!(_0x2d5d09 instanceof _0x384e36)) {
            throw TypeError("field must be a Field");
          }
          var _0x5a9620 = this.fieldsArray.indexOf(_0x2d5d09);
          if (_0x5a9620 < 0x0) {
            throw Error(_0x2d5d09 + " is not a member of " + this);
          }
          this.fieldsArray.splice(_0x5a9620, 0x1);
          if ((_0x5a9620 = this.oneof.indexOf(_0x2d5d09.name)) > -0x1) {
            this.oneof.splice(_0x5a9620, 0x1);
          }
          _0x2d5d09.partOf = null;
          return this;
        };
        _0x5a26ed.prototype.onAdd = function (_0x53b2d2) {
          _0x53dff8.prototype.onAdd.call(this, _0x53b2d2);
          for (var _0x99c9a0 = 0x0; _0x99c9a0 < this.oneof.length; ++_0x99c9a0) {
            var _0x5a7c28 = _0x53b2d2.get(this.oneof[_0x99c9a0]);
            if (_0x5a7c28 && !_0x5a7c28.partOf) {
              _0x5a7c28.partOf = this;
              this.fieldsArray.push(_0x5a7c28);
            }
          }
          _0x2adb68(this);
        };
        _0x5a26ed.prototype.onRemove = function (_0x193eaf) {
          var _0x270492;
          for (var _0x59df52 = 0x0; _0x59df52 < this.fieldsArray.length; ++_0x59df52) {
            if ((_0x270492 = this.fieldsArray[_0x59df52]).parent) {
              _0x270492.parent.remove(_0x270492);
            }
          }
          _0x53dff8.prototype.onRemove.call(this, _0x193eaf);
        };
        _0x5a26ed.d = function () {
          var _0x51bddd = new Array(arguments.length);
          for (var _0x4e355c = 0x0; _0x4e355c < arguments.length;) {
            _0x51bddd[_0x4e355c] = arguments[_0x4e355c++];
          }
          return function (_0x34671a, _0x281752) {
            _0x23785f.decorateType(_0x34671a.constructor).add(new _0x5a26ed(_0x281752, _0x51bddd));
            Object.defineProperty(_0x34671a, _0x281752, {
              'get': _0x23785f.oneOfGetter(_0x51bddd),
              'set': _0x23785f.oneOfSetter(_0x51bddd)
            });
          };
        };
        _0x3b62b6.exports;
      }, function () {
        return {
          './object': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/object.js',
          './field': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js", function (_0x433f41, _0x40da45, _0x5751a0, _0x5bb2f6, _0x2a75da) {
        _0x5751a0.exports = _0x686d04;
        var _0x4b25ee = _0x40da45("./object");
        ((_0x686d04.prototype = Object.create(_0x4b25ee.prototype)).constructor = _0x686d04).className = 'Namespace';
        var _0x148dfd;
        var _0x37eb47;
        var _0x1a656f;
        var _0x336058 = _0x40da45("./field");
        var _0x68404e = _0x40da45('./oneof');
        var _0x3ed9f6 = _0x40da45("./util");
        function _0x37d8c0(_0x35b261, _0x479eb9) {
          if (_0x35b261 && _0x35b261.length) {
            var _0xa2c692 = {};
            for (var _0x547871 = 0x0; _0x547871 < _0x35b261.length; ++_0x547871) {
              _0xa2c692[_0x35b261[_0x547871].name] = _0x35b261[_0x547871].toJSON(_0x479eb9);
            }
            return _0xa2c692;
          }
        }
        function _0x686d04(_0x2b7746, _0x22940e) {
          _0x4b25ee.call(this, _0x2b7746, _0x22940e);
          this.nested = undefined;
          this._nestedArray = null;
        }
        function _0x18fe98(_0x16d269) {
          _0x16d269._nestedArray = null;
          return _0x16d269;
        }
        _0x686d04.fromJSON = function (_0x69c154, _0x33c28d) {
          return new _0x686d04(_0x69c154, _0x33c28d.options).addJSON(_0x33c28d.nested);
        };
        _0x686d04.arrayToJSON = _0x37d8c0;
        _0x686d04.isReservedId = function (_0x1966e6, _0x5d6e74) {
          if (_0x1966e6) {
            for (var _0x33cf00 = 0x0; _0x33cf00 < _0x1966e6.length; ++_0x33cf00) {
              if ("string" != typeof _0x1966e6[_0x33cf00] && _0x1966e6[_0x33cf00][0x0] <= _0x5d6e74 && _0x1966e6[_0x33cf00][0x1] > _0x5d6e74) {
                return true;
              }
            }
          }
          return false;
        };
        _0x686d04.isReservedName = function (_0x75d681, _0xae4d40) {
          if (_0x75d681) {
            for (var _0x3357b5 = 0x0; _0x3357b5 < _0x75d681.length; ++_0x3357b5) {
              if (_0x75d681[_0x3357b5] === _0xae4d40) {
                return true;
              }
            }
          }
          return false;
        };
        Object.defineProperty(_0x686d04.prototype, "nestedArray", {
          'get': function () {
            return this._nestedArray || (this._nestedArray = _0x3ed9f6.toArray(this.nested));
          }
        });
        _0x686d04.prototype.toJSON = function (_0x487581) {
          return _0x3ed9f6.toObject(["options", this.options, "nested", _0x37d8c0(this.nestedArray, _0x487581)]);
        };
        _0x686d04.prototype.addJSON = function (_0x4ee9bc) {
          if (_0x4ee9bc) {
            var _0x169ed4;
            var _0x133cc5 = Object.keys(_0x4ee9bc);
            for (var _0x2bdcac = 0x0; _0x2bdcac < _0x133cc5.length; ++_0x2bdcac) {
              _0x169ed4 = _0x4ee9bc[_0x133cc5[_0x2bdcac]];
              this.add((undefined !== _0x169ed4.fields ? _0x148dfd.fromJSON : undefined !== _0x169ed4.values ? _0x1a656f.fromJSON : undefined !== _0x169ed4.methods ? _0x37eb47.fromJSON : undefined !== _0x169ed4.id ? _0x336058.fromJSON : _0x686d04.fromJSON)(_0x133cc5[_0x2bdcac], _0x169ed4));
            }
          }
          return this;
        };
        _0x686d04.prototype.get = function (_0x3254f5) {
          return this.nested && this.nested[_0x3254f5] || null;
        };
        _0x686d04.prototype.getEnum = function (_0x3a07fe) {
          if (this.nested && this.nested[_0x3a07fe] instanceof _0x1a656f) {
            return this.nested[_0x3a07fe].values;
          }
          throw Error("no such enum: " + _0x3a07fe);
        };
        _0x686d04.prototype.add = function (_0x3af340) {
          if (!(_0x3af340 instanceof _0x336058 && undefined !== _0x3af340.extend || _0x3af340 instanceof _0x148dfd || _0x3af340 instanceof _0x1a656f || _0x3af340 instanceof _0x37eb47 || _0x3af340 instanceof _0x686d04 || _0x3af340 instanceof _0x68404e)) {
            throw TypeError("object must be a valid nested object");
          }
          if (this.nested) {
            var _0x91f5f2 = this.get(_0x3af340.name);
            if (_0x91f5f2) {
              if (!(_0x91f5f2 instanceof _0x686d04 && _0x3af340 instanceof _0x686d04) || _0x91f5f2 instanceof _0x148dfd || _0x91f5f2 instanceof _0x37eb47) {
                throw Error("duplicate name '" + _0x3af340.name + "' in " + this);
              }
              var _0x53af16 = _0x91f5f2.nestedArray;
              for (var _0x385928 = 0x0; _0x385928 < _0x53af16.length; ++_0x385928) {
                _0x3af340.add(_0x53af16[_0x385928]);
              }
              this.remove(_0x91f5f2);
              if (!this.nested) {
                this.nested = {};
              }
              _0x3af340.setOptions(_0x91f5f2.options, true);
            }
          } else {
            this.nested = {};
          }
          this.nested[_0x3af340.name] = _0x3af340;
          _0x3af340.onAdd(this);
          return _0x18fe98(this);
        };
        _0x686d04.prototype.remove = function (_0x30f2b5) {
          if (!(_0x30f2b5 instanceof _0x4b25ee)) {
            throw TypeError("object must be a ReflectionObject");
          }
          if (_0x30f2b5.parent !== this) {
            throw Error(_0x30f2b5 + " is not a member of " + this);
          }
          delete this.nested[_0x30f2b5.name];
          if (!Object.keys(this.nested).length) {
            this.nested = undefined;
          }
          _0x30f2b5.onRemove(this);
          return _0x18fe98(this);
        };
        _0x686d04.prototype.define = function (_0x1b7521, _0x4e1818) {
          if (_0x3ed9f6.isString(_0x1b7521)) {
            _0x1b7521 = _0x1b7521.split('.');
          } else {
            if (!Array.isArray(_0x1b7521)) {
              throw TypeError("illegal path");
            }
          }
          if (_0x1b7521 && _0x1b7521.length && '' === _0x1b7521[0x0]) {
            throw Error("path must be relative");
          }
          for (var _0x50e4bb = this; _0x1b7521.length > 0x0;) {
            var _0x50cf07 = _0x1b7521.shift();
            if (_0x50e4bb.nested && _0x50e4bb.nested[_0x50cf07]) {
              if (!((_0x50e4bb = _0x50e4bb.nested[_0x50cf07]) instanceof _0x686d04)) {
                throw Error("path conflicts with non-namespace objects");
              }
            } else {
              _0x50e4bb.add(_0x50e4bb = new _0x686d04(_0x50cf07));
            }
          }
          if (_0x4e1818) {
            _0x50e4bb.addJSON(_0x4e1818);
          }
          return _0x50e4bb;
        };
        _0x686d04.prototype.resolveAll = function () {
          var _0x41adaf = this.nestedArray;
          for (var _0x125ae1 = 0x0; _0x125ae1 < _0x41adaf.length;) {
            if (_0x41adaf[_0x125ae1] instanceof _0x686d04) {
              _0x41adaf[_0x125ae1++].resolveAll();
            } else {
              _0x41adaf[_0x125ae1++].resolve();
            }
          }
          return this.resolve();
        };
        _0x686d04.prototype.lookup = function (_0x51068c, _0x1482a9, _0x5cfad9) {
          if ("boolean" == typeof _0x1482a9) {
            _0x5cfad9 = _0x1482a9;
            _0x1482a9 = undefined;
          } else if (_0x1482a9 && !Array.isArray(_0x1482a9)) {
            _0x1482a9 = [_0x1482a9];
          }
          if (_0x3ed9f6.isString(_0x51068c) && _0x51068c.length) {
            if ('.' === _0x51068c) {
              return this.root;
            }
            _0x51068c = _0x51068c.split('.');
          } else {
            if (!_0x51068c.length) {
              return this;
            }
          }
          if ('' === _0x51068c[0x0]) {
            return this.root.lookup(_0x51068c.slice(0x1), _0x1482a9);
          }
          var _0x4a35a1 = this.get(_0x51068c[0x0]);
          if (_0x4a35a1) {
            if (0x1 === _0x51068c.length) {
              if (!_0x1482a9 || _0x1482a9.indexOf(_0x4a35a1.constructor) > -0x1) {
                return _0x4a35a1;
              }
            } else {
              if (_0x4a35a1 instanceof _0x686d04 && (_0x4a35a1 = _0x4a35a1.lookup(_0x51068c.slice(0x1), _0x1482a9, true))) {
                return _0x4a35a1;
              }
            }
          } else {
            for (var _0x135332 = 0x0; _0x135332 < this.nestedArray.length; ++_0x135332) {
              if (this._nestedArray[_0x135332] instanceof _0x686d04 && (_0x4a35a1 = this._nestedArray[_0x135332].lookup(_0x51068c, _0x1482a9, true))) {
                return _0x4a35a1;
              }
            }
          }
          return null === this.parent || _0x5cfad9 ? null : this.parent.lookup(_0x51068c, _0x1482a9);
        };
        _0x686d04.prototype.lookupType = function (_0x35f67c) {
          var _0x35e0a5 = this.lookup(_0x35f67c, [_0x148dfd]);
          if (!_0x35e0a5) {
            throw Error("no such type: " + _0x35f67c);
          }
          return _0x35e0a5;
        };
        _0x686d04.prototype.lookupEnum = function (_0x1121eb) {
          var _0xddae57 = this.lookup(_0x1121eb, [_0x1a656f]);
          if (!_0xddae57) {
            throw Error("no such Enum '" + _0x1121eb + "' in " + this);
          }
          return _0xddae57;
        };
        _0x686d04.prototype.lookupTypeOrEnum = function (_0x464bcb) {
          var _0xe25eeb = this.lookup(_0x464bcb, [_0x148dfd, _0x1a656f]);
          if (!_0xe25eeb) {
            throw Error("no such Type or Enum '" + _0x464bcb + "' in " + this);
          }
          return _0xe25eeb;
        };
        _0x686d04.prototype.lookupService = function (_0x38a8d6) {
          var _0x90b9f9 = this.lookup(_0x38a8d6, [_0x37eb47]);
          if (!_0x90b9f9) {
            throw Error("no such Service '" + _0x38a8d6 + "' in " + this);
          }
          return _0x90b9f9;
        };
        _0x686d04._configure = function (_0x2b5813, _0x27b512, _0x528c30) {
          _0x148dfd = _0x2b5813;
          _0x37eb47 = _0x27b512;
          _0x1a656f = _0x528c30;
        };
        _0x5751a0.exports;
      }, function () {
        return {
          './object': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/object.js',
          './field': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './oneof': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js", function (_0x561286, _0x3ac4e5, _0x55ed1d, _0x2df65e, _0x2db234) {
        _0x55ed1d.exports = _0xa867f5;
        var _0x31e445 = _0x3ac4e5("./field");
        ((_0xa867f5.prototype = Object.create(_0x31e445.prototype)).constructor = _0xa867f5).className = "MapField";
        var _0x4e72e5 = _0x3ac4e5("./types");
        var _0x29e08a = _0x3ac4e5("./util");
        function _0xa867f5(_0x13e021, _0x5ba153, _0x3ab2a0, _0x1c14be, _0x5718be, _0x4a015d) {
          _0x31e445.call(this, _0x13e021, _0x5ba153, _0x1c14be, undefined, undefined, _0x5718be, _0x4a015d);
          if (!_0x29e08a.isString(_0x3ab2a0)) {
            throw TypeError("keyType must be a string");
          }
          this.keyType = _0x3ab2a0;
          this.resolvedKeyType = null;
          this.map = true;
        }
        _0xa867f5.fromJSON = function (_0x452fbb, _0x4b2263) {
          return new _0xa867f5(_0x452fbb, _0x4b2263.id, _0x4b2263.keyType, _0x4b2263.type, _0x4b2263.options, _0x4b2263.comment);
        };
        _0xa867f5.prototype.toJSON = function (_0x1c27f0) {
          var _0x5a3192 = !!_0x1c27f0 && Boolean(_0x1c27f0.keepComments);
          return _0x29e08a.toObject(["keyType", this.keyType, "type", this.type, 'id', this.id, "extend", this.extend, "options", this.options, "comment", _0x5a3192 ? this.comment : undefined]);
        };
        _0xa867f5.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === _0x4e72e5.mapKey[this.keyType]) {
            throw Error("invalid key type: " + this.keyType);
          }
          return _0x31e445.prototype.resolve.call(this);
        };
        _0xa867f5.d = function (_0x6cc2a1, _0x312ffe, _0xd63c8b) {
          if ("function" == typeof _0xd63c8b) {
            _0xd63c8b = _0x29e08a.decorateType(_0xd63c8b).name;
          } else if (_0xd63c8b && "object" == typeof _0xd63c8b) {
            _0xd63c8b = _0x29e08a.decorateEnum(_0xd63c8b).name;
          }
          return function (_0x4b4465, _0x18298e) {
            _0x29e08a.decorateType(_0x4b4465.constructor).add(new _0xa867f5(_0x18298e, _0x6cc2a1, _0x312ffe, _0xd63c8b));
          };
        };
        _0x55ed1d.exports;
      }, function () {
        return {
          './field': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './types': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x12e126.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/method.js', function (_0x184aed, _0x55f4d5, _0x2ab89e, _0x9c58bc, _0x5631a9) {
        _0x2ab89e.exports = _0x478f09;
        var _0x21cd67 = _0x55f4d5("./object");
        ((_0x478f09.prototype = Object.create(_0x21cd67.prototype)).constructor = _0x478f09).className = "Method";
        var _0x1d4eb2 = _0x55f4d5("./util");
        function _0x478f09(_0x3f9685, _0x4a387c, _0x1ca723, _0x2d2ef1, _0x4f41e3, _0x3bd3cf, _0x1f924a, _0x1d5776, _0x74d3c7) {
          if (_0x1d4eb2.isObject(_0x4f41e3)) {
            _0x1f924a = _0x4f41e3;
            _0x4f41e3 = _0x3bd3cf = undefined;
          } else if (_0x1d4eb2.isObject(_0x3bd3cf)) {
            _0x1f924a = _0x3bd3cf;
            _0x3bd3cf = undefined;
          }
          if (undefined !== _0x4a387c && !_0x1d4eb2.isString(_0x4a387c)) {
            throw TypeError("type must be a string");
          }
          if (!_0x1d4eb2.isString(_0x1ca723)) {
            throw TypeError("requestType must be a string");
          }
          if (!_0x1d4eb2.isString(_0x2d2ef1)) {
            throw TypeError("responseType must be a string");
          }
          _0x21cd67.call(this, _0x3f9685, _0x1f924a);
          this.type = _0x4a387c || 'rpc';
          this.requestType = _0x1ca723;
          this.requestStream = !!_0x4f41e3 || undefined;
          this.responseType = _0x2d2ef1;
          this.responseStream = !!_0x3bd3cf || undefined;
          this.resolvedRequestType = null;
          this.resolvedResponseType = null;
          this.comment = _0x1d5776;
          this.parsedOptions = _0x74d3c7;
        }
        _0x478f09.fromJSON = function (_0x12890e, _0x50694c) {
          return new _0x478f09(_0x12890e, _0x50694c.type, _0x50694c.requestType, _0x50694c.responseType, _0x50694c.requestStream, _0x50694c.responseStream, _0x50694c.options, _0x50694c.comment, _0x50694c.parsedOptions);
        };
        _0x478f09.prototype.toJSON = function (_0x8bbaef) {
          var _0x15b1c8 = !!_0x8bbaef && Boolean(_0x8bbaef.keepComments);
          return _0x1d4eb2.toObject(["type", "rpc" !== this.type && this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, 'responseStream', this.responseStream, "options", this.options, "comment", _0x15b1c8 ? this.comment : undefined, 'parsedOptions', this.parsedOptions]);
        };
        _0x478f09.prototype.resolve = function () {
          return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), _0x21cd67.prototype.resolve.call(this));
        };
        _0x2ab89e.exports;
      }, function () {
        return {
          './object': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/object.js',
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x12e126.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/service.js', function (_0x422ffb, _0x453b3c, _0x308d5c, _0x5b250d, _0x364926) {
        _0x308d5c.exports = _0x346b;
        var _0x1ffef1 = _0x453b3c("./namespace");
        ((_0x346b.prototype = Object.create(_0x1ffef1.prototype)).constructor = _0x346b).className = "Service";
        var _0x42ee9b = _0x453b3c("./method");
        var _0x139e2f = _0x453b3c("./util");
        var _0x120842 = _0x453b3c("./rpc");
        function _0x346b(_0x1d2a96, _0x316ac5) {
          _0x1ffef1.call(this, _0x1d2a96, _0x316ac5);
          this.methods = {};
          this._methodsArray = null;
        }
        function _0x441052(_0x50ffb1) {
          _0x50ffb1._methodsArray = null;
          return _0x50ffb1;
        }
        _0x346b.fromJSON = function (_0x1c12f5, _0x520bad) {
          var _0x5b980e = new _0x346b(_0x1c12f5, _0x520bad.options);
          if (_0x520bad.methods) {
            var _0x39dbdb = Object.keys(_0x520bad.methods);
            for (var _0x37c8ca = 0x0; _0x37c8ca < _0x39dbdb.length; ++_0x37c8ca) {
              _0x5b980e.add(_0x42ee9b.fromJSON(_0x39dbdb[_0x37c8ca], _0x520bad.methods[_0x39dbdb[_0x37c8ca]]));
            }
          }
          if (_0x520bad.nested) {
            _0x5b980e.addJSON(_0x520bad.nested);
          }
          _0x5b980e.comment = _0x520bad.comment;
          return _0x5b980e;
        };
        _0x346b.prototype.toJSON = function (_0x417ae8) {
          var _0x34d4a3 = _0x1ffef1.prototype.toJSON.call(this, _0x417ae8);
          var _0xce72f9 = !!_0x417ae8 && Boolean(_0x417ae8.keepComments);
          return _0x139e2f.toObject(["options", _0x34d4a3 && _0x34d4a3.options || undefined, "methods", _0x1ffef1.arrayToJSON(this.methodsArray, _0x417ae8) || {}, "nested", _0x34d4a3 && _0x34d4a3.nested || undefined, "comment", _0xce72f9 ? this.comment : undefined]);
        };
        Object.defineProperty(_0x346b.prototype, "methodsArray", {
          'get': function () {
            return this._methodsArray || (this._methodsArray = _0x139e2f.toArray(this.methods));
          }
        });
        _0x346b.prototype.get = function (_0x56220c) {
          return this.methods[_0x56220c] || _0x1ffef1.prototype.get.call(this, _0x56220c);
        };
        _0x346b.prototype.resolveAll = function () {
          var _0x4a3d90 = this.methodsArray;
          for (var _0x5fa26e = 0x0; _0x5fa26e < _0x4a3d90.length; ++_0x5fa26e) {
            _0x4a3d90[_0x5fa26e].resolve();
          }
          return _0x1ffef1.prototype.resolve.call(this);
        };
        _0x346b.prototype.add = function (_0xc08eb5) {
          if (this.get(_0xc08eb5.name)) {
            throw Error("duplicate name '" + _0xc08eb5.name + "' in " + this);
          }
          return _0xc08eb5 instanceof _0x42ee9b ? (this.methods[_0xc08eb5.name] = _0xc08eb5, _0xc08eb5.parent = this, _0x441052(this)) : _0x1ffef1.prototype.add.call(this, _0xc08eb5);
        };
        _0x346b.prototype.remove = function (_0x2752b0) {
          if (_0x2752b0 instanceof _0x42ee9b) {
            if (this.methods[_0x2752b0.name] !== _0x2752b0) {
              throw Error(_0x2752b0 + " is not a member of " + this);
            }
            delete this.methods[_0x2752b0.name];
            _0x2752b0.parent = null;
            return _0x441052(this);
          }
          return _0x1ffef1.prototype.remove.call(this, _0x2752b0);
        };
        _0x346b.prototype.create = function (_0x2f411a, _0x317c2e, _0x39696c) {
          var _0x3c0af8;
          var _0x221ef4 = new _0x120842.Service(_0x2f411a, _0x317c2e, _0x39696c);
          for (var _0xde09b7 = 0x0; _0xde09b7 < this.methodsArray.length; ++_0xde09b7) {
            var _0x50467c = _0x139e2f.lcFirst((_0x3c0af8 = this._methodsArray[_0xde09b7]).resolve().name).replace(/[^$\w_]/g, '');
            _0x221ef4[_0x50467c] = _0x139e2f.codegen(['r', 'c'], _0x139e2f.isReserved(_0x50467c) ? _0x50467c + '_' : _0x50467c)("return this.rpcCall(m,q,s,r,c)")({
              'm': _0x3c0af8,
              'q': _0x3c0af8.resolvedRequestType.ctor,
              's': _0x3c0af8.resolvedResponseType.ctor
            });
          }
          return _0x221ef4;
        };
        _0x308d5c.exports;
      }, function () {
        return {
          './namespace': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './method': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/method.js',
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './rpc': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js"
        };
      });
      _0x12e126.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/message.js', function (_0x173c4c, _0x14f329, _0x4c79a3, _0x9da4b7, _0x5393ea) {
        _0x4c79a3.exports = _0x477391;
        var _0x3768e8 = _0x14f329("./util/minimal");
        function _0x477391(_0x1c43ca) {
          if (_0x1c43ca) {
            var _0x2168ed = Object.keys(_0x1c43ca);
            for (var _0x1f3c79 = 0x0; _0x1f3c79 < _0x2168ed.length; ++_0x1f3c79) {
              this[_0x2168ed[_0x1f3c79]] = _0x1c43ca[_0x2168ed[_0x1f3c79]];
            }
          }
        }
        _0x477391.create = function (_0x60c9f6) {
          return this.$type.create(_0x60c9f6);
        };
        _0x477391.encode = function (_0x4cf0a8, _0x12cdf6) {
          return this.$type.encode(_0x4cf0a8, _0x12cdf6);
        };
        _0x477391.encodeDelimited = function (_0x35fb5a, _0x5eb280) {
          return this.$type.encodeDelimited(_0x35fb5a, _0x5eb280);
        };
        _0x477391.decode = function (_0x4e0643) {
          return this.$type.decode(_0x4e0643);
        };
        _0x477391.decodeDelimited = function (_0x31ddfb) {
          return this.$type.decodeDelimited(_0x31ddfb);
        };
        _0x477391.verify = function (_0x3bbbc4) {
          return this.$type.verify(_0x3bbbc4);
        };
        _0x477391.fromObject = function (_0x4240a8) {
          return this.$type.fromObject(_0x4240a8);
        };
        _0x477391.toObject = function (_0x3c30f5, _0x148cd5) {
          return this.$type.toObject(_0x3c30f5, _0x148cd5);
        };
        _0x477391.prototype.toJSON = function () {
          return this.$type.toObject(this, _0x3768e8.toJSONOptions);
        };
        _0x4c79a3.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js", function (_0x15eb65, _0x20da1c, _0x3226dc, _0x5505b3, _0x4de932) {
        _0x3226dc.exports = function (_0x1d8bee) {
          var _0x4952f8 = _0xd8055e.codegen(['r', 'l'], _0x1d8bee.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (_0x1d8bee.fieldsArray.filter(function (_0x33ac61) {
            return _0x33ac61.map;
          }).length ? ",k,value" : ''))("while(r.pos<c){")("var t=r.uint32()");
          if (_0x1d8bee.group) {
            _0x4952f8("if((t&7)===4)")('break');
          }
          _0x4952f8("switch(t>>>3){");
          for (var _0x16f647 = 0x0; _0x16f647 < _0x1d8bee.fieldsArray.length; ++_0x16f647) {
            var _0x370abb = _0x1d8bee._fieldsArray[_0x16f647].resolve();
            var _0x3177b2 = _0x370abb.resolvedType instanceof _0x481a49 ? 'int32' : _0x370abb.type;
            var _0x1797c7 = 'm' + _0xd8055e.safeProp(_0x370abb.name);
            _0x4952f8("case %i:", _0x370abb.id);
            if (_0x370abb.map) {
              _0x4952f8("if(%s===util.emptyObject)", _0x1797c7)('%s={}', _0x1797c7)("var c2 = r.uint32()+r.pos");
              if (undefined !== _0x24a2de.defaults[_0x370abb.keyType]) {
                _0x4952f8('k=%j', _0x24a2de.defaults[_0x370abb.keyType]);
              } else {
                _0x4952f8("k=null");
              }
              if (undefined !== _0x24a2de.defaults[_0x3177b2]) {
                _0x4952f8("value=%j", _0x24a2de.defaults[_0x3177b2]);
              } else {
                _0x4952f8('value=null');
              }
              _0x4952f8("while(r.pos<c2){")("var tag2=r.uint32()")('switch(tag2>>>3){')("case 1: k=r.%s(); break", _0x370abb.keyType)("case 2:");
              if (undefined === _0x24a2de.basic[_0x3177b2]) {
                _0x4952f8('value=types[%i].decode(r,r.uint32())', _0x16f647);
              } else {
                _0x4952f8('value=r.%s()', _0x3177b2);
              }
              _0x4952f8("break")("default:")('r.skipType(tag2&7)')('break')('}')('}');
              if (undefined !== _0x24a2de.long[_0x370abb.keyType]) {
                _0x4952f8("%s[typeof k===\"object\"?util.longToHash(k):k]=value", _0x1797c7);
              } else {
                _0x4952f8("%s[k]=value", _0x1797c7);
              }
            } else if (_0x370abb.repeated) {
              _0x4952f8("if(!(%s&&%s.length))", _0x1797c7, _0x1797c7)("%s=[]", _0x1797c7);
              if (undefined !== _0x24a2de.packed[_0x3177b2]) {
                _0x4952f8("if((t&7)===2){")("var c2=r.uint32()+r.pos")('while(r.pos<c2)')("%s.push(r.%s())", _0x1797c7, _0x3177b2)("}else");
              }
              if (undefined === _0x24a2de.basic[_0x3177b2]) {
                _0x4952f8(_0x370abb.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", _0x1797c7, _0x16f647);
              } else {
                _0x4952f8('%s.push(r.%s())', _0x1797c7, _0x3177b2);
              }
            } else if (undefined === _0x24a2de.basic[_0x3177b2]) {
              _0x4952f8(_0x370abb.resolvedType.group ? "%s=types[%i].decode(r)" : '%s=types[%i].decode(r,r.uint32())', _0x1797c7, _0x16f647);
            } else {
              _0x4952f8('%s=r.%s()', _0x1797c7, _0x3177b2);
            }
            _0x4952f8("break");
          }
          _0x4952f8("default:")("r.skipType(t&7)")("break")('}')('}');
          for (_0x16f647 = 0x0; _0x16f647 < _0x1d8bee._fieldsArray.length; ++_0x16f647) {
            var _0x5f09c3 = _0x1d8bee._fieldsArray[_0x16f647];
            if (_0x5f09c3.required) {
              _0x4952f8("if(!m.hasOwnProperty(%j))", _0x5f09c3.name)("throw util.ProtocolError(%j,{instance:m})", "missing required '" + _0x5f09c3.name + "'");
            }
          }
          return _0x4952f8("return m");
        };
        var _0x481a49 = _0x20da1c("./enum");
        var _0x24a2de = _0x20da1c("./types");
        var _0xd8055e = _0x20da1c("./util");
        _0x3226dc.exports;
      }, function () {
        return {
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x12e126.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js', function (_0x49ee7f, _0x3538ca, _0x32c751, _0x357d3a, _0x58e16e) {
        _0x32c751.exports = function (_0x5a9b4a) {
          var _0x11dcd8 = _0x36b155.codegen(['m'], _0x5a9b4a.name + "$verify")("if(typeof m!==\"object\"||m===null)")('return%j', "object expected");
          var _0x4b1a37 = _0x5a9b4a.oneofsArray;
          var _0x8f3140 = {};
          if (_0x4b1a37.length) {
            _0x11dcd8("var p={}");
          }
          for (var _0x73e1f2 = 0x0; _0x73e1f2 < _0x5a9b4a.fieldsArray.length; ++_0x73e1f2) {
            var _0x197f4c = _0x5a9b4a._fieldsArray[_0x73e1f2].resolve();
            var _0x3e8733 = 'm' + _0x36b155.safeProp(_0x197f4c.name);
            if (_0x197f4c.optional) {
              _0x11dcd8("if(%s!=null&&m.hasOwnProperty(%j)){", _0x3e8733, _0x197f4c.name);
            }
            if (_0x197f4c.map) {
              _0x11dcd8('if(!util.isObject(%s))', _0x3e8733)('return%j', _0x197f4c.name + ": " + _0x51a9(0xdc1) + (_0x197f4c.repeated && "array" !== _0x51a9(0xdc1) ? '[]' : _0x197f4c.map && false ? "{k:" + _0x197f4c.keyType + '}' : '') + " expected")("var k=Object.keys(%s)", _0x3e8733)("for(var i=0;i<k.length;++i){");
              _0xb6bed4(_0x11dcd8, _0x197f4c, "k[i]");
              _0x46ca26(_0x11dcd8, _0x197f4c, _0x73e1f2, _0x3e8733 + "[k[i]]")('}');
            } else {
              if (_0x197f4c.repeated) {
                _0x11dcd8('if(!Array.isArray(%s))', _0x3e8733)("return%j", _0x197f4c.name + ": " + _0x51a9(0x942) + (_0x197f4c.repeated && "array" !== _0x51a9(0x942) ? '[]' : _0x197f4c.map && true ? "{k:" + _0x197f4c.keyType + '}' : '') + " expected")("for(var i=0;i<%s.length;++i){", _0x3e8733);
                _0x46ca26(_0x11dcd8, _0x197f4c, _0x73e1f2, _0x3e8733 + "[i]")('}');
              } else {
                if (_0x197f4c.partOf) {
                  var _0x1e208f = _0x36b155.safeProp(_0x197f4c.partOf.name);
                  if (0x1 === _0x8f3140[_0x197f4c.partOf.name]) {
                    _0x11dcd8("if(p%s===1)", _0x1e208f)("return%j", _0x197f4c.partOf.name + ": multiple values");
                  }
                  _0x8f3140[_0x197f4c.partOf.name] = 0x1;
                  _0x11dcd8('p%s=1', _0x1e208f);
                }
                _0x46ca26(_0x11dcd8, _0x197f4c, _0x73e1f2, _0x3e8733);
              }
            }
            if (_0x197f4c.optional) {
              _0x11dcd8('}');
            }
          }
          return _0x11dcd8("return null");
        };
        var _0x8c8420 = _0x3538ca("./enum");
        var _0x36b155 = _0x3538ca("./util");
        function _0x46ca26(_0x1c816b, _0x2a2ac6, _0x526493, _0x54d1aa) {
          if (_0x2a2ac6.resolvedType) {
            if (_0x2a2ac6.resolvedType instanceof _0x8c8420) {
              _0x1c816b("switch(%s){", _0x54d1aa)('default:')("return%j", _0x2a2ac6.name + ": " + "enum value" + (_0x2a2ac6.repeated && true ? '[]' : _0x2a2ac6.map && true ? "{k:" + _0x2a2ac6.keyType + '}' : '') + " expected");
              var _0x1373aa = Object.keys(_0x2a2ac6.resolvedType.values);
              for (var _0x12a259 = 0x0; _0x12a259 < _0x1373aa.length; ++_0x12a259) {
                _0x1c816b("case %i:", _0x2a2ac6.resolvedType.values[_0x1373aa[_0x12a259]]);
              }
              _0x1c816b('break')('}');
            } else {
              _0x1c816b('{')("var e=types[%i].verify(%s);", _0x526493, _0x54d1aa)("if(e)")("return%j+e", _0x2a2ac6.name + '.')('}');
            }
          } else {
            switch (_0x2a2ac6.type) {
              case 'int32':
              case 'uint32':
              case "sint32":
              case "fixed32":
              case "sfixed32":
                _0x1c816b('if(!util.isInteger(%s))', _0x54d1aa)("return%j", _0x2a2ac6.name + ": " + _0x51a9(0xec3) + (_0x2a2ac6.repeated && "array" !== _0x51a9(0xec3) ? '[]' : _0x2a2ac6.map && true ? "{k:" + _0x2a2ac6.keyType + '}' : '') + " expected");
                break;
              case "int64":
              case "uint64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                _0x1c816b('if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))', _0x54d1aa, _0x54d1aa, _0x54d1aa, _0x54d1aa)("return%j", _0x2a2ac6.name + ": " + _0x51a9(0x970) + (_0x2a2ac6.repeated && "array" !== _0x51a9(0x970) ? '[]' : _0x2a2ac6.map && true ? "{k:" + _0x2a2ac6.keyType + '}' : '') + " expected");
                break;
              case "float":
              case "double":
                _0x1c816b("if(typeof %s!==\"number\")", _0x54d1aa)("return%j", _0x2a2ac6.name + ": " + _0x51a9(0xc71) + (_0x2a2ac6.repeated && "array" !== _0x51a9(0xc71) ? '[]' : _0x2a2ac6.map && true ? "{k:" + _0x2a2ac6.keyType + '}' : '') + " expected");
                break;
              case "bool":
                _0x1c816b("if(typeof %s!==\"boolean\")", _0x54d1aa)('return%j', _0x2a2ac6.name + ": " + _0x51a9(0x89a) + (_0x2a2ac6.repeated && "array" !== _0x51a9(0x89a) ? '[]' : _0x2a2ac6.map && true ? "{k:" + _0x2a2ac6.keyType + '}' : '') + " expected");
                break;
              case "string":
                _0x1c816b("if(!util.isString(%s))", _0x54d1aa)("return%j", _0x2a2ac6.name + ": " + _0x51a9(0xc64) + (_0x2a2ac6.repeated && "array" !== _0x51a9(0xc64) ? '[]' : _0x2a2ac6.map && true ? "{k:" + _0x2a2ac6.keyType + '}' : '') + " expected");
                break;
              case "bytes":
                _0x1c816b("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", _0x54d1aa, _0x54d1aa, _0x54d1aa)("return%j", _0x2a2ac6.name + ": " + _0x51a9(0x33d) + (_0x2a2ac6.repeated && "array" !== _0x51a9(0x33d) ? '[]' : _0x2a2ac6.map && true ? "{k:" + _0x2a2ac6.keyType + '}' : '') + " expected");
            }
          }
          return _0x1c816b;
        }
        function _0xb6bed4(_0x1553f0, _0xd63938, _0x1a80e9) {
          switch (_0xd63938.keyType) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
              _0x1553f0('if(!util.key32Re.test(%s))', _0x1a80e9)("return%j", _0xd63938.name + ": " + _0x51a9(0x511) + (_0xd63938.repeated && "array" !== _0x51a9(0x511) ? '[]' : _0xd63938.map && true ? "{k:" + _0xd63938.keyType + '}' : '') + " expected");
              break;
            case "int64":
            case "uint64":
            case 'sint64':
            case "fixed64":
            case "sfixed64":
              _0x1553f0('if(!util.key64Re.test(%s))', _0x1a80e9)('return%j', _0xd63938.name + ": " + _0x51a9(0x4fb) + (_0xd63938.repeated && "array" !== _0x51a9(0x4fb) ? '[]' : _0xd63938.map && true ? "{k:" + _0xd63938.keyType + '}' : '') + " expected");
              break;
            case "bool":
              _0x1553f0("if(!util.key2Re.test(%s))", _0x1a80e9)("return%j", _0xd63938.name + ": " + _0x51a9(0xcc1) + (_0xd63938.repeated && "array" !== _0x51a9(0xcc1) ? '[]' : _0xd63938.map && true ? "{k:" + _0xd63938.keyType + '}' : '') + " expected");
          }
          return _0x1553f0;
        }
        _0x32c751.exports;
      }, function () {
        return {
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/converter.js", function (_0x1e30de, _0x853401, _0x1ed654, _0x19ffd6, _0x4d98be) {
        var _0x3559f5 = _0x853401("./enum");
        var _0x12735b = _0x853401("./util");
        function _0x2c7add(_0x5c1584, _0x32c97d, _0x5e5783, _0x3c0ae1) {
          if (_0x32c97d.resolvedType) {
            if (_0x32c97d.resolvedType instanceof _0x3559f5) {
              _0x5c1584("switch(d%s){", _0x3c0ae1);
              var _0x3d2c73 = _0x32c97d.resolvedType.values;
              var _0x1f57b2 = Object.keys(_0x3d2c73);
              for (var _0x4af59a = 0x0; _0x4af59a < _0x1f57b2.length; ++_0x4af59a) {
                if (_0x32c97d.repeated && _0x3d2c73[_0x1f57b2[_0x4af59a]] === _0x32c97d.typeDefault) {
                  _0x5c1584("default:");
                }
                _0x5c1584('case%j:', _0x1f57b2[_0x4af59a])("case %i:", _0x3d2c73[_0x1f57b2[_0x4af59a]])('m%s=%j', _0x3c0ae1, _0x3d2c73[_0x1f57b2[_0x4af59a]])("break");
              }
              _0x5c1584('}');
            } else {
              _0x5c1584("if(typeof d%s!==\"object\")", _0x3c0ae1)("throw TypeError(%j)", _0x32c97d.fullName + ": object expected")('m%s=types[%i].fromObject(d%s)', _0x3c0ae1, _0x5e5783, _0x3c0ae1);
            }
          } else {
            var _0x2026c2 = false;
            switch (_0x32c97d.type) {
              case "double":
              case "float":
                _0x5c1584("m%s=Number(d%s)", _0x3c0ae1, _0x3c0ae1);
                break;
              case 'uint32':
              case "fixed32":
                _0x5c1584("m%s=d%s>>>0", _0x3c0ae1, _0x3c0ae1);
                break;
              case "int32":
              case 'sint32':
              case "sfixed32":
                _0x5c1584("m%s=d%s|0", _0x3c0ae1, _0x3c0ae1);
                break;
              case "uint64":
                _0x2026c2 = true;
              case "int64":
              case "sint64":
              case 'fixed64':
              case "sfixed64":
                _0x5c1584("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", _0x3c0ae1, _0x3c0ae1, _0x2026c2)("else if(typeof d%s===\"string\")", _0x3c0ae1)('m%s=parseInt(d%s,10)', _0x3c0ae1, _0x3c0ae1)("else if(typeof d%s===\"number\")", _0x3c0ae1)('m%s=d%s', _0x3c0ae1, _0x3c0ae1)("else if(typeof d%s===\"object\")", _0x3c0ae1)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", _0x3c0ae1, _0x3c0ae1, _0x3c0ae1, _0x2026c2 ? "true" : '');
                break;
              case "bytes":
                _0x5c1584("if(typeof d%s===\"string\")", _0x3c0ae1)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", _0x3c0ae1, _0x3c0ae1, _0x3c0ae1)("else if(d%s.length)", _0x3c0ae1)("m%s=d%s", _0x3c0ae1, _0x3c0ae1);
                break;
              case "string":
                _0x5c1584("m%s=String(d%s)", _0x3c0ae1, _0x3c0ae1);
                break;
              case "bool":
                _0x5c1584("m%s=Boolean(d%s)", _0x3c0ae1, _0x3c0ae1);
            }
          }
          return _0x5c1584;
        }
        function _0x382a5c(_0x17da0a, _0x1582a7, _0x2b95c7, _0x33031c) {
          if (_0x1582a7.resolvedType) {
            if (_0x1582a7.resolvedType instanceof _0x3559f5) {
              _0x17da0a('d%s=o.enums===String?types[%i].values[m%s]:m%s', _0x33031c, _0x2b95c7, _0x33031c, _0x33031c);
            } else {
              _0x17da0a("d%s=types[%i].toObject(m%s,o)", _0x33031c, _0x2b95c7, _0x33031c);
            }
          } else {
            var _0xea5dae = false;
            switch (_0x1582a7.type) {
              case "double":
              case "float":
                _0x17da0a("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", _0x33031c, _0x33031c, _0x33031c, _0x33031c);
                break;
              case "uint64":
                _0xea5dae = true;
              case 'int64':
              case 'sint64':
              case "fixed64":
              case "sfixed64":
                _0x17da0a("if(typeof m%s===\"number\")", _0x33031c)('d%s=o.longs===String?String(m%s):m%s', _0x33031c, _0x33031c, _0x33031c)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", _0x33031c, _0x33031c, _0x33031c, _0x33031c, _0xea5dae ? "true" : '', _0x33031c);
                break;
              case 'bytes':
                _0x17da0a('d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s', _0x33031c, _0x33031c, _0x33031c, _0x33031c, _0x33031c);
                break;
              default:
                _0x17da0a('d%s=m%s', _0x33031c, _0x33031c);
            }
          }
          return _0x17da0a;
        }
        _0x1e30de.fromObject = function (_0x569a8c) {
          var _0x5b9549 = _0x569a8c.fieldsArray;
          var _0x291008 = _0x12735b.codegen(['d'], _0x569a8c.name + '$fromObject')("if(d instanceof this.ctor)")("return d");
          if (!_0x5b9549.length) {
            return _0x291008("return new this.ctor");
          }
          _0x291008("var m=new this.ctor");
          for (var _0x519606 = 0x0; _0x519606 < _0x5b9549.length; ++_0x519606) {
            var _0x11558d = _0x5b9549[_0x519606].resolve();
            var _0x456576 = _0x12735b.safeProp(_0x11558d.name);
            if (_0x11558d.map) {
              _0x291008("if(d%s){", _0x456576)("if(typeof d%s!==\"object\")", _0x456576)("throw TypeError(%j)", _0x11558d.fullName + ": object expected")("m%s={}", _0x456576)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", _0x456576);
              _0x2c7add(_0x291008, _0x11558d, _0x519606, _0x456576 + "[ks[i]]")('}')('}');
            } else if (_0x11558d.repeated) {
              _0x291008("if(d%s){", _0x456576)('if(!Array.isArray(d%s))', _0x456576)("throw TypeError(%j)", _0x11558d.fullName + ": array expected")("m%s=[]", _0x456576)("for(var i=0;i<d%s.length;++i){", _0x456576);
              _0x2c7add(_0x291008, _0x11558d, _0x519606, _0x456576 + "[i]")('}')('}');
            } else {
              if (!(_0x11558d.resolvedType instanceof _0x3559f5)) {
                _0x291008("if(d%s!=null){", _0x456576);
              }
              _0x2c7add(_0x291008, _0x11558d, _0x519606, _0x456576);
              if (!(_0x11558d.resolvedType instanceof _0x3559f5)) {
                _0x291008('}');
              }
            }
          }
          return _0x291008("return m");
        };
        _0x1e30de.toObject = function (_0x3f8b1d) {
          var _0xc9303f = _0x3f8b1d.fieldsArray.slice().sort(_0x12735b.compareFieldsById);
          if (!_0xc9303f.length) {
            return _0x12735b.codegen()("return {}");
          }
          var _0x34a95a = _0x12735b.codegen(['m', 'o'], _0x3f8b1d.name + "$toObject")('if(!o)')("o={}")("var d={}");
          var _0x336ce4 = [];
          var _0x320ba5 = [];
          var _0x10185a = [];
          for (var _0x2e68a0 = 0x0; _0x2e68a0 < _0xc9303f.length; ++_0x2e68a0) {
            if (!_0xc9303f[_0x2e68a0].partOf) {
              (_0xc9303f[_0x2e68a0].resolve().repeated ? _0x336ce4 : _0xc9303f[_0x2e68a0].map ? _0x320ba5 : _0x10185a).push(_0xc9303f[_0x2e68a0]);
            }
          }
          if (_0x336ce4.length) {
            _0x34a95a("if(o.arrays||o.defaults){");
            for (_0x2e68a0 = 0x0; _0x2e68a0 < _0x336ce4.length; ++_0x2e68a0) {
              _0x34a95a("d%s=[]", _0x12735b.safeProp(_0x336ce4[_0x2e68a0].name));
            }
            _0x34a95a('}');
          }
          if (_0x320ba5.length) {
            _0x34a95a("if(o.objects||o.defaults){");
            for (_0x2e68a0 = 0x0; _0x2e68a0 < _0x320ba5.length; ++_0x2e68a0) {
              _0x34a95a("d%s={}", _0x12735b.safeProp(_0x320ba5[_0x2e68a0].name));
            }
            _0x34a95a('}');
          }
          if (_0x10185a.length) {
            _0x34a95a("if(o.defaults){");
            for (_0x2e68a0 = 0x0; _0x2e68a0 < _0x10185a.length; ++_0x2e68a0) {
              var _0x5a869e = _0x10185a[_0x2e68a0];
              var _0xf9cbb4 = _0x12735b.safeProp(_0x5a869e.name);
              if (_0x5a869e.resolvedType instanceof _0x3559f5) {
                _0x34a95a('d%s=o.enums===String?%j:%j', _0xf9cbb4, _0x5a869e.resolvedType.valuesById[_0x5a869e.typeDefault], _0x5a869e.typeDefault);
              } else {
                if (_0x5a869e.long) {
                  _0x34a95a("if(util.Long){")("var n=new util.Long(%i,%i,%j)", _0x5a869e.typeDefault.low, _0x5a869e.typeDefault.high, _0x5a869e.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", _0xf9cbb4)("}else")("d%s=o.longs===String?%j:%i", _0xf9cbb4, _0x5a869e.typeDefault.toString(), _0x5a869e.typeDefault.toNumber());
                } else {
                  if (_0x5a869e.bytes) {
                    var _0x3c0182 = '[' + Array.prototype.slice.call(_0x5a869e.typeDefault).join(',') + ']';
                    _0x34a95a('if(o.bytes===String)d%s=%j', _0xf9cbb4, String.fromCharCode.apply(String, _0x5a869e.typeDefault))("else{")("d%s=%s", _0xf9cbb4, _0x3c0182)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", _0xf9cbb4, _0xf9cbb4)('}');
                  } else {
                    _0x34a95a("d%s=%j", _0xf9cbb4, _0x5a869e.typeDefault);
                  }
                }
              }
            }
            _0x34a95a('}');
          }
          var _0x336d97 = false;
          for (_0x2e68a0 = 0x0; _0x2e68a0 < _0xc9303f.length; ++_0x2e68a0) {
            _0x5a869e = _0xc9303f[_0x2e68a0];
            var _0x5dd70d = _0x3f8b1d._fieldsArray.indexOf(_0x5a869e);
            _0xf9cbb4 = _0x12735b.safeProp(_0x5a869e.name);
            if (_0x5a869e.map) {
              if (!_0x336d97) {
                _0x336d97 = true;
                _0x34a95a("var ks2");
              }
              _0x34a95a('if(m%s&&(ks2=Object.keys(m%s)).length){', _0xf9cbb4, _0xf9cbb4)("d%s={}", _0xf9cbb4)("for(var j=0;j<ks2.length;++j){");
              _0x382a5c(_0x34a95a, _0x5a869e, _0x5dd70d, _0xf9cbb4 + "[ks2[j]]")('}');
            } else if (_0x5a869e.repeated) {
              _0x34a95a("if(m%s&&m%s.length){", _0xf9cbb4, _0xf9cbb4)('d%s=[]', _0xf9cbb4)("for(var j=0;j<m%s.length;++j){", _0xf9cbb4);
              _0x382a5c(_0x34a95a, _0x5a869e, _0x5dd70d, _0xf9cbb4 + "[j]")('}');
            } else {
              _0x34a95a('if(m%s!=null&&m.hasOwnProperty(%j)){', _0xf9cbb4, _0x5a869e.name);
              _0x382a5c(_0x34a95a, _0x5a869e, _0x5dd70d, _0xf9cbb4);
              if (_0x5a869e.partOf) {
                _0x34a95a('if(o.oneofs)')("d%s=%j", _0x12735b.safeProp(_0x5a869e.partOf.name), _0x5a869e.name);
              }
            }
            _0x34a95a('}');
          }
          return _0x34a95a("return d");
        };
        _0x1ed654.exports;
      }, function () {
        return {
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js", function (_0x354272, _0x1e0d1b, _0x1aebfb, _0x142321, _0x2298ba) {
        var _0x44f4dc = _0x1e0d1b('./message');
        _0x354272['.google.protobuf.Any'] = {
          'fromObject': function (_0x3ef9c5) {
            if (_0x3ef9c5 && _0x3ef9c5["@type"]) {
              var _0x58f26f = _0x3ef9c5["@type"].substring(_0x3ef9c5["@type"].lastIndexOf('/') + 0x1);
              var _0x5db803 = this.lookup(_0x58f26f);
              if (_0x5db803) {
                var _0xcae23 = '.' === _0x3ef9c5['@type'].charAt(0x0) ? _0x3ef9c5["@type"].substr(0x1) : _0x3ef9c5["@type"];
                if (-0x1 === _0xcae23.indexOf('/')) {
                  _0xcae23 = '/' + _0xcae23;
                }
                return this.create({
                  'type_url': _0xcae23,
                  'value': _0x5db803.encode(_0x5db803.fromObject(_0x3ef9c5)).finish()
                });
              }
            }
            return this.fromObject(_0x3ef9c5);
          },
          'toObject': function (_0x3419af, _0x507400) {
            var _0x36fab3 = '';
            var _0x25e841 = '';
            if (_0x507400 && _0x507400.json && _0x3419af.type_url && _0x3419af.value) {
              _0x25e841 = _0x3419af.type_url.substring(_0x3419af.type_url.lastIndexOf('/') + 0x1);
              _0x36fab3 = _0x3419af.type_url.substring(0x0, _0x3419af.type_url.lastIndexOf('/') + 0x1);
              var _0x5c4001 = this.lookup(_0x25e841);
              if (_0x5c4001) {
                _0x3419af = _0x5c4001.decode(_0x3419af.value);
              }
            }
            if (!(_0x3419af instanceof this.ctor) && _0x3419af instanceof _0x44f4dc) {
              var _0x23f09a = _0x3419af.$type.toObject(_0x3419af, _0x507400);
              if ('' === _0x36fab3) {
                _0x36fab3 = "type.googleapis.com/";
              }
              _0x25e841 = _0x36fab3 + ('.' === _0x3419af.$type.fullName[0x0] ? _0x3419af.$type.fullName.substr(0x1) : _0x3419af.$type.fullName);
              _0x23f09a["@type"] = _0x25e841;
              return _0x23f09a;
            }
            return this.toObject(_0x3419af, _0x507400);
          }
        };
        _0x1aebfb.exports;
      }, function () {
        return {
          './message': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/message.js'
        };
      });
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/type.js", function (_0x5d8166, _0x598f40, _0x512c03, _0x4a3765, _0x5a9ba3) {
        _0x512c03.exports = _0x34ee1d;
        var _0x47705b = _0x598f40("./namespace");
        ((_0x34ee1d.prototype = Object.create(_0x47705b.prototype)).constructor = _0x34ee1d).className = 'Type';
        var _0x4cf86f = _0x598f40("./enum");
        var _0x30e971 = _0x598f40('./oneof');
        var _0x540845 = _0x598f40("./field");
        var _0x396437 = _0x598f40("./mapfield");
        var _0x3c3a16 = _0x598f40("./service");
        var _0x4cb607 = _0x598f40("./message");
        var _0x2bdbc7 = _0x598f40("./reader");
        var _0x3108a4 = _0x598f40("./writer");
        var _0x4d1335 = _0x598f40('./util');
        var _0x28a3a3 = _0x598f40('./encoder');
        var _0x3a224b = _0x598f40("./decoder");
        var _0x664246 = _0x598f40("./verifier");
        var _0x789319 = _0x598f40("./converter");
        var _0x259dcb = _0x598f40("./wrappers");
        function _0x34ee1d(_0x2f05b3, _0x896bb1) {
          _0x47705b.call(this, _0x2f05b3, _0x896bb1);
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
        function _0x489a2e(_0x170b89) {
          _0x170b89._fieldsById = _0x170b89._fieldsArray = _0x170b89._oneofsArray = null;
          delete _0x170b89.encode;
          delete _0x170b89.decode;
          delete _0x170b89.verify;
          return _0x170b89;
        }
        Object.defineProperties(_0x34ee1d.prototype, {
          'fieldsById': {
            'get': function () {
              if (this._fieldsById) {
                return this._fieldsById;
              }
              this._fieldsById = {};
              var _0x50653a = Object.keys(this.fields);
              for (var _0x180522 = 0x0; _0x180522 < _0x50653a.length; ++_0x180522) {
                var _0x28d177 = this.fields[_0x50653a[_0x180522]];
                var _0x2b4517 = _0x28d177.id;
                if (this._fieldsById[_0x2b4517]) {
                  throw Error("duplicate id " + _0x2b4517 + " in " + this);
                }
                this._fieldsById[_0x2b4517] = _0x28d177;
              }
              return this._fieldsById;
            }
          },
          'fieldsArray': {
            'get': function () {
              return this._fieldsArray || (this._fieldsArray = _0x4d1335.toArray(this.fields));
            }
          },
          'oneofsArray': {
            'get': function () {
              return this._oneofsArray || (this._oneofsArray = _0x4d1335.toArray(this.oneofs));
            }
          },
          'ctor': {
            'get': function () {
              return this._ctor || (this.ctor = _0x34ee1d.generateConstructor(this)());
            },
            'set': function (_0xa51913) {
              var _0x4ba3d7 = _0xa51913.prototype;
              if (!(_0x4ba3d7 instanceof _0x4cb607)) {
                (_0xa51913.prototype = new _0x4cb607()).constructor = _0xa51913;
                _0x4d1335.merge(_0xa51913.prototype, _0x4ba3d7);
              }
              _0xa51913.$type = _0xa51913.prototype.$type = this;
              _0x4d1335.merge(_0xa51913, _0x4cb607, true);
              this._ctor = _0xa51913;
              for (var _0x8c53f8 = 0x0; _0x8c53f8 < this.fieldsArray.length; ++_0x8c53f8) {
                this._fieldsArray[_0x8c53f8].resolve();
              }
              var _0x4faa2a = {};
              for (_0x8c53f8 = 0x0; _0x8c53f8 < this.oneofsArray.length; ++_0x8c53f8) {
                _0x4faa2a[this._oneofsArray[_0x8c53f8].resolve().name] = {
                  'get': _0x4d1335.oneOfGetter(this._oneofsArray[_0x8c53f8].oneof),
                  'set': _0x4d1335.oneOfSetter(this._oneofsArray[_0x8c53f8].oneof)
                };
              }
              if (_0x8c53f8) {
                Object.defineProperties(_0xa51913.prototype, _0x4faa2a);
              }
            }
          }
        });
        _0x34ee1d.generateConstructor = function (_0x421eb7) {
          var _0x2bb7a3;
          var _0x2fa83f = _0x4d1335.codegen(['p'], _0x421eb7.name);
          for (var _0x3716eb = 0x0; _0x3716eb < _0x421eb7.fieldsArray.length; ++_0x3716eb) {
            if ((_0x2bb7a3 = _0x421eb7._fieldsArray[_0x3716eb]).map) {
              _0x2fa83f("this%s={}", _0x4d1335.safeProp(_0x2bb7a3.name));
            } else if (_0x2bb7a3.repeated) {
              _0x2fa83f("this%s=[]", _0x4d1335.safeProp(_0x2bb7a3.name));
            }
          }
          return _0x2fa83f("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
        };
        _0x34ee1d.fromJSON = function (_0xe3968a, _0x4c1693) {
          var _0x41a292 = new _0x34ee1d(_0xe3968a, _0x4c1693.options);
          _0x41a292.extensions = _0x4c1693.extensions;
          _0x41a292.reserved = _0x4c1693.reserved;
          var _0x49d357 = Object.keys(_0x4c1693.fields);
          for (var _0x171264 = 0x0; _0x171264 < _0x49d357.length; ++_0x171264) {
            _0x41a292.add((undefined !== _0x4c1693.fields[_0x49d357[_0x171264]].keyType ? _0x396437.fromJSON : _0x540845.fromJSON)(_0x49d357[_0x171264], _0x4c1693.fields[_0x49d357[_0x171264]]));
          }
          if (_0x4c1693.oneofs) {
            _0x49d357 = Object.keys(_0x4c1693.oneofs);
            for (_0x171264 = 0x0; _0x171264 < _0x49d357.length; ++_0x171264) {
              _0x41a292.add(_0x30e971.fromJSON(_0x49d357[_0x171264], _0x4c1693.oneofs[_0x49d357[_0x171264]]));
            }
          }
          if (_0x4c1693.nested) {
            _0x49d357 = Object.keys(_0x4c1693.nested);
            for (_0x171264 = 0x0; _0x171264 < _0x49d357.length; ++_0x171264) {
              var _0x209feb = _0x4c1693.nested[_0x49d357[_0x171264]];
              _0x41a292.add((undefined !== _0x209feb.id ? _0x540845.fromJSON : undefined !== _0x209feb.fields ? _0x34ee1d.fromJSON : undefined !== _0x209feb.values ? _0x4cf86f.fromJSON : undefined !== _0x209feb.methods ? _0x3c3a16.fromJSON : _0x47705b.fromJSON)(_0x49d357[_0x171264], _0x209feb));
            }
          }
          if (_0x4c1693.extensions && _0x4c1693.extensions.length) {
            _0x41a292.extensions = _0x4c1693.extensions;
          }
          if (_0x4c1693.reserved && _0x4c1693.reserved.length) {
            _0x41a292.reserved = _0x4c1693.reserved;
          }
          if (_0x4c1693.group) {
            _0x41a292.group = true;
          }
          if (_0x4c1693.comment) {
            _0x41a292.comment = _0x4c1693.comment;
          }
          return _0x41a292;
        };
        _0x34ee1d.prototype.toJSON = function (_0x7eef1c) {
          var _0x1556b0 = _0x47705b.prototype.toJSON.call(this, _0x7eef1c);
          var _0x3ce7d9 = !!_0x7eef1c && Boolean(_0x7eef1c.keepComments);
          return _0x4d1335.toObject(["options", _0x1556b0 && _0x1556b0.options || undefined, "oneofs", _0x47705b.arrayToJSON(this.oneofsArray, _0x7eef1c), "fields", _0x47705b.arrayToJSON(this.fieldsArray.filter(function (_0xa99301) {
            return !_0xa99301.declaringField;
          }), _0x7eef1c) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, "nested", _0x1556b0 && _0x1556b0.nested || undefined, "comment", _0x3ce7d9 ? this.comment : undefined]);
        };
        _0x34ee1d.prototype.resolveAll = function () {
          var _0x250452 = this.fieldsArray;
          for (var _0x5d70da = 0x0; _0x5d70da < _0x250452.length;) {
            _0x250452[_0x5d70da++].resolve();
          }
          var _0x514fb8 = this.oneofsArray;
          for (_0x5d70da = 0x0; _0x5d70da < _0x514fb8.length;) {
            _0x514fb8[_0x5d70da++].resolve();
          }
          return _0x47705b.prototype.resolveAll.call(this);
        };
        _0x34ee1d.prototype.get = function (_0x5cf13d) {
          return this.fields[_0x5cf13d] || this.oneofs && this.oneofs[_0x5cf13d] || this.nested && this.nested[_0x5cf13d] || null;
        };
        _0x34ee1d.prototype.add = function (_0x2a7446) {
          if (this.get(_0x2a7446.name)) {
            throw Error("duplicate name '" + _0x2a7446.name + "' in " + this);
          }
          if (_0x2a7446 instanceof _0x540845 && undefined === _0x2a7446.extend) {
            if (this._fieldsById ? this._fieldsById[_0x2a7446.id] : this.fieldsById[_0x2a7446.id]) {
              throw Error("duplicate id " + _0x2a7446.id + " in " + this);
            }
            if (this.isReservedId(_0x2a7446.id)) {
              throw Error("id " + _0x2a7446.id + " is reserved in " + this);
            }
            if (this.isReservedName(_0x2a7446.name)) {
              throw Error("name '" + _0x2a7446.name + "' is reserved in " + this);
            }
            if (_0x2a7446.parent) {
              _0x2a7446.parent.remove(_0x2a7446);
            }
            this.fields[_0x2a7446.name] = _0x2a7446;
            _0x2a7446.message = this;
            _0x2a7446.onAdd(this);
            return _0x489a2e(this);
          }
          return _0x2a7446 instanceof _0x30e971 ? (this.oneofs || (this.oneofs = {}), this.oneofs[_0x2a7446.name] = _0x2a7446, _0x2a7446.onAdd(this), _0x489a2e(this)) : _0x47705b.prototype.add.call(this, _0x2a7446);
        };
        _0x34ee1d.prototype.remove = function (_0x42bb4c) {
          if (_0x42bb4c instanceof _0x540845 && undefined === _0x42bb4c.extend) {
            if (!this.fields || this.fields[_0x42bb4c.name] !== _0x42bb4c) {
              throw Error(_0x42bb4c + " is not a member of " + this);
            }
            delete this.fields[_0x42bb4c.name];
            _0x42bb4c.parent = null;
            _0x42bb4c.onRemove(this);
            return _0x489a2e(this);
          }
          if (_0x42bb4c instanceof _0x30e971) {
            if (!this.oneofs || this.oneofs[_0x42bb4c.name] !== _0x42bb4c) {
              throw Error(_0x42bb4c + " is not a member of " + this);
            }
            delete this.oneofs[_0x42bb4c.name];
            _0x42bb4c.parent = null;
            _0x42bb4c.onRemove(this);
            return _0x489a2e(this);
          }
          return _0x47705b.prototype.remove.call(this, _0x42bb4c);
        };
        _0x34ee1d.prototype.isReservedId = function (_0x4ea02f) {
          return _0x47705b.isReservedId(this.reserved, _0x4ea02f);
        };
        _0x34ee1d.prototype.isReservedName = function (_0x5aff0e) {
          return _0x47705b.isReservedName(this.reserved, _0x5aff0e);
        };
        _0x34ee1d.prototype.create = function (_0x9f223d) {
          return new this.ctor(_0x9f223d);
        };
        _0x34ee1d.prototype.setup = function () {
          var _0x41abc5 = this.fullName;
          var _0x51b4f0 = [];
          for (var _0x5ad0ad = 0x0; _0x5ad0ad < this.fieldsArray.length; ++_0x5ad0ad) {
            _0x51b4f0.push(this._fieldsArray[_0x5ad0ad].resolve().resolvedType);
          }
          this.encode = _0x28a3a3(this)({
            'Writer': _0x3108a4,
            'types': _0x51b4f0,
            'util': _0x4d1335
          });
          this.decode = _0x3a224b(this)({
            'Reader': _0x2bdbc7,
            'types': _0x51b4f0,
            'util': _0x4d1335
          });
          this.verify = _0x664246(this)({
            'types': _0x51b4f0,
            'util': _0x4d1335
          });
          this.fromObject = _0x789319.fromObject(this)({
            'types': _0x51b4f0,
            'util': _0x4d1335
          });
          this.toObject = _0x789319.toObject(this)({
            'types': _0x51b4f0,
            'util': _0x4d1335
          });
          var _0x47c3d5 = _0x259dcb[_0x41abc5];
          if (_0x47c3d5) {
            var _0x4914e8 = Object.create(this);
            _0x4914e8.fromObject = this.fromObject;
            this.fromObject = _0x47c3d5.fromObject.bind(_0x4914e8);
            _0x4914e8.toObject = this.toObject;
            this.toObject = _0x47c3d5.toObject.bind(_0x4914e8);
          }
          return this;
        };
        _0x34ee1d.prototype.encode = function (_0x5e4a2c, _0x526ced) {
          return this.setup().encode(_0x5e4a2c, _0x526ced);
        };
        _0x34ee1d.prototype.encodeDelimited = function (_0x4abf11, _0xb4b136) {
          return this.encode(_0x4abf11, _0xb4b136 && _0xb4b136.len ? _0xb4b136.fork() : _0xb4b136).ldelim();
        };
        _0x34ee1d.prototype.decode = function (_0x90fea5, _0x53db1f) {
          return this.setup().decode(_0x90fea5, _0x53db1f);
        };
        _0x34ee1d.prototype.decodeDelimited = function (_0x567128) {
          if (!(_0x567128 instanceof _0x2bdbc7)) {
            _0x567128 = _0x2bdbc7.create(_0x567128);
          }
          return this.decode(_0x567128, _0x567128.uint32());
        };
        _0x34ee1d.prototype.verify = function (_0x2a3c0b) {
          return this.setup().verify(_0x2a3c0b);
        };
        _0x34ee1d.prototype.fromObject = function (_0xe047ff) {
          return this.setup().fromObject(_0xe047ff);
        };
        _0x34ee1d.prototype.toObject = function (_0xfcb6d9, _0x42a260) {
          return this.setup().toObject(_0xfcb6d9, _0x42a260);
        };
        _0x34ee1d.d = function (_0x616c61) {
          return function (_0x5e2c6e) {
            _0x4d1335.decorateType(_0x5e2c6e, _0x616c61);
          };
        };
        _0x512c03.exports;
      }, function () {
        return {
          './namespace': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './oneof': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './field': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './mapfield': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './service': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/service.js',
          './message': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/message.js',
          './reader': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/reader.js',
          './writer': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/writer.js',
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './encoder': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js',
          './decoder': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          './verifier': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js',
          './converter': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          './wrappers': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js"
        };
      });
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/root.js", function (_0x289496, _0x36b5bd, _0x860128, _0x13a366, _0x15616a) {
        _0x860128.exports = _0x126e86;
        var _0x493959 = _0x36b5bd("./namespace");
        ((_0x126e86.prototype = Object.create(_0x493959.prototype)).constructor = _0x126e86).className = 'Root';
        var _0x579afc;
        var _0x3ffd2a;
        var _0x5e2e23;
        var _0x169a04 = _0x36b5bd("./field");
        var _0x59bea6 = _0x36b5bd("./enum");
        var _0x374f81 = _0x36b5bd("./oneof");
        var _0x4841ff = _0x36b5bd("./util");
        function _0x126e86(_0x16cc5b) {
          _0x493959.call(this, '', _0x16cc5b);
          this.deferred = [];
          this.files = [];
        }
        function _0x280a55() {}
        _0x126e86.fromJSON = function (_0x249c9b, _0x33401c) {
          if (!_0x33401c) {
            _0x33401c = new _0x126e86();
          }
          if (_0x249c9b.options) {
            _0x33401c.setOptions(_0x249c9b.options);
          }
          return _0x33401c.addJSON(_0x249c9b.nested);
        };
        _0x126e86.prototype.resolvePath = _0x4841ff.path.resolve;
        _0x126e86.prototype.fetch = _0x4841ff.fetch;
        _0x126e86.prototype.load = function _0x2d42c4(_0x5dd38c, _0x3344f1, _0x3d7969) {
          if ('function' == typeof _0x3344f1) {
            _0x3d7969 = _0x3344f1;
            _0x3344f1 = undefined;
          }
          var _0x42bc0c = this;
          if (!_0x3d7969) {
            return _0x4841ff.asPromise(_0x2d42c4, _0x42bc0c, _0x5dd38c, _0x3344f1);
          }
          var _0x71b7f0 = _0x3d7969 === _0x280a55;
          function _0x5b91e7(_0x300ca9, _0x3c7c7e) {
            if (_0x3d7969) {
              var _0x4cf41d = _0x3d7969;
              _0x3d7969 = null;
              if (_0x71b7f0) {
                throw _0x300ca9;
              }
              _0x4cf41d(_0x300ca9, _0x3c7c7e);
            }
          }
          function _0x23f748(_0x61d58d) {
            var _0x676a65 = _0x61d58d.lastIndexOf("google/protobuf/");
            if (_0x676a65 > -0x1) {
              var _0x501feb = _0x61d58d.substring(_0x676a65);
              if (_0x501feb in _0x5e2e23) {
                return _0x501feb;
              }
            }
            return null;
          }
          function _0x39298e(_0x1dffd2, _0x2f9c7b) {
            try {
              if (_0x4841ff.isString(_0x2f9c7b) && '{' === _0x2f9c7b.charAt(0x0)) {
                _0x2f9c7b = JSON.parse(_0x2f9c7b);
              }
              if (_0x4841ff.isString(_0x2f9c7b)) {
                _0x3ffd2a.filename = _0x1dffd2;
                var _0x376bb9;
                var _0x18b00a = _0x3ffd2a(_0x2f9c7b, _0x42bc0c, _0x3344f1);
                var _0x3243b4 = 0x0;
                if (_0x18b00a.imports) {
                  for (; _0x3243b4 < _0x18b00a.imports.length; ++_0x3243b4) {
                    if (_0x376bb9 = _0x23f748(_0x18b00a.imports[_0x3243b4]) || _0x42bc0c.resolvePath(_0x1dffd2, _0x18b00a.imports[_0x3243b4])) {
                      _0x585961(_0x376bb9);
                    }
                  }
                }
                if (_0x18b00a.weakImports) {
                  for (_0x3243b4 = 0x0; _0x3243b4 < _0x18b00a.weakImports.length; ++_0x3243b4) {
                    if (_0x376bb9 = _0x23f748(_0x18b00a.weakImports[_0x3243b4]) || _0x42bc0c.resolvePath(_0x1dffd2, _0x18b00a.weakImports[_0x3243b4])) {
                      _0x585961(_0x376bb9, true);
                    }
                  }
                }
              } else {
                _0x42bc0c.setOptions(_0x2f9c7b.options).addJSON(_0x2f9c7b.nested);
              }
            } catch (_0x295e32) {
              _0x5b91e7(_0x295e32);
            }
            if (!(_0x71b7f0 || _0x10ee0d)) {
              _0x5b91e7(null, _0x42bc0c);
            }
          }
          function _0x585961(_0x156806, _0x458728) {
            if (!(_0x42bc0c.files.indexOf(_0x156806) > -0x1)) {
              _0x42bc0c.files.push(_0x156806);
              if (_0x156806 in _0x5e2e23) {
                if (_0x71b7f0) {
                  _0x39298e(_0x156806, _0x5e2e23[_0x156806]);
                } else {
                  ++_0x10ee0d;
                  setTimeout(function () {
                    --_0x10ee0d;
                    _0x39298e(_0x156806, _0x5e2e23[_0x156806]);
                  });
                }
              } else {
                if (_0x71b7f0) {
                  var _0x3e6871;
                  try {
                    _0x3e6871 = _0x4841ff.fs.readFileSync(_0x156806).toString("utf8");
                  } catch (_0x71b14a) {
                    return void (_0x458728 || _0x5b91e7(_0x71b14a));
                  }
                  _0x39298e(_0x156806, _0x3e6871);
                } else {
                  ++_0x10ee0d;
                  _0x42bc0c.fetch(_0x156806, function (_0x505142, _0x4aa50f) {
                    --_0x10ee0d;
                    if (_0x3d7969) {
                      if (_0x505142) {
                        if (_0x458728) {
                          if (!_0x10ee0d) {
                            _0x5b91e7(null, _0x42bc0c);
                          }
                        } else {
                          _0x5b91e7(_0x505142);
                        }
                      } else {
                        _0x39298e(_0x156806, _0x4aa50f);
                      }
                    }
                  });
                }
              }
            }
          }
          var _0x10ee0d = 0x0;
          if (_0x4841ff.isString(_0x5dd38c)) {
            _0x5dd38c = [_0x5dd38c];
          }
          var _0xcff556;
          for (var _0x419070 = 0x0; _0x419070 < _0x5dd38c.length; ++_0x419070) {
            if (_0xcff556 = _0x42bc0c.resolvePath('', _0x5dd38c[_0x419070])) {
              _0x585961(_0xcff556);
            }
          }
          if (_0x71b7f0) {
            return _0x42bc0c;
          }
          if (!_0x10ee0d) {
            _0x5b91e7(null, _0x42bc0c);
          }
        };
        _0x126e86.prototype.loadSync = function (_0x5b59c9, _0x10a8ff) {
          if (!_0x4841ff.isNode) {
            throw Error("not supported");
          }
          return this.load(_0x5b59c9, _0x10a8ff, _0x280a55);
        };
        _0x126e86.prototype.resolveAll = function () {
          if (this.deferred.length) {
            throw Error("unresolvable extensions: " + this.deferred.map(function (_0x169ca8) {
              return "'extend " + _0x169ca8.extend + "' in " + _0x169ca8.parent.fullName;
            }).join(", "));
          }
          return _0x493959.prototype.resolveAll.call(this);
        };
        var _0x3ca7bd = /^[A-Z]/;
        function _0x3d158c(_0x2cfba6, _0x3f04a5) {
          var _0x3c2092 = _0x3f04a5.parent.lookup(_0x3f04a5.extend);
          if (_0x3c2092) {
            var _0x2ea6ea = new _0x169a04(_0x3f04a5.fullName, _0x3f04a5.id, _0x3f04a5.type, _0x3f04a5.rule, undefined, _0x3f04a5.options);
            _0x2ea6ea.declaringField = _0x3f04a5;
            _0x3f04a5.extensionField = _0x2ea6ea;
            _0x3c2092.add(_0x2ea6ea);
            return true;
          }
          return false;
        }
        _0x126e86.prototype._handleAdd = function (_0x453437) {
          if (_0x453437 instanceof _0x169a04) {
            if (!(undefined === _0x453437.extend || _0x453437.extensionField || _0x3d158c(0x0, _0x453437))) {
              this.deferred.push(_0x453437);
            }
          } else {
            if (_0x453437 instanceof _0x59bea6) {
              if (_0x3ca7bd.test(_0x453437.name)) {
                _0x453437.parent[_0x453437.name] = _0x453437.values;
              }
            } else {
              if (!(_0x453437 instanceof _0x374f81)) {
                if (_0x453437 instanceof _0x579afc) {
                  for (var _0x66c813 = 0x0; _0x66c813 < this.deferred.length;) {
                    if (_0x3d158c(0x0, this.deferred[_0x66c813])) {
                      this.deferred.splice(_0x66c813, 0x1);
                    } else {
                      ++_0x66c813;
                    }
                  }
                }
                for (var _0x426f20 = 0x0; _0x426f20 < _0x453437.nestedArray.length; ++_0x426f20) {
                  this._handleAdd(_0x453437._nestedArray[_0x426f20]);
                }
                if (_0x3ca7bd.test(_0x453437.name)) {
                  _0x453437.parent[_0x453437.name] = _0x453437;
                }
              }
            }
          }
        };
        _0x126e86.prototype._handleRemove = function (_0x209b50) {
          if (_0x209b50 instanceof _0x169a04) {
            if (undefined !== _0x209b50.extend) {
              if (_0x209b50.extensionField) {
                _0x209b50.extensionField.parent.remove(_0x209b50.extensionField);
                _0x209b50.extensionField = null;
              } else {
                var _0x1a7e8c = this.deferred.indexOf(_0x209b50);
                if (_0x1a7e8c > -0x1) {
                  this.deferred.splice(_0x1a7e8c, 0x1);
                }
              }
            }
          } else {
            if (_0x209b50 instanceof _0x59bea6) {
              if (_0x3ca7bd.test(_0x209b50.name)) {
                delete _0x209b50.parent[_0x209b50.name];
              }
            } else {
              if (_0x209b50 instanceof _0x493959) {
                for (var _0x1cb697 = 0x0; _0x1cb697 < _0x209b50.nestedArray.length; ++_0x1cb697) {
                  this._handleRemove(_0x209b50._nestedArray[_0x1cb697]);
                }
                if (_0x3ca7bd.test(_0x209b50.name)) {
                  delete _0x209b50.parent[_0x209b50.name];
                }
              }
            }
          }
        };
        _0x126e86._configure = function (_0x1c0bba, _0x14a54a, _0x4b62c4) {
          _0x579afc = _0x1c0bba;
          _0x3ffd2a = _0x14a54a;
          _0x5e2e23 = _0x4b62c4;
        };
        _0x860128.exports;
      }, function () {
        return {
          './namespace': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './field': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './oneof': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util.js", function (_0x14f3ea, _0x1c0647, _0x69672b, _0xaa2bc0, _0x54a0f2) {
        var _0x16dbe3;
        var _0x56b2c9;
        var _0x2a24fe = _0x69672b.exports = _0x1c0647('./util/minimal');
        var _0x2351ac = _0x1c0647("./roots");
        _0x2a24fe.codegen = _0x1c0647("@protobufjs/codegen");
        _0x2a24fe.fetch = _0x1c0647("@protobufjs/fetch");
        _0x2a24fe.path = _0x1c0647("@protobufjs/path");
        _0x2a24fe.fs = _0x2a24fe.inquire('fs');
        _0x2a24fe.toArray = function (_0x5a90f1) {
          if (_0x5a90f1) {
            var _0x40c6ea = Object.keys(_0x5a90f1);
            var _0x4bb956 = new Array(_0x40c6ea.length);
            for (var _0x16ce26 = 0x0; _0x16ce26 < _0x40c6ea.length;) {
              _0x4bb956[_0x16ce26] = _0x5a90f1[_0x40c6ea[_0x16ce26++]];
            }
            return _0x4bb956;
          }
          return [];
        };
        _0x2a24fe.toObject = function (_0x290a37) {
          var _0x157367 = {};
          for (var _0x3e8f44 = 0x0; _0x3e8f44 < _0x290a37.length;) {
            var _0x30c404 = _0x290a37[_0x3e8f44++];
            var _0x25bbc9 = _0x290a37[_0x3e8f44++];
            if (undefined !== _0x25bbc9) {
              _0x157367[_0x30c404] = _0x25bbc9;
            }
          }
          return _0x157367;
        };
        var _0x56607b = /\\/g;
        var _0x468e04 = /"/g;
        _0x2a24fe.isReserved = function (_0x1bccfa) {
          return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(_0x1bccfa);
        };
        _0x2a24fe.safeProp = function (_0x240d3a) {
          return !/^[$\w_]+$/.test(_0x240d3a) || _0x2a24fe.isReserved(_0x240d3a) ? "[\"" + _0x240d3a.replace(_0x56607b, "\\\\").replace(_0x468e04, "\\\"") + "\"]" : '.' + _0x240d3a;
        };
        _0x2a24fe.ucFirst = function (_0x4f9fbe) {
          return _0x4f9fbe.charAt(0x0).toUpperCase() + _0x4f9fbe.substring(0x1);
        };
        var _0x215eeb = /_([a-z])/g;
        _0x2a24fe.camelCase = function (_0x519f2f) {
          return _0x519f2f.substring(0x0, 0x1) + _0x519f2f.substring(0x1).replace(_0x215eeb, function (_0x52c27b, _0x5ba8a8) {
            return _0x5ba8a8.toUpperCase();
          });
        };
        _0x2a24fe.compareFieldsById = function (_0x3f9695, _0x29c192) {
          return _0x3f9695.id - _0x29c192.id;
        };
        _0x2a24fe.decorateType = function (_0x2322eb, _0x3567b6) {
          if (_0x2322eb.$type) {
            if (_0x3567b6 && _0x2322eb.$type.name !== _0x3567b6) {
              _0x2a24fe.decorateRoot.remove(_0x2322eb.$type);
              _0x2322eb.$type.name = _0x3567b6;
              _0x2a24fe.decorateRoot.add(_0x2322eb.$type);
            }
            return _0x2322eb.$type;
          }
          if (!_0x16dbe3) {
            _0x16dbe3 = _0x1c0647("./type");
          }
          var _0x385c9d = new _0x16dbe3(_0x3567b6 || _0x2322eb.name);
          _0x2a24fe.decorateRoot.add(_0x385c9d);
          _0x385c9d.ctor = _0x2322eb;
          Object.defineProperty(_0x2322eb, "$type", {
            'value': _0x385c9d,
            'enumerable': false
          });
          Object.defineProperty(_0x2322eb.prototype, "$type", {
            'value': _0x385c9d,
            'enumerable': false
          });
          return _0x385c9d;
        };
        var _0x2869c8 = 0x0;
        _0x2a24fe.decorateEnum = function (_0x1566b2) {
          if (_0x1566b2.$type) {
            return _0x1566b2.$type;
          }
          if (!_0x56b2c9) {
            _0x56b2c9 = _0x1c0647("./enum");
          }
          var _0x57fccf = new _0x56b2c9('Enum' + _0x2869c8++, _0x1566b2);
          _0x2a24fe.decorateRoot.add(_0x57fccf);
          Object.defineProperty(_0x1566b2, "$type", {
            'value': _0x57fccf,
            'enumerable': false
          });
          return _0x57fccf;
        };
        _0x2a24fe.setProperty = function (_0x2ecb98, _0xd11f65, _0x3a857a) {
          if ("object" != typeof _0x2ecb98) {
            throw TypeError("dst must be an object");
          }
          if (!_0xd11f65) {
            throw TypeError("path must be specified");
          }
          return function _0x15be6f(_0x4942d3, _0x50cd70, _0x3e1016) {
            var _0x523efd = _0x50cd70.shift();
            if ("__proto__" === _0x523efd || 'prototype' === _0x523efd) {
              return _0x4942d3;
            }
            if (_0x50cd70.length > 0x0) {
              _0x4942d3[_0x523efd] = _0x15be6f(_0x4942d3[_0x523efd] || {}, _0x50cd70, _0x3e1016);
            } else {
              var _0x1a783d = _0x4942d3[_0x523efd];
              if (_0x1a783d) {
                _0x3e1016 = [].concat(_0x1a783d).concat(_0x3e1016);
              }
              _0x4942d3[_0x523efd] = _0x3e1016;
            }
            return _0x4942d3;
          }(_0x2ecb98, _0xd11f65 = _0xd11f65.split('.'), _0x3a857a);
        };
        Object.defineProperty(_0x2a24fe, "decorateRoot", {
          'get': function () {
            return _0x2351ac.decorated || (_0x2351ac.decorated = new (_0x1c0647("./root"))());
          }
        });
        _0x69672b.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          './roots': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/roots.js',
          '@protobufjs/codegen': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js",
          '@protobufjs/fetch': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js",
          '@protobufjs/path': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/@protobufjs/path/index.js",
          './type': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './root': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/root.js"
        };
      });
      _0x12e126.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/object.js', function (_0x281078, _0x5838b2, _0x1a5edd, _0x381a68, _0x33f1b7) {
        _0x1a5edd.exports = _0x51cc3a;
        _0x51cc3a.className = "ReflectionObject";
        var _0x4ab0c8;
        var _0x2b28c9 = _0x5838b2('./util');
        function _0x51cc3a(_0x4bcd05, _0x3e79ed) {
          if (!_0x2b28c9.isString(_0x4bcd05)) {
            throw TypeError("name must be a string");
          }
          if (_0x3e79ed && !_0x2b28c9.isObject(_0x3e79ed)) {
            throw TypeError("options must be an object");
          }
          this.options = _0x3e79ed;
          this.parsedOptions = null;
          this.name = _0x4bcd05;
          this.parent = null;
          this.resolved = false;
          this.comment = null;
          this.filename = null;
        }
        Object.defineProperties(_0x51cc3a.prototype, {
          'root': {
            'get': function () {
              for (var _0xc97c58 = this; null !== _0xc97c58.parent;) {
                _0xc97c58 = _0xc97c58.parent;
              }
              return _0xc97c58;
            }
          },
          'fullName': {
            'get': function () {
              var _0x162e76 = [this.name];
              for (var _0x2f396d = this.parent; _0x2f396d;) {
                _0x162e76.unshift(_0x2f396d.name);
                _0x2f396d = _0x2f396d.parent;
              }
              return _0x162e76.join('.');
            }
          }
        });
        _0x51cc3a.prototype.toJSON = function () {
          throw Error();
        };
        _0x51cc3a.prototype.onAdd = function (_0xcb9c35) {
          if (this.parent && this.parent !== _0xcb9c35) {
            this.parent.remove(this);
          }
          this.parent = _0xcb9c35;
          this.resolved = false;
          var _0x197ef8 = _0xcb9c35.root;
          if (_0x197ef8 instanceof _0x4ab0c8) {
            _0x197ef8._handleAdd(this);
          }
        };
        _0x51cc3a.prototype.onRemove = function (_0xf3756a) {
          var _0xfc958f = _0xf3756a.root;
          if (_0xfc958f instanceof _0x4ab0c8) {
            _0xfc958f._handleRemove(this);
          }
          this.parent = null;
          this.resolved = false;
        };
        _0x51cc3a.prototype.resolve = function () {
          if (!this.resolved) {
            if (this.root instanceof _0x4ab0c8) {
              this.resolved = true;
            }
          }
          return this;
        };
        _0x51cc3a.prototype.getOption = function (_0x204619) {
          if (this.options) {
            return this.options[_0x204619];
          }
        };
        _0x51cc3a.prototype.setOption = function (_0x2cc07c, _0x3f710f, _0x5bde48) {
          if (!(_0x5bde48 && this.options && undefined !== this.options[_0x2cc07c])) {
            (this.options || (this.options = {}))[_0x2cc07c] = _0x3f710f;
          }
          return this;
        };
        _0x51cc3a.prototype.setParsedOption = function (_0x247ca0, _0x193d3e, _0x1baede) {
          if (!this.parsedOptions) {
            this.parsedOptions = [];
          }
          var _0x4474f6 = this.parsedOptions;
          if (_0x1baede) {
            var _0x3a7d18 = _0x4474f6.find(function (_0x46c237) {
              return Object.prototype.hasOwnProperty.call(_0x46c237, _0x247ca0);
            });
            if (_0x3a7d18) {
              var _0x1a4f1d = _0x3a7d18[_0x247ca0];
              _0x2b28c9.setProperty(_0x1a4f1d, _0x1baede, _0x193d3e);
            } else {
              (_0x3a7d18 = {})[_0x247ca0] = _0x2b28c9.setProperty({}, _0x1baede, _0x193d3e);
              _0x4474f6.push(_0x3a7d18);
            }
          } else {
            var _0x209d3a = {
              _0x247ca0: _0x193d3e
            };
            _0x4474f6.push(_0x209d3a);
          }
          return this;
        };
        _0x51cc3a.prototype.setOptions = function (_0x1e5aa1, _0x38d1f9) {
          if (_0x1e5aa1) {
            var _0x330738 = Object.keys(_0x1e5aa1);
            for (var _0xdc9dbd = 0x0; _0xdc9dbd < _0x330738.length; ++_0xdc9dbd) {
              this.setOption(_0x330738[_0xdc9dbd], _0x1e5aa1[_0x330738[_0xdc9dbd]], _0x38d1f9);
            }
          }
          return this;
        };
        _0x51cc3a.prototype.toString = function () {
          var _0xcce1b1 = this.constructor.className;
          var _0x56b13d = this.fullName;
          return _0x56b13d.length ? _0xcce1b1 + " " + _0x56b13d : _0xcce1b1;
        };
        _0x51cc3a._configure = function (_0x3781c6) {
          _0x4ab0c8 = _0x3781c6;
        };
        _0x1a5edd.exports;
      }, function () {
        return {
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/enum.js", function (_0xb6ab95, _0x45e9a9, _0x431b99, _0x45d1c4, _0x56d10f) {
        _0x431b99.exports = _0x49af3e;
        var _0x1a42ff = _0x45e9a9('./object');
        ((_0x49af3e.prototype = Object.create(_0x1a42ff.prototype)).constructor = _0x49af3e).className = "Enum";
        var _0x3e844c = _0x45e9a9("./namespace");
        var _0x43b0dd = _0x45e9a9('./util');
        function _0x49af3e(_0x310dbe, _0x124be6, _0x1a9c67, _0xf5d0a, _0x22533e) {
          _0x1a42ff.call(this, _0x310dbe, _0x1a9c67);
          if (_0x124be6 && "object" != typeof _0x124be6) {
            throw TypeError("values must be an object");
          }
          this.valuesById = {};
          this.values = Object.create(this.valuesById);
          this.comment = _0xf5d0a;
          this.comments = _0x22533e || {};
          this.reserved = undefined;
          if (_0x124be6) {
            var _0x14e0fe = Object.keys(_0x124be6);
            for (var _0x54830e = 0x0; _0x54830e < _0x14e0fe.length; ++_0x54830e) {
              if ('number' == typeof _0x124be6[_0x14e0fe[_0x54830e]]) {
                this.valuesById[this.values[_0x14e0fe[_0x54830e]] = _0x124be6[_0x14e0fe[_0x54830e]]] = _0x14e0fe[_0x54830e];
              }
            }
          }
        }
        _0x49af3e.fromJSON = function (_0x4fb14f, _0x192825) {
          var _0x3333f0 = new _0x49af3e(_0x4fb14f, _0x192825.values, _0x192825.options, _0x192825.comment, _0x192825.comments);
          _0x3333f0.reserved = _0x192825.reserved;
          return _0x3333f0;
        };
        _0x49af3e.prototype.toJSON = function (_0x285183) {
          var _0x3cc8c3 = !!_0x285183 && Boolean(_0x285183.keepComments);
          return _0x43b0dd.toObject(["options", this.options, "values", this.values, 'reserved', this.reserved && this.reserved.length ? this.reserved : undefined, "comment", _0x3cc8c3 ? this.comment : undefined, 'comments', _0x3cc8c3 ? this.comments : undefined]);
        };
        _0x49af3e.prototype.add = function (_0x517b70, _0x4c3862, _0x124ea5) {
          if (!_0x43b0dd.isString(_0x517b70)) {
            throw TypeError("name must be a string");
          }
          if (!_0x43b0dd.isInteger(_0x4c3862)) {
            throw TypeError("id must be an integer");
          }
          if (undefined !== this.values[_0x517b70]) {
            throw Error("duplicate name '" + _0x517b70 + "' in " + this);
          }
          if (this.isReservedId(_0x4c3862)) {
            throw Error("id " + _0x4c3862 + " is reserved in " + this);
          }
          if (this.isReservedName(_0x517b70)) {
            throw Error("name '" + _0x517b70 + "' is reserved in " + this);
          }
          if (undefined !== this.valuesById[_0x4c3862]) {
            if (!this.options || !this.options.allow_alias) {
              throw Error("duplicate id " + _0x4c3862 + " in " + this);
            }
            this.values[_0x517b70] = _0x4c3862;
          } else {
            this.valuesById[this.values[_0x517b70] = _0x4c3862] = _0x517b70;
          }
          this.comments[_0x517b70] = _0x124ea5 || null;
          return this;
        };
        _0x49af3e.prototype.remove = function (_0x17bedd) {
          if (!_0x43b0dd.isString(_0x17bedd)) {
            throw TypeError("name must be a string");
          }
          var _0x1cc08a = this.values[_0x17bedd];
          if (null == _0x1cc08a) {
            throw Error("name '" + _0x17bedd + "' does not exist in " + this);
          }
          delete this.valuesById[_0x1cc08a];
          delete this.values[_0x17bedd];
          delete this.comments[_0x17bedd];
          return this;
        };
        _0x49af3e.prototype.isReservedId = function (_0x1a70e2) {
          return _0x3e844c.isReservedId(this.reserved, _0x1a70e2);
        };
        _0x49af3e.prototype.isReservedName = function (_0x126049) {
          return _0x3e844c.isReservedName(this.reserved, _0x126049);
        };
        _0x431b99.exports;
      }, function () {
        return {
          './object': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/object.js',
          './namespace': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x12e126.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js', function (_0x5e957d, _0x3e618b, _0x3ea92b, _0x3df7fa, _0x8e129d) {
        _0x3ea92b.exports = function (_0x34d1f3) {
          var _0x323f69;
          var _0x372805 = _0x1aca1a.codegen(['m', 'w'], _0x34d1f3.name + '$encode')("if(!w)")('w=Writer.create()');
          var _0x101fa5 = _0x34d1f3.fieldsArray.slice().sort(_0x1aca1a.compareFieldsById);
          for (var _0x31e0a5 = 0x0; _0x31e0a5 < _0x101fa5.length; ++_0x31e0a5) {
            var _0x213ba3 = _0x101fa5[_0x31e0a5].resolve();
            var _0x52e83d = _0x34d1f3._fieldsArray.indexOf(_0x213ba3);
            var _0x2dad04 = _0x213ba3.resolvedType instanceof _0x2755bf ? "int32" : _0x213ba3.type;
            var _0x102b3a = _0xa12a47.basic[_0x2dad04];
            _0x323f69 = 'm' + _0x1aca1a.safeProp(_0x213ba3.name);
            if (_0x213ba3.map) {
              _0x372805('if(%s!=null&&Object.hasOwnProperty.call(m,%j)){', _0x323f69, _0x213ba3.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", _0x323f69)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (_0x213ba3.id << 0x3 | 0x2) >>> 0x0, 0x8 | _0xa12a47.mapKey[_0x213ba3.keyType], _0x213ba3.keyType);
              if (undefined === _0x102b3a) {
                _0x372805('types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()', _0x52e83d, _0x323f69);
              } else {
                _0x372805(".uint32(%i).%s(%s[ks[i]]).ldelim()", 0x10 | _0x102b3a, _0x2dad04, _0x323f69);
              }
              _0x372805('}')('}');
            } else if (_0x213ba3.repeated) {
              _0x372805('if(%s!=null&&%s.length){', _0x323f69, _0x323f69);
              if (_0x213ba3.packed && undefined !== _0xa12a47.packed[_0x2dad04]) {
                _0x372805('w.uint32(%i).fork()', (_0x213ba3.id << 0x3 | 0x2) >>> 0x0)("for(var i=0;i<%s.length;++i)", _0x323f69)("w.%s(%s[i])", _0x2dad04, _0x323f69)("w.ldelim()");
              } else {
                _0x372805("for(var i=0;i<%s.length;++i)", _0x323f69);
                if (undefined === _0x102b3a) {
                  if (_0x213ba3.resolvedType.group) {
                    _0x372805("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0x52e83d, _0x323f69 + "[i]", (_0x213ba3.id << 0x3 | 0x3) >>> 0x0, (_0x213ba3.id << 0x3 | 0x4) >>> 0x0);
                  } else {
                    _0x372805("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", _0x52e83d, _0x323f69 + "[i]", (_0x213ba3.id << 0x3 | 0x2) >>> 0x0);
                  }
                } else {
                  _0x372805("w.uint32(%i).%s(%s[i])", (_0x213ba3.id << 0x3 | _0x102b3a) >>> 0x0, _0x2dad04, _0x323f69);
                }
              }
              _0x372805('}');
            } else {
              if (_0x213ba3.optional) {
                _0x372805('if(%s!=null&&Object.hasOwnProperty.call(m,%j))', _0x323f69, _0x213ba3.name);
              }
              if (undefined === _0x102b3a) {
                if (_0x213ba3.resolvedType.group) {
                  _0x372805("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0x52e83d, _0x323f69, (_0x213ba3.id << 0x3 | 0x3) >>> 0x0, (_0x213ba3.id << 0x3 | 0x4) >>> 0x0);
                } else {
                  _0x372805("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", _0x52e83d, _0x323f69, (_0x213ba3.id << 0x3 | 0x2) >>> 0x0);
                }
              } else {
                _0x372805("w.uint32(%i).%s(%s)", (_0x213ba3.id << 0x3 | _0x102b3a) >>> 0x0, _0x2dad04, _0x323f69);
              }
            }
          }
          return _0x372805("return w");
        };
        var _0x2755bf = _0x3e618b('./enum');
        var _0xa12a47 = _0x3e618b('./types');
        var _0x1aca1a = _0x3e618b('./util');
        _0x3ea92b.exports;
      }, function () {
        return {
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js", function (_0xad7742, _0x4cd118, _0xff6256, _0xb3aba1, _0x3d40f2) {
        var _0x22c268 = _0xff6256.exports = _0x4cd118("./index-minimal");
        _0x22c268.build = "light";
        _0x22c268.load = function (_0x341000, _0x138711, _0x3d2f0b) {
          if ("function" == typeof _0x138711) {
            _0x3d2f0b = _0x138711;
            _0x138711 = new _0x22c268.Root();
          } else if (!_0x138711) {
            _0x138711 = new _0x22c268.Root();
          }
          return _0x138711.load(_0x341000, _0x3d2f0b);
        };
        _0x22c268.loadSync = function (_0x3432cd, _0x4178d3) {
          if (!_0x4178d3) {
            _0x4178d3 = new _0x22c268.Root();
          }
          return _0x4178d3.loadSync(_0x3432cd);
        };
        _0x22c268.encoder = _0x4cd118("./encoder");
        _0x22c268.decoder = _0x4cd118("./decoder");
        _0x22c268.verifier = _0x4cd118('./verifier');
        _0x22c268.converter = _0x4cd118("./converter");
        _0x22c268.ReflectionObject = _0x4cd118("./object");
        _0x22c268.Namespace = _0x4cd118("./namespace");
        _0x22c268.Root = _0x4cd118("./root");
        _0x22c268.Enum = _0x4cd118("./enum");
        _0x22c268.Type = _0x4cd118("./type");
        _0x22c268.Field = _0x4cd118("./field");
        _0x22c268.OneOf = _0x4cd118('./oneof');
        _0x22c268.MapField = _0x4cd118("./mapfield");
        _0x22c268.Service = _0x4cd118('./service');
        _0x22c268.Method = _0x4cd118("./method");
        _0x22c268.Message = _0x4cd118("./message");
        _0x22c268.wrappers = _0x4cd118("./wrappers");
        _0x22c268.types = _0x4cd118("./types");
        _0x22c268.util = _0x4cd118('./util');
        _0x22c268.ReflectionObject._configure(_0x22c268.Root);
        _0x22c268.Namespace._configure(_0x22c268.Type, _0x22c268.Service, _0x22c268.Enum);
        _0x22c268.Root._configure(_0x22c268.Type);
        _0x22c268.Field._configure(_0x22c268.Type);
        _0xff6256.exports;
      }, function () {
        return {
          './index-minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js",
          './encoder': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js',
          './decoder': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          './verifier': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js',
          './converter': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          './object': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/object.js',
          './namespace': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './root': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './type': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './field': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './oneof': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './mapfield': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './service': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/service.js',
          './method': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/method.js',
          './message': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/message.js',
          './wrappers': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js",
          './types': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js", function (_0x199578, _0x217116, _0x4c49f6, _0x510d2a, _0x387fff) {
        _0x4c49f6.exports = _0x1a9df4;
        var _0x12574f = /[\s{}=;:[\],'"()<>]/g;
        var _0x348995 = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
        var _0x1ebf62 = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
        var _0x3383a7 = /^ *[*/]+ */;
        var _0x152685 = /^\s*\*?\/*/;
        var _0x570715 = /\n/g;
        var _0xc3df6b = /\s/;
        var _0x33d946 = /\\(.?)/g;
        var _0x2d30e7 = {
          0x0: "\0",
          'r': "\r",
          'n': "\n",
          't': "\t"
        };
        function _0x528d37(_0x2269b6) {
          return _0x2269b6.replace(_0x33d946, function (_0x3b3559, _0x5ed084) {
            switch (_0x5ed084) {
              case "\\":
              case '':
                return _0x5ed084;
              default:
                return _0x2d30e7[_0x5ed084] || '';
            }
          });
        }
        function _0x1a9df4(_0x340f39, _0x2c9a97) {
          _0x340f39 = _0x340f39.toString();
          var _0x2e15f9 = 0x0;
          var _0xac0d3 = _0x340f39.length;
          var _0x770a62 = 0x1;
          var _0x17e4a7 = null;
          var _0x6d36fe = null;
          var _0x16dc34 = 0x0;
          var _0x235c31 = false;
          var _0x3d73ae = false;
          var _0x331312 = [];
          var _0x4ba226 = null;
          function _0x3adc5d(_0x6cfa7f, _0x5e37e0, _0x37c174) {
            _0x17e4a7 = _0x340f39.charAt(_0x6cfa7f++);
            _0x16dc34 = _0x770a62;
            _0x235c31 = false;
            _0x3d73ae = _0x37c174;
            var _0x2ef689;
            var _0xc2f1ad = _0x6cfa7f - (_0x2c9a97 ? 0x2 : 0x3);
            do {
              if (--_0xc2f1ad < 0x0 || "\n" === (_0x2ef689 = _0x340f39.charAt(_0xc2f1ad))) {
                _0x235c31 = true;
                break;
              }
            } while (" " === _0x2ef689 || "\t" === _0x2ef689);
            var _0x5ae8a3 = _0x340f39.substring(_0x6cfa7f, _0x5e37e0).split(_0x570715);
            for (var _0x473762 = 0x0; _0x473762 < _0x5ae8a3.length; ++_0x473762) {
              _0x5ae8a3[_0x473762] = _0x5ae8a3[_0x473762].replace(_0x2c9a97 ? _0x152685 : _0x3383a7, '').trim();
            }
            _0x6d36fe = _0x5ae8a3.join("\n").trim();
          }
          function _0xba2cfd(_0x2fd7b4) {
            var _0xe9c076 = _0x30025f(_0x2fd7b4);
            var _0x5e08cc = _0x340f39.substring(_0x2fd7b4, _0xe9c076);
            return /^\s*\/{1,2}/.test(_0x5e08cc);
          }
          function _0x30025f(_0x462c65) {
            for (var _0x32ab5e = _0x462c65; _0x32ab5e < _0xac0d3 && "\n" !== _0x340f39.charAt(_0x32ab5e);) {
              _0x32ab5e++;
            }
            return _0x32ab5e;
          }
          function _0x51414d() {
            if (_0x331312.length > 0x0) {
              return _0x331312.shift();
            }
            if (_0x4ba226) {
              return function () {
                var _0x183eb9 = "'" === _0x4ba226 ? _0x1ebf62 : _0x348995;
                _0x183eb9.lastIndex = _0x2e15f9 - 0x1;
                var _0x54d0a1 = _0x183eb9.exec(_0x340f39);
                if (!_0x54d0a1) {
                  throw Error("illegal string (line " + _0x770a62 + ')');
                }
                _0x2e15f9 = _0x183eb9.lastIndex;
                _0x4e7023(_0x4ba226);
                _0x4ba226 = null;
                return _0x528d37(_0x54d0a1[0x1]);
              }();
            }
            var _0xd6382a;
            var _0x447cbd;
            var _0x44be0c;
            var _0x496ae1;
            var _0x4885a1;
            var _0x2b6ba1 = 0x0 === _0x2e15f9;
            do {
              if (_0x2e15f9 === _0xac0d3) {
                return null;
              }
              for (_0xd6382a = false; _0xc3df6b.test(_0x44be0c = _0x340f39.charAt(_0x2e15f9));) {
                if ("\n" === _0x44be0c) {
                  _0x2b6ba1 = true;
                  ++_0x770a62;
                }
                if (++_0x2e15f9 === _0xac0d3) {
                  return null;
                }
              }
              if ('/' === _0x340f39.charAt(_0x2e15f9)) {
                if (++_0x2e15f9 === _0xac0d3) {
                  throw Error("illegal comment (line " + _0x770a62 + ')');
                }
                if ('/' === _0x340f39.charAt(_0x2e15f9)) {
                  if (_0x2c9a97) {
                    _0x496ae1 = _0x2e15f9;
                    _0x4885a1 = false;
                    if (_0xba2cfd(_0x2e15f9)) {
                      _0x4885a1 = true;
                      do {
                        if ((_0x2e15f9 = _0x30025f(_0x2e15f9)) === _0xac0d3) {
                          break;
                        }
                        _0x2e15f9++;
                      } while (_0xba2cfd(_0x2e15f9));
                    } else {
                      _0x2e15f9 = Math.min(_0xac0d3, _0x30025f(_0x2e15f9) + 0x1);
                    }
                    if (_0x4885a1) {
                      _0x3adc5d(_0x496ae1, _0x2e15f9, _0x2b6ba1);
                    }
                    _0x770a62++;
                    _0xd6382a = true;
                  } else {
                    for (_0x4885a1 = '/' === _0x340f39.charAt(_0x496ae1 = _0x2e15f9 + 0x1); "\n" !== _0x340f39.charAt(++_0x2e15f9);) {
                      if (_0x2e15f9 === _0xac0d3) {
                        return null;
                      }
                    }
                    ++_0x2e15f9;
                    if (_0x4885a1) {
                      _0x3adc5d(_0x496ae1, _0x2e15f9 - 0x1, _0x2b6ba1);
                    }
                    ++_0x770a62;
                    _0xd6382a = true;
                  }
                } else {
                  if ('*' !== (_0x44be0c = _0x340f39.charAt(_0x2e15f9))) {
                    return '/';
                  }
                  _0x496ae1 = _0x2e15f9 + 0x1;
                  _0x4885a1 = _0x2c9a97 || '*' === _0x340f39.charAt(_0x496ae1);
                  do {
                    if ("\n" === _0x44be0c) {
                      ++_0x770a62;
                    }
                    if (++_0x2e15f9 === _0xac0d3) {
                      throw Error("illegal comment (line " + _0x770a62 + ')');
                    }
                    _0x447cbd = _0x44be0c;
                    _0x44be0c = _0x340f39.charAt(_0x2e15f9);
                  } while ('*' !== _0x447cbd || '/' !== _0x44be0c);
                  ++_0x2e15f9;
                  if (_0x4885a1) {
                    _0x3adc5d(_0x496ae1, _0x2e15f9 - 0x2, _0x2b6ba1);
                  }
                  _0xd6382a = true;
                }
              }
            } while (_0xd6382a);
            var _0x430625 = _0x2e15f9;
            _0x12574f.lastIndex = 0x0;
            if (!_0x12574f.test(_0x340f39.charAt(_0x430625++))) {
              for (; _0x430625 < _0xac0d3 && !_0x12574f.test(_0x340f39.charAt(_0x430625));) {
                ++_0x430625;
              }
            }
            var _0x414375 = _0x340f39.substring(_0x2e15f9, _0x2e15f9 = _0x430625);
            if (!("\"" !== _0x414375 && "'" !== _0x414375)) {
              _0x4ba226 = _0x414375;
            }
            return _0x414375;
          }
          function _0x4e7023(_0x2be0fc) {
            _0x331312.push(_0x2be0fc);
          }
          function _0x5c679f() {
            if (!_0x331312.length) {
              var _0xebf2f1 = _0x51414d();
              if (null === _0xebf2f1) {
                return null;
              }
              _0x4e7023(_0xebf2f1);
            }
            return _0x331312[0x0];
          }
          return Object.defineProperty({
            'next': _0x51414d,
            'peek': _0x5c679f,
            'push': _0x4e7023,
            'skip': function (_0x2a4e95, _0x34ad37) {
              var _0x1549ca = _0x5c679f();
              if (_0x1549ca === _0x2a4e95) {
                _0x51414d();
                return true;
              }
              if (!_0x34ad37) {
                throw Error("illegal " + ("token '" + _0x1549ca + "', '" + _0x2a4e95 + "' expected") + " (line " + _0x770a62 + ')');
              }
              return false;
            },
            'cmnt': function (_0x1eca43) {
              var _0x47418f = null;
              if (undefined === _0x1eca43) {
                if (_0x16dc34 === _0x770a62 - 0x1 && (_0x2c9a97 || '*' === _0x17e4a7 || _0x235c31)) {
                  _0x47418f = _0x3d73ae ? _0x6d36fe : null;
                }
              } else {
                if (_0x16dc34 < _0x1eca43) {
                  _0x5c679f();
                }
                if (!(_0x16dc34 !== _0x1eca43 || _0x235c31 || !_0x2c9a97 && '/' !== _0x17e4a7)) {
                  _0x47418f = _0x3d73ae ? null : _0x6d36fe;
                }
              }
              return _0x47418f;
            }
          }, "line", {
            'get': function () {
              return _0x770a62;
            }
          });
        }
        _0x1a9df4.unescape = _0x528d37;
        _0x4c49f6.exports;
      }, {});
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/parse.js", function (_0x764592, _0x3e1a07, _0x5a46df, _0x2d76c8, _0x5ac6bc) {
        _0x5a46df.exports = _0x37112d;
        _0x37112d.filename = null;
        _0x37112d.defaults = {
          'keepCase': false
        };
        var _0x5da834 = _0x3e1a07("./tokenize");
        var _0x2d56f5 = _0x3e1a07("./root");
        var _0xf5863e = _0x3e1a07("./type");
        var _0x109d01 = _0x3e1a07("./field");
        var _0x493b24 = _0x3e1a07("./mapfield");
        var _0x188728 = _0x3e1a07("./oneof");
        var _0x582f23 = _0x3e1a07("./enum");
        var _0x4c6faa = _0x3e1a07('./service');
        var _0x4a6941 = _0x3e1a07("./method");
        var _0x20f42f = _0x3e1a07('./types');
        var _0x47988a = _0x3e1a07('./util');
        var _0x6aea67 = /^[1-9][0-9]*$/;
        var _0x5de050 = /^-?[1-9][0-9]*$/;
        var _0x105965 = /^0[x][0-9a-fA-F]+$/;
        var _0x119c53 = /^-?0[x][0-9a-fA-F]+$/;
        var _0x4c78fd = /^0[0-7]+$/;
        var _0x5d8119 = /^-?0[0-7]+$/;
        var _0x4df9a8 = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
        var _0x289c6e = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
        var _0x11541d = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
        var _0x3ca8cf = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
        function _0x37112d(_0x521936, _0x29ad76, _0x4b8e45) {
          if (!(_0x29ad76 instanceof _0x2d56f5)) {
            _0x4b8e45 = _0x29ad76;
            _0x29ad76 = new _0x2d56f5();
          }
          if (!_0x4b8e45) {
            _0x4b8e45 = _0x37112d.defaults;
          }
          var _0x3ee8e3;
          var _0x48959f;
          var _0x20c0e4;
          var _0x41294a;
          var _0x287ac0;
          var _0x1a1f7f = _0x4b8e45.preferTrailingComment || false;
          var _0x54316e = _0x5da834(_0x521936, _0x4b8e45.alternateCommentMode || false);
          var _0x321a7d = _0x54316e.next;
          var _0x648d3f = _0x54316e.push;
          var _0x18447c = _0x54316e.peek;
          var _0x11a217 = _0x54316e.skip;
          var _0x41dfbc = _0x54316e.cmnt;
          var _0x3892a4 = true;
          var _0xbe141b = false;
          var _0x3fb6af = _0x29ad76;
          var _0xaab2e2 = _0x4b8e45.keepCase ? function (_0x1571c9) {
            return _0x1571c9;
          } : _0x47988a.camelCase;
          function _0x55c392(_0x493a3c, _0x31e94e, _0x111463) {
            var _0x3831b8 = _0x37112d.filename;
            if (!_0x111463) {
              _0x37112d.filename = null;
            }
            return Error("illegal " + (_0x31e94e || "token") + " '" + _0x493a3c + "' (" + (_0x3831b8 ? _0x3831b8 + ", " : '') + "line " + _0x54316e.line + ')');
          }
          function _0x541118() {
            var _0x333562;
            var _0x19ccc7 = [];
            do {
              if ("\"" !== (_0x333562 = _0x321a7d()) && "'" !== _0x333562) {
                throw _0x55c392(_0x333562);
              }
              _0x19ccc7.push(_0x321a7d());
              _0x11a217(_0x333562);
              _0x333562 = _0x18447c();
            } while ("\"" === _0x333562 || "'" === _0x333562);
            return _0x19ccc7.join('');
          }
          function _0x15e076(_0x1f55cc) {
            var _0x1a289b = _0x321a7d();
            switch (_0x1a289b) {
              case "'":
              case "\"":
                _0x648d3f(_0x1a289b);
                return _0x541118();
              case "true":
              case 'TRUE':
                return true;
              case "false":
              case "FALSE":
                return false;
            }
            try {
              return function (_0x459061, _0x28508b) {
                var _0x1d686d = 0x1;
                if ('-' === _0x459061.charAt(0x0)) {
                  _0x1d686d = -0x1;
                  _0x459061 = _0x459061.substring(0x1);
                }
                switch (_0x459061) {
                  case "inf":
                  case "INF":
                  case 'Inf':
                    return _0x1d686d * Infinity;
                  case "nan":
                  case "NAN":
                  case "Nan":
                  case "NaN":
                    return NaN;
                  case '0':
                    return 0x0;
                }
                if (_0x6aea67.test(_0x459061)) {
                  return _0x1d686d * parseInt(_0x459061, 0xa);
                }
                if (_0x105965.test(_0x459061)) {
                  return _0x1d686d * parseInt(_0x459061, 0x10);
                }
                if (_0x4c78fd.test(_0x459061)) {
                  return _0x1d686d * parseInt(_0x459061, 0x8);
                }
                if (_0x4df9a8.test(_0x459061)) {
                  return _0x1d686d * parseFloat(_0x459061);
                }
                throw _0x55c392(_0x459061, "number", _0x28508b);
              }(_0x1a289b, true);
            } catch (_0x2e8630) {
              if (_0x1f55cc && _0x11541d.test(_0x1a289b)) {
                return _0x1a289b;
              }
              throw _0x55c392(_0x1a289b, 'value');
            }
          }
          function _0x50b960(_0x3d0806, _0x350d20) {
            var _0x583529;
            var _0x55b23c;
            do {
              if (!_0x350d20 || "\"" !== (_0x583529 = _0x18447c()) && "'" !== _0x583529) {
                _0x3d0806.push([_0x55b23c = _0x4601c4(_0x321a7d()), _0x11a217('to', true) ? _0x4601c4(_0x321a7d()) : _0x55b23c]);
              } else {
                _0x3d0806.push(_0x541118());
              }
            } while (_0x11a217(',', true));
            _0x11a217(';');
          }
          function _0x4601c4(_0x7c70d3, _0x5627d8) {
            switch (_0x7c70d3) {
              case "max":
              case "MAX":
              case "Max":
                return 0x1fffffff;
              case '0':
                return 0x0;
            }
            if (!_0x5627d8 && '-' === _0x7c70d3.charAt(0x0)) {
              throw _0x55c392(_0x7c70d3, 'id');
            }
            if (_0x5de050.test(_0x7c70d3)) {
              return parseInt(_0x7c70d3, 0xa);
            }
            if (_0x119c53.test(_0x7c70d3)) {
              return parseInt(_0x7c70d3, 0x10);
            }
            if (_0x5d8119.test(_0x7c70d3)) {
              return parseInt(_0x7c70d3, 0x8);
            }
            throw _0x55c392(_0x7c70d3, 'id');
          }
          function _0x481a2b() {
            if (undefined !== _0x3ee8e3) {
              throw _0x55c392("package");
            }
            _0x3ee8e3 = _0x321a7d();
            if (!_0x11541d.test(_0x3ee8e3)) {
              throw _0x55c392(_0x3ee8e3, "name");
            }
            _0x3fb6af = _0x3fb6af.define(_0x3ee8e3);
            _0x11a217(';');
          }
          function _0x2bc73b() {
            var _0x4ff5d1;
            var _0x5caad9 = _0x18447c();
            switch (_0x5caad9) {
              case "weak":
                _0x4ff5d1 = _0x20c0e4 || (_0x20c0e4 = []);
                _0x321a7d();
                break;
              case "public":
                _0x321a7d();
              default:
                _0x4ff5d1 = _0x48959f || (_0x48959f = []);
            }
            _0x5caad9 = _0x541118();
            _0x11a217(';');
            _0x4ff5d1.push(_0x5caad9);
          }
          function _0x5240e8() {
            _0x11a217('=');
            _0x41294a = _0x541118();
            if (!(_0xbe141b = "proto3" === _0x41294a) && "proto2" !== _0x41294a) {
              throw _0x55c392(_0x41294a, "syntax");
            }
            _0x11a217(';');
          }
          function _0x2930f7(_0x5ca4ae, _0x101ad7) {
            switch (_0x101ad7) {
              case "option":
                _0x4e96f4(_0x5ca4ae, _0x101ad7);
                _0x11a217(';');
                return true;
              case "message":
                (function (_0x10d0d9, _0x1b9df7) {
                  if (!_0x289c6e.test(_0x1b9df7 = _0x321a7d())) {
                    throw _0x55c392(_0x1b9df7, "type name");
                  }
                  var _0x742e7f = new _0xf5863e(_0x1b9df7);
                  _0x251808(_0x742e7f, function (_0x87e893) {
                    if (!_0x2930f7(_0x742e7f, _0x87e893)) {
                      switch (_0x87e893) {
                        case 'map':
                          !function (_0x4ce23c) {
                            _0x11a217('<');
                            var _0x18e14e = _0x321a7d();
                            if (undefined === _0x20f42f.mapKey[_0x18e14e]) {
                              throw _0x55c392(_0x18e14e, 'type');
                            }
                            _0x11a217(',');
                            var _0x3b7bdd = _0x321a7d();
                            if (!_0x11541d.test(_0x3b7bdd)) {
                              throw _0x55c392(_0x3b7bdd, "type");
                            }
                            _0x11a217('>');
                            var _0x3387b3 = _0x321a7d();
                            if (!_0x289c6e.test(_0x3387b3)) {
                              throw _0x55c392(_0x3387b3, 'name');
                            }
                            _0x11a217('=');
                            var _0x5431fe = new _0x493b24(_0xaab2e2(_0x3387b3), _0x4601c4(_0x321a7d()), _0x18e14e, _0x3b7bdd);
                            _0x251808(_0x5431fe, function (_0x447f22) {
                              if ("option" !== _0x447f22) {
                                throw _0x55c392(_0x447f22);
                              }
                              _0x4e96f4(_0x5431fe, _0x447f22);
                              _0x11a217(';');
                            }, function () {
                              _0x3d3a4f(_0x5431fe);
                            });
                            _0x4ce23c.add(_0x5431fe);
                          }(_0x742e7f);
                          break;
                        case "required":
                        case "repeated":
                          _0x5f3961(_0x742e7f, _0x87e893);
                          break;
                        case "optional":
                          _0x5f3961(_0x742e7f, _0xbe141b ? "proto3_optional" : "optional");
                          break;
                        case "oneof":
                          !function (_0x157cb4, _0x1cfacc) {
                            if (!_0x289c6e.test(_0x1cfacc = _0x321a7d())) {
                              throw _0x55c392(_0x1cfacc, "name");
                            }
                            var _0x19cbe6 = new _0x188728(_0xaab2e2(_0x1cfacc));
                            _0x251808(_0x19cbe6, function (_0x6714d7) {
                              if ("option" === _0x6714d7) {
                                _0x4e96f4(_0x19cbe6, _0x6714d7);
                                _0x11a217(';');
                              } else {
                                _0x648d3f(_0x6714d7);
                                _0x5f3961(_0x19cbe6, "optional");
                              }
                            });
                            _0x157cb4.add(_0x19cbe6);
                          }(_0x742e7f, _0x87e893);
                          break;
                        case "extensions":
                          _0x50b960(_0x742e7f.extensions || (_0x742e7f.extensions = []));
                          break;
                        case "reserved":
                          _0x50b960(_0x742e7f.reserved || (_0x742e7f.reserved = []), true);
                          break;
                        default:
                          if (!_0xbe141b || !_0x11541d.test(_0x87e893)) {
                            throw _0x55c392(_0x87e893);
                          }
                          _0x648d3f(_0x87e893);
                          _0x5f3961(_0x742e7f, "optional");
                      }
                    }
                  });
                  _0x10d0d9.add(_0x742e7f);
                })(_0x5ca4ae, _0x101ad7);
                return true;
              case "enum":
                (function (_0x2756c9, _0xac7818) {
                  if (!_0x289c6e.test(_0xac7818 = _0x321a7d())) {
                    throw _0x55c392(_0xac7818, "name");
                  }
                  var _0x4cd499 = new _0x582f23(_0xac7818);
                  _0x251808(_0x4cd499, function (_0x75526e) {
                    switch (_0x75526e) {
                      case "option":
                        _0x4e96f4(_0x4cd499, _0x75526e);
                        _0x11a217(';');
                        break;
                      case 'reserved':
                        _0x50b960(_0x4cd499.reserved || (_0x4cd499.reserved = []), true);
                        break;
                      default:
                        !function (_0x1254f7, _0x13fffd) {
                          if (!_0x289c6e.test(_0x13fffd)) {
                            throw _0x55c392(_0x13fffd, "name");
                          }
                          _0x11a217('=');
                          var _0x37ce49 = _0x4601c4(_0x321a7d(), true);
                          var _0x9c9f78 = {};
                          _0x251808(_0x9c9f78, function (_0x3afb34) {
                            if ("option" !== _0x3afb34) {
                              throw _0x55c392(_0x3afb34);
                            }
                            _0x4e96f4(_0x9c9f78, _0x3afb34);
                            _0x11a217(';');
                          }, function () {
                            _0x3d3a4f(_0x9c9f78);
                          });
                          _0x1254f7.add(_0x13fffd, _0x37ce49, _0x9c9f78.comment);
                        }(_0x4cd499, _0x75526e);
                    }
                  });
                  _0x2756c9.add(_0x4cd499);
                })(_0x5ca4ae, _0x101ad7);
                return true;
              case "service":
                (function (_0x11fa67, _0x42bcfa) {
                  if (!_0x289c6e.test(_0x42bcfa = _0x321a7d())) {
                    throw _0x55c392(_0x42bcfa, "service name");
                  }
                  var _0x1fbb6d = new _0x4c6faa(_0x42bcfa);
                  _0x251808(_0x1fbb6d, function (_0x87ed68) {
                    if (!_0x2930f7(_0x1fbb6d, _0x87ed68)) {
                      if ("rpc" !== _0x87ed68) {
                        throw _0x55c392(_0x87ed68);
                      }
                      !function (_0x55a934, _0x59f0d1) {
                        var _0x484eba = _0x41dfbc();
                        var _0xe36be2 = _0x59f0d1;
                        if (!_0x289c6e.test(_0x59f0d1 = _0x321a7d())) {
                          throw _0x55c392(_0x59f0d1, "name");
                        }
                        var _0x4a36f4;
                        var _0xfab373;
                        var _0x5e8a4a;
                        var _0xf63957;
                        var _0x468e4d = _0x59f0d1;
                        _0x11a217('(');
                        if (_0x11a217("stream", true)) {
                          _0xfab373 = true;
                        }
                        if (!_0x11541d.test(_0x59f0d1 = _0x321a7d())) {
                          throw _0x55c392(_0x59f0d1);
                        }
                        _0x4a36f4 = _0x59f0d1;
                        _0x11a217(')');
                        _0x11a217("returns");
                        _0x11a217('(');
                        if (_0x11a217('stream', true)) {
                          _0xf63957 = true;
                        }
                        if (!_0x11541d.test(_0x59f0d1 = _0x321a7d())) {
                          throw _0x55c392(_0x59f0d1);
                        }
                        _0x5e8a4a = _0x59f0d1;
                        _0x11a217(')');
                        var _0x55e404 = new _0x4a6941(_0x468e4d, _0xe36be2, _0x4a36f4, _0x5e8a4a, _0xfab373, _0xf63957);
                        _0x55e404.comment = _0x484eba;
                        _0x251808(_0x55e404, function (_0x3f6c64) {
                          if ("option" !== _0x3f6c64) {
                            throw _0x55c392(_0x3f6c64);
                          }
                          _0x4e96f4(_0x55e404, _0x3f6c64);
                          _0x11a217(';');
                        });
                        _0x55a934.add(_0x55e404);
                      }(_0x1fbb6d, _0x87ed68);
                    }
                  });
                  _0x11fa67.add(_0x1fbb6d);
                })(_0x5ca4ae, _0x101ad7);
                return true;
              case "extend":
                (function (_0x1a7598, _0x463fee) {
                  if (!_0x11541d.test(_0x463fee = _0x321a7d())) {
                    throw _0x55c392(_0x463fee, "reference");
                  }
                  var _0x2b8637 = _0x463fee;
                  _0x251808(null, function (_0x1103d9) {
                    switch (_0x1103d9) {
                      case "required":
                      case 'repeated':
                        _0x5f3961(_0x1a7598, _0x1103d9, _0x2b8637);
                        break;
                      case "optional":
                        _0x5f3961(_0x1a7598, _0xbe141b ? "proto3_optional" : "optional", _0x2b8637);
                        break;
                      default:
                        if (!_0xbe141b || !_0x11541d.test(_0x1103d9)) {
                          throw _0x55c392(_0x1103d9);
                        }
                        _0x648d3f(_0x1103d9);
                        _0x5f3961(_0x1a7598, "optional", _0x2b8637);
                    }
                  });
                })(_0x5ca4ae, _0x101ad7);
                return true;
            }
            return false;
          }
          function _0x251808(_0x51196b, _0x20ee71, _0x55b33b) {
            var _0x19c3ab = _0x54316e.line;
            if (_0x51196b) {
              if ("string" != typeof _0x51196b.comment) {
                _0x51196b.comment = _0x41dfbc();
              }
              _0x51196b.filename = _0x37112d.filename;
            }
            if (_0x11a217('{', true)) {
              for (var _0x4b904c; '}' !== (_0x4b904c = _0x321a7d());) {
                _0x20ee71(_0x4b904c);
              }
              _0x11a217(';', true);
            } else {
              if (_0x55b33b) {
                _0x55b33b();
              }
              _0x11a217(';');
              if (_0x51196b && ("string" != typeof _0x51196b.comment || _0x1a1f7f)) {
                _0x51196b.comment = _0x41dfbc(_0x19c3ab) || _0x51196b.comment;
              }
            }
          }
          function _0x5f3961(_0x5d54a4, _0x551d44, _0x4942d8) {
            var _0x784162 = _0x321a7d();
            if ("group" !== _0x784162) {
              if (!_0x11541d.test(_0x784162)) {
                throw _0x55c392(_0x784162, "type");
              }
              var _0xa0f158 = _0x321a7d();
              if (!_0x289c6e.test(_0xa0f158)) {
                throw _0x55c392(_0xa0f158, "name");
              }
              _0xa0f158 = _0xaab2e2(_0xa0f158);
              _0x11a217('=');
              var _0x112313 = new _0x109d01(_0xa0f158, _0x4601c4(_0x321a7d()), _0x784162, _0x551d44, _0x4942d8);
              _0x251808(_0x112313, function (_0x2e5fdb) {
                if ('option' !== _0x2e5fdb) {
                  throw _0x55c392(_0x2e5fdb);
                }
                _0x4e96f4(_0x112313, _0x2e5fdb);
                _0x11a217(';');
              }, function () {
                _0x3d3a4f(_0x112313);
              });
              if ("proto3_optional" === _0x551d44) {
                var _0x352eba = new _0x188728('_' + _0xa0f158);
                _0x112313.setOption("proto3_optional", true);
                _0x352eba.add(_0x112313);
                _0x5d54a4.add(_0x352eba);
              } else {
                _0x5d54a4.add(_0x112313);
              }
              if (!(_0xbe141b || !_0x112313.repeated || undefined === _0x20f42f.packed[_0x784162] && undefined !== _0x20f42f.basic[_0x784162])) {
                _0x112313.setOption("packed", false, true);
              }
            } else {
              !function (_0x41ffa0, _0x38f13d) {
                var _0x44eee9 = _0x321a7d();
                if (!_0x289c6e.test(_0x44eee9)) {
                  throw _0x55c392(_0x44eee9, "name");
                }
                var _0x55bde9 = _0x47988a.lcFirst(_0x44eee9);
                if (_0x44eee9 === _0x55bde9) {
                  _0x44eee9 = _0x47988a.ucFirst(_0x44eee9);
                }
                _0x11a217('=');
                var _0x2ab716 = _0x4601c4(_0x321a7d());
                var _0x88582 = new _0xf5863e(_0x44eee9);
                _0x88582.group = true;
                var _0x5b94ef = new _0x109d01(_0x55bde9, _0x2ab716, _0x44eee9, _0x38f13d);
                _0x5b94ef.filename = _0x37112d.filename;
                _0x251808(_0x88582, function (_0xbb52c2) {
                  switch (_0xbb52c2) {
                    case "option":
                      _0x4e96f4(_0x88582, _0xbb52c2);
                      _0x11a217(';');
                      break;
                    case 'required':
                    case 'repeated':
                      _0x5f3961(_0x88582, _0xbb52c2);
                      break;
                    case 'optional':
                      _0x5f3961(_0x88582, _0xbe141b ? "proto3_optional" : "optional");
                      break;
                    default:
                      throw _0x55c392(_0xbb52c2);
                  }
                });
                _0x41ffa0.add(_0x88582).add(_0x5b94ef);
              }(_0x5d54a4, _0x551d44);
            }
          }
          function _0x4e96f4(_0x2e3d2a, _0x29069e) {
            var _0x2b8f85 = _0x11a217('(', true);
            if (!_0x11541d.test(_0x29069e = _0x321a7d())) {
              throw _0x55c392(_0x29069e, "name");
            }
            var _0x5d7a26;
            var _0x216899 = _0x29069e;
            var _0x4c64fe = _0x216899;
            if (_0x2b8f85) {
              _0x11a217(')');
              _0x4c64fe = _0x216899 = '(' + _0x216899 + ')';
              _0x29069e = _0x18447c();
              if (_0x3ca8cf.test(_0x29069e)) {
                _0x5d7a26 = _0x29069e.substr(0x1);
                _0x216899 += _0x29069e;
                _0x321a7d();
              }
            }
            _0x11a217('=');
            (function (_0x71c281, _0x5bb3d6, _0x462e25, _0x228b9c) {
              if (_0x71c281.setParsedOption) {
                _0x71c281.setParsedOption(_0x5bb3d6, _0x462e25, _0x228b9c);
              }
            })(_0x2e3d2a, _0x4c64fe, _0x370c89(_0x2e3d2a, _0x216899), _0x5d7a26);
          }
          function _0x370c89(_0x2f7509, _0x3777e2) {
            if (_0x11a217('{', true)) {
              for (var _0x203977 = {}; !_0x11a217('}', true);) {
                if (!_0x289c6e.test(_0x287ac0 = _0x321a7d())) {
                  throw _0x55c392(_0x287ac0, "name");
                }
                var _0x4ee587;
                var _0x46a51d = _0x287ac0;
                if ('{' === _0x18447c()) {
                  _0x4ee587 = _0x370c89(_0x2f7509, _0x3777e2 + '.' + _0x287ac0);
                } else {
                  _0x11a217(':');
                  if ('{' === _0x18447c()) {
                    _0x4ee587 = _0x370c89(_0x2f7509, _0x3777e2 + '.' + _0x287ac0);
                  } else {
                    _0x4ee587 = _0x15e076(true);
                    _0x3310be(_0x2f7509, _0x3777e2 + '.' + _0x287ac0, _0x4ee587);
                  }
                }
                var _0x28a417 = _0x203977[_0x46a51d];
                if (_0x28a417) {
                  _0x4ee587 = [].concat(_0x28a417).concat(_0x4ee587);
                }
                _0x203977[_0x46a51d] = _0x4ee587;
                _0x11a217(',', true);
              }
              return _0x203977;
            }
            var _0x5680e2 = _0x15e076(true);
            _0x3310be(_0x2f7509, _0x3777e2, _0x5680e2);
            return _0x5680e2;
          }
          function _0x3310be(_0x4feddf, _0x4e15e6, _0x300e44) {
            if (_0x4feddf.setOption) {
              _0x4feddf.setOption(_0x4e15e6, _0x300e44);
            }
          }
          function _0x3d3a4f(_0x1da2e6) {
            if (_0x11a217('[', true)) {
              do {
                _0x4e96f4(_0x1da2e6, "option");
              } while (_0x11a217(',', true));
              _0x11a217(']');
            }
            return _0x1da2e6;
          }
          for (; null !== (_0x287ac0 = _0x321a7d());) {
            switch (_0x287ac0) {
              case "package":
                if (!_0x3892a4) {
                  throw _0x55c392(_0x287ac0);
                }
                _0x481a2b();
                break;
              case 'import':
                if (!_0x3892a4) {
                  throw _0x55c392(_0x287ac0);
                }
                _0x2bc73b();
                break;
              case "syntax":
                if (!_0x3892a4) {
                  throw _0x55c392(_0x287ac0);
                }
                _0x5240e8();
                break;
              case "option":
                _0x4e96f4(_0x3fb6af, _0x287ac0);
                _0x11a217(';');
                break;
              default:
                if (_0x2930f7(_0x3fb6af, _0x287ac0)) {
                  _0x3892a4 = false;
                  continue;
                }
                throw _0x55c392(_0x287ac0);
            }
          }
          _0x37112d.filename = null;
          return {
            'package': _0x3ee8e3,
            'imports': _0x48959f,
            'weakImports': _0x20c0e4,
            'syntax': _0x41294a,
            'root': _0x29ad76
          };
        }
        _0x5a46df.exports;
      }, function () {
        return {
          './tokenize': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          './root': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          './type': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './field': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './mapfield': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './oneof': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './service': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/service.js',
          './method': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/method.js',
          './types': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/common.js", function (_0x557c56, _0x8d0fc8, _0x207c6f, _0x56f5ae, _0x2b1c91) {
        _0x207c6f.exports = _0x225818;
        var _0x3fdbbe;
        var _0x5544f4 = /\/|\./;
        function _0x225818(_0x5f0014, _0x319f1f) {
          if (!_0x5544f4.test(_0x5f0014)) {
            _0x5f0014 = "google/protobuf/" + _0x5f0014 + ".proto";
            _0x319f1f = {
              'nested': {
                'google': {
                  'nested': {
                    'protobuf': {
                      'nested': _0x319f1f
                    }
                  }
                }
              }
            };
          }
          _0x225818[_0x5f0014] = _0x319f1f;
        }
        _0x225818("any", {
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
        _0x225818("duration", {
          'Duration': _0x3fdbbe = {
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
        _0x225818("timestamp", {
          'Timestamp': _0x3fdbbe
        });
        _0x225818("empty", {
          'Empty': {
            'fields': {}
          }
        });
        _0x225818('struct', {
          'Struct': {
            'fields': {
              'fields': {
                'keyType': 'string',
                'type': "Value",
                'id': 0x1
              }
            }
          },
          'Value': {
            'oneofs': {
              'kind': {
                'oneof': ["nullValue", 'numberValue', "stringValue", "boolValue", 'structValue', "listValue"]
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
                'rule': "repeated",
                'type': "Value",
                'id': 0x1
              }
            }
          }
        });
        _0x225818('wrappers', {
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
                'type': "bytes",
                'id': 0x1
              }
            }
          }
        });
        _0x225818("field_mask", {
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
        _0x225818.get = function (_0x5ba6a9) {
          return _0x225818[_0x5ba6a9] || null;
        };
        _0x207c6f.exports;
      }, {});
      var _0x40d47f;
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/index.js", function (_0x431e9d, _0x533831, _0x371487, _0x5b62f7, _0x164766) {
        var _0xb62279 = _0x371487.exports = _0x533831('./index-light');
        _0xb62279.build = "full";
        _0xb62279.tokenize = _0x533831("./tokenize");
        _0xb62279.parse = _0x533831("./parse");
        _0xb62279.common = _0x533831("./common");
        _0xb62279.Root._configure(_0xb62279.Type, _0xb62279.parse, _0xb62279.common);
        _0x371487.exports;
      }, function () {
        return {
          './index-light': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js",
          './tokenize': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          './parse': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/parse.js",
          './common': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/common.js"
        };
      });
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/index.js", function (_0x122bac, _0x58b28d, _0x1eeeb9, _0x4454db, _0x32d295) {
        _0x1eeeb9.exports = _0x58b28d("./src/index");
        _0x40d47f = _0x1eeeb9.exports;
      }, function () {
        return {
          './src/index': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/index.js"
        };
      });
      _0x12e126.require("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/index.js");
      _0x2189a4._RF.push({}, "f34139liEtOX7eeljN8Cz8w", 'index', undefined);
      _0x2189a4._RF.pop();
      var _0x53ce23;
      _0x12e126.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/minimal.js', function (_0x1ea660, _0x4595d1, _0x43db9b, _0x52f413, _0x3df470) {
        _0x43db9b.exports = _0x4595d1('./src/index-minimal');
        _0x43db9b.exports;
      }, function () {
        return {
          './src/index-minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js"
        };
      });
      var _0x49b57d;
      var _0x3382e9;
      var _0x2b31a4;
      var _0xc870a9;
      var _0x3ca80a;
      var _0x11eb58;
      _0x12e126.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/assets/Script/Proto/mptProto.js", function (_0x4e6646, _0xd22c74, _0x3c0257, _0x1a49dc, _0x51e474) {
        var _0x5f0420;
        var _0x58198a = _0xd22c74("protobufjs/minimal");
        var _0x490ac8 = _0x58198a.Reader;
        var _0x2e0c30 = _0x58198a.Writer;
        var _0x24d0a0 = _0x58198a.util;
        var _0x59191d = _0x58198a.roots["default"] || (_0x58198a.roots["default"] = {});
        (_0x5f0420 = {
          "ColumnM": function () {
            function _0x38e53a(_0x3f7c0a) {
              this.Col = [];
              if (_0x3f7c0a) {
                var _0x22363b = Object.keys(_0x3f7c0a);
                for (var _0x5687d0 = 0x0; _0x5687d0 < _0x22363b.length; ++_0x5687d0) {
                  if (null != _0x3f7c0a[_0x22363b[_0x5687d0]]) {
                    this[_0x22363b[_0x5687d0]] = _0x3f7c0a[_0x22363b[_0x5687d0]];
                  }
                }
              }
            }
            _0x38e53a.prototype.Col = _0x24d0a0.emptyArray;
            _0x38e53a.encode = function (_0x4d4cb8, _0xa94381) {
              if (!_0xa94381) {
                _0xa94381 = _0x2e0c30.create();
              }
              if (null != _0x4d4cb8.Col && _0x4d4cb8.Col.length) {
                _0xa94381.uint32(0xa).fork();
                for (var _0x41e70c = 0x0; _0x41e70c < _0x4d4cb8.Col.length; ++_0x41e70c) {
                  _0xa94381.double(_0x4d4cb8.Col[_0x41e70c]);
                }
                _0xa94381.ldelim();
              }
              return _0xa94381;
            };
            _0x38e53a.decode = function (_0x3ee057, _0x3691f7) {
              if (!(_0x3ee057 instanceof _0x490ac8)) {
                _0x3ee057 = _0x490ac8.create(_0x3ee057);
              }
              var _0x3f25c7 = undefined === _0x3691f7 ? _0x3ee057.len : _0x3ee057.pos + _0x3691f7;
              for (var _0x9b394f = new _0x59191d.mptProto.ColumnM(); _0x3ee057.pos < _0x3f25c7;) {
                var _0x4f8879 = _0x3ee057.uint32();
                switch (_0x4f8879 >>> 0x3) {
                  case 0x1:
                    if (!(_0x9b394f.Col && _0x9b394f.Col.length)) {
                      _0x9b394f.Col = [];
                    }
                    if (0x2 == (0x7 & _0x4f8879)) {
                      for (var _0x53215a = _0x3ee057.uint32() + _0x3ee057.pos; _0x3ee057.pos < _0x53215a;) {
                        _0x9b394f.Col.push(_0x3ee057.double());
                      }
                    } else {
                      _0x9b394f.Col.push(_0x3ee057.double());
                    }
                    break;
                  default:
                    _0x3ee057.skipType(0x7 & _0x4f8879);
                }
              }
              return _0x9b394f;
            };
            _0x38e53a.getTypeUrl = function (_0xdb4a07) {
              if (undefined === _0xdb4a07) {
                _0xdb4a07 = 'type.googleapis.com';
              }
              return _0xdb4a07 + '/mptProto.ColumnM';
            };
            return _0x38e53a;
          }(),
          "AwardData": function () {
            function _0x50b172(_0x2e67b2) {
              this.Symbol = [];
              this.Mul = [];
              if (_0x2e67b2) {
                var _0x5cfca5 = Object.keys(_0x2e67b2);
                for (var _0x2ee0c9 = 0x0; _0x2ee0c9 < _0x5cfca5.length; ++_0x2ee0c9) {
                  if (null != _0x2e67b2[_0x5cfca5[_0x2ee0c9]]) {
                    this[_0x5cfca5[_0x2ee0c9]] = _0x2e67b2[_0x5cfca5[_0x2ee0c9]];
                  }
                }
              }
            }
            _0x50b172.prototype.Index = 0x0;
            _0x50b172.prototype.Pos = 0x0;
            _0x50b172.prototype.Symbol = _0x24d0a0.emptyArray;
            _0x50b172.prototype.Mul = _0x24d0a0.emptyArray;
            _0x50b172.prototype.AllMul = 0x0;
            _0x50b172.prototype.Win = 0x0;
            _0x50b172.encode = function (_0x43fe45, _0x4b41bb) {
              if (!_0x4b41bb) {
                _0x4b41bb = _0x2e0c30.create();
              }
              if (null != _0x43fe45.Index && Object.hasOwnProperty.call(_0x43fe45, "Index")) {
                _0x4b41bb.uint32(0x8).int32(_0x43fe45.Index);
              }
              if (null != _0x43fe45.Pos && Object.hasOwnProperty.call(_0x43fe45, "Pos")) {
                _0x4b41bb.uint32(0x10).int32(_0x43fe45.Pos);
              }
              if (null != _0x43fe45.Symbol && _0x43fe45.Symbol.length) {
                _0x4b41bb.uint32(0x1a).fork();
                for (var _0x5d5d1d = 0x0; _0x5d5d1d < _0x43fe45.Symbol.length; ++_0x5d5d1d) {
                  _0x4b41bb.int32(_0x43fe45.Symbol[_0x5d5d1d]);
                }
                _0x4b41bb.ldelim();
              }
              if (null != _0x43fe45.Mul && _0x43fe45.Mul.length) {
                _0x4b41bb.uint32(0x22).fork();
                for (_0x5d5d1d = 0x0; _0x5d5d1d < _0x43fe45.Mul.length; ++_0x5d5d1d) {
                  _0x4b41bb.double(_0x43fe45.Mul[_0x5d5d1d]);
                }
                _0x4b41bb.ldelim();
              }
              if (null != _0x43fe45.AllMul && Object.hasOwnProperty.call(_0x43fe45, "AllMul")) {
                _0x4b41bb.uint32(0x29).double(_0x43fe45.AllMul);
              }
              if (null != _0x43fe45.Win && Object.hasOwnProperty.call(_0x43fe45, "Win")) {
                _0x4b41bb.uint32(0x31).double(_0x43fe45.Win);
              }
              return _0x4b41bb;
            };
            _0x50b172.decode = function (_0x67f658, _0x13de00) {
              if (!(_0x67f658 instanceof _0x490ac8)) {
                _0x67f658 = _0x490ac8.create(_0x67f658);
              }
              var _0x47544a = undefined === _0x13de00 ? _0x67f658.len : _0x67f658.pos + _0x13de00;
              for (var _0x4a2249 = new _0x59191d.mptProto.AwardData(); _0x67f658.pos < _0x47544a;) {
                var _0x5818ee = _0x67f658.uint32();
                switch (_0x5818ee >>> 0x3) {
                  case 0x1:
                    _0x4a2249.Index = _0x67f658.int32();
                    break;
                  case 0x2:
                    _0x4a2249.Pos = _0x67f658.int32();
                    break;
                  case 0x3:
                    if (!(_0x4a2249.Symbol && _0x4a2249.Symbol.length)) {
                      _0x4a2249.Symbol = [];
                    }
                    if (0x2 == (0x7 & _0x5818ee)) {
                      for (var _0x5307c6 = _0x67f658.uint32() + _0x67f658.pos; _0x67f658.pos < _0x5307c6;) {
                        _0x4a2249.Symbol.push(_0x67f658.int32());
                      }
                    } else {
                      _0x4a2249.Symbol.push(_0x67f658.int32());
                    }
                    break;
                  case 0x4:
                    if (!(_0x4a2249.Mul && _0x4a2249.Mul.length)) {
                      _0x4a2249.Mul = [];
                    }
                    if (0x2 == (0x7 & _0x5818ee)) {
                      for (_0x5307c6 = _0x67f658.uint32() + _0x67f658.pos; _0x67f658.pos < _0x5307c6;) {
                        _0x4a2249.Mul.push(_0x67f658.double());
                      }
                    } else {
                      _0x4a2249.Mul.push(_0x67f658.double());
                    }
                    break;
                  case 0x5:
                    _0x4a2249.AllMul = _0x67f658.double();
                    break;
                  case 0x6:
                    _0x4a2249.Win = _0x67f658.double();
                    break;
                  default:
                    _0x67f658.skipType(0x7 & _0x5818ee);
                }
              }
              return _0x4a2249;
            };
            _0x50b172.getTypeUrl = function (_0x1ad176) {
              if (undefined === _0x1ad176) {
                _0x1ad176 = "type.googleapis.com";
              }
              return _0x1ad176 + '/mptProto.AwardData';
            };
            return _0x50b172;
          }(),
          "PotSymbol": function () {
            function _0x1c411d(_0x293cd9) {
              if (_0x293cd9) {
                var _0x3ec096 = Object.keys(_0x293cd9);
                for (var _0x598f4d = 0x0; _0x598f4d < _0x3ec096.length; ++_0x598f4d) {
                  if (null != _0x293cd9[_0x3ec096[_0x598f4d]]) {
                    this[_0x3ec096[_0x598f4d]] = _0x293cd9[_0x3ec096[_0x598f4d]];
                  }
                }
              }
            }
            _0x1c411d.prototype.Pos = 0x0;
            _0x1c411d.prototype.Symbol = 0x0;
            _0x1c411d.prototype.Mul = 0x0;
            _0x1c411d.encode = function (_0x58ae98, _0x2220cc) {
              if (!_0x2220cc) {
                _0x2220cc = _0x2e0c30.create();
              }
              if (null != _0x58ae98.Pos && Object.hasOwnProperty.call(_0x58ae98, "Pos")) {
                _0x2220cc.uint32(0x8).int32(_0x58ae98.Pos);
              }
              if (null != _0x58ae98.Symbol && Object.hasOwnProperty.call(_0x58ae98, "Symbol")) {
                _0x2220cc.uint32(0x10).int32(_0x58ae98.Symbol);
              }
              if (null != _0x58ae98.Mul && Object.hasOwnProperty.call(_0x58ae98, "Mul")) {
                _0x2220cc.uint32(0x19).double(_0x58ae98.Mul);
              }
              return _0x2220cc;
            };
            _0x1c411d.decode = function (_0x49643b, _0x2c75fe) {
              if (!(_0x49643b instanceof _0x490ac8)) {
                _0x49643b = _0x490ac8.create(_0x49643b);
              }
              var _0x18bbb9 = undefined === _0x2c75fe ? _0x49643b.len : _0x49643b.pos + _0x2c75fe;
              for (var _0x3302a7 = new _0x59191d.mptProto.PotSymbol(); _0x49643b.pos < _0x18bbb9;) {
                var _0x5d0397 = _0x49643b.uint32();
                switch (_0x5d0397 >>> 0x3) {
                  case 0x1:
                    _0x3302a7.Pos = _0x49643b.int32();
                    break;
                  case 0x2:
                    _0x3302a7.Symbol = _0x49643b.int32();
                    break;
                  case 0x3:
                    _0x3302a7.Mul = _0x49643b.double();
                    break;
                  default:
                    _0x49643b.skipType(0x7 & _0x5d0397);
                }
              }
              return _0x3302a7;
            };
            _0x1c411d.getTypeUrl = function (_0x29ab91) {
              if (undefined === _0x29ab91) {
                _0x29ab91 = 'type.googleapis.com';
              }
              return _0x29ab91 + '/mptProto.PotSymbol';
            };
            return _0x1c411d;
          }(),
          "Mystery": function () {
            function _0x2d71da(_0x15d850) {
              if (_0x15d850) {
                var _0x49253c = Object.keys(_0x15d850);
                for (var _0x3bd090 = 0x0; _0x3bd090 < _0x49253c.length; ++_0x3bd090) {
                  if (null != _0x15d850[_0x49253c[_0x3bd090]]) {
                    this[_0x49253c[_0x3bd090]] = _0x15d850[_0x49253c[_0x3bd090]];
                  }
                }
              }
            }
            _0x2d71da.prototype.IsJP = false;
            _0x2d71da.prototype.Pos = 0x0;
            _0x2d71da.prototype.Symbol = 0x0;
            _0x2d71da.prototype.Mul = 0x0;
            _0x2d71da.encode = function (_0x310a85, _0x5d0435) {
              if (!_0x5d0435) {
                _0x5d0435 = _0x2e0c30.create();
              }
              if (null != _0x310a85.IsJP && Object.hasOwnProperty.call(_0x310a85, 'IsJP')) {
                _0x5d0435.uint32(0x8).bool(_0x310a85.IsJP);
              }
              if (null != _0x310a85.Pos && Object.hasOwnProperty.call(_0x310a85, "Pos")) {
                _0x5d0435.uint32(0x10).int32(_0x310a85.Pos);
              }
              if (null != _0x310a85.Symbol && Object.hasOwnProperty.call(_0x310a85, "Symbol")) {
                _0x5d0435.uint32(0x18).int32(_0x310a85.Symbol);
              }
              if (null != _0x310a85.Mul && Object.hasOwnProperty.call(_0x310a85, "Mul")) {
                _0x5d0435.uint32(0x21).double(_0x310a85.Mul);
              }
              return _0x5d0435;
            };
            _0x2d71da.decode = function (_0xc148b2, _0x2e529a) {
              if (!(_0xc148b2 instanceof _0x490ac8)) {
                _0xc148b2 = _0x490ac8.create(_0xc148b2);
              }
              var _0x2c77cd = undefined === _0x2e529a ? _0xc148b2.len : _0xc148b2.pos + _0x2e529a;
              for (var _0x3575a7 = new _0x59191d.mptProto.Mystery(); _0xc148b2.pos < _0x2c77cd;) {
                var _0x2d658d = _0xc148b2.uint32();
                switch (_0x2d658d >>> 0x3) {
                  case 0x1:
                    _0x3575a7.IsJP = _0xc148b2.bool();
                    break;
                  case 0x2:
                    _0x3575a7.Pos = _0xc148b2.int32();
                    break;
                  case 0x3:
                    _0x3575a7.Symbol = _0xc148b2.int32();
                    break;
                  case 0x4:
                    _0x3575a7.Mul = _0xc148b2.double();
                    break;
                  default:
                    _0xc148b2.skipType(0x7 & _0x2d658d);
                }
              }
              return _0x3575a7;
            };
            _0x2d71da.getTypeUrl = function (_0x3c6dae) {
              if (undefined === _0x3c6dae) {
                _0x3c6dae = "type.googleapis.com";
              }
              return _0x3c6dae + "/mptProto.Mystery";
            };
            return _0x2d71da;
          }(),
          "Collect": function () {
            function _0x3eec17(_0x6375e3) {
              this.CPos = [];
              if (_0x6375e3) {
                var _0x4df664 = Object.keys(_0x6375e3);
                for (var _0x5b42f0 = 0x0; _0x5b42f0 < _0x4df664.length; ++_0x5b42f0) {
                  if (null != _0x6375e3[_0x4df664[_0x5b42f0]]) {
                    this[_0x4df664[_0x5b42f0]] = _0x6375e3[_0x4df664[_0x5b42f0]];
                  }
                }
              }
            }
            _0x3eec17.prototype.Pos = 0x0;
            _0x3eec17.prototype.CPos = _0x24d0a0.emptyArray;
            _0x3eec17.prototype.Mul = 0x0;
            _0x3eec17.prototype.Extra = 0x0;
            _0x3eec17.encode = function (_0x2299ca, _0x3b257d) {
              if (!_0x3b257d) {
                _0x3b257d = _0x2e0c30.create();
              }
              if (null != _0x2299ca.Pos && Object.hasOwnProperty.call(_0x2299ca, "Pos")) {
                _0x3b257d.uint32(0x8).int32(_0x2299ca.Pos);
              }
              if (null != _0x2299ca.CPos && _0x2299ca.CPos.length) {
                _0x3b257d.uint32(0x12).fork();
                for (var _0x20224a = 0x0; _0x20224a < _0x2299ca.CPos.length; ++_0x20224a) {
                  _0x3b257d.int32(_0x2299ca.CPos[_0x20224a]);
                }
                _0x3b257d.ldelim();
              }
              if (null != _0x2299ca.Mul && Object.hasOwnProperty.call(_0x2299ca, "Mul")) {
                _0x3b257d.uint32(0x19).double(_0x2299ca.Mul);
              }
              if (null != _0x2299ca.Extra && Object.hasOwnProperty.call(_0x2299ca, "Extra")) {
                _0x3b257d.uint32(0x21).double(_0x2299ca.Extra);
              }
              return _0x3b257d;
            };
            _0x3eec17.decode = function (_0x1f1876, _0x48ced2) {
              if (!(_0x1f1876 instanceof _0x490ac8)) {
                _0x1f1876 = _0x490ac8.create(_0x1f1876);
              }
              var _0x350d0b = undefined === _0x48ced2 ? _0x1f1876.len : _0x1f1876.pos + _0x48ced2;
              for (var _0x32dbcd = new _0x59191d.mptProto.Collect(); _0x1f1876.pos < _0x350d0b;) {
                var _0xec2cb2 = _0x1f1876.uint32();
                switch (_0xec2cb2 >>> 0x3) {
                  case 0x1:
                    _0x32dbcd.Pos = _0x1f1876.int32();
                    break;
                  case 0x2:
                    if (!(_0x32dbcd.CPos && _0x32dbcd.CPos.length)) {
                      _0x32dbcd.CPos = [];
                    }
                    if (0x2 == (0x7 & _0xec2cb2)) {
                      for (var _0x4bd593 = _0x1f1876.uint32() + _0x1f1876.pos; _0x1f1876.pos < _0x4bd593;) {
                        _0x32dbcd.CPos.push(_0x1f1876.int32());
                      }
                    } else {
                      _0x32dbcd.CPos.push(_0x1f1876.int32());
                    }
                    break;
                  case 0x3:
                    _0x32dbcd.Mul = _0x1f1876.double();
                    break;
                  case 0x4:
                    _0x32dbcd.Extra = _0x1f1876.double();
                    break;
                  default:
                    _0x1f1876.skipType(0x7 & _0xec2cb2);
                }
              }
              return _0x32dbcd;
            };
            _0x3eec17.getTypeUrl = function (_0x9f339b) {
              if (undefined === _0x9f339b) {
                _0x9f339b = "type.googleapis.com";
              }
              return _0x9f339b + "/mptProto.Collect";
            };
            return _0x3eec17;
          }(),
          "ComboStageInfo": function () {
            function _0x2eb7e9(_0x78bb7) {
              this.Symbol = [];
              this.Mul = [];
              this.FinalSymbol = [];
              this.FinalMul = [];
              this.CollectList = [];
              this.MysteryList = [];
              this.AwardDataVec = [];
              this.PotList = [];
              if (_0x78bb7) {
                var _0x3f75c8 = Object.keys(_0x78bb7);
                for (var _0x25e4ae = 0x0; _0x25e4ae < _0x3f75c8.length; ++_0x25e4ae) {
                  if (null != _0x78bb7[_0x3f75c8[_0x25e4ae]]) {
                    this[_0x3f75c8[_0x25e4ae]] = _0x78bb7[_0x3f75c8[_0x25e4ae]];
                  }
                }
              }
            }
            _0x2eb7e9.prototype.Symbol = _0x24d0a0.emptyArray;
            _0x2eb7e9.prototype.Mul = _0x24d0a0.emptyArray;
            _0x2eb7e9.prototype.FinalSymbol = _0x24d0a0.emptyArray;
            _0x2eb7e9.prototype.FinalMul = _0x24d0a0.emptyArray;
            _0x2eb7e9.prototype.CollectList = _0x24d0a0.emptyArray;
            _0x2eb7e9.prototype.MysteryList = _0x24d0a0.emptyArray;
            _0x2eb7e9.prototype.AwardDataVec = _0x24d0a0.emptyArray;
            _0x2eb7e9.prototype.ComboStageWin = 0x0;
            _0x2eb7e9.prototype.PotType = 0x0;
            _0x2eb7e9.prototype.PotList = _0x24d0a0.emptyArray;
            _0x2eb7e9.prototype.ReSpinRemainRound = 0x0;
            _0x2eb7e9.prototype.ReSpinTotalRound = 0x0;
            _0x2eb7e9.prototype.GetReSpin = false;
            _0x2eb7e9.encode = function (_0xc1f8d8, _0x2b7875) {
              if (!_0x2b7875) {
                _0x2b7875 = _0x2e0c30.create();
              }
              if (null != _0xc1f8d8.Symbol && _0xc1f8d8.Symbol.length) {
                for (var _0x2e2040 = 0x0; _0x2e2040 < _0xc1f8d8.Symbol.length; ++_0x2e2040) {
                  _0x59191d.mptProto.Column.encode(_0xc1f8d8.Symbol[_0x2e2040], _0x2b7875.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0xc1f8d8.Mul && _0xc1f8d8.Mul.length) {
                for (_0x2e2040 = 0x0; _0x2e2040 < _0xc1f8d8.Mul.length; ++_0x2e2040) {
                  _0x59191d.mptProto.ColumnM.encode(_0xc1f8d8.Mul[_0x2e2040], _0x2b7875.uint32(0x12).fork()).ldelim();
                }
              }
              if (null != _0xc1f8d8.FinalSymbol && _0xc1f8d8.FinalSymbol.length) {
                for (_0x2e2040 = 0x0; _0x2e2040 < _0xc1f8d8.FinalSymbol.length; ++_0x2e2040) {
                  _0x59191d.mptProto.Column.encode(_0xc1f8d8.FinalSymbol[_0x2e2040], _0x2b7875.uint32(0x1a).fork()).ldelim();
                }
              }
              if (null != _0xc1f8d8.FinalMul && _0xc1f8d8.FinalMul.length) {
                for (_0x2e2040 = 0x0; _0x2e2040 < _0xc1f8d8.FinalMul.length; ++_0x2e2040) {
                  _0x59191d.mptProto.ColumnM.encode(_0xc1f8d8.FinalMul[_0x2e2040], _0x2b7875.uint32(0x22).fork()).ldelim();
                }
              }
              if (null != _0xc1f8d8.CollectList && _0xc1f8d8.CollectList.length) {
                for (_0x2e2040 = 0x0; _0x2e2040 < _0xc1f8d8.CollectList.length; ++_0x2e2040) {
                  _0x59191d.mptProto.Collect.encode(_0xc1f8d8.CollectList[_0x2e2040], _0x2b7875.uint32(0x2a).fork()).ldelim();
                }
              }
              if (null != _0xc1f8d8.MysteryList && _0xc1f8d8.MysteryList.length) {
                for (_0x2e2040 = 0x0; _0x2e2040 < _0xc1f8d8.MysteryList.length; ++_0x2e2040) {
                  _0x59191d.mptProto.Mystery.encode(_0xc1f8d8.MysteryList[_0x2e2040], _0x2b7875.uint32(0x32).fork()).ldelim();
                }
              }
              if (null != _0xc1f8d8.AwardDataVec && _0xc1f8d8.AwardDataVec.length) {
                for (_0x2e2040 = 0x0; _0x2e2040 < _0xc1f8d8.AwardDataVec.length; ++_0x2e2040) {
                  _0x59191d.mptProto.AwardData.encode(_0xc1f8d8.AwardDataVec[_0x2e2040], _0x2b7875.uint32(0x3a).fork()).ldelim();
                }
              }
              if (null != _0xc1f8d8.ComboStageWin && Object.hasOwnProperty.call(_0xc1f8d8, 'ComboStageWin')) {
                _0x2b7875.uint32(0x41).double(_0xc1f8d8.ComboStageWin);
              }
              if (null != _0xc1f8d8.PotType && Object.hasOwnProperty.call(_0xc1f8d8, "PotType")) {
                _0x2b7875.uint32(0x48).int32(_0xc1f8d8.PotType);
              }
              if (null != _0xc1f8d8.PotList && _0xc1f8d8.PotList.length) {
                for (_0x2e2040 = 0x0; _0x2e2040 < _0xc1f8d8.PotList.length; ++_0x2e2040) {
                  _0x59191d.mptProto.PotSymbol.encode(_0xc1f8d8.PotList[_0x2e2040], _0x2b7875.uint32(0x52).fork()).ldelim();
                }
              }
              if (null != _0xc1f8d8.ReSpinRemainRound && Object.hasOwnProperty.call(_0xc1f8d8, "ReSpinRemainRound")) {
                _0x2b7875.uint32(0x58).int32(_0xc1f8d8.ReSpinRemainRound);
              }
              if (null != _0xc1f8d8.ReSpinTotalRound && Object.hasOwnProperty.call(_0xc1f8d8, "ReSpinTotalRound")) {
                _0x2b7875.uint32(0x60).int32(_0xc1f8d8.ReSpinTotalRound);
              }
              if (null != _0xc1f8d8.GetReSpin && Object.hasOwnProperty.call(_0xc1f8d8, "GetReSpin")) {
                _0x2b7875.uint32(0x68).bool(_0xc1f8d8.GetReSpin);
              }
              return _0x2b7875;
            };
            _0x2eb7e9.decode = function (_0x430e85, _0x28a393) {
              if (!(_0x430e85 instanceof _0x490ac8)) {
                _0x430e85 = _0x490ac8.create(_0x430e85);
              }
              var _0x34c0de = undefined === _0x28a393 ? _0x430e85.len : _0x430e85.pos + _0x28a393;
              for (var _0x1e6327 = new _0x59191d.mptProto.ComboStageInfo(); _0x430e85.pos < _0x34c0de;) {
                var _0x11145f = _0x430e85.uint32();
                switch (_0x11145f >>> 0x3) {
                  case 0x1:
                    if (!(_0x1e6327.Symbol && _0x1e6327.Symbol.length)) {
                      _0x1e6327.Symbol = [];
                    }
                    _0x1e6327.Symbol.push(_0x59191d.mptProto.Column.decode(_0x430e85, _0x430e85.uint32()));
                    break;
                  case 0x2:
                    if (!(_0x1e6327.Mul && _0x1e6327.Mul.length)) {
                      _0x1e6327.Mul = [];
                    }
                    _0x1e6327.Mul.push(_0x59191d.mptProto.ColumnM.decode(_0x430e85, _0x430e85.uint32()));
                    break;
                  case 0x3:
                    if (!(_0x1e6327.FinalSymbol && _0x1e6327.FinalSymbol.length)) {
                      _0x1e6327.FinalSymbol = [];
                    }
                    _0x1e6327.FinalSymbol.push(_0x59191d.mptProto.Column.decode(_0x430e85, _0x430e85.uint32()));
                    break;
                  case 0x4:
                    if (!(_0x1e6327.FinalMul && _0x1e6327.FinalMul.length)) {
                      _0x1e6327.FinalMul = [];
                    }
                    _0x1e6327.FinalMul.push(_0x59191d.mptProto.ColumnM.decode(_0x430e85, _0x430e85.uint32()));
                    break;
                  case 0x5:
                    if (!(_0x1e6327.CollectList && _0x1e6327.CollectList.length)) {
                      _0x1e6327.CollectList = [];
                    }
                    _0x1e6327.CollectList.push(_0x59191d.mptProto.Collect.decode(_0x430e85, _0x430e85.uint32()));
                    break;
                  case 0x6:
                    if (!(_0x1e6327.MysteryList && _0x1e6327.MysteryList.length)) {
                      _0x1e6327.MysteryList = [];
                    }
                    _0x1e6327.MysteryList.push(_0x59191d.mptProto.Mystery.decode(_0x430e85, _0x430e85.uint32()));
                    break;
                  case 0x7:
                    if (!(_0x1e6327.AwardDataVec && _0x1e6327.AwardDataVec.length)) {
                      _0x1e6327.AwardDataVec = [];
                    }
                    _0x1e6327.AwardDataVec.push(_0x59191d.mptProto.AwardData.decode(_0x430e85, _0x430e85.uint32()));
                    break;
                  case 0x8:
                    _0x1e6327.ComboStageWin = _0x430e85.double();
                    break;
                  case 0x9:
                    _0x1e6327.PotType = _0x430e85.int32();
                    break;
                  case 0xa:
                    if (!(_0x1e6327.PotList && _0x1e6327.PotList.length)) {
                      _0x1e6327.PotList = [];
                    }
                    _0x1e6327.PotList.push(_0x59191d.mptProto.PotSymbol.decode(_0x430e85, _0x430e85.uint32()));
                    break;
                  case 0xb:
                    _0x1e6327.ReSpinRemainRound = _0x430e85.int32();
                    break;
                  case 0xc:
                    _0x1e6327.ReSpinTotalRound = _0x430e85.int32();
                    break;
                  case 0xd:
                    _0x1e6327.GetReSpin = _0x430e85.bool();
                    break;
                  default:
                    _0x430e85.skipType(0x7 & _0x11145f);
                }
              }
              return _0x1e6327;
            };
            _0x2eb7e9.getTypeUrl = function (_0xdf6733) {
              if (undefined === _0xdf6733) {
                _0xdf6733 = "type.googleapis.com";
              }
              return _0xdf6733 + "/mptProto.ComboStageInfo";
            };
            return _0x2eb7e9;
          }(),
          "SpinAck": function () {
            function _0x317fb7(_0x3403ee) {
              this.RoundInfo = [];
              if (_0x3403ee) {
                var _0x43e817 = Object.keys(_0x3403ee);
                for (var _0x3ddc9b = 0x0; _0x3ddc9b < _0x43e817.length; ++_0x3ddc9b) {
                  if (null != _0x3403ee[_0x43e817[_0x3ddc9b]]) {
                    this[_0x43e817[_0x3ddc9b]] = _0x3403ee[_0x43e817[_0x3ddc9b]];
                  }
                }
              }
            }
            _0x317fb7.prototype.RoundInfo = _0x24d0a0.emptyArray;
            _0x317fb7.prototype.GameType = 0x0;
            _0x317fb7.prototype.ReelType = 0x0;
            _0x317fb7.prototype.TotalWin = 0x0;
            _0x317fb7.prototype.ShowIndex = '';
            _0x317fb7.prototype.NowMoney = 0x0;
            _0x317fb7.prototype.AckType = 0x0;
            _0x317fb7.prototype.RTP = 0x0;
            _0x317fb7.prototype.Extra = 0x0;
            _0x317fb7.prototype.LID = 0x0;
            _0x317fb7.prototype.RID = 0x0;
            _0x317fb7.encode = function (_0xc50ab7, _0x2a6897) {
              if (!_0x2a6897) {
                _0x2a6897 = _0x2e0c30.create();
              }
              if (null != _0xc50ab7.RoundInfo && _0xc50ab7.RoundInfo.length) {
                for (var _0x1a4919 = 0x0; _0x1a4919 < _0xc50ab7.RoundInfo.length; ++_0x1a4919) {
                  _0x59191d.mptProto.ComboStageInfo.encode(_0xc50ab7.RoundInfo[_0x1a4919], _0x2a6897.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0xc50ab7.GameType && Object.hasOwnProperty.call(_0xc50ab7, 'GameType')) {
                _0x2a6897.uint32(0x10).int32(_0xc50ab7.GameType);
              }
              if (null != _0xc50ab7.ReelType && Object.hasOwnProperty.call(_0xc50ab7, 'ReelType')) {
                _0x2a6897.uint32(0x18).int32(_0xc50ab7.ReelType);
              }
              if (null != _0xc50ab7.TotalWin && Object.hasOwnProperty.call(_0xc50ab7, 'TotalWin')) {
                _0x2a6897.uint32(0x21).double(_0xc50ab7.TotalWin);
              }
              if (null != _0xc50ab7.ShowIndex && Object.hasOwnProperty.call(_0xc50ab7, "ShowIndex")) {
                _0x2a6897.uint32(0x2a).string(_0xc50ab7.ShowIndex);
              }
              if (null != _0xc50ab7.NowMoney && Object.hasOwnProperty.call(_0xc50ab7, "NowMoney")) {
                _0x2a6897.uint32(0x31).double(_0xc50ab7.NowMoney);
              }
              if (null != _0xc50ab7.AckType && Object.hasOwnProperty.call(_0xc50ab7, "AckType")) {
                _0x2a6897.uint32(0x38).int32(_0xc50ab7.AckType);
              }
              if (null != _0xc50ab7.RTP && Object.hasOwnProperty.call(_0xc50ab7, "RTP")) {
                _0x2a6897.uint32(0x41).double(_0xc50ab7.RTP);
              }
              if (null != _0xc50ab7.Extra && Object.hasOwnProperty.call(_0xc50ab7, "Extra")) {
                _0x2a6897.uint32(0x48).int32(_0xc50ab7.Extra);
              }
              if (null != _0xc50ab7.LID && Object.hasOwnProperty.call(_0xc50ab7, "LID")) {
                _0x2a6897.uint32(0x50).int32(_0xc50ab7.LID);
              }
              if (null != _0xc50ab7.RID && Object.hasOwnProperty.call(_0xc50ab7, 'RID')) {
                _0x2a6897.uint32(0x58).int32(_0xc50ab7.RID);
              }
              return _0x2a6897;
            };
            _0x317fb7.decode = function (_0xc92047, _0x152af4) {
              if (!(_0xc92047 instanceof _0x490ac8)) {
                _0xc92047 = _0x490ac8.create(_0xc92047);
              }
              var _0x591e7c = undefined === _0x152af4 ? _0xc92047.len : _0xc92047.pos + _0x152af4;
              for (var _0x3892d7 = new _0x59191d.mptProto.SpinAck(); _0xc92047.pos < _0x591e7c;) {
                var _0x27946f = _0xc92047.uint32();
                switch (_0x27946f >>> 0x3) {
                  case 0x1:
                    if (!(_0x3892d7.RoundInfo && _0x3892d7.RoundInfo.length)) {
                      _0x3892d7.RoundInfo = [];
                    }
                    _0x3892d7.RoundInfo.push(_0x59191d.mptProto.ComboStageInfo.decode(_0xc92047, _0xc92047.uint32()));
                    break;
                  case 0x2:
                    _0x3892d7.GameType = _0xc92047.int32();
                    break;
                  case 0x3:
                    _0x3892d7.ReelType = _0xc92047.int32();
                    break;
                  case 0x4:
                    _0x3892d7.TotalWin = _0xc92047.double();
                    break;
                  case 0x5:
                    _0x3892d7.ShowIndex = _0xc92047.string();
                    break;
                  case 0x6:
                    _0x3892d7.NowMoney = _0xc92047.double();
                    break;
                  case 0x7:
                    _0x3892d7.AckType = _0xc92047.int32();
                    break;
                  case 0x8:
                    _0x3892d7.RTP = _0xc92047.double();
                    break;
                  case 0x9:
                    _0x3892d7.Extra = _0xc92047.int32();
                    break;
                  case 0xa:
                    _0x3892d7.LID = _0xc92047.int32();
                    break;
                  case 0xb:
                    _0x3892d7.RID = _0xc92047.int32();
                    break;
                  default:
                    _0xc92047.skipType(0x7 & _0x27946f);
                }
              }
              return _0x3892d7;
            };
            _0x317fb7.getTypeUrl = function (_0x426f1c) {
              if (undefined === _0x426f1c) {
                _0x426f1c = 'type.googleapis.com';
              }
              return _0x426f1c + "/mptProto.SpinAck";
            };
            return _0x317fb7;
          }(),
          "GameInfoData": function () {
            function _0x17ccaf(_0x311579) {
              this.Mul = [];
              if (_0x311579) {
                var _0x4c93bc = Object.keys(_0x311579);
                for (var _0x36f6e = 0x0; _0x36f6e < _0x4c93bc.length; ++_0x36f6e) {
                  if (null != _0x311579[_0x4c93bc[_0x36f6e]]) {
                    this[_0x4c93bc[_0x36f6e]] = _0x311579[_0x4c93bc[_0x36f6e]];
                  }
                }
              }
            }
            _0x17ccaf.prototype.Mul = _0x24d0a0.emptyArray;
            _0x17ccaf.encode = function (_0x52b9c9, _0x413aa2) {
              if (!_0x413aa2) {
                _0x413aa2 = _0x2e0c30.create();
              }
              if (null != _0x52b9c9.Mul && _0x52b9c9.Mul.length) {
                _0x413aa2.uint32(0xa).fork();
                for (var _0x4cc95b = 0x0; _0x4cc95b < _0x52b9c9.Mul.length; ++_0x4cc95b) {
                  _0x413aa2.double(_0x52b9c9.Mul[_0x4cc95b]);
                }
                _0x413aa2.ldelim();
              }
              return _0x413aa2;
            };
            _0x17ccaf.decode = function (_0x1b14b3, _0x44ee43) {
              if (!(_0x1b14b3 instanceof _0x490ac8)) {
                _0x1b14b3 = _0x490ac8.create(_0x1b14b3);
              }
              var _0x5beedf = undefined === _0x44ee43 ? _0x1b14b3.len : _0x1b14b3.pos + _0x44ee43;
              for (var _0x48ed88 = new _0x59191d.mptProto.GameInfoData(); _0x1b14b3.pos < _0x5beedf;) {
                var _0x2d264a = _0x1b14b3.uint32();
                switch (_0x2d264a >>> 0x3) {
                  case 0x1:
                    if (!(_0x48ed88.Mul && _0x48ed88.Mul.length)) {
                      _0x48ed88.Mul = [];
                    }
                    if (0x2 == (0x7 & _0x2d264a)) {
                      for (var _0x5c24b5 = _0x1b14b3.uint32() + _0x1b14b3.pos; _0x1b14b3.pos < _0x5c24b5;) {
                        _0x48ed88.Mul.push(_0x1b14b3.double());
                      }
                    } else {
                      _0x48ed88.Mul.push(_0x1b14b3.double());
                    }
                    break;
                  default:
                    _0x1b14b3.skipType(0x7 & _0x2d264a);
                }
              }
              return _0x48ed88;
            };
            _0x17ccaf.getTypeUrl = function (_0x2ade38) {
              if (undefined === _0x2ade38) {
                _0x2ade38 = "type.googleapis.com";
              }
              return _0x2ade38 + "/mptProto.GameInfoData";
            };
            return _0x17ccaf;
          }()
        }).Column = function () {
          function _0x4247e0(_0x83ac5b) {
            this.Col = [];
            if (_0x83ac5b) {
              var _0x62edd8 = Object.keys(_0x83ac5b);
              for (var _0x928f0b = 0x0; _0x928f0b < _0x62edd8.length; ++_0x928f0b) {
                if (null != _0x83ac5b[_0x62edd8[_0x928f0b]]) {
                  this[_0x62edd8[_0x928f0b]] = _0x83ac5b[_0x62edd8[_0x928f0b]];
                }
              }
            }
          }
          _0x4247e0.prototype.Col = _0x24d0a0.emptyArray;
          _0x4247e0.encode = function (_0x42f32d, _0x1515e9) {
            if (!_0x1515e9) {
              _0x1515e9 = _0x2e0c30.create();
            }
            if (null != _0x42f32d.Col && _0x42f32d.Col.length) {
              _0x1515e9.uint32(0xa).fork();
              for (var _0x36c16f = 0x0; _0x36c16f < _0x42f32d.Col.length; ++_0x36c16f) {
                _0x1515e9.int32(_0x42f32d.Col[_0x36c16f]);
              }
              _0x1515e9.ldelim();
            }
            return _0x1515e9;
          };
          _0x4247e0.decode = function (_0x2bf553, _0x29ed81) {
            if (!(_0x2bf553 instanceof _0x490ac8)) {
              _0x2bf553 = _0x490ac8.create(_0x2bf553);
            }
            var _0x22a476 = undefined === _0x29ed81 ? _0x2bf553.len : _0x2bf553.pos + _0x29ed81;
            for (var _0x30795b = new _0x59191d.mptProto.Column(); _0x2bf553.pos < _0x22a476;) {
              var _0x12abd3 = _0x2bf553.uint32();
              switch (_0x12abd3 >>> 0x3) {
                case 0x1:
                  if (!(_0x30795b.Col && _0x30795b.Col.length)) {
                    _0x30795b.Col = [];
                  }
                  if (0x2 == (0x7 & _0x12abd3)) {
                    for (var _0x4392f2 = _0x2bf553.uint32() + _0x2bf553.pos; _0x2bf553.pos < _0x4392f2;) {
                      _0x30795b.Col.push(_0x2bf553.int32());
                    }
                  } else {
                    _0x30795b.Col.push(_0x2bf553.int32());
                  }
                  break;
                default:
                  _0x2bf553.skipType(0x7 & _0x12abd3);
              }
            }
            return _0x30795b;
          };
          _0x4247e0.getTypeUrl = function (_0x12ecca) {
            if (undefined === _0x12ecca) {
              _0x12ecca = "type.googleapis.com";
            }
            return _0x12ecca + '/mptProto.Column';
          };
          return _0x4247e0;
        }();
        _0x59191d.mptProto = _0x5f0420;
        _0x3c0257.exports = _0x59191d;
        _0x53ce23 = _0x3c0257.exports;
      }, function () {
        return {
          'protobufjs/minimal': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/node_modules/protobufjs/minimal.js'
        };
      });
      _0x12e126.require("file:///Users/m2mac1/Desktop/H5/Client/workspace/MoneyPot/Client/Thai_UAT/assets/Script/Proto/mptProto.js");
      _0x2189a4._RF.push({}, "0b437KRxR9FPL4czEib8y8E", "SingleSlotReels", undefined);
      var _0x5fee16 = _0x4b56bb.ccclass;
      var _0x16a56f = _0x4b56bb.property;
      _0x49b57d = _0x16a56f({
        'type': _0x3882d9,
        'tooltip': "各symbol圖"
      });
      _0x3382e9 = _0x16a56f({
        'type': _0x851753,
        'tooltip': "symbol 的現金獎"
      });
      _0xc870a9 = function (_0x1d260e) {
        function _0x314f81() {
          var _0x1cbe63;
          var _0x324055 = arguments.length;
          var _0x25112c = new Array(_0x324055);
          for (var _0x5e1db8 = 0x0; _0x5e1db8 < _0x324055; _0x5e1db8++) {
            _0x25112c[_0x5e1db8] = arguments[_0x5e1db8];
          }
          _0x588ec8(_0x1cbe63 = _0x1d260e.call.apply(_0x1d260e, [this].concat(_0x25112c)) || this, 'm_symbolSpriteFrames', _0x3ca80a, _0x2901b4(_0x1cbe63));
          _0x588ec8(_0x1cbe63, "m_coinLabel", _0x11eb58, _0x2901b4(_0x1cbe63));
          _0x1cbe63.m_randomSpriteFrames = [];
          _0x1cbe63.m_cumulativeWeights = [];
          _0x1cbe63.m_totalWeight = 0x0;
          _0x1cbe63.m_viewSize = null;
          _0x1cbe63.m_symbolSize = null;
          _0x1cbe63.m_gameView = null;
          _0x1cbe63.m_slotReels = null;
          _0x1cbe63.m_reelPositionOffset = [_0x318e19(0x0, 0x0), _0x318e19(0x0, 0x0), _0x318e19(0x0, 0x0)];
          _0x1cbe63.m_plateInfo = -0x1;
          _0x1cbe63.m_symbol = [];
          _0x1cbe63.m_upperSymbol = null;
          _0x1cbe63.m_lowerSymbol = null;
          _0x1cbe63.m_reelSymbols = [];
          _0x1cbe63.m_reelStopTime = null;
          _0x1cbe63.m_reelPreTime = null;
          _0x1cbe63.m_isChangeSymbol = new Map();
          _0x1cbe63.m_currentMoveLength = new Map();
          _0x1cbe63.m_isChangeToFinalSymbol = [];
          _0x1cbe63.m_time = 0x0;
          _0x1cbe63.m_stopTime = 0x0;
          _0x1cbe63.m_nearWinStartTime = 0x0;
          _0x1cbe63.m_nearWinTime = 0x4;
          _0x1cbe63.m_riseTime = 0x0;
          _0x1cbe63.m_spinBufferTime01 = 0x0;
          _0x1cbe63.m_spinBufferTime02 = 0x0;
          _0x1cbe63.m_spinSpeed = 0.21;
          _0x1cbe63.m_upLength = 0x14;
          _0x1cbe63.m_downLength = 0x1e;
          _0x1cbe63.m_timesOfBaseSpin = 0x1;
          _0x1cbe63.m_spinDelayTime = 0x0;
          _0x1cbe63.m_isStop = false;
          _0x1cbe63.m_mysterySoundId = -0x1;
          _0x1cbe63.m_plateColIdx = -0x1;
          _0x1cbe63.m_plateRowIdx = -0x1;
          _0x1cbe63.m_pos = -0x1;
          _0x1cbe63.m_isCenterSymbol = false;
          _0x1cbe63.m_isNearWinStart = false;
          _0x1cbe63.m_coinValue = 0x0;
          _0x1cbe63.m_isMysterySpin = false;
          return _0x1cbe63;
        }
        _0x5a9673(_0x314f81, _0x1d260e);
        var _0x34411a = _0x314f81.prototype;
        _0x34411a.start = function () {
          _0x164355.SetZIndex(this.m_coinLabel.node, 0x64);
          this.m_coinLabel.node.active = false;
          this.m_randomSpriteFrames = Array.from(this.m_symbolSpriteFrames);
        };
        _0x34411a.Init = function (_0x333fb1, _0x595714, _0x52a86e, _0x3d84ee, _0x29c4b9, _0x5e9ece) {
          var _0xf014a5 = this;
          this.m_gameView = _0x333fb1;
          this.m_slotReels = _0x595714;
          this.m_plateColIdx = _0x52a86e;
          this.m_plateRowIdx = _0x3d84ee;
          this.m_pos = _0x29c4b9;
          this.m_plateInfo = _0x5e9ece;
          if (this.m_plateColIdx == _0x2f795d.CS_COL && this.m_plateRowIdx == _0x2f795d.CS_ROW) {
            this.m_isCenterSymbol = true;
          }
          this.m_viewSize = this.node.getComponent(_0x27d94b).contentSize;
          this.m_symbolSize = new _0x181821(this.m_viewSize.width, this.m_viewSize.height);
          this.InitPlate();
          var _0x202388 = function () {
            var _0x39478a = _0x1cf0e5.TempoSetting.MoneyPot;
            _0xf014a5.m_riseTime = _0x39478a.BASE.RISE_TIME;
            _0xf014a5.m_upLength = _0x39478a.BASE.UP_LENGTH;
            _0xf014a5.m_spinBufferTime01 = _0x39478a.BASE.SPIN_BUFFER_TIME_01;
            _0xf014a5.m_spinBufferTime02 = _0x39478a.BASE.SPIN_BUFFER_TIME_02;
            _0xf014a5.m_downLength = _0x39478a.BASE.DOWN_LENGTH;
            _0xf014a5.m_spinSpeed = _0x39478a.BASE.SPIN_SPEED;
            _0xf014a5.m_timesOfBaseSpin = _0x39478a.BASE.TIMES_OF_BASE_SPIN;
            _0xf014a5.m_spinDelayTime = _0x39478a.BASE.SPIN_DELAY_TIME;
          };
          _0x202388();
          _0x1cf0e5.AddCb(_0x202388);
        };
        _0x34411a.InitPlate = function () {
          var _0x39f055 = 0x0;
          for (var _0x12e14e = 0x0; _0x12e14e < 0x1; _0x12e14e++) {
            var _0xb303d7 = this.NewSpriteNode(this.m_plateInfo, String(_0x39f055));
            _0x39f055++;
            _0xb303d7.setPosition(0x0, 0x0);
            this.node.addChild(_0xb303d7);
            this.m_symbol.push(_0xb303d7);
            this.m_isChangeSymbol.set(_0xb303d7.name, false);
            this.m_currentMoveLength.set(_0xb303d7.name, 0x0);
          }
          var _0x2a4293 = 1.5 * this.m_symbolSize.height + this.m_reelPositionOffset[0x0].y - this.m_viewSize.height / 0x2;
          var _0xf5fa9d = this.NewSpriteNode(0x0, String(_0x39f055));
          _0x39f055++;
          _0xf5fa9d.setPosition(0x0, _0x2a4293);
          _0xf5fa9d.active = false;
          this.node.addChild(_0xf5fa9d);
          this.m_upperSymbol = _0xf5fa9d;
          this.m_isChangeSymbol.set(_0xf5fa9d.name, false);
          this.m_currentMoveLength.set(_0xf5fa9d.name, 0x0);
          _0x2a4293 = -0.5 * this.m_symbolSize.height + this.m_reelPositionOffset[0x0].y - this.m_viewSize.height / 0x2;
          var _0x33a7af = this.NewSpriteNode(0x0, String(_0x39f055));
          _0x39f055++;
          _0x33a7af.setPosition(0x0, _0x2a4293);
          _0x33a7af.active = false;
          this.node.addChild(_0x33a7af);
          this.m_lowerSymbol = _0x33a7af;
          this.m_isChangeSymbol.set(_0x33a7af.name, false);
          this.m_currentMoveLength.set(_0x33a7af.name, 0x0);
          this.m_reelSymbols = [this.m_upperSymbol].concat(this.m_symbol).concat([this.m_lowerSymbol]);
          this.m_isChangeToFinalSymbol = Array(_0x39f055).fill(false);
        };
        _0x34411a.NewSpriteNode = function (_0x3dfed8, _0x2bc808) {
          var _0x176056 = new _0x25cea2();
          _0x176056.name = _0x2bc808;
          var _0x30203d = _0x176056.addComponent(_0x5465a6);
          _0x30203d.type = _0x5465a6.Type.SIMPLE;
          _0x30203d.sizeMode = _0x5465a6.SizeMode.RAW;
          _0x30203d.trim = false;
          _0x30203d.spriteFrame = this.m_symbolSpriteFrames[_0x3dfed8];
          return _0x176056;
        };
        _0x34411a.StartSpin = function (_0x1d0610) {
          if (undefined === _0x1d0610) {
            _0x1d0610 = false;
          }
          this.m_time = 0x0;
          this.m_stopTime = 0x0;
          this.m_isStop = false;
          this.m_isNearWinStart = false;
          this.m_isMysterySpin = _0x1d0610;
          this.m_coinLabel.node.active = false;
          this.m_reelStopTime = null;
          this.m_reelPreTime = null;
          for (var _0x586913 = 0x0; _0x586913 < 0x1; _0x586913++) {
            this.m_symbol[_0x586913].active = true;
          }
          this.SetUpAndDownVisible(true);
          for (var _0x12e5c9 = 0x0; _0x12e5c9 < this.m_isChangeToFinalSymbol.length; _0x12e5c9++) {
            this.m_isChangeToFinalSymbol[_0x12e5c9] = false;
          }
          var _0x50da91;
          for (var _0x50ba38 = _0x241b65(this.m_currentMoveLength.keys()); !(_0x50da91 = _0x50ba38()).done;) {
            var _0x44d11d = _0x50da91.value;
            this.m_currentMoveLength.set(_0x44d11d, 0x0);
          }
        };
        _0x34411a.SetPlateInfo = function (_0x20d051, _0x288c8e, _0x3e821f, _0xb09501) {
          this.m_plateInfo = _0x20d051;
          this.SetCoinLabelValue(_0x288c8e);
          var _0x3a7a9e = this.m_riseTime;
          var _0x4897dc = Math.ceil((this.m_time - _0x3a7a9e) / this.m_spinSpeed);
          if (this.m_slotReels.IsClickStopBtn) {
            this.m_stopTime = _0x164355.strip(_0x4897dc * this.m_spinSpeed + this.m_riseTime + this.m_spinDelayTime + this.m_spinBufferTime01 + this.m_spinBufferTime02);
            this.m_reelStopTime = _0x164355.strip(this.m_spinSpeed * _0x4897dc);
            this.m_reelPreTime = _0x164355.strip(this.m_reelStopTime - this.m_spinSpeed);
          } else {
            this.m_nearWinStartTime = _0x164355.strip(this.m_spinSpeed * (_0x4897dc + this.m_timesOfBaseSpin + _0x3e821f));
            if (_0xb09501) {
              _0x3e821f += Math.floor(this.m_nearWinTime / this.m_spinSpeed);
            }
            this.m_stopTime = _0x164355.strip(this.m_spinSpeed * (_0x4897dc + this.m_timesOfBaseSpin + _0x3e821f) + _0x3a7a9e + this.m_spinBufferTime01 + this.m_spinBufferTime02 + this.m_spinDelayTime);
            this.m_reelStopTime = _0x164355.strip(this.m_spinSpeed * (_0x4897dc + this.m_timesOfBaseSpin + _0x3e821f));
            this.m_reelPreTime = _0x164355.strip(this.m_reelStopTime - this.m_spinSpeed);
          }
        };
        _0x34411a.ShowSymbol = function () {
          this.m_symbol[0x0].active = true;
          this.m_coinLabel.node.active = true;
        };
        _0x34411a.ShowSymbolWithoutNum = function () {
          this.m_symbol[0x0].active = true;
          this.m_coinLabel.node.active = false;
        };
        _0x34411a.HideSymbol = function () {
          this.m_symbol[0x0].active = false;
          this.m_coinLabel.node.active = false;
        };
        _0x34411a.SetUpAndDownVisible = function (_0x1d9c03) {
          this.m_upperSymbol.active = _0x1d9c03;
          this.m_lowerSymbol.active = _0x1d9c03;
        };
        _0x34411a.SetIsClickStopBtn = function () {
          if (0x0 != this.m_stopTime) {
            var _0x174770 = Math.ceil(this.m_time / this.m_spinSpeed);
            _0x174770 = _0x174770 > 0x0 ? _0x174770 : 0x1;
            var _0x22e046 = _0x1cf0e5.TempoSetting.MoneyPot.SPEED_UP_STOP_TIME(this.m_time);
            if (_0x22e046 < this.m_stopTime) {
              this.m_stopTime = _0x164355.strip(_0x22e046);
            }
            var _0x339fec = _0x174770 * this.m_spinSpeed;
            if (_0x339fec < this.m_reelStopTime) {
              this.m_reelStopTime = _0x164355.strip(_0x339fec);
              this.m_reelPreTime = _0x164355.strip(_0x339fec - this.m_spinSpeed);
            }
          }
        };
        _0x34411a.Spin = function (_0x21df36) {
          this.m_time = _0x164355.strip(this.m_time + _0x21df36);
          if (!this.m_isStop && (this.Spin_RealSpinMultiple(_0x21df36), this.m_time >= this.m_stopTime && 0x0 != this.m_stopTime)) {
            this.m_isStop = true;
            this.SetUpAndDownVisible(false);
            if (this.m_plateInfo) {
              if (this.m_isMysterySpin) {
                _0x341da1.Stop(this.m_mysterySoundId);
                this.m_mysterySoundId = -0x1;
                this.m_gameView.EffectPlate.PlaySymbolSpawn(this.m_pos, this.m_plateInfo, this.m_coinValue);
                this.m_gameView.EffectPlate.MysterySpinStop();
              } else {
                this.m_gameView.EffectPlate.ShowSymbolReelStop(this.m_plateColIdx, this.m_plateRowIdx, this.m_plateInfo);
              }
              if (this.m_plateInfo <= _0x2f795d.ReelSymbol.GOLD) {
                this.m_gameView.EffectPlate.SetSymbolNumLabel(this.m_plateColIdx, this.m_plateRowIdx, this.m_coinValue);
              }
            }
            if ((this.m_isCenterSymbol || _0x2f795d.IsInBG) && _0x2f795d.IsNearWin && -0x1 !== _0x2f795d.NearWinSoundId) {
              this.m_gameView.EffectPlate.StopNearWinEffect();
              _0x341da1.Stop(_0x2f795d.NearWinSoundId);
              _0x2f795d.NearWinSoundId = -0x1;
              _0x341da1.SetVolume(_0x2f795d.BgmId, 0.5);
            }
            var _0x1ecd04 = this.m_plateInfo;
            if (this.m_slotReels.IsClickStopBtn && !this.m_isMysterySpin) {
              if (_0x1ecd04 === _0x2f795d.ReelSymbol.CAISHEN) {
                this.m_slotReels.IsCaishenStop = true;
              }
            } else if (this.m_isMysterySpin) {
              if (_0x1ecd04 == _0x2f795d.ReelSymbol.MINI) {
                _0x341da1.Play(_0x2f795d.AudioClips.Mini);
              } else if (_0x1ecd04 == _0x2f795d.ReelSymbol.MINOR) {
                _0x341da1.Play(_0x2f795d.AudioClips.Minor);
              } else if (_0x1ecd04 == _0x2f795d.ReelSymbol.MAJOR) {
                _0x341da1.Play(_0x2f795d.AudioClips.Major);
              } else {
                _0x341da1.Play(_0x2f795d.AudioClips.Reel_Stop);
              }
            } else if (!this.m_slotReels.IsPlayedReelStop[this.m_plateColIdx]) {
              this.m_slotReels.IsPlayedReelStop[this.m_plateColIdx] = true;
              _0x341da1.Play(this.m_slotReels.ReelStopSound[this.m_plateColIdx]);
            }
          }
        };
        _0x34411a.Spin_RealSpinMultiple = function (_0x43d427) {
          var _0x2466f0 = this.m_time;
          var _0x38f924 = this.m_reelStopTime;
          var _0xb64b20 = 0x1 * this.m_riseTime;
          var _0x3fd53a = this.m_spinSpeed;
          if (_0x2f795d.IsNearWin && (this.m_isCenterSymbol || _0x2f795d.IsInBG) && _0x2466f0 >= this.m_nearWinStartTime && !this.m_isNearWinStart) {
            this.m_isNearWinStart = true;
            this.m_gameView.EffectPlate.StartNearWinEffect(this.node.getWorldPosition());
            _0x341da1.SetVolume(_0x2f795d.BgmId, 0.1);
            _0x2f795d.NearWinSoundId = _0x341da1.Play(_0x2f795d.AudioClips.NearWin, false);
          }
          var _0x4ca312 = this.m_reelSymbols.length;
          var _0x16551a = this.m_symbolSize.height * _0x4ca312;
          for (var _0x62aa7e = 0x0; _0x62aa7e < _0x4ca312; _0x62aa7e++) {
            var _0x331a97 = this.m_symbolSize.height * (_0x4ca312 - _0x62aa7e - 0.5) + this.m_reelPositionOffset[0x0].y - _0x16551a / 0x2;
            var _0x56394c = 0x0;
            var _0x5b5092 = this.m_symbolSize.height * (_0x4ca312 - (_0x62aa7e + 0.5));
            var _0x493595 = this.m_reelSymbols[_0x62aa7e];
            var _0x5d3c5e = _0x62aa7e - 0x1;
            if (_0x2466f0 < 0x1 * this.m_riseTime) {
              _0x56394c = (_0x2466f0 - 0x0 * _0xb64b20) / _0xb64b20 * this.m_upLength;
            } else {
              if (_0x2466f0 < _0xb64b20) {
                _0x56394c = this.m_upLength;
              } else {
                if (null == _0x38f924 || _0x2466f0 < _0x38f924 + _0xb64b20) {
                  var _0x3a92fb = (_0x2466f0 - _0xb64b20) % _0x3fd53a / _0x3fd53a * _0x16551a;
                  _0x56394c = -this.GetMovelength(_0x3a92fb, _0x5b5092, _0x16551a, 0x0, _0x5d3c5e, _0x493595);
                } else if (_0x2466f0 < _0x38f924 + _0xb64b20 + this.m_spinBufferTime01) {
                  _0x56394c = -(_0x2466f0 - _0x38f924 - _0xb64b20) / this.m_spinBufferTime01 * this.m_downLength;
                  this.CheckChangeToFinalSymbol(0x0, _0x5d3c5e, _0x493595);
                } else if (_0x2466f0 < _0x38f924 + _0xb64b20 + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
                  _0x56394c = (_0x2466f0 - _0x38f924 - _0xb64b20 - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength - this.m_downLength;
                  this.CheckChangeToFinalSymbol(0x0, _0x5d3c5e, _0x493595);
                } else {
                  this.CheckChangeToFinalSymbol(0x0, _0x5d3c5e, _0x493595);
                }
              }
            }
            this.m_reelSymbols[_0x62aa7e].setPosition(0x0, _0x331a97 + _0x56394c);
          }
        };
        _0x34411a.GetMovelength = function (_0x29f538, _0x29004d, _0x180aee, _0x4304dc, _0x39be76, _0x576a4e) {
          if (_0x29f538 >= _0x29004d) {
            _0x29f538 -= _0x180aee;
          }
          if (this.m_currentMoveLength.get(_0x576a4e.name) >= _0x29f538) {
            if (!this.m_isChangeSymbol.get(_0x576a4e.name)) {
              this.m_isChangeSymbol.set(_0x576a4e.name, true);
              this.ChangeSymbol(_0x4304dc, _0x39be76, _0x576a4e, false);
            }
          } else {
            this.m_isChangeSymbol.set(_0x576a4e.name, false);
          }
          this.m_currentMoveLength.set(_0x576a4e.name, _0x29f538);
          return _0x29f538;
        };
        _0x34411a.SetCoinLabelValue = function (_0x5ee423) {
          this.m_coinLabel.node.active = false;
          this.m_coinValue = _0x5ee423;
          this.m_coinLabel.string = _0x5ee423.toString();
        };
        _0x34411a.ShowCoinLabel = function () {
          if (Number(this.m_coinLabel.string) > 0x0) {
            this.m_coinLabel.node.active = true;
          }
        };
        _0x34411a.SetMainSymbolDark = function (_0x5e4d3c) {
          if (undefined === _0x5e4d3c) {
            _0x5e4d3c = true;
          }
          if (this.m_plateInfo) {
            this.setSymbolDark(this.m_symbol[0x0], _0x5e4d3c);
          }
        };
        _0x34411a.setSymbolDark = function (_0x7a305d, _0x2a80c9) {
          if (undefined === _0x2a80c9) {
            _0x2a80c9 = true;
          }
          _0x7a305d.getComponent(_0x5465a6).color = _0x2a80c9 ? _0x4de58f(_0x2f795d.DARK_RGB, _0x2f795d.DARK_RGB, _0x2f795d.DARK_RGB) : _0x4de58f(0xff, 0xff, 0xff);
        };
        _0x34411a.ChangeSymbol = function (_0x5a2327, _0x2d9b58, _0x341bac, _0x232fc0) {
          var _0x12c9fd = this.m_reelPreTime;
          var _0x2a0e97 = 0x1 * this.m_riseTime;
          if ((_0x12c9fd && this.m_time - _0x2a0e97 > _0x12c9fd || _0x232fc0) && _0x2d9b58 >= 0x0 && _0x2d9b58 < _0x2f795d.ROW) {
            _0x341bac.getComponent(_0x5465a6).spriteFrame = this.m_symbolSpriteFrames[this.m_plateInfo];
          } else {
            _0x341bac.getComponent(_0x5465a6).spriteFrame = this.RandomSymbolSprite();
          }
        };
        _0x34411a.CheckChangeToFinalSymbol = function (_0x36c606, _0x35ad67, _0x1d8945) {
          var _0x49cfe2 = Number(_0x1d8945.name);
          if (!this.m_isChangeToFinalSymbol[_0x49cfe2]) {
            this.m_isChangeToFinalSymbol[_0x49cfe2] = true;
            this.ChangeSymbol(_0x36c606, _0x35ad67, _0x1d8945, true);
          }
        };
        _0x34411a.IsPlateStop = function () {
          return this.m_isStop;
        };
        _0x34411a.RandomSymbolSprite = function () {
          var _0x262b91 = Math.random();
          for (var _0x47487f = 0x0; _0x47487f < this.m_cumulativeWeights.length; _0x47487f++) {
            if (_0x262b91 <= _0x164355.divide(this.m_cumulativeWeights[_0x47487f], this.m_totalWeight)) {
              return this.m_randomSpriteFrames[_0x47487f];
            }
          }
          return this.m_randomSpriteFrames[this.m_randomSpriteFrames.length - 0x1];
        };
        _0x34411a.SetRandomList = function (_0x547689) {
          this.m_randomSpriteFrames = [];
          this.m_cumulativeWeights = [];
          this.m_totalWeight = 0x0;
          var _0xb609e1 = _0x48463c;
          if (this.m_gameView.ExtraBetBar.IsExtra) {
            _0xb609e1 = this.ChangeMGExWeight(this.m_gameView.ExtraType);
          }
          for (var _0x37128f = 0x0; _0x37128f < this.m_symbolSpriteFrames.length; _0x37128f++) {
            if (!_0x547689.includes(_0x37128f)) {
              this.m_randomSpriteFrames.push(this.m_symbolSpriteFrames[_0x37128f]);
              if (_0x2f795d.IsInBG) {
                this.m_totalWeight += _0x2f04f4[_0x37128f];
              } else {
                this.m_totalWeight += _0xb609e1[_0x37128f];
              }
              this.m_cumulativeWeights.push(this.m_totalWeight);
            }
          }
        };
        _0x34411a.ChangeMGExWeight = function (_0x1e6bf0) {
          var _0x25bdb3 = Array.from(_0x48463c);
          if (this.m_isCenterSymbol && _0x1e6bf0) {
            var _0x1db2f3 = _0x1e6bf0 == _0x2f795d.ExtraType.Quadruple ? 0x3 : 0x2;
            var _0x14933e = _0x25bdb3[_0x2f795d.ReelSymbol.CAISHEN];
            _0x25bdb3[_0x2f795d.ReelSymbol.EMPTY] -= _0x14933e * (_0x1db2f3 - 0x1);
            _0x25bdb3[_0x2f795d.ReelSymbol.CAISHEN] = _0x14933e * _0x1db2f3;
          }
          return _0x25bdb3;
        };
        _0x34411a.SetPlateSymbol = function (_0x6e24f5) {
          var _0xbf1ac = 0x0;
          for (var _0x44f311 = 0x0; _0x44f311 < 0x1; _0x44f311++) {
            var _0x3b3833 = this.m_symbol[_0x44f311];
            _0x3b3833.active = true;
            this.m_plateInfo = _0x6e24f5;
            _0x3b3833.getComponent(_0x5465a6).spriteFrame = this.m_symbolSpriteFrames[_0x6e24f5];
            _0xbf1ac = this.m_symbolSize.height * (0x1 - _0x44f311 - 0.5) - this.m_viewSize.height / 0x2;
            _0x3b3833.setPosition(0x0, _0xbf1ac);
          }
          _0xbf1ac = this.m_symbolSize.height * 1.5 - this.m_viewSize.height / 0x2;
          this.m_upperSymbol.setPosition(0x0, _0xbf1ac);
          this.m_upperSymbol.active = false;
          _0xbf1ac = -0.5 * this.m_symbolSize.height - this.m_viewSize.height / 0x2;
          this.m_lowerSymbol.setPosition(0x0, _0xbf1ac);
          this.m_lowerSymbol.active = false;
        };
        _0x34411a.GetSymbolSpriteFrames = function (_0x558fc9) {
          return this.m_symbolSpriteFrames[_0x558fc9];
        };
        _0x34411a.ForceChangeSymbol = function (_0x45cf82, _0x62c72e) {
          this.m_plateInfo = _0x45cf82;
          this.m_symbol[0x0].getComponent(_0x5465a6).spriteFrame = this.m_symbolSpriteFrames[_0x45cf82];
          this.SetCoinLabelValue(_0x62c72e);
        };
        _0x34411a.GetStopTimeStr = function () {
          return this.m_stopTime.toFixed(0x3);
        };
        _0x34411a.GetReelStopTimeStr = function () {
          return null == this.m_reelStopTime ? "null" : this.m_reelStopTime.toFixed(0x3);
        };
        _0x34411a.GetReelPreTimeStr = function () {
          return null == this.m_reelPreTime ? "null" : this.m_reelPreTime.toFixed(0x3);
        };
        _0x55d7eb(_0x314f81, [{
          'key': "CoinLabel",
          'get': function () {
            return this.m_coinLabel;
          }
        }, {
          'key': "IsStop",
          'get': function () {
            return this.m_isStop;
          }
        }, {
          'key': 'MysterySoundId',
          'set': function (_0x5d5ca1) {
            this.m_mysterySoundId = _0x5d5ca1;
          }
        }]);
        return _0x314f81;
      }(_0x4351ba);
      _0x3ca80a = _0x4fcd77(_0xc870a9.prototype, "m_symbolSpriteFrames", [_0x49b57d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x11eb58 = _0x4fcd77(_0xc870a9.prototype, 'm_coinLabel', [_0x3382e9], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x45e933 = _0x5fee16(_0x2b31a4 = _0xc870a9) || _0x2b31a4;
      var _0x3fd616;
      var _0x564a62;
      var _0x33902c;
      var _0x12243e;
      var _0x16783a;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "8d759Ort2FD75mfNx2/IJ/i", "SinglePlateMgr", undefined);
      var _0xee3b8e = _0x4b56bb.property;
      var _0x102197 = [[0x9, 0x2, 0x3], [0x7, 0x0, 0x8], [0x4, 0x5, 0x6]];
      var _0x1fda70 = [[0x0, 0x0, 0x0], [0x2, 0x2, 0x2], [0x1, 0x1, 0x1]];
      _0x3fd616 = _0xee3b8e({
        'type': _0x2a6ea6,
        'tooltip': 'Single單一轉輪'
      });
      _0x564a62 = _0xee3b8e({
        'type': _0x25cea2,
        'tooltip': "reelMask"
      });
      _0x33902c = function (_0x59469c) {
        function _0x1e5c7a() {
          var _0x47e17b;
          var _0x175076 = arguments.length;
          var _0x5217e5 = new Array(_0x175076);
          for (var _0x59c3fa = 0x0; _0x59c3fa < _0x175076; _0x59c3fa++) {
            _0x5217e5[_0x59c3fa] = arguments[_0x59c3fa];
          }
          _0x588ec8(_0x47e17b = _0x59469c.call.apply(_0x59469c, [this].concat(_0x5217e5)) || this, "m_singleSlotReel", _0x12243e, _0x2901b4(_0x47e17b));
          _0x588ec8(_0x47e17b, "m_reelMask", _0x16783a, _0x2901b4(_0x47e17b));
          _0x47e17b.m_reelPositionOffset = [_0x318e19(0x0, 0x0), _0x318e19(0x0, 0x0), _0x318e19(0x0, 0x0)];
          _0x47e17b.m_singleReelObjs = new Array();
          _0x47e17b.m_singleReelSpinOrder = [];
          _0x47e17b.m_spinIntervalTimes = 0x1;
          _0x47e17b.m_plateInfo = new Array();
          _0x47e17b.m_isLocked = new Array();
          _0x47e17b.m_viewSize = null;
          _0x47e17b.m_symbolSize = null;
          _0x47e17b.m_gameView = null;
          _0x47e17b.m_isClickStopBtn = false;
          _0x47e17b.m_isAllStop = false;
          _0x47e17b.m_isCaishenStop = false;
          _0x47e17b.m_isPlayedReelStop = [];
          _0x47e17b.m_reelStopSound = [];
          return _0x47e17b;
        }
        _0x5a9673(_0x1e5c7a, _0x59469c);
        var _0x3fef14 = _0x1e5c7a.prototype;
        _0x3fef14.onLoad = function () {
          this.m_viewSize = this.node.getComponent(_0x27d94b).contentSize;
          this.m_symbolSize = new _0x181821(this.m_viewSize.width / _0x2f795d.COL, this.m_viewSize.height / _0x2f795d.ROW);
        };
        _0x3fef14.Init = function (_0x5a7be8) {
          this.m_gameView = _0x5a7be8;
          this.m_plateInfo = _0x102197;
          for (var _0x5b00b0 = 0x0; _0x5b00b0 < _0x2f795d.COL; _0x5b00b0++) {
            var _0x3667d8 = [];
            for (var _0x2f00c0 = 0x0; _0x2f00c0 < _0x2f795d.ROW; _0x2f00c0++) {
              var _0x22df31 = _0x5b1fd0(this.m_singleSlotReel);
              var _0x40a254 = _0x22df31.getComponent(_0x45e933);
              var _0xbc9af5 = 0xa * _0x5b00b0 + _0x2f00c0;
              _0x22df31.name = _0xbc9af5.toString();
              var _0xf3198 = 0x3 * _0x5b00b0 + _0x2f00c0;
              _0x40a254.Init(_0x5a7be8, this, _0x5b00b0, _0x2f00c0, _0xf3198, this.m_plateInfo[_0x5b00b0][_0x2f00c0]);
              this.m_reelMask[_0x2f00c0].addChild(_0x22df31);
              var _0x971fa1 = this.m_symbolSize.width * (_0x5b00b0 + 0.5) + this.m_reelPositionOffset[_0x5b00b0].x - this.m_viewSize.width / 0x2;
              _0x22df31.setPosition(_0x971fa1, 0x0, 0x0);
              _0x3667d8.push(_0x40a254);
            }
            this.m_singleReelObjs.push(_0x3667d8);
          }
          for (var _0x11d0ea = 0x0; _0x11d0ea < _0x2f795d.COL; _0x11d0ea++) {
            this.m_singleReelSpinOrder.push([]);
            for (var _0x107b21 = 0x0; _0x107b21 < _0x2f795d.ROW; _0x107b21++) {
              this.m_singleReelSpinOrder[_0x11d0ea].push(_0x1fda70[_0x11d0ea][_0x107b21]);
            }
            this.m_isPlayedReelStop.push(false);
            this.m_reelStopSound.push(null);
          }
          for (var _0x278fa7 = 0x0; _0x278fa7 < _0x2f795d.COL; _0x278fa7++) {
            this.m_isLocked.push(Array(_0x2f795d.ROW).fill(false));
          }
        };
        _0x3fef14.SetPlateInfo = function (_0x1a5b92) {
          this.m_plateInfo = _0x1a5b92;
          for (var _0x3c7b82 = 0x0; _0x3c7b82 < _0x2f795d.ROW; _0x3c7b82++) {
            for (var _0x2521eb = 0x0; _0x2521eb < _0x2f795d.COL; _0x2521eb++) {
              if (!this.m_isLocked[_0x2521eb][_0x3c7b82]) {
                var _0x18dd83;
                _0x18dd83 = this.m_singleReelSpinOrder[_0x2521eb][_0x3c7b82] * this.m_spinIntervalTimes;
                var _0x85f148 = _0x2f795d.IsNearWin && (_0x2521eb == _0x2f795d.CS_COL && _0x3c7b82 == _0x2f795d.CS_ROW || _0x2f795d.IsInBG);
                var _0x30a32b = this.m_gameView.GetCoinNumber(_0x2521eb, _0x3c7b82);
                this.m_singleReelObjs[_0x2521eb][_0x3c7b82].SetPlateInfo(this.m_plateInfo[_0x2521eb][_0x3c7b82], _0x30a32b, _0x18dd83, _0x85f148);
              }
            }
          }
          if (!(!this.m_gameView.IsHardStop || _0x2f795d.IsInBG && _0x2f795d.IsNearWin)) {
            this.SetIsClickStopBtn();
          }
          for (var _0x4e12ef = 0x0; _0x4e12ef < _0x2f795d.COL; _0x4e12ef++) {
            for (var _0x29c8bb = 0x0; _0x29c8bb < _0x2f795d.ROW; _0x29c8bb++) {
              if (!this.m_isLocked[_0x4e12ef][_0x29c8bb]) {
                if (_0x1a5b92[_0x4e12ef][_0x29c8bb] == _0x2f795d.ReelSymbol.CAISHEN) {
                  this.m_reelStopSound[_0x4e12ef] = _0x2f795d.AudioClips.Caishen_Stop;
                  break;
                }
                this.m_reelStopSound[_0x4e12ef] = _0x2f795d.AudioClips.Reel_Stop;
              }
            }
          }
        };
        _0x3fef14.SetPlateSymbol = function (_0xb2d6be) {
          if (0x0 == _0xb2d6be.length) {
            _0xb2d6be = _0x102197;
          }
          this.m_plateInfo = _0xb2d6be;
          for (var _0x1d6c28 = 0x0; _0x1d6c28 < _0x2f795d.COL; _0x1d6c28++) {
            for (var _0x553f45 = 0x0; _0x553f45 < _0x2f795d.ROW; _0x553f45++) {
              this.m_singleReelObjs[_0x1d6c28][_0x553f45].SetPlateSymbol(_0xb2d6be[_0x1d6c28][_0x553f45]);
            }
          }
        };
        _0x3fef14.SetIsClickStopBtn = function () {
          this.m_isClickStopBtn = true;
          for (var _0x4b96d6 = 0x0; _0x4b96d6 < _0x2f795d.ROW; _0x4b96d6++) {
            for (var _0x2aad5a = 0x0; _0x2aad5a < _0x2f795d.COL; _0x2aad5a++) {
              this.m_singleReelObjs[_0x2aad5a][_0x4b96d6].SetIsClickStopBtn();
            }
          }
        };
        _0x3fef14.RefreshSpinOrder = function () {
          var _0x159ef1 = 0x0;
          for (var _0x48653d = 0x0; _0x48653d < _0x2f795d.ROW; _0x48653d++) {
            for (var _0xda102f = 0x0; _0xda102f < _0x2f795d.COL; _0xda102f++) {
              if (this.m_isLocked[_0xda102f][_0x48653d]) {
                this.m_singleReelSpinOrder[_0xda102f][_0x48653d] = 0x0;
              } else {
                this.m_singleReelSpinOrder[_0xda102f][_0x48653d] = _0x159ef1;
                _0x159ef1++;
              }
            }
          }
        };
        _0x3fef14.ResetSpinOrder = function () {
          for (var _0xbad9de = 0x0; _0xbad9de < _0x2f795d.COL; _0xbad9de++) {
            for (var _0x580b34 = 0x0; _0x580b34 < _0x2f795d.ROW; _0x580b34++) {
              this.m_singleReelSpinOrder[_0xbad9de][_0x580b34] = _0x1fda70[_0xbad9de][_0x580b34];
            }
          }
        };
        _0x3fef14.PotThrowSymbol = function (_0x166d01, _0x20124a, _0x320960) {
          var _0x436790 = Math.floor(_0x166d01 / _0x2f795d.ROW);
          var _0x330809 = _0x166d01 % _0x2f795d.ROW;
          this.m_plateInfo[_0x436790][_0x330809] = _0x20124a;
          this.m_singleReelObjs[_0x436790][_0x330809].ForceChangeSymbol(_0x20124a, _0x320960);
        };
        _0x3fef14.SetAllSymbolsDark = function (_0x5d342e) {
          if (undefined === _0x5d342e) {
            _0x5d342e = true;
          }
          for (var _0x998099 = 0x0; _0x998099 < _0x2f795d.COL; _0x998099++) {
            for (var _0x487458 = 0x0; _0x487458 < _0x2f795d.ROW; _0x487458++) {
              this.m_singleReelObjs[_0x998099][_0x487458].SetMainSymbolDark(_0x5d342e);
            }
          }
        };
        _0x3fef14.StartSpin = function () {
          this.m_isClickStopBtn = false;
          this.m_isAllStop = false;
          this.m_isCaishenStop = false;
          for (var _0x415069 = 0x0; _0x415069 < _0x2f795d.COL; _0x415069++) {
            this.m_isPlayedReelStop[_0x415069] = false;
            this.m_reelStopSound[_0x415069] = null;
          }
          for (var _0x19ab9f = 0x0; _0x19ab9f < _0x2f795d.COL; _0x19ab9f++) {
            for (var _0x3e446a = 0x0; _0x3e446a < _0x2f795d.ROW; _0x3e446a++) {
              if (!this.m_isLocked[_0x19ab9f][_0x3e446a]) {
                this.SetRandomSymbolList(_0x19ab9f, _0x3e446a, []);
                this.m_singleReelObjs[_0x19ab9f][_0x3e446a].StartSpin();
              }
            }
          }
        };
        _0x3fef14.Spin = function (_0x227cdb) {
          for (var _0xf0e8b7 = 0x0; _0xf0e8b7 < _0x2f795d.ROW; _0xf0e8b7++) {
            for (var _0x4e97d0 = 0x0; _0x4e97d0 < _0x2f795d.COL; _0x4e97d0++) {
              if (!this.m_isLocked[_0x4e97d0][_0xf0e8b7]) {
                this.m_singleReelObjs[_0x4e97d0][_0xf0e8b7].Spin(_0x227cdb);
              }
            }
          }
          if (!this.m_isAllStop) {
            if (this.IsPlateStop()) {
              this.m_isAllStop = true;
              if (this.m_isClickStopBtn) {
                if (this.m_isCaishenStop) {
                  _0x341da1.Play(_0x2f795d.AudioClips.Caishen_Stop);
                } else {
                  _0x341da1.Play(_0x2f795d.AudioClips.Reel_Stop);
                }
              }
            }
          }
        };
        _0x3fef14.SetSinglePlateInfo = function (_0x444ca3, _0x3e8cb9) {
          var _0x40f9c9 = Math.floor(_0x444ca3 / _0x2f795d.ROW);
          var _0x3a2130 = _0x444ca3 % _0x2f795d.ROW;
          var _0x21d249 = _0x2f795d.MYSTERY_SPIN;
          var _0x289116 = this.m_gameView.GetCoinNumber(_0x40f9c9, _0x3a2130, true);
          this.m_plateInfo[_0x40f9c9][_0x3a2130] = _0x3e8cb9;
          this.m_singleReelObjs[_0x40f9c9][_0x3a2130].SetPlateInfo(_0x3e8cb9, _0x289116, _0x21d249, false);
        };
        _0x3fef14.StartSingleSpin = function (_0x257660, _0x202ce5) {
          this.m_isClickStopBtn = false;
          this.m_isAllStop = false;
          this.m_isCaishenStop = false;
          var _0x218864 = Math.floor(_0x257660 / _0x2f795d.ROW);
          var _0x15730d = _0x257660 % _0x2f795d.ROW;
          var _0x21102c = [_0x2f795d.ReelSymbol.EMPTY, _0x2f795d.ReelSymbol.MYSTERY, _0x2f795d.ReelSymbol.JP_MYSTERY, _0x2f795d.ReelSymbol.CAISHEN];
          if (_0x202ce5) {
            _0x21102c.push(_0x2f795d.ReelSymbol.BRONZE);
            _0x21102c.push(_0x2f795d.ReelSymbol.SILVER);
            _0x21102c.push(_0x2f795d.ReelSymbol.GOLD);
          }
          if (this.m_singleReelObjs[_0x218864][_0x15730d]) {
            this.SetRandomSymbolList(_0x218864, _0x15730d, _0x21102c);
            this.m_singleReelObjs[_0x218864][_0x15730d].StartSpin(true);
            this.m_singleReelObjs[_0x218864][_0x15730d].MysterySoundId = _0x341da1.Play(_0x2f795d.AudioClips.Mestery_Reel, false);
          }
        };
        _0x3fef14.SingleSpin = function (_0x5a519d, _0x2cc9fd) {
          var _0x5e53c7 = Math.floor(_0x5a519d / _0x2f795d.ROW);
          var _0x22db8b = _0x5a519d % _0x2f795d.ROW;
          this.m_singleReelObjs[_0x5e53c7][_0x22db8b].Spin(_0x2cc9fd);
        };
        _0x3fef14.IsPlateStop = function () {
          var _0x226183 = true;
          for (var _0x119c19 = 0x0; _0x119c19 < _0x2f795d.COL; _0x119c19++) {
            for (var _0x4173c5 = 0x0; _0x4173c5 < _0x2f795d.ROW; _0x4173c5++) {
              if (!(this.m_isLocked[_0x119c19][_0x4173c5] || this.m_singleReelObjs[_0x119c19][_0x4173c5].IsPlateStop())) {
                _0x226183 = false;
              }
            }
          }
          return _0x226183;
        };
        _0x3fef14.LockBGPlate = function () {
          for (var _0x56cd29 = 0x0; _0x56cd29 < _0x2f795d.COL; _0x56cd29++) {
            for (var _0x4a517e = 0x0; _0x4a517e < _0x2f795d.ROW; _0x4a517e++) {
              if (this.m_plateInfo[_0x56cd29][_0x4a517e]) {
                this.m_isLocked[_0x56cd29][_0x4a517e] = true;
              }
            }
          }
        };
        _0x3fef14.ResetLock = function () {
          for (var _0x512879 = 0x0; _0x512879 < _0x2f795d.COL; _0x512879++) {
            for (var _0x385d0b = 0x0; _0x385d0b < _0x2f795d.ROW; _0x385d0b++) {
              this.m_isLocked[_0x512879][_0x385d0b] = false;
            }
          }
        };
        _0x3fef14.ShowSymbol = function (_0x24f511, _0x2bddda) {
          this.m_singleReelObjs[_0x24f511][_0x2bddda].ShowSymbol();
        };
        _0x3fef14.ShowSymbolWithoutNum = function (_0x104ede, _0x111071) {
          this.m_singleReelObjs[_0x104ede][_0x111071].ShowSymbolWithoutNum();
        };
        _0x3fef14.HideSymbol = function (_0x5b9023, _0x546156) {
          this.m_singleReelObjs[_0x5b9023][_0x546156].HideSymbol();
        };
        _0x3fef14.SetRandomSymbolList = function (_0x357ffa, _0xfe363b, _0xccc0c5) {
          this.m_singleReelObjs[_0x357ffa][_0xfe363b].SetRandomList(_0xccc0c5);
        };
        _0x3fef14.GetSingleSlotReelByPos = function (_0x3aa199) {
          return this.m_singleReelObjs[Math.floor(_0x3aa199 / _0x2f795d.ROW)][_0x3aa199 % _0x2f795d.ROW];
        };
        _0x3fef14.GetSingleSlotReelXY = function (_0x23f731, _0x2cb5a4) {
          var _0x3827d6 = this.m_singleReelObjs[_0x23f731][_0x2cb5a4].node.getPosition();
          _0x3827d6.y = this.m_reelMask[_0x2cb5a4].getPosition().y;
          return _0x3827d6;
        };
        _0x3fef14.GetSingleSlotReelWorldXYByPos = function (_0x150755) {
          var _0x1a92e1 = Math.floor(_0x150755 / _0x2f795d.ROW);
          var _0x5b4394 = _0x150755 % _0x2f795d.ROW;
          return this.m_singleReelObjs[_0x1a92e1][_0x5b4394].node.getWorldPosition();
        };
        _0x3fef14.GetCoinLabelWorldXY = function (_0x38c8cd, _0x29330e) {
          return this.m_singleReelObjs[_0x38c8cd][_0x29330e].CoinLabel.node.getWorldPosition();
        };
        _0x3fef14.GetCoinLabelNodeByPos = function (_0x41a357) {
          var _0x5e8aee = Math.floor(_0x41a357 / _0x2f795d.ROW);
          var _0x431108 = _0x41a357 % _0x2f795d.ROW;
          return this.m_singleReelObjs[_0x5e8aee][_0x431108].CoinLabel.node;
        };
        _0x3fef14.GetReelParamInfo = function () {
          return ", isStop: " + String(this.IsPlateStop()) + ", StopT: " + this.m_singleReelObjs[0x1][0x1].GetStopTimeStr() + ", ReelStopT: " + this.m_singleReelObjs[0x1][0x1].GetReelStopTimeStr() + ", ReelPreT: " + this.m_singleReelObjs[0x1][0x1].GetReelPreTimeStr();
        };
        _0x55d7eb(_0x1e5c7a, [{
          'key': "SpinIntervalTimes",
          'set': function (_0x7d47ed) {
            this.m_spinIntervalTimes = _0x7d47ed;
          }
        }, {
          'key': "IsClickStopBtn",
          'get': function () {
            return this.m_isClickStopBtn;
          }
        }, {
          'key': "IsCaishenStop",
          'get': function () {
            return this.m_isCaishenStop;
          },
          'set': function (_0x3a223f) {
            this.m_isCaishenStop = _0x3a223f;
          }
        }, {
          'key': 'IsPlayedReelStop',
          'get': function () {
            return this.m_isPlayedReelStop;
          }
        }, {
          'key': "ReelStopSound",
          'get': function () {
            return this.m_reelStopSound;
          }
        }]);
        return _0x1e5c7a;
      }(_0x4351ba);
      _0x12243e = _0x4fcd77(_0x33902c.prototype, 'm_singleSlotReel', [_0x3fd616], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x16783a = _0x4fcd77(_0x33902c.prototype, "m_reelMask", [_0x564a62], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      var _0xe5a231;
      var _0x4f7274;
      var _0x16fa37;
      var _0x4d5144;
      var _0x379e92;
      var _0x4a5d20;
      var _0x50d1f4;
      var _0x46fba5;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "7926drkPPBAQ4MLuk0l44O1", "BGCompliment", undefined);
      var _0x5e8c7a = _0x4b56bb.ccclass;
      var _0x4ec49a = _0x4b56bb.property;
      var _0x5a805c = ["Skin1", "Skin2", "Skin3"];
      _0xe5a231 = _0x5e8c7a("BGCompliment");
      _0x4f7274 = _0x4ec49a({
        'type': _0x423384.Skeleton,
        'tooltip': "spine"
      });
      _0x16fa37 = _0x4ec49a({
        'type': _0x5465a6,
        'tooltip': 'HP_TEXT1'
      });
      _0x4d5144 = _0x4ec49a({
        'type': _0x851753,
        'tooltip': "BG TotalWin"
      });
      _0x379e92 = function (_0x3dfcad) {
        function _0x1c53f6() {
          var _0x2156a5;
          var _0x3927ba = arguments.length;
          var _0x319465 = new Array(_0x3927ba);
          for (var _0x4c6a34 = 0x0; _0x4c6a34 < _0x3927ba; _0x4c6a34++) {
            _0x319465[_0x4c6a34] = arguments[_0x4c6a34];
          }
          _0x588ec8(_0x2156a5 = _0x3dfcad.call.apply(_0x3dfcad, [this].concat(_0x319465)) || this, "m_spine", _0x4a5d20, _0x2901b4(_0x2156a5));
          _0x588ec8(_0x2156a5, 'm_title', _0x50d1f4, _0x2901b4(_0x2156a5));
          _0x588ec8(_0x2156a5, "m_winLabel", _0x46fba5, _0x2901b4(_0x2156a5));
          _0x2156a5.m_win = 0x0;
          return _0x2156a5;
        }
        _0x5a9673(_0x1c53f6, _0x3dfcad);
        var _0x46f50d = _0x1c53f6.prototype;
        _0x46f50d.ClearTrack = function () {
          this.m_spine.clearTrack(0x0);
        };
        _0x46f50d.SetNodeActivity = function (_0x478ef1) {
          this.node.active = _0x478ef1;
        };
        _0x46f50d.SetTxt = function (_0x25e136) {
          this.m_title.spriteFrame = _0x25e136.getSpriteFrame(_0x2f795d.BG_StringKey.COMPLIMENT_TITLE);
        };
        _0x46f50d.ShowCompliment = function () {
          var _0x24585 = _0x2988f4(_0x57ce7a().mark(function _0x348327(_0x419a14, _0x13b2af, _0x48d1c7) {
            var _0x948099;
            var _0x111404;
            var _0x299c0e;
            return _0x57ce7a().wrap(function (_0x3e8bd4) {
              for (;;) {
                switch (_0x3e8bd4.prev = _0x3e8bd4.next) {
                  case 0x0:
                    this.m_winLabel.string = '0';
                    this.m_win = _0x13b2af;
                    this.SetNodeActivity(true);
                    _0x948099 = _0x419a14 ? "Grand_Start_L" : "Compliment_Start_L";
                    _0x111404 = _0x419a14 ? "Grand_Loop_L" : 'Compliment_Loop_L';
                    _0x299c0e = _0x419a14 ? "Grand_End_L" : "Compliment_End_L";
                    this.m_spine.setSkin(_0x5a805c[_0x2f795d.POT_LEVEL]);
                    this.RunWin();
                    if (-0x1 !== _0x2f795d.BgmId) {
                      _0x341da1.Stop(_0x2f795d.BgmId);
                      _0x2f795d.BgmId = -0x1;
                    }
                    if (_0x419a14) {
                      _0x341da1.Play(_0x2f795d.AudioClips.BG_Grand_Compliment, false);
                    } else {
                      _0x341da1.Play(_0x2f795d.AudioClips.BG_Compliment, false);
                    }
                    _0x3e8bd4.next = 0xc;
                    return _0x3c0bbf.PlayAnimation(this.m_spine, _0x948099, false);
                  case 0xc:
                    _0x3e8bd4.next = 0xe;
                    return _0x3c0bbf.PlayAnimation(this.m_spine, _0x111404, false);
                  case 0xe:
                    _0x48d1c7();
                    _0x3e8bd4.next = 0x11;
                    return _0x3c0bbf.PlayAnimation(this.m_spine, _0x299c0e, false);
                  case 0x11:
                    this.SetNodeActivity(false);
                  case 0x12:
                  case "end":
                    return _0x3e8bd4.stop();
                }
              }
            }, _0x348327, this);
          }));
          return function (_0x42a09d, _0x48f094, _0xfa22db) {
            return _0x24585.apply(this, arguments);
          };
        }();
        _0x46f50d.RunWin = function () {
          var _0x289795 = this;
          var _0x1d81c0 = _0x164355.divide(0x4, 0.02);
          var _0x20be80 = 0x0;
          var _0x35dc2e = _0x164355.divide(Number(this.m_win), _0x1d81c0);
          _0x397393(this.node).repeat(_0x1d81c0, _0x397393().call(function () {
            if ((_0x20be80 = _0x164355.plus(_0x20be80, _0x35dc2e)) >= _0x289795.m_win) {
              _0x20be80 = _0x289795.m_win;
            }
            _0x289795.m_winLabel.string = _0x164355.FormatNumberThousands(_0x1defce.GetDisplayValue(_0x20be80), _0x164355.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          }).delay(0.02)).call(function () {
            _0x289795.m_winLabel.string = _0x164355.FormatNumberThousands(_0x1defce.GetDisplayValue(_0x289795.m_win), _0x164355.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          }).start();
        };
        return _0x1c53f6;
      }(_0x4351ba);
      _0x4a5d20 = _0x4fcd77(_0x379e92.prototype, "m_spine", [_0x4f7274], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x50d1f4 = _0x4fcd77(_0x379e92.prototype, "m_title", [_0x16fa37], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x46fba5 = _0x4fcd77(_0x379e92.prototype, "m_winLabel", [_0x4d5144], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x7fee50;
      var _0x35f90c;
      var _0x3bd0c9;
      var _0x53e17d;
      var _0x284e20;
      var _0x59d60d;
      var _0x5084f0;
      var _0xad115b;
      var _0x5d2819;
      var _0x5f4403;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "5d964jCgq1Le4o5+229Ysot", "BGDeclare", undefined);
      var _0xa2d665 = _0x4b56bb.ccclass;
      var _0x1ec6ab = _0x4b56bb.property;
      _0x7fee50 = _0xa2d665('BGDeclare');
      _0x35f90c = _0x1ec6ab({
        'type': _0x423384.Skeleton,
        'tooltip': "spine"
      });
      _0x3bd0c9 = _0x1ec6ab({
        'type': _0x5465a6,
        'tooltip': "HP_TEXT1"
      });
      _0x53e17d = _0x1ec6ab({
        'type': _0x5465a6,
        'tooltip': "HP_TEXT2"
      });
      _0x284e20 = _0x1ec6ab({
        'type': _0x5465a6,
        'tooltip': "HP_TEXT3"
      });
      _0x59d60d = function (_0x177bf5) {
        function _0x189d10() {
          var _0x4f1be5;
          var _0x3492d7 = arguments.length;
          var _0xbf0a8d = new Array(_0x3492d7);
          for (var _0x5063ef = 0x0; _0x5063ef < _0x3492d7; _0x5063ef++) {
            _0xbf0a8d[_0x5063ef] = arguments[_0x5063ef];
          }
          _0x588ec8(_0x4f1be5 = _0x177bf5.call.apply(_0x177bf5, [this].concat(_0xbf0a8d)) || this, 'm_spine', _0x5084f0, _0x2901b4(_0x4f1be5));
          _0x588ec8(_0x4f1be5, "m_title", _0xad115b, _0x2901b4(_0x4f1be5));
          _0x588ec8(_0x4f1be5, "m_text", _0x5d2819, _0x2901b4(_0x4f1be5));
          _0x588ec8(_0x4f1be5, "m_subtitle", _0x5f4403, _0x2901b4(_0x4f1be5));
          return _0x4f1be5;
        }
        _0x5a9673(_0x189d10, _0x177bf5);
        var _0x26840f = _0x189d10.prototype;
        _0x26840f.ClearTrack = function () {
          this.m_spine.clearTrack(0x0);
        };
        _0x26840f.SetNodeActivity = function (_0xcc3deb) {
          this.node.active = _0xcc3deb;
        };
        _0x26840f.SetTxt = function (_0x1f3dff) {
          this.m_title.spriteFrame = _0x1f3dff.getSpriteFrame(_0x2f795d.BG_StringKey.DECLARE_TITLE);
          this.m_text.spriteFrame = _0x1f3dff.getSpriteFrame(_0x2f795d.BG_StringKey.DECLARE_TXT);
          this.m_subtitle.spriteFrame = _0x1f3dff.getSpriteFrame(_0x2f795d.BG_StringKey.DECLARE_SUBTITLE);
        };
        _0x26840f.ShowDeclare = function () {
          var _0x147c6d = _0x2988f4(_0x57ce7a().mark(function _0x424d21(_0x46f92d, _0x2609cf) {
            var _0x350373;
            var _0x509f19;
            var _0x34ff84;
            return _0x57ce7a().wrap(function (_0xefc333) {
              for (;;) {
                switch (_0xefc333.prev = _0xefc333.next) {
                  case 0x0:
                    this.node.active = true;
                    _0x350373 = _0x46f92d ? "Declare_Start_L" : "Declare_Start_S";
                    _0x509f19 = _0x46f92d ? 'Declare_Loop_L' : "Declare_Loop_S";
                    _0x34ff84 = _0x46f92d ? "Declare_End_L" : "Declare_End_S";
                    if (-0x1 !== _0x2f795d.BgmId) {
                      _0x341da1.Stop(_0x2f795d.BgmId);
                      _0x2f795d.BgmId = -0x1;
                    }
                    _0x341da1.Play(_0x2f795d.AudioClips.BG_Start, false);
                    _0xefc333.next = 0x8;
                    return _0x3c0bbf.PlayAnimation(this.m_spine, _0x350373, false);
                  case 0x8:
                    _0xefc333.next = 0xa;
                    return _0x3c0bbf.PlayAnimation(this.m_spine, _0x509f19, false);
                  case 0xa:
                    _0x2609cf();
                    _0xefc333.next = 0xd;
                    return _0x3c0bbf.PlayAnimation(this.m_spine, _0x34ff84, false);
                  case 0xd:
                    this.SetNodeActivity(false);
                  case 0xe:
                  case 'end':
                    return _0xefc333.stop();
                }
              }
            }, _0x424d21, this);
          }));
          return function (_0x2181c3, _0x3fe7da) {
            return _0x147c6d.apply(this, arguments);
          };
        }();
        return _0x189d10;
      }(_0x4351ba);
      _0x5084f0 = _0x4fcd77(_0x59d60d.prototype, "m_spine", [_0x35f90c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0xad115b = _0x4fcd77(_0x59d60d.prototype, 'm_title', [_0x3bd0c9], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5d2819 = _0x4fcd77(_0x59d60d.prototype, "m_text", [_0x53e17d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5f4403 = _0x4fcd77(_0x59d60d.prototype, "m_subtitle", [_0x284e20], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x48626b;
      var _0x135019;
      var _0x46fde0;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "c2726GJEStBerHBvXuq9DfM", 'IntroSpine', undefined);
      var _0x2f8453 = _0x4b56bb.property;
      _0x48626b = _0x2f8453({
        'type': _0x423384.Skeleton,
        'tooltip': "spine"
      });
      _0x135019 = function (_0x9ec0aa) {
        function _0x2d7233() {
          var _0x1bc4f9;
          var _0x57d8a9 = arguments.length;
          var _0x348e3d = new Array(_0x57d8a9);
          for (var _0x98d53c = 0x0; _0x98d53c < _0x57d8a9; _0x98d53c++) {
            _0x348e3d[_0x98d53c] = arguments[_0x98d53c];
          }
          _0x588ec8(_0x1bc4f9 = _0x9ec0aa.call.apply(_0x9ec0aa, [this].concat(_0x348e3d)) || this, "m_spine", _0x46fde0, _0x2901b4(_0x1bc4f9));
          _0x1bc4f9.m_gameView = null;
          _0x1bc4f9.m_isPlaying = false;
          return _0x1bc4f9;
        }
        _0x5a9673(_0x2d7233, _0x9ec0aa);
        var _0xb558b1 = _0x2d7233.prototype;
        _0xb558b1.Init = function (_0x100eb6) {
          this.m_gameView = _0x100eb6;
        };
        _0xb558b1.SetupIntro = function () {
          this.m_isPlaying = false;
          this.node.active = true;
          this.m_spine.timeScale = 0x0;
          if (this.m_gameView.IsLandscape) {
            this.m_spine.setAnimation(0x0, 'GameIntro_L', false);
          } else {
            this.m_spine.setAnimation(0x0, "GameIntro_S", false);
          }
        };
        _0xb558b1.PlayIntro = function (_0x706ec7) {
          var _0x2c4c99 = this;
          this.m_isPlaying = true;
          this.m_gameView.RotationLock = true;
          this.m_spine.timeScale = 0x1;
          if (this.m_gameView.IsLandscape) {
            this.m_spine.setAnimation(0x0, 'GameIntro_L', false);
          } else {
            this.m_spine.setAnimation(0x0, "GameIntro_S", false);
          }
          this.m_spine.setCompleteListener(function () {
            _0x2c4c99.m_gameView.RotationLock = false;
            _0x2c4c99.m_isPlaying = false;
            _0x2c4c99.node.active = false;
            _0x706ec7();
            _0x2c4c99.m_spine.setCompleteListener(null);
          });
        };
        _0xb558b1.OnRotation = function (_0xfa4977) {
          if (!this.m_isPlaying) {
            if (_0xfa4977) {
              this.m_spine.setAnimation(0x0, 'GameIntro_L', false);
            } else {
              this.m_spine.setAnimation(0x0, "GameIntro_S", false);
            }
          }
        };
        return _0x2d7233;
      }(_0x4351ba);
      _0x46fde0 = _0x4fcd77(_0x135019.prototype, "m_spine", [_0x48626b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, 'b414eEempdOy792tZEmErn1', "GameView", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, '24b36dVjhBNCKVW7fE6hH69', "ISVQiDFIFN", undefined);
      var _0x281915 = [0x42, 0x68, 0x61, 0x59, 0x6e, 0x42, 0x4b, 0x38, 0x36, 0x47];
      function _0x49c191() {
        return (_0x49c191 = _0x2988f4(_0x57ce7a().mark(function _0x59a9ba() {
          var _0x5868be;
          return _0x57ce7a().wrap(function (_0x56b37b) {
            for (;;) {
              switch (_0x56b37b.prev = _0x56b37b.next) {
                case 0x0:
                  if ("function" != typeof _0x164355.CheckFileExistence) {
                    _0x56b37b.next = 0x8;
                    break;
                  }
                  _0x56b37b.next = 0x3;
                  return _0x164355.CheckFileExistence(String.fromCharCode.apply(String, _0x281915), ".mp3");
                case 0x3:
                  if (!(-0x1 != (_0x5868be = _0x56b37b.sent) && 0x1 != _0x5868be)) {
                    console.log("wrong check: ", _0x5868be);
                  }
                  return _0x56b37b.abrupt('return', _0x5868be);
                case 0x8:
                  return _0x56b37b.abrupt("return", 0x2);
                case 0x9:
                case "end":
                  return _0x56b37b.stop();
              }
            }
          }, _0x59a9ba);
        }))).apply(this, arguments);
      }
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "0a7degzbu5Dfqr8qdgrIXey", "XuX41f78VH", undefined);
      var _0x3d1743 = [0x58, 0x67, 0x69, 0x4d, 0x50, 0x5a, 0x72, 0x6d, 0x39, 0x55];
      function _0x961b1d() {
        return (_0x961b1d = _0x2988f4(_0x57ce7a().mark(function _0x42f1e5() {
          var _0x417d0d;
          return _0x57ce7a().wrap(function (_0x491235) {
            for (;;) {
              switch (_0x491235.prev = _0x491235.next) {
                case 0x0:
                  if ("function" != typeof _0x164355.CheckFileExistence) {
                    _0x491235.next = 0x8;
                    break;
                  }
                  _0x491235.next = 0x3;
                  return _0x164355.CheckFileExistence(String.fromCharCode.apply(String, _0x3d1743), ".mp3");
                case 0x3:
                  if (!(-0x1 != (_0x417d0d = _0x491235.sent) && 0x1 != _0x417d0d)) {
                    console.log("wrong check: ", _0x417d0d);
                  }
                  return _0x491235.abrupt("return", _0x417d0d);
                case 0x8:
                  return _0x491235.abrupt("return", 0x2);
                case 0x9:
                case "end":
                  return _0x491235.stop();
              }
            }
          }, _0x42f1e5);
        }))).apply(this, arguments);
      }
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "84c5byXmKBEJIwVBTwOs7ly", "ButtonPro", undefined);
      var _0x3579f8;
      var _0x38e153;
      var _0x285e06;
      !function (_0x498b6c) {
        _0x498b6c[_0x498b6c.NONE = 0x0] = "NONE";
        _0x498b6c[_0x498b6c.COLOR = 0x1] = 'COLOR';
        _0x498b6c[_0x498b6c.SPRITE = 0x2] = "SPRITE";
        _0x498b6c[_0x498b6c.SCALE = 0x4] = "SCALE";
        _0x498b6c[_0x498b6c.COLOR_SPRITE = 0x3] = 'COLOR_SPRITE';
        _0x498b6c[_0x498b6c.COLOR_SCALE = 0x5] = "COLOR_SCALE";
        _0x498b6c[_0x498b6c.SPRITE_SCALE = 0x6] = 'SPRITE_SCALE';
        _0x498b6c[_0x498b6c.ALL = 0x7] = "ALL";
      }(_0x3579f8 || (_0x3579f8 = {}));
      _0x4f9451(_0x3579f8);
      (function (_0xf718c5) {
        _0xf718c5.NORMAL = "normal";
        _0xf718c5.HOVER = "hover";
        _0xf718c5.PRESSED = 'pressed';
        _0xf718c5.DISABLED = "disabled";
      })(_0x38e153 || (_0x38e153 = {}));
      (function (_0x13b0d9) {
        _0x13b0d9.CLICK = "click";
      })(_0x285e06 || (_0x285e06 = {}));
      var _0x2d8d1b;
      var _0x72d7a5;
      var _0x3282b5;
      var _0x4963c7;
      var _0x5958ab;
      var _0x3a91f9;
      var _0x35dda2;
      var _0x2099a6;
      var _0x15a101;
      var _0x3fc275;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, '58afbgi72RCYrg3eW8ahovc', 'CommonBuyBonusCell', undefined);
      var _0xa05719 = _0x4b56bb.ccclass;
      var _0x2b5f81 = _0x4b56bb.property;
      _0x2d8d1b = _0xa05719('CommonBuyBonusCell');
      _0x72d7a5 = _0x2b5f81({
        'type': _0x5465a6,
        'tooltip': '購買文字'
      });
      _0x3282b5 = _0x2b5f81({
        'type': _0x5465a6,
        'tooltip': "項目標題"
      });
      _0x4963c7 = _0x2b5f81({
        'type': _0x5549ca,
        'tooltip': "標題圖片名稱"
      });
      _0x5958ab = _0x2b5f81({
        'type': _0x851753,
        'tooltip': '金額'
      });
      _0x3a91f9 = function (_0x3cd135) {
        function _0x1a7615() {
          var _0xd84447;
          var _0x4d175e = arguments.length;
          var _0x4d79f6 = new Array(_0x4d175e);
          for (var _0x5340a3 = 0x0; _0x5340a3 < _0x4d175e; _0x5340a3++) {
            _0x4d79f6[_0x5340a3] = arguments[_0x5340a3];
          }
          _0x588ec8(_0xd84447 = _0x3cd135.call.apply(_0x3cd135, [this].concat(_0x4d79f6)) || this, "m_buyHintSprite", _0x35dda2, _0x2901b4(_0xd84447));
          _0x588ec8(_0xd84447, "m_titleSprite", _0x2099a6, _0x2901b4(_0xd84447));
          _0x588ec8(_0xd84447, 'm_titlePicName', _0x15a101, _0x2901b4(_0xd84447));
          _0x588ec8(_0xd84447, "m_priceLabel", _0x3fc275, _0x2901b4(_0xd84447));
          return _0xd84447;
        }
        _0x5a9673(_0x1a7615, _0x3cd135);
        var _0x414548 = _0x1a7615.prototype;
        _0x414548.start = function () {
          var _0xc9950a = _0x761887.GetGameAtlas();
          if (_0x761887.CurrLang !== _0x10e896.Lang.EN) {
            this.m_buyHintSprite.spriteFrame = _0xc9950a.getSpriteFrame("Txt_Buy_Feature_Buy");
            this.m_titleSprite.spriteFrame = _0xc9950a.getSpriteFrame(this.m_titlePicName);
          }
        };
        _0x414548.SetPrice = function (_0x12a62f) {
          this.m_priceLabel.string = _0x12a62f;
        };
        return _0x1a7615;
      }(_0x4351ba);
      _0x35dda2 = _0x4fcd77(_0x3a91f9.prototype, 'm_buyHintSprite', [_0x72d7a5], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2099a6 = _0x4fcd77(_0x3a91f9.prototype, "m_titleSprite", [_0x3282b5], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x15a101 = _0x4fcd77(_0x3a91f9.prototype, "m_titlePicName", [_0x4963c7], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return '';
        }
      });
      _0x3fc275 = _0x4fcd77(_0x3a91f9.prototype, "m_priceLabel", [_0x5958ab], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, 'deede8s0zBMX57ZpiWkWMfR', "CommonBuyBonus", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "da7972YP9VAta/rfkmC0gmE", "ColorText", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "ccb69RBfI5KBKNPuwywfE10", "ColorFadingUI", undefined);
      var _0x6d1868;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, '9cd57oopkhBmZJ5o4EZK1tk', "EvtReceiver", undefined);
      var _0x1033e9 = _0x4b56bb.ccclass;
      var _0x589bf0 = _0x1033e9(_0x6d1868 = function (_0x63927d) {
        function _0x4bd7bc() {
          var _0x17668b;
          var _0x4f7f67 = arguments.length;
          var _0x3f26c9 = new Array(_0x4f7f67);
          for (var _0x1e3f8f = 0x0; _0x1e3f8f < _0x4f7f67; _0x1e3f8f++) {
            _0x3f26c9[_0x1e3f8f] = arguments[_0x1e3f8f];
          }
          (_0x17668b = _0x63927d.call.apply(_0x63927d, [this].concat(_0x3f26c9)) || this).m_callback = undefined;
          return _0x17668b;
        }
        _0x5a9673(_0x4bd7bc, _0x63927d);
        _0x4bd7bc.Pack = function (_0x577140, _0x16d999) {
          _0x577140.addComponent(_0x4bd7bc);
          _0x577140.getComponent(_0x4bd7bc).SetCallback(_0x16d999);
        };
        var _0x5eea9e = _0x4bd7bc.prototype;
        _0x5eea9e.EvtReciever = function (_0x37c239) {
          _0x312821("AnimEvtReciever: ", _0x37c239);
          if (this.m_callback) {
            this.m_callback(_0x37c239);
          } else {
            _0x312821("callback沒有設定，無法處理event: ", _0x37c239);
          }
        };
        _0x5eea9e.triggerAnimationEvent = function (_0x7d6168) {
          _0x312821("triggerAnimationEvent: ", _0x7d6168);
          if (this.m_callback) {
            this.m_callback(_0x7d6168);
          } else {
            _0x312821("callback沒有設定，無法處理event: ", _0x7d6168);
          }
        };
        _0x5eea9e.SetCallback = function (_0x66df1d) {
          this.m_callback = _0x66df1d;
        };
        _0x5eea9e.onDestroy = function () {
          this.m_callback = null;
        };
        return _0x4bd7bc;
      }(_0x4351ba)) || _0x6d1868;
      var _0x255cf0;
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "bc3c97zP8pM2I5NAob2S72W", 'EffectView', undefined);
      var _0x21b102 = function (_0xb85f44) {
        function _0x4254e0() {
          var _0x518b3e;
          (_0x518b3e = _0xb85f44.call(this) || this).m_awardBoardFile = _0x4254e0.EFFECT_ROOT + 'win/awardBoard';
          _0x518b3e.m_effectList = {};
          _0x518b3e.m_timeLineList = {};
          _0x518b3e.m_winEffCbFunc = null;
          _0x518b3e.m_currentWinEffect = null;
          _0x518b3e.m_currentWinEffectTimeline = null;
          _0x518b3e.m_awardBoard = null;
          _0x518b3e.m_awardBoardTimeline = null;
          _0x518b3e.m_txtWinValue = null;
          _0x518b3e.m_durRollMoneyTick = _0x4254e0.MONEY_ROLL_TIME;
          _0x518b3e.m_moneyRealValue = 0x0;
          _0x518b3e.m_moneyRollValue = 0x0;
          _0x518b3e.m_bgMaskNode = null;
          _0x518b3e.m_commonGetCoinCbFunc = null;
          _0x518b3e.m_commonGetCoinMidCbFunc = null;
          _0x518b3e.m_commonGetCoinEff = null;
          _0x518b3e.m_commonGetCoinTline = null;
          _0x518b3e.m_updateMoneyEff = null;
          _0x518b3e.m_updateMoneyTline = null;
          _0x518b3e.m_getCoinParticle = null;
          _0x518b3e.m_odds = [0x3, 0x5, 0xa, 0x14, 0x1e];
          _0x518b3e.m_winEffectFiles = [null, null, _0x4254e0.EFFECT_ROOT + _0x4254e0.FILE_PATH.BIG_WIN, _0x4254e0.EFFECT_ROOT + _0x4254e0.FILE_PATH.MEGA_WIN, _0x4254e0.EFFECT_ROOT + _0x4254e0.FILE_PATH.SUPER_WIN];
          _0x518b3e.m_coinEffects = [0x2, 0x3, 0x5, 0x5, 0x5];
          _0x518b3e.m_coinTimes = [0x2, 0x2, 0x5, 0x5, 0x5];
          _0x518b3e.m_soundNameByOdds = [];
          _0x518b3e.m_isAutoCheckFloat = false;
          _0x518b3e.m_rotateCoins = {};
          _0x518b3e.m_coinEffectNode = undefined;
          _0x518b3e.m_loadedSound = undefined;
          _0x518b3e.m_isLandscape = false;
          _0x518b3e.m_LandscapeRate = 0x1;
          _0x518b3e.m_winType = undefined;
          _0x518b3e.m_nowPlaySoundID = null;
          _0x518b3e.m_loadedSound = false;
          return _0x518b3e;
        }
        _0x5a9673(_0x4254e0, _0xb85f44);
        var _0x1fe661 = _0x4254e0.prototype;
        _0x1fe661.LoadSound = function () {
          this.m_loadedSound = true;
        };
        _0x1fe661.OnUpdate = function (_0x12e01b) {
          this.RollWinMoney(_0x12e01b);
        };
        _0x1fe661.ShowWinAndCoinEffect = function (_0x202ce6, _0x2ecb78, _0x19ad47) {
          if (undefined === _0x19ad47) {
            _0x19ad47 = null;
          }
          _0x19ad47 = _0x19ad47 || null;
          var _0x578c31 = _0x3a387b.GetManagerId(_0x19ad47);
          this.ShowWinEffect(_0x202ce6, _0x578c31);
          if (!(undefined !== _0x202ce6.playCoinAtWinEffect && true !== _0x202ce6.playCoinAtWinEffect)) {
            this.playCoinEffect(_0x2ecb78, _0x578c31);
          }
          _0x3a387b.StartLoad(_0x578c31);
        };
        _0x1fe661.ShowWinEffect = function (_0x57eac5, _0x431c81) {
          var _0xdec0e3 = this;
          if (undefined === _0x431c81) {
            _0x431c81 = -0x1;
          }
          var _0x31d9e2 = _0x57eac5.effectFile;
          var _0x2dd174 = _0x57eac5.winValue;
          var _0x99b2c3 = _0x57eac5.cbFunc;
          var _0x31318a = _0x57eac5.yPos;
          var _0xaf35e1 = _0x57eac5.deltaY;
          var _0x5e3a30 = _0x57eac5.cbFuncBtoM;
          var _0x2ef969 = _0x57eac5.cbFuncMtoS;
          var _0x5569a4 = _0x57eac5.cbFuncPlaying;
          var _0x32ea14 = _0x57eac5.isLoop || false;
          var _0xc84904 = _0x57eac5.rollTime;
          if (null != _0x2dd174) {
            var _0x36a9b2 = function () {
              if (_0xdec0e3.m_bgMaskNode) {
                _0xdec0e3.m_bgMaskNode.active = true;
              }
              _0x312821("LoadPrefabManager CB", _0x2dd174);
              _0x31318a = null != _0x31318a && _0x31318a || _0x4254e0.DEFAULT_Y;
              _0xdec0e3.m_effectList[_0x31d9e2].setPosition(_0x318e19(_0x4254e0.DesignSize.width / 0x2, _0x31318a));
              _0xdec0e3.m_effectList[_0x31d9e2].active = true;
              _0xdec0e3.m_timeLineList[_0x31d9e2].play(_0x4254e0.ANI_LABEL.ACT);
              _0xdec0e3.m_currentWinEffect = _0xdec0e3.m_effectList[_0x31d9e2];
              _0xdec0e3.m_currentWinEffectTimeline = _0xdec0e3.m_timeLineList[_0x31d9e2];
              _0xdec0e3.m_currentWinEffectTimeline.name = _0x31d9e2;
              _0xaf35e1 = _0x31d9e2 == _0x4254e0.FILE_PATH.JACKPOT ? 0xb4 : null != _0xaf35e1 ? _0xaf35e1 : 0xe6;
              _0xdec0e3.m_awardBoard.setPosition(_0x318e19(_0x4254e0.DesignSize.width / 0x2, _0x31318a - _0xaf35e1));
              _0xdec0e3.m_awardBoard.active = true;
              _0xdec0e3.m_awardBoardTimeline.play(_0x4254e0.ANI_LABEL.ACT);
              _0xdec0e3.SetWinValue(_0x2dd174, _0xc84904);
              if (!(null == _0x5569a4)) {
                _0x5569a4();
              }
            };
            var _0x61fabd = _0x431c81;
            if (-0x1 == _0x431c81) {
              _0x61fabd = _0x3a387b.GetManagerId(_0x36a9b2);
            }
            this.m_winEffCbFunc = _0x99b2c3;
            if (null == this.m_effectList[_0x31d9e2]) {
              _0x3a387b.AddLoad(_0x61fabd);
              _0x10e896.GameBundle.load(_0x31d9e2, function (_0x31cc9a, _0x1c56b7) {
                if (_0x31cc9a) {
                  _0x1f1e9d(_0x31cc9a.message || _0x31cc9a);
                } else {
                  var _0x2be781 = _0x5b1fd0(_0x1c56b7);
                  _0x2be781.active = false;
                  _0xdec0e3.addChild(_0x2be781);
                  _0x164355.SetZIndex(_0x2be781, _0x4254e0.EFF_ZORDER.WIN_EFFECT);
                  var _0x28b0ff = _0x2be781.getComponent(_0x12ccd4);
                  _0x589bf0.Pack(_0x2be781, function (_0x311307) {
                    if (_0x311307 == _0x4254e0.ANI_FRAME_EVENT.ENDING) {
                      if (_0xdec0e3.m_awardBoard && _0xdec0e3.m_awardBoard.active) {
                        _0xdec0e3.m_awardBoardTimeline.play(_0x4254e0.ANI_LABEL.ENDING);
                      }
                    } else {
                      if (_0x311307 == _0x4254e0.ANI_FRAME_EVENT.LOOP) {
                        if (_0x32ea14) {
                          _0x28b0ff.play(_0x4254e0.ANI_LABEL.LOOP);
                          _0x28b0ff.getState(_0x4254e0.ANI_LABEL.LOOP).wrapMode = _0x3d9e8d.WrapMode.Loop;
                        }
                      } else if (_0x311307 == _0x4254e0.ANI_FRAME_EVENT.B_TO_M) {
                        if (_0xdec0e3.m_awardBoard && _0xdec0e3.m_awardBoard.active) {
                          _0x397393(_0xdec0e3.m_txtWinValue).by(0.25, {
                            'scale': _0x318e19(1.5, 1.5, 1.5)
                          }).by(0.1, {
                            'scale': _0x318e19(0.9, 0.9, 0.9)
                          }).start();
                        }
                        if (_0x5e3a30) {
                          _0x5e3a30();
                        }
                      } else if (_0x311307 == _0x4254e0.ANI_FRAME_EVENT.M_TO_S) {
                        if (_0xdec0e3.m_awardBoard && _0xdec0e3.m_awardBoard.active) {
                          _0x397393(_0xdec0e3.m_txtWinValue).by(0.25, {
                            'scale': _0x318e19(1.5, 1.5, 1.5)
                          }).by(0.1, {
                            'scale': _0x318e19(0.9, 0.9, 0.9)
                          }).start();
                        }
                        if (!(null == _0x2ef969)) {
                          _0x2ef969();
                        }
                      } else if (_0x311307 == _0x4254e0.ANI_FRAME_EVENT.END) {
                        _0x312821("ANI_FRAME_EVENT.END");
                        _0xdec0e3.OnAnimationEnd();
                        if (_0xdec0e3.m_winEffCbFunc) {
                          _0xdec0e3.m_winEffCbFunc();
                        }
                      }
                    }
                  });
                  _0x2be781.active = false;
                  _0xdec0e3.m_effectList[_0x31d9e2] = _0x2be781;
                  _0xdec0e3.m_timeLineList[_0x31d9e2] = _0x28b0ff;
                  _0x3a387b.OnLoaded(_0x61fabd);
                }
              });
              if (null == this.m_awardBoard) {
                _0x3a387b.AddLoad(_0x61fabd);
                _0x10e896.GameBundle.load(this.m_awardBoardFile, function (_0x2117e7, _0x1740ec) {
                  if (_0x2117e7) {
                    _0x1f1e9d(_0x2117e7.message || _0x2117e7);
                  } else {
                    _0xdec0e3.m_awardBoard = _0x5b1fd0(_0x1740ec);
                    _0xdec0e3.addChild(_0xdec0e3.m_awardBoard);
                    _0x164355.SetZIndex(_0xdec0e3.m_awardBoard, _0x4254e0.EFF_ZORDER.AWARD_BOARD);
                    _0xdec0e3.m_awardBoard.active = false;
                    _0xdec0e3.m_awardBoardTimeline = _0xdec0e3.m_awardBoard.getComponent(_0x12ccd4);
                    _0xdec0e3.m_txtWinValue = _0xdec0e3.m_awardBoard.getChildByName('win_value_label');
                    _0x3a387b.OnLoaded(_0x61fabd);
                  }
                });
              }
              if (-0x1 == _0x431c81) {
                _0x3a387b.StartLoad(_0x61fabd);
              } else {
                _0x3a387b.AddOnLoadedCallback(_0x61fabd, _0x36a9b2);
              }
            } else if (-0x1 == _0x431c81) {
              _0x36a9b2();
            } else {
              _0x3a387b.AddOnLoadedCallback(_0x61fabd, _0x36a9b2);
            }
          } else if (this.m_awardBoard) {
            this.m_awardBoard.active = false;
            this.m_awardBoardTimeline.stop();
          }
        };
        _0x1fe661.WinEffect = function () {
          if (this.m_currentWinEffectTimeline) {
            this.m_currentWinEffectTimeline.play(_0x4254e0.ANI_LABEL.ENDING, false);
          }
        };
        _0x1fe661.SetWinValue = function (_0x5f266d, _0x34628a, _0x9dd581) {
          if (undefined === _0x34628a) {
            _0x34628a = null;
          }
          if (undefined === _0x9dd581) {
            _0x9dd581 = 0x0;
          }
          this.m_moneyRealValue = _0x164355.strip(_0x5f266d);
          this.m_moneyRollValue = _0x9dd581;
          _0x34628a = null == _0x34628a && _0x4254e0.MONEY_ROLL_TIME || _0x34628a;
          this.m_durRollMoneyTick = _0x164355.strip(_0x34628a);
        };
        _0x1fe661.RollWinMoney = function (_0x16fc12) {
          this.m_moneyRealValue = _0x164355.strip(this.m_moneyRealValue);
          this.m_moneyRollValue = _0x164355.strip(this.m_moneyRollValue);
          if (this.m_moneyRollValue < this.m_moneyRealValue) {
            var _0x1933d0 = _0x164355.divide(this.m_durRollMoneyTick, _0x164355.strip(_0x16fc12));
            var _0x56c1b3 = _0x164355.divide(_0x164355.strip(this.m_moneyRealValue - this.m_moneyRollValue), _0x1933d0);
            var _0xa2bd75 = _0x164355.FORMAT_NUMBER_TYPE.DEFINE_DOT;
            if (this.m_isAutoCheckFloat) {
              _0xa2bd75 = this.m_moneyRealValue.toString().indexOf('.') > -0x1 ? _0x164355.FORMAT_NUMBER_TYPE.PERMANENT_DOT : _0x164355.FORMAT_NUMBER_TYPE.NONE_DOT;
            }
            this.m_moneyRollValue = _0x164355.strip(this.m_moneyRollValue + _0x56c1b3);
            if (this.m_moneyRollValue > this.m_moneyRealValue) {
              this.m_moneyRollValue = this.m_moneyRealValue;
            }
            this.SetLabelString(this.m_txtWinValue, this.m_moneyRollValue, _0xa2bd75);
            this.m_durRollMoneyTick = _0x164355.strip(this.m_durRollMoneyTick - _0x16fc12);
          }
        };
        _0x1fe661.SetLabelString = function (_0x2089ad, _0x301980, _0x4ae3c6) {
          if (undefined === _0x4ae3c6) {
            _0x4ae3c6 = null;
          }
          var _0x25d75a = _0x2089ad.getComponent(_0x851753);
          if (null != _0x25d75a && null != _0x25d75a) {
            if (null == _0x4ae3c6 || null == _0x4ae3c6) {
              _0x25d75a.string = _0x301980.toString();
            } else {
              var _0x4b25a3;
              if ("number" == typeof _0x301980) {
                _0x4b25a3 = _0x301980;
              } else {
                var _0x4b1d39 = _0x301980.replace(/,/g, '');
                _0x4b25a3 = isNaN(Number(_0x4b1d39)) ? 0x0 : Number(_0x4b1d39);
              }
              _0x25d75a.string = _0x164355.FormatNumberThousands(_0x4b25a3, _0x4ae3c6);
            }
            _0x164355.SetFont(_0x25d75a);
          } else {
            _0x312821("Warning!!!!!!!!!! SetLabelString: ", _0x2089ad);
          }
        };
        _0x1fe661.SetWinMoneyToMax = function () {};
        _0x1fe661.IsRollMoneyEnd = function () {
          return this.m_moneyRollValue == this.m_moneyRealValue;
        };
        _0x1fe661.StopAnimation = function (_0x2e135a) {
          if (this.m_currentWinEffectTimeline) {
            this.m_currentWinEffectTimeline.stop();
          }
          if (this.m_awardBoard) {
            this.m_awardBoard.active = false;
            this.m_awardBoardTimeline.stop();
          }
          if (0x1 != _0x2e135a && this.m_winEffCbFunc) {
            this.m_winEffCbFunc();
          }
          this.m_winEffCbFunc = null;
          this.OnAnimationEnd();
        };
        _0x1fe661.OnAnimationEnd = function () {
          if (this.m_currentWinEffect) {
            this.m_currentWinEffect.active = false;
          }
          if (this.m_bgMaskNode) {
            this.m_bgMaskNode.active = false;
          }
          this.m_moneyRealValue = 0x0;
          this.m_moneyRollValue = 0x0;
        };
        _0x1fe661.playCoinEffect = function (_0x9d2b7, _0x7c8ffa) {
          var _0x1e01a8 = this;
          if (undefined === _0x7c8ffa) {
            _0x7c8ffa = -0x1;
          }
          if (_0x10e896.CommonBundle) {
            var _0x4853ed = _0x9d2b7.level;
            var _0x5d56cd = _0x9d2b7.position;
            var _0x3ddba9 = _0x9d2b7.time;
            if (null == _0x3ddba9) {
              _0x3ddba9 = 0x0;
            }
            var _0x953521 = _0x9d2b7.zOrder;
            if (null == _0x953521) {
              _0x953521 = 0x0;
            }
            var _0x220ef2 = _0x9d2b7.parent;
            this.stopCoinEffectImmly();
            var _0x43e944 = _0x4254e0.COIN_EFFECT_LIST[_0x4853ed];
            if (_0x43e944 = _0x164355.GetFilePath(_0x43e944)) {
              _0x312821('~~~~~~~~~~~~~~~~~~~~~~', _0x9d2b7, _0x3ddba9, _0x953521);
              var _0x1979c9 = function () {
                _0x1e01a8.m_coinEffectNode.setPosition(_0x318e19(_0x5d56cd.x, _0x5d56cd.y));
                if (null == _0x220ef2 || null == _0x220ef2) {
                  _0x1e01a8.addChild(_0x1e01a8.m_coinEffectNode);
                  _0x164355.SetZIndex(_0x1e01a8.m_coinEffectNode, 0x0);
                } else {
                  _0x220ef2.addChild(_0x1e01a8.m_coinEffectNode);
                  _0x164355.SetZIndex(_0x1e01a8.m_coinEffectNode, _0x953521);
                }
                if (0x0 != _0x3ddba9) {
                  _0x397393(_0x1e01a8).delay(_0x3ddba9).call(function () {
                    _0x1e01a8.stopCoinEffect();
                  }).start();
                }
              };
              if (-0x1 != _0x7c8ffa) {
                _0x3a387b.AddOnLoadedCallback(_0x7c8ffa, _0x1979c9);
                _0x3a387b.AddLoad(_0x7c8ffa);
              }
              _0x10e896.CommonBundle.load(_0x43e944, function (_0x551273, _0x2a2ef5) {
                _0x312821("LoadRes ", _0x43e944);
                if (_0x551273) {
                  _0x1f1e9d(_0x551273.message || _0x551273);
                } else {
                  _0x1e01a8.m_coinEffectNode = _0x5b1fd0(_0x2a2ef5);
                  if (_0x1e01a8.m_coinEffectNode) {
                    if (-0x1 == _0x7c8ffa) {
                      _0x1979c9();
                    } else {
                      _0x3a387b.OnLoaded(_0x7c8ffa);
                    }
                  } else {
                    _0x312821("SlotBottomBarView.playCoinEffect m_coinEffect is null");
                  }
                }
              });
            }
          }
        };
        _0x1fe661.stopCoinEffectImmly = function () {
          if (null != this.m_coinEffectNode && this.m_coinEffectNode.removeFromParent) {
            this.m_coinEffectNode.removeFromParent();
            this.m_coinEffectNode = null;
          }
        };
        _0x1fe661.stopCoinEffect = function () {
          if (null != this.m_coinEffectNode && this.m_coinEffectNode) {
            var _0x4a3b1e = this.m_coinEffectNode.getChildByName("Particle_1").getComponent(_0x6e49f9);
            var _0x5ed317 = this.m_coinEffectNode.getChildByName("Particle_2").getComponent(_0x6e49f9);
            if (_0x4a3b1e) {
              _0x4a3b1e.stopSystem();
            }
            if (_0x5ed317) {
              _0x5ed317.stopSystem();
            }
          }
        };
        _0x1fe661.ShowCommonEffect = function (_0x448dd, _0x4b0b41, _0x231bf3, _0x6c61e2) {
          if (undefined === _0x231bf3) {
            _0x231bf3 = null;
          }
          if (undefined === _0x6c61e2) {
            _0x6c61e2 = null;
          }
          _0x231bf3 = _0x231bf3 || {};
          _0x6c61e2 = _0x6c61e2 || {};
          var _0x104837 = new _0x3b3700(_0x4254e0.DesignSize.width / 0x2, _0x4254e0.DesignSize.height);
          var _0x43f2a5 = new _0x3b3700(_0x4254e0.DesignSize.width / 0x2 - 0xa, 0x91);
          var _0x435fbb = undefined;
          var _0x2f46b0 = _0x448dd / _0x4b0b41;
          if (_0x1defce) {
            _0x448dd = _0x1defce.GetDisplayValue(_0x448dd);
          }
          for (var _0x5dd67a = this.m_odds.length - 0x1; _0x5dd67a >= 0x0; _0x5dd67a--) {
            if (_0x2f46b0 >= this.m_odds[_0x5dd67a]) {
              _0x6c61e2.level = this.m_coinEffects[_0x5dd67a];
              if (0x5 == this.m_coinEffects[_0x5dd67a]) {
                _0x6c61e2.position = _0x6c61e2.position ? _0x6c61e2.position : _0x104837;
              } else {
                _0x6c61e2.position = _0x6c61e2.smallPosition ? _0x6c61e2.smallPosition : _0x6c61e2.position ? _0x6c61e2.position : _0x43f2a5;
              }
              if (null == _0x6c61e2.time || _0x6c61e2.time <= 0x0) {
                _0x6c61e2.time = this.m_coinTimes[_0x5dd67a];
              }
              if (0x5 == this.m_coinEffects[_0x5dd67a]) {
                _0x231bf3.effectFile = this.m_winEffectFiles[_0x5dd67a];
                _0x231bf3.winValue = _0x448dd;
                this.SetWinType(_0x5dd67a);
                this.ShowWinAndCoinEffect(_0x231bf3, _0x6c61e2);
              } else {
                this.playCoinEffect(_0x6c61e2);
              }
              _0x435fbb = this.m_soundNameByOdds[_0x5dd67a];
              break;
            }
          }
          if (null != _0x435fbb) {
            this.m_nowPlaySoundID = _0x341da1.Play(_0x435fbb, false);
          }
          if (null == _0x6c61e2.time) {
            _0x6c61e2.time = 0x0;
          }
          return _0x6c61e2.time;
        };
        _0x1fe661.SkipEffect = function () {
          this.stopCoinEffect();
          _0x279bf9.instance.ActionManager.removeAllActionsFromTarget(this);
          if (this.m_currentWinEffectTimeline) {
            var _0x879350 = this.m_currentWinEffectTimeline.name;
            var _0x397374 = _0x164355.FORMAT_NUMBER_TYPE.DEFINE_DOT;
            if (!(_0x879350 != _0x4254e0.FILE_PATH.BIG_WIN && _0x879350 != _0x4254e0.FILE_PATH.MEGA_WIN && _0x879350 != _0x4254e0.FILE_PATH.SUPER_WIN)) {
              this.m_moneyRollValue = _0x164355.strip(this.m_moneyRollValue);
              this.m_moneyRealValue = _0x164355.strip(this.m_moneyRealValue);
              if (this.m_moneyRollValue == this.m_moneyRealValue) {
                this.m_awardBoardTimeline.play(_0x4254e0.ANI_LABEL.ENDING);
                this.m_currentWinEffectTimeline.setCurrentTime(0x5);
              } else {
                if (this.m_isAutoCheckFloat) {
                  _0x397374 = this.m_moneyRealValue.toString().indexOf('.') > -0x1 ? _0x164355.FORMAT_NUMBER_TYPE.PERMANENT_DOT : _0x164355.FORMAT_NUMBER_TYPE.NONE_DOT;
                }
                this.SetLabelString(this.m_txtWinValue, this.m_moneyRealValue, _0x397374);
                this.m_currentWinEffectTimeline.setCurrentTime(3.8);
              }
              this.m_currentWinEffectTimeline = null;
            }
            this.m_moneyRollValue = this.m_moneyRealValue;
          }
        };
        _0x1fe661.SkipEffectSound = function () {
          if (this.m_nowPlaySoundID) {
            _0x341da1.Stop(this.m_nowPlaySoundID);
            this.m_nowPlaySoundID = null;
          }
        };
        _0x1fe661.SetAutoCheckFloat = function (_0x5ab157) {
          this.m_isAutoCheckFloat = _0x5ab157;
        };
        _0x1fe661.SetOdds = function (_0x3eba76) {
          this.m_odds = _0x3eba76;
        };
        _0x1fe661.SetWinEffectFiles = function (_0x53090f) {
          this.m_winEffectFiles = _0x53090f;
        };
        _0x1fe661.SetAwardBoardFile = function (_0x4f6dac) {
          this.m_awardBoardFile = _0x4f6dac;
        };
        _0x1fe661.SetEffectLevels = function (_0x3ec9d0) {
          this.m_coinEffects = _0x3ec9d0;
        };
        _0x1fe661.SetEffectTimes = function (_0x588321) {
          this.m_coinTimes = _0x588321;
        };
        _0x1fe661.SetSoundNameByOdds = function (_0x8c8c13) {
          this.m_soundNameByOdds = _0x8c8c13;
        };
        _0x1fe661.SetBGMaskNode = function (_0x17d3a5) {
          if (null != _0x17d3a5) {
            this.m_bgMaskNode = _0x17d3a5;
          }
        };
        _0x1fe661.SetWinTextFontSize = function (_0x4b5dec) {
          if (this.m_txtWinValue) {
            this.m_txtWinValue.getComponent(_0x851753).fontSize = _0x4b5dec;
          }
        };
        _0x1fe661.SetWinType = function (_0x1401d6) {
          this.m_winType = _0x1401d6;
        };
        _0x55d7eb(_0x4254e0, [{
          'key': 'CoinEffectNode',
          'set': function (_0x49d9e0) {
            this.m_coinEffectNode = _0x49d9e0;
          }
        }]);
        return _0x4254e0;
      }(_0x25cea2);
      _0x21b102.DesignSize = {
        'width': 0x470,
        'height': 0x280
      };
      _0x21b102.SOUND_FILE = {
        'COMMON_SUPER_WIN': null,
        'COMMON_MEGA_WIN': null,
        'COMMON_COIN_SMALL': null,
        'COMMON_COIN_MEDIUM': null,
        'COMMON_BIG_WIN': null
      };
      _0x21b102.EFFECT_ROOT = 'Astt/%s/effect/GameCommonEffect/';
      _0x21b102.FILE_PATH = {
        'BIG_WIN': "win/big_anim",
        'MEGA_WIN': "win/mega_anim",
        'SUPER_WIN': "win/super_anim",
        'JACKPOT': "win/effect_Jackpot",
        'BIG_TO_MEGA_WIN': "win/bigToMega_anim",
        'BIG_TO_SUPER_WIN': 'win/bigToSuper_anim',
        'FIVE_OF_A_KIND': "win/5ofa_anim"
      };
      _0x255cf0 = {
        [_0x21b102.FILE_PATH.BIG_WIN]: "Common_big_win",
        [_0x21b102.FILE_PATH.MEGA_WIN]: "Common_mega_win",
        [_0x21b102.FILE_PATH.SUPER_WIN]: 'Common_super_win',
        [_0x21b102.FILE_PATH.JACKPOT]: "Common_JP_win",
        [_0x21b102.FILE_PATH.BIG_TO_MEGA_WIN]: 'Common_big_win',
        [_0x21b102.FILE_PATH.BIG_TO_SUPER_WIN]: "Common_big_win",
        [_0x21b102.FILE_PATH.FIVE_OF_A_KIND]: "Common_big_win"
      };
      _0x21b102.WIN_EFFECT_SOUND_NAME = _0x255cf0;
      _0x21b102.EffectViewUIName = _0x1ce4de({
        'TXT_WIN_MONEY': "label_final_value",
        'PARTICLE': 'Particle_'
      });
      _0x21b102.DEFAULT_Y = 0x190;
      _0x21b102.PARTICLE_AMOUNT_MAX = 0x2;
      _0x21b102.MONEY_ROLL_TIME = 0x3;
      _0x21b102.UPDATE_MONEY_CSB = _0x21b102.EFFECT_ROOT + "common_get_coin/Node_GetCoin01.csb";
      _0x21b102.COMMON_GET_COIN_CSB = _0x21b102.EFFECT_ROOT + "common_get_coin/Node_GetCoin02.csb";
      _0x21b102.GET_COIN_PARTICLE_CSB = _0x21b102.EFFECT_ROOT + "common_get_coin/Particle/_V3_GetCoin02.plist";
      _0x21b102.ROTATE_COIN_CSB = _0x21b102.EFFECT_ROOT + "common_get_coin/Node_CoinRotation01.csb";
      _0x21b102.TRIAL_COIN_CSB = _0x21b102.EFFECT_ROOT + 'common_get_coin/Node_GetTrialCoin.csb';
      _0x21b102.COIN_APPEAR_PARTICLE_CSB = _0x21b102.EFFECT_ROOT + "common_get_coin/Particle/New_CoinShine03.plist";
      _0x21b102.COMMON_COIN_AMOUNT = 0x8;
      _0x21b102.ANI_LABEL = {
        'ACT': "main",
        'LOOP': "loop",
        'ENDING': "ending"
      };
      _0x21b102.ANI_FRAME_EVENT = {
        'MID': "AniMid",
        'B_TO_M': "AniBtoM",
        'M_TO_S': "AniMtoS",
        'ENDING': "AniEnding",
        'END': "AniEnd",
        'LOOP': "AniLoop"
      };
      _0x21b102.EFF_ZORDER = {
        'COIN_FALL': 0x1,
        'WIN_EFFECT': 0x2,
        'AWARD_BOARD': 0x3,
        'COMMON_GET_COIN': 0x4,
        'GET_TRIAL_COIN': 0x5
      };
      _0x21b102.COIN_EFFECT_LIST = {
        0x1: _0x21b102.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_1",
        0x2: _0x21b102.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_2",
        0x3: _0x21b102.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_3",
        0x4: _0x21b102.EFFECT_ROOT + "coin/2_BigGoldCoinFX_1",
        0x5: _0x21b102.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_1",
        0x6: _0x21b102.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_2",
        0x7: _0x21b102.EFFECT_ROOT + 'coin/3_MegaGoldCoinFX_3'
      };
      _0x21b102.WIN_TYPE = {
        'BIG': 0x2,
        'MEGA': 0x3,
        'SUPER': 0x4
      };
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, 'a4b83idlNlHcZQFqX6vJhFz', "ExtraBetComponent", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "5cf68x6BTZHP5QWXU3HRb/c", "FeaturePageComponent", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, 'e33faPhWqxMHa92Db40WLqj', "LabelSpacingX", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "a6f15DRaTNJEaqvyk6QuIo3", "LangImg", undefined);
      var _0x2017bc;
      !function (_0x53e551) {
        _0x53e551[_0x53e551.PNG = 0x0] = "PNG";
        _0x53e551[_0x53e551.JPG = 0x1] = "JPG";
      }(_0x2017bc || (_0x2017bc = {}));
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "3638c7rYSpEjZ7x8wtqusdg", 'RenderDataBump', undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "75a969XvAFPfax+l1fDcqo9", 'ScrollEventHandler', undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "eb577rwRR5ASa6OivNuPgEY", "SeriesComponent", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "18f47v83XtI64h+ISwRgq3A", "BoneFollow", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "44834DdFVNM2reoglp7HL82", "NewBoneFollow", undefined);
      var _0x5af9e5;
      !function (_0x17ad0f) {
        _0x17ad0f[_0x17ad0f['default'] = 0x1] = "default";
      }(_0x5af9e5 || (_0x5af9e5 = {}));
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "2da2cEqApNLm7hZxNo+Lfkx", "NewSlotColorFollow", undefined);
      var _0x11f905;
      !function (_0x30f488) {
        _0x30f488[_0x30f488["default"] = 0x1] = "default";
      }(_0x11f905 || (_0x11f905 = {}));
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "866f1RjwMhFfapt6JLtipxM", "SkeletonSync", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "e2171n/i+xGsoWeQMXewobE", "SlotActivator", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "e23desmKVBLjKgDg5KLcySp", "SlotColorFollow", undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "ff032nME8lBJKBpMlK8O/1z", 'SlotCulling', undefined);
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "f8b5e4BLTJNX7FPcFOEaBkq", "ZipBundleLoader", undefined);
      var _0x1acc50 = new Map();
      var _0x541602 = new Map();
      var _0x3881da = new Map();
      var _0x467583 = [];
      var _0x46bfda = function () {
        function _0x1164db() {
          this.loadedZipNames = new Array();
        }
        var _0x2ec515 = _0x1164db.prototype;
        _0x2ec515.downloadZip = function (_0x208232, _0x50f18a) {
          return new Promise(function (_0x5ec8f3) {
            var _0x288587 = _0x208232.match(/[^/]+$/);
            if (null !== _0x288587) {
              var _0x47032b = '' + _0x288587[0x0] + _0x50f18a + ".zip";
              _0xca4d39.downloader.downloadFile(_0x208232 + '/' + _0x47032b, {
                'xhrResponseType': 'arraybuffer'
              }, null, function (_0x3729ec, _0x266ab9) {
                _0x5ec8f3(_0x266ab9);
              });
            } else {
              _0x5ec8f3(null);
            }
          });
        };
        _0x2ec515.loadZip = function () {
          var _0x4bf8cc = _0x2988f4(_0x57ce7a().mark(function _0x5ab5f8(_0x5a5726, _0x30bfe1) {
            var _0x21779e;
            var _0x107f0d;
            var _0x335ab6;
            return _0x57ce7a().wrap(function (_0x36c3db) {
              for (;;) {
                switch (_0x36c3db.prev = _0x36c3db.next) {
                  case 0x0:
                    _0x21779e = _0x30bfe1 ? '.' + _0x30bfe1 : '';
                    _0x36c3db.next = 0x3;
                    return this.downloadZip(_0x5a5726, _0x21779e);
                  case 0x3:
                    if (null !== (_0x107f0d = _0x36c3db.sent)) {
                      _0x335ab6 = _0x5a5726.replace(/(.*?)\/assets\//, "assets/");
                      globalThis.fflate.unzip(new Uint8Array(_0x107f0d), function (_0x19675c, _0xe26063) {
                        if (_0x19675c) {
                          console.warn("Unzip failed:", _0x19675c.message);
                        } else {
                          Object.keys(_0xe26063).forEach(function (_0x209dda) {
                            _0x1acc50.set(_0x5a5726 + '/' + _0x209dda, _0xe26063[_0x209dda]);
                            _0x1acc50.set(_0x335ab6 + '/' + _0x209dda, _0xe26063[_0x209dda]);
                          });
                        }
                      });
                    }
                  case 0x5:
                  case "end":
                    return _0x36c3db.stop();
                }
              }
            }, _0x5ab5f8, this);
          }));
          return function (_0xc3ab8b, _0x519670) {
            return _0x4bf8cc.apply(this, arguments);
          };
        }();
        _0x2ec515.init = function () {
          if (globalThis.fflate) {
            var _0x5d1e6c = Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, "response");
            Object.defineProperty(XMLHttpRequest.prototype, "response", {
              'get': function () {
                return this.ZipCacheUrl ? _0x541602.get(this.ZipCacheUrl) : _0x5d1e6c.get.call(this);
              },
              'set': function (_0x3366df) {},
              'configurable': true
            });
            var _0x1be816 = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function (_0x2b7539, _0xa1cbdf, _0x4e79b5, _0x51c458, _0x268f19) {
              function _0x1216cc() {
                var _0x497f8c = this.status >= 0xc8 && this.status < 0x12c || 0x130 == this.status;
                if (!(this.readyState != XMLHttpRequest.DONE || _0x497f8c || _0x467583.includes(_0xa1cbdf))) {
                  _0x467583.push(_0xa1cbdf);
                  _0x12b5bc(0x2bd, this.status);
                  _0x12b5bc(0x2be, _0xa1cbdf);
                }
                this.removeEventListener("load", _0x1216cc);
              }
              if (_0x1acc50.has(_0xa1cbdf)) {
                this.ZipCacheUrl = _0xa1cbdf;
              }
              this.addEventListener('load', _0x1216cc.bind(this));
              return _0x1be816.apply(this, arguments);
            };
            var _0x12f599 = XMLHttpRequest.prototype.send;
            XMLHttpRequest.prototype.send = _0x2988f4(_0x57ce7a().mark(function _0x4bc021(_0x5c94ac) {
              var _0x2bf947;
              var _0x3d8072;
              var _0x379787;
              var _0x20a338;
              var _0x38c8b0;
              var _0x1dd73c;
              var _0x34fdd4;
              var _0x19fb2e;
              return _0x57ce7a().wrap(function (_0x12cb06) {
                for (;;) {
                  switch (_0x12cb06.prev = _0x12cb06.next) {
                    case 0x0:
                      if (!this.ZipCacheUrl) {
                        _0x12cb06.next = 0x1a;
                        break;
                      }
                      if (_0x541602.has(this.ZipCacheUrl)) {
                        _0x12cb06.next = 0x18;
                        break;
                      }
                      _0x2bf947 = this.responseType;
                      _0x3d8072 = _0x1acc50.get(this.ZipCacheUrl);
                      _0x379787 = null;
                      _0x12cb06.t0 = _0x2bf947;
                      _0x12cb06.next = "arraybuffer" === _0x12cb06.t0 ? 0x8 : 'json' === _0x12cb06.t0 ? 0xa : 'text' === _0x12cb06.t0 ? 0xe : 0x11;
                      break;
                    case 0x8:
                      _0x379787 = _0x3d8072.buffer ? _0x3d8072.buffer : _0x3d8072;
                      return _0x12cb06.abrupt("break", 0x12);
                    case 0xa:
                      _0x20a338 = new TextDecoder();
                      _0x38c8b0 = _0x20a338.decode(_0x3d8072);
                      _0x379787 = JSON.parse(_0x38c8b0);
                      return _0x12cb06.abrupt("break", 0x12);
                    case 0xe:
                      _0x1dd73c = new TextDecoder();
                      _0x379787 = _0x1dd73c.decode(_0x3d8072);
                      return _0x12cb06.abrupt("break", 0x12);
                    case 0x11:
                      console.error("Unknown type in zipCache:", _0x2bf947);
                    case 0x12:
                      if (_0x34fdd4 = _0x3881da.get(this.ZipCacheUrl)) {
                        _0x541602["delete"](this.ZipCacheUrl + "@version" + _0x34fdd4);
                        _0x3881da["delete"](this.ZipCacheUrl);
                      }
                      _0x19fb2e = performance.now();
                      _0x3881da.set(this.ZipCacheUrl, _0x19fb2e);
                      this.ZipCacheUrl = this.ZipCacheUrl + '@version' + _0x19fb2e;
                      _0x541602.set(this.ZipCacheUrl, _0x379787);
                    case 0x18:
                      this.onload();
                      return _0x12cb06.abrupt("return");
                    case 0x1a:
                      return _0x12cb06.abrupt("return", _0x12f599.apply(this, arguments));
                    case 0x1b:
                    case 'end':
                      return _0x12cb06.stop();
                  }
                }
              }, _0x4bc021, this);
            }));
          } else {
            console.error("fflate is not found.");
          }
        };
        return _0x1164db;
      }();
      function _0x12b5bc(_0x5877b0, _0x3cd139) {
        if (!_0x38d9e8.isNative) {
          var _0x115217 = "https://" + window.location.host + '/';
          if (-0x1 == _0x115217.indexOf("localhost") && 0x1 != /^http(s)?:\/\/([0-9]{1,3}\.){3}[0-9]{1,3}(:[0-9]+)?\/.*?$/.test(_0x115217)) {
            var _0x216427 = 0x0;
            switch (_0x38d9e8.browserType) {
              case _0x38d9e8.BrowserType.CHROME:
                _0x216427 = 0x1;
                break;
              case _0x38d9e8.BrowserType.SAFARI:
                _0x216427 = 0x2;
                break;
              case _0x38d9e8.BrowserType.IE:
                _0x216427 = 0x3;
                break;
              case _0x38d9e8.BrowserType.UC:
                _0x216427 = 0x4;
                break;
              case _0x38d9e8.BrowserType.QQ:
              case _0x38d9e8.BrowserType.MOBILE_QQ:
                _0x216427 = 0x5;
                break;
              case _0x38d9e8.BrowserType.FIREFOX:
                _0x216427 = 0x6;
            }
            var _0x28e1ad = 0x0;
            switch (_0x38d9e8.os) {
              case _0x38d9e8.OS.ANDROID:
                _0x28e1ad = 0x1;
                break;
              case _0x38d9e8.OS.IOS:
                _0x28e1ad = 0x2;
                break;
              case _0x38d9e8.OS.WINDOWS:
                _0x28e1ad = 0x3;
                break;
              default:
                _0x28e1ad = 0x0;
            }
            var _0x320742 = _0x2c6e08('apiId') || '-1';
            var _0x4ea1e6 = _0x2c6e08("ssoKey") || '1';
            var _0x241fb9 = _0x2c6e08("gameID") || '-1';
            var _0x24afa5 = "https://" + (_0x2c6e08("domain_platform") || _0x2c6e08('gs') || "gnidnawcs").split('').reverse().join('') + "/webservice/event/assetUpdate?";
            _0x9a7138(_0x24afa5 += "?AccountID=-1&GameID=" + _0x241fb9 + "&GameVersion=" + new Date().getTime() + "&EventID=" + _0x5877b0 + "&EventValue=" + _0x3cd139 + "&BrowserSystem=" + _0x216427 + "&DeviceSystem=" + _0x28e1ad + '&CreateTime=' + new Date().toISOString() + '&Screen=0&SSOKey=' + _0x4ea1e6 + "&ApiId=" + _0x320742 + "&LogIndex=11");
          }
        }
      }
      function _0x9a7138(_0x24032b) {
        var _0x18852e = {
          'Accept': "application/json, text/javascript, text/plain"
        };
        var _0x2ca1dc = new XMLHttpRequest();
        _0x2ca1dc.open("GET", _0x24032b, true);
        if (_0x18852e) {
          Object.keys(_0x18852e).forEach(function (_0x5aeb85) {
            return _0x2ca1dc.setRequestHeader(_0x5aeb85, _0x18852e[_0x5aeb85]);
          });
        }
        _0x2ca1dc.timeout = 0x1388;
        _0x2ca1dc.onload = function () {};
        _0x2ca1dc.onerror = function () {};
        _0x2ca1dc.ontimeout = function () {};
        _0x2ca1dc.send();
      }
      function _0x2c6e08(_0x279806, _0x294331) {
        if (undefined === _0x294331) {
          _0x294331 = null;
        }
        if (!_0x294331) {
          _0x294331 = _0x336599();
        }
        _0x279806 = _0x279806.replace(/[[\]]/g, "\\$&");
        var _0x46c619 = new RegExp("[?&]" + _0x279806 + "(=([^&#]*)|&|#|$)").exec(_0x294331);
        return _0x46c619 ? _0x46c619[0x2] ? decodeURIComponent(_0x46c619[0x2].replace(/\+/g, " ")) : '' : null;
      }
      function _0x336599() {
        var _0x12863a = window.location.href;
        var _0x544c09 = _0x2c6e08('replaydata', _0x12863a);
        if (!_0x544c09) {
          return _0x12863a;
        }
        var _0x52a770 = '0'.charCodeAt(0x0);
        var _0x39b9c0 = '9'.charCodeAt(0x0);
        var _0x4da36c = 'a'.charCodeAt(0x0);
        var _0x5044b8 = 'z'.charCodeAt(0x0);
        var _0xb9bac8 = 'A'.charCodeAt(0x0);
        var _0x42c8a3 = 'Z'.charCodeAt(0x0);
        var _0x388c89 = '';
        for (var _0x40b1f5 = 0x0; _0x40b1f5 < _0x544c09.length; _0x40b1f5++) {
          var _0x47df79 = _0x544c09.charCodeAt(_0x40b1f5);
          if (_0x47df79 >= _0x52a770 && _0x47df79 <= _0x39b9c0) {
            _0x47df79 = _0x39b9c0 - (_0x47df79 - _0x52a770);
            _0x388c89 += String.fromCharCode(_0x47df79);
          } else if (_0x47df79 >= _0x4da36c && _0x47df79 <= _0x5044b8 && _0x40b1f5 % 0x2 == 0x0) {
            _0x47df79 = _0x5044b8 - (_0x47df79 - _0x4da36c);
            _0x388c89 += String.fromCharCode(_0x47df79);
          } else if (_0x47df79 >= _0xb9bac8 && _0x47df79 <= _0x42c8a3 && _0x40b1f5 % 0x3 == 0x0) {
            _0x47df79 = _0x42c8a3 - (_0x47df79 - _0xb9bac8);
            _0x388c89 += String.fromCharCode(_0x47df79);
          } else {
            _0x388c89 += String.fromCharCode(_0x47df79);
          }
        }
        var _0x4471f6 = _0x12863a.split("replaydata=" + _0x544c09);
        _0x4471f6.join('');
        return _0x4471f6 + atob(_0x388c89);
      }
      var _0x55cf43 = globalThis.__zipBundleLoader;
      var _0x2927d7;
      var _0x3f069e;
      var _0x261763;
      var _0x47a2ba;
      var _0x6de222;
      var _0x32c638;
      var _0x45bcda;
      var _0x3ef172;
      var _0x2c11f1;
      var _0x253f45;
      var _0x2f8766;
      var _0x2bfb72;
      var _0xd3ed30;
      var _0x740bec;
      var _0x4a2f73;
      var _0x52b898;
      var _0x5342fe;
      var _0x1bb60a;
      if (globalThis.fflate && !_0x55cf43) {
        _0x55cf43 = new _0x46bfda();
        globalThis.__zipBundleLoader = _0x55cf43;
        _0x55cf43.init();
      }
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "c933866GvpLKaZlVxLlOz0C", 'FeatureManagerComponent', undefined);
      var _0x49a747 = _0x4b56bb.ccclass;
      var _0x2c0ee0 = _0x4b56bb.property;
      var _0x14b3f8;
      !function (_0x203af5) {
        _0x203af5[_0x203af5.CommonMainBundle = 0x0] = 'CommonMainBundle';
        _0x203af5[_0x203af5.CommonBundle = 0x1] = "CommonBundle";
        _0x203af5[_0x203af5.OtherBundle = 0x2] = "OtherBundle";
        _0x203af5[_0x203af5.DefaultLangBundle = 0x3] = "DefaultLangBundle";
        _0x203af5[_0x203af5.LangTextBundle = 0x4] = "LangTextBundle";
        _0x203af5[_0x203af5.GameBundle = 0x5] = "GameBundle";
      }(_0x14b3f8 || (_0x14b3f8 = {}));
      var _0x4cdf10;
      var _0x2eae4a;
      !function (_0x4cab10) {
        _0x4cab10[_0x4cab10.None = 0x0] = "None";
        _0x4cab10[_0x4cab10.AutoPlaySettingPanel = 0x1] = "AutoPlaySettingPanel";
        _0x4cab10[_0x4cab10.AutoPlaySettingPanel_DFI = 0x2] = "AutoPlaySettingPanel_DFI";
        _0x4cab10[_0x4cab10.AutoPlaySettingPanel_DFIII = 0x3] = "AutoPlaySettingPanel_DFIII";
        _0x4cab10[_0x4cab10.AutoPlaySettingPanel_BS = 0x4] = "AutoPlaySettingPanel_BS";
        _0x4cab10[_0x4cab10.AutoPlaySetting_AG2 = 0x5] = "AutoPlaySetting_AG2";
        _0x4cab10[_0x4cab10.AutoPlaySetting_FD = 0x6] = "AutoPlaySetting_FD";
        _0x4cab10[_0x4cab10.AutoPlaySettingPanel_MS = 0x7] = "AutoPlaySettingPanel_MS";
      }(_0x4cdf10 || (_0x4cdf10 = {}));
      (function (_0x5eaf67) {
        _0x5eaf67[_0x5eaf67.None = 0x0] = "None";
        _0x5eaf67[_0x5eaf67.Dark = 0x1] = "Dark";
      })(_0x2eae4a || (_0x2eae4a = {}));
      _0x2927d7 = _0x49a747("StyleSetting");
      _0x3f069e = _0x2c0ee0({
        'type': _0x314cbe,
        'tooltip': "是否有骰子造型"
      });
      _0x261763 = _0x2c0ee0({
        'type': _0x314cbe,
        'tooltip': '是否有萬聖造型'
      });
      _0x47a2ba = _0x2c0ee0({
        'type': _0x314cbe,
        'tooltip': "是否有聖誕造型"
      });
      _0x6de222 = _0x2c0ee0({
        'type': _0x314cbe,
        'tooltip': "是否有OKBET廠商造型"
      });
      _0x32c638 = _0x2c0ee0({
        'type': _0x1ce4de(_0x2eae4a),
        'tooltip': '系列'
      });
      _0x45bcda = function () {
        _0x588ec8(this, "HasDice", _0x3ef172, this);
        _0x588ec8(this, "HasHolloween", _0x2c11f1, this);
        _0x588ec8(this, "HasXmas", _0x253f45, this);
        _0x588ec8(this, 'HasOkbet', _0x2f8766, this);
        _0x588ec8(this, "Series", _0x2bfb72, this);
      };
      _0x3ef172 = _0x4fcd77(_0x45bcda.prototype, "HasDice", [_0x3f069e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x2c11f1 = _0x4fcd77(_0x45bcda.prototype, 'HasHolloween', [_0x261763], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x253f45 = _0x4fcd77(_0x45bcda.prototype, "HasXmas", [_0x47a2ba], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x2f8766 = _0x4fcd77(_0x45bcda.prototype, "HasOkbet", [_0x6de222], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x2bfb72 = _0x4fcd77(_0x45bcda.prototype, 'Series', [_0x32c638], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return _0x2eae4a.None;
        }
      });
      _0xd3ed30 = _0x49a747('PlayTypeSetting');
      _0x740bec = _0x2c0ee0({
        'type': _0x314cbe,
        'tooltip': "Match"
      });
      _0x4a2f73 = _0x2c0ee0({
        'type': _0x314cbe,
        'tooltip': "Break"
      });
      _0x52b898 = function () {
        _0x588ec8(this, "Match", _0x5342fe, this);
        _0x588ec8(this, "Break", _0x1bb60a, this);
      };
      _0x5342fe = _0x4fcd77(_0x52b898.prototype, "Match", [_0x740bec], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x1bb60a = _0x4fcd77(_0x52b898.prototype, "Break", [_0x4a2f73], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x2189a4._RF.pop();
      _0x2189a4._RF.push({}, "89025dALbBFj7AFo+6o3xYM", "SwipeScreen", undefined);
      _0x2189a4._RF.pop();
    }
  };
});
(function (_0x55201a) {
  _0x55201a('virtual:///prerequisite-imports/main', 'chunks:///main.js');
})(function (_0xe45427, _0x20ea78) {
  System.register(_0xe45427, [_0x20ea78], function (_0x29f4e4, _0x52ec8e) {
    return {
      'setters': [function (_0x19a527) {
        var _0x238057 = {};
        for (var _0x56c7ee in _0x19a527) {
          if (_0x56c7ee !== "default" && _0x56c7ee !== "__esModule") {
            _0x238057[_0x56c7ee] = _0x19a527[_0x56c7ee];
          }
        }
        _0x29f4e4(_0x238057);
      }],
      'execute': function () {}
    };
  });
});