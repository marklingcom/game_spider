System.register("chunks:///main.js", ['cc'], function (_0x556426, _0x38a36d) {
  'use strict';

  var _0x361286;
  var _0x55c899;
  var _0x2bf5c4;
  var _0x4f3334;
  var _0x52589a;
  var _0x312ceb;
  var _0x5b954c;
  var _0xf24552;
  var _0x1923c2;
  var _0x5527ae;
  var _0x334191;
  var _0xc34e6a;
  var _0x3fe2b7;
  var _0x4980af;
  var _0xbe042;
  var _0x201890;
  var _0x178207;
  var _0x2dfe06;
  var _0x18aeb9;
  var _0x17cf83;
  var _0x582ccd;
  var _0x4a7cfd;
  var _0x42b4f1;
  var _0x52c8bd;
  var _0x4971f0;
  var _0x1db182;
  var _0x49c11c;
  var _0x56ba95;
  var _0x42e530;
  var _0xc68c66;
  var _0x4d5c69;
  var _0x5306f4;
  var _0x1c6036;
  var _0x16b202;
  var _0x3d26ca;
  var _0x152b91;
  var _0x12d84b;
  var _0x41e89f;
  var _0x3ecc19;
  var _0x7fbc95;
  var _0x104cb8;
  var _0x19c092;
  var _0x3ddc15;
  var _0x3110eb;
  var _0x4bf712;
  var _0x3dc388;
  var _0x1efa6a;
  var _0x588d22;
  var _0x10faa1;
  var _0xe362bf;
  var _0x3d1413;
  var _0x138527;
  var _0x27a4cf;
  var _0x402870;
  var _0x381555;
  var _0x12dd7e;
  var _0x350709;
  var _0x20b4a0;
  var _0x4afe3f;
  var _0x2a09c3;
  var _0x44b831;
  var _0x49e376;
  var _0x14efe9;
  var _0x483ff0;
  var _0x5e5c0a;
  var _0x2c34c3;
  var _0x1f5e41;
  var _0x380ba9;
  var _0x1486cf;
  var _0x2316c2;
  var _0x3d8005;
  var _0x2798b8;
  return {
    'setters': [function (_0x5213d7) {
      _0x361286 = _0x5213d7.cclegacy;
      _0x55c899 = _0x5213d7._decorator;
      _0x2bf5c4 = _0x5213d7.Node;
      _0x4f3334 = _0x5213d7.log;
      _0x52589a = _0x5213d7.UIOpacity;
      _0x312ceb = _0x5213d7.error;
      _0x5b954c = _0x5213d7.tween;
      _0xf24552 = _0x5213d7.Component;
      _0x1923c2 = _0x5213d7.v3;
      _0x5527ae = _0x5213d7.Enum;
      _0x334191 = _0x5213d7.v2;
      _0xc34e6a = _0x5213d7.macro;
      _0x3fe2b7 = _0x5213d7.Label;
      _0x4980af = _0x5213d7.Sprite;
      _0xbe042 = _0x5213d7.BitmapFont;
      _0x201890 = _0x5213d7.UITransform;
      _0x178207 = _0x5213d7.Vec3;
      _0x2dfe06 = _0x5213d7.warn;
      _0x18aeb9 = _0x5213d7.color;
      _0x17cf83 = _0x5213d7.instantiate;
      _0x582ccd = _0x5213d7.Animation;
      _0x4a7cfd = _0x5213d7.sp;
      _0x42b4f1 = _0x5213d7.Prefab;
      _0x52c8bd = _0x5213d7.Button;
      _0x4971f0 = _0x5213d7.CCFloat;
      _0x1db182 = _0x5213d7.director;
      _0x49c11c = _0x5213d7.Director;
      _0x56ba95 = _0x5213d7.UIRenderer;
      _0x42e530 = _0x5213d7.RichText;
      _0xc68c66 = _0x5213d7.CCBoolean;
      _0x4d5c69 = _0x5213d7.Tween;
      _0x5306f4 = _0x5213d7.Color;
      _0x1c6036 = _0x5213d7.JsonAsset;
      _0x16b202 = _0x5213d7.math;
      _0x3d26ca = _0x5213d7.SpriteFrame;
      _0x152b91 = _0x5213d7.Size;
      _0x12d84b = _0x5213d7.NodeEventType;
      _0x41e89f = _0x5213d7.AnimationClip;
      _0x3ecc19 = _0x5213d7.SpriteAtlas;
      _0x7fbc95 = _0x5213d7.profiler;
      _0x104cb8 = _0x5213d7.input;
      _0x19c092 = _0x5213d7.Input;
      _0x3ddc15 = _0x5213d7.KeyCode;
      _0x3110eb = _0x5213d7.screen;
      _0x4bf712 = _0x5213d7.view;
      _0x3dc388 = _0x5213d7.ResolutionPolicy;
      _0x1efa6a = _0x5213d7.ccenum;
      _0x588d22 = _0x5213d7.EventHandler;
      _0x10faa1 = _0x5213d7.assetManager;
      _0xe362bf = _0x5213d7.lerp;
      _0x3d1413 = _0x5213d7.TransformBit;
      _0x138527 = _0x5213d7.CCString;
      _0x27a4cf = _0x5213d7.Material;
      _0x402870 = _0x5213d7.Gradient;
      _0x381555 = _0x5213d7.v4;
      _0x12dd7e = _0x5213d7.Texture2D;
      _0x350709 = _0x5213d7.clamp01;
      _0x20b4a0 = _0x5213d7.EffectAsset;
      _0x4afe3f = _0x5213d7.CCInteger;
      _0x2a09c3 = _0x5213d7.ImageAsset;
      _0x44b831 = _0x5213d7.ParticleSystem2D;
      _0x49e376 = _0x5213d7.Vec2;
      _0x14efe9 = _0x5213d7.TweenSystem;
      _0x483ff0 = _0x5213d7.ScrollView;
      _0x5e5c0a = _0x5213d7.isValid;
      _0x2c34c3 = _0x5213d7.CCClass;
      _0x1f5e41 = _0x5213d7.sys;
      _0x380ba9 = _0x5213d7.js;
      _0x1486cf = _0x5213d7.settings;
      _0x2316c2 = _0x5213d7.Settings;
      _0x3d8005 = _0x5213d7.VERSION;
      _0x2798b8 = _0x5213d7.find;
    }],
    'execute': function () {
      function _0x17c453() {
        _0x17c453 = function () {
          return _0x2363fd;
        };
        var _0x2363fd = {};
        var _0x41c2da = Object.prototype;
        var _0x4fdbb7 = _0x41c2da.hasOwnProperty;
        var _0x26d32a = "function" == typeof Symbol ? Symbol : {};
        var _0xa8ba = _0x26d32a.iterator || '@@iterator';
        var _0x1d6c97 = _0x26d32a.asyncIterator || "@@asyncIterator";
        var _0x454535 = _0x26d32a.toStringTag || '@@toStringTag';
        function _0x410283(_0x50d38d, _0x37a340, _0x2bc3f3) {
          Object.defineProperty(_0x50d38d, _0x37a340, {
            'value': _0x2bc3f3,
            'enumerable': true,
            'configurable': true,
            'writable': true
          });
          return _0x50d38d[_0x37a340];
        }
        try {
          _0x410283({}, '');
        } catch (_0xa13ce6) {
          _0x410283 = function (_0x283424, _0x295ebe, _0xf6e17f) {
            return _0x283424[_0x295ebe] = _0xf6e17f;
          };
        }
        function _0x4aed16(_0x3fef57, _0x34a139, _0xb8b1a5, _0x45314f) {
          var _0x25c76d = _0x34a139 && _0x34a139.prototype instanceof _0x55bb08 ? _0x34a139 : _0x55bb08;
          var _0x4a15ec = Object.create(_0x25c76d.prototype);
          var _0x3729c1 = new _0x2cab94(_0x45314f || []);
          _0x4a15ec._invoke = function (_0x2ea1a5, _0x1a405b, _0xcd6393) {
            var _0x59e099 = "suspendedStart";
            return function (_0x1548b5, _0x242a9b) {
              if ("executing" === _0x59e099) {
                throw new Error("Generator is already running");
              }
              if ('completed' === _0x59e099) {
                if ('throw' === _0x1548b5) {
                  throw _0x242a9b;
                }
                return {
                  'value': undefined,
                  'done': true
                };
              }
              _0xcd6393.method = _0x1548b5;
              for (_0xcd6393.arg = _0x242a9b;;) {
                var _0x2daf28 = _0xcd6393.delegate;
                if (_0x2daf28) {
                  var _0x448aa = _0x29cedd(_0x2daf28, _0xcd6393);
                  if (_0x448aa) {
                    if (_0x448aa === _0x4f9f24) {
                      continue;
                    }
                    return _0x448aa;
                  }
                }
                if ("next" === _0xcd6393.method) {
                  _0xcd6393.sent = _0xcd6393._sent = _0xcd6393.arg;
                } else {
                  if ("throw" === _0xcd6393.method) {
                    if ("suspendedStart" === _0x59e099) {
                      _0x59e099 = "completed";
                      throw _0xcd6393.arg;
                    }
                    _0xcd6393.dispatchException(_0xcd6393.arg);
                  } else if ('return' === _0xcd6393.method) {
                    _0xcd6393.abrupt("return", _0xcd6393.arg);
                  }
                }
                _0x59e099 = "executing";
                var _0x2d0160 = _0x121383(_0x2ea1a5, _0x1a405b, _0xcd6393);
                if ("normal" === _0x2d0160.type) {
                  _0x59e099 = _0xcd6393.done ? 'completed' : "suspendedYield";
                  if (_0x2d0160.arg === _0x4f9f24) {
                    continue;
                  }
                  return {
                    'value': _0x2d0160.arg,
                    'done': _0xcd6393.done
                  };
                }
                if ("throw" === _0x2d0160.type) {
                  _0x59e099 = 'completed';
                  _0xcd6393.method = "throw";
                  _0xcd6393.arg = _0x2d0160.arg;
                }
              }
            };
          }(_0x3fef57, _0xb8b1a5, _0x3729c1);
          return _0x4a15ec;
        }
        function _0x121383(_0x514b21, _0x433401, _0x5779fc) {
          try {
            return {
              'type': "normal",
              'arg': _0x514b21.call(_0x433401, _0x5779fc)
            };
          } catch (_0x3aba02) {
            return {
              'type': 'throw',
              'arg': _0x3aba02
            };
          }
        }
        _0x2363fd.wrap = _0x4aed16;
        var _0x4f9f24 = {};
        function _0x55bb08() {}
        function _0x2fc198() {}
        function _0x1a450c() {}
        var _0x47a2b6 = {};
        _0x410283(_0x47a2b6, _0xa8ba, function () {
          return this;
        });
        var _0x9637c5 = Object.getPrototypeOf;
        var _0x50eaf6 = _0x9637c5 && _0x9637c5(_0x9637c5(_0x545c77([])));
        if (_0x50eaf6 && _0x50eaf6 !== _0x41c2da && _0x4fdbb7.call(_0x50eaf6, _0xa8ba)) {
          _0x47a2b6 = _0x50eaf6;
        }
        var _0xfd33e0 = _0x1a450c.prototype = _0x55bb08.prototype = Object.create(_0x47a2b6);
        function _0x135872(_0x3ea20e) {
          ["next", "throw", "return"].forEach(function (_0x23aa29) {
            _0x410283(_0x3ea20e, _0x23aa29, function (_0x4c860f) {
              return this._invoke(_0x23aa29, _0x4c860f);
            });
          });
        }
        function _0x35c9f2(_0x315b89, _0x433fd4) {
          function _0x3d8cfe(_0x1938d1, _0x48cf44, _0x5e89d7, _0x17b221) {
            var _0x10bd22 = _0x121383(_0x315b89[_0x1938d1], _0x315b89, _0x48cf44);
            if ("throw" !== _0x10bd22.type) {
              var _0x249350 = _0x10bd22.arg;
              var _0x2bc0c4 = _0x249350.value;
              return _0x2bc0c4 && "object" == typeof _0x2bc0c4 && _0x4fdbb7.call(_0x2bc0c4, "__await") ? _0x433fd4.resolve(_0x2bc0c4.__await).then(function (_0x58155f) {
                _0x3d8cfe("next", _0x58155f, _0x5e89d7, _0x17b221);
              }, function (_0x3d435d) {
                _0x3d8cfe("throw", _0x3d435d, _0x5e89d7, _0x17b221);
              }) : _0x433fd4.resolve(_0x2bc0c4).then(function (_0x209be2) {
                _0x249350.value = _0x209be2;
                _0x5e89d7(_0x249350);
              }, function (_0x8044e7) {
                return _0x3d8cfe("throw", _0x8044e7, _0x5e89d7, _0x17b221);
              });
            }
            _0x17b221(_0x10bd22.arg);
          }
          var _0x1dc12a;
          this._invoke = function (_0x33cd56, _0xb53d4) {
            function _0x37db5b() {
              return new _0x433fd4(function (_0x143cac, _0x41b0c7) {
                _0x3d8cfe(_0x33cd56, _0xb53d4, _0x143cac, _0x41b0c7);
              });
            }
            return _0x1dc12a = _0x1dc12a ? _0x1dc12a.then(_0x37db5b, _0x37db5b) : _0x37db5b();
          };
        }
        function _0x29cedd(_0x318569, _0x21e57b) {
          var _0x121c90 = _0x318569.iterator[_0x21e57b.method];
          if (undefined === _0x121c90) {
            _0x21e57b.delegate = null;
            if ('throw' === _0x21e57b.method) {
              if (_0x318569.iterator["return"] && (_0x21e57b.method = "return", _0x21e57b.arg = undefined, _0x29cedd(_0x318569, _0x21e57b), "throw" === _0x21e57b.method)) {
                return _0x4f9f24;
              }
              _0x21e57b.method = "throw";
              _0x21e57b.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return _0x4f9f24;
          }
          var _0x4b0d6f = _0x121383(_0x121c90, _0x318569.iterator, _0x21e57b.arg);
          if ("throw" === _0x4b0d6f.type) {
            _0x21e57b.method = 'throw';
            _0x21e57b.arg = _0x4b0d6f.arg;
            _0x21e57b.delegate = null;
            return _0x4f9f24;
          }
          var _0x46a04b = _0x4b0d6f.arg;
          return _0x46a04b ? _0x46a04b.done ? (_0x21e57b[_0x318569.resultName] = _0x46a04b.value, _0x21e57b.next = _0x318569.nextLoc, "return" !== _0x21e57b.method && (_0x21e57b.method = "next", _0x21e57b.arg = undefined), _0x21e57b.delegate = null, _0x4f9f24) : _0x46a04b : (_0x21e57b.method = "throw", _0x21e57b.arg = new TypeError("iterator result is not an object"), _0x21e57b.delegate = null, _0x4f9f24);
        }
        function _0x31e320(_0x156a7e) {
          var _0x187745 = {
            'tryLoc': _0x156a7e[0x0]
          };
          if (0x1 in _0x156a7e) {
            _0x187745.catchLoc = _0x156a7e[0x1];
          }
          if (0x2 in _0x156a7e) {
            _0x187745.finallyLoc = _0x156a7e[0x2];
            _0x187745.afterLoc = _0x156a7e[0x3];
          }
          this.tryEntries.push(_0x187745);
        }
        function _0x3596fc(_0x242f68) {
          var _0x2b6558 = _0x242f68.completion || {};
          _0x2b6558.type = "normal";
          delete _0x2b6558.arg;
          _0x242f68.completion = _0x2b6558;
        }
        function _0x2cab94(_0x6d5fde) {
          this.tryEntries = [{
            'tryLoc': "root"
          }];
          _0x6d5fde.forEach(_0x31e320, this);
          this.reset(true);
        }
        function _0x545c77(_0xb18e85) {
          if (_0xb18e85) {
            var _0x699e3e = _0xb18e85[_0xa8ba];
            if (_0x699e3e) {
              return _0x699e3e.call(_0xb18e85);
            }
            if ("function" == typeof _0xb18e85.next) {
              return _0xb18e85;
            }
            if (!isNaN(_0xb18e85.length)) {
              var _0x2e435c = -0x1;
              var _0x4cf94e = function _0x13c103() {
                for (; ++_0x2e435c < _0xb18e85.length;) {
                  if (_0x4fdbb7.call(_0xb18e85, _0x2e435c)) {
                    _0x13c103.value = _0xb18e85[_0x2e435c];
                    _0x13c103.done = false;
                    return _0x13c103;
                  }
                }
                _0x13c103.value = undefined;
                _0x13c103.done = true;
                return _0x13c103;
              };
              return _0x4cf94e.next = _0x4cf94e;
            }
          }
          return {
            'next': _0x4f2b48
          };
        }
        function _0x4f2b48() {
          return {
            'value': undefined,
            'done': true
          };
        }
        _0x2fc198.prototype = _0x1a450c;
        _0x410283(_0xfd33e0, 'constructor', _0x1a450c);
        _0x410283(_0x1a450c, "constructor", _0x2fc198);
        _0x2fc198.displayName = _0x410283(_0x1a450c, _0x454535, 'GeneratorFunction');
        _0x2363fd.isGeneratorFunction = function (_0x1e8310) {
          var _0x485a7c = "function" == typeof _0x1e8310 && _0x1e8310.constructor;
          return !!_0x485a7c && (_0x485a7c === _0x2fc198 || "GeneratorFunction" === (_0x485a7c.displayName || _0x485a7c.name));
        };
        _0x2363fd.mark = function (_0x5c6cc9) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(_0x5c6cc9, _0x1a450c);
          } else {
            _0x5c6cc9.__proto__ = _0x1a450c;
            _0x410283(_0x5c6cc9, _0x454535, 'GeneratorFunction');
          }
          _0x5c6cc9.prototype = Object.create(_0xfd33e0);
          return _0x5c6cc9;
        };
        _0x2363fd.awrap = function (_0x2d8902) {
          return {
            '__await': _0x2d8902
          };
        };
        _0x135872(_0x35c9f2.prototype);
        _0x410283(_0x35c9f2.prototype, _0x1d6c97, function () {
          return this;
        });
        _0x2363fd.AsyncIterator = _0x35c9f2;
        _0x2363fd.async = function (_0x2b4798, _0x1571ee, _0x1cd726, _0x344126, _0x1248c2) {
          if (undefined === _0x1248c2) {
            _0x1248c2 = Promise;
          }
          var _0x42e4bc = new _0x35c9f2(_0x4aed16(_0x2b4798, _0x1571ee, _0x1cd726, _0x344126), _0x1248c2);
          return _0x2363fd.isGeneratorFunction(_0x1571ee) ? _0x42e4bc : _0x42e4bc.next().then(function (_0x4b2432) {
            return _0x4b2432.done ? _0x4b2432.value : _0x42e4bc.next();
          });
        };
        _0x135872(_0xfd33e0);
        _0x410283(_0xfd33e0, _0x454535, "Generator");
        _0x410283(_0xfd33e0, _0xa8ba, function () {
          return this;
        });
        _0x410283(_0xfd33e0, "toString", function () {
          return "[object Generator]";
        });
        _0x2363fd.keys = function (_0x1fb31e) {
          var _0x2d18c0 = [];
          for (var _0x3281f4 in _0x1fb31e) _0x2d18c0.push(_0x3281f4);
          _0x2d18c0.reverse();
          return function _0x32536e() {
            for (; _0x2d18c0.length;) {
              var _0xf6177a = _0x2d18c0.pop();
              if (_0xf6177a in _0x1fb31e) {
                _0x32536e.value = _0xf6177a;
                _0x32536e.done = false;
                return _0x32536e;
              }
            }
            _0x32536e.done = true;
            return _0x32536e;
          };
        };
        _0x2363fd.values = _0x545c77;
        _0x2cab94.prototype = {
          'constructor': _0x2cab94,
          'reset': function (_0x4928aa) {
            this.prev = 0x0;
            this.next = 0x0;
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(_0x3596fc);
            if (!_0x4928aa) {
              for (var _0x3bf7ca in this) if ('t' === _0x3bf7ca.charAt(0x0) && _0x4fdbb7.call(this, _0x3bf7ca) && !isNaN(+_0x3bf7ca.slice(0x1))) {
                this[_0x3bf7ca] = undefined;
              }
            }
          },
          'stop': function () {
            this.done = true;
            var _0x60f774 = this.tryEntries[0x0].completion;
            if ("throw" === _0x60f774.type) {
              throw _0x60f774.arg;
            }
            return this.rval;
          },
          'dispatchException': function (_0x474367) {
            if (this.done) {
              throw _0x474367;
            }
            var _0x425bf4 = this;
            function _0x563f71(_0xd2b4e3, _0x1ddf76) {
              _0x3791bb.type = "throw";
              _0x3791bb.arg = _0x474367;
              _0x425bf4.next = _0xd2b4e3;
              if (_0x1ddf76) {
                _0x425bf4.method = "next";
                _0x425bf4.arg = undefined;
              }
              return !!_0x1ddf76;
            }
            for (var _0x3bc3a3 = this.tryEntries.length - 0x1; _0x3bc3a3 >= 0x0; --_0x3bc3a3) {
              var _0x1082ad = this.tryEntries[_0x3bc3a3];
              var _0x3791bb = _0x1082ad.completion;
              if ('root' === _0x1082ad.tryLoc) {
                return _0x563f71("end");
              }
              if (_0x1082ad.tryLoc <= this.prev) {
                var _0x540dfb = _0x4fdbb7.call(_0x1082ad, "catchLoc");
                var _0x54be22 = _0x4fdbb7.call(_0x1082ad, "finallyLoc");
                if (_0x540dfb && _0x54be22) {
                  if (this.prev < _0x1082ad.catchLoc) {
                    return _0x563f71(_0x1082ad.catchLoc, true);
                  }
                  if (this.prev < _0x1082ad.finallyLoc) {
                    return _0x563f71(_0x1082ad.finallyLoc);
                  }
                } else {
                  if (_0x540dfb) {
                    if (this.prev < _0x1082ad.catchLoc) {
                      return _0x563f71(_0x1082ad.catchLoc, true);
                    }
                  } else {
                    if (!_0x54be22) {
                      throw new Error("try statement without catch or finally");
                    }
                    if (this.prev < _0x1082ad.finallyLoc) {
                      return _0x563f71(_0x1082ad.finallyLoc);
                    }
                  }
                }
              }
            }
          },
          'abrupt': function (_0x5513c8, _0x5d2cb6) {
            for (var _0x57a388 = this.tryEntries.length - 0x1; _0x57a388 >= 0x0; --_0x57a388) {
              var _0x364d42 = this.tryEntries[_0x57a388];
              if (_0x364d42.tryLoc <= this.prev && _0x4fdbb7.call(_0x364d42, "finallyLoc") && this.prev < _0x364d42.finallyLoc) {
                var _0x454992 = _0x364d42;
                break;
              }
            }
            if (_0x454992 && ("break" === _0x5513c8 || "continue" === _0x5513c8) && _0x454992.tryLoc <= _0x5d2cb6 && _0x5d2cb6 <= _0x454992.finallyLoc) {
              _0x454992 = null;
            }
            var _0xe96bf8 = _0x454992 ? _0x454992.completion : {};
            _0xe96bf8.type = _0x5513c8;
            _0xe96bf8.arg = _0x5d2cb6;
            return _0x454992 ? (this.method = 'next', this.next = _0x454992.finallyLoc, _0x4f9f24) : this.complete(_0xe96bf8);
          },
          'complete': function (_0x36fa28, _0x1e7eac) {
            if ("throw" === _0x36fa28.type) {
              throw _0x36fa28.arg;
            }
            if ("break" === _0x36fa28.type || "continue" === _0x36fa28.type) {
              this.next = _0x36fa28.arg;
            } else if ("return" === _0x36fa28.type) {
              this.rval = this.arg = _0x36fa28.arg;
              this.method = "return";
              this.next = "end";
            } else if ("normal" === _0x36fa28.type && _0x1e7eac) {
              this.next = _0x1e7eac;
            }
            return _0x4f9f24;
          },
          'finish': function (_0x56913c) {
            for (var _0x3259ff = this.tryEntries.length - 0x1; _0x3259ff >= 0x0; --_0x3259ff) {
              var _0x118e80 = this.tryEntries[_0x3259ff];
              if (_0x118e80.finallyLoc === _0x56913c) {
                this.complete(_0x118e80.completion, _0x118e80.afterLoc);
                _0x3596fc(_0x118e80);
                return _0x4f9f24;
              }
            }
          },
          'catch': function (_0x275bfb) {
            for (var _0x2c3e6b = this.tryEntries.length - 0x1; _0x2c3e6b >= 0x0; --_0x2c3e6b) {
              var _0xbf5357 = this.tryEntries[_0x2c3e6b];
              if (_0xbf5357.tryLoc === _0x275bfb) {
                var _0x2de6ee = _0xbf5357.completion;
                if ("throw" === _0x2de6ee.type) {
                  var _0x23eb37 = _0x2de6ee.arg;
                  _0x3596fc(_0xbf5357);
                }
                return _0x23eb37;
              }
            }
            throw new Error("illegal catch attempt");
          },
          'delegateYield': function (_0x35f5d0, _0x26f85d, _0x590f37) {
            this.delegate = {
              'iterator': _0x545c77(_0x35f5d0),
              'resultName': _0x26f85d,
              'nextLoc': _0x590f37
            };
            if ('next' === this.method) {
              this.arg = undefined;
            }
            return _0x4f9f24;
          }
        };
        return _0x2363fd;
      }
      function _0x2bbecc(_0x3441b4, _0x426672, _0x4efe46, _0x56e88a, _0x21221c, _0x31bc03, _0x30cf11) {
        try {
          var _0x2c5669 = _0x3441b4[_0x31bc03](_0x30cf11);
          var _0x586b5d = _0x2c5669.value;
        } catch (_0x5c4f74) {
          return void _0x4efe46(_0x5c4f74);
        }
        if (_0x2c5669.done) {
          _0x426672(_0x586b5d);
        } else {
          Promise.resolve(_0x586b5d).then(_0x56e88a, _0x21221c);
        }
      }
      function _0x2b8ecf(_0x582bf1) {
        return function () {
          var _0xfd6ff = this;
          return new Promise(function (_0x49cf3f, _0x187053) {
            var _0x1a9354 = _0x582bf1.apply(_0xfd6ff, arguments);
            function _0x30ea1e(_0x2ade11) {
              _0x2bbecc(_0x1a9354, _0x49cf3f, _0x187053, _0x30ea1e, _0x4fceae, 'next', _0x2ade11);
            }
            function _0x4fceae(_0x3e7a64) {
              _0x2bbecc(_0x1a9354, _0x49cf3f, _0x187053, _0x30ea1e, _0x4fceae, "throw", _0x3e7a64);
            }
            _0x30ea1e(undefined);
          });
        };
      }
      function _0x6dece7(_0x381dc3, _0x2454d7) {
        for (var _0x2791ef = 0x0; _0x2791ef < _0x2454d7.length; _0x2791ef++) {
          var _0x2ff62d = _0x2454d7[_0x2791ef];
          _0x2ff62d.enumerable = _0x2ff62d.enumerable || false;
          _0x2ff62d.configurable = true;
          if ("value" in _0x2ff62d) {
            _0x2ff62d.writable = true;
          }
          Object.defineProperty(_0x381dc3, _0x2ff62d.key, _0x2ff62d);
        }
      }
      function _0x9778ac(_0x4affe5, _0x27148c, _0x56b0fd) {
        if (_0x27148c) {
          _0x6dece7(_0x4affe5.prototype, _0x27148c);
        }
        if (_0x56b0fd) {
          _0x6dece7(_0x4affe5, _0x56b0fd);
        }
        Object.defineProperty(_0x4affe5, "prototype", {
          'writable': false
        });
        return _0x4affe5;
      }
      function _0x5b6a43(_0x4b4ecf, _0x87d347) {
        _0x4b4ecf.prototype = Object.create(_0x87d347.prototype);
        _0x4b4ecf.prototype.constructor = _0x4b4ecf;
        _0x4bd6cf(_0x4b4ecf, _0x87d347);
      }
      function _0x4bd6cf(_0x54897f, _0x1f8c79) {
        return (_0x4bd6cf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (_0x49168b, _0x5ad686) {
          _0x49168b.__proto__ = _0x5ad686;
          return _0x49168b;
        })(_0x54897f, _0x1f8c79);
      }
      function _0x4c7417(_0x417664) {
        if (undefined === _0x417664) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return _0x417664;
      }
      function _0x3933a2(_0x3b9b20, _0x527598) {
        if (_0x3b9b20) {
          if ("string" == typeof _0x3b9b20) {
            return _0x47e764(_0x3b9b20, _0x527598);
          }
          var _0x2f6a6d = Object.prototype.toString.call(_0x3b9b20).slice(0x8, -0x1);
          if ("Object" === _0x2f6a6d && _0x3b9b20.constructor) {
            _0x2f6a6d = _0x3b9b20.constructor.name;
          }
          return "Map" === _0x2f6a6d || "Set" === _0x2f6a6d ? Array.from(_0x3b9b20) : "Arguments" === _0x2f6a6d || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x2f6a6d) ? _0x47e764(_0x3b9b20, _0x527598) : undefined;
        }
      }
      function _0x47e764(_0x6295f7, _0x215699) {
        if (null == _0x215699 || _0x215699 > _0x6295f7.length) {
          _0x215699 = _0x6295f7.length;
        }
        var _0x1f84f9 = 0x0;
        for (var _0x37d6ec = new Array(_0x215699); _0x1f84f9 < _0x215699; _0x1f84f9++) {
          _0x37d6ec[_0x1f84f9] = _0x6295f7[_0x1f84f9];
        }
        return _0x37d6ec;
      }
      function _0x1be9ca(_0x520322, _0x412152) {
        var _0x19333d = 'undefined' != typeof Symbol && _0x520322[Symbol.iterator] || _0x520322['@@iterator'];
        if (_0x19333d) {
          return (_0x19333d = _0x19333d.call(_0x520322)).next.bind(_0x19333d);
        }
        if (Array.isArray(_0x520322) || (_0x19333d = _0x3933a2(_0x520322)) || _0x412152 && _0x520322 && "number" == typeof _0x520322.length) {
          if (_0x19333d) {
            _0x520322 = _0x19333d;
          }
          var _0x17f2f1 = 0x0;
          return function () {
            return _0x17f2f1 >= _0x520322.length ? {
              'done': true
            } : {
              'done': false,
              'value': _0x520322[_0x17f2f1++]
            };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _0x7af141(_0x269be5, _0x46b832, _0x4965ea, _0x1a972e) {
        if (_0x4965ea) {
          Object.defineProperty(_0x269be5, _0x46b832, {
            'enumerable': _0x4965ea.enumerable,
            'configurable': _0x4965ea.configurable,
            'writable': _0x4965ea.writable,
            'value': _0x4965ea.initializer ? _0x4965ea.initializer.call(_0x1a972e) : undefined
          });
        }
      }
      function _0x4bec9c(_0x5bd051, _0x417ae7, _0x2483cc, _0x1d9be1, _0x1929f7) {
        var _0x10bcfd = {};
        Object.keys(_0x1d9be1).forEach(function (_0x2d25fd) {
          _0x10bcfd[_0x2d25fd] = _0x1d9be1[_0x2d25fd];
        });
        _0x10bcfd.enumerable = !!_0x10bcfd.enumerable;
        _0x10bcfd.configurable = !!_0x10bcfd.configurable;
        if ("value" in _0x10bcfd || _0x10bcfd.initializer) {
          _0x10bcfd.writable = true;
        }
        _0x10bcfd = _0x2483cc.slice().reverse().reduce(function (_0x1b14a0, _0x49b28a) {
          return _0x49b28a(_0x5bd051, _0x417ae7, _0x1b14a0) || _0x1b14a0;
        }, _0x10bcfd);
        if (_0x1929f7 && undefined !== _0x10bcfd.initializer) {
          _0x10bcfd.value = _0x10bcfd.initializer ? _0x10bcfd.initializer.call(_0x1929f7) : undefined;
          _0x10bcfd.initializer = undefined;
        }
        if (undefined === _0x10bcfd.initializer) {
          Object.defineProperty(_0x5bd051, _0x417ae7, _0x10bcfd);
          _0x10bcfd = null;
        }
        return _0x10bcfd;
      }
      var _0x452d39;
      var _0x127dc7;
      var _0x5cf51a;
      var _0x4665c5;
      var _0x5724bb;
      var _0x489013;
      var _0x1ac7d8;
      var _0x4fcbe7;
      var _0x4ca6a0;
      var _0x43f9ad;
      _0x361286._RF.push({}, "9f952uBkv9GpK8em+lo/+WM", "BackGroundView", undefined);
      var _0x5503ff = _0x55c899.ccclass;
      var _0x9ffb90 = _0x55c899.property;
      _0x452d39 = _0x5503ff('BackGroundView');
      _0x127dc7 = _0x9ffb90({
        'type': _0x2bf5c4,
        'tooltip': "BG_L"
      });
      _0x5cf51a = _0x9ffb90({
        'type': _0x2bf5c4,
        'tooltip': 'BG_S'
      });
      _0x4665c5 = _0x9ffb90({
        'type': _0x2bf5c4,
        'tooltip': 'MG_L'
      });
      _0x5724bb = _0x9ffb90({
        'type': _0x2bf5c4,
        'tooltip': "MG_S"
      });
      _0x489013 = function (_0x57b340) {
        function _0x7d229b() {
          var _0x1c6984;
          var _0x5ec271 = arguments.length;
          var _0x501075 = new Array(_0x5ec271);
          for (var _0x22ca41 = 0x0; _0x22ca41 < _0x5ec271; _0x22ca41++) {
            _0x501075[_0x22ca41] = arguments[_0x22ca41];
          }
          _0x7af141(_0x1c6984 = _0x57b340.call.apply(_0x57b340, [this].concat(_0x501075)) || this, "m_bGL", _0x1ac7d8, _0x4c7417(_0x1c6984));
          _0x7af141(_0x1c6984, "m_bGS", _0x4fcbe7, _0x4c7417(_0x1c6984));
          _0x7af141(_0x1c6984, "m_mGL", _0x4ca6a0, _0x4c7417(_0x1c6984));
          _0x7af141(_0x1c6984, "m_mGS", _0x43f9ad, _0x4c7417(_0x1c6984));
          _0x1c6984.m_isLandscape = undefined;
          _0x1c6984.m_isOolong = undefined;
          _0x1c6984.ENTER_DELAY_TIME = 2.4;
          _0x1c6984.EXIT_DELAY_TIME = 0x0;
          _0x1c6984.FADE_TIME_LONG = 0x1;
          _0x1c6984.FADE_TIME_SHORT = 0.3;
          _0x1c6984.m_gameView = undefined;
          return _0x1c6984;
        }
        _0x5b6a43(_0x7d229b, _0x57b340);
        var _0x3fea31 = _0x7d229b.prototype;
        _0x3fea31.Init = function (_0x3cf1a9) {
          this.m_gameView = _0x3cf1a9;
        };
        _0x3fea31.Rotate = function (_0x8d05c6) {
          this.m_isLandscape = _0x8d05c6;
        };
        _0x3fea31.EnterBG = function (_0x45bfa0) {
          var _0x58a9cf = this;
          if (undefined === _0x45bfa0) {
            _0x45bfa0 = null;
          }
          if (!this.m_gameView.IsBonusGame) {
            if (this.m_gameView.IsLandscape) {
              this.m_bGL.active = true;
              this.m_bGS.active = false;
            } else {
              this.m_bGL.active = false;
              this.m_bGS.active = true;
            }
            this.DoFade(this.m_bGL, 0xff, this.ENTER_DELAY_TIME, this.FADE_TIME_LONG, function () {
              if (_0x45bfa0) {
                _0x45bfa0();
                _0x58a9cf.m_mGL.active = false;
                _0x58a9cf.m_mGS.active = false;
              }
            });
            this.DoFade(this.m_bGS, 0xff, this.ENTER_DELAY_TIME, this.FADE_TIME_LONG, null);
          }
        };
        _0x3fea31.EnterMG = function (_0x522072) {
          var _0x780a6f = this;
          if (undefined === _0x522072) {
            _0x522072 = null;
          }
          if (this.m_gameView.IsLandscape) {
            this.m_mGL.active = true;
            this.m_mGS.active = false;
          } else {
            this.m_mGL.active = false;
            this.m_mGS.active = true;
          }
          var _0x1ca2cf = this.m_isOolong ? this.FADE_TIME_SHORT : this.FADE_TIME_LONG;
          this.DoFade(this.m_bGL, 0x0, this.EXIT_DELAY_TIME, _0x1ca2cf, function () {
            _0x780a6f.m_gameView.SetRotationLock = false;
            if (_0x522072) {
              _0x522072();
              _0x780a6f.m_bGL.active = false;
              _0x780a6f.m_bGS.active = false;
            }
          });
          this.DoFade(this.m_bGS, 0x0, this.EXIT_DELAY_TIME, _0x1ca2cf, null);
        };
        _0x3fea31.SetIsOolong = function (_0x2a7c25) {
          this.m_isOolong = _0x2a7c25;
        };
        _0x3fea31.DoFade = function (_0x147080, _0xff5c98, _0x506f01, _0x37409c, _0x3acede) {
          if (undefined === _0x3acede) {
            _0x3acede = null;
          }
          _0x4f3334("Starting fade on " + _0x147080.name + " to " + _0xff5c98 + " over " + _0x37409c + "s after " + _0x506f01 + "s delay.");
          var _0x3c007d = _0x147080.getComponent(_0x52589a);
          if (_0x3c007d) {
            _0x5b954c(_0x3c007d).delay(_0x506f01).to(_0x37409c, {
              'opacity': _0xff5c98
            }).call(function () {
              _0x4f3334("Fade complete, executing callback.");
              if (_0x3acede) {
                _0x3acede();
              }
            }).start();
          } else {
            _0x312ceb("UIOpacity component not found on target object.");
          }
        };
        _0x9778ac(_0x7d229b, [{
          'key': "BGL",
          'get': function () {
            return this.m_bGL;
          }
        }, {
          'key': "BGS",
          'get': function () {
            return this.m_bGS;
          }
        }, {
          'key': 'MGL',
          'get': function () {
            return this.m_mGL;
          }
        }, {
          'key': 'MGS',
          'get': function () {
            return this.m_mGS;
          }
        }]);
        return _0x7d229b;
      }(_0xf24552);
      _0x1ac7d8 = _0x4bec9c(_0x489013.prototype, "m_bGL", [_0x127dc7], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4fcbe7 = _0x4bec9c(_0x489013.prototype, 'm_bGS', [_0x5cf51a], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4ca6a0 = _0x4bec9c(_0x489013.prototype, "m_mGL", [_0x4665c5], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x43f9ad = _0x4bec9c(_0x489013.prototype, 'm_mGS', [_0x5724bb], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x47a39d;
      var _0x59956e;
      var _0x1aa8a8;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, '9544bnjfYhL2bNVUGjJgIHL', "Game_Define", undefined);
      var _0x289a7e = _0x55c899.ccclass;
      var _0x5bb1c1;
      var _0x42d372;
      var _0x1d177c;
      var _0x2ed808;
      var _0xca43f6;
      !function (_0x23c6a0) {
        _0x23c6a0[_0x23c6a0.FEATURE_SHOW = 0x0] = "FEATURE_SHOW";
        _0x23c6a0[_0x23c6a0.WAIT_READY = 0x1] = "WAIT_READY";
        _0x23c6a0[_0x23c6a0.SHOW_INTRO = 0x2] = "SHOW_INTRO";
        _0x23c6a0[_0x23c6a0.EFFECTSTART = 0x3] = "EFFECTSTART";
        _0x23c6a0[_0x23c6a0.AWARD = 0x4] = "AWARD";
        _0x23c6a0[_0x23c6a0.EFFECTEND = 0x5] = "EFFECTEND";
        _0x23c6a0[_0x23c6a0.ROUND_END = 0x6] = "ROUND_END";
        _0x23c6a0[_0x23c6a0.RESPIN = 0x7] = "RESPIN";
        _0x23c6a0[_0x23c6a0.UNSHOW_PREPARE = 0x8] = "UNSHOW_PREPARE";
        _0x23c6a0[_0x23c6a0.LEVEL_UP = 0x9] = "LEVEL_UP";
        _0x23c6a0[_0x23c6a0.ROUND_SHOW_END = 0xa] = 'ROUND_SHOW_END';
        _0x23c6a0[_0x23c6a0.EXIT_BONUS = 0xb] = 'EXIT_BONUS';
      }(_0x5bb1c1 || (_0x5bb1c1 = {}));
      (function (_0x4b4e47) {
        _0x4b4e47[_0x4b4e47.LEAF = 0x0] = "LEAF";
        _0x4b4e47[_0x4b4e47.MUSHROOM = 0x1] = "MUSHROOM";
        _0x4b4e47[_0x4b4e47.TOMATO = 0x2] = "TOMATO";
        _0x4b4e47[_0x4b4e47.GREEN = 0x3] = 'GREEN';
        _0x4b4e47[_0x4b4e47.BLUE = 0x4] = "BLUE";
        _0x4b4e47[_0x4b4e47.RED = 0x5] = 'RED';
        _0x4b4e47[_0x4b4e47.WILD = 0x6] = "WILD";
        _0x4b4e47[_0x4b4e47.NULL = 0x7] = "NULL";
      })(_0x42d372 || (_0x42d372 = {}));
      (function (_0x4b9f8a) {
        _0x4b9f8a[_0x4b9f8a.NORMAL = 0x0] = 'NORMAL';
        _0x4b9f8a[_0x4b9f8a.WILD_BLOW = 0x1] = 'WILD_BLOW';
        _0x4b9f8a[_0x4b9f8a.WINSHOW = 0x2] = "WINSHOW";
      })(_0x1d177c || (_0x1d177c = {}));
      (function (_0x6331ca) {
        _0x6331ca[_0x6331ca.LEAF = 0x0] = 'LEAF';
        _0x6331ca[_0x6331ca.MUSHROOM = 0x1] = "MUSHROOM";
        _0x6331ca[_0x6331ca.TOMATO = 0x2] = "TOMATO";
        _0x6331ca[_0x6331ca.GREEN = 0x3] = "GREEN";
        _0x6331ca[_0x6331ca.BLUE = 0x4] = 'BLUE';
        _0x6331ca[_0x6331ca.RED = 0x5] = "RED";
        _0x6331ca[_0x6331ca.WILD = 0x6] = "WILD";
      })(_0x2ed808 || (_0x2ed808 = {}));
      (function (_0x5c37a9) {
        _0x5c37a9[_0x5c37a9.NORMAL = 0x0] = "NORMAL";
        _0x5c37a9[_0x5c37a9.BONUS = 0x1] = "BONUS";
        _0x5c37a9[_0x5c37a9.SUPERBONUS = 0x2] = 'SUPERBONUS';
      })(_0xca43f6 || (_0xca43f6 = {}));
      _0x47a39d = _0x289a7e("Game_Define");
      _0x1aa8a8 = function (_0x1589cc) {
        function _0x52790d() {
          return _0x1589cc.apply(this, arguments) || this;
        }
        _0x5b6a43(_0x52790d, _0x1589cc);
        return _0x52790d;
      }(_0xf24552);
      _0x1aa8a8.LOG_DEBUG_STATE = true;
      _0x1aa8a8.Ver = '51';
      _0x1aa8a8.CHILI_SPICY_HOT = 0x3;
      _0x1aa8a8.GameId = 0x1a5;
      _0x1aa8a8.ShortGameName = 'lj';
      _0x1aa8a8.COL_LENGTH = 0x3;
      _0x1aa8a8.ROW_LENGTH = 0x3;
      _0x1aa8a8.FAKE_ROW_LENGTH = 0x2;
      _0x1aa8a8.SYMBOL_SPINE_SIZE = _0x1923c2(0.41, 0.41, 0.41);
      _0x1aa8a8.LAYERS = {
        'BOTTOM': 0x0,
        'NORMAL': 0x1,
        'TOP': 0x2,
        'FOUR': 0x3
      };
      _0x1aa8a8.REEL_SHOW_PLATES_AMOUNT = 0x3;
      _0x1aa8a8.REEL_MIDDLE_PLATE_INDEX = 0x1;
      _0x1aa8a8.REEL_UP_PLATE_INDEX = 0x2;
      _0x1aa8a8.REEL_DOWN_PLATE_INDEX = 0x0;
      _0x1aa8a8.SeparateLineWidth = 0x7;
      _0x1aa8a8.SymbolWidth = 0xc4;
      _0x1aa8a8.SymbolHeight = 0xa3;
      _0x1aa8a8.Symbol = _0x5527ae(_0x42d372);
      _0x1aa8a8.MiddleRow = 0x1;
      _0x1aa8a8.MiddleCol = 0x1;
      _0x1aa8a8.BG_NEAR_WIN_COUNT = 0x8;
      _0x1aa8a8.SpecialType = _0x5527ae({
        'Normal': 0x0,
        'Special': 0x1
      });
      _0x1aa8a8.introSpineName = {
        'LANDSCAPE': 'GameIntro_L',
        'PORTRAIT': 'GameIntro_S'
      };
      _0x1aa8a8.introSpineAnimationNumber = 0x1;
      _0x1aa8a8.ANI_ACTION_TIME = {
        'LARGE_START': 1.5,
        'HIDE_PLATE': 1.45,
        'WILD_NUMBER_FLY': 0.3,
        'WIN_LABEL_RUNNING_TIME': 0.3
      };
      _0x1aa8a8.ACTION_DELAY_TIME = {
        'TIME_FOR_AWARD_LINE_EFFECT': 1.5,
        'WILD_FLY_EFFECT_START': 0.4,
        'WILD_FLY_EFFECT_END': 0x0
      };
      _0x1aa8a8.AudioClips = {
        'Debut': null,
        'BGM_MG': null,
        'BGM_BG': null,
        'Symbol_Change': null,
        'Wild_Bonus': null,
        'Multiplier_Fly': null,
        'Wild_Stop': null,
        'Extrabet_Show': null,
        'Small_Win_01': null,
        'Small_Win_02': null,
        'Small_Win_03': null,
        'Small_Win_04': null,
        'Big_win': null,
        'ChangeWin': null,
        'ChangeWin2': null,
        'Big_win_end': null,
        'BG_Start': null,
        'BG_Symbol_Lock': null,
        'Voice_01': null,
        'Voice_02': null,
        'Voice_03': null,
        'Voice_04': null,
        'Voice_05': null,
        'Near_Win': null,
        'Level_Up': null,
        'Common_BTN': null,
        'ReelSpin': null,
        'ReelStop': null,
        'Collect_Fly': null
      };
      _0x1aa8a8.AudioFileRoot = "Sound/";
      _0x1aa8a8.AudioFilePath = {
        'Debut': "Debut",
        'BGM_MG': 'BGM_MG',
        'BGM_BG': 'BGM_BG',
        'Symbol_Change': "Symbol_Change",
        'Wild_Bonus': "Wild_Bonus",
        'Multiplier_Fly': 'Multiplier_Fly',
        'Wild_Stop': "Wild_Stop",
        'Extrabet_Show': "Extrabet_Show",
        'Small_Win_01': "Small_Win_01",
        'Small_Win_02': "Small_Win_02",
        'Small_Win_03': "Small_Win_03",
        'Small_Win_04': "Small_Win_04",
        'Big_win': 'Big_Win',
        'ChangeWin': 'Big_Win_Change_01',
        'ChangeWin2': 'Big_Win_Change_02',
        'Big_win_end': "Big_Win_End",
        'BG_Start': 'BG_Start',
        'BG_Symbol_Lock': "BG_Symbol_Lock",
        'Voice_01': 'Voice_01',
        'Voice_02': "Voice_02",
        'Voice_03': 'Voice_03',
        'Voice_04': "Voice_04",
        'Voice_05': "Voice_05",
        'Near_Win': "Near_Win",
        'Level_Up': "Level_Up",
        'Common_BTN': "Common_BTN",
        'ReelSpin': "Reel_Spin",
        'ReelStop': "Reel_Stop",
        'Collect_Fly': "Collect_Fly"
      };
      _0x1aa8a8.SYMBOL_LINE_VEC = [[_0x1923c2(0x0, 0x0), _0x1923c2(0x1, 0x0), _0x1923c2(0x2, 0x0)], [_0x1923c2(0x0, 0x1), _0x1923c2(0x1, 0x1), _0x1923c2(0x2, 0x1)], [_0x1923c2(0x0, 0x2), _0x1923c2(0x1, 0x2), _0x1923c2(0x2, 0x2)], [_0x1923c2(0x0, 0x0), _0x1923c2(0x1, 0x1), _0x1923c2(0x2, 0x2)], [_0x1923c2(0x0, 0x2), _0x1923c2(0x1, 0x1), _0x1923c2(0x2, 0x0)]];
      _0x1aa8a8.EXTRABET_TXT = "Txt_ExtraPay";
      _0x1aa8a8.EXTRABET_TXT_02 = "Txt_ExtraPay01";
      _0x1aa8a8.FG_DECLARE_TXT = ["Txt_BG_Declare_01", "Txt_BG_Declare_02"];
      _0x1aa8a8.MANUAL_STRING = ["String_01", 'String_02', 'String_03', "String_04"];
      _0x1aa8a8.MANUAL_TITLE_STRING = "String_00";
      _0x1aa8a8.FeatrurePageL = "features/left/spriteFrame";
      _0x1aa8a8.FeatrurePageR = "features/right/spriteFrame";
      _0x1aa8a8.StringKey = {
        'GAME_FEATURES_LEFT': 'FEATURE_LEFT',
        'GAME_FEATURES_RIGHT': "FEATURE_RIGHT",
        'GAME_EX_DESCRIPTION': "EX_DESCRIPTION"
      };
      _0x1aa8a8.INDEX_BIGWIN = 0x2;
      _0x1aa8a8.INDEX_MEGAWIN = 0x3;
      _0x1aa8a8.INDEX_SUPERWIN = 0x4;
      _0x1aa8a8.WIN_ODDS = [0x2, 0x4, 0x6, 0xf, 0x1e];
      _0x1aa8a8.WIN_BOARD_SCORE_ALIVE_TIME_NORMAL_WIN = 0x1;
      _0x1aa8a8.WIN_BOARD_SCORE_ALIVE_TIME_BIG_WIN = 6.2;
      _0x1aa8a8.FAKE_BG_ODDS = 0.01;
      _0x1aa8a8.HIGH_WILD_ODDS = 0x14;
      _0x1aa8a8.AVATAR_UPGRADE_ODDS = 0.09;
      _0x1aa8a8.AVATAR_MAX_LEVEL = 0x3;
      _0x1aa8a8.AVATAR_UPGRADE_WAIT_ROUND = 0x1;
      _0x1aa8a8.GAMEVIEW_STATE = _0x5527ae(_0x5bb1c1);
      _0x1aa8a8.USE_ITEM_REASON = {
        'NORMAL': 0x0,
        'USING': 0x1
      };
      _0x1aa8a8.FAKE_REEL_DATA = [[0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x6, 0x6, 0x0, 0x0, 0x0, 0x5, 0x5, 0x5, 0x6, 0x6, 0x4, 0x4, 0x4, 0x2, 0x2, 0x2, 0x6, 0x6, 0x6, 0x3, 0x3, 0x3, 0x4, 0x4, 0x4, 0x6, 0x6, 0x0, 0x0, 0x0, 0x2, 0x2, 0x2, 0x6, 0x6, 0x6, 0x1, 0x1, 0x1, 0x5, 0x5, 0x5, 0x6, 0x6, 0x6, 0x3, 0x3, 0x3, 0x4, 0x4, 0x4, 0x2, 0x2, 0x2, 0x6, 0x6, 0x6, 0x3, 0x3, 0x3, 0x4, 0x4, 0x4, 0x6, 0x6, 0x6], [0x4, 0x4, 0x4, 0x6, 0x6, 0x6, 0x0, 0x0, 0x0, 0x2, 0x2, 0x2, 0x6, 0x6, 0x6, 0x1, 0x1, 0x1, 0x6, 0x6, 0x6, 0x5, 0x5, 0x5, 0x3, 0x3, 0x3, 0x6, 0x6, 0x6, 0x1, 0x1, 0x1, 0x4, 0x4, 0x4, 0x6, 0x6, 0x0, 0x0, 0x0, 0x2, 0x2, 0x2, 0x6, 0x6, 0x6, 0x1, 0x1, 0x1, 0x5, 0x5, 0x5, 0x3, 0x3, 0x3, 0x6, 0x6, 0x6, 0x1, 0x1, 0x1], [0x3, 0x3, 0x3, 0x0, 0x0, 0x0, 0x6, 0x6, 0x6, 0x1, 0x1, 0x1, 0x5, 0x5, 0x5, 0x6, 0x6, 0x6, 0x4, 0x4, 0x4, 0x2, 0x2, 0x2, 0x6, 0x6, 0x6, 0x0, 0x0, 0x0, 0x5, 0x5, 0x5, 0x6, 0x6, 0x6, 0x2, 0x2, 0x2, 0x6, 0x6, 0x6, 0x4, 0x4, 0x4, 0x6, 0x6, 0x6, 0x3, 0x3, 0x3, 0x5, 0x5, 0x5, 0x6, 0x6, 0x6]];
      _0x1aa8a8.FAKE_WILD_ODDS_DATA = [[0.5, 0x2], [0x1, 0x5], [0x2, 0x8], [0x3, 0xa], [0x5, 0x10], [0x8, 0x14], [0xa, 0x10], [0xf, 0xa], [0x14, 0x8], [0x32, 0x5]];
      _0x1aa8a8.FeatureBetValue = 0xa;
      _0x1aa8a8.Test = {
        'PlateSymbol': [{
          'Col': [{
            'Row': [0x5, 0x7, 0x7]
          }, {
            'Row': [0x7, 0x7, 0x5]
          }, {
            'Row': [0x5, 0x7, 0x7]
          }]
        }, {
          'Col': [{
            'Row': [0x5, 0x5, 0x7]
          }, {
            'Row': [0x7, 0x7, 0x5]
          }, {
            'Row': [0x5, 0x5, 0x7]
          }]
        }, {
          'Col': [{
            'Row': [0x5, 0x5, 0x5]
          }, {
            'Row': [0x7, 0x7, 0x5]
          }, {
            'Row': [0x5, 0x5, 0x7]
          }]
        }, {
          'Col': [{
            'Row': [0x5, 0x5, 0x5]
          }, {
            'Row': [0x5, 0x6, 0x5]
          }, {
            'Row': [0x5, 0x5, 0x5]
          }]
        }, {
          'Col': [{
            'Row': [0x5, 0x5, 0x5]
          }, {
            'Row': [0x5, 0x6, 0x5]
          }, {
            'Row': [0x5, 0x5, 0x5]
          }]
        }],
        'AwardDataVec': [{
          'Symbol': 0x5,
          'Win': 0x78
        }, {
          'Symbol': 0x5,
          'Line': 0x1,
          'Win': 0x78
        }, {
          'Symbol': 0x5,
          'Line': 0x2,
          'Win': 0x78
        }, {
          'Symbol': 0x5,
          'Line': 0x3,
          'Win': 0x78
        }, {
          'Symbol': 0x5,
          'Line': 0x4,
          'Win': 0x78
        }],
        'WildOdd': [0x0, 0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x0],
        'WildWin': 0x1e,
        'Mult': 0xa,
        'GetBonus': 0x1,
        'BonusSymbol': 0x5,
        'AwardTypeFlag': 0x1,
        'TotalWin': 0x276,
        'RTP': 0.97
      };
      _0x1aa8a8.FeaturesSpinAck = [{
        'PlateSymbol': [{
          'Col': [{
            'Row': [0x6, 0x6, 0x6]
          }, {
            'Row': [0x6, 0x6, 0x6]
          }, {
            'Row': [0x6, 0x6, 0x6]
          }]
        }],
        'AwardDataVec': [{
          'Symbol': 0x6
        }, {
          'Symbol': 0x6,
          'Line': 0x1
        }, {
          'Symbol': 0x6,
          'Line': 0x2
        }, {
          'Symbol': 0x6,
          'Line': 0x3
        }, {
          'Symbol': 0x6,
          'Line': 0x4
        }],
        'WildOdd': [0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32],
        'WildWin': 0x1194,
        'Mult': 0xa,
        'AwardTypeFlag': 0x1,
        'TotalWin': 0x1194,
        'RTP': 0.97
      }, {
        'PlateSymbol': [{
          'Col': [{
            'Row': [0x7, 0x6, 0x7]
          }, {
            'Row': [0x7, 0x7, 0x6]
          }, {
            'Row': [0x7, 0x6, 0x7]
          }]
        }, {
          'Col': [{
            'Row': [0x6, 0x6, 0x7]
          }, {
            'Row': [0x6, 0x7, 0x6]
          }, {
            'Row': [0x7, 0x6, 0x7]
          }]
        }, {
          'Col': [{
            'Row': [0x6, 0x6, 0x6]
          }, {
            'Row': [0x6, 0x6, 0x6]
          }, {
            'Row': [0x7, 0x6, 0x7]
          }]
        }, {
          'Col': [{
            'Row': [0x6, 0x6, 0x6]
          }, {
            'Row': [0x6, 0x6, 0x6]
          }, {
            'Row': [0x7, 0x6, 0x6]
          }]
        }, {
          'Col': [{
            'Row': [0x6, 0x6, 0x6]
          }, {
            'Row': [0x6, 0x6, 0x6]
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
        'AwardDataVec': [{
          'Symbol': 0x6
        }, {
          'Symbol': 0x6,
          'Line': 0x1
        }, {
          'Symbol': 0x6,
          'Line': 0x2
        }, {
          'Symbol': 0x6,
          'Line': 0x3
        }, {
          'Symbol': 0x6,
          'Line': 0x4
        }],
        'WildOdd': [0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32, 0x32],
        'WildWin': 0x1194,
        'Mult': 0xa,
        'GetBonus': 0x1,
        'BonusSymbol': 0x6,
        'AwardTypeFlag': 0x1,
        'TotalWin': 0x1194,
        'RTP': 0.97
      }];
      var _0x4772ce = _0x47a39d(_0x59956e = _0x1aa8a8) || _0x59956e;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "db4337zK39CwpvA3Bh+gyjl", "index", undefined);
      if (!globalThis.Astarte) {
        globalThis.Astarte = {};
      }
      var _0x3f78ea;
      var _0x4225de;
      var _0x20a3f2;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, 'de32cbzFmBN4rL/N8DkMkAD', "Define", undefined);
      (function (_0x453213) {
        _0x453213[_0x453213.NORMAL = 0x0] = "NORMAL";
        _0x453213[_0x453213.USING = 0x1] = "USING";
      })(_0x3f78ea || (_0x3f78ea = {}));
      (function (_0x5387b4) {
        _0x5387b4[_0x5387b4.GAME_CLOSE = 0x3e8] = 'GAME_CLOSE';
        _0x5387b4[_0x5387b4.LOGIN = 0x3e9] = "LOGIN";
        _0x5387b4[_0x5387b4.WAIT_RES = 0x3ea] = "WAIT_RES";
        _0x5387b4[_0x5387b4.CHECK_UNSHOW = 0x3eb] = "CHECK_UNSHOW";
        _0x5387b4[_0x5387b4.CHECK_FREESPIN = 0x3ec] = "CHECK_FREESPIN";
        _0x5387b4[_0x5387b4.IDLE = 0x3ed] = 'IDLE';
        _0x5387b4[_0x5387b4.SPIN_REQ = 0x3ee] = "SPIN_REQ";
        _0x5387b4[_0x5387b4.SPIN = 0x3ef] = "SPIN";
        _0x5387b4[_0x5387b4.COMMON_SHOW = 0x3f0] = "COMMON_SHOW";
        _0x5387b4[_0x5387b4.MHB_SHOW = 0x3f1] = "MHB_SHOW";
        _0x5387b4[_0x5387b4.JP_SHOW = 0x3f2] = "JP_SHOW";
        _0x5387b4[_0x5387b4.CHECK_STATE = 0x3f3] = 'CHECK_STATE';
        _0x5387b4[_0x5387b4.END = 0x3f4] = "END";
        _0x5387b4[_0x5387b4.FREESPIN_WAIT_RES = 0x3f5] = "FREESPIN_WAIT_RES";
        _0x5387b4[_0x5387b4.TURBO = 0x3f6] = "TURBO";
        _0x5387b4[_0x5387b4.FIRST_IN_GAME = 0x3f7] = "FIRST_IN_GAME";
        _0x5387b4[_0x5387b4.CHECK_APP_REWARD = 0x3f8] = "CHECK_APP_REWARD";
        _0x5387b4[_0x5387b4.CHECK_BUFF = 0x3f9] = "CHECK_BUFF";
        _0x5387b4[_0x5387b4.ACTIVATE_BUFF = 0x3fa] = "ACTIVATE_BUFF";
        _0x5387b4[_0x5387b4.END_BUFF = 0x3fb] = "END_BUFF";
        _0x5387b4[_0x5387b4.GRAND_JP = 0x3fc] = "GRAND_JP";
      })(_0x4225de || (_0x4225de = {}));
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "4c480cU1LpMo4WqCcvtd0ph", "Tools", undefined);
      var _0x4bcdb4;
      var _0x3ec223;
      var _0x35630d;
      var _0x10cdb2;
      var _0x2b0307;
      var _0x26cff7;
      var _0x4bb201;
      var _0x33073d;
      var _0x2f3f8c;
      var _0x78cc8f;
      var _0x3526bd;
      var _0x57e788;
      var _0x305bae;
      var _0x583387;
      var _0x5a31b5;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "813162EnmlPD6ZkP+n93pP2", "RoundController", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "1d5a8ODImpC9qtSki10xwQQ", "ExtraBetController", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "cd534oKcOFFap8T54HqFCAE", "FakeServer", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, '3ec76bGz5NECbh3RNjc2SdI', "TempoSetting", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "6f779uo//FP8owPSb4jjuXE", "CommonEffect", undefined);
      (function (_0x382ffa) {
        var _0x3baae9 = function () {
          function _0x138571() {}
          _0x138571.PascalTriangleLine = function (_0x43305a) {
            var _0x2a08c8 = [0x1];
            for (var _0x28fec0 = 0x1; _0x28fec0 < _0x43305a; _0x28fec0++) {
              _0x2a08c8[_0x28fec0] = _0x2a08c8[_0x28fec0 - 0x1] * (_0x43305a - _0x28fec0) / _0x28fec0;
            }
            return _0x2a08c8;
          };
          _0x138571.RangedRandom = function (_0x3de394, _0xa40973) {
            return (_0xa40973 - _0x3de394) * Math.random() + _0x3de394;
          };
          _0x138571.GetRandomRectPos = function (_0x2a2c09, _0x36dd04, _0x1d0fe2) {
            var _0x134fad = _0x334191(this.RangedRandom(-_0x36dd04.x, _0x36dd04.x) / 0x2 | 0x0, this.RangedRandom(-_0x36dd04.x, _0x36dd04.x) / 0x2 | 0x0).rotate(_0x1d0fe2 * _0xc34e6a.RAD);
            return _0x2a2c09.add(_0x134fad);
          };
          _0x138571.GetRandomOvalPos = function (_0x5b9663, _0x6a8763, _0x10db5f) {
            var _0x391c25 = _0x6a8763.y / Math.max(0x1, _0x6a8763.x);
            var _0x35919e = Math.random() * _0x6a8763.x * 0.5;
            var _0x4d511a = Math.random() * Math.PI * 0x2;
            var _0x2c089d = _0x334191(_0x35919e * Math.cos(_0x4d511a), _0x35919e * Math.sin(_0x4d511a) * _0x391c25).rotate(_0x10db5f * _0xc34e6a.RAD);
            return _0x5b9663.add(_0x2c089d);
          };
          _0x138571.ZoomAndFlip = function (_0x3a8585, _0x5f506a, _0xab8547, _0x4878a5) {
            var _0x54c875 = Math.sin(_0x4878a5 * Math.PI) * (_0x5f506a - _0x3a8585) + _0x3a8585;
            var _0x1460c6 = Math.cos(_0x4878a5 * Math.PI * _0xab8547);
            return _0x334191(_0x54c875 * _0x1460c6, _0x54c875);
          };
          return _0x138571;
        }();
        _0x382ffa.ExtendsMath = _0x3baae9;
        var _0x512b83 = function () {
          function _0x5b49ad(_0x59d0b3) {
            this.pts = null;
            this.len = 0x0;
            this.ptl = null;
            this.bez = null;
            this.len = _0x59d0b3.length;
            if (0x0 == this.len) {
              _0x59d0b3.push(_0x1923c2(0x0, 0x0));
              _0x59d0b3.push(_0x1923c2(0x0, 0x0));
            } else if (0x1 == this.len) {
              _0x59d0b3.push(_0x1923c2(_0x59d0b3[0x0].x, _0x59d0b3[0x0].y));
            }
            this.pts = _0x59d0b3;
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
                this.ptl = _0x3baae9.PascalTriangleLine(this.len);
                this.bez = this.BezierN;
            }
          }
          var _0x345386 = _0x5b49ad.prototype;
          _0x345386.GetPosition = function (_0x3eed40) {
            return this.bez.apply(this, [_0x3eed40]);
          };
          _0x345386.Bezier2 = function (_0x4b7fc6) {
            var _0x3e3d0e = 0x1 - _0x4b7fc6;
            return _0x1923c2(_0x3e3d0e * this.pts[0x0].x + _0x4b7fc6 * this.pts[0x1].x, _0x3e3d0e * this.pts[0x0].y + _0x4b7fc6 * this.pts[0x1].y);
          };
          _0x345386.Bezier3 = function (_0x28e797) {
            var _0x2b8b74 = 0x1 - _0x28e797;
            var _0x44c43e = [_0x2b8b74 * _0x2b8b74, 0x2 * _0x2b8b74 * _0x28e797, _0x28e797 * _0x28e797];
            return _0x1923c2(_0x44c43e[0x0] * this.pts[0x0].x + _0x44c43e[0x1] * this.pts[0x1].x + _0x44c43e[0x2] * this.pts[0x2].x, _0x44c43e[0x0] * this.pts[0x0].y + _0x44c43e[0x1] * this.pts[0x1].y + _0x44c43e[0x2] * this.pts[0x2].y);
          };
          _0x345386.Bezier4 = function (_0x56d615) {
            var _0x321d01 = 0x1 - _0x56d615;
            var _0x5f3edb = [_0x321d01 * _0x321d01 * _0x321d01, 0x3 * _0x321d01 * _0x321d01 * _0x56d615, 0x3 * _0x321d01 * _0x56d615 * _0x56d615, _0x56d615 * _0x56d615 * _0x56d615];
            return _0x1923c2(_0x5f3edb[0x0] * this.pts[0x0].x + _0x5f3edb[0x1] * this.pts[0x1].x + _0x5f3edb[0x2] * this.pts[0x2].x + _0x5f3edb[0x3] * this.pts[0x3].x, _0x5f3edb[0x0] * this.pts[0x0].y + _0x5f3edb[0x1] * this.pts[0x1].y + _0x5f3edb[0x2] * this.pts[0x2].y + _0x5f3edb[0x3] * this.pts[0x3].y);
          };
          _0x345386.Bezier5 = function (_0x17e888) {
            var _0x29dbe7 = 0x1 - _0x17e888;
            var _0x95e8ad = [_0x29dbe7 * _0x29dbe7 * _0x29dbe7 * _0x29dbe7, 0x4 * _0x29dbe7 * _0x29dbe7 * _0x29dbe7 * _0x17e888, 0x6 * _0x29dbe7 * _0x29dbe7 * _0x17e888 * _0x17e888, 0x4 * _0x29dbe7 * _0x17e888 * _0x17e888 * _0x17e888, _0x17e888 * _0x17e888 * _0x17e888 * _0x17e888];
            return _0x1923c2(_0x95e8ad[0x0] * this.pts[0x0].x + _0x95e8ad[0x1] * this.pts[0x1].x + _0x95e8ad[0x2] * this.pts[0x2].x + _0x95e8ad[0x3] * this.pts[0x3].x + _0x95e8ad[0x4] * this.pts[0x4].x, _0x95e8ad[0x0] * this.pts[0x0].y + _0x95e8ad[0x1] * this.pts[0x1].y + _0x95e8ad[0x2] * this.pts[0x2].y + _0x95e8ad[0x3] * this.pts[0x3].y + _0x95e8ad[0x4] * this.pts[0x4].y);
          };
          _0x345386.Bezier6 = function (_0x3b8320) {
            var _0x42ba62 = 0x1 - _0x3b8320;
            var _0x396fc2 = [_0x42ba62 * _0x42ba62 * _0x42ba62 * _0x42ba62 * _0x42ba62, 0x5 * _0x42ba62 * _0x42ba62 * _0x42ba62 * _0x42ba62 * _0x3b8320, 0xa * _0x42ba62 * _0x42ba62 * _0x42ba62 * _0x3b8320 * _0x3b8320, 0xa * _0x42ba62 * _0x42ba62 * _0x3b8320 * _0x3b8320 * _0x3b8320, 0x5 * _0x42ba62 * _0x3b8320 * _0x3b8320 * _0x3b8320 * _0x3b8320, _0x3b8320 * _0x3b8320 * _0x3b8320 * _0x3b8320 * _0x3b8320];
            return _0x1923c2(_0x396fc2[0x0] * this.pts[0x0].x + _0x396fc2[0x1] * this.pts[0x1].x + _0x396fc2[0x2] * this.pts[0x2].x + _0x396fc2[0x3] * this.pts[0x3].x + _0x396fc2[0x4] * this.pts[0x4].x + _0x396fc2[0x5] * this.pts[0x5].x, _0x396fc2[0x0] * this.pts[0x0].y + _0x396fc2[0x1] * this.pts[0x1].y + _0x396fc2[0x2] * this.pts[0x2].y + _0x396fc2[0x3] * this.pts[0x3].y + _0x396fc2[0x4] * this.pts[0x4].y + _0x396fc2[0x5] * this.pts[0x5].y);
          };
          _0x345386.BezierN = function (_0x46611a) {
            var _0x4c593c = 0x1 - _0x46611a;
            var _0x3870e4 = _0x1923c2(0x0, 0x0);
            for (var _0x2990ea = 0x0; _0x2990ea < this.len; _0x2990ea++) {
              var _0x2e8567 = 0x1;
              for (var _0x4491d8 = 0x0; _0x4491d8 < this.len - _0x2990ea - 0x1; _0x4491d8++) {
                _0x2e8567 *= _0x4c593c;
              }
              for (var _0x456233 = 0x0; _0x456233 < _0x2990ea; _0x456233++) {
                _0x2e8567 *= _0x46611a;
              }
              _0x3870e4.x += _0x2e8567 * this.ptl[_0x2990ea] * this.pts[_0x2990ea].x;
              _0x3870e4.y += _0x2e8567 * this.ptl[_0x2990ea] * this.pts[_0x2990ea].y;
            }
            return _0x3870e4;
          };
          return _0x5b49ad;
        }();
        _0x382ffa.Bezier = _0x512b83;
      })(_0x10cdb2 || (_0x10cdb2 = {}));
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "391b6CLPVhBEqeFr1f7nxDE", "index", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, 'e9276ZjieFG1b9XR74ix2Ki', "ReelSymbolUnit", undefined);
      var _0x2874a5 = _0x55c899.ccclass;
      var _0x2e5830 = _0x55c899.property;
      _0x2b0307 = _0x2874a5('ReelSymbolUnit');
      _0x26cff7 = _0x2e5830({
        'type': _0x3fe2b7
      });
      _0x4bb201 = _0x2e5830({
        'type': _0x3fe2b7
      });
      _0x33073d = _0x2e5830({
        'type': _0x4980af
      });
      _0x2f3f8c = _0x2e5830({
        'type': _0xbe042
      });
      _0x3526bd = function (_0x22138c) {
        function _0x527f26() {
          var _0x392ab4;
          var _0x15ef27 = arguments.length;
          var _0x51acc9 = new Array(_0x15ef27);
          for (var _0x4ef0d9 = 0x0; _0x4ef0d9 < _0x15ef27; _0x4ef0d9++) {
            _0x51acc9[_0x4ef0d9] = arguments[_0x4ef0d9];
          }
          _0x7af141(_0x392ab4 = _0x22138c.call.apply(_0x22138c, [this].concat(_0x51acc9)) || this, "m_num", _0x57e788, _0x4c7417(_0x392ab4));
          _0x7af141(_0x392ab4, 'm_numWithOpacity', _0x305bae, _0x4c7417(_0x392ab4));
          _0x7af141(_0x392ab4, 'm_sprite', _0x583387, _0x4c7417(_0x392ab4));
          _0x7af141(_0x392ab4, "m_fnt", _0x5a31b5, _0x4c7417(_0x392ab4));
          _0x392ab4.m_flyEffectParent = undefined;
          _0x392ab4.m_numInitialPos = undefined;
          _0x392ab4.m_isWild = undefined;
          return _0x392ab4;
        }
        _0x5b6a43(_0x527f26, _0x22138c);
        var _0x46aae8 = _0x527f26.prototype;
        _0x46aae8.Init = function (_0x4336a6) {
          this.m_flyEffectParent = _0x4336a6;
          this.m_numInitialPos = this.m_num.node.getPosition();
        };
        _0x46aae8.SetNum = function (_0x58cf56, _0x32212b) {
          this.SetNumActive(this.m_isWild);
          this.m_num.string = this.m_isWild ? _0x58cf56 : '';
          this.m_numWithOpacity.string = this.m_isWild ? _0x58cf56 : '';
          if (this.m_fnt.length > 0x0) {
            if (_0x32212b >= _0x4772ce.HIGH_WILD_ODDS) {
              this.m_num.font = this.m_fnt[0x1];
              this.m_numWithOpacity.font = this.m_fnt[0x1];
            } else {
              this.m_num.font = this.m_fnt[0x0];
              this.m_numWithOpacity.font = this.m_fnt[0x0];
            }
          }
        };
        _0x46aae8.SetIsWild = function (_0x14c5be) {
          this.m_isWild = _0x14c5be;
        };
        _0x46aae8.SetSibling = function (_0x1f71b0) {
          _0x4bcdb4.SetZIndex(this.node, _0x1f71b0);
        };
        _0x46aae8.SetSprite = function (_0x3173e9) {
          this.Reset();
          this.m_sprite.spriteFrame = _0x3173e9;
        };
        _0x46aae8.SetColor = function (_0xc9b173) {
          this.m_sprite.color = _0xc9b173;
          this.m_num.color = _0xc9b173;
        };
        _0x46aae8.SetPosition = function (_0x37011f) {
          this.node.setPosition(_0x37011f);
        };
        _0x46aae8.SetLabelActive = function (_0x39210b) {
          this.m_num.node.active = _0x39210b == _0x4772ce.Symbol.WILD;
        };
        _0x46aae8.Reset = function () {
          this.SetNumActive(false);
          this.m_num.node.setPosition(this.m_numInitialPos);
          this.ChangeNumParent(false);
        };
        _0x46aae8.SetToHalfTransparent = function (_0x5b686c) {
          this.m_numWithOpacity.node.active = _0x5b686c;
        };
        _0x46aae8.ChangeNumParent = function (_0x221c54) {
          var _0xa02aca = _0x221c54 ? this.m_flyEffectParent : this.node;
          this.m_num.node.setParent(_0xa02aca, true);
          this.m_numWithOpacity.node.setParent(_0xa02aca, true);
        };
        _0x46aae8.SetActive = function (_0x39c26a) {
          if (this.node.active != _0x39c26a) {
            this.node.active = _0x39c26a;
          }
        };
        _0x46aae8.SetNumActive = function (_0x3e88e4) {
          if (this.m_num.node.active != _0x3e88e4) {
            this.m_num.node.active = _0x3e88e4;
          }
        };
        _0x46aae8.SetOpacityNumActive = function (_0x327691) {
          if (this.m_numWithOpacity.node.active != _0x327691) {
            this.m_numWithOpacity.node.active = _0x327691;
          }
        };
        _0x46aae8.PlayFlyAnim = function () {
          var _0x1785fd = _0x2b8ecf(_0x17c453().mark(function _0x304f5(_0x15de27, _0x36ff84, _0x5a5416, _0x4cef83) {
            var _0x4dae81;
            var _0x4084c0;
            var _0xb6cb53;
            var _0x30db0c;
            var _0x5c41c9;
            var _0x3ca684 = this;
            return _0x17c453().wrap(function (_0x1a907f) {
              for (;;) {
                switch (_0x1a907f.prev = _0x1a907f.next) {
                  case 0x0:
                    if (undefined === _0x5a5416) {
                      _0x5a5416 = 0x0;
                    }
                    if (undefined === _0x4cef83) {
                      _0x4cef83 = 0x0;
                    }
                    this.m_numWithOpacity.node.active = true;
                    if (!(_0x5a5416 > 0x0)) {
                      _0x1a907f.next = 0x6;
                      break;
                    }
                    _0x1a907f.next = 0x6;
                    return _0x20a3f2.Wait(this, 0x1 * _0x5a5416);
                  case 0x6:
                    _0x4dae81 = this.GetWorldLocation(this.m_num.node);
                    _0x4084c0 = this.GetWorldLocation(_0x15de27);
                    _0xb6cb53 = this.m_num.node.getPosition().clone();
                    _0x30db0c = new _0x178207(_0x4084c0.x - _0x4dae81.x + _0xb6cb53.x, _0x4084c0.y - _0x4dae81.y + _0xb6cb53.y, _0x4084c0.z - _0x4dae81.z + _0xb6cb53.z);
                    _0x5c41c9 = new Promise(function (_0x1b82b1) {
                      _0x5b954c(_0x3ca684.m_num.node).parallel(_0x5b954c().to(_0x4772ce.ANI_ACTION_TIME.WILD_NUMBER_FLY, {
                        'position': _0x30db0c
                      }), _0x5b954c().sequence(_0x5b954c().to(_0x4772ce.ANI_ACTION_TIME.WILD_NUMBER_FLY / 0x2, {
                        'scale': new _0x178207(1.5, 1.5, 1.5)
                      }), _0x5b954c().to(_0x4772ce.ANI_ACTION_TIME.WILD_NUMBER_FLY / 0x2, {
                        'scale': new _0x178207(0x1, 0x1, 0x1)
                      }))).call(_0x1b82b1).start();
                    });
                    _0x1a907f.next = 0xd;
                    return _0x5c41c9;
                  case 0xd:
                    this.m_num.node.active = false;
                    if (!(_0x4cef83 > 0x0)) {
                      _0x1a907f.next = 0x11;
                      break;
                    }
                    _0x1a907f.next = 0x11;
                    return _0x20a3f2.Wait(this, 0x1 * _0x4cef83);
                  case 0x11:
                    if (!_0x36ff84) {
                      _0x1a907f.next = 0x14;
                      break;
                    }
                    _0x1a907f.next = 0x14;
                    return _0x36ff84();
                  case 0x14:
                  case "end":
                    return _0x1a907f.stop();
                }
              }
            }, _0x304f5, this);
          }));
          return function (_0x5e3e0b, _0x4ec378, _0x1d54c5, _0x5c0b2f) {
            return _0x1785fd.apply(this, arguments);
          };
        }();
        _0x46aae8.GetWorldLocation = function (_0x425bb6) {
          return _0x425bb6.getComponent(_0x201890).convertToWorldSpaceAR(_0x1923c2(0x0, 0x0, 0x0));
        };
        return _0x527f26;
      }(_0xf24552);
      _0x57e788 = _0x4bec9c(_0x3526bd.prototype, "m_num", [_0x26cff7], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': null
      });
      _0x305bae = _0x4bec9c(_0x3526bd.prototype, "m_numWithOpacity", [_0x4bb201], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': null
      });
      _0x583387 = _0x4bec9c(_0x3526bd.prototype, "m_sprite", [_0x33073d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': null
      });
      _0x5a31b5 = _0x4bec9c(_0x3526bd.prototype, 'm_fnt', [_0x2f3f8c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      var _0x342e00 = _0x2b0307(_0x78cc8f = _0x3526bd) || _0x78cc8f;
      var _0x8a30d7;
      var _0x52ef9a;
      var _0x1b8acc;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "2c465urF+5E6a8SAy0Y1679", "AppManager", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "01a4bCeOlRFS4PxU4ftD5wn", "BackpackManager", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, 'e98d6g3Sn5F/phbS0JGqk6v', "BuyBonusManager", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "810fcmXyb9Bu4OzTZmIkoz9", 'CommonGameManager', undefined);
      (function (_0x1f92d1) {
        _0x1f92d1[_0x1f92d1.Get = 0x0] = "Get";
        _0x1f92d1[_0x1f92d1.Post = 0x1] = "Post";
      })(_0x52ef9a || (_0x52ef9a = {}));
      (function (_0x168e1f) {
        _0x168e1f[_0x168e1f.Ignore = 0x0] = "Ignore";
        _0x168e1f[_0x168e1f.Handle = 0x1] = "Handle";
      })(_0x1b8acc || (_0x1b8acc = {}));
      var _0xa86339 = function () {
        function _0x38b3cf() {
          this.method = _0x52ef9a.Post;
          this.url = '';
          this.type = _0x1b8acc.Ignore;
          this.reqData = null;
          this.info = null;
        }
        _0x9778ac(_0x38b3cf, [{
          'key': 'Type',
          'get': function () {
            return this.type;
          }
        }, {
          'key': 'Method',
          'get': function () {
            return this.method;
          }
        }, {
          'key': 'URL',
          'get': function () {
            return this.url;
          }
        }]);
        return _0x38b3cf;
      }();
      var _0x397841;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "0e324Erw0JDW6aCYO5d0i2g", "DailyMissionManager", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "dd020H2ox5CQ70Z9VNWXYpK", "DebrisManager", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "1fcfdTjgMdDr4mh99NzZ29B", "GaiaManager", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "a3f63TygSlA6KwEkLDlQIoJ", "GiftCodeManager", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "9692fSvI0xNR5GVPmbcEfzq", "IframeCommandManager", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "d8221PEwlRBep+hz+x7w5Ot", "NewBottomBarManager", undefined);
      var _0x35e83c;
      var _0x121e70;
      var _0x373d70;
      var _0x5bb90e;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "28748R+s5pCY7kwYZ0zkqKk", "NewExtraManager", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "861e1J/bwRGlI4J13TOOh4y", "TrialManager", undefined);
      (function (_0x2ac790) {
        _0x2ac790[_0x2ac790.None = 0x0] = "None";
        _0x2ac790[_0x2ac790.Playing = 0x1] = 'Playing';
        _0x2ac790[_0x2ac790.Item = 0x2] = "Item";
      })(_0x373d70 || (_0x373d70 = {}));
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "0f3df9al6NIJJ1/5ZP5aShG", 'MsgBoxManager', undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "8de065l1yBCNoeRGxK2yzaD", "StateManager", undefined);
      var _0x599181;
      var _0x35d1e9;
      var _0x16b616;
      var _0x55475f;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, 'c7e3d4LY9dOUokI+wu7YgCQ', "AutoShowManager", undefined);
      (function (_0x24c8ab) {
        _0x24c8ab[_0x24c8ab.SKY_BAR = 0x0] = "SKY_BAR";
        _0x24c8ab[_0x24c8ab.PAYTABLE = 0x1] = "PAYTABLE";
        _0x24c8ab[_0x24c8ab.LANDING = 0x2] = 'LANDING';
        _0x24c8ab[_0x24c8ab.DISCOUNT = 0x3] = "DISCOUNT";
        _0x24c8ab[_0x24c8ab.EXTRA_BET = 0x4] = "EXTRA_BET";
        _0x24c8ab[_0x24c8ab.ICONBOX = 0x5] = "ICONBOX";
      })(_0x35d1e9 || (_0x35d1e9 = {}));
      _0x361286._RF.pop();
      _0x361286._RF.push({}, 'd388f5XkRRFcYXg5usnXTa/', "LocaleStringManager", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "077a5gmYEpIQqr+YOtt+g08", "LocalStorageManager", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "8c0f7IX3HNLY6BaWiL8u0j4", "SoundManager", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, '50f8dtxxuFDo6qJW6FBFBaO', "EventManager", undefined);
      var _0x431495;
      var _0x2774fc;
      var _0x11aa40;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "18947v7ICNDlYz3G5vE642k", "LoadPrefabManager", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "de7f6JwfsBHBYba0UlqLoFI", "NotificationManager", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "81438uBGiNJXoDkKAmuxEJu", "FunctionControlManager", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, '3e41doUMVNLQbg53Jn6N9ch', 'SoundAudioManager', undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "cfe9e3/byhFGL1S1brGrbPU", "DebugManager", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "858d45NBqBLW5W3J41WER1G", "index", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "24093KseUVOGKCENpO3LB1b", "ColumnSymbol", undefined);
      var _0x1b5213 = _0x55c899.ccclass;
      _0x2774fc = _0x1b5213("ColumnSymbol");
      var _0x1ed7c2 = _0x2774fc(_0x11aa40 = function () {
        function _0x13d385(_0xae59f6, _0x5222d9, _0x2d6dfd, _0x2055be, _0x5debe1) {
          this.m_parentNode = null;
          this.m_symbolUnit = new Array();
          this.m_symbols = [];
          this.m_funcGetSymbolSpriteFrame = undefined;
          this.m_name = '';
          this.m_currentOddData = [];
          this.m_currentValueData = [];
          this.m_basePos = _0x1923c2(0x0, 0x0, 0x0);
          this.m_parentNode = _0xae59f6;
          this.m_funcGetSymbolSpriteFrame = _0x5222d9;
          _0x4f3334('');
          for (var _0x2bb6e2 = _0x5debe1 - 0x1; _0x2bb6e2 >= 0x0; _0x2bb6e2--) {
            var _0x1305be = _0x17cf83(_0x2d6dfd);
            var _0x248abe = _0x1305be.getComponent(_0x342e00);
            _0x248abe.Init(_0x2055be);
            this.m_parentNode.addChild(_0x1305be);
            this.m_symbolUnit[_0x2bb6e2] = _0x248abe;
          }
        }
        var _0x5850f9 = _0x13d385.prototype;
        _0x5850f9.NumberFormatKM = function (_0x13f196) {
          var _0x3d7ad9 = _0x13f196;
          return _0x13f196 >= 0xf4240 ? (_0x3d7ad9 = _0x4bcdb4.strip(_0x4bcdb4.divide(_0x13f196, 0xf4240)), _0x4bcdb4.FormatNumberThousands(_0x3d7ad9, 0x3), _0x4bcdb4.FormatNumberThousands(_0x3d7ad9, 0x3) + 'M') : _0x13f196 >= 0x3e8 ? (_0x3d7ad9 = _0x4bcdb4.strip(_0x4bcdb4.divide(_0x13f196, 0x3e8)), _0x4bcdb4.FormatNumberThousands(_0x3d7ad9, 0x3), _0x4bcdb4.FormatNumberThousands(_0x3d7ad9, 0x3) + 'K') : _0x4bcdb4.FormatNumberThousands(_0x3d7ad9, 0x3);
        };
        _0x5850f9.SetSymbols = function (_0x16f9d6) {
          this.m_symbols = _0x16f9d6;
          var _0x2f0b88 = this.GetSiblingIdxData(_0x16f9d6);
          for (var _0x530f5a = 0x0; _0x530f5a < this.m_symbolUnit.length; ++_0x530f5a) {
            if (_0x530f5a < _0x16f9d6.length) {
              this.m_symbolUnit[_0x530f5a].SetActive(true);
              var _0x50f94e = _0x2f0b88[_0x530f5a];
              this.m_symbolUnit[_0x530f5a].SetSibling(_0x50f94e);
              this.m_symbolUnit[_0x530f5a].SetIsWild(_0x16f9d6[_0x530f5a] == _0x4772ce.Symbol.WILD);
              this.m_symbolUnit[_0x530f5a].SetSprite(this.m_funcGetSymbolSpriteFrame(_0x16f9d6[_0x530f5a]));
              this.m_symbolUnit[_0x530f5a].SetPosition(this.CalPosY(_0x530f5a));
            } else {
              this.m_symbolUnit[_0x530f5a].SetActive(false);
            }
          }
        };
        _0x5850f9.GetSiblingIdxData = function (_0x128367) {
          var _0x4d426f = _0x4772ce.Symbol.WILD;
          var _0x3472f4 = new Array(_0x128367.length).fill(0x0);
          var _0x215c38 = 0x0;
          var _0x81402 = [];
          _0x128367.forEach(function (_0x7bbef4, _0x4dd996) {
            if (_0x7bbef4 !== _0x4d426f) {
              _0x3472f4[_0x4dd996] = _0x215c38++;
            } else {
              _0x81402.push(_0x4dd996);
            }
          });
          var _0x2c55c5 = _0x128367.length - 0x1;
          _0x81402.forEach(function (_0x44041f) {
            _0x3472f4[_0x44041f] = _0x2c55c5--;
          });
          return _0x3472f4;
        };
        _0x5850f9.SetWildOdds = function (_0x5ebcd2) {
          for (var _0x3dfa60 = 0x0; _0x3dfa60 < this.m_symbolUnit.length; ++_0x3dfa60) {
            if (_0x3dfa60 < _0x5ebcd2.length) {
              var _0x5a0c01 = _0x4bcdb4.times(_0x5ebcd2[_0x3dfa60], _0x35e83c.GetNowBetValue());
              this.m_symbolUnit[_0x3dfa60].SetActive(true);
              this.m_symbolUnit[_0x3dfa60].SetNum(this.NumberFormatKM(_0x5a0c01), _0x5ebcd2[_0x3dfa60]);
              this.m_symbolUnit[_0x3dfa60].SetPosition(this.CalPosY(_0x3dfa60));
              this.m_currentOddData[_0x3dfa60] = _0x5ebcd2[_0x3dfa60];
              this.m_currentValueData[_0x3dfa60] = _0x5a0c01;
            } else {
              this.m_symbolUnit[_0x3dfa60].SetActive(false);
            }
          }
        };
        _0x5850f9.ChangeSymbol = function (_0xcd1bcd, _0x46ee32) {
          this.m_symbolUnit[_0x46ee32].SetSprite(this.m_funcGetSymbolSpriteFrame(_0xcd1bcd));
          this.m_symbolUnit[_0x46ee32].SetActive(true);
        };
        _0x5850f9.SetPosition = function (_0x3eedf1) {
          this.m_basePos = _0x3eedf1;
          for (var _0x118adb = 0x0; _0x118adb < this.m_symbols.length; ++_0x118adb) {
            var _0x202549 = this.CalPosY(_0x118adb);
            this.m_symbolUnit[_0x118adb].SetPosition(_0x202549);
          }
        };
        _0x5850f9.CalPosY = function (_0x508cbc) {
          var _0x1c841a = this.m_basePos.clone();
          _0x1c841a.y += 0.5 * (this.m_symbolUnit.length - 0x1 - 0x2 * _0x508cbc) * _0x4772ce.SymbolHeight;
          return _0x1c841a;
        };
        _0x5850f9.CalStopPosY = function (_0x2e9205) {
          var _0x17f4f3 = _0x1923c2(0x0, 0x0, 0x0);
          _0x17f4f3.y += 0.5 * (this.m_symbolUnit.length - 0x1 - 0x2 * _0x2e9205) * _0x4772ce.SymbolHeight;
          return _0x17f4f3;
        };
        _0x5850f9.HideSymbolByRow = function (_0xfde35c) {
          if (this.m_symbolUnit[_0xfde35c]) {
            this.m_symbolUnit[_0xfde35c].SetActive(false);
          }
        };
        _0x5850f9.ShowSymbolByRow = function (_0x4c1f06) {
          if (this.m_symbolUnit[_0x4c1f06]) {
            this.m_symbolUnit[_0x4c1f06].SetActive(true);
          }
        };
        _0x5850f9.SetColumnVisiable = function (_0x4e5f4f) {
          for (var _0x267a05 = 0x0; _0x267a05 < this.m_symbolUnit.length; ++_0x267a05) {
            this.m_symbolUnit[_0x267a05].SetActive(_0x4e5f4f);
          }
        };
        _0x5850f9.SetSymbolDark = function (_0x17f690) {
          var _0x1e77aa = _0x17f690 ? _0x18aeb9(0x60, 0x60, 0x60) : _0x18aeb9(0xff, 0xff, 0xff);
          for (var _0x451965 = 0x0; _0x451965 < this.m_symbolUnit.length; ++_0x451965) {
            this.m_symbolUnit[_0x451965].SetColor(_0x1e77aa);
          }
        };
        _0x5850f9.GetSymbol = function (_0x4caf9f) {
          return this.m_symbolUnit[_0x4caf9f];
        };
        _0x5850f9.GetCurrentOdd = function (_0x52c9db) {
          return this.m_currentOddData[_0x52c9db];
        };
        _0x5850f9.GetCurrentValue = function (_0x13744d) {
          return this.m_currentValueData[_0x13744d];
        };
        _0x9778ac(_0x13d385, [{
          'key': "Name",
          'get': function () {
            return this.m_name;
          },
          'set': function (_0x59b3ff) {
            this.m_name = _0x59b3ff;
          }
        }]);
        return _0x13d385;
      }()) || _0x11aa40;
      var _0xec74c3;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, 'd425clw7pRD7ovKzxig6ls9', 'CommonEffect', undefined);
      (function (_0x43242e) {
        var _0x4f88b5 = function () {
          function _0x4845d4() {}
          _0x4845d4.PascalTriangleLine = function (_0x2e83e0) {
            var _0x4e12d1 = [0x1];
            for (var _0x497613 = 0x1; _0x497613 < _0x2e83e0; _0x497613++) {
              _0x4e12d1[_0x497613] = _0x4e12d1[_0x497613 - 0x1] * (_0x2e83e0 - _0x497613) / _0x497613;
            }
            return _0x4e12d1;
          };
          _0x4845d4.RangedRandom = function (_0x53bdb7, _0x5a9b5e) {
            return (_0x5a9b5e - _0x53bdb7) * Math.random() + _0x53bdb7;
          };
          _0x4845d4.GetRandomRectPos = function (_0x13a978, _0xdb55db, _0x6137a1) {
            var _0x165291 = _0x334191(this.RangedRandom(-_0xdb55db.x, _0xdb55db.x) / 0x2 | 0x0, this.RangedRandom(-_0xdb55db.x, _0xdb55db.x) / 0x2 | 0x0).rotate(_0x6137a1 * _0xc34e6a.RAD);
            return _0x13a978.add(_0x165291);
          };
          _0x4845d4.GetRandomOvalPos = function (_0x3ee229, _0x401d61, _0x490238) {
            var _0x4e8f33 = _0x401d61.y / Math.max(0x1, _0x401d61.x);
            var _0x1edc4a = Math.random() * _0x401d61.x * 0.5;
            var _0x131fef = Math.random() * Math.PI * 0x2;
            var _0x111b67 = _0x334191(_0x1edc4a * Math.cos(_0x131fef), _0x1edc4a * Math.sin(_0x131fef) * _0x4e8f33).rotate(_0x490238 * _0xc34e6a.RAD);
            return _0x3ee229.add(_0x111b67);
          };
          _0x4845d4.ZoomAndFlip = function (_0x33ad07, _0x5ac72a, _0x556ee6, _0x3a2720) {
            var _0x13b34e = Math.sin(_0x3a2720 * Math.PI) * (_0x5ac72a - _0x33ad07) + _0x33ad07;
            var _0x134314 = Math.cos(_0x3a2720 * Math.PI * _0x556ee6);
            return _0x334191(_0x13b34e * _0x134314, _0x13b34e);
          };
          return _0x4845d4;
        }();
        _0x43242e.ExtendsMath = _0x4f88b5;
        var _0x697264 = function () {
          function _0x465a7b(_0x1bdb19) {
            this.pts = null;
            this.len = 0x0;
            this.ptl = null;
            this.bez = null;
            this.len = _0x1bdb19.length;
            if (0x0 == this.len) {
              _0x1bdb19.push(_0x1923c2(0x0, 0x0));
              _0x1bdb19.push(_0x1923c2(0x0, 0x0));
            } else if (0x1 == this.len) {
              _0x1bdb19.push(_0x1923c2(_0x1bdb19[0x0].x, _0x1bdb19[0x0].y));
            }
            this.pts = _0x1bdb19;
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
                this.ptl = _0x4f88b5.PascalTriangleLine(this.len);
                this.bez = this.BezierN;
            }
          }
          var _0x4665f3 = _0x465a7b.prototype;
          _0x4665f3.GetPosition = function (_0x3b1406) {
            return this.bez.apply(this, [_0x3b1406]);
          };
          _0x4665f3.Bezier2 = function (_0x1d90af) {
            var _0x2b92b1 = 0x1 - _0x1d90af;
            return _0x1923c2(_0x2b92b1 * this.pts[0x0].x + _0x1d90af * this.pts[0x1].x, _0x2b92b1 * this.pts[0x0].y + _0x1d90af * this.pts[0x1].y);
          };
          _0x4665f3.Bezier3 = function (_0x4f96b0) {
            var _0x13f648 = 0x1 - _0x4f96b0;
            var _0x46f36b = [_0x13f648 * _0x13f648, 0x2 * _0x13f648 * _0x4f96b0, _0x4f96b0 * _0x4f96b0];
            return _0x1923c2(_0x46f36b[0x0] * this.pts[0x0].x + _0x46f36b[0x1] * this.pts[0x1].x + _0x46f36b[0x2] * this.pts[0x2].x, _0x46f36b[0x0] * this.pts[0x0].y + _0x46f36b[0x1] * this.pts[0x1].y + _0x46f36b[0x2] * this.pts[0x2].y);
          };
          _0x4665f3.Bezier4 = function (_0xc4f25d) {
            var _0x6b7e22 = 0x1 - _0xc4f25d;
            var _0x35dc3f = [_0x6b7e22 * _0x6b7e22 * _0x6b7e22, 0x3 * _0x6b7e22 * _0x6b7e22 * _0xc4f25d, 0x3 * _0x6b7e22 * _0xc4f25d * _0xc4f25d, _0xc4f25d * _0xc4f25d * _0xc4f25d];
            return _0x1923c2(_0x35dc3f[0x0] * this.pts[0x0].x + _0x35dc3f[0x1] * this.pts[0x1].x + _0x35dc3f[0x2] * this.pts[0x2].x + _0x35dc3f[0x3] * this.pts[0x3].x, _0x35dc3f[0x0] * this.pts[0x0].y + _0x35dc3f[0x1] * this.pts[0x1].y + _0x35dc3f[0x2] * this.pts[0x2].y + _0x35dc3f[0x3] * this.pts[0x3].y);
          };
          _0x4665f3.Bezier5 = function (_0x3e8e01) {
            var _0x5ce4b7 = 0x1 - _0x3e8e01;
            var _0x4ecc8c = [_0x5ce4b7 * _0x5ce4b7 * _0x5ce4b7 * _0x5ce4b7, 0x4 * _0x5ce4b7 * _0x5ce4b7 * _0x5ce4b7 * _0x3e8e01, 0x6 * _0x5ce4b7 * _0x5ce4b7 * _0x3e8e01 * _0x3e8e01, 0x4 * _0x5ce4b7 * _0x3e8e01 * _0x3e8e01 * _0x3e8e01, _0x3e8e01 * _0x3e8e01 * _0x3e8e01 * _0x3e8e01];
            return _0x1923c2(_0x4ecc8c[0x0] * this.pts[0x0].x + _0x4ecc8c[0x1] * this.pts[0x1].x + _0x4ecc8c[0x2] * this.pts[0x2].x + _0x4ecc8c[0x3] * this.pts[0x3].x + _0x4ecc8c[0x4] * this.pts[0x4].x, _0x4ecc8c[0x0] * this.pts[0x0].y + _0x4ecc8c[0x1] * this.pts[0x1].y + _0x4ecc8c[0x2] * this.pts[0x2].y + _0x4ecc8c[0x3] * this.pts[0x3].y + _0x4ecc8c[0x4] * this.pts[0x4].y);
          };
          _0x4665f3.Bezier6 = function (_0x3dd0b3) {
            var _0x53e29a = 0x1 - _0x3dd0b3;
            var _0x2327c2 = [_0x53e29a * _0x53e29a * _0x53e29a * _0x53e29a * _0x53e29a, 0x5 * _0x53e29a * _0x53e29a * _0x53e29a * _0x53e29a * _0x3dd0b3, 0xa * _0x53e29a * _0x53e29a * _0x53e29a * _0x3dd0b3 * _0x3dd0b3, 0xa * _0x53e29a * _0x53e29a * _0x3dd0b3 * _0x3dd0b3 * _0x3dd0b3, 0x5 * _0x53e29a * _0x3dd0b3 * _0x3dd0b3 * _0x3dd0b3 * _0x3dd0b3, _0x3dd0b3 * _0x3dd0b3 * _0x3dd0b3 * _0x3dd0b3 * _0x3dd0b3];
            return _0x1923c2(_0x2327c2[0x0] * this.pts[0x0].x + _0x2327c2[0x1] * this.pts[0x1].x + _0x2327c2[0x2] * this.pts[0x2].x + _0x2327c2[0x3] * this.pts[0x3].x + _0x2327c2[0x4] * this.pts[0x4].x + _0x2327c2[0x5] * this.pts[0x5].x, _0x2327c2[0x0] * this.pts[0x0].y + _0x2327c2[0x1] * this.pts[0x1].y + _0x2327c2[0x2] * this.pts[0x2].y + _0x2327c2[0x3] * this.pts[0x3].y + _0x2327c2[0x4] * this.pts[0x4].y + _0x2327c2[0x5] * this.pts[0x5].y);
          };
          _0x4665f3.BezierN = function (_0x467bca) {
            var _0x34394e = 0x1 - _0x467bca;
            var _0x226753 = _0x1923c2(0x0, 0x0);
            for (var _0x576bd2 = 0x0; _0x576bd2 < this.len; _0x576bd2++) {
              var _0x5c6858 = 0x1;
              for (var _0x288bd0 = 0x0; _0x288bd0 < this.len - _0x576bd2 - 0x1; _0x288bd0++) {
                _0x5c6858 *= _0x34394e;
              }
              for (var _0x602cb7 = 0x0; _0x602cb7 < _0x576bd2; _0x602cb7++) {
                _0x5c6858 *= _0x467bca;
              }
              _0x226753.x += _0x5c6858 * this.ptl[_0x576bd2] * this.pts[_0x576bd2].x;
              _0x226753.y += _0x5c6858 * this.ptl[_0x576bd2] * this.pts[_0x576bd2].y;
            }
            return _0x226753;
          };
          return _0x465a7b;
        }();
        _0x43242e.Bezier = _0x697264;
      })(_0xec74c3 || (_0xec74c3 = {}));
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "8462bJnOS5IGolTvJKgHdJW", "DataStructure", undefined);
      var _0x140b3c = function (_0x2f7d14) {
        function _0x4a7652() {
          var _0x39823d;
          (_0x39823d = _0x2f7d14.call(this) || this).method = _0x52ef9a.Post;
          _0x39823d.url = "/setgem";
          _0x39823d.info = null;
          _0x39823d.reqData = null;
          return _0x39823d;
        }
        _0x5b6a43(_0x4a7652, _0x2f7d14);
        return _0x4a7652;
      }(_0xa86339);
      var _0x2e0ef6;
      var _0x55153f;
      var _0x34b544;
      var _0x1ab841;
      var _0xd576fb;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "0cad2iaXgpLyYSRyk0eKwA7", "BlowFlyEffect", undefined);
      var _0x5b4f8b = _0x55c899.ccclass;
      var _0x3d8d25 = _0x55c899.property;
      _0x2e0ef6 = _0x5b4f8b("BlowFlyEffect");
      _0x55153f = _0x3d8d25({
        'type': _0xf24552
      });
      _0x1ab841 = function (_0x498653) {
        function _0x4fccd0() {
          var _0x229ebf;
          var _0x29d151 = arguments.length;
          var _0x3cc07c = new Array(_0x29d151);
          for (var _0x5c76d3 = 0x0; _0x5c76d3 < _0x29d151; _0x5c76d3++) {
            _0x3cc07c[_0x5c76d3] = arguments[_0x5c76d3];
          }
          _0x7af141(_0x229ebf = _0x498653.call.apply(_0x498653, [this].concat(_0x3cc07c)) || this, "m_FlyEffectPos", _0xd576fb, _0x4c7417(_0x229ebf));
          _0x229ebf.m_gameView = undefined;
          _0x229ebf.m_CreateEffectNodeFunc = undefined;
          return _0x229ebf;
        }
        _0x5b6a43(_0x4fccd0, _0x498653);
        var _0x364e22 = _0x4fccd0.prototype;
        _0x364e22.init = function (_0x140ca5, _0x546da3) {
          this.m_gameView = _0x140ca5;
          this.m_CreateEffectNodeFunc = _0x546da3;
        };
        _0x364e22.PlayBlowAnim = function () {
          var _0x13ab77 = _0x2b8ecf(_0x17c453().mark(function _0x1dc28a() {
            var _0x34b46d;
            var _0x35b9c7;
            var _0x36d0ac;
            var _0x19e020;
            var _0x2ee574;
            var _0x7d61ad;
            var _0x228dbb = this;
            return _0x17c453().wrap(function (_0x343e77) {
              for (;;) {
                switch (_0x343e77.prev = _0x343e77.next) {
                  case 0x0:
                    _0x34b46d = this.GetNeedBlowWildArray();
                    _0x35b9c7 = [];
                    _0x36d0ac = false;
                    _0x19e020 = _0x17c453().mark(function _0x2bbfff(_0x6a716f) {
                      var _0x39d2c8;
                      var _0x5ce34a;
                      var _0x407e11;
                      return _0x17c453().wrap(function (_0x110f3e) {
                        for (;;) {
                          switch (_0x110f3e.prev = _0x110f3e.next) {
                            case 0x0:
                              _0x39d2c8 = [];
                              _0x5ce34a = function (_0x50fba9) {
                                if (_0x34b46d[_0x6a716f][_0x50fba9]) {
                                  _0x228dbb.m_gameView.SlotReels.Columns[_0x6a716f].HideSymbolByRow(_0x50fba9);
                                  var _0x30aac3 = _0x4772ce.SYMBOL_SPINE_SIZE;
                                  var _0x3cf176 = _0x228dbb.m_CreateEffectNodeFunc(_0x6a716f, _0x50fba9, _0x4772ce.LAYERS.TOP, _0x4772ce.Symbol.WILD, _0x30aac3);
                                  var _0x156398 = _0x228dbb.m_gameView.IsLandscape ? _0x228dbb.m_FlyEffectPos[0x0] : _0x228dbb.m_FlyEffectPos[0x1];
                                  _0x228dbb.ShowWildAddPoint(_0x6a716f, _0x50fba9);
                                  var _0x1b2c91 = _0x228dbb.GetFlySymbol(_0x6a716f, _0x50fba9);
                                  _0x1b2c91.ChangeNumParent(true);
                                  _0x39d2c8.push(_0x3cf176.ShowWildAddPoint());
                                  var _0x1cf37b = function () {
                                    var _0x393d83 = _0x2b8ecf(_0x17c453().mark(function _0x39afac() {
                                      return _0x17c453().wrap(function (_0x59c169) {
                                        for (;;) {
                                          switch (_0x59c169.prev = _0x59c169.next) {
                                            case 0x0:
                                              _0x228dbb.m_gameView.SlotReels.Columns[_0x6a716f].ShowSymbolByRow(_0x50fba9);
                                            case 0x1:
                                            case "end":
                                              return _0x59c169.stop();
                                          }
                                        }
                                      }, _0x39afac);
                                    }));
                                    return function () {
                                      return _0x393d83.apply(this, arguments);
                                    };
                                  }();
                                  _0x39d2c8.push(_0x1b2c91.PlayFlyAnim(_0x156398.node, _0x1cf37b, _0x4772ce.ACTION_DELAY_TIME.WILD_FLY_EFFECT_START, _0x4772ce.ACTION_DELAY_TIME.WILD_FLY_EFFECT_END));
                                  _0x36d0ac = true;
                                }
                              };
                              for (_0x407e11 = _0x34b46d[_0x6a716f].length - 0x1; _0x407e11 >= 0x0; _0x407e11--) {
                                _0x5ce34a(_0x407e11);
                              }
                              _0x35b9c7.push(Promise.all(_0x39d2c8));
                              if (!(_0x6a716f < _0x4772ce.COL_LENGTH - 0x1)) {
                                _0x110f3e.next = 0x7;
                                break;
                              }
                              _0x110f3e.next = 0x7;
                              return _0x20a3f2.Wait(_0x228dbb, 0.1);
                            case 0x7:
                            case "end":
                              return _0x110f3e.stop();
                          }
                        }
                      }, _0x2bbfff);
                    });
                    _0x2ee574 = 0x0;
                  case 0x5:
                    if (!(_0x2ee574 < _0x34b46d.length)) {
                      _0x343e77.next = 0xa;
                      break;
                    }
                    return _0x343e77.delegateYield(_0x19e020(_0x2ee574), 't0', 0x7);
                  case 0x7:
                    ++_0x2ee574;
                    _0x343e77.next = 0x5;
                    break;
                  case 0xa:
                    if (_0x36d0ac) {
                      _0x55475f.Play(_0x4772ce.AudioClips.Wild_Bonus);
                    }
                    _0x343e77.next = 0xd;
                    return Promise.all(_0x35b9c7);
                  case 0xd:
                    if (!_0x36d0ac) {
                      _0x343e77.next = 0x11;
                      break;
                    }
                    _0x7d61ad = _0x4bcdb4.divide(this.m_gameView.SpinAckQue.WildWin, this.m_gameView.SpinAckQue.Mult);
                    _0x343e77.next = 0x11;
                    return this.m_gameView.WinBoardMgr.ShowScore(_0x7d61ad, 0x0);
                  case 0x11:
                  case "end":
                    return _0x343e77.stop();
                }
              }
            }, _0x1dc28a, this);
          }));
          return function () {
            return _0x13ab77.apply(this, arguments);
          };
        }();
        _0x364e22.GetNeedBlowWildArray = function () {
          var _0x4ec7e4 = Array.from({
            'length': _0x4772ce.COL_LENGTH
          }, function () {
            return new Array(_0x4772ce.ROW_LENGTH).fill(false);
          });
          var _0x2ea5a9 = this.m_gameView.SpinAckQue.AwardDataVec;
          if (null == _0x2ea5a9 || 0x0 == _0x2ea5a9.length) {
            return _0x4ec7e4;
          }
          var _0x125e10 = _0x4772ce.SYMBOL_LINE_VEC;
          for (var _0x433782 = 0x0; _0x433782 < _0x2ea5a9.length; _0x433782++) {
            for (var _0x523725 = 0x0; _0x523725 < _0x125e10[_0x2ea5a9[_0x433782].Line].length; _0x523725++) {
              var _0x335b6c = _0x125e10[_0x2ea5a9[_0x433782].Line][_0x523725].x;
              var _0x58dbae = _0x125e10[_0x2ea5a9[_0x433782].Line][_0x523725].y;
              var _0x460022 = this.CheckIsWild(_0x335b6c, _0x58dbae);
              _0x4ec7e4[_0x335b6c][_0x58dbae] = _0x460022;
            }
          }
          return _0x4ec7e4;
        };
        _0x364e22.CheckIsWild = function (_0x12bc86, _0x2a40ee) {
          return this.m_gameView.OldRealPlate[_0x12bc86].Row[_0x2a40ee] === _0x4772ce.Symbol.WILD;
        };
        _0x364e22.ShowWildAddPoint = function () {
          var _0x51848e = _0x2b8ecf(_0x17c453().mark(function _0x38cf34(_0x2301eb, _0x5a1187) {
            var _0x1bb539;
            return _0x17c453().wrap(function (_0x11b1d2) {
              for (;;) {
                switch (_0x11b1d2.prev = _0x11b1d2.next) {
                  case 0x0:
                    _0x1bb539 = _0x4772ce.SYMBOL_SPINE_SIZE;
                    this.m_CreateEffectNodeFunc(_0x2301eb, _0x5a1187, _0x4772ce.LAYERS.TOP, _0x4772ce.Symbol.WILD, _0x1bb539).ShowWildAddPoint();
                  case 0x3:
                  case "end":
                    return _0x11b1d2.stop();
                }
              }
            }, _0x38cf34, this);
          }));
          return function (_0x18f667, _0x4b1b0c) {
            return _0x51848e.apply(this, arguments);
          };
        }();
        _0x364e22.GetFlySymbol = function (_0x2c3089, _0x4f2dc6) {
          return this.m_gameView.SlotReels.Columns[_0x2c3089].GetSymbol(_0x4f2dc6);
        };
        _0x364e22.ResetSymbolNum = function (_0x28b07c) {
          for (var _0x29fa4c = 0x0; _0x29fa4c < _0x28b07c.length; ++_0x29fa4c) {
            for (var _0x1abd28 = 0x0; _0x1abd28 < _0x28b07c[_0x29fa4c].length; ++_0x1abd28) {
              if (_0x28b07c[_0x29fa4c][_0x1abd28]) {
                this.GetFlySymbol(_0x29fa4c, _0x1abd28).Reset();
              }
            }
          }
        };
        _0x364e22.RecoverFlyedNumber = function () {
          var _0x2859d4 = this.GetNeedBlowWildArray();
          for (var _0x1b496a = 0x0; _0x1b496a < _0x2859d4.length; ++_0x1b496a) {
            for (var _0x529612 = _0x2859d4[_0x1b496a].length - 0x1; _0x529612 >= 0x0; _0x529612--) {
              if (_0x2859d4[_0x1b496a][_0x529612]) {
                this.GetFlySymbol(_0x1b496a, _0x529612).SetNumActive(true);
              }
            }
          }
        };
        return _0x4fccd0;
      }(_0xf24552);
      _0xd576fb = _0x4bec9c(_0x1ab841.prototype, "m_FlyEffectPos", [_0x55153f], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      var _0x475efc = _0x2e0ef6(_0x34b544 = _0x1ab841) || _0x34b544;
      var _0xdf9a3c;
      var _0xf64bbb;
      var _0x4a0f23;
      var _0x33645b;
      var _0x435050;
      var _0x2f91c4;
      var _0x467982;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, 'd5f61L4QUhLaI+gtxtOyqJZ', "CollectFlyEffect", undefined);
      var _0x41056a = _0x55c899.ccclass;
      var _0x31a377 = _0x55c899.property;
      _0xdf9a3c = _0x41056a('CollectFlyEffect');
      _0xf64bbb = _0x31a377({
        'type': _0x2bf5c4,
        'tooltip': '飛行節點'
      });
      _0x4a0f23 = _0x31a377({
        'type': _0xf24552
      });
      _0x435050 = function (_0x36113b) {
        function _0x490692() {
          var _0x1161b5;
          var _0x513b39 = arguments.length;
          var _0x5a17fb = new Array(_0x513b39);
          for (var _0x4d1290 = 0x0; _0x4d1290 < _0x513b39; _0x4d1290++) {
            _0x5a17fb[_0x4d1290] = arguments[_0x4d1290];
          }
          _0x7af141(_0x1161b5 = _0x36113b.call.apply(_0x36113b, [this].concat(_0x5a17fb)) || this, "m_flyEffectNodes", _0x2f91c4, _0x4c7417(_0x1161b5));
          _0x7af141(_0x1161b5, "m_FlyEndPos", _0x467982, _0x4c7417(_0x1161b5));
          _0x1161b5.m_gameView = null;
          return _0x1161b5;
        }
        _0x5b6a43(_0x490692, _0x36113b);
        var _0x1008c6 = _0x490692.prototype;
        _0x1008c6.init = function (_0x344963) {
          this.m_gameView = _0x344963;
        };
        _0x1008c6.ShowWildStop = function () {
          var _0x30ac8d = _0x2b8ecf(_0x17c453().mark(function _0x22803e(_0x1ba235) {
            var _0x223880;
            var _0x349a06;
            var _0x373cc0;
            var _0x224ff9;
            var _0x4cf7cc = this;
            return _0x17c453().wrap(function (_0x5101fb) {
              for (;;) {
                switch (_0x5101fb.prev = _0x5101fb.next) {
                  case 0x0:
                    _0x223880 = this.m_gameView.OldRealPlate;
                    _0x349a06 = [];
                    for (_0x373cc0 = 0x0; _0x373cc0 < _0x223880[_0x1ba235].Row.length; ++_0x373cc0) {
                      if (_0x223880[_0x1ba235].Row[_0x373cc0] === _0x4772ce.Symbol.WILD) {
                        (function () {
                          _0x4cf7cc.CheckUpgrade();
                          var _0x2f82c8 = _0x1ba235 * _0x4772ce.COL_LENGTH + _0x373cc0;
                          var _0x4a2b1a = _0x4cf7cc.GetWorldLocation(_0x4cf7cc.m_flyEffectNodes[_0x2f82c8].getChildByName("FX_MotionStreak").getComponent(_0xf24552));
                          var _0x5c5b0e = _0x4cf7cc.m_gameView.IsLandscape ? _0x4cf7cc.m_FlyEndPos[0x0] : _0x4cf7cc.m_FlyEndPos[0x1];
                          var _0x1a80f0 = _0x4cf7cc.GetWorldLocation(_0x5c5b0e);
                          _0x4cf7cc.m_flyEffectNodes[_0x2f82c8].active = true;
                          var _0x4ab4e7 = function () {
                            var _0x33c9f8 = _0x2b8ecf(_0x17c453().mark(function _0x32eae7() {
                              return _0x17c453().wrap(function (_0xe32d3f) {
                                for (;;) {
                                  switch (_0xe32d3f.prev = _0xe32d3f.next) {
                                    case 0x0:
                                      _0x4cf7cc.m_gameView.AvatarSpine.PlayEffectCollectFX();
                                      _0xe32d3f.next = 0x3;
                                      return _0x20a3f2.Wait(_0x4cf7cc, 0.35);
                                    case 0x3:
                                      _0xe32d3f.next = 0x5;
                                      return _0x4cf7cc.m_gameView.AvatarSpine.PlayWildCollect();
                                    case 0x5:
                                      _0x4cf7cc.m_flyEffectNodes[_0x2f82c8].active = false;
                                      _0x4cf7cc.m_flyEffectNodes[_0x2f82c8].getChildByName("FX_MotionStreak").setPosition(_0x1923c2(0x0, 0x0, 0x0));
                                    case 0x7:
                                    case "end":
                                      return _0xe32d3f.stop();
                                  }
                                }
                              }, _0x32eae7);
                            }));
                            return function () {
                              return _0x33c9f8.apply(this, arguments);
                            };
                          }();
                          _0x4cf7cc.m_flyEffectNodes[_0x2f82c8].active = true;
                          _0x4cf7cc.m_flyEffectNodes[_0x2f82c8].getChildByName("Node_Glow").getComponent(_0x582ccd).play("WildGlow");
                          _0x349a06.push(_0x4cf7cc.ShowQuadraticBez(_0x4cf7cc.m_flyEffectNodes[_0x2f82c8].getChildByName("FX_MotionStreak"), _0x4a2b1a, _0x1a80f0, _0x4ab4e7, _0x4772ce.ACTION_DELAY_TIME.WILD_FLY_EFFECT_START, _0x4772ce.ACTION_DELAY_TIME.WILD_FLY_EFFECT_END));
                          _0x349a06.push(_0x4cf7cc.m_flyEffectNodes[_0x2f82c8].getComponent(_0x582ccd).play('FX_Fly_N'));
                        })();
                      }
                    }
                    _0x55475f.Play(_0x4772ce.AudioClips.Collect_Fly);
                    _0x5101fb.next = 0x6;
                    return Promise.all(_0x349a06);
                  case 0x6:
                    for (_0x224ff9 = _0x4772ce.COL_LENGTH * _0x1ba235; _0x224ff9 < _0x4772ce.COL_LENGTH * (_0x1ba235 + 0x1); ++_0x224ff9) {
                      this.m_flyEffectNodes[_0x224ff9].active = false;
                    }
                  case 0x7:
                  case "end":
                    return _0x5101fb.stop();
                }
              }
            }, _0x22803e, this);
          }));
          return function (_0x4e87b8) {
            return _0x30ac8d.apply(this, arguments);
          };
        }();
        _0x1008c6.ShowAllWildStop = function () {
          var _0x434175 = _0x2b8ecf(_0x17c453().mark(function _0x195844() {
            var _0x3acca3;
            var _0x5e340b;
            var _0x133e23;
            var _0x349658;
            var _0x18ad38;
            var _0x4d7a12 = this;
            return _0x17c453().wrap(function (_0x87c01b) {
              for (;;) {
                switch (_0x87c01b.prev = _0x87c01b.next) {
                  case 0x0:
                    _0x3acca3 = this.m_gameView.OldRealPlate;
                    _0x5e340b = [];
                    for (_0x133e23 = 0x0; _0x133e23 < _0x4772ce.COL_LENGTH; ++_0x133e23) {
                      for (_0x349658 = 0x0; _0x349658 < _0x3acca3[_0x133e23].Row.length; ++_0x349658) {
                        if (_0x3acca3[_0x133e23].Row[_0x349658] === _0x4772ce.Symbol.WILD) {
                          (function () {
                            _0x4d7a12.CheckUpgrade();
                            var _0x12f5df = _0x133e23 * _0x4772ce.COL_LENGTH + _0x349658;
                            var _0x151dc4 = _0x4d7a12.GetWorldLocation(_0x4d7a12.m_flyEffectNodes[_0x12f5df].getChildByName("FX_MotionStreak").getComponent(_0xf24552));
                            var _0x5977d0 = _0x4d7a12.m_gameView.IsLandscape ? _0x4d7a12.m_FlyEndPos[0x0] : _0x4d7a12.m_FlyEndPos[0x1];
                            var _0x1e764e = _0x4d7a12.GetWorldLocation(_0x5977d0);
                            _0x4d7a12.m_flyEffectNodes[_0x12f5df].active = true;
                            var _0x22f5a2 = function () {
                              var _0x10205b = _0x2b8ecf(_0x17c453().mark(function _0x16f90b() {
                                return _0x17c453().wrap(function (_0xa18041) {
                                  for (;;) {
                                    switch (_0xa18041.prev = _0xa18041.next) {
                                      case 0x0:
                                        _0x4d7a12.m_gameView.AvatarSpine.PlayEffectCollectFX();
                                        _0xa18041.next = 0x3;
                                        return _0x20a3f2.Wait(_0x4d7a12, 0.35);
                                      case 0x3:
                                        _0xa18041.next = 0x5;
                                        return _0x4d7a12.m_gameView.AvatarSpine.PlayWildCollect();
                                      case 0x5:
                                        _0x4d7a12.m_flyEffectNodes[_0x12f5df].active = false;
                                        _0x4d7a12.m_flyEffectNodes[_0x12f5df].getChildByName("FX_MotionStreak").setPosition(_0x1923c2(0x0, 0x0, 0x0));
                                      case 0x7:
                                      case "end":
                                        return _0xa18041.stop();
                                    }
                                  }
                                }, _0x16f90b);
                              }));
                              return function () {
                                return _0x10205b.apply(this, arguments);
                              };
                            }();
                            _0x4d7a12.m_flyEffectNodes[_0x12f5df].active = true;
                            _0x4d7a12.m_flyEffectNodes[_0x12f5df].getChildByName('Node_Glow').getComponent(_0x582ccd).play("WildGlow");
                            _0x5e340b.push(_0x4d7a12.ShowQuadraticBez(_0x4d7a12.m_flyEffectNodes[_0x12f5df].getChildByName("FX_MotionStreak"), _0x151dc4, _0x1e764e, _0x22f5a2, _0x4772ce.ACTION_DELAY_TIME.WILD_FLY_EFFECT_START, _0x4772ce.ACTION_DELAY_TIME.WILD_FLY_EFFECT_END));
                            _0x5e340b.push(_0x4d7a12.m_flyEffectNodes[_0x12f5df].getComponent(_0x582ccd).play("FX_Fly_N"));
                          })();
                        }
                      }
                    }
                    _0x55475f.Play(_0x4772ce.AudioClips.Collect_Fly);
                    _0x87c01b.next = 0x6;
                    return Promise.all(_0x5e340b);
                  case 0x6:
                    for (_0x18ad38 = 0x0; _0x18ad38 < this.m_flyEffectNodes.length; ++_0x18ad38) {
                      this.m_flyEffectNodes[_0x18ad38].active = false;
                    }
                  case 0x7:
                  case "end":
                    return _0x87c01b.stop();
                }
              }
            }, _0x195844, this);
          }));
          return function () {
            return _0x434175.apply(this, arguments);
          };
        }();
        _0x1008c6.CheckUpgrade = function () {
          var _0x2dcb09 = _0x2b8ecf(_0x17c453().mark(function _0x3b60d6() {
            return _0x17c453().wrap(function (_0x293391) {
              for (;;) {
                switch (_0x293391.prev = _0x293391.next) {
                  case 0x0:
                    if (!(this.m_gameView.IsBonusGame || this.m_gameView.CurUpgradeWaitRound > 0x0 || Math.random() > _0x4772ce.AVATAR_UPGRADE_ODDS || this.m_gameView.CurAvatarLevel >= _0x4772ce.AVATAR_MAX_LEVEL || this.m_gameView.UpgradeWhenIdle || this.m_gameView.UpgradeWhenWin)) {
                      _0x293391.next = 0x2;
                      break;
                    }
                    return _0x293391.abrupt("return");
                  case 0x2:
                    this.m_gameView.CurUpgradeWaitRound = _0x4772ce.AVATAR_UPGRADE_WAIT_ROUND;
                    this.m_gameView.CurAvatarLevel = this.m_gameView.CurAvatarLevel + 0x1;
                    if (0x0 === this.m_gameView.SpinAckQue.TotalWin) {
                      this.m_gameView.UpgradeWhenIdle = true;
                    } else {
                      this.m_gameView.UpgradeWhenWin = true;
                    }
                  case 0x5:
                  case 'end':
                    return _0x293391.stop();
                }
              }
            }, _0x3b60d6, this);
          }));
          return function () {
            return _0x2dcb09.apply(this, arguments);
          };
        }();
        _0x1008c6.GetWorldLocation = function (_0x446919) {
          return _0x446919.getComponent(_0x201890).convertToWorldSpaceAR(_0x1923c2(0x0, 0x0, 0x0));
        };
        _0x1008c6.ShowQuadraticBez = function () {
          var _0x290bb6 = _0x2b8ecf(_0x17c453().mark(function _0x4a85bf(_0x226929, _0x19856f, _0x5974b6, _0x5acff0, _0x1d252e, _0x401462, _0xce7d00) {
            var _0x32f5d3;
            var _0x5a9112;
            var _0x490e06;
            var _0x2c20b9;
            var _0x17f285;
            return _0x17c453().wrap(function (_0x478522) {
              for (;;) {
                switch (_0x478522.prev = _0x478522.next) {
                  case 0x0:
                    if (undefined === _0x1d252e) {
                      _0x1d252e = 0x0;
                    }
                    if (undefined === _0x401462) {
                      _0x401462 = 0x0;
                    }
                    if (!(_0x401462 > 0x0)) {
                      _0x478522.next = 0x5;
                      break;
                    }
                    _0x478522.next = 0x5;
                    return _0x20a3f2.Wait(this, _0x401462);
                  case 0x5:
                    if (_0xce7d00) {
                      _0xce7d00();
                    }
                    _0x32f5d3 = _0x226929.position.clone();
                    (_0x5a9112 = new _0x178207()).x = _0x5974b6.x - _0x19856f.x + _0x226929.position.x;
                    _0x5a9112.y = _0x5974b6.y - _0x19856f.y + _0x226929.position.y;
                    _0x5a9112.z = _0x5974b6.z - _0x19856f.z + _0x226929.position.z;
                    _0x490e06 = this.GetMiddlePos(_0x32f5d3, _0x5a9112);
                    _0x2c20b9 = [_0x32f5d3, _0x490e06, _0x5a9112];
                    _0x17f285 = new _0xec74c3.Bezier(_0x2c20b9);
                    _0x5b954c(_0x226929).to(_0x4772ce.ACTION_DELAY_TIME.WILD_FLY_EFFECT_START, {
                      'position': _0x5a9112
                    }, {
                      'onUpdate': function (_0x572efc, _0x4bac52) {
                        _0x226929.position = _0x17f285.GetPosition(_0x4bac52);
                      }
                    }).start();
                    _0x478522.next = 0x11;
                    return _0x20a3f2.Wait(this, _0x4772ce.ACTION_DELAY_TIME.WILD_FLY_EFFECT_START);
                  case 0x11:
                    if (!_0x5acff0) {
                      _0x478522.next = 0x14;
                      break;
                    }
                    _0x478522.next = 0x14;
                    return _0x5acff0();
                  case 0x14:
                    _0x478522.next = 0x16;
                    return _0x20a3f2.Wait(this, _0x1d252e);
                  case 0x16:
                  case "end":
                    return _0x478522.stop();
                }
              }
            }, _0x4a85bf, this);
          }));
          return function (_0x1eb875, _0x2e7567, _0x55da99, _0x36128d, _0x146d37, _0x4d3c28, _0x132a64) {
            return _0x290bb6.apply(this, arguments);
          };
        }();
        _0x1008c6.GetMiddlePos = function (_0x2310c5, _0x342d46) {
          var _0x332831 = _0x342d46.x - _0x2310c5.x;
          var _0x85e5ed = _0x342d46.y - _0x2310c5.y;
          var _0xeabb46 = _0x1923c2((_0x2310c5.x + _0x342d46.x) / 0x2, (_0x2310c5.y + _0x342d46.y) / 0x2);
          if (this.m_gameView.IsLandscape) {
            _0xeabb46.x = -0xc8;
            _0xeabb46.y = 0x32;
          } else {
            _0xeabb46.x = 0x96;
            _0xeabb46.y = 0x15e;
          }
          var _0x1a5b01 = _0x1923c2();
          _0x1a5b01.x = _0xeabb46.x + _0x85e5ed / 0x2;
          _0x1a5b01.y = _0xeabb46.y - _0x332831 / 0x2;
          if (_0x1a5b01.x > 0x12c || _0x1a5b01.x < -0x12c) {
            _0x1a5b01.x = _0xeabb46.x + _0x85e5ed / 0x2;
            _0x1a5b01.y = _0xeabb46.y + _0x332831 / 0x2;
          }
          return _0x1a5b01;
        };
        _0x1008c6.Reset = function () {
          for (var _0x4708a7 = 0x0; _0x4708a7 < _0x4772ce.COL_LENGTH; ++_0x4708a7) {
            for (var _0x34c984 = 0x0; _0x34c984 < _0x4772ce.ROW_LENGTH; ++_0x34c984) {
              var _0x1d63cb = _0x4708a7 * _0x4772ce.COL_LENGTH + _0x34c984;
              this.m_flyEffectNodes[_0x1d63cb].active = false;
              this.m_flyEffectNodes[_0x1d63cb].setPosition(0xc8 * (_0x4708a7 - 0x1), -163.3 * (_0x34c984 - 0x1));
            }
          }
        };
        return _0x490692;
      }(_0xf24552);
      _0x2f91c4 = _0x4bec9c(_0x435050.prototype, "m_flyEffectNodes", [_0xf64bbb], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x467982 = _0x4bec9c(_0x435050.prototype, "m_FlyEndPos", [_0x4a0f23], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      var _0x1e88a1 = _0xdf9a3c(_0x33645b = _0x435050) || _0x33645b;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "eb033pmYDhAjadYFiwbi8gp", 'SpineKit', undefined);
      var _0x37f809 = function () {
        function _0x352be6() {}
        _0x352be6.ForceCancel = function (_0xd0ed4d, _0x4441b4) {
          var _0x4d0068;
          var _0x37e9dd;
          var _0x54e570;
          if (!(null == (_0x4d0068 = this.m_cancelCbs) || null == (_0x37e9dd = (_0x54e570 = _0x4d0068[_0xd0ed4d])[_0x4441b4]))) {
            _0x37e9dd.call(_0x54e570);
          }
        };
        _0x352be6.PlayAnimation = function (_0x514a0a, _0x24a4ea, _0x1c9133, _0x3d0c1d, _0x2f49aa, _0x52391c) {
          var _0xf11d06 = this;
          if (undefined === _0x1c9133) {
            _0x1c9133 = false;
          }
          if (undefined === _0x3d0c1d) {
            _0x3d0c1d = 0x0;
          }
          if (undefined === _0x52391c) {
            _0x52391c = true;
          }
          return new Promise(function (_0x5ae09d) {
            _0xf11d06.m_cancelCbs[_0x514a0a.name] = {};
            _0xf11d06.m_cancelCbs[_0x514a0a.name][_0x24a4ea] = function () {
              _0x5ae09d(true);
            };
            var _0x5a9cb3 = true;
            var _0x24a4c2 = _0x514a0a.getState();
            if (_0x24a4c2) {
              var _0x599eff = _0x24a4c2.expandToIndex(_0x3d0c1d);
              if (_0x599eff) {
                var _0x236a99 = _0x599eff.animation.name + '.' + _0x24a4ea;
                _0x5a9cb3 = undefined === _0x24a4c2.data.animationToMixTime[_0x236a99];
              }
            }
            if (_0x5a9cb3) {
              _0x514a0a.clearTrack(_0x3d0c1d);
              if (_0x52391c) {
                _0x514a0a.setToSetupPose();
              }
            }
            var _0x24a59e = _0x514a0a.setAnimation(_0x3d0c1d, _0x24a4ea, _0x1c9133);
            if (_0x24a59e) {
              _0x514a0a.setTrackEventListener(_0x24a59e, function (_0x546235, _0x1e0aa1) {
                if (_0x24a59e && _0x24a59e.animation.name == _0x546235.animation.name) {
                  if (!(null == _0x2f49aa)) {
                    _0x2f49aa(_0x1e0aa1.data.name);
                  }
                }
              });
              _0x514a0a.setTrackCompleteListener(_0x24a59e, function (_0x2b582d) {
                if (_0x24a59e && _0x24a59e.animation.name == _0x2b582d.animation.name) {
                  _0x514a0a.setTrackCompleteListener(_0x24a59e, function () {});
                  _0x514a0a.setTrackInterruptListener(_0x24a59e, function () {});
                  if (_0xf11d06.m_cancelCbs[_0x514a0a.name] && _0xf11d06.m_cancelCbs[_0x514a0a.name][_0x24a4ea]) {
                    _0xf11d06.m_cancelCbs[_0x514a0a.name][_0x24a4ea] = null;
                  }
                  _0x5ae09d(false);
                }
              });
              _0x514a0a.setTrackInterruptListener(_0x24a59e, function (_0x40341e) {
                if (_0x24a59e && _0x24a59e.animation.name == _0x40341e.animation.name) {
                  _0x514a0a.setTrackCompleteListener(_0x24a59e, function () {});
                  _0x514a0a.setTrackInterruptListener(_0x24a59e, function () {});
                  if (_0xf11d06.m_cancelCbs[_0x514a0a.name] && _0xf11d06.m_cancelCbs[_0x514a0a.name][_0x24a4ea]) {
                    _0xf11d06.m_cancelCbs[_0x514a0a.name][_0x24a4ea] = null;
                  }
                  _0x5ae09d(true);
                }
              });
            } else {
              _0x514a0a.setCompleteListener(function () {
                _0x514a0a.setCompleteListener(null);
                _0x514a0a.setInterruptListener(null);
                if (_0xf11d06.m_cancelCbs[_0x514a0a.name] && _0xf11d06.m_cancelCbs[_0x514a0a.name][_0x24a4ea]) {
                  _0xf11d06.m_cancelCbs[_0x514a0a.name][_0x24a4ea] = null;
                }
                _0x5ae09d(false);
              });
              _0x514a0a.setInterruptListener(function () {
                _0x514a0a.setCompleteListener(null);
                _0x514a0a.setInterruptListener(null);
                if (_0xf11d06.m_cancelCbs[_0x514a0a.name] && _0xf11d06.m_cancelCbs[_0x514a0a.name][_0x24a4ea]) {
                  _0xf11d06.m_cancelCbs[_0x514a0a.name][_0x24a4ea] = null;
                }
                _0x5ae09d(true);
              });
            }
          });
        };
        return _0x352be6;
      }();
      var _0x4f090a;
      var _0x5ba2c2;
      var _0x1eff01;
      var _0x47ba42;
      var _0x5ef568;
      _0x37f809.m_cancelCbs = {};
      _0x361286._RF.pop();
      _0x361286._RF.push({}, '011ad9/AYVJy4oLmnc+2X6v', "BaseSpine", undefined);
      var _0x1e15dd = _0x55c899.ccclass;
      var _0xeff281 = _0x55c899.property;
      _0x4f090a = _0x1e15dd("BaseSpine");
      _0x5ba2c2 = _0xeff281({
        'type': _0x4a7cfd.Skeleton,
        'tooltip': "Spine"
      });
      _0x47ba42 = function (_0x3d103d) {
        function _0x139688() {
          var _0x3cd34c;
          var _0x47f8d2 = arguments.length;
          var _0x59cdda = new Array(_0x47f8d2);
          for (var _0x2db130 = 0x0; _0x2db130 < _0x47f8d2; _0x2db130++) {
            _0x59cdda[_0x2db130] = arguments[_0x2db130];
          }
          _0x7af141(_0x3cd34c = _0x3d103d.call.apply(_0x3d103d, [this].concat(_0x59cdda)) || this, "m_spine", _0x5ef568, _0x4c7417(_0x3cd34c));
          return _0x3cd34c;
        }
        _0x5b6a43(_0x139688, _0x3d103d);
        var _0x2c597f = _0x139688.prototype;
        _0x2c597f.Stop = function () {
          this.m_spine.clearTrack(0x0);
        };
        _0x2c597f.SetSkin = function (_0x5218f1, _0x1f0c3b) {
          if (undefined === _0x1f0c3b) {
            _0x1f0c3b = this.m_spine;
          }
          _0x1f0c3b.setSkin(_0x5218f1);
        };
        _0x2c597f.SetNodeActivity = function (_0x44484a) {
          this.node.active = _0x44484a;
        };
        _0x2c597f.PlayAnimation = function (_0x4bc536, _0x490748, _0x3f66d5, _0x32ce7d, _0x3330d4) {
          if (undefined === _0x490748) {
            _0x490748 = this.m_spine;
          }
          if (undefined === _0x3f66d5) {
            _0x3f66d5 = false;
          }
          if (undefined === _0x32ce7d) {
            _0x32ce7d = 0x0;
          }
          return _0x37f809.PlayAnimation(_0x490748, _0x4bc536, _0x3f66d5, _0x32ce7d, _0x3330d4);
        };
        _0x2c597f.StopSpine = function () {
          this.m_spine.clearTrack(0x0);
        };
        return _0x139688;
      }(_0xf24552);
      _0x5ef568 = _0x4bec9c(_0x47ba42.prototype, "m_spine", [_0x5ba2c2], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x1bc5ca = _0x4f090a(_0x1eff01 = _0x47ba42) || _0x1eff01;
      var _0x1cae49;
      var _0x55c17;
      var _0x3b61e9;
      var _0x407eb9;
      var _0x3eba08;
      var _0x312f83;
      var _0x480525;
      var _0x36736f;
      var _0x10b26d;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "e64e4Hchl9NtbL25QdmqOut", "SymbolSpine", undefined);
      var _0x165cbd = _0x55c899.ccclass;
      var _0x3c9a59 = _0x55c899.property;
      _0x1cae49 = _0x165cbd("SymbolSpine");
      _0x55c17 = _0x3c9a59({
        'type': _0x5527ae(_0x2ed808),
        'tooltip': '編號'
      });
      _0x3b61e9 = _0x3c9a59({
        'type': _0xbe042,
        'tooltip': "數字字型"
      });
      _0x407eb9 = _0x3c9a59({
        'type': _0x3fe2b7,
        'visible': function () {
          return this.m_symbol == _0x2ed808.WILD;
        }
      });
      _0x312f83 = function (_0x16b508) {
        function _0x561bba() {
          var _0x1d1fc2;
          var _0x599e0f = arguments.length;
          var _0x5a7105 = new Array(_0x599e0f);
          for (var _0x1cb9ba = 0x0; _0x1cb9ba < _0x599e0f; _0x1cb9ba++) {
            _0x5a7105[_0x1cb9ba] = arguments[_0x1cb9ba];
          }
          _0x7af141(_0x1d1fc2 = _0x16b508.call.apply(_0x16b508, [this].concat(_0x5a7105)) || this, "m_symbol", _0x480525, _0x4c7417(_0x1d1fc2));
          _0x7af141(_0x1d1fc2, "m_fnt", _0x36736f, _0x4c7417(_0x1d1fc2));
          _0x7af141(_0x1d1fc2, "m_Num", _0x10b26d, _0x4c7417(_0x1d1fc2));
          _0x1d1fc2.ANIM_WIN = "Large_Win";
          _0x1d1fc2.ANIM_LARGE_START = 'Large_Start';
          _0x1d1fc2.ANIM_LARGE_LOCK = "Large_Lock";
          _0x1d1fc2.ANIM_LARGE_LOOP = "Large_LockLoop";
          _0x1d1fc2.ANIM_LARGE_ADD_POINT = 'Large_AddPoint';
          _0x1d1fc2.m_isWild = undefined;
          return _0x1d1fc2;
        }
        _0x5b6a43(_0x561bba, _0x16b508);
        var _0x24a584 = _0x561bba.prototype;
        _0x24a584.Stop = function () {
          this.m_spine.clearTrack(0x0);
        };
        _0x24a584.ShowWin = function () {
          var _0x116943 = _0x2b8ecf(_0x17c453().mark(function _0x5651c5(_0x3072d3) {
            return _0x17c453().wrap(function (_0x231835) {
              for (;;) {
                switch (_0x231835.prev = _0x231835.next) {
                  case 0x0:
                    if (undefined === _0x3072d3) {
                      _0x3072d3 = false;
                    }
                    this.SetNodeActivity(true);
                    _0x231835.next = 0x4;
                    return this.PlayAnimation(this.ANIM_WIN);
                  case 0x4:
                    _0x231835.next = 0x6;
                    return _0x20a3f2.Wait(this, 0.3);
                  case 0x6:
                    if (_0x3072d3) {
                      this.PlayAnimation(this.ANIM_LARGE_LOOP, this.m_spine, true);
                    }
                  case 0x7:
                  case "end":
                    return _0x231835.stop();
                }
              }
            }, _0x5651c5, this);
          }));
          return function (_0x13579f) {
            return _0x116943.apply(this, arguments);
          };
        }();
        _0x24a584.ShowBig = function () {
          var _0xee0e04 = _0x2b8ecf(_0x17c453().mark(function _0x158296() {
            return _0x17c453().wrap(function (_0x4236d6) {
              for (;;) {
                switch (_0x4236d6.prev = _0x4236d6.next) {
                  case 0x0:
                    this.SetNodeActivity(true);
                    _0x4236d6.next = 0x3;
                    return this.PlayAnimation(this.ANIM_LARGE_START);
                  case 0x3:
                  case "end":
                    return _0x4236d6.stop();
                }
              }
            }, _0x158296, this);
          }));
          return function () {
            return _0xee0e04.apply(this, arguments);
          };
        }();
        _0x24a584.ShowLock = function () {
          var _0x1427eb = _0x2b8ecf(_0x17c453().mark(function _0x627e91() {
            return _0x17c453().wrap(function (_0x174215) {
              for (;;) {
                switch (_0x174215.prev = _0x174215.next) {
                  case 0x0:
                    this.SetNumActive(true);
                    this.SetNodeActivity(true);
                    _0x174215.next = 0x4;
                    return this.PlayAnimation(this.ANIM_LARGE_LOCK);
                  case 0x4:
                  case "end":
                    return _0x174215.stop();
                }
              }
            }, _0x627e91, this);
          }));
          return function () {
            return _0x1427eb.apply(this, arguments);
          };
        }();
        _0x24a584.ShowLockLoop = function () {
          var _0x3bebf2 = _0x2b8ecf(_0x17c453().mark(function _0x213f9d() {
            return _0x17c453().wrap(function (_0x432af4) {
              for (;;) {
                switch (_0x432af4.prev = _0x432af4.next) {
                  case 0x0:
                    this.SetNodeActivity(true);
                    _0x432af4.next = 0x3;
                    return this.PlayAnimation(this.ANIM_LARGE_LOOP, this.m_spine, true);
                  case 0x3:
                  case "end":
                    return _0x432af4.stop();
                }
              }
            }, _0x213f9d, this);
          }));
          return function () {
            return _0x3bebf2.apply(this, arguments);
          };
        }();
        _0x24a584.ShowWildAddPoint = function () {
          var _0x5346d7 = _0x2b8ecf(_0x17c453().mark(function _0x1feabe() {
            return _0x17c453().wrap(function (_0x13d75a) {
              for (;;) {
                switch (_0x13d75a.prev = _0x13d75a.next) {
                  case 0x0:
                    this.SetNodeActivity(true);
                    _0x13d75a.next = 0x3;
                    return this.PlayAnimation(this.ANIM_LARGE_ADD_POINT);
                  case 0x3:
                  case "end":
                    return _0x13d75a.stop();
                }
              }
            }, _0x1feabe, this);
          }));
          return function () {
            return _0x5346d7.apply(this, arguments);
          };
        }();
        _0x24a584.SetNum = function (_0x45bd0c, _0x3922a2) {
          if (this.m_Num) {
            this.m_Num.string = _0x45bd0c;
            if (this.m_fnt.length > 0x0) {
              if (_0x3922a2 >= _0x4772ce.HIGH_WILD_ODDS) {
                this.m_Num.font = this.m_fnt[0x1];
              } else {
                this.m_Num.font = this.m_fnt[0x0];
              }
            }
          }
        };
        _0x24a584.SetNumActive = function (_0x561e4a) {
          if (this.m_Num && this.m_Num.node.active != _0x561e4a) {
            this.m_Num.node.active = _0x561e4a;
          }
        };
        _0x24a584.SetIsWild = function (_0xe48aec) {
          this.m_isWild = _0xe48aec;
        };
        _0x24a584.SetSibling = function (_0x44ca92) {
          if (this.node.getSiblingIndex() != _0x44ca92) {
            this.node.name = _0x44ca92.toFixed();
            _0x4bcdb4.SetZIndex(this.node, _0x44ca92);
          }
        };
        _0x9778ac(_0x561bba, [{
          'key': "Symbol",
          'get': function () {
            return this.m_symbol;
          }
        }]);
        return _0x561bba;
      }(_0x1bc5ca);
      _0x480525 = _0x4bec9c(_0x312f83.prototype, 'm_symbol', [_0x55c17], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': null
      });
      _0x36736f = _0x4bec9c(_0x312f83.prototype, "m_fnt", [_0x3b61e9], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x10b26d = _0x4bec9c(_0x312f83.prototype, "m_Num", [_0x407eb9], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': null
      });
      var _0x513f3a = _0x1cae49(_0x3eba08 = _0x312f83) || _0x3eba08;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "c8a92dJxS1NoLsVEHSTLlBS", "NodePool", undefined);
      var _0x5041e3 = function () {
        function _0x1dcbe2() {
          this.m_symbolEffectPrefabs = null;
          this.m_symbolEffects = null;
          if (_0x1dcbe2._instance) {
            throw new Error("Error: Instantiation failed: Use NodePool.getInstance() instead of new.");
          }
          _0x1dcbe2._instance = this;
        }
        _0x1dcbe2.getInstance = function () {
          if (!this._instance) {
            this._instance = new _0x1dcbe2();
          }
          return _0x1dcbe2._instance;
        };
        var _0x183605 = _0x1dcbe2.prototype;
        _0x183605.SetEffectPrefabs = function (_0x384add) {
          this.m_symbolEffectPrefabs = _0x384add;
          this.m_symbolEffects = new Array();
          for (var _0x135fc2 = 0x0; _0x135fc2 < _0x384add.length; ++_0x135fc2) {
            this.m_symbolEffects.push(new Array());
          }
        };
        _0x183605.GetEffectNode = function (_0x1e4023) {
          try {
            if (this.m_symbolEffects[_0x1e4023].length > 0x0) {
              return this.m_symbolEffects[_0x1e4023].shift();
            }
            if (this.m_symbolEffectPrefabs[_0x1e4023]) {
              return _0x17cf83(this.m_symbolEffectPrefabs[_0x1e4023]).getComponent(_0x513f3a);
            }
          } catch (_0x2c3773) {
            console.log(_0x2c3773);
          }
        };
        _0x183605.ReturnEffect = function (_0x510b97) {
          if (this.m_symbolEffects[_0x510b97.Symbol]) {
            _0x510b97.SetNumActive(false);
            this.m_symbolEffects[_0x510b97.Symbol].push(_0x510b97);
          }
        };
        return _0x1dcbe2;
      }();
      var _0x1b73e0;
      var _0x55c5f4;
      var _0x259b8d;
      var _0x308463;
      var _0xc6a3a1;
      var _0x409b61;
      var _0x24e316;
      var _0x57b76b;
      var _0x2e1ddb;
      var _0x5369fe;
      _0x5041e3._instance = new _0x5041e3();
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "e1344ROpsBCvoUzXXqSE5hd", "EffectPlate", undefined);
      var _0x252847 = _0x55c899.ccclass;
      var _0x23bb57 = _0x55c899.property;
      _0x1b73e0 = _0x252847("EffectPlate");
      _0x55c5f4 = _0x23bb57({
        'type': _0x42b4f1,
        'tooltip': "symbol動態Prefabs New"
      });
      _0x259b8d = _0x23bb57({
        'type': _0x2bf5c4,
        'tooltip': "symbol相關表演的節點們"
      });
      _0x308463 = _0x23bb57({
        'type': _0x1e88a1,
        'tooltip': "蒐集特效相關"
      });
      _0xc6a3a1 = _0x23bb57({
        'type': _0x475efc,
        'tooltip': "吹氣特效相關"
      });
      _0x409b61 = function (_0x20a7f5) {
        function _0x3d1487() {
          var _0x2fea60;
          var _0x474d48 = arguments.length;
          var _0x2d1c64 = new Array(_0x474d48);
          for (var _0x392dd3 = 0x0; _0x392dd3 < _0x474d48; _0x392dd3++) {
            _0x2d1c64[_0x392dd3] = arguments[_0x392dd3];
          }
          _0x7af141(_0x2fea60 = _0x20a7f5.call.apply(_0x20a7f5, [this].concat(_0x2d1c64)) || this, "m_symbolEffectPrefabs", _0x24e316, _0x4c7417(_0x2fea60));
          _0x7af141(_0x2fea60, "m_effectNode", _0x57b76b, _0x4c7417(_0x2fea60));
          _0x7af141(_0x2fea60, 'm_CollectFlyEffect', _0x2e1ddb, _0x4c7417(_0x2fea60));
          _0x7af141(_0x2fea60, "m_BlowFlyEffect", _0x5369fe, _0x4c7417(_0x2fea60));
          _0x2fea60.m_singleLineAni = null;
          _0x2fea60.m_curAwardLines = [];
          _0x2fea60.m_symbolSpines = new Array();
          _0x2fea60.m_gameView = null;
          return _0x2fea60;
        }
        _0x5b6a43(_0x3d1487, _0x20a7f5);
        var _0x261258 = _0x3d1487.prototype;
        _0x261258.onLoad = function () {
          _0x4f3334('');
          for (var _0xd22566 = 0x0; _0xd22566 < _0x4772ce.COL_LENGTH; _0xd22566++) {
            var _0x3d9d28 = [];
            for (var _0x4658aa = 0x0; _0x4658aa < _0x4772ce.ROW_LENGTH; _0x4658aa++) {
              _0x3d9d28.push(Array());
            }
            this.m_symbolSpines.push(_0x3d9d28);
          }
        };
        _0x261258.Init = function (_0x51153f) {
          var _0xd44003 = this;
          this.m_gameView = _0x51153f;
          _0x5041e3.getInstance().SetEffectPrefabs(this.m_symbolEffectPrefabs);
          this.m_CollectFlyEffect.init(_0x51153f);
          this.m_BlowFlyEffect.init(_0x51153f, function (_0x57d222, _0x43a614, _0x4247d0, _0x312ccb, _0x350e19) {
            return _0xd44003.CreateSymbolNode(_0x57d222, _0x43a614, _0x4247d0, _0x312ccb, _0x350e19);
          });
        };
        _0x261258.CleanSymbolAnim = function (_0x461354, _0x1b7c2d, _0x166cc1) {
          if (this.m_symbolSpines[_0x461354][_0x1b7c2d][_0x166cc1]) {
            var _0x3818af = this.m_symbolSpines[_0x461354][_0x1b7c2d][_0x166cc1];
            _0x5041e3.getInstance().ReturnEffect(_0x3818af);
            _0x3818af.node.removeFromParent();
            this.m_symbolSpines[_0x461354][_0x1b7c2d][_0x166cc1] = null;
          }
        };
        _0x261258.ClearAllSymbolAnim = function () {
          for (var _0x282588 = 0x0; _0x282588 < this.m_symbolSpines.length; ++_0x282588) {
            for (var _0x389721 = 0x0; _0x389721 < this.m_symbolSpines[_0x4772ce.LAYERS.NORMAL].length; ++_0x389721) {
              for (var _0x55c80d = 0x0; _0x55c80d < this.m_effectNode.length; ++_0x55c80d) {
                this.CleanSymbolAnim(_0x282588, _0x389721, _0x55c80d);
              }
            }
          }
        };
        _0x261258.Reset = function () {
          for (var _0x4e08c7 = 0x0; _0x4e08c7 < this.m_symbolSpines.length; ++_0x4e08c7) {
            for (var _0x2821d9 = 0x0; _0x2821d9 < this.m_symbolSpines[_0x4e08c7].length; ++_0x2821d9) {
              for (var _0x2033c0 = 0x0; _0x2033c0 < this.m_effectNode.length; ++_0x2033c0) {
                this.CleanSymbolAnim(_0x4e08c7, _0x2821d9, _0x2033c0);
              }
            }
          }
          for (var _0x42ffe7 = 0x0; _0x42ffe7 < _0x4772ce.SYMBOL_LINE_VEC.length; ++_0x42ffe7) {
            this.m_gameView.LineSpines[_0x42ffe7].SetNodeActivity(false);
          }
          this.m_CollectFlyEffect.Reset();
        };
        _0x261258.CreateSymbolNode = function (_0xf9add8, _0x3c77ea, _0x4869a2, _0x1bd16e, _0x41d0ff) {
          if (undefined === _0x41d0ff) {
            _0x41d0ff = _0x1923c2(0x1, 0x1, 0x1);
          }
          var _0x5281aa = this.m_symbolSpines[_0xf9add8][_0x3c77ea][_0x4869a2];
          if (_0x5281aa) {
            var _0x146c9c = _0x5281aa.node.parent;
            _0x5281aa.node.removeFromParent();
            _0x146c9c.addChild(_0x5281aa.node);
            return _0x5281aa.node.getComponent(_0x513f3a);
          }
          var _0x4b507f = this.m_gameView.SlotReels.Columns[_0xf9add8];
          var _0x4036d7 = this.m_gameView.SlotReels.ReelXPos[_0xf9add8];
          var _0x28e32e = _0x3c77ea >= _0x4772ce.ROW_LENGTH ? _0x4b507f.CalStopPosY((_0x4772ce.ROW_LENGTH - 0x1) / 0x2).y : _0x4b507f.CalStopPosY(_0x3c77ea).y;
          var _0x42ee72 = _0x4b507f.GetCurrentOdd(_0x3c77ea);
          var _0x2e7d93 = _0x5041e3.getInstance().GetEffectNode(_0x1bd16e);
          this.m_effectNode[_0x4869a2].addChild(_0x2e7d93.node);
          this.m_symbolSpines[_0xf9add8][_0x3c77ea][_0x4869a2] = _0x2e7d93;
          _0x2e7d93.SetIsWild(_0x1bd16e == _0x4772ce.Symbol.WILD);
          _0x2e7d93.SetNum(_0x4b507f.NumberFormatKM(this.m_gameView.SlotReels.Columns[_0xf9add8].GetCurrentValue(_0x3c77ea)), _0x42ee72);
          _0x2e7d93.node.setScale(_0x41d0ff);
          _0x2e7d93.node.setPosition(_0x4036d7, _0x28e32e);
          _0x2e7d93.node.active = true;
          return _0x2e7d93;
        };
        _0x261258.UpdateAliveSymbolNodeSibling = function (_0x342f98, _0x390a87, _0x3704b9, _0x2ac19f, _0x28016c) {
          var _0x28402a = this.m_symbolSpines[_0x342f98][_0x390a87][_0x3704b9];
          if (_0x28402a) {
            var _0x510a05 = _0x28016c ? this.m_effectNode[_0x4772ce.LAYERS.TOP] : this.m_effectNode[_0x4772ce.LAYERS.NORMAL];
            if (_0x28402a.node.parent != _0x510a05) {
              _0x28402a.node.setParent(_0x510a05);
            }
            _0x4bcdb4.SetZIndex(_0x28402a.node, 0xa * (_0x342f98 + 0x1) - _0x390a87);
          } else {
            _0x312ceb("錯誤!!!!! 找不到已存在的Symbol Node  col:" + _0x342f98 + " row:" + _0x390a87 + " layer:" + _0x3704b9);
          }
        };
        _0x261258.ShowLockThenLoop = function () {
          var _0x45bdc8 = _0x2b8ecf(_0x17c453().mark(function _0x13a9b4(_0x192ff3, _0x5eadd7, _0x15580b, _0x2bdb00) {
            var _0x566661;
            var _0x268808;
            return _0x17c453().wrap(function (_0x234a02) {
              for (;;) {
                switch (_0x234a02.prev = _0x234a02.next) {
                  case 0x0:
                    _0x566661 = _0x4772ce.SYMBOL_SPINE_SIZE;
                    _0x268808 = this.CreateSymbolNode(_0x192ff3, _0x5eadd7, _0x2bdb00, _0x15580b, _0x566661);
                    this.m_symbolSpines[_0x192ff3][_0x5eadd7][_0x2bdb00].node.active = true;
                    _0x234a02.next = 0x5;
                    return _0x268808.ShowLock();
                  case 0x5:
                    _0x268808.ShowLockLoop();
                  case 0x6:
                  case "end":
                    return _0x234a02.stop();
                }
              }
            }, _0x13a9b4, this);
          }));
          return function (_0x4ababb, _0x920442, _0x1411be, _0x29ea8e) {
            return _0x45bdc8.apply(this, arguments);
          };
        }();
        _0x261258.ShowLargeStartThenWin = function () {
          var _0x28b0e5 = _0x2b8ecf(_0x17c453().mark(function _0x5f2d2d(_0x3dbe97, _0x37b5c7) {
            var _0x2ba4de;
            return _0x17c453().wrap(function (_0x596d4a) {
              for (;;) {
                switch (_0x596d4a.prev = _0x596d4a.next) {
                  case 0x0:
                    if (undefined === _0x37b5c7) {
                      _0x37b5c7 = 0x0;
                    }
                    _0x596d4a.next = 0x3;
                    return _0x20a3f2.Wait(this, _0x37b5c7);
                  case 0x3:
                    (_0x2ba4de = this.CreateSymbolNode(_0x4772ce.MiddleCol, _0x4772ce.MiddleRow, _0x4772ce.LAYERS.FOUR, _0x3dbe97)).node.setScale(0x1, 0x1);
                    _0x596d4a.next = 0x7;
                    return _0x2ba4de.ShowBig();
                  case 0x7:
                    _0x2ba4de.ShowWin(true);
                  case 0x8:
                  case "end":
                    return _0x596d4a.stop();
                }
              }
            }, _0x5f2d2d, this);
          }));
          return function (_0x8e6166, _0x1a7108) {
            return _0x28b0e5.apply(this, arguments);
          };
        }();
        _0x261258.ShowSymbolEffect = function () {
          var _0x31545b = _0x2b8ecf(_0x17c453().mark(function _0x351944(_0x2ed7d6, _0x3d6050) {
            var _0x59cb68;
            var _0x2d3a6c;
            var _0xd0f385;
            var _0x7f454f;
            var _0x31bfb2;
            var _0x51df18;
            var _0x4007ad;
            var _0x4d0b58;
            return _0x17c453().wrap(function (_0x25e2d0) {
              for (;;) {
                switch (_0x25e2d0.prev = _0x25e2d0.next) {
                  case 0x0:
                    if (undefined === _0x3d6050) {
                      _0x3d6050 = 0x1;
                    }
                    if (_0x2ed7d6) {
                      _0x25e2d0.next = 0x3;
                      break;
                    }
                    return _0x25e2d0.abrupt("return");
                  case 0x3:
                    _0x59cb68 = new Set();
                    _0x2d3a6c = [];
                    for (_0xd0f385 = 0x0; _0xd0f385 < _0x2ed7d6.length; ++_0xd0f385) {
                      _0x7f454f = _0x4772ce.SYMBOL_LINE_VEC[_0x2ed7d6[_0xd0f385].Line || 0x0];
                      _0x31bfb2 = new Set();
                      for (_0x51df18 = 0x0; _0x51df18 < _0x4772ce.ROW_LENGTH; ++_0x51df18) {
                        _0x4007ad = this.m_gameView.SlotReels.PlateInfo[_0x7f454f[_0x51df18].x].Row[_0x7f454f[_0x51df18].y];
                        _0x4d0b58 = 0x64 * _0x7f454f[_0x51df18].x + 0xa * _0x7f454f[_0x51df18].y + _0x4007ad;
                        _0x31bfb2.add(_0x4d0b58);
                        _0x59cb68.add(_0x4d0b58);
                      }
                      _0x31bfb2.add(0x3e8 * (_0x2ed7d6[_0xd0f385].Line + 0x1));
                      _0x59cb68.add(0x3e8 * (_0x2ed7d6[_0xd0f385].Line + 0x1));
                      _0x2d3a6c.push(_0x31bfb2);
                      this.CurAwardLines.push(_0x31bfb2);
                    }
                    this.m_gameView.SlotReels.SetColumnDark(true, -0x1);
                  case 0x7:
                    if (!(_0x3d6050 > 0x0)) {
                      _0x25e2d0.next = 0xd;
                      break;
                    }
                    --_0x3d6050;
                    _0x25e2d0.next = 0xb;
                    return this.ShowSymbolSpine(_0x59cb68);
                  case 0xb:
                    _0x25e2d0.next = 0x7;
                    break;
                  case 0xd:
                  case "end":
                    return _0x25e2d0.stop();
                }
              }
            }, _0x351944, this);
          }));
          return function (_0x50bef6, _0x465036) {
            return _0x31545b.apply(this, arguments);
          };
        }();
        _0x261258.ShowSymbolSpine = function () {
          var _0x51bf25 = _0x2b8ecf(_0x17c453().mark(function _0x17ed5a(_0x5cdc01) {
            var _0x444d89;
            var _0x4d238c;
            var _0xfe24d8;
            var _0x6d4f15;
            var _0x1bf595;
            var _0x26e5fe;
            var _0x5a9956;
            var _0x5e6a61;
            var _0x345ecd;
            var _0x4d7253;
            var _0x2dfe55;
            var _0xea494b;
            var _0x1e7131;
            return _0x17c453().wrap(function (_0x14b247) {
              for (;;) {
                switch (_0x14b247.prev = _0x14b247.next) {
                  case 0x0:
                    _0x444d89 = [];
                    _0x4d238c = Array.from(_0x5cdc01).sort(function (_0x2b3f96, _0x73bb0f) {
                      return _0x2b3f96 - _0x73bb0f;
                    });
                    _0xfe24d8 = _0x4d238c.length - 0x1;
                    for (_0x6d4f15 = []; _0x4d238c[_0xfe24d8] >= 0x3e8;) {
                      _0x6d4f15.push(_0x4bcdb4.divide(_0x4d238c[_0xfe24d8], 0x3e8) - 0x1);
                      _0x4d238c.splice(-0x1, 0x1);
                      --_0xfe24d8;
                    }
                    for (_0x1bf595 = 0x0; _0x1bf595 < _0x6d4f15.length; ++_0x1bf595) {
                      this.m_gameView.LineSpines[_0x6d4f15[_0x1bf595]].ShowLine();
                    }
                    for (_0x26e5fe = _0x4d238c.length - 0x1; _0x26e5fe >= 0x0; _0x26e5fe--) {
                      _0x5a9956 = _0x4d238c[_0x26e5fe];
                      _0x5e6a61 = Math.floor(_0x5a9956 / 0x64);
                      _0x345ecd = Math.floor(_0x5a9956 % 0x64 / 0xa);
                      _0x4d7253 = _0x5a9956 % 0xa;
                      _0x2dfe55 = _0x4772ce.SYMBOL_SPINE_SIZE;
                      _0xea494b = this.CreateSymbolNode(_0x5e6a61, _0x345ecd, _0x4772ce.LAYERS.NORMAL, _0x4d7253, _0x2dfe55);
                      if (_0x1e7131 = _0xea494b.node.getChildByName("Fly_Num")) {
                        _0x1e7131.active = true;
                      }
                      this.m_gameView.SlotReels.Columns[_0x5e6a61].HideSymbolByRow(_0x345ecd);
                      _0x444d89.push(_0xea494b.ShowWin());
                    }
                    _0x14b247.next = 0x9;
                    return Promise.all(_0x444d89);
                  case 0x9:
                    this.m_gameView.SlotReels.ShowPlate();
                  case 0xa:
                  case "end":
                    return _0x14b247.stop();
                }
              }
            }, _0x17ed5a, this);
          }));
          return function (_0x3a208e) {
            return _0x51bf25.apply(this, arguments);
          };
        }();
        _0x261258.SetSymbolSpineSibling = function (_0x33e77e) {
          var _0x24e10c = new Array();
          for (var _0x2a271e = _0x33e77e.length - 0x1; _0x2a271e >= 0x0; _0x2a271e--) {
            var _0x12e3d8 = _0x33e77e[_0x2a271e];
            var _0x22d237 = Math.floor(_0x12e3d8 / 0x64);
            var _0x31f4c3 = Math.floor(_0x12e3d8 % 0x64 / 0xa);
            var _0x22d0f2 = _0x12e3d8 % 0xa;
            if (!_0x24e10c[_0x22d237]) {
              _0x24e10c[_0x22d237] = [];
            }
            _0x24e10c[_0x22d237][_0x31f4c3] = _0x22d0f2;
          }
          for (var _0x47e9d7 = 0x0; _0x47e9d7 < _0x24e10c.length; _0x47e9d7++) {
            var _0x477738 = this.GetSiblingIdxData(_0x24e10c[_0x47e9d7]);
            for (var _0x645d08 = 0x0; _0x645d08 < _0x477738.length; _0x645d08++) {
              var _0x50ec41 = _0x4772ce.Symbol.WILD == _0x24e10c[_0x47e9d7][_0x645d08];
              this.UpdateAliveSymbolNodeSibling(_0x47e9d7, _0x645d08, _0x4772ce.LAYERS.NORMAL, _0x477738[_0x645d08], _0x50ec41);
            }
          }
        };
        _0x261258.GetSiblingIdxData = function (_0x46ffd7) {
          var _0x51b9b0 = _0x4772ce.Symbol.WILD;
          var _0x26d229 = new Array(_0x46ffd7.length).fill(0x0);
          var _0x583f58 = 0x0;
          var _0x170af4 = [];
          _0x46ffd7.forEach(function (_0x129b12, _0x110111) {
            if (_0x129b12 !== _0x51b9b0) {
              _0x26d229[_0x110111] = _0x583f58++;
            } else {
              _0x170af4.push(_0x110111);
            }
          });
          var _0x580350 = _0x46ffd7.length - 0x1;
          _0x170af4.forEach(function (_0x2df1bb) {
            _0x26d229[_0x2df1bb] = _0x580350--;
          });
          return _0x26d229;
        };
        _0x261258.ShowSingleLineEffect = function () {
          var _0x151abd = this;
          if (!this.m_singleLineAni && this.CurAwardLines && 0x0 !== this.CurAwardLines.length) {
            var _0x67a4e1 = this.CurAwardLines.length;
            this.m_gameView.SlotReels.SetColumnDark(true, -0x1);
            var _0x3bfa1b = 0x0;
            this.m_singleLineAni = _0x5b954c(this.node).repeatForever(_0x5b954c().call(function () {
              _0x151abd.m_gameView.SlotReels.ShowPlate();
              _0x151abd.Reset();
              _0x151abd.ShowSymbolSpine(_0x151abd.CurAwardLines[_0x3bfa1b]);
              if (++_0x3bfa1b === _0x67a4e1) {
                _0x3bfa1b = 0x0;
              }
            }).delay(_0x4772ce.ACTION_DELAY_TIME.TIME_FOR_AWARD_LINE_EFFECT)).start();
          }
        };
        _0x261258.StopOneLineShow = function () {
          if (this.m_singleLineAni) {
            this.m_gameView.SlotReels.ShowPlate();
            this.m_gameView.SlotReels.SetColumnDark(false, -0x1);
            this.m_singleLineAni.stop();
            this.m_singleLineAni = null;
            this.CurAwardLines = [];
          }
        };
        _0x261258.FlyANode = function () {
          var _0x5e6aca = _0x2b8ecf(_0x17c453().mark(function _0x4b2567(_0x1ca27e, _0x4340ba, _0x12d652, _0x2be733, _0x352785) {
            var _0x129018;
            var _0x5c7fa7;
            return _0x17c453().wrap(function (_0x3c6b0f) {
              for (;;) {
                switch (_0x3c6b0f.prev = _0x3c6b0f.next) {
                  case 0x0:
                    _0x129018 = _0x12d652.position.clone();
                    (_0x5c7fa7 = new _0x178207()).x = _0x4340ba.x - _0x1ca27e.x + _0x12d652.position.x;
                    _0x5c7fa7.y = _0x4340ba.y - _0x1ca27e.y + _0x12d652.position.y;
                    _0x5c7fa7.z = _0x4340ba.z - _0x1ca27e.z + _0x12d652.position.z;
                    _0x5b954c(_0x12d652).to(_0x2be733, {
                      'position': _0x5c7fa7
                    }).delay(0x1).call(function () {
                      _0x12d652.setPosition(_0x129018);
                    }).start();
                    if (!_0x352785) {
                      _0x3c6b0f.next = 0x9;
                      break;
                    }
                    _0x3c6b0f.next = 0x9;
                    return _0x20a3f2.Wait(this, _0x352785);
                  case 0x9:
                  case "end":
                    return _0x3c6b0f.stop();
                }
              }
            }, _0x4b2567, this);
          }));
          return function (_0xa9a0da, _0x5aa320, _0x448807, _0x8a608b, _0x73a27e) {
            return _0x5e6aca.apply(this, arguments);
          };
        }();
        _0x261258.PlayBlowAnim = function () {
          var _0x6cb6d2 = _0x2b8ecf(_0x17c453().mark(function _0x3cdd4d() {
            return _0x17c453().wrap(function (_0x179e35) {
              for (;;) {
                switch (_0x179e35.prev = _0x179e35.next) {
                  case 0x0:
                    this.m_gameView.SetRotationLock = true;
                    _0x179e35.next = 0x3;
                    return this.m_BlowFlyEffect.PlayBlowAnim();
                  case 0x3:
                    this.m_gameView.SetRotationLock = false;
                    this.Reset();
                  case 0x5:
                  case 'end':
                    return _0x179e35.stop();
                }
              }
            }, _0x3cdd4d, this);
          }));
          return function () {
            return _0x6cb6d2.apply(this, arguments);
          };
        }();
        _0x261258.RecoverFlyedNumber = function () {
          this.m_BlowFlyEffect.RecoverFlyedNumber();
        };
        _0x261258.ShowWildStop = function () {
          var _0x5d311e = _0x2b8ecf(_0x17c453().mark(function _0x492189(_0x4cc9be) {
            return _0x17c453().wrap(function (_0x544935) {
              for (;;) {
                switch (_0x544935.prev = _0x544935.next) {
                  case 0x0:
                    _0x544935.next = 0x2;
                    return this.m_CollectFlyEffect.ShowWildStop(_0x4cc9be);
                  case 0x2:
                  case "end":
                    return _0x544935.stop();
                }
              }
            }, _0x492189, this);
          }));
          return function (_0x7072b0) {
            return _0x5d311e.apply(this, arguments);
          };
        }();
        _0x261258.ShowAllWildStop = function () {
          var _0x22cd83 = _0x2b8ecf(_0x17c453().mark(function _0x2f8e18() {
            return _0x17c453().wrap(function (_0x5acdfe) {
              for (;;) {
                switch (_0x5acdfe.prev = _0x5acdfe.next) {
                  case 0x0:
                    _0x5acdfe.next = 0x2;
                    return this.m_CollectFlyEffect.ShowAllWildStop();
                  case 0x2:
                  case "end":
                    return _0x5acdfe.stop();
                }
              }
            }, _0x2f8e18, this);
          }));
          return function () {
            return _0x22cd83.apply(this, arguments);
          };
        }();
        _0x9778ac(_0x3d1487, [{
          'key': "BlowFlyEffect",
          'get': function () {
            return this.m_BlowFlyEffect;
          }
        }, {
          'key': 'CurAwardLines',
          'get': function () {
            return this.m_curAwardLines;
          },
          'set': function (_0x5cdd0c) {
            this.m_curAwardLines = _0x5cdd0c;
          }
        }]);
        return _0x3d1487;
      }(_0xf24552);
      _0x24e316 = _0x4bec9c(_0x409b61.prototype, "m_symbolEffectPrefabs", [_0x55c5f4], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x57b76b = _0x4bec9c(_0x409b61.prototype, 'm_effectNode', [_0x259b8d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x2e1ddb = _0x4bec9c(_0x409b61.prototype, "m_CollectFlyEffect", [_0x308463], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': null
      });
      _0x5369fe = _0x4bec9c(_0x409b61.prototype, "m_BlowFlyEffect", [_0xc6a3a1], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': null
      });
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "e2e51NfRxlGzLaIpoHPkmYF", "ExtraBet", undefined);
      var _0x7bc30e;
      var _0x122f39;
      var _0x433ed8;
      var _0x514688;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "6175387ugNNTqmocTQUwY8N", 'EnterBGBottomSpine', undefined);
      var _0x58083b = ["Symbol_00", "Symbol_01", "Symbol_02", "Symbol_03", 'Symbol_04', "Symbol_05", "Symbol_06"];
      var _0x243472 = _0x55c899.ccclass;
      var _0x1dd9c0 = _0x55c899.property;
      _0x7bc30e = _0x243472("EnterBGBottomSpine");
      _0x122f39 = _0x1dd9c0({
        'type': _0x4a7cfd.Skeleton,
        'tooltip': "Declare Fly"
      });
      _0x433ed8 = function (_0x2a753f) {
        function _0x379efe() {
          var _0x22ba5e;
          var _0x1c14b7 = arguments.length;
          var _0x1c2ab3 = new Array(_0x1c14b7);
          for (var _0x4ba14b = 0x0; _0x4ba14b < _0x1c14b7; _0x4ba14b++) {
            _0x1c2ab3[_0x4ba14b] = arguments[_0x4ba14b];
          }
          _0x7af141(_0x22ba5e = _0x2a753f.call.apply(_0x2a753f, [this].concat(_0x1c2ab3)) || this, "m_DeclareFly", _0x514688, _0x4c7417(_0x22ba5e));
          _0x22ba5e.m_isLandscape = undefined;
          return _0x22ba5e;
        }
        _0x5b6a43(_0x379efe, _0x2a753f);
        var _0xec5209 = _0x379efe.prototype;
        _0xec5209.SetRotate = function (_0x507753) {
          this.m_isLandscape = _0x507753;
        };
        _0xec5209.PlayBGIn = function () {
          var _0x21aedf = _0x2b8ecf(_0x17c453().mark(function _0xe35c13(_0x2bf449) {
            return _0x17c453().wrap(function (_0x1f6aa8) {
              for (;;) {
                switch (_0x1f6aa8.prev = _0x1f6aa8.next) {
                  case 0x0:
                    this.SetNodeActivity(true);
                    this.m_spine.setSkin(_0x58083b[_0x2bf449]);
                    this.PlayFlyAnim();
                    _0x1f6aa8.next = 0x5;
                    return this.PlayAnimation('Start');
                  case 0x5:
                    this.SetNodeActivity(false);
                  case 0x6:
                  case "end":
                    return _0x1f6aa8.stop();
                }
              }
            }, _0xe35c13, this);
          }));
          return function (_0x9855e6) {
            return _0x21aedf.apply(this, arguments);
          };
        }();
        _0xec5209.PlayBGInOolong = function () {
          var _0x45b44b = _0x2b8ecf(_0x17c453().mark(function _0x427b0() {
            return _0x17c453().wrap(function (_0x3670ee) {
              for (;;) {
                switch (_0x3670ee.prev = _0x3670ee.next) {
                  case 0x0:
                    this.SetNodeActivity(true);
                    this.m_spine.setSkin('default');
                    this.PlayFlyAnim();
                    _0x3670ee.next = 0x5;
                    return this.PlayAnimation('Start_Oolong');
                  case 0x5:
                    this.SetNodeActivity(false);
                  case 0x6:
                  case "end":
                    return _0x3670ee.stop();
                }
              }
            }, _0x427b0, this);
          }));
          return function () {
            return _0x45b44b.apply(this, arguments);
          };
        }();
        _0xec5209.PlayFlyAnim = function () {
          var _0x42c1cc = this.m_isLandscape ? "Declare_L" : 'Declare_S';
          this.PlayAnimation(_0x42c1cc, this.m_DeclareFly);
        };
        return _0x379efe;
      }(_0x1bc5ca);
      _0x514688 = _0x4bec9c(_0x433ed8.prototype, 'm_DeclareFly', [_0x122f39], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x1d97ba;
      var _0x5077aa;
      var _0x5c9d4a;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "74f7dljUZhO+6o0Pu2tNSAk", 'ConnectionManager', undefined);
      (function (_0x39287c) {
        _0x39287c[_0x39287c.TYPE_HTTP = 0x1] = 'TYPE_HTTP';
        _0x39287c[_0x39287c.TYPE_WEBSOCKET = 0x2] = "TYPE_WEBSOCKET";
        _0x39287c[_0x39287c.MAX = 0x3] = "MAX";
      })(_0x1d97ba || (_0x1d97ba = {}));
      (function (_0x44d422) {
        _0x44d422.TYPE_GET = "get";
        _0x44d422.TYPE_POST = "post";
      })(_0x5077aa || (_0x5077aa = {}));
      _0x361286._RF.pop();
      _0x361286._RF.push({}, '34d81gQVlJAaJJHg6IUTjH6', "TimeBool", undefined);
      (function (_0x3bc64d) {
        _0x3bc64d[_0x3bc64d.MAX_UINT = 0xffffffff] = "MAX_UINT";
        _0x3bc64d[_0x3bc64d.MAX_UINT64 = 0x10000000000000000] = 'MAX_UINT64';
        _0x3bc64d[_0x3bc64d.MAX_INT = -0x1] = 'MAX_INT';
        _0x3bc64d[_0x3bc64d.MIN_INT = 0x0] = 'MIN_INT';
      })(_0x5c9d4a || (_0x5c9d4a = {}));
      var _0x808792;
      var _0x31980c;
      var _0x1779a2;
      var _0x4201a9;
      var _0x119574;
      var _0x367efd;
      var _0x3dacdd;
      var _0x3629df;
      var _0x35c8f1;
      var _0x47f986;
      var _0x36e45c;
      var _0x262f42;
      var _0x48f167;
      var _0x541000;
      var _0x597228;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, '1d854+nhA1JgLXZLaNHz9eU', "LicenseSetting", undefined);
      (function (_0x4a9944) {
        _0x4a9944[_0x4a9944.ShopingMall = 0x1] = 'ShopingMall';
        _0x4a9944[_0x4a9944.ShowAutoSetting = 0x10] = "ShowAutoSetting";
        _0x4a9944[_0x4a9944.NoSoundUnder1 = 0x11] = "NoSoundUnder1";
        _0x4a9944[_0x4a9944.NoQuickSpin = 0x12] = "NoQuickSpin";
        _0x4a9944[_0x4a9944.CloseManual = 0x27] = "CloseManual";
        _0x4a9944[_0x4a9944.CloseExtraBet = 0x3d] = 'CloseExtraBet';
      })(_0x808792 || (_0x808792 = {}));
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "0c18bO40hVJB4/zzDByb8vr", "ManualComponent", undefined);
      var _0x3df517 = _0x55c899.ccclass;
      var _0x23888e = _0x55c899.property;
      _0x31980c = _0x3df517("ManualComponent");
      _0x1779a2 = _0x23888e({
        'type': _0x2bf5c4,
        'tooltip': '特色說明按鈕(新版跑馬燈)'
      });
      _0x4201a9 = _0x23888e({
        'type': _0x2bf5c4,
        'tooltip': "特色說明本體(新版跑馬燈)"
      });
      _0x119574 = _0x23888e({
        'type': _0x2bf5c4,
        'tooltip': "特色說明關閉按鈕(新版跑馬燈)"
      });
      _0x367efd = _0x23888e({
        'type': _0x2bf5c4,
        'tooltip': "特色說明周圍關閉按鈕(新版跑馬燈)"
      });
      _0x3dacdd = _0x23888e({
        'type': _0x4980af,
        'tooltip': '特色說明內容(新版跑馬燈)'
      });
      _0x3629df = _0x23888e({
        'type': _0x4980af,
        'tooltip': '標題'
      });
      _0x35c8f1 = function (_0x507c99) {
        function _0x223e85() {
          var _0x13be7e;
          var _0x4fac81 = arguments.length;
          var _0x2e5fd9 = new Array(_0x4fac81);
          for (var _0xf05084 = 0x0; _0xf05084 < _0x4fac81; _0xf05084++) {
            _0x2e5fd9[_0xf05084] = arguments[_0xf05084];
          }
          _0x7af141(_0x13be7e = _0x507c99.call.apply(_0x507c99, [this].concat(_0x2e5fd9)) || this, 'm_featureInfoBtn', _0x47f986, _0x4c7417(_0x13be7e));
          _0x7af141(_0x13be7e, 'm_featureInfoBoard', _0x36e45c, _0x4c7417(_0x13be7e));
          _0x7af141(_0x13be7e, "m_featureInfoCloseBtn", _0x262f42, _0x4c7417(_0x13be7e));
          _0x7af141(_0x13be7e, "m_featureInfoSideBtn", _0x48f167, _0x4c7417(_0x13be7e));
          _0x7af141(_0x13be7e, 'm_featureInfoTxt', _0x541000, _0x4c7417(_0x13be7e));
          _0x7af141(_0x13be7e, "m_titleSprite", _0x597228, _0x4c7417(_0x13be7e));
          _0x13be7e.m_manulState = "Close";
          _0x13be7e.m_manulOpenLock = false;
          return _0x13be7e;
        }
        _0x5b6a43(_0x223e85, _0x507c99);
        var _0x2be9a5 = _0x223e85.prototype;
        _0x2be9a5.onLoad = function () {
          var _0x187a8f = this;
          if (_0x4bcdb4.CheckSwitchOff(_0x808792.CloseManual)) {
            this.node.active = false;
          } else {
            if (this.m_featureInfoBtn) {
              this.m_featureInfoBtn.on(_0x2bf5c4.EventType.TOUCH_END, function () {
                _0x187a8f.OpenManul();
                _0x55475f.Play(Astarte.Define.AudioClips.COMMON_BTN);
              });
            }
            if (this.m_featureInfoCloseBtn) {
              this.m_featureInfoCloseBtn.on(_0x2bf5c4.EventType.TOUCH_END, function () {
                _0x187a8f.CloseManul();
                _0x55475f.Play(Astarte.Define.AudioClips.COMMON_BTN);
              });
            }
            if (this.m_featureInfoSideBtn) {
              this.m_featureInfoSideBtn.on(_0x2bf5c4.EventType.TOUCH_END, function () {
                _0x187a8f.CloseManul();
              });
            }
          }
        };
        _0x2be9a5.OpenManul = function () {
          var _0x335c99 = this;
          if (this.m_manulOpenLock) {
            _0x5bb90e.ShowMessageBox(Astarte.Define.StringKey.FREEWINCASH_PLAYING1);
          } else if (this.m_manulState == "Close") {
            this.m_featureInfoBoard.active = true;
            _0x5b954c(this.m_featureInfoBoard).call(function () {
              _0x335c99.m_manulState = 'Opening';
              _0x335c99.m_featureInfoBoard.getComponentInChildren(_0x582ccd).play("Manual_Open");
            }).delay(0.5).call(function () {
              _0x335c99.m_manulState = "Open";
            }).start();
          }
        };
        _0x2be9a5.CloseManul = function () {
          var _0x296b49 = this;
          if (this.m_manulState == "Open") {
            _0x5b954c(this.m_featureInfoBoard).call(function () {
              _0x296b49.m_manulState = "Closing";
              _0x296b49.m_featureInfoBoard.getComponentInChildren(_0x582ccd).play("Manual_Close");
            }).delay(0.5).call(function () {
              _0x296b49.m_manulState = "Close";
              _0x296b49.m_featureInfoBoard.active = false;
            }).start();
          }
        };
        _0x2be9a5.SetTxt = function (_0x3cddb3, _0x2f5642) {
          if (undefined === _0x2f5642) {
            _0x2f5642 = null;
          }
          var _0x14a149 = _0x16b616.GetGameAtlas();
          for (var _0x399c27 = 0x0; _0x399c27 < this.m_featureInfoTxt.length; _0x399c27++) {
            if (_0x14a149.getSpriteFrame(_0x3cddb3[_0x399c27])) {
              this.m_featureInfoTxt[_0x399c27].spriteFrame = _0x14a149.getSpriteFrame(_0x3cddb3[_0x399c27]);
            }
          }
          if (this.m_titleSprite && _0x2f5642) {
            this.m_titleSprite.spriteFrame = _0x14a149.getSpriteFrame(_0x2f5642);
          }
        };
        _0x9778ac(_0x223e85, [{
          'key': 'FeatureInfoBtn',
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
          'set': function (_0x3f2be0) {
            this.m_manulOpenLock = _0x3f2be0;
          }
        }]);
        return _0x223e85;
      }(_0xf24552);
      _0x47f986 = _0x4bec9c(_0x35c8f1.prototype, 'm_featureInfoBtn', [_0x1779a2], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x36e45c = _0x4bec9c(_0x35c8f1.prototype, "m_featureInfoBoard", [_0x4201a9], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x262f42 = _0x4bec9c(_0x35c8f1.prototype, "m_featureInfoCloseBtn", [_0x119574], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x48f167 = _0x4bec9c(_0x35c8f1.prototype, "m_featureInfoSideBtn", [_0x367efd], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x541000 = _0x4bec9c(_0x35c8f1.prototype, "m_featureInfoTxt", [_0x3dacdd], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x597228 = _0x4bec9c(_0x35c8f1.prototype, 'm_titleSprite', [_0x3629df], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x361286._RF.pop();
      var _0x9567bb = function () {
        function _0x59b808() {
          this._registry = {};
          this._moduleCache = {};
        }
        var _0x5f1c2a = _0x59b808.prototype;
        _0x5f1c2a.define = function (_0x3a21ff, _0x932d6c, _0x16b15e) {
          this._registry[_0x3a21ff] = {
            'factory': _0x932d6c,
            'resolveMap': _0x16b15e
          };
        };
        _0x5f1c2a.require = function (_0x46438b) {
          return this._require(_0x46438b);
        };
        _0x5f1c2a.throwInvalidWrapper = function (_0x1e93f4, _0xefcd7b) {
          throw new Error("Module '" + _0x1e93f4 + "' imported from '" + _0xefcd7b + "' is expected be an ESM-wrapped CommonJS module but it doesn't.");
        };
        _0x5f1c2a._require = function (_0x6d51ac, _0x563047) {
          var _0x3e0fa8 = this._moduleCache[_0x6d51ac];
          if (_0x3e0fa8) {
            return _0x3e0fa8.exports;
          }
          var _0x56dfd7 = {
            'id': _0x6d51ac,
            'exports': {}
          };
          this._moduleCache[_0x6d51ac] = _0x56dfd7;
          this._tryModuleLoad(_0x56dfd7, _0x6d51ac);
          return _0x56dfd7.exports;
        };
        _0x5f1c2a._resolve = function (_0x2951b2, _0x498e7a) {
          return this._resolveFromInfos(_0x2951b2, _0x498e7a) || this._throwUnresolved(_0x2951b2, _0x498e7a);
        };
        _0x5f1c2a._resolveFromInfos = function (_0x3c77a6, _0x3fb67b) {
          var _0x3d7ed3;
          var _0x5d3e5e;
          return _0x3c77a6 in cjsInfos ? _0x3c77a6 : _0x3fb67b && null != (_0x3d7ed3 = null == (_0x5d3e5e = cjsInfos[_0x3fb67b]) ? undefined : _0x5d3e5e.resolveCache[_0x3c77a6]) ? _0x3d7ed3 : undefined;
        };
        _0x5f1c2a._tryModuleLoad = function (_0x1ded1d, _0x25834e) {
          var _0x107fec = true;
          try {
            this._load(_0x1ded1d, _0x25834e);
            _0x107fec = false;
          } finally {
            if (_0x107fec) {
              delete this._moduleCache[_0x25834e];
            }
          }
        };
        _0x5f1c2a._load = function (_0x1b6a7d, _0x3596ab) {
          var _0x447b45 = this._loadWrapper(_0x3596ab);
          var _0x1a6b52 = _0x447b45.factory;
          var _0x435011 = _0x447b45.resolveMap;
          var _0x4123cf = this._createRequire(_0x1b6a7d);
          var _0x5880dc = _0x435011 ? this._createRequireWithResolveMap("function" == typeof _0x435011 ? _0x435011() : _0x435011, _0x4123cf) : _0x4123cf;
          _0x1a6b52(_0x1b6a7d.exports, _0x5880dc, _0x1b6a7d);
        };
        _0x5f1c2a._loadWrapper = function (_0x421a50) {
          return _0x421a50 in this._registry ? this._registry[_0x421a50] : this._loadHostProvidedModules(_0x421a50);
        };
        _0x5f1c2a._loadHostProvidedModules = function (_0x84445d) {
          return {
            'factory': function (_0xf7cba3, _0x3c9314, _0x2fd197) {
              if ("undefined" == typeof require) {
                throw new Error("Current environment does not provide a require() for requiring '" + _0x84445d + "'.");
              }
              try {
                _0x2fd197.exports = require(_0x84445d);
              } catch (_0x192ca5) {
                throw new Error("Exception thrown when calling host defined require('" + _0x84445d + "').", {
                  'cause': _0x192ca5
                });
              }
            }
          };
        };
        _0x5f1c2a._createRequire = function (_0x43d274) {
          var _0x257dae = this;
          return function (_0x8f2c50) {
            return _0x257dae._require(_0x8f2c50, _0x43d274);
          };
        };
        _0x5f1c2a._createRequireWithResolveMap = function (_0x1d1041, _0x15ac3a) {
          return function (_0x2a8cf9) {
            var _0x248007 = _0x1d1041[_0x2a8cf9];
            if (_0x248007) {
              return _0x15ac3a(_0x248007);
            }
            throw new Error("Unresolved specifier " + _0x2a8cf9);
          };
        };
        _0x5f1c2a._throwUnresolved = function (_0x36ac8d, _0x251fda) {
          throw new Error("Unable to resolve " + _0x36ac8d + " from " + parent + '.');
        };
        return _0x59b808;
      }();
      var _0x50443a = new _0x9567bb();
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js", function (_0x589f7d, _0x1464b2, _0x4d1b64, _0x5759bb, _0x3a873f) {
        _0x4d1b64.exports = function (_0x1ce46b, _0x2260f3) {
          var _0x153d29 = new Array(arguments.length - 0x1);
          var _0x9f6269 = 0x0;
          var _0x48807d = 0x2;
          var _0x2f2292 = true;
          for (; _0x48807d < arguments.length;) {
            _0x153d29[_0x9f6269++] = arguments[_0x48807d++];
          }
          return new Promise(function (_0x40f740, _0x1bd797) {
            _0x153d29[_0x9f6269] = function (_0x13d363) {
              if (_0x2f2292) {
                _0x2f2292 = false;
                if (_0x13d363) {
                  _0x1bd797(_0x13d363);
                } else {
                  var _0x3ca870 = new Array(arguments.length - 0x1);
                  for (var _0x377983 = 0x0; _0x377983 < _0x3ca870.length;) {
                    _0x3ca870[_0x377983++] = arguments[_0x377983];
                  }
                  _0x40f740.apply(null, _0x3ca870);
                }
              }
            };
            try {
              _0x1ce46b.apply(_0x2260f3 || null, _0x153d29);
            } catch (_0x432bf7) {
              if (_0x2f2292) {
                _0x2f2292 = false;
                _0x1bd797(_0x432bf7);
              }
            }
          });
        };
        _0x4d1b64.exports;
      }, {});
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js", function (_0x2bfcad, _0x4faa4f, _0x4b47fe, _0x2a67f0, _0x54add1) {
        _0x2bfcad.length = function (_0xbaeec5) {
          var _0x16a881 = _0xbaeec5.length;
          if (!_0x16a881) {
            return 0x0;
          }
          for (var _0x3590ce = 0x0; --_0x16a881 % 0x4 > 0x1 && '=' === _0xbaeec5.charAt(_0x16a881);) {
            ++_0x3590ce;
          }
          return Math.ceil(0x3 * _0xbaeec5.length) / 0x4 - _0x3590ce;
        };
        var _0x41538b = new Array(0x40);
        var _0x139308 = new Array(0x7b);
        for (var _0x1a505a = 0x0; _0x1a505a < 0x40;) {
          _0x139308[_0x41538b[_0x1a505a] = _0x1a505a < 0x1a ? _0x1a505a + 0x41 : _0x1a505a < 0x34 ? _0x1a505a + 0x47 : _0x1a505a < 0x3e ? _0x1a505a - 0x4 : _0x1a505a - 0x3b | 0x2b] = _0x1a505a++;
        }
        _0x2bfcad.encode = function (_0x21e2d3, _0x30e081, _0x45952d) {
          var _0x1a92ee;
          var _0x32a178 = null;
          var _0x172796 = [];
          var _0x127848 = 0x0;
          for (var _0x255bf0 = 0x0; _0x30e081 < _0x45952d;) {
            var _0x51828e = _0x21e2d3[_0x30e081++];
            switch (_0x255bf0) {
              case 0x0:
                _0x172796[_0x127848++] = _0x41538b[_0x51828e >> 0x2];
                _0x1a92ee = (0x3 & _0x51828e) << 0x4;
                _0x255bf0 = 0x1;
                break;
              case 0x1:
                _0x172796[_0x127848++] = _0x41538b[_0x1a92ee | _0x51828e >> 0x4];
                _0x1a92ee = (0xf & _0x51828e) << 0x2;
                _0x255bf0 = 0x2;
                break;
              case 0x2:
                _0x172796[_0x127848++] = _0x41538b[_0x1a92ee | _0x51828e >> 0x6];
                _0x172796[_0x127848++] = _0x41538b[0x3f & _0x51828e];
                _0x255bf0 = 0x0;
            }
            if (_0x127848 > 0x1fff) {
              (_0x32a178 || (_0x32a178 = [])).push(String.fromCharCode.apply(String, _0x172796));
              _0x127848 = 0x0;
            }
          }
          if (_0x255bf0) {
            _0x172796[_0x127848++] = _0x41538b[_0x1a92ee];
            _0x172796[_0x127848++] = 0x3d;
            if (0x1 === _0x255bf0) {
              _0x172796[_0x127848++] = 0x3d;
            }
          }
          return _0x32a178 ? (_0x127848 && _0x32a178.push(String.fromCharCode.apply(String, _0x172796.slice(0x0, _0x127848))), _0x32a178.join('')) : String.fromCharCode.apply(String, _0x172796.slice(0x0, _0x127848));
        };
        _0x2bfcad.decode = function (_0x509e58, _0x5127e9, _0x327408) {
          var _0x192e88;
          var _0xd186f0 = _0x327408;
          var _0x1b1abf = 0x0;
          for (var _0x21bb9a = 0x0; _0x21bb9a < _0x509e58.length;) {
            var _0x32feb6 = _0x509e58.charCodeAt(_0x21bb9a++);
            if (0x3d === _0x32feb6 && _0x1b1abf > 0x1) {
              break;
            }
            if (undefined === (_0x32feb6 = _0x139308[_0x32feb6])) {
              throw Error("invalid encoding");
            }
            switch (_0x1b1abf) {
              case 0x0:
                _0x192e88 = _0x32feb6;
                _0x1b1abf = 0x1;
                break;
              case 0x1:
                _0x5127e9[_0x327408++] = _0x192e88 << 0x2 | (0x30 & _0x32feb6) >> 0x4;
                _0x192e88 = _0x32feb6;
                _0x1b1abf = 0x2;
                break;
              case 0x2:
                _0x5127e9[_0x327408++] = (0xf & _0x192e88) << 0x4 | (0x3c & _0x32feb6) >> 0x2;
                _0x192e88 = _0x32feb6;
                _0x1b1abf = 0x3;
                break;
              case 0x3:
                _0x5127e9[_0x327408++] = (0x3 & _0x192e88) << 0x6 | _0x32feb6;
                _0x1b1abf = 0x0;
            }
          }
          if (0x1 === _0x1b1abf) {
            throw Error("invalid encoding");
          }
          return _0x327408 - _0xd186f0;
        };
        _0x2bfcad.test = function (_0x40b9fc) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(_0x40b9fc);
        };
        _0x4b47fe.exports;
      }, {});
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js", function (_0x5a674b, _0x17b62a, _0x3a9f8b, _0x45e25e, _0x5a6f7a) {
        function _0x1fbb65() {
          this._listeners = {};
        }
        _0x3a9f8b.exports = _0x1fbb65;
        _0x1fbb65.prototype.on = function (_0x79afb3, _0x19c14d, _0x3b6cff) {
          (this._listeners[_0x79afb3] || (this._listeners[_0x79afb3] = [])).push({
            'fn': _0x19c14d,
            'ctx': _0x3b6cff || this
          });
          return this;
        };
        _0x1fbb65.prototype.off = function (_0x25cb4e, _0x3badd0) {
          if (undefined === _0x25cb4e) {
            this._listeners = {};
          } else {
            if (undefined === _0x3badd0) {
              this._listeners[_0x25cb4e] = [];
            } else {
              var _0x31d8fe = this._listeners[_0x25cb4e];
              for (var _0x5d8d39 = 0x0; _0x5d8d39 < _0x31d8fe.length;) {
                if (_0x31d8fe[_0x5d8d39].fn === _0x3badd0) {
                  _0x31d8fe.splice(_0x5d8d39, 0x1);
                } else {
                  ++_0x5d8d39;
                }
              }
            }
          }
          return this;
        };
        _0x1fbb65.prototype.emit = function (_0x694ef1) {
          var _0x4a3ab9 = this._listeners[_0x694ef1];
          if (_0x4a3ab9) {
            var _0x25700c = [];
            for (var _0x402c1c = 0x1; _0x402c1c < arguments.length;) {
              _0x25700c.push(arguments[_0x402c1c++]);
            }
            for (_0x402c1c = 0x0; _0x402c1c < _0x4a3ab9.length;) {
              _0x4a3ab9[_0x402c1c].fn.apply(_0x4a3ab9[_0x402c1c++].ctx, _0x25700c);
            }
          }
          return this;
        };
        _0x3a9f8b.exports;
      }, {});
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/@protobufjs/float/index.js", function (_0x42ba1d, _0x188c50, _0x152171, _0x674d43, _0x242745) {
        function _0x477ebc(_0x3482e0) {
          if ("undefined" != typeof Float32Array) {
            (function () {
              var _0x53e943 = new Float32Array([-0x0]);
              var _0x325ec0 = new Uint8Array(_0x53e943.buffer);
              var _0x3627f4 = 0x80 === _0x325ec0[0x3];
              function _0x49d681(_0x42eee9, _0x29a95e, _0xcaf073) {
                _0x53e943[0x0] = _0x42eee9;
                _0x29a95e[_0xcaf073] = _0x325ec0[0x0];
                _0x29a95e[_0xcaf073 + 0x1] = _0x325ec0[0x1];
                _0x29a95e[_0xcaf073 + 0x2] = _0x325ec0[0x2];
                _0x29a95e[_0xcaf073 + 0x3] = _0x325ec0[0x3];
              }
              function _0x387085(_0x912741, _0x276140, _0x5339aa) {
                _0x53e943[0x0] = _0x912741;
                _0x276140[_0x5339aa] = _0x325ec0[0x3];
                _0x276140[_0x5339aa + 0x1] = _0x325ec0[0x2];
                _0x276140[_0x5339aa + 0x2] = _0x325ec0[0x1];
                _0x276140[_0x5339aa + 0x3] = _0x325ec0[0x0];
              }
              function _0x334f8a(_0x2ce4a9, _0x595680) {
                _0x325ec0[0x0] = _0x2ce4a9[_0x595680];
                _0x325ec0[0x1] = _0x2ce4a9[_0x595680 + 0x1];
                _0x325ec0[0x2] = _0x2ce4a9[_0x595680 + 0x2];
                _0x325ec0[0x3] = _0x2ce4a9[_0x595680 + 0x3];
                return _0x53e943[0x0];
              }
              function _0xc41422(_0x360597, _0x395573) {
                _0x325ec0[0x3] = _0x360597[_0x395573];
                _0x325ec0[0x2] = _0x360597[_0x395573 + 0x1];
                _0x325ec0[0x1] = _0x360597[_0x395573 + 0x2];
                _0x325ec0[0x0] = _0x360597[_0x395573 + 0x3];
                return _0x53e943[0x0];
              }
              _0x3482e0.writeFloatLE = _0x3627f4 ? _0x49d681 : _0x387085;
              _0x3482e0.writeFloatBE = _0x3627f4 ? _0x387085 : _0x49d681;
              _0x3482e0.readFloatLE = _0x3627f4 ? _0x334f8a : _0xc41422;
              _0x3482e0.readFloatBE = _0x3627f4 ? _0xc41422 : _0x334f8a;
            })();
          } else {
            (function () {
              function _0x4e1e7c(_0x8e9687, _0x331e90, _0x36a2bd, _0x1a1a52) {
                var _0x36c4b0 = _0x331e90 < 0x0 ? 0x1 : 0x0;
                if (_0x36c4b0) {
                  _0x331e90 = -_0x331e90;
                }
                if (0x0 === _0x331e90) {
                  _0x8e9687(0x1 / _0x331e90 > 0x0 ? 0x0 : 0x80000000, _0x36a2bd, _0x1a1a52);
                } else {
                  if (isNaN(_0x331e90)) {
                    _0x8e9687(0x7fc00000, _0x36a2bd, _0x1a1a52);
                  } else {
                    if (_0x331e90 > 0xffffff00000000000000000000000000) {
                      _0x8e9687((_0x36c4b0 << 0x1f | 0x7f800000) >>> 0x0, _0x36a2bd, _0x1a1a52);
                    } else {
                      if (_0x331e90 < 1.1754943508222875e-38) {
                        _0x8e9687((_0x36c4b0 << 0x1f | Math.round(_0x331e90 / 1.401298464324817e-45)) >>> 0x0, _0x36a2bd, _0x1a1a52);
                      } else {
                        var _0x362cf9 = Math.floor(Math.log(_0x331e90) / Math.LN2);
                        _0x8e9687((_0x36c4b0 << 0x1f | _0x362cf9 + 0x7f << 0x17 | 0x7fffff & Math.round(_0x331e90 * Math.pow(0x2, -_0x362cf9) * 0x800000)) >>> 0x0, _0x36a2bd, _0x1a1a52);
                      }
                    }
                  }
                }
              }
              function _0x27bee7(_0xe194ce, _0x1d1bea, _0xa7cd53) {
                var _0x40cee0 = _0xe194ce(_0x1d1bea, _0xa7cd53);
                var _0x2abe85 = 0x2 * (_0x40cee0 >> 0x1f) + 0x1;
                var _0x263f14 = _0x40cee0 >>> 0x17 & 0xff;
                var _0xf483c3 = 0x7fffff & _0x40cee0;
                return 0xff === _0x263f14 ? _0xf483c3 ? NaN : _0x2abe85 * Infinity : 0x0 === _0x263f14 ? 1.401298464324817e-45 * _0x2abe85 * _0xf483c3 : _0x2abe85 * Math.pow(0x2, _0x263f14 - 0x96) * (_0xf483c3 + 0x800000);
              }
              _0x3482e0.writeFloatLE = _0x4e1e7c.bind(null, _0x3cf617);
              _0x3482e0.writeFloatBE = _0x4e1e7c.bind(null, _0x1daa2f);
              _0x3482e0.readFloatLE = _0x27bee7.bind(null, _0xd89b29);
              _0x3482e0.readFloatBE = _0x27bee7.bind(null, _0xf6338d);
            })();
          }
          if ("undefined" != typeof Float64Array) {
            (function () {
              var _0x5e6b43 = new Float64Array([-0x0]);
              var _0x4962ae = new Uint8Array(_0x5e6b43.buffer);
              var _0x2b8115 = 0x80 === _0x4962ae[0x7];
              function _0x35df6d(_0x3790e8, _0x24afc4, _0x5835c3) {
                _0x5e6b43[0x0] = _0x3790e8;
                _0x24afc4[_0x5835c3] = _0x4962ae[0x0];
                _0x24afc4[_0x5835c3 + 0x1] = _0x4962ae[0x1];
                _0x24afc4[_0x5835c3 + 0x2] = _0x4962ae[0x2];
                _0x24afc4[_0x5835c3 + 0x3] = _0x4962ae[0x3];
                _0x24afc4[_0x5835c3 + 0x4] = _0x4962ae[0x4];
                _0x24afc4[_0x5835c3 + 0x5] = _0x4962ae[0x5];
                _0x24afc4[_0x5835c3 + 0x6] = _0x4962ae[0x6];
                _0x24afc4[_0x5835c3 + 0x7] = _0x4962ae[0x7];
              }
              function _0x40f3f5(_0x35c76c, _0xa35896, _0x737602) {
                _0x5e6b43[0x0] = _0x35c76c;
                _0xa35896[_0x737602] = _0x4962ae[0x7];
                _0xa35896[_0x737602 + 0x1] = _0x4962ae[0x6];
                _0xa35896[_0x737602 + 0x2] = _0x4962ae[0x5];
                _0xa35896[_0x737602 + 0x3] = _0x4962ae[0x4];
                _0xa35896[_0x737602 + 0x4] = _0x4962ae[0x3];
                _0xa35896[_0x737602 + 0x5] = _0x4962ae[0x2];
                _0xa35896[_0x737602 + 0x6] = _0x4962ae[0x1];
                _0xa35896[_0x737602 + 0x7] = _0x4962ae[0x0];
              }
              function _0x5dd6c7(_0x21652b, _0x2db8a1) {
                _0x4962ae[0x0] = _0x21652b[_0x2db8a1];
                _0x4962ae[0x1] = _0x21652b[_0x2db8a1 + 0x1];
                _0x4962ae[0x2] = _0x21652b[_0x2db8a1 + 0x2];
                _0x4962ae[0x3] = _0x21652b[_0x2db8a1 + 0x3];
                _0x4962ae[0x4] = _0x21652b[_0x2db8a1 + 0x4];
                _0x4962ae[0x5] = _0x21652b[_0x2db8a1 + 0x5];
                _0x4962ae[0x6] = _0x21652b[_0x2db8a1 + 0x6];
                _0x4962ae[0x7] = _0x21652b[_0x2db8a1 + 0x7];
                return _0x5e6b43[0x0];
              }
              function _0x367c68(_0x3129e1, _0x156854) {
                _0x4962ae[0x7] = _0x3129e1[_0x156854];
                _0x4962ae[0x6] = _0x3129e1[_0x156854 + 0x1];
                _0x4962ae[0x5] = _0x3129e1[_0x156854 + 0x2];
                _0x4962ae[0x4] = _0x3129e1[_0x156854 + 0x3];
                _0x4962ae[0x3] = _0x3129e1[_0x156854 + 0x4];
                _0x4962ae[0x2] = _0x3129e1[_0x156854 + 0x5];
                _0x4962ae[0x1] = _0x3129e1[_0x156854 + 0x6];
                _0x4962ae[0x0] = _0x3129e1[_0x156854 + 0x7];
                return _0x5e6b43[0x0];
              }
              _0x3482e0.writeDoubleLE = _0x2b8115 ? _0x35df6d : _0x40f3f5;
              _0x3482e0.writeDoubleBE = _0x2b8115 ? _0x40f3f5 : _0x35df6d;
              _0x3482e0.readDoubleLE = _0x2b8115 ? _0x5dd6c7 : _0x367c68;
              _0x3482e0.readDoubleBE = _0x2b8115 ? _0x367c68 : _0x5dd6c7;
            })();
          } else {
            (function () {
              function _0x46a233(_0x2fca39, _0x1b3834, _0x477c0a, _0x16752c, _0x578705, _0x394cee) {
                var _0x204117 = _0x16752c < 0x0 ? 0x1 : 0x0;
                if (_0x204117) {
                  _0x16752c = -_0x16752c;
                }
                if (0x0 === _0x16752c) {
                  _0x2fca39(0x0, _0x578705, _0x394cee + _0x1b3834);
                  _0x2fca39(0x1 / _0x16752c > 0x0 ? 0x0 : 0x80000000, _0x578705, _0x394cee + _0x477c0a);
                } else {
                  if (isNaN(_0x16752c)) {
                    _0x2fca39(0x0, _0x578705, _0x394cee + _0x1b3834);
                    _0x2fca39(0x7ff80000, _0x578705, _0x394cee + _0x477c0a);
                  } else {
                    if (_0x16752c > 0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
                      _0x2fca39(0x0, _0x578705, _0x394cee + _0x1b3834);
                      _0x2fca39((_0x204117 << 0x1f | 0x7ff00000) >>> 0x0, _0x578705, _0x394cee + _0x477c0a);
                    } else {
                      var _0x577405;
                      if (_0x16752c < 2.2250738585072014e-308) {
                        _0x2fca39((_0x577405 = _0x16752c / 5e-324) >>> 0x0, _0x578705, _0x394cee + _0x1b3834);
                        _0x2fca39((_0x204117 << 0x1f | _0x577405 / 0x100000000) >>> 0x0, _0x578705, _0x394cee + _0x477c0a);
                      } else {
                        var _0x1efb7a = Math.floor(Math.log(_0x16752c) / Math.LN2);
                        if (0x400 === _0x1efb7a) {
                          _0x1efb7a = 0x3ff;
                        }
                        _0x2fca39(0x10000000000000 * (_0x577405 = _0x16752c * Math.pow(0x2, -_0x1efb7a)) >>> 0x0, _0x578705, _0x394cee + _0x1b3834);
                        _0x2fca39((_0x204117 << 0x1f | _0x1efb7a + 0x3ff << 0x14 | 0x100000 * _0x577405 & 0xfffff) >>> 0x0, _0x578705, _0x394cee + _0x477c0a);
                      }
                    }
                  }
                }
              }
              function _0x41d950(_0x388870, _0x3561e9, _0x4c94b1, _0xd22d5e, _0x3b6f52) {
                var _0x27d03e = _0x388870(_0xd22d5e, _0x3b6f52 + _0x3561e9);
                var _0x526176 = _0x388870(_0xd22d5e, _0x3b6f52 + _0x4c94b1);
                var _0xe1f977 = 0x2 * (_0x526176 >> 0x1f) + 0x1;
                var _0x55bb5 = _0x526176 >>> 0x14 & 0x7ff;
                var _0x36a099 = 0x100000000 * (0xfffff & _0x526176) + _0x27d03e;
                return 0x7ff === _0x55bb5 ? _0x36a099 ? NaN : _0xe1f977 * Infinity : 0x0 === _0x55bb5 ? 5e-324 * _0xe1f977 * _0x36a099 : _0xe1f977 * Math.pow(0x2, _0x55bb5 - 0x433) * (_0x36a099 + 0x10000000000000);
              }
              _0x3482e0.writeDoubleLE = _0x46a233.bind(null, _0x3cf617, 0x0, 0x4);
              _0x3482e0.writeDoubleBE = _0x46a233.bind(null, _0x1daa2f, 0x4, 0x0);
              _0x3482e0.readDoubleLE = _0x41d950.bind(null, _0xd89b29, 0x0, 0x4);
              _0x3482e0.readDoubleBE = _0x41d950.bind(null, _0xf6338d, 0x4, 0x0);
            })();
          }
          return _0x3482e0;
        }
        function _0x3cf617(_0x21ef31, _0x5622ee, _0x4ad386) {
          _0x5622ee[_0x4ad386] = 0xff & _0x21ef31;
          _0x5622ee[_0x4ad386 + 0x1] = _0x21ef31 >>> 0x8 & 0xff;
          _0x5622ee[_0x4ad386 + 0x2] = _0x21ef31 >>> 0x10 & 0xff;
          _0x5622ee[_0x4ad386 + 0x3] = _0x21ef31 >>> 0x18;
        }
        function _0x1daa2f(_0x22cdab, _0x3ebf28, _0x159bed) {
          _0x3ebf28[_0x159bed] = _0x22cdab >>> 0x18;
          _0x3ebf28[_0x159bed + 0x1] = _0x22cdab >>> 0x10 & 0xff;
          _0x3ebf28[_0x159bed + 0x2] = _0x22cdab >>> 0x8 & 0xff;
          _0x3ebf28[_0x159bed + 0x3] = 0xff & _0x22cdab;
        }
        function _0xd89b29(_0x4e3456, _0x3053a6) {
          return (_0x4e3456[_0x3053a6] | _0x4e3456[_0x3053a6 + 0x1] << 0x8 | _0x4e3456[_0x3053a6 + 0x2] << 0x10 | _0x4e3456[_0x3053a6 + 0x3] << 0x18) >>> 0x0;
        }
        function _0xf6338d(_0x5e1b88, _0xd0f9b8) {
          return (_0x5e1b88[_0xd0f9b8] << 0x18 | _0x5e1b88[_0xd0f9b8 + 0x1] << 0x10 | _0x5e1b88[_0xd0f9b8 + 0x2] << 0x8 | _0x5e1b88[_0xd0f9b8 + 0x3]) >>> 0x0;
        }
        _0x152171.exports = _0x477ebc(_0x477ebc);
        _0x152171.exports;
        _0x152171.exports.writeFloatLE;
        _0x152171.exports.writeFloatBE;
        _0x152171.exports.readFloatLE;
        _0x152171.exports.readFloatBE;
        _0x152171.exports.writeDoubleLE;
        _0x152171.exports.writeDoubleBE;
        _0x152171.exports.readDoubleLE;
        _0x152171.exports.readDoubleBE;
      }, {});
      _0x50443a.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js', function (_0x14488a, _0x58c6ef, _0x984474, _0x5303b2, _0x3b9586) {
        function _0x3a9cc3(_0x40f466) {
          try {
            var _0x45486b = eval("quire".replace(/^/, 're'))(_0x40f466);
            if (_0x45486b && (_0x45486b.length || Object.keys(_0x45486b).length)) {
              return _0x45486b;
            }
          } catch (_0x4402e0) {}
          return null;
        }
        _0x984474.exports = _0x3a9cc3;
        _0x984474.exports;
      }, {});
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js", function (_0xebfa77, _0x294f8c, _0x4fa807, _0x5460bb, _0x7e93a3) {
        _0xebfa77.length = function (_0x298168) {
          var _0x44d463 = 0x0;
          var _0x307a40 = 0x0;
          for (var _0x186f60 = 0x0; _0x186f60 < _0x298168.length; ++_0x186f60) {
            if ((_0x307a40 = _0x298168.charCodeAt(_0x186f60)) < 0x80) {
              _0x44d463 += 0x1;
            } else if (_0x307a40 < 0x800) {
              _0x44d463 += 0x2;
            } else if (0xd800 == (0xfc00 & _0x307a40) && 0xdc00 == (0xfc00 & _0x298168.charCodeAt(_0x186f60 + 0x1))) {
              ++_0x186f60;
              _0x44d463 += 0x4;
            } else {
              _0x44d463 += 0x3;
            }
          }
          return _0x44d463;
        };
        _0xebfa77.read = function (_0x5632b1, _0x45457b, _0x525166) {
          if (_0x525166 - _0x45457b < 0x1) {
            return '';
          }
          var _0xfcec05;
          var _0x27d3b4 = null;
          var _0x3406bb = [];
          for (var _0x3d5b44 = 0x0; _0x45457b < _0x525166;) {
            if ((_0xfcec05 = _0x5632b1[_0x45457b++]) < 0x80) {
              _0x3406bb[_0x3d5b44++] = _0xfcec05;
            } else if (_0xfcec05 > 0xbf && _0xfcec05 < 0xe0) {
              _0x3406bb[_0x3d5b44++] = (0x1f & _0xfcec05) << 0x6 | 0x3f & _0x5632b1[_0x45457b++];
            } else if (_0xfcec05 > 0xef && _0xfcec05 < 0x16d) {
              _0xfcec05 = ((0x7 & _0xfcec05) << 0x12 | (0x3f & _0x5632b1[_0x45457b++]) << 0xc | (0x3f & _0x5632b1[_0x45457b++]) << 0x6 | 0x3f & _0x5632b1[_0x45457b++]) - 0x10000;
              _0x3406bb[_0x3d5b44++] = 0xd800 + (_0xfcec05 >> 0xa);
              _0x3406bb[_0x3d5b44++] = 0xdc00 + (0x3ff & _0xfcec05);
            } else {
              _0x3406bb[_0x3d5b44++] = (0xf & _0xfcec05) << 0xc | (0x3f & _0x5632b1[_0x45457b++]) << 0x6 | 0x3f & _0x5632b1[_0x45457b++];
            }
            if (_0x3d5b44 > 0x1fff) {
              (_0x27d3b4 || (_0x27d3b4 = [])).push(String.fromCharCode.apply(String, _0x3406bb));
              _0x3d5b44 = 0x0;
            }
          }
          return _0x27d3b4 ? (_0x3d5b44 && _0x27d3b4.push(String.fromCharCode.apply(String, _0x3406bb.slice(0x0, _0x3d5b44))), _0x27d3b4.join('')) : String.fromCharCode.apply(String, _0x3406bb.slice(0x0, _0x3d5b44));
        };
        _0xebfa77.write = function (_0x1a9bdc, _0x5d69fc, _0x18af89) {
          var _0x8e32a3;
          var _0x3d54fb;
          var _0x63d296 = _0x18af89;
          for (var _0x565d30 = 0x0; _0x565d30 < _0x1a9bdc.length; ++_0x565d30) {
            if ((_0x8e32a3 = _0x1a9bdc.charCodeAt(_0x565d30)) < 0x80) {
              _0x5d69fc[_0x18af89++] = _0x8e32a3;
            } else if (_0x8e32a3 < 0x800) {
              _0x5d69fc[_0x18af89++] = _0x8e32a3 >> 0x6 | 0xc0;
              _0x5d69fc[_0x18af89++] = 0x3f & _0x8e32a3 | 0x80;
            } else if (0xd800 == (0xfc00 & _0x8e32a3) && 0xdc00 == (0xfc00 & (_0x3d54fb = _0x1a9bdc.charCodeAt(_0x565d30 + 0x1)))) {
              _0x8e32a3 = 0x10000 + ((0x3ff & _0x8e32a3) << 0xa) + (0x3ff & _0x3d54fb);
              ++_0x565d30;
              _0x5d69fc[_0x18af89++] = _0x8e32a3 >> 0x12 | 0xf0;
              _0x5d69fc[_0x18af89++] = _0x8e32a3 >> 0xc & 0x3f | 0x80;
              _0x5d69fc[_0x18af89++] = _0x8e32a3 >> 0x6 & 0x3f | 0x80;
              _0x5d69fc[_0x18af89++] = 0x3f & _0x8e32a3 | 0x80;
            } else {
              _0x5d69fc[_0x18af89++] = _0x8e32a3 >> 0xc | 0xe0;
              _0x5d69fc[_0x18af89++] = _0x8e32a3 >> 0x6 & 0x3f | 0x80;
              _0x5d69fc[_0x18af89++] = 0x3f & _0x8e32a3 | 0x80;
            }
          }
          return _0x18af89 - _0x63d296;
        };
        _0x4fa807.exports;
      }, {});
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js", function (_0x21c5ee, _0x4d2e80, _0x5558fc, _0x2d4dd4, _0x53475d) {
        _0x5558fc.exports = function (_0x2dba60, _0x3d66b7, _0x4a2f5f) {
          var _0x15af9b = _0x4a2f5f || 0x2000;
          var _0x2ca2e2 = _0x15af9b >>> 0x1;
          var _0x594a01 = null;
          var _0x3f064e = _0x15af9b;
          return function (_0x798553) {
            if (_0x798553 < 0x1 || _0x798553 > _0x2ca2e2) {
              return _0x2dba60(_0x798553);
            }
            if (_0x3f064e + _0x798553 > _0x15af9b) {
              _0x594a01 = _0x2dba60(_0x15af9b);
              _0x3f064e = 0x0;
            }
            var _0xaaf1b3 = _0x3d66b7.call(_0x594a01, _0x3f064e, _0x3f064e += _0x798553);
            if (0x7 & _0x3f064e) {
              _0x3f064e = 0x1 + (0x7 | _0x3f064e);
            }
            return _0xaaf1b3;
          };
        };
        _0x5558fc.exports;
      }, {});
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js", function (_0x2b8e61, _0x19ec4f, _0x55fcce, _0x4b0f53, _0x446493) {
        _0x55fcce.exports = _0x553ef1;
        var _0x159bbd = _0x19ec4f("../util/minimal");
        function _0x553ef1(_0x1ab069, _0x2c92f5) {
          this.lo = _0x1ab069 >>> 0x0;
          this.hi = _0x2c92f5 >>> 0x0;
        }
        var _0x3b2552 = _0x553ef1.zero = new _0x553ef1(0x0, 0x0);
        _0x3b2552.toNumber = function () {
          return 0x0;
        };
        _0x3b2552.zzEncode = _0x3b2552.zzDecode = function () {
          return this;
        };
        _0x3b2552.length = function () {
          return 0x1;
        };
        var _0x598be2 = _0x553ef1.zeroHash = "\0\0\0\0\0\0\0\0";
        _0x553ef1.fromNumber = function (_0x5e39f5) {
          if (0x0 === _0x5e39f5) {
            return _0x3b2552;
          }
          var _0x19d147 = _0x5e39f5 < 0x0;
          if (_0x19d147) {
            _0x5e39f5 = -_0x5e39f5;
          }
          var _0x1b9de9 = _0x5e39f5 >>> 0x0;
          var _0x1a58c1 = (_0x5e39f5 - _0x1b9de9) / 0x100000000 >>> 0x0;
          if (_0x19d147) {
            _0x1a58c1 = ~_0x1a58c1 >>> 0x0;
            _0x1b9de9 = ~_0x1b9de9 >>> 0x0;
            if (++_0x1b9de9 > 0xffffffff) {
              _0x1b9de9 = 0x0;
              if (++_0x1a58c1 > 0xffffffff) {
                _0x1a58c1 = 0x0;
              }
            }
          }
          return new _0x553ef1(_0x1b9de9, _0x1a58c1);
        };
        _0x553ef1.from = function (_0x198f6d) {
          if ("number" == typeof _0x198f6d) {
            return _0x553ef1.fromNumber(_0x198f6d);
          }
          if (_0x159bbd.isString(_0x198f6d)) {
            if (!_0x159bbd.Long) {
              return _0x553ef1.fromNumber(parseInt(_0x198f6d, 0xa));
            }
            _0x198f6d = _0x159bbd.Long.fromString(_0x198f6d);
          }
          return _0x198f6d.low || _0x198f6d.high ? new _0x553ef1(_0x198f6d.low >>> 0x0, _0x198f6d.high >>> 0x0) : _0x3b2552;
        };
        _0x553ef1.prototype.toNumber = function (_0x33a70d) {
          if (!_0x33a70d && this.hi >>> 0x1f) {
            var _0x150621 = 0x1 + ~this.lo >>> 0x0;
            var _0x2210ff = ~this.hi >>> 0x0;
            if (!_0x150621) {
              _0x2210ff = _0x2210ff + 0x1 >>> 0x0;
            }
            return -(_0x150621 + 0x100000000 * _0x2210ff);
          }
          return this.lo + 0x100000000 * this.hi;
        };
        _0x553ef1.prototype.toLong = function (_0x5c80d5) {
          return _0x159bbd.Long ? new _0x159bbd.Long(0x0 | this.lo, 0x0 | this.hi, Boolean(_0x5c80d5)) : {
            'low': 0x0 | this.lo,
            'high': 0x0 | this.hi,
            'unsigned': Boolean(_0x5c80d5)
          };
        };
        var _0x393199 = String.prototype.charCodeAt;
        _0x553ef1.fromHash = function (_0x3da0d2) {
          return _0x3da0d2 === _0x598be2 ? _0x3b2552 : new _0x553ef1((_0x393199.call(_0x3da0d2, 0x0) | _0x393199.call(_0x3da0d2, 0x1) << 0x8 | _0x393199.call(_0x3da0d2, 0x2) << 0x10 | _0x393199.call(_0x3da0d2, 0x3) << 0x18) >>> 0x0, (_0x393199.call(_0x3da0d2, 0x4) | _0x393199.call(_0x3da0d2, 0x5) << 0x8 | _0x393199.call(_0x3da0d2, 0x6) << 0x10 | _0x393199.call(_0x3da0d2, 0x7) << 0x18) >>> 0x0);
        };
        _0x553ef1.prototype.toHash = function () {
          return String.fromCharCode(0xff & this.lo, this.lo >>> 0x8 & 0xff, this.lo >>> 0x10 & 0xff, this.lo >>> 0x18, 0xff & this.hi, this.hi >>> 0x8 & 0xff, this.hi >>> 0x10 & 0xff, this.hi >>> 0x18);
        };
        _0x553ef1.prototype.zzEncode = function () {
          var _0x310ae1 = this.hi >> 0x1f;
          this.hi = ((this.hi << 0x1 | this.lo >>> 0x1f) ^ _0x310ae1) >>> 0x0;
          this.lo = (this.lo << 0x1 ^ _0x310ae1) >>> 0x0;
          return this;
        };
        _0x553ef1.prototype.zzDecode = function () {
          var _0x504173 = -(0x1 & this.lo);
          this.lo = ((this.lo >>> 0x1 | this.hi << 0x1f) ^ _0x504173) >>> 0x0;
          this.hi = (this.hi >>> 0x1 ^ _0x504173) >>> 0x0;
          return this;
        };
        _0x553ef1.prototype.length = function () {
          var _0x43c9c9 = this.lo;
          var _0x58bf7e = (this.lo >>> 0x1c | this.hi << 0x4) >>> 0x0;
          var _0xf9e95c = this.hi >>> 0x18;
          return 0x0 === _0xf9e95c ? 0x0 === _0x58bf7e ? _0x43c9c9 < 0x4000 ? _0x43c9c9 < 0x80 ? 0x1 : 0x2 : _0x43c9c9 < 0x200000 ? 0x3 : 0x4 : _0x58bf7e < 0x4000 ? _0x58bf7e < 0x80 ? 0x5 : 0x6 : _0x58bf7e < 0x200000 ? 0x7 : 0x8 : _0xf9e95c < 0x80 ? 0x9 : 0xa;
        };
        _0x55fcce.exports;
      }, function () {
        return {
          '../util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js", function (_0x354735, _0x418a33, _0x4be7e3, _0x2c43e1, _0xd18070) {
        function _0x48b565(_0x4bd2ed, _0x43ed68, _0x2b29a0) {
          var _0x1af12e = Object.keys(_0x43ed68);
          for (var _0x59a77e = 0x0; _0x59a77e < _0x1af12e.length; ++_0x59a77e) {
            if (!(undefined !== _0x4bd2ed[_0x1af12e[_0x59a77e]] && _0x2b29a0)) {
              _0x4bd2ed[_0x1af12e[_0x59a77e]] = _0x43ed68[_0x1af12e[_0x59a77e]];
            }
          }
          return _0x4bd2ed;
        }
        function _0x24b68d(_0x4fab7f) {
          function _0x52ad4f(_0x452ed8, _0x1c7ccc) {
            if (!(this instanceof _0x52ad4f)) {
              return new _0x52ad4f(_0x452ed8, _0x1c7ccc);
            }
            Object.defineProperty(this, 'message', {
              'get': function () {
                return _0x452ed8;
              }
            });
            if (Error.captureStackTrace) {
              Error.captureStackTrace(this, _0x52ad4f);
            } else {
              Object.defineProperty(this, "stack", {
                'value': new Error().stack || ''
              });
            }
            if (_0x1c7ccc) {
              _0x48b565(this, _0x1c7ccc);
            }
          }
          (_0x52ad4f.prototype = Object.create(Error.prototype)).constructor = _0x52ad4f;
          Object.defineProperty(_0x52ad4f.prototype, "name", {
            'get': function () {
              return _0x4fab7f;
            }
          });
          _0x52ad4f.prototype.toString = function () {
            return this.name + ": " + this.message;
          };
          return _0x52ad4f;
        }
        _0x354735.asPromise = _0x418a33("@protobufjs/aspromise");
        _0x354735.base64 = _0x418a33("@protobufjs/base64");
        _0x354735.EventEmitter = _0x418a33("@protobufjs/eventemitter");
        _0x354735.float = _0x418a33("@protobufjs/float");
        _0x354735.inquire = _0x418a33("@protobufjs/inquire");
        _0x354735.utf8 = _0x418a33("@protobufjs/utf8");
        _0x354735.pool = _0x418a33("@protobufjs/pool");
        _0x354735.LongBits = _0x418a33("./longbits");
        _0x354735.isNode = Boolean("undefined" != typeof global && global && global.process && global.process.versions && global.process.versions.node);
        _0x354735.global = _0x354735.isNode && global || "undefined" != typeof window && window || "undefined" != typeof self && self || this;
        _0x354735.emptyArray = Object.freeze ? Object.freeze([]) : [];
        _0x354735.emptyObject = Object.freeze ? Object.freeze({}) : {};
        _0x354735.isInteger = Number.isInteger || function (_0x31e818) {
          return "number" == typeof _0x31e818 && isFinite(_0x31e818) && Math.floor(_0x31e818) === _0x31e818;
        };
        _0x354735.isString = function (_0x5b1bc8) {
          return 'string' == typeof _0x5b1bc8 || _0x5b1bc8 instanceof String;
        };
        _0x354735.isObject = function (_0x254bcb) {
          return _0x254bcb && 'object' == typeof _0x254bcb;
        };
        _0x354735.isset = _0x354735.isSet = function (_0x28066a, _0xb14cc8) {
          var _0x3e965e = _0x28066a[_0xb14cc8];
          return !(null == _0x3e965e || !_0x28066a.hasOwnProperty(_0xb14cc8)) && ("object" != typeof _0x3e965e || (Array.isArray(_0x3e965e) ? _0x3e965e.length : Object.keys(_0x3e965e).length) > 0x0);
        };
        _0x354735.Buffer = function () {
          try {
            var _0x817b4b = _0x354735.inquire("buffer").Buffer;
            return _0x817b4b.prototype.utf8Write ? _0x817b4b : null;
          } catch (_0x184573) {
            return null;
          }
        }();
        _0x354735._Buffer_from = null;
        _0x354735._Buffer_allocUnsafe = null;
        _0x354735.newBuffer = function (_0x42ab51) {
          return "number" == typeof _0x42ab51 ? _0x354735.Buffer ? _0x354735._Buffer_allocUnsafe(_0x42ab51) : new _0x354735.Array(_0x42ab51) : _0x354735.Buffer ? _0x354735._Buffer_from(_0x42ab51) : "undefined" == typeof Uint8Array ? _0x42ab51 : new Uint8Array(_0x42ab51);
        };
        _0x354735.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array;
        _0x354735.Long = _0x354735.global.dcodeIO && _0x354735.global.dcodeIO.Long || _0x354735.global.Long || _0x354735.inquire('long');
        _0x354735.key2Re = /^true|false|0|1$/;
        _0x354735.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
        _0x354735.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
        _0x354735.longToHash = function (_0x5bf2b2) {
          return _0x5bf2b2 ? _0x354735.LongBits.from(_0x5bf2b2).toHash() : _0x354735.LongBits.zeroHash;
        };
        _0x354735.longFromHash = function (_0x40ec1a, _0x5551e4) {
          var _0x44c375 = _0x354735.LongBits.fromHash(_0x40ec1a);
          return _0x354735.Long ? _0x354735.Long.fromBits(_0x44c375.lo, _0x44c375.hi, _0x5551e4) : _0x44c375.toNumber(Boolean(_0x5551e4));
        };
        _0x354735.merge = _0x48b565;
        _0x354735.lcFirst = function (_0x9822d4) {
          return _0x9822d4.charAt(0x0).toLowerCase() + _0x9822d4.substring(0x1);
        };
        _0x354735.newError = _0x24b68d;
        _0x354735.ProtocolError = _0x24b68d('ProtocolError');
        _0x354735.oneOfGetter = function (_0x491ad1) {
          var _0x5a3f6a = {};
          for (var _0x34e2bd = 0x0; _0x34e2bd < _0x491ad1.length; ++_0x34e2bd) {
            _0x5a3f6a[_0x491ad1[_0x34e2bd]] = 0x1;
          }
          return function () {
            var _0x335821 = Object.keys(this);
            for (var _0x2d0498 = _0x335821.length - 0x1; _0x2d0498 > -0x1; --_0x2d0498) {
              if (0x1 === _0x5a3f6a[_0x335821[_0x2d0498]] && undefined !== this[_0x335821[_0x2d0498]] && null !== this[_0x335821[_0x2d0498]]) {
                return _0x335821[_0x2d0498];
              }
            }
          };
        };
        _0x354735.oneOfSetter = function (_0x1866fb) {
          return function (_0x5a19ee) {
            for (var _0x4c2415 = 0x0; _0x4c2415 < _0x1866fb.length; ++_0x4c2415) {
              if (_0x1866fb[_0x4c2415] !== _0x5a19ee) {
                delete this[_0x1866fb[_0x4c2415]];
              }
            }
          };
        };
        _0x354735.toJSONOptions = {
          'longs': String,
          'enums': String,
          'bytes': String,
          'json': true
        };
        _0x354735._configure = function () {
          var _0x580315 = _0x354735.Buffer;
          if (_0x580315) {
            _0x354735._Buffer_from = _0x580315.from !== Uint8Array.from && _0x580315.from || function (_0x50c3f9, _0x1d823b) {
              return new _0x580315(_0x50c3f9, _0x1d823b);
            };
            _0x354735._Buffer_allocUnsafe = _0x580315.allocUnsafe || function (_0xd6701e) {
              return new _0x580315(_0xd6701e);
            };
          } else {
            _0x354735._Buffer_from = _0x354735._Buffer_allocUnsafe = null;
          }
        };
        _0x4be7e3.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          '@protobufjs/base64': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js",
          '@protobufjs/eventemitter': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js",
          '@protobufjs/float': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/@protobufjs/float/index.js",
          '@protobufjs/inquire': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js',
          '@protobufjs/utf8': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js",
          '@protobufjs/pool': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js",
          './longbits': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js"
        };
      });
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/writer.js", function (_0x9ebe2b, _0x42df30, _0x4b7224, _0x46d10c, _0x1d05a1) {
        _0x4b7224.exports = _0x410c7a;
        var _0x24c5db;
        var _0x26d0bb = _0x42df30("./util/minimal");
        var _0x277ae3 = _0x26d0bb.LongBits;
        var _0x32e65e = _0x26d0bb.base64;
        var _0x3f3cec = _0x26d0bb.utf8;
        function _0x559192(_0x1d7e0a, _0x12bb24, _0x1ff8d7) {
          this.fn = _0x1d7e0a;
          this.len = _0x12bb24;
          this.next = undefined;
          this.val = _0x1ff8d7;
        }
        function _0xf351cd() {}
        function _0x5dcbd1(_0x3e4393) {
          this.head = _0x3e4393.head;
          this.tail = _0x3e4393.tail;
          this.len = _0x3e4393.len;
          this.next = _0x3e4393.states;
        }
        function _0x410c7a() {
          this.len = 0x0;
          this.head = new _0x559192(_0xf351cd, 0x0, 0x0);
          this.tail = this.head;
          this.states = null;
        }
        var _0x453aa4 = function () {
          return _0x26d0bb.Buffer ? function () {
            return (_0x410c7a.create = function () {
              return new _0x24c5db();
            })();
          } : function () {
            return new _0x410c7a();
          };
        };
        function _0x1ef8d8(_0x48eaf3, _0x59ed07, _0xa7da32) {
          _0x59ed07[_0xa7da32] = 0xff & _0x48eaf3;
        }
        function _0xfc8983(_0x27cec6, _0x5cfc9c) {
          this.len = _0x27cec6;
          this.next = undefined;
          this.val = _0x5cfc9c;
        }
        function _0xe9dd06(_0x1db630, _0x590c3f, _0x26b4aa) {
          for (; _0x1db630.hi;) {
            _0x590c3f[_0x26b4aa++] = 0x7f & _0x1db630.lo | 0x80;
            _0x1db630.lo = (_0x1db630.lo >>> 0x7 | _0x1db630.hi << 0x19) >>> 0x0;
            _0x1db630.hi >>>= 0x7;
          }
          for (; _0x1db630.lo > 0x7f;) {
            _0x590c3f[_0x26b4aa++] = 0x7f & _0x1db630.lo | 0x80;
            _0x1db630.lo = _0x1db630.lo >>> 0x7;
          }
          _0x590c3f[_0x26b4aa++] = _0x1db630.lo;
        }
        function _0x1a1779(_0x4c098e, _0x437ee0, _0x89e6bc) {
          _0x437ee0[_0x89e6bc] = 0xff & _0x4c098e;
          _0x437ee0[_0x89e6bc + 0x1] = _0x4c098e >>> 0x8 & 0xff;
          _0x437ee0[_0x89e6bc + 0x2] = _0x4c098e >>> 0x10 & 0xff;
          _0x437ee0[_0x89e6bc + 0x3] = _0x4c098e >>> 0x18;
        }
        _0x410c7a.create = _0x453aa4();
        _0x410c7a.alloc = function (_0x348e2e) {
          return new _0x26d0bb.Array(_0x348e2e);
        };
        if (_0x26d0bb.Array !== Array) {
          _0x410c7a.alloc = _0x26d0bb.pool(_0x410c7a.alloc, _0x26d0bb.Array.prototype.subarray);
        }
        _0x410c7a.prototype._push = function (_0x5131ee, _0x3ab1ad, _0x36109e) {
          this.tail = this.tail.next = new _0x559192(_0x5131ee, _0x3ab1ad, _0x36109e);
          this.len += _0x3ab1ad;
          return this;
        };
        _0xfc8983.prototype = Object.create(_0x559192.prototype);
        _0xfc8983.prototype.fn = function (_0xaae5b, _0x3bfeef, _0x4d1fd0) {
          for (; _0xaae5b > 0x7f;) {
            _0x3bfeef[_0x4d1fd0++] = 0x7f & _0xaae5b | 0x80;
            _0xaae5b >>>= 0x7;
          }
          _0x3bfeef[_0x4d1fd0] = _0xaae5b;
        };
        _0x410c7a.prototype.uint32 = function (_0x2d571d) {
          this.len += (this.tail = this.tail.next = new _0xfc8983((_0x2d571d >>>= 0x0) < 0x80 ? 0x1 : _0x2d571d < 0x4000 ? 0x2 : _0x2d571d < 0x200000 ? 0x3 : _0x2d571d < 0x10000000 ? 0x4 : 0x5, _0x2d571d)).len;
          return this;
        };
        _0x410c7a.prototype.int32 = function (_0x3cc295) {
          return _0x3cc295 < 0x0 ? this._push(_0xe9dd06, 0xa, _0x277ae3.fromNumber(_0x3cc295)) : this.uint32(_0x3cc295);
        };
        _0x410c7a.prototype.sint32 = function (_0x420f95) {
          return this.uint32((_0x420f95 << 0x1 ^ _0x420f95 >> 0x1f) >>> 0x0);
        };
        _0x410c7a.prototype.uint64 = function (_0xc9088) {
          var _0x1dfb70 = _0x277ae3.from(_0xc9088);
          return this._push(_0xe9dd06, _0x1dfb70.length(), _0x1dfb70);
        };
        _0x410c7a.prototype.int64 = _0x410c7a.prototype.uint64;
        _0x410c7a.prototype.sint64 = function (_0x47db5e) {
          var _0x464759 = _0x277ae3.from(_0x47db5e).zzEncode();
          return this._push(_0xe9dd06, _0x464759.length(), _0x464759);
        };
        _0x410c7a.prototype.bool = function (_0x1b3467) {
          return this._push(_0x1ef8d8, 0x1, _0x1b3467 ? 0x1 : 0x0);
        };
        _0x410c7a.prototype.fixed32 = function (_0x5438eb) {
          return this._push(_0x1a1779, 0x4, _0x5438eb >>> 0x0);
        };
        _0x410c7a.prototype.sfixed32 = _0x410c7a.prototype.fixed32;
        _0x410c7a.prototype.fixed64 = function (_0x4afd7f) {
          var _0x356140 = _0x277ae3.from(_0x4afd7f);
          return this._push(_0x1a1779, 0x4, _0x356140.lo)._push(_0x1a1779, 0x4, _0x356140.hi);
        };
        _0x410c7a.prototype.sfixed64 = _0x410c7a.prototype.fixed64;
        _0x410c7a.prototype.float = function (_0x1f4186) {
          return this._push(_0x26d0bb.float.writeFloatLE, 0x4, _0x1f4186);
        };
        _0x410c7a.prototype.double = function (_0x16c4f9) {
          return this._push(_0x26d0bb.float.writeDoubleLE, 0x8, _0x16c4f9);
        };
        var _0x1841d0 = _0x26d0bb.Array.prototype.set ? function (_0xdfb9c3, _0x287886, _0x594024) {
          _0x287886.set(_0xdfb9c3, _0x594024);
        } : function (_0x134c1c, _0x33eb0f, _0x3ab675) {
          for (var _0xcdb062 = 0x0; _0xcdb062 < _0x134c1c.length; ++_0xcdb062) {
            _0x33eb0f[_0x3ab675 + _0xcdb062] = _0x134c1c[_0xcdb062];
          }
        };
        _0x410c7a.prototype.bytes = function (_0x20b884) {
          var _0xf289cb = _0x20b884.length >>> 0x0;
          if (!_0xf289cb) {
            return this._push(_0x1ef8d8, 0x1, 0x0);
          }
          if (_0x26d0bb.isString(_0x20b884)) {
            var _0x5c5880 = _0x410c7a.alloc(_0xf289cb = _0x32e65e.length(_0x20b884));
            _0x32e65e.decode(_0x20b884, _0x5c5880, 0x0);
            _0x20b884 = _0x5c5880;
          }
          return this.uint32(_0xf289cb)._push(_0x1841d0, _0xf289cb, _0x20b884);
        };
        _0x410c7a.prototype.string = function (_0x345eba) {
          var _0x53c01a = _0x3f3cec.length(_0x345eba);
          return _0x53c01a ? this.uint32(_0x53c01a)._push(_0x3f3cec.write, _0x53c01a, _0x345eba) : this._push(_0x1ef8d8, 0x1, 0x0);
        };
        _0x410c7a.prototype.fork = function () {
          this.states = new _0x5dcbd1(this);
          this.head = this.tail = new _0x559192(_0xf351cd, 0x0, 0x0);
          this.len = 0x0;
          return this;
        };
        _0x410c7a.prototype.reset = function () {
          if (this.states) {
            this.head = this.states.head;
            this.tail = this.states.tail;
            this.len = this.states.len;
            this.states = this.states.next;
          } else {
            this.head = this.tail = new _0x559192(_0xf351cd, 0x0, 0x0);
            this.len = 0x0;
          }
          return this;
        };
        _0x410c7a.prototype.ldelim = function () {
          var _0x5c9dac = this.head;
          var _0x415d8f = this.tail;
          var _0x410e16 = this.len;
          this.reset().uint32(_0x410e16);
          if (_0x410e16) {
            this.tail.next = _0x5c9dac.next;
            this.tail = _0x415d8f;
            this.len += _0x410e16;
          }
          return this;
        };
        _0x410c7a.prototype.finish = function () {
          var _0x268ad5 = this.head.next;
          var _0x39ecf0 = this.constructor.alloc(this.len);
          for (var _0x2241e8 = 0x0; _0x268ad5;) {
            _0x268ad5.fn(_0x268ad5.val, _0x39ecf0, _0x2241e8);
            _0x2241e8 += _0x268ad5.len;
            _0x268ad5 = _0x268ad5.next;
          }
          return _0x39ecf0;
        };
        _0x410c7a._configure = function (_0x5be6b6) {
          _0x24c5db = _0x5be6b6;
          _0x410c7a.create = _0x453aa4();
          _0x24c5db._configure();
        };
        _0x4b7224.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x50443a.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js', function (_0x4f6412, _0x12b6ed, _0x144d07, _0x5d43a9, _0x51fab9) {
        _0x144d07.exports = _0x438268;
        var _0x3f243a = _0x12b6ed('./writer');
        (_0x438268.prototype = Object.create(_0x3f243a.prototype)).constructor = _0x438268;
        var _0x2305c2 = _0x12b6ed("./util/minimal");
        function _0x438268() {
          _0x3f243a.call(this);
        }
        function _0x2595d5(_0x256c84, _0x92d151, _0x2633c9) {
          if (_0x256c84.length < 0x28) {
            _0x2305c2.utf8.write(_0x256c84, _0x92d151, _0x2633c9);
          } else if (_0x92d151.utf8Write) {
            _0x92d151.utf8Write(_0x256c84, _0x2633c9);
          } else {
            _0x92d151.write(_0x256c84, _0x2633c9);
          }
        }
        _0x438268._configure = function () {
          _0x438268.alloc = _0x2305c2._Buffer_allocUnsafe;
          _0x438268.writeBytesBuffer = _0x2305c2.Buffer && _0x2305c2.Buffer.prototype instanceof Uint8Array && "set" === _0x2305c2.Buffer.prototype.set.name ? function (_0x235b65, _0x9789d6, _0x31a021) {
            _0x9789d6.set(_0x235b65, _0x31a021);
          } : function (_0x46b678, _0x4cea76, _0x41a601) {
            if (_0x46b678.copy) {
              _0x46b678.copy(_0x4cea76, _0x41a601, 0x0, _0x46b678.length);
            } else {
              for (var _0x378f59 = 0x0; _0x378f59 < _0x46b678.length;) {
                _0x4cea76[_0x41a601++] = _0x46b678[_0x378f59++];
              }
            }
          };
        };
        _0x438268.prototype.bytes = function (_0x2af784) {
          if (_0x2305c2.isString(_0x2af784)) {
            _0x2af784 = _0x2305c2._Buffer_from(_0x2af784, 'base64');
          }
          var _0x734def = _0x2af784.length >>> 0x0;
          this.uint32(_0x734def);
          if (_0x734def) {
            this._push(_0x438268.writeBytesBuffer, _0x734def, _0x2af784);
          }
          return this;
        };
        _0x438268.prototype.string = function (_0x125d6f) {
          var _0x1aa54b = _0x2305c2.Buffer.byteLength(_0x125d6f);
          this.uint32(_0x1aa54b);
          if (_0x1aa54b) {
            this._push(_0x2595d5, _0x1aa54b, _0x125d6f);
          }
          return this;
        };
        _0x438268._configure();
        _0x144d07.exports;
      }, function () {
        return {
          './writer': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/reader.js", function (_0x477cc3, _0x1e243f, _0x985899, _0x442710, _0x43ce82) {
        _0x985899.exports = _0x33b705;
        var _0x15e7e9;
        var _0x5b171a = _0x1e243f("./util/minimal");
        var _0x5c2d4b = _0x5b171a.LongBits;
        var _0x18a2fc = _0x5b171a.utf8;
        function _0x33b705(_0x249bf6) {
          this.buf = _0x249bf6;
          this.pos = 0x0;
          this.len = _0x249bf6.length;
        }
        var _0x557e2d;
        var _0x4b0264 = "undefined" != typeof Uint8Array ? function (_0xd7903c) {
          if (_0xd7903c instanceof Uint8Array || Array.isArray(_0xd7903c)) {
            return new _0x33b705(_0xd7903c);
          }
          throw Error("illegal buffer");
        } : function (_0x2fb2e9) {
          if (Array.isArray(_0x2fb2e9)) {
            return new _0x33b705(_0x2fb2e9);
          }
          throw Error("illegal buffer");
        };
        var _0x46b665 = function () {
          return _0x5b171a.Buffer ? function (_0x1ed06b) {
            return (_0x33b705.create = function (_0x9cd626) {
              return _0x5b171a.Buffer.isBuffer(_0x9cd626) ? new _0x15e7e9(_0x9cd626) : _0x4b0264(_0x9cd626);
            })(_0x1ed06b);
          } : _0x4b0264;
        };
        function _0x250d37() {
          var _0x19c751 = new _0x5c2d4b(0x0, 0x0);
          var _0x2e3ab4 = 0x0;
          if (!(this.len - this.pos > 0x4)) {
            for (; _0x2e3ab4 < 0x3; ++_0x2e3ab4) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0x19c751.lo = (_0x19c751.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0x2e3ab4) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x19c751;
              }
            }
            _0x19c751.lo = (_0x19c751.lo | (0x7f & this.buf[this.pos++]) << 0x7 * _0x2e3ab4) >>> 0x0;
            return _0x19c751;
          }
          for (; _0x2e3ab4 < 0x4; ++_0x2e3ab4) {
            _0x19c751.lo = (_0x19c751.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0x2e3ab4) >>> 0x0;
            if (this.buf[this.pos++] < 0x80) {
              return _0x19c751;
            }
          }
          _0x19c751.lo = (_0x19c751.lo | (0x7f & this.buf[this.pos]) << 0x1c) >>> 0x0;
          _0x19c751.hi = (_0x19c751.hi | (0x7f & this.buf[this.pos]) >> 0x4) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x19c751;
          }
          _0x2e3ab4 = 0x0;
          if (this.len - this.pos > 0x4) {
            for (; _0x2e3ab4 < 0x5; ++_0x2e3ab4) {
              _0x19c751.hi = (_0x19c751.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0x2e3ab4 + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x19c751;
              }
            }
          } else {
            for (; _0x2e3ab4 < 0x5; ++_0x2e3ab4) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0x19c751.hi = (_0x19c751.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0x2e3ab4 + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x19c751;
              }
            }
          }
          throw Error("invalid varint encoding");
        }
        function _0x40a5ac() {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x8 || 0x1) + " > " + this.len);
          }
          return new _0x5c2d4b((this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0, (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0);
        }
        _0x33b705.create = _0x46b665();
        _0x33b705.prototype._slice = _0x5b171a.Array.prototype.subarray || _0x5b171a.Array.prototype.slice;
        _0x557e2d = 0xffffffff;
        _0x33b705.prototype.uint32 = function () {
          _0x557e2d = (0x7f & this.buf[this.pos]) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x557e2d;
          }
          _0x557e2d = (_0x557e2d | (0x7f & this.buf[this.pos]) << 0x7) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x557e2d;
          }
          _0x557e2d = (_0x557e2d | (0x7f & this.buf[this.pos]) << 0xe) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x557e2d;
          }
          _0x557e2d = (_0x557e2d | (0x7f & this.buf[this.pos]) << 0x15) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x557e2d;
          }
          _0x557e2d = (_0x557e2d | (0xf & this.buf[this.pos]) << 0x1c) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x557e2d;
          }
          if ((this.pos += 0x5) > this.len) {
            this.pos = this.len;
            throw RangeError("index out of range: " + this.pos + " + " + (0xa || 0x1) + " > " + this.len);
          }
          return _0x557e2d;
        };
        _0x33b705.prototype.int32 = function () {
          return 0x0 | this.uint32();
        };
        _0x33b705.prototype.sint32 = function () {
          var _0x35e5bc = this.uint32();
          return _0x35e5bc >>> 0x1 ^ -(0x1 & _0x35e5bc) | 0x0;
        };
        _0x33b705.prototype.bool = function () {
          return 0x0 !== this.uint32();
        };
        _0x33b705.prototype.fixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0x33b705.prototype.sfixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return 0x0 | (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0x33b705.prototype.float = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x434ea6 = _0x5b171a.float.readFloatLE(this.buf, this.pos);
          this.pos += 0x4;
          return _0x434ea6;
        };
        _0x33b705.prototype.double = function () {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x4e4bf2 = _0x5b171a.float.readDoubleLE(this.buf, this.pos);
          this.pos += 0x8;
          return _0x4e4bf2;
        };
        _0x33b705.prototype.bytes = function () {
          var _0x448ef2 = this.uint32();
          var _0x8f9b8e = this.pos;
          var _0x21801c = this.pos + _0x448ef2;
          if (_0x21801c > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (_0x448ef2 || 0x1) + " > " + this.len);
          }
          this.pos += _0x448ef2;
          return Array.isArray(this.buf) ? this.buf.slice(_0x8f9b8e, _0x21801c) : _0x8f9b8e === _0x21801c ? new this.buf.constructor(0x0) : this._slice.call(this.buf, _0x8f9b8e, _0x21801c);
        };
        _0x33b705.prototype.string = function () {
          var _0xcf826a = this.bytes();
          return _0x18a2fc.read(_0xcf826a, 0x0, _0xcf826a.length);
        };
        _0x33b705.prototype.skip = function (_0x1dc53d) {
          if ("number" == typeof _0x1dc53d) {
            if (this.pos + _0x1dc53d > this.len) {
              throw RangeError("index out of range: " + this.pos + " + " + (_0x1dc53d || 0x1) + " > " + this.len);
            }
            this.pos += _0x1dc53d;
          } else {
            do {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
            } while (0x80 & this.buf[this.pos++]);
          }
          return this;
        };
        _0x33b705.prototype.skipType = function (_0x1fdfeb) {
          switch (_0x1fdfeb) {
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
              for (; 0x4 != (_0x1fdfeb = 0x7 & this.uint32());) {
                this.skipType(_0x1fdfeb);
              }
              break;
            case 0x5:
              this.skip(0x4);
              break;
            default:
              throw Error("invalid wire type " + _0x1fdfeb + " at offset " + this.pos);
          }
          return this;
        };
        _0x33b705._configure = function (_0x2eba55) {
          _0x15e7e9 = _0x2eba55;
          _0x33b705.create = _0x46b665();
          _0x15e7e9._configure();
          var _0x1ff89b = _0x5b171a.Long ? 'toLong' : "toNumber";
          _0x5b171a.merge(_0x33b705.prototype, {
            'int64': function () {
              return _0x250d37.call(this)[_0x1ff89b](false);
            },
            'uint64': function () {
              return _0x250d37.call(this)[_0x1ff89b](true);
            },
            'sint64': function () {
              return _0x250d37.call(this).zzDecode()[_0x1ff89b](false);
            },
            'fixed64': function () {
              return _0x40a5ac.call(this)[_0x1ff89b](true);
            },
            'sfixed64': function () {
              return _0x40a5ac.call(this)[_0x1ff89b](false);
            }
          });
        };
        _0x985899.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js", function (_0x5081c4, _0x57044e, _0x380594, _0x5d9fb5, _0xc1a489) {
        _0x380594.exports = _0x3a92c8;
        var _0x274939 = _0x57044e("./reader");
        (_0x3a92c8.prototype = Object.create(_0x274939.prototype)).constructor = _0x3a92c8;
        var _0x327c10 = _0x57044e('./util/minimal');
        function _0x3a92c8(_0x338a0c) {
          _0x274939.call(this, _0x338a0c);
        }
        _0x3a92c8._configure = function () {
          if (_0x327c10.Buffer) {
            _0x3a92c8.prototype._slice = _0x327c10.Buffer.prototype.slice;
          }
        };
        _0x3a92c8.prototype.string = function () {
          var _0x1c2e1b = this.uint32();
          return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + _0x1c2e1b, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + _0x1c2e1b, this.len));
        };
        _0x3a92c8._configure();
        _0x380594.exports;
      }, function () {
        return {
          './reader': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js", function (_0x26a6bb, _0x5be73b, _0x414b27, _0x535d31, _0x1acaad) {
        _0x414b27.exports = _0x25a361;
        var _0x238ffd = _0x5be73b("../util/minimal");
        function _0x25a361(_0x5bc405, _0x483c8c, _0x5a7509) {
          if ("function" != typeof _0x5bc405) {
            throw TypeError("rpcImpl must be a function");
          }
          _0x238ffd.EventEmitter.call(this);
          this.rpcImpl = _0x5bc405;
          this.requestDelimited = Boolean(_0x483c8c);
          this.responseDelimited = Boolean(_0x5a7509);
        }
        (_0x25a361.prototype = Object.create(_0x238ffd.EventEmitter.prototype)).constructor = _0x25a361;
        _0x25a361.prototype.rpcCall = function _0x32736c(_0x40ca3d, _0x4e366f, _0x388ab5, _0x56e9d1, _0x32f238) {
          if (!_0x56e9d1) {
            throw TypeError("request must be specified");
          }
          var _0x2a410c = this;
          if (!_0x32f238) {
            return _0x238ffd.asPromise(_0x32736c, _0x2a410c, _0x40ca3d, _0x4e366f, _0x388ab5, _0x56e9d1);
          }
          if (_0x2a410c.rpcImpl) {
            try {
              return _0x2a410c.rpcImpl(_0x40ca3d, _0x4e366f[_0x2a410c.requestDelimited ? "encodeDelimited" : "encode"](_0x56e9d1).finish(), function (_0x2c3713, _0x47b4fa) {
                if (_0x2c3713) {
                  _0x2a410c.emit("error", _0x2c3713, _0x40ca3d);
                  return _0x32f238(_0x2c3713);
                }
                if (null !== _0x47b4fa) {
                  if (!(_0x47b4fa instanceof _0x388ab5)) {
                    try {
                      _0x47b4fa = _0x388ab5[_0x2a410c.responseDelimited ? "decodeDelimited" : "decode"](_0x47b4fa);
                    } catch (_0x380932) {
                      _0x2a410c.emit("error", _0x380932, _0x40ca3d);
                      return _0x32f238(_0x380932);
                    }
                  }
                  _0x2a410c.emit("data", _0x47b4fa, _0x40ca3d);
                  return _0x32f238(null, _0x47b4fa);
                }
                _0x2a410c.end(true);
              });
            } catch (_0x35f274) {
              _0x2a410c.emit("error", _0x35f274, _0x40ca3d);
              return void setTimeout(function () {
                _0x32f238(_0x35f274);
              }, 0x0);
            }
          } else {
            setTimeout(function () {
              _0x32f238(Error("already ended"));
            }, 0x0);
          }
        };
        _0x25a361.prototype.end = function (_0x4fcd05) {
          if (this.rpcImpl) {
            if (!_0x4fcd05) {
              this.rpcImpl(null, null, null);
            }
            this.rpcImpl = null;
            this.emit("end").off();
          }
          return this;
        };
        _0x414b27.exports;
      }, function () {
        return {
          '../util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js", function (_0xc70ecf, _0x386eac, _0x56ff5d, _0x1e5c37, _0x535339) {
        _0xc70ecf.Service = _0x386eac("./rpc/service");
        _0x56ff5d.exports;
      }, function () {
        return {
          './rpc/service': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js"
        };
      });
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/roots.js", function (_0x190803, _0x3f9082, _0x2f8e25, _0x36e234, _0x186cbd) {
        _0x2f8e25.exports = {};
        _0x2f8e25.exports;
      }, {});
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js", function (_0x252bf2, _0x34ba77, _0x46ff10, _0x5542f1, _0x16e8c9) {
        function _0x4d1e8c() {
          _0x252bf2.util._configure();
          _0x252bf2.Writer._configure(_0x252bf2.BufferWriter);
          _0x252bf2.Reader._configure(_0x252bf2.BufferReader);
        }
        _0x252bf2.build = "minimal";
        _0x252bf2.Writer = _0x34ba77("./writer");
        _0x252bf2.BufferWriter = _0x34ba77("./writer_buffer");
        _0x252bf2.Reader = _0x34ba77('./reader');
        _0x252bf2.BufferReader = _0x34ba77("./reader_buffer");
        _0x252bf2.util = _0x34ba77('./util/minimal');
        _0x252bf2.rpc = _0x34ba77("./rpc");
        _0x252bf2.roots = _0x34ba77("./roots");
        _0x252bf2.configure = _0x4d1e8c;
        _0x4d1e8c();
        _0x46ff10.exports;
      }, function () {
        return {
          './writer': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './writer_buffer': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js',
          './reader': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './reader_buffer': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js",
          './util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          './rpc': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js",
          './roots': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/roots.js"
        };
      });
      var _0x14a887;
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/minimal.js", function (_0x375391, _0x4bc00, _0x1aacfc, _0x38c1d9, _0x5751ae) {
        _0x1aacfc.exports = _0x4bc00("./src/index-minimal");
        _0x1aacfc.exports;
      }, function () {
        return {
          './src/index-minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js"
        };
      });
      var _0x1b93d1;
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/assets/Script/Proto/ljProto.js", function (_0x2f62ab, _0xd3c734, _0x146a47, _0x5bdd9b, _0x36da6a) {
        var _0x2a8721;
        var _0xed6c7 = _0xd3c734("protobufjs/minimal");
        var _0x5ba9ab = _0xed6c7.Reader;
        var _0x7d5330 = _0xed6c7.Writer;
        var _0x28521f = _0xed6c7.util;
        var _0x5af3f5 = _0xed6c7.roots["default"] || (_0xed6c7.roots["default"] = {});
        (_0x2a8721 = {
          "Single": function () {
            function _0x55158b(_0x5ca493) {
              this.Col = [];
              if (_0x5ca493) {
                var _0x5eeeab = Object.keys(_0x5ca493);
                for (var _0x35bbfb = 0x0; _0x35bbfb < _0x5eeeab.length; ++_0x35bbfb) {
                  if (null != _0x5ca493[_0x5eeeab[_0x35bbfb]]) {
                    this[_0x5eeeab[_0x35bbfb]] = _0x5ca493[_0x5eeeab[_0x35bbfb]];
                  }
                }
              }
            }
            _0x55158b.prototype.Col = _0x28521f.emptyArray;
            _0x55158b.encode = function (_0x4905cf, _0x42b7a6) {
              if (!_0x42b7a6) {
                _0x42b7a6 = _0x7d5330.create();
              }
              if (null != _0x4905cf.Col && _0x4905cf.Col.length) {
                for (var _0x1016a5 = 0x0; _0x1016a5 < _0x4905cf.Col.length; ++_0x1016a5) {
                  _0x5af3f5.ljProto.Column.encode(_0x4905cf.Col[_0x1016a5], _0x42b7a6.uint32(0xa).fork()).ldelim();
                }
              }
              return _0x42b7a6;
            };
            _0x55158b.decode = function (_0x5e2184, _0x323103) {
              if (!(_0x5e2184 instanceof _0x5ba9ab)) {
                _0x5e2184 = _0x5ba9ab.create(_0x5e2184);
              }
              var _0x288d80 = undefined === _0x323103 ? _0x5e2184.len : _0x5e2184.pos + _0x323103;
              for (var _0x21d36d = new _0x5af3f5.ljProto.Single(); _0x5e2184.pos < _0x288d80;) {
                var _0x228d7d = _0x5e2184.uint32();
                switch (_0x228d7d >>> 0x3) {
                  case 0x1:
                    if (!(_0x21d36d.Col && _0x21d36d.Col.length)) {
                      _0x21d36d.Col = [];
                    }
                    _0x21d36d.Col.push(_0x5af3f5.ljProto.Column.decode(_0x5e2184, _0x5e2184.uint32()));
                    break;
                  default:
                    _0x5e2184.skipType(0x7 & _0x228d7d);
                }
              }
              return _0x21d36d;
            };
            _0x55158b.getTypeUrl = function (_0x3533be) {
              if (undefined === _0x3533be) {
                _0x3533be = 'type.googleapis.com';
              }
              return _0x3533be + "/ljProto.Single";
            };
            return _0x55158b;
          }(),
          AwardData: function () {
            function _0x1f999f(_0x16c8ed) {
              if (_0x16c8ed) {
                var _0x18febb = Object.keys(_0x16c8ed);
                for (var _0x465be2 = 0x0; _0x465be2 < _0x18febb.length; ++_0x465be2) {
                  if (null != _0x16c8ed[_0x18febb[_0x465be2]]) {
                    this[_0x18febb[_0x465be2]] = _0x16c8ed[_0x18febb[_0x465be2]];
                  }
                }
              }
            }
            _0x1f999f.prototype.Symbol = 0x0;
            _0x1f999f.prototype.Line = 0x0;
            _0x1f999f.prototype.Win = 0x0;
            _0x1f999f.encode = function (_0x4ab3c7, _0x50661f) {
              if (!_0x50661f) {
                _0x50661f = _0x7d5330.create();
              }
              if (null != _0x4ab3c7.Symbol && Object.hasOwnProperty.call(_0x4ab3c7, "Symbol")) {
                _0x50661f.uint32(0x8).int32(_0x4ab3c7.Symbol);
              }
              if (null != _0x4ab3c7.Line && Object.hasOwnProperty.call(_0x4ab3c7, "Line")) {
                _0x50661f.uint32(0x10).int32(_0x4ab3c7.Line);
              }
              if (null != _0x4ab3c7.Win && Object.hasOwnProperty.call(_0x4ab3c7, "Win")) {
                _0x50661f.uint32(0x19).double(_0x4ab3c7.Win);
              }
              return _0x50661f;
            };
            _0x1f999f.decode = function (_0x4337c7, _0x341727) {
              if (!(_0x4337c7 instanceof _0x5ba9ab)) {
                _0x4337c7 = _0x5ba9ab.create(_0x4337c7);
              }
              var _0x2a02e4 = undefined === _0x341727 ? _0x4337c7.len : _0x4337c7.pos + _0x341727;
              for (var _0x1915aa = new _0x5af3f5.ljProto.AwardData(); _0x4337c7.pos < _0x2a02e4;) {
                var _0x32d569 = _0x4337c7.uint32();
                switch (_0x32d569 >>> 0x3) {
                  case 0x1:
                    _0x1915aa.Symbol = _0x4337c7.int32();
                    break;
                  case 0x2:
                    _0x1915aa.Line = _0x4337c7.int32();
                    break;
                  case 0x3:
                    _0x1915aa.Win = _0x4337c7.double();
                    break;
                  default:
                    _0x4337c7.skipType(0x7 & _0x32d569);
                }
              }
              return _0x1915aa;
            };
            _0x1f999f.getTypeUrl = function (_0x212952) {
              if (undefined === _0x212952) {
                _0x212952 = "type.googleapis.com";
              }
              return _0x212952 + "/ljProto.AwardData";
            };
            return _0x1f999f;
          }(),
          "SpinAck": function () {
            function _0x50f568(_0x4570a5) {
              this.PlateSymbol = [];
              this.AwardDataVec = [];
              this.WildOdd = [];
              if (_0x4570a5) {
                var _0x30bd0e = Object.keys(_0x4570a5);
                for (var _0x1da9ac = 0x0; _0x1da9ac < _0x30bd0e.length; ++_0x1da9ac) {
                  if (null != _0x4570a5[_0x30bd0e[_0x1da9ac]]) {
                    this[_0x30bd0e[_0x1da9ac]] = _0x4570a5[_0x30bd0e[_0x1da9ac]];
                  }
                }
              }
            }
            _0x50f568.prototype.PlateSymbol = _0x28521f.emptyArray;
            _0x50f568.prototype.AwardDataVec = _0x28521f.emptyArray;
            _0x50f568.prototype.WildOdd = _0x28521f.emptyArray;
            _0x50f568.prototype.WildWin = 0x0;
            _0x50f568.prototype.Mult = 0x0;
            _0x50f568.prototype.GetBonus = 0x0;
            _0x50f568.prototype.BonusSymbol = 0x0;
            _0x50f568.prototype.Extra = false;
            _0x50f568.prototype.AwardTypeFlag = 0x0;
            _0x50f568.prototype.TotalWin = 0x0;
            _0x50f568.prototype.RTP = 0x0;
            _0x50f568.prototype.LID = 0x0;
            _0x50f568.prototype.RID = 0x0;
            _0x50f568.encode = function (_0x1cfa09, _0x43588a) {
              if (!_0x43588a) {
                _0x43588a = _0x7d5330.create();
              }
              if (null != _0x1cfa09.PlateSymbol && _0x1cfa09.PlateSymbol.length) {
                for (var _0x4994cc = 0x0; _0x4994cc < _0x1cfa09.PlateSymbol.length; ++_0x4994cc) {
                  _0x5af3f5.ljProto.Single.encode(_0x1cfa09.PlateSymbol[_0x4994cc], _0x43588a.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0x1cfa09.AwardDataVec && _0x1cfa09.AwardDataVec.length) {
                for (_0x4994cc = 0x0; _0x4994cc < _0x1cfa09.AwardDataVec.length; ++_0x4994cc) {
                  _0x5af3f5.ljProto.AwardData.encode(_0x1cfa09.AwardDataVec[_0x4994cc], _0x43588a.uint32(0x12).fork()).ldelim();
                }
              }
              if (null != _0x1cfa09.WildOdd && _0x1cfa09.WildOdd.length) {
                _0x43588a.uint32(0x1a).fork();
                for (_0x4994cc = 0x0; _0x4994cc < _0x1cfa09.WildOdd.length; ++_0x4994cc) {
                  _0x43588a.double(_0x1cfa09.WildOdd[_0x4994cc]);
                }
                _0x43588a.ldelim();
              }
              if (null != _0x1cfa09.WildWin && Object.hasOwnProperty.call(_0x1cfa09, "WildWin")) {
                _0x43588a.uint32(0x21).double(_0x1cfa09.WildWin);
              }
              if (null != _0x1cfa09.Mult && Object.hasOwnProperty.call(_0x1cfa09, "Mult")) {
                _0x43588a.uint32(0x29).double(_0x1cfa09.Mult);
              }
              if (null != _0x1cfa09.GetBonus && Object.hasOwnProperty.call(_0x1cfa09, "GetBonus")) {
                _0x43588a.uint32(0x30).int32(_0x1cfa09.GetBonus);
              }
              if (null != _0x1cfa09.BonusSymbol && Object.hasOwnProperty.call(_0x1cfa09, "BonusSymbol")) {
                _0x43588a.uint32(0x38).int32(_0x1cfa09.BonusSymbol);
              }
              if (null != _0x1cfa09.Extra && Object.hasOwnProperty.call(_0x1cfa09, "Extra")) {
                _0x43588a.uint32(0x40).bool(_0x1cfa09.Extra);
              }
              if (null != _0x1cfa09.AwardTypeFlag && Object.hasOwnProperty.call(_0x1cfa09, "AwardTypeFlag")) {
                _0x43588a.uint32(0x48).int32(_0x1cfa09.AwardTypeFlag);
              }
              if (null != _0x1cfa09.TotalWin && Object.hasOwnProperty.call(_0x1cfa09, 'TotalWin')) {
                _0x43588a.uint32(0x51).double(_0x1cfa09.TotalWin);
              }
              if (null != _0x1cfa09.RTP && Object.hasOwnProperty.call(_0x1cfa09, "RTP")) {
                _0x43588a.uint32(0x59).double(_0x1cfa09.RTP);
              }
              if (null != _0x1cfa09.LID && Object.hasOwnProperty.call(_0x1cfa09, "LID")) {
                _0x43588a.uint32(0x60).int32(_0x1cfa09.LID);
              }
              if (null != _0x1cfa09.RID && Object.hasOwnProperty.call(_0x1cfa09, "RID")) {
                _0x43588a.uint32(0x68).int32(_0x1cfa09.RID);
              }
              return _0x43588a;
            };
            _0x50f568.decode = function (_0x279ca1, _0x3b2ab5) {
              if (!(_0x279ca1 instanceof _0x5ba9ab)) {
                _0x279ca1 = _0x5ba9ab.create(_0x279ca1);
              }
              var _0x3e9216 = undefined === _0x3b2ab5 ? _0x279ca1.len : _0x279ca1.pos + _0x3b2ab5;
              for (var _0x2780a8 = new _0x5af3f5.ljProto.SpinAck(); _0x279ca1.pos < _0x3e9216;) {
                var _0x15d5b1 = _0x279ca1.uint32();
                switch (_0x15d5b1 >>> 0x3) {
                  case 0x1:
                    if (!(_0x2780a8.PlateSymbol && _0x2780a8.PlateSymbol.length)) {
                      _0x2780a8.PlateSymbol = [];
                    }
                    _0x2780a8.PlateSymbol.push(_0x5af3f5.ljProto.Single.decode(_0x279ca1, _0x279ca1.uint32()));
                    break;
                  case 0x2:
                    if (!(_0x2780a8.AwardDataVec && _0x2780a8.AwardDataVec.length)) {
                      _0x2780a8.AwardDataVec = [];
                    }
                    _0x2780a8.AwardDataVec.push(_0x5af3f5.ljProto.AwardData.decode(_0x279ca1, _0x279ca1.uint32()));
                    break;
                  case 0x3:
                    if (!(_0x2780a8.WildOdd && _0x2780a8.WildOdd.length)) {
                      _0x2780a8.WildOdd = [];
                    }
                    if (0x2 == (0x7 & _0x15d5b1)) {
                      for (var _0xc96b8d = _0x279ca1.uint32() + _0x279ca1.pos; _0x279ca1.pos < _0xc96b8d;) {
                        _0x2780a8.WildOdd.push(_0x279ca1.double());
                      }
                    } else {
                      _0x2780a8.WildOdd.push(_0x279ca1.double());
                    }
                    break;
                  case 0x4:
                    _0x2780a8.WildWin = _0x279ca1.double();
                    break;
                  case 0x5:
                    _0x2780a8.Mult = _0x279ca1.double();
                    break;
                  case 0x6:
                    _0x2780a8.GetBonus = _0x279ca1.int32();
                    break;
                  case 0x7:
                    _0x2780a8.BonusSymbol = _0x279ca1.int32();
                    break;
                  case 0x8:
                    _0x2780a8.Extra = _0x279ca1.bool();
                    break;
                  case 0x9:
                    _0x2780a8.AwardTypeFlag = _0x279ca1.int32();
                    break;
                  case 0xa:
                    _0x2780a8.TotalWin = _0x279ca1.double();
                    break;
                  case 0xb:
                    _0x2780a8.RTP = _0x279ca1.double();
                    break;
                  case 0xc:
                    _0x2780a8.LID = _0x279ca1.int32();
                    break;
                  case 0xd:
                    _0x2780a8.RID = _0x279ca1.int32();
                    break;
                  default:
                    _0x279ca1.skipType(0x7 & _0x15d5b1);
                }
              }
              return _0x2780a8;
            };
            _0x50f568.getTypeUrl = function (_0xafe801) {
              if (undefined === _0xafe801) {
                _0xafe801 = 'type.googleapis.com';
              }
              return _0xafe801 + '/ljProto.SpinAck';
            };
            return _0x50f568;
          }(),
          "GemInfo": function () {
            function _0x56cb24(_0xa6efac) {
              if (_0xa6efac) {
                var _0xa33e09 = Object.keys(_0xa6efac);
                for (var _0x455a5c = 0x0; _0x455a5c < _0xa33e09.length; ++_0x455a5c) {
                  if (null != _0xa6efac[_0xa33e09[_0x455a5c]]) {
                    this[_0xa33e09[_0x455a5c]] = _0xa6efac[_0xa33e09[_0x455a5c]];
                  }
                }
              }
            }
            _0x56cb24.prototype.data = 0x0;
            _0x56cb24.encode = function (_0x3ce043, _0x265fc5) {
              if (!_0x265fc5) {
                _0x265fc5 = _0x7d5330.create();
              }
              if (null != _0x3ce043.data && Object.hasOwnProperty.call(_0x3ce043, "data")) {
                _0x265fc5.uint32(0x8).int32(_0x3ce043.data);
              }
              return _0x265fc5;
            };
            _0x56cb24.decode = function (_0x127ef9, _0x35eca7) {
              if (!(_0x127ef9 instanceof _0x5ba9ab)) {
                _0x127ef9 = _0x5ba9ab.create(_0x127ef9);
              }
              var _0x3e79de = undefined === _0x35eca7 ? _0x127ef9.len : _0x127ef9.pos + _0x35eca7;
              for (var _0x489f5e = new _0x5af3f5.ljProto.GemInfo(); _0x127ef9.pos < _0x3e79de;) {
                var _0x316e37 = _0x127ef9.uint32();
                switch (_0x316e37 >>> 0x3) {
                  case 0x1:
                    _0x489f5e.data = _0x127ef9.int32();
                    break;
                  default:
                    _0x127ef9.skipType(0x7 & _0x316e37);
                }
              }
              return _0x489f5e;
            };
            _0x56cb24.getTypeUrl = function (_0x46011b) {
              if (undefined === _0x46011b) {
                _0x46011b = "type.googleapis.com";
              }
              return _0x46011b + '/ljProto.GemInfo';
            };
            return _0x56cb24;
          }()
        }).Column = function () {
          function _0x49990c(_0x3b47bd) {
            this.Row = [];
            if (_0x3b47bd) {
              var _0x2ab6a6 = Object.keys(_0x3b47bd);
              for (var _0x5d1f2c = 0x0; _0x5d1f2c < _0x2ab6a6.length; ++_0x5d1f2c) {
                if (null != _0x3b47bd[_0x2ab6a6[_0x5d1f2c]]) {
                  this[_0x2ab6a6[_0x5d1f2c]] = _0x3b47bd[_0x2ab6a6[_0x5d1f2c]];
                }
              }
            }
          }
          _0x49990c.prototype.Row = _0x28521f.emptyArray;
          _0x49990c.encode = function (_0x15c0bb, _0xb922a3) {
            if (!_0xb922a3) {
              _0xb922a3 = _0x7d5330.create();
            }
            if (null != _0x15c0bb.Row && _0x15c0bb.Row.length) {
              _0xb922a3.uint32(0xa).fork();
              for (var _0x24a13c = 0x0; _0x24a13c < _0x15c0bb.Row.length; ++_0x24a13c) {
                _0xb922a3.int32(_0x15c0bb.Row[_0x24a13c]);
              }
              _0xb922a3.ldelim();
            }
            return _0xb922a3;
          };
          _0x49990c.decode = function (_0x1bdba9, _0x1f1319) {
            if (!(_0x1bdba9 instanceof _0x5ba9ab)) {
              _0x1bdba9 = _0x5ba9ab.create(_0x1bdba9);
            }
            var _0x37e657 = undefined === _0x1f1319 ? _0x1bdba9.len : _0x1bdba9.pos + _0x1f1319;
            for (var _0x4c67c3 = new _0x5af3f5.ljProto.Column(); _0x1bdba9.pos < _0x37e657;) {
              var _0x4665dd = _0x1bdba9.uint32();
              switch (_0x4665dd >>> 0x3) {
                case 0x1:
                  if (!(_0x4c67c3.Row && _0x4c67c3.Row.length)) {
                    _0x4c67c3.Row = [];
                  }
                  if (0x2 == (0x7 & _0x4665dd)) {
                    for (var _0x1999ea = _0x1bdba9.uint32() + _0x1bdba9.pos; _0x1bdba9.pos < _0x1999ea;) {
                      _0x4c67c3.Row.push(_0x1bdba9.int32());
                    }
                  } else {
                    _0x4c67c3.Row.push(_0x1bdba9.int32());
                  }
                  break;
                default:
                  _0x1bdba9.skipType(0x7 & _0x4665dd);
              }
            }
            return _0x4c67c3;
          };
          _0x49990c.getTypeUrl = function (_0xcefccb) {
            if (undefined === _0xcefccb) {
              _0xcefccb = 'type.googleapis.com';
            }
            return _0xcefccb + "/ljProto.Column";
          };
          return _0x49990c;
        }();
        _0x5af3f5.ljProto = _0x2a8721;
        _0x146a47.exports = _0x5af3f5;
        _0x14a887 = _0x146a47.exports;
      }, function () {
        return {
          'protobufjs/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/minimal.js"
        };
      });
      _0x50443a.require("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/assets/Script/Proto/ljProto.js");
      _0x361286._RF.push({}, "72b80flvGlInod+ezwwedYk", 'NodeFadeTool', undefined);
      var _0x305eb1 = _0x55c899.ccclass;
      _0x1b93d1 = _0x305eb1("NodeFadeTool");
      var _0x106b04;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "2ea1ewSKOFIXbPwStLbC2a8", "IntroSpine", undefined);
      var _0x163dfc = _0x55c899.ccclass;
      _0x106b04 = _0x163dfc("IntroSpine");
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "e5f07zX3Z9JkaP8eawwDW9K", "WaitReadyState", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "47eb7Mz2TNCHIrYnIYPV3ET", "WaitResState", undefined);
      var _0x26f334;
      var _0x166240;
      var _0x38581d;
      var _0x105bf7;
      var _0x1649a4;
      var _0x1c28f8;
      var _0x485a94;
      var _0x1f95a2;
      var _0x4e3fd3;
      var _0x1d1b36;
      var _0x1fdea5;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "77acaFcNgVDULwRQEtO5wYa", "BigWinComponent", undefined);
      var _0x41433d = {
        'Big': {
          'Start': "BigWin_Start",
          'End': 'BigWin_End'
        },
        'Mega': {
          'Start': "MegaWin_Start",
          'End': 'MegaWin_End'
        },
        'Super': {
          'Start': "SuperWin_Start",
          'End': 'SuperWin_End'
        }
      };
      var _0x1f9c97 = _0x55c899.property;
      _0x26f334 = _0x1f9c97({
        'type': _0x4a7cfd.Skeleton,
        'tooltip': 'spine'
      });
      _0x166240 = _0x1f9c97({
        'type': _0x4a7cfd.Skeleton,
        'tooltip': '遮罩'
      });
      _0x38581d = _0x1f9c97({
        'type': _0x4a7cfd.Skeleton,
        'tooltip': "Extra Spine"
      });
      _0x105bf7 = _0x1f9c97({
        'type': _0x3fe2b7,
        'tooltip': '贏分'
      });
      _0x1649a4 = _0x1f9c97({
        'type': _0x4971f0,
        'tooltip': "End extra effect delay time"
      });
      _0x1fdea5 = function (_0x85fc0f) {
        function _0x4fa118() {
          var _0x2dcfd0;
          var _0x3ab1a7 = arguments.length;
          var _0x343bd0 = new Array(_0x3ab1a7);
          for (var _0x51b0ad = 0x0; _0x51b0ad < _0x3ab1a7; _0x51b0ad++) {
            _0x343bd0[_0x51b0ad] = arguments[_0x51b0ad];
          }
          _0x7af141(_0x2dcfd0 = _0x85fc0f.call.apply(_0x85fc0f, [this].concat(_0x343bd0)) || this, "m_spine", _0x1c28f8, _0x4c7417(_0x2dcfd0));
          _0x7af141(_0x2dcfd0, "m_maskSpine", _0x485a94, _0x4c7417(_0x2dcfd0));
          _0x7af141(_0x2dcfd0, "m_extraSpine", _0x1f95a2, _0x4c7417(_0x2dcfd0));
          _0x7af141(_0x2dcfd0, "m_winLabel", _0x4e3fd3, _0x4c7417(_0x2dcfd0));
          _0x7af141(_0x2dcfd0, "m_endExtraDelayTime", _0x1d1b36, _0x4c7417(_0x2dcfd0));
          _0x2dcfd0.m_isEnd = true;
          _0x2dcfd0.m_isShowEnd = true;
          _0x2dcfd0.m_isShowAward = false;
          _0x2dcfd0.m_eventCb = null;
          _0x2dcfd0.m_showValueCb = null;
          _0x2dcfd0.m_cancelCb = null;
          _0x2dcfd0.m_lvl = 0x0;
          _0x2dcfd0.m_nowLvl = 0x0;
          _0x2dcfd0.m_win = 0x0;
          _0x2dcfd0.m_showWin = 0x0;
          _0x2dcfd0.m_step = 0x0;
          _0x2dcfd0.m_isShowingExtraEnd = false;
          return _0x2dcfd0;
        }
        _0x5b6a43(_0x4fa118, _0x85fc0f);
        var _0x35c080 = _0x4fa118.prototype;
        _0x35c080.update = function (_0x5254d4) {
          if (this.m_isShowAward) {
            this.m_showWin += this.m_step * _0x5254d4;
            if (this.m_showWin >= this.m_win) {
              this.m_showWin = this.m_win;
              this.m_isShowAward = false;
            }
            this.m_winLabel.string = _0x4bcdb4.FormatNumberThousands(_0x4bcdb4.strip(this.m_showValueCb ? this.m_showValueCb(this.m_showWin) : this.m_showWin), _0x4bcdb4.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          }
        };
        _0x35c080.Init = function (_0x2d4477, _0x28e833) {
          this.m_eventCb = _0x2d4477;
          this.m_showValueCb = _0x28e833;
          if (this.m_maskSpine) {
            this.m_maskSpine.node.active = false;
          }
        };
        _0x35c080.Show = function (_0x2dfefb, _0x35e600, _0x44ee95) {
          if (undefined === _0x44ee95) {
            _0x44ee95 = true;
          }
          if (_0x2dfefb > 0x0 && _0x35e600 > _0x4fa118.Level.NONE && _0x35e600 <= _0x4fa118.Level.SUPER) {
            this.m_isEnd = false;
            this.m_lvl = _0x35e600;
            this.m_nowLvl = _0x44ee95 ? 0x0 : _0x35e600 - 0x1;
            this.m_win = _0x2dfefb;
            this.m_showWin = 0x0;
            this.m_winLabel.string = '0';
            this.m_isShowEnd = false;
            var _0x38ebbb = 0x0;
            for (var _0x584674 = _0x44ee95 ? _0x4fa118.Level.BIG : this.m_lvl; _0x584674 <= this.m_lvl; _0x584674++) {
              var _0xa4e408 = '';
              var _0xe409fa = '';
              switch (_0x584674) {
                case _0x4fa118.Level.BIG:
                  _0xa4e408 = _0x41433d.Big.Start;
                  _0xe409fa = _0x41433d.Big.End;
                  break;
                case _0x4fa118.Level.MEGA:
                  _0xa4e408 = _0x41433d.Mega.Start;
                  _0xe409fa = _0x41433d.Mega.End;
                  break;
                case _0x4fa118.Level.SUPER:
                  _0xa4e408 = _0x41433d.Super.Start;
                  _0xe409fa = _0x41433d.Super.End;
              }
              if ('' !== _0xa4e408 && '' !== _0xe409fa) {
                var _0xd015c = this.m_spine.findAnimation(_0xa4e408);
                if (_0xd015c) {
                  _0x38ebbb += _0xd015c.duration;
                }
              }
            }
            this.m_step = _0x4bcdb4.divide(this.m_win, _0x38ebbb || 0x5);
            this.m_isShowAward = true;
            if (this.m_maskSpine) {
              this.m_maskSpine.node.active = true;
              this.PlayAnimation(this.m_maskSpine, "BigWin_Start");
            }
            this.ShowNext();
          }
        };
        _0x35c080.Stop = function () {
          if (!this.m_isShowEnd) {
            if (this.m_cancelCb) {
              this.m_cancelCb();
            }
            this.ShowEnd();
          }
        };
        _0x35c080.SetSkin = function (_0x5f4c4e) {
          this.m_spine.setSkin(_0x5f4c4e);
        };
        _0x35c080.ShowNext = function () {
          var _0x575d20 = _0x2b8ecf(_0x17c453().mark(function _0x290f89() {
            var _0x558c3d;
            return _0x17c453().wrap(function (_0x3b1347) {
              for (;;) {
                switch (_0x3b1347.prev = _0x3b1347.next) {
                  case 0x0:
                    if (this.m_nowLvl !== this.m_lvl) {
                      _0x3b1347.next = 0x4;
                      break;
                    }
                    this.ShowEnd();
                    _0x3b1347.next = 0x17;
                    break;
                  case 0x4:
                    this.m_nowLvl++;
                    _0x558c3d = false;
                    _0x3b1347.t0 = this.m_nowLvl;
                    _0x3b1347.next = _0x3b1347.t0 === _0x4fa118.Level.BIG ? 0x9 : _0x3b1347.t0 === _0x4fa118.Level.MEGA ? 0xe : _0x3b1347.t0 === _0x4fa118.Level.SUPER ? 0x12 : 0x16;
                    break;
                  case 0x9:
                    this.CheckExtraSpineStart();
                    _0x3b1347.next = 0xc;
                    return this.PlayAnimation(this.m_spine, _0x41433d.Big.Start);
                  case 0xc:
                    _0x558c3d = _0x3b1347.sent;
                    return _0x3b1347.abrupt("break", 0x16);
                  case 0xe:
                    _0x3b1347.next = 0x10;
                    return this.PlayAnimation(this.m_spine, _0x41433d.Mega.Start);
                  case 0x10:
                    _0x558c3d = _0x3b1347.sent;
                    return _0x3b1347.abrupt("break", 0x16);
                  case 0x12:
                    _0x3b1347.next = 0x14;
                    return this.PlayAnimation(this.m_spine, _0x41433d.Super.Start);
                  case 0x14:
                    _0x558c3d = _0x3b1347.sent;
                    return _0x3b1347.abrupt('break', 0x16);
                  case 0x16:
                    if (!_0x558c3d) {
                      this.ShowNext();
                    }
                  case 0x17:
                  case 'end':
                    return _0x3b1347.stop();
                }
              }
            }, _0x290f89, this);
          }));
          return function () {
            return _0x575d20.apply(this, arguments);
          };
        }();
        _0x35c080.ShowEnd = function () {
          var _0xe161ef = _0x2b8ecf(_0x17c453().mark(function _0x3870ea() {
            var _0x2a6e2b;
            return _0x17c453().wrap(function (_0x4cfc9e) {
              for (;;) {
                switch (_0x4cfc9e.prev = _0x4cfc9e.next) {
                  case 0x0:
                    if (!this.m_isShowEnd) {
                      _0x4cfc9e.next = 0x2;
                      break;
                    }
                    return _0x4cfc9e.abrupt('return');
                  case 0x2:
                    this.m_isShowEnd = true;
                    this.m_isShowAward = false;
                    this.m_winLabel.string = _0x4bcdb4.FormatNumberThousands(_0x4bcdb4.strip(this.m_showValueCb ? this.m_showValueCb(this.m_win) : this.m_win), _0x4bcdb4.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
                    if (this.m_maskSpine) {
                      this.PlayAnimation(this.m_maskSpine, 'BigWin_End');
                    }
                    _0x2a6e2b = '';
                    _0x4cfc9e.t0 = this.m_lvl;
                    _0x4cfc9e.next = _0x4cfc9e.t0 === _0x4fa118.Level.BIG ? 0xa : _0x4cfc9e.t0 === _0x4fa118.Level.MEGA ? 0xc : _0x4cfc9e.t0 === _0x4fa118.Level.SUPER ? 0xe : 0x10;
                    break;
                  case 0xa:
                    _0x2a6e2b = _0x41433d.Big.End;
                    return _0x4cfc9e.abrupt("break", 0x10);
                  case 0xc:
                    _0x2a6e2b = _0x41433d.Mega.End;
                    return _0x4cfc9e.abrupt('break', 0x10);
                  case 0xe:
                    _0x2a6e2b = _0x41433d.Super.End;
                    return _0x4cfc9e.abrupt("break", 0x10);
                  case 0x10:
                    if ('' === _0x2a6e2b) {
                      _0x4cfc9e.next = 0x15;
                      break;
                    }
                    _0x4cfc9e.next = 0x13;
                    return Promise.all([this.CheckExtraSpineEnd(), this.PlayAnimation(this.m_spine, _0x2a6e2b)]);
                  case 0x13:
                    _0x4cfc9e.next = 0x16;
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
                    return _0x4cfc9e.stop();
                }
              }
            }, _0x3870ea, this);
          }));
          return function () {
            return _0xe161ef.apply(this, arguments);
          };
        }();
        _0x35c080.CheckExtraSpineStart = function () {
          var _0x12ee72 = this;
          if (this.m_extraSpine) {
            this.m_extraSpine.node.active = true;
            this.PlayAnimation(this.m_extraSpine, 'Start').then(function () {
              if (!_0x12ee72.m_isShowingExtraEnd) {
                _0x12ee72.PlayAnimation(_0x12ee72.m_extraSpine, "Loop", true);
              }
            });
          }
        };
        _0x35c080.CheckExtraSpineEnd = function () {
          var _0x10c7a7 = _0x2b8ecf(_0x17c453().mark(function _0x578d11() {
            return _0x17c453().wrap(function (_0x4a9864) {
              for (;;) {
                switch (_0x4a9864.prev = _0x4a9864.next) {
                  case 0x0:
                    if (this.m_extraSpine) {
                      _0x4a9864.next = 0x2;
                      break;
                    }
                    return _0x4a9864.abrupt("return");
                  case 0x2:
                    this.m_isShowingExtraEnd = true;
                    _0x4a9864.next = 0x5;
                    return _0x20a3f2.Wait(this, this.m_endExtraDelayTime);
                  case 0x5:
                    _0x4a9864.next = 0x7;
                    return this.PlayAnimation(this.m_extraSpine, "End");
                  case 0x7:
                    this.m_isShowingExtraEnd = false;
                  case 0x8:
                  case "end":
                    return _0x4a9864.stop();
                }
              }
            }, _0x578d11, this);
          }));
          return function () {
            return _0x10c7a7.apply(this, arguments);
          };
        }();
        _0x35c080.PlayAnimation = function (_0x5dc34d, _0x2750c6, _0x1d22cd, _0x50ab85) {
          var _0x57d5c2 = this;
          if (undefined === _0x1d22cd) {
            _0x1d22cd = false;
          }
          if (undefined === _0x50ab85) {
            _0x50ab85 = 0x0;
          }
          return new Promise(function (_0x21ba65) {
            var _0x44e5c8 = false;
            _0x57d5c2.m_cancelCb = function () {
              _0x21ba65(_0x44e5c8 = true);
            };
            _0x5dc34d.clearTrack(_0x50ab85);
            _0x5dc34d.setToSetupPose();
            var _0x173d83 = _0x5dc34d.setAnimation(_0x50ab85, _0x2750c6, _0x1d22cd);
            var _0x419dde = function () {
              _0x57d5c2.m_cancelCb = null;
              _0x21ba65(_0x44e5c8);
            };
            if (_0x173d83) {
              _0x5dc34d.setTrackEventListener(_0x173d83, function (_0x532d1c, _0x175430) {
                var _0x376e8d = _0x175430.data.name;
                var _0x5d582b = _0x175430.stringValue;
                if (_0x57d5c2.m_eventCb) {
                  _0x57d5c2.m_eventCb(_0x376e8d, _0x5d582b, _0x2750c6);
                }
              });
              _0x5dc34d.setTrackCompleteListener(_0x173d83, function () {
                _0x5dc34d.setTrackCompleteListener(_0x173d83, function () {});
                _0x419dde();
              });
            } else {
              _0x5dc34d.setCompleteListener(function () {
                _0x5dc34d.setCompleteListener(null);
                _0x419dde();
              });
            }
          });
        };
        _0x9778ac(_0x4fa118, [{
          'key': "IsEnd",
          'get': function () {
            return this.m_isEnd;
          },
          'set': function (_0x58e470) {
            this.m_isEnd = _0x58e470;
          }
        }]);
        return _0x4fa118;
      }(_0xf24552);
      _0x1fdea5.Level = {
        'NONE': 0x0,
        'BIG': 0x1,
        'MEGA': 0x2,
        'SUPER': 0x3
      };
      _0x1c28f8 = _0x4bec9c(_0x1fdea5.prototype, "m_spine", [_0x26f334], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x485a94 = _0x4bec9c(_0x1fdea5.prototype, 'm_maskSpine', [_0x166240], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1f95a2 = _0x4bec9c(_0x1fdea5.prototype, "m_extraSpine", [_0x38581d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4e3fd3 = _0x4bec9c(_0x1fdea5.prototype, "m_winLabel", [_0x105bf7], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1d1b36 = _0x4bec9c(_0x1fdea5.prototype, "m_endExtraDelayTime", [_0x1649a4], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return 1.5;
        }
      });
      var _0x257ed8;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, '5cd11K4+Y1DBJ0WZfuiBSee', 'Common_IdleState', undefined);
      var _0x57cbf9 = _0x55c899.ccclass;
      _0x257ed8 = _0x57cbf9("Common_IdleState");
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "9099fuoIOdA/qc/GkvbZ7rH", "GroupNode", undefined);
      var _0x5cb659;
      var _0x167846;
      var _0x5ba2f5;
      var _0x5c53fd;
      !function (_0x1bed91) {
        _0x1bed91[_0x1bed91.WIDTH = 0x1] = "WIDTH";
        _0x1bed91[_0x1bed91.HEIGHT = 0x2] = "HEIGHT";
        _0x1bed91[_0x1bed91.BOTH = 0x3] = 'BOTH';
      }(_0x5cb659 || (_0x5cb659 = {}));
      (function (_0x506f35) {
        _0x506f35[_0x506f35.X = 0x1] = 'X';
        _0x506f35[_0x506f35.Y = 0x2] = 'Y';
        _0x506f35[_0x506f35.BOTH = 0x3] = 'BOTH';
      })(_0x167846 || (_0x167846 = {}));
      (function (_0x159cb4) {
        _0x159cb4[_0x159cb4.X = 0x1] = 'X';
        _0x159cb4[_0x159cb4.Y = 0x2] = 'Y';
        _0x159cb4[_0x159cb4.BOTH = 0x3] = "BOTH";
      })(_0x5ba2f5 || (_0x5ba2f5 = {}));
      (function (_0x4e3f9b) {
        _0x4e3f9b[_0x4e3f9b.R = 0x1] = 'R';
        _0x4e3f9b[_0x4e3f9b.G = 0x2] = 'G';
        _0x4e3f9b[_0x4e3f9b.B = 0x4] = 'B';
        _0x4e3f9b[_0x4e3f9b.RGB = 0x7] = 'RGB';
        _0x4e3f9b[_0x4e3f9b.A = 0x8] = 'A';
        _0x4e3f9b[_0x4e3f9b.RGBA = 0xf] = "RGBA";
      })(_0x5c53fd || (_0x5c53fd = {}));
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "1d950BFoN5LhJJ79uyt+/E+", "MarqueeComponent", undefined);
      var _0x2c06db;
      var _0x1b0e51;
      var _0x263af3;
      var _0x54928f;
      var _0x5c04fb;
      var _0x49ce5f;
      var _0x1a5d66;
      var _0x23ea4c;
      var _0x26fd8c;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "93417uqlh9Fm6TH2poz4GO4", "NearWinEffectComponent", undefined);
      var _0x45b815 = _0x55c899.ccclass;
      var _0x1ea1b1 = _0x55c899.property;
      _0x2c06db = _0x45b815("NearWinEffectComponent");
      _0x1b0e51 = _0x1ea1b1({
        'type': Number,
        'tooltip': "淡入時間"
      });
      _0x263af3 = _0x1ea1b1({
        'type': Number,
        'tooltip': "淡出時間"
      });
      _0x54928f = _0x1ea1b1({
        'type': _0xc68c66,
        'tooltip': "是否使用spine動畫"
      });
      _0x49ce5f = function (_0x5979ff) {
        function _0x5481cf() {
          var _0x3509b8;
          var _0x26331a = arguments.length;
          var _0x374d3c = new Array(_0x26331a);
          for (var _0x377f87 = 0x0; _0x377f87 < _0x26331a; _0x377f87++) {
            _0x374d3c[_0x377f87] = arguments[_0x377f87];
          }
          _0x7af141(_0x3509b8 = _0x5979ff.call.apply(_0x5979ff, [this].concat(_0x374d3c)) || this, "m_fadeInTime", _0x1a5d66, _0x4c7417(_0x3509b8));
          _0x7af141(_0x3509b8, "m_fadeOutTime", _0x23ea4c, _0x4c7417(_0x3509b8));
          _0x7af141(_0x3509b8, "m_isPlaySpine", _0x26fd8c, _0x4c7417(_0x3509b8));
          _0x3509b8.m_cancelCb = null;
          _0x3509b8.m_spine = null;
          return _0x3509b8;
        }
        _0x5b6a43(_0x5481cf, _0x5979ff);
        var _0x44f448 = _0x5481cf.prototype;
        _0x44f448.start = function () {
          if (!this.m_spine) {
            this.node.active = false;
          }
        };
        _0x44f448.FadeIn = function () {
          var _0x272ce2 = _0x2b8ecf(_0x17c453().mark(function _0x3714a5(_0x5d8462) {
            var _0x50412b;
            var _0x45353c = this;
            return _0x17c453().wrap(function (_0x9f7e6) {
              for (;;) {
                switch (_0x9f7e6.prev = _0x9f7e6.next) {
                  case 0x0:
                    this.CheckSpine();
                    this.node.active = true;
                    if (!this.m_isPlaySpine) {
                      _0x9f7e6.next = 0x9;
                      break;
                    }
                    _0x9f7e6.next = 0x5;
                    return _0x37f809.PlayAnimation(this.m_spine, 'FadeIn');
                  case 0x5:
                    if (!_0x9f7e6.sent) {
                      _0x37f809.PlayAnimation(this.m_spine, "NearWin", true);
                    }
                    _0x9f7e6.next = 0x10;
                    break;
                  case 0x9:
                    _0x4d5c69.stopAllByTarget(this.m_spine.color);
                    if (!(null == (_0x50412b = this.m_cancelCb))) {
                      _0x50412b.call(this);
                    }
                    this.node.active = true;
                    this.m_spine.color = new _0x5306f4(this.m_spine.color.r, this.m_spine.color.g, this.m_spine.color.b, 0x0);
                    if (!(null == _0x5d8462)) {
                      _0x5d8462();
                    }
                    _0x9f7e6.next = 0x10;
                    return new Promise(function (_0x5473df) {
                      _0x45353c.m_cancelCb = function () {
                        _0x5473df();
                      };
                      _0x5b954c(_0x45353c.m_spine.color).to(_0x45353c.m_fadeInTime, {
                        'a': 0xff
                      }).call(function () {
                        _0x5473df();
                        _0x45353c.m_cancelCb = null;
                      }).start();
                    });
                  case 0x10:
                  case "end":
                    return _0x9f7e6.stop();
                }
              }
            }, _0x3714a5, this);
          }));
          return function (_0xa8a1e4) {
            return _0x272ce2.apply(this, arguments);
          };
        }();
        _0x44f448.FadeOut = function () {
          var _0x3eb127 = _0x2b8ecf(_0x17c453().mark(function _0x44e9b2() {
            var _0x5a277e;
            var _0x267250;
            var _0x12998f = this;
            return _0x17c453().wrap(function (_0x3967a7) {
              for (;;) {
                switch (_0x3967a7.prev = _0x3967a7.next) {
                  case 0x0:
                    this.CheckSpine();
                    if (!this.m_isPlaySpine) {
                      _0x3967a7.next = 0xc;
                      break;
                    }
                    if (this.node.active) {
                      _0x3967a7.next = 0x4;
                      break;
                    }
                    return _0x3967a7.abrupt('return', true);
                  case 0x4:
                    this.CheckSpine();
                    _0x3967a7.next = 0x7;
                    return _0x37f809.PlayAnimation(this.m_spine, "FadeOut");
                  case 0x7:
                    if (!(_0x5a277e = _0x3967a7.sent)) {
                      this.node.active = false;
                    }
                    return _0x3967a7.abrupt("return", !_0x5a277e);
                  case 0xc:
                    if (!(this.m_spine.color.a <= 0x0)) {
                      _0x3967a7.next = 0xe;
                      break;
                    }
                    return _0x3967a7.abrupt("return", false);
                  case 0xe:
                    _0x4d5c69.stopAllByTarget(this.m_spine.color);
                    if (!(null == (_0x267250 = this.m_cancelCb))) {
                      _0x267250.call(this);
                    }
                    _0x3967a7.next = 0x12;
                    return new Promise(function (_0x277eaf) {
                      _0x12998f.m_cancelCb = function () {
                        _0x277eaf(false);
                      };
                      _0x5b954c(_0x12998f.m_spine.color).to(_0x12998f.m_fadeOutTime, {
                        'a': 0x0
                      }).call(function () {
                        _0x277eaf(true);
                        _0x12998f.m_cancelCb = null;
                        _0x12998f.node.active = false;
                      }).start();
                    });
                  case 0x12:
                  case 'end':
                    return _0x3967a7.stop();
                }
              }
            }, _0x44e9b2, this);
          }));
          return function () {
            return _0x3eb127.apply(this, arguments);
          };
        }();
        _0x44f448.CheckSpine = function () {
          if (!this.m_spine) {
            this.m_spine = this.node.getComponent(_0x4a7cfd.Skeleton);
            if (this.m_isPlaySpine) {
              this.m_spine.setMix('FadeIn', "FadeOut", 0.05);
            }
          }
        };
        return _0x5481cf;
      }(_0xf24552);
      _0x1a5d66 = _0x4bec9c(_0x49ce5f.prototype, "m_fadeInTime", [_0x1b0e51], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return 0.1;
        }
      });
      _0x23ea4c = _0x4bec9c(_0x49ce5f.prototype, "m_fadeOutTime", [_0x263af3], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return 0.2;
        }
      });
      _0x26fd8c = _0x4bec9c(_0x49ce5f.prototype, "m_isPlaySpine", [_0x54928f], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      var _0x1fe94b = _0x2c06db(_0x5c04fb = _0x49ce5f) || _0x5c04fb;
      var _0x153a0c;
      var _0x2f65d6;
      var _0x170c74;
      var _0x1946b4;
      var _0x21ce22;
      var _0x228f4f;
      var _0x101aac;
      var _0x5118ef;
      var _0x2b95e0;
      var _0x426eaa;
      var _0x37a170;
      var _0xd4dcb3;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, '02e880GcB9Jw7QDr8UUWxEV', "ShakeComponent", undefined);
      var _0x25c28f = _0x55c899.ccclass;
      var _0x31b2da = _0x55c899.property;
      var _0x13d48c = _0x5527ae({});
      var _0x97458f;
      !function (_0x2b5219) {
        _0x2b5219[_0x2b5219.None = 0x0] = "None";
        _0x2b5219[_0x2b5219.FadeIn = 0x1] = 'FadeIn';
        _0x2b5219[_0x2b5219.FadeOut = 0x2] = 'FadeOut';
      }(_0x97458f || (_0x97458f = {}));
      var _0x5081b3 = _0x5527ae({
        'None': _0x97458f.None,
        'FadeIn': _0x97458f.FadeIn,
        'FadeOut': _0x97458f.FadeOut
      });
      _0x153a0c = _0x25c28f("_TweenInfo");
      _0x2f65d6 = _0x31b2da({
        'visible': false,
        'tooltip': "Easing"
      });
      _0x170c74 = _0x31b2da({
        'type': _0x13d48c,
        'visible': false
      });
      _0x1946b4 = _0x31b2da({
        'visible': true,
        'displayName': "緩動效果",
        'type': _0x13d48c
      });
      _0x21ce22 = _0x31b2da({
        'type': _0x5081b3,
        'visible': false
      });
      _0x228f4f = _0x31b2da({
        'visible': true,
        'displayName': "fade type",
        'type': _0x5081b3
      });
      _0x101aac = _0x31b2da({
        'min': 0x0,
        'visible': true,
        'displayName': '時間'
      });
      _0x5118ef = function () {
        function _0x3d35d9() {
          _0x7af141(this, "m_EasingName", _0x2b95e0, this);
          _0x7af141(this, "__easingIdx", _0x426eaa, this);
          _0x7af141(this, '__fadeType', _0x37a170, this);
          this._EasingEnumList = [];
          _0x7af141(this, "duration", _0xd4dcb3, this);
        }
        _0x9778ac(_0x3d35d9, [{
          'key': "_easingIdx",
          'get': function () {},
          'set': function (_0xc18da6) {}
        }, {
          'key': '_fadeType',
          'get': function () {
            return this.__fadeType;
          },
          'set': function (_0x3766ca) {}
        }]);
        return _0x3d35d9;
      }();
      _0x2b95e0 = _0x4bec9c(_0x5118ef.prototype, 'm_EasingName', [_0x2f65d6], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return '';
        }
      });
      _0x426eaa = _0x4bec9c(_0x5118ef.prototype, '__easingIdx', [_0x170c74], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4bec9c(_0x5118ef.prototype, "_easingIdx", [_0x1946b4], Object.getOwnPropertyDescriptor(_0x5118ef.prototype, "_easingIdx"), _0x5118ef.prototype);
      _0x37a170 = _0x4bec9c(_0x5118ef.prototype, "__fadeType", [_0x21ce22], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4bec9c(_0x5118ef.prototype, '_fadeType', [_0x228f4f], Object.getOwnPropertyDescriptor(_0x5118ef.prototype, '_fadeType'), _0x5118ef.prototype);
      _0xd4dcb3 = _0x4bec9c(_0x5118ef.prototype, "duration", [_0x101aac], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return 0x1;
        }
      });
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "b57cahiKlxMZL7TyWc1iHaf", "SloganComponent", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "c6e0eKOKjtNwJBDq/hJOYgn", "index", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, '1413fOAFW5IopxHBWJuzFO5', "IdleState", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, 'a5f63zYewFDTZvKP9uvXeRA', "SpinState", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "bf8c2JouaBCfKJLvHTkkcvR", "ShowIntroState", undefined);
      var _0x100cff;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "4f4a69vHvhClqz7/cQSEju4", 'EffectStartState', undefined);
      (function (_0x50c900) {
        _0x50c900[_0x50c900.eLevel1 = 0x0] = 'eLevel1';
        _0x50c900[_0x50c900.eLevel2 = 0x1] = 'eLevel2';
        _0x50c900[_0x50c900.eLevel3 = 0x2] = "eLevel3";
        _0x50c900[_0x50c900.eLevel4 = 0x3] = "eLevel4";
        _0x50c900[_0x50c900.eLevel5 = 0x4] = "eLevel5";
      })(_0x100cff || (_0x100cff = {}));
      var _0x1b9040;
      var _0x5e1175;
      var _0x590a68;
      var _0x4bdba0;
      var _0x464aab;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "b3d95gsozRH5JPdXuCwTbqL", "AvatarSpine", undefined);
      (function (_0xb5d8c3) {
        _0xb5d8c3.eEnterBGOolong = 'BG_Declare_Oolong';
        _0xb5d8c3.eEnterBG = "BG_Declare_Start";
        _0xb5d8c3.eBGIdle = "BG_Idle";
        _0xb5d8c3.eBGOolong = "BG_Oolong";
        _0xb5d8c3.eBGSpecialEnd = "BG_Special_End";
        _0xb5d8c3.eBGSpecialLoop = "BG_Special_Loop";
        _0xb5d8c3.eBGSpecialStart = "BG_Special_Start";
        _0xb5d8c3.eBigWinEnd = "BigWin_End";
        _0xb5d8c3.eBigWinLoop = "BigWin_Loop";
        _0xb5d8c3.eBigWinStart = "BigWin_Start";
        _0xb5d8c3.eIdle = 'Idle';
        _0xb5d8c3.eIdle_Upgrade2 = "Idle_Upgrade2";
        _0xb5d8c3.eIdle_Upgrade3 = "Idle_Upgrade3";
        _0xb5d8c3.eIdle_Upgrade4 = "Idle_Upgrade4";
        _0xb5d8c3.eIdle_不知啥時用 = "Idle2";
        _0xb5d8c3.eLock = 'Lock';
        _0xb5d8c3.eSpecialEnd = "MG_Special_End";
        _0xb5d8c3.eSpecialLoop = "MG_Special_Loop";
        _0xb5d8c3.eSpecialStart = "MG_Special_Start";
        _0xb5d8c3.eWin = 'Win';
        _0xb5d8c3.eWin2 = "Win2";
        _0xb5d8c3.eWin3 = "Win3";
        _0xb5d8c3.eWin4 = "Win4";
        _0xb5d8c3.eCollect = "collect";
      })(_0x464aab || (_0x464aab = {}));
      var _0x29f4ff = ["default", "Skin_Lv2", "Skin_Lv3", "Skin_Lv4"];
      var _0x1ef02a = _0x55c899.ccclass;
      var _0x1fb59d = _0x55c899.property;
      _0x1b9040 = _0x1ef02a('AvatarSpine');
      _0x5e1175 = _0x1fb59d({
        'type': _0x4a7cfd.Skeleton,
        'tooltip': "Collect Effect FX"
      });
      _0x590a68 = function (_0x5355eb) {
        function _0x55a1c8() {
          var _0xf37457;
          var _0x3b899f = arguments.length;
          var _0x3e7d88 = new Array(_0x3b899f);
          for (var _0x27ec37 = 0x0; _0x27ec37 < _0x3b899f; _0x27ec37++) {
            _0x3e7d88[_0x27ec37] = arguments[_0x27ec37];
          }
          _0x7af141(_0xf37457 = _0x5355eb.call.apply(_0x5355eb, [this].concat(_0x3e7d88)) || this, "m_CollectEffectFX", _0x4bdba0, _0x4c7417(_0xf37457));
          _0xf37457.m_gameView = undefined;
          _0xf37457.m_CurrentAnim = undefined;
          _0xf37457.m_isNewRoundCanResetCollectAnim = undefined;
          return _0xf37457;
        }
        _0x5b6a43(_0x55a1c8, _0x5355eb);
        var _0x4d0c0a = _0x55a1c8.prototype;
        _0x4d0c0a.Init = function (_0x344559) {
          this.m_gameView = _0x344559;
          this.SetAllMix();
        };
        _0x4d0c0a.Reset = function () {
          this.m_isNewRoundCanResetCollectAnim = true;
        };
        _0x4d0c0a.SetAllMix = function () {
          this.m_spine.setMix(_0x464aab.eIdle, _0x464aab.eCollect, 0.1);
          this.m_spine.setMix(_0x464aab.eIdle, _0x464aab.eIdle_Upgrade2, 0.2);
          this.m_spine.setMix(_0x464aab.eIdle, _0x464aab.eIdle_Upgrade3, 0.2);
          this.m_spine.setMix(_0x464aab.eIdle, _0x464aab.eIdle_Upgrade4, 0.2);
          this.m_spine.setMix(_0x464aab.eBigWinEnd, _0x464aab.eIdle, 0.5);
        };
        _0x4d0c0a.PlayIdle = function () {
          if (this.m_gameView.IsBonusGame) {
            this.PlayBGIdle();
          } else {
            this.PlayMGIdle();
          }
        };
        _0x4d0c0a.PlayMGIdle = function () {
          _0x312ceb("Play Animation MG Idle");
          if (this.m_CurrentAnim != _0x464aab.eIdle) {
            this.m_CurrentAnim = _0x464aab.eIdle;
            this.PlayAnimation(_0x464aab.eIdle, this.m_spine, true);
          }
        };
        _0x4d0c0a.PlayBGIdle = function () {
          _0x312ceb("Play Animation MG Idle");
          if (this.m_CurrentAnim != _0x464aab.eBGIdle) {
            this.m_CurrentAnim = _0x464aab.eBGIdle;
            this.PlayAnimation(_0x464aab.eBGIdle, this.m_spine, true);
          }
        };
        _0x4d0c0a.PlayWin = function () {
          var _0xc27bbc = _0x2b8ecf(_0x17c453().mark(function _0x38b74c(_0x462525) {
            var _0x3ef9f8 = this;
            return _0x17c453().wrap(function (_0x4b981) {
              for (;;) {
                switch (_0x4b981.prev = _0x4b981.next) {
                  case 0x0:
                    if (undefined === _0x462525) {
                      _0x462525 = -0x1;
                    }
                    _0x312ceb("Play Animation Win");
                    _0x4b981.t0 = _0x462525;
                    _0x4b981.next = 0x1 === _0x4b981.t0 ? 0x5 : 0x2 === _0x4b981.t0 ? 0x7 : 0x3 === _0x4b981.t0 ? 0x9 : 0xb;
                    break;
                  case 0x5:
                    this.m_CurrentAnim = _0x464aab.eWin2;
                    return _0x4b981.abrupt('break', 0xd);
                  case 0x7:
                    this.m_CurrentAnim = _0x464aab.eWin3;
                    return _0x4b981.abrupt("break", 0xd);
                  case 0x9:
                    this.m_CurrentAnim = _0x464aab.eWin4;
                    return _0x4b981.abrupt('break', 0xd);
                  case 0xb:
                    this.m_CurrentAnim = _0x464aab.eWin;
                    return _0x4b981.abrupt("break", 0xd);
                  case 0xd:
                    if (-0x1 === _0x462525) {
                      _0x4b981.next = 0x14;
                      break;
                    }
                    _0x4b981.next = 0x10;
                    return this.PlayAnimation(this.m_CurrentAnim, this.m_spine, false, 0x0);
                  case 0x10:
                    this.SetAvatarSkin(_0x462525);
                    this.PlayIdle();
                    _0x4b981.next = 0x15;
                    break;
                  case 0x14:
                    this.PlayAnimation(this.m_CurrentAnim, this.m_spine, false, 0x0).then(function () {
                      _0x3ef9f8.PlayIdle();
                    });
                  case 0x15:
                  case "end":
                    return _0x4b981.stop();
                }
              }
            }, _0x38b74c, this);
          }));
          return function (_0x45e98b) {
            return _0xc27bbc.apply(this, arguments);
          };
        }();
        _0x4d0c0a.PlayWildCollect = function () {
          var _0x449cc4 = _0x2b8ecf(_0x17c453().mark(function _0x29ff24() {
            return _0x17c453().wrap(function (_0x4b336f) {
              for (;;) {
                switch (_0x4b336f.prev = _0x4b336f.next) {
                  case 0x0:
                    _0x312ceb("Play Animation Collect");
                    if (this.m_CurrentAnim != _0x464aab.eCollect || this.m_isNewRoundCanResetCollectAnim) {
                      _0x4b336f.next = 0x3;
                      break;
                    }
                    return _0x4b336f.abrupt("return");
                  case 0x3:
                    this.m_isNewRoundCanResetCollectAnim = false;
                    if (!this.m_gameView.UpgradeWhenIdle) {
                      _0x4b336f.next = 0x9;
                      break;
                    }
                    this.m_gameView.UpgradeWhenIdle = false;
                    _0x4b336f.next = 0x8;
                    return this.PlayIdleUpgrade(this.m_gameView.CurAvatarLevel);
                  case 0x8:
                    this.PlayIdle();
                  case 0x9:
                  case "end":
                    return _0x4b336f.stop();
                }
              }
            }, _0x29ff24, this);
          }));
          return function () {
            return _0x449cc4.apply(this, arguments);
          };
        }();
        _0x4d0c0a.PlaySpecialStart = function () {
          var _0x21a4ac = _0x2b8ecf(_0x17c453().mark(function _0x3da1cd() {
            return _0x17c453().wrap(function (_0x2928bb) {
              for (;;) {
                switch (_0x2928bb.prev = _0x2928bb.next) {
                  case 0x0:
                    _0x312ceb("Play Animation Special Start");
                    this.m_CurrentAnim = _0x464aab.eSpecialStart;
                    _0x2928bb.next = 0x4;
                    return this.PlayAnimation(this.m_CurrentAnim, this.m_spine);
                  case 0x4:
                    this.m_gameView.CurAvatarLevel = 0x0;
                    this.SetAvatarSkin(this.m_gameView.CurAvatarLevel);
                    this.PlayAnimation(_0x464aab.eSpecialLoop, this.m_spine, true);
                  case 0x7:
                  case "end":
                    return _0x2928bb.stop();
                }
              }
            }, _0x3da1cd, this);
          }));
          return function () {
            return _0x21a4ac.apply(this, arguments);
          };
        }();
        _0x4d0c0a.PlaySpecialEnd = function () {
          var _0x231b05 = _0x2b8ecf(_0x17c453().mark(function _0x49c87e() {
            return _0x17c453().wrap(function (_0x81c680) {
              for (;;) {
                switch (_0x81c680.prev = _0x81c680.next) {
                  case 0x0:
                    _0x312ceb("Play Animation Special End");
                    this.m_CurrentAnim = _0x464aab.eSpecialEnd;
                    _0x81c680.next = 0x4;
                    return this.PlayAnimation(this.m_CurrentAnim, this.m_spine);
                  case 0x4:
                    this.PlayIdle();
                  case 0x5:
                  case 'end':
                    return _0x81c680.stop();
                }
              }
            }, _0x49c87e, this);
          }));
          return function () {
            return _0x231b05.apply(this, arguments);
          };
        }();
        _0x4d0c0a.PlaySpecialStart_BG = function () {
          var _0x1982fa = _0x2b8ecf(_0x17c453().mark(function _0x55f2cb() {
            return _0x17c453().wrap(function (_0x450095) {
              for (;;) {
                switch (_0x450095.prev = _0x450095.next) {
                  case 0x0:
                    _0x312ceb("Play Animation BG Special Start");
                    this.m_CurrentAnim = _0x464aab.eBGSpecialStart;
                    _0x450095.next = 0x4;
                    return this.PlayAnimation(this.m_CurrentAnim, this.m_spine);
                  case 0x4:
                    this.PlayAnimation(_0x464aab.eBGSpecialLoop, this.m_spine, true);
                  case 0x5:
                  case 'end':
                    return _0x450095.stop();
                }
              }
            }, _0x55f2cb, this);
          }));
          return function () {
            return _0x1982fa.apply(this, arguments);
          };
        }();
        _0x4d0c0a.PlaySpecialEnd_BG = function () {
          var _0x99682b = _0x2b8ecf(_0x17c453().mark(function _0x223a56() {
            return _0x17c453().wrap(function (_0x1d29eb) {
              for (;;) {
                switch (_0x1d29eb.prev = _0x1d29eb.next) {
                  case 0x0:
                    _0x312ceb("Play Animation BG Special End");
                    this.m_CurrentAnim = _0x464aab.eBGSpecialEnd;
                    _0x1d29eb.next = 0x4;
                    return this.PlayAnimation(this.m_CurrentAnim, this.m_spine);
                  case 0x4:
                    this.PlayIdle();
                  case 0x5:
                  case "end":
                    return _0x1d29eb.stop();
                }
              }
            }, _0x223a56, this);
          }));
          return function () {
            return _0x99682b.apply(this, arguments);
          };
        }();
        _0x4d0c0a.PlayBgNoFullPlate = function () {
          var _0x596111 = _0x2b8ecf(_0x17c453().mark(function _0x2e0b4c() {
            return _0x17c453().wrap(function (_0x4266fc) {
              for (;;) {
                switch (_0x4266fc.prev = _0x4266fc.next) {
                  case 0x0:
                    _0x312ceb("Play NoFullPlate");
                    this.m_CurrentAnim = _0x464aab.eBGOolong;
                    _0x4266fc.next = 0x4;
                    return this.PlayAnimation(this.m_CurrentAnim, this.m_spine);
                  case 0x4:
                    this.PlayMGIdle();
                  case 0x5:
                  case "end":
                    return _0x4266fc.stop();
                }
              }
            }, _0x2e0b4c, this);
          }));
          return function () {
            return _0x596111.apply(this, arguments);
          };
        }();
        _0x4d0c0a.PlayEnterBG = function () {
          var _0xd6c7b3 = _0x2b8ecf(_0x17c453().mark(function _0x4589b3() {
            return _0x17c453().wrap(function (_0x29ff42) {
              for (;;) {
                switch (_0x29ff42.prev = _0x29ff42.next) {
                  case 0x0:
                    _0x312ceb("Play EnterBG");
                    this.m_CurrentAnim = _0x464aab.eEnterBG;
                    _0x29ff42.next = 0x4;
                    return this.PlayAnimation(this.m_CurrentAnim, this.m_spine);
                  case 0x4:
                    this.m_gameView.CurAvatarLevel = 0x0;
                    this.SetAvatarSkin(this.m_gameView.CurAvatarLevel);
                    this.PlayBGIdle();
                  case 0x7:
                  case "end":
                    return _0x29ff42.stop();
                }
              }
            }, _0x4589b3, this);
          }));
          return function () {
            return _0xd6c7b3.apply(this, arguments);
          };
        }();
        _0x4d0c0a.PlayBgEnterFail = function () {
          var _0x4376cc = _0x2b8ecf(_0x17c453().mark(function _0x35275d() {
            return _0x17c453().wrap(function (_0x50bdc6) {
              for (;;) {
                switch (_0x50bdc6.prev = _0x50bdc6.next) {
                  case 0x0:
                    _0x312ceb("Play Animation eEnterBGOolong");
                    this.m_CurrentAnim = _0x464aab.eEnterBGOolong;
                    _0x50bdc6.next = 0x4;
                    return this.PlayAnimation(this.m_CurrentAnim, this.m_spine);
                  case 0x4:
                    this.PlayMGIdle();
                  case 0x5:
                  case "end":
                    return _0x50bdc6.stop();
                }
              }
            }, _0x35275d, this);
          }));
          return function () {
            return _0x4376cc.apply(this, arguments);
          };
        }();
        _0x4d0c0a.PlayLock = function () {
          var _0x886e55 = _0x2b8ecf(_0x17c453().mark(function _0x196a88() {
            return _0x17c453().wrap(function (_0x5df3fd) {
              for (;;) {
                switch (_0x5df3fd.prev = _0x5df3fd.next) {
                  case 0x0:
                    _0x312ceb("Play Animation PlayLock");
                    this.SetNodeActivity(true);
                    this.m_CurrentAnim = _0x464aab.eLock;
                    _0x5df3fd.next = 0x5;
                    return this.PlayAnimation(this.m_CurrentAnim, this.m_spine);
                  case 0x5:
                    this.PlayBGIdle();
                  case 0x6:
                  case "end":
                    return _0x5df3fd.stop();
                }
              }
            }, _0x196a88, this);
          }));
          return function () {
            return _0x886e55.apply(this, arguments);
          };
        }();
        _0x4d0c0a.PlayBigWinStart = function () {
          var _0xe7fdfc = _0x2b8ecf(_0x17c453().mark(function _0x155f78() {
            return _0x17c453().wrap(function (_0x53d0f4) {
              for (;;) {
                switch (_0x53d0f4.prev = _0x53d0f4.next) {
                  case 0x0:
                    _0x312ceb("Play Animation BigWin_Start");
                    this.m_CurrentAnim = _0x464aab.eBigWinStart;
                    _0x53d0f4.next = 0x4;
                    return this.PlayAnimation(this.m_CurrentAnim, this.m_spine);
                  case 0x4:
                    this.PlayBigWinLoop();
                  case 0x5:
                  case "end":
                    return _0x53d0f4.stop();
                }
              }
            }, _0x155f78, this);
          }));
          return function () {
            return _0xe7fdfc.apply(this, arguments);
          };
        }();
        _0x4d0c0a.PlayBigWinLoop = function () {
          _0x312ceb("Play Animation BigWin_Loop");
          this.m_CurrentAnim = _0x464aab.eBigWinLoop;
          this.PlayAnimation(this.m_CurrentAnim, this.m_spine, true);
        };
        _0x4d0c0a.PlayBigWinEnd = function () {
          var _0x5dad2d = _0x2b8ecf(_0x17c453().mark(function _0x1ec9d8() {
            return _0x17c453().wrap(function (_0x3508be) {
              for (;;) {
                switch (_0x3508be.prev = _0x3508be.next) {
                  case 0x0:
                    _0x312ceb("Play Animation BigWin_End");
                    this.m_CurrentAnim = _0x464aab.eBigWinEnd;
                    this.PlayAnimation(this.m_CurrentAnim, this.m_spine);
                    this.PlayMGIdle();
                  case 0x4:
                  case 'end':
                    return _0x3508be.stop();
                }
              }
            }, _0x1ec9d8, this);
          }));
          return function () {
            return _0x5dad2d.apply(this, arguments);
          };
        }();
        _0x4d0c0a.PlayEffectCollectFX = function () {
          this.PlayAnimation("Effect_Collect", this.m_CollectEffectFX);
        };
        _0x4d0c0a.PlayIdleUpgrade = function () {
          var _0x2b7beb = _0x2b8ecf(_0x17c453().mark(function _0x5a4fdb(_0x89f22c) {
            return _0x17c453().wrap(function (_0xb82372) {
              for (;;) {
                switch (_0xb82372.prev = _0xb82372.next) {
                  case 0x0:
                    _0xb82372.t0 = _0x89f22c;
                    _0xb82372.next = 0x1 === _0xb82372.t0 ? 0x3 : 0x2 === _0xb82372.t0 ? 0x5 : 0x3 === _0xb82372.t0 ? 0x7 : 0x9;
                    break;
                  case 0x3:
                    this.m_CurrentAnim = _0x464aab.eIdle_Upgrade2;
                    return _0xb82372.abrupt("break", 0x9);
                  case 0x5:
                    this.m_CurrentAnim = _0x464aab.eIdle_Upgrade3;
                    return _0xb82372.abrupt("break", 0x9);
                  case 0x7:
                    this.m_CurrentAnim = _0x464aab.eIdle_Upgrade4;
                    return _0xb82372.abrupt("break", 0x9);
                  case 0x9:
                    _0x55475f.Play(_0x4772ce.AudioClips.Level_Up);
                    _0xb82372.next = 0xc;
                    return this.PlayAnimation(this.m_CurrentAnim, this.m_spine, false, 0x0);
                  case 0xc:
                    this.SetAvatarSkin(_0x89f22c);
                    this.PlayAnimation(_0x464aab.eIdle, this.m_spine, true);
                  case 0xe:
                  case "end":
                    return _0xb82372.stop();
                }
              }
            }, _0x5a4fdb, this);
          }));
          return function (_0x15e503) {
            return _0x2b7beb.apply(this, arguments);
          };
        }();
        _0x4d0c0a.SetAvatarSkin = function (_0x6cd846, _0x4d327f) {
          if (undefined === _0x4d327f) {
            _0x4d327f = true;
          }
          _0x312ceb("JDNKFDNSKFNDSJKFDSFDSF");
          this.m_spine.setSkin(_0x29f4ff[_0x6cd846]);
          if (_0x4d327f) {
            this.CheckAndSend(_0x6cd846);
          }
        };
        _0x4d0c0a.CheckAndSend = function (_0x1b4d34) {
          var _0x3df297 = new _0x14a887.ljProto.GemInfo();
          _0x3df297.data = _0x1b4d34;
          var _0x25337a = new _0x140b3c();
          _0x25337a.reqData = _0x14a887.ljProto.GemInfo.encode(_0x3df297).finish();
          _0x25337a.info = {
            'D': 0x66
          };
          _0x397841.SendGameCustomizedCommand(_0x25337a, 0x66, function (_0x5af43d, _0x249b3e) {});
        };
        return _0x55a1c8;
      }(_0x1bc5ca);
      _0x4bdba0 = _0x4bec9c(_0x590a68.prototype, 'm_CollectEffectFX', [_0x5e1175], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "7430fE0eIROT6ySkWFGCIKd", "RoundEndState", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, '59f33aXHj1KwoEPi5S0MCNp', "AwardState", undefined);
      var _0x51a948;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "fc4b7x74klOGZisVgcpMIeK", "ReSpinState", undefined);
      var _0xf854e5 = _0x55c899.ccclass;
      _0x51a948 = _0xf854e5("ReSpinState");
      var _0x29141f;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, '91be0q6xo5G6K1cP+HMvfAA', 'FeatrueShowState', undefined);
      var _0xb4b7ef = _0x55c899.ccclass;
      _0x29141f = _0xb4b7ef('FeatrueShowState');
      var _0x3bedb8;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "3ae85mB14pMhLGqoa4QGp45", "UnshowPrepare", undefined);
      var _0x487d33 = _0x55c899.ccclass;
      _0x3bedb8 = _0x487d33("UnshowPrepareState");
      var _0x1f32ee;
      var _0x3dd4da;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, '7bf88LaK1BDdYpoQLqLcAeE', "RecoverSpinAck", undefined);
      var _0x32636a = _0x55c899.ccclass;
      _0x1f32ee = _0x32636a('RecoverSpinAck');
      _0x3dd4da = function () {
        function _0x2a5d81() {
          if (_0x2a5d81._instance) {
            throw new Error("Error: Instantiation failed: Use soundManager instead of new.");
          }
          _0x2a5d81._instance = this;
        }
        _0x2a5d81.getInstance = function () {
          if (!this._instance) {
            this._instance = new _0x2a5d81();
          }
          return _0x2a5d81._instance;
        };
        var _0x1b89d3 = _0x2a5d81.prototype;
        _0x1b89d3.RecoverSpinAck = function (_0x592660) {
          var _0x582ad4 = new _0x14a887.ljProto.SpinAck();
          _0x582ad4.WildWin = _0x592660.WildWin || 0x0;
          _0x582ad4.TotalWin = _0x592660.TotalWin || 0x0;
          _0x582ad4.Extra = _0x592660.Extra || false;
          _0x582ad4.BonusSymbol = _0x592660.BonusSymbol || 0x0;
          _0x582ad4.GetBonus = _0x592660.GetBonus || 0x0;
          _0x582ad4.Mult = _0x592660.Mult || 0x1;
          for (var _0x4930aa = 0x0; _0x4930aa < _0x592660.WildOdd.length; ++_0x4930aa) {
            var _0x4ee64d = _0x592660.WildOdd[_0x4930aa];
            _0x582ad4.WildOdd.push(_0x4ee64d);
          }
          for (var _0x405b51 = 0x0; _0x405b51 < _0x592660.PlateSymbol.length; ++_0x405b51) {
            var _0x25b83c = new _0x14a887.ljProto.Single();
            var _0x1c4d4d = _0x592660.PlateSymbol[_0x405b51];
            _0x25b83c.Col = this.TraverseColumns(_0x1c4d4d.Col);
            _0x582ad4.PlateSymbol.push(_0x25b83c);
          }
          if (!_0x592660.AwardDataVec) {
            return _0x582ad4;
          }
          for (var _0x4a5e7c = 0x0; _0x4a5e7c < _0x592660.AwardDataVec.length; ++_0x4a5e7c) {
            var _0x36e7b3 = new _0x14a887.ljProto.AwardData();
            var _0x134f17 = _0x592660.AwardDataVec[_0x4a5e7c];
            _0x36e7b3.Symbol = _0x134f17.Symbol || 0x0;
            _0x36e7b3.Line = _0x134f17.Line || 0x0;
            _0x36e7b3.Win = _0x134f17.Win || 0x0;
            _0x582ad4.AwardDataVec.push(_0x36e7b3);
          }
          return _0x582ad4;
        };
        _0x1b89d3.TraverseColumns = function (_0x493982) {
          if (_0x493982) {
            for (var _0x1063ca = 0x0; _0x1063ca < _0x493982.length; ++_0x1063ca) {
              if (!_0x493982[_0x1063ca]) {
                _0x493982[_0x1063ca] = new _0x14a887.ljProto.Column();
              }
              _0x493982[_0x1063ca] = this.TraverseColumn(_0x493982[_0x1063ca]);
            }
            return _0x493982;
          }
        };
        _0x1b89d3.TraverseColumn = function (_0x4ed101) {
          var _0x224751 = new _0x14a887.ljProto.Column();
          if (!_0x4ed101.Row) {
            _0x4ed101.Row = [];
          }
          for (var _0x453bb5 = 0x0; _0x453bb5 < _0x4ed101.Row.length; ++_0x453bb5) {
            _0x4ed101.Row[_0x453bb5] = _0x4ed101.Row[_0x453bb5] || 0x0;
            _0x224751.Row.push(_0x4ed101.Row[_0x453bb5]);
          }
          return _0x224751;
        };
        return _0x2a5d81;
      }();
      _0x3dd4da._instance = new _0x3dd4da();
      var _0x4e117b;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "09537JX53VJzpNZL8SF3bi5", "MultiplySpine", undefined);
      var _0x5dd6bc = _0x55c899.ccclass;
      _0x4e117b = _0x5dd6bc("MultiplySpine");
      var _0x3f1ad8;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, 'd11a2PM//BNPYARd+j5k4KB', 'BigBottomSpine', undefined);
      var _0x39b765 = _0x55c899.ccclass;
      _0x3f1ad8 = _0x39b765('BigBottomSpine');
      var _0x4cfb41;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "ff4f7Fb33hHd52L9sc3C86y", "BigTopSpine", undefined);
      var _0x414fd6 = _0x55c899.ccclass;
      _0x4cfb41 = _0x414fd6('BigTopSpine');
      var _0x211b13;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "b635e3NJyFCJKPGgMwwa7Ij", "LineSpine", undefined);
      var _0x1eca49 = _0x55c899.ccclass;
      _0x211b13 = _0x1eca49('LineSpine');
      var _0x5beeb9;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "1bc3aFxPn9HwZTR4Di7fB+i", "ExtraBetSpine", undefined);
      var _0x30b217 = _0x55c899.ccclass;
      _0x5beeb9 = _0x30b217('ExtraBetSpine');
      var _0x584f8c;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "356afbtGPZLQoM8Oh550UlW", 'FxResetSpine', undefined);
      var _0x557922 = _0x55c899.ccclass;
      _0x584f8c = _0x557922("FxResetSpine");
      var _0x5e2966;
      var _0x4190ff;
      var _0x37fb21;
      var _0x288161;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "31efdOSA65F5qGtnDJZniKk", "BgNearWinSpineManager", undefined);
      var _0x266f8e = _0x55c899.ccclass;
      var _0xd761d5 = _0x55c899.property;
      _0x5e2966 = _0x266f8e("BgNearWinSpineManager");
      _0x4190ff = _0xd761d5({
        'type': _0x2bf5c4
      });
      _0x37fb21 = function (_0x11bd34) {
        function _0x40a366() {
          var _0x38bec1;
          var _0x175485 = arguments.length;
          var _0x13ad22 = new Array(_0x175485);
          for (var _0x6ac808 = 0x0; _0x6ac808 < _0x175485; _0x6ac808++) {
            _0x13ad22[_0x6ac808] = arguments[_0x6ac808];
          }
          _0x7af141(_0x38bec1 = _0x11bd34.call.apply(_0x11bd34, [this].concat(_0x13ad22)) || this, "m_nearWinNodes", _0x288161, _0x4c7417(_0x38bec1));
          return _0x38bec1;
        }
        _0x5b6a43(_0x40a366, _0x11bd34);
        var _0x2afe93 = _0x40a366.prototype;
        _0x2afe93.ShowNearWin = function (_0x32d52b) {
          _0x55475f.Play(_0x4772ce.AudioClips.Near_Win);
          this.m_nearWinNodes[_0x32d52b].active = true;
          this.m_nearWinNodes[_0x32d52b].getComponent(_0x1fe94b).FadeIn();
        };
        _0x2afe93.HideNearWin = function (_0x1d38d1) {
          this.m_nearWinNodes[_0x1d38d1].active = false;
        };
        return _0x40a366;
      }(_0xf24552);
      _0x288161 = _0x4bec9c(_0x37fb21.prototype, "m_nearWinNodes", [_0x4190ff], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x361286._RF.pop();
      _0x361286._RF.push({}, '0ee9eCt3P1GxJ1+g/21+NEB', "RoundShowEndState", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "3ccb6iijhBHAaB0v8CErxTz", "CheckState", undefined);
      var _0x379512;
      _0x361286._RF.pop();
      _0x50443a.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/long/src/long.js', function (_0x39be15, _0x2b9c89, _0x3d4539, _0x127cf3, _0x17b0dd) {
        _0x3d4539.exports = _0x3a77ad;
        var _0x52eda1 = null;
        try {
          _0x52eda1 = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0x0, 0x61, 0x73, 0x6d, 0x1, 0x0, 0x0, 0x0, 0x1, 0xd, 0x2, 0x60, 0x0, 0x1, 0x7f, 0x60, 0x4, 0x7f, 0x7f, 0x7f, 0x7f, 0x1, 0x7f, 0x3, 0x7, 0x6, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x6, 0x6, 0x1, 0x7f, 0x1, 0x41, 0x0, 0xb, 0x7, 0x32, 0x6, 0x3, 0x6d, 0x75, 0x6c, 0x0, 0x1, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x73, 0x0, 0x2, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x75, 0x0, 0x3, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x73, 0x0, 0x4, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x75, 0x0, 0x5, 0x8, 0x67, 0x65, 0x74, 0x5f, 0x68, 0x69, 0x67, 0x68, 0x0, 0x0, 0xa, 0xbf, 0x1, 0x6, 0x4, 0x0, 0x23, 0x0, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7e, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7f, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x80, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x81, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x82, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb])), {}).exports;
        } catch (_0x83d631) {}
        function _0x3a77ad(_0x500662, _0x5703e6, _0x3a8357) {
          this.low = 0x0 | _0x500662;
          this.high = 0x0 | _0x5703e6;
          this.unsigned = !!_0x3a8357;
        }
        function _0xb1e8b3(_0x4b442c) {
          return true === (_0x4b442c && _0x4b442c.__isLong__);
        }
        _0x3a77ad.prototype.__isLong__;
        Object.defineProperty(_0x3a77ad.prototype, '__isLong__', {
          'value': true
        });
        _0x3a77ad.isLong = _0xb1e8b3;
        var _0x32d995 = {};
        var _0x2416d3 = {};
        function _0x5ba1b8(_0x5588a0, _0x4f3ff9) {
          var _0x4f9272;
          var _0x497163;
          var _0x53323a;
          return _0x4f3ff9 ? (_0x53323a = 0x0 <= (_0x5588a0 >>>= 0x0) && _0x5588a0 < 0x100) && (_0x497163 = _0x2416d3[_0x5588a0]) ? _0x497163 : (_0x4f9272 = new _0x3a77ad(_0x5588a0, (0x0 | _0x5588a0) < 0x0 ? -0x1 : 0x0, true), _0x53323a && (_0x2416d3[_0x5588a0] = _0x4f9272), _0x4f9272) : (_0x53323a = -0x80 <= (_0x5588a0 |= 0x0) && _0x5588a0 < 0x80) && (_0x497163 = _0x32d995[_0x5588a0]) ? _0x497163 : (_0x4f9272 = new _0x3a77ad(_0x5588a0, _0x5588a0 < 0x0 ? -0x1 : 0x0, false), _0x53323a && (_0x32d995[_0x5588a0] = _0x4f9272), _0x4f9272);
        }
        function _0x1adeed(_0x2a0819, _0x3e44e9) {
          if (isNaN(_0x2a0819)) {
            return _0x3e44e9 ? _0x5dacde : _0x46fb0c;
          }
          if (_0x3e44e9) {
            if (_0x2a0819 < 0x0) {
              return _0x5dacde;
            }
            if (_0x2a0819 >= 18446744073709552000) {
              return _0x421462;
            }
          } else {
            if (_0x2a0819 <= -9223372036854776000) {
              return _0x3ae0ea;
            }
            if (_0x2a0819 + 0x1 >= 9223372036854776000) {
              return _0x505388;
            }
          }
          return _0x2a0819 < 0x0 ? _0x1adeed(-_0x2a0819, _0x3e44e9).neg() : new _0x3a77ad(_0x2a0819 % 0x100000000 | 0x0, _0x2a0819 / 0x100000000 | 0x0, _0x3e44e9);
        }
        function _0x2e0b70(_0x16c437, _0x105eb2, _0x44b93f) {
          return new _0x3a77ad(_0x16c437, _0x105eb2, _0x44b93f);
        }
        _0x3a77ad.fromInt = _0x5ba1b8;
        _0x3a77ad.fromNumber = _0x1adeed;
        _0x3a77ad.fromBits = _0x2e0b70;
        var _0x2ac9f0 = Math.pow;
        function _0x437e7a(_0x16e887, _0xcb2f44, _0x2610eb) {
          if (0x0 === _0x16e887.length) {
            throw Error("empty string");
          }
          if ("NaN" === _0x16e887 || "Infinity" === _0x16e887 || "+Infinity" === _0x16e887 || "-Infinity" === _0x16e887) {
            return _0x46fb0c;
          }
          if ('number' == typeof _0xcb2f44) {
            _0x2610eb = _0xcb2f44;
            _0xcb2f44 = false;
          } else {
            _0xcb2f44 = !!_0xcb2f44;
          }
          if ((_0x2610eb = _0x2610eb || 0xa) < 0x2 || 0x24 < _0x2610eb) {
            throw RangeError('radix');
          }
          var _0x2d2896;
          if ((_0x2d2896 = _0x16e887.indexOf('-')) > 0x0) {
            throw Error("interior hyphen");
          }
          if (0x0 === _0x2d2896) {
            return _0x437e7a(_0x16e887.substring(0x1), _0xcb2f44, _0x2610eb).neg();
          }
          var _0xca3c9b = _0x1adeed(_0x2ac9f0(_0x2610eb, 0x8));
          var _0x48b397 = _0x46fb0c;
          for (var _0x2f7b11 = 0x0; _0x2f7b11 < _0x16e887.length; _0x2f7b11 += 0x8) {
            var _0x454310 = Math.min(0x8, _0x16e887.length - _0x2f7b11);
            var _0x59ed17 = parseInt(_0x16e887.substring(_0x2f7b11, _0x2f7b11 + _0x454310), _0x2610eb);
            if (_0x454310 < 0x8) {
              var _0x2fdc04 = _0x1adeed(_0x2ac9f0(_0x2610eb, _0x454310));
              _0x48b397 = _0x48b397.mul(_0x2fdc04).add(_0x1adeed(_0x59ed17));
            } else {
              _0x48b397 = (_0x48b397 = _0x48b397.mul(_0xca3c9b)).add(_0x1adeed(_0x59ed17));
            }
          }
          _0x48b397.unsigned = _0xcb2f44;
          return _0x48b397;
        }
        function _0x5df9fc(_0xf2a08c, _0x3816d8) {
          return "number" == typeof _0xf2a08c ? _0x1adeed(_0xf2a08c, _0x3816d8) : "string" == typeof _0xf2a08c ? _0x437e7a(_0xf2a08c, _0x3816d8) : new _0x3a77ad(_0xf2a08c.low, _0xf2a08c.high, "boolean" == typeof _0x3816d8 ? _0x3816d8 : _0xf2a08c.unsigned);
        }
        _0x3a77ad.fromString = _0x437e7a;
        _0x3a77ad.fromValue = _0x5df9fc;
        var _0x5a9bf5 = _0x5ba1b8(16777216);
        var _0x46fb0c = _0x5ba1b8(0x0);
        _0x3a77ad.ZERO = _0x46fb0c;
        var _0x5dacde = _0x5ba1b8(0x0, true);
        _0x3a77ad.UZERO = _0x5dacde;
        var _0x5708a0 = _0x5ba1b8(0x1);
        _0x3a77ad.ONE = _0x5708a0;
        var _0x1ec574 = _0x5ba1b8(0x1, true);
        _0x3a77ad.UONE = _0x1ec574;
        var _0x4cce78 = _0x5ba1b8(-0x1);
        _0x3a77ad.NEG_ONE = _0x4cce78;
        var _0x505388 = new _0x3a77ad(-0x1, 0x7fffffff, false);
        _0x3a77ad.MAX_VALUE = _0x505388;
        var _0x421462 = new _0x3a77ad(-0x1, -0x1, true);
        _0x3a77ad.MAX_UNSIGNED_VALUE = _0x421462;
        var _0x3ae0ea = new _0x3a77ad(0x0, -0x80000000, false);
        _0x3a77ad.MIN_VALUE = _0x3ae0ea;
        var _0xa5f420 = _0x3a77ad.prototype;
        _0xa5f420.toInt = function () {
          return this.unsigned ? this.low >>> 0x0 : this.low;
        };
        _0xa5f420.toNumber = function () {
          return this.unsigned ? (this.high >>> 0x0) * 0x100000000 + (this.low >>> 0x0) : this.high * 0x100000000 + (this.low >>> 0x0);
        };
        _0xa5f420.toString = function (_0x4f316c) {
          if ((_0x4f316c = _0x4f316c || 0xa) < 0x2 || 0x24 < _0x4f316c) {
            throw RangeError("radix");
          }
          if (this.isZero()) {
            return '0';
          }
          if (this.isNegative()) {
            if (this.eq(_0x3ae0ea)) {
              var _0x5139b2 = _0x1adeed(_0x4f316c);
              var _0xd98a1e = this.div(_0x5139b2);
              var _0x373648 = _0xd98a1e.mul(_0x5139b2).sub(this);
              return _0xd98a1e.toString(_0x4f316c) + _0x373648.toInt().toString(_0x4f316c);
            }
            return '-' + this.neg().toString(_0x4f316c);
          }
          var _0x7b4a63 = _0x1adeed(_0x2ac9f0(_0x4f316c, 0x6), this.unsigned);
          var _0x1b7703 = this;
          for (var _0x32a7db = '';;) {
            var _0x52ccab = _0x1b7703.div(_0x7b4a63);
            var _0x17f8f5 = (_0x1b7703.sub(_0x52ccab.mul(_0x7b4a63)).toInt() >>> 0x0).toString(_0x4f316c);
            if ((_0x1b7703 = _0x52ccab).isZero()) {
              return _0x17f8f5 + _0x32a7db;
            }
            for (; _0x17f8f5.length < 0x6;) {
              _0x17f8f5 = '0' + _0x17f8f5;
            }
            _0x32a7db = '' + _0x17f8f5 + _0x32a7db;
          }
        };
        _0xa5f420.getHighBits = function () {
          return this.high;
        };
        _0xa5f420.getHighBitsUnsigned = function () {
          return this.high >>> 0x0;
        };
        _0xa5f420.getLowBits = function () {
          return this.low;
        };
        _0xa5f420.getLowBitsUnsigned = function () {
          return this.low >>> 0x0;
        };
        _0xa5f420.getNumBitsAbs = function () {
          if (this.isNegative()) {
            return this.eq(_0x3ae0ea) ? 0x40 : this.neg().getNumBitsAbs();
          }
          var _0x220245 = 0x0 != this.high ? this.high : this.low;
          for (var _0x4fbb35 = 0x1f; _0x4fbb35 > 0x0 && 0x0 == (_0x220245 & 0x1 << _0x4fbb35); _0x4fbb35--) {
            ;
          }
          return 0x0 != this.high ? _0x4fbb35 + 0x21 : _0x4fbb35 + 0x1;
        };
        _0xa5f420.isZero = function () {
          return 0x0 === this.high && 0x0 === this.low;
        };
        _0xa5f420.eqz = _0xa5f420.isZero;
        _0xa5f420.isNegative = function () {
          return !this.unsigned && this.high < 0x0;
        };
        _0xa5f420.isPositive = function () {
          return this.unsigned || this.high >= 0x0;
        };
        _0xa5f420.isOdd = function () {
          return 0x1 == (0x1 & this.low);
        };
        _0xa5f420.isEven = function () {
          return 0x0 == (0x1 & this.low);
        };
        _0xa5f420.equals = function (_0x3e7a75) {
          if (!(true === (_0x3e7a75 && _0x3e7a75.__isLong__))) {
            _0x3e7a75 = "number" == typeof _0x3e7a75 ? _0x1adeed(_0x3e7a75, undefined) : "string" == typeof _0x3e7a75 ? _0x437e7a(_0x3e7a75, undefined) : new _0x3a77ad(_0x3e7a75.low, _0x3e7a75.high, _0x3e7a75.unsigned);
          }
          return (this.unsigned === _0x3e7a75.unsigned || this.high >>> 0x1f != 0x1 || _0x3e7a75.high >>> 0x1f != 0x1) && this.high === _0x3e7a75.high && this.low === _0x3e7a75.low;
        };
        _0xa5f420.eq = _0xa5f420.equals;
        _0xa5f420.notEquals = function (_0x4df160) {
          return !this.eq(_0x4df160);
        };
        _0xa5f420.neq = _0xa5f420.notEquals;
        _0xa5f420.ne = _0xa5f420.notEquals;
        _0xa5f420.lessThan = function (_0x2a3224) {
          return this.comp(_0x2a3224) < 0x0;
        };
        _0xa5f420.lt = _0xa5f420.lessThan;
        _0xa5f420.lessThanOrEqual = function (_0x2d58ca) {
          return this.comp(_0x2d58ca) <= 0x0;
        };
        _0xa5f420.lte = _0xa5f420.lessThanOrEqual;
        _0xa5f420.le = _0xa5f420.lessThanOrEqual;
        _0xa5f420.greaterThan = function (_0x5579bb) {
          return this.comp(_0x5579bb) > 0x0;
        };
        _0xa5f420.gt = _0xa5f420.greaterThan;
        _0xa5f420.greaterThanOrEqual = function (_0x59548f) {
          return this.comp(_0x59548f) >= 0x0;
        };
        _0xa5f420.gte = _0xa5f420.greaterThanOrEqual;
        _0xa5f420.ge = _0xa5f420.greaterThanOrEqual;
        _0xa5f420.compare = function (_0x5d69f1) {
          if (!(true === (_0x5d69f1 && _0x5d69f1.__isLong__))) {
            _0x5d69f1 = "number" == typeof _0x5d69f1 ? _0x1adeed(_0x5d69f1, undefined) : "string" == typeof _0x5d69f1 ? _0x437e7a(_0x5d69f1, undefined) : new _0x3a77ad(_0x5d69f1.low, _0x5d69f1.high, _0x5d69f1.unsigned);
          }
          if (this.eq(_0x5d69f1)) {
            return 0x0;
          }
          var _0x1971b2 = this.isNegative();
          var _0x41a05b = _0x5d69f1.isNegative();
          return _0x1971b2 && !_0x41a05b ? -0x1 : !_0x1971b2 && _0x41a05b ? 0x1 : this.unsigned ? _0x5d69f1.high >>> 0x0 > this.high >>> 0x0 || _0x5d69f1.high === this.high && _0x5d69f1.low >>> 0x0 > this.low >>> 0x0 ? -0x1 : 0x1 : this.sub(_0x5d69f1).isNegative() ? -0x1 : 0x1;
        };
        _0xa5f420.comp = _0xa5f420.compare;
        _0xa5f420.negate = function () {
          return !this.unsigned && this.eq(_0x3ae0ea) ? _0x3ae0ea : this.not().add(_0x5708a0);
        };
        _0xa5f420.neg = _0xa5f420.negate;
        _0xa5f420.add = function (_0x214345) {
          if (!(true === (_0x214345 && _0x214345.__isLong__))) {
            _0x214345 = "number" == typeof _0x214345 ? _0x1adeed(_0x214345, undefined) : "string" == typeof _0x214345 ? _0x437e7a(_0x214345, undefined) : new _0x3a77ad(_0x214345.low, _0x214345.high, _0x214345.unsigned);
          }
          var _0x34f26b = this.high >>> 0x10;
          var _0x1c6d0e = 0xffff & this.high;
          var _0x31dddc = this.low >>> 0x10;
          var _0x590d94 = 0xffff & this.low;
          var _0x37b79b = _0x214345.high >>> 0x10;
          var _0x266d00 = 0xffff & _0x214345.high;
          var _0x342bd1 = _0x214345.low >>> 0x10;
          var _0x5d059c = 0x0;
          var _0x187bb7 = 0x0;
          var _0x52270b = 0x0;
          var _0x3e744b = 0x0;
          _0x52270b += (_0x3e744b += _0x590d94 + (0xffff & _0x214345.low)) >>> 0x10;
          _0x187bb7 += (_0x52270b += _0x31dddc + _0x342bd1) >>> 0x10;
          _0x5d059c += (_0x187bb7 += _0x1c6d0e + _0x266d00) >>> 0x10;
          _0x5d059c += _0x34f26b + _0x37b79b;
          return new _0x3a77ad((_0x52270b &= 0xffff) << 0x10 | (_0x3e744b &= 0xffff), (_0x5d059c &= 0xffff) << 0x10 | (_0x187bb7 &= 0xffff), this.unsigned);
        };
        _0xa5f420.subtract = function (_0x5be98f) {
          if (!(true === (_0x5be98f && _0x5be98f.__isLong__))) {
            _0x5be98f = "number" == typeof _0x5be98f ? _0x1adeed(_0x5be98f, undefined) : "string" == typeof _0x5be98f ? _0x437e7a(_0x5be98f, undefined) : new _0x3a77ad(_0x5be98f.low, _0x5be98f.high, _0x5be98f.unsigned);
          }
          return this.add(_0x5be98f.neg());
        };
        _0xa5f420.sub = _0xa5f420.subtract;
        _0xa5f420.multiply = function (_0x2b66bf) {
          if (this.isZero()) {
            return _0x46fb0c;
          }
          if (!(true === (_0x2b66bf && _0x2b66bf.__isLong__))) {
            _0x2b66bf = "number" == typeof _0x2b66bf ? _0x1adeed(_0x2b66bf, undefined) : "string" == typeof _0x2b66bf ? _0x437e7a(_0x2b66bf, undefined) : new _0x3a77ad(_0x2b66bf.low, _0x2b66bf.high, _0x2b66bf.unsigned);
          }
          if (_0x52eda1) {
            return new _0x3a77ad(_0x52eda1.mul(this.low, this.high, _0x2b66bf.low, _0x2b66bf.high), _0x52eda1.get_high(), this.unsigned);
          }
          if (_0x2b66bf.isZero()) {
            return _0x46fb0c;
          }
          if (this.eq(_0x3ae0ea)) {
            return _0x2b66bf.isOdd() ? _0x3ae0ea : _0x46fb0c;
          }
          if (_0x2b66bf.eq(_0x3ae0ea)) {
            return this.isOdd() ? _0x3ae0ea : _0x46fb0c;
          }
          if (this.isNegative()) {
            return _0x2b66bf.isNegative() ? this.neg().mul(_0x2b66bf.neg()) : this.neg().mul(_0x2b66bf).neg();
          }
          if (_0x2b66bf.isNegative()) {
            return this.mul(_0x2b66bf.neg()).neg();
          }
          if (this.lt(_0x5a9bf5) && _0x2b66bf.lt(_0x5a9bf5)) {
            return _0x1adeed(this.toNumber() * _0x2b66bf.toNumber(), this.unsigned);
          }
          var _0xd45e5b = this.high >>> 0x10;
          var _0x5c5994 = 0xffff & this.high;
          var _0x690718 = this.low >>> 0x10;
          var _0x272b98 = 0xffff & this.low;
          var _0x19637f = _0x2b66bf.high >>> 0x10;
          var _0x482fb9 = 0xffff & _0x2b66bf.high;
          var _0x525299 = _0x2b66bf.low >>> 0x10;
          var _0x1cdec6 = 0xffff & _0x2b66bf.low;
          var _0x1d562d = 0x0;
          var _0x157dad = 0x0;
          var _0x320c0d = 0x0;
          var _0xb71a6b = 0x0;
          _0x320c0d += (_0xb71a6b += _0x272b98 * _0x1cdec6) >>> 0x10;
          _0x157dad += (_0x320c0d += _0x690718 * _0x1cdec6) >>> 0x10;
          _0x320c0d &= 0xffff;
          _0x157dad += (_0x320c0d += _0x272b98 * _0x525299) >>> 0x10;
          _0x1d562d += (_0x157dad += _0x5c5994 * _0x1cdec6) >>> 0x10;
          _0x157dad &= 0xffff;
          _0x1d562d += (_0x157dad += _0x690718 * _0x525299) >>> 0x10;
          _0x157dad &= 0xffff;
          _0x1d562d += (_0x157dad += _0x272b98 * _0x482fb9) >>> 0x10;
          _0x1d562d += _0xd45e5b * _0x1cdec6 + _0x5c5994 * _0x525299 + _0x690718 * _0x482fb9 + _0x272b98 * _0x19637f;
          return new _0x3a77ad((_0x320c0d &= 0xffff) << 0x10 | (_0xb71a6b &= 0xffff), (_0x1d562d &= 0xffff) << 0x10 | (_0x157dad &= 0xffff), this.unsigned);
        };
        _0xa5f420.mul = _0xa5f420.multiply;
        _0xa5f420.divide = function (_0x36b4b6) {
          if (!(true === (_0x36b4b6 && _0x36b4b6.__isLong__))) {
            _0x36b4b6 = "number" == typeof _0x36b4b6 ? _0x1adeed(_0x36b4b6, undefined) : "string" == typeof _0x36b4b6 ? _0x437e7a(_0x36b4b6, undefined) : new _0x3a77ad(_0x36b4b6.low, _0x36b4b6.high, _0x36b4b6.unsigned);
          }
          if (_0x36b4b6.isZero()) {
            throw Error("division by zero");
          }
          var _0x5b558f;
          var _0x5a386b;
          var _0x27a026;
          if (_0x52eda1) {
            return this.unsigned || -0x80000000 !== this.high || -0x1 !== _0x36b4b6.low || -0x1 !== _0x36b4b6.high ? new _0x3a77ad((this.unsigned ? _0x52eda1.div_u : _0x52eda1.div_s)(this.low, this.high, _0x36b4b6.low, _0x36b4b6.high), _0x52eda1.get_high(), this.unsigned) : this;
          }
          if (this.isZero()) {
            return this.unsigned ? _0x5dacde : _0x46fb0c;
          }
          if (this.unsigned) {
            if (!_0x36b4b6.unsigned) {
              _0x36b4b6 = _0x36b4b6.toUnsigned();
            }
            if (_0x36b4b6.gt(this)) {
              return _0x5dacde;
            }
            if (_0x36b4b6.gt(this.shru(0x1))) {
              return _0x1ec574;
            }
            _0x27a026 = _0x5dacde;
          } else {
            if (this.eq(_0x3ae0ea)) {
              return _0x36b4b6.eq(_0x5708a0) || _0x36b4b6.eq(_0x4cce78) ? _0x3ae0ea : _0x36b4b6.eq(_0x3ae0ea) ? _0x5708a0 : (_0x5b558f = this.shr(0x1).div(_0x36b4b6).shl(0x1)).eq(_0x46fb0c) ? _0x36b4b6.isNegative() ? _0x5708a0 : _0x4cce78 : (_0x5a386b = this.sub(_0x36b4b6.mul(_0x5b558f)), _0x27a026 = _0x5b558f.add(_0x5a386b.div(_0x36b4b6)));
            }
            if (_0x36b4b6.eq(_0x3ae0ea)) {
              return this.unsigned ? _0x5dacde : _0x46fb0c;
            }
            if (this.isNegative()) {
              return _0x36b4b6.isNegative() ? this.neg().div(_0x36b4b6.neg()) : this.neg().div(_0x36b4b6).neg();
            }
            if (_0x36b4b6.isNegative()) {
              return this.div(_0x36b4b6.neg()).neg();
            }
            _0x27a026 = _0x46fb0c;
          }
          for (_0x5a386b = this; _0x5a386b.gte(_0x36b4b6);) {
            _0x5b558f = Math.max(0x1, Math.floor(_0x5a386b.toNumber() / _0x36b4b6.toNumber()));
            var _0x597300 = Math.ceil(Math.log(_0x5b558f) / Math.LN2);
            var _0x32d982 = _0x597300 <= 0x30 ? 0x1 : _0x2ac9f0(0x2, _0x597300 - 0x30);
            var _0x599762 = _0x1adeed(_0x5b558f);
            for (var _0x4ee17d = _0x599762.mul(_0x36b4b6); _0x4ee17d.isNegative() || _0x4ee17d.gt(_0x5a386b);) {
              _0x4ee17d = (_0x599762 = _0x1adeed(_0x5b558f -= _0x32d982, this.unsigned)).mul(_0x36b4b6);
            }
            if (_0x599762.isZero()) {
              _0x599762 = _0x5708a0;
            }
            _0x27a026 = _0x27a026.add(_0x599762);
            _0x5a386b = _0x5a386b.sub(_0x4ee17d);
          }
          return _0x27a026;
        };
        _0xa5f420.div = _0xa5f420.divide;
        _0xa5f420.modulo = function (_0x2f7b0e) {
          if (!(true === (_0x2f7b0e && _0x2f7b0e.__isLong__))) {
            _0x2f7b0e = "number" == typeof _0x2f7b0e ? _0x1adeed(_0x2f7b0e, undefined) : "string" == typeof _0x2f7b0e ? _0x437e7a(_0x2f7b0e, undefined) : new _0x3a77ad(_0x2f7b0e.low, _0x2f7b0e.high, _0x2f7b0e.unsigned);
          }
          return _0x52eda1 ? new _0x3a77ad((this.unsigned ? _0x52eda1.rem_u : _0x52eda1.rem_s)(this.low, this.high, _0x2f7b0e.low, _0x2f7b0e.high), _0x52eda1.get_high(), this.unsigned) : this.sub(this.div(_0x2f7b0e).mul(_0x2f7b0e));
        };
        _0xa5f420.mod = _0xa5f420.modulo;
        _0xa5f420.rem = _0xa5f420.modulo;
        _0xa5f420.not = function () {
          return new _0x3a77ad(~this.low, ~this.high, this.unsigned);
        };
        _0xa5f420.and = function (_0x5bb143) {
          if (!(true === (_0x5bb143 && _0x5bb143.__isLong__))) {
            _0x5bb143 = "number" == typeof _0x5bb143 ? _0x1adeed(_0x5bb143, undefined) : "string" == typeof _0x5bb143 ? _0x437e7a(_0x5bb143, undefined) : new _0x3a77ad(_0x5bb143.low, _0x5bb143.high, _0x5bb143.unsigned);
          }
          return new _0x3a77ad(this.low & _0x5bb143.low, this.high & _0x5bb143.high, this.unsigned);
        };
        _0xa5f420.or = function (_0x104fd1) {
          if (!(true === (_0x104fd1 && _0x104fd1.__isLong__))) {
            _0x104fd1 = "number" == typeof _0x104fd1 ? _0x1adeed(_0x104fd1, undefined) : "string" == typeof _0x104fd1 ? _0x437e7a(_0x104fd1, undefined) : new _0x3a77ad(_0x104fd1.low, _0x104fd1.high, _0x104fd1.unsigned);
          }
          return new _0x3a77ad(this.low | _0x104fd1.low, this.high | _0x104fd1.high, this.unsigned);
        };
        _0xa5f420.xor = function (_0xa154f9) {
          if (!(true === (_0xa154f9 && _0xa154f9.__isLong__))) {
            _0xa154f9 = "number" == typeof _0xa154f9 ? _0x1adeed(_0xa154f9, undefined) : "string" == typeof _0xa154f9 ? _0x437e7a(_0xa154f9, undefined) : new _0x3a77ad(_0xa154f9.low, _0xa154f9.high, _0xa154f9.unsigned);
          }
          return new _0x3a77ad(this.low ^ _0xa154f9.low, this.high ^ _0xa154f9.high, this.unsigned);
        };
        _0xa5f420.shiftLeft = function (_0x31f4b6) {
          if (true === (_0x31f4b6 && _0x31f4b6.__isLong__)) {
            _0x31f4b6 = _0x31f4b6.toInt();
          }
          return 0x0 == (_0x31f4b6 &= 0x3f) ? this : _0x31f4b6 < 0x20 ? new _0x3a77ad(this.low << _0x31f4b6, this.high << _0x31f4b6 | this.low >>> 0x20 - _0x31f4b6, this.unsigned) : new _0x3a77ad(0x0, this.low << _0x31f4b6 - 0x20, this.unsigned);
        };
        _0xa5f420.shl = _0xa5f420.shiftLeft;
        _0xa5f420.shiftRight = function (_0x136add) {
          if (true === (_0x136add && _0x136add.__isLong__)) {
            _0x136add = _0x136add.toInt();
          }
          return 0x0 == (_0x136add &= 0x3f) ? this : _0x136add < 0x20 ? new _0x3a77ad(this.low >>> _0x136add | this.high << 0x20 - _0x136add, this.high >> _0x136add, this.unsigned) : new _0x3a77ad(this.high >> _0x136add - 0x20, this.high >= 0x0 ? 0x0 : -0x1, this.unsigned);
        };
        _0xa5f420.shr = _0xa5f420.shiftRight;
        _0xa5f420.shiftRightUnsigned = function (_0x2d677f) {
          if (true === (_0x2d677f && _0x2d677f.__isLong__)) {
            _0x2d677f = _0x2d677f.toInt();
          }
          if (0x0 === (_0x2d677f &= 0x3f)) {
            return this;
          }
          var _0x3b6248 = this.high;
          return _0x2d677f < 0x20 ? new _0x3a77ad(this.low >>> _0x2d677f | _0x3b6248 << 0x20 - _0x2d677f, _0x3b6248 >>> _0x2d677f, this.unsigned) : new _0x3a77ad(0x20 === _0x2d677f ? _0x3b6248 : _0x3b6248 >>> _0x2d677f - 0x20, 0x0, this.unsigned);
        };
        _0xa5f420.shru = _0xa5f420.shiftRightUnsigned;
        _0xa5f420.shr_u = _0xa5f420.shiftRightUnsigned;
        _0xa5f420.toSigned = function () {
          return this.unsigned ? new _0x3a77ad(this.low, this.high, false) : this;
        };
        _0xa5f420.toUnsigned = function () {
          return this.unsigned ? this : new _0x3a77ad(this.low, this.high, true);
        };
        _0xa5f420.toBytes = function (_0x40cff5) {
          return _0x40cff5 ? this.toBytesLE() : this.toBytesBE();
        };
        _0xa5f420.toBytesLE = function () {
          var _0x34623f = this.high;
          var _0xe1659e = this.low;
          return [0xff & _0xe1659e, _0xe1659e >>> 0x8 & 0xff, _0xe1659e >>> 0x10 & 0xff, _0xe1659e >>> 0x18, 0xff & _0x34623f, _0x34623f >>> 0x8 & 0xff, _0x34623f >>> 0x10 & 0xff, _0x34623f >>> 0x18];
        };
        _0xa5f420.toBytesBE = function () {
          var _0x72cbb4 = this.high;
          var _0x314fa8 = this.low;
          return [_0x72cbb4 >>> 0x18, _0x72cbb4 >>> 0x10 & 0xff, _0x72cbb4 >>> 0x8 & 0xff, 0xff & _0x72cbb4, _0x314fa8 >>> 0x18, _0x314fa8 >>> 0x10 & 0xff, _0x314fa8 >>> 0x8 & 0xff, 0xff & _0x314fa8];
        };
        _0x3a77ad.fromBytes = function (_0x55b04e, _0x58bf5c, _0x4cb97a) {
          return _0x4cb97a ? _0x3a77ad.fromBytesLE(_0x55b04e, _0x58bf5c) : _0x3a77ad.fromBytesBE(_0x55b04e, _0x58bf5c);
        };
        _0x3a77ad.fromBytesLE = function (_0x45c14f, _0x4aef2e) {
          return new _0x3a77ad(_0x45c14f[0x0] | _0x45c14f[0x1] << 0x8 | _0x45c14f[0x2] << 0x10 | _0x45c14f[0x3] << 0x18, _0x45c14f[0x4] | _0x45c14f[0x5] << 0x8 | _0x45c14f[0x6] << 0x10 | _0x45c14f[0x7] << 0x18, _0x4aef2e);
        };
        _0x3a77ad.fromBytesBE = function (_0x5cd011, _0x570608) {
          return new _0x3a77ad(_0x5cd011[0x4] << 0x18 | _0x5cd011[0x5] << 0x10 | _0x5cd011[0x6] << 0x8 | _0x5cd011[0x7], _0x5cd011[0x0] << 0x18 | _0x5cd011[0x1] << 0x10 | _0x5cd011[0x2] << 0x8 | _0x5cd011[0x3], _0x570608);
        };
        _0x379512 = _0x3d4539.exports;
      }, {});
      _0x50443a.require('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/long/src/long.js');
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js", function (_0x3accca, _0x646936, _0x2029f2, _0x231d27, _0x33e2a5) {
        function _0xd4753a(_0xf6606a, _0x17e446) {
          if ("string" == typeof _0xf6606a) {
            _0x17e446 = _0xf6606a;
            _0xf6606a = undefined;
          }
          var _0x3f380d = [];
          function _0x2b93ee(_0x4b37a1) {
            if ('string' != typeof _0x4b37a1) {
              var _0x140929 = "function " + (undefined || _0x17e446 || '') + '(' + (_0xf6606a && _0xf6606a.join(',') || '') + "){\n  " + _0x3f380d.join("\n  ") + "\n}";
              if (_0xd4753a.verbose) {
                console.log("codegen: " + _0x140929);
              }
              _0x140929 = "return " + _0x140929;
              if (_0x4b37a1) {
                var _0x1deeac = Object.keys(_0x4b37a1);
                var _0x3d55a0 = new Array(_0x1deeac.length + 0x1);
                var _0x1e509c = new Array(_0x1deeac.length);
                for (var _0x109524 = 0x0; _0x109524 < _0x1deeac.length;) {
                  _0x3d55a0[_0x109524] = _0x1deeac[_0x109524];
                  _0x1e509c[_0x109524] = _0x4b37a1[_0x1deeac[_0x109524++]];
                }
                _0x3d55a0[_0x109524] = _0x140929;
                return Function.apply(null, _0x3d55a0).apply(null, _0x1e509c);
              }
              return Function(_0x140929)();
            }
            var _0x4906e4 = new Array(arguments.length - 0x1);
            for (var _0x2d9e25 = 0x0; _0x2d9e25 < _0x4906e4.length;) {
              _0x4906e4[_0x2d9e25] = arguments[++_0x2d9e25];
            }
            _0x2d9e25 = 0x0;
            _0x4b37a1 = _0x4b37a1.replace(/%([%dfijs])/g, function (_0x223e35, _0x56f20f) {
              var _0x25e2dc = _0x4906e4[_0x2d9e25++];
              switch (_0x56f20f) {
                case 'd':
                case 'f':
                  return String(Number(_0x25e2dc));
                case 'i':
                  return String(Math.floor(_0x25e2dc));
                case 'j':
                  return JSON.stringify(_0x25e2dc);
                case 's':
                  return String(_0x25e2dc);
              }
              return '%';
            });
            if (_0x2d9e25 !== _0x4906e4.length) {
              throw Error("parameter count mismatch");
            }
            _0x3f380d.push(_0x4b37a1);
            return _0x2b93ee;
          }
          function _0x247593(_0x282831) {
            return "function " + (_0x282831 || _0x17e446 || '') + '(' + (_0xf6606a && _0xf6606a.join(',') || '') + "){\n  " + _0x3f380d.join("\n  ") + "\n}";
          }
          _0x2b93ee.toString = _0x247593;
          return _0x2b93ee;
        }
        _0x2029f2.exports = _0xd4753a;
        _0xd4753a.verbose = false;
        _0x2029f2.exports;
      }, {});
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js", function (_0x4b2be3, _0xb47698, _0x2196d3, _0x1c6011, _0x45ce1d) {
        _0x2196d3.exports = _0xac4309;
        var _0x41635b = _0xb47698("@protobufjs/aspromise");
        var _0x20c0fe = _0xb47698("@protobufjs/inquire")('fs');
        function _0xac4309(_0x16f6c1, _0x315651, _0x209384) {
          if ("function" == typeof _0x315651) {
            _0x209384 = _0x315651;
            _0x315651 = {};
          } else if (!_0x315651) {
            _0x315651 = {};
          }
          return _0x209384 ? !_0x315651.xhr && _0x20c0fe && _0x20c0fe.readFile ? _0x20c0fe.readFile(_0x16f6c1, function (_0x1529a6, _0x379824) {
            return _0x1529a6 && "undefined" != typeof XMLHttpRequest ? _0xac4309.xhr(_0x16f6c1, _0x315651, _0x209384) : _0x1529a6 ? _0x209384(_0x1529a6) : _0x209384(null, _0x315651.binary ? _0x379824 : _0x379824.toString('utf8'));
          }) : _0xac4309.xhr(_0x16f6c1, _0x315651, _0x209384) : _0x41635b(_0xac4309, this, _0x16f6c1, _0x315651);
        }
        _0xac4309.xhr = function (_0x29c7dc, _0x45edb8, _0x24f79f) {
          var _0xac0a2a = new XMLHttpRequest();
          _0xac0a2a.onreadystatechange = function () {
            if (0x4 === _0xac0a2a.readyState) {
              if (0x0 !== _0xac0a2a.status && 0xc8 !== _0xac0a2a.status) {
                return _0x24f79f(Error("status " + _0xac0a2a.status));
              }
              if (_0x45edb8.binary) {
                var _0x3753de = _0xac0a2a.response;
                if (!_0x3753de) {
                  _0x3753de = [];
                  for (var _0x41ec96 = 0x0; _0x41ec96 < _0xac0a2a.responseText.length; ++_0x41ec96) {
                    _0x3753de.push(0xff & _0xac0a2a.responseText.charCodeAt(_0x41ec96));
                  }
                }
                return _0x24f79f(null, "undefined" != typeof Uint8Array ? new Uint8Array(_0x3753de) : _0x3753de);
              }
              return _0x24f79f(null, _0xac0a2a.responseText);
            }
          };
          if (_0x45edb8.binary) {
            if ('overrideMimeType' in _0xac0a2a) {
              _0xac0a2a.overrideMimeType("text/plain; charset=x-user-defined");
            }
            _0xac0a2a.responseType = "arraybuffer";
          }
          _0xac0a2a.open("GET", _0x29c7dc);
          _0xac0a2a.send();
        };
        _0x2196d3.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          '@protobufjs/inquire': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js'
        };
      });
      _0x50443a.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/@protobufjs/path/index.js', function (_0x2774ab, _0x3ded43, _0x243b6d, _0x298f3f, _0xc59814) {
        var _0x1a7fcd = _0x2774ab.isAbsolute = function (_0x4f0f46) {
          return /^(?:\/|\w+:)/.test(_0x4f0f46);
        };
        var _0x2c7956 = _0x2774ab.normalize = function (_0x4ef9d6) {
          var _0x28adf4 = (_0x4ef9d6 = _0x4ef9d6.replace(/\\/g, '/').replace(/\/{2,}/g, '/')).split('/');
          var _0x246292 = _0x1a7fcd(_0x4ef9d6);
          var _0x2130f5 = '';
          if (_0x246292) {
            _0x2130f5 = _0x28adf4.shift() + '/';
          }
          for (var _0x4af7eb = 0x0; _0x4af7eb < _0x28adf4.length;) {
            if ('..' === _0x28adf4[_0x4af7eb]) {
              if (_0x4af7eb > 0x0 && '..' !== _0x28adf4[_0x4af7eb - 0x1]) {
                _0x28adf4.splice(--_0x4af7eb, 0x2);
              } else if (_0x246292) {
                _0x28adf4.splice(_0x4af7eb, 0x1);
              } else {
                ++_0x4af7eb;
              }
            } else if ('.' === _0x28adf4[_0x4af7eb]) {
              _0x28adf4.splice(_0x4af7eb, 0x1);
            } else {
              ++_0x4af7eb;
            }
          }
          return _0x2130f5 + _0x28adf4.join('/');
        };
        _0x2774ab.resolve = function (_0x3d8161, _0x1bc2c0, _0x52bff8) {
          if (!_0x52bff8) {
            _0x1bc2c0 = _0x2c7956(_0x1bc2c0);
          }
          return _0x1a7fcd(_0x1bc2c0) ? _0x1bc2c0 : (_0x52bff8 || (_0x3d8161 = _0x2c7956(_0x3d8161)), (_0x3d8161 = _0x3d8161.replace(/(?:\/|^)[^/]+$/, '')).length ? _0x2c7956(_0x3d8161 + '/' + _0x1bc2c0) : _0x1bc2c0);
        };
        _0x243b6d.exports;
      }, {});
      _0x50443a.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/types.js', function (_0x264a4c, _0x27038e, _0x14262e, _0x8c9756, _0x3d1a2e) {
        var _0x4394eb = _0x27038e('./util');
        var _0x3a50cf = ['double', "float", "int32", "uint32", 'sint32', 'fixed32', "sfixed32", 'int64', "uint64", 'sint64', 'fixed64', "sfixed64", "bool", "string", "bytes"];
        function _0x5de1b7(_0x10bcc6, _0x14a593) {
          var _0x40331e = 0x0;
          var _0x165f4d = {};
          for (_0x14a593 |= 0x0; _0x40331e < _0x10bcc6.length;) {
            _0x165f4d[_0x3a50cf[_0x40331e + _0x14a593]] = _0x10bcc6[_0x40331e++];
          }
          return _0x165f4d;
        }
        _0x264a4c.basic = _0x5de1b7([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2, 0x2]);
        _0x264a4c.defaults = _0x5de1b7([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, false, '', _0x4394eb.emptyArray, null]);
        _0x264a4c.long = _0x5de1b7([0x0, 0x0, 0x0, 0x1, 0x1], 0x7);
        _0x264a4c.mapKey = _0x5de1b7([0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2], 0x2);
        _0x264a4c.packed = _0x5de1b7([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0]);
        _0x14262e.exports;
      }, function () {
        return {
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/field.js", function (_0x5c62f6, _0xbda0f3, _0x4c8e8b, _0x112f23, _0x1d3f7c) {
        _0x4c8e8b.exports = _0x468e21;
        var _0x4ced15 = _0xbda0f3("./object");
        ((_0x468e21.prototype = Object.create(_0x4ced15.prototype)).constructor = _0x468e21).className = "Field";
        var _0x55804c;
        var _0x94614a = _0xbda0f3('./enum');
        var _0x198d90 = _0xbda0f3("./types");
        var _0x520538 = _0xbda0f3("./util");
        var _0x1492ad = /^required|optional|repeated$/;
        function _0x468e21(_0x53f5c8, _0x3ef6f6, _0x1bb4c8, _0x41d267, _0x570fdd, _0x38dc8a, _0x243a52) {
          if (_0x520538.isObject(_0x41d267)) {
            _0x243a52 = _0x570fdd;
            _0x38dc8a = _0x41d267;
            _0x41d267 = _0x570fdd = undefined;
          } else if (_0x520538.isObject(_0x570fdd)) {
            _0x243a52 = _0x38dc8a;
            _0x38dc8a = _0x570fdd;
            _0x570fdd = undefined;
          }
          _0x4ced15.call(this, _0x53f5c8, _0x38dc8a);
          if (!_0x520538.isInteger(_0x3ef6f6) || _0x3ef6f6 < 0x0) {
            throw TypeError("id must be a non-negative integer");
          }
          if (!_0x520538.isString(_0x1bb4c8)) {
            throw TypeError("type must be a string");
          }
          if (undefined !== _0x41d267 && !_0x1492ad.test(_0x41d267 = _0x41d267.toString().toLowerCase())) {
            throw TypeError("rule must be a string rule");
          }
          if (undefined !== _0x570fdd && !_0x520538.isString(_0x570fdd)) {
            throw TypeError("extend must be a string");
          }
          if ("proto3_optional" === _0x41d267) {
            _0x41d267 = 'optional';
          }
          this.rule = _0x41d267 && "optional" !== _0x41d267 ? _0x41d267 : undefined;
          this.type = _0x1bb4c8;
          this.id = _0x3ef6f6;
          this.extend = _0x570fdd || undefined;
          this.required = "required" === _0x41d267;
          this.optional = !this.required;
          this.repeated = 'repeated' === _0x41d267;
          this.map = false;
          this.message = null;
          this.partOf = null;
          this.typeDefault = null;
          this.defaultValue = null;
          this.long = !!_0x520538.Long && undefined !== _0x198d90.long[_0x1bb4c8];
          this.bytes = 'bytes' === _0x1bb4c8;
          this.resolvedType = null;
          this.extensionField = null;
          this.declaringField = null;
          this._packed = null;
          this.comment = _0x243a52;
        }
        _0x468e21.fromJSON = function (_0x2d2b56, _0x12cb68) {
          return new _0x468e21(_0x2d2b56, _0x12cb68.id, _0x12cb68.type, _0x12cb68.rule, _0x12cb68.extend, _0x12cb68.options, _0x12cb68.comment);
        };
        Object.defineProperty(_0x468e21.prototype, "packed", {
          'get': function () {
            if (null === this._packed) {
              this._packed = false !== this.getOption('packed');
            }
            return this._packed;
          }
        });
        _0x468e21.prototype.setOption = function (_0x5eecb5, _0xe7f8c4, _0x396b44) {
          if ("packed" === _0x5eecb5) {
            this._packed = null;
          }
          return _0x4ced15.prototype.setOption.call(this, _0x5eecb5, _0xe7f8c4, _0x396b44);
        };
        _0x468e21.prototype.toJSON = function (_0x9912f1) {
          var _0xf65e7 = !!_0x9912f1 && Boolean(_0x9912f1.keepComments);
          return _0x520538.toObject(["rule", 'optional' !== this.rule && this.rule || undefined, "type", this.type, 'id', this.id, "extend", this.extend, "options", this.options, 'comment', _0xf65e7 ? this.comment : undefined]);
        };
        _0x468e21.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === (this.typeDefault = _0x198d90.defaults[this.type])) {
            this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
            if (this.resolvedType instanceof _0x55804c) {
              this.typeDefault = null;
            } else {
              this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0x0]];
            }
          }
          if (this.options && null != this.options["default"]) {
            this.typeDefault = this.options["default"];
            if (this.resolvedType instanceof _0x94614a && "string" == typeof this.typeDefault) {
              this.typeDefault = this.resolvedType.values[this.typeDefault];
            }
          }
          if (this.options) {
            if (!(true !== this.options.packed && (undefined === this.options.packed || !this.resolvedType || this.resolvedType instanceof _0x94614a))) {
              delete this.options.packed;
            }
            if (!Object.keys(this.options).length) {
              this.options = undefined;
            }
          }
          if (this.long) {
            this.typeDefault = _0x520538.Long.fromNumber(this.typeDefault, 'u' === this.type.charAt(0x0));
            if (Object.freeze) {
              Object.freeze(this.typeDefault);
            }
          } else {
            if (this.bytes && 'string' == typeof this.typeDefault) {
              var _0x4cfaff;
              if (_0x520538.base64.test(this.typeDefault)) {
                _0x520538.base64.decode(this.typeDefault, _0x4cfaff = _0x520538.newBuffer(_0x520538.base64.length(this.typeDefault)), 0x0);
              } else {
                _0x520538.utf8.write(this.typeDefault, _0x4cfaff = _0x520538.newBuffer(_0x520538.utf8.length(this.typeDefault)), 0x0);
              }
              this.typeDefault = _0x4cfaff;
            }
          }
          if (this.map) {
            this.defaultValue = _0x520538.emptyObject;
          } else if (this.repeated) {
            this.defaultValue = _0x520538.emptyArray;
          } else {
            this.defaultValue = this.typeDefault;
          }
          if (this.parent instanceof _0x55804c) {
            this.parent.ctor.prototype[this.name] = this.defaultValue;
          }
          return _0x4ced15.prototype.resolve.call(this);
        };
        _0x468e21.d = function (_0xe2a127, _0x4370b0, _0x5cce78, _0x1adf9c) {
          if ("function" == typeof _0x4370b0) {
            _0x4370b0 = _0x520538.decorateType(_0x4370b0).name;
          } else if (_0x4370b0 && "object" == typeof _0x4370b0) {
            _0x4370b0 = _0x520538.decorateEnum(_0x4370b0).name;
          }
          return function (_0x47b6fa, _0x58e993) {
            _0x520538.decorateType(_0x47b6fa.constructor).add(new _0x468e21(_0x58e993, _0xe2a127, _0x4370b0, _0x5cce78, {
              'default': _0x1adf9c
            }));
          };
        };
        _0x468e21._configure = function (_0x4c073f) {
          _0x55804c = _0x4c073f;
        };
        _0x4c8e8b.exports;
      }, function () {
        return {
          './object': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './enum': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/enum.js',
          './types': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/types.js',
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js", function (_0x390842, _0x4ae70a, _0x40490, _0x12fcc7, _0x244273) {
        _0x40490.exports = _0x4e1ea4;
        var _0x6ae6d4 = _0x4ae70a('./object');
        ((_0x4e1ea4.prototype = Object.create(_0x6ae6d4.prototype)).constructor = _0x4e1ea4).className = "OneOf";
        var _0x57c0f8 = _0x4ae70a("./field");
        var _0x5a5030 = _0x4ae70a('./util');
        function _0x4e1ea4(_0x395fb5, _0x44e8bb, _0x283ef3, _0x1b38c3) {
          if (!Array.isArray(_0x44e8bb)) {
            _0x283ef3 = _0x44e8bb;
            _0x44e8bb = undefined;
          }
          _0x6ae6d4.call(this, _0x395fb5, _0x283ef3);
          if (undefined !== _0x44e8bb && !Array.isArray(_0x44e8bb)) {
            throw TypeError("fieldNames must be an Array");
          }
          this.oneof = _0x44e8bb || [];
          this.fieldsArray = [];
          this.comment = _0x1b38c3;
        }
        function _0xf6cb8d(_0xe95a9c) {
          if (_0xe95a9c.parent) {
            for (var _0x110faa = 0x0; _0x110faa < _0xe95a9c.fieldsArray.length; ++_0x110faa) {
              if (!_0xe95a9c.fieldsArray[_0x110faa].parent) {
                _0xe95a9c.parent.add(_0xe95a9c.fieldsArray[_0x110faa]);
              }
            }
          }
        }
        _0x4e1ea4.fromJSON = function (_0x58e1e5, _0xdc69ce) {
          return new _0x4e1ea4(_0x58e1e5, _0xdc69ce.oneof, _0xdc69ce.options, _0xdc69ce.comment);
        };
        _0x4e1ea4.prototype.toJSON = function (_0x549ce1) {
          var _0x5250c1 = !!_0x549ce1 && Boolean(_0x549ce1.keepComments);
          return _0x5a5030.toObject(["options", this.options, "oneof", this.oneof, "comment", _0x5250c1 ? this.comment : undefined]);
        };
        _0x4e1ea4.prototype.add = function (_0x2a34df) {
          if (!(_0x2a34df instanceof _0x57c0f8)) {
            throw TypeError("field must be a Field");
          }
          if (_0x2a34df.parent && _0x2a34df.parent !== this.parent) {
            _0x2a34df.parent.remove(_0x2a34df);
          }
          this.oneof.push(_0x2a34df.name);
          this.fieldsArray.push(_0x2a34df);
          _0x2a34df.partOf = this;
          _0xf6cb8d(this);
          return this;
        };
        _0x4e1ea4.prototype.remove = function (_0x12f952) {
          if (!(_0x12f952 instanceof _0x57c0f8)) {
            throw TypeError("field must be a Field");
          }
          var _0x217af8 = this.fieldsArray.indexOf(_0x12f952);
          if (_0x217af8 < 0x0) {
            throw Error(_0x12f952 + " is not a member of " + this);
          }
          this.fieldsArray.splice(_0x217af8, 0x1);
          if ((_0x217af8 = this.oneof.indexOf(_0x12f952.name)) > -0x1) {
            this.oneof.splice(_0x217af8, 0x1);
          }
          _0x12f952.partOf = null;
          return this;
        };
        _0x4e1ea4.prototype.onAdd = function (_0x4cfd68) {
          _0x6ae6d4.prototype.onAdd.call(this, _0x4cfd68);
          for (var _0x359ede = 0x0; _0x359ede < this.oneof.length; ++_0x359ede) {
            var _0x58072b = _0x4cfd68.get(this.oneof[_0x359ede]);
            if (_0x58072b && !_0x58072b.partOf) {
              _0x58072b.partOf = this;
              this.fieldsArray.push(_0x58072b);
            }
          }
          _0xf6cb8d(this);
        };
        _0x4e1ea4.prototype.onRemove = function (_0x26e1d9) {
          var _0x595f9;
          for (var _0x37ca08 = 0x0; _0x37ca08 < this.fieldsArray.length; ++_0x37ca08) {
            if ((_0x595f9 = this.fieldsArray[_0x37ca08]).parent) {
              _0x595f9.parent.remove(_0x595f9);
            }
          }
          _0x6ae6d4.prototype.onRemove.call(this, _0x26e1d9);
        };
        _0x4e1ea4.d = function () {
          var _0x5988b5 = new Array(arguments.length);
          for (var _0x1c391f = 0x0; _0x1c391f < arguments.length;) {
            _0x5988b5[_0x1c391f] = arguments[_0x1c391f++];
          }
          return function (_0x4cbb65, _0x7b120f) {
            _0x5a5030.decorateType(_0x4cbb65.constructor).add(new _0x4e1ea4(_0x7b120f, _0x5988b5));
            Object.defineProperty(_0x4cbb65, _0x7b120f, {
              'get': _0x5a5030.oneOfGetter(_0x5988b5),
              'set': _0x5a5030.oneOfSetter(_0x5988b5)
            });
          };
        };
        _0x40490.exports;
      }, function () {
        return {
          './object': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './field': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x50443a.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js', function (_0x14ba94, _0x292da4, _0x2b2513, _0xce1d8b, _0x56c023) {
        _0x2b2513.exports = _0x5258ea;
        var _0x1e6382 = _0x292da4("./object");
        ((_0x5258ea.prototype = Object.create(_0x1e6382.prototype)).constructor = _0x5258ea).className = 'Namespace';
        var _0x4ee904;
        var _0xbe4c73;
        var _0x2d38db;
        var _0x89c8cd = _0x292da4("./field");
        var _0x2e9f80 = _0x292da4("./oneof");
        var _0x204b01 = _0x292da4("./util");
        function _0x467760(_0x41e01d, _0x4449e0) {
          if (_0x41e01d && _0x41e01d.length) {
            var _0x104020 = {};
            for (var _0x515169 = 0x0; _0x515169 < _0x41e01d.length; ++_0x515169) {
              _0x104020[_0x41e01d[_0x515169].name] = _0x41e01d[_0x515169].toJSON(_0x4449e0);
            }
            return _0x104020;
          }
        }
        function _0x5258ea(_0x47c8b5, _0x5f94e4) {
          _0x1e6382.call(this, _0x47c8b5, _0x5f94e4);
          this.nested = undefined;
          this._nestedArray = null;
        }
        function _0x5d4cdf(_0x2b267b) {
          _0x2b267b._nestedArray = null;
          return _0x2b267b;
        }
        _0x5258ea.fromJSON = function (_0x3181ab, _0x2b3478) {
          return new _0x5258ea(_0x3181ab, _0x2b3478.options).addJSON(_0x2b3478.nested);
        };
        _0x5258ea.arrayToJSON = _0x467760;
        _0x5258ea.isReservedId = function (_0x1d1869, _0x1fed35) {
          if (_0x1d1869) {
            for (var _0x1b6bdd = 0x0; _0x1b6bdd < _0x1d1869.length; ++_0x1b6bdd) {
              if ("string" != typeof _0x1d1869[_0x1b6bdd] && _0x1d1869[_0x1b6bdd][0x0] <= _0x1fed35 && _0x1d1869[_0x1b6bdd][0x1] > _0x1fed35) {
                return true;
              }
            }
          }
          return false;
        };
        _0x5258ea.isReservedName = function (_0x4a1b34, _0x43d766) {
          if (_0x4a1b34) {
            for (var _0x244d11 = 0x0; _0x244d11 < _0x4a1b34.length; ++_0x244d11) {
              if (_0x4a1b34[_0x244d11] === _0x43d766) {
                return true;
              }
            }
          }
          return false;
        };
        Object.defineProperty(_0x5258ea.prototype, "nestedArray", {
          'get': function () {
            return this._nestedArray || (this._nestedArray = _0x204b01.toArray(this.nested));
          }
        });
        _0x5258ea.prototype.toJSON = function (_0x19e289) {
          return _0x204b01.toObject(["options", this.options, "nested", _0x467760(this.nestedArray, _0x19e289)]);
        };
        _0x5258ea.prototype.addJSON = function (_0x495703) {
          if (_0x495703) {
            var _0x27e12c;
            var _0x2beee6 = Object.keys(_0x495703);
            for (var _0x353f25 = 0x0; _0x353f25 < _0x2beee6.length; ++_0x353f25) {
              _0x27e12c = _0x495703[_0x2beee6[_0x353f25]];
              this.add((undefined !== _0x27e12c.fields ? _0x4ee904.fromJSON : undefined !== _0x27e12c.values ? _0x2d38db.fromJSON : undefined !== _0x27e12c.methods ? _0xbe4c73.fromJSON : undefined !== _0x27e12c.id ? _0x89c8cd.fromJSON : _0x5258ea.fromJSON)(_0x2beee6[_0x353f25], _0x27e12c));
            }
          }
          return this;
        };
        _0x5258ea.prototype.get = function (_0x5a3a75) {
          return this.nested && this.nested[_0x5a3a75] || null;
        };
        _0x5258ea.prototype.getEnum = function (_0x187635) {
          if (this.nested && this.nested[_0x187635] instanceof _0x2d38db) {
            return this.nested[_0x187635].values;
          }
          throw Error("no such enum: " + _0x187635);
        };
        _0x5258ea.prototype.add = function (_0x5ee882) {
          if (!(_0x5ee882 instanceof _0x89c8cd && undefined !== _0x5ee882.extend || _0x5ee882 instanceof _0x4ee904 || _0x5ee882 instanceof _0x2d38db || _0x5ee882 instanceof _0xbe4c73 || _0x5ee882 instanceof _0x5258ea || _0x5ee882 instanceof _0x2e9f80)) {
            throw TypeError("object must be a valid nested object");
          }
          if (this.nested) {
            var _0x7d5ec1 = this.get(_0x5ee882.name);
            if (_0x7d5ec1) {
              if (!(_0x7d5ec1 instanceof _0x5258ea && _0x5ee882 instanceof _0x5258ea) || _0x7d5ec1 instanceof _0x4ee904 || _0x7d5ec1 instanceof _0xbe4c73) {
                throw Error("duplicate name '" + _0x5ee882.name + "' in " + this);
              }
              var _0x52c883 = _0x7d5ec1.nestedArray;
              for (var _0x3d0e9f = 0x0; _0x3d0e9f < _0x52c883.length; ++_0x3d0e9f) {
                _0x5ee882.add(_0x52c883[_0x3d0e9f]);
              }
              this.remove(_0x7d5ec1);
              if (!this.nested) {
                this.nested = {};
              }
              _0x5ee882.setOptions(_0x7d5ec1.options, true);
            }
          } else {
            this.nested = {};
          }
          this.nested[_0x5ee882.name] = _0x5ee882;
          _0x5ee882.onAdd(this);
          return _0x5d4cdf(this);
        };
        _0x5258ea.prototype.remove = function (_0x45714e) {
          if (!(_0x45714e instanceof _0x1e6382)) {
            throw TypeError("object must be a ReflectionObject");
          }
          if (_0x45714e.parent !== this) {
            throw Error(_0x45714e + " is not a member of " + this);
          }
          delete this.nested[_0x45714e.name];
          if (!Object.keys(this.nested).length) {
            this.nested = undefined;
          }
          _0x45714e.onRemove(this);
          return _0x5d4cdf(this);
        };
        _0x5258ea.prototype.define = function (_0x3696f2, _0x27b3f6) {
          if (_0x204b01.isString(_0x3696f2)) {
            _0x3696f2 = _0x3696f2.split('.');
          } else {
            if (!Array.isArray(_0x3696f2)) {
              throw TypeError("illegal path");
            }
          }
          if (_0x3696f2 && _0x3696f2.length && '' === _0x3696f2[0x0]) {
            throw Error("path must be relative");
          }
          for (var _0xfff1e6 = this; _0x3696f2.length > 0x0;) {
            var _0x156845 = _0x3696f2.shift();
            if (_0xfff1e6.nested && _0xfff1e6.nested[_0x156845]) {
              if (!((_0xfff1e6 = _0xfff1e6.nested[_0x156845]) instanceof _0x5258ea)) {
                throw Error("path conflicts with non-namespace objects");
              }
            } else {
              _0xfff1e6.add(_0xfff1e6 = new _0x5258ea(_0x156845));
            }
          }
          if (_0x27b3f6) {
            _0xfff1e6.addJSON(_0x27b3f6);
          }
          return _0xfff1e6;
        };
        _0x5258ea.prototype.resolveAll = function () {
          var _0x29c4e0 = this.nestedArray;
          for (var _0x21e673 = 0x0; _0x21e673 < _0x29c4e0.length;) {
            if (_0x29c4e0[_0x21e673] instanceof _0x5258ea) {
              _0x29c4e0[_0x21e673++].resolveAll();
            } else {
              _0x29c4e0[_0x21e673++].resolve();
            }
          }
          return this.resolve();
        };
        _0x5258ea.prototype.lookup = function (_0x505705, _0xb5c6f2, _0x43dc23) {
          if ("boolean" == typeof _0xb5c6f2) {
            _0x43dc23 = _0xb5c6f2;
            _0xb5c6f2 = undefined;
          } else if (_0xb5c6f2 && !Array.isArray(_0xb5c6f2)) {
            _0xb5c6f2 = [_0xb5c6f2];
          }
          if (_0x204b01.isString(_0x505705) && _0x505705.length) {
            if ('.' === _0x505705) {
              return this.root;
            }
            _0x505705 = _0x505705.split('.');
          } else {
            if (!_0x505705.length) {
              return this;
            }
          }
          if ('' === _0x505705[0x0]) {
            return this.root.lookup(_0x505705.slice(0x1), _0xb5c6f2);
          }
          var _0x500cab = this.get(_0x505705[0x0]);
          if (_0x500cab) {
            if (0x1 === _0x505705.length) {
              if (!_0xb5c6f2 || _0xb5c6f2.indexOf(_0x500cab.constructor) > -0x1) {
                return _0x500cab;
              }
            } else {
              if (_0x500cab instanceof _0x5258ea && (_0x500cab = _0x500cab.lookup(_0x505705.slice(0x1), _0xb5c6f2, true))) {
                return _0x500cab;
              }
            }
          } else {
            for (var _0x32a2fd = 0x0; _0x32a2fd < this.nestedArray.length; ++_0x32a2fd) {
              if (this._nestedArray[_0x32a2fd] instanceof _0x5258ea && (_0x500cab = this._nestedArray[_0x32a2fd].lookup(_0x505705, _0xb5c6f2, true))) {
                return _0x500cab;
              }
            }
          }
          return null === this.parent || _0x43dc23 ? null : this.parent.lookup(_0x505705, _0xb5c6f2);
        };
        _0x5258ea.prototype.lookupType = function (_0x5078e0) {
          var _0x216744 = this.lookup(_0x5078e0, [_0x4ee904]);
          if (!_0x216744) {
            throw Error("no such type: " + _0x5078e0);
          }
          return _0x216744;
        };
        _0x5258ea.prototype.lookupEnum = function (_0x869ca4) {
          var _0x27bd2c = this.lookup(_0x869ca4, [_0x2d38db]);
          if (!_0x27bd2c) {
            throw Error("no such Enum '" + _0x869ca4 + "' in " + this);
          }
          return _0x27bd2c;
        };
        _0x5258ea.prototype.lookupTypeOrEnum = function (_0xa5cdc2) {
          var _0x5bb668 = this.lookup(_0xa5cdc2, [_0x4ee904, _0x2d38db]);
          if (!_0x5bb668) {
            throw Error("no such Type or Enum '" + _0xa5cdc2 + "' in " + this);
          }
          return _0x5bb668;
        };
        _0x5258ea.prototype.lookupService = function (_0x437967) {
          var _0x7f6e81 = this.lookup(_0x437967, [_0xbe4c73]);
          if (!_0x7f6e81) {
            throw Error("no such Service '" + _0x437967 + "' in " + this);
          }
          return _0x7f6e81;
        };
        _0x5258ea._configure = function (_0x43ea21, _0x285f43, _0xb7f28f) {
          _0x4ee904 = _0x43ea21;
          _0xbe4c73 = _0x285f43;
          _0x2d38db = _0xb7f28f;
        };
        _0x2b2513.exports;
      }, function () {
        return {
          './object': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './field': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './oneof': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js", function (_0x534d19, _0x492408, _0x1adee8, _0x2cf06a, _0x1675a8) {
        _0x1adee8.exports = _0x5a3e23;
        var _0x38a32c = _0x492408('./field');
        ((_0x5a3e23.prototype = Object.create(_0x38a32c.prototype)).constructor = _0x5a3e23).className = "MapField";
        var _0x474657 = _0x492408("./types");
        var _0x51ad58 = _0x492408('./util');
        function _0x5a3e23(_0x2cb392, _0x85fff8, _0x3fa10c, _0x104e2b, _0x6e153e, _0x32ba56) {
          _0x38a32c.call(this, _0x2cb392, _0x85fff8, _0x104e2b, undefined, undefined, _0x6e153e, _0x32ba56);
          if (!_0x51ad58.isString(_0x3fa10c)) {
            throw TypeError("keyType must be a string");
          }
          this.keyType = _0x3fa10c;
          this.resolvedKeyType = null;
          this.map = true;
        }
        _0x5a3e23.fromJSON = function (_0x507db9, _0x2c0b67) {
          return new _0x5a3e23(_0x507db9, _0x2c0b67.id, _0x2c0b67.keyType, _0x2c0b67.type, _0x2c0b67.options, _0x2c0b67.comment);
        };
        _0x5a3e23.prototype.toJSON = function (_0x1df720) {
          var _0xafc1a0 = !!_0x1df720 && Boolean(_0x1df720.keepComments);
          return _0x51ad58.toObject(["keyType", this.keyType, "type", this.type, 'id', this.id, "extend", this.extend, 'options', this.options, "comment", _0xafc1a0 ? this.comment : undefined]);
        };
        _0x5a3e23.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === _0x474657.mapKey[this.keyType]) {
            throw Error("invalid key type: " + this.keyType);
          }
          return _0x38a32c.prototype.resolve.call(this);
        };
        _0x5a3e23.d = function (_0x8385a7, _0x30b17a, _0x9bc55b) {
          if ("function" == typeof _0x9bc55b) {
            _0x9bc55b = _0x51ad58.decorateType(_0x9bc55b).name;
          } else if (_0x9bc55b && "object" == typeof _0x9bc55b) {
            _0x9bc55b = _0x51ad58.decorateEnum(_0x9bc55b).name;
          }
          return function (_0x4bec26, _0x24c3fc) {
            _0x51ad58.decorateType(_0x4bec26.constructor).add(new _0x5a3e23(_0x24c3fc, _0x8385a7, _0x30b17a, _0x9bc55b));
          };
        };
        _0x1adee8.exports;
      }, function () {
        return {
          './field': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './types': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/types.js',
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/method.js", function (_0x2b7eb7, _0x3401d5, _0x17181a, _0x1b33df, _0x44cbb7) {
        _0x17181a.exports = _0x563907;
        var _0x42aa47 = _0x3401d5('./object');
        ((_0x563907.prototype = Object.create(_0x42aa47.prototype)).constructor = _0x563907).className = "Method";
        var _0xc5a493 = _0x3401d5('./util');
        function _0x563907(_0x52aab4, _0x3fc82e, _0x504bc7, _0x3cef81, _0x5ce053, _0x3be742, _0x157dba, _0x58ded2, _0x5183b5) {
          if (_0xc5a493.isObject(_0x5ce053)) {
            _0x157dba = _0x5ce053;
            _0x5ce053 = _0x3be742 = undefined;
          } else if (_0xc5a493.isObject(_0x3be742)) {
            _0x157dba = _0x3be742;
            _0x3be742 = undefined;
          }
          if (undefined !== _0x3fc82e && !_0xc5a493.isString(_0x3fc82e)) {
            throw TypeError("type must be a string");
          }
          if (!_0xc5a493.isString(_0x504bc7)) {
            throw TypeError("requestType must be a string");
          }
          if (!_0xc5a493.isString(_0x3cef81)) {
            throw TypeError("responseType must be a string");
          }
          _0x42aa47.call(this, _0x52aab4, _0x157dba);
          this.type = _0x3fc82e || "rpc";
          this.requestType = _0x504bc7;
          this.requestStream = !!_0x5ce053 || undefined;
          this.responseType = _0x3cef81;
          this.responseStream = !!_0x3be742 || undefined;
          this.resolvedRequestType = null;
          this.resolvedResponseType = null;
          this.comment = _0x58ded2;
          this.parsedOptions = _0x5183b5;
        }
        _0x563907.fromJSON = function (_0x53709f, _0x532150) {
          return new _0x563907(_0x53709f, _0x532150.type, _0x532150.requestType, _0x532150.responseType, _0x532150.requestStream, _0x532150.responseStream, _0x532150.options, _0x532150.comment, _0x532150.parsedOptions);
        };
        _0x563907.prototype.toJSON = function (_0x4ecff2) {
          var _0x4c78ee = !!_0x4ecff2 && Boolean(_0x4ecff2.keepComments);
          return _0xc5a493.toObject(["type", "rpc" !== this.type && this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, 'responseType', this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", _0x4c78ee ? this.comment : undefined, "parsedOptions", this.parsedOptions]);
        };
        _0x563907.prototype.resolve = function () {
          return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), _0x42aa47.prototype.resolve.call(this));
        };
        _0x17181a.exports;
      }, function () {
        return {
          './object': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x50443a.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/service.js', function (_0x9f25b, _0x501f99, _0x445eca, _0x2e5048, _0x305685) {
        _0x445eca.exports = _0x335561;
        var _0x238667 = _0x501f99("./namespace");
        ((_0x335561.prototype = Object.create(_0x238667.prototype)).constructor = _0x335561).className = "Service";
        var _0x4f8cc5 = _0x501f99("./method");
        var _0x4433ae = _0x501f99("./util");
        var _0x4cf6f8 = _0x501f99("./rpc");
        function _0x335561(_0x5a0bc3, _0x2ee977) {
          _0x238667.call(this, _0x5a0bc3, _0x2ee977);
          this.methods = {};
          this._methodsArray = null;
        }
        function _0x32929f(_0x234af3) {
          _0x234af3._methodsArray = null;
          return _0x234af3;
        }
        _0x335561.fromJSON = function (_0x2ec442, _0x948ac4) {
          var _0x56e2e8 = new _0x335561(_0x2ec442, _0x948ac4.options);
          if (_0x948ac4.methods) {
            var _0x499438 = Object.keys(_0x948ac4.methods);
            for (var _0x42432b = 0x0; _0x42432b < _0x499438.length; ++_0x42432b) {
              _0x56e2e8.add(_0x4f8cc5.fromJSON(_0x499438[_0x42432b], _0x948ac4.methods[_0x499438[_0x42432b]]));
            }
          }
          if (_0x948ac4.nested) {
            _0x56e2e8.addJSON(_0x948ac4.nested);
          }
          _0x56e2e8.comment = _0x948ac4.comment;
          return _0x56e2e8;
        };
        _0x335561.prototype.toJSON = function (_0x3357d9) {
          var _0x5a5cfc = _0x238667.prototype.toJSON.call(this, _0x3357d9);
          var _0x3de9ab = !!_0x3357d9 && Boolean(_0x3357d9.keepComments);
          return _0x4433ae.toObject(['options', _0x5a5cfc && _0x5a5cfc.options || undefined, "methods", _0x238667.arrayToJSON(this.methodsArray, _0x3357d9) || {}, "nested", _0x5a5cfc && _0x5a5cfc.nested || undefined, "comment", _0x3de9ab ? this.comment : undefined]);
        };
        Object.defineProperty(_0x335561.prototype, "methodsArray", {
          'get': function () {
            return this._methodsArray || (this._methodsArray = _0x4433ae.toArray(this.methods));
          }
        });
        _0x335561.prototype.get = function (_0xe7db1) {
          return this.methods[_0xe7db1] || _0x238667.prototype.get.call(this, _0xe7db1);
        };
        _0x335561.prototype.resolveAll = function () {
          var _0x111363 = this.methodsArray;
          for (var _0x319271 = 0x0; _0x319271 < _0x111363.length; ++_0x319271) {
            _0x111363[_0x319271].resolve();
          }
          return _0x238667.prototype.resolve.call(this);
        };
        _0x335561.prototype.add = function (_0x3b535a) {
          if (this.get(_0x3b535a.name)) {
            throw Error("duplicate name '" + _0x3b535a.name + "' in " + this);
          }
          return _0x3b535a instanceof _0x4f8cc5 ? (this.methods[_0x3b535a.name] = _0x3b535a, _0x3b535a.parent = this, _0x32929f(this)) : _0x238667.prototype.add.call(this, _0x3b535a);
        };
        _0x335561.prototype.remove = function (_0x8a68e7) {
          if (_0x8a68e7 instanceof _0x4f8cc5) {
            if (this.methods[_0x8a68e7.name] !== _0x8a68e7) {
              throw Error(_0x8a68e7 + " is not a member of " + this);
            }
            delete this.methods[_0x8a68e7.name];
            _0x8a68e7.parent = null;
            return _0x32929f(this);
          }
          return _0x238667.prototype.remove.call(this, _0x8a68e7);
        };
        _0x335561.prototype.create = function (_0x225f2f, _0x22edb1, _0xa648c) {
          var _0x165135;
          var _0x5a3fcd = new _0x4cf6f8.Service(_0x225f2f, _0x22edb1, _0xa648c);
          for (var _0x44f974 = 0x0; _0x44f974 < this.methodsArray.length; ++_0x44f974) {
            var _0x206c36 = _0x4433ae.lcFirst((_0x165135 = this._methodsArray[_0x44f974]).resolve().name).replace(/[^$\w_]/g, '');
            _0x5a3fcd[_0x206c36] = _0x4433ae.codegen(['r', 'c'], _0x4433ae.isReserved(_0x206c36) ? _0x206c36 + '_' : _0x206c36)("return this.rpcCall(m,q,s,r,c)")({
              'm': _0x165135,
              'q': _0x165135.resolvedRequestType.ctor,
              's': _0x165135.resolvedResponseType.ctor
            });
          }
          return _0x5a3fcd;
        };
        _0x445eca.exports;
      }, function () {
        return {
          './namespace': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js',
          './method': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './rpc': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js"
        };
      });
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/message.js", function (_0x4eb53c, _0x139ee4, _0x1592e2, _0x1acbbd, _0x3963f6) {
        _0x1592e2.exports = _0x4967cc;
        var _0x2f031c = _0x139ee4('./util/minimal');
        function _0x4967cc(_0x55d510) {
          if (_0x55d510) {
            var _0x32dd46 = Object.keys(_0x55d510);
            for (var _0x42754c = 0x0; _0x42754c < _0x32dd46.length; ++_0x42754c) {
              this[_0x32dd46[_0x42754c]] = _0x55d510[_0x32dd46[_0x42754c]];
            }
          }
        }
        _0x4967cc.create = function (_0x98e755) {
          return this.$type.create(_0x98e755);
        };
        _0x4967cc.encode = function (_0x52b105, _0x301522) {
          return this.$type.encode(_0x52b105, _0x301522);
        };
        _0x4967cc.encodeDelimited = function (_0x285380, _0xfa90b0) {
          return this.$type.encodeDelimited(_0x285380, _0xfa90b0);
        };
        _0x4967cc.decode = function (_0x426eea) {
          return this.$type.decode(_0x426eea);
        };
        _0x4967cc.decodeDelimited = function (_0x1b1cbf) {
          return this.$type.decodeDelimited(_0x1b1cbf);
        };
        _0x4967cc.verify = function (_0xc957c9) {
          return this.$type.verify(_0xc957c9);
        };
        _0x4967cc.fromObject = function (_0x3e00c2) {
          return this.$type.fromObject(_0x3e00c2);
        };
        _0x4967cc.toObject = function (_0x508ade, _0x9bfea7) {
          return this.$type.toObject(_0x508ade, _0x9bfea7);
        };
        _0x4967cc.prototype.toJSON = function () {
          return this.$type.toObject(this, _0x2f031c.toJSONOptions);
        };
        _0x1592e2.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x50443a.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js', function (_0x4539bd, _0x25d4e5, _0x337c16, _0x5dadca, _0x1d30a0) {
        _0x337c16.exports = function (_0x5f340e) {
          var _0x57b343 = _0x2e9b9b.codegen(['r', 'l'], _0x5f340e.name + "$decode")("if(!(r instanceof Reader))")('r=Reader.create(r)')("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (_0x5f340e.fieldsArray.filter(function (_0x1c5ea9) {
            return _0x1c5ea9.map;
          }).length ? ",k,value" : ''))("while(r.pos<c){")("var t=r.uint32()");
          if (_0x5f340e.group) {
            _0x57b343("if((t&7)===4)")("break");
          }
          _0x57b343("switch(t>>>3){");
          for (var _0x5a5510 = 0x0; _0x5a5510 < _0x5f340e.fieldsArray.length; ++_0x5a5510) {
            var _0x3ad5cc = _0x5f340e._fieldsArray[_0x5a5510].resolve();
            var _0x80c0ad = _0x3ad5cc.resolvedType instanceof _0xe5a458 ? "int32" : _0x3ad5cc.type;
            var _0x120ddc = 'm' + _0x2e9b9b.safeProp(_0x3ad5cc.name);
            _0x57b343("case %i:", _0x3ad5cc.id);
            if (_0x3ad5cc.map) {
              _0x57b343("if(%s===util.emptyObject)", _0x120ddc)("%s={}", _0x120ddc)("var c2 = r.uint32()+r.pos");
              if (undefined !== _0x1c24bd.defaults[_0x3ad5cc.keyType]) {
                _0x57b343("k=%j", _0x1c24bd.defaults[_0x3ad5cc.keyType]);
              } else {
                _0x57b343("k=null");
              }
              if (undefined !== _0x1c24bd.defaults[_0x80c0ad]) {
                _0x57b343("value=%j", _0x1c24bd.defaults[_0x80c0ad]);
              } else {
                _0x57b343("value=null");
              }
              _0x57b343("while(r.pos<c2){")("var tag2=r.uint32()")('switch(tag2>>>3){')("case 1: k=r.%s(); break", _0x3ad5cc.keyType)("case 2:");
              if (undefined === _0x1c24bd.basic[_0x80c0ad]) {
                _0x57b343('value=types[%i].decode(r,r.uint32())', _0x5a5510);
              } else {
                _0x57b343("value=r.%s()", _0x80c0ad);
              }
              _0x57b343("break")("default:")("r.skipType(tag2&7)")("break")('}')('}');
              if (undefined !== _0x1c24bd.long[_0x3ad5cc.keyType]) {
                _0x57b343("%s[typeof k===\"object\"?util.longToHash(k):k]=value", _0x120ddc);
              } else {
                _0x57b343("%s[k]=value", _0x120ddc);
              }
            } else if (_0x3ad5cc.repeated) {
              _0x57b343('if(!(%s&&%s.length))', _0x120ddc, _0x120ddc)("%s=[]", _0x120ddc);
              if (undefined !== _0x1c24bd.packed[_0x80c0ad]) {
                _0x57b343("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", _0x120ddc, _0x80c0ad)('}else');
              }
              if (undefined === _0x1c24bd.basic[_0x80c0ad]) {
                _0x57b343(_0x3ad5cc.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", _0x120ddc, _0x5a5510);
              } else {
                _0x57b343("%s.push(r.%s())", _0x120ddc, _0x80c0ad);
              }
            } else if (undefined === _0x1c24bd.basic[_0x80c0ad]) {
              _0x57b343(_0x3ad5cc.resolvedType.group ? '%s=types[%i].decode(r)' : "%s=types[%i].decode(r,r.uint32())", _0x120ddc, _0x5a5510);
            } else {
              _0x57b343('%s=r.%s()', _0x120ddc, _0x80c0ad);
            }
            _0x57b343("break");
          }
          _0x57b343('default:')("r.skipType(t&7)")("break")('}')('}');
          for (_0x5a5510 = 0x0; _0x5a5510 < _0x5f340e._fieldsArray.length; ++_0x5a5510) {
            var _0xf922f7 = _0x5f340e._fieldsArray[_0x5a5510];
            if (_0xf922f7.required) {
              _0x57b343("if(!m.hasOwnProperty(%j))", _0xf922f7.name)("throw util.ProtocolError(%j,{instance:m})", "missing required '" + _0xf922f7.name + "'");
            }
          }
          return _0x57b343("return m");
        };
        var _0xe5a458 = _0x25d4e5("./enum");
        var _0x1c24bd = _0x25d4e5("./types");
        var _0x2e9b9b = _0x25d4e5('./util');
        _0x337c16.exports;
      }, function () {
        return {
          './enum': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/enum.js',
          './types': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/types.js',
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x50443a.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js', function (_0x2ae723, _0x3cd008, _0xfc5c10, _0x3e6a3f, _0x2ee9bc) {
        _0xfc5c10.exports = function (_0xf47680) {
          var _0x149a81 = _0x5364fa.codegen(['m'], _0xf47680.name + '$verify')("if(typeof m!==\"object\"||m===null)")('return%j', "object expected");
          var _0x111d9a = _0xf47680.oneofsArray;
          var _0x4909f4 = {};
          if (_0x111d9a.length) {
            _0x149a81("var p={}");
          }
          for (var _0x54fd73 = 0x0; _0x54fd73 < _0xf47680.fieldsArray.length; ++_0x54fd73) {
            var _0x30a913 = _0xf47680._fieldsArray[_0x54fd73].resolve();
            var _0x316290 = 'm' + _0x5364fa.safeProp(_0x30a913.name);
            if (_0x30a913.optional) {
              _0x149a81("if(%s!=null&&m.hasOwnProperty(%j)){", _0x316290, _0x30a913.name);
            }
            if (_0x30a913.map) {
              _0x149a81("if(!util.isObject(%s))", _0x316290)("return%j", _0x30a913.name + ": " + _0x11fb(0x3f8) + (_0x30a913.repeated && 'array' !== _0x11fb(0x3f8) ? '[]' : _0x30a913.map && false ? "{k:" + _0x30a913.keyType + '}' : '') + " expected")("var k=Object.keys(%s)", _0x316290)("for(var i=0;i<k.length;++i){");
              _0x3438fd(_0x149a81, _0x30a913, "k[i]");
              _0x32297e(_0x149a81, _0x30a913, _0x54fd73, _0x316290 + '[k[i]]')('}');
            } else {
              if (_0x30a913.repeated) {
                _0x149a81("if(!Array.isArray(%s))", _0x316290)("return%j", _0x30a913.name + ": " + _0x11fb(0xc00) + (_0x30a913.repeated && 'array' !== _0x11fb(0xc00) ? '[]' : _0x30a913.map && true ? "{k:" + _0x30a913.keyType + '}' : '') + " expected")("for(var i=0;i<%s.length;++i){", _0x316290);
                _0x32297e(_0x149a81, _0x30a913, _0x54fd73, _0x316290 + "[i]")('}');
              } else {
                if (_0x30a913.partOf) {
                  var _0x4a6a49 = _0x5364fa.safeProp(_0x30a913.partOf.name);
                  if (0x1 === _0x4909f4[_0x30a913.partOf.name]) {
                    _0x149a81("if(p%s===1)", _0x4a6a49)("return%j", _0x30a913.partOf.name + ": multiple values");
                  }
                  _0x4909f4[_0x30a913.partOf.name] = 0x1;
                  _0x149a81("p%s=1", _0x4a6a49);
                }
                _0x32297e(_0x149a81, _0x30a913, _0x54fd73, _0x316290);
              }
            }
            if (_0x30a913.optional) {
              _0x149a81('}');
            }
          }
          return _0x149a81("return null");
        };
        var _0x35f633 = _0x3cd008('./enum');
        var _0x5364fa = _0x3cd008('./util');
        function _0x32297e(_0x318920, _0x49eb75, _0x47846a, _0xfa8800) {
          if (_0x49eb75.resolvedType) {
            if (_0x49eb75.resolvedType instanceof _0x35f633) {
              _0x318920('switch(%s){', _0xfa8800)("default:")("return%j", _0x49eb75.name + ": " + _0x11fb(0x55b) + (_0x49eb75.repeated && 'array' !== _0x11fb(0x55b) ? '[]' : _0x49eb75.map && true ? "{k:" + _0x49eb75.keyType + '}' : '') + " expected");
              var _0x265831 = Object.keys(_0x49eb75.resolvedType.values);
              for (var _0x24b787 = 0x0; _0x24b787 < _0x265831.length; ++_0x24b787) {
                _0x318920("case %i:", _0x49eb75.resolvedType.values[_0x265831[_0x24b787]]);
              }
              _0x318920('break')('}');
            } else {
              _0x318920('{')("var e=types[%i].verify(%s);", _0x47846a, _0xfa8800)('if(e)')('return%j+e', _0x49eb75.name + '.')('}');
            }
          } else {
            switch (_0x49eb75.type) {
              case "int32":
              case 'uint32':
              case "sint32":
              case 'fixed32':
              case "sfixed32":
                _0x318920('if(!util.isInteger(%s))', _0xfa8800)("return%j", _0x49eb75.name + ": " + _0x11fb(0x225) + (_0x49eb75.repeated && 'array' !== _0x11fb(0x225) ? '[]' : _0x49eb75.map && true ? "{k:" + _0x49eb75.keyType + '}' : '') + " expected");
                break;
              case "int64":
              case 'uint64':
              case "sint64":
              case "fixed64":
              case "sfixed64":
                _0x318920('if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))', _0xfa8800, _0xfa8800, _0xfa8800, _0xfa8800)('return%j', _0x49eb75.name + ": " + 'integer|Long' + (_0x49eb75.repeated && true ? '[]' : _0x49eb75.map && true ? "{k:" + _0x49eb75.keyType + '}' : '') + " expected");
                break;
              case 'float':
              case "double":
                _0x318920("if(typeof %s!==\"number\")", _0xfa8800)('return%j', _0x49eb75.name + ": " + _0x11fb(0xd52) + (_0x49eb75.repeated && 'array' !== _0x11fb(0xd52) ? '[]' : _0x49eb75.map && true ? "{k:" + _0x49eb75.keyType + '}' : '') + " expected");
                break;
              case "bool":
                _0x318920("if(typeof %s!==\"boolean\")", _0xfa8800)("return%j", _0x49eb75.name + ": " + _0x11fb(0xa32) + (_0x49eb75.repeated && 'array' !== _0x11fb(0xa32) ? '[]' : _0x49eb75.map && true ? "{k:" + _0x49eb75.keyType + '}' : '') + " expected");
                break;
              case "string":
                _0x318920("if(!util.isString(%s))", _0xfa8800)("return%j", _0x49eb75.name + ": " + _0x11fb(0x334) + (_0x49eb75.repeated && 'array' !== _0x11fb(0x334) ? '[]' : _0x49eb75.map && true ? "{k:" + _0x49eb75.keyType + '}' : '') + " expected");
                break;
              case 'bytes':
                _0x318920("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", _0xfa8800, _0xfa8800, _0xfa8800)("return%j", _0x49eb75.name + ": " + _0x11fb(0x4b8) + (_0x49eb75.repeated && 'array' !== _0x11fb(0x4b8) ? '[]' : _0x49eb75.map && true ? "{k:" + _0x49eb75.keyType + '}' : '') + " expected");
            }
          }
          return _0x318920;
        }
        function _0x3438fd(_0x2e3463, _0x48dbc5, _0xcd32da) {
          switch (_0x48dbc5.keyType) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
              _0x2e3463("if(!util.key32Re.test(%s))", _0xcd32da)('return%j', _0x48dbc5.name + ": " + _0x11fb(0x6cb) + (_0x48dbc5.repeated && 'array' !== _0x11fb(0x6cb) ? '[]' : _0x48dbc5.map && true ? "{k:" + _0x48dbc5.keyType + '}' : '') + " expected");
              break;
            case "int64":
            case 'uint64':
            case "sint64":
            case "fixed64":
            case 'sfixed64':
              _0x2e3463("if(!util.key64Re.test(%s))", _0xcd32da)("return%j", _0x48dbc5.name + ": " + _0x11fb(0xbc5) + (_0x48dbc5.repeated && 'array' !== _0x11fb(0xbc5) ? '[]' : _0x48dbc5.map && true ? "{k:" + _0x48dbc5.keyType + '}' : '') + " expected");
              break;
            case "bool":
              _0x2e3463("if(!util.key2Re.test(%s))", _0xcd32da)("return%j", _0x48dbc5.name + ": " + _0x11fb(0xbdf) + (_0x48dbc5.repeated && 'array' !== _0x11fb(0xbdf) ? '[]' : _0x48dbc5.map && true ? "{k:" + _0x48dbc5.keyType + '}' : '') + " expected");
          }
          return _0x2e3463;
        }
        _0xfc5c10.exports;
      }, function () {
        return {
          './enum': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/enum.js',
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/converter.js", function (_0x36197d, _0x41d509, _0x563e1f, _0x1024d1, _0xf2645e) {
        var _0x38ef02 = _0x41d509("./enum");
        var _0x4c046a = _0x41d509('./util');
        function _0x239e68(_0x3f69cb, _0x416e29, _0x581af2, _0x9b298) {
          if (_0x416e29.resolvedType) {
            if (_0x416e29.resolvedType instanceof _0x38ef02) {
              _0x3f69cb("switch(d%s){", _0x9b298);
              var _0x2b6fd4 = _0x416e29.resolvedType.values;
              var _0x9e9b4 = Object.keys(_0x2b6fd4);
              for (var _0x133183 = 0x0; _0x133183 < _0x9e9b4.length; ++_0x133183) {
                if (_0x416e29.repeated && _0x2b6fd4[_0x9e9b4[_0x133183]] === _0x416e29.typeDefault) {
                  _0x3f69cb("default:");
                }
                _0x3f69cb('case%j:', _0x9e9b4[_0x133183])("case %i:", _0x2b6fd4[_0x9e9b4[_0x133183]])('m%s=%j', _0x9b298, _0x2b6fd4[_0x9e9b4[_0x133183]])("break");
              }
              _0x3f69cb('}');
            } else {
              _0x3f69cb("if(typeof d%s!==\"object\")", _0x9b298)("throw TypeError(%j)", _0x416e29.fullName + ": object expected")('m%s=types[%i].fromObject(d%s)', _0x9b298, _0x581af2, _0x9b298);
            }
          } else {
            var _0x24d5ed = false;
            switch (_0x416e29.type) {
              case "double":
              case "float":
                _0x3f69cb('m%s=Number(d%s)', _0x9b298, _0x9b298);
                break;
              case "uint32":
              case "fixed32":
                _0x3f69cb("m%s=d%s>>>0", _0x9b298, _0x9b298);
                break;
              case "int32":
              case "sint32":
              case 'sfixed32':
                _0x3f69cb('m%s=d%s|0', _0x9b298, _0x9b298);
                break;
              case "uint64":
                _0x24d5ed = true;
              case "int64":
              case "sint64":
              case "fixed64":
              case 'sfixed64':
                _0x3f69cb("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", _0x9b298, _0x9b298, _0x24d5ed)("else if(typeof d%s===\"string\")", _0x9b298)('m%s=parseInt(d%s,10)', _0x9b298, _0x9b298)("else if(typeof d%s===\"number\")", _0x9b298)("m%s=d%s", _0x9b298, _0x9b298)("else if(typeof d%s===\"object\")", _0x9b298)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", _0x9b298, _0x9b298, _0x9b298, _0x24d5ed ? "true" : '');
                break;
              case "bytes":
                _0x3f69cb("if(typeof d%s===\"string\")", _0x9b298)('util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)', _0x9b298, _0x9b298, _0x9b298)("else if(d%s.length)", _0x9b298)("m%s=d%s", _0x9b298, _0x9b298);
                break;
              case "string":
                _0x3f69cb("m%s=String(d%s)", _0x9b298, _0x9b298);
                break;
              case "bool":
                _0x3f69cb("m%s=Boolean(d%s)", _0x9b298, _0x9b298);
            }
          }
          return _0x3f69cb;
        }
        function _0x190b38(_0xe8f8d7, _0x1da73d, _0x5bdc56, _0x32f886) {
          if (_0x1da73d.resolvedType) {
            if (_0x1da73d.resolvedType instanceof _0x38ef02) {
              _0xe8f8d7('d%s=o.enums===String?types[%i].values[m%s]:m%s', _0x32f886, _0x5bdc56, _0x32f886, _0x32f886);
            } else {
              _0xe8f8d7('d%s=types[%i].toObject(m%s,o)', _0x32f886, _0x5bdc56, _0x32f886);
            }
          } else {
            var _0x430e7f = false;
            switch (_0x1da73d.type) {
              case 'double':
              case "float":
                _0xe8f8d7("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", _0x32f886, _0x32f886, _0x32f886, _0x32f886);
                break;
              case "uint64":
                _0x430e7f = true;
              case "int64":
              case "sint64":
              case "fixed64":
              case 'sfixed64':
                _0xe8f8d7("if(typeof m%s===\"number\")", _0x32f886)("d%s=o.longs===String?String(m%s):m%s", _0x32f886, _0x32f886, _0x32f886)('else')("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", _0x32f886, _0x32f886, _0x32f886, _0x32f886, _0x430e7f ? "true" : '', _0x32f886);
                break;
              case 'bytes':
                _0xe8f8d7("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", _0x32f886, _0x32f886, _0x32f886, _0x32f886, _0x32f886);
                break;
              default:
                _0xe8f8d7('d%s=m%s', _0x32f886, _0x32f886);
            }
          }
          return _0xe8f8d7;
        }
        _0x36197d.fromObject = function (_0x339ba8) {
          var _0x51bcd3 = _0x339ba8.fieldsArray;
          var _0x1855d8 = _0x4c046a.codegen(['d'], _0x339ba8.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
          if (!_0x51bcd3.length) {
            return _0x1855d8("return new this.ctor");
          }
          _0x1855d8("var m=new this.ctor");
          for (var _0x42a298 = 0x0; _0x42a298 < _0x51bcd3.length; ++_0x42a298) {
            var _0x6de7c7 = _0x51bcd3[_0x42a298].resolve();
            var _0x51acd0 = _0x4c046a.safeProp(_0x6de7c7.name);
            if (_0x6de7c7.map) {
              _0x1855d8("if(d%s){", _0x51acd0)("if(typeof d%s!==\"object\")", _0x51acd0)("throw TypeError(%j)", _0x6de7c7.fullName + ": object expected")("m%s={}", _0x51acd0)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", _0x51acd0);
              _0x239e68(_0x1855d8, _0x6de7c7, _0x42a298, _0x51acd0 + "[ks[i]]")('}')('}');
            } else if (_0x6de7c7.repeated) {
              _0x1855d8("if(d%s){", _0x51acd0)("if(!Array.isArray(d%s))", _0x51acd0)("throw TypeError(%j)", _0x6de7c7.fullName + ": array expected")("m%s=[]", _0x51acd0)("for(var i=0;i<d%s.length;++i){", _0x51acd0);
              _0x239e68(_0x1855d8, _0x6de7c7, _0x42a298, _0x51acd0 + "[i]")('}')('}');
            } else {
              if (!(_0x6de7c7.resolvedType instanceof _0x38ef02)) {
                _0x1855d8('if(d%s!=null){', _0x51acd0);
              }
              _0x239e68(_0x1855d8, _0x6de7c7, _0x42a298, _0x51acd0);
              if (!(_0x6de7c7.resolvedType instanceof _0x38ef02)) {
                _0x1855d8('}');
              }
            }
          }
          return _0x1855d8("return m");
        };
        _0x36197d.toObject = function (_0x59d64b) {
          var _0x512440 = _0x59d64b.fieldsArray.slice().sort(_0x4c046a.compareFieldsById);
          if (!_0x512440.length) {
            return _0x4c046a.codegen()("return {}");
          }
          var _0xeaf2b1 = _0x4c046a.codegen(['m', 'o'], _0x59d64b.name + "$toObject")("if(!o)")("o={}")("var d={}");
          var _0x53f156 = [];
          var _0x2eb844 = [];
          var _0x10b89f = [];
          for (var _0x37b68f = 0x0; _0x37b68f < _0x512440.length; ++_0x37b68f) {
            if (!_0x512440[_0x37b68f].partOf) {
              (_0x512440[_0x37b68f].resolve().repeated ? _0x53f156 : _0x512440[_0x37b68f].map ? _0x2eb844 : _0x10b89f).push(_0x512440[_0x37b68f]);
            }
          }
          if (_0x53f156.length) {
            _0xeaf2b1("if(o.arrays||o.defaults){");
            for (_0x37b68f = 0x0; _0x37b68f < _0x53f156.length; ++_0x37b68f) {
              _0xeaf2b1("d%s=[]", _0x4c046a.safeProp(_0x53f156[_0x37b68f].name));
            }
            _0xeaf2b1('}');
          }
          if (_0x2eb844.length) {
            _0xeaf2b1("if(o.objects||o.defaults){");
            for (_0x37b68f = 0x0; _0x37b68f < _0x2eb844.length; ++_0x37b68f) {
              _0xeaf2b1("d%s={}", _0x4c046a.safeProp(_0x2eb844[_0x37b68f].name));
            }
            _0xeaf2b1('}');
          }
          if (_0x10b89f.length) {
            _0xeaf2b1("if(o.defaults){");
            for (_0x37b68f = 0x0; _0x37b68f < _0x10b89f.length; ++_0x37b68f) {
              var _0x23bec5 = _0x10b89f[_0x37b68f];
              var _0x5d7a61 = _0x4c046a.safeProp(_0x23bec5.name);
              if (_0x23bec5.resolvedType instanceof _0x38ef02) {
                _0xeaf2b1('d%s=o.enums===String?%j:%j', _0x5d7a61, _0x23bec5.resolvedType.valuesById[_0x23bec5.typeDefault], _0x23bec5.typeDefault);
              } else {
                if (_0x23bec5.long) {
                  _0xeaf2b1("if(util.Long){")("var n=new util.Long(%i,%i,%j)", _0x23bec5.typeDefault.low, _0x23bec5.typeDefault.high, _0x23bec5.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", _0x5d7a61)("}else")('d%s=o.longs===String?%j:%i', _0x5d7a61, _0x23bec5.typeDefault.toString(), _0x23bec5.typeDefault.toNumber());
                } else {
                  if (_0x23bec5.bytes) {
                    var _0x61d582 = '[' + Array.prototype.slice.call(_0x23bec5.typeDefault).join(',') + ']';
                    _0xeaf2b1("if(o.bytes===String)d%s=%j", _0x5d7a61, String.fromCharCode.apply(String, _0x23bec5.typeDefault))("else{")("d%s=%s", _0x5d7a61, _0x61d582)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", _0x5d7a61, _0x5d7a61)('}');
                  } else {
                    _0xeaf2b1('d%s=%j', _0x5d7a61, _0x23bec5.typeDefault);
                  }
                }
              }
            }
            _0xeaf2b1('}');
          }
          var _0x4767b3 = false;
          for (_0x37b68f = 0x0; _0x37b68f < _0x512440.length; ++_0x37b68f) {
            _0x23bec5 = _0x512440[_0x37b68f];
            var _0x16baa2 = _0x59d64b._fieldsArray.indexOf(_0x23bec5);
            _0x5d7a61 = _0x4c046a.safeProp(_0x23bec5.name);
            if (_0x23bec5.map) {
              if (!_0x4767b3) {
                _0x4767b3 = true;
                _0xeaf2b1("var ks2");
              }
              _0xeaf2b1("if(m%s&&(ks2=Object.keys(m%s)).length){", _0x5d7a61, _0x5d7a61)("d%s={}", _0x5d7a61)("for(var j=0;j<ks2.length;++j){");
              _0x190b38(_0xeaf2b1, _0x23bec5, _0x16baa2, _0x5d7a61 + "[ks2[j]]")('}');
            } else if (_0x23bec5.repeated) {
              _0xeaf2b1("if(m%s&&m%s.length){", _0x5d7a61, _0x5d7a61)("d%s=[]", _0x5d7a61)("for(var j=0;j<m%s.length;++j){", _0x5d7a61);
              _0x190b38(_0xeaf2b1, _0x23bec5, _0x16baa2, _0x5d7a61 + "[j]")('}');
            } else {
              _0xeaf2b1("if(m%s!=null&&m.hasOwnProperty(%j)){", _0x5d7a61, _0x23bec5.name);
              _0x190b38(_0xeaf2b1, _0x23bec5, _0x16baa2, _0x5d7a61);
              if (_0x23bec5.partOf) {
                _0xeaf2b1('if(o.oneofs)')("d%s=%j", _0x4c046a.safeProp(_0x23bec5.partOf.name), _0x23bec5.name);
              }
            }
            _0xeaf2b1('}');
          }
          return _0xeaf2b1("return d");
        };
        _0x563e1f.exports;
      }, function () {
        return {
          './enum': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/enum.js',
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x50443a.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js', function (_0x2e77f6, _0x526f3b, _0x5148ef, _0x545962, _0x2e14dc) {
        var _0x2c9479 = _0x526f3b("./message");
        _0x2e77f6[".google.protobuf.Any"] = {
          'fromObject': function (_0x52d8ea) {
            if (_0x52d8ea && _0x52d8ea["@type"]) {
              var _0x118286 = _0x52d8ea["@type"].substring(_0x52d8ea["@type"].lastIndexOf('/') + 0x1);
              var _0x1749ad = this.lookup(_0x118286);
              if (_0x1749ad) {
                var _0x39b264 = '.' === _0x52d8ea["@type"].charAt(0x0) ? _0x52d8ea['@type'].substr(0x1) : _0x52d8ea['@type'];
                if (-0x1 === _0x39b264.indexOf('/')) {
                  _0x39b264 = '/' + _0x39b264;
                }
                return this.create({
                  'type_url': _0x39b264,
                  'value': _0x1749ad.encode(_0x1749ad.fromObject(_0x52d8ea)).finish()
                });
              }
            }
            return this.fromObject(_0x52d8ea);
          },
          'toObject': function (_0x5994f6, _0x5a1b97) {
            var _0x244746 = '';
            var _0x5a606c = '';
            if (_0x5a1b97 && _0x5a1b97.json && _0x5994f6.type_url && _0x5994f6.value) {
              _0x5a606c = _0x5994f6.type_url.substring(_0x5994f6.type_url.lastIndexOf('/') + 0x1);
              _0x244746 = _0x5994f6.type_url.substring(0x0, _0x5994f6.type_url.lastIndexOf('/') + 0x1);
              var _0x26c1c4 = this.lookup(_0x5a606c);
              if (_0x26c1c4) {
                _0x5994f6 = _0x26c1c4.decode(_0x5994f6.value);
              }
            }
            if (!(_0x5994f6 instanceof this.ctor) && _0x5994f6 instanceof _0x2c9479) {
              var _0x29f84b = _0x5994f6.$type.toObject(_0x5994f6, _0x5a1b97);
              if ('' === _0x244746) {
                _0x244746 = "type.googleapis.com/";
              }
              _0x5a606c = _0x244746 + ('.' === _0x5994f6.$type.fullName[0x0] ? _0x5994f6.$type.fullName.substr(0x1) : _0x5994f6.$type.fullName);
              _0x29f84b["@type"] = _0x5a606c;
              return _0x29f84b;
            }
            return this.toObject(_0x5994f6, _0x5a1b97);
          }
        };
        _0x5148ef.exports;
      }, function () {
        return {
          './message': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/message.js"
        };
      });
      _0x50443a.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/type.js', function (_0x2b431d, _0x3248e5, _0x3534a8, _0x5cf0f8, _0x5ee5b9) {
        _0x3534a8.exports = _0x58b0bf;
        var _0x4cd687 = _0x3248e5("./namespace");
        ((_0x58b0bf.prototype = Object.create(_0x4cd687.prototype)).constructor = _0x58b0bf).className = "Type";
        var _0x5532ce = _0x3248e5("./enum");
        var _0x32039a = _0x3248e5("./oneof");
        var _0x4025f0 = _0x3248e5("./field");
        var _0x193024 = _0x3248e5('./mapfield');
        var _0x1a811d = _0x3248e5('./service');
        var _0x2cf39c = _0x3248e5("./message");
        var _0x1faf54 = _0x3248e5('./reader');
        var _0x5a737c = _0x3248e5("./writer");
        var _0x49452e = _0x3248e5('./util');
        var _0x2cbce9 = _0x3248e5("./encoder");
        var _0x39a12a = _0x3248e5('./decoder');
        var _0x34a834 = _0x3248e5("./verifier");
        var _0x1c0490 = _0x3248e5("./converter");
        var _0x5832dc = _0x3248e5("./wrappers");
        function _0x58b0bf(_0x1da919, _0x3ae9a4) {
          _0x4cd687.call(this, _0x1da919, _0x3ae9a4);
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
        function _0x8f9d95(_0x466e4f) {
          _0x466e4f._fieldsById = _0x466e4f._fieldsArray = _0x466e4f._oneofsArray = null;
          delete _0x466e4f.encode;
          delete _0x466e4f.decode;
          delete _0x466e4f.verify;
          return _0x466e4f;
        }
        Object.defineProperties(_0x58b0bf.prototype, {
          'fieldsById': {
            'get': function () {
              if (this._fieldsById) {
                return this._fieldsById;
              }
              this._fieldsById = {};
              var _0x5d50a8 = Object.keys(this.fields);
              for (var _0x26f055 = 0x0; _0x26f055 < _0x5d50a8.length; ++_0x26f055) {
                var _0x5ad166 = this.fields[_0x5d50a8[_0x26f055]];
                var _0x39d43b = _0x5ad166.id;
                if (this._fieldsById[_0x39d43b]) {
                  throw Error("duplicate id " + _0x39d43b + " in " + this);
                }
                this._fieldsById[_0x39d43b] = _0x5ad166;
              }
              return this._fieldsById;
            }
          },
          'fieldsArray': {
            'get': function () {
              return this._fieldsArray || (this._fieldsArray = _0x49452e.toArray(this.fields));
            }
          },
          'oneofsArray': {
            'get': function () {
              return this._oneofsArray || (this._oneofsArray = _0x49452e.toArray(this.oneofs));
            }
          },
          'ctor': {
            'get': function () {
              return this._ctor || (this.ctor = _0x58b0bf.generateConstructor(this)());
            },
            'set': function (_0x478073) {
              var _0x5a9bd2 = _0x478073.prototype;
              if (!(_0x5a9bd2 instanceof _0x2cf39c)) {
                (_0x478073.prototype = new _0x2cf39c()).constructor = _0x478073;
                _0x49452e.merge(_0x478073.prototype, _0x5a9bd2);
              }
              _0x478073.$type = _0x478073.prototype.$type = this;
              _0x49452e.merge(_0x478073, _0x2cf39c, true);
              this._ctor = _0x478073;
              for (var _0x42d8f7 = 0x0; _0x42d8f7 < this.fieldsArray.length; ++_0x42d8f7) {
                this._fieldsArray[_0x42d8f7].resolve();
              }
              var _0x429d58 = {};
              for (_0x42d8f7 = 0x0; _0x42d8f7 < this.oneofsArray.length; ++_0x42d8f7) {
                _0x429d58[this._oneofsArray[_0x42d8f7].resolve().name] = {
                  'get': _0x49452e.oneOfGetter(this._oneofsArray[_0x42d8f7].oneof),
                  'set': _0x49452e.oneOfSetter(this._oneofsArray[_0x42d8f7].oneof)
                };
              }
              if (_0x42d8f7) {
                Object.defineProperties(_0x478073.prototype, _0x429d58);
              }
            }
          }
        });
        _0x58b0bf.generateConstructor = function (_0x597d18) {
          var _0x282c02;
          var _0xa4e750 = _0x49452e.codegen(['p'], _0x597d18.name);
          for (var _0xe019c6 = 0x0; _0xe019c6 < _0x597d18.fieldsArray.length; ++_0xe019c6) {
            if ((_0x282c02 = _0x597d18._fieldsArray[_0xe019c6]).map) {
              _0xa4e750("this%s={}", _0x49452e.safeProp(_0x282c02.name));
            } else if (_0x282c02.repeated) {
              _0xa4e750('this%s=[]', _0x49452e.safeProp(_0x282c02.name));
            }
          }
          return _0xa4e750("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")('this[ks[i]]=p[ks[i]]');
        };
        _0x58b0bf.fromJSON = function (_0x1c7f7a, _0x2da0d4) {
          var _0x4d7c90 = new _0x58b0bf(_0x1c7f7a, _0x2da0d4.options);
          _0x4d7c90.extensions = _0x2da0d4.extensions;
          _0x4d7c90.reserved = _0x2da0d4.reserved;
          var _0x5bc70a = Object.keys(_0x2da0d4.fields);
          for (var _0x4fc9c1 = 0x0; _0x4fc9c1 < _0x5bc70a.length; ++_0x4fc9c1) {
            _0x4d7c90.add((undefined !== _0x2da0d4.fields[_0x5bc70a[_0x4fc9c1]].keyType ? _0x193024.fromJSON : _0x4025f0.fromJSON)(_0x5bc70a[_0x4fc9c1], _0x2da0d4.fields[_0x5bc70a[_0x4fc9c1]]));
          }
          if (_0x2da0d4.oneofs) {
            _0x5bc70a = Object.keys(_0x2da0d4.oneofs);
            for (_0x4fc9c1 = 0x0; _0x4fc9c1 < _0x5bc70a.length; ++_0x4fc9c1) {
              _0x4d7c90.add(_0x32039a.fromJSON(_0x5bc70a[_0x4fc9c1], _0x2da0d4.oneofs[_0x5bc70a[_0x4fc9c1]]));
            }
          }
          if (_0x2da0d4.nested) {
            _0x5bc70a = Object.keys(_0x2da0d4.nested);
            for (_0x4fc9c1 = 0x0; _0x4fc9c1 < _0x5bc70a.length; ++_0x4fc9c1) {
              var _0x3dc2a0 = _0x2da0d4.nested[_0x5bc70a[_0x4fc9c1]];
              _0x4d7c90.add((undefined !== _0x3dc2a0.id ? _0x4025f0.fromJSON : undefined !== _0x3dc2a0.fields ? _0x58b0bf.fromJSON : undefined !== _0x3dc2a0.values ? _0x5532ce.fromJSON : undefined !== _0x3dc2a0.methods ? _0x1a811d.fromJSON : _0x4cd687.fromJSON)(_0x5bc70a[_0x4fc9c1], _0x3dc2a0));
            }
          }
          if (_0x2da0d4.extensions && _0x2da0d4.extensions.length) {
            _0x4d7c90.extensions = _0x2da0d4.extensions;
          }
          if (_0x2da0d4.reserved && _0x2da0d4.reserved.length) {
            _0x4d7c90.reserved = _0x2da0d4.reserved;
          }
          if (_0x2da0d4.group) {
            _0x4d7c90.group = true;
          }
          if (_0x2da0d4.comment) {
            _0x4d7c90.comment = _0x2da0d4.comment;
          }
          return _0x4d7c90;
        };
        _0x58b0bf.prototype.toJSON = function (_0x2d7b63) {
          var _0x2019b9 = _0x4cd687.prototype.toJSON.call(this, _0x2d7b63);
          var _0x4f2d4e = !!_0x2d7b63 && Boolean(_0x2d7b63.keepComments);
          return _0x49452e.toObject(["options", _0x2019b9 && _0x2019b9.options || undefined, 'oneofs', _0x4cd687.arrayToJSON(this.oneofsArray, _0x2d7b63), "fields", _0x4cd687.arrayToJSON(this.fieldsArray.filter(function (_0x50072c) {
            return !_0x50072c.declaringField;
          }), _0x2d7b63) || {}, 'extensions', this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, "nested", _0x2019b9 && _0x2019b9.nested || undefined, 'comment', _0x4f2d4e ? this.comment : undefined]);
        };
        _0x58b0bf.prototype.resolveAll = function () {
          var _0x59bb16 = this.fieldsArray;
          for (var _0x91834d = 0x0; _0x91834d < _0x59bb16.length;) {
            _0x59bb16[_0x91834d++].resolve();
          }
          var _0x2aec4c = this.oneofsArray;
          for (_0x91834d = 0x0; _0x91834d < _0x2aec4c.length;) {
            _0x2aec4c[_0x91834d++].resolve();
          }
          return _0x4cd687.prototype.resolveAll.call(this);
        };
        _0x58b0bf.prototype.get = function (_0x1d9d20) {
          return this.fields[_0x1d9d20] || this.oneofs && this.oneofs[_0x1d9d20] || this.nested && this.nested[_0x1d9d20] || null;
        };
        _0x58b0bf.prototype.add = function (_0xc2c104) {
          if (this.get(_0xc2c104.name)) {
            throw Error("duplicate name '" + _0xc2c104.name + "' in " + this);
          }
          if (_0xc2c104 instanceof _0x4025f0 && undefined === _0xc2c104.extend) {
            if (this._fieldsById ? this._fieldsById[_0xc2c104.id] : this.fieldsById[_0xc2c104.id]) {
              throw Error("duplicate id " + _0xc2c104.id + " in " + this);
            }
            if (this.isReservedId(_0xc2c104.id)) {
              throw Error("id " + _0xc2c104.id + " is reserved in " + this);
            }
            if (this.isReservedName(_0xc2c104.name)) {
              throw Error("name '" + _0xc2c104.name + "' is reserved in " + this);
            }
            if (_0xc2c104.parent) {
              _0xc2c104.parent.remove(_0xc2c104);
            }
            this.fields[_0xc2c104.name] = _0xc2c104;
            _0xc2c104.message = this;
            _0xc2c104.onAdd(this);
            return _0x8f9d95(this);
          }
          return _0xc2c104 instanceof _0x32039a ? (this.oneofs || (this.oneofs = {}), this.oneofs[_0xc2c104.name] = _0xc2c104, _0xc2c104.onAdd(this), _0x8f9d95(this)) : _0x4cd687.prototype.add.call(this, _0xc2c104);
        };
        _0x58b0bf.prototype.remove = function (_0x472ab4) {
          if (_0x472ab4 instanceof _0x4025f0 && undefined === _0x472ab4.extend) {
            if (!this.fields || this.fields[_0x472ab4.name] !== _0x472ab4) {
              throw Error(_0x472ab4 + " is not a member of " + this);
            }
            delete this.fields[_0x472ab4.name];
            _0x472ab4.parent = null;
            _0x472ab4.onRemove(this);
            return _0x8f9d95(this);
          }
          if (_0x472ab4 instanceof _0x32039a) {
            if (!this.oneofs || this.oneofs[_0x472ab4.name] !== _0x472ab4) {
              throw Error(_0x472ab4 + " is not a member of " + this);
            }
            delete this.oneofs[_0x472ab4.name];
            _0x472ab4.parent = null;
            _0x472ab4.onRemove(this);
            return _0x8f9d95(this);
          }
          return _0x4cd687.prototype.remove.call(this, _0x472ab4);
        };
        _0x58b0bf.prototype.isReservedId = function (_0x34fef8) {
          return _0x4cd687.isReservedId(this.reserved, _0x34fef8);
        };
        _0x58b0bf.prototype.isReservedName = function (_0x38533f) {
          return _0x4cd687.isReservedName(this.reserved, _0x38533f);
        };
        _0x58b0bf.prototype.create = function (_0x52b0e4) {
          return new this.ctor(_0x52b0e4);
        };
        _0x58b0bf.prototype.setup = function () {
          var _0x3bded4 = this.fullName;
          var _0x11e5e7 = [];
          for (var _0x4802e9 = 0x0; _0x4802e9 < this.fieldsArray.length; ++_0x4802e9) {
            _0x11e5e7.push(this._fieldsArray[_0x4802e9].resolve().resolvedType);
          }
          this.encode = _0x2cbce9(this)({
            'Writer': _0x5a737c,
            'types': _0x11e5e7,
            'util': _0x49452e
          });
          this.decode = _0x39a12a(this)({
            'Reader': _0x1faf54,
            'types': _0x11e5e7,
            'util': _0x49452e
          });
          this.verify = _0x34a834(this)({
            'types': _0x11e5e7,
            'util': _0x49452e
          });
          this.fromObject = _0x1c0490.fromObject(this)({
            'types': _0x11e5e7,
            'util': _0x49452e
          });
          this.toObject = _0x1c0490.toObject(this)({
            'types': _0x11e5e7,
            'util': _0x49452e
          });
          var _0x39f054 = _0x5832dc[_0x3bded4];
          if (_0x39f054) {
            var _0x35ca52 = Object.create(this);
            _0x35ca52.fromObject = this.fromObject;
            this.fromObject = _0x39f054.fromObject.bind(_0x35ca52);
            _0x35ca52.toObject = this.toObject;
            this.toObject = _0x39f054.toObject.bind(_0x35ca52);
          }
          return this;
        };
        _0x58b0bf.prototype.encode = function (_0x32e41b, _0x7809c3) {
          return this.setup().encode(_0x32e41b, _0x7809c3);
        };
        _0x58b0bf.prototype.encodeDelimited = function (_0x501281, _0x23e62c) {
          return this.encode(_0x501281, _0x23e62c && _0x23e62c.len ? _0x23e62c.fork() : _0x23e62c).ldelim();
        };
        _0x58b0bf.prototype.decode = function (_0x2a680f, _0x56eae2) {
          return this.setup().decode(_0x2a680f, _0x56eae2);
        };
        _0x58b0bf.prototype.decodeDelimited = function (_0x3441f4) {
          if (!(_0x3441f4 instanceof _0x1faf54)) {
            _0x3441f4 = _0x1faf54.create(_0x3441f4);
          }
          return this.decode(_0x3441f4, _0x3441f4.uint32());
        };
        _0x58b0bf.prototype.verify = function (_0x28fed3) {
          return this.setup().verify(_0x28fed3);
        };
        _0x58b0bf.prototype.fromObject = function (_0xc7a0e7) {
          return this.setup().fromObject(_0xc7a0e7);
        };
        _0x58b0bf.prototype.toObject = function (_0x35d9b2, _0x44f37e) {
          return this.setup().toObject(_0x35d9b2, _0x44f37e);
        };
        _0x58b0bf.d = function (_0x392228) {
          return function (_0x218fa2) {
            _0x49452e.decorateType(_0x218fa2, _0x392228);
          };
        };
        _0x3534a8.exports;
      }, function () {
        return {
          './namespace': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js',
          './enum': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/enum.js',
          './oneof': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './field': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './mapfield': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './service': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/service.js',
          './message': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          './reader': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './writer': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './encoder': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js",
          './decoder': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js',
          './verifier': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js',
          './converter': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          './wrappers': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js'
        };
      });
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/root.js", function (_0x57f605, _0x2f4eab, _0x3a8835, _0x563b70, _0x4adebd) {
        _0x3a8835.exports = _0x40fc9d;
        var _0x3e5e78 = _0x2f4eab("./namespace");
        ((_0x40fc9d.prototype = Object.create(_0x3e5e78.prototype)).constructor = _0x40fc9d).className = "Root";
        var _0x48485a;
        var _0x516006;
        var _0x4f46f;
        var _0x152307 = _0x2f4eab("./field");
        var _0x4fc2ac = _0x2f4eab("./enum");
        var _0x5ef7c2 = _0x2f4eab("./oneof");
        var _0x3054e9 = _0x2f4eab("./util");
        function _0x40fc9d(_0x3e23d9) {
          _0x3e5e78.call(this, '', _0x3e23d9);
          this.deferred = [];
          this.files = [];
        }
        function _0x5177e3() {}
        _0x40fc9d.fromJSON = function (_0x41fb57, _0x126227) {
          if (!_0x126227) {
            _0x126227 = new _0x40fc9d();
          }
          if (_0x41fb57.options) {
            _0x126227.setOptions(_0x41fb57.options);
          }
          return _0x126227.addJSON(_0x41fb57.nested);
        };
        _0x40fc9d.prototype.resolvePath = _0x3054e9.path.resolve;
        _0x40fc9d.prototype.fetch = _0x3054e9.fetch;
        _0x40fc9d.prototype.load = function _0x124596(_0x24a885, _0x4151de, _0x145ff2) {
          if ("function" == typeof _0x4151de) {
            _0x145ff2 = _0x4151de;
            _0x4151de = undefined;
          }
          var _0x135ac0 = this;
          if (!_0x145ff2) {
            return _0x3054e9.asPromise(_0x124596, _0x135ac0, _0x24a885, _0x4151de);
          }
          var _0x48edc4 = _0x145ff2 === _0x5177e3;
          function _0x4c40fd(_0x5a85c6, _0x48c047) {
            if (_0x145ff2) {
              var _0x7d3b43 = _0x145ff2;
              _0x145ff2 = null;
              if (_0x48edc4) {
                throw _0x5a85c6;
              }
              _0x7d3b43(_0x5a85c6, _0x48c047);
            }
          }
          function _0x5ecbf9(_0x183069) {
            var _0x44adef = _0x183069.lastIndexOf("google/protobuf/");
            if (_0x44adef > -0x1) {
              var _0x1b723b = _0x183069.substring(_0x44adef);
              if (_0x1b723b in _0x4f46f) {
                return _0x1b723b;
              }
            }
            return null;
          }
          function _0x28d526(_0x5de43d, _0x24af7b) {
            try {
              if (_0x3054e9.isString(_0x24af7b) && '{' === _0x24af7b.charAt(0x0)) {
                _0x24af7b = JSON.parse(_0x24af7b);
              }
              if (_0x3054e9.isString(_0x24af7b)) {
                _0x516006.filename = _0x5de43d;
                var _0x24ccec;
                var _0x11f28a = _0x516006(_0x24af7b, _0x135ac0, _0x4151de);
                var _0xea1215 = 0x0;
                if (_0x11f28a.imports) {
                  for (; _0xea1215 < _0x11f28a.imports.length; ++_0xea1215) {
                    if (_0x24ccec = _0x5ecbf9(_0x11f28a.imports[_0xea1215]) || _0x135ac0.resolvePath(_0x5de43d, _0x11f28a.imports[_0xea1215])) {
                      _0x5e118f(_0x24ccec);
                    }
                  }
                }
                if (_0x11f28a.weakImports) {
                  for (_0xea1215 = 0x0; _0xea1215 < _0x11f28a.weakImports.length; ++_0xea1215) {
                    if (_0x24ccec = _0x5ecbf9(_0x11f28a.weakImports[_0xea1215]) || _0x135ac0.resolvePath(_0x5de43d, _0x11f28a.weakImports[_0xea1215])) {
                      _0x5e118f(_0x24ccec, true);
                    }
                  }
                }
              } else {
                _0x135ac0.setOptions(_0x24af7b.options).addJSON(_0x24af7b.nested);
              }
            } catch (_0x80cb2c) {
              _0x4c40fd(_0x80cb2c);
            }
            if (!(_0x48edc4 || _0x15b837)) {
              _0x4c40fd(null, _0x135ac0);
            }
          }
          function _0x5e118f(_0x244646, _0x59646a) {
            if (!(_0x135ac0.files.indexOf(_0x244646) > -0x1)) {
              _0x135ac0.files.push(_0x244646);
              if (_0x244646 in _0x4f46f) {
                if (_0x48edc4) {
                  _0x28d526(_0x244646, _0x4f46f[_0x244646]);
                } else {
                  ++_0x15b837;
                  setTimeout(function () {
                    --_0x15b837;
                    _0x28d526(_0x244646, _0x4f46f[_0x244646]);
                  });
                }
              } else {
                if (_0x48edc4) {
                  var _0x23ff4a;
                  try {
                    _0x23ff4a = _0x3054e9.fs.readFileSync(_0x244646).toString('utf8');
                  } catch (_0x21e3c8) {
                    return void (_0x59646a || _0x4c40fd(_0x21e3c8));
                  }
                  _0x28d526(_0x244646, _0x23ff4a);
                } else {
                  ++_0x15b837;
                  _0x135ac0.fetch(_0x244646, function (_0x55098d, _0x329542) {
                    --_0x15b837;
                    if (_0x145ff2) {
                      if (_0x55098d) {
                        if (_0x59646a) {
                          if (!_0x15b837) {
                            _0x4c40fd(null, _0x135ac0);
                          }
                        } else {
                          _0x4c40fd(_0x55098d);
                        }
                      } else {
                        _0x28d526(_0x244646, _0x329542);
                      }
                    }
                  });
                }
              }
            }
          }
          var _0x15b837 = 0x0;
          if (_0x3054e9.isString(_0x24a885)) {
            _0x24a885 = [_0x24a885];
          }
          var _0x3cdefa;
          for (var _0x21a48f = 0x0; _0x21a48f < _0x24a885.length; ++_0x21a48f) {
            if (_0x3cdefa = _0x135ac0.resolvePath('', _0x24a885[_0x21a48f])) {
              _0x5e118f(_0x3cdefa);
            }
          }
          if (_0x48edc4) {
            return _0x135ac0;
          }
          if (!_0x15b837) {
            _0x4c40fd(null, _0x135ac0);
          }
        };
        _0x40fc9d.prototype.loadSync = function (_0x1f13a8, _0x3222e6) {
          if (!_0x3054e9.isNode) {
            throw Error("not supported");
          }
          return this.load(_0x1f13a8, _0x3222e6, _0x5177e3);
        };
        _0x40fc9d.prototype.resolveAll = function () {
          if (this.deferred.length) {
            throw Error("unresolvable extensions: " + this.deferred.map(function (_0x301f8e) {
              return "'extend " + _0x301f8e.extend + "' in " + _0x301f8e.parent.fullName;
            }).join(", "));
          }
          return _0x3e5e78.prototype.resolveAll.call(this);
        };
        var _0x59b234 = /^[A-Z]/;
        function _0x1565e4(_0x478fa8, _0x2e04f3) {
          var _0x25df21 = _0x2e04f3.parent.lookup(_0x2e04f3.extend);
          if (_0x25df21) {
            var _0x761cd = new _0x152307(_0x2e04f3.fullName, _0x2e04f3.id, _0x2e04f3.type, _0x2e04f3.rule, undefined, _0x2e04f3.options);
            _0x761cd.declaringField = _0x2e04f3;
            _0x2e04f3.extensionField = _0x761cd;
            _0x25df21.add(_0x761cd);
            return true;
          }
          return false;
        }
        _0x40fc9d.prototype._handleAdd = function (_0x3fb86f) {
          if (_0x3fb86f instanceof _0x152307) {
            if (!(undefined === _0x3fb86f.extend || _0x3fb86f.extensionField || _0x1565e4(0x0, _0x3fb86f))) {
              this.deferred.push(_0x3fb86f);
            }
          } else {
            if (_0x3fb86f instanceof _0x4fc2ac) {
              if (_0x59b234.test(_0x3fb86f.name)) {
                _0x3fb86f.parent[_0x3fb86f.name] = _0x3fb86f.values;
              }
            } else {
              if (!(_0x3fb86f instanceof _0x5ef7c2)) {
                if (_0x3fb86f instanceof _0x48485a) {
                  for (var _0x5140e2 = 0x0; _0x5140e2 < this.deferred.length;) {
                    if (_0x1565e4(0x0, this.deferred[_0x5140e2])) {
                      this.deferred.splice(_0x5140e2, 0x1);
                    } else {
                      ++_0x5140e2;
                    }
                  }
                }
                for (var _0x572018 = 0x0; _0x572018 < _0x3fb86f.nestedArray.length; ++_0x572018) {
                  this._handleAdd(_0x3fb86f._nestedArray[_0x572018]);
                }
                if (_0x59b234.test(_0x3fb86f.name)) {
                  _0x3fb86f.parent[_0x3fb86f.name] = _0x3fb86f;
                }
              }
            }
          }
        };
        _0x40fc9d.prototype._handleRemove = function (_0x193b68) {
          if (_0x193b68 instanceof _0x152307) {
            if (undefined !== _0x193b68.extend) {
              if (_0x193b68.extensionField) {
                _0x193b68.extensionField.parent.remove(_0x193b68.extensionField);
                _0x193b68.extensionField = null;
              } else {
                var _0x91249c = this.deferred.indexOf(_0x193b68);
                if (_0x91249c > -0x1) {
                  this.deferred.splice(_0x91249c, 0x1);
                }
              }
            }
          } else {
            if (_0x193b68 instanceof _0x4fc2ac) {
              if (_0x59b234.test(_0x193b68.name)) {
                delete _0x193b68.parent[_0x193b68.name];
              }
            } else {
              if (_0x193b68 instanceof _0x3e5e78) {
                for (var _0x458962 = 0x0; _0x458962 < _0x193b68.nestedArray.length; ++_0x458962) {
                  this._handleRemove(_0x193b68._nestedArray[_0x458962]);
                }
                if (_0x59b234.test(_0x193b68.name)) {
                  delete _0x193b68.parent[_0x193b68.name];
                }
              }
            }
          }
        };
        _0x40fc9d._configure = function (_0x2d7b66, _0x3b861e, _0x2ba1c9) {
          _0x48485a = _0x2d7b66;
          _0x516006 = _0x3b861e;
          _0x4f46f = _0x2ba1c9;
        };
        _0x3a8835.exports;
      }, function () {
        return {
          './namespace': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js',
          './field': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './enum': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/enum.js',
          './oneof': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util.js", function (_0x44fc45, _0x34c816, _0x3b7c9d, _0x461cad, _0x38a461) {
        var _0x14f901;
        var _0xb46f61;
        var _0x49616b = _0x3b7c9d.exports = _0x34c816("./util/minimal");
        var _0x55b713 = _0x34c816("./roots");
        _0x49616b.codegen = _0x34c816("@protobufjs/codegen");
        _0x49616b.fetch = _0x34c816("@protobufjs/fetch");
        _0x49616b.path = _0x34c816('@protobufjs/path');
        _0x49616b.fs = _0x49616b.inquire('fs');
        _0x49616b.toArray = function (_0x2b7d65) {
          if (_0x2b7d65) {
            var _0x4eab31 = Object.keys(_0x2b7d65);
            var _0x34aab5 = new Array(_0x4eab31.length);
            for (var _0x206362 = 0x0; _0x206362 < _0x4eab31.length;) {
              _0x34aab5[_0x206362] = _0x2b7d65[_0x4eab31[_0x206362++]];
            }
            return _0x34aab5;
          }
          return [];
        };
        _0x49616b.toObject = function (_0x3ace48) {
          var _0x16c46f = {};
          for (var _0x5f49bc = 0x0; _0x5f49bc < _0x3ace48.length;) {
            var _0x23ba72 = _0x3ace48[_0x5f49bc++];
            var _0x3f5cec = _0x3ace48[_0x5f49bc++];
            if (undefined !== _0x3f5cec) {
              _0x16c46f[_0x23ba72] = _0x3f5cec;
            }
          }
          return _0x16c46f;
        };
        var _0x4d1d82 = /\\/g;
        var _0x178d88 = /"/g;
        _0x49616b.isReserved = function (_0xf8a937) {
          return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(_0xf8a937);
        };
        _0x49616b.safeProp = function (_0x1932e7) {
          return !/^[$\w_]+$/.test(_0x1932e7) || _0x49616b.isReserved(_0x1932e7) ? "[\"" + _0x1932e7.replace(_0x4d1d82, "\\\\").replace(_0x178d88, "\\\"") + "\"]" : '.' + _0x1932e7;
        };
        _0x49616b.ucFirst = function (_0x4a622b) {
          return _0x4a622b.charAt(0x0).toUpperCase() + _0x4a622b.substring(0x1);
        };
        var _0x91c0b6 = /_([a-z])/g;
        _0x49616b.camelCase = function (_0x1baa57) {
          return _0x1baa57.substring(0x0, 0x1) + _0x1baa57.substring(0x1).replace(_0x91c0b6, function (_0x15a1f2, _0x47adf2) {
            return _0x47adf2.toUpperCase();
          });
        };
        _0x49616b.compareFieldsById = function (_0x1b30a9, _0x2c97e6) {
          return _0x1b30a9.id - _0x2c97e6.id;
        };
        _0x49616b.decorateType = function (_0x44b405, _0x45ddb8) {
          if (_0x44b405.$type) {
            if (_0x45ddb8 && _0x44b405.$type.name !== _0x45ddb8) {
              _0x49616b.decorateRoot.remove(_0x44b405.$type);
              _0x44b405.$type.name = _0x45ddb8;
              _0x49616b.decorateRoot.add(_0x44b405.$type);
            }
            return _0x44b405.$type;
          }
          if (!_0x14f901) {
            _0x14f901 = _0x34c816("./type");
          }
          var _0x312f45 = new _0x14f901(_0x45ddb8 || _0x44b405.name);
          _0x49616b.decorateRoot.add(_0x312f45);
          _0x312f45.ctor = _0x44b405;
          Object.defineProperty(_0x44b405, "$type", {
            'value': _0x312f45,
            'enumerable': false
          });
          Object.defineProperty(_0x44b405.prototype, "$type", {
            'value': _0x312f45,
            'enumerable': false
          });
          return _0x312f45;
        };
        var _0x10e6d6 = 0x0;
        _0x49616b.decorateEnum = function (_0xade23c) {
          if (_0xade23c.$type) {
            return _0xade23c.$type;
          }
          if (!_0xb46f61) {
            _0xb46f61 = _0x34c816("./enum");
          }
          var _0x26eceb = new _0xb46f61("Enum" + _0x10e6d6++, _0xade23c);
          _0x49616b.decorateRoot.add(_0x26eceb);
          Object.defineProperty(_0xade23c, "$type", {
            'value': _0x26eceb,
            'enumerable': false
          });
          return _0x26eceb;
        };
        _0x49616b.setProperty = function (_0x1099c3, _0x3b04fa, _0x284197) {
          if ("object" != typeof _0x1099c3) {
            throw TypeError("dst must be an object");
          }
          if (!_0x3b04fa) {
            throw TypeError("path must be specified");
          }
          return function _0x449e33(_0x212293, _0x1f0daa, _0x12264b) {
            var _0x27d438 = _0x1f0daa.shift();
            if ('__proto__' === _0x27d438 || "prototype" === _0x27d438) {
              return _0x212293;
            }
            if (_0x1f0daa.length > 0x0) {
              _0x212293[_0x27d438] = _0x449e33(_0x212293[_0x27d438] || {}, _0x1f0daa, _0x12264b);
            } else {
              var _0x1f798a = _0x212293[_0x27d438];
              if (_0x1f798a) {
                _0x12264b = [].concat(_0x1f798a).concat(_0x12264b);
              }
              _0x212293[_0x27d438] = _0x12264b;
            }
            return _0x212293;
          }(_0x1099c3, _0x3b04fa = _0x3b04fa.split('.'), _0x284197);
        };
        Object.defineProperty(_0x49616b, "decorateRoot", {
          'get': function () {
            return _0x55b713.decorated || (_0x55b713.decorated = new (_0x34c816("./root"))());
          }
        });
        _0x3b7c9d.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          './roots': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/roots.js",
          '@protobufjs/codegen': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js",
          '@protobufjs/fetch': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js",
          '@protobufjs/path': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/@protobufjs/path/index.js',
          './type': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/type.js',
          './enum': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/enum.js',
          './root': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/root.js"
        };
      });
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/object.js", function (_0xadd9ce, _0x297ebd, _0x37cea8, _0xe22eda, _0x1b2df0) {
        _0x37cea8.exports = _0x2d870e;
        _0x2d870e.className = 'ReflectionObject';
        var _0x59aae0;
        var _0x1eb635 = _0x297ebd("./util");
        function _0x2d870e(_0x468066, _0x1a73b5) {
          if (!_0x1eb635.isString(_0x468066)) {
            throw TypeError("name must be a string");
          }
          if (_0x1a73b5 && !_0x1eb635.isObject(_0x1a73b5)) {
            throw TypeError("options must be an object");
          }
          this.options = _0x1a73b5;
          this.parsedOptions = null;
          this.name = _0x468066;
          this.parent = null;
          this.resolved = false;
          this.comment = null;
          this.filename = null;
        }
        Object.defineProperties(_0x2d870e.prototype, {
          'root': {
            'get': function () {
              for (var _0x2498c8 = this; null !== _0x2498c8.parent;) {
                _0x2498c8 = _0x2498c8.parent;
              }
              return _0x2498c8;
            }
          },
          'fullName': {
            'get': function () {
              var _0x23d8e2 = [this.name];
              for (var _0x2dba76 = this.parent; _0x2dba76;) {
                _0x23d8e2.unshift(_0x2dba76.name);
                _0x2dba76 = _0x2dba76.parent;
              }
              return _0x23d8e2.join('.');
            }
          }
        });
        _0x2d870e.prototype.toJSON = function () {
          throw Error();
        };
        _0x2d870e.prototype.onAdd = function (_0x2f426e) {
          if (this.parent && this.parent !== _0x2f426e) {
            this.parent.remove(this);
          }
          this.parent = _0x2f426e;
          this.resolved = false;
          var _0x4ad428 = _0x2f426e.root;
          if (_0x4ad428 instanceof _0x59aae0) {
            _0x4ad428._handleAdd(this);
          }
        };
        _0x2d870e.prototype.onRemove = function (_0x36d018) {
          var _0x1e39fc = _0x36d018.root;
          if (_0x1e39fc instanceof _0x59aae0) {
            _0x1e39fc._handleRemove(this);
          }
          this.parent = null;
          this.resolved = false;
        };
        _0x2d870e.prototype.resolve = function () {
          if (!this.resolved) {
            if (this.root instanceof _0x59aae0) {
              this.resolved = true;
            }
          }
          return this;
        };
        _0x2d870e.prototype.getOption = function (_0x114d58) {
          if (this.options) {
            return this.options[_0x114d58];
          }
        };
        _0x2d870e.prototype.setOption = function (_0x586f3, _0x5cc6ce, _0x19058d) {
          if (!(_0x19058d && this.options && undefined !== this.options[_0x586f3])) {
            (this.options || (this.options = {}))[_0x586f3] = _0x5cc6ce;
          }
          return this;
        };
        _0x2d870e.prototype.setParsedOption = function (_0x272a31, _0x16a2eb, _0x283e28) {
          if (!this.parsedOptions) {
            this.parsedOptions = [];
          }
          var _0x4c462c = this.parsedOptions;
          if (_0x283e28) {
            var _0x4d93a4 = _0x4c462c.find(function (_0x5afa74) {
              return Object.prototype.hasOwnProperty.call(_0x5afa74, _0x272a31);
            });
            if (_0x4d93a4) {
              var _0x53a251 = _0x4d93a4[_0x272a31];
              _0x1eb635.setProperty(_0x53a251, _0x283e28, _0x16a2eb);
            } else {
              (_0x4d93a4 = {})[_0x272a31] = _0x1eb635.setProperty({}, _0x283e28, _0x16a2eb);
              _0x4c462c.push(_0x4d93a4);
            }
          } else {
            var _0x3ae140 = {
              _0x272a31: _0x16a2eb
            };
            _0x4c462c.push(_0x3ae140);
          }
          return this;
        };
        _0x2d870e.prototype.setOptions = function (_0x12c5ef, _0x310285) {
          if (_0x12c5ef) {
            var _0x37a428 = Object.keys(_0x12c5ef);
            for (var _0x4032cc = 0x0; _0x4032cc < _0x37a428.length; ++_0x4032cc) {
              this.setOption(_0x37a428[_0x4032cc], _0x12c5ef[_0x37a428[_0x4032cc]], _0x310285);
            }
          }
          return this;
        };
        _0x2d870e.prototype.toString = function () {
          var _0x4dbdeb = this.constructor.className;
          var _0x53e892 = this.fullName;
          return _0x53e892.length ? _0x4dbdeb + " " + _0x53e892 : _0x4dbdeb;
        };
        _0x2d870e._configure = function (_0x58229f) {
          _0x59aae0 = _0x58229f;
        };
        _0x37cea8.exports;
      }, function () {
        return {
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x50443a.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/enum.js', function (_0x49341d, _0x33ce9d, _0x423ced, _0x1a392b, _0x2dd2ec) {
        _0x423ced.exports = _0x136f1c;
        var _0x525e1f = _0x33ce9d("./object");
        ((_0x136f1c.prototype = Object.create(_0x525e1f.prototype)).constructor = _0x136f1c).className = 'Enum';
        var _0x4814ef = _0x33ce9d('./namespace');
        var _0x19a30f = _0x33ce9d("./util");
        function _0x136f1c(_0x32a81d, _0x35cee6, _0x309a5a, _0x5d3b70, _0x594fc2) {
          _0x525e1f.call(this, _0x32a81d, _0x309a5a);
          if (_0x35cee6 && 'object' != typeof _0x35cee6) {
            throw TypeError("values must be an object");
          }
          this.valuesById = {};
          this.values = Object.create(this.valuesById);
          this.comment = _0x5d3b70;
          this.comments = _0x594fc2 || {};
          this.reserved = undefined;
          if (_0x35cee6) {
            var _0x433894 = Object.keys(_0x35cee6);
            for (var _0x53b1bf = 0x0; _0x53b1bf < _0x433894.length; ++_0x53b1bf) {
              if ("number" == typeof _0x35cee6[_0x433894[_0x53b1bf]]) {
                this.valuesById[this.values[_0x433894[_0x53b1bf]] = _0x35cee6[_0x433894[_0x53b1bf]]] = _0x433894[_0x53b1bf];
              }
            }
          }
        }
        _0x136f1c.fromJSON = function (_0x216107, _0x5a7b1a) {
          var _0x2d858e = new _0x136f1c(_0x216107, _0x5a7b1a.values, _0x5a7b1a.options, _0x5a7b1a.comment, _0x5a7b1a.comments);
          _0x2d858e.reserved = _0x5a7b1a.reserved;
          return _0x2d858e;
        };
        _0x136f1c.prototype.toJSON = function (_0x287e18) {
          var _0x6b6007 = !!_0x287e18 && Boolean(_0x287e18.keepComments);
          return _0x19a30f.toObject(['options', this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", _0x6b6007 ? this.comment : undefined, "comments", _0x6b6007 ? this.comments : undefined]);
        };
        _0x136f1c.prototype.add = function (_0x9611cc, _0x1afead, _0x4bf820) {
          if (!_0x19a30f.isString(_0x9611cc)) {
            throw TypeError("name must be a string");
          }
          if (!_0x19a30f.isInteger(_0x1afead)) {
            throw TypeError("id must be an integer");
          }
          if (undefined !== this.values[_0x9611cc]) {
            throw Error("duplicate name '" + _0x9611cc + "' in " + this);
          }
          if (this.isReservedId(_0x1afead)) {
            throw Error("id " + _0x1afead + " is reserved in " + this);
          }
          if (this.isReservedName(_0x9611cc)) {
            throw Error("name '" + _0x9611cc + "' is reserved in " + this);
          }
          if (undefined !== this.valuesById[_0x1afead]) {
            if (!this.options || !this.options.allow_alias) {
              throw Error("duplicate id " + _0x1afead + " in " + this);
            }
            this.values[_0x9611cc] = _0x1afead;
          } else {
            this.valuesById[this.values[_0x9611cc] = _0x1afead] = _0x9611cc;
          }
          this.comments[_0x9611cc] = _0x4bf820 || null;
          return this;
        };
        _0x136f1c.prototype.remove = function (_0xab8c9d) {
          if (!_0x19a30f.isString(_0xab8c9d)) {
            throw TypeError("name must be a string");
          }
          var _0x4231ce = this.values[_0xab8c9d];
          if (null == _0x4231ce) {
            throw Error("name '" + _0xab8c9d + "' does not exist in " + this);
          }
          delete this.valuesById[_0x4231ce];
          delete this.values[_0xab8c9d];
          delete this.comments[_0xab8c9d];
          return this;
        };
        _0x136f1c.prototype.isReservedId = function (_0xc85671) {
          return _0x4814ef.isReservedId(this.reserved, _0xc85671);
        };
        _0x136f1c.prototype.isReservedName = function (_0x72d8b3) {
          return _0x4814ef.isReservedName(this.reserved, _0x72d8b3);
        };
        _0x423ced.exports;
      }, function () {
        return {
          './object': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './namespace': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js',
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js", function (_0x5ba02a, _0x2ce514, _0xb0e64, _0x53cd47, _0x38d553) {
        _0xb0e64.exports = function (_0x2a4997) {
          var _0x3d8ad1;
          var _0x6a4137 = _0x17eddf.codegen(['m', 'w'], _0x2a4997.name + '$encode')("if(!w)")("w=Writer.create()");
          var _0x159cee = _0x2a4997.fieldsArray.slice().sort(_0x17eddf.compareFieldsById);
          for (var _0x1bc077 = 0x0; _0x1bc077 < _0x159cee.length; ++_0x1bc077) {
            var _0x19efad = _0x159cee[_0x1bc077].resolve();
            var _0x3dbeca = _0x2a4997._fieldsArray.indexOf(_0x19efad);
            var _0x416316 = _0x19efad.resolvedType instanceof _0x55d479 ? "int32" : _0x19efad.type;
            var _0x16dd7b = _0x455f24.basic[_0x416316];
            _0x3d8ad1 = 'm' + _0x17eddf.safeProp(_0x19efad.name);
            if (_0x19efad.map) {
              _0x6a4137("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", _0x3d8ad1, _0x19efad.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", _0x3d8ad1)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (_0x19efad.id << 0x3 | 0x2) >>> 0x0, 0x8 | _0x455f24.mapKey[_0x19efad.keyType], _0x19efad.keyType);
              if (undefined === _0x16dd7b) {
                _0x6a4137("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", _0x3dbeca, _0x3d8ad1);
              } else {
                _0x6a4137('.uint32(%i).%s(%s[ks[i]]).ldelim()', 0x10 | _0x16dd7b, _0x416316, _0x3d8ad1);
              }
              _0x6a4137('}')('}');
            } else if (_0x19efad.repeated) {
              _0x6a4137("if(%s!=null&&%s.length){", _0x3d8ad1, _0x3d8ad1);
              if (_0x19efad.packed && undefined !== _0x455f24.packed[_0x416316]) {
                _0x6a4137("w.uint32(%i).fork()", (_0x19efad.id << 0x3 | 0x2) >>> 0x0)("for(var i=0;i<%s.length;++i)", _0x3d8ad1)("w.%s(%s[i])", _0x416316, _0x3d8ad1)('w.ldelim()');
              } else {
                _0x6a4137("for(var i=0;i<%s.length;++i)", _0x3d8ad1);
                if (undefined === _0x16dd7b) {
                  if (_0x19efad.resolvedType.group) {
                    _0x6a4137("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0x3dbeca, _0x3d8ad1 + '[i]', (_0x19efad.id << 0x3 | 0x3) >>> 0x0, (_0x19efad.id << 0x3 | 0x4) >>> 0x0);
                  } else {
                    _0x6a4137("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", _0x3dbeca, _0x3d8ad1 + '[i]', (_0x19efad.id << 0x3 | 0x2) >>> 0x0);
                  }
                } else {
                  _0x6a4137("w.uint32(%i).%s(%s[i])", (_0x19efad.id << 0x3 | _0x16dd7b) >>> 0x0, _0x416316, _0x3d8ad1);
                }
              }
              _0x6a4137('}');
            } else {
              if (_0x19efad.optional) {
                _0x6a4137("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", _0x3d8ad1, _0x19efad.name);
              }
              if (undefined === _0x16dd7b) {
                if (_0x19efad.resolvedType.group) {
                  _0x6a4137("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0x3dbeca, _0x3d8ad1, (_0x19efad.id << 0x3 | 0x3) >>> 0x0, (_0x19efad.id << 0x3 | 0x4) >>> 0x0);
                } else {
                  _0x6a4137("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", _0x3dbeca, _0x3d8ad1, (_0x19efad.id << 0x3 | 0x2) >>> 0x0);
                }
              } else {
                _0x6a4137('w.uint32(%i).%s(%s)', (_0x19efad.id << 0x3 | _0x16dd7b) >>> 0x0, _0x416316, _0x3d8ad1);
              }
            }
          }
          return _0x6a4137("return w");
        };
        var _0x55d479 = _0x2ce514("./enum");
        var _0x455f24 = _0x2ce514("./types");
        var _0x17eddf = _0x2ce514("./util");
        _0xb0e64.exports;
      }, function () {
        return {
          './enum': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/enum.js',
          './types': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/types.js',
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js", function (_0x2a9b14, _0x3d464e, _0x3334b5, _0x5b3b5e, _0x1b66ee) {
        var _0x178bac = _0x3334b5.exports = _0x3d464e("./index-minimal");
        _0x178bac.build = "light";
        _0x178bac.load = function (_0x5bbd93, _0x40d633, _0x3df0df) {
          if ("function" == typeof _0x40d633) {
            _0x3df0df = _0x40d633;
            _0x40d633 = new _0x178bac.Root();
          } else if (!_0x40d633) {
            _0x40d633 = new _0x178bac.Root();
          }
          return _0x40d633.load(_0x5bbd93, _0x3df0df);
        };
        _0x178bac.loadSync = function (_0xac64df, _0x1459da) {
          if (!_0x1459da) {
            _0x1459da = new _0x178bac.Root();
          }
          return _0x1459da.loadSync(_0xac64df);
        };
        _0x178bac.encoder = _0x3d464e('./encoder');
        _0x178bac.decoder = _0x3d464e('./decoder');
        _0x178bac.verifier = _0x3d464e("./verifier");
        _0x178bac.converter = _0x3d464e("./converter");
        _0x178bac.ReflectionObject = _0x3d464e("./object");
        _0x178bac.Namespace = _0x3d464e("./namespace");
        _0x178bac.Root = _0x3d464e("./root");
        _0x178bac.Enum = _0x3d464e("./enum");
        _0x178bac.Type = _0x3d464e("./type");
        _0x178bac.Field = _0x3d464e("./field");
        _0x178bac.OneOf = _0x3d464e("./oneof");
        _0x178bac.MapField = _0x3d464e("./mapfield");
        _0x178bac.Service = _0x3d464e('./service');
        _0x178bac.Method = _0x3d464e("./method");
        _0x178bac.Message = _0x3d464e("./message");
        _0x178bac.wrappers = _0x3d464e("./wrappers");
        _0x178bac.types = _0x3d464e("./types");
        _0x178bac.util = _0x3d464e('./util');
        _0x178bac.ReflectionObject._configure(_0x178bac.Root);
        _0x178bac.Namespace._configure(_0x178bac.Type, _0x178bac.Service, _0x178bac.Enum);
        _0x178bac.Root._configure(_0x178bac.Type);
        _0x178bac.Field._configure(_0x178bac.Type);
        _0x3334b5.exports;
      }, function () {
        return {
          './index-minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js",
          './encoder': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js",
          './decoder': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js',
          './verifier': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js',
          './converter': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          './object': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './namespace': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js',
          './root': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          './enum': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/enum.js',
          './type': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/type.js',
          './field': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './oneof': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './mapfield': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './service': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/service.js',
          './method': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          './message': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          './wrappers': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js',
          './types': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/types.js',
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js", function (_0x2dcf42, _0x159d18, _0x585108, _0x131e50, _0x8222) {
        _0x585108.exports = _0x1d6c77;
        var _0x68b0b5 = /[\s{}=;:[\],'"()<>]/g;
        var _0xcaa25 = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
        var _0x50c41b = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
        var _0x5712a6 = /^ *[*/]+ */;
        var _0x4e0563 = /^\s*\*?\/*/;
        var _0x5f1138 = /\n/g;
        var _0x29da54 = /\s/;
        var _0x3641a3 = /\\(.?)/g;
        var _0x16a123 = {
          0x0: "\0",
          'r': "\r",
          'n': "\n",
          't': "\t"
        };
        function _0x909f1c(_0x332ff7) {
          return _0x332ff7.replace(_0x3641a3, function (_0x21d916, _0x465d13) {
            switch (_0x465d13) {
              case "\\":
              case '':
                return _0x465d13;
              default:
                return _0x16a123[_0x465d13] || '';
            }
          });
        }
        function _0x1d6c77(_0x2bde68, _0x4b5ae8) {
          _0x2bde68 = _0x2bde68.toString();
          var _0x125842 = 0x0;
          var _0x497b83 = _0x2bde68.length;
          var _0x479c4e = 0x1;
          var _0x4f8164 = null;
          var _0x440e8d = null;
          var _0xc8cd66 = 0x0;
          var _0x3e4cab = false;
          var _0x52f548 = false;
          var _0x174899 = [];
          var _0x294acd = null;
          function _0x1bd4f1(_0x1995df, _0x432684, _0x32f803) {
            _0x4f8164 = _0x2bde68.charAt(_0x1995df++);
            _0xc8cd66 = _0x479c4e;
            _0x3e4cab = false;
            _0x52f548 = _0x32f803;
            var _0x509b1c;
            var _0x102bb4 = _0x1995df - (_0x4b5ae8 ? 0x2 : 0x3);
            do {
              if (--_0x102bb4 < 0x0 || "\n" === (_0x509b1c = _0x2bde68.charAt(_0x102bb4))) {
                _0x3e4cab = true;
                break;
              }
            } while (" " === _0x509b1c || "\t" === _0x509b1c);
            var _0x3000d0 = _0x2bde68.substring(_0x1995df, _0x432684).split(_0x5f1138);
            for (var _0x3c9559 = 0x0; _0x3c9559 < _0x3000d0.length; ++_0x3c9559) {
              _0x3000d0[_0x3c9559] = _0x3000d0[_0x3c9559].replace(_0x4b5ae8 ? _0x4e0563 : _0x5712a6, '').trim();
            }
            _0x440e8d = _0x3000d0.join("\n").trim();
          }
          function _0x27c1c7(_0x26a61e) {
            var _0x16bfff = _0x45dd9b(_0x26a61e);
            var _0x1c5158 = _0x2bde68.substring(_0x26a61e, _0x16bfff);
            return /^\s*\/{1,2}/.test(_0x1c5158);
          }
          function _0x45dd9b(_0x4bbf4e) {
            for (var _0x412065 = _0x4bbf4e; _0x412065 < _0x497b83 && "\n" !== _0x2bde68.charAt(_0x412065);) {
              _0x412065++;
            }
            return _0x412065;
          }
          function _0x19a3fe() {
            if (_0x174899.length > 0x0) {
              return _0x174899.shift();
            }
            if (_0x294acd) {
              return function () {
                var _0x4a3e2a = "'" === _0x294acd ? _0x50c41b : _0xcaa25;
                _0x4a3e2a.lastIndex = _0x125842 - 0x1;
                var _0x118bdf = _0x4a3e2a.exec(_0x2bde68);
                if (!_0x118bdf) {
                  throw Error("illegal string (line " + _0x479c4e + ')');
                }
                _0x125842 = _0x4a3e2a.lastIndex;
                _0x12491c(_0x294acd);
                _0x294acd = null;
                return _0x909f1c(_0x118bdf[0x1]);
              }();
            }
            var _0x39fb0d;
            var _0x2b5034;
            var _0x35c7bd;
            var _0x41122d;
            var _0x41875c;
            var _0x121d5a = 0x0 === _0x125842;
            do {
              if (_0x125842 === _0x497b83) {
                return null;
              }
              for (_0x39fb0d = false; _0x29da54.test(_0x35c7bd = _0x2bde68.charAt(_0x125842));) {
                if ("\n" === _0x35c7bd) {
                  _0x121d5a = true;
                  ++_0x479c4e;
                }
                if (++_0x125842 === _0x497b83) {
                  return null;
                }
              }
              if ('/' === _0x2bde68.charAt(_0x125842)) {
                if (++_0x125842 === _0x497b83) {
                  throw Error("illegal comment (line " + _0x479c4e + ')');
                }
                if ('/' === _0x2bde68.charAt(_0x125842)) {
                  if (_0x4b5ae8) {
                    _0x41122d = _0x125842;
                    _0x41875c = false;
                    if (_0x27c1c7(_0x125842)) {
                      _0x41875c = true;
                      do {
                        if ((_0x125842 = _0x45dd9b(_0x125842)) === _0x497b83) {
                          break;
                        }
                        _0x125842++;
                      } while (_0x27c1c7(_0x125842));
                    } else {
                      _0x125842 = Math.min(_0x497b83, _0x45dd9b(_0x125842) + 0x1);
                    }
                    if (_0x41875c) {
                      _0x1bd4f1(_0x41122d, _0x125842, _0x121d5a);
                    }
                    _0x479c4e++;
                    _0x39fb0d = true;
                  } else {
                    for (_0x41875c = '/' === _0x2bde68.charAt(_0x41122d = _0x125842 + 0x1); "\n" !== _0x2bde68.charAt(++_0x125842);) {
                      if (_0x125842 === _0x497b83) {
                        return null;
                      }
                    }
                    ++_0x125842;
                    if (_0x41875c) {
                      _0x1bd4f1(_0x41122d, _0x125842 - 0x1, _0x121d5a);
                    }
                    ++_0x479c4e;
                    _0x39fb0d = true;
                  }
                } else {
                  if ('*' !== (_0x35c7bd = _0x2bde68.charAt(_0x125842))) {
                    return '/';
                  }
                  _0x41122d = _0x125842 + 0x1;
                  _0x41875c = _0x4b5ae8 || '*' === _0x2bde68.charAt(_0x41122d);
                  do {
                    if ("\n" === _0x35c7bd) {
                      ++_0x479c4e;
                    }
                    if (++_0x125842 === _0x497b83) {
                      throw Error("illegal comment (line " + _0x479c4e + ')');
                    }
                    _0x2b5034 = _0x35c7bd;
                    _0x35c7bd = _0x2bde68.charAt(_0x125842);
                  } while ('*' !== _0x2b5034 || '/' !== _0x35c7bd);
                  ++_0x125842;
                  if (_0x41875c) {
                    _0x1bd4f1(_0x41122d, _0x125842 - 0x2, _0x121d5a);
                  }
                  _0x39fb0d = true;
                }
              }
            } while (_0x39fb0d);
            var _0x14294c = _0x125842;
            _0x68b0b5.lastIndex = 0x0;
            if (!_0x68b0b5.test(_0x2bde68.charAt(_0x14294c++))) {
              for (; _0x14294c < _0x497b83 && !_0x68b0b5.test(_0x2bde68.charAt(_0x14294c));) {
                ++_0x14294c;
              }
            }
            var _0x3b27ba = _0x2bde68.substring(_0x125842, _0x125842 = _0x14294c);
            if (!("\"" !== _0x3b27ba && "'" !== _0x3b27ba)) {
              _0x294acd = _0x3b27ba;
            }
            return _0x3b27ba;
          }
          function _0x12491c(_0xe66586) {
            _0x174899.push(_0xe66586);
          }
          function _0x251bac() {
            if (!_0x174899.length) {
              var _0x5a4c31 = _0x19a3fe();
              if (null === _0x5a4c31) {
                return null;
              }
              _0x12491c(_0x5a4c31);
            }
            return _0x174899[0x0];
          }
          return Object.defineProperty({
            'next': _0x19a3fe,
            'peek': _0x251bac,
            'push': _0x12491c,
            'skip': function (_0x5714a3, _0x312a9f) {
              var _0x2fb3db = _0x251bac();
              if (_0x2fb3db === _0x5714a3) {
                _0x19a3fe();
                return true;
              }
              if (!_0x312a9f) {
                throw Error("illegal " + ("token '" + _0x2fb3db + "', '" + _0x5714a3 + "' expected") + " (line " + _0x479c4e + ')');
              }
              return false;
            },
            'cmnt': function (_0x50e796) {
              var _0x596f0b = null;
              if (undefined === _0x50e796) {
                if (_0xc8cd66 === _0x479c4e - 0x1 && (_0x4b5ae8 || '*' === _0x4f8164 || _0x3e4cab)) {
                  _0x596f0b = _0x52f548 ? _0x440e8d : null;
                }
              } else {
                if (_0xc8cd66 < _0x50e796) {
                  _0x251bac();
                }
                if (!(_0xc8cd66 !== _0x50e796 || _0x3e4cab || !_0x4b5ae8 && '/' !== _0x4f8164)) {
                  _0x596f0b = _0x52f548 ? null : _0x440e8d;
                }
              }
              return _0x596f0b;
            }
          }, "line", {
            'get': function () {
              return _0x479c4e;
            }
          });
        }
        _0x1d6c77.unescape = _0x909f1c;
        _0x585108.exports;
      }, {});
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/parse.js", function (_0x540b50, _0x1aa3ce, _0x5dd00e, _0x123f05, _0x1ed845) {
        _0x5dd00e.exports = _0x2f475c;
        _0x2f475c.filename = null;
        _0x2f475c.defaults = {
          'keepCase': false
        };
        var _0x366655 = _0x1aa3ce("./tokenize");
        var _0x4034a4 = _0x1aa3ce("./root");
        var _0x3fadcf = _0x1aa3ce('./type');
        var _0x23e323 = _0x1aa3ce("./field");
        var _0x12295a = _0x1aa3ce("./mapfield");
        var _0x2fb5cc = _0x1aa3ce("./oneof");
        var _0x52e4a9 = _0x1aa3ce("./enum");
        var _0x4886d4 = _0x1aa3ce("./service");
        var _0x5cbd66 = _0x1aa3ce('./method');
        var _0x2d7a54 = _0x1aa3ce("./types");
        var _0x51aca2 = _0x1aa3ce('./util');
        var _0x4267d4 = /^[1-9][0-9]*$/;
        var _0x1a7416 = /^-?[1-9][0-9]*$/;
        var _0x38c933 = /^0[x][0-9a-fA-F]+$/;
        var _0x1471bf = /^-?0[x][0-9a-fA-F]+$/;
        var _0x40b6cd = /^0[0-7]+$/;
        var _0x5e6bb = /^-?0[0-7]+$/;
        var _0x58cfdf = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
        var _0x41525b = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
        var _0x3801a8 = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
        var _0x2a04dd = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
        function _0x2f475c(_0x3cb81, _0x1e7b83, _0x5b1f3a) {
          if (!(_0x1e7b83 instanceof _0x4034a4)) {
            _0x5b1f3a = _0x1e7b83;
            _0x1e7b83 = new _0x4034a4();
          }
          if (!_0x5b1f3a) {
            _0x5b1f3a = _0x2f475c.defaults;
          }
          var _0x47d59f;
          var _0x422821;
          var _0x44bec1;
          var _0x141d9a;
          var _0x5de995;
          var _0x3ebe33 = _0x5b1f3a.preferTrailingComment || false;
          var _0x136dee = _0x366655(_0x3cb81, _0x5b1f3a.alternateCommentMode || false);
          var _0x235ce0 = _0x136dee.next;
          var _0x3e666b = _0x136dee.push;
          var _0x4bd905 = _0x136dee.peek;
          var _0x1b65e0 = _0x136dee.skip;
          var _0x96ef94 = _0x136dee.cmnt;
          var _0x62ba3 = true;
          var _0x25575c = false;
          var _0x18aa20 = _0x1e7b83;
          var _0x4b0762 = _0x5b1f3a.keepCase ? function (_0x4c902c) {
            return _0x4c902c;
          } : _0x51aca2.camelCase;
          function _0x5a9167(_0x253d2f, _0x124bfa, _0x4a339c) {
            var _0x464ce4 = _0x2f475c.filename;
            if (!_0x4a339c) {
              _0x2f475c.filename = null;
            }
            return Error("illegal " + (_0x124bfa || "token") + " '" + _0x253d2f + "' (" + (_0x464ce4 ? _0x464ce4 + ", " : '') + "line " + _0x136dee.line + ')');
          }
          function _0x18ad89() {
            var _0xf0d49f;
            var _0x894b4e = [];
            do {
              if ("\"" !== (_0xf0d49f = _0x235ce0()) && "'" !== _0xf0d49f) {
                throw _0x5a9167(_0xf0d49f);
              }
              _0x894b4e.push(_0x235ce0());
              _0x1b65e0(_0xf0d49f);
              _0xf0d49f = _0x4bd905();
            } while ("\"" === _0xf0d49f || "'" === _0xf0d49f);
            return _0x894b4e.join('');
          }
          function _0x5747d9(_0xd21143) {
            var _0x57fd70 = _0x235ce0();
            switch (_0x57fd70) {
              case "'":
              case "\"":
                _0x3e666b(_0x57fd70);
                return _0x18ad89();
              case 'true':
              case 'TRUE':
                return true;
              case 'false':
              case "FALSE":
                return false;
            }
            try {
              return function (_0x4128b9, _0x46c278) {
                var _0x29277a = 0x1;
                if ('-' === _0x4128b9.charAt(0x0)) {
                  _0x29277a = -0x1;
                  _0x4128b9 = _0x4128b9.substring(0x1);
                }
                switch (_0x4128b9) {
                  case "inf":
                  case "INF":
                  case "Inf":
                    return _0x29277a * Infinity;
                  case "nan":
                  case "NAN":
                  case "Nan":
                  case "NaN":
                    return NaN;
                  case '0':
                    return 0x0;
                }
                if (_0x4267d4.test(_0x4128b9)) {
                  return _0x29277a * parseInt(_0x4128b9, 0xa);
                }
                if (_0x38c933.test(_0x4128b9)) {
                  return _0x29277a * parseInt(_0x4128b9, 0x10);
                }
                if (_0x40b6cd.test(_0x4128b9)) {
                  return _0x29277a * parseInt(_0x4128b9, 0x8);
                }
                if (_0x58cfdf.test(_0x4128b9)) {
                  return _0x29277a * parseFloat(_0x4128b9);
                }
                throw _0x5a9167(_0x4128b9, "number", _0x46c278);
              }(_0x57fd70, true);
            } catch (_0x2f8624) {
              if (_0xd21143 && _0x3801a8.test(_0x57fd70)) {
                return _0x57fd70;
              }
              throw _0x5a9167(_0x57fd70, "value");
            }
          }
          function _0x14c1b2(_0x5f2d33, _0x263b91) {
            var _0x379246;
            var _0x4d8f7f;
            do {
              if (!_0x263b91 || "\"" !== (_0x379246 = _0x4bd905()) && "'" !== _0x379246) {
                _0x5f2d33.push([_0x4d8f7f = _0xb9ffd9(_0x235ce0()), _0x1b65e0('to', true) ? _0xb9ffd9(_0x235ce0()) : _0x4d8f7f]);
              } else {
                _0x5f2d33.push(_0x18ad89());
              }
            } while (_0x1b65e0(',', true));
            _0x1b65e0(';');
          }
          function _0xb9ffd9(_0x390cba, _0x251082) {
            switch (_0x390cba) {
              case 'max':
              case "MAX":
              case "Max":
                return 0x1fffffff;
              case '0':
                return 0x0;
            }
            if (!_0x251082 && '-' === _0x390cba.charAt(0x0)) {
              throw _0x5a9167(_0x390cba, 'id');
            }
            if (_0x1a7416.test(_0x390cba)) {
              return parseInt(_0x390cba, 0xa);
            }
            if (_0x1471bf.test(_0x390cba)) {
              return parseInt(_0x390cba, 0x10);
            }
            if (_0x5e6bb.test(_0x390cba)) {
              return parseInt(_0x390cba, 0x8);
            }
            throw _0x5a9167(_0x390cba, 'id');
          }
          function _0x154b08() {
            if (undefined !== _0x47d59f) {
              throw _0x5a9167('package');
            }
            _0x47d59f = _0x235ce0();
            if (!_0x3801a8.test(_0x47d59f)) {
              throw _0x5a9167(_0x47d59f, "name");
            }
            _0x18aa20 = _0x18aa20.define(_0x47d59f);
            _0x1b65e0(';');
          }
          function _0x25a67f() {
            var _0x461595;
            var _0x1a6c75 = _0x4bd905();
            switch (_0x1a6c75) {
              case "weak":
                _0x461595 = _0x44bec1 || (_0x44bec1 = []);
                _0x235ce0();
                break;
              case "public":
                _0x235ce0();
              default:
                _0x461595 = _0x422821 || (_0x422821 = []);
            }
            _0x1a6c75 = _0x18ad89();
            _0x1b65e0(';');
            _0x461595.push(_0x1a6c75);
          }
          function _0x1aa3eb() {
            _0x1b65e0('=');
            _0x141d9a = _0x18ad89();
            if (!(_0x25575c = 'proto3' === _0x141d9a) && "proto2" !== _0x141d9a) {
              throw _0x5a9167(_0x141d9a, 'syntax');
            }
            _0x1b65e0(';');
          }
          function _0x48b41d(_0x57e060, _0x1df6bd) {
            switch (_0x1df6bd) {
              case "option":
                _0x216a0f(_0x57e060, _0x1df6bd);
                _0x1b65e0(';');
                return true;
              case 'message':
                (function (_0x17c478, _0x4fb03e) {
                  if (!_0x41525b.test(_0x4fb03e = _0x235ce0())) {
                    throw _0x5a9167(_0x4fb03e, "type name");
                  }
                  var _0x4a9ce4 = new _0x3fadcf(_0x4fb03e);
                  _0x51f605(_0x4a9ce4, function (_0x1a7a8c) {
                    if (!_0x48b41d(_0x4a9ce4, _0x1a7a8c)) {
                      switch (_0x1a7a8c) {
                        case 'map':
                          !function (_0x15f929) {
                            _0x1b65e0('<');
                            var _0x44412a = _0x235ce0();
                            if (undefined === _0x2d7a54.mapKey[_0x44412a]) {
                              throw _0x5a9167(_0x44412a, 'type');
                            }
                            _0x1b65e0(',');
                            var _0x4398cd = _0x235ce0();
                            if (!_0x3801a8.test(_0x4398cd)) {
                              throw _0x5a9167(_0x4398cd, "type");
                            }
                            _0x1b65e0('>');
                            var _0x361977 = _0x235ce0();
                            if (!_0x41525b.test(_0x361977)) {
                              throw _0x5a9167(_0x361977, "name");
                            }
                            _0x1b65e0('=');
                            var _0x139ce1 = new _0x12295a(_0x4b0762(_0x361977), _0xb9ffd9(_0x235ce0()), _0x44412a, _0x4398cd);
                            _0x51f605(_0x139ce1, function (_0x4cde71) {
                              if ("option" !== _0x4cde71) {
                                throw _0x5a9167(_0x4cde71);
                              }
                              _0x216a0f(_0x139ce1, _0x4cde71);
                              _0x1b65e0(';');
                            }, function () {
                              _0x57b5b1(_0x139ce1);
                            });
                            _0x15f929.add(_0x139ce1);
                          }(_0x4a9ce4);
                          break;
                        case 'required':
                        case "repeated":
                          _0x17a6dc(_0x4a9ce4, _0x1a7a8c);
                          break;
                        case "optional":
                          _0x17a6dc(_0x4a9ce4, _0x25575c ? "proto3_optional" : 'optional');
                          break;
                        case "oneof":
                          !function (_0x45559d, _0x17a9d6) {
                            if (!_0x41525b.test(_0x17a9d6 = _0x235ce0())) {
                              throw _0x5a9167(_0x17a9d6, 'name');
                            }
                            var _0x4a1cd1 = new _0x2fb5cc(_0x4b0762(_0x17a9d6));
                            _0x51f605(_0x4a1cd1, function (_0x25da10) {
                              if ("option" === _0x25da10) {
                                _0x216a0f(_0x4a1cd1, _0x25da10);
                                _0x1b65e0(';');
                              } else {
                                _0x3e666b(_0x25da10);
                                _0x17a6dc(_0x4a1cd1, "optional");
                              }
                            });
                            _0x45559d.add(_0x4a1cd1);
                          }(_0x4a9ce4, _0x1a7a8c);
                          break;
                        case "extensions":
                          _0x14c1b2(_0x4a9ce4.extensions || (_0x4a9ce4.extensions = []));
                          break;
                        case "reserved":
                          _0x14c1b2(_0x4a9ce4.reserved || (_0x4a9ce4.reserved = []), true);
                          break;
                        default:
                          if (!_0x25575c || !_0x3801a8.test(_0x1a7a8c)) {
                            throw _0x5a9167(_0x1a7a8c);
                          }
                          _0x3e666b(_0x1a7a8c);
                          _0x17a6dc(_0x4a9ce4, "optional");
                      }
                    }
                  });
                  _0x17c478.add(_0x4a9ce4);
                })(_0x57e060, _0x1df6bd);
                return true;
              case "enum":
                (function (_0x3001d3, _0xd31acf) {
                  if (!_0x41525b.test(_0xd31acf = _0x235ce0())) {
                    throw _0x5a9167(_0xd31acf, "name");
                  }
                  var _0x26fed3 = new _0x52e4a9(_0xd31acf);
                  _0x51f605(_0x26fed3, function (_0x3f0a86) {
                    switch (_0x3f0a86) {
                      case 'option':
                        _0x216a0f(_0x26fed3, _0x3f0a86);
                        _0x1b65e0(';');
                        break;
                      case 'reserved':
                        _0x14c1b2(_0x26fed3.reserved || (_0x26fed3.reserved = []), true);
                        break;
                      default:
                        !function (_0x48e70b, _0x39dfe6) {
                          if (!_0x41525b.test(_0x39dfe6)) {
                            throw _0x5a9167(_0x39dfe6, 'name');
                          }
                          _0x1b65e0('=');
                          var _0x3df3f2 = _0xb9ffd9(_0x235ce0(), true);
                          var _0x31c84d = {};
                          _0x51f605(_0x31c84d, function (_0x6e8d8f) {
                            if ("option" !== _0x6e8d8f) {
                              throw _0x5a9167(_0x6e8d8f);
                            }
                            _0x216a0f(_0x31c84d, _0x6e8d8f);
                            _0x1b65e0(';');
                          }, function () {
                            _0x57b5b1(_0x31c84d);
                          });
                          _0x48e70b.add(_0x39dfe6, _0x3df3f2, _0x31c84d.comment);
                        }(_0x26fed3, _0x3f0a86);
                    }
                  });
                  _0x3001d3.add(_0x26fed3);
                })(_0x57e060, _0x1df6bd);
                return true;
              case 'service':
                (function (_0xaf6526, _0xf4a370) {
                  if (!_0x41525b.test(_0xf4a370 = _0x235ce0())) {
                    throw _0x5a9167(_0xf4a370, "service name");
                  }
                  var _0x5522d9 = new _0x4886d4(_0xf4a370);
                  _0x51f605(_0x5522d9, function (_0x24a30d) {
                    if (!_0x48b41d(_0x5522d9, _0x24a30d)) {
                      if ('rpc' !== _0x24a30d) {
                        throw _0x5a9167(_0x24a30d);
                      }
                      !function (_0x58b27f, _0x4c1200) {
                        var _0x42b124 = _0x96ef94();
                        var _0x5d106f = _0x4c1200;
                        if (!_0x41525b.test(_0x4c1200 = _0x235ce0())) {
                          throw _0x5a9167(_0x4c1200, 'name');
                        }
                        var _0x48b6e9;
                        var _0x211f0a;
                        var _0x2d1c06;
                        var _0x356a13;
                        var _0x89230 = _0x4c1200;
                        _0x1b65e0('(');
                        if (_0x1b65e0("stream", true)) {
                          _0x211f0a = true;
                        }
                        if (!_0x3801a8.test(_0x4c1200 = _0x235ce0())) {
                          throw _0x5a9167(_0x4c1200);
                        }
                        _0x48b6e9 = _0x4c1200;
                        _0x1b65e0(')');
                        _0x1b65e0("returns");
                        _0x1b65e0('(');
                        if (_0x1b65e0("stream", true)) {
                          _0x356a13 = true;
                        }
                        if (!_0x3801a8.test(_0x4c1200 = _0x235ce0())) {
                          throw _0x5a9167(_0x4c1200);
                        }
                        _0x2d1c06 = _0x4c1200;
                        _0x1b65e0(')');
                        var _0x419698 = new _0x5cbd66(_0x89230, _0x5d106f, _0x48b6e9, _0x2d1c06, _0x211f0a, _0x356a13);
                        _0x419698.comment = _0x42b124;
                        _0x51f605(_0x419698, function (_0x33f00f) {
                          if ('option' !== _0x33f00f) {
                            throw _0x5a9167(_0x33f00f);
                          }
                          _0x216a0f(_0x419698, _0x33f00f);
                          _0x1b65e0(';');
                        });
                        _0x58b27f.add(_0x419698);
                      }(_0x5522d9, _0x24a30d);
                    }
                  });
                  _0xaf6526.add(_0x5522d9);
                })(_0x57e060, _0x1df6bd);
                return true;
              case "extend":
                (function (_0x206f24, _0x25e6e4) {
                  if (!_0x3801a8.test(_0x25e6e4 = _0x235ce0())) {
                    throw _0x5a9167(_0x25e6e4, 'reference');
                  }
                  var _0x5ee282 = _0x25e6e4;
                  _0x51f605(null, function (_0x1009c7) {
                    switch (_0x1009c7) {
                      case "required":
                      case "repeated":
                        _0x17a6dc(_0x206f24, _0x1009c7, _0x5ee282);
                        break;
                      case "optional":
                        _0x17a6dc(_0x206f24, _0x25575c ? 'proto3_optional' : "optional", _0x5ee282);
                        break;
                      default:
                        if (!_0x25575c || !_0x3801a8.test(_0x1009c7)) {
                          throw _0x5a9167(_0x1009c7);
                        }
                        _0x3e666b(_0x1009c7);
                        _0x17a6dc(_0x206f24, 'optional', _0x5ee282);
                    }
                  });
                })(_0x57e060, _0x1df6bd);
                return true;
            }
            return false;
          }
          function _0x51f605(_0x37e0d5, _0x2b0b73, _0x24eb81) {
            var _0x4811c1 = _0x136dee.line;
            if (_0x37e0d5) {
              if ('string' != typeof _0x37e0d5.comment) {
                _0x37e0d5.comment = _0x96ef94();
              }
              _0x37e0d5.filename = _0x2f475c.filename;
            }
            if (_0x1b65e0('{', true)) {
              for (var _0xf18640; '}' !== (_0xf18640 = _0x235ce0());) {
                _0x2b0b73(_0xf18640);
              }
              _0x1b65e0(';', true);
            } else {
              if (_0x24eb81) {
                _0x24eb81();
              }
              _0x1b65e0(';');
              if (_0x37e0d5 && ("string" != typeof _0x37e0d5.comment || _0x3ebe33)) {
                _0x37e0d5.comment = _0x96ef94(_0x4811c1) || _0x37e0d5.comment;
              }
            }
          }
          function _0x17a6dc(_0x3f2d53, _0x34dcf5, _0x551714) {
            var _0x2caf87 = _0x235ce0();
            if ("group" !== _0x2caf87) {
              if (!_0x3801a8.test(_0x2caf87)) {
                throw _0x5a9167(_0x2caf87, "type");
              }
              var _0x155997 = _0x235ce0();
              if (!_0x41525b.test(_0x155997)) {
                throw _0x5a9167(_0x155997, "name");
              }
              _0x155997 = _0x4b0762(_0x155997);
              _0x1b65e0('=');
              var _0x5bb72f = new _0x23e323(_0x155997, _0xb9ffd9(_0x235ce0()), _0x2caf87, _0x34dcf5, _0x551714);
              _0x51f605(_0x5bb72f, function (_0x48b9f7) {
                if ("option" !== _0x48b9f7) {
                  throw _0x5a9167(_0x48b9f7);
                }
                _0x216a0f(_0x5bb72f, _0x48b9f7);
                _0x1b65e0(';');
              }, function () {
                _0x57b5b1(_0x5bb72f);
              });
              if ("proto3_optional" === _0x34dcf5) {
                var _0x5ad310 = new _0x2fb5cc('_' + _0x155997);
                _0x5bb72f.setOption("proto3_optional", true);
                _0x5ad310.add(_0x5bb72f);
                _0x3f2d53.add(_0x5ad310);
              } else {
                _0x3f2d53.add(_0x5bb72f);
              }
              if (!(_0x25575c || !_0x5bb72f.repeated || undefined === _0x2d7a54.packed[_0x2caf87] && undefined !== _0x2d7a54.basic[_0x2caf87])) {
                _0x5bb72f.setOption("packed", false, true);
              }
            } else {
              !function (_0x14fb41, _0x2069e7) {
                var _0x243989 = _0x235ce0();
                if (!_0x41525b.test(_0x243989)) {
                  throw _0x5a9167(_0x243989, "name");
                }
                var _0x303349 = _0x51aca2.lcFirst(_0x243989);
                if (_0x243989 === _0x303349) {
                  _0x243989 = _0x51aca2.ucFirst(_0x243989);
                }
                _0x1b65e0('=');
                var _0x369b65 = _0xb9ffd9(_0x235ce0());
                var _0x4ab2d4 = new _0x3fadcf(_0x243989);
                _0x4ab2d4.group = true;
                var _0x310260 = new _0x23e323(_0x303349, _0x369b65, _0x243989, _0x2069e7);
                _0x310260.filename = _0x2f475c.filename;
                _0x51f605(_0x4ab2d4, function (_0x435654) {
                  switch (_0x435654) {
                    case "option":
                      _0x216a0f(_0x4ab2d4, _0x435654);
                      _0x1b65e0(';');
                      break;
                    case "required":
                    case "repeated":
                      _0x17a6dc(_0x4ab2d4, _0x435654);
                      break;
                    case "optional":
                      _0x17a6dc(_0x4ab2d4, _0x25575c ? "proto3_optional" : 'optional');
                      break;
                    default:
                      throw _0x5a9167(_0x435654);
                  }
                });
                _0x14fb41.add(_0x4ab2d4).add(_0x310260);
              }(_0x3f2d53, _0x34dcf5);
            }
          }
          function _0x216a0f(_0x46d513, _0x4dd091) {
            var _0x34aab8 = _0x1b65e0('(', true);
            if (!_0x3801a8.test(_0x4dd091 = _0x235ce0())) {
              throw _0x5a9167(_0x4dd091, "name");
            }
            var _0x1d4ab0;
            var _0xaca399 = _0x4dd091;
            var _0x3a96e6 = _0xaca399;
            if (_0x34aab8) {
              _0x1b65e0(')');
              _0x3a96e6 = _0xaca399 = '(' + _0xaca399 + ')';
              _0x4dd091 = _0x4bd905();
              if (_0x2a04dd.test(_0x4dd091)) {
                _0x1d4ab0 = _0x4dd091.substr(0x1);
                _0xaca399 += _0x4dd091;
                _0x235ce0();
              }
            }
            _0x1b65e0('=');
            (function (_0x15c7f0, _0x133a1, _0x46cc69, _0x3af40a) {
              if (_0x15c7f0.setParsedOption) {
                _0x15c7f0.setParsedOption(_0x133a1, _0x46cc69, _0x3af40a);
              }
            })(_0x46d513, _0x3a96e6, _0x1c2de9(_0x46d513, _0xaca399), _0x1d4ab0);
          }
          function _0x1c2de9(_0x55cf76, _0x3d7154) {
            if (_0x1b65e0('{', true)) {
              for (var _0x17fe63 = {}; !_0x1b65e0('}', true);) {
                if (!_0x41525b.test(_0x5de995 = _0x235ce0())) {
                  throw _0x5a9167(_0x5de995, 'name');
                }
                var _0x31f51e;
                var _0x318443 = _0x5de995;
                if ('{' === _0x4bd905()) {
                  _0x31f51e = _0x1c2de9(_0x55cf76, _0x3d7154 + '.' + _0x5de995);
                } else {
                  _0x1b65e0(':');
                  if ('{' === _0x4bd905()) {
                    _0x31f51e = _0x1c2de9(_0x55cf76, _0x3d7154 + '.' + _0x5de995);
                  } else {
                    _0x31f51e = _0x5747d9(true);
                    _0x167663(_0x55cf76, _0x3d7154 + '.' + _0x5de995, _0x31f51e);
                  }
                }
                var _0x3131a7 = _0x17fe63[_0x318443];
                if (_0x3131a7) {
                  _0x31f51e = [].concat(_0x3131a7).concat(_0x31f51e);
                }
                _0x17fe63[_0x318443] = _0x31f51e;
                _0x1b65e0(',', true);
              }
              return _0x17fe63;
            }
            var _0x317dcf = _0x5747d9(true);
            _0x167663(_0x55cf76, _0x3d7154, _0x317dcf);
            return _0x317dcf;
          }
          function _0x167663(_0x13124c, _0x37f8af, _0x9cedce) {
            if (_0x13124c.setOption) {
              _0x13124c.setOption(_0x37f8af, _0x9cedce);
            }
          }
          function _0x57b5b1(_0xc0f7da) {
            if (_0x1b65e0('[', true)) {
              do {
                _0x216a0f(_0xc0f7da, "option");
              } while (_0x1b65e0(',', true));
              _0x1b65e0(']');
            }
            return _0xc0f7da;
          }
          for (; null !== (_0x5de995 = _0x235ce0());) {
            switch (_0x5de995) {
              case 'package':
                if (!_0x62ba3) {
                  throw _0x5a9167(_0x5de995);
                }
                _0x154b08();
                break;
              case "import":
                if (!_0x62ba3) {
                  throw _0x5a9167(_0x5de995);
                }
                _0x25a67f();
                break;
              case "syntax":
                if (!_0x62ba3) {
                  throw _0x5a9167(_0x5de995);
                }
                _0x1aa3eb();
                break;
              case "option":
                _0x216a0f(_0x18aa20, _0x5de995);
                _0x1b65e0(';');
                break;
              default:
                if (_0x48b41d(_0x18aa20, _0x5de995)) {
                  _0x62ba3 = false;
                  continue;
                }
                throw _0x5a9167(_0x5de995);
            }
          }
          _0x2f475c.filename = null;
          return {
            'package': _0x47d59f,
            'imports': _0x422821,
            'weakImports': _0x44bec1,
            'syntax': _0x141d9a,
            'root': _0x1e7b83
          };
        }
        _0x5dd00e.exports;
      }, function () {
        return {
          './tokenize': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          './root': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          './type': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/type.js',
          './field': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './mapfield': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './oneof': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './enum': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/enum.js',
          './service': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/service.js',
          './method': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          './types': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/types.js',
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/common.js", function (_0x21e9c1, _0xc28663, _0x3a1f9b, _0x47c41b, _0x5bac1a) {
        _0x3a1f9b.exports = _0x26d6f7;
        var _0x207de4;
        var _0x5294f0 = /\/|\./;
        function _0x26d6f7(_0x7b1c77, _0x5da33d) {
          if (!_0x5294f0.test(_0x7b1c77)) {
            _0x7b1c77 = "google/protobuf/" + _0x7b1c77 + ".proto";
            _0x5da33d = {
              'nested': {
                'google': {
                  'nested': {
                    'protobuf': {
                      'nested': _0x5da33d
                    }
                  }
                }
              }
            };
          }
          _0x26d6f7[_0x7b1c77] = _0x5da33d;
        }
        _0x26d6f7("any", {
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
        _0x26d6f7('duration', {
          'Duration': _0x207de4 = {
            'fields': {
              'seconds': {
                'type': 'int64',
                'id': 0x1
              },
              'nanos': {
                'type': 'int32',
                'id': 0x2
              }
            }
          }
        });
        _0x26d6f7('timestamp', {
          'Timestamp': _0x207de4
        });
        _0x26d6f7('empty', {
          'Empty': {
            'fields': {}
          }
        });
        _0x26d6f7("struct", {
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
                'oneof': ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"]
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
        _0x26d6f7("wrappers", {
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
                'type': 'bytes',
                'id': 0x1
              }
            }
          }
        });
        _0x26d6f7("field_mask", {
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
        _0x26d6f7.get = function (_0x3b4b18) {
          return _0x26d6f7[_0x3b4b18] || null;
        };
        _0x3a1f9b.exports;
      }, {});
      var _0x45475b;
      _0x50443a.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/index.js", function (_0x16be31, _0x31ddcb, _0x4b14e8, _0x8dfdd7, _0x5a6fc8) {
        var _0xd64293 = _0x4b14e8.exports = _0x31ddcb("./index-light");
        _0xd64293.build = "full";
        _0xd64293.tokenize = _0x31ddcb("./tokenize");
        _0xd64293.parse = _0x31ddcb("./parse");
        _0xd64293.common = _0x31ddcb("./common");
        _0xd64293.Root._configure(_0xd64293.Type, _0xd64293.parse, _0xd64293.common);
        _0x4b14e8.exports;
      }, function () {
        return {
          './index-light': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js",
          './tokenize': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          './parse': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/parse.js",
          './common': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/common.js"
        };
      });
      var _0x510851;
      var _0x6389f4;
      var _0x396121;
      var _0x2e7b8c;
      _0x50443a.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/index.js', function (_0x7d2e19, _0x3972bd, _0x4aa8b4, _0x6cf91c, _0x187321) {
        _0x4aa8b4.exports = _0x3972bd("./src/index");
        _0x45475b = _0x4aa8b4.exports;
      }, function () {
        return {
          './src/index': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/src/index.js"
        };
      });
      _0x50443a.require('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/LuckyJaguar/Client/Thai_UAT/node_modules/protobufjs/index.js');
      _0x361286._RF.push({}, "f34139liEtOX7eeljN8Cz8w", 'index', undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, 'e8094rRlKNOTqYBFE5dZCcZ', "WinBoardMgr", undefined);
      var _0x4dd9a0 = _0x55c899.ccclass;
      var _0x11f00d = _0x55c899.property;
      _0x510851 = _0x4dd9a0("WinBoardMgr");
      _0x6389f4 = _0x11f00d({
        'type': _0x3fe2b7,
        'tooltip': "跑小贏分LABEL"
      });
      _0x396121 = function (_0x5d2c08) {
        function _0x3bffea() {
          var _0x74397c;
          var _0x28d76f = arguments.length;
          var _0x1975a8 = new Array(_0x28d76f);
          for (var _0x188e43 = 0x0; _0x188e43 < _0x28d76f; _0x188e43++) {
            _0x1975a8[_0x188e43] = arguments[_0x188e43];
          }
          _0x7af141(_0x74397c = _0x5d2c08.call.apply(_0x5d2c08, [this].concat(_0x1975a8)) || this, "m_winLabel", _0x2e7b8c, _0x4c7417(_0x74397c));
          return _0x74397c;
        }
        _0x5b6a43(_0x3bffea, _0x5d2c08);
        var _0x561600 = _0x3bffea.prototype;
        _0x561600.onLoad = function () {
          this.m_winLabel.string = '0';
        };
        _0x561600.SetActive = function (_0x4d0122) {
          if (this.node.active != _0x4d0122) {
            this.node.active = _0x4d0122;
          }
        };
        _0x561600.ShowScore = function () {
          var _0x373012 = _0x2b8ecf(_0x17c453().mark(function _0x550e11(_0x32604c, _0x2ff9d3, _0xa7769) {
            var _0x3e9dcc;
            var _0xe6c9cb;
            var _0x29dd72;
            var _0x4ae942 = this;
            return _0x17c453().wrap(function (_0x556f11) {
              for (;;) {
                switch (_0x556f11.prev = _0x556f11.next) {
                  case 0x0:
                    if (undefined === _0xa7769) {
                      _0xa7769 = 0x0;
                    }
                    this.node.active = true;
                    this.m_winLabel.string = _0x32604c.toFixed(0x2);
                    _0x3e9dcc = new Promise(function (_0x1c5b03) {
                      _0x5b954c(_0x4ae942.m_winLabel.node.getComponent(_0x52589a)).to(0.2, {
                        'opacity': 0xff
                      }).call(_0x1c5b03).start();
                    });
                    _0xe6c9cb = new Promise(function (_0xad723) {
                      _0x5b954c(_0x4ae942.node.getComponent(_0x52589a)).to(0.2, {
                        'opacity': 0xff
                      }).call(_0xad723).start();
                    });
                    _0x29dd72 = new Promise(function (_0x416760) {
                      _0x5b954c(_0x4ae942.node).to(_0x2ff9d3, {
                        'scale': _0x1923c2(1.2, 1.2)
                      }).call(_0x416760).start();
                    });
                    _0x556f11.next = 0x8;
                    return Promise.all([_0x3e9dcc, _0xe6c9cb, _0x29dd72]);
                  case 0x8:
                    if (!(_0xa7769 > 0x0)) {
                      _0x556f11.next = 0xb;
                      break;
                    }
                    _0x556f11.next = 0xb;
                    return _0x20a3f2.Wait(this, 0x1 * _0xa7769);
                  case 0xb:
                  case "end":
                    return _0x556f11.stop();
                }
              }
            }, _0x550e11, this);
          }));
          return function (_0x11035e, _0x586ae7, _0x3d117e) {
            return _0x373012.apply(this, arguments);
          };
        }();
        _0x561600.RunScore = function () {
          var _0x5d5274 = _0x2b8ecf(_0x17c453().mark(function _0x272735(_0x3f53c4, _0x4c0fbf, _0x377220, _0x2b49af) {
            var _0x596e82;
            var _0x44ef62;
            var _0x412bf5;
            var _0x11c7f3 = this;
            return _0x17c453().wrap(function (_0x1d6073) {
              for (;;) {
                switch (_0x1d6073.prev = _0x1d6073.next) {
                  case 0x0:
                    if (undefined === _0x377220) {
                      _0x377220 = 0x0;
                    }
                    if (undefined === _0x2b49af) {
                      _0x2b49af = null;
                    }
                    if (!(_0x3f53c4 <= 0x0)) {
                      _0x1d6073.next = 0x4;
                      break;
                    }
                    return _0x1d6073.abrupt("return");
                  case 0x4:
                    this.m_spine.node.active = true;
                    _0x596e82 = _0x4bcdb4.divide(_0x4c0fbf, 0.02);
                    _0x44ef62 = Number(this.m_winLabel.string.replace(/,/g, ''));
                    _0x412bf5 = _0x4bcdb4.divide(_0x4bcdb4.strip(_0x3f53c4 - _0x44ef62), _0x596e82);
                    _0x4d5c69.stopAllByTarget(this.m_winLabel.node);
                    _0x5b954c(this.m_winLabel.node).parallel(_0x5b954c().repeat(_0x596e82, _0x5b954c().call(function () {
                      _0x44ef62 += _0x412bf5;
                      _0x11c7f3.m_winLabel.string = _0x4bcdb4.FormatNumberThousands(_0x35e83c.GetDisplayValue(_0x44ef62), _0x4bcdb4.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
                    }).delay(0.02)), _0x5b954c().call(function () {
                      _0x5b954c(_0x11c7f3.m_winLabel.node.getComponent(_0x52589a)).to(0.2, {
                        'opacity': 0xff
                      }).start();
                    }), _0x5b954c().call(function () {
                      _0x5b954c(_0x11c7f3.node.getComponent(_0x52589a)).to(0.2, {
                        'opacity': 0xff
                      }).start();
                    }), _0x5b954c().to(_0x4c0fbf, {
                      'scale': _0x1923c2(1.2, 1.2)
                    })).delay(_0x377220).call(function () {
                      _0x11c7f3.StopRunning(false, _0x3f53c4);
                      _0x11c7f3.m_spine.node.active = false;
                      if (_0x2b49af) {
                        _0x2b49af();
                      }
                    }).start();
                  case 0xa:
                  case "end":
                    return _0x1d6073.stop();
                }
              }
            }, _0x272735, this);
          }));
          return function (_0x1c3561, _0x5a9c8b, _0x3c7779, _0x1fcd42) {
            return _0x5d5274.apply(this, arguments);
          };
        }();
        _0x561600.StopRunning = function (_0x115ccc, _0x14caee) {
          var _0x395bdb = this;
          if (undefined === _0x115ccc) {
            _0x115ccc = false;
          }
          this.m_winLabel.string = _0x4bcdb4.FormatNumberThousands(_0x35e83c.GetDisplayValue(_0x14caee), _0x4bcdb4.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          if (_0x115ccc) {
            _0x4d5c69.stopAllByTarget(this.m_winLabel.node);
            _0x5b954c(this.m_winLabel.node).to(0.1, {
              'scale': _0x1923c2(1.8, 1.8)
            }).delay(1.1).parallel(_0x5b954c().call(function () {
              _0x5b954c(_0x395bdb.m_winLabel.node.getComponent(_0x52589a)).to(0.01, {
                'opacity': 0.1
              }).start();
            }), _0x5b954c().call(function () {
              _0x5b954c(_0x395bdb.node.getComponent(_0x52589a)).to(0.01, {
                'opacity': 0.1
              }).start();
            }), _0x5b954c().to(0.05, {
              'scale': _0x1923c2(0x1, 0x1)
            })).call(function () {
              _0x395bdb.m_winLabel.string = '0';
            }).start();
          } else {
            _0x5b954c(this.m_winLabel.node).delay(1.1).parallel(_0x5b954c().call(function () {
              _0x5b954c(_0x395bdb.m_winLabel.node.getComponent(_0x52589a)).to(0.01, {
                'opacity': 0.1
              }).start();
            }), _0x5b954c().call(function () {
              _0x5b954c(_0x395bdb.node.getComponent(_0x52589a)).to(0.01, {
                'opacity': 0.1
              }).start();
            }), _0x5b954c().to(0.3, {
              'scale': _0x1923c2(0x1, 0x1)
            })).call(function () {
              _0x395bdb.m_winLabel.string = '0';
            }).start();
          }
        };
        _0x561600.Reset = function () {
          this.m_winLabel.string = '0';
          this.m_winLabel.node.getComponent(_0x52589a).opacity = 0.1;
          this.node.getComponent(_0x52589a).opacity = 0.1;
        };
        return _0x3bffea;
      }(_0x1bc5ca);
      _0x2e7b8c = _0x4bec9c(_0x396121.prototype, "m_winLabel", [_0x6389f4], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x104e9c;
      var _0xfe279b;
      var _0x164987;
      var _0x374c1d;
      var _0x1d11fd;
      var _0x4010e0;
      var _0xec9d87;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "cfd0e/GxgxF57N81o5stUSI", "RotateParentControlData", undefined);
      var _0x567315 = _0x55c899.ccclass;
      var _0x4c077a = _0x55c899.property;
      _0x104e9c = _0x567315('RotateParentControlData');
      _0xfe279b = _0x4c077a({
        'type': _0x2bf5c4,
        'displayName': "Parent L "
      });
      _0x164987 = _0x4c077a({
        'type': _0x2bf5c4,
        'displayName': "Parent S "
      });
      _0x1d11fd = function () {
        _0x7af141(this, "m_Parent_L", _0x4010e0, this);
        _0x7af141(this, "m_Parent_S", _0xec9d87, this);
      };
      _0x4010e0 = _0x4bec9c(_0x1d11fd.prototype, "m_Parent_L", [_0xfe279b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0xec9d87 = _0x4bec9c(_0x1d11fd.prototype, "m_Parent_S", [_0x164987], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x186402 = _0x104e9c(_0x374c1d = _0x1d11fd) || _0x374c1d;
      var _0x51aee9;
      var _0x43004b;
      var _0x24e0e9;
      var _0x4c026f;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "449dbOe95VEE6hI6HNVc+X9", "RotateParentControl", undefined);
      var _0x957bc2 = _0x55c899.ccclass;
      var _0x33d608 = _0x55c899.property;
      _0x51aee9 = _0x957bc2('RotateParentControl');
      _0x43004b = _0x33d608({
        'type': [_0x186402],
        'displayName': "UnitData"
      });
      _0x24e0e9 = function (_0x3fd0e5) {
        function _0x5a24aa() {
          var _0x198a8c;
          var _0x7b1cd5 = arguments.length;
          var _0xfc2506 = new Array(_0x7b1cd5);
          for (var _0x347cfc = 0x0; _0x347cfc < _0x7b1cd5; _0x347cfc++) {
            _0xfc2506[_0x347cfc] = arguments[_0x347cfc];
          }
          _0x7af141(_0x198a8c = _0x3fd0e5.call.apply(_0x3fd0e5, [this].concat(_0xfc2506)) || this, "m_Unit", _0x4c026f, _0x4c7417(_0x198a8c));
          _0x198a8c.m_isLandscape = undefined;
          return _0x198a8c;
        }
        _0x5b6a43(_0x5a24aa, _0x3fd0e5);
        var _0x307d92 = _0x5a24aa.prototype;
        _0x307d92.Rotate = function (_0x27fb3b) {
          if (this.m_isLandscape != _0x27fb3b) {
            this.m_isLandscape = _0x27fb3b;
            for (var _0x3ecaea = 0x0; _0x3ecaea < this.m_Unit.length; _0x3ecaea++) {
              this.ChangeParent(this.m_Unit[_0x3ecaea]);
            }
          }
        };
        _0x307d92.ChangeParent = function (_0x5c4759) {
          var _0x2b1cca = this.m_isLandscape ? _0x5c4759.m_Parent_S : _0x5c4759.m_Parent_L;
          var _0x4d5f53 = this.m_isLandscape ? _0x5c4759.m_Parent_L : _0x5c4759.m_Parent_S;
          var _0x2f77a1 = _0x2b1cca.children;
          var _0x4016f5 = _0x2f77a1.length;
          for (var _0x3e5a92 = 0x0; _0x3e5a92 < _0x4016f5; _0x3e5a92++) {
            _0x2f77a1[0x0].setParent(_0x4d5f53);
          }
        };
        return _0x5a24aa;
      }(_0xf24552);
      _0x4c026f = _0x4bec9c(_0x24e0e9.prototype, 'm_Unit', [_0x43004b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      var _0x2aae4a;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "fbc22lPw/tNL5M2wnUUqq16", "ExitBonusState", undefined);
      var _0x3ab422 = _0x55c899.ccclass;
      _0x2aae4a = _0x3ab422("ExitBonusState");
      var _0x399deb;
      var _0x35a431;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, 'a14b74UKMlIC4U0IeAJ8cad', 'FakeReelDataProvider', undefined);
      var _0x5e0961 = _0x55c899.ccclass;
      _0x399deb = _0x5e0961("FakeReelDataProvider");
      var _0x49d631 = _0x399deb(_0x35a431 = function () {
        function _0x2e2260(_0x263733, _0x1e845e) {
          this.m_ReelCurrentIdx = undefined;
          this.m_ReelFakeData = undefined;
          this.m_FakeWildWeight = undefined;
          this.m_ReelFakeData = _0x263733;
          this.m_FakeWildWeight = _0x1e845e;
          this.m_ReelCurrentIdx = new Array(this.m_ReelFakeData.length).fill(0x0);
        }
        var _0x1d5b34 = _0x2e2260.prototype;
        _0x1d5b34.SetReelFakeData = function (_0x120e45) {
          this.m_ReelFakeData = _0x120e45;
          this.m_ReelCurrentIdx = new Array(this.m_ReelFakeData.length).fill(0x0);
        };
        _0x1d5b34.GetRandomReelSymbol = function (_0x164d6c) {
          if (_0x164d6c < 0x0 || _0x164d6c >= this.m_ReelFakeData.length) {
            _0x312ceb("Invalid column index");
            return -0x1;
          }
          var _0x2cbea1 = this.m_ReelFakeData[_0x164d6c][this.m_ReelCurrentIdx[_0x164d6c]];
          this.m_ReelCurrentIdx[_0x164d6c] = this.m_ReelCurrentIdx[_0x164d6c] + 0x1 >= this.m_ReelFakeData[_0x164d6c].length ? 0x0 : this.m_ReelCurrentIdx[_0x164d6c] + 0x1;
          return _0x2cbea1;
        };
        _0x1d5b34.GetRandomWildOdd = function () {
          var _0x59c49a;
          var _0x3474b9 = 0x64 * Math.random();
          for (var _0x56c436 = _0x1be9ca(this.m_FakeWildWeight); !(_0x59c49a = _0x56c436()).done;) {
            var _0x113af3 = _0x59c49a.value;
            var _0x414060 = _0x113af3[0x0];
            if ((_0x3474b9 -= _0x113af3[0x1]) < 0x0) {
              return _0x414060;
            }
          }
          return this.m_FakeWildWeight[this.m_FakeWildWeight.length - 0x1][0x0];
        };
        return _0x2e2260;
      }()) || _0x35a431;
      var _0x2fd3c5;
      var _0x253b2a;
      var _0x581d2d;
      var _0x1b15c4;
      var _0x423ba4;
      var _0x3ba5d4;
      var _0x150c21;
      var _0x4f41c8;
      var _0x1594bb;
      var _0x3912ea;
      var _0x46e549;
      var _0x20092a;
      var _0x143271;
      var _0x1c6f66;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "61215eapx1B075yblG/xwIi", "SlotReel", undefined);
      var _0x50efbf = [0x0, 0x1, 0x2];
      var _0x2910c2 = _0x55c899.ccclass;
      var _0x299f55 = _0x55c899.property;
      _0x2fd3c5 = _0x2910c2("SlotReel");
      _0x253b2a = _0x299f55({
        'type': _0x42b4f1,
        'tooltip': "滾輪Symbol"
      });
      _0x581d2d = _0x299f55({
        'type': _0x2bf5c4,
        'tooltip': "數字飛行時的Parent"
      });
      _0x1b15c4 = _0x299f55({
        'type': _0x2bf5c4,
        'tooltip': "High Layers"
      });
      _0x423ba4 = _0x299f55({
        'type': _0x2bf5c4,
        'tooltip': "low Layers"
      });
      _0x3ba5d4 = _0x299f55({
        'type': _0x2bf5c4,
        'tooltip': '主輪Parent'
      });
      _0x150c21 = _0x299f55({
        'type': _0x2bf5c4,
        'tooltip': "其他輪Parent"
      });
      _0x4f41c8 = function (_0x1d34ca) {
        function _0xeff9be() {
          var _0x15c0c5;
          var _0x300e3f = arguments.length;
          var _0x2895f5 = new Array(_0x300e3f);
          for (var _0x4be327 = 0x0; _0x4be327 < _0x300e3f; _0x4be327++) {
            _0x2895f5[_0x4be327] = arguments[_0x4be327];
          }
          _0x7af141(_0x15c0c5 = _0x1d34ca.call.apply(_0x1d34ca, [this].concat(_0x2895f5)) || this, "m_ReelSymbolPrefab", _0x1594bb, _0x4c7417(_0x15c0c5));
          _0x7af141(_0x15c0c5, "m_flyEffectParent", _0x3912ea, _0x4c7417(_0x15c0c5));
          _0x7af141(_0x15c0c5, "m_highLayer", _0x46e549, _0x4c7417(_0x15c0c5));
          _0x7af141(_0x15c0c5, 'm_lowLayer', _0x20092a, _0x4c7417(_0x15c0c5));
          _0x7af141(_0x15c0c5, "m_MainReelParentNode", _0x143271, _0x4c7417(_0x15c0c5));
          _0x7af141(_0x15c0c5, "m_NormalReelParentNode", _0x1c6f66, _0x4c7417(_0x15c0c5));
          _0x15c0c5.m_totalLength = null;
          _0x15c0c5.m_spinBufferTime01 = 0.1;
          _0x15c0c5.m_spinBufferTime02 = 0.1;
          _0x15c0c5.m_riseTime = 0x0;
          _0x15c0c5.m_upLength = 0x0;
          _0x15c0c5.m_downLength = 0xf;
          _0x15c0c5.m_columns = [];
          _0x15c0c5.m_upperColumns = [];
          _0x15c0c5.m_lowerColumns = [];
          _0x15c0c5.m_spinTime = 0.25;
          _0x15c0c5.m_spinDelayTime = 0.1;
          _0x15c0c5.m_currentSpinTime = 0x0;
          _0x15c0c5.m_stopTime = 0x0;
          _0x15c0c5.m_reelStopTime = new Array();
          _0x15c0c5.m_reelPreTime = new Array();
          _0x15c0c5.m_isClickStopBtn = false;
          _0x15c0c5.m_lockColumn = new Array();
          _0x15c0c5.m_comparePos = [];
          _0x15c0c5.m_reelXPos = [];
          _0x15c0c5.m_reelYPos = [];
          _0x15c0c5.m_isStop = false;
          _0x15c0c5.m_isShowBGEffectEnd = true;
          _0x15c0c5.m_isEffectEnd = true;
          _0x15c0c5.m_plateInfo = new Array();
          _0x15c0c5.m_hasAlreadyShowLock = [[false, false, false], [false, false, false], [false, false, false]];
          _0x15c0c5.m_hasAlreadyPlayLockSound = [[false, false, false], [false, false, false], [false, false, false]];
          _0x15c0c5.m_bgNearWinPos = -0x1;
          _0x15c0c5.m_finalWildOdds = new Array();
          _0x15c0c5.m_timesOfBaseSpin = 0x2;
          _0x15c0c5.m_spinIntervalTimes = 0x1;
          _0x15c0c5.m_waitEnterBGEndAddSpinAmount = 0x2a;
          _0x15c0c5.m_waitOolongEndAddSpinAmount = 0x1e;
          _0x15c0c5.m_bgNearWinMoreSpin = 0x8;
          _0x15c0c5.m_isLoadingComplete = false;
          _0x15c0c5.m_fakeReelDataProvider = undefined;
          _0x15c0c5.m_reelPositionOffset = [_0x1923c2(0x0, 0x0), _0x1923c2(0x0, 0x0), _0x1923c2(0x0, 0x0), _0x1923c2(0x0, 0x0), _0x1923c2(0x0, 0x0)];
          _0x15c0c5.m_viewSize = null;
          _0x15c0c5.m_symbolSize = null;
          _0x15c0c5.m_symbolSpriteFrames = [];
          _0x15c0c5.m_hasPlayLockThisRound = false;
          _0x15c0c5.m_hasChangeSymbolThisRound = {};
          _0x15c0c5.m_lockCount = 0x0;
          _0x15c0c5.m_isChangeToFinalSymbol = new Array();
          _0x15c0c5.m_gameView = undefined;
          _0x15c0c5.m_isPlayStopSound = [false, false, false, false, false];
          _0x15c0c5.m_isPlayStopEffect = [false, false, false, false, false];
          _0x15c0c5.m_reelSoundId = null;
          _0x15c0c5.m_ColWildColletFinishedCount = 0x0;
          _0x15c0c5.m_isAlreadyPlayStopAllEffect = false;
          return _0x15c0c5;
        }
        _0x5b6a43(_0xeff9be, _0x1d34ca);
        var _0xbac4d0 = _0xeff9be.prototype;
        _0xbac4d0.onLoad = function () {
          var _0x2b4ac1 = this;
          _0x4f3334('');
          this.m_viewSize = this.node.getComponent(_0x201890).contentSize;
          this.m_symbolSize = new _0x152b91((this.m_viewSize.width - _0x4772ce.SeparateLineWidth * (_0x4772ce.COL_LENGTH - 0x1)) / _0x4772ce.COL_LENGTH, this.m_viewSize.height / _0x4772ce.ROW_LENGTH);
          this.m_comparePos = [0x0, this.m_viewSize.height, this.m_viewSize.height + this.m_symbolSize.height * _0x4772ce.FAKE_ROW_LENGTH];
          this.m_reelYPos = [0.5 * -this.m_viewSize.height - this.m_symbolSize.height * _0x4772ce.FAKE_ROW_LENGTH * 0.5, 0x0, 0.5 * this.m_viewSize.height + this.m_symbolSize.height * _0x4772ce.FAKE_ROW_LENGTH * 0.5];
          for (var _0x49b856 = 0x0; _0x49b856 < _0x4772ce.COL_LENGTH; ++_0x49b856) {
            this.m_reelXPos.push(this.m_symbolSize.width * (_0x49b856 + 0.5) - 0.5 * this.m_viewSize.width + _0x4772ce.SeparateLineWidth * _0x49b856 + this.m_reelPositionOffset[_0x49b856].x);
          }
          this.m_totalLength = this.m_viewSize.height + this.m_symbolSize.height * _0x4772ce.FAKE_ROW_LENGTH * 0x2;
          var _0x45b562 = function () {
            var _0x53a894 = _0x35630d.TempoSetting.FortuneGems;
            _0x2b4ac1.m_riseTime = _0x53a894.BASE.RISE_TIME;
            _0x2b4ac1.m_upLength = _0x53a894.BASE.UP_LENGTH;
            _0x2b4ac1.m_spinBufferTime01 = _0x53a894.BASE.SPIN_BUFFER_TIME_01;
            _0x2b4ac1.m_spinBufferTime02 = _0x53a894.BASE.SPIN_BUFFER_TIME_02;
            _0x2b4ac1.m_downLength = _0x53a894.BASE.DOWN_LENGTH;
            _0x2b4ac1.m_spinTime = _0x53a894.BASE.SPIN_SPEED;
            _0x2b4ac1.m_timesOfBaseSpin = _0x53a894.BASE.TIMES_OF_BASE_SPIN;
            _0x2b4ac1.m_spinIntervalTimes = _0x53a894.BASE.SPIN_INTERVAL_TIMES;
            _0x2b4ac1.m_spinDelayTime = _0x53a894.BASE.SPIN_DELAY_TIME;
          };
          _0x45b562();
          _0x35630d.AddCb(_0x45b562);
        };
        _0xbac4d0.Init = function (_0x4c8039) {
          this.m_gameView = _0x4c8039;
          this.m_fakeReelDataProvider = new _0x49d631(_0x4772ce.FAKE_REEL_DATA, _0x4772ce.FAKE_WILD_ODDS_DATA);
          this.LoadSymbol();
        };
        _0xbac4d0.SetFakeReelData = function (_0x25bbb1) {
          this.m_fakeReelDataProvider.SetReelFakeData(_0x25bbb1);
        };
        _0xbac4d0.LoadSymbol = function () {
          var _0x39d2e9 = this;
          _0x20a3f2.GameBundle.loadDir("Img/Symbol", _0x3d26ca, function (_0x5704f8, _0x56dc6f) {
            if (_0x5704f8) {
              _0x39d2e9.LoadSymbol();
            } else {
              _0x56dc6f.sort(function (_0x58ece7, _0x4881b6) {
                var _0x368955 = _0x39d2e9.GetIdx(_0x58ece7.name);
                var _0x235287 = _0x39d2e9.GetIdx(_0x4881b6.name);
                return _0x368955[0x0] < _0x235287[0x0] ? -0x1 : _0x368955[0x0] > _0x235287[0x0] ? 0x1 : 0x0;
              });
              _0x39d2e9.m_symbolSpriteFrames = _0x56dc6f;
              _0x39d2e9.m_symbolSpriteFrames.push(null);
              _0x39d2e9.CreateFirstPlate(function (_0x16759e) {
                return _0x39d2e9.GetSymbolSpriteFrame(_0x16759e);
              });
              _0x39d2e9.m_isLoadingComplete = true;
            }
          });
        };
        _0xbac4d0.GetIdx = function (_0x384945) {
          var _0xcf81e5 = [];
          var _0x17a548 = /Symbol_(\d{2})/g.exec(_0x384945);
          for (var _0x99e2e0 = 0x0; _0x99e2e0 < _0x17a548.length; ++_0x99e2e0) {
            var _0x4a1a80 = Number(_0x17a548[_0x99e2e0]);
            if (!isNaN(_0x4a1a80)) {
              _0xcf81e5.push(_0x4a1a80);
            }
          }
          return _0xcf81e5;
        };
        _0xbac4d0.Reset = function () {
          this.m_lockCount = 0x0;
        };
        _0xbac4d0.Spin = function (_0x45b4fa) {
          if (!this.m_isStop) {
            this.m_currentSpinTime = _0x4bcdb4.strip(this.m_currentSpinTime + _0x45b4fa);
            this.SpinAll(_0x50efbf);
            if (!(0x0 === this.m_stopTime || this.m_currentSpinTime < this.m_stopTime || this.m_ColWildColletFinishedCount < _0x4772ce.COL_LENGTH)) {
              if (this.m_isEffectEnd && this.m_isShowBGEffectEnd) {
                this.m_isStop = true;
                if (this.m_reelSoundId) {
                  _0x55475f.Stop(this.m_reelSoundId);
                  this.m_reelSoundId = null;
                }
              }
            }
          }
        };
        _0xbac4d0.StartSpin = function () {
          this.m_currentSpinTime = 0x0;
          this.m_stopTime = 0x0;
          this.m_isStop = false;
          this.m_hasPlayLockThisRound = false;
          if (this.m_gameView.IsBonusGame) {
            this.m_isShowBGEffectEnd = false;
          }
          this.m_isClickStopBtn = false;
          this.m_isPlayStopSound = [false, false, false];
          this.m_isPlayStopEffect = [false, false, false];
          this.m_isAlreadyPlayStopAllEffect = false;
          this.m_ColWildColletFinishedCount = 0x0;
          for (var _0x39def5 = 0x0; _0x39def5 < _0x4772ce.COL_LENGTH; ++_0x39def5) {
            this.m_reelStopTime[_0x39def5] = this.m_reelPreTime[_0x39def5] = null;
          }
          for (var _0x1d81a7 = 0x0; _0x1d81a7 < this.m_isChangeToFinalSymbol.length; ++_0x1d81a7) {
            this.m_isChangeToFinalSymbol[_0x1d81a7] = this.m_lockColumn[_0x1d81a7] = false;
          }
          for (var _0x5b6373 in this.m_hasChangeSymbolThisRound) this.m_hasChangeSymbolThisRound[_0x5b6373] = false;
          if (this.m_lockCount === _0x4772ce.BG_NEAR_WIN_COUNT) {
            for (var _0x2b7111 = 0x0; _0x2b7111 < _0x4772ce.COL_LENGTH; ++_0x2b7111) {
              for (var _0xb83459 = 0x0; _0xb83459 < _0x4772ce.ROW_LENGTH; ++_0xb83459) {
                if (!this.m_hasAlreadyShowLock[_0x2b7111][_0xb83459]) {
                  this.m_bgNearWinPos = _0x2b7111 * _0x4772ce.ROW_LENGTH + _0xb83459;
                  break;
                }
              }
            }
            if (-0x1 !== this.m_bgNearWinPos) {
              this.m_gameView.BgNearWinSpineManager.ShowNearWin(this.m_bgNearWinPos);
            }
          }
        };
        _0xbac4d0.SpinAll = function (_0x3b5630) {
          for (var _0x31d48b = 0x0; _0x31d48b < _0x3b5630.length; ++_0x31d48b) {
            var _0x21c2b0 = this.m_spinTime;
            var _0x2cc92d = (this.m_currentSpinTime - this.m_riseTime * _0x4772ce.COL_LENGTH) % _0x21c2b0 / _0x21c2b0 * this.m_totalLength;
            var _0x104156 = _0x3b5630[_0x31d48b];
            this.Spin_RealSpinMultiPle(_0x104156, this.m_columns[_0x104156], 0x1, _0x2cc92d);
            this.Spin_RealSpinMultiPle(_0x104156, this.m_upperColumns[_0x104156], 0x2, _0x2cc92d);
            this.Spin_RealSpinMultiPle(_0x104156, this.m_lowerColumns[_0x104156], 0x0, _0x2cc92d);
          }
        };
        _0xbac4d0.Spin_RealSpinMultiPle = function (_0x263748, _0x45817f, _0x3c8fc2, _0x2f2f15) {
          var _0x4f9587 = this.m_currentSpinTime;
          var _0x29708d = this.m_reelStopTime[_0x263748];
          var _0x511d92 = this.m_riseTime * _0x4772ce.COL_LENGTH;
          var _0x169dc7 = this.m_reelXPos[_0x263748];
          var _0x33a8c4 = this.m_reelYPos[_0x3c8fc2];
          if (_0x3c8fc2 === _0x4772ce.REEL_MIDDLE_PLATE_INDEX && _0x4f9587 > _0x29708d + _0x511d92 + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
            _0x33a8c4 = this.m_reelYPos[_0x3c8fc2];
            _0x45817f.SetPosition(_0x1923c2(_0x169dc7, _0x33a8c4));
          }
          if (!(_0x4f9587 < this.m_riseTime * _0x263748)) {
            if (_0x4f9587 < this.m_riseTime * (_0x263748 + 0x1)) {
              var _0x950573 = (_0x4f9587 - this.m_riseTime * _0x263748) / this.m_riseTime * this.m_upLength;
              _0x45817f.SetPosition(_0x1923c2(_0x169dc7, _0x33a8c4 + _0x950573));
            } else {
              if (_0x4f9587 < _0x511d92) {
                _0x45817f.SetPosition(_0x1923c2(_0x169dc7, _0x33a8c4 + this.m_upLength));
              } else {
                if (null === _0x29708d || _0x4f9587 < _0x29708d + _0x511d92) {
                  var _0x249422 = this.CheckMoveLength(_0x2f2f15, _0x3c8fc2, _0x263748, _0x45817f);
                  _0x45817f.SetPosition(_0x1923c2(_0x169dc7, _0x33a8c4 - _0x249422));
                } else {
                  if (_0x4f9587 < _0x29708d + _0x511d92 + this.m_spinBufferTime01) {
                    this.ShowStopSymbolEffectBG(_0x263748);
                    var _0x4d97f9 = (_0x4f9587 - _0x29708d - _0x511d92) / this.m_spinBufferTime01 * this.m_downLength;
                    _0x45817f.SetPosition(_0x1923c2(_0x169dc7, _0x33a8c4 - _0x4d97f9));
                    this.CheckChangeToFinalSymbol(_0x263748, _0x45817f, _0x3c8fc2);
                    this.TryPlayReelStopSound(_0x263748);
                    this.ShowMGWildCollectEffect(this.m_isClickStopBtn, _0x263748);
                  } else {
                    if (_0x4f9587 < _0x29708d + _0x511d92 + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
                      var _0x2adba9 = (_0x4f9587 - _0x29708d - _0x511d92 - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
                      _0x45817f.SetPosition(_0x1923c2(_0x169dc7, _0x33a8c4 - this.m_downLength + _0x2adba9));
                      this.CheckChangeToFinalSymbol(_0x263748, _0x45817f, _0x3c8fc2);
                    } else {
                      this.ShowStopSymbolEffectBG(_0x263748);
                      this.CheckChangeToFinalSymbol(_0x263748, _0x45817f, _0x3c8fc2);
                      _0x45817f.SetPosition(_0x1923c2(_0x169dc7, _0x33a8c4));
                      this.ShowMGWildCollectEffect(this.m_isClickStopBtn, _0x263748);
                    }
                  }
                }
              }
            }
          }
        };
        _0xbac4d0.CheckChangeToFinalSymbol = function (_0x5853ea, _0x17aa65, _0x26471b) {
          if (_0x26471b === _0x4772ce.REEL_MIDDLE_PLATE_INDEX) {
            var _0x41dc62 = _0x17aa65.Name;
            if (!this.m_isChangeToFinalSymbol[_0x41dc62]) {
              this.m_isChangeToFinalSymbol[_0x41dc62] = true;
              this.ChangeSymbol(_0x5853ea, _0x17aa65, _0x26471b);
            }
          }
        };
        _0xbac4d0.CheckMoveLength = function (_0x252c5a, _0x22f28d, _0x12f3e2, _0x80ef93) {
          var _0x43e58b = _0x80ef93.Name;
          var _0x40e1c8 = this.m_comparePos[_0x22f28d];
          return _0x252c5a < _0x40e1c8 ? (this.m_hasChangeSymbolThisRound[_0x43e58b] = false, _0x252c5a) : (!this.m_hasChangeSymbolThisRound[_0x43e58b] && _0x252c5a - _0x40e1c8 < this.m_viewSize.height && (this.m_hasChangeSymbolThisRound[_0x43e58b] = true, this.ChangeSymbol(_0x12f3e2, _0x80ef93, _0x22f28d)), _0x252c5a - this.m_totalLength);
        };
        _0xbac4d0.ChangeSymbol = function (_0x1beb37, _0x32228e, _0x448273) {
          var _0x39db74 = Number(_0x32228e.Name);
          var _0x6c19fa = _0x448273 === _0x4772ce.REEL_MIDDLE_PLATE_INDEX ? _0x4772ce.ROW_LENGTH : _0x4772ce.FAKE_ROW_LENGTH;
          if (_0x39db74 >= 0x0) {
            if (null === this.m_reelPreTime[_0x1beb37] || this.m_currentSpinTime < this.m_reelPreTime[_0x1beb37]) {
              var _0x1db803 = this.SetRandomSymbols(_0x1beb37, _0x6c19fa);
              _0x32228e.SetSymbols(_0x1db803);
              var _0x3b56b8 = this.GetRandomOdds(_0x6c19fa);
              _0x32228e.SetWildOdds(_0x3b56b8);
            } else {
              _0x32228e.SetWildOdds(this.m_finalWildOdds[_0x1beb37]);
              _0x32228e.SetSymbols(this.m_plateInfo[_0x39db74].Row);
            }
            if (this.m_finalWildOdds[_0x1beb37]) {
              _0x32228e.SetWildOdds(this.m_finalWildOdds[_0x1beb37]);
            } else {
              var _0x439d3d = this.GetRandomOdds(_0x6c19fa);
              _0x32228e.SetWildOdds(_0x439d3d);
            }
          } else {
            var _0x10781d = this.SetRandomSymbols(_0x1beb37, _0x6c19fa);
            _0x32228e.SetSymbols(_0x10781d);
            var _0x5029ea = this.GetRandomOdds(_0x6c19fa);
            _0x32228e.SetWildOdds(_0x5029ea);
          }
        };
        _0xbac4d0.TryPlayReelStopSound = function (_0x1a1245) {
          if (!this.m_isPlayStopSound[_0x1a1245]) {
            this.m_isPlayStopSound[_0x1a1245] = true;
            if (this.m_gameView.IsHardStop) {
              this.m_isPlayStopSound = [true, true, true];
            }
            this.PlayReelSound(this.m_gameView.IsHardStop, _0x1a1245);
          }
        };
        _0xbac4d0.SetRandomSymbols = function (_0x435270, _0x4896b5) {
          var _0x168353 = [];
          if (this.m_gameView.IsBonusGame) {
            var _0x5c2a92 = this.m_gameView.SpinAckQue.BonusSymbol;
            var _0x3cfb7d = _0x4772ce.Symbol.WILD;
            var _0x65c01a = _0x4772ce.Symbol.NULL;
            for (var _0x5d5fa4 = 0x0; _0x5d5fa4 < _0x4896b5; ++_0x5d5fa4) {
              _0x168353.push(_0x65c01a);
            }
            for (var _0xe6c46e = 0x0; _0xe6c46e < _0x4896b5; ++_0xe6c46e) {
              var _0x4b2b15 = -0x1 !== this.m_bgNearWinPos ? 0.4 : 0.15;
              var _0x45a432 = Math.random();
              if (_0x45a432 < _0x4b2b15) {
                var _0x1e3490 = 0.3 * _0x4b2b15;
                _0x168353[_0xe6c46e] = _0x45a432 < _0x1e3490 ? _0x3cfb7d : _0x5c2a92;
              } else {
                _0x168353[_0xe6c46e] = _0x65c01a;
              }
            }
          } else {
            for (var _0x53a14b = 0x0; _0x53a14b < _0x4896b5; ++_0x53a14b) {
              _0x168353.unshift(this.GetRandomSymbol(_0x435270));
            }
          }
          return _0x168353;
        };
        _0xbac4d0.ShowMGWildCollectEffect = function () {
          var _0x597507 = _0x2b8ecf(_0x17c453().mark(function _0x26f407(_0x4bf05b, _0x4cf0a5) {
            return _0x17c453().wrap(function (_0x477455) {
              for (;;) {
                switch (_0x477455.prev = _0x477455.next) {
                  case 0x0:
                    if (!this.m_gameView.IsBonusGame) {
                      _0x477455.next = 0x2;
                      break;
                    }
                    return _0x477455.abrupt("return");
                  case 0x2:
                    if (!this.m_isPlayStopEffect[_0x4cf0a5]) {
                      _0x477455.next = 0x4;
                      break;
                    }
                    return _0x477455.abrupt("return");
                  case 0x4:
                    this.m_isPlayStopEffect[_0x4cf0a5] = true;
                    if (this.CheckHasWild(_0x4cf0a5)) {
                      _0x477455.next = 0x8;
                      break;
                    }
                    this.m_ColWildColletFinishedCount++;
                    return _0x477455.abrupt("return");
                  case 0x8:
                    this.m_gameView.SetRotationLock = true;
                    if (!_0x4bf05b || this.m_isAlreadyPlayStopAllEffect) {
                      _0x477455.next = 0x10;
                      break;
                    }
                    this.m_isAlreadyPlayStopAllEffect = true;
                    _0x477455.next = 0xd;
                    return this.m_gameView.EffectPlate.ShowAllWildStop();
                  case 0xd:
                    this.m_ColWildColletFinishedCount = _0x4772ce.COL_LENGTH;
                    _0x477455.next = 0x14;
                    break;
                  case 0x10:
                    if (this.m_isAlreadyPlayStopAllEffect) {
                      _0x477455.next = 0x14;
                      break;
                    }
                    _0x477455.next = 0x13;
                    return this.m_gameView.EffectPlate.ShowWildStop(_0x4cf0a5);
                  case 0x13:
                    this.m_ColWildColletFinishedCount++;
                  case 0x14:
                    this.m_gameView.SetRotationLock = false;
                  case 0x15:
                  case "end":
                    return _0x477455.stop();
                }
              }
            }, _0x26f407, this);
          }));
          return function (_0x4666a6, _0x2e96a6) {
            return _0x597507.apply(this, arguments);
          };
        }();
        _0xbac4d0.ShowStopSymbolEffectBG = function () {
          var _0x5f2e65 = _0x2b8ecf(_0x17c453().mark(function _0x20cfe4(_0x715932) {
            var _0x385ea3;
            var _0x40de73;
            var _0x33e5a9;
            var _0x195395;
            var _0x3d586a;
            var _0x33ff7b;
            var _0x348cbd;
            var _0x4d8e0b;
            return _0x17c453().wrap(function (_0x4a7ca7) {
              for (;;) {
                switch (_0x4a7ca7.prev = _0x4a7ca7.next) {
                  case 0x0:
                    _0x385ea3 = this.m_gameView.SpinAckQue.BonusSymbol;
                    if (!isNaN(_0x385ea3) && this.m_gameView.IsBonusGame) {
                      _0x4a7ca7.next = 0x4;
                      break;
                    }
                    this.m_isShowBGEffectEnd = true;
                    return _0x4a7ca7.abrupt("return");
                  case 0x4:
                    _0x40de73 = [];
                    _0x33e5a9 = false;
                    _0x195395 = this.GetSiblingIdxData(this.m_plateInfo[_0x715932].Row);
                    _0x3d586a = 0x0;
                  case 0x8:
                    if (!(_0x3d586a < this.m_plateInfo[_0x715932].Row.length)) {
                      _0x4a7ca7.next = 0x26;
                      break;
                    }
                    _0x33e5a9 = this.m_plateInfo[_0x715932].Row[_0x3d586a] == _0x4772ce.Symbol.WILD;
                    if (_0x385ea3 !== this.m_plateInfo[_0x715932].Row[_0x3d586a] && !_0x33e5a9) {
                      _0x4a7ca7.next = 0x22;
                      break;
                    }
                    if (false !== this.m_hasAlreadyShowLock[_0x715932][_0x3d586a]) {
                      _0x4a7ca7.next = 0x21;
                      break;
                    }
                    this.m_hasAlreadyShowLock[_0x715932][_0x3d586a] = true;
                    this.m_lockCount = this.m_lockCount + 0x1;
                    if (this.m_lockCount !== _0x4772ce.BG_NEAR_WIN_COUNT) {
                      _0x4a7ca7.next = 0x1c;
                      break;
                    }
                    _0x33ff7b = 0x0;
                  case 0x10:
                    if (!(_0x33ff7b < _0x4772ce.COL_LENGTH)) {
                      _0x4a7ca7.next = 0x1c;
                      break;
                    }
                    _0x348cbd = 0x0;
                  case 0x12:
                    if (!(_0x348cbd < _0x4772ce.ROW_LENGTH)) {
                      _0x4a7ca7.next = 0x19;
                      break;
                    }
                    if (this.m_hasAlreadyShowLock[_0x33ff7b][_0x348cbd] || _0x33ff7b === _0x715932) {
                      _0x4a7ca7.next = 0x16;
                      break;
                    }
                    this.m_bgNearWinPos = _0x33ff7b * _0x4772ce.ROW_LENGTH + _0x348cbd;
                    return _0x4a7ca7.abrupt("break", 0x19);
                  case 0x16:
                    ++_0x348cbd;
                    _0x4a7ca7.next = 0x12;
                    break;
                  case 0x19:
                    ++_0x33ff7b;
                    _0x4a7ca7.next = 0x10;
                    break;
                  case 0x1c:
                    _0x4d8e0b = _0x33e5a9 ? _0x4772ce.Symbol.WILD : _0x385ea3;
                    if (!this.m_hasPlayLockThisRound) {
                      this.m_hasPlayLockThisRound = true;
                    }
                    _0x40de73.push(this.m_gameView.EffectPlate.ShowLockThenLoop(_0x715932, _0x3d586a, _0x4d8e0b, _0x4772ce.LAYERS.NORMAL));
                    _0x4a7ca7.next = 0x22;
                    break;
                  case 0x21:
                    this.m_gameView.EffectPlate.UpdateAliveSymbolNodeSibling(_0x715932, _0x3d586a, _0x4772ce.LAYERS.NORMAL, _0x195395[_0x3d586a], _0x33e5a9);
                  case 0x22:
                    this.HideNormalSymbol(_0x715932, _0x3d586a);
                  case 0x23:
                    ++_0x3d586a;
                    _0x4a7ca7.next = 0x8;
                    break;
                  case 0x26:
                    _0x4a7ca7.next = 0x28;
                    return Promise.all(_0x40de73);
                  case 0x28:
                    this.m_ColWildColletFinishedCount++;
                    if (_0x715932 === _0x4772ce.COL_LENGTH - 0x1) {
                      this.m_isShowBGEffectEnd = true;
                    }
                  case 0x2a:
                  case "end":
                    return _0x4a7ca7.stop();
                }
              }
            }, _0x20cfe4, this);
          }));
          return function (_0x534084) {
            return _0x5f2e65.apply(this, arguments);
          };
        }();
        _0xbac4d0.HideNormalSymbol = function (_0x25d797, _0x11109a) {
          if (this.m_hasAlreadyShowLock[_0x25d797][_0x11109a]) {
            this.m_gameView.SlotReels.Columns[_0x25d797].HideSymbolByRow(_0x11109a);
          }
        };
        _0xbac4d0.GetSiblingIdxData = function (_0xa57759) {
          var _0x3f116b = _0x4772ce.Symbol.WILD;
          var _0x42f046 = new Array(_0xa57759.length).fill(0x0);
          var _0x54c418 = 0x0;
          var _0x2dadf5 = [];
          _0xa57759.forEach(function (_0x58da86, _0x547016) {
            if (_0x58da86 !== _0x3f116b) {
              _0x42f046[_0x547016] = _0x54c418++;
            } else {
              _0x2dadf5.push(_0x547016);
            }
          });
          var _0x2749db = _0xa57759.length - 0x1;
          _0x2dadf5.forEach(function (_0xb3c755) {
            _0x42f046[_0xb3c755] = _0x2749db--;
          });
          return _0x42f046;
        };
        _0xbac4d0.CheckHasWild = function (_0xdee8e1) {
          var _0x852b5e = false;
          for (var _0x43a57c = 0x0; _0x43a57c < this.m_plateInfo[_0xdee8e1].Row.length; ++_0x43a57c) {
            if (this.m_plateInfo[_0xdee8e1].Row[_0x43a57c] === _0x4772ce.Symbol.WILD) {
              _0x852b5e = true;
            }
          }
          return _0x852b5e;
        };
        _0xbac4d0.PlayReelSound = function (_0x54fa2d, _0x1f6ec9) {
          if (_0x54fa2d) {
            var _0x4a8d91 = false;
            for (var _0x31aacf = 0x0; _0x31aacf < this.m_plateInfo.length; ++_0x31aacf) {
              for (var _0x5264be = 0x0; _0x5264be < this.m_plateInfo[_0x31aacf].Row.length; ++_0x5264be) {
                if (this.m_plateInfo[_0x31aacf].Row[_0x5264be] === _0x4772ce.Symbol.WILD) {
                  _0x4a8d91 = true;
                }
              }
            }
            if (_0x4a8d91) {
              _0x55475f.Play(_0x4772ce.AudioClips.Wild_Stop);
            } else {
              _0x55475f.Play(_0x4772ce.AudioClips.ReelStop);
            }
          } else {
            var _0x3cc6e6 = false;
            for (var _0x138a7f = 0x0; _0x138a7f < this.m_plateInfo[_0x1f6ec9].Row.length; ++_0x138a7f) {
              if (this.m_gameView.IsBonusGame || this.m_plateInfo[_0x1f6ec9].Row[_0x138a7f] !== _0x4772ce.Symbol.WILD) {
                if (!(this.m_plateInfo[_0x1f6ec9].Row[_0x138a7f] !== _0x4772ce.Symbol.WILD || this.m_hasAlreadyPlayLockSound[_0x1f6ec9][_0x138a7f])) {
                  this.m_hasAlreadyPlayLockSound[_0x1f6ec9][_0x138a7f] = true;
                  _0x3cc6e6 = true;
                }
              } else {
                _0x3cc6e6 = true;
              }
            }
            if (_0x3cc6e6) {
              _0x55475f.Play(_0x4772ce.AudioClips.Wild_Stop);
            } else {
              _0x55475f.Play(_0x4772ce.AudioClips.ReelStop);
            }
          }
        };
        _0xbac4d0.SetPlateSymbol = function (_0x32c3fb, _0x4c6e1d) {
          if (undefined === _0x4c6e1d) {
            _0x4c6e1d = false;
          }
          if (0x0 === _0x32c3fb.length || _0x32c3fb.length < _0x4772ce.COL_LENGTH) {
            _0x32c3fb = this.m_gameView.OldRealPlate;
          }
          for (var _0x3be05f = 0x0; _0x3be05f < _0x4772ce.COL_LENGTH; ++_0x3be05f) {
            this.m_reelStopTime[_0x3be05f] = null;
            this.m_reelPreTime[_0x3be05f] = null;
            this.m_columns[_0x3be05f].SetSymbols(_0x32c3fb[_0x3be05f].Row);
            this.m_columns[_0x3be05f].SetPosition(_0x1923c2(this.m_reelXPos[_0x3be05f], this.m_reelYPos[0x1]));
            var _0x4e9e78 = this.m_gameView.OldOdds.splice(0x0, _0x4772ce.ROW_LENGTH);
            if (0x0 === _0x4e9e78.length) {
              _0x4e9e78 = [0x0, 0x0, 0x0];
            }
            this.m_columns[_0x3be05f].SetWildOdds(_0x4e9e78);
          }
          for (var _0x28468a = 0x0; _0x28468a < _0x4772ce.COL_LENGTH; ++_0x28468a) {
            this.m_upperColumns[_0x28468a].SetPosition(_0x1923c2(this.m_reelXPos[_0x28468a], this.m_reelYPos[0x2]));
            this.m_lowerColumns[_0x28468a].SetPosition(_0x1923c2(this.m_reelXPos[_0x28468a], this.m_reelYPos[0x0]));
            if (_0x4c6e1d) {
              this.m_upperColumns[_0x28468a].SetSymbols(_0x32c3fb[_0x28468a].Row);
              this.m_lowerColumns[_0x28468a].SetSymbols(_0x32c3fb[_0x28468a].Row);
              var _0x1e0785 = this.GetRandomOdds(0x3);
              this.m_upperColumns[_0x28468a].SetWildOdds(_0x1e0785);
              this.m_lowerColumns[_0x28468a].SetWildOdds(_0x1e0785);
            }
          }
        };
        _0xbac4d0.SetPlateInfo = function () {
          var _0x42537f = _0x2b8ecf(_0x17c453().mark(function _0xb19ce2(_0x48791e, _0xc70b79, _0x3eb33e, _0x1c3630) {
            var _0x755c53;
            return _0x17c453().wrap(function (_0x2aa887) {
              for (;;) {
                switch (_0x2aa887.prev = _0x2aa887.next) {
                  case 0x0:
                    if (undefined === _0x1c3630) {
                      _0x1c3630 = false;
                    }
                    this.m_plateInfo = _0x48791e;
                    if (!this.m_gameView.IsBonusGame) {
                      this.SetFinalWildOddsData(_0xc70b79);
                    }
                    if (!(_0x3eb33e || this.m_gameView.IsBonusGame)) {
                      this.m_gameView.OldRealPlate = JSON.parse(JSON.stringify(this.m_plateInfo));
                    }
                    _0x755c53 = this.m_gameView.IsBonusGame || _0x1c3630 ? 0x0 : 0xf;
                    this.m_downLength = _0x755c53;
                    if (_0x1c3630) {
                      this.SetEnterBonusPlateInfo();
                    } else {
                      this.SetReelStopTime();
                    }
                    if (this.m_gameView.IsBonusGame) {
                      this.SetBonusLockData();
                    }
                  case 0x8:
                  case 'end':
                    return _0x2aa887.stop();
                }
              }
            }, _0xb19ce2, this);
          }));
          return function (_0xfc6e32, _0x2b6f4d, _0x510e0f, _0x296642) {
            return _0x42537f.apply(this, arguments);
          };
        }();
        _0xbac4d0.SetColumnDark = function (_0x495a16, _0x5f34c5) {
          var _0x2473cc = -0x1 !== _0x5f34c5 ? _0x5f34c5 : _0x4772ce.COL_LENGTH;
          for (var _0x1eb222 = 0x0; _0x1eb222 < _0x4772ce.COL_LENGTH; ++_0x1eb222) {
            if (_0x1eb222 !== _0x2473cc) {
              this.m_columns[_0x1eb222].SetSymbolDark(_0x495a16);
              this.m_lowerColumns[_0x1eb222].SetSymbolDark(_0x495a16);
              this.m_upperColumns[_0x1eb222].SetSymbolDark(_0x495a16);
            }
          }
        };
        _0xbac4d0.CreateFirstPlate = function (_0x555af0) {
          for (var _0x39a9ef = 0x0; _0x39a9ef < _0x4772ce.COL_LENGTH; ++_0x39a9ef) {
            var _0x47355e = new _0x1ed7c2(this.m_NormalReelParentNode, _0x555af0, this.m_ReelSymbolPrefab, this.m_flyEffectParent, _0x4772ce.FAKE_ROW_LENGTH);
            _0x47355e.Name = "low" + _0x39a9ef.toString();
            _0x47355e.SetPosition(_0x1923c2(this.m_reelXPos[_0x39a9ef], this.m_reelYPos[_0x4772ce.REEL_DOWN_PLATE_INDEX]));
            var _0xcb8b08 = [];
            for (var _0x2fdc6e = 0x0; _0x2fdc6e < _0x4772ce.FAKE_ROW_LENGTH; ++_0x2fdc6e) {
              _0xcb8b08.unshift(this.GetRandomSymbol(_0x39a9ef));
            }
            _0x47355e.SetSymbols(_0xcb8b08);
            this.m_lowerColumns.push(_0x47355e);
          }
          for (var _0xb65355 = 0x0; _0xb65355 < _0x4772ce.COL_LENGTH; ++_0xb65355) {
            var _0x521617 = new _0x1ed7c2(this.m_MainReelParentNode, _0x555af0, this.m_ReelSymbolPrefab, this.m_flyEffectParent, _0x4772ce.ROW_LENGTH);
            _0x521617.Name = _0xb65355.toString();
            _0x521617.SetPosition(_0x1923c2(this.m_reelXPos[_0xb65355], this.m_reelYPos[_0x4772ce.REEL_MIDDLE_PLATE_INDEX]));
            var _0x22c9c4 = new _0x14a887.ljProto.Column();
            for (var _0x2423e4 = 0x0; _0x2423e4 < _0x4772ce.ROW_LENGTH; ++_0x2423e4) {
              _0x22c9c4.Row.push(_0x4772ce.Symbol.GREEN + _0xb65355);
            }
            _0x521617.SetSymbols(_0x22c9c4.Row);
            this.m_plateInfo.push(_0x22c9c4);
            this.m_columns.push(_0x521617);
          }
          this.m_gameView.OldRealPlate = JSON.parse(JSON.stringify(this.m_plateInfo));
          for (var _0x51fd62 = 0x0; _0x51fd62 < _0x4772ce.COL_LENGTH; ++_0x51fd62) {
            var _0x5c87b4 = new _0x1ed7c2(this.m_NormalReelParentNode, _0x555af0, this.m_ReelSymbolPrefab, this.m_flyEffectParent, _0x4772ce.FAKE_ROW_LENGTH);
            _0x5c87b4.Name = 'up' + _0x51fd62.toString();
            _0x5c87b4.SetPosition(_0x1923c2(this.m_reelXPos[_0x51fd62], this.m_reelYPos[_0x4772ce.REEL_UP_PLATE_INDEX]));
            var _0x24ef34 = [];
            for (var _0x427319 = 0x0; _0x427319 < _0x4772ce.FAKE_ROW_LENGTH; ++_0x427319) {
              _0x24ef34.unshift(this.GetRandomSymbol(_0x51fd62));
            }
            _0x5c87b4.SetSymbols(_0x24ef34);
            this.m_upperColumns.push(_0x5c87b4);
          }
        };
        _0xbac4d0.SetFinalWildOddsData = function (_0x37438b) {
          for (var _0x54afc3 = 0x0; _0x54afc3 < _0x4772ce.COL_LENGTH; _0x54afc3++) {
            this.m_finalWildOdds[_0x54afc3] = new Array();
            for (var _0x5b2730 = 0x0; _0x5b2730 < _0x4772ce.ROW_LENGTH; _0x5b2730++) {
              this.m_finalWildOdds[_0x54afc3][_0x5b2730] = _0x37438b[_0x54afc3 * _0x4772ce.COL_LENGTH + _0x5b2730];
            }
          }
        };
        _0xbac4d0.SetReelStopTime = function () {
          var _0x493838 = this.m_riseTime * _0x4772ce.COL_LENGTH;
          var _0x11da3a = Math.ceil((this.m_currentSpinTime - _0x493838) / this.m_spinTime);
          _0x11da3a = 0x0 !== _0x11da3a ? _0x11da3a : 0x1;
          var _0x572cf9 = 0x0;
          this.m_stopTime = _0x4bcdb4.strip(this.m_spinTime * (_0x11da3a + this.m_timesOfBaseSpin + this.m_spinIntervalTimes * (_0x4772ce.COL_LENGTH - 0x1)) + this.m_spinDelayTime + _0x493838 + this.m_spinBufferTime01 + this.m_spinBufferTime02);
          for (var _0x32f8f9 = 0x0; _0x32f8f9 < _0x4772ce.COL_LENGTH; ++_0x32f8f9) {
            if (this.m_lockColumn[_0x32f8f9]) {
              ++_0x572cf9;
            }
            this.m_reelStopTime[_0x32f8f9] = _0x4bcdb4.strip(this.m_spinTime * (_0x11da3a + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinTime * (_0x32f8f9 - _0x572cf9));
            this.m_reelPreTime[_0x32f8f9] = _0x4bcdb4.strip(this.m_spinTime * (_0x11da3a + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinTime * (_0x32f8f9 - 0x1 - _0x572cf9));
          }
          if (-0x1 !== this.m_bgNearWinPos) {
            for (var _0x56a059 = 0x0; _0x56a059 < _0x4772ce.COL_LENGTH; ++_0x56a059) {
              this.m_reelStopTime[_0x56a059] = _0x4bcdb4.strip(this.m_reelStopTime[_0x56a059] + this.m_bgNearWinMoreSpin * this.m_spinTime);
              this.m_reelPreTime[_0x56a059] = _0x4bcdb4.strip(this.m_reelPreTime[_0x56a059] + this.m_bgNearWinMoreSpin * this.m_spinTime);
            }
            this.m_stopTime = _0x4bcdb4.strip(this.m_stopTime + this.m_bgNearWinMoreSpin * this.m_spinTime);
            this.m_gameView.BgNearWinSpineManager.ShowNearWin(this.m_bgNearWinPos);
          }
        };
        _0xbac4d0.SetEnterBonusPlateInfo = function () {
          var _0x362f96 = _0x2b8ecf(_0x17c453().mark(function _0x3b10c2() {
            return _0x17c453().wrap(function (_0x22f72c) {
              for (;;) {
                switch (_0x22f72c.prev = _0x22f72c.next) {
                  case 0x0:
                    this.m_isEffectEnd = false;
                    _0x55475f.SetMusicFadeOut(this.m_gameView.MGBgmId, 0.5);
                    _0x55475f.Play(_0x4772ce.AudioClips.BG_Start);
                    this.m_gameView.SetRotationLock = true;
                    this.m_gameView.AvatarSpine.PlayEnterBG();
                    _0x22f72c.next = 0x7;
                    return Promise.all([this.m_gameView.BackGroundView.EnterBG(), this.m_gameView.BGDeclareManager.PlayBGIn(this.m_gameView.SpinAckQue.BonusSymbol)]);
                  case 0x7:
                    this.SetReelStopTime();
                    _0x55475f.SetMusicFadeIn(this.m_gameView.MGBgmId, 0x1);
                    this.m_gameView.SetRotationLock = false;
                    this.m_gameView.HandleEnterBG();
                    this.m_isEffectEnd = true;
                  case 0xc:
                  case "end":
                    return _0x22f72c.stop();
                }
              }
            }, _0x3b10c2, this);
          }));
          return function () {
            return _0x362f96.apply(this, arguments);
          };
        }();
        _0xbac4d0.SetOolongPlateInfo = function () {
          var _0x4e5c3c = _0x2b8ecf(_0x17c453().mark(function _0x3a570b() {
            var _0x5e928c;
            var _0x5a1e51 = this;
            return _0x17c453().wrap(function (_0x40d048) {
              for (;;) {
                switch (_0x40d048.prev = _0x40d048.next) {
                  case 0x0:
                    this.m_isEffectEnd = false;
                    _0x55475f.SetMusicFadeOut(this.m_gameView.MGBgmId, 0.5);
                    _0x55475f.Play(_0x4772ce.AudioClips.BG_Start);
                    this.m_stopTime += this.m_waitOolongEndAddSpinAmount * (this.m_spinTime / 0x2);
                    for (_0x5e928c = 0x0; _0x5e928c < _0x4772ce.COL_LENGTH; ++_0x5e928c) {
                      this.m_reelStopTime[_0x5e928c] = _0x4bcdb4.strip(this.m_reelStopTime[_0x5e928c] + this.m_waitOolongEndAddSpinAmount * (this.m_spinTime / 0x2));
                    }
                    console.log(this.m_reelStopTime);
                    this.m_gameView.AvatarSpine.PlayBgEnterFail();
                    this.m_gameView.SetRotationLock = true;
                    _0x40d048.next = 0xa;
                    return Promise.all([this.m_gameView.BGDeclareManager.PlayBGInOolong(), this.m_gameView.BackGroundView.EnterBG(function () {
                      _0x5a1e51.m_gameView.BackGroundView.SetIsOolong(true);
                      _0x5a1e51.m_gameView.BackGroundView.EnterMG(function () {
                        _0x5a1e51.m_gameView.BackGroundView.SetIsOolong(false);
                      });
                    })]);
                  case 0xa:
                    _0x55475f.SetMusicFadeIn(this.m_gameView.MGBgmId, 0x1);
                    this.m_gameView.SetRotationLock = false;
                    this.m_isEffectEnd = true;
                    if (this.m_gameView.IsHardStop) {
                      this.ClickStopBtn();
                    }
                  case 0xe:
                  case "end":
                    return _0x40d048.stop();
                }
              }
            }, _0x3a570b, this);
          }));
          return function () {
            return _0x4e5c3c.apply(this, arguments);
          };
        }();
        _0xbac4d0.SetBonusLockData = function () {
          for (var _0x3fd015 = 0x0; _0x3fd015 < _0x4772ce.COL_LENGTH; ++_0x3fd015) {
            var _0x3c0478 = true;
            for (var _0x5031e6 = 0x0; _0x5031e6 < _0x4772ce.ROW_LENGTH; ++_0x5031e6) {
              if (!this.m_hasAlreadyShowLock[_0x3fd015][_0x5031e6]) {
                _0x3c0478 = false;
              }
            }
            if (_0x3c0478) {
              this.m_reelStopTime[_0x3fd015] = this.m_reelPreTime[_0x3fd015] = 0x0;
            }
          }
        };
        _0xbac4d0.ResetLockSymbolData = function () {
          this.m_hasAlreadyShowLock = [[false, false, false], [false, false, false], [false, false, false]];
          this.m_hasAlreadyPlayLockSound = [[false, false, false], [false, false, false], [false, false, false]];
        };
        _0xbac4d0.ClickStopBtn = function () {
          if (0x0 !== this.m_stopTime && this.m_isEffectEnd && !this.m_gameView.IsRespin && !this.m_gameView.IsBonusGame) {
            this.m_isClickStopBtn = true;
            var _0x548981 = Math.ceil(this.m_currentSpinTime / this.m_spinTime);
            var _0x219dc8 = ((_0x548981 = _0x548981 > 0x0 ? _0x548981 : 0x1) - 0x1) * this.m_spinTime;
            var _0xf78d74 = _0x4bcdb4.strip(_0x219dc8 + this.m_spinTime);
            for (var _0x49630e = 0x0; _0x49630e < _0x4772ce.COL_LENGTH; ++_0x49630e) {
              if (this.m_reelStopTime[_0x49630e] > _0xf78d74) {
                this.m_reelStopTime[_0x49630e] = _0xf78d74;
                this.m_reelPreTime[_0x49630e] = _0x219dc8;
              }
            }
            var _0x462085 = _0x35630d.TempoSetting.TripleCoinTreasure.SPEED_UP_STOP_TIME(0x0, this.m_currentSpinTime);
            if (_0x462085 < this.m_stopTime) {
              this.m_stopTime = _0x4bcdb4.strip(_0x462085);
            }
          }
        };
        _0xbac4d0.GetSymbolSpriteFrame = function (_0x32d43a) {
          return this.m_symbolSpriteFrames[_0x32d43a];
        };
        _0xbac4d0.ShowPlate = function () {
          for (var _0x482204 = 0x0; _0x482204 < _0x4772ce.COL_LENGTH; ++_0x482204) {
            this.Columns[_0x482204].SetColumnVisiable(true);
          }
        };
        _0xbac4d0.HidePlate = function () {
          var _0x5b6643 = _0x2b8ecf(_0x17c453().mark(function _0x3d3fe0(_0x294866, _0x88430d) {
            var _0x2010e9;
            return _0x17c453().wrap(function (_0x1075d3) {
              for (;;) {
                switch (_0x1075d3.prev = _0x1075d3.next) {
                  case 0x0:
                    if (undefined === _0x294866) {
                      _0x294866 = 0x0;
                    }
                    if (undefined === _0x88430d) {
                      _0x88430d = false;
                    }
                    _0x1075d3.next = 0x4;
                    return _0x20a3f2.Wait(this, _0x294866);
                  case 0x4:
                    _0x4f3334(_0x88430d);
                    for (_0x2010e9 = 0x0; _0x2010e9 < _0x4772ce.COL_LENGTH; ++_0x2010e9) {
                      this.Columns[_0x2010e9].SetColumnVisiable(false);
                    }
                  case 0x6:
                  case "end":
                    return _0x1075d3.stop();
                }
              }
            }, _0x3d3fe0, this);
          }));
          return function (_0x209b2b, _0x15e53a) {
            return _0x5b6643.apply(this, arguments);
          };
        }();
        _0xbac4d0.GetSpecialGameSymbol = function (_0x5b37e8) {
          if (undefined === _0x5b37e8) {
            _0x5b37e8 = this.m_plateInfo;
          }
          var _0x4bbd6e = _0x4772ce.Symbol.WILD;
          for (var _0x4f9a0b = 0x0; _0x4f9a0b < _0x4772ce.COL_LENGTH; ++_0x4f9a0b) {
            for (var _0x3e77a = 0x0; _0x3e77a < _0x4772ce.ROW_LENGTH; ++_0x3e77a) {
              if (_0x5b37e8[_0x4f9a0b] && undefined !== _0x5b37e8[_0x4f9a0b].Row[_0x3e77a] && _0x5b37e8[_0x4f9a0b].Row[_0x3e77a] !== _0x4772ce.Symbol.WILD && _0x5b37e8[_0x4f9a0b].Row[_0x3e77a] !== _0x4772ce.Symbol.NULL) {
                if (_0x4bbd6e === _0x4772ce.Symbol.WILD) {
                  _0x4bbd6e = _0x5b37e8[_0x4f9a0b].Row[_0x3e77a];
                } else {
                  if (_0x4bbd6e !== _0x5b37e8[_0x4f9a0b].Row[_0x3e77a]) {
                    return -0x1;
                  }
                }
              }
            }
          }
          return _0x4bbd6e;
        };
        _0xbac4d0.SetNumLayerHigher = function () {
          this.m_flyEffectParent.removeFromParent();
          this.m_highLayer.addChild(this.m_flyEffectParent);
        };
        _0xbac4d0.SetNumLayerLower = function () {
          this.m_flyEffectParent.removeFromParent();
          this.m_lowLayer.addChild(this.m_flyEffectParent);
        };
        _0xbac4d0.GetRandomOdds = function (_0xaa4e4b) {
          var _0x3a7931 = [];
          for (var _0x285c1d = 0x0; _0x285c1d < _0xaa4e4b; ++_0x285c1d) {
            var _0x19cfde = this.m_fakeReelDataProvider.GetRandomWildOdd();
            _0x3a7931.push(_0x19cfde);
          }
          return _0x3a7931;
        };
        _0xbac4d0.GetRandomSymbol = function (_0x546781) {
          return this.m_fakeReelDataProvider.GetRandomReelSymbol(_0x546781);
        };
        _0x9778ac(_0xeff9be, [{
          'key': "IsLoadingComplete",
          'get': function () {
            return this.m_isLoadingComplete;
          }
        }, {
          'key': "Columns",
          'get': function () {
            return this.m_columns;
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
          'key': "IsShowBGEffectEnd",
          'get': function () {
            return this.m_isShowBGEffectEnd;
          }
        }, {
          'key': 'PlateInfo',
          'get': function () {
            return this.m_plateInfo;
          }
        }, {
          'key': "BgNearWinPos",
          'get': function () {
            return this.m_bgNearWinPos;
          },
          'set': function (_0x414a7e) {
            this.m_bgNearWinPos = _0x414a7e;
          }
        }]);
        return _0xeff9be;
      }(_0xf24552);
      _0x1594bb = _0x4bec9c(_0x4f41c8.prototype, "m_ReelSymbolPrefab", [_0x253b2a], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3912ea = _0x4bec9c(_0x4f41c8.prototype, "m_flyEffectParent", [_0x581d2d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x46e549 = _0x4bec9c(_0x4f41c8.prototype, 'm_highLayer', [_0x1b15c4], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x20092a = _0x4bec9c(_0x4f41c8.prototype, "m_lowLayer", [_0x423ba4], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x143271 = _0x4bec9c(_0x4f41c8.prototype, "m_MainReelParentNode", [_0x3ba5d4], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1c6f66 = _0x4bec9c(_0x4f41c8.prototype, "m_NormalReelParentNode", [_0x150c21], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x2bd948;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, '084e4M9s8BOib8zanbSy1hN', "WildNumDecimalPlacesProvider", undefined);
      var _0x32a615 = _0x55c899.ccclass;
      _0x2bd948 = _0x32a615("WildNumDecimalAmountProvider");
      var _0x1fb0fe;
      var _0x4f2879;
      var _0x32f1ed;
      var _0x84961;
      var _0x562a66;
      var _0xf0121a;
      var _0x326d41;
      var _0x164df5;
      var _0x2bf034;
      var _0x16390a;
      var _0x5f2951;
      var _0x2eaaa0;
      var _0x5d56db;
      var _0x2870ba;
      var _0x359f70;
      var _0x3af6e1;
      var _0x15e8c5;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "a4b83idlNlHcZQFqX6vJhFz", "ExtraBetComponent", undefined);
      var _0x130ae0 = _0x55c899.property;
      _0x1fb0fe = _0x130ae0({
        'type': _0x2bf5c4,
        'tooltip': "EX 按鈕最頂層節點(整顆node)"
      });
      _0x4f2879 = _0x130ae0({
        'type': _0x52c8bd,
        'tooltip': "EX 按鈕"
      });
      _0x32f1ed = _0x130ae0({
        'type': _0x52c8bd,
        'tooltip': "按鈕ON"
      });
      _0x84961 = _0x130ae0({
        'type': _0x52c8bd,
        'tooltip': '按鈕OFF'
      });
      _0x562a66 = _0x130ae0({
        'type': _0x52c8bd,
        'tooltip': "提示問號按鈕"
      });
      _0xf0121a = _0x130ae0({
        'type': _0x2bf5c4,
        'tooltip': "提示文字tip面板"
      });
      _0x326d41 = _0x130ae0({
        'type': _0x3fe2b7,
        'tooltip': "功能說明文字串Label"
      });
      _0x164df5 = _0x130ae0({
        'type': _0x4980af,
        'tooltip': "本體ExtraBet文字圖片"
      });
      _0x2bf034 = function (_0x36bc0d) {
        function _0x32c35c() {
          var _0x1a55bf;
          var _0x3f2538 = arguments.length;
          var _0x5c9c78 = new Array(_0x3f2538);
          for (var _0x207e10 = 0x0; _0x207e10 < _0x3f2538; _0x207e10++) {
            _0x5c9c78[_0x207e10] = arguments[_0x207e10];
          }
          _0x7af141(_0x1a55bf = _0x36bc0d.call.apply(_0x36bc0d, [this].concat(_0x5c9c78)) || this, "m_multiExtraBetNode", _0x16390a, _0x4c7417(_0x1a55bf));
          _0x7af141(_0x1a55bf, "m_multiBtn", _0x5f2951, _0x4c7417(_0x1a55bf));
          _0x7af141(_0x1a55bf, "m_multiBtn_on", _0x2eaaa0, _0x4c7417(_0x1a55bf));
          _0x7af141(_0x1a55bf, "m_multiBtn_off", _0x5d56db, _0x4c7417(_0x1a55bf));
          _0x7af141(_0x1a55bf, "m_multiBtn_TipQuesMark", _0x2870ba, _0x4c7417(_0x1a55bf));
          _0x7af141(_0x1a55bf, "m_multiBtn_Tip", _0x359f70, _0x4c7417(_0x1a55bf));
          _0x7af141(_0x1a55bf, 'm_multiBtn_Description', _0x3af6e1, _0x4c7417(_0x1a55bf));
          _0x7af141(_0x1a55bf, "m_Txt_Extra_Bet", _0x15e8c5, _0x4c7417(_0x1a55bf));
          _0x1a55bf.m_isExtendShowBar = false;
          _0x1a55bf.m_ExtraBetAniPlaying = null;
          _0x1a55bf.m_isExtra = false;
          _0x1a55bf.m_isForceExtraOnEnd = false;
          _0x1a55bf.m_isTwoStep = false;
          _0x1a55bf.m_toStepTwo = false;
          _0x1a55bf.m_triggerCb = null;
          _0x1a55bf.m_canExtend = true;
          return _0x1a55bf;
        }
        _0x5b6a43(_0x32c35c, _0x36bc0d);
        var _0x468ec0 = _0x32c35c.prototype;
        _0x468ec0.Init = function (_0x5daca3, _0x2472dd, _0x576c9f, _0x475054, _0x4bdcb) {
          var _0x427147 = this;
          if (undefined === _0x475054) {
            _0x475054 = false;
          }
          if (undefined === _0x4bdcb) {
            _0x4bdcb = false;
          }
          if (_0x4bcdb4.CheckSwitchOff(_0x808792.CloseExtraBet)) {
            this.node.active = false;
            return void this.node.on(_0x12d84b.ACTIVE_IN_HIERARCHY_CHANGED, function () {
              _0x427147.node.active = false;
            });
          }
          this.m_triggerCb = _0x5daca3;
          this.m_isTwoStep = _0x475054;
          if (this.m_multiBtn_Description && this.m_Txt_Extra_Bet) {
            _0x4f3334(" localeStringManager.CurrLang : " + _0x16b616.CurrLang);
            this.m_multiBtn_Description.string = _0x16b616.GetString(_0x2472dd);
            this.m_Txt_Extra_Bet.spriteFrame = _0x16b616.GetGameAtlas().getSpriteFrame(_0x576c9f);
          }
          _0x3ec223.Init(_0x4bdcb ? null : this.node, this.ForceSetExtraBet.bind(this));
        };
        _0x468ec0.onLoad = function () {
          var _0x22a581 = this;
          if (!_0x4bcdb4.CheckSwitchOff(_0x808792.CloseExtraBet)) {
            _0x4f3334("ExtraBet onLoad");
            if (this.m_multiBtn) {
              this.m_multiBtn.node.on(_0x2bf5c4.EventType.TOUCH_END, function () {
                if (!_0x22a581.m_ExtraBetAniPlaying) {
                  _0x55475f.Play(_0x20a3f2.AudioClips.COMMON_BTN);
                  if (_0x22a581.CheckCanUseBtn()) {
                    _0x22a581.ExtendShowBar(!_0x22a581.m_isExtendShowBar);
                  } else {
                    _0x5bb90e.ShowMessageBox(_0x20a3f2.StringKey.FREEWINCASH_PLAYING1);
                  }
                }
              });
            }
            for (var _0x122466 = 0x0; _0x122466 < this.m_multiBtn_on.length; _0x122466++) {
              this.m_multiBtn_on[_0x122466].node.on(_0x2bf5c4.EventType.TOUCH_END, function () {
                if (!_0x22a581.m_ExtraBetAniPlaying) {
                  if (_0x22a581.CheckCanUseBtn()) {
                    _0x22a581.ChangeBetMode();
                  } else {
                    _0x5bb90e.ShowMessageBox(_0x20a3f2.StringKey.FREEWINCASH_PLAYING1);
                  }
                }
              });
              if (this.m_multiBtn_off[_0x122466]) {
                this.m_multiBtn_off[_0x122466].node.on(_0x2bf5c4.EventType.TOUCH_END, function () {
                  if (!_0x22a581.m_ExtraBetAniPlaying) {
                    _0x55475f.Play(_0x20a3f2.AudioClips.COMMON_BTN);
                    if (_0x22a581.CheckCanUseBtn()) {
                      _0x22a581.ChangeBetMode();
                    }
                  }
                });
              }
            }
            if (this.m_multiBtn_TipQuesMark) {
              this.m_multiBtn_TipQuesMark.node.on(_0x2bf5c4.EventType.TOUCH_END, _0x2b8ecf(_0x17c453().mark(function _0x2ef9b8() {
                return _0x17c453().wrap(function (_0xe29fe4) {
                  for (;;) {
                    switch (_0xe29fe4.prev = _0xe29fe4.next) {
                      case 0x0:
                        if (_0x22a581.m_ExtraBetAniPlaying) {
                          _0xe29fe4.next = 0xd;
                          break;
                        }
                        _0x55475f.Play(_0x20a3f2.AudioClips.COMMON_BTN);
                        if (_0x599181.Current() != _0x4225de.IDLE || _0x8a30d7.IsBuyBonus) {
                          _0xe29fe4.next = 0xc;
                          break;
                        }
                        if (!_0x22a581.m_isExtendShowBar) {
                          _0xe29fe4.next = 0x7;
                          break;
                        }
                        _0x22a581.m_multiBtn_Tip.active = !_0x22a581.m_multiBtn_Tip.active;
                        _0xe29fe4.next = 0xa;
                        break;
                      case 0x7:
                        _0xe29fe4.next = 0x9;
                        return _0x22a581.ExtendShowBar(true);
                      case 0x9:
                        if (!_0x22a581.m_multiBtn_Tip.active && _0x22a581.m_isExtendShowBar) {
                          _0x22a581.m_multiBtn_Tip.active = true;
                        }
                      case 0xa:
                        _0xe29fe4.next = 0xd;
                        break;
                      case 0xc:
                        _0x5bb90e.ShowMessageBox(_0x20a3f2.StringKey.FREEWINCASH_PLAYING1);
                      case 0xd:
                      case "end":
                        return _0xe29fe4.stop();
                    }
                  }
                }, _0x2ef9b8);
              })));
            }
            this.ExtendShowBar(false);
          }
        };
        _0x468ec0.start = function () {
          _0x4f3334("ExtraBet start");
        };
        _0x468ec0.CheckCanUseBtn = function () {
          return _0x20a3f2.IsInMG() && _0x599181.Current() == _0x4225de.IDLE && !_0x20a3f2.IsUsingItem && !_0x8a30d7.IsBuyBonus && !_0x121e70.IsFeaturesDemoMode && !_0x4bcdb4.CheckSwitchOff(_0x808792.CloseExtraBet);
        };
        _0x468ec0.OnSpin = function () {
          this.ExtendShowBar(false);
        };
        _0x468ec0.ShowExtra = function (_0x2802cc) {
          if (this.m_multiExtraBetNode && !_0x4bcdb4.CheckSwitchOff(_0x808792.CloseExtraBet)) {
            this.m_multiExtraBetNode.active = _0x2802cc;
          }
        };
        _0x468ec0.GoToFeatures = function () {};
        _0x468ec0.ExtendShowBar = function () {
          var _0x46358c = _0x2b8ecf(_0x17c453().mark(function _0x5eabf8(_0x7517c7) {
            var _0x4ad46c;
            return _0x17c453().wrap(function (_0x56f13d) {
              for (;;) {
                switch (_0x56f13d.prev = _0x56f13d.next) {
                  case 0x0:
                    if (this.m_canExtend && !_0x4bcdb4.CheckSwitchOff(_0x808792.CloseExtraBet)) {
                      _0x56f13d.next = 0x2;
                      break;
                    }
                    return _0x56f13d.abrupt("return");
                  case 0x2:
                    if (!_0x35e83c || this.m_ExtraBetAniPlaying) {
                      _0x56f13d.next = 0x1f;
                      break;
                    }
                    if (!_0x7517c7) {
                      _0x56f13d.next = 0x14;
                      break;
                    }
                    if (_0x35e83c.IsAutoSpin || _0x20a3f2.IsUsingItem || _0x8a30d7.IsBuyBonus) {
                      _0x56f13d.next = 0x11;
                      break;
                    }
                    if (this.m_isExtendShowBar) {
                      _0x56f13d.next = 0xf;
                      break;
                    }
                    this.m_isExtendShowBar = true;
                    _0x35e83c.SetSpinState(0x1);
                    this.m_ExtraBetAniPlaying = true;
                    if (!this.m_multiExtraBetNode) {
                      _0x56f13d.next = 0xc;
                      break;
                    }
                    _0x56f13d.next = 0xc;
                    return this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x582ccd), "ExtraBet_Show");
                  case 0xc:
                    this.m_ExtraBetAniPlaying = false;
                    _0x35e83c.SetSpinState(0x0);
                    if (this.m_isExtra && this.m_multiExtraBetNode) {
                      this.m_multiExtraBetNode.getComponent(_0x582ccd).play("ExtraBet_Active");
                    }
                  case 0xf:
                    _0x56f13d.next = 0x12;
                    break;
                  case 0x11:
                    _0x5bb90e.ShowMessageBox(_0x20a3f2.StringKey.FREEWINCASH_PLAYING1);
                  case 0x12:
                    _0x56f13d.next = 0x1f;
                    break;
                  case 0x14:
                    if (!this.m_isExtendShowBar) {
                      _0x56f13d.next = 0x1f;
                      break;
                    }
                    if (!_0x35e83c.IsAutoSpin) {
                      _0x35e83c.SetSpinState(0x1);
                    }
                    if (this.m_multiBtn_Tip) {
                      this.m_multiBtn_Tip.active = false;
                    }
                    this.m_ExtraBetAniPlaying = true;
                    if (!this.m_multiExtraBetNode) {
                      _0x56f13d.next = 0x1b;
                      break;
                    }
                    _0x56f13d.next = 0x1b;
                    return this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x582ccd), "ExtraBet_Close");
                  case 0x1b:
                    this.m_ExtraBetAniPlaying = false;
                    if (!_0x35e83c.IsAutoSpin) {
                      _0x35e83c.SetSpinState(0x0);
                    }
                    if (this.m_multiExtraBetNode) {
                      if (this.m_isExtra) {
                        this.m_multiExtraBetNode.getComponent(_0x582ccd).play("ExtraBet_Active");
                      } else {
                        this.m_multiExtraBetNode.getComponent(_0x582ccd).play("ExtraBet_OFF");
                        (_0x4ad46c = this.m_multiExtraBetNode.getComponent(_0x582ccd).getState("ExtraBet_OFF")).setTime(_0x4ad46c.duration);
                      }
                    }
                    this.m_isExtendShowBar = false;
                  case 0x1f:
                  case 'end':
                    return _0x56f13d.stop();
                }
              }
            }, _0x5eabf8, this);
          }));
          return function (_0x1433e3) {
            return _0x46358c.apply(this, arguments);
          };
        }();
        _0x468ec0.ChangeBetMode = function () {
          var _0x27893b = _0x2b8ecf(_0x17c453().mark(function _0x2e0094() {
            var _0x1cc3bc;
            return _0x17c453().wrap(function (_0x574bda) {
              for (;;) {
                switch (_0x574bda.prev = _0x574bda.next) {
                  case 0x0:
                    if (!_0x4bcdb4.CheckSwitchOff(_0x808792.CloseExtraBet)) {
                      _0x574bda.next = 0x2;
                      break;
                    }
                    return _0x574bda.abrupt("return");
                  case 0x2:
                    _0x4f3334("ChangeBetMode stateManager.Current() : ", _0x599181.Current());
                    if (!_0x35e83c || _0x8a30d7.IsBuyBonus || _0x599181.Current() !== _0x4225de.IDLE && !this.m_isExtra) {
                      _0x574bda.next = 0x24;
                      break;
                    }
                    this.m_isExtra = !this.m_isExtra;
                    _0x1cc3bc = [];
                    if (!this.m_isExtra) {
                      _0x574bda.next = 0x18;
                      break;
                    }
                    if (this.m_isTwoStep) {
                      this.m_toStepTwo = true;
                    } else {
                      _0x35e83c.ChangeMultiBet(0x1);
                    }
                    if (0x1 == this.m_multiBtn_on.length) {
                      this.m_multiBtn_on[0x0].node.active = true;
                      this.m_multiBtn_off[0x0].node.active = false;
                    }
                    this.m_ExtraBetAniPlaying = true;
                    if (!(null == _0x35e83c)) {
                      _0x35e83c.SetSpinState(0x1);
                    }
                    if (!(null == _0x121e70)) {
                      _0x121e70.SetBuyBonusState(false);
                    }
                    if (this.m_multiExtraBetNode) {
                      _0x1cc3bc.push(this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x582ccd), "ExtraBet_ON"));
                    }
                    _0x1cc3bc.push(this.m_triggerCb(this.m_isExtra, false));
                    _0x574bda.next = 0x10;
                    return Promise.all(_0x1cc3bc);
                  case 0x10:
                    this.m_ExtraBetAniPlaying = false;
                    if (!(null == _0x35e83c)) {
                      _0x35e83c.SetSpinState(0x0);
                    }
                    if (this.m_multiExtraBetNode) {
                      this.m_multiExtraBetNode.getComponent(_0x582ccd).play("ExtraBet_Active");
                    }
                    _0x574bda.next = 0x15;
                    return _0x20a3f2.Wait(this, 0.2);
                  case 0x15:
                    if (!(null == _0x121e70)) {
                      _0x121e70.SetBuyBonusState(true);
                    }
                    _0x574bda.next = 0x22;
                    break;
                  case 0x18:
                    _0x35e83c.ChangeMultiBet(0x0);
                    if (0x1 == this.m_multiBtn_on.length) {
                      this.m_multiBtn_on[0x0].node.active = false;
                      this.m_multiBtn_off[0x0].node.active = true;
                    }
                    this.m_ExtraBetAniPlaying = true;
                    if (!(null == _0x35e83c)) {
                      _0x35e83c.SetSpinState(0x1);
                    }
                    if (this.m_multiExtraBetNode) {
                      _0x1cc3bc.push(this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x582ccd), "ExtraBet_OFF"));
                    }
                    _0x1cc3bc.push(this.m_triggerCb(this.m_isExtra, false));
                    _0x574bda.next = 0x20;
                    return Promise.all(_0x1cc3bc);
                  case 0x20:
                    this.m_ExtraBetAniPlaying = false;
                    if (!(null == _0x35e83c)) {
                      _0x35e83c.SetSpinState(0x0);
                    }
                  case 0x22:
                    _0x574bda.next = 0x25;
                    break;
                  case 0x24:
                    if (_0x599181.Current() !== _0x4225de.IDLE) {
                      _0x4f3334("TRIAL_REFUSED_REASON 1 ");
                      _0x5bb90e.ShowMessageBox(_0x20a3f2.StringKey.FREEWINCASH_PLAYING1);
                    }
                  case 0x25:
                  case "end":
                    return _0x574bda.stop();
                }
              }
            }, _0x2e0094, this);
          }));
          return function () {
            return _0x27893b.apply(this, arguments);
          };
        }();
        _0x468ec0.SetTwoStepMulti = function () {
          var _0x2d6045 = _0x2b8ecf(_0x17c453().mark(function _0x14cb74(_0x143476, _0x49ec4e) {
            return _0x17c453().wrap(function (_0x19ef4e) {
              for (;;) {
                switch (_0x19ef4e.prev = _0x19ef4e.next) {
                  case 0x0:
                    if (!_0x4bcdb4.CheckSwitchOff(_0x808792.CloseExtraBet)) {
                      _0x19ef4e.next = 0x2;
                      break;
                    }
                    return _0x19ef4e.abrupt('return');
                  case 0x2:
                    if (!this.m_isTwoStep || !this.m_toStepTwo) {
                      _0x19ef4e.next = 0xf;
                      break;
                    }
                    if (!_0x143476) {
                      _0x19ef4e.next = 0x7;
                      break;
                    }
                    _0x35e83c.ChangeMultiBet(_0x49ec4e);
                    _0x19ef4e.next = 0xf;
                    break;
                  case 0x7:
                    this.m_isExtra = false;
                    if (0x1 == this.m_multiBtn_on.length) {
                      this.m_multiBtn_on[0x0].node.active = false;
                      this.m_multiBtn_off[0x0].node.active = true;
                    }
                    this.m_ExtraBetAniPlaying = true;
                    if (_0x35e83c) {
                      _0x35e83c.SetSpinState(0x1);
                    }
                    if (!this.m_multiExtraBetNode) {
                      _0x19ef4e.next = 0xe;
                      break;
                    }
                    _0x19ef4e.next = 0xe;
                    return this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x582ccd), 'ExtraBet_OFF');
                  case 0xe:
                    this.m_ExtraBetAniPlaying = false;
                  case 0xf:
                  case "end":
                    return _0x19ef4e.stop();
                }
              }
            }, _0x14cb74, this);
          }));
          return function (_0x1be605, _0x2e9f42) {
            return _0x2d6045.apply(this, arguments);
          };
        }();
        _0x468ec0.ForceSetExtraBet = function () {
          var _0x341aec = _0x2b8ecf(_0x17c453().mark(function _0x2e72d9(_0x4a4a8d, _0x48e368) {
            var _0x42615d;
            return _0x17c453().wrap(function (_0x1dddf8) {
              for (;;) {
                switch (_0x1dddf8.prev = _0x1dddf8.next) {
                  case 0x0:
                    if (undefined === _0x48e368) {
                      _0x48e368 = 0x1;
                    }
                    if (!_0x4bcdb4.CheckSwitchOff(_0x808792.CloseExtraBet)) {
                      _0x1dddf8.next = 0x3;
                      break;
                    }
                    return _0x1dddf8.abrupt("return");
                  case 0x3:
                    if (!_0x4a4a8d) {
                      _0x1dddf8.next = 0xe;
                      break;
                    }
                    this.m_isForceExtraOnEnd = false;
                    this.m_isExtra = true;
                    if (0x1 == this.m_multiBtn_on.length) {
                      this.m_multiBtn_on[0x0].node.active = true;
                      this.m_multiBtn_off[0x0].node.active = false;
                    }
                    if (this.m_multiExtraBetNode) {
                      this.m_multiExtraBetNode.getComponent(_0x582ccd).play("ExtraBet_Active");
                    }
                    if (this.m_isTwoStep) {
                      this.m_toStepTwo = true;
                      this.SetTwoStepMulti(_0x4a4a8d, _0x48e368);
                    } else {
                      _0x35e83c.ChangeMultiBet(_0x48e368);
                    }
                    _0x1dddf8.next = 0xb;
                    return this.m_triggerCb(_0x4a4a8d, true);
                  case 0xb:
                    this.m_isForceExtraOnEnd = true;
                    _0x1dddf8.next = 0x17;
                    break;
                  case 0xe:
                    if (!this.m_isExtra) {
                      _0x1dddf8.next = 0x17;
                      break;
                    }
                    _0x42615d = [];
                    this.m_isExtra = false;
                    if (0x1 == this.m_multiBtn_on.length) {
                      this.m_multiBtn_on[0x0].node.active = false;
                      this.m_multiBtn_off[0x0].node.active = true;
                    }
                    _0x35e83c.ChangeMultiBet(0x0);
                    if (this.m_multiExtraBetNode) {
                      if (this.m_isExtendShowBar) {
                        _0x42615d.push(this.ExtendShowBar(false));
                      } else {
                        _0x42615d.push(this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x582ccd), 'ExtraBet_OFF'));
                      }
                    }
                    _0x42615d.push(this.m_triggerCb(_0x4a4a8d, true));
                    _0x1dddf8.next = 0x17;
                    return Promise.all(_0x42615d);
                  case 0x17:
                  case "end":
                    return _0x1dddf8.stop();
                }
              }
            }, _0x2e72d9, this);
          }));
          return function (_0x5152d8, _0x553bfb) {
            return _0x341aec.apply(this, arguments);
          };
        }();
        _0x468ec0.OnRotation = function () {
          if (!_0x4bcdb4.CheckSwitchOff(_0x808792.CloseExtraBet)) {
            if (this.m_multiExtraBetNode) {
              if (this.m_isExtra) {
                this.m_multiExtraBetNode.getComponent(_0x582ccd).play("ExtraBet_Active");
              } else {
                this.m_multiExtraBetNode.getComponent(_0x582ccd).play("ExtraBet_Stop");
              }
            }
            if (this.m_multiBtn_Tip) {
              this.m_multiBtn_Tip.active = false;
            }
          }
        };
        _0x468ec0.IsExAnimationTouchable = function () {
          return !this.m_ExtraBetAniPlaying;
        };
        _0x468ec0.FirstShowBar = function () {};
        _0x468ec0.PlayAnimation = function (_0x12b0fb, _0x381237, _0x46d516) {
          if (undefined === _0x46d516) {
            _0x46d516 = false;
          }
          return new Promise(function (_0x59a848) {
            _0x12b0fb.play(_0x381237);
            if (_0x46d516) {
              var _0xd07932 = _0x12b0fb.getState(_0x381237);
              if (_0xd07932) {
                _0xd07932.wrapMode = _0x41e89f.WrapMode.Loop;
              }
            }
            _0x12b0fb.once(_0x582ccd.EventType.FINISHED, function () {
              _0x59a848(true);
            });
          });
        };
        _0x9778ac(_0x32c35c, [{
          'key': 'ExtraBetAniPlaying',
          'set': function (_0x3b20b8) {
            this.m_ExtraBetAniPlaying = _0x3b20b8;
          }
        }, {
          'key': 'IsExtra',
          'get': function () {
            return this.m_isExtra;
          }
        }, {
          'key': "IsForceExtraOnEnd",
          'get': function () {
            return this.m_isForceExtraOnEnd;
          }
        }, {
          'key': 'CanExtend',
          'set': function (_0x3677d8) {
            this.m_canExtend = _0x3677d8;
          }
        }]);
        return _0x32c35c;
      }(_0xf24552);
      _0x16390a = _0x4bec9c(_0x2bf034.prototype, "m_multiExtraBetNode", [_0x1fb0fe], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5f2951 = _0x4bec9c(_0x2bf034.prototype, 'm_multiBtn', [_0x4f2879], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2eaaa0 = _0x4bec9c(_0x2bf034.prototype, 'm_multiBtn_on', [_0x32f1ed], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x5d56db = _0x4bec9c(_0x2bf034.prototype, "m_multiBtn_off", [_0x84961], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x2870ba = _0x4bec9c(_0x2bf034.prototype, "m_multiBtn_TipQuesMark", [_0x562a66], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x359f70 = _0x4bec9c(_0x2bf034.prototype, 'm_multiBtn_Tip', [_0xf0121a], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3af6e1 = _0x4bec9c(_0x2bf034.prototype, 'm_multiBtn_Description', [_0x326d41], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x15e8c5 = _0x4bec9c(_0x2bf034.prototype, "m_Txt_Extra_Bet", [_0x164df5], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "8205evKEE1KVZ3OOuJluYol", 'GameView', undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, '01bc3liMd9I+Lb1fSkrJcvE', "BigWinSpine", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "85c2b00g8xDo6j5DKQoXXM0", 'Test', undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, '84c5byXmKBEJIwVBTwOs7ly', "ButtonPro", undefined);
      var _0x11d7e5;
      var _0x5e3a26;
      var _0x1c83c3;
      !function (_0x3407eb) {
        _0x3407eb[_0x3407eb.NONE = 0x0] = 'NONE';
        _0x3407eb[_0x3407eb.COLOR = 0x1] = "COLOR";
        _0x3407eb[_0x3407eb.SPRITE = 0x2] = "SPRITE";
        _0x3407eb[_0x3407eb.SCALE = 0x4] = "SCALE";
        _0x3407eb[_0x3407eb.COLOR_SPRITE = 0x3] = "COLOR_SPRITE";
        _0x3407eb[_0x3407eb.COLOR_SCALE = 0x5] = "COLOR_SCALE";
        _0x3407eb[_0x3407eb.SPRITE_SCALE = 0x6] = "SPRITE_SCALE";
        _0x3407eb[_0x3407eb.ALL = 0x7] = "ALL";
      }(_0x11d7e5 || (_0x11d7e5 = {}));
      _0x1efa6a(_0x11d7e5);
      (function (_0x81ab96) {
        _0x81ab96.NORMAL = "normal";
        _0x81ab96.HOVER = "hover";
        _0x81ab96.PRESSED = 'pressed';
        _0x81ab96.DISABLED = "disabled";
      })(_0x5e3a26 || (_0x5e3a26 = {}));
      (function (_0x375cbc) {
        _0x375cbc.CLICK = 'click';
      })(_0x1c83c3 || (_0x1c83c3 = {}));
      var _0x4616e4;
      var _0x59bb1f;
      var _0x4632dd;
      var _0x44512b;
      var _0x15fbd8;
      var _0x512453;
      var _0x1b29c1;
      var _0x4c4669;
      var _0x5ff06c;
      var _0x23927a;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "58afbgi72RCYrg3eW8ahovc", 'CommonBuyBonusCell', undefined);
      var _0x46df95 = _0x55c899.ccclass;
      var _0x590596 = _0x55c899.property;
      _0x4616e4 = _0x46df95("CommonBuyBonusCell");
      _0x59bb1f = _0x590596({
        'type': _0x4980af,
        'tooltip': "購買文字"
      });
      _0x4632dd = _0x590596({
        'type': _0x4980af,
        'tooltip': "項目標題"
      });
      _0x44512b = _0x590596({
        'type': _0x138527,
        'tooltip': "標題圖片名稱"
      });
      _0x15fbd8 = _0x590596({
        'type': _0x3fe2b7,
        'tooltip': '金額'
      });
      _0x512453 = function (_0x4ba6e7) {
        function _0x3454ea() {
          var _0x5b175e;
          var _0xb15b2b = arguments.length;
          var _0x37bb6d = new Array(_0xb15b2b);
          for (var _0x4e01b5 = 0x0; _0x4e01b5 < _0xb15b2b; _0x4e01b5++) {
            _0x37bb6d[_0x4e01b5] = arguments[_0x4e01b5];
          }
          _0x7af141(_0x5b175e = _0x4ba6e7.call.apply(_0x4ba6e7, [this].concat(_0x37bb6d)) || this, "m_buyHintSprite", _0x1b29c1, _0x4c7417(_0x5b175e));
          _0x7af141(_0x5b175e, "m_titleSprite", _0x4c4669, _0x4c7417(_0x5b175e));
          _0x7af141(_0x5b175e, 'm_titlePicName', _0x5ff06c, _0x4c7417(_0x5b175e));
          _0x7af141(_0x5b175e, "m_priceLabel", _0x23927a, _0x4c7417(_0x5b175e));
          return _0x5b175e;
        }
        _0x5b6a43(_0x3454ea, _0x4ba6e7);
        var _0x1196e8 = _0x3454ea.prototype;
        _0x1196e8.start = function () {
          var _0x486e33 = _0x16b616.GetGameAtlas();
          if (_0x16b616.CurrLang !== _0x20a3f2.Lang.EN) {
            this.m_buyHintSprite.spriteFrame = _0x486e33.getSpriteFrame("Txt_Buy_Feature_Buy");
            this.m_titleSprite.spriteFrame = _0x486e33.getSpriteFrame(this.m_titlePicName);
          }
        };
        _0x1196e8.SetPrice = function (_0x528227) {
          this.m_priceLabel.string = _0x528227;
        };
        return _0x3454ea;
      }(_0xf24552);
      _0x1b29c1 = _0x4bec9c(_0x512453.prototype, "m_buyHintSprite", [_0x59bb1f], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4c4669 = _0x4bec9c(_0x512453.prototype, 'm_titleSprite', [_0x4632dd], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5ff06c = _0x4bec9c(_0x512453.prototype, "m_titlePicName", [_0x44512b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return '';
        }
      });
      _0x23927a = _0x4bec9c(_0x512453.prototype, 'm_priceLabel', [_0x15fbd8], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "deede8s0zBMX57ZpiWkWMfR", "CommonBuyBonus", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, 'da7972YP9VAta/rfkmC0gmE', "ColorText", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, 'ccb69RBfI5KBKNPuwywfE10', 'ColorFadingUI', undefined);
      var _0x4cb28b;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "9cd57oopkhBmZJ5o4EZK1tk", "EvtReceiver", undefined);
      var _0x152df3 = _0x55c899.ccclass;
      var _0x3d73fa = _0x152df3(_0x4cb28b = function (_0x30c179) {
        function _0x27b0a3() {
          var _0x9b1a4a;
          var _0x418283 = arguments.length;
          var _0x397070 = new Array(_0x418283);
          for (var _0x460992 = 0x0; _0x460992 < _0x418283; _0x460992++) {
            _0x397070[_0x460992] = arguments[_0x460992];
          }
          (_0x9b1a4a = _0x30c179.call.apply(_0x30c179, [this].concat(_0x397070)) || this).m_callback = undefined;
          return _0x9b1a4a;
        }
        _0x5b6a43(_0x27b0a3, _0x30c179);
        _0x27b0a3.Pack = function (_0x299b68, _0x396568) {
          _0x299b68.addComponent(_0x27b0a3);
          _0x299b68.getComponent(_0x27b0a3).SetCallback(_0x396568);
        };
        var _0x1de110 = _0x27b0a3.prototype;
        _0x1de110.EvtReciever = function (_0x3238cc) {
          _0x4f3334("AnimEvtReciever: ", _0x3238cc);
          if (this.m_callback) {
            this.m_callback(_0x3238cc);
          } else {
            _0x4f3334("callback沒有設定，無法處理event: ", _0x3238cc);
          }
        };
        _0x1de110.triggerAnimationEvent = function (_0x34ffae) {
          _0x4f3334("triggerAnimationEvent: ", _0x34ffae);
          if (this.m_callback) {
            this.m_callback(_0x34ffae);
          } else {
            _0x4f3334("callback沒有設定，無法處理event: ", _0x34ffae);
          }
        };
        _0x1de110.SetCallback = function (_0xe2dbc9) {
          this.m_callback = _0xe2dbc9;
        };
        _0x1de110.onDestroy = function () {
          this.m_callback = null;
        };
        return _0x27b0a3;
      }(_0xf24552)) || _0x4cb28b;
      var _0x517a57;
      _0x361286._RF.pop();
      _0x361286._RF.push({}, 'bc3c97zP8pM2I5NAob2S72W', "EffectView", undefined);
      var _0x5251cc = function (_0x18c761) {
        function _0x2ae830() {
          var _0x49fb96;
          (_0x49fb96 = _0x18c761.call(this) || this).m_awardBoardFile = _0x2ae830.EFFECT_ROOT + 'win/awardBoard';
          _0x49fb96.m_effectList = {};
          _0x49fb96.m_timeLineList = {};
          _0x49fb96.m_winEffCbFunc = null;
          _0x49fb96.m_currentWinEffect = null;
          _0x49fb96.m_currentWinEffectTimeline = null;
          _0x49fb96.m_awardBoard = null;
          _0x49fb96.m_awardBoardTimeline = null;
          _0x49fb96.m_txtWinValue = null;
          _0x49fb96.m_durRollMoneyTick = _0x2ae830.MONEY_ROLL_TIME;
          _0x49fb96.m_moneyRealValue = 0x0;
          _0x49fb96.m_moneyRollValue = 0x0;
          _0x49fb96.m_bgMaskNode = null;
          _0x49fb96.m_commonGetCoinCbFunc = null;
          _0x49fb96.m_commonGetCoinMidCbFunc = null;
          _0x49fb96.m_commonGetCoinEff = null;
          _0x49fb96.m_commonGetCoinTline = null;
          _0x49fb96.m_updateMoneyEff = null;
          _0x49fb96.m_updateMoneyTline = null;
          _0x49fb96.m_getCoinParticle = null;
          _0x49fb96.m_odds = [0x3, 0x5, 0xa, 0x14, 0x1e];
          _0x49fb96.m_winEffectFiles = [null, null, _0x2ae830.EFFECT_ROOT + _0x2ae830.FILE_PATH.BIG_WIN, _0x2ae830.EFFECT_ROOT + _0x2ae830.FILE_PATH.MEGA_WIN, _0x2ae830.EFFECT_ROOT + _0x2ae830.FILE_PATH.SUPER_WIN];
          _0x49fb96.m_coinEffects = [0x2, 0x3, 0x5, 0x5, 0x5];
          _0x49fb96.m_coinTimes = [0x2, 0x2, 0x5, 0x5, 0x5];
          _0x49fb96.m_soundNameByOdds = [];
          _0x49fb96.m_isAutoCheckFloat = false;
          _0x49fb96.m_rotateCoins = {};
          _0x49fb96.m_coinEffectNode = undefined;
          _0x49fb96.m_loadedSound = undefined;
          _0x49fb96.m_isLandscape = false;
          _0x49fb96.m_LandscapeRate = 0x1;
          _0x49fb96.m_winType = undefined;
          _0x49fb96.m_nowPlaySoundID = null;
          _0x49fb96.m_loadedSound = false;
          return _0x49fb96;
        }
        _0x5b6a43(_0x2ae830, _0x18c761);
        var _0x5575e0 = _0x2ae830.prototype;
        _0x5575e0.LoadSound = function () {
          this.m_loadedSound = true;
        };
        _0x5575e0.OnUpdate = function (_0x4b03db) {
          this.RollWinMoney(_0x4b03db);
        };
        _0x5575e0.ShowWinAndCoinEffect = function (_0x26f799, _0x5568de, _0x5322d6) {
          if (undefined === _0x5322d6) {
            _0x5322d6 = null;
          }
          _0x5322d6 = _0x5322d6 || null;
          var _0x5b9fc0 = _0x431495.GetManagerId(_0x5322d6);
          this.ShowWinEffect(_0x26f799, _0x5b9fc0);
          if (!(undefined !== _0x26f799.playCoinAtWinEffect && true !== _0x26f799.playCoinAtWinEffect)) {
            this.playCoinEffect(_0x5568de, _0x5b9fc0);
          }
          _0x431495.StartLoad(_0x5b9fc0);
        };
        _0x5575e0.ShowWinEffect = function (_0x234c14, _0x507f1a) {
          var _0x1b3473 = this;
          if (undefined === _0x507f1a) {
            _0x507f1a = -0x1;
          }
          var _0x434831 = _0x234c14.effectFile;
          var _0x2d0659 = _0x234c14.winValue;
          var _0x47822d = _0x234c14.cbFunc;
          var _0x79dae5 = _0x234c14.yPos;
          var _0x142c73 = _0x234c14.deltaY;
          var _0x465222 = _0x234c14.cbFuncBtoM;
          var _0x1d2511 = _0x234c14.cbFuncMtoS;
          var _0x16dda0 = _0x234c14.cbFuncPlaying;
          var _0x37b2f7 = _0x234c14.isLoop || false;
          var _0x2c9015 = _0x234c14.rollTime;
          if (null != _0x2d0659) {
            var _0x5d43b3 = function () {
              if (_0x1b3473.m_bgMaskNode) {
                _0x1b3473.m_bgMaskNode.active = true;
              }
              _0x4f3334("LoadPrefabManager CB", _0x2d0659);
              _0x79dae5 = null != _0x79dae5 && _0x79dae5 || _0x2ae830.DEFAULT_Y;
              _0x1b3473.m_effectList[_0x434831].setPosition(_0x1923c2(_0x2ae830.DesignSize.width / 0x2, _0x79dae5));
              _0x1b3473.m_effectList[_0x434831].active = true;
              _0x1b3473.m_timeLineList[_0x434831].play(_0x2ae830.ANI_LABEL.ACT);
              _0x1b3473.m_currentWinEffect = _0x1b3473.m_effectList[_0x434831];
              _0x1b3473.m_currentWinEffectTimeline = _0x1b3473.m_timeLineList[_0x434831];
              _0x1b3473.m_currentWinEffectTimeline.name = _0x434831;
              _0x142c73 = _0x434831 == _0x2ae830.FILE_PATH.JACKPOT ? 0xb4 : null != _0x142c73 ? _0x142c73 : 0xe6;
              _0x1b3473.m_awardBoard.setPosition(_0x1923c2(_0x2ae830.DesignSize.width / 0x2, _0x79dae5 - _0x142c73));
              _0x1b3473.m_awardBoard.active = true;
              _0x1b3473.m_awardBoardTimeline.play(_0x2ae830.ANI_LABEL.ACT);
              _0x1b3473.SetWinValue(_0x2d0659, _0x2c9015);
              if (!(null == _0x16dda0)) {
                _0x16dda0();
              }
            };
            var _0x4ae9bb = _0x507f1a;
            if (-0x1 == _0x507f1a) {
              _0x4ae9bb = _0x431495.GetManagerId(_0x5d43b3);
            }
            this.m_winEffCbFunc = _0x47822d;
            if (null == this.m_effectList[_0x434831]) {
              _0x431495.AddLoad(_0x4ae9bb);
              _0x20a3f2.GameBundle.load(_0x434831, function (_0x1ff0a8, _0x56d853) {
                if (_0x1ff0a8) {
                  _0x312ceb(_0x1ff0a8.message || _0x1ff0a8);
                } else {
                  var _0x371b2a = _0x17cf83(_0x56d853);
                  _0x371b2a.active = false;
                  _0x1b3473.addChild(_0x371b2a);
                  _0x4bcdb4.SetZIndex(_0x371b2a, _0x2ae830.EFF_ZORDER.WIN_EFFECT);
                  var _0x4e9f9d = _0x371b2a.getComponent(_0x582ccd);
                  _0x3d73fa.Pack(_0x371b2a, function (_0x113cd5) {
                    if (_0x113cd5 == _0x2ae830.ANI_FRAME_EVENT.ENDING) {
                      if (_0x1b3473.m_awardBoard && _0x1b3473.m_awardBoard.active) {
                        _0x1b3473.m_awardBoardTimeline.play(_0x2ae830.ANI_LABEL.ENDING);
                      }
                    } else {
                      if (_0x113cd5 == _0x2ae830.ANI_FRAME_EVENT.LOOP) {
                        if (_0x37b2f7) {
                          _0x4e9f9d.play(_0x2ae830.ANI_LABEL.LOOP);
                          _0x4e9f9d.getState(_0x2ae830.ANI_LABEL.LOOP).wrapMode = _0x41e89f.WrapMode.Loop;
                        }
                      } else if (_0x113cd5 == _0x2ae830.ANI_FRAME_EVENT.B_TO_M) {
                        if (_0x1b3473.m_awardBoard && _0x1b3473.m_awardBoard.active) {
                          _0x5b954c(_0x1b3473.m_txtWinValue).by(0.25, {
                            'scale': _0x1923c2(1.5, 1.5, 1.5)
                          }).by(0.1, {
                            'scale': _0x1923c2(0.9, 0.9, 0.9)
                          }).start();
                        }
                        if (_0x465222) {
                          _0x465222();
                        }
                      } else if (_0x113cd5 == _0x2ae830.ANI_FRAME_EVENT.M_TO_S) {
                        if (_0x1b3473.m_awardBoard && _0x1b3473.m_awardBoard.active) {
                          _0x5b954c(_0x1b3473.m_txtWinValue).by(0.25, {
                            'scale': _0x1923c2(1.5, 1.5, 1.5)
                          }).by(0.1, {
                            'scale': _0x1923c2(0.9, 0.9, 0.9)
                          }).start();
                        }
                        if (!(null == _0x1d2511)) {
                          _0x1d2511();
                        }
                      } else if (_0x113cd5 == _0x2ae830.ANI_FRAME_EVENT.END) {
                        _0x4f3334('ANI_FRAME_EVENT.END');
                        _0x1b3473.OnAnimationEnd();
                        if (_0x1b3473.m_winEffCbFunc) {
                          _0x1b3473.m_winEffCbFunc();
                        }
                      }
                    }
                  });
                  _0x371b2a.active = false;
                  _0x1b3473.m_effectList[_0x434831] = _0x371b2a;
                  _0x1b3473.m_timeLineList[_0x434831] = _0x4e9f9d;
                  _0x431495.OnLoaded(_0x4ae9bb);
                }
              });
              if (null == this.m_awardBoard) {
                _0x431495.AddLoad(_0x4ae9bb);
                _0x20a3f2.GameBundle.load(this.m_awardBoardFile, function (_0x1068a9, _0x43df60) {
                  if (_0x1068a9) {
                    _0x312ceb(_0x1068a9.message || _0x1068a9);
                  } else {
                    _0x1b3473.m_awardBoard = _0x17cf83(_0x43df60);
                    _0x1b3473.addChild(_0x1b3473.m_awardBoard);
                    _0x4bcdb4.SetZIndex(_0x1b3473.m_awardBoard, _0x2ae830.EFF_ZORDER.AWARD_BOARD);
                    _0x1b3473.m_awardBoard.active = false;
                    _0x1b3473.m_awardBoardTimeline = _0x1b3473.m_awardBoard.getComponent(_0x582ccd);
                    _0x1b3473.m_txtWinValue = _0x1b3473.m_awardBoard.getChildByName("win_value_label");
                    _0x431495.OnLoaded(_0x4ae9bb);
                  }
                });
              }
              if (-0x1 == _0x507f1a) {
                _0x431495.StartLoad(_0x4ae9bb);
              } else {
                _0x431495.AddOnLoadedCallback(_0x4ae9bb, _0x5d43b3);
              }
            } else if (-0x1 == _0x507f1a) {
              _0x5d43b3();
            } else {
              _0x431495.AddOnLoadedCallback(_0x4ae9bb, _0x5d43b3);
            }
          } else if (this.m_awardBoard) {
            this.m_awardBoard.active = false;
            this.m_awardBoardTimeline.stop();
          }
        };
        _0x5575e0.WinEffect = function () {
          if (this.m_currentWinEffectTimeline) {
            this.m_currentWinEffectTimeline.play(_0x2ae830.ANI_LABEL.ENDING, false);
          }
        };
        _0x5575e0.SetWinValue = function (_0x22eec6, _0x53df15, _0x6f943) {
          if (undefined === _0x53df15) {
            _0x53df15 = null;
          }
          if (undefined === _0x6f943) {
            _0x6f943 = 0x0;
          }
          this.m_moneyRealValue = _0x4bcdb4.strip(_0x22eec6);
          this.m_moneyRollValue = _0x6f943;
          _0x53df15 = null == _0x53df15 && _0x2ae830.MONEY_ROLL_TIME || _0x53df15;
          this.m_durRollMoneyTick = _0x4bcdb4.strip(_0x53df15);
        };
        _0x5575e0.RollWinMoney = function (_0x4c01f6) {
          this.m_moneyRealValue = _0x4bcdb4.strip(this.m_moneyRealValue);
          this.m_moneyRollValue = _0x4bcdb4.strip(this.m_moneyRollValue);
          if (this.m_moneyRollValue < this.m_moneyRealValue) {
            var _0x5af81c = _0x4bcdb4.divide(this.m_durRollMoneyTick, _0x4bcdb4.strip(_0x4c01f6));
            var _0x7e8463 = _0x4bcdb4.divide(_0x4bcdb4.strip(this.m_moneyRealValue - this.m_moneyRollValue), _0x5af81c);
            var _0x36d08e = _0x4bcdb4.FORMAT_NUMBER_TYPE.DEFINE_DOT;
            if (this.m_isAutoCheckFloat) {
              _0x36d08e = this.m_moneyRealValue.toString().indexOf('.') > -0x1 ? _0x4bcdb4.FORMAT_NUMBER_TYPE.PERMANENT_DOT : _0x4bcdb4.FORMAT_NUMBER_TYPE.NONE_DOT;
            }
            this.m_moneyRollValue = _0x4bcdb4.strip(this.m_moneyRollValue + _0x7e8463);
            if (this.m_moneyRollValue > this.m_moneyRealValue) {
              this.m_moneyRollValue = this.m_moneyRealValue;
            }
            this.SetLabelString(this.m_txtWinValue, this.m_moneyRollValue, _0x36d08e);
            this.m_durRollMoneyTick = _0x4bcdb4.strip(this.m_durRollMoneyTick - _0x4c01f6);
          }
        };
        _0x5575e0.SetLabelString = function (_0xa65596, _0x3f7958, _0x5a318b) {
          if (undefined === _0x5a318b) {
            _0x5a318b = null;
          }
          var _0x158f0e = _0xa65596.getComponent(_0x3fe2b7);
          if (null != _0x158f0e && null != _0x158f0e) {
            if (null == _0x5a318b || null == _0x5a318b) {
              _0x158f0e.string = _0x3f7958.toString();
            } else {
              var _0x5f3539;
              if ("number" == typeof _0x3f7958) {
                _0x5f3539 = _0x3f7958;
              } else {
                var _0x1e2df6 = _0x3f7958.replace(/,/g, '');
                _0x5f3539 = isNaN(Number(_0x1e2df6)) ? 0x0 : Number(_0x1e2df6);
              }
              _0x158f0e.string = _0x4bcdb4.FormatNumberThousands(_0x5f3539, _0x5a318b);
            }
            _0x4bcdb4.SetFont(_0x158f0e);
          } else {
            _0x4f3334("Warning!!!!!!!!!! SetLabelString: ", _0xa65596);
          }
        };
        _0x5575e0.SetWinMoneyToMax = function () {};
        _0x5575e0.IsRollMoneyEnd = function () {
          return this.m_moneyRollValue == this.m_moneyRealValue;
        };
        _0x5575e0.StopAnimation = function (_0x17e54a) {
          if (this.m_currentWinEffectTimeline) {
            this.m_currentWinEffectTimeline.stop();
          }
          if (this.m_awardBoard) {
            this.m_awardBoard.active = false;
            this.m_awardBoardTimeline.stop();
          }
          if (0x1 != _0x17e54a && this.m_winEffCbFunc) {
            this.m_winEffCbFunc();
          }
          this.m_winEffCbFunc = null;
          this.OnAnimationEnd();
        };
        _0x5575e0.OnAnimationEnd = function () {
          if (this.m_currentWinEffect) {
            this.m_currentWinEffect.active = false;
          }
          if (this.m_bgMaskNode) {
            this.m_bgMaskNode.active = false;
          }
          this.m_moneyRealValue = 0x0;
          this.m_moneyRollValue = 0x0;
        };
        _0x5575e0.playCoinEffect = function (_0x336693, _0x50b46e) {
          var _0x5c5406 = this;
          if (undefined === _0x50b46e) {
            _0x50b46e = -0x1;
          }
          if (_0x20a3f2.CommonBundle) {
            var _0x5bf9c8 = _0x336693.level;
            var _0x3a597f = _0x336693.position;
            var _0x472558 = _0x336693.time;
            if (null == _0x472558) {
              _0x472558 = 0x0;
            }
            var _0x3a013f = _0x336693.zOrder;
            if (null == _0x3a013f) {
              _0x3a013f = 0x0;
            }
            var _0x4f3c26 = _0x336693.parent;
            this.stopCoinEffectImmly();
            var _0x241888 = _0x2ae830.COIN_EFFECT_LIST[_0x5bf9c8];
            if (_0x241888 = _0x4bcdb4.GetFilePath(_0x241888)) {
              _0x4f3334("~~~~~~~~~~~~~~~~~~~~~~", _0x336693, _0x472558, _0x3a013f);
              var _0x33065d = function () {
                _0x5c5406.m_coinEffectNode.setPosition(_0x1923c2(_0x3a597f.x, _0x3a597f.y));
                if (null == _0x4f3c26 || null == _0x4f3c26) {
                  _0x5c5406.addChild(_0x5c5406.m_coinEffectNode);
                  _0x4bcdb4.SetZIndex(_0x5c5406.m_coinEffectNode, 0x0);
                } else {
                  _0x4f3c26.addChild(_0x5c5406.m_coinEffectNode);
                  _0x4bcdb4.SetZIndex(_0x5c5406.m_coinEffectNode, _0x3a013f);
                }
                if (0x0 != _0x472558) {
                  _0x5b954c(_0x5c5406).delay(_0x472558).call(function () {
                    _0x5c5406.stopCoinEffect();
                  }).start();
                }
              };
              if (-0x1 != _0x50b46e) {
                _0x431495.AddOnLoadedCallback(_0x50b46e, _0x33065d);
                _0x431495.AddLoad(_0x50b46e);
              }
              _0x20a3f2.CommonBundle.load(_0x241888, function (_0x3c2f10, _0x40a924) {
                _0x4f3334("LoadRes ", _0x241888);
                if (_0x3c2f10) {
                  _0x312ceb(_0x3c2f10.message || _0x3c2f10);
                } else {
                  _0x5c5406.m_coinEffectNode = _0x17cf83(_0x40a924);
                  if (_0x5c5406.m_coinEffectNode) {
                    if (-0x1 == _0x50b46e) {
                      _0x33065d();
                    } else {
                      _0x431495.OnLoaded(_0x50b46e);
                    }
                  } else {
                    _0x4f3334("SlotBottomBarView.playCoinEffect m_coinEffect is null");
                  }
                }
              });
            }
          }
        };
        _0x5575e0.stopCoinEffectImmly = function () {
          if (null != this.m_coinEffectNode && this.m_coinEffectNode.removeFromParent) {
            this.m_coinEffectNode.removeFromParent();
            this.m_coinEffectNode = null;
          }
        };
        _0x5575e0.stopCoinEffect = function () {
          if (null != this.m_coinEffectNode && this.m_coinEffectNode) {
            var _0x1b76b6 = this.m_coinEffectNode.getChildByName("Particle_1").getComponent(_0x44b831);
            var _0x1d047f = this.m_coinEffectNode.getChildByName("Particle_2").getComponent(_0x44b831);
            if (_0x1b76b6) {
              _0x1b76b6.stopSystem();
            }
            if (_0x1d047f) {
              _0x1d047f.stopSystem();
            }
          }
        };
        _0x5575e0.ShowCommonEffect = function (_0x32ca97, _0x3ddd1d, _0x971662, _0x4f9459) {
          if (undefined === _0x971662) {
            _0x971662 = null;
          }
          if (undefined === _0x4f9459) {
            _0x4f9459 = null;
          }
          _0x971662 = _0x971662 || {};
          _0x4f9459 = _0x4f9459 || {};
          var _0x3f3822 = new _0x49e376(_0x2ae830.DesignSize.width / 0x2, _0x2ae830.DesignSize.height);
          var _0x290a72 = new _0x49e376(_0x2ae830.DesignSize.width / 0x2 - 0xa, 0x91);
          var _0x3d437c = undefined;
          var _0x207e6d = _0x32ca97 / _0x3ddd1d;
          if (_0x35e83c) {
            _0x32ca97 = _0x35e83c.GetDisplayValue(_0x32ca97);
          }
          for (var _0x5be492 = this.m_odds.length - 0x1; _0x5be492 >= 0x0; _0x5be492--) {
            if (_0x207e6d >= this.m_odds[_0x5be492]) {
              _0x4f9459.level = this.m_coinEffects[_0x5be492];
              if (0x5 == this.m_coinEffects[_0x5be492]) {
                _0x4f9459.position = _0x4f9459.position ? _0x4f9459.position : _0x3f3822;
              } else {
                _0x4f9459.position = _0x4f9459.smallPosition ? _0x4f9459.smallPosition : _0x4f9459.position ? _0x4f9459.position : _0x290a72;
              }
              if (null == _0x4f9459.time || _0x4f9459.time <= 0x0) {
                _0x4f9459.time = this.m_coinTimes[_0x5be492];
              }
              if (0x5 == this.m_coinEffects[_0x5be492]) {
                _0x971662.effectFile = this.m_winEffectFiles[_0x5be492];
                _0x971662.winValue = _0x32ca97;
                this.SetWinType(_0x5be492);
                this.ShowWinAndCoinEffect(_0x971662, _0x4f9459);
              } else {
                this.playCoinEffect(_0x4f9459);
              }
              _0x3d437c = this.m_soundNameByOdds[_0x5be492];
              break;
            }
          }
          if (null != _0x3d437c) {
            this.m_nowPlaySoundID = _0x55475f.Play(_0x3d437c, false);
          }
          if (null == _0x4f9459.time) {
            _0x4f9459.time = 0x0;
          }
          return _0x4f9459.time;
        };
        _0x5575e0.SkipEffect = function () {
          this.stopCoinEffect();
          _0x14efe9.instance.ActionManager.removeAllActionsFromTarget(this);
          if (this.m_currentWinEffectTimeline) {
            var _0x6467f2 = this.m_currentWinEffectTimeline.name;
            var _0x2e3ff1 = _0x4bcdb4.FORMAT_NUMBER_TYPE.DEFINE_DOT;
            if (!(_0x6467f2 != _0x2ae830.FILE_PATH.BIG_WIN && _0x6467f2 != _0x2ae830.FILE_PATH.MEGA_WIN && _0x6467f2 != _0x2ae830.FILE_PATH.SUPER_WIN)) {
              this.m_moneyRollValue = _0x4bcdb4.strip(this.m_moneyRollValue);
              this.m_moneyRealValue = _0x4bcdb4.strip(this.m_moneyRealValue);
              if (this.m_moneyRollValue == this.m_moneyRealValue) {
                this.m_awardBoardTimeline.play(_0x2ae830.ANI_LABEL.ENDING);
                this.m_currentWinEffectTimeline.setCurrentTime(0x5);
              } else {
                if (this.m_isAutoCheckFloat) {
                  _0x2e3ff1 = this.m_moneyRealValue.toString().indexOf('.') > -0x1 ? _0x4bcdb4.FORMAT_NUMBER_TYPE.PERMANENT_DOT : _0x4bcdb4.FORMAT_NUMBER_TYPE.NONE_DOT;
                }
                this.SetLabelString(this.m_txtWinValue, this.m_moneyRealValue, _0x2e3ff1);
                this.m_currentWinEffectTimeline.setCurrentTime(3.8);
              }
              this.m_currentWinEffectTimeline = null;
            }
            this.m_moneyRollValue = this.m_moneyRealValue;
          }
        };
        _0x5575e0.SkipEffectSound = function () {
          if (this.m_nowPlaySoundID) {
            _0x55475f.Stop(this.m_nowPlaySoundID);
            this.m_nowPlaySoundID = null;
          }
        };
        _0x5575e0.SetAutoCheckFloat = function (_0x501e4b) {
          this.m_isAutoCheckFloat = _0x501e4b;
        };
        _0x5575e0.SetOdds = function (_0x4be04b) {
          this.m_odds = _0x4be04b;
        };
        _0x5575e0.SetWinEffectFiles = function (_0x524ed6) {
          this.m_winEffectFiles = _0x524ed6;
        };
        _0x5575e0.SetAwardBoardFile = function (_0x351947) {
          this.m_awardBoardFile = _0x351947;
        };
        _0x5575e0.SetEffectLevels = function (_0x376b1f) {
          this.m_coinEffects = _0x376b1f;
        };
        _0x5575e0.SetEffectTimes = function (_0x397723) {
          this.m_coinTimes = _0x397723;
        };
        _0x5575e0.SetSoundNameByOdds = function (_0x1c2274) {
          this.m_soundNameByOdds = _0x1c2274;
        };
        _0x5575e0.SetBGMaskNode = function (_0x5e4873) {
          if (null != _0x5e4873) {
            this.m_bgMaskNode = _0x5e4873;
          }
        };
        _0x5575e0.SetWinTextFontSize = function (_0x4b58e8) {
          if (this.m_txtWinValue) {
            this.m_txtWinValue.getComponent(_0x3fe2b7).fontSize = _0x4b58e8;
          }
        };
        _0x5575e0.SetWinType = function (_0x103f8b) {
          this.m_winType = _0x103f8b;
        };
        _0x9778ac(_0x2ae830, [{
          'key': "CoinEffectNode",
          'set': function (_0x1def8e) {
            this.m_coinEffectNode = _0x1def8e;
          }
        }]);
        return _0x2ae830;
      }(_0x2bf5c4);
      _0x5251cc.DesignSize = {
        'width': 0x470,
        'height': 0x280
      };
      _0x5251cc.SOUND_FILE = {
        'COMMON_SUPER_WIN': null,
        'COMMON_MEGA_WIN': null,
        'COMMON_COIN_SMALL': null,
        'COMMON_COIN_MEDIUM': null,
        'COMMON_BIG_WIN': null
      };
      _0x5251cc.EFFECT_ROOT = 'Astt/%s/effect/GameCommonEffect/';
      _0x5251cc.FILE_PATH = {
        'BIG_WIN': "win/big_anim",
        'MEGA_WIN': "win/mega_anim",
        'SUPER_WIN': 'win/super_anim',
        'JACKPOT': "win/effect_Jackpot",
        'BIG_TO_MEGA_WIN': "win/bigToMega_anim",
        'BIG_TO_SUPER_WIN': "win/bigToSuper_anim",
        'FIVE_OF_A_KIND': "win/5ofa_anim"
      };
      _0x517a57 = {
        [_0x5251cc.FILE_PATH.BIG_WIN]: "Common_big_win",
        [_0x5251cc.FILE_PATH.MEGA_WIN]: "Common_mega_win",
        [_0x5251cc.FILE_PATH.SUPER_WIN]: "Common_super_win",
        [_0x5251cc.FILE_PATH.JACKPOT]: 'Common_JP_win',
        [_0x5251cc.FILE_PATH.BIG_TO_MEGA_WIN]: "Common_big_win",
        [_0x5251cc.FILE_PATH.BIG_TO_SUPER_WIN]: 'Common_big_win',
        [_0x5251cc.FILE_PATH.FIVE_OF_A_KIND]: "Common_big_win"
      };
      _0x5251cc.WIN_EFFECT_SOUND_NAME = _0x517a57;
      _0x5251cc.EffectViewUIName = _0x5527ae({
        'TXT_WIN_MONEY': "label_final_value",
        'PARTICLE': "Particle_"
      });
      _0x5251cc.DEFAULT_Y = 0x190;
      _0x5251cc.PARTICLE_AMOUNT_MAX = 0x2;
      _0x5251cc.MONEY_ROLL_TIME = 0x3;
      _0x5251cc.UPDATE_MONEY_CSB = _0x5251cc.EFFECT_ROOT + "common_get_coin/Node_GetCoin01.csb";
      _0x5251cc.COMMON_GET_COIN_CSB = _0x5251cc.EFFECT_ROOT + "common_get_coin/Node_GetCoin02.csb";
      _0x5251cc.GET_COIN_PARTICLE_CSB = _0x5251cc.EFFECT_ROOT + "common_get_coin/Particle/_V3_GetCoin02.plist";
      _0x5251cc.ROTATE_COIN_CSB = _0x5251cc.EFFECT_ROOT + "common_get_coin/Node_CoinRotation01.csb";
      _0x5251cc.TRIAL_COIN_CSB = _0x5251cc.EFFECT_ROOT + "common_get_coin/Node_GetTrialCoin.csb";
      _0x5251cc.COIN_APPEAR_PARTICLE_CSB = _0x5251cc.EFFECT_ROOT + 'common_get_coin/Particle/New_CoinShine03.plist';
      _0x5251cc.COMMON_COIN_AMOUNT = 0x8;
      _0x5251cc.ANI_LABEL = {
        'ACT': "main",
        'LOOP': 'loop',
        'ENDING': 'ending'
      };
      _0x5251cc.ANI_FRAME_EVENT = {
        'MID': "AniMid",
        'B_TO_M': "AniBtoM",
        'M_TO_S': "AniMtoS",
        'ENDING': "AniEnding",
        'END': 'AniEnd',
        'LOOP': "AniLoop"
      };
      _0x5251cc.EFF_ZORDER = {
        'COIN_FALL': 0x1,
        'WIN_EFFECT': 0x2,
        'AWARD_BOARD': 0x3,
        'COMMON_GET_COIN': 0x4,
        'GET_TRIAL_COIN': 0x5
      };
      _0x5251cc.COIN_EFFECT_LIST = {
        0x1: _0x5251cc.EFFECT_ROOT + 'coin/1_SmallGoldCoinFX_1',
        0x2: _0x5251cc.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_2",
        0x3: _0x5251cc.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_3",
        0x4: _0x5251cc.EFFECT_ROOT + "coin/2_BigGoldCoinFX_1",
        0x5: _0x5251cc.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_1",
        0x6: _0x5251cc.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_2",
        0x7: _0x5251cc.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_3"
      };
      _0x5251cc.WIN_TYPE = {
        'BIG': 0x2,
        'MEGA': 0x3,
        'SUPER': 0x4
      };
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "5cf68x6BTZHP5QWXU3HRb/c", "FeaturePageComponent", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "e33faPhWqxMHa92Db40WLqj", "LabelSpacingX", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "a6f15DRaTNJEaqvyk6QuIo3", "LangImg", undefined);
      var _0x195967;
      !function (_0x326e94) {
        _0x326e94[_0x326e94.PNG = 0x0] = "PNG";
        _0x326e94[_0x326e94.JPG = 0x1] = "JPG";
      }(_0x195967 || (_0x195967 = {}));
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "3638c7rYSpEjZ7x8wtqusdg", "RenderDataBump", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "75a969XvAFPfax+l1fDcqo9", 'ScrollEventHandler', undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "eb577rwRR5ASa6OivNuPgEY", 'SeriesComponent', undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "18f47v83XtI64h+ISwRgq3A", "BoneFollow", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "44834DdFVNM2reoglp7HL82", "NewBoneFollow", undefined);
      var _0x5ec815;
      !function (_0x408e5b) {
        _0x408e5b[_0x408e5b["default"] = 0x1] = "default";
      }(_0x5ec815 || (_0x5ec815 = {}));
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "2da2cEqApNLm7hZxNo+Lfkx", "NewSlotColorFollow", undefined);
      var _0x1ddbca;
      !function (_0x3c624b) {
        _0x3c624b[_0x3c624b["default"] = 0x1] = "default";
      }(_0x1ddbca || (_0x1ddbca = {}));
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "866f1RjwMhFfapt6JLtipxM", 'SkeletonSync', undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "e2171n/i+xGsoWeQMXewobE", "SlotActivator", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, 'e23desmKVBLjKgDg5KLcySp', "SlotColorFollow", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "ff032nME8lBJKBpMlK8O/1z", "SlotCulling", undefined);
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "f8b5e4BLTJNX7FPcFOEaBkq", 'ZipBundleLoader', undefined);
      var _0x1bea3b = new Map();
      var _0x37a500 = new Map();
      var _0x47514d = new Map();
      var _0x3bd7de = function () {
        function _0x279961() {
          this.loadedZipNames = new Array();
        }
        var _0x306f39 = _0x279961.prototype;
        _0x306f39.downloadZip = function (_0x1c1d58, _0x150a3c) {
          return new Promise(function (_0x3540e3) {
            var _0x15315f = _0x1c1d58.match(/[^/]+$/);
            if (null !== _0x15315f) {
              var _0x352710 = '' + _0x15315f[0x0] + _0x150a3c + '.zip';
              _0x10faa1.downloader.downloadFile(_0x1c1d58 + '/' + _0x352710, {
                'xhrResponseType': "arraybuffer"
              }, null, function (_0x28fe96, _0x58aee7) {
                _0x3540e3(_0x58aee7);
              });
            } else {
              _0x3540e3(null);
            }
          });
        };
        _0x306f39.loadZip = function () {
          var _0x70ad1c = _0x2b8ecf(_0x17c453().mark(function _0xd69650(_0x20277, _0x5b925a) {
            var _0x8fbd1d;
            var _0x20971d;
            var _0x398696;
            return _0x17c453().wrap(function (_0x3c4aee) {
              for (;;) {
                switch (_0x3c4aee.prev = _0x3c4aee.next) {
                  case 0x0:
                    _0x8fbd1d = _0x5b925a ? '.' + _0x5b925a : '';
                    _0x3c4aee.next = 0x3;
                    return this.downloadZip(_0x20277, _0x8fbd1d);
                  case 0x3:
                    if (null !== (_0x20971d = _0x3c4aee.sent)) {
                      _0x398696 = _0x20277.replace(/(.*?)\/assets\//, "assets/");
                      globalThis.fflate.unzip(new Uint8Array(_0x20971d), function (_0x27b0b8, _0x5f4be8) {
                        if (_0x27b0b8) {
                          console.warn("Unzip failed:", _0x27b0b8.message);
                        } else {
                          Object.keys(_0x5f4be8).forEach(function (_0x1b2c5f) {
                            _0x1bea3b.set(_0x20277 + '/' + _0x1b2c5f, _0x5f4be8[_0x1b2c5f]);
                            _0x1bea3b.set(_0x398696 + '/' + _0x1b2c5f, _0x5f4be8[_0x1b2c5f]);
                          });
                        }
                      });
                    }
                  case 0x5:
                  case "end":
                    return _0x3c4aee.stop();
                }
              }
            }, _0xd69650, this);
          }));
          return function (_0x49aa25, _0x161252) {
            return _0x70ad1c.apply(this, arguments);
          };
        }();
        _0x306f39.init = function () {
          if (globalThis.fflate) {
            var _0x459788 = Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, "response");
            Object.defineProperty(XMLHttpRequest.prototype, 'response', {
              'get': function () {
                return this.ZipCacheUrl ? _0x37a500.get(this.ZipCacheUrl) : _0x459788.get.call(this);
              },
              'set': function (_0x592f4b) {},
              'configurable': true
            });
            var _0x4f4b33 = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function (_0x59a496, _0x223fb0, _0x107f34, _0x30ef18, _0xc3cde) {
              function _0x213d62() {
                var _0x42c82a = this.status >= 0xc8 && this.status < 0x12c || 0x130 == this.status;
                if (this.readyState == XMLHttpRequest.DONE && !_0x42c82a && 0x194 != this.status && _0x223fb0.includes('http')) {
                  _0x2740fc(0x2bd, this.status);
                  _0x2740fc(0x2be, _0x223fb0);
                }
                this.removeEventListener('load', _0x213d62);
              }
              if (_0x1bea3b.has(_0x223fb0)) {
                this.ZipCacheUrl = _0x223fb0;
              }
              this.addEventListener('load', _0x213d62.bind(this));
              return _0x4f4b33.apply(this, arguments);
            };
            var _0x3afa05 = XMLHttpRequest.prototype.send;
            XMLHttpRequest.prototype.send = _0x2b8ecf(_0x17c453().mark(function _0x25278f(_0x55d1e0) {
              var _0x5003e8;
              var _0x36ddfc;
              var _0xbd2444;
              var _0x13940e;
              var _0x1e8a54;
              var _0x120f5b;
              var _0xe80ccd;
              var _0x4fedf3;
              return _0x17c453().wrap(function (_0x46292a) {
                for (;;) {
                  switch (_0x46292a.prev = _0x46292a.next) {
                    case 0x0:
                      if (!this.ZipCacheUrl) {
                        _0x46292a.next = 0x1a;
                        break;
                      }
                      if (_0x37a500.has(this.ZipCacheUrl)) {
                        _0x46292a.next = 0x18;
                        break;
                      }
                      _0x5003e8 = this.responseType;
                      _0x36ddfc = _0x1bea3b.get(this.ZipCacheUrl);
                      _0xbd2444 = null;
                      _0x46292a.t0 = _0x5003e8;
                      _0x46292a.next = 'arraybuffer' === _0x46292a.t0 ? 0x8 : "json" === _0x46292a.t0 ? 0xa : 'text' === _0x46292a.t0 ? 0xe : 0x11;
                      break;
                    case 0x8:
                      _0xbd2444 = _0x36ddfc.buffer ? _0x36ddfc.buffer : _0x36ddfc;
                      return _0x46292a.abrupt("break", 0x12);
                    case 0xa:
                      _0x13940e = new TextDecoder();
                      _0x1e8a54 = _0x13940e.decode(_0x36ddfc);
                      _0xbd2444 = JSON.parse(_0x1e8a54);
                      return _0x46292a.abrupt("break", 0x12);
                    case 0xe:
                      _0x120f5b = new TextDecoder();
                      _0xbd2444 = _0x120f5b.decode(_0x36ddfc);
                      return _0x46292a.abrupt("break", 0x12);
                    case 0x11:
                      console.error("Unknown type in zipCache:", _0x5003e8);
                    case 0x12:
                      if (_0xe80ccd = _0x47514d.get(this.ZipCacheUrl)) {
                        _0x37a500['delete'](this.ZipCacheUrl + "@version" + _0xe80ccd);
                        _0x47514d["delete"](this.ZipCacheUrl);
                      }
                      _0x4fedf3 = performance.now();
                      _0x47514d.set(this.ZipCacheUrl, _0x4fedf3);
                      this.ZipCacheUrl = this.ZipCacheUrl + "@version" + _0x4fedf3;
                      _0x37a500.set(this.ZipCacheUrl, _0xbd2444);
                    case 0x18:
                      this.onload();
                      return _0x46292a.abrupt('return');
                    case 0x1a:
                      return _0x46292a.abrupt("return", _0x3afa05.apply(this, arguments));
                    case 0x1b:
                    case "end":
                      return _0x46292a.stop();
                  }
                }
              }, _0x25278f, this);
            }));
          } else {
            console.error("fflate is not found.");
          }
        };
        return _0x279961;
      }();
      function _0x2740fc(_0x27a7fb, _0x871147) {
        if (!_0x1f5e41.isNative) {
          var _0x293496 = "https://" + window.location.host + '/';
          if (-0x1 == _0x293496.indexOf("localhost") && 0x1 != /^http(s)?:\/\/([0-9]{1,3}\.){3}[0-9]{1,3}(:[0-9]+)?\/.*?$/.test(_0x293496)) {
            var _0x69c14b = 0x0;
            switch (_0x1f5e41.browserType) {
              case _0x1f5e41.BrowserType.CHROME:
                _0x69c14b = 0x1;
                break;
              case _0x1f5e41.BrowserType.SAFARI:
                _0x69c14b = 0x2;
                break;
              case _0x1f5e41.BrowserType.IE:
                _0x69c14b = 0x3;
                break;
              case _0x1f5e41.BrowserType.UC:
                _0x69c14b = 0x4;
                break;
              case _0x1f5e41.BrowserType.QQ:
              case _0x1f5e41.BrowserType.MOBILE_QQ:
                _0x69c14b = 0x5;
                break;
              case _0x1f5e41.BrowserType.FIREFOX:
                _0x69c14b = 0x6;
            }
            var _0x42c650 = 0x0;
            switch (_0x1f5e41.os) {
              case _0x1f5e41.OS.ANDROID:
                _0x42c650 = 0x1;
                break;
              case _0x1f5e41.OS.IOS:
                _0x42c650 = 0x2;
                break;
              case _0x1f5e41.OS.WINDOWS:
                _0x42c650 = 0x3;
                break;
              default:
                _0x42c650 = 0x0;
            }
            var _0x4e0b55 = _0x5a2a73('apiId') || '-1';
            var _0x41eaac = _0x5a2a73('ssoKey') || '1';
            var _0x58c6c8 = _0x5a2a73('gameID') || '-1';
            var _0x27826f = "https://" + (_0x5a2a73('domain_platform') || _0x5a2a73('gs') || 'gnidnawcs').split('').reverse().join('') + '/webservice/event/assetUpdate?';
            _0xe750e0(_0x27826f += "?AccountID=-1&GameID=" + _0x58c6c8 + "&GameVersion=" + new Date().getTime() + "&EventID=" + _0x27a7fb + '&EventValue=' + _0x871147 + "&BrowserSystem=" + _0x69c14b + '&DeviceSystem=' + _0x42c650 + "&CreateTime=" + new Date().toISOString() + "&Screen=0&SSOKey=" + _0x41eaac + "&ApiId=" + _0x4e0b55 + "&LogIndex=11");
          }
        }
      }
      function _0xe750e0(_0x4b78d6) {
        var _0x56c280 = {
          'Accept': "application/json, text/javascript, text/plain"
        };
        var _0x1ed3c4 = new XMLHttpRequest();
        _0x1ed3c4.open("GET", _0x4b78d6, true);
        if (_0x56c280) {
          Object.keys(_0x56c280).forEach(function (_0xfb0c9f) {
            return _0x1ed3c4.setRequestHeader(_0xfb0c9f, _0x56c280[_0xfb0c9f]);
          });
        }
        _0x1ed3c4.timeout = 0x1388;
        _0x1ed3c4.onload = function () {};
        _0x1ed3c4.onerror = function () {};
        _0x1ed3c4.ontimeout = function () {};
        _0x1ed3c4.send();
      }
      function _0x5a2a73(_0x37a2be, _0x41dfed) {
        if (undefined === _0x41dfed) {
          _0x41dfed = null;
        }
        if (!_0x41dfed) {
          _0x41dfed = _0x529cd4();
        }
        _0x37a2be = _0x37a2be.replace(/[[\]]/g, "\\$&");
        var _0x45649d = new RegExp("[?&]" + _0x37a2be + '(=([^&#]*)|&|#|$)').exec(_0x41dfed);
        return _0x45649d ? _0x45649d[0x2] ? decodeURIComponent(_0x45649d[0x2].replace(/\+/g, " ")) : '' : null;
      }
      function _0x529cd4() {
        var _0x269e6b = window.location.href;
        var _0x254845 = this.GetLinkParameterByName("replaydata", _0x269e6b);
        if (!_0x254845) {
          return _0x269e6b;
        }
        var _0x55b10c = '0'.charCodeAt(0x0);
        var _0x3b4f63 = '9'.charCodeAt(0x0);
        var _0x1c6803 = 'a'.charCodeAt(0x0);
        var _0x49aa83 = 'z'.charCodeAt(0x0);
        var _0x2372c0 = 'A'.charCodeAt(0x0);
        var _0x395358 = 'Z'.charCodeAt(0x0);
        var _0x3e66e0 = '';
        for (var _0x15fc3d = 0x0; _0x15fc3d < _0x254845.length; _0x15fc3d++) {
          var _0x4d0d46 = _0x254845.charCodeAt(_0x15fc3d);
          if (_0x4d0d46 >= _0x55b10c && _0x4d0d46 <= _0x3b4f63) {
            _0x4d0d46 = _0x3b4f63 - (_0x4d0d46 - _0x55b10c);
            _0x3e66e0 += String.fromCharCode(_0x4d0d46);
          } else if (_0x4d0d46 >= _0x1c6803 && _0x4d0d46 <= _0x49aa83 && _0x15fc3d % 0x2 == 0x0) {
            _0x4d0d46 = _0x49aa83 - (_0x4d0d46 - _0x1c6803);
            _0x3e66e0 += String.fromCharCode(_0x4d0d46);
          } else if (_0x4d0d46 >= _0x2372c0 && _0x4d0d46 <= _0x395358 && _0x15fc3d % 0x3 == 0x0) {
            _0x4d0d46 = _0x395358 - (_0x4d0d46 - _0x2372c0);
            _0x3e66e0 += String.fromCharCode(_0x4d0d46);
          } else {
            _0x3e66e0 += String.fromCharCode(_0x4d0d46);
          }
        }
        var _0x5e268f = _0x269e6b.split("replaydata=" + _0x254845);
        _0x5e268f.join('');
        return _0x5e268f + atob(_0x3e66e0);
      }
      var _0x2feb79 = globalThis.__zipBundleLoader;
      var _0x2344e9;
      var _0x10a660;
      var _0x1700c4;
      var _0x58235a;
      var _0x209018;
      var _0x4bc3c2;
      var _0x261d49;
      var _0x3d9a20;
      var _0x147fb7;
      var _0x19130b;
      var _0x46eb09;
      var _0x443668;
      var _0x2ab518;
      var _0x5e34ec;
      var _0x16afd9;
      var _0x2f4055;
      var _0x5cb6f1;
      var _0x5dc9f3;
      if (globalThis.fflate && !_0x2feb79) {
        _0x2feb79 = new _0x3bd7de();
        globalThis.__zipBundleLoader = _0x2feb79;
        _0x2feb79.init();
      }
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "c933866GvpLKaZlVxLlOz0C", 'FeatureManagerComponent', undefined);
      var _0x9a1e4c = _0x55c899.ccclass;
      var _0x4a4d5e = _0x55c899.property;
      var _0x39c0b8;
      !function (_0x1842a2) {
        _0x1842a2[_0x1842a2.CommonMainBundle = 0x0] = "CommonMainBundle";
        _0x1842a2[_0x1842a2.CommonBundle = 0x1] = "CommonBundle";
        _0x1842a2[_0x1842a2.OtherBundle = 0x2] = "OtherBundle";
        _0x1842a2[_0x1842a2.DefaultLangBundle = 0x3] = "DefaultLangBundle";
        _0x1842a2[_0x1842a2.LangTextBundle = 0x4] = "LangTextBundle";
        _0x1842a2[_0x1842a2.GameBundle = 0x5] = "GameBundle";
      }(_0x39c0b8 || (_0x39c0b8 = {}));
      var _0x47e4ad;
      var _0x3d655f;
      !function (_0x3a4fb4) {
        _0x3a4fb4[_0x3a4fb4.None = 0x0] = "None";
        _0x3a4fb4[_0x3a4fb4.AutoPlaySettingPanel = 0x1] = "AutoPlaySettingPanel";
        _0x3a4fb4[_0x3a4fb4.AutoPlaySettingPanel_DFI = 0x2] = "AutoPlaySettingPanel_DFI";
        _0x3a4fb4[_0x3a4fb4.AutoPlaySettingPanel_DFIII = 0x3] = 'AutoPlaySettingPanel_DFIII';
        _0x3a4fb4[_0x3a4fb4.AutoPlaySettingPanel_BS = 0x4] = "AutoPlaySettingPanel_BS";
        _0x3a4fb4[_0x3a4fb4.AutoPlaySetting_AG2 = 0x5] = "AutoPlaySetting_AG2";
        _0x3a4fb4[_0x3a4fb4.AutoPlaySetting_FD = 0x6] = "AutoPlaySetting_FD";
        _0x3a4fb4[_0x3a4fb4.AutoPlaySettingPanel_MS = 0x7] = "AutoPlaySettingPanel_MS";
      }(_0x47e4ad || (_0x47e4ad = {}));
      (function (_0x5838bd) {
        _0x5838bd[_0x5838bd.None = 0x0] = "None";
        _0x5838bd[_0x5838bd.Dark = 0x1] = "Dark";
      })(_0x3d655f || (_0x3d655f = {}));
      _0x2344e9 = _0x9a1e4c("StyleSetting");
      _0x10a660 = _0x4a4d5e({
        'type': _0xc68c66,
        'tooltip': "是否有骰子造型"
      });
      _0x1700c4 = _0x4a4d5e({
        'type': _0xc68c66,
        'tooltip': "是否有萬聖造型"
      });
      _0x58235a = _0x4a4d5e({
        'type': _0xc68c66,
        'tooltip': "是否有聖誕造型"
      });
      _0x209018 = _0x4a4d5e({
        'type': _0xc68c66,
        'tooltip': '是否有OKBET廠商造型'
      });
      _0x4bc3c2 = _0x4a4d5e({
        'type': _0x5527ae(_0x3d655f),
        'tooltip': '系列'
      });
      _0x261d49 = function () {
        _0x7af141(this, "HasDice", _0x3d9a20, this);
        _0x7af141(this, "HasHolloween", _0x147fb7, this);
        _0x7af141(this, 'HasXmas', _0x19130b, this);
        _0x7af141(this, "HasOkbet", _0x46eb09, this);
        _0x7af141(this, "Series", _0x443668, this);
      };
      _0x3d9a20 = _0x4bec9c(_0x261d49.prototype, "HasDice", [_0x10a660], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x147fb7 = _0x4bec9c(_0x261d49.prototype, "HasHolloween", [_0x1700c4], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x19130b = _0x4bec9c(_0x261d49.prototype, "HasXmas", [_0x58235a], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x46eb09 = _0x4bec9c(_0x261d49.prototype, 'HasOkbet', [_0x209018], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x443668 = _0x4bec9c(_0x261d49.prototype, "Series", [_0x4bc3c2], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return _0x3d655f.None;
        }
      });
      _0x2ab518 = _0x9a1e4c("PlayTypeSetting");
      _0x5e34ec = _0x4a4d5e({
        'type': _0xc68c66,
        'tooltip': "Match"
      });
      _0x16afd9 = _0x4a4d5e({
        'type': _0xc68c66,
        'tooltip': "Break"
      });
      _0x2f4055 = function () {
        _0x7af141(this, 'Match', _0x5cb6f1, this);
        _0x7af141(this, "Break", _0x5dc9f3, this);
      };
      _0x5cb6f1 = _0x4bec9c(_0x2f4055.prototype, "Match", [_0x5e34ec], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x5dc9f3 = _0x4bec9c(_0x2f4055.prototype, 'Break', [_0x16afd9], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x361286._RF.pop();
      _0x361286._RF.push({}, "89025dALbBFj7AFo+6o3xYM", "SwipeScreen", undefined);
      _0x361286._RF.pop();
    }
  };
});
(function (_0x5c7de6) {
  _0x5c7de6('virtual:///prerequisite-imports/main', "chunks:///main.js");
})(function (_0x22a06a, _0x26cf22) {
  System.register(_0x22a06a, [_0x26cf22], function (_0x422077, _0x38e07d) {
    return {
      'setters': [function (_0x776fa) {
        var _0xb73dde = {};
        for (var _0x80cda4 in _0x776fa) {
          if (_0x80cda4 !== "default" && _0x80cda4 !== "__esModule") {
            _0xb73dde[_0x80cda4] = _0x776fa[_0x80cda4];
          }
        }
        _0x422077(_0xb73dde);
      }],
      'execute': function () {}
    };
  });
});