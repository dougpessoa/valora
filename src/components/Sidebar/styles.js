import styled, { css } from 'styled-components';

import { 
  BiMenu, 
  BiSearchAlt2, 
  HiHome, 
  RiFileChartFill,
  AiOutlineAreaChart,
  ImDrawer2,
  FaFileImage,
  FaCog,
  HiUsers,
  BiCalendarAlt
} from '../../styles/icons';


export const Container = styled.div`
  width: 70px;
  height: 100vh;
  min-height: 700px;

  background: #e0e0e0;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 3;


`;

export const HamburguerMenu = styled.div`
  width: 70px;
  height: 70px;
  background: #54a0ff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HamburguerMenuIcon = styled(BiMenu)`
  width: 40px;
  height: 40px;
  cursor: pointer;
  color: white;
  transition: .6s;

  &:hover{
    color: #ee5253;
  }
`;

const iconsCSS = css`
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin-top: 30px;
  color: #565656;
  transition: .6s;

  &:hover {
    color: #54a0ff;
  }
`;

export const SearchIcon = styled(BiSearchAlt2)` ${iconsCSS} `;

export const HomeIcon = styled(HiHome)` ${iconsCSS} `;

export const DrawerIcon = styled(ImDrawer2)` ${iconsCSS} `;

export const FileChartIcon = styled(RiFileChartFill)` ${iconsCSS} `;

export const ChartIcon = styled(AiOutlineAreaChart)` ${iconsCSS} `;

export const FileIcon = styled(FaFileImage)` ${iconsCSS} `;

export const CalendarIcon = styled(BiCalendarAlt)` ${iconsCSS} `;

export const UserIcon = styled(HiUsers)` ${iconsCSS} `;

export const CogIcon = styled(FaCog)` ${iconsCSS} `;