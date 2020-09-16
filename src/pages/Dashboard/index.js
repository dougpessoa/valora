import React from 'react';

import { Container } from './styles';

import Chart from '../../components/Chart';
import History from '../../components/History';
import MyWallet from '../../components/MyWallet';


function Dashboard() {
  return (
    <Container>
     <Chart />
     <History />
     <MyWallet />
    </Container>
  );
}

export default Dashboard;