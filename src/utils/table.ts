import jiliSlotConfig from '../../config/awc-JILI-SLOT.json' with { type: 'json' };

export const getTableGameName = (tableName: string) => {
  const tableNameList = tableName.split('_');
  return tableNameList[2];
};

export const getFullGameName = (name: string) => {
  const gameConfig = jiliSlotConfig.find((item) => item.name === name);
  return gameConfig?.fullName || '';
};
