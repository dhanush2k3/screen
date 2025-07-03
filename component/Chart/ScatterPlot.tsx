import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Circle, Line, Text as SvgText, G } from 'react-native-svg';

interface DataPoint {
  x: number;
  y: number;
}

interface ScatterPlotProps {
  data?: DataPoint[];
  width?: number;
  height?: number;
  padding?: number;
  dotColor?: string;
  dotRadius?: number;
  axisColor?: string;
  textColor?: string;
}

const ScatterPlot: React.FC<ScatterPlotProps> = ({
  data = [
    { x: 5, y: 30 },
    { x: 5, y: 10 },
    { x: 10, y: 15 },
    { x: 15, y: 20 },
    { x: 15, y: 35 },
    { x: 20, y: 40 },
    { x: 20, y: 25 },
    { x: 25, y: 35 },
    { x: 35, y: 30 },
  ],
  width = Dimensions.get('window').width - 40,
  height = 300,
  padding = 50,
  dotColor = '#1e3a8a',
  dotRadius = 4,
  axisColor = '#6b7280',
  textColor = '#374151',
}) => {
  // Calculate chart dimensions
  const chartWidth = width - 2 * padding;
  const chartHeight = height - 2 * padding;

  // Find data ranges
  const xValues = data.map(d => d.x);
  const yValues = data.map(d => d.y);
  const xMin = Math.min(...xValues);
  const xMax = Math.max(...xValues);
  const yMin = Math.min(...yValues);
  const yMax = Math.max(...yValues);

  // Add some padding to the ranges
  const xRange = xMax - xMin;
  const yRange = yMax - yMin;
  const xPadding = xRange * 0.1;
  const yPadding = yRange * 0.1;

  const xScale = (x: number) =>
    padding + ((x - (xMin - xPadding)) / (xRange + 2 * xPadding)) * chartWidth;

  const yScale = (y: number) =>
    height -
    padding -
    ((y - (yMin - yPadding)) / (yRange + 2 * yPadding)) * chartHeight;

  // Generate axis ticks
  const xTicks = [0, 5, 10, 15, 20, 25, 30, 35, 40];
  const yTicks = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45];

  return (
    <View style={styles.container}>
      <Svg width={width} height={height}>
        {/* X-axis */}
        <Line
          x1={padding}
          y1={height - padding}
          x2={width - padding}
          y2={height - padding}
          stroke={axisColor}
          strokeWidth={1}
        />

        {/* Y-axis */}
        <Line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={height - padding}
          stroke={axisColor}
          strokeWidth={1}
        />

        {/* X-axis ticks and labels */}
        {xTicks.map((tick, index) => {
          const x = xScale(tick);
          if (x >= padding && x <= width - padding) {
            return (
              <G key={`x-tick-${index}`}>
                <Line
                  x1={x}
                  y1={height - padding}
                  x2={x}
                  y2={height - padding + 5}
                  stroke={axisColor}
                  strokeWidth={1}
                />
                <SvgText
                  x={x}
                  y={height - padding + 18}
                  textAnchor="middle"
                  fontSize={12}
                  fill={textColor}
                >
                  {tick}
                </SvgText>
              </G>
            );
          }
          return null;
        })}

        {/* Y-axis ticks and labels */}
        {yTicks.map((tick, index) => {
          const y = yScale(tick);
          if (y >= padding && y <= height - padding) {
            return (
              <G key={`y-tick-${index}`}>
                <Line
                  x1={padding - 5}
                  y1={y}
                  x2={padding}
                  y2={y}
                  stroke={axisColor}
                  strokeWidth={1}
                />
                <SvgText
                  x={padding - 10}
                  y={y + 4}
                  textAnchor="end"
                  fontSize={12}
                  fill={textColor}
                >
                  {tick}
                </SvgText>
              </G>
            );
          }
          return null;
        })}

        {/* Data points */}
        {data.map((point, index) => (
          <Circle
            key={`point-${index}`}
            cx={xScale(point.x)}
            cy={yScale(point.y)}
            r={dotRadius}
            fill={dotColor}
            stroke="#ffffff"
            strokeWidth={1}
          />
        ))}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
  },
});

export default ScatterPlot;
