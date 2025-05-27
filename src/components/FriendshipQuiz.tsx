import React, { useState } from 'react';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What's my favorite color?",
    options: ["Blue", "Green", "Red", "Purple"],
    answer: "Red"
  },
  {
    id: 2,
    question: "What's our favorite activity to do together?",
    options: ["Video calls", "Shopping", "Trying new restaurants", "Late night talks"],
    answer: "Trying new restaurants"
  },
  {
    id: 3,
    question: "What's my go-to comfort food?",
    options: ["Ice cream", "Pizza", "Biriyani", "Mac & cheese"],
    answer: "Biriyani"
  }
];

const FriendshipQuiz: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  
  const handleAnswerChange = (questionId: number, option: string) => {
    setAnswers({
      ...answers,
      [questionId]: option
    });
  };
  
  const handleSubmit = () => {
    let correctAnswers = 0;
    
    quizQuestions.forEach(question => {
      if (answers[question.id] === question.answer) {
        correctAnswers++;
      }
    });
    
    setScore(correctAnswers);
    setIsSubmitted(true);
  };
  
  return (
    <section className="py-16 bg-friendship-pink-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 dancing-font">How Well Do You Know Your Bestie?</h2>
            <p className="text-center text-gray-600 mb-8">Take this fun quiz to test your friendship knowledge!</p>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="text-4xl font-bold mb-4 text-friendship-pink-600">{score}/{quizQuestions.length}</div>
                <p className="text-xl mb-6">
                  {score === quizQuestions.length ? 
                    "Amazing! You know your bestie perfectly! 🎉" :
                    score > quizQuestions.length / 2 ?
                    "Great job! You know your bestie well!" :
                    "You still have some learning to do about your bestie!"
                  }
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-friendship-pink-500 hover:bg-friendship-pink-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-6">
                  {quizQuestions.map((question) => (
                    <div key={question.id} className="quiz-question">
                      <p className="font-medium text-gray-700 mb-3">{question.id}. {question.question}</p>
                      <div className="space-y-2">
                        {question.options.map((option, index) => (
                          <div key={index} className="flex items-center">
                            <input 
                              type="radio" 
                              id={`q${question.id}-${index}`} 
                              name={`q${question.id}`} 
                              className="mr-2"
                              checked={answers[question.id] === option}
                              onChange={() => handleAnswerChange(question.id, option)}
                            />
                            <label htmlFor={`q${question.id}-${index}`} className="text-gray-600">{option}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 text-center">
                  <button 
                    onClick={handleSubmit}
                    className="bg-friendship-pink-500 hover:bg-friendship-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition"
                  >
                    Submit Answers
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendshipQuiz;