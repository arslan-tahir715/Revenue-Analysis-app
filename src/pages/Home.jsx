import {
  Box,
  styled
} from '@mui/material';
import { Chart } from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import { productData } from "../dummyData";

export const Featured = styled(Box)({
  flex: 1,
});

export default function Home() {
  return (
      <Featured>
        <FeaturedInfo />
        <Chart data={productData} title="Product Sales Analytics" grid dataKey="Sales" />
        <Chart data={productData} title="Product Order Analytics" grid dataKey="Orders" />
      </Featured>
  );
}