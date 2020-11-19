let initialState = {
      name: 'Название города',
      list: [
          {
              main: {
                  temp: 0,
              },  
              weather: [{
                  description: 'какая погода',
                  main: 'weather state',
              }]
          },
      ],
      history: [],
    };


export default (state = initialState, action: any) => {
    switch (action.type) {
        case 'CHANGE_CITY': {
            return {    
                ...state,
                name: action.payload.name,
                list: action.payload.list,
                temp: action.payload.temp,
                time: action.payload.time,
                history: [...state.history, action.payload.history],
            };
          }
        default:
            return state;
    }
};
