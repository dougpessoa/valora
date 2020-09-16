import React, { useCallback, useEffect, useState } from 'react';
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';

import api from '../../services/api';
import { apikey } from '../../utils/api_key';
import { Loading } from './styles';

function Highchart() {
  const [options, setOptions] = useState({});
  const dispatch = useDispatch();
  const companies = useSelector(state => state.companies.data);

  const [isLoading, setIsLoading] = useState(true);

  const loadChart = useCallback(async (company) => {
    setIsLoading(true);

    const { symbol, company_name } = company;

    await api.get(`/historical-price-full/${symbol}?from=2020-07-01&apikey=${apikey}`)
      .then(response => {
        const info = response.data.historical;

        dispatch({
          type: 'ADD_HISTORY',
          data: {
            id: v4(),
            symbol,
            company_name,
            open: Number(info[0].open.toFixed(2)),
            close: Number(info[0].close.toFixed(2)),
            date: info[0].date,
          }
        });

        const data = [];
        for (let i = 0; i < info.length; i++) {
          const item = info[i];
          const open = item.open;
          const high = item.high;
          const low = item.low;
          const close = item.close;
          var date = new Date(`${item.date}T00:00:00+0000`);
          var milliseconds = date.getTime();

          data.push([milliseconds, open, high, low, close]);
        }

        data.sort();

        setOptions({
          title: {text: `Ações da ${symbol}`}, 
          rangeSelector: {
            enabled: false
          },
          series: [{
            name: symbol,
            type: 'candlestick',
            data: data,
            tooltip: {valueDecimals: 2}
          }]
        });
        
        setIsLoading(false);
      });
  }, [dispatch]);

  useEffect(() => {
    const company = companies[0];

    loadChart(company);
  }, [companies, loadChart]);

  if(isLoading) {
    return  <Loading>
              <div className="loading">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </Loading>
  }
  

  return <HighchartsReact
          highcharts={Highcharts}
          constructorType={"stockChart"}
          options={options}
        /> 
}

export default Highchart;