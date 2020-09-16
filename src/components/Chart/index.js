import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid'; 
import Swal from 'sweetalert2';
import { Toast } from '../../utils/toast';

import api from '../../services/api';
import { apikey } from '../../utils/api_key';

import Highchart from '../Highchart';

import { 
  Container,
  Head,
  SearchArea,
  SearchForm,
  SearchIcon,
  AddIcon,
  Buttons,
} from './styles';

import { Button } from '../../styles/dashboardStyles';

function Chart() {
  const [company, setCompany] = useState({});
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const toInputUppercase = useCallback((e) => {
    e.target.value = ("" + e.target.value).toUpperCase();
  }, []);

  const search = useCallback( async (event) => {
    event.preventDefault();
    
    await api.get(`/profile/${query}?apikey=${apikey}`)
    .then(response => {
      const data = response.data;

      if(data.length === 0) {
        Swal.fire(
          'Atenção', 
          'Não há informações sobre a empresa pesquisada', 
          'warning'
        );
        return;
      }

      const company_name = data[0].companyName;
      const price = Number(data[0].price);

      const date = new Date().toISOString().slice(0,10);

      const company_info = {
        id: v4(),
        symbol: query,
        company_name,
        price,
        date,
        field: 0
      };

      setCompany(company_info);

      dispatch({
        type: 'ADD_COMPANY',
        data: company_info
      });
    });
  }, [query, dispatch]);

  const addToWallet = useCallback(() => {
    if(!company.id) {
      Swal.fire(
        'Atenção', 
        'Faça uma pesquisa para obter as informações para sua carteira', 
        'warning'
      );
      return;
    }

    dispatch({
      type: 'ADD_TO_WALLET',
      data: {
        ...company,
        stock: 0
      }
    });

    Toast.fire({
      icon: 'success',
      title: 'Empresa adicionada a carteira'
    })

  }, [company, dispatch]);

  return (
    <Container>
      <Head>
        <h2>gráfico de preços</h2>

        <SearchArea>
          <SearchForm onSubmit={search}>
            <input 
              type="text" 
              placeholder="pesquisar..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onInput={(e) => toInputUppercase(e)}
            />

            <button type="submit">
              <SearchIcon />
            </button>
          </SearchForm>

          <Button onClick={addToWallet} className="info">
            <AddIcon />
          </Button>
        </SearchArea>

        <Buttons>
          <Button strong className="primary">D</Button>
          <Button strong className="primary">S</Button>
          <Button strong className="primary">M</Button>
        </Buttons>
        
      </Head>

      <Highchart />
    </Container>
  );
}

export default Chart;