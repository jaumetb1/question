
import React from 'react';

interface ResultsDisplayProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ score, totalQuestions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  let message = "";
  let messageColor = "text-sky-400";

  if (percentage >= 80) {
    message = "Excel·lent! Ets molt perspicaç.";
    messageColor = "text-green-400";
  } else if (percentage >= 60) {
    message = "Bona feina! Tens una ment àgil.";
    messageColor = "text-yellow-400";
  } else if (percentage >= 40) {
    message = "Continua practicant! Pots millorar.";
    messageColor = "text-orange-400";
  } else {
    message = "Bon intent. Cada repte és una oportunitat d'aprenentatge!";
    messageColor = "text-red-400";
  }

  return (
    <div className="bg-slate-800 p-6 sm:p-10 rounded-xl shadow-2xl w-full text-center transition-opacity duration-500 ease-in-out">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-100">Resultats del Qüestionari</h2>
      <p className={`text-xl sm:text-2xl mb-2 ${messageColor}`}>
        Has encertat <span className="font-bold">{score}</span> de <span className="font-bold">{totalQuestions}</span> preguntes.
      </p>
      <p className={`text-2xl sm:text-3xl font-bold mb-6 ${messageColor}`}>{percentage}%</p>
      <p className="text-lg sm:text-xl mb-8 text-slate-300">{message}</p>
      <button
        onClick={onRestart}
        className="w-full sm:w-auto bg-sky-600 hover:bg-sky-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md
                   transition-all duration-200 ease-in-out transform hover:scale-105
                   focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-75"
      >
        Tornar a Intentar
      </button>
    </div>
  );
};

export default ResultsDisplay;