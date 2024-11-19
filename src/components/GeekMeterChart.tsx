import React from 'react';
import { GeekMeter } from '../types';

interface GeekMeterChartProps {
  data: GeekMeter[];
}

export default function GeekMeterChart({ data }: GeekMeterChartProps) {
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-medium text-purple-300">Geek Meter</h4>
      <div className="space-y-2">
        {data.map((item) => (
          <div key={item.category} className="space-y-1">
            <div className="flex justify-between text-xs text-gray-400">
              <span>{item.category}</span>
              <span>{item.level}%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500"
                style={{ width: `${item.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}