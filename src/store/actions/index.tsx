export const change = (name: any, list: any, temp: any, time: any, history: any,) => ({
  type: 'CHANGE_CITY',
  payload: {
    name,
    list,
    temp,
    time,
    history,
  },
});
