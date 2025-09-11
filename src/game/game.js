const AWC = require("./awc");
const Huidu = require("./huidu");

function getGameInfo(cfg) {
  let url;
  let err;

  switch (cfg.config.form) {
    case "huidu":
      console.log("抓取来源 huidu");
      [url, err] = getGameUrl(cfg.huiduConfig);
      break;
    case "awc":
      console.log("抓取来源 awc");
      const awc = new AWC("JILI", "SLOT");
      [url, err] = awc.getGameUrlForGameName(cfg.betConfig.gameName);
      break;
    default:
      err = new Error("未知的数据源");
  }

  if (err) {
    throw new Error(`获取游戏URL失败: ${err.message}`);
  }

  if (!url) {
    throw new Error("获取游戏URL失败: URL为空");
  }

  const ret = getJiliFromApi(cfg.config.form, url);
  if (!ret) {
    throw new Error("返回结果为空");
  }
  if (!ret.token) {
    throw new Error("获取token失败, token为空");
  }

  return ret;
}

function getGameUrl(huiduConfig) {
  try {
    const huidu = new Huidu(huiduConfig);
    return [huidu.getGameUrl(), null];
  } catch (error) {
    return [null, error];
  }
}

function getJiliFromApi(form, url) {
  try {
    if (form === "huidu") {
      const Huidu = require("./huidu");
      const huidu = new Huidu();
      return huidu.getJiliFromUrl(url);
    } else if (form === "awc") {
      const AWC = require("./awc");
      const awc = new AWC("JILI", "SLOT");
      return awc.getJiliFromUrl(url);
    }
    return null;
  } catch (error) {
    console.error("从API获取Jili数据失败:", error);
    return null;
  }
}

module.exports = {
  getGameInfo,
  getGameUrl,
  getJiliFromApi,
};
