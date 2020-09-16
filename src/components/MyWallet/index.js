import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Swal from 'sweetalert2';
import { Toast } from '../../utils/toast';

import { 
  Container,
  Value,
  Company,
  NumberField,
  AddIcon,
} from './styles';

import {
  Head,
  Button,
  List,
  Item,
  Buttons,
  EmptyList
} from '../../styles/dashboardStyles';

function MyWallet() {
  const [amount, setAmount] = useState([]);
  const walletList = useSelector(state => state.wallet.data);
  const dispatch = useDispatch();

  const walletIndex = useCallback((id) => {
    return amount.map(wallet => { 
      return wallet.id 
    }).indexOf(id);
  }, [amount]); 

  const putAmountInStock = useCallback((stock, id) => {
    const index = walletIndex(id);

    if(index >= 0) {
      amount[index].stock = stock;
    } else {
      amount.push({
        id,
        stock
      });
    }

    setAmount(amount);
  }, [amount, walletIndex]);

  const buyStock = useCallback((id, symbol, price) => {
    const index = walletIndex(id);

    const stock = amount[index].stock;

    dispatch({
      type: 'BUY_STOCK',
      data: {
        id,
        stock,
        price
      }
    });

    Toast.fire({
      icon: 'success',
      title: `Você comprou mais ${stock} ${stock > 1 ? 'ações' : 'ação'} de ${symbol}.`
    });
  }, [dispatch, walletIndex, amount]);
 
  const sellStock = useCallback((id, symbol) => {
    const walletListIndex = walletList.map(wallet => { 
      return wallet.id 
    }).indexOf(id);

    const AmountIndex = walletIndex(id);

    const stockToSell = amount[AmountIndex].stock;
    const actualStock = walletList[walletListIndex].stock;

    if(stockToSell > actualStock) {
      Swal.fire(
        'Atenção', 
        'Você não tem ações suficientes para essa venda', 
        'warning'
      );
      return;
    }
    
    dispatch({
      type: 'SELL_STOCK',
      data: {
        id,
        stock: stockToSell
      }
    });

    Toast.fire({
      icon: 'success',
      title: `Você vendeu ${stockToSell} ${stockToSell > 1 ? 'ações' : 'ação'} de ${symbol}.`
    });
  }, [dispatch, walletList, walletIndex, amount]);

  const formatDate = useCallback((date) => {
    date = new Date(date);

    const formated = (new Intl.DateTimeFormat('pt-br')).format(date);

    return formated;
  }, []);
 
  return (
    <Container >
      <Head>
        <h2>minha carteira</h2>

        <Button className="info">
          <AddIcon />
        </Button>
      </Head>
      { walletList.length === 0 
        ? <EmptyList>Não há dados na sua carteira</EmptyList> 
        : 
        <List>
          {walletList.map(wallet => (
            <Item key={wallet.id}>
              <Company>{wallet.symbol}</Company>
              
              <Value>
                <h5>ações</h5>
                <span>{wallet.stock} </span>
              </Value>
              <Value>
                <h5>preço</h5>
                <span>R$ {wallet.price}</span>
              </Value>
              <Value>
                <h5>data</h5>
                <span>{formatDate(wallet.date)} </span>
              </Value>

              <NumberField 
                type="number" 
                min={0} 
                defaultValue={wallet.field}
                onChange={(e) => putAmountInStock(e.target.value, wallet.id)} 
              />

              <Buttons>
                <Button 
                  onClick={() => buyStock(
                    wallet.id, 
                    wallet.symbol, 
                    wallet.price
                  )} 
                  className="primary"
                >
                  Compra
                </Button>
                <Button 
                  onClick={() => sellStock(wallet.id, wallet.symbol)}
                  className="danger"
                >
                  Venda
                </Button>
              </Buttons>
            </Item>
          ))}        
        </List>
      }
    </Container>
  );
}

export default MyWallet;