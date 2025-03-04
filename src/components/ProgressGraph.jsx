import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function ProgressGraph({ data, dataKey, stroke, yAxisLabel }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="attempt" label={{ value: 'Quiz Attempts', position: 'insideBottomRight', offset: -5 }} domain={['dataMin', 'dataMax']} />
        <YAxis label={{ value: yAxisLabel, angle: -90, position: 'insideLeft' }} domain={['auto', 'auto']} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={dataKey} name={dataKey === 'score' ? 'Your Score' : 'Your Correct Answers'} stroke={stroke} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default ProgressGraph;
