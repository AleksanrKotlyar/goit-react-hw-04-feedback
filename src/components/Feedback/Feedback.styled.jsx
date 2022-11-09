import styled from 'styled-components';

export const SectionContainer = styled.div`
  background: #00afff87;
  width: 400px;
  height: auto;
  border-radius: 10px;
  margin-top: 10px;
  padding: 20px;
  text-align: center;
`;

export const Title = styled.strong`
  display: inline-block;
  font-size: 32px;
  margin-bottom: 16px;
  color: #063352d1;
`;

export const ButtonList = styled('ul')`
  display: inline-flex;
  column-gap: 20px;
  justify-content: center;
`;

export const Button = styled('button')`
  color: #02121dd1;
  font-weight: 600;
  height: 30px;
  width: 70px;
  border: #0064ff70;
  border-radius: 5px;
  box-shadow: 2px 3px 10px 2px rgba(0, 0, 0, 0.26);
  font-size: 16px;
  cursor: pointer;
  :hover,
  focus {
    background-color: #0064ff70;
    border: #0064ff80;
  }
`;

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const StatisticsItem = styled('li')`
  color: #02121dd1;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.1;
`;

export const StatisticValue = styled.span`
  background: #66729252;
  color: #02121dd1;
  padding: 0 10px;
  border-radius: 5px;
`;

export const NotificationMsg = styled('p')`
  color: red;
  font-size: 20px;
`;
