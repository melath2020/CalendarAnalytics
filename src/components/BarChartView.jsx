import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const BarChartView = ({ data }) => {
  const chartData = data.map((item) => {
    const key = Object.keys(item)[0];
    return {
      user: key,
      value: item[key],
    };
  });

  return (
    <BarChart width={400} height={300} data={chartData}>
      <XAxis dataKey='user' />
      <YAxis />
      <Tooltip />
      <Bar dataKey='value' fill='#8884d8' />
    </BarChart>
  );
};

export default BarChartView;
