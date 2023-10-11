import {
  Box,
  Paper,
  Typography,
  styled,
} from '@mui/material';
import React from 'react';
import { productData } from '../dummyData';

export default function FeaturedInfo() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentMonthData = productData[currentMonth];
  const previousMonthData = productData[currentMonth - 1];

  const revenueChange = currentMonthData.TotalSales - currentMonthData.TotalCost;
  const salesChange = currentMonthData.TotalSales - previousMonthData.TotalSales;
  const costChange = currentMonthData.TotalCost - previousMonthData.TotalCost;

  const revenuePercentageChange = ((revenueChange - costChange) / costChange) * 100;
  const salesPercentageChange = ((salesChange - costChange) / costChange) * 100;
  const costPercentageChange = ((costChange - costChange) / costChange) * 100;

  const revenueSign = revenuePercentageChange > 0 ? '+' : '';
  const salesSign = salesPercentageChange > 0 ? '+' : '';
  const costSign = costPercentageChange > 0 ? '+' : '';

  return (
    <FeaturedBox>
      <FeaturedItem>
        <FeaturedTitle>Revenue</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>
            {revenueChange}$
          </FeaturedMoney>
          <FeaturedMoneyRate>
            {`${revenueSign}${Math.abs(Math.floor(revenuePercentageChange))}%`}
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Sales</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>
            {salesChange}$
          </FeaturedMoney>
          <FeaturedMoneyRate>
            {`${salesSign}${Math.abs(Math.floor(salesPercentageChange))}%`}
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Cost</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>
            {costChange}$
          </FeaturedMoney>
          <FeaturedMoneyRate>
            {`${costSign}${Math.abs(Math.floor(costPercentageChange))}%`}
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>
    </FeaturedBox>
  );
}

export const FeaturedBox = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
}));

export const FeaturedItem = styled(Paper)(({ theme }) => ({
  flex: 1,
  margin: '0px 20px',
  padding: theme.spacing(3),
  borderRadius: theme.spacing(1),
  cursor: 'pointer',
  boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
}));

export const FeaturedTitle = styled(Typography)(() => ({
  fontSize: '20px',
}));


export const FeaturedMoneyContainer = styled(Box)(() => ({
  margin: '10px 0px',
  display: 'flex',
  alignItems: 'center',
}));

export const FeaturedMoney = styled(Typography)(() => ({
  fontSize: '30px',
  fontWeight: 600,
}));

export const FeaturedMoneyRate = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: theme.spacing(2),
}));


export const FeaturedSub = styled(Typography)(() => ({
  fontSize: '15px',
  color: 'gray',
}));