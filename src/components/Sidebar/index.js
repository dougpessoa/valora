import React from 'react';
import ReactTooltip from 'react-tooltip';

import { 
  Container,
  HamburguerMenu,
  HamburguerMenuIcon,
  SearchIcon,
  HomeIcon,
  FileChartIcon,
  ChartIcon,
  DrawerIcon,
  CalendarIcon,
  FileIcon,
  UserIcon,
  CogIcon
} from './styles';

function Sidebar() {
  return (
    <Container>
      <HamburguerMenu>
        <HamburguerMenuIcon />
      </HamburguerMenu>

      <SearchIcon data-for="tooltip" data-tip="Pesquisar" />

      <HomeIcon data-for="tooltip" data-tip="Início" />

      <FileChartIcon data-for="tooltip" data-tip="Gerar arquivos com gráficos" />

      <ChartIcon data-for="tooltip" data-tip="Gráficos" />

      <DrawerIcon data-for="tooltip" data-tip="Salvar" />

      <FileIcon data-for="tooltip" data-tip="Gerar arquivos" />

      <CalendarIcon data-for="tooltip" data-tip="Calendário" />

      <UserIcon data-for="tooltip" data-tip="Usuários" />

      <CogIcon data-for="tooltip" data-tip="Configurações" />

      <ReactTooltip
        id="tooltip"
      />
    </Container>
  );
}

export default Sidebar;