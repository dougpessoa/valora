
import produce from 'immer';

const INITIAL_STATE = {
  data: [],
};

export default function history(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_HISTORY':
      return produce(state, draft => {
        const historyIndex = draft.data.map(history => { 
          return history.symbol 
        }).indexOf(action.data.symbol);

        if(historyIndex >= 0) {
          draft.data.splice(historyIndex, 1);
        }

        draft.data.unshift(action.data);
      });
    case 'REMOVE_FROM_HISTORY':
      return produce(state, draft => {
        const historyIndex = draft.data.map(history => { 
          return history.id 
        }).indexOf(action.id);

        if(historyIndex >= 0) {
          draft.data.splice(historyIndex, 1);
        }
      });
    default: 
      return state;
  }
}