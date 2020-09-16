
import produce from 'immer';

const INITIAL_STATE = {
  data: [],
};

function calculateNewPrice(newStock, newPrice, oldStock, oldPrice) {
  return ((oldStock * oldPrice) + (newStock * newPrice)) / (newStock + oldStock);
}
 
export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TO_WALLET':
      return produce(state, draft => {
        const walletIndex = draft.data.map(wallet => { 
          return wallet.symbol 
        }).indexOf(action.data.symbol);

        if(walletIndex >= 0) {
          const newStock = 1;
          const newPrice = Number(action.data.price);
          const { stock: oldStock, price: oldPrice } = draft.data[walletIndex];
          
          const result = calculateNewPrice(newStock, newPrice, oldStock, oldPrice);

          draft.data[walletIndex].stock += newStock;
          draft.data[walletIndex].price = result.toFixed(2);
        } else {
          draft.data.push(action.data);
        }
      });
    case 'BUY_STOCK':
      return produce(state, draft => {
        const walletIndex = draft.data.map(wallet => { 
          return wallet.id 
        }).indexOf(action.data.id);

        const newStock = Number(action.data.stock);
        const newPrice = Number(action.data.price);
        const { stock: oldStock, price: oldPrice } = draft.data[walletIndex];
        
        const result = calculateNewPrice(newStock, newPrice, oldStock, oldPrice);

        draft.data[walletIndex].stock += newStock;
        draft.data[walletIndex].price = result.toFixed(2);
      });
    case 'SELL_STOCK':
      return produce(state, draft => {
        const walletIndex = draft.data.map(wallet => { 
          return wallet.id 
        }).indexOf(action.data.id);

        draft.data[walletIndex].stock -= Number(action.data.stock);
      });
    default: 
      return state;
  }
}