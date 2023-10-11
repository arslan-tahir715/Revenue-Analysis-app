import {
  Box,
  Typography,
  styled
} from '@mui/material';
import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';

export const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <ChartContainer>
      <Typography variant="h6">
        {title}
      </Typography>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

export const ChartContainer = styled(Box)(() => ({
  margin: "2",
  padding: "2",
  boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
}));
