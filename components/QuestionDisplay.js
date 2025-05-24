import React from 'react';
// import { Question, AnswerOption } from '../types'; // Tipus eliminats

// React.FC i tipus de props eliminats
const QuestionDisplay = ({
  question,
  onAnswerSelect,
  selectedOptionIndex,
  questionNumber,
  totalQuestions,
}) => {
  const hasImageOptions = question.options.some(opt => opt.imageUrl);

  return (
    <div className="bg-slate-800 p-6 sm:p-8 rounded-xl shadow-2xl w-full transition-all duration-300 ease-in-out">
      <div className="mb-4 text-sm text-sky-400 font-semibold">
        {question.category} - Pregunta {questionNumber} de {totalQuestions}
      </div>
      <h2 className="text-xl sm:text-2xl font-bold mb-6 text-slate-100">{question.questionText}</h2>

      {question.imageUrl && (
        <div className="mb-6 flex justify-center">
          <img
            src={question.imageUrl}
            alt="Pregunta visual"
            className="rounded-lg shadow-md max-w-full h-auto max-h-60 sm:max-h-72 object-contain"
          />
        </div>
      )}

      <div className={hasImageOptions ? "grid grid-cols-2 gap-3 sm:gap-4" : "space-y-3 sm:space-y-4"}>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerSelect(question.id, index)}
            aria-label={`Opció ${option.text || index + 1}`}
            className={`
              w-full text-left rounded-lg transition-all duration-200 ease-in-out border-2 border-transparent
              focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-75
              ${
                selectedOptionIndex === index
                  ? 'bg-sky-600 text-white shadow-lg scale-105 border-sky-400'
                  : 'bg-slate-700 hover:bg-slate-600 text-slate-200 shadow-sm'
              }
              ${hasImageOptions ? 'p-2 sm:p-3 flex flex-col items-center justify-center aspect-square' : 'p-4'}
            `}
          >
            {option.imageUrl ? (
              <>
                <img 
                  src={option.imageUrl} 
                  alt={option.text || `Opció de resposta ${index + 1}`}
                  className="w-full h-auto object-contain rounded-md mb-2 max-h-32 sm:max-h-40"
                  loading="lazy"
                />
                <span className="font-medium text-sm sm:text-base">{option.text}</span>
              </>
            ) : (
              <>
                <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {option.text}
              </>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionDisplay;