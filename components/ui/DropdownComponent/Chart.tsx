import React from 'react';
import { StackedBarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const graphStyle = {
  marginVertical: 20,
  borderRadius: 10,
};

const chartConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
};

const data = {
  labels: ['Javascript, Medium'],
  legend: ['Correct', 'Incorrect'],
  data: [
    [1, 2],
    [0, 0],
  ],
  barColors: ['#86D5E5', '#FFDE42'],
};

const Chart = () => {
  return (
    <StackedBarChart
      style={graphStyle}
      data={data}
      width={screenWidth}
      height={300}
      chartConfig={chartConfig}
      hideLegend={false}
      withVerticalLabels={true}
      withHorizontalLabels={true}
    />
  );
};

export default Chart;
