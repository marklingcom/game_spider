import type DatabaseManager from '../../models/index.js';
import type { Config } from '../../utils/config.js';
import type { GameSession, IGameApi, ISpinRepository } from '../../core/types.js';
import { JiliApi } from '../../spider/jili/jili_api.js';
import { JiliDb } from '../../spider/jili/jili_db.js';

export function createJiliApi(config: Config, session: GameSession): IGameApi {
  const api = new JiliApi({ config, spiderData: session });
  return {
    get isConnected() {
      return api.isConnected;
    },
    requestGameInfo: () => api.requestGameInfo(),
    connectRealtime: () => api.doWebSocket(),
    spin: (bet, buyBouns, extra) => api.spin(bet, buyBouns, extra),
  };
}

export function createJiliRepository(db: DatabaseManager, config: Config): ISpinRepository {
  const repository = new JiliDb({ db, config });
  return {
    get isStop() {
      return repository.isStop;
    },
    init: (name) => repository.init(name),
    saveGameInfo: async (data, gaiaResponseData, session) => {
      await repository.saveGameInfo(data, gaiaResponseData, session);
    },
    saveSpin: (payload) =>
      repository.saveGaiaResponseData({
        spinResBuffer: payload.spinResBuffer,
        spinReqData: payload.spinReqData,
        spiderData: payload.session,
      }),
  };
}
