import React, { useState, useCallback, useEffect } from 'react';
import { QUIZ_QUESTIONS } from './constants.js';
// Les importacions de tipus com Question, QuizStatus, UserAnswers s'eliminen ja que són per a TypeScript
import QuestionDisplay from './components/QuestionDisplay.js';
import ResultsDisplay from './components/ResultsDisplay.js';
import ProgressBar from './components/ProgressBar.js';

// S'elimina : React.FC
const App = () => {
  // S'eliminen les anotacions de tipus per useState, ex: useState<Question[]> -> useState([])
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizStatus, setQuizStatus] = useState('NOT_STARTED'); // QuizStatus.NotStarted -> 'NOT_STARTED'
  const [score, setScore] = useState(0);

  useEffect(() => {
    setQuestions(QUIZ_QUESTIONS);
  }, []);

  const startQuiz = useCallback(() => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setScore(0);
    setQuizStatus('IN_PROGRESS'); // QuizStatus.InProgress -> 'IN_PROGRESS'
  }, []);

  const handleAnswerSelect = useCallback((questionId, optionIndex) => {
    setUserAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: optionIndex,
    }));
  }, []);

  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      let currentScore = 0;
      questions.forEach(question => {
        const selectedOptionIndex = userAnswers[question.id];
        if (selectedOptionIndex !== undefined && question.options[selectedOptionIndex]?.isCorrect) {
          currentScore++;
        }
      });
      setScore(currentScore);
      setQuizStatus('COMPLETED'); // QuizStatus.Completed -> 'COMPLETED'
    }
  }, [currentQuestionIndex, questions, userAnswers]);

  const currentQuestion = questions[currentQuestionIndex];

  if (questions.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-slate-300">Carregant preguntes...</p>
      </div>
    );
  }
  
  const commonButtonStyles = `
    w-full sm:w-auto bg-sky-600 hover:bg-sky-500 text-white font-semibold py-3 px-10 rounded-lg shadow-md
    transition-all duration-200 ease-in-out transform hover:scale-105
    focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-75 text-lg
  `;

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[calc(100vh-2rem)]">
      <header className="mb-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
          Reptes del Jaume
        </h1>
      </header>

      {quizStatus === 'NOT_STARTED' && (
        <div className="bg-slate-800 p-8 sm:p-12 rounded-xl shadow-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-100">Posa a prova el teu enginy</h2>
          <p className="text-slate-300 mb-8 text-lg">
            Respon {questions.length} preguntes de diferents categories i descobreix la teva agilitat mental.
          </p>
          <button onClick={startQuiz} className={commonButtonStyles}>
            Començar Qüestionari
          </button>
        </div>
      )}

      {quizStatus === 'IN_PROGRESS' && currentQuestion && (
        <div className="w-full max-w-xl">
          <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
          <QuestionDisplay
            question={currentQuestion}
            onAnswerSelect={handleAnswerSelect}
            selectedOptionIndex={userAnswers[currentQuestion.id]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
          />
          <div className="mt-8 flex justify-end">
            <button
              onClick={handleNextQuestion}
              disabled={userAnswers[currentQuestion.id] === undefined}
              className={`${commonButtonStyles} ${userAnswers[currentQuestion.id] === undefined ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {currentQuestionIndex < questions.length - 1 ? 'Següent Pregunta' : 'Finalitzar Qüestionari'}
            </button>
          </div>
        </div>
      )}

      {quizStatus === 'COMPLETED' && (
        <ResultsDisplay
          score={score}
          totalQuestions={questions.length}
          onRestart={startQuiz}
        />
      )}
       <footer className="mt-12 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} App. Dissenyada per a tauletes JTB.</p>
      </footer>
    </div>
  );
};

export default App;