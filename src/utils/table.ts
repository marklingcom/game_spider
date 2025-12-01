export const getTableGameName = (tableName: string) => {
  const tableNameList = tableName.split('_');
  return tableNameList[2];
};
