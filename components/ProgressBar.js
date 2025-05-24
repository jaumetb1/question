import React from 'react';

// React.FC i tipus de props eliminats
const ProgressBar = ({ current, total }) => {
  const percentage = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="w-full bg-slate-700 rounded-full h-2.5 mb-6 shadow-inner">
      <div
        className="bg-sky-500 h-2.5 rounded-full transition-all duration-300 ease-out"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;