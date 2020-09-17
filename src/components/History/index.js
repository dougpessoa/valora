import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Toast } from '../../utils/toast';

import { 
  Container,
  Company,
  Value,
  ArrowDownIcon
} from './styles';

import {
  Head,
  Button,
  List,
  Item,
  Buttons,
  EmptyList
} from '../../styles/dashboardStyles';

function History() {
  const histories = useSelector(state => state.history.data);
  const dispatch = useDispatch();

  const addToWallet = useCallback((symbol) => {
    const historyIndex = histories.map(history => { 
      return history.symbol 
    }).indexOf(symbol);

    const company = histories[historyIndex];

    dispatch({
      type: 'ADD_TO_WALLET',
      data: {
        ...company,
        stock: 0,
        field: 0,
        price: company.close
      }
    });

    Toast.fire({
      icon: 'success',
      title: 'Empresa adicionada a carteira'
    })
  }, [histories, dispatch]);

  const removeFromHistory = useCallback((id) => {
    dispatch({
      type: 'REMOVE_FROM_HISTORY',
      id
    });
  }, [dispatch]);

  return (
    <Container >
      <Head>
        <h2>buscas recentes</h2>

        <Button className="info">
          <ArrowDownIcon />
        </Button>
      </Head>
      { histories.length === 0 
        ? <EmptyList>No momento não há histórico</EmptyList> 
        : 
        <List>
          {histories.slice(0, 5).map(history => (
            <Item key={history.id}>
              <Company>{history.company_name} ({history.symbol})</Company>
              <Value>
                <h5>R$ {history.open} </h5>
                <span>Abertura</span>
              </Value>
              <Value>
                <h5>R$ {history.close}</h5> 
                <span>Fechamento</span>
              </Value>
              <Buttons>
                <Button onClick={() => addToWallet(history.symbol)} className="primary">Adicionar</Button>
                <Button onClick={() => removeFromHistory(history.id)} className="danger">Remover</Button>
              </Buttons>
            </Item>
          ))}        
        </List>
      }
    </Container>
  );
}

export default History;