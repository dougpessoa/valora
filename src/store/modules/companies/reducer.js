import produce from 'immer';

const INITIAL_STATE = {
  data: [
    {
      id: 'b3509e34-585d-45e7-b438-d2fc94cb9ff0',
      company_name: "Alphabet Inc.",
      symbol: 'GOOG',
      price: 228.00
    },
    {
      id: '91498f77-0de2-4777-b1a4-ce9fd9bdc0df',
      name: "Amazon.com, Inc",
      symbol: 'AMNZ',
      aperture: 227.27,
      price: 228.00
    },
    
  ],
};

export default function companies(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_COMPANY':
      return produce(state, draft => {
        const companyIndex = draft.data.map(history => { 
          return history.symbol 
        }).indexOf(action.data.symbol);

        if(companyIndex >= 0) {
          draft.data.splice(companyIndex, 1);
        }

        draft.data.unshift(action.data);
      });
    default: 
      return state;
  }
}